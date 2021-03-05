# Microsoft.Cdn @ 2020-09-01

## Resource Microsoft.Cdn/CdnWebApplicationFirewallPolicies@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CdnWebApplicationFirewallPolicyProperties
* **sku**: Sku (Required)
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Cdn/CdnWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProfileProperties
* **sku**: Sku (Required)
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/afdEndpoints@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AFDEndpointProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Cdn/profiles/afdEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/afdEndpoints/routes@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RouteProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/afdEndpoints/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/customDomains@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AFDDomainProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/customDomains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EndpointProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/customDomains@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomDomainPropertiesParameters
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/originGroups@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OriginGroupProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/endpoints/originGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/origins@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OriginProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/endpoints/origins' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/originGroups@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AFDOriginGroupProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/originGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/originGroups/origins@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AFDOriginProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/originGroups/origins' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/ruleSets/rules@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RuleProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/ruleSets/rules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/secrets@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecretProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/secrets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/securityPolicies@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityPolicyProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/securityPolicies' (ReadOnly, DeployTimeConstant)

## CdnWebApplicationFirewallPolicyProperties
### Properties
* **customRules**: CustomRuleList
* **endpointLinks**: CdnEndpoint[] (ReadOnly)
* **managedRules**: ManagedRuleSetList
* **policySettings**: PolicySettings
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly)
* **rateLimitRules**: RateLimitRuleList
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)

## CustomRuleList
### Properties
* **rules**: CustomRule[]

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' (Required)
* **enabledState**: 'Disabled' | 'Enabled'
* **matchConditions**: MatchCondition[] (Required)
* **name**: string (Required)
* **priority**: int (Required)

## MatchCondition
### Properties
* **matchValue**: string[] (Required)
* **matchVariable**: 'Cookies' | 'HttpVersion' | 'IsDevice' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RemoteAddress' | 'RequestBody' | 'RequestHeader' | 'RequestMethod' | 'RequestScheme' | 'RequestUri' | 'SocketAddr' | 'UrlFileExtension' | 'UrlFileName' | 'UrlPath' (Required)
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode'[]

## CdnEndpoint
### Properties
* **id**: string

## ManagedRuleSetList
### Properties
* **managedRuleSets**: ManagedRuleSet[]

## ManagedRuleSet
### Properties
* **anomalyScore**: int
* **ruleGroupOverrides**: ManagedRuleGroupOverride[]
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ManagedRuleGroupOverride
### Properties
* **ruleGroupName**: string (Required)
* **rules**: ManagedRuleOverride[]

## ManagedRuleOverride
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect'
* **enabledState**: 'Disabled' | 'Enabled'
* **ruleId**: string (Required)

## PolicySettings
### Properties
* **defaultCustomBlockResponseBody**: string
* **defaultCustomBlockResponseStatusCode**: '200' | '403' | '405' | '406' | '429'
* **defaultRedirectUrl**: string
* **enabledState**: 'Disabled' | 'Enabled'
* **mode**: 'Detection' | 'Prevention'

## RateLimitRuleList
### Properties
* **rules**: RateLimitRule[]

## RateLimitRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' (Required)
* **enabledState**: 'Disabled' | 'Enabled'
* **matchConditions**: MatchCondition[] (Required)
* **name**: string (Required)
* **priority**: int (Required)
* **rateLimitDurationInMinutes**: int (Required)
* **rateLimitThreshold**: int (Required)

