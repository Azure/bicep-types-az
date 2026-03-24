// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;
using Azure.ResourceManager;

@armProviderNamespace
@service(#{
  title: "Microsoft.Network",
})
@doc("Microsoft.Network firewall spec")
namespace Microsoft.Network;

/** API Versions */
enum Versions {
  @doc("2021-08-01")
  `2021-08-01`,
}

// ---- Enums ----

@doc("The operation mode for Threat Intel")
union AzureFirewallThreatIntelMode {
  string,
  @doc("Alert mode")
  Alert: "Alert",
  @doc("Deny mode")
  Deny: "Deny",
  @doc("Off mode")
  Off: "Off",
}

@doc("The action type of a rule")
union AzureFirewallRCActionType {
  string,
  @doc("Allow action")
  Allow: "Allow",
  @doc("Deny action")
  Deny: "Deny",
}

@doc("The action type for NAT")
union AzureFirewallNatRCActionType {
  string,
  @doc("SNAT action")
  Snat: "Snat",
  @doc("DNAT action")
  Dnat: "Dnat",
}

@doc("The protocol for a network rule")
union AzureFirewallNetworkRuleProtocol {
  string,
  @doc("TCP protocol")
  TCP: "TCP",
  @doc("UDP protocol")
  UDP: "UDP",
  @doc("Any protocol")
  Any: "Any",
  @doc("ICMP protocol")
  ICMP: "ICMP",
}

@doc("The protocol type for application rules")
union AzureFirewallApplicationRuleProtocolType {
  string,
  @doc("HTTP protocol")
  Http: "Http",
  @doc("HTTPS protocol")
  Https: "Https",
  @doc("MSSQL protocol")
  Mssql: "Mssql",
}

@doc("The SKU name of an Azure Firewall")
union AzureFirewallSkuName {
  string,
  @doc("VNet SKU")
  AZFW_VNet: "AZFW_VNet",
  @doc("Hub SKU")
  AZFW_Hub: "AZFW_Hub",
}

@doc("The SKU tier of an Azure Firewall")
union AzureFirewallSkuTier {
  string,
  @doc("Standard tier")
  Standard: "Standard",
  @doc("Premium tier")
  Premium: "Premium",
  @doc("Basic tier")
  Basic: "Basic",
}

@doc("Firewall policy SKU tier")
union FirewallPolicySkuTier {
  string,
  @doc("Standard tier")
  Standard: "Standard",
  @doc("Premium tier")
  Premium: "Premium",
  @doc("Basic tier")
  Basic: "Basic",
}

@doc("Firewall policy filter rule collection action type")
union FirewallPolicyFilterRuleCollectionActionType {
  string,
  @doc("Allow action")
  Allow: "Allow",
  @doc("Deny action")
  Deny: "Deny",
}

@doc("Firewall policy NAT rule collection action type")
union FirewallPolicyNatRuleCollectionActionType {
  string,
  @doc("DNAT action")
  DNAT: "DNAT",
}

@doc("Firewall policy rule network protocol")
union FirewallPolicyRuleNetworkProtocol {
  string,
  @doc("TCP protocol")
  TCP: "TCP",
  @doc("UDP protocol")
  UDP: "UDP",
  @doc("Any protocol")
  Any: "Any",
  @doc("ICMP protocol")
  ICMP: "ICMP",
}

@doc("Firewall policy intrusion detection mode")
union FirewallPolicyIntrusionDetectionStateType {
  string,
  @doc("Off mode")
  Off: "Off",
  @doc("Alert mode")
  Alert: "Alert",
  @doc("Deny mode")
  Deny: "Deny",
}

@doc("Provisioning state values")
union ProvisioningState {
  string,
  @doc("Succeeded")
  Succeeded: "Succeeded",
  @doc("Updating")
  Updating: "Updating",
  @doc("Deleting")
  Deleting: "Deleting",
  @doc("Failed")
  Failed: "Failed",
}

// ---- Shared models ----

@doc("Reference to another subresource")
model SubResource {
  @doc("Resource ID")
  id?: string;
}

