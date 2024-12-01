# Microsoft.AzurePlaywrightService @ 2024-12-01

## Resource Microsoft.AzurePlaywrightService/accounts@2024-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z]{1}[a-zA-Z0-9]{2,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzurePlaywrightService/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzurePlaywrightService/accounts/quotas@2024-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Reporting' | 'ScalableExecution' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountQuotaProperties](#accountquotaproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzurePlaywrightService/accounts/quotas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzurePlaywrightService/locations/quotas@2024-12-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Reporting' | 'ScalableExecution' | string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzurePlaywrightService/locations/quotas' (ReadOnly, DeployTimeConstant): The resource type

## AccountFreeTrialProperties
### Properties
* **allocatedValue**: int (Required, ReadOnly): The free-trial allocated limit value eg. allocated free minutes.
* **createdAt**: string (Required, ReadOnly): The free-trial createdAt utcDateTime.
* **expiryAt**: string (Required, ReadOnly): The free-trial expiryAt utcDateTime.
* **percentageUsed**: int {minValue: 0, maxValue: 100} (Required, ReadOnly): The free-trial percentage used.
* **usedValue**: int (Required, ReadOnly): The free-trial used value eg. used free minutes.

## AccountProperties
### Properties
* **dashboardUri**: string (ReadOnly): The Playwright testing dashboard URI for the account resource.
* **localAuth**: 'Disabled' | 'Enabled' | string: When enabled, this feature allows the workspace to use local auth(through access key) for authentication of test runs.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **regionalAffinity**: 'Disabled' | 'Enabled' | string: This property sets the connection region for Playwright client workers to cloud-hosted browsers. If enabled, workers connect to browsers in the closest Azure region, ensuring lower latency. If disabled, workers connect to browsers in the Azure region in which the workspace was initially created.
* **reporting**: 'Disabled' | 'Enabled' | string: When enabled, this feature allows the workspace to upload and display test results, including artifacts like traces and screenshots, in the Playwright portal. This enables faster and more efficient troubleshooting.
* **scalableExecution**: 'Disabled' | 'Enabled' | string: When enabled, Playwright client workers can connect to cloud-hosted browsers. This can increase the number of parallel workers for a test run, significantly minimizing test completion durations.

## AccountQuotaProperties
### Properties
* **freeTrial**: [AccountFreeTrialProperties](#accountfreetrialproperties): The Playwright service account quota resource free-trial properties.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

## FreeTrialProperties
### Properties
* **accountId**: string (Required, ReadOnly): The Playwright service account id.
* **state**: 'Active' | 'Expired' | 'NotEligible' | 'NotRegistered' | string (Required, ReadOnly): The free-trial state.

## QuotaProperties
### Properties
* **freeTrial**: [FreeTrialProperties](#freetrialproperties): The subscription quota resource free-trial properties.
* **offeringType**: 'GeneralAvailability' | 'NotApplicable' | 'PrivatePreview' | 'PublicPreview' | string (ReadOnly): Indicates the offering type for the subscription.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

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

