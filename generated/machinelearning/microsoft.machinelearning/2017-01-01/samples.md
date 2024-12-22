# Microsoft.MachineLearning
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.machinelearning/webservices

PUT WebService
```bicep
resource exampleResource 'Microsoft.MachineLearning/webServices@2017-01-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    description: 'Web Service Description'
    assets: {
      asset1: {
        name: 'Execute R Script'
        type: 'Module'
        locationInfo: {
          credentials: ''
          uri: 'aml://module/moduleId-1'
        }
      }
      asset2: {
        name: 'Import Data'
        type: 'Module'
        locationInfo: {
          credentials: ''
          uri: 'aml://module/moduleId-2'
        }
      }
    }
    commitmentPlan: {
      id: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.MachineLearning/commitmentPlans/commitmentPlanName'
    }
    diagnostics: {
      level: 'None'
    }
    exampleRequest: {
      globalParameters: {
      }
      inputs: {
        input1: [
          [
            'age'
          ]
          [
            'workclass'
          ]
          [
            'fnlwgt'
          ]
          [
            'education'
          ]
          [
            'education-num'
          ]
        ]
      }
    }
    exposeSampleData: true
    input: {
      type: 'object'
      description: ''
      properties: {
        input1: {
          type: 'object'
          description: ''
          properties: {
            column_name: {
              type: 'String'
              'x-ms-isnullable': false
            }
          }
          title: ''
        }
      }
      title: ''
    }
    machineLearningWorkspace: {
      id: 'workspaceId'
    }
    output: {
      type: 'object'
      description: ''
      properties: {
        output1: {
          type: 'object'
          description: ''
          properties: {
            age: {
              type: 'Integer'
              format: 'Int32'
              'x-ms-isnullable': true
            }
            workclass: {
              type: 'String'
              'x-ms-isnullable': false
            }
          }
          title: ''
        }
      }
      title: ''
    }
    package: {
      edges: [
        {
          sourceNodeId: 'node2'
          sourcePortId: 'Results dataset'
          targetNodeId: 'node1'
          targetPortId: 'Dataset2'
        }
        {
          sourceNodeId: 'node3'
          targetNodeId: 'node1'
          targetPortId: 'Dataset1'
        }
        {
          sourceNodeId: 'node1'
          sourcePortId: 'Result Dataset'
          targetNodeId: 'node4'
        }
      ]
      graphParameters: {
      }
      nodes: {
        node1: {
          assetId: 'asset1'
          parameters: {
            'R Script': {
              certificateThumbprint: ''
              value: 'The R Script'
            }
            'R Version': {
              certificateThumbprint: ''
              value: 'CRAN R 3.1.0'
            }
          }
        }
        node2: {
          assetId: 'asset2'
          parameters: {
            'Account Key': {
              certificateThumbprint: 'TheThumbprint'
              value: 'Encrypted Key'
            }
            'Account Name': {
              certificateThumbprint: ''
              value: 'accountName'
            }
            'Please Specify Authentication Type': {
              certificateThumbprint: ''
              value: 'Account'
            }
            'Please Specify Data Source': {
              certificateThumbprint: ''
              value: 'AzureBlobStorage'
            }
          }
        }
        node3: {
          inputId: 'input1'
        }
        node4: {
          outputId: 'output1'
        }
      }
    }
    packageType: 'Graph'
    parameters: {
    }
    payloadsInBlobStorage: false
    readOnly: false
    realtimeConfiguration: {
      maxConcurrentCalls: 4
    }
    storageAccount: {
      name: 'Storage_Name'
      key: 'Storage_Key'
    }
    title: 'Web Service Title'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```
