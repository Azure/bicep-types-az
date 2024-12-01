# Microsoft.MachineLearningServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.machinelearningservices/registries

CreateOrUpdate Registry with system created accounts.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries@2022-10-01-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      string: {
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    description: 'string'
    properties: {
      string: 'string'
    }
    regionDetails: [
      {
        acrDetails: [
          {
            systemCreatedAcrAccount: {
              acrAccountSku: 'string'
              armResourceId: {
                resourceId: 'string'
              }
            }
          }
        ]
        location: 'string'
        storageAccountDetails: [
          {
            systemCreatedStorageAccount: {
              armResourceId: {
                resourceId: 'string'
              }
              storageAccountHnsEnabled: false
              storageAccountType: 'string'
            }
          }
        ]
      }
    ]
    tags: {
      string: 'string'
    }
  }
  sku: {
    name: 'string'
    capacity: 1
    family: 'string'
    size: 'string'
    tier: 'Basic'
  }
  tags: {
  }
}
```

## microsoft.machinelearningservices/registries/codes

CreateOrUpdate Registry Code Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/codes@2022-10-01-preview' = {
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

## microsoft.machinelearningservices/registries/codes/versions

CreateOrUpdate Registry Code Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/codes/versions@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    codeUri: 'https://blobStorage/folderName'
    isAnonymous: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/registries/components

CreateOrUpdate Registry Component Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/components@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/registries/components/versions

CreateOrUpdate Registry Component Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/components/versions@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    componentSpec: {
      8ced901b-d826-477d-bfef-329da9672513: {
      }
    }
    isAnonymous: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/registries/environments

CreateOrUpdate Registry Environment Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/environments@2022-10-01-preview' = {
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

## microsoft.machinelearningservices/registries/environments/versions

CreateOrUpdate Registry Environment Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/environments/versions@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    build: {
      contextUri: 'https://storage-account.blob.core.windows.net/azureml/DockerBuildContext/95ddede6b9b8c4e90472db3acd0a8d28/'
      dockerfilePath: 'prod/Dockerfile'
    }
    condaFile: 'string'
    image: 'docker.io/tensorflow/serving:latest'
    inferenceConfig: {
      livenessRoute: {
        path: 'string'
        port: 1
      }
      readinessRoute: {
        path: 'string'
        port: 1
      }
      scoringRoute: {
        path: 'string'
        port: 1
      }
    }
    isAnonymous: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/registries/models

CreateOrUpdate Registry Model Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/models@2022-10-01-preview' = {
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

## microsoft.machinelearningservices/registries/models/versions

CreateOrUpdate Registry Model Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/models/versions@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    flavors: {
      string: {
        data: {
          string: 'string'
        }
      }
    }
    isAnonymous: false
    modelType: 'CustomModel'
    modelUri: 'string'
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces

Create Workspace
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces@2022-10-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/batchendpoints

CreateOrUpdate Workspace Batch Endpoint.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/batchEndpoints@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
    userAssignedIdentities: {
      string: {
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    description: 'string'
    authMode: 'AMLToken'
    defaults: {
      deploymentName: 'string'
    }
    properties: {
      string: 'string'
    }
  }
  sku: {
    name: 'string'
    capacity: 1
    family: 'string'
    size: 'string'
    tier: 'Free'
  }
  tags: {
  }
}
```

## microsoft.machinelearningservices/workspaces/batchendpoints/deployments

