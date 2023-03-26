# Microsoft.NetworkCloud @ 2022-12-12-preview

## Resource Microsoft.NetworkCloud/bareMetalMachines@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BareMetalMachineProperties](#baremetalmachineproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/bareMetalMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/cloudServicesNetworks@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudServicesNetworkProperties](#cloudservicesnetworkproperties): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/cloudServicesNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/clusterManagers@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterManagerProperties](#clustermanagerproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/clusterManagers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/clusters@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster manager associated with the cluster.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/clusters/bareMetalMachineKeySets@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BareMetalMachineKeySetProperties](#baremetalmachinekeysetproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/clusters/bareMetalMachineKeySets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/clusters/bmcKeySets@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BmcKeySetProperties](#bmckeysetproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/clusters/bmcKeySets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/clusters/metricsConfigurations@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterMetricsConfigurationProperties](#clustermetricsconfigurationproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/clusters/metricsConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/defaultCniNetworks@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DefaultCniNetworkProperties](#defaultcninetworkproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/defaultCniNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/hybridAksClusters@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridAksClusterProperties](#hybridaksclusterproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/hybridAksClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/l2Networks@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [L2NetworkProperties](#l2networkproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/l2Networks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/l3Networks@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [L3NetworkProperties](#l3networkproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/l3Networks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/racks@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RackProperties](#rackproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/racks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/rackSkus@2022-12-12-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RackSkuProperties](#rackskuproperties) (ReadOnly): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetworkCloud/rackSkus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/storageAppliances@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageApplianceProperties](#storageapplianceproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/storageAppliances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/trunkedNetworks@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TrunkedNetworkProperties](#trunkednetworkproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/trunkedNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/virtualMachines@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineProperties](#virtualmachineproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/virtualMachines/consoles@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster manager associated with the cluster this virtual machine is created on.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConsoleProperties](#consoleproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/virtualMachines/consoles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/volumes@2022-12-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/volumes' (ReadOnly, DeployTimeConstant): The resource type

## AdministrativeCredentials
### Properties
* **password**: string (Required): The password of the administrator of the device used during initialization.
* **username**: string (Required): The username of the administrator of the device used during initialization.

