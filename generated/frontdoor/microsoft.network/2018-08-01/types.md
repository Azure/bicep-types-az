# Microsoft.Network @ 2018-08-01

## Resource Microsoft.Network/frontDoors@2018-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FrontDoorProperties](#frontdoorproperties): Properties of the Front Door Load Balancer
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/frontDoors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/frontDoors/frontendEndpoints@2018-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FrontendEndpointProperties](#frontendendpointproperties) (ReadOnly): Properties of the Frontend endpoint
* **type**: 'Microsoft.Network/frontDoors/frontendEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2018-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebApplicationFirewallPolicyPropertiesFormat](#webapplicationfirewallpolicypropertiesformat): Properties of the web application firewall policy.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## AzureManagedOverrideRuleGroup
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | string (Required): Type of Actions
* **ruleGroupOverride**: 'SqlInjection' | 'XSS' | string (Required): Describes override rule group

## Backend
### Properties
* **address**: string: Location of the backend (IP address or FQDN)
* **backendHostHeader**: string: The value to use as the host header sent to the backend. If blank or unspecified, this defaults to the incoming host.
* **enabledState**: 'Disabled' | 'Enabled' | string: Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'
* **httpPort**: int: The HTTP TCP port number. Must be between 1 and 65535.
* **httpsPort**: int: The HTTPS TCP port number. Must be between 1 and 65535.
* **priority**: int: Priority to use for load balancing. Higher priorities will not be used for load balancing if any lower priority backend is healthy.
* **weight**: int: Weight of this endpoint for load balancing purposes.

## BackendPool
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [BackendPoolProperties](#backendpoolproperties): Properties of the Front Door Backend Pool
* **type**: string (ReadOnly): Resource type.

## BackendPoolProperties
### Properties
* **backends**: [Backend](#backend)[]: The set of backends for this pool
* **healthProbeSettings**: [SubResource](#subresource): L7 health probe settings for a backend pool
* **loadBalancingSettings**: [SubResource](#subresource): Load balancing settings for a backend pool
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status.

## CacheConfiguration
### Properties
* **dynamicCompression**: 'Disabled' | 'Enabled' | string: Whether to use dynamic compression for cached content
* **queryParameterStripDirective**: 'StripAll' | 'StripNone' | string: Treatment of URL query terms when forming the cache key.

## CustomHttpsConfiguration
### Properties
* **certificateSource**: 'AzureKeyVault' | 'FrontDoor' | string: Defines the source of the SSL certificate
* **frontDoorCertificateSourceParameters**: [FrontDoorCertificateSourceParameters](#frontdoorcertificatesourceparameters): Parameters required for enabling SSL with Front Door-managed certificates (if certificateSource=FrontDoor)
* **keyVaultCertificateSourceParameters**: [KeyVaultCertificateSourceParameters](#keyvaultcertificatesourceparameters): KeyVault certificate source parameters (if certificateSource=AzureKeyVault)
* **protocolType**: 'ServerNameIndication' | string: Defines the TLS extension protocol that is used for secure delivery

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | string (Required): Type of Actions
* **etag**: string (ReadOnly): Gets a unique read-only string that changes whenever the resource is updated.
* **matchConditions**: [MatchConditionAutoGenerated](#matchconditionautogenerated)[] (Required): List of match conditions
* **name**: string: Gets name of the resource that is unique within a policy. This name can be used to access the resource.
* **priority**: int (Required): Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value
* **rateLimitDurationInMinutes**: int: Defines rate limit duration. Default - 1 minute
* **rateLimitThreshold**: int: Defines rate limit threshold
* **ruleType**: 'MatchRule' | 'RateLimitRule' | string (Required): Describes type of rule
* **transforms**: 'HtmlEntityDecode' | 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string[]: List of transforms

## CustomRules
### Properties
* **rules**: [CustomRule](#customrule)[]: List of rules

## FrontDoorCertificateSourceParameters
### Properties
* **certificateType**: 'Dedicated' | string: Defines the type of the certificate used for secure connections to a frontendEndpoint

## FrontDoorProperties
### Properties
* **backendPools**: [BackendPool](#backendpool)[]: Backend pools available to routing rules.
* **cname**: string (ReadOnly): The host that each frontendEndpoint must CNAME to.
* **enabledState**: 'Disabled' | 'Enabled' | string: Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
* **friendlyName**: string: A friendly name for the frontDoor
* **frontendEndpoints**: [FrontendEndpoint](#frontendendpoint)[]: Frontend endpoints available to routing rules.
* **healthProbeSettings**: [HealthProbeSettingsModel](#healthprobesettingsmodel)[]: Health probe settings associated with this Front Door instance.
* **loadBalancingSettings**: [LoadBalancingSettingsModel](#loadbalancingsettingsmodel)[]: Load balancing settings associated with this Front Door instance.
* **provisioningState**: string (ReadOnly): Provisioning state of the Front Door.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status of the Front Door.
* **routingRules**: [RoutingRule](#routingrule)[]: Routing rules associated with this Front Door.

## FrontendEndpoint
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [FrontendEndpointProperties](#frontendendpointproperties): Properties of the Frontend endpoint
* **type**: string (ReadOnly): Resource type.

## FrontendEndpointProperties
### Properties
* **customHttpsConfiguration**: [CustomHttpsConfiguration](#customhttpsconfiguration) (ReadOnly): The configuration specifying how to enable HTTPS
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' | string (ReadOnly): Provisioning status of Custom Https of the frontendEndpoint.
* **customHttpsProvisioningSubstate**: 'CertificateDeleted' | 'CertificateDeployed' | 'DeletingCertificate' | 'DeployingCertificate' | 'DomainControlValidationRequestApproved' | 'DomainControlValidationRequestRejected' | 'DomainControlValidationRequestTimedOut' | 'IssuingCertificate' | 'PendingDomainControlValidationREquestApproval' | 'SubmittingDomainControlValidationRequest' | string (ReadOnly): Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step.
* **hostName**: string: The host name of the frontendEndpoint. Must be a domain name.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status.
* **sessionAffinityEnabledState**: 'Disabled' | 'Enabled' | string: Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
* **sessionAffinityTtlSeconds**: int: UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if applicable.
* **webApplicationFirewallPolicyLink**: [FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink](#frontendendpointupdateparameterswebapplicationfirewallpolicylink): Defines the Web Application Firewall policy for each host (if applicable)

## FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink
### Properties
* **id**: string: Resource ID.

## HealthProbeSettingsModel
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [HealthProbeSettingsProperties](#healthprobesettingsproperties): Properties of the health probe settings
* **type**: string (ReadOnly): Resource type.

## HealthProbeSettingsProperties
### Properties
* **intervalInSeconds**: int: The number of seconds between health probes.
* **path**: string: The path to use for the health probe. Default is /
* **protocol**: 'Http' | 'Https' | string: Protocol scheme to use for this probe
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status.

## KeyVaultCertificateSourceParameters
### Properties
* **secretName**: string: The name of the Key Vault secret representing the full certificate PFX
* **secretVersion**: string: The version of the Key Vault secret representing the full certificate PFX
* **vault**: [KeyVaultCertificateSourceParametersVault](#keyvaultcertificatesourceparametersvault): The Key Vault containing the SSL certificate

## KeyVaultCertificateSourceParametersVault
### Properties
* **id**: string: Resource ID.

## LoadBalancingSettingsModel
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [LoadBalancingSettingsProperties](#loadbalancingsettingsproperties): Properties of the load balancing settings
* **type**: string (ReadOnly): Resource type.

## LoadBalancingSettingsProperties
### Properties
* **additionalLatencyMilliseconds**: int: The additional latency in milliseconds for probes to fall into the lowest latency bucket
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status.
* **sampleSize**: int: The number of samples to consider for load balancing decisions
* **successfulSamplesRequired**: int: The number of samples within the sample period that must succeed

## ManagedRuleSet
* **Discriminator**: ruleSetType

### Base Properties
* **priority**: int: Describes priority of the rule
* **version**: int: defines version of the rule set

### AzureManagedRuleSet
#### Properties
* **ruleGroupOverrides**: [AzureManagedOverrideRuleGroup](#azuremanagedoverriderulegroup)[]: List of azure managed provider override configuration (optional)
* **ruleSetType**: 'AzureManagedRuleSet' (Required): RuleSetType - AzureManagedRuleSet or OWASP RuleSets.


## ManagedRuleSets
### Properties
* **ruleSets**: [ManagedRuleSet](#managedruleset)[]: List of rules

## MatchConditionAutoGenerated
### Properties
* **matchValue**: string[] (Required): Match value
* **matchVariable**: 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestHeader' | 'RequestMethod' | 'RequestUri' | string (Required): Match Variable
* **negateCondition**: bool: Describes if this is negate condition or not
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | string (Required): Describes operator to be matched
* **selector**: string: Name of selector in RequestHeader or RequestBody to be matched

## PolicySettings
### Properties
* **enabledState**: 'Disabled' | 'Enabled' | string: describes if the policy is in enabled state or disabled state
* **mode**: 'Detection' | 'Prevention' | string: Describes if it is in detection mode  or prevention mode at policy level

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RoutingRule
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [RoutingRuleProperties](#routingruleproperties): Properties of the Front Door Routing Rule
* **type**: string (ReadOnly): Resource type.

## RoutingRuleProperties
### Properties
* **acceptedProtocols**: 'Http' | 'Https' | string[]: Protocol schemes to match for this rule
* **backendPool**: [SubResource](#subresource): A reference to the BackendPool which this rule routes to.
* **cacheConfiguration**: [CacheConfiguration](#cacheconfiguration): The caching configuration associated with this rule.
* **customForwardingPath**: string: A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path.
* **enabledState**: 'Disabled' | 'Enabled' | string: Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest' | string: Protocol this rule will use when forwarding traffic to backends.
* **frontendEndpoints**: [SubResource](#subresource)[]: Frontend endpoints associated with this rule
* **patternsToMatch**: string[]: The route patterns of the rule.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status.

## SubResource
### Properties
* **id**: string: Resource ID.

## WebApplicationFirewallPolicyPropertiesFormat
### Properties
* **customRules**: [CustomRules](#customrules): Describes custom rules inside the policy
* **managedRules**: [ManagedRuleSets](#managedrulesets): Describes managed rules inside the policy
* **policySettings**: [PolicySettings](#policysettings): Describes  policySettings for policy
* **provisioningState**: string (ReadOnly): Provisioning state of the WebApplicationFirewallPolicy.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status of the policy.

