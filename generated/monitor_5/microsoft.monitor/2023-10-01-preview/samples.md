# Microsoft.Monitor
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.monitor/accounts

Creates an Azure Monitor Workspace
```bicep
resource exampleResource 'Microsoft.Monitor/accounts@2023-10-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

## microsoft.monitor/pipelinegroups

Create a PipelineGroup instance using a syslog receiver
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2023-10-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'my-workspace-logs-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'body'
                  to: 'Body'
                }
                {
                  from: 'severity_text'
                  to: 'SeverityText'
                }
                {
                  from: 'time_unix_nano'
                  to: 'TimeGenerated'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Custom-MyTableRawData_CL'
          }
          concurrency: {
            batchQueueSize: 100
            workerCount: 4
          }
        }
      }
    ]
    processors: [
      {
        name: 'batch-processor1'
        type: 'Batch'
      }
    ]
    receivers: [
      {
        name: 'syslog-receiver1'
        type: 'Syslog'
        syslog: {
          endpoint: '0.0.0.0:514'
        }
      }
    ]
    service: {
      pipelines: [
        {
          name: 'MyPipelineForLogs1'
          type: 'logs'
          exporters: [
            'my-workspace-logs-exporter1'
          ]
          processors: [
            'batch-processor1'
          ]
          receivers: [
            'syslog-receiver1'
          ]
        }
      ]
    }
  }
  tags: {
    tag1: 'A'
    tag2: 'B'
  }
}
```

Create a PipelineGroup instance using a syslog receiver and cache.
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2023-10-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'my-workspace-logs-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'body'
                  to: 'Body'
                }
                {
                  from: 'severity_text'
                  to: 'SeverityText'
                }
                {
                  from: 'time_unix_nano'
                  to: 'TimeGenerated'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Custom-MyTableRawData_CL'
          }
          cache: {
            maxStorageUsage: 100
            retentionPeriod: 10
          }
          concurrency: {
            batchQueueSize: 100
            workerCount: 4
          }
        }
      }
    ]
    processors: [
      {
        name: 'batch-processor1'
        type: 'Batch'
      }
    ]
    receivers: [
      {
        name: 'syslog-receiver1'
        type: 'Syslog'
        syslog: {
          endpoint: '0.0.0.0:514'
        }
      }
    ]
    service: {
      pipelines: [
        {
          name: 'MyPipelineForLogs1'
          type: 'logs'
          exporters: [
            'my-workspace-logs-exporter1'
          ]
          processors: [
            'batch-processor1'
          ]
          receivers: [
            'syslog-receiver1'
          ]
        }
      ]
    }
  }
  tags: {
    tag1: 'A'
    tag2: 'B'
  }
}
```

Create a PipelineGroup instance using a syslog receiver and networking configurations.
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2023-10-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'my-workspace-logs-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'body'
                  to: 'Body'
                }
                {
                  from: 'severity_text'
                  to: 'SeverityText'
                }
                {
                  from: 'time_unix_nano'
                  to: 'TimeGenerated'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Custom-MyTableRawData_CL'
          }
          concurrency: {
            batchQueueSize: 100
            workerCount: 4
          }
        }
      }
    ]
    networkingConfigurations: [
      {
        externalNetworkingMode: 'LoadBalancerOnly'
        host: 'azuremonitorpipeline.contoso.com'
        routes: [
          {
            receiver: 'syslog-receiver1'
          }
        ]
      }
    ]
    processors: [
    ]
    receivers: [
      {
        name: 'syslog-receiver1'
        type: 'Syslog'
        syslog: {
          endpoint: '0.0.0.0:514'
        }
      }
    ]
    service: {
      pipelines: [
        {
          name: 'MyPipelineForLogs1'
          type: 'logs'
          exporters: [
            'my-workspace-logs-exporter1'
          ]
          processors: [
          ]
          receivers: [
            'syslog-receiver1'
          ]
        }
      ]
    }
  }
  tags: {
    tag1: 'A'
    tag2: 'B'
  }
}
```

Create a PipelineGroup instance using UDP receiver
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2023-10-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'my-workspace-logs-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'body'
                  to: 'Body'
                }
                {
                  from: 'severity_text'
                  to: 'SeverityText'
                }
                {
                  from: 'time_unix_nano'
                  to: 'TimeGenerated'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Custom-MyTableRawData_CL'
          }
          concurrency: {
            batchQueueSize: 100
            workerCount: 4
          }
        }
      }
    ]
    processors: [
    ]
    receivers: [
      {
        name: 'udp-receiver1'
        type: 'UDP'
        udp: {
          encoding: 'utf-8'
          endpoint: '0.0.0.0:518'
        }
      }
    ]
    service: {
      pipelines: [
        {
          name: 'MyPipelineForLogs1'
          type: 'logs'
          exporters: [
            'my-workspace-logs-exporter1'
          ]
          processors: [
          ]
          receivers: [
            'udp-receiver1'
          ]
        }
      ]
    }
  }
  tags: {
    tag1: 'A'
    tag2: 'B'
  }
}
```
