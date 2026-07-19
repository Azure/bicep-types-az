# Microsoft.IoTOperations
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.iotoperations/instances

Instance_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  identity: {
    type: 'None'
    userAssignedIdentities: {
    }
  }
  location: 'eastus2'
  properties: {
    description: 'kpqtgocs'
    schemaRegistryRef: {
      resourceId: '/subscriptions/0000000-0000-0000-0000-000000000000/resourceGroups/resourceGroup123/providers/Microsoft.DeviceRegistry/schemaRegistries/resource-name123'
    }
  }
  tags: {
  }
}
```

## microsoft.iotoperations/instances/akriconnectortemplates

AkriConnectorTemplate_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/akriConnectorTemplates@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    aioMetadata: {
      aioMaxVersion: '1.4.0'
      aioMinVersion: '1.2.0'
    }
    deviceInboundEndpointTypes: [
      {
        endpointType: 'Microsoft.Rest'
        version: '0.0.1'
      }
    ]
    diagnostics: {
      logs: {
        level: 'info'
      }
    }
    mqttConnectionConfiguration: {
      authentication: {
        method: 'ServiceAccountToken'
        serviceAccountTokenSettings: {
          audience: 'MQ-SAT'
        }
      }
      host: 'aio-broker:18883'
      keepAliveSeconds: 10
      maxInflightMessages: 10
      sessionExpirySeconds: 60
      tls: {
        mode: 'Enabled'
        trustedCaCertificateConfigMapRef: 'azure-iot-operations-aio-ca-trust-bundle'
      }
      protocol: 'Mqtt'
    }
    runtimeConfiguration: {
      helmConfigurationSettings: {
        releaseName: 'my-install'
        repositoryName: 'my-repo'
        version: '1.0.0'
      }
      runtimeConfigurationType: 'HelmConfiguration'
    }
  }
}
```

## microsoft.iotoperations/instances/akriconnectortemplates/connectors

AkriConnector_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/akriConnectorTemplates/connectors@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'subscriptions/0000000-0000-0000-0000-000000000000/resourceGroups/resourceGroup123/providers/Microsoft.ExtendedLocation/customLocations/resource-name123'
    type: 'CustomLocation'
  }
  properties: {
  }
}
```

## microsoft.iotoperations/instances/brokers

Broker_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    advanced: {
      clients: {
        maxKeepAliveSeconds: 3744
        maxMessageExpirySeconds: 3263
        maxPacketSizeBytes: 3029
        maxReceiveMaximum: 2365
        maxSessionExpirySeconds: 3859
        subscriberQueueLimit: {
          length: 6
          strategy: 'None'
        }
      }
      encryptInternalTraffic: 'Enabled'
      internalCerts: {
        duration: 'bchrc'
        privateKey: {
          algorithm: 'Ec256'
          rotationPolicy: 'Always'
        }
        renewBefore: 'xkafmpgjfifkwwrhkswtopdnne'
      }
    }
    cardinality: {
      backendChain: {
        partitions: 11
        redundancyFactor: 5
        workers: 15
      }
      frontend: {
        replicas: 2
        workers: 6
      }
    }
    diagnostics: {
      logs: {
        level: 'rnmwokumdmebpmfxxxzvvjfdywotav'
      }
      metrics: {
        prometheusPort: 7581
      }
      selfCheck: {
        intervalSeconds: 158
        mode: 'Enabled'
        timeoutSeconds: 14
      }
      traces: {
        cacheSizeMegabytes: 28
        mode: 'Enabled'
        selfTracing: {
          intervalSeconds: 22
          mode: 'Enabled'
        }
        spanChannelCapacity: 1000
      }
    }
    diskBackedMessageBuffer: {
      ephemeralVolumeClaimSpec: {
        accessModes: [
          'nuluhigrbb'
        ]
        dataSource: {
          name: 'cwhsgxxcxsyppoefm'
          apiGroup: 'npqapyksvvpkohujx'
          kind: 'wazgyb'
        }
        dataSourceRef: {
          name: 'envszivbbmixbyddzg'
          apiGroup: 'mnfnykznjjsoqpfsgdqioupt'
          kind: 'odynqzekfzsnawrctaxg'
          namespace: 'etcfzvxqd'
        }
        resources: {
          limits: {
            key2719: 'hmphcrgctu'
          }
          requests: {
            key2909: 'txocprnyrsgvhfrg'
          }
        }
        selector: {
          matchExpressions: [
            {
              key: 'e'
              operator: 'In'
              values: [
                'slmpajlywqvuyknipgztsonqyybt'
              ]
            }
          ]
          matchLabels: {
            key6673: 'wlngfalznwxnurzpgxomcxhbqefpr'
          }
        }
        storageClassName: 'sseyhrjptkhrqvpdpjmornkqvon'
        volumeMode: 'rxvpksjuuugqnqzeiprocknbn'
        volumeName: 'c'
      }
      maxSize: '500M'
      persistentVolumeClaimSpec: {
        accessModes: [
          'nuluhigrbb'
        ]
        dataSource: {
          name: 'cwhsgxxcxsyppoefm'
          apiGroup: 'npqapyksvvpkohujx'
          kind: 'wazgyb'
        }
        dataSourceRef: {
          name: 'envszivbbmixbyddzg'
          apiGroup: 'mnfnykznjjsoqpfsgdqioupt'
          kind: 'odynqzekfzsnawrctaxg'
          namespace: 'etcfzvxqd'
        }
        resources: {
          limits: {
            key2719: 'hmphcrgctu'
          }
          requests: {
            key2909: 'txocprnyrsgvhfrg'
          }
        }
        selector: {
          matchExpressions: [
            {
              key: 'e'
              operator: 'In'
              values: [
                'slmpajlywqvuyknipgztsonqyybt'
              ]
            }
          ]
          matchLabels: {
            key6673: 'wlngfalznwxnurzpgxomcxhbqefpr'
          }
        }
        storageClassName: 'sseyhrjptkhrqvpdpjmornkqvon'
        volumeMode: 'rxvpksjuuugqnqzeiprocknbn'
        volumeName: 'c'
      }
    }
    generateResourceLimits: {
      cpu: 'Enabled'
    }
    memoryProfile: 'Tiny'
  }
}
```

