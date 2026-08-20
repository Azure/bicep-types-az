# Microsoft.ContainerService @ 2025-08-01-preview

## Resource Microsoft.ContainerService/fleets@2025-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed identity.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetProperties](#fleetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/fleets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/autoUpgradeProfiles@2025-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AutoUpgradeProfileProperties](#autoupgradeprofileproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/autoUpgradeProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/gates@2025-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GateProperties](#gateproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/gates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/managedNamespaces@2025-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetManagedNamespaceProperties](#fleetmanagednamespaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/fleets/managedNamespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/members@2025-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetMemberProperties](#fleetmemberproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/members' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/updateRuns@2025-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateRunProperties](#updaterunproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/updateRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/updateStrategies@2025-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetUpdateStrategyProperties](#fleetupdatestrategyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/updateStrategies' (ReadOnly, DeployTimeConstant): The resource type

## Function generateUpdateRun (Microsoft.ContainerService/fleets/autoUpgradeProfiles@2025-08-01-preview)
* **Resource**: Microsoft.ContainerService/fleets/autoUpgradeProfiles
* **ApiVersion**: 2025-08-01-preview
* **Output**: [GenerateResponse](#generateresponse)

## Function listCredentials (Microsoft.ContainerService/fleets@2025-08-01-preview)
* **Resource**: Microsoft.ContainerService/fleets
* **ApiVersion**: 2025-08-01-preview
* **Output**: [FleetCredentialResults](#fleetcredentialresults)

## Function skip (Microsoft.ContainerService/fleets/updateRuns@2025-08-01-preview)
* **Resource**: Microsoft.ContainerService/fleets/updateRuns
* **ApiVersion**: 2025-08-01-preview
* **Input**: [SkipProperties](#skipproperties)
* **Output**: [UpdateRun](#updaterun)

## Function start (Microsoft.ContainerService/fleets/updateRuns@2025-08-01-preview)
* **Resource**: Microsoft.ContainerService/fleets/updateRuns
* **ApiVersion**: 2025-08-01-preview
* **Output**: [UpdateRun](#updaterun)

## Function stop (Microsoft.ContainerService/fleets/updateRuns@2025-08-01-preview)
* **Resource**: Microsoft.ContainerService/fleets/updateRuns
* **ApiVersion**: 2025-08-01-preview
* **Output**: [UpdateRun](#updaterun)

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
* **autoUpgradeProfileStatus**: [AutoUpgradeProfileStatus](#autoupgradeprofilestatus): The status of the auto upgrade profile.
* **channel**: 'NodeImage' | 'Rapid' | 'Stable' | 'TargetKubernetesVersion' | string (Required): Configures how auto-upgrade will be run.
* **disabled**: bool: If set to False: the auto upgrade has effect - target managed clusters will be upgraded on schedule.
If set to True: the auto upgrade has no effect - no upgrade will be run on the target managed clusters.
This is a boolean and not an enum because enabled/disabled are all available states of the auto upgrade profile.
By default, this is set to False.
* **longTermSupport**: bool: If upgrade channel is not TargetKubernetesVersion, this field must be False.
  If set to True: Fleet auto upgrade will continue generate update runs for patches of minor versions earlier than N-2 
  (where N is the latest supported minor version) if those minor versions support Long-Term Support (LTS).
  By default, this is set to False.
  For more information on AKS LTS, please see https://learn.microsoft.com/en-us/azure/aks/long-term-support
* **nodeImageSelection**: [AutoUpgradeNodeImageSelection](#autoupgradenodeimageselection): The node image upgrade to be applied to the target clusters in auto upgrade.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the AutoUpgradeProfile resource.
* **targetKubernetesVersion**: string: This is the target Kubernetes version for auto-upgrade. The format must be `{major version}.{minor version}`. For example, "1.30".
  By default, this is empty.
  If upgrade channel is set to TargetKubernetesVersion, this field must not be empty.
  If upgrade channel is Rapid, Stable or NodeImage, this field must be empty.
* **updateStrategyId**: string: The resource id of the UpdateStrategy resource to reference. If not specified, the auto upgrade will run on all clusters which are members of the fleet.

## AutoUpgradeProfileStatus
### Properties
* **lastTriggeredAt**: string (ReadOnly): The UTC time of the last attempt to automatically create and start an UpdateRun as triggered by the release of new versions.
* **lastTriggerError**: [ErrorDetail](#errordetail) (ReadOnly): The error details of the last trigger.
* **lastTriggerStatus**: 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last AutoUpgrade trigger.
* **lastTriggerUpgradeVersions**: string[] (ReadOnly): The target Kubernetes version or node image versions of the last trigger.

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

## FleetManagedNamespaceProperties
### Properties
* **adoptionPolicy**: 'Always' | 'IfIdentical' | 'Never' | string (Required): Action if the managed namespace with the same name already exists. Default is Never.
* **deletePolicy**: 'Delete' | 'Keep' | string (Required): Delete options of a fleet managed namespace. Default is Keep.
* **managedNamespaceProperties**: [ManagedNamespaceProperties](#managednamespaceproperties): The namespace properties for the fleet managed namespace.
* **portalFqdn**: string (ReadOnly): The Azure Portal FQDN of the Fleet hub.
* **propagationPolicy**: [PropagationPolicy](#propagationpolicy): The profile of the propagation to create the namespace.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **status**: [FleetManagedNamespaceStatus](#fleetmanagednamespacestatus) (ReadOnly): Status information of the last operation for fleet managed namespace.

## FleetManagedNamespaceStatus
### Properties
* **lastOperationError**: [ErrorDetail](#errordetail) (ReadOnly): The last operation error of the fleet managed namespace
* **lastOperationId**: string (ReadOnly): The last operation ID for the fleet managed namespace

## FleetMemberProperties
### Properties
* **clusterResourceId**: string (Required): The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'.
* **group**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"}: The group this member belongs to for multi-cluster update management.
* **labels**: [FleetMemberPropertiesLabels](#fleetmemberpropertieslabels): The labels for the fleet member.
* **provisioningState**: 'Canceled' | 'Failed' | 'Joining' | 'Leaving' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **status**: [FleetMemberStatus](#fleetmemberstatus) (ReadOnly): Status information of the last operation for fleet member.

## FleetMemberPropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FleetMemberStatus
### Properties
* **lastOperationError**: [ErrorDetail](#errordetail) (ReadOnly): The last operation error of the fleet member
* **lastOperationId**: string (ReadOnly): The last operation ID for the fleet member

## FleetProperties
### Properties
* **hubProfile**: [FleetHubProfile](#fleethubprofile): The FleetHubProfile configures the Fleet's hub.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **status**: [FleetStatus](#fleetstatus) (ReadOnly): Status information for the fleet.

## FleetStatus
### Properties
* **lastOperationError**: [ErrorDetail](#errordetail) (ReadOnly): The last operation error for the fleet.
* **lastOperationId**: string (ReadOnly): The last operation ID for the fleet.

## FleetUpdateStrategyProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the UpdateStrategy resource.
* **strategy**: [UpdateRunStrategy](#updaterunstrategy) (Required): Defines the update sequence of the clusters.

## GateConfiguration
### Properties
* **displayName**: string {minLength: 1, maxLength: 100}: The human-readable display name of the Gate.
* **type**: 'Approval' | string (Required): The type of the Gate determines how it is completed.

## GateProperties
### Properties
* **displayName**: string {minLength: 1, maxLength: 100}: The human-readable display name of the Gate.
* **gateType**: 'Approval' | string (Required): The type of the Gate determines how it is completed.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the Gate resource.
* **state**: 'Completed' | 'Pending' | 'Skipped' | string (Required): The state of the Gate.
* **target**: [GateTarget](#gatetarget) (Required): The target that the Gate is controlling, e.g. an Update Run.

## GateTarget
### Properties
* **id**: string (Required): The resource id that the Gate is controlling the rollout of.
* **updateRunProperties**: [UpdateRunGateTargetProperties](#updaterungatetargetproperties): The properties of the Update Run that the Gate is targeting.

## GenerateResponse
### Properties
* **id**: string (Required, ReadOnly): The ARM resource id of the generated UpdateRun. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}'.

## ManagedClusterUpdate
### Properties
* **nodeImageSelection**: [NodeImageSelection](#nodeimageselection): The node image upgrade to be applied to the target nodes in update run.
* **upgrade**: [ManagedClusterUpgradeSpec](#managedclusterupgradespec) (Required): The upgrade to apply to the ManagedClusters.

## ManagedClusterUpgradeSpec
### Properties
* **kubernetesVersion**: string: The Kubernetes version to upgrade the member clusters to.
* **type**: 'ControlPlaneOnly' | 'Full' | 'NodeImageOnly' | string (Required): ManagedClusterUpgradeType is the type of upgrade to be applied.

## ManagedNamespaceProperties
### Properties
* **annotations**: [ManagedNamespacePropertiesAnnotations](#managednamespacepropertiesannotations): The annotations for the fleet managed namespace.
* **defaultNetworkPolicy**: [NetworkPolicy](#networkpolicy): The default network policy for the fleet managed namespace.
* **defaultResourceQuota**: [ResourceQuota](#resourcequota): The default resource quota for the fleet managed namespace.
* **labels**: [ManagedNamespacePropertiesLabels](#managednamespacepropertieslabels): The labels for the fleet managed namespace.

## ManagedNamespacePropertiesAnnotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedNamespacePropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## MetaV1LabelSelector
### Properties
* **matchExpressions**: [MetaV1LabelSelectorRequirement](#metav1labelselectorrequirement)[]: matchExpressions is a list of label selector requirements. The requirements are ANDed.
* **matchLabels**: [MetaV1LabelSelectorMatchLabels](#metav1labelselectormatchlabels): matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

## MetaV1LabelSelectorMatchLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetaV1LabelSelectorRequirement
### Properties
* **key**: string (Required): key is the label key that the selector applies to.
* **operator**: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn' | string (Required): operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
* **values**: string[]: values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.

## NetworkPolicy
### Properties
* **egress**: 'AllowAll' | 'AllowSameNamespace' | 'DenyAll' | string: The egress policy for the managed namespace.
* **ingress**: 'AllowAll' | 'AllowSameNamespace' | 'DenyAll' | string: The ingress policy for the managed namespace.

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

## PlacementProfile
### Properties
* **defaultClusterResourcePlacement**: [PlacementV1ClusterResourcePlacementSpec](#placementv1clusterresourceplacementspec): The default ClusterResourcePlacement policy configuration.

## PlacementV1Affinity
### Properties
* **clusterAffinity**: [PlacementV1ClusterAffinity](#placementv1clusteraffinity): ClusterAffinity contains cluster affinity scheduling rules for the selected resources.

## PlacementV1ClusterAffinity
### Properties
* **requiredDuringSchedulingIgnoredDuringExecution**: [PlacementV1ClusterSelector](#placementv1clusterselector): If the affinity requirements specified by this field are not met at scheduling time, the resource will not be scheduled onto the cluster. If the affinity requirements specified by this field cease to be met at some point after the placement (e.g. due to an update), the system may or may not try to eventually remove the resource from the cluster.

## PlacementV1ClusterResourcePlacementSpec
### Properties
* **policy**: [PlacementV1PlacementPolicy](#placementv1placementpolicy): Policy defines how to select member clusters to place the selected resources. If unspecified, all the joined member clusters are selected.

## PlacementV1ClusterSelector
### Properties
* **clusterSelectorTerms**: [PlacementV1ClusterSelectorTerm](#placementv1clusterselectorterm)[] (Required): ClusterSelectorTerms is a list of cluster selector terms. The terms are `ORed`.

## PlacementV1ClusterSelectorTerm
### Properties
* **labelSelector**: [MetaV1LabelSelector](#metav1labelselector): LabelSelector is a label query over all the joined member clusters. Clusters matching the query are selected. If you specify both label and property selectors in the same term, the results are AND'd.
* **propertySelector**: [PlacementV1PropertySelector](#placementv1propertyselector): PropertySelector is a property query over all joined member clusters. Clusters matching the query are selected. If you specify both label and property selectors in the same term, the results are AND'd. At this moment, PropertySelector can only be used with `RequiredDuringSchedulingIgnoredDuringExecution` affinity terms. This field is beta-level; it is for the property-based scheduling feature and is only functional when a property provider is enabled in the deployment.

## PlacementV1PlacementPolicy
### Properties
* **affinity**: [PlacementV1Affinity](#placementv1affinity): Affinity contains cluster affinity scheduling rules. Defines which member clusters to place the selected resources. Only valid if the placement type is "PickAll" or "PickN".
* **clusterNames**: string[]: ClusterNames contains a list of names of MemberCluster to place the selected resources. Only valid if the placement type is "PickFixed"
* **placementType**: 'PickAll' | 'PickFixed' | string: Type of placement. Can be "PickAll", "PickN" or "PickFixed". Default is PickAll.
* **tolerations**: [PlacementV1Toleration](#placementv1toleration)[]: If specified, the ClusterResourcePlacement's Tolerations. Tolerations cannot be updated or deleted. This field is beta-level and is for the taints and tolerations feature.

## PlacementV1PropertySelector
### Properties
* **matchExpressions**: [PlacementV1PropertySelectorRequirement](#placementv1propertyselectorrequirement)[] (Required): MatchExpressions is an array of PropertySelectorRequirements. The requirements are AND'd.

## PlacementV1PropertySelectorRequirement
### Properties
* **name**: string (Required): Name is the name of the property; it should be a Kubernetes label name.
* **operator**: 'Eq' | 'Ge' | 'Gt' | 'Le' | 'Lt' | 'Ne' | string (Required): Operator specifies the relationship between a cluster's observed value of the specified property and the values given in the requirement.
* **values**: string[] (Required): Values are a list of values of the specified property which Fleet will compare against the observed values of individual member clusters in accordance with the given operator. At this moment, each value should be a Kubernetes quantity. For more information, see https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity. If the operator is Gt (greater than), Ge (greater than or equal to), Lt (less than), or `Le` (less than or equal to), Eq (equal to), or Ne (ne), exactly one value must be specified in the list.

## PlacementV1Toleration
### Properties
* **effect**: 'NoSchedule' | string: Effect indicates the taint effect to match. Empty means match all taint effects. When specified, only allowed value is NoSchedule.
* **key**: string: Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
* **operator**: 'Equal' | 'Exists' | string: Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a ClusterResourcePlacement can tolerate all taints of a particular category.
* **value**: string: Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.

## PropagationPolicy
### Properties
* **placementProfile**: [PlacementProfile](#placementprofile): The profile to be used for propagation via placement.
* **type**: 'Placement' | string (Required): The type of the policy to be used. Default is Placement.

## ResourceQuota
### Properties
* **cpuLimit**: string: The CPU limit for the managed namespace. See more at https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu
* **cpuRequest**: string: The CPU request for the managed namespace. See more at https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu
* **memoryLimit**: string: The memory limit for the managed namespace. See more at https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory
* **memoryRequest**: string: The memory request for the managed namespace. See more at https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory

## SkipProperties
### Properties
* **targets**: [SkipTarget](#skiptarget)[] (Required): The targets to skip.

## SkipTarget
### Properties
* **name**: string (Required): The skip target's name. 
To skip a member/group/stage, use the member/group/stage's name;
Tp skip an after stage wait, use the parent stage's name.
* **type**: 'AfterStageWait' | 'Group' | 'Member' | 'Stage' | string (Required): The skip target type.

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

## UpdateGroup
### Properties
* **afterGates**: [GateConfiguration](#gateconfiguration)[]: A list of Gates that will be created after this Group is executed.
* **beforeGates**: [GateConfiguration](#gateconfiguration)[]: A list of Gates that will be created before this Group is executed.
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required): Name of the group.
It must match a group name of an existing fleet member.

## UpdateGroupStatus
### Properties
* **afterGates**: [UpdateRunGateStatus](#updaterungatestatus)[] (ReadOnly): The list of Gates that will run after this UpdateGroup.
* **beforeGates**: [UpdateRunGateStatus](#updaterungatestatus)[] (ReadOnly): The list of Gates that will run before this UpdateGroup.
* **members**: [MemberUpdateStatus](#memberupdatestatus)[] (ReadOnly): The list of member this UpdateGroup updates.
* **name**: string (ReadOnly): The name of the UpdateGroup.
* **status**: [UpdateStatus](#updatestatus) (ReadOnly): The status of the UpdateGroup.

## UpdateRun
### Properties
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [UpdateRunProperties](#updaterunproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## UpdateRunGateStatus
### Properties
* **displayName**: string {minLength: 1, maxLength: 100} (ReadOnly): The human-readable display name of the Gate.
* **gateId**: string (ReadOnly): The resource id of the Gate.
* **status**: [UpdateStatus](#updatestatus) (ReadOnly): The status of the Gate.

## UpdateRunGateTargetProperties
### Properties
* **group**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (ReadOnly): The Update Group of the Update Run.
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, ReadOnly): The name of the Update Run.
* **stage**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (ReadOnly): The Update Stage of the Update Run.
* **timing**: 'After' | 'Before' | string (Required): Whether the Gate is placed before or after the update itself.

## UpdateRunProperties
### Properties
* **autoUpgradeProfileId**: string (ReadOnly): AutoUpgradeProfileId is the id of an auto upgrade profile resource.
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
* **afterGates**: [GateConfiguration](#gateconfiguration)[]: A list of Gates that will be created after this Stage is executed.
* **afterStageWaitInSeconds**: int: The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
* **beforeGates**: [GateConfiguration](#gateconfiguration)[]: A list of Gates that will be created before this Stage is executed.
* **groups**: [UpdateGroup](#updategroup)[]: Defines the groups to be executed in parallel in this stage. Duplicate groups are not allowed. Min size: 1.
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required): The name of the stage. Must be unique within the UpdateRun.

## UpdateStageStatus
### Properties
* **afterGates**: [UpdateRunGateStatus](#updaterungatestatus)[] (ReadOnly): The list of Gates that will run after this UpdateStage.
* **afterStageWaitStatus**: [WaitStatus](#waitstatus) (ReadOnly): The status of the wait period configured on the UpdateStage.
* **beforeGates**: [UpdateRunGateStatus](#updaterungatestatus)[] (ReadOnly): The list of Gates that will run before this UpdateStage.
* **groups**: [UpdateGroupStatus](#updategroupstatus)[] (ReadOnly): The list of groups to be updated as part of this UpdateStage.
* **name**: string (ReadOnly): The name of the UpdateStage.
* **status**: [UpdateStatus](#updatestatus) (ReadOnly): The status of the UpdateStage.

## UpdateStatus
### Properties
* **completedTime**: string (ReadOnly): The time the operation or group was completed.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): The error details when a failure is encountered.
* **startTime**: string (ReadOnly): The time the operation or group was started.
* **state**: 'Completed' | 'Failed' | 'NotStarted' | 'Pending' | 'Running' | 'Skipped' | 'Stopped' | 'Stopping' | string (ReadOnly): The State of the operation or group.

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

