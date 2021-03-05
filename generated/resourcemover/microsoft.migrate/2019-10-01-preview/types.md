# Microsoft.Migrate @ 2019-10-01-preview

## Resource Microsoft.Migrate/moveCollections@2019-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MoveCollectionProperties
* **tags**: MoveCollectionTags
* **type**: 'Microsoft.Migrate/moveCollections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Migrate/moveCollections/moveResources@2019-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
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
* **errors**: MoveCollectionPropertiesErrors (ReadOnly)
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **sourceRegion**: string (Required)
* **targetRegion**: string (Required)

## MoveCollectionPropertiesErrors
### Properties
* **properties**: MoveResourceErrorBody

## MoveResourceErrorBody
### Properties
* **code**: string (ReadOnly)
* **details**: MoveResourceErrorBody[] (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## MoveCollectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MoveResourceProperties
### Properties
* **dependsOn**: MoveResourceDependency[] (ReadOnly)
* **dependsOnOverrides**: MoveResourceDependencyOverride[]
* **errors**: MoveResourcePropertiesErrors (ReadOnly)
* **existingTargetId**: string
* **isResolveRequired**: bool (ReadOnly)
* **moveStatus**: MoveResourcePropertiesMoveStatus (ReadOnly)
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
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

## MoveResourcePropertiesErrors
### Properties
* **properties**: MoveResourceErrorBody

## MoveResourcePropertiesMoveStatus
### Properties
* **errors**: MoveResourceError
* **jobStatus**: JobStatus
* **moveState**: 'AssignmentPending' | 'CommitFailed' | 'CommitInProgress' | 'CommitPending' | 'Committed' | 'DeleteSourcePending' | 'DiscardFailed' | 'DiscardInProgress' | 'MoveFailed' | 'MoveInProgress' | 'MovePending' | 'PrepareFailed' | 'PrepareInProgress' | 'PreparePending' | 'ResourceMoveCompleted' (ReadOnly)

## MoveResourceError
### Properties
* **properties**: MoveResourceErrorBody

## JobStatus
### Properties
* **jobName**: 'InitialSync' (ReadOnly)
* **jobProgress**: string (ReadOnly)

## ResourceSettings
* **Discriminator**: resourceType

### Base Properties
* **targetResourceName**: string (Required)
### AvailabilitySetResourceSettings
#### Properties
* **faultDomain**: int
* **resourceType**: 'Microsoft.Compute/availabilitySets' (Required)
* **updateDomain**: int

### DiskEncryptionSetResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Compute/diskEncryptionSets' (Required)

### VirtualMachineResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Compute/virtualMachines' (Required)
* **targetAvailabilitySetId**: string
* **targetAvailabilityZone**: '1' | '2' | '3' | 'NA'
* **targetVmSize**: string

### KeyVaultResourceSettings
#### Properties
* **resourceType**: 'Microsoft.KeyVault/vaults' (Required)

### LoadBalancerResourceSettings
#### Properties
* **backendAddressPools**: LBBackendAddressPoolResourceSettings[]
* **frontendIPConfigurations**: LBFrontendIPConfigurationResourceSettings[]
* **resourceType**: 'Microsoft.Network/loadBalancers' (Required)
* **sku**: string
* **zones**: string

### NetworkInterfaceResourceSettings
#### Properties
* **enableAcceleratedNetworking**: bool
* **ipConfigurations**: NicIpConfigurationResourceSettings[]
* **resourceType**: 'Microsoft.Network/networkInterfaces' (Required)

### NetworkSecurityGroupResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Network/networkSecurityGroups' (Required)
* **securityRules**: NsgSecurityRule[]

### PublicIPAddressResourceSettings
#### Properties
* **domainNameLabel**: string
* **fqdn**: string
* **publicIpAllocationMethod**: string
* **resourceType**: 'Microsoft.Network/publicIPAddresses' (Required)
* **sku**: string
* **zones**: string

### VirtualNetworkResourceSettings
#### Properties
* **addressSpace**: string[]
* **dnsServers**: string[]
* **enableDdosProtection**: bool
* **resourceType**: 'Microsoft.Network/virtualNetworks' (Required)
* **subnets**: SubnetResourceSettings[]

### SqlServerResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Sql/servers' (Required)

### SqlDatabaseResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Sql/servers/databases' (Required)
* **zoneRedundant**: 'Disable' | 'Enable'

### SqlElasticPoolResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Sql/servers/elasticPools' (Required)
* **zoneRedundant**: 'Disable' | 'Enable'

### ResourceGroupResourceSettings
#### Properties
* **resourceType**: 'resourceGroups' (Required)


## AvailabilitySetResourceSettings
### Properties
* **faultDomain**: int
* **resourceType**: 'Microsoft.Compute/availabilitySets' (Required)
* **updateDomain**: int

## DiskEncryptionSetResourceSettings
### Properties
* **resourceType**: 'Microsoft.Compute/diskEncryptionSets' (Required)

## VirtualMachineResourceSettings
### Properties
* **resourceType**: 'Microsoft.Compute/virtualMachines' (Required)
* **targetAvailabilitySetId**: string
* **targetAvailabilityZone**: '1' | '2' | '3' | 'NA'
* **targetVmSize**: string

## KeyVaultResourceSettings
### Properties
* **resourceType**: 'Microsoft.KeyVault/vaults' (Required)

## LoadBalancerResourceSettings
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

## NetworkInterfaceResourceSettings
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

## NetworkSecurityGroupResourceSettings
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

## PublicIPAddressResourceSettings
### Properties
* **domainNameLabel**: string
* **fqdn**: string
* **publicIpAllocationMethod**: string
* **resourceType**: 'Microsoft.Network/publicIPAddresses' (Required)
* **sku**: string
* **zones**: string

## VirtualNetworkResourceSettings
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

## SqlServerResourceSettings
### Properties
* **resourceType**: 'Microsoft.Sql/servers' (Required)

## SqlDatabaseResourceSettings
### Properties
* **resourceType**: 'Microsoft.Sql/servers/databases' (Required)
* **zoneRedundant**: 'Disable' | 'Enable'

## SqlElasticPoolResourceSettings
### Properties
* **resourceType**: 'Microsoft.Sql/servers/elasticPools' (Required)
* **zoneRedundant**: 'Disable' | 'Enable'

## ResourceGroupResourceSettings
### Properties
* **resourceType**: 'resourceGroups' (Required)