Broker_CreateOrUpdate_Complex
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    cardinality: {
      backendChain: {
        partitions: 2
        redundancyFactor: 2
        workers: 2
      }
      frontend: {
        replicas: 2
        workers: 2
      }
    }
    diskBackedMessageBuffer: {
      maxSize: '50M'
    }
    generateResourceLimits: {
      cpu: 'Enabled'
    }
    memoryProfile: 'Medium'
  }
}
```

Broker_CreateOrUpdate_Minimal
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    memoryProfile: 'Tiny'
  }
}
```

Broker_CreateOrUpdate_Simple
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    cardinality: {
      backendChain: {
        partitions: 2
        redundancyFactor: 2
        workers: 2
      }
      frontend: {
        replicas: 2
        workers: 2
      }
    }
    generateResourceLimits: {
      cpu: 'Enabled'
    }
    memoryProfile: 'Low'
  }
}
```

## microsoft.iotoperations/instances/brokers/authentications

BrokerAuthentication_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers/authentications@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    authenticationMethods: [
      {
        method: 'Custom'
        customSettings: {
          auth: {
            x509: {
              secretRef: 'secret-name'
            }
          }
          caCertConfigMap: 'pdecudefqyolvncbus'
          endpoint: 'https://www.example.com'
          headers: {
            key8518: 'bwityjy'
          }
        }
        serviceAccountTokenSettings: {
          audiences: [
            'jqyhyqatuydg'
          ]
        }
        x509Settings: {
          authorizationAttributes: {
            key3384: {
              attributes: {
                key186: 'ucpajramsz'
              }
              subject: 'jpgwctfeixitptfgfnqhua'
            }
          }
          trustedClientCaCert: 'vlctsqddl'
        }
      }
    ]
  }
}
```

