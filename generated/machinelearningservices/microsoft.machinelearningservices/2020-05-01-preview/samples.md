# Microsoft.MachineLearningServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.machinelearningservices/workspaces

Create Workspace
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces@2020-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2euap'
  properties: {
    description: 'test description'
    applicationInsights: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/microsoft.insights/components/testinsights'
    containerRegistry: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.ContainerRegistry/registries/testRegistry'
    encryption: {
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
  sku: {
    name: 'Basic'
    tier: 'Basic'
  }
}
```

## microsoft.machinelearningservices/workspaces/computes

Create a AML Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'AmlCompute'
    properties: {
      remoteLoginPortPublicAccess: 'NotSpecified'
      scaleSettings: {
        maxNodeCount: 1
        minNodeCount: 0
        nodeIdleTimeBeforeScaleDown: 'PT5M'
      }
      vmPriority: 'Dedicated'
      vmSize: 'STANDARD_NC6'
    }
  }
}
```

Create a DataFactory Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'DataFactory'
  }
}
```

Create AKS Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'AKS'
  }
}
```

Update a AKS Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/datasets

Create Dataset
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datasets@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  datasetType: 'file'
  parameters: {
    path: {
      dataPath: {
        datastoreName: 'testblobfromarm'
        relativePath: 'UI/03-26-2020_083359_UTC/latin1encoding.csv'
      }
    }
  }
  registration: {
    name: 'datasetName123'
    description: 'test description'
  }
  skipValidation: false
}
```

## microsoft.machinelearningservices/workspaces/datastores

Create ADLS  Datastore
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  clientId: '233d7008-b157-4354-88d1-ba191f06a900'
  clientSecret: 'vdvgdvdvdv'
  dataStoreType: 'adls'
  storeName: 'stanley'
  tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47'
}
```

Create ADLS Gen2 Datastore
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  accountName: 'nicksadlsgen2storage'
  clientId: '233d7008-b157-4354-88d1-ba191f06a900'
  clientSecret: 'vdegbvedgeg'
  dataStoreType: 'adls-gen2'
  fileSystem: 'testfs1'
  tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47'
}
```

Create Blob Datastore
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  accountKey: 'wddrfewfewsgewgrrwegwreg'
  accountName: 'acjainmleastus9484093746'
  containerName: 'azureml-blobstore-5da947c5-53aa-41a5-bb2b-074074e73b7'
  dataStoreType: 'blob'
}
```

Create Databricks File System Datastore
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  dataStoreType: 'dbfs'
}
```

Create File Datastore
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  accountKey: 'wddrfewfewsgewgrrwegwreg'
  accountName: 'acjainmleastus9484093746'
  dataStoreType: 'file'
  shareName: 'azureml-filestore-5da947c5-53aa-41a5-bb2b-074074e73b76'
}
```

Create MySQL Datastore
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  dataStoreType: 'mysqldb'
  databaseName: 'dataset'
  password: '<password>'
  serverName: 'dataset-mysql-srv'
  userId: 'demo_user@dataset-mysql-srv'
}
```

Create PostgreSQL Datastore
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  dataStoreType: 'psqldb'
  databaseName: 'dataset'
  password: '<password>'
  serverName: 'dataset-pgsql-srv'
  userId: 'demo_user@dataset-pgsql-srv'
}
```

Create SQL Datastore
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/datastores@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  dataStoreType: 'sqldb'
  databaseName: 'dataset'
  password: '<password>'
  serverName: 'dataset-azsql-srv'
  userName: 'demo_user'
}
```

## microsoft.machinelearningservices/workspaces/linkedworkspaces

CreateLinkedWorkspace
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'link-1'
  properties: {
    linkedWorkspaceResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1/providers/Microsoft.Synapse/workspaces/linkedWorkspace-1'
    userAssignedIdentityResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup-1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uai1'
  }
}
```

## microsoft.machinelearningservices/workspaces/privateendpointconnections

WorkspacePutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-05-01-preview' = {
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

## microsoft.machinelearningservices/workspaces/services

Create Or Update service
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/services@2020-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  appInsightsEnabled: true
  authEnabled: true
  computeType: 'ACI'
  containerResourceRequirements: {
    cpu: 1
    memoryInGB: 1
  }
  environmentImageRequest: {
    assets: [
      {
        id: {
        }
        mimeType: 'application/x-python'
        unpack: false
        url: 'aml://storage/azureml/score.py'
      }
    ]
    driverProgram: 'score.py'
    environment: {
      name: 'AzureML-Scikit-learn-0.20.3'
      docker: {
        baseDockerfile: {
        }
        baseImage: 'mcr.microsoft.com/azureml/base:openmpi3.1.2-ubuntu16.04'
        baseImageRegistry: {
          address: {
          }
          password: {
          }
          username: {
          }
        }
      }
      environmentVariables: {
        EXAMPLE_ENV_VAR: 'EXAMPLE_VALUE'
      }
      inferencingStackVersion: {
      }
      python: {
        baseCondaEnvironment: {
        }
        condaDependencies: {
          name: 'azureml_ae1acbe6e1e6aabbad900b53c491a17c'
          channels: [
            'conda-forge'
          ]
          dependencies: [
            'python=3.6.2'
            {
              pip: [
                'azureml-core==1.0.69'
                'azureml-defaults==1.0.69'
                'azureml-telemetry==1.0.69'
                'azureml-train-restclients-hyperdrive==1.0.69'
                'azureml-train-core==1.0.69'
                'scikit-learn==0.20.3'
                'scipy==1.2.1'
                'numpy==1.16.2'
                'joblib==0.13.2'
              ]
            }
          ]
        }
        interpreterPath: 'python'
        userManagedDependencies: false
      }
      spark: {
        packages: [
        ]
        precachePackages: true
        repositories: [
        ]
      }
      version: '3'
    }
    models: [
      {
        name: 'sklearn_regression_model.pkl'
        mimeType: 'application/x-python'
        url: 'aml://storage/azureml/sklearn_regression_model.pkl'
      }
    ]
  }
  location: 'eastus2'
}
```