## Sku
### Properties
* **name**: 'Custom_Verizon' | 'Premium_AzureFrontDoor' | 'Premium_ChinaCdn' | 'Premium_Verizon' | 'StandardPlus_955BandWidth_ChinaCdn' | 'StandardPlus_AvgBandWidth_ChinaCdn' | 'StandardPlus_ChinaCdn' | 'Standard_955BandWidth_ChinaCdn' | 'Standard_Akamai' | 'Standard_AvgBandWidth_ChinaCdn' | 'Standard_AzureFrontDoor' | 'Standard_ChinaCdn' | 'Standard_Microsoft' | 'Standard_Verizon'

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'application' | 'key' | 'managedIdentity' | 'user'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'application' | 'key' | 'managedIdentity' | 'user'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfileProperties
### Properties
* **frontdoorId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AFDEndpointProperties
### Properties
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled'
* **hostName**: string (ReadOnly)
* **originResponseTimeoutSeconds**: int
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RouteProperties
### Properties
* **customDomains**: ResourceReference[]
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled'
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'
* **httpsRedirect**: 'Disabled' | 'Enabled'
* **linkToDefaultDomain**: 'Disabled' | 'Enabled'
* **originGroup**: ResourceReference
* **originPath**: string
* **patternsToMatch**: string[]
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **ruleSets**: ResourceReference[]
* **supportedProtocols**: 'Http' | 'Https'[]

## ResourceReference
### Properties
* **id**: string

