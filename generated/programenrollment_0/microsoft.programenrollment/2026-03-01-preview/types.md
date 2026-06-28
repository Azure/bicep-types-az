# Microsoft.ProgramEnrollment @ 2026-03-01-preview

## Resource Microsoft.ProgramEnrollment/eduEnrollments@2026-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EduEnrollmentProperties](#eduenrollmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ProgramEnrollment/eduEnrollments' (ReadOnly, DeployTimeConstant): The resource type

## DomainGroup
### Properties
* **domainNames**: string[] {minLength: 1} (Required): The edu domain names in this group.
* **failureReason**: [ErrorDetail](#errordetail) (ReadOnly): Failure detail when state is Failed or ActionRequired. Omitted otherwise.
* **state**: 'ActionRequired' | 'Failed' | 'Pending' | 'Succeeded' | string (ReadOnly): The assessment state of this domain group.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The Entra tenant ID that owns these domains. Defaults to the caller's tenant if omitted.

## EduEnrollmentProperties
### Properties
* **domains**: [DomainGroup](#domaingroup)[] {minLength: 1} (Required): The domain groups associated with this enrollment.
* **failureReason**: [ErrorDetail](#errordetail) (ReadOnly): Failure detail when provisioningState is Failed. Omitted otherwise.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

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

