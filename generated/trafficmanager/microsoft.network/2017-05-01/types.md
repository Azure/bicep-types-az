# Microsoft.Network @ 2017-05-01

## Resource Microsoft.Network/trafficmanagerprofiles@2017-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProfileProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Network/trafficmanagerprofiles' (ReadOnly, DeployTimeConstant)

## ProfileProperties
### Properties
* **dnsConfig**: DnsConfig
* **endpoints**: Endpoint[]
* **monitorConfig**: MonitorConfig
* **profileStatus**: 'Disabled' | 'Enabled'
* **trafficRoutingMethod**: 'Geographic' | 'Performance' | 'Priority' | 'Weighted'

## DnsConfig
### Properties
* **fqdn**: string (ReadOnly)
* **relativeName**: string
* **ttl**: int

## Endpoint
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: EndpointProperties
* **type**: string (ReadOnly)

## EndpointProperties
### Properties
* **endpointLocation**: string
* **endpointMonitorStatus**: 'CheckingEndpoint' | 'Degraded' | 'Disabled' | 'Inactive' | 'Online' | 'Stopped'
* **endpointStatus**: 'Disabled' | 'Enabled'
* **geoMapping**: string[]
* **minChildEndpoints**: int
* **priority**: int
* **target**: string
* **targetResourceId**: string
* **weight**: int

## MonitorConfig
### Properties
* **intervalInSeconds**: int
* **path**: string
* **port**: int
* **profileMonitorStatus**: 'CheckingEndpoints' | 'Degraded' | 'Disabled' | 'Inactive' | 'Online'
* **protocol**: 'HTTP' | 'HTTPS' | 'TCP'
* **timeoutInSeconds**: int
* **toleratedNumberOfFailures**: int

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

