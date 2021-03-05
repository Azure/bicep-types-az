# Microsoft.Cache @ 2017-02-01

## Resource Microsoft.Cache/Redis@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisCreateProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Cache/Redis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/Redis/firewallRules@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisFirewallRuleProperties (Required)
* **type**: 'Microsoft.Cache/Redis/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/Redis/linkedServers@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisLinkedServerCreateProperties (Required)
* **type**: 'Microsoft.Cache/Redis/linkedServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/Redis/patchSchedules@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduleEntries (Required)
* **type**: 'Microsoft.Cache/Redis/patchSchedules' (ReadOnly, DeployTimeConstant)

## RedisCreateProperties
### Properties
* **accessKeys**: RedisAccessKeys (ReadOnly)
* **enableNonSslPort**: bool
* **hostName**: string (ReadOnly)
* **linkedServers**: RedisLinkedServerList (ReadOnly)
* **port**: int (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **redisConfiguration**: RedisPropertiesRedisConfiguration
* **redisVersion**: string (ReadOnly)
* **shardCount**: int
* **sku**: Sku (Required)
* **sslPort**: int (ReadOnly)
* **staticIP**: string
* **subnetId**: string
* **tenantSettings**: RedisPropertiesTenantSettings

## RedisAccessKeys
### Properties
* **primaryKey**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

## RedisLinkedServerList
### Properties
* **value**: RedisLinkedServer[] (ReadOnly)

## RedisLinkedServer
### Properties
* **id**: string (ReadOnly)

## RedisPropertiesRedisConfiguration
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **capacity**: int (Required)
* **family**: 'C' | 'P' (Required)
* **name**: 'Basic' | 'Premium' | 'Standard' (Required)

## RedisPropertiesTenantSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RedisFirewallRuleProperties
### Properties
* **endIP**: string (Required)
* **startIP**: string (Required)

## RedisLinkedServerCreateProperties
### Properties
* **linkedRedisCacheId**: string (Required)
* **linkedRedisCacheLocation**: string (Required)
* **provisioningState**: string (ReadOnly)

## ScheduleEntries
### Properties
* **scheduleEntries**: ScheduleEntry[] (Required)

## ScheduleEntry
### Properties
* **maintenanceWindow**: any
* **startHourUtc**: int (Required)

