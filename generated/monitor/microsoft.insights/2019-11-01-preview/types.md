# Microsoft.Insights @ 2019-11-01-preview

## Microsoft.Insights/dataCollectionRuleAssociations
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:1_properties (Required)
* **type**: 'Microsoft.Insights/dataCollectionRuleAssociations' (ReadOnly, DeployTimeConstant)

## schemas:1_properties
### Properties
* **dataCollectionRuleId**: string (Required)
* **description**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Microsoft.Insights/dataCollectionRules
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:1_properties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Insights/dataCollectionRules' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

