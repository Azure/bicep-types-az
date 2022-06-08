# Microsoft.RecoveryServices @ 2016-12-01

## Resource Microsoft.RecoveryServices/vaults/backupEngines@2016-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupEngineBase](#backupenginebase) (ReadOnly): The base backup engine class. All workload specific backup engines derive from this class.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupEngines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionContainer](#protectioncontainer): Base class for container with backup items. Containers with specific workloads are derived from this class.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults@2016-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionContainer](#protectioncontainer) (ReadOnly): Base class for container with backup items. Containers with specific workloads are derived from this class.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupstorageconfig@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: 'vaultstorageconfig' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupResourceConfig](#backupresourceconfig): The resource storage details.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupstorageconfig' (ReadOnly, DeployTimeConstant): The resource type

## BackupEngineBase
* **Discriminator**: backupEngineType

### Base Properties
* **azureBackupAgentVersion**: string (ReadOnly): Backup agent version
* **backupEngineId**: string (ReadOnly): ID of the backup engine.
* **backupEngineState**: string (ReadOnly): Status of the backup engine with the Recovery Services Vault. = {Active/Deleting/DeleteFailed}
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB' | string (ReadOnly): Type of backup management for the backup engine.
* **canReRegister**: bool (ReadOnly): Flag indicating if the backup engine be registered, once already registered.
* **dpmVersion**: string (ReadOnly): Backup engine version
* **extendedInfo**: [BackupEngineExtendedInfo](#backupengineextendedinfo) (ReadOnly): Additional information on backup engine.
* **friendlyName**: string (ReadOnly): Friendly name of the backup engine.
* **healthStatus**: string (ReadOnly): Backup status of the backup engine.
* **isAzureBackupAgentUpgradeAvailable**: bool (ReadOnly): To check if backup agent upgrade available
* **isDpmUpgradeAvailable**: bool (ReadOnly): To check if backup engine upgrade available
* **registrationStatus**: string (ReadOnly): Registration status of the backup engine with the Recovery Services Vault.
### AzureBackupServerEngine
#### Properties
* **backupEngineType**: 'AzureBackupServerEngine' (Required): Type of the backup engine.

### DpmBackupEngine
#### Properties
* **backupEngineType**: 'DpmBackupEngine' (Required): Type of the backup engine.


## BackupEngineExtendedInfo
### Properties
* **availableDiskSpace**: int (ReadOnly): Disk space currently available in the backup engine.
* **azureProtectedInstances**: int (ReadOnly): Protected instances in the backup engine.
* **databaseName**: string (ReadOnly): Database name of backup engine.
* **diskCount**: int (ReadOnly): Number of disks in the backup engine.
* **protectedItemsCount**: int (ReadOnly): Number of protected items in the backup engine.
* **protectedServersCount**: int (ReadOnly): Number of protected servers in the backup engine.
* **refreshedAt**: string (ReadOnly): Last refresh time in the backup engine.
* **usedDiskSpace**: int (ReadOnly): Disk space used in the backup engine.

## BackupResourceConfig
### Properties
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | string: Storage type
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | string: Storage type
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked' | string: Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.

## ContainerIdentityInfo
### Properties
* **aadTenantId**: string: Protection container identity - AAD Tenant
* **audience**: string: Protection container identity - Audience
* **servicePrincipalClientId**: string: Protection container identity - AAD Service Principal
* **uniqueName**: string: Unique name of the container

## GenericContainerExtendedInfo
### Properties
* **containerIdentityInfo**: [ContainerIdentityInfo](#containeridentityinfo): Container identity information
* **rawCertData**: string: Public key of container cert
* **serviceEndpoints**: [GenericContainerExtendedInfoServiceEndpoints](#genericcontainerextendedinfoserviceendpoints): Azure Backup Service Endpoints for the container

## GenericContainerExtendedInfoServiceEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MabContainerExtendedInfo
### Properties
* **backupItems**: string[]: List of backup items associated with this container.
* **backupItemType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'SQLDB' | 'SQLDataBase' | 'Sharepoint' | 'SystemState' | 'VM' | 'VMwareVM' | string: Type of backup items associated with this container.
* **lastBackupStatus**: string: Latest backup status of this container.
* **lastRefreshedAt**: string: Time stamp when this container was refreshed.
* **policyName**: string: Backup policy associated with this container.

## MABContainerHealthDetails
### Properties
* **code**: int: Health Code
* **message**: string: Health Message
* **recommendations**: string[]: Health Recommended Actions
* **title**: string: Health Title

## ProtectionContainer
* **Discriminator**: containerType

### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DPM' | 'DefaultBackup' | 'Invalid' | 'MAB' | string: Type of backup management for the backup engine.
* **friendlyName**: string: Friendly name of the container.
* **healthStatus**: string: Status of health of the container.
* **registrationStatus**: string: Status of registration of the container with the Recovery Services Vault.
### AzureBackupServerContainer
#### Properties
* **containerType**: 'AzureBackupServerContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer

### AzureSqlContainer
#### Properties
* **containerType**: 'AzureSqlContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer

### GenericContainer
#### Properties
* **containerType**: 'GenericContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer
* **extendedInformation**: [GenericContainerExtendedInfo](#genericcontainerextendedinfo): Container extended information
* **fabricName**: string: Name of the container's fabric

### AzureIaaSClassicComputeVMContainer
#### Properties
* **containerType**: 'Microsoft.ClassicCompute/virtualMachines' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer

### AzureIaaSComputeVMContainer
#### Properties
* **containerType**: 'Microsoft.Compute/virtualMachines' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer

### AzureSqlagWorkloadContainerProtectionContainer
#### Properties
* **containerType**: 'SQLAGWorkLoadContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer

### AzureStorageContainer
#### Properties
* **containerType**: 'StorageContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer
* **protectedItemCount**: int: Number of items backed up in this container.
* **resourceGroup**: string: Resource group name of Recovery Services Vault.
* **sourceResourceId**: string: Fully qualified ARM url.
* **storageAccountVersion**: string: Storage account version.

### AzureVMAppContainerProtectionContainer
#### Properties
* **containerType**: 'VMAppContainer' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer

### MabContainer
#### Properties
* **agentVersion**: string: Agent version of this container.
* **canReRegister**: bool: Can the container be registered one more time.
* **containerHealthState**: string: Health state of mab container.
* **containerId**: int: ContainerID represents the container.
* **containerType**: 'Windows' (Required): Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
Backup is VMAppContainer
* **extendedInfo**: [MabContainerExtendedInfo](#mabcontainerextendedinfo): Additional information of the container.
* **mabContainerHealthDetails**: [MABContainerHealthDetails](#mabcontainerhealthdetails)[]: Health details on this mab container.
* **protectedItemCount**: int: Number of items backed up in this container.


## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