## AFDDomainProperties
### Properties
* **azureDnsZone**: ResourceReference
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **domainValidationState**: 'Approved' | 'Pending' | 'PendingRevalidation' | 'Submitting' | 'TimedOut' | 'Unknown' (ReadOnly)
* **hostName**: string (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **tlsSettings**: AFDDomainHttpsParameters
* **validationProperties**: DomainValidationProperties (ReadOnly)

## AFDDomainHttpsParameters
### Properties
* **certificateType**: 'CustomerCertificate' | 'ManagedCertificate' (Required)
* **secret**: ResourceReference

## DomainValidationProperties
### Properties
* **expirationDate**: string (ReadOnly)
* **validationToken**: string (ReadOnly)

## EndpointProperties
### Properties
* **contentTypesToCompress**: string[]
* **defaultOriginGroup**: ResourceReference
* **deliveryPolicy**: EndpointPropertiesUpdateParametersDeliveryPolicy
* **geoFilters**: GeoFilter[]
* **hostName**: string (ReadOnly)
* **isCompressionEnabled**: bool
* **isHttpAllowed**: bool
* **isHttpsAllowed**: bool
* **optimizationType**: 'DynamicSiteAcceleration' | 'GeneralMediaStreaming' | 'GeneralWebDelivery' | 'LargeFileDownload' | 'VideoOnDemandMediaStreaming'
* **originGroups**: DeepCreatedOriginGroup[]
* **originHostHeader**: string
* **originPath**: string
* **origins**: DeepCreatedOrigin[] (Required)
* **probePath**: string
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **urlSigningKeys**: UrlSigningKey[]
* **webApplicationFirewallPolicyLink**: EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink

## EndpointPropertiesUpdateParametersDeliveryPolicy
### Properties
* **description**: string
* **rules**: DeliveryRule[] (Required)

## DeliveryRule
### Properties
* **actions**: DeliveryRuleAction[] (Required)
* **conditions**: DeliveryRuleCondition[]
* **name**: string
* **order**: int (Required)

## DeliveryRuleAction
* **Discriminator**: name

### Base Properties
### DeliveryRuleCacheExpirationAction
#### Properties
* **name**: 'CacheExpiration' (Required)
* **parameters**: CacheExpirationActionParameters (Required)

### DeliveryRuleCacheKeyQueryStringAction
#### Properties
* **name**: 'CacheKeyQueryString' (Required)
* **parameters**: CacheKeyQueryStringActionParameters (Required)

### DeliveryRuleRequestHeaderAction
#### Properties
* **name**: 'ModifyRequestHeader' (Required)
* **parameters**: HeaderActionParameters (Required)

### DeliveryRuleResponseHeaderAction
#### Properties
* **name**: 'ModifyResponseHeader' (Required)
* **parameters**: HeaderActionParameters (Required)

### OriginGroupOverrideAction
#### Properties
* **name**: 'OriginGroupOverride' (Required)
* **parameters**: OriginGroupOverrideActionParameters (Required)

### UrlRedirectAction
#### Properties
* **name**: 'UrlRedirect' (Required)
* **parameters**: UrlRedirectActionParameters (Required)

### UrlRewriteAction
#### Properties
* **name**: 'UrlRewrite' (Required)
* **parameters**: UrlRewriteActionParameters (Required)

### UrlSigningAction
#### Properties
* **name**: 'UrlSigning' (Required)
* **parameters**: UrlSigningActionParameters (Required)


## DeliveryRuleCacheExpirationAction
### Properties
* **name**: 'CacheExpiration' (Required)
* **parameters**: CacheExpirationActionParameters (Required)

## CacheExpirationActionParameters
### Properties
* **cacheBehavior**: 'BypassCache' | 'Override' | 'SetIfMissing' (Required)
* **cacheDuration**: string
* **cacheType**: 'All' (Required)

## DeliveryRuleCacheKeyQueryStringAction
### Properties
* **name**: 'CacheKeyQueryString' (Required)
* **parameters**: CacheKeyQueryStringActionParameters (Required)

## CacheKeyQueryStringActionParameters
### Properties
* **queryParameters**: string
* **queryStringBehavior**: 'Exclude' | 'ExcludeAll' | 'Include' | 'IncludeAll' (Required)

## DeliveryRuleRequestHeaderAction
### Properties
* **name**: 'ModifyRequestHeader' (Required)
* **parameters**: HeaderActionParameters (Required)

## HeaderActionParameters
### Properties
* **headerAction**: 'Append' | 'Delete' | 'Overwrite' (Required)
* **headerName**: string (Required)
* **value**: string

## DeliveryRuleResponseHeaderAction
### Properties
* **name**: 'ModifyResponseHeader' (Required)
* **parameters**: HeaderActionParameters (Required)

## OriginGroupOverrideAction
### Properties
* **name**: 'OriginGroupOverride' (Required)
* **parameters**: OriginGroupOverrideActionParameters (Required)

## OriginGroupOverrideActionParameters
### Properties
* **originGroup**: ResourceReference (Required)

## UrlRedirectAction
### Properties
* **name**: 'UrlRedirect' (Required)
* **parameters**: UrlRedirectActionParameters (Required)

## UrlRedirectActionParameters
### Properties
* **customFragment**: string
* **customHostname**: string
* **customPath**: string
* **customQueryString**: string
* **destinationProtocol**: 'Http' | 'Https' | 'MatchRequest'
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect' (Required)

## UrlRewriteAction
### Properties
* **name**: 'UrlRewrite' (Required)
* **parameters**: UrlRewriteActionParameters (Required)

## UrlRewriteActionParameters
### Properties
* **destination**: string (Required)
* **preserveUnmatchedPath**: bool
* **sourcePattern**: string (Required)

## UrlSigningAction
### Properties
* **name**: 'UrlSigning' (Required)
* **parameters**: UrlSigningActionParameters (Required)

## UrlSigningActionParameters
### Properties
* **algorithm**: 'SHA256'
* **parameterNameOverride**: UrlSigningParamIdentifier[]

## UrlSigningParamIdentifier
### Properties
* **paramIndicator**: 'Expires' | 'KeyId' | 'Signature' (Required)
* **paramName**: string (Required)

## DeliveryRuleCondition
* **Discriminator**: name

### Base Properties
### DeliveryRuleCookiesCondition
#### Properties
* **name**: 'Cookies' (Required)
* **parameters**: CookiesMatchConditionParameters (Required)

### DeliveryRuleHttpVersionCondition
#### Properties
* **name**: 'HttpVersion' (Required)
* **parameters**: HttpVersionMatchConditionParameters (Required)

### DeliveryRuleIsDeviceCondition
#### Properties
* **name**: 'IsDevice' (Required)
* **parameters**: IsDeviceMatchConditionParameters (Required)

### DeliveryRulePostArgsCondition
#### Properties
* **name**: 'PostArgs' (Required)
* **parameters**: PostArgsMatchConditionParameters (Required)

### DeliveryRuleQueryStringCondition
#### Properties
* **name**: 'QueryString' (Required)
* **parameters**: QueryStringMatchConditionParameters (Required)

### DeliveryRuleRemoteAddressCondition
#### Properties
* **name**: 'RemoteAddress' (Required)
* **parameters**: RemoteAddressMatchConditionParameters (Required)

### DeliveryRuleRequestBodyCondition
#### Properties
* **name**: 'RequestBody' (Required)
* **parameters**: RequestBodyMatchConditionParameters (Required)

### DeliveryRuleRequestHeaderCondition
#### Properties
* **name**: 'RequestHeader' (Required)
* **parameters**: RequestHeaderMatchConditionParameters (Required)

### DeliveryRuleRequestMethodCondition
#### Properties
* **name**: 'RequestMethod' (Required)
* **parameters**: RequestMethodMatchConditionParameters (Required)

### DeliveryRuleRequestSchemeCondition
#### Properties
* **name**: 'RequestScheme' (Required)
* **parameters**: RequestSchemeMatchConditionParameters (Required)

### DeliveryRuleRequestUriCondition
#### Properties
* **name**: 'RequestUri' (Required)
* **parameters**: RequestUriMatchConditionParameters (Required)

### DeliveryRuleUrlFileExtensionCondition
#### Properties
* **name**: 'UrlFileExtension' (Required)
* **parameters**: UrlFileExtensionMatchConditionParameters (Required)

### DeliveryRuleUrlFileNameCondition
#### Properties
* **name**: 'UrlFileName' (Required)
* **parameters**: UrlFileNameMatchConditionParameters (Required)

### DeliveryRuleUrlPathCondition
#### Properties
* **name**: 'UrlPath' (Required)
* **parameters**: UrlPathMatchConditionParameters (Required)


## DeliveryRuleCookiesCondition
### Properties
* **name**: 'Cookies' (Required)
* **parameters**: CookiesMatchConditionParameters (Required)

## CookiesMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleHttpVersionCondition
### Properties
* **name**: 'HttpVersion' (Required)
* **parameters**: HttpVersionMatchConditionParameters (Required)

## HttpVersionMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Equal' (Required)

## DeliveryRuleIsDeviceCondition
### Properties
* **name**: 'IsDevice' (Required)
* **parameters**: IsDeviceMatchConditionParameters (Required)

## IsDeviceMatchConditionParameters
### Properties
* **matchValues**: 'Desktop' | 'Mobile'[]
* **negateCondition**: bool
* **operator**: 'Equal' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRulePostArgsCondition
### Properties
* **name**: 'PostArgs' (Required)
* **parameters**: PostArgsMatchConditionParameters (Required)

## PostArgsMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleQueryStringCondition
### Properties
* **name**: 'QueryString' (Required)
* **parameters**: QueryStringMatchConditionParameters (Required)

## QueryStringMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleRemoteAddressCondition
### Properties
* **name**: 'RemoteAddress' (Required)
* **parameters**: RemoteAddressMatchConditionParameters (Required)

## RemoteAddressMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'GeoMatch' | 'IPMatch' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleRequestBodyCondition
### Properties
* **name**: 'RequestBody' (Required)
* **parameters**: RequestBodyMatchConditionParameters (Required)

## RequestBodyMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleRequestHeaderCondition
### Properties
* **name**: 'RequestHeader' (Required)
* **parameters**: RequestHeaderMatchConditionParameters (Required)

## RequestHeaderMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleRequestMethodCondition
### Properties
* **name**: 'RequestMethod' (Required)
* **parameters**: RequestMethodMatchConditionParameters (Required)

## RequestMethodMatchConditionParameters
### Properties
* **matchValues**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE'[]
* **negateCondition**: bool
* **operator**: 'Equal' (Required)

## DeliveryRuleRequestSchemeCondition
### Properties
* **name**: 'RequestScheme' (Required)
* **parameters**: RequestSchemeMatchConditionParameters (Required)

## RequestSchemeMatchConditionParameters
### Properties
* **matchValues**: 'HTTP' | 'HTTPS'[]
* **negateCondition**: bool

## DeliveryRuleRequestUriCondition
### Properties
* **name**: 'RequestUri' (Required)
* **parameters**: RequestUriMatchConditionParameters (Required)

## RequestUriMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleUrlFileExtensionCondition
### Properties
* **name**: 'UrlFileExtension' (Required)
* **parameters**: UrlFileExtensionMatchConditionParameters (Required)

## UrlFileExtensionMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleUrlFileNameCondition
### Properties
* **name**: 'UrlFileName' (Required)
* **parameters**: UrlFileNameMatchConditionParameters (Required)

## UrlFileNameMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleUrlPathCondition
### Properties
* **name**: 'UrlPath' (Required)
* **parameters**: UrlPathMatchConditionParameters (Required)

## UrlPathMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | 'Wildcard' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## GeoFilter
### Properties
* **countryCodes**: string[] (Required)
* **relativePath**: string (Required)

## DeepCreatedOriginGroup
### Properties
* **name**: string (Required)
* **properties**: DeepCreatedOriginGroupProperties

## DeepCreatedOriginGroupProperties
### Properties
* **healthProbeSettings**: HealthProbeParameters
* **origins**: ResourceReference[] (Required)
* **responseBasedOriginErrorDetectionSettings**: ResponseBasedOriginErrorDetectionParameters
* **trafficRestorationTimeToHealedOrNewEndpointsInMinutes**: int

## HealthProbeParameters
### Properties
* **probeIntervalInSeconds**: int
* **probePath**: string

## ResponseBasedOriginErrorDetectionParameters
### Properties
* **httpErrorRanges**: HttpErrorRangeParameters[]
* **responseBasedFailoverThresholdPercentage**: int

## HttpErrorRangeParameters
### Properties
* **begin**: int
* **end**: int

## DeepCreatedOrigin
### Properties
* **name**: string (Required)
* **properties**: DeepCreatedOriginProperties

## DeepCreatedOriginProperties
### Properties
* **enabled**: bool
* **hostName**: string (Required)
* **httpPort**: int
* **httpsPort**: int
* **originHostHeader**: string
* **priority**: int
* **privateLinkAlias**: string
* **privateLinkApprovalMessage**: string
* **privateLinkLocation**: string
* **privateLinkResourceId**: string
* **weight**: int

## UrlSigningKey
### Properties
* **keyId**: string (Required)
* **keySourceParameters**: KeyVaultSigningKeyParameters (Required)

## KeyVaultSigningKeyParameters
### Properties
* **resourceGroupName**: string (Required)
* **secretName**: string (Required)
* **secretVersion**: string (Required)
* **subscriptionId**: string (Required)
* **vaultName**: string (Required)

## EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink
### Properties
* **id**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomDomainPropertiesParameters
### Properties
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' (ReadOnly)
* **customHttpsProvisioningSubstate**: 'CertificateDeleted' | 'CertificateDeployed' | 'DeletingCertificate' | 'DeployingCertificate' | 'DomainControlValidationRequestApproved' | 'DomainControlValidationRequestRejected' | 'DomainControlValidationRequestTimedOut' | 'IssuingCertificate' | 'PendingDomainControlValidationREquestApproval' | 'SubmittingDomainControlValidationRequest' (ReadOnly)
* **hostName**: string (Required)
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly)
* **validationData**: string (ReadOnly)