BrokerAuthentication_CreateOrUpdate_Complex
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers/authentications@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    authenticationMethods: [
      {
        method: 'ServiceAccountToken'
        serviceAccountTokenSettings: {
          audiences: [
            'aio-internal'
          ]
        }
      }
      {
        method: 'X509'
        x509Settings: {
          authorizationAttributes: {
            intermediate: {
              attributes: {
                city: 'seattle'
                foo: 'bar'
              }
              subject: 'CN = Contoso Intermediate CA'
            }
            root: {
              attributes: {
                organization: 'contoso'
              }
              subject: 'CN = Contoso Root CA Cert, OU = Engineering, C = US'
            }
            'smart-fan': {
              attributes: {
                building: '17'
              }
              subject: 'CN = smart-fan'
            }
          }
          trustedClientCaCert: 'my-ca'
        }
      }
    ]
  }
}
```

## microsoft.iotoperations/instances/brokers/authorizations

BrokerAuthorization_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers/authorizations@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    authorizationPolicies: {
      cache: 'Enabled'
      rules: [
        {
          brokerResources: [
            {
              method: 'Connect'
              clientIds: [
                'nlc'
              ]
              topics: [
                'wvuca'
              ]
            }
          ]
          principals: {
            attributes: [
              {
                key5526: 'nydhzdhbldygqcn'
              }
            ]
            clientIds: [
              'smopeaeddsygz'
            ]
            usernames: [
              'iozngyqndrteikszkbasinzdjtm'
            ]
          }
          stateStoreResources: [
            {
              method: 'Read'
              keyType: 'Pattern'
              keys: [
                'tkounsqtwvzyaklxjqoerpu'
              ]
            }
          ]
        }
      ]
    }
  }
}
```

BrokerAuthorization_CreateOrUpdate_Complex
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers/authorizations@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    authorizationPolicies: {
      cache: 'Enabled'
      rules: [
        {
          brokerResources: [
            {
              method: 'Connect'
              clientIds: [
                '{principal.attributes.building}*'
              ]
            }
            {
              method: 'Publish'
              topics: [
                'sensors/{principal.attributes.building}/{principal.clientId}/telemetry/*'
              ]
            }
            {
              method: 'Subscribe'
              topics: [
                'commands/{principal.attributes.organization}'
              ]
            }
          ]
          principals: {
            attributes: [
              {
                building: '17'
                organization: 'contoso'
              }
            ]
            usernames: [
              'temperature-sensor'
              'humidity-sensor'
            ]
          }
          stateStoreResources: [
            {
              method: 'Read'
              keyType: 'Pattern'
              keys: [
                'myreadkey'
                'myotherkey?'
                'mynumerickeysuffix[0-9]'
                'clients:{principal.clientId}:*'
              ]
            }
            {
              method: 'ReadWrite'
              keyType: 'Binary'
              keys: [
                'MTE2IDEwMSAxMTUgMTE2'
              ]
            }
          ]
        }
      ]
    }
  }
}
```

BrokerAuthorization_CreateOrUpdate_Simple
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers/authorizations@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    authorizationPolicies: {
      cache: 'Enabled'
      rules: [
        {
          brokerResources: [
            {
              method: 'Connect'
            }
            {
              method: 'Subscribe'
              topics: [
                'topic'
                'topic/with/wildcard/#'
              ]
            }
          ]
          principals: {
            attributes: [
              {
                floor: 'floor1'
                site: 'site1'
              }
            ]
            clientIds: [
              'my-client-id'
            ]
          }
          stateStoreResources: [
            {
              method: 'ReadWrite'
              keyType: 'Pattern'
              keys: [
                '*'
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## microsoft.iotoperations/instances/brokers/listeners

BrokerListener_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers/listeners@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    ports: [
      {
        authenticationRef: 'tjvdroaqqy'
        authorizationRef: 'inxhvxnwswyrvt'
        nodePort: 7281
        port: 1268
        tls: {
          certManagerCertificateSpec: {
            duration: 'qmpeffoksron'
            issuerRef: {
              name: 'ocwoqpgucvjrsuudtjhb'
              group: 'jtmuladdkpasfpoyvewekmiy'
              kind: 'Issuer'
            }
            privateKey: {
              algorithm: 'Ec256'
              rotationPolicy: 'Always'
            }
            renewBefore: 'hutno'
            san: {
              dns: [
                'xhvmhrrhgfsapocjeebqtnzarlj'
              ]
              ip: [
                'zbgugfzcgsmegevzktsnibyuyp'
              ]
            }
            secretName: 'oagi'
          }
          manual: {
            secretRef: 'secret-name'
          }
          mode: 'Automatic'
        }
        protocol: 'Mqtt'
      }
    ]
    serviceName: 'tpfiszlapdpxktx'
    serviceType: 'ClusterIp'
  }
}
```

