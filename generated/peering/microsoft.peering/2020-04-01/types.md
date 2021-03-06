# Microsoft.Peering @ 2020-04-01

## Resource Microsoft.Peering/peerAsns@2020-04-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PeerAsnProperties
* **type**: 'Microsoft.Peering/peerAsns' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Peering/peerings@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Direct' | 'Exchange' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PeeringProperties
* **sku**: PeeringSku (Required)
* **tags**: PeeringTags
* **type**: 'Microsoft.Peering/peerings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Peering/peerings/registeredAsns@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PeeringRegisteredAsnProperties
* **type**: 'Microsoft.Peering/peerings/registeredAsns' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Peering/peerings/registeredPrefixes@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PeeringRegisteredPrefixProperties
* **type**: 'Microsoft.Peering/peerings/registeredPrefixes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Peering/peeringServices@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PeeringServiceProperties
* **sku**: PeeringServiceSku
* **tags**: PeeringServiceTags
* **type**: 'Microsoft.Peering/peeringServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Peering/peeringServices/prefixes@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PeeringServicePrefixProperties
* **type**: 'Microsoft.Peering/peeringServices/prefixes' (ReadOnly, DeployTimeConstant)

## PeerAsnProperties
### Properties
* **errorMessage**: string (ReadOnly)
* **peerAsn**: int
* **peerContactDetail**: ContactDetail[]
* **peerName**: string
* **validationState**: 'Approved' | 'Failed' | 'None' | 'Pending'

## ContactDetail
### Properties
* **email**: string
* **phone**: string
* **role**: 'Escalation' | 'Noc' | 'Other' | 'Policy' | 'Service' | 'Technical'

## PeeringProperties
### Properties
* **direct**: PeeringPropertiesDirect
* **exchange**: PeeringPropertiesExchange
* **peeringLocation**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PeeringPropertiesDirect
### Properties
* **connections**: DirectConnection[]
* **directPeeringType**: 'Cdn' | 'Edge' | 'Internal' | 'Ix' | 'IxRs' | 'Transit'
* **peerAsn**: SubResource
* **useForPeeringService**: bool (ReadOnly)

## DirectConnection
### Properties
* **bandwidthInMbps**: int
* **bgpSession**: BgpSession
* **connectionIdentifier**: string
* **connectionState**: 'Active' | 'Approved' | 'None' | 'PendingApproval' | 'ProvisioningCompleted' | 'ProvisioningFailed' | 'ProvisioningStarted' | 'Validating' (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **peeringDBFacilityId**: int
* **provisionedBandwidthInMbps**: int (ReadOnly)
* **sessionAddressProvider**: 'Microsoft' | 'Peer'
* **useForPeeringService**: bool

## BgpSession
### Properties
* **maxPrefixesAdvertisedV4**: int
* **maxPrefixesAdvertisedV6**: int
* **md5AuthenticationKey**: string
* **microsoftSessionIPv4Address**: string
* **microsoftSessionIPv6Address**: string
* **peerSessionIPv4Address**: string
* **peerSessionIPv6Address**: string
* **sessionPrefixV4**: string
* **sessionPrefixV6**: string
* **sessionStateV4**: 'Active' | 'Connect' | 'Established' | 'Idle' | 'None' | 'OpenConfirm' | 'OpenReceived' | 'OpenSent' | 'PendingAdd' | 'PendingRemove' | 'PendingUpdate' (ReadOnly)
* **sessionStateV6**: 'Active' | 'Connect' | 'Established' | 'Idle' | 'None' | 'OpenConfirm' | 'OpenReceived' | 'OpenSent' | 'PendingAdd' | 'PendingRemove' | 'PendingUpdate' (ReadOnly)

## SubResource
### Properties
* **id**: string

## PeeringPropertiesExchange
### Properties
* **connections**: ExchangeConnection[]
* **peerAsn**: SubResource

## ExchangeConnection
### Properties
* **bgpSession**: BgpSession
* **connectionIdentifier**: string
* **connectionState**: 'Active' | 'Approved' | 'None' | 'PendingApproval' | 'ProvisioningCompleted' | 'ProvisioningFailed' | 'ProvisioningStarted' | 'Validating' (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **peeringDBFacilityId**: int

## PeeringSku
### Properties
* **family**: 'Direct' | 'Exchange'
* **name**: string
* **size**: 'Free' | 'Metered' | 'Unlimited'
* **tier**: 'Basic' | 'Premium'

## PeeringTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PeeringRegisteredAsnProperties
### Properties
* **asn**: int
* **peeringServicePrefixKey**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PeeringRegisteredPrefixProperties
### Properties
* **errorMessage**: string (ReadOnly)
* **peeringServicePrefixKey**: string (ReadOnly)
* **prefix**: string
* **prefixValidationState**: 'Failed' | 'Invalid' | 'None' | 'Pending' | 'Unknown' | 'Verified' | 'Warning' (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PeeringServiceProperties
### Properties
* **peeringServiceLocation**: string
* **peeringServiceProvider**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PeeringServiceSku
### Properties
* **name**: string

## PeeringServiceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PeeringServicePrefixProperties
### Properties
* **errorMessage**: string (ReadOnly)
* **events**: PeeringServicePrefixEvent[] (ReadOnly)
* **learnedType**: 'None' | 'ViaServiceProvider' | 'ViaSession' (ReadOnly)
* **peeringServicePrefixKey**: string
* **prefix**: string
* **prefixValidationState**: 'Failed' | 'Invalid' | 'None' | 'Pending' | 'Unknown' | 'Verified' | 'Warning' (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PeeringServicePrefixEvent
### Properties
* **eventDescription**: string (ReadOnly)
* **eventLevel**: string (ReadOnly)
* **eventSummary**: string (ReadOnly)
* **eventTimestamp**: string (ReadOnly)
* **eventType**: string (ReadOnly)

