# Microsoft.Cache @ 2019-07-01

## Resource Microsoft.Cache/Redis@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisCreateProperties (Required)
* **tags**: Dictionary<string,String>
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
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduleEntries (Required)
* **type**: 'Microsoft.Cache/Redis/patchSchedules' (ReadOnly, DeployTimeConstant)

## RedisCreateProperties
### Properties
* **accessKeys**: RedisAccessKeys (ReadOnly)
* **enableNonSslPort**: bool
* **hostName**: string (ReadOnly)
* **instances**: RedisInstanceDetails[] (ReadOnly)
* **linkedServers**: RedisLinkedServer[] (ReadOnly)
* **minimumTlsVersion**: '1.0' | '1.1' | '1.2'
* **port**: int (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Disabled' | 'Failed' | 'Linking' | 'Provisioning' | 'RecoveringScaleFailure' | 'Scaling' | 'Succeeded' | 'Unlinking' | 'Unprovisioning' | 'Updating' (ReadOnly)
* **redisConfiguration**: Dictionary<string,String>
* **redisVersion**: string (ReadOnly)
* **replicasPerMaster**: int
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

## RedisInstanceDetails
### Properties
* **isMaster**: bool (ReadOnly)
* **nonSslPort**: int (ReadOnly)
* **shardId**: int (ReadOnly)
* **sslPort**: int (ReadOnly)
* **zone**: string (ReadOnly)

## RedisLinkedServer
### Properties
* **id**: string (ReadOnly)

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
* **scheduleEntries**: ScheduleEntry[] (Required)

## ScheduleEntry
### Properties
* **dayOfWeek**: 'Everyday' | 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | 'Weekend' (Required)
* **maintenanceWindow**: string
* **startHourUtc**: int (Required)

