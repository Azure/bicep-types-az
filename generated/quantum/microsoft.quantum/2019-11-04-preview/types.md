# Microsoft.Quantum @ 2019-11-04-preview

## Resource Microsoft.Quantum/workspaces@2019-11-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-04-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: QuantumWorkspaceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceResourceProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Quantum/workspaces' (ReadOnly, DeployTimeConstant)

## QuantumWorkspaceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## WorkspaceResourceProperties
### Properties
* **endpointUri**: string (ReadOnly)
* **providers**: Provider[]
* **provisioningState**: 'Failed' | 'ProviderDeleting' | 'ProviderLaunching' | 'ProviderProvisioning' | 'ProviderUpdating' | 'Succeeded' (ReadOnly)
* **storageAccount**: string
* **usable**: 'No' | 'Partial' | 'Yes' (ReadOnly)

## Provider
### Properties
* **applicationName**: string (ReadOnly)
* **instanceUri**: string
* **providerId**: string
* **providerSku**: string
* **provisioningState**: 'Deleted' | 'Deleting' | 'Failed' | 'Launching' | 'Succeeded' | 'Updating'
* **resourceUsageId**: string (ReadOnly)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

