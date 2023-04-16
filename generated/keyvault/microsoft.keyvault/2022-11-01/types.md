# Microsoft.KeyVault @ 2022-11-01

## Resource Microsoft.KeyVault/managedHSMs@2022-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The supported Azure location where the managed HSM Pool should be created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedHsmProperties](#managedhsmproperties): Properties of the managed HSM
* **sku**: [ManagedHsmSku](#managedhsmsku): SKU details
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the key vault resource.
* **tags**: [ManagedHsmResourceTags](#managedhsmresourcetags): Resource tags
* **type**: 'Microsoft.KeyVault/managedHSMs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/managedHSMs/keys@2022-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedHsmKeyProperties](#managedhsmkeyproperties) (Required): The properties of the key to be created.
* **tags**: [ManagedHsmKeyCreateParametersTags](#managedhsmkeycreateparameterstags): The tags that will be assigned to the key.
* **type**: 'Microsoft.KeyVault/managedHSMs/keys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/managedHSMs/keys/versions@2022-11-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedHsmKeyProperties](#managedhsmkeyproperties) (ReadOnly): The properties of the key.
* **tags**: [ProxyResourceWithoutSystemDataTags](#proxyresourcewithoutsystemdatatags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.KeyVault/managedHSMs/keys/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/managedHSMs/privateEndpointConnections@2022-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Modified whenever there is a change in the state of private endpoint connection.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The supported Azure location where the managed HSM Pool should be created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MhsmPrivateEndpointConnectionProperties](#mhsmprivateendpointconnectionproperties): Resource properties.
* **sku**: [ManagedHsmSku](#managedhsmsku): SKU details
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the key vault resource.
* **tags**: [ManagedHsmResourceTags](#managedhsmresourcetags): Resource tags
* **type**: 'Microsoft.KeyVault/managedHSMs/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults@2022-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The supported Azure location where the key vault should be created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VaultProperties](#vaultproperties) (Required): Properties of the vault
* **systemData**: [SystemData](#systemdata) (ReadOnly): System metadata for the key vault.
* **tags**: [VaultCreateOrUpdateParametersTags](#vaultcreateorupdateparameterstags): The tags that will be assigned to the key vault.
* **type**: 'Microsoft.KeyVault/vaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults/accessPolicies@2022-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The resource type of the access policy.
* **name**: 'add' | 'remove' | 'replace' (Required, DeployTimeConstant): The resource name
* **properties**: [VaultAccessPolicyProperties](#vaultaccesspolicyproperties) (Required): Properties of the access policy
* **type**: 'Microsoft.KeyVault/vaults/accessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults/keys@2022-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Azure location of the key vault resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [KeyProperties](#keyproperties) (Required): The properties of the key to be created.
* **tags**: [KeyCreateParametersTags](#keycreateparameterstags): The tags that will be assigned to the key.
* **type**: 'Microsoft.KeyVault/vaults/keys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults/keys/versions@2022-11-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Azure location of the key vault resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [KeyProperties](#keyproperties) (ReadOnly): The properties of the key.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Tags assigned to the key vault resource.
* **type**: 'Microsoft.KeyVault/vaults/keys/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults/privateEndpointConnections@2022-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Modified whenever there is a change in the state of private endpoint connection.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Azure location of the key vault resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Tags assigned to the key vault resource.
* **type**: 'Microsoft.KeyVault/vaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults/secrets@2022-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Azure location of the key vault resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecretProperties](#secretproperties) (Required): Properties of the secret
* **tags**: [SecretCreateOrUpdateParametersTags](#secretcreateorupdateparameterstags): The tags that will be assigned to the secret.
* **type**: 'Microsoft.KeyVault/vaults/secrets' (ReadOnly, DeployTimeConstant): The resource type

## AccessPolicyEntry
### Properties
* **applicationId**: string: Application ID of the client making request on behalf of a principal
* **objectId**: string (Required): The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
* **permissions**: [Permissions](#permissions) (Required): Permissions the identity has for keys, secrets and certificates.
* **tenantId**: string (Required): The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.

## Action
### Properties
* **type**: 'notify' | 'rotate': The type of action.

## IPRule
### Properties
* **value**: string (Required): An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).

## KeyAttributes
### Properties
* **created**: int (ReadOnly): Creation time in seconds since 1970-01-01T00:00:00Z.
* **enabled**: bool: Determines whether or not the object is enabled.
* **exp**: int: Expiry date in seconds since 1970-01-01T00:00:00Z.
* **exportable**: bool: Indicates if the private key can be exported.
* **nbf**: int: Not before date in seconds since 1970-01-01T00:00:00Z.
* **recoveryLevel**: 'Purgeable' | 'Recoverable' | 'Recoverable+ProtectedSubscription' | 'Recoverable+Purgeable' | string (ReadOnly): The deletion recovery level currently in effect for the object. If it contains 'Purgeable', then the object can be permanently deleted by a privileged user; otherwise, only the system can purge the object at the end of the retention interval.
* **updated**: int (ReadOnly): Last updated time in seconds since 1970-01-01T00:00:00Z.

## KeyCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## KeyProperties
### Properties
* **attributes**: [KeyAttributes](#keyattributes): The attributes of the key.
* **curveName**: 'P-256' | 'P-256K' | 'P-384' | 'P-521' | string: The elliptic curve name. For valid values, see JsonWebKeyCurveName.
* **keyOps**: 'decrypt' | 'encrypt' | 'import' | 'release' | 'sign' | 'unwrapKey' | 'verify' | 'wrapKey' | string[]
* **keySize**: int: The key size in bits. For example: 2048, 3072, or 4096 for RSA.
* **keyUri**: string (ReadOnly): The URI to retrieve the current version of the key.
* **keyUriWithVersion**: string (ReadOnly): The URI to retrieve the specific version of the key.
* **kty**: 'EC' | 'EC-HSM' | 'RSA' | 'RSA-HSM' | string: The type of the key. For valid values, see JsonWebKeyType.
* **release_policy**: [KeyReleasePolicy](#keyreleasepolicy): Key release policy in response. It will be used for both output and input. Omitted if empty
* **rotationPolicy**: [RotationPolicy](#rotationpolicy): Key rotation policy in response. It will be used for both output and input. Omitted if empty

## KeyReleasePolicy
### Properties
* **contentType**: string: Content type and version of key release policy
* **data**: string: Blob encoding the policy rules under which the key can be released.

## KeyRotationPolicyAttributes
### Properties
* **created**: int (ReadOnly): Creation time in seconds since 1970-01-01T00:00:00Z.
* **expiryTime**: string: The expiration time for the new key version. It should be in ISO8601 format. Eg: 'P90D', 'P1Y'.
* **updated**: int (ReadOnly): Last updated time in seconds since 1970-01-01T00:00:00Z.

## LifetimeAction
### Properties
* **action**: [Action](#action): The action of key rotation policy lifetimeAction.
* **trigger**: [Trigger](#trigger): The trigger of key rotation policy lifetimeAction.

## ManagedHsmAction
### Properties
* **type**: 'notify' | 'rotate': The type of action.

## ManagedHsmKeyAttributes
### Properties
* **created**: int (ReadOnly): Creation time in seconds since 1970-01-01T00:00:00Z.
* **enabled**: bool: Determines whether or not the object is enabled.
* **exp**: int: Expiry date in seconds since 1970-01-01T00:00:00Z.
* **exportable**: bool: Indicates if the private key can be exported.
* **nbf**: int: Not before date in seconds since 1970-01-01T00:00:00Z.
* **recoveryLevel**: 'Purgeable' | 'Recoverable' | 'Recoverable+ProtectedSubscription' | 'Recoverable+Purgeable' | string (ReadOnly): The deletion recovery level currently in effect for the object. If it contains 'Purgeable', then the object can be permanently deleted by a privileged user; otherwise, only the system can purge the object at the end of the retention interval.
* **updated**: int (ReadOnly): Last updated time in seconds since 1970-01-01T00:00:00Z.

## ManagedHsmKeyCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedHsmKeyProperties
### Properties
* **attributes**: [ManagedHsmKeyAttributes](#managedhsmkeyattributes): The attributes of the key.
* **curveName**: 'P-256' | 'P-256K' | 'P-384' | 'P-521' | string: The elliptic curve name. For valid values, see JsonWebKeyCurveName.
* **keyOps**: 'decrypt' | 'encrypt' | 'import' | 'release' | 'sign' | 'unwrapKey' | 'verify' | 'wrapKey' | string[]
* **keySize**: int: The key size in bits. For example: 2048, 3072, or 4096 for RSA.
* **keyUri**: string (ReadOnly): The URI to retrieve the current version of the key.
* **keyUriWithVersion**: string (ReadOnly): The URI to retrieve the specific version of the key.
* **kty**: 'EC' | 'EC-HSM' | 'RSA' | 'RSA-HSM' | string: The type of the key. For valid values, see JsonWebKeyType.
* **release_policy**: [ManagedHsmKeyReleasePolicy](#managedhsmkeyreleasepolicy): Key release policy in response. It will be used for both output and input. Omitted if empty
* **rotationPolicy**: [ManagedHsmRotationPolicy](#managedhsmrotationpolicy): Key rotation policy in response. It will be used for both output and input. Omitted if empty

## ManagedHsmKeyReleasePolicy
### Properties
* **contentType**: string: Content type and version of key release policy
* **data**: string: Blob encoding the policy rules under which the key can be released.

## ManagedHsmKeyRotationPolicyAttributes
### Properties
* **created**: int (ReadOnly): Creation time in seconds since 1970-01-01T00:00:00Z.
* **expiryTime**: string: The expiration time for the new key version. It should be in ISO8601 format. Eg: 'P90D', 'P1Y'.
* **updated**: int (ReadOnly): Last updated time in seconds since 1970-01-01T00:00:00Z.

## ManagedHsmLifetimeAction
### Properties
* **action**: [ManagedHsmAction](#managedhsmaction): The action of key rotation policy lifetimeAction.
* **trigger**: [ManagedHsmTrigger](#managedhsmtrigger): The trigger of key rotation policy lifetimeAction.

## ManagedHsmProperties
### Properties
* **createMode**: 'default' | 'recover' (WriteOnly): The create mode to indicate whether the resource is being created or is being recovered from a deleted resource.
* **enablePurgeProtection**: bool: Property specifying whether protection against purge is enabled for this managed HSM pool. Setting this property to true activates protection against purge for this managed HSM pool and its content - only the Managed HSM service may initiate a hard, irrecoverable deletion. Enabling this functionality is irreversible.
* **enableSoftDelete**: bool: Property to specify whether the 'soft delete' functionality is enabled for this managed HSM pool. Soft delete is enabled by default for all managed HSMs and is immutable.
* **hsmUri**: string (ReadOnly): The URI of the managed hsm pool for performing operations on keys.
* **initialAdminObjectIds**: string[]: Array of initial administrators object ids for this managed hsm pool.
* **networkAcls**: [MhsmNetworkRuleSet](#mhsmnetworkruleset): Rules governing the accessibility of the key vault from specific network locations.
* **privateEndpointConnections**: [MhsmPrivateEndpointConnectionItem](#mhsmprivateendpointconnectionitem)[] (ReadOnly): List of private endpoint connections associated with the managed hsm pool.
* **provisioningState**: 'Activated' | 'Deleting' | 'Failed' | 'Provisioning' | 'Restoring' | 'SecurityDomainRestore' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Control permission to the managed HSM from public networks.
* **scheduledPurgeDate**: string (ReadOnly): The scheduled purge date in UTC.
* **securityDomainProperties**: [ManagedHSMSecurityDomainProperties](#managedhsmsecuritydomainproperties) (ReadOnly): Managed HSM security domain properties.
* **softDeleteRetentionInDays**: int: Soft deleted data retention days. When you delete an HSM or a key, it will remain recoverable for the configured retention period or for a default period of 90 days. It accepts values between 7 and 90.
* **statusMessage**: string (ReadOnly): Resource Status Message.
* **tenantId**: string: The Azure Active Directory tenant ID that should be used for authenticating requests to the managed HSM pool.

## ManagedHsmResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedHsmResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedHsmRotationPolicy
### Properties
* **attributes**: [ManagedHsmKeyRotationPolicyAttributes](#managedhsmkeyrotationpolicyattributes): The attributes of key rotation policy.
* **lifetimeActions**: [ManagedHsmLifetimeAction](#managedhsmlifetimeaction)[]: The lifetimeActions for key rotation action.

## ManagedHSMSecurityDomainProperties
### Properties
* **activationStatus**: 'Active' | 'Failed' | 'NotActivated' | 'Unknown' | string (ReadOnly): Activation Status
* **activationStatusMessage**: string (ReadOnly): Activation Status Message.

## ManagedHsmSku
### Properties
* **family**: 'B' | string (Required): SKU Family of the managed HSM Pool
* **name**: 'Custom_B32' | 'Custom_B6' | 'Standard_B1' (Required): SKU of the managed HSM Pool

## ManagedHsmTrigger
### Properties
* **timeAfterCreate**: string: The time duration after key creation to rotate the key. It only applies to rotate. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.
* **timeBeforeExpiry**: string: The time duration before key expiring to rotate or notify. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.

## MhsmipRule
### Properties
* **value**: string (Required): An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).

## MhsmNetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'None' | string: Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
* **defaultAction**: 'Allow' | 'Deny' | string: The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
* **ipRules**: [MhsmipRule](#mhsmiprule)[]: The list of IP address rules.
* **virtualNetworkRules**: [MhsmVirtualNetworkRule](#mhsmvirtualnetworkrule)[]: The list of virtual network rules.

## MhsmPrivateEndpoint
### Properties
* **id**: string (ReadOnly): Full identifier of the private endpoint resource.

## MhsmPrivateEndpointConnectionItem
### Properties
* **etag**: string: Modified whenever there is a change in the state of private endpoint connection.
* **id**: string: Id of private endpoint connection.
* **properties**: [MhsmPrivateEndpointConnectionProperties](#mhsmprivateendpointconnectionproperties): Private endpoint connection properties.

## MhsmPrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [MhsmPrivateEndpoint](#mhsmprivateendpoint): Properties of the private endpoint object.
* **privateLinkServiceConnectionState**: [MhsmPrivateLinkServiceConnectionState](#mhsmprivatelinkserviceconnectionstate): Approval state of the private link connection.
* **provisioningState**: 'Creating' | 'Deleting' | 'Disconnected' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning state of the private endpoint connection.

## MhsmPrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: 'None' | string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval or rejection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been approved, rejected or removed by the key vault owner.

## MhsmVirtualNetworkRule
### Properties
* **id**: string (Required): Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.

## NetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'None' | string: Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
* **defaultAction**: 'Allow' | 'Deny' | string: The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
* **ipRules**: [IPRule](#iprule)[]: The list of IP address rules.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: The list of virtual network rules.

## Permissions
### Properties
* **certificates**: 'all' | 'backup' | 'create' | 'delete' | 'deleteissuers' | 'get' | 'getissuers' | 'import' | 'list' | 'listissuers' | 'managecontacts' | 'manageissuers' | 'purge' | 'recover' | 'restore' | 'setissuers' | 'update' | string[]: Permissions to certificates
* **keys**: 'all' | 'backup' | 'create' | 'decrypt' | 'delete' | 'encrypt' | 'get' | 'getrotationpolicy' | 'import' | 'list' | 'purge' | 'recover' | 'release' | 'restore' | 'rotate' | 'setrotationpolicy' | 'sign' | 'unwrapKey' | 'update' | 'verify' | 'wrapKey' | string[]: Permissions to keys
* **secrets**: 'all' | 'backup' | 'delete' | 'get' | 'list' | 'purge' | 'recover' | 'restore' | 'set' | string[]: Permissions to secrets
* **storage**: 'all' | 'backup' | 'delete' | 'deletesas' | 'get' | 'getsas' | 'list' | 'listsas' | 'purge' | 'recover' | 'regeneratekey' | 'restore' | 'set' | 'setsas' | 'update' | string[]: Permissions to storage accounts

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): Full identifier of the private endpoint resource.

## PrivateEndpointConnectionItem
### Properties
* **etag**: string: Modified whenever there is a change in the state of private endpoint connection.
* **id**: string: Id of private endpoint connection.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Private endpoint connection properties.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Properties of the private endpoint object.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Approval state of the private link connection.
* **provisioningState**: 'Creating' | 'Deleting' | 'Disconnected' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning state of the private endpoint connection.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: 'None' | string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval or rejection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been approved, rejected or removed by the key vault owner.

## ProxyResourceWithoutSystemDataTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RotationPolicy
### Properties
* **attributes**: [KeyRotationPolicyAttributes](#keyrotationpolicyattributes): The attributes of key rotation policy.
* **lifetimeActions**: [LifetimeAction](#lifetimeaction)[]: The lifetimeActions for key rotation action.

## SecretAttributes
### Properties
* **created**: int (ReadOnly): Creation time in seconds since 1970-01-01T00:00:00Z.
* **enabled**: bool: Determines whether the object is enabled.
* **exp**: int: Expiry date in seconds since 1970-01-01T00:00:00Z.
* **nbf**: int: Not before date in seconds since 1970-01-01T00:00:00Z.
* **updated**: int (ReadOnly): Last updated time in seconds since 1970-01-01T00:00:00Z.

## SecretCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretProperties
### Properties
* **attributes**: [SecretAttributes](#secretattributes): The attributes of the secret.
* **contentType**: string: The content type of the secret.
* **secretUri**: string (ReadOnly): The URI to retrieve the current version of the secret.
* **secretUriWithVersion**: string (ReadOnly): The URI to retrieve the specific version of the secret.
* **value**: string: The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.

## Sku
### Properties
* **family**: 'A' | string (Required): SKU family name
* **name**: 'premium' | 'standard' (Required): SKU name to specify whether the key vault is a standard vault or a premium vault.

## SystemData
### Properties
* **createdAt**: string: The timestamp of the key vault resource creation (UTC).
* **createdBy**: string: The identity that created the key vault resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the key vault resource.
* **lastModifiedAt**: string: The timestamp of the key vault resource last modification (UTC).
* **lastModifiedBy**: string: The identity that last modified the key vault resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the key vault resource.

## Trigger
### Properties
* **timeAfterCreate**: string: The time duration after key creation to rotate the key. It only applies to rotate. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.
* **timeBeforeExpiry**: string: The time duration before key expiring to rotate or notify. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.

## VaultAccessPolicyProperties
### Properties
* **accessPolicies**: [AccessPolicyEntry](#accesspolicyentry)[] (Required): An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.

## VaultCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VaultProperties
### Properties
* **accessPolicies**: [AccessPolicyEntry](#accesspolicyentry)[]: An array of 0 to 1024 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. When `createMode` is set to `recover`, access policies are not required. Otherwise, access policies are required.
* **createMode**: 'default' | 'recover' (WriteOnly): The vault's create mode to indicate whether the vault need to be recovered or not.
* **enabledForDeployment**: bool: Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
* **enabledForDiskEncryption**: bool: Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
* **enabledForTemplateDeployment**: bool: Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
* **enablePurgeProtection**: bool: Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value.
* **enableRbacAuthorization**: bool: Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored. When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC.
* **enableSoftDelete**: bool: Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value(true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false.
* **hsmPoolResourceId**: string (ReadOnly): The resource id of HSM Pool.
* **networkAcls**: [NetworkRuleSet](#networkruleset): Rules governing the accessibility of the key vault from specific network locations.
* **privateEndpointConnections**: [PrivateEndpointConnectionItem](#privateendpointconnectionitem)[] (ReadOnly): List of private endpoint connections associated with the key vault.
* **provisioningState**: 'RegisteringDns' | 'Succeeded' | string: Provisioning state of the vault.
* **publicNetworkAccess**: string: Property to specify whether the vault will accept traffic from public internet. If set to 'disabled' all traffic except private endpoint traffic and that that originates from trusted services will be blocked. This will override the set firewall rules, meaning that even if the firewall rules are present we will not honor the rules.
* **sku**: [Sku](#sku) (Required): SKU details
* **softDeleteRetentionInDays**: int: softDelete data retention days. It accepts >=7 and <=90.
* **tenantId**: string (Required): The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
* **vaultUri**: string: The URI of the vault for performing operations on keys and secrets.

## VirtualNetworkRule
### Properties
* **id**: string (Required): Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
* **ignoreMissingVnetServiceEndpoint**: bool: Property to specify whether NRP will ignore the check if parent subnet has serviceEndpoints configured.

