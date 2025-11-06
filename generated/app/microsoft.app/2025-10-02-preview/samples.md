# Microsoft.App
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.app/builders

Builders_CreateOrUpdate_0
```bicep
resource exampleResource 'Microsoft.App/builders@2025-10-02-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned,UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
      }
    }
  }
  location: 'eastus'
  properties: {
    containerRegistries: [
      {
        containerRegistryServer: 'test.azurecr.io'
        identityResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1'
      }
      {
        containerRegistryServer: 'test2.azurecr.io'
        identityResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1'
      }
    ]
    environmentId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg/providers/Microsoft.App/managedEnvironments/testEnv'
  }
  tags: {
    company: 'Microsoft'
  }
}
```

## microsoft.app/builders/builds

Builds_CreateOrUpdate_NoConfig
```bicep
resource exampleResource 'Microsoft.App/builders/builds@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
}
```

Builds_CreateOrUpdate_WithConfig
```bicep
resource exampleResource 'Microsoft.App/builders/builds@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    configuration: {
      baseOs: 'DebianBullseye'
      environmentVariables: [
        {
          name: 'foo1'
          value: 'bar1'
        }
        {
          name: 'foo2'
          value: 'bar2'
        }
      ]
      platform: 'dotnetcore'
      platformVersion: '7.0'
      preBuildSteps: [
        {
          description: 'First pre build step.'
          httpGet: {
            fileName: 'output.txt'
            headers: [
              'foo'
              'bar'
            ]
            url: 'https://microsoft.com'
          }
          scripts: [
            'echo \'hello\''
            'echo \'world\''
          ]
        }
        {
          description: 'Second pre build step.'
          httpGet: {
            fileName: 'output.txt'
            headers: [
              'foo'
            ]
            url: 'https://microsoft.com'
          }
          scripts: [
            'echo \'hello\''
            'echo \'again\''
          ]
        }
      ]
    }
    destinationContainerRegistry: {
      image: 'test.azurecr.io/repo:tag'
      server: 'test.azurecr.io'
    }
  }
}
```

## microsoft.app/connectedenvironments

Create kube environments
```bicep
resource exampleResource 'Microsoft.App/connectedEnvironments@2025-10-02-preview' = {
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
resource exampleResource 'Microsoft.App/connectedEnvironments/certificates@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    password: 'private key password'
    value: 'Y2VydA=='
  }
}
```

## microsoft.app/connectedenvironments/daprcomponents

Create or update dapr component
```bicep
resource exampleResource 'Microsoft.App/connectedEnvironments/daprComponents@2025-10-02-preview' = {
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
    serviceComponentBind: [
      {
        name: 'statestore'
        metadata: {
          name: 'daprcomponentBind'
          value: 'redis-bind'
        }
        serviceId: '/subscriptions/9f7371f1-b593-4c3c-84e2-9167806ad358/resourceGroups/ca-syn2-group/providers/Microsoft.App/containerapps/cappredis'
      }
    ]
    version: 'v1'
  }
}
```

## microsoft.app/connectedenvironments/storages

