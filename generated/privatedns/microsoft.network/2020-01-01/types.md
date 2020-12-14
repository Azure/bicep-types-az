# Microsoft.Network @ 2020-01-01

## Resource Microsoft.Network/privateDnsZones@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateZoneProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/privateDnsZones' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/A@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/A' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/AAAA@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/AAAA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/CNAME@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/CNAME' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/MX@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/MX' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/PTR@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/PTR' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/SOA@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/SOA' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/SRV@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/SRV' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/TXT@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RecordSetProperties
* **type**: 'Microsoft.Network/privateDnsZones/TXT' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkLinkProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/privateDnsZones/virtualNetworkLinks' (ReadOnly, DeployTimeConstant)

## PrivateZoneProperties
### Properties
* **internalId**: string (ReadOnly)
* **maxNumberOfRecordSets**: int (ReadOnly)
* **maxNumberOfVirtualNetworkLinks**: int (ReadOnly)
* **maxNumberOfVirtualNetworkLinksWithRegistration**: int (ReadOnly)
* **numberOfRecordSets**: int (ReadOnly)
* **numberOfVirtualNetworkLinks**: int (ReadOnly)
* **numberOfVirtualNetworkLinksWithRegistration**: int (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RecordSetProperties
### Properties
* **aaaaRecords**: AaaaRecord[]
* **aRecords**: ARecord[]
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
### Properties
### Additional Properties
* **Additional Properties Type**: string