BrokerListener_CreateOrUpdate_Complex
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers/listeners@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    ports: [
      {
        authenticationRef: 'example-authentication'
        port: 8080
        protocol: 'WebSockets'
      }
      {
        authenticationRef: 'example-authentication'
        port: 8443
        tls: {
          certManagerCertificateSpec: {
            issuerRef: {
              name: 'example-issuer'
              group: 'jtmuladdkpasfpoyvewekmiy'
              kind: 'Issuer'
            }
          }
          mode: 'Automatic'
        }
        protocol: 'WebSockets'
      }
      {
        authenticationRef: 'example-authentication'
        port: 1883
      }
      {
        authenticationRef: 'example-authentication'
        port: 8883
        tls: {
          manual: {
            secretRef: 'example-secret'
          }
          mode: 'Manual'
        }
      }
    ]
    serviceType: 'LoadBalancer'
  }
}
```

BrokerListener_CreateOrUpdate_Simple
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers/listeners@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    ports: [
      {
        port: 1883
      }
    ]
  }
}
```

## microsoft.iotoperations/instances/dataflowendpoints

DataflowEndpoint_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowEndpoints@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    dataExplorerSettings: {
      authentication: {
        method: 'SystemAssignedManagedIdentity'
        systemAssignedManagedIdentitySettings: {
          audience: 'psxomrfbhoflycm'
        }
        userAssignedManagedIdentitySettings: {
          clientId: 'fb90f267-8872-431a-a76a-a1cec5d3c4d2'
          scope: 'zop'
          tenantId: 'ed060aa2-71ff-4d3f-99c4-a9138356fdec'
        }
      }
      batching: {
        latencySeconds: 9312
        maxMessages: 9028
      }
      database: 'yqcdpjsifm'
      host: '<cluster>.<region>.kusto.windows.net'
    }
    dataLakeStorageSettings: {
      authentication: {
        method: 'SystemAssignedManagedIdentity'
        accessTokenSettings: {
          secretRef: 'sevriyphcvnlrnfudqzejecwa'
        }
        systemAssignedManagedIdentitySettings: {
          audience: 'psxomrfbhoflycm'
        }
        userAssignedManagedIdentitySettings: {
          clientId: 'fb90f267-8872-431a-a76a-a1cec5d3c4d2'
          scope: 'zop'
          tenantId: 'ed060aa2-71ff-4d3f-99c4-a9138356fdec'
        }
      }
      batching: {
        latencySeconds: 9312
        maxMessages: 9028
      }
      host: '<account>.blob.core.windows.net'
    }
    endpointType: 'DataExplorer'
    fabricOneLakeSettings: {
      authentication: {
        method: 'SystemAssignedManagedIdentity'
        systemAssignedManagedIdentitySettings: {
          audience: 'psxomrfbhoflycm'
        }
        userAssignedManagedIdentitySettings: {
          clientId: 'fb90f267-8872-431a-a76a-a1cec5d3c4d2'
          scope: 'zop'
          tenantId: 'ed060aa2-71ff-4d3f-99c4-a9138356fdec'
        }
      }
      batching: {
        latencySeconds: 9312
        maxMessages: 9028
      }
      host: 'https://<host>.fabric.microsoft.com'
      names: {
        lakehouseName: 'wpeathi'
        workspaceName: 'nwgmitkbljztgms'
      }
      oneLakePathType: 'Files'
    }
    kafkaSettings: {
      authentication: {
        method: 'SystemAssignedManagedIdentity'
        saslSettings: {
          saslType: 'Plain'
          secretRef: 'visyxoztqnylvbyokhtmpdkwes'
        }
        systemAssignedManagedIdentitySettings: {
          audience: 'psxomrfbhoflycm'
        }
        userAssignedManagedIdentitySettings: {
          clientId: 'fb90f267-8872-431a-a76a-a1cec5d3c4d2'
          scope: 'zop'
          tenantId: 'ed060aa2-71ff-4d3f-99c4-a9138356fdec'
        }
        x509CertificateSettings: {
          secretRef: 'afwizrystfslkfqd'
        }
      }
      batching: {
        latencyMs: 3679
        maxBytes: 8887
        maxMessages: 2174
        mode: 'Enabled'
      }
      cloudEventAttributes: 'PassThrough'
      compression: 'None'
      consumerGroupId: 'ukkzcjiyenhxokat'
      copyMqttProperties: 'Enabled'
      host: 'pwcqfiqclcgneolpewnyavoulbip'
      kafkaAcks: 'Zero'
      partitionStrategy: 'Default'
      tls: {
        mode: 'Enabled'
        trustedCaCertificateConfigMapRef: 'tectjjvukvelsreihwadh'
      }
    }
    localStorageSettings: {
      persistentVolumeClaimRef: 'jjwqwvd'
    }
    mqttSettings: {
      authentication: {
        method: 'SystemAssignedManagedIdentity'
        serviceAccountTokenSettings: {
          audience: 'ejbklrbxgjaqleoycgpje'
        }
        systemAssignedManagedIdentitySettings: {
          audience: 'psxomrfbhoflycm'
        }
        userAssignedManagedIdentitySettings: {
          clientId: 'fb90f267-8872-431a-a76a-a1cec5d3c4d2'
          scope: 'zop'
          tenantId: 'ed060aa2-71ff-4d3f-99c4-a9138356fdec'
        }
        x509CertificateSettings: {
          secretRef: 'afwizrystfslkfqd'
        }
      }
      clientIdPrefix: 'kkljsdxdirfhwxtkavldekeqhv'
      cloudEventAttributes: 'PassThrough'
      host: 'nyhnxqnbspstctl'
      keepAliveSeconds: 0
      maxInflightMessages: 0
      qos: 1
      retain: 'Keep'
      sessionExpirySeconds: 0
      tls: {
        mode: 'Enabled'
        trustedCaCertificateConfigMapRef: 'tectjjvukvelsreihwadh'
      }
      protocol: 'Mqtt'
    }
  }
}
```

DataflowEndpoint_CreateOrUpdate_ADLSv2
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowEndpoints@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    dataLakeStorageSettings: {
      authentication: {
        method: 'AccessToken'
        accessTokenSettings: {
          secretRef: 'my-secret'
        }
      }
      host: 'example.blob.core.windows.net'
    }
    endpointType: 'DataLakeStorage'
  }
}
```

