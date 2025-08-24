# Microsoft.Edge @ 2025-08-01

## Resource Microsoft.Edge/configurationReferences@2025-08-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2025-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^default$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationReferenceProperties](#configurationreferenceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/configurationReferences' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/configurations@2025-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?!.*\.\.)[a-zA-Z0-9-][a-zA-Z0-9._-]{1,68}[a-zA-Z0-9-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Edge/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/configurations/dynamicConfigurations@2025-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(?!.*\.\.)[a-zA-Z0-9-][a-zA-Z0-9._-]{1,68}[a-zA-Z0-9-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DynamicConfigurationProperties](#dynamicconfigurationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/configurations/dynamicConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/configurations/dynamicConfigurations/versions@2025-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9.-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DynamicConfigurationVersionProperties](#dynamicconfigurationversionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/configurations/dynamicConfigurations/versions' (ReadOnly, DeployTimeConstant): The resource type

## ConfigurationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of resource

## ConfigurationReferenceProperties
### Properties
* **configurationResourceId**: string: ArmId of Configuration resource
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

## DynamicConfigurationProperties
### Properties
* **currentVersion**: string (Required): Current Version of dynamic configuration
* **displayName**: string (ReadOnly): Display name of the dynamic configuration
* **dynamicConfigurationModel**: 'Application' | 'Common' | string (ReadOnly): Type of dynamic configuration model
* **dynamicConfigurationType**: 'Hierarchy' | 'Shared' | string (ReadOnly): Type of dynamic configuration
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource

## DynamicConfigurationVersionProperties
### Properties
* **displayState**: string (ReadOnly): Display state
* **dynamicSchemaVersionId**: string (ReadOnly): Dynamic schema version Id for configuration
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Initialized' | 'Succeeded' | string (ReadOnly): Provisioning state of resource
* **schemaId**: string (ReadOnly): Schema Id for configuration
* **state**: 'ConfigurationCompleted' | 'ConfigurationPending' | string (ReadOnly): Configuration state
* **values**: string (Required): Values of configuration version

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

