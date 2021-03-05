# Microsoft.CustomProviders @ 2018-09-01-preview

## Resource Microsoft.CustomProviders/associations@2018-09-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AssociationProperties
* **type**: 'Microsoft.CustomProviders/associations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomProviders/resourceProviders@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomRPManifestProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.CustomProviders/resourceProviders' (ReadOnly, DeployTimeConstant)

## AssociationProperties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **targetResourceId**: string

## CustomRPManifestProperties
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

