# Microsoft.Cache @ 2016-04-01

## Resource Microsoft.Cache/Redis@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RedisCreateProperties](#rediscreateproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Cache/Redis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/Redis/firewallRules@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RedisFirewallRuleProperties](#redisfirewallruleproperties) (Required)
* **type**: 'Microsoft.Cache/Redis/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/Redis/patchSchedules@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ScheduleEntries](#scheduleentries) (Required)
* **type**: 'Microsoft.Cache/Redis/patchSchedules' (ReadOnly, DeployTimeConstant)

## RedisCreateProperties
### Properties
* **accessKeys**: [RedisAccessKeys](#redisaccesskeys) (ReadOnly)
* **enableNonSslPort**: bool
* **hostName**: string (ReadOnly)
* **port**: int (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **redisConfiguration**: [Dictionary<string,String>](#dictionarystringstring)
* **redisVersion**: string (ReadOnly)
* **shardCount**: int
* **sku**: [Sku](#sku) (Required)
* **sslPort**: int (ReadOnly)
* **staticIP**: string
* **subnetId**: string
* **tenantSettings**: [Dictionary<string,String>](#dictionarystringstring)

## RedisAccessKeys
### Properties
* **primaryKey**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **capacity**: int (Required)
* **family**: 'C' | 'P' (Required)
* **name**: 'Basic' | 'Premium' | 'Standard' (Required)

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
* **endIP**: string (Required)
* **startIP**: string (Required)

## ScheduleEntries
### Properties
* **scheduleEntries**: [ScheduleEntry](#scheduleentry)[] (Required)

## ScheduleEntry
### Properties
* **dayOfWeek**: 'Everyday' | 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | 'Weekend' (Required)
* **maintenanceWindow**: string
* **startHourUtc**: int (Required)