@doc("The SKU of an Azure Firewall")
model AzureFirewallSku {
  @doc("Name of an Azure Firewall SKU")
  name?: AzureFirewallSkuName;

  @doc("Tier of an Azure Firewall")
  tier?: AzureFirewallSkuTier;
}

// ---- Azure Firewall Resource ----

@doc("Azure Firewall resource.")
model AzureFirewall is TrackedResource<AzureFirewallPropertiesFormat> {
  @doc("The name of the Azure Firewall.")
  @key("azureFirewallName")
  @segment("azureFirewalls")
  @path
  name: string;

  @doc("A list of availability zones denoting where the resource needs to come from.")
  zones?: string[];
}

@doc("Properties of the Azure Firewall.")
model AzureFirewallPropertiesFormat {
  @doc("Collection of application rule collections used by Azure Firewall.")
  applicationRuleCollections?: AzureFirewallApplicationRuleCollection[];

  @doc("Collection of NAT rule collections used by Azure Firewall.")
  natRuleCollections?: AzureFirewallNatRuleCollection[];

  @doc("Collection of network rule collections used by Azure Firewall.")
  networkRuleCollections?: AzureFirewallNetworkRuleCollection[];

  @doc("IP configuration of the Azure Firewall resource.")
  ipConfigurations?: AzureFirewallIPConfiguration[];

  @doc("IP configuration of the Azure Firewall used for management traffic.")
  managementIpConfiguration?: AzureFirewallIPConfiguration;

  @visibility(Lifecycle.Read)
  @doc("The provisioning state of the Azure Firewall resource.")
  provisioningState?: ProvisioningState;

  @doc("The operation mode for Threat Intelligence.")
  threatIntelMode?: AzureFirewallThreatIntelMode;

  @doc("The virtualHub to which the firewall belongs.")
  virtualHub?: SubResource;

  @doc("The firewallPolicy associated with this azure firewall.")
  firewallPolicy?: SubResource;

  @doc("IP addresses associated with AzureFirewall.")
  hubIPAddresses?: HubIPAddresses;

  @visibility(Lifecycle.Read)
  @doc("IpGroups associated with AzureFirewall.")
  ipGroups?: AzureFirewallIpGroups[];

  @doc("The Azure Firewall Resource SKU.")
  sku?: AzureFirewallSku;

  @doc("A key-value pair of additional properties.")
  additionalProperties?: Record<string>;
}

@doc("Hub IP addresses")
model HubIPAddresses {
  @doc("Public IP addresses associated with azure firewall.")
  publicIPs?: HubPublicIPAddresses;

  @doc("Private IP Address associated with azure firewall.")
  privateIPAddress?: string;
}

@doc("Hub public IP addresses")
model HubPublicIPAddresses {
  @doc("The list of Public IP addresses associated with azure firewall.")
  addresses?: AzureFirewallPublicIPAddress[];

  @doc("The number of Public IP addresses associated with azure firewall.")
  count?: int32;
}

@doc("Public IP address associated with azure firewall")
model AzureFirewallPublicIPAddress {
  @doc("Public IP Address value.")
  address?: string;
}

@doc("IpGroups associated with azure firewall")
model AzureFirewallIpGroups {
  @visibility(Lifecycle.Read)
  @doc("Resource ID.")
  id?: string;

  @visibility(Lifecycle.Read)
  @doc("The Provisioning state of the IpGroup resource.")
  changeNumber?: string;
}

@doc("Azure Firewall IP Configuration")
model AzureFirewallIPConfiguration {
  @doc("Name of the resource.")
  name?: string;

  @visibility(Lifecycle.Read)
  @doc("A unique read-only string that changes whenever the resource is updated.")
  etag?: string;

  @doc("Properties of the azure firewall IP configuration.")
  properties?: AzureFirewallIPConfigurationPropertiesFormat;
}

@doc("Properties of the Azure Firewall IP configuration.")
model AzureFirewallIPConfigurationPropertiesFormat {
  @visibility(Lifecycle.Read)
  @doc("The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes.")
  privateIPAddress?: string;

  @doc("Reference of the subnet resource.")
  subnet?: SubResource;

  @doc("Reference of the PublicIP resource.")
  publicIPAddress?: SubResource;

  @visibility(Lifecycle.Read)
  @doc("The provisioning state of the Azure Firewall IP configuration resource.")
  provisioningState?: ProvisioningState;
}

