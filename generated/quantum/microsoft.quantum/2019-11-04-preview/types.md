# Microsoft.Quantum @ 2019-11-04-preview

## Resource Microsoft.Quantum/workspaces@2019-11-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-04-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [schemas:2_identity](#schemas2identity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceResourceProperties](#workspaceresourceproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Quantum/workspaces' (ReadOnly, DeployTimeConstant)

## schemas:2_identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## WorkspaceResourceProperties
### Properties
* **endpointUri**: string (ReadOnly)
* **providers**: [Provider](#provider)[]
* **provisioningState**: 'Failed' | 'ProviderDeleting' | 'ProviderLaunching' | 'ProviderProvisioning' | 'ProviderUpdating' | 'Succeeded' (ReadOnly)
* **storageAccount**: string
* **usable**: 'No' | 'Partial' | 'Yes' (ReadOnly)

## Provider
### Properties
* **applicationName**: string
* **instanceUri**: string
* **providerId**: string
* **providerSku**: string
* **provisioningState**: 'Deleted' | 'Deleting' | 'Failed' | 'Launching' | 'Succeeded' | 'Updating'
* **resourceUsageId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

