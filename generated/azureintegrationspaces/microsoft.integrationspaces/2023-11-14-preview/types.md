# Microsoft.IntegrationSpaces @ 2023-11-14-preview

## Resource Microsoft.IntegrationSpaces/spaces@2023-11-14-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "[a-zA-Z0-9_.()-]{0,79}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SpaceResourceProperties](#spaceresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IntegrationSpaces/spaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IntegrationSpaces/spaces/applications@2023-11-14-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "[a-zA-Z0-9_.()-]{0,79}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IntegrationSpaces/spaces/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IntegrationSpaces/spaces/applications/businessProcesses@2023-11-14-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "[a-zA-Z0-9_.()-]{0,79}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BusinessProcessProperties](#businessprocessproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IntegrationSpaces/spaces/applications/businessProcesses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IntegrationSpaces/spaces/applications/businessProcesses/versions@2023-11-14-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BusinessProcessProperties](#businessprocessproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IntegrationSpaces/spaces/applications/businessProcesses/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IntegrationSpaces/spaces/applications/resources@2023-11-14-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "[a-zA-Z0-9_.()-]{0,79}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IntegrationSpaces/spaces/applications/resources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IntegrationSpaces/spaces/infrastructureResources@2023-11-14-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-14-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "[a-zA-Z0-9_.()-]{0,79}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InfrastructureResourceProperties](#infrastructureresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IntegrationSpaces/spaces/infrastructureResources' (ReadOnly, DeployTimeConstant): The resource type

