# Microsoft.ContainerService @ 2023-03-15-preview

## Resource Microsoft.ContainerService/fleets@2023-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FleetProperties](#fleetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/fleets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/members@2023-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FleetMemberProperties](#fleetmemberproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/members' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/updateRuns@2023-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateRunProperties](#updaterunproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/updateRuns' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.ContainerService/fleets@2023-03-15-preview)
* **Resource**: Microsoft.ContainerService/fleets
* **ApiVersion**: 2023-03-15-preview
* **Output**: [FleetCredentialResults](#fleetcredentialresults)

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
* **dnsPrefix**: string: DNS prefix used to create the FQDN for the Fleet hub.
* **fqdn**: string (ReadOnly): The FQDN of the Fleet hub.
* **kubernetesVersion**: string (ReadOnly): The Kubernetes version of the Fleet hub.

## FleetMemberProperties
### Properties
* **clusterResourceId**: string (Required): The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'.
* **group**: string: The group this member belongs to for multi-cluster update management.
* **provisioningState**: 'Canceled' | 'Failed' | 'Joining' | 'Leaving' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## FleetProperties
### Properties
* **hubProfile**: [FleetHubProfile](#fleethubprofile): The FleetHubProfile configures the Fleet's hub.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## ManagedClusterUpdate
### Properties
* **upgrade**: [ManagedClusterUpgradeSpec](#managedclusterupgradespec) (Required): The upgrade to apply to the ManagedClusters.

## ManagedClusterUpgradeSpec
### Properties
* **kubernetesVersion**: string: The Kubernetes version to upgrade the member clusters to.
* **type**: 'Full' | 'NodeImageOnly' | string (Required): The upgrade type.
Full requires the KubernetesVersion property to be set.
NodeImageOnly requires the KubernetesVersion property not to be set.

## MemberUpdateStatus
### Properties
* **clusterResourceId**: string (ReadOnly): The Azure resource id of the target Kubernetes cluster.
* **name**: string (ReadOnly): The name of the FleetMember.
* **operationId**: string (ReadOnly): The operation resource id of the latest attempt to perform the operation.
* **status**: [UpdateStatus](#updatestatus) (ReadOnly): The status of the MemberUpdate operation.

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
* **name**: string (Required): The name of the Fleet member group to update. 
It should match the name of an existing FleetMember group.
A group can only appear once across all UpdateStages in the UpdateRun.

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

## UpdateRunStatus
### Properties
* **stages**: [UpdateStageStatus](#updatestagestatus)[] (ReadOnly): The stages composing an update run. Stages are run sequentially withing an UpdateRun.
* **status**: [UpdateStatus](#updatestatus) (ReadOnly): The status of the UpdateRun.

## UpdateRunStrategy
### Properties
* **stages**: [UpdateStage](#updatestage)[] (Required): The list of stages that compose this update run.

## UpdateStage
### Properties
* **afterStageWaitInSeconds**: int: The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
* **groups**: [UpdateGroup](#updategroup)[]: A list of group names that compose the stage.
The groups will be updated in parallel. Each group name can only appear once in the UpdateRun.
* **name**: string (Required): The name of the stage. Must be unique within the UpdateRun.

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
* **state**: 'Completed' | 'Failed' | 'NotStarted' | 'Running' | 'Stopped' | 'Stopping' | string (ReadOnly): The State of the operation or group.

## WaitStatus
### Properties
* **status**: [UpdateStatus](#updatestatus) (ReadOnly): The status of the wait duration.
* **waitDurationInSeconds**: int (ReadOnly): The wait duration configured in seconds.