## OriginGroupProperties
### Properties
* **healthProbeSettings**: HealthProbeParameters
* **origins**: ResourceReference[]
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly)
* **responseBasedOriginErrorDetectionSettings**: ResponseBasedOriginErrorDetectionParameters
* **trafficRestorationTimeToHealedOrNewEndpointsInMinutes**: int

## OriginProperties
### Properties
* **enabled**: bool
* **hostName**: string
* **httpPort**: int
* **httpsPort**: int
* **originHostHeader**: string
* **priority**: int
* **privateEndpointStatus**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' (ReadOnly)
* **privateLinkAlias**: string
* **privateLinkApprovalMessage**: string
* **privateLinkLocation**: string
* **privateLinkResourceId**: string
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly)
* **weight**: int

## AFDOriginGroupProperties
### Properties
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **healthProbeSettings**: HealthProbeParameters
* **loadBalancingSettings**: LoadBalancingSettingsParameters
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **responseBasedAfdOriginErrorDetectionSettings**: ResponseBasedOriginErrorDetectionParameters
* **sessionAffinityState**: 'Disabled' | 'Enabled'
* **trafficRestorationTimeToHealedOrNewEndpointsInMinutes**: int

## LoadBalancingSettingsParameters
### Properties
* **additionalLatencyInMilliseconds**: int
* **sampleSize**: int
* **successfulSamplesRequired**: int

