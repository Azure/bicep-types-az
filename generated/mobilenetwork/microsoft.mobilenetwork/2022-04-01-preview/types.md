# Microsoft.MobileNetwork @ 2022-04-01-preview

## Resource Microsoft.MobileNetwork/mobileNetworks@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MobileNetworkPropertiesFormat](#mobilenetworkpropertiesformat) (Required): Mobile network properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/mobileNetworks/dataNetworks@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataNetworkPropertiesFormat](#datanetworkpropertiesformat): Data network properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks/dataNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/mobileNetworks/services@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServicePropertiesFormat](#servicepropertiesformat) (Required): Service Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/mobileNetworks/simPolicies@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SimPolicyPropertiesFormat](#simpolicypropertiesformat) (Required): SIM policy Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks/simPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/mobileNetworks/sites@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SitePropertiesFormat](#sitepropertiesformat): Site properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks/sites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/mobileNetworks/slices@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SlicePropertiesFormat](#slicepropertiesformat) (Required): Slice properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks/slices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlanes@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity used to retrieve the ingress certificate from Azure key vault.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCoreControlPlanePropertiesFormat](#packetcorecontrolplanepropertiesformat) (Required): Packet core control plane Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlanes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCoreDataPlanePropertiesFormat](#packetcoredataplanepropertiesformat) (Required): Packet core data plane Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttachedDataNetworkPropertiesFormat](#attacheddatanetworkpropertiesformat) (Required): Data network properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlaneVersions@2022-04-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCoreControlPlaneVersionPropertiesFormat](#packetcorecontrolplaneversionpropertiesformat) (ReadOnly): Packet core control plane version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlaneVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/simGroups@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity used to retrieve the encryption key from Azure key vault.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SimGroupPropertiesFormat](#simgrouppropertiesformat) (Required): SIM group Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/simGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/simGroups/sims@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SimPropertiesFormat](#simpropertiesformat) (Required): SIM Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MobileNetwork/simGroups/sims' (ReadOnly, DeployTimeConstant): The resource type

