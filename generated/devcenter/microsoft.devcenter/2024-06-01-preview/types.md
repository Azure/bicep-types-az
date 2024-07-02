# Microsoft.DevCenter @ 2024-06-01-preview

## Resource Microsoft.DevCenter/devcenters@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed identity properties
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 26, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{2,25}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DevCenterProperties](#devcenterproperties): DevCenter properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/devcenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/attachednetworks@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AttachedNetworkConnectionProperties](#attachednetworkconnectionproperties): Attached NetworkConnection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/attachednetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/catalogs@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CatalogProperties](#catalogproperties): Catalog properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/catalogs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/catalogs/environmentDefinitions@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentDefinitionProperties](#environmentdefinitionproperties) (ReadOnly): Environment definition properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/catalogs/environmentDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/catalogs/tasks@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CustomizationTaskProperties](#customizationtaskproperties) (ReadOnly): Task properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/catalogs/tasks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/devboxdefinitions@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DevBoxDefinitionProperties](#devboxdefinitionproperties): Dev Box definition properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/devcenters/devboxdefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/encryptionSets@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed identity properties
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{2,25}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DevCenterEncryptionSetProperties](#devcenterencryptionsetproperties): Properties of a devcenter encryption set.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/devcenters/encryptionSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/environmentTypes@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentTypeProperties](#environmenttypeproperties): Properties of an environment type.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags): Resource tags.
* **type**: 'Microsoft.DevCenter/devcenters/environmentTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/galleries@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryProperties](#galleryproperties): Gallery properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/galleries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/galleries/images@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 80, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-.]{0,78}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties) (ReadOnly): Image properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/galleries/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/galleries/images/versions@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 5, maxLength: 32, pattern: "^[0-9]{1,10}[.][0-9]{1,10}[.][0-9]{1,10}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImageVersionProperties](#imageversionproperties) (ReadOnly): Image version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/galleries/images/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/networkConnections@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkProperties](#networkproperties): Properties of a Network Connection
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/networkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/networkConnections/healthChecks@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'latest' (Required, DeployTimeConstant): The resource name
* **properties**: [HealthCheckStatusDetailsProperties](#healthcheckstatusdetailsproperties) (ReadOnly): Health check status details properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/networkConnections/healthChecks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/plans@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PlanProperties](#planproperties): Plan properties
* **sku**: [Sku](#sku): The SKU for DevCenters created using this definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/plans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/plans/members@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PlanMemberProperties](#planmemberproperties): Plan member properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags): Resource tags.
* **type**: 'Microsoft.DevCenter/plans/members' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed identity properties
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Properties of a project.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/allowedEnvironmentTypes@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AllowedEnvironmentTypeProperties](#allowedenvironmenttypeproperties) (ReadOnly): Properties of an allowed environment type.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/projects/allowedEnvironmentTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/attachednetworks@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AttachedNetworkConnectionProperties](#attachednetworkconnectionproperties) (ReadOnly): Attached NetworkConnection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/projects/attachednetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/catalogs@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CatalogProperties](#catalogproperties): Catalog properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/projects/catalogs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/catalogs/environmentDefinitions@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentDefinitionProperties](#environmentdefinitionproperties) (ReadOnly): Environment definition properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/projects/catalogs/environmentDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/catalogs/imageDefinitions@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImageDefinitionProperties](#imagedefinitionproperties) (ReadOnly): Image Definition properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/projects/catalogs/imageDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/devboxdefinitions@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DevBoxDefinitionProperties](#devboxdefinitionproperties) (ReadOnly): Dev Box definition properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.DevCenter/projects/devboxdefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/environmentTypes@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed identity properties
* **location**: string: The geo-location for the environment type
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectEnvironmentTypeProperties](#projectenvironmenttypeproperties): Properties of an environment type.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags): Resource tags.
* **type**: 'Microsoft.DevCenter/projects/environmentTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/images@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 153, pattern: "^[a-zA-Z0-9~][a-zA-Z0-9-.~]{0,151}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties) (ReadOnly): Image properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/projects/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/images/versions@2024-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 5, maxLength: 32, pattern: "^[0-9]{1,10}[.][0-9]{1,10}[.][0-9]{1,10}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImageVersionProperties](#imageversionproperties) (ReadOnly): Image version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/projects/images/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/pools@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_.]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties): Pool properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/projects/pools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/pools/schedules@2024-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 100, pattern: "^[-\w]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleProperties](#scheduleproperties): Properties of a Schedule resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/projects/pools/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Function listSkus (Microsoft.DevCenter/projects@2024-06-01-preview)
* **Resource**: Microsoft.DevCenter/projects
* **ApiVersion**: 2024-06-01-preview
* **Output**: [SkuListResult](#skulistresult)

## AllowedEnvironmentTypeProperties
### Properties
* **displayName**: string (ReadOnly): The display name of the allowed environment type.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## AttachedNetworkConnectionProperties
### Properties
* **domainJoinType**: 'AzureADJoin' | 'HybridAzureADJoin' | 'None' | string (ReadOnly): AAD Join type of the network. This is populated based on the referenced Network Connection.
* **healthCheckStatus**: 'Failed' | 'Passed' | 'Pending' | 'Running' | 'Unknown' | 'Warning' | string (ReadOnly): Health check status values
* **networkConnectionId**: string (Required): The resource ID of the NetworkConnection you want to attach.
* **networkConnectionLocation**: string (ReadOnly): The geo-location where the NetworkConnection resource specified in 'networkConnectionResourceId' property lives.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## Capability
### Properties
* **name**: string (ReadOnly): Name of the capability.
* **value**: string (ReadOnly): Value of the capability.

## CatalogProperties
### Properties
* **adoGit**: [GitCatalog](#gitcatalog): Properties for an Azure DevOps catalog type.
* **connectionState**: 'Connected' | 'Disconnected' | string (ReadOnly): The connection state of the catalog.
* **gitHub**: [GitCatalog](#gitcatalog): Properties for a GitHub catalog type.
* **lastConnectionTime**: string (ReadOnly): When the catalog was last connected.
* **lastSyncStats**: [SyncStats](#syncstats) (ReadOnly): Stats of the latest synchronization.
* **lastSyncTime**: string (ReadOnly): When the catalog was last synced.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **syncState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): The synchronization state of the catalog.
* **syncType**: 'Manual' | 'Scheduled' | string: Indicates the type of sync that is configured for the catalog.
* **tags**: [CatalogUpdatePropertiesTags](#catalogupdatepropertiestags): Resource tags.

## CatalogUpdatePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomerManagedKeyEncryption
### Properties
* **keyEncryptionKeyIdentity**: [CustomerManagedKeyEncryptionKeyIdentity](#customermanagedkeyencryptionkeyidentity): All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
* **keyEncryptionKeyUrl**: string: key encryption key Url, versioned or non-versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.

## CustomerManagedKeyEncryptionKeyIdentity
### Properties
* **delegatedIdentityClientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: delegated identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and userAssignedIdentity - internal use only.
* **identityType**: 'delegatedResourceIdentity' | 'systemAssignedIdentity' | 'userAssignedIdentity' | string: Values can be systemAssignedIdentity or userAssignedIdentity
* **userAssignedIdentityResourceId**: string: user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and delegatedResourceIdentity.

## CustomizationTaskInput
### Properties
* **description**: string (ReadOnly): Description of the input.
* **required**: bool (ReadOnly): Whether or not the input is required.
* **type**: 'boolean' | 'number' | 'string' | string (ReadOnly): Type of the input.

## CustomizationTaskProperties
### Properties
* **inputs**: [CustomizationTaskPropertiesInputs](#customizationtaskpropertiesinputs) (ReadOnly): Inputs to the task.
* **timeout**: int (ReadOnly): The default timeout for the task.
* **validationStatus**: 'Failed' | 'Pending' | 'Succeeded' | 'Unknown' | string (ReadOnly): Validation status for the Task.

## CustomizationTaskPropertiesInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [CustomizationTaskInput](#customizationtaskinput)

## DevBoxDefinitionProperties
### Properties
* **activeImageReference**: [ImageReference](#imagereference) (ReadOnly): Image reference information for the currently active image (only populated during updates).
* **hibernateSupport**: 'Disabled' | 'Enabled' | string: Indicates whether Dev Boxes created with this definition are capable of hibernation. Not all images are capable of supporting hibernation. To find out more see https://aka.ms/devbox/hibernate
* **imageReference**: [ImageReference](#imagereference): Image reference information.
* **imageValidationErrorDetails**: [ImageValidationErrorDetails](#imagevalidationerrordetails) (ReadOnly): Details for image validator error. Populated when the image validation is not successful.
* **imageValidationStatus**: 'Failed' | 'Pending' | 'Succeeded' | 'TimedOut' | 'Unknown' | string (ReadOnly): Validation status of the configured image.
* **osStorageType**: string: The storage type used for the Operating System disk of Dev Boxes created using this definition.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **sku**: [Sku](#sku): The SKU for Dev Boxes created using this definition.
* **validationStatus**: 'Failed' | 'Pending' | 'Succeeded' | 'Unknown' | string (ReadOnly): Validation status for the Dev Box Definition.

## DevBoxProvisioningSettings
### Properties
* **installAzureMonitorAgentEnableStatus**: 'Disabled' | 'Enabled' | string: Whether project catalogs associated with projects in this dev center can be configured to sync catalog items.

## DevCenterEncryptionSetProperties
### Properties
* **devboxDisksEncryptionEnableStatus**: 'Disabled' | 'Enabled' | string: Devbox disk encryption enable or disable status. Indicates if Devbox disks encryption using DevCenter CMK is enabled or not.
* **keyEncryptionKeyUrl**: string: Key encryption key Url, versioned or non-versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## DevCenterNetworkSettings
### Properties
* **microsoftHostedNetworkEnableStatus**: 'Disabled' | 'Enabled' | string: Indicates whether pools in this Dev Center can use Microsoft Hosted Networks. Defaults to Enabled if not set.

## DevCenterProjectCatalogSettings
### Properties
* **catalogItemSyncEnableStatus**: 'Disabled' | 'Enabled' | string: Whether project catalogs associated with projects in this dev center can be configured to sync catalog items.

## DevCenterProperties
### Properties
* **devBoxProvisioningSettings**: [DevBoxProvisioningSettings](#devboxprovisioningsettings): Settings to be used in the provisioning of all Dev Boxes that belong to this dev center.
* **devCenterUri**: string (ReadOnly): The URI of the Dev Center.
* **displayName**: string: The display name of the devcenter.
* **encryption**: [Encryption](#encryption): Encryption settings to be used for server-side encryption for proprietary content (such as catalogs, logs, customizations).
* **networkSettings**: [DevCenterNetworkSettings](#devcenternetworksettings): Network settings that will be enforced on network resources associated with the Dev Center.
* **planId**: string: Resource Id of an associated Plan
* **projectCatalogSettings**: [DevCenterProjectCatalogSettings](#devcenterprojectcatalogsettings): Dev Center settings to be used when associating a project with a catalog.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## DevCenterSku
### Properties
* **capabilities**: [Capability](#capability)[] (ReadOnly): Collection of name/value pairs to describe the SKU capabilities.
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **locations**: string[] (ReadOnly): SKU supported locations.
* **name**: string (Required): The name of the SKU. E.g. P3. It is typically a letter+number code
* **resourceType**: string (ReadOnly): The name of the resource type
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## Encryption
### Properties
* **customerManagedKeyEncryption**: [CustomerManagedKeyEncryption](#customermanagedkeyencryption): All Customer-managed key encryption properties for the resource.

## EnvironmentDefinitionParameter
### Properties
* **description**: string (ReadOnly): Description of the parameter
* **id**: string (ReadOnly): Unique ID of the parameter
* **name**: string (ReadOnly): Display name of the parameter
* **readOnly**: bool (ReadOnly): Whether or not this parameter is read-only.  If true, default should have a value.
* **required**: bool (ReadOnly): Whether or not this parameter is required
* **type**: 'array' | 'boolean' | 'integer' | 'number' | 'object' | 'string' | string (ReadOnly): A string of one of the basic JSON types (number, integer, array, object, boolean, string)

## EnvironmentDefinitionProperties
### Properties
* **description**: string (ReadOnly): A short description of the environment definition.
* **parameters**: [EnvironmentDefinitionParameter](#environmentdefinitionparameter)[] (ReadOnly): Input parameters passed to an environment.
* **templatePath**: string (ReadOnly): Path to the Environment Definition entrypoint file.
* **validationStatus**: 'Failed' | 'Pending' | 'Succeeded' | 'Unknown' | string (ReadOnly): Validation status for the environment definition.

## EnvironmentRole
### Properties
* **description**: string (ReadOnly): This is a description of the Role Assignment.
* **roleName**: string (ReadOnly): The common name of the Role Assignment. This is a descriptive name such as 'AcrPush'.

## EnvironmentTypeProperties
### Properties
* **displayName**: string: The display name of the environment type.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## GalleryProperties
### Properties
* **galleryResourceId**: string (Required): The resource ID of the backing Azure Compute Gallery.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## GitCatalog
### Properties
* **branch**: string: Git branch.
* **path**: string: The folder where the catalog items can be found inside the repository.
* **secretIdentifier**: string: A reference to the Key Vault secret containing a security token to authenticate to a Git repository.
* **uri**: string: Git URI.

## HealthCheck
### Properties
* **additionalDetails**: string (ReadOnly): Additional details about the health check or the recommended action.
* **displayName**: string (ReadOnly): The display name of this health check item.
* **endDateTime**: string (ReadOnly): End time of the health check item.
* **errorType**: string (ReadOnly): The type of error that occurred during this health check.
* **recommendedAction**: string (ReadOnly): The recommended action to fix the corresponding error.
* **startDateTime**: string (ReadOnly): Start time of health check item.
* **status**: 'Failed' | 'Passed' | 'Pending' | 'Running' | 'Unknown' | 'Warning' | string (ReadOnly): The status of the health check item.

## HealthCheckStatusDetailsProperties
### Properties
* **endDateTime**: string (ReadOnly): End time of last execution of the health checks.
* **healthChecks**: [HealthCheck](#healthcheck)[] (ReadOnly): Details for each health check item.
* **startDateTime**: string (ReadOnly): Start time of last execution of the health checks.

## HealthStatusDetail
### Properties
* **code**: string (ReadOnly): An identifier for the issue.
* **message**: string (ReadOnly): A message describing the issue, intended to be suitable for display in a user interface

## ImageDefinitionProperties
### Properties
* **imageReference**: [ImageReference](#imagereference) (Required): Image reference information.

## ImageProperties
### Properties
* **description**: string (ReadOnly): The description of the image.
* **hibernateSupport**: 'Disabled' | 'Enabled' | string (ReadOnly): Indicates whether this image has hibernate enabled. Not all images are capable of supporting hibernation. To find out more see https://aka.ms/devbox/hibernate
* **offer**: string (ReadOnly): The name of the image offer.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **publisher**: string (ReadOnly): The publisher of the image.
* **recommendedMachineConfiguration**: [RecommendedMachineConfiguration](#recommendedmachineconfiguration) (ReadOnly): The recommended machine configuration to use with the image.
* **sku**: string (ReadOnly): The SKU name for the image.

## ImageReference
### Properties
* **exactVersion**: string (ReadOnly): The actual version of the image after use. When id references a gallery image latest version, this will indicate the actual version in use.
* **id**: string: Image ID, or Image version ID. When Image ID is provided, its latest version will be used.

## ImageValidationErrorDetails
### Properties
* **code**: string: An identifier for the error.
* **message**: string: A message describing the error.

## ImageVersionProperties
### Properties
* **excludeFromLatest**: bool (ReadOnly): If the version should be excluded from being treated as the latest version.
* **name**: string (ReadOnly): The semantic version string.
* **osDiskImageSizeInGb**: int (ReadOnly): The size of the OS disk image, in GB.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **publishedDate**: string (ReadOnly): The datetime that the backing image version was published.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## NetworkProperties
### Properties
* **domainJoinType**: 'AzureADJoin' | 'HybridAzureADJoin' | 'None' | string (Required): AAD Join type.
* **domainName**: string: Active Directory domain name
* **domainPassword**: string {sensitive}: The password for the account used to join domain
* **domainUsername**: string: The username of an Active Directory account (user or service account) that has permissions to create computer objects in Active Directory. Required format: admin@contoso.com.
* **healthCheckStatus**: 'Failed' | 'Passed' | 'Pending' | 'Running' | 'Unknown' | 'Warning' | string (ReadOnly): Overall health status of the network connection. Health checks are run on creation, update, and periodically to validate the network connection.
* **networkingResourceGroupName**: string: The name for resource group where NICs will be placed.
* **organizationUnit**: string: Active Directory domain Organization Unit (OU)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **subnetId**: string: The subnet to attach Virtual Machines to

## PlanMemberProperties
### Properties
* **memberId**: string: The unique id of the member.
* **memberType**: 'Group' | 'User' | string: The type of the member (user, group)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **tags**: [Tags](#tags): Resource tags.

## PlanProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## PoolDevBoxDefinition
### Properties
* **activeImageReference**: [ImageReference](#imagereference) (ReadOnly): Image reference information for the currently active image (only populated during updates).
* **imageReference**: [ImageReference](#imagereference): Image reference information.
* **sku**: [Sku](#sku): The SKU for Dev Boxes created from the Pool.

## PoolProperties
### Properties
* **devBoxCount**: int (ReadOnly): Indicates the number of provisioned Dev Boxes in this pool.
* **devBoxDefinition**: [PoolDevBoxDefinition](#pooldevboxdefinition): A definition of the machines that are created from this Pool. Will be ignored if devBoxDefinitionType is Reference or not provided.
* **devBoxDefinitionName**: string: Name of a Dev Box definition in parent Project of this Pool. Will be ignored if devBoxDefinitionType is Value.
* **devBoxDefinitionType**: 'Reference' | 'Value' | string: Indicates if the pool is created from an existing Dev Box Definition or if one is provided directly.
* **displayName**: string: The display name of the pool.
* **healthStatus**: 'Healthy' | 'Pending' | 'Unhealthy' | 'Unknown' | 'Warning' | string (ReadOnly): Overall health status of the Pool. Indicates whether or not the Pool is available to create Dev Boxes.
* **healthStatusDetails**: [HealthStatusDetail](#healthstatusdetail)[] (ReadOnly): Details on the Pool health status to help diagnose issues. This is only populated when the pool status indicates the pool is in a non-healthy state
* **licenseType**: 'Windows_Client' | string: Specifies the license type indicating the caller has already acquired licenses for the Dev Boxes that will be created.
* **localAdministrator**: 'Disabled' | 'Enabled' | string: Indicates whether owners of Dev Boxes in this pool are added as local administrators on the Dev Box.
* **managedVirtualNetworkRegions**: string[]: The regions of the managed virtual network (required when managedNetworkType is Managed).
* **networkConnectionName**: string: Name of a Network Connection in parent Project of this Pool
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **singleSignOnStatus**: 'Disabled' | 'Enabled' | string: Indicates whether Dev Boxes in this pool are created with single sign on enabled. The also requires that single sign on be enabled on the tenant.
* **stopOnDisconnect**: [StopOnDisconnectConfiguration](#stopondisconnectconfiguration): Stop on disconnect configuration settings for Dev Boxes created in this pool.
* **virtualNetworkType**: 'Managed' | 'Unmanaged' | string: Indicates whether the pool uses a Virtual Network managed by Microsoft or a customer provided network.

## ProjectCatalogSettings
### Properties
* **catalogItemSyncTypes**: ('EnvironmentDefinition' | 'ImageDefinition' | string)[]: Indicates catalog item types that can be synced.

## ProjectEnvironmentTypeProperties
### Properties
* **creatorRoleAssignment**: [ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignment](#projectenvironmenttypeupdatepropertiescreatorroleassignment): The role definition assigned to the environment creator on backing resources.
* **deploymentTargetId**: string: Id of a subscription that the environment type will be mapped to. The environment's resources will be deployed into this subscription.
* **displayName**: string: The display name of the project environment type.
* **environmentCount**: int {minValue: 0} (ReadOnly): The number of environments of this type.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **status**: 'Disabled' | 'Enabled' | string: Defines whether this Environment Type can be used in this Project.
* **userRoleAssignments**: [ProjectEnvironmentTypeUpdatePropertiesUserRoleAssignments](#projectenvironmenttypeupdatepropertiesuserroleassignments): Role Assignments created on environment backing resources. This is a mapping from a user object ID to an object of role definition IDs.

## ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignment
### Properties
* **roles**: [ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignmentRoles](#projectenvironmenttypeupdatepropertiescreatorroleassignmentroles): A map of roles to assign to the environment creator.

## ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignmentRoles
### Properties
### Additional Properties
* **Additional Properties Type**: [EnvironmentRole](#environmentrole)

## ProjectEnvironmentTypeUpdatePropertiesUserRoleAssignments
### Properties
### Additional Properties
* **Additional Properties Type**: [UserRoleAssignmentValue](#userroleassignmentvalue)

## ProjectProperties
### Properties
* **catalogSettings**: [ProjectCatalogSettings](#projectcatalogsettings): Settings to be used when associating a project with a catalog.
* **description**: string: Description of the project.
* **devCenterId**: string: Resource Id of an associated DevCenter
* **devCenterUri**: string (ReadOnly): The URI of the Dev Center resource this project is associated with.
* **displayName**: string: The display name of the project.
* **maxDevBoxesPerUser**: int {minValue: 0}: When specified, limits the maximum number of Dev Boxes a single user can create across all pools in the project. This will have no effect on existing Dev Boxes when reduced.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## RecommendedMachineConfiguration
### Properties
* **memory**: [ResourceRange](#resourcerange) (ReadOnly): Recommended memory range.
* **vCPUs**: [ResourceRange](#resourcerange) (ReadOnly): Recommended vCPU range.

## ResourceRange
### Properties
* **max**: int (ReadOnly): Maximum value.
* **min**: int (ReadOnly): Minimum value.

## ScheduleProperties
### Properties
* **frequency**: 'Daily' | string: The frequency of this scheduled task.
* **location**: string: The geo-location where the resource lives
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'StorageProvisioningFailed' | 'Succeeded' | 'TransientFailure' | 'Updated' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **state**: 'Disabled' | 'Enabled' | string: Indicates whether or not this scheduled task is enabled.
* **tags**: [Tags](#tags): Resource tags.
* **time**: string: The target time to trigger the action. The format is HH:MM.
* **timeZone**: string: The IANA timezone id at which the schedule should execute.
* **type**: 'StopDevBox' | string: Supported type this scheduled task represents.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. E.g. P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## SkuListResult
### Properties
* **nextLink**: string (ReadOnly): URL to get the next set of results if there are any.
* **value**: [DevCenterSku](#devcentersku)[] (ReadOnly): Current page of results.

## StopOnDisconnectConfiguration
### Properties
* **gracePeriodMinutes**: int: The specified time in minutes to wait before stopping a Dev Box once disconnect is detected.
* **status**: 'Disabled' | 'Enabled' | string: Whether the feature to stop the Dev Box on disconnect once the grace period has lapsed is enabled.

## SyncStats
### Properties
* **added**: int {minValue: 0} (ReadOnly): Count of catalog items added during synchronization.
* **removed**: int {minValue: 0} (ReadOnly): Count of catalog items removed during synchronization.
* **syncedCatalogItemTypes**: ('EnvironmentDefinition' | 'ImageDefinition' | string)[]: Indicates catalog item types that were synced.
* **synchronizationErrors**: int {minValue: 0} (ReadOnly): Count of synchronization errors that occured during synchronization.
* **unchanged**: int {minValue: 0} (ReadOnly): Count of catalog items that were unchanged during synchronization.
* **updated**: int {minValue: 0} (ReadOnly): Count of catalog items updated during synchronization.
* **validationErrors**: int {minValue: 0} (ReadOnly): Count of catalog items that had validation errors during synchronization.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserRoleAssignmentRoles
### Properties
### Additional Properties
* **Additional Properties Type**: [EnvironmentRole](#environmentrole)

## UserRoleAssignmentValue
### Properties
* **roles**: [UserRoleAssignmentRoles](#userroleassignmentroles): A map of roles to assign to the parent user.

