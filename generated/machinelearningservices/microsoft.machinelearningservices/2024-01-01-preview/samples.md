# Microsoft.MachineLearningServices

## microsoft.machinelearningservices/workspaces/computes

Attach a Kubernetes Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2024-01-01-preview' = {
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
          kernel: {
            argv: [
              'option1'
              'option2'
              'option3'
            ]
            displayName: 'TestKernel'
            language: 'python'
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
      enableOSPatching: true
      enableRootAccess: true
      enableSSO: true
      personalComputeInstanceSettings: {
        assignedUser: {
          objectId: '00000000-0000-0000-0000-000000000000'
          tenantId: '00000000-0000-0000-0000-000000000000'
        }
      }
      releaseQuotaOnStop: true
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

Create an ComputeInstance Compute with Schedules
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2024-01-01-preview' = {
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

Create an ComputeInstance Compute with minimal inputs
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2024-01-01-preview' = {
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

Update a AML Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2024-01-01-preview' = {
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

## microsoft.machinelearningservices/capacityreserverationgroups

CreateOrUpdate Capacity Reservation Group.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/capacityReserverationGroups@2024-01-01-preview' = {
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
    offer: {
      offerName: 'string'
      publisher: 'string'
    }
    reservedCapacity: 1
  }
  sku: {
    name: 'string'
    capacity: 1
    family: 'string'
    size: 'string'
    tier: 'Premium'
  }
  tags: {
  }
}
```

## microsoft.machinelearningservices/registries/codes

CreateOrUpdate Registry Code Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/codes@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/registries/codes/versions@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/registries/components@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/registries/components/versions@2024-01-01-preview' = {
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

## microsoft.machinelearningservices/registries/data

CreateOrUpdate Registry Data Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/data@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    dataType: 'uri_folder'
    isArchived: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/registries/data/versions

CreateOrUpdate Registry Data Version Base.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/data/versions@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    dataType: 'mltable'
    dataUri: 'string'
    isAnonymous: false
    isArchived: false
    properties: {
      string: 'string'
    }
    referencedUris: [
      'string'
    ]
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/registries/environments

CreateOrUpdate Registry Environment Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/environments@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/registries/environments/versions@2024-01-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/marketplacesubscriptions

CreateOrUpdate Workspace Marketplace Subscription.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/marketplaceSubscriptions@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    modelId: 'string'
  }
}
```

## microsoft.machinelearningservices/registries/models

CreateOrUpdate Registry Model Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries/models@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/registries/models/versions@2024-01-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/batchendpoints

CreateOrUpdate Workspace Batch Endpoint.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/batchEndpoints@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/codes@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/codes/versions@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/components@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/components/versions@2024-01-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/data

CreateOrUpdate Workspace Data Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/data@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/data/versions@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/environments@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/environments/versions@2024-01-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/featuresets

CreateOrUpdate Workspace Featureset Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/featuresets@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    isArchived: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/featuresets/versions

CreateOrUpdate Workspace Featureset Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/featuresets/versions@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    entities: [
      'string'
    ]
    isAnonymous: false
    isArchived: false
    materializationSettings: {
      notification: {
        emailOn: [
          'JobFailed'
        ]
        emails: [
          'string'
        ]
      }
      resource: {
        instanceType: 'string'
      }
      schedule: {
        endTime: 'string'
        frequency: 'Day'
        interval: 1
        schedule: {
          hours: [
            1
          ]
          minutes: [
            1
          ]
          monthDays: [
            1
          ]
          weekDays: [
            'Monday'
          ]
        }
        startTime: 'string'
        timeZone: 'string'
        triggerType: 'Recurrence'
      }
      sparkConfiguration: {
        string: 'string'
      }
      storeType: 'Online'
    }
    properties: {
      string: 'string'
    }
    specification: {
      path: 'string'
    }
    stage: 'string'
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/featurestoreentities

