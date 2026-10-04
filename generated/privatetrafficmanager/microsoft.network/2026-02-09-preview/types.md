# Microsoft.Network @ 2026-02-09-preview

## Resource Microsoft.Network/privateTrafficManagerProfiles@2026-02-09-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProfileProperties](#profileproperties): The properties of the Private Traffic Manager profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/privateTrafficManagerProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateTrafficManagerProfiles/endpoints@2026-02-09-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointProperties](#endpointproperties): The properties of the Private Traffic Manager endpoint.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Network/privateTrafficManagerProfiles/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateTrafficManagerProfiles/healthPolicies@2026-02-09-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2026-02-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HealthPolicyProperties](#healthpolicyproperties): The properties of the Traffic Manager health policy.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Network/privateTrafficManagerProfiles/healthPolicies' (ReadOnly, DeployTimeConstant): The resource type

### ProbeHealthPolicy
#### Properties
* **kind**: 'Probe' (Required): The kind of the Traffic Manager health policy.


## Resource Microsoft.Network/privateTrafficManagerProfiles/probingGateways@2026-02-09-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProfileProbingGatewayProperties](#profileprobinggatewayproperties): The properties of the probing gateway association.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Network/privateTrafficManagerProfiles/probingGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/topologyMaps@2026-02-09-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TopologyMapProperties](#topologymapproperties): The properties of the Topology Map.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/topologyMaps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/topologyMaps/sites@2026-02-09-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-09-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): The properties of the Site.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Network/topologyMaps/sites' (ReadOnly, DeployTimeConstant): The resource type

## CustomHeader
### Properties
* **name**: string: Header name.
* **value**: string: Header value.

## DnsConfig
### Properties
* **recordType**: 'A' | 'AAAA' | 'CNAME' | string: The record type of the Traffic Manager profile.
* **ttl**: int {minValue: 0}: The TTL of the DNS records in seconds.

## EndpointProperties
### Properties
* **alwaysServe**: 'Disabled' | 'Enabled' | string: Indicates whether endpoint is Always Serve or not. Always Serve endpoints are always considered to be healthy.
* **endpointStatus**: 'Disabled' | 'Enabled' | string: The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
* **healthPolicyId**: string: The health policy associated with this endpoint.
* **kind**: 'Endpoint' | string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **monitoringTarget**: string: Monitoring target is where Private Traffic Manager will gather health information.If MonitoringTarget is not configured EndpointTarget will be used instead. If the EndpointTarget is IPv6 then the Monitoring Target MUST be configured. Monitoring Target cannot be an IPv6 address.
* **priority**: int {minValue: 1, maxValue: 1000}: The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **target**: string (Required): The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
* **weight**: int {minValue: 1, maxValue: 1000}: The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.

## ExpectedStatusCodeRange
### Properties
* **max**: int: Max status code.
* **min**: int: Min status code.

## HealthPolicyProperties
### Properties
* **probeConfig**: [ProbeConfig](#probeconfig): Probe monitoring settings of the Traffic Manager profile. Only applicable when the parent health policy `kind` is `Probe`.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## ProbeConfig
### Properties
* **customHeaders**: [CustomHeader](#customheader)[]: List of custom headers.
* **expectedStatusCodeRanges**: [ExpectedStatusCodeRange](#expectedstatuscoderange)[]: List of expected status code ranges.
* **intervalInSeconds**: int: The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile. Allowed values: 10 or 30 seconds.
* **path**: string: The path relative to the endpoint domain name used to probe for endpoint health.
* **port**: int: The TCP port used to probe for endpoint health.
* **protocol**: 'HTTP' | 'HTTPS' | 'TCP' | string: The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
* **timeoutInSeconds**: int: The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
* **toleratedNumberOfFailures**: int: The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.

## ProfileEndpoint
### Properties
* **alwaysServe**: 'Disabled' | 'Enabled' | string: Indicates whether endpoint is Always Serve or not. Always Serve endpoints are always considered to be healthy.
* **endpointStatus**: 'Disabled' | 'Enabled' | string: The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
* **healthPolicyId**: string: The health policy associated with this endpoint.
* **kind**: 'Endpoint' | string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **monitoringTarget**: string: Monitoring target is where Private Traffic Manager will gather health information.If MonitoringTarget is not configured EndpointTarget will be used instead. If the EndpointTarget is IPv6 then the Monitoring Target MUST be configured. Monitoring Target cannot be an IPv6 address.
* **name**: string (Required): The name of the endpoint.
* **priority**: int {minValue: 1, maxValue: 1000}: The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **target**: string (Required): The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
* **weight**: int {minValue: 1, maxValue: 1000}: The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.

## ProfileProbingGatewayProperties
### Properties
* **probingGatewayId**: string (Required): The ARM resource ID of the probing gateway.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## ProfileProperties
### Properties
* **customTopologyMapMode**: 'Disabled' | 'Enabled' | string: The mode for custom topology map of the Private Traffic Manager profile.
* **dnsConfig**: [DnsConfig](#dnsconfig): The DNS related configuration properties of the Private Traffic Manager
* **endpoints**: [ProfileEndpoint](#profileendpoint)[]: The list of endpoints in the Private Traffic Manager profile.
* **profileStatus**: 'Disabled' | 'Enabled' | string: The status of the Private Traffic Manager profile.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **topologyMapId**: string: The ARM resource ID of the topology map associated with this Private Traffic Manager profile.
* **trafficRoutingMethod**: 'Priority' | 'Weighted' | string: The traffic routing method of the Private Traffic Manager profile.

## SiteProperties
### Properties
* **probingGatewayIds**: string[]: The ARM resource ID of the probing gateway that can be used to monitor health as surrogate to the networks in the Site.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **virtualNetworkIds**: string[]: The list of Network IDs that forms the Site.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TopologyMapInlineSite
### Properties
* **name**: string (Required): The name of the Site.
* **properties**: [SiteProperties](#siteproperties): The properties of the Site.

## TopologyMapProperties
### Properties
* **catchAllSiteName**: string: The Name of the CatchAll site. There is only one CatchAll site in a TopologyMap
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the TopologyMap resource.
* **sites**: [TopologyMapInlineSite](#topologymapinlinesite)[]: The list of Sites in the Topology Map.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

