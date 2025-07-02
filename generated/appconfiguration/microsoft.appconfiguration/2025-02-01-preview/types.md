# Microsoft.AppConfiguration @ 2025-02-01-preview

## Resource Microsoft.AppConfiguration/configurationStores@2025-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The managed identity information, if configured.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 5, maxLength: 50, pattern: "^[a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationStoreProperties](#configurationstoreproperties): The properties of a configuration store.
* **sku**: [Sku](#sku) (Required): The sku of the configuration store.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AppConfiguration/configurationStores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppConfiguration/configurationStores/experimentation@2025-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^default$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentationProperties](#experimentationproperties): All experimentation properties.
* **type**: 'Microsoft.AppConfiguration/configurationStores/experimentation' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppConfiguration/configurationStores/keyValues@2025-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [KeyValueProperties](#keyvalueproperties): All key-value properties.
* **type**: 'Microsoft.AppConfiguration/configurationStores/keyValues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2025-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The properties of a private endpoint.
* **type**: 'Microsoft.AppConfiguration/configurationStores/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppConfiguration/configurationStores/replicas@2025-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the replica.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReplicaProperties](#replicaproperties) (ReadOnly): All replica properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **type**: 'Microsoft.AppConfiguration/configurationStores/replicas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppConfiguration/configurationStores/snapshots@2025-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^\x00-\x1F\x7F]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties): All snapshot properties.
* **type**: 'Microsoft.AppConfiguration/configurationStores/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.AppConfiguration/configurationStores@2025-02-01-preview)
* **Resource**: Microsoft.AppConfiguration/configurationStores
* **ApiVersion**: 2025-02-01-preview
* **Output**: [ApiKeyListResult](#apikeylistresult)

## ApiKey
### Properties
* **connectionString**: string (ReadOnly): A connection string that can be used by supporting clients for authentication.
* **id**: string (ReadOnly): The key ID.
* **lastModified**: string (ReadOnly): The last time any of the key's properties were modified.
* **name**: string (ReadOnly): A name for the key describing its usage.
* **readOnly**: bool (ReadOnly): Whether this key can only be used for read operations.
* **value**: string (ReadOnly): The value of the key that is used for authentication purposes.

## ApiKeyListResult
### Properties
* **nextLink**: string: The URI that can be used to request the next set of paged results.
* **value**: [ApiKey](#apikey)[]: The collection value.

## ConfigurationStoreProperties
### Properties
* **createMode**: 'Default' | 'Recover' (WriteOnly): Indicates whether the configuration store need to be recovered.
* **creationDate**: string (ReadOnly): The creation date of configuration store.
* **dataPlaneProxy**: [DataPlaneProxyProperties](#dataplaneproxyproperties): Property specifying the configuration of data plane proxy for Azure Resource Manager (ARM).
* **defaultKeyValueRevisionRetentionPeriodInSeconds**: int: The duration in seconds to retain new key value revisions. Defaults to 604800 (7 days) for Free SKU stores and 2592000 (30 days) for Standard SKU stores and Premium SKU stores.
* **disableLocalAuth**: bool: Disables all authentication methods other than AAD authentication.
* **enablePurgeProtection**: bool: Property specifying whether protection against purge is enabled for this configuration store.
* **encryption**: [EncryptionProperties](#encryptionproperties): The encryption settings of the configuration store.
* **endpoint**: string (ReadOnly): The DNS endpoint where the configuration store API will be available.
* **managedOnBehalfOfConfiguration**: [ManagedOnBehalfOfConfiguration](#managedonbehalfofconfiguration) (ReadOnly): Managed On Behalf Of Configuration.
* **privateEndpointConnections**: [PrivateEndpointConnectionReference](#privateendpointconnectionreference)[] (ReadOnly): The list of private endpoint connections that are set up for this resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the configuration store.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Control permission for data plane traffic coming from public networks while private endpoint is enabled.
* **softDeleteRetentionInDays**: int: The amount of time in days that the configuration store will be retained when it is soft deleted.
* **telemetry**: [TelemetryProperties](#telemetryproperties): Property specifying the configuration of telemetry for this configuration store

## DataPlaneProxyProperties
### Properties
* **authenticationMode**: 'Local' | 'Pass-through' | string: The data plane proxy authentication mode. This property manages the authentication mode of request to the data plane resources.
* **privateLinkDelegation**: 'Disabled' | 'Enabled' | string: The data plane proxy private link delegation. This property manages if a request from delegated ARM private link is allowed when the data plane resource requires private link.

## EncryptionProperties
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Key vault properties.

## ExperimentationProperties
### Properties
* **managedResourceGroupName**: string: The name of the managed resource group.
* **onlineExperimentationWorkspaceResourceId**: string (ReadOnly): The resource ID of the managed Microsoft.OnlineExperimentation/workspaces resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the experimentation.
* **storageAccountResourceId**: string (ReadOnly): The resource ID of the managed Microsoft.Storage/storageAccounts resource.

## KeyValueFilter
### Properties
* **key**: string (Required): Filters key-values by their key field.
* **label**: string: Filters key-values by their label field.

## KeyValueProperties
### Properties
* **contentType**: string: The content type of the key-value's value.
Providing a proper content-type can enable transformations of values when they are retrieved by applications.
* **eTag**: string (ReadOnly): An ETag indicating the state of a key-value within a configuration store.
* **key**: string (ReadOnly): The primary identifier of a key-value.
The key is used in unison with the label to uniquely identify a key-value.
* **label**: string (ReadOnly): A value used to group key-values.
The label is used in unison with the key to uniquely identify a key-value.
* **lastModified**: string (ReadOnly): The last time a modifying operation was performed on the given key-value.
* **locked**: bool (ReadOnly): A value indicating whether the key-value is locked.
A locked key-value may not be modified until it is unlocked.
* **tags**: [KeyValuePropertiesTags](#keyvaluepropertiestags): A dictionary of tags that can help identify what a key-value may be applicable for.
* **value**: string: The value of the key-value.

## KeyValuePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## KeyVaultProperties
### Properties
* **identityClientId**: string: The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string: The URI of the key vault key used to encrypt data.

## ManagedOnBehalfOfConfiguration
### Properties
* **moboBrokerResources**: [MoboBrokerResource](#mobobrokerresource)[]: Managed-On-Behalf-Of broker resources

## MoboBrokerResource
### Properties
* **id**: string: Resource identifier of a Managed-On-Behalf-Of broker resource

## PrivateEndpoint
### Properties
* **id**: string: The resource Id for private endpoint

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private endpoint.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning status of the private endpoint connection.

## PrivateEndpointConnectionReference
### Properties
* **id**: string (ReadOnly): The resource ID.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The properties of a private endpoint connection.
* **type**: string (ReadOnly): The type of the resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: 'None' | 'Recreate' | string (ReadOnly): Any action that is required beyond basic workflow (approve/ reject/ disconnect)
* **description**: string: The private link service connection description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: The private link service connection status.

## ReplicaProperties
### Properties
* **endpoint**: string (ReadOnly): The URI of the replica where the replica API will be available.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the replica.

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity. This property will only be provided for a system-assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string: The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
* **userAssignedIdentities**: [ResourceIdentityUserAssignedIdentities](#resourceidentityuserassignedidentities): The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## ResourceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## Sku
### Properties
* **name**: string (Required): The SKU name of the configuration store.

## SnapshotProperties
### Properties
* **compositionType**: 'Key' | 'Key_Label' | string: The composition type describes how the key-values within the snapshot are composed. The 'key' composition type ensures there are no two key-values containing the same key. The 'key_label' composition type ensures there are no two key-values containing the same key and label.
* **created**: string (ReadOnly): The time that the snapshot was created.
* **etag**: string (ReadOnly): A value representing the current state of the snapshot.
* **expires**: string (ReadOnly): The time that the snapshot will expire.
* **filters**: [KeyValueFilter](#keyvaluefilter)[] {minLength: 1, maxLength: 3} (Required): A list of filters used to filter the key-values included in the snapshot.
* **itemsCount**: int (ReadOnly): The amount of key-values in the snapshot.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the snapshot.
* **retentionPeriod**: int {minValue: 3600, maxValue: 7776000}: The amount of time, in seconds, that a snapshot will remain in the archived state before expiring. This property is only writable during the creation of a snapshot. If not specified, the default lifetime of key-value revisions will be used.
* **size**: int (ReadOnly): The size in bytes of the snapshot.
* **status**: 'Archived' | 'Failed' | 'Provisioning' | 'Ready' | string (ReadOnly): The current status of the snapshot.
* **tags**: [SnapshotPropertiesTags](#snapshotpropertiestags): The tags of the snapshot. NOTE: These are data plane tags, not ARM tags.

## SnapshotPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TelemetryProperties
### Properties
* **resourceId**: string: Resource ID of a resource enabling telemetry collection

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the user-assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the user-assigned identity.

