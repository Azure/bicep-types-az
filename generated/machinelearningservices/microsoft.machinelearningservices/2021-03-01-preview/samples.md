# Microsoft.MachineLearningServices

## microsoft.machinelearningservices/workspaces

Create Workspace
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces@2021-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned,UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testuai: {
      }
    }
  }
  location: 'eastus2euap'
  properties: {
    description: 'test description'
    applicationInsights: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/microsoft.insights/components/testinsights'
    containerRegistry: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.ContainerRegistry/registries/testRegistry'
    encryption: {
      identity: {
        userAssignedIdentity: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testuai'
      }
      keyVaultProperties: {
        identityClientId: ''
        keyIdentifier: 'https://testkv.vault.azure.net/keys/testkey/aabbccddee112233445566778899aabb'
        keyVaultArmId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.KeyVault/vaults/testkv'
      }
      status: 'Enabled'
    }
    friendlyName: 'HelloName'
    hbiWorkspace: false
    keyVault: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.KeyVault/vaults/testkv'
    sharedPrivateLinkResources: [
      {
        name: 'testdbresource'
        properties: {
          groupId: 'Sql'
          privateLinkResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.DocumentDB/databaseAccounts/testdbresource/privateLinkResources/Sql'
          requestMessage: 'Please approve'
          status: 'Approved'
        }
      }
    ]
    storageAccount: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/accountcrud-1234/providers/Microsoft.Storage/storageAccounts/testStorageAccount'
  }
}
```

## microsoft.machinelearningservices/workspaces/computes

Create AKS Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'AKS'
  }
}
```

Create a AML Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'AmlCompute'
    properties: {
      enableNodePublicIp: true
      isolatedNetwork: false
      osType: 'Windows'
      remoteLoginPortPublicAccess: 'NotSpecified'
      scaleSettings: {
        maxNodeCount: 1
        minNodeCount: 0
        nodeIdleTimeBeforeScaleDown: 'PT5M'
      }
      virtualMachineImage: {
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Compute/galleries/myImageGallery/images/myImageDefinition/versions/0.0.1'
      }
      vmPriority: 'Dedicated'
      vmSize: 'STANDARD_NC6'
    }
  }
}
```

Create a DataFactory Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'DataFactory'
  }
}
```

Create an ComputeInstance Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'ComputeInstance'
    properties: {
      applicationSharingPolicy: 'Personal'
      computeInstanceAuthorizationType: 'personal'
      enableNodePublicIp: true
      personalComputeInstanceSettings: {
        assignedUser: {
          objectId: '00000000-0000-0000-0000-000000000000'
          tenantId: '00000000-0000-0000-0000-000000000000'
        }
      }
      sshSettings: {
        sshPublicAccess: 'Disabled'
      }
      subnet: 'test-subnet-resource-id'
      vmSize: 'STANDARD_NC6'
    }
  }
}
```

Create an ComputeInstance Compute with Schedules
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'ComputeInstance'
    properties: {
      applicationSharingPolicy: 'Personal'
      computeInstanceAuthorizationType: 'personal'
      personalComputeInstanceSettings: {
        assignedUser: {
          objectId: '00000000-0000-0000-0000-000000000000'
          tenantId: '00000000-0000-0000-0000-000000000000'
        }
      }
      schedules: {
        computeStartStop: [
          {
            action: 'Stop'
            cron: {
              expression: '0 18 * * *'
              startTime: '2021-04-23T01:30:00'
              timeZone: 'Pacific Standard Time'
            }
            status: 'Enabled'
            triggerType: 'Cron'
          }
        ]
      }
      sshSettings: {
        sshPublicAccess: 'Disabled'
      }
      subnet: 'test-subnet-resource-id'
      vmSize: 'STANDARD_NC6'
    }
  }
}
```

Create an ComputeInstance Compute with minimal inputs
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'ComputeInstance'
    properties: {
      vmSize: 'STANDARD_NC6'
    }
  }
}
```

Update a AKS Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'some compute'
    computeType: 'AKS'
    properties: {
      agentCount: 4
    }
    resourceId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/Microsoft.ContainerService/managedClusters/compute123-56826-c9b00420020b2'
  }
}
```

