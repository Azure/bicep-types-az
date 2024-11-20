# Microsoft.App

## microsoft.app/containerapps/authconfigs

Create or Update Container App AuthConfig
```bicep
resource exampleResource 'Microsoft.App/containerApps/authConfigs@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    globalValidation: {
      unauthenticatedClientAction: 'AllowAnonymous'
    }
    identityProviders: {
      facebook: {
        registration: {
          appId: '123'
          appSecretSettingName: 'facebook-secret'
        }
      }
    }
    platform: {
      enabled: true
    }
  }
}
```

## microsoft.app/containerapps

Create or Update Container App
```bicep
resource exampleResource 'Microsoft.App/containerApps@2022-03-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    configuration: {
      dapr: {
        appPort: 3000
        appProtocol: 'http'
        enabled: true
      }
      ingress: {
        customDomains: [
          {
            name: 'www.my-name.com'
            bindingType: 'SniEnabled'
            certificateId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube/certificates/my-certificate-for-my-name-dot-com'
          }
          {
            name: 'www.my-other-name.com'
            bindingType: 'SniEnabled'
            certificateId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube/certificates/my-certificate-for-my-other-name-dot-com'
          }
        ]
        external: true
        targetPort: 3000
        traffic: [
          {
            label: 'production'
            revisionName: 'testcontainerapp0-ab1234'
            weight: 100
          }
        ]
      }
    }
    managedEnvironmentId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube'
    template: {
      containers: [
        {
          name: 'testcontainerapp0'
          image: 'repo/testcontainerapp0:v1'
          probes: [
            {
              type: 'Liveness'
              httpGet: {
                path: '/health'
                httpHeaders: [
                  {
                    name: 'Custom-Header'
                    value: 'Awesome'
                  }
                ]
                port: 8080
              }
              initialDelaySeconds: 3
              periodSeconds: 3
            }
          ]
        }
      ]
      scale: {
        maxReplicas: 5
        minReplicas: 1
        rules: [
          {
            name: 'httpscalingrule'
            custom: {
              type: 'http'
              metadata: {
                concurrentRequests: '50'
              }
            }
          }
        ]
      }
    }
  }
}
```

## microsoft.app/managedenvironments/daprcomponents

Create or update dapr component
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprComponents@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    componentType: 'state.azure.cosmosdb'
    ignoreErrors: false
    initTimeout: '50s'
    metadata: [
      {
        name: 'url'
        value: '<COSMOS-URL>'
      }
      {
        name: 'database'
        value: 'itemsDB'
      }
      {
        name: 'collection'
        value: 'items'
      }
      {
        name: 'masterkey'
        secretRef: 'masterkey'
      }
    ]
    scopes: [
      'container-app-1'
      'container-app-2'
    ]
    secrets: [
      {
        name: 'masterkey'
        value: 'keyvalue'
      }
    ]
    version: 'v1'
  }
}
```

## microsoft.app/managedenvironments

Create environments
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments@2022-03-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    appLogsConfiguration: {
      logAnalyticsConfiguration: {
        customerId: 'string'
        sharedKey: 'string'
      }
    }
    daprAIConnectionString: 'InstrumentationKey=00000000-0000-0000-0000-000000000000;IngestionEndpoint=https://northcentralus-0.in.applicationinsights.azure.com/'
    zoneRedundant: true
  }
}
```

## microsoft.app/managedenvironments/certificates

Create or Update Certificate
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/certificates@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    password: 'private key password'
    value: 'Y2VydA=='
  }
}
```

## microsoft.app/managedenvironments/storages

Create or update environments storage
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/storages@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    azureFile: {
      accessMode: 'ReadOnly'
      accountKey: 'key'
      accountName: 'account1'
      shareName: 'share1'
    }
  }
}
```

## microsoft.app/containerapps/sourcecontrols

Create or Update Container App SourceControl
```bicep
resource exampleResource 'Microsoft.App/containerApps/sourcecontrols@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    branch: 'master'
    githubActionConfiguration: {
      azureCredentials: {
        clientId: '<clientid>'
        clientSecret: '<clientsecret>'
        tenantId: '<tenantid>'
      }
      contextPath: './'
      image: 'image/tag'
      registryInfo: {
        registryPassword: '<registrypassword>'
        registryUrl: 'xwang971reg.azurecr.io'
        registryUserName: 'xwang971reg'
      }
    }
    repoUrl: 'https://github.com/xwang971/ghatest'
  }
}
```
