# Microsoft.CertificateRegistration @ 2015-08-01

## Resource Microsoft.CertificateRegistration/certificateOrders@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateOrderProperties](#certificateorderproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.CertificateRegistration/certificateOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CertificateRegistration/certificateOrders/certificates@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateOrderCertificateProperties](#certificateordercertificateproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.CertificateRegistration/certificateOrders/certificates' (ReadOnly, DeployTimeConstant): The resource type

## CertificateDetails
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [CertificateDetailsProperties](#certificatedetailsproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## CertificateDetailsProperties
### Properties
* **issuer**: string: Issuer
* **notAfter**: string: Valid to
* **notBefore**: string: Valid from
* **rawData**: string: Raw certificate data
* **serialNumber**: string: Serial Number
* **signatureAlgorithm**: string: Signature Algorithm
* **subject**: string: Subject
* **thumbprint**: string: Thumbprint
* **version**: int: Version

## CertificateOrderCertificate
### Properties
* **id**: string: Resource Id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string: Resource Name
* **properties**: [CertificateOrderCertificateProperties](#certificateordercertificateproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string: Resource type

## CertificateOrderCertificateProperties
### Properties
* **keyVaultId**: string: Key Vault Csm resource Id
* **keyVaultSecretName**: string: Key Vault secret name
* **provisioningState**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder': Status of the Key Vault secret

## CertificateOrderProperties
### Properties
* **autoRenew**: bool: Auto renew
* **certificates**: [CertificateOrderPropertiesCertificates](#certificateorderpropertiescertificates): State of the Key Vault secret
* **csr**: string: Last CSR that was created for this order
* **distinguishedName**: string: Certificate distinguished name
* **domainVerificationToken**: string: Domain Verification Token
* **expirationTime**: string: Certificate expiration time
* **intermediate**: [CertificateDetails](#certificatedetails): Intermediate certificate
* **keySize**: int: Certificate Key Size
* **lastCertificateIssuanceTime**: string: Certificate last issuance time
* **productType**: 'StandardDomainValidatedSsl' | 'StandardDomainValidatedWildCardSsl': Certificate product type
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded': Status of certificate order
* **root**: [CertificateDetails](#certificatedetails): Root certificate
* **serialNumber**: string: Current serial number of the certificate
* **signedCertificate**: [CertificateDetails](#certificatedetails): Signed certificate
* **status**: 'Canceled' | 'Denied' | 'Expired' | 'Issued' | 'NotSubmitted' | 'PendingRekey' | 'Pendingissuance' | 'Pendingrevocation' | 'Revoked' | 'Unused': Current order status
* **validityInYears**: int: Duration in years (must be between 1 and 3)

## CertificateOrderPropertiesCertificates
### Properties
### Additional Properties
* **Additional Properties Type**: [CertificateOrderCertificate](#certificateordercertificate)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

