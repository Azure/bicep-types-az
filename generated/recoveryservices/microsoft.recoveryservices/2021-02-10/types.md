# Microsoft.RecoveryServices @ 2021-02-10

## Resource Microsoft.RecoveryServices/vaults@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityData](#identitydata): Identity for the resource.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VaultProperties](#vaultproperties): Properties of the vault.
* **sku**: [Sku](#sku): Identifies the unique system identifier for each Azure resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/certificates@2021-02-10 (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RawCertificateData](#rawcertificatedata): Raw certificate data.
* **type**: 'Microsoft.RecoveryServices/vaults/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/extendedInformation@2021-02-10
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'vaultExtendedInfo' (Required, DeployTimeConstant): The resource name
* **properties**: [VaultExtendedInfo](#vaultextendedinfo): Vault extended information.
* **type**: 'Microsoft.RecoveryServices/vaults/extendedInformation' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/operationResults@2021-02-10 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-10' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Optional ETag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityData](#identitydata) (ReadOnly): Identity for the resource.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VaultProperties](#vaultproperties) (ReadOnly): Properties of the vault.
* **sku**: [Sku](#sku) (ReadOnly): Identifies the unique system identifier for each Azure resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## IdentityData
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
* **userAssignedIdentities**: [IdentityDataUserAssignedIdentities](#identitydatauserassignedidentities): The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityDataUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## UserIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the user-assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the user-assigned identity.

## VaultProperties
### Properties
* **encryption**: [VaultPropertiesEncryption](#vaultpropertiesencryption): Customer Managed Key details of the resource.
* **privateEndpointConnections**: [PrivateEndpointConnectionVaultProperties](#privateendpointconnectionvaultproperties)[] (ReadOnly): List of private endpoint connection.
* **privateEndpointStateForBackup**: 'Enabled' | 'None' | string (ReadOnly): Private endpoint state for backup.
* **privateEndpointStateForSiteRecovery**: 'Enabled' | 'None' | string (ReadOnly): Private endpoint state for backup.
* **provisioningState**: string (ReadOnly): Provisioning State.
* **upgradeDetails**: [UpgradeDetails](#upgradedetails): Details for upgrading vault.

## VaultPropertiesEncryption
### Properties
* **infrastructureEncryption**: 'Disabled' | 'Enabled' | string: Enabling/Disabling the Double Encryption state
* **kekIdentity**: [CmkKekIdentity](#cmkkekidentity): The details of the identity used for CMK
* **keyVaultProperties**: [CmkKeyVaultProperties](#cmkkeyvaultproperties): The properties of the Key Vault which hosts CMK

## CmkKekIdentity
### Properties
* **userAssignedIdentity**: string: The user assigned identity to be used to grant permissions in case the type of identity used is UserAssigned
* **useSystemAssignedIdentity**: bool: Indicate that system assigned identity should be used. Mutually exclusive with 'userAssignedIdentity' field

## CmkKeyVaultProperties
### Properties
* **keyUri**: string: The key uri of the Customer Managed Key

## PrivateEndpointConnectionVaultProperties
### Properties
* **id**: string (ReadOnly): Format of id subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.[Service]/{resource}/{resourceName}/privateEndpointConnections/{connectionName}.
* **properties**: [PrivateEndpointConnection](#privateendpointconnection) (ReadOnly): Private Endpoint Connection Response Properties.

## PrivateEndpointConnection
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): The Private Endpoint network resource that is linked to the Private Endpoint connection.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly): Gets or sets private link service connection state.
* **provisioningState**: 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | string (ReadOnly): Gets or sets provisioning state of the private endpoint connection.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): Gets or sets id.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly): Gets or sets actions required.
* **description**: string (ReadOnly): Gets or sets description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (ReadOnly): Gets or sets the status.

## UpgradeDetails
### Properties
* **endTimeUtc**: string (ReadOnly): UTC time at which the upgrade operation has ended.
* **lastUpdatedTimeUtc**: string (ReadOnly): UTC time at which the upgrade operation status was last updated.
* **message**: string (ReadOnly): Message to the user containing information about the upgrade operation.
* **operationId**: string (ReadOnly): ID of the vault upgrade operation.
* **previousResourceId**: string (ReadOnly): Resource ID of the vault before the upgrade.
* **startTimeUtc**: string (ReadOnly): UTC time at which the upgrade operation has started.
* **status**: 'Failed' | 'InProgress' | 'Unknown' | 'Upgraded' | string (ReadOnly): Status of the vault upgrade operation.
* **triggerType**: 'ForcedUpgrade' | 'UserTriggered' | string (ReadOnly): The way the vault upgrade was triggered.
* **upgradedResourceId**: string (ReadOnly): Resource ID of the upgraded vault.

## Sku
### Properties
* **name**: 'RS0' | 'Standard' | string (Required): The Sku name.
* **tier**: string: The Sku tier.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RawCertificateData
### Properties
* **certificate**: any: The base64 encoded certificate raw data string
* **friendlyName**: string (ReadOnly): Certificate friendly name.
* **issuer**: string (ReadOnly): Certificate issuer.
* **resourceId**: int (ReadOnly): Resource ID of the vault.
* **subject**: string (ReadOnly): Certificate Subject Name.
* **thumbprint**: string (ReadOnly): Certificate thumbprint.
* **validFrom**: string (ReadOnly): Certificate Validity start Date time.
* **validTo**: string (ReadOnly): Certificate Validity End Date time.

## VaultExtendedInfo
### Properties
* **algorithm**: string: Algorithm for Vault ExtendedInfo
* **encryptionKey**: string: Encryption key.
* **encryptionKeyThumbprint**: string: Encryption key thumbprint.
* **integrityKey**: string: Integrity key.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

