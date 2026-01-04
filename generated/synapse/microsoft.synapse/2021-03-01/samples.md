# Microsoft.Synapse
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.synapse/privatelinkhubs

Create or update a privateLinkHub
```bicep
resource exampleResource 'Microsoft.Synapse/privateLinkHubs@2021-03-01' = {
  name: 'example'
  location: 'East US'
  properties: {
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.synapse/workspaces

Create or update a workspace
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces@2021-03-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'East US'
  properties: {
    defaultDataLakeStorage: {
      accountUrl: 'https://accountname.dfs.core.windows.net'
      filesystem: 'default'
    }
    encryption: {
      cmk: {
        key: {
          name: 'default'
          keyVaultUrl: 'https://vault.azure.net/keys/key1'
        }
      }
    }
    managedResourceGroupName: 'workspaceManagedResourceGroupUnique'
    managedVirtualNetwork: 'default'
    managedVirtualNetworkSettings: {
      allowedAadTenantIdsForLinking: [
        '740239CE-A25B-485B-86A0-262F29F6EBDB'
      ]
      linkedAccessCheckOnTargetResource: false
      preventDataExfiltration: false
    }
    publicNetworkAccess: 'Enabled'
    purviewConfiguration: {
      purviewResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup1/providers/Microsoft.ProjectPurview/accounts/accountname1'
    }
    sqlAdministratorLogin: 'login'
    sqlAdministratorLoginPassword: 'password'
    workspaceRepositoryConfiguration: {
      type: 'FactoryGitHubConfiguration'
      accountName: 'mygithubaccount'
      collaborationBranch: 'master'
      hostName: ''
      projectName: 'myproject'
      repositoryName: 'myrepository'
      rootFolder: '/'
    }
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.synapse/workspaces/administrators

Create or update workspace active directory admin
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/administrators@2021-03-01' = {
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

## microsoft.synapse/workspaces/auditingsettings

Create or update blob auditing policy of workspace managed Sql Server with minimal parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/auditingSettings@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Create or update blob auditing policy of workspace SQL Server with all parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/auditingSettings@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    auditActionsAndGroups: [
      'SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP'
      'FAILED_DATABASE_AUTHENTICATION_GROUP'
      'BATCH_COMPLETED_GROUP'
    ]
    isAzureMonitorTargetEnabled: true
    isStorageSecondaryKeyInUse: false
    queueDelayMs: 4000
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageAccountSubscriptionId: '00000000-1234-0000-5678-000000000000'
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.synapse/workspaces/bigdatapools

Create or update a Big Data pool
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/bigDataPools@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US 2'
  properties: {
    autoPause: {
      delayInMinutes: 15
      enabled: true
    }
    autoScale: {
      enabled: true
      maxNodeCount: 50
      minNodeCount: 3
    }
    defaultSparkLogFolder: '/logs'
    libraryRequirements: {
      content: ''
      filename: 'requirements.txt'
    }
    nodeCount: 4
    nodeSize: 'Medium'
    nodeSizeFamily: 'MemoryOptimized'
    sparkEventsFolder: '/events'
    sparkVersion: '3.3'
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.synapse/workspaces/encryptionprotector

Update the encryption protector to key vault
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/encryptionProtector@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyName: 'someVault_someKey_01234567890123456789012345678901'
    serverKeyType: 'AzureKeyVault'
  }
}
```

Update the encryption protector to service managed
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/encryptionProtector@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyName: 'ServiceManaged'
    serverKeyType: 'ServiceManaged'
  }
}
```

## microsoft.synapse/workspaces/extendedauditingsettings

Create or update workspace managed sql server's extended blob auditing policy of with all parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/extendedAuditingSettings@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    auditActionsAndGroups: [
      'SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP'
      'FAILED_DATABASE_AUTHENTICATION_GROUP'
      'BATCH_COMPLETED_GROUP'
    ]
    isAzureMonitorTargetEnabled: true
    isStorageSecondaryKeyInUse: false
    predicateExpression: 'object_name = \'SensitiveData\''
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageAccountSubscriptionId: '00000000-1234-0000-5678-000000000000'
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Create or update workspace managed sql server's extended blob auditing policy of with minimal parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/extendedAuditingSettings@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.synapse/workspaces/firewallrules

Create an IP firewall rule
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/firewallRules@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '10.0.0.254'
    startIpAddress: '10.0.0.0'
  }
}
```

