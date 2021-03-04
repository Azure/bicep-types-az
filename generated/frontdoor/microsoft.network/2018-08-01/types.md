# Microsoft.Network @ 2018-08-01

## Resource Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2018-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebApplicationFirewallPolicyPropertiesFormat
* **tags**: ResourceTags
* **type**: 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/frontDoors@2018-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FrontDoorProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Network/frontDoors' (ReadOnly, DeployTimeConstant)

## WebApplicationFirewallPolicyPropertiesFormat
### Properties
* **customRules**: CustomRules
* **managedRules**: ManagedRuleSets
* **policySettings**: PolicySettings
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)

## CustomRules
### Properties
* **rules**: CustomRule[]

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' (Required)
* **etag**: string (ReadOnly)
* **matchConditions**: MatchCondition[] (Required)
* **name**: string
* **priority**: int (Required)
* **rateLimitDurationInMinutes**: int
* **rateLimitThreshold**: int
* **ruleType**: 'MatchRule' | 'RateLimitRule' (Required)
* **transforms**: 'HtmlEntityDecode' | 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode'[]

## MatchCondition
### Properties
* **matchValue**: string[] (Required)
* **matchVariable**: 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestHeader' | 'RequestMethod' | 'RequestUri' (Required)
* **negateCondition**: bool
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' (Required)
* **selector**: string

## ManagedRuleSets
### Properties
* **ruleSets**: ManagedRuleSet[]

## ManagedRuleSet
* **Discriminator**: ruleSetType

### Base Properties
* **priority**: int
* **version**: int
### AzureManagedRuleSet
#### Properties
* **ruleGroupOverrides**: AzureManagedOverrideRuleGroup[]
* **ruleSetType**: 'AzureManagedRuleSet' (Required)


## AzureManagedRuleSet
### Properties
* **ruleGroupOverrides**: AzureManagedOverrideRuleGroup[]
* **ruleSetType**: 'AzureManagedRuleSet' (Required)

## AzureManagedOverrideRuleGroup
### Properties
* **action**: 'Allow' | 'Block' | 'Log' (Required)
* **ruleGroupOverride**: 'SqlInjection' | 'XSS' (Required)

## PolicySettings
### Properties
* **enabledState**: 'Disabled' | 'Enabled'
* **mode**: 'Detection' | 'Prevention'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FrontDoorProperties
### Properties
* **backendPools**: BackendPool[]
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
* **certificateSource**: 'AzureKeyVault' | 'FrontDoor'
* **frontDoorCertificateSourceParameters**: FrontDoorCertificateSourceParameters
* **keyVaultCertificateSourceParameters**: KeyVaultCertificateSourceParameters
* **protocolType**: 'ServerNameIndication'

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
* **backendPool**: SubResource
* **cacheConfiguration**: CacheConfiguration
* **customForwardingPath**: string
* **enabledState**: 'Disabled' | 'Enabled'
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'
* **frontendEndpoints**: SubResource[]
* **patternsToMatch**: string[]
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)

## CacheConfiguration
### Properties
* **dynamicCompression**: 'Disabled' | 'Enabled'
* **queryParameterStripDirective**: 'StripAll' | 'StripNone'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

