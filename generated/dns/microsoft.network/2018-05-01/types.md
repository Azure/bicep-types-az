# Microsoft.Network @ 2018-05-01

## Microsoft.Network/dnsZones
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ZoneProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/dnsZones' (ReadOnly, DeployTimeConstant)

## ZoneProperties
### Properties
* **maxNumberOfRecordSets**: int (ReadOnly)
* **maxNumberOfRecordsPerRecordSet**: int (ReadOnly)
* **nameServers**: string[] (ReadOnly)
* **numberOfRecordSets**: int (ReadOnly)
* **registrationVirtualNetworks**: SubResource[]
* **resolutionVirtualNetworks**: SubResource[]
* **zoneType**: 'Private' | 'Public'

## SubResource
### Properties
* **id**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/dnsZones/A
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/A' (ReadOnly, DeployTimeConstant)

## RecordSetProperties
### Properties
* **AAAARecords**: AaaaRecord[]
* **ARecords**: ARecord[]
* **caaRecords**: CaaRecord[]
* **CNAMERecord**: CnameRecord
* **fqdn**: string (ReadOnly)
* **metadata**: Dictionary<string,String>
* **MXRecords**: MxRecord[]
* **NSRecords**: NsRecord[]
* **provisioningState**: string (ReadOnly)
* **PTRRecords**: PtrRecord[]
* **SOARecord**: SoaRecord
* **SRVRecords**: SrvRecord[]
* **targetResource**: SubResource
* **TTL**: int
* **TXTRecords**: TxtRecord[]

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

## Microsoft.Network/dnsZones/AAAA
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/AAAA' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/dnsZones/CAA
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/CAA' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/dnsZones/CNAME
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/CNAME' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/dnsZones/MX
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/MX' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/dnsZones/NS
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/NS' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/dnsZones/PTR
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/PTR' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/dnsZones/SOA
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/SOA' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/dnsZones/SRV
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/SRV' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/dnsZones/TXT
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/dnsZones/TXT' (ReadOnly, DeployTimeConstant)

