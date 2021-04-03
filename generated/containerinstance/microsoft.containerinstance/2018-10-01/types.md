# Microsoft.ContainerInstance @ 2018-10-01

## Resource Microsoft.ContainerInstance/containerGroups@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ContainerGroupIdentity](#containergroupidentity): Identity for the container group.
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:18_userAssignedIdentitiesValue](#schemas18userassignedidentitiesvalue) (Required):
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The resource tags.
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant): The resource type

## ContainerGroupIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the container group identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the container group. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned': The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group.
* **userAssignedIdentities**: [Dictionary<string,Schemas18UserAssignedIdentitiesValue>](#dictionarystringschemas18userassignedidentitiesvalue): The list of user identities associated with the container group. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## Dictionary<string,Schemas18UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:18_userAssignedIdentitiesValue](#schemas18userassignedidentitiesvalue)

## schemas:18_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

