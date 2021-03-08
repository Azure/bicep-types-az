# Microsoft.RecoveryServices @ 2018-01-10

## Resource Microsoft.RecoveryServices/vaults/replicationAlertSettings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigureAlertRequestProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationAlertSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FabricCreationInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateNetworkMappingInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateProtectionContainerInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnableMigrationInputProperties (Required)
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnableProtectionInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateProtectionContainerMappingInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddRecoveryServicesProviderInputProperties (Required)
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageMappingInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddVCenterRequestProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationPolicies@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreatePolicyInputProperties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant)
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
### AzureFabricCreationInput
#### Properties
* **containerIds**: string[] (ReadOnly)
* **instanceType**: 'Azure' (Required)
* **location**: string

### HyperVSiteDetails
#### Properties
* **instanceType**: 'HyperVSite' (Required)

### VmmDetails
#### Properties
* **instanceType**: 'VMM' (Required)

### VMwareDetails
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

### VMwareV2FabricCreationInput
#### Properties
* **instanceType**: 'VMwareV2' (Required)
* **migrationSolutionId**: string (Required)
* **physicalSiteId**: string
* **serviceEndpoint**: string (ReadOnly)
* **serviceResourceId**: string (ReadOnly)
* **vmwareSiteId**: string


## AzureFabricCreationInput
### Properties
* **containerIds**: string[] (ReadOnly)
* **instanceType**: 'Azure' (Required)
* **location**: string

## HyperVSiteDetails
### Properties
* **instanceType**: 'HyperVSite' (Required)

## VmmDetails
### Properties
* **instanceType**: 'VMM' (Required)

## VMwareDetails
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

## VersionDetails
### Properties
* **expiryDate**: string (ReadOnly)
* **status**: 'Deprecated' | 'NotSupported' | 'SecurityUpdateRequired' | 'Supported' | 'UpdateRequired' (ReadOnly)
* **version**: string (ReadOnly)

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

## HealthError
### Properties
* **creationTimeUtc**: string (ReadOnly)
* **entityId**: string (ReadOnly)
* **errorCategory**: string (ReadOnly)
* **errorCode**: string (ReadOnly)
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
* **healthErrors**: HealthError[] (ReadOnly)
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

## VMwareV2FabricCreationInput
### Properties
* **instanceType**: 'VMwareV2' (Required)
* **migrationSolutionId**: string (Required)
* **physicalSiteId**: string
* **serviceEndpoint**: string (ReadOnly)
* **serviceResourceId**: string (ReadOnly)
* **vmwareSiteId**: string

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
### AzureToAzureCreateNetworkMappingInput
#### Properties
* **instanceType**: 'AzureToAzure' (Required)
* **primaryNetworkId**: string (WriteOnly)

### VmmToAzureCreateNetworkMappingInput
#### Properties
* **instanceType**: 'VmmToAzure' (Required)

### VmmToVmmCreateNetworkMappingInput
#### Properties
* **instanceType**: 'VmmToVmm' (Required)


## AzureToAzureCreateNetworkMappingInput
### Properties
* **instanceType**: 'AzureToAzure' (Required)
* **primaryNetworkId**: string (WriteOnly)

## VmmToAzureCreateNetworkMappingInput
### Properties
* **instanceType**: 'VmmToAzure' (Required)

## VmmToVmmCreateNetworkMappingInput
### Properties
* **instanceType**: 'VmmToVmm' (Required)

## NetworkMappingFabricSpecificSettings
* **Discriminator**: instanceType

### Base Properties
### AzureToAzureNetworkMappingSettings
#### Properties
* **instanceType**: 'AzureToAzure' (Required)
* **primaryFabricLocation**: string (ReadOnly)
* **recoveryFabricLocation**: string (ReadOnly)

### VmmToAzureNetworkMappingSettings
#### Properties
* **instanceType**: 'VmmToAzure' (Required)

### VmmToVmmNetworkMappingSettings
#### Properties
* **instanceType**: 'VmmToVmm' (Required)


## AzureToAzureNetworkMappingSettings
### Properties
* **instanceType**: 'AzureToAzure' (Required)
* **primaryFabricLocation**: string (ReadOnly)
* **recoveryFabricLocation**: string (ReadOnly)

## VmmToAzureNetworkMappingSettings
### Properties
* **instanceType**: 'VmmToAzure' (Required)

