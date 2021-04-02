# Microsoft.CertificateRegistration @ 2015-08-01

## Resource Microsoft.CertificateRegistration/certificateOrders@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:2_properties](#schemas2properties): AppServiceCertificateOrder resource specific properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.CertificateRegistration/certificateOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CertificateRegistration/certificateOrders/certificates@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServiceCertificate](#appservicecertificate): Key Vault container for a certificate that is purchased through Azure.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.CertificateRegistration/certificateOrders/certificates' (ReadOnly, DeployTimeConstant): The resource type

## schemas:2_properties
### Properties
* **appServiceCertificateNotRenewableReasons**: 'ExpirationNotInRenewalTimeRange' | 'RegistrationStatusNotSupportedForRenewal' | 'SubscriptionNotActive'[] (ReadOnly): Reasons why App Service Certificate is not renewable at the current moment.
* **autoRenew**: bool: <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>.
* **certificates**: [Dictionary<string,AppServiceCertificate>](#dictionarystringappservicecertificate): State of the Key Vault secret.
* **csr**: string: Last CSR that was created for this order.
* **distinguishedName**: string: Certificate distinguished name.
* **domainVerificationToken**: string (ReadOnly): Domain verification token.
* **expirationTime**: string (ReadOnly): Certificate expiration time.
* **intermediate**: [CertificateDetails](#certificatedetails) (ReadOnly): SSL certificate details.
* **isPrivateKeyExternal**: bool (ReadOnly): <code>true</code> if private key is external; otherwise, <code>false</code>.
* **keySize**: int: Certificate key size.
* **lastCertificateIssuanceTime**: string (ReadOnly): Certificate last issuance time.
* **nextAutoRenewalTimeStamp**: string (ReadOnly): Time stamp when the certificate would be auto renewed next
* **productType**: 'StandardDomainValidatedSsl' | 'StandardDomainValidatedWildCardSsl' (Required): Certificate product type. Possible values include: 'StandardDomainValidatedSsl', 'StandardDomainValidatedWildCardSsl'
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Status of certificate order. Possible values include: 'Succeeded', 'Failed', 'Canceled', 'InProgress', 'Deleting'
* **root**: [CertificateDetails](#certificatedetails) (ReadOnly): SSL certificate details.
* **serialNumber**: string (ReadOnly): Current serial number of the certificate.
* **signedCertificate**: [CertificateDetails](#certificatedetails) (ReadOnly): SSL certificate details.
* **status**: 'Canceled' | 'Denied' | 'Expired' | 'Issued' | 'NotSubmitted' | 'Pendingissuance' | 'PendingRekey' | 'Pendingrevocation' | 'Revoked' | 'Unused' (ReadOnly): Current order status. Possible values include: 'Pendingissuance', 'Issued', 'Revoked', 'Canceled', 'Denied', 'Pendingrevocation', 'PendingRekey', 'Unused', 'Expired', 'NotSubmitted'
* **validityInYears**: int: Duration in years (must be between 1 and 3).

## Dictionary<string,AppServiceCertificate>
### Properties
### Additional Properties
* **Additional Properties Type**: [AppServiceCertificate](#appservicecertificate)

## AppServiceCertificate
### Properties
* **keyVaultId**: string: Key Vault resource Id.
* **keyVaultSecretName**: string: Key Vault secret name.
* **provisioningState**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly): Status of the Key Vault secret. Possible values include: 'Initialized', 'WaitingOnCertificateOrder', 'Succeeded', 'CertificateOrderFailed', 'OperationNotPermittedOnKeyVault', 'AzureServiceUnauthorizedToAccessKeyVault', 'KeyVaultDoesNotExist', 'KeyVaultSecretDoesNotExist', 'UnknownError', 'ExternalPrivateKey', 'Unknown'

## CertificateDetails
### Properties
* **issuer**: string (ReadOnly): Certificate Issuer.
* **notAfter**: string (ReadOnly): Date Certificate is valid to.
* **notBefore**: string (ReadOnly): Date Certificate is valid from.
* **rawData**: string (ReadOnly): Raw certificate data.
* **serialNumber**: string (ReadOnly): Certificate Serial Number.
* **signatureAlgorithm**: string (ReadOnly): Certificate Signature algorithm.
* **subject**: string (ReadOnly): Certificate Subject.
* **thumbprint**: string (ReadOnly): Certificate Thumbprint.
* **version**: int (ReadOnly): Certificate Version.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

