# Microsoft.ConfidentialLedger @ 2020-12-01-preview

## Resource Microsoft.ConfidentialLedger/ledgers@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LedgerProperties
* **systemData**: systemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ConfidentialLedger/ledgers' (ReadOnly, DeployTimeConstant)

## LedgerProperties
### Properties
* **certUsers**: ConfidentialLedgerCertUser[]
* **identityServiceUri**: string (ReadOnly)
* **ledgerInternalNamespace**: string (ReadOnly)
* **ledgerName**: string (ReadOnly)
* **ledgerStorageAccount**: string
* **ledgerType**: 'Private' | 'Public' | 'Unknown'
* **ledgerUri**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)

## ConfidentialLedgerCertUser
### Properties
* **cert**: string

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

