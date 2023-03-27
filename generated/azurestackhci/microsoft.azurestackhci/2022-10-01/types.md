# Microsoft.AzureStackHCI @ 2022-10-01

## Resource Microsoft.AzureStackHCI/clusters@2022-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity of Cluster resource
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Cluster properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureStackHCI/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/arcSettings@2022-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArcSettingProperties](#arcsettingproperties): ArcSetting properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/arcSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2022-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionProperties](#extensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/arcSettings/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers@2022-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublisherProperties](#publisherproperties) (ReadOnly): Publisher properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers/offers@2022-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OfferProperties](#offerproperties) (ReadOnly): Offer properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers/offers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/publishers/offers/skus@2022-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuProperties](#skuproperties) (ReadOnly): SKU properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/publishers/offers/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updates@2022-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateProperties](#updateproperties) (ReadOnly): Update properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updates/updateRuns@2022-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateRunProperties](#updaterunproperties) (ReadOnly): Describes Update Run Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updates/updateRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStackHCI/clusters/updateSummaries@2022-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateSummariesProperties](#updatesummariesproperties) (ReadOnly): Update summaries properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureStackHCI/clusters/updateSummaries' (ReadOnly, DeployTimeConstant): The resource type

## ArcSettingProperties
### Properties
* **aggregateState**: 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Succeeded' | 'Updating' | string (ReadOnly): Aggregate state of Arc agent across the nodes in this HCI cluster.
* **arcApplicationClientId**: string: App id of arc AAD identity.
* **arcApplicationObjectId**: string: Object id of arc AAD identity.
* **arcApplicationTenantId**: string: Tenant id of arc AAD identity.
* **arcInstanceResourceGroup**: string: The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources.
* **arcServicePrincipalObjectId**: string: Object id of arc AAD service principal.
* **connectivityProperties**: any: contains connectivity related configuration for ARC resources
* **perNodeDetails**: [PerNodeState](#pernodestate)[] (ReadOnly): State of Arc agent in each of the nodes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state of the ArcSetting proxy resource.

## ClusterDesiredProperties
### Properties
* **diagnosticLevel**: 'Basic' | 'Enhanced' | 'Off' | string: Desired level of diagnostic data emitted by the cluster.
* **windowsServerSubscription**: 'Disabled' | 'Enabled' | string: Desired state of Windows Server Subscription.

## ClusterNode
### Properties
* **coreCount**: int (ReadOnly): Number of physical cores on the cluster node.
* **id**: int (ReadOnly): Id of the node in the cluster.
* **manufacturer**: string (ReadOnly): Manufacturer of the cluster node hardware.
* **memoryInGiB**: int (ReadOnly): Total available memory on the cluster node (in GiB).
* **model**: string (ReadOnly): Model name of the cluster node hardware.
* **name**: string (ReadOnly): Name of the cluster node.
* **nodeType**: 'FirstParty' | 'ThirdParty' | string (ReadOnly): Type of the cluster node hardware.
* **osDisplayVersion**: string (ReadOnly): Display version of the operating system running on the cluster node.
* **osName**: string (ReadOnly): Operating system running on the cluster node.
* **osVersion**: string (ReadOnly): Version of the operating system running on the cluster node.
* **serialNumber**: string (ReadOnly): Immutable id of the cluster node.
* **windowsServerSubscription**: 'Disabled' | 'Enabled' | string (ReadOnly): State of Windows Server Subscription.

## ClusterProperties
### Properties
* **aadApplicationObjectId**: string: Object id of cluster AAD identity.
* **aadClientId**: string: App id of cluster AAD identity.
* **aadServicePrincipalObjectId**: string: Id of cluster identity service principal.
* **aadTenantId**: string: Tenant id of cluster AAD identity.
* **billingModel**: string (ReadOnly): Type of billing applied to the resource.
* **cloudId**: string (ReadOnly): Unique, immutable resource id.
* **cloudManagementEndpoint**: string: Endpoint configured for management from the Azure portal.
* **desiredProperties**: [ClusterDesiredProperties](#clusterdesiredproperties): Desired properties of the cluster.
* **lastBillingTimestamp**: string (ReadOnly): Most recent billing meter timestamp.
* **lastSyncTimestamp**: string (ReadOnly): Most recent cluster sync timestamp.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **registrationTimestamp**: string (ReadOnly): First cluster sync timestamp.
* **reportedProperties**: [ClusterReportedProperties](#clusterreportedproperties) (ReadOnly): Properties reported by cluster agent.
* **serviceEndpoint**: string (ReadOnly): Region specific DataPath Endpoint of the cluster.
* **softwareAssuranceProperties**: [SoftwareAssuranceProperties](#softwareassuranceproperties): Software Assurance properties of the cluster.
* **status**: 'ConnectedRecently' | 'Disconnected' | 'Error' | 'NotConnectedRecently' | 'NotYetRegistered' | string (ReadOnly): Status of the cluster agent.
* **trialDaysRemaining**: int (ReadOnly): Number of days remaining in the trial period.

## ClusterReportedProperties
### Properties
* **clusterId**: string (ReadOnly): Unique id generated by the on-prem cluster.
* **clusterName**: string (ReadOnly): Name of the on-prem cluster connected to this resource.
* **clusterVersion**: string (ReadOnly): Version of the cluster software.
* **diagnosticLevel**: 'Basic' | 'Enhanced' | 'Off' | string: Level of diagnostic data emitted by the cluster.
* **imdsAttestation**: 'Disabled' | 'Enabled' | string (ReadOnly): IMDS attestation status of the cluster.
* **lastUpdated**: string (ReadOnly): Last time the cluster reported the data.
* **nodes**: [ClusterNode](#clusternode)[] (ReadOnly): List of nodes reported by the cluster.

## ExtensionParameters
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **protectedSettings**: any: Protected settings (may contain secrets).
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## ExtensionProperties
### Properties
* **aggregateState**: 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'PartiallyConnected' | 'PartiallySucceeded' | 'Succeeded' | 'Updating' | string (ReadOnly): Aggregate state of Arc Extensions across the nodes in this HCI cluster.
* **extensionParameters**: [ExtensionParameters](#extensionparameters): Parameters specific to this extension type.
* **perNodeExtensionDetails**: [PerNodeExtensionState](#pernodeextensionstate)[] (ReadOnly): State of Arc Extension in each of the nodes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state of the Extension proxy resource.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## OfferProperties
### Properties
* **content**: string: JSON serialized catalog content of the offer
* **contentVersion**: string: The API version of the catalog service used to serve the catalog content
* **provisioningState**: string (ReadOnly): Provisioning State
* **publisherId**: string: Identifier of the Publisher for the offer
* **skuMappings**: [SkuMappings](#skumappings)[]: Array of SKU mappings

## PackageVersionInfo
### Properties
* **lastUpdated**: string: Last time this component was updated.
* **packageType**: string: Package type
* **version**: string: Package version

## PerNodeExtensionState
### Properties
* **extension**: string (ReadOnly): Fully qualified resource ID for the particular Arc Extension on this node.
* **name**: string (ReadOnly): Name of the node in HCI Cluster.
* **state**: 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'Moving' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): State of Arc Extension in this node.

## PerNodeState
### Properties
* **arcInstance**: string (ReadOnly): Fully qualified resource ID for the Arc agent of this node.
* **name**: string (ReadOnly): Name of the Node in HCI Cluster
* **state**: 'Canceled' | 'Connected' | 'Creating' | 'Deleted' | 'Deleting' | 'Disconnected' | 'Error' | 'Failed' | 'Moving' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): State of Arc agent in this node.

## PublisherProperties
### Properties
* **provisioningState**: string (ReadOnly): Provisioning State

## SkuMappings
### Properties
* **catalogPlanId**: string: Identifier of the CatalogPlan for the sku
* **marketplaceSkuId**: string: Identifier for the sku
* **marketplaceSkuVersions**: string[]: Array of SKU versions available

## SkuProperties
### Properties
* **content**: string: JSON serialized catalog content of the sku offer
* **contentVersion**: string: The API version of the catalog service used to serve the catalog content
* **offerId**: string: Identifier of the Offer for the sku
* **provisioningState**: string (ReadOnly): Provisioning State
* **publisherId**: string: Identifier of the Publisher for the offer
* **skuMappings**: [SkuMappings](#skumappings)[]: Array of SKU mappings

## SoftwareAssuranceProperties
### Properties
* **lastUpdated**: string (ReadOnly): TimeStamp denoting the latest SA benefit applicability is validated.
* **softwareAssuranceIntent**: 'Disable' | 'Enable' | string: Customer Intent for Software Assurance Benefit.
* **softwareAssuranceStatus**: 'Disabled' | 'Enabled' | string: Status of the Software Assurance for the cluster.

## Step
### Properties
* **description**: string: More detailed description of the step.
* **endTimeUtc**: string: When the step reached a terminal state.
* **errorMessage**: string: Error message, specified if the step is in a failed state.
* **lastUpdatedTimeUtc**: string: Completion time of this step or the last completed sub-step.
* **name**: string: Name of the step.
* **startTimeUtc**: string: When the step started, or empty if it has not started executing.
* **status**: string: Status of the step, bubbled up from the ECE action plan for installation attempts. Values are: 'Success', 'Error', 'InProgress', and 'Unknown status'
* **steps**: [Step](#step)[]: Recursive model for child steps of this step.

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

## UpdatePrerequisite
### Properties
* **packageName**: string: Friendly name of the prerequisite.
* **updateType**: string: Updatable component type.
* **version**: string: Version of the prerequisite.

## UpdateProperties
### Properties
* **additionalProperties**: string: Extensible KV pairs serialized as a string. This is currently used to report the stamp OEM family and hardware model information when an update is flagged as Invalid for the stamp based on OEM type.
* **availabilityType**: 'Local' | 'Notify' | 'Online' | string: Indicates the way the update content can be downloaded.
* **description**: string: Description of the update.
* **displayName**: string: Display name of the Update
* **installedDate**: string: Date that the update was installed.
* **packagePath**: string: Path where the update package is available.
* **packageSizeInMb**: int: Size of the package. This value is a combination of the size from update metadata and size of the payload that results from the live scan operation for OS update content.
* **packageType**: string: Customer-visible type of the update.
* **prerequisites**: [UpdatePrerequisite](#updateprerequisite)[]: If update State is HasPrerequisite, this property contains an array of objects describing prerequisite updates before installing this update. Otherwise, it is empty.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state of the Updates proxy resource.
* **publisher**: string: Publisher of the update package.
* **releaseLink**: string: Link to release notes for the update.
* **state**: 'DownloadFailed' | 'Downloading' | 'HasPrerequisite' | 'HealthCheckFailed' | 'HealthChecking' | 'InstallationFailed' | 'Installed' | 'Installing' | 'Invalid' | 'NotApplicableBecauseAnotherUpdateIsInProgress' | 'Obsolete' | 'PreparationFailed' | 'Preparing' | 'Ready' | 'ReadyToInstall' | 'Recalled' | 'ScanFailed' | 'ScanInProgress' | string: State of the update as it relates to this stamp.
* **updateStateProperties**: [UpdateStateProperties](#updatestateproperties): Additional information regarding the state of the update. See definition of UpdateStateProperties type below for more details on this property.
* **version**: string: Version of the update.

## UpdateRunProperties
### Properties
* **duration**: string: Duration of the update run.
* **progress**: [Step](#step): Progress representation of the update run steps.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state of the UpdateRuns proxy resource.
* **state**: 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string: State of the update run.

## UpdateStateProperties
### Properties
* **notifyMessage**: string: Brief message with instructions for updates of AvailabilityType Notify.
* **progressPercentage**: int: Progress percentage of ongoing operation. Currently this property is only valid when the update is in the Downloading state, where it maps to how much of the update content has been downloaded.

## UpdateSummariesProperties
### Properties
* **currentVersion**: string: Current Solution Bundle version of the stamp.
* **hardwareModel**: string: Name of the hardware model.
* **oemFamily**: string: OEM family name.
* **packageVersions**: [PackageVersionInfo](#packageversioninfo)[]: Current version of each updatable component.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state of the UpdateSummaries proxy resource.
* **state**: 'AppliedSuccessfully' | 'NeedsAttention' | 'PreparationFailed' | 'PreparationInProgress' | 'Unknown' | 'UpdateAvailable' | 'UpdateFailed' | 'UpdateInProgress' | string: Overall update state of the stamp.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

