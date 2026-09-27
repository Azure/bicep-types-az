# Microsoft.DeviceRegistry @ 2026-11-02-preview

## Resource Microsoft.DeviceRegistry/assetEndpointProfiles@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssetEndpointProfileProperties](#assetendpointprofileproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/assetEndpointProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/assets@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssetProperties](#assetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/assets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/billingContainers@2026-11-02-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource ETag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingContainerProperties](#billingcontainerproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DeviceRegistry/billingContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/assets@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceAssetProperties](#namespaceassetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/assets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/certificateAuthorities@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateAuthorityProperties](#certificateauthorityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/certificateAuthorities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/certificateAuthorities/certificatePolicies@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CertificatePolicyProperties](#certificatepolicyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/certificateAuthorities/certificatePolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/devices@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Tag.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceDeviceProperties](#namespacedeviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/devices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/discoveredAssets@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceDiscoveredAssetProperties](#namespacediscoveredassetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/discoveredAssets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/discoveredDevices@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceDiscoveredDeviceProperties](#namespacediscovereddeviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/discoveredDevices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/groups@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupProperties](#groupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/jobs@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/jobs/runs@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobRunProperties](#jobrunproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DeviceRegistry/namespaces/jobs/runs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/registryDevices@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RegistryDeviceProperties](#registrydeviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/namespaces/registryDevices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/registryDevices/attributes@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceAttributeProperties](#deviceattributeproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DeviceRegistry/namespaces/registryDevices/attributes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/registryDevices/authenticationProfiles@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AuthenticationProfileProperties](#authenticationprofileproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DeviceRegistry/namespaces/registryDevices/authenticationProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/namespaces/registryDevices/capabilities@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[0-9a-zA-Z][a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceCapabilityProperties](#devicecapabilityproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DeviceRegistry/namespaces/registryDevices/capabilities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/schemaRegistries@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaRegistryProperties](#schemaregistryproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceRegistry/schemaRegistries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/schemaRegistries/schemas@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaProperties](#schemaproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DeviceRegistry/schemaRegistries/schemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeviceRegistry/schemaRegistries/schemas/schemaVersions@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 10, pattern: "^[0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchemaVersionProperties](#schemaversionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DeviceRegistry/schemaRegistries/schemas/schemaVersions' (ReadOnly, DeployTimeConstant): The resource type

