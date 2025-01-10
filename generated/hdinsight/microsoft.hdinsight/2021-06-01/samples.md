# Microsoft.HDInsight
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.hdinsight/clusters

Create cluster with availability zones
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      configurations: {
        'ambari-conf': {
          'database-name': '{ambari database name}'
          'database-server': '{sql server name}.database.windows.net'
          'database-user-name': '**********'
          'database-user-password': '**********'
        }
        gateway: {
          'restAuthCredential.isEnabled': true
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
        'hive-env': {
          hive_database: 'Existing MSSQL Server database with SQL authentication'
          hive_database_name: '{hive metastore name}'
          hive_database_type: 'mssql'
          hive_existing_mssql_server_database: '{hive metastore name}'
          hive_existing_mssql_server_host: '{sql server name}.database.windows.net'
          hive_hostname: '{sql server name}.database.windows.net'
        }
        'hive-site': {
          'javax.jdo.option.ConnectionDriverName': 'com.microsoft.sqlserver.jdbc.SQLServerDriver'
          'javax.jdo.option.ConnectionPassword': '**********!'
          'javax.jdo.option.ConnectionURL': 'jdbc:sqlserver://{sql server name}.database.windows.net;database={hive metastore name};encrypt=true;trustServerCertificate=true;create=false;loginTimeout=300;sendStringParametersAsUnicode=true;prepareSQL=0'
          'javax.jdo.option.ConnectionUserName': '**********'
        }
        'oozie-env': {
          oozie_database: 'Existing MSSQL Server database with SQL authentication'
          oozie_database_name: '{oozie metastore name}'
          oozie_database_type: 'mssql'
          oozie_existing_mssql_server_database: '{oozie metastore name}'
          oozie_existing_mssql_server_host: '{sql server name}.database.windows.net'
          oozie_hostname: '{sql server name}.database.windows.net'
        }
        'oozie-site': {
          'oozie.db.schema.name': 'oozie'
          'oozie.service.JPAService.jdbc.driver': 'com.microsoft.sqlserver.jdbc.SQLServerDriver'
          'oozie.service.JPAService.jdbc.password': '**********'
          'oozie.service.JPAService.jdbc.url': 'jdbc:sqlserver://{sql server name}.database.windows.net;database={oozie metastore name};encrypt=true;trustServerCertificate=true;create=false;loginTimeout=300;sendStringParametersAsUnicode=true;prepareSQL=0'
          'oozie.service.JPAService.jdbc.username': '**********'
        }
      }
      kind: 'hadoop'
    }
    clusterVersion: '3.6'
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'standard_d3'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              sshProfile: {
                publicKeys: [
                  {
                    certificateData: '**********'
                  }
                ]
              }
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
          virtualNetworkProfile: {
            id: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname'
            subnet: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname/subnets/vnetsubnet'
          }
        }
        {
          name: 'workernode'
          hardwareProfile: {
            vmSize: 'standard_d3'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              sshProfile: {
                publicKeys: [
                  {
                    certificateData: '**********'
                  }
                ]
              }
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
          virtualNetworkProfile: {
            id: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname'
            subnet: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname/subnets/vnetsubnet'
          }
        }
      ]
    }
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage'
          container: 'containername'
          isDefault: true
          key: 'storage account key'
        }
      ]
    }
  }
  zones: [
    '1'
  ]
}
```

Create cluster with compute isolation properties
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': true
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'hadoop'
    }
    clusterVersion: '3.6'
    computeIsolationProperties: {
      enableComputeIsolation: true
      hostSku: {
      }
    }
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'standard_d3'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              sshProfile: {
                publicKeys: [
                  {
                    certificateData: '**********'
                  }
                ]
              }
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
        }
        {
          name: 'workernode'
          hardwareProfile: {
            vmSize: 'standard_d3'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              sshProfile: {
                publicKeys: [
                  {
                    certificateData: '**********'
                  }
                ]
              }
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
        }
      ]
    }
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage'
          container: 'containername'
          isDefault: true
          key: 'storage account key'
        }
      ]
    }
  }
}
```

