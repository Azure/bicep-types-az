# Microsoft.Network @ 2020-04-01-preview

## Resource Microsoft.Network/dnsForwardingRulesets@2020-04-01-preview (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the DNS forwarding ruleset.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DnsForwardingRulesetProperties](#dnsforwardingrulesetproperties): Represents the properties of a DNS forwarding ruleset.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/dnsForwardingRulesets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsForwardingRulesets/forwardingRules@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the forwarding rule.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ForwardingRuleProperties](#forwardingruleproperties): Represents the properties of a forwarding rule within a DNS forwarding ruleset.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/dnsForwardingRulesets/forwardingRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks@2020-04-01-preview (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the virtual network link.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkLinkProperties](#virtualnetworklinkproperties): Represents the properties of a virtual network link.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsResolvers@2020-04-01-preview (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the DNS resolver.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DnsResolverProperties](#dnsresolverproperties): Represents the properties of a DNS resolver.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/dnsResolvers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsResolvers/inboundEndpoints@2020-04-01-preview (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the inbound endpoint.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InboundEndpointProperties](#inboundendpointproperties): Represents the properties of an inbound endpoint for a DNS resolver.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/dnsResolvers/inboundEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsResolvers/outboundEndpoints@2020-04-01-preview (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the outbound endpoint.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OutboundEndpointProperties](#outboundendpointproperties): Represents the properties of an outbound endpoint for a DNS resolver.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/dnsResolvers/outboundEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Function listDnsForwardingRulesets (Microsoft.Network/virtualNetworks@2020-04-01-preview)
* **Resource**: Microsoft.Network/virtualNetworks
* **ApiVersion**: 2020-04-01-preview
* **Output**: [VirtualNetworkDnsForwardingRulesetListResult](#virtualnetworkdnsforwardingrulesetlistresult)

## Function listDnsResolvers (Microsoft.Network/virtualNetworks@2020-04-01-preview)
* **Resource**: Microsoft.Network/virtualNetworks
* **ApiVersion**: 2020-04-01-preview
* **Output**: [SubResourceListResult](#subresourcelistresult)

## DnsForwardingRulesetProperties
### Properties
* **dnsResolverOutboundEndpoints**: [SubResource](#subresource)[]: The reference to the DNS resolver outbound endpoints that are used to route DNS queries matching the forwarding rules in the ruleset to the target DNS servers.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): The resourceGuid for the DNS forwarding ruleset.

## SubResource
### Properties
* **id**: string: Resource ID.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ForwardingRuleProperties
### Properties
* **domainName**: string (Required): The domain name for the forwarding rule.
* **forwardingRuleState**: 'Disabled' | 'Enabled': The state of forwarding rule.
* **metadata**: [ForwardingRulePropertiesMetadata](#forwardingrulepropertiesmetadata): Metadata attached to the forwarding rule.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state of the resource.
* **targetDnsServers**: [TargetDnsServer](#targetdnsserver)[] (Required): DNS servers to forward the DNS query to.

## ForwardingRulePropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TargetDnsServer
### Properties
* **ipAddress**: string: DNS server IP address.
* **port**: int: DNS server port.

## VirtualNetworkLinkProperties
### Properties
* **metadata**: [VirtualNetworkLinkPropertiesMetadata](#virtualnetworklinkpropertiesmetadata): Metadata attached to the virtual network link.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state of the resource.
* **virtualNetwork**: [SubResource](#subresource): Reference to another ARM resource.

## VirtualNetworkLinkPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DnsResolverProperties
### Properties
* **dnsResolverState**: 'Connected' | 'Disconnected' (ReadOnly): The current status of the DNS resolver. This is a read-only property and any attempt to set this value will be ignored.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): The Guid property of the resource.
* **virtualNetwork**: [SubResource](#subresource) (Required): Reference to another ARM resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InboundEndpointProperties
### Properties
* **ipConfigurations**: [IpConfiguration](#ipconfiguration)[]: IP configurations for the inbound endpoint.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): The Guid property of the resource.

## IpConfiguration
### Properties
* **privateIpAddress**: string: Private IP address of the IP configuration.
* **privateIpAllocationMethod**: 'Dynamic' | 'Static': Private IP address allocation method.
* **subnet**: [SubResource](#subresource): Reference to another ARM resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OutboundEndpointProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The current provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): The Guid property of the resource.
* **subnet**: [SubResource](#subresource): Reference to another ARM resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkDnsForwardingRulesetListResult
### Properties
* **nextLink**: string (ReadOnly): The continuation token for the next page of results.
* **value**: [VirtualNetworkDnsForwardingRuleset](#virtualnetworkdnsforwardingruleset)[] (ReadOnly): Enumeration of the Virtual Network DNS Forwarding Ruleset.

## VirtualNetworkDnsForwardingRuleset
### Properties
* **id**: string (ReadOnly): DNS Forwarding Ruleset Resource ID.
* **properties**: [VirtualNetworkLinkSubResourceProperties](#virtualnetworklinksubresourceproperties) (ReadOnly): The reference to the virtual network link that associates between the DNS forwarding ruleset and virtual network.

## VirtualNetworkLinkSubResourceProperties
### Properties
* **virtualNetworkLink**: [SubResource](#subresource) (ReadOnly): Reference to another ARM resource.

## SubResourceListResult
### Properties
* **nextLink**: string (ReadOnly): The continuation token for the next page of results.
* **value**: [SubResource](#subresource)[] (ReadOnly): Enumeration of the sub-resources.