## Function listBusinessProcessDevelopmentArtifacts (Microsoft.IntegrationSpaces/spaces/applications@2023-11-14-preview)
* **Resource**: Microsoft.IntegrationSpaces/spaces/applications
* **ApiVersion**: 2023-11-14-preview
* **Output**: [ListBusinessProcessDevelopmentArtifactsResponse](#listbusinessprocessdevelopmentartifactsresponse)

## ApplicationProperties
### Properties
* **description**: string: The description of the resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **trackingDataStores**: [ApplicationPropertiesTrackingDataStores](#applicationpropertiestrackingdatastores) (Required): The tracking data stores.

## ApplicationPropertiesTrackingDataStores
### Properties
### Additional Properties
* **Additional Properties Type**: [TrackingDataStore](#trackingdatastore)

## ApplicationResourceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **resourceId**: string (Required): The Arm id of the application resource.
* **resourceKind**: string: The kind of the application resource.
* **resourceType**: string (Required): The type of the application resource.

## BusinessProcessDevelopmentArtifactProperties
### Properties
* **businessProcessMapping**: [BusinessProcessDevelopmentArtifactPropertiesBusinessProcessMapping](#businessprocessdevelopmentartifactpropertiesbusinessprocessmapping): The business process mapping.
* **businessProcessStages**: [BusinessProcessDevelopmentArtifactPropertiesBusinessProcessStages](#businessprocessdevelopmentartifactpropertiesbusinessprocessstages): The business process stages.
* **description**: string: The description of the business process.
* **identifier**: [BusinessProcessIdentifier](#businessprocessidentifier): The business process identifier.
* **trackingProfiles**: [BusinessProcessDevelopmentArtifactPropertiesTrackingProfiles](#businessprocessdevelopmentartifactpropertiestrackingprofiles): The tracking profile for the business process.

## BusinessProcessDevelopmentArtifactPropertiesBusinessProcessMapping
### Properties
### Additional Properties
* **Additional Properties Type**: [BusinessProcessMappingItem](#businessprocessmappingitem)

## BusinessProcessDevelopmentArtifactPropertiesBusinessProcessStages
### Properties
### Additional Properties
* **Additional Properties Type**: [BusinessProcessStage](#businessprocessstage)

## BusinessProcessDevelopmentArtifactPropertiesTrackingProfiles
### Properties
### Additional Properties
* **Additional Properties Type**: [TrackingProfileDefinition](#trackingprofiledefinition)

## BusinessProcessIdentifier
### Properties
* **propertyName**: string: The property name of the business process identifier.
* **propertyType**: string: The property type of the business process identifier.

## BusinessProcessMappingItem
### Properties
* **logicAppResourceId**: string: The logic app resource id.
* **operationName**: string: The operation name.
* **operationType**: string: The mapping item operation type of the business process.
* **workflowName**: string: The workflow name within the logic app.

## BusinessProcessProperties
### Properties
* **businessProcessMapping**: [BusinessProcessPropertiesBusinessProcessMapping](#businessprocesspropertiesbusinessprocessmapping): The business process mapping.
* **businessProcessStages**: [BusinessProcessPropertiesBusinessProcessStages](#businessprocesspropertiesbusinessprocessstages): The business process stages.
* **description**: string: The description of the business process.
* **identifier**: [BusinessProcessIdentifier](#businessprocessidentifier): The business process identifier.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **tableName**: string: The table name of the business process.
* **trackingDataStoreReferenceName**: string: The tracking data store reference name.
* **version**: string (ReadOnly): The version of the business process.

## BusinessProcessPropertiesBusinessProcessMapping
### Properties
### Additional Properties
* **Additional Properties Type**: [BusinessProcessMappingItem](#businessprocessmappingitem)

## BusinessProcessPropertiesBusinessProcessStages
### Properties
### Additional Properties
* **Additional Properties Type**: [BusinessProcessStage](#businessprocessstage)

## BusinessProcessReference
### Properties
* **name**: string: The business process name.
* **version**: string: The business process version.

## BusinessProcessStage
### Properties
* **description**: string: The description of the business stage.
* **properties**: [BusinessProcessStageProperties](#businessprocessstageproperties): The properties within the properties of the business process stage.
* **stagesBefore**: string[]: The property to keep track of stages before current in the business process stage.

## BusinessProcessStageProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FlowTrackingDefinition
### Properties
* **correlationContext**: [TrackingCorrelationContext](#trackingcorrelationcontext): The tracking correlation context.
* **events**: [FlowTrackingDefinitionEvents](#flowtrackingdefinitionevents): The tracking events.

## FlowTrackingDefinitionEvents
### Properties
### Additional Properties
* **Additional Properties Type**: [TrackingEventDefinition](#trackingeventdefinition)

## InfrastructureResourceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **resourceId**: string (Required): The id of the infrastructure resource.
* **resourceType**: string (Required): The type of the infrastructure resource.

## ListBusinessProcessDevelopmentArtifactsResponse
### Properties
* **value**: [SaveOrGetBusinessProcessDevelopmentArtifactResponse](#saveorgetbusinessprocessdevelopmentartifactresponse)[] (Required): The list of the business process development artifact.

## SaveOrGetBusinessProcessDevelopmentArtifactResponse
### Properties
* **name**: string (Required): The name of the business process development artifact.
* **properties**: [BusinessProcessDevelopmentArtifactProperties](#businessprocessdevelopmentartifactproperties): The properties of the business process development artifact.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data of the business process development artifact.

## SpaceResourceProperties
### Properties
* **description**: string: The description of the resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

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

## TrackingCorrelationContext
### Properties
* **operationName**: string: The operation name for correlation context.
* **operationType**: string: The operation type for correlation context.
* **propertyName**: string: The name of the correlation property.
* **value**: string: The template expression for correlation context property value.

## TrackingDataStore
### Properties
* **databaseName**: string (Required): The database name.
* **dataStoreIngestionUri**: string (Required): The data store ingestion URI.
* **dataStoreResourceId**: string (Required): The data store resource id.
* **dataStoreUri**: string (Required): The data store URI.

## TrackingEventDefinition
### Properties
* **operationName**: string: The operation name.
* **operationType**: string: The operation type.
* **properties**: [TrackingEventDefinitionProperties](#trackingeventdefinitionproperties): The properties to be collected for event.

## TrackingEventDefinitionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## TrackingProfileDefinition
### Properties
* **$schema**: string: The tracking definition schema uri.
* **businessProcess**: [BusinessProcessReference](#businessprocessreference): The business process reference.
* **trackingDefinitions**: [TrackingProfileDefinitionTrackingDefinitions](#trackingprofiledefinitiontrackingdefinitions): The tracking definitions.

## TrackingProfileDefinitionTrackingDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [FlowTrackingDefinition](#flowtrackingdefinition)

