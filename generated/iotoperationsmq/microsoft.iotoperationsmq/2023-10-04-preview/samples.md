# Microsoft.IoTOperationsMQ

## microsoft.iotoperationsmq/mq

Mq_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq@2023-10-04-preview' = {
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'qayqiarqxjennoyvglovxrdiccscq'
  properties: {
    provisioningState: 'Succeeded'
  }
  tags: {
  }
}
```

## microsoft.iotoperationsmq/mq/broker

Broker_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq/broker@2023-10-04-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'ltzfwqzs'
  properties: {
    authImage: {
      pullPolicy: 'imfuzvqxgbdwliqnn'
      pullSecrets: 'klnqimxqsrdwhcqldjvdtsrs'
      repository: 'm'
      tag: 'jygfdiamhhm'
    }
    brokerImage: {
      pullPolicy: 'imfuzvqxgbdwliqnn'
      pullSecrets: 'klnqimxqsrdwhcqldjvdtsrs'
      repository: 'm'
      tag: 'jygfdiamhhm'
    }
    brokerNodeTolerations: {
      effect: 'eeswvciblqmmaeesjoflyvxqbz'
      key: 'wbrstdwxgm'
      operator: 'lbegegneekwnyodtzraarivtwhmzep'
      value: 'sfafsjdcezdmkwibxeluukxgl'
    }
    cardinality: {
      backendChain: {
        partitions: 34721
        redundancyFactor: 468
        temporaryDiskTransferEnabled: true
        temporaryDiskTransferHighWatermarkPercent: 79
        temporaryDiskTransferLowWatermarkPercent: 94
        temporaryMaxBackendMemUsagePercent: 54
        temporaryResourceLimits: {
          maxInflightMessages: 33208
          maxInflightPatches: 3410
          maxInflightPatchesPerClient: 58933
          maxMessageExpirySecs: 2036532516
          maxQueuedMessages: 8083241696687839000
          maxQueuedQos0Messages: 6545343433569253000
          maxSessionExpirySecs: 2526293894
        }
        workers: 15754
      }
      frontend: {
        replicas: 38165
        temporaryResourceLimits: {
          maxInflightMessages: 33208
          maxInflightPatches: 3410
          maxInflightPatchesPerClient: 58933
          maxMessageExpirySecs: 2036532516
          maxQueuedMessages: 8083241696687839000
          maxQueuedQos0Messages: 6545343433569253000
          maxSessionExpirySecs: 2526293894
        }
        workers: 38
      }
    }
    diagnostics: {
      diagnosticServiceEndpoint: 'cdvelitwasofaaqhdb'
      enableMetrics: true
      enableSelfCheck: true
      enableSelfTracing: true
      enableTracing: true
      logFormat: 'tcivnlakxcajynypbz'
      logLevel: 'zdjh'
      maxCellMapLifetime: 997099872515057700
      metricUpdateFrequencySeconds: 6156703238506293000
      probeImage: 'uzizubdxsgcpjwly'
      selfCheckFrequencySeconds: 579622483050303900
      selfCheckTimeoutSeconds: 7847246333600884000
      selfTraceFrequencySeconds: 6527612490765175000
      spanChannelCapacity: 5533451650716962000
    }
    diskBackedMessageBufferSettings: {
      ephemeralVolumeClaimSpec: {
        accessModes: [
          'cly'
        ]
        dataSource: {
          name: 'bgzdfwfpdrubbbnfwzyr'
          apiGroup: 'v'
          kind: 'pvzbnjebkoslzzucpaem'
        }
        dataSourceRef: {
          name: 'losjjcujomepwhztzptrobavolc'
          apiGroup: 'e'
          kind: 'hjbktqbtg'
        }
        resources: {
          limits: {
          }
          requests: {
          }
        }
        selector: {
          matchExpressions: [
            {
              key: 'd'
              operator: 'fcfvoarytcdbtccjervsmdis'
              values: [
                'y'
              ]
            }
          ]
          matchLabels: {
          }
        }
        storageClassName: 'etajfhrtgatxi'
        volumeMode: 'mipdeutsgidkzpxelbrqggjheplvmx'
        volumeName: 'dacuvlvuullautxjxwdctvzlmd'
      }
      maxSize: 'gnwxgqjypylz'
      persistentVolumeClaimSpec: {
        accessModes: [
          'cly'
        ]
        dataSource: {
          name: 'bgzdfwfpdrubbbnfwzyr'
          apiGroup: 'v'
          kind: 'pvzbnjebkoslzzucpaem'
        }
        dataSourceRef: {
          name: 'losjjcujomepwhztzptrobavolc'
          apiGroup: 'e'
          kind: 'hjbktqbtg'
        }
        resources: {
          limits: {
          }
          requests: {
          }
        }
        selector: {
          matchExpressions: [
            {
              key: 'd'
              operator: 'fcfvoarytcdbtccjervsmdis'
              values: [
                'y'
              ]
            }
          ]
          matchLabels: {
          }
        }
        storageClassName: 'etajfhrtgatxi'
        volumeMode: 'mipdeutsgidkzpxelbrqggjheplvmx'
        volumeName: 'dacuvlvuullautxjxwdctvzlmd'
      }
    }
    encryptInternalTraffic: true
    healthManagerImage: {
      pullPolicy: 'imfuzvqxgbdwliqnn'
      pullSecrets: 'klnqimxqsrdwhcqldjvdtsrs'
      repository: 'm'
      tag: 'jygfdiamhhm'
    }
    healthManagerNodeTolerations: {
      effect: 'eeswvciblqmmaeesjoflyvxqbz'
      key: 'wbrstdwxgm'
      operator: 'lbegegneekwnyodtzraarivtwhmzep'
      value: 'sfafsjdcezdmkwibxeluukxgl'
    }
    internalCerts: {
      duration: 'xjjmzq'
      privateKey: {
        algorithm: 'wwewfsddymjefuhxzqybwvay'
        rotationPolicy: 'jxmpyvfneckopjiakjtous'
        size: 63427
      }
      renewBefore: 'zkajhllevrxkfmfyzasmbllvd'
    }
    memoryProfile: 'tiny'
    mode: 'auto'
    provisioningState: 'Succeeded'
  }
  tags: {
  }
}
```

