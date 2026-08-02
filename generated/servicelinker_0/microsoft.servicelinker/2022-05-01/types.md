# Microsoft.ServiceLinker @ 2022-05-01

## Resource Microsoft.ServiceLinker/linkers@2022-05-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkerProperties](#linkerproperties) (Required): The properties of the linker.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system data.
* **type**: 'Microsoft.ServiceLinker/linkers' (ReadOnly, DeployTimeConstant): The resource type

## Function listConfigurations (Microsoft.ServiceLinker/linkers@2022-05-01)
* **Resource**: Microsoft.ServiceLinker/linkers
* **ApiVersion**: 2022-05-01
* **Output**: [SourceConfigurationResult](#sourceconfigurationresult)

## Function validateLinker (Microsoft.ServiceLinker/linkers@2022-05-01)
* **Resource**: Microsoft.ServiceLinker/linkers
* **ApiVersion**: 2022-05-01
* **Output**: [ValidateOperationResult](#validateoperationresult)

## AuthInfoBase
* **Discriminator**: authType

### Base Properties

### SecretAuthInfo
#### Properties
* **authType**: 'secret' (Required): The authentication type.
* **name**: string: Username or account name for secret auth.
* **secretInfo**: [SecretInfoBase](#secretinfobase): Password or key vault secret for secret auth.

### ServicePrincipalCertificateAuthInfo
#### Properties
* **authType**: 'servicePrincipalCertificate' (Required): The authentication type.
* **certificate**: string {sensitive} (Required): ServicePrincipal certificate for servicePrincipal auth.
* **clientId**: string (Required): Application clientId for servicePrincipal auth.
* **principalId**: string (Required): Principal Id for servicePrincipal auth.

### ServicePrincipalSecretAuthInfo
#### Properties
* **authType**: 'servicePrincipalSecret' (Required): The authentication type.
* **clientId**: string (Required): ServicePrincipal application clientId for servicePrincipal auth.
* **principalId**: string (Required): Principal Id for servicePrincipal auth.
* **secret**: string {sensitive} (Required): Secret for servicePrincipal auth.

### SystemAssignedIdentityAuthInfo
#### Properties
* **authType**: 'systemAssignedIdentity' (Required): The authentication type.

### UserAssignedIdentityAuthInfo
#### Properties
* **authType**: 'userAssignedIdentity' (Required): The authentication type.
* **clientId**: string: Client Id for userAssignedIdentity.
* **subscriptionId**: string: Subscription id for userAssignedIdentity.


## AzureResourcePropertiesBase
* **Discriminator**: type

### Base Properties

### AzureKeyVaultProperties
#### Properties
* **connectAsKubernetesCsiDriver**: bool: True if connect via Kubernetes CSI Driver.
* **type**: 'KeyVault' (Required): The azure resource type.


## LinkerProperties
### Properties
* **authInfo**: [AuthInfoBase](#authinfobase): The authentication type.
* **clientType**: 'django' | 'dotnet' | 'go' | 'java' | 'kafka-springBoot' | 'nodejs' | 'none' | 'php' | 'python' | 'ruby' | 'springBoot' | string: The application client type
* **provisioningState**: string (ReadOnly): The provisioning state.
* **scope**: string: connection scope in source service.
* **secretStore**: [SecretStore](#secretstore): An option to store secret value in secure place
* **targetService**: [TargetServiceBase](#targetservicebase): The target service properties
* **vNetSolution**: [VNetSolution](#vnetsolution): The VNet solution.

## SecretInfoBase
* **Discriminator**: secretType

### Base Properties

### KeyVaultSecretReferenceSecretInfo
#### Properties
* **name**: string: Name of the Key Vault secret.
* **secretType**: 'keyVaultSecretReference' (Required): The secret type.
* **version**: string: Version of the Key Vault secret.

### KeyVaultSecretUriSecretInfo
#### Properties
* **secretType**: 'keyVaultSecretUri' (Required): The secret type.
* **value**: string: URI to the keyvault secret

### ValueSecretInfo
#### Properties
* **secretType**: 'rawValue' (Required): The secret type.
* **value**: string {sensitive}: The actual value of the secret.


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

## TargetServiceBase
* **Discriminator**: type

### Base Properties

### AzureResource
#### Properties
* **id**: string: The Id of azure resource.
* **resourceProperties**: [AzureResourcePropertiesBase](#azureresourcepropertiesbase): The azure resource connection related properties.
* **type**: 'AzureResource' (Required): The target service type.

### ConfluentBootstrapServer
#### Properties
* **endpoint**: string: The endpoint of service.
* **type**: 'ConfluentBootstrapServer' (Required): The target service type.

### ConfluentSchemaRegistry
#### Properties
* **endpoint**: string: The endpoint of service.
* **type**: 'ConfluentSchemaRegistry' (Required): The target service type.


## ValidateOperationResult
### Properties
* **properties**: [ValidateResult](#validateresult): The validation result detail.
* **resourceId**: string: Validated linker id.
* **status**: string: Validation operation status.

## ValidateResult
### Properties
* **authType**: 'secret' | 'servicePrincipalCertificate' | 'servicePrincipalSecret' | 'systemAssignedIdentity' | 'userAssignedIdentity' | string: The authentication type.
* **isConnectionAvailable**: bool: A boolean value indicating whether the connection is available or not
* **linkerName**: string: The linker name.
* **reportEndTimeUtc**: string: The end time of the validation report.
* **reportStartTimeUtc**: string: The start time of the validation report.
* **sourceId**: string: The resource id of the linker source application.
* **targetId**: string: The resource Id of target service.
* **validationDetail**: [ValidationResultItem](#validationresultitem)[]: The detail of validation result

## ValidationResultItem
### Properties
* **description**: string: The display name of validation item
* **errorCode**: string: The error code of validation result
* **errorMessage**: string: The error message of validation result
* **name**: string: The validation item name.
* **result**: 'failure' | 'success' | 'warning' | string: The result of validation

## VNetSolution
### Properties
* **type**: 'privateLink' | 'serviceEndpoint' | string: Type of VNet solution.

