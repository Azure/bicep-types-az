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
* **tags**: Dictionary<string,String>
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
* **zoneType**: 'Private' | 'Public'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RecordSetProperties
### Properties
* **AAAARecords**: AaaaRecord[]
* **ARecords**: ARecord[]
* **CNAMERecord**: CnameRecord
* **fqdn**: string (ReadOnly)
* **metadata**: Dictionary<string,String>
* **MXRecords**: MxRecord[]
* **NSRecords**: NsRecord[]
* **PTRRecords**: PtrRecord[]
* **SOARecord**: SoaRecord
* **SRVRecords**: SrvRecord[]
* **TTL**: int
* **TXTRecords**: TxtRecord[]

## AaaaRecord
### Properties
* **ipv6Address**: string

## ARecord
### Properties
* **ipv4Address**: string

## CnameRecord
### Properties
* **cname**: string

## Dictionary<string,String>
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
* **minimumTTL**: int
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