Update a AML Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'some compute'
    computeType: 'AmlCompute'
    properties: {
      scaleSettings: {
        maxNodeCount: 4
        minNodeCount: 4
        nodeIdleTimeBeforeScaleDown: 'PT5M'
      }
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/privateendpointconnections

WorkspacePutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/connections

CreateWorkspaceConnection
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/connections@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authType: 'PAT'
    category: 'ACR'
    target: 'www.facebook.com'
    value: 'secrets'
  }
}
```

## microsoft.machinelearningservices/workspaces/batchendpoints

CreateOrUpdate Batch Endpoint.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/batchEndpoints@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myuseridentity: {
        clientId: 'string'
        principalId: 'string'
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    description: 'string'
    authMode: 'AMLToken'
    keys: {
      primaryKey: 'string'
      secondaryKey: 'string'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    traffic: {
      myDeployment1: 0
      myDeployment2: 1
    }
  }
  tags: {
    additionalProp1: 'string'
    additionalProp2: 'string'
    additionalProp3: 'string'
  }
}
```

## microsoft.machinelearningservices/workspaces/batchendpoints/deployments

CreateOrUpdate Batch Deployment.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myuseridentity: {
        clientId: 'string'
        principalId: 'string'
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    description: 'string'
    codeConfiguration: {
      codeId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/codes/testcode/versions/1'
      scoringScript: 'score.py'
    }
    compute: {
      instanceCount: 0
      instanceType: 'string'
      isLocal: false
      location: 'string'
      properties: {
        additionalProp1: 'string'
        additionalProp2: 'string'
        additionalProp3: 'string'
      }
      target: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/computes/testcompute'
    }
    environmentId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/environments/myenv'
    environmentVariables: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    errorThreshold: 0
    loggingLevel: 'Info'
    miniBatchSize: 0
    model: {
      assetId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/models/testmodel/versions/1'
      referenceType: 'Id'
    }
    outputConfiguration: {
      appendRowFileName: 'string'
      outputAction: 'SummaryOnly'
    }
    partitionKeys: [
      'string'
    ]
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    retrySettings: {
      maxRetries: 0
      timeout: 'PT1M'
    }
  }
  tags: {
    additionalProp1: 'string'
    additionalProp2: 'string'
    additionalProp3: 'string'
  }
}
```

## microsoft.machinelearningservices/workspaces/codes

CreateOrUpdate Code Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/codes@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    tags: {
      tag1: 'value1'
      tag2: 'value2'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/codes/versions

CreateOrUpdate Code Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/codes/versions@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'path/to/file.py'
    description: 'string'
    datastoreId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/datastores/mydatastore'
    isAnonymous: true
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/data

CreateOrUpdate Data Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/data@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    properties: {
      properties1: 'value1'
      properties2: 'value2'
    }
    tags: {
      tag1: 'value1'
      tag2: 'value2'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/data/versions

CreateOrUpdate Data Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/data/versions@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'path/to/file.csv'
    description: 'string'
    datasetType: 'Simple'
    datastoreId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/datastores/mydatastore'
    isAnonymous: true
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/datastores

CreateOrUpdate datastore (Azure Data Lake Gen1 w/ ServicePrincipal).
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    contents: {
      contentsType: 'AzureDataLakeGen1'
      credentials: {
        authorityUrl: 'string'
        clientId: '00000000-1111-2222-3333-444444444444'
        credentialsType: 'ServicePrincipal'
        resourceUri: 'string'
        secrets: {
          clientSecret: 'string'
          secretsType: 'ServicePrincipal'
        }
        tenantId: '00000000-1111-2222-3333-444444444444'
      }
      storeName: 'testStore'
    }
    isDefault: true
    linkedInfo: {
      linkedId: 'string'
      linkedResourceName: 'string'
      origin: 'Synapse'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
  }
}
```

CreateOrUpdate datastore (Azure Data Lake Gen2 w/ Service Principal).
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    contents: {
      accountName: 'string'
      containerName: 'string'
      contentsType: 'AzureBlob'
      credentials: {
        authorityUrl: 'string'
        clientId: '00000000-1111-2222-3333-444444444444'
        credentialsType: 'ServicePrincipal'
        resourceUri: 'string'
        secrets: {
          clientSecret: 'string'
          secretsType: 'ServicePrincipal'
        }
        tenantId: '00000000-1111-2222-3333-444444444444'
      }
      endpoint: 'core.windows.net'
      protocol: 'https'
    }
    isDefault: true
    linkedInfo: {
      linkedId: 'string'
      linkedResourceName: 'string'
      origin: 'Synapse'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
  }
}
```

CreateOrUpdate datastore (Azure File store w/ AccountKey).
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    contents: {
      accountName: 'string'
      containerName: 'string'
      contentsType: 'AzureFile'
      credentials: {
        credentialsType: 'AccountKey'
        secrets: {
          key: 'string'
          secretsType: 'AccountKey'
        }
      }
      endpoint: 'core.windows.net'
      protocol: 'https'
    }
    isDefault: true
    linkedInfo: {
      linkedId: 'string'
      linkedResourceName: 'string'
      origin: 'Synapse'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
  }
}
```

