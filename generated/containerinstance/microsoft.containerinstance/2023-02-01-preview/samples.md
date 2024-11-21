# Microsoft.ContainerInstance

## microsoft.containerinstance/containergroups

ContainerGroupCreateWithExtensions
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2023-02-01-preview' = {
  name: 'example'
  location: 'eastus2'
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
        }
      }
    ]
    imageRegistryCredentials: [
    ]
    ipAddress: {
      type: 'Private'
      ports: [
        {
          port: 80
          protocol: 'TCP'
        }
      ]
    }
    osType: 'Linux'
    subnetIds: [
      {
        id: '/subscriptions/00000000-0000-0000-0000-00000000/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-rg-vnet/subnets/test-subnet'
      }
    ]
    extensions: [
      {
        name: 'kube-proxy'
        properties: {
          extensionType: 'kube-proxy'
          protectedSettings: {
            kubeConfig: '<kubeconfig encoded string>'
          }
          settings: {
            clusterCidr: '10.240.0.0/16'
            kubeVersion: 'v1.9.10'
          }
          version: '1.0'
        }
      }
      {
        name: 'vk-realtime-metrics'
        properties: {
          extensionType: 'realtime-metrics'
          version: '1.0'
        }
      }
    ]
  }
}
```

ContainerGroupWithEncryptionProperties
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2023-02-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/test-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/container-group-identity: {
      }
    }
  }
  location: 'eastus2'
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
        }
      }
    ]
    encryptionProperties: {
      identity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/test-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/container-group-identity'
      keyName: 'test-key'
      keyVersion: '<key version>'
      vaultBaseUrl: 'https://testkeyvault.vault.azure.net'
    }
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
  }
}
```

ContainerGroupsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2023-02-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity-name: {
      }
    }
  }
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
              gpu: {
                count: 1
                sku: 'K80'
              }
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
          test-key: 'test-metadata-value'
        }
        workspaceId: 'workspaceid'
        workspaceKey: 'workspaceKey'
        workspaceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg/providers/microsoft.operationalinsights/workspaces/workspace'
      }
    }
    dnsConfig: {
      nameServers: [
        '1.1.1.1'
      ]
      options: 'ndots:2'
      searchDomains: 'cluster.local svc.cluster.local'
    }
    imageRegistryCredentials: [
    ]
    ipAddress: {
      type: 'Public'
      autoGeneratedDomainNameLabelScope: 'Unsecure'
      dnsNameLabel: 'dnsnamelabel1'
      ports: [
        {
          port: 80
          protocol: 'TCP'
        }
      ]
    }
    osType: 'Linux'
    provisioningTimeoutInSeconds: 600
    subnetIds: [
      {
        id: '[resourceId(\'Microsoft.Network/virtualNetworks/subnets\', parameters(\'vnetName\'), parameters(\'subnetName\'))]'
      }
    ]
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
