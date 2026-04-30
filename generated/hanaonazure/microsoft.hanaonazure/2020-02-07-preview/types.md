# Microsoft.HanaOnAzure @ 2020-02-07-preview

## Resource Microsoft.HanaOnAzure/sapMonitors@2020-02-07-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SapMonitorProperties](#sapmonitorproperties): SAP monitor properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HanaOnAzure/sapMonitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HanaOnAzure/sapMonitors/providerInstances@2020-02-07-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProviderInstanceProperties](#providerinstanceproperties): Provider Instance properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
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

