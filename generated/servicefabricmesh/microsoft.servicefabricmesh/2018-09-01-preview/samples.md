# Microsoft.ServiceFabricMesh

## microsoft.servicefabricmesh/secrets

CreateOrUpdateSecret
```bicep
resource exampleResource 'Microsoft.ServiceFabricMesh/secrets@2018-09-01-preview' = {
  name: 'example'
  location: 'EastUS'
  properties: {
    description: 'Mongo DB connection string for backend database!'
    contentType: 'text/plain'
    kind: 'inlinedValue'
  }
  tags: {
  }
}
```

## microsoft.servicefabricmesh/secrets/values

CreateSecretValue
```bicep
resource exampleResource 'Microsoft.ServiceFabricMesh/secrets/values@2018-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    value: 'mongodb://contoso123:0Fc3IolnL12312asdfawejunASDF@asdfYXX2t8a97kghVcUzcDv98hawelufhawefafnoQRGwNj2nMPL1Y9qsIr9Srdw==@contoso123.documents.azure.com:10255/mydatabase?ssl=true'
  }
}
```

## microsoft.servicefabricmesh/volumes

CreateOrUpdateVolume
```bicep
resource exampleResource 'Microsoft.ServiceFabricMesh/volumes@2018-09-01-preview' = {
  name: 'example'
  location: 'EastUS'
  properties: {
    description: 'Service Fabric Mesh sample volume.'
    azureFileParameters: {
      accountKey: 'provide-account-key-here'
      accountName: 'sbzdemoaccount'
      shareName: 'sharel'
    }
    provider: 'SFAzureFile'
  }
  tags: {
  }
}
```

## microsoft.servicefabricmesh/networks

CreateOrUpdateNetwork
```bicep
resource exampleResource 'Microsoft.ServiceFabricMesh/networks@2018-09-01-preview' = {
  name: 'example'
  location: 'EastUS'
  properties: {
    description: 'Service Fabric Mesh sample network.'
    kind: 'Local'
    networkAddressPrefix: '2.0.0.0/16'
  }
  tags: {
  }
}
```

## microsoft.servicefabricmesh/gateways

CreateOrUpdateGateway
```bicep
resource exampleResource 'Microsoft.ServiceFabricMesh/gateways@2018-09-01-preview' = {
  name: 'example'
  location: 'EastUS'
  properties: {
    description: 'Service Fabric Mesh sample gateway.'
    destinationNetwork: {
      name: 'helloWorldNetwork'
    }
    sourceNetwork: {
      name: 'Open'
    }
    tcp: [
      {
        name: 'web'
        destination: {
          applicationName: 'helloWorldApp'
          endpointName: 'helloWorldListener'
          serviceName: 'helloWorldService'
        }
        port: 80
      }
    ]
    http: [
      {
        name: 'contosoWebsite'
        hosts: [
          {
            name: 'contoso.com'
            routes: [
              {
                name: 'index'
                destination: {
                  applicationName: 'httpHelloWorldApp'
                  endpointName: 'indexHttpEndpoint'
                  serviceName: 'indexService'
                }
                match: {
                  path: {
                    type: 'prefix'
                    rewrite: '/'
                    value: '/index'
                  }
                  headers: [
                    {
                      name: 'accept'
                      type: 'exact'
                      value: 'application/json'
                    }
                  ]
                }
              }
            ]
          }
        ]
        port: 8081
      }
    ]
  }
  tags: {
  }
}
```

## microsoft.servicefabricmesh/applications

CreateOrUpdateApplication
```bicep
resource exampleResource 'Microsoft.ServiceFabricMesh/applications@2018-09-01-preview' = {
  name: 'example'
  location: 'EastUS'
  properties: {
    description: 'Service Fabric Mesh sample application.'
    services: [
      {
        name: 'helloWorldService'
        properties: {
          description: 'SeaBreeze Hello World Service.'
          codePackages: [
            {
              name: 'helloWorldCode'
              endpoints: [
                {
                  name: 'helloWorldListener'
                  port: 80
                }
              ]
              image: 'seabreeze/sbz-helloworld:1.0-alpine'
              resources: {
                requests: {
                  cpu: 1
                  memoryInGB: 1
                }
              }
            }
          ]
          networkRefs: [
            {
              name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/sbz_demo/providers/Microsoft.ServiceFabricMesh/networks/sampleNetwork'
              endpointRefs: [
                {
                  name: 'helloWorldListener'
                }
              ]
            }
          ]
          osType: 'Linux'
          replicaCount: 1
        }
      }
    ]
  }
  tags: {
  }
}
```
