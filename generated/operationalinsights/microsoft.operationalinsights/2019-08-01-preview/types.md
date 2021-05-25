# Microsoft.OperationalInsights @ 2019-08-01-preview

## Resource Microsoft.OperationalInsights/clusters@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Cluster properties.
* **sku**: [sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.OperationalInsights/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/dataExports@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataExportProperties](#dataexportproperties): Data Export properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/dataExports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/linkedServices@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedServiceProperties](#linkedserviceproperties) (Required): Linked service properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'AzureWatson' | 'CustomLogs' (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedStorageAccountsProperties](#linkedstorageaccountsproperties) (Required): Linked storage accounts properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedStorageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' (Required): The identity type.

## ClusterProperties
### Properties
* **clusterId**: string (ReadOnly): The ID associated with the cluster.
* **keyVaultProperties**: [keyVaultProperties](#keyvaultproperties)
* **nextLink**: string: The link used to get the next page of recommendations.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' (ReadOnly): The provisioning state of the cluster.

## keyVaultProperties
### Properties
* **keyName**: string: The name of the key associated with the Log Analytics cluster.
* **keyVaultUri**: string: The Key Vault uri which holds they key associated with the Log Analytics cluster.
* **keyVersion**: string: The version of the key associated with the Log Analytics cluster.

## sku
### Properties
* **capacity**: int: The capacity value
* **name**: 'CapacityReservation': The name of the SKU.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataExportProperties
### Properties
* **createdDate**: string: The latest data export rule modification time.
* **dataExportId**: string: The data export rule ID.
* **destination**: [Destination](#destination): Destination properties.
* **enable**: bool: Active when enabled.
* **lastModifiedDate**: string: Date and time when the export was last modified.
* **tableNames**: string[] (Required): An array of tables to export, for example: [“Heartbeat, SecurityEvent”].

## Destination
### Properties
* **metaData**: [DestinationMetaData](#destinationmetadata): Destination meta data.
* **resourceId**: string (Required): The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
* **type**: 'EventHub' | 'StorageAccount' (ReadOnly): The type of the destination resource.

## DestinationMetaData
### Properties
* **eventHubName**: string: Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.

## LinkedServiceProperties
### Properties
* **resourceId**: string: The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access
* **writeAccessResourceId**: string: The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access

## LinkedStorageAccountsProperties
### Properties
* **dataSourceType**: 'AzureWatson' | 'CustomLogs' (ReadOnly): Linked storage accounts type.
* **storageAccountIds**: string[]: Linked storage accounts resources ids.

