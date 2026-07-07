# Microsoft.Monitor
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.monitor/pipelinegroups

Create a PipelineGroup instance demonstrating different TLS modes including disabled TLS for development
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'dev-logs-exporter'
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
                  from: 'time_unix_nano'
                  to: 'TimeGenerated'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Custom-DevLogs_CL'
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
        name: 'dev-otlp-receiver'
        type: 'OTLP'
        otlp: {
          endpoint: '0.0.0.0:4317'
        }
        tlsConfiguration: 'dev-disabled-tls'
      }
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
          name: 'DevPlaintextPipeline'
          type: 'Logs'
          exporters: [
            'dev-logs-exporter'
          ]
          processors: [
            'batch-processor1'
          ]
          receivers: [
            'dev-otlp-receiver'
          ]
        }
        {
          name: 'DefaultTLSPipeline'
          type: 'Logs'
          exporters: [
            'dev-logs-exporter'
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
    tlsConfigurations: [
      {
        name: 'dev-disabled-tls'
        mode: 'disabled'
      }
    ]
  }
  tags: {
    environment: 'development'
    purpose: 'testing'
  }
}
```

Create a PipelineGroup instance using a syslog receiver
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
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
          type: 'Logs'
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
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
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
          type: 'Logs'
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

Create a PipelineGroup instance using a syslog receiver with Microsoft CommonSecurityLog transform and a custom TransformLanguage manipulation exporting to a custom table
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'custom-cef-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'attributes.TimeGenerated'
                  to: 'TimeGenerated'
                }
                {
                  from: 'attributes.DeviceVendor'
                  to: 'DeviceVendor'
                }
                {
                  from: 'attributes.FooColumn'
                  to: 'FooColumn'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Custom-CommonSecurityLogTable_CL'
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
        name: 'microsoft-cef-transform1'
        type: 'MicrosoftCommonSecurityLog'
      }
      {
        name: 'additional-transform1'
        type: 'TransformLanguage'
        transformLanguage: {
          transformStatement: 'source | where DeviceVendor == \'myVendor\' | extend FooColumn = \'bar\''
        }
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
          type: 'Logs'
          exporters: [
            'custom-cef-exporter1'
          ]
          processors: [
            'microsoft-cef-transform1'
            'additional-transform1'
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

Create a PipelineGroup instance using a syslog receiver with Microsoft CommonSecurityLog transform and a custom TransformLanguage manipulation exporting to the standard CommonSecurityLog table
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'custom-cef-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'attributes.TimeGenerated'
                  to: 'TimeGenerated'
                }
                {
                  from: 'attributes.DeviceVendor'
                  to: 'DeviceVendor'
                }
                {
                  from: 'attributes.DeviceProduct'
                  to: 'DeviceProduct'
                }
                {
                  from: 'attributes.DeviceVersion'
                  to: 'DeviceVersion'
                }
                {
                  from: 'attributes.DeviceEventClassID'
                  to: 'DeviceEventClassID'
                }
                {
                  from: 'attributes.Activity'
                  to: 'Activity'
                }
                {
                  from: 'attributes.LogSeverity'
                  to: 'LogSeverity'
                }
                {
                  from: 'attributes.OriginalLogSeverity'
                  to: 'OriginalLogSeverity'
                }
                {
                  from: 'attributes.AdditionalExtensions'
                  to: 'AdditionalExtensions'
                }
                {
                  from: 'attributes.DeviceAction'
                  to: 'DeviceAction'
                }
                {
                  from: 'attributes.ApplicationProtocol'
                  to: 'ApplicationProtocol'
                }
                {
                  from: 'attributes.EventCount'
                  to: 'EventCount'
                }
                {
                  from: 'attributes.DestinationDnsDomain'
                  to: 'DestinationDnsDomain'
                }
                {
                  from: 'attributes.DestinationServiceName'
                  to: 'DestinationServiceName'
                }
                {
                  from: 'attributes.DestinationTranslatedAddress'
                  to: 'DestinationTranslatedAddress'
                }
                {
                  from: 'attributes.DestinationTranslatedPort'
                  to: 'DestinationTranslatedPort'
                }
                {
                  from: 'attributes.CommunicationDirection'
                  to: 'CommunicationDirection'
                }
                {
                  from: 'attributes.DeviceDnsDomain'
                  to: 'DeviceDnsDomain'
                }
                {
                  from: 'attributes.DeviceExternalID'
                  to: 'DeviceExternalID'
                }
                {
                  from: 'attributes.DeviceFacility'
                  to: 'DeviceFacility'
                }
                {
                  from: 'attributes.DeviceInboundInterface'
                  to: 'DeviceInboundInterface'
                }
                {
                  from: 'attributes.DeviceNtDomain'
                  to: 'DeviceNtDomain'
                }
                {
                  from: 'attributes.DeviceOutboundInterface'
                  to: 'DeviceOutboundInterface'
                }
                {
                  from: 'attributes.DevicePayloadId'
                  to: 'DevicePayloadId'
                }
                {
                  from: 'attributes.ProcessName'
                  to: 'ProcessName'
                }
                {
                  from: 'attributes.DeviceTranslatedAddress'
                  to: 'DeviceTranslatedAddress'
                }
                {
                  from: 'attributes.DestinationHostName'
                  to: 'DestinationHostName'
                }
                {
                  from: 'attributes.DestinationMACAddress'
                  to: 'DestinationMACAddress'
                }
                {
                  from: 'attributes.DestinationNTDomain'
                  to: 'DestinationNTDomain'
                }
                {
                  from: 'attributes.DestinationProcessId'
                  to: 'DestinationProcessId'
                }
                {
                  from: 'attributes.DestinationUserPrivileges'
                  to: 'DestinationUserPrivileges'
                }
                {
                  from: 'attributes.DestinationProcessName'
                  to: 'DestinationProcessName'
                }
                {
                  from: 'attributes.DestinationPort'
                  to: 'DestinationPort'
                }
                {
                  from: 'attributes.DestinationIP'
                  to: 'DestinationIP'
                }
                {
                  from: 'attributes.DeviceTimeZone'
                  to: 'DeviceTimeZone'
                }
                {
                  from: 'attributes.DestinationUserID'
                  to: 'DestinationUserID'
                }
                {
                  from: 'attributes.DestinationUserName'
                  to: 'DestinationUserName'
                }
                {
                  from: 'attributes.DeviceAddress'
                  to: 'DeviceAddress'
                }
                {
                  from: 'attributes.DeviceName'
                  to: 'DeviceName'
                }
                {
                  from: 'attributes.DeviceMacAddress'
                  to: 'DeviceMacAddress'
                }
                {
                  from: 'attributes.ProcessID'
                  to: 'ProcessID'
                }
                {
                  from: 'attributes.EndTime'
                  to: 'EndTime'
                }
                {
                  from: 'attributes.ExternalID'
                  to: 'ExternalID'
                }
                {
                  from: 'attributes.ExtID'
                  to: 'ExtID'
                }
                {
                  from: 'attributes.FileCreateTime'
                  to: 'FileCreateTime'
                }
                {
                  from: 'attributes.FileHash'
                  to: 'FileHash'
                }
                {
                  from: 'attributes.FileID'
                  to: 'FileID'
                }
                {
                  from: 'attributes.FileModificationTime'
                  to: 'FileModificationTime'
                }
                {
                  from: 'attributes.FilePath'
                  to: 'FilePath'
                }
                {
                  from: 'attributes.FilePermission'
                  to: 'FilePermission'
                }
                {
                  from: 'attributes.FileType'
                  to: 'FileType'
                }
                {
                  from: 'attributes.FileName'
                  to: 'FileName'
                }
                {
                  from: 'attributes.FileSize'
                  to: 'FileSize'
                }
                {
                  from: 'attributes.ReceivedBytes'
                  to: 'ReceivedBytes'
                }
                {
                  from: 'attributes.Message'
                  to: 'Message'
                }
                {
                  from: 'attributes.OldFileCreateTime'
                  to: 'OldFileCreateTime'
                }
                {
                  from: 'attributes.OldFileHash'
                  to: 'OldFileHash'
                }
                {
                  from: 'attributes.OldFileID'
                  to: 'OldFileID'
                }
                {
                  from: 'attributes.OldFileModificationTime'
                  to: 'OldFileModificationTime'
                }
                {
                  from: 'attributes.OldFileName'
                  to: 'OldFileName'
                }
                {
                  from: 'attributes.OldFilePath'
                  to: 'OldFilePath'
                }
                {
                  from: 'attributes.OldFilePermission'
                  to: 'OldFilePermission'
                }
                {
                  from: 'attributes.OldFileSize'
                  to: 'OldFileSize'
                }
                {
                  from: 'attributes.OldFileType'
                  to: 'OldFileType'
                }
                {
                  from: 'attributes.SentBytes'
                  to: 'SentBytes'
                }
                {
                  from: 'attributes.EventOutcome'
                  to: 'EventOutcome'
                }
                {
                  from: 'attributes.Protocol'
                  to: 'Protocol'
                }
                {
                  from: 'attributes.Reason'
                  to: 'Reason'
                }
                {
                  from: 'attributes.RequestURL'
                  to: 'RequestURL'
                }
                {
                  from: 'attributes.RequestClientApplication'
                  to: 'RequestClientApplication'
                }
                {
                  from: 'attributes.RequestContext'
                  to: 'RequestContext'
                }
                {
                  from: 'attributes.RequestCookies'
                  to: 'RequestCookies'
                }
                {
                  from: 'attributes.RequestMethod'
                  to: 'RequestMethod'
                }
                {
                  from: 'attributes.ReceiptTime'
                  to: 'ReceiptTime'
                }
                {
                  from: 'attributes.SourceHostName'
                  to: 'SourceHostName'
                }
                {
                  from: 'attributes.SourceMACAddress'
                  to: 'SourceMACAddress'
                }
                {
                  from: 'attributes.SourceNTDomain'
                  to: 'SourceNTDomain'
                }
                {
                  from: 'attributes.SourceDnsDomain'
                  to: 'SourceDnsDomain'
                }
                {
                  from: 'attributes.SourceServiceName'
                  to: 'SourceServiceName'
                }
                {
                  from: 'attributes.SourceTranslatedAddress'
                  to: 'SourceTranslatedAddress'
                }
                {
                  from: 'attributes.SourceTranslatedPort'
                  to: 'SourceTranslatedPort'
                }
                {
                  from: 'attributes.SourceProcessId'
                  to: 'SourceProcessId'
                }
                {
                  from: 'attributes.SourceUserPrivileges'
                  to: 'SourceUserPrivileges'
                }
                {
                  from: 'attributes.SourceProcessName'
                  to: 'SourceProcessName'
                }
                {
                  from: 'attributes.SourcePort'
                  to: 'SourcePort'
                }
                {
                  from: 'attributes.SourceIP'
                  to: 'SourceIP'
                }
                {
                  from: 'attributes.StartTime'
                  to: 'StartTime'
                }
                {
                  from: 'attributes.SourceUserID'
                  to: 'SourceUserID'
                }
                {
                  from: 'attributes.SourceUserName'
                  to: 'SourceUserName'
                }
                {
                  from: 'attributes.EventType'
                  to: 'EventType'
                }
                {
                  from: 'attributes.DeviceEventCategory'
                  to: 'DeviceEventCategory'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address1'
                  to: 'DeviceCustomIPv6Address1'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address1Label'
                  to: 'DeviceCustomIPv6Address1Label'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address2'
                  to: 'DeviceCustomIPv6Address2'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address2Label'
                  to: 'DeviceCustomIPv6Address2Label'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address3'
                  to: 'DeviceCustomIPv6Address3'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address3Label'
                  to: 'DeviceCustomIPv6Address3Label'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address4'
                  to: 'DeviceCustomIPv6Address4'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address4Label'
                  to: 'DeviceCustomIPv6Address4Label'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint1'
                  to: 'DeviceCustomFloatingPoint1'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint1Label'
                  to: 'DeviceCustomFloatingPoint1Label'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint2'
                  to: 'DeviceCustomFloatingPoint2'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint2Label'
                  to: 'DeviceCustomFloatingPoint2Label'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint3'
                  to: 'DeviceCustomFloatingPoint3'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint3Label'
                  to: 'DeviceCustomFloatingPoint3Label'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint4'
                  to: 'DeviceCustomFloatingPoint4'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint4Label'
                  to: 'DeviceCustomFloatingPoint4Label'
                }
                {
                  from: 'attributes.DeviceCustomNumber1'
                  to: 'DeviceCustomNumber1'
                }
                {
                  from: 'attributes.FieldDeviceCustomNumber1'
                  to: 'FieldDeviceCustomNumber1'
                }
                {
                  from: 'attributes.DeviceCustomNumber1Label'
                  to: 'DeviceCustomNumber1Label'
                }
                {
                  from: 'attributes.DeviceCustomNumber2'
                  to: 'DeviceCustomNumber2'
                }
                {
                  from: 'attributes.FieldDeviceCustomNumber2'
                  to: 'FieldDeviceCustomNumber2'
                }
                {
                  from: 'attributes.DeviceCustomNumber2Label'
                  to: 'DeviceCustomNumber2Label'
                }
                {
                  from: 'attributes.DeviceCustomNumber3'
                  to: 'DeviceCustomNumber3'
                }
                {
                  from: 'attributes.FieldDeviceCustomNumber3'
                  to: 'FieldDeviceCustomNumber3'
                }
                {
                  from: 'attributes.DeviceCustomNumber3Label'
                  to: 'DeviceCustomNumber3Label'
                }
                {
                  from: 'attributes.DeviceCustomString1'
                  to: 'DeviceCustomString1'
                }
                {
                  from: 'attributes.DeviceCustomString1Label'
                  to: 'DeviceCustomString1Label'
                }
                {
                  from: 'attributes.DeviceCustomString2'
                  to: 'DeviceCustomString2'
                }
                {
                  from: 'attributes.DeviceCustomString2Label'
                  to: 'DeviceCustomString2Label'
                }
                {
                  from: 'attributes.DeviceCustomString3'
                  to: 'DeviceCustomString3'
                }
                {
                  from: 'attributes.DeviceCustomString3Label'
                  to: 'DeviceCustomString3Label'
                }
                {
                  from: 'attributes.DeviceCustomString4'
                  to: 'DeviceCustomString4'
                }
                {
                  from: 'attributes.DeviceCustomString4Label'
                  to: 'DeviceCustomString4Label'
                }
                {
                  from: 'attributes.DeviceCustomString5'
                  to: 'DeviceCustomString5'
                }
                {
                  from: 'attributes.DeviceCustomString5Label'
                  to: 'DeviceCustomString5Label'
                }
                {
                  from: 'attributes.DeviceCustomString6'
                  to: 'DeviceCustomString6'
                }
                {
                  from: 'attributes.DeviceCustomString6Label'
                  to: 'DeviceCustomString6Label'
                }
                {
                  from: 'attributes.DeviceCustomDate1'
                  to: 'DeviceCustomDate1'
                }
                {
                  from: 'attributes.DeviceCustomDate1Label'
                  to: 'DeviceCustomDate1Label'
                }
                {
                  from: 'attributes.DeviceCustomDate2'
                  to: 'DeviceCustomDate2'
                }
                {
                  from: 'attributes.DeviceCustomDate2Label'
                  to: 'DeviceCustomDate2Label'
                }
                {
                  from: 'attributes.FlexDate1'
                  to: 'FlexDate1'
                }
                {
                  from: 'attributes.FlexDate1Label'
                  to: 'FlexDate1Label'
                }
                {
                  from: 'attributes.FlexNumber1'
                  to: 'FlexNumber1'
                }
                {
                  from: 'attributes.FlexNumber1Label'
                  to: 'FlexNumber1Label'
                }
                {
                  from: 'attributes.FlexNumber2'
                  to: 'FlexNumber2'
                }
                {
                  from: 'attributes.FlexNumber2Label'
                  to: 'FlexNumber2Label'
                }
                {
                  from: 'attributes.FlexString1'
                  to: 'FlexString1'
                }
                {
                  from: 'attributes.FlexString1Label'
                  to: 'FlexString1Label'
                }
                {
                  from: 'attributes.FlexString2'
                  to: 'FlexString2'
                }
                {
                  from: 'attributes.FlexString2Label'
                  to: 'FlexString2Label'
                }
                {
                  from: 'attributes.RemoteIP'
                  to: 'RemoteIP'
                }
                {
                  from: 'attributes.RemotePort'
                  to: 'RemotePort'
                }
                {
                  from: 'attributes.Computer'
                  to: 'Computer'
                }
                {
                  from: 'attributes.SourceSystem'
                  to: 'SourceSystem'
                }
                {
                  from: 'attributes.SimplifiedDeviceAction'
                  to: 'SimplifiedDeviceAction'
                }
                {
                  from: 'attributes.CollectorHostName'
                  to: 'CollectorHostName'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Microsoft-CommonSecurityLog-FullyFormed'
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
        name: 'microsoft-cef-transform1'
        type: 'MicrosoftCommonSecurityLog'
      }
      {
        name: 'additional-transform1'
        type: 'TransformLanguage'
        transformLanguage: {
          transformStatement: 'source | where DeviceVendor == \'myVendor\''
        }
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
          type: 'Logs'
          exporters: [
            'custom-cef-exporter1'
          ]
          processors: [
            'microsoft-cef-transform1'
            'additional-transform1'
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

Create a PipelineGroup instance using a syslog receiver with Microsoft CommonSecurityLog transform exporting to the standard CommonSecurityLog table
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'standard-cef-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'attributes.TimeGenerated'
                  to: 'TimeGenerated'
                }
                {
                  from: 'attributes.DeviceVendor'
                  to: 'DeviceVendor'
                }
                {
                  from: 'attributes.DeviceProduct'
                  to: 'DeviceProduct'
                }
                {
                  from: 'attributes.DeviceVersion'
                  to: 'DeviceVersion'
                }
                {
                  from: 'attributes.DeviceEventClassID'
                  to: 'DeviceEventClassID'
                }
                {
                  from: 'attributes.Activity'
                  to: 'Activity'
                }
                {
                  from: 'attributes.LogSeverity'
                  to: 'LogSeverity'
                }
                {
                  from: 'attributes.OriginalLogSeverity'
                  to: 'OriginalLogSeverity'
                }
                {
                  from: 'attributes.AdditionalExtensions'
                  to: 'AdditionalExtensions'
                }
                {
                  from: 'attributes.DeviceAction'
                  to: 'DeviceAction'
                }
                {
                  from: 'attributes.ApplicationProtocol'
                  to: 'ApplicationProtocol'
                }
                {
                  from: 'attributes.EventCount'
                  to: 'EventCount'
                }
                {
                  from: 'attributes.DestinationDnsDomain'
                  to: 'DestinationDnsDomain'
                }
                {
                  from: 'attributes.DestinationServiceName'
                  to: 'DestinationServiceName'
                }
                {
                  from: 'attributes.DestinationTranslatedAddress'
                  to: 'DestinationTranslatedAddress'
                }
                {
                  from: 'attributes.DestinationTranslatedPort'
                  to: 'DestinationTranslatedPort'
                }
                {
                  from: 'attributes.CommunicationDirection'
                  to: 'CommunicationDirection'
                }
                {
                  from: 'attributes.DeviceDnsDomain'
                  to: 'DeviceDnsDomain'
                }
                {
                  from: 'attributes.DeviceExternalID'
                  to: 'DeviceExternalID'
                }
                {
                  from: 'attributes.DeviceFacility'
                  to: 'DeviceFacility'
                }
                {
                  from: 'attributes.DeviceInboundInterface'
                  to: 'DeviceInboundInterface'
                }
                {
                  from: 'attributes.DeviceNtDomain'
                  to: 'DeviceNtDomain'
                }
                {
                  from: 'attributes.DeviceOutboundInterface'
                  to: 'DeviceOutboundInterface'
                }
                {
                  from: 'attributes.DevicePayloadId'
                  to: 'DevicePayloadId'
                }
                {
                  from: 'attributes.ProcessName'
                  to: 'ProcessName'
                }
                {
                  from: 'attributes.DeviceTranslatedAddress'
                  to: 'DeviceTranslatedAddress'
                }
                {
                  from: 'attributes.DestinationHostName'
                  to: 'DestinationHostName'
                }
                {
                  from: 'attributes.DestinationMACAddress'
                  to: 'DestinationMACAddress'
                }
                {
                  from: 'attributes.DestinationNTDomain'
                  to: 'DestinationNTDomain'
                }
                {
                  from: 'attributes.DestinationProcessId'
                  to: 'DestinationProcessId'
                }
                {
                  from: 'attributes.DestinationUserPrivileges'
                  to: 'DestinationUserPrivileges'
                }
                {
                  from: 'attributes.DestinationProcessName'
                  to: 'DestinationProcessName'
                }
                {
                  from: 'attributes.DestinationPort'
                  to: 'DestinationPort'
                }
                {
                  from: 'attributes.DestinationIP'
                  to: 'DestinationIP'
                }
                {
                  from: 'attributes.DeviceTimeZone'
                  to: 'DeviceTimeZone'
                }
                {
                  from: 'attributes.DestinationUserID'
                  to: 'DestinationUserID'
                }
                {
                  from: 'attributes.DestinationUserName'
                  to: 'DestinationUserName'
                }
                {
                  from: 'attributes.DeviceAddress'
                  to: 'DeviceAddress'
                }
                {
                  from: 'attributes.DeviceName'
                  to: 'DeviceName'
                }
                {
                  from: 'attributes.DeviceMacAddress'
                  to: 'DeviceMacAddress'
                }
                {
                  from: 'attributes.ProcessID'
                  to: 'ProcessID'
                }
                {
                  from: 'attributes.EndTime'
                  to: 'EndTime'
                }
                {
                  from: 'attributes.ExternalID'
                  to: 'ExternalID'
                }
                {
                  from: 'attributes.ExtID'
                  to: 'ExtID'
                }
                {
                  from: 'attributes.FileCreateTime'
                  to: 'FileCreateTime'
                }
                {
                  from: 'attributes.FileHash'
                  to: 'FileHash'
                }
                {
                  from: 'attributes.FileID'
                  to: 'FileID'
                }
                {
                  from: 'attributes.FileModificationTime'
                  to: 'FileModificationTime'
                }
                {
                  from: 'attributes.FilePath'
                  to: 'FilePath'
                }
                {
                  from: 'attributes.FilePermission'
                  to: 'FilePermission'
                }
                {
                  from: 'attributes.FileType'
                  to: 'FileType'
                }
                {
                  from: 'attributes.FileName'
                  to: 'FileName'
                }
                {
                  from: 'attributes.FileSize'
                  to: 'FileSize'
                }
                {
                  from: 'attributes.ReceivedBytes'
                  to: 'ReceivedBytes'
                }
                {
                  from: 'attributes.Message'
                  to: 'Message'
                }
                {
                  from: 'attributes.OldFileCreateTime'
                  to: 'OldFileCreateTime'
                }
                {
                  from: 'attributes.OldFileHash'
                  to: 'OldFileHash'
                }
                {
                  from: 'attributes.OldFileID'
                  to: 'OldFileID'
                }
                {
                  from: 'attributes.OldFileModificationTime'
                  to: 'OldFileModificationTime'
                }
                {
                  from: 'attributes.OldFileName'
                  to: 'OldFileName'
                }
                {
                  from: 'attributes.OldFilePath'
                  to: 'OldFilePath'
                }
                {
                  from: 'attributes.OldFilePermission'
                  to: 'OldFilePermission'
                }
                {
                  from: 'attributes.OldFileSize'
                  to: 'OldFileSize'
                }
                {
                  from: 'attributes.OldFileType'
                  to: 'OldFileType'
                }
                {
                  from: 'attributes.SentBytes'
                  to: 'SentBytes'
                }
                {
                  from: 'attributes.EventOutcome'
                  to: 'EventOutcome'
                }
                {
                  from: 'attributes.Protocol'
                  to: 'Protocol'
                }
                {
                  from: 'attributes.Reason'
                  to: 'Reason'
                }
                {
                  from: 'attributes.RequestURL'
                  to: 'RequestURL'
                }
                {
                  from: 'attributes.RequestClientApplication'
                  to: 'RequestClientApplication'
                }
                {
                  from: 'attributes.RequestContext'
                  to: 'RequestContext'
                }
                {
                  from: 'attributes.RequestCookies'
                  to: 'RequestCookies'
                }
                {
                  from: 'attributes.RequestMethod'
                  to: 'RequestMethod'
                }
                {
                  from: 'attributes.ReceiptTime'
                  to: 'ReceiptTime'
                }
                {
                  from: 'attributes.SourceHostName'
                  to: 'SourceHostName'
                }
                {
                  from: 'attributes.SourceMACAddress'
                  to: 'SourceMACAddress'
                }
                {
                  from: 'attributes.SourceNTDomain'
                  to: 'SourceNTDomain'
                }
                {
                  from: 'attributes.SourceDnsDomain'
                  to: 'SourceDnsDomain'
                }
                {
                  from: 'attributes.SourceServiceName'
                  to: 'SourceServiceName'
                }
                {
                  from: 'attributes.SourceTranslatedAddress'
                  to: 'SourceTranslatedAddress'
                }
                {
                  from: 'attributes.SourceTranslatedPort'
                  to: 'SourceTranslatedPort'
                }
                {
                  from: 'attributes.SourceProcessId'
                  to: 'SourceProcessId'
                }
                {
                  from: 'attributes.SourceUserPrivileges'
                  to: 'SourceUserPrivileges'
                }
                {
                  from: 'attributes.SourceProcessName'
                  to: 'SourceProcessName'
                }
                {
                  from: 'attributes.SourcePort'
                  to: 'SourcePort'
                }
                {
                  from: 'attributes.SourceIP'
                  to: 'SourceIP'
                }
                {
                  from: 'attributes.StartTime'
                  to: 'StartTime'
                }
                {
                  from: 'attributes.SourceUserID'
                  to: 'SourceUserID'
                }
                {
                  from: 'attributes.SourceUserName'
                  to: 'SourceUserName'
                }
                {
                  from: 'attributes.EventType'
                  to: 'EventType'
                }
                {
                  from: 'attributes.DeviceEventCategory'
                  to: 'DeviceEventCategory'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address1'
                  to: 'DeviceCustomIPv6Address1'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address1Label'
                  to: 'DeviceCustomIPv6Address1Label'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address2'
                  to: 'DeviceCustomIPv6Address2'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address2Label'
                  to: 'DeviceCustomIPv6Address2Label'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address3'
                  to: 'DeviceCustomIPv6Address3'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address3Label'
                  to: 'DeviceCustomIPv6Address3Label'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address4'
                  to: 'DeviceCustomIPv6Address4'
                }
                {
                  from: 'attributes.DeviceCustomIPv6Address4Label'
                  to: 'DeviceCustomIPv6Address4Label'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint1'
                  to: 'DeviceCustomFloatingPoint1'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint1Label'
                  to: 'DeviceCustomFloatingPoint1Label'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint2'
                  to: 'DeviceCustomFloatingPoint2'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint2Label'
                  to: 'DeviceCustomFloatingPoint2Label'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint3'
                  to: 'DeviceCustomFloatingPoint3'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint3Label'
                  to: 'DeviceCustomFloatingPoint3Label'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint4'
                  to: 'DeviceCustomFloatingPoint4'
                }
                {
                  from: 'attributes.DeviceCustomFloatingPoint4Label'
                  to: 'DeviceCustomFloatingPoint4Label'
                }
                {
                  from: 'attributes.DeviceCustomNumber1'
                  to: 'DeviceCustomNumber1'
                }
                {
                  from: 'attributes.FieldDeviceCustomNumber1'
                  to: 'FieldDeviceCustomNumber1'
                }
                {
                  from: 'attributes.DeviceCustomNumber1Label'
                  to: 'DeviceCustomNumber1Label'
                }
                {
                  from: 'attributes.DeviceCustomNumber2'
                  to: 'DeviceCustomNumber2'
                }
                {
                  from: 'attributes.FieldDeviceCustomNumber2'
                  to: 'FieldDeviceCustomNumber2'
                }
                {
                  from: 'attributes.DeviceCustomNumber2Label'
                  to: 'DeviceCustomNumber2Label'
                }
                {
                  from: 'attributes.DeviceCustomNumber3'
                  to: 'DeviceCustomNumber3'
                }
                {
                  from: 'attributes.FieldDeviceCustomNumber3'
                  to: 'FieldDeviceCustomNumber3'
                }
                {
                  from: 'attributes.DeviceCustomNumber3Label'
                  to: 'DeviceCustomNumber3Label'
                }
                {
                  from: 'attributes.DeviceCustomString1'
                  to: 'DeviceCustomString1'
                }
                {
                  from: 'attributes.DeviceCustomString1Label'
                  to: 'DeviceCustomString1Label'
                }
                {
                  from: 'attributes.DeviceCustomString2'
                  to: 'DeviceCustomString2'
                }
                {
                  from: 'attributes.DeviceCustomString2Label'
                  to: 'DeviceCustomString2Label'
                }
                {
                  from: 'attributes.DeviceCustomString3'
                  to: 'DeviceCustomString3'
                }
                {
                  from: 'attributes.DeviceCustomString3Label'
                  to: 'DeviceCustomString3Label'
                }
                {
                  from: 'attributes.DeviceCustomString4'
                  to: 'DeviceCustomString4'
                }
                {
                  from: 'attributes.DeviceCustomString4Label'
                  to: 'DeviceCustomString4Label'
                }
                {
                  from: 'attributes.DeviceCustomString5'
                  to: 'DeviceCustomString5'
                }
                {
                  from: 'attributes.DeviceCustomString5Label'
                  to: 'DeviceCustomString5Label'
                }
                {
                  from: 'attributes.DeviceCustomString6'
                  to: 'DeviceCustomString6'
                }
                {
                  from: 'attributes.DeviceCustomString6Label'
                  to: 'DeviceCustomString6Label'
                }
                {
                  from: 'attributes.DeviceCustomDate1'
                  to: 'DeviceCustomDate1'
                }
                {
                  from: 'attributes.DeviceCustomDate1Label'
                  to: 'DeviceCustomDate1Label'
                }
                {
                  from: 'attributes.DeviceCustomDate2'
                  to: 'DeviceCustomDate2'
                }
                {
                  from: 'attributes.DeviceCustomDate2Label'
                  to: 'DeviceCustomDate2Label'
                }
                {
                  from: 'attributes.FlexDate1'
                  to: 'FlexDate1'
                }
                {
                  from: 'attributes.FlexDate1Label'
                  to: 'FlexDate1Label'
                }
                {
                  from: 'attributes.FlexNumber1'
                  to: 'FlexNumber1'
                }
                {
                  from: 'attributes.FlexNumber1Label'
                  to: 'FlexNumber1Label'
                }
                {
                  from: 'attributes.FlexNumber2'
                  to: 'FlexNumber2'
                }
                {
                  from: 'attributes.FlexNumber2Label'
                  to: 'FlexNumber2Label'
                }
                {
                  from: 'attributes.FlexString1'
                  to: 'FlexString1'
                }
                {
                  from: 'attributes.FlexString1Label'
                  to: 'FlexString1Label'
                }
                {
                  from: 'attributes.FlexString2'
                  to: 'FlexString2'
                }
                {
                  from: 'attributes.FlexString2Label'
                  to: 'FlexString2Label'
                }
                {
                  from: 'attributes.RemoteIP'
                  to: 'RemoteIP'
                }
                {
                  from: 'attributes.RemotePort'
                  to: 'RemotePort'
                }
                {
                  from: 'attributes.Computer'
                  to: 'Computer'
                }
                {
                  from: 'attributes.SourceSystem'
                  to: 'SourceSystem'
                }
                {
                  from: 'attributes.SimplifiedDeviceAction'
                  to: 'SimplifiedDeviceAction'
                }
                {
                  from: 'attributes.CollectorHostName'
                  to: 'CollectorHostName'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Microsoft-CommonSecurityLog-FullyFormed'
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
        name: 'microsoft-cef-transform1'
        type: 'MicrosoftCommonSecurityLog'
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
          type: 'Logs'
          exporters: [
            'standard-cef-exporter1'
          ]
          processors: [
            'microsoft-cef-transform1'
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

Create a PipelineGroup instance using a syslog receiver with Microsoft Syslog transform and a custom TransformLanguage manipulation exporting to a custom table
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'custom-syslog-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'attributes.TimeGenerated'
                  to: 'TimeGenerated'
                }
                {
                  from: 'attributes.Facility'
                  to: 'Facility'
                }
                {
                  from: 'attributes.FooColumn'
                  to: 'FooColumn'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Custom-SyslogTable_CL'
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
        name: 'microsoft-syslog-transform1'
        type: 'Microsoft-Syslog'
      }
      {
        name: 'additional-transform1'
        type: 'TransformLanguage'
        transformLanguage: {
          transformStatement: 'source | where Facility == \'daemon\' | extend FooColumn = \'bar\''
        }
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
          type: 'Logs'
          exporters: [
            'custom-syslog-exporter1'
          ]
          processors: [
            'microsoft-syslog-transform1'
            'additional-transform1'
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

Create a PipelineGroup instance using a syslog receiver with Microsoft Syslog transform and a custom TransformLanguage manipulation exporting to the standard Syslog table
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'custom-syslog-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'attributes.TimeGenerated'
                  to: 'TimeGenerated'
                }
                {
                  from: 'attributes.CollectorHostName'
                  to: 'CollectorHostName'
                }
                {
                  from: 'attributes.Computer'
                  to: 'Computer'
                }
                {
                  from: 'attributes.EventTime'
                  to: 'EventTime'
                }
                {
                  from: 'attributes.Facility'
                  to: 'Facility'
                }
                {
                  from: 'attributes.HostIP'
                  to: 'HostIP'
                }
                {
                  from: 'attributes.HostName'
                  to: 'HostName'
                }
                {
                  from: 'attributes.ProcessID'
                  to: 'ProcessID'
                }
                {
                  from: 'attributes.ProcessName'
                  to: 'ProcessName'
                }
                {
                  from: 'attributes.SeverityLevel'
                  to: 'SeverityLevel'
                }
                {
                  from: 'attributes.SourceSystem'
                  to: 'SourceSystem'
                }
                {
                  from: 'attributes.SyslogMessage'
                  to: 'SyslogMessage'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Microsoft-Syslog-FullyFormed'
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
        name: 'microsoft-syslog-transform1'
        type: 'Microsoft-Syslog'
      }
      {
        name: 'additional-transform1'
        type: 'TransformLanguage'
        transformLanguage: {
          transformStatement: 'source | where Facility == \'daemon\''
        }
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
          type: 'Logs'
          exporters: [
            'custom-syslog-exporter1'
          ]
          processors: [
            'microsoft-syslog-transform1'
            'additional-transform1'
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

Create a PipelineGroup instance using a syslog receiver with Microsoft Syslog transform exporting to the standard Syslog table
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'standard-syslog-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'attributes.TimeGenerated'
                  to: 'TimeGenerated'
                }
                {
                  from: 'attributes.CollectorHostName'
                  to: 'CollectorHostName'
                }
                {
                  from: 'attributes.Computer'
                  to: 'Computer'
                }
                {
                  from: 'attributes.EventTime'
                  to: 'EventTime'
                }
                {
                  from: 'attributes.Facility'
                  to: 'Facility'
                }
                {
                  from: 'attributes.HostIP'
                  to: 'HostIP'
                }
                {
                  from: 'attributes.HostName'
                  to: 'HostName'
                }
                {
                  from: 'attributes.ProcessID'
                  to: 'ProcessID'
                }
                {
                  from: 'attributes.ProcessName'
                  to: 'ProcessName'
                }
                {
                  from: 'attributes.SeverityLevel'
                  to: 'SeverityLevel'
                }
                {
                  from: 'attributes.SourceSystem'
                  to: 'SourceSystem'
                }
                {
                  from: 'attributes.SyslogMessage'
                  to: 'SyslogMessage'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Microsoft-Syslog-FullyFormed'
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
        name: 'microsoft-syslog-transform1'
        type: 'Microsoft-Syslog'
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
          type: 'Logs'
          exporters: [
            'standard-syslog-exporter1'
          ]
          processors: [
            'microsoft-syslog-transform1'
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

Create a PipelineGroup instance using a syslog receiver with udp as its transport protocol and pri header skip turned on
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
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
          allowSkipPriHeader: true
          endpoint: '0.0.0.0:514'
          transportProtocol: 'udp'
        }
      }
    ]
    service: {
      pipelines: [
        {
          name: 'MyPipelineForLogs1'
          type: 'Logs'
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

Create a PipelineGroup instance using a UDP receiver with json array mapper
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
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
          jsonArrayMapper: {
            destinationField: {
              destination: 'attributes'
            }
            keys: [
              'key1'
              'key2'
              'key3'
            ]
            sourceField: {
              fieldName: 'field1'
            }
          }
        }
      }
    ]
    service: {
      pipelines: [
        {
          name: 'MyPipelineForLogs1'
          type: 'Logs'
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

Create a PipelineGroup instance using an otlp receiver with a custom TransformLanguage manipulation exporting to a custom table
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'otlp-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'attributes.FooColumn'
                  to: 'FooColumn'
                }
                {
                  from: 'body'
                  to: 'Body'
                }
                {
                  from: 'time_unix_nano'
                  to: 'TimeGenerated'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Custom-OTLPTable_CL'
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
        name: 'transform1'
        type: 'TransformLanguage'
        transformLanguage: {
          transformStatement: 'source | extend FooColumn = \'bar\''
        }
      }
    ]
    receivers: [
      {
        name: 'otlp-receiver1'
        type: 'OTLP'
        otlp: {
          endpoint: '0.0.0.0:4317'
        }
      }
    ]
    service: {
      pipelines: [
        {
          name: 'MyPipelineForLogs1'
          type: 'Logs'
          exporters: [
            'otlp-exporter1'
          ]
          processors: [
            'transform1'
          ]
          receivers: [
            'otlp-receiver1'
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

Create a PipelineGroup instance using Azure Key Vault certificates with combined PEM format for Bring Your Own Certificate
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'secure-production-exporter'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'severity_text'
                  to: 'SeverityText'
                }
                {
                  from: 'body'
                  to: 'Body'
                }
                {
                  from: 'time_unix_nano'
                  to: 'TimeGenerated'
                }
                {
                  from: 'resource.service.name'
                  to: 'ServiceName'
                }
                {
                  from: 'SecurityLevel'
                  to: 'SecurityLevel'
                }
                {
                  from: 'CertificateSource'
                  to: 'CertificateSource'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Custom-SecureProductionLogs_CL'
          }
          concurrency: {
            batchQueueSize: 200
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
        name: 'akv-secured-otlp-receiver'
        type: 'OTLP'
        otlp: {
          endpoint: '0.0.0.0:4317'
        }
        tlsConfiguration: 'akv-mtls-config'
      }
    ]
    service: {
      pipelines: [
        {
          name: 'AKVSecuredPipeline'
          type: 'Logs'
          exporters: [
            'secure-production-exporter'
          ]
          processors: [
            'batch-processor1'
          ]
          receivers: [
            'akv-secured-otlp-receiver'
          ]
        }
      ]
    }
    tlsConfigurations: [
      {
        name: 'akv-mtls-config'
        clientCa: {
          type: 'kubernetesSecret'
          location: 'akv-synced-client-ca'
          subLocation: 'ca.pem'
        }
        mode: 'mutualTls'
        tlsCertificate: {
          certificate: {
            type: 'kubernetesSecret'
            location: 'akv-synced-tls-cert'
            subLocation: 'tls.pem'
          }
          privateKey: {
            type: 'kubernetesSecret'
            location: 'akv-synced-tls-cert'
            subLocation: 'tls.pem'
          }
        }
      }
    ]
  }
  tags: {
    certificateSource: 'azureKeyVault'
    environment: 'production'
  }
}
```

