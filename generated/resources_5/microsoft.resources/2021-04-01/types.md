# Microsoft.Resources @ 2021-04-01

## Resource Microsoft.Resources/resourceGroups@2021-04-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
* **managedBy**: string: The ID of the resource that manages this resource group.
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceGroupProperties](#resourcegroupproperties): The resource group properties.
* **tags**: [ResourceGroupTags](#resourcegrouptags): The tags attached to the resource group.
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/tags@2021-04-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [Tags](#tags) (Required): The set of tags.
* **type**: 'Microsoft.Resources/tags' (ReadOnly, DeployTimeConstant): The resource type

## ResourceGroupProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state.

## ResourceGroupTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
* **tags**: [Tags](#tags): Dictionary of <string>

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