Create or update environments storage
```bicep
resource exampleResource 'Microsoft.App/connectedEnvironments/storages@2025-10-02-preview' = {
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

Create or Update App On A Connected Environment
```bicep
resource exampleResource 'Microsoft.App/containerApps@2025-10-02-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.ExtendedLocation/customLocations/testcustomlocation'
    type: 'CustomLocation'
  }
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
        additionalPortMappings: [
          {
            external: true
            targetPort: 1234
          }
          {
            exposedPort: 3456
            external: false
            targetPort: 2345
          }
        ]
        clientCertificateMode: 'accept'
        corsPolicy: {
          allowCredentials: true
          allowedHeaders: [
            'HEADER1'
            'HEADER2'
          ]
          allowedMethods: [
            'GET'
            'POST'
          ]
          allowedOrigins: [
            'https://a.test.com'
            'https://b.test.com'
          ]
          exposeHeaders: [
            'HEADER3'
            'HEADER4'
          ]
          maxAge: 1234
        }
        customDomains: [
          {
            name: 'www.my-name.com'
            bindingType: 'SniEnabled'
            certificateId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/connectedEnvironments/demokube/certificates/my-certificate-for-my-name-dot-com'
          }
          {
            name: 'www.my-other-name.com'
            bindingType: 'SniEnabled'
            certificateId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/connectedEnvironments/demokube/certificates/my-certificate-for-my-other-name-dot-com'
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
        stickySessions: {
          affinity: 'sticky'
        }
        targetPort: 3000
        traffic: [
          {
            label: 'production'
            revisionName: 'testcontainerApp0-ab1234'
            weight: 100
          }
        ]
      }
      maxInactiveRevisions: 10
      revisionTransitionThreshold: 100
      runtime: {
        dotnet: {
          autoConfigureDataProtection: true
        }
        java: {
          enableMetrics: true
          javaAgent: {
            enabled: true
            logging: {
              loggerSettings: [
                {
                  level: 'debug'
                  logger: 'org.springframework.boot'
                }
              ]
            }
          }
        }
      }
    }
    environmentId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/connectedEnvironments/demokube'
    template: {
      containers: [
        {
          name: 'testcontainerApp0'
          image: 'repo/testcontainerApp0:v1'
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
          image: 'repo/testcontainerApp0:v4'
          resources: {
            cpu: 0.2
            memory: '100Mi'
          }
        }
      ]
      scale: {
        cooldownPeriod: 350
        maxReplicas: 5
        minReplicas: 1
        pollingInterval: 35
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

Create or Update Container App
```bicep
resource exampleResource 'Microsoft.App/containerApps@2025-10-02-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned,UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myidentity': {
      }
    }
  }
  location: 'East US'
  properties: {
    configuration: {
      dapr: {
        appHealth: {
          path: '/health'
          enabled: true
          probeIntervalSeconds: 3
          probeTimeoutMilliseconds: 1000
          threshold: 3
        }
        appPort: 3000
        appProtocol: 'http'
        enableApiLogging: true
        enabled: true
        httpMaxRequestSize: 10
        httpReadBufferSize: 30
        logLevel: 'debug'
        maxConcurrency: 10
      }
      identitySettings: [
        {
          identity: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myidentity'
          lifecycle: 'All'
        }
        {
          identity: 'system'
          lifecycle: 'Init'
        }
      ]
      ingress: {
        additionalPortMappings: [
          {
            external: true
            targetPort: 1234
          }
          {
            exposedPort: 3456
            external: false
            targetPort: 2345
          }
        ]
        clientCertificateMode: 'accept'
        corsPolicy: {
          allowCredentials: true
          allowedHeaders: [
            'HEADER1'
            'HEADER2'
          ]
          allowedMethods: [
            'GET'
            'POST'
          ]
          allowedOrigins: [
            'https://a.test.com'
            'https://b.test.com'
          ]
          exposeHeaders: [
            'HEADER3'
            'HEADER4'
          ]
          maxAge: 1234
        }
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
        stickySessions: {
          affinity: 'sticky'
        }
        targetPort: 3000
        traffic: [
          {
            label: 'production'
            revisionName: 'testcontainerApp0-ab1234'
            weight: 100
          }
        ]
      }
      maxInactiveRevisions: 10
      revisionTransitionThreshold: 100
      runtime: {
        dotnet: {
          autoConfigureDataProtection: true
        }
        java: {
          enableMetrics: true
          javaAgent: {
            enabled: true
            logging: {
              loggerSettings: [
                {
                  level: 'debug'
                  logger: 'org.springframework.boot'
                }
              ]
            }
          }
        }
      }
      service: {
        type: 'redis'
      }
    }
    environmentId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube'
    template: {
      containers: [
        {
          name: 'testcontainerApp0'
          image: 'repo/testcontainerApp0:v1'
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
          volumeMounts: [
            {
              mountPath: '/mnt/path1'
              subPath: 'subPath1'
              volumeName: 'azurefile'
            }
            {
              mountPath: '/mnt/path2'
              subPath: 'subPath2'
              volumeName: 'nfsazurefile'
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
          image: 'repo/testcontainerApp0:v4'
          resources: {
            cpu: 0.2
            gpu: 1
            memory: '100Mi'
          }
        }
      ]
      scale: {
        cooldownPeriod: 350
        maxReplicas: 5
        minReplicas: 1
        pollingInterval: 35
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
          {
            name: 'servicebus'
            custom: {
              type: 'azure-servicebus'
              identity: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myidentity'
              metadata: {
                messageCount: '5'
                namespace: 'mynamespace'
                queueName: 'myqueue'
              }
            }
          }
          {
            name: 'azure-queue'
            azureQueue: {
              accountName: 'account1'
              identity: 'system'
              queueLength: 1
              queueName: 'queue1'
            }
          }
        ]
      }
      serviceBinds: [
        {
          name: 'redisService'
          clientType: 'dotnet'
          customizedKeys: {
            DesiredKey: 'defaultKey'
          }
          serviceId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/containerApps/redisService'
        }
      ]
      volumes: [
        {
          name: 'azurefile'
          storageName: 'storage'
          storageType: 'AzureFile'
        }
        {
          name: 'nfsazurefile'
          storageName: 'nfsStorage'
          storageType: 'NfsAzureFile'
        }
      ]
    }
    workloadProfileName: 'My-GP-01'
  }
}
```

Create or Update FunctionApp Kind
```bicep
resource exampleResource 'Microsoft.App/containerApps@2025-10-02-preview' = {
  name: 'example'
  kind: 'functionapp'
  location: 'East Us'
  managedBy: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.Web/sites/testcontainerAppFunctionKind'
  properties: {
    configuration: {
      activeRevisionsMode: 'Single'
      ingress: {
        allowInsecure: false
        external: true
        targetPort: 80
      }
    }
    managedEnvironmentId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/testmanagedenv3'
    template: {
      containers: [
        {
          name: 'function-app-container'
          env: [
            {
              name: 'AzureWebJobsStorage'
              value: 'DefaultEndpointsProtocol=https;AccountName=mystorageaccount;AccountKey=mykey;EndpointSuffix=core.windows.net'
            }
            {
              name: 'FUNCTIONS_WORKER_RUNTIME'
              value: 'dotnet'
            }
            {
              name: 'WEBSITES_ENABLE_APP_SERVICE_STORAGE'
              value: 'false'
            }
          ]
          image: 'mcr.microsoft.com/azure-functions/dotnet:4'
          resources: {
            cpu: 0.5
            memory: '1.0Gi'
          }
        }
      ]
      scale: {
        cooldownPeriod: 300
        maxReplicas: 10
        minReplicas: 0
        pollingInterval: 30
      }
    }
  }
}
```

Create or Update ManagedBy App
```bicep
resource exampleResource 'Microsoft.App/containerApps@2025-10-02-preview' = {
  name: 'example'
  location: 'East US'
  managedBy: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.AppPlatform/Spring/springapp'
  properties: {
    configuration: {
      ingress: {
        exposedPort: 4000
        external: true
        targetPort: 3000
        traffic: [
          {
            revisionName: 'testcontainerAppManagedBy-ab1234'
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
          name: 'testcontainerAppManagedBy'
          image: 'repo/testcontainerAppManagedBy:v1'
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
        cooldownPeriod: 350
        maxReplicas: 5
        minReplicas: 1
        pollingInterval: 35
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

Create or Update SourceToCloud App
```bicep
resource exampleResource 'Microsoft.App/containerApps@2025-10-02-preview' = {
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
        additionalPortMappings: [
          {
            external: true
            targetPort: 1234
          }
          {
            exposedPort: 3456
            external: false
            targetPort: 2345
          }
        ]
        clientCertificateMode: 'accept'
        corsPolicy: {
          allowCredentials: true
          allowedHeaders: [
            'HEADER1'
            'HEADER2'
          ]
          allowedMethods: [
            'GET'
            'POST'
          ]
          allowedOrigins: [
            'https://a.test.com'
            'https://b.test.com'
          ]
          exposeHeaders: [
            'HEADER3'
            'HEADER4'
          ]
          maxAge: 1234
        }
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
        stickySessions: {
          affinity: 'sticky'
        }
        targetPort: 3000
        traffic: [
          {
            label: 'production'
            revisionName: 'testcontainerApp0-ab1234'
            weight: 100
          }
        ]
      }
      maxInactiveRevisions: 10
      revisionTransitionThreshold: 100
      service: {
        type: 'redis'
      }
    }
    environmentId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube'
    patchingConfiguration: {
      patchingMode: 'Automatic'
    }
    template: {
      containers: [
        {
          name: 'testcontainerApp0'
          image: ''
          imageType: 'CloudBuild'
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
          volumeMounts: [
            {
              mountPath: '/mnt/path1'
              subPath: 'subPath1'
              volumeName: 'azurefile'
            }
            {
              mountPath: '/mnt/path2'
              subPath: 'subPath2'
              volumeName: 'nfsazurefile'
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
          image: 'repo/testcontainerApp0:v4'
          resources: {
            cpu: 0.2
            memory: '100Mi'
          }
        }
      ]
      scale: {
        cooldownPeriod: 350
        maxReplicas: 5
        minReplicas: 1
        pollingInterval: 35
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
      serviceBinds: [
        {
          name: 'redisService'
          clientType: 'dotnet'
          customizedKeys: {
            DesiredKey: 'defaultKey'
          }
          serviceId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/containerApps/redisService'
        }
      ]
      volumes: [
        {
          name: 'azurefile'
          storageName: 'storage'
          storageType: 'AzureFile'
        }
        {
          name: 'nfsazurefile'
          storageName: 'nfsStorage'
          storageType: 'NfsAzureFile'
        }
      ]
    }
    workloadProfileName: 'My-GP-01'
  }
}
```

Create or Update Tcp App
```bicep
resource exampleResource 'Microsoft.App/containerApps@2025-10-02-preview' = {
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
            revisionName: 'testcontainerAppTcp-ab1234'
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
          name: 'testcontainerAppTcp'
          image: 'repo/testcontainerAppTcp:v1'
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
        cooldownPeriod: 350
        maxReplicas: 5
        minReplicas: 1
        pollingInterval: 35
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

Create or Update WorkflowApp Kind
```bicep
resource exampleResource 'Microsoft.App/containerApps@2025-10-02-preview' = {
  name: 'example'
  kind: 'workflowapp'
  location: 'East Us'
  managedBy: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.Web/sites/testcontainerAppKind'
  properties: {
    configuration: {
      activeRevisionsMode: 'Single'
      ingress: {
        allowInsecure: false
        external: true
        targetPort: 443
      }
    }
    managedEnvironmentId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/testmanagedenv3'
    template: {
      containers: [
        {
          name: 'logicapps-container'
          image: 'default/logicapps-base:latest'
          resources: {
            cpu: 1
            memory: '2.0Gi'
          }
        }
      ]
      scale: {
        cooldownPeriod: 350
        maxReplicas: 30
        minReplicas: 1
        pollingInterval: 35
      }
    }
  }
}
```

## microsoft.app/containerapps/authconfigs

Create or Update Container App AuthConfig
```bicep
resource exampleResource 'Microsoft.App/containerApps/authConfigs@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    encryptionSettings: {
      containerAppAuthEncryptionSecretName: 'testEncryptionSecretName'
      containerAppAuthSigningSecretName: 'testSigningSecretName'
    }
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

Create or Update Container App AuthConfig with msi clientID blob storage token store
```bicep
resource exampleResource 'Microsoft.App/containerApps/authConfigs@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    encryptionSettings: {
      containerAppAuthEncryptionSecretName: 'testEncryptionSecretName'
      containerAppAuthSigningSecretName: 'testSigningSecretName'
    }
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
    login: {
      tokenStore: {
        azureBlobStorage: {
          blobContainerUri: 'https://test.blob.core.windows.net/container1'
          clientId: '00000000-0000-0000-0000-000000000000'
        }
      }
    }
    platform: {
      enabled: true
    }
  }
}
```

Create or Update Container App AuthConfig with msi managedIdentityResourceId blob storage token store
```bicep
resource exampleResource 'Microsoft.App/containerApps/authConfigs@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    encryptionSettings: {
      containerAppAuthEncryptionSecretName: 'testEncryptionSecretName'
      containerAppAuthSigningSecretName: 'testSigningSecretName'
    }
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
    login: {
      tokenStore: {
        azureBlobStorage: {
          blobContainerUri: 'https://test.blob.core.windows.net/container1'
          managedIdentityResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1'
        }
      }
    }
    platform: {
      enabled: true
    }
  }
}
```

## microsoft.app/containerapps/resiliencypolicies

Create or Update App Resiliency
```bicep
resource exampleResource 'Microsoft.App/containerApps/resiliencyPolicies@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    circuitBreakerPolicy: {
      consecutiveErrors: 5
      intervalInSeconds: 10
      maxEjectionPercent: 50
    }
    httpConnectionPool: {
      http1MaxPendingRequests: 1024
      http2MaxRequests: 1024
    }
    httpRetryPolicy: {
      matches: {
        errors: [
          '5xx'
          'connect-failure'
          'reset'
          'retriable-headers'
          'retriable-status-codes'
        ]
        headers: [
          {
            header: 'X-Content-Type'
            match: {
              prefixMatch: 'GOATS'
            }
          }
        ]
        httpStatusCodes: [
          502
          503
        ]
      }
      maxRetries: 5
      retryBackOff: {
        initialDelayInMilliseconds: 1000
        maxIntervalInMilliseconds: 10000
      }
    }
    tcpConnectionPool: {
      maxConnections: 100
    }
    tcpRetryPolicy: {
      maxConnectAttempts: 3
    }
    timeoutPolicy: {
      connectionTimeoutInSeconds: 5
      responseTimeoutInSeconds: 15
    }
  }
}
```

## microsoft.app/containerapps/sourcecontrols

Create or Update Container App SourceControl
```bicep
resource exampleResource 'Microsoft.App/containerApps/sourcecontrols@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    branch: 'master'
    githubActionConfiguration: {
      azureCredentials: {
        clientId: '<clientid>'
        clientSecret: '<clientsecret>'
        kind: 'feaderated'
        tenantId: '<tenantid>'
      }
      buildEnvironmentVariables: [
        {
          name: 'foo1'
          value: 'bar1'
        }
        {
          name: 'foo2'
          value: 'bar2'
        }
      ]
      contextPath: './'
      dockerfilePath: './Dockerfile'
      githubPersonalAccessToken: 'test'
      image: 'image/tag'
      registryInfo: {
        registryPassword: '<registrypassword>'
        registryUrl: 'test-registry.azurecr.io'
        registryUserName: 'test-registry'
      }
    }
    repoUrl: 'https://github.com/xwang971/ghatest'
  }
}
```

## microsoft.app/logicapps

Create logic app extension
```bicep
resource exampleResource 'Microsoft.App/logicApps@2025-10-02-preview' = {
  name: 'example'
  properties: {
  }
}
```

## microsoft.app/managedenvironments

Create environment with custom infrastructureResourceGroup
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments@2025-10-02-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    appLogsConfiguration: {
      logAnalyticsConfiguration: {
        customerId: 'string'
        sharedKey: 'string'
      }
    }
    availabilityZones: [
      '1'
      '2'
      '3'
    ]
    customDomainConfiguration: {
      certificatePassword: '1234'
      certificateValue: 'Y2VydA=='
      dnsSuffix: 'www.my-name.com'
    }
    daprAIConnectionString: 'InstrumentationKey=00000000-0000-0000-0000-000000000000;IngestionEndpoint=https://northcentralus-0.in.applicationinsights.azure.com/'
    infrastructureResourceGroup: 'myInfrastructureRgName'
    vnetConfiguration: {
      infrastructureSubnetId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/RGName/providers/Microsoft.Network/virtualNetworks/VNetName/subnets/subnetName1'
    }
    workloadProfiles: [
      {
        name: 'My-GP-01'
        enableFips: true
        maximumCount: 12
        minimumCount: 3
        workloadProfileType: 'GeneralPurpose'
      }
      {
        name: 'My-MO-01'
        maximumCount: 6
        minimumCount: 3
        workloadProfileType: 'MemoryOptimized'
      }
      {
        name: 'My-CO-01'
        maximumCount: 6
        minimumCount: 3
        workloadProfileType: 'ComputeOptimized'
      }
      {
        name: 'My-consumption-01'
        workloadProfileType: 'Consumption'
      }
    ]
    zoneRedundant: true
  }
}
```

