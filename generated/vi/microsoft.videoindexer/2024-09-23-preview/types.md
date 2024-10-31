# Microsoft.VideoIndexer @ 2024-09-23-preview

## Resource Microsoft.VideoIndexer/accounts@2024-09-23-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 50, pattern: "^[A-Za-z0-9-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AccountPropertiesForPutRequest](#accountpropertiesforputrequest): List of account properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.VideoIndexer/accounts' (ReadOnly, DeployTimeConstant): The resource type

## AccountPropertiesForPutRequest
### Properties
* **accountId**: string: The account's data-plane ID. This can be set only when connecting an existing classic account
* **accountName**: string (ReadOnly): The account's name
* **openAiServices**: [OpenAiServicesForPutRequest](#openaiservicesforputrequest): The openAi services details
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Gets the status of the account at the time the operation was called.
* **storageServices**: [StorageServicesForPutRequest](#storageservicesforputrequest): The storage services details
* **tenantId**: string (ReadOnly): The account's tenant id
* **totalMinutesIndexed**: int (ReadOnly): An integer representing the total minutes that have been indexed on the account
* **totalSecondsIndexed**: int (ReadOnly): An integer representing the total seconds that have been indexed on the account

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## OpenAiServicesForPutRequest
### Properties
* **resourceId**: string: The openAi services resource id
* **userAssignedIdentity**: string: The user assigned identity to be used to grant permissions

## StorageServicesForPutRequest
### Properties
* **resourceId**: string: The storage services resource id
* **userAssignedIdentity**: string: The user assigned identity to be used to grant permissions

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

