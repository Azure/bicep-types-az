# Microsoft.KeyVault @ 2026-10-01-preview

## Resource Microsoft.KeyVault/locations/deletedManagedHSMs@2026-10-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeletedManagedHsmProperties](#deletedmanagedhsmproperties) (ReadOnly): Properties of the deleted managed HSM
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.KeyVault/locations/deletedManagedHSMs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/locations/deletedVaults@2026-10-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeletedVaultProperties](#deletedvaultproperties) (ReadOnly): Properties of the vault
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.KeyVault/locations/deletedVaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/managedHSMs@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedHsmProperties](#managedhsmproperties): Properties of the managed HSM
* **sku**: [ManagedHsmSku](#managedhsmsku): SKU details
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ManagedHsmTags](#managedhsmtags): Resource tags.
* **type**: 'Microsoft.KeyVault/managedHSMs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/managedHSMs/keys@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{1,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedHsmKeyProperties](#managedhsmkeyproperties) (Required): The properties of the key to be created.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ManagedHsmKeyCreateParametersTags](#managedhsmkeycreateparameterstags): The tags that will be assigned to the key.
* **type**: 'Microsoft.KeyVault/managedHSMs/keys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/managedHSMs/keys/versions@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{32}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedHsmKeyProperties](#managedhsmkeyproperties) (ReadOnly): The properties of the key.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ManagedHsmKeyTags](#managedhsmkeytags) (ReadOnly): Resource tags
* **type**: 'Microsoft.KeyVault/managedHSMs/keys/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/managedHSMs/privateEndpointConnections@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Modified whenever there is a change in the state of private endpoint connection.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MhsmPrivateEndpointConnectionProperties](#mhsmprivateendpointconnectionproperties): Resource properties.
* **sku**: [ManagedHsmSku](#managedhsmsku): SKU details
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [MhsmPrivateEndpointConnectionTags](#mhsmprivateendpointconnectiontags): Resource tags.
* **type**: 'Microsoft.KeyVault/managedHSMs/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity assigned to the vault.
* **location**: string (Required): The supported Azure location where the key vault should be created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VaultProperties](#vaultproperties) (Required): Properties of the vault
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [VaultCreateOrUpdateParametersTags](#vaultcreateorupdateparameterstags): The tags that will be assigned to the key vault.
* **type**: 'Microsoft.KeyVault/vaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults/accessPolicies@2026-10-01-preview
* **Readable Scope(s)**: None
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The resource type of the access policy.
* **name**: 'add' | 'remove' | 'replace' (Required, DeployTimeConstant): The resource name
* **properties**: [VaultAccessPolicyProperties](#vaultaccesspolicyproperties) (Required): Properties of the access policy
* **type**: 'Microsoft.KeyVault/vaults/accessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults/keys@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The supported Azure location where the managed HSM Pool should be created.
* **name**: string {pattern: "^[a-zA-Z0-9-]{1,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [KeyProperties](#keyproperties) (Required): The properties of the key to be created.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [KeyCreateParametersTags](#keycreateparameterstags): The tags that will be assigned to the key.
* **type**: 'Microsoft.KeyVault/vaults/keys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults/keys/versions@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The supported Azure location where the managed HSM Pool should be created.
* **name**: string {pattern: "^[a-fA-F0-9]{32}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [KeyProperties](#keyproperties) (ReadOnly): The properties of the key.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [KeyTags](#keytags) (ReadOnly): Resource tags
* **type**: 'Microsoft.KeyVault/vaults/keys/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults/networkSecurityPerimeterConfigurations@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties) (ReadOnly): Network security configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.KeyVault/vaults/networkSecurityPerimeterConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults/privateEndpointConnections@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Modified whenever there is a change in the state of private endpoint connection.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Azure location of the key vault resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [PrivateEndpointConnectionTags](#privateendpointconnectiontags) (ReadOnly): Tags assigned to the key vault resource.
* **type**: 'Microsoft.KeyVault/vaults/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KeyVault/vaults/secrets@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Azure location of the key vault resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecretProperties](#secretproperties) (Required): Properties of the secret
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [SecretCreateOrUpdateParametersTags](#secretcreateorupdateparameterstags): The tags that will be assigned to the secret.
* **type**: 'Microsoft.KeyVault/vaults/secrets' (ReadOnly, DeployTimeConstant): The resource type

## Function checkMhsmNameAvailability (Microsoft.KeyVault@2026-10-01-preview)
* **Resource**: Microsoft.KeyVault
* **ApiVersion**: 2026-10-01-preview
* **Input**: [CheckMhsmNameAvailabilityParameters](#checkmhsmnameavailabilityparameters)
* **Output**: [CheckMhsmNameAvailabilityResult](#checkmhsmnameavailabilityresult)

## Function checkNameAvailability (Microsoft.KeyVault@2026-10-01-preview)
* **Resource**: Microsoft.KeyVault
* **ApiVersion**: 2026-10-01-preview
* **Input**: [VaultCheckNameAvailabilityParameters](#vaultchecknameavailabilityparameters)
* **Output**: [CheckNameAvailabilityResult](#checknameavailabilityresult)

## Function purge (Microsoft.KeyVault/locations/deletedManagedHSMs@2026-10-01-preview)
* **Resource**: Microsoft.KeyVault/locations/deletedManagedHSMs
* **ApiVersion**: 2026-10-01-preview
* **Output**: any

## Function purge (Microsoft.KeyVault/locations/deletedVaults@2026-10-01-preview)
* **Resource**: Microsoft.KeyVault/locations/deletedVaults
* **ApiVersion**: 2026-10-01-preview
* **Output**: any

## Function reconcile (Microsoft.KeyVault/vaults/networkSecurityPerimeterConfigurations@2026-10-01-preview)
* **Resource**: Microsoft.KeyVault/vaults/networkSecurityPerimeterConfigurations
* **ApiVersion**: 2026-10-01-preview
* **Output**: any

## AccessPolicyEntry
### Properties
* **applicationId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Application ID of the client making request on behalf of a principal
* **objectId**: string (Required): The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
* **permissions**: [Permissions](#permissions) (Required): Permissions the identity has for keys, secrets and certificates.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.

## AccessRule
### Properties
* **name**: string: Name of the access rule
* **properties**: [AccessRuleProperties](#accessruleproperties): Properties of Access Rule

## AccessRuleProperties
### Properties
* **addressPrefixes**: string[]: Address prefixes in the CIDR format for inbound rules
* **direction**: 'Inbound' | 'Outbound' | string: Direction of Access Rule
* **emailAddresses**: string[]: Email addresses for outbound rules
* **fullyQualifiedDomainNames**: string[]: Fully qualified domain names (FQDN) for outbound rules
* **networkSecurityPerimeters**: [NetworkSecurityPerimeter](#networksecurityperimeter)[]: Network security perimeters for inbound rules
* **phoneNumbers**: string[]: Phone numbers for outbound rules
* **subscriptions**: [AccessRulePropertiesSubscriptionsItem](#accessrulepropertiessubscriptionsitem)[]: Subscriptions for inbound rules

## AccessRulePropertiesSubscriptionsItem
### Properties
* **id**: string: The fully qualified Azure resource ID of the subscription e.g. ('/subscriptions/00000000-0000-0000-0000-000000000000')

## Action
### Properties
* **type**: 'notify' | 'rotate': The type of action.

## CheckMhsmNameAvailabilityParameters
### Properties
* **name**: string (Required): The managed hsm name.

## CheckMhsmNameAvailabilityResult
### Properties
* **message**: string (ReadOnly): An error message explaining the Reason value in more detail.
* **nameAvailable**: bool (ReadOnly): A boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used.
* **reason**: 'AccountNameInvalid' | 'AlreadyExists' | string (ReadOnly): The reason that a managed hsm name could not be used. The reason element is only returned if NameAvailable is false.

## CheckNameAvailabilityResult
### Properties
* **message**: string (ReadOnly): An error message explaining the Reason value in more detail.
* **nameAvailable**: bool (ReadOnly): A boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used.
* **reason**: 'AccountNameInvalid' | 'AlreadyExists' | string (ReadOnly): The reason that a vault name could not be used. The Reason element is only returned if NameAvailable is false.

## DeletedManagedHsmProperties
### Properties
* **deletionDate**: string (ReadOnly): The deleted date.
* **location**: string (ReadOnly): The location of the original managed HSM.
* **mhsmId**: string (ReadOnly): The resource id of the original managed HSM.
* **purgeProtectionEnabled**: bool (ReadOnly): Purge protection status of the original managed HSM.
* **scheduledPurgeDate**: string (ReadOnly): The scheduled purged date.
* **tags**: [DeletedManagedHsmPropertiesTags](#deletedmanagedhsmpropertiestags) (ReadOnly): Tags of the original managed HSM.

## DeletedManagedHsmPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeletedVaultProperties
### Properties
* **deletionDate**: string (ReadOnly): The deleted date.
* **location**: string (ReadOnly): The location of the original vault.
* **purgeProtectionEnabled**: bool (ReadOnly): Purge protection status of the original vault.
* **scheduledPurgeDate**: string (ReadOnly): The scheduled purged date.
* **tags**: [DeletedVaultPropertiesTags](#deletedvaultpropertiestags) (ReadOnly): Tags of the original vault.
* **vaultId**: string (ReadOnly): The resource id of the original vault.

## DeletedVaultPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **curveName**: 'P-256' | 'P-256K' | 'P-384' | 'P-521' | string: The elliptic curve name. For valid values, see JsonWebKeyCurveName. Default for EC and EC-HSM keys is P-256
* **keyOps**: ('decrypt' | 'encrypt' | 'import' | 'release' | 'sign' | 'unwrapKey' | 'verify' | 'wrapKey' | string)[]
* **keySize**: int: The key size in bits. For example: 2048, 3072, or 4096 for RSA. Default for RSA and RSA-HSM keys is 2048. Exception made for bring your own key (BYOK), key exchange keys default to 4096.
* **keyUri**: string (ReadOnly): The URI to retrieve the current version of the key.
* **keyUriWithVersion**: string (ReadOnly): The URI to retrieve the specific version of the key.
* **kty**: 'EC' | 'EC-HSM' | 'RSA' | 'RSA-HSM' | 'oct-HSM' | string: The type of the key. For valid values, see JsonWebKeyType.
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

## KeyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **curveName**: 'P-256' | 'P-256K' | 'P-384' | 'P-521' | string: The elliptic curve name. For valid values, see JsonWebKeyCurveName. Default for EC and EC-HSM keys is P-256
* **keyOps**: ('decrypt' | 'encrypt' | 'import' | 'release' | 'sign' | 'unwrapKey' | 'verify' | 'wrapKey' | string)[]
* **keySize**: int: The key size in bits. For example: 2048, 3072, or 4096 for RSA. Default for RSA and RSA-HSM keys is 2048. Exception made for bring your own key (BYOK), key exchange keys default to 4096.
* **keyUri**: string (ReadOnly): The URI to retrieve the current version of the key.
* **keyUriWithVersion**: string (ReadOnly): The URI to retrieve the specific version of the key.
* **kty**: 'EC' | 'EC-HSM' | 'RSA' | 'RSA-HSM' | 'oct-HSM' | string: The type of the key. For valid values, see JsonWebKeyType.
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

## ManagedHsmKeyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **regions**: [MhsmGeoReplicatedRegion](#mhsmgeoreplicatedregion)[]: List of all regions associated with the managed hsm pool.
* **scheduledPurgeDate**: string (ReadOnly): The scheduled purge date in UTC.
* **securityDomainProperties**: [ManagedHSMSecurityDomainProperties](#managedhsmsecuritydomainproperties) (ReadOnly): Managed HSM security domain properties.
* **softDeleteRetentionInDays**: int: Soft deleted data retention days. When you delete an HSM or a key, it will remain recoverable for the configured retention period or for a default period of 90 days. It accepts values between 7 and 90.
* **statusMessage**: string (ReadOnly): Resource Status Message.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The Azure Active Directory tenant ID that should be used for authenticating requests to the managed HSM pool.

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
* **family**: 'B' | 'C' | string (Required): SKU Family of the managed HSM Pool
* **name**: 'Custom_B32' | 'Custom_B6' | 'Custom_C10' | 'Custom_C42' | 'Standard_B1' | 'Standard_B10v2' | 'Standard_B15v2' | 'Standard_B1v2' | 'Standard_B20v2' | 'Standard_B5v2' | string (Required): SKU of the managed HSM Pool

## ManagedHsmTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedHsmTrigger
### Properties
* **timeAfterCreate**: string: The time duration after key creation to rotate the key. It only applies to rotate. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.
* **timeBeforeExpiry**: string: The time duration before key expiring to rotate or notify. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MhsmGeoReplicatedRegion
### Properties
* **isPrimary**: bool: A boolean value that indicates whether the region is the primary region or a secondary region.
* **name**: string: Name of the geo replicated region.
* **provisioningState**: 'Cleanup' | 'Deleting' | 'Failed' | 'Preprovisioning' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state of the geo replicated region.

## MhsmipRule
### Properties
* **value**: string (Required): An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).

## MhsmNetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'None' | string: Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
* **defaultAction**: 'Allow' | 'Deny' | string: The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
* **ipRules**: [MhsmipRule](#mhsmiprule)[]: The list of IP address rules.
* **serviceTags**: [MhsmServiceTagRule](#mhsmservicetagrule)[]: The list of service tags.
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
* **provisioningState**: 'Creating' | 'Deleting' | 'Disconnected' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the private endpoint connection.

## MhsmPrivateEndpointConnectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MhsmPrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: 'None' | string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval or rejection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been approved, rejected or removed by the key vault owner.

## MhsmServiceTagRule
### Properties
* **tag**: string (Required): Name of the service tag.

## MhsmVirtualNetworkRule
### Properties
* **id**: string (Required): Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.

## NetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'None' | string: Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
* **defaultAction**: 'Allow' | 'Deny' | string: The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
* **ipRules**: [IPRule](#iprule)[]: The list of IP address rules.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: The list of virtual network rules.

## NetworkSecurityPerimeter
### Properties
* **id**: string: Fully qualified Azure resource ID of the NSP resource
* **location**: string: Location of the network security perimeter
* **perimeterGuid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Universal unique ID (UUID) of the network security perimeter

## NetworkSecurityPerimeterConfigurationProperties
### Properties
* **networkSecurityPerimeter**: [NetworkSecurityPerimeter](#networksecurityperimeter): Information about a network security perimeter (NSP)
* **profile**: [NetworkSecurityProfile](#networksecurityprofile): Network security perimeter configuration profile
* **provisioningIssues**: [ProvisioningIssue](#provisioningissue)[] (ReadOnly): List of provisioning issues, if any
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of a network security perimeter configuration that is being created or updated.
* **resourceAssociation**: [ResourceAssociation](#resourceassociation): Information about resource association

## NetworkSecurityProfile
### Properties
* **accessRules**: [AccessRule](#accessrule)[]: List of Access Rules
* **accessRulesVersion**: int: Current access rules version
* **diagnosticSettingsVersion**: int: Current diagnostic settings version
* **enabledLogCategories**: string[]: List of log categories that are enabled
* **name**: string: Name of the profile

## Permissions
### Properties
* **certificates**: ('all' | 'backup' | 'create' | 'delete' | 'deleteissuers' | 'get' | 'getissuers' | 'import' | 'list' | 'listissuers' | 'managecontacts' | 'manageissuers' | 'purge' | 'recover' | 'restore' | 'setissuers' | 'update' | string)[]: Permissions to certificates
* **keys**: ('all' | 'backup' | 'create' | 'decrypt' | 'delete' | 'encrypt' | 'get' | 'getrotationpolicy' | 'import' | 'list' | 'purge' | 'recover' | 'release' | 'restore' | 'rotate' | 'setrotationpolicy' | 'sign' | 'unwrapKey' | 'update' | 'verify' | 'wrapKey' | string)[]: Permissions to keys
* **secrets**: ('all' | 'backup' | 'delete' | 'get' | 'list' | 'purge' | 'recover' | 'restore' | 'set' | string)[]: Permissions to secrets
* **storage**: ('all' | 'backup' | 'delete' | 'deletesas' | 'get' | 'getsas' | 'list' | 'listsas' | 'purge' | 'recover' | 'regeneratekey' | 'restore' | 'set' | 'setsas' | 'update' | string)[]: Permissions to storage accounts

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
* **provisioningState**: 'Creating' | 'Deleting' | 'Disconnected' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the private endpoint connection.

## PrivateEndpointConnectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: 'None' | string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval or rejection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been approved, rejected or removed by the key vault owner.

## ProvisioningIssue
### Properties
* **name**: string (ReadOnly): Name of the issue
* **properties**: [ProvisioningIssueProperties](#provisioningissueproperties) (ReadOnly): Details of a provisioning issue for a network security perimeter (NSP) configuration. Resource providers should generate separate provisioning issue elements for each separate issue detected, and include a meaningful and distinctive description, as well as any appropriate suggestedResourceIds and suggestedAccessRules

## ProvisioningIssueProperties
### Properties
* **description**: string (ReadOnly): Description of the issue
* **issueType**: 'ConfigurationPropagationFailure' | 'MissingIdentityConfiguration' | 'MissingPerimeterConfiguration' | 'Unknown' | string (ReadOnly): Type of issue
* **severity**: 'Error' | 'Warning' | string (ReadOnly): Severity of the issue.
* **suggestedAccessRules**: [AccessRule](#accessrule)[] (ReadOnly): Access rules that can be added to the network security profile (NSP) to remediate the issue.
* **suggestedResourceIds**: string[] (ReadOnly): Fully qualified resource IDs of suggested resources that can be associated to the network security perimeter (NSP) to remediate the issue.

## ResourceAssociation
### Properties
* **accessMode**: 'Audit' | 'Enforced' | 'Learning' | string: Access mode of the resource association
* **name**: string: Name of the resource association

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
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TokenBindingParameters
### Properties
* **minimumTokenBindingStrength**: 'AttestedConfidential' | 'AttestedTrustedLaunch' | 'NoValidation' | 'Unattested' | string: Must be one of the following values "NoValidation", "Unattested", "AttestedTrustedLaunch", "AttestedConfidential". Strength of the token binding increases with each value in that order.
* **mode**: 'Enforced' | 'NotEnforced' | string: This specifies whether token binding is disabled, enabled or enforced.

## Trigger
### Properties
* **timeAfterCreate**: string: The time duration after key creation to rotate the key. It only applies to rotate. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.
* **timeBeforeExpiry**: string: The time duration before key expiring to rotate or notify. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VaultAccessPolicyProperties
### Properties
* **accessPolicies**: [AccessPolicyEntry](#accesspolicyentry)[] (Required): An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.

## VaultCheckNameAvailabilityParameters
### Properties
* **name**: string (Required): The vault name.
* **type**: 'Microsoft.KeyVault/vaults' (Required): The type of resource, Microsoft.KeyVault/vaults

## VaultCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VaultProperties
### Properties
* **accessPolicies**: [AccessPolicyEntry](#accesspolicyentry)[]: An array of 0 to 1024 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. When `createMode` is set to `recover`, access policies are not required. Otherwise, access policies are required.
* **createMode**: 'default' | 'recover' (WriteOnly): The vault's create mode to indicate whether the vault need to be recovered or not.
* **enableCrossTenantAccessProtection**: bool: Whether cross-tenant access protection is enabled for this vault. When enabled, the vault tenant ID can only be set or changed to the subscription's home tenant ID. Once enabled, this protection cannot be disabled. If omitted when creating a vault, protection is disabled. If omitted when updating a vault, the existing value is preserved.
* **enabledForDeployment**: bool: Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
* **enabledForDiskEncryption**: bool: Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
* **enabledForTemplateDeployment**: bool: Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
* **enablePurgeProtection**: bool: Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value.
* **enableRbacAuthorization**: bool: Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored. When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC.
* **enableSoftDelete**: bool: Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value(true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false.
* **hsmPoolResourceId**: string (ReadOnly): The resource id of HSM Pool.
* **networkAcls**: [NetworkRuleSet](#networkruleset): Rules governing the accessibility of the key vault from specific network locations.
* **privateEndpointConnections**: [PrivateEndpointConnectionItem](#privateendpointconnectionitem)[] (ReadOnly): List of private endpoint connections associated with the key vault.
* **protectionKeysWrappingKey**: [WrappingKeyConfiguration](#wrappingkeyconfiguration): Configures an external Managed HSM key used to wrap the vault's protection keys.
When configured, this property is returned in create, update, get, and list responses.
Responses contain the persisted key reference and authentication mechanism, not key material or credentials.
It can be supplied when creating a vault or enabling wrapping on an existing vault.
This property is available starting with API version 2026-10-01-preview, when the protection-key wrapping capability is available for the target vault.
Reapplying an equivalent configuration is supported; replacing or removing it is not.
A versionless reference can match the persisted versioned reference; resubmitting it does not rotate the key.
After configuration, vault availability depends on the persisted Managed HSM key version remaining usable and accessible to the service.
Disabling or deleting that key version, or revoking the service's access, can make the vault unavailable.
Omitting this property preserves the existing configuration.
* **provisioningState**: 'RegisteringDns' | 'Succeeded' | string: Provisioning state of the vault.
* **publicNetworkAccess**: string: Property to specify whether the vault will accept traffic from public internet. If set to 'disabled' all traffic except private endpoint traffic and that that originates from trusted services will be blocked. This will override the set firewall rules, meaning that even if the firewall rules are present we will not honor the rules.
* **sku**: [Sku](#sku) (Required): SKU details
* **softDeleteRetentionInDays**: int: softDelete data retention days. It accepts >=7 and <=90.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
* **tokenBindingParameters**: [TokenBindingParameters](#tokenbindingparameters): Configuration for Token Binding for Entra tokens
* **vaultUri**: string: The URI of the vault for performing operations on keys and secrets.

## VirtualNetworkRule
### Properties
* **id**: string (Required): Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
* **ignoreMissingVnetServiceEndpoint**: bool: Property to specify whether NRP will ignore the check if parent subnet has serviceEndpoints configured.

## WrappingKeyAuthenticationData
### Properties
* **authType**: 'ServiceIdentity' (Required): Authentication mechanism. Only ServiceIdentity is supported.
A caller-supplied vault managed identity is not required.

## WrappingKeyConfiguration
### Properties
* **keyAuthenticationData**: [WrappingKeyAuthenticationData](#wrappingkeyauthenticationdata) (Required): Specifies how the service authenticates to the external wrapping key.
* **keyValue**: [WrappingKeyValue](#wrappingkeyvalue) (Required): Identifies the external wrapping key.

## WrappingKeyValue
### Properties
* **kty**: 'oct' (Required): Wrapping key type. Only oct is supported.
* **url**: string {minLength: 1} (Required): Absolute HTTPS URL of a key on a supported Managed HSM endpoint.
The path must be /keys/{key-name} or /keys/{key-name}/{key-version}.
User information, query strings, fragments, and non-default ports are not supported.

