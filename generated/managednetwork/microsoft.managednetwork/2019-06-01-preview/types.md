# Microsoft.ManagedNetwork @ 2019-06-01-preview

## Resource Microsoft.ManagedNetwork/managedNetworks@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedNetworkProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ManagedNetwork/managedNetworks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Connectivity'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedNetworkGroupProperties
* **type**: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedNetworkPeeringPolicyProperties
* **type**: 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ManagedNetwork/scopeAssignments@2019-06-01-preview
* **Valid Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScopeAssignmentProperties
* **type**: 'Microsoft.ManagedNetwork/scopeAssignments' (ReadOnly, DeployTimeConstant)

## ManagedNetworkProperties
### Properties
* **connectivity**: ConnectivityCollection (ReadOnly)
* **etag**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scope**: Scope

## ConnectivityCollection
### Properties
* **groups**: ManagedNetworkGroup[] (ReadOnly)
* **peerings**: ManagedNetworkPeeringPolicy[] (ReadOnly)

## ManagedNetworkGroup
### Properties
* **id**: string (ReadOnly)
* **kind**: 'Connectivity'
* **location**: string
* **name**: string (ReadOnly)
* **properties**: ManagedNetworkGroupProperties
* **type**: string (ReadOnly)

## ManagedNetworkGroupProperties
### Properties
* **etag**: string (ReadOnly)
* **managementGroups**: ResourceId[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **subnets**: ResourceId[]
* **subscriptions**: ResourceId[]
* **virtualNetworks**: ResourceId[]

## ResourceId
### Properties
* **id**: string

## ManagedNetworkPeeringPolicy
### Properties
* **id**: string (ReadOnly)
* **location**: string
* **name**: string (ReadOnly)
* **properties**: ManagedNetworkPeeringPolicyProperties
* **type**: string (ReadOnly)

## ManagedNetworkPeeringPolicyProperties
### Properties
* **etag**: string (ReadOnly)
* **hub**: ResourceId
* **mesh**: ResourceId[]
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **spokes**: ResourceId[]
* **type**: 'HubAndSpokeTopology' | 'MeshTopology' (Required)

## Scope
### Properties
* **managementGroups**: ResourceId[]
* **subnets**: ResourceId[]
* **subscriptions**: ResourceId[]
* **virtualNetworks**: ResourceId[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ScopeAssignmentProperties
### Properties
* **assignedManagedNetwork**: string
* **etag**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

