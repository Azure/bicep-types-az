# Microsoft.Web @ 2016-09-01

## Microsoft.Web/hostingEnvironments
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AppServiceEnvironment
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant)

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

## Microsoft.Web/hostingEnvironments/multiRolePools
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkerPool
* **sku**: SkuDescription
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant)

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

## Microsoft.Web/hostingEnvironments/workerPools
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkerPool
* **sku**: SkuDescription
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/serverfarms
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:20_properties
* **sku**: SkuDescription
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant)

## schemas:20_properties
### Properties
* **adminSiteName**: string
* **geoRegion**: string (ReadOnly)
* **hostingEnvironmentProfile**: HostingEnvironmentProfile
* **isSpot**: bool
* **maximumNumberOfWorkers**: int (ReadOnly)
* **name**: string (Required)
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

## HostingEnvironmentProfile
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/serverfarms/virtualNetworkConnections/gateways
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:87_properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## schemas:87_properties
### Properties
* **vnetName**: string
* **vpnPackageUri**: string (Required)

## Microsoft.Web/serverfarms/virtualNetworkConnections/routes
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:89_properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant)

## schemas:89_properties
### Properties
* **endAddress**: string
* **name**: string
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC'
* **startAddress**: string