DataflowEndpoint_CreateOrUpdate_ADX
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowEndpoints@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    dataExplorerSettings: {
      authentication: {
        method: 'SystemAssignedManagedIdentity'
        systemAssignedManagedIdentitySettings: {
        }
      }
      batching: {
        latencySeconds: 9312
        maxMessages: 9028
      }
      database: 'example-database'
      host: 'example.westeurope.kusto.windows.net'
    }
    endpointType: 'DataExplorer'
  }
}
```

DataflowEndpoint_CreateOrUpdate_AIO
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowEndpoints@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    endpointType: 'Mqtt'
    mqttSettings: {
      authentication: {
        method: 'Kubernetes'
        serviceAccountTokenSettings: {
          audience: 'aio-internal'
        }
      }
      host: 'aio-broker:18883'
      tls: {
        mode: 'Enabled'
        trustedCaCertificateConfigMapRef: 'aio-ca-trust-bundle-test-only'
      }
    }
  }
}
```

DataflowEndpoint_CreateOrUpdate_EventGrid
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowEndpoints@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    endpointType: 'Mqtt'
    mqttSettings: {
      authentication: {
        method: 'SystemAssignedManagedIdentity'
        systemAssignedManagedIdentitySettings: {
        }
      }
      host: 'example.westeurope-1.ts.eventgrid.azure.net:8883'
      tls: {
        mode: 'Enabled'
      }
    }
  }
}
```

DataflowEndpoint_CreateOrUpdate_EventHub
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowEndpoints@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    endpointType: 'Kafka'
    kafkaSettings: {
      authentication: {
        method: 'SystemAssignedManagedIdentity'
        systemAssignedManagedIdentitySettings: {
        }
      }
      consumerGroupId: 'aiodataflows'
      host: 'example.servicebus.windows.net:9093'
      tls: {
        mode: 'Enabled'
      }
    }
  }
}
```

