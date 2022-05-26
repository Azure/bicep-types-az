# Microsoft.HealthBot @ 2021-08-24

## Resource Microsoft.HealthBot/healthBots@2021-08-24
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-24' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HealthBotProperties](#healthbotproperties): The properties of a Azure Health Bot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
* **sku**: [Sku](#sku) (Required): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HealthBot/healthBots' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot
* **userAssignedIdentities**: [UserAssignedIdentityMap](#userassignedidentitymap): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## UserAssignedIdentityMap
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of user assigned identity.
* **principalId**: string (ReadOnly): The principal ID of user assigned identity.

## HealthBotProperties
### Properties
* **botManagementPortalLink**: string (ReadOnly): The link.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Properties of the key vault.
* **provisioningState**: string (ReadOnly): The provisioning state of the Azure Health Bot resource.

## KeyVaultProperties
### Properties
* **keyName**: string (Required): The name of the key vault key.
* **keyVaultUri**: string (Required): The Uri of the key vault.
* **keyVersion**: string: The version of the key vault key.
* **userIdentity**: string: The user assigned identity (ARM resource id) that has access to the key.

## Sku
### Properties
* **name**: 'C0' | 'F0' | 'S1' (Required): The name of the Azure Health Bot SKU

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that creates/modifies resources
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that creates/modifies resources

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

