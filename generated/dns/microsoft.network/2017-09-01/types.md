# Microsoft.Network @ 2017-09-01

## Resource Microsoft.Network/dnsZones@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ZoneProperties](#zoneproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/dnsZones' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/A@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/dnsZones/A' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/AAAA@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/dnsZones/AAAA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/CAA@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/dnsZones/CAA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/CNAME@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/dnsZones/CNAME' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/MX@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/dnsZones/MX' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/NS@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/dnsZones/NS' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/PTR@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/dnsZones/PTR' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/SOA@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/dnsZones/SOA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/SRV@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/dnsZones/SRV' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/dnsZones/TXT@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RecordSetProperties](#recordsetproperties)
* **type**: 'Microsoft.Network/dnsZones/TXT' (ReadOnly, DeployTimeConstant)

## ZoneProperties
### Properties
* **maxNumberOfRecordSets**: int (ReadOnly)
* **maxNumberOfRecordsPerRecordSet**: int (ReadOnly)
* **nameServers**: string[] (ReadOnly)
* **numberOfRecordSets**: int (ReadOnly)
* **zoneType**: 'Private' | 'Public'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RecordSetProperties
### Properties
* **AAAARecords**: [AaaaRecord](#aaaarecord)[]
* **ARecords**: [ARecord](#arecord)[]
* **caaRecords**: [CaaRecord](#caarecord)[]
* **CNAMERecord**: [CnameRecord](#cnamerecord)
* **fqdn**: string (ReadOnly)
* **metadata**: [Dictionary<string,String>](#dictionarystringstring)
* **MXRecords**: [MxRecord](#mxrecord)[]
* **NSRecords**: [NsRecord](#nsrecord)[]
* **PTRRecords**: [PtrRecord](#ptrrecord)[]
* **SOARecord**: [SoaRecord](#soarecord)
* **SRVRecords**: [SrvRecord](#srvrecord)[]
* **TTL**: int
* **TXTRecords**: [TxtRecord](#txtrecord)[]

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

