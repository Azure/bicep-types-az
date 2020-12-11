# Microsoft.HanaOnAzure @ 2020-02-07-preview

## Resource Microsoft.HanaOnAzure/sapMonitors@2020-02-07-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-07-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SapMonitorProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HanaOnAzure/sapMonitors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HanaOnAzure/sapMonitors/providerInstances@2020-02-07-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-07-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProviderInstanceProperties
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
### Additional Properties
* **Additional Properties Type**: string

## ProviderInstanceProperties
### Properties
* **metadata**: string
* **properties**: string
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly)
* **type**: string