Create environments
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments@2025-10-02-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contoso-resources/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-identity': {
      }
    }
  }
  location: 'East US'
  properties: {
    appInsightsConfiguration: {
      connectionString: 'InstrumentationKey=00000000-0000-0000-0000-000000000000;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/'
    }
    appLogsConfiguration: {
      logAnalyticsConfiguration: {
        customerId: 'string'
        dynamicJsonColumns: true
        sharedKey: 'string'
      }
    }
    availabilityZones: [
      '1'
      '2'
      '3'
    ]
    customDomainConfiguration: {
      certificatePassword: '1234'
      certificateValue: 'Y2VydA=='
      dnsSuffix: 'www.my-name.com'
    }
    daprAIConnectionString: 'InstrumentationKey=00000000-0000-0000-0000-000000000000;IngestionEndpoint=https://northcentralus-0.in.applicationinsights.azure.com/'
    diskEncryptionConfiguration: {
      keyVaultConfiguration: {
        auth: {
          identity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contoso-resources/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-identity'
        }
        keyUrl: 'https://contoso.vault.azure.net/mykey/19ff8313ca394b89b9e824bbbdc8c521'
      }
    }
    ingressConfiguration: {
      headerCountLimit: 30
      requestIdleTimeout: 5
      terminationGracePeriodSeconds: 3600
      workloadProfileName: 'My-CO-01'
    }
    openTelemetryConfiguration: {
      destinationsConfiguration: {
        dataDogConfiguration: {
          key: '000000000000000000000000'
          site: 'string'
        }
        otlpConfigurations: [
          {
            name: 'dashboard'
            endpoint: 'dashboard.k8s.region.azurecontainerapps.io:80'
            headers: [
              {
                key: 'api-key'
                value: 'xxxxxxxxxxx'
              }
            ]
            insecure: true
          }
        ]
      }
      logsConfiguration: {
        destinations: [
          'appInsights'
        ]
      }
      metricsConfiguration: {
        destinations: [
          'dataDog'
        ]
        includeKeda: true
      }
      tracesConfiguration: {
        destinations: [
          'appInsights'
        ]
        includeDapr: true
      }
    }
    peerAuthentication: {
      mtls: {
        enabled: true
      }
    }
    peerTrafficConfiguration: {
      encryption: {
        enabled: true
      }
    }
    vnetConfiguration: {
      infrastructureSubnetId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/RGName/providers/Microsoft.Network/virtualNetworks/VNetName/subnets/subnetName1'
    }
    workloadProfiles: [
      {
        name: 'My-GP-01'
        enableFips: true
        maximumCount: 12
        minimumCount: 3
        workloadProfileType: 'GeneralPurpose'
      }
      {
        name: 'My-MO-01'
        maximumCount: 6
        minimumCount: 3
        workloadProfileType: 'MemoryOptimized'
      }
      {
        name: 'My-CO-01'
        maximumCount: 6
        minimumCount: 3
        workloadProfileType: 'ComputeOptimized'
      }
      {
        name: 'My-consumption-01'
        workloadProfileType: 'Consumption'
      }
    ]
    zoneRedundant: true
  }
}
```

## microsoft.app/managedenvironments/certificates

Create or Update Certificate
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/certificates@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    certificateType: 'ImagePullTrustedCA'
    password: 'private key password'
    value: 'Y2VydA=='
  }
}
```

