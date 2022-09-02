# Microsoft.AgFoodPlatform @ 2021-09-01-preview

## Resource Microsoft.AgFoodPlatform/farmBeats@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FarmBeatsProperties](#farmbeatsproperties): FarmBeats ARM Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeats/extensions@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): The ETag value to implement optimistic concurrency.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionProperties](#extensionproperties) (ReadOnly): Extension resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeats/privateLinkResources@2021-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions@2021-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FarmBeatsExtensionProperties](#farmbeatsextensionproperties) (ReadOnly): FarmBeatsExtension properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## DetailedInformation
### Properties
* **apiInputParameters**: string[]: List of apiInputParameters.
* **apiName**: string: ApiName available for the farmBeatsExtension.
* **customParameters**: string[]: List of customParameters.
* **platformParameters**: string[]: List of platformParameters.
* **unitsSupported**: [UnitSystemsInfo](#unitsystemsinfo): Unit systems info for the data provider.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ErrorResponse
### Properties
* **error**: [ErrorDetail](#errordetail): The error object.

## ExtensionProperties
### Properties
* **extensionApiDocsLink**: string (ReadOnly): Extension api docs link.
* **extensionAuthLink**: string (ReadOnly): Extension auth link.
* **extensionCategory**: string (ReadOnly): Extension category. e.g. weather/sensor/satellite.
* **extensionId**: string (ReadOnly): Extension Id.
* **installedExtensionVersion**: string (ReadOnly): Installed extension version.

## FarmBeatsExtensionProperties
### Properties
* **description**: string (ReadOnly): Textual description.
* **detailedInformation**: [DetailedInformation](#detailedinformation)[] (ReadOnly): Detailed information which shows summary of requested data.
Used in descriptive get extension metadata call.
Information for weather category per api included are apisSupported,
customParameters, PlatformParameters and Units supported.
* **extensionApiDocsLink**: string (ReadOnly): FarmBeatsExtension api docs link.
* **extensionAuthLink**: string (ReadOnly): FarmBeatsExtension auth link.
* **extensionCategory**: string (ReadOnly): Category of the extension. e.g. weather/sensor/satellite.
* **farmBeatsExtensionId**: string (ReadOnly): FarmBeatsExtension ID.
* **farmBeatsExtensionName**: string (ReadOnly): FarmBeatsExtension name.
* **farmBeatsExtensionVersion**: string (ReadOnly): FarmBeatsExtension version.
* **publisherId**: string (ReadOnly): Publisher ID.
* **targetResourceType**: string (ReadOnly): Target ResourceType of the farmBeatsExtension.

## FarmBeatsProperties
### Properties
* **instanceUri**: string (ReadOnly): Uri of the FarmBeats instance.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection) (ReadOnly): The Private Endpoint Connection resource.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): FarmBeats instance provisioning state.
* **publicNetworkAccess**: 'Enabled' | 'Hybrid' | string: Property to allow or block public traffic for an Azure FarmBeats resource.
* **sensorIntegration**: [SensorIntegration](#sensorintegration): Sensor integration request model.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource Private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## SensorIntegration
### Properties
* **enabled**: string: Sensor integration enable state. Allowed values are True, None
* **provisioningInfo**: [ErrorResponse](#errorresponse): Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Sensor integration instance provisioning state.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UnitSystemsInfo
### Properties
* **key**: string (Required): UnitSystem key sent as part of ProviderInput.
* **values**: string[] (Required): List of unit systems supported by this data provider.