## Function activate (Microsoft.DeviceRegistry/namespaces/certificateAuthorities@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces/certificateAuthorities
* **ApiVersion**: 2026-11-02-preview
* **Input**: [ActivateCertificateAuthorityRequest](#activatecertificateauthorityrequest)
* **Output**: any

## Function cancel (Microsoft.DeviceRegistry/namespaces/jobs/runs@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces/jobs/runs
* **ApiVersion**: 2026-11-02-preview
* **Output**: any

## Function countMembers (Microsoft.DeviceRegistry/namespaces/groups@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces/groups
* **ApiVersion**: 2026-11-02-preview
* **Output**: [GroupMemberCountResponse](#groupmembercountresponse)

## Function executeAction (Microsoft.DeviceRegistry/namespaces/assets@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces/assets
* **ApiVersion**: 2026-11-02-preview
* **Input**: [NamespaceAssetExecuteActionRequest](#namespaceassetexecuteactionrequest)
* **Output**: [NamespaceAssetExecuteActionResponse](#namespaceassetexecuteactionresponse)

## Function generateReport (Microsoft.DeviceRegistry/namespaces@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces
* **ApiVersion**: 2026-11-02-preview
* **Input**: [ReportSelector](#reportselector)
* **Output**: any

## Function getLatestReport (Microsoft.DeviceRegistry/namespaces@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces
* **ApiVersion**: 2026-11-02-preview
* **Input**: [ReportSelector](#reportselector)
* **Output**: [Report](#report)

## Function getSummary (Microsoft.DeviceRegistry/namespaces/jobs/runs@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces/jobs/runs
* **ApiVersion**: 2026-11-02-preview
* **Output**: [JobRunSummary](#jobrunsummary)

## Function listKeys (Microsoft.DeviceRegistry/namespaces/registryDevices/authenticationProfiles@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces/registryDevices/authenticationProfiles
* **ApiVersion**: 2026-11-02-preview
* **Output**: [GetDeviceAuthenticationProfileKeysResponse](#getdeviceauthenticationprofilekeysresponse)

## Function listMembers (Microsoft.DeviceRegistry/namespaces/groups@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces/groups
* **ApiVersion**: 2026-11-02-preview
* **Input**: [GroupListMembersRequest](#grouplistmembersrequest)
* **Output**: [GroupListMembersResult](#grouplistmembersresult)

## Function listResults (Microsoft.DeviceRegistry/namespaces/jobs/runs@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces/jobs/runs
* **ApiVersion**: 2026-11-02-preview
* **Input**: [JobRunResultsRequest](#jobrunresultsrequest)
* **Output**: [JobRunResultListResponse](#jobrunresultlistresponse)

## Function migrate (Microsoft.DeviceRegistry/namespaces@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces
* **ApiVersion**: 2026-11-02-preview
* **Input**: [NamespaceMigrateRequest](#namespacemigraterequest)
* **Output**: [NamespaceMigrateResponse](#namespacemigrateresponse)

## Function refreshMembers (Microsoft.DeviceRegistry/namespaces/groups@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces/groups
* **ApiVersion**: 2026-11-02-preview
* **Output**: any

## Function revokeAndRotate (Microsoft.DeviceRegistry/namespaces/certificateAuthorities@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces/certificateAuthorities
* **ApiVersion**: 2026-11-02-preview
* **Output**: any

## Function revokeCertificates (Microsoft.DeviceRegistry/namespaces/registryDevices/authenticationProfiles@2026-11-02-preview)
* **Resource**: Microsoft.DeviceRegistry/namespaces/registryDevices/authenticationProfiles
* **ApiVersion**: 2026-11-02-preview
* **Output**: any

## ActivateCertificateAuthorityRequest
### Properties
* **certificateChain**: string (Required): Certificate chain in PEM format for activating an externally issued intermediate Certificate Authority, including the signed certificate. The first certificate must be the signed certificate matching the CSR generated by the service, followed by any intermediate CAs, and optionally the root CA. Certificates must be ordered from leaf to root and concatenated in PEM format.

## AgentInfo
### Properties
* **agentProfile**: int: The agent profile identifier.
* **agentSdkVersion**: string: The version of the agent SDK in use on the device.
* **compatibilityProperties**: [AgentInfoCompatibilityProperties](#agentinfocompatibilityproperties): Properties used to determine compatibility with available updates.

## AgentInfoCompatibilityProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssetEndpointProfileProperties
### Properties
* **additionalConfiguration**: string: Stringified JSON that contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF).
* **authentication**: [Authentication](#authentication): Defines the client authentication mechanism to the server.
* **discoveredAssetEndpointProfileRef**: string: Reference to a discovered asset endpoint profile. Populated only if the asset endpoint profile has been created from discovery flow. Discovered asset endpoint profile name must be provided.
* **endpointProfileType**: string (Required): Defines the configuration for the connector type that is being used with the endpoint profile.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **status**: [AssetEndpointProfileStatus](#assetendpointprofilestatus) (ReadOnly): Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
* **targetAddress**: string (Required): The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable id.

## AssetEndpointProfileStatus
### Properties
* **errors**: [AssetEndpointProfileStatusError](#assetendpointprofilestatuserror)[] (ReadOnly): Array object to transfer and persist errors that originate from the Edge.

## AssetEndpointProfileStatusError
### Properties
* **code**: int (ReadOnly): Error code for classification of errors (ex: 400, 404, 500, etc.).
* **message**: string (ReadOnly): Human readable helpful error message to provide additional context for error (ex: “targetAddress 'foo' is not a valid url”).

## AssetProperties
### Properties
* **assetEndpointProfileRef**: string (Required): A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must provide asset endpoint profile name.
* **attributes**: [AssetPropertiesAttributes](#assetpropertiesattributes): A set of key-value pairs that contain custom attributes set by the customer.
* **datasets**: [Dataset](#dataset)[]: Array of datasets that are part of the asset. Each dataset describes the data points that make up the set.
* **defaultDatasetsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here.
* **defaultEventsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
* **defaultTopic**: [Topic](#topic): Object that describes the default topic information for the asset.
* **description**: string: Human-readable description of the asset.
* **discoveredAssetRefs**: string[]: Reference to a list of discovered assets. Populated only if the asset has been created from discovery flow. Discovered asset names must be provided.
* **displayName**: string: Human-readable display name.
* **documentationUri**: string: Reference to the documentation.
* **enabled**: bool: Enabled/Disabled status of the asset.
* **events**: [Event](#event)[]: Array of events that are part of the asset. Each event can have per-event configuration.
* **externalAssetId**: string: Asset id provided by the customer.
* **hardwareRevision**: string: Revision number of the hardware.
* **manufacturer**: string: Asset manufacturer name.
* **manufacturerUri**: string: Asset manufacturer URI.
* **model**: string: Asset model name.
* **productCode**: string: Asset product code.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **serialNumber**: string: Asset serial number.
* **softwareRevision**: string: Revision number of the software.
* **status**: [AssetStatus](#assetstatus) (ReadOnly): Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable id.
* **version**: int (ReadOnly): An integer that is incremented each time the resource is modified.

## AssetPropertiesAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AssetStatus
### Properties
* **datasets**: [AssetStatusDataset](#assetstatusdataset)[] (ReadOnly): Array of dataset statuses that describe the status of each dataset.
* **errors**: [AssetStatusError](#assetstatuserror)[] (ReadOnly): Array object to transfer and persist errors that originate from the Edge.
* **events**: [AssetStatusEvent](#assetstatusevent)[] (ReadOnly): Array of event statuses that describe the status of each event.
* **version**: int (ReadOnly): A read only incremental counter indicating the number of times the configuration has been modified from the perspective of the current actual (Edge) state of the Asset. Edge would be the only writer of this value and would sync back up to the cloud. In steady state, this should equal version.

## AssetStatusDataset
### Properties
* **messageSchemaReference**: [MessageSchemaReference](#messageschemareference) (ReadOnly): The message schema reference object.
* **name**: string (Required, ReadOnly): The name of the dataset. Must be unique within the status.datasets array. This name is used to correlate between the spec and status dataset information.

## AssetStatusError
### Properties
* **code**: int (ReadOnly): Error code for classification of errors (ex: 400, 404, 500, etc.).
* **message**: string (ReadOnly): Human readable helpful error message to provide additional context for error (ex: “capability Id 'foo' does not exist”).

## AssetStatusEvent
### Properties
* **messageSchemaReference**: [MessageSchemaReference](#messageschemareference) (ReadOnly): The message schema reference object.
* **name**: string (Required, ReadOnly): The name of the event. Must be unique within the status.events array. This name is used to correlate between the spec and status event information.

## Authentication
### Properties
* **method**: 'Anonymous' | 'Certificate' | 'UsernamePassword' | string (Required): Defines the method to authenticate the user of the client at the server.
* **usernamePasswordCredentials**: [UsernamePasswordCredentials](#usernamepasswordcredentials): Defines the username and password references when UsernamePassword user authentication mode is selected.
* **x509Credentials**: [X509Credentials](#x509credentials): Defines the certificate reference when Certificate user authentication mode is selected.

## AuthenticationProfileProperties
* **Discriminator**: authenticationType

### Base Properties

### CertificateAuthorityAuthenticationProfileProperties
#### Properties
* **authenticationType**: 'CertificateAuthoritySignedX509Certificate' (Required): The authentication type.
* **certificateAuthority**: [CertificateAuthorityCredentials](#certificateauthoritycredentials) (Required): Certificate authority credentials. Required when type is CertificateAuthority.

### SelfSignedX509CertificateAuthenticationProfileProperties
#### Properties
* **authenticationType**: 'SelfSignedX509Certificate' (Required): The authentication type.
* **selfSignedThumbprints**: [SelfSignedThumbprints](#selfsignedthumbprints) (Required): Self-signed X.509 thumbprints. Required when type is SelfSignedX509Certificate.

### SymmetricKeyAuthenticationProfileProperties
#### Properties
* **authenticationType**: 'SymmetricKey' (Required): The authentication type.
* **symmetricKey**: [SymmetricKeyCredentials](#symmetrickeycredentials) (Required, WriteOnly): Symmetric key details. Required when type is SymmetricKey.


## BestUpdate
### Properties
* **devicesNotOnBestUpdateCount**: int (Required, ReadOnly): The number of devices in the group that target this update but are not yet running it.
* **targetDevices**: [TargetDevices](#targetdevices) (Required, ReadOnly): The devices that this update targets.
* **updateResourceId**: string (Required, ReadOnly): The URI of the best-available update for the targeted devices.

## BillingContainerProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.

## BrokerStateStoreDestinationConfiguration
### Properties
* **key**: string (Required): The MQTT broker state store destination key.

## CertificateAuthorityCredentials
### Properties
* **certificatePolicyResourceId**: string (Required): ADR certificate policy resource ID.

## CertificateAuthorityIssuer
* **Discriminator**: issuerType

### Base Properties

### ExternalCertificateAuthorityIssuer
#### Properties
* **certificateSigningRequest**: string (ReadOnly): Certificate Signing Request (CSR) in PEM format, generated by the service.
* **issuerType**: 'External' (Required): The Certificate Authority issuer type.
* **status**: 'Active' | 'ActiveButPendingRenewal' | 'PendingActivation' | string (ReadOnly): The status of the external issuer certificate lifecycle.
* **thumbprint**: string (ReadOnly): Thumbprint of the Certificate Authority certificate signed by the external issuer.

### MicrosoftCertificateAuthorityIssuer
#### Properties
* **certificateAuthorityResourceId**: string (Required): The resource ID of the root issuer Certificate Authority in the same namespace.
* **issuerType**: 'Microsoft' (Required): The Certificate Authority issuer type.


## CertificateAuthorityProperties
* **Discriminator**: certificateAuthorityType

### Base Properties
* **keyType**: 'ECC' | string (Required): Crypto type: ECC.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **subject**: string (ReadOnly): Certificate subject.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable identifier of the Certificate Authority resource.
* **validityNotAfter**: string (ReadOnly): Certificate is valid not after this date. Format ISO8601.
* **validityNotBefore**: string (ReadOnly): Certificate is valid not before this date. Format ISO8601.

### IntermediateCertificateAuthorityProperties
#### Properties
* **certificateAuthorityType**: 'ICA' (Required): The Certificate Authority type. Use Root for a self-signed, service-managed root CA, and ICA for an intermediate CA.
* **issuer**: [CertificateAuthorityIssuer](#certificateauthorityissuer) (Required): The issuer for the intermediate Certificate Authority.

### RootCertificateAuthorityProperties
#### Properties
* **certificateAuthorityType**: 'Root' (Required): The Certificate Authority type. Use Root for a self-signed, service-managed root CA, and ICA for an intermediate CA.


## CertificatePolicyConfiguration
### Properties
* **validityPeriodInDays**: int (Required): The validity period in days.

## CertificatePolicyProperties
### Properties
* **certificate**: [CertificatePolicyConfiguration](#certificatepolicyconfiguration): The certificate configuration.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable identifier of the Certificate Policy resource.

## DataPoint
### Properties
* **dataPointConfiguration**: string: Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **dataSource**: string (Required): The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
* **name**: string (Required): The name of the data point.
* **observabilityMode**: 'Counter' | 'Gauge' | 'Histogram' | 'Log' | 'None' | string: An indication of how the data point should be mapped to OpenTelemetry.

## Dataset
### Properties
* **dataPoints**: [DataPoint](#datapoint)[]: Array of data points that are part of the dataset. Each data point can have per-data point configuration.
* **datasetConfiguration**: string: Stringified JSON that contains connector-specific JSON string that describes configuration for the specific dataset.
* **name**: string (Required): Name of the dataset.
* **topic**: [Topic](#topic): Object that describes the topic information for the specific dataset.

## DatasetDestination
* **Discriminator**: target

### Base Properties

### DatasetBrokerStateStoreDestination
#### Properties
* **configuration**: [BrokerStateStoreDestinationConfiguration](#brokerstatestoredestinationconfiguration) (Required): The MQTT broker state store destination configuration.
* **target**: 'BrokerStateStore' (Required): Target destination.

### DatasetMqttDestination
#### Properties
* **configuration**: [MqttDestinationConfiguration](#mqttdestinationconfiguration) (Required): The MQTT destination configuration.
* **target**: 'Mqtt' (Required): Target destination.

### DatasetStorageDestination
#### Properties
* **configuration**: [StorageDestinationConfiguration](#storagedestinationconfiguration) (Required): The storage destination configuration.
* **target**: 'Storage' (Required): Target destination.


## DeviceAttributeProperties
* **Discriminator**: reportedBy

### Base Properties
* **schema**: string: URL of the JSON Schema document describing the concrete shape of this property bag. Optional
advertisement so clients can validate the bag without out-of-band documentation.

### UpdateDeviceAttributeProperties
#### Properties
* **agentInfo**: [AgentInfo](#agentinfo): Information reported by the device update agent.
* **agentInfoEtag**: string: The entity tag for the reported `agentInfo`.
* **deviceClassId**: string: The device class identifier, calculated by ADU from `agentInfo.compatibilityProperties` and `agentInfo.agentProfile`.
* **installedUpdateId**: [DeviceUpdateId](#deviceupdateid): The identifier of the update currently installed on the device.
* **latestUpdateJobInfo**: [UpdateJobInfo](#updatejobinfo): Information about the most recent update job targeting this device.
* **reportedBy**: 'Microsoft.DeviceUpdate' (Required): The cloud service type that reports this device attribute.
#### Additional Properties
* **Additional Properties Type**: any

### UserDeviceAttributeProperties
#### Properties
* **reportedBy**: 'User' (Required): The cloud service type that reports this device attribute.
#### Additional Properties
* **Additional Properties Type**: any


## DeviceCapabilityProperties
* **Discriminator**: capabilityType

### Base Properties
* **enablementState**: 'Disabled' | 'DisabledByParent' | 'Enabled' | string (Required): Whether a capability is enabled or disabled.
* **provisioningState**: 'Deleting' | 'Failed' | 'Linking' | 'Succeeded' | string (ReadOnly): The provisioning status of this capability.

### IotHubDeviceCapabilityProperties
#### Properties
* **authenticationProfileResourceId**: string (Required): The full ARM Resource ID for the IoT Hub's authentication profile. This must be a sibling resource under the same device.
* **capabilityType**: 'Microsoft.IoTHub' (Required): The type of this device capability resource.
* **messagingEndpointName**: string (Required): The messaging endpoint name as returned by the GetNamespace API.

### UpdateDeviceCapabilityProperties
#### Properties
* **capabilityType**: 'Microsoft.SoftwareUpdate' (Required): The type of this device capability resource.


## DeviceMessagingEndpoint
### Properties
* **address**: string (Required): The endpoint address to connect to.
* **endpointType**: string: Type of connection used for the messaging endpoint.

## DeviceRef
### Properties
* **deviceName**: string (Required): Name of the device resource
* **endpointName**: string (Required): The name of endpoint to use

## DeviceStatus
### Properties
* **config**: [StatusConfig](#statusconfig) (ReadOnly): Defines the device status config properties.
* **endpoints**: [DeviceStatusEndpoints](#devicestatusendpoints) (ReadOnly): Defines the device status for inbound/outbound endpoints.

## DeviceStatusEndpoint
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Defines the error related to this endpoint.
* **healthState**: [HealthState](#healthstate) (ReadOnly): Health state of the endpoint.

## DeviceStatusEndpoints
### Properties
* **inbound**: [DeviceStatusEndpointsInbound](#devicestatusendpointsinbound) (ReadOnly): KeyValue pair representing status of inbound endpoints.

## DeviceStatusEndpointsInbound
### Properties
### Additional Properties
* **Additional Properties Type**: [DeviceStatusEndpoint](#devicestatusendpoint)

## DeviceUpdateId
### Properties
* **name**: string (Required): The name of the update.
* **provider**: string (Required): The provider of the update.
* **version**: string (Required): The version of the update.

## DiscoveredInboundEndpoints
### Properties
* **additionalConfiguration**: string: Stringified JSON that contains configuration to be used by the connector (e.g., OPC UA, ONVIF).
* **address**: string (Required): The endpoint address & port. This can be either an IP address (e.g., 192.168.1.1) or a fully qualified domain name (FQDN, e.g., server.example.com).
* **endpointType**: string (Required): Type of connection endpoint.
* **lastUpdatedOn**: string: The timestamp (in UTC) when the endpoint was discovered.
* **supportedAuthenticationMethods**: ('Anonymous' | 'Certificate' | 'UsernamePassword' | string)[]: List of supported authentication methods supported by device for Inbound connections.
* **version**: string: Protocol version associated with the endpoint e.g. 1 or 2 for endpointType Microsoft.HTTP, and 3.5 or 5.0 for endpointType Microsoft.Mqtt etc.

## DiscoveredMessagingEndpoints
### Properties
* **inbound**: [DiscoveredMessagingEndpointsInbound](#discoveredmessagingendpointsinbound): Set of endpoints to connect to the device.
* **outbound**: [DiscoveredOutboundEndpoints](#discoveredoutboundendpoints): Set of endpoints a device can connect to.

## DiscoveredMessagingEndpointsInbound
### Properties
### Additional Properties
* **Additional Properties Type**: [DiscoveredInboundEndpoints](#discoveredinboundendpoints)

## DiscoveredOutboundEndpoints
### Properties
* **assigned**: [DiscoveredOutboundEndpointsAssigned](#discoveredoutboundendpointsassigned) (Required): Endpoints the device can connect to.

## DiscoveredOutboundEndpointsAssigned
### Properties
### Additional Properties
* **Additional Properties Type**: [DeviceMessagingEndpoint](#devicemessagingendpoint)

## Error
### Properties
* **code**: string (ReadOnly): Error code for classification of errors (ex: '400', '404', '500', etc.).
* **details**: [ErrorDetails](#errordetails)[] (ReadOnly): Array of error details that describe the status of each error.
* **message**: string (ReadOnly): Human-readable helpful error message to provide additional context for error (e.g.,: “Capability ID 'foo' does not exist”).

## ErrorDetails
### Properties
* **code**: string (ReadOnly): Multi-part error code for classification and root causing of errors (ex: 400.200.100.432).
* **correlationId**: string (ReadOnly): Unique identifier for the transaction to aid in debugging.
* **info**: string (ReadOnly): Human-readable helpful detailed text context for debugging (ex: “The following mechanisms are supported...”).
* **message**: string (ReadOnly): Human-readable helpful error message to provide additional context for error (ex: “Authentication method not supported”).

## Event
### Properties
* **eventConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **eventNotifier**: string (Required): The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
* **name**: string (Required): The name of the event.
* **observabilityMode**: 'Log' | 'None' | string: An indication of how the event should be mapped to OpenTelemetry.
* **topic**: [Topic](#topic): Object that describes the topic information for the specific event.

## EventDestination
* **Discriminator**: target

### Base Properties

### EventMqttDestination
#### Properties
* **configuration**: [MqttDestinationConfiguration](#mqttdestinationconfiguration) (Required): The MQTT destination configuration.
* **target**: 'Mqtt' (Required): Target destination.

### EventStorageDestination
#### Properties
* **configuration**: [StorageDestinationConfiguration](#storagedestinationconfiguration) (Required): The storage destination configuration.
* **target**: 'Storage' (Required): Target destination.


## ExtendedLocation
### Properties
* **name**: string (Required): The extended location name.
* **type**: string (Required): The extended location type.

## GetDeviceAuthenticationProfileKeysResponse
### Properties
* **symmetricKey**: [SymmetricKeyCredentials](#symmetrickeycredentials) (Required): Plaintext symmetric keys for the device authentication profile.

## GroupListMember
### Properties
* **id**: string (Required): The ARM resource ID of the group member.

## GroupListMembersRequest
### Properties
* **pageSize**: int {maxValue: 1000}: Optional maximum number of group members to return in the requested page. The maximum page size is 1000 members.
* **skipToken**: string: Opaque continuation token from a previous listMembers response.

## GroupListMembersResult
### Properties
* **members**: [GroupListMember](#grouplistmember)[] (Required): The group members returned in this page.
* **skipToken**: string: Opaque continuation token to use in the next listMembers request, if more results remain after the requested page.

## GroupMemberCountResponse
### Properties
* **count**: int: The current count of members in the group.

## GroupProperties
### Properties
* **description**: string {maxLength: 1024}: Human-readable description of the resource.
* **displayName**: string {maxLength: 256}: Human-readable display name for the resource.
* **groupType**: 'RegistryDevice' | string (Required): The type of group that determines what kind of resources can be members.
* **lastMembershipRefreshTime**: string (ReadOnly): A timestamp indicating the last time the group membership was refreshed.
* **membershipState**: 'Creating' | 'FailedToResolveMembers' | 'Ready' | 'RefreshingMembers' | string (ReadOnly): The membership state of the group.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **queryFilter**: string (Required): The filter string used to determine group membership. To define a group that contains all devices in the namespace, use \"*\".
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable ID.

## GroupUpdateCompliance
### Properties
* **bestUpdateAvailableDeviceCount**: int (Required, ReadOnly): Number of updateable devices for which a better update is available but not yet applied.
* **devicesInProgressOnBestUpdate**: int (Required, ReadOnly): Number of updateable devices currently being updated to the best available update.
* **onBestUpdateDeviceCount**: int (Required, ReadOnly): Number of updateable devices that are currently on the best available update.
* **totalNotUpdateableDeviceCount**: int (Required, ReadOnly): Total number of devices in the group that are not eligible for updates.
* **totalUpdateableDeviceCount**: int (Required, ReadOnly): Total number of devices in the group that are eligible for updates.

## HealthState
### Properties
* **lastTransitionTime**: string (ReadOnly): The timestamp (RFC3339) when the health status last changed.
* **lastUpdateTime**: string (ReadOnly): The timestamp (RFC3339) when the health status was last updated, even if the status did not change.
* **message**: string (ReadOnly): A human-readable message describing the last transition.
* **reasonCode**: string (ReadOnly): Unique, CamelCase reason code describing the cause of the last health state transition.
* **status**: 'Available' | 'Degraded' | 'Unavailable' | 'Unknown' | string (ReadOnly): The high-level health status of the resource.

## HostAuthentication
### Properties
* **method**: 'Anonymous' | 'Certificate' | 'UsernamePassword' | string (Required): Defines the method to authenticate the user of the client at the server.
* **usernamePasswordCredentials**: [UsernamePasswordCredentials](#usernamepasswordcredentials): Defines the username and password references when UsernamePassword user authentication mode is selected.
* **x509Credentials**: [X509CertificateCredentials](#x509certificatecredentials): Defines the certificate reference when Certificate user authentication mode is selected.

## InboundCallerIdentity
### Properties
* **type**: 'SystemAssigned' | 'UserAssigned' | string (Required): The identity type.
* **userAssignedIdentity**: string: The resource ID of the user-assigned managed identity. Required when type is UserAssigned.

## InboundEndpoints
### Properties
* **additionalConfiguration**: string: Stringified JSON that contains configuration to be used by the connector (e.g., OPC UA, ONVIF).
* **address**: string (Required): The endpoint address & port. This can be either an IP address (e.g., 192.168.1.1) or a fully qualified domain name (FQDN, e.g., server.example.com).
* **authentication**: [HostAuthentication](#hostauthentication): Defines the client authentication mechanism to the server.
* **endpointType**: string (Required): Type of connection endpoint.
* **trustSettings**: [TrustSettings](#trustsettings): Defines server trust settings for the endpoint.
* **version**: string: Protocol version associated with the endpoint e.g. 1 or 2 for endpointType Microsoft.HTTP, and 3.5 or 5.0 for endpointType Microsoft.Mqtt etc.

## InstallableUpdate
### Properties
* **updateResourceId**: string (Required, ReadOnly): The URI of the installable update.

## InstallableUpdatesForTargetDevices
### Properties
* **installableUpdates**: [InstallableUpdate](#installableupdate)[] (Required, ReadOnly): The updates that can be installed on the targeted devices.
* **targetDevices**: [TargetDevices](#targetdevices) (Required, ReadOnly): The devices that this set of updates targets.

## InstallResult
### Properties
* **extendedResultCodes**: string {maxLength: 1024} (Required): Comma-separated list of agent ExtendedResultCode (ERC) values for diagnostic correlation. Each value is the unsigned hexadecimal representation of an `int32`.
* **failureOrigin**: 'ADU_CLOUD_SERVICE' | 'ADU_MANAGED_RESOURCE' | 'AGENT_CORE' | 'AGENT_DEPENDENCY' | 'AGENT_EXTENSION' | 'DEVICE' | 'NOT_APPLICABLE' | 'OTHER' | string (Required): Best-effort hint identifying which subsystem produced the failure. Value is `NOT_APPLICABLE` for successful install.
* **outcome**: 'CANCELED' | 'FAILED' | 'IN_PROGRESS' | 'SKIPPED' | 'SUCCEEDED' | string (Required, ReadOnly): Authoritative terminal outcome of the update attempt.
* **resultCode**: int (Required): Result code representing an install result. 0 or negative values designate failures, positive values indicate success.
* **resultDetails**: string {maxLength: 1024}: Human-readable result details.
* **stepResults**: [UpdateStepResult](#updatestepresult)[] {maxLength: 10}: Per-step results of the steps defined by the manifest's `instructions.steps`.

## JobProperties
* **Discriminator**: jobType

### Base Properties
* **description**: string {maxLength: 1024}: Human-readable description of the resource.
* **displayName**: string {maxLength: 256}: Human-readable display name for the resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable ID.

### OnboardingUpdateJobProperties
#### Properties
* **definition**: [OnboardingUpdateJobDefinition](#onboardingupdatejobdefinition) (Required): The update definition for the onboarding job. Set at create time; immutable thereafter.
* **jobType**: 'OnboardingUpdate' (Required): The type of the job. Set at create time; immutable thereafter.

### SoftwareUpdateJobProperties
#### Properties
* **definition**: [SoftwareUpdateJobDefinition](#softwareupdatejobdefinition) (Required): The update definition for the job. Set at create time; immutable thereafter.
* **jobType**: 'SoftwareUpdate' (Required): The type of the job. Set at create time; immutable thereafter.
* **target**: [JobTarget](#jobtarget) (Required): The target of the job. Set at create time; immutable thereafter.


## JobRunError
### Properties
* **code**: string (ReadOnly): Error code for classification of errors (ex: '400', '404', '500', etc.).
* **details**: [ErrorDetails](#errordetails)[] (ReadOnly): Array of error details that describe the status of each error.
* **message**: string (ReadOnly): Human-readable helpful error message to provide additional context for error (e.g.,: “Capability ID 'foo' does not exist”).

## JobRunProperties
### Properties
* **cancellationReason**: 'CanceledByCustomer' | 'CanceledByGroupDelete' | string (ReadOnly): The reason the run was canceled. Present only when status is Canceled.
* **endTime**: string (ReadOnly): The end time of the job run.
* **error**: [JobRunError](#jobrunerror) (ReadOnly): The error details explaining why the job run failed. Present only when status is Failed.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **scheduledTime**: string: The scheduled time for the job run.
* **startTime**: string (ReadOnly): The start time of the job run.
* **status**: 'Active' | 'Canceled' | 'Failed' | 'Scheduled' | 'Succeeded' | 'TimedOut' | string (ReadOnly): The status of the job run.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable ID.

## JobRunResultItem
### Properties
* **installResult**: [InstallResult](#installresult): The detailed result of the update install attempt on the device, as reported by the device update agent. Carries the full breakdown (terminal outcome, failure origin, result codes, and per-step results) so the cause of a failure can be inspected directly from the job run results. Present when the device has reported an install result; omitted while the operation is still pending.
* **reason**: string: Short, machine-readable diagnostic that pairs with status. Present only when status is Failed; an ADU-provided machine-readable code (e.g. DOWNLOAD_FAILED). Omitted for all other statuses, including Succeeded and InProgress.
* **resourceExternalId**: string: The onboarding device's external identifier (`externalDeviceId`). Populated when `resourceType` is `Microsoft.DeviceRegistry/namespaces/onboardingDevices`, because an onboarding device doesn't have an ADR resource yet and therefore no resource UUID.
* **resourceId**: string: The ADR resource's ID. Populated when `resourceType` is `Microsoft.DeviceRegistry/namespaces/registryDevices`.
* **resourceType**: 'Microsoft.DeviceRegistry/namespaces/onboardingDevices' | 'Microsoft.DeviceRegistry/namespaces/registryDevices' | string: The resource type of the target this result entry describes, which determines which identifier property is populated. `Microsoft.DeviceRegistry/namespaces/registryDevices` for a registered ADR device (SoftwareUpdate job runs), identified by `resourceUuid`; `Microsoft.DeviceRegistry/namespaces/onboardingDevices` for an onboarding device served by an OnboardingUpdate job run, identified by `resourceExternalId`. Note: `onboardingDevices` is not yet a provisioned resource type; the value follows the resource type naming pattern.
* **resourceUuid**: string: The ADR resource's stable UUID. Populated when `resourceType` is `Microsoft.DeviceRegistry/namespaces/registryDevices`.
* **status**: 'Canceled' | 'Failed' | 'InProgress' | 'NotApplied' | 'Succeeded' | string (ReadOnly): The current per-device status for this run. One of: Succeeded, Failed, InProgress, Canceled, NotApplied.

## JobRunResultListResponse
### Properties
* **skipToken**: string: Opaque continuation token to use in the next listResults request, if more results remain after the requested page.
* **value**: [JobRunResultItem](#jobrunresultitem)[] (Required): The list of device result entries.

## JobRunResultsRequest
### Properties
* **filter**: string: An OData-style filter expression that selects which device result entries to return, aligned with the Azure API Guidelines `filter` convention. Currently supports equality on the result status, e.g. "status eq 'Failed'". Supported status values are Succeeded, Failed, InProgress, and Canceled. NotApplied is rejected with InvalidFilter. When omitted, all device results are returned.
* **orderBy**: string: An OData order by expression to sort the results. For example, "status asc" or "status desc".
* **skipToken**: string: Opaque continuation token from a previous listResults response.

## JobRunSummary
### Properties
* **canceled**: int: Number of targets whose execution was canceled.
* **failed**: int: Number of targets that failed.
* **inProgress**: int: Number of targets currently in progress.
* **notApplied**: int: Number of targets the operation does not apply to. SoftwareUpdate jobs only; computed by ADR as total - (succeeded + failed + inProgress + canceled).
* **pending**: int: Number of targets pending execution.
* **succeeded**: int: Number of targets that succeeded.
* **total**: int: Total number of targets.

## JobTarget
### Properties
* **resourceId**: string (Required): The Azure resource ID of the target group. Must reference a Microsoft.DeviceRegistry/namespaces/groups resource.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## Management
### Properties
* **endpoints**: [ManagementEndpoints](#managementendpoints): Dictionary of management endpoints.

## ManagementAction
### Properties
* **actionConfiguration**: string: Stringified JSON that contains connector-specific configuration for the action.
* **actionType**: 'Call' | 'Read' | 'Write' | string: The type of the action.
* **name**: string (Required): Name of the action.
* **targetUri**: string (Required): The target URI on which a client can invoke the specific action.
* **timeoutInSeconds**: int: Response timeout for the action.
* **topic**: string: The MQTT topic path on which a client will receive the request for the action.
* **typeRef**: string: URI or type definition ID.

## ManagementEndpoint
### Properties
* **address**: string (Required): The endpoint address to connect to.
* **endpointType**: string (Required): Type of connection used for management endpoint.
* **resourceId**: string (Required): The messaging endpoint Azure resource Id.
* **scopeId**: string (Required): The scope ID for the management endpoint.

## ManagementEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [ManagementEndpoint](#managementendpoint)

## ManagementGroup
### Properties
* **actions**: [ManagementAction](#managementaction)[]: Array of actions that are part of the management group. Each action can have an individual configuration.
* **dataSource**: string: Reference to a data source for a given management group.
* **defaultTimeoutInSeconds**: int: Default response timeout for all actions that are part of the management group.
* **defaultTopic**: string: Default MQTT topic path on which a client will receive the request for all actions that are part of the management group.
* **managementGroupConfiguration**: string: Stringified JSON that contains connector-specific configuration for the management group.
* **name**: string (Required): Name of the management group.
* **typeRef**: string: URI or type definition ID.

## MessageSchemaReference
### Properties
* **schemaName**: string (Required, ReadOnly): The message schema name.
* **schemaRegistryNamespace**: string (Required, ReadOnly): The message schema registry namespace.
* **schemaVersion**: string (Required, ReadOnly): The message schema version.

## Messaging
### Properties
* **endpoints**: [MessagingEndpoints](#messagingendpoints): Dictionary of messaging endpoints.

## MessagingEndpoint
### Properties
* **address**: string: The endpoint address to connect to.
* **deviceAddress**: string (ReadOnly): The endpoint address used by devices.
* **endpointType**: string: Type of connection used for messaging endpoint.
* **inboundCallerIdentity**: [InboundCallerIdentity](#inboundcalleridentity): The identity the linked resource uses to call the ADR namespace.
* **linkingError**: [NamespaceLinkingError](#namespacelinkingerror) (ReadOnly): The error detail surfaced when this messaging endpoint is in the Failed linking state.
* **linkingState**: 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): The linking state of this messaging endpoint.
* **provisioning**: [MessagingEndpointProvisioning](#messagingendpointprovisioning): The provisioning configuration for this messaging endpoint.
* **resourceId**: string: The messaging endpoint Azure resource Id.

## MessagingEndpointProvisioning
### Properties
* **allocationWeight**: int: The allocation weight for this messaging endpoint.
* **availability**: 'Available' | 'Disabled' | string: The availability status of the messaging endpoint.

## MessagingEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [MessagingEndpoint](#messagingendpoint)

## MessagingEndpoints
### Properties
* **inbound**: [MessagingEndpointsInbound](#messagingendpointsinbound): Set of endpoints to connect to the device.
* **outbound**: [OutboundEndpoints](#outboundendpoints): Set of endpoints a device can connect to.

## MessagingEndpointsInbound
### Properties
### Additional Properties
* **Additional Properties Type**: [InboundEndpoints](#inboundendpoints)

## MigrateResult
### Properties
* **error**: [Error](#error): The error if the migrate operation is not successful.
* **resourceId**: string: The resource Id of the asset resource.
* **result**: 'Failed' | 'Succeeded' | string (ReadOnly): The result of the migrate operation.

## MqttDestinationConfiguration
### Properties
* **qos**: 'Qos0' | 'Qos1' | string: The MQTT QoS setting. Defaults to QoS 1.
* **retain**: 'Keep' | 'Never' | string: When set to 'Keep', messages published to an MQTT broker will have the retain flag set. Default: 'Never'.
* **topic**: string (Required): The MQTT topic.
* **ttl**: int: The MQTT TTL setting.

## NamespaceAssetExecuteActionRequest
### Properties
* **managementActionName**: string (Required): Name of the management action to be executed.
* **managementGroupName**: string (Required): Name of the management group under which the action is to be executed.
* **payload**: [NamespaceAssetExecuteActionRequestPayload](#namespaceassetexecuteactionrequestpayload): Payload required for executing the management action.

## NamespaceAssetExecuteActionRequestPayload
### Properties
### Additional Properties
* **Additional Properties Type**: any

## NamespaceAssetExecuteActionResponse
### Properties
* **assetResourceId**: string (Required): Resource ID of the asset on which the management action was executed.
* **error**: [Error](#error): Error if the execute action operation is not successful.
* **managementActionName**: string (Required): Name of the management action that was executed.
* **managementGroupName**: string (Required): Name of the management group under which the action was executed.
* **response**: string: Response from the asset regarding the management action execution.
* **status**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (Required, ReadOnly): Status of the management action execution.

## NamespaceAssetProperties
### Properties
* **assetTypeRefs**: string[]: URIs or type definition IDs.
* **attributes**: [NamespaceAssetPropertiesAttributes](#namespaceassetpropertiesattributes): A set of key-value pairs that contain custom attributes set by the customer.
* **datasets**: [NamespaceDataset](#namespacedataset)[]: Array of datasets that are part of the asset. Each dataset describes the data points that make up the set.
* **defaultDatasetsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here.
* **defaultDatasetsDestinations**: [DatasetDestination](#datasetdestination)[]: Default destinations for a dataset.
* **defaultEventsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
* **defaultEventsDestinations**: [EventDestination](#eventdestination)[]: Default destinations for an event.
* **defaultManagementGroupsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all management groups. Each management group can have its own configuration that overrides the default settings here.
* **defaultStreamsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all streams. Each stream can have its own configuration that overrides the default settings here.
* **defaultStreamsDestinations**: [StreamDestination](#streamdestination)[]: Default destinations for a stream.
* **description**: string: Human-readable description of the asset.
* **deviceRef**: [DeviceRef](#deviceref) (Required): Reference to the device that provides data for this asset. Must provide device name & endpoint on the device to use.
* **discoveredAssetRefs**: string[]: Reference to a list of discovered assets. Populated only if the asset has been created from discovery flow. Discovered asset names must be provided.
* **displayName**: string: Human-readable display name.
* **documentationUri**: string: Asset documentation reference.
* **enabled**: bool: Enabled/disabled status of the asset.
* **eventGroups**: [NamespaceEventGroup](#namespaceeventgroup)[]: Array of event groups that are part of the asset. Each event group can have per-event group configuration.
* **externalAssetId**: string: Asset ID provided by the customer.
* **hardwareRevision**: string: Asset hardware revision number.
* **lastTransitionTime**: string (ReadOnly): A timestamp (in UTC) that is updated each time the resource is modified.
* **managementGroups**: [ManagementGroup](#managementgroup)[]: Array of management groups that are part of the asset. Each management group can have a per-group configuration.
* **manufacturer**: string: Asset manufacturer.
* **manufacturerUri**: string: Asset manufacturer URI.
* **model**: string: Asset model.
* **productCode**: string: Asset product code.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **serialNumber**: string: Asset serial number.
* **softwareRevision**: string: Asset software revision number.
* **status**: [NamespaceAssetStatus](#namespaceassetstatus) (ReadOnly): Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
* **streams**: [NamespaceStream](#namespacestream)[]: Array of streams that are part of the asset. Each stream can have a per-stream configuration.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable ID.
* **version**: int (ReadOnly): An integer that is incremented each time the resource is modified.

## NamespaceAssetPropertiesAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: any

## NamespaceAssetStatus
### Properties
* **config**: [StatusConfig](#statusconfig) (ReadOnly): Defines the asset status config properties.
* **datasets**: [NamespaceAssetStatusDataset](#namespaceassetstatusdataset)[] (ReadOnly): Array of dataset statuses that describe the status of each dataset.
* **eventGroups**: [NamespaceAssetStatusEventGroup](#namespaceassetstatuseventgroup)[] (ReadOnly): Array of event group statuses that describe the status of each event group.
* **healthState**: [HealthState](#healthstate) (ReadOnly): The details about the runtime health state of the asset.
* **managementGroups**: [NamespaceAssetStatusManagementGroup](#namespaceassetstatusmanagementgroup)[] (ReadOnly): Array of management group statuses that describe the status of each management group.
* **streams**: [NamespaceAssetStatusStream](#namespaceassetstatusstream)[] (ReadOnly): Array of stream statuses that describe the status of each stream.

## NamespaceAssetStatusDataset
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Object to transfer and persist errors that originate from the edge.
* **messageSchemaReference**: [NamespaceMessageSchemaReference](#namespacemessageschemareference) (ReadOnly): The message schema reference object.
* **name**: string (Required, ReadOnly): The name of the dataset. Must be unique within the status.datasets array. This name is used to correlate between the spec and status dataset information.

## NamespaceAssetStatusEvent
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Object to transfer and persist errors that originate from the edge.
* **messageSchemaReference**: [NamespaceMessageSchemaReference](#namespacemessageschemareference) (ReadOnly): The message schema reference object.
* **name**: string (Required, ReadOnly): The name of the event. Must be unique within the status.events array. This name is used to correlate between the spec and status event information.

## NamespaceAssetStatusEventGroup
### Properties
* **events**: [NamespaceAssetStatusEvent](#namespaceassetstatusevent)[] (ReadOnly): Array of event statuses that describe the status of each event in the event group.
* **name**: string (Required, ReadOnly): The name of the event group. Must be unique within the status.eventGroups array. This name is used to correlate between the spec and status event group information.

## NamespaceAssetStatusManagementAction
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Object to transfer and persist errors that originate from the edge.
* **name**: string (Required, ReadOnly): The name of the action. Must be unique within the status.actions array. This name is used to correlate between the spec and status event information.
* **requestMessageSchemaReference**: [NamespaceMessageSchemaReference](#namespacemessageschemareference) (ReadOnly): The request message schema reference object for the action.
* **responseMessageSchemaReference**: [NamespaceMessageSchemaReference](#namespacemessageschemareference) (ReadOnly): The response message schema reference object for the action.

## NamespaceAssetStatusManagementGroup
### Properties
* **actions**: [NamespaceAssetStatusManagementAction](#namespaceassetstatusmanagementaction)[] (ReadOnly): Array of action statuses that describe the status of each action.
* **name**: string (Required, ReadOnly): The name of the management group. Must be unique within the status.managementGroups array. This name is used to correlate between the spec and status event information.

## NamespaceAssetStatusStream
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Object to transfer and persist errors that originate from the edge.
* **messageSchemaReference**: [NamespaceMessageSchemaReference](#namespacemessageschemareference) (ReadOnly): The message schema reference object.
* **name**: string (Required, ReadOnly): The name of the stream. Must be unique within the status.streams array. This name is used to correlate between the spec and status event information.

## NamespaceDataset
### Properties
* **dataPoints**: [NamespaceDatasetDataPoint](#namespacedatasetdatapoint)[]: Array of data points that are part of the dataset. Each data point can have per-data point configuration.
* **datasetConfiguration**: string: Stringified JSON that contains connector-specific JSON string that describes configuration for the specific dataset.
* **dataSource**: string: Reference to a data source for a given dataset.
* **destinations**: [DatasetDestination](#datasetdestination)[]: Destinations for a dataset.
* **name**: string (Required): Name of the dataset.
* **typeRef**: string: URI or type definition ID.

## NamespaceDatasetDataPoint
### Properties
* **dataPointConfiguration**: string: Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **dataSource**: string (Required): The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
* **name**: string (Required): The name of the data point.
* **typeRef**: string: URI or type definition ID.

## NamespaceDeviceProperties
### Properties
* **attributes**: [NamespaceDevicePropertiesAttributes](#namespacedevicepropertiesattributes): A set of key-value pairs that contain custom attributes set by the customer.
* **discoveredDeviceRef**: string: Reference to a device. Populated only if the device had been created from discovery flow. Discovered device name must be provided.
* **enabled**: bool: Indicates if the resource is enabled or not.
* **endpoints**: [MessagingEndpoints](#messagingendpoints): Property bag containing the device's unassigned and assigned endpoints.
* **externalDeviceId**: string: The Device ID provided by the customer.
* **lastTransitionTime**: string (ReadOnly): A timestamp (in UTC) that is updated each time the resource is modified.
* **manufacturer**: string: Device manufacturer.
* **model**: string: Device model.
* **operatingSystem**: string: Device operating system.
* **operatingSystemVersion**: string: Device operating system version.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **status**: [DeviceStatus](#devicestatus) (ReadOnly): Device status updates.
* **uuid**: string (ReadOnly): A unique identifier for the device.
* **version**: int (ReadOnly): An integer that is incremented each time the resource is modified.

## NamespaceDevicePropertiesAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: any

## NamespaceDiscoveredAssetProperties
### Properties
* **assetTypeRefs**: string[]: URIs or type definition IDs.
* **attributes**: [NamespaceDiscoveredAssetPropertiesAttributes](#namespacediscoveredassetpropertiesattributes): A set of key-value pairs that contain custom attributes.
* **datasets**: [NamespaceDiscoveredDataset](#namespacediscovereddataset)[]: Array of datasets that are part of the asset. Each dataset spec describes the data points that make up the set.
* **defaultDatasetsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here.
* **defaultDatasetsDestinations**: [DatasetDestination](#datasetdestination)[]: Default destinations for a dataset.
* **defaultEventsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
* **defaultEventsDestinations**: [EventDestination](#eventdestination)[]: Default destinations for an event.
* **defaultManagementGroupsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all management groups. Each management group can have its own configuration that overrides the default settings here.
* **defaultStreamsConfiguration**: string: Stringified JSON that contains connector-specific default configuration for all streams. Each stream can have its own configuration that overrides the default settings here.
* **defaultStreamsDestinations**: [StreamDestination](#streamdestination)[]: Default destinations for a stream.
* **description**: string: Human-readable description of the asset.
* **deviceRef**: [DeviceRef](#deviceref) (Required): Reference to the device that provides data for this asset. Must provide device name & endpoint on the device to use.
* **discoveryId**: string (Required): Identifier used to detect changes in the asset.
* **displayName**: string: Human-readable display name.
* **documentationUri**: string: Asset documentation reference.
* **eventGroups**: [NamespaceDiscoveredEventGroup](#namespacediscoveredeventgroup)[]: Array of event groups that are part of the asset. Each event group can have per-event group configuration.
* **externalAssetId**: string: Asset ID provided by the customer.
* **hardwareRevision**: string: Asset hardware revision number.
* **managementGroups**: [NamespaceDiscoveredManagementGroup](#namespacediscoveredmanagementgroup)[]: Array of management groups that are part of the asset. Each management group can have a per-group configuration.
* **manufacturer**: string: Asset manufacturer.
* **manufacturerUri**: string: Asset manufacturer URI.
* **model**: string: Asset model.
* **productCode**: string: Asset product code.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **serialNumber**: string: Asset serial number.
* **softwareRevision**: string: Asset software revision number.
* **streams**: [NamespaceDiscoveredStream](#namespacediscoveredstream)[]: Array of streams that are part of the asset. Each stream can have a per-stream configuration.
* **version**: int (Required): An integer that is incremented each time the resource is modified.

## NamespaceDiscoveredAssetPropertiesAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: any

## NamespaceDiscoveredDataset
### Properties
* **dataPoints**: [NamespaceDiscoveredDatasetDataPoint](#namespacediscovereddatasetdatapoint)[]: Array of data points that are part of the dataset. Each data point can have per-data point configuration.
* **datasetConfiguration**: string: Stringified JSON that contains connector-specific properties that describes configuration for the specific dataset.
* **dataSource**: string: Reference to a data source for a given dataset.
* **destinations**: [DatasetDestination](#datasetdestination)[]: Destinations for a dataset.
* **lastUpdatedOn**: string: Timestamp (in UTC) indicating when the dataset was added or modified.
* **name**: string (Required): Name of the dataset.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredDatasetDataPoint
### Properties
* **dataPointConfiguration**: string: Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **dataSource**: string (Required): The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
* **lastUpdatedOn**: string: UTC timestamp indicating when the data point was added or modified.
* **name**: string (Required): The name of the data point.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredDeviceProperties
### Properties
* **attributes**: [NamespaceDiscoveredDevicePropertiesAttributes](#namespacediscovereddevicepropertiesattributes): A set of key-value pairs that contain custom attributes.
* **discoveryId**: string (Required): Identifier used to detect changes in the discovered device.
* **endpoints**: [DiscoveredMessagingEndpoints](#discoveredmessagingendpoints): Endpoints for discovered devices.
* **externalDeviceId**: string: A device ID that represents the device in a system external to Azure. Unique within scope of an Azure tenant.
* **manufacturer**: string: Device manufacturer.
* **model**: string: Device model.
* **operatingSystem**: string: Device operating system name.
* **operatingSystemVersion**: string: Device operating system version.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **version**: int (Required): An integer that is incremented each time the resource is modified.

## NamespaceDiscoveredDevicePropertiesAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: any

## NamespaceDiscoveredEvent
### Properties
* **dataSource**: string: Reference to a data source for a given event.
* **destinations**: [EventDestination](#eventdestination)[]: Destinations for an event.
* **eventConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **lastUpdatedOn**: string: UTC timestamp indicating when the event was added or modified.
* **name**: string (Required): The name of the event.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredEventGroup
### Properties
* **dataSource**: string: The address of the notifier of the event group in the asset (e.g. URL) so that a client can access the event group on the asset.
* **defaultDestinations**: [EventDestination](#eventdestination)[]: Destinations for events. Default destinations when destinations is not defined at the event level.
* **eventGroupConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event group. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **events**: [NamespaceDiscoveredEvent](#namespacediscoveredevent)[]: Array of events that are part of the event group.
* **name**: string (Required): The name of the event group.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredManagementAction
### Properties
* **actionConfiguration**: string: Stringified JSON that contains connector-specific configuration for the action.
* **actionType**: 'Call' | 'Read' | 'Write' | string: The type of the action.
* **lastUpdatedOn**: string: Timestamp (in UTC) indicating when the management action was added or modified.
* **name**: string (Required): Name of the action.
* **targetUri**: string (Required): The target URI on which a client can invoke the specific action.
* **timeoutInSeconds**: int: Response timeout for the action.
* **topic**: string: The MQTT topic path on which a client will receive the request for the action.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredManagementGroup
### Properties
* **actions**: [NamespaceDiscoveredManagementAction](#namespacediscoveredmanagementaction)[]: Array of actions that are part of the management group. Each action can have an individual configuration.
* **dataSource**: string: Reference to a data source for a given management group.
* **defaultTimeoutInSeconds**: int: Default response timeout for all actions that are part of the management group.
* **defaultTopic**: string: Default MQTT topic path on which a client will receive the request for all actions that are part of the management group.
* **lastUpdatedOn**: string: Timestamp (in UTC) indicating when the management group was added or modified.
* **managementGroupConfiguration**: string: Stringified JSON that contains connector-specific configuration for the management group.
* **name**: string (Required): Name of the management group.
* **typeRef**: string: URI or type definition ID.

## NamespaceDiscoveredStream
### Properties
* **destinations**: [StreamDestination](#streamdestination)[]: Destinations for a stream.
* **lastUpdatedOn**: string: Timestamp (in UTC) indicating when the stream was added or modified.
* **name**: string (Required): Name of the stream definition.
* **streamConfiguration**: string: Stringified JSON that contains connector-specific configuration for the specific stream.
* **typeRef**: string: URI or type definition ID.

## NamespaceEvent
### Properties
* **dataSource**: string: Reference to a data source for a given event.
* **destinations**: [EventDestination](#eventdestination)[]: Destinations for an event.
* **eventConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **name**: string (Required): The name of the event.
* **typeRef**: string: URI or type definition ID.

## NamespaceEventGroup
### Properties
* **dataSource**: string: The address of the notifier of the event group in the asset (e.g. URL) so that a client can access the event group on the asset.
* **defaultDestinations**: [EventDestination](#eventdestination)[]: Destinations for events. Default destinations when destinations is not defined at the event level.
* **eventGroupConfiguration**: string: Stringified JSON that contains connector-specific configuration for the event group. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
* **events**: [NamespaceEvent](#namespaceevent)[]: Array of events that are part of the event group.
* **name**: string (Required): The name of the event group.
* **typeRef**: string: URI or type definition ID.

## NamespaceLinkingError
### Properties
* **code**: string (ReadOnly): Error code that classifies the linking failure.
* **message**: string (ReadOnly): Human-readable message describing the linking failure.

## NamespaceMessageSchemaReference
### Properties
* **schemaName**: string (Required, ReadOnly): The message schema name.
* **schemaRegistryNamespace**: string (Required, ReadOnly): The message schema registry namespace.
* **schemaVersion**: string (Required, ReadOnly): The message schema version.

## NamespaceMigrateRequest
### Properties
* **resourceIds**: string[]: List of asset resources to be migrated.
* **scope**: 'Resources' | string: Scope of the migrate resources operation.

## NamespaceMigrateResponse
### Properties
* **migrateResults**: [MigrateResult](#migrateresult)[]: List of migrate results containing result of each asset migrate operation.

## NamespaceObservability
### Properties
* **enabled**: bool: Whether observability features are enabled. When omitted during create or
replace, the effective value is false. On PATCH, omission preserves the
current value. Setting this property to false prevents new Live Data
sessions while preserving the configured endpoints.
* **endpoints**: [NamespaceObservabilityEndpoints](#namespaceobservabilityendpoints): Event Grid MQTT endpoints keyed by custom location resource ID. The key is
the full ARM resource ID of the Azure Custom Location for one AIO site.
On PATCH, omission preserves the existing endpoint map. Supplying this
property replaces the complete endpoint map.

## NamespaceObservabilityEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [ObservabilityEndpoint](#observabilityendpoint)

## NamespaceProperties
### Properties
* **management**: [Management](#management): Assigned and unassigned management endpoints.
* **messaging**: [Messaging](#messaging): Assigned and unassigned messaging endpoints.
* **observability**: [NamespaceObservability](#namespaceobservability): The observability configuration associated with this namespace.
On create or replace, this property replaces the complete observability
configuration. Omitting it removes any existing configuration. On PATCH,
omitting it preserves the existing configuration.
* **outboundIdentity**: [OutboundIdentity](#outboundidentity): The identity used for outbound calls from the ADR namespace. If not specified and the namespace has a system-assigned identity enabled, the system-assigned identity is used by default.
* **provisioning**: [NamespaceProvisioning](#namespaceprovisioning): The provisioning endpoints associated with this namespace.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **updating**: [NamespaceUpdating](#namespaceupdating): The device update endpoints associated with this namespace.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable ID.

## NamespaceProvisioning
### Properties
* **endpoints**: [NamespaceProvisioningEndpoints](#namespaceprovisioningendpoints): Dictionary of provisioning endpoints.

## NamespaceProvisioningEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [ProvisioningEndpoint](#provisioningendpoint)

## NamespaceStream
### Properties
* **destinations**: [StreamDestination](#streamdestination)[]: Destinations for a stream.
* **name**: string (Required): Name of the stream definition.
* **streamConfiguration**: string: Stringified JSON that contains connector-specific configuration for the specific stream.
* **typeRef**: string: URI or type definition ID.

## NamespaceUpdating
### Properties
* **endpoints**: [NamespaceUpdatingEndpoints](#namespaceupdatingendpoints): Dictionary of device update endpoints.

## NamespaceUpdatingEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [UpdatingEndpoint](#updatingendpoint)

## ObservabilityEndpoint
### Properties
* **address**: string (Required): The Event Grid namespace MQTT hostname.
* **endpointType**: 'Microsoft.EventGrid/namespaces' | string (Required): The Azure resource type of the observability endpoint.
* **resourceId**: string (Required): The full Azure resource ID of the Event Grid namespace.
* **scopeId**: string (Required): The Azure IoT Operations instance scope ID used for MQTT authentication and Live Data topic construction.

## OnboardingUpdateJobDefinition
### Properties
* **schedulingType**: 'Continuous' | string (Required): The scheduling type for the OnboardingUpdate job. OnboardingUpdate jobs are always continuous: ADU deployments target all compatible devices until superseded, canceled, or the parent job is deleted.
* **updateResourceId**: string (Required): The update resource URI for the job.

## OutboundEndpoints
### Properties
* **assigned**: [OutboundEndpointsAssigned](#outboundendpointsassigned) (Required): Endpoints the device can connect to.
* **unassigned**: [OutboundEndpointsUnassigned](#outboundendpointsunassigned): Set of most recently removed endpoints.

## OutboundEndpointsAssigned
### Properties
### Additional Properties
* **Additional Properties Type**: [DeviceMessagingEndpoint](#devicemessagingendpoint)

## OutboundEndpointsUnassigned
### Properties
### Additional Properties
* **Additional Properties Type**: [DeviceMessagingEndpoint](#devicemessagingendpoint)

## OutboundIdentity
### Properties
* **type**: 'SystemAssigned' | 'UserAssigned' | string (Required): The identity type.
* **userAssignedIdentity**: string: The resource ID of the user-assigned managed identity. Required when type is UserAssigned.

## ProvisioningEndpoint
### Properties
* **endpointType**: 'Microsoft.Devices/provisioningServices' | string (Required): Type of provisioning resource.
* **inboundCallerIdentity**: [InboundCallerIdentity](#inboundcalleridentity) (Required): The identity the linked resource uses to call the ADR namespace.
* **linkingError**: [NamespaceLinkingError](#namespacelinkingerror) (ReadOnly): The error detail surfaced when this provisioning endpoint is in the Failed linking state.
* **linkingState**: 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): The linking state of this provisioning endpoint.
* **resourceId**: string (Required): The provisioning endpoint Azure resource Id.

## RegistryDeviceProperties
### Properties
* **deviceTypeRefs**: (string {maxLength: 512})[] {maxLength: 1}: Pointers to type metadata about this device (e.g., The WoT Thing Model for the device).
* **enablementState**: 'Disabled' | 'Enabled' | string (Required): Whether the device is enabled or disabled. A disabled device cannot send messages, be updated, or reprovision.
* **externalDeviceId**: string: A Device ID provided by the customer.
* **hardwareRevision**: string: Device hardware revision.
* **manufacturer**: string: Device manufacturer.
* **model**: string: Device model.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **softwareRevision**: string: Device software revision.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable ID.

## Report
* **Discriminator**: reportType

### Base Properties
* **expiresAt**: string (Required, ReadOnly): The UTC timestamp at which the report will no longer be retained and available.
* **generatedAt**: string (Required, ReadOnly): The UTC timestamp at which the report was generated.
* **reportTarget**: string (ReadOnly): The scope the report was generated against.

### GroupBestUpdatesComplianceReport
#### Properties
* **bestUpdates**: [BestUpdate](#bestupdate)[] (Required, ReadOnly): The best-available updates for devices in the group. May be empty.
* **reportType**: 'GroupBestUpdatesComplianceReport' (Required): The type of report.
* **updateCompliance**: [GroupUpdateCompliance](#groupupdatecompliance) (Required, ReadOnly): Group-level update compliance counters.

### GroupInstallableUpdatesReport
#### Properties
* **installableUpdatesAndTargetDevices**: [InstallableUpdatesForTargetDevices](#installableupdatesfortargetdevices)[] (Required, ReadOnly): Installable updates grouped by the devices they target. May be empty.
* **reportType**: 'GroupInstallableUpdatesReport' (Required): The type of report.

### NamespaceUpdateComplianceReport
#### Properties
* **newUpdatesAvailableDeviceCount**: int (Required, ReadOnly): Number of updateable devices for which a newer update is available but not yet applied.
* **onLatestUpdateDeviceCount**: int (Required, ReadOnly): Number of updateable devices that are currently on the latest available update.
* **reportType**: 'NamespaceUpdateComplianceReport' (Required): The type of report.
* **totalNotUpdateableDeviceCount**: int (Required, ReadOnly): Total number of devices in the namespace that are not eligible for updates.
* **totalUpdateableDeviceCount**: int (Required, ReadOnly): Total number of devices in the namespace that are eligible for updates.
* **updatesInProgressDeviceCount**: int (Required, ReadOnly): Number of updateable devices currently being updated to the latest available update.


## ReportSelector
* **Discriminator**: reportType

### Base Properties
* **reportTarget**: string: The target of this report (e.g. group resource).

### GroupBestUpdatesComplianceReportRequest
#### Properties
* **reportType**: 'GroupBestUpdatesComplianceReport' (Required): The type of report.

### GroupInstallableUpdatesReportRequest
#### Properties
* **reportType**: 'GroupInstallableUpdatesReport' (Required): The type of report.

### NamespaceUpdateComplianceReportRequest
#### Properties
* **reportType**: 'NamespaceUpdateComplianceReport' (Required): The type of report.


## SchemaProperties
### Properties
* **description**: string: Human-readable description of the schema.
* **displayName**: string: Human-readable display name.
* **format**: 'Delta/1.0' | 'JsonLD/1.1' | 'JsonSchema/draft-07' | string (Required): Format of the schema.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **schemaType**: 'MessageSchema' | 'ThingDescription' | 'ThingModel' | string (Required): Type of the schema.
* **tags**: [SchemaPropertiesTags](#schemapropertiestags): Schema tags.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable id.

## SchemaPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SchemaRegistryProperties
### Properties
* **description**: string: Human-readable description of the schema registry.
* **displayName**: string: Human-readable display name.
* **namespace**: string {maxLength: 32, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required): Schema registry namespace. Uniquely identifies a schema registry within a tenant.
* **outboundIdentity**: [OutboundIdentity](#outboundidentity): The identity used for outbound calls from the ADR schema registry. If not specified and the schema registry has a system-assigned identity enabled, the system-assigned identity is used by default.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **storageAccountContainerUrl**: string (Required): The Storage Account's Container URL where schemas will be stored.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable id.

## SchemaVersionProperties
### Properties
* **description**: string: Human-readable description of the schema.
* **hash**: string (ReadOnly): Hash of the schema content.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **schemaContent**: string (Required): Schema content.
* **uuid**: string (ReadOnly): Globally unique, immutable, non-reusable id.

## SelfSignedThumbprints
### Properties
* **primaryThumbprint**: string (Required): Primary certificate thumbprint.
* **secondaryThumbprint**: string (Required): Secondary certificate thumbprint.

## SoftwareUpdateJobDefinition
### Properties
* **schedulingType**: 'Continuous' | string (Required): The scheduling type for the SoftwareUpdate job. SoftwareUpdate jobs are always continuous: ADU deployments target the group until superseded, canceled, or the parent job is deleted.
* **updateResourceId**: string (Required): The update resource URI for the job.

## StatusConfig
### Properties
* **error**: [StatusError](#statuserror) (ReadOnly): Object to transfer and persist errors that originate from the edge.
* **lastTransitionTime**: string (ReadOnly): A read-only timestamp indicating the last time the configuration has been modified from the perspective of the current actual (edge) state of the CRD. Edge would be the only writer of this value and would sync back up to the cloud.
* **version**: int (ReadOnly): A read-only incremental counter indicating the number of times the configuration has been modified from the perspective of the current actual (edge) state of the CRD. Edge would be the only writer of this value and would sync back up to the cloud. In steady state, this should equal version.

## StatusError
### Properties
* **code**: string (ReadOnly): Error code for classification of errors (ex: '400', '404', '500', etc.).
* **details**: [ErrorDetails](#errordetails)[] (ReadOnly): Array of error details that describe the status of each error.
* **message**: string (ReadOnly): Human-readable helpful error message to provide additional context for error (e.g.,: “Capability ID 'foo' does not exist”).

## StorageDestinationConfiguration
### Properties
* **path**: string (Required): The storage destination path.

## StreamDestination
* **Discriminator**: target

### Base Properties

### StreamMqttDestination
#### Properties
* **configuration**: [MqttDestinationConfiguration](#mqttdestinationconfiguration) (Required): The MQTT destination configuration.
* **target**: 'Mqtt' (Required): Target destination.

### StreamStorageDestination
#### Properties
* **configuration**: [StorageDestinationConfiguration](#storagedestinationconfiguration) (Required): The storage destination configuration.
* **target**: 'Storage' (Required): Target destination.


## SymmetricKeyCredentials
### Properties
* **primaryKey**: string {sensitive} (Required): The primary symmetric key.
* **secondaryKey**: string {sensitive} (Required): The secondary symmetric key.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetDevices
### Properties
* **agentProfile**: int (Required, ReadOnly): The agent profile that the targeted devices must implement.
* **compatProperties**: [TargetDevicesCompatProperties](#targetdevicescompatproperties) (Required, ReadOnly): Free-form compatibility properties (e.g. manufacturer, model) used to match devices.

## TargetDevicesCompatProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Topic
### Properties
* **path**: string (Required): The topic path for messages published to an MQTT broker.
* **retain**: 'Keep' | 'Never' | string: When set to 'Keep', messages published to an MQTT broker will have the retain flag set. Default: 'Never'.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrustSettings
### Properties
* **trustList**: string: Defines a secret reference for certificates to trust.

## UpdateJobInfo
### Properties
* **installResult**: [InstallResult](#installresult): The result of installing the update on the device, if available.
* **state**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (Required, ReadOnly): The current state of the update job.
* **updateId**: [DeviceUpdateId](#deviceupdateid) (Required): The identifier of the update being applied by the job.
* **workflowId**: string (Required): The identifier of the update job workflow.

## UpdateStepResult
### Properties
* **extendedResultCodes**: string {maxLength: 1024} (Required): Step-level extended result codes. Same format as `InstallResult.extendedResultCodes`.
* **failureOrigin**: 'ADU_CLOUD_SERVICE' | 'ADU_MANAGED_RESOURCE' | 'AGENT_CORE' | 'AGENT_DEPENDENCY' | 'AGENT_EXTENSION' | 'DEVICE' | 'NOT_APPLICABLE' | 'OTHER' | string (Required): Best-effort hint identifying which subsystem produced the failure for this step. Value is `NOT_APPLICABLE` for successful install.
* **outcome**: 'CANCELED' | 'FAILED' | 'IN_PROGRESS' | 'SKIPPED' | 'SUCCEEDED' | string (Required, ReadOnly): Authoritative terminal outcome of this step.
* **resultCode**: int (Required): Step-level install result code. Same semantics as `InstallResult.resultCode`.
* **resultDetails**: string {maxLength: 1024}: Human-readable result details for this step.
* **updateId**: [DeviceUpdateId](#deviceupdateid) (Required): The identifier of the leaf update worked on by this step. ADU resolves this from the manifest's `instructions.steps` (inline step → parent updateId; reference step → child updateId).

## UpdatingEndpoint
### Properties
* **endpointType**: 'Microsoft.DeviceUpdate/updateInstances' | string (Required): Type of device update resource.
* **inboundCallerIdentity**: [InboundCallerIdentity](#inboundcalleridentity) (Required): The identity the linked resource uses to call the ADR namespace.
* **linkingError**: [NamespaceLinkingError](#namespacelinkingerror) (ReadOnly): The error detail surfaced when this device update endpoint is in the Failed linking state.
* **linkingState**: 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): The linking state of this device update endpoint.
* **resourceId**: string (Required): The device update endpoint Azure resource Id.
* **serviceAddress**: string (ReadOnly): The service-facing endpoint address.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UsernamePasswordCredentials
### Properties
* **passwordSecretName**: string (Required): The name of the secret containing the password.
* **usernameSecretName**: string (Required): The name of the secret containing the username.

## X509CertificateCredentials
### Properties
* **certificateSecretName**: string (Required): The name of the secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).
* **intermediateCertificatesSecretName**: string: The name of the secret containing the combined intermediate certificates in PEM format.
* **keySecretName**: string: The name of the secret containing the certificate private key in PEM or DER format.

## X509Credentials
### Properties
* **certificateSecretName**: string (Required): The name of the secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).

