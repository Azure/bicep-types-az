# Microsoft.HanaOnAzure @ 2020-02-07-preview

## Resource Microsoft.HanaOnAzure/sapMonitors@2020-02-07-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SapMonitorProperties](#sapmonitorproperties): SAP monitor properties
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HanaOnAzure/sapMonitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HanaOnAzure/sapMonitors/providerInstances@2020-02-07-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProviderInstanceProperties](#providerinstanceproperties): Provider Instance properties
* **type**: 'Microsoft.HanaOnAzure/sapMonitors/providerInstances' (ReadOnly, DeployTimeConstant): The resource type

## ProviderInstanceProperties
### Properties
* **metadata**: string: A JSON string containing metadata of the provider instance.
* **properties**: string: A JSON string containing the properties of the provider instance.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the provider instance
* **type**: string: The type of provider instance.

## SapMonitorProperties
### Properties
* **enableCustomerAnalytics**: bool: The value indicating whether to send analytics to Microsoft
* **logAnalyticsWorkspaceArmId**: string: The ARM ID of the Log Analytics Workspace that is used for monitoring
* **logAnalyticsWorkspaceId**: string: The workspace ID of the log analytics workspace to be used for monitoring
* **logAnalyticsWorkspaceSharedKey**: string: The shared key of the log analytics workspace that is used for monitoring
* **managedResourceGroupName**: string (ReadOnly): The name of the resource group the SAP Monitor resources get deployed into.
* **monitorSubnet**: string: The subnet which the SAP monitor will be deployed in
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): State of provisioning of the HanaInstance
* **sapMonitorCollectorVersion**: string (ReadOnly): The version of the payload running in the Collector VM

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

