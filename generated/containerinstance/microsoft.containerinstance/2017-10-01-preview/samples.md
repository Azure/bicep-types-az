# Microsoft.ContainerInstance

## microsoft.containerinstance/containergroups

ContainerGroupsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2017-10-01-preview' = {
  name: 'example'
  name: 'mycontainers'
  type: 'Microsoft.ContainerInstance/containerGroups'
  location: 'westus'
  properties: {
    containers: [
      {
        name: 'mycontainers'
        properties: {
          command: [
          ]
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
            requests: {
              cpu: 1
              memoryInGB: 1.5
            }
          }
          volumeMounts: [
            {
              name: 'volume1'
              mountPath: '/mnt/volume1'
              readOnly: false
            }
            {
              name: 'volume2'
              mountPath: '/mnt/volume2'
              readOnly: false
            }
          ]
        }
      }
    ]
    imageRegistryCredentials: [
    ]
    ipAddress: {
      type: 'Public'
      ports: [
        {
          port: 80
          protocol: 'TCP'
        }
      ]
    }
    osType: 'Linux'
    volumes: [
      {
        name: 'volume1'
        azureFile: {
          shareName: 'shareName'
          storageAccountKey: ''
          storageAccountName: 'accountName'
        }
      }
      {
        name: 'volume2'
        emptyDir: {
        }
      }
    ]
  }
}
```