Create cluster with encryption at host
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': true
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'Hadoop'
    }
    clusterVersion: '3.6'
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'Standard_DS14_v2'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
        }
        {
          name: 'workernode'
          hardwareProfile: {
            vmSize: 'Standard_DS14_v2'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 3
        }
        {
          name: 'zookeepernode'
          hardwareProfile: {
            vmSize: 'Standard_DS14_v2'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 3
        }
      ]
    }
    diskEncryptionProperties: {
      encryptionAtHost: true
    }
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage.blob.core.windows.net'
          container: 'default8525'
          isDefault: true
          key: 'storagekey'
        }
      ]
    }
    tier: 'Standard'
  }
}
```

Create cluster with encryption in transit
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': true
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'Hadoop'
    }
    clusterVersion: '3.6'
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'Large'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
        }
        {
          name: 'workernode'
          hardwareProfile: {
            vmSize: 'Large'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 3
        }
        {
          name: 'zookeepernode'
          hardwareProfile: {
            vmSize: 'Small'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 3
        }
      ]
    }
    encryptionInTransitProperties: {
      isEncryptionInTransitEnabled: true
    }
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage.blob.core.windows.net'
          container: 'default8525'
          isDefault: true
          key: 'storagekey'
        }
      ]
    }
    tier: 'Standard'
  }
}
```

Create cluster with network properties
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': true
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'hadoop'
    }
    clusterVersion: '3.6'
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'standard_d3'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              sshProfile: {
                publicKeys: [
                  {
                    certificateData: '**********'
                  }
                ]
              }
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
          virtualNetworkProfile: {
            id: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname'
            subnet: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname/subnets/vnetsubnet'
          }
        }
        {
          name: 'workernode'
          hardwareProfile: {
            vmSize: 'standard_d3'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              sshProfile: {
                publicKeys: [
                  {
                    certificateData: '**********'
                  }
                ]
              }
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
          virtualNetworkProfile: {
            id: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname'
            subnet: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname/subnets/vnetsubnet'
          }
        }
      ]
    }
    networkProperties: {
      privateLink: 'Enabled'
      resourceProviderConnection: 'Outbound'
    }
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage'
          container: 'containername'
          isDefault: true
          key: 'storage account key'
        }
      ]
    }
  }
}
```

Create cluster with TLS 1.2
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': true
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'Hadoop'
    }
    clusterVersion: '3.6'
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'Large'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
        }
        {
          name: 'workernode'
          hardwareProfile: {
            vmSize: 'Large'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 3
        }
        {
          name: 'zookeepernode'
          hardwareProfile: {
            vmSize: 'Small'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 3
        }
      ]
    }
    minSupportedTlsVersion: '1.2'
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage.blob.core.windows.net'
          container: 'default8525'
          isDefault: true
          key: 'storagekey'
        }
      ]
    }
    tier: 'Standard'
  }
}
```

Create Hadoop cluster with Azure Data Lake Storage Gen 2
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': 'true'
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'Hadoop'
    }
    clusterVersion: '3.6'
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'Standard_D3_V2'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
        }
        {
          name: 'workernode'
          hardwareProfile: {
            vmSize: 'Standard_D3_V2'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 4
        }
        {
          name: 'zookeepernode'
          hardwareProfile: {
            vmSize: 'Small'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 3
        }
      ]
    }
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage.dfs.core.windows.net'
          fileSystem: 'default'
          isDefault: true
          key: 'storagekey'
        }
      ]
    }
    tier: 'Standard'
  }
  tags: {
    key1: 'val1'
  }
}
```

Create Hadoop on Linux cluster with SSH password
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': 'true'
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'Hadoop'
    }
    clusterVersion: '3.5'
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'Standard_D3_V2'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
        }
        {
          name: 'workernode'
          hardwareProfile: {
            vmSize: 'Standard_D3_V2'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 4
        }
        {
          name: 'zookeepernode'
          hardwareProfile: {
            vmSize: 'Small'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 3
        }
      ]
    }
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage.blob.core.windows.net'
          container: 'containername'
          isDefault: true
          key: 'storagekey'
        }
      ]
    }
    tier: 'Standard'
  }
  tags: {
    key1: 'val1'
  }
}
```

