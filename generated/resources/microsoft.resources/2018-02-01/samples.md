# Microsoft.Resources

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
