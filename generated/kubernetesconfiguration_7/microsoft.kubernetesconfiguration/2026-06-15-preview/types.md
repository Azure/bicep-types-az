# Microsoft.KubernetesConfiguration @ 2026-06-15-preview

## Resource Microsoft.KubernetesConfiguration/upgradeAssessments@2026-06-15-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-06-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [UpgradeAssessmentProperties](#upgradeassessmentproperties) (ReadOnly): Properties of the UpgradeAssessments resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.KubernetesConfiguration/upgradeAssessments' (ReadOnly, DeployTimeConstant): The resource type

## ComponentCompatibility
### Properties
* **compatibilityStatus**: 'Compatible' | 'Incompatible' | 'Unknown' | 'Untested' | string (Required): Compatibility of the component with the target Kubernetes version.
* **minCompatibleVersion**: string: Minimum component version known to be compatible with targetKubernetesVersion.
* **name**: string (Required): Component name (e.g., 'containerd', 'calico').
* **notes**: string: Additional notes about compatibility.
* **severity**: 'Critical' | 'None' | 'Unknown' | 'Warning' | string (Required): Severity associated with this compatibility result.
* **version**: string (Required): Installed component version.

## DeprecatedApiUsage
### Properties
* **group**: string (Required): API group (e.g., 'flowcontrol.apiserver.k8s.io').
* **lastUsageObservedAt**: string: UTC timestamp of the last observed usage.
* **removedRelease**: string: Kubernetes release in which this API is removed (e.g., '1.32').
* **resource**: string (Required): Resource plural name (e.g., 'flowschemas').
* **severity**: 'Critical' | 'None' | 'Unknown' | 'Warning' | string: Severity of continued use of this deprecated API.
* **usageMetrics**: [HttpVerbUsageMetrics](#httpverbusagemetrics): HTTP verb call counts observed for this deprecated API.
* **version**: string (Required): API version (e.g., 'v1beta3').

## HttpVerbUsageMetrics
### Properties
* **delete**: int: Number of DELETE requests observed.
* **get**: int: Number of GET requests observed.
* **list**: int: Number of LIST requests observed.
* **patch**: int: Number of PATCH requests observed.
* **post**: int: Number of POST (create) requests observed.
* **put**: int: Number of PUT (replace) requests observed.
* **watch**: int: Number of WATCH requests observed.

## ReadinessCheck
### Properties
* **category**: 'APIServerHealth' | 'NodeStatus' | 'PodDisruptionBudget' | string (Required): Category of the readiness check.
* **details**: string: Human-readable reason when severity is not 'None'.
* **name**: string: Subject of the check (node name, workload namespace/name, etc.).
Optional for cluster-wide checks.
* **severity**: 'Critical' | 'None' | 'Unknown' | 'Warning' | string: Severity of the check result.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UpgradeAssessmentProperties
### Properties
* **assessmentTime**: string (ReadOnly): UTC timestamp when the in-cluster agent last computed this assessment.
* **componentCompatibility**: [ComponentCompatibility](#componentcompatibility)[] (ReadOnly): Per-component compatibility results with the target Kubernetes version.
* **currentKubernetesVersion**: string (ReadOnly): Current Kubernetes version running on the cluster (e.g., '1.29').
* **deprecatedApis**: [DeprecatedApiUsage](#deprecatedapiusage)[] (ReadOnly): Deprecated Kubernetes APIs still in use in the cluster.
* **overallSeverity**: 'Critical' | 'None' | 'Unknown' | 'Warning' | string (ReadOnly): Rolled-up severity across all checks; highest severity wins.
* **readinessChecks**: [ReadinessCheck](#readinesscheck)[] (ReadOnly): Cluster readiness check results.
* **targetKubernetesVersion**: string (ReadOnly): Target Kubernetes version to evaluate for upgrade (e.g., '1.30').

