# Microsoft.DevOps
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devops/pipelines

Create an Azure pipeline to deploy a sample ASP.Net application to Azure web-app
```bicep
resource exampleResource 'Microsoft.DevOps/pipelines@2019-07-01-preview' = {
  name: 'example'
  location: 'South India'
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
    project: {
      name: 'myAspNetWebAppPipeline-project'
    }
  }
  tags: {
  }
}
```
