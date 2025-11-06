# Microsoft.App
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.app/connectedenvironments

Create kube environments
```bicep
resource exampleResource 'Microsoft.App/connectedEnvironments@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/connectedEnvironments/certificates@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/connectedEnvironments/daprComponents@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/connectedEnvironments/storages@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/containerApps@2025-07-01' = {
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
            revisionName: 'testcontainerapp0-ab1234'
            weight: 100
          }
        ]
      }
      maxInactiveRevisions: 10
      runtime: {
        java: {
          enableMetrics: true
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
          image: 'repo/testcontainerapp0:v4'
          resources: {
            cpu: 0.5
            memory: '1Gi'
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
resource exampleResource 'Microsoft.App/containerApps@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/containerApps@2025-07-01' = {
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
            revisionName: 'testcontainerappmanagedby-ab1234'
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
          name: 'testcontainerappmanagedby'
          image: 'repo/testcontainerappmanagedby:v1'
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

Create or Update Tcp App
```bicep
resource exampleResource 'Microsoft.App/containerApps@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/containerApps@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/containerApps/authConfigs@2025-07-01' = {
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

## microsoft.app/containerapps/sourcecontrols

Create or Update Container App SourceControl
```bicep
resource exampleResource 'Microsoft.App/containerApps/sourcecontrols@2025-07-01' = {
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
      contextPath: './'
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

## microsoft.app/managedenvironments

Create environment with custom infrastructureResourceGroup
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/managedEnvironments@2025-07-01' = {
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
    appLogsConfiguration: {
      logAnalyticsConfiguration: {
        customerId: 'string'
        sharedKey: 'string'
      }
    }
    customDomainConfiguration: {
      certificatePassword: '1234'
      certificateValue: 'Y2VydA=='
      dnsSuffix: 'www.my-name.com'
    }
    daprAIConnectionString: 'InstrumentationKey=00000000-0000-0000-0000-000000000000;IngestionEndpoint=https://northcentralus-0.in.applicationinsights.azure.com/'
    ingressConfiguration: {
      headerCountLimit: 30
      requestIdleTimeout: 5
      terminationGracePeriodSeconds: 3600
      workloadProfileName: 'My-CO-01'
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
resource exampleResource 'Microsoft.App/managedEnvironments/certificates@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    password: 'private key password'
    value: 'Y2VydA=='
  }
}
```

Create or Update Certificate using Managed Identity
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/certificates@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    certificateKeyVaultProperties: {
      identity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/test-rg/providers/microsoft.managedidentity/userassignedidentities/test-user-mi'
      keyVaultUrl: 'https://xxxxxxxx.vault.azure.net/certificates/certName'
    }
  }
}
```

## microsoft.app/managedenvironments/daprcomponents

Create or update dapr component with secret store component
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/daprComponents@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/managedEnvironments/daprComponents@2025-07-01' = {
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

## microsoft.app/managedenvironments/httprouteconfigs

Create or Update Http Route
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/httpRouteConfigs@2025-07-01' = {
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
            revision: 'capp-1--0000001'
          }
        ]
      }
    ]
  }
}
```

Create or Update Http Route Path Separated Prefix Rule
```bicep
resource exampleResource 'Microsoft.App/managedEnvironments/httpRouteConfigs@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/managedEnvironments/httpRouteConfigs@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/managedEnvironments/javaComponents@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/managedEnvironments/javaComponents@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/managedEnvironments/maintenanceConfigurations@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/managedEnvironments/managedCertificates@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/managedEnvironments/privateEndpointConnections@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/managedEnvironments/storages@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/managedEnvironments/storages@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/sessionPools@2025-07-01' = {
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
resource exampleResource 'Microsoft.App/sessionPools@2025-07-01' = {
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
