# Microsoft.Synapse @ 2020-04-01-preview

## Microsoft.Synapse/workspaces/sqlDatabases
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlDatabaseProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Synapse/workspaces/sqlDatabases' (ReadOnly, DeployTimeConstant)

## SqlDatabaseProperties
### Properties
* **collation**: string
* **databaseGuid**: string (ReadOnly)
* **maxSizeBytes**: int

## SystemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Synapse/workspaces/sqlPools
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlPoolProperties
* **sku**: Sku
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Synapse/workspaces/sqlPools' (ReadOnly, DeployTimeConstant)

## SqlPoolProperties
### Properties
* **currentServiceObjectiveName**: string (ReadOnly)
* **requestedServiceObjectiveName**: string (ReadOnly)
* **sqlPoolGuid**: string (ReadOnly)
* **status**: 'Creating' | 'Dropping' | 'Error' | 'Inaccessible' | 'Invisible' | 'Offline' | 'Online' | 'Paused' | 'Pausing' | 'Resuming' | 'Scaling' | 'Unknown' (ReadOnly)

## Sku
### Properties
* **name**: string (Required)
* **tier**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

