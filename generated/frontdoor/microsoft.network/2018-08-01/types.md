# Microsoft.Network @ 2018-08-01

## Resource Microsoft.Network/frontDoors@2018-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FrontDoorProperties](#frontdoorproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/frontDoors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2018-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebApplicationFirewallPolicyPropertiesFormat](#webapplicationfirewallpolicypropertiesformat)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant)

## FrontDoorProperties
### Properties
* **backendPools**: [BackendPool](#backendpool)[]
* **cname**: string (ReadOnly)
* **enabledState**: 'Disabled' | 'Enabled'
* **friendlyName**: string
* **frontendEndpoints**: [FrontendEndpoint](#frontendendpoint)[]
* **healthProbeSettings**: [HealthProbeSettingsModel](#healthprobesettingsmodel)[]
* **loadBalancingSettings**: [LoadBalancingSettingsModel](#loadbalancingsettingsmodel)[]
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
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
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'

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
* **webApplicationFirewallPolicyLink**: [schemas:28_webApplicationFirewallPolicyLink](#schemas28webapplicationfirewallpolicylink)

## CustomHttpsConfiguration
### Properties
* **certificateSource**: 'AzureKeyVault' | 'FrontDoor'
* **frontDoorCertificateSourceParameters**: [FrontDoorCertificateSourceParameters](#frontdoorcertificatesourceparameters)
* **keyVaultCertificateSourceParameters**: [KeyVaultCertificateSourceParameters](#keyvaultcertificatesourceparameters)
* **protocolType**: 'ServerNameIndication'

## FrontDoorCertificateSourceParameters
### Properties
* **certificateType**: 'Dedicated'

## KeyVaultCertificateSourceParameters
### Properties
* **secretName**: string
* **secretVersion**: string
* **vault**: [schemas:23_vault](#schemas23vault)

## schemas:23_vault
### Properties
* **id**: string

## schemas:28_webApplicationFirewallPolicyLink
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
* **backendPool**: [SubResource](#subresource)
* **cacheConfiguration**: [CacheConfiguration](#cacheconfiguration)
* **customForwardingPath**: string
* **enabledState**: 'Disabled' | 'Enabled'
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest'
* **frontendEndpoints**: [SubResource](#subresource)[]
* **patternsToMatch**: string[]
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'

## CacheConfiguration
### Properties
* **dynamicCompression**: 'Disabled' | 'Enabled'
* **queryParameterStripDirective**: 'StripAll' | 'StripNone'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebApplicationFirewallPolicyPropertiesFormat
### Properties
* **customRules**: [CustomRules](#customrules)
* **managedRules**: [ManagedRuleSets](#managedrulesets)
* **policySettings**: [policySettings](#policysettings)
* **provisioningState**: string (ReadOnly)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly)

## CustomRules
### Properties
* **rules**: [CustomRule](#customrule)[]

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' (Required)
* **etag**: string (ReadOnly)
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required)
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
* **ruleSets**: [Unknown](#unknown)[]

## Unknown
* **Discriminator**: ruleSetType
### Base Properties
* **priority**: int
* **version**: int
### AzureManagedRuleSet
#### Properties
* **ruleGroupOverrides**: [AzureManagedOverrideRuleGroup](#azuremanagedoverriderulegroup)[]
* **ruleSetType**: 'AzureManagedRuleSet' (Required)


## AzureManagedRuleSet
### Properties
* **ruleGroupOverrides**: [AzureManagedOverrideRuleGroup](#azuremanagedoverriderulegroup)[]
* **ruleSetType**: 'AzureManagedRuleSet' (Required)

## AzureManagedOverrideRuleGroup
### Properties
* **action**: 'Allow' | 'Block' | 'Log' (Required)
* **ruleGroupOverride**: 'SqlInjection' | 'XSS' (Required)

## policySettings
### Properties
* **enabledState**: 'Disabled' | 'Enabled'
* **mode**: 'Detection' | 'Prevention'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