DataflowEndpoint_CreateOrUpdate_Fabric
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowEndpoints@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    endpointType: 'FabricOneLake'
    fabricOneLakeSettings: {
      authentication: {
        method: 'SystemAssignedManagedIdentity'
        systemAssignedManagedIdentitySettings: {
        }
      }
      host: 'onelake.dfs.fabric.microsoft.com'
      names: {
        lakehouseName: 'example-lakehouse'
        workspaceName: 'example-workspace'
      }
      oneLakePathType: 'Tables'
    }
  }
}
```

DataflowEndpoint_CreateOrUpdate_Kafka
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowEndpoints@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    endpointType: 'Kafka'
    kafkaSettings: {
      authentication: {
        method: 'Sasl'
        saslSettings: {
          saslType: 'Plain'
          secretRef: 'my-secret'
        }
      }
      batching: {
        latencyMs: 5
        maxBytes: 1000000
        maxMessages: 100000
        mode: 'Enabled'
      }
      cloudEventAttributes: 'Propagate'
      compression: 'Gzip'
      consumerGroupId: 'dataflows'
      copyMqttProperties: 'Enabled'
      host: 'example.kafka.local:9093'
      kafkaAcks: 'All'
      partitionStrategy: 'Default'
      tls: {
        mode: 'Enabled'
        trustedCaCertificateConfigMapRef: 'ca-certificates'
      }
    }
  }
}
```

DataflowEndpoint_CreateOrUpdate_LocalStorage
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowEndpoints@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    endpointType: 'LocalStorage'
    localStorageSettings: {
      persistentVolumeClaimRef: 'example-pvc'
    }
  }
}
```

DataflowEndpoint_CreateOrUpdate_MQTT
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowEndpoints@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    endpointType: 'Mqtt'
    mqttSettings: {
      authentication: {
        method: 'X509Certificate'
        x509CertificateSettings: {
          secretRef: 'example-secret'
        }
      }
      clientIdPrefix: 'factory-gateway'
      host: 'example.broker.local:1883'
      keepAliveSeconds: 60
      maxInflightMessages: 100
      qos: 1
      retain: 'Keep'
      sessionExpirySeconds: 3600
      tls: {
        mode: 'Disabled'
      }
      protocol: 'WebSockets'
    }
  }
}
```

## microsoft.iotoperations/instances/dataflowprofiles

DataflowProfile_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    diagnostics: {
      logs: {
        level: 'rnmwokumdmebpmfxxxzvvjfdywotav'
      }
      metrics: {
        prometheusPort: 7581
      }
    }
    instanceCount: 14
  }
}
```

DataflowProfile_CreateOrUpdate_Minimal
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    instanceCount: 1
  }
}
```

DataflowProfile_CreateOrUpdate_Multi
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    instanceCount: 3
  }
}
```

## microsoft.iotoperations/instances/dataflowprofiles/dataflowgraphs

DataflowGraph_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles/dataflowGraphs@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    mode: 'Enabled'
    nodeConnections: [
      {
        from: {
          name: 'temperature'
          schema: {
            schemaRef: 'aio-sr://namespace/temperature:1'
            serializationFormat: 'Avro'
          }
        }
        to: {
          name: 'my-graph'
        }
      }
      {
        from: {
          name: 'my-graph.alert-output'
          schema: {
            schemaRef: 'aio-sr://namespace/alert:1'
            serializationFormat: 'Avro'
          }
        }
        to: {
          name: 'fabric'
        }
      }
      {
        from: {
          name: 'my-graph.normal-output'
          schema: {
            schemaRef: 'aio-sr://namespace/alert:1'
            serializationFormat: 'Avro'
          }
        }
        to: {
          name: 'fabric'
        }
      }
    ]
    nodes: [
      {
        name: 'temperature'
        nodeType: 'Source'
        sourceSettings: {
          dataSources: [
            'telemetry/temperature'
          ]
          endpointRef: 'default'
        }
      }
      {
        name: 'my-graph'
        graphSettings: {
          artifact: 'my-wasm-module:1.4.3'
          configuration: [
            {
              key: 'key1'
              value: 'value1'
            }
            {
              key: 'key2'
              value: 'value2'
            }
          ]
          registryEndpointRef: 'my-registry-endpoint'
        }
        nodeType: 'Graph'
      }
      {
        name: 'alert'
        destinationSettings: {
          dataDestination: 'telemetry/temperature/alert'
          endpointRef: 'default'
        }
        nodeType: 'Destination'
      }
      {
        name: 'fabric'
        destinationSettings: {
          dataDestination: 'my-table'
          endpointRef: 'fabric'
          outputSchemaSettings: {
            schemaRef: 'aio-sr://namespace/alert-parquet:1'
            serializationFormat: 'Parquet'
          }
        }
        nodeType: 'Destination'
      }
    ]
    requestDiskPersistence: 'Enabled'
  }
}
```

