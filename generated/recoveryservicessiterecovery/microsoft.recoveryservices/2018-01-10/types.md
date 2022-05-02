# Microsoft.RecoveryServices @ 2018-01-10

## Resource Microsoft.RecoveryServices/vaults/replicationAlertSettings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigureAlertRequestProperties](#configurealertrequestproperties): Properties of a configure alert request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationAlertSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationEvents@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventProperties](#eventproperties) (ReadOnly): The properties of a monitoring event.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FabricCreationInputProperties](#fabriccreationinputproperties): Properties of site details provided during the time of site creation
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationLogicalNetworks@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogicalNetworkProperties](#logicalnetworkproperties) (ReadOnly): Logical Network Properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationLogicalNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkProperties](#networkproperties) (ReadOnly): Network Properties
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateNetworkMappingInputProperties](#createnetworkmappinginputproperties): Common input details for network mapping operation.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerInputProperties](#createprotectioncontainerinputproperties): Create protection container input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnableMigrationInputProperties](#enablemigrationinputproperties) (Required): Enable migration input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems/migrationRecoveryPoints@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MigrationRecoveryPointProperties](#migrationrecoverypointproperties) (ReadOnly): Migration item recovery point properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems/migrationRecoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectableItems@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectableItemProperties](#protectableitemproperties) (ReadOnly): Replication protected item custom data details.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectableItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnableProtectionInputProperties](#enableprotectioninputproperties): Enable protection input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems/recoveryPoints@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryPointProperties](#recoverypointproperties) (ReadOnly): Recovery point properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems/recoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerMappingInputProperties](#createprotectioncontainermappinginputproperties): Configure pairing input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddRecoveryServicesProviderInputProperties](#addrecoveryservicesproviderinputproperties) (Required): The properties of an add provider request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageClassificationProperties](#storageclassificationproperties) (ReadOnly): Storage object properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageMappingInputProperties](#storagemappinginputproperties): Storage mapping input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddVCenterRequestProperties](#addvcenterrequestproperties): The properties of an add vCenter request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationJobs@2018-01-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (ReadOnly): Job custom data details.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationPolicies@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreatePolicyInputProperties](#createpolicyinputproperties): Policy creation properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2018-01-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-10' (ReadOnly, DeployTimeConstant): The resource api version
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

## EventProperties
### Properties
* **affectedObjectCorrelationId**: string (ReadOnly): The affected object correlationId for the event.
* **affectedObjectFriendlyName**: string (ReadOnly): The friendly name of the source of the event on which it is raised (for example, VM, VMM etc).
* **description**: string (ReadOnly): The event name.
* **eventCode**: string (ReadOnly): The Id of the monitoring event.
* **eventSpecificDetails**: [EventSpecificDetails](#eventspecificdetails) (ReadOnly): Model class for event specific details for an event.
* **eventType**: string (ReadOnly): The type of the event. for example: VM Health, Server Health, Job Failure etc.
* **fabricId**: string (ReadOnly): The ARM ID of the fabric.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The list of errors / warnings capturing details associated with the issue(s).
* **providerSpecificDetails**: [EventProviderSpecificDetails](#eventproviderspecificdetails) (ReadOnly): Model class for provider specific details for an event.
* **severity**: string (ReadOnly): The severity of the event.
* **timeOfOccurrence**: string (ReadOnly): The time of occurrence of the event.

## EventSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### JobStatusEventDetails
#### Properties
* **affectedObjectType**: string (ReadOnly): AffectedObjectType for the event.
* **instanceType**: 'JobStatus' (Required): Gets the class type. Overridden in derived classes.
* **jobFriendlyName**: string (ReadOnly): JobName for the Event.
* **jobId**: string (ReadOnly): Job arm id for the event.
* **jobStatus**: string (ReadOnly): JobStatus for the Event.


## HealthError
### Properties
* **creationTimeUtc**: string (ReadOnly): Error creation time (UTC)
* **entityId**: string (ReadOnly): ID of the entity.
* **errorCategory**: string (ReadOnly): Category of error.
* **errorCode**: string (ReadOnly): Error code.
* **errorLevel**: string (ReadOnly): Level of error.
* **errorMessage**: string (ReadOnly): Error message.
* **errorSource**: string (ReadOnly): Source of error.
* **errorType**: string (ReadOnly): Type of error.
* **innerHealthErrors**: [InnerHealthError](#innerhealtherror)[] (ReadOnly): The inner health errors. HealthError having a list of HealthError as child errors is problematic. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
* **possibleCauses**: string (ReadOnly): Possible causes of error.
* **recommendedAction**: string (ReadOnly): Recommended action to resolve error.
* **recoveryProviderErrorMessage**: string (ReadOnly): DRA error message.
* **summaryMessage**: string (ReadOnly): Summary message of the entity.

## InnerHealthError
### Properties
* **creationTimeUtc**: string (ReadOnly): Error creation time (UTC)
* **entityId**: string (ReadOnly): ID of the entity.
* **errorCategory**: string (ReadOnly): Category of error.
* **errorCode**: string (ReadOnly): Error code.
* **errorLevel**: string (ReadOnly): Level of error.
* **errorMessage**: string (ReadOnly): Error message.
* **errorSource**: string (ReadOnly): Source of error.
* **errorType**: string (ReadOnly): Type of error.
* **possibleCauses**: string (ReadOnly): Possible causes of error.
* **recommendedAction**: string (ReadOnly): Recommended action to resolve error.
* **recoveryProviderErrorMessage**: string (ReadOnly): DRA error message.
* **summaryMessage**: string (ReadOnly): Summary message of the entity.

## EventProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### A2AEventDetails
#### Properties
* **fabricLocation**: string (ReadOnly): The fabric location.
* **fabricName**: string (ReadOnly): Fabric arm name.
* **fabricObjectId**: string (ReadOnly): The azure vm arm id.
* **instanceType**: 'A2A' (Required): Gets the class type. Overridden in derived classes.
* **protectedItemName**: string (ReadOnly): The protected item arm name.
* **remoteFabricLocation**: string (ReadOnly): Remote fabric location.
* **remoteFabricName**: string (ReadOnly): Remote fabric arm name.

### HyperVReplica2012EventDetails
#### Properties
* **containerName**: string (ReadOnly): The container friendly name.
* **fabricName**: string (ReadOnly): The fabric friendly name.
* **instanceType**: 'HyperVReplica2012' (Required): Gets the class type. Overridden in derived classes.
* **remoteContainerName**: string (ReadOnly): The remote container name.
* **remoteFabricName**: string (ReadOnly): The remote fabric name.

### HyperVReplica2012R2EventDetails
#### Properties
* **containerName**: string (ReadOnly): The container friendly name.
* **fabricName**: string (ReadOnly): The fabric friendly name.
* **instanceType**: 'HyperVReplica2012R2' (Required): Gets the class type. Overridden in derived classes.
* **remoteContainerName**: string (ReadOnly): The remote container name.
* **remoteFabricName**: string (ReadOnly): The remote fabric name.

### HyperVReplicaAzureEventDetails
#### Properties
* **containerName**: string (ReadOnly): The container friendly name.
* **fabricName**: string (ReadOnly): The fabric friendly name.
* **instanceType**: 'HyperVReplicaAzure' (Required): Gets the class type. Overridden in derived classes.
* **remoteContainerName**: string (ReadOnly): The remote container name.

### HyperVReplicaBaseEventDetails
#### Properties
* **containerName**: string (ReadOnly): The container friendly name.
* **fabricName**: string (ReadOnly): The fabric friendly name.
* **instanceType**: 'HyperVReplicaBaseEventDetails' (Required): Gets the class type. Overridden in derived classes.
* **remoteContainerName**: string (ReadOnly): The remote container name.
* **remoteFabricName**: string (ReadOnly): The remote fabric name.

### InMageAzureV2EventDetails
#### Properties
* **category**: string (ReadOnly): InMage Event Category.
* **component**: string (ReadOnly): InMage Event Component.
* **correctiveAction**: string (ReadOnly): Corrective Action string for the event.
* **details**: string (ReadOnly): InMage Event Details.
* **eventType**: string (ReadOnly): InMage Event type. Takes one of the values of {InMageDataContract.InMageMonitoringEventType}.
* **instanceType**: 'InMageAzureV2' (Required): Gets the class type. Overridden in derived classes.
* **siteName**: string (ReadOnly): VMware Site name.
* **summary**: string (ReadOnly): InMage Event Summary.

### VMwareCbtEventDetails
#### Properties
* **instanceType**: 'VMwareCbt' (Required): Gets the class type. Overridden in derived classes.
* **migrationItemName**: string (ReadOnly): The migration item name.


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
### AzureFabricCreationInput
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
* **agentVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): Version related details.
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

### VMwareV2FabricCreationInput
#### Properties
* **instanceType**: 'VMwareV2' (Required): Gets the class type.
* **migrationSolutionId**: string (Required): The ARM Id of the migration solution.
* **physicalSiteId**: string: The ARM Id of the physical site.
* **serviceEndpoint**: string (ReadOnly): The service endpoint.
* **serviceResourceId**: string (ReadOnly): The service resource Id.
* **vmwareSiteId**: string: The ARM Id of the VMware site.


## VersionDetails
### Properties
* **expiryDate**: string (ReadOnly): Version expiry date.
* **status**: 'Deprecated' | 'NotSupported' | 'SecurityUpdateRequired' | 'Supported' | 'UpdateRequired' (ReadOnly): A value indicating whether security update required.
* **version**: string (ReadOnly): The agent version.

## MasterTargetServer
### Properties
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentVersion**: string (ReadOnly): The version of the scout component on the server.
* **agentVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): Version related details.
* **dataStores**: [DataStore](#datastore)[] (ReadOnly): The list of data stores in the fabric.
* **diskCount**: int (ReadOnly): Disk count of the master target.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): Health errors.
* **id**: string (ReadOnly): The server Id.
* **ipAddress**: string (ReadOnly): The IP address of the server.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the server.
* **marsAgentExpiryDate**: string (ReadOnly): MARS agent expiry date.
* **marsAgentVersion**: string (ReadOnly): MARS agent version.
* **marsAgentVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): Version related details.
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

## ProcessServer
### Properties
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentVersion**: string (ReadOnly): The version of the scout component on the server.
* **agentVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): Version related details.
* **availableMemoryInBytes**: int (ReadOnly): The available memory.
* **availableSpaceInBytes**: int (ReadOnly): The available space.
* **cpuLoad**: string (ReadOnly): The percentage of the CPU load.
* **cpuLoadStatus**: string (ReadOnly): The CPU load status.
* **friendlyName**: string (ReadOnly): The Process Server's friendly name.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): Health errors.
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

