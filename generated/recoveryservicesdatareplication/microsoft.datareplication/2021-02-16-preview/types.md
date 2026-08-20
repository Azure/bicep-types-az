# Microsoft.DataReplication @ 2021-02-16-preview

## Resource Microsoft.DataReplication/replicationFabrics@2021-02-16-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string {minLength: 1} (Required): Gets or sets the location of the fabric.
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FabricModelProperties](#fabricmodelproperties) (Required): Fabric model properties.
* **systemData**: [FabricModelSystemData](#fabricmodelsystemdata) (ReadOnly)
* **tags**: [FabricModelTags](#fabricmodeltags): Gets or sets the resource tags.
* **type**: 'Microsoft.DataReplication/replicationFabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationFabrics/fabricAgents@2021-02-16-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DraModelProperties](#dramodelproperties) (Required): Dra model properties.
* **systemData**: [DraModelSystemData](#dramodelsystemdata) (ReadOnly)
* **type**: 'Microsoft.DataReplication/replicationFabrics/fabricAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults@2021-02-16-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string {minLength: 1} (Required): Gets or sets the location of the vault.
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VaultModelProperties](#vaultmodelproperties): Vault properties.
* **systemData**: [VaultModelSystemData](#vaultmodelsystemdata) (ReadOnly)
* **tags**: [VaultModelTags](#vaultmodeltags): Gets or sets the resource tags.
* **type**: 'Microsoft.DataReplication/replicationVaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/alertSettings@2021-02-16-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EmailConfigurationModelProperties](#emailconfigurationmodelproperties) (Required): Email configuration model properties.
* **systemData**: [EmailConfigurationModelSystemData](#emailconfigurationmodelsystemdata) (ReadOnly)
* **type**: 'Microsoft.DataReplication/replicationVaults/alertSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/jobs@2021-02-16-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2021-02-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowModelProperties](#workflowmodelproperties) (ReadOnly): Workflow model properties.
* **systemData**: [WorkflowModelSystemData](#workflowmodelsystemdata) (ReadOnly)
* **type**: 'Microsoft.DataReplication/replicationVaults/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/protectedItems@2021-02-16-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectedItemModelProperties](#protecteditemmodelproperties) (Required): Protected item model properties.
* **systemData**: [ProtectedItemModelSystemData](#protecteditemmodelsystemdata) (ReadOnly)
* **type**: 'Microsoft.DataReplication/replicationVaults/protectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/replicationExtensions@2021-02-16-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReplicationExtensionModelProperties](#replicationextensionmodelproperties) (Required): Replication extension model properties.
* **systemData**: [ReplicationExtensionModelSystemData](#replicationextensionmodelsystemdata) (ReadOnly)
* **type**: 'Microsoft.DataReplication/replicationVaults/replicationExtensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/replicationPolicies@2021-02-16-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyModelProperties](#policymodelproperties) (Required): Policy model properties.
* **systemData**: [PolicyModelSystemData](#policymodelsystemdata) (ReadOnly)
* **type**: 'Microsoft.DataReplication/replicationVaults/replicationPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.DataReplication/locations@2021-02-16-preview)
* **Resource**: Microsoft.DataReplication/locations
* **ApiVersion**: 2021-02-16-preview
* **Input**: [CheckNameAvailabilityModel](#checknameavailabilitymodel)
* **Output**: [CheckNameAvailabilityResponseModel](#checknameavailabilityresponsemodel)

## Function plannedFailover (Microsoft.DataReplication/replicationVaults/protectedItems@2021-02-16-preview)
* **Resource**: Microsoft.DataReplication/replicationVaults/protectedItems
* **ApiVersion**: 2021-02-16-preview
* **Input**: [PlannedFailoverModel](#plannedfailovermodel)
* **Output**: [PlannedFailoverModel](#plannedfailovermodel)

## Function preflight (Microsoft.DataReplication/deployments@2021-02-16-preview)
* **Resource**: Microsoft.DataReplication/deployments
* **ApiVersion**: 2021-02-16-preview
* **Input**: [DeploymentPreflightModel](#deploymentpreflightmodel)
* **Output**: [DeploymentPreflightModel](#deploymentpreflightmodel)

## AzStackHCIClusterProperties
### Properties
* **clusterName**: string {minLength: 1} (Required): Gets or sets the AzStackHCICluster FQDN name.
* **resourceName**: string {minLength: 1} (Required): Gets or sets the AzStackHCICluster resource name.
* **storageAccountName**: string {minLength: 1} (Required): Gets or sets the Storage account name.
* **storageContainers**: [StorageContainerProperties](#storagecontainerproperties)[] (Required): Gets or sets the list of AzStackHCICluster Storage Container.

## CheckNameAvailabilityModel
### Properties
* **name**: string: Gets or sets the resource name.
* **type**: string: Gets or sets the resource type.

## CheckNameAvailabilityResponseModel
### Properties
* **message**: string: Gets or sets the message for resource name unavailability.
* **nameAvailable**: bool: Gets or sets a value indicating whether resource name is available or not.
* **reason**: string: Gets or sets the reason for resource name unavailability.

## DeploymentPreflightModel
### Properties
* **resources**: [DeploymentPreflightResource](#deploymentpreflightresource)[]: Gets or sets the list of resources.

## DeploymentPreflightResource
### Properties
* **apiVersion**: string: Gets or sets the Api version.
* **location**: string: Gets or sets the location of the resource.
* **name**: string: Gets or sets the resource name.
* **type**: string: Gets or sets the resource type.

## DraModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### VMwareDraModelCustomProperties
#### Properties
* **biosId**: string {minLength: 1} (Required): Gets or sets the BIOS Id of the DRA machine.
* **instanceType**: 'VMware' (Required): Gets or sets the instance type.
* **marsAuthenticationIdentity**: [IdentityModel](#identitymodel) (Required): Identity model.


## DraModelProperties
### Properties
* **authenticationIdentity**: [IdentityModel](#identitymodel) (Required): Identity model.
* **correlationId**: string (ReadOnly): Gets or sets the Dra correlation Id.
* **customProperties**: [DraModelCustomProperties](#dramodelcustomproperties) (Required): Dra model custom properties.
* **healthErrors**: [HealthErrorModel](#healtherrormodel)[] (ReadOnly): Gets or sets the list of health errors.
* **isResponsive**: bool (ReadOnly): Gets or sets a value indicating whether Dra is responsive.
* **lastHeartbeat**: string (ReadOnly): Gets or sets the time when last heartbeat was sent by the Dra.
* **machineId**: string {minLength: 1} (Required): Gets or sets the machine Id where Dra is running.
* **machineName**: string {minLength: 1} (Required): Gets or sets the machine name where Dra is running.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the Dra.
* **resourceAccessIdentity**: [IdentityModel](#identitymodel) (Required): Identity model.
* **versionNumber**: string (ReadOnly): Gets or sets the Dra version.

## DraModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## EmailConfigurationModelProperties
### Properties
* **customEmailAddresses**: string[]: Gets or sets the custom email address for sending emails.
* **locale**: string: Gets or sets the locale for the email notification.
* **sendToOwners**: bool (Required): Gets or sets a value indicating whether to send email to subscription administrator.

## EmailConfigurationModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## ErrorModel
### Properties
* **causes**: string (ReadOnly): Gets or sets the possible causes of error.
* **code**: string (ReadOnly): Gets or sets the error code.
* **creationTime**: string (ReadOnly): Gets or sets the creation time of error.
* **message**: string (ReadOnly): Gets or sets the error message.
* **recommendation**: string (ReadOnly): Gets or sets the recommended action to resolve error.
* **severity**: string (ReadOnly): Gets or sets the error severity.
* **type**: string (ReadOnly): Gets or sets the error type.

## FabricModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### AzStackHCIFabricModelCustomProperties
#### Properties
* **applianceName**: string[] (ReadOnly): Gets or sets the Appliance name.
* **azStackHciSiteId**: string {minLength: 1} (Required): Gets or sets the ARM Id of the AzStackHCI site.
* **cluster**: [AzStackHCIClusterProperties](#azstackhciclusterproperties) (Required): AzStackHCI cluster properties.
* **fabricContainerId**: string (ReadOnly): Gets or sets the fabric container Id.
* **fabricResourceId**: string (ReadOnly): Gets or sets the fabric resource Id.
* **instanceType**: 'AzStackHCI' (Required): Gets or sets the instance type.
* **migrationHubUri**: string (ReadOnly): Gets or sets the migration hub Uri.
* **migrationSolutionId**: string {minLength: 1} (Required): Gets or sets the Migration solution ARM Id.

### HyperVMigrateFabricModelCustomProperties
#### Properties
* **fabricContainerId**: string (ReadOnly): Gets or sets the fabric container Id.
* **fabricResourceId**: string (ReadOnly): Gets or sets the fabric resource Id.
* **hyperVSiteId**: string {minLength: 1} (Required): Gets or sets the ARM Id of the HyperV site.
* **instanceType**: 'HyperVMigrate' (Required): Gets or sets the instance type.
* **migrationHubUri**: string (ReadOnly): Gets or sets the migration hub Uri.
* **migrationSolutionId**: string {minLength: 1} (Required): Gets or sets the migration solution ARM Id.

### VMwareMigrateFabricModelCustomProperties
#### Properties
* **instanceType**: 'VMwareMigrate' (Required): Gets or sets the instance type.
* **migrationSolutionId**: string {minLength: 1} (Required): Gets or sets the ARM Id of the migration solution.
* **vmwareSiteId**: string {minLength: 1} (Required): Gets or sets the ARM Id of the VMware site.


## FabricModelProperties
### Properties
* **customProperties**: [FabricModelCustomProperties](#fabricmodelcustomproperties) (Required): Fabric model custom properties.
* **health**: 'Critical' | 'Normal' | 'Warning' | string (ReadOnly): Gets or sets the fabric health.
* **healthErrors**: [HealthErrorModel](#healtherrormodel)[] (ReadOnly): Gets or sets the list of health errors.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the fabric.
* **serviceEndpoint**: string (ReadOnly): Gets or sets the service endpoint.
* **serviceResourceId**: string (ReadOnly): Gets or sets the service resource Id.

## FabricModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## FabricModelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FailoverProtectedItemProperties
### Properties
* **networkName**: string (ReadOnly): Gets or sets the network name.
* **protectedItemName**: string (ReadOnly): Gets or sets the protected item name.
* **recoveryPointId**: string (ReadOnly): Gets or sets the recovery point Id.
* **recoveryPointTime**: string (ReadOnly): Gets or sets the recovery point time.
* **subnet**: string (ReadOnly): Gets or sets the network subnet.
* **testVmName**: string (ReadOnly): Gets or sets the test VM name.
* **vmName**: string (ReadOnly): Gets or sets the VM name.

## HealthErrorModel
### Properties
* **affectedResourceCorrelationIds**: string[]: Gets or sets the list of affected resource correlation Ids. This can be used to
uniquely identify the count of items affected by a specific category and severity
as well as count of item affected by an specific issue.
* **affectedResourceType**: string: Gets or sets the type of affected resource type.
* **category**: string (ReadOnly): Gets or sets the error category.
* **causes**: string (ReadOnly): Gets or sets possible causes of the error.
* **childErrors**: [InnerHealthErrorModel](#innerhealtherrormodel)[]: Gets or sets a list of child health errors associated with this error.
* **code**: string (ReadOnly): Gets or sets the error code.
* **creationTime**: string (ReadOnly): Gets or sets the error creation time.
* **healthCategory**: string (ReadOnly): Gets or sets the health category.
* **isCustomerResolvable**: bool (ReadOnly): Gets or sets a value indicating whether the error is customer resolvable.
* **message**: string (ReadOnly): Gets or sets the error message.
* **recommendation**: string (ReadOnly): Gets or sets recommended action to resolve the error.
* **severity**: string (ReadOnly): Gets or sets the error severity.
* **source**: string (ReadOnly): Gets or sets the error source.
* **summary**: string (ReadOnly): Gets or sets the error summary.

## HyperVToAzStackHCIDiskInput
### Properties
* **diskFileFormat**: string {minLength: 1} (Required): Gets or sets the type of the virtual hard disk, vhd or vhdx.
* **diskId**: string {minLength: 1} (Required): Gets or sets the disk Id.
* **diskSizeGB**: int (Required): Gets or sets the disk size in GB.
* **isDynamic**: bool: Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard
disk.
* **isOsDisk**: bool (Required): Gets or sets a value indicating whether disk is os disk.
* **storageContainerId**: string: Gets or sets the target storage account ARM Id.

## HyperVToAzStackHCINicInput
### Properties
* **networkName**: string (ReadOnly): Gets or sets the network name.
* **nicId**: string {minLength: 1} (Required): Gets or sets the NIC Id.
* **selectionTypeForFailover**: 'NotSelected' | 'SelectedByDefault' | 'SelectedByUser' | 'SelectedByUserOverride' | string (Required): Gets or sets the selection type of the NIC.
* **targetNetworkId**: string {minLength: 1} (Required): Gets or sets the target network Id within AzStackHCI Cluster.
* **testNetworkId**: string {minLength: 1} (Required): Gets or sets the target test network Id within AzStackHCI Cluster.

## HyperVToAzStackHCIProtectedDiskProperties
### Properties
* **capacityInBytes**: int (ReadOnly): Gets or sets the disk capacity in bytes.
* **diskType**: string (ReadOnly): Gets or sets the disk type.
* **isDynamic**: bool (ReadOnly): Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard
disk.
* **isOsDisk**: bool (ReadOnly): Gets or sets a value indicating whether the disk is the OS disk.
* **migrateDiskName**: string (ReadOnly): Gets or sets the failover clone disk.
* **seedDiskName**: string (ReadOnly): Gets or sets the seed disk name.
* **sourceDiskId**: string (ReadOnly): Gets or sets the source disk Id.
* **sourceDiskName**: string (ReadOnly): Gets or sets the source disk Name.
* **storageContainerId**: string (ReadOnly): Gets or sets the ARM Id of the storage container.
* **storageContainerLocalPath**: string (ReadOnly): Gets or sets the local path of the storage container.
* **testMigrateDiskName**: string (ReadOnly): Gets or sets the test failover clone disk.

## HyperVToAzStackHCIProtectedNicProperties
### Properties
* **macAddress**: string (ReadOnly): Gets or sets the NIC mac address.
* **networkName**: string (ReadOnly): Gets or sets the network name.
* **nicId**: string (ReadOnly): Gets or sets the NIC Id.
* **selectionTypeForFailover**: 'NotSelected' | 'SelectedByDefault' | 'SelectedByUser' | 'SelectedByUserOverride' | string (ReadOnly): Gets or sets the selection type of the NIC.
* **targetNetworkId**: string (ReadOnly): Gets or sets the target network Id within AzStackHCI Cluster.
* **testNetworkId**: string (ReadOnly): Gets or sets the target test network Id within AzStackHCI Cluster.

## IdentityModel
### Properties
* **aadAuthority**: string {minLength: 1} (Required): Gets or sets the authority of the SPN with which Dra communicates to service.
* **applicationId**: string {minLength: 1} (Required): Gets or sets the client/application Id of the SPN with which Dra communicates to
service.
* **audience**: string {minLength: 1} (Required): Gets or sets the audience of the SPN with which Dra communicates to service.
* **objectId**: string {minLength: 1} (Required): Gets or sets the object Id of the SPN with which Dra communicates to service.
* **tenantId**: string {minLength: 1} (Required): Gets or sets the tenant Id of the SPN with which Dra communicates to service.

## InnerHealthErrorModel
### Properties
* **category**: string (ReadOnly): Gets or sets the error category.
* **causes**: string (ReadOnly): Gets or sets possible causes of the error.
* **code**: string (ReadOnly): Gets or sets the error code.
* **creationTime**: string (ReadOnly): Gets or sets the error creation time.
* **healthCategory**: string (ReadOnly): Gets or sets the health category.
* **isCustomerResolvable**: bool (ReadOnly): Gets or sets a value indicating whether the error is customer resolvable.
* **message**: string (ReadOnly): Gets or sets the error message.
* **recommendation**: string (ReadOnly): Gets or sets recommended action to resolve the error.
* **severity**: string (ReadOnly): Gets or sets the error severity.
* **source**: string (ReadOnly): Gets or sets the error source.
* **summary**: string (ReadOnly): Gets or sets the error summary.

## PlannedFailoverModel
### Properties
* **properties**: [PlannedFailoverModelProperties](#plannedfailovermodelproperties) (Required): Planned failover model properties.

## PlannedFailoverModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### HyperVToAzStackHCIPlannedFailoverModelCustomProperties
#### Properties
* **instanceType**: 'HyperVToAzStackHCI' (Required): Gets or sets the instance type.
* **shutdownSourceVM**: bool (Required): Gets or sets a value indicating whether VM needs to be shut down.

### VMwareToAzStackHCIPlannedFailoverModelCustomProperties
#### Properties
* **instanceType**: 'VMwareToAzStackHCI' (Required): Gets or sets the instance type.
* **shutdownSourceVM**: bool (Required): Gets or sets a value indicating whether VM needs to be shut down.


## PlannedFailoverModelProperties
### Properties
* **customProperties**: [PlannedFailoverModelCustomProperties](#plannedfailovermodelcustomproperties) (Required): Planned failover model custom properties.

## PolicyModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### HyperVToAzStackHCIPolicyModelCustomProperties
#### Properties
* **appConsistentFrequencyInMinutes**: int (Required): Gets or sets the app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (Required): Gets or sets the crash consistent snapshot frequency (in minutes).
* **instanceType**: 'HyperVToAzStackHCI' (Required): Gets or sets the instance type.
* **recoveryPointHistoryInMinutes**: int (Required): Gets or sets the duration in minutes until which the recovery points need to be
stored.

### VMwareToAzStackHCIPolicyModelCustomProperties
#### Properties
* **appConsistentFrequencyInMinutes**: int (Required): Gets or sets the app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (Required): Gets or sets the crash consistent snapshot frequency (in minutes).
* **instanceType**: 'VMwareToAzStackHCI' (Required): Gets or sets the instance type.
* **recoveryPointHistoryInMinutes**: int (Required): Gets or sets the duration in minutes until which the recovery points need to be
stored.


## PolicyModelProperties
### Properties
* **customProperties**: [PolicyModelCustomProperties](#policymodelcustomproperties) (Required): Policy model custom properties.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the policy.

## PolicyModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## ProtectedItemDynamicMemoryConfig
### Properties
* **maximumMemoryInMegaBytes**: int (Required): Gets or sets maximum memory in MB.
* **minimumMemoryInMegaBytes**: int (Required): Gets or sets minimum memory in MB.
* **targetMemoryBufferPercentage**: int (Required): Gets or sets target memory buffer in %.

## ProtectedItemModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### HyperVToAzStackHCIProtectedItemModelCustomProperties
#### Properties
* **activeLocation**: 'Primary' | 'Recovery' | string (ReadOnly): Gets or sets the location of the protected item.
* **customLocationRegion**: string {minLength: 1} (Required): Gets or sets the location of Azure Arc HCI custom location resource.
* **disksToInclude**: [HyperVToAzStackHCIDiskInput](#hypervtoazstackhcidiskinput)[] {minLength: 1} (Required): Gets or sets the list of disks to replicate.
* **dynamicMemoryConfig**: [ProtectedItemDynamicMemoryConfig](#protecteditemdynamicmemoryconfig): Protected item dynamic memory config.
* **fabricDiscoveryMachineId**: string {minLength: 1} (Required): Gets or sets the ARM Id of the discovered machine.
* **failoverRecoveryPointId**: string (ReadOnly): Gets or sets the recovery point Id to which the VM was failed over.
* **firmwareType**: string (ReadOnly): Gets or sets the firmware type.
* **hyperVGeneration**: string {minLength: 1} (Required): Gets or sets the hypervisor generation of the virtual machine.
* **initialReplicationProgressPercentage**: int (ReadOnly): Gets or sets the initial replication progress percentage. This is calculated based on
total bytes processed for all disks in the source VM.
* **instanceType**: 'HyperVToAzStackHCI' (Required): Gets or sets the instance type.
* **isDynamicRam**: bool: Gets or sets a value indicating whether memory is dynamical.
* **lastRecoveryPointId**: string (ReadOnly): Gets or sets the last recovery point Id.
* **lastRecoveryPointReceived**: string (ReadOnly): Gets or sets the last recovery point received time.
* **lastReplicationUpdateTime**: string (ReadOnly): Gets or sets the latest timestamp that replication status is updated.
* **nicsToInclude**: [HyperVToAzStackHCINicInput](#hypervtoazstackhcinicinput)[] {minLength: 1} (Required): Gets or sets the list of VM NIC to replicate.
* **osName**: string (ReadOnly): Gets or sets the name of the OS.
* **osType**: string (ReadOnly): Gets or sets the type of the OS.
* **protectedDisks**: [HyperVToAzStackHCIProtectedDiskProperties](#hypervtoazstackhciprotecteddiskproperties)[] (ReadOnly): Gets or sets the list of protected disks.
* **protectedNics**: [HyperVToAzStackHCIProtectedNicProperties](#hypervtoazstackhciprotectednicproperties)[] (ReadOnly): Gets or sets the VM NIC details.
* **resyncProgressPercentage**: int (ReadOnly): Gets or sets the resync progress percentage. This is calculated based on total bytes
processed for all disks in the source VM.
* **runAsAccountId**: string {minLength: 1} (Required): Gets or sets the Run As account Id.
* **sourceApplianceName**: string (ReadOnly): Gets or sets the source appliance name.
* **sourceCpuCores**: int (ReadOnly): Gets or sets the source VM CPU cores.
* **sourceDraName**: string {minLength: 1} (Required): Gets or sets the source DRA name.
* **sourceMemoryInMegaBytes**: int (ReadOnly): Gets or sets the source VM ram memory size in megabytes.
* **sourceVmName**: string (ReadOnly): Gets or sets the source VM display name.
* **storageContainerId**: string {minLength: 1} (Required): Gets or sets the target storage container ARM Id.
* **targetApplianceName**: string (ReadOnly): Gets or sets the target appliance name.
* **targetArcClusterCustomLocationId**: string {minLength: 1} (Required): Gets or sets the Target Arc Cluster Custom Location ARM Id.
* **targetAzStackHciClusterName**: string (ReadOnly): Gets or sets the Target AzStackHCI cluster name.
* **targetCpuCores**: int: Gets or sets the target CPU cores.
* **targetDraName**: string {minLength: 1} (Required): Gets or sets the target DRA name.
* **targetHciClusterId**: string {minLength: 1} (Required): Gets or sets the Target HCI Cluster ARM Id.
* **targetLocation**: string (ReadOnly): Gets or sets the target location.
* **targetMemoryInMegaBytes**: int: Gets or sets the target memory in mega-bytes.
* **targetNetworkId**: string: Gets or sets the target network Id within AzStackHCI Cluster.
* **targetResourceGroupId**: string {minLength: 1} (Required): Gets or sets the target resource group ARM Id.
* **targetVmBiosId**: string (ReadOnly): Gets or sets the BIOS Id of the target AzStackHCI VM.
* **targetVmName**: string: Gets or sets the target VM display name.
* **testNetworkId**: string: Gets or sets the target test network Id within AzStackHCI Cluster.

### VMwareToAzStackHCIProtectedItemModelCustomProperties
#### Properties
* **activeLocation**: 'Primary' | 'Recovery' | string (ReadOnly): Gets or sets the location of the protected item.
* **customLocationRegion**: string {minLength: 1} (Required): Gets or sets the location of Azure Arc HCI custom location resource.
* **disksToInclude**: [VMwareToAzStackHCIDiskInput](#vmwaretoazstackhcidiskinput)[] {minLength: 1} (Required): Gets or sets the list of disks to replicate.
* **dynamicMemoryConfig**: [ProtectedItemDynamicMemoryConfig](#protecteditemdynamicmemoryconfig): Protected item dynamic memory config.
* **fabricDiscoveryMachineId**: string {minLength: 1} (Required): Gets or sets the ARM Id of the discovered machine.
* **failoverRecoveryPointId**: string (ReadOnly): Gets or sets the recovery point Id to which the VM was failed over.
* **firmwareType**: string (ReadOnly): Gets or sets the firmware type.
* **hyperVGeneration**: string {minLength: 1} (Required): Gets or sets the hypervisor generation of the virtual machine possible values are 1,2.
* **initialReplicationProgressPercentage**: int (ReadOnly): Gets or sets the initial replication progress percentage. This is calculated based on
total bytes processed for all disks in the source VM.
* **instanceType**: 'VMwareToAzStackHCI' (Required): Gets or sets the instance type.
* **isDynamicRam**: bool: Gets or sets a value indicating whether memory is dynamical.
* **lastRecoveryPointId**: string (ReadOnly): Gets or sets the last recovery point Id.
* **lastRecoveryPointReceived**: string (ReadOnly): Gets or sets the last recovery point received time.
* **lastReplicationUpdateTime**: string (ReadOnly): Gets or sets the latest timestamp that replication status is updated.
* **migrationProgressPercentage**: int (ReadOnly): Gets or sets the migration progress percentage.
* **nicsToInclude**: [VMwareToAzStackHCINicInput](#vmwaretoazstackhcinicinput)[] {minLength: 1} (Required): Gets or sets the list of VM NIC to replicate.
* **osName**: string (ReadOnly): Gets or sets the name of the OS.
* **osType**: string (ReadOnly): Gets or sets the type of the OS.
* **performAutoResync**: bool: Gets or sets a value indicating whether auto resync is to be done.
* **protectedDisks**: [VMwareToAzStackHCIProtectedDiskProperties](#vmwaretoazstackhciprotecteddiskproperties)[] (ReadOnly): Gets or sets the list of protected disks.
* **protectedNics**: [VMwareToAzStackHCIProtectedNicProperties](#vmwaretoazstackhciprotectednicproperties)[] (ReadOnly): Gets or sets the VM NIC details.
* **resumeProgressPercentage**: int (ReadOnly): Gets or sets the resume progress percentage.
* **resumeRetryCount**: int (ReadOnly): Gets or sets the resume retry count.
* **resyncProgressPercentage**: int (ReadOnly): Gets or sets the resync progress percentage. This is calculated based on total bytes
processed for all disks in the source VM.
* **resyncRequired**: bool (ReadOnly): Gets or sets a value indicating whether resync is required.
* **resyncRetryCount**: int (ReadOnly): Gets or sets the resync retry count.
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' | string (ReadOnly): Gets or sets the resync state.
* **runAsAccountId**: string {minLength: 1} (Required): Gets or sets the run as account Id.
* **sourceApplianceName**: string (ReadOnly): Gets or sets the source appliance name.
* **sourceCpuCores**: int (ReadOnly): Gets or sets the source VM CPU cores.
* **sourceDraName**: string {minLength: 1} (Required): Gets or sets the source DRA name.
* **sourceMemoryInMegaBytes**: int (ReadOnly): Gets or sets the source VM ram memory size in megabytes.
* **sourceVmName**: string (ReadOnly): Gets or sets the source VM display name.
* **storageContainerId**: string {minLength: 1} (Required): Gets or sets the target storage container ARM Id.
* **targetApplianceName**: string (ReadOnly): Gets or sets the target appliance name.
* **targetArcClusterCustomLocationId**: string {minLength: 1} (Required): Gets or sets the Target Arc Cluster Custom Location ARM Id.
* **targetAzStackHciClusterName**: string (ReadOnly): Gets or sets the Target AzStackHCI cluster name.
* **targetCpuCores**: int: Gets or sets the target CPU cores.
* **targetDraName**: string {minLength: 1} (Required): Gets or sets the target DRA name.
* **targetHciClusterId**: string {minLength: 1} (Required): Gets or sets the Target HCI Cluster ARM Id.
* **targetLocation**: string (ReadOnly): Gets or sets the target location.
* **targetMemoryInMegaBytes**: int: Gets or sets the target memory in mega-bytes.
* **targetNetworkId**: string: Gets or sets the target network Id within AzStackHCI Cluster.
* **targetResourceGroupId**: string {minLength: 1} (Required): Gets or sets the target resource group ARM Id.
* **targetVmBiosId**: string (ReadOnly): Gets or sets the BIOS Id of the target AzStackHCI VM.
* **targetVmName**: string: Gets or sets the target VM display name.
* **testNetworkId**: string: Gets or sets the target test network Id within AzStackHCI Cluster.


## ProtectedItemModelProperties
### Properties
* **allowedJobs**: string[] (ReadOnly): Gets or sets the allowed scenarios on the protected item.
* **correlationId**: string (ReadOnly): Gets or sets the protected item correlation Id.
* **currentJob**: [ProtectedItemModelPropertiesCurrentJob](#protecteditemmodelpropertiescurrentjob) (ReadOnly)
* **customProperties**: [ProtectedItemModelCustomProperties](#protecteditemmodelcustomproperties) (Required): Protected item model custom properties.
* **draId**: string (ReadOnly): Gets or sets the DRA Id.
* **fabricId**: string (ReadOnly): Gets or sets the fabric Id.
* **fabricObjectId**: string (ReadOnly): Gets or sets the fabric object Id.
* **fabricObjectName**: string (ReadOnly): Gets or sets the fabric object name.
* **healthErrors**: [HealthErrorModel](#healtherrormodel)[] (ReadOnly): Gets or sets the list of health errors.
* **lastFailedEnableProtectionJob**: [ProtectedItemModelPropertiesLastFailedEnableProtectionJob](#protecteditemmodelpropertieslastfailedenableprotectionjob) (ReadOnly)
* **lastFailedPlannedFailoverJob**: [ProtectedItemModelPropertiesLastFailedPlannedFailoverJob](#protecteditemmodelpropertieslastfailedplannedfailoverjob) (ReadOnly)
* **lastSuccessfulPlannedFailoverTime**: string (ReadOnly): Gets or sets the Last successful planned failover time.
* **lastSuccessfulTestFailoverTime**: string (ReadOnly): Gets or sets the Last successful test failover time.
* **lastSuccessfulUnplannedFailoverTime**: string (ReadOnly): Gets or sets the Last successful unplanned failover time.
* **lastTestFailoverJob**: [ProtectedItemModelPropertiesLastTestFailoverJob](#protecteditemmodelpropertieslasttestfailoverjob) (ReadOnly)
* **policyName**: string {minLength: 1} (Required): Gets or sets the policy name.
* **protectionState**: 'CancelFailoverFailedOnPrimary' | 'CancelFailoverFailedOnRecovery' | 'CancelFailoverInProgressOnPrimary' | 'CancelFailoverInProgressOnRecovery' | 'CancelFailoverStatesBegin' | 'CancelFailoverStatesEnd' | 'ChangeRecoveryPointCompleted' | 'ChangeRecoveryPointFailed' | 'ChangeRecoveryPointInitiated' | 'ChangeRecoveryPointStatesBegin' | 'ChangeRecoveryPointStatesEnd' | 'CommitFailoverCompleted' | 'CommitFailoverFailedOnPrimary' | 'CommitFailoverFailedOnRecovery' | 'CommitFailoverInProgressOnPrimary' | 'CommitFailoverInProgressOnRecovery' | 'CommitFailoverStatesBegin' | 'CommitFailoverStatesEnd' | 'DisablingFailed' | 'DisablingProtection' | 'EnablingFailed' | 'EnablingProtection' | 'InitialReplicationCompletedOnPrimary' | 'InitialReplicationCompletedOnRecovery' | 'InitialReplicationFailed' | 'InitialReplicationInProgress' | 'InitialReplicationStatesBegin' | 'InitialReplicationStatesEnd' | 'MarkedForDeletion' | 'PlannedFailoverCompleted' | 'PlannedFailoverCompleting' | 'PlannedFailoverCompletionFailed' | 'PlannedFailoverFailed' | 'PlannedFailoverInitiated' | 'PlannedFailoverTransitionStatesBegin' | 'PlannedFailoverTransitionStatesEnd' | 'Protected' | 'ProtectedStatesBegin' | 'ProtectedStatesEnd' | 'ReprotectFailed' | 'ReprotectInitiated' | 'ReprotectStatesBegin' | 'ReprotectStatesEnd' | 'UnplannedFailoverCompleted' | 'UnplannedFailoverCompleting' | 'UnplannedFailoverCompletionFailed' | 'UnplannedFailoverFailed' | 'UnplannedFailoverInitiated' | 'UnplannedFailoverTransitionStatesBegin' | 'UnplannedFailoverTransitionStatesEnd' | 'UnprotectedStatesBegin' | 'UnprotectedStatesEnd' | string (ReadOnly): Gets or sets the protection state.
* **protectionStateDescription**: string (ReadOnly): Gets or sets the protection state description.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the Dra.
* **replicationExtensionName**: string {minLength: 1} (Required): Gets or sets the replication extension name.
* **replicationHealth**: 'Critical' | 'Normal' | 'Warning' | string (ReadOnly): Gets or sets protected item replication health.
* **resynchronizationState**: 'None' | 'ResynchronizationCompleted' | 'ResynchronizationFailed' | 'ResynchronizationInitiated' | string (ReadOnly): Gets or sets the resynchronization state.
* **resyncRequired**: bool (ReadOnly): Gets or sets a value indicating whether resynchronization is required or not.
* **sourceFabricProviderId**: string (ReadOnly): Gets or sets the source fabric provider Id.
* **targetDraId**: string (ReadOnly): Gets or sets the target DRA Id.
* **targetFabricId**: string (ReadOnly): Gets or sets the target fabric Id.
* **targetFabricProviderId**: string (ReadOnly): Gets or sets the target fabric provider Id.
* **testFailoverState**: 'MarkedForDeletion' | 'None' | 'TestFailoverCleanupCompleting' | 'TestFailoverCleanupInitiated' | 'TestFailoverCompleted' | 'TestFailoverCompleting' | 'TestFailoverCompletionFailed' | 'TestFailoverFailed' | 'TestFailoverInitiated' | string (ReadOnly): Gets or sets the test failover state.
* **testFailoverStateDescription**: string (ReadOnly): Gets or sets the Test failover state description.

## ProtectedItemModelPropertiesCurrentJob
### Properties
* **displayName**: string (ReadOnly): Gets or sets the workflow friendly display name.
* **endTime**: string (ReadOnly): Gets or sets end time of the workflow.
* **id**: string (ReadOnly): Gets or sets workflow Id.
* **name**: string (ReadOnly): Gets or sets workflow name.
* **scenarioName**: string (ReadOnly): Gets or sets protection scenario name.
* **startTime**: string (ReadOnly): Gets or sets start time of the workflow.
* **state**: string (ReadOnly): Gets or sets workflow state.

## ProtectedItemModelPropertiesLastFailedEnableProtectionJob
### Properties
* **displayName**: string (ReadOnly): Gets or sets the workflow friendly display name.
* **endTime**: string (ReadOnly): Gets or sets end time of the workflow.
* **id**: string (ReadOnly): Gets or sets workflow Id.
* **name**: string (ReadOnly): Gets or sets workflow name.
* **scenarioName**: string (ReadOnly): Gets or sets protection scenario name.
* **startTime**: string (ReadOnly): Gets or sets start time of the workflow.
* **state**: string (ReadOnly): Gets or sets workflow state.

## ProtectedItemModelPropertiesLastFailedPlannedFailoverJob
### Properties
* **displayName**: string (ReadOnly): Gets or sets the workflow friendly display name.
* **endTime**: string (ReadOnly): Gets or sets end time of the workflow.
* **id**: string (ReadOnly): Gets or sets workflow Id.
* **name**: string (ReadOnly): Gets or sets workflow name.
* **scenarioName**: string (ReadOnly): Gets or sets protection scenario name.
* **startTime**: string (ReadOnly): Gets or sets start time of the workflow.
* **state**: string (ReadOnly): Gets or sets workflow state.

## ProtectedItemModelPropertiesLastTestFailoverJob
### Properties
* **displayName**: string (ReadOnly): Gets or sets the workflow friendly display name.
* **endTime**: string (ReadOnly): Gets or sets end time of the workflow.
* **id**: string (ReadOnly): Gets or sets workflow Id.
* **name**: string (ReadOnly): Gets or sets workflow name.
* **scenarioName**: string (ReadOnly): Gets or sets protection scenario name.
* **startTime**: string (ReadOnly): Gets or sets start time of the workflow.
* **state**: string (ReadOnly): Gets or sets workflow state.

## ProtectedItemModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## ReplicationExtensionModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### HyperVToAzStackHCIReplicationExtensionModelCustomProperties
#### Properties
* **asrServiceUri**: string (ReadOnly): Gets or sets the Uri of ASR.
* **azStackHciFabricArmId**: string {minLength: 1} (Required): Gets or sets the ARM Id of the target AzStackHCI fabric.
* **azStackHciSiteId**: string (ReadOnly): Gets or sets the ARM Id of the AzStackHCI site.
* **gatewayServiceUri**: string (ReadOnly): Gets or sets the Uri of Gateway.
* **hyperVFabricArmId**: string {minLength: 1} (Required): Gets or sets the ARM Id of the source HyperV fabric.
* **hyperVSiteId**: string (ReadOnly): Gets or sets the ARM Id of the HyperV site.
* **instanceType**: 'HyperVToAzStackHCI' (Required): Gets or sets the instance type.
* **rcmServiceUri**: string (ReadOnly): Gets or sets the Uri of Rcm.
* **resourceGroup**: string (ReadOnly): Gets or sets the resource group.
* **resourceLocation**: string (ReadOnly): Gets or sets the resource location.
* **sourceGatewayServiceId**: string (ReadOnly): Gets or sets the gateway service Id of source.
* **sourceStorageContainerName**: string (ReadOnly): Gets or sets the source storage container name.
* **storageAccountId**: string: Gets or sets the storage account Id.
* **storageAccountSasSecretName**: string: Gets or sets the Sas Secret of storage account.
* **subscriptionId**: string (ReadOnly): Gets or sets the subscription.
* **targetGatewayServiceId**: string (ReadOnly): Gets or sets the gateway service Id of target.
* **targetStorageContainerName**: string (ReadOnly): Gets or sets the target storage container name.

### VMwareToAzStackHCIReplicationExtensionModelCustomProperties
#### Properties
* **asrServiceUri**: string (ReadOnly): Gets or sets the Uri of ASR.
* **azStackHciFabricArmId**: string {minLength: 1} (Required): Gets or sets the ARM Id of the target AzStackHCI fabric.
* **azStackHciSiteId**: string (ReadOnly): Gets or sets the ARM Id of the AzStackHCI site.
* **gatewayServiceUri**: string (ReadOnly): Gets or sets the Uri of Gateway.
* **instanceType**: 'VMwareToAzStackHCI' (Required): Gets or sets the instance type.
* **rcmServiceUri**: string (ReadOnly): Gets or sets the Uri of Rcm.
* **resourceGroup**: string (ReadOnly): Gets or sets the resource group.
* **resourceLocation**: string (ReadOnly): Gets or sets the resource location.
* **sourceGatewayServiceId**: string (ReadOnly): Gets or sets the gateway service Id of source.
* **sourceStorageContainerName**: string (ReadOnly): Gets or sets the source storage container name.
* **storageAccountId**: string: Gets or sets the storage account Id.
* **storageAccountSasSecretName**: string: Gets or sets the Sas Secret of storage account.
* **subscriptionId**: string (ReadOnly): Gets or sets the subscription.
* **targetGatewayServiceId**: string (ReadOnly): Gets or sets the gateway service Id of target.
* **targetStorageContainerName**: string (ReadOnly): Gets or sets the target storage container name.
* **vmwareFabricArmId**: string {minLength: 1} (Required): Gets or sets the ARM Id of the source VMware fabric.
* **vmwareSiteId**: string (ReadOnly): Gets or sets the ARM Id of the VMware site.


## ReplicationExtensionModelProperties
### Properties
* **customProperties**: [ReplicationExtensionModelCustomProperties](#replicationextensionmodelcustomproperties) (Required): Replication extension model custom properties.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the replication extension.

## ReplicationExtensionModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## StorageContainerProperties
### Properties
* **clusterSharedVolumePath**: string {minLength: 1} (Required): Gets or sets the ClusterSharedVolumePath.
* **name**: string {minLength: 1} (Required): Gets or sets the Name.

## TaskModel
### Properties
* **childrenWorkflows**: [WorkflowModel](#workflowmodel)[]: Gets or sets the list of children workflow models.
* **customProperties**: [TaskModelCustomProperties](#taskmodelcustomproperties): Task model custom properties.
* **endTime**: string (ReadOnly): Gets or sets the end time.
* **startTime**: string (ReadOnly): Gets or sets the start time.
* **state**: 'Cancelled' | 'Failed' | 'Pending' | 'Skipped' | 'Started' | 'Succeeded' | string (ReadOnly): Gets or sets the task state.
* **taskName**: string (ReadOnly): Gets or sets the task name.

## TaskModelCustomProperties
### Properties
* **instanceType**: string {minLength: 1} (Required): Gets or sets the instance type.

## VaultModelProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the vault.
* **serviceResourceId**: string (ReadOnly): Gets or sets the service resource Id.
* **vaultType**: 'DisasterRecovery' | 'Migrate' | string: Gets or sets the type of vault.

## VaultModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

## VaultModelTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VMwareToAzStackHCIDiskInput
### Properties
* **diskFileFormat**: string {minLength: 1} (Required): Gets or sets the type of the virtual hard disk, vhd or vhdx.
* **diskId**: string {minLength: 1} (Required): Gets or sets the disk Id.
* **diskSizeGB**: int (Required): Gets or sets the disk size in GB.
* **isDynamic**: bool: Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard
disk.
* **isOsDisk**: bool (Required): Gets or sets a value indicating whether disk is os disk.
* **storageContainerId**: string: Gets or sets the target storage account ARM Id.

## VMwareToAzStackHCINicInput
### Properties
* **label**: string {minLength: 1} (Required): Gets or sets the NIC label.
* **networkName**: string (ReadOnly): Gets or sets the network name.
* **nicId**: string {minLength: 1} (Required): Gets or sets the NIC Id.
* **selectionTypeForFailover**: 'NotSelected' | 'SelectedByDefault' | 'SelectedByUser' | 'SelectedByUserOverride' | string (Required): Gets or sets the selection type of the NIC.
* **targetNetworkId**: string {minLength: 1} (Required): Gets or sets the target network Id within AzStackHCI Cluster.
* **testNetworkId**: string {minLength: 1} (Required): Gets or sets the target test network Id within AzStackHCI Cluster.

## VMwareToAzStackHCIProtectedDiskProperties
### Properties
* **capacityInBytes**: int (ReadOnly): Gets or sets the disk capacity in bytes.
* **diskType**: string (ReadOnly): Gets or sets the disk type.
* **isDynamic**: bool (ReadOnly): Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard
disk.
* **isOsDisk**: bool (ReadOnly): Gets or sets a value indicating whether the disk is the OS disk.
* **migrateDiskName**: string (ReadOnly): Gets or sets the failover clone disk.
* **seedDiskName**: string (ReadOnly): Gets or sets the seed disk name.
* **sourceDiskId**: string (ReadOnly): Gets or sets the source disk Id.
* **sourceDiskName**: string (ReadOnly): Gets or sets the source disk Name.
* **storageContainerId**: string (ReadOnly): Gets or sets the ARM Id of the storage container.
* **storageContainerLocalPath**: string (ReadOnly): Gets or sets the local path of the storage container.
* **testMigrateDiskName**: string (ReadOnly): Gets or sets the test failover clone disk.

## VMwareToAzStackHCIProtectedNicProperties
### Properties
* **isPrimaryNic**: bool: Gets or sets a value indicating whether this is the primary NIC.
* **label**: string (ReadOnly): Gets or sets the NIC label.
* **macAddress**: string (ReadOnly): Gets or sets the NIC mac address.
* **networkName**: string (ReadOnly): Gets or sets the network name.
* **nicId**: string (ReadOnly): Gets or sets the NIC Id.
* **selectionTypeForFailover**: 'NotSelected' | 'SelectedByDefault' | 'SelectedByUser' | 'SelectedByUserOverride' | string (ReadOnly): Gets or sets the selection type of the NIC.
* **targetNetworkId**: string (ReadOnly): Gets or sets the target network Id within AzStackHCI Cluster.
* **testNetworkId**: string (ReadOnly): Gets or sets the target test network Id within AzStackHCI Cluster.

## WorkflowModel
### Properties
* **id**: string (ReadOnly): Gets or sets the Id of the resource.
* **name**: string (ReadOnly): Gets or sets the name of the resource.
* **properties**: [WorkflowModelProperties](#workflowmodelproperties) (Required): Workflow model properties.
* **systemData**: [WorkflowModelSystemData](#workflowmodelsystemdata) (ReadOnly)
* **type**: string (ReadOnly): Gets or sets the type of the resource.

## WorkflowModelCustomProperties
* **Discriminator**: instanceType

### Base Properties
* **affectedObjectDetails**: [WorkflowModelCustomPropertiesAffectedObjectDetails](#workflowmodelcustompropertiesaffectedobjectdetails) (ReadOnly): Gets or sets any custom properties of the affected object.

### FailoverWorkflowModelCustomProperties
#### Properties
* **instanceType**: 'FailoverWorkflowDetails' (Required): Gets or sets the instance type.
* **protectedItemDetails**: [FailoverProtectedItemProperties](#failoverprotecteditemproperties)[] (ReadOnly): Gets or sets the failed over protected item details.

### TestFailoverCleanupWorkflowModelCustomProperties
#### Properties
* **comments**: string (ReadOnly): Gets or sets the test failover cleanup comments.
* **instanceType**: 'TestFailoverCleanupWorkflowDetails' (Required): Gets or sets the instance type.

### TestFailoverWorkflowModelCustomProperties
#### Properties
* **instanceType**: 'TestFailoverWorkflowDetails' (Required): Gets or sets the instance type.
* **protectedItemDetails**: [FailoverProtectedItemProperties](#failoverprotecteditemproperties)[] (ReadOnly): Gets or sets the test VM details.


## WorkflowModelCustomPropertiesAffectedObjectDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowModelProperties
### Properties
* **activityId**: string (ReadOnly): Gets or sets the workflow activity id.
* **allowedActions**: string[] (ReadOnly): Gets or sets the list of allowed actions on the workflow.
* **customProperties**: [WorkflowModelCustomProperties](#workflowmodelcustomproperties) (Required): Workflow model custom properties.
* **displayName**: string (ReadOnly): Gets or sets the friendly display name.
* **endTime**: string (ReadOnly): Gets or sets the end time.
* **errors**: [ErrorModel](#errormodel)[] (ReadOnly): Gets or sets the list of errors.
* **objectId**: string (ReadOnly): Gets or sets the affected object Id.
* **objectInternalId**: string (ReadOnly): Gets or sets the affected object internal Id.
* **objectInternalName**: string (ReadOnly): Gets or sets the affected object internal name.
* **objectName**: string (ReadOnly): Gets or sets the affected object name.
* **objectType**: 'AvsDiskPool' | 'Dra' | 'Fabric' | 'Policy' | 'ProtectedItem' | 'RecoveryPlan' | 'ReplicationExtension' | 'Vault' | string (ReadOnly): Gets or sets the object type.
* **replicationProviderId**: string (ReadOnly): Gets or sets the replication provider.
* **sourceFabricProviderId**: string (ReadOnly): Gets or sets the source fabric provider.
* **startTime**: string (ReadOnly): Gets or sets the start time.
* **state**: 'Cancelled' | 'Cancelling' | 'CompletedWithErrors' | 'CompletedWithInformation' | 'CompletedWithWarnings' | 'Failed' | 'Pending' | 'Started' | 'Succeeded' | string (ReadOnly): Gets or sets the workflow state.
* **targetFabricProviderId**: string (ReadOnly): Gets or sets the target fabric provider.
* **tasks**: [TaskModel](#taskmodel)[] (ReadOnly): Gets or sets the list of tasks.

## WorkflowModelSystemData
### Properties
* **createdAt**: string: Gets or sets the timestamp of resource creation (UTC).
* **createdBy**: string: Gets or sets identity that created the resource.
* **createdByType**: string: Gets or sets the type of identity that created the resource: user, application,
managedIdentity.
* **lastModifiedAt**: string: Gets or sets the timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: Gets or sets the identity that last modified the resource.
* **lastModifiedByType**: string: Gets or sets the type of identity that last modified the resource: user, application,
managedIdentity.

