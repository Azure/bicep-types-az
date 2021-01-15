# Microsoft.Resources @ 2020-06-01

## Resource Microsoft.Resources/resourceGroups@2020-06-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ResourceGroupProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/resourceGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/tags@2020-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: Tags (Required)
* **type**: 'Microsoft.Resources/tags' (ReadOnly, DeployTimeConstant)

## ResourceGroupProperties
### Properties
* **provisioningState**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
* **tags**: Dictionary<string,String>

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