Create or Update Certificate using Managed Identity
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/certificates@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    certificateKeyVaultProperties: {
      identity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/test-rg/providers/microsoft.managedidentity/userassignedidentities/test-user-mi'
      keyVaultUrl: 'https://xxxxxxxx.vault.azure.net/certificates/certName'
    }
    certificateType: 'ServerSSLCertificate'
  }
}
```

## microsoft.app/managedenvironments/daprcomponents

Create or update dapr component with secret store component
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprComponents@2025-10-02-preview' = {
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
    serviceComponentBind: [
      {
        name: 'statestore'
        metadata: {
          name: 'daprcomponentBind'
          value: 'redis-bind'
        }
        serviceId: '/subscriptions/9f7371f1-b593-4c3c-84e2-9167806ad358/resourceGroups/ca-syn2-group/providers/Microsoft.App/containerapps/cappredis'
      }
    ]
    version: 'v1'
  }
}
```

Create or update dapr component with secrets
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprComponents@2025-10-02-preview' = {
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
    serviceComponentBind: [
      {
        name: 'statestore'
        metadata: {
          name: 'daprcomponentBind'
          value: 'redis-bind'
        }
        serviceId: '/subscriptions/9f7371f1-b593-4c3c-84e2-9167806ad358/resourceGroups/ca-syn2-group/providers/Microsoft.App/containerapps/cappredis'
      }
    ]
    version: 'v1'
  }
}
```

## microsoft.app/managedenvironments/daprcomponents/resiliencypolicies

Create or update dapr component resiliency policy with all options
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprComponents/resiliencyPolicies@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    inboundPolicy: {
      circuitBreakerPolicy: {
        consecutiveErrors: 5
        intervalInSeconds: 4
        timeoutInSeconds: 10
      }
      httpRetryPolicy: {
        maxRetries: 15
        retryBackOff: {
          initialDelayInMilliseconds: 2000
          maxIntervalInMilliseconds: 5500
        }
      }
      timeoutPolicy: {
        responseTimeoutInSeconds: 30
      }
    }
    outboundPolicy: {
      circuitBreakerPolicy: {
        consecutiveErrors: 3
        intervalInSeconds: 60
        timeoutInSeconds: 20
      }
      httpRetryPolicy: {
        maxRetries: 5
        retryBackOff: {
          initialDelayInMilliseconds: 100
          maxIntervalInMilliseconds: 30000
        }
      }
      timeoutPolicy: {
        responseTimeoutInSeconds: 12
      }
    }
  }
}
```

