# Microsoft.CodeSigning @ 2024-09-30-preview

## Resource Microsoft.CodeSigning/codeSigningAccounts@2024-09-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?=.{3,24}$)[^0-9][A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CodeSigningAccountProperties](#codesigningaccountproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.CodeSigning/codeSigningAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CodeSigning/codeSigningAccounts/certificateProfiles@2024-09-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(?=.{5,100}$)[^0-9][A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProfileProperties](#certificateprofileproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CodeSigning/codeSigningAccounts/certificateProfiles' (ReadOnly, DeployTimeConstant): The resource type

## AccountSku
### Properties
* **name**: 'Basic' | 'Premium' | string (Required): Name of the SKU.

## Certificate
### Properties
* **createdDate**: string: Certificate created date.
* **enhancedKeyUsage**: string: Enhanced key usage of the certificate.
* **expiryDate**: string: Certificate expiry date.
* **revocation**: [Revocation](#revocation): Revocations history of a certificate.
* **serialNumber**: string: Serial number of the certificate.
* **status**: 'Active' | 'Expired' | 'Revoked' | string: Status of the certificate.
* **subjectName**: string: Subject name of the certificate.
* **thumbprint**: string: Thumbprint of the certificate.

## CertificateProfileProperties
### Properties
* **certificates**: [Certificate](#certificate)[] (ReadOnly): List of renewed certificates.
* **identityValidationId**: string (Required): Identity validation id used for the certificate subject name.
* **includeCity**: bool: Whether to include L in the certificate subject name. Applicable only for private trust, private trust ci profile types
* **includeCountry**: bool: Whether to include C in the certificate subject name. Applicable only for private trust, private trust ci profile types
* **includePostalCode**: bool: Whether to include PC in the certificate subject name.
* **includeState**: bool: Whether to include S in the certificate subject name. Applicable only for private trust, private trust ci profile types
* **includeStreetAddress**: bool: Whether to include STREET in the certificate subject name.
* **profileType**: 'PrivateTrust' | 'PrivateTrustCIPolicy' | 'PublicTrust' | 'PublicTrustTest' | 'VBSEnclave' | string (Required): Profile type of the certificate.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Status of the current operation on certificate profile.
* **status**: 'Active' | 'Disabled' | 'Suspended' | string (ReadOnly): Status of the certificate profile.

## CodeSigningAccountProperties
### Properties
* **accountUri**: string (ReadOnly): The URI of the artifact signing account which is used during signing files.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Status of the current operation on artifact signing account.
* **sku**: [AccountSku](#accountsku): SKU of the artifact signing account.

## Revocation
### Properties
* **effectiveAt**: string: The timestamp when the revocation is effective.
* **failureReason**: string: Reason for the revocation failure.
* **reason**: string: Reason for revocation.
* **remarks**: string: Remarks for the revocation.
* **requestedAt**: string: The timestamp when the revocation is requested.
* **status**: 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Status of the revocation.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

