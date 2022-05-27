# Microsoft.Web @ 2021-02-01

## Resource Microsoft.Web/certificates@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties): Certificate resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/deletedSites@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeletedSiteProperties](#deletedsiteproperties) (ReadOnly): DeletedSite resource specific properties
* **type**: 'Microsoft.Web/deletedSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServiceEnvironment](#appserviceenvironment): Description of an App Service Environment.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/capacities@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'virtualip' (Required, DeployTimeConstant): The resource name
* **properties**: [AddressResponseProperties](#addressresponseproperties) (ReadOnly): AddressResponse resource specific properties
* **type**: 'Microsoft.Web/hostingEnvironments/capacities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/configurations@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'networking' (Required, DeployTimeConstant): The resource name
* **properties**: [AseV3NetworkingConfigurationProperties](#asev3networkingconfigurationproperties): AseV3NetworkingConfiguration resource specific properties
* **type**: 'Microsoft.Web/hostingEnvironments/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/detectors@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorResponseProperties](#detectorresponseproperties) (ReadOnly): DetectorResponse resource specific properties
* **type**: 'Microsoft.Web/hostingEnvironments/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/multiRolePools@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPool](#workerpool): Worker pool of an App Service Environment.
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/privateEndpointConnections@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest): A request to approve or reject a private endpoint connection
* **type**: 'Microsoft.Web/hostingEnvironments/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/recommendations@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecommendationRuleProperties](#recommendationruleproperties) (ReadOnly): RecommendationRule resource specific properties
* **type**: 'Microsoft.Web/hostingEnvironments/recommendations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/workerPools@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPool](#workerpool): Worker pool of an App Service Environment.
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/kubeEnvironments@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [KubeEnvironmentProperties](#kubeenvironmentproperties): KubeEnvironment resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/kubeEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/locations/deletedSites@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeletedSiteProperties](#deletedsiteproperties) (ReadOnly): DeletedSite resource specific properties
* **type**: 'Microsoft.Web/locations/deletedSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/publishingUsers@2021-02-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties): User resource specific properties
* **type**: 'Microsoft.Web/publishingUsers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServicePlanProperties](#appserviceplanproperties): AppServicePlan resource specific properties
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties) (ReadOnly): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/hybridConnectionPlanLimits@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'limit' (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionLimitsProperties](#hybridconnectionlimitsproperties) (ReadOnly): HybridConnectionLimits resource specific properties
* **type**: 'Microsoft.Web/serverfarms/hybridConnectionPlanLimits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfo](#vnetinfo) (ReadOnly): Virtual Network information contract.
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetRouteProperties](#vnetrouteproperties): VnetRoute resource specific properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Site resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/backups@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupItemProperties](#backupitemproperties) (ReadOnly): BackupItem resource specific properties
* **type**: 'Microsoft.Web/sites/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/basicPublishingCredentialsPolicies@2021-02-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Web/sites/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'ftp' (Required, DeployTimeConstant): The resource name
* **properties**: [CsmPublishingCredentialsPoliciesEntityProperties](#csmpublishingcredentialspoliciesentityproperties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'scm' (Required, DeployTimeConstant): The resource name
* **properties**: [CsmPublishingCredentialsPoliciesEntityProperties](#csmpublishingcredentialspoliciesentityproperties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/config@2021-02-01 (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsProperties](#siteauthsettingsproperties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettingsV2' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsV2Properties](#siteauthsettingsv2properties): SiteAuthSettingsV2 resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant): The resource name
* **properties**: [AzureStoragePropertyDictionaryResourceProperties](#azurestoragepropertydictionaryresourceproperties): Azure storage accounts.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupRequestProperties](#backuprequestproperties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionStringDictionaryProperties](#connectionstringdictionaryproperties): Connection strings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteLogsConfigProperties](#sitelogsconfigproperties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [PushSettingsProperties](#pushsettingsproperties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'slotConfigNames' (Required, DeployTimeConstant): The resource name
* **properties**: [SlotConfigNames](#slotconfignames): Names for connection strings, application settings, and external Azure storage account configuration
identifiers to be marked as sticky to the deployment slot and not moved during a swap operation.
This is valid for all deployment slots in an app.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/config/appsettings@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiKVReferenceProperties](#apikvreferenceproperties) (ReadOnly): ApiKVReference resource specific properties
* **type**: 'Microsoft.Web/sites/config/appsettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/config/connectionstrings@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiKVReferenceProperties](#apikvreferenceproperties) (ReadOnly): ApiKVReference resource specific properties
* **type**: 'Microsoft.Web/sites/config/connectionstrings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/config/snapshots@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig) (ReadOnly): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/config/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/continuouswebjobs@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContinuousWebJobProperties](#continuouswebjobproperties) (ReadOnly): ContinuousWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/continuouswebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/deployments@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): Deployment resource specific properties
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/detectors@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorResponseProperties](#detectorresponseproperties) (ReadOnly): DetectorResponse resource specific properties
* **type**: 'Microsoft.Web/sites/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/diagnostics@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticCategoryProperties](#diagnosticcategoryproperties) (ReadOnly): DiagnosticCategory resource specific properties
* **type**: 'Microsoft.Web/sites/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/diagnostics/analyses@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AnalysisDefinitionProperties](#analysisdefinitionproperties) (ReadOnly): AnalysisDefinition resource specific properties
* **type**: 'Microsoft.Web/sites/diagnostics/analyses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/diagnostics/detectors@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorDefinition](#detectordefinition) (ReadOnly): Class representing detector definition
* **type**: 'Microsoft.Web/sites/diagnostics/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/domainOwnershipIdentifiers@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IdentifierProperties](#identifierproperties): Identifier resource specific properties
* **type**: 'Microsoft.Web/sites/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/extensions@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/functions@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties): FunctionEnvelope resource specific properties
* **type**: 'Microsoft.Web/sites/functions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/functions/keys@2021-02-01 (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Web/sites/functions/keys' (ReadOnly, DeployTimeConstant): The resource type
* **value**: string: Key value

## Resource Microsoft.Web/sites/hostNameBindings@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties): HostNameBinding resource specific properties
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hybridconnection@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties): RelayServiceConnectionEntity resource specific properties
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hybridConnectionNamespaces/relays@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebSiteInstanceStatusProperties](#websiteinstancestatusproperties) (ReadOnly): WebSiteInstanceStatus resource specific properties
* **type**: 'Microsoft.Web/sites/instances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/extensions@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/instances/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/processes@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/instances/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/processes/modules@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/instances/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/migratemysql@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'status' (Required, DeployTimeConstant): The resource name
* **properties**: [MigrateMySqlStatusProperties](#migratemysqlstatusproperties) (ReadOnly): MigrateMySqlStatus resource specific properties
* **type**: 'Microsoft.Web/sites/migratemysql' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/networkConfig@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetwork' (Required, DeployTimeConstant): The resource name
* **properties**: [SwiftVirtualNetworkProperties](#swiftvirtualnetworkproperties): SwiftVirtualNetwork resource specific properties
* **type**: 'Microsoft.Web/sites/networkConfig' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/networkFeatures@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFeaturesProperties](#networkfeaturesproperties) (ReadOnly): NetworkFeatures resource specific properties
* **type**: 'Microsoft.Web/sites/networkFeatures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/premieraddons@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PremierAddOnProperties](#premieraddonproperties): PremierAddOn resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/privateAccess@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetworks' (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateAccessProperties](#privateaccessproperties): PrivateAccess resource specific properties
* **type**: 'Microsoft.Web/sites/privateAccess' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/privateEndpointConnections@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest): A request to approve or reject a private endpoint connection
* **type**: 'Microsoft.Web/sites/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/processes@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/processes/modules@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/publicCertificates@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicCertificateProperties](#publiccertificateproperties): PublicCertificate resource specific properties
* **type**: 'Microsoft.Web/sites/publicCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/recommendations@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecommendationRuleProperties](#recommendationruleproperties) (ReadOnly): RecommendationRule resource specific properties
* **type**: 'Microsoft.Web/sites/recommendations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/resourceHealthMetadata@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceHealthMetadataProperties](#resourcehealthmetadataproperties) (ReadOnly): ResourceHealthMetadata resource specific properties
* **type**: 'Microsoft.Web/sites/resourceHealthMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/siteextensions@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly): SiteExtensionInfo resource specific properties
* **type**: 'Microsoft.Web/sites/siteextensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended Location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Site resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/backups@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BackupItemProperties](#backupitemproperties) (ReadOnly): BackupItem resource specific properties
* **type**: 'Microsoft.Web/sites/slots/backups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2021-02-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'ftp' (Required, DeployTimeConstant): The resource name
* **properties**: [CsmPublishingCredentialsPoliciesEntityProperties](#csmpublishingcredentialspoliciesentityproperties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'scm' (Required, DeployTimeConstant): The resource name
* **properties**: [CsmPublishingCredentialsPoliciesEntityProperties](#csmpublishingcredentialspoliciesentityproperties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/slots/config@2021-02-01 (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsProperties](#siteauthsettingsproperties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettingsV2' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsV2Properties](#siteauthsettingsv2properties): SiteAuthSettingsV2 resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant): The resource name
* **properties**: [AzureStoragePropertyDictionaryResourceProperties](#azurestoragepropertydictionaryresourceproperties): Azure storage accounts.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupRequestProperties](#backuprequestproperties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionStringDictionaryProperties](#connectionstringdictionaryproperties): Connection strings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteLogsConfigProperties](#sitelogsconfigproperties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [PushSettingsProperties](#pushsettingsproperties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/slots/config/appsettings@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiKVReferenceProperties](#apikvreferenceproperties) (ReadOnly): ApiKVReference resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config/appsettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/config/connectionstrings@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApiKVReferenceProperties](#apikvreferenceproperties) (ReadOnly): ApiKVReference resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config/connectionstrings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/config/snapshots@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig) (ReadOnly): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/slots/config/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/continuouswebjobs@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContinuousWebJobProperties](#continuouswebjobproperties) (ReadOnly): ContinuousWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/slots/continuouswebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/deployments@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): Deployment resource specific properties
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/detectors@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorResponseProperties](#detectorresponseproperties) (ReadOnly): DetectorResponse resource specific properties
* **type**: 'Microsoft.Web/sites/slots/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/diagnostics@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticCategoryProperties](#diagnosticcategoryproperties) (ReadOnly): DiagnosticCategory resource specific properties
* **type**: 'Microsoft.Web/sites/slots/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/diagnostics/analyses@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AnalysisDefinitionProperties](#analysisdefinitionproperties) (ReadOnly): AnalysisDefinition resource specific properties
* **type**: 'Microsoft.Web/sites/slots/diagnostics/analyses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/diagnostics/detectors@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorDefinition](#detectordefinition) (ReadOnly): Class representing detector definition
* **type**: 'Microsoft.Web/sites/slots/diagnostics/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IdentifierProperties](#identifierproperties): Identifier resource specific properties
* **type**: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/extensions@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/slots/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/functions@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties): FunctionEnvelope resource specific properties
* **type**: 'Microsoft.Web/sites/slots/functions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/functions/keys@2021-02-01 (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Web/sites/slots/functions/keys' (ReadOnly, DeployTimeConstant): The resource type
* **value**: string: Key value

## Resource Microsoft.Web/sites/slots/hostNameBindings@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties): HostNameBinding resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hybridconnection@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties): RelayServiceConnectionEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebSiteInstanceStatusProperties](#websiteinstancestatusproperties) (ReadOnly): WebSiteInstanceStatus resource specific properties
* **type**: 'Microsoft.Web/sites/slots/instances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/extensions@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/slots/instances/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/processes@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/instances/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/processes/modules@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/instances/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/migratemysql@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'status' (Required, DeployTimeConstant): The resource name
* **properties**: [MigrateMySqlStatusProperties](#migratemysqlstatusproperties) (ReadOnly): MigrateMySqlStatus resource specific properties
* **type**: 'Microsoft.Web/sites/slots/migratemysql' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/networkConfig@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetwork' (Required, DeployTimeConstant): The resource name
* **properties**: [SwiftVirtualNetworkProperties](#swiftvirtualnetworkproperties): SwiftVirtualNetwork resource specific properties
* **type**: 'Microsoft.Web/sites/slots/networkConfig' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/networkFeatures@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFeaturesProperties](#networkfeaturesproperties) (ReadOnly): NetworkFeatures resource specific properties
* **type**: 'Microsoft.Web/sites/slots/networkFeatures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/premieraddons@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PremierAddOnProperties](#premieraddonproperties): PremierAddOn resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/privateAccess@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetworks' (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateAccessProperties](#privateaccessproperties): PrivateAccess resource specific properties
* **type**: 'Microsoft.Web/sites/slots/privateAccess' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/privateEndpointConnections@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest): A request to approve or reject a private endpoint connection
* **type**: 'Microsoft.Web/sites/slots/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/processes@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/processes/modules@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/publicCertificates@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicCertificateProperties](#publiccertificateproperties): PublicCertificate resource specific properties
* **type**: 'Microsoft.Web/sites/slots/publicCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/resourceHealthMetadata@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceHealthMetadataProperties](#resourcehealthmetadataproperties) (ReadOnly): ResourceHealthMetadata resource specific properties
* **type**: 'Microsoft.Web/sites/slots/resourceHealthMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/siteextensions@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly): SiteExtensionInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/siteextensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/sourcecontrols@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties): SiteSourceControl resource specific properties
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/triggeredwebjobs@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredWebJobProperties](#triggeredwebjobproperties) (ReadOnly): TriggeredWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/slots/triggeredwebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/triggeredwebjobs/history@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredJobHistoryProperties](#triggeredjobhistoryproperties) (ReadOnly): TriggeredJobHistory resource specific properties
* **type**: 'Microsoft.Web/sites/slots/triggeredwebjobs/history' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfo](#vnetinfo): Virtual Network information contract.
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/webjobs@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebJobProperties](#webjobproperties) (ReadOnly): WebJob resource specific properties
* **type**: 'Microsoft.Web/sites/slots/webjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/sourcecontrols@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties): SiteSourceControl resource specific properties
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/triggeredwebjobs@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredWebJobProperties](#triggeredwebjobproperties) (ReadOnly): TriggeredWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/triggeredwebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/triggeredwebjobs/history@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredJobHistoryProperties](#triggeredjobhistoryproperties) (ReadOnly): TriggeredJobHistory resource specific properties
* **type**: 'Microsoft.Web/sites/triggeredwebjobs/history' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfo](#vnetinfo): Virtual Network information contract.
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/webjobs@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebJobProperties](#webjobproperties) (ReadOnly): WebJob resource specific properties
* **type**: 'Microsoft.Web/sites/webjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sourcecontrols@2021-02-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlProperties](#sourcecontrolproperties): SourceControl resource specific properties
* **type**: 'Microsoft.Web/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSite](#staticsite): A static site.
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/staticSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/builds@2021-02-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSiteBuildARMResourceProperties](#staticsitebuildarmresourceproperties) (ReadOnly): StaticSiteBuildARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/builds' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/builds/config@2021-02-01 (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Web/staticSites/builds/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/staticSites/builds/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/staticSites/builds/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'functionappsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/staticSites/builds/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSiteUserProvidedFunctionAppARMResourceProperties](#staticsiteuserprovidedfunctionapparmresourceproperties): StaticSiteUserProvidedFunctionAppARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/builds/userProvidedFunctionApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/config@2021-02-01 (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Web/staticSites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/staticSites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/staticSites/config
#### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'functionappsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/staticSites/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/staticSites/customDomains@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSiteCustomDomainRequestPropertiesARMResourceProperties](#staticsitecustomdomainrequestpropertiesarmresourceproperties): StaticSiteCustomDomainRequestPropertiesARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/customDomains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/privateEndpointConnections@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest): A request to approve or reject a private endpoint connection
* **type**: 'Microsoft.Web/staticSites/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/userProvidedFunctionApps@2021-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSiteUserProvidedFunctionAppARMResourceProperties](#staticsiteuserprovidedfunctionapparmresourceproperties): StaticSiteUserProvidedFunctionAppARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/userProvidedFunctionApps' (ReadOnly, DeployTimeConstant): The resource type

## Function list (Microsoft.Web/sites/backups@2021-02-01)
* **Resource**: Microsoft.Web/sites/backups
* **ApiVersion**: 2021-02-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: [BackupItem](#backupitem)

## Function list (Microsoft.Web/sites/config@2021-02-01)
* **Resource**: Microsoft.Web/sites/config
* **ApiVersion**: 2021-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function list (Microsoft.Web/sites/slots/backups@2021-02-01)
* **Resource**: Microsoft.Web/sites/slots/backups
* **ApiVersion**: 2021-02-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: [BackupItem](#backupitem)

## Function list (Microsoft.Web/sites/slots/config@2021-02-01)
* **Resource**: Microsoft.Web/sites/slots/config
* **ApiVersion**: 2021-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listAppSettings (Microsoft.Web/staticSites/builds@2021-02-01)
* **Resource**: Microsoft.Web/staticSites/builds
* **ApiVersion**: 2021-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listAppSettings (Microsoft.Web/staticSites@2021-02-01)
* **Resource**: Microsoft.Web/staticSites
* **ApiVersion**: 2021-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listbackups (Microsoft.Web/sites@2021-02-01)
* **Resource**: Microsoft.Web/sites
* **ApiVersion**: 2021-02-01
* **Output**: [BackupItemCollection](#backupitemcollection)

## Function listbackups (Microsoft.Web/sites/slots@2021-02-01)
* **Resource**: Microsoft.Web/sites/slots
* **ApiVersion**: 2021-02-01
* **Output**: [BackupItemCollection](#backupitemcollection)

## Function listConfiguredRoles (Microsoft.Web/staticSites@2021-02-01)
* **Resource**: Microsoft.Web/staticSites
* **ApiVersion**: 2021-02-01
* **Output**: [StringList](#stringlist)

## Function listFunctionAppSettings (Microsoft.Web/staticSites/builds@2021-02-01)
* **Resource**: Microsoft.Web/staticSites/builds
* **ApiVersion**: 2021-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listFunctionAppSettings (Microsoft.Web/staticSites@2021-02-01)
* **Resource**: Microsoft.Web/staticSites
* **ApiVersion**: 2021-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listKeys (Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays@2021-02-01)
* **Resource**: Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays
* **ApiVersion**: 2021-02-01
* **Output**: [HybridConnectionKey](#hybridconnectionkey)

## Function listkeys (Microsoft.Web/sites/functions@2021-02-01)
* **Resource**: Microsoft.Web/sites/functions
* **ApiVersion**: 2021-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listkeys (Microsoft.Web/sites/host@2021-02-01)
* **Resource**: Microsoft.Web/sites/host
* **ApiVersion**: 2021-02-01
* **Output**: [HostKeys](#hostkeys)

## Function listkeys (Microsoft.Web/sites/slots/functions@2021-02-01)
* **Resource**: Microsoft.Web/sites/slots/functions
* **ApiVersion**: 2021-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listkeys (Microsoft.Web/sites/slots/host@2021-02-01)
* **Resource**: Microsoft.Web/sites/slots/host
* **ApiVersion**: 2021-02-01
* **Output**: [HostKeys](#hostkeys)

## Function listSecrets (Microsoft.Web/staticSites@2021-02-01)
* **Resource**: Microsoft.Web/staticSites
* **ApiVersion**: 2021-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listsecrets (Microsoft.Web/sites/functions@2021-02-01)
* **Resource**: Microsoft.Web/sites/functions
* **ApiVersion**: 2021-02-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsecrets (Microsoft.Web/sites/slots/functions@2021-02-01)
* **Resource**: Microsoft.Web/sites/slots/functions
* **ApiVersion**: 2021-02-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsyncfunctiontriggerstatus (Microsoft.Web/sites@2021-02-01)
* **Resource**: Microsoft.Web/sites
* **ApiVersion**: 2021-02-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsyncfunctiontriggerstatus (Microsoft.Web/sites/slots@2021-02-01)
* **Resource**: Microsoft.Web/sites/slots
* **ApiVersion**: 2021-02-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listUsers (Microsoft.Web/staticSites/authproviders@2021-02-01)
* **Resource**: Microsoft.Web/staticSites/authproviders
* **ApiVersion**: 2021-02-01
* **Output**: [StaticSiteUserCollection](#staticsiteusercollection)

## CertificateProperties
### Properties
* **canonicalName**: string: CNAME of the certificate to be issued via free certificate
* **cerBlob**: any (ReadOnly): Raw bytes of .cer file
* **domainValidationMethod**: string: Method of domain validation for free cert
* **expirationDate**: string (ReadOnly): Certificate expiration date.
* **friendlyName**: string (ReadOnly): Friendly name of the certificate.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile) (ReadOnly): Specification for an App Service Environment to use for this resource.
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

## HostingEnvironmentProfile
### Properties
* **id**: string: Resource ID of the App Service Environment.
* **name**: string (ReadOnly): Name of the App Service Environment.
* **type**: string (ReadOnly): Resource type of the App Service Environment.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## AppServiceEnvironment
### Properties
* **clusterSettings**: [NameValuePair](#namevaluepair)[]: Custom settings for changing the behavior of the App Service Environment.
* **dedicatedHostCount**: int: Dedicated Host Count
* **dnsSuffix**: string: DNS suffix of the App Service Environment.
* **frontEndScaleFactor**: int: Scale factor for front-ends.
* **hasLinuxWorkers**: bool (ReadOnly): Flag that displays whether an ASE has linux workers or not
* **internalLoadBalancingMode**: 'None' | 'Publishing' | 'Web' | 'Web, Publishing' | string: Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
* **ipsslAddressCount**: int: Number of IP SSL addresses reserved for the App Service Environment.
* **maximumNumberOfMachines**: int (ReadOnly): Maximum number of VMs in the App Service Environment.
* **multiRoleCount**: int (ReadOnly): Number of front-end instances.
* **multiSize**: string: Front-end VM size, e.g. "Medium", "Large".
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Provisioning state of the App Service Plan.
* **status**: 'Deleting' | 'Preparing' | 'Ready' | 'Scaling' (ReadOnly): Current status of the App Service Environment.
* **suspended**: bool (ReadOnly): <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
 (most likely because NSG blocked the incoming traffic).
* **userWhitelistedIpRanges**: string[]: User added ip ranges to whitelist on ASE db
* **virtualNetwork**: [VirtualNetworkProfile](#virtualnetworkprofile) (Required): Specification for using a Virtual Network.
* **zoneRedundant**: bool: Whether or not this App Service Environment is zone-redundant.

## NameValuePair
### Properties
* **name**: string: Pair name.
* **value**: string: Pair value.

## VirtualNetworkProfile
### Properties
* **id**: string (Required): Resource id of the Virtual Network.
* **name**: string (ReadOnly): Name of the Virtual Network (read-only).
* **subnet**: string: Subnet within the Virtual Network.
* **type**: string (ReadOnly): Resource type of the Virtual Network (read-only).

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AddressResponseProperties
### Properties
* **internalIpAddress**: string (ReadOnly): Virtual Network internal IP address of the App Service Environment if it is in internal load-balancing mode.
* **outboundIpAddresses**: string[] (ReadOnly): IP addresses appearing on outbound connections.
* **serviceIpAddress**: string (ReadOnly): Main public virtual IP.
* **vipMappings**: [VirtualIPMapping](#virtualipmapping)[] (ReadOnly): Additional virtual IPs.

## VirtualIPMapping
### Properties
* **internalHttpPort**: int (ReadOnly): Internal HTTP port.
* **internalHttpsPort**: int (ReadOnly): Internal HTTPS port.
* **inUse**: bool (ReadOnly): Is virtual IP mapping in use.
* **serviceName**: string (ReadOnly): name of the service that virtual IP is assigned to
* **virtualIP**: string (ReadOnly): Virtual IP address.

## AseV3NetworkingConfigurationProperties
### Properties
* **allowNewPrivateEndpointConnections**: bool: Property to enable and disable new private endpoint connection creation on ASE
* **externalInboundIpAddresses**: string[] (ReadOnly): Array of AseV3NetworkingConfigurationPropertiesExternalInboundIpAddressesItem
* **internalInboundIpAddresses**: string[] (ReadOnly): Array of AseV3NetworkingConfigurationPropertiesInternalInboundIpAddressesItem
* **linuxOutboundIpAddresses**: string[] (ReadOnly): Array of AseV3NetworkingConfigurationPropertiesLinuxOutboundIpAddressesItem
* **windowsOutboundIpAddresses**: string[] (ReadOnly): Array of AseV3NetworkingConfigurationPropertiesWindowsOutboundIpAddressesItem

## DetectorResponseProperties
### Properties
* **dataProvidersMetadata**: [DataProviderMetadata](#dataprovidermetadata)[] (ReadOnly): Additional configuration for different data providers to be used by the UI
* **dataset**: [DiagnosticData](#diagnosticdata)[] (ReadOnly): Data Set
* **metadata**: [DetectorInfo](#detectorinfo) (ReadOnly): Definition of Detector
* **status**: [Status](#status) (ReadOnly): Identify the status of the most severe insight generated by the detector.
* **suggestedUtterances**: [QueryUtterancesResults](#queryutterancesresults) (ReadOnly): Suggested utterances where the detector can be applicable

## DataProviderMetadata
### Properties
* **propertyBag**: [KeyValuePairStringObject](#keyvaluepairstringobject)[] (ReadOnly): Settings for the data provider
* **providerName**: string (ReadOnly)

## KeyValuePairStringObject
### Properties
* **key**: string (ReadOnly)
* **value**: any (ReadOnly): Any object

## DiagnosticData
### Properties
* **renderingProperties**: [Rendering](#rendering) (ReadOnly): Instructions for rendering the data
* **table**: [DataTableResponseObject](#datatableresponseobject) (ReadOnly): Data Table which defines columns and raw row values

## Rendering
### Properties
* **description**: string (ReadOnly): Description of the data that will help it be interpreted
* **title**: string (ReadOnly): Title of data
* **type**: 'AppInsight' | 'AppInsightEnablement' | 'Card' | 'ChangeAnalysisOnboarding' | 'ChangeSets' | 'ChangesView' | 'DataSummary' | 'DependencyGraph' | 'Detector' | 'DownTime' | 'DropDown' | 'DynamicInsight' | 'Email' | 'Form' | 'Guage' | 'Insights' | 'Markdown' | 'NoGraph' | 'PieChart' | 'SearchComponent' | 'Solution' | 'SummaryCard' | 'Table' | 'TimeSeries' | 'TimeSeriesPerInstance' (ReadOnly): Rendering Type

## DataTableResponseObject
### Properties
* **columns**: [DataTableResponseColumn](#datatableresponsecolumn)[] (ReadOnly): List of columns with data types
* **rows**: string[][] (ReadOnly): Raw row values
* **tableName**: string (ReadOnly): Name of the table

## DataTableResponseColumn
### Properties
* **columnName**: string (ReadOnly): Name of the column
* **columnType**: string (ReadOnly): Column Type
* **dataType**: string (ReadOnly): Data type which looks like 'String' or 'Int32'.

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

## SupportTopic
### Properties
* **id**: string (ReadOnly): Support Topic Id
* **pesId**: string (ReadOnly): Unique resource Id

## Status
### Properties
* **message**: string (ReadOnly): Descriptive message.
* **statusId**: 'Critical' | 'Info' | 'None' | 'Success' | 'Warning' (ReadOnly): Level of the most severe insight generated by the detector.

## QueryUtterancesResults
### Properties
* **query**: string (ReadOnly): Search Query.
* **results**: [QueryUtterancesResult](#queryutterancesresult)[] (ReadOnly): Array of utterance results for search query.

## QueryUtterancesResult
### Properties
* **sampleUtterance**: [SampleUtterance](#sampleutterance) (ReadOnly): Sample utterance.
* **score**: int (ReadOnly): Score of a sample utterance.

## SampleUtterance
### Properties
* **links**: string[] (ReadOnly): Links attribute of sample utterance.
* **qid**: string (ReadOnly): Question id of sample utterance (for stackoverflow questions titles).
* **text**: string (ReadOnly): Text attribute of sample utterance.

## WorkerPool
### Properties
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared': Shared/dedicated workers.
* **instanceNames**: string[] (ReadOnly): Names of all instances in the worker pool (read only).
* **workerCount**: int: Number of instances in the worker pool.
* **workerSize**: string: VM size of the worker pool instances.
* **workerSizeId**: int: Worker size ID for referencing this worker pool.

## SkuDescription
### Properties
* **capabilities**: [Capability](#capability)[]: Capabilities of the SKU, e.g., is traffic manager enabled?
* **capacity**: int: Current number of instances assigned to the resource.
* **family**: string: Family code of the resource SKU.
* **locations**: string[]: Locations of the SKU.
* **name**: string: Name of the resource SKU.
* **size**: string: Size specifier of the resource SKU.
* **skuCapacity**: [SkuCapacity](#skucapacity): Description of the App Service plan scale options.
* **tier**: string: Service tier of the resource SKU.

## Capability
### Properties
* **name**: string: Name of the SKU capability.
* **reason**: string: Reason of the SKU capability.
* **value**: string: Value of the SKU capability.

## SkuCapacity
### Properties
* **default**: int: Default number of workers for this App Service plan SKU.
* **elasticMaximum**: int: Maximum number of Elastic workers for this App Service plan SKU.
* **maximum**: int: Maximum number of workers for this App Service plan SKU.
* **minimum**: int: Minimum number of workers for this App Service plan SKU.
* **scaleType**: string: Available scale configurations for an App Service plan.

## PrivateLinkConnectionApprovalRequest
### Properties
* **ipAddresses**: string[] (ReadOnly): Private IPAddresses mapped to the remote private endpoint
* **privateEndpoint**: [ArmIdWrapper](#armidwrapper) (ReadOnly): A wrapper for an ARM resource id
* **privateLinkServiceConnectionState**: [PrivateLinkConnectionState](#privatelinkconnectionstate): The state of a private link connection
* **provisioningState**: string (ReadOnly)

## ArmIdWrapper
### Properties
* **id**: string (ReadOnly)

## PrivateLinkConnectionState
### Properties
* **actionsRequired**: string: ActionsRequired for a private link connection
* **description**: string: Description of a private link connection
* **status**: string: Status of a private link connection

## RecommendationRuleProperties
### Properties
* **actionName**: string (ReadOnly): Name of action that is recommended by this rule in string.
* **bladeName**: string (ReadOnly): Deep link to a blade on the portal. Applicable to dynamic rule only.
* **categoryTags**: string[] (ReadOnly): The list of category tags that this recommendation rule belongs to.
* **channels**: 'All' | 'Api' | 'Email' | 'Notification' | 'Webhook' (ReadOnly): List of channels that this recommendation can apply.
* **description**: string (ReadOnly): Localized detailed description of the rule.
* **displayName**: string (ReadOnly): UI friendly name of the rule.
* **extensionName**: string (ReadOnly): Extension name of the portal if exists. Applicable to dynamic rule only.
* **forwardLink**: string (ReadOnly): Forward link to an external document associated with the rule. Applicable to dynamic rule only.
* **isDynamic**: bool (ReadOnly): True if this is associated with a dynamically added rule
* **level**: 'Critical' | 'Information' | 'NonUrgentSuggestion' | 'Warning' (ReadOnly): Level indicating how critical this recommendation can impact.
* **message**: string (ReadOnly): Localized name of the rule (Good for UI).
* **recommendationId**: string (ReadOnly): Recommendation ID of an associated recommendation object tied to the rule, if exists.
If such an object doesn't exist, it is set to null.
* **recommendationName**: string (ReadOnly): Unique name of the rule.

## ExtendedLocation
### Properties
* **name**: string: Name of extended location.
* **type**: string (ReadOnly): Type of extended location.

## KubeEnvironmentProperties
### Properties
* **aksResourceID**: string
* **appLogsConfiguration**: [AppLogsConfiguration](#applogsconfiguration)
* **arcConfiguration**: [ArcConfiguration](#arcconfiguration)
* **defaultDomain**: string (ReadOnly): Default Domain Name for the cluster
* **deploymentErrors**: string (ReadOnly): Any errors that occurred during deployment or deployment validation
* **internalLoadBalancerEnabled**: bool: Only visible within Vnet/Subnet
* **provisioningState**: 'Canceled' | 'Failed' | 'InfrastructureSetupComplete' | 'InfrastructureSetupInProgress' | 'InitializationInProgress' | 'ScheduledForDelete' | 'Succeeded' | 'UpgradeFailed' | 'UpgradeRequested' | 'Waiting' (ReadOnly): Provisioning state of the Kubernetes Environment.
* **staticIp**: string: Static IP of the KubeEnvironment

## AppLogsConfiguration
### Properties
* **destination**: string
* **logAnalyticsConfiguration**: [LogAnalyticsConfiguration](#loganalyticsconfiguration)

## LogAnalyticsConfiguration
### Properties
* **customerId**: string
* **sharedKey**: string (WriteOnly)

## ArcConfiguration
### Properties
* **artifactsStorageType**: 'LocalNode' | 'NetworkFileSystem'
* **artifactStorageAccessMode**: string
* **artifactStorageClassName**: string
* **artifactStorageMountPath**: string
* **artifactStorageNodeName**: string
* **frontEndServiceConfiguration**: [FrontEndConfiguration](#frontendconfiguration)
* **kubeConfig**: string (WriteOnly)

## FrontEndConfiguration
### Properties
* **kind**: 'LoadBalancer' | 'NodePort'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserProperties
### Properties
* **publishingPassword**: string: Password used for publishing.
* **publishingPasswordHash**: string: Password hash used for publishing.
* **publishingPasswordHashSalt**: string: Password hash salt used for publishing.
* **publishingUserName**: string (Required): Username used for publishing.
* **scmUri**: string: Url of SCM site.

## AppServicePlanProperties
### Properties
* **elasticScaleEnabled**: bool: ServerFarm supports ElasticScale. Apps in this plan will scale as if the ServerFarm was ElasticPremium sku
* **freeOfferExpirationTime**: string: The time when the server farm free offer expires.
* **geoRegion**: string (ReadOnly): Geographical location for the App Service plan.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): Specification for an App Service Environment to use for this resource.
* **hyperV**: bool: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
* **isSpot**: bool: If <code>true</code>, this App Service Plan owns spot instances.
* **isXenon**: bool: Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
* **kubeEnvironmentProfile**: [KubeEnvironmentProfile](#kubeenvironmentprofile): Specification for a Kubernetes Environment to use for this resource.
* **maximumElasticWorkerCount**: int: Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
* **maximumNumberOfWorkers**: int (ReadOnly): Maximum number of instances that can be assigned to this App Service plan.
* **numberOfSites**: int (ReadOnly): Number of apps assigned to this App Service plan.
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

## KubeEnvironmentProfile
### Properties
* **id**: string: Resource ID of the Kubernetes Environment.
* **name**: string (ReadOnly): Name of the Kubernetes Environment.
* **type**: string (ReadOnly): Resource type of the Kubernetes Environment.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## HybridConnectionLimitsProperties
### Properties
* **current**: int (ReadOnly): The current number of Hybrid Connections.
* **maximum**: int (ReadOnly): The maximum number of Hybrid Connections allowed.

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

## VnetGatewayProperties
### Properties
* **vnetName**: string: The Virtual Network name.
* **vpnPackageUri**: string (Required, WriteOnly): The URI where the VPN package can be downloaded.

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

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): Client Id of user assigned identity
* **principalId**: string (ReadOnly): Principal Id of user assigned identity

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
* **cloningInfo**: [CloningInfo](#cloninginfo) (WriteOnly): Information needed for cloning operation.
* **containerSize**: int: Size of the function container.
* **customDomainVerificationId**: string: Unique identifier that verifies the custom domains assigned to the app. Customer will add this id to a txt record for verification.
* **dailyMemoryTimeQuota**: int: Maximum allowed daily memory-time quota (applicable on dynamic apps only).
* **defaultHostName**: string (ReadOnly): Default hostname of the app. Read-only.
* **enabled**: bool: <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
* **enabledHostNames**: string[] (ReadOnly): Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
the app is not served on those hostnames.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): Specification for an App Service Environment to use for this resource.
* **hostNames**: string[] (ReadOnly): Hostnames associated with the app.
* **hostNamesDisabled**: bool: <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
 If <code>true</code>, the app is only accessible via API management process.
* **hostNameSslStates**: [HostNameSslState](#hostnamesslstate)[]: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
* **httpsOnly**: bool: HttpsOnly: configures a web site to accept only https requests. Issues redirect for
http requests
* **hyperV**: bool: Hyper-V sandbox.
* **inProgressOperationId**: string (ReadOnly): Specifies an operation id if this site has a pending operation.
* **isDefaultContainer**: bool (ReadOnly): <code>true</code> if the app is a default container; otherwise, <code>false</code>.
* **isXenon**: bool: Obsolete: Hyper-V sandbox.
* **keyVaultReferenceIdentity**: string: Identity to use for Key Vault Reference authentication.
* **lastModifiedTimeUtc**: string (ReadOnly): Last time the app was modified, in UTC. Read-only.
* **maxNumberOfWorkers**: int (ReadOnly): Maximum number of workers.
This only applies to Functions container.
* **outboundIpAddresses**: string (ReadOnly): List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
* **possibleOutboundIpAddresses**: string (ReadOnly): List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants except dataComponent. Read-only.
* **redundancyMode**: 'ActiveActive' | 'Failover' | 'GeoRedundant' | 'Manual' | 'None': Site redundancy mode
* **repositorySiteName**: string (ReadOnly): Name of the repository site.
* **reserved**: bool: <code>true</code> if reserved; otherwise, <code>false</code>.
* **resourceGroup**: string (ReadOnly): Name of the resource group the app belongs to. Read-only.
* **scmSiteAlsoStopped**: bool: <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
* **serverFarmId**: string: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
* **siteConfig**: [SiteConfig](#siteconfig): Configuration of an App Service app.
* **slotSwapStatus**: [SlotSwapStatus](#slotswapstatus) (ReadOnly): The status of the last successful slot swap operation.
* **state**: string (ReadOnly): Current state of the app.
* **storageAccountRequired**: bool: Checks if Customer provided storage account is required
* **suspendedTill**: string (ReadOnly): App suspended till in case memory-time quota is exceeded.
* **targetSwapSlot**: string (ReadOnly): Specifies which deployment slot this app will swap into. Read-only.
* **trafficManagerHostNames**: string[] (ReadOnly): Azure Traffic Manager hostnames associated with the app. Read-only.
* **usageState**: 'Exceeded' | 'Normal' (ReadOnly): State indicating whether the app has exceeded its quota usage. Read-only.
* **virtualNetworkSubnetId**: string: Azure Resource Manager ID of the Virtual network and subnet to be joined by Regional VNET Integration.
This must be of the form /subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}

## CloningInfo
### Properties
* **appSettingsOverrides**: [CloningInfoAppSettingsOverrides](#cloninginfoappsettingsoverrides): Application setting overrides for cloned app. If specified, these settings override the settings cloned 
from source app. Otherwise, application settings from source app are retained.
* **cloneCustomHostNames**: bool: <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>.
* **cloneSourceControl**: bool: <code>true</code> to clone source control from source app; otherwise, <code>false</code>.
* **configureLoadBalancing**: bool: <code>true</code> to configure load balancing for source and destination app.
* **correlationId**: string: Correlation ID of cloning operation. This ID ties multiple cloning operations
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

## HostNameSslState
### Properties
* **hostType**: 'Repository' | 'Standard': Indicates whether the hostname is a standard or repository hostname.
* **name**: string: Hostname.
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled': SSL type.
* **thumbprint**: string: SSL certificate thumbprint.
* **toUpdate**: bool: Set to <code>true</code> to update existing hostname.
* **virtualIP**: string: Virtual IP address assigned to the hostname if IP based SSL is enabled.

## SiteConfig
### Properties
* **acrUseManagedIdentityCreds**: bool: Flag to use Managed Identity Creds for ACR pull
* **acrUserManagedIdentityID**: string: If using user managed identity, the user managed identity ClientId
* **alwaysOn**: bool: <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
* **apiDefinition**: [ApiDefinitionInfo](#apidefinitioninfo): Information about the formal API definition for the app.
* **apiManagementConfig**: [ApiManagementConfig](#apimanagementconfig): Azure API management (APIM) configuration linked to the app.
* **appCommandLine**: string: App command line to launch.
* **appSettings**: [NameValuePair](#namevaluepair)[]: Application settings.
* **autoHealEnabled**: bool: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
* **autoHealRules**: [AutoHealRules](#autohealrules): Rules that can be defined for auto-heal.
* **autoSwapSlotName**: string: Auto-swap slot name.
* **azureStorageAccounts**: [SiteConfigAzureStorageAccounts](#siteconfigazurestorageaccounts): List of Azure Storage Accounts.
* **connectionStrings**: [ConnStringInfo](#connstringinfo)[]: Connection strings.
* **cors**: [CorsSettings](#corssettings): Cross-Origin Resource Sharing (CORS) settings for the app.
* **defaultDocuments**: string[]: Default documents.
* **detailedErrorLoggingEnabled**: bool: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
* **documentRoot**: string: Document root.
* **experiments**: [Experiments](#experiments): Routing rules in production experiments.
* **ftpsState**: 'AllAllowed' | 'Disabled' | 'FtpsOnly' | string: State of FTP / FTPS service
* **functionAppScaleLimit**: int: Maximum number of workers that a site can scale out to.
This setting only applies to the Consumption and Elastic Premium Plans
* **functionsRuntimeScaleMonitoringEnabled**: bool: Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,
the ScaleController will not monitor event sources directly, but will instead call to the
runtime to get scale status.
* **handlerMappings**: [HandlerMapping](#handlermapping)[]: Handler mappings.
* **healthCheckPath**: string: Health check path
* **http20Enabled**: bool: Http20Enabled: configures a web site to allow clients to connect over http2.0
* **httpLoggingEnabled**: bool: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
* **ipSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]: IP security restrictions for main.
* **javaContainer**: string: Java container.
* **javaContainerVersion**: string: Java container version.
* **javaVersion**: string: Java version.
* **keyVaultReferenceIdentity**: string: Identity to use for Key Vault Reference authentication.
* **limits**: [SiteLimits](#sitelimits): Metric limits set on an app.
* **linuxFxVersion**: string: Linux App Framework and version
* **loadBalancing**: 'LeastRequests' | 'LeastResponseTime' | 'PerSiteRoundRobin' | 'RequestHash' | 'WeightedRoundRobin' | 'WeightedTotalTraffic': Site load balancing.
* **localMySqlEnabled**: bool: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
* **logsDirectorySizeLimit**: int: HTTP logs directory size limit.
* **machineKey**: [SiteMachineKey](#sitemachinekey) (ReadOnly): MachineKey of an app.
* **managedPipelineMode**: 'Classic' | 'Integrated': Managed pipeline mode.
* **managedServiceIdentityId**: int: Managed Service Identity Id
* **minimumElasticInstanceCount**: int: Number of minimum instance count for a site
This setting only applies to the Elastic Plans
* **minTlsVersion**: '1.0' | '1.1' | '1.2' | string: MinTlsVersion: configures the minimum version of TLS required for SSL requests
* **netFrameworkVersion**: string: .NET Framework version.
* **nodeVersion**: string: Version of Node.js.
* **numberOfWorkers**: int: Number of workers.
* **phpVersion**: string: Version of PHP.
* **powerShellVersion**: string: Version of PowerShell.
* **preWarmedInstanceCount**: int: Number of preWarmed instances.
This setting only applies to the Consumption and Elastic Plans
* **publicNetworkAccess**: string: Property to allow or block all public traffic.
* **publishingUsername**: string: Publishing user name.
* **push**: [PushSettings](#pushsettings): Push settings for the App.
* **pythonVersion**: string: Version of Python.
* **remoteDebuggingEnabled**: bool: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
* **remoteDebuggingVersion**: string: Remote debugging version.
* **requestTracingEnabled**: bool: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
* **requestTracingExpirationTime**: string: Request tracing expiration time.
* **scmIpSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]: IP security restrictions for scm.
* **scmIpSecurityRestrictionsUseMain**: bool: IP security restrictions for scm to use main.
* **scmMinTlsVersion**: '1.0' | '1.1' | '1.2' | string: MinTlsVersion: configures the minimum version of TLS required for SSL requests
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

## ApiDefinitionInfo
### Properties
* **url**: string: The URL of the API definition.

## ApiManagementConfig
### Properties
* **id**: string: APIM-Api Identifier.

## AutoHealRules
### Properties
* **actions**: [AutoHealActions](#autohealactions): Actions which to take by the auto-heal module when a rule is triggered.
* **triggers**: [AutoHealTriggers](#autohealtriggers): Triggers for auto-heal.

## AutoHealActions
### Properties
* **actionType**: 'CustomAction' | 'LogEvent' | 'Recycle': Predefined action to be taken.
* **customAction**: [AutoHealCustomAction](#autohealcustomaction): Custom action to be executed
when an auto heal rule is triggered.
* **minProcessExecutionTime**: string: Minimum time the process must execute
before taking the action

## AutoHealCustomAction
### Properties
* **exe**: string: Executable to be run.
* **parameters**: string: Parameters for the executable.

## AutoHealTriggers
### Properties
* **privateBytesInKB**: int: A rule based on private bytes.
* **requests**: [RequestsBasedTrigger](#requestsbasedtrigger): Trigger based on total requests.
* **slowRequests**: [SlowRequestsBasedTrigger](#slowrequestsbasedtrigger): Trigger based on request execution time.
* **slowRequestsWithPath**: [SlowRequestsBasedTrigger](#slowrequestsbasedtrigger)[]: A rule based on multiple Slow Requests Rule with path
* **statusCodes**: [StatusCodesBasedTrigger](#statuscodesbasedtrigger)[]: A rule based on status codes.
* **statusCodesRange**: [StatusCodesRangeBasedTrigger](#statuscodesrangebasedtrigger)[]: A rule based on status codes ranges.

## RequestsBasedTrigger
### Properties
* **count**: int: Request Count.
* **timeInterval**: string: Time interval.

## SlowRequestsBasedTrigger
### Properties
* **count**: int: Request Count.
* **path**: string: Request Path.
* **timeInterval**: string: Time interval.
* **timeTaken**: string: Time taken.

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

## SiteConfigAzureStorageAccounts
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## AzureStorageInfoValue
### Properties
* **accessKey**: string: Access key for the storage account.
* **accountName**: string: Name of the storage account.
* **mountPath**: string: Path to mount the storage within the site's runtime environment.
* **shareName**: string: Name of the file share (container name, for Blob storage).
* **state**: 'InvalidCredentials' | 'InvalidShare' | 'NotValidated' | 'Ok' (ReadOnly): State of the storage account.
* **type**: 'AzureBlob' | 'AzureFiles': Type of storage.

## ConnStringInfo
### Properties
* **connectionString**: string: Connection string value.
* **name**: string: Name of connection string.
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus': Type of database.

## CorsSettings
### Properties
* **allowedOrigins**: string[]: Gets or sets the list of origins that should be allowed to make cross-origin
calls (for example: http://example.com:12345). Use "*" to allow all.
* **supportCredentials**: bool: Gets or sets whether CORS requests with credentials are allowed. See 
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
for more details.

## Experiments
### Properties
* **rampUpRules**: [RampUpRule](#rampuprule)[]: List of ramp-up rules.

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

## HandlerMapping
### Properties
* **arguments**: string: Command-line arguments to be passed to the script processor.
* **extension**: string: Requests with this extension will be handled using the specified FastCGI application.
* **scriptProcessor**: string: The absolute path to the FastCGI application.

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

## SiteLimits
### Properties
* **maxDiskSizeInMb**: int: Maximum allowed disk size usage in MB.
* **maxMemoryInMb**: int: Maximum allowed memory usage in MB.
* **maxPercentageCpu**: int: Maximum allowed CPU usage percentage.

## SiteMachineKey
### Properties
* **decryption**: string: Algorithm used for decryption.
* **decryptionKey**: string: Decryption key.
* **validation**: string: MachineKey validation.
* **validationKey**: string: Validation key.

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

## SlotSwapStatus
### Properties
* **destinationSlotName**: string (ReadOnly): The destination slot of the last swap operation.
* **sourceSlotName**: string (ReadOnly): The source slot of the last swap operation.
* **timestampUtc**: string (ReadOnly): The time the last successful slot swap completed.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## DatabaseBackupSetting
### Properties
* **connectionString**: string: Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one.
* **connectionStringName**: string: Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
This is used during restore with overwrite connection strings options.
* **databaseType**: 'LocalMySql' | 'MySql' | 'PostgreSql' | 'SqlAzure' | string (Required): Database type (e.g. SqlAzure / MySql).
* **name**: string

## CsmPublishingCredentialsPoliciesEntityProperties
### Properties
* **allow**: bool (Required): <code>true</code> to allow access to a publishing method; otherwise, <code>false</code>.

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SiteAuthSettingsProperties
### Properties
* **aadClaimsAuthorization**: string: Gets a JSON string containing the Azure AD Acl settings.
* **additionalLoginParams**: string[]: Login parameters to send to the OpenID Connect authorization endpoint when
a user logs in. Each parameter must be in the form "key=value".
* **allowedAudiences**: string[]: Allowed audience values to consider when validating JWTs issued by 
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

## GlobalValidation
### Properties
* **excludedPaths**: string[]: The paths for which unauthenticated flow would not be redirected to the login page.
* **redirectToProvider**: string: The default authentication provider to use when multiple providers are configured.
This setting is only needed if multiple providers are configured and the unauthenticated client
action is set to "RedirectToLoginPage".
* **requireAuthentication**: bool: <code>true</code> if the authentication flow is required any request is made; otherwise, <code>false</code>.
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage' | 'Return401' | 'Return403': The action to take when an unauthenticated client attempts to access the app.

## HttpSettings
### Properties
* **forwardProxy**: [ForwardProxy](#forwardproxy): The configuration settings of a forward proxy used to make the requests.
* **requireHttps**: bool: <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
* **routes**: [HttpSettingsRoutes](#httpsettingsroutes): The configuration settings of the paths HTTP requests.

## ForwardProxy
### Properties
* **convention**: 'Custom' | 'NoProxy' | 'Standard': The convention used to determine the url of the request made.
* **customHostHeaderName**: string: The name of the header containing the host of the request.
* **customProtoHeaderName**: string: The name of the header containing the scheme of the request.

## HttpSettingsRoutes
### Properties
* **apiPrefix**: string: The prefix that should precede all the authentication/authorization paths.

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

## Apple
### Properties
* **enabled**: bool: <code>false</code> if the Apple provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow, including the scopes that should be requested.
* **registration**: [AppleRegistration](#appleregistration): The configuration settings of the registration for the Apple provider

## LoginScopes
### Properties
* **scopes**: string[]: A list of the scopes that should be requested while authenticating.

## AppleRegistration
### Properties
* **clientId**: string: The Client ID of the app used for login.
* **clientSecretSettingName**: string: The app setting name that contains the client secret.

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
* **defaultAuthorizationPolicy**: [DefaultAuthorizationPolicy](#defaultauthorizationpolicy): The configuration settings of the Azure Active Directory default authorization policy.
* **jwtClaimChecks**: [JwtClaimChecks](#jwtclaimchecks): The configuration settings of the checks that should be made while validating the JWT Claims.

## DefaultAuthorizationPolicy
### Properties
* **allowedApplications**: string[]: The configuration settings of the Azure Active Directory allowed applications.
* **allowedPrincipals**: [AllowedPrincipals](#allowedprincipals): The configuration settings of the Azure Active Directory allowed principals.

## AllowedPrincipals
### Properties
* **groups**: string[]: The list of the allowed groups.
* **identities**: string[]: The list of the allowed identities.

## JwtClaimChecks
### Properties
* **allowedClientApplications**: string[]: The list of the allowed client applications.
* **allowedGroups**: string[]: The list of the allowed groups.

## AzureStaticWebApps
### Properties
* **enabled**: bool: <code>false</code> if the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **registration**: [AzureStaticWebAppsRegistration](#azurestaticwebappsregistration): The configuration settings of the registration for the Azure Static Web Apps provider

## AzureStaticWebAppsRegistration
### Properties
* **clientId**: string: The Client ID of the app used for login.

## IdentityProvidersCustomOpenIdConnectProviders
### Properties
### Additional Properties
* **Additional Properties Type**: [CustomOpenIdConnectProvider](#customopenidconnectprovider)

## CustomOpenIdConnectProvider
### Properties
* **enabled**: bool: <code>false</code> if the custom Open ID provider provider should not be enabled; otherwise, <code>true</code>.
* **login**: [OpenIdConnectLogin](#openidconnectlogin): The configuration settings of the login flow of the custom Open ID Connect provider.
* **registration**: [OpenIdConnectRegistration](#openidconnectregistration): The configuration settings of the app registration for the custom Open ID Connect provider.

## OpenIdConnectLogin
### Properties
* **nameClaimType**: string: The name of the claim that contains the users name.
* **scopes**: string[]: A list of the scopes that should be requested while authenticating.

## OpenIdConnectRegistration
### Properties
* **clientCredential**: [OpenIdConnectClientCredential](#openidconnectclientcredential): The authentication client credentials of the custom Open ID Connect provider.
* **clientId**: string: The client id of the custom Open ID Connect provider.
* **openIdConnectConfiguration**: [OpenIdConnectConfig](#openidconnectconfig): The configuration settings of the endpoints used for the custom Open ID Connect provider.

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

## Facebook
### Properties
* **enabled**: bool: <code>false</code> if the Facebook provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **graphApiVersion**: string: The version of the Facebook api to be used while logging in.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow, including the scopes that should be requested.
* **registration**: [AppRegistration](#appregistration): The configuration settings of the app registration for providers that have app ids and app secrets

## AppRegistration
### Properties
* **appId**: string: The App ID of the app used for login.
* **appSecretSettingName**: string: The app setting name that contains the app secret.

## GitHub
### Properties
* **enabled**: bool: <code>false</code> if the GitHub provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow, including the scopes that should be requested.
* **registration**: [ClientRegistration](#clientregistration): The configuration settings of the app registration for providers that have client ids and client secrets

## ClientRegistration
### Properties
* **clientId**: string: The Client ID of the app used for login.
* **clientSecretSettingName**: string: The app setting name that contains the client secret.

## Google
### Properties
* **enabled**: bool: <code>false</code> if the Google provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow, including the scopes that should be requested.
* **registration**: [ClientRegistration](#clientregistration): The configuration settings of the app registration for providers that have client ids and client secrets
* **validation**: [AllowedAudiencesValidation](#allowedaudiencesvalidation): The configuration settings of the Allowed Audiences validation flow.

## AllowedAudiencesValidation
### Properties
* **allowedAudiences**: string[]: The configuration settings of the allowed list of audiences from which to validate the JWT token.

## LegacyMicrosoftAccount
### Properties
* **enabled**: bool: <code>false</code> if the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise, <code>true</code>.
* **login**: [LoginScopes](#loginscopes): The configuration settings of the login flow, including the scopes that should be requested.
* **registration**: [ClientRegistration](#clientregistration): The configuration settings of the app registration for providers that have client ids and client secrets
* **validation**: [AllowedAudiencesValidation](#allowedaudiencesvalidation): The configuration settings of the Allowed Audiences validation flow.

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

## CookieExpiration
### Properties
* **convention**: 'FixedTime' | 'IdentityProviderDerived': The convention used when determining the session cookie's expiration.
* **timeToExpiration**: string: The time after the request is made when the session cookie should expire.

## Nonce
### Properties
* **nonceExpirationInterval**: string: The time after the request is made when the nonce should expire.
* **validateNonce**: bool: <code>false</code> if the nonce should not be validated while completing the login flow; otherwise, <code>true</code>.

## LoginRoutes
### Properties
* **logoutEndpoint**: string: The endpoint at which a logout request should be made.

## TokenStore
### Properties
* **azureBlobStorage**: [BlobStorageTokenStore](#blobstoragetokenstore): The configuration settings of the storage of the tokens if blob storage is used.
* **enabled**: bool: <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
 The default is <code>false</code>.
* **fileSystem**: [FileSystemTokenStore](#filesystemtokenstore): The configuration settings of the storage of the tokens if a file system is used.
* **tokenRefreshExtensionHours**: int: The number of hours after session token expiration that a session token can be used to
call the token refresh API. The default is 72 hours.

## BlobStorageTokenStore
### Properties
* **sasUrlSettingName**: string: The name of the app setting containing the SAS URL of the blob storage containing the tokens.

## FileSystemTokenStore
### Properties
* **directory**: string: The directory in which the tokens will be stored.

## AuthPlatform
### Properties
* **configFilePath**: string: The path of the config file containing auth settings if they come from a file.
If the path is relative, base will the site's root directory.
* **enabled**: bool: <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
* **runtimeVersion**: string: The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
The setting in this value can control the behavior of certain features in the Authentication / Authorization module.

## AzureStoragePropertyDictionaryResourceProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## BackupRequestProperties
### Properties
* **backupName**: string: Name of the backup.
* **backupSchedule**: [BackupSchedule](#backupschedule): Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy.
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

## ConnectionStringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnStringValueTypePair](#connstringvaluetypepair)

## ConnStringValueTypePair
### Properties
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus' (Required): Type of database.
* **value**: string (Required): Value of pair.

## SiteLogsConfigProperties
### Properties
* **applicationLogs**: [ApplicationLogsConfig](#applicationlogsconfig): Application logs configuration.
* **detailedErrorMessages**: [EnabledConfig](#enabledconfig): Enabled configuration.
* **failedRequestsTracing**: [EnabledConfig](#enabledconfig): Enabled configuration.
* **httpLogs**: [HttpLogsConfig](#httplogsconfig): Http logs configuration.

## ApplicationLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageApplicationLogsConfig](#azureblobstorageapplicationlogsconfig): Application logs azure blob storage configuration.
* **azureTableStorage**: [AzureTableStorageApplicationLogsConfig](#azuretablestorageapplicationlogsconfig): Application logs to Azure table storage configuration.
* **fileSystem**: [FileSystemApplicationLogsConfig](#filesystemapplicationlogsconfig): Application logs to file system configuration.

## AzureBlobStorageApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level.
* **retentionInDays**: int: Retention in days.
Remove blobs older than X days.
0 or lower means no retention.
* **sasUrl**: string: SAS url to a azure blob container with read/write/list/delete permissions.

## AzureTableStorageApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level.
* **sasUrl**: string (Required): SAS URL to an Azure table with add/query/delete permissions.

## FileSystemApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level.

## EnabledConfig
### Properties
* **enabled**: bool: True if configuration is enabled, false if it is disabled and null if configuration is not set.

## HttpLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageHttpLogsConfig](#azureblobstoragehttplogsconfig): Http logs to azure blob storage configuration.
* **fileSystem**: [FileSystemHttpLogsConfig](#filesystemhttplogsconfig): Http logs to file system configuration.

## AzureBlobStorageHttpLogsConfig
### Properties
* **enabled**: bool: True if configuration is enabled, false if it is disabled and null if configuration is not set.
* **retentionInDays**: int: Retention in days.
Remove blobs older than X days.
0 or lower means no retention.
* **sasUrl**: string: SAS url to a azure blob container with read/write/list/delete permissions.

## FileSystemHttpLogsConfig
### Properties
* **enabled**: bool: True if configuration is enabled, false if it is disabled and null if configuration is not set.
* **retentionInDays**: int: Retention in days.
Remove files older than X days.
0 or lower means no retention.
* **retentionInMb**: int: Maximum size in megabytes that http log files can use.
When reached old log files will be removed to make space for new ones.
Value can range between 25 and 100.

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SlotConfigNames
### Properties
* **appSettingNames**: string[]: List of application settings names.
* **azureStorageConfigNames**: string[]: List of external Azure storage account identifiers.
* **connectionStringNames**: string[]: List of connection string names.

## ApiKVReferenceProperties
### Properties
* **activeVersion**: string (ReadOnly)
* **details**: string (ReadOnly)
* **identityType**: [ManagedServiceIdentity](#managedserviceidentity) (ReadOnly): Managed service identity.
* **reference**: string (ReadOnly)
* **secretName**: string (ReadOnly)
* **secretVersion**: string (ReadOnly)
* **source**: 'KeyVault' (ReadOnly)
* **status**: 'AccessToKeyVaultDenied' | 'FetchTimedOut' | 'Initialized' | 'InvalidSyntax' | 'MSINotEnabled' | 'OtherReasons' | 'Resolved' | 'SecretNotFound' | 'SecretVersionNotFound' | 'UnauthorizedClient' | 'VaultNotFound' (ReadOnly)
* **vaultName**: string (ReadOnly)

## ContinuousWebJobProperties
### Properties
* **detailed_status**: string (ReadOnly): Detailed status.
* **error**: string (ReadOnly): Error information.
* **extra_info_url**: string (ReadOnly): Extra Info URL.
* **log_url**: string (ReadOnly): Log URL.
* **run_command**: string (ReadOnly): Run command.
* **settings**: [ContinuousWebJobPropertiesSettings](#continuouswebjobpropertiessettings) (ReadOnly): Job settings.
* **status**: 'Initializing' | 'PendingRestart' | 'Running' | 'Starting' | 'Stopped' (ReadOnly): Job status.
* **url**: string (ReadOnly): Job URL.
* **using_sdk**: bool (ReadOnly): Using SDK?
* **web_job_type**: 'Continuous' | 'Triggered' (ReadOnly): Job type.

## ContinuousWebJobPropertiesSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

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

## DiagnosticCategoryProperties
### Properties
* **description**: string (ReadOnly): Description of the diagnostic category

## AnalysisDefinitionProperties
### Properties
* **description**: string (ReadOnly): Description of the Analysis

## DetectorDefinition
### Properties
* **description**: string (ReadOnly): Description of the detector
* **displayName**: string (ReadOnly): Display name of the detector
* **isEnabled**: bool (ReadOnly): Flag representing whether detector is enabled or not.
* **rank**: int (ReadOnly): Detector Rank

## IdentifierProperties
### Properties
* **id**: string: String representation of the identity.

## MSDeployCore
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

## FunctionEnvelopeProperties
### Properties
* **config**: any: Any object
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

## HostNameBindingProperties
### Properties
* **azureResourceName**: string: Azure resource name.
* **azureResourceType**: 'TrafficManager' | 'Website': Azure resource type.
* **customHostNameDnsRecordType**: 'A' | 'CName': Custom DNS record type.
* **domainId**: string: Fully qualified ARM domain resource URI.
* **hostNameType**: 'Managed' | 'Verified': Hostname type.
* **siteName**: string: App Service app name.
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled': SSL type.
* **thumbprint**: string: SSL certificate thumbprint
* **virtualIP**: string (ReadOnly): Virtual IP address assigned to the hostname if IP based SSL is enabled.

## RelayServiceConnectionEntityProperties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## WebSiteInstanceStatusProperties
### Properties
* **consoleUrl**: string (ReadOnly): Link to the console to web app instance
* **containers**: [WebSiteInstanceStatusPropertiesContainers](#websiteinstancestatuspropertiescontainers) (ReadOnly): Dictionary of <ContainerInfo>
* **detectorUrl**: string (ReadOnly): Link to the Diagnose and Solve Portal
* **healthCheckUrl**: string (ReadOnly): Link to the console to web app instance
* **state**: 'READY' | 'STOPPED' | 'UNKNOWN' (ReadOnly)
* **statusUrl**: string (ReadOnly): Link to the GetStatusApi in Kudu

## WebSiteInstanceStatusPropertiesContainers
### Properties
### Additional Properties
* **Additional Properties Type**: [ContainerInfo](#containerinfo)

## ContainerInfo
### Properties
* **currentCpuStats**: [ContainerCpuStatistics](#containercpustatistics) (ReadOnly)
* **currentTimeStamp**: string (ReadOnly)
* **eth0**: [ContainerNetworkInterfaceStatistics](#containernetworkinterfacestatistics) (ReadOnly)
* **id**: string (ReadOnly)
* **memoryStats**: [ContainerMemoryStatistics](#containermemorystatistics) (ReadOnly)
* **name**: string (ReadOnly)
* **previousCpuStats**: [ContainerCpuStatistics](#containercpustatistics) (ReadOnly)
* **previousTimeStamp**: string (ReadOnly)

## ContainerCpuStatistics
### Properties
* **cpuUsage**: [ContainerCpuUsage](#containercpuusage) (ReadOnly)
* **onlineCpuCount**: int (ReadOnly)
* **systemCpuUsage**: int (ReadOnly)
* **throttlingData**: [ContainerThrottlingData](#containerthrottlingdata) (ReadOnly)

## ContainerCpuUsage
### Properties
* **kernelModeUsage**: int (ReadOnly)
* **perCpuUsage**: int[] (ReadOnly): Array of ArrayItemschema
* **totalUsage**: int (ReadOnly)
* **userModeUsage**: int (ReadOnly)

## ContainerThrottlingData
### Properties
* **periods**: int (ReadOnly)
* **throttledPeriods**: int (ReadOnly)
* **throttledTime**: int (ReadOnly)

## ContainerNetworkInterfaceStatistics
### Properties
* **rxBytes**: int (ReadOnly)
* **rxDropped**: int (ReadOnly)
* **rxErrors**: int (ReadOnly)
* **rxPackets**: int (ReadOnly)
* **txBytes**: int (ReadOnly)
* **txDropped**: int (ReadOnly)
* **txErrors**: int (ReadOnly)
* **txPackets**: int (ReadOnly)

## ContainerMemoryStatistics
### Properties
* **limit**: int (ReadOnly)
* **maxUsage**: int (ReadOnly)
* **usage**: int (ReadOnly)

## ProcessInfoProperties
### Properties
* **children**: string[] (ReadOnly): Child process list.
* **command_line**: string (ReadOnly): Command line.
* **deployment_name**: string (ReadOnly): Deployment name.
* **description**: string (ReadOnly): Description of process.
* **environment_variables**: [ProcessInfoPropertiesEnvironmentVariables](#processinfopropertiesenvironmentvariables) (ReadOnly): List of environment variables.
* **file_name**: string (ReadOnly): File name of this process.
* **handle_count**: int (ReadOnly): Handle count.
* **href**: string (ReadOnly): HRef URI.
* **identifier**: int (ReadOnly): ARM Identifier for deployment.
* **iis_profile_timeout_in_seconds**: int (ReadOnly): IIS Profile timeout (seconds).
* **is_iis_profile_running**: bool (ReadOnly): Is the IIS Profile running?
* **is_profile_running**: bool (ReadOnly): Is profile running?
* **is_scm_site**: bool (ReadOnly): Is this the SCM site?
* **is_webjob**: bool (ReadOnly): Is this a Web Job?
* **minidump**: string (ReadOnly): Minidump URI.
* **module_count**: int (ReadOnly): Module count.
* **modules**: [ProcessModuleInfo](#processmoduleinfo)[] (ReadOnly): List of modules.
* **non_paged_system_memory**: int (ReadOnly): Non-paged system memory.
* **open_file_handles**: string[] (ReadOnly): List of open files.
* **paged_memory**: int (ReadOnly): Paged memory.
* **paged_system_memory**: int (ReadOnly): Paged system memory.
* **parent**: string (ReadOnly): Parent process.
* **peak_paged_memory**: int (ReadOnly): Peak paged memory.
* **peak_virtual_memory**: int (ReadOnly): Peak virtual memory usage.
* **peak_working_set**: int (ReadOnly): Peak working set.
* **private_memory**: int (ReadOnly): Private memory size.
* **privileged_cpu_time**: string (ReadOnly): Privileged CPU time.
* **start_time**: string (ReadOnly): Start time.
* **thread_count**: int (ReadOnly): Thread count.
* **threads**: [ProcessThreadInfo](#processthreadinfo)[] (ReadOnly): Thread list.
* **time_stamp**: string (ReadOnly): Time stamp.
* **total_cpu_time**: string (ReadOnly): Total CPU time.
* **user_cpu_time**: string (ReadOnly): User CPU time.
* **user_name**: string (ReadOnly): User name.
* **virtual_memory**: int (ReadOnly): Virtual memory size.
* **working_set**: int (ReadOnly): Working set.

## ProcessInfoPropertiesEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProcessModuleInfo
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: string (ReadOnly): Resource type.

## ProcessModuleInfoProperties
### Properties
* **base_address**: string (ReadOnly): Base address. Used as module identifier in ARM resource URI.
* **file_description**: string (ReadOnly): File description.
* **file_name**: string (ReadOnly): File name.
* **file_path**: string (ReadOnly): File path.
* **file_version**: string (ReadOnly): File version.
* **href**: string (ReadOnly): HRef URI.
* **is_debug**: bool (ReadOnly): Is debug?
* **language**: string (ReadOnly): Module language (locale).
* **module_memory_size**: int (ReadOnly): Module memory size.
* **product**: string (ReadOnly): Product name.
* **product_version**: string (ReadOnly): Product version.

## ProcessThreadInfo
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [ProcessThreadInfoProperties](#processthreadinfoproperties) (ReadOnly): ProcessThreadInfo resource specific properties
* **type**: string (ReadOnly): Resource type.

## ProcessThreadInfoProperties
### Properties
* **base_priority**: int (ReadOnly): Base priority.
* **current_priority**: int (ReadOnly): Current thread priority.
* **href**: string (ReadOnly): HRef URI.
* **identifier**: int (ReadOnly): Site extension ID.
* **priority_level**: string (ReadOnly): Thread priority level.
* **process**: string (ReadOnly): Process URI.
* **start_address**: string (ReadOnly): Start address.
* **start_time**: string (ReadOnly): Start time.
* **state**: string (ReadOnly): Thread state.
* **total_processor_time**: string (ReadOnly): Total processor time.
* **user_processor_time**: string (ReadOnly): User processor time.
* **wait_reason**: string (ReadOnly): Wait reason.

## MigrateMySqlStatusProperties
### Properties
* **localMySqlEnabled**: bool (ReadOnly): True if the web app has in app MySql enabled
* **migrationOperationStatus**: 'Created' | 'Failed' | 'InProgress' | 'Succeeded' | 'TimedOut' (ReadOnly): The current status of the operation.
* **operationId**: string (ReadOnly): Operation ID for the migration task.

## SwiftVirtualNetworkProperties
### Properties
* **subnetResourceId**: string: The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
* **swiftSupported**: bool: A flag that specifies if the scale unit this Web App is on supports Swift integration.

## NetworkFeaturesProperties
### Properties
* **hybridConnections**: [RelayServiceConnectionEntity](#relayserviceconnectionentity)[] (ReadOnly): The Hybrid Connections summary view.
* **hybridConnectionsV2**: [HybridConnection](#hybridconnection)[] (ReadOnly): The Hybrid Connection V2 (Service Bus) view.
* **virtualNetworkConnection**: [VnetInfo](#vnetinfo) (ReadOnly): Virtual Network information contract.
* **virtualNetworkName**: string (ReadOnly): The Virtual Network name.

## RelayServiceConnectionEntity
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties) (ReadOnly): RelayServiceConnectionEntity resource specific properties
* **type**: string (ReadOnly): Resource type.

## HybridConnection
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties) (ReadOnly): HybridConnection resource specific properties
* **type**: string (ReadOnly): Resource type.

## PremierAddOnProperties
### Properties
* **marketplaceOffer**: string: Premier add on Marketplace offer.
* **marketplacePublisher**: string: Premier add on Marketplace publisher.
* **product**: string: Premier add on Product.
* **sku**: string: Premier add on SKU.
* **vendor**: string: Premier add on Vendor.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateAccessProperties
### Properties
* **enabled**: bool: Whether private access is enabled or not.
* **virtualNetworks**: [PrivateAccessVirtualNetwork](#privateaccessvirtualnetwork)[]: The Virtual Networks (and subnets) allowed to access the site privately.

## PrivateAccessVirtualNetwork
### Properties
* **key**: int: The key (ID) of the Virtual Network.
* **name**: string: The name of the Virtual Network.
* **resourceId**: string: The ARM uri of the Virtual Network
* **subnets**: [PrivateAccessSubnet](#privateaccesssubnet)[]: A List of subnets that access is allowed to on this Virtual Network. An empty array (but not null) is interpreted to mean that all subnets are allowed within this Virtual Network.

## PrivateAccessSubnet
### Properties
* **key**: int: The key (ID) of the subnet.
* **name**: string: The name of the subnet.

## PublicCertificateProperties
### Properties
* **blob**: any: Public Certificate byte array
* **publicCertificateLocation**: 'CurrentUserMy' | 'LocalMachineMy' | 'Unknown': Public Certificate Location
* **thumbprint**: string (ReadOnly): Certificate Thumbprint

## ResourceHealthMetadataProperties
### Properties
* **category**: string (ReadOnly): The category that the resource matches in the RHC Policy File
* **signalAvailability**: bool (ReadOnly): Is there a health signal for the resource

## SiteExtensionInfoProperties
### Properties
* **authors**: string[] (ReadOnly): List of authors.
* **comment**: string (ReadOnly): Site Extension comment.
* **description**: string (ReadOnly): Detailed description.
* **download_count**: int (ReadOnly): Count of downloads.
* **extension_id**: string (ReadOnly): Site extension ID.
* **extension_type**: 'Gallery' | 'WebRoot' (ReadOnly): Site extension type.
* **extension_url**: string (ReadOnly): Extension URL.
* **feed_url**: string (ReadOnly): Feed URL.
* **icon_url**: string (ReadOnly): Icon URL.
* **installed_date_time**: string (ReadOnly): Installed timestamp.
* **installer_command_line_params**: string (ReadOnly): Installer command line parameters.
* **license_url**: string (ReadOnly): License URL.
* **local_is_latest_version**: bool (ReadOnly): <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
* **local_path**: string (ReadOnly): Local path.
* **project_url**: string (ReadOnly): Project URL.
* **provisioningState**: string (ReadOnly): Provisioning state.
* **published_date_time**: string (ReadOnly): Published timestamp.
* **summary**: string (ReadOnly): Summary description.
* **title**: string (ReadOnly)
* **version**: string (ReadOnly): Version information.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AzureStoragePropertyDictionaryResourceProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## ConnectionStringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnStringValueTypePair](#connstringvaluetypepair)

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SiteSourceControlProperties
### Properties
* **branch**: string: Name of branch to use for deployment.
* **deploymentRollbackEnabled**: bool: <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
* **gitHubActionConfiguration**: [GitHubActionConfiguration](#githubactionconfiguration): The GitHub action configuration.
* **isGitHubAction**: bool: <code>true</code> if this is deployed via GitHub action.
* **isManualIntegration**: bool: <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
* **isMercurial**: bool: <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
* **repoUrl**: string: Repository or source control URL.

## GitHubActionConfiguration
### Properties
* **codeConfiguration**: [GitHubActionCodeConfiguration](#githubactioncodeconfiguration): The GitHub action code configuration.
* **containerConfiguration**: [GitHubActionContainerConfiguration](#githubactioncontainerconfiguration): The GitHub action container configuration.
* **generateWorkflowFile**: bool: Workflow option to determine whether the workflow file should be generated and written to the repository.
* **isLinux**: bool: This will help determine the workflow configuration to select.

## GitHubActionCodeConfiguration
### Properties
* **runtimeStack**: string: Runtime stack is used to determine the workflow file content for code base apps.
* **runtimeVersion**: string: Runtime version is used to determine what build version to set in the workflow file.

## GitHubActionContainerConfiguration
### Properties
* **imageName**: string: The image name for the build.
* **password**: string: The password used to upload the image to the container registry.
* **serverUrl**: string: The server URL for the container registry where the build will be hosted.
* **username**: string: The username used to upload the image to the container registry.

## TriggeredWebJobProperties
### Properties
* **error**: string (ReadOnly): Error information.
* **extra_info_url**: string (ReadOnly): Extra Info URL.
* **history_url**: string (ReadOnly): History URL.
* **latest_run**: [TriggeredJobRun](#triggeredjobrun) (ReadOnly): Triggered Web Job Run Information.
* **run_command**: string (ReadOnly): Run command.
* **scheduler_logs_url**: string (ReadOnly): Scheduler Logs URL.
* **settings**: [TriggeredWebJobPropertiesSettings](#triggeredwebjobpropertiessettings) (ReadOnly): Job settings.
* **url**: string (ReadOnly): Job URL.
* **using_sdk**: bool (ReadOnly): Using SDK?
* **web_job_type**: 'Continuous' | 'Triggered' (ReadOnly): Job type.

## TriggeredJobRun
### Properties
* **duration**: string (ReadOnly): Job duration.
* **end_time**: string (ReadOnly): End time.
* **error_url**: string (ReadOnly): Error URL.
* **job_name**: string (ReadOnly): Job name.
* **output_url**: string (ReadOnly): Output URL.
* **start_time**: string (ReadOnly): Start time.
* **status**: 'Error' | 'Failed' | 'Success' (ReadOnly): Job status.
* **trigger**: string (ReadOnly): Job trigger.
* **url**: string (ReadOnly): Job URL.
* **web_job_id**: string (ReadOnly): Job ID.
* **web_job_name**: string (ReadOnly): Job name.

## TriggeredWebJobPropertiesSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

## TriggeredJobHistoryProperties
### Properties
* **runs**: [TriggeredJobRun](#triggeredjobrun)[] (ReadOnly): List of triggered web job runs.

## WebJobProperties
### Properties
* **error**: string (ReadOnly): Error information.
* **extra_info_url**: string (ReadOnly): Extra Info URL.
* **run_command**: string (ReadOnly): Run command.
* **settings**: [WebJobPropertiesSettings](#webjobpropertiessettings) (ReadOnly): Job settings.
* **url**: string (ReadOnly): Job URL.
* **using_sdk**: bool (ReadOnly): Using SDK?
* **web_job_type**: 'Continuous' | 'Triggered' (ReadOnly): Job type.

## WebJobPropertiesSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

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
* **buildProperties**: [StaticSiteBuildProperties](#staticsitebuildproperties): Build properties for the static site.
* **contentDistributionEndpoint**: string (ReadOnly): The content distribution endpoint for the static site.
* **customDomains**: string[] (ReadOnly): The custom domains associated with this static site.
* **defaultHostname**: string (ReadOnly): The default autogenerated hostname for the static site.
* **keyVaultReferenceIdentity**: string (ReadOnly): Identity to use for Key Vault Reference authentication.
* **privateEndpointConnections**: [ResponseMessageEnvelopeRemotePrivateEndpointConnection](#responsemessageenveloperemoteprivateendpointconnection)[] (ReadOnly): Private endpoint connections
* **provider**: string (ReadOnly): The provider that submitted the last deployment to the primary environment of the static site.
* **repositoryToken**: string: A user's github repository token. This is used to setup the Github Actions workflow file and API secrets.
* **repositoryUrl**: string: URL for the repository of the static site.
* **stagingEnvironmentPolicy**: 'Disabled' | 'Enabled': State indicating whether staging environments are allowed or not allowed for a static web app.
* **templateProperties**: [StaticSiteTemplateOptions](#staticsitetemplateoptions): Template Options for the static site.
* **userProvidedFunctionApps**: [StaticSiteUserProvidedFunctionApp](#staticsiteuserprovidedfunctionapp)[] (ReadOnly): User provided function apps registered with the static site

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

## ResponseMessageEnvelopeRemotePrivateEndpointConnection
### Properties
* **error**: [ErrorEntity](#errorentity): Body of the error response returned from the API.
* **id**: string: Resource Id. Typically ID is populated only for responses to GET requests. Caller is responsible for passing in this
value for GET requests only.
For example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupId}/providers/Microsoft.Web/sites/{sitename}
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **location**: string: Geographical region resource belongs to e.g. SouthCentralUS, SouthEastAsia.
* **name**: string: Name of resource.
* **plan**: [ArmPlan](#armplan): The plan object in Azure Resource Manager, represents a marketplace plan.
* **properties**: [RemotePrivateEndpointConnection](#remoteprivateendpointconnection): A remote private endpoint connection
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **status**: string: Azure-AsyncOperation Status info.
* **tags**: [ResponseMessageEnvelopeRemotePrivateEndpointConnectionTags](#responsemessageenveloperemoteprivateendpointconnectiontags): Tags associated with resource.
* **type**: string: Type of resource e.g "Microsoft.Web/sites".
* **zones**: string[]: Logical Availability Zones the service is hosted in

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

## ArmPlan
### Properties
* **name**: string: The name.
* **product**: string: The product.
* **promotionCode**: string: The promotion code.
* **publisher**: string: The publisher.
* **version**: string: Version of product.

## RemotePrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [RemotePrivateEndpointConnectionProperties](#remoteprivateendpointconnectionproperties): RemotePrivateEndpointConnection resource specific properties
* **type**: string (ReadOnly): Resource type.

## RemotePrivateEndpointConnectionProperties
### Properties
* **ipAddresses**: string[]: Private IPAddresses mapped to the remote private endpoint
* **privateEndpoint**: [ArmIdWrapper](#armidwrapper): A wrapper for an ARM resource id
* **privateLinkServiceConnectionState**: [PrivateLinkConnectionState](#privatelinkconnectionstate): The state of a private link connection
* **provisioningState**: string (ReadOnly)

## ResponseMessageEnvelopeRemotePrivateEndpointConnectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StaticSiteTemplateOptions
### Properties
* **description**: string: Description of the newly generated repository.
* **isPrivate**: bool: Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public).
* **owner**: string: Owner of the newly generated repository.
* **repositoryName**: string: Name of the newly generated repository.
* **templateRepositoryUrl**: string: URL of the template repository. The newly generated repository will be based on this one.

## StaticSiteUserProvidedFunctionApp
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StaticSiteUserProvidedFunctionAppProperties](#staticsiteuserprovidedfunctionappproperties): StaticSiteUserProvidedFunctionApp resource specific properties
* **type**: string (ReadOnly): Resource type.

## StaticSiteUserProvidedFunctionAppProperties
### Properties
* **createdOn**: string (ReadOnly): The date and time on which the function app was registered with the static site.
* **functionAppRegion**: string: The region of the function app registered with the static site
* **functionAppResourceId**: string: The resource id of the function app registered with the static site

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StaticSiteBuildARMResourceProperties
### Properties
* **buildId**: string (ReadOnly): An identifier for the static site build.
* **createdTimeUtc**: string (ReadOnly): When this build was created.
* **hostname**: string (ReadOnly): The hostname for a static site build.
* **lastUpdatedOn**: string (ReadOnly): When this build was updated.
* **pullRequestTitle**: string (ReadOnly): The title of a pull request that a static site build is related to.
* **sourceBranch**: string (ReadOnly): The source branch.
* **status**: 'Deleting' | 'Deploying' | 'Detached' | 'Failed' | 'Ready' | 'Uploading' | 'WaitingForDeployment' | string (ReadOnly): The status of the static site build.
* **userProvidedFunctionApps**: [StaticSiteUserProvidedFunctionApp](#staticsiteuserprovidedfunctionapp)[] (ReadOnly): User provided function apps registered with the static site build

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StaticSiteUserProvidedFunctionAppARMResourceProperties
### Properties
* **createdOn**: string (ReadOnly): The date and time on which the function app was registered with the static site.
* **functionAppRegion**: string: The region of the function app registered with the static site
* **functionAppResourceId**: string: The resource id of the function app registered with the static site

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StaticSiteCustomDomainRequestPropertiesARMResourceProperties
### Properties
* **createdOn**: string (ReadOnly): The date and time on which the custom domain was created for the static site.
* **domainName**: string (ReadOnly): The domain name for the static site custom domain.
* **errorMessage**: string (ReadOnly)
* **status**: 'Adding' | 'Deleting' | 'Failed' | 'Ready' | 'RetrievingValidationToken' | 'Validating' | string (ReadOnly): The status of the custom domain
* **validationMethod**: string (WriteOnly): Validation method for adding a custom domain
* **validationToken**: string (ReadOnly): The TXT record validation token

## BackupRequest
### Properties
* **id**: string (ReadOnly, WriteOnly): Resource Id.
* **kind**: string (WriteOnly): Kind of resource.
* **name**: string (ReadOnly, WriteOnly): Resource Name.
* **properties**: [BackupRequestProperties](#backuprequestproperties) (WriteOnly): BackupRequest resource specific properties
* **type**: string (ReadOnly, WriteOnly): Resource type.

## BackupItem
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [BackupItemProperties](#backupitemproperties) (ReadOnly): BackupItem resource specific properties
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties) (ReadOnly): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackupRequest
### Properties
* **id**: string (ReadOnly, WriteOnly): Resource Id.
* **kind**: string (WriteOnly): Kind of resource.
* **name**: string (ReadOnly, WriteOnly): Resource Name.
* **properties**: [BackupRequestProperties](#backuprequestproperties) (WriteOnly): BackupRequest resource specific properties
* **type**: string (ReadOnly, WriteOnly): Resource type.

## BackupItem
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [BackupItemProperties](#backupitemproperties) (ReadOnly): BackupItem resource specific properties
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties) (ReadOnly): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties) (ReadOnly): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties) (ReadOnly): Settings.
* **type**: string (ReadOnly): Resource type.

## BackupItemCollection
### Properties
* **nextLink**: string (ReadOnly): Link to next page of resources.
* **value**: [BackupItem](#backupitem)[] (ReadOnly): Collection of resources.

## BackupItemCollection
### Properties
* **nextLink**: string (ReadOnly): Link to next page of resources.
* **value**: [BackupItem](#backupitem)[] (ReadOnly): Collection of resources.

## StringList
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: string[] (ReadOnly): List of string resources.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties) (ReadOnly): Settings.
* **type**: string (ReadOnly): Resource type.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties) (ReadOnly): Settings.
* **type**: string (ReadOnly): Resource type.

## HybridConnectionKey
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [HybridConnectionKeyProperties](#hybridconnectionkeyproperties) (ReadOnly): HybridConnectionKey resource specific properties
* **type**: string (ReadOnly): Resource type.

## HybridConnectionKeyProperties
### Properties
* **sendKeyName**: string (ReadOnly): The name of the send key.
* **sendKeyValue**: string (ReadOnly): The value of the send key.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties) (ReadOnly): Settings.
* **type**: string (ReadOnly): Resource type.

## HostKeys
### Properties
* **functionKeys**: [HostKeysFunctionKeys](#hostkeysfunctionkeys) (ReadOnly): Host level function keys.
* **masterKey**: string (ReadOnly): Secret key.
* **systemKeys**: [HostKeysSystemKeys](#hostkeyssystemkeys) (ReadOnly): System keys.

## HostKeysFunctionKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HostKeysSystemKeys
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties) (ReadOnly): Settings.
* **type**: string (ReadOnly): Resource type.

## HostKeys
### Properties
* **functionKeys**: [HostKeysFunctionKeys](#hostkeysfunctionkeys) (ReadOnly): Host level function keys.
* **masterKey**: string (ReadOnly): Secret key.
* **systemKeys**: [HostKeysSystemKeys](#hostkeyssystemkeys) (ReadOnly): System keys.

## StringDictionary
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties) (ReadOnly): Settings.
* **type**: string (ReadOnly): Resource type.

## FunctionSecrets
### Properties
* **key**: string (ReadOnly): Secret key.
* **trigger_url**: string (ReadOnly): Trigger URL.

## FunctionSecrets
### Properties
* **key**: string (ReadOnly): Secret key.
* **trigger_url**: string (ReadOnly): Trigger URL.

## FunctionSecrets
### Properties
* **key**: string (ReadOnly): Secret key.
* **trigger_url**: string (ReadOnly): Trigger URL.

## FunctionSecrets
### Properties
* **key**: string (ReadOnly): Secret key.
* **trigger_url**: string (ReadOnly): Trigger URL.

## StaticSiteUserCollection
### Properties
* **nextLink**: string (ReadOnly): Link to next page of resources.
* **value**: [StaticSiteUserARMResource](#staticsiteuserarmresource)[] (ReadOnly): Collection of resources.

## StaticSiteUserARMResource
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [StaticSiteUserARMResourceProperties](#staticsiteuserarmresourceproperties) (ReadOnly): StaticSiteUserARMResource resource specific properties
* **type**: string (ReadOnly): Resource type.

## StaticSiteUserARMResourceProperties
### Properties
* **displayName**: string (ReadOnly): The display name for the static site user.
* **provider**: string (ReadOnly): The identity provider for the static site user.
* **roles**: string (ReadOnly): The roles for the static site user, in free-form string format
* **userId**: string (ReadOnly): The user id for the static site user.

