# Microsoft.Storage @ 2017-10-01

## Resource Microsoft.Storage/storageAccounts@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **kind**: 'BlobStorage' | 'Storage' | 'StorageV2' (Required): Indicates the type of storage account.
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters): The parameters used to create the storage account.
* **sku**: [Sku](#sku) (Required): The SKU of the storage account.
* **tags**: [StorageAccountCreateParametersTags](#storageaccountcreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned' (Required): The identity type.

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot': Required for storage accounts where kind = BlobStorage. The access tier used for billing.
* **creationTime**: string (ReadOnly): Gets the creation date and time of the storage account in UTC.
* **customDomain**: [CustomDomain](#customdomain): The custom domain assigned to this storage account. This can be set via Update.
* **encryption**: [Encryption](#encryption): The encryption settings on the storage account.
* **lastGeoFailoverTime**: string (ReadOnly): Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **networkAcls**: [NetworkRuleSet](#networkruleset): Network rule set
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue, or table object.
* **primaryLocation**: string (ReadOnly): Gets the location of the primary data center for the storage account.
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly): Gets the status of the storage account at the time the operation was called.
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue, or table object.
* **secondaryLocation**: string (ReadOnly): Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the primary location of the storage account is available or unavailable.
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the primary location of the storage account is available or unavailable.
* **supportsHttpsTrafficOnly**: bool: Allows https traffic only to storage service if sets to true.

## CustomDomain
### Properties
* **name**: string (Required): Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
* **useSubDomainName**: bool: Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates.

## Encryption
### Properties
* **keySource**: 'Microsoft.Keyvault' | 'Microsoft.Storage' (Required): The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
* **keyvaultproperties**: [KeyVaultProperties](#keyvaultproperties): Properties of key vault.
* **services**: [EncryptionServices](#encryptionservices): A list of services that support encryption.

## KeyVaultProperties
### Properties
* **keyname**: string: The name of KeyVault key.
* **keyvaulturi**: string: The Uri of KeyVault.
* **keyversion**: string: The version of KeyVault key.

## EncryptionServices
### Properties
* **blob**: [EncryptionService](#encryptionservice): A service that allows server-side encryption to be used.
* **file**: [EncryptionService](#encryptionservice): A service that allows server-side encryption to be used.
* **queue**: [EncryptionService](#encryptionservice) (ReadOnly): A service that allows server-side encryption to be used.
* **table**: [EncryptionService](#encryptionservice) (ReadOnly): A service that allows server-side encryption to be used.

## EncryptionService
### Properties
* **enabled**: bool: A boolean indicating whether or not the service encrypts the data as it is stored.
* **lastEnabledTime**: string (ReadOnly): Gets a rough estimate of the date/time when the encryption was last enabled by the user. Only returned when encryption is enabled. There might be some unencrypted blobs which were written after this time, as it is just a rough estimate.

## NetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'Logging' | 'Metrics' | 'None': Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics.
* **defaultAction**: 'Allow' | 'Deny' (Required): Specifies the default action of allow or deny when no other rules match.
* **ipRules**: [IPRule](#iprule)[]: Sets the IP ACL rules
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: Sets the virtual network rules

## IPRule
### Properties
* **action**: 'Allow': The action of virtual network rule.
* **value**: string (Required): Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.

## VirtualNetworkRule
### Properties
* **action**: 'Allow': The action of virtual network rule.
* **id**: string (Required): Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
* **state**: 'deprovisioning' | 'failed' | 'networkSourceDeleted' | 'provisioning' | 'succeeded': Gets the state of virtual network rule.

## Endpoints
### Properties
* **blob**: string (ReadOnly): Gets the blob endpoint.
* **file**: string (ReadOnly): Gets the file endpoint.
* **queue**: string (ReadOnly): Gets the queue endpoint.
* **table**: string (ReadOnly): Gets the table endpoint.

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

## Restriction
### Properties
* **reasonCode**: 'NotAvailableForSubscription' | 'QuotaId': The reason for the restriction. As of now this can be "QuotaId" or "NotAvailableForSubscription". Quota Id is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. The "NotAvailableForSubscription" is related to capacity at DC.
* **type**: string (ReadOnly): The type of restrictions. As of now only possible value for this is location.
* **values**: string[] (ReadOnly): The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.

## StorageAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

