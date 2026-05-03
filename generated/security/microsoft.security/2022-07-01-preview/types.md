# Microsoft.Security @ 2022-07-01-preview

## Resource Microsoft.Security/applications@2022-07-01-preview
* **Readable Scope(s)**: Subscription, Extension
* **Writable Scope(s)**: Subscription, Extension
### Properties
* **apiVersion**: '2022-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties): Properties of a security application
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Security/applications' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationProperties
### Properties
* **conditionSets**: any[] (Required): The application conditionSets - see examples
* **description**: string: description of the application
* **displayName**: string: display name of the application
* **sourceResourceType**: 'Assessments' | string (Required): The application source, what it affects, e.g. Assessments

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

