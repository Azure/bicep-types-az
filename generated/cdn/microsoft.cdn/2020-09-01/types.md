# Microsoft.Cdn @ 2020-09-01

## Resource Microsoft.Cdn/CdnWebApplicationFirewallPolicies@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CdnWebApplicationFirewallPolicyProperties](#cdnwebapplicationfirewallpolicyproperties)
* **sku**: [Sku](#sku) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Cdn/CdnWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProfileProperties](#profileproperties)
* **sku**: [Sku](#sku) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/afdEndpoints@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AFDEndpointProperties](#afdendpointproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Cdn/profiles/afdEndpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/afdEndpoints/routes@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RouteProperties](#routeproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/afdEndpoints/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/customDomains@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AFDDomainProperties](#afddomainproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/customDomains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EndpointProperties](#endpointproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/customDomains@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CustomDomainPropertiesParameters](#customdomainpropertiesparameters)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/originGroups@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OriginGroupProperties](#origingroupproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/endpoints/originGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/origins@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OriginProperties](#originproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/endpoints/origins' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/originGroups@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AFDOriginGroupProperties](#afdorigingroupproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/originGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/originGroups/origins@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AFDOriginProperties](#afdoriginproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/originGroups/origins' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/ruleSets@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RuleSetProperties](#rulesetproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/ruleSets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/ruleSets/rules@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RuleProperties](#ruleproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/ruleSets/rules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/secrets@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecretProperties](#secretproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/secrets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/securityPolicies@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityPolicyProperties](#securitypolicyproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Cdn/profiles/securityPolicies' (ReadOnly, DeployTimeConstant)

## CdnWebApplicationFirewallPolicyProperties
### Properties
* **customRules**: [CustomRuleList](#customrulelist)
* **endpointLinks**: [CdnEndpoint](#cdnendpoint)[] (ReadOnly)
* **managedRules**: [ManagedRuleSetList](#managedrulesetlist)
* **policySettings**: [policySettings](#policysettings)
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' (ReadOnly)
* **rateLimitRules**: [RateLimitRuleList](#ratelimitrulelist)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)

## CustomRuleList
### Properties
* **rules**: [CustomRule](#customrule)[]

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' (Required)
* **enabledState**: 'Disabled' | 'Enabled'
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required)
* **name**: string (Required)
* **priority**: int (Required)

## MatchCondition
### Properties
* **matchValue**: string[] (Required)
* **matchVariable**: 'Cookies' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestHeader' | 'RequestMethod' | 'RequestUri' | 'SocketAddr' (Required)
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode'[]

## CdnEndpoint
### Properties
* **id**: string

## ManagedRuleSetList
### Properties
* **managedRuleSets**: [ManagedRuleSet](#managedruleset)[]

## ManagedRuleSet
### Properties
* **anomalyScore**: int
* **ruleGroupOverrides**: [ManagedRuleGroupOverride](#managedrulegroupoverride)[]
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ManagedRuleGroupOverride
### Properties
* **ruleGroupName**: string (Required)
* **rules**: [ManagedRuleOverride](#managedruleoverride)[]

## ManagedRuleOverride
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect'
* **enabledState**: 'Disabled' | 'Enabled'
* **ruleId**: string (Required)

## policySettings
### Properties
* **defaultCustomBlockResponseBody**: string
* **defaultCustomBlockResponseStatusCode**: int
* **defaultRedirectUrl**: string
* **enabledState**: 'Disabled' | 'Enabled'
* **mode**: 'Detection' | 'Prevention'

## RateLimitRuleList
### Properties
* **rules**: [RateLimitRule](#ratelimitrule)[]

## RateLimitRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' (Required)
* **enabledState**: 'Disabled' | 'Enabled'
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required)
* **name**: string (Required)
* **priority**: int (Required)
* **rateLimitDurationInMinutes**: int (Required)
* **rateLimitThreshold**: int (Required)

## Sku
### Properties
* **name**: 'Custom_Verizon' | 'Premium_AzureFrontDoor' | 'Premium_ChinaCdn' | 'Premium_Verizon' | 'Standard_955BandWidth_ChinaCdn' | 'Standard_Akamai' | 'Standard_AvgBandWidth_ChinaCdn' | 'Standard_AzureFrontDoor' | 'Standard_ChinaCdn' | 'Standard_Microsoft' | 'Standard_Verizon' | 'StandardPlus_955BandWidth_ChinaCdn' | 'StandardPlus_AvgBandWidth_ChinaCdn' | 'StandardPlus_ChinaCdn'

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'application' | 'key' | 'managedIdentity' | 'user'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'application' | 'key' | 'managedIdentity' | 'user'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfileProperties
### Properties
* **frontdoorId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' (ReadOnly)

## Dictionary<string,String>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RouteProperties
### Properties
* **compressionSettings**: any
* **customDomains**: [ResourceReference](#resourcereference)[]
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled'
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'
* **httpsRedirect**: 'Disabled' | 'Enabled'
* **linkToDefaultDomain**: 'Disabled' | 'Enabled'
* **originGroup**: [ResourceReference](#resourcereference) (Required)
* **originPath**: string
* **patternsToMatch**: string[]
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **queryStringCachingBehavior**: 'IgnoreQueryString' | 'NotSet' | 'UseQueryString'
* **ruleSets**: [ResourceReference](#resourcereference)[]
* **supportedProtocols**: 'Http' | 'Https'[]

## ResourceReference
### Properties
* **id**: string

## AFDDomainProperties
### Properties
* **azureDnsZone**: [ResourceReference](#resourcereference)
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **domainValidationState**: 'Approved' | 'Pending' | 'PendingRevalidation' | 'Submitting' | 'TimedOut' | 'Unknown' (ReadOnly)
* **hostName**: string (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **tlsSettings**: [AFDDomainHttpsParameters](#afddomainhttpsparameters)
* **validationProperties**: [DomainValidationProperties](#domainvalidationproperties) (ReadOnly)

## AFDDomainHttpsParameters
### Properties
* **certificateType**: 'CustomerCertificate' | 'ManagedCertificate' (Required)
* **minimumTlsVersion**: 'TLS10' | 'TLS12'
* **secret**: [ResourceReference](#resourcereference)

## DomainValidationProperties
### Properties
* **expirationDate**: string (ReadOnly)
* **validationToken**: string (ReadOnly)

## EndpointProperties
### Properties
* **contentTypesToCompress**: string[]
* **defaultOriginGroup**: [ResourceReference](#resourcereference)
* **deliveryPolicy**: [schemas:10_deliveryPolicy](#schemas10deliverypolicy)
* **geoFilters**: [GeoFilter](#geofilter)[]
* **hostName**: string (ReadOnly)
* **isCompressionEnabled**: bool
* **isHttpAllowed**: bool
* **isHttpsAllowed**: bool
* **optimizationType**: 'DynamicSiteAcceleration' | 'GeneralMediaStreaming' | 'GeneralWebDelivery' | 'LargeFileDownload' | 'VideoOnDemandMediaStreaming'
* **originGroups**: [DeepCreatedOriginGroup](#deepcreatedorigingroup)[]
* **originHostHeader**: string
* **originPath**: string
* **origins**: [DeepCreatedOrigin](#deepcreatedorigin)[] (Required)
* **probePath**: string
* **provisioningState**: string (ReadOnly)
* **queryStringCachingBehavior**: 'BypassCaching' | 'IgnoreQueryString' | 'NotSet' | 'UseQueryString'
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **urlSigningKeys**: [UrlSigningKey](#urlsigningkey)[]
* **webApplicationFirewallPolicyLink**: [schemas:10_webApplicationFirewallPolicyLink](#schemas10webapplicationfirewallpolicylink)

## schemas:10_deliveryPolicy
### Properties
* **description**: string
* **rules**: [DeliveryRule](#deliveryrule)[] (Required)

## DeliveryRule
### Properties
* **actions**: [DeliveryRuleAction](#deliveryruleaction)[] (Required)
* **conditions**: [DeliveryRuleCondition](#deliveryrulecondition)[]
* **name**: string
* **order**: int (Required)

## DeliveryRuleAction
* **Discriminator**: name
### Base Properties
### CacheExpiration
#### Properties
* **name**: 'CacheExpiration' (Required)
* **parameters**: [CacheExpirationActionParameters](#cacheexpirationactionparameters) (Required)

### CacheKeyQueryString
#### Properties
* **name**: 'CacheKeyQueryString' (Required)
* **parameters**: [CacheKeyQueryStringActionParameters](#cachekeyquerystringactionparameters) (Required)

### ModifyRequestHeader
#### Properties
* **name**: 'ModifyRequestHeader' (Required)
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required)

### ModifyResponseHeader
#### Properties
* **name**: 'ModifyResponseHeader' (Required)
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required)

### OriginGroupOverride
#### Properties
* **name**: 'OriginGroupOverride' (Required)
* **parameters**: [OriginGroupOverrideActionParameters](#origingroupoverrideactionparameters) (Required)

### UrlRedirect
#### Properties
* **name**: 'UrlRedirect' (Required)
* **parameters**: [UrlRedirectActionParameters](#urlredirectactionparameters) (Required)

### UrlRewrite
#### Properties
* **name**: 'UrlRewrite' (Required)
* **parameters**: [UrlRewriteActionParameters](#urlrewriteactionparameters) (Required)

### UrlSigning
#### Properties
* **name**: 'UrlSigning' (Required)
* **parameters**: [UrlSigningActionParameters](#urlsigningactionparameters) (Required)


## CacheExpiration
### Properties
* **name**: 'CacheExpiration' (Required)
* **parameters**: [CacheExpirationActionParameters](#cacheexpirationactionparameters) (Required)

## CacheExpirationActionParameters
### Properties
* **@odata.type**: string (Required)
* **cacheBehavior**: 'BypassCache' | 'Override' | 'SetIfMissing' (Required)
* **cacheDuration**: string
* **cacheType**: string (Required)

## CacheKeyQueryString
### Properties
* **name**: 'CacheKeyQueryString' (Required)
* **parameters**: [CacheKeyQueryStringActionParameters](#cachekeyquerystringactionparameters) (Required)

## CacheKeyQueryStringActionParameters
### Properties
* **@odata.type**: string (Required)
* **queryParameters**: string
* **queryStringBehavior**: 'Exclude' | 'ExcludeAll' | 'Include' | 'IncludeAll' (Required)

## ModifyRequestHeader
### Properties
* **name**: 'ModifyRequestHeader' (Required)
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required)

## HeaderActionParameters
### Properties
* **@odata.type**: string (Required)
* **headerAction**: 'Append' | 'Delete' | 'Overwrite' (Required)
* **headerName**: string (Required)
* **value**: string

## ModifyResponseHeader
### Properties
* **name**: 'ModifyResponseHeader' (Required)
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required)

## OriginGroupOverride
### Properties
* **name**: 'OriginGroupOverride' (Required)
* **parameters**: [OriginGroupOverrideActionParameters](#origingroupoverrideactionparameters) (Required)

## OriginGroupOverrideActionParameters
### Properties
* **@odata.type**: string (Required)
* **originGroup**: [ResourceReference](#resourcereference) (Required)

## UrlRedirect
### Properties
* **name**: 'UrlRedirect' (Required)
* **parameters**: [UrlRedirectActionParameters](#urlredirectactionparameters) (Required)

## UrlRedirectActionParameters
### Properties
* **@odata.type**: string (Required)
* **customFragment**: string
* **customHostname**: string
* **customPath**: string
* **customQueryString**: string
* **destinationProtocol**: 'Http' | 'Https' | 'MatchRequest'
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect' (Required)

## UrlRewrite
### Properties
* **name**: 'UrlRewrite' (Required)
* **parameters**: [UrlRewriteActionParameters](#urlrewriteactionparameters) (Required)

## UrlRewriteActionParameters
### Properties
* **@odata.type**: string (Required)
* **destination**: string (Required)
* **preserveUnmatchedPath**: bool
* **sourcePattern**: string (Required)

## UrlSigning
### Properties
* **name**: 'UrlSigning' (Required)
* **parameters**: [UrlSigningActionParameters](#urlsigningactionparameters) (Required)

## UrlSigningActionParameters
### Properties
* **@odata.type**: string (Required)
* **algorithm**: 'SHA256'
* **parameterNameOverride**: [UrlSigningParamIdentifier](#urlsigningparamidentifier)[]

## UrlSigningParamIdentifier
### Properties
* **paramIndicator**: 'Expires' | 'KeyId' | 'Signature' (Required)
* **paramName**: string (Required)

## DeliveryRuleCondition
* **Discriminator**: name
### Base Properties
### Cookies
#### Properties
* **name**: 'Cookies' (Required)
* **parameters**: [CookiesMatchConditionParameters](#cookiesmatchconditionparameters) (Required)

### HttpVersion
#### Properties
* **name**: 'HttpVersion' (Required)
* **parameters**: [HttpVersionMatchConditionParameters](#httpversionmatchconditionparameters) (Required)

### IsDevice
#### Properties
* **name**: 'IsDevice' (Required)
* **parameters**: [IsDeviceMatchConditionParameters](#isdevicematchconditionparameters) (Required)

### PostArgs
#### Properties
* **name**: 'PostArgs' (Required)
* **parameters**: [PostArgsMatchConditionParameters](#postargsmatchconditionparameters) (Required)

### QueryString
#### Properties
* **name**: 'QueryString' (Required)
* **parameters**: [QueryStringMatchConditionParameters](#querystringmatchconditionparameters) (Required)

### RemoteAddress
#### Properties
* **name**: 'RemoteAddress' (Required)
* **parameters**: [RemoteAddressMatchConditionParameters](#remoteaddressmatchconditionparameters) (Required)

### RequestBody
#### Properties
* **name**: 'RequestBody' (Required)
* **parameters**: [RequestBodyMatchConditionParameters](#requestbodymatchconditionparameters) (Required)

### RequestHeader
#### Properties
* **name**: 'RequestHeader' (Required)
* **parameters**: [RequestHeaderMatchConditionParameters](#requestheadermatchconditionparameters) (Required)

### RequestMethod
#### Properties
* **name**: 'RequestMethod' (Required)
* **parameters**: [RequestMethodMatchConditionParameters](#requestmethodmatchconditionparameters) (Required)

### RequestScheme
#### Properties
* **name**: 'RequestScheme' (Required)
* **parameters**: [RequestSchemeMatchConditionParameters](#requestschemematchconditionparameters) (Required)

### RequestUri
#### Properties
* **name**: 'RequestUri' (Required)
* **parameters**: [RequestUriMatchConditionParameters](#requesturimatchconditionparameters) (Required)

### UrlFileExtension
#### Properties
* **name**: 'UrlFileExtension' (Required)
* **parameters**: [UrlFileExtensionMatchConditionParameters](#urlfileextensionmatchconditionparameters) (Required)

### UrlFileName
#### Properties
* **name**: 'UrlFileName' (Required)
* **parameters**: [UrlFileNameMatchConditionParameters](#urlfilenamematchconditionparameters) (Required)

### UrlPath
#### Properties
* **name**: 'UrlPath' (Required)
* **parameters**: [UrlPathMatchConditionParameters](#urlpathmatchconditionparameters) (Required)


## Cookies
### Properties
* **name**: 'Cookies' (Required)
* **parameters**: [CookiesMatchConditionParameters](#cookiesmatchconditionparameters) (Required)

## CookiesMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'Uppercase'[]

## HttpVersion
### Properties
* **name**: 'HttpVersion' (Required)
* **parameters**: [HttpVersionMatchConditionParameters](#httpversionmatchconditionparameters) (Required)

## HttpVersionMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: string (Required)

## IsDevice
### Properties
* **name**: 'IsDevice' (Required)
* **parameters**: [IsDeviceMatchConditionParameters](#isdevicematchconditionparameters) (Required)

## IsDeviceMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: 'Desktop' | 'Mobile'[]
* **negateCondition**: bool
* **operator**: string (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## PostArgs
### Properties
* **name**: 'PostArgs' (Required)
* **parameters**: [PostArgsMatchConditionParameters](#postargsmatchconditionparameters) (Required)

## PostArgsMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'Uppercase'[]

## QueryString
### Properties
* **name**: 'QueryString' (Required)
* **parameters**: [QueryStringMatchConditionParameters](#querystringmatchconditionparameters) (Required)

## QueryStringMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## RemoteAddress
### Properties
* **name**: 'RemoteAddress' (Required)
* **parameters**: [RemoteAddressMatchConditionParameters](#remoteaddressmatchconditionparameters) (Required)

## RemoteAddressMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'GeoMatch' | 'IPMatch' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## RequestBody
### Properties
* **name**: 'RequestBody' (Required)
* **parameters**: [RequestBodyMatchConditionParameters](#requestbodymatchconditionparameters) (Required)

## RequestBodyMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## RequestHeader
### Properties
* **name**: 'RequestHeader' (Required)
* **parameters**: [RequestHeaderMatchConditionParameters](#requestheadermatchconditionparameters) (Required)

## RequestHeaderMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'Uppercase'[]

## RequestMethod
### Properties
* **name**: 'RequestMethod' (Required)
* **parameters**: [RequestMethodMatchConditionParameters](#requestmethodmatchconditionparameters) (Required)

## RequestMethodMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE'[]
* **negateCondition**: bool
* **operator**: string (Required)

## RequestScheme
### Properties
* **name**: 'RequestScheme' (Required)
* **parameters**: [RequestSchemeMatchConditionParameters](#requestschemematchconditionparameters) (Required)

## RequestSchemeMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: 'HTTP' | 'HTTPS'[]
* **negateCondition**: bool
* **operator**: string (Required)

## RequestUri
### Properties
* **name**: 'RequestUri' (Required)
* **parameters**: [RequestUriMatchConditionParameters](#requesturimatchconditionparameters) (Required)

## RequestUriMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## UrlFileExtension
### Properties
* **name**: 'UrlFileExtension' (Required)
* **parameters**: [UrlFileExtensionMatchConditionParameters](#urlfileextensionmatchconditionparameters) (Required)

## UrlFileExtensionMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## UrlFileName
### Properties
* **name**: 'UrlFileName' (Required)
* **parameters**: [UrlFileNameMatchConditionParameters](#urlfilenamematchconditionparameters) (Required)

## UrlFileNameMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## UrlPath
### Properties
* **name**: 'UrlPath' (Required)
* **parameters**: [UrlPathMatchConditionParameters](#urlpathmatchconditionparameters) (Required)

## UrlPathMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | 'Wildcard' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## GeoFilter
### Properties
* **action**: 'Allow' | 'Block' (Required)
* **countryCodes**: string[] (Required)
* **relativePath**: string (Required)

## DeepCreatedOriginGroup
### Properties
* **name**: string (Required)
* **properties**: [DeepCreatedOriginGroupProperties](#deepcreatedorigingroupproperties)

## DeepCreatedOriginGroupProperties
### Properties
* **healthProbeSettings**: [HealthProbeParameters](#healthprobeparameters)
* **origins**: [ResourceReference](#resourcereference)[] (Required)
* **responseBasedOriginErrorDetectionSettings**: [ResponseBasedOriginErrorDetectionParameters](#responsebasedoriginerrordetectionparameters)
* **trafficRestorationTimeToHealedOrNewEndpointsInMinutes**: int

## HealthProbeParameters
### Properties
* **probeIntervalInSeconds**: int
* **probePath**: string
* **probeProtocol**: 'Http' | 'Https' | 'NotSet'
* **probeRequestType**: 'GET' | 'HEAD' | 'NotSet'

## ResponseBasedOriginErrorDetectionParameters
### Properties
* **httpErrorRanges**: [HttpErrorRangeParameters](#httperrorrangeparameters)[]
* **responseBasedDetectedErrorTypes**: 'None' | 'TcpAndHttpErrors' | 'TcpErrorsOnly'
* **responseBasedFailoverThresholdPercentage**: int

## HttpErrorRangeParameters
### Properties
* **begin**: int
* **end**: int

## DeepCreatedOrigin
### Properties
* **name**: string (Required)
* **properties**: [DeepCreatedOriginProperties](#deepcreatedoriginproperties)

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
* **keySourceParameters**: [KeyVaultSigningKeyParameters](#keyvaultsigningkeyparameters) (Required)
* **type**: 'UrlSigningKey' (Required)

## KeyVaultSigningKeyParameters
### Properties
* **@odata.type**: string (Required)
* **resourceGroupName**: string (Required)
* **secretName**: string (Required)
* **secretVersion**: string (Required)
* **subscriptionId**: string (Required)
* **vaultName**: string (Required)

## schemas:10_webApplicationFirewallPolicyLink
### Properties
* **id**: string

## Dictionary<string,String>
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
* **healthProbeSettings**: [HealthProbeParameters](#healthprobeparameters)
* **origins**: [ResourceReference](#resourcereference)[]
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly)
* **responseBasedOriginErrorDetectionSettings**: [ResponseBasedOriginErrorDetectionParameters](#responsebasedoriginerrordetectionparameters)
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
* **healthProbeSettings**: [HealthProbeParameters](#healthprobeparameters)
* **loadBalancingSettings**: [LoadBalancingSettingsParameters](#loadbalancingsettingsparameters)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **responseBasedAfdOriginErrorDetectionSettings**: [ResponseBasedOriginErrorDetectionParameters](#responsebasedoriginerrordetectionparameters)
* **sessionAffinityState**: 'Disabled' | 'Enabled'
* **trafficRestorationTimeToHealedOrNewEndpointsInMinutes**: int

## LoadBalancingSettingsParameters
### Properties
* **additionalLatencyInMilliseconds**: int
* **sampleSize**: int
* **successfulSamplesRequired**: int

## AFDOriginProperties
### Properties
* **azureOrigin**: [ResourceReference](#resourcereference)
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled'
* **hostName**: string (Required)
* **httpPort**: int
* **httpsPort**: int
* **originHostHeader**: string
* **priority**: int
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **sharedPrivateLinkResource**: any
* **weight**: int

## RuleSetProperties
### Properties
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## RuleProperties
### Properties
* **actions**: [DeliveryRuleAction](#deliveryruleaction)[] (Required)
* **conditions**: [DeliveryRuleCondition](#deliveryrulecondition)[]
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **matchProcessingBehavior**: 'Continue' | 'Stop'
* **order**: int (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## SecretProperties
### Properties
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **parameters**: [SecretParameters](#secretparameters)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## SecretParameters
* **Discriminator**: type
### Base Properties
### CustomerCertificate
#### Properties
* **certificateAuthority**: string
* **secretSource**: [ResourceReference](#resourcereference) (Required)
* **secretVersion**: string
* **subjectAlternativeNames**: string[]
* **type**: 'CustomerCertificate' (Required)
* **useLatestVersion**: bool

### ManagedCertificate
#### Properties
* **type**: 'ManagedCertificate' (Required)

### UrlSigningKey
#### Properties
* **keyId**: string (Required)
* **keySourceParameters**: [KeyVaultSigningKeyParameters](#keyvaultsigningkeyparameters) (Required)
* **type**: 'UrlSigningKey' (Required)


## CustomerCertificate
### Properties
* **certificateAuthority**: string
* **secretSource**: [ResourceReference](#resourcereference) (Required)
* **secretVersion**: string
* **subjectAlternativeNames**: string[]
* **type**: 'CustomerCertificate' (Required)
* **useLatestVersion**: bool

## ManagedCertificate
### Properties
* **type**: 'ManagedCertificate' (Required)

## SecurityPolicyProperties
### Properties
* **deploymentStatus**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' (ReadOnly)
* **parameters**: [SecurityPolicyParameters](#securitypolicyparameters)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## SecurityPolicyParameters
* **Discriminator**: type
### Base Properties
### WebApplicationFirewall
#### Properties
* **associations**: [SecurityPolicyWebApplicationFirewallAssociation](#securitypolicywebapplicationfirewallassociation)[]
* **type**: 'WebApplicationFirewall' (Required)
* **wafPolicy**: [ResourceReference](#resourcereference)


## WebApplicationFirewall
### Properties
* **associations**: [SecurityPolicyWebApplicationFirewallAssociation](#securitypolicywebapplicationfirewallassociation)[]
* **type**: 'WebApplicationFirewall' (Required)
* **wafPolicy**: [ResourceReference](#resourcereference)

## SecurityPolicyWebApplicationFirewallAssociation
### Properties
* **domains**: [ResourceReference](#resourcereference)[]
* **patternsToMatch**: string[]