## EncryptionDetails
### Properties
* **kekCertExpiryDate**: string (ReadOnly): The key encryption key certificate expiry date.
* **kekCertThumbprint**: string (ReadOnly): The key encryption key certificate thumbprint.
* **kekState**: string (ReadOnly): The key encryption key state for the Vmm.

## LogicalNetworkProperties
### Properties
* **friendlyName**: string (ReadOnly): The Friendly Name.
* **logicalNetworkDefinitionsStatus**: string (ReadOnly): A value indicating whether logical network definitions are isolated.
* **logicalNetworkUsage**: string (ReadOnly): A value indicating whether logical network is used as private test network by test failover.
* **networkVirtualizationStatus**: string (ReadOnly): A value indicating whether Network Virtualization is enabled for the logical network.

## NetworkProperties
### Properties
* **fabricType**: string (ReadOnly): The Fabric Type.
* **friendlyName**: string (ReadOnly): The Friendly Name.
* **networkType**: string (ReadOnly): The Network Type.
* **subnets**: [Subnet](#subnet)[] (ReadOnly): The List of subnets.

## Subnet
### Properties
* **addressList**: string[] (ReadOnly): The list of addresses for the subnet.
* **friendlyName**: string (ReadOnly): The subnet friendly name.
* **name**: string (ReadOnly): The subnet name.

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
### AzureToAzureCreateNetworkMappingInput
#### Properties
* **instanceType**: 'AzureToAzure' (Required): The instance type.
* **primaryNetworkId**: string (WriteOnly): The primary azure vnet Id.

### VmmToAzureCreateNetworkMappingInput
#### Properties
* **instanceType**: 'VmmToAzure' (Required): The instance type.

### VmmToVmmCreateNetworkMappingInput
#### Properties
* **instanceType**: 'VmmToVmm' (Required): The instance type.


## NetworkMappingFabricSpecificSettings
* **Discriminator**: instanceType

### Base Properties
### AzureToAzureNetworkMappingSettings
#### Properties
* **instanceType**: 'AzureToAzure' (Required): Gets the Instance type.
* **primaryFabricLocation**: string (ReadOnly): The primary fabric location.
* **recoveryFabricLocation**: string (ReadOnly): The recovery fabric location.

### VmmToAzureNetworkMappingSettings
#### Properties
* **instanceType**: 'VmmToAzure' (Required): Gets the Instance type.

### VmmToVmmNetworkMappingSettings
#### Properties
* **instanceType**: 'VmmToVmm' (Required): Gets the Instance type.


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
### A2AContainerCreationInput
#### Properties
* **instanceType**: 'A2A' (Required): The class type.

### VMwareCbtContainerCreationInput
#### Properties
* **instanceType**: 'VMwareCbt' (Required): The class type.


## EnableMigrationInputProperties
### Properties
* **allowedOperations**: 'DisableMigration' | 'Migrate' | 'StartResync' | 'TestMigrate' | 'TestMigrateCleanup'[] (ReadOnly): The allowed operations on the migration item, based on the current migration state of the item.
* **currentJob**: [CurrentJobDetails](#currentjobdetails) (ReadOnly): Current job details of the migration item.
* **eventCorrelationId**: string (ReadOnly): The correlation Id for events associated with this migration item.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The consolidated health.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The list of health errors.
* **lastTestMigrationStatus**: string (ReadOnly): The status of the last test migration.
* **lastTestMigrationTime**: string (ReadOnly): The last test migration time.
* **machineName**: string (ReadOnly): The on-premise virtual machine name.
* **migrationState**: 'DisableMigrationFailed' | 'DisableMigrationInProgress' | 'EnableMigrationFailed' | 'EnableMigrationInProgress' | 'InitialSeedingFailed' | 'InitialSeedingInProgress' | 'MigrationFailed' | 'MigrationInProgress' | 'MigrationSucceeded' | 'None' | 'Replicating' (ReadOnly): The migration status.
* **migrationStateDescription**: string (ReadOnly): The migration state description.
* **policyFriendlyName**: string (ReadOnly): The name of policy governing this item.
* **policyId**: string (Required): The policy Id.
* **providerSpecificDetails**: [EnableMigrationProviderSpecificInput](#enablemigrationproviderspecificinput) (Required): Enable migration provider specific input.
* **testMigrateState**: 'None' | 'TestMigrationCleanupInProgress' | 'TestMigrationFailed' | 'TestMigrationInProgress' | 'TestMigrationSucceeded' (ReadOnly): The test migrate state.
* **testMigrateStateDescription**: string (ReadOnly): The test migrate state description.

## CurrentJobDetails
### Properties
* **jobId**: string (ReadOnly): The ARM Id of the job being executed.
* **jobName**: string (ReadOnly): The job name.
* **startTime**: string (ReadOnly): The start time of the job.

## EnableMigrationProviderSpecificInput
* **Discriminator**: instanceType

### Base Properties
### VMwareCbtEnableMigrationInput
#### Properties
* **dataMoverRunAsAccountId**: string (Required): The data mover RunAs account Id.
* **disksToInclude**: [VMwareCbtDiskInput](#vmwarecbtdiskinput)[] (Required, WriteOnly): The disks to include list.
* **firmwareType**: string (ReadOnly): The firmware type.
* **initialSeedingProgressPercentage**: int (ReadOnly): The initial seeding progress percentage.
* **instanceType**: 'VMwareCbt' (Required): The class type.
* **lastRecoveryPointId**: string (ReadOnly): The last recovery point Id.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer': License type.
* **migrationProgressPercentage**: int (ReadOnly): The migration progress percentage.
* **migrationRecoveryPointId**: string (ReadOnly): The recovery point Id to which the VM was migrated.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **performAutoResync**: string: A value indicating whether auto resync is to be done.
* **protectedDisks**: [VMwareCbtProtectedDiskDetails](#vmwarecbtprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required.
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' (ReadOnly): The resync state.
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


## VMwareCbtDiskInput
### Properties
* **diskEncryptionSetId**: string (WriteOnly): The DiskEncryptionSet ARM Id.
* **diskId**: string (Required, WriteOnly): The disk Id.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly): The disk type.
* **isOSDisk**: string (Required, WriteOnly): A value indicating whether the disk is the OS disk.
* **logStorageAccountId**: string (Required, WriteOnly): The log storage account ARM Id.
* **logStorageAccountSasSecretName**: string (Required, WriteOnly): The key vault secret name of the log storage account.

## VMwareCbtProtectedDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskEncryptionSetId**: string (ReadOnly): The DiskEncryptionSet ARM Id.
* **diskId**: string (ReadOnly): The disk id.
* **diskName**: string (ReadOnly): The disk name.
* **diskPath**: string (ReadOnly): The disk path.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (ReadOnly): The disk type.
* **isOSDisk**: string (ReadOnly): A value indicating whether the disk is the OS disk.
* **logStorageAccountId**: string (ReadOnly): The log storage account ARM Id.
* **logStorageAccountSasSecretName**: string (ReadOnly): The key vault secret name of the log storage account.
* **seedManagedDiskId**: string (ReadOnly): The ARM Id of the seed managed disk.
* **targetManagedDiskId**: string (ReadOnly): The ARM Id of the target managed disk.

## VMwareCbtNicDetails
### Properties
* **isPrimaryNic**: string (ReadOnly): A value indicating whether this is the primary NIC.
* **isSelectedForMigration**: string (ReadOnly): A value indicating whether this NIC is selected for migration.
* **nicId**: string (ReadOnly): The NIC Id.
* **sourceIPAddress**: string (ReadOnly): The source IP address.
* **sourceIPAddressType**: 'Dynamic' | 'Static' (ReadOnly): The source IP address type.
* **sourceNetworkId**: string (ReadOnly): Source network Id.
* **targetIPAddress**: string (ReadOnly): The target IP address.
* **targetIPAddressType**: 'Dynamic' | 'Static' (ReadOnly): The source IP address type.
* **targetSubnetName**: string (ReadOnly): Target subnet name.

## MigrationRecoveryPointProperties
### Properties
* **recoveryPointTime**: string (ReadOnly): The recovery point time.
* **recoveryPointType**: 'ApplicationConsistent' | 'CrashConsistent' | 'NotSpecified' (ReadOnly): The recovery point type.

## ProtectableItemProperties
### Properties
* **customDetails**: [ConfigurationSettings](#configurationsettings) (ReadOnly): Replication provider specific settings.
* **friendlyName**: string (ReadOnly): The name.
* **protectionReadinessErrors**: string[] (ReadOnly): The Current protection readiness errors.
* **protectionStatus**: string (ReadOnly): The protection status.
* **recoveryServicesProviderId**: string (ReadOnly): The recovery provider ARM Id.
* **replicationProtectedItemId**: string (ReadOnly): The ARM resource of protected items.
* **supportedReplicationProviders**: string[] (ReadOnly): The list of replication providers supported for the protectable item.

## ConfigurationSettings
* **Discriminator**: instanceType

### Base Properties
### HyperVVirtualMachineDetails
#### Properties
* **diskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): The Last successful failover time.
* **generation**: string (ReadOnly): The id of the object in fabric.
* **hasFibreChannelAdapter**: 'NotPresent' | 'Present' | 'Unknown' (ReadOnly): A value indicating whether the VM has a physical disk attached. String value of {SrsDataContract.PresenceStatus} enum.
* **hasPhysicalDisk**: 'NotPresent' | 'Present' | 'Unknown' (ReadOnly): A value indicating whether the VM has a physical disk attached. String value of {SrsDataContract.PresenceStatus} enum.
* **hasSharedVhd**: 'NotPresent' | 'Present' | 'Unknown' (ReadOnly): A value indicating whether the VM has a physical disk attached. String value of {SrsDataContract.PresenceStatus} enum.
* **instanceType**: 'HyperVVirtualMachine' (Required): Gets the class type. Overridden in derived classes.
* **osDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
* **sourceItemId**: string (ReadOnly): The source id of the object.

### ReplicationGroupDetails
#### Properties
* **instanceType**: 'ReplicationGroupDetails' (Required): Gets the class type. Overridden in derived classes.

### VmmVirtualMachineDetails
#### Properties
* **diskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): The Last successful failover time.
* **generation**: string (ReadOnly): The id of the object in fabric.
* **hasFibreChannelAdapter**: 'NotPresent' | 'Present' | 'Unknown' (ReadOnly): A value indicating whether the VM has a physical disk attached. String value of {SrsDataContract.PresenceStatus} enum.
* **hasPhysicalDisk**: 'NotPresent' | 'Present' | 'Unknown' (ReadOnly): A value indicating whether the VM has a physical disk attached. String value of {SrsDataContract.PresenceStatus} enum.
* **hasSharedVhd**: 'NotPresent' | 'Present' | 'Unknown' (ReadOnly): A value indicating whether the VM has a physical disk attached. String value of {SrsDataContract.PresenceStatus} enum.
* **instanceType**: 'VmmVirtualMachine' (Required): Gets the class type. Overridden in derived classes.
* **osDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
* **sourceItemId**: string (ReadOnly): The source id of the object.

### VMwareVirtualMachineDetails
#### Properties
* **agentGeneratedId**: string (ReadOnly): The ID generated by the InMage agent after it gets installed on guest. This is the ID to be used during InMage CreateProtection.
* **agentInstalled**: string (ReadOnly): The value indicating if InMage scout agent is installed on guest.
* **agentVersion**: string (ReadOnly): The agent version.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine. Value can be vCenter or physical.
* **diskDetails**: [InMageDiskDetails](#inmagediskdetails)[] (ReadOnly): The disk details.
* **instanceType**: 'VMwareVirtualMachine' (Required): Gets the class type. Overridden in derived classes.
* **ipAddress**: string (ReadOnly): The IP address.
* **osType**: string (ReadOnly): The OsType installed on VM.
* **poweredOn**: string (ReadOnly): The value indicating whether VM is powered on.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors.
* **vCenterInfrastructureId**: string (ReadOnly): The VCenter infrastructure Id.


## DiskDetails
### Properties
* **maxSizeMB**: int (ReadOnly): The hard disk max size in MB.
* **vhdId**: string (ReadOnly): The VHD Id.
* **vhdName**: string (ReadOnly): The VHD name.
* **vhdType**: string (ReadOnly): The type of the volume.

## OSDetails
### Properties
* **osEdition**: string (ReadOnly): The OSEdition.
* **oSMajorVersion**: string (ReadOnly): The OS Major Version.
* **oSMinorVersion**: string (ReadOnly): The OS Minor Version.
* **osType**: string (ReadOnly): VM Disk details.
* **oSVersion**: string (ReadOnly): The OS Version.
* **productType**: string (ReadOnly): Product type.

## InMageDiskDetails
### Properties
* **diskConfiguration**: string (ReadOnly): Whether disk is dynamic disk or basic disk.
* **diskId**: string (ReadOnly): The disk Id.
* **diskName**: string (ReadOnly): The disk name.
* **diskSizeInMB**: string (ReadOnly): The disk size in MB.
* **diskType**: string (ReadOnly): Whether disk is system disk or data disk.
* **volumeList**: [DiskVolumeDetails](#diskvolumedetails)[] (ReadOnly): Volumes of the disk.

## DiskVolumeDetails
### Properties
* **label**: string (ReadOnly): The volume label.
* **name**: string (ReadOnly): The volume name.

## EnableProtectionInputProperties
### Properties
* **activeLocation**: string (ReadOnly): The Current active location of the PE.
* **allowedOperations**: string[] (ReadOnly): The allowed operations on the Replication protected item.
* **currentScenario**: [CurrentScenarioDetails](#currentscenariodetails) (ReadOnly): Current scenario details of the protected entity.
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
* **providerSpecificDetails**: [EnableProtectionProviderSpecificInput](#enableprotectionproviderspecificinput): Enable protection provider specific input.
* **recoveryContainerId**: string (ReadOnly): The recovery container Id.
* **recoveryFabricFriendlyName**: string (ReadOnly): The friendly name of recovery fabric.
* **recoveryFabricId**: string (ReadOnly): The Arm Id of recovery fabric.
* **recoveryProtectionContainerFriendlyName**: string (ReadOnly): The name of recovery container friendly name.
* **recoveryServicesProviderId**: string (ReadOnly): The recovery provider ARM Id.
* **replicationHealth**: string (ReadOnly): The consolidated protection health for the VM taking any issues with SRS as well as all the replication units associated with the VM's replication group into account. This is a string representation of the ProtectionHealth enumeration.
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
### A2AEnableProtectionInput
#### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **diskEncryptionInfo**: [DiskEncryptionInfo](#diskencryptioninfo) (WriteOnly): Recovery disk encryption info (BEK and KEK).
* **fabricObjectId**: string: The fabric specific object Id of the virtual machine.
* **instanceType**: 'A2A' (Required): The class type.
* **isReplicationAgentUpdateRequired**: bool (ReadOnly): A value indicating whether replication agent update is required.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The time (in UTC) when the last RPO value was calculated by Protection Service.
* **lifecycleId**: string (ReadOnly): An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
* **managementId**: string (ReadOnly): The management Id.
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **multiVmGroupCreateOption**: 'AutoCreated' | 'UserSpecified' (ReadOnly): Whether Multi VM group is auto created or specified by user.
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
* **vmSyncedConfigDetails**: [AzureToAzureVmSyncedConfigDetails](#azuretoazurevmsyncedconfigdetails) (ReadOnly): Azure to Azure VM synced configuration details.

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

### HyperVReplicaAzureEnableProtectionInput
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
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
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

### InMageEnableProtectionInput
#### Properties
* **activeSiteType**: string (ReadOnly): The active location of the VM. If the VM is being protected from Azure, this field will take values from { Azure, OnPrem }. If the VM is being protected between two data-centers, this field will be OnPrem always.
* **agentDetails**: [InMageAgentDetails](#inmageagentdetails) (ReadOnly): The details of the InMage agent.
* **azureStorageAccountId**: string (ReadOnly): A value indicating the underlying Azure storage account. If the VM is not running in Azure, this value shall be set to null.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **consistencyPoints**: [InMageReplicationDetailsConsistencyPoints](#inmagereplicationdetailsconsistencypoints) (ReadOnly): The collection of Consistency points.
* **datastoreName**: string (WriteOnly): The target data store name.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine Value can be list of strings that contain data store names
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
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

### InMageAzureV2EnableProtectionInput
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


## DiskEncryptionInfo
### Properties
* **diskEncryptionKeyInfo**: [DiskEncryptionKeyInfo](#diskencryptionkeyinfo) (WriteOnly): Disk Encryption Key Information (BitLocker Encryption Key (BEK) on Windows).
* **keyEncryptionKeyInfo**: [KeyEncryptionKeyInfo](#keyencryptionkeyinfo) (WriteOnly): Key Encryption Key (KEK) information.

## DiskEncryptionKeyInfo
### Properties
* **keyVaultResourceArmId**: string (WriteOnly): The KeyVault resource ARM id for secret.
* **secretIdentifier**: string (WriteOnly): The secret url / identifier.

## KeyEncryptionKeyInfo
### Properties
* **keyIdentifier**: string (WriteOnly): The key url / identifier.
* **keyVaultResourceArmId**: string (WriteOnly): The KeyVault resource ARM id for key.

## A2AProtectedDiskDetails
### Properties
* **dataPendingAtSourceAgentInMB**: int (ReadOnly): The data pending at source virtual machine in MB.
* **dataPendingInStagingStorageAccountInMB**: int (ReadOnly): The data pending for replication in MB at staging account.
* **dekKeyVaultArmId**: string (ReadOnly): The KeyVault resource id for secret (BEK).
* **diskCapacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskName**: string (ReadOnly): The disk name.
* **diskType**: string (ReadOnly): The type of disk.
* **diskUri**: string (ReadOnly): The disk uri.
* **isDiskEncrypted**: bool (ReadOnly): A value indicating whether vm has encrypted os disk or not.
* **isDiskKeyEncrypted**: bool (ReadOnly): A value indicating whether disk key got encrypted or not.
* **kekKeyVaultArmId**: string (ReadOnly): The KeyVault resource id for key (KEK).
* **keyIdentifier**: string (ReadOnly): The key URL / identifier (KEK).
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **primaryDiskAzureStorageAccountId**: string (ReadOnly): The primary disk storage account.
* **primaryStagingAzureStorageAccountId**: string (ReadOnly): The primary staging storage account.
* **recoveryAzureStorageAccountId**: string (ReadOnly): The recovery disk storage account.
* **recoveryDiskUri**: string (ReadOnly): Recovery disk uri.
* **resyncRequired**: bool (ReadOnly): A value indicating whether resync is required for this disk.
* **secretIdentifier**: string (ReadOnly): The secret URL / identifier (BEK).

## A2AProtectedManagedDiskDetails
### Properties
* **dataPendingAtSourceAgentInMB**: int (ReadOnly): The data pending at source virtual machine in MB.
* **dataPendingInStagingStorageAccountInMB**: int (ReadOnly): The data pending for replication in MB at staging account.
* **dekKeyVaultArmId**: string (ReadOnly): The KeyVault resource id for secret (BEK).
* **diskCapacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskId**: string (ReadOnly): The managed disk Arm id.
* **diskName**: string (ReadOnly): The disk name.
* **diskType**: string (ReadOnly): The type of disk.
* **isDiskEncrypted**: bool (ReadOnly): A value indicating whether vm has encrypted os disk or not.
* **isDiskKeyEncrypted**: bool (ReadOnly): A value indicating whether disk key got encrypted or not.
* **kekKeyVaultArmId**: string (ReadOnly): The KeyVault resource id for key (KEK).
* **keyIdentifier**: string (ReadOnly): The key URL / identifier (KEK).
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **primaryStagingAzureStorageAccountId**: string (ReadOnly): The primary staging storage account.
* **recoveryReplicaDiskAccountType**: string (ReadOnly): The replica disk type. Its an optional value and will be same as source disk type if not user provided.
* **recoveryReplicaDiskId**: string (ReadOnly): Recovery replica disk Arm Id.
* **recoveryResourceGroupId**: string (ReadOnly): The recovery disk resource group Arm Id.
* **recoveryTargetDiskAccountType**: string (ReadOnly): The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.
* **recoveryTargetDiskId**: string (ReadOnly): Recovery target disk Arm Id.
* **resyncRequired**: bool (ReadOnly): A value indicating whether resync is required for this disk.
* **secretIdentifier**: string (ReadOnly): The secret URL / identifier (BEK).

## A2AVmDiskInputDetails
### Properties
* **diskUri**: string (WriteOnly): The disk Uri.
* **primaryStagingAzureStorageAccountId**: string (WriteOnly): The primary staging storage account Id.
* **recoveryAzureStorageAccountId**: string (WriteOnly): The recovery VHD storage account Id.

## A2AVmManagedDiskInputDetails
### Properties
* **diskId**: string (WriteOnly): The disk Id.
* **primaryStagingAzureStorageAccountId**: string (WriteOnly): The primary staging storage account Arm Id.
* **recoveryReplicaDiskAccountType**: string (WriteOnly): The replica disk type. Its an optional value and will be same as source disk type if not user provided.
* **recoveryResourceGroupId**: string (WriteOnly): The target resource group Arm Id.
* **recoveryTargetDiskAccountType**: string (WriteOnly): The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.

## VMNicDetails
### Properties
* **enableAcceleratedNetworkingOnRecovery**: bool (ReadOnly): A value indicating whether the NIC has accelerated networking enabled.
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
* **tags**: [AzureToAzureVmSyncedConfigDetailsTags](#azuretoazurevmsyncedconfigdetailstags) (ReadOnly): The Azure VM tags.

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

## AzureToAzureVmSyncedConfigDetailsTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InitialReplicationDetails
### Properties
* **initialReplicationProgressPercentage**: string (ReadOnly): The initial replication progress percentage.
* **initialReplicationType**: string (ReadOnly): Initial replication type.

## AzureVmDiskDetails
### Properties
* **lunId**: string (ReadOnly): Ordinal\LunId of the disk for the Azure VM.
* **maxSizeMB**: string (ReadOnly): Max side in MB.
* **targetDiskLocation**: string (ReadOnly): Blob uri of the Azure disk.
* **targetDiskName**: string (ReadOnly): The target Azure disk name.
* **vhdId**: string (ReadOnly): The VHD id.
* **vhdName**: string (ReadOnly): VHD name.
* **vhdType**: string (ReadOnly): VHD type.

## InMageAgentDetails
### Properties
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentUpdateStatus**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **agentVersion**: string (ReadOnly): The agent version.
* **postUpdateRebootStatus**: string (ReadOnly): A value indicating whether reboot is required after update is applied.

## InMageReplicationDetailsConsistencyPoints
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
* **onlyExcludeIfSingleVolume**: string (WriteOnly): The value indicating whether to exclude multi volume disk or not. If a disk has multiple volumes and one of the volume has label matching with VolumeLabel this disk will be excluded from replication if OnlyExcludeIfSingleVolume is false.
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

## RecoveryPointProperties
### Properties
* **providerSpecificDetails**: [ProviderSpecificRecoveryPointDetails](#providerspecificrecoverypointdetails) (ReadOnly): Replication provider specific recovery point details.
* **recoveryPointTime**: string (ReadOnly): The recovery point time.
* **recoveryPointType**: string (ReadOnly): The recovery point type: ApplicationConsistent, CrashConsistent.

## ProviderSpecificRecoveryPointDetails
* **Discriminator**: instanceType

### Base Properties
### A2ARecoveryPointDetails
#### Properties
* **instanceType**: 'A2A' (Required): Gets the provider type.
* **recoveryPointSyncType**: 'MultiVmSyncRecoveryPoint' | 'PerVmRecoveryPoint' (ReadOnly): A value indicating whether the recovery point is multi VM consistent.

### InMageAzureV2RecoveryPointDetails
#### Properties
* **instanceType**: 'InMageAzureV2' (Required): Gets the provider type.
* **isMultiVmSyncPoint**: string (ReadOnly): A value indicating whether the recovery point is multi VM consistent.


## CreateProtectionContainerMappingInputProperties
### Properties
* **health**: string (ReadOnly): Health of pairing.
* **healthErrorDetails**: [HealthError](#healtherror)[] (ReadOnly): Health error.
* **policyFriendlyName**: string (ReadOnly): Friendly name of replication policy.
* **policyId**: string: Applicable policy.
* **providerSpecificDetails**: [ProtectionContainerMappingProviderSpecificDetails](#protectioncontainermappingproviderspecificdetails) (ReadOnly): Container mapping provider specific details.
* **providerSpecificInput**: [ReplicationProviderSpecificContainerMappingInput](#replicationproviderspecificcontainermappinginput) (WriteOnly): Provider specific input for pairing operations.
* **sourceFabricFriendlyName**: string (ReadOnly): Friendly name of source fabric.
* **sourceProtectionContainerFriendlyName**: string (ReadOnly): Friendly name of source protection container.
* **state**: string (ReadOnly): Association Status
* **targetFabricFriendlyName**: string (ReadOnly): Friendly name of target fabric.
* **targetProtectionContainerFriendlyName**: string (ReadOnly): Friendly name of paired container.
* **targetProtectionContainerId**: string: The target unique protection container name.

## ProtectionContainerMappingProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### A2AProtectionContainerMappingDetails
#### Properties
* **agentAutoUpdateStatus**: 'Disabled' | 'Enabled' (ReadOnly): A value indicating whether the auto update is enabled.
* **automationAccountArmId**: string (ReadOnly): The automation account arm id.
* **instanceType**: 'A2A' (Required): Gets the class type. Overridden in derived classes.
* **jobScheduleName**: string (ReadOnly): The job schedule arm name.
* **scheduleName**: string (ReadOnly): The schedule arm name.

### VMwareCbtProtectionContainerMappingDetails
#### Properties
* **instanceType**: 'VMwareCbt' (Required): Gets the class type. Overridden in derived classes.
* **keyVaultId**: string (ReadOnly): The target key vault ARM Id.
* **keyVaultUri**: string (ReadOnly): The target key vault URI.
* **serviceBusConnectionStringSecretName**: string (ReadOnly): The secret name of the service bus connection string.
* **storageAccountId**: string (ReadOnly): The storage account ARM Id.
* **storageAccountSasSecretName**: string (ReadOnly): The secret name of the storage account.
* **targetLocation**: string (ReadOnly): The target location.


## ReplicationProviderSpecificContainerMappingInput
* **Discriminator**: instanceType

### Base Properties
### A2AContainerMappingInput
#### Properties
* **agentAutoUpdateStatus**: 'Disabled' | 'Enabled' (WriteOnly): A value indicating whether the auto update is enabled.
* **automationAccountArmId**: string (WriteOnly): The automation account arm id.
* **instanceType**: 'A2A' (Required): The class type.

### VMwareCbtContainerMappingInput
#### Properties
* **instanceType**: 'VMwareCbt' (Required): The class type.
* **keyVaultId**: string (Required, WriteOnly): The target key vault ARM Id.
* **keyVaultUri**: string (Required, WriteOnly): The target key vault URL.
* **serviceBusConnectionStringSecretName**: string (Required, WriteOnly): The secret name of the service bus connection string.
* **storageAccountId**: string (Required, WriteOnly): The storage account ARM Id.
* **storageAccountSasSecretName**: string (Required, WriteOnly): The secret name of the storage account.
* **targetLocation**: string (Required, WriteOnly): The target location.


## AddRecoveryServicesProviderInputProperties
### Properties
* **allowedScenarios**: string[] (ReadOnly): The scenarios allowed on this provider.
* **authenticationIdentityDetails**: [IdentityProviderDetails](#identityproviderdetails) (ReadOnly): Identity provider details.
* **authenticationIdentityInput**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): Identity provider input.
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
* **providerVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): Version related details.
* **providerVersionExpiryDate**: string (ReadOnly): Expiry date of the version.
* **providerVersionState**: string (ReadOnly): DRA version status.
* **resourceAccessIdentityDetails**: [IdentityProviderDetails](#identityproviderdetails) (ReadOnly): Identity provider details.
* **resourceAccessIdentityInput**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): Identity provider input.
* **serverVersion**: string (ReadOnly): The fabric provider.

## IdentityProviderDetails
### Properties
* **aadAuthority**: string (ReadOnly): The base authority for Azure Active Directory authentication.
* **applicationId**: string (ReadOnly): The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **audience**: string (ReadOnly): The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **objectId**: string (ReadOnly): The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **tenantId**: string (ReadOnly): The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

## IdentityProviderInput
### Properties
* **aadAuthority**: string (Required, WriteOnly): The base authority for Azure Active Directory authentication.
* **applicationId**: string (Required, WriteOnly): The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **audience**: string (Required, WriteOnly): The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **objectId**: string (Required, WriteOnly): The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **tenantId**: string (Required, WriteOnly): The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

## StorageClassificationProperties
### Properties
* **friendlyName**: string (ReadOnly): Friendly name of the Storage classification.

## StorageMappingInputProperties
### Properties
* **targetStorageClassificationId**: string: The ID of the storage object.

## AddVCenterRequestProperties
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

## JobProperties
### Properties
* **activityId**: string (ReadOnly): The activity id.
* **allowedActions**: string[] (ReadOnly): The Allowed action the job.
* **customDetails**: [JobDetails](#jobdetails) (ReadOnly): Job details based on specific job type.
* **endTime**: string (ReadOnly): The end time.
* **errors**: [JobErrorDetails](#joberrordetails)[] (ReadOnly): The errors.
* **friendlyName**: string (ReadOnly): The DisplayName.
* **scenarioName**: string (ReadOnly): The ScenarioName.
* **startTime**: string (ReadOnly): The start time.
* **state**: string (ReadOnly): The status of the Job. It is one of these values - NotStarted, InProgress, Succeeded, Failed, Cancelled, Suspended or Other.
* **stateDescription**: string (ReadOnly): The description of the state of the Job. For e.g. - For Succeeded state, description can be Completed, PartiallySucceeded, CompletedWithInformation or Skipped.
* **targetInstanceType**: string (ReadOnly): The type of the affected object which is of {Microsoft.Azure.SiteRecovery.V2015_11_10.AffectedObjectType} class.
* **targetObjectId**: string (ReadOnly): The affected Object Id.
* **targetObjectName**: string (ReadOnly): The name of the affected object.
* **tasks**: [ASRTask](#asrtask)[] (ReadOnly): The tasks.

## JobDetails
* **Discriminator**: instanceType

### Base Properties
* **affectedObjectDetails**: [JobDetailsAffectedObjectDetails](#jobdetailsaffectedobjectdetails) (ReadOnly): The affected object properties like source server, source cloud, target server, target cloud etc. based on the workflow object details.
### AsrJobDetails
#### Properties
* **instanceType**: 'AsrJobDetails' (Required): Gets the type of job details (see JobDetailsTypes enum for possible values).

### ExportJobDetails
#### Properties
* **blobUri**: string (ReadOnly): BlobUri of the exported jobs.
* **instanceType**: 'ExportJobDetails' (Required): Gets the type of job details (see JobDetailsTypes enum for possible values).
* **sasToken**: string (ReadOnly): The sas token to access blob.

### FailoverJobDetails
#### Properties
* **instanceType**: 'FailoverJobDetails' (Required): Gets the type of job details (see JobDetailsTypes enum for possible values).
* **protectedItemDetails**: [FailoverReplicationProtectedItemDetails](#failoverreplicationprotecteditemdetails)[] (ReadOnly): The test VM details.

### SwitchProtectionJobDetails
#### Properties
* **instanceType**: 'SwitchProtectionJobDetails' (Required): Gets the type of job details (see JobDetailsTypes enum for possible values).
* **newReplicationProtectedItemId**: string (ReadOnly): ARM Id of the new replication protected item.

### TestFailoverJobDetails
#### Properties
* **comments**: string (ReadOnly): The test failover comments.
* **instanceType**: 'TestFailoverJobDetails' (Required): Gets the type of job details (see JobDetailsTypes enum for possible values).
* **networkFriendlyName**: string (ReadOnly): The test network friendly name.
* **networkName**: string (ReadOnly): The test network name.
* **networkType**: string (ReadOnly): The test network type (see TestFailoverInput enum for possible values).
* **protectedItemDetails**: [FailoverReplicationProtectedItemDetails](#failoverreplicationprotecteditemdetails)[] (ReadOnly): The test VM details.
* **testFailoverStatus**: string (ReadOnly): The test failover status.


## JobDetailsAffectedObjectDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FailoverReplicationProtectedItemDetails
### Properties
* **friendlyName**: string (ReadOnly): The friendly name.
* **name**: string (ReadOnly): The name.
* **networkConnectionStatus**: string (ReadOnly): The network connection status.
* **networkFriendlyName**: string (ReadOnly): The network friendly name.
* **recoveryPointId**: string (ReadOnly): The recovery point Id.
* **recoveryPointTime**: string (ReadOnly): The recovery point time.
* **subnet**: string (ReadOnly): The network subnet.
* **testVmFriendlyName**: string (ReadOnly): The test Vm friendly name.
* **testVmName**: string (ReadOnly): The test Vm name.

## JobErrorDetails
### Properties
* **creationTime**: string (ReadOnly): The creation time of job error.
* **errorLevel**: string (ReadOnly): Error level of error.
* **providerErrorDetails**: [ProviderError](#providererror) (ReadOnly): This class contains the error details per object.
* **serviceErrorDetails**: [ServiceError](#serviceerror) (ReadOnly): ASR error model
* **taskId**: string (ReadOnly): The Id of the task.

## ProviderError
### Properties
* **errorCode**: int (ReadOnly): The Error code.
* **errorId**: string (ReadOnly): The Provider error Id.
* **errorMessage**: string (ReadOnly): The Error message.
* **possibleCauses**: string (ReadOnly): The possible causes for the error.
* **recommendedAction**: string (ReadOnly): The recommended action to resolve the error.

## ServiceError
### Properties
* **activityId**: string (ReadOnly): Activity Id.
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error message.
* **possibleCauses**: string (ReadOnly): Possible causes of error.
* **recommendedAction**: string (ReadOnly): Recommended action to resolve error.

## ASRTask
### Properties
* **allowedActions**: string[] (ReadOnly): The state/actions applicable on this task.
* **customDetails**: [TaskTypeDetails](#tasktypedetails) (ReadOnly): Task details based on specific task type.
* **endTime**: string (ReadOnly): The end time.
* **errors**: [JobErrorDetails](#joberrordetails)[] (ReadOnly): The task error details.
* **friendlyName**: string (ReadOnly): The name.
* **groupTaskCustomDetails**: [GroupTaskDetails](#grouptaskdetails) (ReadOnly): This class represents the group task details when parent child relationship exists in the drill down.
* **name**: string (ReadOnly): The unique Task name.
* **startTime**: string (ReadOnly): The start time.
* **state**: string (ReadOnly): The State. It is one of these values - NotStarted, InProgress, Succeeded, Failed, Cancelled, Suspended or Other.
* **stateDescription**: string (ReadOnly): The description of the task state. For example - For Succeeded state, description can be Completed, PartiallySucceeded, CompletedWithInformation or Skipped.
* **taskId**: string (ReadOnly): The Id.
* **taskType**: string (ReadOnly): The type of task. Details in CustomDetails property depend on this type.

## TaskTypeDetails
* **Discriminator**: instanceType

### Base Properties
### AutomationRunbookTaskDetails
#### Properties
* **accountName**: string (ReadOnly): The automation account name of the runbook.
* **cloudServiceName**: string (ReadOnly): The cloud service of the automation runbook account.
* **instanceType**: 'AutomationRunbookTaskDetails' (Required): The type of task details.
* **isPrimarySideScript**: bool (ReadOnly): A value indicating whether it is a primary side script or not.
* **jobId**: string (ReadOnly): The job Id of the runbook execution.
* **jobOutput**: string (ReadOnly): The execution output of the runbook.
* **name**: string (ReadOnly): The recovery plan task name.
* **runbookId**: string (ReadOnly): The runbook Id.
* **runbookName**: string (ReadOnly): The runbook name.
* **subscriptionId**: string (ReadOnly): The subscription Id of the automation runbook account.

### ConsistencyCheckTaskDetails
#### Properties
* **instanceType**: 'ConsistencyCheckTaskDetails' (Required): The type of task details.
* **vmDetails**: [InconsistentVmDetails](#inconsistentvmdetails)[] (ReadOnly): The list of inconsistent Vm details.

### FabricReplicationGroupTaskDetails
#### Properties
* **instanceType**: 'FabricReplicationGroupTaskDetails' (Required): The type of task details.
* **jobTask**: [JobEntity](#jobentity) (ReadOnly): This class contains the minimal job details required to navigate to the desired drill down.
* **skippedReason**: string (ReadOnly): The skipped reason.
* **skippedReasonString**: string (ReadOnly): The skipped reason string.

### JobTaskDetails
#### Properties
* **instanceType**: 'JobTaskDetails' (Required): The type of task details.
* **jobTask**: [JobEntity](#jobentity) (ReadOnly): This class contains the minimal job details required to navigate to the desired drill down.

### ManualActionTaskDetails
#### Properties
* **instanceType**: 'ManualActionTaskDetails' (Required): The type of task details.
* **instructions**: string (ReadOnly): The instructions.
* **name**: string (ReadOnly): The name.
* **observation**: string (ReadOnly): The observation.

### ScriptActionTaskDetails
#### Properties
* **instanceType**: 'ScriptActionTaskDetails' (Required): The type of task details.
* **isPrimarySideScript**: bool (ReadOnly): A value indicating whether it is a primary side script or not.
* **name**: string (ReadOnly): The name.
* **output**: string (ReadOnly): The output.
* **path**: string (ReadOnly): The path.

### VirtualMachineTaskDetails
#### Properties
* **instanceType**: 'VirtualMachineTaskDetails' (Required): The type of task details.
* **jobTask**: [JobEntity](#jobentity) (ReadOnly): This class contains the minimal job details required to navigate to the desired drill down.
* **skippedReason**: string (ReadOnly): The skipped reason.
* **skippedReasonString**: string (ReadOnly): The skipped reason string.

### VmNicUpdatesTaskDetails
#### Properties
* **instanceType**: 'VmNicUpdatesTaskDetails' (Required): The type of task details.
* **name**: string (ReadOnly): Name of the Nic.
* **nicId**: string (ReadOnly): Nic Id.
* **vmId**: string (ReadOnly): Virtual machine Id.


## InconsistentVmDetails
### Properties
* **cloudName**: string (ReadOnly): The Cloud name.
* **details**: string[] (ReadOnly): The list of details regarding state of the Protected Entity in SRS and On prem.
* **errorIds**: string[] (ReadOnly): The list of error ids.
* **vmName**: string (ReadOnly): The Vm name.

## JobEntity
### Properties
* **jobFriendlyName**: string (ReadOnly): The job display name.
* **jobId**: string (ReadOnly): The job id.
* **jobScenarioName**: string (ReadOnly): The job name. Enum type ScenarioName.
* **targetInstanceType**: string (ReadOnly): The workflow affected object type.
* **targetObjectId**: string (ReadOnly): The object id.
* **targetObjectName**: string (ReadOnly): The object name.

## GroupTaskDetails
* **Discriminator**: instanceType

### Base Properties
* **childTasks**: [ASRTask](#asrtask)[] (ReadOnly): The child tasks.
### InlineWorkflowTaskDetails
#### Properties
* **instanceType**: 'InlineWorkflowTaskDetails' (Required): The type of task details.
* **workflowIds**: string[] (ReadOnly): The list of child workflow ids.

### RecoveryPlanGroupTaskDetails
#### Properties
* **groupId**: string (ReadOnly): The group identifier.
* **instanceType**: 'RecoveryPlanGroupTaskDetails' (Required): The type of task details.
* **name**: string (ReadOnly): The name.
* **rpGroupType**: string (ReadOnly): The group type.

### RecoveryPlanShutdownGroupTaskDetails
#### Properties
* **groupId**: string (ReadOnly): The group identifier.
* **instanceType**: 'RecoveryPlanShutdownGroupTaskDetails' (Required): The type of task details.
* **name**: string (ReadOnly): The name.
* **rpGroupType**: string (ReadOnly): The group type.


## CreatePolicyInputProperties
### Properties
* **friendlyName**: string (ReadOnly): The FriendlyName.
* **providerSpecificDetails**: [PolicyProviderSpecificDetails](#policyproviderspecificdetails) (ReadOnly): Base class for Provider specific details for policies.
* **providerSpecificInput**: [PolicyProviderSpecificInput](#policyproviderspecificinput) (WriteOnly): Base class for provider specific input

## PolicyProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### A2APolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int (ReadOnly): The crash consistent snapshot frequency in minutes.
* **instanceType**: 'A2A' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### HyperVReplicaPolicyDetails
#### Properties
* **allowedAuthenticationType**: int (ReadOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly): A value indicating the application consistent frequency.
* **compression**: string (ReadOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (ReadOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012' (Required): Gets the class type. Overridden in derived classes.
* **offlineReplicationExportPath**: string (ReadOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (ReadOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (ReadOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (ReadOnly): A value indicating the number of recovery points.
* **replicaDeletionOption**: string (ReadOnly): A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
* **replicationPort**: int (ReadOnly): A value indicating the recovery HTTPS port.

### HyperVReplicaBluePolicyDetails
#### Properties
* **allowedAuthenticationType**: int (ReadOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly): A value indicating the application consistent frequency.
* **compression**: string (ReadOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (ReadOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012R2' (Required): Gets the class type. Overridden in derived classes.
* **offlineReplicationExportPath**: string (ReadOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (ReadOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (ReadOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (ReadOnly): A value indicating the number of recovery points.
* **replicaDeletionOption**: string (ReadOnly): A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
* **replicationFrequencyInSeconds**: int (ReadOnly): A value indicating the replication interval.
* **replicationPort**: int (ReadOnly): A value indicating the recovery HTTPS port.

### HyperVReplicaAzurePolicyDetails
#### Properties
* **activeStorageAccountId**: string (ReadOnly): The active storage account Id.
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly): The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
* **encryption**: string (ReadOnly): A value indicating whether encryption is enabled for virtual machines in this cloud.
* **instanceType**: 'HyperVReplicaAzure' (Required): Gets the class type. Overridden in derived classes.
* **onlineReplicationStartTime**: string (ReadOnly): The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
* **recoveryPointHistoryDurationInHours**: int (ReadOnly): The duration (in hours) to which point the recovery history needs to be maintained.
* **replicationInterval**: int (ReadOnly): The replication interval.

### HyperVReplicaBasePolicyDetails
#### Properties
* **allowedAuthenticationType**: int (ReadOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly): A value indicating the application consistent frequency.
* **compression**: string (ReadOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (ReadOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplicaBasePolicyDetails' (Required): Gets the class type. Overridden in derived classes.
* **offlineReplicationExportPath**: string (ReadOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (ReadOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (ReadOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (ReadOnly): A value indicating the number of recovery points.
* **replicaDeletionOption**: string (ReadOnly): A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
* **replicationPort**: int (ReadOnly): A value indicating the recovery HTTPS port.

### InMagePolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **instanceType**: 'InMage' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### InMageAzureV2PolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int (ReadOnly): The crash consistent snapshot frequency in minutes.
* **instanceType**: 'InMageAzureV2' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### InMageBasePolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **instanceType**: 'InMageBasePolicyDetails' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### RcmAzureMigrationPolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int (ReadOnly): The crash consistent snapshot frequency in minutes.
* **instanceType**: 'RcmAzureMigration' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: 'Disabled' | 'Enabled' (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### VmwareCbtPolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int (ReadOnly): The crash consistent snapshot frequency in minutes.
* **instanceType**: 'VMwareCbt' (Required): Gets the class type. Overridden in derived classes.
* **recoveryPointHistoryInMinutes**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.


## PolicyProviderSpecificInput
* **Discriminator**: instanceType

### Base Properties
### A2APolicyCreationInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (WriteOnly): The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'A2A' (Required): The class type.
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
* **recoveryPointHistory**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.

### HyperVReplicaPolicyInput
#### Properties
* **allowedAuthenticationType**: int (WriteOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly): A value indicating the application consistent frequency.
* **compression**: string (WriteOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (WriteOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012' (Required): The class type.
* **offlineReplicationExportPath**: string (WriteOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (WriteOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (WriteOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (WriteOnly): A value indicating the number of recovery points.
* **replicaDeletion**: string (WriteOnly): A value indicating whether the VM has to be auto deleted.
* **replicationPort**: int (WriteOnly): A value indicating the recovery HTTPS port.

### HyperVReplicaBluePolicyInput
#### Properties
* **allowedAuthenticationType**: int (WriteOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly): A value indicating the application consistent frequency.
* **compression**: string (WriteOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (WriteOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012R2' (Required): The class type.
* **offlineReplicationExportPath**: string (WriteOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (WriteOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (WriteOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (WriteOnly): A value indicating the number of recovery points.
* **replicaDeletion**: string (WriteOnly): A value indicating whether the VM has to be auto deleted.
* **replicationFrequencyInSeconds**: int (WriteOnly): A value indicating the replication interval.
* **replicationPort**: int (WriteOnly): A value indicating the recovery HTTPS port.

### HyperVReplicaAzurePolicyInput
#### Properties
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly): The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
* **instanceType**: 'HyperVReplicaAzure' (Required): The class type.
* **onlineReplicationStartTime**: string (WriteOnly): The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
* **recoveryPointHistoryDuration**: int (WriteOnly): The duration (in hours) to which point the recovery history needs to be maintained.
* **replicationInterval**: int (WriteOnly): The replication interval.
* **storageAccounts**: string[] (WriteOnly): The list of storage accounts to which the VMs in the primary cloud can replicate to.

### InMagePolicyInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **instanceType**: 'InMage' (Required): The class type.
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
* **recoveryPointHistory**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (WriteOnly): The recovery point threshold in minutes.

### InMageAzureV2PolicyInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (WriteOnly): The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'InMageAzureV2' (Required): The class type.
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
* **recoveryPointHistory**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (WriteOnly): The recovery point threshold in minutes.

### VMwareCbtPolicyCreationInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (WriteOnly): The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'VMwareCbt' (Required): The class type.
* **recoveryPointHistoryInMinutes**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.


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
### RecoveryPlanAutomationRunbookActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required): The fabric location.
* **instanceType**: 'AutomationRunbookActionDetails' (Required): Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
* **runbookId**: string: The runbook ARM Id.
* **timeout**: string: The runbook timeout.

### RecoveryPlanManualActionDetails
#### Properties
* **description**: string: The manual action description.
* **instanceType**: 'ManualActionDetails' (Required): Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).

### RecoveryPlanScriptActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required): The fabric location.
* **instanceType**: 'ScriptActionDetails' (Required): Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
* **path**: string (Required): The script path.
* **timeout**: string: The script timeout.


## RecoveryPlanProtectedItem
### Properties
* **id**: string: The ARM Id of the recovery plan protected item.
* **virtualMachineId**: string: The virtual machine Id.