## microsoft.synapse/workspaces/integrationruntimes

Create integration runtime
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/integrationRuntimes@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'SelfHosted'
    description: 'A selfhosted integration runtime'
  }
}
```

## microsoft.synapse/workspaces/keys

Create or update a workspace key
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/keys@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    isActiveCMK: true
    keyVaultUrl: 'https://vault.azure.net/keys/somesecret'
  }
}
```

## microsoft.synapse/workspaces/managedidentitysqlcontrolsettings

Create or update managed identity sql control settings
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    grantSqlControlToManagedIdentity: {
      desiredState: 'Enabled'
    }
  }
}
```

## microsoft.synapse/workspaces/privateendpointconnections

Approve private endpoint connection
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/privateEndpointConnections@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by abc@example.com'
      status: 'Approved'
    }
  }
}
```

## microsoft.synapse/workspaces/securityalertpolicies

Update a workspace managed sql server's threat detection policy with all parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/securityAlertPolicies@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    disabledAlerts: [
      'Access_Anomaly'
      'Usage_Anomaly'
    ]
    emailAccountAdmins: true
    emailAddresses: [
      'testSecurityAlert@microsoft.com'
    ]
    retentionDays: 5
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Update a workspace managed sql server's threat detection policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/securityAlertPolicies@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    emailAccountAdmins: true
    state: 'Disabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.synapse/workspaces/sqladministrators

Create or update workspace active directory admin
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlAdministrators@2021-03-01' = {
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

## microsoft.synapse/workspaces/sqlpools

Create a SQL Analytics pool
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Southeast Asia'
  properties: {
    collation: ''
    createMode: ''
    maxSizeBytes: 0
    recoverableDatabaseId: ''
    sourceDatabaseId: ''
    storageAccountType: 'LRS'
  }
  sku: {
    name: ''
    tier: ''
  }
  tags: {
  }
}
```

## microsoft.synapse/workspaces/sqlpools/auditingsettings

Create or update a database's blob auditing policy with all parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/auditingSettings@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    auditActionsAndGroups: [
      'DATABASE_LOGOUT_GROUP'
      'DATABASE_ROLE_MEMBER_CHANGE_GROUP'
      'UPDATE on database::TestDatabaseName by public'
    ]
    isAzureMonitorTargetEnabled: true
    isStorageSecondaryKeyInUse: false
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageAccountSubscriptionId: '00000000-1234-0000-5678-000000000000'
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Create or update a database's blob auditing policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/auditingSettings@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.synapse/workspaces/sqlpools/datamaskingpolicies

Create or update data masking policy max
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataMaskingState: 'Enabled'
    exemptPrincipals: 'testuser;'
  }
}
```

Create or update data masking policy min
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataMaskingState: 'Enabled'
  }
}
```

## microsoft.synapse/workspaces/sqlpools/datamaskingpolicies/rules

Create/Update data masking rule for default max
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aliasName: 'nickname'
    columnName: 'test1'
    maskingFunction: 'Default'
    ruleState: 'Enabled'
    schemaName: 'dbo'
    tableName: 'Table_1'
  }
}
```

Create/Update data masking rule for default min
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    columnName: 'test1'
    maskingFunction: 'Default'
    schemaName: 'dbo'
    tableName: 'Table_1'
  }
}
```

Create/Update data masking rule for numbers
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    columnName: 'test1'
    maskingFunction: 'Number'
    numberFrom: '0'
    numberTo: '2'
    schemaName: 'dbo'
    tableName: 'Table_1'
  }
}
```

