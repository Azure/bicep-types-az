# Microsoft.ContainerInstance @ 2018-10-01

## Microsoft.ContainerInstance/containerGroups
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ContainerGroupIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:18_userAssignedIdentitiesValue (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant)

## ContainerGroupIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,Schemas18UserAssignedIdentitiesValue>

## Dictionary<string,Schemas18UserAssignedIdentitiesValue>
### Additional Properties
* **Additional Properties Type**: schemas:18_userAssignedIdentitiesValue

## schemas:18_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

