# Microsoft.ContainerInstance
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerinstance/containergroups

ContainerGroupsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2018-09-01' = {
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
    diagnostics: {
      logAnalytics: {
        logType: 'ContainerInsights'
        metadata: {
          'test-key': 'test-metadata-value'
        }
        workspaceId: 'workspaceid'
        workspaceKey: 'workspaceKey'
      }
    }
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
    networkProfile: {
      id: 'test-network-profile-id'
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