CreateOrUpdate Workspace Featurestore Entity Container.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/featurestoreEntities@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    isArchived: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/featurestoreentities/versions

CreateOrUpdate Workspace Featurestore Entity Version.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/featurestoreEntities/versions@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    indexColumns: [
      {
        columnName: 'string'
        dataType: 'Datetime'
      }
    ]
    isAnonymous: false
    isArchived: false
    properties: {
      string: 'string'
    }
    tags: {
      string: 'string'
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/inferencepools

CreateOrUpdate Workspace Inference Pool.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/inferencePools@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
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
    environmentConfiguration: {
      environmentId: 'string'
      environmentVariables: {
        string: 'string'
      }
      livenessProbe: {
        failureThreshold: 1
        initialDelay: 'PT5M'
        period: 'PT5M'
        successThreshold: 1
        timeout: 'PT5M'
      }
      readinessProbe: {
        failureThreshold: 1
        initialDelay: 'PT5M'
        period: 'PT5M'
        successThreshold: 1
        timeout: 'PT5M'
      }
      startupProbe: {
        failureThreshold: 1
        initialDelay: 'PT5M'
        period: 'PT5M'
        successThreshold: 1
        timeout: 'PT5M'
      }
    }
    modelConfiguration: {
      modelId: 'string'
    }
    nodeSkuType: 'string'
    properties: {
      string: 'string'
    }
    requestConfiguration: {
      maxConcurrentRequestsPerInstance: 1
      requestTimeout: 'PT5M'
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

## microsoft.machinelearningservices/workspaces/inferencepools/endpoints

CreateOrUpdate Workspace Inference Endpoint.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/inferencePools/endpoints@2024-01-01-preview' = {
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
    authMode: 'AAD'
    groupId: 'string'
    properties: {
      string: 'string'
    }
  }
  sku: {
    name: 'string'
    capacity: 1
    family: 'string'
    size: 'string'
    tier: 'Standard'
  }
  tags: {
  }
}
```

## microsoft.machinelearningservices/workspaces/inferencepools/groups

CreateOrUpdate Workspace Inference Group.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/inferencePools/groups@2024-01-01-preview' = {
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
    bonusExtraCapacity: 1
    metadata: 'string'
    priority: 1
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

## microsoft.machinelearningservices/workspaces/jobs

CreateOrUpdate AutoML Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/jobs@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    autologgerSettings: {
      mlflowAutologger: 'Disabled'
    }
    codeId: 'string'
    command: 'string'
    componentId: 'string'
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
    isArchived: false
    jobType: 'Command'
    limits: {
      jobLimitsType: 'Command'
      timeout: 'PT5M'
    }
    notificationSetting: {
      emailOn: [
        'JobCompleted'
      ]
      emails: [
        'string'
      ]
    }
    outputs: {
      string: {
        description: 'string'
        assetName: 'string'
        assetVersion: 'string'
        jobOutputType: 'uri_file'
        mode: 'Direct'
        uri: 'string'
      }
    }
    properties: {
      string: 'string'
    }
    queueSettings: {
      jobTier: 'Premium'
      priority: 1
    }
    resources: {
      dockerArgs: 'string'
      instanceCount: 1
      instanceType: 'string'
      locations: [
        'string'
      ]
      properties: {
        string: {
          f69c8d5a-9b39-4183-92d3-a2b18944cf95: {
          }
        }
      }
      shmSize: '2g'
    }
    services: {
      string: {
        endpoint: 'string'
        jobServiceType: 'string'
        nodes: {
          nodesValueType: 'All'
        }
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

CreateOrUpdate Command Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/jobs@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    autologgerSettings: {
      mlflowAutologger: 'Disabled'
    }
    codeId: 'string'
    command: 'string'
    componentId: 'string'
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
    isArchived: false
    jobType: 'Command'
    limits: {
      jobLimitsType: 'Command'
      timeout: 'PT5M'
    }
    notificationSetting: {
      emailOn: [
        'JobCancelled'
      ]
      emails: [
        'string'
      ]
    }
    outputs: {
      string: {
        description: 'string'
        assetName: 'string'
        assetVersion: 'string'
        jobOutputType: 'uri_file'
        mode: 'Upload'
        uri: 'string'
      }
    }
    properties: {
      string: 'string'
    }
    queueSettings: {
      jobTier: 'Basic'
      priority: 1
    }
    resources: {
      dockerArgs: 'string'
      instanceCount: 1
      instanceType: 'string'
      locations: [
        'string'
      ]
      properties: {
        string: {
          c9ac10d0-915b-4de5-afe8-a4c78a37a558: {
          }
        }
      }
      shmSize: '2g'
    }
    services: {
      string: {
        endpoint: 'string'
        jobServiceType: 'string'
        nodes: {
          nodesValueType: 'All'
        }
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

CreateOrUpdate FineTuning Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/jobs@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    experimentName: 'llm-finetuning'
    fineTuningDetails: {
      model: {
        description: {
        }
        jobInputType: 'mlflow_model'
        mode: 'ReadOnlyMount'
        uri: 'azureml://registries/azureml-meta/models/Llama-2-7b/versions/11'
      }
      modelProvider: 'Custom'
      taskType: 'TextCompletion'
      trainingData: {
        description: {
        }
        jobInputType: 'uri_file'
        mode: 'ReadOnlyMount'
        uri: 'azureml://registries/azureml-meta/models/Llama-2-7b/versions/11'
      }
    }
    jobType: 'FineTuning'
    outputs: {
      string: {
        description: 'string'
        assetName: 'string'
        assetVersion: 'string'
        jobOutputType: 'mlflow_model'
        mode: 'ReadWriteMount'
        uri: 'string'
      }
    }
  }
}
```

