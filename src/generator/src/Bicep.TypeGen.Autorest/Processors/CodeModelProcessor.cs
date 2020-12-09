// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using System.Text.RegularExpressions;
using AutoRest.Core.Logging;
using Azure.Bicep.Types.Concrete;
using Azure.Bicep.TypeGen.Autorest.Models;

namespace Azure.Bicep.TypeGen.Autorest.Processors
{
    public static class CodeModelProcessor
    {
        public static void LogMessage(string message)
            => Logger.Instance.Log(new LogMessage(Category.Information, message));

        public static void LogWarning(string message)
            => Logger.Instance.Log(new LogMessage(Category.Warning, message));

        public static void LogError(string message)
            => Logger.Instance.Log(new LogMessage(Category.Error, message));

        public static readonly Regex parentScopePrefix = new Regex("^.*/providers/", RegexOptions.IgnoreCase | RegexOptions.RightToLeft);
        private static readonly Regex managementGroupPrefix = new Regex("^/providers/Microsoft.Management/managementGroups/{\\w+}/$", RegexOptions.IgnoreCase);
        private static readonly Regex tenantPrefix = new Regex("^/$", RegexOptions.IgnoreCase);
        private static readonly Regex subscriptionPrefix = new Regex("^/subscriptions/{\\w+}/$", RegexOptions.IgnoreCase);
        private static readonly Regex resourceGroupPrefix = new Regex("^/subscriptions/{\\w+}/resourceGroups/{\\w+}/$", RegexOptions.IgnoreCase);
        private static readonly Regex resourceGroupMethod = new Regex("^/subscriptions/{\\w+}/resourceGroups/{\\w+}$", RegexOptions.IgnoreCase);

        private static bool ShouldProcess(CodeModel codeModel, Method method, string apiVersion)
        {
            if (method.HttpMethod != HttpMethod.Put)
            {
                return false;
            }

            if (string.IsNullOrWhiteSpace(method.Url))
            {
                return false;
            }

            return Array.Exists(method.XMsMetadata.apiVersions, v => v.Equals(apiVersion));
        }

        private static string GetNormalizedMethodUrl(Method method)
        {
            if (resourceGroupMethod.IsMatch(method.Url))
            {
                // resource groups are a special case - the swagger API is not defined as a provider API, but they are still deployable in a template as if it was.
                return "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/resourceGroups/{resourceGroupName}";
            }

            return method.Url;
        }

        private static (bool success, string failureReason, IEnumerable<ResourceDescriptor> resourceDescriptors) ParseMethod(Method method, string apiVersion)
        {
            var methodUrl = GetNormalizedMethodUrl(method);

            var finalProvidersMatch = parentScopePrefix.Match(methodUrl);
            if (!finalProvidersMatch.Success)
            {
                return (false, "Unable to locate '/providers/' segment", Enumerable.Empty<ResourceDescriptor>());
            }

            var parentScope = methodUrl.Substring(0, finalProvidersMatch.Length - "providers/".Length);
            var routingScope = methodUrl.Substring(finalProvidersMatch.Length).Trim('/');

            var providerNamespace = routingScope.Substring(0, routingScope.IndexOf('/'));
            if (IsPathVariable(providerNamespace))
            {
                return (false, $"Unable to process parameterized provider namespace '{providerNamespace}'", Enumerable.Empty<ResourceDescriptor>());
            }

            var (success, failureReason, resourceTypesFound) = ParseResourceTypes(method.Parameters, routingScope);
            if (!success)
            {
                return (false, failureReason, Enumerable.Empty<ResourceDescriptor>());
            }

            var resNameParam = routingScope.Substring(routingScope.LastIndexOf('/') + 1);
            var hasVariableName = IsPathVariable(resNameParam);

            var scopeType = ScopeType.None;
            if (tenantPrefix.IsMatch(parentScope))
            {
                scopeType = ScopeType.Tenant;
            }
            else if (managementGroupPrefix.IsMatch(parentScope))
            {
                scopeType = ScopeType.ManagementGroup;
            }
            else if (resourceGroupPrefix.IsMatch(parentScope))
            {
                scopeType = ScopeType.ResourceGroup;
            }
            else if (subscriptionPrefix.IsMatch(parentScope))
            {
                scopeType = ScopeType.Subscription;
            }
            else if (parentScopePrefix.IsMatch(parentScope))
            {
                scopeType = ScopeType.Extension;
            }

            return (true, string.Empty, resourceTypesFound.Select(type => new ResourceDescriptor
            {
                ScopeType = scopeType,
                ProviderNamespace = providerNamespace,
                ResourceTypeSegments = type.ToList(),
                ApiVersion = apiVersion,
                HasVariableName = hasVariableName,
                XmsMetadata = method.XMsMetadata,
            }));
        }

