# Microsoft.ContainerService @ 2024-05-02-preview

## Resource Microsoft.ContainerService/fleets@2024-05-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed identity.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetProperties](#fleetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/fleets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/autoUpgradeProfiles@2024-05-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AutoUpgradeProfileProperties](#autoupgradeprofileproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/autoUpgradeProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/members@2024-05-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetMemberProperties](#fleetmemberproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/members' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/updateRuns@2024-05-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateRunProperties](#updaterunproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/updateRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/updateStrategies@2024-05-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetUpdateStrategyProperties](#fleetupdatestrategyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/updateStrategies' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.ContainerService/fleets@2024-05-02-preview)
* **Resource**: Microsoft.ContainerService/fleets
* **ApiVersion**: 2024-05-02-preview
* **Output**: [FleetCredentialResults](#fleetcredentialresults)

## AgentProfile
### Properties
* **subnetId**: string: The ID of the subnet which the Fleet hub node will join on startup. If this is not specified, a vnet and subnet will be generated and used.
* **vmSize**: string: The virtual machine size of the Fleet hub.

## APIServerAccessProfile
### Properties
* **enablePrivateCluster**: bool: Whether to create the Fleet hub as a private cluster or not.
* **enableVnetIntegration**: bool: Whether to enable apiserver vnet integration for the Fleet hub or not.
* **subnetId**: string: The subnet to be used when apiserver vnet integration is enabled. It is required when creating a new Fleet with BYO vnet.

## AutoUpgradeNodeImageSelection
### Properties
* **type**: 'Consistent' | 'Latest' | string (Required): The node image upgrade type.

## AutoUpgradeProfileProperties
### Properties
* **channel**: 'NodeImage' | 'Rapid' | 'Stable' | string (Required): Configures how auto-upgrade will be run.
* **disabled**: bool: If set to False: the auto upgrade has effect - target managed clusters will be upgraded on schedule.
If set to True: the auto upgrade has no effect - no upgrade will be run on the target managed clusters.
This is a boolean and not an enum because enabled/disabled are all available states of the auto upgrade profile.
By default, this is set to False.
* **nodeImageSelection**: [AutoUpgradeNodeImageSelection](#autoupgradenodeimageselection): The node image upgrade to be applied to the target clusters in auto upgrade.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the AutoUpgradeProfile resource.
* **updateStrategyId**: string: The resource id of the UpdateStrategy resource to reference. If not specified, the auto upgrade will run on all clusters which are members of the fleet.

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

## FleetCredentialResult
### Properties
* **name**: string (ReadOnly): The name of the credential.
* **value**: any (ReadOnly): Base64-encoded Kubernetes configuration file.

## FleetCredentialResults
### Properties
* **kubeconfigs**: [FleetCredentialResult](#fleetcredentialresult)[] (ReadOnly): Array of base64-encoded Kubernetes configuration files.

## FleetHubProfile
### Properties
* **agentProfile**: [AgentProfile](#agentprofile): The agent profile for the Fleet hub.
* **apiServerAccessProfile**: [APIServerAccessProfile](#apiserveraccessprofile): The access profile for the Fleet hub API server.
* **dnsPrefix**: string {minLength: 1, maxLength: 54, pattern: "^[a-zA-Z0-9]$|^[a-zA-Z0-9][a-zA-Z0-9-]{0,52}[a-zA-Z0-9]$"}: DNS prefix used to create the FQDN for the Fleet hub.
* **fqdn**: string (ReadOnly): The FQDN of the Fleet hub.
* **kubernetesVersion**: string (ReadOnly): The Kubernetes version of the Fleet hub.
* **portalFqdn**: string (ReadOnly): The Azure Portal FQDN of the Fleet hub.

## FleetMemberProperties
### Properties
* **clusterResourceId**: string (Required): The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'.
* **group**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"}: The group this member belongs to for multi-cluster update management.
* **provisioningState**: 'Canceled' | 'Failed' | 'Joining' | 'Leaving' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## FleetProperties
### Properties
* **hubProfile**: [FleetHubProfile](#fleethubprofile): The FleetHubProfile configures the Fleet's hub.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## FleetUpdateStrategyProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the UpdateStrategy resource.
* **strategy**: [UpdateRunStrategy](#updaterunstrategy) (Required): Defines the update sequence of the clusters.

## ManagedClusterUpdate
### Properties
* **nodeImageSelection**: [NodeImageSelection](#nodeimageselection): The node image upgrade to be applied to the target nodes in update run.
* **upgrade**: [ManagedClusterUpgradeSpec](#managedclusterupgradespec) (Required): The upgrade to apply to the ManagedClusters.

## ManagedClusterUpgradeSpec
### Properties
* **kubernetesVersion**: string: The Kubernetes version to upgrade the member clusters to.
* **type**: 'ControlPlaneOnly' | 'Full' | 'NodeImageOnly' | string (Required): ManagedClusterUpgradeType is the type of upgrade to be applied.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MemberUpdateStatus
### Properties
* **clusterResourceId**: string (ReadOnly): The Azure resource id of the target Kubernetes cluster.
* **message**: string (ReadOnly): The status message after processing the member update operation.
* **name**: string (ReadOnly): The name of the FleetMember.
* **operationId**: string (ReadOnly): The operation resource id of the latest attempt to perform the operation.
* **status**: [UpdateStatus](#updatestatus) (ReadOnly): The status of the MemberUpdate operation.

## NodeImageSelection
### Properties
* **customNodeImageVersions**: [NodeImageVersion](#nodeimageversion)[]: Custom node image versions to upgrade the nodes to. This field is required if node image selection type is Custom. Otherwise, it must be empty. For each node image family (e.g., 'AKSUbuntu-1804gen2containerd'), this field can contain at most one version (e.g., only one of 'AKSUbuntu-1804gen2containerd-2023.01.12' or 'AKSUbuntu-1804gen2containerd-2023.02.12', not both). If the nodes belong to a family without a matching image version in this field, they are not upgraded.
* **type**: 'Consistent' | 'Custom' | 'Latest' | string (Required): The node image upgrade type.

## NodeImageSelectionStatus
### Properties
* **selectedNodeImageVersions**: [NodeImageVersion](#nodeimageversion)[] (ReadOnly): The image versions to upgrade the nodes to.

## NodeImageVersion
### Properties
* **version**: string (ReadOnly): The image version to upgrade the nodes to (e.g., 'AKSUbuntu-1804gen2containerd-2022.12.13').

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

## UpdateGroup
### Properties
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required): Name of the group.
It must match a group name of an existing fleet member.

## UpdateGroupStatus
### Properties
* **members**: [MemberUpdateStatus](#memberupdatestatus)[] (ReadOnly): The list of member this UpdateGroup updates.
* **name**: string (ReadOnly): The name of the UpdateGroup.
* **status**: [UpdateStatus](#updatestatus) (ReadOnly): The status of the UpdateGroup.

## UpdateRunProperties
### Properties
* **managedClusterUpdate**: [ManagedClusterUpdate](#managedclusterupdate) (Required): The update to be applied to all clusters in the UpdateRun. The managedClusterUpdate can be modified until the run is started.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the UpdateRun resource.
* **status**: [UpdateRunStatus](#updaterunstatus) (ReadOnly): The status of the UpdateRun.
* **strategy**: [UpdateRunStrategy](#updaterunstrategy): The strategy defines the order in which the clusters will be updated.
If not set, all members will be updated sequentially. The UpdateRun status will show a single UpdateStage and a single UpdateGroup targeting all members.
The strategy of the UpdateRun can be modified until the run is started.
* **updateStrategyId**: string: The resource id of the FleetUpdateStrategy resource to reference.

When creating a new run, there are three ways to define a strategy for the run:
1. Define a new strategy in place: Set the "strategy" field.
2. Use an existing strategy: Set the "updateStrategyId" field. (since 2023-08-15-preview)
3. Use the default strategy to update all the members one by one: Leave both "updateStrategyId" and "strategy" unset. (since 2023-08-15-preview)

Setting both "updateStrategyId" and "strategy" is invalid.

UpdateRuns created by "updateStrategyId" snapshot the referenced UpdateStrategy at the time of creation and store it in the "strategy" field. 
Subsequent changes to the referenced FleetUpdateStrategy resource do not propagate.
UpdateRunStrategy changes can be made directly on the "strategy" field before launching the UpdateRun.

## UpdateRunStatus
### Properties
* **nodeImageSelection**: [NodeImageSelectionStatus](#nodeimageselectionstatus) (ReadOnly): The node image upgrade specs for the update run. It is only set in update run when `NodeImageSelection.type` is `Consistent`.
* **stages**: [UpdateStageStatus](#updatestagestatus)[] (ReadOnly): The stages composing an update run. Stages are run sequentially withing an UpdateRun.
* **status**: [UpdateStatus](#updatestatus) (ReadOnly): The status of the UpdateRun.

## UpdateRunStrategy
### Properties
* **stages**: [UpdateStage](#updatestage)[] (Required): The list of stages that compose this update run. Min size: 1.

## UpdateStage
### Properties
* **afterStageWaitInSeconds**: int: The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
* **groups**: [UpdateGroup](#updategroup)[]: Defines the groups to be executed in parallel in this stage. Duplicate groups are not allowed. Min size: 1.
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required): The name of the stage. Must be unique within the UpdateRun.

## UpdateStageStatus
### Properties
* **afterStageWaitStatus**: [WaitStatus](#waitstatus) (ReadOnly): The status of the wait period configured on the UpdateStage.
* **groups**: [UpdateGroupStatus](#updategroupstatus)[] (ReadOnly): The list of groups to be updated as part of this UpdateStage.
* **name**: string (ReadOnly): The name of the UpdateStage.
* **status**: [UpdateStatus](#updatestatus) (ReadOnly): The status of the UpdateStage.

## UpdateStatus
### Properties
* **completedTime**: string (ReadOnly): The time the operation or group was completed.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): The error details when a failure is encountered.
* **startTime**: string (ReadOnly): The time the operation or group was started.
* **state**: 'Completed' | 'Failed' | 'NotStarted' | 'Running' | 'Skipped' | 'Stopped' | 'Stopping' | string (ReadOnly): The State of the operation or group.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## WaitStatus
### Properties
* **status**: [UpdateStatus](#updatestatus) (ReadOnly): The status of the wait duration.
* **waitDurationInSeconds**: int (ReadOnly): The wait duration configured in seconds.

