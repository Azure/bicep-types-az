# Microsoft.Cache @ 2016-04-01

## Microsoft.Cache/Redis
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisCreateProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Cache/Redis' (ReadOnly, DeployTimeConstant)

## RedisCreateProperties
### Properties
* **accessKeys**: RedisAccessKeys (ReadOnly)
* **enableNonSslPort**: bool
* **hostName**: string (ReadOnly)
* **port**: int (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **redisConfiguration**: Dictionary<string,String>
* **redisVersion**: string (ReadOnly)
* **shardCount**: int
* **sku**: Sku (Required)
* **sslPort**: int (ReadOnly)
* **staticIP**: string
* **subnetId**: string
* **tenantSettings**: Dictionary<string,String>

## RedisAccessKeys
### Properties
* **primaryKey**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **capacity**: int (Required)
* **family**: 'C' | 'P' (Required)
* **name**: 'Basic' | 'Premium' | 'Standard' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Cache/Redis/firewallRules
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisFirewallRuleProperties (Required)
* **type**: 'Microsoft.Cache/Redis/firewallRules' (ReadOnly, DeployTimeConstant)

## RedisFirewallRuleProperties
### Properties
* **endIP**: string (Required)
* **startIP**: string (Required)

## Microsoft.Cache/Redis/patchSchedules
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduleEntries (Required)
* **type**: 'Microsoft.Cache/Redis/patchSchedules' (ReadOnly, DeployTimeConstant)

## ScheduleEntries
### Properties
* **scheduleEntries**: ScheduleEntry[] (Required)

## ScheduleEntry
### Properties
* **dayOfWeek**: 'Everyday' | 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | 'Weekend' (Required)
* **maintenanceWindow**: string
* **startHourUtc**: int (Required)

