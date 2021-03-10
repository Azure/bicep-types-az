# Microsoft.Sql @ 2018-06-01-preview

## Resource Microsoft.Sql/instancePools@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InstancePoolProperties](#instancepoolproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/instancePools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedInstanceProperties](#managedinstanceproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/managedInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedDatabaseProperties](#manageddatabaseproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Sql/managedInstances/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BaseLongTermRetentionPolicyProperties](#baselongtermretentionpolicyproperties)
* **type**: 'Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SensitivityLabelProperties](#sensitivitylabelproperties)
* **type**: 'Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/managedInstances/vulnerabilityAssessments@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedInstanceVulnerabilityAssessmentProperties](#managedinstancevulnerabilityassessmentproperties)
* **type**: 'Microsoft.Sql/managedInstances/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/administrators@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AdministratorProperties](#administratorproperties)
* **type**: 'Microsoft.Sql/servers/administrators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/databases/securityAlertPolicies@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecurityAlertPolicyProperties](#securityalertpolicyproperties)
* **type**: 'Microsoft.Sql/servers/databases/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/privateEndpointConnections@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Sql/servers/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Sql/servers/vulnerabilityAssessments@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerVulnerabilityAssessmentProperties](#servervulnerabilityassessmentproperties)
* **type**: 'Microsoft.Sql/servers/vulnerabilityAssessments' (ReadOnly, DeployTimeConstant)

## InstancePoolProperties
### Properties
* **licenseType**: 'BasePrice' | 'LicenseIncluded' (Required)
* **subnetId**: string (Required)
* **vCores**: int (Required)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: string (Required)
* **size**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **proxyOverride**: 'Default' | 'Proxy' | 'Redirect'
* **publicDataEndpointEnabled**: bool
* **restorePointInTime**: string
* **sourceManagedInstanceId**: string
* **state**: string (ReadOnly)
* **storageSizeInGB**: int
* **subnetId**: string
* **timezoneId**: string
* **vCores**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedDatabaseProperties
### Properties
* **catalogCollation**: 'DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS'
* **collation**: string
* **createMode**: 'Default' | 'PointInTimeRestore' | 'Recovery' | 'RestoreExternalBackup' | 'RestoreLongTermRetentionBackup'
* **creationDate**: string (ReadOnly)
* **defaultSecondaryLocation**: string (ReadOnly)
* **earliestRestorePoint**: string (ReadOnly)
* **failoverGroupId**: string (ReadOnly)
* **longTermRetentionBackupResourceId**: string
* **recoverableDatabaseId**: string
* **restorableDroppedDatabaseId**: string
* **restorePointInTime**: string
* **sourceDatabaseId**: string
* **status**: 'Creating' | 'Inaccessible' | 'Offline' | 'Online' | 'Restoring' | 'Shutdown' | 'Updating' (ReadOnly)
* **storageContainerSasToken**: string
* **storageContainerUri**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BaseLongTermRetentionPolicyProperties
### Properties
* **monthlyRetention**: string
* **weeklyRetention**: string
* **weekOfYear**: int
* **yearlyRetention**: string

## SensitivityLabelProperties
### Properties
* **informationType**: string
* **informationTypeId**: string
* **isDisabled**: bool (ReadOnly)
* **labelId**: string
* **labelName**: string
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None'

## ManagedInstanceVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties)
* **storageAccountAccessKey**: string
* **storageContainerPath**: string (Required)
* **storageContainerSasKey**: string

## VulnerabilityAssessmentRecurringScansProperties
### Properties
* **emails**: string[]
* **emailSubscriptionAdmins**: bool
* **isEnabled**: bool

## AdministratorProperties
### Properties
* **administratorType**: string (Required)
* **login**: string (Required)
* **sid**: string (Required)
* **tenantId**: string

## SecurityAlertPolicyProperties
### Properties
* **creationTime**: string (ReadOnly)
* **disabledAlerts**: string[]
* **emailAccountAdmins**: bool
* **emailAddresses**: string[]
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' | 'New' (Required)
* **storageAccountAccessKey**: string
* **storageEndpoint**: string

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty)
* **provisioningState**: string (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (Required)
* **status**: string (Required)

## ServerVulnerabilityAssessmentProperties
### Properties
* **recurringScans**: [VulnerabilityAssessmentRecurringScansProperties](#vulnerabilityassessmentrecurringscansproperties)
* **storageAccountAccessKey**: string
* **storageContainerPath**: string (Required)
* **storageContainerSasKey**: string

