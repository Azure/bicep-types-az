# Microsoft.App @ 2024-02-02-preview

## Resource Microsoft.App/builders@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 32, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BuilderProperties](#builderproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/builders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/builders/builds@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BuildProperties](#buildproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/builders/builds' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/connectedEnvironments@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectedEnvironmentProperties](#connectedenvironmentproperties): ConnectedEnvironment resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/connectedEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/connectedEnvironments/certificates@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties): Certificate resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/connectedEnvironments/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/connectedEnvironments/daprComponents@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DaprComponentProperties](#daprcomponentproperties): Dapr Component resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/connectedEnvironments/daprComponents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/connectedEnvironments/storages@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectedEnvironmentStorageProperties](#connectedenvironmentstorageproperties): Storage properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/connectedEnvironments/storages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/containerApps@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): managed identities for the Container App to interact with other Azure services without maintaining any secrets or credentials in code.
* **kind**: 'workflowapp' | string: Metadata used to render different experiences for resources of the same type; e.g. WorkflowApp is a kind of Microsoft.App/ContainerApps type. If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerAppProperties](#containerappproperties): ContainerApp resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/containerApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/containerApps/authConfigs@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthConfigProperties](#authconfigproperties): AuthConfig resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/containerApps/authConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/containerApps/builds@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerAppsBuildProperties](#containerappsbuildproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/containerApps/builds' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/containerApps/detectorProperties@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (ReadOnly): managed identities for the Container App to interact with other Azure services without maintaining any secrets or credentials in code.
* **kind**: 'workflowapp' | string (ReadOnly): Metadata used to render different experiences for resources of the same type; e.g. WorkflowApp is a kind of Microsoft.App/ContainerApps type. If supported, the resource provider must validate and persist this value.
* **location**: string (ReadOnly): The geo-location where the resource lives
* **managedBy**: string (ReadOnly): The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: 'rootApi' (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerAppProperties](#containerappproperties) (ReadOnly): ContainerApp resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.App/containerApps/detectorProperties' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/containerApps/detectorProperties/revisions@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RevisionProperties](#revisionproperties) (ReadOnly): Revision resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/containerApps/detectorProperties/revisions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/containerApps/detectors@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticsProperties](#diagnosticsproperties) (ReadOnly): Diagnostics resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/containerApps/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/containerApps/patches@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PatchProperties](#patchproperties) (ReadOnly): Properties that describes current states of the patch resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/containerApps/patches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/containerApps/resiliencyPolicies@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AppResiliencyProperties](#appresiliencyproperties): App Resiliency resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/containerApps/resiliencyPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/containerApps/revisions@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RevisionProperties](#revisionproperties) (ReadOnly): Revision resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/containerApps/revisions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/containerApps/revisions/replicas@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReplicaProperties](#replicaproperties) (ReadOnly): Replica resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/containerApps/revisions/replicas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/containerApps/sourcecontrols@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlProperties](#sourcecontrolproperties) (ReadOnly): SourceControl resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/containerApps/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/jobs@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed identities needed by a container app job to interact with other Azure services to not maintain any secrets or credentials in code.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties): Container Apps Job resource specific properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/jobs/detectorProperties@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (ReadOnly): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (ReadOnly): Managed identities needed by a container app job to interact with other Azure services to not maintain any secrets or credentials in code.
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: 'rootApi' (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (ReadOnly): Container Apps Job resource specific properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.App/jobs/detectorProperties' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/jobs/detectors@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticsProperties](#diagnosticsproperties) (ReadOnly): Diagnostics resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/jobs/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/logicApps@2024-02-02-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: any: The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/logicApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed identities for the Managed Environment to interact with other Azure services without maintaining any secrets or credentials in code.
* **kind**: string: Kind of the Environment.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedEnvironmentProperties](#managedenvironmentproperties): Managed environment resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/managedEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments/certificates@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties): Certificate resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/managedEnvironments/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments/daprComponents@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DaprComponentProperties](#daprcomponentproperties): Dapr Component resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/managedEnvironments/daprComponents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments/daprComponents/resiliencyPolicies@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DaprComponentResiliencyPolicyProperties](#daprcomponentresiliencypolicyproperties): Dapr Component Resiliency Policy resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/managedEnvironments/daprComponents/resiliencyPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments/daprSubscriptions@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DaprSubscriptionProperties](#daprsubscriptionproperties): Dapr PubSub Event Subscription resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/managedEnvironments/daprSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments/detectorProperties@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity) (ReadOnly): Managed identities for the Managed Environment to interact with other Azure services without maintaining any secrets or credentials in code.
* **kind**: string (ReadOnly): Kind of the Environment.
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: 'rootApi' (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedEnvironmentProperties](#managedenvironmentproperties) (ReadOnly): Managed environment resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.App/managedEnvironments/detectorProperties' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments/detectors@2024-02-02-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticsProperties](#diagnosticsproperties) (ReadOnly): Diagnostics resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/managedEnvironments/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments/dotNetComponents@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DotNetComponentProperties](#dotnetcomponentproperties): .NET Component resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/managedEnvironments/dotNetComponents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments/javaComponents@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JavaComponentProperties](#javacomponentproperties): Java Component resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/managedEnvironments/javaComponents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments/managedCertificates@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedCertificateProperties](#managedcertificateproperties): Certificate resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/managedEnvironments/managedCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments/privateEndpointConnections@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/managedEnvironments/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/managedEnvironments/storages@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedEnvironmentStorageProperties](#managedenvironmentstorageproperties): Storage properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/managedEnvironments/storages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/sessionPools@2024-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SessionPoolProperties](#sessionpoolproperties): Container App session pool resource specific properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/sessionPools' (ReadOnly, DeployTimeConstant): The resource type

## Function listAuthToken (Microsoft.App/builders/builds@2024-02-02-preview)
* **Resource**: Microsoft.App/builders/builds
* **ApiVersion**: 2024-02-02-preview
* **Output**: [BuildToken](#buildtoken)

## Function listCustomHostNameAnalysis (Microsoft.App/containerApps@2024-02-02-preview)
* **Resource**: Microsoft.App/containerApps
* **ApiVersion**: 2024-02-02-preview
* **Output**: [CustomHostnameAnalysisResult](#customhostnameanalysisresult)

## Function listSecrets (Microsoft.App/connectedEnvironments/daprComponents@2024-02-02-preview)
* **Resource**: Microsoft.App/connectedEnvironments/daprComponents
* **ApiVersion**: 2024-02-02-preview
* **Output**: [DaprSecretsCollection](#daprsecretscollection)

## Function listSecrets (Microsoft.App/containerApps@2024-02-02-preview)
* **Resource**: Microsoft.App/containerApps
* **ApiVersion**: 2024-02-02-preview
* **Output**: [SecretsCollection](#secretscollection)

## Function listSecrets (Microsoft.App/jobs@2024-02-02-preview)
* **Resource**: Microsoft.App/jobs
* **ApiVersion**: 2024-02-02-preview
* **Output**: [JobSecretsCollection](#jobsecretscollection)

## Function listSecrets (Microsoft.App/managedEnvironments/daprComponents@2024-02-02-preview)
* **Resource**: Microsoft.App/managedEnvironments/daprComponents
* **ApiVersion**: 2024-02-02-preview
* **Output**: [DaprSecretsCollection](#daprsecretscollection)

## Function listWorkflowsConnections (Microsoft.App/logicApps@2024-02-02-preview)
* **Resource**: Microsoft.App/logicApps
* **ApiVersion**: 2024-02-02-preview
* **Output**: [WorkflowEnvelope](#workflowenvelope)

## AllowedAudiencesValidation
### Properties
* **allowedAudiences**: string[]: The configuration settings of the allowed list of audiences from which to validate the JWT token.

## AllowedPrincipals
### Properties
* **groups**: string[]: The list of the allowed groups.
* **identities**: string[]: The list of the allowed identities.

## AppInsightsConfiguration
### Properties
* **connectionString**: string {sensitive}: Application Insights connection string

## Apple
### Properties
* **enabled**: bool: <code>false</code> if the Apple provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow.
* **registration**: [AppleRegistration](#appleregistration): The configuration settings of the Apple registration.

## AppleRegistration
### Properties
* **clientId**: string: The Client ID of the app used for login.
* **clientSecretSettingName**: string: The app setting name that contains the client secret.

## AppLogsConfiguration
### Properties
* **destination**: string: Logs destination, can be 'log-analytics', 'azure-monitor' or 'none'
* **logAnalyticsConfiguration**: [LogAnalyticsConfiguration](#loganalyticsconfiguration): Log Analytics configuration, must only be provided when destination is configured as 'log-analytics'

## AppRegistration
### Properties
* **appId**: string: The App ID of the app used for login.
* **appSecretSettingName**: string: The app setting name that contains the app secret.

## AppResiliencyProperties
### Properties
* **circuitBreakerPolicy**: [CircuitBreakerPolicy](#circuitbreakerpolicy): Policy that defines circuit breaker conditions
* **httpConnectionPool**: [HttpConnectionPool](#httpconnectionpool): Defines parameters for http connection pooling
* **httpRetryPolicy**: [HttpRetryPolicy](#httpretrypolicy): Policy that defines http request retry conditions
* **tcpConnectionPool**: [TcpConnectionPool](#tcpconnectionpool): Defines parameters for tcp connection pooling
* **tcpRetryPolicy**: [TcpRetryPolicy](#tcpretrypolicy): Policy that defines tcp request retry conditions
* **timeoutPolicy**: [TimeoutPolicy](#timeoutpolicy): Policy to set request timeouts

## AuthConfigProperties
### Properties
* **encryptionSettings**: [EncryptionSettings](#encryptionsettings): The configuration settings of the secrets references of encryption key and signing key for ContainerApp Service Authentication/Authorization.
* **globalValidation**: [GlobalValidation](#globalvalidation): The configuration settings that determines the validation flow of users using  Service Authentication/Authorization.
* **httpSettings**: [HttpSettings](#httpsettings): The configuration settings of the HTTP requests for authentication and authorization requests made against ContainerApp Service Authentication/Authorization.
* **identityProviders**: [IdentityProviders](#identityproviders): The configuration settings of each of the identity providers used to configure ContainerApp Service Authentication/Authorization.
* **login**: [Login](#login): The configuration settings of the login flow of users using ContainerApp Service Authentication/Authorization.
* **platform**: [AuthPlatform](#authplatform): The configuration settings of the platform of ContainerApp Service Authentication/Authorization.

## AuthPlatform
### Properties
* **enabled**: bool: <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
* **runtimeVersion**: string: The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
The setting in this value can control the behavior of certain features in the Authentication / Authorization module.

## AzureActiveDirectory
### Properties
* **enabled**: bool: <code>false</code> if the Azure Active Directory provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **isAutoProvisioned**: bool: Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.
This is an internal flag primarily intended to support the Azure Management Portal. Users should not
read or write to this property.
* **login**: [AzureActiveDirectoryLogin](#azureactivedirectorylogin): The configuration settings of the Azure Active Directory login flow.
* **registration**: [AzureActiveDirectoryRegistration](#azureactivedirectoryregistration): The configuration settings of the Azure Active Directory app registration.
* **validation**: [AzureActiveDirectoryValidation](#azureactivedirectoryvalidation): The configuration settings of the Azure Active Directory token validation flow.

## AzureActiveDirectoryLogin
### Properties
* **disableWWWAuthenticate**: bool: <code>true</code> if the www-authenticate provider should be omitted from the request; otherwise, <code>false</code>.
* **loginParameters**: string[]: Login parameters to send to the OpenID Connect authorization endpoint when
a user logs in. Each parameter must be in the form "key=value".

## AzureActiveDirectoryRegistration
### Properties
* **clientId**: string: The Client ID of this relying party application, known as the client_id.
This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
other 3rd party OpenID Connect providers.
More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
* **clientSecretCertificateIssuer**: string: An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts as
a replacement for the Client Secret Certificate Thumbprint. It is also optional.
* **clientSecretCertificateSubjectAlternativeName**: string: An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts as
a replacement for the Client Secret Certificate Thumbprint. It is also optional.
* **clientSecretCertificateThumbprint**: string: An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
a replacement for the Client Secret. It is also optional.
* **clientSecretSettingName**: string: The app setting name that contains the client secret of the relying party application.
* **openIdIssuer**: string: The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://login.microsoftonline.com/v2.0/{tenant-guid}/.
This URI is a case-sensitive identifier for the token issuer.
More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html

## AzureActiveDirectoryValidation
### Properties
* **allowedAudiences**: string[]: The list of audiences that can make successful authentication/authorization requests.
* **defaultAuthorizationPolicy**: [DefaultAuthorizationPolicy](#defaultauthorizationpolicy): The configuration settings of the default authorization policy.
* **jwtClaimChecks**: [JwtClaimChecks](#jwtclaimchecks): The configuration settings of the checks that should be made while validating the JWT Claims.

## AzureCredentials
### Properties
* **clientId**: string {sensitive} (WriteOnly): Client Id.
* **clientSecret**: string {sensitive} (WriteOnly): Client Secret.
* **kind**: string (WriteOnly): Kind of auth github does for deploying the template
* **subscriptionId**: string: Subscription Id.
* **tenantId**: string {sensitive} (WriteOnly): Tenant Id.

## AzureFileProperties
### Properties
* **accessMode**: 'ReadOnly' | 'ReadWrite' | string: Access mode for storage
* **accountKey**: string {sensitive}: Storage account key for azure file.
* **accountName**: string: Storage account name for azure file.
* **shareName**: string: Azure file share name.

## AzureStaticWebApps
### Properties
* **enabled**: bool: <code>false</code> if the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **registration**: [AzureStaticWebAppsRegistration](#azurestaticwebappsregistration): The configuration settings of the Azure Static Web Apps registration.

## AzureStaticWebAppsRegistration
### Properties
* **clientId**: string: The Client ID of the app used for login.

## BlobStorageTokenStore
### Properties
* **sasUrlSettingName**: string (Required): The name of the app secrets containing the SAS URL of the blob storage containing the tokens.

## BuildConfiguration
### Properties
* **baseOs**: string: Base OS used to build and run the app.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: List of environment variables to be passed to the build, secrets should not be used in environment variable.
* **platform**: string: Platform to be used to build and run the app.
* **platformVersion**: string: Platform version to be used to build and run the app.
* **preBuildSteps**: [PreBuildStep](#prebuildstep)[]: List of steps to perform before the build.

## BuilderProperties
### Properties
* **containerRegistries**: [ContainerRegistry](#containerregistry)[]: List of mappings of container registries and the managed identity used to connect to it.
* **environmentId**: string (Required): Resource ID of the container apps environment that the builder is associated with.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of a builder resource.

## BuildProperties
### Properties
* **buildStatus**: 'Canceled' | 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly): Status of the build once it has been provisioned.
* **configuration**: [BuildConfiguration](#buildconfiguration): Configuration of the build.
* **destinationContainerRegistry**: [ContainerRegistryWithCustomImage](#containerregistrywithcustomimage): Container registry that the final image will be uploaded to.
* **logStreamEndpoint**: string (ReadOnly): Endpoint from which the build logs can be streamed.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Build provisioning state.
* **tokenEndpoint**: string (ReadOnly): Endpoint to use to retrieve an authentication token for log streaming and uploading source code.
* **uploadEndpoint**: string (ReadOnly): Endpoint to which the source code should be uploaded.

## BuildToken
### Properties
* **expires**: string (ReadOnly): Token expiration date.
* **token**: string {sensitive} (ReadOnly): Authentication token.

## CertificateKeyVaultProperties
### Properties
* **identity**: string: Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
* **keyVaultUrl**: string: URL pointing to the Azure Key Vault secret that holds the certificate.

## CertificateProperties
### Properties
* **certificateKeyVaultProperties**: [CertificateKeyVaultProperties](#certificatekeyvaultproperties): Properties for a certificate stored in a Key Vault.
* **certificateType**: 'ImagePullTrustedCA' | 'ServerSSLCertificate' | string: The type of the certificate. Allowed values are `ServerSSLCertificate` and `ImagePullTrustedCA`
* **expirationDate**: string (ReadOnly): Certificate expiration date.
* **issueDate**: string (ReadOnly): Certificate issue Date.
* **issuer**: string (ReadOnly): Certificate issuer.
* **password**: string {sensitive} (WriteOnly): Certificate password.
* **provisioningState**: 'Canceled' | 'DeleteFailed' | 'Failed' | 'Pending' | 'Succeeded' | string (ReadOnly): Provisioning state of the certificate.
* **publicKeyHash**: string (ReadOnly): Public key hash.
* **subjectAlternativeNames**: string[] (ReadOnly): Subject alternative names the certificate applies to.
* **subjectName**: string (ReadOnly): Subject name of the certificate.
* **thumbprint**: string (ReadOnly): Certificate thumbprint.
* **valid**: bool (ReadOnly): Is the certificate valid?.
* **value**: any (WriteOnly): PFX or PEM blob

## CircuitBreakerPolicy
### Properties
* **consecutiveErrors**: int: Number of consecutive errors before the circuit breaker opens
* **intervalInSeconds**: int: The time interval, in seconds, between endpoint checks. This can result in opening the circuit breaker if the check fails as well as closing the circuit breaker if the check succeeds. Defaults to 10s.
* **maxEjectionPercent**: int: Maximum percentage of hosts that will be ejected after failure threshold has been met

## ClientRegistration
### Properties
* **clientId**: string: The Client ID of the app used for login.
* **clientSecretSettingName**: string: The app setting name that contains the client secret.

## Configuration
### Properties
* **activeRevisionsMode**: 'Multiple' | 'Single' | string: ActiveRevisionsMode controls how active revisions are handled for the Container app:
<list><item>Multiple: multiple revisions can be active.</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode. If no value if provided, this is the default.</item></list>
* **dapr**: [Dapr](#dapr): Dapr configuration for the Container App.
* **identitySettings**: [IdentitySettings](#identitysettings)[]: Optional settings for Managed Identities that are assigned to the Container App. If a Managed Identity is not specified here, default settings will be used.
* **ingress**: [Ingress](#ingress): Ingress configurations.
* **maxInactiveRevisions**: int: Optional. Max inactive revisions a Container App can have.
* **registries**: [RegistryCredentials](#registrycredentials)[]: Collection of private container registry credentials for containers used by the Container app
* **runtime**: [Runtime](#runtime): App runtime configuration for the Container App.
* **secrets**: [Secret](#secret)[]: Collection of secrets used by a Container app
* **service**: [Service](#service): Container App to be a dev Container App Service

## ConnectedEnvironmentProperties
### Properties
* **customDomainConfiguration**: [CustomDomainConfiguration](#customdomainconfiguration): Custom domain configuration for the environment
* **daprAIConnectionString**: string {sensitive}: Application Insights connection string used by Dapr to export Service to Service communication telemetry
* **defaultDomain**: string (ReadOnly): Default Domain Name for the cluster
* **deploymentErrors**: string (ReadOnly): Any errors that occurred during deployment or deployment validation
* **provisioningState**: 'Canceled' | 'Failed' | 'InfrastructureSetupComplete' | 'InfrastructureSetupInProgress' | 'InitializationInProgress' | 'ScheduledForDelete' | 'Succeeded' | 'Waiting' | string (ReadOnly): Provisioning state of the Kubernetes Environment.
* **staticIp**: string: Static IP of the connectedEnvironment

## ConnectedEnvironmentStorageProperties
### Properties
* **azureFile**: [AzureFileProperties](#azurefileproperties): Azure file properties
* **smb**: [SmbStorage](#smbstorage): SMB storage properties

## Container
### Properties
* **args**: string[]: Container start command arguments.
* **command**: string[]: Container start command.
* **env**: [EnvironmentVar](#environmentvar)[]: Container environment variables.
* **image**: string: Container image tag.
* **imageType**: 'CloudBuild' | 'ContainerImage' | string: The type of the image. Set to CloudBuild to let the system manages the image, where user will not be able to update image through image field. Set to ContainerImage for user provided image.
* **name**: string: Custom container name.
* **probes**: [ContainerAppProbe](#containerappprobe)[]: List of probes for the container.
* **resources**: [ContainerResources](#containerresources): Container resource requirements.
* **volumeMounts**: [VolumeMount](#volumemount)[]: Container volume mounts.

## ContainerAppProbe
### Properties
* **failureThreshold**: int: Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. Maximum value is 10.
* **httpGet**: [ContainerAppProbeHttpGet](#containerappprobehttpget): HTTPGet specifies the http request to perform.
* **initialDelaySeconds**: int: Number of seconds after the container has started before liveness probes are initiated. Minimum value is 1. Maximum value is 60.
* **periodSeconds**: int: How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240.
* **successThreshold**: int: Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. Maximum value is 10.
* **tcpSocket**: [ContainerAppProbeTcpSocket](#containerappprobetcpsocket): TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported.
* **terminationGracePeriodSeconds**: int: Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is an alpha field and requires enabling ProbeTerminationGracePeriod feature gate. Maximum value is 3600 seconds (1 hour)
* **timeoutSeconds**: int: Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 240.
* **type**: 'Liveness' | 'Readiness' | 'Startup' | string: The type of probe.

## ContainerAppProbeHttpGet
### Properties
* **host**: string: Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
* **httpHeaders**: [ContainerAppProbeHttpGetHttpHeadersItem](#containerappprobehttpgethttpheadersitem)[]: Custom headers to set in the request. HTTP allows repeated headers.
* **path**: string: Path to access on the HTTP server.
* **port**: int (Required): Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
* **scheme**: 'HTTP' | 'HTTPS' | string: Scheme to use for connecting to the host. Defaults to HTTP.

## ContainerAppProbeHttpGetHttpHeadersItem
### Properties
* **name**: string (Required): The header field name
* **value**: string (Required): The header field value

## ContainerAppProbeTcpSocket
### Properties
* **host**: string: Optional: Host name to connect to, defaults to the pod IP.
* **port**: int (Required): Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.

## ContainerAppProperties
### Properties
* **configuration**: [Configuration](#configuration): Non versioned Container App configuration properties.
* **customDomainVerificationId**: string (ReadOnly): Id used to verify domain name ownership
* **environmentId**: string: Resource ID of environment.
* **eventStreamEndpoint**: string (ReadOnly): The endpoint of the eventstream of the container app.
* **latestReadyRevisionName**: string (ReadOnly): Name of the latest ready revision of the Container App.
* **latestRevisionFqdn**: string (ReadOnly): Fully Qualified Domain Name of the latest revision of the Container App.
* **latestRevisionName**: string (ReadOnly): Name of the latest revision of the Container App.
* **managedEnvironmentId**: string: Deprecated. Resource ID of the Container App's environment.
* **outboundIpAddresses**: string[] (ReadOnly): Outbound IP Addresses for container app.
* **patchingConfiguration**: [ContainerAppPropertiesPatchingConfiguration](#containerapppropertiespatchingconfiguration): Container App auto patch configuration.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the Container App.
* **template**: [Template](#template): Container App versioned application definition.
* **workloadProfileName**: string: Workload profile name to pin for container app execution.

## ContainerAppPropertiesPatchingConfiguration
### Properties
* **patchingMode**: 'Automatic' | 'Disabled' | 'Manual' | string: Patching mode for the container app. Null or default in this field will be interpreted as Automatic by RP. Automatic mode will automatically apply available patches. Manual mode will require the user to manually apply patches. Disabled mode will stop patch detection and auto patching.

## ContainerAppsBuildConfiguration
### Properties
* **baseOs**: string (ReadOnly): Base OS used to build and run the app.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[] (ReadOnly): List of environment variables to be passed to the build, secrets should not be used in environment variable.
* **platform**: string (ReadOnly): Platform to be used to build and run the app.
* **platformVersion**: string (ReadOnly): Platform version to be used to build and run the app.
* **preBuildSteps**: [PreBuildStep](#prebuildstep)[] (ReadOnly): List of steps to perform before the build.

## ContainerAppsBuildProperties
### Properties
* **buildStatus**: 'Canceled' | 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly): Status of the build once it has been provisioned.
* **configuration**: [ContainerAppsBuildConfiguration](#containerappsbuildconfiguration) (ReadOnly): Configuration of the build.
* **destinationContainerRegistry**: [ContainerRegistryWithCustomImage](#containerregistrywithcustomimage) (ReadOnly): Container registry that the final image will be uploaded to.
* **logStreamEndpoint**: string (ReadOnly): Endpoint from which the build logs can be streamed.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Build provisioning state.

## ContainerAppSecret
### Properties
* **identity**: string (ReadOnly): Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
* **keyVaultUrl**: string (ReadOnly): Azure Key Vault URL pointing to the secret referenced by the container app.
* **name**: string (ReadOnly): Secret Name.
* **value**: string {sensitive} (ReadOnly): Secret Value.

## ContainerRegistry
### Properties
* **containerRegistryServer**: string (Required): Login server of the container registry.
* **identityResourceId**: string (Required): Resource ID of the managed identity.

## ContainerRegistryWithCustomImage
### Properties
* **image**: string: Full name that the final image should be uploaded as, including both image name and tag.
* **server**: string (Required): Login server of the container registry that the final image should be uploaded to. Builder resource needs to have this container registry defined along with an identity to use to access it.

## ContainerResources
### Properties
* **cpu**: int: Required CPU in cores, e.g. 0.5
* **ephemeralStorage**: string (ReadOnly): Ephemeral Storage, e.g. "1Gi"
* **memory**: string: Required memory, e.g. "250Mb"

## CookieExpiration
### Properties
* **convention**: 'FixedTime' | 'IdentityProviderDerived': The convention used when determining the session cookie's expiration.
* **timeToExpiration**: string: The time after the request is made when the session cookie should expire.

## CorsPolicy
### Properties
* **allowCredentials**: bool: Specifies whether the resource allows credentials
* **allowedHeaders**: string[]: Specifies the content for the access-control-allow-headers header
* **allowedMethods**: string[]: Specifies the content for the access-control-allow-methods header
* **allowedOrigins**: string[] (Required): Specifies the content for the access-control-allow-origins header
* **exposeHeaders**: string[]: Specifies the content for the access-control-expose-headers header
* **maxAge**: int: Specifies the content for the access-control-max-age header

## CustomContainerTemplate
### Properties
* **containers**: [SessionContainer](#sessioncontainer)[]: List of container definitions for the sessions of the session pool.
* **ingress**: [SessionIngress](#sessioningress): Session pool ingress configuration.
* **registryCredentials**: [SessionRegistryCredentials](#sessionregistrycredentials): Private container registry credentials for containers used by the sessions of the session pool.

## CustomDomain
### Properties
* **bindingType**: 'Disabled' | 'SniEnabled' | string: Custom Domain binding type.
* **certificateId**: string: Resource Id of the Certificate to be bound to this hostname. Must exist in the Managed Environment.
* **name**: string (Required): Hostname.

## CustomDomainConfiguration
### Properties
* **certificateKeyVaultProperties**: [CertificateKeyVaultProperties](#certificatekeyvaultproperties): Certificate stored in Azure Key Vault.
* **certificatePassword**: string {sensitive}: Certificate password
* **certificateValue**: any: PFX or PEM blob
* **customDomainVerificationId**: string (ReadOnly): Id used to verify domain name ownership
* **dnsSuffix**: string: Dns suffix for the environment domain
* **expirationDate**: string (ReadOnly): Certificate expiration date.
* **subjectName**: string (ReadOnly): Subject name of the certificate.
* **thumbprint**: string (ReadOnly): Certificate thumbprint.

## CustomHostnameAnalysisResult
### Properties
* **alternateCNameRecords**: string[]: Alternate CName records visible for this hostname.
* **alternateTxtRecords**: string[]: Alternate TXT records visible for this hostname.
* **aRecords**: string[]: A records visible for this hostname.
* **cNameRecords**: string[]: CName records visible for this hostname.
* **conflictingContainerAppResourceId**: string (ReadOnly): Name of the conflicting Container App on the Managed Environment if it's within the same subscription.
* **conflictWithEnvironmentCustomDomain**: bool (ReadOnly): <code>true</code> if there is a conflict on the Container App's managed environment level custom domain; otherwise, <code>false</code>.
* **customDomainVerificationFailureInfo**: [CustomHostnameAnalysisResultCustomDomainVerificationFailureInfo](#customhostnameanalysisresultcustomdomainverificationfailureinfo) (ReadOnly): Raw failure information if DNS verification fails.
* **customDomainVerificationTest**: 'Failed' | 'Passed' | 'Skipped' (ReadOnly): DNS verification test result.
* **hasConflictOnManagedEnvironment**: bool (ReadOnly): <code>true</code> if there is a conflict on the Container App's managed environment; otherwise, <code>false</code>.
* **hostName**: string (ReadOnly): Host name that was analyzed
* **isHostnameAlreadyVerified**: bool (ReadOnly): <code>true</code> if hostname is already verified; otherwise, <code>false</code>.
* **txtRecords**: string[]: TXT records visible for this hostname.

## CustomHostnameAnalysisResultCustomDomainVerificationFailureInfo
### Properties
* **code**: string (ReadOnly): Standardized string to programmatically identify the error.
* **details**: [CustomHostnameAnalysisResultCustomDomainVerificationFailureInfoDetailsItem](#customhostnameanalysisresultcustomdomainverificationfailureinfodetailsitem)[]: Details or the error
* **message**: string (ReadOnly): Detailed error description and debugging information.
* **target**: string (ReadOnly): Detailed error description and debugging information.

## CustomHostnameAnalysisResultCustomDomainVerificationFailureInfoDetailsItem
### Properties
* **code**: string (ReadOnly): Standardized string to programmatically identify the error.
* **message**: string (ReadOnly): Detailed error description and debugging information.
* **target**: string (ReadOnly): Detailed error description and debugging information.

## CustomOpenIdConnectProvider
### Properties
* **enabled**: bool: <code>false</code> if the custom Open ID provider provider should not be enabled; otherwise, <code>true</code>.
* **login**: [OpenIdConnectLogin](#openidconnectlogin): The configuration settings of the login flow of the custom Open ID Connect provider.
* **registration**: [OpenIdConnectRegistration](#openidconnectregistration): The configuration settings of the app registration for the custom Open ID Connect provider.

## CustomScaleRule
### Properties
* **auth**: [ScaleRuleAuth](#scaleruleauth)[]: Authentication secrets for the custom scale rule.
* **identity**: string: The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
* **metadata**: [CustomScaleRuleMetadata](#customscalerulemetadata): Metadata properties to describe custom scale rule.
* **type**: string: Type of the custom scale rule
eg: azure-servicebus, redis etc.

## CustomScaleRuleMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dapr
### Properties
* **appId**: string: Dapr application identifier
* **appPort**: int: Tells Dapr which port your application is listening on
* **appProtocol**: 'grpc' | 'http' | string: Tells Dapr which protocol your application is using. Valid options are http and grpc. Default is http
* **enableApiLogging**: bool: Enables API logging for the Dapr sidecar
* **enabled**: bool: Boolean indicating if the Dapr side car is enabled
* **httpMaxRequestSize**: int: Increasing max size of request body http and grpc servers parameter in MB to handle uploading of big files. Default is 4 MB.
* **httpReadBufferSize**: int: Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
* **logLevel**: 'debug' | 'error' | 'info' | 'warn' | string: Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.

## DaprComponentProperties
### Properties
* **componentType**: string: Component type
* **ignoreErrors**: bool: Boolean describing if the component errors are ignores
* **initTimeout**: string: Initialization timeout
* **metadata**: [DaprMetadata](#daprmetadata)[]: Component metadata
* **scopes**: string[]: Names of container apps that can use this Dapr component
* **secrets**: [Secret](#secret)[]: Collection of secrets used by a Dapr component
* **secretStoreComponent**: string: Name of a Dapr component to retrieve component secrets from
* **serviceComponentBind**: [DaprComponentServiceBinding](#daprcomponentservicebinding)[]: List of container app services that are bound to the Dapr component
* **version**: string: Component version

## DaprComponentResiliencyPolicyCircuitBreakerPolicyConfiguration
### Properties
* **consecutiveErrors**: int: The number of consecutive errors before the circuit is opened.
* **intervalInSeconds**: int: The optional interval in seconds after which the error count resets to 0. An interval of 0 will never reset. If not specified, the timeoutInSeconds value will be used.
* **timeoutInSeconds**: int: The interval in seconds until a retry attempt is made after the circuit is opened.

## DaprComponentResiliencyPolicyConfiguration
### Properties
* **circuitBreakerPolicy**: [DaprComponentResiliencyPolicyCircuitBreakerPolicyConfiguration](#daprcomponentresiliencypolicycircuitbreakerpolicyconfiguration): The optional circuit breaker policy configuration
* **httpRetryPolicy**: [DaprComponentResiliencyPolicyHttpRetryPolicyConfiguration](#daprcomponentresiliencypolicyhttpretrypolicyconfiguration): The optional HTTP retry policy configuration
* **timeoutPolicy**: [DaprComponentResiliencyPolicyTimeoutPolicyConfiguration](#daprcomponentresiliencypolicytimeoutpolicyconfiguration): The optional timeout policy configuration

## DaprComponentResiliencyPolicyHttpRetryBackOffConfiguration
### Properties
* **initialDelayInMilliseconds**: int: The optional initial delay in milliseconds before an operation is retried
* **maxIntervalInMilliseconds**: int: The optional maximum time interval in milliseconds between retry attempts

## DaprComponentResiliencyPolicyHttpRetryPolicyConfiguration
### Properties
* **maxRetries**: int: The optional maximum number of retries
* **retryBackOff**: [DaprComponentResiliencyPolicyHttpRetryBackOffConfiguration](#daprcomponentresiliencypolicyhttpretrybackoffconfiguration): The optional retry backoff configuration

## DaprComponentResiliencyPolicyProperties
### Properties
* **inboundPolicy**: [DaprComponentResiliencyPolicyConfiguration](#daprcomponentresiliencypolicyconfiguration): The optional inbound component resiliency policy configuration
* **outboundPolicy**: [DaprComponentResiliencyPolicyConfiguration](#daprcomponentresiliencypolicyconfiguration): The optional outbound component resiliency policy configuration

## DaprComponentResiliencyPolicyTimeoutPolicyConfiguration
### Properties
* **responseTimeoutInSeconds**: int: The optional response timeout in seconds

## DaprComponentServiceBinding
### Properties
* **metadata**: [DaprServiceBindMetadata](#daprservicebindmetadata): Service bind metadata
* **name**: string: Name of the service bind
* **serviceId**: string: Resource id of the target service

## DaprConfiguration
### Properties
* **version**: string (ReadOnly): The version of Dapr

## DaprMetadata
### Properties
* **name**: string: Metadata property name.
* **secretRef**: string: Name of the Dapr Component secret from which to pull the metadata property value.
* **value**: string: Metadata property value.

## DaprSecret
### Properties
* **name**: string (ReadOnly): Secret Name.
* **value**: string {sensitive} (ReadOnly): Secret Value.

## DaprSecretsCollection
### Properties
* **value**: [DaprSecret](#daprsecret)[] (Required): Collection of secrets used by a Dapr component

## DaprSecretsCollection
### Properties
* **value**: [DaprSecret](#daprsecret)[] (Required): Collection of secrets used by a Dapr component

## DaprServiceBindMetadata
### Properties
* **name**: string: Service bind metadata property name.
* **value**: string: Service bind metadata property value.

## DaprSubscriptionBulkSubscribeOptions
### Properties
* **enabled**: bool: Enable bulk subscription
* **maxAwaitDurationMs**: int: Maximum duration in milliseconds to wait before a bulk message is sent to the app.
* **maxMessagesCount**: int: Maximum number of messages to deliver in a bulk message.

## DaprSubscriptionProperties
### Properties
* **bulkSubscribe**: [DaprSubscriptionBulkSubscribeOptions](#daprsubscriptionbulksubscribeoptions): Bulk subscription options
* **deadLetterTopic**: string: Deadletter topic name
* **metadata**: [DaprSubscriptionPropertiesMetadata](#daprsubscriptionpropertiesmetadata): Subscription metadata
* **pubsubName**: string: Dapr PubSub component name
* **routes**: [DaprSubscriptionRoutes](#daprsubscriptionroutes): Subscription routes
* **scopes**: string[]: Application scopes to restrict the subscription to specific apps.
* **topic**: string: Topic name

## DaprSubscriptionPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DaprSubscriptionRouteRule
### Properties
* **match**: string: The optional CEL expression used to match the event. If the match is not specified, then the route is considered the default. The rules are tested in the order specified, so they should be define from most-to-least specific. The default route should appear last in the list.
* **path**: string: The path for events that match this rule

## DaprSubscriptionRoutes
### Properties
* **default**: string: The default path to deliver events that do not match any of the rules.
* **rules**: [DaprSubscriptionRouteRule](#daprsubscriptionrouterule)[]: The list of Dapr PubSub Event Subscription Route Rules.

## DataDogConfiguration
### Properties
* **key**: string {sensitive}: The data dog api key
* **site**: string: The data dog site

## DefaultAuthorizationPolicy
### Properties
* **allowedApplications**: string[]: The configuration settings of the Azure Active Directory allowed applications.
* **allowedPrincipals**: [AllowedPrincipals](#allowedprincipals): The configuration settings of the Azure Active Directory allowed principals.

## DestinationsConfiguration
### Properties
* **dataDogConfiguration**: [DataDogConfiguration](#datadogconfiguration): Open telemetry datadog destination configuration
* **otlpConfigurations**: [OtlpConfiguration](#otlpconfiguration)[]: Open telemetry otlp configurations

## DiagnosticDataProviderMetadata
### Properties
* **propertyBag**: [DiagnosticDataProviderMetadataPropertyBagItem](#diagnosticdataprovidermetadatapropertybagitem)[]: Collection of properties
* **providerName**: string: Name of data provider

## DiagnosticDataProviderMetadataPropertyBagItem
### Properties
* **name**: string: Property name
* **value**: string: Property value

## DiagnosticDataTableResponseColumn
### Properties
* **columnName**: string: Column name
* **columnType**: string: Column type
* **dataType**: string: Data type of the column

## DiagnosticDataTableResponseObject
### Properties
* **columns**: [DiagnosticDataTableResponseColumn](#diagnosticdatatableresponsecolumn)[]: Columns in the table
* **rows**: any[]: Rows in the table
* **tableName**: string: Table name

## DiagnosticRendering
### Properties
* **description**: string: Description of the table
* **isVisible**: bool: Flag if the table should be rendered
* **title**: string: Title of the table
* **type**: int: Rendering type

## DiagnosticsDataApiResponse
### Properties
* **renderingProperties**: [DiagnosticRendering](#diagnosticrendering): Details of the table response
* **table**: [DiagnosticDataTableResponseObject](#diagnosticdatatableresponseobject): Table response

## DiagnosticsDefinition
### Properties
* **analysisTypes**: string[]: List of analysis types
* **author**: string (ReadOnly): Authors' names of the detector
* **category**: string (ReadOnly): Category of the detector
* **description**: string (ReadOnly): Details of the diagnostics info
* **id**: string (ReadOnly): Unique detector name
* **name**: string (ReadOnly): Display Name of the detector
* **score**: int (ReadOnly): Authors' names of the detector
* **supportTopicList**: [DiagnosticSupportTopic](#diagnosticsupporttopic)[]: List of support topics
* **type**: string (ReadOnly): Authors' names of the detector

## DiagnosticsProperties
### Properties
* **dataProviderMetadata**: [DiagnosticDataProviderMetadata](#diagnosticdataprovidermetadata): List of data providers' metadata.
* **dataset**: [DiagnosticsDataApiResponse](#diagnosticsdataapiresponse)[]: Set of data collections associated with the response.
* **metadata**: [DiagnosticsDefinition](#diagnosticsdefinition): Metadata of the diagnostics response.
* **status**: [DiagnosticsStatus](#diagnosticsstatus): Status of the diagnostics response.

## DiagnosticsStatus
### Properties
* **message**: string: Diagnostic message
* **statusId**: int: Status

## DiagnosticSupportTopic
### Properties
* **id**: string (ReadOnly): Unique topic identifier
* **pesId**: string (ReadOnly): PES identifier

## DotNetComponentConfigurationProperty
### Properties
* **propertyName**: string: The name of the property
* **value**: string: The value of the property

## DotNetComponentProperties
### Properties
* **componentType**: 'AspireDashboard' | string: Type of the .NET Component.
* **configurations**: [DotNetComponentConfigurationProperty](#dotnetcomponentconfigurationproperty)[]: List of .NET Components configuration properties
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the .NET Component.
* **serviceBinds**: [DotNetComponentServiceBind](#dotnetcomponentservicebind)[]: List of .NET Components that are bound to the .NET component

## DotNetComponentServiceBind
### Properties
* **name**: string: Name of the service bind
* **serviceId**: string: Resource id of the target service

## DynamicPoolConfiguration
### Properties
* **cooldownPeriodInSeconds**: int: The cooldown period of a session in seconds.
* **executionType**: 'Timed' | string: The execution type of the session pool.

## EncryptionSettings
### Properties
* **containerAppAuthEncryptionSecretName**: string: The secret name which is referenced for EncryptionKey.
* **containerAppAuthSigningSecretName**: string: The secret name which is referenced for SigningKey.

## EnvironmentVar
### Properties
* **name**: string: Environment variable name.
* **secretRef**: string: Name of the Container App secret from which to pull the environment variable value.
* **value**: string: Non-secret environment variable value.

## EnvironmentVariable
### Properties
* **name**: string (Required): Environment variable name.
* **value**: string (Required): Environment variable value.

## ErrorEntity
### Properties
* **code**: string: Basic error code.
* **details**: [ErrorEntity](#errorentity)[]: Error Details.
* **extendedCode**: string: Type of error.
* **innerErrors**: [ErrorEntity](#errorentity)[]: Inner errors.
* **message**: string: Any details of the error.
* **messageTemplate**: string: Message template.
* **parameters**: string[]: Parameters for the template.
* **target**: string: The error target.

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'CustomLocation' | string: The type of the extended location.

## Facebook
### Properties
* **enabled**: bool: <code>false</code> if the Facebook provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **graphApiVersion**: string: The version of the Facebook api to be used while logging in.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow.
* **registration**: [AppRegistration](#appregistration): The configuration settings of the app registration for the Facebook provider.

## ForwardProxy
### Properties
* **convention**: 'Custom' | 'NoProxy' | 'Standard': The convention used to determine the url of the request made.
* **customHostHeaderName**: string: The name of the header containing the host of the request.
* **customProtoHeaderName**: string: The name of the header containing the scheme of the request.

## GitHub
### Properties
* **enabled**: bool: <code>false</code> if the GitHub provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow.
* **registration**: [ClientRegistration](#clientregistration): The configuration settings of the app registration for the GitHub provider.

## GithubActionConfiguration
### Properties
* **azureCredentials**: [AzureCredentials](#azurecredentials): AzureCredentials configurations.
* **buildEnvironmentVariables**: [EnvironmentVariable](#environmentvariable)[]: List of environment variables to be passed to the build.
* **contextPath**: string: Context path
* **githubPersonalAccessToken**: string {sensitive} (WriteOnly): One time Github PAT to configure github environment
* **image**: string: Image name
* **os**: string: Operation system
* **publishType**: string: Code or Image
* **registryInfo**: [RegistryInfo](#registryinfo): Registry configurations.
* **runtimeStack**: string: Runtime stack
* **runtimeVersion**: string: Runtime version

## GlobalValidation
### Properties
* **excludedPaths**: string[]: The paths for which unauthenticated flow would not be redirected to the login page.
* **redirectToProvider**: string: The default authentication provider to use when multiple providers are configured.
This setting is only needed if multiple providers are configured and the unauthenticated client
action is set to "RedirectToLoginPage".
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage' | 'Return401' | 'Return403': The action to take when an unauthenticated client attempts to access the app.

## Google
### Properties
* **enabled**: bool: <code>false</code> if the Google provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow.
* **registration**: [ClientRegistration](#clientregistration): The configuration settings of the app registration for the Google provider.
* **validation**: [AllowedAudiencesValidation](#allowedaudiencesvalidation): The configuration settings of the Azure Active Directory token validation flow.

## Header
### Properties
* **key**: string: The key of otlp configuration header
* **value**: string: The value of otlp configuration header

## HeaderMatch
### Properties
* **header**: string: Name of the header
* **match**: [HeaderMatchMatch](#headermatchmatch): Type of match to perform

## HeaderMatchMatch
### Properties
* **exactMatch**: string: Exact value of the header
* **prefixMatch**: string: Prefix value of the header
* **regexMatch**: string: Regex value of the header
* **suffixMatch**: string: Suffix value of the header

## HttpConnectionPool
### Properties
* **http1MaxPendingRequests**: int: Maximum number of pending http1 requests allowed
* **http2MaxRequests**: int: Maximum number of http2 requests allowed

## HttpGet
### Properties
* **fileName**: string: Name of the file that the request should be saved to.
* **headers**: string[]: List of headers to send with the request.
* **url**: string (Required): URL to make HTTP GET request against.

## HttpRetryPolicy
### Properties
* **matches**: [HttpRetryPolicyMatches](#httpretrypolicymatches): Conditions that must be met for a request to be retried
* **maxRetries**: int: Maximum number of times a request will retry
* **retryBackOff**: [HttpRetryPolicyRetryBackOff](#httpretrypolicyretrybackoff): Settings for retry backoff characteristics

## HttpRetryPolicyMatches
### Properties
* **errors**: string[]: Errors that can trigger a retry
* **headers**: [HeaderMatch](#headermatch)[]: Headers that must be present for a request to be retried
* **httpStatusCodes**: int[]: Additional http status codes that can trigger a retry

## HttpRetryPolicyRetryBackOff
### Properties
* **initialDelayInMilliseconds**: int: Initial delay, in milliseconds, before retrying a request
* **maxIntervalInMilliseconds**: int: Maximum interval, in milliseconds, between retries

## HttpScaleRule
### Properties
* **auth**: [ScaleRuleAuth](#scaleruleauth)[]: Authentication secrets for the custom scale rule.
* **identity**: string: The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
* **metadata**: [HttpScaleRuleMetadata](#httpscalerulemetadata): Metadata properties to describe http scale rule.

## HttpScaleRuleMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HttpSettings
### Properties
* **forwardProxy**: [ForwardProxy](#forwardproxy): The configuration settings of a forward proxy used to make the requests.
* **requireHttps**: bool: <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
* **routes**: [HttpSettingsRoutes](#httpsettingsroutes): The configuration settings of the paths HTTP requests.

## HttpSettingsRoutes
### Properties
* **apiPrefix**: string: The prefix that should precede all the authentication/authorization paths.

## IdentityProviders
### Properties
* **apple**: [Apple](#apple): The configuration settings of the Apple provider.
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory): The configuration settings of the Azure Active directory provider.
* **azureStaticWebApps**: [AzureStaticWebApps](#azurestaticwebapps): The configuration settings of the Azure Static Web Apps provider.
* **customOpenIdConnectProviders**: [IdentityProvidersCustomOpenIdConnectProviders](#identityproviderscustomopenidconnectproviders): The map of the name of the alias of each custom Open ID Connect provider to the
configuration settings of the custom Open ID Connect provider.
* **facebook**: [Facebook](#facebook): The configuration settings of the Facebook provider.
* **gitHub**: [GitHub](#github): The configuration settings of the GitHub provider.
* **google**: [Google](#google): The configuration settings of the Google provider.
* **twitter**: [Twitter](#twitter): The configuration settings of the Twitter provider.

## IdentityProvidersCustomOpenIdConnectProviders
### Properties
### Additional Properties
* **Additional Properties Type**: [CustomOpenIdConnectProvider](#customopenidconnectprovider)

## IdentitySettings
### Properties
* **identity**: string (Required): The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
* **lifecycle**: 'All' | 'Init' | 'Main' | 'None' | string: Use to select the lifecycle stages of a Container App during which the Managed Identity should be available.

## Ingress
### Properties
* **additionalPortMappings**: [IngressPortMapping](#ingressportmapping)[]: Settings to expose additional ports on container app
* **allowInsecure**: bool: Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections
* **clientCertificateMode**: 'accept' | 'ignore' | 'require' | string: Client certificate mode for mTLS authentication. Ignore indicates server drops client certificate on forwarding. Accept indicates server forwards client certificate but does not require a client certificate. Require indicates server requires a client certificate.
* **corsPolicy**: [CorsPolicy](#corspolicy): CORS policy for container app
* **customDomains**: [CustomDomain](#customdomain)[]: custom domain bindings for Container Apps' hostnames.
* **exposedPort**: int: Exposed Port in containers for TCP traffic from ingress
* **external**: bool: Bool indicating if app exposes an external http endpoint
* **fqdn**: string (ReadOnly): Hostname.
* **ipSecurityRestrictions**: [IpSecurityRestrictionRule](#ipsecurityrestrictionrule)[]: Rules to restrict incoming IP address.
* **stickySessions**: [IngressStickySessions](#ingressstickysessions): Sticky Sessions for Single Revision Mode
* **targetPort**: int: Target Port in containers for traffic from ingress
* **targetPortHttpScheme**: 'http' | 'https' | string: Whether an http app listens on http or https
* **traffic**: [TrafficWeight](#trafficweight)[]: Traffic weights for app's revisions
* **transport**: 'auto' | 'http' | 'http2' | 'tcp' | string: Ingress transport protocol

## IngressPortMapping
### Properties
* **exposedPort**: int: Specifies the exposed port for the target port. If not specified, it defaults to target port
* **external**: bool (Required): Specifies whether the app port is accessible outside of the environment
* **targetPort**: int (Required): Specifies the port user's container listens on

## IngressStickySessions
### Properties
* **affinity**: 'none' | 'sticky' | string: Sticky Session Affinity

## InitContainer
### Properties
* **args**: string[]: Container start command arguments.
* **command**: string[]: Container start command.
* **env**: [EnvironmentVar](#environmentvar)[]: Container environment variables.
* **image**: string: Container image tag.
* **imageType**: 'CloudBuild' | 'ContainerImage' | string: The type of the image. Set to CloudBuild to let the system manages the image, where user will not be able to update image through image field. Set to ContainerImage for user provided image.
* **name**: string: Custom container name.
* **resources**: [ContainerResources](#containerresources): Container resource requirements.
* **volumeMounts**: [VolumeMount](#volumemount)[]: Container volume mounts.

## IpSecurityRestrictionRule
### Properties
* **action**: 'Allow' | 'Deny' | string (Required): Allow or Deny rules to determine for incoming IP. Note: Rules can only consist of ALL Allow or ALL Deny
* **description**: string: Describe the IP restriction rule that is being sent to the container-app. This is an optional field.
* **ipAddressRange**: string (Required): CIDR notation to match incoming IP address
* **name**: string (Required): Name for the IP restriction rule.

## JavaComponentConfigurationProperty
### Properties
* **propertyName**: string: The name of the property
* **value**: string: The value of the property

## JavaComponentIngress
### Properties
* **fqdn**: string (ReadOnly): Hostname of the Java Component endpoint

## JavaComponentProperties
* **Discriminator**: componentType

### Base Properties
* **configurations**: [JavaComponentConfigurationProperty](#javacomponentconfigurationproperty)[]: List of Java Components configuration properties
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the Java Component.
* **serviceBinds**: [JavaComponentServiceBind](#javacomponentservicebind)[]: List of Java Components that are bound to the Java component

### NacosComponent
#### Properties
* **componentType**: 'Nacos' (Required): Type of the Java Component.
* **ingress**: [JavaComponentIngress](#javacomponentingress): Java Component Ingress configurations.

### SpringBootAdminComponent
#### Properties
* **componentType**: 'SpringBootAdmin' (Required): Type of the Java Component.
* **ingress**: [JavaComponentIngress](#javacomponentingress): Java Component Ingress configurations.

### SpringCloudConfigComponent
#### Properties
* **componentType**: 'SpringCloudConfig' (Required): Type of the Java Component.

### SpringCloudEurekaComponent
#### Properties
* **componentType**: 'SpringCloudEureka' (Required): Type of the Java Component.
* **ingress**: [JavaComponentIngress](#javacomponentingress): Java Component Ingress configurations.


## JavaComponentServiceBind
### Properties
* **name**: string: Name of the service bind
* **serviceId**: string: Resource id of the target service

## JobConfiguration
### Properties
* **eventTriggerConfig**: [JobConfigurationEventTriggerConfig](#jobconfigurationeventtriggerconfig): Trigger configuration of an event driven job.
* **identitySettings**: [IdentitySettings](#identitysettings)[]: Optional settings for Managed Identities that are assigned to the Container App Job. If a Managed Identity is not specified here, default settings will be used.
* **manualTriggerConfig**: [JobConfigurationManualTriggerConfig](#jobconfigurationmanualtriggerconfig): Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
* **registries**: [RegistryCredentials](#registrycredentials)[]: Collection of private container registry credentials used by a Container apps job
* **replicaRetryLimit**: int: Maximum number of retries before failing the job.
* **replicaTimeout**: int (Required): Maximum number of seconds a replica is allowed to run.
* **scheduleTriggerConfig**: [JobConfigurationScheduleTriggerConfig](#jobconfigurationscheduletriggerconfig): Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
* **secrets**: [Secret](#secret)[]: Collection of secrets used by a Container Apps Job
* **triggerType**: 'Event' | 'Manual' | 'Schedule' | string (Required): Trigger type of the job

## JobConfigurationEventTriggerConfig
### Properties
* **parallelism**: int: Number of parallel replicas of a job that can run at a given time.
* **replicaCompletionCount**: int: Minimum number of successful replica completions before overall job completion.
* **scale**: [JobScale](#jobscale): Scaling configurations for event driven jobs.

## JobConfigurationManualTriggerConfig
### Properties
* **parallelism**: int: Number of parallel replicas of a job that can run at a given time.
* **replicaCompletionCount**: int: Minimum number of successful replica completions before overall job completion.

## JobConfigurationScheduleTriggerConfig
### Properties
* **cronExpression**: string (Required): Cron formatted repeating schedule ("* * * * *") of a Cron Job.
* **parallelism**: int: Number of parallel replicas of a job that can run at a given time.
* **replicaCompletionCount**: int: Minimum number of successful replica completions before overall job completion.

## JobProperties
### Properties
* **configuration**: [JobConfiguration](#jobconfiguration): Container Apps Job configuration properties.
* **environmentId**: string: Resource ID of environment.
* **eventStreamEndpoint**: string (ReadOnly): The endpoint of the eventstream of the container apps job.
* **outboundIpAddresses**: string[] (ReadOnly): Outbound IP Addresses of a container apps job.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the Container Apps Job.
* **template**: [JobTemplate](#jobtemplate): Container Apps job definition.
* **workloadProfileName**: string: Workload profile name to pin for container apps job execution.

## JobScale
### Properties
* **maxExecutions**: int: Maximum number of job executions that are created for a trigger, default 100.
* **minExecutions**: int: Minimum number of job executions that are created for a trigger, default 0
* **pollingInterval**: int: Interval to check each event source in seconds. Defaults to 30s
* **rules**: [JobScaleRule](#jobscalerule)[]: Scaling rules.

## JobScaleRule
### Properties
* **auth**: [ScaleRuleAuth](#scaleruleauth)[]: Authentication secrets for the scale rule.
* **identity**: string: The resource ID of a user-assigned managed identity that is assigned to the job, or 'system' for system-assigned identity.
* **metadata**: any: Metadata properties to describe the scale rule.
* **name**: string: Scale Rule Name
* **type**: string: Type of the scale rule
eg: azure-servicebus, redis etc.

## JobSecretsCollection
### Properties
* **value**: [Secret](#secret)[] (Required): Collection of resources.

## JobTemplate
### Properties
* **containers**: [Container](#container)[]: List of container definitions for the Container App.
* **initContainers**: [InitContainer](#initcontainer)[]: List of specialized containers that run before app containers.
* **volumes**: [Volume](#volume)[]: List of volume definitions for the Container App.

## JwtClaimChecks
### Properties
* **allowedClientApplications**: string[]: The list of the allowed client applications.
* **allowedGroups**: string[]: The list of the allowed groups.

## KedaConfiguration
### Properties
* **version**: string (ReadOnly): The version of Keda

## LogAnalyticsConfiguration
### Properties
* **customerId**: string: Log analytics customer id
* **dynamicJsonColumns**: bool: Boolean indicating whether to parse json string log into dynamic json columns
* **sharedKey**: string {sensitive} (WriteOnly): Log analytics customer key

## LoggerSetting
### Properties
* **level**: 'debug' | 'error' | 'info' | 'off' | 'trace' | 'warn' | string (Required): The specified logger's log level.
* **logger**: string (Required): Logger name.

## Login
### Properties
* **allowedExternalRedirectUrls**: string[]: External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
This is an advanced setting typically only needed by Windows Store application backends.
Note that URLs within the current domain are always implicitly allowed.
* **cookieExpiration**: [CookieExpiration](#cookieexpiration): The configuration settings of the session cookie's expiration.
* **nonce**: [Nonce](#nonce): The configuration settings of the nonce used in the login flow.
* **preserveUrlFragmentsForLogins**: bool: <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
* **routes**: [LoginRoutes](#loginroutes): The routes that specify the endpoints used for login and logout requests.
* **tokenStore**: [TokenStore](#tokenstore): The configuration settings of the token store.

## LoginRoutes
### Properties
* **logoutEndpoint**: string: The endpoint at which a logout request should be made.

## LoginScopes
### Properties
* **scopes**: string[]: A list of the scopes that should be requested while authenticating.

## LogsConfiguration
### Properties
* **destinations**: string[]: Open telemetry logs destinations

## ManagedCertificateProperties
### Properties
* **domainControlValidation**: 'CNAME' | 'HTTP' | 'TXT' | string: Selected type of domain control validation for managed certificates.
* **error**: string (ReadOnly): Any error occurred during the certificate provision.
* **provisioningState**: 'Canceled' | 'DeleteFailed' | 'Failed' | 'Pending' | 'Succeeded' | string (ReadOnly): Provisioning state of the certificate.
* **subjectName**: string: Subject name of the certificate.
* **validationToken**: string (ReadOnly): A TXT token used for DNS TXT domain control validation when issuing this type of managed certificates.

## ManagedEnvironmentProperties
### Properties
* **appInsightsConfiguration**: [AppInsightsConfiguration](#appinsightsconfiguration): Environment level Application Insights configuration
* **appLogsConfiguration**: [AppLogsConfiguration](#applogsconfiguration): Cluster configuration which enables the log daemon to export
app logs to a destination. Currently only "log-analytics" is
supported
* **customDomainConfiguration**: [CustomDomainConfiguration](#customdomainconfiguration): Custom domain configuration for the environment
* **daprAIConnectionString**: string {sensitive}: Application Insights connection string used by Dapr to export Service to Service communication telemetry
* **daprAIInstrumentationKey**: string {sensitive}: Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry
* **daprConfiguration**: [DaprConfiguration](#daprconfiguration): The configuration of Dapr component.
* **defaultDomain**: string (ReadOnly): Default Domain Name for the cluster
* **deploymentErrors**: string (ReadOnly): Any errors that occurred during deployment or deployment validation
* **eventStreamEndpoint**: string (ReadOnly): The endpoint of the eventstream of the Environment.
* **infrastructureResourceGroup**: string: Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. If a subnet ID is provided, this resource group will be created in the same subscription as the subnet.
* **kedaConfiguration**: [KedaConfiguration](#kedaconfiguration): The configuration of Keda component.
* **openTelemetryConfiguration**: [OpenTelemetryConfiguration](#opentelemetryconfiguration): Environment Open Telemetry configuration
* **peerAuthentication**: [ManagedEnvironmentPropertiesPeerAuthentication](#managedenvironmentpropertiespeerauthentication): Peer authentication settings for the Managed Environment
* **peerTrafficConfiguration**: [ManagedEnvironmentPropertiesPeerTrafficConfiguration](#managedenvironmentpropertiespeertrafficconfiguration): Peer traffic settings for the Managed Environment
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Private endpoint connections to the resource.
* **provisioningState**: 'Canceled' | 'Failed' | 'InfrastructureSetupComplete' | 'InfrastructureSetupInProgress' | 'InitializationInProgress' | 'ScheduledForDelete' | 'Succeeded' | 'UpgradeFailed' | 'UpgradeRequested' | 'Waiting' | string (ReadOnly): Provisioning state of the Environment.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Property to allow or block all public traffic. Allowed Values: 'Enabled', 'Disabled'.
* **staticIp**: string (ReadOnly): Static IP of the Environment
* **vnetConfiguration**: [VnetConfiguration](#vnetconfiguration): Vnet configuration for the environment
* **workloadProfiles**: [WorkloadProfile](#workloadprofile)[]: Workload profiles configured for the Managed Environment.
* **zoneRedundant**: bool: Whether or not this Managed Environment is zone-redundant.

## ManagedEnvironmentPropertiesPeerAuthentication
### Properties
* **mtls**: [Mtls](#mtls): Mutual TLS authentication settings for the Managed Environment

## ManagedEnvironmentPropertiesPeerTrafficConfiguration
### Properties
* **encryption**: [ManagedEnvironmentPropertiesPeerTrafficConfigurationEncryption](#managedenvironmentpropertiespeertrafficconfigurationencryption): Peer traffic encryption settings for the Managed Environment

## ManagedEnvironmentPropertiesPeerTrafficConfigurationEncryption
### Properties
* **enabled**: bool: Boolean indicating whether the peer traffic encryption is enabled

## ManagedEnvironmentStorageProperties
### Properties
* **azureFile**: [AzureFileProperties](#azurefileproperties): Azure file properties
* **nfsAzureFile**: [NfsAzureFileProperties](#nfsazurefileproperties): NFS Azure file properties

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MetricsConfiguration
### Properties
* **destinations**: string[]: Open telemetry metrics destinations

## Mtls
### Properties
* **enabled**: bool: Boolean indicating whether the mutual TLS authentication is enabled

## NfsAzureFileProperties
### Properties
* **accessMode**: 'ReadOnly' | 'ReadWrite' | string: Access mode for storage
* **server**: string: Server for NFS azure file.
* **shareName**: string: NFS Azure file share name.

## Nonce
### Properties
* **nonceExpirationInterval**: string: The time after the request is made when the nonce should expire.
* **validateNonce**: bool: <code>false</code> if the nonce should not be validated while completing the login flow; otherwise, <code>true</code>.

## OpenIdConnectClientCredential
### Properties
* **clientSecretSettingName**: string: The app setting that contains the client secret for the custom Open ID Connect provider.
* **method**: 'ClientSecretPost': The method that should be used to authenticate the user.

## OpenIdConnectConfig
### Properties
* **authorizationEndpoint**: string: The endpoint to be used to make an authorization request.
* **certificationUri**: string: The endpoint that provides the keys necessary to validate the token.
* **issuer**: string: The endpoint that issues the token.
* **tokenEndpoint**: string: The endpoint to be used to request a token.
* **wellKnownOpenIdConfiguration**: string: The endpoint that contains all the configuration endpoints for the provider.

## OpenIdConnectLogin
### Properties
* **nameClaimType**: string: The name of the claim that contains the users name.
* **scopes**: string[]: A list of the scopes that should be requested while authenticating.

## OpenIdConnectRegistration
### Properties
* **clientCredential**: [OpenIdConnectClientCredential](#openidconnectclientcredential): The authentication credentials of the custom Open ID Connect provider.
* **clientId**: string: The client id of the custom Open ID Connect provider.
* **openIdConnectConfiguration**: [OpenIdConnectConfig](#openidconnectconfig): The configuration settings of the endpoints used for the custom Open ID Connect provider.

## OpenTelemetryConfiguration
### Properties
* **destinationsConfiguration**: [DestinationsConfiguration](#destinationsconfiguration): Open telemetry destinations configuration
* **logsConfiguration**: [LogsConfiguration](#logsconfiguration): Open telemetry logs configuration
* **metricsConfiguration**: [MetricsConfiguration](#metricsconfiguration): Open telemetry metrics configuration
* **tracesConfiguration**: [TracesConfiguration](#tracesconfiguration): Open telemetry trace configuration

## OtlpConfiguration
### Properties
* **endpoint**: string: The endpoint of otlp configuration
* **headers**: [Header](#header)[]: Headers of otlp configurations
* **insecure**: bool: Boolean indicating if otlp configuration is insecure
* **name**: string: The name of otlp configuration

## PatchDetails
### Properties
* **detectionStatus**: 'Failed' | 'RegistryLoginFailed' | 'Succeeded' | string (Required, ReadOnly): The status of the patch detection.
* **lastDetectionTime**: string (Required, ReadOnly): The UTC timestamp that describes the latest detection was done.
* **newImageName**: string (ReadOnly): The name of the new image created by the patch.
* **newLayer**: [PatchDetailsNewLayer](#patchdetailsnewlayer) (ReadOnly): New layer update details in the target image.
* **oldLayer**: [PatchDetailsOldLayer](#patchdetailsoldlayer) (ReadOnly): The old layer details in the target image.
* **patchType**: 'FrameworkAndOSSecurity' | 'FrameworkSecurity' | 'OSSecurity' | 'Other' | string (ReadOnly): The type for the patch.
* **targetContainerName**: string (Required, ReadOnly): The name of the target container for the patch.
* **targetImage**: string (Required, ReadOnly): The name of the target image for the patch.

## PatchDetailsNewLayer
### Properties
* **frameworkAndVersion**: string: The framework and its version in the new run image for the target image.
* **name**: string: The details of the new layer for the target image.
* **osAndVersion**: string: The OS name and its version in the new run image for the target image.

## PatchDetailsOldLayer
### Properties
* **frameworkAndVersion**: string: The framework and its version in the old run image for the target image.
* **name**: string: The details of the old layer for the target image.
* **osAndVersion**: string: The OS name and its version in the old run image for the target image.

## PatchProperties
### Properties
* **createdAt**: string (ReadOnly): The UTC timestamp that describes when the patch object was created.
* **lastModifiedAt**: string (ReadOnly): The UTC timestamp that describes when the patch object was last updated.
* **patchApplyStatus**: 'Canceled' | 'CreatingRevision' | 'ImagePushPullFailed' | 'ManuallySkipped' | 'NotStarted' | 'RebaseFailed' | 'RebaseInProgress' | 'RevisionCreationFailed' | 'Succeeded' | string (ReadOnly): The status of the patch operation.
* **patchDetails**: [PatchDetails](#patchdetails)[] (ReadOnly): Detailed info describes the patch operation for the target container app.
* **targetContainerAppId**: string: The Azure resource id of the target container app for the patch.
* **targetEnvironmentId**: string: The Azure resource id of the target environment for the patch.
* **targetRevisionId**: string: The Azure resource id of the target revision for the patch.

## PreBuildStep
### Properties
* **description**: string: Description of the pre-build step.
* **httpGet**: [HttpGet](#httpget): Http get request to send before the build.
* **scripts**: string[]: List of custom commands to run.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | 'Waiting' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## QueueScaleRule
### Properties
* **accountName**: string: Storage account name. required if using managed identity to authenticate
* **auth**: [ScaleRuleAuth](#scaleruleauth)[]: Authentication secrets for the queue scale rule.
* **identity**: string: The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
* **queueLength**: int: Queue length.
* **queueName**: string: Queue name.

## RegistryCredentials
### Properties
* **identity**: string: A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system'
* **passwordSecretRef**: string: The name of the Secret that contains the registry login password
* **server**: string: Container Registry Server
* **username**: string: Container Registry Username

## RegistryInfo
### Properties
* **registryPassword**: string {sensitive} (WriteOnly): registry secret.
* **registryUrl**: string: registry server Url.
* **registryUserName**: string: registry username.

## ReplicaContainer
### Properties
* **containerId**: string: The Id of the Container
* **execEndpoint**: string (ReadOnly): Container exec endpoint
* **logStreamEndpoint**: string (ReadOnly): Log Stream endpoint
* **name**: string: The Name of the Container
* **ready**: bool: The container ready status
* **restartCount**: int: The container restart count
* **runningState**: 'Running' | 'Terminated' | 'Waiting' | string (ReadOnly): Current running state of the container
* **runningStateDetails**: string (ReadOnly): The details of container current running state
* **started**: bool: The container start status

## ReplicaProperties
### Properties
* **containers**: [ReplicaContainer](#replicacontainer)[]: The containers collection under a replica.
* **createdTime**: string (ReadOnly): Timestamp describing when the pod was created by controller
* **initContainers**: [ReplicaContainer](#replicacontainer)[]: The init containers collection under a replica.
* **runningState**: 'NotRunning' | 'Running' | 'Unknown' | string (ReadOnly): Current running state of the replica
* **runningStateDetails**: string (ReadOnly): The details of replica current running state

## RevisionProperties
### Properties
* **active**: bool (ReadOnly): Boolean describing if the Revision is Active
* **createdTime**: string (ReadOnly): Timestamp describing when the revision was created
by controller
* **fqdn**: string (ReadOnly): Fully qualified domain name of the revision
* **healthState**: 'Healthy' | 'None' | 'Unhealthy' | string (ReadOnly): Current health State of the revision
* **lastActiveTime**: string (ReadOnly): Timestamp describing when the revision was last active. Only meaningful when revision is inactive
* **provisioningError**: string (ReadOnly): Optional Field - Platform Error Message
* **provisioningState**: 'Deprovisioned' | 'Deprovisioning' | 'Failed' | 'Provisioned' | 'Provisioning' | string (ReadOnly): Current provisioning State of the revision
* **replicas**: int (ReadOnly): Number of pods currently running for this revision
* **runningState**: 'Degraded' | 'Failed' | 'Processing' | 'Running' | 'Stopped' | 'Unknown' | string (ReadOnly): Current running state of the revision
* **template**: [Template](#template) (ReadOnly): Container App Revision Template with all possible settings and the
defaults if user did not provide them. The defaults are populated
as they were at the creation time
* **trafficWeight**: int (ReadOnly): Traffic weight assigned to this revision

## Runtime
### Properties
* **dotnet**: [RuntimeDotnet](#runtimedotnet): .NET app configuration
* **java**: [RuntimeJava](#runtimejava): Java app configuration

## RuntimeDotnet
### Properties
* **autoConfigureDataProtection**: bool: Auto configure the ASP.NET Core Data Protection feature

## RuntimeJava
### Properties
* **enableMetrics**: bool: Enable jmx core metrics for the java app
* **javaAgent**: [RuntimeJavaAgent](#runtimejavaagent): Diagnostic capabilities achieved by java agent

## RuntimeJavaAgent
### Properties
* **enabled**: bool: Enable java agent injection for the java app.
* **logging**: [RuntimeJavaAgentLogging](#runtimejavaagentlogging): Capabilities on the java logging scenario.

## RuntimeJavaAgentLogging
### Properties
* **loggerSettings**: [LoggerSetting](#loggersetting)[]: Settings of the logger for the java app.

## Scale
### Properties
* **maxReplicas**: int: Optional. Maximum number of container replicas. Defaults to 10 if not set.
* **minReplicas**: int: Optional. Minimum number of container replicas.
* **rules**: [ScaleRule](#scalerule)[]: Scaling rules.

## ScaleConfiguration
### Properties
* **maxConcurrentSessions**: int: The maximum count of sessions at the same time.
* **readySessionInstances**: int: The minimum count of ready session instances.

## ScaleRule
### Properties
* **azureQueue**: [QueueScaleRule](#queuescalerule): Azure Queue based scaling.
* **custom**: [CustomScaleRule](#customscalerule): Custom scale rule.
* **http**: [HttpScaleRule](#httpscalerule): HTTP requests based scaling.
* **name**: string: Scale Rule Name
* **tcp**: [TcpScaleRule](#tcpscalerule): Tcp requests based scaling.

## ScaleRuleAuth
### Properties
* **secretRef**: string: Name of the secret from which to pull the auth params.
* **triggerParameter**: string: Trigger Parameter that uses the secret

## Secret
### Properties
* **identity**: string: Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
* **keyVaultUrl**: string: Azure Key Vault URL pointing to the secret referenced by the container app.
* **name**: string: Secret Name.
* **value**: string {sensitive} (WriteOnly): Secret Value.

## SecretsCollection
### Properties
* **value**: [ContainerAppSecret](#containerappsecret)[] (Required): Collection of resources.

## SecretVolumeItem
### Properties
* **path**: string: Path to project secret to. If no path is provided, path defaults to name of secret listed in secretRef.
* **secretRef**: string: Name of the Container App secret from which to pull the secret value.

## Service
### Properties
* **type**: string (Required): Dev ContainerApp service type

## ServiceBind
### Properties
* **clientType**: string: Type of the client to be used to connect to the service
* **customizedKeys**: [ServiceBindCustomizedKeys](#servicebindcustomizedkeys): Customized keys for customizing injected values to the app
* **name**: string: Name of the service bind
* **serviceId**: string: Resource id of the target service

## ServiceBindCustomizedKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SessionContainer
### Properties
* **args**: string[]: Container start command arguments.
* **command**: string[]: Container start command.
* **env**: [EnvironmentVar](#environmentvar)[]: Container environment variables.
* **image**: string: Container image tag.
* **name**: string: Custom container name.
* **resources**: [SessionContainerResources](#sessioncontainerresources): Container resource requirements.

## SessionContainerResources
### Properties
* **cpu**: int: Required CPU in cores, e.g. 0.5
* **memory**: string: Required memory, e.g. "250Mb"

## SessionIngress
### Properties
* **targetPort**: int: Target port in containers for traffic from ingress

## SessionNetworkConfiguration
### Properties
* **status**: 'EgressDisabled' | 'EgressEnabled' | string: Network status for the sessions.

## SessionPoolProperties
### Properties
* **containerType**: 'CustomContainer' | 'PythonLTS' | string: The container type of the sessions.
* **customContainerTemplate**: [CustomContainerTemplate](#customcontainertemplate): The custom container configuration if the containerType is CustomContainer.
* **dynamicPoolConfiguration**: [DynamicPoolConfiguration](#dynamicpoolconfiguration): The pool configuration if the poolManagementType is dynamic.
* **environmentId**: string: Resource ID of the session pool's environment.
* **nodeCount**: int (ReadOnly): The number of nodes the session pool is using.
* **poolManagementEndpoint**: string (ReadOnly): The endpoint to manage the pool.
* **poolManagementType**: 'Dynamic' | 'Manual' | string: The pool management type of the session pool.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the session pool.
* **scaleConfiguration**: [ScaleConfiguration](#scaleconfiguration): The scale configuration of the session pool.
* **secrets**: [SessionPoolSecret](#sessionpoolsecret)[]: The secrets of the session pool.
* **sessionNetworkConfiguration**: [SessionNetworkConfiguration](#sessionnetworkconfiguration): The network configuration of the sessions in the session pool.

## SessionPoolSecret
### Properties
* **name**: string: Secret Name.
* **value**: string {sensitive} (WriteOnly): Secret Value.

## SessionRegistryCredentials
### Properties
* **passwordSecretRef**: string: The name of the secret that contains the registry login password
* **registryServer**: string: Container registry server.
* **username**: string: Container registry username.

## SmbStorage
### Properties
* **accessMode**: 'ReadOnly' | 'ReadWrite' | string: Access mode for storage
* **domain**: string: The domain name for the user.
* **host**: string: The host name or IP address of the SMB server.
* **password**: string {sensitive}: The password for the user.
* **shareName**: string: The path to the SMB shared folder.
* **username**: string: The user to log on to the SMB server.

## SourceControlProperties
### Properties
* **branch**: string: The branch which will trigger the auto deployment
* **githubActionConfiguration**: [GithubActionConfiguration](#githubactionconfiguration): Container App Revision Template with all possible settings and the
defaults if user did not provide them. The defaults are populated
as they were at the creation time
* **operationState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Current provisioning State of the operation
* **repoUrl**: string: The repo url which will be integrated to ContainerApp.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TcpConnectionPool
### Properties
* **maxConnections**: int: Maximum number of tcp connections allowed

## TcpRetryPolicy
### Properties
* **maxConnectAttempts**: int: Maximum number of attempts to connect to the tcp service

## TcpScaleRule
### Properties
* **auth**: [ScaleRuleAuth](#scaleruleauth)[]: Authentication secrets for the tcp scale rule.
* **identity**: string: The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
* **metadata**: [TcpScaleRuleMetadata](#tcpscalerulemetadata): Metadata properties to describe tcp scale rule.

## TcpScaleRuleMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Template
### Properties
* **containers**: [Container](#container)[]: List of container definitions for the Container App.
* **initContainers**: [InitContainer](#initcontainer)[]: List of specialized containers that run before app containers.
* **revisionSuffix**: string: User friendly suffix that is appended to the revision name
* **scale**: [Scale](#scale): Scaling properties for the Container App.
* **serviceBinds**: [ServiceBind](#servicebind)[]: List of container app services bound to the app
* **terminationGracePeriodSeconds**: int: Optional duration in seconds the Container App Instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
* **volumes**: [Volume](#volume)[]: List of volume definitions for the Container App.

## TimeoutPolicy
### Properties
* **connectionTimeoutInSeconds**: int: Timeout, in seconds, for a request to initiate a connection
* **responseTimeoutInSeconds**: int: Timeout, in seconds, for a request to respond

## TokenStore
### Properties
* **azureBlobStorage**: [BlobStorageTokenStore](#blobstoragetokenstore): The configuration settings of the storage of the tokens if blob storage is used.
* **enabled**: bool: <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
 The default is <code>false</code>.
* **tokenRefreshExtensionHours**: int: The number of hours after session token expiration that a session token can be used to
call the token refresh API. The default is 72 hours.

## TracesConfiguration
### Properties
* **destinations**: string[]: Open telemetry traces destinations

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrafficWeight
### Properties
* **label**: string: Associates a traffic label with a revision
* **latestRevision**: bool: Indicates that the traffic weight belongs to a latest stable revision
* **revisionName**: string: Name of a revision
* **weight**: int: Traffic weight assigned to a revision

## Twitter
### Properties
* **enabled**: bool: <code>false</code> if the Twitter provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **registration**: [TwitterRegistration](#twitterregistration): The configuration settings of the app registration for the Twitter provider.

## TwitterRegistration
### Properties
* **consumerKey**: string: The OAuth 1.0a consumer key of the Twitter application used for sign-in.
This setting is required for enabling Twitter Sign-In.
Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
* **consumerSecretSettingName**: string: The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
application used for sign-in.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VnetConfiguration
### Properties
* **dockerBridgeCidr**: string: CIDR notation IP range assigned to the Docker bridge, network. Must not overlap with any other provided IP ranges.
* **infrastructureSubnetId**: string: Resource ID of a subnet for infrastructure components. Must not overlap with any other provided IP ranges.
* **internal**: bool: Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource. They must provide infrastructureSubnetId if enabling this property
* **platformReservedCidr**: string: IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. Must not overlap with any other provided IP ranges.
* **platformReservedDnsIP**: string: An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server.

## Volume
### Properties
* **mountOptions**: string: Mount options used while mounting the Azure file share or NFS Azure file share. Must be a comma-separated string.
* **name**: string: Volume name.
* **secrets**: [SecretVolumeItem](#secretvolumeitem)[]: List of secrets to be added in volume. If no secrets are provided, all secrets in collection will be added to volume.
* **storageName**: string: Name of storage resource. No need to provide for EmptyDir and Secret.
* **storageType**: 'AzureFile' | 'EmptyDir' | 'NfsAzureFile' | 'Secret' | 'Smb' | string: Storage type for the volume. If not provided, use EmptyDir.

## VolumeMount
### Properties
* **mountPath**: string: Path within the container at which the volume should be mounted.Must not contain ':'.
* **subPath**: string: Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
* **volumeName**: string: This must match the Name of a Volume.

## WorkflowEnvelope
### Properties
* **id**: string (ReadOnly): The resource id.
* **kind**: string: The resource kind.
* **location**: string: The resource location.
* **name**: string (ReadOnly): Gets the resource name.
* **properties**: [WorkflowEnvelopeProperties](#workflowenvelopeproperties): Additional workflow properties.
* **type**: string (ReadOnly): Gets the resource type.

## WorkflowEnvelopeProperties
### Properties
* **files**: any: Gets or sets the files.
* **flowState**: 'Completed' | 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended' | string: Gets or sets the state of the workflow.
* **health**: [WorkflowHealth](#workflowhealth): Gets or sets workflow health.

## WorkflowHealth
### Properties
* **error**: [ErrorEntity](#errorentity): Gets or sets the workflow error.
* **state**: 'Healthy' | 'NotSpecified' | 'Unhealthy' | 'Unknown' (Required): Gets or sets the workflow health state.

## WorkloadProfile
### Properties
* **maximumCount**: int: The maximum capacity.
* **minimumCount**: int: The minimum capacity.
* **name**: string (Required): Workload profile type for the workloads to run on.
* **workloadProfileType**: string (Required): Workload profile type for the workloads to run on.

