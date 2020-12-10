# Microsoft.CertificateRegistration @ 2019-08-01

## Resource Microsoft.CertificateRegistration/certificateOrders@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:2_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.CertificateRegistration/certificateOrders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CertificateRegistration/certificateOrders/certificates@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AppServiceCertificate
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.CertificateRegistration/certificateOrders/certificates' (ReadOnly, DeployTimeConstant)

## schemas:2_properties
### Properties
* **appServiceCertificateNotRenewableReasons**: 'ExpirationNotInRenewalTimeRange' | 'RegistrationStatusNotSupportedForRenewal' | 'SubscriptionNotActive'[] (ReadOnly)
* **autoRenew**: bool
* **certificates**: Dictionary<string,AppServiceCertificate>
* **csr**: string
* **distinguishedName**: string
* **domainVerificationToken**: string (ReadOnly)
* **expirationTime**: string (ReadOnly)
* **intermediate**: CertificateDetails (ReadOnly)
* **isPrivateKeyExternal**: bool (ReadOnly)
* **keySize**: int
* **lastCertificateIssuanceTime**: string (ReadOnly)
* **nextAutoRenewalTimeStamp**: string (ReadOnly)
* **productType**: 'StandardDomainValidatedSsl' | 'StandardDomainValidatedWildCardSsl' (Required)
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **root**: CertificateDetails (ReadOnly)
* **serialNumber**: string (ReadOnly)
* **signedCertificate**: CertificateDetails (ReadOnly)
* **status**: 'Canceled' | 'Denied' | 'Expired' | 'Issued' | 'NotSubmitted' | 'Pendingissuance' | 'PendingRekey' | 'Pendingrevocation' | 'Revoked' | 'Unused' (ReadOnly)
* **validityInYears**: int

## Dictionary<string,AppServiceCertificate>
### Additional Properties
* **Additional Properties Type**: AppServiceCertificate

## AppServiceCertificate
### Properties
* **keyVaultId**: string
* **keyVaultSecretName**: string
* **provisioningState**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly)

## CertificateDetails
### Properties
* **issuer**: string (ReadOnly)
* **notAfter**: string (ReadOnly)
* **notBefore**: string (ReadOnly)
* **rawData**: string (ReadOnly)
* **serialNumber**: string (ReadOnly)
* **signatureAlgorithm**: string (ReadOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **version**: int (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