Create or update dapr component resiliency policy with outbound policy only
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprComponents/resiliencyPolicies@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    outboundPolicy: {
      circuitBreakerPolicy: {
        consecutiveErrors: 3
        intervalInSeconds: 60
        timeoutInSeconds: 20
      }
      httpRetryPolicy: {
        maxRetries: 5
        retryBackOff: {
          initialDelayInMilliseconds: 100
          maxIntervalInMilliseconds: 30000
        }
      }
      timeoutPolicy: {
        responseTimeoutInSeconds: 12
      }
    }
  }
}
```

Create or update dapr component resiliency policy with sparse options
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprComponents/resiliencyPolicies@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    inboundPolicy: {
      circuitBreakerPolicy: {
        consecutiveErrors: 3
        timeoutInSeconds: 20
      }
      httpRetryPolicy: {
        maxRetries: 5
        retryBackOff: {
          initialDelayInMilliseconds: 2000
          maxIntervalInMilliseconds: 5500
        }
      }
    }
    outboundPolicy: {
      timeoutPolicy: {
        responseTimeoutInSeconds: 12
      }
    }
  }
}
```

## microsoft.app/managedenvironments/daprsubscriptions

Create or update dapr subscription with bulk subscribe configuration and scopes
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprSubscriptions@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    bulkSubscribe: {
      enabled: true
      maxAwaitDurationMs: 500
      maxMessagesCount: 123
    }
    pubsubName: 'mypubsubcomponent'
    routes: {
      default: '/products'
    }
    scopes: [
      'warehouseapp'
      'customersupportapp'
    ]
    topic: 'inventory'
  }
}
```

Create or update dapr subscription with default route only
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprSubscriptions@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    pubsubName: 'mypubsubcomponent'
    routes: {
      default: '/products'
    }
    topic: 'inventory'
  }
}
```

