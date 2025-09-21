# Microsoft.ContainerInstance
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerinstance/containergroups

ConfidentialContainerGroup
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2025-09-01' = {
  name: 'example'
  location: 'westeurope'
  properties: {
    confidentialComputeProperties: {
      ccePolicy: 'eyJhbGxvd19hbGwiOiB0cnVlLCAiY29udGFpbmVycyI6IHsibGVuZ3RoIjogMCwgImVsZW1lbnRzIjogbnVsbH19'
    }
    containers: [
      {
        name: 'accdemo'
        properties: {
          command: [
          ]
          environmentVariables: [
          ]
          image: 'confiimage'
          ports: [
            {
              port: 8000
            }
          ]
          resources: {
            requests: {
              cpu: 1
              memoryInGB: 1.5
            }
          }
          securityContext: {
            capabilities: {
              add: [
                'CAP_NET_ADMIN'
              ]
            }
            privileged: false
          }
        }
      }
    ]
    imageRegistryCredentials: [
    ]
    ipAddress: {
      type: 'Public'
      ports: [
        {
          port: 8000
          protocol: 'TCP'
        }
      ]
    }
    osType: 'Linux'
    sku: 'Confidential'
  }
}
```

ContainerGroupCreateOrUpdateWithStandbyPool
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2025-09-01' = {
  name: 'example'
  location: 'west us'
  properties: {
    containerGroupProfile: {
      id: '/subscriptions/subid/resourceGroups/demo/providers/Microsoft.ContainerInstance/containerGroupProfiles/democgp'
      revision: 1
    }
    containers: [
      {
        name: 'demo1'
        properties: {
          configMap: {
            keyValuePairs: {
              Newkey: 'value'
            }
          }
        }
      }
    ]
    standbyPoolProfile: {
      id: '/subscriptions/subid/resourceGroups/demo/providers/Microsoft.StandbyPool/standbyContainerGroupPools/demopool'
    }
  }
}
```

ContainerGroupCreateWithExtensions
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2025-09-01' = {
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

ContainerGroupsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2025-09-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity-name': {
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
          'test-key': 'test-metadata-value'
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

ContainerGroupsCreateOrUpdateSecretReference
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2025-09-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity-name': {
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
            {
              name: 'envSecret'
              secureValueReference: 'envSecretRef'
            }
          ]
          image: 'privateRegistryImage'
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
          'test-key': 'test-metadata-value'
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
      {
        passwordReference: 'privateRegistryKeyRef'
        server: 'demoregistry.azurecr.io'
        username: 'registryUserName'
      }
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
    secretReferences: [
      {
        name: 'envSecretRef'
        identity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity-name'
        secretReferenceUri: 'https://keyvaultname.vault.azure.net/secrets/envSecret'
      }
      {
        name: 'accountKeyRef'
        identity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity-name'
        secretReferenceUri: 'https://keyvaultname.vault.azure.net/secrets/accountKey'
      }
      {
        name: 'volumeSecretRef'
        identity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity-name'
        secretReferenceUri: 'https://keyvaultname.vault.azure.net/secrets/volumeSecret'
      }
      {
        name: 'privateRegistryKeyRef'
        identity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity-name'
        secretReferenceUri: 'https://keyvaultname.vault.azure.net/secrets/privateRegistryKey'
      }
    ]
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
          storageAccountKeyReference: 'accountKeyRef'
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
        }
        secretReference: {
          secretKey2: 'volumeSecretRef'
        }
      }
    ]
  }
}
```

ContainerGroupsCreateWithPriority
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2025-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    containers: [
      {
        name: 'test-container-001'
        properties: {
          command: [
            '/bin/sh'
            '-c'
            'sleep 10'
          ]
          image: 'alpine:latest'
          resources: {
            requests: {
              cpu: 1
              memoryInGB: 1
            }
          }
        }
      }
    ]
    osType: 'Linux'
    priority: 'Spot'
    restartPolicy: 'Never'
    sku: 'Standard'
  }
}
```

ContainerGroupWithEncryptionProperties
```bicep
resource exampleResource 'Microsoft.ContainerInstance/containerGroups@2025-09-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/test-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/container-group-identity': {
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
