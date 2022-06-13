# Microsoft.Network @ 2020-06-01

## Resource Microsoft.Network/privateDnsZones@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the zone.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateZoneProperties](#privatezoneproperties): Properties of the Private DNS zone.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/privateDnsZones' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateDnsZones/A@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/privateDnsZones/A' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateDnsZones/AAAA@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/privateDnsZones/AAAA' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateDnsZones/CNAME@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/privateDnsZones/CNAME' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateDnsZones/MX@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/privateDnsZones/MX' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateDnsZones/PTR@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/privateDnsZones/PTR' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateDnsZones/SOA@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/privateDnsZones/SOA' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateDnsZones/SRV@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/privateDnsZones/SRV' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateDnsZones/TXT@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/privateDnsZones/TXT' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the virtual network link.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualNetworkLinkProperties](#virtualnetworklinkproperties): Properties of the virtual network link to the Private DNS zone.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/privateDnsZones/virtualNetworkLinks' (ReadOnly, DeployTimeConstant): The resource type

## AaaaRecord
### Properties
* **ipv6Address**: string: The IPv6 address of this AAAA record.

## ARecord
### Properties
* **ipv4Address**: string: The IPv4 address of this A record.

## CnameRecord
### Properties
* **cname**: string: The canonical name for this CNAME record.

## MxRecord
### Properties
* **exchange**: string: The domain name of the mail host for this MX record.
* **preference**: int: The preference value for this MX record.

## PrivateZoneProperties
### Properties
* **internalId**: string (ReadOnly): Private zone internal Id
* **maxNumberOfRecordSets**: int (ReadOnly): The maximum number of record sets that can be created in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
* **maxNumberOfVirtualNetworkLinks**: int (ReadOnly): The maximum number of virtual networks that can be linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
* **maxNumberOfVirtualNetworkLinksWithRegistration**: int (ReadOnly): The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
* **numberOfRecordSets**: int (ReadOnly): The current number of record sets in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
* **numberOfVirtualNetworkLinks**: int (ReadOnly): The current number of virtual networks that are linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
* **numberOfVirtualNetworkLinksWithRegistration**: int (ReadOnly): The current number of virtual networks that are linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.

## PtrRecord
### Properties
* **ptrdname**: string: The PTR target domain name for this PTR record.

## RecordSetProperties
### Properties
* **aaaaRecords**: [AaaaRecord](#aaaarecord)[]: The list of AAAA records in the record set.
* **aRecords**: [ARecord](#arecord)[]: The list of A records in the record set.
* **cnameRecord**: [CnameRecord](#cnamerecord): The CNAME record in the record set.
* **fqdn**: string (ReadOnly): Fully qualified domain name of the record set.
* **isAutoRegistered**: bool (ReadOnly): Is the record set auto-registered in the Private DNS zone through a virtual network link?
* **metadata**: [RecordSetPropertiesMetadata](#recordsetpropertiesmetadata): The metadata attached to the record set.
* **mxRecords**: [MxRecord](#mxrecord)[]: The list of MX records in the record set.
* **ptrRecords**: [PtrRecord](#ptrrecord)[]: The list of PTR records in the record set.
* **soaRecord**: [SoaRecord](#soarecord): The SOA record in the record set.
* **srvRecords**: [SrvRecord](#srvrecord)[]: The list of SRV records in the record set.
* **ttl**: int: The TTL (time-to-live) of the records in the record set.
* **txtRecords**: [TxtRecord](#txtrecord)[]: The list of TXT records in the record set.

## RecordSetPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SoaRecord
### Properties
* **email**: string: The email contact for this SOA record.
* **expireTime**: int: The expire time for this SOA record.
* **host**: string: The domain name of the authoritative name server for this SOA record.
* **minimumTtl**: int: The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
* **refreshTime**: int: The refresh value for this SOA record.
* **retryTime**: int: The retry time for this SOA record.
* **serialNumber**: int: The serial number for this SOA record.

## SrvRecord
### Properties
* **port**: int: The port value for this SRV record.
* **priority**: int: The priority value for this SRV record.
* **target**: string: The target domain name for this SRV record.
* **weight**: int: The weight value for this SRV record.

## SubResource
### Properties
* **id**: string: Resource ID.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TxtRecord
### Properties
* **value**: string[]: The text value of this TXT record.

## VirtualNetworkLinkProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
* **registrationEnabled**: bool: Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
* **virtualNetwork**: [SubResource](#subresource): The reference of the virtual network.
* **virtualNetworkLinkState**: 'Completed' | 'InProgress' | string (ReadOnly): The status of the virtual network link to the Private DNS zone. Possible values are 'InProgress' and 'Done'. This is a read-only property and any attempt to set this value will be ignored.