CreateOrUpdate Workspace Batch Deployment.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
    userAssignedIdentities: {
      string: {
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    description: 'string'
    codeConfiguration: {
      codeId: 'string'
      scoringScript: 'string'
    }
    compute: 'string'
    environmentId: 'string'
    environmentVariables: {
      string: 'string'
    }
    errorThreshold: 1
    loggingLevel: 'Info'
    maxConcurrencyPerInstance: 1
    miniBatchSize: 1
    model: {
      assetId: 'string'
      referenceType: 'Id'
    }
    outputAction: 'SummaryOnly'
    outputFileName: 'string'
    properties: {
      string: 'string'
    }
    resources: {
      instanceCount: 1
      instanceType: 'string'
      properties: {
        string: {
          cd3c37dc-2876-4ca4-8a54-21bd7619724a: {
          }
        }
      }
    }
    retrySettings: {
      maxRetries: 1
      timeout: 'PT5M'
    }
  }
  sku: {
    name: 'string'
    capacity: 1
    family: 'string'
    size: 'string'
    tier: 'Free'
  }
  tags: {
  }
}
```

## microsoft.machinelearningservices/workspaces/codes

CreateOrUpdate Workspace Code Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/codes@2022-10-01-preview' = {
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

CreateOrUpdate Workspace Code Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/codes/versions@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    codeUri: 'https://blobStorage/folderName'
    isAnonymous: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/components

CreateOrUpdate Workspace Component Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/components@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/components/versions

CreateOrUpdate Workspace Component Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/components/versions@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    componentSpec: {
      8ced901b-d826-477d-bfef-329da9672513: {
      }
    }
    isAnonymous: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/computes

Attach a Kubernetes Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'some compute'
    computeType: 'Kubernetes'
    properties: {
      defaultInstanceType: 'defaultInstanceType'
      instanceTypes: {
        defaultInstanceType: {
          nodeSelector: {
          }
          resources: {
            limits: {
              cpu: '1'
              memory: '4Gi'
              nvidia.com/gpu: {
              }
            }
            requests: {
              cpu: '1'
              memory: '4Gi'
              nvidia.com/gpu: {
              }
            }
          }
        }
      }
      namespace: 'default'
    }
    resourceId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/Microsoft.ContainerService/managedClusters/compute123-56826-c9b00420020b2'
  }
}
```

Create a AML Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2022-10-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'DataFactory'
  }
}
```

Create an AKS Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'AKS'
  }
}
```

Create an ComputeInstance Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'ComputeInstance'
    properties: {
      applicationSharingPolicy: 'Personal'
      autologgerSettings: {
        mlflowAutologger: 'Enabled'
      }
      computeInstanceAuthorizationType: 'personal'
      customServices: [
        {
          name: 'rstudio-workbench'
          docker: {
            privileged: true
          }
          endpoints: [
            {
              name: 'connect'
              hostIp: {
              }
              published: 4444
              target: 8787
              protocol: 'http'
            }
          ]
          environmentVariables: {
            RSP_LICENSE: {
              type: 'local'
              value: 'XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX'
            }
          }
          image: {
            type: 'docker'
            reference: 'ghcr.io/azure/rstudio-workbench:latest'
          }
          volumes: [
            {
              type: 'bind'
              readOnly: true
              source: '/mnt/azureuser/'
              target: '/home/testuser/'
            }
          ]
        }
      ]
      personalComputeInstanceSettings: {
        assignedUser: {
          objectId: '00000000-0000-0000-0000-000000000000'
          tenantId: '00000000-0000-0000-0000-000000000000'
        }
      }
      sshSettings: {
        sshPublicAccess: 'Disabled'
      }
      subnet: {
        id: 'test-subnet-resource-id'
      }
      vmSize: 'STANDARD_NC6'
    }
  }
}
```

Create an ComputeInstance Compute with minimal inputs
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2022-10-01-preview' = {
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

Create an ComputeInstance Compute with Schedules
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2022-10-01-preview' = {
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
      vmSize: 'STANDARD_NC6'
    }
  }
}
```

Update a AML Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2022-10-01-preview' = {
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

Update an AKS Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2022-10-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/connections

CreateWorkspaceConnection
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/connections@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authType: 'None'
    category: 'ContainerRegistry'
    target: 'www.facebook.com'
  }
}
```

## microsoft.machinelearningservices/workspaces/data

CreateOrUpdate Workspace Data Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/data@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    dataType: 'UriFile'
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

CreateOrUpdate Workspace Data Version Base.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/data/versions@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    dataType: 'uri_file'
    dataUri: 'string'
    isAnonymous: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/datastores

CreateOrUpdate datastore (Azure Data Lake Gen1 w/ ServicePrincipal).
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    credentials: {
      authorityUrl: 'string'
      clientId: '00000000-1111-2222-3333-444444444444'
      credentialsType: 'ServicePrincipal'
      resourceUrl: 'string'
      secrets: {
        clientSecret: 'string'
        secretsType: 'ServicePrincipal'
      }
      tenantId: '00000000-1111-2222-3333-444444444444'
    }
    datastoreType: 'AzureDataLakeGen1'
    properties: {
    }
    storeName: 'string'
    tags: {
      string: 'string'
    }
  }
}
```

