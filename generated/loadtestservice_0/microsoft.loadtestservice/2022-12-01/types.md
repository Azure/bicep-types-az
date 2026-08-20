# Microsoft.LoadTestService @ 2022-12-01

## Resource Microsoft.LoadTestService/loadTests@2022-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadTestProperties](#loadtestproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.LoadTestService/loadTests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LoadTestService/locations/quotas@2022-12-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2022-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaResourceProperties](#quotaresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.LoadTestService/locations/quotas' (ReadOnly, DeployTimeConstant): The resource type

## Function checkAvailability (Microsoft.LoadTestService/locations/quotas@2022-12-01)
* **Resource**: Microsoft.LoadTestService/locations/quotas
* **ApiVersion**: 2022-12-01
* **Input**: [QuotaBucketRequest](#quotabucketrequest)
* **Output**: [CheckQuotaAvailabilityResponse](#checkquotaavailabilityresponse)

## CheckQuotaAvailabilityResponse
### Properties
* **id**: string (Required, ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [CheckQuotaAvailabilityResponseProperties](#checkquotaavailabilityresponseproperties): Check quota availability response properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (Required, ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## CheckQuotaAvailabilityResponseProperties
### Properties
* **availabilityStatus**: string: Message indicating additional details to add to quota support request.
* **isAvailable**: bool: True/False indicating whether the quota request be granted based on availability.

## EncryptionProperties
### Properties
* **identity**: [EncryptionPropertiesIdentity](#encryptionpropertiesidentity): All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
* **keyUrl**: string: key encryption key Url, versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.

## EncryptionPropertiesIdentity
### Properties
* **resourceId**: string: User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/a0a0a0a0-bbbb-cccd-dddd-e1e1e1e1e1e1/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId.
* **type**: 'SystemAssigned' | 'UserAssigned' | string: Managed identity type to use for accessing encryption key Url.

## LoadTestProperties
### Properties
* **dataPlaneURI**: string {maxLength: 2083} (ReadOnly): Resource data plane URI.
* **description**: string {maxLength: 512}: Description of the resource.
* **encryption**: [EncryptionProperties](#encryptionproperties): CMK Encryption property.
* **provisioningState**: 'Canceled' | 'Deleted' | 'Failed' | 'Succeeded' | string (ReadOnly): Resource provisioning state.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## QuotaBucketRequest
### Properties
* **properties**: [QuotaBucketRequestProperties](#quotabucketrequestproperties): Request object of new quota for a quota bucket.

## QuotaBucketRequestProperties
### Properties
* **currentQuota**: int {minValue: 0}: Current quota limit of the quota bucket.
* **currentUsage**: int {minValue: 0}: Current quota usage of the quota bucket.
* **dimensions**: [QuotaBucketRequestPropertiesDimensions](#quotabucketrequestpropertiesdimensions): Dimensions for new quota request.
* **newQuota**: int {minValue: 0}: New quota limit of the quota bucket.

## QuotaBucketRequestPropertiesDimensions
### Properties
* **location**: string {minLength: 1}: Location dimension for new quota request of the quota bucket.
* **subscriptionId**: string {minLength: 1}: Subscription Id dimension for new quota request of the quota bucket.

## QuotaResourceProperties
### Properties
* **limit**: int {minValue: 0}: Current quota limit of the quota bucket.
* **provisioningState**: 'Canceled' | 'Deleted' | 'Failed' | 'Succeeded' | string (ReadOnly): Resource provisioning state.
* **usage**: int {minValue: 0}: Current quota usage of the quota bucket.

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