Create a PipelineGroup instance using OTLP receiver with Bring Your Own Certificate mutual TLS configuration
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'secure-logs-exporter'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'severity_text'
                  to: 'SeverityText'
                }
                {
                  from: 'body'
                  to: 'Body'
                }
                {
                  from: 'time_unix_nano'
                  to: 'TimeGenerated'
                }
                {
                  from: 'resource.service.name'
                  to: 'ServiceName'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Custom-SecureLogs_CL'
          }
          concurrency: {
            batchQueueSize: 100
            workerCount: 2
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
        name: 'secure-otlp-receiver'
        type: 'OTLP'
        otlp: {
          endpoint: '0.0.0.0:4317'
        }
        tlsConfiguration: 'byoc-mtls-config'
      }
      {
        name: 'server-only-otlp-receiver'
        type: 'OTLP'
        otlp: {
          endpoint: '0.0.0.0:4318'
        }
        tlsConfiguration: 'server-only-tls-config'
      }
    ]
    service: {
      pipelines: [
        {
          name: 'SecureMutualTLSPipeline'
          type: 'Logs'
          exporters: [
            'secure-logs-exporter'
          ]
          processors: [
            'batch-processor1'
          ]
          receivers: [
            'secure-otlp-receiver'
          ]
        }
        {
          name: 'ServerOnlyTLSPipeline'
          type: 'Logs'
          exporters: [
            'secure-logs-exporter'
          ]
          processors: [
            'batch-processor1'
          ]
          receivers: [
            'server-only-otlp-receiver'
          ]
        }
      ]
    }
    tlsConfigurations: [
      {
        name: 'byoc-mtls-config'
        clientCa: {
          type: 'kubernetesSecret'
          location: 'client-ca-bundle'
          subLocation: 'ca.crt'
        }
        mode: 'mutualTls'
        tlsCertificate: {
          certificate: {
            type: 'kubernetesSecret'
            location: 'pipeline-tls-cert'
            subLocation: 'tls.crt'
          }
          privateKey: {
            type: 'kubernetesSecret'
            location: 'pipeline-tls-cert'
            subLocation: 'tls.key'
          }
        }
      }
      {
        name: 'server-only-tls-config'
        mode: 'serverOnly'
        tlsCertificate: {
          certificate: {
            type: 'kubernetesSecret'
            location: 'server-tls-cert'
            subLocation: 'tls.crt'
          }
          privateKey: {
            type: 'kubernetesSecret'
            location: 'server-tls-cert'
            subLocation: 'tls.key'
          }
        }
      }
    ]
  }
  tags: {
    tag1: 'Production'
    tag2: 'SecureIngestion'
  }
}
```

Create a PipelineGroup instance using UDP receiver
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
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
          type: 'Logs'
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

Create a PipelineGroup instance with a large batch timeout
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    exporters: [
      {
        name: 'otlp-exporter1'
        type: 'AzureMonitorWorkspaceLogs'
        azureMonitorWorkspaceLogs: {
          api: {
            schema: {
              recordMap: [
                {
                  from: 'severity_text'
                  to: 'SeverityText'
                }
                {
                  from: 'body'
                  to: 'Body'
                }
                {
                  from: 'time_unix_nano'
                  to: 'TimeGenerated'
                }
              ]
            }
            dataCollectionEndpointUrl: 'https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com'
            dataCollectionRule: 'dcr-00000000000000000000000000000000'
            stream: 'Custom-OTLPTable_CL'
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
        batch: {
          timeout: 300000
        }
      }
    ]
    receivers: [
      {
        name: 'otlp-receiver1'
        type: 'OTLP'
        otlp: {
          endpoint: '0.0.0.0:4317'
        }
      }
    ]
    service: {
      pipelines: [
        {
          name: 'MyPipelineForLogs1'
          type: 'Logs'
          exporters: [
            'otlp-exporter1'
          ]
          processors: [
            'batch-processor1'
          ]
          receivers: [
            'otlp-receiver1'
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

Create a PipelineGroup instance with execution placement for hero customer use case (node labeling + pod isolation)
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    executionPlacement: {
      constraints: [
        {
          capability: 'pipeline'
          operator: 'In'
          values: [
            'high-throughput-logs'
          ]
        }
        {
          capability: 'node-type'
          operator: 'In'
          values: [
            'high-cpu'
            'dedicated'
          ]
        }
      ]
      distribution: {
        maxInstancesPerHost: 1
      }
    }
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
            batchQueueSize: 200
            workerCount: 8
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
        name: 'otlp-receiver1'
        type: 'OTLP'
        otlp: {
          endpoint: '0.0.0.0:4317'
        }
      }
    ]
    replicas: 3
    service: {
      pipelines: [
        {
          name: 'HighThroughputPipeline'
          type: 'Logs'
          exporters: [
            'my-workspace-logs-exporter1'
          ]
          processors: [
            'batch-processor1'
          ]
          receivers: [
            'otlp-receiver1'
          ]
        }
      ]
    }
  }
  tags: {
    isolation: 'strict'
    pipeline: 'high-throughput-logs'
  }
}
```

Create a PipelineGroup instance with execution placement using Exists operator
```bicep
resource exampleResource 'Microsoft.Monitor/pipelineGroups@2025-03-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation'
    type: 'CustomLocation'
  }
  location: 'eastus2'
  properties: {
    executionPlacement: {
      constraints: [
        {
          capability: 'gpu-enabled'
          operator: 'Exists'
        }
      ]
      distribution: {
        maxInstancesPerHost: 1
      }
    }
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
        name: 'otlp-receiver1'
        type: 'OTLP'
        otlp: {
          endpoint: '0.0.0.0:4317'
        }
      }
    ]
    replicas: 2
    service: {
      pipelines: [
        {
          name: 'GpuAcceleratedPipeline'
          type: 'Logs'
          exporters: [
            'my-workspace-logs-exporter1'
          ]
          processors: [
            'batch-processor1'
          ]
          receivers: [
            'otlp-receiver1'
          ]
        }
      ]
    }
  }
  tags: {
    environment: 'production'
    workload: 'gpu-logs'
  }
}
```
