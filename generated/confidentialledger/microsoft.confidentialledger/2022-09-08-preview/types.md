# Microsoft.ConfidentialLedger @ 2022-09-08-preview

## Resource Microsoft.ConfidentialLedger/ledgers@2022-09-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure location where the Confidential Ledger is running.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LedgerProperties](#ledgerproperties): Properties of Confidential Ledger Resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [Tags](#tags): Additional tags for Confidential Ledger
* **type**: 'Microsoft.ConfidentialLedger/ledgers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConfidentialLedger/managedCCFs@2022-09-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedCCFProperties](#managedccfproperties): Properties of Managed CCF Resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ConfidentialLedger/managedCCFs' (ReadOnly, DeployTimeConstant): The resource type

## AADBasedSecurityPrincipal
### Properties
* **ledgerRoleName**: 'Administrator' | 'Contributor' | 'Reader' | string: LedgerRole associated with the Security Principal of Ledger
* **principalId**: string: UUID/GUID based Principal Id of the Security Principal
* **tenantId**: string: UUID/GUID based Tenant Id of the Security Principal

## CertBasedSecurityPrincipal
### Properties
* **cert**: string: Public key of the user cert (.pem or .cer)
* **ledgerRoleName**: 'Administrator' | 'Contributor' | 'Reader' | string: LedgerRole associated with the Security Principal of Ledger

## DeploymentType
### Properties
* **appSourceUri**: string: Source Uri containing ManagedCCF code
* **languageRuntime**: 'CPP' | 'JS' | string: Unique name for the Managed CCF.

## LedgerProperties
### Properties
* **aadBasedSecurityPrincipals**: [AADBasedSecurityPrincipal](#aadbasedsecurityprincipal)[]: Array of all AAD based Security Principals.
* **certBasedSecurityPrincipals**: [CertBasedSecurityPrincipal](#certbasedsecurityprincipal)[]: Array of all cert based Security Principals.
* **identityServiceUri**: string (ReadOnly): Endpoint for accessing network identity.
* **ledgerInternalNamespace**: string (ReadOnly): Internal namespace for the Ledger
* **ledgerName**: string (ReadOnly): Unique name for the Confidential Ledger.
* **ledgerType**: 'Private' | 'Public' | 'Unknown' | string: Type of Confidential Ledger
* **ledgerUri**: string (ReadOnly): Endpoint for calling Ledger Service.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of Ledger Resource

## ManagedCCFProperties
### Properties
* **appName**: string (ReadOnly): Unique name for the Managed CCF.
* **appUri**: string (ReadOnly): Endpoint for calling Managed CCF Service.
* **deploymentType**: [DeploymentType](#deploymenttype): Deployment Type of Managed CCF
* **identityServiceUri**: string (ReadOnly): Endpoint for accessing network identity.
* **memberIdentityCertificates**: [MemberIdentityCertificate](#memberidentitycertificate)[]: List of member identity certificates for  Managed CCF
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of Ledger Resource

## MemberIdentityCertificate
### Properties
* **certificate**: string: Member Identity Certificate
* **encryptionkey**: string: Member Identity Certificate Encryption Key
* **tags**: any: Anything

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

