# Microsoft.ContainerRegistry @ 2019-05-01-preview

## Resource Microsoft.ContainerRegistry/registries/scopeMaps@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ScopeMapProperties](#scopemapproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/scopeMaps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/tokens@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TokenProperties](#tokenproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/tokens' (ReadOnly, DeployTimeConstant)

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

## TokenProperties
### Properties
* **creationDate**: string (ReadOnly)
* **credentials**: [TokenCredentialsProperties](#tokencredentialsproperties)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scopeMapId**: string
* **status**: 'disabled' | 'enabled'

## TokenCredentialsProperties
### Properties
* **activeDirectoryObject**: [ActiveDirectoryObject](#activedirectoryobject)
* **certificates**: [TokenCertificate](#tokencertificate)[]
* **passwords**: [TokenPassword](#tokenpassword)[]

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