CreateOrUpdate Pipeline Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/jobs@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/jobs@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    autologgerSettings: {
      mlflowAutologger: 'Disabled'
    }
    codeId: 'string'
    command: 'string'
    componentId: 'string'
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
    isArchived: false
    jobType: 'Command'
    limits: {
      jobLimitsType: 'Command'
      timeout: 'PT5M'
    }
    notificationSetting: {
      emailOn: [
        'JobCompleted'
      ]
      emails: [
        'string'
      ]
    }
    outputs: {
      string: {
        description: 'string'
        assetName: 'string'
        assetVersion: 'string'
        jobOutputType: 'uri_file'
        mode: 'ReadWriteMount'
        uri: 'string'
      }
    }
    properties: {
      string: 'string'
    }
    queueSettings: {
      jobTier: 'Basic'
      priority: 1
    }
    resources: {
      dockerArgs: 'string'
      instanceCount: 1
      instanceType: 'string'
      locations: [
        'string'
      ]
      properties: {
        string: {
          5fc1f627-491e-45a0-a6a2-f5b4be884911: {
          }
        }
      }
      shmSize: '2g'
    }
    services: {
      string: {
        endpoint: 'string'
        jobServiceType: 'string'
        nodes: {
          nodesValueType: 'All'
        }
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

## microsoft.machinelearningservices/workspaces/labelingjobs

CreateOrUpdate Labeling Job.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/labelingJobs@2024-01-01-preview' = {
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
        multiSelect: 'Disabled'
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
        multiSelect: 'Disabled'
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/models@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/models/versions@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2024-01-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2024-01-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/schedules

CreateOrUpdate Schedule.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/schedules@2024-01-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/serverlessendpoints

CreateOrUpdate Workspace Serverless Endpoint.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/serverlessEndpoints@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      string: {
      }
    }
  }
  kind: 'string'
  location: 'string'
  properties: {
    authMode: 'AAD'
    capacityReservation: {
      capacityReservationGroupId: 'string'
      endpointReservedCapacity: 1
    }
    offer: {
      offerName: 'string'
      publisher: 'string'
    }
  }
  sku: {
    name: 'string'
    capacity: 1
    family: 'string'
    size: 'string'
    tier: 'Standard'
  }
  tags: {
  }
}
```

## microsoft.machinelearningservices/registries

CreateOrUpdate Registry with system created accounts.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries@2024-01-01-preview' = {
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
    discoveryUrl: 'string'
    intellectualPropertyPublisher: 'string'
    managedResourceGroup: {
      resourceId: 'string'
    }
    mlFlowRegistryUri: 'string'
    publicNetworkAccess: 'string'
    regionDetails: [
      {
        acrDetails: [
          {
            systemCreatedAcrAccount: {
              acrAccountName: 'string'
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
              allowBlobPublicAccess: false
              armResourceId: {
                resourceId: 'string'
              }
              storageAccountHnsEnabled: false
              storageAccountName: 'string'
              storageAccountType: 'string'
            }
          }
        ]
      }
    ]
    registryPrivateEndpointConnections: [
      {
        id: 'string'
        location: 'string'
        properties: {
          groupIds: [
            'string'
          ]
          privateEndpoint: {
            subnetArmId: 'string'
          }
          provisioningState: 'string'
          registryPrivateLinkServiceConnectionState: {
            description: 'string'
            actionsRequired: 'string'
            status: 'Approved'
          }
        }
      }
    ]
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

CreateOrUpdate Registry with user created accounts.
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/registries@2024-01-01-preview' = {
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
    discoveryUrl: 'string'
    intellectualPropertyPublisher: 'string'
    managedResourceGroup: {
      resourceId: 'string'
    }
    mlFlowRegistryUri: 'string'
    publicNetworkAccess: 'string'
    regionDetails: [
      {
        acrDetails: [
          {
            userCreatedAcrAccount: {
              armResourceId: {
                resourceId: 'string'
              }
            }
          }
        ]
        location: 'string'
        storageAccountDetails: [
          {
            userCreatedStorageAccount: {
              armResourceId: {
                resourceId: 'string'
              }
            }
          }
        ]
      }
    ]
    registryPrivateEndpointConnections: [
      {
        id: 'string'
        location: 'string'
        properties: {
          groupIds: [
            'string'
          ]
          privateEndpoint: {
            subnetArmId: 'string'
          }
          provisioningState: 'string'
          registryPrivateLinkServiceConnectionState: {
            description: 'string'
            actionsRequired: 'string'
            status: 'Approved'
          }
        }
      }
    ]
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

## microsoft.machinelearningservices/workspaces

Create Workspace
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces@2024-01-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/connections

CreateWorkspaceConnection
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/connections@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authType: 'None'
    category: 'ContainerRegistry'
    expiryTime: '2024-03-15T14:30:00Z'
    target: 'www.facebook.com'
  }
}
```

## microsoft.machinelearningservices/workspaces/endpoints/deployments

Create Endpoint Deployment
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/endpoints/deployments@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'Azure.OpenAI'
    model: {
      name: 'text-davinci-003'
      format: 'OpenAI'
      version: '1'
    }
    versionUpgradeOption: 'OnceNewDefaultVersionAvailable'
  }
}
```

## microsoft.machinelearningservices/workspaces/endpoints

Create Endpoint
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/endpoints@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    name: 'Azure.OpenAI'
    associatedResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/test-rg/providers/Microsoft.CognitiveService/account/account-1'
    endpointType: 'Azure.OpenAI'
  }
}
```

## microsoft.machinelearningservices/workspaces/outboundrules

CreateOrUpdate ManagedNetworkSettingsRule
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/outboundRules@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'FQDN'
    category: 'UserDefined'
    destination: 'some_string'
    status: 'Active'
  }
}
```

## microsoft.machinelearningservices/workspaces/privateendpointconnections

WorkspacePutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2024-01-01-preview' = {
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
