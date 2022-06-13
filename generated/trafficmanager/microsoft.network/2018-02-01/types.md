# Microsoft.Network @ 2018-02-01

## Resource Microsoft.Network/trafficmanagerprofiles@2018-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProfileProperties](#profileproperties): The properties of the Traffic Manager profile.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/trafficmanagerprofiles' (ReadOnly, DeployTimeConstant): The resource type

## DnsConfig
### Properties
* **fqdn**: string (ReadOnly): The fully-qualified domain name (FQDN) of the Traffic Manager profile. This is formed from the concatenation of the RelativeName with the DNS domain used by Azure Traffic Manager.
* **relativeName**: string: The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile.
* **ttl**: int: The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile.

## Endpoint
### Properties
* **id**: string (ReadOnly): Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [EndpointProperties](#endpointproperties): The properties of the Traffic Manager endpoint.
* **type**: string (ReadOnly): The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.

## EndpointProperties
### Properties
* **endpointLocation**: string: Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
* **endpointMonitorStatus**: 'CheckingEndpoint' | 'Degraded' | 'Disabled' | 'Inactive' | 'Online' | 'Stopped' | string: The monitoring status of the endpoint.
* **endpointStatus**: 'Disabled' | 'Enabled' | string: The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
* **geoMapping**: string[]: The list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
* **minChildEndpoints**: int: The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
* **priority**: int: The priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
* **target**: string: The fully-qualified DNS name of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
* **targetResourceId**: string: The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
* **weight**: int: The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.

## MonitorConfig
### Properties
* **intervalInSeconds**: int: The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile.
* **path**: string: The path relative to the endpoint domain name used to probe for endpoint health.
* **port**: int: The TCP port used to probe for endpoint health.
* **profileMonitorStatus**: 'CheckingEndpoints' | 'Degraded' | 'Disabled' | 'Inactive' | 'Online' | string: The profile-level monitoring status of the Traffic Manager profile.
* **protocol**: 'HTTP' | 'HTTPS' | 'TCP' | string: The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
* **timeoutInSeconds**: int: The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
* **toleratedNumberOfFailures**: int: The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.

## ProfileProperties
### Properties
* **dnsConfig**: [DnsConfig](#dnsconfig): The DNS settings of the Traffic Manager profile.
* **endpoints**: [Endpoint](#endpoint)[]: The list of endpoints in the Traffic Manager profile.
* **monitorConfig**: [MonitorConfig](#monitorconfig): The endpoint monitoring settings of the Traffic Manager profile.
* **profileStatus**: 'Disabled' | 'Enabled' | string: The status of the Traffic Manager profile.
* **trafficRoutingMethod**: 'Geographic' | 'Performance' | 'Priority' | 'Weighted' | string: The traffic routing method of the Traffic Manager profile.
* **trafficViewEnrollmentStatus**: 'Disabled' | 'Enabled' | string: Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

