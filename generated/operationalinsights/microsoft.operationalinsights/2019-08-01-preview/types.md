# Microsoft.OperationalInsights @ 2019-08-01-preview

## Resource Microsoft.OperationalInsights/clusters@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterProperties](#clusterproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.OperationalInsights/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/dataExports@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataExportProperties](#dataexportproperties)
* **type**: 'Microsoft.OperationalInsights/workspaces/dataExports' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/linkedServices@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LinkedServiceProperties](#linkedserviceproperties) (Required)
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'AzureWatson' | 'CustomLogs' (Required, DeployTimeConstant)
* **properties**: [LinkedStorageAccountsProperties](#linkedstorageaccountsproperties) (Required)
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedStorageAccounts' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## ClusterProperties
### Properties
* **clusterId**: string (ReadOnly)
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)
* **nextLink**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' (ReadOnly)

## KeyVaultProperties
### Properties
* **keyName**: string
* **keyVaultUri**: string
* **keyVersion**: string

## Sku
### Properties
* **capacity**: int
* **name**: 'CapacityReservation'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataExportProperties
### Properties
* **createdDate**: string
* **dataExportId**: string
* **destination**: [Destination](#destination)
* **enable**: bool
* **lastModifiedDate**: string
* **tableNames**: string[] (Required)

## Destination
### Properties
* **metaData**: [DestinationMetaData](#destinationmetadata)
* **resourceId**: string (Required)
* **type**: 'EventHub' | 'StorageAccount' (ReadOnly)

## DestinationMetaData
### Properties
* **eventHubName**: string

## LinkedServiceProperties
### Properties
* **resourceId**: string
* **writeAccessResourceId**: string

## LinkedStorageAccountsProperties
### Properties
* **dataSourceType**: 'AzureWatson' | 'CustomLogs' (ReadOnly)
* **storageAccountIds**: string[]

