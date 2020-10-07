# Microsoft.RecoveryServices @ 2018-07-10

## Microsoft.RecoveryServices/vaults/replicationAlertSettings
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigureAlertRequestProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationAlertSettings' (ReadOnly, DeployTimeConstant)

## ConfigureAlertRequestProperties
### Properties
* **customEmailAddresses**: string[]
* **locale**: string
* **sendToOwners**: string

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateNetworkMappingInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings' (ReadOnly, DeployTimeConstant)

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


## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnableMigrationInputProperties (Required)
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems' (ReadOnly, DeployTimeConstant)

## EnableMigrationInputProperties
### Properties
* **allowedOperations**: 'DisableMigration' | 'Migrate' | 'TestMigrate' | 'TestMigrateCleanup'[] (ReadOnly)
* **currentJob**: CurrentJobDetails (ReadOnly)
* **health**: string (ReadOnly)
* **healthErrors**: HealthError[] (ReadOnly)
* **machineName**: string (ReadOnly)
* **migrationState**: 'DisableMigrationFailed' | 'DisableMigrationInProgress' | 'EnableMigrationFailed' | 'EnableMigrationInProgress' | 'InitialSeedingFailed' | 'InitialSeedingInProgress' | 'MigrationFailed' | 'MigrationInProgress' | 'MigrationSucceeded' | 'None' | 'Replicating' (ReadOnly)
* **migrationStateDescription**: string (ReadOnly)
* **policyFriendlyName**: string (ReadOnly)
* **policyId**: string (Required)
* **providerSpecificDetails**: EnableMigrationProviderSpecificInput (Required)
* **recoveryServicesProviderId**: string (ReadOnly)
* **testMigrateState**: 'None' | 'TestMigrationCleanupInProgress' | 'TestMigrationFailed' | 'TestMigrationInProgress' | 'TestMigrationSucceeded' (ReadOnly)
* **testMigrateStateDescription**: string (ReadOnly)

## CurrentJobDetails
### Properties
* **jobId**: string (ReadOnly)
* **jobName**: string (ReadOnly)
* **startTime**: string (ReadOnly)

