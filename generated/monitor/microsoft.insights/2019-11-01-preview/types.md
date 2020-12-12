# Microsoft.Insights @ 2019-11-01-preview

## Resource Microsoft.Insights/dataCollectionRuleAssociations@2019-11-01-preview
* **Valid Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:1_properties (Required)
* **type**: 'Microsoft.Insights/dataCollectionRuleAssociations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/dataCollectionRules@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:1_properties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Insights/dataCollectionRules' (ReadOnly, DeployTimeConstant)

## schemas:1_properties
### Properties
* **dataCollectionRuleId**: string (Required)
* **description**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

