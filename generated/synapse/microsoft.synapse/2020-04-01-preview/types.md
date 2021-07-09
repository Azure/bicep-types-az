# Microsoft.Synapse @ 2020-04-01-preview

## Resource Microsoft.Synapse/workspaces/sqlDatabases@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlDatabaseProperties](#sqldatabaseproperties): The sql database's properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): ARM System Data.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Synapse/workspaces/sqlDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of SqlPool.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlPoolProperties](#sqlpoolproperties): The sql pool's properties.
* **sku**: [Sku](#sku): An ARM Resource SKU.
* **systemData**: [SystemData](#systemdata) (ReadOnly): ARM System Data.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools' (ReadOnly, DeployTimeConstant): The resource type

## SqlDatabaseProperties
### Properties
* **collation**: string: The collation of the database.
* **databaseGuid**: string (ReadOnly): The Guid of the database.
* **maxSizeBytes**: int: The max size of the database expressed in bytes.
* **status**: string (ReadOnly): Status of the database.

## SystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (ReadOnly): A string identifier for the identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly): The type of identity that created the resource: <User|Application|ManagedIdentity|Key>.
* **lastModifiedAt**: string (ReadOnly): The timestamp of last modification (UTC).
* **lastModifiedBy**: string (ReadOnly): A string identifier for the identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly): The type of identity that last modified the resource: <User|Application|ManagedIdentity|Key>.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlPoolProperties
### Properties
* **autoPauseTimer**: int: The period of inactivity in minutes before automatically pausing the sql pool.
* **autoResume**: bool: Indicates whether the sql pool can automatically resume when connection attempts are made.
* **currentServiceObjectiveName**: string (ReadOnly): The current service level objective name of the sql pool.
* **maxServiceObjectiveName**: string: The max service level objective name of the sql pool.
* **requestedServiceObjectiveName**: string (ReadOnly): The requested service level objective name of the sql pool.
* **sqlPoolGuid**: string (ReadOnly): The Guid of the sql pool.
* **status**: 'Creating' | 'Dropping' | 'Error' | 'Inaccessible' | 'Invisible' | 'Offline' | 'Online' | 'Paused' | 'Pausing' | 'Resuming' | 'Scaling' | 'Unknown' (ReadOnly): The status of the sql pool.

## Sku
### Properties
* **name**: string (Required): The name of the SKU, typically, a letter + Number code, e.g. P3.
* **tier**: string: The tier or edition of the particular SKU, e.g. Basic, Premium.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

