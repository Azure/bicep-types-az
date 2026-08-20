# Microsoft.RecoveryServices @ 2025-02-01

## Resource Microsoft.RecoveryServices/vaults@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: etag for the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityData](#identitydata): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VaultProperties](#vaultproperties): Properties of the vault.
* **sku**: [Sku](#sku): Identifies the unique system identifier for each Azure resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/certificates@2025-02-01
* **Readable Scope(s)**: None
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RawCertificateData](#rawcertificatedata): Raw certificate data.
* **type**: 'Microsoft.RecoveryServices/vaults/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/extendedInformation@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: etag for the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'vaultExtendedInfo' (Required, DeployTimeConstant): The resource name
* **properties**: [VaultExtendedInfo](#vaultextendedinfo): Vault extended information.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.RecoveryServices/vaults/extendedInformation' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/operationResults@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): etag for the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityData](#identitydata) (ReadOnly): Identity for the resource.
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VaultProperties](#vaultproperties) (ReadOnly): Properties of the vault.
* **sku**: [Sku](#sku) (ReadOnly): Identifies the unique system identifier for each Azure resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.RecoveryServices/vaults/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/privateLinkResources@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.RecoveryServices/vaults/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function capabilities (Microsoft.RecoveryServices/locations@2025-02-01)
* **Resource**: Microsoft.RecoveryServices/locations
* **ApiVersion**: 2025-02-01
* **Input**: [ResourceCapabilities](#resourcecapabilities)
* **Output**: [CapabilitiesResponse](#capabilitiesresponse)

## Function checkNameAvailability (Microsoft.RecoveryServices/locations@2025-02-01)
* **Resource**: Microsoft.RecoveryServices/locations
* **ApiVersion**: 2025-02-01
* **Input**: [CheckNameAvailabilityParameters](#checknameavailabilityparameters)
* **Output**: [CheckNameAvailabilityResult](#checknameavailabilityresult)

## AssociatedIdentity
### Properties
* **operationIdentityType**: 'SystemAssigned' | 'UserAssigned' | string: Identity type that should be used for an operation.
* **userAssignedIdentity**: string: User assigned identity to be used for an operation if operationIdentityType is UserAssigned.

## AzureMonitorAlertSettings
### Properties
* **alertsForAllFailoverIssues**: 'Disabled' | 'Enabled' | string
* **alertsForAllJobFailures**: 'Disabled' | 'Enabled' | string
* **alertsForAllReplicationIssues**: 'Disabled' | 'Enabled' | string

## CapabilitiesProperties
### Properties
* **dnsZones**: [DNSZone](#dnszone)[]

## CapabilitiesResponse
### Properties
* **properties**: [CapabilitiesResponseProperties](#capabilitiesresponseproperties): Capabilities properties in response
* **type**: string (Required): Describes the Resource type: Microsoft.RecoveryServices/Vaults

## CapabilitiesResponseProperties
### Properties
* **dnsZones**: [DNSZoneResponse](#dnszoneresponse)[]

## CheckNameAvailabilityParameters
### Properties
* **name**: string: Resource name for which availability needs to be checked
* **type**: string: Describes the Resource type: Microsoft.RecoveryServices/Vaults

## CheckNameAvailabilityResult
### Properties
* **message**: string
* **nameAvailable**: bool
* **reason**: string

## ClassicAlertSettings
### Properties
* **alertsForCriticalOperations**: 'Disabled' | 'Enabled' | string
* **emailNotificationsForSiteRecovery**: 'Disabled' | 'Enabled' | string

## CmkKekIdentity
### Properties
* **userAssignedIdentity**: string: The user assigned identity to be used to grant permissions in case the type of identity used is UserAssigned
* **useSystemAssignedIdentity**: bool: Indicate that system assigned identity should be used. Mutually exclusive with 'userAssignedIdentity' field

## CmkKeyVaultProperties
### Properties
* **keyUri**: string: The key uri of the Customer Managed Key

## CrossSubscriptionRestoreSettings
### Properties
* **crossSubscriptionRestoreState**: 'Disabled' | 'Enabled' | 'PermanentlyDisabled' | string

## DNSZone
### Properties
* **subResource**: 'AzureBackup' | 'AzureBackup_secondary' | 'AzureSiteRecovery' | string: Subresource type for vault AzureBackup, AzureBackup_secondary or AzureSiteRecovery

## DNSZoneResponse
### Properties
* **requiredZoneNames**: string[]: The private link resource Private link DNS zone names.
* **subResource**: 'AzureBackup' | 'AzureBackup_secondary' | 'AzureSiteRecovery' | string: Subresource type for vault AzureBackup, AzureBackup_secondary or AzureSiteRecovery

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

## ImmutabilitySettings
### Properties
* **state**: 'Disabled' | 'Locked' | 'Unlocked' | string

## MonitoringSettings
### Properties
* **azureMonitorAlertSettings**: [AzureMonitorAlertSettings](#azuremonitoralertsettings): Settings for Azure Monitor based alerts
* **classicAlertSettings**: [ClassicAlertSettings](#classicalertsettings): Settings for classic alerts

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): Gets or sets id.

## PrivateEndpointConnection
### Properties
* **groupIds**: ('AzureBackup' | 'AzureBackup_secondary' | 'AzureSiteRecovery' | string)[]: Group Ids for the Private Endpoint
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): The Private Endpoint network resource that is linked to the Private Endpoint connection.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly): Gets or sets private link service connection state.
* **provisioningState**: 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | string (ReadOnly): Gets or sets provisioning state of the private endpoint connection.

## PrivateEndpointConnectionVaultProperties
### Properties
* **id**: string (ReadOnly): Format of id subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.[Service]/{resource}/{resourceName}/privateEndpointConnections/{connectionName}.
* **location**: string (ReadOnly): The location of the private Endpoint connection
* **name**: string (ReadOnly): The name of the private Endpoint Connection
* **properties**: [PrivateEndpointConnection](#privateendpointconnection) (ReadOnly): Private Endpoint Connection Response Properties.
* **type**: string (ReadOnly): The type, which will be of the format, Microsoft.RecoveryServices/vaults/privateEndpointConnections

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): e.g. f9ad6492-33d4-4690-9999-6bfd52a0d081 (Backup) or f9ad6492-33d4-4690-9999-6bfd52a0d082 (SiteRecovery)
* **requiredMembers**: string[] (ReadOnly): [backup-ecs1, backup-prot1, backup-prot1b, backup-prot1c, backup-id1]
* **requiredZoneNames**: string[] (ReadOnly): The private link resource Private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly): Gets or sets actions required.
* **description**: string (ReadOnly): Gets or sets description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (ReadOnly): Gets or sets the status.

## RawCertificateData
### Properties
* **authType**: 'AAD' | 'ACS' | 'AccessControlService' | 'AzureActiveDirectory' | 'Invalid' | string: Specifies the authentication type.
* **certificate**: any: The base64 encoded certificate raw data string

## ResourceCapabilities
### Properties
* **properties**: [CapabilitiesProperties](#capabilitiesproperties): Capabilities information
* **type**: string (Required): Describes the Resource type: Microsoft.RecoveryServices/Vaults

## RestoreSettings
### Properties
* **crossSubscriptionRestoreSettings**: [CrossSubscriptionRestoreSettings](#crosssubscriptionrestoresettings): Settings for CrossSubscriptionRestore

## SecuritySettings
### Properties
* **immutabilitySettings**: [ImmutabilitySettings](#immutabilitysettings): Immutability Settings of a vault
* **multiUserAuthorization**: 'Disabled' | 'Enabled' | 'Invalid' | string (ReadOnly): MUA Settings of a vault
* **softDeleteSettings**: [SoftDeleteSettings](#softdeletesettings): Soft delete Settings of a vault
* **sourceScanConfiguration**: [SourceScanConfiguration](#sourcescanconfiguration): Source scan configuration of vault

## Sku
### Properties
* **capacity**: string: The sku capacity
* **family**: string: The sku family
* **name**: 'RS0' | 'Standard' | string (Required): Name of SKU is RS0 (Recovery Services 0th version) and the tier is standard tier. They do not have affect on backend storage redundancy or any other vault settings. To manage storage redundancy, use the backupstorageconfig
* **size**: string: The sku size
* **tier**: string: The Sku tier.

## SoftDeleteSettings
### Properties
* **enhancedSecurityState**: 'AlwaysON' | 'Disabled' | 'Enabled' | 'Invalid' | string
* **softDeleteRetentionPeriodInDays**: int: Soft delete retention period in days
* **softDeleteState**: 'AlwaysON' | 'Disabled' | 'Enabled' | 'Invalid' | string

## SourceScanConfiguration
### Properties
* **sourceScanIdentity**: [AssociatedIdentity](#associatedidentity): Identity details to be used for an operation
* **state**: 'Disabled' | 'Enabled' | 'Invalid' | string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## UserIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the user-assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the user-assigned identity.

## VaultExtendedInfo
### Properties
* **algorithm**: string: Algorithm for Vault ExtendedInfo
* **encryptionKey**: string: Encryption key.
* **encryptionKeyThumbprint**: string: Encryption key thumbprint.
* **integrityKey**: string: Integrity key.

## VaultProperties
### Properties
* **backupStorageVersion**: 'Unassigned' | 'V1' | 'V2' | string (ReadOnly): Backup storage version
* **bcdrSecurityLevel**: 'Excellent' | 'Fair' | 'Good' | 'Poor' | string (ReadOnly): Security levels of Recovery Services Vault for business continuity and disaster recovery
* **encryption**: [VaultPropertiesEncryption](#vaultpropertiesencryption): Customer Managed Key details of the resource.
* **monitoringSettings**: [MonitoringSettings](#monitoringsettings): Monitoring Settings of the vault
* **moveDetails**: [VaultPropertiesMoveDetails](#vaultpropertiesmovedetails): The details of the latest move operation performed on the Azure Resource
* **moveState**: 'CommitFailed' | 'CommitTimedout' | 'CriticalFailure' | 'Failure' | 'InProgress' | 'MoveSucceeded' | 'PartialSuccess' | 'PrepareFailed' | 'PrepareTimedout' | 'Unknown' | string (ReadOnly): The State of the Resource after the move operation
* **privateEndpointConnections**: [PrivateEndpointConnectionVaultProperties](#privateendpointconnectionvaultproperties)[] (ReadOnly): List of private endpoint connection.
* **privateEndpointStateForBackup**: 'Enabled' | 'None' | string (ReadOnly): Private endpoint state for backup.
* **privateEndpointStateForSiteRecovery**: 'Enabled' | 'None' | string (ReadOnly): Private endpoint state for site recovery.
* **provisioningState**: string (ReadOnly): Provisioning State.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: property to enable or disable resource provider inbound network traffic from public clients
* **redundancySettings**: [VaultPropertiesRedundancySettings](#vaultpropertiesredundancysettings): The redundancy Settings of a Vault
* **resourceGuardOperationRequests**: string[]: ResourceGuardOperationRequests on which LAC check will be performed
* **restoreSettings**: [RestoreSettings](#restoresettings): Restore Settings of the vault
* **secureScore**: 'Adequate' | 'Maximum' | 'Minimum' | 'None' | string (ReadOnly): Secure Score of Recovery Services Vault
* **securitySettings**: [SecuritySettings](#securitysettings): Security Settings of the vault
* **upgradeDetails**: [UpgradeDetails](#upgradedetails): Details for upgrading vault.

## VaultPropertiesEncryption
### Properties
* **infrastructureEncryption**: 'Disabled' | 'Enabled' | string: Enabling/Disabling the Double Encryption state
* **kekIdentity**: [CmkKekIdentity](#cmkkekidentity): The details of the identity used for CMK
* **keyVaultProperties**: [CmkKeyVaultProperties](#cmkkeyvaultproperties): The properties of the Key Vault which hosts CMK

## VaultPropertiesMoveDetails
### Properties
* **completionTimeUtc**: string (ReadOnly): End Time of the Resource Move Operation
* **operationId**: string (ReadOnly): OperationId of the Resource Move Operation
* **sourceResourceId**: string (ReadOnly): Source Resource of the Resource Move Operation
* **startTimeUtc**: string (ReadOnly): Start Time of the Resource Move Operation
* **targetResourceId**: string (ReadOnly): Target Resource of the Resource Move Operation

## VaultPropertiesRedundancySettings
### Properties
* **crossRegionRestore**: 'Disabled' | 'Enabled' | string: Flag to show if Cross Region Restore is enabled on the Vault or not
* **standardTierStorageRedundancy**: 'GeoRedundant' | 'Invalid' | 'LocallyRedundant' | 'ZoneRedundant' | string: The storage redundancy setting of a vault

