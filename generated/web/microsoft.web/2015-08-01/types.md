# Microsoft.Web @ 2015-08-01

## Resource Microsoft.Web/certificates@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/csrs@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CsrProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/csrs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HostingEnvironmentProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments/multiRolePools@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkerPoolProperties
* **sku**: SkuDescription
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments/workerPools@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkerPoolProperties
* **sku**: SkuDescription
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/managedHostingEnvironments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HostingEnvironmentProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/managedHostingEnvironments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/publishingUsers@2015-08-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: UserProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/publishingUsers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerFarmWithRichSkuProperties
* **sku**: SkuDescription
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VnetGatewayProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (WriteOnly)
* **location**: string (Required, WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VnetRouteProperties (WriteOnly)
* **tags**: ResourceTags (WriteOnly)
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SiteProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/backups@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RestoreRequestProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/backups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/deployments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hostNameBindings@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HostNameBindingProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hybridconnection@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelayServiceConnectionEntityProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/instances/deployments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/instances/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/premieraddons@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **plan**: ArmPlan (WriteOnly)
* **properties**: any (WriteOnly)
* **sku**: SkuDescription (WriteOnly)
* **tags**: PremierAddOnRequestTags (WriteOnly)
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SiteProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/backups@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RestoreRequestProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/slots/backups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/deployments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hostNameBindings@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HostNameBindingProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hybridconnection@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelayServiceConnectionEntityProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/instances/deployments@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/slots/instances/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/premieraddons@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **plan**: ArmPlan (WriteOnly)
* **properties**: any (WriteOnly)
* **sku**: SkuDescription (WriteOnly)
* **tags**: PremierAddOnRequestTags (WriteOnly)
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/sourcecontrols@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SiteSourceControlProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VnetInfoProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (WriteOnly)
* **location**: string (Required, WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VnetGatewayProperties (WriteOnly)
* **tags**: ResourceTags (WriteOnly)
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/sourcecontrols@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SiteSourceControlProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VnetInfoProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (WriteOnly)
* **location**: string (Required, WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VnetGatewayProperties (WriteOnly)
* **tags**: ResourceTags (WriteOnly)
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sourcecontrols@2015-08-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SourceControlProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Web/sourcecontrols' (ReadOnly, DeployTimeConstant)

## CertificateProperties
### Properties
* **cerBlob**: string
* **expirationDate**: string
* **friendlyName**: string
* **hostingEnvironmentProfile**: HostingEnvironmentProfile
* **hostNames**: string[]
* **issueDate**: string
* **issuer**: string
* **password**: string
* **pfxBlob**: string
* **publicKeyHash**: string
* **selfLink**: string
* **siteName**: string
* **subjectName**: string
* **thumbprint**: string
* **valid**: bool

## HostingEnvironmentProfile
### Properties
* **id**: string
* **name**: string
* **type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CsrProperties
### Properties
* **csrString**: string
* **distinguishedName**: string
* **hostingEnvironment**: string
* **name**: string
* **password**: string
* **pfxBlob**: string
* **publicKeyHash**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HostingEnvironmentProperties
### Properties
* **allowedMultiSizes**: string
* **allowedWorkerSizes**: string
* **apiManagementAccountId**: string
* **clusterSettings**: NameValuePair[]
* **databaseEdition**: string
* **databaseServiceObjective**: string
* **dnsSuffix**: string
* **environmentCapacities**: StampCapacity[]
* **environmentIsHealthy**: bool
* **environmentStatus**: string
* **internalLoadBalancingMode**: 'None' | 'Publishing' | 'Web'
* **ipsslAddressCount**: int
* **lastAction**: string
* **lastActionResult**: string
* **location**: string
* **maximumNumberOfMachines**: int
* **multiRoleCount**: int
* **multiSize**: string
* **name**: string
* **networkAccessControlList**: NetworkAccessControlEntry[]
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded'
* **resourceGroup**: string
* **status**: 'Deleting' | 'Preparing' | 'Ready' | 'Scaling' (Required)
* **subscriptionId**: string
* **suspended**: bool
* **upgradeDomains**: int
* **vipMappings**: VirtualIPMapping[]
* **virtualNetwork**: VirtualNetworkProfile
* **vnetName**: string
* **vnetResourceGroupName**: string
* **vnetSubnetName**: string
* **workerPools**: WorkerPool[]

## NameValuePair
### Properties
* **name**: string
* **value**: string

## StampCapacity
### Properties
* **availableCapacity**: int
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared'
* **excludeFromCapacityAllocation**: bool
* **isApplicableForAllComputeModes**: bool
* **name**: string
* **siteMode**: string
* **totalCapacity**: int
* **unit**: string
* **workerSize**: 'Default' | 'Large' | 'Medium' | 'Small'
* **workerSizeId**: int

## NetworkAccessControlEntry
### Properties
* **action**: 'Deny' | 'Permit'
* **description**: string
* **order**: int
* **remoteSubnet**: string

## VirtualIPMapping
### Properties
* **internalHttpPort**: int
* **internalHttpsPort**: int
* **inUse**: bool
* **virtualIP**: string

## VirtualNetworkProfile
### Properties
* **id**: string
* **name**: string
* **subnet**: string
* **type**: string

## WorkerPool
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: WorkerPoolProperties
* **sku**: SkuDescription
* **tags**: ResourceTags
* **type**: string

## WorkerPoolProperties
### Properties
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared'
* **instanceNames**: string[]
* **workerCount**: int
* **workerSize**: string
* **workerSizeId**: int

## SkuDescription
### Properties
* **capacity**: int
* **family**: string
* **name**: string
* **size**: string
* **tier**: string

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

## UserProperties
### Properties
* **name**: string
* **publishingPassword**: string
* **publishingUserName**: string
* **scmUri**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerFarmWithRichSkuProperties
### Properties
* **adminSiteName**: string
* **geoRegion**: string (ReadOnly)
* **hostingEnvironmentProfile**: HostingEnvironmentProfile
* **maximumNumberOfWorkers**: int
* **name**: string
* **numberOfSites**: int (ReadOnly)
* **perSiteScaling**: bool
* **reserved**: bool
* **resourceGroup**: string (ReadOnly)
* **status**: 'Pending' | 'Ready' (Required, ReadOnly)
* **subscription**: string (ReadOnly)
* **workerTierName**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VnetGatewayProperties
### Properties
* **vnetName**: string
* **vpnPackageUri**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VnetRouteProperties
### Properties
* **endAddress**: string (WriteOnly)
* **name**: string (WriteOnly)
* **routeType**: string (WriteOnly)
* **startAddress**: string (WriteOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SiteProperties
### Properties
* **availabilityState**: 'DisasterRecoveryMode' | 'Limited' | 'Normal' (Required, ReadOnly)
* **clientAffinityEnabled**: bool
* **clientCertEnabled**: bool
* **cloningInfo**: CloningInfo
* **containerSize**: int
* **defaultHostName**: string (ReadOnly)
* **enabled**: bool
* **enabledHostNames**: string[] (ReadOnly)
* **gatewaySiteName**: string
* **hostingEnvironmentProfile**: HostingEnvironmentProfile
* **hostNames**: string[] (ReadOnly)
* **hostNamesDisabled**: bool
* **hostNameSslStates**: HostNameSslState[]
* **isDefaultContainer**: bool (ReadOnly)
* **lastModifiedTimeUtc**: string (ReadOnly)
* **maxNumberOfWorkers**: int
* **microService**: string
* **name**: string
* **outboundIpAddresses**: string (ReadOnly)
* **premiumAppDeployed**: bool (ReadOnly)
* **repositorySiteName**: string (ReadOnly)
* **resourceGroup**: string (ReadOnly)
* **scmSiteAlsoStopped**: bool
* **serverFarmId**: string
* **siteConfig**: SiteConfig
* **state**: string (ReadOnly)
* **targetSwapSlot**: string (ReadOnly)
* **trafficManagerHostNames**: string[] (ReadOnly)
* **usageState**: 'Exceeded' | 'Normal' (Required, ReadOnly)

## CloningInfo
### Properties
* **appSettingsOverrides**: CloningInfoAppSettingsOverrides
* **cloneCustomHostNames**: bool
* **cloneSourceControl**: bool
* **configureLoadBalancing**: bool
* **correlationId**: string
* **hostingEnvironment**: string
* **overwrite**: bool
* **sourceWebAppId**: string
* **trafficManagerProfileId**: string
* **trafficManagerProfileName**: string

## CloningInfoAppSettingsOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HostNameSslState
### Properties
* **name**: string
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled' (Required)
* **thumbprint**: string
* **toUpdate**: bool
* **virtualIP**: string

## SiteConfig
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: SiteConfigProperties
* **tags**: ResourceTags
* **type**: string

## SiteConfigProperties
### Properties
* **alwaysOn**: bool
* **apiDefinition**: ApiDefinitionInfo
* **appCommandLine**: string
* **appSettings**: NameValuePair[]
* **autoHealEnabled**: bool
* **autoHealRules**: AutoHealRules
* **autoSwapSlotName**: string
* **connectionStrings**: ConnStringInfo[]
* **cors**: CorsSettings
* **defaultDocuments**: string[]
* **detailedErrorLoggingEnabled**: bool
* **documentRoot**: string
* **experiments**: Experiments
* **handlerMappings**: HandlerMapping[]
* **httpLoggingEnabled**: bool
* **ipSecurityRestrictions**: IpSecurityRestriction[]
* **javaContainer**: string
* **javaContainerVersion**: string
* **javaVersion**: string
* **limits**: SiteLimits
* **loadBalancing**: 'LeastRequests' | 'LeastResponseTime' | 'RequestHash' | 'WeightedRoundRobin' | 'WeightedTotalTraffic'
* **localMySqlEnabled**: bool
* **logsDirectorySizeLimit**: int
* **managedPipelineMode**: 'Classic' | 'Integrated'
* **metadata**: NameValuePair[]
* **netFrameworkVersion**: string
* **nodeVersion**: string
* **numberOfWorkers**: int
* **phpVersion**: string
* **publishingPassword**: string
* **publishingUsername**: string
* **pythonVersion**: string
* **remoteDebuggingEnabled**: bool
* **remoteDebuggingVersion**: string
* **requestTracingEnabled**: bool
* **requestTracingExpirationTime**: string
* **scmType**: string
* **tracingOptions**: string
* **use32BitWorkerProcess**: bool
* **virtualApplications**: VirtualApplication[]
* **vnetName**: string
* **webSocketsEnabled**: bool

## ApiDefinitionInfo
### Properties
* **url**: string

## AutoHealRules
### Properties
* **actions**: AutoHealActions
* **triggers**: AutoHealTriggers

## AutoHealActions
### Properties
* **actionType**: 'CustomAction' | 'LogEvent' | 'Recycle' (Required)
* **customAction**: AutoHealCustomAction
* **minProcessExecutionTime**: string

## AutoHealCustomAction
### Properties
* **exe**: string
* **parameters**: string

## AutoHealTriggers
### Properties
* **privateBytesInKB**: int
* **requests**: RequestsBasedTrigger
* **slowRequests**: SlowRequestsBasedTrigger
* **statusCodes**: StatusCodesBasedTrigger[]

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
* **type**: 'Custom' | 'MySql' | 'SQLAzure' | 'SQLServer' (Required)

## CorsSettings
### Properties
* **allowedOrigins**: string[]

## Experiments
### Properties
* **rampUpRules**: RampUpRule[]

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
* **ipAddress**: string
* **subnetMask**: string

## SiteLimits
### Properties
* **maxDiskSizeInMb**: int
* **maxMemoryInMb**: int
* **maxPercentageCpu**: int

## VirtualApplication
### Properties
* **physicalPath**: string
* **preloadEnabled**: bool
* **virtualDirectories**: VirtualDirectory[]
* **virtualPath**: string

## VirtualDirectory
### Properties
* **physicalPath**: string
* **virtualPath**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RestoreRequestProperties
### Properties
* **adjustConnectionStrings**: bool
* **blobName**: string
* **databases**: DatabaseBackupSetting[]
* **hostingEnvironment**: string
* **ignoreConflictingHostNames**: bool
* **operationType**: 'Clone' | 'Default' | 'Relocation' (Required)
* **overwrite**: bool
* **siteName**: string
* **storageAccountUrl**: string

## DatabaseBackupSetting
### Properties
* **connectionString**: string
* **connectionStringName**: string
* **databaseType**: string
* **name**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeploymentProperties
### Properties
* **active**: bool
* **author**: string
* **author_email**: string
* **deployer**: string
* **details**: string
* **end_time**: string
* **id**: string
* **message**: string
* **start_time**: string
* **status**: int

## ResourceTags
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
* **name**: string
* **siteName**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RelayServiceConnectionEntityProperties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ArmPlan
### Properties
* **name**: string (WriteOnly)
* **product**: string (WriteOnly)
* **promotionCode**: string (WriteOnly)
* **publisher**: string (WriteOnly)
* **version**: string (WriteOnly)

## PremierAddOnRequestTags
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

## PremierAddOnRequestTags
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VnetInfoProperties
### Properties
* **certBlob**: string
* **certThumbprint**: string
* **dnsServers**: string
* **resyncRequired**: bool
* **routes**: VnetRoute[]
* **vnetResourceId**: string

## VnetRoute
### Properties
* **id**: string
* **kind**: string
* **location**: string (Required)
* **name**: string
* **properties**: VnetRouteProperties
* **tags**: ResourceTags
* **type**: string

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

## SourceControlProperties
### Properties
* **expirationTime**: string
* **name**: string
* **refreshToken**: string
* **token**: string
* **tokenSecret**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

