# Microsoft.Network @ 2019-05-01

## Resource Microsoft.Network/frontDoors@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FrontDoorProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Network/frontDoors' (ReadOnly, DeployTimeConstant)

## FrontDoorProperties
### Properties
* **backendPools**: BackendPool[]
* **backendPoolsSettings**: BackendPoolsSettings
* **cname**: string (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled'
* **friendlyName**: string
* **frontendEndpoints**: FrontendEndpoint[]
* **healthProbeSettings**: HealthProbeSettingsModel[]
* **loadBalancingSettings**: LoadBalancingSettingsModel[]
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)
* **routingRules**: RoutingRule[]

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
* **dynamicCompression**: 'Disabled' | 'Enabled'
* **queryParameterStripDirective**: 'StripAll' | 'StripNone'

## RedirectConfiguration
### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration' (Required)
* **customFragment**: string
* **customHost**: string
* **customPath**: string
* **customQueryString**: string
* **redirectProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

