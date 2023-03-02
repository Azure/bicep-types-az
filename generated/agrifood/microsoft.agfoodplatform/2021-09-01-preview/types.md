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
* **additionalApiProperties**: [ExtensionInstallationRequestAdditionalApiProperties](#extensioninstallationrequestadditionalapiproperties) (WriteOnly): Additional Api Properties.
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): The ETag value to implement optimistic concurrency.
* **extensionVersion**: string (WriteOnly): Extension Version.
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

## Resource Microsoft.AgFoodPlatform/farmBeats/solutions@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): The ETag value to implement optimistic concurrency.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionProperties](#solutionproperties): Solution resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeats/solutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions@2021-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FarmBeatsExtensionProperties](#farmbeatsextensionproperties) (ReadOnly): FarmBeatsExtension properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AgFoodPlatform/farmBeatsSolutionDefinitions@2021-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FarmBeatsSolutionProperties](#farmbeatssolutionproperties) (ReadOnly): FarmBeatsSolution properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AgFoodPlatform/farmBeatsSolutionDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## ApiProperties
### Properties
* **apiFreshnessTimeInMinutes**: int: Interval in minutes for which the weather data for the api needs to be refreshed.

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

## ExtensionInstallationRequestAdditionalApiProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ApiProperties](#apiproperties)

## ExtensionProperties
### Properties
* **additionalApiProperties**: [ExtensionPropertiesAdditionalApiProperties](#extensionpropertiesadditionalapiproperties) (ReadOnly): Additional api properties.
* **extensionApiDocsLink**: string (ReadOnly): Extension api docs link.
* **extensionAuthLink**: string (ReadOnly): Extension auth link.
* **extensionCategory**: string (ReadOnly): Extension category. e.g. weather/sensor/satellite.
* **extensionId**: string (ReadOnly): Extension Id.
* **installedExtensionVersion**: string (ReadOnly): Installed extension version.

## ExtensionPropertiesAdditionalApiProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ApiProperties](#apiproperties)

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
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection) (ReadOnly): The private endpoint connection resource.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): FarmBeats instance provisioning state.
* **publicNetworkAccess**: 'Enabled' | 'Hybrid' | string: Property to allow or block public traffic for an Azure FarmBeats resource.
* **sensorIntegration**: [SensorIntegration](#sensorintegration): Sensor integration request model.

## FarmBeatsSolutionProperties
### Properties
* **accessFBApplicationId**: string (ReadOnly): Application id of the multi tenant application to be used by partner to access FarmBeats data.
* **accessFBApplicationName**: string (ReadOnly): Application name of the multi tenant application to be used by partner to access FarmBeatsData.
* **actionIds**: string[] (ReadOnly): List of ActionIds needed to make the SaaS multi tenant application access relevant fb data.
* **dataAccessScopes**: string[] (ReadOnly): Gets scope of the FarmBeats data access that's required for processing solution request to partner.
Example: For gdd they might need weatherScope and satelliteScope.
* **evaluatedOutputsDictionary**: [FarmBeatsSolutionPropertiesEvaluatedOutputsDictionary](#farmbeatssolutionpropertiesevaluatedoutputsdictionary) (ReadOnly): Gets example name: insight sample response Dictionary to capture all variations of computed results ingested by partner.
* **inputParametersValidationScopes**: [ResourceParameter](#resourceparameter)[] (ReadOnly): Gets scope of the FarmBeats related parameters that need to be validated in apiInputParameters.
Example: For if 'FarmHierarchy' is the input scope for 'WeatherScope' data access
For working with WeatherScope we need FarmHierarchy info implies 'farmerId', 'resourceId', 'resourceType' in request body.
* **marketplaceOfferDetails**: [MarketplaceOfferDetails](#marketplaceofferdetails)
* **openApiSpecsDictionary**: [FarmBeatsSolutionPropertiesOpenApiSpecsDictionary](#farmbeatssolutionpropertiesopenapispecsdictionary) (ReadOnly): Gets apiVersion: Swagger Document Dictionary to capture all api versions of swagger exposed by partner to farmbeats.
* **partnerId**: string (ReadOnly): Solution Partner Id.
* **partnerTenantId**: string (ReadOnly): Solution Partner Tenant Id.
* **roleId**: string (ReadOnly): Role Id of the SaaS multi tenant application to access relevant fb data.
* **roleName**: string (ReadOnly): Role Name of the SaaS multi tenant application to access relevant fb data.
* **saaSApplicationId**: string (ReadOnly): Application id of the SaaS multi tenant application.

## FarmBeatsSolutionPropertiesEvaluatedOutputsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: [SolutionEvaluatedOutput](#solutionevaluatedoutput)

## FarmBeatsSolutionPropertiesOpenApiSpecsDictionary
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity. The value must be an UUID.
* **tenantId**: string (ReadOnly): The tenant ID of resource. The value must be an UUID.
* **type**: 'SystemAssigned': The identity type.

## Insight
### Properties
* **createdDateTime**: string
* **description**: string
* **eTag**: string
* **farmerId**: string
* **id**: string
* **insightEndDateTime**: string
* **insightStartDateTime**: string
* **measures**: [InsightMeasures](#insightmeasures): Dictionary of <Measure>
* **modelId**: string
* **modelVersion**: string
* **modifiedDateTime**: string
* **name**: string
* **properties**: [InsightProperties](#insightproperties): Dictionary of <any>
* **resourceId**: string
* **resourceType**: string
* **status**: string

## InsightAttachment
### Properties
* **createdDateTime**: string
* **description**: string
* **eTag**: string
* **farmerId**: string
* **fileLink**: string
* **id**: string
* **insightId**: string
* **modelId**: string
* **modifiedDateTime**: string
* **name**: string
* **originalFileName**: string
* **resourceId**: string
* **resourceType**: string
* **status**: string

## InsightMeasures
### Properties
### Additional Properties
* **Additional Properties Type**: [Measure](#measure)

## InsightProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## MarketplaceOfferDetails
### Properties
* **publisherId**: string
* **saasOfferId**: string

## Measure
### Properties
* **unit**: string
* **value**: int

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

## ResourceParameter
### Properties
* **resourceIdName**: string
* **resourceType**: string

## SensorIntegration
### Properties
* **enabled**: string: Sensor integration enable state. Allowed values are True, None
* **provisioningInfo**: [ErrorResponse](#errorresponse): Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Sensor integration instance provisioning state.

## SolutionEvaluatedOutput
### Properties
* **insightAttachmentResponse**: [InsightAttachment](#insightattachment)
* **insightResponse**: [Insight](#insight)

## SolutionProperties
### Properties
* **marketplacePublisherId**: string (Required): SaaS application Publisher Id.
* **offerId**: string (Required): SaaS application Offer Id.
* **partnerId**: string (ReadOnly): Partner Id of the Solution.
* **planId**: string (Required): SaaS application Plan Id.
* **saasSubscriptionId**: string (Required): SaaS subscriptionId of the installed SaaS application.
* **saasSubscriptionName**: string (Required): SaaS subscription name of the installed SaaS application.
* **solutionId**: string (ReadOnly): Solution Id.
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

