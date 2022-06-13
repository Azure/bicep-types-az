# Microsoft.Network @ 2019-05-01

## Resource Microsoft.Network/frontDoors@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FrontDoorProperties](#frontdoorproperties): Properties of the Front Door Load Balancer
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/frontDoors' (ReadOnly, DeployTimeConstant): The resource type

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

## BackendPoolsSettings
### Properties
* **enforceCertificateNameCheck**: 'Disabled' | 'Enabled' | string: Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests.
* **sendRecvTimeoutSeconds**: int: Send and receive timeout on forwarding request to the backend. When timeout is reached, the request fails and returns.

## CacheConfiguration
### Properties
* **dynamicCompression**: 'Disabled' | 'Enabled' | string: Whether to use dynamic compression for cached content
* **queryParameterStripDirective**: 'StripAll' | 'StripNone' | string: Treatment of URL query terms when forming the cache key.

## CustomHttpsConfiguration
### Properties
* **certificateSource**: 'AzureKeyVault' | 'FrontDoor' | string (Required): Defines the source of the SSL certificate
* **frontDoorCertificateSourceParameters**: [FrontDoorCertificateSourceParameters](#frontdoorcertificatesourceparameters): Parameters required for enabling SSL with Front Door-managed certificates (if certificateSource=FrontDoor)
* **keyVaultCertificateSourceParameters**: [KeyVaultCertificateSourceParameters](#keyvaultcertificatesourceparameters): KeyVault certificate source parameters (if certificateSource=AzureKeyVault)
* **minimumTlsVersion**: '1.0' | '1.2' | string (Required): The minimum TLS version required from the clients to establish an SSL handshake with Front Door.
* **protocolType**: 'ServerNameIndication' | string (Required): Defines the TLS extension protocol that is used for secure delivery

## FrontDoorCertificateSourceParameters
### Properties
* **certificateType**: 'Dedicated' | string: Defines the type of the certificate used for secure connections to a frontendEndpoint

## FrontDoorProperties
### Properties
* **backendPools**: [BackendPool](#backendpool)[]: Backend pools available to routing rules.
* **backendPoolsSettings**: [BackendPoolsSettings](#backendpoolssettings): Settings for all backendPools
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
* **enabledState**: 'Disabled' | 'Enabled' | string: Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
* **healthProbeMethod**: 'GET' | 'HEAD' | string: Configures which HTTP method to use to probe the backends defined under backendPools.
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RouteConfiguration
* **Discriminator**: @odata.type

### Base Properties
### ForwardingConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration' (Required)
* **backendPool**: [SubResource](#subresource): A reference to the BackendPool which this rule routes to.
* **cacheConfiguration**: [CacheConfiguration](#cacheconfiguration): The caching configuration associated with this rule.
* **customForwardingPath**: string: A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path.
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest' | string: Protocol this rule will use when forwarding traffic to backends.

### RedirectConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration' (Required)
* **customFragment**: string: Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
* **customHost**: string: Host to redirect. Leave empty to use the incoming host as the destination host.
* **customPath**: string: The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
* **customQueryString**: string: The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in <key>=<value> format. The first ? and & will be added automatically so do not include them in the front, but do separate multiple query strings with &.
* **redirectProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest' | string: The protocol of the destination to where the traffic is redirected
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect' | string: The redirect type the rule will use when redirecting traffic.


## RoutingRule
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [RoutingRuleProperties](#routingruleproperties): Properties of the Front Door Routing Rule
* **type**: string (ReadOnly): Resource type.

## RoutingRuleProperties
### Properties
* **acceptedProtocols**: 'Http' | 'Https' | string[]: Protocol schemes to match for this rule
* **enabledState**: 'Disabled' | 'Enabled' | string: Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
* **frontendEndpoints**: [SubResource](#subresource)[]: Frontend endpoints associated with this rule
* **patternsToMatch**: string[]: The route patterns of the rule.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status.
* **routeConfiguration**: [RouteConfiguration](#routeconfiguration): A reference to the routing configuration.

## SubResource
### Properties
* **id**: string: Resource ID.

