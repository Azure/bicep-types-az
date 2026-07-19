# Microsoft.DevOpsInfrastructure @ 2023-10-30-preview

## Resource Microsoft.DevOpsInfrastructure/pools@2023-10-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DevOpsInfrastructure/pools' (ReadOnly, DeployTimeConstant): The resource type

## AgentProfile
* **Discriminator**: kind

### Base Properties
* **resourcePredictions**: any: Defines pool buffer.

### Stateful
#### Properties
* **kind**: 'Stateful' (Required): Discriminator property for AgentProfile.
* **maxAgentLifetime**: string (Required): How long should stateful machines be kept around. The maximum is one week.

### StatelessAgentProfile
#### Properties
* **kind**: 'Stateless' (Required): Discriminator property for AgentProfile.


## DevOpsAzureSku
### Properties
* **name**: string (Required): The Azure SKU name of the machines in the pool.
* **tier**: string: The Azure SKU tier of the machines in the pool.

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


## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## NetworkProfile
### Properties
* **subnetId**: string (Required): The subnet id on which to put all machines created in the pool.

## Organization
### Properties
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


## OsProfile
### Properties
* **secretsManagementSettings**: [SecretsManagementSettings](#secretsmanagementsettings) (Required): The secret management settings of the machines in the pool.

## PoolImage
### Properties
* **aliases**: string[]: List of aliases to reference the image by.
* **buffer**: string: The percentage of the buffer to be allocated to this image.
* **resourceId**: string (Required): The resource id of the image.

## PoolProperties
### Properties
* **agentProfile**: [AgentProfile](#agentprofile) (Required): Defines how the machine will be handled once it executed a job.
* **devCenterProjectResourceId**: string (Required): The resource id of the DevCenter Project the pool belongs to.
* **fabricProfile**: [FabricProfile](#fabricprofile) (Required): Defines the type of fabric the agent will run on.
* **maximumConcurrency**: int {minValue: 1, maxValue: 10000} (Required): Defines how many resources can there be created at any given time.
* **organizationProfile**: [OrganizationProfile](#organizationprofile) (Required): Defines the organization in which the pool will be used.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string: The status of the current operation.

## SecretsManagementSettings
### Properties
* **certificateStoreLocation**: string: Where to store certificates on the machine.
* **keyExportable**: bool (Required): Defines if the key of the certificates should be exportable.
* **observedCertificates**: string[] (Required): The list of certificates to install on all machines in the pool.

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

