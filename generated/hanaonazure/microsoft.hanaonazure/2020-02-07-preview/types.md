# Microsoft.HanaOnAzure @ 2020-02-07-preview

## Resource Microsoft.HanaOnAzure/sapMonitors@2020-02-07-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-07-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SapMonitorProperties](#sapmonitorproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.HanaOnAzure/sapMonitors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HanaOnAzure/sapMonitors/providerInstances@2020-02-07-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-07-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProviderInstanceProperties](#providerinstanceproperties)
* **type**: 'Microsoft.HanaOnAzure/sapMonitors/providerInstances' (ReadOnly, DeployTimeConstant)

## SapMonitorProperties
### Properties
* **enableCustomerAnalytics**: bool
* **logAnalyticsWorkspaceArmId**: string
* **logAnalyticsWorkspaceId**: string
* **logAnalyticsWorkspaceSharedKey**: string
* **managedResourceGroupName**: string (ReadOnly)
* **monitorSubnet**: string
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly)
* **sapMonitorCollectorVersion**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProviderInstanceProperties
### Properties
* **metadata**: string
* **properties**: string
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly)
* **type**: string