## microsoft.iotoperationsmq/mq/broker/authentication

BrokerAuthentication_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq/broker/authentication@2023-10-04-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'vtxegvaeqwyupplnm'
  properties: {
    authenticationMethods: [
      {
        custom: {
          auth: {
            x509: {
              keyVault: {
                vault: {
                  name: 'lxmwfan'
                  credentials: {
                    servicePrincipalLocalSecretName: 'wuimjwpbhoglbsxxa'
                  }
                  directoryId: 'eyjniptiykzcgbzok'
                }
                vaultCaChainSecret: {
                  name: 'bmectskddmpjxnsogwooexj'
                  version: 'unjfbf'
                }
                vaultCert: {
                  name: 'bmectskddmpjxnsogwooexj'
                  version: 'unjfbf'
                }
              }
              secretName: 'dordbwjewnqkhfd'
            }
          }
          caCertConfigMap: 'diufihyysdcosgy'
          endpoint: 'yy'
          headers: {
          }
        }
        sat: {
          audiences: [
            'fiyitxutbuuhwtltukyjacads'
          ]
        }
        svid: {
          agentSocketPath: 'gnyowebmeaj'
          identityMaxRetry: 4031184731
          identityWaitRetryMs: 2243705844935085600
        }
        usernamePassword: {
          keyVault: {
            vault: {
              name: 'lxmwfan'
              credentials: {
                servicePrincipalLocalSecretName: 'wuimjwpbhoglbsxxa'
              }
              directoryId: 'eyjniptiykzcgbzok'
            }
            vaultSecret: {
              name: 'bmectskddmpjxnsogwooexj'
              version: 'unjfbf'
            }
          }
          secretName: 'blk'
        }
        x509: {
          attributes: {
            keyVault: {
              vault: {
                name: 'lxmwfan'
                credentials: {
                  servicePrincipalLocalSecretName: 'wuimjwpbhoglbsxxa'
                }
                directoryId: 'eyjniptiykzcgbzok'
              }
              vaultSecret: {
                name: 'bmectskddmpjxnsogwooexj'
                version: 'unjfbf'
              }
            }
            secretName: 'ybcke'
          }
          trustedClientCaCertConfigMap: 'udidafmnpt'
        }
      }
    ]
    listenerRef: [
      'dhjpypfjzzmwm'
    ]
    provisioningState: 'Succeeded'
  }
  tags: {
  }
}
```

## microsoft.iotoperationsmq/mq/broker/authorization

BrokerAuthorization_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq/broker/authorization@2023-10-04-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'bvgohixie'
  properties: {
    authorizationPolicies: {
      enableCache: true
      rules: [
        {
          brokerResources: [
            {
              method: 'Connect'
              topics: [
                'v'
              ]
            }
          ]
          principals: {
            attributes: [
              {
              }
            ]
            clientids: [
              'smrfzvniq'
            ]
            usernames: [
              'jtwwmsrzriat'
            ]
          }
        }
      ]
    }
    listenerRef: [
      'mxgpbyb'
    ]
    provisioningState: 'Succeeded'
  }
  tags: {
  }
}
```

