# Microsoft.Synapse @ 2020-04-01-preview

## Resource Microsoft.Synapse/workspaces/sqlDatabases@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlDatabaseProperties](#sqldatabaseproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Synapse/workspaces/sqlDatabases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Synapse/workspaces/sqlPools@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlPoolProperties](#sqlpoolproperties)
* **sku**: [Sku](#sku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Synapse/workspaces/sqlPools' (ReadOnly, DeployTimeConstant)

## SqlDatabaseProperties
### Properties
* **collation**: string
* **databaseGuid**: string (ReadOnly)
* **maxSizeBytes**: int
* **status**: string (ReadOnly)

## SystemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

