# Microsoft.MobileNetwork @ 2024-04-01

## Resource Microsoft.MobileNetwork/mobileNetworks@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity used to retrieve any private keys used for SUPI concealment from Azure key vault.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MobileNetworkPropertiesFormat](#mobilenetworkpropertiesformat) (Required): Mobile network properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/mobileNetworks/dataNetworks@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataNetworkPropertiesFormat](#datanetworkpropertiesformat): Data network properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks/dataNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/mobileNetworks/services@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^(?!(default|requested|service)$)[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServicePropertiesFormat](#servicepropertiesformat) (Required): Service Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/mobileNetworks/simPolicies@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SimPolicyPropertiesFormat](#simpolicypropertiesformat) (Required): SIM policy Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks/simPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/mobileNetworks/sites@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SitePropertiesFormat](#sitepropertiesformat): Site properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks/sites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/mobileNetworks/slices@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SlicePropertiesFormat](#slicepropertiesformat) (Required): Slice properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/mobileNetworks/slices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlanes@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity used to retrieve the ingress certificate from Azure key vault.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCoreControlPlanePropertiesFormat](#packetcorecontrolplanepropertiesformat) (Required): Packet core control plane Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlanes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlanes/diagnosticsPackages@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticsPackagePropertiesFormat](#diagnosticspackagepropertiesformat) (ReadOnly): Diagnostics package properties. A diagnostics package file derived from the name of this resource will be uploaded to the Storage Account Container URL in the packet core control plane properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlanes/diagnosticsPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlanes/packetCaptures@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCapturePropertiesFormat](#packetcapturepropertiesformat) (Required): Packet capture session properties. Packet capture file(s) derived from the name of this session will be uploaded to the Storage Account Container URL in the packet core control plane properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlanes/packetCaptures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCoreDataPlanePropertiesFormat](#packetcoredataplanepropertiesformat) (Required): Packet core data plane Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AttachedDataNetworkPropertiesFormat](#attacheddatanetworkpropertiesformat) (Required): Attached data network properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlanes/routingInfo@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [RoutingInfoPropertiesFormat](#routinginfopropertiesformat) (ReadOnly): Routing information properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlanes/routingInfo' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlanes/ues/extendedInformation@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ExtendedUeInfoProperties](#extendedueinfoproperties) (ReadOnly): Extended UE Information Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlanes/ues/extendedInformation' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/packetCoreControlPlaneVersions@2024-04-01
* **Readable Scope(s)**: Tenant, Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PacketCoreControlPlaneVersionPropertiesFormat](#packetcorecontrolplaneversionpropertiesformat) (ReadOnly): Packet core control plane version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MobileNetwork/packetCoreControlPlaneVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/simGroups@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity used to retrieve the encryption key from Azure key vault.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SimGroupPropertiesFormat](#simgrouppropertiesformat) (Required): SIM group Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobileNetwork/simGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MobileNetwork/simGroups/sims@2024-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SimPropertiesFormat](#simpropertiesformat) (Required): SIM Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.MobileNetwork/simGroups/sims' (ReadOnly, DeployTimeConstant): The resource type

## Function listSimGroups (Microsoft.MobileNetwork/mobileNetworks@2024-04-01)
* **Resource**: Microsoft.MobileNetwork/mobileNetworks
* **ApiVersion**: 2024-04-01
* **Output**: [SimGroupListResult](#simgrouplistresult)

## Ambr
### Properties
* **downlink**: string {pattern: "^\d+(\.\d+)? (bps|Kbps|Mbps|Gbps|Tbps)$"} (Required): Downlink bit rate.
* **uplink**: string {pattern: "^\d+(\.\d+)? (bps|Kbps|Mbps|Gbps|Tbps)$"} (Required): Uplink bit rate.

## AmfId
### Properties
* **pointer**: int {minValue: 0, maxValue: 63} (Required): AMF pointer
* **regionId**: int {minValue: 0, maxValue: 255} (Required): AMF region identifier
* **setId**: int {minValue: 0, maxValue: 1023} (Required): AMF set identifier

## AsyncOperationId
### Properties
* **id**: string {pattern: "^/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[^/?#]+/[lL][oO][cC][aA][tT][iI][oO][nN][sS]/[^/?#]+/[oO][pP][eE][rR][aA][tT][iI][oO][nN][sS][tT][aA][tT][uU][sS][eE][sS]/[^/?#]+$"} (Required): Azure Async Operation ID.

## AttachedDataNetworkPropertiesFormat
### Properties
* **dnsAddresses**: (string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"})[] (Required): The DNS servers to signal to UEs to use for this attached data network. This configuration is mandatory - if you don't want DNS servers, you must provide an empty array.
* **naptConfiguration**: [NaptConfiguration](#naptconfiguration): The network address and port translation (NAPT) configuration.
If this is not specified, the attached data network will use a default NAPT configuration with NAPT enabled.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the attached data network resource.
* **userEquipmentAddressPoolPrefix**: (string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$"})[] {minLength: 1}: The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will dynamically assign IP addresses to UEs.
The packet core instance assigns an IP address to a UE when the UE sets up a PDU session.
 You must define at least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix. If you define both, they must be of the same size.
* **userEquipmentStaticAddressPoolPrefix**: (string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$"})[] {minLength: 1}: The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will assign static IP addresses to UEs.
The packet core instance assigns an IP address to a UE when the UE sets up a PDU session. The static IP address for a specific UE is set in StaticIPConfiguration on the corresponding SIM resource.
At least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix must be defined. If both are defined, they must be of the same size.
* **userPlaneDataInterface**: [InterfaceProperties](#interfaceproperties) (Required): The user plane interface on the data network. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface.

## AttachedDataNetworkResourceId
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][cC][oO][nN][tT][rR][oO][lL][pP][lL][aA][nN][eE][sS]/[^/?#]+/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][dD][aA][tT][aA][pP][lL][aA][nN][eE][sS]/[^/?#]+/[aA][tT][tT][aA][cC][hH][eE][dD][dD][aA][tT][aA][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$"} (Required): Attached data network resource ID.

## AzureStackEdgeDeviceResourceId
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[dD][aA][tT][aA][bB][oO][xX][eE][dD][gG][eE]/[dD][aA][tT][aA][bB][oO][xX][eE][dD][gG][eE][dD][eE][vV][iI][cC][eE][sS]/[^/?#]+$"} (Required): Azure Stack Edge device resource ID.

## AzureStackHCIClusterResourceId
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[aA][zZ][uU][rR][eE][sS][tT][aA][cC][kK][hH][cC][iI]/[cC][lL][uU][sS][tT][eE][rR][sS]/[^/?#]+$"} (Required): Azure Stack HCI cluster resource ID.

## CertificateProvisioning
### Properties
* **reason**: string (ReadOnly): Reason for certificate provisioning failure.
* **state**: 'Failed' | 'NotProvisioned' | 'Provisioned' | string (ReadOnly): The certificate's provisioning state

## ConnectedClusterResourceId
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[kK][uU][bB][eE][rR][nN][eE][tT][eE][sS]/[cC][oO][nN][nN][eE][cC][tT][eE][dD][cC][lL][uU][sS][tT][eE][rR][sS]/[^/?#]+$"} (Required): Azure Arc connected cluster resource ID.

## CustomLocationResourceId
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[eE][xX][tT][eE][nN][dD][eE][dD][lL][oO][cC][aA][tT][iI][oO][nN]/[cC][uU][sS][tT][oO][mM][lL][oO][cC][aA][tT][iI][oO][nN][sS]/[^/?#]+$"} (Required): Azure Arc custom location resource ID.

## DataNetworkConfiguration
### Properties
* **5qi**: int {minValue: 0, maxValue: 255}: Default 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
* **additionalAllowedSessionTypes**: ('IPv4' | 'IPv6' | string)[] {maxLength: 1}: Allowed session types in addition to the default session type. Must not duplicate the default session type.
* **allocationAndRetentionPriorityLevel**: int {minValue: 1, maxValue: 15}: Default QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **allowedServices**: [ServiceResourceId](#serviceresourceid)[] {minLength: 1} (Required): List of services that can be used as part of this SIM policy. The list must not contain duplicate items and must contain at least one item. The services must be in the same location as the SIM policy.
* **dataNetwork**: [DataNetworkResourceId](#datanetworkresourceid) (Required): A reference to the data network that these settings apply to. The data network must be in the same location as the SIM policy.
* **defaultSessionType**: 'IPv4' | 'IPv6' | string: The default PDU session type, which is used if the UE does not request a specific session type.
* **maximumNumberOfBufferedPackets**: int {minValue: 0}: The maximum number of downlink packets to buffer at the user plane for High Latency Communication - Extended Buffering. See 3GPP TS29.272 v15.10.0 section 7.3.188 for a full description. This maximum is not guaranteed because there is a internal limit on buffered packets across all PDU sessions.
* **preemptionCapability**: 'MayPreempt' | 'NotPreempt' | string: Default QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **preemptionVulnerability**: 'NotPreemptable' | 'Preemptable' | string: Default QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **sessionAmbr**: [Ambr](#ambr) (Required): Aggregate maximum bit rate across all non-GBR QoS flows of a given PDU session. See 3GPP TS23.501 section 5.7.2.6 for a full description of the Session-AMBR.

## DataNetworkPropertiesFormat
### Properties
* **description**: string: An optional description for this data network.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the data network resource.

## DataNetworkResourceId
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[dD][aA][tT][aA][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$"} (Required): Data network resource ID.

## DiagnosticsPackagePropertiesFormat
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the diagnostics package resource.
* **reason**: string (ReadOnly): The reason for the current state of the diagnostics package collection.
* **status**: 'Collected' | 'Collecting' | 'Error' | 'NotStarted' | string (ReadOnly): The status of the diagnostics package collection.

## DiagnosticsUploadConfiguration
### Properties
* **storageAccountContainerUrl**: string (Required): The Storage Account Container URL to upload diagnostics to.

## EventHubConfiguration
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[eE][vV][eE][nN][tT][hH][uU][bB]/[nN][aA][mM][eE][sS][pP][aA][cC][eE][sS]/[^/?#]+/[eV][vV][eE][nN][tT][hH][uU][bB][sS]/[^/?#]+$"} (Required): Resource ID  of Azure Event Hub to send packet core events to.
* **reportingInterval**: int {minValue: 30, maxValue: 3600}: The duration (in seconds) between UE usage reports.

## ExtendedUeInfoProperties
* **Discriminator**: ratType

### Base Properties
* **lastReadAt**: string: The timestamp of last UE info read from the packet core (UTC).

### UeInfo4G
#### Properties
* **info**: [UeInfo4GProperties](#ueinfo4gproperties) (Required): UE Information properties for 4G.
* **ratType**: '4G' (Required): RAT Type

### UeInfo5G
#### Properties
* **info**: [UeInfo5GProperties](#ueinfo5gproperties) (Required): UE Information properties for 5G.
* **ratType**: '5G' (Required): RAT Type


## GlobalRanNodeId
### Properties
* **eNbId**: string {pattern: "^(MacroeNB-[A-Fa-f0-9]{5}|LMacroeNB-[A-Fa-f0-9]{6}|SMacroeNB-[A-Fa-f0-9]{5}|HomeeNB-[A-Fa-f0-9]{7})$"}: eNodeB identifier
* **gNbId**: [GNbId](#gnbid): gNodeB identifier
* **n3IwfId**: string {pattern: "^[A-Fa-f0-9]+$"}: N3 IWF identifier
* **ngeNbId**: string {pattern: "^(MacroNGeNB-[A-Fa-f0-9]{5}|LMacroNGeNB-[A-Fa-f0-9]{6}|SMacroNGeNB-[A-Fa-f0-9]{5})$"}: NG-eNodeB identifier
* **nid**: string {pattern: "^[A-Fa-f0-9]{11}$"}: Network identifier
* **plmnId**: [PlmnId](#plmnid) (Required): PLMN Identifier
* **tngfId**: string {pattern: "^[A-Fa-f0-9]+$"}: TNGF identifier
* **wagfId**: string {pattern: "^[A-Fa-f0-9]+$"}: W-AGF identifier

## GNbId
### Properties
* **bitLength**: int {minValue: 22, maxValue: 32}
* **gNBValue**: string {pattern: "^[A-Fa-f0-9]{6,8}$"}

## Guti4G
### Properties
* **mmeId**: [MmeId](#mmeid) (Required): MME identifier
* **mTmsi**: int {minValue: 0, maxValue: 4294967295} (Required): MME Temporary Mobile Subscriber Identity
* **plmn**: [PlmnId](#plmnid) (Required): Public land mobile network (PLMN) ID. This is made up of the mobile country code and mobile network code, as defined in https://www.itu.int/rec/T-REC-E.212. The values 001-01 and 001-001 can be used for testing and the values 999-99 and 999-999 can be used on internal private networks.

## Guti5G
### Properties
* **amfId**: [AmfId](#amfid) (Required): AMF identifier
* **fivegTmsi**: int {minValue: 0, maxValue: 4294967295} (Required): 5G Temporary Mobile Subscriber Identity
* **plmn**: [PlmnId](#plmnid) (Required): Public land mobile network (PLMN) ID. This is made up of the mobile country code and mobile network code, as defined in https://www.itu.int/rec/T-REC-E.212. The values 001-01 and 001-001 can be used for testing and the values 999-99 and 999-999 can be used on internal private networks.

## HomeNetworkPrivateKeysProvisioning
### Properties
* **state**: 'Failed' | 'NotProvisioned' | 'Provisioned' | string (Required, ReadOnly): The provisioning state of the private keys for SUPI concealment.

## HomeNetworkPublicKey
### Properties
* **id**: int {minValue: 1, maxValue: 255} (Required): The Home Network Public Key Identifier determines which public key was used to generate the SUCI sent to the AMF. See TS 23.003 Section 2.2B Section 5.
* **url**: string: The URL of Azure Key Vault secret containing the private key, versioned or unversioned. For example: https://contosovault.vault.azure.net/secrets/mySuciPrivateKey/562a4bb76b524a1493a6afe8e536ee78.

## HttpsServerCertificate
### Properties
* **certificateUrl**: string (Required): The certificate URL, unversioned. For example: https://contosovault.vault.azure.net/certificates/ingress.
* **provisioning**: [CertificateProvisioning](#certificateprovisioning) (ReadOnly): The provisioning state of the certificate.

## Installation
### Properties
* **desiredState**: 'Installed' | 'Uninstalled' | string: The desired installation state
* **operation**: [AsyncOperationId](#asyncoperationid) (ReadOnly): A reference to an in-progress installation operation
* **reasons**: ('ControlPlaneAccessInterfaceHasChanged' | 'ControlPlaneAccessVirtualIpv4AddressesHasChanged' | 'NoAttachedDataNetworks' | 'NoPacketCoreDataPlane' | 'NoSlices' | 'PublicLandMobileNetworkIdentifierHasChanged' | 'UserPlaneAccessInterfaceHasChanged' | 'UserPlaneAccessVirtualIpv4AddressesHasChanged' | 'UserPlaneDataInterfaceHasChanged' | string)[] (ReadOnly): Reason(s) for the current installation state of the packet core.
* **reinstallRequired**: 'NotRequired' | 'Required' | string (ReadOnly): Whether a reinstall of the packet core is required to pick up the latest configuration changes.
* **state**: 'Failed' | 'Installed' | 'Installing' | 'Reinstalling' | 'RollingBack' | 'Uninstalled' | 'Uninstalling' | 'Updating' | 'Upgrading' | string (ReadOnly): Installation state

## InterfaceProperties
### Properties
* **bfdIpv4Endpoints**: (string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"})[]: The IPv4 addresses of the endpoints to send BFD probes to.
* **ipv4Address**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"}: The IPv4 address.
* **ipv4AddressList**: (string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"})[]: The list of IPv4 addresses, for a multi-node system.
* **ipv4Gateway**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"}: The default IPv4 gateway (router).
* **ipv4Subnet**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$"}: The IPv4 subnet.
* **name**: string: The logical name for this interface. This should match one of the interfaces configured on your Azure Stack Edge device.
* **vlanId**: int {minValue: 1, maxValue: 4094}: VLAN identifier of the network interface. Example: 501.

## Ipv4Route
### Properties
* **destination**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$"}: The destination IPv4 prefix.
* **nextHops**: [Ipv4RouteNextHop](#ipv4routenexthop)[]: A list of next hops for the destination.

## Ipv4RouteNextHop
### Properties
* **address**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"}: The next hop address.
* **priority**: int: The priority of this next hop. Next hops with lower preference values are preferred.

## KeyVaultKey
### Properties
* **keyUrl**: string: The key URL, unversioned. For example: https://contosovault.vault.azure.net/keys/azureKey.

## LocalDiagnosticsAccessConfiguration
### Properties
* **authenticationType**: 'AAD' | 'Password' | string (Required): How to authenticate users who access local diagnostics APIs.
* **httpsServerCertificate**: [HttpsServerCertificate](#httpsservercertificate): The HTTPS server TLS certificate used to secure local access to diagnostics.

## ManagedServiceIdentity
### Properties
* **type**: 'None' | 'UserAssigned' | string (Required): Type of managed service identity (currently only UserAssigned allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MmeId
### Properties
* **code**: int {minValue: 0, maxValue: 255} (Required): MME code
* **groupId**: int {minValue: 0, maxValue: 65535} (Required): MME group identifier

## MobileNetworkPropertiesFormat
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the mobile network resource.
* **publicLandMobileNetworkIdentifier**: [PlmnId](#plmnid) (Required): The unique public land mobile network identifier for the network. If both 'publicLandMobileNetworks' and 'publicLandMobileNetworkIdentifier' are specified, then the 'publicLandMobileNetworks' will take precedence.
* **publicLandMobileNetworks**: [PublicLandMobileNetwork](#publiclandmobilenetwork)[] {minLength: 1}: A list of public land mobile networks including their identifiers. If both 'publicLandMobileNetworks' and 'publicLandMobileNetworkIdentifier' are specified, then the 'publicLandMobileNetworks' will take precedence.
* **serviceKey**: string (ReadOnly): The mobile network resource identifier

## MobileNetworkResourceId
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$"} (Required): Mobile network resource ID.

## NaptConfiguration
### Properties
* **enabled**: 'Disabled' | 'Enabled' | string: Whether NAPT is enabled for connections to this attached data network.
* **pinholeLimits**: int {minValue: 1, maxValue: 65536}: Maximum number of UDP and TCP pinholes that can be open simultaneously on the core interface. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface.
* **pinholeTimeouts**: [PinholeTimeouts](#pinholetimeouts): Expiry times of inactive NAPT pinholes, in seconds. All timers must be at least 1 second.
* **portRange**: [PortRange](#portrange): Range of port numbers to use as translated ports on each translated address.
If not specified and NAPT is enabled, this range defaults to 1,024 - 49,999.
(Ports under 1,024 should not be used because these are special purpose ports reserved by IANA. Ports 50,000 and above are reserved for non-NAPT use.)
* **portReuseHoldTime**: [PortReuseHoldTimes](#portreuseholdtimes): The minimum time (in seconds) that will pass before a port that was used by a closed pinhole can be recycled for use by another pinhole. All hold times must be at least 1 second.

## NASRerouteConfiguration
### Properties
* **macroMmeGroupId**: int {minValue: 0, maxValue: 65535} (Required): The macro network's MME group ID. This is where unknown UEs are sent to via NAS reroute.

## PacketCapturePropertiesFormat
### Properties
* **bytesToCapturePerPacket**: int {minValue: 0, maxValue: 4294967295}: Number of bytes captured per packet, the remaining bytes are truncated. The default "0" means the entire packet is captured.
* **captureStartTime**: string (ReadOnly): The start time of the packet capture session.
* **networkInterfaces**: string[] {minLength: 1}: List of network interfaces to capture on.
* **outputFiles**: string[] (ReadOnly): The list of output files of a packet capture session.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the packet capture session resource.
* **reason**: string (ReadOnly): The reason the current packet capture session state.
* **status**: 'Error' | 'NotStarted' | 'Running' | 'Stopped' | string (ReadOnly): The status of the packet capture session.
* **timeLimitInSeconds**: int {minValue: 5, maxValue: 18000}: Maximum duration of the capture session in seconds.
* **totalBytesPerSession**: int {minValue: 1000, maxValue: 4294967295}: Maximum size of the capture output.

## PacketCoreControlPlanePropertiesFormat
### Properties
* **controlPlaneAccessInterface**: [InterfaceProperties](#interfaceproperties) (Required): The control plane interface on the access network. For 5G networks, this is the N2 interface. For 4G networks, this is the S1-MME interface.
* **controlPlaneAccessVirtualIpv4Addresses**: (string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"})[]: The virtual IP address(es) for the control plane on the access network in a High Availability (HA) system. In an HA deployment the access network router should be configured to anycast traffic for this address to the control plane access interfaces on the active and standby nodes. In non-HA system this list should be omitted or empty.
* **coreNetworkTechnology**: '5GC' | 'EPC + 5GC' | 'EPC': The core network technology generation (5G core or EPC / 4G core).
* **diagnosticsUpload**: [DiagnosticsUploadConfiguration](#diagnosticsuploadconfiguration): Configuration for uploading packet core diagnostics
* **eventHub**: [EventHubConfiguration](#eventhubconfiguration): Configuration for sending packet core events to an Azure Event Hub.
* **homeNetworkPrivateKeysProvisioning**: [HomeNetworkPrivateKeysProvisioning](#homenetworkprivatekeysprovisioning) (ReadOnly): The provisioning state of the secret containing private keys and keyIds for SUPI concealment.
* **installation**: [Installation](#installation): The installation state of the packet core control plane resource.
* **installedVersion**: string (ReadOnly): The currently installed version of the packet core software.
* **interopSettings**: any: Settings to allow interoperability with third party components e.g. RANs and UEs.
* **localDiagnosticsAccess**: [LocalDiagnosticsAccessConfiguration](#localdiagnosticsaccessconfiguration) (Required): The kubernetes ingress configuration to control access to packet core diagnostics over local APIs.
* **platform**: [PlatformConfiguration](#platformconfiguration) (Required): The platform where the packet core is deployed.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the packet core control plane resource.
* **rollbackVersion**: string (ReadOnly): The previous version of the packet core software that was deployed. Used when performing the rollback action.
* **signaling**: [SignalingConfiguration](#signalingconfiguration): Signaling configuration for the packet core.
* **sites**: [SiteResourceId](#siteresourceid)[] {minLength: 1} (Required): Site(s) under which this packet core control plane should be deployed. The sites must be in the same location as the packet core control plane.
* **sku**: 'G0' | 'G1' | 'G10' | 'G2' | 'G5' | string (Required): The SKU defining the throughput and SIM allowances for this packet core control plane deployment.
* **ueMtu**: int {minValue: 1280, maxValue: 1930}: The MTU (in bytes) signaled to the UE. The same MTU is set on the user plane data links for all data networks. The MTU set on the user plane access link is calculated to be 60 bytes greater than this value to allow for GTP encapsulation.
* **userConsent**: [UserConsentConfiguration](#userconsentconfiguration): The user consent configuration for the packet core.
* **version**: string: The desired version of the packet core software.

## PacketCoreControlPlaneVersionPropertiesFormat
### Properties
* **platforms**: [Platform](#platform)[]: Platform specific packet core control plane version properties.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the packet core control plane version resource.

## PacketCoreDataPlanePropertiesFormat
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the packet core data plane resource.
* **userPlaneAccessInterface**: [InterfaceProperties](#interfaceproperties) (Required): The user plane interface on the access network. For 5G networks, this is the N3 interface. For 4G networks, this is the S1-U interface.
* **userPlaneAccessVirtualIpv4Addresses**: (string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"})[]: The virtual IP address(es) for the user plane on the access network in a High Availability (HA) system. In an HA deployment the access network router should be configured to forward traffic for this address to the control plane access interface on the active or standby node. In non-HA system this list should be omitted or empty.

## PccRuleConfiguration
### Properties
* **ruleName**: string {maxLength: 64, pattern: "^(?!(default|requested|service)$)[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required): The name of the rule. This must be unique within the parent service. You must not use any of the following reserved strings - `default`, `requested` or `service`.
* **rulePrecedence**: int {minValue: 0, maxValue: 255} (Required): A precedence value that is used to decide between data flow policy rules when identifying the QoS values to use for a particular SIM. A lower value means a higher priority. This value should be unique among all data flow policy rules configured in the mobile network.
* **ruleQosPolicy**: [PccRuleQosPolicy](#pccruleqospolicy): The QoS policy to use for packets matching this rule. If this field is null then the parent service will define the QoS settings.
* **serviceDataFlowTemplates**: [ServiceDataFlowTemplate](#servicedataflowtemplate)[] {minLength: 1, maxLength: 15} (Required): The set of data flow templates to use for this data flow policy rule.
* **trafficControl**: 'Blocked' | 'Enabled' | string: Determines whether flows that match this data flow policy rule are permitted.

## PccRuleQosPolicy
### Properties
* **5qi**: int {minValue: 1, maxValue: 127}: 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
* **allocationAndRetentionPriorityLevel**: int {minValue: 1, maxValue: 15}: QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **guaranteedBitRate**: [Ambr](#ambr): The guaranteed bit rate (GBR) for all service data flows that use this data flow policy rule. This is an optional setting. If you do not provide a value, there will be no GBR set for the data flow policy rule that uses this QoS definition.
* **maximumBitRate**: [Ambr](#ambr) (Required): The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service.
* **preemptionCapability**: 'MayPreempt' | 'NotPreempt' | string: QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **preemptionVulnerability**: 'NotPreemptable' | 'Preemptable' | string: QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.

## PinholeTimeouts
### Properties
* **icmp**: int {minValue: 1}: Pinhole timeout for ICMP pinholes in seconds. Default for ICMP Echo is 30 seconds.
* **tcp**: int {minValue: 1}: Pinhole timeout for TCP pinholes in seconds. Default for TCP is 3 minutes.
* **udp**: int {minValue: 1}: Pinhole timeout for UDP pinholes in seconds. Default for UDP is 30 seconds.

## Platform
### Properties
* **haUpgradesAvailable**: string[]: The list of versions to which a high availability upgrade from this version is supported.
* **maximumPlatformSoftwareVersion**: string: The maximum software version of the platform where this packet core version can be deployed.
* **minimumPlatformSoftwareVersion**: string: The minimum software version of the platform where this packet core version can be deployed.
* **obsoleteVersion**: 'NotObsolete' | 'Obsolete' | string: Indicates whether this version is obsoleted for this platform.
* **platformType**: '3P-AZURE-STACK-HCI' | 'AKS-HCI' | string: The platform type where this version can be deployed.
* **recommendedVersion**: 'NotRecommended' | 'Recommended' | string: Indicates whether this is the recommended version for this platform.
* **versionState**: 'Active' | 'Deprecated' | 'Preview' | 'Unknown' | 'Validating' | 'ValidationFailed' | string: The state of this packet core control plane version on this platform.

## PlatformConfiguration
### Properties
* **azureStackEdgeDevice**: [AzureStackEdgeDeviceResourceId](#azurestackedgedeviceresourceid): The Azure Stack Edge device where the packet core is deployed. If the device is part of a fault tolerant pair, either device in the pair can be specified.
* **azureStackEdgeDevices**: [AzureStackEdgeDeviceResourceId](#azurestackedgedeviceresourceid)[] (ReadOnly): The Azure Stack Edge devices where the packet core is deployed. If the packet core is deployed across multiple devices, all devices will appear in this list.
* **azureStackHciCluster**: [AzureStackHCIClusterResourceId](#azurestackhciclusterresourceid): The Azure Stack HCI cluster where the packet core is deployed.
* **connectedCluster**: [ConnectedClusterResourceId](#connectedclusterresourceid): Azure Arc connected cluster where the packet core is deployed.
* **customLocation**: [CustomLocationResourceId](#customlocationresourceid): Azure Arc custom location where the packet core is deployed.
* **type**: '3P-AZURE-STACK-HCI' | 'AKS-HCI' | string (Required): The platform type where packet core is deployed.

## PlmnId
### Properties
* **mcc**: string {pattern: "^\d{3}$"} (Required): Mobile country code (MCC).
* **mnc**: string {pattern: "^\d{2,3}$"} (Required): Mobile network code (MNC).

## PortRange
### Properties
* **maxPort**: int {minValue: 1024, maxValue: 65535}: The maximum port number
* **minPort**: int {minValue: 1024, maxValue: 65535}: The minimum port number

## PortReuseHoldTimes
### Properties
* **tcp**: int {minValue: 1}: Minimum time in seconds that will pass before a TCP port that was used by a closed pinhole can be reused. Default for TCP is 2 minutes.
* **udp**: int {minValue: 1}: Minimum time in seconds that will pass before a UDP port that was used by a closed pinhole can be reused. Default for UDP is 1 minute.

## PublicLandMobileNetwork
### Properties
* **homeNetworkPublicKeys**: [PublicLandMobileNetworkHomeNetworkPublicKeys](#publiclandmobilenetworkhomenetworkpublickeys): Configuration relating to SUPI concealment.
* **mcc**: string {pattern: "^\d{3}$"} (Required): Mobile country code (MCC).
* **mnc**: string {pattern: "^\d{2,3}$"} (Required): Mobile network code (MNC).

## PublicLandMobileNetworkHomeNetworkPublicKeys
### Properties
* **profileA**: [HomeNetworkPublicKey](#homenetworkpublickey)[]: This provides a mapping to identify which public key has been used for SUPI concealment using the Profile A Protection Scheme.
* **profileB**: [HomeNetworkPublicKey](#homenetworkpublickey)[]: This provides a mapping to identify which public key has been used for SUPI concealment using the Profile B Protection Scheme.

## QosPolicy
### Properties
* **5qi**: int {minValue: 1, maxValue: 127}: 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
* **allocationAndRetentionPriorityLevel**: int {minValue: 1, maxValue: 15}: QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **maximumBitRate**: [Ambr](#ambr) (Required): The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service.
* **preemptionCapability**: 'MayPreempt' | 'NotPreempt' | string: QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
* **preemptionVulnerability**: 'NotPreemptable' | 'Preemptable' | string: QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.

## RoutingInfoPropertiesFormat
### Properties
* **controlPlaneAccessRoutes**: [Ipv4Route](#ipv4route)[]: A list of IPv4 routes.
* **userPlaneAccessRoutes**: [Ipv4Route](#ipv4route)[]: A list of IPv4 routes.
* **userPlaneDataRoutes**: [UserPlaneDataRoutesItem](#userplanedataroutesitem)[]: A list of attached data networks and their IPv4 routes.

## ServiceDataFlowTemplate
### Properties
* **direction**: 'Bidirectional' | 'Downlink' | 'Uplink' | string (Required): The direction of this flow.
* **ports**: (string {pattern: "^([1-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])(-([1-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$"})[]: The port(s) to which UEs will connect for this flow. You can specify zero or more ports or port ranges. If you specify one or more ports or port ranges then you must specify a value other than `ip` in the `protocol` field. This is an optional setting. If you do not specify it then connections will be allowed on all ports. Port ranges must be specified as <FirstPort>-<LastPort>. For example: [`8080`, `8082-8085`].
* **protocol**: (string {pattern: "^(ip|[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"})[] {minLength: 1} (Required): A list of the allowed protocol(s) for this flow. If you want this flow to be able to use any protocol within the internet protocol suite, use the value `ip`. If you only want to allow a selection of protocols, you must use the corresponding IANA Assigned Internet Protocol Number for each protocol, as described in https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml. For example, for UDP, you must use 17. If you use the value `ip` then you must leave the field `port` unspecified.
* **remoteIpList**: (string {pattern: "^(any|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2])))$"})[] {minLength: 1} (Required): The remote IP address(es) to which UEs will connect for this flow. If you want to allow connections on any IP address, use the value `any`. Otherwise, you must provide each of the remote IP addresses to which the packet core instance will connect for this flow. You must provide each IP address in CIDR notation, including the netmask (for example, 192.0.2.54/24).
* **templateName**: string {maxLength: 64, pattern: "^(?!(default|requested|service)$)[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required): The name of the data flow template. This must be unique within the parent data flow policy rule. You must not use any of the following reserved strings - `default`, `requested` or `service`.

## ServicePropertiesFormat
### Properties
* **pccRules**: [PccRuleConfiguration](#pccruleconfiguration)[] {minLength: 1} (Required): The set of data flow policy rules that make up this service.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the service resource.
* **servicePrecedence**: int {minValue: 0, maxValue: 255} (Required): A precedence value that is used to decide between services when identifying the QoS values to use for a particular SIM. A lower value means a higher priority. This value should be unique among all services configured in the mobile network.
* **serviceQosPolicy**: [QosPolicy](#qospolicy): The QoS policy to use for packets matching this service. This can be overridden for particular flows using the ruleQosPolicy field in a PccRuleConfiguration. If this field is null then the UE's SIM policy will define the QoS settings.

## ServiceResourceId
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][eE][rR][vV][iI][cC][eE][sS]/[^/?#]+$"} (Required): Service resource ID.

## SignalingConfiguration
### Properties
* **nasEncryption**: ('NEA0/EEA0' | 'NEA1/EEA1' | 'NEA2/EEA2' | string)[] {minLength: 1, maxLength: 3}: An ordered list of NAS encryption algorithms, used to encrypt control plane traffic between the UE and packet core, in order from most to least preferred. If not specified, the packet core will use a built-in default ordering.
* **nasReroute**: [NASRerouteConfiguration](#nasrerouteconfiguration): Configuration enabling 4G NAS reroute.

## SimGroup
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity used to retrieve the encryption key from Azure key vault.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [SimGroupPropertiesFormat](#simgrouppropertiesformat) (Required): SIM group Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## SimGroupListResult
### Properties
* **nextLink**: string (ReadOnly): The URL to get the next set of results.
* **value**: [SimGroup](#simgroup)[]: A list of SIM groups in a resource group.

## SimGroupPropertiesFormat
### Properties
* **encryptionKey**: [KeyVaultKey](#keyvaultkey): A key to encrypt the SIM data that belongs to this SIM group.
* **mobileNetwork**: [MobileNetworkResourceId](#mobilenetworkresourceid): Mobile network that this SIM group belongs to. The mobile network must be in the same location as the SIM group.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the SIM group resource.

## SimPolicyPropertiesFormat
### Properties
* **defaultSlice**: [SliceResourceId](#sliceresourceid) (Required): The default slice to use if the UE does not explicitly specify it. This slice must exist in the `sliceConfigurations` map. The slice must be in the same location as the SIM policy.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the SIM policy resource.
* **registrationTimer**: int {minValue: 30}: UE periodic registration update timer (5G) or UE periodic tracking area update timer (4G), in seconds.
* **rfspIndex**: int {minValue: 1, maxValue: 256}: RAT/Frequency Selection Priority Index, defined in 3GPP TS 36.413. This is an optional setting and by default is unspecified.
* **siteProvisioningState**: [SiteProvisioning](#siteprovisioning) (ReadOnly): A dictionary of sites to the provisioning state of this SIM policy on that site.
* **sliceConfigurations**: [SliceConfiguration](#sliceconfiguration)[] {minLength: 1} (Required): The allowed slices and the settings to use for them. The list must not contain duplicate items and must contain at least one item.
* **ueAmbr**: [Ambr](#ambr) (Required): Aggregate maximum bit rate across all non-GBR QoS flows of all PDU sessions of a given UE. See 3GPP TS23.501 section 5.7.2.6 for a full description of the UE-AMBR.

## SimPolicyResourceId
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][iI][mM][pP][oO][lL][iI][cC][iI][eE][sS]/[^/?#]+$"} (Required): SIM policy resource ID.

## SimPropertiesFormat
### Properties
* **authenticationKey**: string {sensitive, pattern: "^[0-9a-fA-F]{32}$"} (WriteOnly): The Ki value for the SIM.
* **deviceType**: string: An optional free-form text field that can be used to record the device type this SIM is associated with, for example 'Video camera'. The Azure portal allows SIMs to be grouped and filtered based on this value.
* **integratedCircuitCardIdentifier**: string {pattern: "^[0-9]{10,20}$"}: The integrated circuit card ID (ICCID) for the SIM.
* **internationalMobileSubscriberIdentity**: string {pattern: "^[0-9]{5,15}$"} (Required): The international mobile subscriber identity (IMSI) for the SIM.
* **operatorKeyCode**: string {sensitive, pattern: "^[0-9a-fA-F]{32}$"} (WriteOnly): The Opc value for the SIM.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the SIM resource.
* **simPolicy**: [SimPolicyResourceId](#simpolicyresourceid): The SIM policy used by this SIM. The SIM policy must be in the same location as the SIM.
* **simState**: 'Disabled' | 'Enabled' | 'Invalid' | string (ReadOnly): The state of the SIM resource.
* **siteProvisioningState**: [SiteProvisioning](#siteprovisioning) (ReadOnly): A dictionary of sites to the provisioning state of this SIM on that site.
* **staticIpConfiguration**: [SimStaticIpProperties](#simstaticipproperties)[] {minLength: 1}: A list of static IP addresses assigned to this SIM. Each address is assigned at a defined network scope, made up of {attached data network, slice}.
* **vendorKeyFingerprint**: string (ReadOnly): The public key fingerprint of the SIM vendor who provided this SIM, if any.
* **vendorName**: string (ReadOnly): The name of the SIM vendor who provided this SIM, if any.

## SimStaticIpProperties
### Properties
* **attachedDataNetwork**: [AttachedDataNetworkResourceId](#attacheddatanetworkresourceid): The attached data network on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The attached data network must be in the same location as the SIM.
* **slice**: [SliceResourceId](#sliceresourceid): The network slice on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The slice must be in the same location as the SIM.
* **staticIp**: [SimStaticIpPropertiesStaticIp](#simstaticippropertiesstaticip): The static IP configuration for the SIM to use at the defined network scope.

## SimStaticIpPropertiesStaticIp
### Properties
* **ipv4Address**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"}: The IPv4 address assigned to the SIM at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attached data network.

## SitePropertiesFormat
### Properties
* **networkFunctions**: [SubResource](#subresource)[] (ReadOnly): An array of IDs of the network functions deployed in the site. Deleting the site will delete any network functions that are deployed in the site.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the site resource.

## SiteProvisioning
### Properties
### Additional Properties
* **Additional Properties Type**: 'Adding' | 'Deleting' | 'Failed' | 'NotApplicable' | 'Provisioned' | 'Updating' | string

## SiteProvisioning
### Properties
### Additional Properties
* **Additional Properties Type**: 'Adding' | 'Deleting' | 'Failed' | 'NotApplicable' | 'Provisioned' | 'Updating' | string

## SiteResourceId
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][iI][tT][eE][sS]/[^/?#]+$"} (Required): Site resource ID.

## SliceConfiguration
### Properties
* **dataNetworkConfigurations**: [DataNetworkConfiguration](#datanetworkconfiguration)[] {minLength: 1} (Required): The allowed data networks and the settings to use for them. The list must not contain duplicate items and must contain at least one item.
* **defaultDataNetwork**: [DataNetworkResourceId](#datanetworkresourceid) (Required): The default data network to use if the UE does not explicitly specify it. Configuration for this object must exist in the `dataNetworkConfigurations` map. The data network must be in the same location as the SIM policy.
* **slice**: [SliceResourceId](#sliceresourceid) (Required): A reference to the slice that these settings apply to. The slice must be in the same location as the SIM policy.

## SlicePropertiesFormat
### Properties
* **description**: string: An optional description for this network slice.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the network slice resource.
* **snssai**: [Snssai](#snssai) (Required): Single-network slice selection assistance information (S-NSSAI). Unique at the scope of a mobile network.

## SliceResourceId
### Properties
* **id**: string {pattern: "^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][lL][iI][cC][eE][sS]/[^/?#]+$"} (Required): Slice resource ID.

## Snssai
### Properties
* **sd**: string {pattern: "^[A-Fa-f0-9]{6}$"}: Slice differentiator (SD).
* **sst**: int {minValue: 0, maxValue: 255} (Required): Slice/service type (SST).

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UeConnectionInfo4G
### Properties
* **enbS1apId**: int {minValue: 0, maxValue: 16777215} (Required): eNodeB S1AP identifier
* **globalRanNodeId**: [GlobalRanNodeId](#globalrannodeid) (Required): Global RAN Node ID
* **lastActivityTime**: string: The timestamp of last activity of UE (UTC).
* **lastVisitedTai**: string: Last Visited TAI
* **locationInfo**: [UeLocationInfo](#uelocationinfo): UE Location Info properties
* **mmeS1apId**: int {minValue: 0, maxValue: 4294967295} (Required): MME S1AP identifier
* **perUeTnla**: string: Per-UE transport network layer association
* **rrcEstablishmentCause**: 'Emergency' | 'MobileOriginatedData' | 'MobileOriginatedSignaling' | 'MobileTerminatedData' | 'MobileTerminatedSignaling' | 'SMS' | string (Required): Radio connection establishment cause
* **ueState**: 'Connected' | 'Deregistered' | 'Detached' | 'Idle' | 'Unknown' | string (Required): State of the UE.
* **ueUsageSetting**: 'DataCentric' | 'VoiceCentric' | string: The UE's usage setting

## UeConnectionInfo5G
### Properties
* **allowedNssai**: [Snssai](#snssai)[] {maxLength: 8}: Allowed Network Slice Selection Assistance Information
* **amfUeNgapId**: int {minValue: 0} (Required): The AMF UE NGAP ID
* **globalRanNodeId**: [GlobalRanNodeId](#globalrannodeid) (Required): Global RAN Node ID
* **lastActivityTime**: string: The timestamp of last activity of UE (UTC).
* **lastVisitedTai**: string: Last Visited TAI
* **locationInfo**: [UeLocationInfo](#uelocationinfo): UE Location Info properties
* **perUeTnla**: string: Per-UE transport network layer association
* **ranUeNgapId**: int {minValue: 0, maxValue: 4294967295} (Required): The RAN UE NGAP ID
* **rrcEstablishmentCause**: 'Emergency' | 'MobileOriginatedData' | 'MobileOriginatedSignaling' | 'MobileTerminatedData' | 'MobileTerminatedSignaling' | 'SMS' | string (Required): Radio connection establishment cause
* **ueState**: 'Connected' | 'Deregistered' | 'Detached' | 'Idle' | 'Unknown' | string (Required): State of the UE.
* **ueUsageSetting**: 'DataCentric' | 'VoiceCentric' | string: The UE's usage setting

## UeInfo4GProperties
### Properties
* **connectionInfo**: [UeConnectionInfo4G](#ueconnectioninfo4g): UE Connection Info for 4G
* **guti**: [Guti4G](#guti4g) (Required): Globally Unique Temporary Identifier (4G)
* **imei**: string {pattern: "^[0-9]{15}$"}: International mobile equipment identity
* **imeisv**: string {pattern: "^[0-9]{16}$"}: International mobile equipment identity – software version
* **imsi**: string {pattern: "^[0-9]{5,15}$"} (Required): International mobile subscriber identifier
* **sessionInfo**: [UeSessionInfo4G](#uesessioninfo4g)[] {maxLength: 11}

## UeInfo5GProperties
### Properties
* **connectionInfo**: [UeConnectionInfo5G](#ueconnectioninfo5g): UE Connection Info for 5G.
* **fivegGuti**: [Guti5G](#guti5g) (Required): 5G GUTI
* **pei**: string {pattern: "^(imei-[0-9]{15}|imeisv-[0-9]{16}|.+)$"}: Permanent Equipment Identifier
* **sessionInfo**: [UeSessionInfo5G](#uesessioninfo5g)[] {maxLength: 15}
* **supi**: string {pattern: "^(imsi-[0-9]{5,15}|nai-.+|.+)$"} (Required): Subscription Permanent Identifier

## UeIpAddress
### Properties
* **ipV4Addr**: string {pattern: "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"}: IPv4 address.

## UeLocationInfo
### Properties
* **locationType**: string (Required): Location Type
* **plmn**: [PlmnId](#plmnid) (Required): PLMN Identifier
* **tac**: string {pattern: "(^[A-Fa-f0-9]{4}$)|(^[A-Fa-f0-9]{6}$)"} (Required): Type Allocation Code of UE

## UeQOSFlow
### Properties
* **fiveqi**: int {minValue: 0, maxValue: 255} (Required): 5G QoS Identifier.
* **gbr**: [Ambr](#ambr): Guaranteed Bit Rate
* **mbr**: [Ambr](#ambr): Maximum Bit Rate
* **qfi**: int {minValue: 0, maxValue: 63} (Required): Qos Flow Identifier

## UeSessionInfo4G
### Properties
* **apn**: string (Required): Access point name
* **ebi**: int {minValue: 5, maxValue: 15} (Required): EPS bearer identifier
* **pdnType**: 'IPV4' | string (Required): Packet Data Network Type
* **ueIpAddress**: [UeIpAddress](#ueipaddress) (Required): UE IP address

## UeSessionInfo5G
### Properties
* **ambr**: [Ambr](#ambr) (Required): Aggregate maximum bit rate.
* **dnn**: string (Required): Data network name
* **pdnType**: 'IPV4' | string (Required): Packet Data Network Type
* **pduSessionId**: int {minValue: 0, maxValue: 255} (Required): PDU session identifier
* **qosFlow**: [UeQOSFlow](#ueqosflow)[] (Required)
* **snssai**: [Snssai](#snssai) (Required): Single-network slice selection assistance information (S-NSSAI).
* **ueIpAddress**: [UeIpAddress](#ueipaddress) (Required): UE IP address

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserConsentConfiguration
### Properties
* **allowSupportTelemetryAccess**: bool: Allow Microsoft to access non-PII telemetry information from the packet core.

## UserPlaneDataRoutesItem
### Properties
* **attachedDataNetwork**: [AttachedDataNetworkResourceId](#attacheddatanetworkresourceid): Reference to an attached data network resource.
* **routes**: [Ipv4Route](#ipv4route)[]: A list of IPv4 routes.