## microsoft.iotoperationsmq/mq/broker/listener

BrokerListener_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq/broker/listener@2023-10-04-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'dppbdcpstouifyko'
  properties: {
    authenticationEnabled: true
    authorizationEnabled: true
    brokerRef: 'ikuszpfycikq'
    nodePort: 34375
    port: 19791
    provisioningState: 'Succeeded'
    serviceName: 'euxa'
    serviceType: 'clusterIp'
    tls: {
      automatic: {
        duration: 'rv'
        issuerRef: {
          name: 'krmdlovyynymtvgffaveker'
          group: 'wxydv'
          kind: 'birgjwuxfjcvyqe'
        }
        privateKey: {
          algorithm: 'wwewfsddymjefuhxzqybwvay'
          rotationPolicy: 'jxmpyvfneckopjiakjtous'
          size: 63427
        }
        renewBefore: 'dexxoqqkgyofhkbk'
        san: {
          dns: [
            'nknzptgqgjvbkgzv'
          ]
          ip: [
            'jpdkemham'
          ]
        }
        secretName: 'hquvygbuueerkspqqktviya'
        secretNamespace: 'aevwndhcnfxitdjykp'
      }
      keyVault: {
        vault: {
          name: 'lxmwfan'
          credentials: {
            servicePrincipalLocalSecretName: 'wuimjwpbhoglbsxxa'
          }
          directoryId: 'eyjniptiykzcgbzok'
        }
        vaultCaChainSecret: {
          name: 'bmectskddmpjxnsogwooexj'
          version: 'unjfbf'
        }
        vaultCert: {
          name: 'bmectskddmpjxnsogwooexj'
          version: 'unjfbf'
        }
      }
      manual: {
        secretName: 'fezcl'
        secretNamespace: 'ozhayajoooingoczovfusqyilin'
      }
    }
  }
  tags: {
  }
}
```

## microsoft.iotoperationsmq/mq/datalakeconnector

DataLakeConnector_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq/dataLakeConnector@2023-10-04-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'ewguwvlahlu'
  properties: {
    databaseFormat: 'delta'
    image: {
      pullPolicy: 'imfuzvqxgbdwliqnn'
      pullSecrets: 'klnqimxqsrdwhcqldjvdtsrs'
      repository: 'm'
      tag: 'jygfdiamhhm'
    }
    instances: 53467
    localBrokerConnection: {
      authentication: {
        kubernetes: {
          secretPath: 'soukzfkouir'
          serviceAccountTokenName: 'suwetviuhmhorhvsidlznnufe'
        }
      }
      endpoint: 'xc'
      tls: {
        tlsEnabled: true
        trustedCaCertificateConfigMap: 'rinkomfeznsfedbmllxlbmmhc'
      }
    }
    logLevel: 'ikicyoalavfmqlodnupfjayxjti'
    nodeTolerations: {
      effect: 'eeswvciblqmmaeesjoflyvxqbz'
      key: 'wbrstdwxgm'
      operator: 'lbegegneekwnyodtzraarivtwhmzep'
      value: 'sfafsjdcezdmkwibxeluukxgl'
    }
    provisioningState: 'Succeeded'
    target: {
      datalakeStorage: {
        authentication: {
          accessTokenSecretName: 'cfaoxjbfbwdldqjbfczvovgooyqkl'
          systemAssignedManagedIdentity: {
            audience: 'kjderojhpehosgfcrxxbh'
            extensionName: 'cyckjqqzspleajbtkniwrfsqygjfhe'
          }
        }
        endpoint: 'bddy'
      }
      fabricOneLake: {
        authentication: {
          systemAssignedManagedIdentity: {
            audience: 'kjderojhpehosgfcrxxbh'
            extensionName: 'cyckjqqzspleajbtkniwrfsqygjfhe'
          }
        }
        endpoint: 'S.fabric.microsoft.com'
        fabricPath: 'files'
        guids: {
          lakehouseGuid: 'grsapopwjnuzbmnxbjnawaae'
          workspaceGuid: 'iwqfplayvdkdxumpdc'
        }
        names: {
          lakehouseName: 'iqgqtk'
          workspaceName: 'fxvlfhfcmlhcbgpopyqfikqsryct'
        }
      }
      localStorage: {
        volumeName: 'nmzsioldiwteljpplmftk'
      }
    }
    protocol: 'v3'
  }
  tags: {
  }
}
```

