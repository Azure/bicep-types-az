# Microsoft.ServiceLinker @ 2022-11-01-preview

## Resource Microsoft.ServiceLinker/dryruns@2022-11-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2022-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DryrunProperties](#dryrunproperties): The properties of the dryrun job.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ServiceLinker/dryruns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceLinker/linkers@2022-11-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2022-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkerProperties](#linkerproperties) (Required): The properties of the Linker.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ServiceLinker/linkers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceLinker/locations/connectors@2022-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkerProperties](#linkerproperties) (Required): The properties of the Linker.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ServiceLinker/locations/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceLinker/locations/dryruns@2022-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DryrunProperties](#dryrunproperties): The properties of the dryrun job.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ServiceLinker/locations/dryruns' (ReadOnly, DeployTimeConstant): The resource type

## Function generateConfigurations (Microsoft.ServiceLinker/locations/connectors@2022-11-01-preview)
* **Resource**: Microsoft.ServiceLinker/locations/connectors
* **ApiVersion**: 2022-11-01-preview
* **Input**: [ConfigurationInfo](#configurationinfo)
* **Output**: [ConfigurationResult](#configurationresult)

## Function generateConfigurations (Microsoft.ServiceLinker/linkers@2022-11-01-preview)
* **Resource**: Microsoft.ServiceLinker/linkers
* **ApiVersion**: 2022-11-01-preview
* **Input**: [ConfigurationInfo](#configurationinfo)
* **Output**: [ConfigurationResult](#configurationresult)

## Function listConfigurations (Microsoft.ServiceLinker/linkers@2022-11-01-preview)
* **Resource**: Microsoft.ServiceLinker/linkers
* **ApiVersion**: 2022-11-01-preview
* **Output**: [ConfigurationResult](#configurationresult)

## Function validate (Microsoft.ServiceLinker/locations/connectors@2022-11-01-preview)
* **Resource**: Microsoft.ServiceLinker/locations/connectors
* **ApiVersion**: 2022-11-01-preview
* **Output**: [ValidateOperationResult](#validateoperationresult)

## Function validateLinker (Microsoft.ServiceLinker/linkers@2022-11-01-preview)
* **Resource**: Microsoft.ServiceLinker/linkers
* **ApiVersion**: 2022-11-01-preview
* **Output**: [ValidateOperationResult](#validateoperationresult)

## AuthInfoBase
* **Discriminator**: authType

### Base Properties

### AccessKeyInfoBase
#### Properties
* **authType**: 'accessKey' (Required): The authentication type.
* **permissions**: ('Listen' | 'Manage' | 'Read' | 'Send' | 'Write' | string)[]: Permissions of the accessKey. `Read` and `Write` are for Azure Cosmos DB and Azure App Configuration, `Listen`, `Send` and `Manage` are for Azure Event Hub and Azure Service Bus.

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
* **deleteOrUpdateBehavior**: 'Default' | 'ForcedCleanup' | string: Indicates whether to clean up previous operation when Linker is updating or deleting
* **principalId**: string (Required): Principal Id for servicePrincipal auth.
* **roles**: string[]: Optional, this value specifies the Azure roles to be assigned. Automatically

### ServicePrincipalSecretAuthInfo
#### Properties
* **authType**: 'servicePrincipalSecret' (Required): The authentication type.
* **clientId**: string (Required): ServicePrincipal application clientId for servicePrincipal auth.
* **deleteOrUpdateBehavior**: 'Default' | 'ForcedCleanup' | string: Indicates whether to clean up previous operation when Linker is updating or deleting
* **principalId**: string (Required): Principal Id for servicePrincipal auth.
* **roles**: string[]: Optional, this value specifies the Azure roles to be assigned. Automatically
* **secret**: string {sensitive} (Required): Secret for servicePrincipal auth.
* **userName**: string: Username created in the database which is mapped to a user in AAD.

### SystemAssignedIdentityAuthInfo
#### Properties
* **authType**: 'systemAssignedIdentity' (Required): The authentication type.
* **deleteOrUpdateBehavior**: 'Default' | 'ForcedCleanup' | string: Indicates whether to clean up previous operation when Linker is updating or deleting
* **roles**: string[]: Optional, this value specifies the Azure role to be assigned
* **userName**: string: Username created in the database which is mapped to a user in AAD.

### UserAccountAuthInfo
#### Properties
* **authType**: 'userAccount' (Required): The authentication type.
* **deleteOrUpdateBehavior**: 'Default' | 'ForcedCleanup' | string: Indicates whether to clean up previous operation when Linker is updating or deleting
* **principalId**: string: Principal Id for user account.
* **roles**: string[]: Optional, this value specifies the Azure roles to be assigned. Automatically
* **userName**: string: Username created in the database which is mapped to a user in AAD.

### UserAssignedIdentityAuthInfo
#### Properties
* **authType**: 'userAssignedIdentity' (Required): The authentication type.
* **clientId**: string: Client Id for userAssignedIdentity.
* **deleteOrUpdateBehavior**: 'Default' | 'ForcedCleanup' | string: Indicates whether to clean up previous operation when Linker is updating or deleting
* **roles**: string[]: Optional, this value specifies the Azure role to be assigned
* **subscriptionId**: string: Subscription id for userAssignedIdentity.
* **userName**: string: Username created in the database which is mapped to a user in AAD.


## AzureResourcePropertiesBase
* **Discriminator**: type

### Base Properties

### AzureKeyVaultProperties
#### Properties
* **connectAsKubernetesCsiDriver**: bool: True if connect via Kubernetes CSI Driver.
* **type**: 'KeyVault' (Required): The azure resource type.


## ConfigurationInfo
### Properties
* **action**: 'Internal' | 'enable' | 'optOut' | string: Optional, indicate whether to apply configurations on source application. If enable, generate configurations and applied to the source application. Default is enable. If optOut, no configuration change will be made on source.
* **additionalConfigurations**: [ConfigurationInfoAdditionalConfigurations](#configurationinfoadditionalconfigurations): A dictionary of additional configurations to be added. Service will auto generate a set of basic configurations and this property is to full fill more customized configurations
* **customizedKeys**: [ConfigurationInfoCustomizedKeys](#configurationinfocustomizedkeys): Optional. A dictionary of default key name and customized key name mapping. If not specified, default key name will be used for generate configurations
* **daprProperties**: [DaprProperties](#daprproperties): Indicates some additional properties for dapr client type
* **deleteOrUpdateBehavior**: 'Default' | 'ForcedCleanup' | string: Indicates whether to clean up previous operation when Linker is updating or deleting

## ConfigurationInfoAdditionalConfigurations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConfigurationInfoCustomizedKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConfigurationResult
### Properties
* **configurations**: [SourceConfiguration](#sourceconfiguration)[]: The configuration properties for source resource.

## DaprMetadata
### Properties
* **name**: string: Metadata property name.
* **secretRef**: string: The secret name where dapr could get value
* **value**: string: Metadata property value.

## DaprProperties
### Properties
* **componentType**: string: The dapr component type
* **metadata**: [DaprMetadata](#daprmetadata)[]: Additional dapr metadata
* **scopes**: string[]: The dapr component scopes
* **secretStoreComponent**: string: The name of a secret store dapr to retrieve secret
* **version**: string: The dapr component version

## DryrunOperationPreview
### Properties
* **action**: string: The action defined by RBAC, refer https://docs.microsoft.com/azure/role-based-access-control/role-definitions#actions-format
* **description**: string: The description of the operation
* **name**: string: The operation name
* **operationType**: 'configAuth' | 'configConnection' | 'configNetwork' | string: The operation type
* **scope**: string: The scope of the operation, refer https://docs.microsoft.com/azure/role-based-access-control/scope-overview

## DryrunParameters
* **Discriminator**: actionName

### Base Properties

### CreateOrUpdateDryrunParameters
#### Properties
* **actionName**: 'createOrUpdate' (Required): The name of action for you dryrun job.
* **authInfo**: [AuthInfoBase](#authinfobase): The authentication type.
* **clientType**: 'dapr' | 'django' | 'dotnet' | 'go' | 'java' | 'kafka-springBoot' | 'nodejs' | 'none' | 'php' | 'python' | 'ruby' | 'springBoot' | string: The application client type
* **configurationInfo**: [ConfigurationInfo](#configurationinfo): The connection information consumed by applications, including secrets, connection strings.
* **provisioningState**: string (ReadOnly): The provisioning state.
* **publicNetworkSolution**: [PublicNetworkSolution](#publicnetworksolution): The network solution.
* **scope**: string: connection scope in source service.
* **secretStore**: [SecretStore](#secretstore): An option to store secret value in secure place
* **targetService**: [TargetServiceBase](#targetservicebase): The target service properties
* **vNetSolution**: [VNetSolution](#vnetsolution): The VNet solution.


## DryrunPrerequisiteResult
* **Discriminator**: type

### Base Properties

### BasicErrorDryrunPrerequisiteResult
#### Properties
* **code**: string: The error code.
* **message**: string: The error message.
* **type**: 'basicError' (Required): The type of dryrun result.

### PermissionsMissingDryrunPrerequisiteResult
#### Properties
* **permissions**: string[]: The permission list
* **recommendedRole**: string: The recommended role to resolve permissions missing
* **scope**: string: The permission scope
* **type**: 'permissionsMissing' (Required): The type of dryrun result.


## DryrunProperties
### Properties
* **operationPreviews**: [DryrunOperationPreview](#dryrunoperationpreview)[] (ReadOnly): the preview of the operations for creation
* **parameters**: [DryrunParameters](#dryrunparameters): The parameters of the dryrun
* **prerequisiteResults**: [DryrunPrerequisiteResult](#dryrunprerequisiteresult)[] (ReadOnly): the result of the dryrun
* **provisioningState**: string (ReadOnly): The provisioning state.

## FirewallRules
### Properties
* **azureServices**: 'false' | 'true' | string: Allow Azure services to access the target service if true.
* **callerClientIP**: 'false' | 'true' | string: Allow caller client IP to access the target service if true. the property is used when connecting local application to target service.
* **ipRanges**: string[]: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account.

## LinkerProperties
### Properties
* **authInfo**: [AuthInfoBase](#authinfobase): The authentication type.
* **clientType**: 'dapr' | 'django' | 'dotnet' | 'go' | 'java' | 'kafka-springBoot' | 'nodejs' | 'none' | 'php' | 'python' | 'ruby' | 'springBoot' | string: The application client type
* **configurationInfo**: [ConfigurationInfo](#configurationinfo): The connection information consumed by applications, including secrets, connection strings.
* **provisioningState**: string (ReadOnly): The provisioning state.
* **publicNetworkSolution**: [PublicNetworkSolution](#publicnetworksolution): The network solution.
* **scope**: string: connection scope in source service.
* **secretStore**: [SecretStore](#secretstore): An option to store secret value in secure place
* **targetService**: [TargetServiceBase](#targetservicebase): The target service properties
* **vNetSolution**: [VNetSolution](#vnetsolution): The VNet solution.

## PublicNetworkSolution
### Properties
* **action**: 'Internal' | 'enable' | 'optOut' | string: Optional. Indicates public network solution. If enable, enable public network access of target service with best try. Default is enable. If optOut, opt out public network access configuration.
* **deleteOrUpdateBehavior**: 'Default' | 'ForcedCleanup' | string: Indicates whether to clean up previous operation(such as firewall rules) when Linker is updating or deleting
* **firewallRules**: [FirewallRules](#firewallrules): Describe firewall rules of target service to make sure source application could connect to the target.

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
* **keyVaultSecretName**: string: The key vault secret name to store secret, only valid when storing one secret

## SourceConfiguration
### Properties
* **name**: string: The name of setting.
* **value**: string: The value of setting

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

### SelfHostedServer
#### Properties
* **endpoint**: string: The endpoint of service.
* **type**: 'SelfHostedServer' (Required): The target service type.


## ValidateOperationResult
### Properties
* **properties**: [ValidateResult](#validateresult): The validation result detail.
* **resourceId**: string: Validated Linker id.
* **status**: string: Validation operation status.

## ValidateResult
### Properties
* **authType**: 'accessKey' | 'secret' | 'servicePrincipalCertificate' | 'servicePrincipalSecret' | 'systemAssignedIdentity' | 'userAccount' | 'userAssignedIdentity' | string: The authentication type.
* **isConnectionAvailable**: bool: A boolean value indicating whether the connection is available or not
* **linkerName**: string: The linker name.
* **reportEndTimeUtc**: string: The end time of the validation report.
* **reportStartTimeUtc**: string: The start time of the validation report.
* **sourceId**: string: The resource id of the Linker source application.
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
* **deleteOrUpdateBehavior**: 'Default' | 'ForcedCleanup' | string: Indicates whether to clean up previous operation when Linker is updating or deleting
* **type**: 'privateLink' | 'serviceEndpoint' | string: Type of VNet solution.

