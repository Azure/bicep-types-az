# Microsoft.Network @ 2017-03-01

## Resource Microsoft.Network/trafficmanagerprofiles@2017-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProfileProperties](#profileproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Network/trafficmanagerprofiles' (ReadOnly, DeployTimeConstant)

## ProfileProperties
### Properties
* **dnsConfig**: [DnsConfig](#dnsconfig)
* **endpoints**: [Endpoint](#endpoint)[]
* **monitorConfig**: [MonitorConfig](#monitorconfig)
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
* **properties**: [EndpointProperties](#endpointproperties)
* **type**: string

## EndpointProperties
### Properties
* **endpointLocation**: string
* **endpointMonitorStatus**: string
* **endpointStatus**: string
* **geoMapping**: string[]
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