## microsoft.iotoperationsmq/mq/datalakeconnector/topicmap

DataLakeConnectorTopicMap_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq/dataLakeConnector/topicMap@2023-10-04-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'wjmgeh'
  properties: {
    dataLakeConnectorRef: 'zirczjfua'
    mapping: {
      allowedLatencySecs: 25407
      clientId: 'gyjduryceozwqyjdrxhrtwuw'
      maxMessagesPerBatch: 1581641880
      messagePayloadType: 'pwhpwzqlzlhdrozpqziipvjqrnipo'
      mqttSourceTopic: 'mtac'
      qos: 2
      table: {
        schema: [
          {
            name: 'hejqncdsueoerueffbaqix'
            format: 'boolean'
            mapping: 'lfnyjp'
            optional: true
          }
        ]
        tableName: 'qyvzigmefvxwyjqksofyrstn'
        tablePath: 'cyrkvxsjhbhwjegmhzyixchkdnxe'
      }
    }
    provisioningState: 'Succeeded'
  }
  tags: {
  }
}
```

## microsoft.iotoperationsmq/mq/diagnosticservice

DiagnosticService_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq/diagnosticService@2023-10-04-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'sbhavoiabxjpuq'
  properties: {
    dataExportFrequencySeconds: 26084
    image: {
      pullPolicy: 'imfuzvqxgbdwliqnn'
      pullSecrets: 'klnqimxqsrdwhcqldjvdtsrs'
      repository: 'm'
      tag: 'jygfdiamhhm'
    }
    logFormat: 'i'
    logLevel: 'aomqhmpa'
    maxDataStorageSize: 3757017229
    metricsPort: 37109
    openTelemetryTracesCollectorAddr: 'ggqmprmjlmmkfdpb'
    provisioningState: 'Succeeded'
    staleDataTimeoutSeconds: 51616
  }
  tags: {
  }
}
```

