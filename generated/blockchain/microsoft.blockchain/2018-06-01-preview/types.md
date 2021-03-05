# Microsoft.Blockchain @ 2018-06-01-preview

## Resource Microsoft.Blockchain/blockchainMembers@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BlockchainMemberProperties
* **sku**: Sku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Blockchain/blockchainMembers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Blockchain/blockchainMembers/transactionNodes@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: TransactionNodeProperties
* **type**: 'Microsoft.Blockchain/blockchainMembers/transactionNodes' (ReadOnly, DeployTimeConstant)

## BlockchainMemberProperties
### Properties
* **consortium**: string
* **consortiumManagementAccountAddress**: string (ReadOnly)
* **consortiumManagementAccountPassword**: string
* **consortiumMemberDisplayName**: string
* **consortiumRole**: string
* **dns**: string (ReadOnly)
* **firewallRules**: FirewallRule[]
* **password**: string
* **protocol**: 'Corda' | 'NotSpecified' | 'Parity' | 'Quorum'
* **provisioningState**: 'Deleting' | 'Failed' | 'NotSpecified' | 'Stale' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicKey**: string (ReadOnly)
* **rootContractAddress**: string (ReadOnly)
* **userName**: string (ReadOnly)
* **validatorNodesSku**: BlockchainMemberNodesSku

## FirewallRule
### Properties
* **endIpAddress**: string
* **ruleName**: string
* **startIpAddress**: string

## BlockchainMemberNodesSku
### Properties
* **capacity**: int

## Sku
### Properties
* **name**: string
* **tier**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TransactionNodeProperties
### Properties
* **dns**: string (ReadOnly)
* **firewallRules**: FirewallRule[]
* **password**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicKey**: string (ReadOnly)
* **userName**: string (ReadOnly)

