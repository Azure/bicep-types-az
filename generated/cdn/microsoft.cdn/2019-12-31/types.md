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
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cdn/profiles/endpoints@2019-12-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EndpointProperties](#endpointproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## ResourceReference
### Properties
* **id**: string

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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
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
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly)
* **weight**: int