Create or update dapr subscription with route rules and metadata
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprSubscriptions@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      foo: 'bar'
      hello: 'world'
    }
    pubsubName: 'mypubsubcomponent'
    routes: {
      default: '/products'
      rules: [
        {
          path: '/widgets'
          match: 'event.type == \'widget\''
        }
        {
          path: '/gadgets'
          match: 'event.type == \'gadget\''
        }
      ]
    }
    topic: 'inventory'
  }
}
```

## microsoft.app/managedenvironments/dotnetcomponents

Create or Update .NET Component
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/dotNetComponents@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    componentType: 'AspireDashboard'
    configurations: [
      {
        propertyName: 'dashboard-theme'
        value: 'dark'
      }
    ]
  }
}
```

Create or Update .NET Component with ServiceBinds
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/dotNetComponents@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    componentType: 'AspireDashboard'
    configurations: [
      {
        propertyName: 'dashboard-theme'
        value: 'dark'
      }
    ]
    serviceBinds: [
      {
        name: 'yellowcat'
        serviceId: '/subscriptions/8efdecc5-919e-44eb-b179-915dca89ebf9/resourceGroups/examplerg/providers/Microsoft.App/managedEnvironments/myenvironment/dotNetComponents/yellowcat'
      }
    ]
  }
}
```

## microsoft.app/managedenvironments/httprouteconfigs

Create or Update Http Route
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/httpRouteConfigs@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customDomains: [
      {
        name: 'example.com'
        bindingType: 'SniEnabled'
        certificateId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/examplerg/providers/Microsoft.App/managedEnvironments/testcontainerenv/certificates/certificate-1'
      }
    ]
    rules: [
      {
        description: 'random-description'
        routes: [
          {
            action: {
              prefixRewrite: '/v1/api'
            }
            match: {
              path: '/v1'
              caseSensitive: true
            }
          }
        ]
        targets: [
          {
            containerApp: 'capp-1'
            revision: 'rev-1'
            weight: 100
          }
        ]
      }
    ]
  }
}
```

