# Microsoft.DevHub
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devhub/iacprofiles

Create IacProfile
```bicep
resource exampleResource 'Microsoft.DevHub/iacProfiles@2025-03-01-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    githubProfile: {
      repositoryMainBranch: 'main'
      repositoryName: 'localtest'
      repositoryOwner: 'owner'
    }
    stages: [
      {
        dependencies: [
        ]
        gitEnvironment: 'Terraform'
        stageName: 'dev'
      }
      {
        dependencies: [
          'dev'
        ]
        gitEnvironment: 'Terraform'
        stageName: 'qa'
      }
      {
        dependencies: [
          'qa'
        ]
        gitEnvironment: 'Terraform'
        stageName: 'prod'
      }
    ]
    templates: [
      {
        instanceName: 'contoso'
        instanceStage: 'dev'
        sourceResourceId: '/subscriptions/xxxx/resourceGroups/xxxx'
        templateDetails: [
          {
            count: 1
            namingConvention: '$sitid-hci'
            productName: 'HCI'
          }
          {
            count: 1
            namingConvention: '$sitid-aks'
            productName: 'AKSarc'
          }
        ]
        templateName: 'base'
      }
    ]
    terraformProfile: {
      storageAccountName: 'hybridiac'
      storageAccountResourceGroup: 'hybrid-iac'
      storageAccountSubscription: 'subscription'
      storageContainerName: 'hybridiac'
    }
  }
  tags: {
    appname: 'testApp'
  }
}
```

## microsoft.devhub/workflows

Create Template Workflow
```bicep
resource exampleResource 'Microsoft.DevHub/workflows@2025-03-01-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    templateWorkflowProfile: {
      deploymentTemplate: {
        destination: '.'
        parameters: {
          key1: 'value1'
        }
        templateId: '/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.DevHub/templates/test-template/versions/0.0.1'
      }
      dockerfileTemplate: {
        destination: '.'
        parameters: {
          key1: 'value1'
        }
        templateId: '/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.DevHub/templates/test-template/versions/0.0.1'
      }
      gitHubProviderProfile: {
        oidcCredentials: {
          azureClientId: 'test-client-id'
          azureTenantId: 'test'
        }
        repository: {
          branchName: 'main'
          repositoryName: 'test-repo'
          repositoryOwner: 'test-owner'
        }
      }
      manifestTemplates: [
        {
          destination: '.'
          parameters: {
            key1: 'value1'
          }
          templateId: '/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.DevHub/templates/test-template/versions/0.0.1'
        }
      ]
      repositoryProvider: 'github'
      workflowTemplate: {
        destination: '.'
        parameters: {
          key1: 'value1'
        }
        templateId: '/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.DevHub/templates/test-template/versions/0.0.1'
      }
    }
  }
  tags: {
    appname: 'testApp'
  }
}
```

Create Workflow
```bicep
resource exampleResource 'Microsoft.DevHub/workflows@2025-03-01-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    githubWorkflowProfile: {
      acr: {
        acrRegistryName: 'registry1'
        acrRepositoryName: 'repo1'
        acrResourceGroup: 'resourceGroup1'
        acrSubscriptionId: '00000000-0000-0000-0000-000000000000'
      }
      aksResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resourceGroup1/providers/Microsoft.ContainerService/managedClusters/cluster1'
      branchName: 'branch1'
      deploymentProperties: {
        kubeManifestLocations: [
          '/src/manifests/'
        ]
        manifestType: 'kube'
        overrides: {
          key1: 'value1'
        }
      }
      dockerBuildContext: 'repo1/src/'
      dockerfile: 'repo1/images/Dockerfile'
      namespace: 'namespace1'
      oidcCredentials: {
        azureClientId: '12345678-3456-7890-5678-012345678901'
        azureTenantId: '66666666-3456-7890-5678-012345678901'
      }
      repositoryName: 'repo1'
      repositoryOwner: 'owner1'
    }
  }
  tags: {
    appname: 'testApp'
  }
}
```

Create Workflow With Artifact Generation
```bicep
resource exampleResource 'Microsoft.DevHub/workflows@2025-03-01-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    artifactGenerationProperties: {
      appName: 'my-app'
      dockerfileGenerationMode: 'enabled'
      dockerfileOutputDirectory: './'
      generationLanguage: 'javascript'
      imageName: 'myimage'
      imageTag: 'latest'
      languageVersion: '14'
      manifestGenerationMode: 'enabled'
      manifestOutputDirectory: './'
      manifestType: 'kube'
      namespace: 'my-namespace'
      port: '80'
    }
    githubWorkflowProfile: {
      acr: {
        acrRegistryName: 'registry1'
        acrRepositoryName: 'repo1'
        acrResourceGroup: 'resourceGroup1'
        acrSubscriptionId: '00000000-0000-0000-0000-000000000000'
      }
      aksResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resourceGroup1/providers/Microsoft.ContainerService/managedClusters/cluster1'
      branchName: 'branch1'
      deploymentProperties: {
        kubeManifestLocations: [
          '/src/manifests/'
        ]
        manifestType: 'kube'
        overrides: {
          key1: 'value1'
        }
      }
      dockerBuildContext: 'repo1/src/'
      dockerfile: 'repo1/images/Dockerfile'
      oidcCredentials: {
        azureClientId: '12345678-3456-7890-5678-012345678901'
        azureTenantId: '66666666-3456-7890-5678-012345678901'
      }
      repositoryName: 'repo1'
      repositoryOwner: 'owner1'
    }
  }
  tags: {
    appname: 'testApp'
  }
}
```
