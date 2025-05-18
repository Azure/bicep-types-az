# Microsoft.AVS @ 2024-09-01

## Resource Microsoft.AVS/privateClouds@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateCloudProperties](#privatecloudproperties): The resource-specific properties for this resource.
* **sku**: [Sku](#sku) (Required): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AVS/privateClouds' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The availability zones.

## Resource Microsoft.AVS/privateClouds/addons@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AddonProperties](#addonproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/addons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/authorizations@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteAuthorizationProperties](#expressrouteauthorizationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/cloudLinks@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudLinkProperties](#cloudlinkproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/cloudLinks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/clusters@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): The resource-specific properties for this resource.
* **sku**: [Sku](#sku) (Required): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/clusters/datastores@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DatastoreProperties](#datastoreproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/clusters/datastores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/clusters/hosts@2024-09-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HostProperties](#hostproperties) (ReadOnly): The resource-specific properties for this resource.
* **sku**: [Sku](#sku) (ReadOnly): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/clusters/hosts' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): The availability zones.

## Resource Microsoft.AVS/privateClouds/clusters/placementPolicies@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PlacementPolicyProperties](#placementpolicyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/clusters/placementPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/clusters/virtualMachines@2024-09-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineProperties](#virtualmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/clusters/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/globalReachConnections@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GlobalReachConnectionProperties](#globalreachconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/globalReachConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/hcxEnterpriseSites@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HcxEnterpriseSiteProperties](#hcxenterprisesiteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/hcxEnterpriseSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/iscsiPaths@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [IscsiPathProperties](#iscsipathproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/iscsiPaths' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/provisionedNetworks@2024-09-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProvisionedNetworkProperties](#provisionednetworkproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/provisionedNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/pureStoragePolicies@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PureStoragePolicyProperties](#purestoragepolicyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/pureStoragePolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/scriptExecutions@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScriptExecutionProperties](#scriptexecutionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/scriptExecutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/scriptPackages@2024-09-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._@]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScriptPackageProperties](#scriptpackageproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/scriptPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/scriptPackages/scriptCmdlets@2024-09-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScriptCmdletProperties](#scriptcmdletproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/scriptPackages/scriptCmdlets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks@2024-09-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkProperties](#workloadnetworkproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkDhcpEntity](#workloadnetworkdhcpentity): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/dnsServices@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkDnsServiceProperties](#workloadnetworkdnsserviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dnsServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/dnsZones@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkDnsZoneProperties](#workloadnetworkdnszoneproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dnsZones' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/gateways@2024-09-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkGatewayProperties](#workloadnetworkgatewayproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkPortMirroringProperties](#workloadnetworkportmirroringproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/publicIPs@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkPublicIPProperties](#workloadnetworkpublicipproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/publicIPs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/segments@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkSegmentProperties](#workloadnetworksegmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/segments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/virtualMachines@2024-09-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkVirtualMachineProperties](#workloadnetworkvirtualmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/workloadNetworks/vmGroups@2024-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadNetworkVMGroupProperties](#workloadnetworkvmgroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/vmGroups' (ReadOnly, DeployTimeConstant): The resource type

## Function listAdminCredentials (Microsoft.AVS/privateClouds@2024-09-01)
* **Resource**: Microsoft.AVS/privateClouds
* **ApiVersion**: 2024-09-01
* **Output**: [AdminCredentials](#admincredentials)

## Function listZones (Microsoft.AVS/privateClouds/clusters@2024-09-01)
* **Resource**: Microsoft.AVS/privateClouds/clusters
* **ApiVersion**: 2024-09-01
* **Output**: [ClusterZoneList](#clusterzonelist)

## AddonProperties
* **Discriminator**: addonType

### Base Properties
* **provisioningState**: 'Building' | 'Canceled' | 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the addon provisioning

### AddonArcProperties
#### Properties
* **addonType**: 'Arc' (Required): Addon type
* **vCenter**: string: The VMware vCenter resource ID

### AddonHcxProperties
#### Properties
* **addonType**: 'HCX' (Required): Addon type
* **managementNetwork**: string: HCX management network.
* **offer**: string (Required): The HCX offer, example VMware MaaS Cloud Provider (Enterprise)
* **uplinkNetwork**: string: HCX uplink network

### AddonSrmProperties
#### Properties
* **addonType**: 'SRM' (Required): Addon type
* **licenseKey**: string: The Site Recovery Manager (SRM) license

### AddonVrProperties
#### Properties
* **addonType**: 'VR' (Required): Addon type
* **vrsCount**: int (Required): The vSphere Replication Server (VRS) count


## AdminCredentials
### Properties
* **nsxtPassword**: string {sensitive} (ReadOnly): NSX-T Manager password
* **nsxtUsername**: string (ReadOnly): NSX-T Manager username
* **vcenterPassword**: string {sensitive} (ReadOnly): vCenter admin password
* **vcenterUsername**: string (ReadOnly): vCenter admin username

## AvailabilityProperties
### Properties
* **secondaryZone**: int: The secondary availability zone for the private cloud
* **strategy**: 'DualZone' | 'SingleZone' | string: The availability strategy for the private cloud
* **zone**: int: The primary availability zone for the private cloud

## Circuit
### Properties
* **expressRouteID**: string (ReadOnly): Identifier of the ExpressRoute Circuit (Microsoft Colo only)
* **expressRoutePrivatePeeringID**: string (ReadOnly): ExpressRoute Circuit private peering identifier
* **primarySubnet**: string (ReadOnly): CIDR of primary subnet
* **secondarySubnet**: string (ReadOnly): CIDR of secondary subnet

## CloudLinkProperties
### Properties
* **linkedCloud**: string: Identifier of the other private cloud participating in the link.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **status**: 'Active' | 'Building' | 'Deleting' | 'Disconnected' | 'Failed' | string (ReadOnly): The state of the cloud link.

## ClusterProperties
### Properties
* **clusterId**: int (ReadOnly): The identity
* **clusterSize**: int: The cluster size
* **hosts**: string[]: The hosts
* **provisioningState**: 'Canceled' | 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the cluster provisioning
* **vsanDatastoreName**: string: Name of the vsan datastore associated with the cluster

## ClusterZone
### Properties
* **hosts**: string[] (ReadOnly): List of hosts belonging to the availability zone in a cluster
* **zone**: string (ReadOnly): Availability zone identifier

## ClusterZoneList
### Properties
* **zones**: [ClusterZone](#clusterzone)[]: Zone and associated hosts info

## DatastoreProperties
### Properties
* **diskPoolVolume**: [DiskPoolVolume](#diskpoolvolume): An iSCSI volume
* **elasticSanVolume**: [ElasticSanVolume](#elasticsanvolume): An Elastic SAN volume
* **netAppVolume**: [NetAppVolume](#netappvolume): An Azure NetApp Files volume
* **provisioningState**: 'Canceled' | 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the datastore provisioning
* **pureStorageVolume**: [PureStorageVolume](#purestoragevolume): A Pure Storage volume
* **status**: 'Accessible' | 'Attached' | 'DeadOrError' | 'Detached' | 'Inaccessible' | 'LostCommunication' | 'Unknown' | string (ReadOnly): The operational status of the datastore

## DiskPoolVolume
### Properties
* **lunName**: string (Required): Name of the LUN to be used for datastore
* **mountOption**: 'ATTACH' | 'MOUNT' | string: Mode that describes whether the LUN has to be mounted as a datastore or
attached as a LUN
* **path**: string (ReadOnly): Device path
* **targetId**: string (Required): Azure resource ID of the iSCSI target

## ElasticSanVolume
### Properties
* **targetId**: string (Required): Azure resource ID of the Elastic SAN Volume

## Encryption
### Properties
* **keyVaultProperties**: [EncryptionKeyVaultProperties](#encryptionkeyvaultproperties): The key vault where the encryption key is stored
* **status**: 'Disabled' | 'Enabled' | string: Status of customer managed encryption key

## EncryptionKeyVaultProperties
### Properties
* **autoDetectedKeyVersion**: string (ReadOnly): The auto-detected version of the key if versionType is auto-detected.
* **keyName**: string: The name of the key.
* **keyState**: 'AccessDenied' | 'Connected' | string (ReadOnly): The state of key provided
* **keyVaultUrl**: string: The URL of the vault.
* **keyVersion**: string: The version of the key.
* **versionType**: 'AutoDetected' | 'Fixed' | string (ReadOnly): Property of the key if user provided or auto detected

## Endpoints
### Properties
* **hcxCloudManager**: string (ReadOnly): Endpoint FQDN for the HCX Cloud Manager
* **hcxCloudManagerIp**: string (ReadOnly): Endpoint IP for the HCX Cloud Manager
* **nsxtManager**: string (ReadOnly): Endpoint FQDN for the NSX-T Data Center manager
* **nsxtManagerIp**: string (ReadOnly): Endpoint IP for the NSX-T Data Center manager
* **vcenterIp**: string (ReadOnly): Endpoint IP for Virtual Center Server Appliance
* **vcsa**: string (ReadOnly): Endpoint FQDN for Virtual Center Server Appliance

## ExpressRouteAuthorizationProperties
### Properties
* **expressRouteAuthorizationId**: string (ReadOnly): The ID of the ExpressRoute Circuit Authorization
* **expressRouteAuthorizationKey**: string (ReadOnly): The key of the ExpressRoute Circuit Authorization
* **expressRouteId**: string: The ID of the ExpressRoute Circuit
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the ExpressRoute Circuit Authorization provisioning

## GlobalReachConnectionProperties
### Properties
* **addressPrefix**: string (ReadOnly): The network used for global reach carved out from the original network block
provided for the private cloud
* **authorizationKey**: string: Authorization key from the peer express route used for the global reach
connection
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' | string (ReadOnly): The connection status of the global reach connection
* **expressRouteId**: string: The ID of the Private Cloud's ExpressRoute Circuit that is participating in the
global reach connection
* **peerExpressRouteCircuit**: string: Identifier of the ExpressRoute Circuit to peer with in the global reach
connection
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the  ExpressRoute Circuit Authorization provisioning

## HcxEnterpriseSiteProperties
### Properties
* **activationKey**: string (ReadOnly): The activation key
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **status**: 'Available' | 'Consumed' | 'Deactivated' | 'Deleted' | string (ReadOnly): The status of the HCX Enterprise Site

## HostProperties
* **Discriminator**: kind

### Base Properties
* **displayName**: string: Display name of the host in VMware vCenter.
* **faultDomain**: string (ReadOnly)
* **fqdn**: string {minLength: 1, maxLength: 255} (ReadOnly): Fully qualified domain name of the host.
* **maintenance**: 'Replacement' | 'Upgrade' | string: If provided, the host is in maintenance. The value is the reason for maintenance.
* **moRefId**: string (ReadOnly): vCenter managed object reference ID of the host.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The state of the host provisioning.

### GeneralHostProperties
#### Properties
* **kind**: 'General' (Required): The kind of host

### SpecializedHostProperties
#### Properties
* **kind**: 'Specialized' (Required): The kind of host


## IdentitySource
### Properties
* **alias**: string: The domain's NetBIOS name
* **baseGroupDN**: string: The base distinguished name for groups
* **baseUserDN**: string: The base distinguished name for users
* **domain**: string: The domain's DNS name
* **name**: string: The name of the identity source
* **password**: string {sensitive}: The password of the Active Directory user with a minimum of read-only access to
Base DN for users and groups.
* **primaryServer**: string: Primary server URL
* **secondaryServer**: string: Secondary server URL
* **ssl**: 'Disabled' | 'Enabled' | string: Protect LDAP communication using SSL certificate (LDAPS)
* **username**: string: The ID of an Active Directory user with a minimum of read-only access to Base
DN for users and group

## IscsiPathProperties
### Properties
* **networkBlock**: string (Required): CIDR Block for iSCSI path.
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the iSCSI path provisioning

## ManagementCluster
### Properties
* **clusterId**: int (ReadOnly): The identity
* **clusterSize**: int: The cluster size
* **hosts**: string[]: The hosts
* **provisioningState**: 'Canceled' | 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the cluster provisioning
* **vsanDatastoreName**: string: Name of the vsan datastore associated with the cluster

## NetAppVolume
### Properties
* **id**: string (Required): Azure resource ID of the NetApp volume

## PlacementPolicyProperties
* **Discriminator**: type

### Base Properties
* **displayName**: string: Display name of the placement policy
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **state**: 'Disabled' | 'Enabled' | string: Whether the placement policy is enabled or disabled

### VmHostPlacementPolicyProperties
#### Properties
* **affinityStrength**: 'Must' | 'Should' | string: vm-host placement policy affinity strength (should/must)
* **affinityType**: 'Affinity' | 'AntiAffinity' | string (Required): placement policy affinity type
* **azureHybridBenefitType**: 'None' | 'SqlHost' | string: placement policy azure hybrid benefit opt-in type
* **hostMembers**: string[] (Required): Host members list
* **type**: 'VmHost' (Required): Placement Policy type
* **vmMembers**: string[] (Required): Virtual machine members list

### VmPlacementPolicyProperties
#### Properties
* **affinityType**: 'Affinity' | 'AntiAffinity' | string (Required): placement policy affinity type
* **type**: 'VmVm' (Required): Placement Policy type
* **vmMembers**: string[] (Required): Virtual machine members list


## PrivateCloudProperties
### Properties
* **availability**: [AvailabilityProperties](#availabilityproperties): Properties describing how the cloud is distributed across availability zones
* **circuit**: [Circuit](#circuit): An ExpressRoute Circuit
* **dnsZoneType**: 'Private' | 'Public' | string: The type of DNS zone to use.
* **encryption**: [Encryption](#encryption): Customer managed key encryption, can be enabled or disabled
* **endpoints**: [Endpoints](#endpoints) (ReadOnly): The endpoints
* **extendedNetworkBlocks**: string[]: Array of additional networks noncontiguous with networkBlock. Networks must be
unique and non-overlapping across VNet in your subscription, on-premise, and
this privateCloud networkBlock attribute. Make sure the CIDR format conforms to
(A.B.C.D/X).
* **externalCloudLinks**: string[] (ReadOnly): Array of cloud link IDs from other clouds that connect to this one
* **identitySources**: [IdentitySource](#identitysource)[]: vCenter Single Sign On Identity Sources
* **internet**: 'Disabled' | 'Enabled' | string: Connectivity to internet is enabled or disabled
* **managementCluster**: [ManagementCluster](#managementcluster) (Required): The default cluster used for management
* **managementNetwork**: string (ReadOnly): Network used to access vCenter Server and NSX-T Manager
* **networkBlock**: string (Required): The block of addresses should be unique across VNet in your subscription as
well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where
A,B,C,D are between 0 and 255, and X is between 0 and 22
* **nsxPublicIpQuotaRaised**: 'Disabled' | 'Enabled' | string (ReadOnly): Flag to indicate whether the private cloud has the quota for provisioned NSX
Public IP count raised from 64 to 1024
* **nsxtCertificateThumbprint**: string (ReadOnly): Thumbprint of the NSX-T Manager SSL certificate
* **nsxtPassword**: string {sensitive}: Optionally, set the NSX-T Manager password when the private cloud is created
* **provisioningNetwork**: string (ReadOnly): Used for virtual machine cold migration, cloning, and snapshot migration
* **provisioningState**: 'Building' | 'Canceled' | 'Cancelled' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **secondaryCircuit**: [Circuit](#circuit): A secondary expressRoute circuit from a separate AZ. Only present in a
stretched private cloud
* **vcenterCertificateThumbprint**: string (ReadOnly): Thumbprint of the vCenter Server SSL certificate
* **vcenterPassword**: string {sensitive}: Optionally, set the vCenter admin password when the private cloud is created
* **virtualNetworkId**: string: Azure resource ID of the virtual network
* **vmotionNetwork**: string (ReadOnly): Used for live migration of virtual machines

## ProvisionedNetworkProperties
### Properties
* **addressPrefix**: string (ReadOnly): The address prefixes of the provisioned network in CIDR notation.
* **networkType**: 'esxManagement' | 'esxReplication' | 'hcxManagement' | 'hcxUplink' | 'vcenterManagement' | 'vmotion' | 'vsan' | string (ReadOnly): The type of network provisioned.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.

## PureStoragePolicyProperties
### Properties
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the Pure Storage Policy Based Management policy provisioning
* **storagePolicyDefinition**: string (Required): Definition of a Pure Storage Policy Based Management policy
* **storagePoolId**: string (Required): Azure resource ID of the Pure Storage Pool associated with the storage policy

## PureStorageVolume
### Properties
* **sizeGb**: int (Required): Volume size to be used to create a Virtual Volumes (vVols) datastore
* **storagePoolId**: string (Required): Azure resource ID of the Pure Storage Pool

## ScriptCmdletProperties
### Properties
* **audience**: 'Any' | 'Automation' | string (ReadOnly): Specifies whether a script cmdlet is intended to be invoked only through automation or visible to customers
* **description**: string (ReadOnly): Description of the scripts functionality
* **parameters**: [ScriptParameter](#scriptparameter)[] (ReadOnly): Parameters the script will accept
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **timeout**: string (ReadOnly): Recommended time limit for execution

## ScriptExecutionParameter
* **Discriminator**: type

### Base Properties
* **name**: string (Required): The parameter name

### PSCredentialExecutionParameter
#### Properties
* **password**: string {sensitive}: password for login
* **type**: 'Credential' (Required): script execution parameter type
* **username**: string: username for login

### ScriptSecureStringExecutionParameter
#### Properties
* **secureValue**: string {sensitive}: A secure value for the passed parameter, not to be stored in logs
* **type**: 'SecureValue' (Required): script execution parameter type

### ScriptStringExecutionParameter
#### Properties
* **type**: 'Value' (Required): script execution parameter type
* **value**: string: The value for the passed parameter


## ScriptExecutionProperties
### Properties
* **errors**: string[] (ReadOnly): Standard error output stream from the powershell execution
* **failureReason**: string: Error message if the script was able to run, but if the script itself had
errors or powershell threw an exception
* **finishedAt**: string (ReadOnly): Time the script execution was finished
* **hiddenParameters**: [ScriptExecutionParameter](#scriptexecutionparameter)[]: Parameters that will be hidden/not visible to ARM, such as passwords and
credentials
* **information**: string[] (ReadOnly): Standard information out stream from the powershell execution
* **namedOutputs**: [ScriptExecutionPropertiesNamedOutputs](#scriptexecutionpropertiesnamedoutputs): User-defined dictionary.
* **output**: string[]: Standard output stream from the powershell execution
* **parameters**: [ScriptExecutionParameter](#scriptexecutionparameter)[]: Parameters the script will accept
* **provisioningState**: 'Canceled' | 'Cancelled' | 'Cancelling' | 'Deleting' | 'Failed' | 'Pending' | 'Running' | 'Succeeded' | string (ReadOnly): The state of the script execution resource
* **retention**: string: Time to live for the resource. If not provided, will be available for 60 days
* **scriptCmdletId**: string: A reference to the script cmdlet resource if user is running a AVS script
* **startedAt**: string (ReadOnly): Time the script execution was started
* **submittedAt**: string (ReadOnly): Time the script execution was submitted
* **timeout**: string (Required): Time limit for execution
* **warnings**: string[] (ReadOnly): Standard warning out stream from the powershell execution

## ScriptExecutionPropertiesNamedOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ScriptPackageProperties
### Properties
* **company**: string (ReadOnly): Company that created and supports the package
* **description**: string (ReadOnly): User friendly description of the package
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **uri**: string (ReadOnly): Link to support by the package vendor
* **version**: string (ReadOnly): Module version

## ScriptParameter
### Properties
* **description**: string (ReadOnly): User friendly description of the parameter
* **name**: string: The parameter name that the script will expect a parameter value for
* **optional**: 'Optional' | 'Required' | string (ReadOnly): Is this parameter required or optional
* **type**: 'Bool' | 'Credential' | 'Float' | 'Int' | 'SecureString' | 'String' | string (ReadOnly): The type of parameter the script is expecting. psCredential is a
PSCredentialObject
* **visibility**: 'Hidden' | 'Visible' | string (ReadOnly): Should this parameter be visible to arm and passed in the parameters argument
when executing

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. E.g. P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## SystemAssignedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | string (Required): Type of managed service identity (either system assigned, or none).

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

## VirtualMachineProperties
### Properties
* **displayName**: string (ReadOnly): Display name of the VM.
* **folderPath**: string (ReadOnly): Path to virtual machine's folder starting from datacenter virtual machine folder
* **moRefId**: string (ReadOnly): vCenter managed object reference ID of the virtual machine
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **restrictMovement**: 'Disabled' | 'Enabled' | string (ReadOnly): Whether VM DRS-driven movement is restricted (enabled) or not (disabled)

## WorkloadNetworkDhcpEntity
* **Discriminator**: dhcpType

### Base Properties
* **displayName**: string: Display name of the DHCP entity.
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **segments**: string[] (ReadOnly): NSX Segments consuming DHCP.

### WorkloadNetworkDhcpRelay
#### Properties
* **dhcpType**: 'RELAY' (Required): Type of DHCP: SERVER or RELAY.
* **serverAddresses**: string[] {minLength: 1, maxLength: 3}: DHCP Relay Addresses. Max 3.

### WorkloadNetworkDhcpServer
#### Properties
* **dhcpType**: 'SERVER' (Required): Type of DHCP: SERVER or RELAY.
* **leaseTime**: int: DHCP Server Lease Time.
* **serverAddress**: string: DHCP Server Address.


## WorkloadNetworkDnsServiceProperties
### Properties
* **defaultDnsZone**: string: Default DNS zone of the DNS Service.
* **displayName**: string: Display name of the DNS Service.
* **dnsServiceIp**: string: DNS service IP of the DNS Service.
* **fqdnZones**: string[]: FQDN zones of the DNS Service.
* **logLevel**: 'DEBUG' | 'ERROR' | 'FATAL' | 'INFO' | 'WARNING' | string: DNS Service log level.
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **status**: 'FAILURE' | 'SUCCESS' | string (ReadOnly): DNS Service status.

## WorkloadNetworkDnsZoneProperties
### Properties
* **displayName**: string: Display name of the DNS Zone.
* **dnsServerIps**: string[]: DNS Server IP array of the DNS Zone.
* **dnsServices**: int: Number of DNS Services using the DNS zone.
* **domain**: string[]: Domain names of the DNS Zone.
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **sourceIp**: string: Source IP of the DNS Zone.

## WorkloadNetworkGatewayProperties
### Properties
* **displayName**: string: Display name of the DHCP entity.
* **path**: string (ReadOnly): NSX Gateway Path.
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## WorkloadNetworkPortMirroringProperties
### Properties
* **destination**: string: Destination VM Group.
* **direction**: 'BIDIRECTIONAL' | 'EGRESS' | 'INGRESS' | string: Direction of port mirroring profile.
* **displayName**: string: Display name of the port mirroring profile.
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **source**: string: Source VM Group.
* **status**: 'FAILURE' | 'SUCCESS' | string (ReadOnly): Port Mirroring Status.

## WorkloadNetworkProperties
### Properties
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## WorkloadNetworkPublicIPProperties
### Properties
* **displayName**: string: Display name of the Public IP Block.
* **numberOfPublicIPs**: int: Number of Public IPs requested.
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **publicIPBlock**: string (ReadOnly): CIDR Block of the Public IP Block.

## WorkloadNetworkSegmentPortVif
### Properties
* **portName**: string: Name of port or VIF attached to segment.

## WorkloadNetworkSegmentProperties
### Properties
* **connectedGateway**: string: Gateway which to connect segment to.
* **displayName**: string: Display name of the segment.
* **portVif**: [WorkloadNetworkSegmentPortVif](#workloadnetworksegmentportvif)[] (ReadOnly): Port Vif which segment is associated with.
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **status**: 'FAILURE' | 'SUCCESS' | string (ReadOnly): Segment status.
* **subnet**: [WorkloadNetworkSegmentSubnet](#workloadnetworksegmentsubnet): Subnet which to connect segment to.

## WorkloadNetworkSegmentSubnet
### Properties
* **dhcpRanges**: string[]: DHCP Range assigned for subnet.
* **gatewayAddress**: string: Gateway address.

## WorkloadNetworkVirtualMachineProperties
### Properties
* **displayName**: string: Display name of the VM.
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **vmType**: 'EDGE' | 'REGULAR' | 'SERVICE' | string (ReadOnly): Virtual machine type.

## WorkloadNetworkVMGroupProperties
### Properties
* **displayName**: string: Display name of the VM group.
* **members**: string[]: Virtual machine members of this group.
* **provisioningState**: 'Building' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **revision**: int: NSX revision number.
* **status**: 'FAILURE' | 'SUCCESS' | string (ReadOnly): VM Group status.

