# Microsoft.RecoveryServices @ 2016-06-01

## Resource Microsoft.RecoveryServices/vaults@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityData](#identitydata): Identity for the resource.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VaultProperties](#vaultproperties): Properties of the vault.
* **sku**: [Sku](#sku): Identifies the unique system identifier for each Azure resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/certificates@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RawCertificateData](#rawcertificatedata): Raw certificate data.
* **type**: 'Microsoft.RecoveryServices/vaults/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/extendedInformation@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'vaultExtendedInfo' (Required, DeployTimeConstant): The resource name
* **properties**: [VaultExtendedInfo](#vaultextendedinfo): Vault extended information.
* **type**: 'Microsoft.RecoveryServices/vaults/extendedInformation' (ReadOnly, DeployTimeConstant): The resource type

## IdentityData
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' (Required): The identity type. Possible values include: 'SystemAssigned', 'None'

## VaultProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnectionVaultProperties](#privateendpointconnectionvaultproperties)[] (ReadOnly): List of private endpoint connection.
* **privateEndpointStateForBackup**: 'Enabled' | 'None' (ReadOnly): Private endpoint state for backup. Possible values include: 'None', 'Enabled'
* **privateEndpointStateForSiteRecovery**: 'Enabled' | 'None' (ReadOnly): Private endpoint state for site recovery. Possible values include: 'None', 'Enabled'
* **provisioningState**: string (ReadOnly): Provisioning State.
* **upgradeDetails**: [UpgradeDetails](#upgradedetails): Details for upgrading vault.

## PrivateEndpointConnectionVaultProperties
### Properties
* **id**: string (ReadOnly): Format of id subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.[Service]/{resource}/{resourceName}/privateEndpointConnections/{connectionName}.
* **properties**: [PrivateEndpointConnection](#privateendpointconnection): Private Endpoint Connection Response Properties.

## PrivateEndpointConnection
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint network resource that is linked to the Private Endpoint connection.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Gets or sets private link service connection state.
* **provisioningState**: 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' (ReadOnly): Gets or sets provisioning state of the private endpoint connection. Possible values include: 'Succeeded', 'Deleting', 'Failed', 'Pending'

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): Gets or sets id.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly): Gets or sets actions required.
* **description**: string (ReadOnly): Gets or sets description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (ReadOnly): Gets or sets the status. Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'

## UpgradeDetails
### Properties
* **endTimeUtc**: string (ReadOnly): UTC time at which the upgrade operation has ended.
* **lastUpdatedTimeUtc**: string (ReadOnly): UTC time at which the upgrade operation status was last updated.
* **message**: string (ReadOnly): Message to the user containing information about the upgrade operation.
* **operationId**: string (ReadOnly): ID of the vault upgrade operation.
* **previousResourceId**: string (ReadOnly): Resource ID of the vault before the upgrade.
* **startTimeUtc**: string (ReadOnly): UTC time at which the upgrade operation has started.
* **status**: 'Failed' | 'InProgress' | 'Unknown' | 'Upgraded' (ReadOnly): Status of the vault upgrade operation. Possible values include: 'Unknown', 'InProgress', 'Upgraded', 'Failed'
* **triggerType**: 'ForcedUpgrade' | 'UserTriggered' (ReadOnly): The way the vault upgrade was triggered. Possible values include: 'UserTriggered', 'ForcedUpgrade'
* **upgradedResourceId**: string (ReadOnly): Resource ID of the upgraded vault.

## Sku
### Properties
* **name**: 'RS0' | 'Standard' (Required): The Sku name. Possible values include: 'Standard', 'RS0'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RawCertificateData
### Properties
* **authType**: 'AAD' | 'AccessControlService' | 'ACS' | 'AzureActiveDirectory' | 'Invalid': Specifies the authentication type. Possible values include: 'Invalid', 'ACS', 'AAD', 'AccessControlService', 'AzureActiveDirectory'
* **certificate**: array: The base64 encoded certificate raw data string

## VaultExtendedInfo
### Properties
* **algorithm**: string: Algorithm for Vault ExtendedInfo
* **encryptionKey**: string: Encryption key.
* **encryptionKeyThumbprint**: string: Encryption key thumbprint.
* **integrityKey**: string: Integrity key.

