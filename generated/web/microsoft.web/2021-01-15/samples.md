# Microsoft.Web
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.web/certificates

Create Or Update Certificate
```bicep
resource exampleResource 'Microsoft.Web/certificates@2021-01-15' = {
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

## microsoft.web/kubeenvironments

Create kube environments
```bicep
resource exampleResource 'Microsoft.Web/kubeEnvironments@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/serverfarms@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2021-01-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allow: true
  }
}
```

Update SCM Allowed
```bicep
resource exampleResource 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/sites/privateEndpointConnections@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2021-01-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allow: true
  }
}
```

Update SCM Allowed
```bicep
resource exampleResource 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/sites/slots/privateEndpointConnections@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/staticSites@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/staticSites/builds/config@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/staticSites/builds/config@2021-01-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    setting1: 'someval'
    setting2: 'someval2'
  }
}
```

## microsoft.web/staticsites/builds/userprovidedfunctionapps

Register a user provided function app with a static site build
```bicep
resource exampleResource 'Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/staticSites/config@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/staticSites/config@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/staticSites/customDomains@2021-01-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.web/staticsites/privateendpointconnections

Approves or rejects a private endpoint connection for a site.
```bicep
resource exampleResource 'Microsoft.Web/staticSites/privateEndpointConnections@2021-01-15' = {
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
resource exampleResource 'Microsoft.Web/staticSites/userProvidedFunctionApps@2021-01-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    functionAppRegion: 'West US 2'
    functionAppResourceId: '/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/functionRG/providers/Microsoft.Web/sites/testFunctionApp'
  }
}
```
