# Microsoft.RecoveryServices @ 2021-06-01

## Resource Microsoft.RecoveryServices/vaults/replicationAlertSettings@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigureAlertRequestPropertiesOrAlertProperties](#configurealertrequestpropertiesoralertproperties): The properties of a configure alert request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationAlertSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationEvents@2021-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventProperties](#eventproperties) (ReadOnly): Event related data.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FabricCreationInputPropertiesOrFabricProperties](#fabriccreationinputpropertiesorfabricproperties): Fabric creation input.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationLogicalNetworks@2021-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogicalNetworkProperties](#logicalnetworkproperties) (ReadOnly): The Logical Network Properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationLogicalNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks@2021-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkProperties](#networkproperties) (ReadOnly): The Network Properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateNetworkMappingInputPropertiesOrNetworkMappingProperties](#createnetworkmappinginputpropertiesornetworkmappingproperties) (Required): Input properties for creating network mapping.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerInputPropertiesOrProtectionContainerProperties](#createprotectioncontainerinputpropertiesorprotectioncontainerproperties): Create protection container input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnableMigrationInputPropertiesOrMigrationItemProperties](#enablemigrationinputpropertiesormigrationitemproperties) (Required): Enable migration input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems/migrationRecoveryPoints@2021-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MigrationRecoveryPointProperties](#migrationrecoverypointproperties) (ReadOnly): Recovery point properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems/migrationRecoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectableItems@2021-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectableItemProperties](#protectableitemproperties) (ReadOnly): The custom data.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectableItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnableProtectionInputPropertiesOrReplicationProtectedItemProperties](#enableprotectioninputpropertiesorreplicationprotecteditemproperties): Enable protection input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems/recoveryPoints@2021-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryPointProperties](#recoverypointproperties) (ReadOnly): The recovery point properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems/recoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerMappingInputPropertiesOrProtectionContainerMappingProperties](#createprotectioncontainermappinginputpropertiesorprotectioncontainermappingproperties): Configure protection input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddRecoveryServicesProviderInputPropertiesOrRecoveryServicesProviderProperties](#addrecoveryservicesproviderinputpropertiesorrecoveryservicesproviderproperties) (Required): The properties of an add provider request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications@2021-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageClassificationProperties](#storageclassificationproperties) (ReadOnly): Properties of the storage object.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageMappingInputPropertiesOrStorageClassificationMappingProperties](#storagemappinginputpropertiesorstorageclassificationmappingproperties): Storage mapping input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddVCenterRequestPropertiesOrVCenterProperties](#addvcenterrequestpropertiesorvcenterproperties): The properties of an add vCenter request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationJobs@2021-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (ReadOnly): The custom data.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationPolicies@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreatePolicyInputPropertiesOrPolicyProperties](#createpolicyinputpropertiesorpolicyproperties): Policy creation properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationProtectionIntents@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionIntentPropertiesOrReplicationProtectionIntentProperties](#createprotectionintentpropertiesorreplicationprotectionintentproperties): Create protection intent input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationProtectionIntents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateRecoveryPlanInputPropertiesOrRecoveryPlanProperties](#createrecoveryplaninputpropertiesorrecoveryplanproperties) (Required): Recovery plan creation properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationRecoveryPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationVaultSettings@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VaultSettingCreationInputPropertiesOrVaultSettingProperties](#vaultsettingcreationinputpropertiesorvaultsettingproperties) (Required): Vault setting creation input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationVaultSettings' (ReadOnly, DeployTimeConstant): The resource type

## A2AProtectedDiskDetails
### Properties
* **allowedDiskLevelOperation**: string[]: The disk level operations list.
* **dataPendingAtSourceAgentInMB**: int: The data pending at source virtual machine in MB.
* **dataPendingInStagingStorageAccountInMB**: int: The data pending for replication in MB at staging account.
* **dekKeyVaultArmId**: string: The KeyVault resource id for secret (BEK).
* **diskCapacityInBytes**: int: The disk capacity in bytes.
* **diskName**: string: The disk name.
* **diskState**: string: The disk state.
* **diskType**: string: The type of disk.
* **diskUri**: string: The disk uri.
* **failoverDiskName**: string: The failover name for the managed disk.
* **isDiskEncrypted**: bool: A value indicating whether vm has encrypted os disk or not.
* **isDiskKeyEncrypted**: bool: A value indicating whether disk key got encrypted or not.
* **kekKeyVaultArmId**: string: The KeyVault resource id for key (KEK).
* **keyIdentifier**: string: The key URL / identifier (KEK).
* **monitoringJobType**: string: The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int: The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **primaryDiskAzureStorageAccountId**: string: The primary disk storage account.
* **primaryStagingAzureStorageAccountId**: string: The primary staging storage account.
* **recoveryAzureStorageAccountId**: string: The recovery disk storage account.
* **recoveryDiskUri**: string: Recovery disk uri.
* **resyncRequired**: bool: A value indicating whether resync is required for this disk.
* **secretIdentifier**: string: The secret URL / identifier (BEK).
* **tfoDiskName**: string: The test failover name for the managed disk.

## A2AProtectedManagedDiskDetails
### Properties
* **allowedDiskLevelOperation**: string[]: The disk level operations list.
* **dataPendingAtSourceAgentInMB**: int: The data pending at source virtual machine in MB.
* **dataPendingInStagingStorageAccountInMB**: int: The data pending for replication in MB at staging account.
* **dekKeyVaultArmId**: string: The KeyVault resource id for secret (BEK).
* **diskCapacityInBytes**: int: The disk capacity in bytes.
* **diskId**: string: The managed disk Arm id.
* **diskName**: string: The disk name.
* **diskState**: string: The disk state.
* **diskType**: string: The type of disk.
* **failoverDiskName**: string: The failover name for the managed disk.
* **isDiskEncrypted**: bool: A value indicating whether vm has encrypted os disk or not.
* **isDiskKeyEncrypted**: bool: A value indicating whether disk key got encrypted or not.
* **kekKeyVaultArmId**: string: The KeyVault resource id for key (KEK).
* **keyIdentifier**: string: The key URL / identifier (KEK).
* **monitoringJobType**: string: The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int: The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **primaryDiskEncryptionSetId**: string: The primary disk encryption set Id.
* **primaryStagingAzureStorageAccountId**: string: The primary staging storage account.
* **recoveryDiskEncryptionSetId**: string: The recovery disk encryption set Id.
* **recoveryOrignalTargetDiskId**: string: Recovery original target disk Arm Id.
* **recoveryReplicaDiskAccountType**: string: The replica disk type. Its an optional value and will be same as source disk type if not user provided.
* **recoveryReplicaDiskId**: string: Recovery replica disk Arm Id.
* **recoveryResourceGroupId**: string: The recovery disk resource group Arm Id.
* **recoveryTargetDiskAccountType**: string: The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.
* **recoveryTargetDiskId**: string: Recovery target disk Arm Id.
* **resyncRequired**: bool: A value indicating whether resync is required for this disk.
* **secretIdentifier**: string: The secret URL / identifier (BEK).
* **tfoDiskName**: string: The test failover name for the managed disk.

