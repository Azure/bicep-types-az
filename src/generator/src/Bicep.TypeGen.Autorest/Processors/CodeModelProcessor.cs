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

        private static bool ShouldProcessResourceType(CodeModel codeModel, Method method, string apiVersion)
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

        private static ScopeType GetScopeTypeFromParentScope(string parentScope)
        {
            if (tenantPrefix.IsMatch(parentScope))
            {
                return ScopeType.Tenant;
            }

            if (managementGroupPrefix.IsMatch(parentScope))
            {
                return ScopeType.ManagementGroup;
            }

            if (resourceGroupPrefix.IsMatch(parentScope))
            {
                return ScopeType.ResourceGroup;
            }

            if (subscriptionPrefix.IsMatch(parentScope))
            {
                return ScopeType.Subscription;
            }

            if (parentScopePrefix.IsMatch(parentScope))
            {
                return ScopeType.Extension;
            }

            // ambiguous - without any further information, we have to assume 'all'
            return ScopeType.Unknown;
        }

        public static bool ShouldProcessResourceAction(CodeModel codeModel, Method method, string apiVersion)
        {
            if (method.HttpMethod != HttpMethod.Post)
            {
                return false;
            }

            if (string.IsNullOrWhiteSpace(method.Url))
            {
                return false;
            }

            var actionName = method.Url.Split('/').Last();
            if (!actionName.StartsWith("list", StringComparison.OrdinalIgnoreCase))
            {
                return false;
            }

            return Array.Exists(method.XMsMetadata.apiVersions, v => v.Equals(apiVersion));
        }

        private static (bool success, string failureReason, ScopeType scopeType, string routingScope) ParseResourceScopes(Method method, string apiVersion)
        {
            var methodUrl = GetNormalizedMethodUrl(method);

            var finalProvidersMatch = parentScopePrefix.Match(methodUrl);
            if (!finalProvidersMatch.Success)
            {
                return (false, "Unable to locate '/providers/' segment", ScopeType.Unknown, string.Empty);
            }

            var parentScope = methodUrl.Substring(0, finalProvidersMatch.Length - "providers/".Length);
            var routingScope = methodUrl.Substring(finalProvidersMatch.Length).Trim('/');

            var scopeType = GetScopeTypeFromParentScope(parentScope);

            return (true, string.Empty, scopeType, routingScope);
        }

        private static (bool success, string failureReason, IEnumerable<ResourceDescriptor> resourceDescriptors) ParseResourceDescriptors(Method method, string apiVersion, ScopeType scopeType, string routingScope)
        {
            var pathIndex = routingScope.IndexOf('/');
            var providerNamespace = pathIndex > -1 ? routingScope.Substring(0, pathIndex) : routingScope;
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

            return (true, string.Empty, resourceTypesFound.Select(type => new ResourceDescriptor(
                scopeType,
                providerNamespace,
                type.ToList(),
                apiVersion,
                hasVariableName ? null : resNameParam,
                method.XMsMetadata
            )));
        }

        private static (bool success, string failureReason, IEnumerable<ResourceDescriptor> resourceDescriptors) ParseResourceMethod(Method method, string apiVersion)
        {
            var (parseScopeSuccess, parseScopeFailureReason, scopeType, routingScope) = ParseResourceScopes(method, apiVersion);

            return ParseResourceDescriptors(method, apiVersion, scopeType, routingScope);
        }
        
        private static (bool success, string failureReason, IEnumerable<ResourceDescriptor> resourceDescriptors, string actionName) ParseResourceActionMethod(Method method, string apiVersion)
        {
            var (parseScopeSuccess, parseScopeFailureReason, scopeType, routingScope) = ParseResourceScopes(method, apiVersion);

            var resourceRoutingScope = routingScope.Substring(0, routingScope.LastIndexOf('/'));
            var actionName = routingScope.Substring(resourceRoutingScope.Length + 1);

            var (success, failureReason, resourceDescriptors) = ParseResourceDescriptors(method, apiVersion, scopeType, resourceRoutingScope);

            return (success, failureReason, resourceDescriptors, actionName);
        }

        private static (bool success, string failureReason, IEnumerable<IEnumerable<string>> resourceTypesFound) ParseResourceTypes(IEnumerableWithIndex<Parameter> parameters, string routingScope)
        {
            var typeSegments = routingScope.Split('/').Skip(1).Where((_, i) => i % 2 == 0);
            var nameSegments = routingScope.Split('/').Skip(1).Where((_, i) => i % 2 == 1);

            if (typeSegments.Count() == 0)
            {
                return (false, $"Unable to find type segments", Enumerable.Empty<IEnumerable<string>>());
            }

            if (typeSegments.Count() != nameSegments.Count())
            {
                return (false, $"Found mismatch betwen type segments ({typeSegments.Count()}) and name segments ({nameSegments.Count()})", Enumerable.Empty<IEnumerable<string>>());
            }

            IEnumerable<IEnumerable<string>> resourceTypes = new[] { Enumerable.Empty<string>() };
            foreach (var typeSegment in typeSegments)
            {
                if (IsPathVariable(typeSegment))
                {
                    var parameterName = TrimParamBraces(typeSegment);
                    var parameter = parameters.FirstOrDefault(methodParameter => methodParameter.SerializedName == parameterName);
                    if (parameter == null)
                    {
                        return (false, $"Found undefined parameter reference {typeSegment}", Enumerable.Empty<IEnumerable<string>>());
                    }

                    if (parameter.ModelType == null || !(parameter.ModelType is EnumType parameterType))
                    {
                        return (false, $"Parameter reference {typeSegment} is not defined as an enum", Enumerable.Empty<IEnumerable<string>>());
                    }

                    if (parameterType.Values == null || parameterType.Values.Count == 0)
                    {
                        return (false, $"Parameter reference {typeSegment} is defined as an enum, but doesn't have any specified values", Enumerable.Empty<IEnumerable<string>>());
                    }

                    resourceTypes = resourceTypes.SelectMany(type => parameterType.Values.Select(v => type.Append(v.SerializedName)));
                }
                else
                {
                    resourceTypes = resourceTypes.Select(type => type.Append(typeSegment));
                }
            }

            return (true, string.Empty, resourceTypes);
        }

        private static ProviderDefinition GetProviderDefinition(IDictionary<string, ProviderDefinition> providerDefinitions, CodeModel codeModel, ResourceDescriptor descriptor, string apiVersion)
        {
            if (!providerDefinitions.ContainsKey(descriptor.ProviderNamespace))
            {
                providerDefinitions[descriptor.ProviderNamespace] = new ProviderDefinition(descriptor.ProviderNamespace, apiVersion, codeModel);
            }
            
            return providerDefinitions[descriptor.ProviderNamespace];
        }

        public static IEnumerable<GenerateResult> GenerateTypes(CodeModel serviceClient, string apiVersion)
        {            
            if (serviceClient == null)
            {
                throw new ArgumentNullException(nameof(serviceClient));
            }

            var providerDefinitions = new Dictionary<string, ProviderDefinition>(StringComparer.OrdinalIgnoreCase);

            foreach (var putMethod in serviceClient.Methods.Where(method => ShouldProcessResourceType(serviceClient, method, apiVersion)))
            {
                var (success, failureReason, resourceDescriptors) = ParseResourceMethod(putMethod, apiVersion);
                if (!success)
                {
                    LogWarning($"Skipping resource PUT path '{putMethod.Url}': {failureReason}");
                    continue;
                }

                var getMethod = serviceClient.Methods.FirstOrDefault(x => x.Url == putMethod.Url && x.HttpMethod == HttpMethod.Get);

                foreach (var descriptor in resourceDescriptors)
                {
                    var providerDefinition = GetProviderDefinition(providerDefinitions, serviceClient, descriptor, apiVersion);

                    providerDefinition.ResourceDefinitions.Add(new ResourceDefinition(descriptor, putMethod, getMethod));
                }
            }

            foreach (var listActionMethod in serviceClient.Methods.Where(method => ShouldProcessResourceAction(serviceClient, method, apiVersion)))
            {
                var (success, failureReason, resourceDescriptors, actionName) = ParseResourceActionMethod(listActionMethod, apiVersion);
                if (!success)
                {
                    LogWarning($"Skipping resource POST action path '{listActionMethod.Url}': {failureReason}");
                    continue;
                }

                foreach (var descriptor in resourceDescriptors)
                {
                    var providerDefinition = GetProviderDefinition(providerDefinitions, serviceClient, descriptor, apiVersion);

                    providerDefinition.ResourceListActions.Add(new ResourceListActionDefinition(descriptor, listActionMethod, actionName));
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
