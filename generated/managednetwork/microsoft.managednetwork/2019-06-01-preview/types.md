# Microsoft.ManagedNetwork @ 2019-06-01-preview

## Resource Microsoft.ManagedNetwork/managedNetworks@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedNetworkProperties](#managednetworkproperties): The MNC properties
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags
* **type**: 'Microsoft.ManagedNetwork/managedNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Connectivity' | string: Responsibility role under which this Managed Network Group will be created
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedNetworkGroupProperties](#managednetworkgroupproperties): Gets or sets the properties of a network group
* **type**: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedNetworkPeeringPolicyProperties](#managednetworkpeeringpolicyproperties): Gets or sets the properties of a Managed Network Policy
* **type**: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedNetwork/scopeAssignments@2019-06-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScopeAssignmentProperties](#scopeassignmentproperties): The Scope Assignment properties
* **type**: 'Microsoft.ManagedNetwork/scopeAssignments' (ReadOnly, DeployTimeConstant): The resource type

## ConnectivityCollection
### Properties
* **groups**: [ManagedNetworkGroup](#managednetworkgroup)[] (ReadOnly): The collection of connectivity related Managed Network Groups within the Managed Network
* **peerings**: [ManagedNetworkPeeringPolicy](#managednetworkpeeringpolicy)[] (ReadOnly): The collection of Managed Network Peering Policies within the Managed Network

## ManagedNetworkGroup
### Properties
* **id**: string (ReadOnly): Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **kind**: 'Connectivity' | string: Responsibility role under which this Managed Network Group will be created
* **location**: string: The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ManagedNetworkGroupProperties](#managednetworkgroupproperties): Gets or sets the properties of a network group
* **type**: string (ReadOnly): The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

## ManagedNetworkGroupProperties
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **managementGroups**: [ResourceId](#resourceid)[]: The collection of management groups covered by the Managed Network
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the ManagedNetwork resource.
* **subnets**: [ResourceId](#resourceid)[]: The collection of  subnets covered by the Managed Network
* **subscriptions**: [ResourceId](#resourceid)[]: The collection of subscriptions covered by the Managed Network
* **virtualNetworks**: [ResourceId](#resourceid)[]: The collection of virtual nets covered by the Managed Network

## ManagedNetworkPeeringPolicy
### Properties
* **id**: string (ReadOnly): Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string: The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ManagedNetworkPeeringPolicyProperties](#managednetworkpeeringpolicyproperties): Gets or sets the properties of a Managed Network Policy
* **type**: string (ReadOnly): The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

## ManagedNetworkPeeringPolicyProperties
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **hub**: [ResourceId](#resourceid): Gets or sets the hub virtual network ID
* **mesh**: [ResourceId](#resourceid)[]: Gets or sets the mesh group IDs
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the ManagedNetwork resource.
* **spokes**: [ResourceId](#resourceid)[]: Gets or sets the spokes group IDs
* **type**: 'HubAndSpokeTopology' | 'MeshTopology' | string (Required): Gets or sets the connectivity type of a network structure policy

## ManagedNetworkProperties
### Properties
* **connectivity**: [ConnectivityCollection](#connectivitycollection) (ReadOnly): The collection of groups and policies concerned with connectivity
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the ManagedNetwork resource.
* **scope**: [Scope](#scope): The collection of management groups, subscriptions, virtual networks, and subnets by the Managed Network. This is a read-only property that is reflective of all ScopeAssignments for this Managed Network

## ResourceId
### Properties
* **id**: string: Resource Id

## Scope
### Properties
* **managementGroups**: [ResourceId](#resourceid)[]: The collection of management groups covered by the Managed Network
* **subnets**: [ResourceId](#resourceid)[]: The collection of  subnets covered by the Managed Network
* **subscriptions**: [ResourceId](#resourceid)[]: The collection of subscriptions covered by the Managed Network
* **virtualNetworks**: [ResourceId](#resourceid)[]: The collection of virtual nets covered by the Managed Network

## ScopeAssignmentProperties
### Properties
* **assignedManagedNetwork**: string: The managed network ID with scope will be assigned to.
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the ManagedNetwork resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

