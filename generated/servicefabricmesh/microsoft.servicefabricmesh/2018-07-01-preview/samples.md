# Microsoft.ServiceFabricMesh

## microsoft.servicefabricmesh/applications

ApplicationCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ServiceFabricMesh/applications@2018-07-01-preview' = {
  name: 'example'
  location: 'EastUS'
  properties: {
    description: 'SeaBreeze HelloWorld Application!'
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
          osType: 'linux'
          replicaCount: 1
        }
      }
    ]
  }
  tags: {
  }
}
```

## microsoft.servicefabricmesh/networks

Network_Create
```bicep
resource exampleResource 'Microsoft.ServiceFabricMesh/networks@2018-07-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressPrefix: '10.0.0.4/22'
    ingressConfig: {
      layer4: [
        {
          applicationName: 'helloWorldAppWindows'
          endpointName: 'helloWorldListener'
          publicPort: '80'
          serviceName: 'helloWorldService'
        }
      ]
    }
  }
}
```

## microsoft.servicefabricmesh/volumes

VolumeCreate
```bicep
resource exampleResource 'Microsoft.ServiceFabricMesh/volumes@2018-07-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'File share backed by Azure Files storage.'
    azureFileParameters: {
      accountKey: 'provide-account-key-here'
      accountName: 'sbzdemoaccount'
      shareName: 'sharel'
    }
    provider: 'SFAzureFile'
  }
}
```