CreateOrUpdate datastore (Azure Data Lake Gen2 w/ Service Principal).
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    accountName: 'string'
    credentials: {
      authorityUrl: 'string'
      clientId: '00000000-1111-2222-3333-444444444444'
      credentialsType: 'ServicePrincipal'
      resourceUrl: 'string'
      secrets: {
        clientSecret: 'string'
        secretsType: 'ServicePrincipal'
      }
      tenantId: '00000000-1111-2222-3333-444444444444'
    }
    datastoreType: 'AzureDataLakeGen2'
    endpoint: 'string'
    filesystem: 'string'
    properties: {
    }
    tags: {
      string: 'string'
    }
    protocol: 'string'
  }
}
```

CreateOrUpdate datastore (Azure File store w/ AccountKey).
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    accountName: 'string'
    credentials: {
      credentialsType: 'AccountKey'
      secrets: {
        key: 'string'
        secretsType: 'AccountKey'
      }
    }
    datastoreType: 'AzureFile'
    endpoint: 'string'
    fileShareName: 'string'
    properties: {
    }
    tags: {
      string: 'string'
    }
    protocol: 'string'
  }
}
```

CreateOrUpdate datastore (AzureBlob w/ AccountKey).
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    accountName: 'string'
    containerName: 'string'
    credentials: {
      credentialsType: 'AccountKey'
      secrets: {
        key: 'string'
        secretsType: 'AccountKey'
      }
    }
    datastoreType: 'AzureBlob'
    endpoint: 'core.windows.net'
    properties: {
    }
    tags: {
      string: 'string'
    }
    protocol: 'https'
  }
}
```

## microsoft.machinelearningservices/workspaces/environments

CreateOrUpdate Workspace Environment Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/environments@2022-10-01-preview' = {
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

CreateOrUpdate Workspace Environment Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/environments/versions@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    build: {
      contextUri: 'https://storage-account.blob.core.windows.net/azureml/DockerBuildContext/95ddede6b9b8c4e90472db3acd0a8d28/'
      dockerfilePath: 'prod/Dockerfile'
    }
    condaFile: 'string'
    image: 'docker.io/tensorflow/serving:latest'
    inferenceConfig: {
      livenessRoute: {
        path: 'string'
        port: 1
      }
      readinessRoute: {
        path: 'string'
        port: 1
      }
      scoringRoute: {
        path: 'string'
        port: 1
      }
    }
    isAnonymous: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/jobs

CreateOrUpdate AutoML Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/jobs@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    computeId: 'string'
    displayName: 'string'
    environmentId: 'string'
    environmentVariables: {
      string: 'string'
    }
    experimentName: 'string'
    identity: {
      identityType: 'AMLToken'
    }
    isArchived: false
    jobType: 'AutoML'
    outputs: {
      string: {
        description: 'string'
        jobOutputType: 'uri_file'
        mode: 'ReadWriteMount'
        uri: 'string'
      }
    }
    properties: {
      string: 'string'
    }
    resources: {
      instanceCount: 1
      instanceType: 'string'
      properties: {
        string: {
          9bec0ab0-c62f-4fa9-a97c-7b24bbcc90ad: {
          }
        }
      }
    }
    services: {
      string: {
        endpoint: 'string'
        jobServiceType: 'string'
        port: 1
        properties: {
          string: 'string'
        }
      }
    }
    tags: {
      string: 'string'
    }
    taskDetails: {
      limitSettings: {
        maxTrials: 2
      }
      modelSettings: {
        validationCropSize: 2
      }
      searchSpace: [
        {
          validationCropSize: 'choice(2, 360)'
        }
      ]
      targetColumnName: 'string'
      taskType: 'ImageClassification'
      trainingData: {
        jobInputType: 'mltable'
        uri: 'string'
      }
    }
  }
}
```

