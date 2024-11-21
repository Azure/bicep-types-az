# Microsoft.DevOps
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devops/pipelines

Create a GitHub pipeline to deploy a sample ASP.Net application to Azure web-app
```bicep
resource exampleResource 'Microsoft.DevOps/pipelines@2020-07-13-preview' = {
  name: 'example'
  properties: {
    bootstrapConfiguration: {
      template: {
        id: 'ms.vss-continuous-delivery-pipeline-templates.aspnet-windowswebapp'
        parameters: {
          appInsightLocation: 'South India'
          appServicePlan: 'S1 Standard'
          azureAuth: '{"scheme":"ServicePrincipal","parameters":{"tenantid":"{subscriptionTenantId}","objectid":"{appObjectId}","serviceprincipalid":"{appId}","serviceprincipalkey":"{appSecret}"}}'
          location: 'South India'
          resourceGroup: 'myAspNetWebAppPipeline-rg'
          subscriptionId: '{subscriptionId}'
          webAppName: 'myAspNetWebApp'
        }
      }
    }
    pipelineType: 'githubWorkflow'
    repository: {
      authorization: {
        authorizationType: 'personalAccessToken'
        parameters: {
          token: 'mypat'
        }
      }
      defaultBranch: 'master'
      id: 'contoso/myAspNetWebAppPipeline-org'
      repositoryType: 'gitHub'
    }
  }
}
```

Create an Azure pipeline to deploy a sample ASP.Net application to Azure web-app
```bicep
resource exampleResource 'Microsoft.DevOps/pipelines@2020-07-13-preview' = {
  name: 'example'
  properties: {
    bootstrapConfiguration: {
      template: {
        id: 'ms.vss-continuous-delivery-pipeline-templates.aspnet-windowswebapp'
        parameters: {
          appInsightLocation: 'South India'
          appServicePlan: 'S1 Standard'
          azureAuth: '{"scheme":"ServicePrincipal","parameters":{"tenantid":"{subscriptionTenantId}","objectid":"{appObjectId}","serviceprincipalid":"{appId}","serviceprincipalkey":"{appSecret}"}}'
          location: 'South India'
          resourceGroup: 'myAspNetWebAppPipeline-rg'
          subscriptionId: '{subscriptionId}'
          webAppName: 'myAspNetWebApp'
        }
      }
    }
    organization: {
      name: 'myAspNetWebAppPipeline-org'
    }
    pipelineType: 'azurePipeline'
    project: {
      name: 'myAspNetWebAppPipeline-project'
    }
  }
}
```