Create/Update data masking rule for text
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    columnName: 'test1'
    maskingFunction: 'Text'
    prefixSize: '1'
    replacementString: 'asdf'
    schemaName: 'dbo'
    suffixSize: '0'
    tableName: 'Table_1'
  }
}
```

## microsoft.synapse/workspaces/sqlpools/extendedauditingsettings

Create or update an extended SQL pool's azure monitor auditing policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    isAzureMonitorTargetEnabled: true
    state: 'Enabled'
  }
}
```

Create or update an extended Sql pool's blob auditing policy with all parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    auditActionsAndGroups: [
      'DATABASE_LOGOUT_GROUP'
      'DATABASE_ROLE_MEMBER_CHANGE_GROUP'
      'UPDATE on database::TestDatabaseName by public'
    ]
    isAzureMonitorTargetEnabled: true
    isStorageSecondaryKeyInUse: false
    predicateExpression: 'statement = \'select 1\''
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageAccountSubscriptionId: '00000000-1234-0000-5678-000000000000'
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Create or update an extended Sql pool's blob auditing policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.synapse/workspaces/sqlpools/geobackuppolicies

Create geo backup policy
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.synapse/workspaces/sqlpools/schemas/tables/columns/sensitivitylabels

Updates the sensitivity label of a given column with all parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels@2021-03-01' = {
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

## microsoft.synapse/workspaces/sqlpools/securityalertpolicies

Update a Sql pool's threat detection policy with all parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    disabledAlerts: [
      'Sql_Injection'
      'Usage_Anomaly'
    ]
    emailAccountAdmins: true
    emailAddresses: [
      'test@microsoft.com'
      'user@microsoft.com'
    ]
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Update a Sql pool's threat detection policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.synapse/workspaces/sqlpools/transparentdataencryption

Create or update a Sql pool's transparent data encryption configuration
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    status: 'Enabled'
  }
}
```

## microsoft.synapse/workspaces/sqlpools/vulnerabilityassessments

Create a database's vulnerability assessment with all parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments@2021-03-01' = {
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

Create a database's vulnerability assessment with minimal parameters, when storageAccountAccessKey is specified
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageAccountAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
  }
}
```

Create a database's vulnerability assessment with minimal parameters, when storageContainerSasKey is specified
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```

## microsoft.synapse/workspaces/sqlpools/vulnerabilityassessments/rules/baselines

Creates or updates a database's vulnerability assessment rule baseline.
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    baselineResults: [
      {
        result: [
          'userA'
          'SELECT'
        ]
      }
      {
        result: [
          'userB'
          'SELECT'
        ]
      }
      {
        result: [
          'userC'
          'SELECT'
          'tableId_4'
        ]
      }
    ]
  }
}
```

## microsoft.synapse/workspaces/sqlpools/workloadgroups

Create a workload group with all properties specified.
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    importance: 'normal'
    maxResourcePercent: 100
    maxResourcePercentPerRequest: 3
    minResourcePercent: 0
    minResourcePercentPerRequest: 3
    queryExecutionTimeout: 0
  }
}
```

Create a workload group with the required properties specified.
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    maxResourcePercent: 100
    minResourcePercent: 0
    minResourcePercentPerRequest: 3
  }
}
```

## microsoft.synapse/workspaces/sqlpools/workloadgroups/workloadclassifiers

Create a workload classifier with all properties specified.
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    context: 'test_context'
    endTime: '14:00'
    importance: 'high'
    label: 'test_label'
    memberName: 'dbo'
    startTime: '12:00'
  }
}
```

Create a workload classifier with the required properties specified.
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    memberName: 'dbo'
  }
}
```

## microsoft.synapse/workspaces/vulnerabilityassessments

Create or Update a workspace managed sql server's vulnerability assessment with all parameters
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/vulnerabilityAssessments@2021-03-01' = {
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

Create or Update a workspace managed sql server's vulnerability assessment with minimal parameters, when storageAccountAccessKey is specified
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/vulnerabilityAssessments@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageAccountAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
  }
}
```

Create or Update a workspace managed sql server's vulnerability assessment with minimal parameters, when storageContainerSasKey is specified
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/vulnerabilityAssessments@2021-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```
