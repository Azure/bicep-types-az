# Microsoft.Network @ 2020-04-01

## Resource Microsoft.Network/frontDoors@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FrontDoorProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Network/frontDoors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/frontDoors/rulesEngines@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RulesEngineProperties
* **type**: 'Microsoft.Network/frontDoors/rulesEngines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebApplicationFirewallPolicyProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## FrontDoorProperties
### Properties
* **backendPools**: BackendPool[]
* **backendPoolsSettings**: BackendPoolsSettings
* **cname**: string (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled'
* **friendlyName**: string
* **frontdoorId**: string (ReadOnly)
* **frontendEndpoints**: FrontendEndpoint[]
* **healthProbeSettings**: HealthProbeSettingsModel[]
* **loadBalancingSettings**: LoadBalancingSettingsModel[]
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)
* **routingRules**: RoutingRule[]
* **rulesEngines**: RulesEngine[] (ReadOnly)

## BackendPool
### Properties
* **id**: string
* **name**: string
* **properties**: BackendPoolProperties
* **type**: string (ReadOnly)

## BackendPoolProperties
### Properties
* **backends**: Backend[]
* **healthProbeSettings**: SubResource
* **loadBalancingSettings**: SubResource
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)

## Backend
### Properties
* **address**: string
* **backendHostHeader**: string
* **enabledState**: 'Disabled' | 'Enabled'
* **httpPort**: int
* **httpsPort**: int
* **priority**: int
* **privateEndpointStatus**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' (ReadOnly)
* **privateLinkAlias**: string
* **privateLinkApprovalMessage**: string
* **weight**: int

## SubResource
### Properties
* **id**: string

## BackendPoolsSettings
### Properties
* **enforceCertificateNameCheck**: 'Disabled' | 'Enabled'
* **sendRecvTimeoutSeconds**: int

## FrontendEndpoint
### Properties
* **id**: string
* **name**: string
* **properties**: FrontendEndpointProperties
* **type**: string (ReadOnly)

## FrontendEndpointProperties
### Properties
* **customHttpsConfiguration**: CustomHttpsConfiguration (ReadOnly)
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' (ReadOnly)
* **customHttpsProvisioningSubstate**: 'CertificateDeleted' | 'CertificateDeployed' | 'DeletingCertificate' | 'DeployingCertificate' | 'DomainControlValidationRequestApproved' | 'DomainControlValidationRequestRejected' | 'DomainControlValidationRequestTimedOut' | 'IssuingCertificate' | 'PendingDomainControlValidationREquestApproval' | 'SubmittingDomainControlValidationRequest' (ReadOnly)
* **hostName**: string
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)
* **sessionAffinityEnabledState**: 'Disabled' | 'Enabled'
* **sessionAffinityTtlSeconds**: int
* **webApplicationFirewallPolicyLink**: FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink

## CustomHttpsConfiguration
### Properties
* **certificateSource**: 'AzureKeyVault' | 'FrontDoor' (Required)
* **frontDoorCertificateSourceParameters**: FrontDoorCertificateSourceParameters
* **keyVaultCertificateSourceParameters**: KeyVaultCertificateSourceParameters
* **minimumTlsVersion**: '1.0' | '1.2' (Required)
* **protocolType**: 'ServerNameIndication' (Required)

## FrontDoorCertificateSourceParameters
### Properties
* **certificateType**: 'Dedicated'

## KeyVaultCertificateSourceParameters
### Properties
* **secretName**: string
* **secretVersion**: string
* **vault**: KeyVaultCertificateSourceParametersVault

## KeyVaultCertificateSourceParametersVault
### Properties
* **id**: string

## FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink
### Properties
* **id**: string

## HealthProbeSettingsModel
### Properties
* **id**: string
* **name**: string
* **properties**: HealthProbeSettingsProperties
* **type**: string (ReadOnly)

## HealthProbeSettingsProperties
### Properties
* **enabledState**: 'Disabled' | 'Enabled'
* **healthProbeMethod**: 'GET' | 'HEAD'
* **intervalInSeconds**: int
* **path**: string
* **protocol**: 'Http' | 'Https'
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)

## LoadBalancingSettingsModel
### Properties
* **id**: string
* **name**: string
* **properties**: LoadBalancingSettingsProperties
* **type**: string (ReadOnly)

## LoadBalancingSettingsProperties
### Properties
* **additionalLatencyMilliseconds**: int
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)
* **sampleSize**: int
* **successfulSamplesRequired**: int

## RoutingRule
### Properties
* **id**: string
* **name**: string
* **properties**: RoutingRuleProperties
* **type**: string (ReadOnly)

## RoutingRuleProperties
### Properties
* **acceptedProtocols**: 'Http' | 'Https'[]
* **enabledState**: 'Disabled' | 'Enabled'
* **frontendEndpoints**: SubResource[]
* **patternsToMatch**: string[]
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)
* **routeConfiguration**: RouteConfiguration
* **rulesEngine**: SubResource
* **webApplicationFirewallPolicyLink**: RoutingRuleUpdateParametersWebApplicationFirewallPolicyLink

