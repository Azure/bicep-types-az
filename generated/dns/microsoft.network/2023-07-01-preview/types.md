# Microsoft.Network @ 2023-07-01-preview

## Resource Microsoft.Network/dnsZones@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the zone.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ZoneProperties](#zoneproperties): The properties of the zone.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/dnsZones' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/A@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/A' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/AAAA@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/AAAA' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/CAA@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/CAA' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/CNAME@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/CNAME' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/dnssecConfigs@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag of the DNSSEC configuration.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [DnssecProperties](#dnssecproperties) (ReadOnly): The DNSSEC properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Network/dnsZones/dnssecConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/DS@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/DS' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/MX@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/MX' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/NAPTR@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/NAPTR' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/NS@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/NS' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/PTR@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/PTR' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/SOA@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/SOA' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/SRV@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/SRV' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/TLSA@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the record set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecordSetProperties](#recordsetproperties): The properties of the record set.
* **type**: 'Microsoft.Network/dnsZones/TLSA' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/dnsZones/TXT@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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

## CaaRecord
### Properties
* **flags**: int: The flags for this CAA record as an integer between 0 and 255.
* **tag**: string: The tag for this CAA record.
* **value**: string: The value for this CAA record.

## CnameRecord
### Properties
* **cname**: string: The canonical name for this CNAME record.

## DelegationSignerInfo
### Properties
* **digestAlgorithmType**: int (ReadOnly): The digest algorithm type represents the standard digest algorithm number used to construct the digest. See: https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml
* **digestValue**: string (ReadOnly): The digest value is a cryptographic hash value of the referenced DNSKEY Resource Record.
* **record**: string (ReadOnly): The record represents a delegation signer (DS) record.

## Digest
### Properties
* **algorithmType**: int: The digest algorithm type represents the standard digest algorithm number used to construct the digest. See: https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml
* **value**: string: The digest value is a cryptographic hash value of the referenced DNSKEY Resource Record.

## DnssecProperties
### Properties
* **provisioningState**: string (ReadOnly): Provisioning State of the DNSSEC configuration.
* **signingKeys**: [SigningKey](#signingkey)[] (ReadOnly): The list of signing keys.

## DsRecord
### Properties
* **algorithm**: int: The security algorithm type represents the standard security algorithm number of the DNSKEY Resource Record. See: https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml
* **digest**: [Digest](#digest): The digest entity.
* **keyTag**: int: The key tag value is used to determine which DNSKEY Resource Record is used for signature verification.

## MxRecord
### Properties
* **exchange**: string: The domain name of the mail host for this MX record.
* **preference**: int: The preference value for this MX record.

## NaptrRecord
### Properties
* **flags**: string: The flags specific to DDDS applications. Values currently defined in RFC 3404 are uppercase and lowercase letters "A", "P", "S", and "U", and the empty string, "". Enclose Flags in quotation marks.
* **order**: int: The order in which the NAPTR records MUST be processed in order to accurately represent the ordered list of rules. The ordering is from lowest to highest. Valid values: 0-65535.
* **preference**: int: The preference specifies the order in which NAPTR records with equal 'order' values should be processed, low numbers being processed before high numbers. Valid values: 0-65535.
* **regexp**: string: The regular expression that the DDDS application uses to convert an input value into an output value. For example: an IP phone system might use a regular expression to convert a phone number that is entered by a user into a SIP URI. Enclose the regular expression in quotation marks. Specify either a value for 'regexp' or a value for 'replacement'.
* **replacement**: string: The replacement is a fully qualified domain name (FQDN) of the next domain name that you want the DDDS application to submit a DNS query for. The DDDS application replaces the input value with the value specified for replacement. Specify either a value for 'regexp' or a value for 'replacement'. If you specify a value for 'regexp', specify a dot (.) for 'replacement'.
* **services**: string: The services specific to DDDS applications. Enclose Services in quotation marks.

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
* **caaRecords**: [CaaRecord](#caarecord)[]: The list of CAA records in the record set.
* **CNAMERecord**: [CnameRecord](#cnamerecord): The CNAME record in the  record set.
* **DSRecords**: [DsRecord](#dsrecord)[]: The list of DS records in the record set.
* **fqdn**: string (ReadOnly): Fully qualified domain name of the record set.
* **metadata**: [RecordSetPropertiesMetadata](#recordsetpropertiesmetadata): The metadata attached to the record set.
* **MXRecords**: [MxRecord](#mxrecord)[]: The list of MX records in the record set.
* **NAPTRRecords**: [NaptrRecord](#naptrrecord)[]: The list of NAPTR records in the record set.
* **NSRecords**: [NsRecord](#nsrecord)[]: The list of NS records in the record set.
* **provisioningState**: string (ReadOnly): provisioning State of the record set.
* **PTRRecords**: [PtrRecord](#ptrrecord)[]: The list of PTR records in the record set.
* **SOARecord**: [SoaRecord](#soarecord): The SOA record in the record set.
* **SRVRecords**: [SrvRecord](#srvrecord)[]: The list of SRV records in the record set.
* **targetResource**: [SubResource](#subresource): A reference to an azure resource from where the dns resource value is taken.
* **TLSARecords**: [TlsaRecord](#tlsarecord)[]: The list of TLSA records in the record set.
* **TTL**: int: The TTL (time-to-live) of the records in the record set.
* **TXTRecords**: [TxtRecord](#txtrecord)[]: The list of TXT records in the record set.

## RecordSetPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SigningKey
### Properties
* **delegationSignerInfo**: [DelegationSignerInfo](#delegationsignerinfo)[] (ReadOnly): The delegation signer information.
* **flags**: int (ReadOnly): The flags specifies how the key is used.
* **keyTag**: int (ReadOnly): The key tag value of the DNSKEY Resource Record.
* **protocol**: int (ReadOnly): The protocol value. The value is always 3.
* **publicKey**: string (ReadOnly): The public key, represented as a Base64 encoding.
* **securityAlgorithmType**: int (ReadOnly): The security algorithm type represents the standard security algorithm number of the DNSKEY Resource Record. See: https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml

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

## SubResource
### Properties
* **id**: string: Resource Id.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TlsaRecord
### Properties
* **certAssociationData**: string: This specifies the certificate association data to be matched.
* **matchingType**: int: The matching type specifies how the certificate association is presented.
* **selector**: int: The selector specifies which part of the TLS certificate presented by the server will be matched against the association data.
* **usage**: int: The usage specifies the provided association that will be used to match the certificate presented in the TLS handshake.

## TxtRecord
### Properties
* **value**: string[]: The text value of this TXT record.

## ZoneProperties
### Properties
* **maxNumberOfRecordSets**: int (ReadOnly): The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
* **maxNumberOfRecordsPerRecordSet**: int (ReadOnly): The maximum number of records per record set that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
* **nameServers**: string[] (ReadOnly): The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored.
* **numberOfRecordSets**: int (ReadOnly): The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
* **registrationVirtualNetworks**: [SubResource](#subresource)[]: A list of references to virtual networks that register hostnames in this DNS zone. This is a only when ZoneType is Private.
* **resolutionVirtualNetworks**: [SubResource](#subresource)[]: A list of references to virtual networks that resolve records in this DNS zone. This is a only when ZoneType is Private.
* **signingKeys**: [SigningKey](#signingkey)[] (ReadOnly): The list of signing keys.
* **zoneType**: 'Private' | 'Public': The type of this DNS zone (Public or Private).

