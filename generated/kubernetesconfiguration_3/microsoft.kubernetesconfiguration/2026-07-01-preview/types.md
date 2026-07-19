# Microsoft.KubernetesConfiguration @ 2026-07-01-preview

## Resource Microsoft.KubernetesConfiguration/kubernetesResources@2026-07-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z]([a-z0-9._-]{0,126}[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [KubernetesResourceProperties](#kubernetesresourceproperties) (ReadOnly): Properties of the KubernetesResources resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.KubernetesConfiguration/kubernetesResources' (ReadOnly, DeployTimeConstant): The resource type

## AttachedVolume
### Properties
* **devicePath**: string: Device path on the node where the volume is attached (e.g., '/dev/sdc').
* **name**: string (Required): Name of the attached volume (matches the PersistentVolume name).

## Capabilities
### Properties
* **add**: string[]: Capabilities to add (e.g., 'NET_ADMIN').
* **drop**: string[]: Capabilities to remove (e.g., 'ALL').

## ContainerPortInfo
### Properties
* **containerPort**: int (Required): Port number exposed inside the container.
* **hostIp**: string: Host IP to bind the hostPort on.
* **hostPort**: int: Port number to expose on the host node.
* **name**: string: Optional name for this port.
* **protocol**: 'SCTP' | 'TCP' | 'UDP' | string: Network protocol for this port.

## ContainerProbe
### Properties
* **path**: string: URL path for HTTPGet probes.
* **port**: int: Port number for HTTPGet or TCPSocket probes.
* **type**: string: Probe mechanism: 'HTTPGet', 'TCPSocket', 'Exec', or 'GRPC'.

## ContainerResourceQuantity
### Properties
* **cpu**: string: CPU quantity (e.g., '500m', '2').
* **memory**: string: Memory quantity (e.g., '256Mi', '1Gi').