// ---- Application Rule Collection ----

@doc("Application rule collection resource.")
model AzureFirewallApplicationRuleCollection {
  @doc("Name of the resource.")
  name?: string;

  @doc("Properties of the azure firewall application rule collection.")
  properties?: AzureFirewallApplicationRuleCollectionPropertiesFormat;
}

@doc("Properties of the application rule collection.")
model AzureFirewallApplicationRuleCollectionPropertiesFormat {
  @doc("Priority of the application rule collection resource.")
  @minValue(100)
  @maxValue(65000)
  priority?: int32;

  @doc("The action type of a rule collection.")
  action?: AzureFirewallRCAction;

  @doc("Collection of rules used by a application rule collection.")
  rules?: AzureFirewallApplicationRule[];

  @visibility(Lifecycle.Read)
  @doc("The provisioning state of the application rule collection resource.")
  provisioningState?: ProvisioningState;
}

@doc("The action for a rule collection.")
model AzureFirewallRCAction {
  @doc("The type of action.")
  type?: AzureFirewallRCActionType;
}

@doc("Properties of an application rule.")
model AzureFirewallApplicationRule {
  @doc("Name of the application rule.")
  name?: string;

  @doc("Description of the rule.")
  description?: string;

  @doc("List of source IP addresses for this rule.")
  sourceAddresses?: string[];

  @doc("Array of ApplicationRuleProtocols.")
  protocols?: AzureFirewallApplicationRuleProtocol[];

  @doc("List of FQDNs for this rule.")
  targetFqdns?: string[];

  @doc("List of FQDN Tags for this rule.")
  fqdnTags?: string[];

  @doc("List of source IpGroups for this rule.")
  sourceIpGroups?: string[];
}

@doc("Properties of the application rule protocol.")
model AzureFirewallApplicationRuleProtocol {
  @doc("Protocol type.")
  protocolType?: AzureFirewallApplicationRuleProtocolType;

  @doc("Port number for the protocol, cannot be greater than 64000.")
  @minValue(0)
  @maxValue(64000)
  port?: int32;
}

// ---- NAT Rule Collection ----

@doc("NAT rule collection resource.")
model AzureFirewallNatRuleCollection {
  @doc("Name of the resource.")
  name?: string;

  @doc("Properties of the azure firewall NAT rule collection.")
  properties?: AzureFirewallNatRuleCollectionProperties;
}

@doc("Properties of the NAT rule collection.")
model AzureFirewallNatRuleCollectionProperties {
  @doc("Priority of the NAT rule collection resource.")
  @minValue(100)
  @maxValue(65000)
  priority?: int32;

  @doc("The action type of a NAT rule collection.")
  action?: AzureFirewallNatRCAction;

  @doc("Collection of rules used by a NAT rule collection.")
  rules?: AzureFirewallNatRule[];

  @visibility(Lifecycle.Read)
  @doc("The provisioning state of the NAT rule collection resource.")
  provisioningState?: ProvisioningState;
}

@doc("AzureFirewall NAT Rule Collection Action.")
model AzureFirewallNatRCAction {
  @doc("The type of action.")
  type?: AzureFirewallNatRCActionType;
}

@doc("Properties of a NAT rule.")
model AzureFirewallNatRule {
  @doc("Name of the NAT rule.")
  name?: string;

  @doc("Description of the rule.")
  description?: string;

  @doc("List of source IP addresses for this rule.")
  sourceAddresses?: string[];

  @doc("List of destination IP addresses for this rule.")
  destinationAddresses?: string[];

  @doc("List of destination ports.")
  destinationPorts?: string[];

  @doc("Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.")
  protocols?: AzureFirewallNetworkRuleProtocol[];

  @doc("The translated address for this NAT rule.")
  translatedAddress?: string;

  @doc("The translated port for this NAT rule.")
  translatedPort?: string;

  @doc("The translated FQDN for this NAT rule.")
  translatedFqdn?: string;

  @doc("List of source IpGroups for this rule.")
  sourceIpGroups?: string[];
}

