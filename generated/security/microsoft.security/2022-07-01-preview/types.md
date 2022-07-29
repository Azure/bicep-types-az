# Microsoft.Security @ 2022-07-01-preview

## Resource Microsoft.Security/applications@2022-07-01-preview
* **Valid Scope(s)**: Subscription, Extension
### Properties
* **apiVersion**: '2022-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties): Properties of a security application
* **type**: 'Microsoft.Security/applications' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationProperties
### Properties
* **conditionSets**: any[] (Required): The application conditionSets - see examples
* **description**: string: description of the application
* **displayName**: string: display name of the application
* **sourceResourceType**: 'Assessments' | string (Required): The application source, what it affects, e.g. Assessments