## microsoft.iotoperations/instances/dataflowprofiles/dataflows

Dataflow_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles/dataflows@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    mode: 'Enabled'
    requestDiskPersistence: 'Disabled'
    operations: [
      {
        name: 'knnafvkwoeakm'
        builtInTransformationSettings: {
          datasets: [
            {
              description: 'Lorem ipsum odor amet, consectetuer adipiscing elit.'
              expression: 'aatbwomvflemsxialv'
              inputs: [
                'mosffpsslifkq'
              ]
              key: 'qsfqcgxaxnhfumrsdsokwyv'
              schemaRef: 'n'
            }
          ]
          filter: [
            {
              type: 'Filter'
              description: 'Lorem ipsum odor amet, consectetuer adipiscing elit.'
              expression: 'n'
              inputs: [
                'sxmjkbntgb'
              ]
            }
          ]
          map: [
            {
              type: 'NewProperties'
              description: 'Lorem ipsum odor amet, consectetuer adipiscing elit.'
              expression: 'txoiltogsarwkzalsphvlmt'
              inputs: [
                'xsbxuk'
              ]
              output: 'nvgtmkfl'
            }
          ]
          schemaRef: 'mcdc'
          serializationFormat: 'Delta'
        }
        destinationSettings: {
          dataDestination: 'cbrh'
          endpointRef: 'kybkchnzimerguekuvqlqiqdvvrt'
        }
        operationType: 'Source'
        sourceSettings: {
          assetRef: 'zayyykwmckaocywdkohmu'
          dataSources: [
            'chkkpymxhp'
          ]
          endpointRef: 'iixotodhvhkkfcfyrkoveslqig'
          schemaRef: 'pknmdzqll'
          serializationFormat: 'Json'
        }
      }
    ]
  }
}
```

Dataflow_CreateOrUpdate_ComplexContextualization
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles/dataflows@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    mode: 'Enabled'
    operations: [
      {
        name: 'source1'
        operationType: 'Source'
        sourceSettings: {
          dataSources: [
            'azure-iot-operations/data/thermostat'
          ]
          endpointRef: 'aio-builtin-broker-endpoint'
        }
      }
      {
        name: 'transformation1'
        builtInTransformationSettings: {
          datasets: [
            {
              expression: '$1 == $2'
              inputs: [
                '$source.country'
                '$context.country'
              ]
              key: 'quality'
            }
          ]
          map: [
            {
              inputs: [
                '*'
              ]
              output: '*'
            }
            {
              inputs: [
                '$context(quality).*'
              ]
              output: 'enriched.*'
            }
          ]
        }
        operationType: 'BuiltInTransformation'
      }
      {
        name: 'destination1'
        destinationSettings: {
          dataDestination: 'mytable'
          endpointRef: 'adx-endpoint'
        }
        operationType: 'Destination'
      }
    ]
  }
}
```