// ---- Network Rule Collection ----

@doc("Network rule collection resource.")
model AzureFirewallNetworkRuleCollection {
  @doc("Name of the resource.")
  name?: string;

  @doc("Properties of the azure firewall network rule collection.")
  properties?: AzureFirewallNetworkRuleCollectionPropertiesFormat;
}

@doc("Properties of the network rule collection.")
model AzureFirewallNetworkRuleCollectionPropertiesFormat {
  @doc("Priority of the network rule collection resource.")
  @minValue(100)
  @maxValue(65000)
  priority?: int32;

  @doc("The action type of a rule collection.")
  action?: AzureFirewallRCAction;

  @doc("Collection of rules used by a network rule collection.")
  rules?: AzureFirewallNetworkRule[];

  @visibility(Lifecycle.Read)
  @doc("The provisioning state of the network rule collection resource.")
  provisioningState?: ProvisioningState;
}

@doc("Properties of the network rule.")
model AzureFirewallNetworkRule {
  @doc("Name of the network rule.")
  name?: string;

  @doc("Description of the rule.")
  description?: string;

  @doc("Array of AzureFirewallNetworkRuleProtocols.")
  protocols?: AzureFirewallNetworkRuleProtocol[];

  @doc("List of source IP addresses for this rule.")
  sourceAddresses?: string[];

  @doc("List of destination IP addresses.")
  destinationAddresses?: string[];

  @doc("List of destination ports.")
  destinationPorts?: string[];

  @doc("List of destination FQDNs.")
  destinationFqdns?: string[];

  @doc("List of source IpGroups for this rule.")
  sourceIpGroups?: string[];

  @doc("List of destination IpGroups for this rule.")
  destinationIpGroups?: string[];
}

// ---- Firewall Policy Resource ----

@doc("FirewallPolicy Resource.")
model FirewallPolicy is TrackedResource<FirewallPolicyPropertiesFormat> {
  @doc("The name of the Firewall Policy.")
  @key("firewallPolicyName")
  @segment("firewallPolicies")
  @path
  name: string;
}

@doc("Firewall Policy definition.")
model FirewallPolicyPropertiesFormat {
  @visibility(Lifecycle.Read)
  @doc("List of references to FirewallPolicyRuleCollectionGroups.")
  ruleCollectionGroups?: SubResource[];

  @visibility(Lifecycle.Read)
  @doc("The provisioning state of the firewall policy resource.")
  provisioningState?: ProvisioningState;

  @doc("The parent firewall policy from which rules are inherited.")
  basePolicy?: SubResource;

  @visibility(Lifecycle.Read)
  @doc("List of references to Azure Firewalls that this Firewall Policy is associated with.")
  firewalls?: SubResource[];

  @visibility(Lifecycle.Read)
  @doc("List of references to Child Firewall Policies.")
  childPolicies?: SubResource[];

  @doc("The operation mode for Threat Intelligence.")
  threatIntelMode?: AzureFirewallThreatIntelMode;

  @doc("ThreatIntel Whitelist for Firewall Policy.")
  threatIntelWhitelist?: FirewallPolicyThreatIntelWhitelist;

  @doc("Insights on Firewall Policy.")
  insights?: FirewallPolicyInsights;

  @doc("The private IP addresses/IP ranges to which traffic will not be SNAT.")
  snat?: FirewallPolicySNAT;

  @doc("SQL Settings definition.")
  sql?: FirewallPolicySQL;

  @doc("DNS Proxy Settings definition.")
  dnsSettings?: DnsSettings;

  @doc("Explicit Proxy Settings definition.")
  explicitProxySettings?: ExplicitProxySettings;

  @doc("The configuration for Intrusion detection.")
  intrusionDetection?: FirewallPolicyIntrusionDetection;

  @doc("TLS Configuration definition.")
  transportSecurity?: FirewallPolicyTransportSecurity;

  @doc("The Firewall Policy SKU.")
  sku?: FirewallPolicySku;
}

