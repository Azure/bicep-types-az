# Microsoft.ConfidentialLedger @ 2024-09-19-preview

## Resource Microsoft.ConfidentialLedger/ledgers@2024-09-19-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-19-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[^-0-9][A-Za-z0-9-]{1,33}[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LedgerProperties](#ledgerproperties): Properties of Confidential Ledger Resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ConfidentialLedger/ledgers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConfidentialLedger/managedCCFs@2024-09-19-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-19-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedCCFProperties](#managedccfproperties): Properties of Managed CCF Resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ConfidentialLedger/managedCCFs' (ReadOnly, DeployTimeConstant): The resource type

## Function backup (Microsoft.ConfidentialLedger/ledgers@2024-09-19-preview)
* **Resource**: Microsoft.ConfidentialLedger/ledgers
* **ApiVersion**: 2024-09-19-preview
* **Input**: [ConfidentialLedgerBackup](#confidentialledgerbackup)
* **Output**: [ConfidentialLedgerBackupResponse](#confidentialledgerbackupresponse)

## Function backup (Microsoft.ConfidentialLedger/managedCCFs@2024-09-19-preview)
* **Resource**: Microsoft.ConfidentialLedger/managedCCFs
* **ApiVersion**: 2024-09-19-preview
* **Input**: [ManagedCCFBackup](#managedccfbackup)
* **Output**: [ManagedCCFBackupResponse](#managedccfbackupresponse)

## Function restore (Microsoft.ConfidentialLedger/ledgers@2024-09-19-preview)
* **Resource**: Microsoft.ConfidentialLedger/ledgers
* **ApiVersion**: 2024-09-19-preview
* **Input**: [ConfidentialLedgerRestore](#confidentialledgerrestore)
* **Output**: [ConfidentialLedgerRestoreResponse](#confidentialledgerrestoreresponse)

## Function restore (Microsoft.ConfidentialLedger/managedCCFs@2024-09-19-preview)
* **Resource**: Microsoft.ConfidentialLedger/managedCCFs
* **ApiVersion**: 2024-09-19-preview
* **Input**: [ManagedCCFRestore](#managedccfrestore)
* **Output**: [ManagedCCFRestoreResponse](#managedccfrestoreresponse)

## AADBasedSecurityPrincipal
### Properties
* **ledgerRoleName**: 'Administrator' | 'Contributor' | 'Reader' | string: LedgerRole associated with the Security Principal of Ledger
* **principalId**: string: UUID/GUID based Principal Id of the Security Principal
* **tenantId**: string: UUID/GUID based Tenant Id of the Security Principal

## CertBasedSecurityPrincipal
### Properties
* **cert**: string: Public key of the user cert (.pem or .cer)
* **ledgerRoleName**: 'Administrator' | 'Contributor' | 'Reader' | string: LedgerRole associated with the Security Principal of Ledger

## ConfidentialLedgerBackup
### Properties
* **restoreRegion**: string: The region where the backup of the ledger will eventually be restored to.
* **uri**: string {sensitive} (Required): SAS URI used to access the backup Fileshare.

## ConfidentialLedgerBackupResponse
### Properties
* **message**: string (ReadOnly): Response body stating if the ledger is being backed up.

## ConfidentialLedgerRestore
### Properties
* **fileShareName**: string (Required): Fileshare where the ledger backup is stored.
* **restoreRegion**: string (Required): The region the ledger is being restored to.
* **uri**: string {sensitive} (Required): SAS URI used to access the backup fileshare.

## ConfidentialLedgerRestoreResponse
### Properties
* **message**: string (ReadOnly): Response body stating if the ledger is being restored.

## DeploymentType
### Properties
* **appSourceUri**: string: Source Uri containing ManagedCCF code
* **languageRuntime**: 'CPP' | 'JS' | string: Unique name for the Managed CCF.

## LedgerProperties
### Properties
* **aadBasedSecurityPrincipals**: [AADBasedSecurityPrincipal](#aadbasedsecurityprincipal)[]: Array of all AAD based Security Principals.
* **applicationType**: 'CodeTransparency' | 'ConfidentialLedger' | string: Application type of the Confidential Ledger.
* **certBasedSecurityPrincipals**: [CertBasedSecurityPrincipal](#certbasedsecurityprincipal)[]: Array of all cert based Security Principals.
* **enclavePlatform**: 'AmdSevSnp' | 'IntelSgx' | string: Enclave platform of the Confidential Ledger.
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
* **workerThreads**: int: Number of additional threads processing incoming client requests in the enclave (modify with care!)
* **writeLBAddressPrefix**: string: Prefix for the write load balancer. Example: write

## ManagedCCFBackup
### Properties
* **restoreRegion**: string: The region where the backup of the managed CCF resource will eventually be restored to.
* **uri**: string {sensitive} (Required): SAS URI used to access the backup Fileshare.

## ManagedCCFBackupResponse
### Properties
* **message**: string (ReadOnly): Response body stating if the managed CCF resource is being backed up.

## ManagedCCFProperties
### Properties
* **appName**: string (ReadOnly): Unique name for the Managed CCF.
* **appUri**: string (ReadOnly): Endpoint for calling Managed CCF Service.
* **deploymentType**: [DeploymentType](#deploymenttype): Deployment Type of Managed CCF
* **enclavePlatform**: 'AmdSevSnp' | 'IntelSgx' | string: Enclave platform of Managed CCF.
* **identityServiceUri**: string (ReadOnly): Endpoint for accessing network identity.
* **memberIdentityCertificates**: [MemberIdentityCertificate](#memberidentitycertificate)[]: List of member identity certificates for  Managed CCF
* **nodeCount**: int: Number of CCF nodes in the Managed CCF.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of Managed CCF Resource
* **runningState**: 'Active' | 'Paused' | 'Pausing' | 'Resuming' | 'Unknown' | string: Object representing RunningState for Managed CCF.

## ManagedCCFRestore
### Properties
* **fileShareName**: string (Required): Fileshare where the managed CCF resource backup is stored.
* **restoreRegion**: string (Required): The region the managed CCF resource is being restored to.
* **uri**: string {sensitive} (Required): SAS URI used to access the backup Fileshare.

## ManagedCCFRestoreResponse
### Properties
* **message**: string (ReadOnly): Response body stating if the managed CCF resource is being restored.

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

