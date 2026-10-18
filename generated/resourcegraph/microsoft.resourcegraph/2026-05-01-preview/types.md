# Microsoft.ResourceGraph @ 2026-05-01-preview

## Resource Microsoft.ResourceGraph/offerings@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OfferingProperties](#offeringproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceGraph/offerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceGraph/offerings/dataOnboardings@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataOnboardingProperties](#dataonboardingproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceGraph/offerings/dataOnboardings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceGraph/offerings/dataOnboardings/locations@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OnboardingLocationProperties](#onboardinglocationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceGraph/offerings/dataOnboardings/locations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceGraph/offerings/dataOnboardings/locations/activation@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [RegionalActivationProperties](#regionalactivationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceGraph/offerings/dataOnboardings/locations/activation' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceGraph/offerings/ontologies@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OntologyProperties](#ontologyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceGraph/offerings/ontologies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceGraph/offerings/ontologies/locations@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OnboardingLocationProperties](#onboardinglocationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceGraph/offerings/ontologies/locations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceGraph/offerings/ontologies/locations/activation@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [RegionalActivationProperties](#regionalactivationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceGraph/offerings/ontologies/locations/activation' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceGraph/offerings/queryEndpoints@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [QueryEndpointProperties](#queryendpointproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceGraph/offerings/queryEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceGraph/offerings/queryEndpoints/locations@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OnboardingLocationProperties](#onboardinglocationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceGraph/offerings/queryEndpoints/locations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ResourceGraph/offerings/queryEndpoints/locations/activation@2026-05-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [QueryEndpointActivationProperties](#queryendpointactivationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ResourceGraph/offerings/queryEndpoints/locations/activation' (ReadOnly, DeployTimeConstant): The resource type

