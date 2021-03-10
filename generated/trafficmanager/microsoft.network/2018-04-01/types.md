# Microsoft.Network @ 2018-04-01

## Resource Microsoft.Network/trafficmanagerprofiles@2018-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProfileProperties](#profileproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Network/trafficmanagerprofiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/trafficManagerUserMetricsKeys@2018-04-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [UserMetricsProperties](#usermetricsproperties) (ReadOnly)
* **type**: 'Microsoft.Network/trafficManagerUserMetricsKeys' (ReadOnly, DeployTimeConstant)

## ProfileProperties
### Properties
* **dnsConfig**: [DnsConfig](#dnsconfig)
* **endpoints**: [Endpoint](#endpoint)[]
* **maxReturn**: int
* **monitorConfig**: [MonitorConfig](#monitorconfig)
* **profileStatus**: 'Disabled' | 'Enabled'
* **trafficRoutingMethod**: 'Geographic' | 'MultiValue' | 'Performance' | 'Priority' | 'Subnet' | 'Weighted'
* **trafficViewEnrollmentStatus**: 'Disabled' | 'Enabled'

## DnsConfig
### Properties
* **fqdn**: string (ReadOnly)
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
* **customHeaders**: [EndpointPropertiesCustomHeadersItem](#endpointpropertiescustomheadersitem)[]
* **endpointLocation**: string
* **endpointMonitorStatus**: 'CheckingEndpoint' | 'Degraded' | 'Disabled' | 'Inactive' | 'Online' | 'Stopped'
* **endpointStatus**: 'Disabled' | 'Enabled'
* **geoMapping**: string[]
* **minChildEndpoints**: int
* **priority**: int
* **subnets**: [EndpointPropertiesSubnetsItem](#endpointpropertiessubnetsitem)[]
* **target**: string
* **targetResourceId**: string
* **weight**: int

## EndpointPropertiesCustomHeadersItem
### Properties
* **name**: string
* **value**: string

## EndpointPropertiesSubnetsItem
### Properties
* **first**: string
* **last**: string
* **scope**: int

## MonitorConfig
### Properties
* **customHeaders**: [MonitorConfigCustomHeadersItem](#monitorconfigcustomheadersitem)[]
* **expectedStatusCodeRanges**: [MonitorConfigExpectedStatusCodeRangesItem](#monitorconfigexpectedstatuscoderangesitem)[]
* **intervalInSeconds**: int
* **path**: string
* **port**: int
* **profileMonitorStatus**: 'CheckingEndpoints' | 'Degraded' | 'Disabled' | 'Inactive' | 'Online'
* **protocol**: 'HTTP' | 'HTTPS' | 'TCP'
* **timeoutInSeconds**: int
* **toleratedNumberOfFailures**: int

## MonitorConfigCustomHeadersItem
### Properties
* **name**: string
* **value**: string

## MonitorConfigExpectedStatusCodeRangesItem
### Properties
* **max**: int
* **min**: int

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserMetricsProperties
### Properties
* **key**: string (ReadOnly)

