# Microsoft.IoTOperations

## microsoft.iotoperations/instances

Instance_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances@2024-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: 'ycsyubcxttlusbhfdqaynmkaatnbyv'
    type: 'CustomLocation'
  }
  location: 'czsmfboasaojyvzyujdk'
  properties: {
    description: 'ferqjhhlqtx'
  }
  tags: {
    key1055: 'edezherbbf'
  }
}
```

## microsoft.iotoperations/instances/brokers

Broker_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'ycsyubcxttlusbhfdqaynmkaatnbyv'
    type: 'CustomLocation'
  }
  properties: {
    advanced: {
      encryptInternalTraffic: 'Enabled'
    }
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
    diagnostics: {
      logs: {
        level: 'info'
      }
      metrics: {
        prometheusPort: 9600
      }
      selfCheck: {
        intervalSeconds: 30
        mode: 'Enabled'
        timeoutSeconds: 15
      }
      traces: {
        cacheSizeMegabytes: 16
        mode: 'Enabled'
        selfTracing: {
          intervalSeconds: 30
          mode: 'Enabled'
        }
        spanChannelCapacity: 1000
      }
    }
    generateResourceLimits: {
      cpu: 'Disabled'
    }
    memoryProfile: 'Medium'
  }
}
```

## microsoft.iotoperations/instances/brokers/authentications

BrokerAuthentication_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers/authentications@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'ycsyubcxttlusbhfdqaynmkaatnbyv'
    type: 'CustomLocation'
  }
  properties: {
    authenticationMethods: [
      {
        method: 'ServiceAccountToken'
        serviceAccountToken: {
          audiences: [
            'aio-mq'
          ]
        }
      }
    ]
  }
}
```

## microsoft.iotoperations/instances/brokers/authorizations

BrokerAuthorization_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/brokers/authorizations@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'ycsyubcxttlusbhfdqaynmkaatnbyv'
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
              topics: [
                'afmj'
              ]
            }
          ]
          principals: {
            attributes: [
              {
                key1225: 'szvjlbpctnpjmyjq'
              }
            ]
            clientIds: [
              'zfamfwk'
            ]
            usernames: [
              'udobrmzkzubuqbvnbabovvr'
            ]
          }
          stateStoreResources: [
            {
              method: 'Read'
              keyType: 'Pattern'
              keys: [
                'tttdjfmf'
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
resource exampleResource 'Microsoft.IoTOperations/instances/brokers/listeners@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'ycsyubcxttlusbhfdqaynmkaatnbyv'
    type: 'CustomLocation'
  }
  properties: {
    brokerRef: 'aio-broker'
    ports: [
      {
        authenticationRef: 'authn'
        port: 8883
        tls: {
          automatic: {
            issuerRef: {
              name: 'mq-dmqtt-frontend'
              apiGroup: 'cert-manager.io'
              kind: 'Issuer'
            }
          }
          mode: 'Automatic'
        }
        protocol: 'Mqtt'
      }
    ]
    serviceName: 'aio-mq-dmqtt-frontend'
    serviceType: 'ClusterIp'
  }
}
```

## microsoft.iotoperations/instances/dataflowendpoints

