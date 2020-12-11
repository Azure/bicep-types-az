# Microsoft.Web @ 2018-02-01

## Resource Microsoft.Web/certificates@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:249_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AppServiceEnvironment
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments/multiRolePools@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkerPool
* **sku**: SkuDescription
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments/workerPools@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkerPool
* **sku**: SkuDescription
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/publishingUsers@2018-02-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: schemas:67_properties
* **type**: 'Microsoft.Web/publishingUsers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:2_properties
* **sku**: SkuDescription
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:72_properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:74_properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:56_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/config@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: Dictionary<string,String>
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/deployments@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:175_properties
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/domainOwnershipIdentifiers@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:30_properties
* **type**: 'Microsoft.Web/sites/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/extensions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MSDeployCore
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/functions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:180_properties
* **type**: 'Microsoft.Web/sites/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/functions/keys@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Web/sites/functions/keys' (ReadOnly, DeployTimeConstant)
* **value**: string

## Resource Microsoft.Web/sites/hostNameBindings@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:184_properties
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hybridconnection@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:214_properties
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hybridConnectionNamespaces/relays@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:28_properties
* **type**: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/instances/extensions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MSDeployCore
* **type**: 'Microsoft.Web/sites/instances/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/migrate@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:237_properties
* **type**: 'Microsoft.Web/sites/migrate' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/networkConfig@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:240_properties
* **type**: 'Microsoft.Web/sites/networkConfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/premieraddons@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:201_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/privateAccess@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:203_properties
* **type**: 'Microsoft.Web/sites/privateAccess' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/publicCertificates@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:212_properties
* **type**: 'Microsoft.Web/sites/publicCertificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedServiceIdentity
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:56_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/config@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: Dictionary<string,String>
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/deployments@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:175_properties
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:30_properties
* **type**: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/extensions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MSDeployCore
* **type**: 'Microsoft.Web/sites/slots/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/functions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:180_properties
* **type**: 'Microsoft.Web/sites/slots/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/functions/keys@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Web/sites/slots/functions/keys' (ReadOnly, DeployTimeConstant)
* **value**: string

## Resource Microsoft.Web/sites/slots/hostNameBindings@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:184_properties
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hybridconnection@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:214_properties
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:28_properties
* **type**: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/instances/extensions@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MSDeployCore
* **type**: 'Microsoft.Web/sites/slots/instances/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/networkConfig@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:240_properties
* **type**: 'Microsoft.Web/sites/slots/networkConfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/premieraddons@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:201_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/privateAccess@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:203_properties
* **type**: 'Microsoft.Web/sites/slots/privateAccess' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/publicCertificates@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:212_properties
* **type**: 'Microsoft.Web/sites/slots/publicCertificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/sourcecontrols@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:229_properties
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:73_properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:72_properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/sourcecontrols@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:229_properties
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:73_properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:72_properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sourcecontrols@2018-02-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:121_properties
* **type**: 'Microsoft.Web/sourcecontrols' (ReadOnly, DeployTimeConstant)

## schemas:249_properties
### Properties
* **cerBlob**: array (ReadOnly)
* **expirationDate**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **hostingEnvironmentProfile**: HostingEnvironmentProfile (ReadOnly)
* **hostNames**: string[]
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

## AppServiceEnvironment
### Properties
* **allowedMultiSizes**: string (ReadOnly)
* **allowedWorkerSizes**: string (ReadOnly)
* **apiManagementAccountId**: string
* **clusterSettings**: NameValuePair[]
* **databaseEdition**: string (ReadOnly)
* **databaseServiceObjective**: string (ReadOnly)
* **defaultFrontEndScaleFactor**: int (ReadOnly)
* **dnsSuffix**: string
* **dynamicCacheEnabled**: bool
* **environmentCapacities**: StampCapacity[] (ReadOnly)
* **environmentIsHealthy**: bool (ReadOnly)
* **environmentStatus**: string (ReadOnly)
* **frontEndScaleFactor**: int
* **hasLinuxWorkers**: bool
* **internalLoadBalancingMode**: 'None' | 'Publishing' | 'Web'
* **ipsslAddressCount**: int
* **lastAction**: string (ReadOnly)
* **lastActionResult**: string (ReadOnly)
* **location**: string (Required)
* **maximumNumberOfMachines**: int (ReadOnly)
* **multiRoleCount**: int
* **multiSize**: string
* **name**: string (Required)
* **networkAccessControlList**: NetworkAccessControlEntry[]
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **resourceGroup**: string (ReadOnly)
* **sslCertKeyVaultId**: string
* **sslCertKeyVaultSecretName**: string
* **status**: 'Deleting' | 'Preparing' | 'Ready' | 'Scaling' (ReadOnly)
* **subscriptionId**: string (ReadOnly)
* **suspended**: bool
* **upgradeDomains**: int (ReadOnly)
* **userWhitelistedIpRanges**: string[]
* **vipMappings**: VirtualIPMapping[] (ReadOnly)
* **virtualNetwork**: VirtualNetworkProfile (Required)
* **vnetName**: string
* **vnetResourceGroupName**: string
* **vnetSubnetName**: string
* **workerPools**: WorkerPool[] (Required)

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
* **isLinux**: bool
* **name**: string
* **siteMode**: string
* **totalCapacity**: int
* **unit**: string
* **workerSize**: 'D1' | 'D2' | 'D3' | 'Default' | 'Large' | 'Medium' | 'Small'
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
* **name**: string (ReadOnly)
* **subnet**: string
* **type**: string (ReadOnly)

