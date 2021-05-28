# Microsoft.RecoveryServices @ 2016-12-01

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionContainer](#protectioncontainer): Base class for container with backup items. Containers with specific workloads are derived from this class.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/backupstorageconfig@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: 'vaultstorageconfig' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupResourceConfig](#backupresourceconfig): The resource storage details.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/backupstorageconfig' (ReadOnly, DeployTimeConstant): The resource type

## ProtectionContainer
* **Discriminator**: containerType
### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DefaultBackup' | 'DPM' | 'Invalid' | 'MAB': Type of backup management for the container.
* **friendlyName**: string: Friendly name of the container.
* **healthStatus**: string: Status of health of the container.
* **registrationStatus**: string: Status of registration of the container with the Recovery Services Vault.
### AzureSqlContainer
#### Properties
* **containerType**: 'AzureSqlContainer' (Required): Azure Sql workload-specific container.

### AzureWorkloadContainer
#### Properties
* **containerType**: 'AzureWorkloadContainer' (Required): Container for the workloads running inside Azure Compute or Classic Compute.
* **extendedInfo**: [AzureWorkloadContainerExtendedInfo](#azureworkloadcontainerextendedinfo): Extended information of the container.
* **lastUpdatedTime**: string: Time stamp when this container was updated.
* **operationType**: 'Invalid' | 'Register' | 'Reregister': Re-Do Operation.
* **sourceResourceId**: string: ARM ID of the virtual machine represented by this Azure Workload Container
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM': Workload type for which registration was sent.

### DPMContainer
#### Properties
* **canReRegister**: bool: Specifies whether the container is re-registrable.
* **containerId**: string: ID of container.
* **containerType**: 'DPMContainer' (Required): DPM workload-specific protection container.
* **dpmAgentVersion**: string: Backup engine Agent version
* **dpmServers**: string[]: List of BackupEngines protecting the container
* **extendedInfo**: [DPMContainerExtendedInfo](#dpmcontainerextendedinfo): Additional information of the DPMContainer.
* **protectedItemCount**: int: Number of protected items in the BackupEngine
* **protectionStatus**: string: Protection status of the container.
* **upgradeAvailable**: bool: To check if upgrade available

### GenericContainer
#### Properties
* **containerType**: 'GenericContainer' (Required): Base class for generic container of backup items
* **extendedInformation**: [GenericContainerExtendedInfo](#genericcontainerextendedinfo): Container extended information
* **fabricName**: string: Name of the container's fabric

### IaaSVMContainer
#### Properties
* **containerType**: 'IaaSVMContainer' (Required): IaaS VM workload-specific container.
* **resourceGroup**: string: Resource group name of Recovery Services Vault.
* **virtualMachineId**: string: Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
* **virtualMachineVersion**: string: Specifies whether the container represents a Classic or an Azure Resource Manager VM.

### StorageContainer
#### Properties
* **containerType**: 'StorageContainer' (Required): Azure Storage Account workload-specific container.
* **protectedItemCount**: int: Number of items backed up in this container.
* **resourceGroup**: string: Resource group name of Recovery Services Vault.
* **sourceResourceId**: string: Fully qualified ARM url.
* **storageAccountVersion**: string: Storage account version.

### Windows
#### Properties
* **agentVersion**: string: Agent version of this container.
* **canReRegister**: bool: Can the container be registered one more time.
* **containerHealthState**: string: Health state of mab container.
* **containerId**: int: ContainerID represents the container.
* **containerType**: 'Windows' (Required): Container with items backed up using MAB backup engine.
* **extendedInfo**: [MabContainerExtendedInfo](#mabcontainerextendedinfo): Additional information of the container.
* **mabContainerHealthDetails**: [MABContainerHealthDetails](#mabcontainerhealthdetails)[]: Health details on this mab container.
* **protectedItemCount**: int: Number of items backed up in this container.


## AzureSqlContainer
### Properties
* **containerType**: 'AzureSqlContainer' (Required): Azure Sql workload-specific container.

## AzureWorkloadContainer
### Properties
* **containerType**: 'AzureWorkloadContainer' (Required): Container for the workloads running inside Azure Compute or Classic Compute.
* **extendedInfo**: [AzureWorkloadContainerExtendedInfo](#azureworkloadcontainerextendedinfo): Extended information of the container.
* **lastUpdatedTime**: string: Time stamp when this container was updated.
* **operationType**: 'Invalid' | 'Register' | 'Reregister': Re-Do Operation.
* **sourceResourceId**: string: ARM ID of the virtual machine represented by this Azure Workload Container
* **workloadType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM': Workload type for which registration was sent.

## AzureWorkloadContainerExtendedInfo
### Properties
* **hostServerName**: string: Host Os Name in case of Stand Alone and Cluster Name in case of distributed container.
* **inquiryInfo**: [InquiryInfo](#inquiryinfo): Details about inquired protectable items under a given container.
* **nodesList**: [DistributedNodesInfo](#distributednodesinfo)[]: List of the nodes in case of distributed container.

## InquiryInfo
### Properties
* **errorDetail**: [ErrorDetail](#errordetail): Error Detail class which encapsulates Code, Message and Recommendations.
* **inquiryDetails**: [WorkloadInquiryDetails](#workloadinquirydetails)[]: Inquiry Details which will have workload specific details.
For e.g. - For SQL and oracle this will contain different details.
* **status**: string: Inquiry Status for this container such as
InProgress | Failed | Succeeded

## ErrorDetail
### Properties
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error Message related to the Code.
* **recommendations**: string[] (ReadOnly): List of recommendation strings.

## WorkloadInquiryDetails
### Properties
* **inquiryValidation**: [InquiryValidation](#inquiryvalidation): Validation for inquired protectable items under a given container.
* **itemCount**: int: Contains the protectable item Count inside this Container.
* **type**: string: Type of the Workload such as SQL, Oracle etc.

## InquiryValidation
### Properties
* **additionalDetail**: string (ReadOnly): Error Additional Detail in case the status is non-success.
* **errorDetail**: [ErrorDetail](#errordetail): Error Detail class which encapsulates Code, Message and Recommendations.
* **status**: string: Status for the Inquiry Validation.

## DistributedNodesInfo
### Properties
* **errorDetail**: [ErrorDetail](#errordetail): Error Detail class which encapsulates Code, Message and Recommendations.
* **nodeName**: string: Name of the node under a distributed container.
* **status**: string: Status of this Node.
Failed | Succeeded

## DPMContainer
### Properties
* **canReRegister**: bool: Specifies whether the container is re-registrable.
* **containerId**: string: ID of container.
* **containerType**: 'DPMContainer' (Required): DPM workload-specific protection container.
* **dpmAgentVersion**: string: Backup engine Agent version
* **dpmServers**: string[]: List of BackupEngines protecting the container
* **extendedInfo**: [DPMContainerExtendedInfo](#dpmcontainerextendedinfo): Additional information of the DPMContainer.
* **protectedItemCount**: int: Number of protected items in the BackupEngine
* **protectionStatus**: string: Protection status of the container.
* **upgradeAvailable**: bool: To check if upgrade available

## DPMContainerExtendedInfo
### Properties
* **lastRefreshedAt**: string: Last refresh time of the DPMContainer.

## GenericContainer
### Properties
* **containerType**: 'GenericContainer' (Required): Base class for generic container of backup items
* **extendedInformation**: [GenericContainerExtendedInfo](#genericcontainerextendedinfo): Container extended information
* **fabricName**: string: Name of the container's fabric

## GenericContainerExtendedInfo
### Properties
* **containerIdentityInfo**: [ContainerIdentityInfo](#containeridentityinfo): Container identity information
* **rawCertData**: string: Public key of container cert
* **serviceEndpoints**: [Dictionary<string,String>](#dictionarystringstring): Azure Backup Service Endpoints for the container

## ContainerIdentityInfo
### Properties
* **aadTenantId**: string: Protection container identity - AAD Tenant
* **audience**: string: Protection container identity - Audience
* **servicePrincipalClientId**: string: Protection container identity - AAD Service Principal
* **uniqueName**: string: Unique name of the container

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IaaSVMContainer
### Properties
* **containerType**: 'IaaSVMContainer' (Required): IaaS VM workload-specific container.
* **resourceGroup**: string: Resource group name of Recovery Services Vault.
* **virtualMachineId**: string: Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
* **virtualMachineVersion**: string: Specifies whether the container represents a Classic or an Azure Resource Manager VM.

## StorageContainer
### Properties
* **containerType**: 'StorageContainer' (Required): Azure Storage Account workload-specific container.
* **protectedItemCount**: int: Number of items backed up in this container.
* **resourceGroup**: string: Resource group name of Recovery Services Vault.
* **sourceResourceId**: string: Fully qualified ARM url.
* **storageAccountVersion**: string: Storage account version.

## Windows
### Properties
* **agentVersion**: string: Agent version of this container.
* **canReRegister**: bool: Can the container be registered one more time.
* **containerHealthState**: string: Health state of mab container.
* **containerId**: int: ContainerID represents the container.
* **containerType**: 'Windows' (Required): Container with items backed up using MAB backup engine.
* **extendedInfo**: [MabContainerExtendedInfo](#mabcontainerextendedinfo): Additional information of the container.
* **mabContainerHealthDetails**: [MABContainerHealthDetails](#mabcontainerhealthdetails)[]: Health details on this mab container.
* **protectedItemCount**: int: Number of items backed up in this container.

## MabContainerExtendedInfo
### Properties
* **backupItems**: string[]: List of backup items associated with this container.
* **backupItemType**: 'AzureFileShare' | 'AzureSqlDb' | 'Client' | 'Exchange' | 'FileFolder' | 'GenericDataSource' | 'Invalid' | 'SAPAseDatabase' | 'SAPHanaDatabase' | 'Sharepoint' | 'SQLDataBase' | 'SQLDB' | 'SystemState' | 'VM' | 'VMwareVM': Type of backup items associated with this container.
* **lastBackupStatus**: string: Latest backup status of this container.
* **lastRefreshedAt**: string: Time stamp when this container was refreshed.
* **policyName**: string: Backup policy associated with this container.

## MABContainerHealthDetails
### Properties
* **code**: int: Health Code
* **message**: string: Health Message
* **recommendations**: string[]: Health Recommended Actions
* **title**: string: Health Title

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackupResourceConfig
### Properties
* **storageModelType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant': Storage type.
* **storageType**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant': Storage type.
* **storageTypeState**: 'Invalid' | 'Locked' | 'Unlocked': Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