Create Hadoop on Linux cluster with SSH public key
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': true
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'Hadoop'
    }
    clusterVersion: '3.5'
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'Standard_D3_V2'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              sshProfile: {
                publicKeys: [
                  {
                    certificateData: '**********'
                  }
                ]
              }
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
        }
        {
          name: 'workernode'
          hardwareProfile: {
            vmSize: 'Standard_D3_V2'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 4
        }
        {
          name: 'zookeepernode'
          hardwareProfile: {
            vmSize: 'Small'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 3
        }
      ]
    }
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage.blob.core.windows.net'
          container: 'containername'
          isDefault: true
          key: 'storagekey'
        }
      ]
    }
    tier: 'Standard'
  }
  tags: {
    key1: 'val1'
  }
}
```

Create HDInsight cluster with Autoscale configuration
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      componentVersion: {
        Hadoop: '2.7'
      }
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': true
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'hadoop'
    }
    clusterVersion: '3.6'
    computeProfile: {
      roles: [
        {
          name: 'workernode'
          autoscale: {
            capacity: {
            }
            recurrence: {
              schedule: [
                {
                  days: [
                    'Monday'
                    'Tuesday'
                    'Wednesday'
                    'Thursday'
                    'Friday'
                  ]
                  timeAndCapacity: {
                    maxInstanceCount: 3
                    minInstanceCount: 3
                    time: '09:00'
                  }
                }
                {
                  days: [
                    'Monday'
                    'Tuesday'
                    'Wednesday'
                    'Thursday'
                    'Friday'
                  ]
                  timeAndCapacity: {
                    maxInstanceCount: 6
                    minInstanceCount: 6
                    time: '18:00'
                  }
                }
                {
                  days: [
                    'Saturday'
                    'Sunday'
                  ]
                  timeAndCapacity: {
                    maxInstanceCount: 2
                    minInstanceCount: 2
                    time: '09:00'
                  }
                }
                {
                  days: [
                    'Saturday'
                    'Sunday'
                  ]
                  timeAndCapacity: {
                    maxInstanceCount: 4
                    minInstanceCount: 4
                    time: '18:00'
                  }
                }
              ]
              timeZone: 'China Standard Time'
            }
          }
          dataDisksGroups: {
          }
          hardwareProfile: {
            vmSize: 'Standard_D4_V2'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          scriptActions: [
          ]
          targetInstanceCount: 4
          virtualNetworkProfile: {
          }
        }
      ]
    }
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage.blob.core.windows.net'
          container: 'hdinsight-autoscale-tes-2019-06-18t05-49-16-591z'
          isDefault: true
          key: 'storagekey'
        }
      ]
    }
    tier: 'Standard'
  }
}
```

Create Kafka cluster with Kafka Rest Proxy
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      componentVersion: {
        Kafka: '2.1'
      }
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': true
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'kafka'
    }
    clusterVersion: '4.0'
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'Large'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
        }
        {
          name: 'workernode'
          dataDisksGroups: [
            {
              disksPerNode: 8
            }
          ]
          hardwareProfile: {
            vmSize: 'Large'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 3
        }
        {
          name: 'zookeepernode'
          hardwareProfile: {
            vmSize: 'Small'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 3
        }
        {
          name: 'kafkamanagementnode'
          hardwareProfile: {
            vmSize: 'Standard_D4_v2'
          }
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'kafkauser'
            }
          }
          targetInstanceCount: 2
        }
      ]
    }
    kafkaRestProperties: {
      clientGroupInfo: {
        groupId: '00000000-0000-0000-0000-111111111111'
        groupName: 'Kafka security group name'
      }
    }
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage.blob.core.windows.net'
          container: 'containername'
          isDefault: true
          key: 'storagekey'
        }
      ]
    }
    tier: 'Standard'
  }
}
```

Create Secure Hadoop cluster
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': true
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'Hadoop'
    }
    clusterVersion: '3.5'
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'Standard_D3_V2'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              sshProfile: {
                publicKeys: [
                  {
                    certificateData: '**********'
                  }
                ]
              }
              username: 'sshuser'
            }
          }
          scriptActions: [
          ]
          targetInstanceCount: 2
          virtualNetworkProfile: {
            id: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname'
            subnet: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname/subnets/vnetsubnet'
          }
        }
        {
          name: 'workernode'
          hardwareProfile: {
            vmSize: 'Standard_D3_V2'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              sshProfile: {
                publicKeys: [
                  {
                    certificateData: '**********'
                  }
                ]
              }
              username: 'sshuser'
            }
          }
          scriptActions: [
          ]
          targetInstanceCount: 4
          virtualNetworkProfile: {
            id: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname'
            subnet: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname/subnets/vnetsubnet'
          }
        }
        {
          name: 'zookeepernode'
          hardwareProfile: {
            vmSize: 'Small'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              sshProfile: {
                publicKeys: [
                  {
                    certificateData: '**********'
                  }
                ]
              }
              username: 'sshuser'
            }
          }
          scriptActions: [
          ]
          targetInstanceCount: 3
          virtualNetworkProfile: {
            id: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname'
            subnet: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnetname/subnets/vnetsubnet'
          }
        }
      ]
    }
    osType: 'Linux'
    securityProfile: {
      clusterUsersGroupDNs: [
        'hdiusers'
      ]
      directoryType: 'ActiveDirectory'
      domain: 'DomainName'
      domainUserPassword: '**********'
      domainUsername: 'DomainUsername'
      ldapsUrls: [
        'ldaps://10.10.0.4:636'
      ]
      organizationalUnitDN: 'OU=Hadoop,DC=hdinsight,DC=test'
    }
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage.blob.core.windows.net'
          container: 'containername'
          isDefault: true
          key: 'storage account key'
        }
      ]
    }
    tier: 'Premium'
  }
  tags: {
    key1: 'val1'
  }
}
```

