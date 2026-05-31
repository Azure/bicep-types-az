# Microsoft.ContainerService @ 2026-05-02-preview

## Resource Microsoft.ContainerService/aiManagers@2026-05-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AIManagerProperties](#aimanagerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/aiManagers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/aiManagers/modelSources@2026-05-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ModelSourceProperties](#modelsourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/aiManagers/modelSources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/aiManagers/namespaces@2026-05-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AIManagerNamespaceProperties](#aimanagernamespaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/aiManagers/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/aiManagers/namespaces/modelDeployments@2026-05-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-05-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ModelDeploymentProperties](#modeldeploymentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/aiManagers/namespaces/modelDeployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/locations/aiModels@2026-05-02-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 16, maxLength: 16, pattern: "^[0-9a-f]{16}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AIModelProperties](#aimodelproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/locations/aiModels' (ReadOnly, DeployTimeConstant): The resource type

## Function listAccessKeys (Microsoft.ContainerService/aiManagers/namespaces@2026-05-02-preview)
* **Resource**: Microsoft.ContainerService/aiManagers/namespaces
* **ApiVersion**: 2026-05-02-preview
* **Output**: [NamespaceAccessInfo](#namespaceaccessinfo)

## Function listCredential (Microsoft.ContainerService/aiManagers@2026-05-02-preview)
* **Resource**: Microsoft.ContainerService/aiManagers
* **ApiVersion**: 2026-05-02-preview
* **Output**: [CredentialResults](#credentialresults)

## Function listCredential (Microsoft.ContainerService/aiManagers/namespaces@2026-05-02-preview)
* **Resource**: Microsoft.ContainerService/aiManagers/namespaces
* **ApiVersion**: 2026-05-02-preview
* **Output**: [CredentialResults](#credentialresults)

## AIManagerNamespaceProperties
### Properties
* **annotations**: [AIManagerNamespacePropertiesAnnotations](#aimanagernamespacepropertiesannotations): Annotations applied to the Kubernetes namespace.
* **labels**: [AIManagerNamespacePropertiesLabels](#aimanagernamespacepropertieslabels): Labels applied to the Kubernetes namespace.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## AIManagerNamespacePropertiesAnnotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AIManagerNamespacePropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AIManagerProperties
### Properties
* **deletePolicy**: 'Delete' | 'Keep' | string: Delete options of the AI Manager. Defaults to `Delete` if not specified.
* **managedResourceGroupName**: string (ReadOnly): The name of the managed resource group created by the AI Manager to hold underlying infrastructure resources.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## AIModelProperties
### Properties
* **description**: string (ReadOnly): An optional, free-form description of the model.
* **modelId**: string (Required, ReadOnly): The Hugging Face model identifier in `<org>/<repo>` form, e.g. `microsoft/Phi-4-mini-instruct`. Uniquely identifies the upstream model that backs this catalog entry.
* **spec**: [ModelSpec](#modelspec) (Required, ReadOnly): Specification of the model.

## AutoscaleProfile
### Properties
* **maxReplicas**: int {minValue: 1}: The maximum number of replicas. If not specified, the service derives a default from the subscription GPU quota.
* **minReplicas**: int {minValue: 1} (Required): The minimum number of replicas. Must be at least `1`; scale-to-zero is not supported in autoscale mode (see `ScalingProfile`).

## CredentialResult
### Properties
* **name**: string (ReadOnly): The name of the credential.
* **value**: string {sensitive} (ReadOnly): Base64-encoded Kubernetes configuration file.

## CredentialResults
### Properties
* **kubeconfigs**: [CredentialResult](#credentialresult)[] (ReadOnly): Array of credential results.

## CredentialValue
### Properties
* **inline**: [InlineCredential](#inlinecredential): An inline credential containing a secret value supplied in the request payload.

## InlineCredential
### Properties
* **value**: string {sensitive} (Required, WriteOnly): The access token, password, or other secret value.

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

## ManualScalingProfile
### Properties
* **replicas**: int {minValue: 0} (Required): Fixed number of replicas. May be `0` to stop serving traffic while keeping the deployment configuration (see `ScalingProfile`).

## ModelDeploymentOverrides
### Properties
* **values**: [ModelDeploymentOverridesValues](#modeldeploymentoverridesvalues): Experimental free-form override key/value pairs. Subject to change without notice; not part of the stable contract. Recognized keys are documented per release and may be added, renamed, or removed at any time.

## ModelDeploymentOverridesValues
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelDeploymentProperties
### Properties
* **modelResourceId**: string (Required): Full ARM resource id of the model to deploy. Phase 1 accepts an `AIModel` resource id only. Immutable after creation.
* **modelSourceResourceId**: string: Full ARM resource id of a `ModelSource` to use when pulling artifacts for this deployment. Immutable after creation.
* **overrides**: [ModelDeploymentOverrides](#modeldeploymentoverrides): User overrides layered on top of profile resolution.
* **performanceMode**: 'Balanced' | 'Latency' | 'Throughput' | string: Runtime performance mode.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last reconciliation.
* **scale**: [ScalingProfile](#scalingprofile): Scaling configuration for the deployment. Provide either `manual` (fixed replica count) or `autoscale` (autoscaling between min/max replicas), but not both.
* **status**: [ModelDeploymentStatus](#modeldeploymentstatus) (ReadOnly): Runtime status, populated once reconciliation begins.
* **vmSize**: string (Required): Azure VM SKU used to host the deployment, e.g. "Standard_NC96ads_A100_v4". Immutable after creation.

## ModelDeploymentStatus
### Properties
* **currentReplicas**: int (ReadOnly): The current number of ready replicas serving traffic.
* **desiredReplicas**: int (ReadOnly): The desired replica count reported by the controller. Equals `properties.scale.manual.replicas` when manual scaling is used; current target replica count derived from autoscaler otherwise.
* **endpoint**: string (ReadOnly): The inference endpoint URL exposed by the deployment, once ready.
* **engine**: string (ReadOnly): The inference engine used to serve the model, e.g. "vllm".
* **engineVersion**: string (ReadOnly): The version of the inference engine, e.g. "0.17".
* **estimatedProvisionTimeSeconds**: int (ReadOnly): Estimated total time, in seconds, for the deployment to become ready end-to-end (GPU vm provisioning, image/weight pull, engine warm-up).
* **maxModelLen**: int (ReadOnly): The maximum model context length, in tokens, configured for this deployment.
* **peakTokensPerMinute**: int (ReadOnly): The peak tokens per minute measured by live stress test.
* **quantization**: string (ReadOnly): The quantization level applied to the model weights, e.g. "fp16", "awq-int4".

## ModelSourceProperties
### Properties
* **credential**: [CredentialValue](#credentialvalue) (WriteOnly): Credential the platform uses to authenticate to the source. Optional for public sources (e.g. ungated Hugging Face models).
* **description**: string: An optional, free-form description of the source.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **sourceType**: 'HuggingFace' | string (Required): Model source type. Constrains the legal authentication kinds. Immutable after creation.

## ModelSpec
### Properties
* **isRestricted**: bool (Required, ReadOnly): Whether access to the model is restricted and requires credential.
* **license**: string (ReadOnly): The license of the model, when known. SPDX license identifier, e.g. `mit`, `apache-2.0`.
* **maxContextLength**: int (Required, ReadOnly): The maximum context length supported by the model, in tokens.

## NamespaceAccessInfo
### Properties
* **endpoint**: string (Required, ReadOnly): OpenAI-compatible inference gateway base URL (for example, `https://team-alpha.<cluster>.<region>.aksapp.io/v1`).
* **lastRotatedAt**: string (ReadOnly): UTC time the keys were last rotated by `rotateKeys`. Absent until the first rotation. Clients can use this to detect rotation and refresh cached credentials.
* **primaryKey**: string {sensitive} (Required, ReadOnly): Primary API key. Send as `Authorization: Bearer <key>` or `api-key: <key>`. Treat as secret; do not log or persist in plaintext.
* **secondaryKey**: string {sensitive} (Required, ReadOnly): Secondary API key, accepted by the gateway in the same headers as `primaryKey`. Generated independently when the namespace is created, then overwritten by the previous `primaryKey` on each `rotateKeys` call so clients can roll over without downtime. Treat as secret; do not log or persist in plaintext.

## ScalingProfile
### Properties
* **autoscale**: [AutoscaleProfile](#autoscaleprofile): Autoscaling configuration. Mutually exclusive with `manual`.
* **manual**: [ManualScalingProfile](#manualscalingprofile): Manual scaling configuration with a fixed replica count. Mutually exclusive with `autoscale`.

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

