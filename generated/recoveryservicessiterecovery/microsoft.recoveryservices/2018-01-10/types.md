# Microsoft.RecoveryServices @ 2018-01-10

## Resource Microsoft.RecoveryServices/vaults/replicationAlertSettings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigureAlertRequestPropertiesOrAlertProperties](#configurealertrequestpropertiesoralertproperties): The properties of a configure alert request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationAlertSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationEvents@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventProperties](#eventproperties) (ReadOnly): Event related data.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FabricCreationInputPropertiesOrFabricProperties](#fabriccreationinputpropertiesorfabricproperties): Fabric creation input.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationLogicalNetworks@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogicalNetworkProperties](#logicalnetworkproperties) (ReadOnly): The Logical Network Properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationLogicalNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkProperties](#networkproperties) (ReadOnly): The Network Properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateNetworkMappingInputPropertiesOrNetworkMappingProperties](#createnetworkmappinginputpropertiesornetworkmappingproperties): Input properties for creating network mapping.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerInputPropertiesOrProtectionContainerProperties](#createprotectioncontainerinputpropertiesorprotectioncontainerproperties): Create protection container input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnableMigrationInputPropertiesOrMigrationItemProperties](#enablemigrationinputpropertiesormigrationitemproperties) (Required): Enable migration input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems/migrationRecoveryPoints@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MigrationRecoveryPointProperties](#migrationrecoverypointproperties) (ReadOnly): Recovery point properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems/migrationRecoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectableItems@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectableItemProperties](#protectableitemproperties) (ReadOnly): The custom data.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectableItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnableProtectionInputPropertiesOrReplicationProtectedItemProperties](#enableprotectioninputpropertiesorreplicationprotecteditemproperties): Enable protection input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems/recoveryPoints@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryPointProperties](#recoverypointproperties) (ReadOnly): Recovery point related data.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems/recoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerMappingInputPropertiesOrProtectionContainerMappingProperties](#createprotectioncontainermappinginputpropertiesorprotectioncontainermappingproperties): Configure protection input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddRecoveryServicesProviderInputPropertiesOrRecoveryServicesProviderProperties](#addrecoveryservicesproviderinputpropertiesorrecoveryservicesproviderproperties) (Required): The properties of an add provider request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageClassificationProperties](#storageclassificationproperties) (ReadOnly): Properties of the storage object.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageMappingInputPropertiesOrStorageClassificationMappingProperties](#storagemappinginputpropertiesorstorageclassificationmappingproperties): Storage mapping input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddVCenterRequestPropertiesOrVCenterProperties](#addvcenterrequestpropertiesorvcenterproperties): The properties of an add vCenter request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationJobs@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (ReadOnly): The custom data.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationPolicies@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreatePolicyInputPropertiesOrPolicyProperties](#createpolicyinputpropertiesorpolicyproperties): Policy creation properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateRecoveryPlanInputPropertiesOrRecoveryPlanProperties](#createrecoveryplaninputpropertiesorrecoveryplanproperties) (Required): Recovery plan creation properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationRecoveryPlans' (ReadOnly, DeployTimeConstant): The resource type

## A2AProtectedDiskDetails
### Properties
* **dataPendingAtSourceAgentInMB**: int: The data pending at source virtual machine in MB.
* **dataPendingInStagingStorageAccountInMB**: int: The data pending for replication in MB at staging account.
* **dekKeyVaultArmId**: string: The KeyVault resource id for secret (BEK).
* **diskCapacityInBytes**: int: The disk capacity in bytes.
* **diskName**: string: The disk name.
* **diskType**: string: The type of disk.
* **diskUri**: string: The disk uri.
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

