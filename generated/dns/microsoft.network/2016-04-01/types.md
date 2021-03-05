# Microsoft.Network @ 2016-04-01

## Resource Microsoft.Network/dnsZones@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ZoneProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Network/dnsZones' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/A@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/A' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/AAAA@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/AAAA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/CNAME@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/CNAME' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/MX@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/MX' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/NS@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/NS' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/PTR@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/PTR' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/SOA@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/SOA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/SRV@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/SRV' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/TXT@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/TXT' (ReadOnly, DeployTimeConstant)

## ZoneProperties
### Properties
* **maxNumberOfRecordSets**: int
* **maxNumberOfRecordsPerRecordSet**: int (ReadOnly)
* **nameServers**: string[] (ReadOnly)
* **numberOfRecordSets**: int

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RecordSetProperties
### Properties
* **aaaaRecords**: AaaaRecord[]
* **aRecords**: ARecord[]
* **cnameRecord**: CnameRecord
* **fqdn**: string (ReadOnly)
* **metadata**: RecordSetPropertiesMetadata
* **mxRecords**: MxRecord[]
* **NsRecords**: NsRecord[]
* **ptrRecords**: PtrRecord[]
* **soaRecord**: SoaRecord
* **srvRecords**: SrvRecord[]
* **TTL**: int
* **txtRecords**: TxtRecord[]

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

## NsRecord
### Properties
* **nsdname**: string

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

