# Microsoft.ResourceGraph @ 2018-09-01-preview

## Resource Microsoft.ResourceGraph/queries@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GraphQueryProperties](#graphqueryproperties): Metadata describing a graph query for an Azure resource.
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

