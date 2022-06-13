# Microsoft.Synapse @ 2020-04-01-preview

## Resource Microsoft.Synapse/workspaces/sqlDatabases@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlDatabaseProperties](#sqldatabaseproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of SqlDatabase.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Synapse/workspaces/sqlDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Synapse/workspaces/sqlPools@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of SqlPool.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlPoolProperties](#sqlpoolproperties): Resource properties.
* **sku**: [SkuV3](#skuv3): The sql pool SKU. The list of SKUs may vary by region and support offer.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of SqlPool.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Synapse/workspaces/sqlPools' (ReadOnly, DeployTimeConstant): The resource type

## SkuV3
### Properties
* **name**: string (Required): The name of the SKU, typically, a letter + Number code, e.g. P3.
* **tier**: string: The tier or edition of the particular SKU, e.g. Basic, Premium.

## SqlDatabaseDataRetention
### Properties
* **dropRetentionPeriod**: string: Specifies the dropped database retention period (ISO8601 format).
* **retentionPeriod**: string: Specifies the data retention period (ISO8601 format).

## SqlDatabaseProperties
### Properties
* **collation**: string: The collation of the database.
* **databaseGuid**: string (ReadOnly): The Guid of the database.
* **dataRetention**: [SqlDatabaseDataRetention](#sqldatabasedataretention): Sql database data retention.
* **status**: 'AutoClosed' | 'Copying' | 'Creating' | 'Disabled' | 'EmergencyMode' | 'Inaccessible' | 'Offline' | 'OfflineChangingDwPerformanceTiers' | 'OfflineSecondary' | 'Online' | 'OnlineChangingDwPerformanceTiers' | 'Paused' | 'Pausing' | 'Recovering' | 'RecoveryPending' | 'Restoring' | 'Resuming' | 'Scaling' | 'Shutdown' | 'Standby' | 'Suspect' | string (ReadOnly): The status of the database.
* **storageRedundancy**: 'Geo' | 'GeoZone' | 'Local' | 'Zone' | string: The storage redundancy of the database.

## SqlPoolProperties
### Properties
* **autoPauseTimer**: int: The period of inactivity in minutes before automatically pausing the sql pool.
* **autoResume**: bool: Indicates whether the sql pool can automatically resume when connection attempts are made.
* **currentServiceObjectiveName**: string (ReadOnly): The current service level objective name of the sql pool.
* **maxServiceObjectiveName**: string: The max service level objective name of the sql pool.
* **requestedServiceObjectiveName**: string (ReadOnly): The requested service level objective name of the sql pool.
* **sqlPoolGuid**: string (ReadOnly): The Guid of the sql pool.
* **status**: 'Creating' | 'Dropping' | 'Error' | 'Inaccessible' | 'Invisible' | 'Offline' | 'Online' | 'Paused' | 'Pausing' | 'Resuming' | 'Scaling' | 'Unknown' | string (ReadOnly): The status of the sql pool.

## SystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (ReadOnly): A string identifier for the identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that created the resource: <User|Application|ManagedIdentity|Key>
* **lastModifiedAt**: string (ReadOnly): The timestamp of last modification (UTC).
* **lastModifiedBy**: string (ReadOnly): A string identifier for the identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that last modified the resource: <User|Application|ManagedIdentity|Key>

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

