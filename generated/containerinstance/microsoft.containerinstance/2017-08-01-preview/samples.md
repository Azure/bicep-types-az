# Microsoft.ContainerInstance
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerinstance/containergroups

ContainerGroupsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2017-08-01-preview' = {
  name: 'example'
  name: 'demo1'
  type: 'Microsoft.ContainerInstance/containerGroups'
  id: '/subscriptions/subid/resourceGroups/demo/providers/Microsoft.ContainerInstance/containerGroups/demo1'
  location: 'west us'
  properties: {
    containers: [
      {
        name: 'demo1'
        properties: {
          command: {
          }
          environmentVariables: [
          ]
          image: 'nginx'
          instanceView: {
          }
          ports: [
            {
              port: 80
            }
          ]
          resources: {
            limits: {
            }
            requests: {
              cpu: 1
              memoryInGb: 1.5
            }
          }
          volumeMounts: {
          }
        }
      }
    ]
    imageRegistryCredentials: {
    }
    ipAddress: {
      type: 'Public'
    }
    osType: 'Linux'
    provisioningState: {
    }
    restartPolicy: {
    }
    state: {
    }
  }
  resourceGroup: 'demo'
  tags: {
  }
}
```
