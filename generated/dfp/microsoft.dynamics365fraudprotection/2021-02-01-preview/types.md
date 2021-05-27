# Microsoft.Dynamics365FraudProtection @ 2021-02-01-preview

## Resource Microsoft.Dynamics365FraudProtection/instances@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the DFP resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DFPInstanceProperties](#dfpinstanceproperties): Properties of DFP resource.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Key-value pairs of additional resource provisioning properties.
* **type**: 'Microsoft.Dynamics365FraudProtection/instances' (ReadOnly, DeployTimeConstant): The resource type

## DFPInstanceProperties
### Properties
* **administration**: [DFPInstanceAdministrators](#dfpinstanceadministrators): An array of administrator user identities
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly): The current deployment state of DFP resource. The provisioningState is to indicate states for resource provisioning.

## DFPInstanceAdministrators
### Properties
* **members**: string[]: An array of administrator user identities.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

