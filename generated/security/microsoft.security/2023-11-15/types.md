# Microsoft.Security @ 2023-11-15

## Resource Microsoft.Security/apiCollections@2023-11-15
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-11-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 256, pattern: "^[^*#&+:<>?]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ApiCollectionProperties](#apicollectionproperties) (ReadOnly): Describes the properties of an API collection.
* **type**: 'Microsoft.Security/apiCollections' (ReadOnly, DeployTimeConstant): The resource type

## ApiCollectionProperties
### Properties
* **baseUrl**: string (ReadOnly): The base URI for this API collection. All endpoints of this API collection extend this base URI.
* **discoveredVia**: string (ReadOnly): The resource Id of the resource from where this API collection was discovered.
* **displayName**: string (ReadOnly): The display name of the API collection.
* **numberOfApiEndpoints**: int (ReadOnly): The number of API endpoints discovered in this API collection.
* **numberOfApiEndpointsWithSensitiveDataExposed**: int (ReadOnly): The number of API endpoints in this API collection which are exposing sensitive data in their requests and/or responses.
* **numberOfExternalApiEndpoints**: int (ReadOnly): The number of API endpoints in this API collection for which API traffic from the internet was observed.
* **numberOfInactiveApiEndpoints**: int (ReadOnly): The number of API endpoints in this API collection that have not received any API traffic in the last 30 days.
* **numberOfUnauthenticatedApiEndpoints**: int (ReadOnly): The number of API endpoints in this API collection that are unauthenticated.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Gets the provisioning state of the API collection.
* **sensitivityLabel**: string (ReadOnly): The highest priority sensitivity label from Microsoft Purview in this API collection.

