# Microsoft.OperationalInsights @ 2020-10-01

## Resource Microsoft.OperationalInsights/clusters@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Cluster properties.
* **sku**: [ClusterSku](#clustersku): The cluster sku definition.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the workspace.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspace properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required): Type of managed service identity.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## UserIdentityProperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ClusterProperties
### Properties
* **associatedWorkspaces**: [AssociatedWorkspace](#associatedworkspace)[]: The list of Log Analytics workspaces associated with the cluster
* **billingType**: 'Cluster' | 'Workspaces': Configures whether billing will be only on the cluster or each workspace will be billed by its proportional use. This does not change the overall billing, only how it will be distributed. Default value is 'Cluster'
* **capacityReservationProperties**: [CapacityReservationProperties](#capacityreservationproperties): The Capacity Reservation properties.
* **clusterId**: string (ReadOnly): The ID associated with the cluster.
* **createdDate**: string (ReadOnly): The cluster creation time
* **isAvailabilityZonesEnabled**: bool: Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones.
* **isDoubleEncryptionEnabled**: bool: Configures whether cluster will use double encryption. This Property can not be modified after cluster creation. Default value is 'true'
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The key vault properties.
* **lastModifiedDate**: string (ReadOnly): The last time the cluster was updated.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the cluster.

## AssociatedWorkspace
### Properties
* **associateDate**: string (ReadOnly): The time of workspace association.
* **resourceId**: string (ReadOnly): The ResourceId id the assigned workspace.
* **workspaceId**: string (ReadOnly): The id of the assigned workspace.
* **workspaceName**: string (ReadOnly): The name id the assigned workspace.

## CapacityReservationProperties
### Properties
* **lastSkuUpdate**: string (ReadOnly): The last time Sku was updated.
* **minCapacity**: int (ReadOnly): Minimum CapacityReservation value in GB.

## KeyVaultProperties
### Properties
* **keyName**: string: The name of the key associated with the Log Analytics cluster.
* **keyRsaSize**: int: Selected key minimum required size.
* **keyVaultUri**: string: The Key Vault uri which holds they key associated with the Log Analytics cluster.
* **keyVersion**: string: The version of the key associated with the Log Analytics cluster.

## ClusterSku
### Properties
* **capacity**: int: The capacity value
* **name**: 'CapacityReservation': The name of the SKU.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceProperties
### Properties
* **createdDate**: string (ReadOnly): Workspace creation date.
* **customerId**: string (ReadOnly): This is a read-only property. Represents the ID associated with the workspace.
* **features**: [WorkspaceFeatures](#workspacefeatures): Workspace features.
* **forceCmkForQuery**: bool: Indicates whether customer managed storage is mandatory for query management.
* **modifiedDate**: string (ReadOnly): Workspace modification date.
* **privateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly): List of linked private link scope resources.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating': The provisioning state of the workspace.
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled': The network access type for operating on the Log Analytics Workspace. By default it is Enabled
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled': The network access type for operating on the Log Analytics Workspace. By default it is Enabled
* **retentionInDays**: int: The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details.
* **sku**: [WorkspaceSku](#workspacesku): The SKU (tier) of a workspace.
* **workspaceCapping**: [WorkspaceCapping](#workspacecapping): The daily volume cap for ingestion.

## WorkspaceFeatures
### Properties
* **clusterResourceId**: string: Dedicated LA cluster resourceId that is linked to the workspaces.
* **disableLocalAuth**: bool: Disable Non-AAD based Auth.
* **enableDataExport**: bool: Flag that indicate if data should be exported.
* **enableLogAccessUsingOnlyResourcePermissions**: bool: Flag that indicate which permission to use - resource or workspace or both.
* **immediatePurgeDataOn30Days**: bool: Flag that describes if we want to remove the data after 30 days.

## PrivateLinkScopedResource
### Properties
* **resourceId**: string: The full resource Id of the private link scope resource.
* **scopeId**: string: The private link scope unique Identifier.

## WorkspaceSku
### Properties
* **capacityReservationLevel**: int: The capacity reservation level for this workspace, when CapacityReservation sku is selected.
* **lastSkuUpdate**: string (ReadOnly): The last time when the sku was updated.
* **name**: 'CapacityReservation' | 'Free' | 'LACluster' | 'PerGB2018' | 'PerNode' | 'Premium' | 'Standalone' | 'Standard' (Required): The name of the SKU.

## WorkspaceCapping
### Properties
* **dailyQuotaGb**: int: The workspace daily quota for ingestion.
* **dataIngestionStatus**: 'ApproachingQuota' | 'ForceOff' | 'ForceOn' | 'OverQuota' | 'RespectQuota' | 'SubscriptionSuspended' (ReadOnly): The status of data ingestion for this workspace.
* **quotaNextResetTime**: string (ReadOnly): The time when the quota will be rest.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

