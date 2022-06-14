# Microsoft.Migrate @ 2020-05-01

## Resource Microsoft.Migrate/migrateProjects@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location in which project is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MigrateProjectProperties](#migrateprojectproperties): Properties of a migrate project.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Migrate/migrateProjects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/privateEndpointConnections@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Gets the tag for optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionStateRequestBodyPropertiesOrPrivateEndpointConnectionProperties](#connectionstaterequestbodypropertiesorprivateendpointconnectionproperties): Properties of Connection state request.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Migrate/migrateProjects/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## ConnectionStateRequestBodyPropertiesOrPrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [ResourceId](#resourceid) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Private endpoint connection state.
* **provisioningState**: 'Accepted' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state.

## MigrateProjectProperties
### Properties
* **lastSummaryRefreshedTime**: string (ReadOnly): Last summary refresh time.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Gets the private endpoint connections.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'NotSpecified' | string: Gets or sets the state of public network access.
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started' | string (ReadOnly): Refresh summary state.
* **registeredTools**: 'AppServiceMigrationAssistant' | 'Carbonite' | 'CloudSphere' | 'Cloudamize' | 'CorentTech' | 'DataMigrationAssistant' | 'DatabaseMigrationService' | 'Device42' | 'Flexera' | 'JetStream' | 'Lakeside' | 'Movere' | 'RackWare' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerDiscovery_Import' | 'ServerMigration' | 'ServerMigration_Replication' | 'Turbonomic' | 'UnifyCloud' | 'Unknown' | 'Zerto' | string[] (ReadOnly): Register tools inside project.
* **serviceEndpoint**: string: Service endpoint.
* **summary**: [MigrateProjectPropertiesSummary](#migrateprojectpropertiessummary) (ReadOnly): Project summary.
* **utilityStorageAccountId**: string: Utility storage account id.

## MigrateProjectPropertiesSummary
### Properties
### Additional Properties
* **Additional Properties Type**: [ProjectSummary](#projectsummary)

## PrivateEndpointConnection
### Properties
* **eTag**: string (ReadOnly): Gets the tag for optimistic concurrency control.
* **id**: string (ReadOnly): Relative URL to get this Sites.
* **name**: string (ReadOnly): Gets the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Gets the properties of the object.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): Gets the resource type.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [ResourceId](#resourceid) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Gets the properties of the object.
* **provisioningState**: 'Accepted' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: Action required.
* **description**: string: Description of the object.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Private link connection state.

## ProjectSummary
### Properties
* **extendedSummary**: [ProjectSummaryExtendedSummary](#projectsummaryextendedsummary): Extended summary.
* **instanceType**: string (ReadOnly): Instance type.
* **lastSummaryRefreshedTime**: string: Last summary refresh time.
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started' | string: Refresh summary state.

## ProjectSummaryExtendedSummary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceId
### Properties
* **id**: string (ReadOnly)

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

