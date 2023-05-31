# Microsoft.Storage.Admin @ 2019-08-08-preview

## Resource Microsoft.Storage.Admin/locations/quotas@2019-08-08-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-08-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageQuotaProperties](#storagequotaproperties): Storage quota properties.
* **type**: 'Microsoft.Storage.Admin/locations/quotas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage.Admin/locations/storageAccounts@2019-08-08-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-08-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'BlobStorage' | 'Storage' | 'StorageV2' | string (ReadOnly): Indicates the type of storage account
* **location**: string (ReadOnly): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountProperties](#storageaccountproperties) (ReadOnly): Properties of the storage account.
* **tags**: [StorageAccountTags](#storageaccounttags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Storage.Admin/locations/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage.Admin/storageServices@2019-08-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceNameProperties](#servicenameproperties) (ReadOnly): Properties for service name.
* **type**: 'Microsoft.Storage.Admin/storageServices' (ReadOnly, DeployTimeConstant): The resource type

## ServiceNameProperties
### Properties
* **serviceName**: string (ReadOnly): Service Name for Storage Service.

## StorageAccountProperties
### Properties
* **accessTier**: 'Cool' | 'Hot' | string (ReadOnly): Required for storage accounts where kind = BlobStorage.
* **accountId**: string (ReadOnly): Internal storage account ID, which is not visible to tenant.
* **accountStatus**: 'Active' | 'Deleted' | string: The status of storage account.
* **accountType**: 'Premium_LRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS' | string (ReadOnly): Storage account type.
* **creationTime**: string (ReadOnly): The creation date and time of storage account in UTC.
* **deletedTime**: string (ReadOnly): The date-time when the storage account was deleted.
* **encryption**: [StorageEncryption](#storageencryption) (ReadOnly): The storage encryption setting
* **faultDomain**: string (ReadOnly): The fault domain for the storage account.
* **healthState**: 'Healthy' | 'OverQuota' | 'Suspended' | 'SuspendedAndOverQuota' | string (ReadOnly): The internal health state for storage account.
* **primaryEndpoints**: [StorageAccountPropertiesPrimaryEndpoints](#storageaccountpropertiesprimaryendpoints) (ReadOnly): The URLs that are used to perform a retrieval of a public BLOB, queue, or table object.
* **primaryLocation**: string (ReadOnly): The primary location for the storage account.
* **provisioningState**: 'Creating' | 'Succeeded' | string (ReadOnly): The provisioning state of storage account.
* **statusOfPrimary**: 'Available' | 'Unavailable' | string (ReadOnly): The status of primary location of storage account.
* **supportsHttpsTrafficOnly**: bool (ReadOnly): Storage account supports https traffic only or not
* **tenantResourceGroupName**: string (ReadOnly): The name of resource group under which the storage account locates.
* **tenantStorageAccountName**: string (ReadOnly): Storage account name from tenant view.
* **tenantSubscriptionId**: string (ReadOnly): Subscription ID of the subscription under which the storage account locates.
* **tenantViewId**: string (ReadOnly): Resource URI of storage account from tenant view.

## StorageAccountPropertiesPrimaryEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageAccountTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageEncryption
### Properties
* **keySource**: 'Microsoft.Storage' | string (ReadOnly): Encryption keySource
* **services**: [StorageEncryptionServices](#storageencryptionservices) (ReadOnly): Services for which encryption setting is mentioned

## StorageEncryptionServices
### Properties
* **blob**: [StorageEncryptionSetting](#storageencryptionsetting) (ReadOnly): Blob service.
* **queue**: [StorageEncryptionSetting](#storageencryptionsetting) (ReadOnly): Queue service
* **table**: [StorageEncryptionSetting](#storageencryptionsetting) (ReadOnly): Table service.

## StorageEncryptionSetting
### Properties
* **enabled**: bool (ReadOnly): Bool to indicate whether enabled or not.
* **lastEnabledTime**: string (ReadOnly): A rough estimate of the date/time when the encryption was last enabled by the user.

## StorageQuotaProperties
### Properties
* **capacityInGb**: int: Maximum capacity (GB).
* **numberOfStorageAccounts**: int: Total number of storage accounts.

