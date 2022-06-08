# Microsoft.Insights @ 2018-11-27-preview

## Resource Microsoft.Insights/vmInsightsOnboardingStatuses@2018-11-27-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-11-27-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [VMInsightsOnboardingStatusProperties](#vminsightsonboardingstatusproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Insights/vmInsightsOnboardingStatuses' (ReadOnly, DeployTimeConstant): The resource type

## DataContainer
### Properties
* **workspace**: [WorkspaceInfo](#workspaceinfo) (ReadOnly): Information about a Log Analytics Workspace.

## VMInsightsOnboardingStatusProperties
### Properties
* **data**: [DataContainer](#datacontainer)[] (ReadOnly): Containers that currently store VM Insights data for the specified resource.
* **dataStatus**: 'notPresent' | 'present' | string (ReadOnly): The status of VM Insights data from the resource. When reported as `present` the data array will contain information about the data containers to which data for the specified resource is being routed.
* **onboardingStatus**: 'notOnboarded' | 'onboarded' | 'unknown' | string (ReadOnly): The onboarding status for the resource. Note that, a higher level scope, e.g., resource group or subscription, is considered onboarded if at least one resource under it is onboarded.
* **resourceId**: string (ReadOnly): Azure Resource Manager identifier of the resource whose onboarding status is being represented.

## WorkspaceInfo
### Properties
* **id**: string (ReadOnly): Azure Resource Manager identifier of the Log Analytics Workspace.
* **location**: string (ReadOnly): Location of the Log Analytics workspace.
* **properties**: [WorkspaceInfoProperties](#workspaceinfoproperties) (ReadOnly): Resource properties.

## WorkspaceInfoProperties
### Properties
* **customerId**: string (ReadOnly): Log Analytics workspace identifier.

