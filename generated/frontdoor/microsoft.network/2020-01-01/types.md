# Microsoft.Network @ 2020-01-01

## Resource Microsoft.Network/frontDoors@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FrontDoorProperties](#frontdoorproperties): The JSON object that contains the properties required to create an endpoint.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/frontDoors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/frontDoors/rulesEngines@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RulesEngineProperties](#rulesengineproperties): The JSON object that contains the properties required to create a Rules Engine Configuration.
* **type**: 'Microsoft.Network/frontDoors/rulesEngines' (ReadOnly, DeployTimeConstant): The resource type

## FrontDoorProperties
### Properties
* **backendPools**: [BackendPool](#backendpool)[]: Backend pools available to routing rules.
* **backendPoolsSettings**: [BackendPoolsSettings](#backendpoolssettings): Settings that apply to all backend pools.
* **cname**: string (ReadOnly): The host that each frontendEndpoint must CNAME to.
* **enabledState**: 'Disabled' | 'Enabled': Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
* **friendlyName**: string: A friendly name for the frontDoor
* **frontdoorId**: string (ReadOnly): The Id of the frontdoor.
* **frontendEndpoints**: [FrontendEndpoint](#frontendendpoint)[]: Frontend endpoints available to routing rules.
* **healthProbeSettings**: [HealthProbeSettingsModel](#healthprobesettingsmodel)[]: Health probe settings associated with this Front Door instance.
* **loadBalancingSettings**: [LoadBalancingSettingsModel](#loadbalancingsettingsmodel)[]: Load balancing settings associated with this Front Door instance.
* **provisioningState**: string (ReadOnly): Provisioning state of the Front Door.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly): Resource status of the Front Door or Front Door SubResource.
* **routingRules**: [RoutingRule](#routingrule)[]: Routing rules associated with this Front Door.
* **rulesEngines**: [RulesEngine](#rulesengine)[] (ReadOnly): Rules Engine Configurations available to routing rules.

## BackendPool
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [BackendPoolProperties](#backendpoolproperties): The JSON object that contains the properties required to create a Backend Pool.
* **type**: string (ReadOnly): Resource type.

## BackendPoolProperties
### Properties
* **backends**: [Backend](#backend)[]: The set of backends for this pool
* **healthProbeSettings**: [SubResource](#subresource): Reference to another subresource.
* **loadBalancingSettings**: [SubResource](#subresource): Reference to another subresource.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly): Resource status of the Front Door or Front Door SubResource.

## Backend
### Properties
* **address**: string: Location of the backend (IP address or FQDN)
* **backendHostHeader**: string: The value to use as the host header sent to the backend. If blank or unspecified, this defaults to the incoming host.
* **enabledState**: 'Disabled' | 'Enabled': Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'
* **httpPort**: int: The HTTP TCP port number. Must be between 1 and 65535.
* **httpsPort**: int: The HTTPS TCP port number. Must be between 1 and 65535.
* **priority**: int: Priority to use for load balancing. Higher priorities will not be used for load balancing if any lower priority backend is healthy.
* **privateEndpointStatus**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' (ReadOnly): The Approval status for the connection to the Private Link
* **privateLinkAlias**: string: The Alias of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
* **privateLinkApprovalMessage**: string: A custom message to be included in the approval request to connect to the Private Link
* **weight**: int: Weight of this endpoint for load balancing purposes.

## SubResource
### Properties
* **id**: string: Resource ID.

## BackendPoolsSettings
### Properties
* **enforceCertificateNameCheck**: 'Disabled' | 'Enabled': Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests.
* **sendRecvTimeoutSeconds**: int: Send and receive timeout on forwarding request to the backend. When timeout is reached, the request fails and returns.

## FrontendEndpoint
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [FrontendEndpointProperties](#frontendendpointproperties): The JSON object that contains the properties required to create a frontend endpoint.
* **type**: string (ReadOnly): Resource type.

## FrontendEndpointProperties
### Properties
* **customHttpsConfiguration**: [CustomHttpsConfiguration](#customhttpsconfiguration) (ReadOnly): Https settings for a domain
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' (ReadOnly): Provisioning status of Custom Https of the frontendEndpoint.
* **customHttpsProvisioningSubstate**: 'CertificateDeleted' | 'CertificateDeployed' | 'DeletingCertificate' | 'DeployingCertificate' | 'DomainControlValidationRequestApproved' | 'DomainControlValidationRequestRejected' | 'DomainControlValidationRequestTimedOut' | 'IssuingCertificate' | 'PendingDomainControlValidationREquestApproval' | 'SubmittingDomainControlValidationRequest' (ReadOnly): Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step.
* **hostName**: string: The host name of the frontendEndpoint. Must be a domain name.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly): Resource status of the Front Door or Front Door SubResource.
* **sessionAffinityEnabledState**: 'Disabled' | 'Enabled': Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
* **sessionAffinityTtlSeconds**: int: UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if applicable.
* **webApplicationFirewallPolicyLink**: [FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink](#frontendendpointupdateparameterswebapplicationfirewallpolicylink): Defines the Web Application Firewall policy for each host (if applicable)

## CustomHttpsConfiguration
### Properties
* **certificateSource**: 'AzureKeyVault' | 'FrontDoor' (Required): Defines the source of the SSL certificate
* **frontDoorCertificateSourceParameters**: [FrontDoorCertificateSourceParameters](#frontdoorcertificatesourceparameters): Parameters required for enabling SSL with Front Door-managed certificates
* **keyVaultCertificateSourceParameters**: [KeyVaultCertificateSourceParameters](#keyvaultcertificatesourceparameters): Parameters required for bring-your-own-certification via Key Vault
* **minimumTlsVersion**: '1.0' | '1.2' (Required): The minimum TLS version required from the clients to establish an SSL handshake with Front Door.
* **protocolType**: 'ServerNameIndication' (Required): Defines the TLS extension protocol that is used for secure delivery

## FrontDoorCertificateSourceParameters
### Properties
* **certificateType**: 'Dedicated': Defines the type of the certificate used for secure connections to a frontendEndpoint

## KeyVaultCertificateSourceParameters
### Properties
* **secretName**: string: The name of the Key Vault secret representing the full certificate PFX
* **secretVersion**: string: The version of the Key Vault secret representing the full certificate PFX
* **vault**: [KeyVaultCertificateSourceParametersVault](#keyvaultcertificatesourceparametersvault): The Key Vault containing the SSL certificate

## KeyVaultCertificateSourceParametersVault
### Properties
* **id**: string: Resource ID.

## FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink
### Properties
* **id**: string: Resource ID.

## HealthProbeSettingsModel
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [HealthProbeSettingsProperties](#healthprobesettingsproperties): The JSON object that contains the properties required to create a health probe settings.
* **type**: string (ReadOnly): Resource type.

## HealthProbeSettingsProperties
### Properties
* **enabledState**: 'Disabled' | 'Enabled': Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
* **healthProbeMethod**: 'GET' | 'HEAD': Configures which HTTP method to use to probe the backends defined under backendPools.
* **intervalInSeconds**: int: The number of seconds between health probes.
* **path**: string: The path to use for the health probe. Default is /
* **protocol**: 'Http' | 'Https': Accepted protocol schemes.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly): Resource status of the Front Door or Front Door SubResource.

## LoadBalancingSettingsModel
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [LoadBalancingSettingsProperties](#loadbalancingsettingsproperties): The JSON object that contains the properties required to create load balancing settings
* **type**: string (ReadOnly): Resource type.

## LoadBalancingSettingsProperties
### Properties
* **additionalLatencyMilliseconds**: int: The additional latency in milliseconds for probes to fall into the lowest latency bucket
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly): Resource status of the Front Door or Front Door SubResource.
* **sampleSize**: int: The number of samples to consider for load balancing decisions
* **successfulSamplesRequired**: int: The number of samples within the sample period that must succeed

## RoutingRule
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [RoutingRuleProperties](#routingruleproperties): The JSON object that contains the properties required to create a routing rule.
* **type**: string (ReadOnly): Resource type.

## RoutingRuleProperties
### Properties
* **acceptedProtocols**: 'Http' | 'Https'[]: Protocol schemes to match for this rule
* **enabledState**: 'Disabled' | 'Enabled': Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
* **frontendEndpoints**: [SubResource](#subresource)[]: Frontend endpoints associated with this rule
* **patternsToMatch**: string[]: The route patterns of the rule.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly): Resource status of the Front Door or Front Door SubResource.
* **routeConfiguration**: [RouteConfiguration](#routeconfiguration): Base class for all types of Route.
* **rulesEngine**: [SubResource](#subresource): Reference to another subresource.

## RouteConfiguration
* **Discriminator**: @odata.type

### Base Properties
### ForwardingConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration' (Required)
* **backendPool**: [SubResource](#subresource): Reference to another subresource.
* **cacheConfiguration**: [CacheConfiguration](#cacheconfiguration): Caching settings for a caching-type route. To disable caching, do not provide a cacheConfiguration object.
* **customForwardingPath**: string: A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path.
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest': Protocol this rule will use when forwarding traffic to backends.

### RedirectConfiguration
#### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration' (Required)
* **customFragment**: string: Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
* **customHost**: string: Host to redirect. Leave empty to use the incoming host as the destination host.
* **customPath**: string: The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
* **customQueryString**: string: The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in <key>=<value> format. The first ? and & will be added automatically so do not include them in the front, but do separate multiple query strings with &.
* **redirectProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest': The protocol of the destination to where the traffic is redirected
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect': The redirect type the rule will use when redirecting traffic.


## ForwardingConfiguration
### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration' (Required)
* **backendPool**: [SubResource](#subresource): Reference to another subresource.
* **cacheConfiguration**: [CacheConfiguration](#cacheconfiguration): Caching settings for a caching-type route. To disable caching, do not provide a cacheConfiguration object.
* **customForwardingPath**: string: A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path.
* **forwardingProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest': Protocol this rule will use when forwarding traffic to backends.

## CacheConfiguration
### Properties
* **cacheDuration**: string: The duration for which the content needs to be cached. Allowed format is in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations). HTTP requires the value to be no more than a year
* **dynamicCompression**: 'Disabled' | 'Enabled': Whether to use dynamic compression for cached content
* **queryParameters**: string: query parameters to include or exclude (comma separated).
* **queryParameterStripDirective**: 'StripAll' | 'StripAllExcept' | 'StripNone' | 'StripOnly': Treatment of URL query terms when forming the cache key.

## RedirectConfiguration
### Properties
* **@odata.type**: '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration' (Required)
* **customFragment**: string: Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
* **customHost**: string: Host to redirect. Leave empty to use the incoming host as the destination host.
* **customPath**: string: The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
* **customQueryString**: string: The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in <key>=<value> format. The first ? and & will be added automatically so do not include them in the front, but do separate multiple query strings with &.
* **redirectProtocol**: 'HttpOnly' | 'HttpsOnly' | 'MatchRequest': The protocol of the destination to where the traffic is redirected
* **redirectType**: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect': The redirect type the rule will use when redirecting traffic.

## RulesEngine
### Properties
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RulesEngineProperties](#rulesengineproperties): The JSON object that contains the properties required to create a Rules Engine Configuration.
* **type**: string (ReadOnly): Resource type.

## RulesEngineProperties
### Properties
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' (ReadOnly): Resource status of the Front Door or Front Door SubResource.
* **rules**: [RulesEngineRule](#rulesenginerule)[]: A list of rules that define a particular Rules Engine Configuration.

## RulesEngineRule
### Properties
* **action**: [RulesEngineAction](#rulesengineaction) (Required): One or more actions that will execute, modifying the request and/or response.
* **matchConditions**: [RulesEngineMatchCondition](#rulesenginematchcondition)[]: A list of match conditions that must meet in order for the actions of this rule to run. Having no match conditions means the actions will always run.
* **matchProcessingBehavior**: 'Continue' | 'Stop': If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
* **name**: string (Required): A name to refer to this specific rule.
* **priority**: int (Required): A priority assigned to this rule. 

## RulesEngineAction
### Properties
* **requestHeaderActions**: [HeaderAction](#headeraction)[]: A list of header actions to apply from the request from AFD to the origin.
* **responseHeaderActions**: [HeaderAction](#headeraction)[]: A list of header actions to apply from the response from AFD to the client.
* **routeConfigurationOverride**: [RouteConfiguration](#routeconfiguration): Base class for all types of Route.

## HeaderAction
### Properties
* **headerActionType**: 'Append' | 'Delete' | 'Overwrite' (Required): Which type of manipulation to apply to the header.
* **headerName**: string (Required): The name of the header this action will apply to.
* **value**: string: The value to update the given header name with. This value is not used if the actionType is Delete.

## RulesEngineMatchCondition
### Properties
* **negateCondition**: bool: Describes if this is negate condition or not
* **rulesEngineMatchValue**: string[] (Required): Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
* **rulesEngineMatchVariable**: 'IsMobile' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestFilename' | 'RequestFilenameExtension' | 'RequestHeader' | 'RequestMethod' | 'RequestPath' | 'RequestScheme' | 'RequestUri' (Required): Match Variable
* **rulesEngineOperator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' (Required): Describes operator to apply to the match condition.
* **selector**: string: Name of selector in RequestHeader or RequestBody to be matched
* **transforms**: 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode'[]: List of transforms

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

