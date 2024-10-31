# Microsoft.Web @ 2023-12-01

## Resource Microsoft.Web/certificates@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties): Certificate resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/containerApps@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerAppProperties](#containerappproperties): ContainerApp resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/containerApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/containerApps/revisions@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **location**: string (ReadOnly): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RevisionProperties](#revisionproperties) (ReadOnly): Revision resource specific properties
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Web/containerApps/revisions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/deletedSites@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeletedSiteProperties](#deletedsiteproperties) (ReadOnly): DeletedSite resource specific properties
* **type**: 'Microsoft.Web/deletedSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServiceEnvironment](#appserviceenvironment): Core resource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/capacities@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'virtualip' (Required, DeployTimeConstant): The resource name
* **properties**: [AddressResponseProperties](#addressresponseproperties) (ReadOnly): AddressResponse resource specific properties
* **type**: 'Microsoft.Web/hostingEnvironments/capacities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/configurations@2023-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.Web/hostingEnvironments/configurations
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'customdnssuffix' (Required, DeployTimeConstant): The resource name
* **properties**: [CustomDnsSuffixConfigurationProperties](#customdnssuffixconfigurationproperties): CustomDnsSuffixConfiguration resource specific properties
* **type**: 'Microsoft.Web/hostingEnvironments/configurations' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/hostingEnvironments/configurations
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'networking' (Required, DeployTimeConstant): The resource name
* **properties**: [AseV3NetworkingConfigurationProperties](#asev3networkingconfigurationproperties): AseV3NetworkingConfiguration resource specific properties
* **type**: 'Microsoft.Web/hostingEnvironments/configurations' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/hostingEnvironments/detectors@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorResponseProperties](#detectorresponseproperties) (ReadOnly): DetectorResponse resource specific properties
* **type**: 'Microsoft.Web/hostingEnvironments/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/multiRolePools@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPool](#workerpool): Core resource properties
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/privateEndpointConnections@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RemotePrivateEndpointConnectionARMResourceProperties](#remoteprivateendpointconnectionarmresourceproperties): RemotePrivateEndpointConnectionARMResource resource specific properties
* **type**: 'Microsoft.Web/hostingEnvironments/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/recommendations@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecommendationRuleProperties](#recommendationruleproperties) (ReadOnly): RecommendationRule resource specific properties
* **type**: 'Microsoft.Web/hostingEnvironments/recommendations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/workerPools@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPool](#workerpool): Core resource properties
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/kubeEnvironments@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [KubeEnvironmentProperties](#kubeenvironmentproperties): KubeEnvironment resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/kubeEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/locations/deletedSites@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeletedSiteProperties](#deletedsiteproperties) (ReadOnly): DeletedSite resource specific properties
* **type**: 'Microsoft.Web/locations/deletedSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/publishingUsers@2023-12-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties): User resource specific properties
* **type**: 'Microsoft.Web/publishingUsers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServicePlanProperties](#appserviceplanproperties): AppServicePlan resource specific properties
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties) (ReadOnly): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/hybridConnectionPlanLimits@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'limit' (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionLimitsProperties](#hybridconnectionlimitsproperties) (ReadOnly): HybridConnectionLimits resource specific properties
* **type**: 'Microsoft.Web/serverfarms/hybridConnectionPlanLimits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfo](#vnetinfo) (ReadOnly): Core resource properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (WriteOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetRouteProperties](#vnetrouteproperties) (WriteOnly): VnetRoute resource specific properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Site resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/backups@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupItemProperties](#backupitemproperties) (ReadOnly): BackupItem resource specific properties
* **type**: 'Microsoft.Web/sites/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/basicPublishingCredentialsPolicies@2023-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.Web/sites/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'ftp' (Required, DeployTimeConstant): The resource name
* **properties**: [CsmPublishingCredentialsPoliciesEntityProperties](#csmpublishingcredentialspoliciesentityproperties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'scm' (Required, DeployTimeConstant): The resource name
* **properties**: [CsmPublishingCredentialsPoliciesEntityProperties](#csmpublishingcredentialspoliciesentityproperties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/config@2023-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsProperties](#siteauthsettingsproperties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettingsV2' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsV2Properties](#siteauthsettingsv2properties): SiteAuthSettingsV2 resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant): The resource name
* **properties**: [AzureStoragePropertyDictionaryResourceProperties](#azurestoragepropertydictionaryresourceproperties): Azure storage accounts.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupRequestProperties](#backuprequestproperties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionStringDictionaryProperties](#connectionstringdictionaryproperties): Connection strings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteLogsConfigProperties](#sitelogsconfigproperties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [PushSettingsProperties](#pushsettingsproperties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'slotConfigNames' (Required, DeployTimeConstant): The resource name
* **properties**: [SlotConfigNames](#slotconfignames): Core resource properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Core resource properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/config/appsettings@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiKVReferenceProperties](#apikvreferenceproperties) (ReadOnly): ApiKVReference resource specific properties
* **type**: 'Microsoft.Web/sites/config/appsettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/config/connectionstrings@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiKVReferenceProperties](#apikvreferenceproperties) (ReadOnly): ApiKVReference resource specific properties
* **type**: 'Microsoft.Web/sites/config/connectionstrings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/config/snapshots@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig) (ReadOnly): Core resource properties
* **type**: 'Microsoft.Web/sites/config/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/continuouswebjobs@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContinuousWebJobProperties](#continuouswebjobproperties) (ReadOnly): ContinuousWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/continuouswebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/deployments@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): Deployment resource specific properties
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/deploymentStatus@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CsmDeploymentStatusProperties](#csmdeploymentstatusproperties) (ReadOnly): CsmDeploymentStatus resource specific properties
* **type**: 'Microsoft.Web/sites/deploymentStatus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/detectors@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorResponseProperties](#detectorresponseproperties) (ReadOnly): DetectorResponse resource specific properties
* **type**: 'Microsoft.Web/sites/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/diagnostics@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticCategoryProperties](#diagnosticcategoryproperties) (ReadOnly): DiagnosticCategory resource specific properties
* **type**: 'Microsoft.Web/sites/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/diagnostics/analyses@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AnalysisDefinitionProperties](#analysisdefinitionproperties) (ReadOnly): AnalysisDefinition resource specific properties
* **type**: 'Microsoft.Web/sites/diagnostics/analyses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/diagnostics/detectors@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorDefinition](#detectordefinition) (ReadOnly): Core resource properties
* **type**: 'Microsoft.Web/sites/diagnostics/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/domainOwnershipIdentifiers@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IdentifierProperties](#identifierproperties): Identifier resource specific properties
* **type**: 'Microsoft.Web/sites/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/extensions@2023-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.Web/sites/extensions
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCoreOrMSDeployStatusProperties](#msdeploycoreormsdeploystatusproperties): Core resource properties
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/extensions
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'onedeploy' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/functions@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties): FunctionEnvelope resource specific properties
* **type**: 'Microsoft.Web/sites/functions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/functions/keys@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Web/sites/functions/keys' (ReadOnly, DeployTimeConstant): The resource type
* **value**: string: Key value

## Resource Microsoft.Web/sites/hostNameBindings@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties): HostNameBinding resource specific properties
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowRunProperties](#workflowrunproperties) (ReadOnly): The workflow run properties.
* **type**: 'Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowRunActionProperties](#workflowrunactionproperties) (ReadOnly): The workflow run action properties.
* **type**: 'Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions/repetitions@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowRunActionRepetitionProperties](#workflowrunactionrepetitionproperties) (ReadOnly): The workflow run action repetition properties definition.
* **tags**: [WorkflowResourceTags](#workflowresourcetags) (ReadOnly): The resource tags.
* **type**: 'Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions/repetitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions/repetitions/requestHistories@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RequestHistoryProperties](#requesthistoryproperties) (ReadOnly): The request history properties.
* **tags**: [WorkflowResourceTags](#workflowresourcetags) (ReadOnly): The resource tags.
* **type**: 'Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions/repetitions/requestHistories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions/scopeRepetitions@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowRunActionRepetitionProperties](#workflowrunactionrepetitionproperties) (ReadOnly): The workflow run action repetition properties definition.
* **tags**: [WorkflowResourceTags](#workflowresourcetags) (ReadOnly): The resource tags.
* **type**: 'Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions/scopeRepetitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hostruntime/webhooks/api/workflows/triggers@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowTriggerProperties](#workflowtriggerproperties) (ReadOnly): The workflow trigger properties.
* **type**: 'Microsoft.Web/sites/hostruntime/webhooks/api/workflows/triggers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hostruntime/webhooks/api/workflows/triggers/histories@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowTriggerHistoryProperties](#workflowtriggerhistoryproperties) (ReadOnly): Gets the workflow trigger history properties.
* **type**: 'Microsoft.Web/sites/hostruntime/webhooks/api/workflows/triggers/histories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hostruntime/webhooks/api/workflows/versions@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowVersionProperties](#workflowversionproperties) (ReadOnly): The workflow version properties.
* **tags**: [WorkflowResourceTags](#workflowresourcetags) (ReadOnly): The resource tags.
* **type**: 'Microsoft.Web/sites/hostruntime/webhooks/api/workflows/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hybridconnection@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties): RelayServiceConnectionEntity resource specific properties
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hybridConnectionNamespaces/relays@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebSiteInstanceStatusProperties](#websiteinstancestatusproperties) (ReadOnly): WebSiteInstanceStatus resource specific properties
* **type**: 'Microsoft.Web/sites/instances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/extensions@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCoreOrMSDeployStatusProperties](#msdeploycoreormsdeploystatusproperties): Core resource properties
* **type**: 'Microsoft.Web/sites/instances/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/processes@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/instances/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/processes/modules@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/instances/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/migratemysql@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'status' (Required, DeployTimeConstant): The resource name
* **properties**: [MigrateMySqlStatusProperties](#migratemysqlstatusproperties) (ReadOnly): MigrateMySqlStatus resource specific properties
* **type**: 'Microsoft.Web/sites/migratemysql' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/networkConfig@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetwork' (Required, DeployTimeConstant): The resource name
* **properties**: [SwiftVirtualNetworkProperties](#swiftvirtualnetworkproperties): SwiftVirtualNetwork resource specific properties
* **type**: 'Microsoft.Web/sites/networkConfig' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/networkFeatures@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFeaturesProperties](#networkfeaturesproperties) (ReadOnly): NetworkFeatures resource specific properties
* **type**: 'Microsoft.Web/sites/networkFeatures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/premieraddons@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PremierAddOnProperties](#premieraddonproperties): PremierAddOn resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/privateAccess@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetworks' (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateAccessProperties](#privateaccessproperties): PrivateAccess resource specific properties
* **type**: 'Microsoft.Web/sites/privateAccess' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/privateEndpointConnections@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RemotePrivateEndpointConnectionARMResourceProperties](#remoteprivateendpointconnectionarmresourceproperties): RemotePrivateEndpointConnectionARMResource resource specific properties
* **type**: 'Microsoft.Web/sites/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/processes@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/processes/modules@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/publicCertificates@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicCertificateProperties](#publiccertificateproperties): PublicCertificate resource specific properties
* **type**: 'Microsoft.Web/sites/publicCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/recommendations@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecommendationRuleProperties](#recommendationruleproperties) (ReadOnly): RecommendationRule resource specific properties
* **type**: 'Microsoft.Web/sites/recommendations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/resourceHealthMetadata@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceHealthMetadataProperties](#resourcehealthmetadataproperties) (ReadOnly): ResourceHealthMetadata resource specific properties
* **type**: 'Microsoft.Web/sites/resourceHealthMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/sitecontainers@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string {pattern: "(^[a-zA-Z0-9]$)|(^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$)"} (Required, DeployTimeConstant): The resource name
* **properties**: [SiteContainerProperties](#sitecontainerproperties): SiteContainer resource specific properties
* **type**: 'Microsoft.Web/sites/sitecontainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/siteextensions@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly): SiteExtensionInfo resource specific properties
* **type**: 'Microsoft.Web/sites/siteextensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Site resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/backups@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupItemProperties](#backupitemproperties) (ReadOnly): BackupItem resource specific properties
* **type**: 'Microsoft.Web/sites/slots/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2023-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'ftp' (Required, DeployTimeConstant): The resource name
* **properties**: [CsmPublishingCredentialsPoliciesEntityProperties](#csmpublishingcredentialspoliciesentityproperties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'scm' (Required, DeployTimeConstant): The resource name
* **properties**: [CsmPublishingCredentialsPoliciesEntityProperties](#csmpublishingcredentialspoliciesentityproperties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/slots/config@2023-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsProperties](#siteauthsettingsproperties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettingsV2' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsV2Properties](#siteauthsettingsv2properties): SiteAuthSettingsV2 resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant): The resource name
* **properties**: [AzureStoragePropertyDictionaryResourceProperties](#azurestoragepropertydictionaryresourceproperties): Azure storage accounts.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupRequestProperties](#backuprequestproperties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionStringDictionaryProperties](#connectionstringdictionaryproperties): Connection strings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteLogsConfigProperties](#sitelogsconfigproperties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [PushSettingsProperties](#pushsettingsproperties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Core resource properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/slots/config/appsettings@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiKVReferenceProperties](#apikvreferenceproperties) (ReadOnly): ApiKVReference resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config/appsettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/config/connectionstrings@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiKVReferenceProperties](#apikvreferenceproperties) (ReadOnly): ApiKVReference resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config/connectionstrings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/config/snapshots@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig) (ReadOnly): Core resource properties
* **type**: 'Microsoft.Web/sites/slots/config/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/continuouswebjobs@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContinuousWebJobProperties](#continuouswebjobproperties) (ReadOnly): ContinuousWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/slots/continuouswebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/deployments@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): Deployment resource specific properties
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/deploymentStatus@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CsmDeploymentStatusProperties](#csmdeploymentstatusproperties) (ReadOnly): CsmDeploymentStatus resource specific properties
* **type**: 'Microsoft.Web/sites/slots/deploymentStatus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/detectors@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorResponseProperties](#detectorresponseproperties) (ReadOnly): DetectorResponse resource specific properties
* **type**: 'Microsoft.Web/sites/slots/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/diagnostics@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticCategoryProperties](#diagnosticcategoryproperties) (ReadOnly): DiagnosticCategory resource specific properties
* **type**: 'Microsoft.Web/sites/slots/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/diagnostics/analyses@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AnalysisDefinitionProperties](#analysisdefinitionproperties) (ReadOnly): AnalysisDefinition resource specific properties
* **type**: 'Microsoft.Web/sites/slots/diagnostics/analyses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/diagnostics/detectors@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorDefinition](#detectordefinition) (ReadOnly): Core resource properties
* **type**: 'Microsoft.Web/sites/slots/diagnostics/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IdentifierProperties](#identifierproperties): Identifier resource specific properties
* **type**: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/extensions@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCoreOrMSDeployStatusProperties](#msdeploycoreormsdeploystatusproperties): Core resource properties
* **type**: 'Microsoft.Web/sites/slots/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/functions@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties): FunctionEnvelope resource specific properties
* **type**: 'Microsoft.Web/sites/slots/functions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/functions/keys@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Web/sites/slots/functions/keys' (ReadOnly, DeployTimeConstant): The resource type
* **value**: string: Key value

## Resource Microsoft.Web/sites/slots/hostNameBindings@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties): HostNameBinding resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hybridconnection@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties): RelayServiceConnectionEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebSiteInstanceStatusProperties](#websiteinstancestatusproperties) (ReadOnly): WebSiteInstanceStatus resource specific properties
* **type**: 'Microsoft.Web/sites/slots/instances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/extensions@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCoreOrMSDeployStatusProperties](#msdeploycoreormsdeploystatusproperties): Core resource properties
* **type**: 'Microsoft.Web/sites/slots/instances/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/processes@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/instances/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/processes/modules@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/instances/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/migratemysql@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'status' (Required, DeployTimeConstant): The resource name
* **properties**: [MigrateMySqlStatusProperties](#migratemysqlstatusproperties) (ReadOnly): MigrateMySqlStatus resource specific properties
* **type**: 'Microsoft.Web/sites/slots/migratemysql' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/networkConfig@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetwork' (Required, DeployTimeConstant): The resource name
* **properties**: [SwiftVirtualNetworkProperties](#swiftvirtualnetworkproperties): SwiftVirtualNetwork resource specific properties
* **type**: 'Microsoft.Web/sites/slots/networkConfig' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/networkFeatures@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFeaturesProperties](#networkfeaturesproperties) (ReadOnly): NetworkFeatures resource specific properties
* **type**: 'Microsoft.Web/sites/slots/networkFeatures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/premieraddons@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PremierAddOnProperties](#premieraddonproperties): PremierAddOn resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/privateAccess@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetworks' (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateAccessProperties](#privateaccessproperties): PrivateAccess resource specific properties
* **type**: 'Microsoft.Web/sites/slots/privateAccess' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/privateEndpointConnections@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RemotePrivateEndpointConnectionARMResourceProperties](#remoteprivateendpointconnectionarmresourceproperties): RemotePrivateEndpointConnectionARMResource resource specific properties
* **type**: 'Microsoft.Web/sites/slots/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/processes@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/processes/modules@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/publicCertificates@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicCertificateProperties](#publiccertificateproperties): PublicCertificate resource specific properties
* **type**: 'Microsoft.Web/sites/slots/publicCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/resourceHealthMetadata@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceHealthMetadataProperties](#resourcehealthmetadataproperties) (ReadOnly): ResourceHealthMetadata resource specific properties
* **type**: 'Microsoft.Web/sites/slots/resourceHealthMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/sitecontainers@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string {pattern: "(^[a-zA-Z0-9]$)|(^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$)"} (Required, DeployTimeConstant): The resource name
* **properties**: [SiteContainerProperties](#sitecontainerproperties): SiteContainer resource specific properties
* **type**: 'Microsoft.Web/sites/slots/sitecontainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/siteextensions@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly): SiteExtensionInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/siteextensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/sourcecontrols@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties): SiteSourceControl resource specific properties
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/triggeredwebjobs@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredWebJobProperties](#triggeredwebjobproperties) (ReadOnly): TriggeredWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/slots/triggeredwebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/triggeredwebjobs/history@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredJobHistoryProperties](#triggeredjobhistoryproperties) (ReadOnly): TriggeredJobHistory resource specific properties
* **type**: 'Microsoft.Web/sites/slots/triggeredwebjobs/history' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfo](#vnetinfo): Core resource properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/webjobs@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebJobProperties](#webjobproperties) (ReadOnly): WebJob resource specific properties
* **type**: 'Microsoft.Web/sites/slots/webjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/sourcecontrols@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties): SiteSourceControl resource specific properties
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/triggeredwebjobs@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredWebJobProperties](#triggeredwebjobproperties) (ReadOnly): TriggeredWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/triggeredwebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/triggeredwebjobs/history@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredJobHistoryProperties](#triggeredjobhistoryproperties) (ReadOnly): TriggeredJobHistory resource specific properties
* **type**: 'Microsoft.Web/sites/triggeredwebjobs/history' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfo](#vnetinfo): Core resource properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/webjobs@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebJobProperties](#webjobproperties) (ReadOnly): WebJob resource specific properties
* **type**: 'Microsoft.Web/sites/webjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sourcecontrols@2023-12-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlProperties](#sourcecontrolproperties): SourceControl resource specific properties
* **type**: 'Microsoft.Web/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSite](#staticsite): Core resource properties
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/staticSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/basicAuth@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSiteBasicAuthPropertiesARMResourceProperties](#staticsitebasicauthpropertiesarmresourceproperties): StaticSiteBasicAuthPropertiesARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/basicAuth' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/builds@2023-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSiteBuildARMResourceProperties](#staticsitebuildarmresourceproperties) (ReadOnly): StaticSiteBuildARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/builds' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/builds/config@2023-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.Web/staticSites/builds/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/staticSites/builds/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/staticSites/builds/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'functionappsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/staticSites/builds/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/staticSites/builds/databaseConnections@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string {pattern: "^[a-zA-Z0-9]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseConnectionProperties](#databaseconnectionproperties): DatabaseConnection resource specific properties
* **type**: 'Microsoft.Web/staticSites/builds/databaseConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/builds/linkedBackends@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSiteLinkedBackendARMResourceProperties](#staticsitelinkedbackendarmresourceproperties): StaticSiteLinkedBackendARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/builds/linkedBackends' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSiteUserProvidedFunctionAppARMResourceProperties](#staticsiteuserprovidedfunctionapparmresourceproperties): StaticSiteUserProvidedFunctionAppARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/builds/userProvidedFunctionApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/config@2023-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties

### Microsoft.Web/staticSites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/staticSites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/staticSites/config
#### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'functionappsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/staticSites/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/staticSites/customDomains@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSiteCustomDomainRequestPropertiesARMResourcePropertiesOrStaticSiteCustomDomainOverviewARMResourceProperties](#staticsitecustomdomainrequestpropertiesarmresourcepropertiesorstaticsitecustomdomainoverviewarmresourceproperties): StaticSiteCustomDomainRequestPropertiesARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/customDomains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/databaseConnections@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string {pattern: "^[a-zA-Z0-9]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseConnectionProperties](#databaseconnectionproperties): DatabaseConnection resource specific properties
* **type**: 'Microsoft.Web/staticSites/databaseConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/linkedBackends@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSiteLinkedBackendARMResourceProperties](#staticsitelinkedbackendarmresourceproperties): StaticSiteLinkedBackendARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/linkedBackends' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/privateEndpointConnections@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RemotePrivateEndpointConnectionARMResourceProperties](#remoteprivateendpointconnectionarmresourceproperties): RemotePrivateEndpointConnectionARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/userProvidedFunctionApps@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSiteUserProvidedFunctionAppARMResourceProperties](#staticsiteuserprovidedfunctionapparmresourceproperties): StaticSiteUserProvidedFunctionAppARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/userProvidedFunctionApps' (ReadOnly, DeployTimeConstant): The resource type

## Function list (Microsoft.Web/sites/backups@2023-12-01)
* **Resource**: Microsoft.Web/sites/backups
* **ApiVersion**: 2023-12-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: [BackupItem](#backupitem)

## Function list (Microsoft.Web/sites/config@2023-12-01)
* **Resource**: Microsoft.Web/sites/config
* **ApiVersion**: 2023-12-01
* **Output**: [StringDictionary](#stringdictionary)

## Function list (Microsoft.Web/sites/slots/backups@2023-12-01)
* **Resource**: Microsoft.Web/sites/slots/backups
* **ApiVersion**: 2023-12-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: [BackupItem](#backupitem)

## Function list (Microsoft.Web/sites/slots/config@2023-12-01)
* **Resource**: Microsoft.Web/sites/slots/config
* **ApiVersion**: 2023-12-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listAppSettings (Microsoft.Web/staticSites/builds@2023-12-01)
* **Resource**: Microsoft.Web/staticSites/builds
* **ApiVersion**: 2023-12-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listAppSettings (Microsoft.Web/staticSites@2023-12-01)
* **Resource**: Microsoft.Web/staticSites
* **ApiVersion**: 2023-12-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listbackups (Microsoft.Web/sites@2023-12-01)
* **Resource**: Microsoft.Web/sites
* **ApiVersion**: 2023-12-01
* **Output**: [BackupItemCollection](#backupitemcollection)

## Function listbackups (Microsoft.Web/sites/slots@2023-12-01)
* **Resource**: Microsoft.Web/sites/slots
* **ApiVersion**: 2023-12-01
* **Output**: [BackupItemCollection](#backupitemcollection)

## Function listCallbackUrl (Microsoft.Web/sites/hostruntime/webhooks/api/workflows/triggers@2023-12-01)
* **Resource**: Microsoft.Web/sites/hostruntime/webhooks/api/workflows/triggers
* **ApiVersion**: 2023-12-01
* **Output**: [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

## Function listConfiguredRoles (Microsoft.Web/staticSites@2023-12-01)
* **Resource**: Microsoft.Web/staticSites
* **ApiVersion**: 2023-12-01
* **Output**: [StringList](#stringlist)

## Function listExpressionTraces (Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions@2023-12-01)
* **Resource**: Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions
* **ApiVersion**: 2023-12-01
* **Output**: [ExpressionTraces](#expressiontraces)

## Function listExpressionTraces (Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions/repetitions@2023-12-01)
* **Resource**: Microsoft.Web/sites/hostruntime/webhooks/api/workflows/runs/actions/repetitions
* **ApiVersion**: 2023-12-01
* **Output**: [ExpressionTraces](#expressiontraces)

## Function listFunctionAppSettings (Microsoft.Web/staticSites/builds@2023-12-01)
* **Resource**: Microsoft.Web/staticSites/builds
* **ApiVersion**: 2023-12-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listFunctionAppSettings (Microsoft.Web/staticSites@2023-12-01)
* **Resource**: Microsoft.Web/staticSites
* **ApiVersion**: 2023-12-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listKeys (Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays@2023-12-01)
* **Resource**: Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays
* **ApiVersion**: 2023-12-01
* **Output**: [HybridConnectionKey](#hybridconnectionkey)

## Function listkeys (Microsoft.Web/sites/functions@2023-12-01)
* **Resource**: Microsoft.Web/sites/functions
* **ApiVersion**: 2023-12-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listkeys (Microsoft.Web/sites/host@2023-12-01)
* **Resource**: Microsoft.Web/sites/host
* **ApiVersion**: 2023-12-01
* **Output**: [HostKeys](#hostkeys)

## Function listkeys (Microsoft.Web/sites/slots/functions@2023-12-01)
* **Resource**: Microsoft.Web/sites/slots/functions
* **ApiVersion**: 2023-12-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listkeys (Microsoft.Web/sites/slots/host@2023-12-01)
* **Resource**: Microsoft.Web/sites/slots/host
* **ApiVersion**: 2023-12-01
* **Output**: [HostKeys](#hostkeys)

## Function listSecrets (Microsoft.Web/containerApps@2023-12-01)
* **Resource**: Microsoft.Web/containerApps
* **ApiVersion**: 2023-12-01
* **Output**: [SecretsCollection](#secretscollection)

## Function listSecrets (Microsoft.Web/staticSites@2023-12-01)
* **Resource**: Microsoft.Web/staticSites
* **ApiVersion**: 2023-12-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listsecrets (Microsoft.Web/sites/functions@2023-12-01)
* **Resource**: Microsoft.Web/sites/functions
* **ApiVersion**: 2023-12-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsecrets (Microsoft.Web/sites/slots/functions@2023-12-01)
* **Resource**: Microsoft.Web/sites/slots/functions
* **ApiVersion**: 2023-12-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsyncfunctiontriggerstatus (Microsoft.Web/sites@2023-12-01)
* **Resource**: Microsoft.Web/sites
* **ApiVersion**: 2023-12-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsyncfunctiontriggerstatus (Microsoft.Web/sites/slots@2023-12-01)
* **Resource**: Microsoft.Web/sites/slots
* **ApiVersion**: 2023-12-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listUsers (Microsoft.Web/staticSites/authproviders@2023-12-01)
* **Resource**: Microsoft.Web/staticSites/authproviders
* **ApiVersion**: 2023-12-01
* **Output**: [StaticSiteUserCollection](#staticsiteusercollection)

## Function listWorkflowsConnections (Microsoft.Web/sites@2023-12-01)
* **Resource**: Microsoft.Web/sites
* **ApiVersion**: 2023-12-01
* **Output**: [WorkflowEnvelope](#workflowenvelope)

## Function listWorkflowsConnections (Microsoft.Web/sites/slots@2023-12-01)
* **Resource**: Microsoft.Web/sites/slots
* **ApiVersion**: 2023-12-01
* **Output**: [WorkflowEnvelope](#workflowenvelope)

## AddressResponseProperties
### Properties
* **internalIpAddress**: string: Virtual Network internal IP address of the App Service Environment if it is in internal load-balancing mode.
* **outboundIpAddresses**: string[]: IP addresses appearing on outbound connections.
* **serviceIpAddress**: string: Main public virtual IP.
* **vipMappings**: [VirtualIPMapping](#virtualipmapping)[]: Additional virtual IPs.

## AllowedAudiencesValidation
### Properties
* **allowedAudiences**: string[]: The configuration settings of the allowed list of audiences from which to validate the JWT token.

## AllowedPrincipals
### Properties
* **groups**: string[]: The list of the allowed groups.
* **identities**: string[]: The list of the allowed identities.

## AnalysisDefinitionProperties
### Properties
* **description**: string (ReadOnly): Description of the Analysis

## ApiDefinitionInfo
### Properties
* **url**: string: The URL of the API definition.

## ApiKVReferenceProperties
### Properties
* **activeVersion**: string
* **details**: string
* **identityType**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **reference**: string
* **secretName**: string
* **secretVersion**: string
* **source**: 'KeyVault'
* **status**: 'AccessToKeyVaultDenied' | 'FetchTimedOut' | 'Initialized' | 'InvalidSyntax' | 'MSINotEnabled' | 'OtherReasons' | 'Resolved' | 'SecretNotFound' | 'SecretVersionNotFound' | 'UnauthorizedClient' | 'VaultNotFound'
* **vaultName**: string

## ApiManagementConfig
### Properties
* **id**: string: APIM-Api Identifier.

## Apple
### Properties
* **enabled**: bool: <code>false</code> if the Apple provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow.
* **registration**: [AppleRegistration](#appleregistration): The configuration settings of the Apple registration.

## AppleRegistration
### Properties
* **clientId**: string: The Client ID of the app used for login.
* **clientSecretSettingName**: string: The app setting name that contains the client secret.

## ApplicationLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageApplicationLogsConfig](#azureblobstorageapplicationlogsconfig): Application logs to blob storage configuration.
* **azureTableStorage**: [AzureTableStorageApplicationLogsConfig](#azuretablestorageapplicationlogsconfig): Application logs to azure table storage configuration.
* **fileSystem**: [FileSystemApplicationLogsConfig](#filesystemapplicationlogsconfig): Application logs to file system configuration.

## AppLogsConfiguration
### Properties
* **destination**: string
* **logAnalyticsConfiguration**: [LogAnalyticsConfiguration](#loganalyticsconfiguration)

## AppRegistration
### Properties
* **appId**: string: The App ID of the app used for login.
* **appSecretSettingName**: string: The app setting name that contains the app secret.

## AppServiceEnvironment
### Properties
* **clusterSettings**: [NameValuePair](#namevaluepair)[]: Custom settings for changing the behavior of the App Service Environment.
* **customDnsSuffixConfiguration**: [CustomDnsSuffixConfiguration](#customdnssuffixconfiguration): Full view of the custom domain suffix configuration for ASEv3.
* **dedicatedHostCount**: int: Dedicated Host Count
* **dnsSuffix**: string: DNS suffix of the App Service Environment.
* **frontEndScaleFactor**: int: Scale factor for front-ends.
* **hasLinuxWorkers**: bool (ReadOnly): Flag that displays whether an ASE has linux workers or not
* **internalLoadBalancingMode**: 'None' | 'Publishing' | 'Web' | 'Web, Publishing' | string: Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
* **ipsslAddressCount**: int: Number of IP SSL addresses reserved for the App Service Environment.
* **maximumNumberOfMachines**: int (ReadOnly): Maximum number of VMs in the App Service Environment.
* **multiRoleCount**: int (ReadOnly): Number of front-end instances.
* **multiSize**: string: Front-end VM size, e.g. "Medium", "Large".
* **networkingConfiguration**: [AseV3NetworkingConfiguration](#asev3networkingconfiguration): Full view of networking configuration for an ASE.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Provisioning state of the App Service Environment.
* **status**: 'Deleting' | 'Preparing' | 'Ready' | 'Scaling' (ReadOnly): Current status of the App Service Environment.
* **suspended**: bool (ReadOnly): <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
 (most likely because NSG blocked the incoming traffic).
* **upgradeAvailability**: 'None' | 'Ready' | string (ReadOnly): Whether an upgrade is available for this App Service Environment.
* **upgradePreference**: 'Early' | 'Late' | 'Manual' | 'None' | string: Upgrade Preference
* **userWhitelistedIpRanges**: string[]: User added ip ranges to whitelist on ASE db
* **virtualNetwork**: [VirtualNetworkProfile](#virtualnetworkprofile) (Required): Description of the Virtual Network.
* **zoneRedundant**: bool: Whether or not this App Service Environment is zone-redundant.

## AppServicePlanProperties
### Properties
* **elasticScaleEnabled**: bool: ServerFarm supports ElasticScale. Apps in this plan will scale as if the ServerFarm was ElasticPremium sku
* **freeOfferExpirationTime**: string: The time when the server farm free offer expires.
* **geoRegion**: string (ReadOnly): Geographical location for the App Service plan.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): Specification for the App Service Environment to use for the App Service plan.
* **hyperV**: bool: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
* **isSpot**: bool: If <code>true</code>, this App Service Plan owns spot instances.
* **isXenon**: bool: Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
* **kubeEnvironmentProfile**: [KubeEnvironmentProfile](#kubeenvironmentprofile): Specification for the Kubernetes Environment to use for the App Service plan.
* **maximumElasticWorkerCount**: int: Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
* **maximumNumberOfWorkers**: int (ReadOnly): Maximum number of instances that can be assigned to this App Service plan.
* **numberOfSites**: int (ReadOnly): Number of apps assigned to this App Service plan.
* **numberOfWorkers**: int (ReadOnly): The number of instances that are assigned to this App Service plan.
* **perSiteScaling**: bool: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Provisioning state of the App Service Plan.
* **reserved**: bool: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
* **resourceGroup**: string (ReadOnly): Resource group of the App Service plan.
* **spotExpirationTime**: string: The time when the server farm expires. Valid only if it is a spot server farm.
* **status**: 'Creating' | 'Pending' | 'Ready' (ReadOnly): App Service plan status.
* **subscription**: string (ReadOnly): App Service plan subscription.
* **targetWorkerCount**: int: Scaling worker count.
* **targetWorkerSizeId**: int: Scaling worker size ID.
* **workerTierName**: string: Target worker tier assigned to the App Service plan.
* **zoneRedundant**: bool: If <code>true</code>, this App Service Plan will perform availability zone balancing.
If <code>false</code>, this App Service Plan will not perform availability zone balancing.

## ArcConfiguration
### Properties
* **artifactsStorageType**: 'LocalNode' | 'NetworkFileSystem'
* **artifactStorageAccessMode**: string
* **artifactStorageClassName**: string
* **artifactStorageMountPath**: string
* **artifactStorageNodeName**: string
* **frontEndServiceConfiguration**: [FrontEndConfiguration](#frontendconfiguration)
* **kubeConfig**: string {sensitive} (WriteOnly)

## ArmIdWrapper
### Properties
* **id**: string (ReadOnly)

## ArmPlan
### Properties
* **name**: string: The name.
* **product**: string: The product.
* **promotionCode**: string: The promotion code.
* **publisher**: string: The publisher.
* **version**: string: Version of product.

## AseV3NetworkingConfiguration
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [AseV3NetworkingConfigurationProperties](#asev3networkingconfigurationproperties): AseV3NetworkingConfiguration resource specific properties
* **type**: string (ReadOnly): Resource type.

## AseV3NetworkingConfigurationProperties
### Properties
* **allowNewPrivateEndpointConnections**: bool: Property to enable and disable new private endpoint connection creation on ASE
* **externalInboundIpAddresses**: string[] (ReadOnly)
* **ftpEnabled**: bool: Property to enable and disable FTP on ASEV3
* **inboundIpAddressOverride**: string: Customer provided Inbound IP Address. Only able to be set on Ase create.
* **internalInboundIpAddresses**: string[] (ReadOnly)
* **linuxOutboundIpAddresses**: string[] (ReadOnly)
* **remoteDebugEnabled**: bool: Property to enable and disable Remote Debug on ASEV3
* **windowsOutboundIpAddresses**: string[] (ReadOnly)

## AuthPlatform
### Properties
* **configFilePath**: string: The path of the config file containing auth settings if they come from a file.
If the path is relative, base will the site's root directory.
* **enabled**: bool: <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
* **runtimeVersion**: string: The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
The setting in this value can control the behavior of certain features in the Authentication / Authorization module.

## AutoHealActions
### Properties
* **actionType**: 'CustomAction' | 'LogEvent' | 'Recycle': Predefined action to be taken.
* **customAction**: [AutoHealCustomAction](#autohealcustomaction): Custom action to be taken.
* **minProcessExecutionTime**: string: Minimum time the process must execute
before taking the action

## AutoHealCustomAction
### Properties
* **exe**: string: Executable to be run.
* **parameters**: string: Parameters for the executable.

## AutoHealRules
### Properties
* **actions**: [AutoHealActions](#autohealactions): Actions to be executed when a rule is triggered.
* **triggers**: [AutoHealTriggers](#autohealtriggers): Conditions that describe when to execute the auto-heal actions.

## AutoHealTriggers
### Properties
* **privateBytesInKB**: int: A rule based on private bytes.
* **requests**: [RequestsBasedTrigger](#requestsbasedtrigger): A rule based on total requests.
* **slowRequests**: [SlowRequestsBasedTrigger](#slowrequestsbasedtrigger): A rule based on request execution time.
* **slowRequestsWithPath**: [SlowRequestsBasedTrigger](#slowrequestsbasedtrigger)[]: A rule based on multiple Slow Requests Rule with path
* **statusCodes**: [StatusCodesBasedTrigger](#statuscodesbasedtrigger)[]: A rule based on status codes.
* **statusCodesRange**: [StatusCodesRangeBasedTrigger](#statuscodesrangebasedtrigger)[]: A rule based on status codes ranges.

## AzureActiveDirectory
### Properties
* **enabled**: bool: <code>false</code> if the Azure Active Directory provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **isAutoProvisioned**: bool: Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.
This is an internal flag primarily intended to support the Azure Management Portal. Users should not
read or write to this property.
* **login**: [AzureActiveDirectoryLogin](#azureactivedirectorylogin): The configuration settings of the Azure Active Directory login flow.
* **registration**: [AzureActiveDirectoryRegistration](#azureactivedirectoryregistration): The configuration settings of the Azure Active Directory app registration.
* **validation**: [AzureActiveDirectoryValidation](#azureactivedirectoryvalidation): The configuration settings of the Azure Active Directory token validation flow.

## AzureActiveDirectoryLogin
### Properties
* **disableWWWAuthenticate**: bool: <code>true</code> if the www-authenticate provider should be omitted from the request; otherwise, <code>false</code>.
* **loginParameters**: string[]: Login parameters to send to the OpenID Connect authorization endpoint when
a user logs in. Each parameter must be in the form "key=value".

## AzureActiveDirectoryRegistration
### Properties
* **clientId**: string: The Client ID of this relying party application, known as the client_id.
This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
other 3rd party OpenID Connect providers.
More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
* **clientSecretCertificateIssuer**: string: An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts as
a replacement for the Client Secret Certificate Thumbprint. It is also optional.
* **clientSecretCertificateSubjectAlternativeName**: string: An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts as
a replacement for the Client Secret Certificate Thumbprint. It is also optional.
* **clientSecretCertificateThumbprint**: string: An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
a replacement for the Client Secret. It is also optional.
* **clientSecretSettingName**: string: The app setting name that contains the client secret of the relying party application.
* **openIdIssuer**: string: The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://login.microsoftonline.com/v2.0/{tenant-guid}/.
This URI is a case-sensitive identifier for the token issuer.
More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html

## AzureActiveDirectoryValidation
### Properties
* **allowedAudiences**: string[]: The list of audiences that can make successful authentication/authorization requests.
* **defaultAuthorizationPolicy**: [DefaultAuthorizationPolicy](#defaultauthorizationpolicy): The configuration settings of the default authorization policy.
* **jwtClaimChecks**: [JwtClaimChecks](#jwtclaimchecks): The configuration settings of the checks that should be made while validating the JWT Claims.

## AzureBlobStorageApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level.
* **retentionInDays**: int: Retention in days.
Remove blobs older than X days.
0 or lower means no retention.
* **sasUrl**: string: SAS url to a azure blob container with read/write/list/delete permissions.

## AzureBlobStorageHttpLogsConfig
### Properties
* **enabled**: bool: True if configuration is enabled, false if it is disabled and null if configuration is not set.
* **retentionInDays**: int: Retention in days.
Remove blobs older than X days.
0 or lower means no retention.
* **sasUrl**: string: SAS url to a azure blob container with read/write/list/delete permissions.

## AzureResourceErrorInfo
### Properties
* **code**: string (Required): The error code.
* **details**: [AzureResourceErrorInfo](#azureresourceerrorinfo)[]: The error details.
* **message**: string (Required): The error message.

## AzureStaticWebApps
### Properties
* **enabled**: bool: <code>false</code> if the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **registration**: [AzureStaticWebAppsRegistration](#azurestaticwebappsregistration): The configuration settings of the Azure Static Web Apps registration.

## AzureStaticWebAppsRegistration
### Properties
* **clientId**: string: The Client ID of the app used for login.

## AzureStorageInfoValue
### Properties
* **accessKey**: string {sensitive}: Access key for the storage account.
* **accountName**: string: Name of the storage account.
* **mountPath**: string: Path to mount the storage within the site's runtime environment.
* **protocol**: 'Http' | 'Nfs' | 'Smb' | string: Mounting protocol to use for the storage account.
* **shareName**: string: Name of the file share (container name, for Blob storage).
* **state**: 'InvalidCredentials' | 'InvalidShare' | 'NotValidated' | 'Ok' (ReadOnly): State of the storage account.
* **type**: 'AzureBlob' | 'AzureFiles': Type of storage.

## AzureStoragePropertyDictionaryResourceProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## AzureStoragePropertyDictionaryResourceProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## AzureTableStorageApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level.
* **sasUrl**: string (Required): SAS URL to an Azure table with add/query/delete permissions.

## BackupItem
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [BackupItemProperties](#backupitemproperties): BackupItem resource specific properties
* **type**: string (ReadOnly): Resource type.

## BackupItem
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [BackupItemProperties](#backupitemproperties): BackupItem resource specific properties
* **type**: string (ReadOnly): Resource type.

## BackupItemCollection
### Properties
* **nextLink**: string (ReadOnly): Link to next page of resources.
* **value**: [BackupItem](#backupitem)[] (Required): Collection of resources.

## BackupItemCollection
### Properties
* **nextLink**: string (ReadOnly): Link to next page of resources.
* **value**: [BackupItem](#backupitem)[] (Required): Collection of resources.

## BackupItemProperties
### Properties
* **blobName**: string (ReadOnly): Name of the blob which contains data for this backup.
* **correlationId**: string (ReadOnly): Unique correlation identifier. Please use this along with the timestamp while communicating with Azure support.
* **created**: string (ReadOnly): Timestamp of the backup creation.
* **databases**: [DatabaseBackupSetting](#databasebackupsetting)[] (ReadOnly): List of databases included in the backup.
* **finishedTimeStamp**: string (ReadOnly): Timestamp when this backup finished.
* **id**: int (ReadOnly): Id of the backup.
* **lastRestoreTimeStamp**: string (ReadOnly): Timestamp of a last restore operation which used this backup.
* **log**: string (ReadOnly): Details regarding this backup. Might contain an error message.
* **name**: string (ReadOnly): Name of this backup.
* **scheduled**: bool (ReadOnly): True if this backup has been created due to a schedule being triggered.
* **sizeInBytes**: int (ReadOnly): Size of the backup in bytes.
* **status**: 'Created' | 'DeleteFailed' | 'DeleteInProgress' | 'Deleted' | 'Failed' | 'InProgress' | 'PartiallySucceeded' | 'Skipped' | 'Succeeded' | 'TimedOut' (ReadOnly): Backup status.
* **storageAccountUrl**: string (ReadOnly): SAS URL for the storage account container which contains this backup.
* **websiteSizeInBytes**: int (ReadOnly): Size of the original web app which has been backed up.

## BackupRequest
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [BackupRequestProperties](#backuprequestproperties): BackupRequest resource specific properties
* **type**: string (ReadOnly): Resource type.

## BackupRequest
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [BackupRequestProperties](#backuprequestproperties): BackupRequest resource specific properties
* **type**: string (ReadOnly): Resource type.

## BackupRequestProperties
### Properties
* **backupName**: string: Name of the backup.
* **backupSchedule**: [BackupSchedule](#backupschedule): Schedule for the backup if it is executed periodically.
* **databases**: [DatabaseBackupSetting](#databasebackupsetting)[]: Databases included in the backup.
* **enabled**: bool: True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
* **storageAccountUrl**: string (Required): SAS URL to the container.

## BackupSchedule
### Properties
* **frequencyInterval**: int (Required): How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
* **frequencyUnit**: 'Day' | 'Hour' (Required): The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
* **keepAtLeastOneBackup**: bool (Required): True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
* **lastExecutionTime**: string (ReadOnly): Last time when this schedule was triggered.
* **retentionPeriodInDays**: int (Required): After how many days backups should be deleted.
* **startTime**: string: When the schedule should start working.

## BlobStorageTokenStore
### Properties
* **sasUrlSettingName**: string: The name of the app setting containing the SAS URL of the blob storage containing the tokens.

## Capability
### Properties
* **name**: string: Name of the SKU capability.
* **reason**: string: Reason of the SKU capability.
* **value**: string: Value of the SKU capability.

## CertificateProperties
### Properties
* **canonicalName**: string: CNAME of the certificate to be issued via free certificate
* **cerBlob**: any (ReadOnly): Raw bytes of .cer file
* **domainValidationMethod**: string: Method of domain validation for free cert
* **expirationDate**: string (ReadOnly): Certificate expiration date.
* **friendlyName**: string (ReadOnly): Friendly name of the certificate.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile) (ReadOnly): Specification for the App Service Environment to use for the certificate.
* **hostNames**: string[]: Host names the certificate applies to.
* **issueDate**: string (ReadOnly): Certificate issue Date.
* **issuer**: string (ReadOnly): Certificate issuer.
* **keyVaultId**: string: Key Vault Csm resource Id.
* **keyVaultSecretName**: string: Key Vault secret name.
* **keyVaultSecretStatus**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly): Status of the Key Vault secret.
* **password**: string (WriteOnly): Certificate password.
* **pfxBlob**: any: Pfx blob.
* **publicKeyHash**: string (ReadOnly): Public key hash.
* **selfLink**: string (ReadOnly): Self link.
* **serverFarmId**: string: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
* **siteName**: string (ReadOnly): App name.
* **subjectName**: string (ReadOnly): Subject name of the certificate.
* **thumbprint**: string (ReadOnly): Certificate thumbprint.
* **valid**: bool (ReadOnly): Is the certificate valid?.

## ClientRegistration
### Properties
* **clientId**: string: The Client ID of the app used for login.
* **clientSecretSettingName**: string: The app setting name that contains the client secret.

## CloningInfo
### Properties
* **appSettingsOverrides**: [CloningInfoAppSettingsOverrides](#cloninginfoappsettingsoverrides): Application setting overrides for cloned app. If specified, these settings override the settings cloned 
from source app. Otherwise, application settings from source app are retained.
* **cloneCustomHostNames**: bool: <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>.
* **cloneSourceControl**: bool: <code>true</code> to clone source control from source app; otherwise, <code>false</code>.
* **configureLoadBalancing**: bool: <code>true</code> to configure load balancing for source and destination app.
* **correlationId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Correlation ID of cloning operation. This ID ties multiple cloning operations
together to use the same snapshot.
* **hostingEnvironment**: string: App Service Environment.
* **overwrite**: bool: <code>true</code> to overwrite destination app; otherwise, <code>false</code>.
* **sourceWebAppId**: string (Required): ARM resource ID of the source app. App resource ID is of the form 
/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and 
/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
* **sourceWebAppLocation**: string: Location of source app ex: West US or North Europe
* **trafficManagerProfileId**: string: ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form 
/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}.
* **trafficManagerProfileName**: string: Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist.

## CloningInfoAppSettingsOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Configuration
### Properties
* **activeRevisionsMode**: 'multiple' | 'single' | string: ActiveRevisionsMode controls how active revisions are handled for the Container app:
<list><item>Multiple: multiple revisions can be active. If no value if provided, this is the default</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode</item></list>
* **ingress**: [Ingress](#ingress): Ingress configurations.
* **registries**: [RegistryCredentials](#registrycredentials)[]: Collection of private container registry credentials for containers used by the Container app
* **secrets**: [Secret](#secret)[]: Collection of secrets used by a Container app

## ConnectionStringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnStringValueTypePair](#connstringvaluetypepair)

## ConnectionStringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnStringValueTypePair](#connstringvaluetypepair)

## ConnStringInfo
### Properties
* **connectionString**: string: Connection string value.
* **name**: string: Name of connection string.
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus': Type of database.

## ConnStringValueTypePair
### Properties
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus' (Required): Type of database.
* **value**: string (Required): Value of pair.

## Container
### Properties
* **args**: string[]: Container start command arguments.
* **command**: string[]: Container start command.
* **env**: [EnvironmentVar](#environmentvar)[]: Container environment variables.
* **image**: string: Container image tag.
* **name**: string: Custom container name.
* **resources**: [ContainerResources](#containerresources): Container resource requirements.

## ContainerAppProperties
### Properties
* **configuration**: [Configuration](#configuration): Non versioned Container App configuration properties.
* **kubeEnvironmentId**: string: Resource ID of the Container App's KubeEnvironment.
* **latestRevisionFqdn**: string (ReadOnly): Fully Qualified Domain Name of the latest revision of the Container App.
* **latestRevisionName**: string (ReadOnly): Name of the latest revision of the Container App.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the Container App.
* **template**: [Template](#template): Container App versioned application definition.

## ContainerAppsConfiguration
### Properties
* **appSubnetResourceId**: string: Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined.
* **controlPlaneSubnetResourceId**: string: Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined.
* **daprAIInstrumentationKey**: string: Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry
* **dockerBridgeCidr**: string: CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the IP range defined in platformReservedCidr, if defined.
* **platformReservedCidr**: string: IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. It must not overlap with any other Subnet IP ranges.
* **platformReservedDnsIP**: string: An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server

## ContainerAppSecret
### Properties
* **name**: string (ReadOnly): Secret Name.
* **value**: string (ReadOnly): Secret Value.

## ContainerCpuStatistics
### Properties
* **cpuUsage**: [ContainerCpuUsage](#containercpuusage)
* **onlineCpuCount**: int
* **systemCpuUsage**: int
* **throttlingData**: [ContainerThrottlingData](#containerthrottlingdata)

## ContainerCpuUsage
### Properties
* **kernelModeUsage**: int
* **perCpuUsage**: int[]
* **totalUsage**: int
* **userModeUsage**: int

## ContainerInfo
### Properties
* **currentCpuStats**: [ContainerCpuStatistics](#containercpustatistics)
* **currentTimeStamp**: string
* **eth0**: [ContainerNetworkInterfaceStatistics](#containernetworkinterfacestatistics)
* **id**: string
* **memoryStats**: [ContainerMemoryStatistics](#containermemorystatistics)
* **name**: string
* **previousCpuStats**: [ContainerCpuStatistics](#containercpustatistics)
* **previousTimeStamp**: string

## ContainerMemoryStatistics
### Properties
* **limit**: int
* **maxUsage**: int
* **usage**: int

## ContainerNetworkInterfaceStatistics
### Properties
* **rxBytes**: int
* **rxDropped**: int
* **rxErrors**: int
* **rxPackets**: int
* **txBytes**: int
* **txDropped**: int
* **txErrors**: int
* **txPackets**: int

## ContainerResources
### Properties
* **cpu**: int: Required CPU in cores, e.g. 0.5
* **memory**: string: Required memory, e.g. "250Mb"

## ContainerThrottlingData
### Properties
* **periods**: int
* **throttledPeriods**: int
* **throttledTime**: int

## ContentHash
### Properties
* **algorithm**: string: The algorithm of the content hash.
* **value**: string: The value of the content hash.

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash) (ReadOnly): The content hash.
* **contentSize**: int (ReadOnly): The content size.
* **contentVersion**: string (ReadOnly): The content version.
* **metadata**: any (ReadOnly): The metadata.
* **uri**: string: The content link URI.

## ContinuousWebJobProperties
### Properties
* **detailed_status**: string: Detailed status.
* **error**: string: Error information.
* **extra_info_url**: string: Extra Info URL.
* **log_url**: string: Log URL.
* **run_command**: string: Run command.
* **settings**: [ContinuousWebJobPropertiesSettings](#continuouswebjobpropertiessettings): Job settings.
* **status**: 'Initializing' | 'PendingRestart' | 'Running' | 'Starting' | 'Stopped': Job status.
* **url**: string: Job URL.
* **using_sdk**: bool: Using SDK?
* **web_job_type**: 'Continuous' | 'Triggered': Job type.

## ContinuousWebJobPropertiesSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

## CookieExpiration
### Properties
* **convention**: 'FixedTime' | 'IdentityProviderDerived': The convention used when determining the session cookie's expiration.
* **timeToExpiration**: string: The time after the request is made when the session cookie should expire.

## Correlation
### Properties
* **clientTrackingId**: string: The client tracking id.

## CorsSettings
### Properties
* **allowedOrigins**: string[]: Gets or sets the list of origins that should be allowed to make cross-origin
calls (for example: http://example.com:12345). Use "*" to allow all.
* **supportCredentials**: bool: Gets or sets whether CORS requests with credentials are allowed. See 
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
for more details.

## CsmDeploymentStatusProperties
### Properties
* **deploymentId**: string: Deployment operation id.
* **errors**: [ErrorEntity](#errorentity)[]: List of errors.
* **failedInstancesLogs**: string[]: List of URLs pointing to logs for instances which failed to provision.
* **numberOfInstancesFailed**: int: Number of site instances failed to provision.
* **numberOfInstancesInProgress**: int: Number of site instances currently being provisioned.
* **numberOfInstancesSuccessful**: int: Number of site instances provisioned successfully.
* **status**: 'BuildAborted' | 'BuildFailed' | 'BuildInProgress' | 'BuildPending' | 'BuildRequestReceived' | 'BuildSuccessful' | 'PostBuildRestartRequired' | 'RuntimeFailed' | 'RuntimeStarting' | 'RuntimeSuccessful' | 'StartPolling' | 'StartPollingWithRestart' | 'TimedOut' | string: Deployment build status.

## CsmPublishingCredentialsPoliciesEntityProperties
### Properties
* **allow**: bool (Required): <code>true</code> to allow access to a publishing method; otherwise, <code>false</code>.

## CustomDnsSuffixConfiguration
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [CustomDnsSuffixConfigurationProperties](#customdnssuffixconfigurationproperties): CustomDnsSuffixConfiguration resource specific properties
* **type**: string (ReadOnly): Resource type.

## CustomDnsSuffixConfigurationProperties
### Properties
* **certificateUrl**: string: The URL referencing the Azure Key Vault certificate secret that should be used as the default SSL/TLS certificate for sites with the custom domain suffix.
* **dnsSuffix**: string: The default custom domain suffix to use for all sites deployed on the ASE.
* **keyVaultReferenceIdentity**: string: The user-assigned identity to use for resolving the key vault certificate reference. If not specified, the system-assigned ASE identity will be used if available.
* **provisioningDetails**: string (ReadOnly)
* **provisioningState**: 'Degraded' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)

## CustomOpenIdConnectProvider
### Properties
* **enabled**: bool: <code>false</code> if the custom Open ID provider provider should not be enabled; otherwise, <code>true</code>.
* **login**: [OpenIdConnectLogin](#openidconnectlogin): The configuration settings of the login flow of the custom Open ID Connect provider.
* **registration**: [OpenIdConnectRegistration](#openidconnectregistration): The configuration settings of the app registration for the custom Open ID Connect provider.

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

## Dapr
### Properties
* **appId**: string: Dapr application identifier
* **appPort**: int: Port on which the Dapr side car
* **components**: [DaprComponent](#daprcomponent)[]: Collection of Dapr components
* **enabled**: bool: Boolean indicating if the Dapr side car is enabled

## DaprComponent
### Properties
* **metadata**: [DaprMetadata](#daprmetadata)[]: Component metadata
* **name**: string: Component name
* **type**: string: Component type
* **version**: string: Component version

## DaprConfig
### Properties
* **appId**: string: Dapr application identifier
* **appPort**: int: Tells Dapr which port your application is listening on
* **enableApiLogging**: bool: Enables API logging for the Dapr sidecar
* **enabled**: bool: Boolean indicating if the Dapr side car is enabled
* **httpMaxRequestSize**: int: Increasing max size of request body http servers parameter in MB to handle uploading of big files. Default is 4 MB.
* **httpReadBufferSize**: int: Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
* **logLevel**: 'debug' | 'error' | 'info' | 'warn' | string: Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.

## DaprMetadata
### Properties
* **name**: string: Metadata property name.
* **secretRef**: string: Name of the Container App secret from which to pull the metadata property value.
* **value**: string: Metadata property value.

## DatabaseBackupSetting
### Properties
* **connectionString**: string: Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one.
* **connectionStringName**: string: Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
This is used during restore with overwrite connection strings options.
* **databaseType**: 'LocalMySql' | 'MySql' | 'PostgreSql' | 'SqlAzure' | string (Required): Database type (e.g. SqlAzure / MySql).
* **name**: string

## DatabaseConnectionOverview
### Properties
* **configurationFiles**: [StaticSiteDatabaseConnectionConfigurationFileOverview](#staticsitedatabaseconnectionconfigurationfileoverview)[] (ReadOnly): A list of configuration files associated with this database connection.
* **connectionIdentity**: string (ReadOnly): If present, the identity is used in conjunction with connection string to connect to the database. Use of the system-assigned managed identity is indicated with the string 'SystemAssigned', while use of a user-assigned managed identity is indicated with the resource id of the managed identity resource.
* **name**: string (ReadOnly): If present, the name of this database connection resource.
* **region**: string (ReadOnly): The region of the database resource.
* **resourceId**: string (ReadOnly): The resource id of the database.

## DatabaseConnectionProperties
### Properties
* **configurationFiles**: [StaticSiteDatabaseConnectionConfigurationFileOverview](#staticsitedatabaseconnectionconfigurationfileoverview)[] (ReadOnly): A list of configuration files associated with this database connection.
* **connectionIdentity**: string: If present, the identity is used in conjunction with connection string to connect to the database. Use of the system-assigned managed identity is indicated with the string 'SystemAssigned', while use of a user-assigned managed identity is indicated with the resource id of the managed identity resource.
* **connectionString**: string {sensitive}: The connection string to use to connect to the database.
* **region**: string (Required): The region of the database resource.
* **resourceId**: string (Required): The resource id of the database.

## DataProviderMetadata
### Properties
* **propertyBag**: [KeyValuePairStringObject](#keyvaluepairstringobject)[] (ReadOnly): Settings for the data provider
* **providerName**: string

## DataTableResponseColumn
### Properties
* **columnName**: string: Name of the column
* **columnType**: string: Column Type
* **dataType**: string: Data type which looks like 'String' or 'Int32'.

## DataTableResponseObject
### Properties
* **columns**: [DataTableResponseColumn](#datatableresponsecolumn)[]: List of columns with data types
* **rows**: string[][]: Raw row values
* **tableName**: string: Name of the table

## DefaultAuthorizationPolicy
### Properties
* **allowedApplications**: string[]: The configuration settings of the Azure Active Directory allowed applications.
* **allowedPrincipals**: [AllowedPrincipals](#allowedprincipals): The configuration settings of the Azure Active Directory allowed principals.

## DeletedSiteProperties
### Properties
* **deletedSiteId**: int (ReadOnly): Numeric id for the deleted site
* **deletedSiteName**: string (ReadOnly): Name of the deleted site
* **deletedTimestamp**: string (ReadOnly): Time in UTC when the app was deleted.
* **geoRegionName**: string (ReadOnly): Geo Region of the deleted site
* **kind**: string (ReadOnly): Kind of site that was deleted
* **resourceGroup**: string (ReadOnly): ResourceGroup that contained the deleted site
* **slot**: string (ReadOnly): Slot of the deleted site
* **subscription**: string (ReadOnly): Subscription containing the deleted site

## DeploymentProperties
### Properties
* **active**: bool: True if deployment is currently active, false if completed and null if not started.
* **author**: string: Who authored the deployment.
* **author_email**: string: Author email.
* **deployer**: string: Who performed the deployment.
* **details**: string: Details on deployment.
* **end_time**: string: End time.
* **message**: string: Details about deployment status.
* **start_time**: string: Start time.
* **status**: int: Deployment status.

## DetectorDefinition
### Properties
* **description**: string (ReadOnly): Description of the detector
* **displayName**: string (ReadOnly): Display name of the detector
* **isEnabled**: bool (ReadOnly): Flag representing whether detector is enabled or not.
* **rank**: int (ReadOnly): Detector Rank

## DetectorInfo
### Properties
* **analysisType**: string[] (ReadOnly): Analysis Types for which this detector should apply to.
* **author**: string (ReadOnly): Author of the detector.
* **category**: string (ReadOnly): Problem category. This serves for organizing group for detectors.
* **description**: string (ReadOnly): Short description of the detector and its purpose.
* **id**: string (ReadOnly): Id of detector
* **name**: string (ReadOnly): Name of detector
* **score**: int (ReadOnly): Defines score of a detector to power ML based matching.
* **supportTopicList**: [SupportTopic](#supporttopic)[] (ReadOnly): List of Support Topics for which this detector is enabled.
* **type**: 'Analysis' | 'CategoryOverview' | 'Detector' (ReadOnly): Whether this detector is an Analysis Detector or not.

## DetectorResponseProperties
### Properties
* **dataProvidersMetadata**: [DataProviderMetadata](#dataprovidermetadata)[]: Additional configuration for different data providers to be used by the UI
* **dataset**: [DiagnosticData](#diagnosticdata)[]: Data Set
* **metadata**: [DetectorInfo](#detectorinfo): metadata for the detector
* **status**: [Status](#status): Indicates status of the most severe insight.
* **suggestedUtterances**: [QueryUtterancesResults](#queryutterancesresults): Suggested utterances where the detector can be applicable.

## DiagnosticCategoryProperties
### Properties
* **description**: string (ReadOnly): Description of the diagnostic category

## DiagnosticData
### Properties
* **renderingProperties**: [Rendering](#rendering): Properties that describe how the table should be rendered
* **table**: [DataTableResponseObject](#datatableresponseobject): Data in table form

## EnabledConfig
### Properties
* **enabled**: bool: True if configuration is enabled, false if it is disabled and null if configuration is not set.

## EnvironmentVar
### Properties
* **name**: string: Environment variable name.
* **secretRef**: string: Name of the Container App secret from which to pull the environment variable value.
* **value**: string: Non-secret environment variable value.

## EnvironmentVariable
### Properties
* **name**: string (Required): Environment variable name
* **value**: string (Required): Environment variable value

## ErrorEntity
### Properties
* **code**: string: Basic error code.
* **details**: [ErrorEntity](#errorentity)[]: Error Details.
* **extendedCode**: string: Type of error.
* **innerErrors**: [ErrorEntity](#errorentity)[]: Inner errors.
* **message**: string: Any details of the error.
* **messageTemplate**: string: Message template.
* **parameters**: string[]: Parameters for the template.
* **target**: string: The error target.

## ErrorProperties
### Properties
* **code**: string: Error code.
* **message**: string: Error message indicating why the operation failed.

## ErrorResponse
### Properties
* **error**: [ErrorProperties](#errorproperties): The error properties.

## Experiments
### Properties
* **rampUpRules**: [RampUpRule](#rampuprule)[]: List of ramp-up rules.

## Expression
### Properties
* **error**: [AzureResourceErrorInfo](#azureresourceerrorinfo): The azure resource error info.
* **subexpressions**: [Expression](#expression)[]: The sub expressions.
* **text**: string: The text.
* **value**: any: Anything

## ExpressionRoot
### Properties
* **error**: [AzureResourceErrorInfo](#azureresourceerrorinfo): The azure resource error info.
* **path**: string: The path.
* **subexpressions**: [Expression](#expression)[]: The sub expressions.
* **text**: string: The text.
* **value**: any: Anything

## ExpressionTraces
### Properties
* **inputs**: [ExpressionRoot](#expressionroot)[]
* **nextLink**: string: The link used to get the next page of recommendations.
* **value**: any: Anything

## ExpressionTraces
### Properties
* **inputs**: [ExpressionRoot](#expressionroot)[]
* **nextLink**: string: The link used to get the next page of recommendations.
* **value**: any: Anything

## ExtendedLocation
### Properties
* **name**: string: Name of extended location.
* **type**: string (ReadOnly): Type of extended location.

## Facebook
### Properties
* **enabled**: bool: <code>false</code> if the Facebook provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **graphApiVersion**: string: The version of the Facebook api to be used while logging in.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow.
* **registration**: [AppRegistration](#appregistration): The configuration settings of the app registration for the Facebook provider.

## FileSystemApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level.

## FileSystemHttpLogsConfig
### Properties
* **enabled**: bool: True if configuration is enabled, false if it is disabled and null if configuration is not set.
* **retentionInDays**: int: Retention in days.
Remove files older than X days.
0 or lower means no retention.
* **retentionInMb**: int {minValue: 25, maxValue: 100}: Maximum size in megabytes that http log files can use.
When reached old log files will be removed to make space for new ones.
Value can range between 25 and 100.

## FileSystemTokenStore
### Properties
* **directory**: string: The directory in which the tokens will be stored.

## FlowAccessControlConfiguration
### Properties
* **actions**: [FlowAccessControlConfigurationPolicy](#flowaccesscontrolconfigurationpolicy): The access control configuration for workflow actions.
* **contents**: [FlowAccessControlConfigurationPolicy](#flowaccesscontrolconfigurationpolicy): The access control configuration for accessing workflow run contents.
* **triggers**: [FlowAccessControlConfigurationPolicy](#flowaccesscontrolconfigurationpolicy): The access control configuration for invoking workflow triggers.
* **workflowManagement**: [FlowAccessControlConfigurationPolicy](#flowaccesscontrolconfigurationpolicy): The access control configuration for workflow management.

## FlowAccessControlConfigurationPolicy
### Properties
* **allowedCallerIpAddresses**: [IpAddressRange](#ipaddressrange)[]: The allowed caller IP address ranges.
* **openAuthenticationPolicies**: [OpenAuthenticationAccessPolicies](#openauthenticationaccesspolicies): The authentication policies for workflow.

## FlowEndpoints
### Properties
* **accessEndpointIpAddresses**: [IpAddress](#ipaddress)[]: The access endpoint ip address.
* **outgoingIpAddresses**: [IpAddress](#ipaddress)[]: The outgoing ip address.

## FlowEndpointsConfiguration
### Properties
* **connector**: [FlowEndpoints](#flowendpoints): The connector endpoints.
* **workflow**: [FlowEndpoints](#flowendpoints): The workflow endpoints.

## ForwardProxy
### Properties
* **convention**: 'Custom' | 'NoProxy' | 'Standard': The convention used to determine the url of the request made.
* **customHostHeaderName**: string: The name of the header containing the host of the request.
* **customProtoHeaderName**: string: The name of the header containing the scheme of the request.

## FrontEndConfiguration
### Properties
* **kind**: 'LoadBalancer' | 'NodePort'

## FunctionAppConfig
### Properties
* **deployment**: [FunctionsDeployment](#functionsdeployment): Function app deployment configuration.
* **runtime**: [FunctionsRuntime](#functionsruntime): Function app runtime settings.
* **scaleAndConcurrency**: [FunctionsScaleAndConcurrency](#functionsscaleandconcurrency): Function app scale and concurrency settings.

## FunctionEnvelopeProperties
### Properties
* **config**: any: Config information.
* **config_href**: string: Config URI.
* **files**: [FunctionEnvelopePropertiesFiles](#functionenvelopepropertiesfiles): File list.
* **function_app_id**: string: Function App ID.
* **href**: string: Function URI.
* **invoke_url_template**: string: The invocation URL
* **isDisabled**: bool: Gets or sets a value indicating whether the function is disabled
* **language**: string: The function language
* **script_href**: string: Script URI.
* **script_root_path_href**: string: Script root path URI.
* **secrets_file_href**: string: Secrets file URI.
* **test_data**: string: Test data used when testing via the Azure Portal.
* **test_data_href**: string: Test data URI.

## FunctionEnvelopePropertiesFiles
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FunctionsAlwaysReadyConfig
### Properties
* **instanceCount**: int: Sets the number of 'Always Ready' instances for a given function group or a specific function. For additional information see https://aka.ms/flexconsumption/alwaysready.
* **name**: string: Either a function group or a function name is required. For additional information see https://aka.ms/flexconsumption/alwaysready.

## FunctionsDeployment
### Properties
* **storage**: [FunctionsDeploymentStorage](#functionsdeploymentstorage): Storage for deployed package used by the function app.

## FunctionsDeploymentStorage
### Properties
* **authentication**: [FunctionsDeploymentStorageAuthentication](#functionsdeploymentstorageauthentication): Authentication method to access the storage account for deployment.
* **type**: 'blobContainer' | string: Property to select Azure Storage type. Available options: blobContainer.
* **value**: string: Property to set the URL for the selected Azure Storage type. Example: For blobContainer, the value could be https://<storageAccountName>.blob.core.windows.net/<containerName>.

## FunctionsDeploymentStorageAuthentication
### Properties
* **storageAccountConnectionStringName**: string: Use this property for StorageAccountConnectionString. Set the name of the app setting that has the storage account connection string. Do not set a value for this property when using other authentication type.
* **type**: 'StorageAccountConnectionString' | 'SystemAssignedIdentity' | 'UserAssignedIdentity' | string: Property to select authentication type to access the selected storage account. Available options: SystemAssignedIdentity, UserAssignedIdentity, StorageAccountConnectionString.
* **userAssignedIdentityResourceId**: string: Use this property for UserAssignedIdentity. Set the resource ID of the identity. Do not set a value for this property when using other authentication type.

## FunctionSecrets
### Properties
* **key**: string: Secret key.
* **trigger_url**: string: Trigger URL.

## FunctionSecrets
### Properties
* **key**: string: Secret key.
* **trigger_url**: string: Trigger URL.

## FunctionSecrets
### Properties
* **key**: string: Secret key.
* **trigger_url**: string: Trigger URL.

## FunctionSecrets
### Properties
* **key**: string: Secret key.
* **trigger_url**: string: Trigger URL.

## FunctionsRuntime
### Properties
* **name**: 'custom' | 'dotnet-isolated' | 'java' | 'node' | 'powershell' | 'python' | string: Function app runtime name. Available options: dotnet-isolated, node, java, powershell, python, custom
* **version**: string: Function app runtime version. Example: 8 (for dotnet-isolated)

## FunctionsScaleAndConcurrency
### Properties
* **alwaysReady**: [FunctionsAlwaysReadyConfig](#functionsalwaysreadyconfig)[]: 'Always Ready' configuration for the function app.
* **instanceMemoryMB**: int: Set the amount of memory allocated to each instance of the function app in MB. CPU and network bandwidth are allocated proportionally.
* **maximumInstanceCount**: int: The maximum number of instances for the function app.
* **triggers**: [FunctionsScaleAndConcurrencyTriggers](#functionsscaleandconcurrencytriggers): Scale and concurrency settings for the function app triggers.

## FunctionsScaleAndConcurrencyTriggers
### Properties
* **http**: [FunctionsScaleAndConcurrencyTriggersHttp](#functionsscaleandconcurrencytriggershttp): Scale and concurrency settings for the HTTP trigger.

## FunctionsScaleAndConcurrencyTriggersHttp
### Properties
* **perInstanceConcurrency**: int: The maximum number of concurrent HTTP trigger invocations per instance.

## GitHub
### Properties
* **enabled**: bool: <code>false</code> if the GitHub provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow.
* **registration**: [ClientRegistration](#clientregistration): The configuration settings of the app registration for the GitHub provider.

## GitHubActionCodeConfiguration
### Properties
* **runtimeStack**: string: Runtime stack is used to determine the workflow file content for code base apps.
* **runtimeVersion**: string: Runtime version is used to determine what build version to set in the workflow file.

## GitHubActionConfiguration
### Properties
* **codeConfiguration**: [GitHubActionCodeConfiguration](#githubactioncodeconfiguration): GitHub Action code configuration.
* **containerConfiguration**: [GitHubActionContainerConfiguration](#githubactioncontainerconfiguration): GitHub Action container configuration.
* **generateWorkflowFile**: bool: Workflow option to determine whether the workflow file should be generated and written to the repository.
* **isLinux**: bool: This will help determine the workflow configuration to select.

## GitHubActionContainerConfiguration
### Properties
* **imageName**: string: The image name for the build.
* **password**: string {sensitive}: The password used to upload the image to the container registry.
* **serverUrl**: string: The server URL for the container registry where the build will be hosted.
* **username**: string: The username used to upload the image to the container registry.

## GlobalValidation
### Properties
* **excludedPaths**: string[]: The paths for which unauthenticated flow would not be redirected to the login page.
* **redirectToProvider**: string: The default authentication provider to use when multiple providers are configured.
This setting is only needed if multiple providers are configured and the unauthenticated client
action is set to "RedirectToLoginPage".
* **requireAuthentication**: bool: <code>true</code> if the authentication flow is required any request is made; otherwise, <code>false</code>.
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage' | 'Return401' | 'Return403': The action to take when an unauthenticated client attempts to access the app.

## Google
### Properties
* **enabled**: bool: <code>false</code> if the Google provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow.
* **registration**: [ClientRegistration](#clientregistration): The configuration settings of the app registration for the Google provider.
* **validation**: [AllowedAudiencesValidation](#allowedaudiencesvalidation): The configuration settings of the Azure Active Directory token validation flow.

## HandlerMapping
### Properties
* **arguments**: string: Command-line arguments to be passed to the script processor.
* **extension**: string: Requests with this extension will be handled using the specified FastCGI application.
* **scriptProcessor**: string: The absolute path to the FastCGI application.

## HostingEnvironmentProfile
### Properties
* **id**: string: Resource ID of the App Service Environment.
* **name**: string (ReadOnly): Name of the App Service Environment.
* **type**: string (ReadOnly): Resource type of the App Service Environment.

## HostKeys
### Properties
* **functionKeys**: [HostKeysFunctionKeys](#hostkeysfunctionkeys): Host level function keys.
* **masterKey**: string: Secret key.
* **systemKeys**: [HostKeysSystemKeys](#hostkeyssystemkeys): System keys.

## HostKeys
### Properties
* **functionKeys**: [HostKeysFunctionKeys](#hostkeysfunctionkeys): Host level function keys.
* **masterKey**: string: Secret key.
* **systemKeys**: [HostKeysSystemKeys](#hostkeyssystemkeys): System keys.

## HostKeysFunctionKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HostKeysSystemKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HostNameBindingProperties
### Properties
* **azureResourceName**: string: Azure resource name.
* **azureResourceType**: 'TrafficManager' | 'Website': Azure resource type.
* **customHostNameDnsRecordType**: 'A' | 'CName': Custom DNS record type.
* **domainId**: string: Fully qualified ARM domain resource URI.
* **hostNameType**: 'Managed' | 'Verified': Hostname type.
* **siteName**: string: App Service app name.
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled': SSL type
* **thumbprint**: string: SSL certificate thumbprint
* **virtualIP**: string (ReadOnly): Virtual IP address assigned to the hostname if IP based SSL is enabled.

## HostNameSslState
### Properties
* **hostType**: 'Repository' | 'Standard': Indicates whether the hostname is a standard or repository hostname.
* **name**: string: Hostname.
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled': SSL type.
* **thumbprint**: string: SSL certificate thumbprint.
* **toUpdate**: bool: Set to <code>true</code> to update existing hostname.
* **virtualIP**: string: Virtual IP address assigned to the hostname if IP based SSL is enabled.

## HttpLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageHttpLogsConfig](#azureblobstoragehttplogsconfig): Http logs to azure blob storage configuration.
* **fileSystem**: [FileSystemHttpLogsConfig](#filesystemhttplogsconfig): Http logs to file system configuration.

## HttpScaleRule
### Properties
* **auth**: [ScaleRuleAuth](#scaleruleauth)[]: Authentication secrets for the custom scale rule.
* **metadata**: [HttpScaleRuleMetadata](#httpscalerulemetadata): Metadata properties to describe http scale rule.

## HttpScaleRuleMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HttpSettings
### Properties
* **forwardProxy**: [ForwardProxy](#forwardproxy): The configuration settings of a forward proxy used to make the requests.
* **requireHttps**: bool: <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
* **routes**: [HttpSettingsRoutes](#httpsettingsroutes): The configuration settings of the paths HTTP requests.

## HttpSettingsRoutes
### Properties
* **apiPrefix**: string: The prefix that should precede all the authentication/authorization paths.

## HybridConnection
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): HybridConnection resource specific properties
* **type**: string (ReadOnly): Resource type.

## HybridConnectionKey
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [HybridConnectionKeyProperties](#hybridconnectionkeyproperties): HybridConnectionKey resource specific properties
* **type**: string (ReadOnly): Resource type.

## HybridConnectionKeyProperties
### Properties
* **sendKeyName**: string (ReadOnly): The name of the send key.
* **sendKeyValue**: string (ReadOnly): The value of the send key.

## HybridConnectionLimitsProperties
### Properties
* **current**: int (ReadOnly): The current number of Hybrid Connections.
* **maximum**: int (ReadOnly): The maximum number of Hybrid Connections allowed.

## HybridConnectionProperties
### Properties
* **hostname**: string: The hostname of the endpoint.
* **port**: int: The port of the endpoint.
* **relayArmUri**: string: The ARM URI to the Service Bus relay.
* **relayName**: string: The name of the Service Bus relay.
* **sendKeyName**: string: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
* **sendKeyValue**: string: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
normally, use the POST /listKeys API instead.
* **serviceBusNamespace**: string: The name of the Service Bus namespace.
* **serviceBusSuffix**: string: The suffix for the service bus endpoint. By default this is .servicebus.windows.net

## IdentifierProperties
### Properties
* **id**: string: String representation of the identity.

## IdentityProviders
### Properties
* **apple**: [Apple](#apple): The configuration settings of the Apple provider.
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory): The configuration settings of the Azure Active directory provider.
* **azureStaticWebApps**: [AzureStaticWebApps](#azurestaticwebapps): The configuration settings of the Azure Static Web Apps provider.
* **customOpenIdConnectProviders**: [IdentityProvidersCustomOpenIdConnectProviders](#identityproviderscustomopenidconnectproviders): The map of the name of the alias of each custom Open ID Connect provider to the
configuration settings of the custom Open ID Connect provider.
* **facebook**: [Facebook](#facebook): The configuration settings of the Facebook provider.
* **gitHub**: [GitHub](#github): The configuration settings of the GitHub provider.
* **google**: [Google](#google): The configuration settings of the Google provider.
* **legacyMicrosoftAccount**: [LegacyMicrosoftAccount](#legacymicrosoftaccount): The configuration settings of the legacy Microsoft Account provider.
* **twitter**: [Twitter](#twitter): The configuration settings of the Twitter provider.

## IdentityProvidersCustomOpenIdConnectProviders
### Properties
### Additional Properties
* **Additional Properties Type**: [CustomOpenIdConnectProvider](#customopenidconnectprovider)

## Ingress
### Properties
* **allowInsecure**: bool: Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections
* **external**: bool: Bool indicating if app exposes an external http endpoint
* **fqdn**: string (ReadOnly): Hostname.
* **targetPort**: int: Target Port in containers for traffic from ingress
* **traffic**: [TrafficWeight](#trafficweight)[]
* **transport**: 'auto' | 'http' | 'http2' | string: Ingress transport protocol

## IpAddress
### Properties
* **address**: string: The address.

## IpAddressRange
### Properties
* **addressRange**: string: The IP address range.

## IpSecurityRestriction
### Properties
* **action**: string: Allow or Deny access for this IP range.
* **description**: string: IP restriction rule description.
* **headers**: [IpSecurityRestrictionHeaders](#ipsecurityrestrictionheaders): IP restriction rule headers.
X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples). 
The matching logic is ..
- If the property is null or empty (default), all hosts(or lack of) are allowed.
- A value is compared using ordinal-ignore-case (excluding port number).
- Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.com
 but not the root domain contoso.com or multi-level foo.bar.contoso.com
- Unicode host names are allowed but are converted to Punycode for matching.

X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).
The matching logic is ..
- If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.
- If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.

X-Azure-FDID and X-FD-HealthProbe.
The matching logic is exact match.
* **ipAddress**: string: IP address the security restriction is valid for.
It can be in form of pure ipv4 address (required SubnetMask property) or
CIDR notation such as ipv4/mask (leading bit match). For CIDR,
SubnetMask property must not be specified.
* **name**: string: IP restriction rule name.
* **priority**: int: Priority of IP restriction rule.
* **subnetMask**: string: Subnet mask for the range of IP addresses the restriction is valid for.
* **subnetTrafficTag**: int: (internal) Subnet traffic tag
* **tag**: 'Default' | 'ServiceTag' | 'XffProxy' | string: Defines what this IP filter will be used for. This is to support IP filtering on proxies.
* **vnetSubnetResourceId**: string: Virtual network resource id
* **vnetTrafficTag**: int: (internal) Vnet traffic tag

## IpSecurityRestrictionHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## JwtClaimChecks
### Properties
* **allowedClientApplications**: string[]: The list of the allowed client applications.
* **allowedGroups**: string[]: The list of the allowed groups.

## KeyValuePairStringObject
### Properties
* **key**: string (ReadOnly)
* **value**: any (ReadOnly): Any object

## KubeEnvironmentProfile
### Properties
* **id**: string: Resource ID of the Kubernetes Environment.
* **name**: string (ReadOnly): Name of the Kubernetes Environment.
* **type**: string (ReadOnly): Resource type of the Kubernetes Environment.

## KubeEnvironmentProperties
### Properties
* **aksResourceID**: string
* **appLogsConfiguration**: [AppLogsConfiguration](#applogsconfiguration): Cluster configuration which enables the log daemon to export
app logs to a destination. Currently only "log-analytics" is
supported
* **arcConfiguration**: [ArcConfiguration](#arcconfiguration): Cluster configuration which determines the ARC cluster
components types. Eg: Choosing between BuildService kind,
FrontEnd Service ArtifactsStorageType etc.
* **containerAppsConfiguration**: [ContainerAppsConfiguration](#containerappsconfiguration): Cluster configuration for Container Apps Environments to configure Dapr Instrumentation Key and VNET Configuration
* **defaultDomain**: string (ReadOnly): Default Domain Name for the cluster
* **deploymentErrors**: string (ReadOnly): Any errors that occurred during deployment or deployment validation
* **environmentType**: string: Type of Kubernetes Environment. Only supported for Container App Environments with value as Managed
* **internalLoadBalancerEnabled**: bool: Only visible within Vnet/Subnet
* **provisioningState**: 'Canceled' | 'Failed' | 'InfrastructureSetupComplete' | 'InfrastructureSetupInProgress' | 'InitializationInProgress' | 'ScheduledForDelete' | 'Succeeded' | 'UpgradeFailed' | 'UpgradeRequested' | 'Waiting' (ReadOnly): Provisioning state of the Kubernetes Environment.
* **staticIp**: string: Static IP of the KubeEnvironment

## LegacyMicrosoftAccount
### Properties
* **enabled**: bool: <code>false</code> if the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow.
* **registration**: [ClientRegistration](#clientregistration): The configuration settings of the app registration for the legacy Microsoft Account provider.
* **validation**: [AllowedAudiencesValidation](#allowedaudiencesvalidation): The configuration settings of the legacy Microsoft Account provider token validation flow.

## LogAnalyticsConfiguration
### Properties
* **customerId**: string
* **sharedKey**: string {sensitive} (WriteOnly)

## Login
### Properties
* **allowedExternalRedirectUrls**: string[]: External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
This is an advanced setting typically only needed by Windows Store application backends.
Note that URLs within the current domain are always implicitly allowed.
* **cookieExpiration**: [CookieExpiration](#cookieexpiration): The configuration settings of the session cookie's expiration.
* **nonce**: [Nonce](#nonce): The configuration settings of the nonce used in the login flow.
* **preserveUrlFragmentsForLogins**: bool: <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
* **routes**: [LoginRoutes](#loginroutes): The routes that specify the endpoints used for login and logout requests.
* **tokenStore**: [TokenStore](#tokenstore): The configuration settings of the token store.

## LoginRoutes
### Properties
* **logoutEndpoint**: string: The endpoint at which a logout request should be made.

## LoginScopes
### Properties
* **scopes**: string[]: A list of the scopes that should be requested while authenticating.

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): Principal Id of managed service identity.
* **tenantId**: string (ReadOnly): Tenant of managed service identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': Type of managed service identity.
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## MigrateMySqlStatusProperties
### Properties
* **localMySqlEnabled**: bool (ReadOnly): True if the web app has in app MySql enabled
* **migrationOperationStatus**: 'Created' | 'Failed' | 'InProgress' | 'Succeeded' | 'TimedOut' (ReadOnly): Status of the migration task.
* **operationId**: string (ReadOnly): Operation ID for the migration task.

## MSDeployCoreOrMSDeployStatusProperties
### Properties
* **appOffline**: bool (WriteOnly): Sets the AppOffline rule while the MSDeploy operation executes.
Setting is <code>false</code> by default.
* **complete**: bool (ReadOnly): Whether the deployment operation has completed
* **connectionString**: string (WriteOnly): SQL Connection String
* **dbType**: string (WriteOnly): Database Type
* **deployer**: string (ReadOnly): Username of deployer
* **endTime**: string (ReadOnly): End time of deploy operation
* **packageUri**: string (WriteOnly): Package URI
* **provisioningState**: 'accepted' | 'canceled' | 'failed' | 'running' | 'succeeded' (ReadOnly): Provisioning state
* **setParameters**: [MSDeployCoreSetParameters](#msdeploycoresetparameters) (WriteOnly): MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used.
* **setParametersXmlFileUri**: string (WriteOnly): URI of MSDeploy Parameters file. Must not be set if SetParameters is used.
* **skipAppData**: bool (WriteOnly): Controls whether the MSDeploy operation skips the App_Data directory.
If set to <code>true</code>, the existing App_Data directory on the destination
will not be deleted, and any App_Data directory in the source will be ignored.
Setting is <code>false</code> by default.
* **startTime**: string (ReadOnly): Start time of deploy operation

## MSDeployCoreSetParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NameValuePair
### Properties
* **name**: string: Pair name.
* **value**: string: Pair value.

## NetworkFeaturesProperties
### Properties
* **hybridConnections**: [RelayServiceConnectionEntity](#relayserviceconnectionentity)[] (ReadOnly): The Hybrid Connections summary view.
* **hybridConnectionsV2**: [HybridConnection](#hybridconnection)[] (ReadOnly): The Hybrid Connection V2 (Service Bus) view.
* **virtualNetworkConnection**: [VnetInfo](#vnetinfo) (ReadOnly): The Virtual Network summary view.
* **virtualNetworkName**: string (ReadOnly): The Virtual Network name.

## Nonce
### Properties
* **nonceExpirationInterval**: string: The time after the request is made when the nonce should expire.
* **validateNonce**: bool: <code>false</code> if the nonce should not be validated while completing the login flow; otherwise, <code>true</code>.

## OpenAuthenticationAccessPolicies
### Properties
* **policies**: [OpenAuthenticationAccessPolicies](#openauthenticationaccesspolicies): Open authentication policies.

## OpenAuthenticationAccessPolicies
### Properties
### Additional Properties
* **Additional Properties Type**: [OpenAuthenticationAccessPolicy](#openauthenticationaccesspolicy)

## OpenAuthenticationAccessPolicy
### Properties
* **claims**: [OpenAuthenticationPolicyClaim](#openauthenticationpolicyclaim)[]: The access policy claims.
* **type**: 'AAD' | string: Type of provider for OAuth.

## OpenAuthenticationPolicyClaim
### Properties
* **name**: string: The name of the claim.
* **value**: string: The value of the claim.

## OpenIdConnectClientCredential
### Properties
* **clientSecretSettingName**: string: The app setting that contains the client secret for the custom Open ID Connect provider.
* **method**: 'ClientSecretPost': The method that should be used to authenticate the user.

## OpenIdConnectConfig
### Properties
* **authorizationEndpoint**: string: The endpoint to be used to make an authorization request.
* **certificationUri**: string: The endpoint that provides the keys necessary to validate the token.
* **issuer**: string: The endpoint that issues the token.
* **tokenEndpoint**: string: The endpoint to be used to request a token.
* **wellKnownOpenIdConfiguration**: string: The endpoint that contains all the configuration endpoints for the provider.

## OpenIdConnectLogin
### Properties
* **nameClaimType**: string: The name of the claim that contains the users name.
* **scopes**: string[]: A list of the scopes that should be requested while authenticating.

## OpenIdConnectRegistration
### Properties
* **clientCredential**: [OpenIdConnectClientCredential](#openidconnectclientcredential): The authentication credentials of the custom Open ID Connect provider.
* **clientId**: string: The client id of the custom Open ID Connect provider.
* **openIdConnectConfiguration**: [OpenIdConnectConfig](#openidconnectconfig): The configuration settings of the endpoints used for the custom Open ID Connect provider.

## PremierAddOnProperties
### Properties
* **marketplaceOffer**: string: Premier add on Marketplace offer.
* **marketplacePublisher**: string: Premier add on Marketplace publisher.
* **product**: string: Premier add on Product.
* **sku**: string: Premier add on SKU.
* **vendor**: string: Premier add on Vendor.

## PrivateAccessProperties
### Properties
* **enabled**: bool: Whether private access is enabled or not.
* **virtualNetworks**: [PrivateAccessVirtualNetwork](#privateaccessvirtualnetwork)[]: The Virtual Networks (and subnets) allowed to access the site privately.

## PrivateAccessSubnet
### Properties
* **key**: int: The key (ID) of the subnet.
* **name**: string: The name of the subnet.

## PrivateAccessVirtualNetwork
### Properties
* **key**: int: The key (ID) of the Virtual Network.
* **name**: string: The name of the Virtual Network.
* **resourceId**: string: The ARM uri of the Virtual Network
* **subnets**: [PrivateAccessSubnet](#privateaccesssubnet)[]: A List of subnets that access is allowed to on this Virtual Network. An empty array (but not null) is interpreted to mean that all subnets are allowed within this Virtual Network.

## PrivateLinkConnectionState
### Properties
* **actionsRequired**: string: ActionsRequired for a private link connection
* **description**: string: Description of a private link connection
* **status**: string: Status of a private link connection

## ProcessInfoProperties
### Properties
* **children**: string[]: Child process list.
* **command_line**: string: Command line.
* **deployment_name**: string: Deployment name.
* **description**: string: Description of process.
* **environment_variables**: [ProcessInfoPropertiesEnvironmentVariables](#processinfopropertiesenvironmentvariables): List of environment variables.
* **file_name**: string: File name of this process.
* **handle_count**: int: Handle count.
* **href**: string: HRef URI.
* **identifier**: int (ReadOnly): ARM Identifier for deployment.
* **iis_profile_timeout_in_seconds**: int: IIS Profile timeout (seconds).
* **is_iis_profile_running**: bool: Is the IIS Profile running?
* **is_profile_running**: bool: Is profile running?
* **is_scm_site**: bool: Is this the SCM site?
* **is_webjob**: bool: Is this a Web Job?
* **minidump**: string: Minidump URI.
* **module_count**: int: Module count.
* **modules**: [ProcessModuleInfo](#processmoduleinfo)[]: List of modules.
* **non_paged_system_memory**: int: Non-paged system memory.
* **open_file_handles**: string[]: List of open files.
* **paged_memory**: int: Paged memory.
* **paged_system_memory**: int: Paged system memory.
* **parent**: string: Parent process.
* **peak_paged_memory**: int: Peak paged memory.
* **peak_virtual_memory**: int: Peak virtual memory usage.
* **peak_working_set**: int: Peak working set.
* **private_memory**: int: Private memory size.
* **privileged_cpu_time**: string: Privileged CPU time.
* **start_time**: string: Start time.
* **thread_count**: int: Thread count.
* **threads**: [ProcessThreadInfo](#processthreadinfo)[]: Thread list.
* **time_stamp**: string: Time stamp.
* **total_cpu_time**: string: Total CPU time.
* **user_cpu_time**: string: User CPU time.
* **user_name**: string: User name.
* **virtual_memory**: int: Virtual memory size.
* **working_set**: int: Working set.

## ProcessInfoPropertiesEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProcessModuleInfo
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties): ProcessModuleInfo resource specific properties
* **type**: string (ReadOnly): Resource type.

## ProcessModuleInfoProperties
### Properties
* **base_address**: string: Base address. Used as module identifier in ARM resource URI.
* **file_description**: string: File description.
* **file_name**: string: File name.
* **file_path**: string: File path.
* **file_version**: string: File version.
* **href**: string: HRef URI.
* **is_debug**: bool: Is debug?
* **language**: string: Module language (locale).
* **module_memory_size**: int: Module memory size.
* **product**: string: Product name.
* **product_version**: string: Product version.

## ProcessThreadInfo
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [ProcessThreadInfoProperties](#processthreadinfoproperties): ProcessThreadInfo resource specific properties
* **type**: string (ReadOnly): Resource type.

## ProcessThreadInfoProperties
### Properties
* **base_priority**: int: Base priority.
* **current_priority**: int: Current thread priority.
* **href**: string: HRef URI.
* **identifier**: int (ReadOnly): Site extension ID.
* **priority_level**: string: Thread priority level.
* **process**: string: Process URI.
* **start_address**: string: Start address.
* **start_time**: string: Start time.
* **state**: string: Thread state.
* **total_processor_time**: string: Total processor time.
* **user_processor_time**: string: User processor time.
* **wait_reason**: string: Wait reason.

## PublicCertificateProperties
### Properties
* **blob**: any: Public Certificate byte array
* **publicCertificateLocation**: 'CurrentUserMy' | 'LocalMachineMy' | 'Unknown': Public Certificate Location
* **thumbprint**: string (ReadOnly): Certificate Thumbprint

## PushSettings
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [PushSettingsProperties](#pushsettingsproperties): PushSettings resource specific properties
* **type**: string (ReadOnly): Resource type.

## PushSettingsProperties
### Properties
* **dynamicTagsJson**: string: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
* **isPushEnabled**: bool (Required): Gets or sets a flag indicating whether the Push endpoint is enabled.
* **tagsRequiringAuth**: string: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
Tags can consist of alphanumeric characters and the following:
'_', '@', '#', '.', ':', '-'. 
Validation should be performed at the PushRequestHandler.
* **tagWhitelistJson**: string: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.

## QueryUtterancesResult
### Properties
* **sampleUtterance**: [SampleUtterance](#sampleutterance): A sample utterance.
* **score**: int: Score of a sample utterance.

## QueryUtterancesResults
### Properties
* **query**: string: Search Query.
* **results**: [QueryUtterancesResult](#queryutterancesresult)[]: Array of utterance results for search query.

## QueueScaleRule
### Properties
* **auth**: [ScaleRuleAuth](#scaleruleauth)[]: Authentication secrets for the queue scale rule.
* **queueLength**: int: Queue length.
* **queueName**: string: Queue name.

## RampUpRule
### Properties
* **actionHostName**: string: Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net.
* **changeDecisionCallbackUrl**: string: Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
https://www.siteextensions.net/packages/TiPCallback/
* **changeIntervalInMinutes**: int: Specifies interval in minutes to reevaluate ReroutePercentage.
* **changeStep**: int: In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or 
<code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm 
can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
* **maxReroutePercentage**: int: Specifies upper boundary below which ReroutePercentage will stay.
* **minReroutePercentage**: int: Specifies lower boundary above which ReroutePercentage will stay.
* **name**: string: Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.
* **reroutePercentage**: int: Percentage of the traffic which will be redirected to <code>ActionHostName</code>.

## RecommendationRuleProperties
### Properties
* **actionName**: string: Name of action that is recommended by this rule in string.
* **bladeName**: string: Deep link to a blade on the portal. Applicable to dynamic rule only.
* **categoryTags**: string[] (ReadOnly): The list of category tags that this recommendation rule belongs to.
* **channels**: 'All' | 'Api' | 'Email' | 'Notification' | 'Webhook': List of available channels that this rule applies.
* **description**: string: Localized detailed description of the rule.
* **displayName**: string: UI friendly name of the rule.
* **extensionName**: string: Extension name of the portal if exists. Applicable to dynamic rule only.
* **forwardLink**: string: Forward link to an external document associated with the rule. Applicable to dynamic rule only.
* **isDynamic**: bool: True if this is associated with a dynamically added rule
* **level**: 'Critical' | 'Information' | 'NonUrgentSuggestion' | 'Warning': Level of impact indicating how critical this rule is.
* **message**: string: Localized name of the rule (Good for UI).
* **recommendationId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Recommendation ID of an associated recommendation object tied to the rule, if exists.
If such an object doesn't exist, it is set to null.
* **recommendationName**: string: Unique name of the rule.

## RecurrenceSchedule
### Properties
* **hours**: int[]: The hours.
* **minutes**: int[]: The minutes.
* **monthDays**: int[]: The month days.
* **monthlyOccurrences**: [RecurrenceScheduleOccurrence](#recurrencescheduleoccurrence)[]: The monthly occurrences.
* **weekDays**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday')[]: The days of the week.

## RecurrenceScheduleOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': The day of the week.
* **occurrence**: int: The occurrence.

## RegistryCredentials
### Properties
* **passwordSecretRef**: string: The name of the Secret that contains the registry login password
* **server**: string: Container Registry Server
* **username**: string: Container Registry Username

## RelayServiceConnectionEntity
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties): RelayServiceConnectionEntity resource specific properties
* **type**: string (ReadOnly): Resource type.

## RelayServiceConnectionEntityProperties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## RemotePrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [RemotePrivateEndpointConnectionProperties](#remoteprivateendpointconnectionproperties): RemotePrivateEndpointConnection resource specific properties
* **type**: string (ReadOnly): Resource type.

## RemotePrivateEndpointConnectionARMResourceProperties
### Properties
* **ipAddresses**: string[]: Private IPAddresses mapped to the remote private endpoint
* **privateEndpoint**: [ArmIdWrapper](#armidwrapper): PrivateEndpoint of a remote private endpoint connection
* **privateLinkServiceConnectionState**: [PrivateLinkConnectionState](#privatelinkconnectionstate): The state of a private link connection
* **provisioningState**: string (ReadOnly)

## RemotePrivateEndpointConnectionProperties
### Properties
* **ipAddresses**: string[]: Private IPAddresses mapped to the remote private endpoint
* **privateEndpoint**: [ArmIdWrapper](#armidwrapper): PrivateEndpoint of a remote private endpoint connection
* **privateLinkServiceConnectionState**: [PrivateLinkConnectionState](#privatelinkconnectionstate): The state of a private link connection
* **provisioningState**: string (ReadOnly)

## Rendering
### Properties
* **description**: string: Description of the data that will help it be interpreted
* **title**: string: Title of data
* **type**: 'AppInsight' | 'AppInsightEnablement' | 'Card' | 'ChangeAnalysisOnboarding' | 'ChangeSets' | 'ChangesView' | 'DataSummary' | 'DependencyGraph' | 'Detector' | 'DownTime' | 'DropDown' | 'DynamicInsight' | 'Email' | 'Form' | 'Guage' | 'Insights' | 'Markdown' | 'NoGraph' | 'PieChart' | 'SearchComponent' | 'Solution' | 'SummaryCard' | 'Table' | 'TimeSeries' | 'TimeSeriesPerInstance': Rendering Type

## RepetitionIndex
### Properties
* **itemIndex**: int (Required): The index.
* **scopeName**: string: The scope.

## Request
### Properties
* **headers**: any: A list of all the headers attached to the request.
* **method**: string: The HTTP method used for the request.
* **uri**: string: The destination for the request.

## RequestHistoryProperties
### Properties
* **endTime**: string: The time the request ended.
* **request**: [Request](#request): The request.
* **response**: [Response](#response): The response.
* **startTime**: string: The time the request started.

## RequestsBasedTrigger
### Properties
* **count**: int: Request Count.
* **timeInterval**: string: Time interval.

## ResourceConfig
### Properties
* **cpu**: int: Required CPU in cores, e.g. 0.5
* **memory**: string: Required memory, e.g. "1Gi"

## ResourceHealthMetadataProperties
### Properties
* **category**: string: The category that the resource matches in the RHC Policy File
* **signalAvailability**: bool: Is there a health signal for the resource

## ResourceReference
### Properties
* **id**: string: The resource id.
* **name**: string (ReadOnly): Gets the resource name.
* **type**: string (ReadOnly): Gets the resource type.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Response
### Properties
* **bodyLink**: [ContentLink](#contentlink): Details on the location of the body content.
* **headers**: any: A list of all the headers attached to the response.
* **statusCode**: int: The status code of the response.

## ResponseMessageEnvelopeRemotePrivateEndpointConnection
### Properties
* **error**: [ErrorEntity](#errorentity): Azure-AsyncOperation Error info.
* **id**: string: Resource Id. Typically ID is populated only for responses to GET requests. Caller is responsible for passing in this
value for GET requests only.
For example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupId}/providers/Microsoft.Web/sites/{sitename}
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): MSI resource
* **location**: string: Geographical region resource belongs to e.g. SouthCentralUS, SouthEastAsia.
* **name**: string: Name of resource.
* **plan**: [ArmPlan](#armplan): Azure resource manager plan.
* **properties**: [RemotePrivateEndpointConnection](#remoteprivateendpointconnection): Resource specific properties.
* **sku**: [SkuDescription](#skudescription): SKU description of the resource.
* **status**: string: Azure-AsyncOperation Status info.
* **tags**: [ResponseMessageEnvelopeRemotePrivateEndpointConnectionTags](#responsemessageenveloperemoteprivateendpointconnectiontags): Tags associated with resource.
* **type**: string: Type of resource e.g "Microsoft.Web/sites".
* **zones**: string[]: Logical Availability Zones the service is hosted in

## ResponseMessageEnvelopeRemotePrivateEndpointConnectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RetryHistory
### Properties
* **clientRequestId**: string: Gets the client request Id.
* **code**: string: Gets the status code.
* **endTime**: string: Gets the end time.
* **error**: [ErrorResponse](#errorresponse): Gets the error response.
* **serviceRequestId**: string: Gets the service request Id.
* **startTime**: string: Gets the start time.

## RevisionProperties
### Properties
* **active**: bool (ReadOnly): Boolean describing if the Revision is Active
* **createdTime**: string (ReadOnly): Timestamp describing when the revision was created
by controller
* **fqdn**: string (ReadOnly): Fully qualified domain name of the revision
* **healthState**: 'Healthy' | 'None' | 'Unhealthy' | string (ReadOnly): Current health State of the revision
* **provisioningError**: string (ReadOnly): Optional Field - Platform Error Message
* **provisioningState**: 'Deprovisioned' | 'Deprovisioning' | 'Failed' | 'Provisioned' | 'Provisioning' | string (ReadOnly): Current provisioning State of the revision
* **replicas**: int (ReadOnly): Number of pods currently running for this revision
* **template**: [Template](#template) (ReadOnly): Container App Revision Template with all possible settings and the
defaults if user did not provide them. The defaults are populated
as they were at the creation time
* **trafficWeight**: int (ReadOnly): Traffic weight assigned to this revision

## RunActionCorrelation
### Properties
* **actionTrackingId**: string: The action tracking identifier.
* **clientKeywords**: string[]: The client keywords.
* **clientTrackingId**: string: The client tracking identifier.

## SampleUtterance
### Properties
* **links**: string[]: Links attribute of sample utterance.
* **qid**: string: Question id of sample utterance (for stackoverflow questions titles).
* **text**: string: Text attribute of sample utterance.

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

## ScaleRuleAuth
### Properties
* **secretRef**: string: Name of the Container App secret from which to pull the auth params.
* **triggerParameter**: string: Trigger Parameter that uses the secret

## Secret
### Properties
* **name**: string: Secret Name.
* **value**: string {sensitive} (WriteOnly): Secret Value.

## SecretsCollection
### Properties
* **value**: [ContainerAppSecret](#containerappsecret)[] (Required): Collection of resources.

## SiteAuthSettingsProperties
### Properties
* **aadClaimsAuthorization**: string: Gets a JSON string containing the Azure AD Acl settings.
* **additionalLoginParams**: string[]: Login parameters to send to the OpenID Connect authorization endpoint when
a user logs in. Each parameter must be in the form "key=value".
* **allowedAudiences**: string[]: Allowed audience values to consider when validating JSON Web Tokens issued by 
Azure Active Directory. Note that the <code>ClientID</code> value is always considered an
allowed audience, regardless of this setting.
* **allowedExternalRedirectUrls**: string[]: External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
This is an advanced setting typically only needed by Windows Store application backends.
Note that URLs within the current domain are always implicitly allowed.
* **authFilePath**: string: The path of the config file containing auth settings.
If the path is relative, base will the site's root directory.
* **clientId**: string: The Client ID of this relying party application, known as the client_id.
This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
other 3rd party OpenID Connect providers.
More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
* **clientSecret**: string: The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).
This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.
Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.
More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
* **clientSecretCertificateThumbprint**: string: An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
a replacement for the Client Secret. It is also optional.
* **clientSecretSettingName**: string: The app setting name that contains the client secret of the relying party application.
* **configVersion**: string: The ConfigVersion of the Authentication / Authorization feature in use for the current app.
The setting in this value can control the behavior of the control plane for Authentication / Authorization.
* **defaultProvider**: 'AzureActiveDirectory' | 'Facebook' | 'Github' | 'Google' | 'MicrosoftAccount' | 'Twitter': The default authentication provider to use when multiple providers are configured.
This setting is only needed if multiple providers are configured and the unauthenticated client
action is set to "RedirectToLoginPage".
* **enabled**: bool: <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
* **facebookAppId**: string: The App ID of the Facebook app used for login.
This setting is required for enabling Facebook Login.
Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **facebookAppSecret**: string: The App Secret of the Facebook app used for Facebook Login.
This setting is required for enabling Facebook Login.
Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **facebookAppSecretSettingName**: string: The app setting name that contains the app secret used for Facebook Login.
* **facebookOAuthScopes**: string[]: The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
This setting is optional.
Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **gitHubClientId**: string: The Client Id of the GitHub app used for login.
This setting is required for enabling Github login
* **gitHubClientSecret**: string: The Client Secret of the GitHub app used for Github Login.
This setting is required for enabling Github login.
* **gitHubClientSecretSettingName**: string: The app setting name that contains the client secret of the Github
app used for GitHub Login.
* **gitHubOAuthScopes**: string[]: The OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.
This setting is optional
* **googleClientId**: string: The OpenID Connect Client ID for the Google web application.
This setting is required for enabling Google Sign-In.
Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **googleClientSecret**: string: The client secret associated with the Google web application.
This setting is required for enabling Google Sign-In.
Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **googleClientSecretSettingName**: string: The app setting name that contains the client secret associated with 
the Google web application.
* **googleOAuthScopes**: string[]: The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.
Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **isAuthFromFile**: string: "true" if the auth config settings should be read from a file,
"false" otherwise
* **issuer**: string: The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://sts.windows.net/{tenant-guid}/.
This URI is a case-sensitive identifier for the token issuer.
More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
* **microsoftAccountClientId**: string: The OAuth 2.0 client ID that was created for the app used for authentication.
This setting is required for enabling Microsoft Account authentication.
Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
* **microsoftAccountClientSecret**: string: The OAuth 2.0 client secret that was created for the app used for authentication.
This setting is required for enabling Microsoft Account authentication.
Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
* **microsoftAccountClientSecretSettingName**: string: The app setting name containing the OAuth 2.0 client secret that was created for the
app used for authentication.
* **microsoftAccountOAuthScopes**: string[]: The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.
This setting is optional. If not specified, "wl.basic" is used as the default scope.
Microsoft Account Scopes and permissions documentation: https://msdn.microsoft.com/en-us/library/dn631845.aspx
* **runtimeVersion**: string: The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
* **tokenRefreshExtensionHours**: int: The number of hours after session token expiration that a session token can be used to
call the token refresh API. The default is 72 hours.
* **tokenStoreEnabled**: bool: <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
 The default is <code>false</code>.
* **twitterConsumerKey**: string: The OAuth 1.0a consumer key of the Twitter application used for sign-in.
This setting is required for enabling Twitter Sign-In.
Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
* **twitterConsumerSecret**: string: The OAuth 1.0a consumer secret of the Twitter application used for sign-in.
This setting is required for enabling Twitter Sign-In.
Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
* **twitterConsumerSecretSettingName**: string: The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
application used for sign-in.
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage': The action to take when an unauthenticated client attempts to access the app.
* **validateIssuer**: bool: Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such.

## SiteAuthSettingsV2Properties
### Properties
* **globalValidation**: [GlobalValidation](#globalvalidation): The configuration settings that determines the validation flow of users using App Service Authentication/Authorization.
* **httpSettings**: [HttpSettings](#httpsettings): The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization.
* **identityProviders**: [IdentityProviders](#identityproviders): The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
* **login**: [Login](#login): The configuration settings of the login flow of users using App Service Authentication/Authorization.
* **platform**: [AuthPlatform](#authplatform): The configuration settings of the platform of App Service Authentication/Authorization.

## SiteConfig
### Properties
* **acrUseManagedIdentityCreds**: bool: Flag to use Managed Identity Creds for ACR pull
* **acrUserManagedIdentityID**: string: If using user managed identity, the user managed identity ClientId
* **alwaysOn**: bool: <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
* **apiDefinition**: [ApiDefinitionInfo](#apidefinitioninfo): Information about the formal API definition for the app.
* **apiManagementConfig**: [ApiManagementConfig](#apimanagementconfig): Azure API management settings linked to the app.
* **appCommandLine**: string: App command line to launch.
* **appSettings**: [NameValuePair](#namevaluepair)[]: Application settings.
* **autoHealEnabled**: bool: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
* **autoHealRules**: [AutoHealRules](#autohealrules): Auto Heal rules.
* **autoSwapSlotName**: string: Auto-swap slot name.
* **azureStorageAccounts**: [SiteConfigAzureStorageAccounts](#siteconfigazurestorageaccounts): List of Azure Storage Accounts.
* **connectionStrings**: [ConnStringInfo](#connstringinfo)[]: Connection strings.
* **cors**: [CorsSettings](#corssettings): Cross-Origin Resource Sharing (CORS) settings.
* **defaultDocuments**: string[]: Default documents.
* **detailedErrorLoggingEnabled**: bool: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
* **documentRoot**: string: Document root.
* **elasticWebAppScaleLimit**: int {minValue: 0}: Maximum number of workers that a site can scale out to.
This setting only applies to apps in plans where ElasticScaleEnabled is <code>true</code>
* **experiments**: [Experiments](#experiments): This is work around for polymorphic types.
* **ftpsState**: 'AllAllowed' | 'Disabled' | 'FtpsOnly' | string: State of FTP / FTPS service
* **functionAppScaleLimit**: int {minValue: 0}: Maximum number of workers that a site can scale out to.
This setting only applies to the Consumption and Elastic Premium Plans
* **functionsRuntimeScaleMonitoringEnabled**: bool: Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,
the ScaleController will not monitor event sources directly, but will instead call to the
runtime to get scale status.
* **handlerMappings**: [HandlerMapping](#handlermapping)[]: Handler mappings.
* **healthCheckPath**: string: Health check path
* **http20Enabled**: bool: Http20Enabled: configures a web site to allow clients to connect over http2.0
* **httpLoggingEnabled**: bool: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
* **ipSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]: IP security restrictions for main.
* **ipSecurityRestrictionsDefaultAction**: 'Allow' | 'Deny' | string: Default action for main access restriction if no rules are matched.
* **javaContainer**: string: Java container.
* **javaContainerVersion**: string: Java container version.
* **javaVersion**: string: Java version.
* **keyVaultReferenceIdentity**: string: Identity to use for Key Vault Reference authentication.
* **limits**: [SiteLimits](#sitelimits): Site limits.
* **linuxFxVersion**: string: Linux App Framework and version
* **loadBalancing**: 'LeastRequests' | 'LeastResponseTime' | 'PerSiteRoundRobin' | 'RequestHash' | 'WeightedRoundRobin' | 'WeightedTotalTraffic': Site load balancing.
* **localMySqlEnabled**: bool: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
* **logsDirectorySizeLimit**: int: HTTP logs directory size limit.
* **machineKey**: [SiteMachineKey](#sitemachinekey) (ReadOnly): Site MachineKey.
* **managedPipelineMode**: 'Classic' | 'Integrated': Managed pipeline mode.
* **managedServiceIdentityId**: int: Managed Service Identity Id
* **metadata**: [NameValuePair](#namevaluepair)[] (WriteOnly): Application metadata. This property cannot be retrieved, since it may contain secrets.
* **minimumElasticInstanceCount**: int {minValue: 0, maxValue: 20}: Number of minimum instance count for a site
This setting only applies to the Elastic Plans
* **minTlsCipherSuite**: 'TLS_AES_128_GCM_SHA256' | 'TLS_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | string: The minimum strength TLS cipher suite allowed for an application
* **minTlsVersion**: '1.0' | '1.1' | '1.2' | '1.3' | string: MinTlsVersion: configures the minimum version of TLS required for SSL requests
* **netFrameworkVersion**: string: .NET Framework version.
* **nodeVersion**: string: Version of Node.js.
* **numberOfWorkers**: int: Number of workers.
* **phpVersion**: string: Version of PHP.
* **powerShellVersion**: string: Version of PowerShell.
* **preWarmedInstanceCount**: int {minValue: 0, maxValue: 10}: Number of preWarmed instances.
This setting only applies to the Consumption and Elastic Plans
* **publicNetworkAccess**: string: Property to allow or block all public traffic.
* **publishingUsername**: string: Publishing user name.
* **push**: [PushSettings](#pushsettings): Push endpoint settings.
* **pythonVersion**: string: Version of Python.
* **remoteDebuggingEnabled**: bool: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
* **remoteDebuggingVersion**: string: Remote debugging version.
* **requestTracingEnabled**: bool: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
* **requestTracingExpirationTime**: string: Request tracing expiration time.
* **scmIpSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]: IP security restrictions for scm.
* **scmIpSecurityRestrictionsDefaultAction**: 'Allow' | 'Deny' | string: Default action for scm access restriction if no rules are matched.
* **scmIpSecurityRestrictionsUseMain**: bool: IP security restrictions for scm to use main.
* **scmMinTlsVersion**: '1.0' | '1.1' | '1.2' | '1.3' | string: ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site
* **scmType**: 'BitbucketGit' | 'BitbucketHg' | 'CodePlexGit' | 'CodePlexHg' | 'Dropbox' | 'ExternalGit' | 'ExternalHg' | 'GitHub' | 'LocalGit' | 'None' | 'OneDrive' | 'Tfs' | 'VSO' | 'VSTSRM' | string: SCM type.
* **tracingOptions**: string: Tracing options.
* **use32BitWorkerProcess**: bool: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
* **virtualApplications**: [VirtualApplication](#virtualapplication)[]: Virtual applications.
* **vnetName**: string: Virtual Network name.
* **vnetPrivatePortsCount**: int: The number of private ports assigned to this app. These will be assigned dynamically on runtime.
* **vnetRouteAllEnabled**: bool: Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied.
* **websiteTimeZone**: string: Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database values https://www.iana.org/time-zones (for a quick reference see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones
* **webSocketsEnabled**: bool: <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
* **windowsFxVersion**: string: Xenon App Framework and version
* **xManagedServiceIdentityId**: int: Explicit Managed Service Identity Id

## SiteConfigAzureStorageAccounts
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## SiteContainerProperties
### Properties
* **authType**: 'Anonymous' | 'SystemIdentity' | 'UserAssigned' | 'UserCredentials': Auth Type
* **createdTime**: string (ReadOnly): Created Time
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: List of environment variables
* **image**: string (Required): Image Name
* **isMain**: bool (Required): <code>true</code> if the container is the main site container; <code>false</code> otherwise.
* **lastModifiedTime**: string (ReadOnly): Last Modified Time
* **passwordSecret**: string {sensitive}: Password Secret
* **startUpCommand**: string: StartUp Command
* **targetPort**: string: Target Port
* **userManagedIdentityClientId**: string: UserManagedIdentity ClientId
* **userName**: string: User Name
* **volumeMounts**: [VolumeMount](#volumemount)[]: List of volume mounts

## SiteDnsConfig
### Properties
* **dnsAltServer**: string: Alternate DNS server to be used by apps. This property replicates the WEBSITE_DNS_ALT_SERVER app setting.
* **dnsLegacySortOrder**: bool (ReadOnly): Indicates that sites using Virtual network custom DNS servers are still sorting the list of DNS servers. Read-Only.
* **dnsMaxCacheTimeout**: int: Custom time for DNS to be cached in seconds. Allowed range: 0-60. Default is 30 seconds. 0 means caching disabled.
* **dnsRetryAttemptCount**: int: Total number of retries for dns lookup. Allowed range: 1-5. Default is 3.
* **dnsRetryAttemptTimeout**: int: Timeout for a single dns lookup in seconds. Allowed range: 1-30. Default is 3.
* **dnsServers**: string[]: List of custom DNS servers to be used by an app for lookups. Maximum 5 dns servers can be set.

## SiteExtensionInfoProperties
### Properties
* **authors**: string[]: List of authors.
* **comment**: string: Site Extension comment.
* **description**: string: Detailed description.
* **download_count**: int: Count of downloads.
* **extension_id**: string: Site extension ID.
* **extension_type**: 'Gallery' | 'WebRoot': Site extension type.
* **extension_url**: string: Extension URL.
* **feed_url**: string: Feed URL.
* **icon_url**: string: Icon URL.
* **installed_date_time**: string: Installed timestamp.
* **installer_command_line_params**: string: Installer command line parameters.
* **license_url**: string: License URL.
* **local_is_latest_version**: bool: <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
* **local_path**: string: Local path.
* **project_url**: string: Project URL.
* **provisioningState**: string: Provisioning state.
* **published_date_time**: string: Published timestamp.
* **summary**: string: Summary description.
* **title**: string
* **version**: string: Version information.

## SiteLimits
### Properties
* **maxDiskSizeInMb**: int: Maximum allowed disk size usage in MB.
* **maxMemoryInMb**: int: Maximum allowed memory usage in MB.
* **maxPercentageCpu**: int: Maximum allowed CPU usage percentage.

## SiteLogsConfigProperties
### Properties
* **applicationLogs**: [ApplicationLogsConfig](#applicationlogsconfig): Application logs configuration.
* **detailedErrorMessages**: [EnabledConfig](#enabledconfig): Detailed error messages configuration.
* **failedRequestsTracing**: [EnabledConfig](#enabledconfig): Failed requests tracing configuration.
* **httpLogs**: [HttpLogsConfig](#httplogsconfig): HTTP logs configuration.

## SiteMachineKey
### Properties
* **decryption**: string: Algorithm used for decryption.
* **decryptionKey**: string: Decryption key.
* **validation**: string: MachineKey validation.
* **validationKey**: string: Validation key.

## SiteProperties
### Properties
* **availabilityState**: 'DisasterRecoveryMode' | 'Limited' | 'Normal' (ReadOnly): Management information availability state for the app.
* **clientAffinityEnabled**: bool: <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
* **clientCertEnabled**: bool: <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
* **clientCertExclusionPaths**: string: client certificate authentication comma-separated exclusion paths
* **clientCertMode**: 'Optional' | 'OptionalInteractiveUser' | 'Required': This composes with ClientCertEnabled setting.
- ClientCertEnabled: false means ClientCert is ignored.
- ClientCertEnabled: true and ClientCertMode: Required means ClientCert is required.
- ClientCertEnabled: true and ClientCertMode: Optional means ClientCert is optional or accepted.
* **cloningInfo**: [CloningInfo](#cloninginfo) (WriteOnly): If specified during app creation, the app is cloned from a source app.
* **containerSize**: int: Size of the function container.
* **customDomainVerificationId**: string: Unique identifier that verifies the custom domains assigned to the app. Customer will add this id to a txt record for verification.
* **dailyMemoryTimeQuota**: int: Maximum allowed daily memory-time quota (applicable on dynamic apps only).
* **daprConfig**: [DaprConfig](#daprconfig): Dapr configuration of the app.
* **defaultHostName**: string (ReadOnly): Default hostname of the app. Read-only.
* **dnsConfiguration**: [SiteDnsConfig](#sitednsconfig): Property to configure various DNS related settings for a site.
* **enabled**: bool: <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
* **enabledHostNames**: string[] (ReadOnly): Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
the app is not served on those hostnames.
* **endToEndEncryptionEnabled**: bool: Whether to use end to end encryption between the FrontEnd and the Worker
* **functionAppConfig**: [FunctionAppConfig](#functionappconfig): Configuration specific of the Azure Function app.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): App Service Environment to use for the app.
* **hostNames**: string[] (ReadOnly): Hostnames associated with the app.
* **hostNamesDisabled**: bool: <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
 If <code>true</code>, the app is only accessible via API management process.
* **hostNameSslStates**: [HostNameSslState](#hostnamesslstate)[]: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
* **httpsOnly**: bool: HttpsOnly: configures a web site to accept only https requests. Issues redirect for
http requests
* **hyperV**: bool: Hyper-V sandbox.
* **inProgressOperationId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): Specifies an operation id if this site has a pending operation.
* **isDefaultContainer**: bool (ReadOnly): <code>true</code> if the app is a default container; otherwise, <code>false</code>.
* **isXenon**: bool: Obsolete: Hyper-V sandbox.
* **keyVaultReferenceIdentity**: string: Identity to use for Key Vault Reference authentication.
* **lastModifiedTimeUtc**: string (ReadOnly): Last time the app was modified, in UTC. Read-only.
* **managedEnvironmentId**: string: Azure Resource Manager ID of the customer's selected Managed Environment on which to host this app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName}
* **maxNumberOfWorkers**: int (ReadOnly): Maximum number of workers.
This only applies to Functions container.
* **outboundIpAddresses**: string (ReadOnly): List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
* **possibleOutboundIpAddresses**: string (ReadOnly): List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants except dataComponent. Read-only.
* **publicNetworkAccess**: string: Property to allow or block all public traffic. Allowed Values: 'Enabled', 'Disabled' or an empty string.
* **redundancyMode**: 'ActiveActive' | 'Failover' | 'GeoRedundant' | 'Manual' | 'None': Site redundancy mode
* **repositorySiteName**: string (ReadOnly): Name of the repository site.
* **reserved**: bool: <code>true</code> if reserved; otherwise, <code>false</code>.
* **resourceConfig**: [ResourceConfig](#resourceconfig): Function app resource requirements.
* **resourceGroup**: string (ReadOnly): Name of the resource group the app belongs to. Read-only.
* **scmSiteAlsoStopped**: bool: <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
* **serverFarmId**: string: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
* **siteConfig**: [SiteConfig](#siteconfig): Configuration of the app.
* **slotSwapStatus**: [SlotSwapStatus](#slotswapstatus) (ReadOnly): Status of the last deployment slot swap operation.
* **state**: string (ReadOnly): Current state of the app.
* **storageAccountRequired**: bool: Checks if Customer provided storage account is required
* **suspendedTill**: string (ReadOnly): App suspended till in case memory-time quota is exceeded.
* **targetSwapSlot**: string (ReadOnly): Specifies which deployment slot this app will swap into. Read-only.
* **trafficManagerHostNames**: string[] (ReadOnly): Azure Traffic Manager hostnames associated with the app. Read-only.
* **usageState**: 'Exceeded' | 'Normal' (ReadOnly): State indicating whether the app has exceeded its quota usage. Read-only.
* **virtualNetworkSubnetId**: string: Azure Resource Manager ID of the Virtual network and subnet to be joined by Regional VNET Integration.
This must be of the form /subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}
* **vnetBackupRestoreEnabled**: bool: To enable Backup and Restore operations over virtual network
* **vnetContentShareEnabled**: bool: To enable accessing content over virtual network
* **vnetImagePullEnabled**: bool: To enable pulling image over Virtual Network
* **vnetRouteAllEnabled**: bool: Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied.
* **workloadProfileName**: string: Workload profile name for function app to execute on.

## SiteSourceControlProperties
### Properties
* **branch**: string: Name of branch to use for deployment.
* **deploymentRollbackEnabled**: bool: <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
* **gitHubActionConfiguration**: [GitHubActionConfiguration](#githubactionconfiguration): If GitHub Action is selected, than the associated configuration.
* **isGitHubAction**: bool: <code>true</code> if this is deployed via GitHub action.
* **isManualIntegration**: bool: <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
* **isMercurial**: bool: <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
* **repoUrl**: string: Repository or source control URL.

## SkuCapacity
### Properties
* **default**: int: Default number of workers for this App Service plan SKU.
* **elasticMaximum**: int: Maximum number of Elastic workers for this App Service plan SKU.
* **maximum**: int: Maximum number of workers for this App Service plan SKU.
* **minimum**: int: Minimum number of workers for this App Service plan SKU.
* **scaleType**: string: Available scale configurations for an App Service plan.

## SkuDescription
### Properties
* **capabilities**: [Capability](#capability)[]: Capabilities of the SKU, e.g., is traffic manager enabled?
* **capacity**: int: Current number of instances assigned to the resource.
* **family**: string: Family code of the resource SKU.
* **locations**: string[]: Locations of the SKU.
* **name**: string: Name of the resource SKU.
* **size**: string: Size specifier of the resource SKU.
* **skuCapacity**: [SkuCapacity](#skucapacity): Min, max, and default scale values of the SKU.
* **tier**: string: Service tier of the resource SKU.

## SlotConfigNames
### Properties
* **appSettingNames**: string[]: List of application settings names.
* **azureStorageConfigNames**: string[]: List of external Azure storage account identifiers.
* **connectionStringNames**: string[]: List of connection string names.

## SlotSwapStatus
### Properties
* **destinationSlotName**: string (ReadOnly): The destination slot of the last swap operation.
* **sourceSlotName**: string (ReadOnly): The source slot of the last swap operation.
* **timestampUtc**: string (ReadOnly): The time the last successful slot swap completed.

## SlowRequestsBasedTrigger
### Properties
* **count**: int: Request Count.
* **path**: string: Request Path.
* **timeInterval**: string: Time interval.
* **timeTaken**: string: Time taken.

## SourceControlProperties
### Properties
* **expirationTime**: string: OAuth token expiration.
* **refreshToken**: string: OAuth refresh token.
* **token**: string: OAuth access token.
* **tokenSecret**: string: OAuth access token secret.

## StaticSite
### Properties
* **allowConfigFileUpdates**: bool: <code>false</code> if config file is locked for this static web app; otherwise, <code>true</code>.
* **branch**: string: The target branch in the repository.
* **buildProperties**: [StaticSiteBuildProperties](#staticsitebuildproperties): Build properties to configure on the repository.
* **contentDistributionEndpoint**: string (ReadOnly): The content distribution endpoint for the static site.
* **customDomains**: string[] (ReadOnly): The custom domains associated with this static site.
* **databaseConnections**: [DatabaseConnectionOverview](#databaseconnectionoverview)[] (ReadOnly): Database connections for the static site
* **defaultHostname**: string (ReadOnly): The default autogenerated hostname for the static site.
* **enterpriseGradeCdnStatus**: 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string: State indicating the status of the enterprise grade CDN serving traffic to the static web app.
* **keyVaultReferenceIdentity**: string (ReadOnly): Identity to use for Key Vault Reference authentication.
* **linkedBackends**: [StaticSiteLinkedBackend](#staticsitelinkedbackend)[] (ReadOnly): Backends linked to the static side
* **privateEndpointConnections**: [ResponseMessageEnvelopeRemotePrivateEndpointConnection](#responsemessageenveloperemoteprivateendpointconnection)[] (ReadOnly): Private endpoint connections
* **provider**: string: The provider that submitted the last deployment to the primary environment of the static site.
* **publicNetworkAccess**: string: State indicating whether public traffic are allowed or not for a static web app. Allowed Values: 'Enabled', 'Disabled' or an empty string.
* **repositoryToken**: string: A user's github repository token. This is used to setup the Github Actions workflow file and API secrets.
* **repositoryUrl**: string: URL for the repository of the static site.
* **stagingEnvironmentPolicy**: 'Disabled' | 'Enabled': State indicating whether staging environments are allowed or not allowed for a static web app.
* **templateProperties**: [StaticSiteTemplateOptions](#staticsitetemplateoptions): Template options for generating a new repository.
* **userProvidedFunctionApps**: [StaticSiteUserProvidedFunctionApp](#staticsiteuserprovidedfunctionapp)[] (ReadOnly): User provided function apps registered with the static site

## StaticSiteBasicAuthPropertiesARMResourceProperties
### Properties
* **applicableEnvironmentsMode**: string (Required): State indicating if basic auth is enabled and for what environments it is active.
* **environments**: string[]: The list of enabled environments for Basic Auth if ApplicableEnvironmentsMode is set to SpecifiedEnvironments.
* **password**: string {sensitive}: The password for basic auth.
* **secretState**: string (ReadOnly): State indicating if basic auth has a secret and what type it is.
* **secretUrl**: string: Url to the secret in Key Vault.

## StaticSiteBuildARMResourceProperties
### Properties
* **buildId**: string (ReadOnly): An identifier for the static site build.
* **createdTimeUtc**: string (ReadOnly): When this build was created.
* **databaseConnections**: [DatabaseConnectionOverview](#databaseconnectionoverview)[] (ReadOnly): Database connections for the static site build
* **hostname**: string (ReadOnly): The hostname for a static site build.
* **lastUpdatedOn**: string (ReadOnly): When this build was updated.
* **linkedBackends**: [StaticSiteLinkedBackend](#staticsitelinkedbackend)[] (ReadOnly): Backends linked to the static side build
* **pullRequestTitle**: string (ReadOnly): The title of a pull request that a static site build is related to.
* **sourceBranch**: string (ReadOnly): The source branch.
* **status**: 'Deleting' | 'Deploying' | 'Detached' | 'Failed' | 'Ready' | 'Uploading' | 'WaitingForDeployment' | string (ReadOnly): The status of the static site build.
* **userProvidedFunctionApps**: [StaticSiteUserProvidedFunctionApp](#staticsiteuserprovidedfunctionapp)[] (ReadOnly): User provided function apps registered with the static site build

## StaticSiteBuildProperties
### Properties
* **apiBuildCommand**: string: A custom command to run during deployment of the Azure Functions API application.
* **apiLocation**: string: The path to the api code within the repository.
* **appArtifactLocation**: string: Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation)
* **appBuildCommand**: string: A custom command to run during deployment of the static content application.
* **appLocation**: string: The path to the app code within the repository.
* **githubActionSecretNameOverride**: string: Github Action secret name override.
* **outputLocation**: string: The output path of the app after building.
* **skipGithubActionWorkflowGeneration**: bool: Skip Github Action workflow generation.

## StaticSiteCustomDomainRequestPropertiesARMResourcePropertiesOrStaticSiteCustomDomainOverviewARMResourceProperties
### Properties
* **createdOn**: string (ReadOnly): The date and time on which the custom domain was created for the static site.
* **domainName**: string (ReadOnly): The domain name for the static site custom domain.
* **errorMessage**: string (ReadOnly)
* **status**: 'Adding' | 'Deleting' | 'Failed' | 'Ready' | 'RetrievingValidationToken' | 'Unhealthy' | 'Validating' | string (ReadOnly): The status of the custom domain
* **validationMethod**: string (WriteOnly): Validation method for adding a custom domain
* **validationToken**: string (ReadOnly): The TXT record validation token

## StaticSiteDatabaseConnectionConfigurationFileOverview
### Properties
* **contents**: string (ReadOnly): The Base64 encoding of the file contents.
* **fileName**: string (ReadOnly): The name of the configuration file.
* **type**: string (ReadOnly): The type of configuration file.

## StaticSiteLinkedBackend
### Properties
* **backendResourceId**: string: The resource id of the backend linked to the static site
* **createdOn**: string (ReadOnly): The date and time on which the backend was linked to the static site.
* **provisioningState**: string (ReadOnly): The provisioning state of the linking process.
* **region**: string: The region of the backend linked to the static site

## StaticSiteLinkedBackendARMResourceProperties
### Properties
* **backendResourceId**: string: The resource id of the backend linked to the static site
* **createdOn**: string (ReadOnly): The date and time on which the backend was linked to the static site.
* **provisioningState**: string (ReadOnly): The provisioning state of the linking process.
* **region**: string: The region of the backend linked to the static site

## StaticSiteTemplateOptions
### Properties
* **description**: string: Description of the newly generated repository.
* **isPrivate**: bool: Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public).
* **owner**: string: Owner of the newly generated repository.
* **repositoryName**: string: Name of the newly generated repository.
* **templateRepositoryUrl**: string: URL of the template repository. The newly generated repository will be based on this one.

## StaticSiteUserARMResource
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StaticSiteUserARMResourceProperties](#staticsiteuserarmresourceproperties): StaticSiteUserARMResource resource specific properties
* **type**: string (ReadOnly): Resource type.

## StaticSiteUserARMResourceProperties
### Properties
* **displayName**: string (ReadOnly): The display name for the static site user.
* **provider**: string (ReadOnly): The identity provider for the static site user.
* **roles**: string: The roles for the static site user, in free-form string format
* **userId**: string (ReadOnly): The user id for the static site user.

## StaticSiteUserCollection
### Properties
* **nextLink**: string (ReadOnly): Link to next page of resources.
* **value**: [StaticSiteUserARMResource](#staticsiteuserarmresource)[] (Required): Collection of resources.

## StaticSiteUserProvidedFunctionApp
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StaticSiteUserProvidedFunctionAppProperties](#staticsiteuserprovidedfunctionappproperties): StaticSiteUserProvidedFunctionApp resource specific properties
* **type**: string (ReadOnly): Resource type.

## StaticSiteUserProvidedFunctionAppARMResourceProperties
### Properties
* **createdOn**: string (ReadOnly): The date and time on which the function app was registered with the static site.
* **functionAppRegion**: string: The region of the function app registered with the static site
* **functionAppResourceId**: string: The resource id of the function app registered with the static site

## StaticSiteUserProvidedFunctionAppProperties
### Properties
* **createdOn**: string (ReadOnly): The date and time on which the function app was registered with the static site.
* **functionAppRegion**: string: The region of the function app registered with the static site
* **functionAppResourceId**: string: The resource id of the function app registered with the static site

## Status
### Properties
* **message**: string: Descriptive message.
* **statusId**: 'Critical' | 'Info' | 'None' | 'Success' | 'Warning': Level of the most severe insight generated by the detector.

## StatusCodesBasedTrigger
### Properties
* **count**: int: Request Count.
* **path**: string: Request Path
* **status**: int: HTTP status code.
* **subStatus**: int: Request Sub Status.
* **timeInterval**: string: Time interval.
* **win32Status**: int: Win32 error code.

## StatusCodesRangeBasedTrigger
### Properties
* **count**: int: Request Count.
* **path**: string
* **statusCodes**: string: HTTP status code.
* **timeInterval**: string: Time interval.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringList
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: string[]: List of string resources.
* **type**: string (ReadOnly): Resource type.

## SupportTopic
### Properties
* **id**: string (ReadOnly): Support Topic Id
* **pesId**: string (ReadOnly): Unique resource Id

## SwiftVirtualNetworkProperties
### Properties
* **subnetResourceId**: string: The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
* **swiftSupported**: bool: A flag that specifies if the scale unit this Web App is on supports Swift integration.

## Template
### Properties
* **containers**: [Container](#container)[]: List of container definitions for the Container App.
* **dapr**: [Dapr](#dapr): Dapr configuration for the Container App.
* **revisionSuffix**: string: User friendly suffix that is appended to the revision name
* **scale**: [Scale](#scale): Scaling properties for the Container App.

## TokenStore
### Properties
* **azureBlobStorage**: [BlobStorageTokenStore](#blobstoragetokenstore): The configuration settings of the storage of the tokens if blob storage is used.
* **enabled**: bool: <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
 The default is <code>false</code>.
* **fileSystem**: [FileSystemTokenStore](#filesystemtokenstore): The configuration settings of the storage of the tokens if a file system is used.
* **tokenRefreshExtensionHours**: int: The number of hours after session token expiration that a session token can be used to
call the token refresh API. The default is 72 hours.

## TrafficWeight
### Properties
* **latestRevision**: bool: Indicates that the traffic weight belongs to a latest stable revision
* **revisionName**: string: Name of a revision
* **weight**: int: Traffic weight assigned to a revision

## TriggeredJobHistoryProperties
### Properties
* **runs**: [TriggeredJobRun](#triggeredjobrun)[]: List of triggered web job runs.

## TriggeredJobRun
### Properties
* **duration**: string: Job duration.
* **end_time**: string: End time.
* **error_url**: string: Error URL.
* **job_name**: string: Job name.
* **output_url**: string: Output URL.
* **start_time**: string: Start time.
* **status**: 'Error' | 'Failed' | 'Success': Job status.
* **trigger**: string: Job trigger.
* **url**: string: Job URL.
* **web_job_id**: string: Job ID.
* **web_job_name**: string: Job name.

## TriggeredWebJobProperties
### Properties
* **error**: string: Error information.
* **extra_info_url**: string: Extra Info URL.
* **history_url**: string: History URL.
* **latest_run**: [TriggeredJobRun](#triggeredjobrun): Latest job run information.
* **publicNetworkAccess**: string: Property to allow or block all public traffic. Allowed Values: 'Enabled', 'Disabled' or an empty string.
* **run_command**: string: Run command.
* **scheduler_logs_url**: string: Scheduler Logs URL.
* **settings**: [TriggeredWebJobPropertiesSettings](#triggeredwebjobpropertiessettings): Job settings.
* **storageAccountRequired**: bool: Checks if Customer provided storage account is required
* **url**: string: Job URL.
* **using_sdk**: bool: Using SDK?
* **web_job_type**: 'Continuous' | 'Triggered': Job type.

## TriggeredWebJobPropertiesSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Twitter
### Properties
* **enabled**: bool: <code>false</code> if the Twitter provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **registration**: [TwitterRegistration](#twitterregistration): The configuration settings of the app registration for the Twitter provider.

## TwitterRegistration
### Properties
* **consumerKey**: string: The OAuth 1.0a consumer key of the Twitter application used for sign-in.
This setting is required for enabling Twitter Sign-In.
Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
* **consumerSecretSettingName**: string: The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
application used for sign-in.

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): Client Id of user assigned identity
* **principalId**: string (ReadOnly): Principal Id of user assigned identity

## UserProperties
### Properties
* **publishingPassword**: string: Password used for publishing.
* **publishingPasswordHash**: string: Password hash used for publishing.
* **publishingPasswordHashSalt**: string: Password hash salt used for publishing.
* **publishingUserName**: string (Required): Username used for publishing.
* **scmUri**: string: Url of SCM site.

## VirtualApplication
### Properties
* **physicalPath**: string: Physical path.
* **preloadEnabled**: bool: <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
* **virtualDirectories**: [VirtualDirectory](#virtualdirectory)[]: Virtual directories for virtual application.
* **virtualPath**: string: Virtual path.

## VirtualDirectory
### Properties
* **physicalPath**: string: Physical path.
* **virtualPath**: string: Path to virtual application.

## VirtualIPMapping
### Properties
* **internalHttpPort**: int: Internal HTTP port.
* **internalHttpsPort**: int: Internal HTTPS port.
* **inUse**: bool: Is virtual IP mapping in use.
* **serviceName**: string: name of the service that virtual IP is assigned to
* **virtualIP**: string: Virtual IP address.

## VirtualNetworkProfile
### Properties
* **id**: string (Required): Resource id of the Virtual Network.
* **name**: string (ReadOnly): Name of the Virtual Network (read-only).
* **subnet**: string: Subnet within the Virtual Network.
* **type**: string (ReadOnly): Resource type of the Virtual Network (read-only).

## VnetGatewayProperties
### Properties
* **vnetName**: string: The Virtual Network name.
* **vpnPackageUri**: string (Required, WriteOnly): The URI where the VPN package can be downloaded.

## VnetInfo
### Properties
* **certBlob**: string: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
Point-To-Site VPN connection.
* **certThumbprint**: string (ReadOnly): The client certificate thumbprint.
* **dnsServers**: string: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
* **isSwift**: bool: Flag that is used to denote if this is VNET injection
* **resyncRequired**: bool (ReadOnly): <code>true</code> if a resync is required; otherwise, <code>false</code>.
* **routes**: [VnetRoute](#vnetroute)[] (ReadOnly): The routes that this Virtual Network connection uses.
* **vnetResourceId**: string: The Virtual Network's resource ID.

## VnetRoute
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [VnetRouteProperties](#vnetrouteproperties): VnetRoute resource specific properties
* **type**: string (ReadOnly): Resource type.

## VnetRouteProperties
### Properties
* **endAddress**: string: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC' | string: The type of route this is:
DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
INHERITED - Routes inherited from the real Virtual Network routes
STATIC - Static route set on the app only

These values will be used for syncing an app's routes with those from a Virtual Network.
* **startAddress**: string: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.

## VolumeMount
### Properties
* **containerMountPath**: string (Required): Target path on the container where volume is mounted on
* **data**: string: Config Data to be mounted on the volume
* **readOnly**: bool: Boolean to specify if the mount is read only on the container
* **volumeSubPath**: string (Required): Sub path in the volume where volume is mounted from.

## WebJobProperties
### Properties
* **error**: string: Error information.
* **extra_info_url**: string: Extra Info URL.
* **run_command**: string: Run command.
* **settings**: [WebJobPropertiesSettings](#webjobpropertiessettings): Job settings.
* **url**: string: Job URL.
* **using_sdk**: bool: Using SDK?
* **web_job_type**: 'Continuous' | 'Triggered': Job type.

## WebJobPropertiesSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

## WebSiteInstanceStatusProperties
### Properties
* **consoleUrl**: string: Link to the console to web app instance
* **containers**: [WebSiteInstanceStatusPropertiesContainers](#websiteinstancestatuspropertiescontainers): Dictionary of <ContainerInfo>
* **detectorUrl**: string: Link to the Diagnose and Solve Portal
* **healthCheckUrl**: string: Link to the console to web app instance
* **state**: 'READY' | 'STOPPED' | 'UNKNOWN'
* **statusUrl**: string: Link to the GetStatusApi in Kudu

## WebSiteInstanceStatusPropertiesContainers
### Properties
### Additional Properties
* **Additional Properties Type**: [ContainerInfo](#containerinfo)

## WorkerPool
### Properties
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared': Shared or dedicated app hosting.
* **instanceNames**: string[] (ReadOnly): Names of all instances in the worker pool (read only).
* **workerCount**: int: Number of instances in the worker pool.
* **workerSize**: string: VM size of the worker pool instances.
* **workerSizeId**: int: Worker size ID for referencing this worker pool.

## WorkflowEnvelope
### Properties
* **id**: string (ReadOnly): The resource id.
* **kind**: string: The resource kind.
* **location**: string: The resource location.
* **name**: string (ReadOnly): Gets the resource name.
* **properties**: [WorkflowEnvelopeProperties](#workflowenvelopeproperties): Additional workflow properties.
* **type**: string (ReadOnly): Gets the resource type.

## WorkflowEnvelope
### Properties
* **id**: string (ReadOnly): The resource id.
* **kind**: string: The resource kind.
* **location**: string: The resource location.
* **name**: string (ReadOnly): Gets the resource name.
* **properties**: [WorkflowEnvelopeProperties](#workflowenvelopeproperties): Additional workflow properties.
* **type**: string (ReadOnly): Gets the resource type.

## WorkflowEnvelopeProperties
### Properties
* **files**: [WorkflowFiles](#workflowfiles): Gets or sets the files.
* **flowState**: 'Completed' | 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended' | string: Gets or sets the state of the workflow.
* **health**: [WorkflowHealth](#workflowhealth): Gets or sets workflow health.

## WorkflowFiles
### Properties
### Additional Properties
* **Additional Properties Type**: any

## WorkflowHealth
### Properties
* **error**: [ErrorEntity](#errorentity): Gets or sets the workflow error.
* **state**: 'Healthy' | 'NotSpecified' | 'Unhealthy' | 'Unknown' (Required): Gets or sets the workflow health state.

## WorkflowOutputParameter
### Properties
* **description**: string: The description.
* **error**: any (ReadOnly): Gets the error.
* **metadata**: any: The metadata.
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String' | string: The type.
* **value**: any: The value.

## WorkflowParameter
### Properties
* **description**: string: The description.
* **metadata**: any: The metadata.
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String' | string: The type.
* **value**: any: The value.

## WorkflowResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowRunActionProperties
### Properties
* **code**: string (ReadOnly): Gets the code.
* **correlation**: [RunActionCorrelation](#runactioncorrelation): The correlation properties.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Gets the error.
* **inputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to inputs.
* **outputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to outputs.
* **retryHistory**: [RetryHistory](#retryhistory)[]: Gets the retry histories.
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'Ignored' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' | string (ReadOnly): Gets the status.
* **trackedProperties**: any (ReadOnly): Gets the tracked properties.
* **trackingId**: string (ReadOnly): Gets the tracking id.

## WorkflowRunActionRepetitionProperties
### Properties
* **code**: string: The workflow scope repetition code.
* **correlation**: [RunActionCorrelation](#runactioncorrelation): The correlation properties.
* **endTime**: string: The end time of the workflow scope repetition.
* **error**: any: Anything
* **inputs**: any (ReadOnly): Gets the inputs.
* **inputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to inputs.
* **iterationCount**: int
* **outputs**: any (ReadOnly): Gets the outputs.
* **outputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to outputs.
* **repetitionIndexes**: [RepetitionIndex](#repetitionindex)[]: The repetition indexes.
* **retryHistory**: [RetryHistory](#retryhistory)[]: Gets the retry histories.
* **startTime**: string: The start time of the workflow scope repetition.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'Ignored' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' | string: The status of the workflow scope repetition.
* **trackedProperties**: any (ReadOnly): Gets the tracked properties.
* **trackingId**: string (ReadOnly): Gets the tracking id.

## WorkflowRunProperties
### Properties
* **code**: string (ReadOnly): Gets the code.
* **correlation**: [Correlation](#correlation): The run correlation.
* **correlationId**: string (ReadOnly): Gets the correlation id.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Gets the error.
* **outputs**: [WorkflowRunPropertiesOutputs](#workflowrunpropertiesoutputs) (ReadOnly): Gets the outputs.
* **response**: [WorkflowRunTrigger](#workflowruntrigger) (ReadOnly): Gets the response of the flow run.
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'Ignored' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' | string (ReadOnly): Gets the status.
* **trigger**: [WorkflowRunTrigger](#workflowruntrigger) (ReadOnly): Gets the fired trigger.
* **waitEndTime**: string (ReadOnly): Gets the wait end time.
* **workflow**: [ResourceReference](#resourcereference) (ReadOnly): Gets the reference to workflow version.

## WorkflowRunPropertiesOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowOutputParameter](#workflowoutputparameter)

## WorkflowRunTrigger
### Properties
* **code**: string (ReadOnly): Gets the code.
* **correlation**: [Correlation](#correlation): The run correlation.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Gets the error.
* **inputs**: any (ReadOnly): Gets the inputs.
* **inputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to inputs.
* **name**: string (ReadOnly): Gets the name.
* **outputs**: any (ReadOnly): Gets the outputs.
* **outputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to outputs.
* **scheduledTime**: string (ReadOnly): Gets the scheduled time.
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'Ignored' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' | string (ReadOnly): Gets the status.
* **trackedProperties**: any (ReadOnly): Gets the tracked properties.
* **trackingId**: string (ReadOnly): Gets the tracking id.

## WorkflowSku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard' | string (Required): The name.
* **plan**: [ResourceReference](#resourcereference): The reference to plan.

## WorkflowTriggerCallbackUrl
### Properties
* **basePath**: string (ReadOnly): Gets the workflow trigger callback URL base path.
* **method**: string (ReadOnly): Gets the workflow trigger callback URL HTTP method.
* **queries**: [WorkflowTriggerListCallbackUrlQueries](#workflowtriggerlistcallbackurlqueries): Gets the workflow trigger callback URL query parameters.
* **relativePath**: string (ReadOnly): Gets the workflow trigger callback URL relative path.
* **relativePathParameters**: string[]: Gets the workflow trigger callback URL relative path parameters.
* **value**: string (ReadOnly): Gets the workflow trigger callback URL.

## WorkflowTriggerHistoryProperties
### Properties
* **code**: string (ReadOnly): Gets the code.
* **correlation**: [Correlation](#correlation): The run correlation.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Gets the error.
* **fired**: bool (ReadOnly): The value indicating whether trigger was fired.
* **inputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to input parameters.
* **outputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to output parameters.
* **run**: [ResourceReference](#resourcereference) (ReadOnly): Gets the reference to workflow run.
* **scheduledTime**: string (ReadOnly): The scheduled time.
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'Ignored' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' | string (ReadOnly): Gets the status.
* **trackingId**: string (ReadOnly): Gets the tracking id.

## WorkflowTriggerListCallbackUrlQueries
### Properties
* **api-version**: string: The api version.
* **se**: string: The SAS timestamp.
* **sig**: string: The SAS signature.
* **sp**: string: The SAS permissions.
* **sv**: string: The SAS version.

## WorkflowTriggerProperties
### Properties
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **lastExecutionTime**: string (ReadOnly): Gets the last execution time.
* **nextExecutionTime**: string (ReadOnly): Gets the next execution time.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Completed' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Moving' | 'NotSpecified' | 'Ready' | 'Registered' | 'Registering' | 'Running' | 'Succeeded' | 'Unregistered' | 'Unregistering' | 'Updating' | string (ReadOnly): Gets the provisioning state.
* **recurrence**: [WorkflowTriggerRecurrence](#workflowtriggerrecurrence) (ReadOnly): Gets the workflow trigger recurrence.
* **state**: 'Completed' | 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended' | string (ReadOnly): Gets the state.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'Ignored' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' | string (ReadOnly): Gets the status.
* **workflow**: [ResourceReference](#resourcereference) (ReadOnly): Gets the reference to workflow.

## WorkflowTriggerRecurrence
### Properties
* **endTime**: string: The end time.
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'NotSpecified' | 'Second' | 'Week' | 'Year' | string: The frequency.
* **interval**: int: The interval.
* **schedule**: [RecurrenceSchedule](#recurrenceschedule): The recurrence schedule.
* **startTime**: string: The start time.
* **timeZone**: string: The time zone.

## WorkflowVersionProperties
### Properties
* **accessControl**: [FlowAccessControlConfiguration](#flowaccesscontrolconfiguration): The access control configuration.
* **accessEndpoint**: string (ReadOnly): Gets the access endpoint.
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **definition**: any: The definition.
* **endpointsConfiguration**: [FlowEndpointsConfiguration](#flowendpointsconfiguration): The endpoints configuration.
* **integrationAccount**: [ResourceReference](#resourcereference): The integration account.
* **parameters**: [WorkflowVersionPropertiesParameters](#workflowversionpropertiesparameters): The parameters.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Completed' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'Pending' | 'Ready' | 'Registered' | 'Registering' | 'Renewing' | 'Running' | 'Succeeded' | 'Unregistered' | 'Unregistering' | 'Updating' | 'Waiting' | string (ReadOnly): The provisioning state.
* **sku**: [WorkflowSku](#workflowsku) (ReadOnly): The sku.
* **state**: 'Completed' | 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended' | string: The state.
* **version**: string (ReadOnly): Gets the version.

## WorkflowVersionPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

