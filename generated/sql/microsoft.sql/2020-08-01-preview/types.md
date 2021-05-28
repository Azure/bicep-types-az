# Microsoft.Sql @ 2020-08-01-preview

## Resource Microsoft.Sql/servers/devOpsAuditingSettings@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerDevOpsAuditSettingsProperties](#serverdevopsauditsettingsproperties): Properties of a server DevOps audit settings.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Sql/servers/devOpsAuditingSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/elasticPools@2020-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of elastic pool. This is metadata used for the Azure portal experience.
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ElasticPoolProperties](#elasticpoolproperties): Properties of an elastic pool
* **sku**: [Sku](#sku): An ARM Resource SKU.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Sql/servers/elasticPools' (ReadOnly, DeployTimeConstant): The resource type

## ServerDevOpsAuditSettingsProperties
### Properties
* **isAzureMonitorTargetEnabled**: bool: Specifies whether DevOps audit events are sent to Azure Monitor.
In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.

When using REST API to configure DevOps audit, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should be also created.

Diagnostic Settings URI format:
PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview

For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
* **state**: 'Disabled' | 'Enabled' (Required): Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
* **storageAccountAccessKey**: string: Specifies the identifier key of the auditing storage account.
If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
Prerequisites for using managed identity authentication:
1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
* **storageAccountSubscriptionId**: string: Specifies the blob storage subscription Id.
* **storageEndpoint**: string: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## ElasticPoolProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of the elastic pool (ISO8601 format).
* **licenseType**: 'BasePrice' | 'LicenseIncluded': The license type to apply for this elastic pool.
* **maintenanceConfigurationId**: string: Maintenance configuration id assigned to the elastic pool. This configuration defines the period when the maintenance updates will will occur.
* **maxSizeBytes**: int: The storage limit for the database elastic pool in bytes.
* **perDatabaseSettings**: [ElasticPoolPerDatabaseSettings](#elasticpoolperdatabasesettings): Per database settings of an elastic pool.
* **state**: 'Creating' | 'Disabled' | 'Ready' (ReadOnly): The state of the elastic pool.
* **zoneRedundant**: bool: Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones.

## ElasticPoolPerDatabaseSettings
### Properties
* **maxCapacity**: int: The maximum capacity any one database can consume.
* **minCapacity**: int: The minimum capacity all databases are guaranteed.

## Sku
### Properties
* **capacity**: int: Capacity of the particular SKU.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU, typically, a letter + Number code, e.g. P3.
* **size**: string: Size of the particular SKU
* **tier**: string: The tier or edition of the particular SKU, e.g. Basic, Premium.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

