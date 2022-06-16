# Microsoft.Network @ 2020-04-01-preview

## Resource Microsoft.Network/dnsForwardingRulesets@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the DNS forwarding ruleset.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DnsForwardingRulesetProperties](#dnsforwardingrulesetproperties): Properties of the DNS forwarding ruleset.
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
* **properties**: [ForwardingRuleProperties](#forwardingruleproperties): Properties of the forwarding rule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/dnsForwardingRulesets/forwardingRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the virtual network link.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkLinkProperties](#virtualnetworklinkproperties): Properties of the virtual network link.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsResolvers@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the DNS resolver.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DnsResolverProperties](#dnsresolverproperties): Properties of the DNS resolver.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/dnsResolvers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsResolvers/inboundEndpoints@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the inbound endpoint.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InboundEndpointProperties](#inboundendpointproperties): Properties of the inbound endpoint.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/dnsResolvers/inboundEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsResolvers/outboundEndpoints@2020-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): ETag of the outbound endpoint.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OutboundEndpointProperties](#outboundendpointproperties): Properties of the outbound endpoint.
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
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the DNS forwarding ruleset. This is a read-only property and any attempt to set this value will be ignored.
* **resourceGuid**: string (ReadOnly): The resourceGuid for the DNS forwarding ruleset.

## DnsResolverProperties
### Properties
* **dnsResolverState**: 'Connected' | 'Disconnected' | string (ReadOnly): The current status of the DNS resolver. This is a read-only property and any attempt to set this value will be ignored.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the DNS resolver. This is a read-only property and any attempt to set this value will be ignored.
* **resourceGuid**: string (ReadOnly): The resourceGuid property of the DNS resolver resource.
* **virtualNetwork**: [SubResource](#subresource) (Required): The reference to the virtual network. This cannot be changed after creation.

## ForwardingRuleProperties
### Properties
* **domainName**: string (Required): The domain name for the forwarding rule.
* **forwardingRuleState**: 'Disabled' | 'Enabled' | string: The state of forwarding rule.
* **metadata**: [ForwardingRulePropertiesMetadata](#forwardingrulepropertiesmetadata): Metadata attached to the forwarding rule.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the forwarding rule. This is a read-only property and any attempt to set this value will be ignored.
* **targetDnsServers**: [TargetDnsServer](#targetdnsserver)[] (Required): DNS servers to forward the DNS query to.

## ForwardingRulePropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InboundEndpointProperties
### Properties
* **ipConfigurations**: [IpConfiguration](#ipconfiguration)[]: IP configurations for the inbound endpoint.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the inbound endpoint. This is a read-only property and any attempt to set this value will be ignored.
* **resourceGuid**: string (ReadOnly): The resourceGuid property of the inbound endpoint resource.

## IpConfiguration
### Properties
* **privateIpAddress**: string: Private IP address of the IP configuration.
* **privateIpAllocationMethod**: 'Dynamic' | 'Static' | string: Private IP address allocation method.
* **subnet**: [SubResource](#subresource): The reference to the subnet bound to the IP configuration.

## OutboundEndpointProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the outbound endpoint. This is a read-only property and any attempt to set this value will be ignored.
* **resourceGuid**: string (ReadOnly): The resourceGuid property of the outbound endpoint resource.
* **subnet**: [SubResource](#subresource): The reference to the subnet used for the outbound endpoint.

## SubResource
### Properties
* **id**: string: Resource ID.

## SubResourceListResult
### Properties
* **nextLink**: string (ReadOnly): The continuation token for the next page of results.
* **value**: [SubResource](#subresource)[]: Enumeration of the sub-resources.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetDnsServer
### Properties
* **ipAddress**: string: DNS server IP address.
* **port**: int: DNS server port.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkDnsForwardingRuleset
### Properties
* **id**: string: DNS Forwarding Ruleset Resource ID.
* **properties**: [VirtualNetworkLinkSubResourceProperties](#virtualnetworklinksubresourceproperties): Properties of the virtual network link sub-resource reference.

## VirtualNetworkDnsForwardingRulesetListResult
### Properties
* **nextLink**: string (ReadOnly): The continuation token for the next page of results.
* **value**: [VirtualNetworkDnsForwardingRuleset](#virtualnetworkdnsforwardingruleset)[]: Enumeration of the Virtual Network DNS Forwarding Ruleset.

## VirtualNetworkLinkProperties
### Properties
* **metadata**: [VirtualNetworkLinkPropertiesMetadata](#virtualnetworklinkpropertiesmetadata): Metadata attached to the virtual network link.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the virtual network link. This is a read-only property and any attempt to set this value will be ignored.
* **virtualNetwork**: [SubResource](#subresource): The reference to the virtual network. This cannot be changed after creation.

## VirtualNetworkLinkPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkLinkSubResourceProperties
### Properties
* **virtualNetworkLink**: [SubResource](#subresource): The reference to the virtual network link.

