# Microsoft.DataFactory
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.datafactory/factories

Factories_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DataFactory/factories@2017-09-01-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    vstsConfiguration: {
      accountName: 'msdata'
      collaborationBranch: 'master'
      lastCommitId: ''
      projectName: 'datafactory'
      repositoryName: 'exampleRepo'
      rootFolder: '/'
      tenantId: '12f988bf-86d1-41af-91ab-2d7cd011db49'
    }
  }
}
```

## microsoft.datafactory/factories/datasets

Datasets_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/datasets@2017-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'AzureBlob'
    linkedServiceName: {
      type: 'LinkedServiceReference'
      referenceName: 'exampleLinkedService'
    }
    parameters: {
      MyFileName: {
        type: 'String'
      }
      MyFolderPath: {
        type: 'String'
      }
    }
    typeProperties: {
      format: {
        type: 'TextFormat'
      }
      fileName: {
        type: 'Expression'
        value: '@dataset().MyFileName'
      }
      folderPath: {
        type: 'Expression'
        value: '@dataset().MyFolderPath'
      }
    }
  }
}
```

Datasets_Update
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/datasets@2017-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'AzureBlob'
    description: 'Example description'
    linkedServiceName: {
      type: 'LinkedServiceReference'
      referenceName: 'exampleLinkedService'
    }
    parameters: {
      MyFileName: {
        type: 'String'
      }
      MyFolderPath: {
        type: 'String'
      }
    }
    typeProperties: {
      format: {
        type: 'TextFormat'
      }
      fileName: {
        type: 'Expression'
        value: '@dataset().MyFileName'
      }
      folderPath: {
        type: 'Expression'
        value: '@dataset().MyFolderPath'
      }
    }
  }
}
```

## microsoft.datafactory/factories/integrationruntimes

IntegrationRuntimes_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/integrationRuntimes@2017-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'Managed'
    description: 'A managed reserved integration runtime'
    typeProperties: {
      computeProperties: {
        location: 'West US'
        maxParallelExecutionsPerNode: 1
        nodeSize: 'Standard_D1_v2'
        numberOfNodes: 1
      }
      ssisProperties: {
        catalogInfo: {
          catalogAdminPassword: {
            type: 'SecureString'
            value: '<value>'
          }
          catalogAdminUserName: 'yanzhang'
          catalogPricingTier: 'S1'
          catalogServerEndpoint: 'yandongtestsvr.database.windows.net'
        }
        licenseType: 'BasePrice'
      }
    }
  }
}
```

## microsoft.datafactory/factories/linkedservices

LinkedServices_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/linkedservices@2017-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'AzureStorage'
    typeProperties: {
      connectionString: {
        type: 'SecureString'
        value: 'DefaultEndpointsProtocol=https;AccountName=examplestorageaccount;AccountKey=<storage key>'
      }
    }
  }
}
```

LinkedServices_Update
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/linkedservices@2017-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'AzureStorage'
    description: 'Example description'
    typeProperties: {
      connectionString: {
        type: 'SecureString'
        value: 'DefaultEndpointsProtocol=https;AccountName=examplestorageaccount;AccountKey=<storage key>'
      }
    }
  }
}
```

## microsoft.datafactory/factories/pipelines

Pipelines_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/pipelines@2017-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    activities: [
      {
        name: 'ExampleForeachActivity'
        type: 'ForEach'
        typeProperties: {
          activities: [
            {
              name: 'ExampleCopyActivity'
              type: 'Copy'
              inputs: [
                {
                  type: 'DatasetReference'
                  parameters: {
                    MyFileName: 'examplecontainer.csv'
                    MyFolderPath: 'examplecontainer'
                  }
                  referenceName: 'exampleDataset'
                }
              ]
              outputs: [
                {
                  type: 'DatasetReference'
                  parameters: {
                    MyFileName: {
                      type: 'Expression'
                      value: '@item()'
                    }
                    MyFolderPath: 'examplecontainer'
                  }
                  referenceName: 'exampleDataset'
                }
              ]
              typeProperties: {
                sink: {
                  type: 'BlobSink'
                }
                source: {
                  type: 'BlobSource'
                }
              }
            }
          ]
          isSequential: true
          items: {
            type: 'Expression'
            value: '@pipeline().parameters.OutputBlobNameList'
          }
        }
      }
    ]
    parameters: {
      OutputBlobNameList: {
        type: 'Array'
      }
    }
  }
}
```

Pipelines_Update
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/pipelines@2017-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example description'
    activities: [
      {
        name: 'ExampleForeachActivity'
        type: 'ForEach'
        typeProperties: {
          activities: [
            {
              name: 'ExampleCopyActivity'
              type: 'Copy'
              inputs: [
                {
                  type: 'DatasetReference'
                  parameters: {
                    MyFileName: 'examplecontainer.csv'
                    MyFolderPath: 'examplecontainer'
                  }
                  referenceName: 'exampleDataset'
                }
              ]
              outputs: [
                {
                  type: 'DatasetReference'
                  parameters: {
                    MyFileName: {
                      type: 'Expression'
                      value: '@item()'
                    }
                    MyFolderPath: 'examplecontainer'
                  }
                  referenceName: 'exampleDataset'
                }
              ]
              typeProperties: {
                sink: {
                  type: 'BlobSink'
                }
                source: {
                  type: 'BlobSource'
                }
              }
            }
          ]
          isSequential: true
          items: {
            type: 'Expression'
            value: '@pipeline().parameters.OutputBlobNameList'
          }
        }
      }
    ]
    parameters: {
      OutputBlobNameList: {
        type: 'Array'
      }
    }
  }
}
```

## microsoft.datafactory/factories/triggers

Triggers_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/triggers@2017-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'ScheduleTrigger'
    pipelines: [
      {
        parameters: {
          OutputBlobNameList: [
            'exampleoutput.csv'
          ]
        }
        pipelineReference: {
          type: 'PipelineReference'
          referenceName: 'examplePipeline'
        }
      }
    ]
    typeProperties: {
      recurrence: {
        endTime: '2017-09-13T18:13:20.7835924Z'
        frequency: 'Minute'
        interval: 4
        startTime: '2017-09-13T17:57:20.7835924Z'
        timeZone: 'UTC'
      }
    }
  }
}
```

Triggers_Update
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/triggers@2017-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'ScheduleTrigger'
    description: 'Example description'
    pipelines: [
      {
        parameters: {
          OutputBlobNameList: [
            'exampleoutput.csv'
          ]
        }
        pipelineReference: {
          type: 'PipelineReference'
          referenceName: 'examplePipeline'
        }
      }
    ]
    typeProperties: {
      recurrence: {
        endTime: '2017-09-13T18:13:21.7240518Z'
        frequency: 'Minute'
        interval: 4
        startTime: '2017-09-13T17:57:21.7240518Z'
        timeZone: 'UTC'
      }
    }
  }
}
```