        private static (bool success, string failureReason, IEnumerable<IEnumerable<string>> resourceTypesFound) ParseResourceTypes(IEnumerableWithIndex<Parameter> parameters, string routingScope)
        {
            var nameSegments = routingScope.Split('/').Skip(1).Where((_, i) => i % 2 == 0);

            if (nameSegments.Count() == 0)
            {
                return (false, $"Unable to find name segments", Enumerable.Empty<IEnumerable<string>>());
            }

            IEnumerable<IEnumerable<string>> resourceTypes = new[] { Enumerable.Empty<string>() };
            foreach (var nameSegment in nameSegments)
            {
                if (IsPathVariable(nameSegment))
                {
                    var parameterName = TrimParamBraces(nameSegment);
                    var parameter = parameters.FirstOrDefault(methodParameter => methodParameter.SerializedName == parameterName);
                    if (parameter == null)
                    {
                        return (false, $"Found undefined parameter reference {nameSegment}", Enumerable.Empty<IEnumerable<string>>());
                    }

                    if (parameter.ModelType == null || !(parameter.ModelType is EnumType parameterType))
                    {
                        return (false, $"Parameter reference {nameSegment} is not defined as an enum", Enumerable.Empty<IEnumerable<string>>());
                    }

                    if (parameterType.Values == null || parameterType.Values.Count == 0)
                    {
                        return (false, $"Parameter reference {nameSegment} is defined as an enum, but doesn't have any specified values", Enumerable.Empty<IEnumerable<string>>());
                    }

                    resourceTypes = resourceTypes.SelectMany(type => parameterType.Values.Select(v => type.Append(v.SerializedName)));
                }
                else
                {
                    resourceTypes = resourceTypes.Select(type => type.Append(nameSegment));
                }
            }

            return (true, string.Empty, resourceTypes);
        }

        public static IEnumerable<GenerateResult> GenerateTypes(CodeModel serviceClient, string apiVersion)
        {            
            if (serviceClient == null)
            {
                throw new ArgumentNullException(nameof(serviceClient));
            }

            var providerDefinitions = new Dictionary<string, ProviderDefinition>(StringComparer.OrdinalIgnoreCase);

            foreach (var putMethod in serviceClient.Methods.Where(method => ShouldProcess(serviceClient, method, apiVersion)))
            {
                var (success, failureReason, resourceDescriptors) = ParseMethod(putMethod, apiVersion);
                if (!success)
                {
                    LogWarning($"Skipping path '{putMethod.Url}': {failureReason}");
                    continue;
                }

                var getMethod = serviceClient.Methods.FirstOrDefault(x => x.Url == putMethod.Url && x.HttpMethod == HttpMethod.Get);

                foreach (var descriptor in resourceDescriptors)
                {
                    if (!providerDefinitions.ContainsKey(descriptor.ProviderNamespace))
                    {
                        providerDefinitions[descriptor.ProviderNamespace] = new ProviderDefinition
                        {
                            Namespace = descriptor.ProviderNamespace,
                            ApiVersion = apiVersion,
                            Model = serviceClient,
                        };
                    }
                    var providerDefinition = providerDefinitions[descriptor.ProviderNamespace];

                    var existingResourceDefinition = providerDefinition.ResourceDefinitions
                        .FirstOrDefault(x => StringComparer.OrdinalIgnoreCase.Equals(x.Descriptor.FullyQualifiedType, descriptor.FullyQualifiedType));

                    if (existingResourceDefinition == null)
                    {
                        providerDefinition.ResourceDefinitions.Add(new ResourceDefinition
                        {
                            Descriptor = descriptor,
                            DeclaringMethod = putMethod,
                            GetMethod = getMethod,
                        });
                    }
                    else
                    {
                        // the same resource type has been declared at a different scope - combine the two definitions into one
                        existingResourceDefinition.Descriptor.ScopeType |= descriptor.ScopeType;
                    }
                }
            }

            return providerDefinitions.Select(definition => ProviderTypeGenerator.Generate(serviceClient, definition.Value));
        }

        public static bool IsPathVariable(string pathSegment)
        {
            Debug.Assert(pathSegment != null);

            return pathSegment.StartsWith("{", StringComparison.Ordinal) && pathSegment.EndsWith("}", StringComparison.Ordinal);
        }

        public static string TrimParamBraces(string pathSegment)
            => pathSegment.Substring(1, pathSegment.Length - 2);
    }
}
