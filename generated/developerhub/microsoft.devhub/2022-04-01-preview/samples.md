# Microsoft.DevHub
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devhub/workflows

Create Workflow
```bicep
resource exampleResource 'Microsoft.DevHub/workflows@2022-04-01-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    githubWorkflowProfile: {
      acr: {
        acrRegistryName: 'registry1'
        acrRepositoryName: 'repo1'
        acrResourceGroup: 'resourceGroup1'
        acrSubscriptionId: 'subscriptionId1'
      }
      aksResourceId: '/subscriptions/subscriptionId1/resourcegroups/resourceGroup1/providers/Microsoft.ContainerService/managedClusters/cluster1'
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