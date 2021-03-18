# Microsoft.Web @ 2016-08-01

## Resource Microsoft.Web/sites@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteProperties](#siteproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/backups@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RestoreRequestProperties](#restorerequestproperties)
* **type**: 'Microsoft.Web/sites/backups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/deployments@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentProperties](#deploymentproperties)
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/domainOwnershipIdentifiers@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IdentifierProperties](#identifierproperties)
* **type**: 'Microsoft.Web/sites/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/extensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/functions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties)
* **type**: 'Microsoft.Web/sites/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hostNameBindings@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties)
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hybridconnection@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties)
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hybridConnectionNamespaces/relays@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties)
* **type**: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/instances/extensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/instances/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/premieraddons@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PremierAddOnProperties](#premieraddonproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/publicCertificates@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublicCertificateProperties](#publiccertificateproperties)
* **type**: 'Microsoft.Web/sites/publicCertificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/siteextensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly)
* **type**: 'Microsoft.Web/sites/siteextensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteProperties](#siteproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/backups@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RestoreRequestProperties](#restorerequestproperties)
* **type**: 'Microsoft.Web/sites/slots/backups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/deployments@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentProperties](#deploymentproperties)
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IdentifierProperties](#identifierproperties)
* **type**: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/extensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/slots/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/functions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties)
* **type**: 'Microsoft.Web/sites/slots/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hostNameBindings@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties)
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hybridconnection@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties)
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties)
* **type**: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/instances/extensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/slots/instances/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/premieraddons@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PremierAddOnProperties](#premieraddonproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/publicCertificates@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublicCertificateProperties](#publiccertificateproperties)
* **type**: 'Microsoft.Web/sites/slots/publicCertificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/siteextensions@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly)
* **type**: 'Microsoft.Web/sites/slots/siteextensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/sourcecontrols@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties)
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetInfoProperties](#vnetinfoproperties)
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties)
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/sourcecontrols@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties)
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetInfoProperties](#vnetinfoproperties)
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2016-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties)
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## SiteProperties
### Properties
* **availabilityState**: 'DisasterRecoveryMode' | 'Limited' | 'Normal' (ReadOnly)
* **clientAffinityEnabled**: bool
* **clientCertEnabled**: bool
* **cloningInfo**: [CloningInfo](#cloninginfo)
* **containerSize**: int
* **dailyMemoryTimeQuota**: int
* **defaultHostName**: string (ReadOnly)
* **enabled**: bool
* **enabledHostNames**: string[] (ReadOnly)
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile)
* **hostNames**: string[] (ReadOnly)
* **hostNamesDisabled**: bool
* **hostNameSslStates**: [HostNameSslState](#hostnamesslstate)[]
* **httpsOnly**: bool
* **isDefaultContainer**: bool (ReadOnly)
* **lastModifiedTimeUtc**: string (ReadOnly)
* **maxNumberOfWorkers**: int (ReadOnly)
* **outboundIpAddresses**: string (ReadOnly)
* **possibleOutboundIpAddresses**: string (ReadOnly)
* **repositorySiteName**: string (ReadOnly)
* **reserved**: bool
* **resourceGroup**: string (ReadOnly)
* **scmSiteAlsoStopped**: bool
* **serverFarmId**: string
* **siteConfig**: [SiteConfig](#siteconfig)
* **slotSwapStatus**: [SlotSwapStatus](#slotswapstatus) (ReadOnly)
* **snapshotInfo**: [SnapshotRecoveryRequest](#snapshotrecoveryrequest)
* **state**: string (ReadOnly)
* **suspendedTill**: string (ReadOnly)
* **targetSwapSlot**: string (ReadOnly)
* **trafficManagerHostNames**: string[] (ReadOnly)
* **usageState**: 'Exceeded' | 'Normal' (ReadOnly)

## CloningInfo
### Properties
* **appSettingsOverrides**: [CloningInfoAppSettingsOverrides](#cloninginfoappsettingsoverrides)
* **cloneCustomHostNames**: bool
* **cloneSourceControl**: bool
* **configureLoadBalancing**: bool
* **correlationId**: string
* **hostingEnvironment**: string
* **ignoreQuotas**: bool
* **overwrite**: bool
* **sourceWebAppId**: string (Required)
* **trafficManagerProfileId**: string
* **trafficManagerProfileName**: string

## CloningInfoAppSettingsOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HostingEnvironmentProfile
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## HostNameSslState
### Properties
* **hostType**: 'Repository' | 'Standard'
* **name**: string
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled'
* **thumbprint**: string
* **toUpdate**: bool
* **virtualIP**: string

## SiteConfig
### Properties
* **alwaysOn**: bool
* **apiDefinition**: [ApiDefinitionInfo](#apidefinitioninfo)
* **appCommandLine**: string
* **appSettings**: [NameValuePair](#namevaluepair)[]
* **autoHealEnabled**: bool
* **autoHealRules**: [AutoHealRules](#autohealrules)
* **autoSwapSlotName**: string
* **connectionStrings**: [ConnStringInfo](#connstringinfo)[]
* **cors**: [CorsSettings](#corssettings)
* **defaultDocuments**: string[]
* **detailedErrorLoggingEnabled**: bool
* **documentRoot**: string
* **experiments**: [Experiments](#experiments)
* **handlerMappings**: [HandlerMapping](#handlermapping)[]
* **http20Enabled**: bool
* **httpLoggingEnabled**: bool
* **ipSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]
* **javaContainer**: string
* **javaContainerVersion**: string
* **javaVersion**: string
* **limits**: [SiteLimits](#sitelimits)
* **linuxFxVersion**: string
* **loadBalancing**: 'LeastRequests' | 'LeastResponseTime' | 'RequestHash' | 'WeightedRoundRobin' | 'WeightedTotalTraffic'
* **localMySqlEnabled**: bool
* **logsDirectorySizeLimit**: int
* **machineKey**: [SiteMachineKey](#sitemachinekey) (ReadOnly)
* **managedPipelineMode**: 'Classic' | 'Integrated'
* **minTlsVersion**: '1.0' | '1.1' | '1.2'
* **netFrameworkVersion**: string
* **nodeVersion**: string
* **numberOfWorkers**: int
* **phpVersion**: string
* **publishingUsername**: string
* **push**: [PushSettings](#pushsettings)
* **pythonVersion**: string
* **remoteDebuggingEnabled**: bool
* **remoteDebuggingVersion**: string
* **requestTracingEnabled**: bool
* **requestTracingExpirationTime**: string
* **scmType**: 'BitbucketGit' | 'BitbucketHg' | 'CodePlexGit' | 'CodePlexHg' | 'Dropbox' | 'ExternalGit' | 'ExternalHg' | 'GitHub' | 'LocalGit' | 'None' | 'OneDrive' | 'Tfs' | 'VSO'
* **tracingOptions**: string
* **use32BitWorkerProcess**: bool
* **virtualApplications**: [VirtualApplication](#virtualapplication)[]
* **vnetName**: string
* **webSocketsEnabled**: bool

## ApiDefinitionInfo
### Properties
* **url**: string

## NameValuePair
### Properties
* **name**: string
* **value**: string

## AutoHealRules
### Properties
* **actions**: [AutoHealActions](#autohealactions)
* **triggers**: [AutoHealTriggers](#autohealtriggers)

## AutoHealActions
### Properties
* **actionType**: 'CustomAction' | 'LogEvent' | 'Recycle'
* **customAction**: [AutoHealCustomAction](#autohealcustomaction)
* **minProcessExecutionTime**: string

## AutoHealCustomAction
### Properties
* **exe**: string
* **parameters**: string

## AutoHealTriggers
### Properties
* **privateBytesInKB**: int
* **requests**: [RequestsBasedTrigger](#requestsbasedtrigger)
* **slowRequests**: [SlowRequestsBasedTrigger](#slowrequestsbasedtrigger)
* **statusCodes**: [StatusCodesBasedTrigger](#statuscodesbasedtrigger)[]

## RequestsBasedTrigger
### Properties
* **count**: int
* **timeInterval**: string

## SlowRequestsBasedTrigger
### Properties
* **count**: int
* **timeInterval**: string
* **timeTaken**: string

## StatusCodesBasedTrigger
### Properties
* **count**: int
* **status**: int
* **subStatus**: int
* **timeInterval**: string
* **win32Status**: int

## ConnStringInfo
### Properties
* **connectionString**: string
* **name**: string
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus'

## CorsSettings
### Properties
* **allowedOrigins**: string[]

## Experiments
### Properties
* **rampUpRules**: [RampUpRule](#rampuprule)[]

## RampUpRule
### Properties
* **actionHostName**: string
* **changeDecisionCallbackUrl**: string
* **changeIntervalInMinutes**: int
* **changeStep**: int
* **maxReroutePercentage**: int
* **minReroutePercentage**: int
* **name**: string
* **reroutePercentage**: int

## HandlerMapping
### Properties
* **arguments**: string
* **extension**: string
* **scriptProcessor**: string

## IpSecurityRestriction
### Properties
* **ipAddress**: string (Required)
* **subnetMask**: string

## SiteLimits
### Properties
* **maxDiskSizeInMb**: int
* **maxMemoryInMb**: int
* **maxPercentageCpu**: int

## SiteMachineKey
### Properties
* **decryption**: string
* **decryptionKey**: string
* **validation**: string
* **validationKey**: string

## PushSettings
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [PushSettingsProperties](#pushsettingsproperties)
* **type**: string (ReadOnly)

## PushSettingsProperties
### Properties
* **dynamicTagsJson**: string
* **isPushEnabled**: bool (Required)
* **tagsRequiringAuth**: string
* **tagWhitelistJson**: string

## VirtualApplication
### Properties
* **physicalPath**: string
* **preloadEnabled**: bool
* **virtualDirectories**: [VirtualDirectory](#virtualdirectory)[]
* **virtualPath**: string

## VirtualDirectory
### Properties
* **physicalPath**: string
* **virtualPath**: string

## SlotSwapStatus
### Properties
* **destinationSlotName**: string (ReadOnly)
* **sourceSlotName**: string (ReadOnly)
* **timestampUtc**: string (ReadOnly)

## SnapshotRecoveryRequest
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [SnapshotRecoveryRequestProperties](#snapshotrecoveryrequestproperties)
* **type**: string (ReadOnly)

## SnapshotRecoveryRequestProperties
### Properties
* **ignoreConflictingHostNames**: bool
* **overwrite**: bool (Required)
* **recoverConfiguration**: bool
* **recoveryTarget**: [SnapshotRecoveryTarget](#snapshotrecoverytarget)
* **snapshotTime**: string

## SnapshotRecoveryTarget
### Properties
* **id**: string
* **location**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RestoreRequestProperties
### Properties
* **adjustConnectionStrings**: bool
* **appServicePlan**: string
* **blobName**: string
* **databases**: [DatabaseBackupSetting](#databasebackupsetting)[]
* **hostingEnvironment**: string
* **ignoreConflictingHostNames**: bool
* **ignoreDatabases**: bool
* **operationType**: 'Clone' | 'Default' | 'Relocation' | 'Snapshot'
* **overwrite**: bool (Required)
* **siteName**: string
* **storageAccountUrl**: string (Required)

## DatabaseBackupSetting
### Properties
* **connectionString**: string
* **connectionStringName**: string
* **databaseType**: 'LocalMySql' | 'MySql' | 'PostgreSql' | 'SqlAzure' (Required)
* **name**: string

## DeploymentProperties
### Properties
* **active**: bool
* **author**: string
* **authorEmail**: string
* **deployer**: string
* **details**: string
* **endTime**: string
* **id**: string
* **message**: string
* **startTime**: string
* **status**: int

## IdentifierProperties
### Properties
* **id**: string

## MSDeployCore
### Properties
* **appOffline**: bool (WriteOnly)
* **complete**: bool (ReadOnly)
* **connectionString**: string (WriteOnly)
* **dbType**: string (WriteOnly)
* **deployer**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **packageUri**: string (WriteOnly)
* **provisioningState**: 'accepted' | 'canceled' | 'failed' | 'running' | 'succeeded' (ReadOnly)
* **setParameters**: [MSDeployCoreSetParameters](#msdeploycoresetparameters) (WriteOnly)
* **setParametersXmlFileUri**: string (WriteOnly)
* **skipAppData**: bool (WriteOnly)
* **startTime**: string (ReadOnly)

## MSDeployCoreSetParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FunctionEnvelopeProperties
### Properties
* **config**: any
* **configHref**: string
* **files**: [FunctionEnvelopePropertiesFiles](#functionenvelopepropertiesfiles)
* **functionAppId**: string (ReadOnly)
* **href**: string
* **name**: string (ReadOnly)
* **scriptHref**: string
* **scriptRootPathHref**: string
* **secretsFileHref**: string
* **testData**: string

## FunctionEnvelopePropertiesFiles
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HostNameBindingProperties
### Properties
* **azureResourceName**: string
* **azureResourceType**: 'TrafficManager' | 'Website'
* **customHostNameDnsRecordType**: 'A' | 'CName'
* **domainId**: string
* **hostNameType**: 'Managed' | 'Verified'
* **siteName**: string
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled'
* **thumbprint**: string
* **virtualIP**: string (ReadOnly)

## RelayServiceConnectionEntityProperties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## HybridConnectionProperties
### Properties
* **hostname**: string
* **port**: int
* **relayArmUri**: string
* **relayName**: string
* **sendKeyName**: string
* **sendKeyValue**: string
* **serviceBusNamespace**: string
* **serviceBusSuffix**: string

## PremierAddOnProperties
### Properties
* **location**: string
* **marketplaceOffer**: string
* **marketplacePublisher**: string
* **name**: string
* **product**: string
* **sku**: string
* **tags**: [PremierAddOnPropertiesTags](#premieraddonpropertiestags)
* **vendor**: string

## PremierAddOnPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PublicCertificateProperties
### Properties
* **blob**: any
* **publicCertificateLocation**: 'CurrentUserMy' | 'LocalMachineMy' | 'Unknown'
* **thumbprint**: string (ReadOnly)

## SiteExtensionInfoProperties
### Properties
* **authors**: string[] (ReadOnly)
* **comment**: string (ReadOnly)
* **description**: string (ReadOnly)
* **downloadCount**: int (ReadOnly)
* **extensionUrl**: string (ReadOnly)
* **feedUrl**: string (ReadOnly)
* **iconUrl**: string (ReadOnly)
* **id**: string (ReadOnly)
* **installationArgs**: string (ReadOnly)
* **installedDateTime**: string (ReadOnly)
* **licenseUrl**: string (ReadOnly)
* **localIsLatestVersion**: bool (ReadOnly)
* **localPath**: string (ReadOnly)
* **projectUrl**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publishedDateTime**: string (ReadOnly)
* **summary**: string (ReadOnly)
* **title**: string (ReadOnly)
* **type**: 'Gallery' | 'WebRoot' (ReadOnly)
* **version**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SiteSourceControlProperties
### Properties
* **branch**: string
* **deploymentRollbackEnabled**: bool
* **isManualIntegration**: bool
* **isMercurial**: bool
* **repoUrl**: string

## VnetInfoProperties
### Properties
* **certBlob**: any
* **certThumbprint**: string (ReadOnly)
* **dnsServers**: string
* **resyncRequired**: bool (ReadOnly)
* **routes**: [VnetRoute](#vnetroute)[] (ReadOnly)
* **vnetResourceId**: string

## VnetRoute
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [VnetRouteProperties](#vnetrouteproperties)
* **type**: string (ReadOnly)

## VnetRouteProperties
### Properties
* **endAddress**: string
* **name**: string
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC'
* **startAddress**: string

## VnetGatewayProperties
### Properties
* **vnetName**: string
* **vpnPackageUri**: string (Required)

