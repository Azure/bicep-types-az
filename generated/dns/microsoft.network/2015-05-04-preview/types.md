# Microsoft.Network @ 2015-05-04-preview

## Resource Microsoft.Network/dnszones@2015-05-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets or sets the ETag of the zone that is being updated, as received from a Get operation.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ZoneProperties](#zoneproperties): Gets or sets the properties of the zone.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Network/dnszones' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnszones/A@2015-05-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnszones/A' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnszones/AAAA@2015-05-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnszones/AAAA' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnszones/CNAME@2015-05-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnszones/CNAME' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnszones/MX@2015-05-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnszones/MX' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnszones/NS@2015-05-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnszones/NS' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnszones/PTR@2015-05-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnszones/PTR' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnszones/SOA@2015-05-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnszones/SOA' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnszones/SRV@2015-05-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnszones/SRV' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnszones/TXT@2015-05-04-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-04-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnszones/TXT' (ReadOnly, DeployTimeConstant): The resource type

## AaaaRecord
### Properties
* **ipv6Address**: string: Gets or sets the IPv6 address of this AAAA record in string notation.

## ARecord
### Properties
* **ipv4Address**: string: Gets or sets the IPv4 address of this A record in string notation.

## CnameRecord
### Properties
* **cname**: string: Gets or sets the canonical name for this record without a terminating dot.

## MxRecord
### Properties
* **exchange**: string: Gets or sets the domain name of the mail host, without a terminating dot.
* **preference**: int: Gets or sets the preference metric for this record.

## NsRecord
### Properties
* **nsdname**: string: Gets or sets the name server name for this record, without a terminating dot.

## PtrRecord
### Properties
* **ptrdname**: string: Gets or sets the PTR target domain name for this record without a terminating dot.

## RecordSetProperties
### Properties
* **AAAARecords**: [AaaaRecord](#aaaarecord)[]: Gets or sets the list of AAAA records in the RecordSet.
* **ARecords**: [ARecord](#arecord)[]: Gets or sets the list of A records in the RecordSet.
* **CNAMERecord**: [CnameRecord](#cnamerecord): Gets or sets the CNAME record in the RecordSet.
* **fqdn**: string (ReadOnly): Fully qualified domain name of the record set.
* **MXRecords**: [MxRecord](#mxrecord)[]: Gets or sets the list of MX records in the RecordSet.
* **NSRecords**: [NsRecord](#nsrecord)[]: Gets or sets the list of NS records in the RecordSet.
* **PTRRecords**: [PtrRecord](#ptrrecord)[]: Gets or sets the list of PTR records in the RecordSet.
* **SOARecord**: [SoaRecord](#soarecord): Gets or sets the SOA record in the RecordSet.
* **SRVRecords**: [SrvRecord](#srvrecord)[]: Gets or sets the list of SRV records in the RecordSet.
* **TTL**: int: Gets or sets the TTL of the records in the RecordSet.
* **TXTRecords**: [TxtRecord](#txtrecord)[]: Gets or sets the list of TXT records in the RecordSet.

## SoaRecord
### Properties
* **email**: string: Gets or sets the email for this record.
* **expireTime**: int: Gets or sets the expire time for this record.
* **host**: string: Gets or sets the domain name of the authoritative name server, without a terminating dot.
* **minimumTTL**: int: Gets or sets the minimum TTL value for this record.
* **refreshTime**: int: Gets or sets the refresh value for this record.
* **retryTime**: int: Gets or sets the retry time for this record.
* **serialNumber**: int: Gets or sets the serial number for this record.

## SrvRecord
### Properties
* **port**: int: Gets or sets the port of the service for this record.
* **priority**: int: Gets or sets the priority metric for this record.
* **target**: string: Gets or sets the domain name of the target for this record, without a terminating dot.
* **weight**: int: Gets or sets the weight metric for this record.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TxtRecord
### Properties
* **value**: string[]: Gets or sets the text value of this record.

## ZoneProperties
### Properties
* **maxNumberOfRecordSets**: int: Gets or sets the maximum number of record sets that can be created in this zone.
* **maxNumberOfRecordsPerRecordSet**: int (ReadOnly): The maximum number of records per record set that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
* **numberOfRecordSets**: int: Gets or sets the current number of record sets in this zone.

