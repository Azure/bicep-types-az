# Microsoft.FileShares @ 2026-09-01

## Resource Microsoft.FileShares/fileShares@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-z]|[0-9])([a-z]|[0-9]|(-(?!-))){1,61}([a-z]|[0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FileShareProperties](#fileshareproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.FileShares/fileShares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.FileShares/fileShares/fileShareSnapshots@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^([a-z]|[0-9])([a-z]|[0-9]|(-(?!-))){1,61}([a-z]|[0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FileShareSnapshotProperties](#filesharesnapshotproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.FileShares/fileShares/fileShareSnapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.FileShares/fileShares/privateEndpointConnections@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.FileShares/fileShares/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.FileShares/fileShares/privateLinkResources@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.FileShares/fileShares/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.FileShares/locations@2026-09-01)
* **Resource**: Microsoft.FileShares/locations
* **ApiVersion**: 2026-09-01
* **Input**: [CheckNameAvailabilityRequest](#checknameavailabilityrequest)
* **Output**: [CheckNameAvailabilityResponse](#checknameavailabilityresponse)

## Function getLimits (Microsoft.FileShares/locations@2026-09-01)
* **Resource**: Microsoft.FileShares/locations
* **ApiVersion**: 2026-09-01
* **Input**: [FileShareLimitsRequest](#filesharelimitsrequest)
* **Output**: [FileShareLimitsResponse](#filesharelimitsresponse)

## Function getProvisioningRecommendation (Microsoft.FileShares/locations@2026-09-01)
* **Resource**: Microsoft.FileShares/locations
* **ApiVersion**: 2026-09-01
* **Input**: [FileShareProvisioningRecommendationRequest](#fileshareprovisioningrecommendationrequest)
* **Output**: [FileShareProvisioningRecommendationResponse](#fileshareprovisioningrecommendationresponse)

## Function getRedundancyConversionStatus (Microsoft.FileShares/fileShares@2026-09-01)
* **Resource**: Microsoft.FileShares/fileShares
* **ApiVersion**: 2026-09-01
* **Output**: [RedundancyConversionStatusResponse](#redundancyconversionstatusresponse)

## Function getUsageData (Microsoft.FileShares/locations@2026-09-01)
* **Resource**: Microsoft.FileShares/locations
* **ApiVersion**: 2026-09-01
* **Output**: [FileShareUsageDataResponse](#fileshareusagedataresponse)

## Function startRedundancyConversion (Microsoft.FileShares/fileShares@2026-09-01)
* **Resource**: Microsoft.FileShares/fileShares
* **ApiVersion**: 2026-09-01
* **Input**: [StartRedundancyConversionRequest](#startredundancyconversionrequest)
* **Output**: any

## AzureResourceManagerCommonTypesCustomerManagedKeyEncryption
### Properties
* **keyEncryptionKeyIdentity**: [AzureResourceManagerCommonTypesKeyEncryptionKeyIdentity](#azureresourcemanagercommontypeskeyencryptionkeyidentity): All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
* **keyEncryptionKeyUrl**: string: key encryption key Url, versioned or non-versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.

## AzureResourceManagerCommonTypesKeyEncryptionKeyIdentity
### Properties
* **delegatedIdentityClientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: delegated identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and userAssignedIdentity - internal use only.
* **federatedClientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: application client identity to use for accessing key encryption key Url in a different tenant. Ex: f83c6b1b-4d34-47e4-bb34-9d83df58b540
* **identityType**: 'delegatedResourceIdentity' | 'systemAssignedIdentity' | 'userAssignedIdentity' | string: The type of identity to use. Values can be systemAssignedIdentity, userAssignedIdentity, or delegatedResourceIdentity.
* **userAssignedIdentityResourceId**: string: User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity.

## CheckNameAvailabilityRequest
### Properties
* **name**: string: The name of the resource for which availability needs to be checked.
* **type**: string: The resource type.

## CheckNameAvailabilityResponse
### Properties
* **message**: string: Detailed reason why the given name is available.
* **nameAvailable**: bool: Indicates if the resource name is available.
* **reason**: 'AlreadyExists' | 'Invalid' | string: The reason why the given name is not available.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## FileShareEncryption
### Properties
* **autoKeyRotationError**: [ErrorDetail](#errordetail) (ReadOnly): The last customer-actionable error encountered while automatically rotating to the latest key version.
* **currentKeyEncryptionKeyUrl**: string (ReadOnly): The versioned key encryption key URL currently applied to the file share by the service. When an unversioned keyEncryptionKeyUrl is supplied, this reflects the resolved latest key version currently in use.
* **customerManagedKeyEncryption**: [AzureResourceManagerCommonTypesCustomerManagedKeyEncryption](#azureresourcemanagercommontypescustomermanagedkeyencryption): All Customer-managed key encryption properties for the resource.
* **infrastructureEncryption**: 'disabled' | 'enabled' | string: Values are enabled and disabled.
* **lastKeyRotationTimestamp**: string (ReadOnly): The UTC timestamp when the service last successfully rotated the active customer-managed key version.

## FileShareLimits
### Properties
* **maxFileSharePrivateEndpointConnections**: int (Required): The maximum number of private endpoint connections allowed for a file share.
* **maxFileShares**: int (Required): The maximum number of file shares that can be created.
* **maxFileShareSnapshots**: int (Required): The maximum number of snapshots allowed per file share.
* **maxFileShareSubnets**: int (Required): The maximum number of subnets that can be associated with a file share.
* **maxProvisionedIOPerSec**: int (Required): The maximum provisioned IOPS (Input/Output Operations Per Second) for a file share.
* **maxProvisionedStorageGiB**: int (Required): The maximum provisioned storage in GiB for a file share.
* **maxProvisionedThroughputMiBPerSec**: int (Required): The maximum provisioned throughput in MiB/s for a file share.
* **minProvisionedIOPerSec**: int (Required): The minimum provisioned IOPS (Input/Output Operations Per Second) for a file share.
* **minProvisionedStorageGiB**: int (Required): The minimum provisioned storage in GiB for a file share.
* **minProvisionedThroughputMiBPerSec**: int (Required): The minimum provisioned throughput in MiB/s for a file share.

## FileShareLimitsOutput
### Properties
* **limits**: [FileShareLimits](#filesharelimits) (Required): The limits for the file share.
* **provisioningConstants**: [FileShareProvisioningConstants](#fileshareprovisioningconstants) (Required): The provisioning constants for the file share.

## FileShareLimitsRequest
### Properties
* **properties**: [FileShareOfferInput](#fileshareofferinput) (Required): Properties used to select the file share offer.

## FileShareLimitsResponse
### Properties
* **properties**: [FileShareLimitsOutput](#filesharelimitsoutput) (Required): The properties of the file share limits.

## FileShareOfferInput
### Properties
* **mediaTier**: 'HDD' | 'SSD' | string: The storage media tier. Defaults to SSD.
* **protocol**: 'NFS' | string: The file sharing protocol. Defaults to NFS.
* **scaleMode**: 'Compatibility' | 'Scale' | string: The scale mode. Defaults to Compatibility.

## FileShareProperties
### Properties
* **encryption**: [FileShareEncryption](#fileshareencryption): Encryption settings for the file share.
* **hostName**: string (ReadOnly): The host name of the file share.
* **includedBurstIOPerSec**: int {minValue: 3000} (ReadOnly): Burst IOPS are extra buffer IOPS enabling you to consume more than your provisioned IOPS for a short period of time, depending on the burst credits available for your share.
* **maxBurstIOPerSecCredits**: int {minValue: 0} (ReadOnly): Max burst IOPS credits shows the maximum number of burst credits the share can have at the current IOPS provisioning level.
* **mediaTier**: 'HDD' | 'SSD' | string: The storage media tier of the file share.
* **migrationState**: [MigrationState](#migrationstate) (ReadOnly): The current migration state of the file share.
* **mountName**: string: The name of the file share as seen by the end user when mounting the share, such as in a URI or UNC format in their operating system.
* **nfsProtocolProperties**: [NfsProtocolProperties](#nfsprotocolproperties): Protocol settings specific NFS.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of associated private endpoint connections.
* **protocol**: 'NFS' | string: The file sharing protocol for this file share.
* **provisionedIOPerSec**: int: The provisioned IO / sec of the share.
* **provisionedIOPerSecNextAllowedDowngrade**: string (ReadOnly): A date/time value that specifies when the provisioned IOPS for the file share is permitted to be reduced.
* **provisionedStorageGiB**: int: The provisioned storage size of the share in GiB (1 GiB is 1024^3 bytes or 1073741824 bytes). A component of the file share's bill is the provisioned storage, regardless of the amount of used storage.
* **provisionedStorageNextAllowedDowngrade**: string (ReadOnly): A date/time value that specifies when the provisioned storage for the file share is permitted to be reduced.
* **provisionedThroughputMiBPerSec**: int: The provisioned throughput / sec of the share.
* **provisionedThroughputNextAllowedDowngrade**: string (ReadOnly): A date/time value that specifies when the provisioned throughput for the file share is permitted to be reduced.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'Patching' | 'Posting' | 'Provisioning' | 'Succeeded' | 'TransientFailure' | 'Updating' | string (ReadOnly): The status of the last operation.
* **publicAccessProperties**: [PublicAccessProperties](#publicaccessproperties): The set of properties for control public access.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Gets or sets allow or disallow public network access to azure managed file share
* **redundancy**: 'Local' | 'Zone' | string: The chosen redundancy level of the file share.
* **scaleMode**: 'Compatibility' | 'Scale' | string: The scale mode selected when the file share is created.

## FileShareProvisioningConstants
### Properties
* **baseIOPerSec**: int (Required): Base IO per second.
* **baseThroughputMiBPerSec**: int (Required): Base throughput in MiB per second.
* **guardrailIOPerSecScalar**: int (Required): Guardrail scalar IO per second.
* **guardrailThroughputScalar**: int (Required): Guardrail scalar throughput in MiB per second.
* **scalarIOPerSec**: int (Required): Scalar IO per second.
* **scalarThroughputMiBPerSec**: int (Required): Scalar throughput in MiB per second.

## FileShareProvisioningRecommendationInput
### Properties
* **mediaTier**: 'HDD' | 'SSD' | string: The storage media tier. Defaults to SSD.
* **protocol**: 'NFS' | string: The file sharing protocol. Defaults to NFS.
* **provisionedStorageGiB**: int (Required): The desired provisioned storage size of the share in GiB. Will be use to calculate the values of remaining provisioning parameters.
* **scaleMode**: 'Compatibility' | 'Scale' | string: The scale mode. Defaults to Compatibility.

## FileShareProvisioningRecommendationOutput
### Properties
* **availableRedundancyOptions**: ('Local' | 'Zone' | string)[] (Required): Redundancy options for the share.
* **provisionedIOPerSec**: int (Required): The recommended value of provisioned IO / sec of the share.
* **provisionedThroughputMiBPerSec**: int (Required): The recommended value of provisioned throughput / sec of the share.

## FileShareProvisioningRecommendationRequest
### Properties
* **properties**: [FileShareProvisioningRecommendationInput](#fileshareprovisioningrecommendationinput) (Required): The properties of the file share provisioning recommendation input.

## FileShareProvisioningRecommendationResponse
### Properties
* **properties**: [FileShareProvisioningRecommendationOutput](#fileshareprovisioningrecommendationoutput) (Required): The properties of the file share provisioning recommendation output.

## FileShareSnapshotProperties
### Properties
* **initiatorId**: string: The initiator of the FileShareSnapshot. This is a user-defined value.
* **metadata**: [FileShareSnapshotPropertiesMetadata](#filesharesnapshotpropertiesmetadata): The metadata
* **snapshotTime**: string (ReadOnly): The FileShareSnapshot time in UTC in string representation

## FileShareSnapshotPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FileShareUsageDataOutput
### Properties
* **liveShares**: [LiveSharesUsageData](#livesharesusagedata) (Required): File share usage data for active file shares.

## FileShareUsageDataResponse
### Properties
* **properties**: [FileShareUsageDataOutput](#fileshareusagedataoutput) (Required): The properties of the file share usage data.

## LiveSharesUsageData
### Properties
* **fileShareCount**: int (Required): The number of active file shares.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## MigrationState
### Properties
* **redundancyConversionInProgress**: bool (Required, ReadOnly): Indicates whether a redundancy conversion is in progress for the file share.

## NfsProtocolProperties
### Properties
* **encryptionInTransitRequired**: 'Disabled' | 'Enabled' | string: Encryption in transit defines whether data is encrypted for NFS shares.
* **rootSquash**: 'AllSquash' | 'NoRootSquash' | 'RootSquash' | string: Root squash defines how root users on clients are mapped to the NFS share.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[] (ReadOnly): The private link resource private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## PublicAccessProperties
### Properties
* **allowedSubnets**: string[]: The allowed set of subnets when access is restricted.

## RedundancyConversionStatusOutput
### Properties
* **conversionFailedDetailedReason**: string (ReadOnly): Detailed information about why the redundancy conversion failed.
* **conversionFailedReason**: string (ReadOnly): The reason the redundancy conversion failed.
* **conversionStatus**: 'Complete' | 'Failed' | 'InProgress' | 'SubmittedForConversion' | string (Required, ReadOnly): The current status of the redundancy conversion.
* **targetRedundancy**: 'Local' | 'Zone' | string (Required, ReadOnly): The target redundancy requested for the redundancy conversion.

## RedundancyConversionStatusResponse
### Properties
* **properties**: [RedundancyConversionStatusOutput](#redundancyconversionstatusoutput) (Required): Properties containing the redundancy conversion status output.

## StartRedundancyConversionInput
### Properties
* **targetRedundancy**: 'Local' | 'Zone' | string (Required): The requested target redundancy for the conversion.

## StartRedundancyConversionRequest
### Properties
* **properties**: [StartRedundancyConversionInput](#startredundancyconversioninput) (Required): Properties containing the redundancy conversion input.

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

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

