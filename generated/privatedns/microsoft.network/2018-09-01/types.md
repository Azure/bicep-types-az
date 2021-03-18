# Microsoft.Network @ 2018-09-01

## Resource Microsoft.Network/privateDnsZones@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateZoneProperties](#privatezoneproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Network/privateDnsZones' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/A@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/privateDnsZones/A' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/AAAA@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/privateDnsZones/AAAA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/CNAME@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/privateDnsZones/CNAME' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/MX@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/privateDnsZones/MX' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/PTR@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/privateDnsZones/PTR' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/SOA@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/privateDnsZones/SOA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/SRV@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/privateDnsZones/SRV' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/TXT@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/privateDnsZones/TXT' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/virtualNetworkLinks@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkLinkProperties](#virtualnetworklinkproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Network/privateDnsZones/virtualNetworkLinks' (ReadOnly, DeployTimeConstant)

## PrivateZoneProperties
### Properties
* **maxNumberOfRecordSets**: int (ReadOnly)
* **maxNumberOfVirtualNetworkLinks**: int (ReadOnly)
* **maxNumberOfVirtualNetworkLinksWithRegistration**: int (ReadOnly)
* **numberOfRecordSets**: int (ReadOnly)
* **numberOfVirtualNetworkLinks**: int (ReadOnly)
* **numberOfVirtualNetworkLinksWithRegistration**: int (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RecordSetProperties
### Properties
* **aaaaRecords**: [AaaaRecord](#aaaarecord)[]
* **aRecords**: [ARecord](#arecord)[]
* **cnameRecord**: [CnameRecord](#cnamerecord)
* **fqdn**: string (ReadOnly)
* **isAutoRegistered**: bool (ReadOnly)
* **metadata**: [RecordSetPropertiesMetadata](#recordsetpropertiesmetadata)
* **mxRecords**: [MxRecord](#mxrecord)[]
* **ptrRecords**: [PtrRecord](#ptrrecord)[]
* **soaRecord**: [SoaRecord](#soarecord)
* **srvRecords**: [SrvRecord](#srvrecord)[]
* **ttl**: int
* **txtRecords**: [TxtRecord](#txtrecord)[]

## AaaaRecord
### Properties
* **ipv6Address**: string

## ARecord
### Properties
* **ipv4Address**: string

## CnameRecord
### Properties
* **cname**: string

## RecordSetPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MxRecord
### Properties
* **exchange**: string
* **preference**: int

## PtrRecord
### Properties
* **ptrdname**: string

## SoaRecord
### Properties
* **email**: string
* **expireTime**: int
* **host**: string
* **minimumTtl**: int
* **refreshTime**: int
* **retryTime**: int
* **serialNumber**: int

## SrvRecord
### Properties
* **port**: int
* **priority**: int
* **target**: string
* **weight**: int

## TxtRecord
### Properties
* **value**: string[]

## VirtualNetworkLinkProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **registrationEnabled**: bool
* **virtualNetwork**: [SubResource](#subresource)
* **virtualNetworkLinkState**: 'Completed' | 'InProgress' (ReadOnly)

## SubResource
### Properties
* **id**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

