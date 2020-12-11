# Microsoft.Cdn @ 2020-04-15

## Microsoft.Cdn/CdnWebApplicationFirewallPolicies
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CdnWebApplicationFirewallPolicyProperties
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Cdn/CdnWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## CdnWebApplicationFirewallPolicyProperties
### Properties
* **customRules**: CustomRuleList
* **endpointLinks**: CdnEndpoint[] (ReadOnly)
* **managedRules**: ManagedRuleSetList
* **policySettings**: policySettings
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

## policySettings
### Properties
* **defaultCustomBlockResponseBody**: string
* **defaultCustomBlockResponseStatusCode**: int
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Cdn/profiles
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProfileProperties
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Cdn/profiles' (ReadOnly, DeployTimeConstant)

## ProfileProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Cdn/profiles/endpoints
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EndpointProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Cdn/profiles/endpoints' (ReadOnly, DeployTimeConstant)

## EndpointProperties
### Properties
* **contentTypesToCompress**: string[]
* **defaultOriginGroup**: ResourceReference
* **deliveryPolicy**: schemas:10_deliveryPolicy
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
* **queryStringCachingBehavior**: 'BypassCaching' | 'IgnoreQueryString' | 'NotSet' | 'UseQueryString'
* **resourceState**: 'Creating' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly)
* **urlSigningKeys**: UrlSigningKey[]
* **webApplicationFirewallPolicyLink**: schemas:10_webApplicationFirewallPolicyLink

## ResourceReference
### Properties
* **id**: string

## schemas:10_deliveryPolicy
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
### CacheExpiration
#### Properties
* **name**: 'CacheExpiration' (Required)
* **parameters**: CacheExpirationActionParameters (Required)

### CacheKeyQueryString
#### Properties
* **name**: 'CacheKeyQueryString' (Required)
* **parameters**: CacheKeyQueryStringActionParameters (Required)

### ModifyRequestHeader
#### Properties
* **name**: 'ModifyRequestHeader' (Required)
* **parameters**: HeaderActionParameters (Required)

### ModifyResponseHeader
#### Properties
* **name**: 'ModifyResponseHeader' (Required)
* **parameters**: HeaderActionParameters (Required)

### UrlRedirect
#### Properties
* **name**: 'UrlRedirect' (Required)
* **parameters**: UrlRedirectActionParameters (Required)

### UrlRewrite
#### Properties
* **name**: 'UrlRewrite' (Required)
* **parameters**: UrlRewriteActionParameters (Required)

### UrlSigning
#### Properties
* **name**: 'UrlSigning' (Required)
* **parameters**: UrlSigningActionParameters (Required)


## CacheExpiration
### Properties
* **name**: 'CacheExpiration' (Required)
* **parameters**: CacheExpirationActionParameters (Required)

## CacheExpirationActionParameters
### Properties
* **@odata.type**: string (Required)
* **cacheBehavior**: 'BypassCache' | 'Override' | 'SetIfMissing' (Required)
* **cacheDuration**: string
* **cacheType**: string (Required)

## CacheKeyQueryString
### Properties
* **name**: 'CacheKeyQueryString' (Required)
* **parameters**: CacheKeyQueryStringActionParameters (Required)

## CacheKeyQueryStringActionParameters
### Properties
* **@odata.type**: string (Required)
* **queryParameters**: string
* **queryStringBehavior**: 'Exclude' | 'ExcludeAll' | 'Include' | 'IncludeAll' (Required)

## ModifyRequestHeader
### Properties
* **name**: 'ModifyRequestHeader' (Required)
* **parameters**: HeaderActionParameters (Required)

## HeaderActionParameters
### Properties
* **@odata.type**: string (Required)
* **headerAction**: 'Append' | 'Delete' | 'Overwrite' (Required)
* **headerName**: string (Required)
* **value**: string

## ModifyResponseHeader
### Properties
* **name**: 'ModifyResponseHeader' (Required)
* **parameters**: HeaderActionParameters (Required)

## UrlRedirect
### Properties
* **name**: 'UrlRedirect' (Required)
* **parameters**: UrlRedirectActionParameters (Required)

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
* **parameters**: UrlRewriteActionParameters (Required)

## UrlRewriteActionParameters
### Properties
* **@odata.type**: string (Required)
* **destination**: string (Required)
* **preserveUnmatchedPath**: bool
* **sourcePattern**: string (Required)

## UrlSigning
### Properties
* **name**: 'UrlSigning' (Required)
* **parameters**: UrlSigningActionParameters (Required)

## UrlSigningActionParameters
### Properties
* **@odata.type**: '#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlSigningActionParameters'
* **algorithm**: 'SHA256'
* **ipSubnets**: string[]
* **keyId**: string (Required)
* **parameterNameOverride**: UrlSigningParamIdentifier[]

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
* **parameters**: CookiesMatchConditionParameters (Required)

### HttpVersion
#### Properties
* **name**: 'HttpVersion' (Required)
* **parameters**: HttpVersionMatchConditionParameters (Required)

### IsDevice
#### Properties
* **name**: 'IsDevice' (Required)
* **parameters**: IsDeviceMatchConditionParameters (Required)

### PostArgs
#### Properties
* **name**: 'PostArgs' (Required)
* **parameters**: PostArgsMatchConditionParameters (Required)

