# Microsoft.ManagedIdentity @ 2018-11-30

## Microsoft.ManagedIdentity/userAssignedIdentities
### Properties
* **apiVersion**: '2018-11-30' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: UserAssignedIdentityProperties (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ManagedIdentity/userAssignedIdentities' (ReadOnly, DeployTimeConstant)

## UserAssignedIdentityProperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

