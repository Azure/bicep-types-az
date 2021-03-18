# Microsoft.Cdn @ 2019-12-31

## Resource Microsoft.Cdn/profiles@2019-12-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProfileProperties](#profileproperties)
* **sku**: [Sku](#sku) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints@2019-12-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EndpointProperties](#endpointproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/customDomains@2019-12-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CustomDomainPropertiesParameters](#customdomainpropertiesparameters)
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/originGroups@2019-12-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OriginGroupProperties](#origingroupproperties)
* **type**: 'Microsoft.Cdn/profiles/endpoints/originGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints/origins@2019-12-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OriginProperties](#originproperties)
* **type**: 'Microsoft.Cdn/profiles/endpoints/origins' (ReadOnly, DeployTimeConstant)

## ProfileProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' (ReadOnly)

## Sku
### Properties
* **name**: 'Custom_Verizon' | 'Premium_ChinaCdn' | 'Premium_Verizon' | 'Standard_Akamai' | 'Standard_ChinaCdn' | 'Standard_Microsoft' | 'Standard_Verizon'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointProperties
### Properties
* **contentTypesToCompress**: string[]
* **defaultOriginGroup**: [ResourceReference](#resourcereference)
* **deliveryPolicy**: [EndpointPropertiesUpdateParametersDeliveryPolicy](#endpointpropertiesupdateparametersdeliverypolicy)
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

## ResourceReference
### Properties
* **id**: string

## EndpointPropertiesUpdateParametersDeliveryPolicy
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
### DeliveryRuleCacheExpirationAction
#### Properties
* **name**: 'CacheExpiration' (Required)
* **parameters**: [CacheExpirationActionParameters](#cacheexpirationactionparameters) (Required)

### DeliveryRuleCacheKeyQueryStringAction
#### Properties
* **name**: 'CacheKeyQueryString' (Required)
* **parameters**: [CacheKeyQueryStringActionParameters](#cachekeyquerystringactionparameters) (Required)

### DeliveryRuleRequestHeaderAction
#### Properties
* **name**: 'ModifyRequestHeader' (Required)
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required)

### DeliveryRuleResponseHeaderAction
#### Properties
* **name**: 'ModifyResponseHeader' (Required)
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required)

### OriginGroupOverrideAction
#### Properties
* **name**: 'OriginGroupOverride' (Required)
* **parameters**: [OriginGroupOverrideActionParameters](#origingroupoverrideactionparameters) (Required)

### UrlRedirectAction
#### Properties
* **name**: 'UrlRedirect' (Required)
* **parameters**: [UrlRedirectActionParameters](#urlredirectactionparameters) (Required)

### UrlRewriteAction
#### Properties
* **name**: 'UrlRewrite' (Required)
* **parameters**: [UrlRewriteActionParameters](#urlrewriteactionparameters) (Required)


## DeliveryRuleCacheExpirationAction
### Properties
* **name**: 'CacheExpiration' (Required)
* **parameters**: [CacheExpirationActionParameters](#cacheexpirationactionparameters) (Required)

## CacheExpirationActionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleCacheExpirationActionParameters' (Required)
* **cacheBehavior**: 'BypassCache' | 'Override' | 'SetIfMissing' (Required)
* **cacheDuration**: string
* **cacheType**: 'All' (Required)

## DeliveryRuleCacheKeyQueryStringAction
### Properties
* **name**: 'CacheKeyQueryString' (Required)
* **parameters**: [CacheKeyQueryStringActionParameters](#cachekeyquerystringactionparameters) (Required)

## CacheKeyQueryStringActionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleCacheKeyQueryStringBehaviorActionParameters' (Required)
* **queryParameters**: string
* **queryStringBehavior**: 'Exclude' | 'ExcludeAll' | 'Include' | 'IncludeAll' (Required)

## DeliveryRuleRequestHeaderAction
### Properties
* **name**: 'ModifyRequestHeader' (Required)
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required)

## HeaderActionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleHeaderActionParameters' (Required)
* **headerAction**: 'Append' | 'Delete' | 'Overwrite' (Required)
* **headerName**: string (Required)
* **value**: string

## DeliveryRuleResponseHeaderAction
### Properties
* **name**: 'ModifyResponseHeader' (Required)
* **parameters**: [HeaderActionParameters](#headeractionparameters) (Required)

## OriginGroupOverrideAction
### Properties
* **name**: 'OriginGroupOverride' (Required)
* **parameters**: [OriginGroupOverrideActionParameters](#origingroupoverrideactionparameters) (Required)

## OriginGroupOverrideActionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleOriginGroupOverrideActionParameters' (Required)
* **originGroup**: [ResourceReference](#resourcereference) (Required)

## UrlRedirectAction
### Properties
* **name**: 'UrlRedirect' (Required)
* **parameters**: [UrlRedirectActionParameters](#urlredirectactionparameters) (Required)

## UrlRedirectActionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlRedirectActionParameters' (Required)
* **customFragment**: string
* **customHostname**: string
* **customPath**: string
* **customQueryString**: string
* **destinationProtocol**: 'Http' | 'Https' | 'MatchRequest'
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect' (Required)

## UrlRewriteAction
### Properties
* **name**: 'UrlRewrite' (Required)
* **parameters**: [UrlRewriteActionParameters](#urlrewriteactionparameters) (Required)

## UrlRewriteActionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlRewriteActionParameters' (Required)
* **destination**: string (Required)
* **preserveUnmatchedPath**: bool
* **sourcePattern**: string (Required)

## DeliveryRuleCondition
* **Discriminator**: name

### Base Properties
### DeliveryRuleCookiesCondition
#### Properties
* **name**: 'Cookies' (Required)
* **parameters**: [CookiesMatchConditionParameters](#cookiesmatchconditionparameters) (Required)

### DeliveryRuleHttpVersionCondition
#### Properties
* **name**: 'HttpVersion' (Required)
* **parameters**: [HttpVersionMatchConditionParameters](#httpversionmatchconditionparameters) (Required)

### DeliveryRuleIsDeviceCondition
#### Properties
* **name**: 'IsDevice' (Required)
* **parameters**: [IsDeviceMatchConditionParameters](#isdevicematchconditionparameters) (Required)

### DeliveryRulePostArgsCondition
#### Properties
* **name**: 'PostArgs' (Required)
* **parameters**: [PostArgsMatchConditionParameters](#postargsmatchconditionparameters) (Required)

### DeliveryRuleQueryStringCondition
#### Properties
* **name**: 'QueryString' (Required)
* **parameters**: [QueryStringMatchConditionParameters](#querystringmatchconditionparameters) (Required)

### DeliveryRuleRemoteAddressCondition
#### Properties
* **name**: 'RemoteAddress' (Required)
* **parameters**: [RemoteAddressMatchConditionParameters](#remoteaddressmatchconditionparameters) (Required)

### DeliveryRuleRequestBodyCondition
#### Properties
* **name**: 'RequestBody' (Required)
* **parameters**: [RequestBodyMatchConditionParameters](#requestbodymatchconditionparameters) (Required)

### DeliveryRuleRequestHeaderCondition
#### Properties
* **name**: 'RequestHeader' (Required)
* **parameters**: [RequestHeaderMatchConditionParameters](#requestheadermatchconditionparameters) (Required)

### DeliveryRuleRequestMethodCondition
#### Properties
* **name**: 'RequestMethod' (Required)
* **parameters**: [RequestMethodMatchConditionParameters](#requestmethodmatchconditionparameters) (Required)

### DeliveryRuleRequestSchemeCondition
#### Properties
* **name**: 'RequestScheme' (Required)
* **parameters**: [RequestSchemeMatchConditionParameters](#requestschemematchconditionparameters) (Required)

### DeliveryRuleRequestUriCondition
#### Properties
* **name**: 'RequestUri' (Required)
* **parameters**: [RequestUriMatchConditionParameters](#requesturimatchconditionparameters) (Required)

### DeliveryRuleUrlFileExtensionCondition
#### Properties
* **name**: 'UrlFileExtension' (Required)
* **parameters**: [UrlFileExtensionMatchConditionParameters](#urlfileextensionmatchconditionparameters) (Required)

### DeliveryRuleUrlFileNameCondition
#### Properties
* **name**: 'UrlFileName' (Required)
* **parameters**: [UrlFileNameMatchConditionParameters](#urlfilenamematchconditionparameters) (Required)

### DeliveryRuleUrlPathCondition
#### Properties
* **name**: 'UrlPath' (Required)
* **parameters**: [UrlPathMatchConditionParameters](#urlpathmatchconditionparameters) (Required)


## DeliveryRuleCookiesCondition
### Properties
* **name**: 'Cookies' (Required)
* **parameters**: [CookiesMatchConditionParameters](#cookiesmatchconditionparameters) (Required)

## CookiesMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleCookiesConditionParameters' (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleHttpVersionCondition
### Properties
* **name**: 'HttpVersion' (Required)
* **parameters**: [HttpVersionMatchConditionParameters](#httpversionmatchconditionparameters) (Required)

## HttpVersionMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleHttpVersionConditionParameters' (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Equal' (Required)

## DeliveryRuleIsDeviceCondition
### Properties
* **name**: 'IsDevice' (Required)
* **parameters**: [IsDeviceMatchConditionParameters](#isdevicematchconditionparameters) (Required)

## IsDeviceMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleIsDeviceConditionParameters' (Required)
* **matchValues**: 'Desktop' | 'Mobile'[]
* **negateCondition**: bool
* **operator**: 'Equal' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRulePostArgsCondition
### Properties
* **name**: 'PostArgs' (Required)
* **parameters**: [PostArgsMatchConditionParameters](#postargsmatchconditionparameters) (Required)

## PostArgsMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRulePostArgsConditionParameters' (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleQueryStringCondition
### Properties
* **name**: 'QueryString' (Required)
* **parameters**: [QueryStringMatchConditionParameters](#querystringmatchconditionparameters) (Required)

## QueryStringMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleQueryStringConditionParameters' (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleRemoteAddressCondition
### Properties
* **name**: 'RemoteAddress' (Required)
* **parameters**: [RemoteAddressMatchConditionParameters](#remoteaddressmatchconditionparameters) (Required)

## RemoteAddressMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleRemoteAddressConditionParameters' (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'GeoMatch' | 'IPMatch' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleRequestBodyCondition
### Properties
* **name**: 'RequestBody' (Required)
* **parameters**: [RequestBodyMatchConditionParameters](#requestbodymatchconditionparameters) (Required)

## RequestBodyMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestBodyConditionParameters' (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleRequestHeaderCondition
### Properties
* **name**: 'RequestHeader' (Required)
* **parameters**: [RequestHeaderMatchConditionParameters](#requestheadermatchconditionparameters) (Required)

## RequestHeaderMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestHeaderConditionParameters' (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleRequestMethodCondition
### Properties
* **name**: 'RequestMethod' (Required)
* **parameters**: [RequestMethodMatchConditionParameters](#requestmethodmatchconditionparameters) (Required)

## RequestMethodMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestMethodConditionParameters' (Required)
* **matchValues**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE'[]
* **negateCondition**: bool
* **operator**: 'Equal' (Required)

## DeliveryRuleRequestSchemeCondition
### Properties
* **name**: 'RequestScheme' (Required)
* **parameters**: [RequestSchemeMatchConditionParameters](#requestschemematchconditionparameters) (Required)

## RequestSchemeMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestSchemeConditionParameters' (Required)
* **matchValues**: 'HTTP' | 'HTTPS'[]
* **negateCondition**: bool
* **operator**: 'Equal' (Required)

## DeliveryRuleRequestUriCondition
### Properties
* **name**: 'RequestUri' (Required)
* **parameters**: [RequestUriMatchConditionParameters](#requesturimatchconditionparameters) (Required)

## RequestUriMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestUriConditionParameters' (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleUrlFileExtensionCondition
### Properties
* **name**: 'UrlFileExtension' (Required)
* **parameters**: [UrlFileExtensionMatchConditionParameters](#urlfileextensionmatchconditionparameters) (Required)

## UrlFileExtensionMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlFileExtensionMatchConditionParameters' (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleUrlFileNameCondition
### Properties
* **name**: 'UrlFileName' (Required)
* **parameters**: [UrlFileNameMatchConditionParameters](#urlfilenamematchconditionparameters) (Required)

## UrlFileNameMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlFilenameConditionParameters' (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **transforms**: 'Lowercase' | 'Uppercase'[]

## DeliveryRuleUrlPathCondition
### Properties
* **name**: 'UrlPath' (Required)
* **parameters**: [UrlPathMatchConditionParameters](#urlpathmatchconditionparameters) (Required)

## UrlPathMatchConditionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlPathMatchConditionParameters' (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'Wildcard' (Required)
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
* **weight**: int

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
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly)
* **weight**: int