## HealthError
### Properties
* **creationTimeUtc**: string (ReadOnly)
* **customerResolvability**: 'Allowed' | 'NotAllowed' (ReadOnly)
* **entityId**: string (ReadOnly)
* **errorCategory**: string (ReadOnly)
* **errorCode**: string (ReadOnly)
* **errorId**: string (ReadOnly)
* **errorLevel**: string (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **errorSource**: string (ReadOnly)
* **errorType**: string (ReadOnly)
* **innerHealthErrors**: InnerHealthError[] (ReadOnly)
* **possibleCauses**: string (ReadOnly)
* **recommendedAction**: string (ReadOnly)
* **recoveryProviderErrorMessage**: string (ReadOnly)
* **summaryMessage**: string (ReadOnly)

## InnerHealthError
### Properties
* **creationTimeUtc**: string (ReadOnly)
* **entityId**: string (ReadOnly)
* **errorCategory**: string (ReadOnly)
* **errorCode**: string (ReadOnly)
* **errorLevel**: string (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **errorSource**: string (ReadOnly)
* **errorType**: string (ReadOnly)
* **possibleCauses**: string (ReadOnly)
* **recommendedAction**: string (ReadOnly)
* **recoveryProviderErrorMessage**: string (ReadOnly)
* **summaryMessage**: string (ReadOnly)

## EnableMigrationProviderSpecificInput
* **Discriminator**: instanceType
### Base Properties
### VMwareCbt
#### Properties
* **dataMoverRunAsAccountId**: string (Required)
* **disksToInclude**: VMwareCbtDiskInput[] (Required, WriteOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **lastRecoveryPointReceived**: string (ReadOnly)
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer'
* **migrationRecoveryPointId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **protectedDisks**: VMwareCbtProtectedDiskDetails[] (ReadOnly)
* **snapshotRunAsAccountId**: string (Required)
* **targetAvailabilitySetId**: string
* **targetBootDiagnosticsStorageAccountId**: string
* **targetLocation**: string (ReadOnly)
* **targetNetworkId**: string (Required)
* **targetResourceGroupId**: string (Required)
* **targetSubnetName**: string (WriteOnly)
* **targetVmName**: string
* **targetVmSize**: string
* **vmNics**: VMwareCbtNicDetails[] (ReadOnly)
* **vmwareMachineId**: string (Required)


## VMwareCbt
### Properties
* **dataMoverRunAsAccountId**: string (Required)
* **disksToInclude**: VMwareCbtDiskInput[] (Required, WriteOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **lastRecoveryPointReceived**: string (ReadOnly)
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer'
* **migrationRecoveryPointId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **protectedDisks**: VMwareCbtProtectedDiskDetails[] (ReadOnly)
* **snapshotRunAsAccountId**: string (Required)
* **targetAvailabilitySetId**: string
* **targetBootDiagnosticsStorageAccountId**: string
* **targetLocation**: string (ReadOnly)
* **targetNetworkId**: string (Required)
* **targetResourceGroupId**: string (Required)
* **targetSubnetName**: string (WriteOnly)
* **targetVmName**: string
* **targetVmSize**: string
* **vmNics**: VMwareCbtNicDetails[] (ReadOnly)
* **vmwareMachineId**: string (Required)

## VMwareCbtDiskInput
### Properties
* **diskId**: string (Required, WriteOnly)
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly)
* **isOSDisk**: string (Required, WriteOnly)
* **logStorageAccountId**: string (Required, WriteOnly)
* **logStorageAccountSasSecretName**: string (Required, WriteOnly)

## VMwareCbtProtectedDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly)
* **diskId**: string (ReadOnly)
* **diskName**: string (ReadOnly)
* **diskPath**: string (ReadOnly)
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (ReadOnly)
* **isOSDisk**: string (ReadOnly)
* **logStorageAccountId**: string (ReadOnly)
* **logStorageAccountSasSecretName**: string (ReadOnly)
* **seedManagedDiskId**: string (ReadOnly)
* **targetManagedDiskId**: string (ReadOnly)

## VMwareCbtNicDetails
### Properties
* **isPrimaryNic**: string (ReadOnly)
* **isSelectedForMigration**: string (ReadOnly)
* **nicId**: string (ReadOnly)
* **sourceIPAddress**: string (ReadOnly)
* **sourceIPAddressType**: 'Dynamic' | 'Static' (ReadOnly)
* **sourceNetworkId**: string (ReadOnly)
* **targetIPAddress**: string (ReadOnly)
* **targetIPAddressType**: 'Dynamic' | 'Static' (ReadOnly)
* **targetSubnetName**: string (ReadOnly)

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnableProtectionInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems' (ReadOnly, DeployTimeConstant)

## EnableProtectionInputProperties
### Properties
* **activeLocation**: string (ReadOnly)
* **allowedOperations**: string[] (ReadOnly)
* **currentScenario**: CurrentScenarioDetails (ReadOnly)
* **failoverHealth**: string (ReadOnly)
* **failoverRecoveryPointId**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **healthErrors**: HealthError[] (ReadOnly)
* **lastSuccessfulFailoverTime**: string (ReadOnly)
* **lastSuccessfulTestFailoverTime**: string (ReadOnly)
* **policyFriendlyName**: string (ReadOnly)
* **policyId**: string
* **primaryFabricFriendlyName**: string (ReadOnly)
* **primaryFabricProvider**: string (ReadOnly)
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
* **instanceType**: 'A2A' (Required)

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
* **azureVmDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRdpOnTargetOption**: string
* **encryption**: string (ReadOnly)
* **hvHostVmId**: string (WriteOnly)
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **oSDetails**: OSDetails (ReadOnly)
* **osType**: string (WriteOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **recoveryAzureVmName**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **selectedSourceNicId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **targetAvailabilityZone**: string
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetProximityPlacementGroupId**: string
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
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **vmFriendlyName**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMageAzureV2
#### Properties
* **agentExpiryDate**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskEncryptionSetId**: string (WriteOnly)
* **diskResized**: string (ReadOnly)
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly)
* **disksToInclude**: InMageAzureV2DiskInputDetails[] (WriteOnly)
* **enableRdpOnTargetOption**: string
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
* **processServerName**: string (ReadOnly)
* **protectedDisks**: InMageAzureV2ProtectedDiskDetails[] (ReadOnly)
* **protectedManagedDisks**: InMageAzureV2ManagedDiskDetails[] (ReadOnly)
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
* **selectedSourceNicId**: string (ReadOnly)
* **selectedTfoAzureNetworkId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **storageAccountId**: string (WriteOnly)
* **targetAvailabilityZone**: string
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetProximityPlacementGroupId**: string
* **targetVmId**: string (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **useManagedDisks**: string (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **vhdName**: string (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMageRcm
#### Properties
* **agentDetails**: AgentDetails[] (ReadOnly)
* **authCertificate**: string (WriteOnly)
* **controlPlaneUri**: string (ReadOnly)
* **dataPlaneUri**: string (ReadOnly)
* **dras**: DraDetails[] (ReadOnly)
* **instanceType**: 'InMageRcm' (Required)
* **physicalSiteId**: string
* **processServers**: ProcessServerDetails[] (ReadOnly)
* **pushInstallers**: PushInstallerDetails[] (ReadOnly)
* **rcmProxies**: RcmProxyDetails[] (ReadOnly)
* **replicationAgents**: ReplicationAgentDetails[] (ReadOnly)
* **reprotectAgents**: ReprotectAgentDetails[] (ReadOnly)
* **serviceContainerId**: string (ReadOnly)
* **serviceEndpoint**: string (ReadOnly)
* **serviceResourceId**: string (ReadOnly)
* **sourceAgentIdentity**: IdentityProviderInput (WriteOnly)
* **vmwareSiteId**: string

### San
#### Properties
* **instanceType**: 'San' (Required)


## A2A
### Properties
* **instanceType**: 'A2A' (Required)

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

## VMNicDetails
### Properties
* **enableAcceleratedNetworkingOnRecovery**: bool (ReadOnly)
* **enableAcceleratedNetworkingOnTfo**: bool (ReadOnly)
* **ipAddressType**: string (ReadOnly)
* **nicId**: string (ReadOnly)
* **primaryNicStaticIPAddress**: string (ReadOnly)
* **recoveryLBBackendAddressPoolIds**: string[] (ReadOnly)
* **recoveryNetworkSecurityGroupId**: string (ReadOnly)
* **recoveryNicIpAddressType**: string (ReadOnly)
* **recoveryNicName**: string (ReadOnly)
* **recoveryNicResourceGroupName**: string (ReadOnly)
* **recoveryPublicIpAddressId**: string (ReadOnly)
* **recoveryVMNetworkId**: string (ReadOnly)
* **recoveryVMSubnetName**: string (ReadOnly)
* **replicaNicId**: string (ReadOnly)
* **replicaNicStaticIPAddress**: string (ReadOnly)
* **reuseExistingNic**: bool (ReadOnly)
* **selectionType**: string (ReadOnly)
* **sourceNicArmId**: string (ReadOnly)
* **tfoIPConfigs**: IPConfig[] (ReadOnly)
* **tfoNetworkSecurityGroupId**: string (ReadOnly)
* **tfoRecoveryNicName**: string (ReadOnly)
* **tfoRecoveryNicResourceGroupName**: string (ReadOnly)
* **tfoReuseExistingNic**: bool (ReadOnly)
* **tfoVMNetworkId**: string (ReadOnly)
* **tfoVMSubnetName**: string (ReadOnly)
* **vMNetworkName**: string (ReadOnly)
* **vMSubnetName**: string (ReadOnly)

## IPConfig
### Properties
* **lBBackendAddressPoolIds**: string[] (ReadOnly)
* **publicIpAddressId**: string (ReadOnly)
* **staticIPAddress**: string (ReadOnly)

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
* **azureVmDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRdpOnTargetOption**: string
* **encryption**: string (ReadOnly)
* **hvHostVmId**: string (WriteOnly)
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **oSDetails**: OSDetails (ReadOnly)
* **osType**: string (WriteOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **recoveryAzureVmName**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **selectedSourceNicId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **targetAvailabilityZone**: string
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetProximityPlacementGroupId**: string
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
* **diskEncryptionSetId**: string (ReadOnly)
* **diskId**: string (ReadOnly)
* **lunId**: string (ReadOnly)
* **maxSizeMB**: string (ReadOnly)
* **targetDiskLocation**: string (ReadOnly)
* **targetDiskName**: string (ReadOnly)
* **vhdId**: string (ReadOnly)
* **vhdName**: string (ReadOnly)
* **vhdType**: string (ReadOnly)

## OSDetails
### Properties
* **oSMajorVersion**: string (ReadOnly)
* **oSMinorVersion**: string (ReadOnly)
* **oSVersion**: string (ReadOnly)
* **osEdition**: string (ReadOnly)
* **osType**: string (ReadOnly)
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
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **vmFriendlyName**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

## InMageAgentDetails
### Properties
* **agentExpiryDate**: string (ReadOnly)
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
* **onlyExcludeIfSingleVolume**: string (WriteOnly)
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
* **agentExpiryDate**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskEncryptionSetId**: string (WriteOnly)
* **diskResized**: string (ReadOnly)
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly)
* **disksToInclude**: InMageAzureV2DiskInputDetails[] (WriteOnly)
* **enableRdpOnTargetOption**: string
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
* **processServerName**: string (ReadOnly)
* **protectedDisks**: InMageAzureV2ProtectedDiskDetails[] (ReadOnly)
* **protectedManagedDisks**: InMageAzureV2ManagedDiskDetails[] (ReadOnly)
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
* **selectedSourceNicId**: string (ReadOnly)
* **selectedTfoAzureNetworkId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **storageAccountId**: string (WriteOnly)
* **targetAvailabilityZone**: string
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetProximityPlacementGroupId**: string
* **targetVmId**: string (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **useManagedDisks**: string (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **vhdName**: string (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

## InMageAzureV2DiskInputDetails
### Properties
* **diskEncryptionSetId**: string (WriteOnly)
* **diskId**: string (WriteOnly)
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly)
* **logStorageAccountId**: string (WriteOnly)

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

## InMageAzureV2ManagedDiskDetails
### Properties
* **diskId**: string (ReadOnly)
* **replicaDiskType**: string (ReadOnly)
* **seedManagedDiskId**: string (ReadOnly)

## InMageRcm
### Properties
* **agentDetails**: AgentDetails[] (ReadOnly)
* **authCertificate**: string (WriteOnly)
* **controlPlaneUri**: string (ReadOnly)
* **dataPlaneUri**: string (ReadOnly)
* **dras**: DraDetails[] (ReadOnly)
* **instanceType**: 'InMageRcm' (Required)
* **physicalSiteId**: string
* **processServers**: ProcessServerDetails[] (ReadOnly)
* **pushInstallers**: PushInstallerDetails[] (ReadOnly)
* **rcmProxies**: RcmProxyDetails[] (ReadOnly)
* **replicationAgents**: ReplicationAgentDetails[] (ReadOnly)
* **reprotectAgents**: ReprotectAgentDetails[] (ReadOnly)
* **serviceContainerId**: string (ReadOnly)
* **serviceEndpoint**: string (ReadOnly)
* **serviceResourceId**: string (ReadOnly)
* **sourceAgentIdentity**: IdentityProviderInput (WriteOnly)
* **vmwareSiteId**: string

## AgentDetails
### Properties
* **agentId**: string (ReadOnly)
* **biosId**: string (ReadOnly)
* **disks**: AgentDiskDetails[] (ReadOnly)
* **fqdn**: string (ReadOnly)
* **machineId**: string (ReadOnly)

## AgentDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly)
* **diskId**: string (ReadOnly)
* **diskName**: string (ReadOnly)
* **isOSDisk**: string (ReadOnly)
* **lunId**: int (ReadOnly)

## DraDetails
### Properties
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly)
* **healthErrors**: HealthError[] (ReadOnly)
* **id**: string (ReadOnly)
* **lastHeartbeatUtc**: string (ReadOnly)
* **name**: string (ReadOnly)
* **version**: string (ReadOnly)

## ProcessServerDetails
### Properties
* **availableMemoryInBytes**: int (ReadOnly)
* **availableSpaceInBytes**: int (ReadOnly)
* **freeSpacePercentage**: int (ReadOnly)
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly)
* **healthErrors**: HealthError[] (ReadOnly)
* **historicHealth**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly)
* **id**: string (ReadOnly)
* **lastHeartbeatUtc**: string (ReadOnly)
* **memoryUsagePercentage**: int (ReadOnly)
* **name**: string (ReadOnly)
* **processorUsagePercentage**: int (ReadOnly)
* **throughputInBytes**: int (ReadOnly)
* **throughputUploadPendingDataInBytes**: int (ReadOnly)
* **totalMemoryInBytes**: int (ReadOnly)
* **totalSpaceInBytes**: int (ReadOnly)
* **usedMemoryInBytes**: int (ReadOnly)
* **usedSpaceInBytes**: int (ReadOnly)
* **version**: string (ReadOnly)

## PushInstallerDetails
### Properties
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly)
* **healthErrors**: HealthError[] (ReadOnly)
* **id**: string (ReadOnly)
* **lastHeartbeatUtc**: string (ReadOnly)
* **name**: string (ReadOnly)
* **version**: string (ReadOnly)

## RcmProxyDetails
### Properties
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly)
* **healthErrors**: HealthError[] (ReadOnly)
* **id**: string (ReadOnly)
* **lastHeartbeatUtc**: string (ReadOnly)
* **name**: string (ReadOnly)
* **version**: string (ReadOnly)

## ReplicationAgentDetails
### Properties
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly)
* **healthErrors**: HealthError[] (ReadOnly)
* **id**: string (ReadOnly)
* **lastHeartbeatUtc**: string (ReadOnly)
* **name**: string (ReadOnly)
* **version**: string (ReadOnly)

## ReprotectAgentDetails
### Properties
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly)
* **healthErrors**: HealthError[] (ReadOnly)
* **id**: string (ReadOnly)
* **lastHeartbeatUtc**: string (ReadOnly)
* **name**: string (ReadOnly)
* **version**: string (ReadOnly)

## IdentityProviderInput
### Properties
* **aadAuthority**: string (Required, WriteOnly)
* **applicationId**: string (Required, WriteOnly)
* **audience**: string (Required, WriteOnly)
* **objectId**: string (Required, WriteOnly)
* **tenantId**: string (Required, WriteOnly)

## San
### Properties
* **instanceType**: 'San' (Required)

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateProtectionContainerMappingInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings' (ReadOnly, DeployTimeConstant)

## CreateProtectionContainerMappingInputProperties
### Properties
* **health**: string (ReadOnly)
* **healthErrorDetails**: HealthError[] (ReadOnly)
* **policyFriendlyName**: string (ReadOnly)
* **policyId**: string
* **providerSpecificDetails**: ProtectionContainerMappingProviderSpecificDetails (ReadOnly)
* **providerSpecificInput**: ReplicationProviderSpecificContainerMappingInput (WriteOnly)
* **sourceFabricFriendlyName**: string (ReadOnly)
* **sourceProtectionContainerFriendlyName**: string (ReadOnly)
* **state**: string (ReadOnly)
* **targetFabricFriendlyName**: string (ReadOnly)
* **targetProtectionContainerFriendlyName**: string (ReadOnly)
* **targetProtectionContainerId**: string

## ProtectionContainerMappingProviderSpecificDetails
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required)