## RouteConfiguration
* **Discriminator**: @odata.type

### Base Properties
### ForwardingConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration' (Required)
* **backendPool**: SubResource
* **cacheConfiguration**: CacheConfiguration
* **customForwardingPath**: string
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'

### RedirectConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration' (Required)
* **customFragment**: string
* **customHost**: string
* **customPath**: string
* **customQueryString**: string
* **redirectProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect'


## ForwardingConfiguration
### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration' (Required)
* **backendPool**: SubResource
* **cacheConfiguration**: CacheConfiguration
* **customForwardingPath**: string
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'

## CacheConfiguration
### Properties
* **cacheDuration**: string
* **dynamicCompression**: 'Disabled' | 'Enabled'
* **queryParameters**: string
* **queryParameterStripDirective**: 'StripAll' | 'StripAllExcept' | 'StripNone' | 'StripOnly'

## RedirectConfiguration
### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration' (Required)
* **customFragment**: string
* **customHost**: string
* **customPath**: string
* **customQueryString**: string
* **redirectProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect'

## RoutingRuleUpdateParametersWebApplicationFirewallPolicyLink
### Properties
* **id**: string

## RulesEngine
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: RulesEngineProperties
* **type**: string (ReadOnly)

## RulesEngineProperties
### Properties
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)
* **rules**: RulesEngineRule[]

## RulesEngineRule
### Properties
* **action**: RulesEngineAction (Required)
* **matchConditions**: RulesEngineMatchCondition[]
* **matchProcessingBehavior**: 'Continue' | 'Stop'
* **name**: string (Required)
* **priority**: int (Required)

## RulesEngineAction
### Properties
* **requestHeaderActions**: HeaderAction[]
* **responseHeaderActions**: HeaderAction[]
* **routeConfigurationOverride**: RouteConfiguration

## HeaderAction
### Properties
* **headerActionType**: 'Append' | 'Delete' | 'Overwrite' (Required)
* **headerName**: string (Required)
* **value**: string

## RulesEngineMatchCondition
### Properties
* **negateCondition**: bool
* **rulesEngineMatchValue**: string[] (Required)
* **rulesEngineMatchVariable**: 'IsMobile' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestFilename' | 'RequestFilenameExtension' | 'RequestHeader' | 'RequestMethod' | 'RequestPath' | 'RequestScheme' | 'RequestUri' (Required)
* **rulesEngineOperator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode'[]

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebApplicationFirewallPolicyProperties
### Properties
* **customRules**: CustomRuleList
* **frontendEndpointLinks**: FrontendEndpointLink[] (ReadOnly)
* **managedRules**: ManagedRuleSetList
* **policySettings**: PolicySettings
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)
* **routingRuleLinks**: RoutingRuleLink[] (ReadOnly)

## CustomRuleList
### Properties
* **rules**: CustomRule[]

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' (Required)
* **enabledState**: 'Disabled' | 'Enabled'
* **matchConditions**: MatchCondition[] (Required)
* **name**: string
* **priority**: int (Required)
* **rateLimitDurationInMinutes**: int
* **rateLimitThreshold**: int
* **ruleType**: 'MatchRule' | 'RateLimitRule' (Required)

## MatchCondition
### Properties
* **matchValue**: string[] (Required)
* **matchVariable**: 'Cookies' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestHeader' | 'RequestMethod' | 'RequestUri' | 'SocketAddr' (Required)
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' (Required)
* **selector**: string
* **transforms**: 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode'[]

## FrontendEndpointLink
### Properties
* **id**: string

## ManagedRuleSetList
### Properties
* **managedRuleSets**: ManagedRuleSet[]

## ManagedRuleSet
### Properties
* **exclusions**: ManagedRuleExclusion[]
* **ruleGroupOverrides**: ManagedRuleGroupOverride[]
* **ruleSetType**: string (Required)
* **ruleSetVersion**: string (Required)

## ManagedRuleExclusion
### Properties
* **matchVariable**: 'QueryStringArgNames' | 'RequestBodyPostArgNames' | 'RequestCookieNames' | 'RequestHeaderNames' (Required)
* **selector**: string (Required)
* **selectorMatchOperator**: 'Contains' | 'EndsWith' | 'Equals' | 'EqualsAny' | 'StartsWith' (Required)

## ManagedRuleGroupOverride
### Properties
* **exclusions**: ManagedRuleExclusion[]
* **ruleGroupName**: string (Required)
* **rules**: ManagedRuleOverride[]

## ManagedRuleOverride
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect'
* **enabledState**: 'Disabled' | 'Enabled'
* **exclusions**: ManagedRuleExclusion[]
* **ruleId**: string (Required)

## PolicySettings
### Properties
* **customBlockResponseBody**: string
* **customBlockResponseStatusCode**: int
* **enabledState**: 'Disabled' | 'Enabled'
* **mode**: 'Detection' | 'Prevention'
* **redirectUrl**: string

## RoutingRuleLink
### Properties
* **id**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