## A2AProtectedManagedDiskDetails
### Properties
* **dataPendingAtSourceAgentInMB**: int: The data pending at source virtual machine in MB.
* **dataPendingInStagingStorageAccountInMB**: int: The data pending for replication in MB at staging account.
* **dekKeyVaultArmId**: string: The KeyVault resource id for secret (BEK).
* **diskCapacityInBytes**: int: The disk capacity in bytes.
* **diskId**: string: The managed disk Arm id.
* **diskName**: string: The disk name.
* **diskType**: string: The type of disk.
* **isDiskEncrypted**: bool: A value indicating whether vm has encrypted os disk or not.
* **isDiskKeyEncrypted**: bool: A value indicating whether disk key got encrypted or not.
* **kekKeyVaultArmId**: string: The KeyVault resource id for key (KEK).
* **keyIdentifier**: string: The key URL / identifier (KEK).
* **monitoringJobType**: string: The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int: The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **primaryStagingAzureStorageAccountId**: string: The primary staging storage account.
* **recoveryReplicaDiskAccountType**: string: The replica disk type. Its an optional value and will be same as source disk type if not user provided.
* **recoveryReplicaDiskId**: string: Recovery replica disk Arm Id.
* **recoveryResourceGroupId**: string: The recovery disk resource group Arm Id.
* **recoveryTargetDiskAccountType**: string: The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.
* **recoveryTargetDiskId**: string: Recovery target disk Arm Id.
* **resyncRequired**: bool: A value indicating whether resync is required for this disk.
* **secretIdentifier**: string: The secret URL / identifier (BEK).

## A2AVmDiskInputDetails
### Properties
* **diskUri**: string: The disk Uri.
* **primaryStagingAzureStorageAccountId**: string: The primary staging storage account Id.
* **recoveryAzureStorageAccountId**: string: The recovery VHD storage account Id.

## A2AVmManagedDiskInputDetails
### Properties
* **diskId**: string: The disk Id.
* **primaryStagingAzureStorageAccountId**: string: The primary staging storage account Arm Id.
* **recoveryReplicaDiskAccountType**: string: The replica disk type. Its an optional value and will be same as source disk type if not user provided.
* **recoveryResourceGroupId**: string: The target resource group Arm Id.
* **recoveryTargetDiskAccountType**: string: The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.

