# Microsoft.Resources @ 2016-02-01

## Resource Microsoft.Resources/resourceGroups@2016-02-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource group. It cannot be changed after the resource group has been created. Has to be one of the supported Azure Locations, such as West US, East US, West Europe, East Asia, etc.
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGroupProperties](#resourcegroupproperties): The resource group properties.
* **tags**: [ResourceGroupTags](#resourcegrouptags): The tags attached to the resource group.
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant): The resource type

## ResourceGroupProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state.

## ResourceGroupTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

