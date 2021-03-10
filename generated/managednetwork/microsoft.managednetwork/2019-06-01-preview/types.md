# Microsoft.ManagedNetwork @ 2019-06-01-preview

## Resource Microsoft.ManagedNetwork/managedNetworks@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedNetworkProperties](#managednetworkproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ManagedNetwork/managedNetworks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Connectivity'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedNetworkGroupProperties](#managednetworkgroupproperties)
* **type**: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedNetworkPeeringPolicyProperties](#managednetworkpeeringpolicyproperties)
* **type**: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ManagedNetwork/scopeAssignments@2019-06-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ScopeAssignmentProperties](#scopeassignmentproperties)
* **type**: 'Microsoft.ManagedNetwork/scopeAssignments' (ReadOnly, DeployTimeConstant)

## ManagedNetworkProperties
### Properties
* **connectivity**: [ConnectivityCollection](#connectivitycollection) (ReadOnly)
* **etag**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scope**: [Scope](#scope)

## ConnectivityCollection
### Properties
* **groups**: [ManagedNetworkGroup](#managednetworkgroup)[] (ReadOnly)
* **peerings**: [ManagedNetworkPeeringPolicy](#managednetworkpeeringpolicy)[] (ReadOnly)

## ManagedNetworkGroup
### Properties
* **id**: string (ReadOnly)
* **kind**: 'Connectivity'
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [ManagedNetworkGroupProperties](#managednetworkgroupproperties)
* **type**: string (ReadOnly)

## ManagedNetworkGroupProperties
### Properties
* **etag**: string (ReadOnly)
* **managementGroups**: [ResourceId](#resourceid)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnets**: [ResourceId](#resourceid)[]
* **subscriptions**: [ResourceId](#resourceid)[]
* **virtualNetworks**: [ResourceId](#resourceid)[]

## ResourceId
### Properties
* **id**: string

## ManagedNetworkPeeringPolicy
### Properties
* **id**: string (ReadOnly)
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [ManagedNetworkPeeringPolicyProperties](#managednetworkpeeringpolicyproperties)
* **type**: string (ReadOnly)

## ManagedNetworkPeeringPolicyProperties
### Properties
* **etag**: string (ReadOnly)
* **hub**: [ResourceId](#resourceid)
* **mesh**: [ResourceId](#resourceid)[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **spokes**: [ResourceId](#resourceid)[]
* **type**: 'HubAndSpokeTopology' | 'MeshTopology' (Required)

## Scope
### Properties
* **managementGroups**: [ResourceId](#resourceid)[]
* **subnets**: [ResourceId](#resourceid)[]
* **subscriptions**: [ResourceId](#resourceid)[]
* **virtualNetworks**: [ResourceId](#resourceid)[]

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScopeAssignmentProperties
### Properties
* **assignedManagedNetwork**: string
* **etag**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

