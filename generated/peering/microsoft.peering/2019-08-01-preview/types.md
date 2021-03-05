# Microsoft.Peering @ 2019-08-01-preview

## Resource Microsoft.Peering/peerAsns@2019-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PeerAsnProperties
* **type**: 'Microsoft.Peering/peerAsns' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Peering/peeringServices@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PeeringServiceProperties
* **tags**: PeeringServiceTags
* **type**: 'Microsoft.Peering/peeringServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Peering/peeringServices/prefixes@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PeeringServicePrefixProperties
* **type**: 'Microsoft.Peering/peeringServices/prefixes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Peering/peerings@2019-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'Direct' | 'Exchange' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PeeringProperties
* **sku**: PeeringSku (Required)
* **tags**: PeeringTags
* **type**: 'Microsoft.Peering/peerings' (ReadOnly, DeployTimeConstant)

## PeerAsnProperties
### Properties
* **peerAsn**: int
* **peerContactInfo**: ContactInfo
* **peerName**: string
* **validationState**: 'Approved' | 'Failed' | 'None' | 'Pending'

## ContactInfo
### Properties
* **emails**: string[]
* **phone**: string[]

## PeeringServiceProperties
### Properties
* **peeringServiceLocation**: string
* **peeringServiceProvider**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PeeringServiceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PeeringServicePrefixProperties
### Properties
* **learnedType**: 'None' | 'ViaPartner' | 'ViaSession'
* **prefix**: string
* **prefixValidationState**: 'Failed' | 'Invalid' | 'None' | 'Pending' | 'Unknown' | 'Verified'
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PeeringProperties
### Properties
* **direct**: PeeringPropertiesDirect
* **exchange**: PeeringPropertiesExchange
* **peeringLocation**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PeeringPropertiesDirect
### Properties
* **connections**: DirectConnection[]
* **directPeeringType**: 'Cdn' | 'Edge' | 'Internal' | 'Transit'
* **peerAsn**: SubResource
* **useForPeeringService**: bool

## DirectConnection
### Properties
* **bandwidthInMbps**: int
* **bgpSession**: BgpSession
* **connectionIdentifier**: string
* **connectionState**: 'Active' | 'Approved' | 'None' | 'PendingApproval' | 'ProvisioningCompleted' | 'ProvisioningFailed' | 'ProvisioningStarted' | 'Validating' (ReadOnly)
* **peeringDBFacilityId**: int
* **provisionedBandwidthInMbps**: int
* **sessionAddressProvider**: 'Microsoft' | 'Peer'
* **useForPeeringService**: bool

## BgpSession
### Properties
* **maxPrefixesAdvertisedV4**: int
* **maxPrefixesAdvertisedV6**: int
* **md5AuthenticationKey**: string
* **microsoftSessionIPv4Address**: string (ReadOnly)
* **microsoftSessionIPv6Address**: string (ReadOnly)
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
* **peeringDBFacilityId**: int

## PeeringSku
### Properties
* **family**: 'Direct' | 'Exchange'
* **name**: 'Basic_Direct_Free' | 'Basic_Exchange_Free' | 'Premium_Direct_Free' | 'Premium_Direct_Metered' | 'Premium_Direct_Unlimited' | 'Premium_Exchange_Metered'
* **size**: 'Free' | 'Metered' | 'Unlimited'
* **tier**: 'Basic' | 'Premium'

## PeeringTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

