# Microsoft.Peering @ 2019-09-01-preview

## Resource Microsoft.Peering/peerAsns@2019-09-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PeerAsnProperties](#peerasnproperties): The properties that define a peer's ASN.
* **type**: 'Microsoft.Peering/peerAsns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Peering/peerings@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Direct' | 'Exchange' | string (Required): The kind of the peering.
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PeeringProperties](#peeringproperties): The properties that define a peering.
* **sku**: [PeeringSku](#peeringsku) (Required): The SKU that defines the tier and kind of the peering.
* **tags**: [PeeringTags](#peeringtags): The resource tags.
* **type**: 'Microsoft.Peering/peerings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Peering/peeringServices@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PeeringServiceProperties](#peeringserviceproperties): The properties that define a peering service.
* **tags**: [PeeringServiceTags](#peeringservicetags): The resource tags.
* **type**: 'Microsoft.Peering/peeringServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Peering/peeringServices/prefixes@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PeeringServicePrefixProperties](#peeringserviceprefixproperties): Gets or sets the peering prefix properties.
* **type**: 'Microsoft.Peering/peeringServices/prefixes' (ReadOnly, DeployTimeConstant): The resource type

## BgpSession
### Properties
* **maxPrefixesAdvertisedV4**: int: The maximum number of prefixes advertised over the IPv4 session.
* **maxPrefixesAdvertisedV6**: int: The maximum number of prefixes advertised over the IPv6 session.
* **md5AuthenticationKey**: string: The MD5 authentication key of the session.
* **microsoftSessionIPv4Address**: string (ReadOnly): The IPv4 session address on Microsoft's end.
* **microsoftSessionIPv6Address**: string (ReadOnly): The IPv6 session address on Microsoft's end.
* **peerSessionIPv4Address**: string: The IPv4 session address on peer's end.
* **peerSessionIPv6Address**: string: The IPv6 session address on peer's end.
* **sessionPrefixV4**: string: The IPv4 prefix that contains both ends' IPv4 addresses.
* **sessionPrefixV6**: string: The IPv6 prefix that contains both ends' IPv6 addresses.
* **sessionStateV4**: 'Active' | 'Connect' | 'Established' | 'Idle' | 'None' | 'OpenConfirm' | 'OpenReceived' | 'OpenSent' | 'PendingAdd' | 'PendingRemove' | 'PendingUpdate' | string (ReadOnly): The state of the IPv4 session.
* **sessionStateV6**: 'Active' | 'Connect' | 'Established' | 'Idle' | 'None' | 'OpenConfirm' | 'OpenReceived' | 'OpenSent' | 'PendingAdd' | 'PendingRemove' | 'PendingUpdate' | string (ReadOnly): The state of the IPv6 session.

## ContactInfo
### Properties
* **emails**: string[]: The list of email addresses.
* **phone**: string[]: The list of contact numbers.

## DirectConnection
### Properties
* **bandwidthInMbps**: int: The bandwidth of the connection.
* **bgpSession**: [BgpSession](#bgpsession): The BGP session associated with the connection.
* **connectionIdentifier**: string: The unique identifier (GUID) for the connection.
* **connectionState**: 'Active' | 'Approved' | 'None' | 'PendingApproval' | 'ProvisioningCompleted' | 'ProvisioningFailed' | 'ProvisioningStarted' | 'Validating' | string (ReadOnly): The state of the connection.
* **errorMessage**: string (ReadOnly): The error message related to the connection state, if any.
* **peeringDBFacilityId**: int: The PeeringDB.com ID of the facility at which the connection has to be set up.
* **provisionedBandwidthInMbps**: int (ReadOnly): The bandwidth that is actually provisioned.
* **sessionAddressProvider**: 'Microsoft' | 'Peer' | string: The field indicating if Microsoft provides session ip addresses.
* **useForPeeringService**: bool: The flag that indicates whether or not the connection is used for peering service.

## ExchangeConnection
### Properties
* **bgpSession**: [BgpSession](#bgpsession): The BGP session associated with the connection.
* **connectionIdentifier**: string: The unique identifier (GUID) for the connection.
* **connectionState**: 'Active' | 'Approved' | 'None' | 'PendingApproval' | 'ProvisioningCompleted' | 'ProvisioningFailed' | 'ProvisioningStarted' | 'Validating' | string (ReadOnly): The state of the connection.
* **errorMessage**: string (ReadOnly): The error message related to the connection state, if any.
* **peeringDBFacilityId**: int: The PeeringDB.com ID of the facility at which the connection has to be set up.

## PeerAsnProperties
### Properties
* **errorMessage**: string (ReadOnly): The error message for the validation state
* **peerAsn**: int: The Autonomous System Number (ASN) of the peer.
* **peerContactInfo**: [ContactInfo](#contactinfo): The contact information of the peer.
* **peerName**: string: The name of the peer.
* **validationState**: 'Approved' | 'Failed' | 'None' | 'Pending' | string: The validation state of the ASN associated with the peer.

## PeeringProperties
### Properties
* **direct**: [PeeringPropertiesDirect](#peeringpropertiesdirect): The properties that define a direct peering.
* **exchange**: [PeeringPropertiesExchange](#peeringpropertiesexchange): The properties that define an exchange peering.
* **peeringLocation**: string: The location of the peering.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## PeeringPropertiesDirect
### Properties
* **connections**: [DirectConnection](#directconnection)[]: The set of connections that constitute a direct peering.
* **directPeeringType**: 'Cdn' | 'Edge' | 'Internal' | 'Transit' | string: The type of direct peering.
* **peerAsn**: [SubResource](#subresource): The reference of the peer ASN.
* **useForPeeringService**: bool (ReadOnly): The flag that indicates whether or not the peering is used for peering service.

## PeeringPropertiesExchange
### Properties
* **connections**: [ExchangeConnection](#exchangeconnection)[]: The set of connections that constitute an exchange peering.
* **peerAsn**: [SubResource](#subresource): The reference of the peer ASN.

## PeeringServicePrefixEvent
### Properties
* **eventDescription**: string (ReadOnly): The description of the event associated with a prefix.
* **eventLevel**: string (ReadOnly): The level of the event associated with a prefix.
* **eventSummary**: string (ReadOnly): The summary of the event associated with a prefix.
* **eventTimestamp**: string (ReadOnly): The timestamp of the event associated with a prefix.
* **eventType**: string (ReadOnly): The type of the event associated with a prefix.

## PeeringServicePrefixProperties
### Properties
* **errorMessage**: string (ReadOnly): The error message for validation state
* **events**: [PeeringServicePrefixEvent](#peeringserviceprefixevent)[] (ReadOnly): The list of events for peering service prefix
* **learnedType**: 'None' | 'ViaServiceProvider' | 'ViaSession' | string (ReadOnly): The prefix learned type
* **prefix**: string: The prefix from which your traffic originates.
* **prefixValidationState**: 'Failed' | 'Invalid' | 'None' | 'Pending' | 'Unknown' | 'Verified' | 'Warning' | string (ReadOnly): The prefix validation state
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## PeeringServiceProperties
### Properties
* **peeringServiceLocation**: string: The PeeringServiceLocation of the Customer.
* **peeringServiceProvider**: string: The MAPS Provider Name.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## PeeringServiceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PeeringSku
### Properties
* **family**: 'Direct' | 'Exchange' | string: The family of the peering SKU.
* **name**: 'Basic_Direct_Free' | 'Basic_Exchange_Free' | 'Premium_Direct_Free' | 'Premium_Direct_Metered' | 'Premium_Direct_Unlimited' | 'Premium_Exchange_Metered' | string: The name of the peering SKU.
* **size**: 'Free' | 'Metered' | 'Unlimited' | string: The size of the peering SKU.
* **tier**: 'Basic' | 'Premium' | string: The tier of the peering SKU.

## PeeringTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SubResource
### Properties
* **id**: string: The identifier of the referenced resource.

