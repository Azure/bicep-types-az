# PaloAltoNetworks.Cloudngfw @ 2022-08-29

## Resource PaloAltoNetworks.Cloudngfw/firewalls@2022-08-29
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [AzureResourceManagerManagedIdentityProperties](#azureresourcemanagermanagedidentityproperties): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallDeploymentProperties](#firewalldeploymentproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'PaloAltoNetworks.Cloudngfw/firewalls' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/firewalls/statuses@2022-08-29 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallStatusProperty](#firewallstatusproperty) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PaloAltoNetworks.Cloudngfw/firewalls/statuses' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/globalRulestacks@2022-08-29
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [AzureResourceManagerManagedIdentityProperties](#azureresourcemanagermanagedidentityproperties): The managed service identities assigned to this resource.
* **location**: string (Required): Global Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RulestackProperties](#rulestackproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PaloAltoNetworks.Cloudngfw/globalRulestacks' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/globalRulestacks/certificates@2022-08-29
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateObject](#certificateobject) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PaloAltoNetworks.Cloudngfw/globalRulestacks/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/globalRulestacks/fqdnlists@2022-08-29
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FqdnObject](#fqdnobject) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PaloAltoNetworks.Cloudngfw/globalRulestacks/fqdnlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/globalRulestacks/postRules@2022-08-29
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RuleEntry](#ruleentry) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PaloAltoNetworks.Cloudngfw/globalRulestacks/postRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/globalRulestacks/prefixlists@2022-08-29
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrefixObject](#prefixobject) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PaloAltoNetworks.Cloudngfw/globalRulestacks/prefixlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/globalRulestacks/preRules@2022-08-29
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RuleEntry](#ruleentry) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PaloAltoNetworks.Cloudngfw/globalRulestacks/preRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/localRulestacks@2022-08-29
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [AzureResourceManagerManagedIdentityProperties](#azureresourcemanagermanagedidentityproperties): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RulestackProperties](#rulestackproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'PaloAltoNetworks.Cloudngfw/localRulestacks' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/localRulestacks/certificates@2022-08-29
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateObject](#certificateobject) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PaloAltoNetworks.Cloudngfw/localRulestacks/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/localRulestacks/fqdnlists@2022-08-29
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FqdnObject](#fqdnobject) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PaloAltoNetworks.Cloudngfw/localRulestacks/fqdnlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/localRulestacks/localRules@2022-08-29
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RuleEntry](#ruleentry) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PaloAltoNetworks.Cloudngfw/localRulestacks/localRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource PaloAltoNetworks.Cloudngfw/localRulestacks/prefixlists@2022-08-29
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-29' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrefixObject](#prefixobject) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PaloAltoNetworks.Cloudngfw/localRulestacks/prefixlists' (ReadOnly, DeployTimeConstant): The resource type

## Function listAppIds (PaloAltoNetworks.Cloudngfw/globalRulestacks@2022-08-29)
* **Resource**: PaloAltoNetworks.Cloudngfw/globalRulestacks
* **ApiVersion**: 2022-08-29
* **Output**: [ListAppIdResponse](#listappidresponse)

## Function listAppIds (PaloAltoNetworks.Cloudngfw/localRulestacks@2022-08-29)
* **Resource**: PaloAltoNetworks.Cloudngfw/localRulestacks
* **ApiVersion**: 2022-08-29
* **Output**: [ListAppIdResponse](#listappidresponse)

## Function listCountries (PaloAltoNetworks.Cloudngfw/globalRulestacks@2022-08-29)
* **Resource**: PaloAltoNetworks.Cloudngfw/globalRulestacks
* **ApiVersion**: 2022-08-29
* **Output**: [CountriesResponse](#countriesresponse)

## Function listCountries (PaloAltoNetworks.Cloudngfw/localRulestacks@2022-08-29)
* **Resource**: PaloAltoNetworks.Cloudngfw/localRulestacks
* **ApiVersion**: 2022-08-29
* **Output**: [CountriesResponse](#countriesresponse)

## Function listFirewalls (PaloAltoNetworks.Cloudngfw/globalRulestacks@2022-08-29)
* **Resource**: PaloAltoNetworks.Cloudngfw/globalRulestacks
* **ApiVersion**: 2022-08-29
* **Output**: [ListFirewallsResponse](#listfirewallsresponse)

## Function listFirewalls (PaloAltoNetworks.Cloudngfw/localRulestacks@2022-08-29)
* **Resource**: PaloAltoNetworks.Cloudngfw/localRulestacks
* **ApiVersion**: 2022-08-29
* **Output**: [ListFirewallsResponse](#listfirewallsresponse)

## Function listPredefinedUrlCategories (PaloAltoNetworks.Cloudngfw/globalRulestacks@2022-08-29)
* **Resource**: PaloAltoNetworks.Cloudngfw/globalRulestacks
* **ApiVersion**: 2022-08-29
* **Output**: [PredefinedUrlCategoriesResponse](#predefinedurlcategoriesresponse)

## Function listPredefinedUrlCategories (PaloAltoNetworks.Cloudngfw/localRulestacks@2022-08-29)
* **Resource**: PaloAltoNetworks.Cloudngfw/localRulestacks
* **ApiVersion**: 2022-08-29
* **Output**: [PredefinedUrlCategoriesResponse](#predefinedurlcategoriesresponse)

## AzureResourceManagerManagedIdentityProperties
### Properties
* **principalId**: string (ReadOnly): The active directory identifier of this principal.
* **tenantId**: string (ReadOnly): The Active Directory tenant id of the principal.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): The type of managed identity assigned to this resource.
* **userAssignedIdentities**: [AzureResourceManagerManagedIdentityPropertiesUserAssignedIdentities](#azureresourcemanagermanagedidentitypropertiesuserassignedidentities): The identities assigned to this resource by the user.

## AzureResourceManagerManagedIdentityPropertiesUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureResourceManagerUserAssignedIdentity](#azureresourcemanageruserassignedidentity)

## AzureResourceManagerUserAssignedIdentity
### Properties
* **clientId**: string: The active directory client identifier for this principal.
* **principalId**: string: The active directory identifier for this principal.

## Category
### Properties
* **feeds**: string[] (Required): feed list
* **urlCustom**: string[] (Required): custom URL

## CertificateObject
### Properties
* **auditComment**: string: comment for this object
* **certificateSelfSigned**: 'FALSE' | 'TRUE' | string (Required): use certificate self signed
* **certificateSignerResourceId**: string: Resource Id of certificate signer, to be populated only when certificateSelfSigned is false
* **description**: string: user description for this object
* **etag**: string: read only string representing last create or update
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## CountriesResponse
### Properties
* **nextLink**: string: next link
* **value**: [Country](#country)[] (Required): List of countries

## CountriesResponse
### Properties
* **nextLink**: string: next link
* **value**: [Country](#country)[] (Required): List of countries

## Country
### Properties
* **code**: string (Required): country code
* **description**: string: code description

## DestinationAddr
### Properties
* **cidrs**: string[]: special value 'any'
* **countries**: string[]: list of countries
* **feeds**: string[]: list of feeds
* **fqdnLists**: string[]: fqdn list
* **prefixLists**: string[]: prefix list

## DNSSettings
### Properties
* **dnsServers**: [IPAddress](#ipaddress)[]: List of IPs associated with the Firewall
* **enabledDnsType**: 'AZURE' | 'CUSTOM' | string: Enabled DNS proxy type, disabled by default
* **enableDnsProxy**: 'DISABLED' | 'ENABLED' | string: Enable DNS proxy, disabled by default

## EndpointConfiguration
### Properties
* **address**: [IPAddress](#ipaddress) (Required): Address Space
* **port**: string (Required): port ID

## FirewallDeploymentProperties
### Properties
* **associatedRulestack**: [RulestackDetails](#rulestackdetails): Associated Rulestack
* **dnsSettings**: [DNSSettings](#dnssettings) (Required): DNS settings for Firewall
* **frontEndSettings**: [FrontendSetting](#frontendsetting)[]: Frontend settings for Firewall
* **isPanoramaManaged**: 'FALSE' | 'TRUE' | string: Panorama Managed: Default is False. Default will be CloudSec managed
* **marketplaceDetails**: [MarketplaceDetails](#marketplacedetails) (Required): Marketplace details
* **networkProfile**: [NetworkProfile](#networkprofile) (Required): Network settings
* **panEtag**: string: panEtag info
* **panoramaConfig**: [PanoramaConfig](#panoramaconfig): Panorama Configuration
* **planData**: [PlanData](#plandata) (Required): Billing plan information.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## FirewallStatusProperty
### Properties
* **healthReason**: string (ReadOnly): Detail description of current health of the Firewall
* **healthStatus**: 'GREEN' | 'INITIALIZING' | 'RED' | 'YELLOW' | string (ReadOnly): Current status of the Firewall
* **isPanoramaManaged**: 'FALSE' | 'TRUE' | string (ReadOnly): Panorama Managed: Default is False. Default will be CloudSec managed
* **panoramaStatus**: [PanoramaStatus](#panoramastatus) (ReadOnly): Panorama Status
* **provisioningState**: 'Deleted' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.

## FqdnObject
### Properties
* **auditComment**: string: comment for this object
* **description**: string: fqdn object description
* **etag**: string: etag info
* **fqdnList**: string[] (Required): fqdn list
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## FrontendSetting
### Properties
* **backendConfiguration**: [EndpointConfiguration](#endpointconfiguration) (Required): Backend configurations
* **frontendConfiguration**: [EndpointConfiguration](#endpointconfiguration) (Required): Frontend configurations
* **name**: string (Required): Settings name
* **protocol**: 'TCP' | 'UDP' | string (Required): Protocol Type

## IPAddress
### Properties
* **address**: string: Address value
* **resourceId**: string: Resource Id

## IPAddressSpace
### Properties
* **addressSpace**: string: Address Space
* **resourceId**: string: Resource Id

## ListAppIdResponse
### Properties
* **nextLink**: string: next Link
* **value**: string[] (Required): List of AppIds

## ListAppIdResponse
### Properties
* **nextLink**: string: next Link
* **value**: string[] (Required): List of AppIds

## ListFirewallsResponse
### Properties
* **nextLink**: string: next link
* **value**: string[] (Required): firewalls list

## ListFirewallsResponse
### Properties
* **nextLink**: string: next link
* **value**: string[] (Required): firewalls list

## MarketplaceDetails
### Properties
* **marketplaceSubscriptionId**: string (ReadOnly): Marketplace Subscription Id
* **marketplaceSubscriptionStatus**: 'FulfillmentRequested' | 'NotStarted' | 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' | string: Marketplace Subscription Status
* **offerId**: string (Required): Offer Id
* **publisherId**: string (Required): Publisher Id

## NetworkProfile
### Properties
* **egressNatIp**: [IPAddress](#ipaddress)[]: Egress nat IP to use
* **enableEgressNat**: 'DISABLED' | 'ENABLED' | string (Required): Enable egress NAT, enabled by default
* **networkType**: 'VNET' | 'VWAN' | string (Required): vnet or vwan, cannot be updated
* **publicIps**: [IPAddress](#ipaddress)[] (Required): List of IPs associated with the Firewall
* **vnetConfiguration**: [VnetConfiguration](#vnetconfiguration): Vnet configurations
* **vwanConfiguration**: [VwanConfiguration](#vwanconfiguration): Vwan configurations

## PanoramaConfig
### Properties
* **cgName**: string (ReadOnly): Panorama Collector Group to join - (Once configured we can not edit the value)
* **configString**: string (Required): Base64 encoded string representing Panorama parameters to be used by Firewall to connect to Panorama. This string is generated via azure plugin in Panorama
* **dgName**: string (ReadOnly): Panorama Device Group to join
* **hostName**: string (ReadOnly): Resource name(may be unique) for PN admin
* **panoramaServer**: string (ReadOnly): Primary Panorama Server IP address value in dotted format for IPv4
* **panoramaServer2**: string (ReadOnly): Secondary Panorama Server IP address value in dotted format for IPv4
* **tplName**: string (ReadOnly): Panorama Template Stack to join - (Once configured we can not edit the value)
* **vmAuthKey**: string (ReadOnly): VM auth key for panorama connectivity

## PanoramaStatus
### Properties
* **panoramaServer2Status**: 'DOWN' | 'UP' | string (ReadOnly): Secondary Panorama connection status
* **panoramaServerStatus**: 'DOWN' | 'UP' | string (ReadOnly): Primary Panorama connection status

## PlanData
### Properties
* **billingCycle**: 'MONTHLY' | 'WEEKLY' | string (Required): different billing cycles like MONTHLY/WEEKLY
* **effectiveDate**: string (ReadOnly): date when plan was applied
* **planId**: string (Required): plan id as published by Liftr.PAN
* **usageType**: 'COMMITTED' | 'PAYG' | string: different usage type like PAYG/COMMITTED

## PredefinedUrlCategoriesResponse
### Properties
* **nextLink**: string: next link
* **value**: [PredefinedUrlCategory](#predefinedurlcategory)[] (Required): predefined url categories

## PredefinedUrlCategoriesResponse
### Properties
* **nextLink**: string: next link
* **value**: [PredefinedUrlCategory](#predefinedurlcategory)[] (Required): predefined url categories

## PredefinedUrlCategory
### Properties
* **action**: string (Required)
* **name**: string (Required)

## PrefixObject
### Properties
* **auditComment**: string: comment for this object
* **description**: string: prefix description
* **etag**: string: etag info
* **prefixList**: string[] (Required): prefix list
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## RuleEntry
### Properties
* **actionType**: 'Allow' | 'DenyResetBoth' | 'DenyResetServer' | 'DenySilent' | string: rule action
* **applications**: string[]: array of rule applications
* **auditComment**: string: rule comment
* **category**: [Category](#category): rule category
* **decryptionRuleType**: 'None' | 'SSLInboundInspection' | 'SSLOutboundInspection' | string: enable or disable decryption
* **description**: string: rule description
* **destination**: [DestinationAddr](#destinationaddr): destination address
* **enableLogging**: 'DISABLED' | 'ENABLED' | string: enable or disable logging
* **etag**: string: etag info
* **inboundInspectionCertificate**: string: inbound Inspection Certificate
* **negateDestination**: 'FALSE' | 'TRUE' | string: cidr should not be 'any'
* **negateSource**: 'FALSE' | 'TRUE' | string: cidr should not be 'any'
* **priority**: int (ReadOnly)
* **protocol**: string: any, application-default, TCP:number, UDP:number
* **protocolPortList**: string[]: prot port list
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **ruleName**: string (Required): rule name
* **ruleState**: 'DISABLED' | 'ENABLED' | string: state of this rule
* **source**: [SourceAddr](#sourceaddr): source address
* **tags**: [TagInfo](#taginfo)[]: tag for rule

## RulestackDetails
### Properties
* **location**: string: Rulestack location
* **resourceId**: string: Resource Id
* **rulestackId**: string: Associated rulestack Id

## RulestackProperties
### Properties
* **associatedSubscriptions**: string[]: subscription scope of global rulestack
* **defaultMode**: 'FIREWALL' | 'IPS' | 'NONE' | string: Mode for default rules creation
* **description**: string: rulestack description
* **minAppIdVersion**: string: minimum version
* **panEtag**: string: PanEtag info
* **panLocation**: string: Rulestack Location, Required for GlobalRulestacks, Not for LocalRulestacks
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **scope**: 'GLOBAL' | 'LOCAL' | string: Rulestack Type
* **securityServices**: [SecurityServices](#securityservices): Security Profile

## SecurityServices
### Properties
* **antiSpywareProfile**: string: Anti spyware Profile data
* **antiVirusProfile**: string: anti virus profile data
* **dnsSubscription**: string: DNS Subscription profile data
* **fileBlockingProfile**: string: File blocking profile data
* **outboundTrustCertificate**: string: Trusted Egress Decryption profile data
* **outboundUnTrustCertificate**: string: Untrusted Egress Decryption profile data
* **urlFilteringProfile**: string: URL filtering profile data
* **vulnerabilityProfile**: string: IPs Vulnerability Profile Data

## SourceAddr
### Properties
* **cidrs**: string[]: special value 'any'
* **countries**: string[]: list of countries
* **feeds**: string[]: list of feeds
* **prefixLists**: string[]: prefix list

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TagInfo
### Properties
* **key**: string (Required): tag name
* **value**: string (Required): tag value

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VnetConfiguration
### Properties
* **ipOfTrustSubnetForUdr**: [IPAddress](#ipaddress): IP of trust subnet for UDR
* **trustSubnet**: [IPAddressSpace](#ipaddressspace) (Required): Trust Subnet
* **unTrustSubnet**: [IPAddressSpace](#ipaddressspace) (Required): Untrust Subnet
* **vnet**: [IPAddressSpace](#ipaddressspace) (Required): Azure Virtual Network

## VwanConfiguration
### Properties
* **ipOfTrustSubnetForUdr**: [IPAddress](#ipaddress): IP of trust subnet for UDR
* **networkVirtualApplianceId**: string: Network Virtual Appliance resource ID
* **trustSubnet**: [IPAddressSpace](#ipaddressspace): Trust Subnet
* **unTrustSubnet**: [IPAddressSpace](#ipaddressspace): Untrust Subnet
* **vHub**: [IPAddressSpace](#ipaddressspace) (Required): vHub Address

