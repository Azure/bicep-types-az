# Microsoft.ConfidentialLedger @ 2021-05-13-preview

## Resource Microsoft.ConfidentialLedger/ledgers@2021-05-13-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-13-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure location where the Confidential Ledger is running.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LedgerProperties](#ledgerproperties): Properties of Confidential Ledger Resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [Tags](#tags): Additional tags for Confidential Ledger
* **type**: 'Microsoft.ConfidentialLedger/ledgers' (ReadOnly, DeployTimeConstant): The resource type

## AADBasedSecurityPrincipal
### Properties
* **ledgerRoleName**: 'Administrator' | 'Contributor' | 'Reader' | string: LedgerRole associated with the Security Principal of Ledger
* **principalId**: string: UUID/GUID based Principal Id of the Security Principal
* **tenantId**: string: UUID/GUID based Tenant Id of the Security Principal

## CertBasedSecurityPrincipal
### Properties
* **cert**: string: Public key of the user cert (.pem or .cer)
* **ledgerRoleName**: 'Administrator' | 'Contributor' | 'Reader' | string: LedgerRole associated with the Security Principal of Ledger

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

