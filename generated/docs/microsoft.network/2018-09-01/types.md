# Microsoft.Network @ 2018-09-01

## Microsoft.Network/privateDnsZones/A
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/A' (ReadOnly, DeployTimeConstant)

## RecordSetProperties
### Properties
* **aRecords**: ARecord[]
* **aaaaRecords**: AaaaRecord[]
* **cnameRecord**: CnameRecord
* **fqdn**: string (ReadOnly)
* **isAutoRegistered**: bool (ReadOnly)
* **metadata**: Dictionary<string,String>
* **mxRecords**: MxRecord[]
* **ptrRecords**: PtrRecord[]
* **soaRecord**: SoaRecord
* **srvRecords**: SrvRecord[]
* **ttl**: int
* **txtRecords**: TxtRecord[]

## ARecord
### Properties
* **ipv4Address**: string

## AaaaRecord
### Properties
* **ipv6Address**: string

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

## Microsoft.Network/privateDnsZones/AAAA
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/AAAA' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/privateDnsZones/CNAME
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/CNAME' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/privateDnsZones/MX
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/MX' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/privateDnsZones/PTR
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/PTR' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/privateDnsZones/SOA
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/SOA' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/privateDnsZones/SRV
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/SRV' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/privateDnsZones/TXT
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/TXT' (ReadOnly, DeployTimeConstant)

## Microsoft.Network/privateDnsZones/virtualNetworkLinks
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkLinkProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/privateDnsZones/virtualNetworkLinks' (ReadOnly, DeployTimeConstant)

## VirtualNetworkLinkProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **registrationEnabled**: bool
* **virtualNetwork**: SubResource
* **virtualNetworkLinkState**: 'Completed' | 'InProgress' (ReadOnly)

## SubResource
### Properties
* **id**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Network/privateDnsZones
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateZoneProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/privateDnsZones' (ReadOnly, DeployTimeConstant)

## PrivateZoneProperties
### Properties
* **maxNumberOfRecordSets**: int (ReadOnly)
* **maxNumberOfVirtualNetworkLinks**: int (ReadOnly)
* **maxNumberOfVirtualNetworkLinksWithRegistration**: int (ReadOnly)
* **numberOfRecordSets**: int (ReadOnly)
* **numberOfVirtualNetworkLinks**: int (ReadOnly)
* **numberOfVirtualNetworkLinksWithRegistration**: int (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