@doc("ThreatIntel Whitelist for Firewall Policy.")
model FirewallPolicyThreatIntelWhitelist {
  @doc("List of IP addresses for the ThreatIntel Whitelist.")
  ipAddresses?: string[];

  @doc("List of FQDNs for the ThreatIntel Whitelist.")
  fqdns?: string[];
}

@doc("Firewall Policy Insights.")
model FirewallPolicyInsights {
  @doc("A flag to indicate if the insights are enabled on the policy.")
  isEnabled?: boolean;

  @doc("Number of days the insights should be enabled on the policy.")
  retentionDays?: int32;

  @doc("Workspaces needed to configure the Firewall Policy Insights.")
  logAnalyticsResources?: FirewallPolicyLogAnalyticsResources;
}

@doc("Log Analytics Resources for Firewall Policy Insights.")
model FirewallPolicyLogAnalyticsResources {
  @doc("List of workspaces for Firewall Policy Insights.")
  workspaces?: FirewallPolicyLogAnalyticsWorkspace[];

  @doc("The default workspace Id for Firewall Policy Insights.")
  defaultWorkspaceId?: SubResource;
}

@doc("Log Analytics workspace for Firewall Policy Insights.")
model FirewallPolicyLogAnalyticsWorkspace {
  @doc("Region to configure the Workspace.")
  region?: string;

  @doc("The workspace Id for Firewall Policy Insights.")
  workspaceId?: SubResource;
}

@doc("The private IP addresses/IP ranges to which traffic will not be SNAT.")
model FirewallPolicySNAT {
  @doc("List of private IP addresses/IP address ranges to not be SNAT.")
  privateRanges?: string[];
}

@doc("SQL Settings in Firewall Policy.")
model FirewallPolicySQL {
  @doc("A flag to indicate if SQL Redirect traffic filtering is enabled.")
  allowSqlRedirect?: boolean;
}

@doc("DNS Proxy Settings in Firewall Policy.")
model DnsSettings {
  @doc("List of Custom DNS Servers.")
  servers?: string[];

  @doc("Enable DNS Proxy on Firewalls attached to the Firewall Policy.")
  enableProxy?: boolean;

  @doc("FQDNs in Network Rules are supported when set to true.")
  requireProxyForNetworkRules?: boolean;
}

@doc("Explicit Proxy Settings in Firewall Policy.")
model ExplicitProxySettings {
  @doc("When set to true, explicit proxy mode is enabled.")
  enableExplicitProxy?: boolean;

  @doc("Port number for explicit proxy http protocol, cannot be greater than 64000.")
  httpPort?: int32;

  @doc("Port number for explicit proxy https protocol, cannot be greater than 64000.")
  httpsPort?: int32;

  @doc("Port number for explicit proxy pac file.")
  pacFilePort?: int32;

  @doc("SAS URL for PAC file.")
  pacFile?: string;
}

@doc("Configuration for intrusion detection mode and rules.")
model FirewallPolicyIntrusionDetection {
  @doc("Intrusion detection general state.")
  mode?: FirewallPolicyIntrusionDetectionStateType;

  @doc("Intrusion detection configuration properties.")
  configuration?: FirewallPolicyIntrusionDetectionConfiguration;
}

@doc("The operation for configuring intrusion detection.")
model FirewallPolicyIntrusionDetectionConfiguration {
  @doc("List of specific signatures states.")
  signatureOverrides?: FirewallPolicyIntrusionDetectionSignatureSpecification[];

  @doc("List of rules for traffic to bypass.")
  bypassTrafficSettings?: FirewallPolicyIntrusionDetectionBypassTrafficSpecifications[];

  @doc("IDPS Private IP address ranges are used to identify traffic direction.")
  privateRanges?: string[];
}

@doc("Intrusion detection signatures specification states.")
model FirewallPolicyIntrusionDetectionSignatureSpecification {
  @doc("Signature id.")
  id?: string;

  @doc("The signature state.")
  mode?: FirewallPolicyIntrusionDetectionStateType;
}

