# Microsoft.Web
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.web/certificates

Create Or Update Certificate
```bicep
resource exampleResource 'Microsoft.Web/certificates@2023-01-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    hostNames: [
      'ServerCert'
    ]
    password: '<password>'
  }
}
```

## microsoft.web/containerapps

Create or Update Container App
```bicep
resource exampleResource 'Microsoft.Web/containerApps@2023-01-01' = {
  name: 'example'
  kind: 'containerApp'
  location: 'East US'
  properties: {
    configuration: {
      ingress: {
        external: true
        targetPort: 3000
      }
    }
    kubeEnvironmentId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.Web/kubeEnvironments/demokube'
    template: {
      containers: [
        {
          name: 'testcontainerApp0'
          image: 'repo/testcontainerApp0:v1'
        }
      ]
      dapr: {
        appPort: 3000
        enabled: true
      }
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

## microsoft.web/hostingenvironments

Create or update an App Service Environment.
```bicep
resource exampleResource 'Microsoft.Web/hostingEnvironments@2023-01-01' = {
  name: 'example'
  kind: 'Asev3'
  location: 'South Central US'
  properties: {
    virtualNetwork: {
      id: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/delegated'
    }
  }
}
```

## microsoft.web/hostingenvironments/configurations

Update ASE custom DNS suffix configuration
```bicep
resource exampleResource 'Microsoft.Web/hostingEnvironments/configurations@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certificateUrl: 'https://test-kv.vault.azure.net/secrets/contosocert'
    dnsSuffix: 'contoso.com'
    keyVaultReferenceIdentity: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/test-rg/providers/microsoft.managedidentity/userassignedidentities/test-user-mi'
  }
}
```

Update networking configuration of an App Service Environment.
```bicep
resource exampleResource 'Microsoft.Web/hostingEnvironments/configurations@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ftpEnabled: true
    remoteDebugEnabled: true
  }
}
```

## microsoft.web/hostingenvironments/multirolepools

Create or update a multi-role pool.
```bicep
resource exampleResource 'Microsoft.Web/hostingEnvironments/multiRolePools@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    workerCount: 3
    workerSize: 'Medium'
  }
}
```

## microsoft.web/hostingenvironments/privateendpointconnections

Approves or rejects a private endpoint connection.
```bicep
resource exampleResource 'Microsoft.Web/hostingEnvironments/privateEndpointConnections@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@company.com'
      status: 'Approved'
    }
  }
}
```

## microsoft.web/hostingenvironments/workerpools

Get properties of a worker pool.
```bicep
resource exampleResource 'Microsoft.Web/hostingEnvironments/workerPools@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    workerCount: 3
    workerSize: 'Small'
  }
}
```

## microsoft.web/kubeenvironments

Create kube environments
```bicep
resource exampleResource 'Microsoft.Web/kubeEnvironments@2023-01-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    staticIp: '1.2.3.4'
  }
}
```

## microsoft.web/serverfarms

Create Or Update App Service plan
```bicep
resource exampleResource 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: 'example'
  kind: 'app'
  location: 'East US'
  properties: {
  }
  sku: {
    name: 'P1'
    capacity: 1
    family: 'P'
    size: 'P1'
    tier: 'Premium'
  }
}
```

## microsoft.web/sites

Clone web app
```bicep
resource exampleResource 'Microsoft.Web/sites@2023-01-01' = {
  name: 'example'
  kind: 'app'
  location: 'East US'
  properties: {
    cloningInfo: {
      appSettingsOverrides: {
        Setting1: 'NewValue1'
        Setting3: 'NewValue5'
      }
      cloneCustomHostNames: true
      cloneSourceControl: true
      configureLoadBalancing: false
      hostingEnvironment: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg456/providers/Microsoft.Web/hostingenvironments/aseforsites'
      overwrite: false
      sourceWebAppId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg456/providers/Microsoft.Web/sites/srcsiteg478'
      sourceWebAppLocation: 'West Europe'
    }
  }
}
```

Create or Update web app
```bicep
resource exampleResource 'Microsoft.Web/sites@2023-01-01' = {
  name: 'example'
  kind: 'app'
  location: 'East US'
  properties: {
    serverFarmId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.Web/serverfarms/DefaultAsp'
  }
}
```

## microsoft.web/sites/basicpublishingcredentialspolicies

Update FTP Allowed
```bicep
resource exampleResource 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allow: true
  }
}
```

Update SCM Allowed
```bicep
resource exampleResource 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allow: true
  }
}
```

## microsoft.web/sites/config

Update App Settings
```bicep
resource exampleResource 'Microsoft.Web/sites/config@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    Setting1: 'Value1'
    Setting2: 'Value2'
  }
}
```

Update Auth Settings
```bicep
resource exampleResource 'Microsoft.Web/sites/config@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allowedExternalRedirectUrls: [
      'sitef6141.customdomain.net'
      'sitef6141.customdomain.info'
    ]
    clientId: '42d795a9-8abb-4d06-8534-39528af40f8e.apps.googleusercontent.com'
    defaultProvider: 'Google'
    enabled: true
    runtimeVersion: '~1'
    tokenRefreshExtensionHours: 120
    tokenStoreEnabled: true
    unauthenticatedClientAction: 'RedirectToLoginPage'
  }
}
```

Update Auth Settings V2
```bicep
resource exampleResource 'Microsoft.Web/sites/config@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    globalValidation: {
      excludedPaths: [
        '/nosecrets/Path'
      ]
      requireAuthentication: true
      unauthenticatedClientAction: 'Return403'
    }
    httpSettings: {
      forwardProxy: {
        convention: 'Standard'
        customHostHeaderName: 'authHeader'
        customProtoHeaderName: 'customProtoHeader'
      }
      requireHttps: true
      routes: {
        apiPrefix: '/authv2/'
      }
    }
    identityProviders: {
      google: {
        enabled: true
        login: {
          scopes: [
            'admin'
          ]
        }
        registration: {
          clientId: '42d795a9-8abb-4d06-8534-39528af40f8e.apps.googleusercontent.com'
          clientSecretSettingName: 'ClientSecret'
        }
        validation: {
          allowedAudiences: [
            'https://example.com'
          ]
        }
      }
    }
    login: {
      allowedExternalRedirectUrls: [
        'https://someurl.com'
      ]
      cookieExpiration: {
        convention: 'IdentityProviderDerived'
        timeToExpiration: '2022:09-01T00:00Z'
      }
      nonce: {
        validateNonce: true
      }
      preserveUrlFragmentsForLogins: true
      routes: {
        logoutEndpoint: 'https://app.com/logout'
      }
      tokenStore: {
        enabled: true
        fileSystem: {
          directory: '/wwwroot/sites/example'
        }
        tokenRefreshExtensionHours: 96
      }
    }
    platform: {
      configFilePath: '/auth/config.json'
      enabled: true
      runtimeVersion: '~1'
    }
  }
}
```

Update Azure Storage Accounts
```bicep
resource exampleResource 'Microsoft.Web/sites/config@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    account1: {
      type: 'AzureFiles'
      accessKey: '26515^%@#*'
      accountName: 'testsa'
      mountPath: '/mounts/a/files'
      shareName: 'web'
    }
  }
}
```

Update Site Config
```bicep
resource exampleResource 'Microsoft.Web/sites/config@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    acrUseManagedIdentityCreds: false
    alwaysOn: false
    appCommandLine: ''
    autoHealEnabled: false
    azureStorageAccounts: {
    }
    defaultDocuments: [
      'Default.htm'
      'Default.html'
      'Default.asp'
      'index.htm'
      'index.html'
      'iisstart.htm'
      'default.aspx'
      'index.php'
      'hostingstart.html'
    ]
    detailedErrorLoggingEnabled: false
    ftpsState: 'AllAllowed'
    functionAppScaleLimit: 0
    functionsRuntimeScaleMonitoringEnabled: false
    http20Enabled: false
    httpLoggingEnabled: false
    linuxFxVersion: ''
    loadBalancing: 'LeastRequests'
    logsDirectorySizeLimit: 35
    managedPipelineMode: 'Integrated'
    minTlsVersion: '1.2'
    minimumElasticInstanceCount: 0
    netFrameworkVersion: 'v4.0'
    nodeVersion: ''
    numberOfWorkers: 1
    phpVersion: '5.6'
    powerShellVersion: ''
    pythonVersion: ''
    remoteDebuggingEnabled: false
    requestTracingEnabled: false
    scmMinTlsVersion: '1.2'
    use32BitWorkerProcess: true
    virtualApplications: [
      {
        physicalPath: 'site\\wwwroot'
        preloadEnabled: false
        virtualPath: '/'
      }
    ]
    vnetName: ''
    vnetPrivatePortsCount: 0
    vnetRouteAllEnabled: false
    webSocketsEnabled: false
  }
}
```

## microsoft.web/sites/privateendpointconnections

Approves or rejects a private endpoint connection for a site.
```bicep
resource exampleResource 'Microsoft.Web/sites/privateEndpointConnections@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by admin.'
      actionsRequired: ''
      status: 'Approved'
    }
  }
}
```

## microsoft.web/sites/slots

Clone web app slot
```bicep
resource exampleResource 'Microsoft.Web/sites/slots@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'app'
  location: 'East US'
  properties: {
    cloningInfo: {
      appSettingsOverrides: {
        Setting1: 'NewValue1'
        Setting3: 'NewValue5'
      }
      cloneCustomHostNames: true
      cloneSourceControl: true
      configureLoadBalancing: false
      hostingEnvironment: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg456/providers/Microsoft.Web/hostingenvironments/aseforsites'
      overwrite: false
      sourceWebAppId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg456/providers/Microsoft.Web/sites/srcsiteg478/slot/qa'
      sourceWebAppLocation: 'West Europe'
    }
  }
}
```

Create or Update Web App Slot
```bicep
resource exampleResource 'Microsoft.Web/sites/slots@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'app'
  location: 'East US'
  properties: {
    serverFarmId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.Web/serverfarms/DefaultAsp'
  }
}
```

## microsoft.web/sites/slots/basicpublishingcredentialspolicies

Update FTP Allowed
```bicep
resource exampleResource 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allow: true
  }
}
```

Update SCM Allowed
```bicep
resource exampleResource 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allow: true
  }
}
```

## microsoft.web/sites/slots/privateendpointconnections

Approves or rejects a private endpoint connection for a site.
```bicep
resource exampleResource 'Microsoft.Web/sites/slots/privateEndpointConnections@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by admin.'
      actionsRequired: ''
      status: 'Approved'
    }
  }
}
```

## microsoft.web/staticsites

Create or update a static site
```bicep
resource exampleResource 'Microsoft.Web/staticSites@2023-01-01' = {
  name: 'example'
  location: 'West US 2'
  properties: {
    branch: 'master'
    buildProperties: {
      apiLocation: 'api'
      appArtifactLocation: 'build'
      appLocation: 'app'
    }
    repositoryToken: 'repoToken123'
    repositoryUrl: 'https://github.com/username/RepoName'
  }
  sku: {
    name: 'Basic'
    tier: 'Basic'
  }
}
```

## microsoft.web/staticsites/basicauth

Creates or updates basic auth properties for a static site.
```bicep
resource exampleResource 'Microsoft.Web/staticSites/basicAuth@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    applicableEnvironmentsMode: 'AllEnvironments'
    environments: {
    }
    password: '**********************'
    secretUrl: {
    }
  }
}
```

## microsoft.web/staticsites/builds/config

Creates or updates the function app settings of a static site build.
```bicep
resource exampleResource 'Microsoft.Web/staticSites/builds/config@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    setting1: 'someval'
    setting2: 'someval2'
  }
}
```

Creates or updates the function app settings of a static site build.
```bicep
resource exampleResource 'Microsoft.Web/staticSites/builds/config@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    setting1: 'someval'
    setting2: 'someval2'
  }
}
```

## microsoft.web/staticsites/builds/databaseconnections

Create or update a database connection for a static site build
```bicep
resource exampleResource 'Microsoft.Web/staticSites/builds/databaseConnections@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    connectionIdentity: 'SystemAssigned'
    connectionString: 'AccountEndpoint=https://exampleDatabaseName.documents.azure.com:443/;Database=mydb;'
    region: 'West US 2'
    resourceId: '/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/databaseRG/providers/Microsoft.DocumentDB/databaseAccounts/exampleDatabaseName'
  }
}
```

## microsoft.web/staticsites/builds/linkedbackends

Link a backend to a static site build
```bicep
resource exampleResource 'Microsoft.Web/staticSites/builds/linkedBackends@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backendResourceId: '/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/backendRg/providers/Microsoft.Web/sites/testBackend'
    region: 'West US 2'
  }
}
```

## microsoft.web/staticsites/builds/userprovidedfunctionapps

Register a user provided function app with a static site build
```bicep
resource exampleResource 'Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    functionAppRegion: 'West US 2'
    functionAppResourceId: '/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/functionRG/providers/Microsoft.Web/sites/testFunctionApp'
  }
}
```

## microsoft.web/staticsites/config

Creates or updates the app settings of a static site.
```bicep
resource exampleResource 'Microsoft.Web/staticSites/config@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    setting1: 'someval'
    setting2: 'someval2'
  }
}
```

Creates or updates the function app settings of a static site.
```bicep
resource exampleResource 'Microsoft.Web/staticSites/config@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    setting1: 'someval'
    setting2: 'someval2'
  }
}
```

## microsoft.web/staticsites/customdomains

Create or update a custom domain for a static site
```bicep
resource exampleResource 'Microsoft.Web/staticSites/customDomains@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.web/staticsites/databaseconnections

