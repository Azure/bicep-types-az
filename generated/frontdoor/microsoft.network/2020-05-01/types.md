# Microsoft.Network @ 2020-05-01

## Resource Microsoft.Network/frontDoors@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FrontDoorProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/frontDoors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/frontDoors/rulesEngines@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RulesEngineProperties
* **type**: 'Microsoft.Network/frontDoors/rulesEngines' (ReadOnly, DeployTimeConstant)

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
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
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
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'

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
* **privateLinkLocation**: string
* **privateLinkResourceId**: string
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
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
* **sessionAffinityEnabledState**: 'Disabled' | 'Enabled'
* **sessionAffinityTtlSeconds**: int
* **webApplicationFirewallPolicyLink**: schemas:37_webApplicationFirewallPolicyLink

## CustomHttpsConfiguration
### Properties
* **certificateSource**: 'AzureKeyVault' | 'FrontDoor' (Required)
* **frontDoorCertificateSourceParameters**: FrontDoorCertificateSourceParameters
* **keyVaultCertificateSourceParameters**: KeyVaultCertificateSourceParameters
* **minimumTlsVersion**: '1.0' | '1.2' (Required)
* **protocolType**: string (Required)

## FrontDoorCertificateSourceParameters
### Properties
* **certificateType**: 'Dedicated'

## KeyVaultCertificateSourceParameters
### Properties
* **secretName**: string
* **secretVersion**: string
* **vault**: schemas:32_vault

## schemas:32_vault
### Properties
* **id**: string

## schemas:37_webApplicationFirewallPolicyLink
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
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'

## LoadBalancingSettingsModel
### Properties
* **id**: string
* **name**: string
* **properties**: LoadBalancingSettingsProperties
* **type**: string (ReadOnly)

## LoadBalancingSettingsProperties
### Properties
* **additionalLatencyMilliseconds**: int
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
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
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
* **routeConfiguration**: RouteConfiguration
* **rulesEngine**: SubResource
* **webApplicationFirewallPolicyLink**: schemas:14_webApplicationFirewallPolicyLink

## RouteConfiguration
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration' (Required)
* **backendPool**: SubResource
* **cacheConfiguration**: CacheConfiguration
* **customForwardingPath**: string
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'

### #Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration' (Required)
* **customFragment**: string
* **customHost**: string
* **customPath**: string
* **customQueryString**: string
* **redirectProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect'


## #Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration
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

## #Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration
### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration' (Required)
* **customFragment**: string
* **customHost**: string
* **customPath**: string
* **customQueryString**: string
* **redirectProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect'

## schemas:14_webApplicationFirewallPolicyLink
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
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

