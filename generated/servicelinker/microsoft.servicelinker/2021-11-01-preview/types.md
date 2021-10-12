# Microsoft.ServiceLinker @ 2021-11-01-preview

## Resource Microsoft.ServiceLinker/linkers@2021-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkerProperties](#linkerproperties) (Required): The properties of the linker.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ServiceLinker/linkers' (ReadOnly, DeployTimeConstant): The resource type

## LinkerProperties
### Properties
* **authInfo**: [AuthInfoBase](#authinfobase): The authentication info
* **clientType**: 'django' | 'dotnet' | 'go' | 'java' | 'nodejs' | 'none' | 'php' | 'python' | 'ruby' | 'springBoot': The application client type
* **provisioningState**: string (ReadOnly): The provisioning state.
* **targetId**: string: The resource Id of target service.

## AuthInfoBase
* **Discriminator**: authType

### Base Properties
### SecretAuthInfo
#### Properties
* **authType**: 'secret' (Required): The authentication type.
* **name**: string: Username or account name for secret auth.
* **secret**: string: Password or account key for secret auth.

### ServicePrincipalCertificateAuthInfo
#### Properties
* **authType**: 'servicePrincipalCertificate' (Required): The authentication type.
* **certificate**: string (Required): ServicePrincipal certificate for servicePrincipal auth.
* **clientId**: string (Required): Application clientId for servicePrincipal auth.
* **principalId**: string (Required): Principal Id for servicePrincipal auth.

### ServicePrincipalSecretAuthInfo
#### Properties
* **authType**: 'servicePrincipalSecret' (Required): The authentication type.
* **clientId**: string (Required): ServicePrincipal application clientId for servicePrincipal auth.
* **principalId**: string (Required): Principal Id for servicePrincipal auth.
* **secret**: string (Required): Secret for servicePrincipal auth.

### SystemAssignedIdentityAuthInfo
#### Properties
* **authType**: 'systemAssignedIdentity' (Required): The authentication type.

### UserAssignedIdentityAuthInfo
#### Properties
* **authType**: 'userAssignedIdentity' (Required): The authentication type.
* **clientId**: string (Required): Client Id for userAssignedIdentity.
* **subscriptionId**: string (Required): Subscription id for userAssignedIdentity.


## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

