# Microsoft.Cache @ 2019-07-01

## Resource Microsoft.Cache/Redis@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisCreateProperties (Required)
* **tags**: RedisCreateParametersTags
* **type**: 'Microsoft.Cache/Redis' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Cache/Redis/firewallRules@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisFirewallRuleProperties (Required)
* **type**: 'Microsoft.Cache/Redis/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/Redis/linkedServers@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisLinkedServerCreateProperties (Required)
* **type**: 'Microsoft.Cache/Redis/linkedServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/Redis/patchSchedules@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ScheduleEntries (Required)
* **type**: 'Microsoft.Cache/Redis/patchSchedules' (ReadOnly, DeployTimeConstant)

## RedisCreateProperties
### Properties
* **enableNonSslPort**: bool
* **minimumTlsVersion**: '1.0' | '1.1' | '1.2'
* **redisConfiguration**: RedisCommonPropertiesRedisConfiguration
* **replicasPerMaster**: int
* **shardCount**: int
* **sku**: Sku (Required)
* **staticIP**: string
* **subnetId**: string
* **tenantSettings**: RedisCommonPropertiesTenantSettings

## RedisCommonPropertiesRedisConfiguration
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **capacity**: int (Required)
* **family**: 'C' | 'P' (Required)
* **name**: 'Basic' | 'Premium' | 'Standard' (Required)

## RedisCommonPropertiesTenantSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RedisCreateParametersTags
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

## ScheduleEntries
### Properties
* **scheduleEntries**: ScheduleEntry[] (Required)

## ScheduleEntry
### Properties
* **maintenanceWindow**: any
* **startHourUtc**: int (Required)

