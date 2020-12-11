# Microsoft.RecoveryServices @ 2016-08-10

## Resource Microsoft.RecoveryServices/vaults/replicationAlertSettings@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigureAlertRequestProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationAlertSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FabricCreationInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateNetworkMappingInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateProtectionContainerInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnableProtectionInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateProtectionContainerMappingInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageMappingInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddVCenterRequestProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationPolicies@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreatePolicyInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2016-08-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateRecoveryPlanInputProperties (Required)
* **type**: 'Microsoft.RecoveryServices/vaults/replicationRecoveryPlans' (ReadOnly, DeployTimeConstant)

## ConfigureAlertRequestProperties
### Properties
* **customEmailAddresses**: string[]
* **locale**: string
* **sendToOwners**: string

## FabricCreationInputProperties
### Properties
* **bcdrState**: string (ReadOnly)
* **customDetails**: FabricSpecificCreationInput
* **encryptionDetails**: EncryptionDetails (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **health**: string (ReadOnly)
* **healthErrorDetails**: HealthError[] (ReadOnly)
* **internalIdentifier**: string (ReadOnly)
* **rolloverEncryptionDetails**: EncryptionDetails (ReadOnly)

## FabricSpecificCreationInput
* **Discriminator**: instanceType
### Base Properties
### Azure
#### Properties
* **containerIds**: string[] (ReadOnly)
* **instanceType**: 'Azure' (Required)
* **location**: string

### HyperVSite
#### Properties
* **instanceType**: 'HyperVSite' (Required)

### VMM
#### Properties
* **instanceType**: 'VMM' (Required)

### VMware
#### Properties
* **agentCount**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **availableMemoryInBytes**: int (ReadOnly)
* **availableSpaceInBytes**: int (ReadOnly)
* **cpuLoad**: string (ReadOnly)
* **cpuLoadStatus**: string (ReadOnly)
* **csServiceStatus**: string (ReadOnly)
* **databaseServerLoad**: string (ReadOnly)
* **databaseServerLoadStatus**: string (ReadOnly)
* **hostName**: string (ReadOnly)
* **instanceType**: 'VMware' (Required)
* **ipAddress**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **masterTargetServers**: MasterTargetServer[] (ReadOnly)
* **memoryUsageStatus**: string (ReadOnly)
* **processServerCount**: string (ReadOnly)
* **processServers**: ProcessServer[] (ReadOnly)
* **protectedServers**: string (ReadOnly)
* **psTemplateVersion**: string (ReadOnly)
* **replicationPairCount**: string (ReadOnly)
* **runAsAccounts**: RunAsAccount[] (ReadOnly)
* **spaceUsageStatus**: string (ReadOnly)
* **sslCertExpiryDate**: string (ReadOnly)
* **sslCertExpiryRemainingDays**: int (ReadOnly)
* **systemLoad**: string (ReadOnly)
* **systemLoadStatus**: string (ReadOnly)
* **totalMemoryInBytes**: int (ReadOnly)
* **totalSpaceInBytes**: int (ReadOnly)
* **versionStatus**: string (ReadOnly)
* **webLoad**: string (ReadOnly)
* **webLoadStatus**: string (ReadOnly)

### VMwareV2
#### Properties
* **instanceType**: 'VMwareV2' (Required)
* **rcmServiceEndpoint**: string (ReadOnly)
* **srsServiceEndpoint**: string (ReadOnly)


## Azure
### Properties
* **containerIds**: string[] (ReadOnly)
* **instanceType**: 'Azure' (Required)
* **location**: string

## HyperVSite
### Properties
* **instanceType**: 'HyperVSite' (Required)

## VMM
### Properties
* **instanceType**: 'VMM' (Required)

## VMware
### Properties
* **agentCount**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **availableMemoryInBytes**: int (ReadOnly)
* **availableSpaceInBytes**: int (ReadOnly)
* **cpuLoad**: string (ReadOnly)
* **cpuLoadStatus**: string (ReadOnly)
* **csServiceStatus**: string (ReadOnly)
* **databaseServerLoad**: string (ReadOnly)
* **databaseServerLoadStatus**: string (ReadOnly)
* **hostName**: string (ReadOnly)
* **instanceType**: 'VMware' (Required)
* **ipAddress**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **masterTargetServers**: MasterTargetServer[] (ReadOnly)
* **memoryUsageStatus**: string (ReadOnly)
* **processServerCount**: string (ReadOnly)
* **processServers**: ProcessServer[] (ReadOnly)
* **protectedServers**: string (ReadOnly)
* **psTemplateVersion**: string (ReadOnly)
* **replicationPairCount**: string (ReadOnly)
* **runAsAccounts**: RunAsAccount[] (ReadOnly)
* **spaceUsageStatus**: string (ReadOnly)
* **sslCertExpiryDate**: string (ReadOnly)
* **sslCertExpiryRemainingDays**: int (ReadOnly)
* **systemLoad**: string (ReadOnly)
* **systemLoadStatus**: string (ReadOnly)
* **totalMemoryInBytes**: int (ReadOnly)
* **totalSpaceInBytes**: int (ReadOnly)
* **versionStatus**: string (ReadOnly)
* **webLoad**: string (ReadOnly)
* **webLoadStatus**: string (ReadOnly)

## MasterTargetServer
### Properties
* **agentVersion**: string (ReadOnly)
* **dataStores**: DataStore[] (ReadOnly)
* **diskCount**: int (ReadOnly)
* **id**: string (ReadOnly)
* **ipAddress**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **name**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **osVersion**: string (ReadOnly)
* **retentionVolumes**: RetentionVolume[] (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **versionStatus**: string (ReadOnly)

## DataStore
### Properties
* **capacity**: string (ReadOnly)
* **freeSpace**: string (ReadOnly)
* **symbolicName**: string (ReadOnly)
* **type**: string (ReadOnly)
* **uuid**: string (ReadOnly)

## RetentionVolume
### Properties
* **capacityInBytes**: int (ReadOnly)
* **freeSpaceInBytes**: int (ReadOnly)
* **thresholdPercentage**: int (ReadOnly)
* **volumeName**: string (ReadOnly)

## HealthError
### Properties
* **childErrors**: HealthError[] (ReadOnly)
* **creationTimeUtc**: string (ReadOnly)
* **entityId**: string (ReadOnly)
* **errorCode**: string (ReadOnly)
* **errorLevel**: string (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **errorSource**: string (ReadOnly)
* **errorType**: string (ReadOnly)
* **possibleCauses**: string (ReadOnly)
* **recommendedAction**: string (ReadOnly)
* **recoveryProviderErrorMessage**: string (ReadOnly)

## ProcessServer
### Properties
* **agentVersion**: string (ReadOnly)
* **availableMemoryInBytes**: int (ReadOnly)
* **availableSpaceInBytes**: int (ReadOnly)
* **cpuLoad**: string (ReadOnly)
* **cpuLoadStatus**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **hostId**: string (ReadOnly)
* **id**: string (ReadOnly)
* **ipAddress**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **machineCount**: string (ReadOnly)
* **memoryUsageStatus**: string (ReadOnly)
* **mobilityServiceUpdates**: MobilityServiceUpdate[] (ReadOnly)
* **osType**: string (ReadOnly)
* **osVersion**: string (ReadOnly)
* **psServiceStatus**: string (ReadOnly)
* **replicationPairCount**: string (ReadOnly)
* **spaceUsageStatus**: string (ReadOnly)
* **sslCertExpiryDate**: string (ReadOnly)
* **sslCertExpiryRemainingDays**: int (ReadOnly)
* **systemLoad**: string (ReadOnly)
* **systemLoadStatus**: string (ReadOnly)
* **totalMemoryInBytes**: int (ReadOnly)
* **totalSpaceInBytes**: int (ReadOnly)
* **versionStatus**: string (ReadOnly)

## MobilityServiceUpdate
### Properties
* **osType**: string (ReadOnly)
* **rebootStatus**: string (ReadOnly)
* **version**: string (ReadOnly)

## RunAsAccount
### Properties
* **accountId**: string (ReadOnly)
* **accountName**: string (ReadOnly)

## VMwareV2
### Properties
* **instanceType**: 'VMwareV2' (Required)
* **rcmServiceEndpoint**: string (ReadOnly)
* **srsServiceEndpoint**: string (ReadOnly)

## EncryptionDetails
### Properties
* **kekCertExpiryDate**: string (ReadOnly)
* **kekCertThumbprint**: string (ReadOnly)
* **kekState**: string (ReadOnly)

## CreateNetworkMappingInputProperties
### Properties
* **fabricSpecificDetails**: FabricSpecificCreateNetworkMappingInput (WriteOnly)
* **fabricSpecificSettings**: NetworkMappingFabricSpecificSettings (ReadOnly)
* **primaryFabricFriendlyName**: string (ReadOnly)
* **primaryNetworkFriendlyName**: string (ReadOnly)
* **primaryNetworkId**: string (ReadOnly)
* **recoveryFabricArmId**: string (ReadOnly)
* **recoveryFabricFriendlyName**: string (ReadOnly)
* **recoveryFabricName**: string (WriteOnly)
* **recoveryNetworkFriendlyName**: string (ReadOnly)
* **recoveryNetworkId**: string
* **state**: string (ReadOnly)

## FabricSpecificCreateNetworkMappingInput
* **Discriminator**: instanceType
### Base Properties
### AzureToAzure
#### Properties
* **instanceType**: 'AzureToAzure' (Required)
* **primaryNetworkId**: string (WriteOnly)

### VmmToAzure
#### Properties
* **instanceType**: 'VmmToAzure' (Required)

### VmmToVmm
#### Properties
* **instanceType**: 'VmmToVmm' (Required)


## AzureToAzure
### Properties
* **instanceType**: 'AzureToAzure' (Required)
* **primaryNetworkId**: string (WriteOnly)

## VmmToAzure
### Properties
* **instanceType**: 'VmmToAzure' (Required)

## VmmToVmm
### Properties
* **instanceType**: 'VmmToVmm' (Required)

## NetworkMappingFabricSpecificSettings
* **Discriminator**: instanceType
### Base Properties
### AzureToAzure
#### Properties
* **instanceType**: 'AzureToAzure' (Required)
* **primaryNetworkId**: string (WriteOnly)

### VmmToAzure
#### Properties
* **instanceType**: 'VmmToAzure' (Required)

### VmmToVmm
#### Properties
* **instanceType**: 'VmmToVmm' (Required)


## CreateProtectionContainerInputProperties
### Properties
* **fabricFriendlyName**: string (ReadOnly)
* **fabricSpecificDetails**: ProtectionContainerFabricSpecificDetails (ReadOnly)
* **fabricType**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **pairingStatus**: string (ReadOnly)
* **protectedItemCount**: int (ReadOnly)
* **providerSpecificInput**: ReplicationProviderSpecificContainerCreationInput[] (WriteOnly)
* **role**: string (ReadOnly)

## ProtectionContainerFabricSpecificDetails
### Properties
* **instanceType**: string (ReadOnly)

## ReplicationProviderSpecificContainerCreationInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **agentVersion**: string (ReadOnly)
* **fabricObjectId**: string
* **instanceType**: 'A2A' (Required)
* **isReplicationAgentUpdateRequired**: bool (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lifecycleId**: string (ReadOnly)
* **managementId**: string (ReadOnly)
* **monitoringJobType**: string (ReadOnly)
* **monitoringPercentageCompletion**: int (ReadOnly)
* **multiVmGroupId**: string (ReadOnly)
* **multiVmGroupName**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **primaryFabricLocation**: string (ReadOnly)
* **protectedDisks**: A2AProtectedDiskDetails[] (ReadOnly)
* **protectedManagedDisks**: A2AProtectedManagedDiskDetails[] (ReadOnly)
* **recoveryAvailabilitySet**: string (ReadOnly)
* **recoveryAvailabilitySetId**: string (WriteOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **recoveryCloudService**: string (ReadOnly)
* **recoveryCloudServiceId**: string (WriteOnly)
* **recoveryContainerId**: string (WriteOnly)
* **recoveryFabricLocation**: string (ReadOnly)
* **recoveryFabricObjectId**: string (ReadOnly)
* **recoveryResourceGroupId**: string (WriteOnly)
* **rpoInSeconds**: int (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly)
* **vmDisks**: A2AVmDiskInputDetails[] (WriteOnly)
* **vmManagedDisks**: A2AVmManagedDiskInputDetails[] (WriteOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)
* **vmSyncedConfigDetails**: AzureToAzureVmSyncedConfigDetails (ReadOnly)


## A2A
### Properties
* **agentVersion**: string (ReadOnly)
* **fabricObjectId**: string
* **instanceType**: 'A2A' (Required)
* **isReplicationAgentUpdateRequired**: bool (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lifecycleId**: string (ReadOnly)
* **managementId**: string (ReadOnly)
* **monitoringJobType**: string (ReadOnly)
* **monitoringPercentageCompletion**: int (ReadOnly)
* **multiVmGroupId**: string (ReadOnly)
* **multiVmGroupName**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **primaryFabricLocation**: string (ReadOnly)
* **protectedDisks**: A2AProtectedDiskDetails[] (ReadOnly)
* **protectedManagedDisks**: A2AProtectedManagedDiskDetails[] (ReadOnly)
* **recoveryAvailabilitySet**: string (ReadOnly)
* **recoveryAvailabilitySetId**: string (WriteOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **recoveryCloudService**: string (ReadOnly)
* **recoveryCloudServiceId**: string (WriteOnly)
* **recoveryContainerId**: string (WriteOnly)
* **recoveryFabricLocation**: string (ReadOnly)
* **recoveryFabricObjectId**: string (ReadOnly)
* **recoveryResourceGroupId**: string (WriteOnly)
* **rpoInSeconds**: int (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly)
* **vmDisks**: A2AVmDiskInputDetails[] (WriteOnly)
* **vmManagedDisks**: A2AVmManagedDiskInputDetails[] (WriteOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)
* **vmSyncedConfigDetails**: AzureToAzureVmSyncedConfigDetails (ReadOnly)

## A2AProtectedDiskDetails
### Properties
* **dataPendingAtSourceAgentInMB**: int (ReadOnly)
* **dataPendingInStagingStorageAccountInMB**: int (ReadOnly)
* **diskCapacityInBytes**: int (ReadOnly)
* **diskName**: string (ReadOnly)
* **diskType**: string (ReadOnly)
* **diskUri**: string (ReadOnly)
* **monitoringJobType**: string (ReadOnly)
* **monitoringPercentageCompletion**: int (ReadOnly)
* **primaryDiskAzureStorageAccountId**: string (ReadOnly)
* **primaryStagingAzureStorageAccountId**: string (ReadOnly)
* **recoveryAzureStorageAccountId**: string (ReadOnly)
* **recoveryDiskUri**: string (ReadOnly)
* **resyncRequired**: bool (ReadOnly)

## A2AProtectedManagedDiskDetails
### Properties
* **dataPendingAtSourceAgentInMB**: int (ReadOnly)
* **dataPendingInStagingStorageAccountInMB**: int (ReadOnly)
* **diskCapacityInBytes**: int (ReadOnly)
* **diskId**: string (ReadOnly)
* **diskName**: string (ReadOnly)
* **diskType**: string (ReadOnly)
* **monitoringJobType**: string (ReadOnly)
* **monitoringPercentageCompletion**: int (ReadOnly)
* **primaryStagingAzureStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryDiskId**: string (ReadOnly)
* **resyncRequired**: bool (ReadOnly)

## A2AVmDiskInputDetails
### Properties
* **diskUri**: string (WriteOnly)
* **primaryStagingAzureStorageAccountId**: string (WriteOnly)
* **recoveryAzureStorageAccountId**: string (WriteOnly)

## A2AVmManagedDiskInputDetails
### Properties
* **diskId**: string (WriteOnly)
* **primaryStagingAzureStorageAccountId**: string (WriteOnly)
* **recoveryResourceGroupId**: string (WriteOnly)

## VMNicDetails
### Properties
* **ipAddressType**: string (ReadOnly)
* **nicId**: string (ReadOnly)
* **primaryNicStaticIPAddress**: string (ReadOnly)
* **recoveryNicIpAddressType**: string (ReadOnly)
* **recoveryVMNetworkId**: string (ReadOnly)
* **recoveryVMSubnetName**: string (ReadOnly)
* **replicaNicId**: string (ReadOnly)
* **replicaNicStaticIPAddress**: string (ReadOnly)
* **selectionType**: string (ReadOnly)
* **sourceNicArmId**: string (ReadOnly)
* **vMNetworkName**: string (ReadOnly)
* **vMSubnetName**: string (ReadOnly)

## AzureToAzureVmSyncedConfigDetails
### Properties
* **inputEndpoints**: InputEndpoint[] (ReadOnly)
* **roleAssignments**: RoleAssignment[] (ReadOnly)
* **tags**: Dictionary<string,String> (ReadOnly)

## InputEndpoint
### Properties
* **endpointName**: string (ReadOnly)
* **privatePort**: int (ReadOnly)
* **protocol**: string (ReadOnly)
* **publicPort**: int (ReadOnly)

## RoleAssignment
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **principalId**: string (ReadOnly)
* **roleDefinitionId**: string (ReadOnly)
* **scope**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## EnableProtectionInputProperties
### Properties
* **activeLocation**: string (ReadOnly)
* **allowedOperations**: string[] (ReadOnly)
* **currentScenario**: CurrentScenarioDetails (ReadOnly)
* **failoverHealth**: string (ReadOnly)
* **failoverHealthErrors**: HealthError[] (ReadOnly)
* **failoverRecoveryPointId**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **lastSuccessfulFailoverTime**: string (ReadOnly)
* **lastSuccessfulTestFailoverTime**: string (ReadOnly)
* **policyFriendlyName**: string (ReadOnly)
* **policyId**: string
* **primaryFabricFriendlyName**: string (ReadOnly)
* **primaryProtectionContainerFriendlyName**: string (ReadOnly)
* **protectableItemId**: string
* **protectedItemType**: string (ReadOnly)
* **protectionState**: string (ReadOnly)
* **protectionStateDescription**: string (ReadOnly)
* **providerSpecificDetails**: EnableProtectionProviderSpecificInput
* **recoveryContainerId**: string (ReadOnly)
* **recoveryFabricFriendlyName**: string (ReadOnly)
* **recoveryFabricId**: string (ReadOnly)
* **recoveryProtectionContainerFriendlyName**: string (ReadOnly)
* **recoveryServicesProviderId**: string (ReadOnly)
* **replicationHealth**: string (ReadOnly)
* **replicationHealthErrors**: HealthError[] (ReadOnly)
* **testFailoverState**: string (ReadOnly)
* **testFailoverStateDescription**: string (ReadOnly)

## CurrentScenarioDetails
### Properties
* **jobId**: string (ReadOnly)
* **scenarioName**: string (ReadOnly)
* **startTime**: string (ReadOnly)

## EnableProtectionProviderSpecificInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **agentVersion**: string (ReadOnly)
* **fabricObjectId**: string
* **instanceType**: 'A2A' (Required)
* **isReplicationAgentUpdateRequired**: bool (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lifecycleId**: string (ReadOnly)
* **managementId**: string (ReadOnly)
* **monitoringJobType**: string (ReadOnly)
* **monitoringPercentageCompletion**: int (ReadOnly)
* **multiVmGroupId**: string (ReadOnly)
* **multiVmGroupName**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **primaryFabricLocation**: string (ReadOnly)
* **protectedDisks**: A2AProtectedDiskDetails[] (ReadOnly)
* **protectedManagedDisks**: A2AProtectedManagedDiskDetails[] (ReadOnly)
* **recoveryAvailabilitySet**: string (ReadOnly)
* **recoveryAvailabilitySetId**: string (WriteOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **recoveryCloudService**: string (ReadOnly)
* **recoveryCloudServiceId**: string (WriteOnly)
* **recoveryContainerId**: string (WriteOnly)
* **recoveryFabricLocation**: string (ReadOnly)
* **recoveryFabricObjectId**: string (ReadOnly)
* **recoveryResourceGroupId**: string (WriteOnly)
* **rpoInSeconds**: int (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly)
* **vmDisks**: A2AVmDiskInputDetails[] (WriteOnly)
* **vmManagedDisks**: A2AVmManagedDiskInputDetails[] (WriteOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)
* **vmSyncedConfigDetails**: AzureToAzureVmSyncedConfigDetails (ReadOnly)

### HyperVReplica2012
#### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplica2012' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### HyperVReplica2012R2
#### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplica2012R2' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### HyperVReplicaAzure
#### Properties
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRDPOnTargetOption**: string
* **encryption**: string (ReadOnly)
* **hvHostVmId**: string (WriteOnly)
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **oSDetails**: OSDetails (ReadOnly)
* **osType**: string (WriteOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetStorageAccountId**: string (WriteOnly)
* **useManagedDisks**: string
* **vhdId**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmName**: string (WriteOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### HyperVReplicaBaseReplicationDetails
#### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplicaBaseReplicationDetails' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMage
#### Properties
* **activeSiteType**: string (ReadOnly)
* **agentDetails**: InMageAgentDetails (ReadOnly)
* **azureStorageAccountId**: string (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **consistencyPoints**: Dictionary<string,DateTime> (ReadOnly)
* **datastoreName**: string (WriteOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskExclusionInput**: InMageDiskExclusionInput (WriteOnly)
* **diskResized**: string (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **infrastructureVmId**: string (ReadOnly)
* **instanceType**: 'InMage' (Required)
* **ipAddress**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lastUpdateReceivedTime**: string (ReadOnly)
* **masterTargetId**: string (Required)
* **multiVmGroupId**: string (Required)
* **multiVmGroupName**: string (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **osDetails**: OSDiskDetails (ReadOnly)
* **osVersion**: string (ReadOnly)
* **processServerId**: string (Required)
* **protectedDisks**: InMageProtectedDiskDetails[] (ReadOnly)
* **protectionStage**: string (ReadOnly)
* **rebootAfterUpdateStatus**: string (ReadOnly)
* **replicaId**: string (ReadOnly)
* **resyncDetails**: InitialReplicationDetails (ReadOnly)
* **retentionDrive**: string (Required, WriteOnly)
* **retentionWindowEnd**: string (ReadOnly)
* **retentionWindowStart**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **runAsAccountId**: string (WriteOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **vmFriendlyName**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMageAzureV2
#### Properties
* **agentVersion**: string (ReadOnly)
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskResized**: string (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRDPOnTargetOption**: string
* **infrastructureVmId**: string (ReadOnly)
* **instanceType**: 'InMageAzureV2' (Required)
* **ipAddress**: string (ReadOnly)
* **isAgentUpdateRequired**: string (ReadOnly)
* **isRebootAfterUpdateRequired**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lastUpdateReceivedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **masterTargetId**: string
* **multiVmGroupId**: string
* **multiVmGroupName**: string
* **multiVmSyncStatus**: string (ReadOnly)
* **osDiskId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **osVersion**: string (ReadOnly)
* **processServerId**: string
* **protectedDisks**: InMageAzureV2ProtectedDiskDetails[] (ReadOnly)
* **protectionStage**: string (ReadOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **replicaId**: string (ReadOnly)
* **resyncProgressPercentage**: int (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **runAsAccountId**: string (WriteOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **storageAccountId**: string (Required, WriteOnly)
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetVmId**: string (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **useManagedDisks**: string
* **validationErrors**: HealthError[] (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **vhdName**: string (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### San
#### Properties
* **instanceType**: 'San' (Required)


## HyperVReplica2012
### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplica2012' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

## InitialReplicationDetails
### Properties
* **initialReplicationProgressPercentage**: string (ReadOnly)
* **initialReplicationType**: string (ReadOnly)

## DiskDetails
### Properties
* **maxSizeMB**: int (ReadOnly)
* **vhdId**: string (ReadOnly)
* **vhdName**: string (ReadOnly)
* **vhdType**: string (ReadOnly)

## HyperVReplica2012R2
### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplica2012R2' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

## HyperVReplicaAzure
### Properties
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRDPOnTargetOption**: string
* **encryption**: string (ReadOnly)
* **hvHostVmId**: string (WriteOnly)
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **oSDetails**: OSDetails (ReadOnly)
* **osType**: string (WriteOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetStorageAccountId**: string (WriteOnly)
* **useManagedDisks**: string
* **vhdId**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmName**: string (WriteOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

## AzureVmDiskDetails
### Properties
* **lunId**: string (ReadOnly)
* **maxSizeMB**: string (ReadOnly)
* **targetDiskLocation**: string (ReadOnly)
* **targetDiskName**: string (ReadOnly)
* **vhdId**: string (ReadOnly)
* **vhdName**: string (ReadOnly)
* **vhdType**: string (ReadOnly)

## OSDetails
### Properties
* **osEdition**: string (ReadOnly)
* **oSMajorVersion**: string (ReadOnly)
* **oSMinorVersion**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **oSVersion**: string (ReadOnly)
* **productType**: string (ReadOnly)

## HyperVReplicaBaseReplicationDetails
### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplicaBaseReplicationDetails' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

## InMage
### Properties
* **activeSiteType**: string (ReadOnly)
* **agentDetails**: InMageAgentDetails (ReadOnly)
* **azureStorageAccountId**: string (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **consistencyPoints**: Dictionary<string,DateTime> (ReadOnly)
* **datastoreName**: string (WriteOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskExclusionInput**: InMageDiskExclusionInput (WriteOnly)
* **diskResized**: string (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **infrastructureVmId**: string (ReadOnly)
* **instanceType**: 'InMage' (Required)
* **ipAddress**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lastUpdateReceivedTime**: string (ReadOnly)
* **masterTargetId**: string (Required)
* **multiVmGroupId**: string (Required)
* **multiVmGroupName**: string (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **osDetails**: OSDiskDetails (ReadOnly)
* **osVersion**: string (ReadOnly)
* **processServerId**: string (Required)
* **protectedDisks**: InMageProtectedDiskDetails[] (ReadOnly)
* **protectionStage**: string (ReadOnly)
* **rebootAfterUpdateStatus**: string (ReadOnly)
* **replicaId**: string (ReadOnly)
* **resyncDetails**: InitialReplicationDetails (ReadOnly)
* **retentionDrive**: string (Required, WriteOnly)
* **retentionWindowEnd**: string (ReadOnly)
* **retentionWindowStart**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **runAsAccountId**: string (WriteOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **vmFriendlyName**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

## InMageAgentDetails
### Properties
* **agentUpdateStatus**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **postUpdateRebootStatus**: string (ReadOnly)

## Dictionary<string,DateTime>
### Additional Properties
* **Additional Properties Type**: string

## InMageDiskExclusionInput
### Properties
* **diskSignatureOptions**: InMageDiskSignatureExclusionOptions[] (WriteOnly)
* **volumeOptions**: InMageVolumeExclusionOptions[] (WriteOnly)

## InMageDiskSignatureExclusionOptions
### Properties
* **diskSignature**: string (WriteOnly)

## InMageVolumeExclusionOptions
### Properties
* **OnlyExcludeIfSingleVolume**: string (WriteOnly)
* **volumeLabel**: string (WriteOnly)

## OSDiskDetails
### Properties
* **osType**: string (ReadOnly)
* **osVhdId**: string (ReadOnly)
* **vhdName**: string (ReadOnly)

## InMageProtectedDiskDetails
### Properties
* **diskCapacityInBytes**: int (ReadOnly)
* **diskId**: string (ReadOnly)
* **diskName**: string (ReadOnly)
* **diskResized**: string (ReadOnly)
* **fileSystemCapacityInBytes**: int (ReadOnly)
* **healthErrorCode**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **protectionStage**: string (ReadOnly)
* **psDataInMB**: int (ReadOnly)
* **resyncDurationInSeconds**: int (ReadOnly)
* **resyncProgressPercentage**: int (ReadOnly)
* **resyncRequired**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **sourceDataInMB**: int (ReadOnly)
* **targetDataInMB**: int (ReadOnly)

## InMageAzureV2
### Properties
* **agentVersion**: string (ReadOnly)
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskResized**: string (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRDPOnTargetOption**: string
* **infrastructureVmId**: string (ReadOnly)
* **instanceType**: 'InMageAzureV2' (Required)
* **ipAddress**: string (ReadOnly)
* **isAgentUpdateRequired**: string (ReadOnly)
* **isRebootAfterUpdateRequired**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lastUpdateReceivedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **masterTargetId**: string
* **multiVmGroupId**: string
* **multiVmGroupName**: string
* **multiVmSyncStatus**: string (ReadOnly)
* **osDiskId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **osVersion**: string (ReadOnly)
* **processServerId**: string
* **protectedDisks**: InMageAzureV2ProtectedDiskDetails[] (ReadOnly)
* **protectionStage**: string (ReadOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **replicaId**: string (ReadOnly)
* **resyncProgressPercentage**: int (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **runAsAccountId**: string (WriteOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **storageAccountId**: string (Required, WriteOnly)
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetVmId**: string (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **useManagedDisks**: string
* **validationErrors**: HealthError[] (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **vhdName**: string (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

## InMageAzureV2ProtectedDiskDetails
### Properties
* **diskCapacityInBytes**: int (ReadOnly)
* **diskId**: string (ReadOnly)
* **diskName**: string (ReadOnly)
* **diskResized**: string (ReadOnly)
* **fileSystemCapacityInBytes**: int (ReadOnly)
* **healthErrorCode**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **protectionStage**: string (ReadOnly)
* **psDataInMegaBytes**: int (ReadOnly)
* **resyncDurationInSeconds**: int (ReadOnly)
* **resyncProgressPercentage**: int (ReadOnly)
* **resyncRequired**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **sourceDataInMegaBytes**: int (ReadOnly)
* **targetDataInMegaBytes**: int (ReadOnly)

## San
### Properties
* **instanceType**: 'San' (Required)

## CreateProtectionContainerMappingInputProperties
### Properties
* **health**: string (ReadOnly)
* **healthErrorDetails**: HealthError[] (ReadOnly)
* **policyFriendlyName**: string (ReadOnly)
* **PolicyId**: string
* **providerSpecificDetails**: ProtectionContainerMappingProviderSpecificDetails (ReadOnly)
* **providerSpecificInput**: ReplicationProviderSpecificContainerMappingInput (WriteOnly)
* **sourceFabricFriendlyName**: string (ReadOnly)
* **sourceProtectionContainerFriendlyName**: string (ReadOnly)
* **state**: string (ReadOnly)
* **targetFabricFriendlyName**: string (ReadOnly)
* **targetProtectionContainerFriendlyName**: string (ReadOnly)
* **targetProtectionContainerId**: string

## ProtectionContainerMappingProviderSpecificDetails
### Properties
* **instanceType**: string (ReadOnly)

## ReplicationProviderSpecificContainerMappingInput
### Properties
* **instanceType**: string (WriteOnly)

## StorageMappingInputProperties
### Properties
* **targetStorageClassificationId**: string

## AddVCenterRequestProperties
### Properties
* **discoveryStatus**: string (ReadOnly)
* **fabricArmResourceName**: string (ReadOnly)
* **friendlyName**: string
* **infrastructureId**: string (ReadOnly)
* **internalId**: string (ReadOnly)
* **ipAddress**: string
* **lastHeartbeat**: string (ReadOnly)
* **port**: string
* **processServerId**: string
* **runAsAccountId**: string

## CreatePolicyInputProperties
### Properties
* **friendlyName**: string (ReadOnly)
* **providerSpecificDetails**: PolicyProviderSpecificDetails (ReadOnly)
* **providerSpecificInput**: PolicyProviderSpecificInput (WriteOnly)

## PolicyProviderSpecificDetails
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **agentVersion**: string (ReadOnly)
* **fabricObjectId**: string
* **instanceType**: 'A2A' (Required)
* **isReplicationAgentUpdateRequired**: bool (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lifecycleId**: string (ReadOnly)
* **managementId**: string (ReadOnly)
* **monitoringJobType**: string (ReadOnly)
* **monitoringPercentageCompletion**: int (ReadOnly)
* **multiVmGroupId**: string (ReadOnly)
* **multiVmGroupName**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **primaryFabricLocation**: string (ReadOnly)
* **protectedDisks**: A2AProtectedDiskDetails[] (ReadOnly)
* **protectedManagedDisks**: A2AProtectedManagedDiskDetails[] (ReadOnly)
* **recoveryAvailabilitySet**: string (ReadOnly)
* **recoveryAvailabilitySetId**: string (WriteOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **recoveryCloudService**: string (ReadOnly)
* **recoveryCloudServiceId**: string (WriteOnly)
* **recoveryContainerId**: string (WriteOnly)
* **recoveryFabricLocation**: string (ReadOnly)
* **recoveryFabricObjectId**: string (ReadOnly)
* **recoveryResourceGroupId**: string (WriteOnly)
* **rpoInSeconds**: int (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly)
* **vmDisks**: A2AVmDiskInputDetails[] (WriteOnly)
* **vmManagedDisks**: A2AVmManagedDiskInputDetails[] (WriteOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)
* **vmSyncedConfigDetails**: AzureToAzureVmSyncedConfigDetails (ReadOnly)

### HyperVReplica2012
#### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplica2012' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### HyperVReplica2012R2
#### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplica2012R2' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### HyperVReplicaAzure
#### Properties
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRDPOnTargetOption**: string
* **encryption**: string (ReadOnly)
* **hvHostVmId**: string (WriteOnly)
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **oSDetails**: OSDetails (ReadOnly)
* **osType**: string (WriteOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetStorageAccountId**: string (WriteOnly)
* **useManagedDisks**: string
* **vhdId**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmName**: string (WriteOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### HyperVReplicaBasePolicyDetails
#### Properties
* **allowedAuthenticationType**: int (ReadOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly)
* **compression**: string (ReadOnly)
* **initialReplicationMethod**: string (ReadOnly)
* **instanceType**: 'HyperVReplicaBasePolicyDetails' (Required)
* **offlineReplicationExportPath**: string (ReadOnly)
* **offlineReplicationImportPath**: string (ReadOnly)
* **onlineReplicationStartTime**: string (ReadOnly)
* **recoveryPoints**: int (ReadOnly)
* **replicaDeletionOption**: string (ReadOnly)
* **replicationPort**: int (ReadOnly)

### InMage
#### Properties
* **activeSiteType**: string (ReadOnly)
* **agentDetails**: InMageAgentDetails (ReadOnly)
* **azureStorageAccountId**: string (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **consistencyPoints**: Dictionary<string,DateTime> (ReadOnly)
* **datastoreName**: string (WriteOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskExclusionInput**: InMageDiskExclusionInput (WriteOnly)
* **diskResized**: string (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **infrastructureVmId**: string (ReadOnly)
* **instanceType**: 'InMage' (Required)
* **ipAddress**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lastUpdateReceivedTime**: string (ReadOnly)
* **masterTargetId**: string (Required)
* **multiVmGroupId**: string (Required)
* **multiVmGroupName**: string (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **osDetails**: OSDiskDetails (ReadOnly)
* **osVersion**: string (ReadOnly)
* **processServerId**: string (Required)
* **protectedDisks**: InMageProtectedDiskDetails[] (ReadOnly)
* **protectionStage**: string (ReadOnly)
* **rebootAfterUpdateStatus**: string (ReadOnly)
* **replicaId**: string (ReadOnly)
* **resyncDetails**: InitialReplicationDetails (ReadOnly)
* **retentionDrive**: string (Required, WriteOnly)
* **retentionWindowEnd**: string (ReadOnly)
* **retentionWindowStart**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **runAsAccountId**: string (WriteOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **vmFriendlyName**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMageAzureV2
#### Properties
* **agentVersion**: string (ReadOnly)
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskResized**: string (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRDPOnTargetOption**: string
* **infrastructureVmId**: string (ReadOnly)
* **instanceType**: 'InMageAzureV2' (Required)
* **ipAddress**: string (ReadOnly)
* **isAgentUpdateRequired**: string (ReadOnly)
* **isRebootAfterUpdateRequired**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lastUpdateReceivedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **masterTargetId**: string
* **multiVmGroupId**: string
* **multiVmGroupName**: string
* **multiVmSyncStatus**: string (ReadOnly)
* **osDiskId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **osVersion**: string (ReadOnly)
* **processServerId**: string
* **protectedDisks**: InMageAzureV2ProtectedDiskDetails[] (ReadOnly)
* **protectionStage**: string (ReadOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **replicaId**: string (ReadOnly)
* **resyncProgressPercentage**: int (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **runAsAccountId**: string (WriteOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **storageAccountId**: string (Required, WriteOnly)
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetVmId**: string (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **useManagedDisks**: string
* **validationErrors**: HealthError[] (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **vhdName**: string (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMageBasePolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'InMageBasePolicyDetails' (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

### RcmAzureMigration
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **crashConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'RcmAzureMigration' (Required)
* **multiVmSyncStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

### VMwareCbt
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly)
* **crashConsistentFrequencyInMinutes**: int (WriteOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **recoveryPointHistory**: int (WriteOnly)


## HyperVReplicaBasePolicyDetails
### Properties
* **allowedAuthenticationType**: int (ReadOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly)
* **compression**: string (ReadOnly)
* **initialReplicationMethod**: string (ReadOnly)
* **instanceType**: 'HyperVReplicaBasePolicyDetails' (Required)
* **offlineReplicationExportPath**: string (ReadOnly)
* **offlineReplicationImportPath**: string (ReadOnly)
* **onlineReplicationStartTime**: string (ReadOnly)
* **recoveryPoints**: int (ReadOnly)
* **replicaDeletionOption**: string (ReadOnly)
* **replicationPort**: int (ReadOnly)

## InMageBasePolicyDetails
### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'InMageBasePolicyDetails' (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

## RcmAzureMigration
### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **crashConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'RcmAzureMigration' (Required)
* **multiVmSyncStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

## VMwareCbt
### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly)
* **crashConsistentFrequencyInMinutes**: int (WriteOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **recoveryPointHistory**: int (WriteOnly)

## PolicyProviderSpecificInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **agentVersion**: string (ReadOnly)
* **fabricObjectId**: string
* **instanceType**: 'A2A' (Required)
* **isReplicationAgentUpdateRequired**: bool (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lifecycleId**: string (ReadOnly)
* **managementId**: string (ReadOnly)
* **monitoringJobType**: string (ReadOnly)
* **monitoringPercentageCompletion**: int (ReadOnly)
* **multiVmGroupId**: string (ReadOnly)
* **multiVmGroupName**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **primaryFabricLocation**: string (ReadOnly)
* **protectedDisks**: A2AProtectedDiskDetails[] (ReadOnly)
* **protectedManagedDisks**: A2AProtectedManagedDiskDetails[] (ReadOnly)
* **recoveryAvailabilitySet**: string (ReadOnly)
* **recoveryAvailabilitySetId**: string (WriteOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **recoveryCloudService**: string (ReadOnly)
* **recoveryCloudServiceId**: string (WriteOnly)
* **recoveryContainerId**: string (WriteOnly)
* **recoveryFabricLocation**: string (ReadOnly)
* **recoveryFabricObjectId**: string (ReadOnly)
* **recoveryResourceGroupId**: string (WriteOnly)
* **rpoInSeconds**: int (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly)
* **vmDisks**: A2AVmDiskInputDetails[] (WriteOnly)
* **vmManagedDisks**: A2AVmManagedDiskInputDetails[] (WriteOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)
* **vmSyncedConfigDetails**: AzureToAzureVmSyncedConfigDetails (ReadOnly)

### HyperVReplica2012
#### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplica2012' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### HyperVReplica2012R2
#### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplica2012R2' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### HyperVReplicaAzure
#### Properties
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRDPOnTargetOption**: string
* **encryption**: string (ReadOnly)
* **hvHostVmId**: string (WriteOnly)
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **oSDetails**: OSDetails (ReadOnly)
* **osType**: string (WriteOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetStorageAccountId**: string (WriteOnly)
* **useManagedDisks**: string
* **vhdId**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmName**: string (WriteOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMage
#### Properties
* **activeSiteType**: string (ReadOnly)
* **agentDetails**: InMageAgentDetails (ReadOnly)
* **azureStorageAccountId**: string (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **consistencyPoints**: Dictionary<string,DateTime> (ReadOnly)
* **datastoreName**: string (WriteOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskExclusionInput**: InMageDiskExclusionInput (WriteOnly)
* **diskResized**: string (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **infrastructureVmId**: string (ReadOnly)
* **instanceType**: 'InMage' (Required)
* **ipAddress**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lastUpdateReceivedTime**: string (ReadOnly)
* **masterTargetId**: string (Required)
* **multiVmGroupId**: string (Required)
* **multiVmGroupName**: string (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **osDetails**: OSDiskDetails (ReadOnly)
* **osVersion**: string (ReadOnly)
* **processServerId**: string (Required)
* **protectedDisks**: InMageProtectedDiskDetails[] (ReadOnly)
* **protectionStage**: string (ReadOnly)
* **rebootAfterUpdateStatus**: string (ReadOnly)
* **replicaId**: string (ReadOnly)
* **resyncDetails**: InitialReplicationDetails (ReadOnly)
* **retentionDrive**: string (Required, WriteOnly)
* **retentionWindowEnd**: string (ReadOnly)
* **retentionWindowStart**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **runAsAccountId**: string (WriteOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **vmFriendlyName**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMageAzureV2
#### Properties
* **agentVersion**: string (ReadOnly)
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskResized**: string (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRDPOnTargetOption**: string
* **infrastructureVmId**: string (ReadOnly)
* **instanceType**: 'InMageAzureV2' (Required)
* **ipAddress**: string (ReadOnly)
* **isAgentUpdateRequired**: string (ReadOnly)
* **isRebootAfterUpdateRequired**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lastUpdateReceivedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **masterTargetId**: string
* **multiVmGroupId**: string
* **multiVmGroupName**: string
* **multiVmSyncStatus**: string (ReadOnly)
* **osDiskId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **osVersion**: string (ReadOnly)
* **processServerId**: string
* **protectedDisks**: InMageAzureV2ProtectedDiskDetails[] (ReadOnly)
* **protectionStage**: string (ReadOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **replicaId**: string (ReadOnly)
* **resyncProgressPercentage**: int (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **runAsAccountId**: string (WriteOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **sourceVmCPUCount**: int (ReadOnly)
* **sourceVmRAMSizeInMB**: int (ReadOnly)
* **storageAccountId**: string (Required, WriteOnly)
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetVmId**: string (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **useManagedDisks**: string
* **validationErrors**: HealthError[] (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **vhdName**: string (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### VMwareCbt
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly)
* **crashConsistentFrequencyInMinutes**: int (WriteOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **recoveryPointHistory**: int (WriteOnly)


## CreateRecoveryPlanInputProperties
### Properties
* **allowedOperations**: string[] (ReadOnly)
* **currentScenario**: CurrentScenarioDetails (ReadOnly)
* **currentScenarioStatus**: string (ReadOnly)
* **currentScenarioStatusDescription**: string (ReadOnly)
* **failoverDeploymentModel**: 'Classic' | 'NotApplicable' | 'ResourceManager'
* **friendlyName**: string (ReadOnly)
* **groups**: RecoveryPlanGroup[] (Required)
* **lastPlannedFailoverTime**: string (ReadOnly)
* **lastTestFailoverTime**: string (ReadOnly)
* **lastUnplannedFailoverTime**: string (ReadOnly)
* **primaryFabricFriendlyName**: string (ReadOnly)
* **primaryFabricId**: string (Required)
* **recoveryFabricFriendlyName**: string (ReadOnly)
* **recoveryFabricId**: string (Required)
* **replicationProviders**: string[] (ReadOnly)

## RecoveryPlanGroup
### Properties
* **endGroupActions**: RecoveryPlanAction[]
* **groupType**: 'Boot' | 'Failover' | 'Shutdown' (Required)
* **replicationProtectedItems**: RecoveryPlanProtectedItem[]
* **startGroupActions**: RecoveryPlanAction[]

## RecoveryPlanAction
### Properties
* **actionName**: string (Required)
* **customDetails**: RecoveryPlanActionDetails (Required)
* **failoverDirections**: 'PrimaryToRecovery' | 'RecoveryToPrimary'[] (Required)
* **failoverTypes**: 'ChangePit' | 'Commit' | 'CompleteMigration' | 'DisableProtection' | 'Failback' | 'FinalizeFailback' | 'PlannedFailover' | 'RepairReplication' | 'ReverseReplicate' | 'SwitchProtection' | 'TestFailover' | 'TestFailoverCleanup' | 'UnplannedFailover'[] (Required)

## RecoveryPlanActionDetails
* **Discriminator**: instanceType
### Base Properties
### AutomationRunbookActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required)
* **instanceType**: 'AutomationRunbookActionDetails' (Required)
* **runbookId**: string
* **timeout**: string

### ManualActionDetails
#### Properties
* **description**: string
* **instanceType**: 'ManualActionDetails' (Required)

### ScriptActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required)
* **instanceType**: 'ScriptActionDetails' (Required)
* **path**: string (Required)
* **timeout**: string


## AutomationRunbookActionDetails
### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required)
* **instanceType**: 'AutomationRunbookActionDetails' (Required)
* **runbookId**: string
* **timeout**: string

## ManualActionDetails
### Properties
* **description**: string
* **instanceType**: 'ManualActionDetails' (Required)

## ScriptActionDetails
### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required)
* **instanceType**: 'ScriptActionDetails' (Required)
* **path**: string (Required)
* **timeout**: string

## RecoveryPlanProtectedItem
### Properties
* **id**: string
* **virtualMachineId**: string

