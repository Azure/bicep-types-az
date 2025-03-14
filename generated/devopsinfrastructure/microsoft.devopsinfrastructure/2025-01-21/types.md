# Microsoft.DevOpsInfrastructure @ 2025-01-21

## Resource Microsoft.DevOpsInfrastructure/pools@2025-01-21
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-21' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-.]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevOpsInfrastructure/pools' (ReadOnly, DeployTimeConstant): The resource type

## AgentProfile
* **Discriminator**: kind

### Base Properties
* **resourcePredictions**: any: Defines pool buffer/stand-by agents.
* **resourcePredictionsProfile**: [ResourcePredictionsProfile](#resourcepredictionsprofile): Defines how the pool buffer/stand-by agents is provided.

### Stateful
#### Properties
* **gracePeriodTimeSpan**: string: How long should the machine be kept around after it ran a workload when there are no stand-by agents. The maximum is one week.
* **kind**: 'Stateful' (Required): Discriminator property for AgentProfile.
* **maxAgentLifetime**: string: How long should stateful machines be kept around. The maximum is one week.

### StatelessAgentProfile
#### Properties
* **kind**: 'Stateless' (Required): Discriminator property for AgentProfile.


## AzureDevOpsPermissionProfile
### Properties
* **groups**: string[]: Group email addresses
* **kind**: 'CreatorOnly' | 'Inherit' | 'SpecificAccounts' | string (Required): Determines who has admin permissions to the Azure DevOps pool.
* **users**: string[]: User email addresses

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite' | string: The type of caching to be enabled for the data disks. The default value for caching is readwrite. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
* **diskSizeGiB**: int: The initial disk size in gigabytes.
* **driveLetter**: string: The drive letter for the empty data disk. If not specified, it will be the first available letter.
* **storageAccountType**: 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | string: The storage Account type to be used for the data disk. If omitted, the default is "standard_lrs".

## DevOpsAzureSku
### Properties
* **name**: string (Required): The Azure SKU name of the machines in the pool.

## FabricProfile
* **Discriminator**: kind

### Base Properties

### VmssFabricProfile
#### Properties
* **images**: [PoolImage](#poolimage)[] (Required): The VM images of the machines in the pool.
* **kind**: 'Vmss' (Required): Discriminator property for FabricProfile.
* **networkProfile**: [NetworkProfile](#networkprofile): The network profile of the machines in the pool.
* **osProfile**: [OsProfile](#osprofile): The OS profile of the machines in the pool.
* **sku**: [DevOpsAzureSku](#devopsazuresku) (Required): The Azure SKU of the machines in the pool.
* **storageProfile**: [StorageProfile](#storageprofile): The storage profile of the machines in the pool.


## GitHubOrganization
### Properties
* **repositories**: string[]: Optional list of repositories in which the pool should be created.
* **url**: string (Required): The GitHub organization URL in which the pool should be created.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## NetworkProfile
### Properties
* **subnetId**: string (Required): The subnet id on which to put all machines created in the pool.

## Organization
### Properties
* **openAccess**: bool: Determines if the pool should have open access to all projects in this organization.
* **parallelism**: int: How many machines can be created at maximum in this organization out of the maximumConcurrency of the pool.
* **projects**: string[]: Optional list of projects in which the pool should be created.
* **url**: string (Required): The Azure DevOps organization URL in which the pool should be created.

## OrganizationProfile
* **Discriminator**: kind

### Base Properties

### AzureDevOpsOrganizationProfile
#### Properties
* **kind**: 'AzureDevOps' (Required): Discriminator property for OrganizationProfile.
* **organizations**: [Organization](#organization)[] (Required): The list of Azure DevOps organizations the pool should be present in.
* **permissionProfile**: [AzureDevOpsPermissionProfile](#azuredevopspermissionprofile): The type of permission which determines which accounts are admins on the Azure DevOps pool.

### GitHubOrganizationProfile
#### Properties
* **kind**: 'GitHub' (Required): Discriminator property for OrganizationProfile.
* **organizations**: [GitHubOrganization](#githuborganization)[] (Required): The list of GitHub organizations/repositories the pool should be present in.


## OsProfile
### Properties
* **logonType**: 'Interactive' | 'Service' | string: Determines how the service should be run. By default, this will be set to Service.
* **secretsManagementSettings**: [SecretsManagementSettings](#secretsmanagementsettings): The secret management settings of the machines in the pool.

## PoolImage
### Properties
* **aliases**: string[]: List of aliases to reference the image by.
* **buffer**: string: The percentage of the buffer to be allocated to this image.
* **ephemeralType**: 'Automatic' | 'CacheDisk' | 'ResourceDisk' | string: The ephemeral type of the image.
* **resourceId**: string: The resource id of the image.
* **wellKnownImageName**: string: The image to use from a well-known set of images made available to customers.

## PoolProperties
### Properties
* **agentProfile**: [AgentProfile](#agentprofile) (Required): Defines how the machine will be handled once it executed a job.
* **devCenterProjectResourceId**: string (Required): The resource id of the DevCenter Project the pool belongs to.
* **fabricProfile**: [FabricProfile](#fabricprofile) (Required): Defines the type of fabric the agent will run on.
* **maximumConcurrency**: int {minValue: 1, maxValue: 10000} (Required): Defines how many resources can there be created at any given time.
* **organizationProfile**: [OrganizationProfile](#organizationprofile) (Required): Defines the organization in which the pool will be used.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string: The status of the current operation.

## ResourcePredictionsProfile
* **Discriminator**: kind

### Base Properties

### AutomaticResourcePredictionsProfile
#### Properties
* **kind**: 'Automatic' (Required): Determines how the stand-by scheme should be provided.
* **predictionPreference**: 'Balanced' | 'BestPerformance' | 'MoreCostEffective' | 'MorePerformance' | 'MostCostEffective' | string: Determines the balance between cost and performance.

### ManualResourcePredictionsProfile
#### Properties
* **kind**: 'Manual' (Required): Determines how the stand-by scheme should be provided.


## SecretsManagementSettings
### Properties
* **certificateStoreLocation**: string: Where to store certificates on the machine.
* **certificateStoreName**: 'My' | 'Root' | string: Name of the certificate store to use on the machine, currently 'My' and 'Root' are supported.
* **keyExportable**: bool (Required): Defines if the key of the certificates should be exportable.
* **observedCertificates**: string[] (Required): The list of certificates to install on all machines in the pool.

## StorageProfile
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]: A list of empty data disks to attach.
* **osDiskStorageAccountType**: 'Premium' | 'Standard' | 'StandardSSD' | string: The Azure SKU name of the machines in the pool.

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