CreateOrUpdate Command Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/jobs@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    autologgerSettings: {
      mlflowAutologger: 'Enabled'
    }
    codeId: 'string'
    command: 'string'
    computeId: 'string'
    displayName: 'string'
    distribution: {
      distributionType: 'TensorFlow'
      parameterServerCount: 1
      workerCount: 1
    }
    environmentId: 'string'
    environmentVariables: {
      string: 'string'
    }
    experimentName: 'string'
    identity: {
      identityType: 'AMLToken'
    }
    inputs: {
      string: {
        description: 'string'
        jobInputType: 'literal'
        value: 'string'
      }
    }
    jobType: 'Command'
    limits: {
      jobLimitsType: 'Command'
      timeout: 'PT5M'
    }
    outputs: {
      string: {
        description: 'string'
        jobOutputType: 'uri_file'
        mode: 'ReadWriteMount'
        uri: 'string'
      }
    }
    properties: {
      string: 'string'
    }
    resources: {
      instanceCount: 1
      instanceType: 'string'
      properties: {
        string: {
          e6b6493e-7d5e-4db3-be1e-306ec641327e: {
          }
        }
      }
    }
    services: {
      string: {
        endpoint: 'string'
        jobServiceType: 'string'
        port: 1
        properties: {
          string: 'string'
        }
      }
    }
    tags: {
      string: 'string'
    }
  }
}
```

CreateOrUpdate Pipeline Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/jobs@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    computeId: 'string'
    displayName: 'string'
    experimentName: 'string'
    inputs: {
      string: {
        description: 'string'
        jobInputType: 'literal'
        value: 'string'
      }
    }
    jobType: 'Pipeline'
    outputs: {
      string: {
        description: 'string'
        jobOutputType: 'uri_file'
        mode: 'Upload'
        uri: 'string'
      }
    }
    properties: {
      string: 'string'
    }
    services: {
      string: {
        endpoint: 'string'
        jobServiceType: 'string'
        port: 1
        properties: {
          string: 'string'
        }
      }
    }
    settings: {
    }
    tags: {
      string: 'string'
    }
  }
}
```

