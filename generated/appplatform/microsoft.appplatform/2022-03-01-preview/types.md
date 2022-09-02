# Microsoft.AppPlatform @ 2022-03-01-preview

## Resource Microsoft.AppPlatform/Spring@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The GEO location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterResourceProperties](#clusterresourceproperties): Properties of the Service resource
* **sku**: [Sku](#sku): Sku of the Service resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the service which is a list of key value pairs that describe the resource.
* **type**: 'Microsoft.AppPlatform/Spring' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apiPortals@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiPortalProperties](#apiportalproperties): API portal properties payload
* **sku**: [Sku](#sku): Sku of the API portal resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apiPortals' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apiPortals/domains@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiPortalCustomDomainProperties](#apiportalcustomdomainproperties): The properties of custom domain for API portal
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apiPortals/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentityProperties](#managedidentityproperties): The Managed Identity type of the app resource
* **location**: string: The GEO location of the application, always the same with its parent resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppResourceProperties](#appresourceproperties): Properties of the App resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps/bindings@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BindingResourceProperties](#bindingresourceproperties): Properties of the Binding resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apps/bindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps/deployments@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentResourceProperties](#deploymentresourceproperties): Properties of the Deployment resource
* **sku**: [Sku](#sku): Sku of the Deployment resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apps/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps/domains@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomDomainProperties](#customdomainproperties): Properties of the custom domain resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apps/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices@2022-03-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildServiceProperties](#buildserviceproperties) (ReadOnly): Properties of the build resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/agentPools@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildServiceAgentPoolProperties](#buildserviceagentpoolproperties): build service agent pool properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/builders@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuilderProperties](#builderproperties): Property of the Builder resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/builders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildpackBindingProperties](#buildpackbindingproperties): Properties of a buildpack binding
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/builds@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildProperties](#buildproperties): Properties of the build resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/builds' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/builds/results@2022-03-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildResultProperties](#buildresultproperties) (ReadOnly): Properties of the build result resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/builds/results' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/supportedBuildpacks@2022-03-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SupportedBuildpackResourceProperties](#supportedbuildpackresourceproperties) (ReadOnly): Supported buildpack resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/supportedBuildpacks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/supportedStacks@2022-03-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SupportedStackResourceProperties](#supportedstackresourceproperties) (ReadOnly): Supported stack resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/supportedStacks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/certificates@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties): Properties of the certificate resource payload.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/configServers@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigServerProperties](#configserverproperties): Properties of the Config Server resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/configServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/configurationServices@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationServiceProperties](#configurationserviceproperties): Application Configuration Service properties payload
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/configurationServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/gateways@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayProperties](#gatewayproperties): Spring Cloud Gateway properties payload
* **sku**: [Sku](#sku): Sku of the Spring Cloud Gateway resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/gateways/domains@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayCustomDomainProperties](#gatewaycustomdomainproperties): The properties of custom domain for Spring Cloud Gateway
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/gateways/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/gateways/routeConfigs@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayRouteConfigProperties](#gatewayrouteconfigproperties): API route config of the Spring Cloud Gateway
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/gateways/routeConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/monitoringSettings@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringSettingProperties](#monitoringsettingproperties): Properties of the Monitoring Setting resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/monitoringSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/serviceRegistries@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceRegistryProperties](#serviceregistryproperties) (ReadOnly): Service Registry properties payload
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/serviceRegistries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/storages@2022-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageProperties](#storageproperties): Properties of the storage resource payload.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/storages' (ReadOnly, DeployTimeConstant): The resource type

## Function listTestKeys (Microsoft.AppPlatform/Spring@2022-03-01-preview)
* **Resource**: Microsoft.AppPlatform/Spring
* **ApiVersion**: 2022-03-01-preview
* **Output**: [TestKeys](#testkeys)

## AddonProfile
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AddonProfile
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ApiPortalCustomDomainProperties
### Properties
* **thumbprint**: string: The thumbprint of bound certificate.

## ApiPortalInstance
### Properties
* **name**: string (ReadOnly): Name of the API portal instance
* **status**: string (ReadOnly): Status of the API portal instance

## ApiPortalProperties
### Properties
* **gatewayIds**: string[]: The array of resource Ids of gateway to integrate with API portal.
* **httpsOnly**: bool: Indicate if only https is allowed.
* **instances**: [ApiPortalInstance](#apiportalinstance)[] (ReadOnly): Collection of instances belong to API portal.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the API portal.
* **public**: bool: Indicates whether the API portal exposes endpoint.
* **resourceRequests**: [ApiPortalResourceRequests](#apiportalresourcerequests) (ReadOnly): The requested resource quantity for required CPU and Memory.
* **sourceUrls**: string[]: Collection of OpenAPI source URL locations.
* **ssoProperties**: [SsoProperties](#ssoproperties): Single sign-on related configuration
* **url**: string (ReadOnly): URL of the API portal, exposed when 'public' is true.

## ApiPortalResourceRequests
### Properties
* **cpu**: string (ReadOnly): Cpu allocated to each API portal instance
* **memory**: string (ReadOnly): Memory allocated to each API portal instance

## ApplicationInsightsAgentVersions
### Properties
* **java**: string (ReadOnly): Indicates the version of application insight java agent

## AppResourceProperties
### Properties
* **addonConfigs**: [AppResourcePropertiesAddonConfigs](#appresourcepropertiesaddonconfigs): Collection of addons
* **customPersistentDisks**: [CustomPersistentDiskResource](#custompersistentdiskresource)[]: List of custom persistent disks
* **enableEndToEndTLS**: bool: Indicate if end to end TLS is enabled.
* **fqdn**: string: Fully qualified dns Name.
* **httpsOnly**: bool: Indicate if only https is allowed.
* **loadedCertificates**: [LoadedCertificate](#loadedcertificate)[]: Collection of loaded certificates
* **persistentDisk**: [PersistentDisk](#persistentdisk): Persistent disk settings
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the App
* **public**: bool: Indicates whether the App exposes public endpoint
* **temporaryDisk**: [TemporaryDisk](#temporarydisk): Temporary disk settings
* **url**: string (ReadOnly): URL of the App

## AppResourcePropertiesAddonConfigs
### Properties
### Additional Properties
* **Additional Properties Type**: [AddonProfile](#addonprofile)

## BindingResourceProperties
### Properties
* **bindingParameters**: [BindingResourcePropertiesBindingParameters](#bindingresourcepropertiesbindingparameters): Binding parameters of the Binding resource
* **createdAt**: string (ReadOnly): Creation time of the Binding resource
* **generatedProperties**: string (ReadOnly): The generated Spring Boot property file for this binding. The secret will be deducted.
* **key**: string: The key of the bound resource
* **resourceId**: string: The Azure resource id of the bound resource
* **resourceName**: string (ReadOnly): The name of the bound resource
* **resourceType**: string (ReadOnly): The standard Azure resource type of the bound resource
* **updatedAt**: string (ReadOnly): Update time of the Binding resource

## BindingResourcePropertiesBindingParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## BuilderProperties
### Properties
* **buildpackGroups**: [BuildpacksGroupProperties](#buildpacksgroupproperties)[]: Builder buildpack groups.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Builder provision status.
* **stack**: [StackProperties](#stackproperties): Builder cluster stack property.

## BuildpackBindingLaunchProperties
### Properties
* **properties**: [BuildpackBindingLaunchProperties](#buildpackbindinglaunchproperties): Non-sensitive properties for launchProperties
* **secrets**: [BuildpackBindingLaunchPropertiesSecrets](#buildpackbindinglaunchpropertiessecrets): Sensitive properties for launchProperties

## BuildpackBindingLaunchProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BuildpackBindingLaunchPropertiesSecrets
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BuildpackBindingProperties
### Properties
* **bindingType**: 'ApacheSkyWalking' | 'AppDynamics' | 'ApplicationInsights' | 'Dynatrace' | 'ElasticAPM' | 'NewRelic' | string: Buildpack Binding Type
* **launchProperties**: [BuildpackBindingLaunchProperties](#buildpackbindinglaunchproperties): The object describes the buildpack binding launch properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Buildpack Binding.

## BuildpackProperties
### Properties
* **id**: string: Id of the buildpack

## BuildpacksGroupProperties
### Properties
* **buildpacks**: [BuildpackProperties](#buildpackproperties)[]: Buildpacks in the buildpack group
* **name**: string: Buildpack group name

## BuildProperties
### Properties
* **agentPool**: string: The resource id of agent pool
* **builder**: string: The resource id of builder to build the source code
* **env**: [BuildPropertiesEnv](#buildpropertiesenv): The environment variables for this build
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the KPack build result
* **relativePath**: string: The relative path of source code
* **triggeredBuildResult**: [TriggeredBuildResult](#triggeredbuildresult) (ReadOnly): The build result triggered by this build

## BuildPropertiesEnv
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BuildResultProperties
### Properties
* **buildPodName**: string: The build pod name which can be used to get the build log streaming.
* **buildStages**: [BuildStageProperties](#buildstageproperties)[] (ReadOnly): All of the build stage (init-container and container) resources in build pod.
* **name**: string: The name of this build result
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Queuing' | 'Succeeded' | string (ReadOnly): Provisioning state of the KPack build result

## BuildServiceAgentPoolProperties
### Properties
* **poolSize**: [BuildServiceAgentPoolSizeProperties](#buildserviceagentpoolsizeproperties): build service agent pool size properties
* **provisioningState**: string (ReadOnly): Provisioning state of the build service agent pool

## BuildServiceAgentPoolSizeProperties
### Properties
* **cpu**: string (ReadOnly): The cpu property of build service agent pool size
* **memory**: string (ReadOnly): The memory property of build service agent pool size
* **name**: string: The name of build service agent pool size

## BuildServiceProperties
### Properties
* **kPackVersion**: string: The installed KPack version in this build service.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the KPack build result
* **resourceRequests**: [BuildServicePropertiesResourceRequests](#buildservicepropertiesresourcerequests): The runtime resource configuration of this build service.

## BuildServicePropertiesResourceRequests
### Properties
* **cpu**: string (ReadOnly): vCPU allocated to the entire build service node pool.
* **memory**: string (ReadOnly): Memory allocated to the entire build service node pool.

## BuildStageProperties
### Properties
* **name**: string (ReadOnly): The name of this build stage resource.
* **status**: 'Failed' | 'NotStarted' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of this build stage resource.

## CertificateProperties
* **Discriminator**: type

### Base Properties
* **activateDate**: string (ReadOnly): The activate date of certificate.
* **dnsNames**: string[] (ReadOnly): The domain list of certificate.
* **expirationDate**: string (ReadOnly): The expiration date of certificate.
* **issuedDate**: string (ReadOnly): The issue date of certificate.
* **issuer**: string (ReadOnly): The issuer of certificate.
* **subjectName**: string (ReadOnly): The subject name of certificate.
* **thumbprint**: string (ReadOnly): The thumbprint of certificate.

### ContentCertificateProperties
#### Properties
* **content**: string (WriteOnly): The content of uploaded certificate.
* **type**: 'ContentCertificate' (Required): The type of the certificate source.

### KeyVaultCertificateProperties
#### Properties
* **certVersion**: string: The certificate version of key vault.
* **excludePrivateKey**: bool: Optional. If set to true, it will not import private key from key vault.
* **keyVaultCertName**: string (Required): The certificate name of key vault.
* **type**: 'KeyVaultCertificate' (Required): The type of the certificate source.
* **vaultUri**: string (Required): The vault uri of user key vault.


## ClusterResourceProperties
### Properties
* **fqdn**: string (ReadOnly): Fully qualified dns name of the service instance
* **networkProfile**: [NetworkProfile](#networkprofile): Network profile of the Service
* **powerState**: 'Running' | 'Stopped' | string (ReadOnly): Power state of the Service
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MoveFailed' | 'Moved' | 'Moving' | 'Starting' | 'Stopping' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Service
* **serviceId**: string (ReadOnly): ServiceInstanceEntity GUID which uniquely identifies a created resource
* **version**: int (ReadOnly): Version of the Service
* **zoneRedundant**: bool

## ConfigServerGitProperty
### Properties
* **hostKey**: string: Public sshKey of git repository.
* **hostKeyAlgorithm**: string: SshKey algorithm of git repository.
* **label**: string: Label of the repository
* **password**: string: Password of git repository basic auth.
* **privateKey**: string: Private sshKey algorithm of git repository.
* **repositories**: [GitPatternRepository](#gitpatternrepository)[]: Repositories of git.
* **searchPaths**: string[]: Searching path of the repository
* **strictHostKeyChecking**: bool: Strict host key checking or not.
* **uri**: string (Required): URI of the repository
* **username**: string: Username of git repository basic auth.

## ConfigServerProperties
### Properties
* **configServer**: [ConfigServerSettings](#configserversettings): Settings of config server.
* **error**: [Error](#error): Error when apply config server settings.
* **provisioningState**: 'Deleted' | 'Failed' | 'NotAvailable' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the config server.

## ConfigServerSettings
### Properties
* **gitProperty**: [ConfigServerGitProperty](#configservergitproperty): Property of git environment.

## ConfigurationServiceGitProperty
### Properties
* **repositories**: [ConfigurationServiceGitRepository](#configurationservicegitrepository)[]: Repositories of Application Configuration Service git property.

## ConfigurationServiceGitRepository
### Properties
* **hostKey**: string: Public sshKey of git repository.
* **hostKeyAlgorithm**: string: SshKey algorithm of git repository.
* **label**: string (Required): Label of the repository
* **name**: string (Required): Name of the repository
* **password**: string: Password of git repository basic auth.
* **patterns**: string[] (Required): Collection of patterns of the repository
* **privateKey**: string: Private sshKey algorithm of git repository.
* **searchPaths**: string[]: Searching path of the repository
* **strictHostKeyChecking**: bool: Strict host key checking or not.
* **uri**: string (Required): URI of the repository
* **username**: string: Username of git repository basic auth.

## ConfigurationServiceInstance
### Properties
* **name**: string (ReadOnly): Name of the Application Configuration Service instance
* **status**: string (ReadOnly): Status of the Application Configuration Service instance

## ConfigurationServiceProperties
### Properties
* **instances**: [ConfigurationServiceInstance](#configurationserviceinstance)[] (ReadOnly): Collection of instances belong to Application Configuration Service.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Application Configuration Service.
* **resourceRequests**: [ConfigurationServiceResourceRequests](#configurationserviceresourcerequests) (ReadOnly): The requested resource quantity for required CPU and Memory.
* **settings**: [ConfigurationServiceSettings](#configurationservicesettings): The settings of Application Configuration Service.

## ConfigurationServiceResourceRequests
### Properties
* **cpu**: string (ReadOnly): Cpu allocated to each Application Configuration Service instance
* **instanceCount**: int (ReadOnly): Instance count of the Application Configuration Service
* **memory**: string (ReadOnly): Memory allocated to each Application Configuration Service instance

## ConfigurationServiceSettings
### Properties
* **gitProperty**: [ConfigurationServiceGitProperty](#configurationservicegitproperty): Property of git environment.

## ContainerProbeSettings
### Properties
* **disableProbe**: bool: Indicates whether disable the liveness and readiness probe

## CustomContainer
### Properties
* **args**: string[]: Arguments to the entrypoint. The docker image's CMD is used if this is not provided.
* **command**: string[]: Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided.
* **containerImage**: string: Container image of the custom container. This should be in the form of <repository>:<tag> without the server name of the registry
* **imageRegistryCredential**: [ImageRegistryCredential](#imageregistrycredential): Credential of the image registry
* **languageFramework**: string: Language framework of the container image uploaded
* **server**: string: The name of the registry that contains the container image

## CustomDomainProperties
### Properties
* **appName**: string (ReadOnly): The app name of domain.
* **certName**: string: The bound certificate name of domain.
* **thumbprint**: string: The thumbprint of bound certificate.

## CustomPersistentDiskProperties
* **Discriminator**: type

### Base Properties
* **mountOptions**: string[]: These are the mount options for a persistent disk.
* **mountPath**: string (Required): The mount path of the persistent disk.
* **readOnly**: bool: Indicates whether the persistent disk is a readOnly one.

### AzureFileVolume
#### Properties
* **shareName**: string (Required): The share name of the Azure File share.
* **type**: 'AzureFileVolume' (Required): The type of the underlying resource to mount as a persistent disk.


## CustomPersistentDiskResource
### Properties
* **customPersistentDiskProperties**: [CustomPersistentDiskProperties](#custompersistentdiskproperties): Properties of the custom persistent disk resource payload.
* **storageId**: string (Required): The resource id of Azure Spring Cloud Storage resource.

## DeploymentInstance
### Properties
* **discoveryStatus**: string (ReadOnly): Discovery status of the deployment instance
* **name**: string (ReadOnly): Name of the deployment instance
* **reason**: string (ReadOnly): Failed reason of the deployment instance
* **startTime**: string (ReadOnly): Start time of the deployment instance
* **status**: string (ReadOnly): Status of the deployment instance
* **zone**: string (ReadOnly): Availability zone information of the deployment instance

## DeploymentResourceProperties
### Properties
* **active**: bool: Indicates whether the Deployment is active
* **deploymentSettings**: [DeploymentSettings](#deploymentsettings): Deployment settings of the Deployment
* **instances**: [DeploymentInstance](#deploymentinstance)[] (ReadOnly): Collection of instances belong to the Deployment
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Deployment
* **source**: [UserSourceInfo](#usersourceinfo): Uploaded source information of the deployment.
* **status**: 'Running' | 'Stopped' | string (ReadOnly): Status of the Deployment

## DeploymentSettings
### Properties
* **addonConfigs**: [DeploymentSettingsAddonConfigs](#deploymentsettingsaddonconfigs): Collection of addons
* **containerProbeSettings**: [ContainerProbeSettings](#containerprobesettings): Container liveness and readiness probe settings
* **environmentVariables**: [DeploymentSettingsEnvironmentVariables](#deploymentsettingsenvironmentvariables): Collection of environment variables
* **resourceRequests**: [ResourceRequests](#resourcerequests): The requested resource quantity for required CPU and Memory. It is recommended that using this field to represent the required CPU and Memory, the old field cpu and memoryInGB will be deprecated later.

## DeploymentSettingsAddonConfigs
### Properties
### Additional Properties
* **Additional Properties Type**: [AddonProfile](#addonprofile)

## DeploymentSettingsEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Error
### Properties
* **code**: string: The code of error.
* **message**: string: The message of error.

## GatewayApiMetadataProperties
### Properties
* **description**: string: Detailed description of the APIs available on the Gateway instance (default: `Generated OpenAPI 3 document that describes the API routes configured.`)
* **documentation**: string: Location of additional documentation for the APIs available on the Gateway instance
* **serverUrl**: string: Base URL that API consumers will use to access APIs on the Gateway instance.
* **title**: string: Title describing the context of the APIs available on the Gateway instance (default: `Spring Cloud Gateway for K8S`)
* **version**: string: Version of APIs available on this Gateway instance (default: `unspecified`).

## GatewayApiRoute
### Properties
* **description**: string: A description, will be applied to methods in the generated OpenAPI documentation.
* **filters**: string[]: To modify the request before sending it to the target endpoint, or the received response.
* **order**: int: Route processing order.
* **predicates**: string[]: A number of conditions to evaluate a route for each request. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
* **ssoEnabled**: bool: Enable sso validation.
* **tags**: string[]: Classification tags, will be applied to methods in the generated OpenAPI documentation.
* **title**: string: A title, will be applied to methods in the generated OpenAPI documentation.
* **tokenRelay**: bool: Pass currently-authenticated user's identity token to application service, default is 'false'
* **uri**: string: Full uri, will override `appName`.

## GatewayCorsProperties
### Properties
* **allowCredentials**: bool: Whether user credentials are supported on cross-site requests. Valid values: `true`, `false`.
* **allowedHeaders**: string[]: Allowed headers in cross-site requests. The special value `*` allows actual requests to send any header.
* **allowedMethods**: string[]: Allowed HTTP methods on cross-site requests. The special value `*` allows all methods. If not set, `GET` and `HEAD` are allowed by default.
* **allowedOrigins**: string[]: Allowed origins to make cross-site requests. The special value `*` allows all domains.
* **exposedHeaders**: string[]: HTTP response headers to expose for cross-site requests.
* **maxAge**: int: How long, in seconds, the response from a pre-flight request can be cached by clients.

## GatewayCustomDomainProperties
### Properties
* **thumbprint**: string: The thumbprint of bound certificate.

## GatewayInstance
### Properties
* **name**: string (ReadOnly): Name of the Spring Cloud Gateway instance
* **status**: string (ReadOnly): Status of the Spring Cloud Gateway instance

## GatewayOperatorProperties
### Properties
* **instances**: [GatewayInstance](#gatewayinstance)[] (ReadOnly): Collection of instances belong to Spring Cloud Gateway operator.
* **resourceRequests**: [GatewayOperatorResourceRequests](#gatewayoperatorresourcerequests) (ReadOnly): The requested resource quantity for required CPU and Memory.

## GatewayOperatorResourceRequests
### Properties
* **cpu**: string (ReadOnly): Cpu allocated to each Spring Cloud Gateway Operator instance.
* **instanceCount**: int (ReadOnly): Instance count of the Spring Cloud Gateway Operator.
* **memory**: string (ReadOnly): Memory allocated to each Spring Cloud Gateway Operator instance.

## GatewayProperties
### Properties
* **apiMetadataProperties**: [GatewayApiMetadataProperties](#gatewayapimetadataproperties): API metadata property for Spring Cloud Gateway
* **corsProperties**: [GatewayCorsProperties](#gatewaycorsproperties): Cross-Origin Resource Sharing property
* **httpsOnly**: bool: Indicate if only https is allowed.
* **instances**: [GatewayInstance](#gatewayinstance)[] (ReadOnly): Collection of instances belong to Spring Cloud Gateway.
* **operatorProperties**: [GatewayOperatorProperties](#gatewayoperatorproperties) (ReadOnly): Properties of the Spring Cloud Gateway Operator.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Spring Cloud Gateway.
* **public**: bool: Indicates whether the Spring Cloud Gateway exposes endpoint.
* **resourceRequests**: [GatewayResourceRequests](#gatewayresourcerequests): The requested resource quantity for required CPU and Memory.
* **ssoProperties**: [SsoProperties](#ssoproperties): Single sign-on related configuration
* **url**: string (ReadOnly): URL of the Spring Cloud Gateway, exposed when 'public' is true.

## GatewayResourceRequests
### Properties
* **cpu**: string: Cpu allocated to each Spring Cloud Gateway instance.
* **memory**: string: Memory allocated to each Spring Cloud Gateway instance.

## GatewayRouteConfigProperties
### Properties
* **appResourceId**: string: The resource Id of the Azure Spring Cloud app, required unless route defines `uri`.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Spring Cloud Gateway route config.
* **routes**: [GatewayApiRoute](#gatewayapiroute)[]: Array of API routes, each route contains properties such as `title`, `uri`, `ssoEnabled`, `predicates`, `filters`.

## GitPatternRepository
### Properties
* **hostKey**: string: Public sshKey of git repository.
* **hostKeyAlgorithm**: string: SshKey algorithm of git repository.
* **label**: string: Label of the repository
* **name**: string (Required): Name of the repository
* **password**: string: Password of git repository basic auth.
* **pattern**: string[]: Collection of pattern of the repository
* **privateKey**: string: Private sshKey algorithm of git repository.
* **searchPaths**: string[]: Searching path of the repository
* **strictHostKeyChecking**: bool: Strict host key checking or not.
* **uri**: string (Required): URI of the repository
* **username**: string: Username of git repository basic auth.

## ImageRegistryCredential
### Properties
* **password**: string: The password of the image registry credential
* **username**: string: The username of the image registry credential

## LoadedCertificate
### Properties
* **loadTrustStore**: bool: Indicate whether the certificate will be loaded into default trust store, only work for Java runtime.
* **resourceId**: string (Required): Resource Id of loaded certificate

## ManagedIdentityProperties
### Properties
* **principalId**: string: Principal Id of system-assigned managed identity.
* **tenantId**: string: Tenant Id of system-assigned managed identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string: Type of the managed identity
* **userAssignedIdentities**: [UserAssignedManagedIdentities](#userassignedmanagedidentities): Properties of user-assigned managed identities

## MonitoringSettingProperties
### Properties
* **appInsightsAgentVersions**: [ApplicationInsightsAgentVersions](#applicationinsightsagentversions): Indicates the versions of application insight agent
* **appInsightsInstrumentationKey**: string: Target application insight instrumentation key, null or whitespace include empty will disable monitoringSettings
* **appInsightsSamplingRate**: int: Indicates the sampling rate of application insight agent, should be in range [0.0, 100.0]
* **error**: [Error](#error): Error when apply Monitoring Setting changes.
* **provisioningState**: 'Failed' | 'NotAvailable' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Monitoring Setting.
* **traceEnabled**: bool: Indicates whether enable the trace functionality, which will be deprecated since api version 2020-11-01-preview. Please leverage appInsightsInstrumentationKey to indicate if monitoringSettings enabled or not

## NetworkProfile
### Properties
* **appNetworkResourceGroup**: string: Name of the resource group containing network resources of Azure Spring Cloud Apps
* **appSubnetId**: string: Fully qualified resource Id of the subnet to host Azure Spring Cloud Apps
* **outboundIPs**: [NetworkProfileOutboundIPs](#networkprofileoutboundips) (ReadOnly): Desired outbound IP resources for Azure Spring Cloud instance.
* **requiredTraffics**: [RequiredTraffic](#requiredtraffic)[] (ReadOnly): Required inbound or outbound traffics for Azure Spring Cloud instance.
* **serviceCidr**: string: Azure Spring Cloud service reserved CIDR
* **serviceRuntimeNetworkResourceGroup**: string: Name of the resource group containing network resources of Azure Spring Cloud Service Runtime
* **serviceRuntimeSubnetId**: string: Fully qualified resource Id of the subnet to host Azure Spring Cloud Service Runtime

## NetworkProfileOutboundIPs
### Properties
* **publicIPs**: string[] (ReadOnly): A list of public IP addresses.

## PersistentDisk
### Properties
* **mountPath**: string: Mount path of the persistent disk
* **sizeInGB**: int: Size of the persistent disk in GB
* **usedInGB**: int (ReadOnly): Size of the used persistent disk in GB

## RequiredTraffic
### Properties
* **direction**: 'Inbound' | 'Outbound' | string (ReadOnly): The direction of required traffic
* **fqdns**: string[] (ReadOnly): The FQDN list of required traffic
* **ips**: string[] (ReadOnly): The ip list of required traffic
* **port**: int (ReadOnly): The port of required traffic
* **protocol**: string (ReadOnly): The protocol of required traffic

## ResourceRequests
### Properties
* **cpu**: string: Required CPU. 1 core can be represented by 1 or 1000m. This should be 500m or 1 for Basic tier, and {500m, 1, 2, 3, 4} for Standard tier.
* **memory**: string: Required memory. 1 GB can be represented by 1Gi or 1024Mi. This should be {512Mi, 1Gi, 2Gi} for Basic tier, and {512Mi, 1Gi, 2Gi, ..., 8Gi} for Standard tier.

## ServiceRegistryInstance
### Properties
* **name**: string (ReadOnly): Name of the Service Registry instance
* **status**: string (ReadOnly): Status of the Service Registry instance

## ServiceRegistryProperties
### Properties
* **instances**: [ServiceRegistryInstance](#serviceregistryinstance)[] (ReadOnly): Collection of instances belong to Service Registry.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Service Registry.
* **resourceRequests**: [ServiceRegistryResourceRequests](#serviceregistryresourcerequests) (ReadOnly): The requested resource quantity for required CPU and Memory.

## ServiceRegistryResourceRequests
### Properties
* **cpu**: string (ReadOnly): Cpu allocated to each Service Registry instance
* **instanceCount**: int (ReadOnly): Instance count of the Service Registry
* **memory**: string (ReadOnly): Memory allocated to each Service Registry instance

## Sku
### Properties
* **capacity**: int: Current capacity of the target resource
* **name**: string: Name of the Sku
* **tier**: string: Tier of the Sku

## SsoProperties
### Properties
* **clientId**: string: The public identifier for the application
* **clientSecret**: string: The secret known only to the application and the authorization server
* **issuerUri**: string: The URI of Issuer Identifier
* **scope**: string[]: It defines the specific actions applications can be allowed to do on a user's behalf

## StackProperties
### Properties
* **id**: string: Id of the ClusterStack.
* **version**: string: Version of the ClusterStack

## StorageProperties
* **Discriminator**: storageType

### Base Properties

### StorageAccount
#### Properties
* **accountKey**: string (Required, WriteOnly): The account key of the Azure Storage Account.
* **accountName**: string (Required): The account name of the Azure Storage Account.
* **storageType**: 'StorageAccount' (Required): The type of the storage.


## SupportedBuildpackResourceProperties
### Properties
* **buildpackId**: string: The id of supported buildpack

## SupportedStackResourceProperties
### Properties
* **stackId**: string: The id of supported stack
* **version**: string: The version of supported stack

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource modification (UTC).
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TemporaryDisk
### Properties
* **mountPath**: string: Mount path of the temporary disk
* **sizeInGB**: int: Size of the temporary disk in GB

## TestKeys
### Properties
* **enabled**: bool: Indicates whether the test endpoint feature enabled or not
* **primaryKey**: string: Primary key
* **primaryTestEndpoint**: string: Primary test endpoint
* **secondaryKey**: string: Secondary key
* **secondaryTestEndpoint**: string: Secondary test endpoint

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TriggeredBuildResult
### Properties
* **id**: string: The unique build id of this build result

## UserAssignedManagedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedManagedIdentity](#userassignedmanagedidentity)

## UserAssignedManagedIdentity
### Properties
* **clientId**: string (ReadOnly): Client Id of user-assigned managed identity.
* **principalId**: string (ReadOnly): Principal Id of user-assigned managed identity.

## UserSourceInfo
* **Discriminator**: type

### Base Properties
* **version**: string: Version of the source

### BuildResultUserSourceInfo
#### Properties
* **buildResultId**: string: Resource id of an existing succeeded build result under the same Spring instance.
* **type**: 'BuildResult' (Required): Type of the source uploaded

### CustomContainerUserSourceInfo
#### Properties
* **customContainer**: [CustomContainer](#customcontainer): Custom container payload
* **type**: 'Container' (Required): Type of the source uploaded

### JarUploadedUserSourceInfo
#### Properties
* **jvmOptions**: string: JVM parameter
* **relativePath**: string: Relative path of the storage which stores the source
* **runtimeVersion**: string: Runtime version of the Jar file
* **type**: 'Jar' (Required): Type of the source uploaded

### NetCoreZipUploadedUserSourceInfo
#### Properties
* **netCoreMainEntryPath**: string: The path to the .NET executable relative to zip root
* **relativePath**: string: Relative path of the storage which stores the source
* **runtimeVersion**: string: Runtime version of the .Net file
* **type**: 'NetCoreZip' (Required): Type of the source uploaded

### SourceUploadedUserSourceInfo
#### Properties
* **artifactSelector**: string: Selector for the artifact to be used for the deployment for multi-module projects. This should be
the relative path to the target module/project.
* **relativePath**: string: Relative path of the storage which stores the source
* **runtimeVersion**: string: Runtime version of the source file
* **type**: 'Source' (Required): Type of the source uploaded


