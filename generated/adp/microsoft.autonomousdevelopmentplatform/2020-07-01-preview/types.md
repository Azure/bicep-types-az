# Microsoft.AutonomousDevelopmentPlatform @ 2020-07-01-preview

## Resource Microsoft.AutonomousDevelopmentPlatform/accounts@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): List of account properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AutonomousDevelopmentPlatform/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataPoolProperties](#datapoolproperties): List of data pool properties
* **type**: 'Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools' (ReadOnly, DeployTimeConstant): The resource type

## AccountProperties
### Properties
* **accountId**: string (ReadOnly): The account's data-plane ID
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Gets the status of the account at the time the operation was called.

## DataPoolLocation
### Properties
* **name**: string (Required): The location name

## DataPoolProperties
### Properties
* **dataPoolId**: string (ReadOnly): The Data Pool's data-plane ID
* **locations**: [DataPoolLocation](#datapoollocation)[]: Gets or sets the collection of locations where Data Pool resources should be created.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Gets the status of the data pool at the time the operation was called.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.

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

