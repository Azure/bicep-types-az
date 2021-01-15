# Microsoft.Solutions @ 2018-06-01

## Resource Microsoft.Solutions/applications@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: string (Required)
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: Plan
* **properties**: ApplicationProperties (Required)
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Solutions/applications' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## Plan
### Properties
* **name**: string (Required)
* **product**: string (Required)
* **promotionCode**: string
* **publisher**: string (Required)
* **version**: string (Required)

## ApplicationProperties
### Properties
* **applicationDefinitionId**: string
* **managedResourceGroupId**: string (Required)
* **outputs**: any (ReadOnly)
* **parameters**: any
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **model**: string
* **name**: string (Required)
* **size**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

