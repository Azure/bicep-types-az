# Microsoft.CertificateRegistration @ 2018-02-01

## Resource Microsoft.CertificateRegistration/certificateOrders@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AppServiceCertificateOrderProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.CertificateRegistration/certificateOrders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CertificateRegistration/certificateOrders/certificates@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AppServiceCertificate
* **tags**: ResourceTags
* **type**: 'Microsoft.CertificateRegistration/certificateOrders/certificates' (ReadOnly, DeployTimeConstant)

## AppServiceCertificateOrderProperties
### Properties
* **appServiceCertificateNotRenewableReasons**: 'ExpirationNotInRenewalTimeRange' | 'RegistrationStatusNotSupportedForRenewal' | 'SubscriptionNotActive'[] (ReadOnly)
* **autoRenew**: bool
* **certificates**: AppServiceCertificateOrderPropertiesCertificates
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
* **status**: 'Canceled' | 'Denied' | 'Expired' | 'Issued' | 'NotSubmitted' | 'PendingRekey' | 'Pendingissuance' | 'Pendingrevocation' | 'Revoked' | 'Unused' (ReadOnly)
* **validityInYears**: int

## AppServiceCertificateOrderPropertiesCertificates
### Properties
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