## microsoft.iotoperationsmq/mq/kafkaconnector

KafkaConnector_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq/kafkaConnector@2023-10-04-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'mpbupgmqssnb'
  properties: {
    clientIdPrefix: 'yybbbeowkw'
    image: {
      pullPolicy: 'imfuzvqxgbdwliqnn'
      pullSecrets: 'klnqimxqsrdwhcqldjvdtsrs'
      repository: 'm'
      tag: 'jygfdiamhhm'
    }
    instances: 55252
    kafkaConnection: {
      authentication: {
        authType: {
          sasl: {
            saslType: 'plain'
            token: {
              keyVault: {
                username: 'fb'
                vault: {
                  name: 'lxmwfan'
                  credentials: {
                    servicePrincipalLocalSecretName: 'wuimjwpbhoglbsxxa'
                  }
                  directoryId: 'eyjniptiykzcgbzok'
                }
                vaultSecret: {
                  name: 'bmectskddmpjxnsogwooexj'
                  version: 'unjfbf'
                }
              }
              secretName: 'hxmqokubwldgjdtjv'
            }
          }
          systemAssignedManagedIdentity: {
            audience: 'kjderojhpehosgfcrxxbh'
            extensionName: 'cyckjqqzspleajbtkniwrfsqygjfhe'
          }
          x509: {
            keyVault: {
              vault: {
                name: 'lxmwfan'
                credentials: {
                  servicePrincipalLocalSecretName: 'wuimjwpbhoglbsxxa'
                }
                directoryId: 'eyjniptiykzcgbzok'
              }
              vaultCaChainSecret: {
                name: 'bmectskddmpjxnsogwooexj'
                version: 'unjfbf'
              }
              vaultCert: {
                name: 'bmectskddmpjxnsogwooexj'
                version: 'unjfbf'
              }
            }
            secretName: 'jlrjvqyoygynlpsekfbvyrpu'
          }
        }
        enabled: true
      }
      endpoint: 'odxpssuhjkbonjmbhbebfjcah'
      tls: {
        tlsEnabled: true
        trustedCaCertificateConfigMap: 'kndjozglnxsgnzxq'
      }
    }
    localBrokerConnection: {
      authentication: {
        kubernetes: {
          secretPath: 'soukzfkouir'
          serviceAccountTokenName: 'suwetviuhmhorhvsidlznnufe'
        }
      }
      endpoint: 'xc'
      tls: {
        tlsEnabled: true
        trustedCaCertificateConfigMap: 'rinkomfeznsfedbmllxlbmmhc'
      }
    }
    logLevel: 'g'
    nodeTolerations: {
      effect: 'eeswvciblqmmaeesjoflyvxqbz'
      key: 'wbrstdwxgm'
      operator: 'lbegegneekwnyodtzraarivtwhmzep'
      value: 'sfafsjdcezdmkwibxeluukxgl'
    }
    provisioningState: 'Succeeded'
  }
  tags: {
  }
}
```

## microsoft.iotoperationsmq/mq/kafkaconnector/topicmap

KafkaConnectorTopicMap_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq/kafkaConnector/topicMap@2023-10-04-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'pavphpzfsgdudpyvufyebqh'
  properties: {
    batching: {
      enabled: true
      latencyMs: 9110
      maxBytes: 732052221
      maxMessages: 373078076
    }
    compression: 'none'
    copyMqttProperties: 'efpqgkycuawnzyubdyt'
    kafkaConnectorRef: 'icivjwerdspx'
    partitionKeyProperty: 'c'
    partitionStrategy: 'default'
    provisioningState: 'Succeeded'
    routes: [
      {
        kafkaToMqtt: {
          name: 'lrnvudysggscnqvmnlkrk'
          consumerGroupId: 'usork'
          kafkaTopic: 'ggwhwbsr'
          mqttTopic: 'jwvmmhfqqkkmqrpslbdfmpbdetfu'
          qos: 1
        }
        mqttToKafka: {
          name: 'qpshqcaxvxnyjzimvchngupzezdei'
          kafkaAcks: 'zero'
          kafkaTopic: 'tellycttwulueqcpqf'
          mqttTopic: 'raipkrcwvdnnflywhgjwnquarf'
          qos: 1
          sharedSubscription: {
            groupMinimumShareNumber: 216
            groupName: 'nwdyccsditzhchuksmi'
          }
        }
      }
    ]
  }
  tags: {
  }
}
```

