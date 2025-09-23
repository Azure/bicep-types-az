# Microsoft.Migrate @ 2024-03-03-preview

## Resource Microsoft.Migrate/assessmentProjects@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Migrate/assessmentProjects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/privateEndpointConnections@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/privateLinkResources@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/projectSummary@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessmentProjectSummaryProperties](#assessmentprojectsummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/projectSummary' (ReadOnly, DeployTimeConstant): The resource type

## AssessmentProjectSummaryProperties
### Properties
* **errorSummaryAffectedEntities**: [ErrorSummary](#errorsummary)[] (ReadOnly): Gets the Error summary by feature. Contains number of affected Entities per
feature.
* **lastAssessmentTimestamp**: string (ReadOnly): Gets the last assessment timestamp.
* **numberOfAssessments**: int (ReadOnly): Gets the number of assessments created in this project.
* **numberOfGroups**: int (ReadOnly): Gets the number of groups created in this project.
* **numberOfImportMachines**: int (ReadOnly): Gets the number of import machines part of this project.
* **numberOfMachines**: int (ReadOnly): Gets the number of machines part of this project.
* **numberOfPrivateEndpointConnections**: int (ReadOnly): Gets the number of private endpoint connections.

## ErrorSummary
### Properties
* **assessmentType**: string (ReadOnly): Gets the assessment type.
* **count**: int (ReadOnly): Gets the affected entity count.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

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

## ProjectProperties
### Properties
* **assessmentSolutionId**: string: Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **customerStorageAccountArmId**: string: The ARM id of the storage account used for interactions when public access is
disabled.
* **customerWorkspaceId**: string: The ARM id of service map workspace created by customer.
* **customerWorkspaceLocation**: string: Location of service map workspace created by customer.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections to the project.
* **projectStatus**: 'Active' | 'Inactive' | string: Assessment project status.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **publicNetworkAccess**: string: This value can be set to 'enabled' to avoid breaking changes on existing
customer resources and templates. If set to 'disabled', traffic over public
interface is not allowed, and private endpoint connections would be the
exclusive access method.
* **serviceEndpoint**: string (ReadOnly): Endpoint at which the collector agent can call agent REST API.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601
format.

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

