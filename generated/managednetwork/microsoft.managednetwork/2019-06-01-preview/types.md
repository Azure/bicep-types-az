# Microsoft.ManagedNetwork @ 2019-06-01-preview

## Resource Microsoft.ManagedNetwork/managedNetworks@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedNetworkProperties](#managednetworkproperties): Properties of Managed Network
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags
* **type**: 'Microsoft.ManagedNetwork/managedNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Connectivity': Responsibility role under which this Managed Network Group will be created
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedNetworkGroupProperties](#managednetworkgroupproperties): Properties of a Managed Network Group
* **type**: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedNetworkPeeringPolicyProperties](#managednetworkpeeringpolicyproperties): Properties of a Managed Network Peering Policy
* **type**: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedNetwork/scopeAssignments@2019-06-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScopeAssignmentProperties](#scopeassignmentproperties): Properties of Managed Network
* **type**: 'Microsoft.ManagedNetwork/scopeAssignments' (ReadOnly, DeployTimeConstant): The resource type

## ManagedNetworkProperties
### Properties
* **connectivity**: [ConnectivityCollection](#connectivitycollection) (ReadOnly): The collection of Connectivity related groups and policies within the Managed Network
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the ManagedNetwork resource.
* **scope**: [Scope](#scope): Scope of a Managed Network

## ConnectivityCollection
### Properties
* **groups**: [ManagedNetworkGroup](#managednetworkgroup)[] (ReadOnly): The collection of connectivity related Managed Network Groups within the Managed Network
* **peerings**: [ManagedNetworkPeeringPolicy](#managednetworkpeeringpolicy)[] (ReadOnly): The collection of Managed Network Peering Policies within the Managed Network

## ManagedNetworkGroup
### Properties
* **id**: string (ReadOnly): Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **kind**: 'Connectivity': Responsibility role under which this Managed Network Group will be created
* **location**: string: The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ManagedNetworkGroupProperties](#managednetworkgroupproperties): Properties of a Managed Network Group
* **type**: string (ReadOnly): The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

## ManagedNetworkGroupProperties
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **managementGroups**: [ResourceId](#resourceid)[]: The collection of management groups covered by the Managed Network
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the ManagedNetwork resource.
* **subnets**: [ResourceId](#resourceid)[]: The collection of  subnets covered by the Managed Network
* **subscriptions**: [ResourceId](#resourceid)[]: The collection of subscriptions covered by the Managed Network
* **virtualNetworks**: [ResourceId](#resourceid)[]: The collection of virtual nets covered by the Managed Network

## ResourceId
### Properties
* **id**: string: Resource Id

## ManagedNetworkPeeringPolicy
### Properties
* **id**: string (ReadOnly): Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string: The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ManagedNetworkPeeringPolicyProperties](#managednetworkpeeringpolicyproperties): Properties of a Managed Network Peering Policy
* **type**: string (ReadOnly): The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

## ManagedNetworkPeeringPolicyProperties
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **hub**: [ResourceId](#resourceid): Generic pointer to a resource
* **mesh**: [ResourceId](#resourceid)[]: Gets or sets the mesh group IDs
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the ManagedNetwork resource.
* **spokes**: [ResourceId](#resourceid)[]: Gets or sets the spokes group IDs
* **type**: 'HubAndSpokeTopology' | 'MeshTopology' (Required): Gets or sets the connectivity type of a network structure policy

## Scope
### Properties
* **managementGroups**: [ResourceId](#resourceid)[]: The collection of management groups covered by the Managed Network
* **subnets**: [ResourceId](#resourceid)[]: The collection of  subnets covered by the Managed Network
* **subscriptions**: [ResourceId](#resourceid)[]: The collection of subscriptions covered by the Managed Network
* **virtualNetworks**: [ResourceId](#resourceid)[]: The collection of virtual nets covered by the Managed Network

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScopeAssignmentProperties
### Properties
* **assignedManagedNetwork**: string: The managed network ID with scope will be assigned to.
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the ManagedNetwork resource.

