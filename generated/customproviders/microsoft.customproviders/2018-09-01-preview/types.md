# Microsoft.CustomProviders @ 2018-09-01-preview

## Resource Microsoft.CustomProviders/associations@2018-09-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:8_properties](#schemas8properties): The properties of the association.
* **type**: 'Microsoft.CustomProviders/associations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomProviders/resourceProviders@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:5_properties](#schemas5properties): The manifest for the custom resource provider
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.CustomProviders/resourceProviders' (ReadOnly, DeployTimeConstant): The resource type

## schemas:8_properties
### Properties
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly): The provisioning state of the association. Possible values include: 'Accepted', 'Deleting', 'Running', 'Succeeded', 'Failed'
* **targetResourceId**: string: The REST resource instance of the target resource for this association.

## schemas:5_properties
### Properties
* **actions**: [CustomRPActionRouteDefinition](#customrpactionroutedefinition)[]: A list of actions that the custom resource provider implements.
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly): The provisioning state of the resource provider. Possible values include: 'Accepted', 'Deleting', 'Running', 'Succeeded', 'Failed'
* **resourceTypes**: [CustomRPResourceTypeRouteDefinition](#customrpresourcetyperoutedefinition)[]: A list of resource types that the custom resource provider implements.
* **validations**: [CustomRPValidations](#customrpvalidations)[]: A list of validations to run on the custom resource provider's requests.

## CustomRPActionRouteDefinition
### Properties
* **endpoint**: string (Required): The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
* **name**: string (Required): The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')
* **routingType**: 'Proxy': The routing types that are supported for action requests. Possible values include: 'Proxy'

## CustomRPResourceTypeRouteDefinition
### Properties
* **endpoint**: string (Required): The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
* **name**: string (Required): The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')
* **routingType**: 'Proxy,Cache' | 'Proxy': The routing types that are supported for resource requests. Possible values include: 'Proxy', 'Proxy,Cache'

## CustomRPValidations
### Properties
* **specification**: string (Required): A link to the validation specification. The specification must be hosted on raw.githubusercontent.com.
* **validationType**: 'Swagger': The type of validation to run against a matching request. Possible values include: 'Swagger'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