## BareMetalMachineConfigurationData
### Properties
* **bmcConnectionString**: string (ReadOnly): The connection string for the baseboard management controller including IP address and protocol.
* **bmcCredentials**: [AdministrativeCredentials](#administrativecredentials) (Required): The credentials of the baseboard management controller on this bare metal machine.
* **bmcMacAddress**: string (Required): The MAC address of the BMC for this machine.
* **bootMacAddress**: string (Required): The MAC address associated with the PXE NIC card.
* **machineDetails**: string: The free-form additional information about the machine, e.g. an asset tag.
* **machineName**: string: The user-provided name for the bare metal machine created from this specification.
If not provided, the machine name will be generated programmatically.
* **rackSlot**: int (Required): The slot the physical machine is in the rack based on the BOM configuration.
* **serialNumber**: string (Required): The serial number of the machine. Hardware suppliers may use an alternate value. For example, service tag.

## BareMetalMachineKeySetProperties
### Properties
* **azureGroupId**: string (Required): The object ID of Azure Active Directory group that all users in the list must be in for access to be granted. Users that are not in the group will not have access.
* **detailedStatus**: 'AllActive' | 'AllInvalid' | 'SomeInvalid' | 'Validating' | string (ReadOnly): The more detailed status of the key set.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **expiration**: string (Required): The date and time after which the users in this key set will be removed from the bare metal machines.
* **jumpHostsAllowed**: string[] (Required): The list of IP addresses of jump hosts with management network access from which a login will be allowed for the users.
* **lastValidation**: string (ReadOnly): The last time this key set was validated.
* **osGroupName**: string: The name of the group that users will be assigned to on the operating system of the machines.
* **privilegeLevel**: 'Standard' | 'Superuser' | string (Required): The access level allowed for the users in this key set.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the bare metal machine key set.
* **userList**: [KeySetUser](#keysetuser)[] (Required): The unique list of permitted users.
* **userListStatus**: [KeySetUserStatus](#keysetuserstatus)[] (ReadOnly): The status evaluation of each user.

## BareMetalMachineProperties
### Properties
* **bmcConnectionString**: string (Required): The connection string for the baseboard management controller including IP address and protocol.
* **bmcCredentials**: [AdministrativeCredentials](#administrativecredentials) (Required): The credentials of the baseboard management controller on this bare metal machine.
* **bmcMacAddress**: string (Required): The MAC address of the BMC device.
* **bootMacAddress**: string (Required): The MAC address of a NIC connected to the PXE network.
* **clusterId**: string (ReadOnly): The resource ID of the cluster this bare metal machine is associated with.
* **cordonStatus**: 'Cordoned' | 'Uncordoned' | string (ReadOnly): The cordon status of the bare metal machine.
* **detailedStatus**: 'Available' | 'Deprovisioning' | 'Error' | 'Preparing' | 'Provisioned' | 'Provisioning' | string (ReadOnly): The more detailed status of the bare metal machine.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **hardwareInventory**: [HardwareInventory](#hardwareinventory) (ReadOnly): The hardware inventory, including information acquired from the model/sku information and from the ironic inspector.
* **hardwareValidationStatus**: [HardwareValidationStatus](#hardwarevalidationstatus) (ReadOnly): The details of the latest hardware validation performed for this bare metal machine.
* **hybridAksClustersAssociatedIds**: string[] (ReadOnly): The list of the resource IDs for the HybridAksClusters that have nodes hosted on this bare metal machine.
* **kubernetesNodeName**: string (ReadOnly): The name of this machine represented by the host object in the Cluster's Kubernetes control plane.
* **kubernetesVersion**: string (ReadOnly): The version of Kubernetes running on this machine.
* **machineDetails**: string (Required): The custom details provided by the customer.
* **machineName**: string (Required): The OS-level hostname assigned to this machine.
* **machineSkuId**: string (Required): The unique internal identifier of the bare metal machine SKU.
* **oamIpv4Address**: string (ReadOnly): The IPv4 address that is assigned to the bare metal machine during the cluster deployment.
* **oamIpv6Address**: string (ReadOnly): The IPv6 address that is assigned to the bare metal machine during the cluster deployment.
* **osImage**: string (ReadOnly): The image that is currently provisioned to the OS disk.
* **powerState**: 'Off' | 'On' | string (ReadOnly): The power state derived from the baseboard management controller.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the bare metal machine.
* **rackId**: string (Required): The resource ID of the rack where this bare metal machine resides.
* **rackSlot**: int (Required): The rack slot in which this bare metal machine is located, ordered from the bottom up i.e. the lowest slot is 1.
* **readyState**: 'False' | 'True' | string (ReadOnly): The indicator of whether the bare metal machine is ready to receive workloads.
* **serialNumber**: string (Required): The serial number of the bare metal machine.
* **serviceTag**: string (ReadOnly): The discovered value of the machine's service tag.
* **virtualMachinesAssociatedIds**: string[] (ReadOnly): The list of the resource IDs for the VirtualMachines that are hosted on this bare metal machine.

## BgpPeer
### Properties
* **asNumber**: int (Required): The ASN (Autonomous System Number) of the BGP peer.
* **password**: string (WriteOnly): The password for this peering neighbor. It defaults to no password if not specified.
* **peerIp**: string (Required): The IPv4 or IPv6 address to peer with the associated CNI Network. The IP version type will drive a peering with the same version type from the Default CNI Network. For example, IPv4 to IPv4 or IPv6 to IPv6.

## BmcKeySetProperties
### Properties
* **azureGroupId**: string (Required): The object ID of Azure Active Directory group that all users in the list must be in for access to be granted. Users that are not in the group will not have access.
* **detailedStatus**: 'AllActive' | 'AllInvalid' | 'SomeInvalid' | 'Validating' | string (ReadOnly): The more detailed status of the key set.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **expiration**: string (Required): The date and time after which the users in this key set will be removed from the baseboard management controllers.
* **lastValidation**: string (ReadOnly): The last time this key set was validated.
* **privilegeLevel**: 'Administrator' | 'ReadOnly' | string (Required): The access level allowed for the users in this key set.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the baseboard management controller key set.
* **userList**: [KeySetUser](#keysetuser)[] (Required): The unique list of permitted users.
* **userListStatus**: [KeySetUserStatus](#keysetuserstatus)[] (ReadOnly): The status evaluation of each user.

## CloudServicesNetworkProperties
### Properties
* **additionalEgressEndpoints**: [EgressEndpoint](#egressendpoint)[]: The list of egress endpoints. This allows for connection from a Hybrid AKS cluster to the specified endpoint.
* **clusterId**: string (ReadOnly): The resource ID of the Network Cloud cluster this cloud services network is associated with.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the cloud services network.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **enableDefaultEgressEndpoints**: 'False' | 'True' | string: The indicator of whether the platform default endpoints are allowed for the egress traffic.
* **enabledEgressEndpoints**: [EgressEndpoint](#egressendpoint)[] (ReadOnly): The full list of additional and default egress endpoints that are currently enabled.
* **hybridAksClustersAssociatedIds**: string[] (ReadOnly): The list of Hybrid AKS cluster resource IDs that are associated with this cloud services network.
* **interfaceName**: string (ReadOnly): The name of the interface that will be present in the virtual machine to represent this network.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the cloud services network.
* **virtualMachinesAssociatedIds**: string[] (ReadOnly): The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this cloud services network.

## ClusterAvailableUpgradeVersion
### Properties
* **controlImpact**: 'False' | 'True' | string (ReadOnly): The indicator of whether the control plane will be impacted during the upgrade.
* **expectedDuration**: string (ReadOnly): The expected duration needed for this upgrade.
* **impactDescription**: string (ReadOnly): The impact description including the specific details and release notes.
* **supportExpiryDate**: string (ReadOnly): The last date the version of the platform is supported.
* **targetClusterVersion**: string (ReadOnly): The target version this cluster will be upgraded to.
* **workloadImpact**: 'False' | 'True' | string (ReadOnly): The indicator of whether the workload will be impacted during the upgrade.

## ClusterAvailableVersion
### Properties
* **supportExpiryDate**: string (ReadOnly): The last date the version of the platform is supported.
* **targetClusterVersion**: string (ReadOnly): The version of the cluster to be deployed.

## ClusterCapacity
### Properties
* **availableApplianceStorageGB**: int: The remaining appliance-based storage in GB available for workload use.
* **availableCoreCount**: int: The remaining number of cores that are available in this cluster for workload use.
* **availableHostStorageGB**: int: The remaining machine or host-based storage in GB available for workload use.
* **availableMemoryGB**: int: The remaining memory in GB that are available in this cluster for workload use.
* **totalApplianceStorageGB**: int: The total appliance-based storage in GB supported by this cluster for workload use.
* **totalCoreCount**: int: The total number of cores that are supported by this cluster for workload use.
* **totalHostStorageGB**: int: The total machine or host-based storage in GB supported by this cluster for workload use.
* **totalMemoryGB**: int: The total memory supported by this cluster for workload use.

## ClusterManagerProperties
### Properties
* **analyticsWorkspaceId**: string: The resource ID of the Log Analytics workspace that is used for the logs collection.
* **availabilityZones**: string[]: Field deprecated, this value will no longer influence the cluster manager allocation process and will be removed in a future version. The Azure availability zones within the region that will be used to support the cluster manager resource.
* **clusterVersions**: [ClusterAvailableVersion](#clusteravailableversion)[] (ReadOnly): The list of the cluster versions the manager supports. It is used as input in clusterVersion property of a cluster resource.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | 'ProvisioningFailed' | 'UpdateFailed' | 'Updating' | string (ReadOnly): The detailed status that provides additional information about the cluster manager.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **fabricControllerId**: string (Required): The resource ID of the fabric controller that has one to one mapping with the cluster manager.
* **managedResourceGroupConfiguration**: [ManagedResourceGroupConfiguration](#managedresourcegroupconfiguration): The configuration of the managed resource group associated with the resource.
* **managerExtendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): The extended location (custom location) that represents the cluster manager's control plane location. This extended location is used when creating cluster and rack manifest resources.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the cluster manager.
* **vmSize**: string: Field deprecated, this value will no longer influence the cluster manager allocation process and will be removed in a future version. The size of the Azure virtual machines to use for hosting the cluster manager resource.

## ClusterMetricsConfigurationProperties
### Properties
* **collectionInterval**: int (Required): The interval in minutes by which metrics will be collected.
* **detailedStatus**: 'Applied' | 'Error' | 'Processing' | string (ReadOnly): The more detailed status of the metrics configuration.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **disabledMetrics**: string[] (ReadOnly): The list of metrics that are available for the cluster but disabled at the moment.
* **enabledMetrics**: string[]: The list of metric names that have been chosen to be enabled in addition to the core set of enabled metrics.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the metrics configuration.

## ClusterProperties
### Properties
* **aggregatorOrSingleRackDefinition**: [RackDefinition](#rackdefinition) (Required): The rack definition that is intended to reflect only a single rack in a single rack cluster, or an aggregator rack in a multi-rack cluster.
* **analyticsWorkspaceId**: string (Required): The resource ID of the Log Analytics Workspace that will be used for storing relevant logs.
* **availableUpgradeVersions**: [ClusterAvailableUpgradeVersion](#clusteravailableupgradeversion)[] (ReadOnly): The list of cluster runtime version upgrades available for this cluster.
* **clusterCapacity**: [ClusterCapacity](#clustercapacity) (ReadOnly): The capacity supported by this cluster.
* **clusterConnectionStatus**: 'Connected' | 'Timeout' | 'Undefined' | string (ReadOnly): The latest heartbeat status between the cluster manager and the cluster.
* **clusterExtendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): The extended location (custom location) that represents the cluster's control plane location. This extended location is used to route the requests of child objects of the cluster that are handled by the platform operator.
* **clusterLocation**: string: The customer-provided location information to identify where the cluster resides.
* **clusterManagerConnectionStatus**: 'Connected' | 'Unreachable' | string (ReadOnly): The latest connectivity status between cluster manager and the cluster.
* **clusterManagerId**: string (ReadOnly): The resource ID of the cluster manager that manages this cluster. This is set by the Cluster Manager when the cluster is created.
* **clusterServicePrincipal**: [ServicePrincipalInformation](#serviceprincipalinformation): The service principal to be used by the cluster during Arc Appliance installation.
* **clusterType**: 'MultiRack' | 'SingleRack' | string (Required): The type of rack configuration for the cluster.
* **clusterVersion**: string (Required): The current runtime version of the cluster.
* **computeDeploymentThreshold**: [ValidationThreshold](#validationthreshold): The validation threshold indicating the allowable failures of compute machines during environment validation and deployment.
* **computeRackDefinitions**: [RackDefinition](#rackdefinition)[]: The list of rack definitions for the compute racks in a multi-rack
cluster, or an empty list in a single-rack cluster.
* **detailedStatus**: 'Degraded' | 'Deleting' | 'Deploying' | 'Disconnected' | 'Failed' | 'PendingDeployment' | 'Running' | 'Updating' | string (ReadOnly): The current detailed status of the cluster.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the detailed status.
* **hybridAksExtendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): The extended location (custom location) that represents the Hybrid AKS control plane location. This extended location is used when creating provisioned clusters (Hybrid AKS clusters).
* **managedResourceGroupConfiguration**: [ManagedResourceGroupConfiguration](#managedresourcegroupconfiguration): The configuration of the managed resource group associated with the resource.
* **manualActionCount**: int (ReadOnly): The count of Manual Action Taken (MAT) events that have not been validated.
* **networkFabricId**: string (Required): The resource ID of the Network Fabric associated with the cluster.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' | 'Validating' | string (ReadOnly): The provisioning state of the cluster.
* **supportExpiryDate**: string (ReadOnly): The support end date of the runtime version of the cluster.
* **workloadResourceIds**: string[] (ReadOnly): The list of workload resource IDs that are hosted within this cluster.

## CniBgpConfiguration
### Properties
* **bgpPeers**: [BgpPeer](#bgppeer)[]: The list of BgpPeer entities that the Hybrid AKS cluster will peer with in addition to peering that occurs automatically with the switch fabric.
* **communityAdvertisements**: [CommunityAdvertisement](#communityadvertisement)[]: The list of prefix community advertisement properties. Each prefix community specifies a prefix, and the
communities that should be associated with that prefix when it is announced.
* **nodeMeshPassword**: string (WriteOnly): The password of the Calico node mesh. It defaults to a randomly-generated string when not provided.
* **serviceExternalPrefixes**: string[]: The subnet blocks in CIDR format for Kubernetes service external IPs to be advertised over BGP.
* **serviceLoadBalancerPrefixes**: string[]: The subnet blocks in CIDR format for Kubernetes load balancers. Load balancer IPs will only be advertised if they
are within one of these blocks.

## CommunityAdvertisement
### Properties
* **communities**: string[] (Required): The list of community strings to announce with this prefix.
* **subnetPrefix**: string (Required): The subnet in CIDR format for which properties should be advertised.

## ConsoleProperties
### Properties
* **detailedStatus**: 'Error' | 'Ready' | string (ReadOnly): The more detailed status of the console.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **enabled**: 'False' | 'True' | string (Required): The indicator of whether the console access is enabled.
* **expiration**: string: The date and time after which the key will be disallowed access.
* **privateLinkServiceId**: string (ReadOnly): The resource ID of the private link service that is used to provide virtual machine console access.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the virtual machine console.
* **sshPublicKey**: [SshPublicKey](#sshpublickey) (Required): The SSH public key that will be provisioned for user access. The user is expected to have the corresponding SSH private key for logging in.
* **virtualMachineAccessId**: string (ReadOnly): The unique identifier for the virtual machine that is used to access the console.

## DefaultCniNetworkProperties
### Properties
* **clusterId**: string (ReadOnly): The resource ID of the Network Cloud cluster this default CNI network is associated with.
* **cniAsNumber**: int (ReadOnly): The autonomous system number that the fabric expects to peer with, derived from the associated L3 isolation domain.
* **cniBgpConfiguration**: [CniBgpConfiguration](#cnibgpconfiguration): The Calico BGP configuration.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the default CNI network.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **fabricBgpPeers**: [BgpPeer](#bgppeer)[] (ReadOnly): The L3 isolation fabric BGP peering connectivity information necessary for BGP peering the Hybrid AKS Cluster with the switch fabric.
* **hybridAksClustersAssociatedIds**: string[] (ReadOnly): The list of Hybrid AKS cluster resource ID(s) that are associated with this default CNI network.
* **interfaceName**: string (ReadOnly): The name of the interface that will be present in the virtual machine to represent this network.
* **ipAllocationType**: 'DualStack' | 'IPV4' | 'IPV6' | string: The type of the IP address allocation.
* **ipv4ConnectedPrefix**: string: The IPV4 prefix (CIDR) assigned to this default CNI network. It is required when the IP allocation type
is IPV4 or DualStack.
* **ipv6ConnectedPrefix**: string: The IPV6 prefix (CIDR) assigned to this default CNI network. It is required when the IP allocation type
is IPV6 or DualStack.
* **l3IsolationDomainId**: string (Required): The resource ID of the Network Fabric l3IsolationDomain.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the default CNI network.
* **vlan**: int (Required): The VLAN from the l3IsolationDomain that is used for this network.

## EgressEndpoint
### Properties
* **category**: string (Required): The descriptive category name of endpoints accessible by the AKS agent node. For example, azure-resource-management, API server, etc. The platform egress endpoints provided by default will use the category 'default'.
* **endpoints**: [EndpointDependency](#endpointdependency)[] (Required): The list of endpoint dependencies.

## EndpointDependency
### Properties
* **domainName**: string (Required): The domain name of the dependency.
* **port**: int: The port of this endpoint.

## ExtendedLocation
### Properties
* **name**: string (Required): The resource ID of the extended location on which the resource will be created.
* **type**: string (Required): The extended location type, for example, CustomLocation.

## HardwareInventory
### Properties
* **additionalHostInformation**: string (ReadOnly): Freeform data extracted from the environment about this machine. This information varies depending on the specific hardware and configuration.
* **interfaces**: [HardwareInventoryNetworkInterface](#hardwareinventorynetworkinterface)[] (ReadOnly): The list of network interfaces and associated details for the bare metal machine.
* **nics**: [Nic](#nic)[] (ReadOnly): Field Deprecated. Will be removed in an upcoming version. The list of network interface cards and associated details for the bare metal machine.

## HardwareInventoryNetworkInterface
### Properties
* **linkStatus**: string (ReadOnly): The current status of the link.
* **macAddress**: string (ReadOnly): The MAC address associated with this interface.
* **name**: string (ReadOnly): The name of the interface.
* **networkInterfaceId**: string (ReadOnly): The resource ID of the network interface for the port on the switch that this machine's interface is connected to.

## HardwareValidationStatus
### Properties
* **lastValidationTime**: string (ReadOnly): The timestamp of the hardware validation execution.
* **result**: 'Fail' | 'Pass' | string (ReadOnly): The outcome of the hardware validation.

## HybridAksClusterProperties
### Properties
* **associatedNetworkIds**: string[] (Required): The list of resource IDs for the workload networks associated with the Hybrid AKS cluster. It can be any of l2Networks, l3Networks, or trunkedNetworks resources. This field will also contain one cloudServicesNetwork and one defaultCniNetwork.
* **cloudServicesNetworkId**: string (ReadOnly): The resource ID of the associated cloud services network.
* **clusterId**: string (ReadOnly): The resource ID of the Network Cloud cluster hosting the Hybrid AKS cluster.
* **controlPlaneCount**: int (Required): The number of control plane node VMs.
* **controlPlaneNodes**: [NodeConfiguration](#nodeconfiguration)[] (ReadOnly): The list of node configurations detailing associated VMs that are part of the control plane nodes of this Hybrid AKS cluster.
* **defaultCniNetworkId**: string (ReadOnly): The resource ID of the associated default CNI network.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of this Hybrid AKS cluster.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **hybridAksProvisionedClusterId**: string (Required): The resource ID of the Hybrid AKS cluster that this additional information is for.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the Hybrid AKS cluster resource.
* **volumes**: string[] (ReadOnly): The resource IDs of volumes that are attached to the Hybrid AKS cluster.
* **workerCount**: int (Required): The number of worker node VMs.
* **workerNodes**: [NodeConfiguration](#nodeconfiguration)[] (ReadOnly): The list of node configurations detailing associated VMs that are part of the worker nodes of this Hybrid AKS cluster.

## ImageRepositoryCredentials
### Properties
* **password**: string (Required): The password or token used to access an image in the target repository.
* **registryUrl**: string (Required): The URL of the authentication server used to validate the repository credentials.
* **username**: string (Required): The username used to access an image in the target repository.

## KeySetUser
### Properties
* **azureUserName**: string (Required): The Azure Active Directory user name (email name).
* **description**: string: The free-form description for this user.
* **sshPublicKey**: [SshPublicKey](#sshpublickey) (Required): The SSH public key for this user.

## KeySetUserStatus
### Properties
* **azureUserName**: string (ReadOnly): The Azure Active Directory user name (email name).
* **status**: 'Active' | 'Invalid' | string (ReadOnly): The indicator of whether the user is currently deployed for access.
* **statusMessage**: string (ReadOnly): The additional information describing the current status of this user, if any available.

## L2NetworkProperties
### Properties
* **clusterId**: string (ReadOnly): The resource ID of the Network Cloud cluster this L2 network is associated with.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the L2 network.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **hybridAksClustersAssociatedIds**: string[] (ReadOnly): The list of Hybrid AKS cluster resource ID(s) that are associated with this L2 network.
* **hybridAksPluginType**: 'DPDK' | 'OSDevice' | 'SRIOV' | string: The network plugin type for Hybrid AKS.
* **interfaceName**: string: The default interface name for this L2 network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
* **l2IsolationDomainId**: string (Required): The resource ID of the Network Fabric l2IsolationDomain.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the L2 network.
* **virtualMachinesAssociatedIds**: string[] (ReadOnly): The list of virtual machine resource ID(s), excluding any Hybrid AKS virtual machines, that are currently using this L2 network.

## L3NetworkProperties
### Properties
* **clusterId**: string (ReadOnly): The resource ID of the Network Cloud cluster this L3 network is associated with.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the L3 network.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **hybridAksClustersAssociatedIds**: string[] (ReadOnly): The list of Hybrid AKS cluster resource IDs that are associated with this L3 network.
* **hybridAksIpamEnabled**: 'False' | 'True' | string: The indicator of whether or not to disable IPAM allocation on the network attachment definition injected into the Hybrid AKS Cluster.
* **hybridAksPluginType**: 'DPDK' | 'OSDevice' | 'SRIOV' | string: The network plugin type for Hybrid AKS.
* **interfaceName**: string: The default interface name for this L3 network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
* **ipAllocationType**: 'DualStack' | 'IPV4' | 'IPV6' | string: The type of the IP address allocation, defaulted to "DualStack".
* **ipv4ConnectedPrefix**: string: The IPV4 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type
is IPV4 or DualStack.
* **ipv6ConnectedPrefix**: string: The IPV6 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type
is IPV6 or DualStack.
* **l3IsolationDomainId**: string (Required): The resource ID of the Network Fabric l3IsolationDomain.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the L3 network.
* **virtualMachinesAssociatedIds**: string[] (ReadOnly): The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this L3 network.
* **vlan**: int (Required): The VLAN from the l3IsolationDomain that is used for this network.

## LldpNeighbor
### Properties
* **portDescription**: string (ReadOnly): The descriptive information about the port on the connected device.
* **portName**: string (ReadOnly): The system-assigned name of the port on the connected device.
* **systemDescription**: string (ReadOnly): The descriptive information about the connected device.
* **systemName**: string (ReadOnly): The system-assigned name of the connected device.

## MachineDisk
### Properties
* **capacityGB**: int (ReadOnly): The maximum amount of storage in GB.
* **connection**: 'PCIE' | 'RAID' | 'SAS' | 'SATA' | string (ReadOnly): The connection type of the rack SKU resource.
* **type**: 'HDD' | 'SSD' | string (ReadOnly): The disk type of rack SKU resource.

## MachineSkuProperties
### Properties
* **bootstrapProtocol**: 'PXE' | string (ReadOnly): The type of bootstrap protocol used.
* **cpuCores**: int (ReadOnly): The count of CPU cores for this machine.
* **cpuSockets**: int (ReadOnly): The count of CPU sockets for this machine.
* **disks**: [MachineDisk](#machinedisk)[] (ReadOnly): The list of disks.
* **generation**: string (ReadOnly): The generation of the architecture.
* **hardwareVersion**: string (ReadOnly): The hardware version of the machine.
* **memoryCapacityGB**: int (ReadOnly): The maximum amount of memory in GB.
* **model**: string (ReadOnly): The model of the machine.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): The list of network interfaces.
* **totalThreads**: int (ReadOnly): The count of SMT and physical core threads for this machine.
* **vendor**: string (ReadOnly): The make of the machine.

## MachineSkuSlot
### Properties
* **properties**: [MachineSkuProperties](#machineskuproperties): The list of the resource properties.
* **rackSlot**: int (ReadOnly): The position in the rack for the machine.

## ManagedResourceGroupConfiguration
### Properties
* **location**: string: The location of the managed resource group. If not specified, the location of the parent resource is chosen.
* **name**: string: The name for the managed resource group. If not specified, the unique name is automatically generated.

## NetworkAttachment
### Properties
* **attachedNetworkId**: string (Required): The resource ID of the associated network attached to the virtual machine.
It can be one of cloudServicesNetwork, l3Network, l2Network or trunkedNetwork resources.
* **defaultGateway**: 'False' | 'True' | string: The indicator of whether this is the default gateway.
Only one of the attached networks (including the CloudServicesNetwork attachment) for a single machine may be specified as True.
* **ipAllocationMethod**: 'Disabled' | 'Dynamic' | 'Static' | string (Required): The IP allocation mechanism for the virtual machine.
Dynamic and Static are only valid for l3Network which may also specify Disabled.
Otherwise, Disabled is the only permitted value.
* **ipv4Address**: string: The IPv4 address of the virtual machine.

This field is used only if the attached network has IPAllocationType of IPV4 or DualStack.

If IPAllocationMethod is:
Static - this field must contain a user specified IPv4 address from within the subnet specified in the attached network.
Dynamic - this field is read-only, but will be populated with an address from within the subnet specified in the attached network.
Disabled - this field will be empty.
* **ipv6Address**: string: The IPv6 address of the virtual machine.

This field is used only if the attached network has IPAllocationType of IPV6 or DualStack.

If IPAllocationMethod is:
Static - this field must contain an IPv6 address range from within the range specified in the attached network.
Dynamic - this field is read-only, but will be populated with an range from within the subnet specified in the attached network.
Disabled - this field will be empty.
* **macAddress**: string (ReadOnly): The MAC address of the interface for the virtual machine that corresponds to this network attachment.
* **networkAttachmentName**: string: The associated network's interface name.
If specified, the network attachment name has a maximum length of 15 characters and must be unique to this virtual machine.
If the user doesn’t specify this value, the default interface name of the network resource will be used.
For a CloudServicesNetwork resource, this name will be ignored.

## NetworkInterface
### Properties
* **address**: string (ReadOnly): The partial address of Peripheral Component Interconnect (PCI).
* **deviceConnectionType**: 'PCI' | string (ReadOnly): The connection type of the device.
* **model**: string (ReadOnly): The model name of the device.
* **physicalSlot**: int (ReadOnly): The physical slot for this device.
* **portCount**: int (ReadOnly): The number of ports on the device.
* **portSpeed**: int (ReadOnly): The maximum amount of data in GB that the line card transmits through a port at any given second.
* **vendor**: string (ReadOnly): The vendor name of the device.

## Nic
### Properties
* **lldpNeighbor**: [LldpNeighbor](#lldpneighbor) (ReadOnly): The information about the device connected to this NIC.
* **macAddress**: string (ReadOnly): The MAC address associated with this NIC.
* **name**: string (ReadOnly): The name of the NIC/interface.

## Node
### Properties
* **bareMetalMachineId**: string (ReadOnly): The resource ID of the bare metal machine that hosts this node.
* **imageId**: string (ReadOnly): The machine image last used to deploy this node.
* **networkAttachments**: [NetworkAttachment](#networkattachment)[] (ReadOnly): The list of network attachments to the virtual machine.
* **nodeName**: string (ReadOnly): The name of this node, as realized in the Hybrid AKS cluster.
* **powerState**: 'Off' | 'On' | string (ReadOnly): The power state (On | Off) of the node.

## NodeConfiguration
### Properties
* **agentPoolId**: string (ReadOnly): The resource ID of the agent pool that contains the nodes in this configuration.
* **agentPoolName**: string (ReadOnly): The name of the agent pool that contains the nodes in this configuration.
* **cpuCores**: int (ReadOnly): The number of CPU cores in the virtual machine.
* **diskSizeGB**: int (ReadOnly): The root disk size of the virtual machine in GB.
* **memorySizeGB**: int (ReadOnly): The memory size of the virtual machine in GB.
* **nodePoolName**: string (ReadOnly): Field deprecated, use agentPoolName instead. This field will be removed in a future version but will reflect the name of the agent pool that contains the nodes in this configuration.
* **nodes**: [Node](#node)[] (ReadOnly): The list of nodes that utilize this configuration.
* **vmCount**: int (ReadOnly): The number of virtual machines that use this configuration.
* **vmSize**: string (ReadOnly): The name of the VM size supplied during the creation of the cluster.

## OsDisk
### Properties
* **createOption**: 'Ephemeral' | string: The strategy for creating the OS disk.
* **deleteOption**: 'Delete' | string: The strategy for deleting the OS disk.
* **diskSizeGB**: int (Required): The size of the disk in gigabytes. Required if the createOption is Ephemeral.

## RackDefinition
### Properties
* **availabilityZone**: string: The zone name used for this rack when created.
* **bareMetalMachineConfigurationData**: [BareMetalMachineConfigurationData](#baremetalmachineconfigurationdata)[]: The unordered list of bare metal machine configuration.
* **networkRackId**: string (Required): The resource ID of the network rack that matches this rack definition.
* **rackLocation**: string: The free-form description of the rack's location.
* **rackSerialNumber**: string (Required): The unique identifier for the rack within Network Cloud cluster. An alternate unique alphanumeric value other than a serial number may be provided if desired.
* **rackSkuId**: string (Required): The resource ID of the sku for the rack being added.
* **storageApplianceConfigurationData**: [StorageApplianceConfigurationData](#storageapplianceconfigurationdata)[]: The list of storage appliance configuration data for this rack.

## RackProperties
### Properties
* **availabilityZone**: string (Required): The value that will be used for machines in this rack to represent the availability zones that can be referenced by Hybrid AKS Clusters for node arrangement.
* **clusterId**: string (ReadOnly): The resource ID of the cluster the rack is created for. This value is set when the rack is created by the cluster.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the rack.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the rack resource.
* **rackLocation**: string (Required): The free-form description of the rack location. (e.g. “DTN Datacenter, Floor 3, Isle 9, Rack 2B”)
* **rackSerialNumber**: string (Required): The unique identifier for the rack within Network Cloud cluster. An alternate unique alphanumeric value other than a serial number may be provided if desired.
* **rackSkuId**: string (Required): The SKU for the rack.

## RackSkuProperties
### Properties
* **computeMachines**: [MachineSkuSlot](#machineskuslot)[] (ReadOnly): The list of machine SKUs and associated rack slot for the compute-dedicated machines in this rack model.
* **controllerMachines**: [MachineSkuSlot](#machineskuslot)[] (ReadOnly): The list of machine SKUs and associated rack slot for the control-plane dedicated machines in this rack model.
* **description**: string (ReadOnly): The free-form text describing the rack.
* **maxClusterSlots**: int (ReadOnly): The maximum number of compute racks supported by an aggregator rack. 0 if this is a compute rack or a rack for a single rack cluster(rackType="Single").
* **provisioningState**: 'Succeeded' | string (ReadOnly): The provisioning state of the rack SKU resource.
* **rackType**: 'Aggregator' | 'Compute' | 'Single' | string (ReadOnly): The type of the rack.
* **storageAppliances**: [StorageApplianceSkuSlot](#storageapplianceskuslot)[] (ReadOnly): The list of appliance SKUs and associated rack slot for the storage appliance(s) in this rack model.
* **supportedRackSkuIds**: string[] (ReadOnly): The list of supported SKUs if the rack is an aggregator.

## ServicePrincipalInformation
### Properties
* **applicationId**: string (Required): The application ID, also known as client ID, of the service principal.
* **password**: string (Required): The password of the service principal.
* **principalId**: string (Required): The principal ID, also known as the object ID, of the service principal.
* **tenantId**: string (Required): The tenant ID, also known as the directory ID, of the tenant in which the service principal is created.

## SshPublicKey
### Properties
* **keyData**: string (Required): The public ssh key of the user.

## StorageApplianceConfigurationData
### Properties
* **adminCredentials**: [AdministrativeCredentials](#administrativecredentials) (Required): The credentials of the administrative interface on this storage appliance.
* **rackSlot**: int (Required): The slot that storage appliance is in the rack based on the BOM configuration.
* **serialNumber**: string (Required): The serial number of the appliance.
* **storageApplianceName**: string: The user-provided name for the storage appliance that will be created from this specification.

## StorageApplianceProperties
### Properties
* **administratorCredentials**: [AdministrativeCredentials](#administrativecredentials) (Required): The credentials of the administrative interface on this storage appliance.
* **capacity**: int (ReadOnly): The total capacity of the storage appliance.
* **capacityUsed**: int (ReadOnly): The amount of storage consumed.
* **clusterId**: string (ReadOnly): The resource ID of the cluster this storage appliance is associated with.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The detailed status of the storage appliance.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **managementIpv4Address**: string (ReadOnly): The endpoint for the management interface of the storage appliance.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the storage appliance.
* **rackId**: string (Required): The resource ID of the rack where this storage appliance resides.
* **rackSlot**: int (Required): The slot the storage appliance is in the rack based on the BOM configuration.
* **remoteVendorManagementFeature**: 'Supported' | 'Unsupported' | string (ReadOnly): The indicator of whether the storage appliance supports remote vendor management.
* **remoteVendorManagementStatus**: 'Disabled' | 'Enabled' | 'Unsupported' | string (ReadOnly): The indicator of whether the remote vendor management feature is enabled or disabled, or unsupported if it is an unsupported feature.
* **serialNumber**: string (Required): The serial number for the storage appliance.
* **storageApplianceSkuId**: string (Required): The SKU for the storage appliance.

## StorageApplianceSkuProperties
### Properties
* **capacityGB**: int (ReadOnly): The maximum capacity of the storage appliance.
* **model**: string (ReadOnly): The model of the storage appliance.

## StorageApplianceSkuSlot
### Properties
* **properties**: [StorageApplianceSkuProperties](#storageapplianceskuproperties): The list of the resource properties.
* **rackSlot**: int (ReadOnly): The position in the rack for the storage appliance.

## StorageProfile
### Properties
* **osDisk**: [OsDisk](#osdisk) (Required): The disk to use with this virtual machine.
* **volumeAttachments**: string[]: The resource IDs of volumes that are requested to be attached to the virtual machine.

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

## TrunkedNetworkProperties
### Properties
* **clusterId**: string (ReadOnly): The resource ID of the Network Cloud cluster this trunked network is associated with.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the trunked network.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **hybridAksClustersAssociatedIds**: string[] (ReadOnly): The list of Hybrid AKS cluster resource IDs that are associated with this trunked network.
* **hybridAksPluginType**: 'DPDK' | 'OSDevice' | 'SRIOV' | string: The network plugin type for Hybrid AKS.
* **interfaceName**: string: The default interface name for this trunked network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
* **isolationDomainIds**: string[] (Required): The list of resource IDs representing the Network Fabric isolation domains. It can be any combination of l2IsolationDomain and l3IsolationDomain resources.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the trunked network.
* **virtualMachinesAssociatedIds**: string[] (ReadOnly): The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this trunked network.
* **vlans**: int[] (Required): The list of vlans that are selected from the isolation domains for trunking.

## ValidationThreshold
### Properties
* **grouping**: 'PerCluster' | 'PerRack' | string (Required): Selection of how the type evaluation is applied to the cluster calculation.
* **type**: 'CountSuccess' | 'PercentSuccess' | string (Required): Selection of how the threshold should be evaluated.
* **value**: int (Required): The numeric threshold value.

## VirtualMachinePlacementHint
### Properties
* **hintType**: 'Affinity' | 'AntiAffinity' | string (Required): The specification of whether this hint supports affinity or anti-affinity with the referenced resources.
* **resourceId**: string (Required): The resource ID of the target object that the placement hints will be checked against, e.g., the bare metal node to host the virtual machine.
* **schedulingExecution**: 'Hard' | 'Soft' | string (Required): The indicator of whether the hint is a hard or soft requirement during scheduling.
* **scope**: 'Machine' | 'Rack' | string (Required): The scope for the virtual machine affinity or anti-affinity placement hint. It should always be "Machine" in the case of node affinity.

## VirtualMachineProperties
### Properties
* **adminUsername**: string (Required): The name of the administrator to which the ssh public keys will be added into the authorized keys.
* **bareMetalMachineId**: string (ReadOnly): The resource ID of the bare metal machine the virtual machine has landed to.
* **bootMethod**: 'BIOS' | 'UEFI' | string: Selects the boot method for the virtual machine.
* **cloudServicesNetworkAttachment**: [NetworkAttachment](#networkattachment) (Required): The cloud service network that provides platform-level services for the virtual machine.
* **clusterId**: string (ReadOnly): The resource ID of the cluster the virtual machine is created for.
* **cpuCores**: int (Required): The number of CPU cores in the virtual machine.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the virtual machine.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **isolateEmulatorThread**: 'False' | 'True' | string: Field Deprecated, the value will be ignored if provided. The indicator of whether one of the specified CPU cores is isolated to run the emulator thread for this virtual machine.
* **memorySizeGB**: int (Required): The memory size of the virtual machine in GB.
* **networkAttachments**: [NetworkAttachment](#networkattachment)[]: The list of network attachments to the virtual machine.
* **networkData**: string: The Base64 encoded cloud-init network data.
* **placementHints**: [VirtualMachinePlacementHint](#virtualmachineplacementhint)[]: The scheduling hints for the virtual machine.
* **powerState**: 'Off' | 'On' | string (ReadOnly): The power state of the virtual machine.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the virtual machine.
* **sshPublicKeys**: [SshPublicKey](#sshpublickey)[]: The list of ssh public keys. Each key will be added to the virtual machine using the cloud-init ssh_authorized_keys mechanism for the adminUsername.
* **storageProfile**: [StorageProfile](#storageprofile) (Required): The storage profile that specifies size and other parameters about the disks related to the virtual machine.
* **userData**: string: The Base64 encoded cloud-init user data.
* **virtioInterface**: 'Modern' | 'Transitional' | string: Field Deprecated, use virtualizationModel instead. The type of the virtio interface.
* **vmDeviceModel**: 'T1' | 'T2' | string: The type of the device model to use.
* **vmImage**: string (Required): The virtual machine image that is currently provisioned to the OS disk, using the full url and tag notation used to pull the image.
* **vmImageRepositoryCredentials**: [ImageRepositoryCredentials](#imagerepositorycredentials): The credentials used to login to the image repository that has access to the specified image.
* **volumes**: string[] (ReadOnly): The resource IDs of volumes that are attached to the virtual machine.

## VolumeProperties
### Properties
* **attachedTo**: string[] (ReadOnly): The list of resource IDs that attach the volume. It may include virtual machines and Hybrid AKS clusters.
* **detailedStatus**: 'Active' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the volume.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the volume.
* **serialNumber**: string (ReadOnly): The unique identifier of the volume.
* **sizeMiB**: int (Required): The size of the allocation for this volume in Mebibytes.

