# Microsoft.Cache @ 2015-08-01

## Resource Microsoft.Cache/Redis@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RedisProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Cache/Redis' (ReadOnly, DeployTimeConstant)

## RedisProperties
### Properties
* **enableNonSslPort**: bool
* **redisConfiguration**: RedisPropertiesRedisConfiguration
* **redisVersion**: string
* **shardCount**: int
* **sku**: Sku (Required)
* **staticIP**: string
* **subnet**: string
* **tenantSettings**: RedisPropertiesTenantSettings
* **virtualNetwork**: string

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