@doc("Intrusion detection bypass traffic specification.")
model FirewallPolicyIntrusionDetectionBypassTrafficSpecifications {
  @doc("Name of the bypass traffic rule.")
  name?: string;

  @doc("Description of the bypass traffic rule.")
  description?: string;

  @doc("The rule bypass protocol.")
  protocol?: string;

  @doc("List of source addresses or ranges for this rule.")
  sourceAddresses?: string[];

  @doc("List of destination addresses or ranges for this rule.")
  destinationAddresses?: string[];

  @doc("List of destination ports or ranges.")
  destinationPorts?: string[];

  @doc("List of source IpGroups for this rule.")
  sourceIpGroups?: string[];

  @doc("List of destination IpGroups for this rule.")
  destinationIpGroups?: string[];
}

@doc("Configuration needed to perform TLS termination & initiation.")
model FirewallPolicyTransportSecurity {
  @doc("The CA used for intermediate CA generation.")
  certificateAuthority?: FirewallPolicyCertificateAuthority;
}

@doc("Trusted Root certificates properties for tls.")
model FirewallPolicyCertificateAuthority {
  @doc("Secret Id of (base-64 encoded unencrypted pfx) Secret or Certificate object stored in KeyVault.")
  keyVaultSecretId?: string;

  @doc("Name of the CA certificate.")
  name?: string;
}

@doc("SKU of Firewall policy.")
model FirewallPolicySku {
  @doc("Tier of Firewall Policy.")
  tier?: FirewallPolicySkuTier;
}

// ---- Firewall Policy Rule Collection Group ----

@doc("Rule Collection Group resource.")
@parentResource(FirewallPolicy)
model FirewallPolicyRuleCollectionGroup
  is ProxyResource<FirewallPolicyRuleCollectionGroupProperties> {
  @doc("The name of the FirewallPolicyRuleCollectionGroup.")
  @key("ruleCollectionGroupName")
  @segment("ruleCollectionGroups")
  @path
  name: string;
}

@doc("Properties of the rule collection group.")
model FirewallPolicyRuleCollectionGroupProperties {
  @doc("Priority of the Firewall Policy Rule Collection Group resource.")
  @minValue(100)
  @maxValue(65000)
  priority?: int32;

  @doc("Group of Firewall Policy rule collections.")
  ruleCollections?: FirewallPolicyRuleCollection[];

  @visibility(Lifecycle.Read)
  @doc("The provisioning state of the firewall policy rule collection group resource.")
  provisioningState?: ProvisioningState;
}

// ---- Rule Collections (Discriminated) ----

@discriminator("ruleCollectionType")
@doc("Properties of the rule collection.")
model FirewallPolicyRuleCollection {
  @doc("The name of the rule collection.")
  name?: string;

  @doc("Priority of the Firewall Policy Rule Collection resource.")
  @minValue(100)
  @maxValue(65000)
  priority?: int32;
}

@doc("Firewall Policy NAT Rule Collection.")
model FirewallPolicyNatRuleCollection extends FirewallPolicyRuleCollection {
  @doc("The type of rule collection.")
  ruleCollectionType: "FirewallPolicyNatRuleCollection";

  @doc("The action type of a Nat rule collection.")
  action?: FirewallPolicyNatRuleCollectionAction;

  @doc("List of rules included in a rule collection.")
  rules?: FirewallPolicyRule[];
}

@doc("Firewall Policy Filter Rule Collection.")
model FirewallPolicyFilterRuleCollection extends FirewallPolicyRuleCollection {
  @doc("The type of rule collection.")
  ruleCollectionType: "FirewallPolicyFilterRuleCollection";

  @doc("The action type of a Filter rule collection.")
  action?: FirewallPolicyFilterRuleCollectionAction;

  @doc("List of rules included in a rule collection.")
  rules?: FirewallPolicyRule[];
}

@doc("Properties of the FirewallPolicyNatRuleCollectionAction.")
model FirewallPolicyNatRuleCollectionAction {
  @doc("The type of action.")
  type?: FirewallPolicyNatRuleCollectionActionType;
}

