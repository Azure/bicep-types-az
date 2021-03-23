# Microsoft.Cache @ 2017-02-01

## Resource Microsoft.Cache/Redis@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RedisCreateProperties](#rediscreateproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Cache/Redis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/Redis/firewallRules@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RedisFirewallRuleProperties](#redisfirewallruleproperties) (Required)
* **type**: 'Microsoft.Cache/Redis/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/Redis/linkedServers@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RedisLinkedServerCreateProperties](#redislinkedservercreateproperties) (Required)
* **type**: 'Microsoft.Cache/Redis/linkedServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/Redis/patchSchedules@2017-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ScheduleEntries](#scheduleentries) (Required)
* **type**: 'Microsoft.Cache/Redis/patchSchedules' (ReadOnly, DeployTimeConstant)

## RedisCreateProperties
### Properties
* **accessKeys**: [RedisAccessKeys](#redisaccesskeys) (ReadOnly)
* **enableNonSslPort**: bool
* **hostName**: string (ReadOnly)
* **linkedServers**: [RedisLinkedServerList](#redislinkedserverlist) (ReadOnly)
* **port**: int (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **redisConfiguration**: [RedisPropertiesRedisConfiguration](#redispropertiesredisconfiguration)
* **redisVersion**: string (ReadOnly)
* **shardCount**: int
* **sku**: [Sku](#sku) (Required)
* **sslPort**: int (ReadOnly)
* **staticIP**: string
* **subnetId**: string
* **tenantSettings**: [RedisPropertiesTenantSettings](#redispropertiestenantsettings)

## RedisAccessKeys
### Properties
* **primaryKey**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

## RedisLinkedServerList
### Properties
* **value**: [RedisLinkedServer](#redislinkedserver)[] (ReadOnly)

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
* **serverRole**: 'Primary' | 'Secondary' (Required)

## ScheduleEntries
### Properties
* **scheduleEntries**: [ScheduleEntry](#scheduleentry)[] (Required)

## ScheduleEntry
### Properties
* **dayOfWeek**: 'Everyday' | 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | 'Weekend' (Required)
* **maintenanceWindow**: string
* **startHourUtc**: int (Required)

