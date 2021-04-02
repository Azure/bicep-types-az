# Microsoft.Web @ 2016-03-01

## Resource Microsoft.Web/certificates@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:0_properties](#schemas0properties): Certificate resource specific properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/publishingUsers@2016-03-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:67_properties](#schemas67properties): User resource specific properties
* **type**: 'Microsoft.Web/publishingUsers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sourcecontrols@2016-03-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:124_properties](#schemas124properties): SourceControl resource specific properties
* **type**: 'Microsoft.Web/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## schemas:0_properties
### Properties
* **cerBlob**: array (ReadOnly): Raw bytes of .cer file
* **expirationDate**: string (ReadOnly): Certificate expiration date.
* **friendlyName**: string (ReadOnly): Friendly name of the certificate.
* **geoRegion**: string (ReadOnly): Region of the certificate.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile) (ReadOnly): Specification for an App Service Environment to use for this resource.
* **hostNames**: string[]: Host names the certificate applies to.
* **issueDate**: string (ReadOnly): Certificate issue Date.
* **issuer**: string (ReadOnly): Certificate issuer.
* **keyVaultId**: string: Key Vault Csm resource Id.
* **keyVaultSecretName**: string: Key Vault secret name.
* **keyVaultSecretStatus**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly): Status of the Key Vault secret.
* **password**: string (Required): Certificate password.
* **pfxBlob**: array: Pfx blob.
* **publicKeyHash**: string (ReadOnly): Public key hash.
* **selfLink**: string (ReadOnly): Self link.
* **serverFarmId**: string: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
* **siteName**: string (ReadOnly): App name.
* **subjectName**: string (ReadOnly): Subject name of the certificate.
* **thumbprint**: string (ReadOnly): Certificate thumbprint.
* **valid**: bool (ReadOnly): Is the certificate valid?.

## HostingEnvironmentProfile
### Properties
* **id**: string: Resource ID of the App Service Environment.
* **name**: string (ReadOnly): Name of the App Service Environment.
* **type**: string (ReadOnly): Resource type of the App Service Environment.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:67_properties
### Properties
* **name**: string: Username
* **publishingPassword**: string: Password used for publishing.
* **publishingPasswordHash**: string: Password hash used for publishing.
* **publishingPasswordHashSalt**: string: Password hash salt used for publishing.
* **publishingUserName**: string (Required): Username used for publishing.

## schemas:124_properties
### Properties
* **expirationTime**: string: OAuth token expiration.
* **name**: string: Name or source control type.
* **refreshToken**: string: OAuth refresh token.
* **token**: string: OAuth access token.
* **tokenSecret**: string: OAuth access token secret.

