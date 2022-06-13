# Microsoft.HealthBot @ 2021-06-10

## Resource Microsoft.HealthBot/healthBots@2021-06-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the Azure Health Bot.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HealthBotProperties](#healthbotproperties): The set of properties specific to Azure Health Bot resource.
* **sku**: [Sku](#sku) (Required): SKU of the Azure Health Bot.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HealthBot/healthBots' (ReadOnly, DeployTimeConstant): The resource type

## HealthBotProperties
### Properties
* **botManagementPortalLink**: string (ReadOnly): The link.
* **provisioningState**: string (ReadOnly): The provisioning state of the Azure Health Bot resource.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot
* **userAssignedIdentities**: [UserAssignedIdentityMap](#userassignedidentitymap): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## Sku
### Properties
* **name**: 'C0' | 'F0' | 'S1' (Required): The name of the Azure Health Bot SKU

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

