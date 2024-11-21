# Microsoft.Web
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.web/certificates

Create Or Update Certificate
```bicep
resource exampleResource 'Microsoft.Web/certificates@2020-09-01' = {
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

## microsoft.web/serverfarms

Create Or Update App Service plan
```bicep
resource exampleResource 'Microsoft.Web/serverfarms@2020-09-01' = {
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
resource exampleResource 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2020-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allow: true
  }
}
```

Update SCM Allowed
```bicep
resource exampleResource 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2020-09-01' = {
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
resource exampleResource 'Microsoft.Web/sites/privateEndpointConnections@2020-09-01' = {
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
resource exampleResource 'Microsoft.Web/staticSites@2020-09-01' = {
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
resource exampleResource 'Microsoft.Web/staticSites/builds/config@2020-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    setting1: 'someval'
    setting2: 'someval2'
  }
}
```

## microsoft.web/staticsites/config

Creates or updates the function app settings of a static site.
```bicep
resource exampleResource 'Microsoft.Web/staticSites/config@2020-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    setting1: 'someval'
    setting2: 'someval2'
  }
}
```
