# Microsoft.Network.Admin @ 2022-02-01

## Resource Microsoft.Network.Admin/locations/quotas@2022-02-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2022-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region location of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties): Network quota properties.
* **tags**: [ResourceTags](#resourcetags): List of key value pairs.
* **type**: 'Microsoft.Network.Admin/locations/quotas' (ReadOnly, DeployTimeConstant): The resource type

## QuotaProperties
### Properties
* **maxLoadBalancersPerSubscription**: int: Maximum number of load balancers a tenant subscription can provision.
* **maxNicsPerSubscription**: int: Maximum number of NICs a tenant subscription can provision.
* **maxPublicIpsPerSubscription**: int: Maximum number of public IP addresses a tenant subscription can provision.
* **maxSecurityGroupsPerSubscription**: int: Maximum number of security groups a tenant subscription can provision.
* **maxVirtualNetworkGatewayConnectionsPerSubscription**: int: Maximum number of virtual network gateway Connections a tenant subscription can provision.
* **maxVirtualNetworkGatewaysPerSubscription**: int: Maximum number of virtual network gateways a tenant subscription can provision.
* **maxVnetsPerSubscription**: int: Maximum number of virtual networks a tenant subscription can provision.
* **migrationPhase**: 'Abort' | 'Commit' | 'None' | 'Prepare' | string (ReadOnly): State of migration such as None, Prepare, Commit, and Abort.
* **provisioningState**: string (ReadOnly): The provisioning state.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

