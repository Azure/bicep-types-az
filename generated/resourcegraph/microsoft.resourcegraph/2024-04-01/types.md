# Microsoft.ResourceGraph @ 2024-04-01

## Resource Microsoft.ResourceGraph/queries@2024-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource
* **name**: string {pattern: "^[^<>&:\?]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GraphQueryProperties](#graphqueryproperties): Metadata describing a graph query for an Azure resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.ResourceGraph/queries' (ReadOnly, DeployTimeConstant): The resource type

## GraphQueryProperties
### Properties
* **description**: string: The description of a graph query.
* **query**: string (Required): KQL query that will be graph.
* **resultKind**: 'basic' | string (ReadOnly): Enum indicating a type of graph query.
* **timeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this graph query definition.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