## WorkerPool
### Properties
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared'
* **instanceNames**: string[] (ReadOnly)
* **workerCount**: int
* **workerSize**: string
* **workerSizeId**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## SkuDescription
### Properties
* **capabilities**: Capability[]
* **capacity**: int
* **family**: string
* **locations**: string[]
* **name**: string
* **size**: string
* **skuCapacity**: SkuCapacity
* **tier**: string

## Capability
### Properties
* **name**: string
* **reason**: string
* **value**: string

## SkuCapacity
### Properties
* **default**: int
* **maximum**: int
* **minimum**: int
* **scaleType**: string

## schemas:67_properties
### Properties
* **publishingPassword**: string
* **publishingPasswordHash**: string
* **publishingPasswordHashSalt**: string
* **publishingUserName**: string (Required)
* **scmUri**: string

## schemas:2_properties
### Properties
* **freeOfferExpirationTime**: string
* **geoRegion**: string (ReadOnly)
* **hostingEnvironmentProfile**: HostingEnvironmentProfile
* **hyperV**: bool
* **isSpot**: bool
* **isXenon**: bool
* **maximumElasticWorkerCount**: int
* **maximumNumberOfWorkers**: int (ReadOnly)
* **numberOfSites**: int (ReadOnly)
* **perSiteScaling**: bool
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **reserved**: bool
* **resourceGroup**: string (ReadOnly)
* **spotExpirationTime**: string
* **status**: 'Creating' | 'Pending' | 'Ready' (ReadOnly)
* **subscription**: string (ReadOnly)
* **targetWorkerCount**: int
* **targetWorkerSizeId**: int
* **workerTierName**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:72_properties
### Properties
* **vnetName**: string
* **vpnPackageUri**: string (Required)

## schemas:74_properties
### Properties
* **endAddress**: string
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC'
* **startAddress**: string

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,Schemas35UserAssignedIdentitiesValue>

## Dictionary<string,Schemas35UserAssignedIdentitiesValue>
### Additional Properties
* **Additional Properties Type**: schemas:35_userAssignedIdentitiesValue

## schemas:35_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## schemas:56_properties
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
* **hostingEnvironmentProfile**: HostingEnvironmentProfile
* **hostNames**: string[] (ReadOnly)
* **hostNamesDisabled**: bool
* **hostNameSslStates**: HostNameSslState[]
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
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'ServiceBus' | 'SQLAzure' | 'SQLServer'

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
* **properties**: schemas:43_properties
* **type**: string (ReadOnly)

## schemas:43_properties
### Properties
* **dynamicTagsJson**: string
* **isPushEnabled**: bool (Required)
* **tagsRequiringAuth**: string
* **tagWhitelistJson**: string

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:175_properties
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

## schemas:30_properties
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
* **setParameters**: Dictionary<string,String> (WriteOnly)
* **setParametersXmlFileUri**: string (WriteOnly)
* **skipAppData**: bool (WriteOnly)
* **startTime**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:180_properties
### Properties
* **config**: any
* **config_href**: string
* **files**: Dictionary<string,String>
* **function_app_id**: string
* **href**: string
* **invoke_url_template**: string
* **isDisabled**: bool
* **language**: string
* **script_href**: string
* **script_root_path_href**: string
* **secrets_file_href**: string
* **test_data**: string
* **test_data_href**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:184_properties
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

## schemas:214_properties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## schemas:28_properties
### Properties
* **hostname**: string
* **port**: int
* **relayArmUri**: string
* **relayName**: string
* **sendKeyName**: string
* **sendKeyValue**: string
* **serviceBusNamespace**: string
* **serviceBusSuffix**: string

## schemas:237_properties
### Properties
* **azurefilesConnectionString**: string (Required)
* **azurefilesShare**: string (Required)
* **blockWriteAccessToSite**: bool
* **switchSiteAfterMigration**: bool

## schemas:240_properties
### Properties
* **subnetResourceId**: string
* **swiftSupported**: bool

## schemas:201_properties
### Properties
* **marketplaceOffer**: string
* **marketplacePublisher**: string
* **product**: string
* **sku**: string
* **vendor**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:203_properties
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

## schemas:212_properties
### Properties
* **blob**: array
* **publicCertificateLocation**: 'CurrentUserMy' | 'LocalMachineMy' | 'Unknown'
* **thumbprint**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:229_properties
### Properties
* **branch**: string
* **deploymentRollbackEnabled**: bool
* **isManualIntegration**: bool
* **isMercurial**: bool
* **repoUrl**: string

## schemas:73_properties
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
* **properties**: schemas:74_properties
* **type**: string (ReadOnly)

## schemas:121_properties
### Properties
* **expirationTime**: string
* **refreshToken**: string
* **token**: string
* **tokenSecret**: string