CreateOrUpdate datastore (Azure Postgre SQL w/ SQL Admin).
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    contents: {
      contentsType: 'AzurePostgreSql'
      credentials: {
        credentialsType: 'SqlAdmin'
        secrets: {
          password: 'string'
          secretsType: 'SqlAdmin'
        }
        userId: 'string'
      }
      databaseName: 'string'
      enableSSL: true
      endpoint: 'string'
      portNumber: 123
      serverName: 'string'
    }
    isDefault: true
    linkedInfo: {
      linkedId: 'string'
      linkedResourceName: 'string'
      origin: 'Synapse'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
  }
}
```

CreateOrUpdate datastore (Azure SQL Database w/ SQL Admin).
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    contents: {
      contentsType: 'AzureSqlDatabase'
      credentials: {
        credentialsType: 'SqlAdmin'
        secrets: {
          password: 'string'
          secretsType: 'SqlAdmin'
        }
        userId: 'string'
      }
      databaseName: 'string'
      endpoint: 'string'
      portNumber: 123
      serverName: 'string'
    }
    isDefault: true
    linkedInfo: {
      linkedId: 'string'
      linkedResourceName: 'string'
      origin: 'Synapse'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
  }
}
```

CreateOrUpdate datastore (AzureBlob w/ AccountKey).
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    contents: {
      accountName: 'string'
      containerName: 'string'
      contentsType: 'AzureBlob'
      credentials: {
        credentialsType: 'AccountKey'
        secrets: {
          key: 'string'
          secretsType: 'AccountKey'
        }
      }
      endpoint: 'core.windows.net'
      protocol: 'https'
    }
    isDefault: true
    linkedInfo: {
      linkedId: 'string'
      linkedResourceName: 'string'
      origin: 'Synapse'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/environments

CreateOrUpdate Environment Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/environments@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/environments/versions

CreateOrUpdate Environment Specification Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/environments/versions@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    condaFile: 'channels:\n- defaults\ndependencies:\n- python=3.7.7\nname: my-env'
    docker: {
      dockerSpecificationType: 'Build'
      dockerfile: 'FROM myimage'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/jobs

CreateOrUpdate Command Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/jobs@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    codeId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/codes/mycode/versions/1'
    command: 'python file.py test'
    compute: {
      instanceCount: 1
      target: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/computes/mycompute'
    }
    distribution: {
      distributionType: 'PyTorch'
      processCount: 2
    }
    environmentId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/environments/AzureML-Tutorial/versions/1'
    environmentVariables: {
      MY_ENV_VAR1: 'string'
      MY_ENV_VAR2: 'string'
    }
    experimentName: 'myExperiment'
    identity: {
      identityType: 'AMLToken'
    }
    inputDataBindings: {
      test: {
        dataId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/data/mydataset/versions/1'
        pathOnCompute: 'path/on/compute'
      }
    }
    jobType: 'Command'
    outputDataBindings: {
      test: {
        datastoreId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/datastore/mydatastore'
        pathOnCompute: 'path/on/compute'
      }
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    timeout: 'PT1M'
  }
}
```

CreateOrUpdate Sweep Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/jobs@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    algorithm: 'Grid'
    compute: {
      instanceCount: 1
      target: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/computes/mycompute'
    }
    identity: {
      identityType: 'AMLToken'
    }
    jobType: 'Sweep'
    maxConcurrentTrials: 1
    maxTotalTrials: 1
    objective: {
      goal: 'Minimize'
      primaryMetric: 'string'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    searchSpace: {
      name: {
      }
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    timeout: 'PT1M'
    trial: {
      codeId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/codes/mycode/versions/1'
      command: 'python file.py test'
      distribution: {
        distributionType: 'PyTorch'
        processCount: 2
      }
      environmentId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/environments/AzureML-Tutorial/versions/1'
      environmentVariables: {
        MY_ENV_VAR1: 'string'
        MY_ENV_VAR2: 'string'
      }
      inputDataBindings: {
        test: {
          dataId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/data/mydataset/versions/1'
          pathOnCompute: 'path/on/compute'
        }
      }
      outputDataBindings: {
        test: {
          datastoreId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/datastore/mydatastore'
          pathOnCompute: 'path/on/compute'
        }
      }
      timeout: 'PT1M'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/labelingjobs

CreateOrUpdate Labeling Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/labelingJobs@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    datasetConfiguration: {
      assetName: 'myAsset'
      datasetVersion: '1'
      incrementalDatasetRefreshEnabled: true
    }
    jobInstructions: {
      uri: 'link/to/instructions'
    }
    jobType: 'Labeling'
    labelCategories: {
      myCategory1: {
        allowMultiSelect: true
        classes: {
          myLabelClass1: {
            displayName: 'myLabelClass1'
            subclasses: {
            }
          }
          myLabelClass2: {
            displayName: 'myLabelClass2'
            subclasses: {
            }
          }
        }
        displayName: 'myCategory1Title'
      }
      myCategory2: {
        allowMultiSelect: true
        classes: {
          myLabelClass1: {
            displayName: 'myLabelClass1'
            subclasses: {
            }
          }
          myLabelClass2: {
            displayName: 'myLabelClass2'
            subclasses: {
            }
          }
        }
        displayName: 'myCategory2Title'
      }
    }
    labelingJobMediaProperties: {
      mediaType: 'Image'
    }
    mlAssistConfiguration: {
      inferencingComputeBinding: {
        instanceCount: 1
        target: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/computes/myscoringcompute'
      }
      mlAssistEnabled: true
      trainingComputeBinding: {
        instanceCount: 1
        target: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/computes/mytrainingcompute'
      }
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    tags: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/models

CreateOrUpdate Model Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/models@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Model container description'
    tags: {
      tag1: 'value1'
      tag2: 'value2'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/models/versions

CreateOrUpdate Model Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/models/versions@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'path/in/datastore'
    description: 'Model version description'
    datastoreId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg123/providers/Microsoft.MachineLearningServices/workspaces/workspace123/datastores/datastore123'
    flavors: {
      python_function: {
        data: {
          loader_module: 'myLoaderModule'
        }
      }
    }
    properties: {
      prop1: 'value1'
      prop2: 'value2'
    }
    tags: {
      tag1: 'value1'
      tag2: 'value2'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/onlineendpoints

CreateOrUpdate Online Endpoint.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myuseridentity: {
        clientId: 'string'
        principalId: 'string'
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    description: 'string'
    authMode: 'AMLToken'
    keys: {
      primaryKey: 'string'
      secondaryKey: 'string'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    target: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/computes/compute123'
    traffic: {
      myDeployment1: 0
      myDeployment2: 1
    }
  }
  tags: {
    additionalProp1: 'string'
    additionalProp2: 'string'
    additionalProp3: 'string'
  }
}
```

## microsoft.machinelearningservices/workspaces/onlineendpoints/deployments

CreateOrUpdate K8S Online Deployment.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myuseridentity: {
        clientId: 'string'
        principalId: 'string'
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    description: 'string'
    appInsightsEnabled: true
    codeConfiguration: {
      codeId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/codes/code123/versions/1'
      scoringScript: 'string'
    }
    containerResourceRequirements: {
      cpu: 4
      cpuLimit: 4
      memoryInGB: 64
      memoryInGBLimit: 64
    }
    endpointComputeType: 'K8S'
    environmentId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/environments/env123'
    livenessProbe: {
      failureThreshold: 50
      initialDelay: 'PT1M'
      period: 'PT1M'
      successThreshold: 50
      timeout: 'PT1M'
    }
    model: {
      assetId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/models/model123'
      referenceType: 'Id'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    provisioningState: 'Creating'
    requestSettings: {
      maxConcurrentRequestsPerInstance: 5
      maxQueueWait: 'PT1M'
      requestTimeout: 'PT1M'
    }
    scaleSettings: {
      pollingInterval: 'PT1M'
      scaleType: 'Auto'
      targetUtilizationPercentage: 50
    }
  }
  tags: {
    additionalProp1: 'string'
    additionalProp2: 'string'
    additionalProp3: 'string'
  }
}
```

CreateOrUpdate Managed Online Deployment.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2021-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myuseridentity: {
        clientId: 'string'
        principalId: 'string'
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    description: 'string'
    appInsightsEnabled: true
    codeConfiguration: {
      codeId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/codes/code123/versions/1'
      scoringScript: 'string'
    }
    endpointComputeType: 'Managed'
    environmentId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/environments/env123'
    livenessProbe: {
      failureThreshold: 50
      initialDelay: 'PT1M'
      period: 'PT1M'
      successThreshold: 50
      timeout: 'PT1M'
    }
    model: {
      assetId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/models/model123'
      referenceType: 'Id'
    }
    properties: {
      additionalProp1: 'string'
      additionalProp2: 'string'
      additionalProp3: 'string'
    }
    provisioningState: 'Creating'
    requestSettings: {
      maxConcurrentRequestsPerInstance: 5
      maxQueueWait: 'PT1M'
      requestTimeout: 'PT1M'
    }
    scaleSettings: {
      pollingInterval: 'PT1M'
      scaleType: 'Auto'
      targetUtilizationPercentage: 50
    }
  }
  tags: {
    additionalProp1: 'string'
    additionalProp2: 'string'
    additionalProp3: 'string'
  }
}
```