Create or Update Http Route Path Separated Prefix Rule
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/httpRouteConfigs@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customDomains: [
      {
        name: 'example.com'
        bindingType: 'Disabled'
        certificateId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/examplerg/providers/Microsoft.App/managedEnvironments/testcontainerenv/certificates/certificate-1'
      }
    ]
    rules: [
      {
        description: 'random-description'
        routes: [
          {
            action: {
              prefixRewrite: '/v1/api'
            }
            match: {
              caseSensitive: true
              pathSeparatedPrefix: '/v1'
            }
          }
        ]
        targets: [
          {
            containerApp: 'capp-1'
            label: 'label-1'
          }
        ]
      }
    ]
  }
}
```

Create or Update Http Route Prefix Rule
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/httpRouteConfigs@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customDomains: [
      {
        name: 'example.com'
        bindingType: 'Disabled'
        certificateId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/examplerg/providers/Microsoft.App/managedEnvironments/testcontainerenv/certificates/certificate-1'
      }
    ]
    rules: [
      {
        description: 'random-description'
        routes: [
          {
            action: {
              prefixRewrite: '/v1/api'
            }
            match: {
              caseSensitive: true
              prefix: '/v1'
            }
          }
        ]
        targets: [
          {
            containerApp: 'capp-1'
            label: 'label-1'
          }
        ]
      }
    ]
  }
}
```

## microsoft.app/managedenvironments/javacomponents

Create or Update Java Component
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/javaComponents@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    componentType: 'SpringBootAdmin'
    configurations: [
      {
        propertyName: 'spring.boot.admin.ui.enable-toasts'
        value: 'true'
      }
      {
        propertyName: 'spring.boot.admin.monitor.status-interval'
        value: '10000ms'
      }
    ]
    scale: {
      maxReplicas: 1
      minReplicas: 1
    }
  }
}
```

Create or Update Java Component with ServiceBinds
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/javaComponents@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    componentType: 'SpringBootAdmin'
    configurations: [
      {
        propertyName: 'spring.boot.admin.ui.enable-toasts'
        value: 'true'
      }
      {
        propertyName: 'spring.boot.admin.monitor.status-interval'
        value: '10000ms'
      }
    ]
    scale: {
      maxReplicas: 1
      minReplicas: 1
    }
    serviceBinds: [
      {
        name: 'yellowcat'
        serviceId: '/subscriptions/8efdecc5-919e-44eb-b179-915dca89ebf9/resourceGroups/examplerg/providers/Microsoft.App/managedEnvironments/myenvironment/javaComponents/yellowcat'
      }
    ]
  }
}
```