### VMwareCbt
#### Properties
* **dataMoverRunAsAccountId**: string (Required)
* **disksToInclude**: VMwareCbtDiskInput[] (Required, WriteOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **lastRecoveryPointReceived**: string (ReadOnly)
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer'
* **migrationRecoveryPointId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **protectedDisks**: VMwareCbtProtectedDiskDetails[] (ReadOnly)
* **snapshotRunAsAccountId**: string (Required)
* **targetAvailabilitySetId**: string
* **targetBootDiagnosticsStorageAccountId**: string
* **targetLocation**: string (ReadOnly)
* **targetNetworkId**: string (Required)
* **targetResourceGroupId**: string (Required)
* **targetSubnetName**: string (WriteOnly)
* **targetVmName**: string
* **targetVmSize**: string
* **vmNics**: VMwareCbtNicDetails[] (ReadOnly)
* **vmwareMachineId**: string (Required)


## ReplicationProviderSpecificContainerMappingInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required)

### VMwareCbt
#### Properties
* **dataMoverRunAsAccountId**: string (Required)
* **disksToInclude**: VMwareCbtDiskInput[] (Required, WriteOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **lastRecoveryPointReceived**: string (ReadOnly)
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer'
* **migrationRecoveryPointId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **protectedDisks**: VMwareCbtProtectedDiskDetails[] (ReadOnly)
* **snapshotRunAsAccountId**: string (Required)
* **targetAvailabilitySetId**: string
* **targetBootDiagnosticsStorageAccountId**: string
* **targetLocation**: string (ReadOnly)
* **targetNetworkId**: string (Required)
* **targetResourceGroupId**: string (Required)
* **targetSubnetName**: string (WriteOnly)
* **targetVmName**: string
* **targetVmSize**: string
* **vmNics**: VMwareCbtNicDetails[] (ReadOnly)
* **vmwareMachineId**: string (Required)


## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateProtectionContainerInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers' (ReadOnly, DeployTimeConstant)

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
### 6c7da455-506f-43ff-a16a-8eb101aebb70
#### Properties
* **instanceType**: '6c7da455-506f-43ff-a16a-8eb101aebb70' (Required)

### A2A
#### Properties
* **instanceType**: 'A2A' (Required)


## 6c7da455-506f-43ff-a16a-8eb101aebb70
### Properties
* **instanceType**: '6c7da455-506f-43ff-a16a-8eb101aebb70' (Required)

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddRecoveryServicesProviderInputProperties (Required)
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders' (ReadOnly, DeployTimeConstant)

## AddRecoveryServicesProviderInputProperties
### Properties
* **allowedScenarios**: string[] (ReadOnly)
* **authenticationIdentityDetails**: IdentityProviderDetails (ReadOnly)
* **authenticationIdentityInput**: IdentityProviderInput (Required, WriteOnly)
* **connectionStatus**: string (ReadOnly)
* **dataPlaneAuthenticationIdentityInput**: IdentityProviderInput (WriteOnly)
* **draIdentifier**: string (ReadOnly)
* **fabricFriendlyName**: string (ReadOnly)
* **fabricType**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **healthErrorDetails**: HealthError[] (ReadOnly)
* **lastHeartBeat**: string (ReadOnly)
* **machineId**: string (WriteOnly)
* **machineName**: string (Required, WriteOnly)
* **protectedItemCount**: int (ReadOnly)
* **providerVersion**: string (ReadOnly)
* **providerVersionDetails**: VersionDetails (ReadOnly)
* **providerVersionExpiryDate**: string (ReadOnly)
* **providerVersionState**: string (ReadOnly)
* **resourceAccessIdentityDetails**: IdentityProviderDetails (ReadOnly)
* **resourceAccessIdentityInput**: IdentityProviderInput (Required, WriteOnly)
* **serverVersion**: string (ReadOnly)

## IdentityProviderDetails
### Properties
* **aadAuthority**: string (ReadOnly)
* **applicationId**: string (ReadOnly)
* **audience**: string (ReadOnly)
* **objectId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## VersionDetails
### Properties
* **expiryDate**: string (ReadOnly)
* **status**: 'Deprecated' | 'NotSupported' | 'SecurityUpdateRequired' | 'Supported' | 'UpdateRequired' (ReadOnly)
* **version**: string (ReadOnly)

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageMappingInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings' (ReadOnly, DeployTimeConstant)

## StorageMappingInputProperties
### Properties
* **targetStorageClassificationId**: string

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddVCenterRequestProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters' (ReadOnly, DeployTimeConstant)

## AddVCenterRequestProperties
### Properties
* **discoveryStatus**: string (ReadOnly)
* **fabricArmResourceName**: string (ReadOnly)
* **friendlyName**: string
* **healthErrors**: HealthError[] (ReadOnly)
* **infrastructureId**: string (ReadOnly)
* **internalId**: string (ReadOnly)
* **ipAddress**: string
* **lastHeartbeat**: string (ReadOnly)
* **port**: string
* **processServerId**: string
* **runAsAccountId**: string

## Microsoft.RecoveryServices/vaults/replicationFabrics
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FabricCreationInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics' (ReadOnly, DeployTimeConstant)

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

### InMageRcm
#### Properties
* **agentDetails**: AgentDetails[] (ReadOnly)
* **authCertificate**: string (WriteOnly)
* **controlPlaneUri**: string (ReadOnly)
* **dataPlaneUri**: string (ReadOnly)
* **dras**: DraDetails[] (ReadOnly)
* **instanceType**: 'InMageRcm' (Required)
* **physicalSiteId**: string
* **processServers**: ProcessServerDetails[] (ReadOnly)
* **pushInstallers**: PushInstallerDetails[] (ReadOnly)
* **rcmProxies**: RcmProxyDetails[] (ReadOnly)
* **replicationAgents**: ReplicationAgentDetails[] (ReadOnly)
* **reprotectAgents**: ReprotectAgentDetails[] (ReadOnly)
* **serviceContainerId**: string (ReadOnly)
* **serviceEndpoint**: string (ReadOnly)
* **serviceResourceId**: string (ReadOnly)
* **sourceAgentIdentity**: IdentityProviderInput (WriteOnly)
* **vmwareSiteId**: string

### VMM
#### Properties
* **instanceType**: 'VMM' (Required)

### VMware
#### Properties
* **agentCount**: string (ReadOnly)
* **agentExpiryDate**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **agentVersionDetails**: VersionDetails (ReadOnly)
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
* **migrationSolutionId**: string (Required)
* **serviceEndpoint**: string (ReadOnly)
* **serviceResourceId**: string (ReadOnly)
* **vmwareSiteId**: string (Required)


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
* **agentExpiryDate**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **agentVersionDetails**: VersionDetails (ReadOnly)
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
* **agentExpiryDate**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **agentVersionDetails**: VersionDetails (ReadOnly)
* **dataStores**: DataStore[] (ReadOnly)
* **diskCount**: int (ReadOnly)
* **healthErrors**: HealthError[] (ReadOnly)
* **id**: string (ReadOnly)
* **ipAddress**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **marsAgentExpiryDate**: string (ReadOnly)
* **marsAgentVersion**: string (ReadOnly)
* **marsAgentVersionDetails**: VersionDetails (ReadOnly)
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

## ProcessServer
### Properties
* **agentExpiryDate**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **agentVersionDetails**: VersionDetails (ReadOnly)
* **availableMemoryInBytes**: int (ReadOnly)
* **availableSpaceInBytes**: int (ReadOnly)
* **cpuLoad**: string (ReadOnly)
* **cpuLoadStatus**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly)
* **healthErrors**: HealthError[] (ReadOnly)
* **hostId**: string (ReadOnly)
* **id**: string (ReadOnly)
* **ipAddress**: string (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **machineCount**: string (ReadOnly)
* **marsCommunicationStatus**: string (ReadOnly)
* **marsRegistrationStatus**: string (ReadOnly)
* **memoryUsageStatus**: string (ReadOnly)
* **mobilityServiceUpdates**: MobilityServiceUpdate[] (ReadOnly)
* **osType**: string (ReadOnly)
* **osVersion**: string (ReadOnly)
* **psServiceStatus**: string (ReadOnly)
* **psStatsRefreshTime**: string (ReadOnly)
* **replicationPairCount**: string (ReadOnly)
* **spaceUsageStatus**: string (ReadOnly)
* **sslCertExpiryDate**: string (ReadOnly)
* **sslCertExpiryRemainingDays**: int (ReadOnly)
* **systemLoad**: string (ReadOnly)
* **systemLoadStatus**: string (ReadOnly)
* **throughputInBytes**: int (ReadOnly)
* **throughputInMBps**: int (ReadOnly)
* **throughputStatus**: string (ReadOnly)
* **throughputUploadPendingDataInBytes**: int (ReadOnly)
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
* **migrationSolutionId**: string (Required)
* **serviceEndpoint**: string (ReadOnly)
* **serviceResourceId**: string (ReadOnly)
* **vmwareSiteId**: string (Required)

## EncryptionDetails
### Properties
* **kekCertExpiryDate**: string (ReadOnly)
* **kekCertThumbprint**: string (ReadOnly)
* **kekState**: string (ReadOnly)

## Microsoft.RecoveryServices/vaults/replicationPolicies
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreatePolicyInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationPolicies' (ReadOnly, DeployTimeConstant)

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
* **instanceType**: 'A2A' (Required)

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
* **azureVmDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRdpOnTargetOption**: string
* **encryption**: string (ReadOnly)
* **hvHostVmId**: string (WriteOnly)
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **oSDetails**: OSDetails (ReadOnly)
* **osType**: string (WriteOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **recoveryAzureVmName**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **selectedSourceNicId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **targetAvailabilityZone**: string
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetProximityPlacementGroupId**: string
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
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **vmFriendlyName**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMageAzureV2
#### Properties
* **agentExpiryDate**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskEncryptionSetId**: string (WriteOnly)
* **diskResized**: string (ReadOnly)
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly)
* **disksToInclude**: InMageAzureV2DiskInputDetails[] (WriteOnly)
* **enableRdpOnTargetOption**: string
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
* **processServerName**: string (ReadOnly)
* **protectedDisks**: InMageAzureV2ProtectedDiskDetails[] (ReadOnly)
* **protectedManagedDisks**: InMageAzureV2ManagedDiskDetails[] (ReadOnly)
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
* **selectedSourceNicId**: string (ReadOnly)
* **selectedTfoAzureNetworkId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **storageAccountId**: string (WriteOnly)
* **targetAvailabilityZone**: string
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetProximityPlacementGroupId**: string
* **targetVmId**: string (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **useManagedDisks**: string (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
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

### InMageRcm
#### Properties
* **agentDetails**: AgentDetails[] (ReadOnly)
* **authCertificate**: string (WriteOnly)
* **controlPlaneUri**: string (ReadOnly)
* **dataPlaneUri**: string (ReadOnly)
* **dras**: DraDetails[] (ReadOnly)
* **instanceType**: 'InMageRcm' (Required)
* **physicalSiteId**: string
* **processServers**: ProcessServerDetails[] (ReadOnly)
* **pushInstallers**: PushInstallerDetails[] (ReadOnly)
* **rcmProxies**: RcmProxyDetails[] (ReadOnly)
* **replicationAgents**: ReplicationAgentDetails[] (ReadOnly)
* **reprotectAgents**: ReprotectAgentDetails[] (ReadOnly)
* **serviceContainerId**: string (ReadOnly)
* **serviceEndpoint**: string (ReadOnly)
* **serviceResourceId**: string (ReadOnly)
* **sourceAgentIdentity**: IdentityProviderInput (WriteOnly)
* **vmwareSiteId**: string

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
* **dataMoverRunAsAccountId**: string (Required)
* **disksToInclude**: VMwareCbtDiskInput[] (Required, WriteOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **lastRecoveryPointReceived**: string (ReadOnly)
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer'
* **migrationRecoveryPointId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **protectedDisks**: VMwareCbtProtectedDiskDetails[] (ReadOnly)
* **snapshotRunAsAccountId**: string (Required)
* **targetAvailabilitySetId**: string
* **targetBootDiagnosticsStorageAccountId**: string
* **targetLocation**: string (ReadOnly)
* **targetNetworkId**: string (Required)
* **targetResourceGroupId**: string (Required)
* **targetSubnetName**: string (WriteOnly)
* **targetVmName**: string
* **targetVmSize**: string
* **vmNics**: VMwareCbtNicDetails[] (ReadOnly)
* **vmwareMachineId**: string (Required)


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

## PolicyProviderSpecificInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required)

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
* **azureVmDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
* **enableRdpOnTargetOption**: string
* **encryption**: string (ReadOnly)
* **hvHostVmId**: string (WriteOnly)
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **licenseType**: string (ReadOnly)
* **logStorageAccountId**: string (WriteOnly)
* **oSDetails**: OSDetails (ReadOnly)
* **osType**: string (WriteOnly)
* **recoveryAvailabilitySetId**: string (ReadOnly)
* **recoveryAzureLogStorageAccountId**: string (ReadOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureStorageAccount**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **recoveryAzureVmName**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **selectedSourceNicId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **targetAvailabilityZone**: string
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetProximityPlacementGroupId**: string
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
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **vmFriendlyName**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMageAzureV2
#### Properties
* **agentExpiryDate**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskEncryptionSetId**: string (WriteOnly)
* **diskResized**: string (ReadOnly)
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly)
* **disksToInclude**: InMageAzureV2DiskInputDetails[] (WriteOnly)
* **enableRdpOnTargetOption**: string
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
* **processServerName**: string (ReadOnly)
* **protectedDisks**: InMageAzureV2ProtectedDiskDetails[] (ReadOnly)
* **protectedManagedDisks**: InMageAzureV2ManagedDiskDetails[] (ReadOnly)
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
* **selectedSourceNicId**: string (ReadOnly)
* **selectedTfoAzureNetworkId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
* **storageAccountId**: string (WriteOnly)
* **targetAvailabilityZone**: string
* **targetAzureNetworkId**: string (WriteOnly)
* **targetAzureSubnetId**: string (WriteOnly)
* **targetAzureV1ResourceGroupId**: string (WriteOnly)
* **targetAzureV2ResourceGroupId**: string (WriteOnly)
* **targetAzureVmName**: string (WriteOnly)
* **targetProximityPlacementGroupId**: string
* **targetVmId**: string (ReadOnly)
* **uncompressedDataRateInMB**: int (ReadOnly)
* **useManagedDisks**: string (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **validationErrors**: HealthError[] (ReadOnly)
* **vhdName**: string (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMageRcm
#### Properties
* **agentDetails**: AgentDetails[] (ReadOnly)
* **authCertificate**: string (WriteOnly)
* **controlPlaneUri**: string (ReadOnly)
* **dataPlaneUri**: string (ReadOnly)
* **dras**: DraDetails[] (ReadOnly)
* **instanceType**: 'InMageRcm' (Required)
* **physicalSiteId**: string
* **processServers**: ProcessServerDetails[] (ReadOnly)
* **pushInstallers**: PushInstallerDetails[] (ReadOnly)
* **rcmProxies**: RcmProxyDetails[] (ReadOnly)
* **replicationAgents**: ReplicationAgentDetails[] (ReadOnly)
* **reprotectAgents**: ReprotectAgentDetails[] (ReadOnly)
* **serviceContainerId**: string (ReadOnly)
* **serviceEndpoint**: string (ReadOnly)
* **serviceResourceId**: string (ReadOnly)
* **sourceAgentIdentity**: IdentityProviderInput (WriteOnly)
* **vmwareSiteId**: string

### VMwareCbt
#### Properties
* **dataMoverRunAsAccountId**: string (Required)
* **disksToInclude**: VMwareCbtDiskInput[] (Required, WriteOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **lastRecoveryPointReceived**: string (ReadOnly)
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer'
* **migrationRecoveryPointId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **protectedDisks**: VMwareCbtProtectedDiskDetails[] (ReadOnly)
* **snapshotRunAsAccountId**: string (Required)
* **targetAvailabilitySetId**: string
* **targetBootDiagnosticsStorageAccountId**: string
* **targetLocation**: string (ReadOnly)
* **targetNetworkId**: string (Required)
* **targetResourceGroupId**: string (Required)
* **targetSubnetName**: string (WriteOnly)
* **targetVmName**: string
* **targetVmSize**: string
* **vmNics**: VMwareCbtNicDetails[] (ReadOnly)
* **vmwareMachineId**: string (Required)


## Microsoft.RecoveryServices/vaults/replicationRecoveryPlans
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateRecoveryPlanInputProperties (Required)
* **type**: 'Microsoft.RecoveryServices/vaults/replicationRecoveryPlans' (ReadOnly, DeployTimeConstant)

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
* **providerSpecificDetails**: RecoveryPlanProviderSpecificDetails[] (ReadOnly)
* **providerSpecificInput**: RecoveryPlanProviderSpecificInput[] (WriteOnly)
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

## RecoveryPlanProviderSpecificDetails
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required)


## RecoveryPlanProviderSpecificInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required)


## Microsoft.RecoveryServices/vaults/replicationVaultSettings
### Properties
* **apiVersion**: '2018-07-10' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VaultSettingCreationInputProperties (Required)
* **type**: 'Microsoft.RecoveryServices/vaults/replicationVaultSettings' (ReadOnly, DeployTimeConstant)

## VaultSettingCreationInputProperties
### Properties
* **migrationSolutionId**: string (Required)

