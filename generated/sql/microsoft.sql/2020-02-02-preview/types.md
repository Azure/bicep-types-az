# Microsoft.Sql @ 2020-02-02-preview

## Resource Microsoft.Sql/locations/serverTrustGroups@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerTrustGroupProperties
* **type**: 'Microsoft.Sql/locations/serverTrustGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedInstanceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Sql/managedInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedInstanceAzureADOnlyAuthProperties
* **type**: 'Microsoft.Sql/managedInstances/azureADOnlyAuthentications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedDatabaseProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Sql/managedInstances/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/securityAlertPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityAlertsPolicyProperties
* **type**: 'Microsoft.Sql/managedInstances/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/azureADOnlyAuthentications@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AzureADOnlyAuthProperties
* **type**: 'Microsoft.Sql/servers/azureADOnlyAuthentications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/securityAlertPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityAlertsPolicyProperties
* **type**: 'Microsoft.Sql/servers/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/securityAlertPolicies@2020-02-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecurityAlertsPolicyProperties
* **type**: 'Microsoft.Sql/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## ServerTrustGroupProperties
### Properties
* **groupMembers**: ServerInfo[] (Required)
* **trustScopes**: 'GlobalTransactions'[] (Required)

## ServerInfo
### Properties
* **serverId**: string (Required)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned'

## ManagedInstanceProperties
### Properties
* **administratorLogin**: string
* **administratorLoginPassword**: string
* **collation**: string
* **dnsZone**: string (ReadOnly)
* **dnsZonePartner**: string
* **fullyQualifiedDomainName**: string (ReadOnly)
* **instancePoolId**: string
* **licenseType**: 'BasePrice' | 'LicenseIncluded'
* **maintenanceConfigurationId**: string
* **managedInstanceCreateMode**: 'Default' | 'PointInTimeRestore'
* **minimalTlsVersion**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **proxyOverride**: 'Default' | 'Proxy' | 'Redirect'
* **publicDataEndpointEnabled**: bool
* **restorePointInTime**: string
* **sourceManagedInstanceId**: string
* **state**: string (ReadOnly)
* **storageAccountType**: 'GRS' | 'LRS' | 'ZRS'
* **storageSizeInGB**: int
* **subnetId**: string
* **timezoneId**: string
* **vCores**: int

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: string (Required)
* **size**: string
* **tier**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ManagedInstanceAzureADOnlyAuthProperties
### Properties
* **azureADOnlyAuthentication**: bool (Required)

## ManagedDatabaseProperties
### Properties
* **autoCompleteRestore**: bool
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS'
* **collation**: string
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreLongTermRetentionBackup'
* **creationDate**: string (ReadOnly)
* **defaultSecondaryLocation**: string (ReadOnly)
* **earliestRestorePoint**: string (ReadOnly)
* **failoverGroupId**: string (ReadOnly)
* **lastBackupName**: string
* **longTermRetentionBackupResourceId**: string
* **recoverableDatabaseId**: string
* **restorableDroppedDatabaseId**: string
* **restorePointInTime**: string
* **sourceDatabaseId**: string
* **status**: 'Creating' | 'Inaccessible' | 'Offline' | 'Online' | 'Restoring' | 'Shutdown' | 'Updating' (ReadOnly)
* **storageContainerSasToken**: string
* **storageContainerUri**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## SecurityAlertsPolicyProperties
### Properties
* **creationTime**: string (ReadOnly)
* **state**: 'Disabled' | 'Enabled' (Required)

## AzureADOnlyAuthProperties
### Properties
* **azureADOnlyAuthentication**: bool (Required)

