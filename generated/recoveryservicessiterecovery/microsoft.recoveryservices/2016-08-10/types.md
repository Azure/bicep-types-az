# Microsoft.RecoveryServices @ 2016-08-10

## Resource Microsoft.RecoveryServices/vaults/replicationAlertSettings@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigureAlertRequestProperties](#configurealertrequestproperties): Properties of a configure alert request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationAlertSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FabricCreationInputProperties](#fabriccreationinputproperties): Properties of site details provided during the time of site creation
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateNetworkMappingInputProperties](#createnetworkmappinginputproperties): Common input details for network mapping operation.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerInputProperties](#createprotectioncontainerinputproperties): Create protection container input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnableProtectionInputProperties](#enableprotectioninputproperties): Enable protection input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerMappingInputProperties](#createprotectioncontainermappinginputproperties): Configure pairing input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageMappingInputProperties](#storagemappinginputproperties): Storage mapping input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddVCenterRequestProperties](#addvcenterrequestproperties): The properties of an add vCenter request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationPolicies@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreatePolicyInputProperties](#createpolicyinputproperties): Policy creation properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateRecoveryPlanInputProperties](#createrecoveryplaninputproperties) (Required): Recovery plan creation properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationRecoveryPlans' (ReadOnly, DeployTimeConstant): The resource type

## ConfigureAlertRequestProperties
### Properties
* **customEmailAddresses**: string[]: The custom email address for sending emails.
* **locale**: string: The locale for the email notification.
* **sendToOwners**: string: A value indicating whether to send email to subscription administrator.

## FabricCreationInputProperties
### Properties
* **bcdrState**: string (ReadOnly): BCDR state of the fabric.
* **customDetails**: [FabricSpecificCreationInput](#fabricspecificcreationinput): Fabric provider specific settings.
* **encryptionDetails**: [EncryptionDetails](#encryptiondetails) (ReadOnly): Encryption details for the fabric.
* **friendlyName**: string (ReadOnly): Friendly name of the fabric.
* **health**: string (ReadOnly): Health of fabric.
* **healthErrorDetails**: [HealthError](#healtherror)[] (ReadOnly): Fabric health error details.
* **internalIdentifier**: string (ReadOnly): Dra Registration Id.
* **rolloverEncryptionDetails**: [EncryptionDetails](#encryptiondetails) (ReadOnly): Encryption details for the fabric.

## FabricSpecificCreationInput
* **Discriminator**: instanceType
### Base Properties
### Azure
#### Properties
* **containerIds**: string[] (ReadOnly): The container Ids for the Azure fabric.
* **instanceType**: 'Azure' (Required): Fabric provider specific settings.
* **location**: string: The Location.

### HyperVSite
#### Properties
* **instanceType**: 'HyperVSite' (Required): HyperVSite fabric specific details.

### VMM
#### Properties
* **instanceType**: 'VMM' (Required): VMM fabric specific details.

### VMware
#### Properties
* **agentCount**: string (ReadOnly): The number of source and target servers configured to talk to this CS.
* **agentVersion**: string (ReadOnly): The agent Version.
* **availableMemoryInBytes**: int (ReadOnly): The available memory.
* **availableSpaceInBytes**: int (ReadOnly): The available space.
* **cpuLoad**: string (ReadOnly): The percentage of the CPU load.
* **cpuLoadStatus**: string (ReadOnly): The CPU load status.
* **csServiceStatus**: string (ReadOnly): The CS service status.
* **databaseServerLoad**: string (ReadOnly): The database server load.
* **databaseServerLoadStatus**: string (ReadOnly): The database server load status.
* **hostName**: string (ReadOnly): The host name.
* **instanceType**: 'VMware' (Required): Store the fabric details specific to the VMware fabric.
* **ipAddress**: string (ReadOnly): The IP address.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from CS server.
* **masterTargetServers**: [MasterTargetServer](#mastertargetserver)[] (ReadOnly): The list of Master Target servers associated with the fabric.
* **memoryUsageStatus**: string (ReadOnly): The memory usage status.
* **processServerCount**: string (ReadOnly): The number of process servers.
* **processServers**: [ProcessServer](#processserver)[] (ReadOnly): The list of Process Servers associated with the fabric.
* **protectedServers**: string (ReadOnly): The number of protected servers.
* **psTemplateVersion**: string (ReadOnly): PS template version.
* **replicationPairCount**: string (ReadOnly): The number of replication pairs configured in this CS.
* **runAsAccounts**: [RunAsAccount](#runasaccount)[] (ReadOnly): The list of run as accounts created on the server.
* **spaceUsageStatus**: string (ReadOnly): The space usage status.
* **sslCertExpiryDate**: string (ReadOnly): CS SSL cert expiry date.
* **sslCertExpiryRemainingDays**: int (ReadOnly): CS SSL cert expiry date.
* **systemLoad**: string (ReadOnly): The percentage of the system load.
* **systemLoadStatus**: string (ReadOnly): The system load status.
* **totalMemoryInBytes**: int (ReadOnly): The total memory.
* **totalSpaceInBytes**: int (ReadOnly): The total space.
* **versionStatus**: string (ReadOnly): Version status
* **webLoad**: string (ReadOnly): The web load.
* **webLoadStatus**: string (ReadOnly): The web load status.

### VMwareV2
#### Properties
* **instanceType**: 'VMwareV2' (Required): Fabric provider specific settings.
* **rcmServiceEndpoint**: string (ReadOnly): The endpoint for making requests to the RCM Service.
* **srsServiceEndpoint**: string (ReadOnly): The endpoint for making requests to the SRS Service.


## Azure
### Properties
* **containerIds**: string[] (ReadOnly): The container Ids for the Azure fabric.
* **instanceType**: 'Azure' (Required): Fabric provider specific settings.
* **location**: string: The Location.

## HyperVSite
### Properties
* **instanceType**: 'HyperVSite' (Required): HyperVSite fabric specific details.

## VMM
### Properties
* **instanceType**: 'VMM' (Required): VMM fabric specific details.

## VMware
### Properties
* **agentCount**: string (ReadOnly): The number of source and target servers configured to talk to this CS.
* **agentVersion**: string (ReadOnly): The agent Version.
* **availableMemoryInBytes**: int (ReadOnly): The available memory.
* **availableSpaceInBytes**: int (ReadOnly): The available space.
* **cpuLoad**: string (ReadOnly): The percentage of the CPU load.
* **cpuLoadStatus**: string (ReadOnly): The CPU load status.
* **csServiceStatus**: string (ReadOnly): The CS service status.
* **databaseServerLoad**: string (ReadOnly): The database server load.
* **databaseServerLoadStatus**: string (ReadOnly): The database server load status.
* **hostName**: string (ReadOnly): The host name.
* **instanceType**: 'VMware' (Required): Store the fabric details specific to the VMware fabric.
* **ipAddress**: string (ReadOnly): The IP address.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from CS server.
* **masterTargetServers**: [MasterTargetServer](#mastertargetserver)[] (ReadOnly): The list of Master Target servers associated with the fabric.
* **memoryUsageStatus**: string (ReadOnly): The memory usage status.
* **processServerCount**: string (ReadOnly): The number of process servers.
* **processServers**: [ProcessServer](#processserver)[] (ReadOnly): The list of Process Servers associated with the fabric.
* **protectedServers**: string (ReadOnly): The number of protected servers.
* **psTemplateVersion**: string (ReadOnly): PS template version.
* **replicationPairCount**: string (ReadOnly): The number of replication pairs configured in this CS.
* **runAsAccounts**: [RunAsAccount](#runasaccount)[] (ReadOnly): The list of run as accounts created on the server.
* **spaceUsageStatus**: string (ReadOnly): The space usage status.
* **sslCertExpiryDate**: string (ReadOnly): CS SSL cert expiry date.
* **sslCertExpiryRemainingDays**: int (ReadOnly): CS SSL cert expiry date.
* **systemLoad**: string (ReadOnly): The percentage of the system load.
* **systemLoadStatus**: string (ReadOnly): The system load status.
* **totalMemoryInBytes**: int (ReadOnly): The total memory.
* **totalSpaceInBytes**: int (ReadOnly): The total space.
* **versionStatus**: string (ReadOnly): Version status
* **webLoad**: string (ReadOnly): The web load.
* **webLoadStatus**: string (ReadOnly): The web load status.

## MasterTargetServer
### Properties
* **agentVersion**: string (ReadOnly): The version of the scout component on the server.
* **dataStores**: [DataStore](#datastore)[] (ReadOnly): The list of data stores in the fabric.
* **diskCount**: int (ReadOnly): Disk count of the master target.
* **id**: string (ReadOnly): The server Id.
* **ipAddress**: string (ReadOnly): The IP address of the server.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the server.
* **name**: string (ReadOnly): The server name.
* **osType**: string (ReadOnly): The OS type of the server.
* **osVersion**: string (ReadOnly): OS Version of the master target.
* **retentionVolumes**: [RetentionVolume](#retentionvolume)[] (ReadOnly): The retention volumes of Master target Server.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): Validation errors.
* **versionStatus**: string (ReadOnly): Version status

## DataStore
### Properties
* **capacity**: string (ReadOnly): The capacity of data store in GBs.
* **freeSpace**: string (ReadOnly): The free space of data store in GBs.
* **symbolicName**: string (ReadOnly): The symbolic name of data store.
* **type**: string (ReadOnly): The type of data store.
* **uuid**: string (ReadOnly): The uuid of data store.

## RetentionVolume
### Properties
* **capacityInBytes**: int (ReadOnly): The volume capacity.
* **freeSpaceInBytes**: int (ReadOnly): The free space available in this volume.
* **thresholdPercentage**: int (ReadOnly): The threshold percentage.
* **volumeName**: string (ReadOnly): The volume name.

## HealthError
### Properties
* **childErrors**: [HealthError](#healtherror)[] (ReadOnly): The child health errors.
* **creationTimeUtc**: string (ReadOnly): Error creation time (UTC)
* **entityId**: string (ReadOnly): ID of the entity.
* **errorCode**: string (ReadOnly): Error code.
* **errorLevel**: string (ReadOnly): Level of error.
* **errorMessage**: string (ReadOnly): Error message.
* **errorSource**: string (ReadOnly): Source of error.
* **errorType**: string (ReadOnly): Type of error.
* **possibleCauses**: string (ReadOnly): Possible causes of error.
* **recommendedAction**: string (ReadOnly): Recommended action to resolve error.
* **recoveryProviderErrorMessage**: string (ReadOnly): DRA error message.

## ProcessServer
### Properties
* **agentVersion**: string (ReadOnly): The version of the scout component on the server.
* **availableMemoryInBytes**: int (ReadOnly): The available memory.
* **availableSpaceInBytes**: int (ReadOnly): The available space.
* **cpuLoad**: string (ReadOnly): The percentage of the CPU load.
* **cpuLoadStatus**: string (ReadOnly): The CPU load status.
* **friendlyName**: string (ReadOnly): The Process Server's friendly name.
* **hostId**: string (ReadOnly): The agent generated Id.
* **id**: string (ReadOnly): The Process Server Id.
* **ipAddress**: string (ReadOnly): The IP address of the server.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the server.
* **machineCount**: string (ReadOnly): The servers configured with this PS.
* **memoryUsageStatus**: string (ReadOnly): The memory usage status.
* **mobilityServiceUpdates**: [MobilityServiceUpdate](#mobilityserviceupdate)[] (ReadOnly): The list of the mobility service updates available on the Process Server.
* **osType**: string (ReadOnly): The OS type of the server.
* **osVersion**: string (ReadOnly): OS Version of the process server. Note: This will get populated if user has CS version greater than 9.12.0.0.
* **psServiceStatus**: string (ReadOnly): The PS service status.
* **replicationPairCount**: string (ReadOnly): The number of replication pairs configured in this PS.
* **spaceUsageStatus**: string (ReadOnly): The space usage status.
* **sslCertExpiryDate**: string (ReadOnly): The PS SSL cert expiry date.
* **sslCertExpiryRemainingDays**: int (ReadOnly): CS SSL cert expiry date.
* **systemLoad**: string (ReadOnly): The percentage of the system load.
* **systemLoadStatus**: string (ReadOnly): The system load status.
* **totalMemoryInBytes**: int (ReadOnly): The total memory.
* **totalSpaceInBytes**: int (ReadOnly): The total space.
* **versionStatus**: string (ReadOnly): Version status

## MobilityServiceUpdate
### Properties
* **osType**: string (ReadOnly): The OS type.
* **rebootStatus**: string (ReadOnly): The reboot status of the update - whether it is required or not.
* **version**: string (ReadOnly): The version of the latest update.

## RunAsAccount
### Properties
* **accountId**: string (ReadOnly): The CS RunAs account Id.
* **accountName**: string (ReadOnly): The CS RunAs account name.

## VMwareV2
### Properties
* **instanceType**: 'VMwareV2' (Required): Fabric provider specific settings.
* **rcmServiceEndpoint**: string (ReadOnly): The endpoint for making requests to the RCM Service.
* **srsServiceEndpoint**: string (ReadOnly): The endpoint for making requests to the SRS Service.

## EncryptionDetails
### Properties
* **kekCertExpiryDate**: string (ReadOnly): The key encryption key certificate expiry date.
* **kekCertThumbprint**: string (ReadOnly): The key encryption key certificate thumbprint.
* **kekState**: string (ReadOnly): The key encryption key state for the Vmm.

## CreateNetworkMappingInputProperties
### Properties
* **fabricSpecificDetails**: [FabricSpecificCreateNetworkMappingInput](#fabricspecificcreatenetworkmappinginput) (WriteOnly): Input details specific to fabrics during Network Mapping.
* **fabricSpecificSettings**: [NetworkMappingFabricSpecificSettings](#networkmappingfabricspecificsettings) (ReadOnly): Network Mapping fabric specific settings.
* **primaryFabricFriendlyName**: string (ReadOnly): The primary fabric friendly name.
* **primaryNetworkFriendlyName**: string (ReadOnly): The primary network friendly name.
* **primaryNetworkId**: string (ReadOnly): The primary network id for network mapping.
* **recoveryFabricArmId**: string (ReadOnly): The recovery fabric ARM id.
* **recoveryFabricFriendlyName**: string (ReadOnly): The recovery fabric friendly name.
* **recoveryFabricName**: string (WriteOnly): Recovery fabric Name.
* **recoveryNetworkFriendlyName**: string (ReadOnly): The recovery network friendly name.
* **recoveryNetworkId**: string: Recovery network Id.
* **state**: string (ReadOnly): The pairing state for network mapping.

## FabricSpecificCreateNetworkMappingInput
* **Discriminator**: instanceType
### Base Properties
### AzureToAzure
#### Properties
* **instanceType**: 'AzureToAzure' (Required): A2A Network Mapping fabric specific settings.
* **primaryNetworkId**: string (WriteOnly): The primary azure vnet Id.

### VmmToAzure
#### Properties
* **instanceType**: 'VmmToAzure' (Required): E2A Network Mapping fabric specific settings.

### VmmToVmm
#### Properties
* **instanceType**: 'VmmToVmm' (Required): E2E Network Mapping fabric specific settings.


## AzureToAzure
### Properties
* **instanceType**: 'AzureToAzure' (Required): A2A Network Mapping fabric specific settings.
* **primaryNetworkId**: string (WriteOnly): The primary azure vnet Id.

## VmmToAzure
### Properties
* **instanceType**: 'VmmToAzure' (Required): E2A Network Mapping fabric specific settings.

## VmmToVmm
### Properties
* **instanceType**: 'VmmToVmm' (Required): E2E Network Mapping fabric specific settings.

## NetworkMappingFabricSpecificSettings
* **Discriminator**: instanceType
### Base Properties
### AzureToAzure
#### Properties
* **instanceType**: 'AzureToAzure' (Required): A2A Network Mapping fabric specific settings.
* **primaryNetworkId**: string (WriteOnly): The primary azure vnet Id.

### VmmToAzure
#### Properties
* **instanceType**: 'VmmToAzure' (Required): E2A Network Mapping fabric specific settings.

### VmmToVmm
#### Properties
* **instanceType**: 'VmmToVmm' (Required): E2E Network Mapping fabric specific settings.


## CreateProtectionContainerInputProperties
### Properties
* **fabricFriendlyName**: string (ReadOnly): Fabric friendly name.
* **fabricSpecificDetails**: [ProtectionContainerFabricSpecificDetails](#protectioncontainerfabricspecificdetails) (ReadOnly): Base class for fabric specific details of container.
* **fabricType**: string (ReadOnly): The fabric type.
* **friendlyName**: string (ReadOnly): The name.
* **pairingStatus**: string (ReadOnly): The pairing status of this cloud.
* **protectedItemCount**: int (ReadOnly): Number of protected PEs
* **providerSpecificInput**: [ReplicationProviderSpecificContainerCreationInput](#replicationproviderspecificcontainercreationinput)[] (WriteOnly): Provider specific inputs for container creation.
* **role**: string (ReadOnly): The role of this cloud.

## ProtectionContainerFabricSpecificDetails
### Properties
* **instanceType**: string (ReadOnly): Gets the class type. Overridden in derived classes.

## ReplicationProviderSpecificContainerCreationInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **fabricObjectId**: string: The fabric specific object Id of the virtual machine.
* **instanceType**: 'A2A' (Required): A2A specific policy details.
* **isReplicationAgentUpdateRequired**: bool (ReadOnly): A value indicating whether replication agent update is required.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The time (in UTC) when the last RPO value was calculated by Protection Service.
* **lifecycleId**: string (ReadOnly): An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
* **managementId**: string (ReadOnly): The management Id.
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **multiVmGroupId**: string (ReadOnly): The multi vm group Id.
* **multiVmGroupName**: string (ReadOnly): The multi vm group name.
* **osType**: string (ReadOnly): The type of operating system.
* **primaryFabricLocation**: string (ReadOnly): Primary fabric location.
* **protectedDisks**: [A2AProtectedDiskDetails](#a2aprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectedManagedDisks**: [A2AProtectedManagedDiskDetails](#a2aprotectedmanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySet**: string (ReadOnly): The recovery availability set.
* **recoveryAvailabilitySetId**: string (WriteOnly): The recovery availability set Id.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The recovery resource group.
* **recoveryAzureVMName**: string (ReadOnly): The name of recovery virtual machine.
* **recoveryAzureVMSize**: string (ReadOnly): The size of recovery virtual machine.
* **recoveryCloudService**: string (ReadOnly): The recovery cloud service.
* **recoveryCloudServiceId**: string (WriteOnly): The recovery cloud service Id. Valid for V1 scenarios.
* **recoveryContainerId**: string (WriteOnly): The recovery container Id.
* **recoveryFabricLocation**: string (ReadOnly): The recovery fabric location.
* **recoveryFabricObjectId**: string (ReadOnly): The recovery fabric object Id.
* **recoveryResourceGroupId**: string (WriteOnly): The recovery resource group Id. Valid for V2 scenarios.
* **rpoInSeconds**: int (ReadOnly): The last RPO value in seconds.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The recovery virtual network.
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly): The test failover fabric object Id.
* **vmDisks**: [A2AVmDiskInputDetails](#a2avmdiskinputdetails)[] (WriteOnly): The list of vm disk details.
* **vmManagedDisks**: [A2AVmManagedDiskInputDetails](#a2avmmanageddiskinputdetails)[] (WriteOnly): The list of vm managed disk details.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The virtual machine nic details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.
* **vmSyncedConfigDetails**: [AzureToAzureVmSyncedConfigDetails](#azuretoazurevmsyncedconfigdetails) (ReadOnly): Azure to Azure VM synced configuration details.


## A2A
### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **fabricObjectId**: string: The fabric specific object Id of the virtual machine.
* **instanceType**: 'A2A' (Required): A2A specific policy details.
* **isReplicationAgentUpdateRequired**: bool (ReadOnly): A value indicating whether replication agent update is required.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The time (in UTC) when the last RPO value was calculated by Protection Service.
* **lifecycleId**: string (ReadOnly): An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
* **managementId**: string (ReadOnly): The management Id.
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **multiVmGroupId**: string (ReadOnly): The multi vm group Id.
* **multiVmGroupName**: string (ReadOnly): The multi vm group name.
* **osType**: string (ReadOnly): The type of operating system.
* **primaryFabricLocation**: string (ReadOnly): Primary fabric location.
* **protectedDisks**: [A2AProtectedDiskDetails](#a2aprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectedManagedDisks**: [A2AProtectedManagedDiskDetails](#a2aprotectedmanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySet**: string (ReadOnly): The recovery availability set.
* **recoveryAvailabilitySetId**: string (WriteOnly): The recovery availability set Id.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The recovery resource group.
* **recoveryAzureVMName**: string (ReadOnly): The name of recovery virtual machine.
* **recoveryAzureVMSize**: string (ReadOnly): The size of recovery virtual machine.
* **recoveryCloudService**: string (ReadOnly): The recovery cloud service.
* **recoveryCloudServiceId**: string (WriteOnly): The recovery cloud service Id. Valid for V1 scenarios.
* **recoveryContainerId**: string (WriteOnly): The recovery container Id.
* **recoveryFabricLocation**: string (ReadOnly): The recovery fabric location.
* **recoveryFabricObjectId**: string (ReadOnly): The recovery fabric object Id.
* **recoveryResourceGroupId**: string (WriteOnly): The recovery resource group Id. Valid for V2 scenarios.
* **rpoInSeconds**: int (ReadOnly): The last RPO value in seconds.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The recovery virtual network.
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly): The test failover fabric object Id.
* **vmDisks**: [A2AVmDiskInputDetails](#a2avmdiskinputdetails)[] (WriteOnly): The list of vm disk details.
* **vmManagedDisks**: [A2AVmManagedDiskInputDetails](#a2avmmanageddiskinputdetails)[] (WriteOnly): The list of vm managed disk details.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The virtual machine nic details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.
* **vmSyncedConfigDetails**: [AzureToAzureVmSyncedConfigDetails](#azuretoazurevmsyncedconfigdetails) (ReadOnly): Azure to Azure VM synced configuration details.

## A2AProtectedDiskDetails
### Properties
* **dataPendingAtSourceAgentInMB**: int (ReadOnly): The data pending at source virtual machine in MB.
* **dataPendingInStagingStorageAccountInMB**: int (ReadOnly): The data pending for replication in MB at staging account.
* **diskCapacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskName**: string (ReadOnly): The disk name.
* **diskType**: string (ReadOnly): The type of disk.
* **diskUri**: string (ReadOnly): The disk uri.
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **primaryDiskAzureStorageAccountId**: string (ReadOnly): The primary disk storage account.
* **primaryStagingAzureStorageAccountId**: string (ReadOnly): The primary staging storage account.
* **recoveryAzureStorageAccountId**: string (ReadOnly): The recovery disk storage account.
* **recoveryDiskUri**: string (ReadOnly): Recovery disk uri.
* **resyncRequired**: bool (ReadOnly): A value indicating whether resync is required for this disk.

## A2AProtectedManagedDiskDetails
### Properties
* **dataPendingAtSourceAgentInMB**: int (ReadOnly): The data pending at source virtual machine in MB.
* **dataPendingInStagingStorageAccountInMB**: int (ReadOnly): The data pending for replication in MB at staging account.
* **diskCapacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskId**: string (ReadOnly): The managed disk Arm id.
* **diskName**: string (ReadOnly): The disk name.
* **diskType**: string (ReadOnly): The type of disk.
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **primaryStagingAzureStorageAccountId**: string (ReadOnly): The primary staging storage account.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The recovery disk resource group Arm Id.
* **recoveryDiskId**: string (ReadOnly): Recovery disk Arm Id.
* **resyncRequired**: bool (ReadOnly): A value indicating whether resync is required for this disk.

## A2AVmDiskInputDetails
### Properties
* **diskUri**: string (WriteOnly): The disk Uri.
* **primaryStagingAzureStorageAccountId**: string (WriteOnly): The primary staging storage account Id.
* **recoveryAzureStorageAccountId**: string (WriteOnly): The recovery VHD storage account Id.

## A2AVmManagedDiskInputDetails
### Properties
* **diskId**: string (WriteOnly): The disk Id.
* **primaryStagingAzureStorageAccountId**: string (WriteOnly): The primary staging storage account Arm Id.
* **recoveryResourceGroupId**: string (WriteOnly): The target resource group Arm Id.

## VMNicDetails
### Properties
* **ipAddressType**: string (ReadOnly): Ip address type.
* **nicId**: string (ReadOnly): The nic Id.
* **primaryNicStaticIPAddress**: string (ReadOnly): Primary nic static IP address.
* **recoveryNicIpAddressType**: string (ReadOnly): IP allocation type for recovery VM.
* **recoveryVMNetworkId**: string (ReadOnly): Recovery VM network Id.
* **recoveryVMSubnetName**: string (ReadOnly): Recovery VM subnet name.
* **replicaNicId**: string (ReadOnly): The replica nic Id.
* **replicaNicStaticIPAddress**: string (ReadOnly): Replica nic static IP address.
* **selectionType**: string (ReadOnly): Selection type for failover.
* **sourceNicArmId**: string (ReadOnly): The source nic ARM Id.
* **vMNetworkName**: string (ReadOnly): VM network name.
* **vMSubnetName**: string (ReadOnly): VM subnet name.

## AzureToAzureVmSyncedConfigDetails
### Properties
* **inputEndpoints**: [InputEndpoint](#inputendpoint)[] (ReadOnly): The Azure VM input endpoints.
* **roleAssignments**: [RoleAssignment](#roleassignment)[] (ReadOnly): The Azure role assignments.
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): The Azure VM tags.

## InputEndpoint
### Properties
* **endpointName**: string (ReadOnly): The input endpoint name.
* **privatePort**: int (ReadOnly): The input endpoint private port.
* **protocol**: string (ReadOnly): The input endpoint protocol.
* **publicPort**: int (ReadOnly): The input endpoint public port.

## RoleAssignment
### Properties
* **id**: string (ReadOnly): The ARM Id of the role assignment.
* **name**: string (ReadOnly): The name of the role assignment.
* **principalId**: string (ReadOnly): Principal Id.
* **roleDefinitionId**: string (ReadOnly): Role definition id.
* **scope**: string (ReadOnly): Role assignment scope.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnableProtectionInputProperties
### Properties
* **activeLocation**: string (ReadOnly): The Current active location of the PE.
* **allowedOperations**: string[] (ReadOnly): The allowed operations on the Replication protected item.
* **currentScenario**: [CurrentScenarioDetails](#currentscenariodetails) (ReadOnly): Current scenario details of the protected entity.
* **failoverHealth**: string (ReadOnly): The consolidated failover health for the VM.
* **failoverHealthErrors**: [HealthError](#healtherror)[] (ReadOnly): List of failover health errors.
* **failoverRecoveryPointId**: string (ReadOnly): The recovery point ARM Id to which the Vm was failed over.
* **friendlyName**: string (ReadOnly): The name.
* **lastSuccessfulFailoverTime**: string (ReadOnly): The Last successful failover time.
* **lastSuccessfulTestFailoverTime**: string (ReadOnly): The Last successful test failover time.
* **policyFriendlyName**: string (ReadOnly): The name of Policy governing this PE.
* **policyId**: string: The Policy Id.
* **primaryFabricFriendlyName**: string (ReadOnly): The friendly name of the primary fabric.
* **primaryProtectionContainerFriendlyName**: string (ReadOnly): The name of primary protection container friendly name.
* **protectableItemId**: string: The protectable item Id.
* **protectedItemType**: string (ReadOnly): The type of protected item type.
* **protectionState**: string (ReadOnly): The protection status.
* **protectionStateDescription**: string (ReadOnly): The protection state description.
* **providerSpecificDetails**: [EnableProtectionProviderSpecificInput](#enableprotectionproviderspecificinput): Enable protection provider specific input.
* **recoveryContainerId**: string (ReadOnly): The recovery container Id.
* **recoveryFabricFriendlyName**: string (ReadOnly): The friendly name of recovery fabric.
* **recoveryFabricId**: string (ReadOnly): The Arm Id of recovery fabric.
* **recoveryProtectionContainerFriendlyName**: string (ReadOnly): The name of recovery container friendly name.
* **recoveryServicesProviderId**: string (ReadOnly): The recovery provider ARM Id.
* **replicationHealth**: string (ReadOnly): The consolidated protection health for the VM taking any issues with SRS as well as all the replication units associated with the VM's replication group into account. This is a string representation of the ProtectionHealth enumeration.
* **replicationHealthErrors**: [HealthError](#healtherror)[] (ReadOnly): List of replication health errors.
* **testFailoverState**: string (ReadOnly): The Test failover state.
* **testFailoverStateDescription**: string (ReadOnly): The Test failover state description.

## CurrentScenarioDetails
### Properties
* **jobId**: string (ReadOnly): ARM Id of the job being executed.
* **scenarioName**: string (ReadOnly): Scenario name.
* **startTime**: string (ReadOnly): Start time of the workflow.

## EnableProtectionProviderSpecificInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **fabricObjectId**: string: The fabric specific object Id of the virtual machine.
* **instanceType**: 'A2A' (Required): A2A specific policy details.
* **isReplicationAgentUpdateRequired**: bool (ReadOnly): A value indicating whether replication agent update is required.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The time (in UTC) when the last RPO value was calculated by Protection Service.
* **lifecycleId**: string (ReadOnly): An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
* **managementId**: string (ReadOnly): The management Id.
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **multiVmGroupId**: string (ReadOnly): The multi vm group Id.
* **multiVmGroupName**: string (ReadOnly): The multi vm group name.
* **osType**: string (ReadOnly): The type of operating system.
* **primaryFabricLocation**: string (ReadOnly): Primary fabric location.
* **protectedDisks**: [A2AProtectedDiskDetails](#a2aprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectedManagedDisks**: [A2AProtectedManagedDiskDetails](#a2aprotectedmanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySet**: string (ReadOnly): The recovery availability set.
* **recoveryAvailabilitySetId**: string (WriteOnly): The recovery availability set Id.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The recovery resource group.
* **recoveryAzureVMName**: string (ReadOnly): The name of recovery virtual machine.
* **recoveryAzureVMSize**: string (ReadOnly): The size of recovery virtual machine.
* **recoveryCloudService**: string (ReadOnly): The recovery cloud service.
* **recoveryCloudServiceId**: string (WriteOnly): The recovery cloud service Id. Valid for V1 scenarios.
* **recoveryContainerId**: string (WriteOnly): The recovery container Id.
* **recoveryFabricLocation**: string (ReadOnly): The recovery fabric location.
* **recoveryFabricObjectId**: string (ReadOnly): The recovery fabric object Id.
* **recoveryResourceGroupId**: string (WriteOnly): The recovery resource group Id. Valid for V2 scenarios.
* **rpoInSeconds**: int (ReadOnly): The last RPO value in seconds.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The recovery virtual network.
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly): The test failover fabric object Id.
* **vmDisks**: [A2AVmDiskInputDetails](#a2avmdiskinputdetails)[] (WriteOnly): The list of vm disk details.
* **vmManagedDisks**: [A2AVmManagedDiskInputDetails](#a2avmmanageddiskinputdetails)[] (WriteOnly): The list of vm managed disk details.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The virtual machine nic details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.
* **vmSyncedConfigDetails**: [AzureToAzureVmSyncedConfigDetails](#azuretoazurevmsyncedconfigdetails) (ReadOnly): Azure to Azure VM synced configuration details.

### HyperVReplica2012
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012' (Required): Hyper-V Replica Blue specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplica2012R2
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012R2' (Required): Hyper-V Replica Blue specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaAzure
#### Properties
* **azureVMDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **disksToInclude**: string[] (WriteOnly): The list of VHD IDs of disks to be protected.
* **enableRDPOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **encryption**: string (ReadOnly): The encryption info.
* **hvHostVmId**: string (WriteOnly): The Hyper-V host Vm Id.
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaAzure' (Required): Hyper-V Replica Azure specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **licenseType**: string (ReadOnly): License Type of the VM to be used.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
* **osType**: string (WriteOnly): The OS type associated with vm.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVMName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure Vm Name.
* **targetStorageAccountId**: string (WriteOnly): The storage account name.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **vhdId**: string (WriteOnly): The OS disk VHD id associated with vm.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmName**: string (WriteOnly): The Vm Name.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaBaseReplicationDetails
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaBaseReplicationDetails' (Required): Hyper V replica provider specific settings base class.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMage
#### Properties
* **activeSiteType**: string (ReadOnly): The active location of the VM. If the VM is being protected from Azure, this field will take values from { Azure, OnPrem }. If the VM is being protected between two data-centers, this field will be OnPrem always.
* **agentDetails**: [InMageAgentDetails](#inmageagentdetails) (ReadOnly): The details of the InMage agent.
* **azureStorageAccountId**: string (ReadOnly): A value indicating the underlying Azure storage account. If the VM is not running in Azure, this value shall be set to null.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **consistencyPoints**: [Dictionary<string,DateTime>](#dictionarystringdatetime) (ReadOnly): The collection of Consistency points.
* **datastoreName**: string (WriteOnly): The target data store name.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine Value can be list of strings that contain data store names
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMage' (Required): InMage specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **masterTargetId**: string (Required): The Master Target Id.
* **multiVmGroupId**: string (Required): The multi vm group Id.
* **multiVmGroupName**: string (Required): The multi vm group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether the multi vm sync is enabled or disabled.
* **osDetails**: [OSDiskDetails](#osdiskdetails) (ReadOnly): Details of the OS Disk.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string (Required): The Process Server Id.
* **protectedDisks**: [InMageProtectedDiskDetails](#inmageprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **rebootAfterUpdateStatus**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **retentionDrive**: string (Required, WriteOnly): The retention drive to use on the MT.
* **retentionWindowEnd**: string (ReadOnly): The retention window end time.
* **retentionWindowStart**: string (ReadOnly): The retention window start time.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vmFriendlyName**: string (WriteOnly): The Vm Name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMageAzureV2
#### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **azureVMDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine. Value can be list of strings that contain data store names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine. Value can be vCenter or physical.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **enableRDPOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMageAzureV2' (Required): InMage Azure v2 specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAgentUpdateRequired**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **isRebootAfterUpdateRequired**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **licenseType**: string (ReadOnly): License Type of the VM to be used.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **masterTargetId**: string: The Master target Id.
* **multiVmGroupId**: string: The multi vm group Id.
* **multiVmGroupName**: string: The multi vm group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi vm sync is enabled or disabled.
* **osDiskId**: string (ReadOnly): The id of the disk containing the OS.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string: The Process Server Id.
* **protectedDisks**: [InMageAzureV2ProtectedDiskDetails](#inmageazurev2protecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVMName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **storageAccountId**: string (Required, WriteOnly): The storage account name.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure Vm Name.
* **targetVmId**: string (ReadOnly): The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors.
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vhdName**: string (ReadOnly): The OS disk VHD name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### San
#### Properties
* **instanceType**: 'San' (Required): San enable protection provider specific input.


## HyperVReplica2012
### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012' (Required): Hyper-V Replica Blue specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

## InitialReplicationDetails
### Properties
* **initialReplicationProgressPercentage**: string (ReadOnly): The initial replication progress percentage.
* **initialReplicationType**: string (ReadOnly): Initial replication type.

## DiskDetails
### Properties
* **maxSizeMB**: int (ReadOnly): The hard disk max size in MB.
* **vhdId**: string (ReadOnly): The VHD Id.
* **vhdName**: string (ReadOnly): The VHD name.
* **vhdType**: string (ReadOnly): The type of the volume.

## HyperVReplica2012R2
### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012R2' (Required): Hyper-V Replica Blue specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

## HyperVReplicaAzure
### Properties
* **azureVMDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **disksToInclude**: string[] (WriteOnly): The list of VHD IDs of disks to be protected.
* **enableRDPOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **encryption**: string (ReadOnly): The encryption info.
* **hvHostVmId**: string (WriteOnly): The Hyper-V host Vm Id.
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaAzure' (Required): Hyper-V Replica Azure specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **licenseType**: string (ReadOnly): License Type of the VM to be used.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
* **osType**: string (WriteOnly): The OS type associated with vm.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVMName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure Vm Name.
* **targetStorageAccountId**: string (WriteOnly): The storage account name.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **vhdId**: string (WriteOnly): The OS disk VHD id associated with vm.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmName**: string (WriteOnly): The Vm Name.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

## AzureVmDiskDetails
### Properties
* **lunId**: string (ReadOnly): Ordinal\LunId of the disk for the Azure VM.
* **maxSizeMB**: string (ReadOnly): Max side in MB.
* **targetDiskLocation**: string (ReadOnly): Blob uri of the Azure disk.
* **targetDiskName**: string (ReadOnly): The target Azure disk name.
* **vhdId**: string (ReadOnly): The VHD id.
* **vhdName**: string (ReadOnly): VHD name.
* **vhdType**: string (ReadOnly): VHD type.

## OSDetails
### Properties
* **osEdition**: string (ReadOnly): The OSEdition.
* **oSMajorVersion**: string (ReadOnly): The OS Major Version.
* **oSMinorVersion**: string (ReadOnly): The OS Minor Version.
* **osType**: string (ReadOnly): VM Disk details.
* **oSVersion**: string (ReadOnly): The OS Version.
* **productType**: string (ReadOnly): Product type.

## HyperVReplicaBaseReplicationDetails
### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaBaseReplicationDetails' (Required): Hyper V replica provider specific settings base class.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

## InMage
### Properties
* **activeSiteType**: string (ReadOnly): The active location of the VM. If the VM is being protected from Azure, this field will take values from { Azure, OnPrem }. If the VM is being protected between two data-centers, this field will be OnPrem always.
* **agentDetails**: [InMageAgentDetails](#inmageagentdetails) (ReadOnly): The details of the InMage agent.
* **azureStorageAccountId**: string (ReadOnly): A value indicating the underlying Azure storage account. If the VM is not running in Azure, this value shall be set to null.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **consistencyPoints**: [Dictionary<string,DateTime>](#dictionarystringdatetime) (ReadOnly): The collection of Consistency points.
* **datastoreName**: string (WriteOnly): The target data store name.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine Value can be list of strings that contain data store names
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMage' (Required): InMage specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **masterTargetId**: string (Required): The Master Target Id.
* **multiVmGroupId**: string (Required): The multi vm group Id.
* **multiVmGroupName**: string (Required): The multi vm group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether the multi vm sync is enabled or disabled.
* **osDetails**: [OSDiskDetails](#osdiskdetails) (ReadOnly): Details of the OS Disk.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string (Required): The Process Server Id.
* **protectedDisks**: [InMageProtectedDiskDetails](#inmageprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **rebootAfterUpdateStatus**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **retentionDrive**: string (Required, WriteOnly): The retention drive to use on the MT.
* **retentionWindowEnd**: string (ReadOnly): The retention window end time.
* **retentionWindowStart**: string (ReadOnly): The retention window start time.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vmFriendlyName**: string (WriteOnly): The Vm Name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

## InMageAgentDetails
### Properties
* **agentUpdateStatus**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **agentVersion**: string (ReadOnly): The agent version.
* **postUpdateRebootStatus**: string (ReadOnly): A value indicating whether reboot is required after update is applied.

## Dictionary<string,DateTime>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageDiskExclusionInput
### Properties
* **diskSignatureOptions**: [InMageDiskSignatureExclusionOptions](#inmagedisksignatureexclusionoptions)[] (WriteOnly): The guest disk signature based option for disk exclusion.
* **volumeOptions**: [InMageVolumeExclusionOptions](#inmagevolumeexclusionoptions)[] (WriteOnly): The volume label based option for disk exclusion.

## InMageDiskSignatureExclusionOptions
### Properties
* **diskSignature**: string (WriteOnly): The guest signature of disk to be excluded from replication.

## InMageVolumeExclusionOptions
### Properties
* **OnlyExcludeIfSingleVolume**: string (WriteOnly): The value indicating whether to exclude multi volume disk or not. If a disk has multiple volumes and one of the volume has label matching with VolumeLabel this disk will be excluded from replication if OnlyExcludeIfSingleVolume is false.
* **volumeLabel**: string (WriteOnly): The volume label. The disk having any volume with this label will be excluded from replication.

## OSDiskDetails
### Properties
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **osVhdId**: string (ReadOnly): The id of the disk containing the OS.
* **vhdName**: string (ReadOnly): The OS disk VHD name.

## InMageProtectedDiskDetails
### Properties
* **diskCapacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskId**: string (ReadOnly): The disk id.
* **diskName**: string (ReadOnly): The disk name.
* **diskResized**: string (ReadOnly): A value indicating whether disk is resized.
* **fileSystemCapacityInBytes**: int (ReadOnly): The file system capacity in bytes.
* **healthErrorCode**: string (ReadOnly): The health error code for the disk.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **protectionStage**: string (ReadOnly): The protection stage.
* **psDataInMB**: int (ReadOnly): The PS data transit in MB.
* **resyncDurationInSeconds**: int (ReadOnly): The resync duration in seconds.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required for this disk.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **sourceDataInMB**: int (ReadOnly): The source data transit in MB.
* **targetDataInMB**: int (ReadOnly): The target data transit in MB.

## InMageAzureV2
### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **azureVMDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine. Value can be list of strings that contain data store names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine. Value can be vCenter or physical.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **enableRDPOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMageAzureV2' (Required): InMage Azure v2 specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAgentUpdateRequired**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **isRebootAfterUpdateRequired**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **licenseType**: string (ReadOnly): License Type of the VM to be used.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **masterTargetId**: string: The Master target Id.
* **multiVmGroupId**: string: The multi vm group Id.
* **multiVmGroupName**: string: The multi vm group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi vm sync is enabled or disabled.
* **osDiskId**: string (ReadOnly): The id of the disk containing the OS.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string: The Process Server Id.
* **protectedDisks**: [InMageAzureV2ProtectedDiskDetails](#inmageazurev2protecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVMName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **storageAccountId**: string (Required, WriteOnly): The storage account name.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure Vm Name.
* **targetVmId**: string (ReadOnly): The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors.
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vhdName**: string (ReadOnly): The OS disk VHD name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

## InMageAzureV2ProtectedDiskDetails
### Properties
* **diskCapacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskId**: string (ReadOnly): The disk id.
* **diskName**: string (ReadOnly): The disk name.
* **diskResized**: string (ReadOnly): A value indicating whether disk is resized.
* **fileSystemCapacityInBytes**: int (ReadOnly): The disk file system capacity in bytes.
* **healthErrorCode**: string (ReadOnly): The health error code for the disk.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **protectionStage**: string (ReadOnly): The protection stage.
* **psDataInMegaBytes**: int (ReadOnly): The PS data transit in MB.
* **resyncDurationInSeconds**: int (ReadOnly): The resync duration in seconds.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required for this disk.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **sourceDataInMegaBytes**: int (ReadOnly): The source data transit in MB.
* **targetDataInMegaBytes**: int (ReadOnly): The target data transit in MB.

## San
### Properties
* **instanceType**: 'San' (Required): San enable protection provider specific input.

## CreateProtectionContainerMappingInputProperties
### Properties
* **health**: string (ReadOnly): Health of pairing.
* **healthErrorDetails**: [HealthError](#healtherror)[] (ReadOnly): Health error.
* **policyFriendlyName**: string (ReadOnly): Friendly name of replication policy.
* **PolicyId**: string: Applicable policy.
* **providerSpecificDetails**: [ProtectionContainerMappingProviderSpecificDetails](#protectioncontainermappingproviderspecificdetails) (ReadOnly): Container mapping provider specific details.
* **providerSpecificInput**: [ReplicationProviderSpecificContainerMappingInput](#replicationproviderspecificcontainermappinginput) (WriteOnly): Provider specific input for pairing operations.
* **sourceFabricFriendlyName**: string (ReadOnly): Friendly name of source fabric.
* **sourceProtectionContainerFriendlyName**: string (ReadOnly): Friendly name of source protection container.
* **state**: string (ReadOnly): Association Status
* **targetFabricFriendlyName**: string (ReadOnly): Friendly name of target fabric.
* **targetProtectionContainerFriendlyName**: string (ReadOnly): Friendly name of paired container.
* **targetProtectionContainerId**: string: The target unique protection container name.

## ProtectionContainerMappingProviderSpecificDetails
### Properties
* **instanceType**: string (ReadOnly): Gets the class type. Overridden in derived classes.

## ReplicationProviderSpecificContainerMappingInput
### Properties
* **instanceType**: string (WriteOnly): The class type.

## StorageMappingInputProperties
### Properties
* **targetStorageClassificationId**: string: The ID of the storage object.

## AddVCenterRequestProperties
### Properties
* **discoveryStatus**: string (ReadOnly): The VCenter discovery status.
* **fabricArmResourceName**: string (ReadOnly): The ARM resource name of the fabric containing this VCenter.
* **friendlyName**: string: The friendly name of the vCenter.
* **infrastructureId**: string (ReadOnly): The infrastructure Id of vCenter.
* **internalId**: string (ReadOnly): VCenter internal ID.
* **ipAddress**: string: The IP address of the vCenter to be discovered.
* **lastHeartbeat**: string (ReadOnly): The time when the last heartbeat was received by vCenter.
* **port**: string: The port number for discovery.
* **processServerId**: string: The process server Id from where the discovery is orchestrated.
* **runAsAccountId**: string: The account Id which has privileges to discover the vCenter.

## CreatePolicyInputProperties
### Properties
* **friendlyName**: string (ReadOnly): The FriendlyName.
* **providerSpecificDetails**: [PolicyProviderSpecificDetails](#policyproviderspecificdetails) (ReadOnly): Base class for Provider specific details for policies.
* **providerSpecificInput**: [PolicyProviderSpecificInput](#policyproviderspecificinput) (WriteOnly): Base class for provider specific input

## PolicyProviderSpecificDetails
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **fabricObjectId**: string: The fabric specific object Id of the virtual machine.
* **instanceType**: 'A2A' (Required): A2A specific policy details.
* **isReplicationAgentUpdateRequired**: bool (ReadOnly): A value indicating whether replication agent update is required.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The time (in UTC) when the last RPO value was calculated by Protection Service.
* **lifecycleId**: string (ReadOnly): An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
* **managementId**: string (ReadOnly): The management Id.
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **multiVmGroupId**: string (ReadOnly): The multi vm group Id.
* **multiVmGroupName**: string (ReadOnly): The multi vm group name.
* **osType**: string (ReadOnly): The type of operating system.
* **primaryFabricLocation**: string (ReadOnly): Primary fabric location.
* **protectedDisks**: [A2AProtectedDiskDetails](#a2aprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectedManagedDisks**: [A2AProtectedManagedDiskDetails](#a2aprotectedmanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySet**: string (ReadOnly): The recovery availability set.
* **recoveryAvailabilitySetId**: string (WriteOnly): The recovery availability set Id.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The recovery resource group.
* **recoveryAzureVMName**: string (ReadOnly): The name of recovery virtual machine.
* **recoveryAzureVMSize**: string (ReadOnly): The size of recovery virtual machine.
* **recoveryCloudService**: string (ReadOnly): The recovery cloud service.
* **recoveryCloudServiceId**: string (WriteOnly): The recovery cloud service Id. Valid for V1 scenarios.
* **recoveryContainerId**: string (WriteOnly): The recovery container Id.
* **recoveryFabricLocation**: string (ReadOnly): The recovery fabric location.
* **recoveryFabricObjectId**: string (ReadOnly): The recovery fabric object Id.
* **recoveryResourceGroupId**: string (WriteOnly): The recovery resource group Id. Valid for V2 scenarios.
* **rpoInSeconds**: int (ReadOnly): The last RPO value in seconds.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The recovery virtual network.
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly): The test failover fabric object Id.
* **vmDisks**: [A2AVmDiskInputDetails](#a2avmdiskinputdetails)[] (WriteOnly): The list of vm disk details.
* **vmManagedDisks**: [A2AVmManagedDiskInputDetails](#a2avmmanageddiskinputdetails)[] (WriteOnly): The list of vm managed disk details.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The virtual machine nic details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.
* **vmSyncedConfigDetails**: [AzureToAzureVmSyncedConfigDetails](#azuretoazurevmsyncedconfigdetails) (ReadOnly): Azure to Azure VM synced configuration details.

### HyperVReplica2012
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012' (Required): Hyper-V Replica Blue specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplica2012R2
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012R2' (Required): Hyper-V Replica Blue specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaAzure
#### Properties
* **azureVMDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **disksToInclude**: string[] (WriteOnly): The list of VHD IDs of disks to be protected.
* **enableRDPOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **encryption**: string (ReadOnly): The encryption info.
* **hvHostVmId**: string (WriteOnly): The Hyper-V host Vm Id.
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaAzure' (Required): Hyper-V Replica Azure specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **licenseType**: string (ReadOnly): License Type of the VM to be used.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
* **osType**: string (WriteOnly): The OS type associated with vm.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVMName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure Vm Name.
* **targetStorageAccountId**: string (WriteOnly): The storage account name.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **vhdId**: string (WriteOnly): The OS disk VHD id associated with vm.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmName**: string (WriteOnly): The Vm Name.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaBasePolicyDetails
#### Properties
* **allowedAuthenticationType**: int (ReadOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly): A value indicating the application consistent frequency.
* **compression**: string (ReadOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (ReadOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplicaBasePolicyDetails' (Required): Base class for HyperVReplica policy details.
* **offlineReplicationExportPath**: string (ReadOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (ReadOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (ReadOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (ReadOnly): A value indicating the number of recovery points.
* **replicaDeletionOption**: string (ReadOnly): A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
* **replicationPort**: int (ReadOnly): A value indicating the recovery HTTPS port.

### InMage
#### Properties
* **activeSiteType**: string (ReadOnly): The active location of the VM. If the VM is being protected from Azure, this field will take values from { Azure, OnPrem }. If the VM is being protected between two data-centers, this field will be OnPrem always.
* **agentDetails**: [InMageAgentDetails](#inmageagentdetails) (ReadOnly): The details of the InMage agent.
* **azureStorageAccountId**: string (ReadOnly): A value indicating the underlying Azure storage account. If the VM is not running in Azure, this value shall be set to null.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **consistencyPoints**: [Dictionary<string,DateTime>](#dictionarystringdatetime) (ReadOnly): The collection of Consistency points.
* **datastoreName**: string (WriteOnly): The target data store name.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine Value can be list of strings that contain data store names
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMage' (Required): InMage specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **masterTargetId**: string (Required): The Master Target Id.
* **multiVmGroupId**: string (Required): The multi vm group Id.
* **multiVmGroupName**: string (Required): The multi vm group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether the multi vm sync is enabled or disabled.
* **osDetails**: [OSDiskDetails](#osdiskdetails) (ReadOnly): Details of the OS Disk.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string (Required): The Process Server Id.
* **protectedDisks**: [InMageProtectedDiskDetails](#inmageprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **rebootAfterUpdateStatus**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **retentionDrive**: string (Required, WriteOnly): The retention drive to use on the MT.
* **retentionWindowEnd**: string (ReadOnly): The retention window end time.
* **retentionWindowStart**: string (ReadOnly): The retention window start time.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vmFriendlyName**: string (WriteOnly): The Vm Name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMageAzureV2
#### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **azureVMDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine. Value can be list of strings that contain data store names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine. Value can be vCenter or physical.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **enableRDPOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMageAzureV2' (Required): InMage Azure v2 specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAgentUpdateRequired**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **isRebootAfterUpdateRequired**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **licenseType**: string (ReadOnly): License Type of the VM to be used.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **masterTargetId**: string: The Master target Id.
* **multiVmGroupId**: string: The multi vm group Id.
* **multiVmGroupName**: string: The multi vm group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi vm sync is enabled or disabled.
* **osDiskId**: string (ReadOnly): The id of the disk containing the OS.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string: The Process Server Id.
* **protectedDisks**: [InMageAzureV2ProtectedDiskDetails](#inmageazurev2protecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVMName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **storageAccountId**: string (Required, WriteOnly): The storage account name.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure Vm Name.
* **targetVmId**: string (ReadOnly): The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors.
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vhdName**: string (ReadOnly): The OS disk VHD name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMageBasePolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **instanceType**: 'InMageBasePolicyDetails' (Required): Base class for the policies of providers using InMage replication.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### RcmAzureMigration
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int (ReadOnly): The crash consistent snapshot frequency in minutes.
* **instanceType**: 'RcmAzureMigration' (Required): RCM based Azure migration specific policy details.
* **multiVmSyncStatus**: 'Disabled' | 'Enabled' (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### VMwareCbt
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (WriteOnly): The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'VMwareCbt' (Required): VMware Cbt specific policy details.
* **recoveryPointHistory**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.


## HyperVReplicaBasePolicyDetails
### Properties
* **allowedAuthenticationType**: int (ReadOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly): A value indicating the application consistent frequency.
* **compression**: string (ReadOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (ReadOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplicaBasePolicyDetails' (Required): Base class for HyperVReplica policy details.
* **offlineReplicationExportPath**: string (ReadOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (ReadOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (ReadOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (ReadOnly): A value indicating the number of recovery points.
* **replicaDeletionOption**: string (ReadOnly): A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
* **replicationPort**: int (ReadOnly): A value indicating the recovery HTTPS port.

## InMageBasePolicyDetails
### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **instanceType**: 'InMageBasePolicyDetails' (Required): Base class for the policies of providers using InMage replication.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

## RcmAzureMigration
### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int (ReadOnly): The crash consistent snapshot frequency in minutes.
* **instanceType**: 'RcmAzureMigration' (Required): RCM based Azure migration specific policy details.
* **multiVmSyncStatus**: 'Disabled' | 'Enabled' (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

## VMwareCbt
### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (WriteOnly): The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'VMwareCbt' (Required): VMware Cbt specific policy details.
* **recoveryPointHistory**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.

## PolicyProviderSpecificInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **fabricObjectId**: string: The fabric specific object Id of the virtual machine.
* **instanceType**: 'A2A' (Required): A2A specific policy details.
* **isReplicationAgentUpdateRequired**: bool (ReadOnly): A value indicating whether replication agent update is required.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The time (in UTC) when the last RPO value was calculated by Protection Service.
* **lifecycleId**: string (ReadOnly): An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
* **managementId**: string (ReadOnly): The management Id.
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **multiVmGroupId**: string (ReadOnly): The multi vm group Id.
* **multiVmGroupName**: string (ReadOnly): The multi vm group name.
* **osType**: string (ReadOnly): The type of operating system.
* **primaryFabricLocation**: string (ReadOnly): Primary fabric location.
* **protectedDisks**: [A2AProtectedDiskDetails](#a2aprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectedManagedDisks**: [A2AProtectedManagedDiskDetails](#a2aprotectedmanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySet**: string (ReadOnly): The recovery availability set.
* **recoveryAvailabilitySetId**: string (WriteOnly): The recovery availability set Id.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The recovery resource group.
* **recoveryAzureVMName**: string (ReadOnly): The name of recovery virtual machine.
* **recoveryAzureVMSize**: string (ReadOnly): The size of recovery virtual machine.
* **recoveryCloudService**: string (ReadOnly): The recovery cloud service.
* **recoveryCloudServiceId**: string (WriteOnly): The recovery cloud service Id. Valid for V1 scenarios.
* **recoveryContainerId**: string (WriteOnly): The recovery container Id.
* **recoveryFabricLocation**: string (ReadOnly): The recovery fabric location.
* **recoveryFabricObjectId**: string (ReadOnly): The recovery fabric object Id.
* **recoveryResourceGroupId**: string (WriteOnly): The recovery resource group Id. Valid for V2 scenarios.
* **rpoInSeconds**: int (ReadOnly): The last RPO value in seconds.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The recovery virtual network.
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly): The test failover fabric object Id.
* **vmDisks**: [A2AVmDiskInputDetails](#a2avmdiskinputdetails)[] (WriteOnly): The list of vm disk details.
* **vmManagedDisks**: [A2AVmManagedDiskInputDetails](#a2avmmanageddiskinputdetails)[] (WriteOnly): The list of vm managed disk details.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The virtual machine nic details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.
* **vmSyncedConfigDetails**: [AzureToAzureVmSyncedConfigDetails](#azuretoazurevmsyncedconfigdetails) (ReadOnly): Azure to Azure VM synced configuration details.

### HyperVReplica2012
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012' (Required): Hyper-V Replica Blue specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplica2012R2
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012R2' (Required): Hyper-V Replica Blue specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaAzure
#### Properties
* **azureVMDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **disksToInclude**: string[] (WriteOnly): The list of VHD IDs of disks to be protected.
* **enableRDPOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **encryption**: string (ReadOnly): The encryption info.
* **hvHostVmId**: string (WriteOnly): The Hyper-V host Vm Id.
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaAzure' (Required): Hyper-V Replica Azure specific protection profile details.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **licenseType**: string (ReadOnly): License Type of the VM to be used.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
* **osType**: string (WriteOnly): The OS type associated with vm.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVMName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure Vm Name.
* **targetStorageAccountId**: string (WriteOnly): The storage account name.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **vhdId**: string (WriteOnly): The OS disk VHD id associated with vm.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmName**: string (WriteOnly): The Vm Name.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMage
#### Properties
* **activeSiteType**: string (ReadOnly): The active location of the VM. If the VM is being protected from Azure, this field will take values from { Azure, OnPrem }. If the VM is being protected between two data-centers, this field will be OnPrem always.
* **agentDetails**: [InMageAgentDetails](#inmageagentdetails) (ReadOnly): The details of the InMage agent.
* **azureStorageAccountId**: string (ReadOnly): A value indicating the underlying Azure storage account. If the VM is not running in Azure, this value shall be set to null.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **consistencyPoints**: [Dictionary<string,DateTime>](#dictionarystringdatetime) (ReadOnly): The collection of Consistency points.
* **datastoreName**: string (WriteOnly): The target data store name.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine Value can be list of strings that contain data store names
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMage' (Required): InMage specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **masterTargetId**: string (Required): The Master Target Id.
* **multiVmGroupId**: string (Required): The multi vm group Id.
* **multiVmGroupName**: string (Required): The multi vm group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether the multi vm sync is enabled or disabled.
* **osDetails**: [OSDiskDetails](#osdiskdetails) (ReadOnly): Details of the OS Disk.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string (Required): The Process Server Id.
* **protectedDisks**: [InMageProtectedDiskDetails](#inmageprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **rebootAfterUpdateStatus**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **retentionDrive**: string (Required, WriteOnly): The retention drive to use on the MT.
* **retentionWindowEnd**: string (ReadOnly): The retention window end time.
* **retentionWindowStart**: string (ReadOnly): The retention window start time.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vmFriendlyName**: string (WriteOnly): The Vm Name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMageAzureV2
#### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **azureVMDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine. Value can be list of strings that contain data store names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine. Value can be vCenter or physical.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **enableRDPOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMageAzureV2' (Required): InMage Azure v2 specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAgentUpdateRequired**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **isRebootAfterUpdateRequired**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **licenseType**: string (ReadOnly): License Type of the VM to be used.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **masterTargetId**: string: The Master target Id.
* **multiVmGroupId**: string: The multi vm group Id.
* **multiVmGroupName**: string: The multi vm group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi vm sync is enabled or disabled.
* **osDiskId**: string (ReadOnly): The id of the disk containing the OS.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string: The Process Server Id.
* **protectedDisks**: [InMageAzureV2ProtectedDiskDetails](#inmageazurev2protecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVMName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **sourceVmCPUCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRAMSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **storageAccountId**: string (Required, WriteOnly): The storage account name.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure Vm Name.
* **targetVmId**: string (ReadOnly): The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors.
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vhdName**: string (ReadOnly): The OS disk VHD name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### VMwareCbt
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (WriteOnly): The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'VMwareCbt' (Required): VMware Cbt specific policy details.
* **recoveryPointHistory**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.


## CreateRecoveryPlanInputProperties
### Properties
* **allowedOperations**: string[] (ReadOnly): The list of allowed operations.
* **currentScenario**: [CurrentScenarioDetails](#currentscenariodetails) (ReadOnly): Current scenario details of the protected entity.
* **currentScenarioStatus**: string (ReadOnly): The recovery plan status.
* **currentScenarioStatusDescription**: string (ReadOnly): The recovery plan status description.
* **failoverDeploymentModel**: 'Classic' | 'NotApplicable' | 'ResourceManager': The failover deployment model.
* **friendlyName**: string (ReadOnly): The friendly name.
* **groups**: [RecoveryPlanGroup](#recoveryplangroup)[] (Required): The recovery plan groups.
* **lastPlannedFailoverTime**: string (ReadOnly): The start time of the last planned failover.
* **lastTestFailoverTime**: string (ReadOnly): The start time of the last test failover.
* **lastUnplannedFailoverTime**: string (ReadOnly): The start time of the last unplanned failover.
* **primaryFabricFriendlyName**: string (ReadOnly): The primary fabric friendly name.
* **primaryFabricId**: string (Required): The primary fabric Id.
* **recoveryFabricFriendlyName**: string (ReadOnly): The recovery fabric friendly name.
* **recoveryFabricId**: string (Required): The recovery fabric Id.
* **replicationProviders**: string[] (ReadOnly): The list of replication providers.

## RecoveryPlanGroup
### Properties
* **endGroupActions**: [RecoveryPlanAction](#recoveryplanaction)[]: The end group actions.
* **groupType**: 'Boot' | 'Failover' | 'Shutdown' (Required): The group type.
* **replicationProtectedItems**: [RecoveryPlanProtectedItem](#recoveryplanprotecteditem)[]: The list of protected items.
* **startGroupActions**: [RecoveryPlanAction](#recoveryplanaction)[]: The start group actions.

## RecoveryPlanAction
### Properties
* **actionName**: string (Required): The action name.
* **customDetails**: [RecoveryPlanActionDetails](#recoveryplanactiondetails) (Required): Recovery plan action custom details.
* **failoverDirections**: 'PrimaryToRecovery' | 'RecoveryToPrimary'[] (Required): The list of failover directions.
* **failoverTypes**: 'ChangePit' | 'Commit' | 'CompleteMigration' | 'DisableProtection' | 'Failback' | 'FinalizeFailback' | 'PlannedFailover' | 'RepairReplication' | 'ReverseReplicate' | 'SwitchProtection' | 'TestFailover' | 'TestFailoverCleanup' | 'UnplannedFailover'[] (Required): The list of failover types.

## RecoveryPlanActionDetails
* **Discriminator**: instanceType
### Base Properties
### AutomationRunbookActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required): The fabric location.
* **instanceType**: 'AutomationRunbookActionDetails' (Required): Recovery plan Automation runbook action details.
* **runbookId**: string: The runbook ARM Id.
* **timeout**: string: The runbook timeout.

### ManualActionDetails
#### Properties
* **description**: string: The manual action description.
* **instanceType**: 'ManualActionDetails' (Required): Recovery plan manual action details.

### ScriptActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required): The fabric location.
* **instanceType**: 'ScriptActionDetails' (Required): Recovery plan script action details.
* **path**: string (Required): The script path.
* **timeout**: string: The script timeout.


## AutomationRunbookActionDetails
### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required): The fabric location.
* **instanceType**: 'AutomationRunbookActionDetails' (Required): Recovery plan Automation runbook action details.
* **runbookId**: string: The runbook ARM Id.
* **timeout**: string: The runbook timeout.

## ManualActionDetails
### Properties
* **description**: string: The manual action description.
* **instanceType**: 'ManualActionDetails' (Required): Recovery plan manual action details.

## ScriptActionDetails
### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required): The fabric location.
* **instanceType**: 'ScriptActionDetails' (Required): Recovery plan script action details.
* **path**: string (Required): The script path.
* **timeout**: string: The script timeout.

## RecoveryPlanProtectedItem
### Properties
* **id**: string: The ARM Id of the recovery plan protected item.
* **virtualMachineId**: string: The virtual machine Id.