### QueryString
#### Properties
* **name**: 'QueryString' (Required)
* **parameters**: QueryStringMatchConditionParameters (Required)

### RemoteAddress
#### Properties
* **name**: 'RemoteAddress' (Required)
* **parameters**: RemoteAddressMatchConditionParameters (Required)

### RequestBody
#### Properties
* **name**: 'RequestBody' (Required)
* **parameters**: RequestBodyMatchConditionParameters (Required)

### RequestHeader
#### Properties
* **name**: 'RequestHeader' (Required)
* **parameters**: RequestHeaderMatchConditionParameters (Required)

### RequestMethod
#### Properties
* **name**: 'RequestMethod' (Required)
* **parameters**: RequestMethodMatchConditionParameters (Required)

### RequestScheme
#### Properties
* **name**: 'RequestScheme' (Required)
* **parameters**: RequestSchemeMatchConditionParameters (Required)

### RequestUri
#### Properties
* **name**: 'RequestUri' (Required)
* **parameters**: RequestUriMatchConditionParameters (Required)

### UrlFileExtension
#### Properties
* **name**: 'UrlFileExtension' (Required)
* **parameters**: UrlFileExtensionMatchConditionParameters (Required)

### UrlFileName
#### Properties
* **name**: 'UrlFileName' (Required)
* **parameters**: UrlFileNameMatchConditionParameters (Required)

### UrlPath
#### Properties
* **name**: 'UrlPath' (Required)
* **parameters**: UrlPathMatchConditionParameters (Required)


## Cookies
### Properties
* **name**: 'Cookies' (Required)
* **parameters**: CookiesMatchConditionParameters (Required)

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
* **parameters**: HttpVersionMatchConditionParameters (Required)

## HttpVersionMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: string[]
* **negateCondition**: bool
* **operator**: string (Required)

## IsDevice
### Properties
* **name**: 'IsDevice' (Required)
* **parameters**: IsDeviceMatchConditionParameters (Required)

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
* **parameters**: PostArgsMatchConditionParameters (Required)

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
* **parameters**: QueryStringMatchConditionParameters (Required)

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
* **parameters**: RemoteAddressMatchConditionParameters (Required)

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
* **parameters**: RequestBodyMatchConditionParameters (Required)

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
* **parameters**: RequestHeaderMatchConditionParameters (Required)

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
* **parameters**: RequestMethodMatchConditionParameters (Required)

## RequestMethodMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE'[]
* **negateCondition**: bool
* **operator**: string (Required)

## RequestScheme
### Properties
* **name**: 'RequestScheme' (Required)
* **parameters**: RequestSchemeMatchConditionParameters (Required)

## RequestSchemeMatchConditionParameters
### Properties
* **@odata.type**: string (Required)
* **matchValues**: 'HTTP' | 'HTTPS'[]
* **negateCondition**: bool
* **operator**: string (Required)

## RequestUri
### Properties
* **name**: 'RequestUri' (Required)
* **parameters**: RequestUriMatchConditionParameters (Required)

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
* **parameters**: UrlFileExtensionMatchConditionParameters (Required)

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
* **parameters**: UrlFileNameMatchConditionParameters (Required)

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
* **parameters**: UrlPathMatchConditionParameters (Required)

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
* **probeProtocol**: 'Http' | 'Https' | 'NotSet'
* **probeRequestType**: 'GET' | 'HEAD' | 'NotSet'

## ResponseBasedOriginErrorDetectionParameters
### Properties
* **httpErrorRanges**: HttpErrorRangeParameters[]
* **responseBasedDetectedErrorTypes**: 'None' | 'TcpAndHttpErrors' | 'TcpErrorsOnly'
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
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Cdn/profiles/endpoints/customDomains
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomDomainPropertiesParameters
* **type**: 'Microsoft.Cdn/profiles/endpoints/customDomains' (ReadOnly, DeployTimeConstant)

## CustomDomainPropertiesParameters
### Properties
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' (ReadOnly)
* **customHttpsProvisioningSubstate**: 'CertificateDeleted' | 'CertificateDeployed' | 'DeletingCertificate' | 'DeployingCertificate' | 'DomainControlValidationRequestApproved' | 'DomainControlValidationRequestRejected' | 'DomainControlValidationRequestTimedOut' | 'IssuingCertificate' | 'PendingDomainControlValidationREquestApproval' | 'SubmittingDomainControlValidationRequest' (ReadOnly)
* **hostName**: string (Required)
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly)
* **validationData**: string (ReadOnly)

## Microsoft.Cdn/profiles/endpoints/originGroups
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OriginGroupProperties
* **type**: 'Microsoft.Cdn/profiles/endpoints/originGroups' (ReadOnly, DeployTimeConstant)

## OriginGroupProperties
### Properties
* **healthProbeSettings**: HealthProbeParameters
* **origins**: ResourceReference[]
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Active' | 'Creating' | 'Deleting' (ReadOnly)
* **responseBasedOriginErrorDetectionSettings**: ResponseBasedOriginErrorDetectionParameters
* **trafficRestorationTimeToHealedOrNewEndpointsInMinutes**: int

## Microsoft.Cdn/profiles/endpoints/origins
### Properties
* **apiVersion**: '2020-04-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OriginProperties
* **type**: 'Microsoft.Cdn/profiles/endpoints/origins' (ReadOnly, DeployTimeConstant)

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

