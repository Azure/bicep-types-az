# Microsoft.Network @ 2018-08-01

## Resource Microsoft.Network/trafficmanagerprofiles@2018-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProfileProperties](#profileproperties): Class representing the Traffic Manager profile properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Network/trafficmanagerprofiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/trafficManagerUserMetricsKeys@2018-08-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [UserMetricsProperties](#usermetricsproperties) (ReadOnly): Class representing a Traffic Manager Real User Metrics key response.
* **type**: 'Microsoft.Network/trafficManagerUserMetricsKeys' (ReadOnly, DeployTimeConstant): The resource type

## ProfileProperties
### Properties
* **allowedEndpointRecordTypes**: 'Any' | 'DomainName' | 'IPv4Address' | 'IPv6Address'[]: The list of allowed endpoint record types.
* **dnsConfig**: [DnsConfig](#dnsconfig): Class containing DNS settings in a Traffic Manager profile.
* **endpoints**: [Endpoint](#endpoint)[]: The list of endpoints in the Traffic Manager profile.
* **maxReturn**: int: Maximum number of endpoints to be returned for MultiValue routing type.
* **monitorConfig**: [MonitorConfig](#monitorconfig): Class containing endpoint monitoring settings in a Traffic Manager profile.
* **profileStatus**: 'Disabled' | 'Enabled': The status of the Traffic Manager profile.
* **trafficRoutingMethod**: 'Geographic' | 'MultiValue' | 'Performance' | 'Priority' | 'Subnet' | 'Weighted': The traffic routing method of the Traffic Manager profile.
* **trafficViewEnrollmentStatus**: 'Disabled' | 'Enabled': Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.

## DnsConfig
### Properties
* **fqdn**: string (ReadOnly): The fully-qualified domain name (FQDN) of the Traffic Manager profile. This is formed from the concatenation of the RelativeName with the DNS domain used by Azure Traffic Manager.
* **relativeName**: string: The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile.
* **ttl**: int: The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile.

## Endpoint
### Properties
* **id**: string: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
* **name**: string: The name of the resource
* **properties**: [EndpointProperties](#endpointproperties): Class representing a Traffic Manager endpoint properties.
* **type**: string: The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.

## EndpointProperties
### Properties
* **customHeaders**: [schemas:1_customHeadersItem](#schemas1customheadersitem)[]: List of custom headers.
* **endpointLocation**: string: Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method.
* **endpointMonitorStatus**: 'CheckingEndpoint' | 'Degraded' | 'Disabled' | 'Inactive' | 'Online' | 'Stopped': The monitoring status of the endpoint.
* **endpointStatus**: 'Disabled' | 'Enabled': The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
* **geoMapping**: string[]: The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
* **minChildEndpoints**: int: The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
* **minChildEndpointsIPv4**: int: The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
* **minChildEndpointsIPv6**: int: The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
* **priority**: int: The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
* **subnets**: [schemas:1_subnetsItem](#schemas1subnetsitem)[]: The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints.
* **target**: string: The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
* **targetResourceId**: string: The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
* **weight**: int: The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.

## schemas:1_customHeadersItem
### Properties
* **name**: string: Header name.
* **value**: string: Header value.

## schemas:1_subnetsItem
### Properties
* **first**: string: First address in the subnet.
* **last**: string: Last address in the subnet.
* **scope**: int: Block size (number of leading bits in the subnet mask).

## MonitorConfig
### Properties
* **customHeaders**: [schemas:1_customHeadersItem](#schemas1customheadersitem)[]: List of custom headers.
* **expectedStatusCodeRanges**: [schemas:11_expectedStatusCodeRangesItem](#schemas11expectedstatuscoderangesitem)[]: List of expected status code ranges.
* **intervalInSeconds**: int: The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile.
* **path**: string: The path relative to the endpoint domain name used to probe for endpoint health.
* **port**: int: The TCP port used to probe for endpoint health.
* **profileMonitorStatus**: 'CheckingEndpoints' | 'Degraded' | 'Disabled' | 'Inactive' | 'Online': The profile-level monitoring status of the Traffic Manager profile.
* **protocol**: 'HTTP' | 'HTTPS' | 'TCP': The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
* **timeoutInSeconds**: int: The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
* **toleratedNumberOfFailures**: int: The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.

## schemas:11_expectedStatusCodeRangesItem
### Properties
* **max**: int: Max status code.
* **min**: int: Min status code.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserMetricsProperties
### Properties
* **key**: string (ReadOnly): The key returned by the User Metrics operation.