## DataOnboardingProperties
### Properties
* **activatedRegions**: string[] (ReadOnly): The regions that have completed control-plane activation, derived from the regional
activation children. This is the numerator to `targetRegions`, not an execution-readiness signal.
* **activationStatus**: 'Active' | 'Pending' | 'RollingOut' | string (ReadOnly): The aggregate regional rollout state of the data onboarding.
* **ontologyRef**: string (ReadOnly): The ARM resource identifier of the ontology whose declared types caused this data onboarding
to be created. Reusing covered types within the same offering does not overwrite this
provenance. Newly unmet types are grouped by publisher within each generation batch, so a
publisher namespace can have multiple onboarding records.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of the data onboarding.
* **publisherNamespace**: string {pattern: "^[A-Za-z][A-Za-z0-9.]+$"} (Required): The provider namespace that owns every entry in `types`, for example `microsoft.compute`.
Relationships use their own relationship type's namespace, not the source node's namespace.
* **rejectionReason**: string (ReadOnly): The reason the data onboarding was rejected.
* **reviewStatus**: 'Approved' | 'Executed' | 'Rejected' | 'Submitted' | 'UnderExecution' | 'UnderReview' | string (ReadOnly): The review lifecycle of the data onboarding.
* **targetRegions**: string[] (Required): The regions this supply is intended to reach. This is the denominator for `activationStatus`:
the roll-up reports `Active` only once every declared region has a succeeded regional
activation. An empty list means no target set was declared, in which case `activationStatus`
reports `Active` as soon as any region succeeds.
* **types**: [OnboardingTypeSpec](#onboardingtypespec)[] (Required): Every node and edge type this publisher supplies.

## EdgeTypeRef
### Properties
* **relationshipType**: string {pattern: "^[A-Za-z][A-Za-z0-9.]+/[A-Za-z0-9._/-]+$"} (Required): The fully qualified relationship type that connects the source and target node types.
Its own provider namespace identifies the publisher.
* **sourceNodeType**: string (Required): The source node's Azure resource type or its ontology-local alias.
* **targetNodeType**: string (Required): The target node's Azure resource type or its ontology-local alias.

## IngestionEndpoint
### Properties
* **supportedFormats**: string[] (Required): The notification payload formats the endpoint accepts.
* **uri**: string (Required): The URI the publisher sends notifications to.

## NodeTypeRef
### Properties
* **alias**: string: An optional partner-facing alias for the node type.
* **resourceType**: string {pattern: "^[A-Za-z][A-Za-z0-9.]+/[A-Za-z0-9._/-]+$"} (Required): The fully qualified Azure resource type, for example `microsoft.compute/virtualmachines`.

## OfferingProperties
### Properties
* **contactEmails**: string[] {minLength: 1} (Required): Contact email addresses for the team that owns the offering.
* **displayName**: string: The partner-facing display name of the offering.
* **documentationLink**: string: A link to the offering's partner-facing documentation.
* **lifecycleState**: 'Deprecated' | 'GA' | 'Preview' | string: The public lifecycle state of the offering.
* **organizationName**: string (Required): The name of the organization that owns the offering.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of the offering.
* **scenarioDescription**: string (Required): A description of the scenario the offering serves.
* **serviceTreeId**: string: The Service Tree identifier of the owning service.
* **tier**: 'Dedicated' | 'Shared' | string: The commercial tier of the offering.

## OnboardingLocationProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of the location grouping.

## OnboardingTypeSpec
* **Discriminator**: kind

### Base Properties
* **ingestionEndpoint**: [IngestionEndpoint](#ingestionendpoint) (ReadOnly): The ingestion endpoint resolved for this type during regional activation.
* **payloadSizeKb**: int: The average notification payload size, in kilobytes.
* **peakNotificationRates**: [PeakNotificationRates](#peaknotificationrates): Peak per-minute notification rates for this type.
* **status**: 'Approved' | 'Executed' | 'Rejected' | 'Submitted' | 'UnderExecution' | 'UnderReview' | string (Required, ReadOnly): The review lifecycle state of this type.
* **visibility**: 'GA' | 'InternalOnly' | 'PublicPreview' | string (Required): The visibility of this type to consumers.

### EdgeOnboardingTypeSpec
#### Properties
* **expectedEdgeCount**: int: The total number of edges the publisher expects to supply.
* **kind**: 'Edge' (Required): Whether this entry describes a node type or an edge type.
* **relationshipType**: string (Required): The relationship type that connects the source and target node types.
* **sourceNodeType**: string (Required): The Azure resource type at the source of the relationship.
* **targetNodeType**: string (Required): The Azure resource type at the target of the relationship.

### NodeOnboardingTypeSpec
#### Properties
* **kind**: 'Node' (Required): Whether this entry describes a node type or an edge type.
* **resourceType**: string {pattern: "^[A-Za-z][A-Za-z0-9.]+/[A-Za-z0-9._/-]+$"} (Required): The fully qualified Azure resource type, for example `microsoft.compute/virtualmachines`.
* **totalRowCount**: int: The total number of rows the publisher expects to supply.


## OntologyProperties
### Properties
* **approvedAt**: string (ReadOnly): When the ontology was last approved.
* **approvedBy**: string (ReadOnly): The reviewer who last approved the ontology.
* **autoOnboard**: bool: When `true`, creating or updating the ontology immediately materializes global data
onboardings for every unmet type. When `false`, gap analysis still runs and
`validationDetails` reports the gaps, but no new supply is created. Existing approved supply
can still satisfy the ontology; unmet demand keeps its derived `reviewStatus` at `Submitted`.
* **displayName**: string: The partner-facing display name of the ontology.
* **edgeTypeRefs**: [EdgeTypeRef](#edgetyperef)[]: The edge types the ontology declares.
* **nodeTypeRefs**: [NodeTypeRef](#nodetyperef)[]: The node types the ontology declares.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of the ontology.
* **rejectedAt**: string (ReadOnly): When the ontology was last rejected.
* **rejectedBy**: string (ReadOnly): The reviewer who last rejected the ontology.
* **rejectionReason**: string (ReadOnly): The rejection reason propagated from backing supply. Rejected supply leaves the ontology's
derived review status at `Submitted`.
* **reviewStatus**: 'Approved' | 'Executed' | 'Rejected' | 'Submitted' | 'UnderExecution' | 'UnderReview' | string (ReadOnly): The review lifecycle of the ontology. It is derived from the data onboardings referenced by
`validationDetails` and reaches `Approved` only once every one of them is approved. Regional
activation is blocked until then.
* **validationDetails**: [ValidationDetail](#validationdetail)[] (ReadOnly): The per-type gap-analysis results for the ontology.
* **validationStatus**: 'Available' | 'NotOnboarded' | 'OnboardingInProgress' | 'Unknown' | string (ReadOnly): The aggregate availability of every type the ontology declares. It is the worst per-type
availability across `validationDetails`.

## OntologySnapshot
### Properties
* **edgeTypeRefs**: [EdgeTypeRef](#edgetyperef)[]: The edge types declared by the ontology at snapshot time.
* **nodeTypeRefs**: [NodeTypeRef](#nodetyperef)[]: The node types declared by the ontology at snapshot time.

## OntologyStorageAssignment
### Properties
* **dataset**: string (Required): The dataset the type is placed in.
* **kind**: 'Edge' | 'Node' | string (Required): Whether this assignment covers a node type or an edge type.
* **logicalTableName**: string (Required): The logical table name the type is written to.
* **lookbackHours**: int {minValue: 1} (Required): How far back, in hours, the type's data is retained for reconciliation.
* **physicalTableName**: string (Required): The physical table name backing the logical table.
* **relationshipType**: string: The relationship type. Edge assignments only.
* **resourceType**: string: The Azure resource type. Node assignments only.
* **scaleUnit**: string (Required): The scale unit the type is placed on.
* **sourceNodeType**: string: The Azure resource type at the source of the relationship. Edge assignments only.
* **targetNodeType**: string: The Azure resource type at the target of the relationship. Edge assignments only.

## PeakNotificationRates
### Properties
* **delete**: int (Required): Peak delete notifications per minute.
* **event**: int (Required): Peak event notifications per minute.
* **snapshot**: int (Required): Peak snapshot notifications per minute.
* **write**: int (Required): Peak write notifications per minute.

## QueryEndpointActivationProperties
### Properties
* **enginePreference**: 'Galaxy' | 'Kusto' | 'NoPreference' | 'Pacific' | string (ReadOnly): The preferred query backend copied from the parent query endpoint.
* **ontologyRef**: string (ReadOnly): The full Azure resource identifier of the ontology this regional endpoint serves, copied
from the parent query endpoint rather than supplied by the caller.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of the activation.
* **region**: string (ReadOnly): The Azure region this activation covers. It matches the `locations` segment of the resource
identifier.
* **validationDetails**: [ValidationDetail](#validationdetail)[] (ReadOnly): The per-type gap-analysis results for this region.

## QueryEndpointProperties
### Properties
* **displayName**: string {minLength: 1} (Required): The partner-facing display name of the query endpoint.
* **enginePreference**: 'Galaxy' | 'Kusto' | 'NoPreference' | 'Pacific' | string: The preferred query backend. Omission records no preference and does not provision a backend.
* **estimatedQueriesPerDay**: int {minValue: 1} (Required): The expected daily query volume, used for capacity planning.
* **ontologyRef**: string (Required): The full Azure resource identifier of an approved ontology in the same subscription and
offering. The reference cannot be changed after creation. Legacy bare ontology names are
accepted on input and normalized; responses always contain the full resource identifier.
* **peakQueriesPerMinute**: int {minValue: 1}: The expected peak query rate, in queries per minute.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of the query endpoint.

## RegionalActivationProperties
### Properties
* **assignments**: [OntologyStorageAssignment](#ontologystorageassignment)[] (ReadOnly): The approved storage assignments this region has to execute, copied from the parent data
onboarding's approved configuration so that a regional record is self-describing. It is also
what a re-activation compares against to decide whether a region that already reported
`Executed` still is. Empty for an ontology activation.
* **ingestionEndpoint**: [IngestionEndpoint](#ingestionendpoint) (ReadOnly): The ingestion endpoint resolved for this region.
* **materializedDataOnboardingRefs**: string[] (ReadOnly): ARM resource identifiers of the data onboardings materialized for this region as a side effect
of the activation. Empty when nothing was materialized.
* **ontologySnapshot**: [OntologySnapshot](#ontologysnapshot): The snapshot of the ontology body this activation was generated from. When supplied on create
or update, Azure Resource Graph compares it against the currently approved global ontology and
rejects the activation if they differ, enforcing the one-active-rollout invariant. When
omitted, the drift check is skipped. It is persisted and returned on read.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of the activation.
* **region**: string (ReadOnly): The Azure region this activation covers. It matches the `locations` segment of the resource
identifier.
* **reviewStatus**: 'Approved' | 'Executed' | 'Rejected' | 'Submitted' | 'UnderExecution' | 'UnderReview' | string (ReadOnly): For data-onboarding activations, `UnderExecution` until the operator closes the region out
as `Executed`; approval happens globally on the supply record. The shared field is unused
for ontology activations and is returned with its default value, `Submitted`.
* **validationDetails**: [ValidationDetail](#validationdetail)[] (ReadOnly): The per-type gap-analysis results for this region.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## ValidationDetail
### Properties
* **availability**: 'Available' | 'NotOnboarded' | 'OnboardingInProgress' | 'Unknown' | string (Required): The availability of the type.
* **dataOnboardingRef**: string: The ARM resource identifier of the data onboarding that covers this type.
* **kind**: 'Edge' | 'Node' | string (Required): Whether this detail describes a declared node type or edge type.
* **message**: string: A human-readable explanation of the availability result. Emitted only when `availability` is
not `Available`, that is, only when there is something to explain.
* **relationshipType**: string: The relationship type. Edge entries only.
* **resourceType**: string: The Azure resource type. Node entries only.
* **reviewStatus**: 'Approved' | 'Executed' | 'Rejected' | 'Submitted' | 'UnderExecution' | 'UnderReview' | string (Required): The review status of the data onboarding named by `dataOnboardingRef`. The ontology's own
`reviewStatus` is a roll-up of these: it reads `Approved` only when every entry does, and
regional activation is rejected while any entry is still `Submitted`.
* **sourceNodeType**: string: The Azure resource type at the source of the relationship. Edge entries only.
* **targetNodeType**: string: The Azure resource type at the target of the relationship. Edge entries only.

