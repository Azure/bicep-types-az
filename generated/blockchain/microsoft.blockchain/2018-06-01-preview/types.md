# Microsoft.Blockchain @ 2018-06-01-preview

## Resource Microsoft.Blockchain/blockchainMembers@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The GEO location of the blockchain service.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BlockchainMemberProperties](#blockchainmemberproperties): Gets or sets the blockchain member properties.
* **sku**: [Sku](#sku): Gets or sets the blockchain member Sku.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the service which is a list of key value pairs that describes the resource.
* **type**: 'Microsoft.Blockchain/blockchainMembers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Blockchain/blockchainMembers/transactionNodes@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the transaction node location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TransactionNodeProperties](#transactionnodeproperties): Gets or sets the blockchain member properties.
* **type**: 'Microsoft.Blockchain/blockchainMembers/transactionNodes' (ReadOnly, DeployTimeConstant): The resource type

## Function listApiKeys (Microsoft.Blockchain/blockchainMembers@2018-06-01-preview)
* **Resource**: Microsoft.Blockchain/blockchainMembers
* **ApiVersion**: 2018-06-01-preview
* **Output**: [ApiKeyCollection](#apikeycollection)

## Function listApiKeys (Microsoft.Blockchain/blockchainMembers/transactionNodes@2018-06-01-preview)
* **Resource**: Microsoft.Blockchain/blockchainMembers/transactionNodes
* **ApiVersion**: 2018-06-01-preview
* **Output**: [ApiKeyCollection](#apikeycollection)

## Function listConsortiums (Microsoft.Blockchain/locations@2018-06-01-preview)
* **Resource**: Microsoft.Blockchain/locations
* **ApiVersion**: 2018-06-01-preview
* **Output**: [ConsortiumCollection](#consortiumcollection)

## ApiKey
### Properties
* **keyName**: string (ReadOnly): Gets or sets the API key name.
* **value**: string (ReadOnly): Gets or sets the API key value.

## ApiKeyCollection
### Properties
* **keys**: [ApiKey](#apikey)[] (ReadOnly): Gets or sets the collection of API key.

## ApiKeyCollection
### Properties
* **keys**: [ApiKey](#apikey)[] (ReadOnly): Gets or sets the collection of API key.

## BlockchainMemberNodesSku
### Properties
* **capacity**: int: Gets or sets the nodes capacity.

## BlockchainMemberProperties
### Properties
* **consortium**: string: Gets or sets the consortium for the blockchain member.
* **consortiumManagementAccountAddress**: string (ReadOnly): Gets the managed consortium management account address.
* **consortiumManagementAccountPassword**: string: Sets the managed consortium management account password.
* **consortiumMemberDisplayName**: string: Gets the display name of the member in the consortium.
* **consortiumRole**: string: Gets the role of the member in the consortium.
* **dns**: string (ReadOnly): Gets the dns endpoint of the blockchain member.
* **firewallRules**: [FirewallRule](#firewallrule)[]: Gets or sets firewall rules
* **password**: string: Sets the basic auth password of the blockchain member.
* **protocol**: 'Corda' | 'NotSpecified' | 'Parity' | 'Quorum' | string: Gets or sets the blockchain protocol.
* **provisioningState**: 'Deleting' | 'Failed' | 'NotSpecified' | 'Stale' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the blockchain member provision state.
* **publicKey**: string (ReadOnly): Gets the public key of the blockchain member (default transaction node).
* **rootContractAddress**: string (ReadOnly): Gets the Ethereum root contract address of the blockchain.
* **userName**: string (ReadOnly): Gets the auth user name of the blockchain member.
* **validatorNodesSku**: [BlockchainMemberNodesSku](#blockchainmembernodessku): Gets or sets the blockchain validator nodes Sku.

## Consortium
### Properties
* **name**: string (ReadOnly): Gets or sets the blockchain member name.
* **protocol**: 'Corda' | 'NotSpecified' | 'Parity' | 'Quorum' | string (ReadOnly): Gets or sets the protocol for the consortium.

## ConsortiumCollection
### Properties
* **value**: [Consortium](#consortium)[] (ReadOnly): Gets or sets the collection of consortiums.

## FirewallRule
### Properties
* **endIpAddress**: string: Gets or sets the end IP address of the firewall rule range.
* **ruleName**: string: Gets or sets the name of the firewall rules.
* **startIpAddress**: string: Gets or sets the start IP address of the firewall rule range.

## Sku
### Properties
* **name**: string: Gets or sets Sku name
* **tier**: string: Gets or sets Sku tier

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TransactionNodeProperties
### Properties
* **dns**: string (ReadOnly): Gets or sets the transaction node dns endpoint.
* **firewallRules**: [FirewallRule](#firewallrule)[]: Gets or sets the firewall rules.
* **password**: string: Sets the transaction node dns endpoint basic auth password.
* **provisioningState**: 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Gets or sets the blockchain member provision state.
* **publicKey**: string (ReadOnly): Gets or sets the transaction node public key.
* **userName**: string (ReadOnly): Gets or sets the transaction node dns endpoint basic auth user name.

