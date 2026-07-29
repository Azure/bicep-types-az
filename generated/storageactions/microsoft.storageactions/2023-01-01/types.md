# Microsoft.StorageActions @ 2023-01-01

## Resource Microsoft.StorageActions/storageTasks@2023-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (Required): The managed service identity of the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 18, pattern: "^[a-z0-9]{3,18}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StorageTaskProperties](#storagetaskproperties) (Required): Properties of the storage task.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StorageActions/storageTasks' (ReadOnly, DeployTimeConstant): The resource type

## Function previewActions (Microsoft.StorageActions/locations@2023-01-01)
* **Resource**: Microsoft.StorageActions/locations
* **ApiVersion**: 2023-01-01
* **Input**: [StorageTaskPreviewAction](#storagetaskpreviewaction)
* **Output**: [StorageTaskPreviewAction](#storagetaskpreviewaction)

## ElseCondition
### Properties
* **operations**: [StorageTaskOperation](#storagetaskoperation)[] (Required): List of operations to execute in the else block

## IfCondition
### Properties
* **condition**: string (Required): Condition predicate to evaluate each object. See https://aka.ms/storagetaskconditions for valid properties and operators.
* **operations**: [StorageTaskOperation](#storagetaskoperation)[] (Required): List of operations to execute when the condition predicate satisfies.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## StorageTaskAction
### Properties
* **else**: [ElseCondition](#elsecondition): The else block of storage task operation
* **if**: [IfCondition](#ifcondition) (Required): The if block of storage task operation

## StorageTaskOperation
### Properties
* **name**: 'DeleteBlob' | 'SetBlobExpiry' | 'SetBlobImmutabilityPolicy' | 'SetBlobLegalHold' | 'SetBlobTags' | 'SetBlobTier' | 'UndeleteBlob' | string (Required): The operation to be performed on the object.
* **onFailure**: 'break' | string: Action to be taken when the operation fails for a object.
* **onSuccess**: 'continue' | string: Action to be taken when the operation is successful for a object.
* **parameters**: [StorageTaskOperationParameters](#storagetaskoperationparameters): Key-value parameters for the operation.

## StorageTaskOperationParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageTaskPreviewAction
### Properties
* **properties**: [StorageTaskPreviewActionProperties](#storagetaskpreviewactionproperties) (Required): Properties of the storage task preview.

## StorageTaskPreviewActionCondition
### Properties
* **elseBlockExists**: bool (Required): Specify whether the else block is present in the condition.
* **if**: [StorageTaskPreviewActionIfCondition](#storagetaskpreviewactionifcondition) (Required): The condition to be tested for a match with container and blob properties.

## StorageTaskPreviewActionIfCondition
### Properties
* **condition**: string: Storage task condition to bes tested for a match.

## StorageTaskPreviewActionProperties
### Properties
* **action**: [StorageTaskPreviewActionCondition](#storagetaskpreviewactioncondition) (Required): Preview action to test
* **blobs**: [StorageTaskPreviewBlobProperties](#storagetaskpreviewblobproperties)[] (Required): Properties of some sample blobs in the container to test for matches with the preview action.
* **container**: [StorageTaskPreviewContainerProperties](#storagetaskpreviewcontainerproperties) (Required): Properties of a sample container to test for a match with the preview action.

## StorageTaskPreviewBlobProperties
### Properties
* **matchedBlock**: 'Else' | 'If' | 'None' | string (ReadOnly): Represents the condition block name that matched blob properties.
* **metadata**: [StorageTaskPreviewKeyValueProperties](#storagetaskpreviewkeyvalueproperties)[]: metadata key value pairs to be tested for a match against the provided condition.
* **name**: string: Name of test blob
* **properties**: [StorageTaskPreviewKeyValueProperties](#storagetaskpreviewkeyvalueproperties)[]: properties key value pairs to be tested for a match against the provided condition.
* **tags**: [StorageTaskPreviewKeyValueProperties](#storagetaskpreviewkeyvalueproperties)[]: tags key value pairs to be tested for a match against the provided condition.

## StorageTaskPreviewContainerProperties
### Properties
* **metadata**: [StorageTaskPreviewKeyValueProperties](#storagetaskpreviewkeyvalueproperties)[]: metadata key value pairs to be tested for a match against the provided condition.
* **name**: string: Name of test container

## StorageTaskPreviewKeyValueProperties
### Properties
* **key**: string: Represents the key property of the pair.
* **value**: string: Represents the value property of the pair.

## StorageTaskProperties
### Properties
* **action**: [StorageTaskAction](#storagetaskaction) (Required): The storage task action that is executed
* **creationTimeInUtc**: string (ReadOnly): The creation date and time of the storage task in UTC.
* **description**: string (Required): Text that describes the purpose of the storage task
* **enabled**: bool (Required): Storage Task is enabled when set to true and disabled when set to false
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'ValidateSubscriptionQuotaBegin' | 'ValidateSubscriptionQuotaEnd' | string (ReadOnly): Represents the provisioning state of the storage task.
* **taskVersion**: int {minValue: 1, maxValue: 1} (ReadOnly): Storage task version.

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

