# Microsoft.ContainerInstance @ 2018-10-01

## Resource Microsoft.ContainerInstance/containerGroups@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ContainerGroupIdentity](#containergroupidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:18_userAssignedIdentitiesValue](#schemas18userassignedidentitiesvalue) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant)

## ContainerGroupIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [Dictionary<string,Schemas18UserAssignedIdentitiesValue>](#dictionarystringschemas18userassignedidentitiesvalue)

## Dictionary<string,Schemas18UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:18_userAssignedIdentitiesValue](#schemas18userassignedidentitiesvalue)

## schemas:18_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

