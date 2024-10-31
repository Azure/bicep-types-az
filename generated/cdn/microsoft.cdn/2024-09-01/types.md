# Microsoft.Cdn @ 2024-09-01

## Resource Microsoft.Cdn/cdnWebApplicationFirewallPolicies@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string {maxLength: 128} (Required, DeployTimeConstant): The resource name
* **properties**: [CdnWebApplicationFirewallPolicyProperties](#cdnwebapplicationfirewallpolicyproperties): Properties of the web application firewall policy.
* **sku**: [Sku](#sku) (Required): The pricing tier (defines a CDN provider, feature list and rate) of the CdnWebApplicationFirewallPolicy.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cdn/cdnWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities).
* **kind**: string (ReadOnly): Kind of the profile. Used by portal to differentiate traditional CDN profile and new AFD profile.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProfileProperties](#profileproperties): The JSON object that contains the properties required to create a profile.
* **sku**: [Sku](#sku) (Required): The pricing tier (defines Azure Front Door Standard or Premium or a CDN provider, feature list and rate) of the profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/afdEndpoints@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AFDEndpointProperties](#afdendpointproperties): The JSON object that contains the properties required to create an endpoint.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cdn/profiles/afdEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/afdEndpoints/routes@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RouteProperties](#routeproperties): The JSON object that contains the properties of the Routes to create.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Cdn/profiles/afdEndpoints/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/customDomains@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AFDDomainProperties](#afddomainproperties): The JSON object that contains the properties of the domain to create.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Cdn/profiles/customDomains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointProperties](#endpointproperties): The JSON object that contains the properties required to create an endpoint.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints/customDomains@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomDomainPropertiesParametersOrCustomDomainProperties](#customdomainpropertiesparametersorcustomdomainproperties): The JSON object that contains the properties of the custom domain to create.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints/originGroups@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OriginGroupProperties](#origingroupproperties): The JSON object that contains the properties of the origin group.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Cdn/profiles/endpoints/originGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/endpoints/origins@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OriginProperties](#originproperties): The JSON object that contains the properties of the origin.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Cdn/profiles/endpoints/origins' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/originGroups@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AFDOriginGroupProperties](#afdorigingroupproperties): The JSON object that contains the properties of the origin group.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Cdn/profiles/originGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/originGroups/origins@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AFDOriginProperties](#afdoriginproperties): The JSON object that contains the properties of the origin.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Cdn/profiles/originGroups/origins' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/ruleSets@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RuleSetProperties](#rulesetproperties) (ReadOnly): The JSON object that contains the properties of the Rule Set to create.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Cdn/profiles/ruleSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/ruleSets/rules@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RuleProperties](#ruleproperties): The JSON object that contains the properties of the Rules to create.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Cdn/profiles/ruleSets/rules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/secrets@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecretProperties](#secretproperties): The JSON object that contains the properties of the Secret to create.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Cdn/profiles/secrets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cdn/profiles/securityPolicies@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityPolicyProperties](#securitypolicyproperties): The json object that contains properties required to create a security policy
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Cdn/profiles/securityPolicies' (ReadOnly, DeployTimeConstant): The resource type

## ActivatedResourceReference
### Properties
* **id**: string: Resource ID.
* **isActive**: bool (ReadOnly): Whether the resource is active or inactive

## AFDDomainHttpsParameters
### Properties
* **certificateType**: 'AzureFirstPartyManagedCertificate' | 'CustomerCertificate' | 'ManagedCertificate' | string (Required): Defines the source of the SSL certificate.
* **minimumTlsVersion**: 'TLS10' | 'TLS12': TLS protocol version that will be used for Https
* **secret**: [ResourceReference](#resourcereference): Resource reference to the secret. ie. subs/rg/profile/secret

## AFDDomainProperties
### Properties
* **azureDnsZone**: [ResourceReference](#resourcereference): Resource reference to the Azure DNS zone
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly)
* **domainValidationState**: 'Approved' | 'InternalError' | 'Pending' | 'PendingRevalidation' | 'RefreshingValidationToken' | 'Rejected' | 'Submitting' | 'TimedOut' | 'Unknown' | string (ReadOnly): Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. DCV stands for DomainControlValidation.
* **extendedProperties**: [AFDDomainPropertiesExtendedProperties](#afddomainpropertiesextendedproperties): Key-Value pair representing migration properties for domains.
* **hostName**: string (Required): The host name of the domain. Must be a domain name.
* **preValidatedCustomDomainResourceId**: [ResourceReference](#resourcereference): Resource reference to the Azure resource where custom domain ownership was prevalidated
* **profileName**: string (ReadOnly): The name of the profile which holds the domain.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status
* **tlsSettings**: [AFDDomainHttpsParameters](#afddomainhttpsparameters): The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
* **validationProperties**: [DomainValidationProperties](#domainvalidationproperties) (ReadOnly): Values the customer needs to validate domain ownership

## AFDDomainPropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AFDEndpointProperties
### Properties
* **autoGeneratedDomainNameLabelScope**: 'NoReuse' | 'ResourceGroupReuse' | 'SubscriptionReuse' | 'TenantReuse' | string: Indicates the endpoint name reuse scope. The default value is TenantReuse.
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled' | string: Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
* **hostName**: string (ReadOnly): The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. contoso.azureedge.net
* **profileName**: string (ReadOnly): The name of the profile which holds the endpoint.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status

## AFDOriginGroupProperties
### Properties
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly)
* **healthProbeSettings**: [HealthProbeParameters](#healthprobeparameters): Health probe settings to the origin that is used to determine the health of the origin.
* **loadBalancingSettings**: [LoadBalancingSettingsParameters](#loadbalancingsettingsparameters): Load balancing settings for a backend pool
* **profileName**: string (ReadOnly): The name of the profile which holds the origin group.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status
* **sessionAffinityState**: 'Disabled' | 'Enabled' | string: Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
* **trafficRestorationTimeToHealedOrNewEndpointsInMinutes**: int {minValue: 0, maxValue: 50}: Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.

## AFDOriginProperties
### Properties
* **azureOrigin**: [ResourceReference](#resourcereference): Resource reference to the Azure origin resource.
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled' | string: Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
* **enforceCertificateNameCheck**: bool: Whether to enable certificate name check at origin level
* **hostName**: string: The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
* **httpPort**: int {minValue: 1, maxValue: 65535}: The value of the HTTP port. Must be between 1 and 65535.
* **httpsPort**: int {minValue: 1, maxValue: 65535}: The value of the HTTPS port. Must be between 1 and 65535.
* **originGroupName**: string (ReadOnly): The name of the origin group which contains this origin.
* **originHostHeader**: string: The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure Front Door origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
* **priority**: int {minValue: 1, maxValue: 5}: Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status
* **sharedPrivateLinkResource**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): The properties of the private link resource for private origin.
* **weight**: int {minValue: 1, maxValue: 1000}: Weight of the origin in given origin group for load balancing. Must be between 1 and 1000

## AfdRouteCacheConfiguration
### Properties
* **compressionSettings**: [CompressionSettings](#compressionsettings): compression settings.
* **queryParameters**: string: query parameters to include or exclude (comma separated).
* **queryStringCachingBehavior**: 'IgnoreQueryString' | 'IgnoreSpecifiedQueryStrings' | 'IncludeSpecifiedQueryStrings' | 'UseQueryString' | string: Defines how Frontdoor caches requests that include query strings. You can ignore any query strings when caching, ignore specific query strings, cache every request with a unique URL, or cache specific query strings.

## CacheConfiguration
### Properties
* **cacheBehavior**: 'HonorOrigin' | 'OverrideAlways' | 'OverrideIfOriginMissing' | string: Caching behavior for the requests
* **cacheDuration**: string: The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
* **isCompressionEnabled**: 'Disabled' | 'Enabled' | string: Indicates whether content compression is enabled. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB.
* **queryParameters**: string: query parameters to include or exclude (comma separated).
* **queryStringCachingBehavior**: 'IgnoreQueryString' | 'IgnoreSpecifiedQueryStrings' | 'IncludeSpecifiedQueryStrings' | 'UseQueryString' | string: Defines how Frontdoor caches requests that include query strings. You can ignore any query strings when caching, ignore specific query strings, cache every request with a unique URL, or cache specific query strings.

## CacheExpirationActionParameters
### Properties
* **cacheBehavior**: 'BypassCache' | 'Override' | 'SetIfMissing' | string (Required): Caching behavior for the requests
* **cacheDuration**: string: The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
* **cacheType**: 'All' | string (Required): The level at which the content needs to be cached.
* **typeName**: 'DeliveryRuleCacheExpirationActionParameters' | 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters' | 'DeliveryRuleHeaderActionParameters' | 'DeliveryRuleOriginGroupOverrideActionParameters' | 'DeliveryRuleRouteConfigurationOverrideActionParameters' | 'DeliveryRuleUrlRedirectActionParameters' | 'DeliveryRuleUrlRewriteActionParameters' | 'DeliveryRuleUrlSigningActionParameters' | string (Required)

## CacheKeyQueryStringActionParameters
### Properties
* **queryParameters**: string: query parameters to include or exclude (comma separated).
* **queryStringBehavior**: 'Exclude' | 'ExcludeAll' | 'Include' | 'IncludeAll' | string (Required): Caching behavior for the requests
* **typeName**: 'DeliveryRuleCacheExpirationActionParameters' | 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters' | 'DeliveryRuleHeaderActionParameters' | 'DeliveryRuleOriginGroupOverrideActionParameters' | 'DeliveryRuleRouteConfigurationOverrideActionParameters' | 'DeliveryRuleUrlRedirectActionParameters' | 'DeliveryRuleUrlRewriteActionParameters' | 'DeliveryRuleUrlSigningActionParameters' | string (Required)

## CdnCertificateSourceParameters
### Properties
* **certificateType**: 'Dedicated' | 'Shared' | string (Required): Type of certificate used
* **typeName**: 'CdnCertificateSourceParameters' | 'KeyVaultCertificateSourceParameters' | string (Required)

## CdnEndpoint
### Properties
* **id**: string: ARM Resource ID string.

## CdnWebApplicationFirewallPolicyProperties
### Properties
* **customRules**: [CustomRuleList](#customrulelist): Describes custom rules inside the policy.
* **endpointLinks**: [CdnEndpoint](#cdnendpoint)[] (ReadOnly): Describes Azure CDN endpoints associated with this Web Application Firewall policy.
* **extendedProperties**: [CdnWebApplicationFirewallPolicyPropertiesExtendedProperties](#cdnwebapplicationfirewallpolicypropertiesextendedproperties): Key-Value pair representing additional properties for Web Application Firewall policy.
* **managedRules**: [ManagedRuleSetList](#managedrulesetlist): Describes managed rules inside the policy.
* **policySettings**: [PolicySettings](#policysettings): Describes  policySettings for policy
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the WebApplicationFirewallPolicy.
* **rateLimitRules**: [RateLimitRuleList](#ratelimitrulelist): Describes rate limit rules inside the policy.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status of the policy.

## CdnWebApplicationFirewallPolicyPropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ClientPortMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## CompressionSettings
### Properties
* **contentTypesToCompress**: string[]: List of content types on which compression applies. The value should be a valid MIME type.
* **isCompressionEnabled**: bool: Indicates whether content compression is enabled on AzureFrontDoor. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB.

## CookiesMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **selector**: string: Name of Cookies to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## CustomDomainHttpsParameters
* **Discriminator**: certificateSource

### Base Properties
* **minimumTlsVersion**: 'None' | 'TLS10' | 'TLS12': TLS protocol version that will be used for Https
* **protocolType**: 'IPBased' | 'ServerNameIndication' | string (Required): Defines the TLS extension protocol that is used for secure delivery.

### UserManagedHttpsParameters
#### Properties
* **certificateSource**: 'AzureKeyVault' (Required): Defines the source of the SSL certificate.
* **certificateSourceParameters**: [KeyVaultCertificateSourceParameters](#keyvaultcertificatesourceparameters) (Required): Defines the certificate source parameters using user's keyvault certificate for enabling SSL.

### CdnManagedHttpsParameters
#### Properties
* **certificateSource**: 'Cdn' (Required): Defines the source of the SSL certificate.
* **certificateSourceParameters**: [CdnCertificateSourceParameters](#cdncertificatesourceparameters) (Required): Defines the certificate source parameters using CDN managed certificate for enabling SSL.


## CustomDomainPropertiesParametersOrCustomDomainProperties
### Properties
* **customHttpsParameters**: [CustomDomainHttpsParameters](#customdomainhttpsparameters) (ReadOnly): Certificate parameters for securing custom HTTPS
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' | string (ReadOnly): Provisioning status of the custom domain.
* **customHttpsProvisioningSubstate**: 'CertificateDeleted' | 'CertificateDeployed' | 'DeletingCertificate' | 'DeployingCertificate' | 'DomainControlValidationRequestApproved' | 'DomainControlValidationRequestRejected' | 'DomainControlValidationRequestTimedOut' | 'IssuingCertificate' | 'PendingDomainControlValidationREquestApproval' | 'SubmittingDomainControlValidationRequest' | string (ReadOnly): Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step.
* **hostName**: string (Required): The host name of the custom domain. Must be a domain name.
* **provisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' | string (ReadOnly): Provisioning status of Custom Https of the custom domain.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | string (ReadOnly): Resource status of the custom domain.
* **validationData**: string (ReadOnly): Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' | string (Required): Describes what action to be applied when rule matches
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required): List of match conditions.
* **name**: string (Required): Defines the name of the custom rule
* **priority**: int {minValue: 0, maxValue: 1000} (Required): Defines in what order this rule be evaluated in the overall list of custom rules

## CustomRuleList
### Properties
* **rules**: [CustomRule](#customrule)[]: List of rules

## DeepCreatedCustomDomain
### Properties
* **name**: string (Required): Custom domain name.
* **properties**: [DeepCreatedCustomDomainProperties](#deepcreatedcustomdomainproperties): Properties of the custom domain created on the CDN endpoint.

## DeepCreatedCustomDomainProperties
### Properties
* **hostName**: string (Required): The host name of the custom domain. Must be a domain name.
* **validationData**: string: Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.

## DeepCreatedOrigin
### Properties
* **name**: string (Required): Origin name which must be unique within the endpoint.
* **properties**: [DeepCreatedOriginProperties](#deepcreatedoriginproperties): Properties of the origin created on the CDN endpoint.

## DeepCreatedOriginGroup
### Properties
* **name**: string (Required): Origin group name which must be unique within the endpoint.
* **properties**: [DeepCreatedOriginGroupProperties](#deepcreatedorigingroupproperties): Properties of the origin group created on the CDN endpoint.

## DeepCreatedOriginGroupProperties
### Properties
* **healthProbeSettings**: [HealthProbeParameters](#healthprobeparameters): Health probe settings to the origin that is used to determine the health of the origin.
* **origins**: [ResourceReference](#resourcereference)[] (Required): The source of the content being delivered via CDN within given origin group.
* **responseBasedOriginErrorDetectionSettings**: [ResponseBasedOriginErrorDetectionParameters](#responsebasedoriginerrordetectionparameters): The JSON object that contains the properties to determine origin health using real requests/responses.This property is currently not supported.
* **trafficRestorationTimeToHealedOrNewEndpointsInMinutes**: int {minValue: 0, maxValue: 50}: Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.

## DeepCreatedOriginProperties
### Properties
* **enabled**: bool: Origin is enabled for load balancing or not. By default, origin is always enabled.
* **hostName**: string (Required): The address of the origin. It can be a domain name, IPv4 address, or IPv6 address. This should be unique across all origins in an endpoint.
* **httpPort**: int {minValue: 1, maxValue: 65535}: The value of the HTTP port. Must be between 1 and 65535.
* **httpsPort**: int {minValue: 1, maxValue: 65535}: The value of the HTTPS port. Must be between 1 and 65535.
* **originHostHeader**: string: The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
* **priority**: int {minValue: 1, maxValue: 5}: Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5.
* **privateEndpointStatus**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string (ReadOnly): The approval status for the connection to the Private Link
* **privateLinkAlias**: string: The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
* **privateLinkApprovalMessage**: string: A custom message to be included in the approval request to connect to the Private Link.
* **privateLinkLocation**: string: The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
* **privateLinkResourceId**: string: The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
* **weight**: int {minValue: 1, maxValue: 1000}: Weight of the origin in given origin group for load balancing. Must be between 1 and 1000

## DeliveryRule
### Properties
* **actions**: [DeliveryRuleAction](#deliveryruleaction)[] (Required): A list of actions that are executed when all the conditions of a rule are satisfied.
* **conditions**: [DeliveryRuleCondition](#deliveryrulecondition)[]: A list of conditions that must be matched for the actions to be executed
* **name**: string: Name of the rule
* **order**: int (Required): The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.

## DeliveryRuleAction
* **Discriminator**: name

### Base Properties

### DeliveryRuleCacheExpirationAction
#### Properties
* **name**: 'CacheExpiration' (Required): The name of the action for the delivery rule.
* **parameters**: [CacheExpirationActionParameters](#cacheexpirationactionparameters) (Required): Defines the parameters for the action.

### DeliveryRuleCacheKeyQueryStringAction
#### Properties
* **name**: 'CacheKeyQueryString' (Required): The name of the action for the delivery rule.
* **parameters**: [CacheKeyQueryStringActionParameters](#cachekeyquerystringactionparameters) (Required): Defines the parameters for the action.

### DeliveryRuleRequestHeaderAction
#### Properties
* **name**: 'ModifyRequestHeader' (Required): The name of the action for the delivery rule.
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required): Defines the parameters for the action.

### DeliveryRuleResponseHeaderAction
#### Properties
* **name**: 'ModifyResponseHeader' (Required): The name of the action for the delivery rule.
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required): Defines the parameters for the action.

### OriginGroupOverrideAction
#### Properties
* **name**: 'OriginGroupOverride' (Required): The name of the action for the delivery rule.
* **parameters**: [OriginGroupOverrideActionParameters](#origingroupoverrideactionparameters) (Required): Defines the parameters for the action.

### DeliveryRuleRouteConfigurationOverrideAction
#### Properties
* **name**: 'RouteConfigurationOverride' (Required): The name of the action for the delivery rule.
* **parameters**: [RouteConfigurationOverrideActionParameters](#routeconfigurationoverrideactionparameters) (Required): Defines the parameters for the action.

### UrlRedirectAction
#### Properties
* **name**: 'UrlRedirect' (Required): The name of the action for the delivery rule.
* **parameters**: [UrlRedirectActionParameters](#urlredirectactionparameters) (Required): Defines the parameters for the action.

### UrlRewriteAction
#### Properties
* **name**: 'UrlRewrite' (Required): The name of the action for the delivery rule.
* **parameters**: [UrlRewriteActionParameters](#urlrewriteactionparameters) (Required): Defines the parameters for the action.

### UrlSigningAction
#### Properties
* **name**: 'UrlSigning' (Required): The name of the action for the delivery rule.
* **parameters**: [UrlSigningActionParameters](#urlsigningactionparameters) (Required): Defines the parameters for the action.


## DeliveryRuleCondition
* **Discriminator**: name

### Base Properties

### DeliveryRuleClientPortCondition
#### Properties
* **name**: 'ClientPort' (Required): The name of the condition for the delivery rule.
* **parameters**: [ClientPortMatchConditionParameters](#clientportmatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleCookiesCondition
#### Properties
* **name**: 'Cookies' (Required): The name of the condition for the delivery rule.
* **parameters**: [CookiesMatchConditionParameters](#cookiesmatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleHostNameCondition
#### Properties
* **name**: 'HostName' (Required): The name of the condition for the delivery rule.
* **parameters**: [HostNameMatchConditionParameters](#hostnamematchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleHttpVersionCondition
#### Properties
* **name**: 'HttpVersion' (Required): The name of the condition for the delivery rule.
* **parameters**: [HttpVersionMatchConditionParameters](#httpversionmatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleIsDeviceCondition
#### Properties
* **name**: 'IsDevice' (Required): The name of the condition for the delivery rule.
* **parameters**: [IsDeviceMatchConditionParameters](#isdevicematchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRulePostArgsCondition
#### Properties
* **name**: 'PostArgs' (Required): The name of the condition for the delivery rule.
* **parameters**: [PostArgsMatchConditionParameters](#postargsmatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleQueryStringCondition
#### Properties
* **name**: 'QueryString' (Required): The name of the condition for the delivery rule.
* **parameters**: [QueryStringMatchConditionParameters](#querystringmatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleRemoteAddressCondition
#### Properties
* **name**: 'RemoteAddress' (Required): The name of the condition for the delivery rule.
* **parameters**: [RemoteAddressMatchConditionParameters](#remoteaddressmatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleRequestBodyCondition
#### Properties
* **name**: 'RequestBody' (Required): The name of the condition for the delivery rule.
* **parameters**: [RequestBodyMatchConditionParameters](#requestbodymatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleRequestHeaderCondition
#### Properties
* **name**: 'RequestHeader' (Required): The name of the condition for the delivery rule.
* **parameters**: [RequestHeaderMatchConditionParameters](#requestheadermatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleRequestMethodCondition
#### Properties
* **name**: 'RequestMethod' (Required): The name of the condition for the delivery rule.
* **parameters**: [RequestMethodMatchConditionParameters](#requestmethodmatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleRequestSchemeCondition
#### Properties
* **name**: 'RequestScheme' (Required): The name of the condition for the delivery rule.
* **parameters**: [RequestSchemeMatchConditionParameters](#requestschemematchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleRequestUriCondition
#### Properties
* **name**: 'RequestUri' (Required): The name of the condition for the delivery rule.
* **parameters**: [RequestUriMatchConditionParameters](#requesturimatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleServerPortCondition
#### Properties
* **name**: 'ServerPort' (Required): The name of the condition for the delivery rule.
* **parameters**: [ServerPortMatchConditionParameters](#serverportmatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleSocketAddrCondition
#### Properties
* **name**: 'SocketAddr' (Required): The name of the condition for the delivery rule.
* **parameters**: [SocketAddrMatchConditionParameters](#socketaddrmatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleSslProtocolCondition
#### Properties
* **name**: 'SslProtocol' (Required): The name of the condition for the delivery rule.
* **parameters**: [SslProtocolMatchConditionParameters](#sslprotocolmatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleUrlFileExtensionCondition
#### Properties
* **name**: 'UrlFileExtension' (Required): The name of the condition for the delivery rule.
* **parameters**: [UrlFileExtensionMatchConditionParameters](#urlfileextensionmatchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleUrlFileNameCondition
#### Properties
* **name**: 'UrlFileName' (Required): The name of the condition for the delivery rule.
* **parameters**: [UrlFileNameMatchConditionParameters](#urlfilenamematchconditionparameters) (Required): Defines the parameters for the condition.

### DeliveryRuleUrlPathCondition
#### Properties
* **name**: 'UrlPath' (Required): The name of the condition for the delivery rule.
* **parameters**: [UrlPathMatchConditionParameters](#urlpathmatchconditionparameters) (Required): Defines the parameters for the condition.


## DomainValidationProperties
### Properties
* **expirationDate**: string (ReadOnly): The date time that the token expires
* **validationToken**: string (ReadOnly): Challenge used for DNS TXT record or file based validation

## EndpointProperties
### Properties
* **contentTypesToCompress**: string[]: List of content types on which compression applies. The value should be a valid MIME type.
* **customDomains**: [DeepCreatedCustomDomain](#deepcreatedcustomdomain)[] (ReadOnly): The custom domains under the endpoint.
* **defaultOriginGroup**: [ResourceReference](#resourcereference): A reference to the origin group.
* **deliveryPolicy**: [EndpointPropertiesUpdateParametersDeliveryPolicy](#endpointpropertiesupdateparametersdeliverypolicy): A policy that specifies the delivery rules to be used for an endpoint.
* **geoFilters**: [GeoFilter](#geofilter)[]: List of rules defining the user's geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
* **hostName**: string (ReadOnly): The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. contoso.azureedge.net
* **isCompressionEnabled**: bool: Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
* **isHttpAllowed**: bool: Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
* **isHttpsAllowed**: bool: Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
* **optimizationType**: 'DynamicSiteAcceleration' | 'GeneralMediaStreaming' | 'GeneralWebDelivery' | 'LargeFileDownload' | 'VideoOnDemandMediaStreaming' | string: Specifies what scenario the customer wants this CDN endpoint to optimize for, e.g. Download, Media services. With this information, CDN can apply scenario driven optimization.
* **originGroups**: [DeepCreatedOriginGroup](#deepcreatedorigingroup)[]: The origin groups comprising of origins that are used for load balancing the traffic based on availability.
* **originHostHeader**: string: The host header value sent to the origin with each request. This property at Endpoint is only allowed when endpoint uses single origin and can be overridden by the same property specified at origin.If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
* **originPath**: string: A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
* **origins**: [DeepCreatedOrigin](#deepcreatedorigin)[] (Required): The source of the content being delivered via CDN.
* **probePath**: string: Path to a file hosted on the origin which helps accelerate delivery of the dynamic content and calculate the most optimal routes for the CDN. This is relative to the origin path. This property is only relevant when using a single origin.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status of the endpoint.
* **queryStringCachingBehavior**: 'BypassCaching' | 'IgnoreQueryString' | 'NotSet' | 'UseQueryString': Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): Resource status of the endpoint.
* **urlSigningKeys**: [UrlSigningKey](#urlsigningkey)[]: List of keys used to validate the signed URL hashes.
* **webApplicationFirewallPolicyLink**: [EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink](#endpointpropertiesupdateparameterswebapplicationfirewallpolicylink): Defines the Web Application Firewall policy for the endpoint (if applicable)

## EndpointPropertiesUpdateParametersDeliveryPolicy
### Properties
* **description**: string: User-friendly description of the policy.
* **rules**: [DeliveryRule](#deliveryrule)[] (Required): A list of the delivery rules.

## EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink
### Properties
* **id**: string: Resource ID.

## GeoFilter
### Properties
* **action**: 'Allow' | 'Block' (Required): Action of the geo filter, i.e. allow or block access.
* **countryCodes**: string[] (Required): Two letter country or region codes defining user country or region access in a geo filter, e.g. AU, MX, US.
* **relativePath**: string (Required): Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)

## HeaderActionParameters
### Properties
* **headerAction**: 'Append' | 'Delete' | 'Overwrite' | string (Required): Action to perform
* **headerName**: string (Required): Name of the header to modify
* **typeName**: 'DeliveryRuleCacheExpirationActionParameters' | 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters' | 'DeliveryRuleHeaderActionParameters' | 'DeliveryRuleOriginGroupOverrideActionParameters' | 'DeliveryRuleRouteConfigurationOverrideActionParameters' | 'DeliveryRuleUrlRedirectActionParameters' | 'DeliveryRuleUrlRewriteActionParameters' | 'DeliveryRuleUrlSigningActionParameters' | string (Required)
* **value**: string: Value for the specified action

## HealthProbeParameters
### Properties
* **probeIntervalInSeconds**: int {minValue: 1, maxValue: 255}: The number of seconds between health probes.Default is 240sec.
* **probePath**: string: The path relative to the origin that is used to determine the health of the origin.
* **probeProtocol**: 'Http' | 'Https' | 'NotSet': Protocol to use for health probe.
* **probeRequestType**: 'GET' | 'HEAD' | 'NotSet': The type of health probe request that is made.

## HostNameMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## HttpErrorRangeParameters
### Properties
* **begin**: int {minValue: 100, maxValue: 999}: The inclusive start of the http status code range.
* **end**: int {minValue: 100, maxValue: 999}: The inclusive end of the http status code range.

## HttpVersionMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Equal' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## IsDeviceMatchConditionParameters
### Properties
* **matchValues**: ('Desktop' | 'Mobile' | string)[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Equal' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## KeyVaultCertificateSourceParameters
### Properties
* **deleteRule**: 'NoAction' | string (Required): Describes the action that shall be taken when the certificate is removed from Key Vault.
* **resourceGroupName**: string (Required): Resource group of the user's Key Vault containing the SSL certificate
* **secretName**: string (Required): The name of Key Vault Secret (representing the full certificate PFX) in Key Vault.
* **secretVersion**: string: The version(GUID) of Key Vault Secret in Key Vault.
* **subscriptionId**: string (Required): Subscription Id of the user's Key Vault containing the SSL certificate
* **typeName**: 'CdnCertificateSourceParameters' | 'KeyVaultCertificateSourceParameters' | string (Required)
* **updateRule**: 'NoAction' | string (Required): Describes the action that shall be taken when the certificate is updated in Key Vault.
* **vaultName**: string (Required): The name of the user's Key Vault containing the SSL certificate

## KeyVaultSigningKeyParameters
### Properties
* **resourceGroupName**: string (Required): Resource group of the user's Key Vault containing the secret
* **secretName**: string (Required): The name of secret in Key Vault.
* **secretVersion**: string (Required): The version(GUID) of secret in Key Vault.
* **subscriptionId**: string (Required): Subscription Id of the user's Key Vault containing the secret
* **typeName**: 'KeyVaultSigningKeyParameters' | string (Required)
* **vaultName**: string (Required): The name of the user's Key Vault containing the secret

## LoadBalancingSettingsParameters
### Properties
* **additionalLatencyInMilliseconds**: int: The additional latency in milliseconds for probes to fall into the lowest latency bucket
* **sampleSize**: int: The number of samples to consider for load balancing decisions
* **successfulSamplesRequired**: int: The number of samples within the sample period that must succeed

## ManagedRuleGroupOverride
### Properties
* **ruleGroupName**: string (Required): Describes the managed rule group within the rule set to override
* **rules**: [ManagedRuleOverride](#managedruleoverride)[]: List of rules that will be enabled. If none specified, all rules in the group will be disabled.

## ManagedRuleOverride
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' | string: Describes the override action to be applied when rule matches.
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified.
* **ruleId**: string (Required): Identifier for the managed rule.

## ManagedRuleSet
### Properties
* **anomalyScore**: int {minValue: 0, maxValue: 20}: Verizon only : If the rule set supports anomaly detection mode, this describes the threshold for blocking requests.
* **ruleGroupOverrides**: [ManagedRuleGroupOverride](#managedrulegroupoverride)[]: Defines the rule overrides to apply to the rule set.
* **ruleSetType**: string (Required): Defines the rule set type to use.
* **ruleSetVersion**: string (Required): Defines the version of the rule set to use.

## ManagedRuleSetList
### Properties
* **managedRuleSets**: [ManagedRuleSet](#managedruleset)[]: List of rule sets.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MatchCondition
### Properties
* **matchValue**: string[] (Required): List of possible match values.
* **matchVariable**: 'Cookies' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestHeader' | 'RequestMethod' | 'RequestUri' | 'SocketAddr' | string (Required): Match variable to compare against.
* **negateCondition**: bool: Describes if the result of this condition should be negated.
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **selector**: string: Selector can used to match a specific key for QueryString, Cookies, RequestHeader or PostArgs.
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms.

## OriginGroupOverride
### Properties
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest' | string: Protocol this rule will use when forwarding traffic to backends.
* **originGroup**: [ResourceReference](#resourcereference): defines the OriginGroup that would override the DefaultOriginGroup on route.

## OriginGroupOverrideActionParameters
### Properties
* **originGroup**: [ResourceReference](#resourcereference) (Required): defines the OriginGroup that would override the DefaultOriginGroup.
* **typeName**: 'DeliveryRuleCacheExpirationActionParameters' | 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters' | 'DeliveryRuleHeaderActionParameters' | 'DeliveryRuleOriginGroupOverrideActionParameters' | 'DeliveryRuleRouteConfigurationOverrideActionParameters' | 'DeliveryRuleUrlRedirectActionParameters' | 'DeliveryRuleUrlRewriteActionParameters' | 'DeliveryRuleUrlSigningActionParameters' | string (Required)

## OriginGroupProperties
### Properties
* **healthProbeSettings**: [HealthProbeParameters](#healthprobeparameters): Health probe settings to the origin that is used to determine the health of the origin.
* **origins**: [ResourceReference](#resourcereference)[]: The source of the content being delivered via CDN within given origin group.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status of the origin group.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | string (ReadOnly): Resource status of the origin group.
* **responseBasedOriginErrorDetectionSettings**: [ResponseBasedOriginErrorDetectionParameters](#responsebasedoriginerrordetectionparameters): The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
* **trafficRestorationTimeToHealedOrNewEndpointsInMinutes**: int {minValue: 0, maxValue: 50}: Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.

## OriginProperties
### Properties
* **enabled**: bool: Origin is enabled for load balancing or not
* **hostName**: string: The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
* **httpPort**: int {minValue: 1, maxValue: 65535}: The value of the HTTP port. Must be between 1 and 65535.
* **httpsPort**: int {minValue: 1, maxValue: 65535}: The value of the HTTPS port. Must be between 1 and 65535.
* **originHostHeader**: string: The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
* **priority**: int {minValue: 1, maxValue: 5}: Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
* **privateEndpointStatus**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string (ReadOnly): The approval status for the connection to the Private Link
* **privateLinkAlias**: string: The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
* **privateLinkApprovalMessage**: string: A custom message to be included in the approval request to connect to the Private Link.
* **privateLinkLocation**: string: The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
* **privateLinkResourceId**: string: The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status of the origin.
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | string (ReadOnly): Resource status of the origin.
* **weight**: int {minValue: 1, maxValue: 1000}: Weight of the origin in given origin group for load balancing. Must be between 1 and 1000

## PolicySettings
### Properties
* **defaultCustomBlockResponseBody**: string {pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$"}: If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
* **defaultCustomBlockResponseStatusCode**: int: If the action type is block, this field defines the default customer overridable http response status code.
* **defaultRedirectUrl**: string: If action type is redirect, this field represents the default redirect URL for the client.
* **enabledState**: 'Disabled' | 'Enabled' | string: describes if the policy is in enabled state or disabled state
* **mode**: 'Detection' | 'Prevention' | string: Describes if it is in detection mode or prevention mode at policy level.

## PostArgsMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **selector**: string: Name of PostArg to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## ProfileLogScrubbing
### Properties
* **scrubbingRules**: [ProfileScrubbingRules](#profilescrubbingrules)[]: List of log scrubbing rules applied to the Azure Front Door profile logs.
* **state**: 'Disabled' | 'Enabled' | string: State of the log scrubbing config. Default value is Enabled.

## ProfileProperties
### Properties
* **extendedProperties**: [ProfilePropertiesExtendedProperties](#profilepropertiesextendedproperties) (ReadOnly): Key-Value pair representing additional properties for profiles.
* **frontDoorId**: string (ReadOnly): The Id of the frontdoor.
* **logScrubbing**: [ProfileLogScrubbing](#profilelogscrubbing): Defines rules that scrub sensitive fields in the Azure Front Door profile logs.
* **originResponseTimeoutSeconds**: int {minValue: 16}: Send and receive timeout on forwarding request to the origin. When timeout is reached, the request fails and returns.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status of the profile.
* **resourceState**: 'AbortingMigration' | 'Active' | 'CommittingMigration' | 'Creating' | 'Deleting' | 'Disabled' | 'Migrated' | 'Migrating' | 'PendingMigrationCommit' | string (ReadOnly): Resource status of the profile.

## ProfilePropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfileScrubbingRules
### Properties
* **matchVariable**: 'QueryStringArgNames' | 'RequestIPAddress' | 'RequestUri' | string (Required): The variable to be scrubbed from the logs.
* **selector**: string: When matchVariable is a collection, operator used to specify which elements in the collection this rule applies to.
* **selectorMatchOperator**: 'EqualsAny' | string (Required): When matchVariable is a collection, operate on the selector to specify which elements in the collection this rule applies to.
* **state**: 'Disabled' | 'Enabled' | string: Defines the state of a log scrubbing rule. Default value is enabled.

## QueryStringMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## RateLimitRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' | string (Required): Describes what action to be applied when rule matches
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required): List of match conditions.
* **name**: string (Required): Defines the name of the custom rule
* **priority**: int {minValue: 0, maxValue: 1000} (Required): Defines in what order this rule be evaluated in the overall list of custom rules
* **rateLimitDurationInMinutes**: int {minValue: 0, maxValue: 60} (Required): Defines rate limit duration. Default is 1 minute.
* **rateLimitThreshold**: int {minValue: 0} (Required): Defines rate limit threshold.

## RateLimitRuleList
### Properties
* **rules**: [RateLimitRule](#ratelimitrule)[]: List of rules

## RemoteAddressMatchConditionParameters
### Properties
* **matchValues**: string[]: Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'GeoMatch' | 'IPMatch' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## RequestBodyMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## RequestHeaderMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **selector**: string: Name of Header to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## RequestMethodMatchConditionParameters
### Properties
* **matchValues**: ('DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE' | string)[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Equal' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## RequestSchemeMatchConditionParameters
### Properties
* **matchValues**: ('HTTP' | 'HTTPS' | string)[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Equal' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## RequestUriMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## ResourceReference
### Properties
* **id**: string: Resource ID.

## ResponseBasedOriginErrorDetectionParameters
### Properties
* **httpErrorRanges**: [HttpErrorRangeParameters](#httperrorrangeparameters)[]: The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy.
* **responseBasedDetectedErrorTypes**: 'None' | 'TcpAndHttpErrors' | 'TcpErrorsOnly': Type of response errors for real user requests for which origin will be deemed unhealthy
* **responseBasedFailoverThresholdPercentage**: int {minValue: 0, maxValue: 100}: The percentage of failed requests in the sample where failover should trigger.

## RouteConfigurationOverrideActionParameters
### Properties
* **cacheConfiguration**: [CacheConfiguration](#cacheconfiguration): The caching configuration associated with this rule. To disable caching, do not provide a cacheConfiguration object.
* **originGroupOverride**: [OriginGroupOverride](#origingroupoverride): A reference to the origin group override configuration. Leave empty to use the default origin group on route.
* **typeName**: 'DeliveryRuleCacheExpirationActionParameters' | 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters' | 'DeliveryRuleHeaderActionParameters' | 'DeliveryRuleOriginGroupOverrideActionParameters' | 'DeliveryRuleRouteConfigurationOverrideActionParameters' | 'DeliveryRuleUrlRedirectActionParameters' | 'DeliveryRuleUrlRewriteActionParameters' | 'DeliveryRuleUrlSigningActionParameters' | string (Required)

## RouteProperties
### Properties
* **cacheConfiguration**: [AfdRouteCacheConfiguration](#afdroutecacheconfiguration): The caching configuration for this route. To disable caching, do not provide a cacheConfiguration object.
* **customDomains**: [ActivatedResourceReference](#activatedresourcereference)[]: Domains referenced by this endpoint.
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled' | string: Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
* **endpointName**: string (ReadOnly): The name of the endpoint which holds the route.
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest' | string: Protocol this rule will use when forwarding traffic to backends.
* **httpsRedirect**: 'Disabled' | 'Enabled' | string: Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
* **linkToDefaultDomain**: 'Disabled' | 'Enabled' | string: whether this route will be linked to the default endpoint domain.
* **originGroup**: [ResourceReference](#resourcereference): A reference to the origin group.
* **originPath**: string: A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
* **patternsToMatch**: string[]: The route patterns of the rule.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status
* **ruleSets**: [ResourceReference](#resourcereference)[]: rule sets referenced by this endpoint.
* **supportedProtocols**: ('Http' | 'Https' | string)[]: List of supported protocols for this route.

## RuleProperties
### Properties
* **actions**: [DeliveryRuleAction](#deliveryruleaction)[]: A list of actions that are executed when all the conditions of a rule are satisfied.
* **conditions**: [DeliveryRuleCondition](#deliveryrulecondition)[]: A list of conditions that must be matched for the actions to be executed
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly)
* **matchProcessingBehavior**: 'Continue' | 'Stop' | string: If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
* **order**: int: The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status
* **ruleSetName**: string (ReadOnly): The name of the rule set containing the rule.

## RuleSetProperties
### Properties
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly)
* **profileName**: string (ReadOnly): The name of the profile which holds the rule set.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status

## SecretParameters
* **Discriminator**: type

### Base Properties

### AzureFirstPartyManagedCertificateParameters
#### Properties
* **certificateAuthority**: string (ReadOnly): Certificate issuing authority.
* **expirationDate**: string (ReadOnly): Certificate expiration date.
* **secretSource**: [ResourceReference](#resourcereference) (ReadOnly): Resource reference to the Azure Key Vault certificate. Expected to be in format of /subscriptions/{​​​​​​​​​subscriptionId}​​​​​​​​​/resourceGroups/{​​​​​​​​​resourceGroupName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/providers/Microsoft.KeyVault/vaults/{vaultName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/secrets/{certificateName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
* **subject**: string (ReadOnly): Subject name in the certificate.
* **subjectAlternativeNames**: string[]: The list of SANs.
* **thumbprint**: string (ReadOnly): Certificate thumbprint.
* **type**: 'AzureFirstPartyManagedCertificate' (Required): The type of the secret resource.

### CustomerCertificateParameters
#### Properties
* **certificateAuthority**: string (ReadOnly): Certificate issuing authority.
* **expirationDate**: string (ReadOnly): Certificate expiration date.
* **secretSource**: [ResourceReference](#resourcereference) (Required): Resource reference to the Azure Key Vault certificate. Expected to be in format of /subscriptions/{​​​​​​​​​subscriptionId}​​​​​​​​​/resourceGroups/{​​​​​​​​​resourceGroupName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/providers/Microsoft.KeyVault/vaults/{vaultName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/secrets/{certificateName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
* **secretVersion**: string: Version of the secret to be used
* **subject**: string (ReadOnly): Subject name in the certificate.
* **subjectAlternativeNames**: string[]: The list of SANs.
* **thumbprint**: string (ReadOnly): Certificate thumbprint.
* **type**: 'CustomerCertificate' (Required): The type of the secret resource.
* **useLatestVersion**: bool: Whether to use the latest version for the certificate

### ManagedCertificateParameters
#### Properties
* **expirationDate**: string (ReadOnly): Certificate expiration date.
* **subject**: string (ReadOnly): Subject name in the certificate.
* **type**: 'ManagedCertificate' (Required): The type of the secret resource.

### UrlSigningKeyParameters
#### Properties
* **keyId**: string (Required): Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash.
* **secretSource**: [ResourceReference](#resourcereference) (Required): Resource reference to the Azure Key Vault secret. Expected to be in format of /subscriptions/{​​​​​​​​​subscriptionId}​​​​​​​​​/resourceGroups/{​​​​​​​​​resourceGroupName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/providers/Microsoft.KeyVault/vaults/{vaultName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​/secrets/{secretName}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
* **secretVersion**: string: Version of the secret to be used
* **type**: 'UrlSigningKey' (Required): The type of the secret resource.


## SecretProperties
### Properties
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly)
* **parameters**: [SecretParameters](#secretparameters): object which contains secret parameters
* **profileName**: string (ReadOnly): The name of the profile which holds the secret.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status

## SecurityPolicyProperties
### Properties
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly)
* **parameters**: [SecurityPolicyPropertiesParameters](#securitypolicypropertiesparameters): object which contains security policy parameters
* **profileName**: string (ReadOnly): The name of the profile which holds the security policy.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning status

## SecurityPolicyPropertiesParameters
* **Discriminator**: type

### Base Properties

### SecurityPolicyWebApplicationFirewallParameters
#### Properties
* **associations**: [SecurityPolicyWebApplicationFirewallAssociation](#securitypolicywebapplicationfirewallassociation)[]: Waf associations
* **type**: 'WebApplicationFirewall' (Required): The type of the Security policy to create.
* **wafPolicy**: [ResourceReference](#resourcereference): Resource ID.


## SecurityPolicyWebApplicationFirewallAssociation
### Properties
* **domains**: [ActivatedResourceReference](#activatedresourcereference)[]: List of domains.
* **patternsToMatch**: string[]: List of paths

## ServerPortMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## SharedPrivateLinkResourceProperties
### Properties
* **groupId**: string: The group id from the provider of resource the shared private link resource is for.
* **privateLink**: [ResourceReference](#resourcereference): The resource id of the resource the shared private link resource is for.
* **privateLinkLocation**: string: The location of the shared private link resource
* **requestMessage**: string: The request message for requesting approval of the shared private link resource.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout': Status of the shared private link resource. Can be Pending, Approved, Rejected, Disconnected, or Timeout.

## Sku
### Properties
* **name**: 'Custom_Verizon' | 'Premium_AzureFrontDoor' | 'Premium_Verizon' | 'StandardPlus_955BandWidth_ChinaCdn' | 'StandardPlus_AvgBandWidth_ChinaCdn' | 'StandardPlus_ChinaCdn' | 'Standard_955BandWidth_ChinaCdn' | 'Standard_Akamai' | 'Standard_AvgBandWidth_ChinaCdn' | 'Standard_AzureFrontDoor' | 'Standard_ChinaCdn' | 'Standard_Microsoft' | 'Standard_Verizon' | string: Name of the pricing tier.

## SocketAddrMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'IPMatch' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## SslProtocolMatchConditionParameters
### Properties
* **matchValues**: ('TLSv1' | 'TLSv1.1' | 'TLSv1.2' | string)[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Equal' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: An identifier for the identity that created the resource
* **createdByType**: 'application' | 'key' | 'managedIdentity' | 'user' | string: The type of identity that created the resource
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: An identifier for the identity that last modified the resource
* **lastModifiedByType**: 'application' | 'key' | 'managedIdentity' | 'user' | string: The type of identity that last modified the resource

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UrlFileExtensionMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## UrlFileNameMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## UrlPathMatchConditionParameters
### Properties
* **matchValues**: string[]: The match value for the condition of the delivery rule
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | 'Wildcard' | string (Required): Describes operator to be matched
* **transforms**: ('Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string)[]: List of transforms
* **typeName**: 'DeliveryRuleClientPortConditionParameters' | 'DeliveryRuleCookiesConditionParameters' | 'DeliveryRuleHostNameConditionParameters' | 'DeliveryRuleHttpVersionConditionParameters' | 'DeliveryRuleIsDeviceConditionParameters' | 'DeliveryRulePostArgsConditionParameters' | 'DeliveryRuleQueryStringConditionParameters' | 'DeliveryRuleRemoteAddressConditionParameters' | 'DeliveryRuleRequestBodyConditionParameters' | 'DeliveryRuleRequestHeaderConditionParameters' | 'DeliveryRuleRequestMethodConditionParameters' | 'DeliveryRuleRequestSchemeConditionParameters' | 'DeliveryRuleRequestUriConditionParameters' | 'DeliveryRuleServerPortConditionParameters' | 'DeliveryRuleSocketAddrConditionParameters' | 'DeliveryRuleSslProtocolConditionParameters' | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' | 'DeliveryRuleUrlFilenameConditionParameters' | 'DeliveryRuleUrlPathMatchConditionParameters' | string (Required)

## UrlRedirectActionParameters
### Properties
* **customFragment**: string: Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
* **customHostname**: string: Host to redirect. Leave empty to use the incoming host as the destination host.
* **customPath**: string: The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
* **customQueryString**: string: The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in <key>=<value> format. ? and & will be added automatically so do not include them.
* **destinationProtocol**: 'Http' | 'Https' | 'MatchRequest' | string: Protocol to use for the redirect. The default value is MatchRequest
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect' | string (Required): The redirect type the rule will use when redirecting traffic.
* **typeName**: 'DeliveryRuleCacheExpirationActionParameters' | 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters' | 'DeliveryRuleHeaderActionParameters' | 'DeliveryRuleOriginGroupOverrideActionParameters' | 'DeliveryRuleRouteConfigurationOverrideActionParameters' | 'DeliveryRuleUrlRedirectActionParameters' | 'DeliveryRuleUrlRewriteActionParameters' | 'DeliveryRuleUrlSigningActionParameters' | string (Required)

## UrlRewriteActionParameters
### Properties
* **destination**: string (Required): Define the relative URL to which the above requests will be rewritten by.
* **preserveUnmatchedPath**: bool: Whether to preserve unmatched path. Default value is true.
* **sourcePattern**: string (Required): define a request URI pattern that identifies the type of requests that may be rewritten. If value is blank, all strings are matched.
* **typeName**: 'DeliveryRuleCacheExpirationActionParameters' | 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters' | 'DeliveryRuleHeaderActionParameters' | 'DeliveryRuleOriginGroupOverrideActionParameters' | 'DeliveryRuleRouteConfigurationOverrideActionParameters' | 'DeliveryRuleUrlRedirectActionParameters' | 'DeliveryRuleUrlRewriteActionParameters' | 'DeliveryRuleUrlSigningActionParameters' | string (Required)

## UrlSigningActionParameters
### Properties
* **algorithm**: 'SHA256' | string: Algorithm to use for URL signing
* **parameterNameOverride**: [UrlSigningParamIdentifier](#urlsigningparamidentifier)[]: Defines which query string parameters in the url to be considered for expires, key id etc.
* **typeName**: 'DeliveryRuleCacheExpirationActionParameters' | 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters' | 'DeliveryRuleHeaderActionParameters' | 'DeliveryRuleOriginGroupOverrideActionParameters' | 'DeliveryRuleRouteConfigurationOverrideActionParameters' | 'DeliveryRuleUrlRedirectActionParameters' | 'DeliveryRuleUrlRewriteActionParameters' | 'DeliveryRuleUrlSigningActionParameters' | string (Required)

## UrlSigningKey
### Properties
* **keyId**: string (Required): Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash.
* **keySourceParameters**: [KeyVaultSigningKeyParameters](#keyvaultsigningkeyparameters) (Required): Defines the parameters for using customer key vault for Url Signing Key.

## UrlSigningParamIdentifier
### Properties
* **paramIndicator**: 'Expires' | 'KeyId' | 'Signature' | string (Required): Indicates the purpose of the parameter
* **paramName**: string (Required): Parameter name

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