## VmmToVmmNetworkMappingSettings
### Properties
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
### A2AContainerCreationInput
#### Properties
* **instanceType**: 'A2A' (Required)

### VMwareCbtContainerCreationInput
#### Properties
* **instanceType**: 'VMwareCbt' (Required)


## A2AContainerCreationInput
### Properties
* **instanceType**: 'A2A' (Required)

## VMwareCbtContainerCreationInput
### Properties
* **instanceType**: 'VMwareCbt' (Required)

## EnableMigrationInputProperties
### Properties
* **allowedOperations**: 'DisableMigration' | 'Migrate' | 'StartResync' | 'TestMigrate' | 'TestMigrateCleanup'[] (ReadOnly)
* **currentJob**: CurrentJobDetails (ReadOnly)
* **eventCorrelationId**: string (ReadOnly)
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly)
* **healthErrors**: HealthError[] (ReadOnly)
* **lastTestMigrationStatus**: string (ReadOnly)
* **lastTestMigrationTime**: string (ReadOnly)
* **machineName**: string (ReadOnly)
* **migrationState**: 'DisableMigrationFailed' | 'DisableMigrationInProgress' | 'EnableMigrationFailed' | 'EnableMigrationInProgress' | 'InitialSeedingFailed' | 'InitialSeedingInProgress' | 'MigrationFailed' | 'MigrationInProgress' | 'MigrationSucceeded' | 'None' | 'Replicating' (ReadOnly)
* **migrationStateDescription**: string (ReadOnly)
* **policyFriendlyName**: string (ReadOnly)
* **policyId**: string (Required)
* **providerSpecificDetails**: EnableMigrationProviderSpecificInput (Required)
* **testMigrateState**: 'None' | 'TestMigrationCleanupInProgress' | 'TestMigrationFailed' | 'TestMigrationInProgress' | 'TestMigrationSucceeded' (ReadOnly)
* **testMigrateStateDescription**: string (ReadOnly)

## CurrentJobDetails
### Properties
* **jobId**: string (ReadOnly)
* **jobName**: string (ReadOnly)
* **startTime**: string (ReadOnly)

## EnableMigrationProviderSpecificInput
* **Discriminator**: instanceType