## ContainerResourceRequirements
### Properties
* **limits**: [ContainerResourceQuantity](#containerresourcequantity): Maximum resources the container may consume.
* **requests**: [ContainerResourceQuantity](#containerresourcequantity): Minimum resources the container requires to be scheduled.

## ContainerSecurityContext
### Properties
* **allowPrivilegeEscalation**: bool: Prevent the container process from gaining more privileges than its parent when false.
* **capabilities**: [Capabilities](#capabilities): Linux capability adjustments for this container.
* **privileged**: bool: When true, the container runs with full host privileges (root + all Linux capabilities).
* **readOnlyRootFilesystem**: bool: Mount the container's root filesystem as read-only when true.
* **runAsGroup**: int: GID to run the container process as.
* **runAsNonRoot**: bool: Require the container to run as a non-root user when true.
* **runAsUser**: int: UID to run the container process as.
* **seccompProfile**: string: Seccomp profile type applied to this container ('RuntimeDefault', 'Unconfined', or 'Localhost').

## ContainerSpec
### Properties
* **args**: string[]: Arguments to override the container default CMD.
* **command**: string[]: Command to override the container default ENTRYPOINT.
* **env**: [EnvVar](#envvar)[]: Environment variables to set in the container.
* **envFrom**: [EnvFromSource](#envfromsource)[]: Sources that populate environment variables in bulk from ConfigMaps or Secrets.
* **image**: string: Container image reference (e.g., 'nginx:1.25').
* **imagePullPolicy**: string: Image pull policy for this container ('Always', 'IfNotPresent', or 'Never').
* **livenessProbe**: [ContainerProbe](#containerprobe): Liveness probe that determines when to restart the container.
* **name**: string (Required): Name of the container, unique within the pod.
* **ports**: [ContainerPortInfo](#containerportinfo)[]: Ports to expose from the container.
* **readinessProbe**: [ContainerProbe](#containerprobe): Readiness probe that determines when the container is ready to accept traffic.
* **resources**: [ContainerResourceRequirements](#containerresourcerequirements): Compute resource requests and limits.
* **securityContext**: [ContainerSecurityContext](#containersecuritycontext): Security context applied to this container.
* **volumeMounts**: [VolumeMount](#volumemount)[]: Volume paths to mount inside the container.

## ContainerState
### Properties
* **running**: [ContainerStateRunning](#containerstaterunning): Populated when the container is currently executing.
* **terminated**: [ContainerStateTerminated](#containerstateterminated): Populated when the container has exited.
* **waiting**: [ContainerStateWaiting](#containerstatewaiting): Populated when the container is not yet running.

## ContainerStateRunning
### Properties
* **startedAt**: string: UTC timestamp when the container started.

## ContainerStateTerminated
### Properties
* **exitCode**: int (Required): Exit code of the container process.
* **finishedAt**: string: UTC timestamp when the container terminated.
* **message**: string: Human-readable message about the termination.
* **reason**: string: Machine-readable reason for termination (e.g., 'OOMKilled', 'Completed').
* **signal**: int: Signal that caused the container to terminate, if applicable.
* **startedAt**: string: UTC timestamp when the container started its last execution.

## ContainerStateWaiting
### Properties
* **message**: string: Human-readable message about the waiting state.
* **reason**: string: Machine-readable reason the container is not running (e.g., 'ContainerCreating', 'ImagePullBackOff').

## ContainerStatus
### Properties
* **containerId**: string: Opaque container runtime identifier (e.g., 'containerd://sha256:...').
* **image**: string: Container image including digest as resolved by the runtime.
* **lastState**: [ContainerState](#containerstate): Previous termination state of the container; populated after a restart.
* **name**: string (Required): Name of the container.
* **ready**: bool: True when the container has passed its readiness probe.
* **restartCount**: int: Number of times the container has restarted since the pod was started.
* **started**: bool: Whether the container has passed its startup probe and is considered started.
* **state**: [ContainerState](#containerstate): Current state of the container.

## EndpointSliceEndpoint
### Properties
* **addresses**: string[] (Required): IP addresses (IPv4/IPv6) or FQDNs serving this endpoint.
* **nodeName**: string: Name of the node hosting this endpoint.
* **ready**: bool: True when the endpoint is ready to receive traffic.
* **targetRefKind**: string: Kind of the backing object (typically 'Pod').
* **targetRefName**: string: Name of the backing object.
* **targetRefNamespace**: string: Namespace of the backing object.

## EndpointSlicePort
### Properties
* **name**: string: Optional name for this port.
* **port**: int (Required): Port number.
* **protocol**: 'SCTP' | 'TCP' | 'UDP' | string: Network protocol ('TCP', 'UDP', or 'SCTP').

## EnvFromSource
### Properties
* **configMapRef**: string: Name of the ConfigMap whose keys are imported as environment variables.
* **prefix**: string: Optional prefix prepended to each imported environment variable name.
* **secretRef**: string: Name of the Secret whose keys are imported as environment variables.

## EnvVar
### Properties
* **name**: string (Required): Name of the environment variable.
* **value**: string: Literal string value. Non-secret environment variables only.

## IngressPath
### Properties
* **path**: string: URL path to match (e.g., '/api', '/').
* **pathType**: string: Path matching semantics ('Exact', 'Prefix', or 'ImplementationSpecific').
* **serviceName**: string (Required): Name of the backend Service receiving matched traffic.
* **servicePort**: string: Port of the backend Service (numeric string or named port).

## IngressRule
### Properties
* **host**: string: Fully qualified domain name or wildcard host (e.g., 'api.example.com', '*.example.com').
* **paths**: [IngressPath](#ingresspath)[]: HTTP path rules mapping URL paths to backend Services.

## IngressTls
### Properties
* **hosts**: string[]: Hostnames covered by this TLS certificate.
* **secretName**: string: Name of the Secret containing the TLS certificate and private key.

## KubernetesCondition
### Properties
* **lastTransitionTime**: string: UTC timestamp of the last status transition.
* **message**: string: Human-readable explanation of the current status.
* **reason**: string: Machine-readable reason code for the current status.
* **status**: 'False' | 'True' | 'Unknown' | string: Whether the condition is currently active.
* **type**: string (Required): Type of the condition (e.g., 'Ready', 'Available', 'Progressing').

## KubernetesEvent
### Properties
* **age**: string: Human-readable elapsed time since the event last occurred
as reported by the Kubernetes API (e.g., '2m28s', '5h').
* **from**: string: Component that emitted the event.
* **message**: string: Human-readable description of the event.
* **reason**: string (Required): Short machine-readable reason for the event (e.g., 'Scheduled', 'Pulled', 'Failed').
* **type**: string: Event type: 'Normal' or 'Warning'.

## KubernetesGenericField
### Properties
* **name**: string (Required, ReadOnly): Field name.
* **value**: string: The string value of the field.

## KubernetesMapEntry
### Properties
* **name**: string (Required, ReadOnly): Map key.
* **value**: string: Map value.

## KubernetesObjectMeta
### Properties
* **annotations**: [KubernetesMapEntry](#kubernetesmapentry)[]: Key/value pairs for non-identifying auxiliary metadata.
* **creationTimestamp**: string: UTC timestamp when the object was created.
* **deletionTimestamp**: string: UTC timestamp set when a graceful deletion has been requested.
Absent when the object is not being deleted.
* **finalizers**: string[]: Named lifecycle hooks that must be resolved before the object is deleted.
* **generation**: int: Sequence number incremented each time the object spec changes.
* **labels**: [KubernetesMapEntry](#kubernetesmapentry)[]: User-defined key/value pairs used for selection and grouping.
* **name**: string (Required): Name of the Kubernetes object, unique within its namespace.
* **namespaceName**: string: Namespace the object belongs to.
Empty for cluster-scoped resources such as Node and Namespace.
* **ownerReferences**: [OwnerReference](#ownerreference)[]: References to the objects that own this object (e.g., the ReplicaSet that owns a Pod).
* **resourceVersion**: string: Opaque version string used for optimistic concurrency.
Clients must treat this as opaque and pass it unmodified on updates.
* **uid**: string: Immutable UID assigned by the Kubernetes API server.

## KubernetesResourceProperties
### Properties
* **apiVersion**: string (ReadOnly): Kubernetes API version of the represented resource
(e.g., 'v1', 'apps/v1', 'upgrade.config.io/v1alpha1').
* **attachedToExtension**: string (ReadOnly): Name of the extension this inventory resource is attached to.
* **events**: [KubernetesEvent](#kubernetesevent)[] (ReadOnly): Kubernetes events recorded against this resource.
* **kind**: string (ReadOnly): Kind of the Kubernetes resource (e.g., 'Pod', 'Deployment', 'Service').
* **metadata**: [KubernetesObjectMeta](#kubernetesobjectmeta) (ReadOnly): Standard Kubernetes object metadata.
* **spec**: [KubernetesResourceSpec](#kubernetesresourcespec) (ReadOnly): Desired state of the Kubernetes resource.
* **status**: [KubernetesResourceStatus](#kubernetesresourcestatus) (ReadOnly): Observed state of the Kubernetes resource, written by the controller.

## KubernetesResourceSpec
### Properties
* **accessModes**: string[]: Storage access modes requested or granted
(e.g., 'ReadWriteOnce', 'ReadOnlyMany', 'ReadWriteMany').
Populated for PersistentVolumeClaim and PersistentVolume resources.
* **activeDeadlineSeconds**: int: Maximum duration in seconds before the Job is terminated regardless of its success.
Populated for Job resources.
* **additionalFields**: [KubernetesGenericField](#kubernetesgenericfield)[]: Additional resource-specific fields not represented by the typed properties above.
Used for uncommon fields and custom resource definition instances.
* **admissionPolicyBindingPolicyName**: string: Name of the ValidatingAdmissionPolicy this binding applies.
Populated for ValidatingAdmissionPolicyBinding resources.
* **admissionPolicyFailurePolicy**: string: What happens when a policy evaluation fails: 'Fail' rejects the request; 'Ignore' allows it.
Populated for ValidatingAdmissionPolicy resources.
* **admissionPolicyMatchConstraints**: string[]: API resource rules that trigger this ValidatingAdmissionPolicy
(e.g., 'CREATE pods', 'UPDATE deployments').
Each entry is a human-readable summary of a resource rule.
Populated for ValidatingAdmissionPolicy resources.
* **admissionPolicyValidationActions**: string[]: How validation failures are enforced: 'Deny', 'Warn', or 'Audit'.
Populated for ValidatingAdmissionPolicyBinding resources.
* **allowVolumeExpansion**: bool: When true, PVCs using this StorageClass may be expanded after provisioning.
Populated for StorageClass resources.
* **attachedVolumeName**: string: Name of the PersistentVolume being attached.
Populated for VolumeAttachment resources.
* **attacherName**: string: Name of the CSI driver that should attach/detach the volume (e.g., 'disk.csi.azure.com').
Populated for VolumeAttachment resources.
* **automountServiceAccountToken**: bool: When false, prevents the default Kubernetes service account token from being
auto-mounted into pods running as this ServiceAccount.
Populated for ServiceAccount resources.
* **backoffLimit**: int: Number of retries before marking the Job as failed.
Populated for Job resources.
* **boundVolumeName**: string: For a PVC: the name of the PV it is bound to.
For a PV: the name of the PVC bound to it.
* **claimRefNamespace**: string: Namespace of the PVC bound to a PV (populated in PV claimRef).
Populated for PersistentVolume resources.
* **clusterIp**: string: Cluster-internal IP assigned to the service. Populated for Service resources.
* **completionMode**: string: Completion tracking mode for Job pods: 'NonIndexed' (default) or 'Indexed'.
Populated for Job resources.
* **completions**: int: Total successful pod completions required for the Job to succeed.
Populated for Job resources.
* **concurrencyPolicy**: string: Concurrency policy for simultaneous CronJob runs ('Allow', 'Forbid', or 'Replace').
Populated for CronJob resources.
* **configMapBinaryData**: [KubernetesMapEntry](#kubernetesmapentry)[]: String key-value pairs from the Kubernetes ConfigMap binaryData field (mirrors ConfigMap.binaryData).
BinaryData can contain byte sequences that are not in the UTF-8 range.
* **configMapData**: [KubernetesMapEntry](#kubernetesmapentry)[]: String key-value pairs from the Kubernetes ConfigMap data field (mirrors ConfigMap.data).
Each entry is a UTF-8 string key and its value.
Populated for ConfigMap resources.
* **configMapImmutable**: bool: When true, the ConfigMap is immutable and cannot be updated after creation.
Populated for ConfigMap resources.
* **containers**: [ContainerSpec](#containerspec)[]: Containers belonging to the pod or pod template.
Populated for Pod, Deployment, StatefulSet, and DaemonSet resources.
* **csiDriver**: string: CSI driver name managing this PersistentVolume (e.g., 'disk.csi.azure.com').
Populated for PersistentVolume resources backed by a CSI driver.
* **csiVolumeHandle**: string: Unique volume handle assigned by the CSI driver.
Populated for PersistentVolume resources backed by a CSI driver.
* **csrExpirationSeconds**: int: Requested duration in seconds for the issued certificate.
Populated for CertificateSigningRequest resources.
* **csrSignerName**: string: Name of the signer that will sign the certificate (e.g., 'kubernetes.io/kube-apiserver-client').
Populated for CertificateSigningRequest resources.
* **csrUsages**: string[]: Key usages requested for the certificate (e.g., 'client auth', 'server auth', 'digital signature').
Populated for CertificateSigningRequest resources.
* **csrUsername**: string: Name of the user that created the CertificateSigningRequest.
Populated for CertificateSigningRequest resources.
* **defaultBackendServiceName**: string: Backend Service name to route traffic when no rule matches.
Populated for Ingress resources.
* **defaultBackendServicePort**: string: Backend Service port to route traffic when no rule matches (number or named port).
Populated for Ingress resources.
* **dnsPolicy**: string: DNS policy for the pod (e.g., 'ClusterFirst', 'Default', 'None').
Populated for Pod resources.
* **endpointSliceAddressType**: string: Address family for all endpoints in this EndpointSlice ('IPv4', 'IPv6', or 'FQDN').
Populated for EndpointSlice resources.
* **endpointSliceEndpoints**: [EndpointSliceEndpoint](#endpointsliceendpoint)[]: Endpoints contained in this EndpointSlice.
Populated for EndpointSlice resources.
* **endpointSlicePorts**: [EndpointSlicePort](#endpointsliceport)[]: Ports exposed by the endpoints in this EndpointSlice.
Populated for EndpointSlice resources.
* **externalIps**: string[]: External IP addresses accepted by cluster nodes for this Service. Populated for Service resources.
* **externalName**: string: DNS CNAME alias target for ExternalName Services. Populated for Service resources.
* **externalTrafficPolicy**: string: Traffic routing policy for externally-facing addresses ('Cluster' or 'Local').
Populated for Service resources.
* **globalDefault**: bool: When true, this PriorityClass is the cluster default for pods without an explicit priorityClassName.
Populated for PriorityClass resources.
* **hostIpc**: bool: When true, the pod shares the host IPC namespace. Populated for Pod resources.
* **hostNetwork**: bool: When true, the pod uses the host network namespace (disables pod network isolation).
Populated for Pod resources.
* **hostPid**: bool: When true, the pod shares the host PID namespace. Populated for Pod resources.
* **imagePullSecrets**: string[]: Names of Secrets used to authenticate image pulls from private registries.
Populated for Pod, Deployment, StatefulSet, and DaemonSet resources.
* **ingressClassName**: string: Name of the IngressClass that governs this Ingress resource.
Populated for Ingress resources.
* **ingressController**: string: Controller class reference for an IngressClass (e.g., 'nginx.ingress.kubernetes.io/controller').
Populated for IngressClass resources.
* **ingressRules**: [IngressRule](#ingressrule)[]: Routing rules mapping hostnames and URL paths to backend Services.
Populated for Ingress resources.
* **ingressTls**: [IngressTls](#ingresstls)[]: TLS termination configuration for Ingress resources.
Populated for Ingress resources.
* **initContainers**: [ContainerSpec](#containerspec)[]: Init containers that run before app containers start.
Populated for Pod, Deployment, StatefulSet, and DaemonSet resources.
* **loadBalancerClass**: string: Load balancer implementation class identifier. Populated for LoadBalancer Service resources.
* **loadBalancerIp**: string: Static IP address requested from the cloud provider for a LoadBalancer Service.
Deprecated in Kubernetes 1.24 in favor of spec.loadBalancerIP on the Service.
Populated for LoadBalancer Service resources.
* **maximumVolumeSize**: string: Maximum size of a single volume that can be created in this topology segment.
Populated for CSIStorageCapacity resources.
* **maxReplicas**: int: Maximum replica count for autoscaling.
Populated for HorizontalPodAutoscaler resources.
* **maxSurge**: string: Maximum number of pods that can be created above the desired count during a rolling update
(absolute number or percentage string, e.g., '25%').
Populated for Deployment resources.
* **maxUnavailable**: string: Maximum number of pods that can be unavailable during a rolling update
(absolute number or percentage string, e.g., '25%').
Populated for Deployment and DaemonSet resources.
* **maxUnavailablePods**: string: Maximum number of pods that may be simultaneously unavailable during voluntary disruptions.
Populated for PodDisruptionBudget resources.
* **maxUnavailableReplicas**: string: Maximum number of pods that can be unavailable during a StatefulSet rolling update
(absolute number or percentage string, e.g., '1', '25%'). Beta as of Kubernetes 1.24.
Populated for StatefulSet resources.
* **minAvailable**: string: Minimum number of pods that must remain available during voluntary disruptions
(absolute number or percentage string, e.g., '2', '50%').
Populated for PodDisruptionBudget resources.
* **minReplicas**: int: Minimum replica count for autoscaling.
Populated for HorizontalPodAutoscaler resources.
* **networkPolicyTypes**: string[]: Policy directions enforced ('Ingress', 'Egress', or both).
Populated for NetworkPolicy resources.
* **nodeName**: string: Name of the node the pod is scheduled on. Populated for Pod resources.
* **nodeSelector**: [KubernetesMapEntry](#kubernetesmapentry)[]: Node label selector constraining which nodes this pod may be scheduled on.
Populated for Pod, Deployment, StatefulSet, and DaemonSet resources.
* **parallelism**: int: Maximum number of pods running concurrently for a Job.
Populated for Job resources.
* **paused**: bool: When true, the Deployment rollout is paused. Populated for Deployment resources.
* **podCidr**: string: IP range assigned to pods running on this node.
Populated for Node resources.
* **podManagementPolicy**: string: Pod creation and deletion ordering policy for a StatefulSet
('OrderedReady' for sequential or 'Parallel' for simultaneous).
Populated for StatefulSet resources.
* **podOs**: string: Operating system of the containers ('linux' or 'windows').
Populated for Pod resources.
* **podSelectorLabels**: [KubernetesMapEntry](#kubernetesmapentry)[]: Label selector identifying the pods this NetworkPolicy applies to.
Populated for NetworkPolicy resources.
* **preemptionPolicy**: string: Preemption policy for pods with this priority class when system resources are scarce
('PreemptLowerPriority' or 'Never').
Populated for PriorityClass resources.
* **priorityClassName**: string: Name of the PriorityClass governing scheduling priority and preemption for this pod.
Populated for Pod, Deployment, StatefulSet, and DaemonSet resources.
* **priorityValue**: int: Numeric scheduling priority value for a PriorityClass.
Populated for PriorityClass resources.
* **providerId**: string: Cloud provider identifier for the node
(e.g., 'azure:///subscriptions/.../virtualMachines/vm-0').
Populated for Node resources.
* **provisioner**: string: CSI driver (provisioner) name for a StorageClass (e.g., 'disk.csi.azure.com').
Populated for StorageClass resources.
* **rbacRoleRefKind**: string: Kind of the role referenced by a binding ('Role' or 'ClusterRole').
Populated for RoleBinding and ClusterRoleBinding resources.
* **rbacRoleRefName**: string: Name of the role referenced by a binding.
Populated for RoleBinding and ClusterRoleBinding resources.
* **rbacRules**: [PolicyRule](#policyrule)[]: RBAC permission rules granting access to Kubernetes API resources.
Populated for Role and ClusterRole resources.
* **rbacSubjects**: [RbacSubject](#rbacsubject)[]: Subjects (users, groups, service accounts) granted permissions by this binding.
Populated for RoleBinding and ClusterRoleBinding resources.
* **reclaimPolicy**: string: Reclaim policy for a PV after its claim is released ('Retain', 'Delete', or 'Recycle').
Populated for PersistentVolume and StorageClass resources.
* **replicas**: int: Desired number of pod replicas. Populated for Deployment and StatefulSet resources.
* **restartPolicy**: string: Pod restart policy (e.g., 'Always', 'OnFailure', 'Never'). Populated for Pod resources.
* **runtimeClassName**: string: Name of the RuntimeClass for specialized container runtimes. Populated for Pod resources.
* **scaleTargetRefKind**: string: Kind of the resource being autoscaled (e.g., 'Deployment', 'StatefulSet').
Populated for HorizontalPodAutoscaler resources.
* **scaleTargetRefName**: string: Name of the resource being autoscaled.
Populated for HorizontalPodAutoscaler resources.
* **schedule**: string: Cron schedule expression.
Populated for CronJob resources.
* **secretType**: string: Kubernetes Secret type (e.g., 'Opaque', 'kubernetes.io/tls', 'kubernetes.io/service-account-token').
Populated for Secret resources.
* **securityContext**: [PodSecurityContext](#podsecuritycontext): Security context applied at the pod level.
Populated for Pod, Deployment, StatefulSet, and DaemonSet resources.
* **selector**: [KubernetesMapEntry](#kubernetesmapentry)[]: Label selector identifying which pods are managed by this workload.
Populated for Deployment, StatefulSet, DaemonSet, and ReplicaSet resources.
* **serviceAccountName**: string: Name of the ServiceAccount the pod runs as.
Populated for Pod, Deployment, StatefulSet, and DaemonSet resources.
* **serviceName**: string: Headless service name governing StatefulSet pod network identity.
Populated for StatefulSet resources.
* **servicePorts**: [ServicePort](#serviceport)[]: Ports exposed by the Service. Populated for Service resources.
* **serviceSelector**: [KubernetesMapEntry](#kubernetesmapentry)[]: Label selector routing traffic to pods backing this Service.
Populated for Service resources.
* **serviceType**: string: How the service is exposed (e.g., 'ClusterIP', 'NodePort', 'LoadBalancer').
Populated for Service resources.
* **startingDeadlineSeconds**: int: Deadline in seconds for a CronJob run to start if missed; missed runs are ignored beyond this window.
Populated for CronJob resources.
* **storageCapacity**: string: Total storage capacity of a PV (e.g., '100Gi').
Populated for PersistentVolume resources.
* **storageCapacityAvailable**: string: Available storage capacity for the StorageClass in this topology segment (e.g., '500Gi').
Populated for CSIStorageCapacity resources.
* **storageClassName**: string: Name of the StorageClass for dynamic provisioning or PVC-to-PV binding.
Populated for PVC, PV, and StorageClass resources.
* **storageRequest**: string: Storage quantity requested by a PVC (e.g., '10Gi').
Populated for PersistentVolumeClaim resources.
* **strategyType**: string: Rollout strategy type.
'RollingUpdate' or 'Recreate' for Deployment;
'RollingUpdate' or 'OnDelete' for StatefulSet and DaemonSet.
* **suspend**: bool: When true, future executions are suspended.
Populated for CronJob and Job resources.
* **taints**: [NodeTaint](#nodetaint)[]: Taints applied to the node, repelling pods that lack a matching toleration.
Populated for Node resources.
* **terminationGracePeriodSeconds**: int: Grace period in seconds before forcibly terminating the pod on deletion.
* **timeZone**: string: IANA time zone name for CronJob scheduling (e.g., 'America/New_York', 'UTC').
Populated for CronJob resources.
* **tolerations**: [Toleration](#toleration)[]: Tolerations allowing the pod to be scheduled on nodes with matching taints.
Populated for Pod, Deployment, StatefulSet, and DaemonSet resources.
* **ttlSecondsAfterFinished**: int: Seconds after Job completion before the Job and its pods are deleted automatically.
Populated for Job resources.
* **unschedulable**: bool: When true, the node is cordoned and will not accept new pod scheduling.
Populated for Node resources.
* **volumeBindingMode**: string: When to bind a PV to a PVC: 'Immediate' binds on creation;
'WaitForFirstConsumer' delays until a pod claims the PVC.
Populated for StorageClass resources.
* **volumeClaimTemplates**: [VolumeClaimTemplate](#volumeclaimtemplate)[]: PVC templates stamped out per StatefulSet replica to provide stable per-pod storage.
Populated for StatefulSet resources.
* **volumeMode**: string: Volume mode describing how the volume is used ('Filesystem' or 'Block').
Populated for PVC and PV resources.
* **volumes**: [Volume](#volume)[]: Volumes available to containers in the pod or pod template.
Populated for Pod, Deployment, StatefulSet, and DaemonSet resources.

## KubernetesResourceStatus
### Properties
* **activeJobCount**: int: Number of currently active (running or pending) pods. Populated for Job resources.
* **additionalFields**: [KubernetesGenericField](#kubernetesgenericfield)[]: Additional resource-specific status fields not represented by the typed properties above.
Used for uncommon fields and custom resource definition instances.
* **availableReplicas**: int: Number of pods available for at least minReadySeconds. Populated for Deployment, DaemonSet, StatefulSet.
* **conditions**: [KubernetesCondition](#kubernetescondition)[]: Conditions reported by the controller managing this resource.
* **containerStatuses**: [ContainerStatus](#containerstatus)[]: Runtime status of each container in the pod.
Populated for Pod resources.
* **currentHealthy**: int: Currently healthy (Ready) pods counted by the PodDisruptionBudget.
* **currentNumberScheduled**: int: Nodes running at least one daemon pod. Populated for DaemonSet resources.
* **currentReplicas**: int: Pods running the previous revision (before update completes).
Populated for StatefulSet resources.
* **currentRevision**: string: Name of the StatefulSet revision corresponding to currentReplicas.
Populated for StatefulSet resources.
* **desiredHealthy**: int: Minimum healthy pods required by the PodDisruptionBudget.
* **desiredNumberScheduled**: int: Total nodes that should run the daemon pod. Populated for DaemonSet resources.
* **desiredReplicas**: int: Desired replica count calculated by the HorizontalPodAutoscaler.
Populated for HorizontalPodAutoscaler resources.
* **disruptionsAllowed**: int: Number of pod disruptions currently allowed by the PodDisruptionBudget.
* **expectedPods**: int: Total number of pods counted by the PodDisruptionBudget (ready + not ready).
* **failedJobCount**: int: Number of pods that failed. Populated for Job resources.
* **hostIp**: string: IP address of the node hosting the pod. Populated for Pod resources.
* **hostIps**: string[]: Additional host IPs for dual-stack nodes. Populated for Pod resources.
* **initContainerStatuses**: [ContainerStatus](#containerstatus)[]: Runtime status of each init container in the pod.
Populated for Pod resources.
* **jobCompletionTime**: string: UTC timestamp when the Job completed successfully. Populated for Job resources.
* **jobStartTime**: string: UTC timestamp when the Job started executing. Populated for Job resources.
* **lastScaleTime**: string: UTC timestamp of the most recent scaling event triggered by the HPA.
Populated for HorizontalPodAutoscaler resources.
* **lastScheduleTime**: string: UTC timestamp when the CronJob last successfully scheduled a Job.
* **lastSuccessfulTime**: string: UTC timestamp when the last Job triggered by this CronJob completed successfully.
* **loadBalancerIngress**: string[]: External IP addresses or hostnames assigned to LoadBalancer Services or Ingress resources.
Populated for Service (type LoadBalancer) and Ingress resources.
* **message**: string: Human-readable message summarizing the resource state.
* **nodeAddresses**: [NodeAddress](#nodeaddress)[]: Network addresses of the node (InternalIP, ExternalIP, Hostname).
Populated for Node resources.
* **nodeAllocatable**: [NodeResourceMap](#noderesourcemap): Resources available for scheduling after system reservation.
Populated for Node resources.
* **nodeCapacity**: [NodeResourceMap](#noderesourcemap): Total hardware resources of the node (cpu, memory, pods, ephemeral-storage).
Populated for Node resources.
* **nodeInfo**: [NodeSystemInfo](#nodesysteminfo): Operating system and runtime information for the node.
Populated for Node resources.
* **numberMisscheduled**: int: Nodes running the daemon pod that should not be running it.
Populated for DaemonSet resources.
* **numberReady**: int: Nodes with a Ready daemon pod. Populated for DaemonSet resources.
* **numberUnavailable**: int: Nodes missing an available daemon pod. Populated for DaemonSet resources.
* **observedGeneration**: int: Most recent generation observed by the controller.
Populated for Deployment, StatefulSet, DaemonSet, and Pod resources.
* **phase**: string: High-level lifecycle phase of the resource.
Examples: 'Running' / 'Pending' / 'Succeeded' / 'Failed' for Pod;
'Bound' / 'Pending' / 'Lost' for PersistentVolumeClaim;
'Active' / 'Terminating' for Namespace.
* **podIp**: string: IP address allocated to the pod within the cluster. Populated for Pod resources.
* **podIps**: string[]: Additional pod IPs assigned in multi-network or dual-stack clusters. Populated for Pod resources.
* **pvcAccessModes**: string[]: Access modes granted to the PVC after it is bound to a PV.
Populated for PersistentVolumeClaim resources.
* **pvcCapacity**: string: Actual provisioned storage capacity for the PVC after binding (e.g., '10Gi').
Populated for PersistentVolumeClaim resources.
* **qosClass**: string: QoS class assigned by Kubernetes based on resource requests and limits.
One of 'Guaranteed', 'Burstable', or 'BestEffort'. Populated for Pod resources.
* **readyPods**: int: Number of pods in ready state for a Job. Populated for Job resources.
* **readyReplicas**: int: Number of pods ready to serve requests. Populated for Deployment, StatefulSet, DaemonSet.
* **reason**: string: Brief CamelCase reason for the pod's current state (e.g., 'Evicted', 'OOMKilled').
Populated for Pod resources.
* **replicas**: int: Total non-terminating pods targeted by this workload. Populated for Deployment, StatefulSet, ReplicaSet.
* **startTime**: string: UTC timestamp when the pod was accepted by the scheduler. Populated for Pod resources.
* **succeededJobCount**: int: Number of pods that completed successfully. Populated for Job resources.
* **terminatingReplicas**: int: Pods that are terminating but not yet removed from the endpoints.
Populated for Deployment and ReplicaSet resources.
* **unavailableReplicas**: int: Pods required but not yet available. Populated for Deployment resources.
* **updatedReplicas**: int: Pods running the current (desired) template spec. Populated for Deployment, StatefulSet, DaemonSet.
* **updateRevision**: string: Name of the StatefulSet revision applied to updatedReplicas.
Populated for StatefulSet resources.
* **volumeAttached**: bool: When true, the volume is successfully attached to the target node.
Populated for VolumeAttachment resources.
* **volumesAttached**: [AttachedVolume](#attachedvolume)[]: Volumes that have been successfully attached to the node by the attach/detach controller.
Populated for Node resources.

## NodeAddress
### Properties
* **address**: string (Required): The address value (IP address or hostname).
* **type**: string: Address type (e.g., 'InternalIP', 'ExternalIP', 'Hostname').

## NodeResourceMap
### Properties
* **cpu**: string: CPU quantity (e.g., '4', '3850m').
* **ephemeralStorage**: string: Ephemeral storage quantity (e.g., '119Gi').
* **memory**: string: Memory quantity (e.g., '16Gi', '14902Mi').
* **pods**: string: Maximum number of pods the node supports.

## NodeSystemInfo
### Properties
* **architecture**: string: CPU architecture of the node (e.g., 'amd64', 'arm64').
* **containerRuntimeVersion**: string: Container runtime name and version (e.g., 'containerd://1.7.2').
* **kernelVersion**: string: Kernel version of the node OS (e.g., '5.15.0-1041-azure').
* **kubeletVersion**: string: Node agent version running on the node (e.g., 'v1.29.2').
* **kubeProxyVersion**: string: kube-proxy version running on the node.
* **operatingSystem**: string: Operating system family ('linux' or 'windows').
* **osImage**: string: Human-readable OS image string (e.g., 'Ubuntu 22.04.3 LTS').

## NodeTaint
### Properties
* **effect**: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule' | string: Effect applied to non-tolerating pods.
* **key**: string (Required): Taint key (e.g., 'node.kubernetes.io/not-ready').
* **value**: string: Taint value matched by tolerations using the 'Equal' operator.

## OwnerReference
### Properties
* **apiVersion**: string: API version of the owner (e.g., 'apps/v1').
* **blockOwnerDeletion**: bool: If true, deletion of the owner is blocked until this reference is removed.
* **controller**: bool: True when this owner manages the lifecycle of the referencing object.
* **kind**: string: Kind of the owner (e.g., 'ReplicaSet').
* **name**: string: Name of the owner object.
* **uid**: string (Required, ReadOnly): UID of the owner object.

## PodSecurityContext
### Properties
* **appArmorProfile**: string: AppArmor profile type applied to all containers ('RuntimeDefault', 'Unconfined', or 'Localhost').
* **fsGroup**: int: GID of the owning group for volume mounts; processes also run as this GID.
* **runAsGroup**: int: GID to run all containers as.
* **runAsNonRoot**: bool: Require all containers to run as non-root when true.
* **runAsUser**: int: UID to run all containers as. Overridden per-container by ContainerSecurityContext.runAsUser.
* **seccompProfile**: string: Seccomp profile type applied to all containers ('RuntimeDefault', 'Unconfined', or 'Localhost').
* **supplementalGroups**: int[]: Supplemental GIDs applied to each container in addition to the primary GID.

## PolicyRule
### Properties
* **apiGroups**: string[]: API groups the rule applies to (use '' for the core group).
* **resourceNames**: string[]: Specific resource names this rule applies to. Empty means all instances.
* **resources**: string[]: Resource types the rule applies to (e.g., 'pods', 'deployments', 'secrets').
* **verbs**: string[] (Required): Actions permitted (e.g., 'get', 'list', 'watch', 'create', 'update', 'patch', 'delete').

## RbacSubject
### Properties
* **kind**: string: Kind of the subject: 'User', 'Group', or 'ServiceAccount'.
* **name**: string (Required): Name of the subject.
* **namespaceName**: string: Namespace of the ServiceAccount. Required when kind is ServiceAccount.

## ServicePort
### Properties
* **appProtocol**: string: Application-level protocol hint (e.g., 'http', 'https', 'grpc').
* **name**: string: Optional name for this port, unique within the Service.
* **nodePort**: int: NodePort allocated for NodePort and LoadBalancer Services.
* **port**: int (Required): Port number the Service listens on (cluster-internal).
* **protocol**: 'SCTP' | 'TCP' | 'UDP' | string: Network protocol for this port.
* **targetPort**: string: Port or named port on the target pod the traffic is forwarded to.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Toleration
### Properties
* **effect**: string: Taint effect this toleration applies to
('NoSchedule', 'PreferNoSchedule', or 'NoExecute'). Empty matches all effects.
* **key**: string (Required, ReadOnly): Taint key the toleration applies to. Empty matches all keys.
* **operator**: string: Operator to use when matching: 'Equal' matches when key and value both match;
'Exists' matches when the key is present regardless of value.
* **tolerationSeconds**: int: Seconds a pod tolerates a NoExecute taint before being evicted.
* **value**: string: Taint value matched when operator is 'Equal'.

## Volume
### Properties
* **name**: string (Required): Name of the volume, referenced by container volumeMounts.
* **sizeLimit**: string: Storage size limit for emptyDir volumes (e.g., '50Mi').
* **source**: string: Primary reference for the volume source (e.g., ConfigMap name or PVC name).
* **sourceType**: string: Kind of volume source
(e.g., 'emptyDir', 'configMap', 'secret', 'persistentVolumeClaim', 'projected').

## VolumeClaimTemplate
### Properties
* **accessModes**: string[]: Requested storage access modes (e.g., 'ReadWriteOnce').
* **name**: string (Required): Name of the volume claim template, referenced by container volumeMounts.
* **storageClassName**: string: StorageClass used for dynamic provisioning.
* **storageRequest**: string: Storage quantity requested per replica (e.g., '10Gi').
* **volumeMode**: string: Volume mode ('Filesystem' or 'Block').

## VolumeMount
### Properties
* **mountPath**: string: Absolute path inside the container where the volume is mounted.
* **name**: string (Required): Name matching a volume declared in the pod spec.
* **readOnly**: bool: Mount the volume as read-only when true.
* **subPath**: string: Sub-path within the volume to mount instead of the volume root.

