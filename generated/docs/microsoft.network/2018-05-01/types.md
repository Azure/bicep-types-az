# Microsoft.Network @ 2018-05-01

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
* **CNAMERecord**: CnameRecord
* **MXRecords**: MxRecord[]
* **NSRecords**: NsRecord[]
* **PTRRecords**: PtrRecord[]
* **SOARecord**: SoaRecord
* **SRVRecords**: SrvRecord[]
* **TTL**: int
* **TXTRecords**: TxtRecord[]
* **caaRecords**: CaaRecord[]
* **fqdn**: string (ReadOnly)
* **metadata**: Dictionary<string,String>
* **provisioningState**: string (ReadOnly)
* **targetResource**: SubResource

## AaaaRecord
### Properties
* **ipv6Address**: string

## ARecord
### Properties
* **ipv4Address**: string

## CnameRecord
### Properties
* **cname**: string

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

## CaaRecord
### Properties
* **flags**: int
* **tag**: string
* **value**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## SubResource
### Properties
* **id**: string

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
* **nameServers**: string[] (ReadOnly)
* **numberOfRecordSets**: int (ReadOnly)
* **registrationVirtualNetworks**: SubResource[]
* **resolutionVirtualNetworks**: SubResource[]
* **zoneType**: 'Private' | 'Public'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

