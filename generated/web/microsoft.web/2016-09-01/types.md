# Microsoft.Web @ 2016-09-01

## Resource Microsoft.Web/hostingEnvironments@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AppServiceEnvironment](#appserviceenvironment)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments/multiRolePools@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [WorkerPool](#workerpool)
* **sku**: [SkuDescription](#skudescription)
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments/workerPools@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkerPool](#workerpool)
* **sku**: [SkuDescription](#skudescription)
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AppServicePlanProperties](#appserviceplanproperties)
* **sku**: [SkuDescription](#skudescription)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties)
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetRouteProperties](#vnetrouteproperties) (WriteOnly)
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant)

## AppServiceEnvironment
### Properties
* **allowedMultiSizes**: string (ReadOnly)
* **allowedWorkerSizes**: string (ReadOnly)
* **apiManagementAccountId**: string
* **clusterSettings**: [NameValuePair](#namevaluepair)[]
* **databaseEdition**: string (ReadOnly)
* **databaseServiceObjective**: string (ReadOnly)
* **defaultFrontEndScaleFactor**: int (ReadOnly)
* **dnsSuffix**: string
* **dynamicCacheEnabled**: bool
* **environmentCapacities**: [StampCapacity](#stampcapacity)[] (ReadOnly)
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
* **networkAccessControlList**: [NetworkAccessControlEntry](#networkaccesscontrolentry)[]
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **resourceGroup**: string (ReadOnly)
* **status**: 'Deleting' | 'Preparing' | 'Ready' | 'Scaling' (ReadOnly)
* **subscriptionId**: string (ReadOnly)
* **suspended**: bool
* **upgradeDomains**: int (ReadOnly)
* **userWhitelistedIpRanges**: string[]
* **vipMappings**: [VirtualIPMapping](#virtualipmapping)[] (ReadOnly)
* **virtualNetwork**: [VirtualNetworkProfile](#virtualnetworkprofile) (Required)
* **vnetName**: string
* **vnetResourceGroupName**: string
* **vnetSubnetName**: string
* **workerPools**: [WorkerPool](#workerpool)[] (Required)

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SkuDescription
### Properties
* **capabilities**: [Capability](#capability)[]
* **capacity**: int
* **family**: string
* **locations**: string[]
* **name**: string
* **size**: string
* **skuCapacity**: [SkuCapacity](#skucapacity)
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

## AppServicePlanProperties
### Properties
* **adminSiteName**: string
* **geoRegion**: string (ReadOnly)
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile)
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VnetGatewayProperties
### Properties
* **vnetName**: string
* **vpnPackageUri**: string (Required)

## VnetRouteProperties
### Properties
* **endAddress**: string (WriteOnly)
* **name**: string (WriteOnly)
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC' (WriteOnly)
* **startAddress**: string (WriteOnly)

