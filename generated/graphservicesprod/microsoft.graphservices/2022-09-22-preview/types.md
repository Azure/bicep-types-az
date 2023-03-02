# Microsoft.GraphServices @ 2022-09-22-preview

## Resource Microsoft.GraphServices/accounts@2022-09-22-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountResourceProperties](#accountresourceproperties) (Required): Property bag from billing account
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): resource tags.
* **type**: 'Microsoft.GraphServices/accounts' (ReadOnly, DeployTimeConstant): The resource type

## AccountResourceProperties
### Properties
* **applicationId**: string (Required): Customer owned application ID
* **billingPlanId**: string (ReadOnly): Billing plan Id
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state.

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

