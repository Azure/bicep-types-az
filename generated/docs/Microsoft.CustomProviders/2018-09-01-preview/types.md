# Microsoft.CustomProviders @ 2018-09-01-preview

## Microsoft.CustomProviders/associations
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:8_properties
* **type**: 'Microsoft.CustomProviders/associations' (ReadOnly, DeployTimeConstant)

## schemas:8_properties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **targetResourceId**: string

## Microsoft.CustomProviders/resourceProviders
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:5_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.CustomProviders/resourceProviders' (ReadOnly, DeployTimeConstant)

## schemas:5_properties
### Properties
* **actions**: CustomRPActionRouteDefinition[]
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **resourceTypes**: CustomRPResourceTypeRouteDefinition[]
* **validations**: CustomRPValidations[]

## CustomRPActionRouteDefinition
### Properties
* **endpoint**: string (Required)
* **name**: string (Required)
* **routingType**: 'Proxy'

## CustomRPResourceTypeRouteDefinition
### Properties
* **endpoint**: string (Required)
* **name**: string (Required)
* **routingType**: 'Proxy' | 'Proxy,Cache'

## CustomRPValidations
### Properties
* **specification**: string (Required)
* **validationType**: 'Swagger'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

