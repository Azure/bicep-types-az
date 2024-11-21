# Microsoft.MachineLearningServices

## microsoft.machinelearningservices/workspaces

Create Workspace
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces@2021-04-01' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-04-01' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-04-01' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-04-01' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-04-01' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-04-01' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-04-01' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2021-04-01' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2021-04-01' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/services@2021-04-01' = {
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

## microsoft.machinelearningservices/workspaces/connections

CreateWorkspaceConnection
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/connections@2021-04-01' = {
  parent: parentResource 
  name: 'example'
  name: 'connection-1'
  properties: {
    authType: 'PAT'
    category: 'ACR'
    target: 'www.facebook.com'
    value: 'secrets'
  }
}
```
