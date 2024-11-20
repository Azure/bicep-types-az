# Microsoft.ContainerInstance

## microsoft.containerinstance/containergroups

ContainerGroupsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2018-04-01' = {
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
          command: [
          ]
          environmentVariables: [
          ]
          image: 'nginx'
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
            {
              name: 'volume3'
              mountPath: '/mnt/volume3'
              readOnly: true
            }
          ]
        }
      }
    ]
    imageRegistryCredentials: [
    ]
    ipAddress: {
      type: 'Public'
      dnsNameLabel: 'dnsnamelabel1'
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
          storageAccountKey: 'accountKey'
          storageAccountName: 'accountName'
        }
      }
      {
        name: 'volume2'
        emptyDir: {
        }
      }
      {
        name: 'volume3'
        secret: {
          secretKey1: 'SecretValue1InBase64'
          secretKey2: 'SecretValue2InBase64'
        }
      }
    ]
  }
}
```
