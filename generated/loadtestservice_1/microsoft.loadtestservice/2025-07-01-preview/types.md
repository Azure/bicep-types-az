# Microsoft.LoadTestService @ 2025-07-01-preview

## Resource Microsoft.LoadTestService/locations/playwrightQuotas@2025-07-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'ExecutionMinutes' | string (Required, DeployTimeConstant): The resource name
* **properties**: [PlaywrightQuotaProperties](#playwrightquotaproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.LoadTestService/locations/playwrightQuotas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LoadTestService/playwrightWorkspaces@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PlaywrightWorkspaceProperties](#playwrightworkspaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.LoadTestService/playwrightWorkspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LoadTestService/playwrightWorkspaces/quotas@2025-07-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'ExecutionMinutes' | string (Required, DeployTimeConstant): The resource name
* **properties**: [PlaywrightWorkspaceQuotaProperties](#playwrightworkspacequotaproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.LoadTestService/playwrightWorkspaces/quotas' (ReadOnly, DeployTimeConstant): The resource type

## FreeTrialProperties
### Properties
* **state**: 'Active' | 'Expired' | 'NotApplicable' | string (Required, ReadOnly): The free trial state.
* **workspaceId**: string {minLength: 3, maxLength: 36, pattern: "[A-Za-z0-9]+(-[A-Za-z0-9]+)+"} (Required, ReadOnly): The workspace ID in GUID format that has free trial enabled in the subscription.

## PlaywrightQuotaProperties
### Properties
* **freeTrial**: [FreeTrialProperties](#freetrialproperties) (ReadOnly): The subscription-level location-based Playwright quota free trial properties.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last resource operation.

## PlaywrightWorkspaceFreeTrialProperties
### Properties
* **allocatedValue**: int (Required, ReadOnly): The allocated limit value (e.g., allocated free execution minutes).
* **createdAt**: string (Required, ReadOnly): The free trial creation timestamp in UTC.
* **expiryAt**: string (Required, ReadOnly): The free trial expiration timestamp in UTC.
* **percentageUsed**: int {minValue: 0, maxValue: 100} (Required, ReadOnly): The percentage of the free trial quota used.
* **usedValue**: int (Required, ReadOnly): The used value (e.g., used free execution minutes).

## PlaywrightWorkspaceProperties
### Properties
* **dataplaneUri**: string (ReadOnly): The workspace data plane service API URI.
* **localAuth**: 'Disabled' | 'Enabled' | string: Enables the workspace to use local authentication through service access tokens for operations.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last resource operation.
* **regionalAffinity**: 'Disabled' | 'Enabled' | string: Controls the connection region for client workers to cloud-hosted browsers. When enabled, workers connect to browsers in the closest Azure region for lower latency. When disabled, workers connect to browsers in the Azure region where the workspace was created.
* **workspaceId**: string {minLength: 3, maxLength: 36, pattern: "[A-Za-z0-9]+(-[A-Za-z0-9]+)+"} (ReadOnly): The workspace ID in GUID format.

## PlaywrightWorkspaceQuotaProperties
### Properties
* **freeTrial**: [PlaywrightWorkspaceFreeTrialProperties](#playwrightworkspacefreetrialproperties) (ReadOnly): The Playwright workspace quota free trial properties.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last resource operation.

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

