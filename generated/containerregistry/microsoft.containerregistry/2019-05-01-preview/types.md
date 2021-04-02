# Microsoft.ContainerRegistry @ 2019-05-01-preview

## Resource Microsoft.ContainerRegistry/registries/scopeMaps@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScopeMapProperties](#scopemapproperties): The properties of a scope map.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/scopeMaps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/tokens@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TokenProperties](#tokenproperties): The properties of a token.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/tokens' (ReadOnly, DeployTimeConstant): The resource type

## ScopeMapProperties
### Properties
* **actions**: string[] (Required): The list of scoped permissions for registry artifacts.
E.g. repositories/repository-name/content/read,
repositories/repository-name/metadata/write
* **creationDate**: string (ReadOnly): The creation date of scope map.
* **description**: string: The user friendly description of the scope map.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **type**: string (ReadOnly): The type of the scope map. E.g. BuildIn scope map.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource modification (UTC).
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## TokenProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of scope map.
* **credentials**: [TokenCredentialsProperties](#tokencredentialsproperties): The properties of the credentials that can be used for authenticating the token.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **scopeMapId**: string: The resource ID of the scope map to which the token will be associated with.
* **status**: 'disabled' | 'enabled': The status of the token example enabled or disabled.

## TokenCredentialsProperties
### Properties
* **activeDirectoryObject**: [ActiveDirectoryObject](#activedirectoryobject): The Active Directory Object that will be used for authenticating the token of a container registry.
* **certificates**: [TokenCertificate](#tokencertificate)[]:
* **passwords**: [TokenPassword](#tokenpassword)[]:

## ActiveDirectoryObject
### Properties
* **objectId**: string: The user/group/application object ID for Active Directory Object that will be used for authenticating the token of a container registry.
* **tenantId**: string: The tenant ID of user/group/application object Active Directory Object that will be used for authenticating the token of a container registry.

## TokenCertificate
### Properties
* **encodedPemCertificate**: string: Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token.
* **expiry**: string: The expiry datetime of the certificate.
* **name**: 'certificate1' | 'certificate2':
* **thumbprint**: string: The thumbprint of the certificate.

## TokenPassword
### Properties
* **creationTime**: string: The creation datetime of the password.
* **expiry**: string: The expiry datetime of the password.
* **name**: 'password1' | 'password2': The password name "password1" or "password2".
* **value**: string (ReadOnly): The password value.

