# Microsoft.CustomProviders @ 2018-09-01-preview

## Resource Microsoft.CustomProviders/associations@2018-09-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:8_properties](#schemas8properties)
* **type**: 'Microsoft.CustomProviders/associations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomProviders/resourceProviders@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:5_properties](#schemas5properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.CustomProviders/resourceProviders' (ReadOnly, DeployTimeConstant)

## schemas:8_properties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **targetResourceId**: string

## schemas:5_properties
### Properties
* **actions**: [CustomRPActionRouteDefinition](#customrpactionroutedefinition)[]
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **resourceTypes**: [CustomRPResourceTypeRouteDefinition](#customrpresourcetyperoutedefinition)[]
* **validations**: [CustomRPValidations](#customrpvalidations)[]

## CustomRPActionRouteDefinition
### Properties
* **endpoint**: string (Required)
* **name**: string (Required)
* **routingType**: 'Proxy'

## CustomRPResourceTypeRouteDefinition
### Properties
* **endpoint**: string (Required)
* **name**: string (Required)
* **routingType**: 'Proxy,Cache' | 'Proxy'

## CustomRPValidations
### Properties
* **specification**: string (Required)
* **validationType**: 'Swagger'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

