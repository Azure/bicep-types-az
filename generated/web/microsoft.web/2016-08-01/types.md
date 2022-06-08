# Microsoft.Web @ 2016-08-01

## Resource Microsoft.Web/sites@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Site resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/config@2016-08-01 (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsProperties](#siteauthsettingsproperties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupRequestProperties](#backuprequestproperties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionStringDictionaryProperties](#connectionstringdictionaryproperties): Connection strings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteLogsConfigProperties](#sitelogsconfigproperties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [PushSettingsProperties](#pushsettingsproperties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'slotConfigNames' (Required, DeployTimeConstant): The resource name
* **properties**: [SlotConfigNames](#slotconfignames): Names for connection strings and application settings to be marked as sticky to the deployment slot and not moved during a swap operation.
This is valid for all deployment slots in an app.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/config/snapshots@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig) (ReadOnly): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/config/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/continuouswebjobs@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContinuousWebJobProperties](#continuouswebjobproperties) (ReadOnly): ContinuousWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/continuouswebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/deployments@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): Deployment resource specific properties
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/domainOwnershipIdentifiers@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IdentifierProperties](#identifierproperties): Identifier resource specific properties
* **type**: 'Microsoft.Web/sites/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/extensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/functions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties): FunctionEnvelope resource specific properties
* **type**: 'Microsoft.Web/sites/functions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hostNameBindings@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties): HostNameBinding resource specific properties
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hybridconnection@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties): RelayServiceConnectionEntity resource specific properties
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hybridConnectionNamespaces/relays@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/extensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/instances/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/processes@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/instances/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/processes/modules@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/instances/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/processes/threads@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessThreadInfoProperties](#processthreadinfoproperties) (ReadOnly): ProcessThreadInfo resource specific properties
* **type**: 'Microsoft.Web/sites/instances/processes/threads' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/migratemysql@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'status' (Required, DeployTimeConstant): The resource name
* **properties**: [MigrateMySqlStatusProperties](#migratemysqlstatusproperties) (ReadOnly): MigrateMySqlStatus resource specific properties
* **type**: 'Microsoft.Web/sites/migratemysql' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/networkFeatures@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFeaturesProperties](#networkfeaturesproperties) (ReadOnly): NetworkFeatures resource specific properties
* **type**: 'Microsoft.Web/sites/networkFeatures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/premieraddons@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PremierAddOnProperties](#premieraddonproperties): PremierAddOn resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/processes@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/processes/modules@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/processes/threads@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessThreadInfoProperties](#processthreadinfoproperties) (ReadOnly): ProcessThreadInfo resource specific properties
* **type**: 'Microsoft.Web/sites/processes/threads' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/publicCertificates@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicCertificateProperties](#publiccertificateproperties): PublicCertificate resource specific properties
* **type**: 'Microsoft.Web/sites/publicCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/siteextensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly): SiteExtensionInfo resource specific properties
* **type**: 'Microsoft.Web/sites/siteextensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Site resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/config@2016-08-01 (WriteOnly)
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name

### Base Properties
### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteAuthSettingsProperties](#siteauthsettingsproperties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [BackupRequestProperties](#backuprequestproperties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionStringDictionaryProperties](#connectionstringdictionaryproperties): Connection strings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteLogsConfigProperties](#sitelogsconfigproperties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [PushSettingsProperties](#pushsettingsproperties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/slots/config/snapshots@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig) (ReadOnly): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/slots/config/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/continuouswebjobs@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContinuousWebJobProperties](#continuouswebjobproperties) (ReadOnly): ContinuousWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/slots/continuouswebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/deployments@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): Deployment resource specific properties
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IdentifierProperties](#identifierproperties): Identifier resource specific properties
* **type**: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/extensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/slots/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/functions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties): FunctionEnvelope resource specific properties
* **type**: 'Microsoft.Web/sites/slots/functions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hostNameBindings@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties): HostNameBinding resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hybridconnection@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties): RelayServiceConnectionEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/extensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/slots/instances/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/processes@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/instances/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/processes/modules@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/instances/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/processes/threads@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessThreadInfoProperties](#processthreadinfoproperties) (ReadOnly): ProcessThreadInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/instances/processes/threads' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/migratemysql@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: 'status' (Required, DeployTimeConstant): The resource name
* **properties**: [MigrateMySqlStatusProperties](#migratemysqlstatusproperties) (ReadOnly): MigrateMySqlStatus resource specific properties
* **type**: 'Microsoft.Web/sites/slots/migratemysql' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/networkFeatures@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFeaturesProperties](#networkfeaturesproperties) (ReadOnly): NetworkFeatures resource specific properties
* **type**: 'Microsoft.Web/sites/slots/networkFeatures' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/premieraddons@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PremierAddOnProperties](#premieraddonproperties): PremierAddOn resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/processes@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessInfoProperties](#processinfoproperties) (ReadOnly): ProcessInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/processes/modules@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessModuleInfoProperties](#processmoduleinfoproperties) (ReadOnly): ProcessModuleInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/processes/modules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/processes/threads@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessThreadInfoProperties](#processthreadinfoproperties) (ReadOnly): ProcessThreadInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/processes/threads' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/publicCertificates@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PublicCertificateProperties](#publiccertificateproperties): PublicCertificate resource specific properties
* **type**: 'Microsoft.Web/sites/slots/publicCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/siteextensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly): SiteExtensionInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/siteextensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/sourcecontrols@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties): SiteSourceControl resource specific properties
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/triggeredwebjobs@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredWebJobProperties](#triggeredwebjobproperties) (ReadOnly): TriggeredWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/slots/triggeredwebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/triggeredwebjobs/history@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredJobHistoryProperties](#triggeredjobhistoryproperties) (ReadOnly): TriggeredJobHistory resource specific properties
* **type**: 'Microsoft.Web/sites/slots/triggeredwebjobs/history' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfoProperties](#vnetinfoproperties): VnetInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/webjobs@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebJobProperties](#webjobproperties) (ReadOnly): WebJob resource specific properties
* **type**: 'Microsoft.Web/sites/slots/webjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/sourcecontrols@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties): SiteSourceControl resource specific properties
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/triggeredwebjobs@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredWebJobProperties](#triggeredwebjobproperties) (ReadOnly): TriggeredWebJob resource specific properties
* **type**: 'Microsoft.Web/sites/triggeredwebjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/triggeredwebjobs/history@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriggeredJobHistoryProperties](#triggeredjobhistoryproperties) (ReadOnly): TriggeredJobHistory resource specific properties
* **type**: 'Microsoft.Web/sites/triggeredwebjobs/history' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetInfoProperties](#vnetinfoproperties): VnetInfo resource specific properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/webjobs@2016-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebJobProperties](#webjobproperties) (ReadOnly): WebJob resource specific properties
* **type**: 'Microsoft.Web/sites/webjobs' (ReadOnly, DeployTimeConstant): The resource type

## Function list (Microsoft.Web/sites/backups@2016-08-01)
* **Resource**: Microsoft.Web/sites/backups
* **ApiVersion**: 2016-08-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: [BackupItem](#backupitem)

## Function list (Microsoft.Web/sites/config@2016-08-01)
* **Resource**: Microsoft.Web/sites/config
* **ApiVersion**: 2016-08-01
* **Output**: [StringDictionary](#stringdictionary)

## Function list (Microsoft.Web/sites/slots/backups@2016-08-01)
* **Resource**: Microsoft.Web/sites/slots/backups
* **ApiVersion**: 2016-08-01
* **Input**: [BackupRequest](#backuprequest)
* **Output**: [BackupItem](#backupitem)

## Function list (Microsoft.Web/sites/slots/config@2016-08-01)
* **Resource**: Microsoft.Web/sites/slots/config
* **ApiVersion**: 2016-08-01
* **Output**: [StringDictionary](#stringdictionary)

## Function listKeys (Microsoft.Web/sites/hybridConnectionNamespaces/relays@2016-08-01)
* **Resource**: Microsoft.Web/sites/hybridConnectionNamespaces/relays
* **ApiVersion**: 2016-08-01
* **Output**: [HybridConnectionKey](#hybridconnectionkey)

## Function listKeys (Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2016-08-01)
* **Resource**: Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays
* **ApiVersion**: 2016-08-01
* **Output**: [HybridConnectionKey](#hybridconnectionkey)

## Function listsecrets (Microsoft.Web/sites/functions@2016-08-01)
* **Resource**: Microsoft.Web/sites/functions
* **ApiVersion**: 2016-08-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsecrets (Microsoft.Web/sites/slots/functions@2016-08-01)
* **Resource**: Microsoft.Web/sites/slots/functions
* **ApiVersion**: 2016-08-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsyncfunctiontriggerstatus (Microsoft.Web/sites@2016-08-01)
* **Resource**: Microsoft.Web/sites
* **ApiVersion**: 2016-08-01
* **Output**: [FunctionSecrets](#functionsecrets)

## Function listsyncfunctiontriggerstatus (Microsoft.Web/sites/slots@2016-08-01)
* **Resource**: Microsoft.Web/sites/slots
* **ApiVersion**: 2016-08-01
* **Output**: [FunctionSecrets](#functionsecrets)

## ApiDefinitionInfo
### Properties
* **url**: string: The URL of the API definition.

## ApplicationLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageApplicationLogsConfig](#azureblobstorageapplicationlogsconfig): Application logs azure blob storage configuration.
* **azureTableStorage**: [AzureTableStorageApplicationLogsConfig](#azuretablestorageapplicationlogsconfig): Application logs to Azure table storage configuration.
* **fileSystem**: [FileSystemApplicationLogsConfig](#filesystemapplicationlogsconfig): Application logs to file system configuration.

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

## AutoHealRules
### Properties
* **actions**: [AutoHealActions](#autohealactions): Actions which to take by the auto-heal module when a rule is triggered.
* **triggers**: [AutoHealTriggers](#autohealtriggers): Triggers for auto-heal.

## AutoHealTriggers
### Properties
* **privateBytesInKB**: int: A rule based on private bytes.
* **requests**: [RequestsBasedTrigger](#requestsbasedtrigger): Trigger based on total requests.
* **slowRequests**: [SlowRequestsBasedTrigger](#slowrequestsbasedtrigger): Trigger based on request execution time.
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

## AzureTableStorageApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level.
* **sasUrl**: string (Required): SAS URL to an Azure table with add/query/delete permissions.

## BackupItem
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [BackupItemProperties](#backupitemproperties) (ReadOnly): BackupItem resource specific properties
* **type**: string (ReadOnly): Resource type.

## BackupItem
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [BackupItemProperties](#backupitemproperties) (ReadOnly): BackupItem resource specific properties
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
* **id**: string (ReadOnly, WriteOnly): Resource Id.
* **kind**: string (WriteOnly): Kind of resource.
* **name**: string (ReadOnly, WriteOnly): Resource Name.
* **properties**: [BackupRequestProperties](#backuprequestproperties) (WriteOnly): BackupRequest resource specific properties
* **type**: string (ReadOnly, WriteOnly): Resource type.

## BackupRequest
### Properties
* **id**: string (ReadOnly, WriteOnly): Resource Id.
* **kind**: string (WriteOnly): Kind of resource.
* **name**: string (ReadOnly, WriteOnly): Resource Name.
* **properties**: [BackupRequestProperties](#backuprequestproperties) (WriteOnly): BackupRequest resource specific properties
* **type**: string (ReadOnly, WriteOnly): Resource type.

## BackupRequestProperties
### Properties
* **backupSchedule**: [BackupSchedule](#backupschedule): Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy.
* **databases**: [DatabaseBackupSetting](#databasebackupsetting)[]: Databases included in the backup.
* **enabled**: bool: True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
* **name**: string (Required): Name of the backup.
* **storageAccountUrl**: string (Required): SAS URL to the container.
* **type**: 'Clone' | 'Default' | 'Relocation' | 'Snapshot': Type of the backup.

## BackupSchedule
### Properties
* **frequencyInterval**: int (Required): How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
* **frequencyUnit**: 'Day' | 'Hour' (Required): The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
* **keepAtLeastOneBackup**: bool (Required): True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
* **lastExecutionTime**: string (ReadOnly): Last time when this schedule was triggered.
* **retentionPeriodInDays**: int (Required): After how many days backups should be deleted.
* **startTime**: string: When the schedule should start working.

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
* **ignoreQuotas**: bool: <code>true</code> if quotas should be ignored; otherwise, <code>false</code>.
* **overwrite**: bool: <code>true</code> to overwrite destination app; otherwise, <code>false</code>.
* **sourceWebAppId**: string (Required): ARM resource ID of the source app. App resource ID is of the form 
/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and 
/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
* **trafficManagerProfileId**: string: ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form 
/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}.
* **trafficManagerProfileName**: string: Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist.

## CloningInfoAppSettingsOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## ContinuousWebJobProperties
### Properties
* **detailedStatus**: string (ReadOnly): Detailed status.
* **error**: string (ReadOnly): Error information.
* **extraInfoUrl**: string (ReadOnly): Extra Info URL.
* **jobType**: 'Continuous' | 'Triggered' (ReadOnly): Job type.
* **logUrl**: string (ReadOnly): Log URL.
* **name**: string (ReadOnly): Job name. Used as job identifier in ARM resource URI.
* **runCommand**: string (ReadOnly): Run command.
* **settings**: [ContinuousWebJobPropertiesSettings](#continuouswebjobpropertiessettings) (ReadOnly): Job settings.
* **status**: 'Initializing' | 'PendingRestart' | 'Running' | 'Starting' | 'Stopped' (ReadOnly): Job status.
* **url**: string (ReadOnly): Job URL.
* **usingSdk**: bool (ReadOnly): Using SDK?

## ContinuousWebJobPropertiesSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

## CorsSettings
### Properties
* **allowedOrigins**: string[]: Gets or sets the list of origins that should be allowed to make cross-origin
calls (for example: http://example.com:12345). Use "*" to allow all.

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
* **authorEmail**: string: Author email.
* **deployer**: string: Who performed the deployment.
* **details**: string: Details on deployment.
* **endTime**: string: End time.
* **id**: string: Identifier for deployment.
* **message**: string: Details about deployment status.
* **startTime**: string: Start time.
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
* **config**: any: Any object
* **configHref**: string: Config URI.
* **files**: [FunctionEnvelopePropertiesFiles](#functionenvelopepropertiesfiles): File list.
* **functionAppId**: string (ReadOnly): Function App ID.
* **href**: string: Function URI.
* **name**: string (ReadOnly): Function name.
* **scriptHref**: string: Script URI.
* **scriptRootPathHref**: string: Script root path URI.
* **secretsFileHref**: string: Secrets file URI.
* **testData**: string: Test data used when testing via the Azure Portal.

## FunctionEnvelopePropertiesFiles
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FunctionSecrets
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [FunctionSecretsProperties](#functionsecretsproperties) (ReadOnly): FunctionSecrets resource specific properties
* **type**: string (ReadOnly): Resource type.

## FunctionSecrets
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [FunctionSecretsProperties](#functionsecretsproperties) (ReadOnly): FunctionSecrets resource specific properties
* **type**: string (ReadOnly): Resource type.

## FunctionSecrets
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [FunctionSecretsProperties](#functionsecretsproperties) (ReadOnly): FunctionSecrets resource specific properties
* **type**: string (ReadOnly): Resource type.

## FunctionSecrets
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [FunctionSecretsProperties](#functionsecretsproperties) (ReadOnly): FunctionSecrets resource specific properties
* **type**: string (ReadOnly): Resource type.

## FunctionSecretsProperties
### Properties
* **key**: string (ReadOnly): Secret key.
* **triggerUrl**: string (ReadOnly): Trigger URL.

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

## HybridConnection
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties) (ReadOnly): HybridConnection resource specific properties
* **type**: string (ReadOnly): Resource type.

## HybridConnectionKey
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [HybridConnectionKeyProperties](#hybridconnectionkeyproperties) (ReadOnly): HybridConnectionKey resource specific properties
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
* **ipAddress**: string (Required): IP address the security restriction is valid for.
* **subnetMask**: string: Subnet mask for the range of IP addresses the restriction is valid for.

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): Principal Id of managed service identity.
* **tenantId**: string (ReadOnly): Tenant of managed service identity.
* **type**: 'SystemAssigned' | string: Type of managed service identity.

## MigrateMySqlStatusProperties
### Properties
* **localMySqlEnabled**: bool (ReadOnly): True if the web app has in app MySql enabled
* **migrationOperationStatus**: 'Created' | 'Failed' | 'InProgress' | 'Succeeded' | 'TimedOut' (ReadOnly): The current status of the operation.
* **operationId**: string (ReadOnly): Operation ID for the migration task.

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

## NameValuePair
### Properties
* **name**: string: Pair name.
* **value**: string: Pair value.

## NetworkFeaturesProperties
### Properties
* **hybridConnections**: [RelayServiceConnectionEntity](#relayserviceconnectionentity)[] (ReadOnly): The Hybrid Connections summary view.
* **hybridConnectionsV2**: [HybridConnection](#hybridconnection)[] (ReadOnly): The Hybrid Connection V2 (Service Bus) view.
* **virtualNetworkConnection**: [VnetInfo](#vnetinfo) (ReadOnly): Virtual Network information contract.
* **virtualNetworkName**: string (ReadOnly): The Virtual Network name.

## PremierAddOnProperties
### Properties
* **location**: string: Premier add on Location.
* **marketplaceOffer**: string: Premier add on Marketplace offer.
* **marketplacePublisher**: string: Premier add on Marketplace publisher.
* **name**: string: Premier add on Name.
* **product**: string: Premier add on Product.
* **sku**: string: Premier add on SKU.
* **tags**: [PremierAddOnPropertiesTags](#premieraddonpropertiestags): Premier add on Tags.
* **vendor**: string: Premier add on Vendor.

## PremierAddOnPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProcessInfoProperties
### Properties
* **children**: string[] (ReadOnly): Child process list.
* **commandLine**: string (ReadOnly): Command line.
* **description**: string (ReadOnly): Description of process.
* **environmentVariables**: [ProcessInfoPropertiesEnvironmentVariables](#processinfopropertiesenvironmentvariables) (ReadOnly): List of environment variables.
* **fileName**: string (ReadOnly): File name of this process.
* **handleCount**: int (ReadOnly): Handle count.
* **href**: string (ReadOnly): HRef URI.
* **id**: int (ReadOnly): ARM Identifier for deployment.
* **iisProfileTimeoutInSeconds**: int (ReadOnly): IIS Profile timeout (seconds).
* **isIisProfileRunning**: bool (ReadOnly): Is the IIS Profile running?
* **isProfileRunning**: bool (ReadOnly): Is profile running?
* **isScmSite**: bool (ReadOnly): Is this the SCM site?
* **isWebJob**: bool (ReadOnly): Is this a Web Job?
* **miniDump**: string (ReadOnly): Minidump URI.
* **moduleCount**: int (ReadOnly): Module count.
* **modules**: [ProcessModuleInfo](#processmoduleinfo)[] (ReadOnly): List of modules.
* **name**: string (ReadOnly): Deployment name.
* **nonpagedSystemMemorySize64**: int (ReadOnly): Non-paged system memory.
* **openFileHandles**: string[] (ReadOnly): List of open files.
* **pagedMemorySize64**: int (ReadOnly): Paged memory.
* **pagedSystemMemorySize64**: int (ReadOnly): Paged system memory.
* **parent**: string (ReadOnly): Parent process.
* **peakPagedMemorySize64**: int (ReadOnly): Peak paged memory.
* **peakVirtualMemorySize64**: int (ReadOnly): Peak virtual memory usage.
* **peakWorkingSet64**: int (ReadOnly): Peak working set.
* **privateMemorySize64**: int (ReadOnly): Private memory size.
* **privilegedProcessorTime**: string (ReadOnly): Privileged CPU time.
* **startTime**: string (ReadOnly): Start time.
* **threadCount**: int (ReadOnly): Thread count.
* **threads**: [ProcessThreadInfo](#processthreadinfo)[] (ReadOnly): Thread list.
* **timeStamp**: string (ReadOnly): Time stamp.
* **totalProcessorTime**: string (ReadOnly): Total CPU time.
* **userName**: string (ReadOnly): User name.
* **userProcessorTime**: string (ReadOnly): User CPU time.
* **virtualMemorySize64**: int (ReadOnly): Virtual memory size.
* **workingSet64**: int (ReadOnly): Working set.

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
* **baseAddress**: string (ReadOnly): Base address. Used as module identifier in ARM resource URI.
* **fileDescription**: string (ReadOnly): File description.
* **fileName**: string (ReadOnly): File name.
* **filePath**: string (ReadOnly): File path.
* **fileVersion**: string (ReadOnly): File version.
* **href**: string (ReadOnly): HRef URI.
* **isDebug**: bool (ReadOnly): Is debug?
* **language**: string (ReadOnly): Module language (locale).
* **moduleMemorySize**: int (ReadOnly): Module memory size.
* **product**: string (ReadOnly): Product name.
* **productVersion**: string (ReadOnly): Product version.

## ProcessThreadInfo
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [ProcessThreadInfoProperties](#processthreadinfoproperties) (ReadOnly): ProcessThreadInfo resource specific properties
* **type**: string (ReadOnly): Resource type.

## ProcessThreadInfoProperties
### Properties
* **basePriority**: int (ReadOnly): Base priority.
* **currentPriority**: int (ReadOnly): Current thread priority.
* **href**: string (ReadOnly): HRef URI.
* **id**: int (ReadOnly): ARM Identifier for deployment.
* **priorityLevel**: string (ReadOnly): Thread priority level.
* **priviledgedProcessorTime**: string (ReadOnly): Privileged processor time.
* **process**: string (ReadOnly): Process URI.
* **startAddress**: string (ReadOnly): Start address.
* **startTime**: string (ReadOnly): Start time.
* **state**: string (ReadOnly): Thread state.
* **totalProcessorTime**: string (ReadOnly): Total processor time.
* **userProcessorTime**: string (ReadOnly): User processor time.
* **waitReason**: string (ReadOnly): Wait reason.

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

## RelayServiceConnectionEntity
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties) (ReadOnly): RelayServiceConnectionEntity resource specific properties
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

## SiteConfig
### Properties
* **alwaysOn**: bool: <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
* **apiDefinition**: [ApiDefinitionInfo](#apidefinitioninfo): Information about the formal API definition for the app.
* **appCommandLine**: string: App command line to launch.
* **appSettings**: [NameValuePair](#namevaluepair)[]: Application settings.
* **autoHealEnabled**: bool: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
* **autoHealRules**: [AutoHealRules](#autohealrules): Rules that can be defined for auto-heal.
* **autoSwapSlotName**: string: Auto-swap slot name.
* **connectionStrings**: [ConnStringInfo](#connstringinfo)[]: Connection strings.
* **cors**: [CorsSettings](#corssettings): Cross-Origin Resource Sharing (CORS) settings for the app.
* **defaultDocuments**: string[]: Default documents.
* **detailedErrorLoggingEnabled**: bool: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
* **documentRoot**: string: Document root.
* **experiments**: [Experiments](#experiments): Routing rules in production experiments.
* **handlerMappings**: [HandlerMapping](#handlermapping)[]: Handler mappings.
* **http20Enabled**: bool: Http20Enabled: configures a web site to allow clients to connect over http2.0
* **httpLoggingEnabled**: bool: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
* **ipSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]: IP security restrictions.
* **javaContainer**: string: Java container.
* **javaContainerVersion**: string: Java container version.
* **javaVersion**: string: Java version.
* **limits**: [SiteLimits](#sitelimits): Metric limits set on an app.
* **linuxFxVersion**: string: Linux App Framework and version
* **loadBalancing**: 'LeastRequests' | 'LeastResponseTime' | 'RequestHash' | 'WeightedRoundRobin' | 'WeightedTotalTraffic': Site load balancing.
* **localMySqlEnabled**: bool: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
* **logsDirectorySizeLimit**: int: HTTP logs directory size limit.
* **machineKey**: [SiteMachineKey](#sitemachinekey) (ReadOnly): MachineKey of an app.
* **managedPipelineMode**: 'Classic' | 'Integrated': Managed pipeline mode.
* **minTlsVersion**: '1.0' | '1.1' | '1.2' | string: MinTlsVersion: configures the minimum version of TLS required for SSL requests
* **netFrameworkVersion**: string: .NET Framework version.
* **nodeVersion**: string: Version of Node.js.
* **numberOfWorkers**: int: Number of workers.
* **phpVersion**: string: Version of PHP.
* **publishingUsername**: string: Publishing user name.
* **push**: [PushSettings](#pushsettings): Push settings for the App.
* **pythonVersion**: string: Version of Python.
* **remoteDebuggingEnabled**: bool: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
* **remoteDebuggingVersion**: string: Remote debugging version.
* **requestTracingEnabled**: bool: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
* **requestTracingExpirationTime**: string: Request tracing expiration time.
* **scmType**: 'BitbucketGit' | 'BitbucketHg' | 'CodePlexGit' | 'CodePlexHg' | 'Dropbox' | 'ExternalGit' | 'ExternalHg' | 'GitHub' | 'LocalGit' | 'None' | 'OneDrive' | 'Tfs' | 'VSO' | string: SCM type.
* **tracingOptions**: string: Tracing options.
* **use32BitWorkerProcess**: bool: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
* **virtualApplications**: [VirtualApplication](#virtualapplication)[]: Virtual applications.
* **vnetName**: string: Virtual Network name.
* **webSocketsEnabled**: bool: <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.

## SiteExtensionInfoProperties
### Properties
* **authors**: string[] (ReadOnly): List of authors.
* **comment**: string (ReadOnly): Site Extension comment.
* **description**: string (ReadOnly): Detailed description.
* **downloadCount**: int (ReadOnly): Count of downloads.
* **extensionUrl**: string (ReadOnly): Extension URL.
* **feedUrl**: string (ReadOnly): Feed URL.
* **iconUrl**: string (ReadOnly): Icon URL.
* **id**: string (ReadOnly): Site extension ID.
* **installationArgs**: string (ReadOnly): Installer command line parameters.
* **installedDateTime**: string (ReadOnly): Installed timestamp.
* **licenseUrl**: string (ReadOnly): License URL.
* **localIsLatestVersion**: bool (ReadOnly): <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
* **localPath**: string (ReadOnly): Local path.
* **projectUrl**: string (ReadOnly): Project URL.
* **provisioningState**: string (ReadOnly): Provisioning state.
* **publishedDateTime**: string (ReadOnly): Published timestamp.
* **summary**: string (ReadOnly): Summary description.
* **title**: string (ReadOnly): Site extension title.
* **type**: 'Gallery' | 'WebRoot' (ReadOnly): Site extension type.
* **version**: string (ReadOnly): Version information.

## SiteLimits
### Properties
* **maxDiskSizeInMb**: int: Maximum allowed disk size usage in MB.
* **maxMemoryInMb**: int: Maximum allowed memory usage in MB.
* **maxPercentageCpu**: int: Maximum allowed CPU usage percentage.

## SiteLogsConfigProperties
### Properties
* **applicationLogs**: [ApplicationLogsConfig](#applicationlogsconfig): Application logs configuration.
* **detailedErrorMessages**: [EnabledConfig](#enabledconfig): Enabled configuration.
* **failedRequestsTracing**: [EnabledConfig](#enabledconfig): Enabled configuration.
* **httpLogs**: [HttpLogsConfig](#httplogsconfig): Http logs configuration.

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
* **cloningInfo**: [CloningInfo](#cloninginfo) (WriteOnly): Information needed for cloning operation.
* **containerSize**: int: Size of the function container.
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
* **isDefaultContainer**: bool (ReadOnly): <code>true</code> if the app is a default container; otherwise, <code>false</code>.
* **lastModifiedTimeUtc**: string (ReadOnly): Last time the app was modified, in UTC. Read-only.
* **maxNumberOfWorkers**: int (ReadOnly): Maximum number of workers.
This only applies to Functions container.
* **outboundIpAddresses**: string (ReadOnly): List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
* **possibleOutboundIpAddresses**: string (ReadOnly): List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
* **repositorySiteName**: string (ReadOnly): Name of the repository site.
* **reserved**: bool: <code>true</code> if reserved; otherwise, <code>false</code>.
* **resourceGroup**: string (ReadOnly): Name of the resource group the app belongs to. Read-only.
* **scmSiteAlsoStopped**: bool: <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
* **serverFarmId**: string: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
* **siteConfig**: [SiteConfig](#siteconfig): Configuration of an App Service app.
* **slotSwapStatus**: [SlotSwapStatus](#slotswapstatus) (ReadOnly): The status of the last successful slot swap operation.
* **snapshotInfo**: [SnapshotRecoveryRequest](#snapshotrecoveryrequest) (WriteOnly): Details about app recovery operation.
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

## SlotConfigNames
### Properties
* **appSettingNames**: string[]: List of application settings names.
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

## SnapshotRecoveryRequest
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [SnapshotRecoveryRequestProperties](#snapshotrecoveryrequestproperties): SnapshotRecoveryRequest resource specific properties
* **type**: string (ReadOnly): Resource type.

## SnapshotRecoveryRequestProperties
### Properties
* **ignoreConflictingHostNames**: bool: If true, custom hostname conflicts will be ignored when recovering to a target web app.
This setting is only necessary when RecoverConfiguration is enabled.
* **overwrite**: bool (Required): If <code>true</code> the recovery operation can overwrite source app; otherwise, <code>false</code>.
* **recoverConfiguration**: bool: If true, site configuration, in addition to content, will be reverted.
* **recoveryTarget**: [SnapshotRecoveryTarget](#snapshotrecoverytarget): Specifies the web app that snapshot contents will be written to.
* **snapshotTime**: string: Point in time in which the app recovery should be attempted, formatted as a DateTime string.

## SnapshotRecoveryTarget
### Properties
* **id**: string: ARM resource ID of the target app. 
/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and 
/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
* **location**: string: Geographical location of the target web app, e.g. SouthEastAsia, SouthCentralUS

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

## TriggeredJobHistoryProperties
### Properties
* **triggeredJobRuns**: [TriggeredJobRun](#triggeredjobrun)[] (ReadOnly): List of triggered web job runs.

## TriggeredJobRun
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [TriggeredJobRunProperties](#triggeredjobrunproperties) (ReadOnly): TriggeredJobRun resource specific properties
* **type**: string (ReadOnly): Resource type.

## TriggeredJobRunProperties
### Properties
* **duration**: string (ReadOnly): Job duration.
* **endTime**: string (ReadOnly): End time.
* **errorUrl**: string (ReadOnly): Error URL.
* **id**: string (ReadOnly): Job ID.
* **jobName**: string (ReadOnly): Job name.
* **name**: string (ReadOnly): Job name.
* **outputUrl**: string (ReadOnly): Output URL.
* **startTime**: string (ReadOnly): Start time.
* **status**: 'Error' | 'Failed' | 'Success' (ReadOnly): Job status.
* **trigger**: string (ReadOnly): Job trigger.
* **url**: string (ReadOnly): Job URL.

## TriggeredWebJobProperties
### Properties
* **error**: string (ReadOnly): Error information.
* **extraInfoUrl**: string (ReadOnly): Extra Info URL.
* **historyUrl**: string (ReadOnly): History URL.
* **jobType**: 'Continuous' | 'Triggered' (ReadOnly): Job type.
* **latestRun**: [TriggeredJobRun](#triggeredjobrun) (ReadOnly): Triggered Web Job Run Information.
* **name**: string (ReadOnly): Job name. Used as job identifier in ARM resource URI.
* **runCommand**: string (ReadOnly): Run command.
* **schedulerLogsUrl**: string (ReadOnly): Scheduler Logs URL.
* **settings**: [TriggeredWebJobPropertiesSettings](#triggeredwebjobpropertiessettings) (ReadOnly): Job settings.
* **url**: string (ReadOnly): Job URL.
* **usingSdk**: bool (ReadOnly): Using SDK?

## TriggeredWebJobPropertiesSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

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

## VnetGatewayProperties
### Properties
* **vnetName**: string: The Virtual Network name.
* **vpnPackageUri**: string (Required, WriteOnly): The URI where the VPN package can be downloaded.

## VnetInfo
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [VnetInfoProperties](#vnetinfoproperties) (ReadOnly): VnetInfo resource specific properties
* **type**: string (ReadOnly): Resource type.

## VnetInfoProperties
### Properties
* **certBlob**: any: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
Point-To-Site VPN connection.
* **certThumbprint**: string (ReadOnly): The client certificate thumbprint.
* **dnsServers**: string: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
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
* **name**: string: The name of this route. This is only returned by the server and does not need to be set by the client.
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC' | string: The type of route this is:
DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
INHERITED - Routes inherited from the real Virtual Network routes
STATIC - Static route set on the app only

These values will be used for syncing an app's routes with those from a Virtual Network.
* **startAddress**: string: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.

## WebJobProperties
### Properties
* **error**: string (ReadOnly): Error information.
* **extraInfoUrl**: string (ReadOnly): Extra Info URL.
* **jobType**: 'Continuous' | 'Triggered' (ReadOnly): Job type.
* **name**: string (ReadOnly): Job name. Used as job identifier in ARM resource URI.
* **runCommand**: string (ReadOnly): Run command.
* **settings**: [WebJobPropertiesSettings](#webjobpropertiessettings) (ReadOnly): Job settings.
* **url**: string (ReadOnly): Job URL.
* **usingSdk**: bool (ReadOnly): Using SDK?

## WebJobPropertiesSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

