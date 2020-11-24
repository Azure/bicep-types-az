# Microsoft.ContainerRegistry @ 2019-05-01-preview

## Microsoft.ContainerRegistry/registries/scopeMaps
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScopeMapProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/scopeMaps' (ReadOnly, DeployTimeConstant)

## ScopeMapProperties
### Properties
* **actions**: string[] (Required)
* **creationDate**: string (ReadOnly)
* **description**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **type**: string (ReadOnly)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Microsoft.ContainerRegistry/registries/tokens
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TokenProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/tokens' (ReadOnly, DeployTimeConstant)

## TokenProperties
### Properties
* **creationDate**: string (ReadOnly)
* **credentials**: TokenCredentialsProperties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scopeMapId**: string
* **status**: 'disabled' | 'enabled'

## TokenCredentialsProperties
### Properties
* **activeDirectoryObject**: ActiveDirectoryObject
* **certificates**: TokenCertificate[]
* **passwords**: TokenPassword[]

## ActiveDirectoryObject
### Properties
* **objectId**: string
* **tenantId**: string

## TokenCertificate
### Properties
* **encodedPemCertificate**: string
* **expiry**: string
* **name**: 'certificate1' | 'certificate2'
* **thumbprint**: string

## TokenPassword
### Properties
* **creationTime**: string
* **expiry**: string
* **name**: 'password1' | 'password2'
* **value**: string (ReadOnly)

