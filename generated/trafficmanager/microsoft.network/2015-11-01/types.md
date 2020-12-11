# Microsoft.Network @ 2015-11-01

## Microsoft.Network/trafficmanagerprofiles
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProfileProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/trafficmanagerprofiles' (ReadOnly, DeployTimeConstant)

## ProfileProperties
### Properties
* **dnsConfig**: DnsConfig
* **endpoints**: Endpoint[]
* **monitorConfig**: MonitorConfig
* **profileStatus**: string
* **trafficRoutingMethod**: string

## DnsConfig
### Properties
* **fqdn**: string
* **relativeName**: string
* **ttl**: int

## Endpoint
### Properties
* **id**: string
* **name**: string
* **properties**: EndpointProperties
* **type**: string

## EndpointProperties
### Properties
* **endpointLocation**: string
* **endpointMonitorStatus**: string
* **endpointStatus**: string
* **minChildEndpoints**: int
* **priority**: int
* **target**: string
* **targetResourceId**: string
* **weight**: int

## MonitorConfig
### Properties
* **path**: string
* **port**: int
* **profileMonitorStatus**: string
* **protocol**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

