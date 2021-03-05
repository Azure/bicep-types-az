# Microsoft.Cdn @ 2019-06-15

## Resource Microsoft.Cdn/CdnWebApplicationFirewallPolicies@2019-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-15' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CdnWebApplicationFirewallPolicyProperties
* **sku**: Sku (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Cdn/CdnWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles@2019-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProfileProperties
* **sku**: Sku (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints@2019-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EndpointProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/customDomains@2019-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomDomainPropertiesParameters
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant)

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
* **name**: 'Custom_Verizon' | 'Premium_ChinaCdn' | 'Premium_Verizon' | 'Standard_Akamai' | 'Standard_ChinaCdn' | 'Standard_Microsoft' | 'Standard_Verizon'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfileProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointProperties
### Properties
* **contentTypesToCompress**: string[]
* **deliveryPolicy**: EndpointPropertiesUpdateParametersDeliveryPolicy
* **geoFilters**: GeoFilter[]
* **hostName**: string (ReadOnly)
* **isCompressionEnabled**: bool
* **isHttpAllowed**: bool
* **isHttpsAllowed**: bool
* **optimizationType**: 'DynamicSiteAcceleration' | 'GeneralMediaStreaming' | 'GeneralWebDelivery' | 'LargeFileDownload' | 'VideoOnDemandMediaStreaming'
* **originHostHeader**: string
* **originPath**: string
* **origins**: DeepCreatedOrigin[] (Required)
* **probePath**: string
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
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

### UrlRedirectAction
#### Properties
* **name**: 'UrlRedirect' (Required)
* **parameters**: UrlRedirectActionParameters (Required)

### UrlRewriteAction
#### Properties
* **name**: 'UrlRewrite' (Required)
* **parameters**: UrlRewriteActionParameters (Required)


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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleRequestHeaderCondition
### Properties
* **name**: 'RequestHeader' (Required)
* **parameters**: RequestHeaderMatchConditionParameters (Required)

## RequestHeaderMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleUrlFileExtensionCondition
### Properties
* **name**: 'UrlFileExtension' (Required)
* **parameters**: UrlFileExtensionMatchConditionParameters (Required)

## UrlFileExtensionMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleUrlFileNameCondition
### Properties
* **name**: 'UrlFileName' (Required)
* **parameters**: UrlFileNameMatchConditionParameters (Required)

## UrlFileNameMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleUrlPathCondition
### Properties
* **name**: 'UrlPath' (Required)
* **parameters**: UrlPathMatchConditionParameters (Required)

## UrlPathMatchConditionParameters
### Properties
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'Wildcard' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## GeoFilter
### Properties
* **countryCodes**: string[] (Required)
* **relativePath**: string (Required)

## DeepCreatedOrigin
### Properties
* **name**: string (Required)
* **properties**: DeepCreatedOriginProperties

## DeepCreatedOriginProperties
### Properties
* **hostName**: string (Required)
* **httpPort**: int
* **httpsPort**: int

## EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink
### Properties
* **id**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomDomainPropertiesParameters
### Properties
* **hostName**: string (Required)

