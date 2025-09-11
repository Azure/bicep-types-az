# Microsoft.ManufacturingPlatform @ 2025-03-01

## Resource Microsoft.ManufacturingPlatform/manufacturingDataServices@2025-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,23}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MdsResourceProperties](#mdsresourceproperties): The resource-specific properties for this resource.
* **sku**: [Sku](#sku): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ManufacturingPlatform/manufacturingDataServices' (ReadOnly, DeployTimeConstant): The resource type

## Function listAvailableVersions (Microsoft.ManufacturingPlatform/manufacturingDataServices@2025-03-01)
* **Resource**: Microsoft.ManufacturingPlatform/manufacturingDataServices
* **ApiVersion**: 2025-03-01
* **Output**: [AvailableVersionListResult](#availableversionlistresult)

## AdxProfile
### Properties
* **dataIngestionUri**: string (ReadOnly): Data Ingestion Uri of Adx Resource
* **id**: string (ReadOnly): Resource Id of Adx Resource
* **uri**: string (ReadOnly): Uri of Adx Resource

## AksProfile
### Properties
* **id**: string (ReadOnly): Resource Id of AKS Resource

## ApplicationVersion
### Properties
* **isDeprecated**: bool (Required): Is Deprecated
* **isLatest**: bool (Required): Is Latest
* **isPreview**: bool (Required): Is Preview
* **version**: string (Required): Application Version

## AvailableVersionListResult
### Properties
* **versions**: [ApplicationVersion](#applicationversion)[] (Required): The list of versions

## CmkProfile
### Properties
* **keyUri**: string (Required): URI of Key in AKV

## DatabaseProfile
### Properties
* **cosmosId**: string (ReadOnly): Resource Id of Cosmos Resource

## DenyAssignmentExclusion
### Properties
* **id**: string (Required): Object Id of Identity
* **type**: string (Required): Type of Identity

## EventHubProfile
### Properties
* **adxInstanceId**: string (ReadOnly): Resource Id of Adx Instance
* **hostName**: string (ReadOnly): Host Name

## FabricProfile
### Properties
* **keyUri**: string (Required): Azure Key Vault Uri
* **oneLakePath**: string (Required): One Lake Path
* **oneLakeUri**: string (Required): URI of One Lake

## FunctionAppProfile
### Properties
* **id**: string (ReadOnly): Resource Id of Azure Function App Resource

## ManagedOnBehalfOfConfiguration
### Properties
* **moboBrokerResources**: [MoboBrokerResource](#mobobrokerresource)[] (Required, ReadOnly): Associated MoboBrokerResources.

## ManagedResourceGroupConfiguration
### Properties
* **location**: string (Required): The resource group location.
* **name**: string (Required): The resource group name.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MdsResourceProperties
### Properties
* **aadApplicationId**: string {pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): AAD Application Id.
* **adxProfile**: [AdxProfile](#adxprofile) (ReadOnly): Profile of Adx Created.
* **aksAdminGroupId**: string {pattern: "^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$|^$"}: AKS Admin Group Id.
* **aksProfile**: [AksProfile](#aksprofile) (ReadOnly): Profile of AKS Created.
* **cmkProfile**: [CmkProfile](#cmkprofile): Profile of CMK Settings.
* **databaseProfile**: [DatabaseProfile](#databaseprofile) (ReadOnly): Profile of Database Created.
* **denyAssignmentExclusions**: [DenyAssignmentExclusion](#denyassignmentexclusion)[]: Deny Assignments exclusion list.
* **enableCopilot**: bool: Enable Copilot.
* **enableDiagnosticSettings**: bool: Enable Diagnostic Settings.
* **eventHubProfile**: [EventHubProfile](#eventhubprofile) (ReadOnly): Profile of EventHub Resource.
* **fabricProfile**: [FabricProfile](#fabricprofile): Profile of Fabric resources.
* **functionAppProfile**: [FunctionAppProfile](#functionappprofile) (ReadOnly): Profile of Function App Resource.
* **managedOnBehalfOfConfiguration**: [ManagedOnBehalfOfConfiguration](#managedonbehalfofconfiguration) (ReadOnly): Managed On Behalf Of Configuration.
* **managedResourceGroupConfiguration**: [ManagedResourceGroupConfiguration](#managedresourcegroupconfiguration) (ReadOnly): Configuration of the managed resource group associated with the resource.
* **monitoringProfile**: [MonitoringProfile](#monitoringprofile) (ReadOnly): Profile of Monitoring Resource Created.
* **openAIProfile**: [OpenAIProfile](#openaiprofile): Profile of OpenAI Resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **redisProfile**: [RedisProfile](#redisprofile) (ReadOnly): Profile of Azure Redis Created.
* **redundancyState**: 'None' | 'Zonal' | string: Zone redundancy state for resources
* **resourceState**: 'Active' | 'Inactive' | string: State of the resource
* **serviceUrl**: string (ReadOnly): Service Url
* **storageProfile**: [StorageProfile](#storageprofile) (ReadOnly): Profile of Storage Created.
* **userManagedOpenAIProfile**: [UserManagedOpenAIProfile](#usermanagedopenaiprofile): Profile of User Managed OpenAI Resource.
* **version**: string: Mds Resource Version.

## MoboBrokerResource
### Properties
* **id**: string (Required, ReadOnly): Resource Id of MoboBrokerResource

## MonitoringProfile
### Properties
* **id**: string (ReadOnly): Resource Id of Application Insights Resource

## OpenAIProfile
### Properties
* **embeddingModelCapacity**: int: Embedding Model Capacity
* **embeddingModelName**: string: Embedding Model Name
* **embeddingModelSkuName**: string: Embedding Model SKU Name
* **embeddingModelVersion**: string: Embedding Model Version
* **gptModelCapacity**: int: GPT Model Capacity
* **gptModelName**: string: GPT Model Name
* **gptModelSkuName**: string: GPT Model SKU Name
* **gptModelVersion**: string: GPT Model Version
* **id**: string (ReadOnly): Resource Id of OpenAI Resource

## RedisProfile
### Properties
* **id**: string (ReadOnly): Resource Id of Azure Redis Cache Resource

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. E.g. P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## StorageProfile
### Properties
* **id**: string (ReadOnly): Resource Id of Storage Resource

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

## UserManagedOpenAIProfile
### Properties
* **embeddingModelDeploymentName**: string (Required): Embedding Model Deployment Name
* **embeddingModelType**: string (ReadOnly): Embedding Model Type
* **gptModelDeploymentName**: string (Required): GPT Model Deployment Name
* **id**: string (Required): Resource Id of OpenAI Resource

