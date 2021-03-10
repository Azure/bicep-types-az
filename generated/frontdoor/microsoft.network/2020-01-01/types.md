# Microsoft.Network @ 2020-01-01

## Resource Microsoft.Network/frontDoors@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FrontDoorProperties](#frontdoorproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/frontDoors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/frontDoors/rulesEngines@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RulesEngineProperties](#rulesengineproperties)
* **type**: 'Microsoft.Network/frontDoors/rulesEngines' (ReadOnly, DeployTimeConstant)

## FrontDoorProperties
### Properties
* **backendPools**: [BackendPool](#backendpool)[]
* **backendPoolsSettings**: [BackendPoolsSettings](#backendpoolssettings)
* **cname**: string (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled'
* **friendlyName**: string
* **frontdoorId**: string (ReadOnly)
* **frontendEndpoints**: [FrontendEndpoint](#frontendendpoint)[]
* **healthProbeSettings**: [HealthProbeSettingsModel](#healthprobesettingsmodel)[]
* **loadBalancingSettings**: [LoadBalancingSettingsModel](#loadbalancingsettingsmodel)[]
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
* **routingRules**: [RoutingRule](#routingrule)[]
* **rulesEngines**: [RulesEngine](#rulesengine)[] (ReadOnly)

## BackendPool
### Properties
* **id**: string
* **name**: string
* **properties**: [BackendPoolProperties](#backendpoolproperties)
* **type**: string (ReadOnly)

## BackendPoolProperties
### Properties
* **backends**: [Backend](#backend)[]
* **healthProbeSettings**: [SubResource](#subresource)
* **loadBalancingSettings**: [SubResource](#subresource)
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
* **properties**: [FrontendEndpointProperties](#frontendendpointproperties)
* **type**: string (ReadOnly)

## FrontendEndpointProperties
### Properties
* **customHttpsConfiguration**: [CustomHttpsConfiguration](#customhttpsconfiguration) (ReadOnly)
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' (ReadOnly)
* **customHttpsProvisioningSubstate**: 'CertificateDeleted' | 'CertificateDeployed' | 'DeletingCertificate' | 'DeployingCertificate' | 'DomainControlValidationRequestApproved' | 'DomainControlValidationRequestRejected' | 'DomainControlValidationRequestTimedOut' | 'IssuingCertificate' | 'PendingDomainControlValidationREquestApproval' | 'SubmittingDomainControlValidationRequest' (ReadOnly)
* **hostName**: string
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
* **sessionAffinityEnabledState**: 'Disabled' | 'Enabled'
* **sessionAffinityTtlSeconds**: int
* **webApplicationFirewallPolicyLink**: [schemas:37_webApplicationFirewallPolicyLink](#schemas37webapplicationfirewallpolicylink)

## CustomHttpsConfiguration
### Properties
* **certificateSource**: 'AzureKeyVault' | 'FrontDoor' (Required)
* **frontDoorCertificateSourceParameters**: [FrontDoorCertificateSourceParameters](#frontdoorcertificatesourceparameters)
* **keyVaultCertificateSourceParameters**: [KeyVaultCertificateSourceParameters](#keyvaultcertificatesourceparameters)
* **minimumTlsVersion**: '1.0' | '1.2' (Required)
* **protocolType**: string (Required)

## FrontDoorCertificateSourceParameters
### Properties
* **certificateType**: 'Dedicated'

## KeyVaultCertificateSourceParameters
### Properties
* **secretName**: string
* **secretVersion**: string
* **vault**: [schemas:32_vault](#schemas32vault)

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
* **properties**: [HealthProbeSettingsProperties](#healthprobesettingsproperties)
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
* **properties**: [LoadBalancingSettingsProperties](#loadbalancingsettingsproperties)
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
* **properties**: [RoutingRuleProperties](#routingruleproperties)
* **type**: string (ReadOnly)

## RoutingRuleProperties
### Properties
* **acceptedProtocols**: 'Http' | 'Https'[]
* **enabledState**: 'Disabled' | 'Enabled'
* **frontendEndpoints**: [SubResource](#subresource)[]
* **patternsToMatch**: string[]
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
* **routeConfiguration**: [RouteConfiguration](#routeconfiguration)
* **rulesEngine**: [SubResource](#subresource)

## RouteConfiguration
* **Discriminator**: @odata.type
### Base Properties
### #Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration' (Required)
* **backendPool**: [SubResource](#subresource)
* **cacheConfiguration**: [CacheConfiguration](#cacheconfiguration)
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
* **backendPool**: [SubResource](#subresource)
* **cacheConfiguration**: [CacheConfiguration](#cacheconfiguration)
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

## RulesEngine
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [RulesEngineProperties](#rulesengineproperties)
* **type**: string (ReadOnly)

## RulesEngineProperties
### Properties
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
* **rules**: [RulesEngineRule](#rulesenginerule)[]

## RulesEngineRule
### Properties
* **action**: [RulesEngineAction](#rulesengineaction) (Required)
* **matchConditions**: [RulesEngineMatchCondition](#rulesenginematchcondition)[]
* **matchProcessingBehavior**: 'Continue' | 'Stop'
* **name**: string (Required)
* **priority**: int (Required)

## RulesEngineAction
### Properties
* **requestHeaderActions**: [HeaderAction](#headeraction)[]
* **responseHeaderActions**: [HeaderAction](#headeraction)[]
* **routeConfigurationOverride**: [RouteConfiguration](#routeconfiguration)

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

