# Microsoft.Web @ 2018-11-01

## Microsoft.Web/certificates
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:0_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant)

## schemas:0_properties
### Properties
* **cerBlob**: array (ReadOnly)
* **expirationDate**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **hostNames**: string[]
* **hostingEnvironmentProfile**: HostingEnvironmentProfile (ReadOnly)
* **issueDate**: string (ReadOnly)
* **issuer**: string (ReadOnly)
* **keyVaultId**: string
* **keyVaultSecretName**: string
* **keyVaultSecretStatus**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly)
* **password**: string (Required)
* **pfxBlob**: array
* **publicKeyHash**: string (ReadOnly)
* **selfLink**: string (ReadOnly)
* **serverFarmId**: string
* **siteName**: string (ReadOnly)
* **subjectName**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **valid**: bool (ReadOnly)

## HostingEnvironmentProfile
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/deployments
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:21_properties
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant)

## schemas:21_properties
### Properties
* **active**: bool
* **author**: string
* **author_email**: string
* **deployer**: string
* **details**: string
* **end_time**: string
* **message**: string
* **start_time**: string
* **status**: int

## Microsoft.Web/sites/domainOwnershipIdentifiers
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:123_properties
* **type**: 'Microsoft.Web/sites/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## schemas:123_properties
### Properties
* **id**: string

## Microsoft.Web/sites/extensions
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MSDeployCore
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant)

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
* **setParameters**: Dictionary<string,String> (WriteOnly)
* **setParametersXmlFileUri**: string (WriteOnly)
* **skipAppData**: bool (WriteOnly)
* **startTime**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/functions
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:26_properties
* **type**: 'Microsoft.Web/sites/functions' (ReadOnly, DeployTimeConstant)

## schemas:26_properties
### Properties
* **config**: any
* **config_href**: string
* **files**: Dictionary<string,String>
* **function_app_id**: string
* **href**: string
* **script_href**: string
* **script_root_path_href**: string
* **secrets_file_href**: string
* **test_data**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/hostNameBindings
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:29_properties
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant)

## schemas:29_properties
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

## Microsoft.Web/sites/hybridConnectionNamespaces/relays
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:121_properties
* **type**: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## schemas:121_properties
### Properties
* **hostname**: string
* **port**: int
* **relayArmUri**: string
* **relayName**: string
* **sendKeyName**: string
* **sendKeyValue**: string
* **serviceBusNamespace**: string
* **serviceBusSuffix**: string

## Microsoft.Web/sites/hybridconnection
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:58_properties
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant)

## schemas:58_properties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## Microsoft.Web/sites/instances/extensions
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MSDeployCore
* **type**: 'Microsoft.Web/sites/instances/extensions' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/migrate
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:81_properties
* **type**: 'Microsoft.Web/sites/migrate' (ReadOnly, DeployTimeConstant)

## schemas:81_properties
### Properties
* **azurefilesConnectionString**: string (Required)
* **azurefilesShare**: string (Required)
* **blockWriteAccessToSite**: bool
* **switchSiteAfterMigration**: bool

## Microsoft.Web/sites/networkConfig
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:84_properties
* **type**: 'Microsoft.Web/sites/networkConfig' (ReadOnly, DeployTimeConstant)

## schemas:84_properties
### Properties
* **subnetResourceId**: string
* **swiftSupported**: bool

## Microsoft.Web/sites/premieraddons
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:45_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant)

## schemas:45_properties
### Properties
* **marketplaceOffer**: string
* **marketplacePublisher**: string
* **product**: string
* **sku**: string
* **vendor**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/privateAccess
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:47_properties
* **type**: 'Microsoft.Web/sites/privateAccess' (ReadOnly, DeployTimeConstant)

## schemas:47_properties
### Properties
* **enabled**: bool
* **virtualNetworks**: PrivateAccessVirtualNetwork[]

## PrivateAccessVirtualNetwork
### Properties
* **key**: int
* **name**: string
* **resourceId**: string
* **subnets**: PrivateAccessSubnet[]

## PrivateAccessSubnet
### Properties
* **key**: int
* **name**: string

## Microsoft.Web/sites/publicCertificates
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:56_properties
* **type**: 'Microsoft.Web/sites/publicCertificates' (ReadOnly, DeployTimeConstant)

## schemas:56_properties
### Properties
* **blob**: array
* **publicCertificateLocation**: 'CurrentUserMy' | 'LocalMachineMy' | 'Unknown'
* **thumbprint**: string (ReadOnly)

