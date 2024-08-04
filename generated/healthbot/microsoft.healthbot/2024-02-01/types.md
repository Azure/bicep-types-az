# Microsoft.HealthBot @ 2024-02-01

## Resource Microsoft.HealthBot/healthBots@2024-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the Azure Health Bot.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HealthBotProperties](#healthbotproperties): The set of properties specific to Azure Health Bot resource.
* **sku**: [Sku](#sku) (Required): SKU of the Azure Health Bot.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HealthBot/healthBots' (ReadOnly, DeployTimeConstant): The resource type

## Function listSecrets (Microsoft.HealthBot/healthBots@2024-02-01)
* **Resource**: Microsoft.HealthBot/healthBots
* **ApiVersion**: 2024-02-01
* **Output**: [HealthBotKeysResponse](#healthbotkeysresponse)

## HealthBotKey
### Properties
* **keyName**: string: The name of the key.
* **value**: string {sensitive}: The value of the key.

## HealthBotKeysResponse
### Properties
* **secrets**: [HealthBotKey](#healthbotkey)[]: Array of Azure Health Bot Secrets.

## HealthBotProperties
### Properties
* **botManagementPortalLink**: string (ReadOnly): The link.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): KeyVault properties for the resource encryption.
* **provisioningState**: string (ReadOnly): The provisioning state of the Azure Health Bot resource.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot
* **userAssignedIdentities**: [UserAssignedIdentityMap](#userassignedidentitymap): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## KeyVaultProperties
### Properties
* **keyName**: string (Required): The name of the key vault key.
* **keyVaultUri**: string (Required): The Uri of the key vault.
* **keyVersion**: string: The version of the key vault key.
* **userIdentity**: string: The user assigned identity (ARM resource id) that has access to the key.

## Sku
### Properties
* **name**: 'C0' | 'C1' | 'F0' | 'PES' | 'S1' (Required): The name of the Azure Health Bot SKU

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of user assigned identity.
* **principalId**: string (ReadOnly): The principal ID of user assigned identity.

## UserAssignedIdentityMap
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

