# Microsoft.RecoveryServices @ 2021-02-10

## Resource Microsoft.RecoveryServices/vaults/replicationAlertSettings@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigureAlertRequestProperties](#configurealertrequestproperties): Properties of a configure alert request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationAlertSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FabricCreationInputProperties](#fabriccreationinputproperties): Properties of site details provided during the time of site creation.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateNetworkMappingInputProperties](#createnetworkmappinginputproperties) (Required): Common input details for network mapping operation.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerInputProperties](#createprotectioncontainerinputproperties): Create protection container input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnableMigrationInputProperties](#enablemigrationinputproperties) (Required): Enable migration input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnableProtectionInputProperties](#enableprotectioninputproperties): Enable protection input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerMappingInputProperties](#createprotectioncontainermappinginputproperties): Configure pairing input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddRecoveryServicesProviderInputProperties](#addrecoveryservicesproviderinputproperties) (Required): The properties of an add provider request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageMappingInputProperties](#storagemappinginputproperties): Storage mapping input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddVCenterRequestProperties](#addvcenterrequestproperties): The properties of an add vCenter request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationPolicies@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreatePolicyInputProperties](#createpolicyinputproperties): Policy creation properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationProtectionIntents@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionIntentProperties](#createprotectionintentproperties): Create protection intent input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationProtectionIntents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateRecoveryPlanInputProperties](#createrecoveryplaninputproperties) (Required): Recovery plan creation properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationRecoveryPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationVaultSettings@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VaultSettingCreationInputProperties](#vaultsettingcreationinputproperties) (Required): Input to create vault setting.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationVaultSettings' (ReadOnly, DeployTimeConstant): The resource type

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
* **zones**: [A2AZoneDetails](#a2azonedetails)[] (ReadOnly): The zones.

### HyperVSite
#### Properties
* **hyperVHosts**: [HyperVHostDetails](#hypervhostdetails)[] (ReadOnly): The list of Hyper-V hosts associated with the fabric.
* **instanceType**: 'HyperVSite' (Required): HyperVSite fabric specific details.

### InMageRcm
#### Properties
* **agentDetails**: [AgentDetails](#agentdetails)[] (ReadOnly): The list of agent details.
* **controlPlaneUri**: string (ReadOnly): The control plane Uri.
* **dataPlaneUri**: string (ReadOnly): The data plane Uri.
* **dras**: [DraDetails](#dradetails)[] (ReadOnly): The list of DRAs.
* **instanceType**: 'InMageRcm' (Required): InMageRcm specific policy details.
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
* **sourceAgentIdentity**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): Identity provider input.
* **vmwareSiteId**: string (Required): The ARM Id of the VMware site.

### VMM
#### Properties
* **instanceType**: 'VMM' (Required): VMM fabric specific details.

### VMware
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
* **versionStatus**: string (ReadOnly): Version status.
* **webLoad**: string (ReadOnly): The web load.
* **webLoadStatus**: string (ReadOnly): The web load status.

### VMwareV2
#### Properties
* **instanceType**: 'VMwareV2' (Required): VMwareV2 fabric provider specific settings.
* **migrationSolutionId**: string (Required): The ARM Id of the migration solution.
* **physicalSiteId**: string: The ARM Id of the physical site.
* **processServers**: [ProcessServerDetails](#processserverdetails)[] (ReadOnly): The list of process servers.
* **serviceContainerId**: string (ReadOnly): The service container Id.
* **serviceEndpoint**: string (ReadOnly): The service endpoint.
* **serviceResourceId**: string (ReadOnly): The service resource Id.
* **vmwareSiteId**: string: The ARM Id of the VMware site.


## Azure
### Properties
* **containerIds**: string[] (ReadOnly): The container Ids for the Azure fabric.
* **instanceType**: 'Azure' (Required): Fabric provider specific settings.
* **location**: string: The Location.
* **zones**: [A2AZoneDetails](#a2azonedetails)[] (ReadOnly): The zones.

## A2AZoneDetails
### Properties
* **source**: string (ReadOnly): Source zone info.
* **target**: string (ReadOnly): The target zone info.

## HyperVSite
### Properties
* **hyperVHosts**: [HyperVHostDetails](#hypervhostdetails)[] (ReadOnly): The list of Hyper-V hosts associated with the fabric.
* **instanceType**: 'HyperVSite' (Required): HyperVSite fabric specific details.

## HyperVHostDetails
### Properties
* **id**: string (ReadOnly): The Hyper-V host Id.
* **marsAgentVersion**: string (ReadOnly): The Mars agent version.
* **name**: string (ReadOnly): The Hyper-V host name.

## InMageRcm
### Properties
* **agentDetails**: [AgentDetails](#agentdetails)[] (ReadOnly): The list of agent details.
* **controlPlaneUri**: string (ReadOnly): The control plane Uri.
* **dataPlaneUri**: string (ReadOnly): The data plane Uri.
* **dras**: [DraDetails](#dradetails)[] (ReadOnly): The list of DRAs.
* **instanceType**: 'InMageRcm' (Required): InMageRcm specific policy details.
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
* **sourceAgentIdentity**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): Identity provider input.
* **vmwareSiteId**: string (Required): The ARM Id of the VMware site.

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

## DraDetails
### Properties
* **biosId**: string (ReadOnly): The DRA Bios Id.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The DRA Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the DRA.
* **name**: string (ReadOnly): The DRA name.
* **version**: string (ReadOnly): The version.

## HealthError
### Properties
* **creationTimeUtc**: string (ReadOnly): Error creation time (UTC).
* **customerResolvability**: 'Allowed' | 'NotAllowed' (ReadOnly): Value indicating whether the health error is customer resolvable.
* **entityId**: string (ReadOnly): ID of the entity.
* **errorCategory**: string (ReadOnly): Category of error.
* **errorCode**: string (ReadOnly): Error code.
* **errorId**: string (ReadOnly): The health error unique id.
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
* **creationTimeUtc**: string (ReadOnly): Error creation time (UTC).
* **customerResolvability**: 'Allowed' | 'NotAllowed' (ReadOnly): Value indicating whether the health error is customer resolvable.
* **entityId**: string (ReadOnly): ID of the entity.
* **errorCategory**: string (ReadOnly): Category of error.
* **errorCode**: string (ReadOnly): Error code.
* **errorId**: string (ReadOnly): The health error unique id.
* **errorLevel**: string (ReadOnly): Level of error.
* **errorMessage**: string (ReadOnly): Error message.
* **errorSource**: string (ReadOnly): Source of error.
* **errorType**: string (ReadOnly): Type of error.
* **possibleCauses**: string (ReadOnly): Possible causes of error.
* **recommendedAction**: string (ReadOnly): Recommended action to resolve error.
* **recoveryProviderErrorMessage**: string (ReadOnly): DRA error message.
* **summaryMessage**: string (ReadOnly): Summary message of the entity.

## MarsAgentDetails
### Properties
* **biosId**: string (ReadOnly): The Mars agent Bios Id.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The Mars agent Fqdn.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the Mars agent.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The Mars agent Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the Mars agent.
* **name**: string (ReadOnly): The Mars agent name.
* **version**: string (ReadOnly): The version.

## ProcessServerDetails
### Properties
* **availableMemoryInBytes**: int (ReadOnly): The available memory.
* **availableSpaceInBytes**: int (ReadOnly): The available disk space.
* **biosId**: string (ReadOnly): The process server Bios Id.
* **diskUsageStatus**: 'Critical' | 'Healthy' | 'Unknown' | 'Warning' (ReadOnly): The disk usage status.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The process server Fqdn.
* **freeSpacePercentage**: int (ReadOnly): The free disk space percentage.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the process server.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **historicHealth**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The historic health of the process server based on the health in last 24 hours.
* **id**: string (ReadOnly): The process server Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the process server.
* **memoryUsagePercentage**: int (ReadOnly): The memory usage percentage.
* **memoryUsageStatus**: 'Critical' | 'Healthy' | 'Unknown' | 'Warning' (ReadOnly): The memory usage status.
* **name**: string (ReadOnly): The process server name.
* **processorUsagePercentage**: int (ReadOnly): The processor usage percentage.
* **processorUsageStatus**: 'Critical' | 'Healthy' | 'Unknown' | 'Warning' (ReadOnly): The processor usage status.
* **systemLoad**: int (ReadOnly): The system load.
* **systemLoadStatus**: 'Critical' | 'Healthy' | 'Unknown' | 'Warning' (ReadOnly): The system load status.
* **throughputInBytes**: int (ReadOnly): The throughput in bytes.
* **throughputStatus**: 'Critical' | 'Healthy' | 'Unknown' | 'Warning' (ReadOnly): The throughput status.
* **throughputUploadPendingDataInBytes**: int (ReadOnly): The uploading pending data in bytes.
* **totalMemoryInBytes**: int (ReadOnly): The total memory.
* **totalSpaceInBytes**: int (ReadOnly): The total disk space.
* **usedMemoryInBytes**: int (ReadOnly): The used memory.
* **usedSpaceInBytes**: int (ReadOnly): The used disk space.
* **version**: string (ReadOnly): The version.

## PushInstallerDetails
### Properties
* **biosId**: string (ReadOnly): The push installer Bios Id.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The push installer Fqdn.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the push installer.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The push installer Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the push installer.
* **name**: string (ReadOnly): The push installer name.
* **version**: string (ReadOnly): The version.

## RcmProxyDetails
### Properties
* **biosId**: string (ReadOnly): The RCM proxy Bios Id.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The RCM proxy Fqdn.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the RCM proxy.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The RCM proxy Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the RCM proxy.
* **name**: string (ReadOnly): The RCM proxy name.
* **version**: string (ReadOnly): The version.

## ReplicationAgentDetails
### Properties
* **biosId**: string (ReadOnly): The replication agent Bios Id.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The replication agent Fqdn.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the replication agent.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The replication agent Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the replication agent.
* **name**: string (ReadOnly): The replication agent name.
* **version**: string (ReadOnly): The version.

## ReprotectAgentDetails
### Properties
* **biosId**: string (ReadOnly): The reprotect agent Bios Id.
* **fabricObjectId**: string (ReadOnly): The fabric object Id.
* **fqdn**: string (ReadOnly): The reprotect agent Fqdn.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the reprotect agent.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The reprotect agent Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the reprotect agent.
* **name**: string (ReadOnly): The reprotect agent name.
* **version**: string (ReadOnly): The version.

## IdentityProviderInput
### Properties
* **aadAuthority**: string (Required, WriteOnly): The base authority for Azure Active Directory authentication.
* **applicationId**: string (Required, WriteOnly): The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **audience**: string (Required, WriteOnly): The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **objectId**: string (Required, WriteOnly): The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **tenantId**: string (Required, WriteOnly): The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

## VMM
### Properties
* **instanceType**: 'VMM' (Required): VMM fabric specific details.

## VMware
### Properties
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
* **versionStatus**: string (ReadOnly): Version status.
* **webLoad**: string (ReadOnly): The web load.
* **webLoadStatus**: string (ReadOnly): The web load status.

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
* **versionStatus**: string (ReadOnly): Version status.

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
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of Process Server.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): Health errors.
* **hostId**: string (ReadOnly): The agent generated Id.
* **id**: string (ReadOnly): The Process Server Id.
* **ipAddress**: string (ReadOnly): The IP address of the server.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the server.
* **machineCount**: string (ReadOnly): The servers configured with this PS.
* **marsCommunicationStatus**: string (ReadOnly): The MARS communication status.
* **marsRegistrationStatus**: string (ReadOnly): The MARS registration status.
* **memoryUsageStatus**: string (ReadOnly): The memory usage status.
* **mobilityServiceUpdates**: [MobilityServiceUpdate](#mobilityserviceupdate)[] (ReadOnly): The list of the mobility service updates available on the Process Server.
* **osType**: string (ReadOnly): The OS type of the server.
* **osVersion**: string (ReadOnly): OS Version of the process server. Note: This will get populated if user has CS version greater than 9.12.0.0.
* **psServiceStatus**: string (ReadOnly): The PS service status.
* **psStatsRefreshTime**: string (ReadOnly): The process server stats refresh time.
* **replicationPairCount**: string (ReadOnly): The number of replication pairs configured in this PS.
* **spaceUsageStatus**: string (ReadOnly): The space usage status.
* **sslCertExpiryDate**: string (ReadOnly): The PS SSL cert expiry date.
* **sslCertExpiryRemainingDays**: int (ReadOnly): CS SSL cert expiry date.
* **systemLoad**: string (ReadOnly): The percentage of the system load.
* **systemLoadStatus**: string (ReadOnly): The system load status.
* **throughputInBytes**: int (ReadOnly): The throughput in bytes.
* **throughputInMBps**: int (ReadOnly): The throughput in MBps.
* **throughputStatus**: string (ReadOnly): The throughput status.
* **throughputUploadPendingDataInBytes**: int (ReadOnly): The uploading pending data in bytes.
* **totalMemoryInBytes**: int (ReadOnly): The total memory.
* **totalSpaceInBytes**: int (ReadOnly): The total space.
* **versionStatus**: string (ReadOnly): Version status.

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
* **instanceType**: 'VMwareV2' (Required): VMwareV2 fabric provider specific settings.
* **migrationSolutionId**: string (Required): The ARM Id of the migration solution.
* **physicalSiteId**: string: The ARM Id of the physical site.
* **processServers**: [ProcessServerDetails](#processserverdetails)[] (ReadOnly): The list of process servers.
* **serviceContainerId**: string (ReadOnly): The service container Id.
* **serviceEndpoint**: string (ReadOnly): The service endpoint.
* **serviceResourceId**: string (ReadOnly): The service resource Id.
* **vmwareSiteId**: string: The ARM Id of the VMware site.

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
* **recoveryNetworkId**: string (Required): Recovery network Id.
* **state**: string (ReadOnly): The pairing state for network mapping.

## FabricSpecificCreateNetworkMappingInput
* **Discriminator**: instanceType
### Base Properties
### AzureToAzure
#### Properties
* **instanceType**: 'AzureToAzure' (Required): A2A Network Mapping fabric specific settings.
* **primaryNetworkId**: string (Required, WriteOnly): The primary azure vnet Id.

### VmmToAzure
#### Properties
* **instanceType**: 'VmmToAzure' (Required): E2A Network Mapping fabric specific settings.

### VmmToVmm
#### Properties
* **instanceType**: 'VmmToVmm' (Required): E2E Network Mapping fabric specific settings.


## AzureToAzure
### Properties
* **instanceType**: 'AzureToAzure' (Required): A2A Network Mapping fabric specific settings.
* **primaryNetworkId**: string (Required, WriteOnly): The primary azure vnet Id.

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
* **primaryNetworkId**: string (Required, WriteOnly): The primary azure vnet Id.

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
* **protectedItemCount**: int (ReadOnly): Number of protected PEs.
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
* **instanceType**: 'A2A' (Required): Recovery plan A2A specific details.

### A2ACrossClusterMigration
#### Properties
* **instanceType**: 'A2ACrossClusterMigration' (Required): A2A Cross-Cluster Migration Policy creation input.

### VMwareCbt
#### Properties
* **instanceType**: 'VMwareCbt' (Required): VMware Cbt specific policy details.


## A2A
### Properties
* **instanceType**: 'A2A' (Required): Recovery plan A2A specific details.

## A2ACrossClusterMigration
### Properties
* **instanceType**: 'A2ACrossClusterMigration' (Required): A2A Cross-Cluster Migration Policy creation input.

## VMwareCbt
### Properties
* **instanceType**: 'VMwareCbt' (Required): VMware Cbt specific policy details.

## EnableMigrationInputProperties
### Properties
* **allowedOperations**: 'DisableMigration' | 'Migrate' | 'StartResync' | 'TestMigrate' | 'TestMigrateCleanup'[] (ReadOnly): The allowed operations on the migration item based on the current migration state of the item.
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
### VMwareCbt
#### Properties
* **instanceType**: 'VMwareCbt' (Required): VMware Cbt specific policy details.


## EnableProtectionInputProperties
### Properties
* **activeLocation**: string (ReadOnly): The Current active location of the PE.
* **allowedOperations**: string[] (ReadOnly): The allowed operations on the Replication protected item.
* **currentScenario**: [CurrentScenarioDetails](#currentscenariodetails) (ReadOnly): Current scenario details of the protected entity.
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
### A2A
#### Properties
* **instanceType**: 'A2A' (Required): Recovery plan A2A specific details.

### A2ACrossClusterMigration
#### Properties
* **instanceType**: 'A2ACrossClusterMigration' (Required): A2A Cross-Cluster Migration Policy creation input.

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
* **azureVmDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **diskEncryptionSetId**: string (WriteOnly): The DiskEncryptionSet ARM Id.
* **disksToInclude**: string[] (WriteOnly): The list of VHD Ids of disks to be protected.
* **disksToIncludeForManagedDisks**: [HyperVReplicaAzureDiskInputDetails](#hypervreplicaazurediskinputdetails)[] (WriteOnly): The disks to include list for managed disks.
* **diskType**: 'Premium_LRS' | 'Standard_LRS' | 'StandardSSD_LRS' (WriteOnly): The DiskType.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
* **encryption**: string (ReadOnly): The encryption info.
* **hvHostVmId**: string (WriteOnly): The Hyper-V host VM Id.
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaAzure' (Required): Hyper-V Replica Azure specific protection profile details.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer': License type.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
* **osType**: string (WriteOnly): The OS type associated with VM.
* **protectedManagedDisks**: [HyperVReplicaAzureManagedDiskDetails](#hypervreplicaazuremanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVmName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **rpoInSeconds**: int (ReadOnly): Last RPO value.
* **seedManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the seed managed disks.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **sqlServerLicenseType**: 'AHUB' | 'NoLicenseType' | 'NotSpecified' | 'PAYG': The SQL Server license type.
* **targetAvailabilitySetId**: string (WriteOnly): The target availability set ARM Id for resource manager deployment.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure VM Name.
* **targetManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target managed disks.
* **targetNicTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target NICs.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetStorageAccountId**: string (WriteOnly): The storage account Id.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **targetVmTags**: [Dictionary<string,String>](#dictionarystringstring): The target VM tags.
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
* **datastoreName**: string (WriteOnly): The target datastore name.
* **datastores**: string[] (ReadOnly): The datastores of the on-premise machine Value can be list of strings that contain datastore names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMage' (Required): InMage specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAdditionalStatsAvailable**: bool (ReadOnly): A value indicating whether additional IR stats are available or not.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **masterTargetId**: string (Required): The Master Target Id.
* **multiVmGroupId**: string (Required): The multi VM group Id.
* **multiVmGroupName**: string (Required): The multi VM group name.
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

### InMageAzureV2
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
* **diskType**: 'Premium_LRS' | 'Standard_LRS' | 'StandardSSD_LRS' (WriteOnly): The DiskType.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target VM after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
* **firmwareType**: string (ReadOnly): The firmware type of this protected item.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMageAzureV2' (Required): InMage Azure v2 specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAdditionalStatsAvailable**: bool (ReadOnly): A value indicating whether additional IR stats are available or not.
* **isAgentUpdateRequired**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **isRebootAfterUpdateRequired**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer': License type.
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
* **seedManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the seed managed disks.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **selectedTfoAzureNetworkId**: string (ReadOnly): The test failover virtual network.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **sqlServerLicenseType**: 'AHUB' | 'NoLicenseType' | 'NotSpecified' | 'PAYG': The SQL Server license type.
* **storageAccountId**: string (WriteOnly): The storage account Id.
* **targetAvailabilitySetId**: string (WriteOnly): The target availability set ARM Id for resource manager deployment.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure VM Name.
* **targetManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target managed disks.
* **targetNicTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target NICs.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetVmId**: string (ReadOnly): The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **targetVmTags**: [Dictionary<string,String>](#dictionarystringstring): The target VM tags.
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

### InMageRcm
#### Properties
* **agentDetails**: [AgentDetails](#agentdetails)[] (ReadOnly): The list of agent details.
* **controlPlaneUri**: string (ReadOnly): The control plane Uri.
* **dataPlaneUri**: string (ReadOnly): The data plane Uri.
* **dras**: [DraDetails](#dradetails)[] (ReadOnly): The list of DRAs.
* **instanceType**: 'InMageRcm' (Required): InMageRcm specific policy details.
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
* **sourceAgentIdentity**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): Identity provider input.
* **vmwareSiteId**: string (Required): The ARM Id of the VMware site.

### InMageRcmFailback
#### Properties
* **azureVirtualMachineId**: string (ReadOnly): The ARM Id of the azure VM.
* **initialReplicationProcessedBytes**: int (ReadOnly): The initial replication processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **initialReplicationProgressHealth**: 'InProgress' | 'None' | 'NoProgress' | 'SlowProgress' (ReadOnly): The initial replication progress health.
* **initialReplicationProgressPercentage**: int (ReadOnly): The initial replication progress percentage.
* **initialReplicationTransferredBytes**: int (ReadOnly): The initial replication transferred bytes from source VM to target for all selected disks on source VM.
* **instanceType**: 'InMageRcmFailback' (Required): InMageRcm failback specific policy details.
* **internalIdentifier**: string (ReadOnly): The virtual machine internal identifier.
* **logStorageAccountId**: string (ReadOnly): The log storage account ARM Id.
* **mobilityAgentDetails**: [InMageRcmFailbackMobilityAgentDetails](#inmagercmfailbackmobilityagentdetails) (ReadOnly): InMageRcmFailback mobility agent details.
* **multiVmGroupName**: string (ReadOnly): The multi VM group name.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **protectedDisks**: [InMageRcmFailbackProtectedDiskDetails](#inmagercmfailbackprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **reprotectAgentId**: string (ReadOnly): The reprotect agent Id.
* **reprotectAgentName**: string (ReadOnly): The reprotect agent name.
* **resyncProcessedBytes**: int (ReadOnly): The resync processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **resyncProgressHealth**: 'InProgress' | 'None' | 'NoProgress' | 'SlowProgress' (ReadOnly): The resync progress health.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required.
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' (ReadOnly): The resync state.
* **resyncTransferredBytes**: int (ReadOnly): The resync transferred bytes from source VM to target for all selected disks on source VM.
* **targetDataStoreName**: string (ReadOnly): The target datastore name.
* **targetvCenterId**: string (ReadOnly): The target vCenter Id.
* **targetVmName**: string (ReadOnly): The target VM name.
* **vmNics**: [InMageRcmFailbackNicDetails](#inmagercmfailbacknicdetails)[] (ReadOnly): The network details.


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

## VMNicDetails
### Properties
* **enableAcceleratedNetworkingOnRecovery**: bool (ReadOnly): A value indicating whether the NIC has accelerated networking enabled.
* **enableAcceleratedNetworkingOnTfo**: bool (ReadOnly): Whether the TFO NIC has accelerated networking enabled.
* **ipConfigs**: [IPConfigDetails](#ipconfigdetails)[] (ReadOnly): The IP configurations of the NIC.
* **nicId**: string (ReadOnly): The nic Id.
* **recoveryNetworkSecurityGroupId**: string (ReadOnly): The id of the NSG associated with the NIC.
* **recoveryNicName**: string (ReadOnly): The name of the NIC to be used when creating target NICs.
* **recoveryNicResourceGroupName**: string (ReadOnly): The resource group of the NIC to be used when creating target NICs.
* **recoveryVMNetworkId**: string (ReadOnly): Recovery VM network Id.
* **replicaNicId**: string (ReadOnly): The replica nic Id.
* **reuseExistingNic**: bool (ReadOnly): A value indicating whether an existing NIC is allowed to be reused during failover subject to availability.
* **selectionType**: string (ReadOnly): Selection type for failover.
* **sourceNicArmId**: string (ReadOnly): The source nic ARM Id.
* **tfoNetworkSecurityGroupId**: string (ReadOnly): The NSG to be used by NIC during test failover.
* **tfoRecoveryNicName**: string (ReadOnly): The name of the NIC to be used when creating target NICs in TFO.
* **tfoRecoveryNicResourceGroupName**: string (ReadOnly): The resource group of the NIC to be used when creating target NICs in TFO.
* **tfoReuseExistingNic**: bool (ReadOnly): A value indicating whether an existing NIC is allowed to be reused during test failover subject to availability.
* **tfoVMNetworkId**: string (ReadOnly): The network to be used by NIC during test failover.
* **vMNetworkName**: string (ReadOnly): VM network name.

## IPConfigDetails
### Properties
* **ipAddressType**: string (ReadOnly)
* **isPrimary**: bool (ReadOnly)
* **isSeletedForFailover**: bool (ReadOnly)
* **name**: string (ReadOnly)
* **recoveryIPAddressType**: string (ReadOnly)
* **recoveryLBBackendAddressPoolIds**: string[] (ReadOnly)
* **recoveryPublicIPAddressId**: string (ReadOnly)
* **recoveryStaticIPAddress**: string (ReadOnly)
* **recoverySubnetName**: string (ReadOnly)
* **staticIPAddress**: string (ReadOnly)
* **subnetName**: string (ReadOnly)
* **tfoLBBackendAddressPoolIds**: string[] (ReadOnly)
* **tfoPublicIPAddressId**: string (ReadOnly)
* **tfoStaticIPAddress**: string (ReadOnly)
* **tfoSubnetName**: string (ReadOnly)

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
* **azureVmDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **diskEncryptionSetId**: string (WriteOnly): The DiskEncryptionSet ARM Id.
* **disksToInclude**: string[] (WriteOnly): The list of VHD Ids of disks to be protected.
* **disksToIncludeForManagedDisks**: [HyperVReplicaAzureDiskInputDetails](#hypervreplicaazurediskinputdetails)[] (WriteOnly): The disks to include list for managed disks.
* **diskType**: 'Premium_LRS' | 'Standard_LRS' | 'StandardSSD_LRS' (WriteOnly): The DiskType.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
* **encryption**: string (ReadOnly): The encryption info.
* **hvHostVmId**: string (WriteOnly): The Hyper-V host VM Id.
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaAzure' (Required): Hyper-V Replica Azure specific protection profile details.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer': License type.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
* **osType**: string (WriteOnly): The OS type associated with VM.
* **protectedManagedDisks**: [HyperVReplicaAzureManagedDiskDetails](#hypervreplicaazuremanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVmName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **rpoInSeconds**: int (ReadOnly): Last RPO value.
* **seedManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the seed managed disks.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **sqlServerLicenseType**: 'AHUB' | 'NoLicenseType' | 'NotSpecified' | 'PAYG': The SQL Server license type.
* **targetAvailabilitySetId**: string (WriteOnly): The target availability set ARM Id for resource manager deployment.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure VM Name.
* **targetManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target managed disks.
* **targetNicTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target NICs.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetStorageAccountId**: string (WriteOnly): The storage account Id.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **targetVmTags**: [Dictionary<string,String>](#dictionarystringstring): The target VM tags.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **useManagedDisksForReplication**: string (WriteOnly): A value indicating whether managed disks should be used during replication.
* **vhdId**: string (WriteOnly): The OS disk VHD id associated with VM.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmName**: string (WriteOnly): The VM Name.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

## AzureVmDiskDetails
### Properties
* **diskEncryptionSetId**: string (ReadOnly): The DiskEncryptionSet ARM ID.
* **diskId**: string (ReadOnly): The disk resource id.
* **lunId**: string (ReadOnly): Ordinal\LunId of the disk for the Azure VM.
* **maxSizeMB**: string (ReadOnly): Max side in MB.
* **targetDiskLocation**: string (ReadOnly): Blob uri of the Azure disk.
* **targetDiskName**: string (ReadOnly): The target Azure disk name.
* **vhdId**: string (ReadOnly): The VHD id.
* **vhdName**: string (ReadOnly): VHD name.
* **vhdType**: string (ReadOnly): VHD type.

## HyperVReplicaAzureDiskInputDetails
### Properties
* **diskEncryptionSetId**: string (WriteOnly): The DiskEncryptionSet ARM ID.
* **diskId**: string (WriteOnly): The DiskId.
* **diskType**: 'Premium_LRS' | 'Standard_LRS' | 'StandardSSD_LRS' (WriteOnly): The DiskType.
* **logStorageAccountId**: string (WriteOnly): The LogStorageAccountId.

## OSDetails
### Properties
* **osEdition**: string (ReadOnly): The OSEdition.
* **oSMajorVersion**: string (ReadOnly): The OS Major Version.
* **oSMinorVersion**: string (ReadOnly): The OS Minor Version.
* **osType**: string (ReadOnly): VM Disk details.
* **oSVersion**: string (ReadOnly): The OS Version.
* **productType**: string (ReadOnly): Product type.

## HyperVReplicaAzureManagedDiskDetails
### Properties
* **diskEncryptionSetId**: string (ReadOnly): The disk encryption set ARM Id.
* **diskId**: string (ReadOnly): The disk Id.
* **replicaDiskType**: string (ReadOnly): The replica disk type.
* **seedManagedDiskId**: string (ReadOnly): Seed managed disk Id.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **datastoreName**: string (WriteOnly): The target datastore name.
* **datastores**: string[] (ReadOnly): The datastores of the on-premise machine Value can be list of strings that contain datastore names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMage' (Required): InMage specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAdditionalStatsAvailable**: bool (ReadOnly): A value indicating whether additional IR stats are available or not.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **masterTargetId**: string (Required): The Master Target Id.
* **multiVmGroupId**: string (Required): The multi VM group Id.
* **multiVmGroupName**: string (Required): The multi VM group name.
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

## InMageAgentDetails
### Properties
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
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
* **progressHealth**: string (ReadOnly): The Progress Health.
* **progressStatus**: string (ReadOnly): The Progress Status.
* **protectionStage**: string (ReadOnly): The protection stage.
* **psDataInMB**: int (ReadOnly): The PS data transit in MB.
* **resyncDurationInSeconds**: int (ReadOnly): The resync duration in seconds.
* **resyncLast15MinutesTransferredBytes**: int (ReadOnly): The resync last 15 minutes transferred bytes.
* **resyncLastDataTransferTimeUTC**: string (ReadOnly): The last data transfer time in UTC.
* **resyncProcessedBytes**: int (ReadOnly): The resync processed bytes.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required for this disk.
* **resyncStartTime**: string (ReadOnly): The resync start time.
* **resyncTotalTransferredBytes**: int (ReadOnly): The resync total transferred bytes.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **sourceDataInMB**: int (ReadOnly): The source data transit in MB.
* **targetDataInMB**: int (ReadOnly): The target data transit in MB.

## InMageAzureV2
### Properties
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
* **diskType**: 'Premium_LRS' | 'Standard_LRS' | 'StandardSSD_LRS' (WriteOnly): The DiskType.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target VM after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
* **firmwareType**: string (ReadOnly): The firmware type of this protected item.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMageAzureV2' (Required): InMage Azure v2 specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAdditionalStatsAvailable**: bool (ReadOnly): A value indicating whether additional IR stats are available or not.
* **isAgentUpdateRequired**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **isRebootAfterUpdateRequired**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer': License type.
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
* **seedManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the seed managed disks.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **selectedTfoAzureNetworkId**: string (ReadOnly): The test failover virtual network.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **sqlServerLicenseType**: 'AHUB' | 'NoLicenseType' | 'NotSpecified' | 'PAYG': The SQL Server license type.
* **storageAccountId**: string (WriteOnly): The storage account Id.
* **targetAvailabilitySetId**: string (WriteOnly): The target availability set ARM Id for resource manager deployment.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure VM Name.
* **targetManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target managed disks.
* **targetNicTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target NICs.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetVmId**: string (ReadOnly): The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **targetVmTags**: [Dictionary<string,String>](#dictionarystringstring): The target VM tags.
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

## InMageAzureV2DiskInputDetails
### Properties
* **diskEncryptionSetId**: string (WriteOnly): The DiskEncryptionSet ARM ID.
* **diskId**: string (WriteOnly): The DiskId.
* **diskType**: 'Premium_LRS' | 'Standard_LRS' | 'StandardSSD_LRS' (WriteOnly): The DiskType.
* **logStorageAccountId**: string (WriteOnly): The LogStorageAccountId.

## InMageAzureV2ProtectedDiskDetails
### Properties
* **diskCapacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskId**: string (ReadOnly): The disk id.
* **diskName**: string (ReadOnly): The disk name.
* **diskResized**: string (ReadOnly): A value indicating whether disk is resized.
* **fileSystemCapacityInBytes**: int (ReadOnly): The disk file system capacity in bytes.
* **healthErrorCode**: string (ReadOnly): The health error code for the disk.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **progressHealth**: string (ReadOnly): The Progress Health.
* **progressStatus**: string (ReadOnly): The Progress Status.
* **protectionStage**: string (ReadOnly): The protection stage.
* **psDataInMegaBytes**: int (ReadOnly): The PS data transit in MB.
* **resyncDurationInSeconds**: int (ReadOnly): The resync duration in seconds.
* **resyncLast15MinutesTransferredBytes**: int (ReadOnly): The resync last 15 minutes transferred bytes.
* **resyncLastDataTransferTimeUTC**: string (ReadOnly): The last data transfer time in UTC.
* **resyncProcessedBytes**: int (ReadOnly): The resync processed bytes.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required for this disk.
* **resyncStartTime**: string (ReadOnly): The resync start time.
* **resyncTotalTransferredBytes**: int (ReadOnly): The resync total transferred bytes.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **sourceDataInMegaBytes**: int (ReadOnly): The source data transit in MB.
* **targetDataInMegaBytes**: int (ReadOnly): The target data transit in MB.

## InMageAzureV2ManagedDiskDetails
### Properties
* **diskEncryptionSetId**: string (ReadOnly): The DiskEncryptionSet ARM ID.
* **diskId**: string (ReadOnly): The disk id.
* **replicaDiskType**: string (ReadOnly): The replica disk type.
* **seedManagedDiskId**: string (ReadOnly): Seed managed disk Id.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageRcmFailback
### Properties
* **azureVirtualMachineId**: string (ReadOnly): The ARM Id of the azure VM.
* **initialReplicationProcessedBytes**: int (ReadOnly): The initial replication processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **initialReplicationProgressHealth**: 'InProgress' | 'None' | 'NoProgress' | 'SlowProgress' (ReadOnly): The initial replication progress health.
* **initialReplicationProgressPercentage**: int (ReadOnly): The initial replication progress percentage.
* **initialReplicationTransferredBytes**: int (ReadOnly): The initial replication transferred bytes from source VM to target for all selected disks on source VM.
* **instanceType**: 'InMageRcmFailback' (Required): InMageRcm failback specific policy details.
* **internalIdentifier**: string (ReadOnly): The virtual machine internal identifier.
* **logStorageAccountId**: string (ReadOnly): The log storage account ARM Id.
* **mobilityAgentDetails**: [InMageRcmFailbackMobilityAgentDetails](#inmagercmfailbackmobilityagentdetails) (ReadOnly): InMageRcmFailback mobility agent details.
* **multiVmGroupName**: string (ReadOnly): The multi VM group name.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **protectedDisks**: [InMageRcmFailbackProtectedDiskDetails](#inmagercmfailbackprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **reprotectAgentId**: string (ReadOnly): The reprotect agent Id.
* **reprotectAgentName**: string (ReadOnly): The reprotect agent name.
* **resyncProcessedBytes**: int (ReadOnly): The resync processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **resyncProgressHealth**: 'InProgress' | 'None' | 'NoProgress' | 'SlowProgress' (ReadOnly): The resync progress health.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required.
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' (ReadOnly): The resync state.
* **resyncTransferredBytes**: int (ReadOnly): The resync transferred bytes from source VM to target for all selected disks on source VM.
* **targetDataStoreName**: string (ReadOnly): The target datastore name.
* **targetvCenterId**: string (ReadOnly): The target vCenter Id.
* **targetVmName**: string (ReadOnly): The target VM name.
* **vmNics**: [InMageRcmFailbackNicDetails](#inmagercmfailbacknicdetails)[] (ReadOnly): The network details.

## InMageRcmFailbackMobilityAgentDetails
### Properties
* **agentVersionExpiryDate**: string (ReadOnly): The agent version expiry date.
* **driverVersion**: string (ReadOnly): The driver version.
* **driverVersionExpiryDate**: string (ReadOnly): The driver version expiry date.
* **isUpgradeable**: string (ReadOnly): A value indicating whether agent is upgradeable or not.
* **lastHeartbeatUtc**: string (ReadOnly): The time of the last heartbeat received from the agent.
* **latestUpgradableVersionWithoutReboot**: string (ReadOnly): The latest upgradeable version available without reboot.
* **latestVersion**: string (ReadOnly): The latest agent version available.
* **reasonsBlockingUpgrade**: 'AgentNoHeartbeat' | 'AlreadyOnLatestVersion' | 'DistroIsNotReported' | 'DistroNotSupportedForUpgrade' | 'IncompatibleApplianceVersion' | 'InvalidAgentVersion' | 'InvalidDriverVersion' | 'MissingUpgradePath' | 'NotProtected' | 'ProcessServerNoHeartbeat' | 'RcmProxyNoHeartbeat' | 'RebootRequired' | 'Unknown' | 'UnsupportedProtectionScenario'[] (ReadOnly): The whether update is possible or not.
* **version**: string (ReadOnly): The agent version.

## InMageRcmFailbackProtectedDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **dataPendingAtSourceAgentInMB**: int (ReadOnly): The data pending at source agent in MB.
* **dataPendingInLogDataStoreInMB**: int (ReadOnly): The data pending in log data store in MB.
* **diskId**: string (ReadOnly): The disk Id (reported by source agent).
* **diskName**: string (ReadOnly): The disk name.
* **diskUuid**: string (ReadOnly): The disk Uuid (reported by vCenter).
* **irDetails**: [InMageRcmFailbackSyncDetails](#inmagercmfailbacksyncdetails) (ReadOnly): InMageRcmFailback disk level sync details.
* **isInitialReplicationComplete**: string (ReadOnly): A value indicating whether initial replication is complete or not.
* **isOSDisk**: string (ReadOnly): A value indicating whether the disk is the OS disk.
* **lastSyncTime**: string (ReadOnly): The last sync time.
* **resyncDetails**: [InMageRcmFailbackSyncDetails](#inmagercmfailbacksyncdetails) (ReadOnly): InMageRcmFailback disk level sync details.

## InMageRcmFailbackSyncDetails
### Properties
* **last15MinutesTransferredBytes**: int (ReadOnly): The bytes transferred in last 15 minutes from source VM to target.
* **lastDataTransferTimeUtc**: string (ReadOnly): The time of the last data transfer from source VM to target.
* **lastRefreshTime**: string (ReadOnly): The last refresh time.
* **processedBytes**: int (ReadOnly): The total processed bytes. This includes bytes that are transferred from source VM to target and matched bytes.
* **progressHealth**: 'InProgress' | 'None' | 'NoProgress' | 'Queued' | 'SlowProgress' (ReadOnly): The progress health.
* **progressPercentage**: int (ReadOnly): Progress in percentage. Progress percentage is calculated based on processed bytes.
* **startTime**: string (ReadOnly): The start time.
* **transferredBytes**: int (ReadOnly): The transferred bytes from source VM to azure for the disk.

## InMageRcmFailbackNicDetails
### Properties
* **adapterType**: string (ReadOnly): The adapter type.
* **macAddress**: string (ReadOnly): The mac address.
* **networkName**: string (ReadOnly): The network name.
* **sourceIpAddress**: string (ReadOnly): The IP address.

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
* **state**: string (ReadOnly): Association Status.
* **targetFabricFriendlyName**: string (ReadOnly): Friendly name of target fabric.
* **targetProtectionContainerFriendlyName**: string (ReadOnly): Friendly name of paired container.
* **targetProtectionContainerId**: string: The target unique protection container name.

## ProtectionContainerMappingProviderSpecificDetails
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required): Recovery plan A2A specific details.

### InMageRcm
#### Properties
* **agentDetails**: [AgentDetails](#agentdetails)[] (ReadOnly): The list of agent details.
* **controlPlaneUri**: string (ReadOnly): The control plane Uri.
* **dataPlaneUri**: string (ReadOnly): The data plane Uri.
* **dras**: [DraDetails](#dradetails)[] (ReadOnly): The list of DRAs.
* **instanceType**: 'InMageRcm' (Required): InMageRcm specific policy details.
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
* **sourceAgentIdentity**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): Identity provider input.
* **vmwareSiteId**: string (Required): The ARM Id of the VMware site.

### VMwareCbt
#### Properties
* **instanceType**: 'VMwareCbt' (Required): VMware Cbt specific policy details.


## ReplicationProviderSpecificContainerMappingInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required): Recovery plan A2A specific details.

### VMwareCbt
#### Properties
* **instanceType**: 'VMwareCbt' (Required): VMware Cbt specific policy details.


## AddRecoveryServicesProviderInputProperties
### Properties
* **allowedScenarios**: string[] (ReadOnly): The scenarios allowed on this provider.
* **authenticationIdentityDetails**: [IdentityProviderDetails](#identityproviderdetails) (ReadOnly): Identity provider details.
* **authenticationIdentityInput**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): Identity provider input.
* **biosId**: string: The Bios Id of the machine.
* **connectionStatus**: string (ReadOnly): A value indicating whether DRA is responsive.
* **dataPlaneAuthenticationIdentityDetails**: [IdentityProviderDetails](#identityproviderdetails) (ReadOnly): Identity provider details.
* **dataPlaneAuthenticationIdentityInput**: [IdentityProviderInput](#identityproviderinput) (WriteOnly): Identity provider input.
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

## CreatePolicyInputProperties
### Properties
* **friendlyName**: string (ReadOnly): The FriendlyName.
* **providerSpecificDetails**: [PolicyProviderSpecificDetails](#policyproviderspecificdetails) (ReadOnly): Base class for Provider specific details for policies.
* **providerSpecificInput**: [PolicyProviderSpecificInput](#policyproviderspecificinput) (WriteOnly): Base class for provider specific input.

## PolicyProviderSpecificDetails
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required): Recovery plan A2A specific details.

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
* **azureVmDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **diskEncryptionSetId**: string (WriteOnly): The DiskEncryptionSet ARM Id.
* **disksToInclude**: string[] (WriteOnly): The list of VHD Ids of disks to be protected.
* **disksToIncludeForManagedDisks**: [HyperVReplicaAzureDiskInputDetails](#hypervreplicaazurediskinputdetails)[] (WriteOnly): The disks to include list for managed disks.
* **diskType**: 'Premium_LRS' | 'Standard_LRS' | 'StandardSSD_LRS' (WriteOnly): The DiskType.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
* **encryption**: string (ReadOnly): The encryption info.
* **hvHostVmId**: string (WriteOnly): The Hyper-V host VM Id.
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaAzure' (Required): Hyper-V Replica Azure specific protection profile details.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer': License type.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
* **osType**: string (WriteOnly): The OS type associated with VM.
* **protectedManagedDisks**: [HyperVReplicaAzureManagedDiskDetails](#hypervreplicaazuremanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVmName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **rpoInSeconds**: int (ReadOnly): Last RPO value.
* **seedManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the seed managed disks.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **sqlServerLicenseType**: 'AHUB' | 'NoLicenseType' | 'NotSpecified' | 'PAYG': The SQL Server license type.
* **targetAvailabilitySetId**: string (WriteOnly): The target availability set ARM Id for resource manager deployment.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure VM Name.
* **targetManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target managed disks.
* **targetNicTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target NICs.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetStorageAccountId**: string (WriteOnly): The storage account Id.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **targetVmTags**: [Dictionary<string,String>](#dictionarystringstring): The target VM tags.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **useManagedDisksForReplication**: string (WriteOnly): A value indicating whether managed disks should be used during replication.
* **vhdId**: string (WriteOnly): The OS disk VHD id associated with VM.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmName**: string (WriteOnly): The VM Name.
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
* **replicaDeletionOption**: string (ReadOnly): A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud.
* **replicationPort**: int (ReadOnly): A value indicating the recovery HTTPS port.

### InMage
#### Properties
* **activeSiteType**: string (ReadOnly): The active location of the VM. If the VM is being protected from Azure, this field will take values from { Azure, OnPrem }. If the VM is being protected between two data-centers, this field will be OnPrem always.
* **agentDetails**: [InMageAgentDetails](#inmageagentdetails) (ReadOnly): The details of the InMage agent.
* **azureStorageAccountId**: string (ReadOnly): A value indicating the underlying Azure storage account. If the VM is not running in Azure, this value shall be set to null.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **consistencyPoints**: [Dictionary<string,DateTime>](#dictionarystringdatetime) (ReadOnly): The collection of Consistency points.
* **datastoreName**: string (WriteOnly): The target datastore name.
* **datastores**: string[] (ReadOnly): The datastores of the on-premise machine Value can be list of strings that contain datastore names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMage' (Required): InMage specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAdditionalStatsAvailable**: bool (ReadOnly): A value indicating whether additional IR stats are available or not.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **masterTargetId**: string (Required): The Master Target Id.
* **multiVmGroupId**: string (Required): The multi VM group Id.
* **multiVmGroupName**: string (Required): The multi VM group name.
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

### InMageAzureV2
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
* **diskType**: 'Premium_LRS' | 'Standard_LRS' | 'StandardSSD_LRS' (WriteOnly): The DiskType.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target VM after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
* **firmwareType**: string (ReadOnly): The firmware type of this protected item.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMageAzureV2' (Required): InMage Azure v2 specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAdditionalStatsAvailable**: bool (ReadOnly): A value indicating whether additional IR stats are available or not.
* **isAgentUpdateRequired**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **isRebootAfterUpdateRequired**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer': License type.
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
* **seedManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the seed managed disks.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **selectedTfoAzureNetworkId**: string (ReadOnly): The test failover virtual network.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **sqlServerLicenseType**: 'AHUB' | 'NoLicenseType' | 'NotSpecified' | 'PAYG': The SQL Server license type.
* **storageAccountId**: string (WriteOnly): The storage account Id.
* **targetAvailabilitySetId**: string (WriteOnly): The target availability set ARM Id for resource manager deployment.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure VM Name.
* **targetManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target managed disks.
* **targetNicTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target NICs.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetVmId**: string (ReadOnly): The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **targetVmTags**: [Dictionary<string,String>](#dictionarystringstring): The target VM tags.
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

### InMageBasePolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **instanceType**: 'InMageBasePolicyDetails' (Required): Base class for the policies of providers using InMage replication.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### InMageRcm
#### Properties
* **agentDetails**: [AgentDetails](#agentdetails)[] (ReadOnly): The list of agent details.
* **controlPlaneUri**: string (ReadOnly): The control plane Uri.
* **dataPlaneUri**: string (ReadOnly): The data plane Uri.
* **dras**: [DraDetails](#dradetails)[] (ReadOnly): The list of DRAs.
* **instanceType**: 'InMageRcm' (Required): InMageRcm specific policy details.
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
* **sourceAgentIdentity**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): Identity provider input.
* **vmwareSiteId**: string (Required): The ARM Id of the VMware site.

### InMageRcmFailback
#### Properties
* **azureVirtualMachineId**: string (ReadOnly): The ARM Id of the azure VM.
* **initialReplicationProcessedBytes**: int (ReadOnly): The initial replication processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **initialReplicationProgressHealth**: 'InProgress' | 'None' | 'NoProgress' | 'SlowProgress' (ReadOnly): The initial replication progress health.
* **initialReplicationProgressPercentage**: int (ReadOnly): The initial replication progress percentage.
* **initialReplicationTransferredBytes**: int (ReadOnly): The initial replication transferred bytes from source VM to target for all selected disks on source VM.
* **instanceType**: 'InMageRcmFailback' (Required): InMageRcm failback specific policy details.
* **internalIdentifier**: string (ReadOnly): The virtual machine internal identifier.
* **logStorageAccountId**: string (ReadOnly): The log storage account ARM Id.
* **mobilityAgentDetails**: [InMageRcmFailbackMobilityAgentDetails](#inmagercmfailbackmobilityagentdetails) (ReadOnly): InMageRcmFailback mobility agent details.
* **multiVmGroupName**: string (ReadOnly): The multi VM group name.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **protectedDisks**: [InMageRcmFailbackProtectedDiskDetails](#inmagercmfailbackprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **reprotectAgentId**: string (ReadOnly): The reprotect agent Id.
* **reprotectAgentName**: string (ReadOnly): The reprotect agent name.
* **resyncProcessedBytes**: int (ReadOnly): The resync processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **resyncProgressHealth**: 'InProgress' | 'None' | 'NoProgress' | 'SlowProgress' (ReadOnly): The resync progress health.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required.
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' (ReadOnly): The resync state.
* **resyncTransferredBytes**: int (ReadOnly): The resync transferred bytes from source VM to target for all selected disks on source VM.
* **targetDataStoreName**: string (ReadOnly): The target datastore name.
* **targetvCenterId**: string (ReadOnly): The target vCenter Id.
* **targetVmName**: string (ReadOnly): The target VM name.
* **vmNics**: [InMageRcmFailbackNicDetails](#inmagercmfailbacknicdetails)[] (ReadOnly): The network details.

### VMwareCbt
#### Properties
* **instanceType**: 'VMwareCbt' (Required): VMware Cbt specific policy details.


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
* **replicaDeletionOption**: string (ReadOnly): A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud.
* **replicationPort**: int (ReadOnly): A value indicating the recovery HTTPS port.

## InMageBasePolicyDetails
### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **instanceType**: 'InMageBasePolicyDetails' (Required): Base class for the policies of providers using InMage replication.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

## PolicyProviderSpecificInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required): Recovery plan A2A specific details.

### A2ACrossClusterMigration
#### Properties
* **instanceType**: 'A2ACrossClusterMigration' (Required): A2A Cross-Cluster Migration Policy creation input.

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

### HyperVReplicaAzure
#### Properties
* **azureVmDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **diskEncryptionSetId**: string (WriteOnly): The DiskEncryptionSet ARM Id.
* **disksToInclude**: string[] (WriteOnly): The list of VHD Ids of disks to be protected.
* **disksToIncludeForManagedDisks**: [HyperVReplicaAzureDiskInputDetails](#hypervreplicaazurediskinputdetails)[] (WriteOnly): The disks to include list for managed disks.
* **diskType**: 'Premium_LRS' | 'Standard_LRS' | 'StandardSSD_LRS' (WriteOnly): The DiskType.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
* **encryption**: string (ReadOnly): The encryption info.
* **hvHostVmId**: string (WriteOnly): The Hyper-V host VM Id.
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaAzure' (Required): Hyper-V Replica Azure specific protection profile details.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer': License type.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
* **osType**: string (WriteOnly): The OS type associated with VM.
* **protectedManagedDisks**: [HyperVReplicaAzureManagedDiskDetails](#hypervreplicaazuremanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVmName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **rpoInSeconds**: int (ReadOnly): Last RPO value.
* **seedManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the seed managed disks.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **sqlServerLicenseType**: 'AHUB' | 'NoLicenseType' | 'NotSpecified' | 'PAYG': The SQL Server license type.
* **targetAvailabilitySetId**: string (WriteOnly): The target availability set ARM Id for resource manager deployment.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure VM Name.
* **targetManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target managed disks.
* **targetNicTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target NICs.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetStorageAccountId**: string (WriteOnly): The storage account Id.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **targetVmTags**: [Dictionary<string,String>](#dictionarystringstring): The target VM tags.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **useManagedDisksForReplication**: string (WriteOnly): A value indicating whether managed disks should be used during replication.
* **vhdId**: string (WriteOnly): The OS disk VHD id associated with VM.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmName**: string (WriteOnly): The VM Name.
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
* **datastoreName**: string (WriteOnly): The target datastore name.
* **datastores**: string[] (ReadOnly): The datastores of the on-premise machine Value can be list of strings that contain datastore names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMage' (Required): InMage specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAdditionalStatsAvailable**: bool (ReadOnly): A value indicating whether additional IR stats are available or not.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **masterTargetId**: string (Required): The Master Target Id.
* **multiVmGroupId**: string (Required): The multi VM group Id.
* **multiVmGroupName**: string (Required): The multi VM group name.
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

### InMageAzureV2
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
* **diskType**: 'Premium_LRS' | 'Standard_LRS' | 'StandardSSD_LRS' (WriteOnly): The DiskType.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target VM after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
* **firmwareType**: string (ReadOnly): The firmware type of this protected item.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMageAzureV2' (Required): InMage Azure v2 specific protection profile details.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAdditionalStatsAvailable**: bool (ReadOnly): A value indicating whether additional IR stats are available or not.
* **isAgentUpdateRequired**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **isRebootAfterUpdateRequired**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer': License type.
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
* **seedManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the seed managed disks.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **selectedTfoAzureNetworkId**: string (ReadOnly): The test failover virtual network.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **sqlServerLicenseType**: 'AHUB' | 'NoLicenseType' | 'NotSpecified' | 'PAYG': The SQL Server license type.
* **storageAccountId**: string (WriteOnly): The storage account Id.
* **targetAvailabilitySetId**: string (WriteOnly): The target availability set ARM Id for resource manager deployment.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure VM Name.
* **targetManagedDiskTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target managed disks.
* **targetNicTags**: [Dictionary<string,String>](#dictionarystringstring): The tags for the target NICs.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetVmId**: string (ReadOnly): The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **targetVmTags**: [Dictionary<string,String>](#dictionarystringstring): The target VM tags.
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

### InMageRcm
#### Properties
* **agentDetails**: [AgentDetails](#agentdetails)[] (ReadOnly): The list of agent details.
* **controlPlaneUri**: string (ReadOnly): The control plane Uri.
* **dataPlaneUri**: string (ReadOnly): The data plane Uri.
* **dras**: [DraDetails](#dradetails)[] (ReadOnly): The list of DRAs.
* **instanceType**: 'InMageRcm' (Required): InMageRcm specific policy details.
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
* **sourceAgentIdentity**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): Identity provider input.
* **vmwareSiteId**: string (Required): The ARM Id of the VMware site.

### InMageRcmFailback
#### Properties
* **azureVirtualMachineId**: string (ReadOnly): The ARM Id of the azure VM.
* **initialReplicationProcessedBytes**: int (ReadOnly): The initial replication processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **initialReplicationProgressHealth**: 'InProgress' | 'None' | 'NoProgress' | 'SlowProgress' (ReadOnly): The initial replication progress health.
* **initialReplicationProgressPercentage**: int (ReadOnly): The initial replication progress percentage.
* **initialReplicationTransferredBytes**: int (ReadOnly): The initial replication transferred bytes from source VM to target for all selected disks on source VM.
* **instanceType**: 'InMageRcmFailback' (Required): InMageRcm failback specific policy details.
* **internalIdentifier**: string (ReadOnly): The virtual machine internal identifier.
* **logStorageAccountId**: string (ReadOnly): The log storage account ARM Id.
* **mobilityAgentDetails**: [InMageRcmFailbackMobilityAgentDetails](#inmagercmfailbackmobilityagentdetails) (ReadOnly): InMageRcmFailback mobility agent details.
* **multiVmGroupName**: string (ReadOnly): The multi VM group name.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **protectedDisks**: [InMageRcmFailbackProtectedDiskDetails](#inmagercmfailbackprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **reprotectAgentId**: string (ReadOnly): The reprotect agent Id.
* **reprotectAgentName**: string (ReadOnly): The reprotect agent name.
* **resyncProcessedBytes**: int (ReadOnly): The resync processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **resyncProgressHealth**: 'InProgress' | 'None' | 'NoProgress' | 'SlowProgress' (ReadOnly): The resync progress health.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required.
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' (ReadOnly): The resync state.
* **resyncTransferredBytes**: int (ReadOnly): The resync transferred bytes from source VM to target for all selected disks on source VM.
* **targetDataStoreName**: string (ReadOnly): The target datastore name.
* **targetvCenterId**: string (ReadOnly): The target vCenter Id.
* **targetVmName**: string (ReadOnly): The target VM name.
* **vmNics**: [InMageRcmFailbackNicDetails](#inmagercmfailbacknicdetails)[] (ReadOnly): The network details.

### VMwareCbt
#### Properties
* **instanceType**: 'VMwareCbt' (Required): VMware Cbt specific policy details.


## CreateProtectionIntentProperties
### Properties
* **creationTimeUTC**: string (ReadOnly): The creation time in UTC.
* **friendlyName**: string (ReadOnly): The name.
* **isActive**: bool (ReadOnly): A value indicating whether the intent object is active.
* **jobId**: string (ReadOnly): The job Id.
* **jobState**: string (ReadOnly): The job state.
* **providerSpecificDetails**: [CreateProtectionIntentProviderSpecificDetails](#createprotectionintentproviderspecificdetails): Create protection intent provider specific input.

## CreateProtectionIntentProviderSpecificDetails
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required): Recovery plan A2A specific details.


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
* **providerSpecificDetails**: [RecoveryPlanProviderSpecificDetails](#recoveryplanproviderspecificdetails)[] (ReadOnly): The provider id and provider specific details.
* **providerSpecificInput**: [RecoveryPlanProviderSpecificInput](#recoveryplanproviderspecificinput)[] (WriteOnly): The provider specific input.
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
* **failoverTypes**: 'CancelFailover' | 'ChangePit' | 'Commit' | 'CompleteMigration' | 'DisableProtection' | 'Failback' | 'FinalizeFailback' | 'PlannedFailover' | 'RepairReplication' | 'ReverseReplicate' | 'SwitchProtection' | 'TestFailover' | 'TestFailoverCleanup' | 'UnplannedFailover'[] (Required): The list of failover types.

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

## RecoveryPlanProviderSpecificDetails
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required): Recovery plan A2A specific details.


## RecoveryPlanProviderSpecificInput
* **Discriminator**: instanceType
### Base Properties
### A2A
#### Properties
* **instanceType**: 'A2A' (Required): Recovery plan A2A specific details.


## VaultSettingCreationInputProperties
### Properties
* **migrationSolutionId**: string (Required): The migration solution Id.