## microsoft.iotoperationsmq/mq/mqttbridgeconnector

MqttBridgeConnector_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq/mqttBridgeConnector@2023-10-04-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'frztvxzhskx'
  properties: {
    bridgeInstances: 4528
    clientIdPrefix: 'yqipejvabahsexbnttiegjnh'
    image: {
      pullPolicy: 'imfuzvqxgbdwliqnn'
      pullSecrets: 'klnqimxqsrdwhcqldjvdtsrs'
      repository: 'm'
      tag: 'jygfdiamhhm'
    }
    localBrokerConnection: {
      authentication: {
        kubernetes: {
          secretPath: 'soukzfkouir'
          serviceAccountTokenName: 'suwetviuhmhorhvsidlznnufe'
        }
      }
      endpoint: 'xc'
      tls: {
        tlsEnabled: true
        trustedCaCertificateConfigMap: 'rinkomfeznsfedbmllxlbmmhc'
      }
    }
    logLevel: 'gpgijsotipdtvvkpnckuziqqv'
    nodeTolerations: {
      effect: 'eeswvciblqmmaeesjoflyvxqbz'
      key: 'wbrstdwxgm'
      operator: 'lbegegneekwnyodtzraarivtwhmzep'
      value: 'sfafsjdcezdmkwibxeluukxgl'
    }
    provisioningState: 'Succeeded'
    remoteBrokerConnection: {
      authentication: {
        systemAssignedManagedIdentity: {
          audience: 'kjderojhpehosgfcrxxbh'
          extensionName: 'cyckjqqzspleajbtkniwrfsqygjfhe'
        }
        x509: {
          keyVault: {
            vault: {
              name: 'lxmwfan'
              credentials: {
                servicePrincipalLocalSecretName: 'wuimjwpbhoglbsxxa'
              }
              directoryId: 'eyjniptiykzcgbzok'
            }
            vaultCaChainSecret: {
              name: 'bmectskddmpjxnsogwooexj'
              version: 'unjfbf'
            }
            vaultCert: {
              name: 'bmectskddmpjxnsogwooexj'
              version: 'unjfbf'
            }
          }
          secretName: 'x'
        }
      }
      endpoint: 'bshzrukafmxjgnrlhzlxbbzjdbqh'
      tls: {
        tlsEnabled: true
        trustedCaCertificateConfigMap: 'ivtebqmclgfjx'
      }
      protocol: 'mqtt'
    }
    protocol: 'v3'
  }
  tags: {
  }
}
```

## microsoft.iotoperationsmq/mq/mqttbridgeconnector/topicmap

MqttBridgeTopicMap_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.IoTOperationsMQ/mq/mqttBridgeConnector/topicMap@2023-10-04-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: 'an'
    type: 'CustomLocation'
  }
  location: 'icfdftifk'
  properties: {
    mqttBridgeConnectorRef: 'aemmhvfdzmdtxwgimpaqephgo'
    provisioningState: 'Succeeded'
    routes: [
      {
        name: 'u'
        direction: 'remote-to-local'
        qos: 2
        sharedSubscription: {
          groupMinimumShareNumber: 129
          groupName: 'exnfgkdccpuvzqhxrg'
        }
        source: 'xwnfgkkfezlgh'
        target: 'mgwem'
      }
    ]
  }
  tags: {
  }
}
```
