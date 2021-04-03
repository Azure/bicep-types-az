# Microsoft.Fabric.Admin @ 2016-05-01

## Resource Microsoft.Fabric.Admin/fabricLocations/ipPools@2016-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The region where the resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IpPoolModel](#ippoolmodel): Properties of an IpPool.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): List of key-value pairs.
* **type**: 'Microsoft.Fabric.Admin/fabricLocations/ipPools' (ReadOnly, DeployTimeConstant): The resource type

## IpPoolModel
### Properties
* **addressPrefix**: string: The address prefix.
* **endIpAddress**: string: The ending IP address.
* **numberOfAllocatedIpAddresses**: int: The number of currently allocated IP addresses.
* **numberOfIpAddresses**: int: The total number of IP addresses.
* **numberOfIpAddressesInTransition**: int: The current number of IP addresses in transition.
* **startIpAddress**: string: The starting IP address.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

