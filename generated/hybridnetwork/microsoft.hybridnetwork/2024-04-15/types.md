# Microsoft.HybridNetwork @ 2024-04-15

## Resource Microsoft.HybridNetwork/configurationGroupValues@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationGroupValuePropertiesFormat](#configurationgroupvaluepropertiesformat): Hybrid configuration group value properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/configurationGroupValues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/networkFunctions@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed identity of the network function.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFunctionPropertiesFormat](#networkfunctionpropertiesformat): Network function properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/networkFunctions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/networkFunctions/components@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 64, pattern: "^[^\s]*[^\s]+[^\s]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ComponentProperties](#componentproperties) (ReadOnly): The component properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridNetwork/networkFunctions/components' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/publishers@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed identity of the publisher, if configured.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PublisherPropertiesFormat](#publisherpropertiesformat): Publisher properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/publishers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/publishers/artifactStores@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ArtifactStorePropertiesFormat](#artifactstorepropertiesformat): ArtifactStores properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/publishers/artifactStores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/publishers/artifactStores/artifactManifests@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[^\s]*[^\s]+[^\s]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ArtifactManifestPropertiesFormat](#artifactmanifestpropertiesformat): Artifact manifest properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/publishers/artifactStores/artifactManifests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/publishers/configurationGroupSchemas@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationGroupSchemaPropertiesFormat](#configurationgroupschemapropertiesformat): Configuration group schema properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/publishers/configurationGroupSchemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFunctionDefinitionGroupPropertiesFormat](#networkfunctiondefinitiongrouppropertiesformat): Network function definition group properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups/networkFunctionDefinitionVersions@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFunctionDefinitionVersionPropertiesFormat](#networkfunctiondefinitionversionpropertiesformat): Network function definition version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups/networkFunctionDefinitionVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/publishers/networkServiceDesignGroups@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkServiceDesignGroupPropertiesFormat](#networkservicedesigngrouppropertiesformat): network service design group properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/publishers/networkServiceDesignGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/publishers/networkServiceDesignGroups/networkServiceDesignVersions@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkServiceDesignVersionPropertiesFormat](#networkservicedesignversionpropertiesformat): network service design version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/publishers/networkServiceDesignGroups/networkServiceDesignVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/siteNetworkServices@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed identity of the Site network service, if configured.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SiteNetworkServicePropertiesFormat](#sitenetworkservicepropertiesformat): Site network service properties.
* **sku**: [Sku](#sku): Sku of the site network service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/siteNetworkServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/sites@2024-04-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 64, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SitePropertiesFormat](#sitepropertiesformat): Site properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/sites' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredential (Microsoft.HybridNetwork/publishers/artifactStores/artifactManifests@2024-04-15)
* **Resource**: Microsoft.HybridNetwork/publishers/artifactStores/artifactManifests
* **ApiVersion**: 2024-04-15
* **Output**: [ArtifactAccessCredential](#artifactaccesscredential)

## Function listNetworkFabricControllerPrivateEndPoints (Microsoft.HybridNetwork/publishers/artifactStores@2024-04-15)
* **Resource**: Microsoft.HybridNetwork/publishers/artifactStores
* **ApiVersion**: 2024-04-15
* **Output**: [ArtifactStoreNetworkFabricControllerEndPointsList](#artifactstorenetworkfabriccontrollerendpointslist)

## Function listPrivateEndPoints (Microsoft.HybridNetwork/publishers/artifactStores@2024-04-15)
* **Resource**: Microsoft.HybridNetwork/publishers/artifactStores
* **ApiVersion**: 2024-04-15
* **Output**: [ArtifactStorePrivateEndPointsListResult](#artifactstoreprivateendpointslistresult)

## ArmResourceDefinitionResourceElementTemplate
### Properties
* **artifactProfile**: [NSDArtifactProfile](#nsdartifactprofile): Artifact profile properties.
* **parameterValues**: string: Name and value pairs that define the parameter values. It can be  a well formed escaped JSON string.
* **templateType**: 'ArmTemplate' | 'Unknown' | string: The template type.

## ArmTemplateArtifactProfile
### Properties
* **templateName**: string: Template name.
* **templateVersion**: string: Template version.

## ArmTemplateMappingRuleProfile
### Properties
* **templateParameters**: string: List of template parameters.

## ArtifactAccessCredential
* **Discriminator**: credentialType

### Base Properties

### AzureContainerRegistryScopedTokenCredential
#### Properties
* **acrServerUrl**: string: The Acr server url
* **acrToken**: string: The credential value.
* **credentialType**: 'AzureContainerRegistryScopedToken' (Required): The credential type.
* **expiry**: string: The UTC time when credential will expire.
* **repositories**: string[]: The repositories that could be accessed using the current credential.
* **username**: string: The username of the credential.

### AzureStorageAccountCredential
#### Properties
* **containerCredentials**: [AzureStorageAccountContainerCredential](#azurestorageaccountcontainercredential)[]: The containers that could be accessed using the current credential.
* **credentialType**: 'AzureStorageAccountToken' (Required): The credential type.
* **expiry**: string: The UTC time when credential will expire.
* **storageAccountId**: string: The storage account Id


## ArtifactManifestPropertiesFormat
### Properties
* **artifactManifestState**: 'Succeeded' | 'Unknown' | 'Uploaded' | 'Uploading' | 'Validating' | 'ValidationFailed' | string (ReadOnly): The artifact manifest state.
* **artifacts**: [ManifestArtifactFormat](#manifestartifactformat)[]: The artifacts list.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the ArtifactManifest resource.

## ArtifactStoreNetworkFabricControllerEndPoints
### Properties
* **networkFabricControllerIds**: [ReferencedResource](#referencedresource)[]: list of network fabric controllers.

## ArtifactStoreNetworkFabricControllerEndPointsList
### Properties
* **nextLink**: string (ReadOnly): The URI to get the next set of results.
* **value**: [ArtifactStoreNetworkFabricControllerEndPoints](#artifactstorenetworkfabriccontrollerendpoints)[]: A list of network fabric controllers.

## ArtifactStorePrivateEndPointsFormat
### Properties
* **manualPrivateEndPointConnections**: [ReferencedResource](#referencedresource)[]: list of private endpoints.

## ArtifactStorePrivateEndPointsListResult
### Properties
* **nextLink**: string (ReadOnly): The URI to get the next set of results.
* **value**: [ArtifactStorePrivateEndPointsFormat](#artifactstoreprivateendpointsformat)[]: A list of private endpoints.

## ArtifactStorePropertiesFormat
### Properties
* **backingResourcePublicNetworkAccess**: 'Disabled' | 'Enabled' | string: The artifact store backing resource network access type
* **managedResourceGroupConfiguration**: [ArtifactStorePropertiesFormatManagedResourceGroupConfiguration](#artifactstorepropertiesformatmanagedresourcegroupconfiguration)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the application groups resource.
* **replicationStrategy**: 'SingleReplication' | 'Unknown' | string: The replication strategy.
* **storageResourceId**: string (ReadOnly): The created storage resource id
* **storeType**: 'AzureContainerRegistry' | 'AzureStorageAccount' | 'Unknown' | string: The artifact store type.

## ArtifactStorePropertiesFormatManagedResourceGroupConfiguration
### Properties
* **location**: string: The managed resource group location.
* **name**: string: The managed resource group name.

## AzureArcKubernetesArtifactProfile
### Properties
* **artifactStore**: [ReferencedResource](#referencedresource): The reference to artifact store.
* **helmArtifactProfile**: [HelmArtifactProfile](#helmartifactprofile): Helm artifact profile.

## AzureArcKubernetesDeployMappingRuleProfile
### Properties
* **applicationEnablement**: 'Disabled' | 'Enabled' | 'Unknown' | string: The application enablement.
* **helmMappingRuleProfile**: [HelmMappingRuleProfile](#helmmappingruleprofile): The helm mapping rule profile.

## AzureArcKubernetesNetworkFunctionApplication
* **Discriminator**: artifactType

### Base Properties
* **dependsOnProfile**: [DependsOnProfile](#dependsonprofile): Depends on profile definition.
* **name**: string: The name of the network function application.

### AzureArcKubernetesHelmApplication
#### Properties
* **artifactProfile**: [AzureArcKubernetesArtifactProfile](#azurearckubernetesartifactprofile): Azure arc kubernetes artifact profile.
* **artifactType**: 'HelmPackage' (Required): The artifact type.
* **deployParametersMappingRuleProfile**: [AzureArcKubernetesDeployMappingRuleProfile](#azurearckubernetesdeploymappingruleprofile): Deploy mapping rule profile.


## AzureCoreArmTemplateArtifactProfile
### Properties
* **artifactStore**: [ReferencedResource](#referencedresource): The reference to artifact store.
* **templateArtifactProfile**: [ArmTemplateArtifactProfile](#armtemplateartifactprofile): Template artifact profile.

## AzureCoreArmTemplateDeployMappingRuleProfile
### Properties
* **applicationEnablement**: 'Disabled' | 'Enabled' | 'Unknown' | string: The application enablement.
* **templateMappingRuleProfile**: [ArmTemplateMappingRuleProfile](#armtemplatemappingruleprofile): The template mapping rule profile.

## AzureCoreNetworkFunctionApplication
* **Discriminator**: artifactType

### Base Properties
* **dependsOnProfile**: [DependsOnProfile](#dependsonprofile): Depends on profile definition.
* **name**: string: The name of the network function application.

### AzureCoreNetworkFunctionArmTemplateApplication
#### Properties
* **artifactProfile**: [AzureCoreArmTemplateArtifactProfile](#azurecorearmtemplateartifactprofile): Azure template artifact profile.
* **artifactType**: 'ArmTemplate' (Required): The artifact type.
* **deployParametersMappingRuleProfile**: [AzureCoreArmTemplateDeployMappingRuleProfile](#azurecorearmtemplatedeploymappingruleprofile): Deploy mapping rule profile.

### AzureCoreNetworkFunctionVhdApplication
#### Properties
* **artifactProfile**: [AzureCoreVhdImageArtifactProfile](#azurecorevhdimageartifactprofile): Azure vhd image artifact profile.
* **artifactType**: 'VhdImageFile' (Required): The artifact type.
* **deployParametersMappingRuleProfile**: [AzureCoreVhdImageDeployMappingRuleProfile](#azurecorevhdimagedeploymappingruleprofile): Deploy mapping rule profile.


## AzureCoreVhdImageArtifactProfile
### Properties
* **artifactStore**: [ReferencedResource](#referencedresource): The reference to artifact store.
* **vhdArtifactProfile**: [VhdImageArtifactProfile](#vhdimageartifactprofile): Vhd artifact profile.

## AzureCoreVhdImageDeployMappingRuleProfile
### Properties
* **applicationEnablement**: 'Disabled' | 'Enabled' | 'Unknown' | string: The application enablement.
* **vhdImageMappingRuleProfile**: [VhdImageMappingRuleProfile](#vhdimagemappingruleprofile): The vhd mapping rule profile.

## AzureOperatorNexusArmTemplateArtifactProfile
### Properties
* **artifactStore**: [ReferencedResource](#referencedresource): The reference to artifact store.
* **templateArtifactProfile**: [ArmTemplateArtifactProfile](#armtemplateartifactprofile): Template artifact profile.

## AzureOperatorNexusArmTemplateDeployMappingRuleProfile
### Properties
* **applicationEnablement**: 'Disabled' | 'Enabled' | 'Unknown' | string: The application enablement.
* **templateMappingRuleProfile**: [ArmTemplateMappingRuleProfile](#armtemplatemappingruleprofile): The template mapping rule profile.

## AzureOperatorNexusImageArtifactProfile
### Properties
* **artifactStore**: [ReferencedResource](#referencedresource): The reference to artifact store.
* **imageArtifactProfile**: [ImageArtifactProfile](#imageartifactprofile): Image artifact profile.

## AzureOperatorNexusImageDeployMappingRuleProfile
### Properties
* **applicationEnablement**: 'Disabled' | 'Enabled' | 'Unknown' | string: The application enablement.
* **imageMappingRuleProfile**: [ImageMappingRuleProfile](#imagemappingruleprofile): The vhd mapping rule profile.

## AzureOperatorNexusNetworkFunctionApplication
* **Discriminator**: artifactType

### Base Properties
* **dependsOnProfile**: [DependsOnProfile](#dependsonprofile): Depends on profile definition.
* **name**: string: The name of the network function application.

### AzureOperatorNexusNetworkFunctionArmTemplateApplication
#### Properties
* **artifactProfile**: [AzureOperatorNexusArmTemplateArtifactProfile](#azureoperatornexusarmtemplateartifactprofile): Azure Operator Distributed Services Template artifact profile.
* **artifactType**: 'ArmTemplate' (Required): The artifact type.
* **deployParametersMappingRuleProfile**: [AzureOperatorNexusArmTemplateDeployMappingRuleProfile](#azureoperatornexusarmtemplatedeploymappingruleprofile): Deploy mapping rule profile.

### AzureOperatorNexusNetworkFunctionImageApplication
#### Properties
* **artifactProfile**: [AzureOperatorNexusImageArtifactProfile](#azureoperatornexusimageartifactprofile): Azure Operator Distributed Services image artifact profile.
* **artifactType**: 'ImageFile' (Required): The artifact type.
* **deployParametersMappingRuleProfile**: [AzureOperatorNexusImageDeployMappingRuleProfile](#azureoperatornexusimagedeploymappingruleprofile): Deploy mapping rule profile.


## AzureStorageAccountContainerCredential
### Properties
* **containerName**: string: The storage account container name
* **containerSasUri**: string: The storage account container sas uri

## ComponentProperties
### Properties
* **deploymentProfile**: string (ReadOnly): The JSON-serialized deployment profile of the component resource.
* **deploymentStatus**: [DeploymentStatusProperties](#deploymentstatusproperties) (ReadOnly): The deployment status of the component resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the component resource.

## ConfigurationGroupSchemaPropertiesFormat
### Properties
* **description**: string: Description of what schema can contain.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the Configuration group schema resource.
* **schemaDefinition**: string: Name and value pairs that define the configuration value. It can be a well formed escaped JSON string.
* **versionState**: 'Active' | 'Deprecated' | 'Preview' | 'Unknown' | 'Validating' | 'ValidationFailed' | string (ReadOnly): The configuration group schema version state.

## ConfigurationGroupValuePropertiesFormat
* **Discriminator**: configurationType

### Base Properties
* **configurationGroupSchemaName**: string (ReadOnly): The configuration group schema name.
* **configurationGroupSchemaOfferingLocation**: string (ReadOnly): The location of the configuration group schema offering.
* **configurationGroupSchemaResourceReference**: [DeploymentResourceIdReference](#deploymentresourceidreference): The configuration group schema resource reference.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the site resource.
* **publisherName**: string (ReadOnly): The publisher name for the configuration group schema.
* **publisherScope**: 'Private' | 'Unknown' | string (ReadOnly): The scope of the publisher.

### ConfigurationValueWithoutSecrets
#### Properties
* **configurationType**: 'Open' (Required): The value which indicates if configuration values are secrets
* **configurationValue**: string: Name and value pairs that define the configuration value. It can be a well formed escaped JSON string.

### ConfigurationValueWithSecrets
#### Properties
* **configurationType**: 'Secret' (Required): The value which indicates if configuration values are secrets
* **secretConfigurationValue**: string {sensitive} (WriteOnly): Name and value pairs that define the configuration value secrets. It can be a well formed escaped JSON string.


## ContainerizedNetworkFunctionTemplate
* **Discriminator**: nfviType

### Base Properties

### AzureArcKubernetesNetworkFunctionTemplate
#### Properties
* **networkFunctionApplications**: [AzureArcKubernetesNetworkFunctionApplication](#azurearckubernetesnetworkfunctionapplication)[]: Network function applications.
* **nfviType**: 'AzureArcKubernetes' (Required): The network function type.


## DaemonSet
### Properties
* **available**: int: Number of available pods.
* **creationTime**: string: Creation Time of daemonSet.
* **current**: int: Current number of pods
* **desired**: int: Desired number of pods
* **name**: string: The name of the daemonSet.
* **namespace**: string: The namespace of the daemonSet.
* **ready**: int: Number of Ready pods
* **upToDate**: int: Number of  upto date pods

## DependsOnProfile
### Properties
* **installDependsOn**: string[]: Application installation operation dependency.
* **uninstallDependsOn**: string[]: Application deletion operation dependency.
* **updateDependsOn**: string[]: Application update operation dependency.

## Deployment
### Properties
* **available**: int: Number of available pods.
* **creationTime**: string: Creation Time of deployment.
* **desired**: int: Desired number of pods
* **name**: string: The name of the deployment.
* **namespace**: string: The namespace of the deployment.
* **ready**: int: Number of ready pods.
* **upToDate**: int: Number of upto date pods.

## DeploymentResourceIdReference
* **Discriminator**: idType

### Base Properties

### OpenDeploymentResourceReference
#### Properties
* **id**: string: Resource ID.
* **idType**: 'Open' (Required): The resource reference arm id type.

### SecretDeploymentResourceReference
#### Properties
* **id**: string {sensitive} (WriteOnly): Resource ID.
* **idType**: 'Secret' (Required): The resource reference arm id type.


## DeploymentStatusProperties
### Properties
* **nextExpectedUpdateAt**: string: The next expected update of deployment status.
* **resources**: [Resources](#resources): The resource related to the component resource.
* **status**: 'Deployed' | 'Downloading' | 'Failed' | 'Installing' | 'Pending-Install' | 'Pending-Rollback' | 'Pending-Upgrade' | 'Reinstalling' | 'Rollingback' | 'Superseded' | 'Uninstalled' | 'Uninstalling' | 'Unknown' | 'Upgrading' | string: The status of the component resource.

## HelmArtifactProfile
### Properties
* **helmPackageName**: string: Helm package name.
* **helmPackageVersionRange**: string: Helm package version range.
* **imagePullSecretsValuesPaths**: string[]: The image pull secrets values path list.
* **registryValuesPaths**: string[]: The registry values path list.

## HelmInstallOptions
### Properties
* **atomic**: string: The helm deployment atomic options
* **timeout**: string: The helm deployment timeout options
* **wait**: string: The helm deployment wait options

## HelmMappingRuleProfile
### Properties
* **helmPackageVersion**: string: Helm package version.
* **options**: [HelmMappingRuleProfileOptions](#helmmappingruleprofileoptions): The helm deployment options
* **releaseName**: string: Helm release name.
* **releaseNamespace**: string: Helm release namespace.
* **values**: string: Helm release values.

## HelmMappingRuleProfileOptions
### Properties
* **installOptions**: [HelmInstallOptions](#helminstalloptions): The helm deployment install options
* **upgradeOptions**: [HelmUpgradeOptions](#helmupgradeoptions): The helm deployment upgrade options

## HelmUpgradeOptions
### Properties
* **atomic**: string: The helm deployment atomic options
* **timeout**: string: The helm deployment timeout options
* **wait**: string: The helm deployment wait options

## ImageArtifactProfile
### Properties
* **imageName**: string: Image name.
* **imageVersion**: string: Image version.

## ImageMappingRuleProfile
### Properties
* **userConfiguration**: string: List of values.

## ManagedResourceGroupConfiguration
### Properties
* **location**: string: Managed resource group location.
* **name**: string: Managed resource group name.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManifestArtifactFormat
### Properties
* **artifactName**: string: The artifact name
* **artifactType**: 'ArmTemplate' | 'ImageFile' | 'OCIArtifact' | 'Unknown' | 'VhdImageFile' | string: The artifact type.
* **artifactVersion**: string: The artifact version.

## NetworkFunctionDefinitionGroupPropertiesFormat
### Properties
* **description**: string: The network function definition group description.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the network function definition groups resource.

## NetworkFunctionDefinitionVersionPropertiesFormat
* **Discriminator**: networkFunctionType

### Base Properties
* **deployParameters**: string: The deployment parameters of the network function definition version.
* **description**: string: The network function definition version description.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the network function definition version resource.
* **versionState**: 'Active' | 'Deprecated' | 'Preview' | 'Unknown' | 'Validating' | 'ValidationFailed' | string (ReadOnly): The network function definition version state.

### ContainerizedNetworkFunctionDefinitionVersion
#### Properties
* **networkFunctionTemplate**: [ContainerizedNetworkFunctionTemplate](#containerizednetworkfunctiontemplate): Containerized network function template.
* **networkFunctionType**: 'ContainerizedNetworkFunction' (Required): The network function type.

### VirtualNetworkFunctionDefinitionVersion
#### Properties
* **networkFunctionTemplate**: [VirtualNetworkFunctionTemplate](#virtualnetworkfunctiontemplate): Virtual network function template.
* **networkFunctionType**: 'VirtualNetworkFunction' (Required): The network function type.


## NetworkFunctionPropertiesFormat
* **Discriminator**: configurationType

### Base Properties
* **allowSoftwareUpdate**: bool: Indicates if software updates are allowed during deployment.
* **networkFunctionDefinitionGroupName**: string: The network function definition group name for the network function.
* **networkFunctionDefinitionOfferingLocation**: string: The location of the network function definition offering.
* **networkFunctionDefinitionVersion**: string: The network function definition version for the network function.
* **networkFunctionDefinitionVersionResourceReference**: [DeploymentResourceIdReference](#deploymentresourceidreference): The network function definition version resource reference.
* **nfviId**: string: The nfviId for the network function.
* **nfviType**: 'AzureArcKubernetes' | 'AzureCore' | 'AzureOperatorNexus' | 'Unknown' | string: The nfvi type for the network function.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the network function resource.
* **publisherName**: string: The publisher name for the network function.
* **publisherScope**: 'Private' | 'Unknown' | string: The scope of the publisher.
* **roleOverrideValues**: string[]: The role configuration override values from the user.

### NetworkFunctionValueWithoutSecrets
#### Properties
* **configurationType**: 'Open' (Required): The value which indicates if NF  values are secrets
* **deploymentValues**: string: The JSON-serialized deployment values from the user.

### NetworkFunctionValueWithSecrets
#### Properties
* **configurationType**: 'Secret' (Required): The value which indicates if NF  values are secrets
* **secretDeploymentValues**: string {sensitive} (WriteOnly): The JSON-serialized secret deployment values from the user. This contains secrets like passwords,keys etc


## NetworkServiceDesignGroupPropertiesFormat
### Properties
* **description**: string: The network service design group description.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the network service design groups resource.

## NetworkServiceDesignVersionPropertiesFormat
### Properties
* **configurationGroupSchemaReferences**: [NetworkServiceDesignVersionPropertiesFormatConfigurationGroupSchemaReferences](#networkservicedesignversionpropertiesformatconfigurationgroupschemareferences): The configuration schemas to used to define the values.
* **description**: string: The network service design version description.
* **nfvisFromSite**: [NetworkServiceDesignVersionPropertiesFormatNfvisFromSite](#networkservicedesignversionpropertiesformatnfvisfromsite): The nfvis from the site.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the network service design version resource.
* **resourceElementTemplates**: [ResourceElementTemplate](#resourceelementtemplate)[]: List of resource element template
* **versionState**: 'Active' | 'Deprecated' | 'Preview' | 'Unknown' | 'Validating' | 'ValidationFailed' | string (ReadOnly): The network service design version state.

## NetworkServiceDesignVersionPropertiesFormatConfigurationGroupSchemaReferences
### Properties
### Additional Properties
* **Additional Properties Type**: [ReferencedResource](#referencedresource)

## NetworkServiceDesignVersionPropertiesFormatNfvisFromSite
### Properties
### Additional Properties
* **Additional Properties Type**: [NfviDetails](#nfvidetails)

## NfviDetails
### Properties
* **name**: string: The nfvi name.
* **type**: string: The nfvi type.

## NFVIs
* **Discriminator**: nfviType

### Base Properties
* **name**: string: Name of the nfvi.

### AzureArcK8SClusterNfviDetails
#### Properties
* **customLocationReference**: [ReferencedResource](#referencedresource): The reference to the custom location.
* **nfviType**: 'AzureArcKubernetes' (Required): The NFVI type.

### AzureCoreNfviDetails
#### Properties
* **location**: string: Location of the Azure core.
* **nfviType**: 'AzureCore' (Required): The NFVI type.

### AzureOperatorNexusClusterNfviDetails
#### Properties
* **customLocationReference**: [ReferencedResource](#referencedresource): The reference to the custom location.
* **nfviType**: 'AzureOperatorNexus' (Required): The NFVI type.


## NSDArtifactProfile
### Properties
* **artifactName**: string: Artifact name.
* **artifactStoreReference**: [ReferencedResource](#referencedresource): The artifact store resource id
* **artifactVersion**: string: Artifact version.

## Pod
### Properties
* **creationTime**: string: Creation Time of Pod.
* **desired**: int: Desired number of containers
* **events**: [PodEvent](#podevent)[]: Last 5 Pod events.
* **name**: string: The name of the Pod.
* **namespace**: string: The namespace of the Pod.
* **ready**: int: Number of ready containers.
* **status**: 'Failed' | 'NotReady' | 'Pending' | 'Running' | 'Succeeded' | 'Terminating' | 'Unknown' | string: The status of a pod.

## PodEvent
### Properties
* **lastSeenTime**: string: Event Last seen.
* **message**: string: Event message.
* **reason**: string: Event reason.
* **type**: 'Normal' | 'Warning' | string: The type of pod event.

## PublisherPropertiesFormat
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the publisher resource.
* **scope**: 'Private' | 'Unknown' | string: The publisher scope.

## ReferencedResource
### Properties
* **id**: string: Resource ID.

## ReplicaSet
### Properties
* **creationTime**: string: Creation Time of replicaSet.
* **current**: int: Number of current pods.
* **desired**: int: Desired number of pods
* **name**: string: The name of the replicaSet.
* **namespace**: string: The namespace of the replicaSet.
* **ready**: int: Number of ready pods.

## ResourceElementTemplate
* **Discriminator**: type

### Base Properties
* **dependsOnProfile**: [DependsOnProfile](#dependsonprofile): The depends on profile.
* **name**: string: Name of the resource element template.

### ArmResourceDefinitionResourceElementTemplateDetails
#### Properties
* **configuration**: [ArmResourceDefinitionResourceElementTemplate](#armresourcedefinitionresourceelementtemplate): The resource element template type.
* **type**: 'ArmResourceDefinition' (Required): The resource element template type.

### NetworkFunctionDefinitionResourceElementTemplateDetails
#### Properties
* **configuration**: [ArmResourceDefinitionResourceElementTemplate](#armresourcedefinitionresourceelementtemplate): The resource element template type.
* **type**: 'NetworkFunctionDefinition' (Required): The resource element template type.


## Resources
### Properties
* **daemonSets**: [DaemonSet](#daemonset)[]: Daemonsets related to component resource.
* **deployments**: [Deployment](#deployment)[]: Deployments that are related to component resource.
* **pods**: [Pod](#pod)[]: Pods related to component resource.
* **replicaSets**: [ReplicaSet](#replicaset)[]: Replica sets related to component resource.
* **statefulSets**: [StatefulSet](#statefulset)[]: Stateful sets related to component resource.

## SiteNetworkServicePropertiesFormat
### Properties
* **desiredStateConfigurationGroupValueReferences**: [SiteNetworkServicePropertiesFormatDesiredStateConfigurationGroupValueReferences](#sitenetworkservicepropertiesformatdesiredstateconfigurationgroupvaluereferences): The goal state of the site network service resource. This has references to the configuration group value objects that describe the desired state of the site network service.
* **lastStateConfigurationGroupValueReferences**: [SiteNetworkServicePropertiesFormatLastStateConfigurationGroupValueReferences](#sitenetworkservicepropertiesformatlaststateconfigurationgroupvaluereferences) (ReadOnly): The last state of the site network service resource.
* **lastStateNetworkServiceDesignVersionName**: string (ReadOnly): The network service design version for the site network service.
* **managedResourceGroupConfiguration**: [ManagedResourceGroupConfiguration](#managedresourcegroupconfiguration): Managed resource group configuration.
* **networkServiceDesignGroupName**: string (ReadOnly): The network service design group name for the site network service.
* **networkServiceDesignVersionName**: string (ReadOnly): The network service design version for the site network service.
* **networkServiceDesignVersionOfferingLocation**: string (ReadOnly): The location of the network service design offering.
* **networkServiceDesignVersionResourceReference**: [DeploymentResourceIdReference](#deploymentresourceidreference): The network service design version resource reference.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the site network service resource.
* **publisherName**: string (ReadOnly): The publisher name for the site network service.
* **publisherScope**: 'Private' | 'Unknown' | string (ReadOnly): The scope of the publisher.
* **siteReference**: [ReferencedResource](#referencedresource): The site details

## SiteNetworkServicePropertiesFormatDesiredStateConfigurationGroupValueReferences
### Properties
### Additional Properties
* **Additional Properties Type**: [ReferencedResource](#referencedresource)

## SiteNetworkServicePropertiesFormatLastStateConfigurationGroupValueReferences
### Properties
### Additional Properties
* **Additional Properties Type**: [ReferencedResource](#referencedresource)

## SitePropertiesFormat
### Properties
* **nfvis**: [NFVIs](#nfvis)[]: List of NFVIs
* **provisioningState**: 'Accepted' | 'Canceled' | 'Converging' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | string (ReadOnly): The provisioning state of the site resource. **TODO**: Confirm if this is needed.
* **siteNetworkServiceReferences**: [ReferencedResource](#referencedresource)[] (ReadOnly): The list of site network services on the site.

## Sku
### Properties
* **name**: 'Basic' | 'Standard' | string (Required): Name of this Sku
* **tier**: 'Basic' | 'Standard' | string (ReadOnly): The SKU tier based on the SKU name.

## StatefulSet
### Properties
* **creationTime**: string: Creation Time of statefulset.
* **desired**: int: Desired number of pods
* **name**: string: The name of the statefulset.
* **namespace**: string: The namespace of the statefulset.
* **ready**: int: Number of ready pods.

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VhdImageArtifactProfile
### Properties
* **vhdName**: string: Vhd name.
* **vhdVersion**: string: Vhd version.

## VhdImageMappingRuleProfile
### Properties
* **userConfiguration**: string: List of values.

## VirtualNetworkFunctionTemplate
* **Discriminator**: nfviType

### Base Properties

### AzureCoreNetworkFunctionTemplate
#### Properties
* **networkFunctionApplications**: [AzureCoreNetworkFunctionApplication](#azurecorenetworkfunctionapplication)[]: Network function applications.
* **nfviType**: 'AzureCore' (Required): The network function type.

### AzureOperatorNexusNetworkFunctionTemplate
#### Properties
* **networkFunctionApplications**: [AzureOperatorNexusNetworkFunctionApplication](#azureoperatornexusnetworkfunctionapplication)[]: Network function applications.
* **nfviType**: 'AzureOperatorNexus' (Required): The network function type.


