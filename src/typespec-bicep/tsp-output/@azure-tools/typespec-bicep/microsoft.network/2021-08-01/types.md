# Microsoft.Network @ 2021-08-01

## Resource Microsoft.Network/azureFirewalls@2021-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureFirewallPropertiesFormat](#azurefirewallpropertiesformat): The resource-specific properties for this resource.
* **type**: 'Microsoft.Network/azureFirewalls' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## Resource Microsoft.Network/firewallPolicies@2021-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallPolicyPropertiesFormat](#firewallpolicypropertiesformat): The resource-specific properties for this resource.
* **type**: 'Microsoft.Network/firewallPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/ruleCollectionGroups@2021-08-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallPolicyRuleCollectionGroupProperties](#firewallpolicyrulecollectiongroupproperties): The resource-specific properties for this resource.
* **type**: 'Microsoft.Network/ruleCollectionGroups' (ReadOnly, DeployTimeConstant): The resource type

## AzureFirewallApplicationRule
### Properties
* **description**: string: Description of the rule.
* **fqdnTags**: string[]: List of FQDN Tags for this rule.
* **name**: string: Name of the application rule.
* **protocols**: [AzureFirewallApplicationRuleProtocol](#azurefirewallapplicationruleprotocol)[]: Array of ApplicationRuleProtocols.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **targetFqdns**: string[]: List of FQDNs for this rule.

## AzureFirewallApplicationRuleCollection
### Properties
* **name**: string: Name of the resource.
* **properties**: [AzureFirewallApplicationRuleCollectionPropertiesFormat](#azurefirewallapplicationrulecollectionpropertiesformat): Properties of the azure firewall application rule collection.

## AzureFirewallApplicationRuleCollectionPropertiesFormat
### Properties
* **action**: [AzureFirewallRCAction](#azurefirewallrcaction): The action type of a rule collection.
* **priority**: int: Priority of the application rule collection resource.
* **provisioningState**: any | any | any | any | string (ReadOnly): The provisioning state of the application rule collection resource.
* **rules**: [AzureFirewallApplicationRule](#azurefirewallapplicationrule)[]: Collection of rules used by a application rule collection.

## AzureFirewallApplicationRuleProtocol
### Properties
* **port**: int: Port number for the protocol, cannot be greater than 64000.
* **protocolType**: any | any | any | string: Protocol type.

## AzureFirewallIPConfiguration
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **name**: string: Name of the resource.
* **properties**: [AzureFirewallIPConfigurationPropertiesFormat](#azurefirewallipconfigurationpropertiesformat): Properties of the azure firewall IP configuration.

## AzureFirewallIPConfigurationPropertiesFormat
### Properties
* **privateIPAddress**: string (ReadOnly): The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes.
* **provisioningState**: any | any | any | any | string (ReadOnly): The provisioning state of the Azure Firewall IP configuration resource.
* **publicIPAddress**: [SubResource](#subresource): Reference of the PublicIP resource.
* **subnet**: [SubResource](#subresource): Reference of the subnet resource.

## AzureFirewallIpGroups
### Properties
* **changeNumber**: string (ReadOnly): The Provisioning state of the IpGroup resource.
* **id**: string (ReadOnly): Resource ID.

## AzureFirewallNatRCAction
### Properties
* **type**: any | any | string: The type of action.

## AzureFirewallNatRule
### Properties
* **description**: string: Description of the rule.
* **destinationAddresses**: string[]: List of destination IP addresses for this rule.
* **destinationPorts**: string[]: List of destination ports.
* **name**: string: Name of the NAT rule.
* **protocols**: (any | any | any | any | string)[]: Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **translatedAddress**: string: The translated address for this NAT rule.
* **translatedFqdn**: string: The translated FQDN for this NAT rule.
* **translatedPort**: string: The translated port for this NAT rule.

## AzureFirewallNatRuleCollection
### Properties
* **name**: string: Name of the resource.
* **properties**: [AzureFirewallNatRuleCollectionProperties](#azurefirewallnatrulecollectionproperties): Properties of the azure firewall NAT rule collection.

## AzureFirewallNatRuleCollectionProperties
### Properties
* **action**: [AzureFirewallNatRCAction](#azurefirewallnatrcaction): The action type of a NAT rule collection.
* **priority**: int: Priority of the NAT rule collection resource.
* **provisioningState**: any | any | any | any | string (ReadOnly): The provisioning state of the NAT rule collection resource.
* **rules**: [AzureFirewallNatRule](#azurefirewallnatrule)[]: Collection of rules used by a NAT rule collection.

## AzureFirewallNetworkRule
### Properties
* **description**: string: Description of the rule.
* **destinationAddresses**: string[]: List of destination IP addresses.
* **destinationFqdns**: string[]: List of destination FQDNs.
* **destinationIpGroups**: string[]: List of destination IpGroups for this rule.
* **destinationPorts**: string[]: List of destination ports.
* **name**: string: Name of the network rule.
* **protocols**: (any | any | any | any | string)[]: Array of AzureFirewallNetworkRuleProtocols.
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.

## AzureFirewallNetworkRuleCollection
### Properties
* **name**: string: Name of the resource.
* **properties**: [AzureFirewallNetworkRuleCollectionPropertiesFormat](#azurefirewallnetworkrulecollectionpropertiesformat): Properties of the azure firewall network rule collection.

## AzureFirewallNetworkRuleCollectionPropertiesFormat
### Properties
* **action**: [AzureFirewallRCAction](#azurefirewallrcaction): The action type of a rule collection.
* **priority**: int: Priority of the network rule collection resource.
* **provisioningState**: any | any | any | any | string (ReadOnly): The provisioning state of the network rule collection resource.
* **rules**: [AzureFirewallNetworkRule](#azurefirewallnetworkrule)[]: Collection of rules used by a network rule collection.

## AzureFirewallPropertiesFormat
### Properties
* **additionalProperties**: [Record](#record): A key-value pair of additional properties.
* **applicationRuleCollections**: [AzureFirewallApplicationRuleCollection](#azurefirewallapplicationrulecollection)[]: Collection of application rule collections used by Azure Firewall.
* **firewallPolicy**: [SubResource](#subresource): The firewallPolicy associated with this azure firewall.
* **hubIPAddresses**: [HubIPAddresses](#hubipaddresses): IP addresses associated with AzureFirewall.
* **ipConfigurations**: [AzureFirewallIPConfiguration](#azurefirewallipconfiguration)[]: IP configuration of the Azure Firewall resource.
* **ipGroups**: [AzureFirewallIpGroups](#azurefirewallipgroups)[] (ReadOnly): IpGroups associated with AzureFirewall.
* **managementIpConfiguration**: [AzureFirewallIPConfiguration](#azurefirewallipconfiguration): IP configuration of the Azure Firewall used for management traffic.
* **natRuleCollections**: [AzureFirewallNatRuleCollection](#azurefirewallnatrulecollection)[]: Collection of NAT rule collections used by Azure Firewall.
* **networkRuleCollections**: [AzureFirewallNetworkRuleCollection](#azurefirewallnetworkrulecollection)[]: Collection of network rule collections used by Azure Firewall.
* **provisioningState**: any | any | any | any | string (ReadOnly): The provisioning state of the Azure Firewall resource.
* **sku**: [AzureFirewallSku](#azurefirewallsku): The Azure Firewall Resource SKU.
* **threatIntelMode**: any | any | any | string: The operation mode for Threat Intelligence.
* **virtualHub**: [SubResource](#subresource): The virtualHub to which the firewall belongs.

## AzureFirewallPublicIPAddress
### Properties
* **address**: string: Public IP Address value.

## AzureFirewallRCAction
### Properties
* **type**: any | any | string: The type of action.

## AzureFirewallSku
### Properties
* **name**: any | any | string: Name of an Azure Firewall SKU
* **tier**: any | any | any | string: Tier of an Azure Firewall

## DnsSettings
### Properties
* **enableProxy**: bool: Enable DNS Proxy on Firewalls attached to the Firewall Policy.
* **requireProxyForNetworkRules**: bool: FQDNs in Network Rules are supported when set to true.
* **servers**: string[]: List of Custom DNS Servers.

## ExplicitProxySettings
### Properties
* **enableExplicitProxy**: bool: When set to true, explicit proxy mode is enabled.
* **httpPort**: int: Port number for explicit proxy http protocol, cannot be greater than 64000.
* **httpsPort**: int: Port number for explicit proxy https protocol, cannot be greater than 64000.
* **pacFile**: string: SAS URL for PAC file.
* **pacFilePort**: int: Port number for explicit proxy pac file.

## FirewallPolicyCertificateAuthority
### Properties
* **keyVaultSecretId**: string: Secret Id of (base-64 encoded unencrypted pfx) Secret or Certificate object stored in KeyVault.
* **name**: string: Name of the CA certificate.

## FirewallPolicyFilterRuleCollectionAction
### Properties
* **type**: any | any | string: The type of action.

## FirewallPolicyInsights
### Properties
* **isEnabled**: bool: A flag to indicate if the insights are enabled on the policy.
* **logAnalyticsResources**: [FirewallPolicyLogAnalyticsResources](#firewallpolicyloganalyticsresources): Workspaces needed to configure the Firewall Policy Insights.
* **retentionDays**: int: Number of days the insights should be enabled on the policy.

## FirewallPolicyIntrusionDetection
### Properties
* **configuration**: [FirewallPolicyIntrusionDetectionConfiguration](#firewallpolicyintrusiondetectionconfiguration): Intrusion detection configuration properties.
* **mode**: any | any | any | string: Intrusion detection general state.

## FirewallPolicyIntrusionDetectionBypassTrafficSpecifications
### Properties
* **description**: string: Description of the bypass traffic rule.
* **destinationAddresses**: string[]: List of destination addresses or ranges for this rule.
* **destinationIpGroups**: string[]: List of destination IpGroups for this rule.
* **destinationPorts**: string[]: List of destination ports or ranges.
* **name**: string: Name of the bypass traffic rule.
* **protocol**: string: The rule bypass protocol.
* **sourceAddresses**: string[]: List of source addresses or ranges for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.

## FirewallPolicyIntrusionDetectionConfiguration
### Properties
* **bypassTrafficSettings**: [FirewallPolicyIntrusionDetectionBypassTrafficSpecifications](#firewallpolicyintrusiondetectionbypasstrafficspecifications)[]: List of rules for traffic to bypass.
* **privateRanges**: string[]: IDPS Private IP address ranges are used to identify traffic direction.
* **signatureOverrides**: [FirewallPolicyIntrusionDetectionSignatureSpecification](#firewallpolicyintrusiondetectionsignaturespecification)[]: List of specific signatures states.

## FirewallPolicyIntrusionDetectionSignatureSpecification
### Properties
* **id**: string: Signature id.
* **mode**: any | any | any | string: The signature state.

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
* **type**: any | string: The type of action.

## FirewallPolicyPropertiesFormat
### Properties
* **basePolicy**: [SubResource](#subresource): The parent firewall policy from which rules are inherited.
* **childPolicies**: [SubResource](#subresource)[] (ReadOnly): List of references to Child Firewall Policies.
* **dnsSettings**: [DnsSettings](#dnssettings): DNS Proxy Settings definition.
* **explicitProxySettings**: [ExplicitProxySettings](#explicitproxysettings): Explicit Proxy Settings definition.
* **firewalls**: [SubResource](#subresource)[] (ReadOnly): List of references to Azure Firewalls that this Firewall Policy is associated with.
* **insights**: [FirewallPolicyInsights](#firewallpolicyinsights): Insights on Firewall Policy.
* **intrusionDetection**: [FirewallPolicyIntrusionDetection](#firewallpolicyintrusiondetection): The configuration for Intrusion detection.
* **provisioningState**: any | any | any | any | string (ReadOnly): The provisioning state of the firewall policy resource.
* **ruleCollectionGroups**: [SubResource](#subresource)[] (ReadOnly): List of references to FirewallPolicyRuleCollectionGroups.
* **sku**: [FirewallPolicySku](#firewallpolicysku): The Firewall Policy SKU.
* **snat**: [FirewallPolicySNAT](#firewallpolicysnat): The private IP addresses/IP ranges to which traffic will not be SNAT.
* **sql**: [FirewallPolicySQL](#firewallpolicysql): SQL Settings definition.
* **threatIntelMode**: any | any | any | string: The operation mode for Threat Intelligence.
* **threatIntelWhitelist**: [FirewallPolicyThreatIntelWhitelist](#firewallpolicythreatintelwhitelist): ThreatIntel Whitelist for Firewall Policy.
* **transportSecurity**: [FirewallPolicyTransportSecurity](#firewallpolicytransportsecurity): TLS Configuration definition.

## FirewallPolicyRule
* **Discriminator**: ruleType

### Base Properties
* **description**: string: Description of the rule.
* **name**: string: Name of the rule.

### ApplicationRule
#### Properties
* **description**: string: Description of the rule.
* **destinationAddresses**: string[]: List of destination addresses for this rule.
* **fqdnTags**: string[]: List of FQDN Tags for this rule.
* **name**: string: Name of the rule.
* **protocols**: [FirewallPolicyRuleApplicationProtocol](#firewallpolicyruleapplicationprotocol)[]: Array of Application Protocols.
* **ruleType**: 'ApplicationRule' (Required)
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **targetFqdns**: string[]: List of FQDNs for this rule.
* **targetUrls**: string[]: List of Urls for this rule condition.
* **terminateTLS**: bool: Terminate TLS connections for this rule.
* **webCategories**: string[]: List of destination azure web categories.

### NatRule
#### Properties
* **description**: string: Description of the rule.
* **destinationAddresses**: string[]: List of destination IP addresses or Service Tags.
* **destinationPorts**: string[]: List of destination ports.
* **ipProtocols**: (any | any | any | any | string)[]: Array of FirewallPolicyRuleNetworkProtocols.
* **name**: string: Name of the rule.
* **ruleType**: 'NatRule' (Required)
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.
* **translatedAddress**: string: The translated address for this NAT rule.
* **translatedFqdn**: string: The translated FQDN for this NAT rule.
* **translatedPort**: string: The translated port for this NAT rule.

### NetworkRule
#### Properties
* **description**: string: Description of the rule.
* **destinationAddresses**: string[]: List of destination IP addresses or Service Tags.
* **destinationFqdns**: string[]: List of destination FQDNs.
* **destinationIpGroups**: string[]: List of destination IpGroups for this rule.
* **destinationPorts**: string[]: List of destination ports.
* **ipProtocols**: (any | any | any | any | string)[]: Array of FirewallPolicyRuleNetworkProtocols.
* **name**: string: Name of the rule.
* **ruleType**: 'NetworkRule' (Required)
* **sourceAddresses**: string[]: List of source IP addresses for this rule.
* **sourceIpGroups**: string[]: List of source IpGroups for this rule.


## FirewallPolicyRuleApplicationProtocol
### Properties
* **port**: int: Port number for the protocol, cannot be greater than 64000.
* **protocolType**: any | any | any | string: Protocol type.

## FirewallPolicyRuleCollection
* **Discriminator**: ruleCollectionType

### Base Properties
* **name**: string: The name of the rule collection.
* **priority**: int: Priority of the Firewall Policy Rule Collection resource.

### FirewallPolicyFilterRuleCollection
#### Properties
* **action**: [FirewallPolicyFilterRuleCollectionAction](#firewallpolicyfilterrulecollectionaction): The action type of a Filter rule collection.
* **name**: string: The name of the rule collection.
* **priority**: int: Priority of the Firewall Policy Rule Collection resource.
* **ruleCollectionType**: 'FirewallPolicyFilterRuleCollection' (Required)
* **rules**: [FirewallPolicyRule](#firewallpolicyrule)[]: List of rules included in a rule collection.

### FirewallPolicyNatRuleCollection
#### Properties
* **action**: [FirewallPolicyNatRuleCollectionAction](#firewallpolicynatrulecollectionaction): The action type of a Nat rule collection.
* **name**: string: The name of the rule collection.
* **priority**: int: Priority of the Firewall Policy Rule Collection resource.
* **ruleCollectionType**: 'FirewallPolicyNatRuleCollection' (Required)
* **rules**: [FirewallPolicyRule](#firewallpolicyrule)[]: List of rules included in a rule collection.


## FirewallPolicyRuleCollectionGroupProperties
### Properties
* **priority**: int: Priority of the Firewall Policy Rule Collection Group resource.
* **provisioningState**: any | any | any | any | string (ReadOnly): The provisioning state of the firewall policy rule collection group resource.
* **ruleCollections**: [FirewallPolicyRuleCollection](#firewallpolicyrulecollection)[]: Group of Firewall Policy rule collections.

## FirewallPolicySku
### Properties
* **tier**: any | any | any | string: Tier of Firewall Policy.

## FirewallPolicySNAT
### Properties
* **privateRanges**: string[]: List of private IP addresses/IP address ranges to not be SNAT.

## FirewallPolicySQL
### Properties
* **allowSqlRedirect**: bool: A flag to indicate if SQL Redirect traffic filtering is enabled.

## FirewallPolicyThreatIntelWhitelist
### Properties
* **fqdns**: string[]: List of FQDNs for the ThreatIntel Whitelist.
* **ipAddresses**: string[]: List of IP addresses for the ThreatIntel Whitelist.

## FirewallPolicyTransportSecurity
### Properties
* **certificateAuthority**: [FirewallPolicyCertificateAuthority](#firewallpolicycertificateauthority): The CA used for intermediate CA generation.

## HubIPAddresses
### Properties
* **privateIPAddress**: string: Private IP Address associated with azure firewall.
* **publicIPs**: [HubPublicIPAddresses](#hubpublicipaddresses): Public IP addresses associated with azure firewall.

## HubPublicIPAddresses
### Properties
* **addresses**: [AzureFirewallPublicIPAddress](#azurefirewallpublicipaddress)[]: The list of Public IP addresses associated with azure firewall.
* **count**: int: The number of Public IP addresses associated with azure firewall.

## Record
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SubResource
### Properties
* **id**: string: Resource ID

