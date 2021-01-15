# Microsoft.Search @ 2015-08-19

## Resource Microsoft.Search/searchServices@2015-08-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-19' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SearchServiceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant)

## Function listAdminKeys (Microsoft.Search/searchServices@2015-08-19)
* **Resource**: Microsoft.Search/searchServices
* **ApiVersion**: 2015-08-19
* **Output**: AdminKeyResult

## Function listQueryKeys (Microsoft.Search/searchServices@2015-08-19)
* **Resource**: Microsoft.Search/searchServices
* **ApiVersion**: 2015-08-19
* **Output**: ListQueryKeysResult

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## SearchServiceProperties
### Properties
* **hostingMode**: 'default' | 'highDensity'
* **partitionCount**: int
* **provisioningState**: 'failed' | 'provisioning' | 'succeeded' (ReadOnly)
* **replicaCount**: int
* **status**: 'degraded' | 'deleting' | 'disabled' | 'error' | 'provisioning' | 'running' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## Sku
### Properties
* **name**: 'basic' | 'free' | 'standard' | 'standard2' | 'standard3' | 'storage_optimized_l1' | 'storage_optimized_l2'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AdminKeyResult
### Properties
* **primaryKey**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

## ListQueryKeysResult
### Properties
* **value**: QueryKey[] (ReadOnly)

## QueryKey
### Properties
* **key**: string (ReadOnly)
* **name**: string (ReadOnly)

