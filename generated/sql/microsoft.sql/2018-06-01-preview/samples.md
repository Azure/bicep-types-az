# Microsoft.Sql
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.sql/instancepools

Create an instance pool with all properties.
```bicep
resource exampleResource 'Microsoft.Sql/instancePools@2018-06-01-preview' = {
  name: 'example'
  properties: {
    licenseType: 'LicenseIncluded'
    subnetId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Network/virtualNetwork/myvnet/subnets/mysubnet1'
    vCores: 8
  }
  sku: {
    name: 'GP_Gen5'
    family: 'Gen5'
    tier: 'GeneralPurpose'
  }
  tags: {
    a: 'b'
  }
}
```

Create an instance pool with min properties.
```bicep
resource exampleResource 'Microsoft.Sql/instancePools@2018-06-01-preview' = {
  name: 'example'
  properties: {
    licenseType: 'LicenseIncluded'
    subnetId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Network/virtualNetwork/myvnet/subnets/mysubnet1'
    vCores: 8
  }
  sku: {
    name: 'GP_Gen5'
    family: 'Gen5'
    tier: 'GeneralPurpose'
  }
}
```

## microsoft.sql/managedinstances

Create managed instance with all properties
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances@2018-06-01-preview' = {
  name: 'example'
  location: 'Japan East'
  properties: {
    administratorLogin: 'dummylogin'
    administratorLoginPassword: '<administratorLoginPassword>'
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    dnsZonePartner: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/resourceGroups/testrg/providers/Microsoft.Sql/managedInstances/testinstance'
    instancePoolId: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/resourceGroups/testrg/providers/Microsoft.Sql/instancePools/pool1'
    licenseType: 'LicenseIncluded'
    maintenanceConfigurationId: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/providers/Microsoft.Maintenance/publicMaintenanceConfigurations/SQL_JapanEast_MI_1'
    proxyOverride: 'Redirect'
    publicDataEndpointEnabled: false
    storageSizeInGB: 1024
    subnetId: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
    timezoneId: 'UTC'
    vCores: 8
  }
  sku: {
    name: 'GP_Gen5'
    tier: 'GeneralPurpose'
  }
  tags: {
    tagKey1: 'TagValue1'
  }
}
```

Create managed instance with minimal properties
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances@2018-06-01-preview' = {
  name: 'example'
  location: 'Japan East'
  properties: {
    administratorLogin: 'dummylogin'
    administratorLoginPassword: '<administratorLoginPassword>'
    licenseType: 'LicenseIncluded'
    storageSizeInGB: 1024
    subnetId: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
    vCores: 8
  }
  sku: {
    name: 'GP_Gen4'
    tier: 'GeneralPurpose'
  }
}
```

## microsoft.sql/managedinstances/databases

Creates a new managed database by restoring from an external backup
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    createMode: 'RestoreExternalBackup'
    storageContainerSasToken: 'sv=2015-12-11&sr=c&sp=rl&sig=1234'
    storageContainerUri: 'https://myaccountname.blob.core.windows.net/backups'
  }
}
```

Creates a new managed database from restoring a geo-replicated backup
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'Recovery'
    recoverableDatabaseId: '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/Default-SQL-WestEurope/providers/Microsoft.Sql/managedInstances/testsvr/recoverableDatabases/testdb'
  }
}
```

Creates a new managed database from restoring a long term retention backup
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    createMode: 'RestoreExternalBackup'
    storageContainerSasToken: 'sv=2015-12-11&sr=c&sp=rl&sig=1234'
    storageContainerUri: 'https://myaccountname.blob.core.windows.net/backups'
  }
}
```

Creates a new managed database using point in time restore
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'PointInTimeRestore'
    restorePointInTime: '2017-07-14T05:35:31.503Z'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-SouthEastAsia/providers/Microsoft.Sql/managedInstances/testsvr/databases/testdb'
  }
}
```

Creates a new managed database with maximal properties
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  tags: {
    tagKey1: 'TagValue1'
  }
}
```

Creates a new managed database with minimal properties
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
}
```

## microsoft.sql/managedinstances/databases/backuplongtermretentionpolicies

Create or update the LTR policy for the managed database.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    monthlyRetention: 'P1Y'
    weekOfYear: 5
    weeklyRetention: 'P1M'
    yearlyRetention: 'P5Y'
  }
}
```

## microsoft.sql/managedinstances/databases/schemas/tables/columns/sensitivitylabels

Updates or creates a sensitivity label of a given column with all parameters in a managed database
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    informationType: 'PhoneNumber'
    informationTypeId: 'd22fa6e9-5ee4-3bde-4c2b-a409604c4646'
    labelId: 'bf91e08c-f4f0-478a-b016-25164b2a65ff'
    labelName: 'PII'
  }
}
```

## microsoft.sql/managedinstances/vulnerabilityassessments

Create a managed instance's vulnerability assessment with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/vulnerabilityAssessments@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    recurringScans: {
      emailSubscriptionAdmins: true
      emails: [
        'email1@mail.com'
        'email2@mail.com'
      ]
      isEnabled: true
    }
    storageAccountAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```

Create a managed instance's vulnerability assessment with minimal parameters, when storageAccountAccessKey is specified
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/vulnerabilityAssessments@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageAccountAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
  }
}
```

Create a managed instance's vulnerability assessment with minimal parameters, when storageContainerSasKey is specified
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/vulnerabilityAssessments@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```

## microsoft.sql/servers/administrators

Creates or updates an existing Azure Active Directory administrator.
```bicep
resource exampleResource 'Microsoft.Sql/servers/administrators@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    administratorType: 'ActiveDirectory'
    login: 'bob@contoso.com'
    sid: 'c6b82b90-a647-49cb-8a62-0d2d3cb7ac7c'
    tenantId: 'c6b82b90-a647-49cb-8a62-0d2d3cb7ac7c'
  }
}
```

## microsoft.sql/servers/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.Sql/servers/privateEndpointConnections@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@contoso.com'
      status: 'Approved'
    }
  }
}
```

## microsoft.sql/servers/vulnerabilityassessments

Create a server's vulnerability assessment with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/vulnerabilityAssessments@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    recurringScans: {
      emailSubscriptionAdmins: true
      emails: [
        'email1@mail.com'
        'email2@mail.com'
      ]
      isEnabled: true
    }
    storageAccountAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```

Create a server's vulnerability assessment with minimal parameters, when storageAccountAccessKey is specified
```bicep
resource exampleResource 'Microsoft.Sql/servers/vulnerabilityAssessments@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageAccountAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
  }
}
```

Create a server's vulnerability assessment with minimal parameters, when storageContainerSasKey is specified
```bicep
resource exampleResource 'Microsoft.Sql/servers/vulnerabilityAssessments@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```
