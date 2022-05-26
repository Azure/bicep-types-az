# microsoft.aadiam @ 2020-07-01-preview

## Resource microsoft.aadiam/azureADMetrics@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureADMetricsPropertiesFormat](#azureadmetricspropertiesformat)
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'microsoft.aadiam/azureADMetrics' (ReadOnly, DeployTimeConstant): The resource type

## AzureADMetricsPropertiesFormat
### Properties
* **provisioningState**: 'Created' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

