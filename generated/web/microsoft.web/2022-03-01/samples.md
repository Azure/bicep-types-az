# Microsoft.Web
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.web/certificates

Create Or Update Certificate
```bicep
resource exampleResource 'Microsoft.Web/certificates@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/containerApps@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/hostingEnvironments@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/hostingEnvironments/configurations@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/hostingEnvironments/configurations@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/hostingEnvironments/multiRolePools@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/hostingEnvironments/privateEndpointConnections@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/hostingEnvironments/workerPools@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/kubeEnvironments@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/serverfarms@2022-03-01' = {
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

## microsoft.web/sites/basicpublishingcredentialspolicies

Update FTP Allowed
```bicep
resource exampleResource 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allow: true
  }
}
```

Update SCM Allowed
```bicep
resource exampleResource 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allow: true
  }
}
```

## microsoft.web/sites/privateendpointconnections

Approves or rejects a private endpoint connection for a site.
```bicep
resource exampleResource 'Microsoft.Web/sites/privateEndpointConnections@2022-03-01' = {
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

## microsoft.web/sites/slots/basicpublishingcredentialspolicies

Update FTP Allowed
```bicep
resource exampleResource 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allow: true
  }
}
```

Update SCM Allowed
```bicep
resource exampleResource 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/sites/slots/privateEndpointConnections@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/staticSites@2022-03-01' = {
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

## microsoft.web/staticsites/builds/config

Creates or updates the function app settings of a static site build.
```bicep
resource exampleResource 'Microsoft.Web/staticSites/builds/config@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/staticSites/builds/config@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    setting1: 'someval'
    setting2: 'someval2'
  }
}
```

## microsoft.web/staticsites/builds/linkedbackends

Link a backend to a static site build
```bicep
resource exampleResource 'Microsoft.Web/staticSites/builds/linkedBackends@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/staticSites/config@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/staticSites/config@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.web/staticsites/linkedbackends

Link a backend to a static site
```bicep
resource exampleResource 'Microsoft.Web/staticSites/linkedBackends@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/staticSites/privateEndpointConnections@2022-03-01' = {
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
resource exampleResource 'Microsoft.Web/staticSites/userProvidedFunctionApps@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    functionAppRegion: 'West US 2'
    functionAppResourceId: '/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/functionRG/providers/Microsoft.Web/sites/testFunctionApp'
  }
}
```
