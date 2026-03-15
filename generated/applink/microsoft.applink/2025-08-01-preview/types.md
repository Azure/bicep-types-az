# Microsoft.AppLink @ 2025-08-01-preview

## Resource Microsoft.AppLink/appLinks@2025-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AppLinkProperties](#applinkproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AppLink/appLinks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppLink/appLinks/appLinkMembers@2025-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AppLinkMemberProperties](#applinkmemberproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AppLink/appLinks/appLinkMembers' (ReadOnly, DeployTimeConstant): The resource type

## AppLinkMemberProperties
### Properties
* **clusterType**: 'AKS' | string: Cluster type
* **connectivityProfile**: [ConnectivityProfile](#connectivityprofile): Connectivity profile.
* **metadata**: [Metadata](#metadata) (Required): AppLink Member Metadata
* **observabilityProfile**: [ObservabilityProfile](#observabilityprofile): Observability profile
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state
* **upgradeProfile**: [UpgradeProfile](#upgradeprofile): Upgrade profile.

## AppLinkProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state

## ConnectivityProfile
### Properties
* **eastWestGateway**: [EastWestGatewayProfile](#eastwestgatewayprofile): East-West gateway profile.
* **privateConnect**: [PrivateConnectProfile](#privateconnectprofile): Private connect profile.

## EastWestGatewayProfile
### Properties
* **visibility**: 'External' | 'Internal' | string (Required): East-West gateway visibility.

## FullyManagedUpgradeProfile
### Properties
* **releaseChannel**: 'Rapid' | 'Stable' | string (Required): Release channel

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## Metadata
### Properties
* **resourceId**: string (Required): Resource ID

## MetricsProfile
### Properties
* **metricsEndpoint**: string (ReadOnly): Metrics endpoint URL

## ObservabilityProfile
### Properties
* **metrics**: [MetricsProfile](#metricsprofile): Metrics configuration

## PrivateConnectProfile
### Properties
* **subnetResourceId**: string (Required): Delegated Subnet to AppLink.

## SelfManagedUpgradeProfile
### Properties
* **version**: string (Required): Istio version

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

## UpgradeProfile
### Properties
* **fullyManagedUpgradeProfile**: [FullyManagedUpgradeProfile](#fullymanagedupgradeprofile): Fully managed upgrade profile.
* **mode**: 'FullyManaged' | 'SelfManaged' | string (Required): Upgrade mode.
* **selfManagedUpgradeProfile**: [SelfManagedUpgradeProfile](#selfmanagedupgradeprofile): Self managed upgrade profile.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