## Microsoft.Web/sites/slots/deployments
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:21_properties
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/domainOwnershipIdentifiers
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:123_properties
* **type**: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/extensions
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MSDeployCore
* **type**: 'Microsoft.Web/sites/slots/extensions' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/functions
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:26_properties
* **type**: 'Microsoft.Web/sites/slots/functions' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/hostNameBindings
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:29_properties
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:121_properties
* **type**: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/hybridconnection
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:58_properties
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/instances/extensions
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MSDeployCore
* **type**: 'Microsoft.Web/sites/slots/instances/extensions' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/networkConfig
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:84_properties
* **type**: 'Microsoft.Web/sites/slots/networkConfig' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/premieraddons
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:45_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/slots/privateAccess
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:47_properties
* **type**: 'Microsoft.Web/sites/slots/privateAccess' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/publicCertificates
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:56_properties
* **type**: 'Microsoft.Web/sites/slots/publicCertificates' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/sourcecontrols
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:73_properties
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant)

## schemas:73_properties
### Properties
* **branch**: string
* **deploymentRollbackEnabled**: bool
* **isManualIntegration**: bool
* **isMercurial**: bool
* **repoUrl**: string

## Microsoft.Web/sites/slots/virtualNetworkConnections/gateways
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:165_properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## schemas:165_properties
### Properties
* **vnetName**: string
* **vpnPackageUri**: string (Required)

## Microsoft.Web/sites/slots/virtualNetworkConnections
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:166_properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## schemas:166_properties
### Properties
* **certBlob**: string
* **certThumbprint**: string (ReadOnly)
* **dnsServers**: string
* **isSwift**: bool
* **resyncRequired**: bool (ReadOnly)
* **routes**: VnetRoute[] (ReadOnly)
* **vnetResourceId**: string

## VnetRoute
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: schemas:167_properties
* **type**: string (ReadOnly)

## schemas:167_properties
### Properties
* **endAddress**: string
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC'
* **startAddress**: string

## Microsoft.Web/sites/slots
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:149_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant)

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,Schemas128UserAssignedIdentitiesValue>

## Dictionary<string,Schemas128UserAssignedIdentitiesValue>
### Additional Properties
* **Additional Properties Type**: schemas:128_userAssignedIdentitiesValue

## schemas:128_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## schemas:149_properties
### Properties
* **availabilityState**: 'DisasterRecoveryMode' | 'Limited' | 'Normal' (ReadOnly)
* **clientAffinityEnabled**: bool
* **clientCertEnabled**: bool
* **clientCertExclusionPaths**: string
* **cloningInfo**: CloningInfo
* **containerSize**: int
* **dailyMemoryTimeQuota**: int
* **defaultHostName**: string (ReadOnly)
* **enabled**: bool
* **enabledHostNames**: string[] (ReadOnly)
* **geoDistributions**: GeoDistribution[]
* **hostNameSslStates**: HostNameSslState[]
* **hostNames**: string[] (ReadOnly)
* **hostNamesDisabled**: bool
* **hostingEnvironmentProfile**: HostingEnvironmentProfile
* **httpsOnly**: bool
* **hyperV**: bool
* **inProgressOperationId**: string (ReadOnly)
* **isDefaultContainer**: bool (ReadOnly)
* **isXenon**: bool
* **lastModifiedTimeUtc**: string (ReadOnly)
* **maxNumberOfWorkers**: int (ReadOnly)
* **outboundIpAddresses**: string (ReadOnly)
* **possibleOutboundIpAddresses**: string (ReadOnly)
* **redundancyMode**: 'ActiveActive' | 'Failover' | 'GeoRedundant' | 'Manual' | 'None'
* **repositorySiteName**: string (ReadOnly)
* **reserved**: bool
* **resourceGroup**: string (ReadOnly)
* **scmSiteAlsoStopped**: bool
* **serverFarmId**: string
* **siteConfig**: SiteConfig
* **slotSwapStatus**: SlotSwapStatus (ReadOnly)
* **state**: string (ReadOnly)
* **suspendedTill**: string (ReadOnly)
* **targetSwapSlot**: string (ReadOnly)
* **trafficManagerHostNames**: string[] (ReadOnly)
* **usageState**: 'Exceeded' | 'Normal' (ReadOnly)

