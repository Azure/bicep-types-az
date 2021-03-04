# Microsoft.Network @ 2017-10-01

## Resource Microsoft.Network/dnsZones@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ZoneProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Network/dnsZones' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/A@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/A' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/AAAA@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/AAAA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/CAA@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/CAA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/CNAME@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/CNAME' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/MX@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/MX' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/NS@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/NS' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/PTR@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/PTR' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/SOA@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/SOA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/SRV@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/SRV' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/TXT@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/TXT' (ReadOnly, DeployTimeConstant)

## ZoneProperties
### Properties
* **maxNumberOfRecordSets**: int (ReadOnly)
* **maxNumberOfRecordsPerRecordSet**: int (ReadOnly)
* **nameServers**: string[] (ReadOnly)
* **numberOfRecordSets**: int (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RecordSetProperties
### Properties
* **aaaaRecords**: AaaaRecord[]
* **aRecords**: ARecord[]
* **caaRecords**: CaaRecord[]
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

## CaaRecord
### Properties
* **flags**: int
* **tag**: string
* **value**: string

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

