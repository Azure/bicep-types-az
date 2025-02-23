# Microsoft.AgriculturePlatform @ 2024-06-01-preview

## Resource Microsoft.AgriculturePlatform/agriServices@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgriServiceResourceProperties](#agriserviceresourceproperties): The resource-specific properties for this resource.
* **sku**: [Sku](#sku): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AgriculturePlatform/agriServices' (ReadOnly, DeployTimeConstant): The resource type

## Function listAvailableSolutions (Microsoft.AgriculturePlatform/agriServices@2024-06-01-preview)
* **Resource**: Microsoft.AgriculturePlatform/agriServices
* **ApiVersion**: 2024-06-01-preview
* **Output**: [AvailableAgriSolutionListResult](#availableagrisolutionlistresult)

## AgriServiceConfig
### Properties
* **appServiceResourceId**: string {minLength: 2} (ReadOnly): App service resource Id.
* **cosmosDbResourceId**: string {minLength: 2} (ReadOnly): Cosmos Db resource Id.
* **instanceUri**: string {minLength: 2, maxLength: 256} (ReadOnly): Instance URI of the AgriService instance.
* **keyVaultResourceId**: string {minLength: 2} (ReadOnly): Key vault resource Id.
* **redisCacheResourceId**: string {minLength: 2} (ReadOnly): Redis cache resource Id.
* **storageAccountResourceId**: string {minLength: 2} (ReadOnly): Storage account resource Id.
* **version**: string {minLength: 2, maxLength: 256} (ReadOnly): Version of AgriService instance.

## AgriServiceResourceProperties
### Properties
* **config**: [AgriServiceConfig](#agriserviceconfig): Config of the AgriService instance.
* **dataConnectorCredentials**: [DataConnectorCredentialMap](#dataconnectorcredentialmap)[]: Data connector credentials of AgriService instance.
* **installedSolutions**: [InstalledSolutionMap](#installedsolutionmap)[]: AgriService installed solutions.
* **managedOnBehalfOfConfiguration**: [ManagedOnBehalfOfConfiguration](#managedonbehalfofconfiguration) (ReadOnly): Managed On Behalf Of Configuration.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## AvailableAgriSolutionListResult
### Properties
* **solutions**: [DataManagerForAgricultureSolution](#datamanagerforagriculturesolution)[] (Required): Agri solutions list.

## DataConnectorCredentialMap
### Properties
* **key**: string (Required): The key representing the credential.
* **value**: [DataConnectorCredentials](#dataconnectorcredentials) (Required): The data connector credential value.

## DataConnectorCredentials
### Properties
* **clientId**: string {minLength: 2}: Client Id associated with the provider, if type of credentials is OAuthClientCredentials.
* **keyName**: string {minLength: 2}: Name of the key vault key.
* **keyVaultUri**: string {minLength: 2}: Uri of the key vault
* **keyVersion**: string {minLength: 2}: Version of the key vault key.
* **kind**: 'ApiKeyAuthCredentials' | 'OAuthClientCredentials' | string: Type of credential.

## DataManagerForAgricultureSolution
### Properties
* **accessAzureDataManagerForAgricultureApplicationId**: string (Required): Entra application Id used to access azure data manager for agriculture instance.
* **accessAzureDataManagerForAgricultureApplicationName**: string (Required): Entra application name used to access azure data manager for agriculture instance.
* **dataAccessScopes**: string[] (Required): Data access scopes.
* **isValidateInput**: bool (Required): Whether solution inference will validate input.
* **marketPlaceOfferDetails**: [MarketPlaceOfferDetails](#marketplaceofferdetails) (Required): Marketplace offer details.
* **partnerId**: string (Required): Partner Id.
* **partnerTenantId**: string (Required): Partner tenant Id.
* **saasApplicationId**: string (Required): Saas application Id.
* **solutionId**: string (Required): Solution Id.

## InstalledSolutionMap
### Properties
* **key**: string (Required): The key representing the installed solution.
* **value**: [Solution](#solution) (Required): The installed solution value.

## ManagedOnBehalfOfConfiguration
### Properties
* **moboBrokerResources**: [MoboBrokerResource](#mobobrokerresource)[] (Required, ReadOnly): Associated MoboBrokerResources.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MarketPlaceOfferDetails
### Properties
* **publisherId**: string (Required): Publisher Id.
* **saasOfferId**: string (Required): Saas offer Id.

## MoboBrokerResource
### Properties
* **id**: string (Required, ReadOnly): The fully qualified resource ID of the MoboBroker resource.
Example: `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}`

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. E.g. P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## Solution
### Properties
* **applicationName**: string {minLength: 2}: Application name of the solution.
* **marketPlacePublisherId**: string {minLength: 2}: Marketplace publisher Id.
* **partnerId**: string {minLength: 2}: Partner Id.
* **planId**: string {minLength: 2}: Plan Id.
* **saasSubscriptionId**: string {minLength: 2}: Saas subscription Id.
* **saasSubscriptionName**: string {minLength: 2}: Saas subscription name.

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

