# Microsoft.Network @ 2021-08-01

## Resource Microsoft.Network/firewallPolicies@2021-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity of the firewall policy.
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallPolicyPropertiesFormat](#firewallpolicypropertiesformat): Properties of the firewall policy.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/firewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/firewallPolicies/ruleCollectionGroups@2021-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallPolicyRuleCollectionGroupProperties](#firewallpolicyrulecollectiongroupproperties): The properties of the firewall policy rule collection group.
* **type**: 'Microsoft.Network/firewallPolicies/ruleCollectionGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/firewallPolicies/signatureOverrides@2021-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SignaturesOverridesProperties](#signaturesoverridesproperties): Will contain the properties of the resource (the actual signature overrides)
* **type**: 'Microsoft.Network/firewallPolicies/signatureOverrides' (ReadOnly, DeployTimeConstant): The resource type

## Function listIdpsFilterOptions (Microsoft.Network/firewallPolicies@2021-08-01)
* **Resource**: Microsoft.Network/firewallPolicies
* **ApiVersion**: 2021-08-01
* **Input**: [SignatureOverridesFilterValuesQuery](#signatureoverridesfiltervaluesquery)
* **Output**: [SignatureOverridesFilterValuesResponse](#signatureoverridesfiltervaluesresponse)

## Function listIdpsSignatures (Microsoft.Network/firewallPolicies@2021-08-01)
* **Resource**: Microsoft.Network/firewallPolicies
* **ApiVersion**: 2021-08-01
* **Input**: [IdpsQueryObject](#idpsqueryobject)
* **Output**: [QueryResults](#queryresults)

## Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## DnsSettings
### Properties
* **enableProxy**: bool: Enable DNS Proxy on Firewalls attached to the Firewall Policy.
* **requireProxyForNetworkRules**: bool: FQDNs in Network Rules are supported when set to true.
* **servers**: string[]: List of Custom DNS Servers.

## ExplicitProxySettings
### Properties
* **enableExplicitProxy**: bool: When set to true, explicit proxy mode is enabled.
* **httpPort**: int {minValue: 0, maxValue: 64000}: Port number for explicit proxy http protocol, cannot be greater than 64000.
* **httpsPort**: int {minValue: 0, maxValue: 64000}: Port number for explicit proxy https protocol, cannot be greater than 64000.
* **pacFile**: string: SAS URL for PAC file.
* **pacFilePort**: int {minValue: 0, maxValue: 64000}: Port number for firewall to serve PAC file.

## FilterItems
### Properties
* **field**: string: The name of the field we would like to filter
* **values**: string[]: List of values to filter the current field by

## FirewallPolicyCertificateAuthority
### Properties
* **keyVaultSecretId**: string: Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
* **name**: string: Name of the CA certificate.

## FirewallPolicyFilterRuleCollectionAction
### Properties
* **type**: 'Allow' | 'Deny' | string: The type of action.

## FirewallPolicyInsights
### Properties
* **isEnabled**: bool: A flag to indicate if the insights are enabled on the policy.
* **logAnalyticsResources**: [FirewallPolicyLogAnalyticsResources](#firewallpolicyloganalyticsresources): Workspaces needed to configure the Firewall Policy Insights.
* **retentionDays**: int: Number of days the insights should be enabled on the policy.

## FirewallPolicyIntrusionDetection
### Properties
* **configuration**: [FirewallPolicyIntrusionDetectionConfiguration](#firewallpolicyintrusiondetectionconfiguration): Intrusion detection configuration properties.
* **mode**: 'Alert' | 'Deny' | 'Off' | string: Intrusion detection general state.

## FirewallPolicyIntrusionDetectionBypassTrafficSpecifications
### Properties
* **description**: string: Description of the bypass traffic rule.
* **destinationAddresses**: string[]: List of destination IP addresses or ranges for this rule.
* **destinationIpGroups**: string[]: List of destination IpGroups for this rule.
* **destinationPorts**: string[]: List of destination ports or ranges.
* **name**: string: Name of the bypass traffic rule.
* **protocol**: 'ANY' | 'ICMP' | 'TCP' | 'UDP' | string: The rule bypass protocol.
* **sourceAddresses**: string[]: List of source IP addresses or ranges for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.

## FirewallPolicyIntrusionDetectionConfiguration
### Properties
* **bypassTrafficSettings**: [FirewallPolicyIntrusionDetectionBypassTrafficSpecifications](#firewallpolicyintrusiondetectionbypasstrafficspecifications)[]: List of rules for traffic to bypass.
* **privateRanges**: string[]: IDPS Private IP address ranges are used to identify traffic direction (i.e. inbound, outbound, etc.). By default, only ranges defined by IANA RFC 1918 are considered private IP addresses. To modify default ranges, specify your Private IP address ranges with this property
* **signatureOverrides**: [FirewallPolicyIntrusionDetectionSignatureSpecification](#firewallpolicyintrusiondetectionsignaturespecification)[]: List of specific signatures states.

## FirewallPolicyIntrusionDetectionSignatureSpecification
### Properties
* **id**: string: Signature id.
* **mode**: 'Alert' | 'Deny' | 'Off' | string: The signature state.

## FirewallPolicyLogAnalyticsResources
### Properties
* **defaultWorkspaceId**: [SubResource](#subresource): The default workspace Id for Firewall Policy Insights.
* **workspaces**: [FirewallPolicyLogAnalyticsWorkspace](#firewallpolicyloganalyticsworkspace)[]: List of workspaces for Firewall Policy Insights.

## FirewallPolicyLogAnalyticsWorkspace
### Properties
* **region**: string: Region to configure the Workspace.
* **workspaceId**: [SubResource](#subresource): The workspace Id for Firewall Policy Insights.

## FirewallPolicyNatRuleCollectionAction
### Properties
* **type**: 'DNAT' | string: The type of action.

## FirewallPolicyPropertiesFormat
### Properties
* **basePolicy**: [SubResource](#subresource): The parent firewall policy from which rules are inherited.
* **childPolicies**: [SubResource](#subresource)[] (ReadOnly): List of references to Child Firewall Policies.
* **dnsSettings**: [DnsSettings](#dnssettings): DNS Proxy Settings definition.
* **explicitProxySettings**: [ExplicitProxySettings](#explicitproxysettings): Explicit Proxy Settings definition.
* **firewalls**: [SubResource](#subresource)[] (ReadOnly): List of references to Azure Firewalls that this Firewall Policy is associated with.
* **insights**: [FirewallPolicyInsights](#firewallpolicyinsights): Insights on Firewall Policy.
* **intrusionDetection**: [FirewallPolicyIntrusionDetection](#firewallpolicyintrusiondetection): The configuration for Intrusion detection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the firewall policy resource.
* **ruleCollectionGroups**: [SubResource](#subresource)[] (ReadOnly): List of references to FirewallPolicyRuleCollectionGroups.
* **sku**: [FirewallPolicySku](#firewallpolicysku): The Firewall Policy SKU.
* **snat**: [FirewallPolicySnat](#firewallpolicysnat): The private IP addresses/IP ranges to which traffic will not be SNAT.
* **sql**: [FirewallPolicySQL](#firewallpolicysql): SQL Settings definition.
* **threatIntelMode**: 'Alert' | 'Deny' | 'Off' | string: The operation mode for Threat Intelligence.
* **threatIntelWhitelist**: [FirewallPolicyThreatIntelWhitelist](#firewallpolicythreatintelwhitelist): ThreatIntel Whitelist for Firewall Policy.
* **transportSecurity**: [FirewallPolicyTransportSecurity](#firewallpolicytransportsecurity): TLS Configuration definition.

## FirewallPolicyRule
* **Discriminator**: ruleType

### Base Properties
* **description**: string: Description of the rule.
* **name**: string: Name of the rule.

### ApplicationRule
#### Properties
* **destinationAddresses**: string[]: List of destination IP addresses or Service Tags.
* **fqdnTags**: string[]: List of FQDN Tags for this rule.
* **protocols**: [FirewallPolicyRuleApplicationProtocol](#firewallpolicyruleapplicationprotocol)[]: Array of Application Protocols.
* **ruleType**: 'ApplicationRule' (Required): Rule Type.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **targetFqdns**: string[]: List of FQDNs for this rule.
* **targetUrls**: string[]: List of Urls for this rule condition.
* **terminateTLS**: bool: Terminate TLS connections for this rule.
* **webCategories**: string[]: List of destination azure web categories.

### NatRule
#### Properties
* **destinationAddresses**: string[]: List of destination IP addresses or Service Tags.
* **destinationPorts**: string[]: List of destination ports.
* **ipProtocols**: ('Any' | 'ICMP' | 'TCP' | 'UDP' | string)[]: Array of FirewallPolicyRuleNetworkProtocols.
* **ruleType**: 'NatRule' (Required): Rule Type.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **translatedAddress**: string: The translated address for this NAT rule.
* **translatedFqdn**: string: The translated FQDN for this NAT rule.
* **translatedPort**: string: The translated port for this NAT rule.

### NetworkRule
#### Properties
* **destinationAddresses**: string[]: List of destination IP addresses or Service Tags.
* **destinationFqdns**: string[]: List of destination FQDNs.
* **destinationIpGroups**: string[]: List of destination IpGroups for this rule.
* **destinationPorts**: string[]: List of destination ports.
* **ipProtocols**: ('Any' | 'ICMP' | 'TCP' | 'UDP' | string)[]: Array of FirewallPolicyRuleNetworkProtocols.
* **ruleType**: 'NetworkRule' (Required): Rule Type.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.


## FirewallPolicyRuleApplicationProtocol
### Properties
* **port**: int {minValue: 0, maxValue: 64000}: Port number for the protocol, cannot be greater than 64000.
* **protocolType**: 'Http' | 'Https' | string: Protocol type.

## FirewallPolicyRuleCollection
* **Discriminator**: ruleCollectionType

### Base Properties
* **name**: string: The name of the rule collection.
* **priority**: int {minValue: 100, maxValue: 65000}: Priority of the Firewall Policy Rule Collection resource.

### FirewallPolicyFilterRuleCollection
#### Properties
* **action**: [FirewallPolicyFilterRuleCollectionAction](#firewallpolicyfilterrulecollectionaction): The action type of a Filter rule collection.
* **ruleCollectionType**: 'FirewallPolicyFilterRuleCollection' (Required): The type of the rule collection.
* **rules**: [FirewallPolicyRule](#firewallpolicyrule)[]: List of rules included in a rule collection.

### FirewallPolicyNatRuleCollection
#### Properties
* **action**: [FirewallPolicyNatRuleCollectionAction](#firewallpolicynatrulecollectionaction): The action type of a Nat rule collection.
* **ruleCollectionType**: 'FirewallPolicyNatRuleCollection' (Required): The type of the rule collection.
* **rules**: [FirewallPolicyRule](#firewallpolicyrule)[]: List of rules included in a rule collection.


## FirewallPolicyRuleCollectionGroupProperties
### Properties
* **priority**: int {minValue: 100, maxValue: 65000}: Priority of the Firewall Policy Rule Collection Group resource.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the firewall policy rule collection group resource.
* **ruleCollections**: [FirewallPolicyRuleCollection](#firewallpolicyrulecollection)[]: Group of Firewall Policy rule collections.

## FirewallPolicySku
### Properties
* **tier**: 'Basic' | 'Premium' | 'Standard' | string: Tier of Firewall Policy.

## FirewallPolicySnat
### Properties
* **privateRanges**: string[]: List of private IP addresses/IP address ranges to not be SNAT.

## FirewallPolicySQL
### Properties
* **allowSqlRedirect**: bool: A flag to indicate if SQL Redirect traffic filtering is enabled. Turning on the flag requires no rule using port 11000-11999.

## FirewallPolicyThreatIntelWhitelist
### Properties
* **fqdns**: string[]: List of FQDNs for the ThreatIntel Whitelist.
* **ipAddresses**: string[]: List of IP addresses for the ThreatIntel Whitelist.

## FirewallPolicyTransportSecurity
### Properties
* **certificateAuthority**: [FirewallPolicyCertificateAuthority](#firewallpolicycertificateauthority): The CA used for intermediate CA generation.

## IdpsQueryObject
### Properties
* **filters**: [FilterItems](#filteritems)[]: Contain all filters names and values
* **orderBy**: [OrderBy](#orderby): Column to sort response by
* **resultsPerPage**: int {minValue: 1, maxValue: 1000}: The number of the results to return in each page
* **search**: string: Search term in all columns
* **skip**: int: The number of records matching the filter to skip

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties](#components1jq1t4ischemasmanagedserviceidentitypropertiesuserassignedidentitiesadditionalproperties)

## OrderBy
### Properties
* **field**: string: Describes the actual column name to sort by
* **order**: 'Ascending' | 'Descending' | string: Describes if results should be in ascending/descending order

## QueryResults
### Properties
* **matchingRecordsCount**: int: Number of total records matching the query.
* **signatures**: [SingleQueryResult](#singlequeryresult)[]: Array containing the results of the query

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SignatureOverridesFilterValuesQuery
### Properties
* **filterName**: string: Describes the name of the column which values will be returned

## SignatureOverridesFilterValuesResponse
### Properties
* **filterValues**: string[]: Describes the possible values

## Signatures
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SignaturesOverridesProperties
### Properties
* **signatures**: [Signatures](#signatures): Dictionary of <string>

## SingleQueryResult
### Properties
* **description**: string: Describes what is the signature enforces
* **destinationPorts**: string[]: Describes the list of destination ports related to this signature
* **direction**: int: Describes in which direction signature is being enforced: 0 - Inbound, 1 - OutBound, 2 - Bidirectional
* **group**: string: Describes the groups the signature belongs to
* **inheritedFromParentPolicy**: bool: Describes if this override is inherited from base policy or not
* **lastUpdated**: string: Describes the last updated time of the signature (provided from 3rd party vendor)
* **mode**: int: The current mode enforced, 0 - Disabled, 1 - Alert, 2 -Deny
* **protocol**: string: Describes the protocol the signatures is being enforced in
* **severity**: int: Describes the severity of signature: 1 - Low, 2 - Medium, 3 - High
* **signatureId**: int: The ID of the signature
* **sourcePorts**: string[]: Describes the list of source ports related to this signature

## SubResource
### Properties
* **id**: string: Resource ID.

