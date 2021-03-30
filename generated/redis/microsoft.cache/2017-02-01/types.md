# Microsoft.Cache @ 2017-02-01

## Resource Microsoft.Cache/Redis@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RedisCreateProperties](#rediscreateproperties) (Required): Properties supplied to Create Redis operation.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Cache/Redis' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cache/Redis/firewallRules@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RedisFirewallRuleProperties](#redisfirewallruleproperties) (Required): Specifies a range of IP addresses permitted to connect to the cache
* **type**: 'Microsoft.Cache/Redis/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cache/Redis/linkedServers@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RedisLinkedServerCreateProperties](#redislinkedservercreateproperties) (Required): Create properties for a linked server
* **type**: 'Microsoft.Cache/Redis/linkedServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cache/Redis/patchSchedules@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleEntries](#scheduleentries) (Required): List of patch schedules for a Redis cache.
* **type**: 'Microsoft.Cache/Redis/patchSchedules' (ReadOnly, DeployTimeConstant): The resource type

## RedisCreateProperties
### Properties
* **accessKeys**: [RedisAccessKeys](#redisaccesskeys) (ReadOnly): Redis cache access keys.
* **enableNonSslPort**: bool: Specifies whether the non-ssl Redis server port (6379) is enabled.
* **hostName**: string (ReadOnly): Redis host name.
* **linkedServers**: [RedisLinkedServerList](#redislinkedserverlist) (ReadOnly): List of linked server Ids of a Redis cache.
* **port**: int (ReadOnly): Redis non-SSL port.
* **provisioningState**: string (ReadOnly): Redis instance provisioning status.
* **redisConfiguration**: [Dictionary<string,String>](#dictionarystringstring): All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
* **redisVersion**: string (ReadOnly): Redis version.
* **shardCount**: int: The number of shards to be created on a Premium Cluster Cache.
* **sku**: [Sku](#sku) (Required): SKU parameters supplied to the create Redis operation.
* **sslPort**: int (ReadOnly): Redis SSL port.
* **staticIP**: string: Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network.
* **subnetId**: string: The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
* **tenantSettings**: [Dictionary<string,String>](#dictionarystringstring): tenantSettings

## RedisAccessKeys
### Properties
* **primaryKey**: string (ReadOnly): The current primary key that clients can use to authenticate with Redis cache.
* **secondaryKey**: string (ReadOnly): The current secondary key that clients can use to authenticate with Redis cache.

## RedisLinkedServerList
### Properties
* **value**: [RedisLinkedServer](#redislinkedserver)[] (ReadOnly): List of linked server Ids of a Redis cache.

## RedisLinkedServer
### Properties
* **id**: string (ReadOnly): Linked server Id.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **capacity**: int (Required): The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
* **family**: 'C' | 'P' (Required): The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium). Possible values include: 'C', 'P'
* **name**: 'Basic' | 'Premium' | 'Standard' (Required): The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium). Possible values include: 'Basic', 'Standard', 'Premium'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RedisFirewallRuleProperties
### Properties
* **endIP**: string (Required): highest IP address included in the range
* **startIP**: string (Required): lowest IP address included in the range

## RedisLinkedServerCreateProperties
### Properties
* **linkedRedisCacheId**: string (Required): Fully qualified resourceId of the linked redis cache.
* **linkedRedisCacheLocation**: string (Required): Location of the linked redis cache.
* **provisioningState**: string (ReadOnly): Terminal state of the link between primary and secondary redis cache.
* **serverRole**: 'Primary' | 'Secondary' (Required): Role of the linked server. Possible values include: 'Primary', 'Secondary'

## ScheduleEntries
### Properties
* **scheduleEntries**: [ScheduleEntry](#scheduleentry)[] (Required): List of patch schedules for a Redis cache.

## ScheduleEntry
### Properties
* **dayOfWeek**: 'Everyday' | 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | 'Weekend' (Required): Day of the week when a cache can be patched. Possible values include: 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Everyday', 'Weekend'
* **maintenanceWindow**: string: ISO8601 timespan specifying how much time cache patching can take.
* **startHourUtc**: int (Required): Start hour after which cache patching can start.