## AFDOriginProperties
### Properties
* **azureOrigin**: ResourceReference
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled'
* **hostName**: string
* **httpPort**: int
* **httpsPort**: int
* **originHostHeader**: string
* **priority**: int
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **weight**: int

## RuleProperties
### Properties
* **actions**: DeliveryRuleAction[]
* **conditions**: DeliveryRuleCondition[]
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **matchProcessingBehavior**: 'Continue' | 'Stop'
* **order**: int
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## SecretProperties
### Properties
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **parameters**: SecretParameters
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## SecretParameters
* **Discriminator**: type

### Base Properties
### CustomerCertificateParameters
#### Properties
* **certificateAuthority**: string
* **secretSource**: ResourceReference (Required)
* **secretVersion**: string
* **subjectAlternativeNames**: string[]
* **type**: 'CustomerCertificate' (Required)
* **useLatestVersion**: bool

### ManagedCertificateParameters
#### Properties
* **type**: 'ManagedCertificate' (Required)

### UrlSigningKeyParameters
#### Properties
* **keyId**: string (Required)
* **secretSource**: ResourceReference (Required)
* **secretVersion**: string
* **type**: 'UrlSigningKey' (Required)


## CustomerCertificateParameters
### Properties
* **certificateAuthority**: string
* **secretSource**: ResourceReference (Required)
* **secretVersion**: string
* **subjectAlternativeNames**: string[]
* **type**: 'CustomerCertificate' (Required)
* **useLatestVersion**: bool

## ManagedCertificateParameters
### Properties
* **type**: 'ManagedCertificate' (Required)

## UrlSigningKeyParameters
### Properties
* **keyId**: string (Required)
* **secretSource**: ResourceReference (Required)
* **secretVersion**: string
* **type**: 'UrlSigningKey' (Required)

## SecurityPolicyProperties
### Properties
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **parameters**: SecurityPolicyParameters
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## SecurityPolicyParameters
* **Discriminator**: type

### Base Properties
### SecurityPolicyWebApplicationFirewallParameters
#### Properties
* **associations**: SecurityPolicyWebApplicationFirewallAssociation[]
* **type**: 'WebApplicationFirewall' (Required)
* **wafPolicy**: ResourceReference


## SecurityPolicyWebApplicationFirewallParameters
### Properties
* **associations**: SecurityPolicyWebApplicationFirewallAssociation[]
* **type**: 'WebApplicationFirewall' (Required)
* **wafPolicy**: ResourceReference

## SecurityPolicyWebApplicationFirewallAssociation
### Properties
* **domains**: ResourceReference[]
* **patternsToMatch**: string[]

