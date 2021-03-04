# Microsoft.AzureStackHCI @ 2020-10-01

## Resource Microsoft.AzureStackHCI/clusters@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.AzureStackHCI/clusters' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **aadClientId**: string (Required)
* **aadTenantId**: string (Required)
* **billingModel**: string (ReadOnly)
* **cloudId**: string (ReadOnly)
* **lastBillingTimestamp**: string (ReadOnly)
* **lastSyncTimestamp**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **registrationTimestamp**: string (ReadOnly)
* **reportedProperties**: ClusterReportedProperties
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'NotConnectedRecently' | 'NotYetRegistered' (ReadOnly)
* **trialDaysRemaining**: int (ReadOnly)

## ClusterReportedProperties
### Properties
* **clusterId**: string (ReadOnly)
* **clusterName**: string (ReadOnly)
* **clusterVersion**: string (ReadOnly)
* **lastUpdated**: string (ReadOnly)
* **nodes**: ClusterNode[] (ReadOnly)

## ClusterNode
### Properties
* **coreCount**: int (ReadOnly)
* **id**: int (ReadOnly)
* **manufacturer**: string (ReadOnly)
* **memoryInGiB**: int (ReadOnly)
* **model**: string (ReadOnly)
* **name**: string (ReadOnly)
* **osName**: string (ReadOnly)
* **osVersion**: string (ReadOnly)
* **serialNumber**: string (ReadOnly)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

