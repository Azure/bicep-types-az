# Microsoft.HorizonDb @ 2026-10-01-preview

## Resource Microsoft.HorizonDb/clusters@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [HorizonDbClusterManagedServiceIdentity](#horizondbclustermanagedserviceidentity): The managed service identities assigned to this resource. Omitting the entire identity property from PUT or PATCH preserves all current assignments. When provided, PUT replaces the user-assigned identity set and PATCH merges it; null PATCH dictionary entries remove individual identities. Setting type to None clears all assignments.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9](?:[-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HorizonDb/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/authentications@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.HorizonDb/clusters/authentications
#### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'microsoftEntra' (Required, DeployTimeConstant): The resource name
* **properties**: [MicrosoftEntraAuthenticationProperties](#microsoftentraauthenticationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/authentications' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.HorizonDb/clusters/authentications
#### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'passwordMethod' (Required, DeployTimeConstant): The resource name
* **properties**: [PasswordAuthenticationProperties](#passwordauthenticationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/authentications' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.HorizonDb/clusters/changeDataCapture@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ChangeDataCaptureCapabilityProperties](#changedatacapturecapabilityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/changeDataCapture' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/changeDataCaptureConfigurations@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9](?:[-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ChangeDataCaptureConfigurationProperties](#changedatacaptureconfigurationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/changeDataCaptureConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/changeDataCaptureDestinations@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9](?:[-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ChangeDataCaptureDestinationProperties](#changedatacapturedestinationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/changeDataCaptureDestinations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/changeDataCaptureDestinations/identityAssignments@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9](?:[-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ChangeDataCaptureIdentityAssignmentProperties](#changedatacaptureidentityassignmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/changeDataCaptureDestinations/identityAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/endpoints@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9](?:[-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointProperties](#endpointproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/logCaptureConfigurations@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^PostgreSqlServer$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LogCaptureConfigurationProperties](#logcaptureconfigurationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/logCaptureConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/logFiles@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LogFileProperties](#logfileproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/logFiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/microsoftEntraAdministrators@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MicrosoftEntraAdministratorPropertiesForAddOrMicrosoftEntraAdministratorProperties](#microsoftentraadministratorpropertiesforaddormicrosoftentraadministratorproperties) (Required): The PostgreSQL role and Microsoft Entra principal mapping properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/microsoftEntraAdministrators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/pools@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9](?:[-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [PoolTags](#pooltags): Resource tags.
* **type**: 'Microsoft.HorizonDb/clusters/pools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/pools/firewallRules@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 128, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/pools/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/pools/maintenanceEvents@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 8, maxLength: 8, pattern: "^[A-Z0-9]{4}-[A-Z0-9]{3}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceEventProperties](#maintenanceeventproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/pools/maintenanceEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/pools/nodes@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z0-9](?:[-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NodeProperties](#nodeproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/pools/nodes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/privateEndpointConnections@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/clusters/privateLinkResources@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 128, pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/clusters/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/locations/capabilities@2026-10-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [CapabilityProperties](#capabilityproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/locations/capabilities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/locations/parameterGroups@2026-10-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DefaultParameterGroupProperties](#defaultparametergroupproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HorizonDb/locations/parameterGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HorizonDb/parameterGroups@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ParameterGroupProperties](#parametergroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HorizonDb/parameterGroups' (ReadOnly, DeployTimeConstant): The resource type

## Function activateIdentity (Microsoft.HorizonDb/clusters/changeDataCaptureDestinations@2026-10-01-preview)
* **Resource**: Microsoft.HorizonDb/clusters/changeDataCaptureDestinations
* **ApiVersion**: 2026-10-01-preview
* **Input**: [ActivateChangeDataCaptureIdentityRequest](#activatechangedatacaptureidentityrequest)
* **Output**: [ActivateChangeDataCaptureIdentityResult](#activatechangedatacaptureidentityresult)

## Function applyNow (Microsoft.HorizonDb/clusters/pools/maintenanceEvents@2026-10-01-preview)
* **Resource**: Microsoft.HorizonDb/clusters/pools/maintenanceEvents
* **ApiVersion**: 2026-10-01-preview
* **Output**: [MaintenanceEventActionResponse](#maintenanceeventactionresponse)

## Function failover (Microsoft.HorizonDb/clusters@2026-10-01-preview)
* **Resource**: Microsoft.HorizonDb/clusters
* **ApiVersion**: 2026-10-01-preview
* **Output**: [Cluster](#cluster)

## Function listDownloadUrls (Microsoft.HorizonDb/clusters/logFiles@2026-10-01-preview)
* **Resource**: Microsoft.HorizonDb/clusters/logFiles
* **ApiVersion**: 2026-10-01-preview
* **Output**: [LogFileDownloadUrl](#logfiledownloadurl)

## Function reschedule (Microsoft.HorizonDb/clusters/pools/maintenanceEvents@2026-10-01-preview)
* **Resource**: Microsoft.HorizonDb/clusters/pools/maintenanceEvents
* **ApiVersion**: 2026-10-01-preview
* **Input**: [MaintenanceEventRescheduleRequest](#maintenanceeventreschedulerequest)
* **Output**: [MaintenanceEventActionResponse](#maintenanceeventactionresponse)

## Function restart (Microsoft.HorizonDb/clusters/pools@2026-10-01-preview)
* **Resource**: Microsoft.HorizonDb/clusters/pools
* **ApiVersion**: 2026-10-01-preview
* **Output**: [Pool](#pool)

## Function start (Microsoft.HorizonDb/clusters/pools@2026-10-01-preview)
* **Resource**: Microsoft.HorizonDb/clusters/pools
* **ApiVersion**: 2026-10-01-preview
* **Output**: [Pool](#pool)

## Function stop (Microsoft.HorizonDb/clusters/pools@2026-10-01-preview)
* **Resource**: Microsoft.HorizonDb/clusters/pools
* **ApiVersion**: 2026-10-01-preview
* **Output**: [Pool](#pool)

## ActivateChangeDataCaptureIdentityRequest
### Properties
* **drainExistingSessions**: bool: Whether existing destination sessions should drain before the identity cutover. The default is false.
* **identityAssignmentResourceId**: string (Required): The resource ID of an inactive, successfully validated identity assignment under the destination receiving the action.

## ActivateChangeDataCaptureIdentityResult
### Properties
* **previousIdentityAssignmentResourceId**: string (ReadOnly): The resource ID of the previously active identity assignment, when one existed.
* **status**: 'Succeeded' (Required, ReadOnly): The completed activation status.
* **targetIdentityAssignmentResourceId**: string (Required, ReadOnly): The resource ID of the newly active identity assignment.

## BackupProperties
### Properties
* **earliestRestorePointUtc**: string (ReadOnly): The earliest point in time, in UTC, to which the cluster can currently be restored.
* **geoRedundancy**: 'Disabled' | 'Enabled' | string (Required): The geo-redundancy state. Geo-redundant backup is not supported when dataEncryption.type is AzureKeyVault.
* **retentionDays**: int {minValue: 1, maxValue: 35}: The number of days that automatic backups are retained. The service defaults to 7 days when this property is omitted.

## CapabilityProperties
### Properties
* **clusterCapabilities**: [ClusterCapability](#clustercapability) (Required, ReadOnly): The Cluster capabilities available in the region.
* **poolCapabilities**: [PoolCapability](#poolcapability) (Required, ReadOnly): The Pool capabilities available in the region, including processor, generation, and compute-model details.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the capability catalog entry.

## ChangeDataCaptureCapabilityProperties
### Properties
* **autoUpgradeExtension**: bool: Whether HorizonDB may automatically upgrade the service-owned change data capture extension within the supported compatibility policy.
* **configurationCount**: int (Required, ReadOnly): The number of change data capture configurations under this cluster.
* **desiredState**: 'Disabled' | 'Enabled' | string (Required): The requested capability state.
* **destinationCount**: int (Required, ReadOnly): The number of change data capture destinations under this cluster.
* **effectiveState**: 'Degraded' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' | string (Required, ReadOnly): The current effective capability state.
* **extension**: [ChangeDataCaptureExtensionStatus](#changedatacaptureextensionstatus) (Required, ReadOnly): The installed change data capture extension and its current lifecycle state.
* **prerequisites**: [ChangeDataCapturePrerequisiteStatus](#changedatacaptureprerequisitestatus) (Required, ReadOnly): The current readiness of change data capture engine and read-write endpoint prerequisites.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the latest capability mutation.
* **replicationArchitecture**: 'ComputeBased' | 'Hybrid' | 'StorageBased' | string (Required, ReadOnly): The implementation architecture currently used for change capture.
* **status**: [ChangeDataCaptureStatus](#changedatacapturestatus) (Required, ReadOnly): Customer-safe health information for the capability.

## ChangeDataCaptureConfigurationProperties
### Properties
* **databaseName**: string (Required): The exact PostgreSQL database name enrolled in this logical stream. This value is immutable.
* **desiredState**: 'Disabled' | 'Enabled' | string (Required): The requested configuration state.
* **destinationResourceId**: string (Required): The immutable resource ID of an enabled change data capture destination under the same cluster.
* **effectiveState**: 'Degraded' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' | string (Required, ReadOnly): The current effective configuration state.
* **extension**: [ChangeDataCaptureExtensionStatus](#changedatacaptureextensionstatus) (Required, ReadOnly): The change data capture extension state for the enrolled database.
* **logicalStreamId**: string (Required, ReadOnly): A service-generated identifier for the logical stream, represented as an RFC 4122 GUID. This value remains stable when a writer role moves and the service materializes a replacement ARM resource under the new writer cluster.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the latest configuration mutation.
* **replication**: [ChangeDataCaptureReplicationStatus](#changedatacapturereplicationstatus) (Required, ReadOnly): The known status of the destination-owned replication session.
* **status**: [ChangeDataCaptureStatus](#changedatacapturestatus) (Required, ReadOnly): Customer-safe health information for the configuration.
* **topology**: [ChangeDataCaptureTopologyBindingStatus](#changedatacapturetopologybindingstatus) (Required, ReadOnly): The current writer-topology binding for this logical stream.
* **usageProfile**: 'Mirroring' | string (Required): The immutable usage profile. API version 2026-10-01-preview accepts Mirroring only.

## ChangeDataCaptureDestinationDetails
* **Discriminator**: destinationType

### Base Properties
* **protocol**: 'Native' | string (Required): The protocol used to communicate with the destination.

### FabricDestinationDetails
#### Properties
* **destinationType**: 'Fabric' (Required): The destination family.
* **protocol**: 'Native' (Required): Specifies the Microsoft Fabric native destination protocol.
* **workspaceId**: string (Required): The opaque identifier of the Microsoft Fabric workspace that owns the destination artifact.


## ChangeDataCaptureDestinationProperties
### Properties
* **activeIdentityAssignmentResourceId**: string (ReadOnly): The resource ID of the currently active identity assignment, if one is active.
* **configurationCount**: int (Required, ReadOnly): The number of change data capture configurations that reference this destination.
* **desiredState**: 'Disabled' | 'Enabled' | string (Required): The requested destination state.
* **destination**: [ChangeDataCaptureDestinationDetails](#changedatacapturedestinationdetails) (Required): The immutable Microsoft Fabric destination settings. Resubmitting the same values is accepted; changing them requires deleting and recreating the destination.
* **effectiveState**: 'Degraded' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | 'Failed' | 'WaitingForIdentity' | string (Required, ReadOnly): The current effective destination state.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the latest destination mutation.
* **status**: [ChangeDataCaptureStatus](#changedatacapturestatus) (Required, ReadOnly): Customer-safe health information for the destination.

## ChangeDataCaptureExtensionStatus
### Properties
* **name**: string (Required, ReadOnly): The extension name.
* **state**: 'Failed' | 'Installing' | 'NotInstalled' | 'Ready' | 'Removing' | 'Upgrading' | string (Required, ReadOnly): The current extension lifecycle state.
* **version**: string (Required, ReadOnly): The installed extension version.

## ChangeDataCaptureIdentityAssignmentProperties
### Properties
* **activationState**: 'Activating' | 'Active' | 'Deactivating' | 'Failed' | 'Inactive' | string (Required, ReadOnly): The current activation state within the parent destination.
* **effectiveState**: 'Assigned' | 'Assigning' | 'Failed' | 'Removing' | string (Required, ReadOnly): The current assignment lifecycle state.
* **identityResourceId**: string (Required): The immutable resource ID of the user-assigned managed identity selected for this destination. The ID must exactly match a key in the parent cluster's top-level identity.userAssignedIdentities dictionary; otherwise creation is rejected. Attaching the identity to the cluster does not grant destination access, so required role assignments must be configured separately. Resubmitting the same value is accepted; changing it requires deleting and recreating the assignment.
* **principalId**: string (Required, ReadOnly): The Microsoft Entra principal ID resolved from the user-assigned managed identity, represented as an RFC 4122 GUID.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the latest identity-assignment mutation.
* **status**: [ChangeDataCaptureStatus](#changedatacapturestatus) (Required, ReadOnly): Customer-safe health information for the identity assignment.
* **tenantId**: string (Required, ReadOnly): The Microsoft Entra tenant ID resolved from the user-assigned managed identity, represented as an RFC 4122 GUID.
* **validation**: [IdentityValidationStatus](#identityvalidationstatus) (Required, ReadOnly): The latest validation result for this identity assignment.

## ChangeDataCapturePrerequisiteStatus
### Properties
* **engineConfigurationState**: 'Failed' | 'NotReady' | 'Ready' | 'Reconciling' | string (Required, ReadOnly): The readiness of the required engine configuration.
* **readWriteEndpointState**: 'Ready' | 'Unavailable' | string (Required, ReadOnly): The availability of the read-write endpoint required for engine mutations.

## ChangeDataCaptureReplicationStatus
### Properties
* **externalArtifactId**: string (ReadOnly): An opaque identifier of a destination-owned artifact, such as a Microsoft Fabric mirrored-database item. HorizonDB does not create, update, or delete the identified artifact.
* **lastConnectedAtUtc**: string (ReadOnly): The date and time, in UTC, when a destination session most recently connected.
* **state**: 'Connecting' | 'Degraded' | 'Failed' | 'NotApplicable' | 'NotConnected' | 'Paused' | 'Reconnecting' | 'Replicating' | 'Stopping' | string (Required, ReadOnly): The current replication-session state.

## ChangeDataCaptureStatus
### Properties
* **code**: string (Required, ReadOnly): A stable machine-readable status code.
* **message**: string (Required, ReadOnly): A localized customer-safe description of the current status.

## ChangeDataCaptureTopologyBindingStatus
### Properties
* **activeClusterResourceId**: string (Required, ReadOnly): The Azure resource ID of the cluster that currently owns the active configuration projection.
* **generation**: int (Required, ReadOnly): A monotonically increasing topology generation for this logical stream.
* **replacementConfigurationResourceId**: string (ReadOnly): The replacement configuration resource ID when this projection has been superseded or requires rebinding.
* **state**: 'Active' | 'Conflict' | 'RebindRequired' | 'Reconciling' | 'Superseded' | string (Required, ReadOnly): The configuration's relationship to the current writer topology.

## Cluster
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **identity**: [HorizonDbClusterManagedServiceIdentity](#horizondbclustermanagedserviceidentity): The managed service identities assigned to this resource. Omitting the entire identity property from PUT or PATCH preserves all current assignments. When provided, PUT replaces the user-assigned identity set and PATCH merges it; null PATCH dictionary entries remove individual identities. Setting type to None clears all assignments.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ClusterProperties](#clusterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ClusterCapability
### Properties
* **recommendedPostgreSqlVersion**: '17' | '18' | string (Required, ReadOnly): The PostgreSQL major version recommended for clients to select for HorizonDB Clusters in the region. This recommendation does not describe backend behavior when the PostgreSQL version is omitted from a request.
* **supportedFeatures**: [ClusterFeatureCapability](#clusterfeaturecapability)[] (Required, ReadOnly): Additional Cluster features supported in the region.
* **supportedPostgreSqlVersions**: [PostgreSqlVersionCapability](#postgresqlversioncapability)[] (Required, ReadOnly): The PostgreSQL major versions supported by Clusters in the region.

## ClusterFeatureCapability
### Properties
* **name**: string (Required, ReadOnly): The name of the Cluster feature.

## ClusterProperties
### Properties
* **aiModelManagement**: 'Disabled' | 'Enabled' | string: Specifies whether AI Model Management is enabled for the cluster.
* **backup**: [BackupProperties](#backupproperties): The backup configuration for the cluster.
* **creationMode**: 'Create' | 'PointInTimeRestore' | string: The mode used to create the cluster. When this property is omitted while creating a new cluster, the service records Create. PointInTimeRestore creates a new cluster from an available backup; pointInTimeUtc and creationSourceClusterResourceId are then required, postgreSqlVersion must be omitted because it is obtained from the backup metadata, and creationSourceClusterLocation is required when the source and target cluster locations differ. This property is immutable and is returned as creation provenance. On replacement, omission preserves the recorded value, resubmitting the same value is accepted, and changing it is rejected.
* **creationSourceClusterLocation**: string: The Azure location of the source HorizonDB cluster used for point-in-time restore. This property is optional when the source and target cluster locations are the same. It is required when the source cluster location differs from the target cluster location and must identify the source cluster's location. This property must be absent for creation modes other than PointInTimeRestore or when creationMode is omitted. This immutable creation-provenance value does not change after creation.
* **creationSourceClusterResourceId**: string: The Azure resource ID of the source HorizonDB cluster used by the selected creation mode. This property is required for PointInTimeRestore and other source-based creation modes, and must be absent when creationMode is Create or omitted. A source cluster does not need to have a pool to be restored, provided an available backup exists. This immutable creation-provenance value does not change after creation.
* **dataEncryption**: [HorizonDbClusterDataEncryption](#horizondbclusterdataencryption): The data encryption configuration for the cluster. When omitted during initial cluster creation, the service uses SystemManaged encryption. When supplied during initial cluster creation, type is required. For PUT updates of an existing cluster, type may be omitted; if provided, it must match the existing encryption type. The encryption type is selected at cluster creation; switching between SystemManaged and AzureKeyVault after creation is not supported.
* **network**: [Network](#network): The network configuration for the cluster. When this object is omitted, the service defaults it to publicAccess Disabled.
* **pointInTimeUtc**: string: The requested point in time, in UTC. This property is required in every PointInTimeRestore request. For a same-location restore, the service restores the latest backup available at or before this value. For a cross-location restore, the service requires but ignores this value and restores the latest available backup; cross-location responses omit this property. This property must be absent for other creation modes or when creationMode is omitted and can only be specified during resource creation.
* **postgreSqlVersion**: '17' | '18' | string: The PostgreSQL major version used by the HorizonDB cluster. API version 2026-10-01-preview supports versions 17 and 18. For ordinary cluster creation, the version is supplied in the request and is immutable after creation. For point-in-time restore, the service obtains the version from the source backup metadata and the request must omit this property. This API version does not support in-place PostgreSQL major-version upgrades.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (Required, ReadOnly): The provisioning state of the cluster.
* **readWritePool**: [ReadWritePoolProperties](#readwritepoolproperties) (Required, ReadOnly): The pool currently designated to host the cluster's read-write node.
* **state**: 'Deleting' | 'Inaccessible' | 'Provisioning' | 'Ready' | 'Updating' | string (Required, ReadOnly): Current state of the cluster.

## ComputeGenerationCapability
### Properties
* **computeGeneration**: int (Required, ReadOnly): The numeric compute generation used when configuring a HorizonDB pool.
* **recommendedComputeModelType**: 'Provisioned' | string (Required, ReadOnly): The compute model type recommended for clients to select for this compute generation. This recommendation does not describe backend behavior when the compute model type is omitted from a request.
* **supportedComputeModels**: [ComputeModelCapability](#computemodelcapability)[] (Required, ReadOnly): The compute models supported by the compute generation.

## ComputeModelCapability
* **Discriminator**: type

### Base Properties

### ProvisionedComputeModelCapability
#### Properties
* **recommendedVCoreCount**: int (Required, ReadOnly): The provisioned vCore count recommended for clients to select. This recommendation does not describe backend behavior when vCores is omitted from a request.
* **supportedComputeSizes**: [ComputeSizeCapability](#computesizecapability)[] (Required, ReadOnly): The supported provisioned compute sizes.
* **type**: 'Provisioned' (Required): The compute model represented by these capabilities.


## ComputeProcessorCapability
### Properties
* **name**: 'AMD' | 'Intel' | string (Required, ReadOnly): The name of the processor family.
* **supportedGenerations**: [ComputeGenerationCapability](#computegenerationcapability)[] (Required, ReadOnly): The compute generations supported by the processor family.

## ComputeSizeCapability
### Properties
* **memoryPerVCoreInMb**: int (Required, ReadOnly): The memory in megabytes available for each vCore.
* **vCores**: int (Required, ReadOnly): The number of vCores in the configuration.

## DefaultParameterGroupProperties
### Properties
* **description**: string: Description of the default parameter group.
* **parameters**: [ParameterProperties](#parameterproperties)[] (Required): Engine-defined parameters in the default parameter group. Service and other non-engine entries are excluded.
* **postgreSqlVersion**: '17' | '18' | string (Required): PostgreSQL version for which this default parameter group is valid.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the default parameter group.

## EndpointProperties
### Properties
* **associatedResourceId**: string (Required, ReadOnly): The Azure resource ID of the Endpoint's lifecycle owner. For Cluster scope, this identifies the parent Cluster with which the Endpoint is created and deleted. For Pool scope, this identifies the Pool with which the Endpoint is created and deleted; the Pool must be a child of the Endpoint's parent Cluster.
* **fullyQualifiedDomainName**: string (Required, ReadOnly): The service-generated fully qualified domain name of the endpoint. A Cluster-scoped Endpoint uses <cluster>.<clusterid>.<region>.horizondb.azure.com. A Pool-scoped Endpoint uses <poolid>.<cluster>.<clusterid>.<region>.horizondb.azure.com.
* **role**: 'ReadOnly' | 'ReadWrite' | string (Required, ReadOnly): The routing role of the endpoint. A Cluster-scoped Endpoint normally has the ReadWrite role. Pool-scoped Endpoints have the ReadOnly role and route only to allocated nodes in the associated Pool that are not currently playing the read-write role. A Pool-scoped ReadOnly Endpoint has no routing destination unless at least one such node exists, including when the Pool is Stopped, has zero allocated nodes, or has only one allocated node and that node is playing the read-write role.
* **scope**: 'Cluster' | 'Pool' | string (Required, ReadOnly): The scope of the endpoint. Cluster-scoped Endpoints provide the cluster connection, and Pool-scoped Endpoints provide read-only connections to eligible nodes in one pool.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## FirewallRuleProperties
### Properties
* **description**: string {maxLength: 1024}: The description of the HorizonDB firewall rule. The maximum length is 1024 characters.
* **endIpAddress**: string {pattern: "^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])[.]){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$"} (Required): The end IPv4 address of the firewall rule in dotted-decimal notation. This address must be numerically greater than or equal to startIpAddress.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the firewall rule.
* **startIpAddress**: string {pattern: "^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])[.]){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$"} (Required): The start IPv4 address of the firewall rule in dotted-decimal notation.

## HorizonDbClusterDataEncryption
### Properties
* **primaryEncryptionKeyCurrentVersion**: string (ReadOnly): The current version of the primary encryption key used by the cluster. This property is returned for AzureKeyVault encryption and is absent for SystemManaged encryption.
* **primaryEncryptionKeyStatus**: 'Invalid' | 'Valid' | string (ReadOnly): The validation status of the primary encryption key. This property is returned for AzureKeyVault encryption and is absent for SystemManaged encryption.
* **primaryKeyUri**: string {pattern: "^https://[A-Za-z0-9-]+[.]vault([.]azure[.]net|[.]usgovcloudapi[.]net|[.]azure[.]cn)/keys/[A-Za-z0-9-]+/?$"}: The versionless Azure Key Vault key URI used to encrypt the cluster's primary storage. Key version paths are not supported. During initial cluster creation, this property can be provided together with primaryUserAssignedIdentityId. For updates to an existing cluster through PUT or PATCH, this property and primaryUserAssignedIdentityId cannot both change in the same request; the first update must complete before submitting a separate update for the other property.
* **primaryUserAssignedIdentityId**: string: The Azure resource ID of the user-assigned managed identity used to access the primary encryption key. The identity must also be assigned to the Cluster through its top-level identity property. During initial cluster creation, this property can be provided together with primaryKeyUri. For updates to an existing cluster through PUT or PATCH, this property and primaryKeyUri cannot both change in the same request; the first update must complete before submitting a separate update for the other property.
* **type**: 'AzureKeyVault' | 'SystemManaged' | string: The type of data encryption used by the cluster. When the data encryption configuration is supplied during initial cluster creation, this property is required. For PUT updates of an existing cluster, this property may be omitted; if provided, it must match the existing encryption type. This value is selected at cluster creation and cannot later be changed from SystemManaged to AzureKeyVault or from AzureKeyVault to SystemManaged.

## HorizonDbClusterManagedServiceIdentity
### Properties
* **type**: 'None' | 'UserAssigned' | string (Required): The managed identity type assigned to the cluster. Setting this property to None clears all managed identity assignments.
* **userAssignedIdentities**: [HorizonDbClusterManagedServiceIdentityUserAssignedIdentities](#horizondbclustermanagedserviceidentityuserassignedidentities): The user-assigned managed identities associated with the cluster. When supplied on PUT, this dictionary replaces the complete set of assignments. When supplied on PATCH, entries are merged with the existing set and a null value removes the corresponding identity. Each dictionary key must be the full Azure resource ID of a Microsoft.ManagedIdentity/userAssignedIdentities resource. Non-null request values can be empty objects; response values contain the service-populated clientId and principalId. Assigning an identity does not grant it access to destination resources; required role assignments must be configured separately.

## HorizonDbClusterManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## IdentityValidationStatus
### Properties
* **error**: [ErrorDetail](#errordetail) (ReadOnly): The customer-safe validation error when validation failed.
* **state**: 'Failed' | 'NotStarted' | 'Running' | 'Succeeded' | string (Required, ReadOnly): The current validation state.
* **validatedAtUtc**: string (ReadOnly): The date and time, in UTC, when validation most recently completed.

## LogCaptureConfigurationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the log capture configuration.
* **retentionDays**: int {minValue: 1, maxValue: 35} (Required): The number of days captured log files are retained.
* **state**: 'Disabled' | 'Enabled' | string (Required): Specifies whether HorizonDB captures this type of log. Disabling capture stops the production of new log files; existing files remain available until their retention period expires.

## LogFileDownloadUrl
### Properties
* **downloadUri**: string {sensitive} (Required): A short-lived signed URL from which the original log file can be downloaded.
* **expiresAtUtc**: string (Required): The date and time when the signed download URL expires, in UTC.

## LogFileProperties
### Properties
* **createdAtUtc**: string (Required, ReadOnly): The date and time when the log file was created, in UTC.
* **isMutable**: bool (Required, ReadOnly): Whether the platform can still append to or otherwise modify the log file.
* **lastModifiedAtUtc**: string (Required, ReadOnly): The date and time when the log file was last modified, in UTC.
* **logType**: 'PostgreSqlServer' | string (Required, ReadOnly): The type of the captured log file.
* **node**: string (Required, ReadOnly): The node that generated the log file in the HorizonDB cluster.
* **pool**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9](?:[-a-z0-9]*[a-z0-9])?$"} (Required, ReadOnly): The name of the HorizonDB pool that the node generating the log file belongs to.
* **retentionExpiresAtUtc**: string (Required, ReadOnly): The date and time when the log file expires according to its retention period, in UTC.
* **role**: 'ReadOnly' | 'ReadWrite' | 'Unassigned' | string (Required, ReadOnly): The role performed by the node that generated the log file.
* **sizeInKilobytes**: int {minValue: 0} (Required, ReadOnly): The size of the log file in kilobytes, where one kilobyte is 1024 bytes.

## MaintenanceEventActionResponse
### Properties
* **appliedNow**: bool: Indicates whether the maintenance event was requested to be applied immediately. The value is true for apply-now and false for reschedule.
* **lastUpdatedTimeUtc**: string: The time when this maintenance event record was last updated, in UTC.
* **maintenanceEventId**: string: The maintenance event identifier.
* **plannedEndTimeUtc**: string: The planned end time of the maintenance event in UTC.
* **plannedStartTimeUtc**: string: The planned start time of the maintenance event in UTC.
* **poolResourceId**: string: The full Azure resource ID of the HorizonDB pool.
* **status**: 'Canceled' | 'Complete' | 'InProgress' | 'Planned' | 'Rescheduled' | string: The status of the maintenance event.

## MaintenanceEventProperties
### Properties
* **deferrable**: bool (Required, ReadOnly): Indicates whether the customer can reschedule this maintenance event.
* **deferralDeadlineUtc**: string (ReadOnly): The latest date and time to which this maintenance event can be postponed, in UTC. This property is present only when deferrable is true.
* **description**: string (ReadOnly): The human-readable description of the maintenance event.
* **endTimeUtc**: string (Required, ReadOnly): The scheduled end time of the maintenance event in UTC.
* **estimatedDowntime**: string (ReadOnly): The estimated downtime as an ISO 8601 duration string, for example, 'PT60S' for 60 seconds.
* **lastUpdatedTimeUtc**: string (ReadOnly): The time when this maintenance event record was last updated, in UTC.
* **maintenanceEventId**: string (ReadOnly): A service-generated identifier for this maintenance event, assigned by the platform. The format is not contractual, and clients should not attempt to parse or construct this value.
* **maintenanceType**: 'PlannedMaintenance' | string (Required, ReadOnly): The maintenance type.
* **originalStartTimeUtc**: string (Required, ReadOnly): The initially scheduled start time before any reschedule, in UTC. This value equals startTimeUtc when the event has never been rescheduled.
* **rescheduledFromUtc**: string (ReadOnly): The scheduled start time before the most recent reschedule, in UTC. This property is absent if the event has never been rescheduled.
* **startTimeUtc**: string (Required, ReadOnly): The scheduled start time of the maintenance event in UTC.
* **status**: 'Canceled' | 'Complete' | 'InProgress' | 'Planned' | 'Rescheduled' | string (Required, ReadOnly): The customer-facing status of the maintenance event.

## MaintenanceEventRescheduleRequest
### Properties
* **postponeToDateTimeUtc**: string (Required): The new start time in RFC 3339 format.

## MicrosoftEntraAdministratorPropertiesForAddOrMicrosoftEntraAdministratorProperties
### Properties
* **objectId**: string (ReadOnly): The Microsoft Entra object identifier of the principal mapped to the PostgreSQL role, represented as an RFC 4122 GUID. On PUT requests, this value comes from the URI path parameter.
* **principalName**: string {maxLength: 256} (Required): The display name or user principal name of the Microsoft Entra principal to map to the PostgreSQL role. For users, this is typically the user principal name, such as admin@contoso.com. For groups, this is the group display name. For service principals, this is the application display name.
* **principalType**: 'Group' | 'ServicePrincipal' | 'Unknown' | 'User' | string (Required): The type of Microsoft Entra principal to map to the PostgreSQL role.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the PostgreSQL role and Microsoft Entra principal mapping.
* **tenantId**: string: The identifier of the Microsoft Entra tenant containing the principal to map, represented as an RFC 4122 GUID. If omitted, this value defaults to the tenant of the subscription.

## MicrosoftEntraAuthenticationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the Microsoft Entra authentication method.
* **state**: 'Disabled' | 'Enabled' | string (Required): The state of Microsoft Entra authentication.

## Network
### Properties
* **publicAccess**: 'Disabled' | 'Enabled' | string: Specifies whether public access is enabled for the cluster. The service defaults to Disabled when this property is omitted.

## NodeProperties
### Properties
* **availabilityZone**: string (Required, ReadOnly): The availability zone in which the node is deployed.
* **role**: 'ReadOnly' | 'ReadWrite' | 'Unassigned' | string (Required, ReadOnly): The current role performed by the node within its pool.

## ParameterGroupProperties
### Properties
* **description**: string {maxLength: 1024}: Description of the parameter group. The maximum length is 1024 characters.
* **parameters**: [ParameterProperties](#parameterproperties)[]: Parameters in the parameter group.
* **postgreSqlVersion**: '17' | '18' | string (Required): The PostgreSQL major version for the parameter group. This property is required during creation and is immutable thereafter. The service selects the unique location-scoped default parameter group for this version in the resource location. The DefaultParameterGroups APIs return at most one default parameter group for each PostgreSQL version in a location, so this selection is unambiguous.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the parameter group.

## ParameterProperties
### Properties
* **allowedValues**: string (ReadOnly): The allowed values for the parameter.
* **dataType**: string (ReadOnly): The data type of the parameter.
* **defaultValue**: string (ReadOnly): The system-defined default value of the parameter, independent of the effective value.
* **description**: string (ReadOnly): The description of the parameter.
* **documentationLink**: string (ReadOnly): Link to parameter documentation.
* **isDynamic**: bool (ReadOnly): Whether the parameter can be changed dynamically.
* **isReadOnly**: bool (ReadOnly): Whether the parameter is read-only. Read-only parameters cannot be overridden.
* **name**: string: The name of the parameter.
* **unit**: string (ReadOnly): The unit of measurement for the parameter.
* **value**: string: The value of the configuration.
* **valueSource**: 'SystemDefault' | 'UserOverride' | string (ReadOnly): The source of the effective parameter value. UserOverride means that the value was explicitly supplied by the user, even when it equals defaultValue.

## PasswordAuthenticationProperties
### Properties
* **administratorLogin**: string {sensitive, minLength: 1, maxLength: 63} (WriteOnly): The PostgreSQL administrator login name. This value is not returned in responses. After it is set, renaming is not supported. Setting the login requires password authentication state to be Enabled in the same request.
* **administratorLoginPassword**: string {sensitive, minLength: 8, maxLength: 128} (WriteOnly): The PostgreSQL administrator password. Setting the password requires password authentication state to be Enabled in the same request.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the PostgreSQL username-and-password authentication method.
* **state**: 'Disabled' | 'Enabled' | string (Required): The state of PostgreSQL username-and-password authentication.

## Pool
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PoolProperties](#poolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [PoolTags](#pooltags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PoolCapability
### Properties
* **recommendedComputeProcessor**: 'AMD' | 'Intel' | string (Required, ReadOnly): The compute processor recommended for clients to select for HorizonDB Pools in the region. This recommendation does not describe backend behavior when the compute processor is omitted from a request.
* **supportedFeatures**: [PoolFeatureCapability](#poolfeaturecapability)[] (Required, ReadOnly): Additional Pool features supported in the region independently of a processor, generation, or compute model.
* **supportedProcessors**: [ComputeProcessorCapability](#computeprocessorcapability)[] (Required, ReadOnly): The processor families and their compute capabilities supported by Pools in the region.

## PoolComputeModel
### Properties
* **computeGeneration**: int {minValue: 1} (Required): The compute generation for the compute model.
* **computeProcessor**: 'AMD' | 'Intel' | string (Required): The processor type for the compute model.
* **type**: 'Provisioned' | string (Required): The type of compute model.
* **vCores**: int {minValue: 2, maxValue: 192} (Required): The number of vCores. Allowed values are 1 through 192.

## PoolFeatureCapability
### Properties
* **name**: string (Required, ReadOnly): The name of the Pool feature.

## PoolHighAvailability
### Properties
* **mode**: 'AnyZone' | 'Disabled' | 'ZoneRedundant' | string (Required): The high-availability mode. Disabled is required when nodeCount is 1. AnyZone or ZoneRedundant is required when nodeCount is 2 through 16.

## PoolParameterGroupReference
### Properties
* **applyMethod**: 'Immediate' | 'PendingReboot' | string (Required): Determines when dynamic parameter changes from the associated parameter group become effective. Static parameter changes always require a customer-initiated pool Restart, regardless of this value. Stop followed by Start and scheduled maintenance do not apply pending parameter changes.
* **parameterGroupResourceId**: string (Required): The Azure resource ID of the associated parameter group. Initial pool creation in this API version requires the corresponding Microsoft.HorizonDb/locations/parameterGroups resource. For an existing pool, PUT can specify either the corresponding default group or a customer-created Microsoft.HorizonDb/parameterGroups resource.
* **syncStatus**: 'Applying' | 'FailedToApply' | 'InSync' | 'PendingReboot' | string (ReadOnly): The synchronization status between the pool and its parameter group. PendingReboot changes remain pending across Stop, Start, and scheduled maintenance and become effective only after a customer-initiated Restart.

## PoolProperties
### Properties
* **computeModel**: [PoolComputeModel](#poolcomputemodel) (Required): The required compute model for the HorizonDB pool.
* **highAvailability**: [PoolHighAvailability](#poolhighavailability) (Required): The required high-availability configuration for the pool. mode must be Disabled when nodeCount is 1, and must be AnyZone or ZoneRedundant when nodeCount is 2 through 16.
* **nodeCount**: int {minValue: 1, maxValue: 16} (Required): The required number of nodes to allocate and assign to the pool. Allowed values are 1 through 16. To deallocate runtime compute without changing the configured node count, stop the pool.
* **parameterGroup**: [PoolParameterGroupReference](#poolparametergroupreference) (Required): The required parameter group associated with the pool. When creating a new pool in this API version, the caller must supply the corresponding default parameter group; customer-created parameter groups are not accepted during creation. For an existing pool, PUT or PATCH can associate either the corresponding default parameter group or a customer-created parameter group. The create-visible shape intentionally supports both resource ID forms so a future API version can allow customer-created parameter groups during creation without a breaking schema change.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the pool.
* **scheduledMaintenance**: [ScheduledMaintenanceProperties](#scheduledmaintenanceproperties): The scheduled maintenance configuration for the pool. The properties available depend on the selected maintenance management type.
* **state**: 'Deleting' | 'Inaccessible' | 'Provisioning' | 'Ready' | 'Restarting' | 'Starting' | 'Stopped' | 'Stopping' | 'Updating' | string (ReadOnly): Current state of the pool.

## PoolTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PoolTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PostgreSqlVersionCapability
### Properties
* **name**: '17' | '18' | string (Required, ReadOnly): The PostgreSQL major version.
* **supportedVersionsToUpgrade**: ('17' | '18' | string)[] (Required, ReadOnly): The PostgreSQL major versions to which this version can be upgraded in place. API version 2026-10-01-preview does not support in-place PostgreSQL major-version upgrades, so this array is always empty.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ReadWritePoolProperties
### Properties
* **designatedPoolResourceId**: string (ReadOnly): The Azure resource ID of the pool designated to host the cluster's read-write node. The pool is a child resource of this cluster. When a pool is created while the cluster currently has no pools, the service automatically sets this property to the new pool's resource ID, including when all pools that existed earlier in the cluster's lifetime were deleted. This property is absent when no pool is designated, such as after clearReadWritePool succeeds.

## ScheduledMaintenanceProperties
* **Discriminator**: maintenanceManagementType

### Base Properties

### SystemScheduledMaintenanceProperties
#### Properties
* **maintenanceManagementType**: 'System' (Required): Specifies whether scheduled maintenance is managed by the system or by the user.


## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

