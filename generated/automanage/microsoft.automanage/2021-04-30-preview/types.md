# Microsoft.Automanage @ 2021-04-30-preview

## Resource Microsoft.Automanage/bestPractices@2021-04-30-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileProperties](#configurationprofileproperties) (ReadOnly): Properties of the best practice.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automanage/bestPractices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/bestPractices/versions@2021-04-30-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileProperties](#configurationprofileproperties) (ReadOnly): Properties of the best practice.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automanage/bestPractices/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/configurationProfileAssignments@2021-04-30-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileAssignmentProperties](#configurationprofileassignmentproperties): Properties of the configuration profile assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automanage/configurationProfileAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/configurationProfileAssignments/reports@2021-04-30-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssignmentReportProperties](#assignmentreportproperties) (ReadOnly): The properties for the report.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automanage/configurationProfileAssignments/reports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/configurationProfiles@2021-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileProperties](#configurationprofileproperties): Properties of the configuration profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Automanage/configurationProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/configurationProfiles/versions@2021-04-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileProperties](#configurationprofileproperties): Properties of the configuration profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Automanage/configurationProfiles/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/servicePrincipals@2021-04-30-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-04-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ServicePrincipalProperties](#serviceprincipalproperties) (ReadOnly): The Service Principal properties for the subscription
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Automanage/servicePrincipals' (ReadOnly, DeployTimeConstant): The resource type

## AssignmentReportProperties
### Properties
* **configurationProfile**: string (ReadOnly): The configurationProfile linked to the assignment.
* **duration**: string (ReadOnly): Duration of the configuration profile assignment processing.
* **endTime**: string: End time of the configuration profile assignment processing.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error message, if any, returned by the configuration profile assignment processing.
* **lastModifiedTime**: string (ReadOnly): Last modified time of the configuration profile assignment processing.
* **reportFormatVersion**: string (ReadOnly): Version of the report format
* **resources**: [ReportResource](#reportresource)[] (ReadOnly): List of resources processed by the configuration profile assignment.
* **startTime**: string: Start time of the configuration profile assignment processing.
* **status**: string (ReadOnly): The status of the configuration profile assignment.
* **type**: string (ReadOnly): Type of the configuration profile assignment processing (Initial/Consistency).

## ConfigurationProfileAssignmentProfileOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ConfigurationProfileAssignmentProperties
### Properties
* **configurationProfile**: string: The Automanage configurationProfile ARM Resource URI.
* **profileOverrides**: [ConfigurationProfileAssignmentProfileOverrides](#configurationprofileassignmentprofileoverrides): The profileOverrides setting for the configuration profile assignment.
* **status**: string (ReadOnly): The status of onboarding, which only appears in the response.
* **targetId**: string (ReadOnly): The target VM resource URI

## ConfigurationProfileProperties
### Properties
* **configuration**: any: configuration dictionary of the configuration profile.
* **overrides**: any[]: overrides of the configuration profile.

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

## ReportResource
### Properties
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error message, if any, returned when deploying the resource.
* **id**: string (ReadOnly): ARM id of the resource.
* **name**: string (ReadOnly): Name of the resource.
* **status**: string (ReadOnly): Status of the resource.
* **type**: string (ReadOnly): Type of the resource.

## ServicePrincipalProperties
### Properties
* **authorizationSet**: bool (ReadOnly): Returns the contributor RBAC Role exist or not for the Service Principal Id.
* **servicePrincipalId**: string (ReadOnly): The Service Principal Id for the subscription.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

