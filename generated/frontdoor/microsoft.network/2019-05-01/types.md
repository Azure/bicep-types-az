# Microsoft.Network @ 2019-05-01

## Resource Microsoft.Network/frontDoors@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FrontDoorProperties](#frontdoorproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/frontDoors' (ReadOnly, DeployTimeConstant)

## FrontDoorProperties
### Properties
* **backendPools**: [BackendPool](#backendpool)[]
* **backendPoolsSettings**: [BackendPoolsSettings](#backendpoolssettings)
* **cname**: string (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled'
* **friendlyName**: string
* **frontendEndpoints**: [FrontendEndpoint](#frontendendpoint)[]
* **healthProbeSettings**: [HealthProbeSettingsModel](#healthprobesettingsmodel)[]
* **loadBalancingSettings**: [LoadBalancingSettingsModel](#loadbalancingsettingsmodel)[]
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)
* **routingRules**: [RoutingRule](#routingrule)[]

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
* **properties**: [FrontendEndpointProperties](#frontendendpointproperties)
* **type**: string (ReadOnly)

## FrontendEndpointProperties
### Properties
* **customHttpsConfiguration**: [CustomHttpsConfiguration](#customhttpsconfiguration) (ReadOnly)
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' (ReadOnly)
* **customHttpsProvisioningSubstate**: 'CertificateDeleted' | 'CertificateDeployed' | 'DeletingCertificate' | 'DeployingCertificate' | 'DomainControlValidationRequestApproved' | 'DomainControlValidationRequestRejected' | 'DomainControlValidationRequestTimedOut' | 'IssuingCertificate' | 'PendingDomainControlValidationREquestApproval' | 'SubmittingDomainControlValidationRequest' (ReadOnly)
* **hostName**: string
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)
* **sessionAffinityEnabledState**: 'Disabled' | 'Enabled'
* **sessionAffinityTtlSeconds**: int
* **webApplicationFirewallPolicyLink**: [FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink](#frontendendpointupdateparameterswebapplicationfirewallpolicylink)

## CustomHttpsConfiguration
### Properties
* **certificateSource**: 'AzureKeyVault' | 'FrontDoor' (Required)
* **frontDoorCertificateSourceParameters**: [FrontDoorCertificateSourceParameters](#frontdoorcertificatesourceparameters)
* **keyVaultCertificateSourceParameters**: [KeyVaultCertificateSourceParameters](#keyvaultcertificatesourceparameters)
* **minimumTlsVersion**: '1.0' | '1.2' (Required)
* **protocolType**: 'ServerNameIndication' (Required)

## FrontDoorCertificateSourceParameters
### Properties
* **certificateType**: 'Dedicated'

## KeyVaultCertificateSourceParameters
### Properties
* **secretName**: string
* **secretVersion**: string
* **vault**: [KeyVaultCertificateSourceParametersVault](#keyvaultcertificatesourceparametersvault)

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
* **properties**: [HealthProbeSettingsProperties](#healthprobesettingsproperties)
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
* **properties**: [LoadBalancingSettingsProperties](#loadbalancingsettingsproperties)
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
* **properties**: [RoutingRuleProperties](#routingruleproperties)
* **type**: string (ReadOnly)

## RoutingRuleProperties
### Properties
* **acceptedProtocols**: 'Http' | 'Https'[]
* **enabledState**: 'Disabled' | 'Enabled'
* **frontendEndpoints**: [SubResource](#subresource)[]
* **patternsToMatch**: string[]
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)
* **routeConfiguration**: [RouteConfiguration](#routeconfiguration)

## RouteConfiguration
* **Discriminator**: @odata.type

### Base Properties
### ForwardingConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration' (Required)
* **backendPool**: [SubResource](#subresource)
* **cacheConfiguration**: [CacheConfiguration](#cacheconfiguration)
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
* **backendPool**: [SubResource](#subresource)
* **cacheConfiguration**: [CacheConfiguration](#cacheconfiguration)
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

