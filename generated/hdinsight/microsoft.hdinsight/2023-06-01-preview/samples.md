# Microsoft.HDInsight
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.hdinsight/clusterpools/clusters

HDInsightClusterPut
```bicep
resource exampleResource 'Microsoft.HDInsight/clusterpools/clusters@2023-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US 2'
  properties: {
    clusterProfile: {
      authorizationProfile: {
        userIds: [
          'testuser1'
          'testuser2'
        ]
      }
      autoscaleProfile: {
        autoscaleType: 'ScheduleBased'
        enabled: true
        gracefulDecommissionTimeout: 3600
        loadBasedConfig: {
          cooldownPeriod: 300
          maxNodes: 20
          minNodes: 10
          pollInterval: 60
          scalingRules: [
            {
              actionType: 'scaleup'
              comparisonRule: {
                operator: 'greaterThan'
                threshold: 90
              }
              evaluationCount: 3
              scalingMetric: 'cpu'
            }
            {
              actionType: 'scaledown'
              comparisonRule: {
                operator: 'lessThan'
                threshold: 20
              }
              evaluationCount: 3
              scalingMetric: 'cpu'
            }
          ]
        }
        scheduleBasedConfig: {
          defaultCount: 10
          schedules: [
            {
              count: 20
              days: [
                'Monday'
              ]
              endTime: '12:00'
              startTime: '00:00'
            }
            {
              count: 25
              days: [
                'Sunday'
              ]
              endTime: '12:00'
              startTime: '00:00'
            }
          ]
          timeZone: 'Cen. Australia Standard Time'
        }
      }
      clusterVersion: '1.0.6'
      identityProfile: {
        msiClientId: 'de91f1d8-767f-460a-ac11-3cf103f74b34'
        msiObjectId: '40491351-c240-4042-91e0-f644a1d2b441'
        msiResourceId: '/subscriptions/subid/resourceGroups/hiloResourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-msi'
      }
      ossVersion: '0.410.0'
      sshProfile: {
        count: 2
      }
      trinoProfile: {
      }
    }
    clusterType: 'Trino'
    computeProfile: {
      nodes: [
        {
          type: 'Head'
          count: 2
          vmSize: 'Standard_E8as_v5'
        }
        {
          type: 'Worker'
          count: 3
          vmSize: 'Standard_E8as_v5'
        }
      ]
    }
  }
}
```

HDInsightSparkClusterPut
```bicep
resource exampleResource 'Microsoft.HDInsight/clusterpools/clusters@2023-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US 2'
  properties: {
    clusterProfile: {
      authorizationProfile: {
        userIds: [
          'testuser1'
          'testuser2'
        ]
      }
      clusterVersion: '0.0.1'
      identityProfile: {
        msiClientId: 'de91f1d8-767f-460a-ac11-3cf103f74b34'
        msiObjectId: '40491351-c240-4042-91e0-f644a1d2b441'
        msiResourceId: '/subscriptions/subid/resourceGroups/hiloResourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-msi'
      }
      ossVersion: '2.2.3'
      serviceConfigsProfiles: [
        {
          configs: [
            {
              component: 'spark-config'
              files: [
                {
                  fileName: 'spark-defaults.conf'
                  values: {
                    spark.eventLog.enabled: 'true'
                  }
                }
              ]
            }
          ]
          serviceName: 'spark-service'
        }
        {
          configs: [
            {
              component: 'yarn-config'
              files: [
                {
                  fileName: 'core-site.xml'
                  values: {
                    fs.defaultFS: 'wasb://testcontainer@teststorage.dfs.core.windows.net/'
                    storage.container: 'testcontainer'
                    storage.key: 'test key'
                    storage.name: 'teststorage'
                    storage.protocol: 'wasb'
                  }
                }
                {
                  fileName: 'yarn-site.xml'
                  values: {
                    yarn.webapp.ui2.enable: 'false'
                  }
                }
              ]
            }
          ]
          serviceName: 'yarn-service'
        }
      ]
      sparkProfile: {
      }
      sshProfile: {
        count: 2
      }
    }
    clusterType: 'spark'
    computeProfile: {
      nodes: [
        {
          type: 'worker'
          count: 4
          vmSize: 'Standard_D3_v2'
        }
      ]
    }
  }
}
```
