# Microsoft.CertificateRegistration @ 2020-10-01

## Resource Microsoft.CertificateRegistration/certificateOrders@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:2_properties](#schemas2properties): AppServiceCertificateOrder resource specific properties
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.CertificateRegistration/certificateOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CertificateRegistration/certificateOrders/certificates@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServiceCertificate](#appservicecertificate): Key Vault container for a certificate that is purchased through Azure.
* **systemData**: [systemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
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
* **productType**: 'StandardDomainValidatedSsl' | 'StandardDomainValidatedWildCardSsl' (Required): Certificate product type.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Status of certificate order.
* **root**: [CertificateDetails](#certificatedetails) (ReadOnly): SSL certificate details.
* **serialNumber**: string (ReadOnly): Current serial number of the certificate.
* **signedCertificate**: [CertificateDetails](#certificatedetails) (ReadOnly): SSL certificate details.
* **status**: 'Canceled' | 'Denied' | 'Expired' | 'Issued' | 'NotSubmitted' | 'Pendingissuance' | 'PendingRekey' | 'Pendingrevocation' | 'Revoked' | 'Unused' (ReadOnly): Current order status.
* **validityInYears**: int: Duration in years (must be between 1 and 3).

## Dictionary<string,AppServiceCertificate>
### Properties
### Additional Properties
* **Additional Properties Type**: [AppServiceCertificate](#appservicecertificate)

## AppServiceCertificate
### Properties
* **keyVaultId**: string: Key Vault resource Id.
* **keyVaultSecretName**: string: Key Vault secret name.
* **provisioningState**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly): Status of the Key Vault secret.

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

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

