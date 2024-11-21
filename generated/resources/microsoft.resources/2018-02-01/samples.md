# Microsoft.Resources
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.resources/deployments

Create a deployment that will redeploy another deployment on failure
```bicep
resource exampleResource 'Microsoft.Resources/deployments@2018-02-01' = {
  name: 'example'
  properties: {
    mode: 'Complete'
    onErrorDeployment: {
      type: 'SpecificDeployment'
      deploymentName: '{nameOfDeploymentToUse}'
    }
    parameters: {
    }
    templateLink: '{templateUri}'
  }
}
```

Create a deployment that will redeploy the last successful deployment on failure
```bicep
resource exampleResource 'Microsoft.Resources/deployments@2018-02-01' = {
  name: 'example'
  properties: {
    mode: 'Complete'
    onErrorDeployment: {
      type: 'LastSuccessful'
    }
    parameters: {
    }
    templateLink: '{templateUri}'
  }
}
```
