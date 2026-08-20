# Microsoft.GraphServices @ 2022-09-22-preview

## Resource Microsoft.GraphServices/accounts@2022-09-22-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountResourceProperties](#accountresourceproperties) (Required): Property bag from billing account
* **systemData**: [AccountResourceSystemData](#accountresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): resource tags.
* **type**: 'Microsoft.GraphServices/accounts' (ReadOnly, DeployTimeConstant): The resource type

## AccountResourceProperties
### Properties
* **appId**: string {pattern: "(^[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}?)$"} (Required): Customer owned application ID
* **billingPlanId**: string {pattern: "(^[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}?)$"} (ReadOnly): Billing Plan Id
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state.

## AccountResourceSystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

