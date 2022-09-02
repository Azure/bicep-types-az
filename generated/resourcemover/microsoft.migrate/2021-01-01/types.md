# Microsoft.Migrate @ 2021-01-01

## Resource Microsoft.Migrate/moveCollections@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Defines the MSI properties of the Move Collection.
* **location**: string: The geo-location where the resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MoveCollectionProperties](#movecollectionproperties): Defines the move collection properties.
* **tags**: [MoveCollectionTags](#movecollectiontags): Resource tags.
* **type**: 'Microsoft.Migrate/moveCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/moveCollections/moveResources@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MoveResourceProperties](#moveresourceproperties): Defines the move resource properties.
* **type**: 'Microsoft.Migrate/moveCollections/moveResources' (ReadOnly, DeployTimeConstant): The resource type

## AutomaticResolutionProperties
### Properties
* **moveResourceId**: string: Gets the MoveResource ARM ID of
the dependent resource if the resolution type is Automatic.

## Identity
### Properties
* **principalId**: string: Gets or sets the principal id.
* **tenantId**: string: Gets or sets the tenant id.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string: The type of identity used for the resource mover service.

## JobStatus
### Properties
* **jobName**: 'InitialSync' | string (ReadOnly): Defines the job name.
* **jobProgress**: string (ReadOnly): Gets or sets the monitoring job percentage.

## LBBackendAddressPoolResourceSettings
### Properties
* **name**: string: Gets or sets the backend address pool name.

## LBFrontendIPConfigurationResourceSettings
### Properties
* **name**: string: Gets or sets the frontend IP configuration name.
* **privateIpAddress**: string: Gets or sets the IP address of the Load Balancer.This is only specified if a specific
private IP address shall be allocated from the subnet specified in subnetRef.
* **privateIpAllocationMethod**: string: Gets or sets PrivateIP allocation method (Static/Dynamic).
* **subnet**: [SubnetReference](#subnetreference): Defines reference to subnet.
* **zones**: string: Gets or sets the csv list of zones.

## LoadBalancerBackendAddressPoolReference
### Properties
* **name**: string: Gets the name of the proxy resource on the target side.
* **sourceArmResourceId**: string (Required): Gets the ARM resource ID of the tracked resource being referenced.

## LoadBalancerNatRuleReference
### Properties
* **name**: string: Gets the name of the proxy resource on the target side.
* **sourceArmResourceId**: string (Required): Gets the ARM resource ID of the tracked resource being referenced.

## ManualResolutionProperties
### Properties
* **targetId**: string: Gets or sets the target resource ARM ID of the dependent resource if the resource type is Manual.

## MoveCollectionProperties
### Properties
* **errors**: [MoveCollectionPropertiesErrors](#movecollectionpropertieserrors) (ReadOnly): Defines the move collection errors.
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **sourceRegion**: string (Required): Gets or sets the source region.
* **targetRegion**: string (Required): Gets or sets the target region.

## MoveCollectionPropertiesErrors
### Properties
* **properties**: [MoveResourceErrorBody](#moveresourceerrorbody): The move resource error body.

## MoveCollectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MoveResourceDependency
### Properties
* **automaticResolution**: [AutomaticResolutionProperties](#automaticresolutionproperties): Defines the properties for automatic resolution.
* **dependencyType**: 'RequiredForMove' | 'RequiredForPrepare' | string: Defines the dependency type.
* **id**: string: Gets the source ARM ID of the dependent resource.
* **isOptional**: string: Gets or sets a value indicating whether the dependency is optional.
* **manualResolution**: [ManualResolutionProperties](#manualresolutionproperties): Defines the properties for manual resolution.
* **resolutionStatus**: string: Gets the dependency resolution status.
* **resolutionType**: 'Automatic' | 'Manual' | string: Defines the resolution type.

## MoveResourceDependencyOverride
### Properties
* **id**: string: Gets or sets the ARM ID of the dependent resource.
* **targetId**: string: Gets or sets the resource ARM id of either the MoveResource or the resource ARM ID of
the dependent resource.

## MoveResourceError
### Properties
* **properties**: [MoveResourceErrorBody](#moveresourceerrorbody): The move resource error body.

## MoveResourceErrorBody
### Properties
* **code**: string (ReadOnly): An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [MoveResourceErrorBody](#moveresourceerrorbody)[] (ReadOnly): A list of additional details about the error.
* **message**: string (ReadOnly): A message describing the error, intended to be suitable for display in a user interface.
* **target**: string (ReadOnly): The target of the particular error. For example, the name of the property in error.

## MoveResourceProperties
### Properties
* **dependsOn**: [MoveResourceDependency](#moveresourcedependency)[] (ReadOnly): Gets or sets the move resource dependencies.
* **dependsOnOverrides**: [MoveResourceDependencyOverride](#moveresourcedependencyoverride)[]: Gets or sets the move resource dependencies overrides.
* **errors**: [MoveResourcePropertiesErrors](#moveresourcepropertieserrors) (ReadOnly): Defines the move resource errors.
* **existingTargetId**: string: Gets or sets the existing target ARM Id of the resource.
* **isResolveRequired**: bool (ReadOnly): Gets a value indicating whether the resolve action is required over the move collection.
* **moveStatus**: [MoveResourcePropertiesMoveStatus](#moveresourcepropertiesmovestatus) (ReadOnly): Defines the move resource status.
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Defines the provisioning states.
* **resourceSettings**: [ResourceSettings](#resourcesettings): Gets or sets the resource settings.
* **sourceId**: string (Required): Gets or sets the Source ARM Id of the resource.
* **sourceResourceSettings**: [ResourceSettings](#resourcesettings) (ReadOnly): Gets or sets the source resource settings.
* **targetId**: string (ReadOnly): Gets or sets the Target ARM Id of the resource.

## MoveResourcePropertiesErrors
### Properties
* **properties**: [MoveResourceErrorBody](#moveresourceerrorbody): The move resource error body.

## MoveResourcePropertiesMoveStatus
### Properties
* **errors**: [MoveResourceError](#moveresourceerror): An error response from the azure resource mover service.
* **jobStatus**: [JobStatus](#jobstatus): Defines the job status.
* **moveState**: 'AssignmentPending' | 'CommitFailed' | 'CommitInProgress' | 'CommitPending' | 'Committed' | 'DeleteSourcePending' | 'DiscardFailed' | 'DiscardInProgress' | 'MoveFailed' | 'MoveInProgress' | 'MovePending' | 'PrepareFailed' | 'PrepareInProgress' | 'PreparePending' | 'ResourceMoveCompleted' | string (ReadOnly): Defines the MoveResource states.

## NicIpConfigurationResourceSettings
### Properties
* **loadBalancerBackendAddressPools**: [LoadBalancerBackendAddressPoolReference](#loadbalancerbackendaddresspoolreference)[]: Gets or sets the references of the load balancer backend address pools.
* **loadBalancerNatRules**: [LoadBalancerNatRuleReference](#loadbalancernatrulereference)[]: Gets or sets the references of the load balancer NAT rules.
* **name**: string: Gets or sets the IP configuration name.
* **primary**: bool: Gets or sets a value indicating whether this IP configuration is the primary.
* **privateIpAddress**: string: Gets or sets the private IP address of the network interface IP Configuration.
* **privateIpAllocationMethod**: string: Gets or sets the private IP address allocation method.
* **publicIp**: [PublicIpReference](#publicipreference): Defines reference to a public IP.
* **subnet**: [SubnetReference](#subnetreference): Defines reference to subnet.

## NsgReference
### Properties
* **sourceArmResourceId**: string (Required): Gets the ARM resource ID of the tracked resource being referenced.

## NsgSecurityRule
### Properties
* **access**: string: Gets or sets whether network traffic is allowed or denied.
Possible values are “Allow” and “Deny”.
* **description**: string: Gets or sets a description for this rule. Restricted to 140 chars.
* **destinationAddressPrefix**: string: Gets or sets destination address prefix. CIDR or source IP range.
 A “*” can also be used to match all source IPs. Default tags such
as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used.
* **destinationPortRange**: string: Gets or sets Destination Port or Range. Integer or range between
0 and 65535. A “*” can also be used to match all ports.
* **direction**: string: Gets or sets the direction of the rule.InBound or Outbound. The
direction specifies if rule will be evaluated on incoming or outgoing traffic.
* **name**: string: Gets or sets the Security rule name.
* **priority**: int: Gets or sets the priority of the rule. The value can be between
100 and 4096. The priority number must be unique for each rule in the collection.
The lower the priority number, the higher the priority of the rule.
* **protocol**: string: Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
* **sourceAddressPrefix**: string: Gets or sets source address prefix. CIDR or source IP range. A
“*” can also be used to match all source IPs.  Default tags such as ‘VirtualNetwork’,
‘AzureLoadBalancer’ and ‘Internet’ can also be used. If this is an ingress
rule, specifies where network traffic originates from.
* **sourcePortRange**: string: Gets or sets Source Port or Range. Integer or range between 0 and
65535. A “*” can also be used to match all ports.

## PublicIpReference
### Properties
* **sourceArmResourceId**: string (Required): Gets the ARM resource ID of the tracked resource being referenced.

## ResourceSettings
* **Discriminator**: resourceType

### Base Properties
* **targetResourceName**: string (Required): Gets or sets the target Resource name.

### AvailabilitySetResourceSettings
#### Properties
* **faultDomain**: int: Gets or sets the target fault domain.
* **resourceType**: 'Microsoft.Compute/availabilitySets' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
* **updateDomain**: int: Gets or sets the target update domain.

### DiskEncryptionSetResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Compute/diskEncryptionSets' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.

### VirtualMachineResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Compute/virtualMachines' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
* **targetAvailabilitySetId**: string: Gets or sets the target availability set id for virtual machines not in an availability set at source.
* **targetAvailabilityZone**: '1' | '2' | '3' | 'NA' | string: Gets or sets the target availability zone.
* **targetVmSize**: string: Gets or sets the target virtual machine size.

### KeyVaultResourceSettings
#### Properties
* **resourceType**: 'Microsoft.KeyVault/vaults' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.

### LoadBalancerResourceSettings
#### Properties
* **backendAddressPools**: [LBBackendAddressPoolResourceSettings](#lbbackendaddresspoolresourcesettings)[]: Gets or sets the backend address pools of the load balancer.
* **frontendIPConfigurations**: [LBFrontendIPConfigurationResourceSettings](#lbfrontendipconfigurationresourcesettings)[]: Gets or sets the frontend IP configurations of the load balancer.
* **resourceType**: 'Microsoft.Network/loadBalancers' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
* **sku**: string: Gets or sets load balancer sku (Basic/Standard).
* **zones**: string: Gets or sets the csv list of zones common for all frontend IP configurations. Note this is given
 precedence only if frontend IP configurations settings are not present.

### NetworkInterfaceResourceSettings
#### Properties
* **enableAcceleratedNetworking**: bool: Gets or sets a value indicating whether accelerated networking is enabled.
* **ipConfigurations**: [NicIpConfigurationResourceSettings](#nicipconfigurationresourcesettings)[]: Gets or sets the IP configurations of the NIC.
* **resourceType**: 'Microsoft.Network/networkInterfaces' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.

### NetworkSecurityGroupResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Network/networkSecurityGroups' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
* **securityRules**: [NsgSecurityRule](#nsgsecurityrule)[]: Gets or sets Security rules of network security group.

### PublicIPAddressResourceSettings
#### Properties
* **domainNameLabel**: string: Gets or sets the domain name label.
* **fqdn**: string: Gets or sets the fully qualified domain name.
* **publicIpAllocationMethod**: string: Gets or sets public IP allocation method.
* **resourceType**: 'Microsoft.Network/publicIPAddresses' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
* **sku**: string: Gets or sets public IP sku.
* **zones**: string: Gets or sets public IP zones.

### VirtualNetworkResourceSettings
#### Properties
* **addressSpace**: string[]: Gets or sets the address prefixes for the virtual network.
* **dnsServers**: string[]: Gets or sets DHCPOptions that contains an array of DNS servers available to VMs
deployed in the virtual network.
* **enableDdosProtection**: bool: Gets or sets a value indicating whether gets or sets whether the
DDOS protection should be switched on.
* **resourceType**: 'Microsoft.Network/virtualNetworks' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
* **subnets**: [SubnetResourceSettings](#subnetresourcesettings)[]: Gets or sets List of subnets in a VirtualNetwork.

### SqlServerResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Sql/servers' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.

### SqlDatabaseResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Sql/servers/databases' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
* **zoneRedundant**: 'Disable' | 'Enable' | string: Defines the zone redundant resource setting.

### SqlElasticPoolResourceSettings
#### Properties
* **resourceType**: 'Microsoft.Sql/servers/elasticPools' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
* **zoneRedundant**: 'Disable' | 'Enable' | string: Defines the zone redundant resource setting.

### ResourceGroupResourceSettings
#### Properties
* **resourceType**: 'resourceGroups' (Required): The resource type. For example, the value can be Microsoft.Compute/virtualMachines.


## SubnetReference
### Properties
* **name**: string: Gets the name of the proxy resource on the target side.
* **sourceArmResourceId**: string (Required): Gets the ARM resource ID of the tracked resource being referenced.

## SubnetResourceSettings
### Properties
* **addressPrefix**: string: Gets or sets address prefix for the subnet.
* **name**: string: Gets or sets the Subnet name.
* **networkSecurityGroup**: [NsgReference](#nsgreference): Defines reference to NSG.