### Base Properties
### VMwareCbtEnableMigrationInput
#### Properties
* **dataMoverRunAsAccountId**: string (Required)
* **disksToInclude**: VMwareCbtDiskInput[] (Required, WriteOnly)
* **firmwareType**: string (ReadOnly)
* **initialSeedingProgressPercentage**: int (ReadOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **lastRecoveryPointId**: string (ReadOnly)
* **lastRecoveryPointReceived**: string (ReadOnly)
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer'
* **migrationProgressPercentage**: int (ReadOnly)
* **migrationRecoveryPointId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **performAutoResync**: string
* **protectedDisks**: VMwareCbtProtectedDiskDetails[] (ReadOnly)
* **resyncProgressPercentage**: int (ReadOnly)
* **resyncRequired**: string (ReadOnly)
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' (ReadOnly)
* **snapshotRunAsAccountId**: string (Required)
* **targetAvailabilitySetId**: string
* **targetAvailabilityZone**: string
* **targetBootDiagnosticsStorageAccountId**: string
* **targetGeneration**: string (ReadOnly)
* **targetLocation**: string (ReadOnly)
* **targetNetworkId**: string (Required)
* **targetResourceGroupId**: string (Required)
* **targetSubnetName**: string (WriteOnly)
* **targetVmName**: string
* **targetVmSize**: string
* **vmNics**: VMwareCbtNicDetails[] (ReadOnly)
* **vmwareMachineId**: string (Required)


## VMwareCbtEnableMigrationInput
### Properties
* **dataMoverRunAsAccountId**: string (Required)
* **disksToInclude**: VMwareCbtDiskInput[] (Required, WriteOnly)
* **firmwareType**: string (ReadOnly)
* **initialSeedingProgressPercentage**: int (ReadOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **lastRecoveryPointId**: string (ReadOnly)
* **lastRecoveryPointReceived**: string (ReadOnly)
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer'
* **migrationProgressPercentage**: int (ReadOnly)
* **migrationRecoveryPointId**: string (ReadOnly)
* **osType**: string (ReadOnly)
* **performAutoResync**: string
* **protectedDisks**: VMwareCbtProtectedDiskDetails[] (ReadOnly)
* **resyncProgressPercentage**: int (ReadOnly)
* **resyncRequired**: string (ReadOnly)
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' (ReadOnly)
* **snapshotRunAsAccountId**: string (Required)
* **targetAvailabilitySetId**: string
* **targetAvailabilityZone**: string
* **targetBootDiagnosticsStorageAccountId**: string
* **targetGeneration**: string (ReadOnly)
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
* **diskEncryptionSetId**: string (WriteOnly)
* **diskId**: string (Required, WriteOnly)
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly)
* **isOSDisk**: string (Required, WriteOnly)
* **logStorageAccountId**: string (Required, WriteOnly)
* **logStorageAccountSasSecretName**: string (Required, WriteOnly)

## VMwareCbtProtectedDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly)
* **diskEncryptionSetId**: string (ReadOnly)
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
### A2AEnableProtectionInput
#### Properties
* **agentVersion**: string (ReadOnly)
* **diskEncryptionInfo**: DiskEncryptionInfo (WriteOnly)
* **fabricObjectId**: string
* **instanceType**: 'A2A' (Required)
* **isReplicationAgentUpdateRequired**: bool (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lifecycleId**: string (ReadOnly)
* **managementId**: string (ReadOnly)
* **monitoringJobType**: string (ReadOnly)
* **monitoringPercentageCompletion**: int (ReadOnly)
* **multiVmGroupCreateOption**: 'AutoCreated' | 'UserSpecified' (ReadOnly)
* **multiVmGroupId**: string (ReadOnly)
* **multiVmGroupName**: string
* **osType**: string (ReadOnly)
* **primaryFabricLocation**: string (ReadOnly)
* **protectedDisks**: A2AProtectedDiskDetails[] (ReadOnly)
* **protectedManagedDisks**: A2AProtectedManagedDiskDetails[] (ReadOnly)
* **recoveryAvailabilitySet**: string (ReadOnly)
* **recoveryAvailabilitySetId**: string (WriteOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **recoveryBootDiagStorageAccountId**: string
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

### HyperVReplicaReplicationDetails
#### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplica2012' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### HyperVReplicaBlueReplicationDetails
#### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplica2012R2' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### HyperVReplicaAzureEnableProtectionInput
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
* **recoveryAzureVmName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **selectedSourceNicId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
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

### InMageEnableProtectionInput
#### Properties
* **activeSiteType**: string (ReadOnly)
* **agentDetails**: InMageAgentDetails (ReadOnly)
* **azureStorageAccountId**: string (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **consistencyPoints**: InMageReplicationDetailsConsistencyPoints (ReadOnly)
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
* **validationErrors**: HealthError[] (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
* **vmFriendlyName**: string (WriteOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

### InMageAzureV2EnableProtectionInput
#### Properties
* **agentExpiryDate**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskResized**: string (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
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
* **selectedSourceNicId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
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

### SanEnableProtectionInput
#### Properties
* **instanceType**: 'San' (Required)


## A2AEnableProtectionInput
### Properties
* **agentVersion**: string (ReadOnly)
* **diskEncryptionInfo**: DiskEncryptionInfo (WriteOnly)
* **fabricObjectId**: string
* **instanceType**: 'A2A' (Required)
* **isReplicationAgentUpdateRequired**: bool (ReadOnly)
* **lastHeartbeat**: string (ReadOnly)
* **lastRpoCalculatedTime**: string (ReadOnly)
* **lifecycleId**: string (ReadOnly)
* **managementId**: string (ReadOnly)
* **monitoringJobType**: string (ReadOnly)
* **monitoringPercentageCompletion**: int (ReadOnly)
* **multiVmGroupCreateOption**: 'AutoCreated' | 'UserSpecified' (ReadOnly)
* **multiVmGroupId**: string (ReadOnly)
* **multiVmGroupName**: string
* **osType**: string (ReadOnly)
* **primaryFabricLocation**: string (ReadOnly)
* **protectedDisks**: A2AProtectedDiskDetails[] (ReadOnly)
* **protectedManagedDisks**: A2AProtectedManagedDiskDetails[] (ReadOnly)
* **recoveryAvailabilitySet**: string (ReadOnly)
* **recoveryAvailabilitySetId**: string (WriteOnly)
* **recoveryAzureResourceGroupId**: string (ReadOnly)
* **recoveryAzureVMName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **recoveryBootDiagStorageAccountId**: string
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

## DiskEncryptionInfo
### Properties
* **diskEncryptionKeyInfo**: DiskEncryptionKeyInfo (WriteOnly)
* **keyEncryptionKeyInfo**: KeyEncryptionKeyInfo (WriteOnly)

## DiskEncryptionKeyInfo
### Properties
* **keyVaultResourceArmId**: string (WriteOnly)
* **secretIdentifier**: string (WriteOnly)

## KeyEncryptionKeyInfo
### Properties
* **keyIdentifier**: string (WriteOnly)
* **keyVaultResourceArmId**: string (WriteOnly)

## A2AProtectedDiskDetails
### Properties
* **dataPendingAtSourceAgentInMB**: int (ReadOnly)
* **dataPendingInStagingStorageAccountInMB**: int (ReadOnly)
* **dekKeyVaultArmId**: string (ReadOnly)
* **diskCapacityInBytes**: int (ReadOnly)
* **diskName**: string (ReadOnly)
* **diskType**: string (ReadOnly)
* **diskUri**: string (ReadOnly)
* **isDiskEncrypted**: bool (ReadOnly)
* **isDiskKeyEncrypted**: bool (ReadOnly)
* **kekKeyVaultArmId**: string (ReadOnly)
* **keyIdentifier**: string (ReadOnly)
* **monitoringJobType**: string (ReadOnly)
* **monitoringPercentageCompletion**: int (ReadOnly)
* **primaryDiskAzureStorageAccountId**: string (ReadOnly)
* **primaryStagingAzureStorageAccountId**: string (ReadOnly)
* **recoveryAzureStorageAccountId**: string (ReadOnly)
* **recoveryDiskUri**: string (ReadOnly)
* **resyncRequired**: bool (ReadOnly)
* **secretIdentifier**: string (ReadOnly)

## A2AProtectedManagedDiskDetails
### Properties
* **dataPendingAtSourceAgentInMB**: int (ReadOnly)
* **dataPendingInStagingStorageAccountInMB**: int (ReadOnly)
* **dekKeyVaultArmId**: string (ReadOnly)
* **diskCapacityInBytes**: int (ReadOnly)
* **diskId**: string (ReadOnly)
* **diskName**: string (ReadOnly)
* **diskType**: string (ReadOnly)
* **isDiskEncrypted**: bool (ReadOnly)
* **isDiskKeyEncrypted**: bool (ReadOnly)
* **kekKeyVaultArmId**: string (ReadOnly)
* **keyIdentifier**: string (ReadOnly)
* **monitoringJobType**: string (ReadOnly)
* **monitoringPercentageCompletion**: int (ReadOnly)
* **primaryStagingAzureStorageAccountId**: string (ReadOnly)
* **recoveryReplicaDiskAccountType**: string (ReadOnly)
* **recoveryReplicaDiskId**: string (ReadOnly)
* **recoveryResourceGroupId**: string (ReadOnly)
* **recoveryTargetDiskAccountType**: string (ReadOnly)
* **recoveryTargetDiskId**: string (ReadOnly)
* **resyncRequired**: bool (ReadOnly)
* **secretIdentifier**: string (ReadOnly)

## A2AVmDiskInputDetails
### Properties
* **diskUri**: string (WriteOnly)
* **primaryStagingAzureStorageAccountId**: string (WriteOnly)
* **recoveryAzureStorageAccountId**: string (WriteOnly)

## A2AVmManagedDiskInputDetails
### Properties
* **diskId**: string (WriteOnly)
* **primaryStagingAzureStorageAccountId**: string (WriteOnly)
* **recoveryReplicaDiskAccountType**: string (WriteOnly)
* **recoveryResourceGroupId**: string (WriteOnly)
* **recoveryTargetDiskAccountType**: string (WriteOnly)

## VMNicDetails
### Properties
* **enableAcceleratedNetworkingOnRecovery**: bool (ReadOnly)
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
* **tags**: AzureToAzureVmSyncedConfigDetailsTags (ReadOnly)

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

## AzureToAzureVmSyncedConfigDetailsTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HyperVReplicaReplicationDetails
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

## HyperVReplicaBlueReplicationDetails
### Properties
* **initialReplicationDetails**: InitialReplicationDetails (ReadOnly)
* **instanceType**: 'HyperVReplica2012R2' (Required)
* **lastReplicatedTime**: string (ReadOnly)
* **vMDiskDetails**: DiskDetails[] (ReadOnly)
* **vmId**: string (ReadOnly)
* **vmNics**: VMNicDetails[] (ReadOnly)
* **vmProtectionState**: string (ReadOnly)
* **vmProtectionStateDescription**: string (ReadOnly)

## HyperVReplicaAzureEnableProtectionInput
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
* **recoveryAzureVmName**: string (ReadOnly)
* **recoveryAzureVMSize**: string (ReadOnly)
* **rpoInSeconds**: int (ReadOnly)
* **selectedRecoveryAzureNetworkId**: string (ReadOnly)
* **selectedSourceNicId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
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

## InMageEnableProtectionInput
### Properties
* **activeSiteType**: string (ReadOnly)
* **agentDetails**: InMageAgentDetails (ReadOnly)
* **azureStorageAccountId**: string (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **consistencyPoints**: InMageReplicationDetailsConsistencyPoints (ReadOnly)
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
* **validationErrors**: HealthError[] (ReadOnly)
* **vCenterInfrastructureId**: string (ReadOnly)
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

## InMageReplicationDetailsConsistencyPoints
### Properties
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

## InMageAzureV2EnableProtectionInput
### Properties
* **agentExpiryDate**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **azureVMDiskDetails**: AzureVmDiskDetails[] (ReadOnly)
* **compressedDataRateInMB**: int (ReadOnly)
* **datastores**: string[] (ReadOnly)
* **discoveryType**: string (ReadOnly)
* **diskResized**: string (ReadOnly)
* **disksToInclude**: string[] (WriteOnly)
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
* **selectedSourceNicId**: string (ReadOnly)
* **sourceVmCpuCount**: int (ReadOnly)
* **sourceVmRamSizeInMB**: int (ReadOnly)
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

## SanEnableProtectionInput
### Properties
* **instanceType**: 'San' (Required)

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
### A2AProtectionContainerMappingDetails
#### Properties
* **agentAutoUpdateStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **automationAccountArmId**: string (ReadOnly)
* **instanceType**: 'A2A' (Required)
* **jobScheduleName**: string (ReadOnly)
* **scheduleName**: string (ReadOnly)

### VMwareCbtProtectionContainerMappingDetails
#### Properties
* **instanceType**: 'VMwareCbt' (Required)
* **keyVaultId**: string (ReadOnly)
* **keyVaultUri**: string (ReadOnly)
* **serviceBusConnectionStringSecretName**: string (ReadOnly)
* **storageAccountId**: string (ReadOnly)
* **storageAccountSasSecretName**: string (ReadOnly)
* **targetLocation**: string (ReadOnly)


## A2AProtectionContainerMappingDetails
### Properties
* **agentAutoUpdateStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **automationAccountArmId**: string (ReadOnly)
* **instanceType**: 'A2A' (Required)
* **jobScheduleName**: string (ReadOnly)
* **scheduleName**: string (ReadOnly)

## VMwareCbtProtectionContainerMappingDetails
### Properties
* **instanceType**: 'VMwareCbt' (Required)
* **keyVaultId**: string (ReadOnly)
* **keyVaultUri**: string (ReadOnly)
* **serviceBusConnectionStringSecretName**: string (ReadOnly)
* **storageAccountId**: string (ReadOnly)
* **storageAccountSasSecretName**: string (ReadOnly)
* **targetLocation**: string (ReadOnly)

## ReplicationProviderSpecificContainerMappingInput
* **Discriminator**: instanceType

### Base Properties
### A2AContainerMappingInput
#### Properties
* **agentAutoUpdateStatus**: 'Disabled' | 'Enabled' (WriteOnly)
* **automationAccountArmId**: string (WriteOnly)
* **instanceType**: 'A2A' (Required)

### VMwareCbtContainerMappingInput
#### Properties
* **instanceType**: 'VMwareCbt' (Required)
* **keyVaultId**: string (Required, WriteOnly)
* **keyVaultUri**: string (Required, WriteOnly)
* **serviceBusConnectionStringSecretName**: string (Required, WriteOnly)
* **storageAccountId**: string (Required, WriteOnly)
* **storageAccountSasSecretName**: string (Required, WriteOnly)
* **targetLocation**: string (Required, WriteOnly)


## A2AContainerMappingInput
### Properties
* **agentAutoUpdateStatus**: 'Disabled' | 'Enabled' (WriteOnly)
* **automationAccountArmId**: string (WriteOnly)
* **instanceType**: 'A2A' (Required)

## VMwareCbtContainerMappingInput
### Properties
* **instanceType**: 'VMwareCbt' (Required)
* **keyVaultId**: string (Required, WriteOnly)
* **keyVaultUri**: string (Required, WriteOnly)
* **serviceBusConnectionStringSecretName**: string (Required, WriteOnly)
* **storageAccountId**: string (Required, WriteOnly)
* **storageAccountSasSecretName**: string (Required, WriteOnly)
* **targetLocation**: string (Required, WriteOnly)

## AddRecoveryServicesProviderInputProperties
### Properties
* **allowedScenarios**: string[] (ReadOnly)
* **authenticationIdentityDetails**: IdentityProviderDetails (ReadOnly)
* **authenticationIdentityInput**: IdentityProviderInput (Required, WriteOnly)
* **connectionStatus**: string (ReadOnly)
* **draIdentifier**: string (ReadOnly)
* **fabricFriendlyName**: string (ReadOnly)
* **fabricType**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **healthErrorDetails**: HealthError[] (ReadOnly)
* **lastHeartBeat**: string (ReadOnly)
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

## IdentityProviderInput
### Properties
* **aadAuthority**: string (Required, WriteOnly)
* **applicationId**: string (Required, WriteOnly)
* **audience**: string (Required, WriteOnly)
* **objectId**: string (Required, WriteOnly)
* **tenantId**: string (Required, WriteOnly)

## StorageMappingInputProperties
### Properties
* **targetStorageClassificationId**: string

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

## CreatePolicyInputProperties
### Properties
* **friendlyName**: string (ReadOnly)
* **providerSpecificDetails**: PolicyProviderSpecificDetails (ReadOnly)
* **providerSpecificInput**: PolicyProviderSpecificInput (WriteOnly)

## PolicyProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### A2APolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **crashConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'A2A' (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

### HyperVReplicaPolicyDetails
#### Properties
* **allowedAuthenticationType**: int (ReadOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly)
* **compression**: string (ReadOnly)
* **initialReplicationMethod**: string (ReadOnly)
* **instanceType**: 'HyperVReplica2012' (Required)
* **offlineReplicationExportPath**: string (ReadOnly)
* **offlineReplicationImportPath**: string (ReadOnly)
* **onlineReplicationStartTime**: string (ReadOnly)
* **recoveryPoints**: int (ReadOnly)
* **replicaDeletionOption**: string (ReadOnly)
* **replicationPort**: int (ReadOnly)

### HyperVReplicaBluePolicyDetails
#### Properties
* **allowedAuthenticationType**: int (ReadOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly)
* **compression**: string (ReadOnly)
* **initialReplicationMethod**: string (ReadOnly)
* **instanceType**: 'HyperVReplica2012R2' (Required)
* **offlineReplicationExportPath**: string (ReadOnly)
* **offlineReplicationImportPath**: string (ReadOnly)
* **onlineReplicationStartTime**: string (ReadOnly)
* **recoveryPoints**: int (ReadOnly)
* **replicaDeletionOption**: string (ReadOnly)
* **replicationFrequencyInSeconds**: int (ReadOnly)
* **replicationPort**: int (ReadOnly)

### HyperVReplicaAzurePolicyDetails
#### Properties
* **activeStorageAccountId**: string (ReadOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly)
* **encryption**: string (ReadOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **onlineReplicationStartTime**: string (ReadOnly)
* **recoveryPointHistoryDurationInHours**: int (ReadOnly)
* **replicationInterval**: int (ReadOnly)

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

### InMagePolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'InMage' (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

### InMageAzureV2PolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **crashConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'InMageAzureV2' (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

### InMageBasePolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'InMageBasePolicyDetails' (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

### RcmAzureMigrationPolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **crashConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'RcmAzureMigration' (Required)
* **multiVmSyncStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

### VmwareCbtPolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **crashConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **recoveryPointHistoryInMinutes**: int (ReadOnly)


## A2APolicyDetails
### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **crashConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'A2A' (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

## HyperVReplicaPolicyDetails
### Properties
* **allowedAuthenticationType**: int (ReadOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly)
* **compression**: string (ReadOnly)
* **initialReplicationMethod**: string (ReadOnly)
* **instanceType**: 'HyperVReplica2012' (Required)
* **offlineReplicationExportPath**: string (ReadOnly)
* **offlineReplicationImportPath**: string (ReadOnly)
* **onlineReplicationStartTime**: string (ReadOnly)
* **recoveryPoints**: int (ReadOnly)
* **replicaDeletionOption**: string (ReadOnly)
* **replicationPort**: int (ReadOnly)

## HyperVReplicaBluePolicyDetails
### Properties
* **allowedAuthenticationType**: int (ReadOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly)
* **compression**: string (ReadOnly)
* **initialReplicationMethod**: string (ReadOnly)
* **instanceType**: 'HyperVReplica2012R2' (Required)
* **offlineReplicationExportPath**: string (ReadOnly)
* **offlineReplicationImportPath**: string (ReadOnly)
* **onlineReplicationStartTime**: string (ReadOnly)
* **recoveryPoints**: int (ReadOnly)
* **replicaDeletionOption**: string (ReadOnly)
* **replicationFrequencyInSeconds**: int (ReadOnly)
* **replicationPort**: int (ReadOnly)

## HyperVReplicaAzurePolicyDetails
### Properties
* **activeStorageAccountId**: string (ReadOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly)
* **encryption**: string (ReadOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **onlineReplicationStartTime**: string (ReadOnly)
* **recoveryPointHistoryDurationInHours**: int (ReadOnly)
* **replicationInterval**: int (ReadOnly)

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

## InMagePolicyDetails
### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'InMage' (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

## InMageAzureV2PolicyDetails
### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **crashConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'InMageAzureV2' (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

## InMageBasePolicyDetails
### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'InMageBasePolicyDetails' (Required)
* **multiVmSyncStatus**: string (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

## RcmAzureMigrationPolicyDetails
### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **crashConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'RcmAzureMigration' (Required)
* **multiVmSyncStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **recoveryPointHistory**: int (ReadOnly)
* **recoveryPointThresholdInMinutes**: int (ReadOnly)

## VmwareCbtPolicyDetails
### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly)
* **crashConsistentFrequencyInMinutes**: int (ReadOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **recoveryPointHistoryInMinutes**: int (ReadOnly)

## PolicyProviderSpecificInput
* **Discriminator**: instanceType

### Base Properties
### A2APolicyCreationInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly)
* **crashConsistentFrequencyInMinutes**: int (WriteOnly)
* **instanceType**: 'A2A' (Required)
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly)
* **recoveryPointHistory**: int (WriteOnly)

### HyperVReplicaPolicyInput
#### Properties
* **allowedAuthenticationType**: int (WriteOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly)
* **compression**: string (WriteOnly)
* **initialReplicationMethod**: string (WriteOnly)
* **instanceType**: 'HyperVReplica2012' (Required)
* **offlineReplicationExportPath**: string (WriteOnly)
* **offlineReplicationImportPath**: string (WriteOnly)
* **onlineReplicationStartTime**: string (WriteOnly)
* **recoveryPoints**: int (WriteOnly)
* **replicaDeletion**: string (WriteOnly)
* **replicationPort**: int (WriteOnly)

### HyperVReplicaBluePolicyInput
#### Properties
* **allowedAuthenticationType**: int (WriteOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly)
* **compression**: string (WriteOnly)
* **initialReplicationMethod**: string (WriteOnly)
* **instanceType**: 'HyperVReplica2012R2' (Required)
* **offlineReplicationExportPath**: string (WriteOnly)
* **offlineReplicationImportPath**: string (WriteOnly)
* **onlineReplicationStartTime**: string (WriteOnly)
* **recoveryPoints**: int (WriteOnly)
* **replicaDeletion**: string (WriteOnly)
* **replicationFrequencyInSeconds**: int (WriteOnly)
* **replicationPort**: int (WriteOnly)

### HyperVReplicaAzurePolicyInput
#### Properties
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **onlineReplicationStartTime**: string (WriteOnly)
* **recoveryPointHistoryDuration**: int (WriteOnly)
* **replicationInterval**: int (WriteOnly)
* **storageAccounts**: string[] (WriteOnly)

### InMagePolicyInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly)
* **instanceType**: 'InMage' (Required)
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly)
* **recoveryPointHistory**: int (WriteOnly)
* **recoveryPointThresholdInMinutes**: int (WriteOnly)

### InMageAzureV2PolicyInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly)
* **crashConsistentFrequencyInMinutes**: int (WriteOnly)
* **instanceType**: 'InMageAzureV2' (Required)
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly)
* **recoveryPointHistory**: int (WriteOnly)
* **recoveryPointThresholdInMinutes**: int (WriteOnly)

### VMwareCbtPolicyCreationInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly)
* **crashConsistentFrequencyInMinutes**: int (WriteOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **recoveryPointHistoryInMinutes**: int (WriteOnly)


## A2APolicyCreationInput
### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly)
* **crashConsistentFrequencyInMinutes**: int (WriteOnly)
* **instanceType**: 'A2A' (Required)
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly)
* **recoveryPointHistory**: int (WriteOnly)

## HyperVReplicaPolicyInput
### Properties
* **allowedAuthenticationType**: int (WriteOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly)
* **compression**: string (WriteOnly)
* **initialReplicationMethod**: string (WriteOnly)
* **instanceType**: 'HyperVReplica2012' (Required)
* **offlineReplicationExportPath**: string (WriteOnly)
* **offlineReplicationImportPath**: string (WriteOnly)
* **onlineReplicationStartTime**: string (WriteOnly)
* **recoveryPoints**: int (WriteOnly)
* **replicaDeletion**: string (WriteOnly)
* **replicationPort**: int (WriteOnly)

## HyperVReplicaBluePolicyInput
### Properties
* **allowedAuthenticationType**: int (WriteOnly)
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly)
* **compression**: string (WriteOnly)
* **initialReplicationMethod**: string (WriteOnly)
* **instanceType**: 'HyperVReplica2012R2' (Required)
* **offlineReplicationExportPath**: string (WriteOnly)
* **offlineReplicationImportPath**: string (WriteOnly)
* **onlineReplicationStartTime**: string (WriteOnly)
* **recoveryPoints**: int (WriteOnly)
* **replicaDeletion**: string (WriteOnly)
* **replicationFrequencyInSeconds**: int (WriteOnly)
* **replicationPort**: int (WriteOnly)

## HyperVReplicaAzurePolicyInput
### Properties
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly)
* **instanceType**: 'HyperVReplicaAzure' (Required)
* **onlineReplicationStartTime**: string (WriteOnly)
* **recoveryPointHistoryDuration**: int (WriteOnly)
* **replicationInterval**: int (WriteOnly)
* **storageAccounts**: string[] (WriteOnly)

## InMagePolicyInput
### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly)
* **instanceType**: 'InMage' (Required)
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly)
* **recoveryPointHistory**: int (WriteOnly)
* **recoveryPointThresholdInMinutes**: int (WriteOnly)

## InMageAzureV2PolicyInput
### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly)
* **crashConsistentFrequencyInMinutes**: int (WriteOnly)
* **instanceType**: 'InMageAzureV2' (Required)
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly)
* **recoveryPointHistory**: int (WriteOnly)
* **recoveryPointThresholdInMinutes**: int (WriteOnly)

## VMwareCbtPolicyCreationInput
### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly)
* **crashConsistentFrequencyInMinutes**: int (WriteOnly)
* **instanceType**: 'VMwareCbt' (Required)
* **recoveryPointHistoryInMinutes**: int (WriteOnly)

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
### RecoveryPlanAutomationRunbookActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required)
* **instanceType**: 'AutomationRunbookActionDetails' (Required)
* **runbookId**: string
* **timeout**: string

### RecoveryPlanManualActionDetails
#### Properties
* **description**: string
* **instanceType**: 'ManualActionDetails' (Required)

### RecoveryPlanScriptActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required)
* **instanceType**: 'ScriptActionDetails' (Required)
* **path**: string (Required)
* **timeout**: string


## RecoveryPlanAutomationRunbookActionDetails
### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required)
* **instanceType**: 'AutomationRunbookActionDetails' (Required)
* **runbookId**: string
* **timeout**: string

## RecoveryPlanManualActionDetails
### Properties
* **description**: string
* **instanceType**: 'ManualActionDetails' (Required)

## RecoveryPlanScriptActionDetails
### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required)
* **instanceType**: 'ScriptActionDetails' (Required)
* **path**: string (Required)
* **timeout**: string

## RecoveryPlanProtectedItem
### Properties
* **id**: string
* **virtualMachineId**: string