## microsoft.app/managedenvironments/maintenanceconfigurations

ManagedEnvironmentMaintenanceConfigurationsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/maintenanceConfigurations@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    scheduledEntries: [
      {
        durationHours: 9
        startHourUtc: 12
        weekDay: 'Sunday'
      }
    ]
  }
}
```

## microsoft.app/managedenvironments/managedcertificates

Create or Update Certificate
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/managedCertificates@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    domainControlValidation: 'CNAME'
    subjectName: 'my-subject-name.company.country.net'
  }
}
```

## microsoft.app/managedenvironments/privateendpointconnections

Update a Private Endpoint Connection by Managed Environment
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/privateEndpointConnections@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      actionsRequired: 'None'
      status: 'Approved'
    }
  }
}
```

## microsoft.app/managedenvironments/storages

Create or update environments storage
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/storages@2025-10-02-preview' = {
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

Create or update environments storage for NFS Azure file
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/storages@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    nfsAzureFile: {
      accessMode: 'ReadOnly'
      server: 'server1'
      shareName: 'share1'
    }
  }
}
```

## microsoft.app/sessionpools

Create or Update Session Pool with lifecycle OnContainerExit Timed
```bicep
resource exampleResource 'Microsoft.App/sessionPools@2025-10-02-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'East US'
  properties: {
    containerType: 'CustomContainer'
    customContainerTemplate: {
      containers: [
        {
          name: 'testinitcontainer'
          args: [
            '-c'
            'while true; do echo hello; sleep 10;done'
          ]
          command: [
            '/bin/sh'
          ]
          image: 'repo/testcontainer:v4'
          resources: {
            cpu: 0.25
            memory: '0.5Gi'
          }
        }
      ]
      ingress: {
        targetPort: 80
      }
      registryCredentials: {
        identity: '/subscriptions/7a497526-bb8d-4816-9795-db1418a1f977/resourcegroups/test/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testSP'
        server: 'test.azurecr.io'
      }
    }
    dynamicPoolConfiguration: {
      lifecycleConfiguration: {
        lifecycleType: 'OnContainerExit'
        maxAlivePeriodInSeconds: 86400
      }
    }
    environmentId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube'
    managedIdentitySettings: [
      {
        identity: 'system'
        lifecycle: 'Main'
      }
    ]
    poolManagementType: 'Dynamic'
    scaleConfiguration: {
      maxConcurrentSessions: 500
      readySessionInstances: 100
    }
    sessionNetworkConfiguration: {
      status: 'EgressEnabled'
    }
  }
}
```

Create or Update Session Pool with lifecycle type Timed
```bicep
resource exampleResource 'Microsoft.App/sessionPools@2025-10-02-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'East US'
  properties: {
    containerType: 'CustomContainer'
    customContainerTemplate: {
      containers: [
        {
          name: 'testinitcontainer'
          args: [
            '-c'
            'while true; do echo hello; sleep 10;done'
          ]
          command: [
            '/bin/sh'
          ]
          image: 'repo/testcontainer:v4'
          resources: {
            cpu: 0.25
            memory: '0.5Gi'
          }
        }
      ]
      ingress: {
        targetPort: 80
      }
      registryCredentials: {
        identity: '/subscriptions/7a497526-bb8d-4816-9795-db1418a1f977/resourcegroups/test/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testSP'
        server: 'test.azurecr.io'
      }
    }
    dynamicPoolConfiguration: {
      lifecycleConfiguration: {
        cooldownPeriodInSeconds: 600
        lifecycleType: 'Timed'
      }
    }
    environmentId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube'
    managedIdentitySettings: [
      {
        identity: 'system'
        lifecycle: 'Main'
      }
    ]
    poolManagementType: 'Dynamic'
    scaleConfiguration: {
      maxConcurrentSessions: 500
      readySessionInstances: 100
    }
    sessionNetworkConfiguration: {
      status: 'EgressEnabled'
    }
  }
}
```

Create or Update Session Pool with MCP server
```bicep
resource exampleResource 'Microsoft.App/sessionPools@2025-10-02-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    containerType: 'Shell'
    dynamicPoolConfiguration: {
      lifecycleConfiguration: {
        cooldownPeriodInSeconds: 600
        lifecycleType: 'Timed'
      }
    }
    mcpServerSettings: {
      isMcpServerApiKeyDisabled: false
      isMcpServerEnabled: true
    }
    poolManagementType: 'Dynamic'
    scaleConfiguration: {
      maxConcurrentSessions: 50
    }
    sessionNetworkConfiguration: {
      status: 'EgressEnabled'
    }
  }
}
```
