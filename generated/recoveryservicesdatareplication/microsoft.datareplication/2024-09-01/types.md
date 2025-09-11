# Microsoft.DataReplication @ 2024-09-01

## Resource Microsoft.DataReplication/replicationFabrics@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FabricModelProperties](#fabricmodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataReplication/replicationFabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationFabrics/fabricAgents@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FabricAgentModelProperties](#fabricagentmodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DataReplication/replicationFabrics/fabricAgents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VaultModelProperties](#vaultmodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DataReplication/replicationVaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/alertSettings@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EmailConfigurationModelProperties](#emailconfigurationmodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DataReplication/replicationVaults/alertSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/events@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EventModelProperties](#eventmodelproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DataReplication/replicationVaults/events' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/jobs@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobModelProperties](#jobmodelproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DataReplication/replicationVaults/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/privateEndpointConnectionProxies@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets or sets ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-.]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProxyProperties](#privateendpointconnectionproxyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DataReplication/replicationVaults/privateEndpointConnectionProxies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/privateEndpointConnections@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionResponseProperties](#privateendpointconnectionresponseproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DataReplication/replicationVaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/privateLinkResources@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-.]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DataReplication/replicationVaults/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/protectedItems@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectedItemModelProperties](#protecteditemmodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DataReplication/replicationVaults/protectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/protectedItems/recoveryPoints@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RecoveryPointModelProperties](#recoverypointmodelproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DataReplication/replicationVaults/protectedItems/recoveryPoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/replicationExtensions@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReplicationExtensionModelProperties](#replicationextensionmodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DataReplication/replicationVaults/replicationExtensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataReplication/replicationVaults/replicationPolicies@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyModelProperties](#policymodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DataReplication/replicationVaults/replicationPolicies' (ReadOnly, DeployTimeConstant): The resource type

## AffectedObjectDetails
### Properties
* **description**: string: Description of the affected object details.
* **type**: 'object': Type of the affected object details.

