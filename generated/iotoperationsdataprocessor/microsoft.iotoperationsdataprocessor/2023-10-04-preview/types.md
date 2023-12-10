# Microsoft.IoTOperationsDataProcessor @ 2023-10-04-preview

## Resource Microsoft.IoTOperationsDataProcessor/instances@2023-10-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z0-9][a-z0-9-]{1,60}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InstanceProperties](#instanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTOperationsDataProcessor/instances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperationsDataProcessor/instances/datasets@2023-10-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z0-9][a-z0-9-]{1,60}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DatasetProperties](#datasetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTOperationsDataProcessor/instances/datasets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperationsDataProcessor/instances/pipelines@2023-10-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z0-9][a-z0-9-]{1,60}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineProperties](#pipelineproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTOperationsDataProcessor/instances/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## DatasetProperties
### Properties
* **description**: string: Detailed description of the Dataset.
* **keys**: [DatasetPropertiesKeys](#datasetpropertieskeys): List of keys that can be used for joining on enrich.
* **payload**: string: Path to the payload in the message. Enrich will add only the payload to the enriched message, other fields will not be kept except for in the indexes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **timestamp**: string: Path to an RFC3339 timestamp in the message. If no path is provided, the ingestion time of the record is used for time-based joins.
* **ttl**: string: Time to live for individual records.

## DatasetPropertiesKeys
### Properties
### Additional Properties
* **Additional Properties Type**: [DatasetPropertyKey](#datasetpropertykey)

## DatasetPropertyKey
### Properties
* **path**: string (Required): Path to the input value from the message.
* **primaryKey**: bool: If true the property will be used as a primary key. At most one primary key can exists.

## ExtendedLocation
### Properties
* **name**: string (Required): The name of the extended location.
* **type**: string (Required): The type of the extended location.

## InstanceProperties
### Properties
* **description**: string: Detailed description of the Instance.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## PipelineInput
### Properties
* **description**: string: Description for stage.
* **next**: string[] (Required): Next stage in the pipeline.
* **type**: string (Required): ARM resource type.
### Additional Properties
* **Additional Properties Type**: any

## PipelineProperties
### Properties
* **description**: string: Detailed description of the Pipeline.
* **enabled**: bool (Required): Flag indicating whether the pipeline should be running or not.
* **input**: [PipelineInput](#pipelineinput) (Required): Information about where to pull input data from.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **stages**: [PipelinePropertiesStages](#pipelinepropertiesstages) (Required): Map of stage ids to stage configurations for all pipeline processing and output stages.

## PipelinePropertiesStages
### Properties
### Additional Properties
* **Additional Properties Type**: [PipelineStage](#pipelinestage)

## PipelineStage
### Properties
* **description**: string: Description for stage.
* **next**: string[]: Next stage in the pipeline. Not required if output stage.
* **type**: string (Required): ARM resource type.
### Additional Properties
* **Additional Properties Type**: any

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

