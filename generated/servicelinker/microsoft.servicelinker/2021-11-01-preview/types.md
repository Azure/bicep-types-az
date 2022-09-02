# Microsoft.ServiceLinker @ 2021-11-01-preview

## Resource Microsoft.ServiceLinker/linkers@2021-11-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkerProperties](#linkerproperties) (Required): The properties of the linker.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **type**: 'Microsoft.ServiceLinker/linkers' (ReadOnly, DeployTimeConstant): The resource type

## Function listConfigurations (Microsoft.ServiceLinker/linkers@2021-11-01-preview)
* **Resource**: Microsoft.ServiceLinker/linkers
* **ApiVersion**: 2021-11-01-preview
* **Output**: [SourceConfigurationResult](#sourceconfigurationresult)

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


## LinkerProperties
### Properties
* **authInfo**: [AuthInfoBase](#authinfobase): The authentication type.
* **clientType**: 'django' | 'dotnet' | 'go' | 'java' | 'nodejs' | 'none' | 'php' | 'python' | 'ruby' | 'springBoot' | string: The application client type
* **provisioningState**: string (ReadOnly): The provisioning state.
* **secretStore**: [SecretStore](#secretstore): An option to store secret value in secure place
* **targetId**: string: The resource Id of target service.
* **vNetSolution**: [VNetSolution](#vnetsolution): The VNet solution.

## SecretStore
### Properties
* **keyVaultId**: string: The key vault id to store secret

## SourceConfiguration
### Properties
* **name**: string: The name of setting.
* **value**: string: The value of setting

## SourceConfigurationResult
### Properties
* **configurations**: [SourceConfiguration](#sourceconfiguration)[]: The configuration properties for source resource.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## VNetSolution
### Properties
* **type**: 'privateLink' | 'serviceEndpoint' | string: Type of VNet solution.

