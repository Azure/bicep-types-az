# Microsoft.DevCenter @ 2022-09-01-preview

## Resource Microsoft.DevCenter/devcenters@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed identity properties
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DevCenterProperties](#devcenterproperties): DevCenter properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/devcenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/attachednetworks@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttachedNetworkConnectionProperties](#attachednetworkconnectionproperties): Attached NetworkConnection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/attachednetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/catalogs@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CatalogProperties](#catalogproperties): Catalog properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/catalogs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/devboxdefinitions@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DevBoxDefinitionProperties](#devboxdefinitionproperties): Dev Box definition properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/devcenters/devboxdefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/environmentTypes@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentTypeProperties](#environmenttypeproperties): Properties of an environment type.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags): Resource tags.
* **type**: 'Microsoft.DevCenter/devcenters/environmentTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/galleries@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryProperties](#galleryproperties): Gallery properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/galleries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/galleries/images@2022-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties) (ReadOnly): Image properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/galleries/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/devcenters/galleries/images/versions@2022-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageVersionProperties](#imageversionproperties) (ReadOnly): Image version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/devcenters/galleries/images/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/networkConnections@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkProperties](#networkproperties): Properties of a Network Connection
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/networkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/networkConnections/healthChecks@2022-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'latest' (Required, DeployTimeConstant): The resource name
* **properties**: [HealthCheckStatusDetailsProperties](#healthcheckstatusdetailsproperties) (ReadOnly): Health check status details properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/networkConnections/healthChecks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Properties of a project.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/allowedEnvironmentTypes@2022-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AllowedEnvironmentTypeProperties](#allowedenvironmenttypeproperties) (ReadOnly): Properties of an allowed environment type.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/projects/allowedEnvironmentTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/attachednetworks@2022-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttachedNetworkConnectionProperties](#attachednetworkconnectionproperties) (ReadOnly): Attached NetworkConnection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/projects/attachednetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/devboxdefinitions@2022-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DevBoxDefinitionProperties](#devboxdefinitionproperties) (ReadOnly): Dev Box definition properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.DevCenter/projects/devboxdefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/environmentTypes@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed identity properties
* **location**: string: The geo-location for the environment type
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectEnvironmentTypeProperties](#projectenvironmenttypeproperties): Properties of an environment type.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags): Resource tags.
* **type**: 'Microsoft.DevCenter/projects/environmentTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/pools@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties): Pool properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevCenter/projects/pools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DevCenter/projects/pools/schedules@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleProperties](#scheduleproperties): Properties of a Schedule resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DevCenter/projects/pools/schedules' (ReadOnly, DeployTimeConstant): The resource type

## AllowedEnvironmentTypeProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

## AttachedNetworkConnectionProperties
### Properties
* **domainJoinType**: 'AzureADJoin' | 'HybridAzureADJoin' | string (ReadOnly): AAD Join type of the network. This is populated based on the referenced Network Connection.
* **healthCheckStatus**: 'Failed' | 'Passed' | 'Pending' | 'Running' | 'Unknown' | 'Warning' | string (ReadOnly): Health check status values
* **networkConnectionId**: string (Required): The resource ID of the NetworkConnection you want to attach.
* **networkConnectionLocation**: string (ReadOnly): The geo-location where the NetworkConnection resource specified in 'networkConnectionResourceId' property lives.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

## CatalogProperties
### Properties
* **adoGit**: [GitCatalog](#gitcatalog): Properties for an Azure DevOps catalog type.
* **gitHub**: [GitCatalog](#gitcatalog): Properties for a GitHub catalog type.
* **lastSyncTime**: string (ReadOnly): When the catalog was last synced.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

## DevBoxDefinitionProperties
### Properties
* **activeImageReference**: [ImageReference](#imagereference) (ReadOnly): Image reference information for the currently active image (only populated during updates).
* **imageReference**: [ImageReference](#imagereference): Image reference information.
* **imageValidationErrorDetails**: [ImageValidationErrorDetails](#imagevalidationerrordetails) (ReadOnly): Details for image validator error. Populated when the image validation is not successful.
* **imageValidationStatus**: 'Failed' | 'Pending' | 'Succeeded' | 'TimedOut' | 'Unknown' | string (ReadOnly): Validation status of the configured image.
* **osStorageType**: string: The storage type used for the Operating System disk of Dev Boxes created using this definition.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **sku**: [Sku](#sku): The SKU for Dev Boxes created using this definition.

## DevCenterProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

## EnvironmentRole
### Properties
* **description**: string (ReadOnly): This is a description of the Role Assignment.
* **roleName**: string (ReadOnly): The common name of the Role Assignment. This is a descriptive name such as 'AcrPush'.

## EnvironmentTypeProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

## GalleryProperties
### Properties
* **galleryResourceId**: string (Required): The resource ID of the backing Azure Compute Gallery.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

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

## ImageProperties
### Properties
* **description**: string (ReadOnly): The description of the image.
* **offer**: string (ReadOnly): The name of the image offer.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **publisher**: string (ReadOnly): The publisher of the image.
* **recommendedMachineConfiguration**: [RecommendedMachineConfiguration](#recommendedmachineconfiguration) (ReadOnly): The recommended machine configuration to use with the image.
* **sku**: string (ReadOnly): The SKU name for the image.

## ImageReference
### Properties
* **exactVersion**: string (ReadOnly): The actual version of the image after use. When id references a gallery image latest version, this will indicate the actual version in use.
* **id**: string: Image ID, or Image version ID. When Image ID is provided, its latest version will be used.
* **offer**: string: The image offer.
* **publisher**: string: The image publisher.
* **sku**: string: The image sku.

## ImageValidationErrorDetails
### Properties
* **code**: string: An identifier for the error.
* **message**: string: A message describing the error.

## ImageVersionProperties
### Properties
* **excludeFromLatest**: bool (ReadOnly): If the version should be excluded from being treated as the latest version.
* **name**: string (ReadOnly): The semantic version string.
* **osDiskImageSizeInGb**: int (ReadOnly): The size of the OS disk image, in GB.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **publishedDate**: string (ReadOnly): The datetime that the backing image version was published.

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## NetworkProperties
### Properties
* **domainJoinType**: 'AzureADJoin' | 'HybridAzureADJoin' | string (Required): AAD Join type.
* **domainName**: string: Active Directory domain name
* **domainPassword**: string: The password for the account used to join domain
* **domainUsername**: string: The username of an Active Directory account (user or service account) that has permissions to create computer objects in Active Directory. Required format: admin@contoso.com.
* **healthCheckStatus**: 'Failed' | 'Passed' | 'Pending' | 'Running' | 'Unknown' | 'Warning' | string (ReadOnly): Overall health status of the network connection. Health checks are run on creation, update, and periodically to validate the network connection.
* **networkingResourceGroupName**: string: The name for resource group where NICs will be placed.
* **organizationUnit**: string: Active Directory domain Organization Unit (OU)
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **subnetId**: string: The subnet to attach Virtual Machines to

## PoolProperties
### Properties
* **devBoxDefinitionName**: string: Name of a Dev Box definition in parent Project of this Pool
* **licenseType**: 'Windows_Client' | string: Specifies the license type indicating the caller has already acquired licenses for the Dev Boxes that will be created.
* **localAdministrator**: 'Disabled' | 'Enabled' | string: Indicates whether owners of Dev Boxes in this pool are added as local administrators on the Dev Box.
* **networkConnectionName**: string: Name of a Network Connection in parent Project of this Pool
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

## ProjectEnvironmentTypeProperties
### Properties
* **creatorRoleAssignment**: [ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignment](#projectenvironmenttypeupdatepropertiescreatorroleassignment): The role definition assigned to the environment creator on backing resources.
* **deploymentTargetId**: string: Id of a subscription that the environment type will be mapped to. The environment's resources will be deployed into this subscription.
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
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
* **description**: string: Description of the project.
* **devCenterId**: string: Resource Id of an associated DevCenter
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.

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
* **provisioningState**: string (ReadOnly): The provisioning state of the resource.
* **state**: 'Disabled' | 'Enabled' | string: Indicates whether or not this scheduled task is enabled.
* **time**: string: The target time to trigger the action. The format is HH:MM.
* **timeZone**: string: The IANA timezone id at which the schedule should execute.
* **type**: 'StopDevBox' | string: Supported type this scheduled task represents.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

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
* **clientId**: string (ReadOnly): The client ID of the assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the assigned identity.

## UserRoleAssignmentRoles
### Properties
### Additional Properties
* **Additional Properties Type**: [EnvironmentRole](#environmentrole)

## UserRoleAssignmentValue
### Properties
* **roles**: [UserRoleAssignmentRoles](#userroleassignmentroles): A map of roles to assign to the parent user.