## AzStackHCIClusterProperties
### Properties
* **clusterName**: string {minLength: 1} (Required): Gets or sets the AzStackHCICluster FQDN name.
* **resourceName**: string {minLength: 1} (Required): Gets or sets the AzStackHCICluster resource name.
* **storageAccountName**: string {minLength: 1} (Required): Gets or sets the Storage account name.
* **storageContainers**: [StorageContainerProperties](#storagecontainerproperties)[] (Required): Gets or sets the list of AzStackHCICluster Storage Container.

## ConnectionDetails
### Properties
* **groupId**: string: Gets or sets group id.
* **id**: string: Gets or sets id.
* **linkIdentifier**: string: Gets or sets link identifier.
* **memberName**: string: Gets or sets member name.
* **privateIpAddress**: string: Gets or sets private IP address.

## DiskControllerInputs
### Properties
* **controllerId**: int (Required): Gets or sets the controller ID.
* **controllerLocation**: int (Required): Gets or sets the controller Location.
* **controllerName**: string {minLength: 1} (Required): Gets or sets the controller name (IDE,SCSI).

## EmailConfigurationModelProperties
### Properties
* **customEmailAddresses**: string[]: Gets or sets the custom email address for sending emails.
* **locale**: string: Gets or sets the locale for the email notification.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the email configuration.
* **sendToOwners**: bool (Required): Gets or sets a value indicating whether to send email to subscription administrator.

## ErrorModel
### Properties
* **causes**: string (ReadOnly): Gets or sets the possible causes of error.
* **code**: string (ReadOnly): Gets or sets the error code.
* **creationTime**: string (ReadOnly): Gets or sets the creation time of error.
* **message**: string (ReadOnly): Gets or sets the error message.
* **recommendation**: string (ReadOnly): Gets or sets the recommended action to resolve error.
* **severity**: string (ReadOnly): Gets or sets the error severity.
* **type**: string (ReadOnly): Gets or sets the error type.

## EventModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### HyperVToAzStackHCIEventModelCustomProperties
#### Properties
* **eventSourceFriendlyName**: string (ReadOnly): Gets or sets the friendly name of the source which has raised this health event.
* **instanceType**: 'HyperVToAzStackHCI' (Required): Discriminator property for EventModelCustomProperties.
* **protectedItemFriendlyName**: string (ReadOnly): Gets or sets the protected item friendly name.
* **serverType**: string (ReadOnly): Gets or sets the server type.
* **sourceApplianceName**: string (ReadOnly): Gets or sets the source appliance name.
* **targetApplianceName**: string (ReadOnly): Gets or sets the source target name.

### VMwareToAzStackHCIEventModelCustomProperties
#### Properties
* **eventSourceFriendlyName**: string (ReadOnly): Gets or sets the friendly name of the source which has raised this health event.
* **instanceType**: 'VMwareToAzStackHCI' (Required): Discriminator property for EventModelCustomProperties.
* **protectedItemFriendlyName**: string (ReadOnly): Gets or sets the protected item friendly name.
* **serverType**: string (ReadOnly): Gets or sets the server type.
* **sourceApplianceName**: string (ReadOnly): Gets or sets the source appliance name.
* **targetApplianceName**: string (ReadOnly): Gets or sets the source target name.


## EventModelProperties
### Properties
* **correlationId**: string (ReadOnly): Gets or sets the event correlation Id.
* **customProperties**: [EventModelCustomProperties](#eventmodelcustomproperties) (Required): Event model custom properties.
* **description**: string (ReadOnly): Gets or sets the event description.
* **eventName**: string (ReadOnly): Gets or sets the event name.
* **eventType**: string (ReadOnly): Gets or sets the event type.
* **healthErrors**: [HealthErrorModel](#healtherrormodel)[] (ReadOnly): Gets or sets the errors associated with this event.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the event.
* **resourceName**: string (ReadOnly): Gets or sets the resource name.
* **resourceType**: string (ReadOnly): Gets or sets the resource type.
* **severity**: string (ReadOnly): Gets or sets the event severity.
* **timeOfOccurrence**: string (ReadOnly): Gets or sets the time at which the event occurred at source.

## FabricAgentModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### VMwareFabricAgentModelCustomProperties
#### Properties
* **biosId**: string {minLength: 1} (Required): Gets or sets the BIOS Id of the fabric agent machine.
* **instanceType**: 'VMware' (Required): Discriminator property for FabricAgentModelCustomProperties.
* **marsAuthenticationIdentity**: [IdentityModel](#identitymodel) (Required): Identity model.


## FabricAgentModelProperties
### Properties
* **authenticationIdentity**: [IdentityModel](#identitymodel) (Required): Identity model.
* **correlationId**: string (ReadOnly): Gets or sets the fabric agent correlation Id.
* **customProperties**: [FabricAgentModelCustomProperties](#fabricagentmodelcustomproperties) (Required): Fabric agent model custom properties.
* **healthErrors**: [HealthErrorModel](#healtherrormodel)[] (ReadOnly): Gets or sets the list of health errors.
* **isResponsive**: bool (ReadOnly): Gets or sets a value indicating whether the fabric agent is responsive.
* **lastHeartbeat**: string (ReadOnly): Gets or sets the time when last heartbeat was sent by the fabric agent.
* **machineId**: string {minLength: 1} (Required): Gets or sets the machine Id where fabric agent is running.
* **machineName**: string {minLength: 1} (Required): Gets or sets the machine name where fabric agent is running.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the fabric agent.
* **resourceAccessIdentity**: [IdentityModel](#identitymodel) (Required): Identity model.
* **versionNumber**: string (ReadOnly): Gets or sets the fabric agent version.

## FabricModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### AzStackHCIFabricModelCustomProperties
#### Properties
* **applianceName**: string[] (ReadOnly): Gets or sets the Appliance name.
* **azStackHciSiteId**: string (Required): Gets or sets the ARM Id of the AzStackHCI site.
* **cluster**: [AzStackHCIClusterProperties](#azstackhciclusterproperties) (Required): AzStackHCI cluster properties.
* **fabricContainerId**: string (ReadOnly): Gets or sets the fabric container Id.
* **fabricResourceId**: string (ReadOnly): Gets or sets the fabric resource Id.
* **instanceType**: 'AzStackHCI' (Required): Discriminator property for FabricModelCustomProperties.
* **migrationHubUri**: string (ReadOnly): Gets or sets the migration hub Uri.
* **migrationSolutionId**: string (Required): Gets or sets the Migration solution ARM Id.

### HyperVMigrateFabricModelCustomProperties
#### Properties
* **fabricContainerId**: string (ReadOnly): Gets or sets the fabric container Id.
* **fabricResourceId**: string (ReadOnly): Gets or sets the fabric resource Id.
* **hyperVSiteId**: string (Required): Gets or sets the ARM Id of the HyperV site.
* **instanceType**: 'HyperVMigrate' (Required): Discriminator property for FabricModelCustomProperties.
* **migrationHubUri**: string (ReadOnly): Gets or sets the migration hub Uri.
* **migrationSolutionId**: string (Required): Gets or sets the migration solution ARM Id.

### VMwareMigrateFabricModelCustomProperties
#### Properties
* **instanceType**: 'VMwareMigrate' (Required): Discriminator property for FabricModelCustomProperties.
* **migrationSolutionId**: string (Required): Gets or sets the ARM Id of the migration solution.
* **vmwareSiteId**: string (Required): Gets or sets the ARM Id of the VMware site.


## FabricModelProperties
### Properties
* **customProperties**: [FabricModelCustomProperties](#fabricmodelcustomproperties) (Required): Fabric model custom properties.
* **health**: 'Critical' | 'Normal' | 'Warning' | string (ReadOnly): Gets or sets the fabric health.
* **healthErrors**: [HealthErrorModel](#healtherrormodel)[] (ReadOnly): Gets or sets the list of health errors.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the fabric.
* **serviceEndpoint**: string (ReadOnly): Gets or sets the service endpoint.
* **serviceResourceId**: string (ReadOnly): Gets or sets the service resource Id.

## FailoverProtectedItemProperties
### Properties
* **networkName**: string (ReadOnly): Gets or sets the network name.
* **protectedItemName**: string (ReadOnly): Gets or sets the protected item name.
* **recoveryPointId**: string (ReadOnly): Gets or sets the recovery point Id.
* **recoveryPointTime**: string (ReadOnly): Gets or sets the recovery point time.
* **subnet**: string (ReadOnly): Gets or sets the network subnet.
* **testVmName**: string (ReadOnly): Gets or sets the test VM name.
* **vmName**: string (ReadOnly): Gets or sets the VM name.

## GroupConnectivityInformation
### Properties
* **customerVisibleFqdns**: string[]: Gets or sets customer visible FQDNs.
* **groupId**: string: Gets or sets group id.
* **internalFqdn**: string: Gets or sets Internal Fqdn.
* **memberName**: string: Gets or sets member name.
* **privateLinkServiceArmRegion**: string: Gets or sets the private link service arm region.
* **redirectMapId**: string: Gets or sets the redirect map id.

## HealthErrorModel
### Properties
* **affectedResourceCorrelationIds**: string[]: Gets or sets the list of affected resource correlation Ids. This can be used to uniquely identify the count of items affected by a specific category and severity as well as count of item affected by an specific issue.
* **affectedResourceType**: string: Gets or sets the type of affected resource type.
* **category**: string (ReadOnly): Gets or sets the error category.
* **causes**: string (ReadOnly): Gets or sets possible causes of the error.
* **childErrors**: [InnerHealthErrorModel](#innerhealtherrormodel)[]: Gets or sets a list of child health errors associated with this error.
* **code**: string (ReadOnly): Gets or sets the error code.
* **creationTime**: string (ReadOnly): Gets or sets the error creation time.
* **healthCategory**: string (ReadOnly): Gets or sets the health category.
* **isCustomerResolvable**: bool (ReadOnly): Gets or sets a value indicating whether the error is customer resolvable.
* **message**: string (ReadOnly): Gets or sets the error message.
* **recommendation**: string (ReadOnly): Gets or sets recommended action to resolve the error.
* **severity**: string (ReadOnly): Gets or sets the error severity.
* **source**: string (ReadOnly): Gets or sets the error source.
* **summary**: string (ReadOnly): Gets or sets the error summary.

## HyperVToAzStackHCIDiskInput
### Properties
* **diskBlockSize**: int: Gets or sets a value of disk block size.
* **diskController**: [DiskControllerInputs](#diskcontrollerinputs): Disk controller.
* **diskFileFormat**: string {minLength: 1} (Required): Gets or sets the type of the virtual hard disk, vhd or vhdx.
* **diskId**: string {minLength: 1} (Required): Gets or sets the disk Id.
* **diskIdentifier**: string: Gets or sets a value of disk identifier.
* **diskLogicalSectorSize**: int: Gets or sets a value of disk logical sector size.
* **diskPhysicalSectorSize**: int: Gets or sets a value of disk physical sector size.
* **diskSizeGB**: int (Required): Gets or sets the disk size in GB.
* **isDynamic**: bool: Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard disk.
* **isOsDisk**: bool (Required): Gets or sets a value indicating whether disk is os disk.
* **storageContainerId**: string: Gets or sets the target storage account ARM Id.

## HyperVToAzStackHCINicInput
### Properties
* **isMacMigrationEnabled**: bool: Gets or sets a value indicating whether mac address migration is enabled.
* **isStaticIpMigrationEnabled**: bool: Gets or sets a value indicating whether static ip migration is enabled.
* **networkName**: string (ReadOnly): Gets or sets the network name.
* **nicId**: string {minLength: 1} (Required): Gets or sets the NIC Id.
* **selectionTypeForFailover**: 'NotSelected' | 'SelectedByDefault' | 'SelectedByUser' | 'SelectedByUserOverride' | string (Required): Gets or sets the selection type of the NIC.
* **targetNetworkId**: string: Gets or sets the target network Id within AzStackHCI Cluster.
* **testNetworkId**: string: Gets or sets the target test network Id within AzStackHCI Cluster.

## HyperVToAzStackHCIProtectedDiskProperties
### Properties
* **capacityInBytes**: int (ReadOnly): Gets or sets the disk capacity in bytes.
* **diskBlockSize**: int (ReadOnly): Gets or sets a value of disk block size.
* **diskLogicalSectorSize**: int (ReadOnly): Gets or sets a value of disk logical sector size.
* **diskPhysicalSectorSize**: int (ReadOnly): Gets or sets a value of disk physical sector size.
* **diskType**: string (ReadOnly): Gets or sets the disk type.
* **isDynamic**: bool (ReadOnly): Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard disk.
* **isOsDisk**: bool (ReadOnly): Gets or sets a value indicating whether the disk is the OS disk.
* **migrateDiskName**: string (ReadOnly): Gets or sets the failover clone disk.
* **seedDiskName**: string (ReadOnly): Gets or sets the seed disk name.
* **sourceDiskId**: string (ReadOnly): Gets or sets the source disk Id.
* **sourceDiskName**: string (ReadOnly): Gets or sets the source disk Name.
* **storageContainerId**: string (ReadOnly): Gets or sets the ARM Id of the storage container.
* **storageContainerLocalPath**: string (ReadOnly): Gets or sets the local path of the storage container.
* **testMigrateDiskName**: string (ReadOnly): Gets or sets the test failover clone disk.

## HyperVToAzStackHCIProtectedNicProperties
### Properties
* **macAddress**: string (ReadOnly): Gets or sets the NIC mac address.
* **networkName**: string (ReadOnly): Gets or sets the network name.
* **nicId**: string (ReadOnly): Gets or sets the NIC Id.
* **selectionTypeForFailover**: 'NotSelected' | 'SelectedByDefault' | 'SelectedByUser' | 'SelectedByUserOverride' | string (ReadOnly): Gets or sets the selection type of the NIC.
* **targetNetworkId**: string (ReadOnly): Gets or sets the target network Id within AzStackHCI Cluster.
* **testNetworkId**: string (ReadOnly): Gets or sets the target test network Id within AzStackHCI Cluster.

## IdentityModel
### Properties
* **aadAuthority**: string {minLength: 1} (Required): Gets or sets the authority of the SPN with which fabric agent communicates to service.
* **applicationId**: string {minLength: 1} (Required): Gets or sets the client/application Id of the SPN with which fabric agent communicates to service.
* **audience**: string {minLength: 1} (Required): Gets or sets the audience of the SPN with which fabric agent communicates to service.
* **objectId**: string {minLength: 1} (Required): Gets or sets the object Id of the SPN with which fabric agent communicates to service.
* **tenantId**: string {minLength: 1} (Required): Gets or sets the tenant Id of the SPN with which fabric agent communicates to service.

## InnerHealthErrorModel
### Properties
* **category**: string (ReadOnly): Gets or sets the error category.
* **causes**: string (ReadOnly): Gets or sets possible causes of the error.
* **code**: string (ReadOnly): Gets or sets the error code.
* **creationTime**: string (ReadOnly): Gets or sets the error creation time.
* **healthCategory**: string (ReadOnly): Gets or sets the health category.
* **isCustomerResolvable**: bool (ReadOnly): Gets or sets a value indicating whether the error is customer resolvable.
* **message**: string (ReadOnly): Gets or sets the error message.
* **recommendation**: string (ReadOnly): Gets or sets recommended action to resolve the error.
* **severity**: string (ReadOnly): Gets or sets the error severity.
* **source**: string (ReadOnly): Gets or sets the error source.
* **summary**: string (ReadOnly): Gets or sets the error summary.

## JobModel
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [JobModelProperties](#jobmodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## JobModelCustomProperties
* **Discriminator**: instanceType

### Base Properties
* **affectedObjectDetails**: [AffectedObjectDetails](#affectedobjectdetails) (ReadOnly): Gets or sets any custom properties of the affected object.

### FailoverJobModelCustomProperties
#### Properties
* **instanceType**: 'FailoverJobDetails' (Required): Discriminator property for JobModelCustomProperties.
* **protectedItemDetails**: [FailoverProtectedItemProperties](#failoverprotecteditemproperties)[] (ReadOnly): Gets or sets the failed over protected item details.

### TestFailoverCleanupJobModelCustomProperties
#### Properties
* **comments**: string (ReadOnly): Gets or sets the test failover cleanup comments.
* **instanceType**: 'TestFailoverCleanupJobDetails' (Required): Discriminator property for JobModelCustomProperties.

### TestFailoverJobModelCustomProperties
#### Properties
* **instanceType**: 'TestFailoverJobDetails' (Required): Discriminator property for JobModelCustomProperties.
* **protectedItemDetails**: [FailoverProtectedItemProperties](#failoverprotecteditemproperties)[] (ReadOnly): Gets or sets the test VM details.


## JobModelProperties
### Properties
* **activityId**: string (ReadOnly): Gets or sets the job activity id.
* **allowedActions**: string[] (ReadOnly): Gets or sets the list of allowed actions on the job.
* **customProperties**: [JobModelCustomProperties](#jobmodelcustomproperties) (Required): Job model custom properties.
* **displayName**: string (ReadOnly): Gets or sets the friendly display name.
* **endTime**: string (ReadOnly): Gets or sets the end time.
* **errors**: [ErrorModel](#errormodel)[] (ReadOnly): Gets or sets the list of errors.
* **objectId**: string (ReadOnly): Gets or sets the affected object Id.
* **objectInternalId**: string (ReadOnly): Gets or sets the affected object internal Id.
* **objectInternalName**: string (ReadOnly): Gets or sets the affected object internal name.
* **objectName**: string (ReadOnly): Gets or sets the affected object name.
* **objectType**: 'AvsDiskPool' | 'Fabric' | 'FabricAgent' | 'Policy' | 'ProtectedItem' | 'RecoveryPlan' | 'ReplicationExtension' | 'Vault' | string (ReadOnly): Gets or sets the object type.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the job.
* **replicationProviderId**: string (ReadOnly): Gets or sets the replication provider.
* **sourceFabricProviderId**: string (ReadOnly): Gets or sets the source fabric provider.
* **startTime**: string (ReadOnly): Gets or sets the start time.
* **state**: 'Cancelled' | 'Cancelling' | 'CompletedWithErrors' | 'CompletedWithInformation' | 'CompletedWithWarnings' | 'Failed' | 'Pending' | 'Started' | 'Succeeded' | string (ReadOnly): Gets or sets the job state.
* **targetFabricProviderId**: string (ReadOnly): Gets or sets the target fabric provider.
* **tasks**: [TaskModel](#taskmodel)[] (ReadOnly): Gets or sets the list of tasks.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## PolicyModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### HyperVToAzStackHCIPolicyModelCustomProperties
#### Properties
* **appConsistentFrequencyInMinutes**: int (Required): Gets or sets the app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (Required): Gets or sets the crash consistent snapshot frequency (in minutes).
* **instanceType**: 'HyperVToAzStackHCI' (Required): Discriminator property for PolicyModelCustomProperties.
* **recoveryPointHistoryInMinutes**: int (Required): Gets or sets the duration in minutes until which the recovery points need to be stored.

### VMwareToAzStackHCIPolicyModelCustomProperties
#### Properties
* **appConsistentFrequencyInMinutes**: int (Required): Gets or sets the app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (Required): Gets or sets the crash consistent snapshot frequency (in minutes).
* **instanceType**: 'VMwareToAzStackHCI' (Required): Discriminator property for PolicyModelCustomProperties.
* **recoveryPointHistoryInMinutes**: int (Required): Gets or sets the duration in minutes until which the recovery points need to be stored.


## PolicyModelProperties
### Properties
* **customProperties**: [PolicyModelCustomProperties](#policymodelcustomproperties) (Required): Policy model custom properties.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the policy.

## PrivateEndpoint
### Properties
* **id**: string: Gets or sets the id.

## PrivateEndpointConnectionProxyProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the private endpoint connection proxy.
* **remotePrivateEndpoint**: [RemotePrivateEndpoint](#remoteprivateendpoint): Represent remote private endpoint information for the private endpoint connection proxy.

## PrivateEndpointConnectionResponseProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Represent private Endpoint network resource that is linked to the Private Endpoint connection.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Represents Private link service connection state.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets provisioning state of the private endpoint connection.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string: Gets or sets the group id.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the private link resource.
* **requiredMembers**: string[]: Gets or sets the required member. This translates to how many Private IPs should be created for each privately linkable resource.
* **requiredZoneNames**: string[]: Gets or sets the private DNS zone names.

## PrivateLinkServiceConnection
### Properties
* **groupIds**: string[]: Gets or sets group ids.
* **name**: string: Gets or sets private link service connection name.
* **requestMessage**: string: Gets or sets the request message for the private link service connection.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: Gets or sets actions required.
* **description**: string: Gets or sets description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Gets or sets the status.

## PrivateLinkServiceProxy
### Properties
* **groupConnectivityInformation**: [GroupConnectivityInformation](#groupconnectivityinformation)[]: Gets or sets group connectivity information.
* **id**: string: Gets or sets private link service proxy id.
* **remotePrivateEndpointConnection**: [RemotePrivateEndpointConnection](#remoteprivateendpointconnection): Represent remote private endpoint connection.
* **remotePrivateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Represents Private link service connection state.

## ProtectedItemDynamicMemoryConfig
### Properties
* **maximumMemoryInMegaBytes**: int (Required): Gets or sets maximum memory in MB.
* **minimumMemoryInMegaBytes**: int (Required): Gets or sets minimum memory in MB.
* **targetMemoryBufferPercentage**: int (Required): Gets or sets target memory buffer in %.

## ProtectedItemJobProperties
### Properties
* **displayName**: string (ReadOnly): Gets or sets the job friendly display name.
* **endTime**: string (ReadOnly): Gets or sets end time of the job.
* **id**: string (ReadOnly): Gets or sets job Id.
* **name**: string (ReadOnly): Gets or sets job name.
* **scenarioName**: string (ReadOnly): Gets or sets protection scenario name.
* **startTime**: string (ReadOnly): Gets or sets start time of the job.
* **state**: string (ReadOnly): Gets or sets job state.

## ProtectedItemModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### HyperVToAzStackHCIProtectedItemModelCustomProperties
#### Properties
* **activeLocation**: 'Primary' | 'Recovery' | string (ReadOnly): Gets or sets the location of the protected item.
* **customLocationRegion**: string {minLength: 1} (Required): Gets or sets the location of Azure Arc HCI custom location resource.
* **disksToInclude**: [HyperVToAzStackHCIDiskInput](#hypervtoazstackhcidiskinput)[] (Required): Gets or sets the list of disks to replicate.
* **dynamicMemoryConfig**: [ProtectedItemDynamicMemoryConfig](#protecteditemdynamicmemoryconfig): Protected item dynamic memory config.
* **fabricDiscoveryMachineId**: string (Required): Gets or sets the ARM Id of the discovered machine.
* **failoverRecoveryPointId**: string (ReadOnly): Gets or sets the recovery point Id to which the VM was failed over.
* **firmwareType**: string (ReadOnly): Gets or sets the firmware type.
* **hyperVGeneration**: string {minLength: 1} (Required): Gets or sets the hypervisor generation of the virtual machine.
* **initialReplicationProgressPercentage**: int (ReadOnly): Gets or sets the initial replication progress percentage. This is calculated based on total bytes processed for all disks in the source VM.
* **instanceType**: 'HyperVToAzStackHCI' (Required): Discriminator property for ProtectedItemModelCustomProperties.
* **isDynamicRam**: bool: Gets or sets a value indicating whether memory is dynamical.
* **lastRecoveryPointId**: string (ReadOnly): Gets or sets the last recovery point Id.
* **lastRecoveryPointReceived**: string (ReadOnly): Gets or sets the last recovery point received time.
* **lastReplicationUpdateTime**: string (ReadOnly): Gets or sets the latest timestamp that replication status is updated.
* **nicsToInclude**: [HyperVToAzStackHCINicInput](#hypervtoazstackhcinicinput)[] (Required): Gets or sets the list of VM NIC to replicate.
* **osName**: string (ReadOnly): Gets or sets the name of the OS.
* **osType**: string (ReadOnly): Gets or sets the type of the OS.
* **protectedDisks**: [HyperVToAzStackHCIProtectedDiskProperties](#hypervtoazstackhciprotecteddiskproperties)[] (ReadOnly): Gets or sets the list of protected disks.
* **protectedNics**: [HyperVToAzStackHCIProtectedNicProperties](#hypervtoazstackhciprotectednicproperties)[] (ReadOnly): Gets or sets the VM NIC details.
* **resyncProgressPercentage**: int (ReadOnly): Gets or sets the resync progress percentage. This is calculated based on total bytes processed for all disks in the source VM.
* **runAsAccountId**: string {minLength: 1} (Required): Gets or sets the Run As account Id.
* **sourceApplianceName**: string (ReadOnly): Gets or sets the source appliance name.
* **sourceCpuCores**: int (ReadOnly): Gets or sets the source VM CPU cores.
* **sourceFabricAgentName**: string {minLength: 1} (Required): Gets or sets the source fabric agent name.
* **sourceMemoryInMegaBytes**: int (ReadOnly): Gets or sets the source VM ram memory size in megabytes.
* **sourceVmName**: string (ReadOnly): Gets or sets the source VM display name.
* **storageContainerId**: string (Required): Gets or sets the target storage container ARM Id.
* **targetApplianceName**: string (ReadOnly): Gets or sets the target appliance name.
* **targetArcClusterCustomLocationId**: string (Required): Gets or sets the Target Arc Cluster Custom Location ARM Id.
* **targetAzStackHciClusterName**: string (ReadOnly): Gets or sets the Target AzStackHCI cluster name.
* **targetCpuCores**: int: Gets or sets the target CPU cores.
* **targetFabricAgentName**: string {minLength: 1} (Required): Gets or sets the target fabric agent name.
* **targetHciClusterId**: string (Required): Gets or sets the Target HCI Cluster ARM Id.
* **targetLocation**: string (ReadOnly): Gets or sets the target location.
* **targetMemoryInMegaBytes**: int: Gets or sets the target memory in mega-bytes.
* **targetNetworkId**: string: Gets or sets the target network Id within AzStackHCI Cluster.
* **targetResourceGroupId**: string (Required): Gets or sets the target resource group ARM Id.
* **targetVmBiosId**: string (ReadOnly): Gets or sets the BIOS Id of the target AzStackHCI VM.
* **targetVmName**: string: Gets or sets the target VM display name.
* **testNetworkId**: string: Gets or sets the target test network Id within AzStackHCI Cluster.

### VMwareToAzStackHCIProtectedItemModelCustomProperties
#### Properties
* **activeLocation**: 'Primary' | 'Recovery' | string (ReadOnly): Gets or sets the location of the protected item.
* **customLocationRegion**: string {minLength: 1} (Required): Gets or sets the location of Azure Arc HCI custom location resource.
* **disksToInclude**: [VMwareToAzStackHCIDiskInput](#vmwaretoazstackhcidiskinput)[] (Required): Gets or sets the list of disks to replicate.
* **dynamicMemoryConfig**: [ProtectedItemDynamicMemoryConfig](#protecteditemdynamicmemoryconfig): Protected item dynamic memory config.
* **fabricDiscoveryMachineId**: string (Required): Gets or sets the ARM Id of the discovered machine.
* **failoverRecoveryPointId**: string (ReadOnly): Gets or sets the recovery point Id to which the VM was failed over.
* **firmwareType**: string (ReadOnly): Gets or sets the firmware type.
* **hyperVGeneration**: string {minLength: 1} (Required): Gets or sets the hypervisor generation of the virtual machine possible values are 1,2.
* **initialReplicationProgressPercentage**: int (ReadOnly): Gets or sets the initial replication progress percentage. This is calculated based on total bytes processed for all disks in the source VM.
* **instanceType**: 'VMwareToAzStackHCI' (Required): Discriminator property for ProtectedItemModelCustomProperties.
* **isDynamicRam**: bool: Gets or sets a value indicating whether memory is dynamical.
* **lastRecoveryPointId**: string (ReadOnly): Gets or sets the last recovery point Id.
* **lastRecoveryPointReceived**: string (ReadOnly): Gets or sets the last recovery point received time.
* **lastReplicationUpdateTime**: string (ReadOnly): Gets or sets the latest timestamp that replication status is updated.
* **migrationProgressPercentage**: int (ReadOnly): Gets or sets the migration progress percentage.
* **nicsToInclude**: [VMwareToAzStackHCINicInput](#vmwaretoazstackhcinicinput)[] (Required): Gets or sets the list of VM NIC to replicate.
* **osName**: string (ReadOnly): Gets or sets the name of the OS.
* **osType**: string (ReadOnly): Gets or sets the type of the OS.
* **performAutoResync**: bool: Gets or sets a value indicating whether auto resync is to be done.
* **protectedDisks**: [VMwareToAzStackHCIProtectedDiskProperties](#vmwaretoazstackhciprotecteddiskproperties)[] (ReadOnly): Gets or sets the list of protected disks.
* **protectedNics**: [VMwareToAzStackHCIProtectedNicProperties](#vmwaretoazstackhciprotectednicproperties)[] (ReadOnly): Gets or sets the VM NIC details.
* **resumeProgressPercentage**: int (ReadOnly): Gets or sets the resume progress percentage.
* **resumeRetryCount**: int (ReadOnly): Gets or sets the resume retry count.
* **resyncProgressPercentage**: int (ReadOnly): Gets or sets the resync progress percentage. This is calculated based on total bytes processed for all disks in the source VM.
* **resyncRequired**: bool (ReadOnly): Gets or sets a value indicating whether resync is required.
* **resyncRetryCount**: int (ReadOnly): Gets or sets the resync retry count.
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' | string (ReadOnly): Gets or sets the resync state.
* **runAsAccountId**: string {minLength: 1} (Required): Gets or sets the run as account Id.
* **sourceApplianceName**: string (ReadOnly): Gets or sets the source appliance name.
* **sourceCpuCores**: int (ReadOnly): Gets or sets the source VM CPU cores.
* **sourceFabricAgentName**: string {minLength: 1} (Required): Gets or sets the source fabric agent name.
* **sourceMemoryInMegaBytes**: int (ReadOnly): Gets or sets the source VM ram memory size in megabytes.
* **sourceVmName**: string (ReadOnly): Gets or sets the source VM display name.
* **storageContainerId**: string (Required): Gets or sets the target storage container ARM Id.
* **targetApplianceName**: string (ReadOnly): Gets or sets the target appliance name.
* **targetArcClusterCustomLocationId**: string (Required): Gets or sets the Target Arc Cluster Custom Location ARM Id.
* **targetAzStackHciClusterName**: string (ReadOnly): Gets or sets the Target AzStackHCI cluster name.
* **targetCpuCores**: int: Gets or sets the target CPU cores.
* **targetFabricAgentName**: string {minLength: 1} (Required): Gets or sets the target fabric agent name.
* **targetHciClusterId**: string (Required): Gets or sets the Target HCI Cluster ARM Id.
* **targetLocation**: string (ReadOnly): Gets or sets the target location.
* **targetMemoryInMegaBytes**: int: Gets or sets the target memory in mega-bytes.
* **targetNetworkId**: string: Gets or sets the target network Id within AzStackHCI Cluster.
* **targetResourceGroupId**: string (Required): Gets or sets the target resource group ARM Id.
* **targetVmBiosId**: string (ReadOnly): Gets or sets the BIOS Id of the target AzStackHCI VM.
* **targetVmName**: string: Gets or sets the target VM display name.
* **testNetworkId**: string: Gets or sets the target test network Id within AzStackHCI Cluster.


## ProtectedItemModelProperties
### Properties
* **allowedJobs**: string[] (ReadOnly): Gets or sets the allowed scenarios on the protected item.
* **correlationId**: string (ReadOnly): Gets or sets the protected item correlation Id.
* **currentJob**: [ProtectedItemJobProperties](#protecteditemjobproperties) (ReadOnly): Gets or sets the current scenario.
* **customProperties**: [ProtectedItemModelCustomProperties](#protecteditemmodelcustomproperties) (Required): Protected item model custom properties.
* **fabricAgentId**: string (ReadOnly): Gets or sets the fabric agent Id.
* **fabricId**: string (ReadOnly): Gets or sets the fabric Id.
* **fabricObjectId**: string (ReadOnly): Gets or sets the fabric object Id.
* **fabricObjectName**: string (ReadOnly): Gets or sets the fabric object name.
* **healthErrors**: [HealthErrorModel](#healtherrormodel)[] (ReadOnly): Gets or sets the list of health errors.
* **lastFailedEnableProtectionJob**: [ProtectedItemJobProperties](#protecteditemjobproperties) (ReadOnly): Gets or sets the last failed enabled protection job.
* **lastFailedPlannedFailoverJob**: [ProtectedItemJobProperties](#protecteditemjobproperties) (ReadOnly): Gets or sets the last failed planned failover job.
* **lastSuccessfulPlannedFailoverTime**: string (ReadOnly): Gets or sets the Last successful planned failover time.
* **lastSuccessfulTestFailoverTime**: string (ReadOnly): Gets or sets the Last successful test failover time.
* **lastSuccessfulUnplannedFailoverTime**: string (ReadOnly): Gets or sets the Last successful unplanned failover time.
* **lastTestFailoverJob**: [ProtectedItemJobProperties](#protecteditemjobproperties) (ReadOnly): Gets or sets the last test failover job.
* **policyName**: string {minLength: 1} (Required): Gets or sets the policy name.
* **protectionState**: 'CancelFailoverFailedOnPrimary' | 'CancelFailoverFailedOnRecovery' | 'CancelFailoverInProgressOnPrimary' | 'CancelFailoverInProgressOnRecovery' | 'CancelFailoverStatesBegin' | 'CancelFailoverStatesEnd' | 'ChangeRecoveryPointCompleted' | 'ChangeRecoveryPointFailed' | 'ChangeRecoveryPointInitiated' | 'ChangeRecoveryPointStatesBegin' | 'ChangeRecoveryPointStatesEnd' | 'CommitFailoverCompleted' | 'CommitFailoverFailedOnPrimary' | 'CommitFailoverFailedOnRecovery' | 'CommitFailoverInProgressOnPrimary' | 'CommitFailoverInProgressOnRecovery' | 'CommitFailoverStatesBegin' | 'CommitFailoverStatesEnd' | 'DisablingFailed' | 'DisablingProtection' | 'EnablingFailed' | 'EnablingProtection' | 'InitialReplicationCompletedOnPrimary' | 'InitialReplicationCompletedOnRecovery' | 'InitialReplicationFailed' | 'InitialReplicationInProgress' | 'InitialReplicationStatesBegin' | 'InitialReplicationStatesEnd' | 'MarkedForDeletion' | 'PlannedFailoverCompleted' | 'PlannedFailoverCompleting' | 'PlannedFailoverCompletionFailed' | 'PlannedFailoverFailed' | 'PlannedFailoverInitiated' | 'PlannedFailoverTransitionStatesBegin' | 'PlannedFailoverTransitionStatesEnd' | 'Protected' | 'ProtectedStatesBegin' | 'ProtectedStatesEnd' | 'ReprotectFailed' | 'ReprotectInitiated' | 'ReprotectStatesBegin' | 'ReprotectStatesEnd' | 'UnplannedFailoverCompleted' | 'UnplannedFailoverCompleting' | 'UnplannedFailoverCompletionFailed' | 'UnplannedFailoverFailed' | 'UnplannedFailoverInitiated' | 'UnplannedFailoverTransitionStatesBegin' | 'UnplannedFailoverTransitionStatesEnd' | 'UnprotectedStatesBegin' | 'UnprotectedStatesEnd' | string (ReadOnly): Gets or sets the protection state.
* **protectionStateDescription**: string (ReadOnly): Gets or sets the protection state description.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the fabric agent.
* **replicationExtensionName**: string {minLength: 1} (Required): Gets or sets the replication extension name.
* **replicationHealth**: 'Critical' | 'Normal' | 'Warning' | string (ReadOnly): Gets or sets protected item replication health.
* **resynchronizationState**: 'None' | 'ResynchronizationCompleted' | 'ResynchronizationFailed' | 'ResynchronizationInitiated' | string (ReadOnly): Gets or sets the resynchronization state.
* **resyncRequired**: bool (ReadOnly): Gets or sets a value indicating whether resynchronization is required or not.
* **sourceFabricProviderId**: string (ReadOnly): Gets or sets the source fabric provider Id.
* **targetFabricAgentId**: string (ReadOnly): Gets or sets the target fabric agent Id.
* **targetFabricId**: string (ReadOnly): Gets or sets the target fabric Id.
* **targetFabricProviderId**: string (ReadOnly): Gets or sets the target fabric provider Id.
* **testFailoverState**: 'MarkedForDeletion' | 'None' | 'TestFailoverCleanupCompleting' | 'TestFailoverCleanupInitiated' | 'TestFailoverCompleted' | 'TestFailoverCompleting' | 'TestFailoverCompletionFailed' | 'TestFailoverFailed' | 'TestFailoverInitiated' | string (ReadOnly): Gets or sets the test failover state.
* **testFailoverStateDescription**: string (ReadOnly): Gets or sets the Test failover state description.

## RecoveryPointModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### HyperVToAzStackHCIRecoveryPointModelCustomProperties
#### Properties
* **diskIds**: string[] (ReadOnly): Gets or sets the list of the disk Ids.
* **instanceType**: 'HyperVToAzStackHCI' (Required): Discriminator property for RecoveryPointModelCustomProperties.

### VMwareToAzStackHCIRecoveryPointModelCustomProperties
#### Properties
* **diskIds**: string[] (ReadOnly): Gets or sets the list of the disk Ids.
* **instanceType**: 'VMwareToAzStackHCIRecoveryPointModelCustomProperties' (Required): Discriminator property for RecoveryPointModelCustomProperties.


## RecoveryPointModelProperties
### Properties
* **customProperties**: [RecoveryPointModelCustomProperties](#recoverypointmodelcustomproperties) (Required): Recovery point model custom properties.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the recovery point item.
* **recoveryPointTime**: string (Required): Gets or sets the recovery point time.
* **recoveryPointType**: 'ApplicationConsistent' | 'CrashConsistent' | string (Required): Gets or sets the recovery point type.

## RemotePrivateEndpoint
### Properties
* **connectionDetails**: [ConnectionDetails](#connectiondetails)[]: Gets or sets the list of Connection Details. This is the connection details for private endpoint.
* **id**: string {minLength: 1} (Required): Gets or sets private link service proxy id.
* **manualPrivateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]: Gets or sets the list of Manual Private Link Service Connections and gets populated for Manual approval flow.
* **privateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]: Gets or sets the list of Private Link Service Connections and gets populated for Auto approval flow.
* **privateLinkServiceProxies**: [PrivateLinkServiceProxy](#privatelinkserviceproxy)[]: Gets or sets the list of private link service proxies.

## RemotePrivateEndpointConnection
### Properties
* **id**: string: Gets or sets the remote private endpoint connection id.

## ReplicationExtensionModelCustomProperties
* **Discriminator**: instanceType

### Base Properties

### HyperVToAzStackHCIReplicationExtensionModelCustomProperties
#### Properties
* **asrServiceUri**: string (ReadOnly): Gets or sets the Uri of ASR.
* **azStackHciFabricArmId**: string (Required): Gets or sets the ARM Id of the target AzStackHCI fabric.
* **azStackHciSiteId**: string (ReadOnly): Gets or sets the ARM Id of the AzStackHCI site.
* **gatewayServiceUri**: string (ReadOnly): Gets or sets the Uri of Gateway.
* **hyperVFabricArmId**: string (Required): Gets or sets the ARM Id of the source HyperV fabric.
* **hyperVSiteId**: string (ReadOnly): Gets or sets the ARM Id of the HyperV site.
* **instanceType**: 'HyperVToAzStackHCI' (Required): Discriminator property for ReplicationExtensionModelCustomProperties.
* **rcmServiceUri**: string (ReadOnly): Gets or sets the Uri of Rcm.
* **resourceGroup**: string (ReadOnly): Gets or sets the resource group.
* **resourceLocation**: string (ReadOnly): Gets or sets the resource location.
* **sourceGatewayServiceId**: string (ReadOnly): Gets or sets the gateway service Id of source.
* **sourceStorageContainerName**: string (ReadOnly): Gets or sets the source storage container name.
* **storageAccountId**: string: Gets or sets the storage account Id.
* **storageAccountSasSecretName**: string: Gets or sets the Sas Secret of storage account.
* **subscriptionId**: string (ReadOnly): Gets or sets the subscription.
* **targetGatewayServiceId**: string (ReadOnly): Gets or sets the gateway service Id of target.
* **targetStorageContainerName**: string (ReadOnly): Gets or sets the target storage container name.

### VMwareToAzStackHCIReplicationExtensionModelCustomProperties
#### Properties
* **asrServiceUri**: string (ReadOnly): Gets or sets the Uri of ASR.
* **azStackHciFabricArmId**: string (Required): Gets or sets the ARM Id of the target AzStackHCI fabric.
* **azStackHciSiteId**: string (ReadOnly): Gets or sets the ARM Id of the AzStackHCI site.
* **gatewayServiceUri**: string (ReadOnly): Gets or sets the Uri of Gateway.
* **instanceType**: 'VMwareToAzStackHCI' (Required): Discriminator property for ReplicationExtensionModelCustomProperties.
* **rcmServiceUri**: string (ReadOnly): Gets or sets the Uri of Rcm.
* **resourceGroup**: string (ReadOnly): Gets or sets the resource group.
* **resourceLocation**: string (ReadOnly): Gets or sets the resource location.
* **sourceGatewayServiceId**: string (ReadOnly): Gets or sets the gateway service Id of source.
* **sourceStorageContainerName**: string (ReadOnly): Gets or sets the source storage container name.
* **storageAccountId**: string: Gets or sets the storage account Id.
* **storageAccountSasSecretName**: string: Gets or sets the Sas Secret of storage account.
* **subscriptionId**: string (ReadOnly): Gets or sets the subscription.
* **targetGatewayServiceId**: string (ReadOnly): Gets or sets the gateway service Id of target.
* **targetStorageContainerName**: string (ReadOnly): Gets or sets the target storage container name.
* **vmwareFabricArmId**: string (Required): Gets or sets the ARM Id of the source VMware fabric.
* **vmwareSiteId**: string (ReadOnly): Gets or sets the ARM Id of the VMware site.


## ReplicationExtensionModelProperties
### Properties
* **customProperties**: [ReplicationExtensionModelCustomProperties](#replicationextensionmodelcustomproperties) (Required): Replication extension model custom properties.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the replication extension.

## StorageContainerProperties
### Properties
* **clusterSharedVolumePath**: string {minLength: 1} (Required): Gets or sets the ClusterSharedVolumePath.
* **name**: string {minLength: 1} (Required): Gets or sets the Name.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TaskModel
### Properties
* **childrenJobs**: [JobModel](#jobmodel)[]: Gets or sets the list of children job models.
* **customProperties**: [TaskModelCustomProperties](#taskmodelcustomproperties): Task model custom properties.
* **endTime**: string (ReadOnly): Gets or sets the end time.
* **startTime**: string (ReadOnly): Gets or sets the start time.
* **state**: 'Cancelled' | 'Failed' | 'Pending' | 'Skipped' | 'Started' | 'Succeeded' | string (ReadOnly): Gets or sets the task state.
* **taskName**: string (ReadOnly): Gets or sets the task name.

## TaskModelCustomProperties
### Properties
* **instanceType**: string {minLength: 1} (Required): Gets or sets the instance type.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VaultModelProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the provisioning state of the vault.
* **serviceResourceId**: string (ReadOnly): Gets or sets the service resource Id.
* **vaultType**: 'DisasterRecovery' | 'Migrate' | string: Gets or sets the type of vault.

## VMwareToAzStackHCIDiskInput
### Properties
* **diskBlockSize**: int: Gets or sets a value of disk block size.
* **diskController**: [DiskControllerInputs](#diskcontrollerinputs): Disk controller.
* **diskFileFormat**: string {minLength: 1} (Required): Gets or sets the type of the virtual hard disk, vhd or vhdx.
* **diskId**: string {minLength: 1} (Required): Gets or sets the disk Id.
* **diskIdentifier**: string: Gets or sets a value of disk identifier.
* **diskLogicalSectorSize**: int: Gets or sets a value of disk logical sector size.
* **diskPhysicalSectorSize**: int: Gets or sets a value of disk physical sector size.
* **diskSizeGB**: int (Required): Gets or sets the disk size in GB.
* **isDynamic**: bool: Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard disk.
* **isOsDisk**: bool (Required): Gets or sets a value indicating whether disk is os disk.
* **storageContainerId**: string: Gets or sets the target storage account ARM Id.

## VMwareToAzStackHCINicInput
### Properties
* **isMacMigrationEnabled**: bool: Gets or sets a value indicating whether mac address migration is enabled.
* **isStaticIpMigrationEnabled**: bool: Gets or sets a value indicating whether static ip migration is enabled.
* **label**: string {minLength: 1} (Required): Gets or sets the NIC label.
* **networkName**: string (ReadOnly): Gets or sets the network name.
* **nicId**: string {minLength: 1} (Required): Gets or sets the NIC Id.
* **selectionTypeForFailover**: 'NotSelected' | 'SelectedByDefault' | 'SelectedByUser' | 'SelectedByUserOverride' | string (Required): Gets or sets the selection type of the NIC.
* **targetNetworkId**: string: Gets or sets the target network Id within AzStackHCI Cluster.
* **testNetworkId**: string: Gets or sets the target test network Id within AzStackHCI Cluster.

## VMwareToAzStackHCIProtectedDiskProperties
### Properties
* **capacityInBytes**: int (ReadOnly): Gets or sets the disk capacity in bytes.
* **diskBlockSize**: int (ReadOnly): Gets or sets a value of disk block size.
* **diskLogicalSectorSize**: int (ReadOnly): Gets or sets a value of disk logical sector size.
* **diskPhysicalSectorSize**: int (ReadOnly): Gets or sets a value of disk physical sector size.
* **diskType**: string (ReadOnly): Gets or sets the disk type.
* **isDynamic**: bool (ReadOnly): Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard disk.
* **isOsDisk**: bool (ReadOnly): Gets or sets a value indicating whether the disk is the OS disk.
* **migrateDiskName**: string (ReadOnly): Gets or sets the failover clone disk.
* **seedDiskName**: string (ReadOnly): Gets or sets the seed disk name.
* **sourceDiskId**: string (ReadOnly): Gets or sets the source disk Id.
* **sourceDiskName**: string (ReadOnly): Gets or sets the source disk Name.
* **storageContainerId**: string (ReadOnly): Gets or sets the ARM Id of the storage container.
* **storageContainerLocalPath**: string (ReadOnly): Gets or sets the local path of the storage container.
* **testMigrateDiskName**: string (ReadOnly): Gets or sets the test failover clone disk.

## VMwareToAzStackHCIProtectedNicProperties
### Properties
* **isPrimaryNic**: bool: Gets or sets a value indicating whether this is the primary NIC.
* **label**: string (ReadOnly): Gets or sets the NIC label.
* **macAddress**: string (ReadOnly): Gets or sets the NIC mac address.
* **networkName**: string (ReadOnly): Gets or sets the network name.
* **nicId**: string (ReadOnly): Gets or sets the NIC Id.
* **selectionTypeForFailover**: 'NotSelected' | 'SelectedByDefault' | 'SelectedByUser' | 'SelectedByUserOverride' | string (ReadOnly): Gets or sets the selection type of the NIC.
* **targetNetworkId**: string (ReadOnly): Gets or sets the target network Id within AzStackHCI Cluster.
* **testNetworkId**: string (ReadOnly): Gets or sets the target test network Id within AzStackHCI Cluster.

