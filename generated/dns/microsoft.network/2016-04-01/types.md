# Microsoft.Network @ 2016-04-01

## Resource Microsoft.Network/dnsZones@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the zone.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ZoneProperties](#zoneproperties): The properties of the zone.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/dnsZones' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/A@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/A' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/AAAA@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/AAAA' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/CNAME@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/CNAME' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/MX@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/MX' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/NS@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/NS' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/PTR@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/PTR' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/SOA@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/SOA' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/SRV@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/SRV' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/TXT@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/TXT' (ReadOnly, DeployTimeConstant): The resource type

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

## NsRecord
### Properties
* **nsdname**: string: The name server name for this NS record.

## PtrRecord
### Properties
* **ptrdname**: string: The PTR target domain name for this PTR record.

## RecordSetProperties
### Properties
* **AAAARecords**: [AaaaRecord](#aaaarecord)[]: The list of AAAA records in the record set.
* **ARecords**: [ARecord](#arecord)[]: The list of A records in the record set.
* **CNAMERecord**: [CnameRecord](#cnamerecord): The CNAME record in the  record set.
* **fqdn**: string (ReadOnly): Fully qualified domain name of the record set.
* **metadata**: [RecordSetPropertiesMetadata](#recordsetpropertiesmetadata): The metadata attached to the record set.
* **MXRecords**: [MxRecord](#mxrecord)[]: The list of MX records in the record set.
* **NSRecords**: [NsRecord](#nsrecord)[]: The list of NS records in the record set.
* **PTRRecords**: [PtrRecord](#ptrrecord)[]: The list of PTR records in the record set.
* **SOARecord**: [SoaRecord](#soarecord): The SOA record in the record set.
* **SRVRecords**: [SrvRecord](#srvrecord)[]: The list of SRV records in the record set.
* **TTL**: int: The TTL (time-to-live) of the records in the record set.
* **TXTRecords**: [TxtRecord](#txtrecord)[]: The list of TXT records in the record set.

## RecordSetPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SoaRecord
### Properties
* **email**: string: The email contact for this SOA record.
* **expireTime**: int: The expire time for this SOA record.
* **host**: string: The domain name of the authoritative name server for this SOA record.
* **minimumTTL**: int: The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
* **refreshTime**: int: The refresh value for this SOA record.
* **retryTime**: int: The retry time for this SOA record.
* **serialNumber**: int: The serial number for this SOA record.

## SrvRecord
### Properties
* **port**: int: The port value for this SRV record.
* **priority**: int: The priority value for this SRV record.
* **target**: string: The target domain name for this SRV record.
* **weight**: int: The weight value for this SRV record.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TxtRecord
### Properties
* **value**: string[]: The text value of this TXT record.

## ZoneProperties
### Properties
* **maxNumberOfRecordSets**: int: The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
* **maxNumberOfRecordsPerRecordSet**: int (ReadOnly): The maximum number of records per record set that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
* **nameServers**: string[] (ReadOnly): The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored.
* **numberOfRecordSets**: int: The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
* **zoneType**: 'Private' | 'Public': The type of this DNS zone (Public or Private).