Dataflow_CreateOrUpdate_ComplexEventHub
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles/dataflows@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    mode: 'Enabled'
    operations: [
      {
        name: 'source1'
        operationType: 'Source'
        sourceSettings: {
          dataSources: [
            'azure-iot-operations/data/thermostat'
          ]
          endpointRef: 'aio-builtin-broker-endpoint'
        }
      }
      {
        builtInTransformationSettings: {
          filter: [
            {
              expression: '$1 > 9000 && $2 >= 8000'
              inputs: [
                'temperature.Value'
                '"Tag 10".Value'
              ]
            }
          ]
          map: [
            {
              inputs: [
                '*'
              ]
              output: '*'
            }
            {
              expression: '($1+$2)/2'
              inputs: [
                'temperature.Value'
                '"Tag 10".Value'
              ]
              output: 'AvgTemp.Value'
            }
            {
              expression: 'true'
              inputs: [
              ]
              output: 'dataflow-processed'
            }
            {
              expression: ''
              inputs: [
                'temperature.SourceTimestamp'
              ]
              output: ''
            }
            {
              expression: ''
              inputs: [
                '"Tag 10"'
              ]
              output: 'pressure'
            }
            {
              expression: 'cToF($1)'
              inputs: [
                'temperature.Value'
              ]
              output: 'temperatureF.Value'
            }
            {
              expression: 'scale ($1,0,10,0,100)'
              inputs: [
                '"Tag 10".Value'
              ]
              output: '"Scale Tag 10".Value'
            }
          ]
        }
        operationType: 'BuiltInTransformation'
      }
      {
        name: 'destination1'
        destinationSettings: {
          dataDestination: 'myuniqueeventhub'
          endpointRef: 'event-hub-endpoint'
        }
        operationType: 'Destination'
      }
    ]
  }
}
```

Dataflow_CreateOrUpdate_FilterToTopic
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles/dataflows@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    mode: 'Enabled'
    operations: [
      {
        name: 'source1'
        operationType: 'Source'
        sourceSettings: {
          dataSources: [
            'azure-iot-operations/data/thermostat'
          ]
          endpointRef: 'aio-builtin-broker-endpoint'
        }
      }
      {
        name: 'transformation1'
        builtInTransformationSettings: {
          filter: [
            {
              type: 'Filter'
              description: 'filter-datapoint'
              expression: '$1 > 9000 && $2 >= 8000'
              inputs: [
                'temperature.Value'
                '"Tag 10".Value'
              ]
            }
          ]
          map: [
            {
              type: 'PassThrough'
              inputs: [
                '*'
              ]
              output: '*'
            }
          ]
        }
        operationType: 'BuiltInTransformation'
      }
      {
        name: 'destination1'
        destinationSettings: {
          dataDestination: 'data/filtered/thermostat'
          endpointRef: 'aio-builtin-broker-endpoint'
        }
        operationType: 'Destination'
      }
    ]
  }
}
```

Dataflow_CreateOrUpdate_SimpleEventGrid
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles/dataflows@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    mode: 'Enabled'
    operations: [
      {
        name: 'source1'
        operationType: 'Source'
        sourceSettings: {
          dataSources: [
            'thermostats/+/telemetry/temperature/#'
          ]
          endpointRef: 'aio-builtin-broker-endpoint'
        }
      }
      {
        name: 'destination1'
        destinationSettings: {
          dataDestination: 'factory/telemetry'
          endpointRef: 'event-grid-endpoint'
        }
        operationType: 'Destination'
      }
    ]
  }
}
```

Dataflow_CreateOrUpdate_SimpleFabric
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles/dataflows@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    mode: 'Enabled'
    operations: [
      {
        name: 'source1'
        operationType: 'Source'
        sourceSettings: {
          dataSources: [
            'azure-iot-operations/data/thermostat'
          ]
          endpointRef: 'aio-builtin-broker-endpoint'
        }
      }
      {
        builtInTransformationSettings: {
          schemaRef: 'aio-sr://exampleNamespace/exmapleParquetSchema:1.0.0'
          serializationFormat: 'Parquet'
        }
        operationType: 'BuiltInTransformation'
      }
      {
        name: 'destination1'
        destinationSettings: {
          dataDestination: 'telemetryTable'
          endpointRef: 'fabric-endpoint'
        }
        operationType: 'Destination'
      }
    ]
  }
}
```

## microsoft.iotoperations/instances/registryendpoints

RegistryEndpoint_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/registryEndpoints@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/F8C729F9-DF9C-4743-848F-96EE433D8E53/resourceGroups/rgiotoperations/providers/Microsoft.ExtendedLocation/customLocations/resource-123'
    type: 'CustomLocation'
  }
  properties: {
    authentication: {
      method: 'Anonymous'
      anonymousSettings: {
      }
    }
    host: 'contoso.azurecr.io'
  }
}
```