## AddRecoveryServicesProviderInputPropertiesOrRecoveryServicesProviderProperties
### Properties
* **allowedScenarios**: string[] (ReadOnly): The scenarios allowed on this provider.
* **authenticationIdentityDetails**: [IdentityProviderDetails](#identityproviderdetails) (ReadOnly): The authentication identity details.
* **authenticationIdentityInput**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): The identity provider input for DRA authentication.
* **connectionStatus**: string (ReadOnly): A value indicating whether DRA is responsive.
* **draIdentifier**: string (ReadOnly): The DRA Id.
* **fabricFriendlyName**: string (ReadOnly): The fabric friendly name.
* **fabricType**: string (ReadOnly): Type of the site.
* **friendlyName**: string (ReadOnly): Friendly name of the DRA.
* **healthErrorDetails**: [HealthError](#healtherror)[] (ReadOnly): The recovery services provider health error details.
* **lastHeartBeat**: string (ReadOnly): Time when last heartbeat was sent by the DRA.
* **machineName**: string (Required, WriteOnly): The name of the machine where the provider is getting added.
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
* **roleAssignments**: [RoleAssignment](#roleassignment)[]: The Azure role assignments.
* **tags**: [AzureToAzureVmSyncedConfigDetailsTags](#azuretoazurevmsyncedconfigdetailstags): The Azure VM tags.

## AzureToAzureVmSyncedConfigDetailsTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureVmDiskDetails
### Properties
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
### HyperVVirtualMachineDetails
#### Properties
* **diskDetails**: [DiskDetails](#diskdetails)[]: The Last successful failover time.
* **generation**: string: The id of the object in fabric.
* **hasFibreChannelAdapter**: 'NotPresent' | 'Present' | 'Unknown' | string: A value indicating whether the VM has a fibre channel adapter attached. String value of {SrsDataContract.PresenceStatus} enum.
* **hasPhysicalDisk**: 'NotPresent' | 'Present' | 'Unknown' | string: A value indicating whether the VM has a physical disk attached. String value of {SrsDataContract.PresenceStatus} enum.
* **hasSharedVhd**: 'NotPresent' | 'Present' | 'Unknown' | string: A value indicating whether the VM has a shared VHD attached. String value of {SrsDataContract.PresenceStatus} enum.
* **instanceType**: 'HyperVVirtualMachine' (Required): Gets the class type. Overridden in derived classes.
* **osDetails**: [OSDetails](#osdetails): The Last replication time.
* **sourceItemId**: string: The source id of the object.

### ReplicationGroupDetails
#### Properties
* **instanceType**: 'ReplicationGroupDetails' (Required): Gets the class type. Overridden in derived classes.

### VmmVirtualMachineDetails
#### Properties
* **diskDetails**: [DiskDetails](#diskdetails)[]: The Last successful failover time.
* **generation**: string: The id of the object in fabric.
* **hasFibreChannelAdapter**: 'NotPresent' | 'Present' | 'Unknown' | string: A value indicating whether the VM has a fibre channel adapter attached. String value of {SrsDataContract.PresenceStatus} enum.
* **hasPhysicalDisk**: 'NotPresent' | 'Present' | 'Unknown' | string: A value indicating whether the VM has a physical disk attached. String value of {SrsDataContract.PresenceStatus} enum.
* **hasSharedVhd**: 'NotPresent' | 'Present' | 'Unknown' | string: A value indicating whether the VM has a shared VHD attached. String value of {SrsDataContract.PresenceStatus} enum.
* **instanceType**: 'VmmVirtualMachine' (Required): Gets the class type. Overridden in derived classes.
* **osDetails**: [OSDetails](#osdetails): The Last replication time.
* **sourceItemId**: string: The source id of the object.

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
* **recoveryNetworkId**: string: Recovery network Id.
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
* **protectedItemCount**: int (ReadOnly): Number of protected PEs
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
* **state**: string (ReadOnly): Association Status
* **targetFabricFriendlyName**: string (ReadOnly): Friendly name of target fabric.
* **targetProtectionContainerFriendlyName**: string (ReadOnly): Friendly name of paired container.
* **targetProtectionContainerId**: string: The target unique protection container name.

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
* **recoveryFabricFriendlyName**: string (ReadOnly): The recovery fabric friendly name.
* **recoveryFabricId**: string (Required): The recovery fabric Id.
* **replicationProviders**: string[] (ReadOnly): The list of replication providers.

## CurrentJobDetails
### Properties
* **jobId**: string: The ARM Id of the job being executed.
* **jobName**: string: The job name.
* **startTime**: string: The start time of the job.

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
* **keyVaultResourceArmId**: string: The KeyVault resource ARM id for secret.
* **secretIdentifier**: string: The secret url / identifier.

## DiskVolumeDetails
### Properties
* **label**: string: The volume label.
* **name**: string: The volume name.

## EnableMigrationInputPropertiesOrMigrationItemProperties
### Properties
* **allowedOperations**: 'DisableMigration' | 'Migrate' | 'StartResync' | 'TestMigrate' | 'TestMigrateCleanup' | string[] (ReadOnly): The allowed operations on the migration item, based on the current migration state of the item.
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
* **dataMoverRunAsAccountId**: string (Required): The data mover RunAs account Id.
* **disksToInclude**: [VMwareCbtDiskInput](#vmwarecbtdiskinput)[] (Required, WriteOnly): The disks to include list.
* **firmwareType**: string (ReadOnly): The firmware type.
* **initialSeedingProgressPercentage**: int (ReadOnly): The initial seeding progress percentage.
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
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' | string (ReadOnly): The resync state.
* **snapshotRunAsAccountId**: string (Required): The snapshot RunAs account Id.
* **targetAvailabilitySetId**: string: The target availability set ARM Id.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetBootDiagnosticsStorageAccountId**: string: The target boot diagnostics storage account ARM Id.
* **targetGeneration**: string (ReadOnly): The target generation.
* **targetLocation**: string (ReadOnly): The target location.
* **targetNetworkId**: string (Required): The target network ARM Id.
* **targetResourceGroupId**: string (Required): The target resource group ARM Id.
* **targetSubnetName**: string (WriteOnly): The target subnet name.
* **targetVmName**: string: The target VM name.
* **targetVmSize**: string: The target VM size.
* **vmNics**: [VMwareCbtNicDetails](#vmwarecbtnicdetails)[] (ReadOnly): The network details.
* **vmwareMachineId**: string (Required): The ARM Id of the VM discovered in VMware.


## EnableProtectionInputPropertiesOrReplicationProtectedItemProperties
### Properties
* **activeLocation**: string (ReadOnly): The Current active location of the PE.
* **allowedOperations**: string[] (ReadOnly): The allowed operations on the Replication protected item.
* **currentScenario**: [CurrentScenarioDetails](#currentscenariodetails) (ReadOnly): The current scenario.
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
* **agentVersion**: string (ReadOnly): The agent version.
* **diskEncryptionInfo**: [DiskEncryptionInfo](#diskencryptioninfo) (WriteOnly): The recovery disk encryption information.
* **fabricObjectId**: string: The fabric specific object Id of the virtual machine.
* **instanceType**: 'A2A' (Required): The class type.
* **isReplicationAgentUpdateRequired**: bool (ReadOnly): A value indicating whether replication agent update is required.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The time (in UTC) when the last RPO value was calculated by Protection Service.
* **lifecycleId**: string (ReadOnly): An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
* **managementId**: string (ReadOnly): The management Id.
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **multiVmGroupCreateOption**: 'AutoCreated' | 'UserSpecified' | string (ReadOnly): Whether Multi VM group is auto created or specified by user.
* **multiVmGroupId**: string (ReadOnly): The multi vm group Id.
* **multiVmGroupName**: string: The multi vm group name.
* **osType**: string (ReadOnly): The type of operating system.
* **primaryFabricLocation**: string (ReadOnly): Primary fabric location.
* **protectedDisks**: [A2AProtectedDiskDetails](#a2aprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectedManagedDisks**: [A2AProtectedManagedDiskDetails](#a2aprotectedmanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySet**: string (ReadOnly): The recovery availability set.
* **recoveryAvailabilitySetId**: string (WriteOnly): The recovery availability set Id.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The recovery resource group.
* **recoveryAzureVMName**: string (ReadOnly): The name of recovery virtual machine.
* **recoveryAzureVMSize**: string (ReadOnly): The size of recovery virtual machine.
* **recoveryBootDiagStorageAccountId**: string: The boot diagnostic storage account.
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
* **vmSyncedConfigDetails**: [AzureToAzureVmSyncedConfigDetails](#azuretoazurevmsyncedconfigdetails) (ReadOnly): The synced configuration details.

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
* **disksToInclude**: string[] (WriteOnly): The list of VHD IDs of disks to be protected.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **encryption**: string (ReadOnly): The encryption info.
* **hvHostVmId**: string (WriteOnly): The Hyper-V host Vm Id.
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaAzure' (Required): The class type.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **licenseType**: string (ReadOnly): License Type of the VM to be used.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): The operating system info.
* **osType**: string (WriteOnly): The OS type associated with vm.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVmName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **rpoInSeconds**: int (ReadOnly): Last RPO value.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
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
* **datastoreName**: string (WriteOnly): The target data store name.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine Value can be list of strings that contain data store names
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): The enable disk exclusion input.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMage' (Required): The class type.
* **ipAddress**: string (ReadOnly): The source IP address.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **masterTargetId**: string (Required): The Master Target Id.
* **multiVmGroupId**: string (Required): The multi vm group Id.
* **multiVmGroupName**: string (Required): The multi vm group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether the multi vm sync is enabled or disabled.
* **osDetails**: [OSDiskDetails](#osdiskdetails) (ReadOnly): The OS details.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string (Required): The Process Server Id.
* **protectedDisks**: [InMageProtectedDiskDetails](#inmageprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **rebootAfterUpdateStatus**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): The resync details of the machine
* **retentionDrive**: string (Required, WriteOnly): The retention drive to use on the MT.
* **retentionWindowEnd**: string (ReadOnly): The retention window end time.
* **retentionWindowStart**: string (ReadOnly): The retention window start time.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vmFriendlyName**: string (WriteOnly): The Vm Name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMageAzureV2EnableProtectionInputOrInMageAzureV2ReplicationDetails
#### Properties
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentVersion**: string (ReadOnly): The agent version.
* **azureVMDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine. Value can be list of strings that contain data store names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine. Value can be vCenter or physical.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMageAzureV2' (Required): The class type.
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
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
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

### SanEnableProtectionInput
#### Properties
* **instanceType**: 'San' (Required): The class type.


## EncryptionDetails
### Properties
* **kekCertExpiryDate**: string: The key encryption key certificate expiry date.
* **kekCertThumbprint**: string: The key encryption key certificate thumbprint.
* **kekState**: string: The key encryption key state for the Vmm.

## EventProperties
### Properties
* **affectedObjectCorrelationId**: string (ReadOnly): The affected object correlationId for the event.
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
* **eventType**: string: InMage Event type. Takes one of the values of {InMageDataContract.InMageMonitoringEventType}.
* **instanceType**: 'InMageAzureV2' (Required): Gets the class type. Overridden in derived classes.
* **siteName**: string: VMware Site name.
* **summary**: string: InMage Event Summary.

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
* **primaryNetworkId**: string: The primary azure vnet Id.

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

### HyperVSiteDetails
#### Properties
* **instanceType**: 'HyperVSite' (Required): Gets the class type.

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
* **versionStatus**: string (ReadOnly): Version status
* **webLoad**: string (ReadOnly): The web load.
* **webLoadStatus**: string (ReadOnly): The web load status.

### VMwareV2FabricCreationInputOrVMwareV2FabricSpecificDetails
#### Properties
* **instanceType**: 'VMwareV2' (Required): Gets the class type.
* **migrationSolutionId**: string (Required): The ARM Id of the migration solution.
* **physicalSiteId**: string: The ARM Id of the physical site.
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

### RecoveryPlanGroupTaskDetails
#### Properties
* **groupId**: string: The group identifier.
* **instanceType**: 'RecoveryPlanGroupTaskDetails' (Required): The type of task details.
* **name**: string: The name.
* **rpGroupType**: string: The group type.

### RecoveryPlanShutdownGroupTaskDetails
#### Properties
* **groupId**: string: The group identifier.
* **instanceType**: 'RecoveryPlanShutdownGroupTaskDetails' (Required): The type of task details.
* **name**: string: The name.
* **rpGroupType**: string: The group type.


## HealthError
### Properties
* **creationTimeUtc**: string: Error creation time (UTC)
* **entityId**: string: ID of the entity.
* **errorCategory**: string: Category of error.
* **errorCode**: string: Error code.
* **errorLevel**: string: Level of error.
* **errorMessage**: string: Error message.
* **errorSource**: string: Source of error.
* **errorType**: string: Type of error.
* **innerHealthErrors**: [InnerHealthError](#innerhealtherror)[]: The inner health errors. HealthError having a list of HealthError as child errors is problematic. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
* **possibleCauses**: string: Possible causes of error.
* **recommendedAction**: string: Recommended action to resolve error.
* **recoveryProviderErrorMessage**: string: DRA error message.
* **summaryMessage**: string: Summary message of the entity.

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

## InMageAzureV2ProtectedDiskDetails
### Properties
* **diskCapacityInBytes**: int: The disk capacity in bytes.
* **diskId**: string: The disk id.
* **diskName**: string: The disk name.
* **diskResized**: string: A value indicating whether disk is resized.
* **fileSystemCapacityInBytes**: int: The disk file system capacity in bytes.
* **healthErrorCode**: string: The health error code for the disk.
* **lastRpoCalculatedTime**: string: The last RPO calculated time.
* **protectionStage**: string: The protection stage.
* **psDataInMegaBytes**: int: The PS data transit in MB.
* **resyncDurationInSeconds**: int: The resync duration in seconds.
* **resyncProgressPercentage**: int: The resync progress percentage.
* **resyncRequired**: string: A value indicating whether resync is required for this disk.
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
* **protectionStage**: string: The protection stage.
* **psDataInMB**: int: The PS data transit in MB.
* **resyncDurationInSeconds**: int: The resync duration in seconds.
* **resyncProgressPercentage**: int: The resync progress percentage.
* **resyncRequired**: string: A value indicating whether resync is required for this disk.
* **rpoInSeconds**: int: The RPO in seconds.
* **sourceDataInMB**: int: The source data transit in MB.
* **targetDataInMB**: int: The target data transit in MB.

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
* **creationTimeUtc**: string: Error creation time (UTC)
* **entityId**: string: ID of the entity.
* **errorCategory**: string: Category of error.
* **errorCode**: string: Error code.
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
* **endpointName**: string: The input endpoint name.
* **privatePort**: int: The input endpoint private port.
* **protocol**: string: The input endpoint protocol.
* **publicPort**: int: The input endpoint public port.

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

## JobEntity
### Properties
* **jobFriendlyName**: string: The job display name.
* **jobId**: string: The job id.
* **jobScenarioName**: string: The job name. Enum type ScenarioName.
* **targetInstanceType**: string: The workflow affected object type.
* **targetObjectId**: string: The object id.
* **targetObjectName**: string: The object name.

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
* **targetInstanceType**: string: The type of the affected object which is of {Microsoft.Azure.SiteRecovery.V2015_11_10.AffectedObjectType} class.
* **targetObjectId**: string: The affected Object Id.
* **targetObjectName**: string: The name of the affected object.
* **tasks**: [ASRTask](#asrtask)[]: The tasks.

## KeyEncryptionKeyInfo
### Properties
* **keyIdentifier**: string: The key url / identifier.
* **keyVaultResourceArmId**: string: The KeyVault resource ARM id for key.

## LogicalNetworkProperties
### Properties
* **friendlyName**: string: The Friendly Name.
* **logicalNetworkDefinitionsStatus**: string: A value indicating whether logical network definitions are isolated.
* **logicalNetworkUsage**: string: A value indicating whether logical network is used as private test network by test failover.
* **networkVirtualizationStatus**: string: A value indicating whether Network Virtualization is enabled for the logical network.

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
* **versionStatus**: string: Version status

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
* **replicaDeletionOption**: string: A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
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

### RcmAzureMigrationPolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int: The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int: The crash consistent snapshot frequency in minutes.
* **instanceType**: 'RcmAzureMigration' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: 'Disabled' | 'Enabled' | string: A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int: The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int: The recovery point threshold in minutes.

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

### HyperVReplicaPolicyInput
#### Properties
* **allowedAuthenticationType**: int: A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int: A value indicating the application consistent frequency.
* **compression**: string: A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string: A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012' (Required): The class type.
* **offlineReplicationExportPath**: string: A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string: A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string: A value indicating the online IR start time.
* **recoveryPoints**: int: A value indicating the number of recovery points.
* **replicaDeletion**: string: A value indicating whether the VM has to be auto deleted.
* **replicationPort**: int: A value indicating the recovery HTTPS port.

### HyperVReplicaBluePolicyInput
#### Properties
* **allowedAuthenticationType**: int: A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int: A value indicating the application consistent frequency.
* **compression**: string: A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string: A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012R2' (Required): The class type.
* **offlineReplicationExportPath**: string: A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string: A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string: A value indicating the online IR start time.
* **recoveryPoints**: int: A value indicating the number of recovery points.
* **replicaDeletion**: string: A value indicating whether the VM has to be auto deleted.
* **replicationFrequencyInSeconds**: int: A value indicating the replication interval.
* **replicationPort**: int: A value indicating the recovery HTTPS port.

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
* **healthErrors**: [HealthError](#healtherror)[]: Health errors.
* **hostId**: string: The agent generated Id.
* **id**: string: The Process Server Id.
* **ipAddress**: string: The IP address of the server.
* **lastHeartbeat**: string: The last heartbeat received from the server.
* **machineCount**: string: The servers configured with this PS.
* **memoryUsageStatus**: string: The memory usage status.
* **mobilityServiceUpdates**: [MobilityServiceUpdate](#mobilityserviceupdate)[]: The list of the mobility service updates available on the Process Server.
* **osType**: string: The OS type of the server.
* **osVersion**: string: OS Version of the process server. Note: This will get populated if user has CS version greater than 9.12.0.0.
* **psServiceStatus**: string: The PS service status.
* **replicationPairCount**: string: The number of replication pairs configured in this PS.
* **spaceUsageStatus**: string: The space usage status.
* **sslCertExpiryDate**: string: The PS SSL cert expiry date.
* **sslCertExpiryRemainingDays**: int: CS SSL cert expiry date.
* **systemLoad**: string: The percentage of the system load.
* **systemLoadStatus**: string: The system load status.
* **totalMemoryInBytes**: int: The total memory.
* **totalSpaceInBytes**: int: The total space.
* **versionStatus**: string: Version status

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

### VMwareCbtProtectionContainerMappingDetails
#### Properties
* **instanceType**: 'VMwareCbt' (Required): Gets the class type. Overridden in derived classes.
* **keyVaultId**: string (ReadOnly): The target key vault ARM Id.
* **keyVaultUri**: string (ReadOnly): The target key vault URI.
* **serviceBusConnectionStringSecretName**: string (ReadOnly): The secret name of the service bus connection string.
* **storageAccountId**: string (ReadOnly): The storage account ARM Id.
* **storageAccountSasSecretName**: string (ReadOnly): The secret name of the storage account.
* **targetLocation**: string (ReadOnly): The target location.


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
* **instanceType**: 'A2A' (Required): Gets the provider type.
* **recoveryPointSyncType**: 'MultiVmSyncRecoveryPoint' | 'PerVmRecoveryPoint' | string: A value indicating whether the recovery point is multi VM consistent.

### InMageAzureV2RecoveryPointDetails
#### Properties
* **instanceType**: 'InMageAzureV2' (Required): Gets the provider type.
* **isMultiVmSyncPoint**: string: A value indicating whether the recovery point is multi VM consistent.


## RecoveryPlanAction
### Properties
* **actionName**: string (Required): The action name.
* **customDetails**: [RecoveryPlanActionDetails](#recoveryplanactiondetails) (Required): The custom details.
* **failoverDirections**: 'PrimaryToRecovery' | 'RecoveryToPrimary' | string[] (Required): The list of failover directions.
* **failoverTypes**: 'ChangePit' | 'Commit' | 'CompleteMigration' | 'DisableProtection' | 'Failback' | 'FinalizeFailback' | 'PlannedFailover' | 'RepairReplication' | 'ReverseReplicate' | 'SwitchProtection' | 'TestFailover' | 'TestFailoverCleanup' | 'UnplannedFailover' | string[] (Required): The list of failover types.

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

## RecoveryPointProperties
### Properties
* **providerSpecificDetails**: [ProviderSpecificRecoveryPointDetails](#providerspecificrecoverypointdetails): The provider specific details for the recovery point.
* **recoveryPointTime**: string: The recovery point time.
* **recoveryPointType**: string: The recovery point type: ApplicationConsistent, CrashConsistent.

## ReplicationProviderSpecificContainerCreationInput
* **Discriminator**: instanceType

### Base Properties
### A2AContainerCreationInput
#### Properties
* **instanceType**: 'A2A' (Required): The class type.

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


## RetentionVolume
### Properties
* **capacityInBytes**: int: The volume capacity.
* **freeSpaceInBytes**: int: The free space available in this volume.
* **thresholdPercentage**: int: The threshold percentage.
* **volumeName**: string: The volume name.

## RoleAssignment
### Properties
* **id**: string: The ARM Id of the role assignment.
* **name**: string: The name of the role assignment.
* **principalId**: string: Principal Id.
* **roleDefinitionId**: string: Role definition id.
* **scope**: string: Role assignment scope.

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
* **jobTask**: [JobEntity](#jobentity): The job entity.
* **skippedReason**: string: The skipped reason.
* **skippedReasonString**: string: The skipped reason string.

### JobTaskDetails
#### Properties
* **instanceType**: 'JobTaskDetails' (Required): The type of task details.
* **jobTask**: [JobEntity](#jobentity): The job entity.

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
* **jobTask**: [JobEntity](#jobentity): The job entity.
* **skippedReason**: string: The skipped reason.
* **skippedReasonString**: string: The skipped reason string.

### VmNicUpdatesTaskDetails
#### Properties
* **instanceType**: 'VmNicUpdatesTaskDetails' (Required): The type of task details.
* **name**: string: Name of the Nic.
* **nicId**: string: Nic Id.
* **vmId**: string: Virtual machine Id.


## VersionDetails
### Properties
* **expiryDate**: string: Version expiry date.
* **status**: 'Deprecated' | 'NotSupported' | 'SecurityUpdateRequired' | 'Supported' | 'UpdateRequired' | string: A value indicating whether security update required.
* **version**: string: The agent version.

## VMNicDetails
### Properties
* **enableAcceleratedNetworkingOnRecovery**: bool: A value indicating whether the NIC has accelerated networking enabled.
* **ipAddressType**: string: Ip address type.
* **nicId**: string: The nic Id.
* **primaryNicStaticIPAddress**: string: Primary nic static IP address.
* **recoveryNicIpAddressType**: string: IP allocation type for recovery VM.
* **recoveryVMNetworkId**: string: Recovery VM network Id.
* **recoveryVMSubnetName**: string: Recovery VM subnet name.
* **replicaNicId**: string: The replica nic Id.
* **replicaNicStaticIPAddress**: string: Replica nic static IP address.
* **selectionType**: string: Selection type for failover.
* **sourceNicArmId**: string: The source nic ARM Id.
* **vMNetworkName**: string: VM network name.
* **vMSubnetName**: string: VM subnet name.

## VMwareCbtDiskInput
### Properties
* **diskEncryptionSetId**: string: The DiskEncryptionSet ARM Id.
* **diskId**: string (Required): The disk Id.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string: The disk type.
* **isOSDisk**: string (Required): A value indicating whether the disk is the OS disk.
* **logStorageAccountId**: string (Required): The log storage account ARM Id.
* **logStorageAccountSasSecretName**: string (Required): The key vault secret name of the log storage account.

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
* **targetManagedDiskId**: string (ReadOnly): The ARM Id of the target managed disk.