## A2AProtectionIntentDiskInputDetails
### Properties
* **diskUri**: string (Required): The disk Uri.
* **primaryStagingStorageAccountCustomInput**: [StorageAccountCustomDetails](#storageaccountcustomdetails): The primary staging storage account input.
* **recoveryAzureStorageAccountCustomInput**: [StorageAccountCustomDetails](#storageaccountcustomdetails): The recovery VHD storage account input.

## A2AProtectionIntentManagedDiskInputDetails
### Properties
* **diskEncryptionInfo**: [DiskEncryptionInfo](#diskencryptioninfo): The recovery disk encryption information (for one / single pass flows).
* **diskId**: string (Required): The disk Id.
* **primaryStagingStorageAccountCustomInput**: [StorageAccountCustomDetails](#storageaccountcustomdetails): The primary staging storage account input.
* **recoveryDiskEncryptionSetId**: string: The recovery disk encryption set Id.
* **recoveryReplicaDiskAccountType**: string: The replica disk type. Its an optional value and will be same as source disk type if not user provided.
* **recoveryResourceGroupCustomInput**: [RecoveryResourceGroupCustomDetails](#recoveryresourcegroupcustomdetails): The recovery resource group input.
* **recoveryTargetDiskAccountType**: string: The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.

## A2AUnprotectedDiskDetails
### Properties
* **diskAutoProtectionStatus**: 'Disabled' | 'Enabled' | string: A value indicating whether the disk auto protection is enabled.
* **diskLunId**: int: The source lun Id for the data disk.

## A2AVmDiskInputDetails
### Properties
* **diskUri**: string (Required): The disk Uri.
* **primaryStagingAzureStorageAccountId**: string (Required): The primary staging storage account Id.
* **recoveryAzureStorageAccountId**: string (Required): The recovery VHD storage account Id.

## A2AVmManagedDiskInputDetails
### Properties
* **diskEncryptionInfo**: [DiskEncryptionInfo](#diskencryptioninfo): The recovery disk encryption information (for one / single pass flows).
* **diskId**: string (Required): The disk Id.
* **primaryStagingAzureStorageAccountId**: string (Required): The primary staging storage account Arm Id.
* **recoveryDiskEncryptionSetId**: string: The recovery disk encryption set Id.
* **recoveryReplicaDiskAccountType**: string: The replica disk type. Its an optional value and will be same as source disk type if not user provided.
* **recoveryResourceGroupId**: string (Required): The target resource group Arm Id.
* **recoveryTargetDiskAccountType**: string: The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.

## A2AZoneDetails
### Properties
* **source**: string: Source zone info.
* **target**: string: The target zone info.

## AddRecoveryServicesProviderInputPropertiesOrRecoveryServicesProviderProperties
### Properties
* **allowedScenarios**: string[] (ReadOnly): The scenarios allowed on this provider.
* **authenticationIdentityDetails**: [IdentityProviderDetails](#identityproviderdetails) (ReadOnly): The authentication identity details.
* **authenticationIdentityInput**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): The identity provider input for DRA authentication.
* **biosId**: string: The Bios Id of the machine.
* **connectionStatus**: string (ReadOnly): A value indicating whether DRA is responsive.
* **dataPlaneAuthenticationIdentityDetails**: [IdentityProviderDetails](#identityproviderdetails) (ReadOnly): The data plane authentication identity details.
* **dataPlaneAuthenticationIdentityInput**: [IdentityProviderInput](#identityproviderinput) (WriteOnly): The identity provider input for data plane authentication.
* **draIdentifier**: string (ReadOnly): The DRA Id.
* **fabricFriendlyName**: string (ReadOnly): The fabric friendly name.
* **fabricType**: string (ReadOnly): Type of the site.
* **friendlyName**: string (ReadOnly): Friendly name of the DRA.
* **healthErrorDetails**: [HealthError](#healtherror)[] (ReadOnly): The recovery services provider health error details.
* **lastHeartBeat**: string (ReadOnly): Time when last heartbeat was sent by the DRA.
* **machineId**: string: The Id of the machine where the provider is getting added.
* **machineName**: string (Required): The name of the machine where the provider is getting added.
* **protectedItemCount**: int (ReadOnly): Number of protected VMs currently managed by the DRA.
* **providerVersion**: string (ReadOnly): The provider version.
* **providerVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): The provider version details.
* **providerVersionExpiryDate**: string (ReadOnly): Expiry date of the version.
* **providerVersionState**: string (ReadOnly): DRA version status.
* **resourceAccessIdentityDetails**: [IdentityProviderDetails](#identityproviderdetails) (ReadOnly): The resource access identity details.
* **resourceAccessIdentityInput**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): The identity provider input for resource access.
* **serverVersion**: string (ReadOnly): The fabric provider.

## AddVCenterRequestPropertiesOrVCenterProperties
### Properties
* **discoveryStatus**: string (ReadOnly): The VCenter discovery status.
* **fabricArmResourceName**: string (ReadOnly): The ARM resource name of the fabric containing this VCenter.
* **friendlyName**: string: The friendly name of the vCenter.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors for this VCenter.
* **infrastructureId**: string (ReadOnly): The infrastructure Id of vCenter.
* **internalId**: string (ReadOnly): VCenter internal ID.
* **ipAddress**: string: The IP address of the vCenter to be discovered.
* **lastHeartbeat**: string (ReadOnly): The time when the last heartbeat was received by vCenter.
* **port**: string: The port number for discovery.
* **processServerId**: string: The process server Id from where the discovery is orchestrated.
* **runAsAccountId**: string: The account Id which has privileges to discover the vCenter.

## AgentDetails
### Properties
* **agentId**: string (ReadOnly): The Id of the agent running on the server.
* **biosId**: string (ReadOnly): The machine BIOS Id.
* **disks**: [AgentDiskDetails](#agentdiskdetails)[] (ReadOnly): The disks.
* **fqdn**: string (ReadOnly): The machine FQDN.
* **machineId**: string (ReadOnly): The Id of the machine to which the agent is registered.

## AgentDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskId**: string (ReadOnly): The disk Id.
* **diskName**: string (ReadOnly): The disk name.
* **isOSDisk**: string (ReadOnly): A value indicating whether the disk is the OS disk.
* **lunId**: int (ReadOnly): The lun of disk.

## ASRTask
### Properties
* **allowedActions**: string[]: The state/actions applicable on this task.
* **customDetails**: [TaskTypeDetails](#tasktypedetails): The custom task details based on the task type.
* **endTime**: string: The end time.
* **errors**: [JobErrorDetails](#joberrordetails)[]: The task error details.
* **friendlyName**: string: The name.
* **groupTaskCustomDetails**: [GroupTaskDetails](#grouptaskdetails): The custom task details based on the task type, if the task type is GroupTaskDetails or one of the types derived from it.
* **name**: string: The unique Task name.
* **startTime**: string: The start time.
* **state**: string: The State. It is one of these values - NotStarted, InProgress, Succeeded, Failed, Cancelled, Suspended or Other.
* **stateDescription**: string: The description of the task state. For example - For Succeeded state, description can be Completed, PartiallySucceeded, CompletedWithInformation or Skipped.
* **taskId**: string: The Id.
* **taskType**: string: The type of task. Details in CustomDetails property depend on this type.

## AzureToAzureVmSyncedConfigDetails
### Properties
* **inputEndpoints**: [InputEndpoint](#inputendpoint)[]: The Azure VM input endpoints.
* **tags**: [AzureToAzureVmSyncedConfigDetailsTags](#azuretoazurevmsyncedconfigdetailstags): The Azure VM tags.

## AzureToAzureVmSyncedConfigDetailsTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureVmDiskDetails
### Properties
* **customTargetDiskName**: string: The custom target Azure disk name.
* **diskEncryptionSetId**: string: The DiskEncryptionSet ARM ID.
* **diskId**: string: The disk resource id.
* **lunId**: string: Ordinal\LunId of the disk for the Azure VM.
* **maxSizeMB**: string: Max side in MB.
* **targetDiskLocation**: string: Blob uri of the Azure disk.
* **targetDiskName**: string: The target Azure disk name.
* **vhdId**: string: The VHD id.
* **vhdName**: string: VHD name.
* **vhdType**: string: VHD type.

## ConfigurationSettings
* **Discriminator**: instanceType

### Base Properties
### ReplicationGroupDetails
#### Properties
* **instanceType**: 'ReplicationGroupDetails' (Required): Gets the class type. Overridden in derived classes.

### VmmVirtualMachineDetails
#### Properties
* **instanceType**: 'VmmVirtualMachine' (Required): Gets the class type. Overridden in derived classes.

### VMwareVirtualMachineDetails
#### Properties
* **agentGeneratedId**: string: The ID generated by the InMage agent after it gets installed on guest. This is the ID to be used during InMage CreateProtection.
* **agentInstalled**: string: The value indicating if InMage scout agent is installed on guest.
* **agentVersion**: string: The agent version.
* **discoveryType**: string: A value indicating the discovery type of the machine. Value can be vCenter or physical.
* **diskDetails**: [InMageDiskDetails](#inmagediskdetails)[]: The disk details.
* **instanceType**: 'VMwareVirtualMachine' (Required): Gets the class type. Overridden in derived classes.
* **ipAddress**: string: The IP address.
* **osType**: string: The OsType installed on VM.
* **poweredOn**: string: The value indicating whether VM is powered on.
* **validationErrors**: [HealthError](#healtherror)[]: The validation errors.
* **vCenterInfrastructureId**: string: The VCenter infrastructure Id.


## ConfigureAlertRequestPropertiesOrAlertProperties
### Properties
* **customEmailAddresses**: string[]: The custom email address for sending emails.
* **locale**: string: The locale for the email notification.
* **sendToOwners**: string: A value indicating whether to send email to subscription administrator.

## CreateNetworkMappingInputPropertiesOrNetworkMappingProperties
### Properties
* **fabricSpecificDetails**: [FabricSpecificCreateNetworkMappingInput](#fabricspecificcreatenetworkmappinginput) (WriteOnly): Fabric specific input properties.
* **fabricSpecificSettings**: [NetworkMappingFabricSpecificSettings](#networkmappingfabricspecificsettings) (ReadOnly): The fabric specific settings.
* **primaryFabricFriendlyName**: string (ReadOnly): The primary fabric friendly name.
* **primaryNetworkFriendlyName**: string (ReadOnly): The primary network friendly name.
* **primaryNetworkId**: string (ReadOnly): The primary network id for network mapping.
* **recoveryFabricArmId**: string (ReadOnly): The recovery fabric ARM id.
* **recoveryFabricFriendlyName**: string (ReadOnly): The recovery fabric friendly name.
* **recoveryFabricName**: string (WriteOnly): Recovery fabric Name.
* **recoveryNetworkFriendlyName**: string (ReadOnly): The recovery network friendly name.
* **recoveryNetworkId**: string (Required): Recovery network Id.
* **state**: string (ReadOnly): The pairing state for network mapping.

## CreatePolicyInputPropertiesOrPolicyProperties
### Properties
* **friendlyName**: string (ReadOnly): The FriendlyName.
* **providerSpecificDetails**: [PolicyProviderSpecificDetails](#policyproviderspecificdetails) (ReadOnly): The ReplicationChannelSetting.
* **providerSpecificInput**: [PolicyProviderSpecificInput](#policyproviderspecificinput) (WriteOnly): The ReplicationProviderSettings.

## CreateProtectionContainerInputPropertiesOrProtectionContainerProperties
### Properties
* **fabricFriendlyName**: string (ReadOnly): Fabric friendly name.
* **fabricSpecificDetails**: [ProtectionContainerFabricSpecificDetails](#protectioncontainerfabricspecificdetails) (ReadOnly): Fabric specific details.
* **fabricType**: string (ReadOnly): The fabric type.
* **friendlyName**: string (ReadOnly): The name.
* **pairingStatus**: string (ReadOnly): The pairing status of this cloud.
* **protectedItemCount**: int (ReadOnly): Number of protected PEs.
* **providerSpecificInput**: [ReplicationProviderSpecificContainerCreationInput](#replicationproviderspecificcontainercreationinput)[] (WriteOnly): Provider specific inputs for container creation.
* **role**: string (ReadOnly): The role of this cloud.

## CreateProtectionContainerMappingInputPropertiesOrProtectionContainerMappingProperties
### Properties
* **health**: string (ReadOnly): Health of pairing.
* **healthErrorDetails**: [HealthError](#healtherror)[] (ReadOnly): Health error.
* **policyFriendlyName**: string (ReadOnly): Friendly name of replication policy.
* **policyId**: string: Applicable policy.
* **providerSpecificDetails**: [ProtectionContainerMappingProviderSpecificDetails](#protectioncontainermappingproviderspecificdetails) (ReadOnly): Provider specific provider details.
* **providerSpecificInput**: [ReplicationProviderSpecificContainerMappingInput](#replicationproviderspecificcontainermappinginput) (WriteOnly): Provider specific input for pairing.
* **sourceFabricFriendlyName**: string (ReadOnly): Friendly name of source fabric.
* **sourceProtectionContainerFriendlyName**: string (ReadOnly): Friendly name of source protection container.
* **state**: string (ReadOnly): Association Status.
* **targetFabricFriendlyName**: string (ReadOnly): Friendly name of target fabric.
* **targetProtectionContainerFriendlyName**: string (ReadOnly): Friendly name of paired container.
* **targetProtectionContainerId**: string: The target unique protection container name.

## CreateProtectionIntentPropertiesOrReplicationProtectionIntentProperties
### Properties
* **creationTimeUTC**: string (ReadOnly): The creation time in UTC.
* **friendlyName**: string (ReadOnly): The name.
* **isActive**: bool (ReadOnly): A value indicating whether the intent object is active.
* **jobId**: string (ReadOnly): The job Id.
* **jobState**: string (ReadOnly): The job state.
* **providerSpecificDetails**: [CreateProtectionIntentProviderSpecificDetailsOrReplicationProtectionIntentProviderSpecificSettings](#createprotectionintentproviderspecificdetailsorreplicationprotectionintentproviderspecificsettings): The ReplicationProviderInput. For A2A provider, it will be A2ACreateProtectionIntentInput object.

## CreateProtectionIntentProviderSpecificDetailsOrReplicationProtectionIntentProviderSpecificSettings
* **Discriminator**: instanceType

### Base Properties
### A2ACreateProtectionIntentInputOrA2AReplicationIntentDetails
#### Properties
* **autoProtectionOfDataDisk**: 'Disabled' | 'Enabled' | string: A value indicating whether the auto protection is enabled.
* **diskEncryptionInfo**: [DiskEncryptionInfo](#diskencryptioninfo): The recovery disk encryption information (for two pass flows).
* **fabricObjectId**: string (Required): The fabric specific object Id of the virtual machine.
* **instanceType**: 'A2A' (Required): The class type.
* **multiVmGroupId**: string: The multi vm group id.
* **multiVmGroupName**: string: The multi vm group name.
* **primaryLocation**: string (Required): The primary location for the virtual machine.
* **primaryStagingStorageAccount**: [StorageAccountCustomDetails](#storageaccountcustomdetails) (ReadOnly): The primary staging storage account details.
* **primaryStagingStorageAccountCustomInput**: [StorageAccountCustomDetails](#storageaccountcustomdetails) (WriteOnly): The primary staging storage account input.
* **protectionProfile**: [ProtectionProfileCustomDetails](#protectionprofilecustomdetails) (ReadOnly): The protection profile custom details.
* **protectionProfileCustomInput**: [ProtectionProfileCustomDetails](#protectionprofilecustomdetails) (WriteOnly): The protection profile custom inputs.
* **recoveryAvailabilitySet**: [RecoveryAvailabilitySetCustomDetails](#recoveryavailabilitysetcustomdetails) (ReadOnly): The recovery availability set details.
* **recoveryAvailabilitySetCustomInput**: [RecoveryAvailabilitySetCustomDetails](#recoveryavailabilitysetcustomdetails) (WriteOnly): The recovery availability set input.
* **recoveryAvailabilityType**: 'AvailabilitySet' | 'AvailabilityZone' | 'Single' | string (Required): The recovery availability type of the virtual machine.
* **recoveryAvailabilityZone**: string: The recovery availability zone.
* **recoveryBootDiagStorageAccount**: [StorageAccountCustomDetails](#storageaccountcustomdetails): The boot diagnostic storage account.
* **recoveryLocation**: string (Required): The recovery location for the virtual machine.
* **recoveryProximityPlacementGroup**: [RecoveryProximityPlacementGroupCustomDetails](#recoveryproximityplacementgroupcustomdetails) (ReadOnly): The recovery proximity placement group custom details.
* **recoveryProximityPlacementGroupCustomInput**: [RecoveryProximityPlacementGroupCustomDetails](#recoveryproximityplacementgroupcustomdetails) (WriteOnly): The recovery proximity placement group custom input.
* **recoveryResourceGroupId**: string (Required): The recovery resource group Id. Valid for V2 scenarios.
* **recoverySubscriptionId**: string (Required): The recovery subscription Id of the virtual machine.
* **recoveryVirtualNetwork**: [RecoveryVirtualNetworkCustomDetails](#recoveryvirtualnetworkcustomdetails) (ReadOnly): The recovery virtual network details.
* **recoveryVirtualNetworkCustomInput**: [RecoveryVirtualNetworkCustomDetails](#recoveryvirtualnetworkcustomdetails) (WriteOnly): The recovery virtual network input.
* **vmDisks**: [A2AProtectionIntentDiskInputDetails](#a2aprotectionintentdiskinputdetails)[]: The list of vm disk inputs.
* **vmManagedDisks**: [A2AProtectionIntentManagedDiskInputDetails](#a2aprotectionintentmanageddiskinputdetails)[]: The list of vm managed disk inputs.


## CreateRecoveryPlanInputPropertiesOrRecoveryPlanProperties
### Properties
* **allowedOperations**: string[] (ReadOnly): The list of allowed operations.
* **currentScenario**: [CurrentScenarioDetails](#currentscenariodetails) (ReadOnly): The current scenario details.
* **currentScenarioStatus**: string (ReadOnly): The recovery plan status.
* **currentScenarioStatusDescription**: string (ReadOnly): The recovery plan status description.
* **failoverDeploymentModel**: 'Classic' | 'NotApplicable' | 'ResourceManager' | string: The failover deployment model.
* **friendlyName**: string (ReadOnly): The friendly name.
* **groups**: [RecoveryPlanGroup](#recoveryplangroup)[] (Required): The recovery plan groups.
* **lastPlannedFailoverTime**: string (ReadOnly): The start time of the last planned failover.
* **lastTestFailoverTime**: string (ReadOnly): The start time of the last test failover.
* **lastUnplannedFailoverTime**: string (ReadOnly): The start time of the last unplanned failover.
* **primaryFabricFriendlyName**: string (ReadOnly): The primary fabric friendly name.
* **primaryFabricId**: string (Required): The primary fabric Id.
* **providerSpecificDetails**: [RecoveryPlanProviderSpecificDetails](#recoveryplanproviderspecificdetails)[] (ReadOnly): The provider id and provider specific details.
* **providerSpecificInput**: [RecoveryPlanProviderSpecificInput](#recoveryplanproviderspecificinput)[] (WriteOnly): The provider specific input.
* **recoveryFabricFriendlyName**: string (ReadOnly): The recovery fabric friendly name.
* **recoveryFabricId**: string (Required): The recovery fabric Id.
* **replicationProviders**: string[] (ReadOnly): The list of replication providers.

## CurrentJobDetails
### Properties
* **jobId**: string (ReadOnly): The ARM Id of the job being executed.
* **jobName**: string (ReadOnly): The job name.
* **startTime**: string (ReadOnly): The start time of the job.

## CurrentScenarioDetails
### Properties
* **jobId**: string: ARM Id of the job being executed.
* **scenarioName**: string: Scenario name.
* **startTime**: string: Start time of the workflow.

## DataStore
### Properties
* **capacity**: string: The capacity of data store in GBs.
* **freeSpace**: string: The free space of data store in GBs.
* **symbolicName**: string: The symbolic name of data store.
* **type**: string: The type of data store.
* **uuid**: string: The uuid of data store.

## DiskDetails
### Properties
* **maxSizeMB**: int: The hard disk max size in MB.
* **vhdId**: string: The VHD Id.
* **vhdName**: string: The VHD name.
* **vhdType**: string: The type of the volume.

## DiskEncryptionInfo
### Properties
* **diskEncryptionKeyInfo**: [DiskEncryptionKeyInfo](#diskencryptionkeyinfo): The recovery KeyVault reference for secret.
* **keyEncryptionKeyInfo**: [KeyEncryptionKeyInfo](#keyencryptionkeyinfo): The recovery KeyVault reference for key.

## DiskEncryptionKeyInfo
### Properties
* **keyVaultResourceArmId**: string: The KeyVault resource ARM id for secret.
* **secretIdentifier**: string: The secret url / identifier.

## DiskVolumeDetails
### Properties
* **label**: string: The volume label.
* **name**: string: The volume name.

## DraDetails
### Properties
* **biosId**: string (ReadOnly): The DRA Bios Id.
* **forwardProtectedItemCount**: int (ReadOnly): The count of protected items which are protected in forward direction.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' | string (ReadOnly): The health.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The DRA Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the DRA.
* **name**: string (ReadOnly): The DRA name.
* **reverseProtectedItemCount**: int (ReadOnly): The count of protected items which are protected in reverse direction.
* **version**: string (ReadOnly): The version.

## EnableMigrationInputPropertiesOrMigrationItemProperties
### Properties
* **allowedOperations**: 'DisableMigration' | 'Migrate' | 'StartResync' | 'TestMigrate' | 'TestMigrateCleanup' | string[] (ReadOnly): The allowed operations on the migration item based on the current migration state of the item.
* **currentJob**: [CurrentJobDetails](#currentjobdetails) (ReadOnly): The current job details.
* **eventCorrelationId**: string (ReadOnly): The correlation Id for events associated with this migration item.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' | string (ReadOnly): The consolidated health.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The list of health errors.
* **lastTestMigrationStatus**: string (ReadOnly): The status of the last test migration.
* **lastTestMigrationTime**: string (ReadOnly): The last test migration time.
* **machineName**: string (ReadOnly): The on-premise virtual machine name.
* **migrationState**: 'DisableMigrationFailed' | 'DisableMigrationInProgress' | 'EnableMigrationFailed' | 'EnableMigrationInProgress' | 'InitialSeedingFailed' | 'InitialSeedingInProgress' | 'MigrationFailed' | 'MigrationInProgress' | 'MigrationSucceeded' | 'None' | 'Replicating' | string (ReadOnly): The migration status.
* **migrationStateDescription**: string (ReadOnly): The migration state description.
* **policyFriendlyName**: string (ReadOnly): The name of policy governing this item.
* **policyId**: string (Required): The policy Id.
* **providerSpecificDetails**: [EnableMigrationProviderSpecificInputOrMigrationProviderSpecificSettings](#enablemigrationproviderspecificinputormigrationproviderspecificsettings) (Required): The provider specific details.
* **testMigrateState**: 'None' | 'TestMigrationCleanupInProgress' | 'TestMigrationFailed' | 'TestMigrationInProgress' | 'TestMigrationSucceeded' | string (ReadOnly): The test migrate state.
* **testMigrateStateDescription**: string (ReadOnly): The test migrate state description.

## EnableMigrationProviderSpecificInputOrMigrationProviderSpecificSettings
* **Discriminator**: instanceType

### Base Properties
### VMwareCbtEnableMigrationInputOrVMwareCbtMigrationDetails
#### Properties
* **dataMoverRunAsAccountId**: string (Required): The data mover run as account Id.
* **disksToInclude**: [VMwareCbtDiskInput](#vmwarecbtdiskinput)[] (Required, WriteOnly): The disks to include list.
* **firmwareType**: string (ReadOnly): The firmware type.
* **initialSeedingProgressPercentage**: int (ReadOnly): The initial seeding progress percentage.
* **initialSeedingRetryCount**: int (ReadOnly): The initial seeding retry count.
* **instanceType**: 'VMwareCbt' (Required): The class type.
* **lastRecoveryPointId**: string (ReadOnly): The last recovery point Id.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer' | string: License type.
* **migrationProgressPercentage**: int (ReadOnly): The migration progress percentage.
* **migrationRecoveryPointId**: string (ReadOnly): The recovery point Id to which the VM was migrated.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **performAutoResync**: string: A value indicating whether auto resync is to be done.
* **protectedDisks**: [VMwareCbtProtectedDiskDetails](#vmwarecbtprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required.
* **resyncRetryCount**: int (ReadOnly): The resync retry count.
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' | string (ReadOnly): The resync state.
* **seedDiskTags**: [VMwareCbtEnableMigrationInputSeedDiskTags](#vmwarecbtenablemigrationinputseeddisktags): The tags for the seed disks.
* **snapshotRunAsAccountId**: string (Required): The snapshot run as account Id.
* **sqlServerLicenseType**: 'AHUB' | 'NoLicenseType' | 'NotSpecified' | 'PAYG' | string: The SQL Server license type.
* **targetAvailabilitySetId**: string: The target availability set ARM Id.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetBootDiagnosticsStorageAccountId**: string: The target boot diagnostics storage account ARM Id.
* **targetDiskTags**: [VMwareCbtEnableMigrationInputTargetDiskTags](#vmwarecbtenablemigrationinputtargetdisktags): The tags for the target disks.
* **targetGeneration**: string (ReadOnly): The target generation.
* **targetLocation**: string (ReadOnly): The target location.
* **targetNetworkId**: string (Required): The target network ARM Id.
* **targetNicTags**: [VMwareCbtEnableMigrationInputTargetNicTags](#vmwarecbtenablemigrationinputtargetnictags): The tags for the target NICs.
* **targetProximityPlacementGroupId**: string: The target proximity placement group ARM Id.
* **targetResourceGroupId**: string (Required): The target resource group ARM Id.
* **targetSubnetName**: string (WriteOnly): The target subnet name.
* **targetVmName**: string: The target VM name.
* **targetVmSize**: string: The target VM size.
* **targetVmTags**: [VMwareCbtEnableMigrationInputTargetVmTags](#vmwarecbtenablemigrationinputtargetvmtags): The target VM tags.
* **vmNics**: [VMwareCbtNicDetails](#vmwarecbtnicdetails)[] (ReadOnly): The network details.
* **vmwareMachineId**: string (Required): The ARM Id of the VM discovered in VMware.


## EnableProtectionInputPropertiesOrReplicationProtectedItemProperties
### Properties
* **activeLocation**: string (ReadOnly): The Current active location of the PE.
* **allowedOperations**: string[] (ReadOnly): The allowed operations on the Replication protected item.
* **currentScenario**: [CurrentScenarioDetails](#currentscenariodetails) (ReadOnly): The current scenario.
* **eventCorrelationId**: string (ReadOnly): The correlation Id for events associated with this protected item.
* **failoverHealth**: string (ReadOnly): The consolidated failover health for the VM.
* **failoverRecoveryPointId**: string (ReadOnly): The recovery point ARM Id to which the Vm was failed over.
* **friendlyName**: string (ReadOnly): The name.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): List of health errors.
* **lastSuccessfulFailoverTime**: string (ReadOnly): The Last successful failover time.
* **lastSuccessfulTestFailoverTime**: string (ReadOnly): The Last successful test failover time.
* **policyFriendlyName**: string (ReadOnly): The name of Policy governing this PE.
* **policyId**: string: The Policy Id.
* **primaryFabricFriendlyName**: string (ReadOnly): The friendly name of the primary fabric.
* **primaryFabricProvider**: string (ReadOnly): The fabric provider of the primary fabric.
* **primaryProtectionContainerFriendlyName**: string (ReadOnly): The name of primary protection container friendly name.
* **protectableItemId**: string: The protectable item Id.
* **protectedItemType**: string (ReadOnly): The type of protected item type.
* **protectionState**: string (ReadOnly): The protection status.
* **protectionStateDescription**: string (ReadOnly): The protection state description.
* **providerSpecificDetails**: [EnableProtectionProviderSpecificInputOrReplicationProviderSpecificSettings](#enableprotectionproviderspecificinputorreplicationproviderspecificsettings): The ReplicationProviderInput. For HyperVReplicaAzure provider, it will be AzureEnableProtectionInput object. For San provider, it will be SanEnableProtectionInput object. For HyperVReplicaAzure provider, it can be null.
* **recoveryContainerId**: string (ReadOnly): The recovery container Id.
* **recoveryFabricFriendlyName**: string (ReadOnly): The friendly name of recovery fabric.
* **recoveryFabricId**: string (ReadOnly): The Arm Id of recovery fabric.
* **recoveryProtectionContainerFriendlyName**: string (ReadOnly): The name of recovery container friendly name.
* **recoveryServicesProviderId**: string (ReadOnly): The recovery provider ARM Id.
* **replicationHealth**: string (ReadOnly): The consolidated protection health for the VM taking any issues with SRS as well as all the replication units associated with the VM's replication group into account. This is a string representation of the ProtectionHealth enumeration.
* **testFailoverState**: string (ReadOnly): The Test failover state.
* **testFailoverStateDescription**: string (ReadOnly): The Test failover state description.

## EnableProtectionProviderSpecificInputOrReplicationProviderSpecificSettings
* **Discriminator**: instanceType

### Base Properties
### A2AEnableProtectionInputOrA2AReplicationDetails
#### Properties
* **agentCertificateExpiryDate**: string (ReadOnly): Agent certificate expiry date.
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentVersion**: string (ReadOnly): The agent version.
* **autoProtectionOfDataDisk**: 'Disabled' | 'Enabled' | string (ReadOnly): A value indicating whether the auto protection is enabled.
* **diskEncryptionInfo**: [DiskEncryptionInfo](#diskencryptioninfo) (WriteOnly): The recovery disk encryption information (for two pass flows).
* **fabricObjectId**: string (Required): The fabric specific object Id of the virtual machine.
* **initialPrimaryFabricLocation**: string (ReadOnly): The initial primary fabric location.
* **initialPrimaryZone**: string (ReadOnly): The initial primary availability zone.
* **initialRecoveryFabricLocation**: string (ReadOnly): The initial recovery fabric location.
* **initialRecoveryZone**: string (ReadOnly): The initial recovery availability zone.
* **instanceType**: 'A2A' (Required): The class type.
* **isReplicationAgentCertificateUpdateRequired**: bool (ReadOnly): A value indicating whether agent certificate update is required.
* **isReplicationAgentUpdateRequired**: bool (ReadOnly): A value indicating whether replication agent update is required.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The time (in UTC) when the last RPO value was calculated by Protection Service.
* **lifecycleId**: string (ReadOnly): An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
* **managementId**: string (ReadOnly): The management Id.
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **multiVmGroupCreateOption**: 'AutoCreated' | 'UserSpecified' | string (ReadOnly): Whether Multi VM group is auto created or specified by user.
* **multiVmGroupId**: string: The multi vm group id.
* **multiVmGroupName**: string: The multi vm group name.
* **osType**: string (ReadOnly): The type of operating system.
* **primaryAvailabilityZone**: string (ReadOnly): The primary availability zone.
* **primaryFabricLocation**: string (ReadOnly): Primary fabric location.
* **protectedDisks**: [A2AProtectedDiskDetails](#a2aprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectedManagedDisks**: [A2AProtectedManagedDiskDetails](#a2aprotectedmanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySet**: string (ReadOnly): The recovery availability set.
* **recoveryAvailabilitySetId**: string (WriteOnly): The recovery availability set Id.
* **recoveryAvailabilityZone**: string: The recovery availability zone.
* **recoveryAzureGeneration**: string (ReadOnly): The recovery azure generation.
* **recoveryAzureNetworkId**: string (WriteOnly): The recovery Azure virtual network ARM id.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The recovery resource group.
* **recoveryAzureVMName**: string (ReadOnly): The name of recovery virtual machine.
* **recoveryAzureVMSize**: string (ReadOnly): The size of recovery virtual machine.
* **recoveryBootDiagStorageAccountId**: string: The boot diagnostic storage account.
* **recoveryCloudService**: string (ReadOnly): The recovery cloud service.
* **recoveryCloudServiceId**: string (WriteOnly): The recovery cloud service Id. Valid for V1 scenarios.
* **recoveryContainerId**: string (WriteOnly): The recovery container Id.
* **recoveryFabricLocation**: string (ReadOnly): The recovery fabric location.
* **recoveryFabricObjectId**: string (ReadOnly): The recovery fabric object Id.
* **recoveryProximityPlacementGroupId**: string: The recovery proximity placement group Id.
* **recoveryResourceGroupId**: string (WriteOnly): The recovery resource group Id. Valid for V2 scenarios.
* **recoverySubnetName**: string (WriteOnly): The recovery subnet name.
* **recoveryVirtualMachineScaleSetId**: string: The virtual machine scale set Id.
* **rpoInSeconds**: int (ReadOnly): The last RPO value in seconds.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The recovery virtual network.
* **selectedTfoAzureNetworkId**: string (ReadOnly): The test failover virtual network.
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly): The test failover fabric object Id.
* **tfoAzureVMName**: string (ReadOnly): The test failover vm name.
* **unprotectedDisks**: [A2AUnprotectedDiskDetails](#a2aunprotecteddiskdetails)[] (ReadOnly): The list of unprotected disks.
* **vmDisks**: [A2AVmDiskInputDetails](#a2avmdiskinputdetails)[] (WriteOnly): The list of vm disk details.
* **vmEncryptionType**: 'NotEncrypted' | 'OnePassEncrypted' | 'TwoPassEncrypted' | string (ReadOnly): The encryption type of the VM.
* **vmManagedDisks**: [A2AVmManagedDiskInputDetails](#a2avmmanageddiskinputdetails)[] (WriteOnly): The list of vm managed disk details.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The virtual machine nic details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.
* **vmSyncedConfigDetails**: [AzureToAzureVmSyncedConfigDetails](#azuretoazurevmsyncedconfigdetails) (ReadOnly): The synced configuration details.

### A2ACrossClusterMigrationEnableProtectionInputOrA2ACrossClusterMigrationReplicationDetails
#### Properties
* **fabricObjectId**: string: The fabric specific object Id of the virtual machine.
* **instanceType**: 'A2ACrossClusterMigration' (Required): The class type.
* **lifecycleId**: string (ReadOnly): An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
* **osType**: string (ReadOnly): The type of operating system.
* **primaryFabricLocation**: string (ReadOnly): Primary fabric location.
* **recoveryContainerId**: string (WriteOnly): The recovery container Id.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaReplicationDetails
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012' (Required): The class type.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaBlueReplicationDetails
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012R2' (Required): The class type.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaAzureEnableProtectionInputOrHyperVReplicaAzureReplicationDetails
#### Properties
* **azureVmDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **diskEncryptionSetId**: string (WriteOnly): The DiskEncryptionSet ARM Id.
* **disksToInclude**: string[] (WriteOnly): The list of VHD Ids of disks to be protected.
* **disksToIncludeForManagedDisks**: [HyperVReplicaAzureDiskInputDetails](#hypervreplicaazurediskinputdetails)[] (WriteOnly): The disks to include list for managed disks.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string (WriteOnly): The DiskType.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
* **encryption**: string (ReadOnly): The encryption info.
* **hvHostVmId**: string (WriteOnly): The Hyper-V host VM Id.
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaAzure' (Required): The class type.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer' | string: License type.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): The operating system info.
* **osType**: string (WriteOnly): The OS type associated with VM.
* **protectedManagedDisks**: [HyperVReplicaAzureManagedDiskDetails](#hypervreplicaazuremanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVmName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **rpoInSeconds**: int (ReadOnly): Last RPO value.
* **seedManagedDiskTags**: [HyperVReplicaAzureEnableProtectionInputSeedManagedDiskTags](#hypervreplicaazureenableprotectioninputseedmanageddisktags): The tags for the seed managed disks.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **sqlServerLicenseType**: 'AHUB' | 'NoLicenseType' | 'NotSpecified' | 'PAYG' | string: The SQL Server license type.
* **targetAvailabilitySetId**: string (WriteOnly): The target availability set ARM Id for resource manager deployment.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure VM Name.
* **targetManagedDiskTags**: [HyperVReplicaAzureEnableProtectionInputTargetManagedDiskTags](#hypervreplicaazureenableprotectioninputtargetmanageddisktags): The tags for the target managed disks.
* **targetNicTags**: [HyperVReplicaAzureEnableProtectionInputTargetNicTags](#hypervreplicaazureenableprotectioninputtargetnictags): The tags for the target NICs.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetStorageAccountId**: string (WriteOnly): The storage account Id.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **targetVmTags**: [HyperVReplicaAzureEnableProtectionInputTargetVmTags](#hypervreplicaazureenableprotectioninputtargetvmtags): The target VM tags.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **useManagedDisksForReplication**: string (WriteOnly): A value indicating whether managed disks should be used during replication.
* **vhdId**: string (WriteOnly): The OS disk VHD id associated with VM.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmName**: string (WriteOnly): The VM Name.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaBaseReplicationDetails
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaBaseReplicationDetails' (Required): The class type.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMageEnableProtectionInputOrInMageReplicationDetails
#### Properties
* **activeSiteType**: string (ReadOnly): The active location of the VM. If the VM is being protected from Azure, this field will take values from { Azure, OnPrem }. If the VM is being protected between two data-centers, this field will be OnPrem always.
* **agentDetails**: [InMageAgentDetails](#inmageagentdetails) (ReadOnly): The agent details.
* **azureStorageAccountId**: string (ReadOnly): A value indicating the underlying Azure storage account. If the VM is not running in Azure, this value shall be set to null.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **consistencyPoints**: [InMageReplicationDetailsConsistencyPoints](#inmagereplicationdetailsconsistencypoints) (ReadOnly): The collection of Consistency points.
* **datastoreName**: string (WriteOnly): The target datastore name.
* **datastores**: string[] (ReadOnly): The datastores of the on-premise machine Value can be list of strings that contain datastore names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): The enable disk exclusion input.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMage' (Required): The class type.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAdditionalStatsAvailable**: bool (ReadOnly): A value indicating whether additional IR stats are available or not.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **masterTargetId**: string (Required): The Master Target Id.
* **multiVmGroupId**: string (Required): The multi VM group Id.
* **multiVmGroupName**: string (Required): The multi VM group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether the multi vm sync is enabled or disabled.
* **osDetails**: [OSDiskDetails](#osdiskdetails) (ReadOnly): The OS details.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string (Required): The Process Server Id.
* **protectedDisks**: [InMageProtectedDiskDetails](#inmageprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **rebootAfterUpdateStatus**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): The resync details of the machine.
* **retentionDrive**: string (Required, WriteOnly): The retention drive to use on the MT.
* **retentionWindowEnd**: string (ReadOnly): The retention window end time.
* **retentionWindowStart**: string (ReadOnly): The retention window start time.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **totalDataTransferred**: int (ReadOnly): The total transferred data in bytes.
* **totalProgressHealth**: string (ReadOnly): The progress health.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors.
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vmFriendlyName**: string (WriteOnly): The VM Name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMageAzureV2EnableProtectionInputOrInMageAzureV2ReplicationDetails
#### Properties
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentVersion**: string (ReadOnly): The agent version.
* **azureVMDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **azureVmGeneration**: string (ReadOnly): The target generation for this protected item.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **datastores**: string[] (ReadOnly): The datastores of the on-premise machine. Value can be list of strings that contain datastore names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine. Value can be vCenter or physical.
* **diskEncryptionSetId**: string (WriteOnly): The DiskEncryptionSet ARM Id.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: [InMageAzureV2DiskInputDetails](#inmageazurev2diskinputdetails)[] (WriteOnly): The disks to include list.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string (WriteOnly): The DiskType.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target VM after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
* **firmwareType**: string (ReadOnly): The firmware type of this protected item.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMageAzureV2' (Required): The class type.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAdditionalStatsAvailable**: bool (ReadOnly): A value indicating whether additional IR stats are available or not.
* **isAgentUpdateRequired**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **isRebootAfterUpdateRequired**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer' | string: License type.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **masterTargetId**: string: The Master target Id.
* **multiVmGroupId**: string: The multi VM group Id.
* **multiVmGroupName**: string: The multi VM group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi vm sync is enabled or disabled.
* **osDiskId**: string (ReadOnly): The id of the disk containing the OS.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string: The Process Server Id.
* **processServerName**: string (ReadOnly): The process server name.
* **protectedDisks**: [InMageAzureV2ProtectedDiskDetails](#inmageazurev2protecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectedManagedDisks**: [InMageAzureV2ManagedDiskDetails](#inmageazurev2manageddiskdetails)[] (ReadOnly): The list of protected managed disks.
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
* **seedManagedDiskTags**: [InMageAzureV2EnableProtectionInputSeedManagedDiskTags](#inmageazurev2enableprotectioninputseedmanageddisktags): The tags for the seed managed disks.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **selectedTfoAzureNetworkId**: string (ReadOnly): The test failover virtual network.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **sqlServerLicenseType**: 'AHUB' | 'NoLicenseType' | 'NotSpecified' | 'PAYG' | string: The SQL Server license type.
* **storageAccountId**: string (WriteOnly): The storage account Id.
* **targetAvailabilitySetId**: string (WriteOnly): The target availability set ARM Id for resource manager deployment.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure VM Name.
* **targetManagedDiskTags**: [InMageAzureV2EnableProtectionInputTargetManagedDiskTags](#inmageazurev2enableprotectioninputtargetmanageddisktags): The tags for the target managed disks.
* **targetNicTags**: [InMageAzureV2EnableProtectionInputTargetNicTags](#inmageazurev2enableprotectioninputtargetnictags): The tags for the target NICs.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetVmId**: string (ReadOnly): The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **targetVmTags**: [InMageAzureV2EnableProtectionInputTargetVmTags](#inmageazurev2enableprotectioninputtargetvmtags): The target VM tags.
* **totalDataTransferred**: int (ReadOnly): The total transferred data in bytes.
* **totalProgressHealth**: string (ReadOnly): The progress health.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **useManagedDisks**: string (ReadOnly): A value indicating whether managed disks should be used during failover.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors.
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vhdName**: string (ReadOnly): The OS disk VHD name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMageRcmEnableProtectionInputOrInMageRcmReplicationDetails
#### Properties
* **agentUpgradeAttemptToVersion**: string (ReadOnly): The agent version to which last agent upgrade was attempted.
* **agentUpgradeBlockingErrorDetails**: [InMageRcmAgentUpgradeBlockingErrorDetails](#inmagercmagentupgradeblockingerrordetails)[] (ReadOnly): The agent upgrade blocking error information.
* **agentUpgradeJobId**: string (ReadOnly): The agent upgrade job Id.
* **agentUpgradeState**: 'Commit' | 'Completed' | 'None' | 'Started' | string (ReadOnly): The agent auto upgrade state.
* **allocatedMemoryInMB**: int (ReadOnly): The allocated memory in MB.
* **discoveredVmDetails**: [InMageRcmDiscoveredProtectedVmDetails](#inmagercmdiscoveredprotectedvmdetails) (ReadOnly): The discovered VM details.
* **discoveryType**: string (ReadOnly): The type of the discovered VM.
* **disksDefault**: [InMageRcmDisksDefaultInput](#inmagercmdisksdefaultinput) (WriteOnly): The default disk input.
* **disksToInclude**: [InMageRcmDiskInput](#inmagercmdiskinput)[] (WriteOnly): The disks to include list.
* **fabricDiscoveryMachineId**: string (Required): The ARM Id of discovered machine.
* **failoverRecoveryPointId**: string (ReadOnly): The recovery point Id to which the VM was failed over.
* **firmwareType**: string (ReadOnly): The firmware type.
* **initialReplicationProcessedBytes**: int (ReadOnly): The initial replication processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **initialReplicationProgressHealth**: 'InProgress' | 'NoProgress' | 'None' | 'SlowProgress' | string (ReadOnly): The initial replication progress health.
* **initialReplicationProgressPercentage**: int (ReadOnly): The initial replication progress percentage. This is calculated based on total bytes processed for all disks in the source VM.
* **initialReplicationTransferredBytes**: int (ReadOnly): The initial replication transferred bytes from source VM to azure for all selected disks on source VM.
* **instanceType**: 'InMageRcm' (Required): The class type.
* **internalIdentifier**: string (ReadOnly): The virtual machine internal identifier.
* **isAgentRegistrationSuccessfulAfterFailover**: bool (ReadOnly): A value indicating whether agent registration was successful after failover.
* **isLastUpgradeSuccessful**: string (ReadOnly): A value indicating whether last agent upgrade was successful or not.
* **lastAgentUpgradeErrorDetails**: [InMageRcmLastAgentUpgradeErrorDetails](#inmagercmlastagentupgradeerrordetails)[] (ReadOnly): The last agent upgrade error information.
* **lastAgentUpgradeType**: string (ReadOnly): The last agent upgrade type.
* **lastRecoveryPointId**: string (ReadOnly): The last recovery point Id.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last recovery point objective calculated time.
* **lastRpoInSeconds**: int (ReadOnly): The last recovery point objective value.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer' | string: The license type.
* **mobilityAgentDetails**: [InMageRcmMobilityAgentDetails](#inmagercmmobilityagentdetails) (ReadOnly): The mobility agent information.
* **multiVmGroupName**: string: The multi VM group name.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **primaryNicIpAddress**: string (ReadOnly): The IP address of the primary network interface.
* **processorCoreCount**: int (ReadOnly): The processor core count.
* **processServerId**: string (Required): The process server Id.
* **processServerName**: string (ReadOnly): The process server name.
* **protectedDisks**: [InMageRcmProtectedDiskDetails](#inmagercmprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **resyncProcessedBytes**: int (ReadOnly): The resync processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **resyncProgressHealth**: 'InProgress' | 'NoProgress' | 'None' | 'SlowProgress' | string (ReadOnly): The resync progress health.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage. This is calculated based on total bytes processed for all disks in the source VM.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required.
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' | string (ReadOnly): The resync state.
* **resyncTransferredBytes**: int (ReadOnly): The resync transferred bytes from source VM to azure for all selected disks on source VM.
* **runAsAccountId**: string: The run-as account Id.
* **targetAvailabilitySetId**: string: The target availability set ARM Id.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetBootDiagnosticsStorageAccountId**: string: The target boot diagnostics storage account ARM Id.
* **targetGeneration**: string (ReadOnly): The target generation.
* **targetLocation**: string (ReadOnly): The target location.
* **targetNetworkId**: string: The selected target network ARM Id.
* **targetProximityPlacementGroupId**: string: The target proximity placement group Id.
* **targetResourceGroupId**: string (Required): The target resource group ARM Id.
* **targetSubnetName**: string (WriteOnly): The selected target subnet name.
* **targetVmName**: string: The target VM name.
* **targetVmSize**: string: The target VM size.
* **testNetworkId**: string: The selected test network ARM Id.
* **testSubnetName**: string (WriteOnly): The selected test subnet name.
* **vmNics**: [InMageRcmNicDetails](#inmagercmnicdetails)[] (ReadOnly): The network details.

### InMageRcmFailbackReplicationDetails
#### Properties
* **azureVirtualMachineId**: string (ReadOnly): The ARM Id of the azure VM.
* **discoveredVmDetails**: [InMageRcmFailbackDiscoveredProtectedVmDetails](#inmagercmfailbackdiscoveredprotectedvmdetails) (ReadOnly): The discovered VM information.
* **initialReplicationProcessedBytes**: int (ReadOnly): The initial replication processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **initialReplicationProgressHealth**: 'InProgress' | 'NoProgress' | 'None' | 'SlowProgress' | string (ReadOnly): The initial replication progress health.
* **initialReplicationProgressPercentage**: int (ReadOnly): The initial replication progress percentage.
* **initialReplicationTransferredBytes**: int (ReadOnly): The initial replication transferred bytes from source VM to target for all selected disks on source VM.
* **instanceType**: 'InMageRcmFailback' (Required): The class type.
* **internalIdentifier**: string (ReadOnly): The virtual machine internal identifier.
* **isAgentRegistrationSuccessfulAfterFailover**: bool (ReadOnly): A value indicating whether agent registration was successful after failover.
* **lastPlannedFailoverStartTime**: string (ReadOnly): The last planned failover start time.
* **lastPlannedFailoverStatus**: 'Cancelled' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The last planned failover status.
* **lastUsedPolicyFriendlyName**: string (ReadOnly): The policy friendly name used by the forward replication.
* **lastUsedPolicyId**: string (ReadOnly): The policy Id used by the forward replication.
* **logStorageAccountId**: string (ReadOnly): The log storage account ARM Id.
* **mobilityAgentDetails**: [InMageRcmFailbackMobilityAgentDetails](#inmagercmfailbackmobilityagentdetails) (ReadOnly): The mobility agent information.
* **multiVmGroupName**: string (ReadOnly): The multi VM group name.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **protectedDisks**: [InMageRcmFailbackProtectedDiskDetails](#inmagercmfailbackprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **reprotectAgentId**: string (ReadOnly): The reprotect agent Id.
* **reprotectAgentName**: string (ReadOnly): The reprotect agent name.
* **resyncProcessedBytes**: int (ReadOnly): The resync processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **resyncProgressHealth**: 'InProgress' | 'NoProgress' | 'None' | 'SlowProgress' | string (ReadOnly): The resync progress health.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required.
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' | string (ReadOnly): The resync state.
* **resyncTransferredBytes**: int (ReadOnly): The resync transferred bytes from source VM to target for all selected disks on source VM.
* **targetDataStoreName**: string (ReadOnly): The target datastore name.
* **targetvCenterId**: string (ReadOnly): The target vCenter Id.
* **targetVmName**: string (ReadOnly): The target VM name.
* **vmNics**: [InMageRcmFailbackNicDetails](#inmagercmfailbacknicdetails)[] (ReadOnly): The network details.


## EncryptionDetails
### Properties
* **kekCertExpiryDate**: string: The key encryption key certificate expiry date.
* **kekCertThumbprint**: string: The key encryption key certificate thumbprint.
* **kekState**: string: The key encryption key state for the Vmm.

## EventProperties
### Properties
* **affectedObjectCorrelationId**: string: The affected object correlationId for the event.
* **affectedObjectFriendlyName**: string: The friendly name of the source of the event on which it is raised (for example, VM, VMM etc).
* **description**: string: The event name.
* **eventCode**: string: The Id of the monitoring event.
* **eventSpecificDetails**: [EventSpecificDetails](#eventspecificdetails): The event specific settings.
* **eventType**: string: The type of the event. for example: VM Health, Server Health, Job Failure etc.
* **fabricId**: string: The ARM ID of the fabric.
* **healthErrors**: [HealthError](#healtherror)[]: The list of errors / warnings capturing details associated with the issue(s).
* **providerSpecificDetails**: [EventProviderSpecificDetails](#eventproviderspecificdetails): The provider specific settings.
* **severity**: string: The severity of the event.
* **timeOfOccurrence**: string: The time of occurrence of the event.

## EventProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### A2AEventDetails
#### Properties
* **fabricLocation**: string: The fabric location.
* **fabricName**: string: Fabric arm name.
* **fabricObjectId**: string: The azure vm arm id.
* **instanceType**: 'A2A' (Required): Gets the class type. Overridden in derived classes.
* **protectedItemName**: string: The protected item arm name.
* **remoteFabricLocation**: string: Remote fabric location.
* **remoteFabricName**: string: Remote fabric arm name.

### HyperVReplica2012EventDetails
#### Properties
* **containerName**: string: The container friendly name.
* **fabricName**: string: The fabric friendly name.
* **instanceType**: 'HyperVReplica2012' (Required): Gets the class type. Overridden in derived classes.
* **remoteContainerName**: string: The remote container name.
* **remoteFabricName**: string: The remote fabric name.

### HyperVReplica2012R2EventDetails
#### Properties
* **containerName**: string: The container friendly name.
* **fabricName**: string: The fabric friendly name.
* **instanceType**: 'HyperVReplica2012R2' (Required): Gets the class type. Overridden in derived classes.
* **remoteContainerName**: string: The remote container name.
* **remoteFabricName**: string: The remote fabric name.

### HyperVReplicaAzureEventDetails
#### Properties
* **containerName**: string: The container friendly name.
* **fabricName**: string: The fabric friendly name.
* **instanceType**: 'HyperVReplicaAzure' (Required): Gets the class type. Overridden in derived classes.
* **remoteContainerName**: string: The remote container name.

### HyperVReplicaBaseEventDetails
#### Properties
* **containerName**: string: The container friendly name.
* **fabricName**: string: The fabric friendly name.
* **instanceType**: 'HyperVReplicaBaseEventDetails' (Required): Gets the class type. Overridden in derived classes.
* **remoteContainerName**: string: The remote container name.
* **remoteFabricName**: string: The remote fabric name.

### InMageAzureV2EventDetails
#### Properties
* **category**: string: InMage Event Category.
* **component**: string: InMage Event Component.
* **correctiveAction**: string: Corrective Action string for the event.
* **details**: string: InMage Event Details.
* **eventType**: string: InMage Event type. Takes one of the values of InMageDataContract.InMageMonitoringEventType.
* **instanceType**: 'InMageAzureV2' (Required): Gets the class type. Overridden in derived classes.
* **siteName**: string: VMware Site name.
* **summary**: string: InMage Event Summary.

### InMageRcmEventDetails
#### Properties
* **applianceName**: string (ReadOnly): The appliance name.
* **componentDisplayName**: string (ReadOnly): The component display name.
* **fabricName**: string (ReadOnly): The fabric name.
* **instanceType**: 'InMageRcm' (Required): Gets the class type. Overridden in derived classes.
* **jobId**: string (ReadOnly): The job Id.
* **latestAgentVersion**: string (ReadOnly): The latest agent version.
* **protectedItemName**: string (ReadOnly): The protected item name.
* **serverType**: string (ReadOnly): The server type.
* **vmName**: string (ReadOnly): The protected item name.

### InMageRcmFailbackEventDetails
#### Properties
* **applianceName**: string (ReadOnly): The appliance name.
* **componentDisplayName**: string (ReadOnly): The component display name.
* **instanceType**: 'InMageRcmFailback' (Required): Gets the class type. Overridden in derived classes.
* **protectedItemName**: string (ReadOnly): The protected item name.
* **serverType**: string (ReadOnly): The server type.
* **vmName**: string (ReadOnly): The protected item name.

### VMwareCbtEventDetails
#### Properties
* **instanceType**: 'VMwareCbt' (Required): Gets the class type. Overridden in derived classes.
* **migrationItemName**: string (ReadOnly): The migration item name.


## EventSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### JobStatusEventDetails
#### Properties
* **affectedObjectType**: string: AffectedObjectType for the event.
* **instanceType**: 'JobStatus' (Required): Gets the class type. Overridden in derived classes.
* **jobFriendlyName**: string: JobName for the Event.
* **jobId**: string: Job arm id for the event.
* **jobStatus**: string: JobStatus for the Event.


## FabricCreationInputPropertiesOrFabricProperties
### Properties
* **bcdrState**: string (ReadOnly): BCDR state of the fabric.
* **customDetails**: [FabricSpecificCreationInputOrFabricSpecificDetails](#fabricspecificcreationinputorfabricspecificdetails): Fabric provider specific creation input.
* **encryptionDetails**: [EncryptionDetails](#encryptiondetails) (ReadOnly): Encryption details for the fabric.
* **friendlyName**: string (ReadOnly): Friendly name of the fabric.
* **health**: string (ReadOnly): Health of fabric.
* **healthErrorDetails**: [HealthError](#healtherror)[] (ReadOnly): Fabric health error details.
* **internalIdentifier**: string (ReadOnly): Dra Registration Id.
* **rolloverEncryptionDetails**: [EncryptionDetails](#encryptiondetails) (ReadOnly): Rollover encryption details for the fabric.

## FabricSpecificCreateNetworkMappingInput
* **Discriminator**: instanceType

### Base Properties
### AzureToAzureCreateNetworkMappingInput
#### Properties
* **instanceType**: 'AzureToAzure' (Required): The instance type.
* **primaryNetworkId**: string (Required): The primary azure vnet Id.

### VmmToAzureCreateNetworkMappingInput
#### Properties
* **instanceType**: 'VmmToAzure' (Required): The instance type.

### VmmToVmmCreateNetworkMappingInput
#### Properties
* **instanceType**: 'VmmToVmm' (Required): The instance type.


## FabricSpecificCreationInputOrFabricSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### AzureFabricCreationInputOrAzureFabricSpecificDetails
#### Properties
* **containerIds**: string[] (ReadOnly): The container Ids for the Azure fabric.
* **instanceType**: 'Azure' (Required): Gets the class type.
* **location**: string: The Location.
* **zones**: [A2AZoneDetails](#a2azonedetails)[] (ReadOnly): The zones.

### HyperVSiteDetails
#### Properties
* **hyperVHosts**: [HyperVHostDetails](#hypervhostdetails)[] (ReadOnly): The list of Hyper-V hosts associated with the fabric.
* **instanceType**: 'HyperVSite' (Required): Gets the class type.

### InMageRcmFabricCreationInputOrInMageRcmFabricSpecificDetails
#### Properties
* **agentDetails**: [AgentDetails](#agentdetails)[] (ReadOnly): The list of agent details.
* **controlPlaneUri**: string (ReadOnly): The control plane Uri.
* **dataPlaneUri**: string (ReadOnly): The data plane Uri.
* **dras**: [DraDetails](#dradetails)[] (ReadOnly): The list of DRAs.
* **instanceType**: 'InMageRcm' (Required): Gets the class type.
* **marsAgents**: [MarsAgentDetails](#marsagentdetails)[] (ReadOnly): The list of Mars agents.
* **physicalSiteId**: string (Required): The ARM Id of the physical site.
* **processServers**: [ProcessServerDetails](#processserverdetails)[] (ReadOnly): The list of process servers.
* **pushInstallers**: [PushInstallerDetails](#pushinstallerdetails)[] (ReadOnly): The list of push installers.
* **rcmProxies**: [RcmProxyDetails](#rcmproxydetails)[] (ReadOnly): The list of RCM proxies.
* **replicationAgents**: [ReplicationAgentDetails](#replicationagentdetails)[] (ReadOnly): The list of replication agents.
* **reprotectAgents**: [ReprotectAgentDetails](#reprotectagentdetails)[] (ReadOnly): The list of reprotect agents.
* **serviceContainerId**: string (ReadOnly): The service container Id.
* **serviceEndpoint**: string (ReadOnly): The service endpoint.
* **serviceResourceId**: string (ReadOnly): The service resource Id.
* **sourceAgentIdentity**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): The identity provider input for source agent authentication.
* **sourceAgentIdentityDetails**: [IdentityProviderDetails](#identityproviderdetails) (ReadOnly): The source agent identity details.
* **vmwareSiteId**: string (Required): The ARM Id of the VMware site.

### VmmDetails
#### Properties
* **instanceType**: 'VMM' (Required): Gets the class type.

### VMwareDetails
#### Properties
* **agentCount**: string (ReadOnly): The number of source and target servers configured to talk to this CS.
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentVersion**: string (ReadOnly): The agent Version.
* **agentVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): The agent version details.
* **availableMemoryInBytes**: int (ReadOnly): The available memory.
* **availableSpaceInBytes**: int (ReadOnly): The available space.
* **cpuLoad**: string (ReadOnly): The percentage of the CPU load.
* **cpuLoadStatus**: string (ReadOnly): The CPU load status.
* **csServiceStatus**: string (ReadOnly): The CS service status.
* **databaseServerLoad**: string (ReadOnly): The database server load.
* **databaseServerLoadStatus**: string (ReadOnly): The database server load status.
* **hostName**: string (ReadOnly): The host name.
* **instanceType**: 'VMware' (Required): Gets the class type.
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
* **versionStatus**: string (ReadOnly): Version status.
* **webLoad**: string (ReadOnly): The web load.
* **webLoadStatus**: string (ReadOnly): The web load status.

### VMwareV2FabricCreationInputOrVMwareV2FabricSpecificDetails
#### Properties
* **instanceType**: 'VMwareV2' (Required): Gets the class type.
* **migrationSolutionId**: string (Required): The ARM Id of the migration solution.
* **physicalSiteId**: string: The ARM Id of the physical site.
* **processServers**: [ProcessServerDetails](#processserverdetails)[] (ReadOnly): The list of process servers.
* **serviceContainerId**: string (ReadOnly): The service container Id.
* **serviceEndpoint**: string (ReadOnly): The service endpoint.
* **serviceResourceId**: string (ReadOnly): The service resource Id.
* **vmwareSiteId**: string: The ARM Id of the VMware site.


## FailoverReplicationProtectedItemDetails
### Properties
* **friendlyName**: string: The friendly name.
* **name**: string: The name.
* **networkConnectionStatus**: string: The network connection status.
* **networkFriendlyName**: string: The network friendly name.
* **recoveryPointId**: string: The recovery point Id.
* **recoveryPointTime**: string: The recovery point time.
* **subnet**: string: The network subnet.
* **testVmFriendlyName**: string: The test Vm friendly name.
* **testVmName**: string: The test Vm name.

## GroupTaskDetails
* **Discriminator**: instanceType

### Base Properties
* **childTasks**: [ASRTask](#asrtask)[]: The child tasks.
### InlineWorkflowTaskDetails
#### Properties
* **instanceType**: 'InlineWorkflowTaskDetails' (Required): The type of task details.
* **workflowIds**: string[]: The list of child workflow ids.

### RecoveryPlanShutdownGroupTaskDetails
#### Properties
* **instanceType**: 'RecoveryPlanShutdownGroupTaskDetails' (Required): The type of task details.


## HealthError
### Properties
* **creationTimeUtc**: string: Error creation time (UTC).
* **customerResolvability**: 'Allowed' | 'NotAllowed' | string: Value indicating whether the health error is customer resolvable.
* **entityId**: string: ID of the entity.
* **errorCategory**: string: Category of error.
* **errorCode**: string: Error code.
* **errorId**: string: The health error unique id.
* **errorLevel**: string: Level of error.
* **errorMessage**: string: Error message.
* **errorSource**: string: Source of error.
* **errorType**: string: Type of error.
* **innerHealthErrors**: [InnerHealthError](#innerhealtherror)[]: The inner health errors. HealthError having a list of HealthError as child errors is problematic. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
* **possibleCauses**: string: Possible causes of error.
* **recommendedAction**: string: Recommended action to resolve error.
* **recoveryProviderErrorMessage**: string: DRA error message.
* **summaryMessage**: string: Summary message of the entity.

## HyperVHostDetails
### Properties
* **id**: string (ReadOnly): The Hyper-V host Id.
* **marsAgentVersion**: string (ReadOnly): The Mars agent version.
* **name**: string (ReadOnly): The Hyper-V host name.

## HyperVReplicaAzureDiskInputDetails
### Properties
* **diskEncryptionSetId**: string: The DiskEncryptionSet ARM ID.
* **diskId**: string: The DiskId.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string: The DiskType.
* **logStorageAccountId**: string: The LogStorageAccountId.

## HyperVReplicaAzureEnableProtectionInputSeedManagedDiskTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HyperVReplicaAzureEnableProtectionInputTargetManagedDiskTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HyperVReplicaAzureEnableProtectionInputTargetNicTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HyperVReplicaAzureEnableProtectionInputTargetVmTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HyperVReplicaAzureManagedDiskDetails
### Properties
* **diskEncryptionSetId**: string: The disk encryption set ARM Id.
* **diskId**: string: The disk Id.
* **replicaDiskType**: string: The replica disk type.
* **seedManagedDiskId**: string: Seed managed disk Id.

## IdentityProviderDetails
### Properties
* **aadAuthority**: string: The base authority for Azure Active Directory authentication.
* **applicationId**: string: The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **audience**: string: The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **objectId**: string: The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **tenantId**: string: The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

## IdentityProviderInput
### Properties
* **aadAuthority**: string (Required): The base authority for Azure Active Directory authentication.
* **applicationId**: string (Required): The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **audience**: string (Required): The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **objectId**: string (Required): The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **tenantId**: string (Required): The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

## InconsistentVmDetails
### Properties
* **cloudName**: string: The Cloud name.
* **details**: string[]: The list of details regarding state of the Protected Entity in SRS and On prem.
* **errorIds**: string[]: The list of error ids.
* **vmName**: string: The Vm name.

## InitialReplicationDetails
### Properties
* **initialReplicationProgressPercentage**: string: The initial replication progress percentage.
* **initialReplicationType**: string: Initial replication type.

## InMageAgentDetails
### Properties
* **agentExpiryDate**: string: Agent expiry date.
* **agentUpdateStatus**: string: A value indicating whether installed agent needs to be updated.
* **agentVersion**: string: The agent version.
* **postUpdateRebootStatus**: string: A value indicating whether reboot is required after update is applied.

## InMageAzureV2DiskInputDetails
### Properties
* **diskEncryptionSetId**: string: The DiskEncryptionSet ARM ID.
* **diskId**: string: The DiskId.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string: The DiskType.
* **logStorageAccountId**: string: The LogStorageAccountId.

## InMageAzureV2EnableProtectionInputSeedManagedDiskTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageAzureV2EnableProtectionInputTargetManagedDiskTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageAzureV2EnableProtectionInputTargetNicTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageAzureV2EnableProtectionInputTargetVmTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageAzureV2ManagedDiskDetails
### Properties
* **diskEncryptionSetId**: string: The DiskEncryptionSet ARM ID.
* **diskId**: string: The disk id.
* **replicaDiskType**: string: The replica disk type.
* **seedManagedDiskId**: string: Seed managed disk Id.
* **targetDiskName**: string: The target disk name.

## InMageAzureV2ProtectedDiskDetails
### Properties
* **diskCapacityInBytes**: int: The disk capacity in bytes.
* **diskId**: string: The disk id.
* **diskName**: string: The disk name.
* **diskResized**: string: A value indicating whether disk is resized.
* **fileSystemCapacityInBytes**: int: The disk file system capacity in bytes.
* **healthErrorCode**: string: The health error code for the disk.
* **lastRpoCalculatedTime**: string: The last RPO calculated time.
* **progressHealth**: string: The Progress Health.
* **progressStatus**: string: The Progress Status.
* **protectionStage**: string: The protection stage.
* **psDataInMegaBytes**: int: The PS data transit in MB.
* **resyncDurationInSeconds**: int: The resync duration in seconds.
* **resyncLast15MinutesTransferredBytes**: int: The resync last 15 minutes transferred bytes.
* **resyncLastDataTransferTimeUTC**: string: The last data transfer time in UTC.
* **resyncProcessedBytes**: int: The resync processed bytes.
* **resyncProgressPercentage**: int: The resync progress percentage.
* **resyncRequired**: string: A value indicating whether resync is required for this disk.
* **resyncStartTime**: string: The resync start time.
* **resyncTotalTransferredBytes**: int: The resync total transferred bytes.
* **rpoInSeconds**: int: The RPO in seconds.
* **sourceDataInMegaBytes**: int: The source data transit in MB.
* **targetDataInMegaBytes**: int: The target data transit in MB.

## InMageDiskDetails
### Properties
* **diskConfiguration**: string: Whether disk is dynamic disk or basic disk.
* **diskId**: string: The disk Id.
* **diskName**: string: The disk name.
* **diskSizeInMB**: string: The disk size in MB.
* **diskType**: string: Whether disk is system disk or data disk.
* **volumeList**: [DiskVolumeDetails](#diskvolumedetails)[]: Volumes of the disk.

## InMageDiskExclusionInput
### Properties
* **diskSignatureOptions**: [InMageDiskSignatureExclusionOptions](#inmagedisksignatureexclusionoptions)[]: The guest disk signature based option for disk exclusion.
* **volumeOptions**: [InMageVolumeExclusionOptions](#inmagevolumeexclusionoptions)[]: The volume label based option for disk exclusion.

## InMageDiskSignatureExclusionOptions
### Properties
* **diskSignature**: string: The guest signature of disk to be excluded from replication.

## InMageProtectedDiskDetails
### Properties
* **diskCapacityInBytes**: int: The disk capacity in bytes.
* **diskId**: string: The disk id.
* **diskName**: string: The disk name.
* **diskResized**: string: A value indicating whether disk is resized.
* **fileSystemCapacityInBytes**: int: The file system capacity in bytes.
* **healthErrorCode**: string: The health error code for the disk.
* **lastRpoCalculatedTime**: string: The last RPO calculated time.
* **progressHealth**: string: The Progress Health.
* **progressStatus**: string: The Progress Status.
* **protectionStage**: string: The protection stage.
* **psDataInMB**: int: The PS data transit in MB.
* **resyncDurationInSeconds**: int: The resync duration in seconds.
* **resyncLast15MinutesTransferredBytes**: int: The resync last 15 minutes transferred bytes.
* **resyncLastDataTransferTimeUTC**: string: The last data transfer time in UTC.
* **resyncProcessedBytes**: int: The resync processed bytes.
* **resyncProgressPercentage**: int: The resync progress percentage.
* **resyncRequired**: string: A value indicating whether resync is required for this disk.
* **resyncStartTime**: string: The resync start time.
* **resyncTotalTransferredBytes**: int: The resync total transferred bytes.
* **rpoInSeconds**: int: The RPO in seconds.
* **sourceDataInMB**: int: The source data transit in MB.
* **targetDataInMB**: int: The target data transit in MB.

## InMageRcmAgentUpgradeBlockingErrorDetails
### Properties
* **errorCode**: string (ReadOnly): The error code.
* **errorMessage**: string (ReadOnly): The error message.
* **errorMessageParameters**: [InMageRcmAgentUpgradeBlockingErrorDetailsErrorMessageParameters](#inmagercmagentupgradeblockingerrordetailserrormessageparameters) (ReadOnly): The error message parameters.
* **errorTags**: [InMageRcmAgentUpgradeBlockingErrorDetailsErrorTags](#inmagercmagentupgradeblockingerrordetailserrortags) (ReadOnly): The error tags.
* **possibleCauses**: string (ReadOnly): The possible causes.
* **recommendedAction**: string (ReadOnly): The recommended action.

## InMageRcmAgentUpgradeBlockingErrorDetailsErrorMessageParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageRcmAgentUpgradeBlockingErrorDetailsErrorTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageRcmDiscoveredProtectedVmDetails
### Properties
* **createdTimestamp**: string (ReadOnly): The SDS created timestamp.
* **datastores**: string[] (ReadOnly): The list of datastores.
* **ipAddresses**: string[] (ReadOnly): The list of IP addresses.
* **isDeleted**: bool (ReadOnly): A value indicating whether the VM is deleted.
* **lastDiscoveryTimeInUtc**: string (ReadOnly): The last time when SDS information discovered in SRS.
* **osName**: string (ReadOnly): The VM's OS name.
* **powerStatus**: string (ReadOnly): The VM power status.
* **updatedTimestamp**: string (ReadOnly): The SDS updated timestamp.
* **vCenterFqdn**: string (ReadOnly): The VCenter fqdn.
* **vCenterId**: string (ReadOnly): The VCenter Id.
* **vmFqdn**: string (ReadOnly): The VM fqdn.
* **vmwareToolsStatus**: string (ReadOnly): The VMware tools status.

## InMageRcmDiskInput
### Properties
* **diskEncryptionSetId**: string: The DiskEncryptionSet ARM Id.
* **diskId**: string (Required): The disk Id.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string (Required): The disk type.
* **logStorageAccountId**: string (Required): The log storage account ARM Id.

## InMageRcmDisksDefaultInput
### Properties
* **diskEncryptionSetId**: string: The DiskEncryptionSet ARM Id.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string (Required): The disk type.
* **logStorageAccountId**: string (Required): The log storage account ARM Id.

## InMageRcmFailbackDiscoveredProtectedVmDetails
### Properties
* **createdTimestamp**: string (ReadOnly): The SDS created timestamp.
* **datastores**: string[] (ReadOnly): The list of datastores.
* **ipAddresses**: string[] (ReadOnly): The list of IP addresses.
* **isDeleted**: bool (ReadOnly): A value indicating whether the VM is deleted.
* **lastDiscoveryTimeInUtc**: string (ReadOnly): The last time when SDS information discovered in SRS.
* **osName**: string (ReadOnly): The VM's OS name.
* **powerStatus**: string (ReadOnly): The VM power status.
* **updatedTimestamp**: string (ReadOnly): The SDS updated timestamp.
* **vCenterFqdn**: string (ReadOnly): The VCenter fqdn.
* **vCenterId**: string (ReadOnly): The VCenter Id.
* **vmFqdn**: string (ReadOnly): The VM fqdn.
* **vmwareToolsStatus**: string (ReadOnly): The VMware tools status.

## InMageRcmFailbackMobilityAgentDetails
### Properties
* **agentVersionExpiryDate**: string (ReadOnly): The agent version expiry date.
* **driverVersion**: string (ReadOnly): The driver version.
* **driverVersionExpiryDate**: string (ReadOnly): The driver version expiry date.
* **isUpgradeable**: string (ReadOnly): A value indicating whether agent is upgradeable or not.
* **lastHeartbeatUtc**: string (ReadOnly): The time of the last heartbeat received from the agent.
* **latestUpgradableVersionWithoutReboot**: string (ReadOnly): The latest upgradeable version available without reboot.
* **latestVersion**: string (ReadOnly): The latest agent version available.
* **reasonsBlockingUpgrade**: 'AgentNoHeartbeat' | 'AlreadyOnLatestVersion' | 'DistroIsNotReported' | 'DistroNotSupportedForUpgrade' | 'IncompatibleApplianceVersion' | 'InvalidAgentVersion' | 'InvalidDriverVersion' | 'MissingUpgradePath' | 'NotProtected' | 'ProcessServerNoHeartbeat' | 'RcmProxyNoHeartbeat' | 'RebootRequired' | 'Unknown' | 'UnsupportedProtectionScenario' | string[] (ReadOnly): The whether update is possible or not.
* **version**: string (ReadOnly): The agent version.

## InMageRcmFailbackNicDetails
### Properties
* **adapterType**: string (ReadOnly): The adapter type.
* **macAddress**: string (ReadOnly): The mac address.
* **networkName**: string (ReadOnly): The network name.
* **sourceIpAddress**: string (ReadOnly): The IP address.

## InMageRcmFailbackProtectedDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **dataPendingAtSourceAgentInMB**: int (ReadOnly): The data pending at source agent in MB.
* **dataPendingInLogDataStoreInMB**: int (ReadOnly): The data pending in log data store in MB.
* **diskId**: string (ReadOnly): The disk Id (reported by source agent).
* **diskName**: string (ReadOnly): The disk name.
* **diskUuid**: string (ReadOnly): The disk Uuid (reported by vCenter).
* **irDetails**: [InMageRcmFailbackSyncDetails](#inmagercmfailbacksyncdetails): The initial replication details.
* **isInitialReplicationComplete**: string (ReadOnly): A value indicating whether initial replication is complete or not.
* **isOSDisk**: string (ReadOnly): A value indicating whether the disk is the OS disk.
* **lastSyncTime**: string (ReadOnly): The last sync time.
* **resyncDetails**: [InMageRcmFailbackSyncDetails](#inmagercmfailbacksyncdetails): The resync details.

## InMageRcmFailbackSyncDetails
### Properties
* **last15MinutesTransferredBytes**: int (ReadOnly): The bytes transferred in last 15 minutes from source VM to target.
* **lastDataTransferTimeUtc**: string (ReadOnly): The time of the last data transfer from source VM to target.
* **lastRefreshTime**: string (ReadOnly): The last refresh time.
* **processedBytes**: int (ReadOnly): The total processed bytes. This includes bytes that are transferred from source VM to target and matched bytes.
* **progressHealth**: 'InProgress' | 'NoProgress' | 'None' | 'Queued' | 'SlowProgress' | string (ReadOnly): The progress health.
* **progressPercentage**: int (ReadOnly): Progress in percentage. Progress percentage is calculated based on processed bytes.
* **startTime**: string (ReadOnly): The start time.
* **transferredBytes**: int (ReadOnly): The transferred bytes from source VM to azure for the disk.

## InMageRcmLastAgentUpgradeErrorDetails
### Properties
* **errorCode**: string (ReadOnly): The error code.
* **errorMessage**: string (ReadOnly): The error message.
* **errorMessageParameters**: [InMageRcmLastAgentUpgradeErrorDetailsErrorMessageParameters](#inmagercmlastagentupgradeerrordetailserrormessageparameters) (ReadOnly): The error message parameters.
* **errorTags**: [InMageRcmLastAgentUpgradeErrorDetailsErrorTags](#inmagercmlastagentupgradeerrordetailserrortags) (ReadOnly): The error tags.
* **possibleCauses**: string (ReadOnly): The possible causes.
* **recommendedAction**: string (ReadOnly): The recommended action.

## InMageRcmLastAgentUpgradeErrorDetailsErrorMessageParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageRcmLastAgentUpgradeErrorDetailsErrorTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageRcmMobilityAgentDetails
### Properties
* **agentVersionExpiryDate**: string (ReadOnly): The agent version expiry date.
* **driverVersion**: string (ReadOnly): The driver version.
* **driverVersionExpiryDate**: string (ReadOnly): The driver version expiry date.
* **isUpgradeable**: string (ReadOnly): A value indicating whether agent is upgradeable or not.
* **lastHeartbeatUtc**: string (ReadOnly): The time of the last heartbeat received from the agent.
* **latestAgentReleaseDate**: string (ReadOnly): The latest agent version release date.
* **latestUpgradableVersionWithoutReboot**: string (ReadOnly): The latest upgradeable version available without reboot.
* **latestVersion**: string (ReadOnly): The latest agent version available.
* **reasonsBlockingUpgrade**: 'AgentNoHeartbeat' | 'AlreadyOnLatestVersion' | 'DistroIsNotReported' | 'DistroNotSupportedForUpgrade' | 'IncompatibleApplianceVersion' | 'InvalidAgentVersion' | 'InvalidDriverVersion' | 'MissingUpgradePath' | 'NotProtected' | 'ProcessServerNoHeartbeat' | 'RcmProxyNoHeartbeat' | 'RebootRequired' | 'Unknown' | 'UnsupportedProtectionScenario' | string[] (ReadOnly): The whether update is possible or not.
* **version**: string (ReadOnly): The agent version.

## InMageRcmNicDetails
### Properties
* **isPrimaryNic**: string: A value indicating whether this is the primary NIC.
* **isSelectedForFailover**: string: A value indicating whether this NIC is selected for failover.
* **nicId**: string (ReadOnly): The NIC Id.
* **sourceIPAddress**: string (ReadOnly): The source IP address.
* **sourceIPAddressType**: 'Dynamic' | 'Static' | string (ReadOnly): The source IP address type.
* **sourceNetworkId**: string (ReadOnly): Source network Id.
* **sourceSubnetName**: string (ReadOnly): Source subnet name.
* **targetIPAddress**: string: The target IP address.
* **targetIPAddressType**: 'Dynamic' | 'Static' | string: The target IP address type.
* **targetSubnetName**: string: Target subnet name.
* **testIPAddress**: string: The test IP address.
* **testIPAddressType**: 'Dynamic' | 'Static' | string: The test IP address type.
* **testSubnetName**: string: Test subnet name.

## InMageRcmProtectedDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **dataPendingAtSourceAgentInMB**: int (ReadOnly): The data pending at source agent in MB.
* **dataPendingInLogDataStoreInMB**: int (ReadOnly): The data pending in log data store in MB.
* **diskEncryptionSetId**: string (ReadOnly): The DiskEncryptionSet ARM Id.
* **diskId**: string (ReadOnly): The disk Id.
* **diskName**: string (ReadOnly): The disk name.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string: The disk type.
* **irDetails**: [InMageRcmSyncDetails](#inmagercmsyncdetails): The initial replication details.
* **isInitialReplicationComplete**: string (ReadOnly): A value indicating whether initial replication is complete or not.
* **isOSDisk**: string (ReadOnly): A value indicating whether the disk is the OS disk.
* **logStorageAccountId**: string (ReadOnly): The log storage account ARM Id.
* **resyncDetails**: [InMageRcmSyncDetails](#inmagercmsyncdetails): The resync details.
* **seedManagedDiskId**: string (ReadOnly): The ARM Id of the seed managed disk.
* **targetManagedDiskId**: string (ReadOnly): The ARM Id of the target managed disk.

## InMageRcmSyncDetails
### Properties
* **last15MinutesTransferredBytes**: int (ReadOnly): The bytes transferred in last 15 minutes from source VM to azure.
* **lastDataTransferTimeUtc**: string (ReadOnly): The time of the last data transfer from source VM to azure.
* **lastRefreshTime**: string (ReadOnly): The last refresh time.
* **processedBytes**: int (ReadOnly): The total processed bytes. This includes bytes that are transferred from source VM to azure and matched bytes.
* **progressHealth**: 'InProgress' | 'NoProgress' | 'None' | 'Queued' | 'SlowProgress' | string (ReadOnly): The progress health.
* **progressPercentage**: int (ReadOnly): Progress in percentage. Progress percentage is calculated based on processed bytes.
* **startTime**: string (ReadOnly): The start time.
* **transferredBytes**: int (ReadOnly): The transferred bytes from source VM to azure for the disk.

## InMageReplicationDetailsConsistencyPoints
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageVolumeExclusionOptions
### Properties
* **onlyExcludeIfSingleVolume**: string: The value indicating whether to exclude multi volume disk or not. If a disk has multiple volumes and one of the volume has label matching with VolumeLabel this disk will be excluded from replication if OnlyExcludeIfSingleVolume is false.
* **volumeLabel**: string: The volume label. The disk having any volume with this label will be excluded from replication.

## InnerHealthError
### Properties
* **creationTimeUtc**: string: Error creation time (UTC).
* **customerResolvability**: 'Allowed' | 'NotAllowed' | string: Value indicating whether the health error is customer resolvable.
* **entityId**: string: ID of the entity.
* **errorCategory**: string: Category of error.
* **errorCode**: string: Error code.
* **errorId**: string: The health error unique id.
* **errorLevel**: string: Level of error.
* **errorMessage**: string: Error message.
* **errorSource**: string: Source of error.
* **errorType**: string: Type of error.
* **possibleCauses**: string: Possible causes of error.
* **recommendedAction**: string: Recommended action to resolve error.
* **recoveryProviderErrorMessage**: string: DRA error message.
* **summaryMessage**: string: Summary message of the entity.

## InputEndpoint
### Properties
* **endpointName**: string
* **privatePort**: int
* **protocol**: string
* **publicPort**: int

## IPConfigDetails
### Properties
* **ipAddressType**: string
* **isPrimary**: bool
* **isSeletedForFailover**: bool
* **name**: string
* **recoveryIPAddressType**: string
* **recoveryLBBackendAddressPoolIds**: string[]
* **recoveryPublicIPAddressId**: string
* **recoveryStaticIPAddress**: string
* **recoverySubnetName**: string
* **staticIPAddress**: string
* **subnetName**: string
* **tfoLBBackendAddressPoolIds**: string[]
* **tfoPublicIPAddressId**: string
* **tfoStaticIPAddress**: string
* **tfoSubnetName**: string

## JobDetails
* **Discriminator**: instanceType

### Base Properties
* **affectedObjectDetails**: [JobDetailsAffectedObjectDetails](#jobdetailsaffectedobjectdetails): The affected object properties like source server, source cloud, target server, target cloud etc. based on the workflow object details.
### AsrJobDetails
#### Properties
* **instanceType**: 'AsrJobDetails' (Required): Gets the type of job details (see JobDetailsTypes enum for possible values).

### ExportJobDetails
#### Properties
* **blobUri**: string: BlobUri of the exported jobs.
* **instanceType**: 'ExportJobDetails' (Required): Gets the type of job details (see JobDetailsTypes enum for possible values).
* **sasToken**: string: The sas token to access blob.

### FailoverJobDetails
#### Properties
* **instanceType**: 'FailoverJobDetails' (Required): Gets the type of job details (see JobDetailsTypes enum for possible values).
* **protectedItemDetails**: [FailoverReplicationProtectedItemDetails](#failoverreplicationprotecteditemdetails)[]: The test VM details.

### SwitchProtectionJobDetails
#### Properties
* **instanceType**: 'SwitchProtectionJobDetails' (Required): Gets the type of job details (see JobDetailsTypes enum for possible values).
* **newReplicationProtectedItemId**: string: ARM Id of the new replication protected item.

### TestFailoverJobDetails
#### Properties
* **comments**: string: The test failover comments.
* **instanceType**: 'TestFailoverJobDetails' (Required): Gets the type of job details (see JobDetailsTypes enum for possible values).
* **networkFriendlyName**: string: The test network friendly name.
* **networkName**: string: The test network name.
* **networkType**: string: The test network type (see TestFailoverInput enum for possible values).
* **protectedItemDetails**: [FailoverReplicationProtectedItemDetails](#failoverreplicationprotecteditemdetails)[]: The test VM details.
* **testFailoverStatus**: string: The test failover status.


## JobDetailsAffectedObjectDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobErrorDetails
### Properties
* **creationTime**: string: The creation time of job error.
* **errorLevel**: string: Error level of error.
* **providerErrorDetails**: [ProviderError](#providererror): The Provider error details.
* **serviceErrorDetails**: [ServiceError](#serviceerror): The Service error details.
* **taskId**: string: The Id of the task.

## JobProperties
### Properties
* **activityId**: string: The activity id.
* **allowedActions**: string[]: The Allowed action the job.
* **customDetails**: [JobDetails](#jobdetails): The custom job details like test failover job details.
* **endTime**: string: The end time.
* **errors**: [JobErrorDetails](#joberrordetails)[]: The errors.
* **friendlyName**: string: The DisplayName.
* **scenarioName**: string: The ScenarioName.
* **startTime**: string: The start time.
* **state**: string: The status of the Job. It is one of these values - NotStarted, InProgress, Succeeded, Failed, Cancelled, Suspended or Other.
* **stateDescription**: string: The description of the state of the Job. For e.g. - For Succeeded state, description can be Completed, PartiallySucceeded, CompletedWithInformation or Skipped.
* **targetInstanceType**: string: The type of the affected object which is of Microsoft.Azure.SiteRecovery.V2015_11_10.AffectedObjectType class.
* **targetObjectId**: string: The affected Object Id.
* **targetObjectName**: string: The name of the affected object.
* **tasks**: [ASRTask](#asrtask)[]: The tasks.

## KeyEncryptionKeyInfo
### Properties
* **keyIdentifier**: string: The key URL / identifier.
* **keyVaultResourceArmId**: string: The KeyVault resource ARM Id for key.

## LogicalNetworkProperties
### Properties
* **friendlyName**: string: The Friendly Name.
* **logicalNetworkDefinitionsStatus**: string: A value indicating whether logical network definitions are isolated.
* **logicalNetworkUsage**: string: A value indicating whether logical network is used as private test network by test failover.
* **networkVirtualizationStatus**: string: A value indicating whether Network Virtualization is enabled for the logical network.

## MarsAgentDetails
### Properties
* **biosId**: string (ReadOnly): The Mars agent Bios Id.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The Mars agent Fqdn.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' | string (ReadOnly): The health of the Mars agent.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The Mars agent Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the Mars agent.
* **name**: string (ReadOnly): The Mars agent name.
* **version**: string (ReadOnly): The version.

## MasterTargetServer
### Properties
* **agentExpiryDate**: string: Agent expiry date.
* **agentVersion**: string: The version of the scout component on the server.
* **agentVersionDetails**: [VersionDetails](#versiondetails): Agent version details.
* **dataStores**: [DataStore](#datastore)[]: The list of data stores in the fabric.
* **diskCount**: int: Disk count of the master target.
* **healthErrors**: [HealthError](#healtherror)[]: Health errors.
* **id**: string: The server Id.
* **ipAddress**: string: The IP address of the server.
* **lastHeartbeat**: string: The last heartbeat received from the server.
* **marsAgentExpiryDate**: string: MARS agent expiry date.
* **marsAgentVersion**: string: MARS agent version.
* **marsAgentVersionDetails**: [VersionDetails](#versiondetails): Mars agent version details.
* **name**: string: The server name.
* **osType**: string: The OS type of the server.
* **osVersion**: string: OS Version of the master target.
* **retentionVolumes**: [RetentionVolume](#retentionvolume)[]: The retention volumes of Master target Server.
* **validationErrors**: [HealthError](#healtherror)[]: Validation errors.
* **versionStatus**: string: Version status.

## MigrationRecoveryPointProperties
### Properties
* **recoveryPointTime**: string (ReadOnly): The recovery point time.
* **recoveryPointType**: 'ApplicationConsistent' | 'CrashConsistent' | 'NotSpecified' | string (ReadOnly): The recovery point type.

## MobilityServiceUpdate
### Properties
* **osType**: string: The OS type.
* **rebootStatus**: string: The reboot status of the update - whether it is required or not.
* **version**: string: The version of the latest update.

## NetworkMappingFabricSpecificSettings
* **Discriminator**: instanceType

### Base Properties
### AzureToAzureNetworkMappingSettings
#### Properties
* **instanceType**: 'AzureToAzure' (Required): Gets the Instance type.
* **primaryFabricLocation**: string: The primary fabric location.
* **recoveryFabricLocation**: string: The recovery fabric location.

### VmmToAzureNetworkMappingSettings
#### Properties
* **instanceType**: 'VmmToAzure' (Required): Gets the Instance type.

### VmmToVmmNetworkMappingSettings
#### Properties
* **instanceType**: 'VmmToVmm' (Required): Gets the Instance type.


## NetworkProperties
### Properties
* **fabricType**: string: The Fabric Type.
* **friendlyName**: string: The Friendly Name.
* **networkType**: string: The Network Type.
* **subnets**: [Subnet](#subnet)[]: The List of subnets.

## OSDetails
### Properties
* **osEdition**: string: The OSEdition.
* **oSMajorVersion**: string: The OS Major Version.
* **oSMinorVersion**: string: The OS Minor Version.
* **osType**: string: VM Disk details.
* **oSVersion**: string: The OS Version.
* **productType**: string: Product type.

## OSDiskDetails
### Properties
* **osType**: string: The type of the OS on the VM.
* **osVhdId**: string: The id of the disk containing the OS.
* **vhdName**: string: The OS disk VHD name.

## PolicyProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### A2APolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency in minutes.
* **instanceType**: 'A2A' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string: A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int: The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int: The recovery point threshold in minutes.

### HyperVReplicaPolicyDetails
#### Properties
* **allowedAuthenticationType**: int: A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int: A value indicating the application consistent frequency.
* **compression**: string: A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string: A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012' (Required): Gets the class type. Overridden in derived classes.
* **offlineReplicationExportPath**: string: A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string: A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string: A value indicating the online IR start time.
* **recoveryPoints**: int: A value indicating the number of recovery points.
* **replicaDeletionOption**: string: A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
* **replicationPort**: int: A value indicating the recovery HTTPS port.

### HyperVReplicaBluePolicyDetails
#### Properties
* **allowedAuthenticationType**: int: A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int: A value indicating the application consistent frequency.
* **compression**: string: A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string: A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012R2' (Required): Gets the class type. Overridden in derived classes.
* **offlineReplicationExportPath**: string: A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string: A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string: A value indicating the online IR start time.
* **recoveryPoints**: int: A value indicating the number of recovery points.
* **replicaDeletionOption**: string: A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
* **replicationFrequencyInSeconds**: int: A value indicating the replication interval.
* **replicationPort**: int: A value indicating the recovery HTTPS port.

### HyperVReplicaAzurePolicyDetails
#### Properties
* **activeStorageAccountId**: string: The active storage account Id.
* **applicationConsistentSnapshotFrequencyInHours**: int: The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
* **encryption**: string: A value indicating whether encryption is enabled for virtual machines in this cloud.
* **instanceType**: 'HyperVReplicaAzure' (Required): Gets the class type. Overridden in derived classes.
* **onlineReplicationStartTime**: string: The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
* **recoveryPointHistoryDurationInHours**: int: The duration (in hours) to which point the recovery history needs to be maintained.
* **replicationInterval**: int: The replication interval.

### HyperVReplicaBasePolicyDetails
#### Properties
* **allowedAuthenticationType**: int: A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int: A value indicating the application consistent frequency.
* **compression**: string: A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string: A value indicating whether IR is online.
* **instanceType**: 'HyperVReplicaBasePolicyDetails' (Required): Gets the class type. Overridden in derived classes.
* **offlineReplicationExportPath**: string: A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string: A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string: A value indicating the online IR start time.
* **recoveryPoints**: int: A value indicating the number of recovery points.
* **replicaDeletionOption**: string: A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud.
* **replicationPort**: int: A value indicating the recovery HTTPS port.

### InMagePolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency in minutes.
* **instanceType**: 'InMage' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string: A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int: The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int: The recovery point threshold in minutes.

### InMageAzureV2PolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency in minutes.
* **instanceType**: 'InMageAzureV2' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string: A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int: The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int: The recovery point threshold in minutes.

### InMageBasePolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency in minutes.
* **instanceType**: 'InMageBasePolicyDetails' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string: A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int: The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int: The recovery point threshold in minutes.

### InMageRcmPolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency in minutes.
* **enableMultiVmSync**: string: A value indicating whether multi-VM sync has to be enabled.
* **instanceType**: 'InMageRcm' (Required): Gets the class type. Overridden in derived classes.
* **recoveryPointHistoryInMinutes**: int: The duration in minutes until which the recovery points need to be stored.

### InMageRcmFailbackPolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency in minutes.
* **instanceType**: 'InMageRcmFailback' (Required): Gets the class type. Overridden in derived classes.

### VmwareCbtPolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency in minutes.
* **instanceType**: 'VMwareCbt' (Required): Gets the class type. Overridden in derived classes.
* **recoveryPointHistoryInMinutes**: int: The duration in minutes until which the recovery points need to be stored.


## PolicyProviderSpecificInput
* **Discriminator**: instanceType

### Base Properties
### A2APolicyCreationInput
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'A2A' (Required): The class type.
* **multiVmSyncStatus**: 'Disable' | 'Enable' | string (Required): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
* **recoveryPointHistory**: int: The duration in minutes until which the recovery points need to be stored.

### A2ACrossClusterMigrationPolicyCreationInput
#### Properties
* **instanceType**: 'A2ACrossClusterMigration' (Required): The class type.

### HyperVReplicaBluePolicyInput
#### Properties
* **instanceType**: 'HyperVReplica2012R2' (Required): The class type.
* **replicationFrequencyInSeconds**: int: A value indicating the replication interval.

### HyperVReplicaAzurePolicyInput
#### Properties
* **applicationConsistentSnapshotFrequencyInHours**: int: The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
* **instanceType**: 'HyperVReplicaAzure' (Required): The class type.
* **onlineReplicationStartTime**: string: The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
* **recoveryPointHistoryDuration**: int: The duration (in hours) to which point the recovery history needs to be maintained.
* **replicationInterval**: int: The replication interval.
* **storageAccounts**: string[]: The list of storage accounts to which the VMs in the primary cloud can replicate to.

### InMagePolicyInput
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency (in minutes).
* **instanceType**: 'InMage' (Required): The class type.
* **multiVmSyncStatus**: 'Disable' | 'Enable' | string (Required): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
* **recoveryPointHistory**: int: The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int: The recovery point threshold in minutes.

### InMageAzureV2PolicyInput
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'InMageAzureV2' (Required): The class type.
* **multiVmSyncStatus**: 'Disable' | 'Enable' | string (Required): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
* **recoveryPointHistory**: int: The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int: The recovery point threshold in minutes.

### InMageRcmPolicyCreationInput
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency (in minutes).
* **enableMultiVmSync**: string: A value indicating whether multi-VM sync has to be enabled.
* **instanceType**: 'InMageRcm' (Required): The class type.
* **recoveryPointHistoryInMinutes**: int: The duration in minutes until which the recovery points need to be stored.

### InMageRcmFailbackPolicyCreationInput
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'InMageRcmFailback' (Required): The class type.

### VMwareCbtPolicyCreationInput
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'VMwareCbt' (Required): The class type.
* **recoveryPointHistoryInMinutes**: int: The duration in minutes until which the recovery points need to be stored.


## ProcessServer
### Properties
* **agentExpiryDate**: string: Agent expiry date.
* **agentVersion**: string: The version of the scout component on the server.
* **agentVersionDetails**: [VersionDetails](#versiondetails): The agent version details.
* **availableMemoryInBytes**: int: The available memory.
* **availableSpaceInBytes**: int: The available space.
* **cpuLoad**: string: The percentage of the CPU load.
* **cpuLoadStatus**: string: The CPU load status.
* **friendlyName**: string: The Process Server's friendly name.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' | string (ReadOnly): The health of Process Server.
* **healthErrors**: [HealthError](#healtherror)[]: Health errors.
* **hostId**: string: The agent generated Id.
* **id**: string: The Process Server Id.
* **ipAddress**: string: The IP address of the server.
* **lastHeartbeat**: string: The last heartbeat received from the server.
* **machineCount**: string: The servers configured with this PS.
* **marsCommunicationStatus**: string (ReadOnly): The MARS communication status.
* **marsRegistrationStatus**: string (ReadOnly): The MARS registration status.
* **memoryUsageStatus**: string: The memory usage status.
* **mobilityServiceUpdates**: [MobilityServiceUpdate](#mobilityserviceupdate)[]: The list of the mobility service updates available on the Process Server.
* **osType**: string: The OS type of the server.
* **osVersion**: string: OS Version of the process server. Note: This will get populated if user has CS version greater than 9.12.0.0.
* **psServiceStatus**: string: The PS service status.
* **psStatsRefreshTime**: string (ReadOnly): The process server stats refresh time.
* **replicationPairCount**: string: The number of replication pairs configured in this PS.
* **spaceUsageStatus**: string: The space usage status.
* **sslCertExpiryDate**: string: The PS SSL cert expiry date.
* **sslCertExpiryRemainingDays**: int: CS SSL cert expiry date.
* **systemLoad**: string: The percentage of the system load.
* **systemLoadStatus**: string: The system load status.
* **throughputInBytes**: int (ReadOnly): The throughput in bytes.
* **throughputInMBps**: int (ReadOnly): The throughput in MBps.
* **throughputStatus**: string (ReadOnly): The throughput status.
* **throughputUploadPendingDataInBytes**: int (ReadOnly): The uploading pending data in bytes.
* **totalMemoryInBytes**: int: The total memory.
* **totalSpaceInBytes**: int: The total space.
* **versionStatus**: string: Version status.

## ProcessServerDetails
### Properties
* **availableMemoryInBytes**: int (ReadOnly): The available memory.
* **availableSpaceInBytes**: int (ReadOnly): The available disk space.
* **biosId**: string (ReadOnly): The process server Bios Id.
* **diskUsageStatus**: 'Critical' | 'Healthy' | 'Unknown' | 'Warning' | string (ReadOnly): The disk usage status.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The process server Fqdn.
* **freeSpacePercentage**: int (ReadOnly): The free disk space percentage.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' | string (ReadOnly): The health of the process server.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **historicHealth**: 'Critical' | 'None' | 'Normal' | 'Warning' | string (ReadOnly): The historic health of the process server based on the health in last 24 hours.
* **id**: string (ReadOnly): The process server Id.
* **ipAddresses**: string[] (ReadOnly): The list of IP addresses for communicating with the RCM component.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the process server.
* **memoryUsagePercentage**: int (ReadOnly): The memory usage percentage.
* **memoryUsageStatus**: 'Critical' | 'Healthy' | 'Unknown' | 'Warning' | string (ReadOnly): The memory usage status.
* **name**: string (ReadOnly): The process server name.
* **processorUsagePercentage**: int (ReadOnly): The processor usage percentage.
* **processorUsageStatus**: 'Critical' | 'Healthy' | 'Unknown' | 'Warning' | string (ReadOnly): The processor usage status.
* **protectedItemCount**: int (ReadOnly): The protected item count.
* **systemLoad**: int (ReadOnly): The system load.
* **systemLoadStatus**: 'Critical' | 'Healthy' | 'Unknown' | 'Warning' | string (ReadOnly): The system load status.
* **throughputInBytes**: int (ReadOnly): The throughput in bytes.
* **throughputStatus**: 'Critical' | 'Healthy' | 'Unknown' | 'Warning' | string (ReadOnly): The throughput status.
* **throughputUploadPendingDataInBytes**: int (ReadOnly): The uploading pending data in bytes.
* **totalMemoryInBytes**: int (ReadOnly): The total memory.
* **totalSpaceInBytes**: int (ReadOnly): The total disk space.
* **usedMemoryInBytes**: int (ReadOnly): The used memory.
* **usedSpaceInBytes**: int (ReadOnly): The used disk space.
* **version**: string (ReadOnly): The version.

## ProtectableItemProperties
### Properties
* **customDetails**: [ConfigurationSettings](#configurationsettings): The Replication provider custom settings.
* **friendlyName**: string: The name.
* **protectionReadinessErrors**: string[]: The Current protection readiness errors.
* **protectionStatus**: string: The protection status.
* **recoveryServicesProviderId**: string: The recovery provider ARM Id.
* **replicationProtectedItemId**: string: The ARM resource of protected items.
* **supportedReplicationProviders**: string[]: The list of replication providers supported for the protectable item.

## ProtectionContainerFabricSpecificDetails
### Properties
* **instanceType**: string (ReadOnly): Gets the class type. Overridden in derived classes.

## ProtectionContainerMappingProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### A2AProtectionContainerMappingDetails
#### Properties
* **agentAutoUpdateStatus**: 'Disabled' | 'Enabled' | string: A value indicating whether the auto update is enabled.
* **automationAccountArmId**: string: The automation account arm id.
* **instanceType**: 'A2A' (Required): Gets the class type. Overridden in derived classes.
* **jobScheduleName**: string: The job schedule arm name.
* **scheduleName**: string: The schedule arm name.

### InMageRcmProtectionContainerMappingDetails
#### Properties
* **enableAgentAutoUpgrade**: string (ReadOnly): A value indicating whether the flag for enable agent auto upgrade.
* **instanceType**: 'InMageRcm' (Required): Gets the class type. Overridden in derived classes.

### VMwareCbtProtectionContainerMappingDetails
#### Properties
* **instanceType**: 'VMwareCbt' (Required): Gets the class type. Overridden in derived classes.
* **keyVaultId**: string (ReadOnly): The target key vault ARM Id.
* **keyVaultUri**: string (ReadOnly): The target key vault URI.
* **serviceBusConnectionStringSecretName**: string (ReadOnly): The secret name of the service bus connection string.
* **storageAccountId**: string (ReadOnly): The storage account ARM Id.
* **storageAccountSasSecretName**: string (ReadOnly): The secret name of the storage account.
* **targetLocation**: string (ReadOnly): The target location.


## ProtectionProfileCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingProtectionProfile
#### Properties
* **protectionProfileId**: string (Required): The protection profile Arm Id. Throw error, if resource does not exists.
* **resourceType**: 'Existing' (Required): The class type.

### NewProtectionProfile
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency (in minutes).
* **multiVmSyncStatus**: 'Disable' | 'Enable' | string (Required): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
* **policyName**: string (Required): The protection profile input.
* **recoveryPointHistory**: int: The duration in minutes until which the recovery points need to be stored.
* **resourceType**: 'New' (Required): The class type.


## ProviderError
### Properties
* **errorCode**: int: The Error code.
* **errorId**: string: The Provider error Id.
* **errorMessage**: string: The Error message.
* **possibleCauses**: string: The possible causes for the error.
* **recommendedAction**: string: The recommended action to resolve the error.

## ProviderSpecificRecoveryPointDetails
* **Discriminator**: instanceType

### Base Properties
### A2ARecoveryPointDetails
#### Properties
* **disks**: string[]: List of disk ids representing a recovery point.
* **instanceType**: 'A2A' (Required): Gets the provider type.
* **recoveryPointSyncType**: 'MultiVmSyncRecoveryPoint' | 'PerVmRecoveryPoint' | string: A value indicating whether the recovery point is multi VM consistent.

### InMageAzureV2RecoveryPointDetails
#### Properties
* **instanceType**: 'InMageAzureV2' (Required): Gets the provider type.
* **isMultiVmSyncPoint**: string: A value indicating whether the recovery point is multi VM consistent.

### InMageRcmRecoveryPointDetails
#### Properties
* **instanceType**: 'InMageRcm' (Required): Gets the provider type.
* **isMultiVmSyncPoint**: string (ReadOnly): A value indicating whether the recovery point is multi VM consistent.


## PushInstallerDetails
### Properties
* **biosId**: string (ReadOnly): The push installer Bios Id.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The push installer Fqdn.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' | string (ReadOnly): The health of the push installer.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The push installer Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the push installer.
* **name**: string (ReadOnly): The push installer name.
* **version**: string (ReadOnly): The version.

## RcmProxyDetails
### Properties
* **biosId**: string (ReadOnly): The RCM proxy Bios Id.
* **clientAuthenticationType**: string (ReadOnly): The client authentication type.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The RCM proxy Fqdn.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' | string (ReadOnly): The health of the RCM proxy.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The RCM proxy Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the RCM proxy.
* **name**: string (ReadOnly): The RCM proxy name.
* **version**: string (ReadOnly): The version.

## RecoveryAvailabilitySetCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingRecoveryAvailabilitySet
#### Properties
* **recoveryAvailabilitySetId**: string: The recovery availability set Id. Will throw error, if resource does not exist.
* **resourceType**: 'Existing' (Required): The class type.


## RecoveryPlanAction
### Properties
* **actionName**: string (Required): The action name.
* **customDetails**: [RecoveryPlanActionDetails](#recoveryplanactiondetails) (Required): The custom details.
* **failoverDirections**: 'PrimaryToRecovery' | 'RecoveryToPrimary' | string[] (Required): The list of failover directions.
* **failoverTypes**: 'CancelFailover' | 'ChangePit' | 'Commit' | 'CompleteMigration' | 'DisableProtection' | 'Failback' | 'FinalizeFailback' | 'PlannedFailover' | 'RepairReplication' | 'ReverseReplicate' | 'SwitchProtection' | 'TestFailover' | 'TestFailoverCleanup' | 'UnplannedFailover' | string[] (Required): The list of failover types.

## RecoveryPlanActionDetails
* **Discriminator**: instanceType

### Base Properties
### RecoveryPlanAutomationRunbookActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' | string (Required): The fabric location.
* **instanceType**: 'AutomationRunbookActionDetails' (Required): Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
* **runbookId**: string: The runbook ARM Id.
* **timeout**: string: The runbook timeout.

### RecoveryPlanManualActionDetails
#### Properties
* **description**: string: The manual action description.
* **instanceType**: 'ManualActionDetails' (Required): Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).

### RecoveryPlanScriptActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' | string (Required): The fabric location.
* **instanceType**: 'ScriptActionDetails' (Required): Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
* **path**: string (Required): The script path.
* **timeout**: string: The script timeout.


## RecoveryPlanGroup
### Properties
* **endGroupActions**: [RecoveryPlanAction](#recoveryplanaction)[]: The end group actions.
* **groupType**: 'Boot' | 'Failover' | 'Shutdown' | string (Required): The group type.
* **replicationProtectedItems**: [RecoveryPlanProtectedItem](#recoveryplanprotecteditem)[]: The list of protected items.
* **startGroupActions**: [RecoveryPlanAction](#recoveryplanaction)[]: The start group actions.

## RecoveryPlanProtectedItem
### Properties
* **id**: string: The ARM Id of the recovery plan protected item.
* **virtualMachineId**: string: The virtual machine Id.

## RecoveryPlanProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### RecoveryPlanA2ADetails
#### Properties
* **instanceType**: 'A2A' (Required): Gets the Instance type.
* **primaryZone**: string: The primary zone.
* **recoveryZone**: string: The recovery zone.


## RecoveryPlanProviderSpecificInput
* **Discriminator**: instanceType

### Base Properties
### RecoveryPlanA2AInput
#### Properties
* **instanceType**: 'A2A' (Required): Gets the Instance type.
* **primaryZone**: string: The primary zone.
* **recoveryZone**: string: The recovery zone.


## RecoveryPointProperties
### Properties
* **providerSpecificDetails**: [ProviderSpecificRecoveryPointDetails](#providerspecificrecoverypointdetails): The provider specific details for the recovery point.
* **recoveryPointTime**: string: The recovery point time.
* **recoveryPointType**: string: The recovery point type: ApplicationConsistent, CrashConsistent.

## RecoveryProximityPlacementGroupCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingRecoveryProximityPlacementGroup
#### Properties
* **recoveryProximityPlacementGroupId**: string: The recovery proximity placement group Id. Will throw error, if resource does not exist.
* **resourceType**: 'Existing' (Required): The class type.


## RecoveryResourceGroupCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingRecoveryResourceGroup
#### Properties
* **recoveryResourceGroupId**: string: The recovery resource group Id. Valid for V2 scenarios.
* **resourceType**: 'Existing' (Required): The class type.


## RecoveryVirtualNetworkCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingRecoveryVirtualNetwork
#### Properties
* **recoverySubnetName**: string: The recovery subnet name.
* **recoveryVirtualNetworkId**: string (Required): The recovery virtual network Id. Will throw error, if resource does not exist.
* **resourceType**: 'Existing' (Required): The class type.

### NewRecoveryVirtualNetwork
#### Properties
* **recoveryVirtualNetworkName**: string: The recovery virtual network name.
* **recoveryVirtualNetworkResourceGroupName**: string: The name of the resource group to be used to create the recovery virtual network. If absent, target network would be created in the same resource group as target VM.
* **resourceType**: 'New' (Required): The class type.


## ReplicationAgentDetails
### Properties
* **biosId**: string (ReadOnly): The replication agent Bios Id.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The replication agent Fqdn.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' | string (ReadOnly): The health of the replication agent.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The replication agent Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the replication agent.
* **name**: string (ReadOnly): The replication agent name.
* **version**: string (ReadOnly): The version.

## ReplicationProviderSpecificContainerCreationInput
* **Discriminator**: instanceType

### Base Properties
### A2AContainerCreationInput
#### Properties
* **instanceType**: 'A2A' (Required): The class type.

### A2ACrossClusterMigrationContainerCreationInput
#### Properties
* **instanceType**: 'A2ACrossClusterMigration' (Required): The class type.

### VMwareCbtContainerCreationInput
#### Properties
* **instanceType**: 'VMwareCbt' (Required): The class type.


## ReplicationProviderSpecificContainerMappingInput
* **Discriminator**: instanceType

### Base Properties
### A2AContainerMappingInput
#### Properties
* **agentAutoUpdateStatus**: 'Disabled' | 'Enabled' | string: A value indicating whether the auto update is enabled.
* **automationAccountArmId**: string: The automation account arm id.
* **instanceType**: 'A2A' (Required): The class type.

### VMwareCbtContainerMappingInput
#### Properties
* **instanceType**: 'VMwareCbt' (Required): The class type.
* **keyVaultId**: string (Required): The target key vault ARM Id.
* **keyVaultUri**: string (Required): The target key vault URL.
* **serviceBusConnectionStringSecretName**: string (Required): The secret name of the service bus connection string.
* **storageAccountId**: string (Required): The storage account ARM Id.
* **storageAccountSasSecretName**: string (Required): The secret name of the storage account.
* **targetLocation**: string (Required): The target location.


## ReprotectAgentDetails
### Properties
* **accessibleDatastores**: string[] (ReadOnly): The list of accessible datastores fetched from discovery.
* **biosId**: string (ReadOnly): The reprotect agent Bios Id.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The reprotect agent Fqdn.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' | string (ReadOnly): The health of the reprotect agent.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The reprotect agent Id.
* **lastDiscoveryInUtc**: string (ReadOnly): The last time when SDS information discovered in SRS.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the reprotect agent.
* **name**: string (ReadOnly): The reprotect agent name.
* **protectedItemCount**: int (ReadOnly): The protected item count.
* **vcenterId**: string (ReadOnly): The Vcenter Id.
* **version**: string (ReadOnly): The version.

## RetentionVolume
### Properties
* **capacityInBytes**: int: The volume capacity.
* **freeSpaceInBytes**: int: The free space available in this volume.
* **thresholdPercentage**: int: The threshold percentage.
* **volumeName**: string: The volume name.

## RunAsAccount
### Properties
* **accountId**: string: The CS RunAs account Id.
* **accountName**: string: The CS RunAs account name.

## ServiceError
### Properties
* **activityId**: string: Activity Id.
* **code**: string: Error code.
* **message**: string: Error message.
* **possibleCauses**: string: Possible causes of error.
* **recommendedAction**: string: Recommended action to resolve error.

## StorageAccountCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingStorageAccount
#### Properties
* **azureStorageAccountId**: string (Required): The storage account Arm Id. Throw error, if resource does not exists.
* **resourceType**: 'Existing' (Required): The class type.


## StorageClassificationProperties
### Properties
* **friendlyName**: string: Friendly name of the Storage classification.

## StorageMappingInputPropertiesOrStorageClassificationMappingProperties
### Properties
* **targetStorageClassificationId**: string: The ID of the storage object.

## Subnet
### Properties
* **addressList**: string[]: The list of addresses for the subnet.
* **friendlyName**: string: The subnet friendly name.
* **name**: string: The subnet name.

## TaskTypeDetails
* **Discriminator**: instanceType

### Base Properties
### AutomationRunbookTaskDetails
#### Properties
* **accountName**: string: The automation account name of the runbook.
* **cloudServiceName**: string: The cloud service of the automation runbook account.
* **instanceType**: 'AutomationRunbookTaskDetails' (Required): The type of task details.
* **isPrimarySideScript**: bool: A value indicating whether it is a primary side script or not.
* **jobId**: string: The job Id of the runbook execution.
* **jobOutput**: string: The execution output of the runbook.
* **name**: string: The recovery plan task name.
* **runbookId**: string: The runbook Id.
* **runbookName**: string: The runbook name.
* **subscriptionId**: string: The subscription Id of the automation runbook account.

### ConsistencyCheckTaskDetails
#### Properties
* **instanceType**: 'ConsistencyCheckTaskDetails' (Required): The type of task details.
* **vmDetails**: [InconsistentVmDetails](#inconsistentvmdetails)[]: The list of inconsistent Vm details.

### FabricReplicationGroupTaskDetails
#### Properties
* **instanceType**: 'FabricReplicationGroupTaskDetails' (Required): The type of task details.
* **skippedReason**: string: The skipped reason.
* **skippedReasonString**: string: The skipped reason string.

### ManualActionTaskDetails
#### Properties
* **instanceType**: 'ManualActionTaskDetails' (Required): The type of task details.
* **instructions**: string: The instructions.
* **name**: string: The name.
* **observation**: string: The observation.

### ScriptActionTaskDetails
#### Properties
* **instanceType**: 'ScriptActionTaskDetails' (Required): The type of task details.
* **isPrimarySideScript**: bool: A value indicating whether it is a primary side script or not.
* **name**: string: The name.
* **output**: string: The output.
* **path**: string: The path.

### VirtualMachineTaskDetails
#### Properties
* **instanceType**: 'VirtualMachineTaskDetails' (Required): The type of task details.
* **skippedReason**: string: The skipped reason.
* **skippedReasonString**: string: The skipped reason string.

### VmNicUpdatesTaskDetails
#### Properties
* **instanceType**: 'VmNicUpdatesTaskDetails' (Required): The type of task details.
* **name**: string: Name of the Nic.
* **nicId**: string: Nic Id.
* **vmId**: string: Virtual machine Id.


## VaultSettingCreationInputPropertiesOrVaultSettingProperties
### Properties
* **migrationSolutionId**: string: The migration solution Id.
* **vmwareToAzureProviderType**: string: VMware to Azure provider type.

## VersionDetails
### Properties
* **expiryDate**: string: Version expiry date.
* **status**: 'Deprecated' | 'NotSupported' | 'SecurityUpdateRequired' | 'Supported' | 'UpdateRequired' | string: A value indicating whether security update required.
* **version**: string: The agent version.

## VMNicDetails
### Properties
* **enableAcceleratedNetworkingOnRecovery**: bool: A value indicating whether the NIC has accelerated networking enabled.
* **enableAcceleratedNetworkingOnTfo**: bool: Whether the TFO NIC has accelerated networking enabled.
* **ipConfigs**: [IPConfigDetails](#ipconfigdetails)[]: The IP configurations of the NIC.
* **nicId**: string: The nic Id.
* **recoveryNetworkSecurityGroupId**: string: The id of the NSG associated with the NIC.
* **recoveryNicName**: string: The name of the NIC to be used when creating target NICs.
* **recoveryNicResourceGroupName**: string: The resource group of the NIC to be used when creating target NICs.
* **recoveryVMNetworkId**: string: Recovery VM network Id.
* **replicaNicId**: string: The replica nic Id.
* **reuseExistingNic**: bool: A value indicating whether an existing NIC is allowed to be reused during failover subject to availability.
* **selectionType**: string: Selection type for failover.
* **sourceNicArmId**: string: The source nic ARM Id.
* **targetNicName**: string: Target NIC name.
* **tfoNetworkSecurityGroupId**: string: The NSG to be used by NIC during test failover.
* **tfoRecoveryNicName**: string: The name of the NIC to be used when creating target NICs in TFO.
* **tfoRecoveryNicResourceGroupName**: string: The resource group of the NIC to be used when creating target NICs in TFO.
* **tfoReuseExistingNic**: bool: A value indicating whether an existing NIC is allowed to be reused during test failover subject to availability.
* **tfoVMNetworkId**: string: The network to be used by NIC during test failover.
* **vMNetworkName**: string: VM network name.

## VMwareCbtDiskInput
### Properties
* **diskEncryptionSetId**: string: The DiskEncryptionSet ARM Id.
* **diskId**: string (Required): The disk Id.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string: The disk type.
* **isOSDisk**: string (Required): A value indicating whether the disk is the OS disk.
* **logStorageAccountId**: string (Required): The log storage account ARM Id.
* **logStorageAccountSasSecretName**: string (Required): The key vault secret name of the log storage account.

## VMwareCbtEnableMigrationInputSeedDiskTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VMwareCbtEnableMigrationInputTargetDiskTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VMwareCbtEnableMigrationInputTargetNicTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VMwareCbtEnableMigrationInputTargetVmTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VMwareCbtNicDetails
### Properties
* **isPrimaryNic**: string: A value indicating whether this is the primary NIC.
* **isSelectedForMigration**: string: A value indicating whether this NIC is selected for migration.
* **nicId**: string (ReadOnly): The NIC Id.
* **sourceIPAddress**: string (ReadOnly): The source IP address.
* **sourceIPAddressType**: 'Dynamic' | 'Static' | string (ReadOnly): The source IP address type.
* **sourceNetworkId**: string (ReadOnly): Source network Id.
* **targetIPAddress**: string: The target IP address.
* **targetIPAddressType**: 'Dynamic' | 'Static' | string: The target IP address type.
* **targetNicName**: string: Target NIC name.
* **targetSubnetName**: string: Target subnet name.

## VMwareCbtProtectedDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskEncryptionSetId**: string (ReadOnly): The DiskEncryptionSet ARM Id.
* **diskId**: string (ReadOnly): The disk id.
* **diskName**: string (ReadOnly): The disk name.
* **diskPath**: string (ReadOnly): The disk path.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string: The disk type.
* **isOSDisk**: string (ReadOnly): A value indicating whether the disk is the OS disk.
* **logStorageAccountId**: string (ReadOnly): The log storage account ARM Id.
* **logStorageAccountSasSecretName**: string (ReadOnly): The key vault secret name of the log storage account.
* **seedManagedDiskId**: string (ReadOnly): The ARM Id of the seed managed disk.
* **targetDiskName**: string: The name for the target managed disk.
* **targetManagedDiskId**: string (ReadOnly): The ARM Id of the target managed disk.