CreateOrUpdate Sweep Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/jobs@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    computeId: 'string'
    displayName: 'string'
    earlyTermination: {
      delayEvaluation: 1
      evaluationInterval: 1
      policyType: 'MedianStopping'
    }
    experimentName: 'string'
    jobType: 'Sweep'
    limits: {
      jobLimitsType: 'Sweep'
      maxConcurrentTrials: 1
      maxTotalTrials: 1
      trialTimeout: 'PT1S'
    }
    objective: {
      goal: 'Minimize'
      primaryMetric: 'string'
    }
    properties: {
      string: 'string'
    }
    samplingAlgorithm: {
      samplingAlgorithmType: 'Grid'
    }
    searchSpace: {
      string: {
      }
    }
    services: {
      string: {
        endpoint: 'string'
        jobServiceType: 'string'
        port: 1
        properties: {
          string: 'string'
        }
      }
    }
    tags: {
      string: 'string'
    }
    trial: {
      codeId: 'string'
      command: 'string'
      distribution: {
        distributionType: 'Mpi'
        processCountPerInstance: 1
      }
      environmentId: 'string'
      environmentVariables: {
        string: 'string'
      }
      resources: {
        instanceCount: 1
        instanceType: 'string'
        properties: {
          string: {
            e6b6493e-7d5e-4db3-be1e-306ec641327e: {
            }
          }
        }
      }
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/labelingjobs

CreateOrUpdate Labeling Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/labelingJobs@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    jobInstructions: {
      uri: 'link/to/instructions'
    }
    jobType: 'Labeling'
    labelCategories: {
      myCategory1: {
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
        multiSelectEnabled: true
      }
      myCategory2: {
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
        multiSelectEnabled: true
      }
    }
    labelingJobMediaProperties: {
      mediaType: 'Image'
    }
    mlAssistConfiguration: {
      inferencingComputeBinding: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/computes/myscoringcompute'
      mlAssist: 'Enabled'
      trainingComputeBinding: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1234/providers/Microsoft.MachineLearningServices/workspaces/testworkspace/computes/mytrainingompute'
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

CreateOrUpdate Workspace Model Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/models@2022-10-01-preview' = {
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

CreateOrUpdate Workspace Model Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/models/versions@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    flavors: {
      string: {
        data: {
          string: 'string'
        }
      }
    }
    isAnonymous: false
    modelType: 'CustomModel'
    modelUri: 'string'
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/onlineendpoints

CreateOrUpdate Workspace Online Endpoint.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
    userAssignedIdentities: {
      string: {
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    description: 'string'
    authMode: 'AMLToken'
    compute: 'string'
    properties: {
      string: 'string'
    }
    traffic: {
      string: 1
    }
  }
  sku: {
    name: 'string'
    capacity: 1
    family: 'string'
    size: 'string'
    tier: 'Free'
  }
  tags: {
  }
}
```

## microsoft.machinelearningservices/workspaces/onlineendpoints/deployments

CreateOrUpdate Kubernetes Online Deployment.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
    userAssignedIdentities: {
      string: {
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    description: 'string'
    appInsightsEnabled: false
    codeConfiguration: {
      codeId: 'string'
      scoringScript: 'string'
    }
    containerResourceRequirements: {
      containerResourceLimits: {
        cpu: '"1"'
        gpu: '"1"'
        memory: '"2Gi"'
      }
      containerResourceRequests: {
        cpu: '"1"'
        gpu: '"1"'
        memory: '"2Gi"'
      }
    }
    endpointComputeType: 'Kubernetes'
    environmentId: 'string'
    environmentVariables: {
      string: 'string'
    }
    instanceType: 'string'
    livenessProbe: {
      failureThreshold: 1
      initialDelay: 'PT5M'
      period: 'PT5M'
      successThreshold: 1
      timeout: 'PT5M'
    }
    model: 'string'
    modelMountPath: 'string'
    properties: {
      string: 'string'
    }
    requestSettings: {
      maxConcurrentRequestsPerInstance: 1
      maxQueueWait: 'PT5M'
      requestTimeout: 'PT5M'
    }
    scaleSettings: {
      scaleType: 'Default'
    }
  }
  sku: {
    name: 'string'
    capacity: 1
    family: 'string'
    size: 'string'
    tier: 'Free'
  }
  tags: {
  }
}
```

CreateOrUpdate Managed Online Deployment.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
    userAssignedIdentities: {
      string: {
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    description: 'string'
    appInsightsEnabled: false
    codeConfiguration: {
      codeId: 'string'
      scoringScript: 'string'
    }
    endpointComputeType: 'Managed'
    environmentId: 'string'
    environmentVariables: {
      string: 'string'
    }
    instanceType: 'string'
    livenessProbe: {
      failureThreshold: 1
      initialDelay: 'PT5M'
      period: 'PT5M'
      successThreshold: 1
      timeout: 'PT5M'
    }
    model: 'string'
    modelMountPath: 'string'
    properties: {
      string: 'string'
    }
    readinessProbe: {
      failureThreshold: 30
      initialDelay: 'PT1S'
      period: 'PT10S'
      successThreshold: 1
      timeout: 'PT2S'
    }
    requestSettings: {
      maxConcurrentRequestsPerInstance: 1
      maxQueueWait: 'PT5M'
      requestTimeout: 'PT5M'
    }
    scaleSettings: {
      scaleType: 'Default'
    }
  }
  sku: {
    name: 'string'
    capacity: 1
    family: 'string'
    size: 'string'
    tier: 'Free'
  }
  tags: {
  }
}
```

## microsoft.machinelearningservices/workspaces/privateendpointconnections

WorkspacePutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2022-10-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/schedules

CreateOrUpdate Schedule.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/schedules@2022-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    action: {
      actionType: 'InvokeBatchEndpoint'
      endpointInvocationDefinition: {
        9965593e-526f-4b89-bb36-761138cf2794: {
        }
      }
    }
    displayName: 'string'
    isEnabled: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
    trigger: {
      endTime: 'string'
      expression: 'string'
      startTime: 'string'
      timeZone: 'string'
      triggerType: 'Cron'
    }
  }
}
```
