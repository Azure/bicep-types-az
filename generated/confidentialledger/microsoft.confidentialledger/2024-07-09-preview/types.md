# Microsoft.ConfidentialLedger @ 2024-07-09-preview

## Resource Microsoft.ConfidentialLedger/ledgers@2024-07-09-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]"} (Required, DeployTimeConstant): The resource name
* **properties**: [LedgerProperties](#ledgerproperties): Properties of Confidential Ledger Resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ConfidentialLedger/ledgers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConfidentialLedger/managedCCFs@2024-07-09-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]"} (Required, DeployTimeConstant): The resource name
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
* **hostLevel**: string: CCF Property for the logging level for the untrusted host: Trace, Debug, Info, Fail, Fatal.
* **identityServiceUri**: string (ReadOnly): Endpoint for accessing network identity.
* **ledgerInternalNamespace**: string (ReadOnly): Internal namespace for the Ledger
* **ledgerName**: string (ReadOnly): Unique name for the Confidential Ledger.
* **ledgerSku**: 'Basic' | 'Standard' | 'Unknown' | string: SKU associated with the ledger
* **ledgerType**: 'Private' | 'Public' | 'Unknown' | string: Type of Confidential Ledger
* **ledgerUri**: string (ReadOnly): Endpoint for calling Ledger Service.
* **maxBodySizeInMb**: int: CCF Property for the maximum size of the http request body: 1MB, 5MB, 10MB.
* **nodeCount**: int: Number of CCF nodes in the ACC Ledger.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of Ledger Resource
* **runningState**: 'Active' | 'Paused' | 'Pausing' | 'Resuming' | 'Unknown' | string: Object representing RunningState for Ledger.
* **subjectName**: string: CCF Property for the subject name to include in the node certificate. Default: CN=CCF Node.

## ManagedCCFProperties
### Properties
* **appName**: string (ReadOnly): Unique name for the Managed CCF.
* **appUri**: string (ReadOnly): Endpoint for calling Managed CCF Service.
* **deploymentType**: [DeploymentType](#deploymenttype): Deployment Type of Managed CCF
* **identityServiceUri**: string (ReadOnly): Endpoint for accessing network identity.
* **memberIdentityCertificates**: [MemberIdentityCertificate](#memberidentitycertificate)[]: List of member identity certificates for  Managed CCF
* **nodeCount**: int: Number of CCF nodes in the Managed CCF.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of Managed CCF Resource
* **runningState**: 'Active' | 'Paused' | 'Pausing' | 'Resuming' | 'Unknown' | string: Object representing RunningState for Managed CCF.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

