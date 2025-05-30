# Microsoft.Cache @ 2017-10-01

## Resource Microsoft.Cache/Redis@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RedisCreatePropertiesOrRedisProperties](#rediscreatepropertiesorredisproperties) (Required): Redis cache properties.
* **tags**: [RedisCreateParametersTags](#rediscreateparameterstags): Resource tags.
* **type**: 'Microsoft.Cache/Redis' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## Resource Microsoft.Cache/Redis/firewallRules@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RedisFirewallRuleProperties](#redisfirewallruleproperties) (Required): Properties required to create a firewall rule .
* **type**: 'Microsoft.Cache/Redis/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cache/Redis/linkedServers@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RedisLinkedServerCreatePropertiesOrRedisLinkedServerProperties](#redislinkedservercreatepropertiesorredislinkedserverproperties) (Required): Properties required to create a linked server.
* **type**: 'Microsoft.Cache/Redis/linkedServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cache/Redis/patchSchedules@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleEntries](#scheduleentries) (Required): List of patch schedules for a Redis cache.
* **type**: 'Microsoft.Cache/Redis/patchSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Cache/Redis@2017-10-01)
* **Resource**: Microsoft.Cache/Redis
* **ApiVersion**: 2017-10-01
* **Output**: [RedisAccessKeys](#redisaccesskeys)

## RedisAccessKeys
### Properties
* **primaryKey**: string (ReadOnly): The current primary key that clients can use to authenticate with Redis cache.
* **secondaryKey**: string (ReadOnly): The current secondary key that clients can use to authenticate with Redis cache.

## RedisCommonPropertiesRedisConfiguration
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RedisCommonPropertiesTenantSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RedisCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RedisCreatePropertiesOrRedisProperties
### Properties
* **accessKeys**: [RedisAccessKeys](#redisaccesskeys) (ReadOnly): The keys of the Redis cache - not set if this object is not the response to Create or Update redis cache
* **enableNonSslPort**: bool: Specifies whether the non-ssl Redis server port (6379) is enabled.
* **hostName**: string (ReadOnly): Redis host name.
* **linkedServers**: [RedisLinkedServer](#redislinkedserver)[] (ReadOnly): List of the linked servers associated with the cache
* **port**: int (ReadOnly): Redis non-SSL port.
* **provisioningState**: string (ReadOnly): Redis instance provisioning status.
* **redisConfiguration**: [RedisCommonPropertiesRedisConfiguration](#rediscommonpropertiesredisconfiguration): All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
* **redisVersion**: string (ReadOnly): Redis version.
* **shardCount**: int: The number of shards to be created on a Premium Cluster Cache.
* **sku**: [Sku](#sku) (Required): The SKU of the Redis cache to deploy.
* **sslPort**: int (ReadOnly): Redis SSL port.
* **staticIP**: string {pattern: "^\d+\.\d+\.\d+\.\d+$"}: Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network.
* **subnetId**: string {pattern: "^/subscriptions/[^/]*/resourceGroups/[^/]*/providers/Microsoft.(ClassicNetwork|Network)/virtualNetworks/[^/]*/subnets/[^/]*$"}: The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
* **tenantSettings**: [RedisCommonPropertiesTenantSettings](#rediscommonpropertiestenantsettings): A dictionary of tenant settings

## RedisFirewallRuleProperties
### Properties
* **endIP**: string (Required): highest IP address included in the range
* **startIP**: string (Required): lowest IP address included in the range

## RedisLinkedServer
### Properties
* **id**: string (ReadOnly): Linked server Id.

## RedisLinkedServerCreatePropertiesOrRedisLinkedServerProperties
### Properties
* **linkedRedisCacheId**: string (Required): Fully qualified resourceId of the linked redis cache.
* **linkedRedisCacheLocation**: string (Required): Location of the linked redis cache.
* **provisioningState**: string (ReadOnly): Terminal state of the link between primary and secondary redis cache.
* **serverRole**: 'Primary' | 'Secondary' (Required): Role of the linked server.

## ScheduleEntries
### Properties
* **scheduleEntries**: [ScheduleEntry](#scheduleentry)[] (Required): List of patch schedules for a Redis cache.

## ScheduleEntry
### Properties
* **dayOfWeek**: 'Everyday' | 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | 'Weekend' (Required): Day of the week when a cache can be patched.
* **maintenanceWindow**: string: ISO8601 timespan specifying how much time cache patching can take.
* **startHourUtc**: int (Required): Start hour after which cache patching can start.

## Sku
### Properties
* **capacity**: int (Required): The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
* **family**: 'C' | 'P' | string (Required): The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
* **name**: 'Basic' | 'Premium' | 'Standard' | string (Required): The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)

