# Microsoft.Web @ 2018-02-01

## Resource Microsoft.Web/certificates@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties): Certificate resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServiceEnvironment](#appserviceenvironment): Core resource properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/multiRolePools@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPool](#workerpool): Core resource properties
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/workerPools@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPool](#workerpool): Core resource properties
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/publishingUsers@2018-02-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties): User resource specific properties
* **type**: 'Microsoft.Web/publishingUsers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServicePlanProperties](#appserviceplanproperties): AppServicePlan resource specific properties
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (WriteOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetRouteProperties](#vnetrouteproperties) (WriteOnly): VnetRoute resource specific properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Site resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/config@2018-02-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsProperties](#siteauthsettingsproperties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant): The resource name
* **properties**: [AzureStoragePropertyDictionaryResourceProperties](#azurestoragepropertydictionaryresourceproperties): Azure storage accounts.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupRequestProperties](#backuprequestproperties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionStringDictionaryProperties](#connectionstringdictionaryproperties): Connection strings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteLogsConfigProperties](#sitelogsconfigproperties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [PushSettingsProperties](#pushsettingsproperties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'slotConfigNames' (Required, DeployTimeConstant): The resource name
* **properties**: [SlotConfigNames](#slotconfignames): Core resource properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Core resource properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/deployments@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): Deployment resource specific properties
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/domainOwnershipIdentifiers@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IdentifierProperties](#identifierproperties): Identifier resource specific properties
* **type**: 'Microsoft.Web/sites/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/extensions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCoreOrMSDeployStatusProperties](#msdeploycoreormsdeploystatusproperties): Core resource properties
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/functions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties): FunctionEnvelope resource specific properties
* **type**: 'Microsoft.Web/sites/functions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/functions/keys@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Web/sites/functions/keys' (ReadOnly, DeployTimeConstant): The resource type
* **value**: string: Key value

## Resource Microsoft.Web/sites/hostNameBindings@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties): HostNameBinding resource specific properties
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hybridconnection@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties): RelayServiceConnectionEntity resource specific properties
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hybridConnectionNamespaces/relays@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/extensions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCoreOrMSDeployStatusProperties](#msdeploycoreormsdeploystatusproperties): Core resource properties
* **type**: 'Microsoft.Web/sites/instances/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/networkConfig@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetwork' (Required, DeployTimeConstant): The resource name
* **properties**: [SwiftVirtualNetworkProperties](#swiftvirtualnetworkproperties): SwiftVirtualNetwork resource specific properties
* **type**: 'Microsoft.Web/sites/networkConfig' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/premieraddons@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PremierAddOnProperties](#premieraddonproperties): PremierAddOn resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/privateAccess@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetworks' (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateAccessProperties](#privateaccessproperties): PrivateAccess resource specific properties
* **type**: 'Microsoft.Web/sites/privateAccess' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/publicCertificates@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicCertificateProperties](#publiccertificateproperties): PublicCertificate resource specific properties
* **type**: 'Microsoft.Web/sites/publicCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/siteextensions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly): SiteExtensionInfo resource specific properties
* **type**: 'Microsoft.Web/sites/siteextensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Site resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/config@2018-02-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsProperties](#siteauthsettingsproperties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant): The resource name
* **properties**: [AzureStoragePropertyDictionaryResourceProperties](#azurestoragepropertydictionaryresourceproperties): Azure storage accounts.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupRequestProperties](#backuprequestproperties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionStringDictionaryProperties](#connectionstringdictionaryproperties): Connection strings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteLogsConfigProperties](#sitelogsconfigproperties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [PushSettingsProperties](#pushsettingsproperties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Core resource properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/slots/deployments@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): Deployment resource specific properties
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IdentifierProperties](#identifierproperties): Identifier resource specific properties
* **type**: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/extensions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCoreOrMSDeployStatusProperties](#msdeploycoreormsdeploystatusproperties): Core resource properties
* **type**: 'Microsoft.Web/sites/slots/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/functions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties): FunctionEnvelope resource specific properties
* **type**: 'Microsoft.Web/sites/slots/functions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/functions/keys@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Web/sites/slots/functions/keys' (ReadOnly, DeployTimeConstant): The resource type
* **value**: string: Key value

## Resource Microsoft.Web/sites/slots/hostNameBindings@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties): HostNameBinding resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hybridconnection@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties): RelayServiceConnectionEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/extensions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCoreOrMSDeployStatusProperties](#msdeploycoreormsdeploystatusproperties): Core resource properties
* **type**: 'Microsoft.Web/sites/slots/instances/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/networkConfig@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetwork' (Required, DeployTimeConstant): The resource name
* **properties**: [SwiftVirtualNetworkProperties](#swiftvirtualnetworkproperties): SwiftVirtualNetwork resource specific properties
* **type**: 'Microsoft.Web/sites/slots/networkConfig' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/premieraddons@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PremierAddOnProperties](#premieraddonproperties): PremierAddOn resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/privateAccess@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetworks' (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateAccessProperties](#privateaccessproperties): PrivateAccess resource specific properties
* **type**: 'Microsoft.Web/sites/slots/privateAccess' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/publicCertificates@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicCertificateProperties](#publiccertificateproperties): PublicCertificate resource specific properties
* **type**: 'Microsoft.Web/sites/slots/publicCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/siteextensions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly): SiteExtensionInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/siteextensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/sourcecontrols@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties): SiteSourceControl resource specific properties
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfoProperties](#vnetinfoproperties): VnetInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/sourcecontrols@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties): SiteSourceControl resource specific properties
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfoProperties](#vnetinfoproperties): VnetInfo resource specific properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sourcecontrols@2018-02-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlProperties](#sourcecontrolproperties): SourceControl resource specific properties
* **type**: 'Microsoft.Web/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Function list (Microsoft.Web/sites/backups@2018-02-01)
* **Resource**: Microsoft.Web/sites/backups
* **ApiVersion**: 2018-02-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: [BackupItem](#backupitem)

## Function list (Microsoft.Web/sites/config@2018-02-01)
* **Resource**: Microsoft.Web/sites/config
* **ApiVersion**: 2018-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function list (Microsoft.Web/sites/slots/backups@2018-02-01)
* **Resource**: Microsoft.Web/sites/slots/backups
* **ApiVersion**: 2018-02-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: [BackupItem](#backupitem)

## Function list (Microsoft.Web/sites/slots/config@2018-02-01)
* **Resource**: Microsoft.Web/sites/slots/config
* **ApiVersion**: 2018-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listKeys (Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays@2018-02-01)
* **Resource**: Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays
* **ApiVersion**: 2018-02-01
* **Output**: [HybridConnectionKey](#hybridconnectionkey)

## Function listkeys (Microsoft.Web/sites/functions@2018-02-01)
* **Resource**: Microsoft.Web/sites/functions
* **ApiVersion**: 2018-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listkeys (Microsoft.Web/sites/host@2018-02-01)
* **Resource**: Microsoft.Web/sites/host
* **ApiVersion**: 2018-02-01
* **Output**: [HostKeys](#hostkeys)

## Function listKeys (Microsoft.Web/sites/hybridConnectionNamespaces/relays@2018-02-01)
* **Resource**: Microsoft.Web/sites/hybridConnectionNamespaces/relays
* **ApiVersion**: 2018-02-01
* **Output**: [HybridConnectionKey](#hybridconnectionkey)

## Function listkeys (Microsoft.Web/sites/slots/functions@2018-02-01)
* **Resource**: Microsoft.Web/sites/slots/functions
* **ApiVersion**: 2018-02-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listkeys (Microsoft.Web/sites/slots/host@2018-02-01)
* **Resource**: Microsoft.Web/sites/slots/host
* **ApiVersion**: 2018-02-01
* **Output**: [HostKeys](#hostkeys)

## Function listKeys (Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2018-02-01)
* **Resource**: Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays
* **ApiVersion**: 2018-02-01
* **Output**: [HybridConnectionKey](#hybridconnectionkey)

## Function listsecrets (Microsoft.Web/sites/functions@2018-02-01)
* **Resource**: Microsoft.Web/sites/functions
* **ApiVersion**: 2018-02-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsecrets (Microsoft.Web/sites/slots/functions@2018-02-01)
* **Resource**: Microsoft.Web/sites/slots/functions
* **ApiVersion**: 2018-02-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsyncfunctiontriggerstatus (Microsoft.Web/sites@2018-02-01)
* **Resource**: Microsoft.Web/sites
* **ApiVersion**: 2018-02-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsyncfunctiontriggerstatus (Microsoft.Web/sites/slots@2018-02-01)
* **Resource**: Microsoft.Web/sites/slots
* **ApiVersion**: 2018-02-01
* **Output**: [FunctionSecrets](#functionsecrets)

## ApiDefinitionInfo
### Properties
* **url**: string: The URL of the API definition.

## ApplicationLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageApplicationLogsConfig](#azureblobstorageapplicationlogsconfig): Application logs to blob storage configuration.
* **azureTableStorage**: [AzureTableStorageApplicationLogsConfig](#azuretablestorageapplicationlogsconfig): Application logs to azure table storage configuration.
* **fileSystem**: [FileSystemApplicationLogsConfig](#filesystemapplicationlogsconfig): Application logs to file system configuration.

## AppServiceEnvironment
### Properties
* **allowedMultiSizes**: string (ReadOnly): List of comma separated strings describing which VM sizes are allowed for front-ends.
* **allowedWorkerSizes**: string (ReadOnly): List of comma separated strings describing which VM sizes are allowed for workers.
* **apiManagementAccountId**: string: API Management Account associated with the App Service Environment.
* **clusterSettings**: [NameValuePair](#namevaluepair)[]: Custom settings for changing the behavior of the App Service Environment.
* **databaseEdition**: string (ReadOnly): Edition of the metadata database for the App Service Environment, e.g. "Standard".
* **databaseServiceObjective**: string (ReadOnly): Service objective of the metadata database for the App Service Environment, e.g. "S0".
* **defaultFrontEndScaleFactor**: int (ReadOnly): Default Scale Factor for FrontEnds.
* **dnsSuffix**: string: DNS suffix of the App Service Environment.
* **dynamicCacheEnabled**: bool: True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
(most likely because NSG blocked the incoming traffic).
* **environmentCapacities**: [StampCapacity](#stampcapacity)[] (ReadOnly): Current total, used, and available worker capacities.
* **environmentIsHealthy**: bool (ReadOnly): True/false indicating whether the App Service Environment is healthy.
* **environmentStatus**: string (ReadOnly): Detailed message about with results of the last check of the App Service Environment.
* **frontEndScaleFactor**: int: Scale factor for front-ends.
* **hasLinuxWorkers**: bool: Flag that displays whether an ASE has linux workers or not
* **internalLoadBalancingMode**: 'None' | 'Publishing' | 'Web': Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
* **ipsslAddressCount**: int: Number of IP SSL addresses reserved for the App Service Environment.
* **lastAction**: string (ReadOnly): Last deployment action on the App Service Environment.
* **lastActionResult**: string (ReadOnly): Result of the last deployment action on the App Service Environment.
* **location**: string (Required): Location of the App Service Environment, e.g. "West US".
* **maximumNumberOfMachines**: int (ReadOnly): Maximum number of VMs in the App Service Environment.
* **multiRoleCount**: int: Number of front-end instances.
* **multiSize**: string: Front-end VM size, e.g. "Medium", "Large".
* **name**: string (Required): Name of the App Service Environment.
* **networkAccessControlList**: [NetworkAccessControlEntry](#networkaccesscontrolentry)[]: Access control list for controlling traffic to the App Service Environment.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Provisioning state of the App Service Environment.
* **resourceGroup**: string (ReadOnly): Resource group of the App Service Environment.
* **sslCertKeyVaultId**: string: Key Vault ID for ILB App Service Environment default SSL certificate
* **sslCertKeyVaultSecretName**: string: Key Vault Secret Name for ILB App Service Environment default SSL certificate
* **status**: 'Deleting' | 'Preparing' | 'Ready' | 'Scaling' (ReadOnly): Current status of the App Service Environment.
* **subscriptionId**: string (ReadOnly): Subscription of the App Service Environment.
* **suspended**: bool: <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
 (most likely because NSG blocked the incoming traffic).
* **upgradeDomains**: int (ReadOnly): Number of upgrade domains of the App Service Environment.
* **userWhitelistedIpRanges**: string[]: User added ip ranges to whitelist on ASE db
* **vipMappings**: [VirtualIPMapping](#virtualipmapping)[] (ReadOnly): Description of IP SSL mapping for the App Service Environment.
* **virtualNetwork**: [VirtualNetworkProfile](#virtualnetworkprofile) (Required): Description of the Virtual Network.
* **vnetName**: string: Name of the Virtual Network for the App Service Environment.
* **vnetResourceGroupName**: string: Resource group of the Virtual Network.
* **vnetSubnetName**: string: Subnet of the Virtual Network.
* **workerPools**: [WorkerPool](#workerpool)[] (Required): Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.

## AppServicePlanProperties
### Properties
* **freeOfferExpirationTime**: string: The time when the server farm free offer expires.
* **geoRegion**: string (ReadOnly): Geographical location for the App Service plan.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): Specification for the App Service Environment to use for the App Service plan.
* **hyperV**: bool: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
* **isSpot**: bool: If <code>true</code>, this App Service Plan owns spot instances.
* **isXenon**: bool: Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
* **maximumElasticWorkerCount**: int: Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
* **maximumNumberOfWorkers**: int (ReadOnly): Maximum number of instances that can be assigned to this App Service plan.
* **numberOfSites**: int (ReadOnly): Number of apps assigned to this App Service plan.
* **perSiteScaling**: bool: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Provisioning state of the App Service Environment.
* **reserved**: bool: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
* **resourceGroup**: string (ReadOnly): Resource group of the App Service plan.
* **spotExpirationTime**: string: The time when the server farm expires. Valid only if it is a spot server farm.
* **status**: 'Creating' | 'Pending' | 'Ready' (ReadOnly): App Service plan status.
* **subscription**: string (ReadOnly): App Service plan subscription.
* **targetWorkerCount**: int: Scaling worker count.
* **targetWorkerSizeId**: int: Scaling worker size ID.
* **workerTierName**: string: Target worker tier assigned to the App Service plan.

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
* **statusCodes**: [StatusCodesBasedTrigger](#statuscodesbasedtrigger)[]: A rule based on status codes.

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

## AzureStorageInfoValue
### Properties
* **accessKey**: string: Access key for the storage account.
* **accountName**: string: Name of the storage account.
* **mountPath**: string: Path to mount the storage within the site's runtime environment.
* **shareName**: string: Name of the file share (container name, for Blob storage).
* **state**: 'InvalidCredentials' | 'InvalidShare' | 'Ok' (ReadOnly): State of the storage account.
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

## Capability
### Properties
* **name**: string: Name of the SKU capability.
* **reason**: string: Reason of the SKU capability.
* **value**: string: Value of the SKU capability.

## CertificateProperties
### Properties
* **cerBlob**: any (ReadOnly): Raw bytes of .cer file
* **expirationDate**: string (ReadOnly): Certificate expiration date.
* **friendlyName**: string (ReadOnly): Friendly name of the certificate.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile) (ReadOnly): Specification for the App Service Environment to use for the certificate.
* **hostNames**: string[]: Host names the certificate applies to.
* **issueDate**: string (ReadOnly): Certificate issue Date.
* **issuer**: string (ReadOnly): Certificate issuer.
* **keyVaultId**: string: Key Vault Csm resource Id.
* **keyVaultSecretName**: string: Key Vault secret name.
* **keyVaultSecretStatus**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly): Status of the Key Vault secret.
* **password**: string (Required, WriteOnly): Certificate password.
* **pfxBlob**: any: Pfx blob.
* **publicKeyHash**: string (ReadOnly): Public key hash.
* **selfLink**: string (ReadOnly): Self link.
* **serverFarmId**: string: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
* **siteName**: string (ReadOnly): App name.
* **subjectName**: string (ReadOnly): Subject name of the certificate.
* **thumbprint**: string (ReadOnly): Certificate thumbprint.
* **valid**: bool (ReadOnly): Is the certificate valid?.

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

## Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): Client Id of user assigned identity
* **principalId**: string (ReadOnly): Principal Id of user assigned identity

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

## CorsSettings
### Properties
* **allowedOrigins**: string[]: Gets or sets the list of origins that should be allowed to make cross-origin
calls (for example: http://example.com:12345). Use "*" to allow all.
* **supportCredentials**: bool: Gets or sets whether CORS requests with credentials are allowed. See 
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
for more details.

## DatabaseBackupSetting
### Properties
* **connectionString**: string: Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one.
* **connectionStringName**: string: Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
This is used during restore with overwrite connection strings options.
* **databaseType**: 'LocalMySql' | 'MySql' | 'PostgreSql' | 'SqlAzure' | string (Required): Database type (e.g. SqlAzure / MySql).
* **name**: string

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

## EnabledConfig
### Properties
* **enabled**: bool: True if configuration is enabled, false if it is disabled and null if configuration is not set.

## Experiments
### Properties
* **rampUpRules**: [RampUpRule](#rampuprule)[]: List of ramp-up rules.

## FileSystemApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level.

## FileSystemHttpLogsConfig
### Properties
* **enabled**: bool: True if configuration is enabled, false if it is disabled and null if configuration is not set.
* **retentionInDays**: int: Retention in days.
Remove files older than X days.
0 or lower means no retention.
* **retentionInMb**: int: Maximum size in megabytes that http log files can use.
When reached old log files will be removed to make space for new ones.
Value can range between 25 and 100.

## FunctionEnvelopeProperties
### Properties
* **config**: any: Config information.
* **config_href**: string: Config URI.
* **files**: [FunctionEnvelopePropertiesFiles](#functionenvelopepropertiesfiles): File list.
* **function_app_id**: string: Function App ID.
* **href**: string: Function URI.
* **invoke_url_template**: string: The invocation URL
* **isDisabled**: bool: Value indicating whether the function is disabled
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

## FunctionSecrets
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [FunctionSecretsProperties](#functionsecretsproperties): FunctionSecrets resource specific properties
* **type**: string (ReadOnly): Resource type.

## FunctionSecrets
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [FunctionSecretsProperties](#functionsecretsproperties): FunctionSecrets resource specific properties
* **type**: string (ReadOnly): Resource type.

## FunctionSecrets
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [FunctionSecretsProperties](#functionsecretsproperties): FunctionSecrets resource specific properties
* **type**: string (ReadOnly): Resource type.

## FunctionSecrets
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [FunctionSecretsProperties](#functionsecretsproperties): FunctionSecrets resource specific properties
* **type**: string (ReadOnly): Resource type.

## FunctionSecretsProperties
### Properties
* **key**: string: Secret key.
* **trigger_url**: string: Trigger URL.

## GeoDistribution
### Properties
* **location**: string: Location.
* **numberOfWorkers**: int: NumberOfWorkers.

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

## HybridConnectionKey
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [HybridConnectionKeyProperties](#hybridconnectionkeyproperties): HybridConnectionKey resource specific properties
* **type**: string (ReadOnly): Resource type.

## HybridConnectionKey
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [HybridConnectionKeyProperties](#hybridconnectionkeyproperties): HybridConnectionKey resource specific properties
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

## IpSecurityRestriction
### Properties
* **action**: string: Allow or Deny access for this IP range.
* **description**: string: IP restriction rule description.
* **ipAddress**: string: IP address the security restriction is valid for.
It can be in form of pure ipv4 address (required SubnetMask property) or
CIDR notation such as ipv4/mask (leading bit match). For CIDR,
SubnetMask property must not be specified.
* **name**: string: IP restriction rule name.
* **priority**: int: Priority of IP restriction rule.
* **subnetMask**: string: Subnet mask for the range of IP addresses the restriction is valid for.
* **subnetTrafficTag**: int: (internal) Subnet traffic tag
* **tag**: 'Default' | 'XffProxy': Defines what this IP filter will be used for. This is to support IP filtering on proxies.
* **vnetSubnetResourceId**: string: Virtual network resource id
* **vnetTrafficTag**: int: (internal) Vnet traffic tag

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): Principal Id of managed service identity.
* **tenantId**: string (ReadOnly): Tenant of managed service identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string: Type of managed service identity.
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties](#components1jq1t4ischemasmanagedserviceidentitypropertiesuserassignedidentitiesadditionalproperties)

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

## NetworkAccessControlEntry
### Properties
* **action**: 'Deny' | 'Permit': Action object.
* **description**: string: Description of network access control entry.
* **order**: int: Order of precedence.
* **remoteSubnet**: string: Remote subnet.

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

## RampUpRule
### Properties
* **actionHostName**: string: Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net.
* **changeDecisionCallbackUrl**: string: Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
https://www.siteextensions.net/packages/TiPCallback/
* **changeIntervalInMinutes**: int: Specifies interval in minutes to reevaluate ReroutePercentage.
* **changeStep**: int: In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches 
<code>MinReroutePercentage</code> or <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.
Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
* **maxReroutePercentage**: int: Specifies upper boundary below which ReroutePercentage will stay.
* **minReroutePercentage**: int: Specifies lower boundary above which ReroutePercentage will stay.
* **name**: string: Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.
* **reroutePercentage**: int: Percentage of the traffic which will be redirected to <code>ActionHostName</code>.

## RelayServiceConnectionEntityProperties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## RequestsBasedTrigger
### Properties
* **count**: int: Request Count.
* **timeInterval**: string: Time interval.

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

## SiteAuthSettingsProperties
### Properties
* **additionalLoginParams**: string[]: Login parameters to send to the OpenID Connect authorization endpoint when
a user logs in. Each parameter must be in the form "key=value".
* **allowedAudiences**: string[]: Allowed audience values to consider when validating JWTs issued by 
Azure Active Directory. Note that the <code>ClientID</code> value is always considered an
allowed audience, regardless of this setting.
* **allowedExternalRedirectUrls**: string[]: External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
This is an advanced setting typically only needed by Windows Store application backends.
Note that URLs within the current domain are always implicitly allowed.
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
* **defaultProvider**: 'AzureActiveDirectory' | 'Facebook' | 'Google' | 'MicrosoftAccount' | 'Twitter': The default authentication provider to use when multiple providers are configured.
This setting is only needed if multiple providers are configured and the unauthenticated client
action is set to "RedirectToLoginPage".
* **enabled**: bool: <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
* **facebookAppId**: string: The App ID of the Facebook app used for login.
This setting is required for enabling Facebook Login.
Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **facebookAppSecret**: string: The App Secret of the Facebook app used for Facebook Login.
This setting is required for enabling Facebook Login.
Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **facebookOAuthScopes**: string[]: The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
This setting is optional.
Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **googleClientId**: string: The OpenID Connect Client ID for the Google web application.
This setting is required for enabling Google Sign-In.
Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **googleClientSecret**: string: The client secret associated with the Google web application.
This setting is required for enabling Google Sign-In.
Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **googleOAuthScopes**: string[]: The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.
Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
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
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage': The action to take when an unauthenticated client attempts to access the app.
* **validateIssuer**: bool: Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such.

## SiteConfig
### Properties
* **alwaysOn**: bool: <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
* **apiDefinition**: [ApiDefinitionInfo](#apidefinitioninfo): Information about the formal API definition for the app.
* **appCommandLine**: string: App command line to launch.
* **appSettings**: [NameValuePair](#namevaluepair)[]: Application settings.
* **autoHealEnabled**: bool: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
* **autoHealRules**: [AutoHealRules](#autohealrules): Auto Heal rules.
* **autoSwapSlotName**: string: Auto-swap slot name.
* **azureStorageAccounts**: [SiteConfigAzureStorageAccounts](#siteconfigazurestorageaccounts): User-provided Azure storage accounts.
* **connectionStrings**: [ConnStringInfo](#connstringinfo)[]: Connection strings.
* **cors**: [CorsSettings](#corssettings): Cross-Origin Resource Sharing (CORS) settings.
* **defaultDocuments**: string[]: Default documents.
* **detailedErrorLoggingEnabled**: bool: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
* **documentRoot**: string: Document root.
* **experiments**: [Experiments](#experiments): This is work around for polymorphic types.
* **ftpsState**: 'AllAllowed' | 'Disabled' | 'FtpsOnly' | string: State of FTP / FTPS service
* **handlerMappings**: [HandlerMapping](#handlermapping)[]: Handler mappings.
* **http20Enabled**: bool: Http20Enabled: configures a web site to allow clients to connect over http2.0
* **httpLoggingEnabled**: bool: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
* **ipSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]: IP security restrictions for main.
* **javaContainer**: string: Java container.
* **javaContainerVersion**: string: Java container version.
* **javaVersion**: string: Java version.
* **limits**: [SiteLimits](#sitelimits): Site limits.
* **linuxFxVersion**: string: Linux App Framework and version
* **loadBalancing**: 'LeastRequests' | 'LeastResponseTime' | 'RequestHash' | 'WeightedRoundRobin' | 'WeightedTotalTraffic': Site load balancing.
* **localMySqlEnabled**: bool: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
* **logsDirectorySizeLimit**: int: HTTP logs directory size limit.
* **machineKey**: [SiteMachineKey](#sitemachinekey) (ReadOnly): Site MachineKey.
* **managedPipelineMode**: 'Classic' | 'Integrated': Managed pipeline mode.
* **managedServiceIdentityId**: int: Managed Service Identity Id
* **minTlsVersion**: '1.0' | '1.1' | '1.2' | string: MinTlsVersion: configures the minimum version of TLS required for SSL requests
* **netFrameworkVersion**: string: .NET Framework version.
* **nodeVersion**: string: Version of Node.js.
* **numberOfWorkers**: int: Number of workers.
* **phpVersion**: string: Version of PHP.
* **publishingUsername**: string: Publishing user name.
* **push**: [PushSettings](#pushsettings): Push endpoint settings.
* **pythonVersion**: string: Version of Python.
* **remoteDebuggingEnabled**: bool: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
* **remoteDebuggingVersion**: string: Remote debugging version.
* **requestTracingEnabled**: bool: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
* **requestTracingExpirationTime**: string: Request tracing expiration time.
* **reservedInstanceCount**: int: Number of reserved instances.
This setting only applies to the Consumption Plan
* **scmIpSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]: IP security restrictions for scm.
* **scmIpSecurityRestrictionsUseMain**: bool: IP security restrictions for scm to use main.
* **scmType**: 'BitbucketGit' | 'BitbucketHg' | 'CodePlexGit' | 'CodePlexHg' | 'Dropbox' | 'ExternalGit' | 'ExternalHg' | 'GitHub' | 'LocalGit' | 'None' | 'OneDrive' | 'Tfs' | 'VSO' | string: SCM type.
* **tracingOptions**: string: Tracing options.
* **use32BitWorkerProcess**: bool: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
* **virtualApplications**: [VirtualApplication](#virtualapplication)[]: Virtual applications.
* **vnetName**: string: Virtual Network name.
* **webSocketsEnabled**: bool: <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
* **windowsFxVersion**: string: Xenon App Framework and version
* **xManagedServiceIdentityId**: int: Explicit Managed Service Identity Id

## SiteConfigAzureStorageAccounts
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

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
* **cloningInfo**: [CloningInfo](#cloninginfo) (WriteOnly): If specified during app creation, the app is cloned from a source app.
* **containerSize**: int: Size of the function container.
* **dailyMemoryTimeQuota**: int: Maximum allowed daily memory-time quota (applicable on dynamic apps only).
* **defaultHostName**: string (ReadOnly): Default hostname of the app. Read-only.
* **enabled**: bool: <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
* **enabledHostNames**: string[] (ReadOnly): Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
the app is not served on those hostnames.
* **geoDistributions**: [GeoDistribution](#geodistribution)[]: GeoDistributions for this site
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): App Service Environment to use for the app.
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
* **lastModifiedTimeUtc**: string (ReadOnly): Last time the app was modified, in UTC. Read-only.
* **maxNumberOfWorkers**: int (ReadOnly): Maximum number of workers.
This only applies to Functions container.
* **outboundIpAddresses**: string (ReadOnly): List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
* **possibleOutboundIpAddresses**: string (ReadOnly): List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
* **redundancyMode**: 'ActiveActive' | 'Failover' | 'GeoRedundant' | 'Manual' | 'None': Site redundancy mode
* **repositorySiteName**: string (ReadOnly): Name of the repository site.
* **reserved**: bool: <code>true</code> if reserved; otherwise, <code>false</code>.
* **resourceGroup**: string (ReadOnly): Name of the resource group the app belongs to. Read-only.
* **scmSiteAlsoStopped**: bool: <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
* **serverFarmId**: string: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
* **siteConfig**: [SiteConfig](#siteconfig): Configuration of the app.
* **slotSwapStatus**: [SlotSwapStatus](#slotswapstatus) (ReadOnly): Status of the last deployment slot swap operation.
* **state**: string (ReadOnly): Current state of the app.
* **suspendedTill**: string (ReadOnly): App suspended till in case memory-time quota is exceeded.
* **targetSwapSlot**: string (ReadOnly): Specifies which deployment slot this app will swap into. Read-only.
* **trafficManagerHostNames**: string[] (ReadOnly): Azure Traffic Manager hostnames associated with the app. Read-only.
* **usageState**: 'Exceeded' | 'Normal' (ReadOnly): State indicating whether the app has exceeded its quota usage. Read-only.

## SiteSourceControlProperties
### Properties
* **branch**: string: Name of branch to use for deployment.
* **deploymentRollbackEnabled**: bool: <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
* **isManualIntegration**: bool: <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
* **isMercurial**: bool: <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
* **repoUrl**: string: Repository or source control URL.

## SkuCapacity
### Properties
* **default**: int: Default number of workers for this App Service plan SKU.
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
* **timeInterval**: string: Time interval.
* **timeTaken**: string: Time taken.

## SourceControlProperties
### Properties
* **expirationTime**: string: OAuth token expiration.
* **refreshToken**: string: OAuth refresh token.
* **token**: string: OAuth access token.
* **tokenSecret**: string: OAuth access token secret.

## StampCapacity
### Properties
* **availableCapacity**: int: Available capacity (# of machines, bytes of storage etc...).
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared': Shared/dedicated workers.
* **excludeFromCapacityAllocation**: bool: If <code>true</code>, it includes basic apps.
Basic apps are not used for capacity allocation.
* **isApplicableForAllComputeModes**: bool: <code>true</code> if capacity is applicable for all apps; otherwise, <code>false</code>.
* **isLinux**: bool: Is this a linux stamp capacity
* **name**: string: Name of the stamp.
* **siteMode**: string: Shared or Dedicated.
* **totalCapacity**: int: Total capacity (# of machines, bytes of storage etc...).
* **unit**: string: Name of the unit.
* **workerSize**: 'D1' | 'D2' | 'D3' | 'Default' | 'Large' | 'Medium' | 'Small': Size of the machines.
* **workerSizeId**: int: Size ID of machines: 
0 - Small
1 - Medium
2 - Large

## StatusCodesBasedTrigger
### Properties
* **count**: int: Request Count.
* **status**: int: HTTP status code.
* **subStatus**: int: Request Sub Status.
* **timeInterval**: string: Time interval.
* **win32Status**: int: Win32 error code.

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

## SwiftVirtualNetworkProperties
### Properties
* **subnetResourceId**: string: The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
* **swiftSupported**: bool: A flag that specifies if the scale unit this Web App is on supports Swift integration.

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
* **virtualIP**: string: Virtual IP address.

## VirtualNetworkProfile
### Properties
* **id**: string: Resource id of the Virtual Network.
* **name**: string (ReadOnly): Name of the Virtual Network (read-only).
* **subnet**: string: Subnet within the Virtual Network.
* **type**: string (ReadOnly): Resource type of the Virtual Network (read-only).

## VnetGatewayProperties
### Properties
* **vnetName**: string: The Virtual Network name.
* **vpnPackageUri**: string (Required, WriteOnly): The URI where the VPN package can be downloaded.

## VnetInfoProperties
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

## WorkerPool
### Properties
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared': Shared or dedicated app hosting.
* **instanceNames**: string[] (ReadOnly): Names of all instances in the worker pool (read only).
* **workerCount**: int: Number of instances in the worker pool.
* **workerSize**: string: VM size of the worker pool instances.
* **workerSizeId**: int: Worker size ID for referencing this worker pool.

