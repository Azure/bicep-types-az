# Microsoft.Cache @ 2020-06-01

## Resource Microsoft.Cache/redis@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisCreateProperties (Required)
* **tags**: RedisCreateParametersTags
* **type**: 'Microsoft.Cache/redis' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Cache/redis/firewallRules@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisFirewallRuleProperties (Required)
* **type**: 'Microsoft.Cache/redis/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/redis/linkedServers@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisLinkedServerCreateProperties (Required)
* **type**: 'Microsoft.Cache/redis/linkedServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/redis/patchSchedules@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ScheduleEntries (Required)
* **type**: 'Microsoft.Cache/redis/patchSchedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Cache/redis/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Cache/redis/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## RedisCreateProperties
### Properties
* **accessKeys**: RedisAccessKeys (ReadOnly)
* **enableNonSslPort**: bool
* **hostName**: string (ReadOnly)
* **instances**: RedisInstanceDetails[] (ReadOnly)
* **linkedServers**: RedisLinkedServer[] (ReadOnly)
* **minimumTlsVersion**: '1.0' | '1.1' | '1.2'
* **port**: int (ReadOnly)
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Disabled' | 'Failed' | 'Linking' | 'Provisioning' | 'RecoveringScaleFailure' | 'Scaling' | 'Succeeded' | 'Unlinking' | 'Unprovisioning' | 'Updating' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **redisConfiguration**: RedisCommonPropertiesRedisConfiguration
* **redisVersion**: string (ReadOnly)
* **replicasPerMaster**: int
* **shardCount**: int
* **sku**: Sku (Required)
* **sslPort**: int (ReadOnly)
* **staticIP**: string
* **subnetId**: string
* **tenantSettings**: RedisCommonPropertiesTenantSettings

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

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint (ReadOnly)
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (ReadOnly)
* **status**: 'Approved' | 'Pending' | 'Rejected' (ReadOnly)

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
* **provisioningState**: string (ReadOnly)

## ScheduleEntries
### Properties
* **scheduleEntries**: ScheduleEntry[] (Required)

## ScheduleEntry
### Properties
* **maintenanceWindow**: any
* **startHourUtc**: int (Required)