Create Spark on Linux Cluster with SSH password
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters@2021-06-01' = {
  name: 'example'
  properties: {
    clusterDefinition: {
      componentVersion: {
        Spark: '2.0'
      }
      configurations: {
        gateway: {
          'restAuthCredential.isEnabled': true
          'restAuthCredential.password': '**********'
          'restAuthCredential.username': 'admin'
        }
      }
      kind: 'Spark'
    }
    clusterVersion: '3.5'
    computeProfile: {
      roles: [
        {
          name: 'headnode'
          hardwareProfile: {
            vmSize: 'Standard_D12_V2'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 2
        }
        {
          name: 'workernode'
          hardwareProfile: {
            vmSize: 'Standard_D4_V2'
          }
          minInstanceCount: 1
          osProfile: {
            linuxOperatingSystemProfile: {
              password: '**********'
              username: 'sshuser'
            }
          }
          targetInstanceCount: 4
        }
      ]
    }
    osType: 'Linux'
    storageProfile: {
      storageaccounts: [
        {
          name: 'mystorage.blob.core.windows.net'
          container: 'containername'
          isDefault: true
          key: 'storageapikey*'
        }
      ]
    }
    tier: 'Standard'
  }
  tags: {
    key1: 'val1'
  }
}
```

## microsoft.hdinsight/clusters/applications

Create Application
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters/applications@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    applicationType: 'CustomApplication'
    computeProfile: {
      roles: [
        {
          name: 'edgenode'
          hardwareProfile: {
            vmSize: 'Standard_D12_v2'
          }
          targetInstanceCount: 1
        }
      ]
    }
    errors: [
    ]
    httpsEndpoints: [
      {
        accessModes: [
          'WebPage'
        ]
        destinationPort: 20000
        subDomainSuffix: 'dss'
      }
    ]
    installScriptActions: [
      {
        name: 'app-install-app1'
        parameters: '-version latest -port 20000'
        roles: [
          'edgenode'
        ]
        uri: 'https://.../install.sh'
      }
    ]
    uninstallScriptActions: [
    ]
  }
}
```

## microsoft.hdinsight/clusters/extensions

Create a monitoring extension on Hadoop Linux cluster
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters/extensions@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  primaryKey: '**********'
  workspaceId: 'a2090ead-8c9f-4fba-b70e-533e3e003163'
}
```

Enable cluster monitoring
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters/extensions@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  primaryKey: '**********'
  workspaceId: 'a2090ead-8c9f-4fba-b70e-533e3e003163'
}
```

Enable cluster monitoring
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters/extensions@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  primaryKey: '**********'
  workspaceId: 'a2090ead-8c9f-4fba-b70e-533e3e003163'
}
```

## microsoft.hdinsight/clusters/privateendpointconnections

Approve a private endpoint connection manually.
```bicep
resource exampleResource 'Microsoft.HDInsight/clusters/privateEndpointConnections@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'update it from pending to approved.'
      actionsRequired: 'None'
      status: 'Approved'
    }
  }
}
```
