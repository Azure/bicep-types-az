# Microsoft.ConfidentialLedger @ 2020-12-01-preview

## Resource Microsoft.ConfidentialLedger/ledgers@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LedgerProperties](#ledgerproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Tags](#tags)
* **type**: 'Microsoft.ConfidentialLedger/ledgers' (ReadOnly, DeployTimeConstant)

## LedgerProperties
### Properties
* **aadBasedSecurityPrincipals**: [AADBasedSecurityPrincipal](#aadbasedsecurityprincipal)[]
* **certBasedSecurityPrincipals**: [CertBasedSecurityPrincipal](#certbasedsecurityprincipal)[]
* **identityServiceUri**: string (ReadOnly)
* **ledgerInternalNamespace**: string (ReadOnly)
* **ledgerName**: string (ReadOnly)
* **ledgerStorageAccount**: string
* **ledgerType**: 'Private' | 'Public' | 'Unknown'
* **ledgerUri**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)

## AADBasedSecurityPrincipal
### Properties
* **ledgerRoleName**: 'Administrator' | 'Contributor' | 'Reader'
* **principalId**: string
* **tenantId**: string

## CertBasedSecurityPrincipal
### Properties
* **cert**: string
* **ledgerRoleName**: 'Administrator' | 'Contributor' | 'Reader'

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

