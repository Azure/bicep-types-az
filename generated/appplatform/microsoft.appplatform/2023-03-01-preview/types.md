# Microsoft.AppPlatform @ 2023-03-01-preview

## Resource Microsoft.AppPlatform/Spring@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The GEO location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterResourceProperties](#clusterresourceproperties): Properties of the Service resource
* **sku**: [Sku](#sku): Sku of the Service resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the service which is a list of key value pairs that describe the resource.
* **type**: 'Microsoft.AppPlatform/Spring' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apiPortals@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiPortalProperties](#apiportalproperties): API portal properties payload
* **sku**: [Sku](#sku): Sku of the API portal resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apiPortals' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apiPortals/domains@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiPortalCustomDomainProperties](#apiportalcustomdomainproperties): The properties of custom domain for API portal
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apiPortals/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/applicationAccelerators@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationAcceleratorProperties](#applicationacceleratorproperties): Application accelerator properties payload
* **sku**: [Sku](#sku): Sku of the application accelerator resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/applicationAccelerators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/applicationAccelerators/customizedAccelerators@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomizedAcceleratorProperties](#customizedacceleratorproperties): Customized accelerator properties payload
* **sku**: [Sku](#sku): Sku of the customized accelerator resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/applicationAccelerators/customizedAccelerators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/applicationAccelerators/predefinedAccelerators@2023-03-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PredefinedAcceleratorProperties](#predefinedacceleratorproperties) (ReadOnly): Predefined accelerator properties payload
* **sku**: [Sku](#sku) (ReadOnly): Sku of the predefined accelerator resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/applicationAccelerators/predefinedAccelerators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/applicationLiveViews@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationLiveViewProperties](#applicationliveviewproperties): Application Live View properties payload
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/applicationLiveViews' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentityProperties](#managedidentityproperties): The Managed Identity type of the app resource
* **location**: string: The GEO location of the application, always the same with its parent resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppResourceProperties](#appresourceproperties): Properties of the App resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps/bindings@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BindingResourceProperties](#bindingresourceproperties): Properties of the Binding resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apps/bindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps/deployments@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentResourceProperties](#deploymentresourceproperties): Properties of the Deployment resource
* **sku**: [Sku](#sku): Sku of the Deployment resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apps/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/apps/domains@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomDomainProperties](#customdomainproperties): Properties of the custom domain resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/apps/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildServiceProperties](#buildserviceproperties): Properties of the build resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/agentPools@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildServiceAgentPoolProperties](#buildserviceagentpoolproperties): build service agent pool properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/agentPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/builders@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuilderProperties](#builderproperties): Property of the Builder resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/builders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildpackBindingProperties](#buildpackbindingproperties): Properties of a buildpack binding
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/builds@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildProperties](#buildproperties): Properties of the build resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/builds' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/builds/results@2023-03-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BuildResultProperties](#buildresultproperties) (ReadOnly): Properties of the build result resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/builds/results' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/supportedBuildpacks@2023-03-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SupportedBuildpackResourceProperties](#supportedbuildpackresourceproperties) (ReadOnly): Supported buildpack resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/supportedBuildpacks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/buildServices/supportedStacks@2023-03-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SupportedStackResourceProperties](#supportedstackresourceproperties) (ReadOnly): Supported stack resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/buildServices/supportedStacks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/certificates@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties): Properties of the certificate resource payload.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/configServers@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigServerProperties](#configserverproperties): Properties of the Config Server resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/configServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/configurationServices@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationServiceProperties](#configurationserviceproperties): Application Configuration Service properties payload
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/configurationServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/containerRegistries@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerRegistryProperties](#containerregistryproperties): Properties of the container registry resource payload.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/containerRegistries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/DevToolPortals@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DevToolPortalProperties](#devtoolportalproperties): Dev Tool Portal properties payload
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/DevToolPortals' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/gateways@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayProperties](#gatewayproperties): Spring Cloud Gateway properties payload
* **sku**: [Sku](#sku): Sku of the Spring Cloud Gateway resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/gateways/domains@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayCustomDomainProperties](#gatewaycustomdomainproperties): The properties of custom domain for Spring Cloud Gateway
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/gateways/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/gateways/routeConfigs@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayRouteConfigProperties](#gatewayrouteconfigproperties): API route config of the Spring Cloud Gateway
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/gateways/routeConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/monitoringSettings@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringSettingProperties](#monitoringsettingproperties): Properties of the Monitoring Setting resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/monitoringSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/serviceRegistries@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceRegistryProperties](#serviceregistryproperties) (ReadOnly): Service Registry properties payload
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/serviceRegistries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppPlatform/Spring/storages@2023-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageProperties](#storageproperties): Properties of the storage resource payload.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AppPlatform/Spring/storages' (ReadOnly, DeployTimeConstant): The resource type

## Function listEnvSecrets (Microsoft.AppPlatform/Spring/gateways@2023-03-01-preview)
* **Resource**: Microsoft.AppPlatform/Spring/gateways
* **ApiVersion**: 2023-03-01-preview
* **Output**: [GatewayEnvSecrets](#gatewayenvsecrets)

## Function listTestKeys (Microsoft.AppPlatform/Spring@2023-03-01-preview)
* **Resource**: Microsoft.AppPlatform/Spring
* **ApiVersion**: 2023-03-01-preview
* **Output**: [TestKeys](#testkeys)

## Function listUsingDeployments (Microsoft.AppPlatform/Spring/buildServices/builders@2023-03-01-preview)
* **Resource**: Microsoft.AppPlatform/Spring/buildServices/builders
* **ApiVersion**: 2023-03-01-preview
* **Output**: [DeploymentList](#deploymentlist)

## AcceleratorAuthSetting
* **Discriminator**: authType

### Base Properties

### AcceleratorBasicAuthSetting
#### Properties
* **authType**: 'BasicAuth' (Required): The type of the auth setting.
* **caCertResourceId**: string: Resource Id of CA certificate for https URL of Git repository.
* **password**: string (WriteOnly): Password of git repository basic auth.
* **username**: string (Required): Username of git repository basic auth.

### AcceleratorPublicSetting
#### Properties
* **authType**: 'Public' (Required): The type of the auth setting.
* **caCertResourceId**: string: Resource Id of CA certificate for https URL of Git repository.

### AcceleratorSshSetting
#### Properties
* **authType**: 'SSH' (Required): The type of the auth setting.
* **hostKey**: string (WriteOnly): Public SSH Key of git repository.
* **hostKeyAlgorithm**: string (WriteOnly): SSH Key algorithm of git repository.
* **privateKey**: string (WriteOnly): Private SSH Key algorithm of git repository.


## AcceleratorGitRepository
### Properties
* **authSetting**: [AcceleratorAuthSetting](#acceleratorauthsetting) (Required): Properties of the auth setting payload.
* **branch**: string: Git repository branch to be used.
* **commit**: string: Git repository commit to be used.
* **gitTag**: string: Git repository tag to be used.
* **intervalInSeconds**: int: Interval for checking for updates to Git or image repository.
* **url**: string (Required): Git repository URL for the accelerator.

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

## ApplicationAcceleratorComponent
### Properties
* **instances**: [ApplicationAcceleratorInstance](#applicationacceleratorinstance)[] (ReadOnly)
* **name**: string (ReadOnly)
* **resourceRequests**: [ApplicationAcceleratorResourceRequests](#applicationacceleratorresourcerequests)

## ApplicationAcceleratorInstance
### Properties
* **name**: string (ReadOnly): Name of the Application Accelerator instance.
* **status**: string (ReadOnly): Status of the Application Accelerator instance. It can be Pending, Running, Succeeded, Failed, Unknown.

## ApplicationAcceleratorProperties
### Properties
* **components**: [ApplicationAcceleratorComponent](#applicationacceleratorcomponent)[] (ReadOnly): Collection of components belong to application accelerator.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the application accelerator.

## ApplicationAcceleratorResourceRequests
### Properties
* **cpu**: string (ReadOnly): Cpu allocated to each application accelerator component. 1 core can be represented by 1 or 1000m
* **instanceCount**: int (ReadOnly): Instance count of the application accelerator component.
* **memory**: string (ReadOnly): Memory allocated to each application accelerator component. 1 GB can be represented by 1Gi or 1024Mi.

## ApplicationInsightsAgentVersions
### Properties
* **java**: string (ReadOnly): Indicates the version of application insight java agent

## ApplicationLiveViewComponent
### Properties
* **instances**: [ApplicationLiveViewInstance](#applicationliveviewinstance)[] (ReadOnly): Collection of instances belong to Application Live View.
* **name**: any (ReadOnly): Name of the component.
* **resourceRequests**: [ApplicationLiveViewResourceRequests](#applicationliveviewresourcerequests) (ReadOnly): The requested resource quantity for required CPU and Memory.

## ApplicationLiveViewInstance
### Properties
* **name**: string (ReadOnly): Name of the Application Live View instance.
* **status**: string (ReadOnly): Status of the Application Live View instance. It can be Pending, Running, Succeeded, Failed, Unknown.

## ApplicationLiveViewProperties
### Properties
* **components**: [ApplicationLiveViewComponent](#applicationliveviewcomponent)[] (ReadOnly): Component details of Application Live View
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Application Live View.

## ApplicationLiveViewResourceRequests
### Properties
* **cpu**: string (ReadOnly): Cpu quantity allocated to each Application Live View component instance. 1 core can be represented by 1 or 1000m.
* **instanceCount**: int (ReadOnly): Desired instance count of Application Live View component instance.
* **memory**: string (ReadOnly): Memory quantity allocated to each Application Live View component instance. 1 GB can be represented by 1Gi or 1024Mi.

## AppResourceProperties
### Properties
* **addonConfigs**: [AppResourcePropertiesAddonConfigs](#appresourcepropertiesaddonconfigs): Collection of addons
* **customPersistentDisks**: [CustomPersistentDiskResource](#custompersistentdiskresource)[]: List of custom persistent disks
* **enableEndToEndTLS**: bool: Indicate if end to end TLS is enabled.
* **fqdn**: string (ReadOnly): Fully qualified dns Name.
* **httpsOnly**: bool: Indicate if only https is allowed.
* **ingressSettings**: [IngressSettings](#ingresssettings): App ingress settings payload.
* **loadedCertificates**: [LoadedCertificate](#loadedcertificate)[]: Collection of loaded certificates
* **persistentDisk**: [PersistentDisk](#persistentdisk): Persistent disk settings
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the App
* **public**: bool: Indicates whether the App exposes public endpoint
* **secrets**: [Secret](#secret)[]: Collection of auth secrets
* **temporaryDisk**: [TemporaryDisk](#temporarydisk): Temporary disk settings
* **url**: string (ReadOnly): URL of the App
* **vnetAddons**: [AppVNetAddons](#appvnetaddons): Additional App settings in vnet injection instance

## AppResourcePropertiesAddonConfigs
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AppVNetAddons
### Properties
* **publicEndpoint**: bool: Indicates whether the App in vnet injection instance exposes endpoint which could be accessed from internet.
* **publicEndpointUrl**: string (ReadOnly): URL of the App in vnet injection instance which could be accessed from internet

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
* **Additional Properties Type**: string

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
* **bindingType**: 'ApacheSkyWalking' | 'AppDynamics' | 'ApplicationInsights' | 'CACertificates' | 'Dynatrace' | 'ElasticAPM' | 'NewRelic' | string: Buildpack Binding Type
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
* **resourceRequests**: [BuildResourceRequests](#buildresourcerequests): The customized build resource for this build
* **triggeredBuildResult**: [TriggeredBuildResult](#triggeredbuildresult) (ReadOnly): The build result triggered by this build

## BuildPropertiesEnv
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BuildResourceRequests
### Properties
* **cpu**: string: Optional Cpu allocated to the build resource. 1 core can be represented by 1 or 1000m. 
The default value is 1, this should not exceed build service agent pool cpu size.
* **memory**: string: Optional Memory allocated to the build resource. 1 GB can be represented by 1Gi or 1024Mi. 
The default value is 2Gi, this should not exceed build service agent pool memory size.

## BuildResultProperties
### Properties
* **buildPodName**: string: The build pod name which can be used to get the build log streaming.
* **buildStages**: [BuildStageProperties](#buildstageproperties)[] (ReadOnly): All of the build stage (init-container and container) resources in build pod.
* **error**: [Error](#error): Error when build is failed.
* **image**: string (ReadOnly): The container registry image of this build result.
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
* **containerRegistry**: string: The resource id of the container registry used in this build service.
* **kPackVersion**: string (ReadOnly): The installed KPack version in this build service.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the KPack build service
* **resourceRequests**: [BuildServicePropertiesResourceRequests](#buildservicepropertiesresourcerequests): The runtime resource configuration of this build service.

## BuildServicePropertiesResourceRequests
### Properties
* **cpu**: string (ReadOnly): vCPU allocated to the entire build service node pool.
* **memory**: string (ReadOnly): Memory allocated to the entire build service node pool.

## BuildStageProperties
### Properties
* **exitCode**: string (ReadOnly): The exit code of this build init container.
* **name**: string (ReadOnly): The name of this build stage resource.
* **reason**: string (ReadOnly): The reason of this build init container.
* **status**: 'Failed' | 'NotStarted' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of this build stage resource.

## CertificateProperties
* **Discriminator**: type

### Base Properties
* **activateDate**: string (ReadOnly): The activate date of certificate.
* **dnsNames**: string[] (ReadOnly): The domain list of certificate.
* **expirationDate**: string (ReadOnly): The expiration date of certificate.
* **issuedDate**: string (ReadOnly): The issue date of certificate.
* **issuer**: string (ReadOnly): The issuer of certificate.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Certificate
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
* **infraResourceGroup**: string: The name of the resource group that contains the infrastructure resources
* **managedEnvironmentId**: string: The resource Id of the Managed Environment that the Spring Apps instance builds on
* **marketplaceResource**: [MarketplaceResource](#marketplaceresource): Purchasing 3rd party product of the Service resource.
* **networkProfile**: [NetworkProfile](#networkprofile): Network profile of the Service
* **powerState**: 'Running' | 'Stopped' | string (ReadOnly): Power state of the Service
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MoveFailed' | 'Moved' | 'Moving' | 'Starting' | 'Stopping' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Service
* **serviceId**: string (ReadOnly): ServiceInstanceEntity GUID which uniquely identifies a created resource
* **version**: int (ReadOnly): Version of the Service
* **vnetAddons**: [ServiceVNetAddons](#servicevnetaddons): Additional Service settings in vnet injection instance
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

## ContainerRegistryCredentials
* **Discriminator**: type

### Base Properties

### ContainerRegistryBasicCredentials
#### Properties
* **password**: string (Required, WriteOnly): The password of the Container Registry.
* **server**: string (Required): The login server of the Container Registry.
* **type**: 'BasicAuth' (Required): The credential type of the container registry credentials.
* **username**: string (Required): The username of the Container Registry.


## ContainerRegistryProperties
### Properties
* **credentials**: [ContainerRegistryCredentials](#containerregistrycredentials) (Required): The credentials of the container registry resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Container Registry.

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
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Domain
* **thumbprint**: string: The thumbprint of bound certificate.

## CustomizedAcceleratorProperties
### Properties
* **acceleratorTags**: string[]
* **description**: string
* **displayName**: string
* **gitRepository**: [AcceleratorGitRepository](#acceleratorgitrepository) (Required)
* **iconUrl**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the customized accelerator.

## CustomPersistentDiskProperties
* **Discriminator**: type

### Base Properties
* **enableSubPath**: bool: If set to true, it will create and mount a dedicated directory for every individual app instance.
* **mountOptions**: string[]: These are the mount options for a persistent disk.
* **mountPath**: string (Required): The mount path of the persistent disk.
* **readOnly**: bool: Indicates whether the persistent disk is a readOnly one.

### AzureFileVolume
#### Properties
* **shareName**: string: The share name of the Azure File share.
* **type**: 'AzureFileVolume' (Required): The type of the underlying resource to mount as a persistent disk.


## CustomPersistentDiskResource
### Properties
* **customPersistentDiskProperties**: [CustomPersistentDiskProperties](#custompersistentdiskproperties): Properties of the custom persistent disk resource payload.
* **storageId**: string (Required): The resource id of Azure Spring Apps Storage resource.

## CustomScaleRule
### Properties
* **auth**: [ScaleRuleAuth](#scaleruleauth)[]: Authentication secrets for the custom scale rule.
* **metadata**: [CustomScaleRuleMetadata](#customscalerulemetadata): Metadata properties to describe custom scale rule.
* **type**: string: Type of the custom scale rule
eg: azure-servicebus, redis etc.

## CustomScaleRuleMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeploymentInstance
### Properties
* **discoveryStatus**: string (ReadOnly): Discovery status of the deployment instance
* **name**: string (ReadOnly): Name of the deployment instance
* **reason**: string (ReadOnly): Failed reason of the deployment instance
* **startTime**: string (ReadOnly): Start time of the deployment instance
* **status**: string (ReadOnly): Status of the deployment instance
* **zone**: string (ReadOnly): Availability zone information of the deployment instance

## DeploymentList
### Properties
* **deployments**: string[]: A list of deployment resource ids.

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
* **livenessProbe**: [Probe](#probe): Periodic probe of App Instance liveness. App Instance will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
* **readinessProbe**: [Probe](#probe): Periodic probe of App Instance service readiness. App Instance will be removed from service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
* **resourceRequests**: [ResourceRequests](#resourcerequests): The requested resource quantity for required CPU and Memory. It is recommended that using this field to represent the required CPU and Memory, the old field cpu and memoryInGB will be deprecated later.
* **scale**: [Scale](#scale): Scaling properties for the Azure Spring Apps App Instance.
* **startupProbe**: [Probe](#probe): StartupProbe indicates that the App Instance has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a App Instance's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
* **terminationGracePeriodSeconds**: int: Optional duration in seconds the App Instance needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the App Instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 90 seconds.

## DeploymentSettingsAddonConfigs
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeploymentSettingsEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DevToolPortalFeatureDetail
### Properties
* **route**: string (ReadOnly): Route path to visit the plugin
* **state**: 'Disabled' | 'Enabled' | string: State of the plugin

## DevToolPortalFeatureSettings
### Properties
* **applicationAccelerator**: [DevToolPortalFeatureDetail](#devtoolportalfeaturedetail): Detail of Accelerator plugin
* **applicationLiveView**: [DevToolPortalFeatureDetail](#devtoolportalfeaturedetail): Detail of App Live View plugin

## DevToolPortalInstance
### Properties
* **name**: string (ReadOnly): Name of the Dev Tool Portal instance.
* **status**: string (ReadOnly): Status of the Dev Tool Portal instance. It can be Pending, Running, Succeeded, Failed, Unknown.

## DevToolPortalProperties
### Properties
* **features**: [DevToolPortalFeatureSettings](#devtoolportalfeaturesettings): Settings for Dev Tool Portal
* **instances**: [DevToolPortalInstance](#devtoolportalinstance)[] (ReadOnly): Collection of instances belong to Dev Tool Portal.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Dev Tool Portal.
* **public**: bool: Indicates whether the resource exposes public endpoint
* **resourceRequests**: [DevToolPortalResourceRequests](#devtoolportalresourcerequests) (ReadOnly): The requested resource quantity for required CPU and Memory.
* **ssoProperties**: [DevToolPortalSsoProperties](#devtoolportalssoproperties): Single sign-on related configuration
* **url**: string (ReadOnly): URL of the resource, exposed when 'public' is true.

## DevToolPortalResourceRequests
### Properties
* **cpu**: string (ReadOnly): Cpu quantity allocated to each Dev Tool Portal instance. 1 core can be represented by 1 or 1000m
* **instanceCount**: int (ReadOnly): Desired instance count of Dev Tool Portal.
* **memory**: string (ReadOnly): Memory quantity allocated to each Dev Tool Portal instance. 1 GB can be represented by 1Gi or 1024Mi.

## DevToolPortalSsoProperties
### Properties
* **clientId**: string: The public identifier for the application
* **clientSecret**: string: The secret known only to the application and the authorization server
* **metadataUrl**: string: The URI of a JSON file with generic OIDC provider configuration.
* **scopes**: string[]: It defines the specific actions applications can be allowed to do on a user's behalf

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

## GatewayEnvSecrets
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **apmTypes**: 'AppDynamics' | 'ApplicationInsights' | 'Dynatrace' | 'ElasticAPM' | 'NewRelic' | string[]: Collection of APM type used in Spring Cloud Gateway
* **clientAuth**: [GatewayPropertiesClientAuth](#gatewaypropertiesclientauth): Client-Certification Authentication.
* **corsProperties**: [GatewayCorsProperties](#gatewaycorsproperties): Cross-Origin Resource Sharing property
* **environmentVariables**: [GatewayPropertiesEnvironmentVariables](#gatewaypropertiesenvironmentvariables): Environment variables of Spring Cloud Gateway
* **httpsOnly**: bool: Indicate if only https is allowed.
* **instances**: [GatewayInstance](#gatewayinstance)[] (ReadOnly): Collection of instances belong to Spring Cloud Gateway.
* **operatorProperties**: [GatewayOperatorProperties](#gatewayoperatorproperties) (ReadOnly): Properties of the Spring Cloud Gateway Operator.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Spring Cloud Gateway.
* **public**: bool: Indicates whether the Spring Cloud Gateway exposes endpoint.
* **resourceRequests**: [GatewayResourceRequests](#gatewayresourcerequests): The requested resource quantity for required CPU and Memory.
* **ssoProperties**: [SsoProperties](#ssoproperties): Single sign-on related configuration
* **url**: string (ReadOnly): URL of the Spring Cloud Gateway, exposed when 'public' is true.

## GatewayPropertiesClientAuth
### Properties
* **certificates**: string[]: Collection of certificate resource Ids in Azure Spring Apps.
* **certificateVerification**: 'Disabled' | 'Enabled' | string: Whether to enable certificate verification or not

## GatewayPropertiesEnvironmentVariables
### Properties
* **properties**: [GatewayPropertiesEnvironmentVariablesProperties](#gatewaypropertiesenvironmentvariablesproperties): Non-sensitive properties
* **secrets**: [GatewayPropertiesEnvironmentVariablesSecrets](#gatewaypropertiesenvironmentvariablessecrets): Sensitive properties

## GatewayPropertiesEnvironmentVariablesProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GatewayPropertiesEnvironmentVariablesSecrets
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GatewayResourceRequests
### Properties
* **cpu**: string: Cpu allocated to each Spring Cloud Gateway instance.
* **memory**: string: Memory allocated to each Spring Cloud Gateway instance.

## GatewayRouteConfigOpenApiProperties
### Properties
* **uri**: string: The URI of OpenAPI specification.

## GatewayRouteConfigProperties
### Properties
* **appResourceId**: string: The resource Id of the Azure Spring Apps app, required unless route defines `uri`.
* **filters**: string[]: To modify the request before sending it to the target endpoint, or the received response in app level.
* **openApi**: [GatewayRouteConfigOpenApiProperties](#gatewayrouteconfigopenapiproperties): OpenAPI properties of Spring Cloud Gateway route config.
* **predicates**: string[]: A number of conditions to evaluate a route for each request in app level. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
* **protocol**: 'HTTP' | 'HTTPS' | string: Protocol of routed Azure Spring Apps applications.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the Spring Cloud Gateway route config.
* **routes**: [GatewayApiRoute](#gatewayapiroute)[]: Array of API routes, each route contains properties such as `title`, `uri`, `ssoEnabled`, `predicates`, `filters`.
* **ssoEnabled**: bool: Enable Single Sign-On in app level.

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

## HttpScaleRule
### Properties
* **auth**: [ScaleRuleAuth](#scaleruleauth)[]: Authentication secrets for the custom scale rule.
* **metadata**: [HttpScaleRuleMetadata](#httpscalerulemetadata): Metadata properties to describe http scale rule.

## HttpScaleRuleMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ImageRegistryCredential
### Properties
* **password**: string: The password of the image registry credential
* **username**: string: The username of the image registry credential

## IngressConfig
### Properties
* **readTimeoutInSeconds**: int: Ingress read time out in seconds.

## IngressSettings
### Properties
* **backendProtocol**: 'Default' | 'GRPC' | string: How ingress should communicate with this app backend service.
* **clientAuth**: [IngressSettingsClientAuth](#ingresssettingsclientauth): Client-Certification Authentication.
* **readTimeoutInSeconds**: int: Ingress read time out in seconds.
* **sendTimeoutInSeconds**: int: Ingress send time out in seconds.
* **sessionAffinity**: 'Cookie' | 'None' | string: Type of the affinity, set this to Cookie to enable session affinity.
* **sessionCookieMaxAge**: int: Time in seconds until the cookie expires.

## IngressSettingsClientAuth
### Properties
* **certificates**: string[]: Collection of certificate resource id.

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

## MarketplaceResource
### Properties
* **plan**: string: The plan id of the 3rd Party Artifact that is being procured.
* **product**: string: The 3rd Party artifact that is being procured.
* **publisher**: string: The publisher id of the 3rd Party Artifact that is being bought.

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
* **appNetworkResourceGroup**: string: Name of the resource group containing network resources for customer apps in Azure Spring Apps
* **appSubnetId**: string: Fully qualified resource Id of the subnet to host customer apps in Azure Spring Apps
* **ingressConfig**: [IngressConfig](#ingressconfig): Ingress configuration payload for Azure Spring Apps resource.
* **outboundIPs**: [NetworkProfileOutboundIPs](#networkprofileoutboundips) (ReadOnly): Desired outbound IP resources for Azure Spring Apps resource.
* **outboundType**: string: The egress traffic type of Azure Spring Apps VNet instances.
* **requiredTraffics**: [RequiredTraffic](#requiredtraffic)[] (ReadOnly): Required inbound or outbound traffics for Azure Spring Apps resource.
* **serviceCidr**: string: Azure Spring Apps service reserved CIDR
* **serviceRuntimeNetworkResourceGroup**: string: Name of the resource group containing network resources of Azure Spring Apps Service Runtime
* **serviceRuntimeSubnetId**: string: Fully qualified resource Id of the subnet to host Azure Spring Apps Service Runtime

## NetworkProfileOutboundIPs
### Properties
* **publicIPs**: string[] (ReadOnly): A list of public IP addresses.

## PersistentDisk
### Properties
* **mountPath**: string: Mount path of the persistent disk
* **sizeInGB**: int: Size of the persistent disk in GB
* **usedInGB**: int (ReadOnly): Size of the used persistent disk in GB

## PredefinedAcceleratorProperties
### Properties
* **acceleratorTags**: string[] (ReadOnly)
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **iconUrl**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the predefined accelerator.
* **state**: 'Disabled' | 'Enabled' | string: State of the predefined accelerator.

## Probe
### Properties
* **disableProbe**: bool (Required): Indicate whether the probe is disabled.
* **failureThreshold**: int: Minimum consecutive failures for the probe to be considered failed after having succeeded. Minimum value is 1.
* **initialDelaySeconds**: int: Number of seconds after the App Instance has started before probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
* **periodSeconds**: int: How often (in seconds) to perform the probe. Minimum value is 1.
* **probeAction**: [ProbeAction](#probeaction): The action of the probe.
* **successThreshold**: int: Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 for liveness and startup. Minimum value is 1.
* **timeoutSeconds**: int: Number of seconds after which the probe times out. Minimum value is 1.

## ProbeAction
* **Discriminator**: type

### Base Properties

### ExecAction
#### Properties
* **command**: string[]: Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
* **type**: 'ExecAction' (Required): The type of the action to take to perform the health check.

### HttpGetAction
#### Properties
* **path**: string: Path to access on the HTTP server.
* **scheme**: 'HTTP' | 'HTTPS' | string: Scheme to use for connecting to the host. Defaults to HTTP.

Possible enum values:
 - `"HTTP"` means that the scheme used will be http://
 - `"HTTPS"` means that the scheme used will be https://
* **type**: 'HTTPGetAction' (Required): The type of the action to take to perform the health check.

### TCPSocketAction
#### Properties
* **type**: 'TCPSocketAction' (Required): The type of the action to take to perform the health check.


## QueueScaleRule
### Properties
* **auth**: [ScaleRuleAuth](#scaleruleauth)[]: Authentication secrets for the queue scale rule.
* **queueLength**: int: Queue length.
* **queueName**: string: Queue name.

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

## Scale
### Properties
* **maxReplicas**: int: Optional. Maximum number of container replicas. Defaults to 10 if not set.
* **minReplicas**: int: Optional. Minimum number of container replicas.
* **rules**: [ScaleRule](#scalerule)[]: Scaling rules.

## ScaleRule
### Properties
* **azureQueue**: [QueueScaleRule](#queuescalerule): Azure Queue based scaling.
* **custom**: [CustomScaleRule](#customscalerule): Custom scale rule.
* **http**: [HttpScaleRule](#httpscalerule): HTTP requests based scaling.
* **name**: string: Scale Rule Name
* **tcp**: [TcpScaleRule](#tcpscalerule): Tcp requests based scaling.

## ScaleRuleAuth
### Properties
* **secretRef**: string: Name of the Azure Spring Apps App Instance secret from which to pull the auth params.
* **triggerParameter**: string: Trigger Parameter that uses the secret

## Secret
### Properties
* **name**: string: Secret Name.
* **value**: string (WriteOnly): Secret Value.

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

## ServiceVNetAddons
### Properties
* **dataPlanePublicEndpoint**: bool: Indicates whether the data plane components(log stream, app connect, remote debugging) in vnet injection instance could be accessed from internet.
* **logStreamPublicEndpoint**: bool: Indicates whether the log stream in vnet injection instance could be accessed from internet.

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

## TcpScaleRule
### Properties
* **auth**: [ScaleRuleAuth](#scaleruleauth)[]: Authentication secrets for the tcp scale rule.
* **metadata**: [TcpScaleRuleMetadata](#tcpscalerulemetadata): Metadata properties to describe tcp scale rule.

## TcpScaleRuleMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

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


