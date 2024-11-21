# Microsoft.App
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.app/connectedenvironments

Create kube environments
```bicep
resource exampleResource 'Microsoft.App/connectedEnvironments@2022-06-01-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    customDomainConfiguration: {
      certificatePassword: 'private key password'
      certificateValue: 'Y2VydA=='
      dnsSuffix: 'www.my-name.com'
    }
    daprAIConnectionString: 'InstrumentationKey=00000000-0000-0000-0000-000000000000;IngestionEndpoint=https://northcentralus-0.in.applicationinsights.azure.com/'
    staticIp: '1.2.3.4'
  }
}
```

## microsoft.app/connectedenvironments/certificates

Create or Update Certificate
```bicep
resource exampleResource 'Microsoft.App/connectedEnvironments/certificates@2022-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    password: 'private key password'
    value: 'PFX-or-PEM-blob'
  }
}
```

## microsoft.app/connectedenvironments/daprcomponents

Create or update dapr component
```bicep
resource exampleResource 'Microsoft.App/connectedEnvironments/daprComponents@2022-06-01-preview' = {
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

## microsoft.app/connectedenvironments/storages

Create or update environments storage
```bicep
resource exampleResource 'Microsoft.App/connectedEnvironments/storages@2022-06-01-preview' = {
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

## microsoft.app/containerapps

Create or Update Container App
```bicep
resource exampleResource 'Microsoft.App/containerApps@2022-06-01-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    configuration: {
      dapr: {
        appPort: 3000
        appProtocol: 'http'
        enableApiLogging: true
        enabled: true
        httpMaxRequestSize: 10
        httpReadBufferSize: 30
        logLevel: 'debug'
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
        ipSecurityRestrictions: [
          {
            name: 'Allow work IP A subnet'
            description: 'Allowing all IP\'s within the subnet below to access containerapp'
            action: 'Allow'
            ipAddressRange: '192.168.1.1/32'
          }
          {
            name: 'Allow work IP B subnet'
            description: 'Allowing all IP\'s within the subnet below to access containerapp'
            action: 'Allow'
            ipAddressRange: '192.168.1.1/8'
          }
        ]
        targetPort: 3000
        traffic: [
          {
            label: 'production'
            revisionName: 'testcontainerapp0-ab1234'
            weight: 100
          }
        ]
      }
      maxInactiveRevisions: 10
    }
    environmentId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube'
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
      initContainers: [
        {
          name: 'testinitcontainerApp0'
          args: [
            '-c'
            'while true; do echo hello; sleep 10;done'
          ]
          command: [
            '/bin/sh'
          ]
          image: 'repo/testcontainerapp0:v4'
          resources: {
            cpu: 0.5
            memory: '1Gi'
          }
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
    workloadProfileType: 'GeneralPurpose'
  }
}
```

Create or Update Tcp App
```bicep
resource exampleResource 'Microsoft.App/containerApps@2022-06-01-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    configuration: {
      ingress: {
        exposedPort: 4000
        external: true
        targetPort: 3000
        traffic: [
          {
            revisionName: 'testcontainerapptcp-ab1234'
            weight: 100
          }
        ]
        transport: 'tcp'
      }
    }
    environmentId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube'
    template: {
      containers: [
        {
          name: 'testcontainerapptcp'
          image: 'repo/testcontainerapptcp:v1'
          probes: [
            {
              type: 'Liveness'
              initialDelaySeconds: 3
              periodSeconds: 3
              tcpSocket: {
                port: 8080
              }
            }
          ]
        }
      ]
      scale: {
        maxReplicas: 5
        minReplicas: 1
        rules: [
          {
            name: 'tcpscalingrule'
            tcp: {
              metadata: {
                concurrentConnections: '50'
              }
            }
          }
        ]
      }
    }
  }
}
```

## microsoft.app/containerapps/authconfigs

Create or Update Container App AuthConfig
```bicep
resource exampleResource 'Microsoft.App/containerApps/authConfigs@2022-06-01-preview' = {
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

## microsoft.app/containerapps/sourcecontrols

Create or Update Container App SourceControl
```bicep
resource exampleResource 'Microsoft.App/containerApps/sourcecontrols@2022-06-01-preview' = {
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

## microsoft.app/managedenvironments

Create environments
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments@2022-06-01-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    appLogsConfiguration: {
      logAnalyticsConfiguration: {
        customerId: 'string'
        sharedKey: 'string'
      }
    }
    customDomainConfiguration: {
      certificatePassword: 'private key password'
      certificateValue: 'Y2VydA=='
      dnsSuffix: 'www.my-name.com'
    }
    daprAIConnectionString: 'InstrumentationKey=00000000-0000-0000-0000-000000000000;IngestionEndpoint=https://northcentralus-0.in.applicationinsights.azure.com/'
    vnetConfiguration: {
      outboundSettings: {
        outBoundType: 'UserDefinedRouting'
        virtualNetworkApplianceIp: '192.168.1.20'
      }
    }
    workloadProfiles: [
      {
        maximumCount: 12
        minimumCount: 3
        workloadProfileType: 'GeneralPurpose'
      }
      {
        maximumCount: 6
        minimumCount: 3
        workloadProfileType: 'MemoryOptimized'
      }
      {
        maximumCount: 6
        minimumCount: 3
        workloadProfileType: 'ComputeOptimized'
      }
    ]
    zoneRedundant: true
  }
  sku: {
    name: 'Premium'
  }
}
```

## microsoft.app/managedenvironments/certificates

Create or Update Certificate
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/certificates@2022-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    password: 'private key password'
    value: 'Y2VydA=='
  }
}
```

## microsoft.app/managedenvironments/daprcomponents

Create or update dapr component with secret store component
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprComponents@2022-06-01-preview' = {
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
    secretStoreComponent: 'my-secret-store'
    version: 'v1'
  }
}
```

Create or update dapr component with secrets
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprComponents@2022-06-01-preview' = {
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

## microsoft.app/managedenvironments/storages

Create or update environments storage
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/storages@2022-06-01-preview' = {
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