Create or update a database connection for a static site
```bicep
resource exampleResource 'Microsoft.Web/staticSites/databaseConnections@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    connectionIdentity: 'SystemAssigned'
    connectionString: 'AccountEndpoint=https://exampleDatabaseName.documents.azure.com:443/;Database=mydb;'
    region: 'West US 2'
    resourceId: '/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/databaseRG/providers/Microsoft.DocumentDB/databaseAccounts/exampleDatabaseName'
  }
}
```

## microsoft.web/staticsites/linkedbackends

Link a backend to a static site
```bicep
resource exampleResource 'Microsoft.Web/staticSites/linkedBackends@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backendResourceId: '/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/backendRg/providers/Microsoft.Web/sites/testBackend'
    region: 'West US 2'
  }
}
```

## microsoft.web/staticsites/privateendpointconnections

Approves or rejects a private endpoint connection for a site.
```bicep
resource exampleResource 'Microsoft.Web/staticSites/privateEndpointConnections@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by admin.'
      actionsRequired: ''
      status: 'Approved'
    }
  }
}
```

## microsoft.web/staticsites/userprovidedfunctionapps

Register a user provided function app with a static site
```bicep
resource exampleResource 'Microsoft.Web/staticSites/userProvidedFunctionApps@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    functionAppRegion: 'West US 2'
    functionAppResourceId: '/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/functionRG/providers/Microsoft.Web/sites/testFunctionApp'
  }
}
```