DataFlowEndpoint_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowEndpoints@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'ycsyubcxttlusbhfdqaynmkaatnbyv'
    type: 'CustomLocation'
  }
  properties: {
    authentication: {
      method: 'SystemAssignedManagedIdentity'
      accessTokenSecretRef: 'tnwgineiasofrjwmpvrpxrvgxesxge'
      saslSettings: {
        saslType: 'Plain'
        tokenSecretRef: 'yveihxxdxfczlnsp'
      }
      serviceAccountTokenSettings: {
        audience: 'jwqprkifp'
      }
      systemAssignedManagedIdentitySettings: {
        audience: 'imuwrt'
      }
      userAssignedManagedIdentitySettings: {
        audience: 'lwqpynroxkgvk'
        clientId: 'qjwbqdunldmwiknaifmjtdzc'
        tenantId: 'xuhbmockgsjanbccm'
      }
      x509CredentialsSettings: {
        secretRef: 'ginzjdbcaebellwqjwiy'
      }
    }
    dataExplorerSettings: {
      batching: {
        latencySeconds: 9312
        maxMessages: 9028
      }
      database: 'vlzldgzfnjrenepi'
      host: '<cluster>.<region>.kusto.windows.net'
    }
    dataLakeStorageSettings: {
      batching: {
        latencySeconds: 9312
        maxMessages: 9028
      }
      host: '<account>.blob.core.windows.net'
    }
    endpointType: 'DataExplorer'
    fabricOneLakeSettings: {
      batching: {
        latencySeconds: 9312
        maxMessages: 9028
      }
      host: 'https://<host>.fabric.microsoft.com'
      names: {
        lakehouseName: 'wlkswgqkputd'
        workspaceName: 'jpixitkilnnznphuv'
      }
      oneLakePathType: 'Files'
    }
    kafkaSettings: {
      batching: {
        latencyMs: 5560
        maxBytes: 2289
        maxMessages: 7908
        mode: 'Enabled'
      }
      compression: 'None'
      consumerGroupId: 'bpihkcqsi'
      copyMqttProperties: 'Enabled'
      host: 'duqkazfangmbwtfnivqmhpxfqigi'
      kafkaAcks: 'Zero'
      partitionStrategy: 'Default'
      tls: {
        mode: 'Enabled'
        trustedCaCertificateConfigMapRef: 'p'
      }
    }
    localStorageSettings: {
      persistentVolumeClaimRef: 'fnswdfocruvmkzqbtfvzhzremdohtv'
    }
    mqttSettings: {
      clientIdPrefix: 'vhfupaialczfkrcmo'
      host: 'lenprkulhttcpqop'
      keepAliveSeconds: 0
      maxInflightMessages: 0
      qos: 1
      retain: 'Keep'
      sessionExpirySeconds: 0
      tls: {
        mode: 'Enabled'
        trustedCaCertificateConfigMapRef: 'p'
      }
      protocol: 'Mqtt'
    }
  }
}
```

## microsoft.iotoperations/instances/dataflowprofiles

DataFlowProfile_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'ycsyubcxttlusbhfdqaynmkaatnbyv'
    type: 'CustomLocation'
  }
  properties: {
    diagnostics: {
      logs: {
        level: 'tpjixxzdjmkvfnctjbkycswmyrnskf'
        opentelemetryExportConfig: {
          intervalSeconds: 23
          level: 'tmcrcih'
          otlpGrpcEndpoint: 'oyembrvhzogggkodr'
        }
      }
      metrics: {
        opentelemetryExportConfig: {
          intervalSeconds: 207
          otlpGrpcEndpoint: 'dngpjdmfecwmrheyzc'
        }
        prometheusPort: 87
      }
    }
    instanceCount: 18
  }
}
```

## microsoft.iotoperations/instances/dataflowprofiles/dataflows

DataFlow_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperations/instances/dataflowProfiles/dataflows@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'ycsyubcxttlusbhfdqaynmkaatnbyv'
    type: 'CustomLocation'
  }
  properties: {
    mode: 'Enabled'
    profileRef: 'juecrpocwpcajelwiwrplvacf'
    operations: [
      {
        name: 'hhoeuttlpjucxldumilbdbxsglpfhvamwrasjuroucjzutjamarau'
        builtInTransformationSettings: {
          datasets: [
            {
              description: 'a description of this dataset'
              expression: '$2 == $1'
              inputs: [
                'machineId'
                '$context(dataset-name-user-provided1).machine.details.id'
              ]
              key: 'dataset-name-user-provided1'
              schemaRef: 'schemaRef-pointing-to-AIO-schema-registry-instance'
            }
          ]
          filter: [
            {
              type: 'Filter'
              description: 'this is a user generated string to provide context'
              expression: '$1 == $3  && $2 > $4'
              inputs: [
                'machineId'
                'temperature'
                '$context(dataset-name-user-provided1).machine.details.id'
                '$context(dataset-name-user-provided2).machine.location.temperature'
              ]
            }
          ]
          map: [
            {
              type: 'NewProperties'
              description: 'this is a user generated string to provide context for the operation'
              expression: '400'
              inputs: [
              ]
              output: 'temperatureLimit'
            }
            {
              description: 'this is a user generated string to provide context for the operation'
              expression: '$1 * 1000'
              inputs: [
                'speed ? $last'
              ]
              output: 'speedLKV'
            }
            {
              type: 'Compute'
              description: 'this is a user generated string to provide context for the operation'
              expression: '$1 * 9/5 + 32'
              inputs: [
                'temperature'
              ]
              output: 'temperatureF'
            }
          ]
          schemaRef: 'kszdaahrhhctjvusgakiz'
          serializationFormat: 'Delta'
        }
        destinationSettings: {
          dataDestination: 'hxwohipwddccefqrdz'
          endpointRef: 'hvexewvu'
        }
        operationType: 'Source'
        sourceSettings: {
          assetRef: 'eswnjlnapfrdeklaivntm'
          dataSources: [
            'dvncbklqkvjygnjgatioaikaneue'
          ]
          endpointRef: 'cqsvkqeuyjzci'
          schemaRef: 'uchmgqpworewvayionuwydneotyo'
          serializationFormat: 'Json'
        }
      }
    ]
  }
}
```