## Function listSimIds (Microsoft.MobileNetwork/mobileNetworks@2022-04-01-preview)
* **Resource**: Microsoft.MobileNetwork/mobileNetworks
* **ApiVersion**: 2022-04-01-preview
* **Output**: [SimIdListResult](#simidlistresult)

## Ambr
### Properties
* **downlink**: string (Required): Downlink bit rate.
* **uplink**: string (Required): Uplink bit rate.

## AttachedDataNetworkPropertiesFormat
### Properties
* **dnsAddresses**: string[]: The DNS servers to signal to UEs to use for this attached data network.
* **naptConfiguration**: [NaptConfiguration](#naptconfiguration): The network address and port translation (NAPT) configuration.
If this is not specified, the attached data network will use a default NAPT configuration with NAPT enabled.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the attached data network resource.
* **userEquipmentAddressPoolPrefix**: string[]: The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will dynamically assign IP addresses to UEs.
The packet core instance assigns an IP address to a UE when the UE sets up a PDU session.
 You must define at least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix. If you define both, they must be of the same size.
* **userEquipmentStaticAddressPoolPrefix**: string[]: The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will assign static IP addresses to UEs.
The packet core instance assigns an IP address to a UE when the UE sets up a PDU session. The static IP address for a specific UE is set in StaticIPConfiguration on the corresponding SIM resource.
At least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix must be defined. If both are defined, they must be of the same size.
* **userPlaneDataInterface**: [InterfaceProperties](#interfaceproperties) (Required): The user plane interface on the data network. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface.

## AttachedDataNetworkResourceId
### Properties
* **id**: string (Required): Attached data network resource ID.

## AzureStackEdgeDeviceResourceId
### Properties
* **id**: string (Required): Azure Stack Edge device resource ID.

## ConnectedClusterResourceId
### Properties
* **id**: string (Required): Azure Arc connected cluster resource ID.

## CustomLocationResourceId
### Properties
* **id**: string (Required): Azure Arc custom location resource ID.

## DataNetworkConfiguration
### Properties
* **5qi**: int: Default QoS Flow 5G QoS Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. This must not be a standardized 5QI value corresponding to a GBR (guaranteed bit rate) QoS Flow. The illegal GBR 5QI values are: 1, 2, 3, 4, 65, 66, 67, 71, 72, 73, 74, 75, 76, 82, 83, 84, and 85. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition of which are the GBR 5QI values.
* **additionalAllowedSessionTypes**: 'IPv4' | 'IPv6' | string[]: Allowed session types in addition to the default session type. Must not duplicate the default session type.
* **allocationAndRetentionPriorityLevel**: int: Default QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **allowedServices**: [ServiceResourceId](#serviceresourceid)[] (Required): List of services that can be used as part of this SIM policy. The list must not contain duplicate items and must contain at least one item.
* **dataNetwork**: [DataNetworkResourceId](#datanetworkresourceid) (Required): A reference to the data network that these settings apply to
* **defaultSessionType**: 'IPv4' | 'IPv6' | string: The default PDU session type, which is used if the UE does not request a specific session type.
* **preemptionCapability**: 'MayPreempt' | 'NotPreempt' | string: Default QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **preemptionVulnerability**: 'NotPreemptable' | 'Preemptable' | string: Default QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **sessionAmbr**: [Ambr](#ambr) (Required): Aggregate maximum bit rate across all non-GBR QoS flows of a given PDU session. See 3GPP TS23.501 section 5.7.2.6 for a full description of the Session-AMBR.

## DataNetworkPropertiesFormat
### Properties
* **description**: string: An optional description for this data network.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the data network resource.

## DataNetworkResourceId
### Properties
* **id**: string (Required): Data network resource ID.

## InterfaceProperties
### Properties
* **ipv4Address**: string: The IPv4 address.
* **ipv4Gateway**: string: The default IPv4 gateway (router).
* **ipv4Subnet**: string: The IPv4 subnet.
* **name**: string: The logical name for this interface. This should match one of the interfaces configured on your Azure Stack Edge device.

## KeyVaultCertificate
### Properties
* **certificateUrl**: string: The certificate URL, unversioned. For example: https://contosovault.vault.azure.net/certificates/ingress.

## KeyVaultKey
### Properties
* **keyUrl**: string: The key URL, unversioned. For example: https://contosovault.vault.azure.net/keys/azureKey.

## LocalDiagnosticsAccessConfiguration
### Properties
* **httpsServerCertificate**: [KeyVaultCertificate](#keyvaultcertificate): The HTTPS server TLS certificate used to secure local access to diagnostics.

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MobileNetworkPropertiesFormat
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the mobile network resource.
* **publicLandMobileNetworkIdentifier**: [PlmnId](#plmnid) (Required): The unique public land mobile network identifier for the network. This is made up of the mobile country code and mobile network code, as defined in https://www.itu.int/rec/T-REC-E.212. The values 001-01 and 001-001 can be used for testing and the values 999-99 and 999-999 can be used on internal private networks.
* **serviceKey**: string (ReadOnly): The mobile network resource identifier

## MobileNetworkResourceId
### Properties
* **id**: string (Required): Mobile network resource ID.

## NaptConfiguration
### Properties
* **enabled**: 'Disabled' | 'Enabled' | string: Whether NAPT is enabled for connections to this attached data network.
* **pinholeLimits**: int: Maximum number of UDP and TCP pinholes that can be open simultaneously on the core interface. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface.
* **pinholeTimeouts**: [PinholeTimeouts](#pinholetimeouts): Expiry times of inactive NAPT pinholes, in seconds. All timers must be at least 1 second.
* **portRange**: [PortRange](#portrange): Range of port numbers to use as translated ports on each translated address.
If not specified and NAPT is enabled, this range defaults to 1,024 - 49,999.
(Ports under 1,024 should not be used because these are special purpose ports reserved by IANA. Ports 50,000 and above are reserved for non-NAPT use.)
* **portReuseHoldTime**: [PortReuseHoldTimes](#portreuseholdtimes): The minimum time (in seconds) that will pass before a port that was used by a closed pinhole can be recycled for use by another pinhole. All hold times must be minimum 1 second.

## PacketCoreControlPlanePropertiesFormat
### Properties
* **controlPlaneAccessInterface**: [InterfaceProperties](#interfaceproperties) (Required): The control plane interface on the access network. For 5G networks, this is the N2 interface. For 4G networks, this is the S1-MME interface.
* **coreNetworkTechnology**: '5GC' | 'EPC' | string: The core network technology generation (5G core or EPC / 4G core).
* **interopSettings**: any: Settings to allow interoperability with third party components e.g. RANs and UEs.
* **localDiagnosticsAccess**: [LocalDiagnosticsAccessConfiguration](#localdiagnosticsaccessconfiguration): The kubernetes ingress configuration to control access to packet core diagnostics over local APIs.
* **mobileNetwork**: [MobileNetworkResourceId](#mobilenetworkresourceid) (Required): Mobile network in which this packet core control plane is deployed.
* **platform**: [PlatformConfiguration](#platformconfiguration): The platform where the packet core is deployed.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the packet core control plane resource.
* **sku**: 'EdgeSite2GBPS' | 'EdgeSite3GBPS' | 'EdgeSite4GBPS' | 'EvaluationPackage' | 'FlagshipStarterPackage' | 'LargePackage' | 'MediumPackage' | string (Required): The SKU defining the throughput and SIM allowances for this packet core control plane deployment.
* **version**: string: The version of the packet core software that is deployed.

## PacketCoreControlPlaneVersionPropertiesFormat
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the packet core control plane version resource.
* **recommendedVersion**: 'NotRecommended' | 'Recommended' | string: Indicates whether this is the recommended version to use for new packet core control plane deployments.
* **versionState**: 'Active' | 'Deprecated' | 'Preview' | 'Unknown' | 'Validating' | 'ValidationFailed' | string: The state of this packet core control plane version.

## PacketCoreDataPlanePropertiesFormat
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the packet core data plane resource.
* **userPlaneAccessInterface**: [InterfaceProperties](#interfaceproperties) (Required): The user plane interface on the access network. For 5G networks, this is the N3 interface. For 4G networks, this is the S1-U interface.

## PccRuleConfiguration
### Properties
* **ruleName**: string (Required): The name of the rule. This must be unique within the parent service. You must not use any of the following reserved strings - `default`, `requested` or `service`.
* **rulePrecedence**: int (Required): A precedence value that is used to decide between data flow policy rules when identifying the QoS values to use for a particular SIM. A lower value means a higher priority. This value should be unique among all data flow policy rules configured in the mobile network.
* **ruleQosPolicy**: [PccRuleQosPolicy](#pccruleqospolicy): The QoS policy to use for packets matching this rule. If this field is null then the parent service will define the QoS settings.
* **serviceDataFlowTemplates**: [ServiceDataFlowTemplate](#servicedataflowtemplate)[] (Required): The set of data flow templates to use for this data flow policy rule.
* **trafficControl**: 'Blocked' | 'Enabled' | string: Determines whether flows that match this data flow policy rule are permitted.

## PccRuleQosPolicy
### Properties
* **5qi**: int: QoS Flow 5G QoS Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. This must not be a standardized 5QI value corresponding to a GBR (guaranteed bit rate) QoS Flow. The illegal GBR 5QI values are: 1, 2, 3, 4, 65, 66, 67, 71, 72, 73, 74, 75, 76, 82, 83, 84, and 85. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition of which are the GBR 5QI values.
* **allocationAndRetentionPriorityLevel**: int: QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **guaranteedBitRate**: [Ambr](#ambr): The guaranteed bit rate (GBR) for all service data flows that use this data flow policy rule. This is an optional setting. If you do not provide a value, there will be no GBR set for the data flow policy rule that uses this QoS definition.
* **maximumBitRate**: [Ambr](#ambr) (Required): The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service.
* **preemptionCapability**: 'MayPreempt' | 'NotPreempt' | string: QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **preemptionVulnerability**: 'NotPreemptable' | 'Preemptable' | string: QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.

## PinholeTimeouts
### Properties
* **icmp**: int: Pinhole timeout for ICMP pinholes in seconds. Default for ICMP Echo is 60 seconds, as per RFC 5508 section 3.2.
* **tcp**: int: Pinhole timeout for TCP pinholes in seconds. Default for TCP is 2 hours 4 minutes, as per RFC 5382 section 5.
* **udp**: int: Pinhole timeout for UDP pinholes in seconds. Default for UDP is 5 minutes, as per RFC 4787 section 4.3.

## PlatformConfiguration
### Properties
* **azureStackEdgeDevice**: [AzureStackEdgeDeviceResourceId](#azurestackedgedeviceresourceid): The Azure Stack Edge device where where the packet core is deployed. If the device is part of a fault tolerant pair, either device in the pair can be specified.
* **connectedCluster**: [ConnectedClusterResourceId](#connectedclusterresourceid): Azure Arc connected cluster where the packet core is deployed.
* **customLocation**: [CustomLocationResourceId](#customlocationresourceid): Azure Arc custom location where the packet core is deployed.
* **type**: 'AKS-HCI' | 'BaseVM' | string (Required): The platform type where packet core is deployed.

## PlmnId
### Properties
* **mcc**: string (Required): Mobile country code (MCC).
* **mnc**: string (Required): Mobile network code (MNC).

## PortRange
### Properties
* **maxPort**: int: The maximum port number
* **minPort**: int: The minimum port number

## PortReuseHoldTimes
### Properties
* **tcp**: int: Minimum time in seconds that will pass before a TCP port that was used by a closed pinhole can be reused. Default for TCP is 2 minutes.
* **udp**: int: Minimum time in seconds that will pass before a UDP port that was used by a closed pinhole can be reused. Default for UDP is 1 minute.

## QosPolicy
### Properties
* **5qi**: int: QoS Flow 5G QoS Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. This must not be a standardized 5QI value corresponding to a GBR (guaranteed bit rate) QoS Flow. The illegal GBR 5QI values are: 1, 2, 3, 4, 65, 66, 67, 71, 72, 73, 74, 75, 76, 82, 83, 84, and 85. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition of which are the GBR 5QI values.
* **allocationAndRetentionPriorityLevel**: int: QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **maximumBitRate**: [Ambr](#ambr) (Required): The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service.
* **preemptionCapability**: 'MayPreempt' | 'NotPreempt' | string: QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **preemptionVulnerability**: 'NotPreemptable' | 'Preemptable' | string: QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.

## ServiceDataFlowTemplate
### Properties
* **direction**: 'Bidirectional' | 'Downlink' | 'Uplink' | string (Required): The direction of this flow.
* **ports**: string[]: The port(s) to which UEs will connect for this flow. You can specify zero or more ports or port ranges. If you specify one or more ports or port ranges then you must specify a value other than `ip` in the `protocol` field. This is an optional setting. If you do not specify it then connections will be allowed on all ports. Port ranges must be specified as <FirstPort>-<LastPort>. For example: [`8080`, `8082-8085`].
* **protocol**: string[] (Required): A list of the allowed protocol(s) for this flow. If you want this flow to be able to use any protocol within the internet protocol suite, use the value `ip`. If you only want to allow a selection of protocols, you must use the corresponding IANA Assigned Internet Protocol Number for each protocol, as described in https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml. For example, for UDP, you must use 17. If you use the value `ip` then you must leave the field `port` unspecified.
* **remoteIpList**: string[] (Required): The remote IP address(es) to which UEs will connect for this flow. If you want to allow connections on any IP address, use the value `any`. Otherwise, you must provide each of the remote IP addresses to which the packet core instance will connect for this flow. You must provide each IP address in CIDR notation, including the netmask (for example, 192.0.2.54/24).
* **templateName**: string (Required): The name of the data flow template. This must be unique within the parent data flow policy rule. You must not use any of the following reserved strings - `default`, `requested` or `service`.

## ServicePropertiesFormat
### Properties
* **pccRules**: [PccRuleConfiguration](#pccruleconfiguration)[] (Required): The set of data flow policy rules that make up this service.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the service resource.
* **servicePrecedence**: int (Required): A precedence value that is used to decide between services when identifying the QoS values to use for a particular SIM. A lower value means a higher priority. This value should be unique among all services configured in the mobile network.
* **serviceQosPolicy**: [QosPolicy](#qospolicy): The QoS policy to use for packets matching this service. This can be overridden for particular flows using the ruleQosPolicy field in a PccRuleConfiguration. If this field is null then the UE's SIM policy will define the QoS settings.

## ServiceResourceId
### Properties
* **id**: string (Required): Service resource ID.

## SimGroupPropertiesFormat
### Properties
* **encryptionKey**: [KeyVaultKey](#keyvaultkey): A key to encrypt the SIM data that belongs to this SIM group.
* **mobileNetwork**: [MobileNetworkResourceId](#mobilenetworkresourceid): Mobile network that this SIM belongs to
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the SIM group resource.

## SimIdListResult
### Properties
* **nextLink**: string (ReadOnly): The URL to get the next set of results.
* **value**: [SubResource](#subresource)[]: A list of SIM IDs.

## SimPolicyPropertiesFormat
### Properties
* **defaultSlice**: [SliceResourceId](#sliceresourceid) (Required): The default slice to use if the UE does not explicitly specify it. This slice must exist in the `sliceConfigurations` map.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the SIM policy resource.
* **registrationTimer**: int: Interval for the UE periodic registration update procedure, in seconds.
* **rfspIndex**: int: RAT/Frequency Selection Priority Index, defined in 3GPP TS 36.413. This is an optional setting and by default is unspecified.
* **sliceConfigurations**: [SliceConfiguration](#sliceconfiguration)[] (Required): The allowed slices and the settings to use for them. The list must not contain duplicate items and must contain at least one item.
* **ueAmbr**: [Ambr](#ambr) (Required): Aggregate maximum bit rate across all non-GBR QoS flows of all PDU sessions of a given UE. See 3GPP TS23.501 section 5.7.2.6 for a full description of the UE-AMBR.

## SimPolicyResourceId
### Properties
* **id**: string (Required): SIM policy resource ID.

## SimPropertiesFormat
### Properties
* **authenticationKey**: string (WriteOnly): The Ki value for the SIM.
* **deviceType**: string: An optional free-form text field that can be used to record the device type this SIM is associated with, for example 'Video camera'. The Azure portal allows SIMs to be grouped and filtered based on this value.
* **integratedCircuitCardIdentifier**: string: The integrated circuit card ID (ICCID) for the SIM.
* **internationalMobileSubscriberIdentity**: string (Required): The international mobile subscriber identity (IMSI) for the SIM.
* **operatorKeyCode**: string (WriteOnly): The Opc value for the SIM.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the SIM resource.
* **simPolicy**: [SimPolicyResourceId](#simpolicyresourceid): The SIM policy used by this SIM.
* **simState**: 'Disabled' | 'Enabled' | 'Invalid' | string (ReadOnly): The state of the SIM resource.
* **staticIpConfiguration**: [SimStaticIpProperties](#simstaticipproperties)[]: A list of static IP addresses assigned to this SIM. Each address is assigned at a defined network scope, made up of {attached data network, slice}.

## SimStaticIpProperties
### Properties
* **attachedDataNetwork**: [AttachedDataNetworkResourceId](#attacheddatanetworkresourceid): The attached data network on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address.
* **slice**: [SliceResourceId](#sliceresourceid): The network slice on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address.
* **staticIp**: [SimStaticIpPropertiesStaticIp](#simstaticippropertiesstaticip): The static IP configuration for the SIM to use at the defined network scope.

## SimStaticIpPropertiesStaticIp
### Properties
* **ipv4Address**: string: The IPv4 address assigned to the SIM at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attached data network.

## SitePropertiesFormat
### Properties
* **networkFunctions**: [SubResource](#subresource)[]: An array of IDs of the network functions deployed on the site, maintained by the user.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the site resource.

## SliceConfiguration
### Properties
* **dataNetworkConfigurations**: [DataNetworkConfiguration](#datanetworkconfiguration)[] (Required): The allowed data networks and the settings to use for them. The list must not contain duplicate items and must contain at least one item.
* **defaultDataNetwork**: [DataNetworkResourceId](#datanetworkresourceid) (Required): The default data network to use if the UE does not explicitly specify it. Configuration for this object must exist in the `dataNetworkConfigurations` map.
* **slice**: [SliceResourceId](#sliceresourceid) (Required): A reference to the slice that these settings apply to

## SlicePropertiesFormat
### Properties
* **description**: string: An optional description for this network slice.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the network slice resource.
* **snssai**: [Snssai](#snssai) (Required): Single-network slice selection assistance information (S-NSSAI). Unique at the scope of a mobile network.

## SliceResourceId
### Properties
* **id**: string (Required): Slice resource ID.

## Snssai
### Properties
* **sd**: string: Slice differentiator (SD).
* **sst**: int (Required): Slice/service type (SST).

## SubResource
### Properties
* **id**: string (Required): Resource ID.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the assigned identity.

