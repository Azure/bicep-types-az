# Microsoft.Storage @ 2017-10-01

## Resource Microsoft.Storage/storageAccounts@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **kind**: 'BlobStorage' | 'Storage' | 'StorageV2' (Required): Required. Indicates the type of storage account.
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters): The parameters used to create the storage account.
* **sku**: [Sku](#sku) (Required): Required. Gets or sets the sku name.
* **tags**: [StorageAccountCreateParametersTags](#storageaccountcreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Function listAccountSas (Microsoft.Storage/storageAccounts@2017-10-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2017-10-01
* **Input**: [AccountSasParameters](#accountsasparameters)
* **Output**: [ListAccountSasResponse](#listaccountsasresponse)

## Function listKeys (Microsoft.Storage/storageAccounts@2017-10-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2017-10-01
* **Output**: [StorageAccountListKeysResult](#storageaccountlistkeysresult)

## Function listServiceSas (Microsoft.Storage/storageAccounts@2017-10-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2017-10-01
* **Input**: [ServiceSasParameters](#servicesasparameters)
* **Output**: [ListServiceSasResponse](#listservicesasresponse)

## AccountSasParameters
### Properties
* **keyToSign**: string (WriteOnly): The key to sign the account SAS token with.
* **signedExpiry**: string (Required, WriteOnly): The time at which the shared access signature becomes invalid.
* **signedIp**: string (WriteOnly): An IP address or a range of IP addresses from which to accept requests.
* **signedPermission**: 'a' | 'c' | 'd' | 'l' | 'p' | 'r' | 'u' | 'w' | string (Required, WriteOnly): The signed permissions for the account SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p).
* **signedProtocol**: 'https' | 'https,http' (WriteOnly): The protocol permitted for a request made with the account SAS.
* **signedResourceTypes**: 'c' | 'o' | 's' | string (Required, WriteOnly): The signed resource types that are accessible with the account SAS. Service (s): Access to service-level APIs; Container (c): Access to container-level APIs; Object (o): Access to object-level APIs for blobs, queue messages, table entities, and files.
* **signedServices**: 'b' | 'f' | 'q' | 't' | string (Required, WriteOnly): The signed services accessible with the account SAS. Possible values include: Blob (b), Queue (q), Table (t), File (f).
* **signedStart**: string (WriteOnly): The time at which the SAS becomes valid.

## CustomDomain
### Properties
* **name**: string (Required): Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
* **useSubDomainName**: bool: Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates.

## Encryption
### Properties
* **keySource**: 'Microsoft.Keyvault' | 'Microsoft.Storage' | string (Required): The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
* **keyvaultproperties**: [KeyVaultProperties](#keyvaultproperties): Properties provided by key vault.
* **services**: [EncryptionServices](#encryptionservices): List of services which support encryption.

## EncryptionService
### Properties
* **enabled**: bool: A boolean indicating whether or not the service encrypts the data as it is stored.
* **lastEnabledTime**: string (ReadOnly): Gets a rough estimate of the date/time when the encryption was last enabled by the user. Only returned when encryption is enabled. There might be some unencrypted blobs which were written after this time, as it is just a rough estimate.

## EncryptionServices
### Properties
* **blob**: [EncryptionService](#encryptionservice): The encryption function of the blob storage service.
* **file**: [EncryptionService](#encryptionservice): The encryption function of the file storage service.
* **queue**: [EncryptionService](#encryptionservice) (ReadOnly): The encryption function of the queue storage service.
* **table**: [EncryptionService](#encryptionservice) (ReadOnly): The encryption function of the table storage service.

## Endpoints
### Properties
* **blob**: string (ReadOnly): Gets the blob endpoint.
* **file**: string (ReadOnly): Gets the file endpoint.
* **queue**: string (ReadOnly): Gets the queue endpoint.
* **table**: string (ReadOnly): Gets the table endpoint.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned' (Required): The identity type.

## IPRule
### Properties
* **action**: 'Allow': The action of IP ACL rule.
* **value**: string (Required): Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.

## KeyVaultProperties
### Properties
* **keyname**: string: The name of KeyVault key.
* **keyvaulturi**: string: The Uri of KeyVault.
* **keyversion**: string: The version of KeyVault key.

## ListAccountSasResponse
### Properties
* **accountSasToken**: string (ReadOnly): List SAS credentials of storage account.

## ListServiceSasResponse
### Properties
* **serviceSasToken**: string (ReadOnly): List service SAS credentials of specific resource.

## NetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'Logging' | 'Metrics' | 'None' | string: Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics.
* **defaultAction**: 'Allow' | 'Deny' (Required): Specifies the default action of allow or deny when no other rules match.
* **ipRules**: [IPRule](#iprule)[]: Sets the IP ACL rules
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: Sets the virtual network rules

## Restriction
### Properties
* **reasonCode**: 'NotAvailableForSubscription' | 'QuotaId' | string: The reason for the restriction. As of now this can be "QuotaId" or "NotAvailableForSubscription". Quota Id is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. The "NotAvailableForSubscription" is related to capacity at DC.
* **type**: string (ReadOnly): The type of restrictions. As of now only possible value for this is location.
* **values**: string[] (ReadOnly): The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.

## ServiceSasParameters
### Properties
* **canonicalizedResource**: string (Required, WriteOnly): The canonical path to the signed resource.
* **endPk**: string (WriteOnly): The end of partition key.
* **endRk**: string (WriteOnly): The end of row key.
* **keyToSign**: string (WriteOnly): The key to sign the account SAS token with.
* **rscc**: string (WriteOnly): The response header override for cache control.
* **rscd**: string (WriteOnly): The response header override for content disposition.
* **rsce**: string (WriteOnly): The response header override for content encoding.
* **rscl**: string (WriteOnly): The response header override for content language.
* **rsct**: string (WriteOnly): The response header override for content type.
* **signedExpiry**: string (WriteOnly): The time at which the shared access signature becomes invalid.
* **signedIdentifier**: string (WriteOnly): A unique value up to 64 characters in length that correlates to an access policy specified for the container, queue, or table.
* **signedIp**: string (WriteOnly): An IP address or a range of IP addresses from which to accept requests.
* **signedPermission**: 'a' | 'c' | 'd' | 'l' | 'p' | 'r' | 'u' | 'w' | string (WriteOnly): The signed permissions for the service SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p).
* **signedProtocol**: 'https' | 'https,http' (WriteOnly): The protocol permitted for a request made with the account SAS.
* **signedResource**: 'b' | 'c' | 'f' | 's' | string (Required, WriteOnly): The signed services accessible with the service SAS. Possible values include: Blob (b), Container (c), File (f), Share (s).
* **signedStart**: string (WriteOnly): The time at which the SAS becomes valid.
* **startPk**: string (WriteOnly): The start of partition key.
* **startRk**: string (WriteOnly): The start of row key.

## Sku
### Properties
* **capabilities**: [SKUCapability](#skucapability)[] (ReadOnly): The capability information in the specified sku, including file encryption, network acls, change notification, etc.
* **kind**: 'BlobStorage' | 'Storage' | 'StorageV2' (ReadOnly): Indicates the type of storage account.
* **locations**: string[] (ReadOnly): The set of locations that the SKU is available. This will be supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.).
* **name**: 'Premium_LRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS' (Required): Gets or sets the sku name. Required for account creation; optional for update. Note that in older versions, sku name was called accountType.
* **resourceType**: string (ReadOnly): The type of the resource, usually it is 'storageAccounts'.
* **restrictions**: [Restriction](#restriction)[]: The restrictions because of which SKU cannot be used. This is empty if there are no restrictions.
* **tier**: 'Premium' | 'Standard' (ReadOnly): Gets the sku tier. This is based on the SKU name.

## SKUCapability
### Properties
* **name**: string (ReadOnly): The name of capability, The capability information in the specified sku, including file encryption, network acls, change notification, etc.
* **value**: string (ReadOnly): A string value to indicate states of given capability. Possibly 'true' or 'false'.

## StorageAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageAccountKey
### Properties
* **keyName**: string (ReadOnly): Name of the key.
* **permissions**: 'Full' | 'Read' (ReadOnly): Permissions for the key -- read-only or full permissions.
* **value**: string (ReadOnly): Base 64-encoded value of the key.

## StorageAccountListKeysResult
### Properties
* **keys**: [StorageAccountKey](#storageaccountkey)[] (ReadOnly): Gets the list of storage account keys and their properties for the specified storage account.

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot': Required for storage accounts where kind = BlobStorage. The access tier used for billing.
* **creationTime**: string (ReadOnly): Gets the creation date and time of the storage account in UTC.
* **customDomain**: [CustomDomain](#customdomain): User domain assigned to the storage account. Name is the CNAME source. Only one custom domain is supported per storage account at this time. To clear the existing custom domain, use an empty string for the custom domain name property.
* **encryption**: [Encryption](#encryption): Provides the encryption settings on the account. If left unspecified the account encryption settings will remain the same. The default setting is unencrypted.
* **lastGeoFailoverTime**: string (ReadOnly): Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **networkAcls**: [NetworkRuleSet](#networkruleset): Network rule set
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object. Note that Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
* **primaryLocation**: string (ReadOnly): Gets the location of the primary data center for the storage account.
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly): Gets the status of the storage account at the time the operation was called.
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object from the secondary location of the storage account. Only available if the SKU name is Standard_RAGRS.
* **secondaryLocation**: string (ReadOnly): Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the primary location of the storage account is available or unavailable.
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
* **supportsHttpsTrafficOnly**: bool: Allows https traffic only to storage service if sets to true.

## VirtualNetworkRule
### Properties
* **action**: 'Allow': The action of virtual network rule.
* **id**: string (Required): Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
* **state**: 'deprovisioning' | 'failed' | 'networkSourceDeleted' | 'provisioning' | 'succeeded': Gets the state of virtual network rule.

