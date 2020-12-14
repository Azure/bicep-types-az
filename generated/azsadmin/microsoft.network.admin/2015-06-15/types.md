# Microsoft.Network.Admin @ 2015-06-15

## Resource Microsoft.Network.Admin/locations/quotas@2015-06-15
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-06-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: QuotaProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network.Admin/locations/quotas' (ReadOnly, DeployTimeConstant)

## QuotaProperties
### Properties
* **maxLoadBalancersPerSubscription**: int
* **maxNicsPerSubscription**: int
* **maxPublicIpsPerSubscription**: int
* **maxSecurityGroupsPerSubscription**: int
* **maxVirtualNetworkGatewayConnectionsPerSubscription**: int
* **maxVirtualNetworkGatewaysPerSubscription**: int
* **maxVnetsPerSubscription**: int
* **migrationPhase**: 'Abort' | 'Commit' | 'None' | 'Prepare' (ReadOnly)
* **provisioningState**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