@doc("Properties of the FirewallPolicyFilterRuleCollectionAction.")
model FirewallPolicyFilterRuleCollectionAction {
  @doc("The type of action.")
  type?: FirewallPolicyFilterRuleCollectionActionType;
}

// ---- Rules (Discriminated) ----

@discriminator("ruleType")
@doc("Properties of a rule.")
model FirewallPolicyRule {
  @doc("Name of the rule.")
  name?: string;

  @doc("Description of the rule.")
  description?: string;
}

@doc("Rule of type application.")
model ApplicationRule extends FirewallPolicyRule {
  @doc("Rule type.")
  ruleType: "ApplicationRule";

  @doc("List of source IP addresses for this rule.")
  sourceAddresses?: string[];

  @doc("List of destination addresses for this rule.")
  destinationAddresses?: string[];

  @doc("Array of Application Protocols.")
  protocols?: FirewallPolicyRuleApplicationProtocol[];

  @doc("List of FQDNs for this rule.")
  targetFqdns?: string[];

  @doc("List of Urls for this rule condition.")
  targetUrls?: string[];

  @doc("List of FQDN Tags for this rule.")
  fqdnTags?: string[];

  @doc("List of source IpGroups for this rule.")
  sourceIpGroups?: string[];

  @doc("Terminate TLS connections for this rule.")
  terminateTLS?: boolean;

  @doc("List of destination azure web categories.")
  webCategories?: string[];
}

@doc("Rule of type nat.")
model NatRule extends FirewallPolicyRule {
  @doc("Rule type.")
  ruleType: "NatRule";

  @doc("Array of FirewallPolicyRuleNetworkProtocols.")
  ipProtocols?: FirewallPolicyRuleNetworkProtocol[];

  @doc("List of source IP addresses for this rule.")
  sourceAddresses?: string[];

  @doc("List of destination IP addresses or Service Tags.")
  destinationAddresses?: string[];

  @doc("List of destination ports.")
  destinationPorts?: string[];

  @doc("The translated address for this NAT rule.")
  translatedAddress?: string;

  @doc("The translated port for this NAT rule.")
  translatedPort?: string;

  @doc("List of source IpGroups for this rule.")
  sourceIpGroups?: string[];

  @doc("The translated FQDN for this NAT rule.")
  translatedFqdn?: string;
}

@doc("Rule of type network.")
model NetworkRule extends FirewallPolicyRule {
  @doc("Rule type.")
  ruleType: "NetworkRule";

  @doc("Array of FirewallPolicyRuleNetworkProtocols.")
  ipProtocols?: FirewallPolicyRuleNetworkProtocol[];

  @doc("List of source IP addresses for this rule.")
  sourceAddresses?: string[];

  @doc("List of destination IP addresses or Service Tags.")
  destinationAddresses?: string[];

  @doc("List of destination ports.")
  destinationPorts?: string[];

  @doc("List of source IpGroups for this rule.")
  sourceIpGroups?: string[];

  @doc("List of destination IpGroups for this rule.")
  destinationIpGroups?: string[];

  @doc("List of destination FQDNs.")
  destinationFqdns?: string[];
}

@doc("Properties of the application rule protocol.")
model FirewallPolicyRuleApplicationProtocol {
  @doc("Protocol type.")
  protocolType?: AzureFirewallApplicationRuleProtocolType;

  @doc("Port number for the protocol, cannot be greater than 64000.")
  @minValue(0)
  @maxValue(64000)
  port?: int32;
}

// ---- ARM Operations ----

interface Operations extends Azure.ResourceManager.Operations {}

@armResourceOperations
interface AzureFirewallOperations {
  get is ArmResourceRead<AzureFirewall>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<AzureFirewall>;
}

@armResourceOperations
interface FirewallPolicyOperations {
  get is ArmResourceRead<FirewallPolicy>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<FirewallPolicy>;
}

@armResourceOperations
interface FirewallPolicyRuleCollectionGroupOperations {
  get is ArmResourceRead<FirewallPolicyRuleCollectionGroup>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<FirewallPolicyRuleCollectionGroup>;
}
