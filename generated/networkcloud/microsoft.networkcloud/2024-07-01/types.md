# Microsoft.NetworkCloud @ 2024-07-01

## Resource Microsoft.NetworkCloud/bareMetalMachines@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9]{0,62}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BareMetalMachineProperties](#baremetalmachineproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/bareMetalMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/cloudServicesNetworks@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudServicesNetworkProperties](#cloudservicesnetworkproperties): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/cloudServicesNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/clusterManagers@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity of the cluster manager.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterManagerProperties](#clustermanagerproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/clusterManagers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/clusters@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster manager associated with the cluster.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/clusters/bareMetalMachineKeySets@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BareMetalMachineKeySetProperties](#baremetalmachinekeysetproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/clusters/bareMetalMachineKeySets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/clusters/bmcKeySets@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BmcKeySetProperties](#bmckeysetproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/clusters/bmcKeySets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/clusters/metricsConfigurations@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^default$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterMetricsConfigurationProperties](#clustermetricsconfigurationproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/clusters/metricsConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/kubernetesClusters@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [KubernetesClusterProperties](#kubernetesclusterproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/kubernetesClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/kubernetesClusters/agentPools@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgentPoolProperties](#agentpoolproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/kubernetesClusters/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/kubernetesClusters/features@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [KubernetesClusterFeatureProperties](#kubernetesclusterfeatureproperties): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/kubernetesClusters/features' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/l2Networks@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [L2NetworkProperties](#l2networkproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/l2Networks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/l3Networks@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [L3NetworkProperties](#l3networkproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/l3Networks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/racks@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RackProperties](#rackproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/racks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/rackSkus@2024-07-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,126}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RackSkuProperties](#rackskuproperties) (ReadOnly): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetworkCloud/rackSkus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/storageAppliances@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StorageApplianceProperties](#storageapplianceproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/storageAppliances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/trunkedNetworks@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TrunkedNetworkProperties](#trunkednetworkproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/trunkedNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/virtualMachines@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9]{0,62}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineProperties](#virtualmachineproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/virtualMachines/consoles@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster manager associated with the cluster this virtual machine is created on.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^default$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConsoleProperties](#consoleproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/virtualMachines/consoles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkCloud/volumes@2024-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location of the cluster associated with the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,62}[a-zA-Z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (Required): The list of the resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkCloud/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Function continueUpdateVersion (Microsoft.NetworkCloud/clusters@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/clusters
* **ApiVersion**: 2024-07-01
* **Input**: [ClusterContinueUpdateVersionParameters](#clustercontinueupdateversionparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function cordon (Microsoft.NetworkCloud/bareMetalMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/bareMetalMachines
* **ApiVersion**: 2024-07-01
* **Input**: [BareMetalMachineCordonParameters](#baremetalmachinecordonparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function deploy (Microsoft.NetworkCloud/clusters@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/clusters
* **ApiVersion**: 2024-07-01
* **Input**: [ClusterDeployParameters](#clusterdeployparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function disableRemoteVendorManagement (Microsoft.NetworkCloud/storageAppliances@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/storageAppliances
* **ApiVersion**: 2024-07-01
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function enableRemoteVendorManagement (Microsoft.NetworkCloud/storageAppliances@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/storageAppliances
* **ApiVersion**: 2024-07-01
* **Input**: [StorageApplianceEnableRemoteVendorManagementParameters](#storageapplianceenableremotevendormanagementparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function powerOff (Microsoft.NetworkCloud/bareMetalMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/bareMetalMachines
* **ApiVersion**: 2024-07-01
* **Input**: [BareMetalMachinePowerOffParameters](#baremetalmachinepoweroffparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function powerOff (Microsoft.NetworkCloud/virtualMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/virtualMachines
* **ApiVersion**: 2024-07-01
* **Input**: [VirtualMachinePowerOffParameters](#virtualmachinepoweroffparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function reimage (Microsoft.NetworkCloud/bareMetalMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/bareMetalMachines
* **ApiVersion**: 2024-07-01
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function reimage (Microsoft.NetworkCloud/virtualMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/virtualMachines
* **ApiVersion**: 2024-07-01
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function replace (Microsoft.NetworkCloud/bareMetalMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/bareMetalMachines
* **ApiVersion**: 2024-07-01
* **Input**: [BareMetalMachineReplaceParameters](#baremetalmachinereplaceparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function restart (Microsoft.NetworkCloud/bareMetalMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/bareMetalMachines
* **ApiVersion**: 2024-07-01
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function restart (Microsoft.NetworkCloud/virtualMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/virtualMachines
* **ApiVersion**: 2024-07-01
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function restartNode (Microsoft.NetworkCloud/kubernetesClusters@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/kubernetesClusters
* **ApiVersion**: 2024-07-01
* **Input**: [KubernetesClusterRestartNodeParameters](#kubernetesclusterrestartnodeparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function runCommand (Microsoft.NetworkCloud/bareMetalMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/bareMetalMachines
* **ApiVersion**: 2024-07-01
* **Input**: [BareMetalMachineRunCommandParameters](#baremetalmachineruncommandparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function runDataExtracts (Microsoft.NetworkCloud/bareMetalMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/bareMetalMachines
* **ApiVersion**: 2024-07-01
* **Input**: [BareMetalMachineRunDataExtractsParameters](#baremetalmachinerundataextractsparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function runReadCommands (Microsoft.NetworkCloud/bareMetalMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/bareMetalMachines
* **ApiVersion**: 2024-07-01
* **Input**: [BareMetalMachineRunReadCommandsParameters](#baremetalmachinerunreadcommandsparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function scanRuntime (Microsoft.NetworkCloud/clusters@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/clusters
* **ApiVersion**: 2024-07-01
* **Input**: [ClusterScanRuntimeParameters](#clusterscanruntimeparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function start (Microsoft.NetworkCloud/bareMetalMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/bareMetalMachines
* **ApiVersion**: 2024-07-01
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function start (Microsoft.NetworkCloud/virtualMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/virtualMachines
* **ApiVersion**: 2024-07-01
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function uncordon (Microsoft.NetworkCloud/bareMetalMachines@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/bareMetalMachines
* **ApiVersion**: 2024-07-01
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function updateVersion (Microsoft.NetworkCloud/clusters@2024-07-01)
* **Resource**: Microsoft.NetworkCloud/clusters
* **ApiVersion**: 2024-07-01
* **Input**: [ClusterUpdateVersionParameters](#clusterupdateversionparameters)
* **Output**: [OperationStatusResult](#operationstatusresult)

## AadConfiguration
### Properties
* **adminGroupObjectIds**: string[] {minLength: 1} (Required): The list of Azure Active Directory group object IDs that will have an administrative role on the Kubernetes cluster.

## AdministrativeCredentials
### Properties
* **password**: string {sensitive, minLength: 1} (Required): The password of the administrator of the device used during initialization.
* **username**: string {minLength: 1} (Required): The username of the administrator of the device used during initialization.

## AdministratorConfiguration
### Properties
* **adminUsername**: string: The user name for the administrator that will be applied to the operating systems that run Kubernetes nodes. If not supplied, a user name will be chosen by the service.
* **sshPublicKeys**: [SshPublicKey](#sshpublickey)[]: The SSH configuration for the operating systems that run the nodes in the Kubernetes cluster. In some cases, specification of public keys may be required to produce a working environment.

## AgentOptions
### Properties
* **hugepagesCount**: int (Required): The number of hugepages to allocate.
* **hugepagesSize**: '1G' | '2M' | string: The size of the hugepages to allocate.

## AgentPoolProperties
### Properties
* **administratorConfiguration**: [AdministratorConfiguration](#administratorconfiguration): The administrator credentials to be used for the nodes in this agent pool.
* **agentOptions**: [AgentOptions](#agentoptions): The configurations that will be applied to each agent in this agent pool.
* **attachedNetworkConfiguration**: [AttachedNetworkConfiguration](#attachednetworkconfiguration): The configuration of networks being attached to the agent pool for use by the workloads that run on this Kubernetes cluster.
* **availabilityZones**: string[]: The list of availability zones of the Network Cloud cluster used for the provisioning of nodes in this agent pool. If not specified, all availability zones will be used.
* **count**: int (Required): The number of virtual machines that use this configuration.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The current status of the agent pool.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **kubernetesVersion**: string (ReadOnly): The Kubernetes version running in this agent pool.
* **labels**: [KubernetesLabel](#kuberneteslabel)[]: The labels applied to the nodes in this agent pool.
* **mode**: 'NotApplicable' | 'System' | 'User' | string (Required): The selection of how this agent pool is utilized, either as a system pool or a user pool. System pools run the features and critical services for the Kubernetes Cluster, while user pools are dedicated to user workloads. Every Kubernetes cluster must contain at least one system node pool with at least one node.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the agent pool.
* **taints**: [KubernetesLabel](#kuberneteslabel)[]: The taints applied to the nodes in this agent pool.
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): The configuration of the agent pool.
* **vmSkuName**: string (Required): The name of the VM SKU that determines the size of resources allocated for node VMs.

## AgentPoolUpgradeSettings
### Properties
* **drainTimeout**: int {minValue: 60, maxValue: 86400}: The maximum time in seconds that is allowed for a node drain to complete before proceeding with the upgrade of the agent pool. If not specified during creation, a value of 1800 seconds is used.
* **maxSurge**: string: The maximum number or percentage of nodes that are surged during upgrade. This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified during creation, a value of 1 is used. One of MaxSurge and MaxUnavailable must be greater than 0.
* **maxUnavailable**: string: The maximum number or percentage of nodes that can be unavailable during upgrade. This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified during creation, a value of 0 is used. One of MaxSurge and MaxUnavailable must be greater than 0.

## AttachedNetworkConfiguration
### Properties
* **l2Networks**: [L2NetworkAttachmentConfiguration](#l2networkattachmentconfiguration)[]: The list of Layer 2 Networks and related configuration for attachment.
* **l3Networks**: [L3NetworkAttachmentConfiguration](#l3networkattachmentconfiguration)[]: The list of Layer 3 Networks and related configuration for attachment.
* **trunkedNetworks**: [TrunkedNetworkAttachmentConfiguration](#trunkednetworkattachmentconfiguration)[]: The list of Trunked Networks and related configuration for attachment.

## AvailableUpgrade
### Properties
* **availabilityLifecycle**: 'GenerallyAvailable' | 'Preview' | string (ReadOnly): The version lifecycle indicator.
* **version**: string (ReadOnly): The version available for upgrading.

## BareMetalMachineCommandSpecification
### Properties
* **arguments**: string[]: The list of string arguments that will be passed to the script in order as separate arguments.
* **command**: string (Required): The command to execute against the bare metal machine.

## BareMetalMachineConfigurationData
### Properties
* **bmcConnectionString**: string (ReadOnly): The connection string for the baseboard management controller including IP address and protocol.
* **bmcCredentials**: [AdministrativeCredentials](#administrativecredentials) (Required): The credentials of the baseboard management controller on this bare metal machine.
* **bmcMacAddress**: string {pattern: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$"} (Required): The MAC address of the BMC for this machine.
* **bootMacAddress**: string {pattern: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$"} (Required): The MAC address associated with the PXE NIC card.
* **machineDetails**: string {maxLength: 256}: The free-form additional information about the machine, e.g. an asset tag.
* **machineName**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9]{0,62}[a-zA-Z0-9])$"}: The user-provided name for the bare metal machine created from this specification.
If not provided, the machine name will be generated programmatically.
* **rackSlot**: int {minValue: 1, maxValue: 256} (Required): The slot the physical machine is in the rack based on the BOM configuration.
* **serialNumber**: string {maxLength: 64} (Required): The serial number of the machine. Hardware suppliers may use an alternate value. For example, service tag.

## BareMetalMachineCordonParameters
### Properties
* **evacuate**: 'False' | 'True' | string: The indicator of whether to evacuate the node workload when the bare metal machine is cordoned.

## BareMetalMachineKeySetProperties
### Properties
* **azureGroupId**: string (Required): The object ID of Azure Active Directory group that all users in the list must be in for access to be granted. Users that are not in the group will not have access.
* **detailedStatus**: 'AllActive' | 'AllInvalid' | 'SomeInvalid' | 'Validating' | string (ReadOnly): The more detailed status of the key set.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **expiration**: string (Required): The date and time after which the users in this key set will be removed from the bare metal machines.
* **jumpHostsAllowed**: string[] (Required): The list of IP addresses of jump hosts with management network access from which a login will be allowed for the users.
* **lastValidation**: string (ReadOnly): The last time this key set was validated.
* **osGroupName**: string {maxLength: 32, pattern: "^([A-Za-z]([A-Za-z0-9]*))$"}: The name of the group that users will be assigned to on the operating system of the machines.
* **privilegeLevel**: 'Standard' | 'Superuser' | string (Required): The access level allowed for the users in this key set.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the bare metal machine key set.
* **userList**: [KeySetUser](#keysetuser)[] (Required): The unique list of permitted users.
* **userListStatus**: [KeySetUserStatus](#keysetuserstatus)[] (ReadOnly): The status evaluation of each user.

## BareMetalMachinePowerOffParameters
### Properties
* **skipShutdown**: 'False' | 'True' | string: The indicator of whether to skip the graceful OS shutdown and power off the bare metal machine immediately.

## BareMetalMachineProperties
### Properties
* **associatedResourceIds**: string[] (ReadOnly): The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
* **bmcConnectionString**: string (Required): The connection string for the baseboard management controller including IP address and protocol.
* **bmcCredentials**: [AdministrativeCredentials](#administrativecredentials) (Required): The credentials of the baseboard management controller on this bare metal machine.
* **bmcMacAddress**: string {pattern: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$"} (Required): The MAC address of the BMC device.
* **bootMacAddress**: string {pattern: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$"} (Required): The MAC address of a NIC connected to the PXE network.
* **clusterId**: string (ReadOnly): The resource ID of the cluster this bare metal machine is associated with.
* **cordonStatus**: 'Cordoned' | 'Uncordoned' | string (ReadOnly): The cordon status of the bare metal machine.
* **detailedStatus**: 'Available' | 'Deprovisioning' | 'Error' | 'Preparing' | 'Provisioned' | 'Provisioning' | string (ReadOnly): The more detailed status of the bare metal machine.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **hardwareInventory**: [HardwareInventory](#hardwareinventory) (ReadOnly): The hardware inventory, including information acquired from the model/sku information and from the ironic inspector.
* **hardwareValidationStatus**: [HardwareValidationStatus](#hardwarevalidationstatus) (ReadOnly): The details of the latest hardware validation performed for this bare metal machine.
* **hybridAksClustersAssociatedIds**: string[] (ReadOnly): Field Deprecated. These fields will be empty/omitted. The list of the resource IDs for the HybridAksClusters that have nodes hosted on this bare metal machine.
* **kubernetesNodeName**: string (ReadOnly): The name of this machine represented by the host object in the Cluster's Kubernetes control plane.
* **kubernetesVersion**: string (ReadOnly): The version of Kubernetes running on this machine.
* **machineClusterVersion**: string: The cluster version that has been applied to this machine during deployment or a version update.
* **machineDetails**: string {maxLength: 256} (Required): The custom details provided by the customer.
* **machineName**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9]{0,62}[a-zA-Z0-9])$"} (Required): The OS-level hostname assigned to this machine.
* **machineRoles**: string[] (ReadOnly): The list of roles that are assigned to the cluster node running on this machine.
* **machineSkuId**: string (Required): The unique internal identifier of the bare metal machine SKU.
* **oamIpv4Address**: string (ReadOnly): The IPv4 address that is assigned to the bare metal machine during the cluster deployment.
* **oamIpv6Address**: string (ReadOnly): The IPv6 address that is assigned to the bare metal machine during the cluster deployment.
* **osImage**: string (ReadOnly): The image that is currently provisioned to the OS disk.
* **powerState**: 'Off' | 'On' | string (ReadOnly): The power state derived from the baseboard management controller.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the bare metal machine.
* **rackId**: string (Required): The resource ID of the rack where this bare metal machine resides.
* **rackSlot**: int {minValue: 1, maxValue: 256} (Required): The rack slot in which this bare metal machine is located, ordered from the bottom up i.e. the lowest slot is 1.
* **readyState**: 'False' | 'True' | string (ReadOnly): The indicator of whether the bare metal machine is ready to receive workloads.
* **runtimeProtectionStatus**: [RuntimeProtectionStatus](#runtimeprotectionstatus) (ReadOnly): The runtime protection status of the bare metal machine.
* **secretRotationStatus**: [SecretRotationStatus](#secretrotationstatus)[] (ReadOnly): The list of statuses that represent secret rotation activity.
* **serialNumber**: string {minLength: 1, maxLength: 64} (Required): The serial number of the bare metal machine.
* **serviceTag**: string (ReadOnly): The discovered value of the machine's service tag.
* **virtualMachinesAssociatedIds**: string[] (ReadOnly): Field Deprecated. These fields will be empty/omitted. The list of the resource IDs for the VirtualMachines that are hosted on this bare metal machine.

## BareMetalMachineReplaceParameters
### Properties
* **bmcCredentials**: [AdministrativeCredentials](#administrativecredentials): The credentials of the baseboard management controller on this bare metal machine.
* **bmcMacAddress**: string {pattern: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$"}: The MAC address of the BMC device.
* **bootMacAddress**: string {pattern: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$"}: The MAC address of a NIC connected to the PXE network.
* **machineName**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9]{0,62}[a-zA-Z0-9])$"}: The OS-level hostname assigned to this machine.
* **serialNumber**: string {minLength: 1, maxLength: 64}: The serial number of the bare metal machine.

## BareMetalMachineRunCommandParameters
### Properties
* **arguments**: string[]: The list of string arguments that will be passed to the script in order as separate arguments.
* **limitTimeSeconds**: int {minValue: 60, maxValue: 14400} (Required): The maximum time the script is allowed to run.
If the execution time exceeds the maximum, the script will be stopped, any output produced until then will be captured, and the exit code matching a timeout will be returned (252).
* **script**: string (Required): The base64 encoded script to execute on the bare metal machine.

## BareMetalMachineRunDataExtractsParameters
### Properties
* **commands**: [BareMetalMachineCommandSpecification](#baremetalmachinecommandspecification)[] {minLength: 1} (Required): The list of curated data extraction commands to be executed directly against the target machine.
* **limitTimeSeconds**: int {minValue: 60, maxValue: 14400} (Required): The maximum time the commands are allowed to run.
If the execution time exceeds the maximum, the script will be stopped, any output produced until then will be captured, and the exit code matching a timeout will be returned (252).

## BareMetalMachineRunReadCommandsParameters
### Properties
* **commands**: [BareMetalMachineCommandSpecification](#baremetalmachinecommandspecification)[] {minLength: 1} (Required): The list of read-only commands to be executed directly against the target machine.
* **limitTimeSeconds**: int {minValue: 60, maxValue: 14400} (Required): The maximum time the commands are allowed to run.
If the execution time exceeds the maximum, the script will be stopped, any output produced until then will be captured, and the exit code matching a timeout will be returned (252).

## BgpAdvertisement
### Properties
* **advertiseToFabric**: 'False' | 'True' | string: The indicator of if this advertisement is also made to the network fabric associated with the Network Cloud Cluster. This field is ignored if fabricPeeringEnabled is set to False.
* **communities**: string[]: The names of the BGP communities to be associated with the announcement, utilizing a BGP community string in 1234:1234 format.
* **ipAddressPools**: string[] (Required): The names of the IP address pools associated with this announcement.
* **peers**: string[]: The names of the BGP peers to limit this advertisement to. If no values are specified, all BGP peers will receive this advertisement.

## BgpServiceLoadBalancerConfiguration
### Properties
* **bgpAdvertisements**: [BgpAdvertisement](#bgpadvertisement)[]: The association of IP address pools to the communities and peers, allowing for announcement of IPs.
* **bgpPeers**: [ServiceLoadBalancerBgpPeer](#serviceloadbalancerbgppeer)[]: The list of additional BgpPeer entities that the Kubernetes cluster will peer with. All peering must be explicitly defined.
* **fabricPeeringEnabled**: 'False' | 'True' | string: The indicator to specify if the load balancer peers with the network fabric.
* **ipAddressPools**: [IpAddressPool](#ipaddresspool)[]: The list of pools of IP addresses that can be allocated to load balancer services.

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
* **associatedResourceIds**: string[] (ReadOnly): The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
* **clusterId**: string (ReadOnly): The resource ID of the Network Cloud cluster this cloud services network is associated with.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the cloud services network.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **enableDefaultEgressEndpoints**: 'False' | 'True' | string: The indicator of whether the platform default endpoints are allowed for the egress traffic.
* **enabledEgressEndpoints**: [EgressEndpoint](#egressendpoint)[] (ReadOnly): The full list of additional and default egress endpoints that are currently enabled.
* **hybridAksClustersAssociatedIds**: string[] (ReadOnly): Field Deprecated. These fields will be empty/omitted. The list of Hybrid AKS cluster resource IDs that are associated with this cloud services network.
* **interfaceName**: string (ReadOnly): The name of the interface that will be present in the virtual machine to represent this network.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the cloud services network.
* **virtualMachinesAssociatedIds**: string[] (ReadOnly): Field Deprecated. These fields will be empty/omitted. The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this cloud services network.

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
* **availableApplianceStorageGB**: int: The remaining appliance-based storage in GB available for workload use. Measured in gibibytes.
* **availableCoreCount**: int: The remaining number of cores that are available in this cluster for workload use.
* **availableHostStorageGB**: int: The remaining machine or host-based storage in GB available for workload use. Measured in gibibytes.
* **availableMemoryGB**: int: The remaining memory in GB that are available in this cluster for workload use. Measured in gibibytes.
* **totalApplianceStorageGB**: int: The total appliance-based storage in GB supported by this cluster for workload use. Measured in gibibytes.
* **totalCoreCount**: int: The total number of cores that are supported by this cluster for workload use.
* **totalHostStorageGB**: int: The total machine or host-based storage in GB supported by this cluster for workload use. Measured in gibibytes.
* **totalMemoryGB**: int: The total memory supported by this cluster for workload use. Measured in gibibytes.

## ClusterContinueUpdateVersionParameters
### Properties
* **machineGroupTargetingMode**: 'AlphaByRack' | string: The mode by which the cluster will target the next grouping of servers to continue the update.

## ClusterDeployParameters
### Properties
* **skipValidationsForMachines**: string[]: The names of bare metal machines in the cluster that should be skipped during environment validation.

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
* **collectionInterval**: int {minValue: 1, maxValue: 1440} (Required): The interval in minutes by which metrics will be collected.
* **detailedStatus**: 'Applied' | 'Error' | 'Processing' | string (ReadOnly): The more detailed status of the metrics configuration.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **disabledMetrics**: string[] (ReadOnly): The list of metrics that are available for the cluster but disabled at the moment.
* **enabledMetrics**: string[]: The list of metric names that have been chosen to be enabled in addition to the core set of enabled metrics.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the metrics configuration.

## ClusterProperties
### Properties
* **aggregatorOrSingleRackDefinition**: [RackDefinition](#rackdefinition) (Required): The rack definition that is intended to reflect only a single rack in a single rack cluster, or an aggregator rack in a multi-rack cluster.
* **analyticsWorkspaceId**: string: The resource ID of the Log Analytics Workspace that will be used for storing relevant logs.
* **availableUpgradeVersions**: [ClusterAvailableUpgradeVersion](#clusteravailableupgradeversion)[] (ReadOnly): The list of cluster runtime version upgrades available for this cluster.
* **clusterCapacity**: [ClusterCapacity](#clustercapacity) (ReadOnly): The capacity supported by this cluster.
* **clusterConnectionStatus**: 'Connected' | 'Disconnected' | 'Timeout' | 'Undefined' | string (ReadOnly): The latest heartbeat status between the cluster manager and the cluster.
* **clusterExtendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): The extended location (custom location) that represents the cluster's control plane location. This extended location is used to route the requests of child objects of the cluster that are handled by the platform operator.
* **clusterLocation**: string {maxLength: 256}: The customer-provided location information to identify where the cluster resides.
* **clusterManagerConnectionStatus**: 'Connected' | 'Unreachable' | string (ReadOnly): The latest connectivity status between cluster manager and the cluster.
* **clusterManagerId**: string (ReadOnly): The resource ID of the cluster manager that manages this cluster. This is set by the Cluster Manager when the cluster is created.
* **clusterServicePrincipal**: [ServicePrincipalInformation](#serviceprincipalinformation): The service principal to be used by the cluster during Arc Appliance installation.
* **clusterType**: 'MultiRack' | 'SingleRack' | string (Required): The type of rack configuration for the cluster.
* **clusterVersion**: string (Required): The current runtime version of the cluster.
* **commandOutputSettings**: [CommandOutputSettings](#commandoutputsettings): The settings for commands run in this cluster, such as bare metal machine run read only commands and data extracts.
* **computeDeploymentThreshold**: [ValidationThreshold](#validationthreshold): The validation threshold indicating the allowable failures of compute machines during environment validation and deployment.
* **computeRackDefinitions**: [RackDefinition](#rackdefinition)[]: The list of rack definitions for the compute racks in a multi-rack
cluster, or an empty list in a single-rack cluster.
* **detailedStatus**: 'Degraded' | 'Deleting' | 'Deploying' | 'Disconnected' | 'Failed' | 'PendingDeployment' | 'Running' | 'UpdatePaused' | 'Updating' | string (ReadOnly): The current detailed status of the cluster.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the detailed status.
* **hybridAksExtendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): Field Deprecated. This field will not be populated in an upcoming version. The extended location (custom location) that represents the Hybrid AKS control plane location. This extended location is used when creating provisioned clusters (Hybrid AKS clusters).
* **managedResourceGroupConfiguration**: [ManagedResourceGroupConfiguration](#managedresourcegroupconfiguration): The configuration of the managed resource group associated with the resource.
* **manualActionCount**: int (ReadOnly): The count of Manual Action Taken (MAT) events that have not been validated.
* **networkFabricId**: string (Required): The resource ID of the Network Fabric associated with the cluster.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | 'Updating' | 'Validating' | string (ReadOnly): The provisioning state of the cluster.
* **runtimeProtectionConfiguration**: [RuntimeProtectionConfiguration](#runtimeprotectionconfiguration): The settings for cluster runtime protection.
* **secretArchive**: [ClusterSecretArchive](#clustersecretarchive): The configuration for use of a key vault to store secrets for later retrieval by the operator.
* **supportExpiryDate**: string (ReadOnly): The support end date of the runtime version of the cluster.
* **updateStrategy**: [ClusterUpdateStrategy](#clusterupdatestrategy): The strategy for updating the cluster.
* **workloadResourceIds**: string[] (ReadOnly): The list of workload resource IDs that are hosted within this cluster.

## ClusterScanRuntimeParameters
### Properties
* **scanActivity**: 'Scan' | 'Skip' | string: The choice of if the scan operation should run the scan.

## ClusterSecretArchive
### Properties
* **keyVaultId**: string (Required): The resource ID of the key vault to archive the secrets of the cluster.
* **useKeyVault**: 'False' | 'True' | string: The indicator if the specified key vault should be used to archive the secrets of the cluster.

## ClusterUpdateStrategy
### Properties
* **maxUnavailable**: int {minValue: 1}: The maximum number of worker nodes that can be offline within the increment of update, e.g., rack-by-rack.
Limited by the maximum number of machines in the increment. Defaults to the whole increment size.
* **strategyType**: 'PauseAfterRack' | 'Rack' | string (Required): The mode of operation for runtime protection.
* **thresholdType**: 'CountSuccess' | 'PercentSuccess' | string (Required): Selection of how the threshold should be evaluated.
* **thresholdValue**: int {minValue: 0} (Required): The numeric threshold value.
* **waitTimeMinutes**: int {minValue: 0, maxValue: 60}: The time to wait between the increments of update defined by the strategy.

## ClusterUpdateVersionParameters
### Properties
* **targetClusterVersion**: string (Required): The version to be applied to the cluster during update.

## CommandOutputSettings
### Properties
* **associatedIdentity**: [IdentitySelector](#identityselector): The selection of the managed identity to use with this storage account container. The identity type must be either system assigned or user assigned.
* **containerUrl**: string: The URL of the storage account container that is to be used by the specified identities.

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

## ControlPlaneNodeConfiguration
### Properties
* **administratorConfiguration**: [AdministratorConfiguration](#administratorconfiguration): The administrator credentials to be used for the nodes in the control plane.
* **availabilityZones**: string[]: The list of availability zones of the Network Cloud cluster to be used for the provisioning of nodes in the control plane. If not specified, all availability zones will be used.
* **count**: int {minValue: 1} (Required): The number of virtual machines that use this configuration.
* **vmSkuName**: string (Required): The name of the VM SKU supplied during creation.

## EgressEndpoint
### Properties
* **category**: string (Required): The descriptive category name of endpoints accessible by the AKS agent node. For example, azure-resource-management, API server, etc. The platform egress endpoints provided by default will use the category 'default'.
* **endpoints**: [EndpointDependency](#endpointdependency)[] {minLength: 1} (Required): The list of endpoint dependencies.

## EndpointDependency
### Properties
* **domainName**: string (Required): The domain name of the dependency.
* **port**: int {minValue: 1, maxValue: 65535}: The port of this endpoint.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExtendedLocation
### Properties
* **name**: string (Required): The resource ID of the extended location on which the resource will be created.
* **type**: string (Required): The extended location type, for example, CustomLocation.

## FeatureStatus
### Properties
* **detailedStatus**: 'Failed' | 'Running' | 'Unknown' | string (ReadOnly): The status representing the state of this feature.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **name**: string (ReadOnly): The name of the feature.
* **version**: string (ReadOnly): The version of the feature.

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

## IdentitySelector
### Properties
* **identityType**: 'SystemAssignedIdentity' | 'UserAssignedIdentity' | string: The type of managed identity that is being selected.
* **userAssignedIdentityResourceId**: string: The user assigned managed identity resource ID to use. Mutually exclusive with a system assigned identity type.

## ImageRepositoryCredentials
### Properties
* **password**: string {sensitive, minLength: 1} (Required): The password or token used to access an image in the target repository.
* **registryUrl**: string (Required): The URL of the authentication server used to validate the repository credentials.
* **username**: string {minLength: 1} (Required): The username used to access an image in the target repository.

## InitialAgentPoolConfiguration
### Properties
* **administratorConfiguration**: [AdministratorConfiguration](#administratorconfiguration): The administrator credentials to be used for the nodes in this agent pool.
* **agentOptions**: [AgentOptions](#agentoptions): The configurations that will be applied to each agent in this agent pool.
* **attachedNetworkConfiguration**: [AttachedNetworkConfiguration](#attachednetworkconfiguration): The configuration of networks being attached to the agent pool for use by the workloads that run on this Kubernetes cluster.
* **availabilityZones**: string[]: The list of availability zones of the Network Cloud cluster used for the provisioning of nodes in this agent pool. If not specified, all availability zones will be used.
* **count**: int (Required): The number of virtual machines that use this configuration.
* **labels**: [KubernetesLabel](#kuberneteslabel)[]: The labels applied to the nodes in this agent pool.
* **mode**: 'NotApplicable' | 'System' | 'User' | string (Required): The selection of how this agent pool is utilized, either as a system pool or a user pool. System pools run the features and critical services for the Kubernetes Cluster, while user pools are dedicated to user workloads. Every Kubernetes cluster must contain at least one system node pool with at least one node.
* **name**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"} (Required): The name that will be used for the agent pool resource representing this agent pool.
* **taints**: [KubernetesLabel](#kuberneteslabel)[]: The taints applied to the nodes in this agent pool.
* **upgradeSettings**: [AgentPoolUpgradeSettings](#agentpoolupgradesettings): The configuration of the agent pool.
* **vmSkuName**: string (Required): The name of the VM SKU that determines the size of resources allocated for node VMs.

## IpAddressPool
### Properties
* **addresses**: string[] (Required): The list of IP address ranges. Each range can be a either a subnet in CIDR format or an explicit start-end range of IP addresses. For a BGP service load balancer configuration, only CIDR format is supported and excludes /32 (IPv4) and /128 (IPv6) prefixes.
* **autoAssign**: 'False' | 'True' | string: The indicator to determine if automatic allocation from the pool should occur.
* **name**: string {pattern: "^[a-z0-9]([a-z0-9.-]{0,61}[a-z0-9]){0,1}$"} (Required): The name used to identify this IP address pool for association with a BGP advertisement.
* **onlyUseHostIps**: 'False' | 'True' | string: The indicator to prevent the use of IP addresses ending with .0 and .255 for this pool. Enabling this option will only use IP addresses between .1 and .254 inclusive.

## KeySetUser
### Properties
* **azureUserName**: string (Required): The user name that will be used for access.
* **description**: string {maxLength: 256}: The free-form description for this user.
* **sshPublicKey**: [SshPublicKey](#sshpublickey) (Required): The SSH public key that will be provisioned for user access. The user is expected to have the corresponding SSH private key for logging in.
* **userPrincipalName**: string: The user principal name (email format) used to validate this user's group membership.

## KeySetUserStatus
### Properties
* **azureUserName**: string (ReadOnly): The user name that will be used for access.
* **status**: 'Active' | 'Invalid' | string (ReadOnly): The indicator of whether the user is currently deployed for access.
* **statusMessage**: string {maxLength: 256} (ReadOnly): The additional information describing the current status of this user, if any available.

## KubernetesClusterFeatureProperties
### Properties
* **availabilityLifecycle**: 'GenerallyAvailable' | 'Preview' | string (ReadOnly): The lifecycle indicator of the feature.
* **detailedStatus**: 'Error' | 'Installed' | 'Provisioning' | string (ReadOnly): The detailed status of the feature.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message for the detailed status of the feature.
* **options**: [StringKeyValuePair](#stringkeyvaluepair)[]: The configured options for the feature.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the Kubernetes cluster feature.
* **required**: 'False' | 'True' | string (ReadOnly): The indicator of if the feature is required or optional. Optional features may be deleted by the user, while required features are managed with the kubernetes cluster lifecycle.
* **version**: string (ReadOnly): The version of the feature.

## KubernetesClusterNode
### Properties
* **agentPoolId**: string (ReadOnly): The resource ID of the agent pool that this node belongs to. This value is not represented on control plane nodes.
* **availabilityZone**: string (ReadOnly): The availability zone this node is running within.
* **bareMetalMachineId**: string (ReadOnly): The resource ID of the bare metal machine that hosts this node.
* **cpuCores**: int (ReadOnly): The number of CPU cores configured for this node, derived from the VM SKU specified.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | 'Running' | 'Scheduling' | 'Stopped' | 'Terminating' | 'Unknown' | string (ReadOnly): The detailed state of this node.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **diskSizeGB**: int (ReadOnly): The size of the disk configured for this node. Allocations are measured in gibibytes.
* **image**: string (ReadOnly): The machine image used to deploy this node.
* **kubernetesVersion**: string (ReadOnly): The currently running version of Kubernetes and bundled features running on this node.
* **labels**: [KubernetesLabel](#kuberneteslabel)[] (ReadOnly): The list of labels on this node that have been assigned to the agent pool containing this node.
* **memorySizeGB**: int (ReadOnly): The amount of memory configured for this node, derived from the vm SKU specified. Allocations are measured in gibibytes.
* **mode**: 'NotApplicable' | 'System' | 'User' | string (ReadOnly): The mode of the agent pool containing this node. Not applicable for control plane nodes.
* **name**: string (ReadOnly): The name of this node, as realized in the Kubernetes cluster.
* **networkAttachments**: [NetworkAttachment](#networkattachment)[] (ReadOnly): The NetworkAttachments made to this node.
* **powerState**: 'Off' | 'On' | 'Unknown' | string (ReadOnly): The power state of this node.
* **role**: 'ControlPlane' | 'Worker' | string (ReadOnly): The role of this node in the cluster.
* **taints**: [KubernetesLabel](#kuberneteslabel)[] (ReadOnly): The list of taints that have been assigned to the agent pool containing this node.
* **vmSkuName**: string (ReadOnly): The VM SKU name that was used to create this cluster node.

## KubernetesClusterProperties
### Properties
* **aadConfiguration**: [AadConfiguration](#aadconfiguration): The Azure Active Directory Integration properties.
* **administratorConfiguration**: [AdministratorConfiguration](#administratorconfiguration): The administrative credentials that will be applied to the control plane and agent pool nodes that do not specify their own values.
* **attachedNetworkIds**: string[] (ReadOnly): The full list of network resource IDs that are attached to this cluster, including those attached only to specific agent pools.
* **availableUpgrades**: [AvailableUpgrade](#availableupgrade)[] (ReadOnly): The list of versions that this Kubernetes cluster can be upgraded to.
* **clusterId**: string (ReadOnly): The resource ID of the Network Cloud cluster.
* **connectedClusterId**: string (ReadOnly): The resource ID of the connected cluster set up when this Kubernetes cluster is created.
* **controlPlaneKubernetesVersion**: string (ReadOnly): The current running version of Kubernetes on the control plane.
* **controlPlaneNodeConfiguration**: [ControlPlaneNodeConfiguration](#controlplanenodeconfiguration) (Required): The defining characteristics of the control plane for this Kubernetes Cluster.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The current status of the Kubernetes cluster.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **featureStatuses**: [FeatureStatus](#featurestatus)[] (ReadOnly): The current feature settings.
* **initialAgentPoolConfigurations**: [InitialAgentPoolConfiguration](#initialagentpoolconfiguration)[] {minLength: 1} (Required): The agent pools that are created with this Kubernetes cluster for running critical system services and workloads. This data in this field is only used during creation, and the field will be empty following the creation of the Kubernetes Cluster. After creation, the management of agent pools is done using the agentPools sub-resource.
* **kubernetesVersion**: string (Required): The Kubernetes version for this cluster.
* **managedResourceGroupConfiguration**: [ManagedResourceGroupConfiguration](#managedresourcegroupconfiguration): The configuration of the managed resource group associated with the resource.
* **networkConfiguration**: [NetworkConfiguration](#networkconfiguration) (Required): The configuration of the Kubernetes cluster networking, including the attachment of networks that span the cluster.
* **nodes**: [KubernetesClusterNode](#kubernetesclusternode)[] (ReadOnly): The details of the nodes in this cluster.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the Kubernetes cluster resource.

## KubernetesClusterRestartNodeParameters
### Properties
* **nodeName**: string (Required): The name of the node to restart.

## KubernetesLabel
### Properties
* **key**: string (Required): The name of the label or taint.
* **value**: string (Required): The value of the label or taint.

## L2NetworkAttachmentConfiguration
### Properties
* **networkId**: string (Required): The resource ID of the network that is being configured for attachment.
* **pluginType**: 'DPDK' | 'IPVLAN' | 'MACVLAN' | 'OSDevice' | 'SRIOV' | string: The indicator of how this network will be utilized by the Kubernetes cluster.

## L2NetworkProperties
### Properties
* **associatedResourceIds**: string[] (ReadOnly): The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
* **clusterId**: string (ReadOnly): The resource ID of the Network Cloud cluster this L2 network is associated with.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the L2 network.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **hybridAksClustersAssociatedIds**: string[] (ReadOnly): Field Deprecated. These fields will be empty/omitted. The list of Hybrid AKS cluster resource ID(s) that are associated with this L2 network.
* **hybridAksPluginType**: 'DPDK' | 'OSDevice' | 'SRIOV' | string: Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The network plugin type for Hybrid AKS.
* **interfaceName**: string {maxLength: 12, pattern: "^[a-zA-Z0-9@._-]*$"}: The default interface name for this L2 network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
* **l2IsolationDomainId**: string (Required): The resource ID of the Network Fabric l2IsolationDomain.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the L2 network.
* **virtualMachinesAssociatedIds**: string[] (ReadOnly): Field Deprecated. These fields will be empty/omitted. The list of virtual machine resource ID(s), excluding any Hybrid AKS virtual machines, that are currently using this L2 network.

## L2ServiceLoadBalancerConfiguration
### Properties
* **ipAddressPools**: [IpAddressPool](#ipaddresspool)[]: The list of pools of IP addresses that can be allocated to load balancer services.

## L3NetworkAttachmentConfiguration
### Properties
* **ipamEnabled**: 'False' | 'True' | string: The indication of whether this network will or will not perform IP address management and allocate IP addresses when attached.
* **networkId**: string (Required): The resource ID of the network that is being configured for attachment.
* **pluginType**: 'DPDK' | 'IPVLAN' | 'MACVLAN' | 'OSDevice' | 'SRIOV' | string: The indicator of how this network will be utilized by the Kubernetes cluster.

## L3NetworkProperties
### Properties
* **associatedResourceIds**: string[] (ReadOnly): The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
* **clusterId**: string (ReadOnly): The resource ID of the Network Cloud cluster this L3 network is associated with.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the L3 network.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **hybridAksClustersAssociatedIds**: string[] (ReadOnly): Field Deprecated. These fields will be empty/omitted. The list of Hybrid AKS cluster resource IDs that are associated with this L3 network.
* **hybridAksIpamEnabled**: 'False' | 'True' | string: Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The indicator of whether or not to disable IPAM allocation on the network attachment definition injected into the Hybrid AKS Cluster.
* **hybridAksPluginType**: 'DPDK' | 'OSDevice' | 'SRIOV' | string: Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The network plugin type for Hybrid AKS.
* **interfaceName**: string {maxLength: 12, pattern: "^[a-zA-Z0-9@._-]*$"}: The default interface name for this L3 network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
* **ipAllocationType**: 'DualStack' | 'IPV4' | 'IPV6' | string: The type of the IP address allocation, defaulted to "DualStack".
* **ipv4ConnectedPrefix**: string: The IPV4 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type
is IPV4 or DualStack.
* **ipv6ConnectedPrefix**: string: The IPV6 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type
is IPV6 or DualStack.
* **l3IsolationDomainId**: string (Required): The resource ID of the Network Fabric l3IsolationDomain.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the L3 network.
* **virtualMachinesAssociatedIds**: string[] (ReadOnly): Field Deprecated. These fields will be empty/omitted. The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this L3 network.
* **vlan**: int (Required): The VLAN from the l3IsolationDomain that is used for this network.

## LldpNeighbor
### Properties
* **portDescription**: string (ReadOnly): The descriptive information about the port on the connected device.
* **portName**: string (ReadOnly): The system-assigned name of the port on the connected device.
* **systemDescription**: string (ReadOnly): The descriptive information about the connected device.
* **systemName**: string (ReadOnly): The system-assigned name of the connected device.

## MachineDisk
### Properties
* **capacityGB**: int (ReadOnly): The maximum amount of storage. Measured in gibibytes.
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
* **memoryCapacityGB**: int (ReadOnly): The maximum amount of memory. Measured in gibibytes.
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
* **name**: string {maxLength: 75}: The name for the managed resource group. If not specified, the unique name is automatically generated.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

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
* **networkAttachmentName**: string {maxLength: 15}: The associated network's interface name.
If specified, the network attachment name has a maximum length of 15 characters and must be unique to this virtual machine.
If the user doesn’t specify this value, the default interface name of the network resource will be used.
For a CloudServicesNetwork resource, this name will be ignored.

## NetworkConfiguration
### Properties
* **attachedNetworkConfiguration**: [AttachedNetworkConfiguration](#attachednetworkconfiguration): The configuration of networks being attached to the cluster for use by the workloads that run on this Kubernetes cluster.
* **bgpServiceLoadBalancerConfiguration**: [BgpServiceLoadBalancerConfiguration](#bgpserviceloadbalancerconfiguration): The configuration of the BGP service load balancer for this Kubernetes cluster. A maximum of one service load balancer may be specified, either Layer 2 or BGP.
* **cloudServicesNetworkId**: string (Required): The resource ID of the associated Cloud Services network.
* **cniNetworkId**: string (Required): The resource ID of the Layer 3 network that is used for creation of the Container Networking Interface network.
* **dnsServiceIp**: string: The IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in service CIDR.
* **l2ServiceLoadBalancerConfiguration**: [L2ServiceLoadBalancerConfiguration](#l2serviceloadbalancerconfiguration): The configuration of the Layer 2 service load balancer for this Kubernetes cluster. A maximum of one service load balancer may be specified, either Layer 2 or BGP.
* **podCidrs**: string[]: The CIDR notation IP ranges from which to assign pod IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
* **serviceCidrs**: string[]: The CIDR notation IP ranges from which to assign service IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.

## NetworkInterface
### Properties
* **address**: string (ReadOnly): The partial address of Peripheral Component Interconnect (PCI).
* **deviceConnectionType**: 'PCI' | string (ReadOnly): The connection type of the device.
* **model**: string (ReadOnly): The model name of the device.
* **physicalSlot**: int (ReadOnly): The physical slot for this device.
* **portCount**: int (ReadOnly): The number of ports on the device.
* **portSpeed**: int (ReadOnly): The maximum amount of data in gigabits that the line card transmits through a port at any given second.
* **vendor**: string (ReadOnly): The vendor name of the device.

## Nic
### Properties
* **lldpNeighbor**: [LldpNeighbor](#lldpneighbor) (ReadOnly): The information about the device connected to this NIC.
* **macAddress**: string (ReadOnly): The MAC address associated with this NIC.
* **name**: string (ReadOnly): The name of the NIC/interface.

## OperationStatusResult
### Properties
* **endTime**: string (ReadOnly): The end time of the operation.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): If present, details of the operation error.
* **id**: string (ReadOnly): Fully qualified ID for the async operation.
* **name**: string (ReadOnly): Name of the async operation.
* **operations**: [OperationStatusResult](#operationstatusresult)[] (ReadOnly): The operations list.
* **percentComplete**: int {minValue: 0, maxValue: 100} (ReadOnly): Percent of the operation that is complete.
* **properties**: [OperationStatusResultProperties](#operationstatusresultproperties): The additional properties of the operation status result.
* **resourceId**: string (ReadOnly): Fully qualified ID of the resource against which the original async operation was started.
* **startTime**: string (ReadOnly): The start time of the operation.
* **status**: string (Required): Operation status.

## OperationStatusResultProperties
### Properties
* **exitCode**: string (ReadOnly): For actions that run commands or scripts, the exit code of the script execution.
* **outputHead**: string (ReadOnly): For actions that run commands or scripts, the leading bytes of the output of the script execution.
* **resultRef**: string (ReadOnly): For actions that run commands or scripts, a reference to the location of the result.
* **resultUrl**: string (ReadOnly): For actions that run commands or scripts, the URL where the full output of the script output can be retrieved.

## OsDisk
### Properties
* **createOption**: 'Ephemeral' | string: The strategy for creating the OS disk.
* **deleteOption**: 'Delete' | string: The strategy for deleting the OS disk.
* **diskSizeGB**: int (Required): The size of the disk. Required if the createOption is Ephemeral. Allocations are measured in gibibytes.

## RackDefinition
### Properties
* **availabilityZone**: string {pattern: "^[a-zA-Z0-9]{1,10}$"}: The zone name used for this rack when created. Availability zones are used for workload placement.
* **bareMetalMachineConfigurationData**: [BareMetalMachineConfigurationData](#baremetalmachineconfigurationdata)[]: The unordered list of bare metal machine configuration.
* **networkRackId**: string (Required): The resource ID of the network rack that matches this rack definition.
* **rackLocation**: string {maxLength: 256}: The free-form description of the rack's location.
* **rackSerialNumber**: string {minLength: 1, maxLength: 64} (Required): The unique identifier for the rack within Network Cloud cluster. An alternate unique alphanumeric value other than a serial number may be provided if desired.
* **rackSkuId**: string (Required): The resource ID of the sku for the rack being added.
* **storageApplianceConfigurationData**: [StorageApplianceConfigurationData](#storageapplianceconfigurationdata)[]: The list of storage appliance configuration data for this rack.

## RackProperties
### Properties
* **availabilityZone**: string {pattern: "^[a-zA-Z0-9]{1,10}$"} (Required): The value that will be used for machines in this rack to represent the availability zones that can be referenced by Hybrid AKS Clusters for node arrangement.
* **clusterId**: string (ReadOnly): The resource ID of the cluster the rack is created for. This value is set when the rack is created by the cluster.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the rack.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the rack resource.
* **rackLocation**: string {maxLength: 256} (Required): The free-form description of the rack location. (e.g. “DTN Datacenter, Floor 3, Isle 9, Rack 2B”)
* **rackSerialNumber**: string {minLength: 1, maxLength: 64} (Required): The unique identifier for the rack within Network Cloud cluster. An alternate unique alphanumeric value other than a serial number may be provided if desired.
* **rackSkuId**: string (Required): The SKU for the rack.

## RackSkuProperties
### Properties
* **computeMachines**: [MachineSkuSlot](#machineskuslot)[] (ReadOnly): The list of machine SKUs and associated rack slot for the compute-dedicated machines in this rack model.
* **controllerMachines**: [MachineSkuSlot](#machineskuslot)[] (ReadOnly): The list of machine SKUs and associated rack slot for the control-plane dedicated machines in this rack model.
* **description**: string (ReadOnly): The free-form text describing the rack.
* **maxClusterSlots**: int (ReadOnly): The maximum number of compute racks supported by an aggregator rack. 0 if this is a compute rack or a rack for a single rack cluster(rackType="Single").
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the rack SKU resource.
* **rackType**: 'Aggregator' | 'Compute' | 'Single' | string (ReadOnly): The type of the rack.
* **storageAppliances**: [StorageApplianceSkuSlot](#storageapplianceskuslot)[] (ReadOnly): The list of appliance SKUs and associated rack slot for the storage appliance(s) in this rack model.
* **supportedRackSkuIds**: string[] (ReadOnly): The list of supported SKUs if the rack is an aggregator.

## RuntimeProtectionConfiguration
### Properties
* **enforcementLevel**: 'Audit' | 'Disabled' | 'OnDemand' | 'Passive' | 'RealTime' | string: The mode of operation for runtime protection.

## RuntimeProtectionStatus
### Properties
* **definitionsLastUpdated**: string (ReadOnly): The timestamp when the malware definitions were last updated.
* **definitionsVersion**: string (ReadOnly): The version of the malware definitions.
* **scanCompletedTime**: string (ReadOnly): The timestamp of the most recently completed scan, or empty if there has never been a scan.
* **scanScheduledTime**: string (ReadOnly): The timestamp of the most recently scheduled scan, or empty if no scan has been scheduled.
* **scanStartedTime**: string (ReadOnly): The timestamp of the most recently started scan, or empty if there has never been a scan.

## SecretArchiveReference
### Properties
* **keyVaultId**: string (ReadOnly): The resource ID of the key vault containing the secret.
* **secretName**: string (ReadOnly): The name of the secret in the key vault.
* **secretVersion**: string (ReadOnly): The version of the secret in the key vault.

## SecretRotationStatus
### Properties
* **expirePeriodDays**: int (ReadOnly): The maximum number of days the secret may be used before it must be changed.
* **lastRotationTime**: string (ReadOnly): The date and time when the secret was last changed.
* **rotationPeriodDays**: int (ReadOnly): The number of days a secret exists before rotations will be attempted.
* **secretArchiveReference**: [SecretArchiveReference](#secretarchivereference) (ReadOnly): The reference to the secret in a key vault.
* **secretType**: string (ReadOnly): The type name used to identify the purpose of the secret.

## ServiceLoadBalancerBgpPeer
### Properties
* **bfdEnabled**: 'False' | 'True' | string: The indicator of BFD enablement for this BgpPeer.
* **bgpMultiHop**: 'False' | 'True' | string: The indicator to enable multi-hop peering support.
* **holdTime**: string: Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The requested BGP hold time value. This field uses ISO 8601 duration format, for example P1H.
* **keepAliveTime**: string: Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The requested BGP keepalive time value. This field uses ISO 8601 duration format, for example P1H.
* **myAsn**: int {minValue: 0, maxValue: 4294967295}: The autonomous system number used for the local end of the BGP session.
* **name**: string {pattern: "^[a-z0-9]([a-z0-9.-]{0,61}[a-z0-9]){0,1}$"} (Required): The name used to identify this BGP peer for association with a BGP advertisement.
* **password**: string {sensitive, maxLength: 80, pattern: "^[a-zA-Z0-9]{0,80}$"} (WriteOnly): The authentication password for routers enforcing TCP MD5 authenticated sessions.
* **peerAddress**: string (Required): The IPv4 or IPv6 address used to connect this BGP session.
* **peerAsn**: int {minValue: 0, maxValue: 4294967295} (Required): The autonomous system number expected from the remote end of the BGP session.
* **peerPort**: int: The port used to connect this BGP session.

## ServicePrincipalInformation
### Properties
* **applicationId**: string (Required): The application ID, also known as client ID, of the service principal.
* **password**: string {sensitive} (Required): The password of the service principal.
* **principalId**: string (Required): The principal ID, also known as the object ID, of the service principal.
* **tenantId**: string (Required): The tenant ID, also known as the directory ID, of the tenant in which the service principal is created.

## SshPublicKey
### Properties
* **keyData**: string {minLength: 1} (Required): The SSH public key data.

## StorageApplianceConfigurationData
### Properties
* **adminCredentials**: [AdministrativeCredentials](#administrativecredentials) (Required): The credentials of the administrative interface on this storage appliance.
* **rackSlot**: int {minValue: 1, maxValue: 256} (Required): The slot that storage appliance is in the rack based on the BOM configuration.
* **serialNumber**: string (Required): The serial number of the appliance.
* **storageApplianceName**: string {pattern: "^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$"}: The user-provided name for the storage appliance that will be created from this specification.

## StorageApplianceEnableRemoteVendorManagementParameters
### Properties
* **supportEndpoints**: string[]: Field Deprecated. This field is not used and will be rejected if provided. The list of IPv4 subnets (in CIDR format), IPv6 subnets (in CIDR format), or hostnames that the storage appliance needs accessible in order to turn on the remote vendor management.

## StorageApplianceProperties
### Properties
* **administratorCredentials**: [AdministrativeCredentials](#administrativecredentials) (Required): The credentials of the administrative interface on this storage appliance.
* **capacity**: int (ReadOnly): The total capacity of the storage appliance.
* **capacityUsed**: int (ReadOnly): The amount of storage consumed.
* **clusterId**: string (ReadOnly): The resource ID of the cluster this storage appliance is associated with.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The detailed status of the storage appliance.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **managementIpv4Address**: string (ReadOnly): The endpoint for the management interface of the storage appliance.
* **manufacturer**: string (ReadOnly): The manufacturer of the storage appliance.
* **model**: string (ReadOnly): The model of the storage appliance.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the storage appliance.
* **rackId**: string (Required): The resource ID of the rack where this storage appliance resides.
* **rackSlot**: int {minValue: 1, maxValue: 256} (Required): The slot the storage appliance is in the rack based on the BOM configuration.
* **remoteVendorManagementFeature**: 'Supported' | 'Unsupported' | string (ReadOnly): The indicator of whether the storage appliance supports remote vendor management.
* **remoteVendorManagementStatus**: 'Disabled' | 'Enabled' | 'Unsupported' | string (ReadOnly): The indicator of whether the remote vendor management feature is enabled or disabled, or unsupported if it is an unsupported feature.
* **secretRotationStatus**: [SecretRotationStatus](#secretrotationstatus)[] (ReadOnly): The list of statuses that represent secret rotation activity.
* **serialNumber**: string (Required): The serial number for the storage appliance.
* **storageApplianceSkuId**: string (Required): The SKU for the storage appliance.
* **version**: string (ReadOnly): The version of the storage appliance.

## StorageApplianceSkuProperties
### Properties
* **capacityGB**: int (ReadOnly): The maximum capacity of the storage appliance. Measured in gibibytes.
* **model**: string (ReadOnly): The model of the storage appliance.

## StorageApplianceSkuSlot
### Properties
* **properties**: [StorageApplianceSkuProperties](#storageapplianceskuproperties): The list of the resource properties.
* **rackSlot**: int (ReadOnly): The position in the rack for the storage appliance.

## StorageProfile
### Properties
* **osDisk**: [OsDisk](#osdisk) (Required): The disk to use with this virtual machine.
* **volumeAttachments**: string[]: The resource IDs of volumes that are requested to be attached to the virtual machine.

## StringKeyValuePair
### Properties
* **key**: string (Required): The key to the mapped value.
* **value**: string (Required): The value of the mapping key.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrunkedNetworkAttachmentConfiguration
### Properties
* **networkId**: string (Required): The resource ID of the network that is being configured for attachment.
* **pluginType**: 'DPDK' | 'IPVLAN' | 'MACVLAN' | 'OSDevice' | 'SRIOV' | string: The indicator of how this network will be utilized by the Kubernetes cluster.

## TrunkedNetworkProperties
### Properties
* **associatedResourceIds**: string[] (ReadOnly): The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
* **clusterId**: string (ReadOnly): The resource ID of the Network Cloud cluster this trunked network is associated with.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | string (ReadOnly): The more detailed status of the trunked network.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **hybridAksClustersAssociatedIds**: string[] (ReadOnly): Field Deprecated. These fields will be empty/omitted. The list of Hybrid AKS cluster resource IDs that are associated with this trunked network.
* **hybridAksPluginType**: 'DPDK' | 'OSDevice' | 'SRIOV' | string: Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The network plugin type for Hybrid AKS.
* **interfaceName**: string {maxLength: 12, pattern: "^[a-zA-Z0-9@._-]*$"}: The default interface name for this trunked network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
* **isolationDomainIds**: string[] {minLength: 1} (Required): The list of resource IDs representing the Network Fabric isolation domains. It can be any combination of l2IsolationDomain and l3IsolationDomain resources.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the trunked network.
* **virtualMachinesAssociatedIds**: string[] (ReadOnly): Field Deprecated. These fields will be empty/omitted. The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this trunked network.
* **vlans**: int[] {minLength: 1} (Required): The list of vlans that are selected from the isolation domains for trunking.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## ValidationThreshold
### Properties
* **grouping**: 'PerCluster' | 'PerRack' | string (Required): Selection of how the type evaluation is applied to the cluster calculation.
* **type**: 'CountSuccess' | 'PercentSuccess' | string (Required): Selection of how the threshold should be evaluated.
* **value**: int {minValue: 0} (Required): The numeric threshold value.

## VirtualMachinePlacementHint
### Properties
* **hintType**: 'Affinity' | 'AntiAffinity' | string (Required): The specification of whether this hint supports affinity or anti-affinity with the referenced resources.
* **resourceId**: string (Required): The resource ID of the target object that the placement hints will be checked against, e.g., the bare metal node to host the virtual machine.
* **schedulingExecution**: 'Hard' | 'Soft' | string (Required): The indicator of whether the hint is a hard or soft requirement during scheduling.
* **scope**: 'Machine' | 'Rack' | string (Required): The scope for the virtual machine affinity or anti-affinity placement hint. It should always be "Machine" in the case of node affinity.

## VirtualMachinePowerOffParameters
### Properties
* **skipShutdown**: 'False' | 'True' | string: The indicator of whether to skip the graceful OS shutdown and power off the virtual machine immediately.

## VirtualMachineProperties
### Properties
* **adminUsername**: string {minLength: 1, maxLength: 32, pattern: "^[a-z_][a-z0-9_]{0,31}$"} (Required): The name of the administrator to which the ssh public keys will be added into the authorized keys.
* **availabilityZone**: string (ReadOnly): The cluster availability zone containing this virtual machine.
* **bareMetalMachineId**: string (ReadOnly): The resource ID of the bare metal machine that hosts the virtual machine.
* **bootMethod**: 'BIOS' | 'UEFI' | string: Selects the boot method for the virtual machine.
* **cloudServicesNetworkAttachment**: [NetworkAttachment](#networkattachment) (Required): The cloud service network that provides platform-level services for the virtual machine.
* **clusterId**: string (ReadOnly): The resource ID of the cluster the virtual machine is created for.
* **cpuCores**: int {minValue: 2} (Required): The number of CPU cores in the virtual machine.
* **detailedStatus**: 'Available' | 'Error' | 'Provisioning' | 'Running' | 'Scheduling' | 'Stopped' | 'Terminating' | 'Unknown' | string (ReadOnly): The more detailed status of the virtual machine.
* **detailedStatusMessage**: string (ReadOnly): The descriptive message about the current detailed status.
* **isolateEmulatorThread**: 'False' | 'True' | string: Field Deprecated, the value will be ignored if provided. The indicator of whether one of the specified CPU cores is isolated to run the emulator thread for this virtual machine.
* **memorySizeGB**: int {minValue: 1} (Required): The memory size of the virtual machine. Allocations are measured in gibibytes.
* **networkAttachments**: [NetworkAttachment](#networkattachment)[]: The list of network attachments to the virtual machine.
* **networkData**: string: The Base64 encoded cloud-init network data.
* **placementHints**: [VirtualMachinePlacementHint](#virtualmachineplacementhint)[]: The scheduling hints for the virtual machine.
* **powerState**: 'Off' | 'On' | 'Unknown' | string (ReadOnly): The power state of the virtual machine.
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
* **sizeMiB**: int {minValue: 1} (Required): The size of the allocation for this volume in Mebibytes.

