# Microsoft.LoadTestService @ 2023-12-01-preview

## Resource Microsoft.LoadTestService/loadTestMappings@2023-12-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]+(-[A-Za-z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LoadTestMappingProperties](#loadtestmappingproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.LoadTestService/loadTestMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LoadTestService/loadTestProfileMappings@2023-12-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]+(-[A-Za-z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LoadTestProfileMappingProperties](#loadtestprofilemappingproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.LoadTestService/loadTestProfileMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LoadTestService/loadTests@2023-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LoadTestProperties](#loadtestproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.LoadTestService/loadTests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LoadTestService/locations/quotas@2023-12-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaResourceProperties](#quotaresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.LoadTestService/locations/quotas' (ReadOnly, DeployTimeConstant): The resource type

## EncryptionProperties
### Properties
* **identity**: [EncryptionPropertiesIdentity](#encryptionpropertiesidentity): All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
* **keyUrl**: string: key encryption key Url, versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.

## EncryptionPropertiesIdentity
### Properties
* **resourceId**: string: User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId.
* **type**: 'SystemAssigned' | 'UserAssigned' | string: Managed identity type to use for accessing encryption key Url.

## LoadTestMappingProperties
### Properties
* **azureLoadTestingResourceId**: string {maxLength: 1024}: Mapped Azure Load Test resource Id.
* **sourceResourceId**: string {maxLength: 1024}: Mapped source resource Id.
* **testId**: string {maxLength: 256}: Mapped Azure Load Test resource test-id.

## LoadTestProfileMappingProperties
### Properties
* **azureLoadTestingResourceId**: string {maxLength: 1024}: Mapped Azure Load Test resource Id.
* **sourceResourceId**: string {maxLength: 1024}: Mapped source resource Id.
* **testProfileId**: string {maxLength: 60}: Mapped Azure Load Test resource test-profile-id.

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

