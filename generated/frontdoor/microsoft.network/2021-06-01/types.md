# Microsoft.Network @ 2021-06-01

## Resource Microsoft.Network/frontDoors@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FrontDoorProperties](#frontdoorproperties): Properties of the Front Door Load Balancer
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/frontDoors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/frontDoors/frontendEndpoints@2021-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FrontendEndpointProperties](#frontendendpointproperties) (ReadOnly): Properties of the Frontend endpoint
* **type**: 'Microsoft.Network/frontDoors/frontendEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/frontDoors/rulesEngines@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RulesEngineProperties](#rulesengineproperties): Properties of the Rules Engine Configuration.
* **type**: 'Microsoft.Network/frontDoors/rulesEngines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebApplicationFirewallPolicyProperties](#webapplicationfirewallpolicyproperties): Properties of the web application firewall policy.
* **sku**: [Sku](#sku): The pricing tier of web application firewall policy. Defaults to Classic_AzureFrontDoor if not specified.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Backend
### Properties
* **address**: string: Location of the backend (IP address or FQDN)
* **backendHostHeader**: string: The value to use as the host header sent to the backend. If blank or unspecified, this defaults to the incoming host.
* **enabledState**: 'Disabled' | 'Enabled' | string: Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'
* **httpPort**: int: The HTTP TCP port number. Must be between 1 and 65535.
* **httpsPort**: int: The HTTPS TCP port number. Must be between 1 and 65535.
* **priority**: int: Priority to use for load balancing. Higher priorities will not be used for load balancing if any lower priority backend is healthy.
* **privateEndpointStatus**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string (ReadOnly): The Approval status for the connection to the Private Link
* **privateLinkAlias**: string: The Alias of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
* **privateLinkApprovalMessage**: string: A custom message to be included in the approval request to connect to the Private Link
* **privateLinkLocation**: string: The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
* **privateLinkResourceId**: string: The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
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
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Migrated' | 'Migrating' | string (ReadOnly): Resource status.

## BackendPoolsSettings
### Properties
* **enforceCertificateNameCheck**: 'Disabled' | 'Enabled' | string: Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests.
* **sendRecvTimeoutSeconds**: int: Send and receive timeout on forwarding request to the backend. When timeout is reached, the request fails and returns.

## CacheConfiguration
### Properties
* **cacheDuration**: string: The duration for which the content needs to be cached. Allowed format is in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations). HTTP requires the value to be no more than a year
* **dynamicCompression**: 'Disabled' | 'Enabled' | string: Whether to use dynamic compression for cached content
* **queryParameters**: string: query parameters to include or exclude (comma separated).
* **queryParameterStripDirective**: 'StripAll' | 'StripAllExcept' | 'StripNone' | 'StripOnly' | string: Treatment of URL query terms when forming the cache key.

## CustomHttpsConfiguration
### Properties
* **certificateSource**: 'AzureKeyVault' | 'FrontDoor' | string (Required): Defines the source of the SSL certificate
* **frontDoorCertificateSourceParameters**: [FrontDoorCertificateSourceParameters](#frontdoorcertificatesourceparameters): Parameters required for enabling SSL with Front Door-managed certificates (if certificateSource=FrontDoor)
* **keyVaultCertificateSourceParameters**: [KeyVaultCertificateSourceParameters](#keyvaultcertificatesourceparameters): KeyVault certificate source parameters (if certificateSource=AzureKeyVault)
* **minimumTlsVersion**: '1.0' | '1.2' | string (Required): The minimum TLS version required from the clients to establish an SSL handshake with Front Door.
* **protocolType**: 'ServerNameIndication' | string (Required): Defines the TLS extension protocol that is used for secure delivery

## CustomRule
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' | string (Required): Describes what action to be applied when rule matches.
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
* **matchConditions**: [MatchCondition](#matchcondition)[] (Required): List of match conditions.
* **name**: string: Describes the name of the rule.
* **priority**: int (Required): Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
* **rateLimitDurationInMinutes**: int: Time window for resetting the rate limit count. Default is 1 minute.
* **rateLimitThreshold**: int: Number of allowed requests per client within the time window.
* **ruleType**: 'MatchRule' | 'RateLimitRule' | string (Required): Describes type of rule.

## CustomRuleList
### Properties
* **rules**: [CustomRule](#customrule)[]: List of rules

## FrontDoorCertificateSourceParameters
### Properties
* **certificateType**: 'Dedicated' | string: Defines the type of the certificate used for secure connections to a frontendEndpoint

## FrontDoorProperties
### Properties
* **backendPools**: [BackendPool](#backendpool)[]: Backend pools available to routing rules.
* **backendPoolsSettings**: [BackendPoolsSettings](#backendpoolssettings): Settings for all backendPools
* **cname**: string (ReadOnly): The host that each frontendEndpoint must CNAME to.
* **enabledState**: 'Disabled' | 'Enabled' | string: Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
* **extendedProperties**: [FrontDoorPropertiesExtendedProperties](#frontdoorpropertiesextendedproperties) (ReadOnly): Key-Value pair representing additional properties for frontdoor.
* **friendlyName**: string: A friendly name for the frontDoor
* **frontdoorId**: string (ReadOnly): The Id of the frontdoor.
* **frontendEndpoints**: [FrontendEndpoint](#frontendendpoint)[]: Frontend endpoints available to routing rules.
* **healthProbeSettings**: [HealthProbeSettingsModel](#healthprobesettingsmodel)[]: Health probe settings associated with this Front Door instance.
* **loadBalancingSettings**: [LoadBalancingSettingsModel](#loadbalancingsettingsmodel)[]: Load balancing settings associated with this Front Door instance.
* **provisioningState**: string (ReadOnly): Provisioning state of the Front Door.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Migrated' | 'Migrating' | string (ReadOnly): Resource status of the Front Door.
* **routingRules**: [RoutingRule](#routingrule)[]: Routing rules associated with this Front Door.
* **rulesEngines**: [RulesEngine](#rulesengine)[] (ReadOnly): Rules Engine Configurations available to routing rules.

## FrontDoorPropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FrontendEndpoint
### Properties
* **id**: string: Resource ID.
* **name**: string: Resource name.
* **properties**: [FrontendEndpointProperties](#frontendendpointproperties): Properties of the Frontend endpoint
* **type**: string (ReadOnly): Resource type.

## FrontendEndpointLink
### Properties
* **id**: string: Resource ID.

## FrontendEndpointProperties
### Properties
* **customHttpsConfiguration**: [CustomHttpsConfiguration](#customhttpsconfiguration) (ReadOnly): The configuration specifying how to enable HTTPS
* **customHttpsProvisioningState**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' | string (ReadOnly): Provisioning status of Custom Https of the frontendEndpoint.
* **customHttpsProvisioningSubstate**: 'CertificateDeleted' | 'CertificateDeployed' | 'DeletingCertificate' | 'DeployingCertificate' | 'DomainControlValidationRequestApproved' | 'DomainControlValidationRequestRejected' | 'DomainControlValidationRequestTimedOut' | 'IssuingCertificate' | 'PendingDomainControlValidationREquestApproval' | 'SubmittingDomainControlValidationRequest' | string (ReadOnly): Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step.
* **hostName**: string: The host name of the frontendEndpoint. Must be a domain name.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Migrated' | 'Migrating' | string (ReadOnly): Resource status.
* **sessionAffinityEnabledState**: 'Disabled' | 'Enabled' | string: Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
* **sessionAffinityTtlSeconds**: int: UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if applicable.
* **webApplicationFirewallPolicyLink**: [FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink](#frontendendpointupdateparameterswebapplicationfirewallpolicylink): Defines the Web Application Firewall policy for each host (if applicable)

## FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink
### Properties
* **id**: string: Resource ID.

## HeaderAction
### Properties
* **headerActionType**: 'Append' | 'Delete' | 'Overwrite' | string (Required): Which type of manipulation to apply to the header.
* **headerName**: string (Required): The name of the header this action will apply to.
* **value**: string: The value to update the given header name with. This value is not used if the actionType is Delete.

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
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Migrated' | 'Migrating' | string (ReadOnly): Resource status.

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
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Migrated' | 'Migrating' | string (ReadOnly): Resource status.
* **sampleSize**: int: The number of samples to consider for load balancing decisions
* **successfulSamplesRequired**: int: The number of samples within the sample period that must succeed

## ManagedRuleExclusion
### Properties
* **matchVariable**: 'QueryStringArgNames' | 'RequestBodyJsonArgNames' | 'RequestBodyPostArgNames' | 'RequestCookieNames' | 'RequestHeaderNames' | string (Required): The variable type to be excluded.
* **selector**: string (Required): Selector value for which elements in the collection this exclusion applies to.
* **selectorMatchOperator**: 'Contains' | 'EndsWith' | 'Equals' | 'EqualsAny' | 'StartsWith' | string (Required): Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to.

## ManagedRuleGroupOverride
### Properties
* **exclusions**: [ManagedRuleExclusion](#managedruleexclusion)[]: Describes the exclusions that are applied to all rules in the group.
* **ruleGroupName**: string (Required): Describes the managed rule group to override.
* **rules**: [ManagedRuleOverride](#managedruleoverride)[]: List of rules that will be disabled. If none specified, all rules in the group will be disabled.

## ManagedRuleOverride
### Properties
* **action**: 'Allow' | 'Block' | 'Log' | 'Redirect' | string: Describes the override action to be applied when rule matches.
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified.
* **exclusions**: [ManagedRuleExclusion](#managedruleexclusion)[]: Describes the exclusions that are applied to this specific rule.
* **ruleId**: string (Required): Identifier for the managed rule.

## ManagedRuleSet
### Properties
* **exclusions**: [ManagedRuleExclusion](#managedruleexclusion)[]: Describes the exclusions that are applied to all rules in the set.
* **ruleGroupOverrides**: [ManagedRuleGroupOverride](#managedrulegroupoverride)[]: Defines the rule group overrides to apply to the rule set.
* **ruleSetAction**: 'Block' | 'Log' | 'Redirect' | string: Defines the action to take when a managed rule set score threshold is met.
* **ruleSetType**: string (Required): Defines the rule set type to use.
* **ruleSetVersion**: string (Required): Defines the version of the rule set to use.

## ManagedRuleSetList
### Properties
* **managedRuleSets**: [ManagedRuleSet](#managedruleset)[]: List of rule sets.

## MatchCondition
### Properties
* **matchValue**: string[] (Required): List of possible match values.
* **matchVariable**: 'Cookies' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestHeader' | 'RequestMethod' | 'RequestUri' | 'SocketAddr' | string (Required): Request variable to compare with.
* **negateCondition**: bool: Describes if the result of this condition should be negated.
* **operator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | 'RegEx' | string (Required): Comparison type to use for matching with the variable value.
* **selector**: string: Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null.
* **transforms**: 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string[]: List of transforms.

## PolicySettings
### Properties
* **customBlockResponseBody**: string: If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
* **customBlockResponseStatusCode**: int: If the action type is block, customer can override the response status code.
* **enabledState**: 'Disabled' | 'Enabled' | string: Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified.
* **mode**: 'Detection' | 'Prevention' | string: Describes if it is in detection mode or prevention mode at policy level.
* **redirectUrl**: string: If action type is redirect, this field represents redirect URL for the client.
* **requestBodyCheck**: 'Disabled' | 'Enabled' | string: Describes if policy managed rules will inspect the request body content.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## RoutingRuleLink
### Properties
* **id**: string: Resource ID.

## RoutingRuleProperties
### Properties
* **acceptedProtocols**: 'Http' | 'Https' | string[]: Protocol schemes to match for this rule
* **enabledState**: 'Disabled' | 'Enabled' | string: Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
* **frontendEndpoints**: [SubResource](#subresource)[]: Frontend endpoints associated with this rule
* **patternsToMatch**: string[]: The route patterns of the rule.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Migrated' | 'Migrating' | string (ReadOnly): Resource status.
* **routeConfiguration**: [RouteConfiguration](#routeconfiguration): A reference to the routing configuration.
* **rulesEngine**: [SubResource](#subresource): A reference to a specific Rules Engine Configuration to apply to this route.
* **webApplicationFirewallPolicyLink**: [RoutingRuleUpdateParametersWebApplicationFirewallPolicyLink](#routingruleupdateparameterswebapplicationfirewallpolicylink): Defines the Web Application Firewall policy for each routing rule (if applicable)

## RoutingRuleUpdateParametersWebApplicationFirewallPolicyLink
### Properties
* **id**: string: Resource ID.

## RulesEngine
### Properties
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Resource name.
* **properties**: [RulesEngineProperties](#rulesengineproperties): Properties of the Rules Engine Configuration.
* **type**: string (ReadOnly): Resource type.

## RulesEngineAction
### Properties
* **requestHeaderActions**: [HeaderAction](#headeraction)[]: A list of header actions to apply from the request from AFD to the origin.
* **responseHeaderActions**: [HeaderAction](#headeraction)[]: A list of header actions to apply from the response from AFD to the client.
* **routeConfigurationOverride**: [RouteConfiguration](#routeconfiguration): Override the route configuration.

## RulesEngineMatchCondition
### Properties
* **negateCondition**: bool: Describes if this is negate condition or not
* **rulesEngineMatchValue**: string[] (Required): Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
* **rulesEngineMatchVariable**: 'IsMobile' | 'PostArgs' | 'QueryString' | 'RemoteAddr' | 'RequestBody' | 'RequestFilename' | 'RequestFilenameExtension' | 'RequestHeader' | 'RequestMethod' | 'RequestPath' | 'RequestScheme' | 'RequestUri' | string (Required): Match Variable
* **rulesEngineOperator**: 'Any' | 'BeginsWith' | 'Contains' | 'EndsWith' | 'Equal' | 'GeoMatch' | 'GreaterThan' | 'GreaterThanOrEqual' | 'IPMatch' | 'LessThan' | 'LessThanOrEqual' | string (Required): Describes operator to apply to the match condition.
* **selector**: string: Name of selector in RequestHeader or RequestBody to be matched
* **transforms**: 'Lowercase' | 'RemoveNulls' | 'Trim' | 'Uppercase' | 'UrlDecode' | 'UrlEncode' | string[]: List of transforms

## RulesEngineProperties
### Properties
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Migrated' | 'Migrating' | string (ReadOnly): Resource status.
* **rules**: [RulesEngineRule](#rulesenginerule)[]: A list of rules that define a particular Rules Engine Configuration.

## RulesEngineRule
### Properties
* **action**: [RulesEngineAction](#rulesengineaction) (Required): Actions to perform on the request and response if all of the match conditions are met.
* **matchConditions**: [RulesEngineMatchCondition](#rulesenginematchcondition)[]: A list of match conditions that must meet in order for the actions of this rule to run. Having no match conditions means the actions will always run.
* **matchProcessingBehavior**: 'Continue' | 'Stop' | string: If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
* **name**: string (Required): A name to refer to this specific rule.
* **priority**: int (Required): A priority assigned to this rule.

## SecurityPolicyLink
### Properties
* **id**: string: Resource ID.

## Sku
### Properties
* **name**: 'Classic_AzureFrontDoor' | 'Premium_AzureFrontDoor' | 'Standard_AzureFrontDoor' | string: Name of the pricing tier.

## SubResource
### Properties
* **id**: string: Resource ID.

## WebApplicationFirewallPolicyProperties
### Properties
* **customRules**: [CustomRuleList](#customrulelist): Describes custom rules inside the policy.
* **extendedProperties**: [WebApplicationFirewallPolicyPropertiesExtendedProperties](#webapplicationfirewallpolicypropertiesextendedproperties) (ReadOnly): Key-Value pair representing additional properties for Web Application Firewall policy.
* **frontendEndpointLinks**: [FrontendEndpointLink](#frontendendpointlink)[] (ReadOnly): Describes Frontend Endpoints associated with this Web Application Firewall policy.
* **managedRules**: [ManagedRuleSetList](#managedrulesetlist): Describes managed rules inside the policy.
* **policySettings**: [PolicySettings](#policysettings): Describes settings for the policy.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the policy.
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status of the policy.
* **routingRuleLinks**: [RoutingRuleLink](#routingrulelink)[] (ReadOnly): Describes Routing Rules associated with this Web Application Firewall policy.
* **securityPolicyLinks**: [SecurityPolicyLink](#securitypolicylink)[] (ReadOnly): Describes Security Policy associated with this Web Application Firewall policy.

## WebApplicationFirewallPolicyPropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

