# Microsoft.Migrate @ 2021-01-01

## Resource Microsoft.Migrate/moveCollections@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MoveCollectionProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Migrate/moveCollections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Migrate/moveCollections/moveResources@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MoveResourceProperties
* **type**: 'Microsoft.Migrate/moveCollections/moveResources' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned'

## MoveCollectionProperties
### Properties
* **errors**: schemas:18_errors (ReadOnly)
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating'
* **sourceRegion**: string (Required)
* **targetRegion**: string (Required)

## schemas:18_errors
### Properties
* **properties**: MoveResourceErrorBody

## MoveResourceErrorBody
### Properties
* **code**: string (ReadOnly)
* **details**: MoveResourceErrorBody[] (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MoveResourceProperties
### Properties
* **dependsOn**: MoveResourceDependency[] (ReadOnly)
* **dependsOnOverrides**: MoveResourceDependencyOverride[]
* **errors**: schemas:14_errors (ReadOnly)
* **existingTargetId**: string
* **isResolveRequired**: bool (ReadOnly)
* **moveStatus**: schemas:14_moveStatus (ReadOnly)
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating'
* **resourceSettings**: ResourceSettings
* **sourceId**: string (Required)
* **sourceResourceSettings**: ResourceSettings (ReadOnly)
* **targetId**: string (ReadOnly)

## MoveResourceDependency
### Properties
* **automaticResolution**: AutomaticResolutionProperties
* **dependencyType**: 'RequiredForMove' | 'RequiredForPrepare'
* **id**: string
* **isOptional**: string
* **manualResolution**: ManualResolutionProperties
* **resolutionStatus**: string
* **resolutionType**: 'Automatic' | 'Manual'

## AutomaticResolutionProperties
### Properties
* **moveResourceId**: string

## ManualResolutionProperties
### Properties
* **targetId**: string

## MoveResourceDependencyOverride
### Properties
* **id**: string
* **targetId**: string

## schemas:14_errors
### Properties
* **properties**: MoveResourceErrorBody

## schemas:14_moveStatus
### Properties
* **errors**: MoveResourceError
* **jobStatus**: JobStatus
* **moveState**: 'AssignmentPending' | 'CommitFailed' | 'CommitInProgress' | 'CommitPending' | 'Committed' | 'DeleteSourcePending' | 'DiscardFailed' | 'DiscardInProgress' | 'MoveFailed' | 'MoveInProgress' | 'MovePending' | 'PrepareFailed' | 'PrepareInProgress' | 'PreparePending' | 'ResourceMoveCompleted'

## MoveResourceError
### Properties
* **properties**: MoveResourceErrorBody

## JobStatus
### Properties
* **jobName**: 'InitialSync'
* **jobProgress**: string (ReadOnly)

## ResourceSettings
* **Discriminator**: resourceType
### Base Properties
* **targetResourceName**: string (Required)
### Microsoft.Compute/availabilitySets
#### Properties
* **faultDomain**: int
* **resourceType**: 'Microsoft.Compute/availabilitySets' (Required)
* **updateDomain**: int

### Microsoft.Compute/diskEncryptionSets
#### Properties
* **resourceType**: 'Microsoft.Compute/diskEncryptionSets' (Required)

### Microsoft.Compute/virtualMachines
#### Properties
* **resourceType**: 'Microsoft.Compute/virtualMachines' (Required)
* **targetAvailabilitySetId**: string
* **targetAvailabilityZone**: '1' | '2' | '3' | 'NA'
* **targetVmSize**: string

### Microsoft.KeyVault/vaults
#### Properties
* **resourceType**: 'Microsoft.KeyVault/vaults' (Required)

### Microsoft.Network/loadBalancers
#### Properties
* **backendAddressPools**: LBBackendAddressPoolResourceSettings[]
* **frontendIPConfigurations**: LBFrontendIPConfigurationResourceSettings[]
* **resourceType**: 'Microsoft.Network/loadBalancers' (Required)
* **sku**: string
* **zones**: string

### Microsoft.Network/networkInterfaces
#### Properties
* **enableAcceleratedNetworking**: bool
* **ipConfigurations**: NicIpConfigurationResourceSettings[]
* **resourceType**: 'Microsoft.Network/networkInterfaces' (Required)

### Microsoft.Network/networkSecurityGroups
#### Properties
* **resourceType**: 'Microsoft.Network/networkSecurityGroups' (Required)
* **securityRules**: NsgSecurityRule[]

### Microsoft.Network/publicIPAddresses
#### Properties
* **domainNameLabel**: string
* **fqdn**: string
* **publicIpAllocationMethod**: string
* **resourceType**: 'Microsoft.Network/publicIPAddresses' (Required)
* **sku**: string
* **zones**: string

### Microsoft.Network/virtualNetworks
#### Properties
* **addressSpace**: string[]
* **dnsServers**: string[]
* **enableDdosProtection**: bool
* **resourceType**: 'Microsoft.Network/virtualNetworks' (Required)
* **subnets**: SubnetResourceSettings[]

### Microsoft.Sql/servers
#### Properties
* **resourceType**: 'Microsoft.Sql/servers' (Required)

### Microsoft.Sql/servers/databases
#### Properties
* **resourceType**: 'Microsoft.Sql/servers/databases' (Required)
* **zoneRedundant**: 'Disable' | 'Enable'

### Microsoft.Sql/servers/elasticPools
#### Properties
* **resourceType**: 'Microsoft.Sql/servers/elasticPools' (Required)
* **zoneRedundant**: 'Disable' | 'Enable'

### resourceGroups
#### Properties
* **resourceType**: 'resourceGroups' (Required)


## Microsoft.Compute/availabilitySets
### Properties
* **faultDomain**: int
* **resourceType**: 'Microsoft.Compute/availabilitySets' (Required)
* **updateDomain**: int

## Microsoft.Compute/diskEncryptionSets
### Properties
* **resourceType**: 'Microsoft.Compute/diskEncryptionSets' (Required)

## Microsoft.Compute/virtualMachines
### Properties
* **resourceType**: 'Microsoft.Compute/virtualMachines' (Required)
* **targetAvailabilitySetId**: string
* **targetAvailabilityZone**: '1' | '2' | '3' | 'NA'
* **targetVmSize**: string

## Microsoft.KeyVault/vaults
### Properties
* **resourceType**: 'Microsoft.KeyVault/vaults' (Required)

## Microsoft.Network/loadBalancers
### Properties
* **backendAddressPools**: LBBackendAddressPoolResourceSettings[]
* **frontendIPConfigurations**: LBFrontendIPConfigurationResourceSettings[]
* **resourceType**: 'Microsoft.Network/loadBalancers' (Required)
* **sku**: string
* **zones**: string

## LBBackendAddressPoolResourceSettings
### Properties
* **name**: string

## LBFrontendIPConfigurationResourceSettings
### Properties
* **name**: string
* **privateIpAddress**: string
* **privateIpAllocationMethod**: string
* **subnet**: SubnetReference
* **zones**: string

## SubnetReference
### Properties
* **name**: string
* **sourceArmResourceId**: string (Required)

## Microsoft.Network/networkInterfaces
### Properties
* **enableAcceleratedNetworking**: bool
* **ipConfigurations**: NicIpConfigurationResourceSettings[]
* **resourceType**: 'Microsoft.Network/networkInterfaces' (Required)

## NicIpConfigurationResourceSettings
### Properties
* **loadBalancerBackendAddressPools**: LoadBalancerBackendAddressPoolReference[]
* **loadBalancerNatRules**: LoadBalancerNatRuleReference[]
* **name**: string
* **primary**: bool
* **privateIpAddress**: string
* **privateIpAllocationMethod**: string
* **publicIp**: PublicIpReference
* **subnet**: SubnetReference

## LoadBalancerBackendAddressPoolReference
### Properties
* **name**: string
* **sourceArmResourceId**: string (Required)

## LoadBalancerNatRuleReference
### Properties
* **name**: string
* **sourceArmResourceId**: string (Required)

## PublicIpReference
### Properties
* **sourceArmResourceId**: string (Required)

## Microsoft.Network/networkSecurityGroups
### Properties
* **resourceType**: 'Microsoft.Network/networkSecurityGroups' (Required)
* **securityRules**: NsgSecurityRule[]

## NsgSecurityRule
### Properties
* **access**: string
* **description**: string
* **destinationAddressPrefix**: string
* **destinationPortRange**: string
* **direction**: string
* **name**: string
* **priority**: int
* **protocol**: string
* **sourceAddressPrefix**: string
* **sourcePortRange**: string

## Microsoft.Network/publicIPAddresses
### Properties
* **domainNameLabel**: string
* **fqdn**: string
* **publicIpAllocationMethod**: string
* **resourceType**: 'Microsoft.Network/publicIPAddresses' (Required)
* **sku**: string
* **zones**: string

## Microsoft.Network/virtualNetworks
### Properties
* **addressSpace**: string[]
* **dnsServers**: string[]
* **enableDdosProtection**: bool
* **resourceType**: 'Microsoft.Network/virtualNetworks' (Required)
* **subnets**: SubnetResourceSettings[]

## SubnetResourceSettings
### Properties
* **addressPrefix**: string
* **name**: string
* **networkSecurityGroup**: NsgReference

## NsgReference
### Properties
* **sourceArmResourceId**: string (Required)

## Microsoft.Sql/servers
### Properties
* **resourceType**: 'Microsoft.Sql/servers' (Required)

## Microsoft.Sql/servers/databases
### Properties
* **resourceType**: 'Microsoft.Sql/servers/databases' (Required)
* **zoneRedundant**: 'Disable' | 'Enable'

## Microsoft.Sql/servers/elasticPools
### Properties
* **resourceType**: 'Microsoft.Sql/servers/elasticPools' (Required)
* **zoneRedundant**: 'Disable' | 'Enable'

## resourceGroups
### Properties
* **resourceType**: 'resourceGroups' (Required)

