# Microsoft.Cache @ 2015-08-01

## Resource Microsoft.Cache/Redis@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RedisProperties](#redisproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Cache/Redis' (ReadOnly, DeployTimeConstant)

## RedisProperties
### Properties
* **enableNonSslPort**: bool
* **hostName**: string (ReadOnly)
* **port**: int (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **redisConfiguration**: [Dictionary<string,String>](#dictionarystringstring)
* **redisVersion**: string
* **shardCount**: int
* **sku**: [Sku](#sku) (Required)
* **sslPort**: int (ReadOnly)
* **staticIP**: string
* **subnet**: string
* **tenantSettings**: [Dictionary<string,String>](#dictionarystringstring)
* **virtualNetwork**: string

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

