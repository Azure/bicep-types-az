# Microsoft.Web @ 2016-03-01

## Resource Microsoft.Web/certificates@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/publishingUsers@2016-03-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: UserProperties
* **type**: 'Microsoft.Web/publishingUsers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sourcecontrols@2016-03-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SourceControlProperties
* **type**: 'Microsoft.Web/sourcecontrols' (ReadOnly, DeployTimeConstant)

## CertificateProperties
### Properties
* **cerBlob**: any (ReadOnly)
* **expirationDate**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **geoRegion**: string (ReadOnly)
* **hostingEnvironmentProfile**: HostingEnvironmentProfile (ReadOnly)
* **hostNames**: string[]
* **issueDate**: string (ReadOnly)
* **issuer**: string (ReadOnly)
* **keyVaultId**: string
* **keyVaultSecretName**: string
* **keyVaultSecretStatus**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly)
* **password**: string (Required)
* **pfxBlob**: any
* **publicKeyHash**: string (ReadOnly)
* **selfLink**: string (ReadOnly)
* **serverFarmId**: string
* **siteName**: string (ReadOnly)
* **subjectName**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **valid**: bool (ReadOnly)

## HostingEnvironmentProfile
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserProperties
### Properties
* **name**: string
* **publishingPassword**: string
* **publishingPasswordHash**: string
* **publishingPasswordHashSalt**: string
* **publishingUserName**: string (Required)

## SourceControlProperties
### Properties
* **expirationTime**: string
* **name**: string
* **refreshToken**: string
* **token**: string
* **tokenSecret**: string

