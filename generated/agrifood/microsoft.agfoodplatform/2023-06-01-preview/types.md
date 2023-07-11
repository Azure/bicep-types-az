# Microsoft.AgFoodPlatform @ 2023-06-01-preview

## Resource Microsoft.AgFoodPlatform/farmBeats@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataManagerForAgricultureProperties](#datamanagerforagricultureproperties): Data Manager For Agriculture ARM Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeats/dataConnectors@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): The ETag value to implement optimistic concurrency.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataConnectorProperties](#dataconnectorproperties) (Required): DataConnector Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats/dataConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeats/extensions@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **additionalApiProperties**: [ExtensionInstallationRequestAdditionalApiProperties](#extensioninstallationrequestadditionalapiproperties) (WriteOnly): Additional Api Properties.
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): The ETag value to implement optimistic concurrency.
* **extensionVersion**: string (WriteOnly): Extension Version.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionProperties](#extensionproperties) (ReadOnly): Extension resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeats/privateLinkResources@2023-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeats/solutions@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): The ETag value to implement optimistic concurrency.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionProperties](#solutionproperties): Solution resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats/solutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions@2023-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataManagerForAgricultureExtensionProperties](#datamanagerforagricultureextensionproperties) (ReadOnly): DataManagerForAgricultureExtension properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeatsSolutionDefinitions@2023-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataManagerForAgricultureSolutionProperties](#datamanagerforagriculturesolutionproperties) (ReadOnly): DataManagerForAgricultureSolution properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeatsSolutionDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## ApiProperties
### Properties
* **apiFreshnessTimeInMinutes**: int: Interval in minutes for which the weather data for the api needs to be refreshed.

## AuthCredentials
* **Discriminator**: kind

### Base Properties

### ApiKeyAuthCredentials
#### Properties
* **apiKey**: [KeyVaultProperties](#keyvaultproperties) (Required): Properties of the key vault.
* **kind**: 'ApiKeyAuthCredentials' (Required): Enum for different types of AuthCredentials supported.

### OAuthClientCredentials
#### Properties
* **clientId**: string (Required): ClientId associated with the provider.
* **clientSecret**: [KeyVaultProperties](#keyvaultproperties) (Required): Properties of the key vault.
* **kind**: 'OAuthClientCredentials' (Required): Enum for different types of AuthCredentials supported.


## DataConnectorProperties
### Properties
* **credentials**: [AuthCredentials](#authcredentials) (Required): AuthCredentials abstract base class for Auth Purpose.

## DataManagerForAgricultureExtensionProperties
### Properties
* **description**: string (ReadOnly): Textual description.
* **detailedInformation**: [DetailedInformation](#detailedinformation)[] (ReadOnly): Detailed information which shows summary of requested data.
Used in descriptive get extension metadata call.
Information for weather category per api included are apisSupported,
customParameters, PlatformParameters and Units supported.
* **extensionApiDocsLink**: string (ReadOnly): Data Manager For Agriculture Extension api docs link.
* **extensionAuthLink**: string (ReadOnly): Data Manager For Agriculture Extension auth link.
* **extensionCategory**: string (ReadOnly): Category of the extension. e.g. weather/sensor/satellite.
* **farmBeatsExtensionId**: string (ReadOnly): Data Manager For Agriculture Extension ID.
* **farmBeatsExtensionName**: string (ReadOnly): Data Manager For Agriculture Extension name.
* **farmBeatsExtensionVersion**: string (ReadOnly): Data Manager For Agriculture Extension version.
* **publisherId**: string (ReadOnly): Publisher ID.
* **targetResourceType**: string (ReadOnly): Target ResourceType of the Data Manager For Agriculture Extension.

## DataManagerForAgricultureProperties
### Properties
* **instanceUri**: string (ReadOnly): Uri of the Data Manager For Agriculture instance.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Private endpoints.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Data Manager For Agriculture instance provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Property to allow or block public traffic for an Azure Data Manager For Agriculture resource.
* **sensorIntegration**: [SensorIntegration](#sensorintegration): Sensor integration request model.

## DataManagerForAgricultureSolutionProperties
### Properties
* **accessFBApplicationId**: string (ReadOnly): Application id of the multi tenant application to be used by partner to access Data Manager For Agriculture data.
* **accessFBApplicationName**: string (ReadOnly): Application name of the multi tenant application to be used by partner to access Data Manager For Agriculture Data.
* **actionIds**: string[] (ReadOnly): List of ActionIds needed to make the SaaS multi tenant application access relevant fb data.
* **dataAccessScopes**: string[] (ReadOnly): Gets scope of the Data manager For Agriculture data access that's required for processing solution request to partner.
Example: For gdd they might need weatherScope and satelliteScope.
* **marketplaceOfferDetails**: [MarketplaceOfferDetails](#marketplaceofferdetails)
* **openApiSpecsDictionary**: [DataManagerForAgricultureSolutionPropertiesOpenApiSpecsDictionary](#datamanagerforagriculturesolutionpropertiesopenapispecsdictionary) (ReadOnly): Gets api-version Swagger Document Dictionary to capture all api-versions of swagger exposed by partner to Data Manager For Agriculture.
* **partnerId**: string (ReadOnly): Solution Partner Id.
* **partnerTenantId**: string (ReadOnly): Solution Partner Tenant Id.
* **roleId**: string (ReadOnly): Role Id of the SaaS multi tenant application to access relevant fb data.
* **roleName**: string (ReadOnly): Role Name of the SaaS multi tenant application to access relevant fb data.
* **saaSApplicationId**: string (ReadOnly): Application id of the SaaS multi tenant application.

## DataManagerForAgricultureSolutionPropertiesOpenApiSpecsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DetailedInformation
### Properties
* **apiDefaultInputParameters**: string[]: List of defaultParameters.
* **apiDocsLink**: string: Extension provider's API documentation link.
* **apiInputParameters**: string[]: List of apiInputParameters.
* **apiName**: string: ApiName available for the Data Manager For Agriculture Extension.
* **apiType**: string: Type of Api in Extension.
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

## ExtensionInstallationRequestAdditionalApiProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ApiProperties](#apiproperties)

## ExtensionProperties
### Properties
* **additionalApiProperties**: [ExtensionPropertiesAdditionalApiProperties](#extensionpropertiesadditionalapiproperties) (ReadOnly): Additional Api Properties.
* **extensionApiDocsLink**: string (ReadOnly): Extension api docs link.
* **extensionAuthLink**: string (ReadOnly): Extension auth link.
* **extensionCategory**: string (ReadOnly): Extension category. e.g. weather/sensor/satellite.
* **extensionId**: string (ReadOnly): Extension Id.
* **installedExtensionVersion**: string (ReadOnly): Installed extension version.

## ExtensionPropertiesAdditionalApiProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ApiProperties](#apiproperties)

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity. The value must be an UUID.
* **tenantId**: string (ReadOnly): The tenant ID of resource. The value must be an UUID.
* **type**: 'SystemAssigned': The identity type.

## KeyVaultProperties
### Properties
* **keyName**: string (Required): Name of Key Vault key.
* **keyVaultUri**: string (Required): Uri of the key vault.
* **keyVersion**: string (Required): Version of Key Vault key.

## MarketplaceOfferDetails
### Properties
* **publisherId**: string
* **saasOfferId**: string

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## SensorIntegration
### Properties
* **enabled**: string: Sensor integration enable state.
* **provisioningInfo**: [ErrorResponse](#errorresponse): Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): Sensor integration instance provisioning state.

## SolutionProperties
### Properties
* **marketplacePublisherId**: string (Required): SaaS application Marketplace Publisher Id.
* **offerId**: string (Required): SaaS application Offer Id.
* **partnerId**: string (ReadOnly): Partner Id of the Solution.
* **planId**: string (Required): SaaS application Plan Id.
* **saasSubscriptionId**: string (Required): SaaS subscriptionId of the installed SaaS application.
* **saasSubscriptionName**: string (Required): SaaS subscription name of the installed SaaS application.
* **termId**: string (Required): SaaS application Term Id.
### Additional Properties
* **Additional Properties Type**: any

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

