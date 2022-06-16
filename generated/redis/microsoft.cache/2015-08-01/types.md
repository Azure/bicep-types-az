# Microsoft.Cache @ 2015-08-01

## Resource Microsoft.Cache/Redis@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RedisPropertiesOrRedisReadableProperties](#redispropertiesorredisreadableproperties) (Required): Redis cache properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Cache/Redis' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Cache/Redis@2015-08-01)
* **Resource**: Microsoft.Cache/Redis
* **ApiVersion**: 2015-08-01
* **Output**: [RedisListKeysResult](#redislistkeysresult)

## RedisListKeysResult
### Properties
* **primaryKey**: string: The current primary key that clients can use to authenticate with Redis cache.
* **secondaryKey**: string: The current secondary key that clients can use to authenticate with Redis cache.

## RedisPropertiesOrRedisReadableProperties
### Properties
* **enableNonSslPort**: bool: If the value is true, then the non-SLL Redis server port (6379) will be enabled.
* **hostName**: string (ReadOnly): Redis host name.
* **port**: int (ReadOnly): Redis non-SSL port.
* **provisioningState**: string (ReadOnly): Redis instance provisioning status.
* **redisConfiguration**: [RedisPropertiesRedisConfiguration](#redispropertiesredisconfiguration): All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
* **redisVersion**: string: RedisVersion parameter has been deprecated. As such, it is no longer necessary to provide this parameter and any value specified is ignored.
* **shardCount**: int: The number of shards to be created on a Premium Cluster Cache.
* **sku**: [Sku](#sku) (Required): What SKU of Redis cache to deploy.
* **sslPort**: int (ReadOnly): Redis SSL port.
* **staticIP**: string: Required when deploying a Redis cache inside an existing Azure Virtual Network.
* **subnet**: string: Required when deploying a Redis cache inside an existing Azure Virtual Network.
* **tenantSettings**: [RedisPropertiesTenantSettings](#redispropertiestenantsettings): tenantSettings
* **virtualNetwork**: string: The exact ARM resource ID of the virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.ClassicNetwork/VirtualNetworks/vnet1

## RedisPropertiesRedisConfiguration
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RedisPropertiesTenantSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **capacity**: int (Required): What size of Redis cache to deploy. Valid values: for C family (0, 1, 2, 3, 4, 5, 6), for P family (1, 2, 3, 4).
* **family**: 'C' | 'P' | string (Required): Which family to use. Valid values: (C, P).
* **name**: 'Basic' | 'Premium' | 'Standard' | string (Required): What type of Redis cache to deploy. Valid values: (Basic, Standard, Premium).