## CloningInfo
### Properties
* **appSettingsOverrides**: Dictionary<string,String>
* **cloneCustomHostNames**: bool
* **cloneSourceControl**: bool
* **configureLoadBalancing**: bool
* **correlationId**: string
* **hostingEnvironment**: string
* **overwrite**: bool
* **sourceWebAppId**: string (Required)
* **sourceWebAppLocation**: string
* **trafficManagerProfileId**: string
* **trafficManagerProfileName**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## GeoDistribution
### Properties
* **location**: string
* **numberOfWorkers**: int

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
* **apiDefinition**: ApiDefinitionInfo
* **appCommandLine**: string
* **appSettings**: NameValuePair[]
* **autoHealEnabled**: bool
* **autoHealRules**: AutoHealRules
* **autoSwapSlotName**: string
* **azureStorageAccounts**: Dictionary<string,AzureStorageInfoValue>
* **connectionStrings**: ConnStringInfo[]
* **cors**: CorsSettings
* **defaultDocuments**: string[]
* **detailedErrorLoggingEnabled**: bool
* **documentRoot**: string
* **experiments**: Experiments
* **ftpsState**: 'AllAllowed' | 'Disabled' | 'FtpsOnly'
* **handlerMappings**: HandlerMapping[]
* **http20Enabled**: bool
* **httpLoggingEnabled**: bool
* **ipSecurityRestrictions**: IpSecurityRestriction[]
* **javaContainer**: string
* **javaContainerVersion**: string
* **javaVersion**: string
* **limits**: SiteLimits
* **linuxFxVersion**: string
* **loadBalancing**: 'LeastRequests' | 'LeastResponseTime' | 'RequestHash' | 'WeightedRoundRobin' | 'WeightedTotalTraffic'
* **localMySqlEnabled**: bool
* **logsDirectorySizeLimit**: int
* **machineKey**: SiteMachineKey (ReadOnly)
* **managedPipelineMode**: 'Classic' | 'Integrated'
* **managedServiceIdentityId**: int
* **minTlsVersion**: '1.0' | '1.1' | '1.2'
* **netFrameworkVersion**: string
* **nodeVersion**: string
* **numberOfWorkers**: int
* **phpVersion**: string
* **publishingUsername**: string
* **push**: PushSettings
* **pythonVersion**: string
* **remoteDebuggingEnabled**: bool
* **remoteDebuggingVersion**: string
* **requestTracingEnabled**: bool
* **requestTracingExpirationTime**: string
* **reservedInstanceCount**: int
* **scmIpSecurityRestrictions**: IpSecurityRestriction[]
* **scmIpSecurityRestrictionsUseMain**: bool
* **scmType**: 'BitbucketGit' | 'BitbucketHg' | 'CodePlexGit' | 'CodePlexHg' | 'Dropbox' | 'ExternalGit' | 'ExternalHg' | 'GitHub' | 'LocalGit' | 'None' | 'OneDrive' | 'Tfs' | 'VSO'
* **tracingOptions**: string
* **use32BitWorkerProcess**: bool
* **virtualApplications**: VirtualApplication[]
* **vnetName**: string
* **webSocketsEnabled**: bool
* **windowsFxVersion**: string
* **xManagedServiceIdentityId**: int

## ApiDefinitionInfo
### Properties
* **url**: string

## NameValuePair
### Properties
* **name**: string
* **value**: string

## AutoHealRules
### Properties
* **actions**: AutoHealActions
* **triggers**: AutoHealTriggers

## AutoHealActions
### Properties
* **actionType**: 'CustomAction' | 'LogEvent' | 'Recycle'
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

## Dictionary<string,AzureStorageInfoValue>
### Additional Properties
* **Additional Properties Type**: AzureStorageInfoValue

## AzureStorageInfoValue
### Properties
* **accessKey**: string
* **accountName**: string
* **mountPath**: string
* **shareName**: string
* **state**: 'InvalidCredentials' | 'InvalidShare' | 'Ok' (ReadOnly)
* **type**: 'AzureBlob' | 'AzureFiles'

## ConnStringInfo
### Properties
* **connectionString**: string
* **name**: string
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus'

## CorsSettings
### Properties
* **allowedOrigins**: string[]
* **supportCredentials**: bool

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
* **action**: string
* **description**: string
* **ipAddress**: string
* **name**: string
* **priority**: int
* **subnetMask**: string
* **subnetTrafficTag**: int
* **tag**: 'Default' | 'XffProxy'
* **vnetSubnetResourceId**: string
* **vnetTrafficTag**: int

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
* **properties**: schemas:136_properties
* **type**: string (ReadOnly)

## schemas:136_properties
### Properties
* **dynamicTagsJson**: string
* **isPushEnabled**: bool (Required)
* **tagWhitelistJson**: string
* **tagsRequiringAuth**: string

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

## SlotSwapStatus
### Properties
* **destinationSlotName**: string (ReadOnly)
* **sourceSlotName**: string (ReadOnly)
* **timestampUtc**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/sourcecontrols
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:73_properties
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/virtualNetworkConnections/gateways
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:165_properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/virtualNetworkConnections
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:166_properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:149_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

