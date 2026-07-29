# Microsoft.Insights @ 2018-11-27-preview

## Resource Microsoft.Insights/vmInsightsOnboardingStatuses@2018-11-27-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2018-11-27-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [VMInsightsOnboardingStatusProperties](#vminsightsonboardingstatusproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Insights/vmInsightsOnboardingStatuses' (ReadOnly, DeployTimeConstant): The resource type

## DataContainer
### Properties
* **workspace**: [WorkspaceInfo](#workspaceinfo) (Required): Log Analytics workspace information.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## VMInsightsOnboardingStatusProperties
### Properties
* **data**: [DataContainer](#datacontainer)[]: Containers that currently store VM Insights data for the specified resource.
* **dataStatus**: 'notPresent' | 'present' | string (Required): The status of VM Insights data from the resource. When reported as `present` the data array will contain information about the data containers to which data for the specified resource is being routed.
* **onboardingStatus**: 'notOnboarded' | 'onboarded' | 'unknown' | string (Required): The onboarding status for the resource. Note that, a higher level scope, e.g., resource group or subscription, is considered onboarded if at least one resource under it is onboarded.
* **resourceId**: string (Required): Azure Resource Manager identifier of the resource whose onboarding status is being represented.

## WorkspaceInfo
### Properties
* **id**: string (Required): Azure Resource Manager identifier of the Log Analytics Workspace.
* **location**: string (Required): Location of the Log Analytics workspace.
* **properties**: [WorkspaceInfoProperties](#workspaceinfoproperties) (Required): Resource properties.

## WorkspaceInfoProperties
### Properties
* **customerId**: string (Required): Log Analytics workspace identifier.

