# Microsoft.HealthcareApis
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.healthcareapis/services

Create or Update a service with all parameters
```bicep
resource exampleResource 'Microsoft.HealthcareApis/services@2022-12-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  kind: 'fhir-R4'
  location: 'westus2'
  properties: {
    accessPolicies: [
      {
        objectId: 'c487e7d1-3210-41a3-8ccc-e9372b78da47'
      }
      {
        objectId: '5b307da8-43d4-492b-8b66-b0294ade872f'
      }
    ]
    authenticationConfiguration: {
      audience: 'https://azurehealthcareapis.com'
      authority: 'https://login.microsoftonline.com/abfde7b2-df0f-47e6-aabf-2462b07508dc'
      smartProxyEnabled: true
    }
    corsConfiguration: {
      allowCredentials: false
      headers: [
        '*'
      ]
      maxAge: 1440
      methods: [
        'DELETE'
        'GET'
        'OPTIONS'
        'PATCH'
        'POST'
        'PUT'
      ]
      origins: [
        '*'
      ]
    }
    cosmosDbConfiguration: {
      keyVaultKeyUri: 'https://my-vault.vault.azure.net/keys/my-key'
      offerThroughput: 1000
    }
    exportConfiguration: {
      storageAccountName: 'existingStorageAccount'
    }
    privateEndpointConnections: [
    ]
    publicNetworkAccess: 'Disabled'
  }
  tags: {
  }
}
```

Create or Update a service with minimum parameters
```bicep
resource exampleResource 'Microsoft.HealthcareApis/services@2022-12-01' = {
  name: 'example'
  kind: 'fhir-R4'
  location: 'westus2'
  properties: {
    accessPolicies: [
      {
        objectId: 'c487e7d1-3210-41a3-8ccc-e9372b78da47'
      }
    ]
  }
  tags: {
  }
}
```

## microsoft.healthcareapis/services/privateendpointconnections

PrivateEndpointConnection_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.HealthcareApis/services/privateEndpointConnections@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```

## microsoft.healthcareapis/workspaces

Create or update a workspace
```bicep
resource exampleResource 'Microsoft.HealthcareApis/workspaces@2022-12-01' = {
  name: 'example'
  location: 'westus'
  properties: {
  }
}
```

## microsoft.healthcareapis/workspaces/dicomservices

Create or update a Dicom Service
```bicep
resource exampleResource 'Microsoft.HealthcareApis/workspaces/dicomservices@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
  }
}
```

## microsoft.healthcareapis/workspaces/fhirservices

Create or update a Fhir Service
```bicep
resource exampleResource 'Microsoft.HealthcareApis/workspaces/fhirservices@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  kind: 'fhir-R4'
  location: 'westus'
  properties: {
    accessPolicies: [
      {
        objectId: 'c487e7d1-3210-41a3-8ccc-e9372b78da47'
      }
      {
        objectId: '5b307da8-43d4-492b-8b66-b0294ade872f'
      }
    ]
    acrConfiguration: {
      loginServers: [
        'test1.azurecr.io'
      ]
    }
    authenticationConfiguration: {
      audience: 'https://azurehealthcareapis.com'
      authority: 'https://login.microsoftonline.com/abfde7b2-df0f-47e6-aabf-2462b07508dc'
      smartProxyEnabled: true
    }
    corsConfiguration: {
      allowCredentials: false
      headers: [
        '*'
      ]
      maxAge: 1440
      methods: [
        'DELETE'
        'GET'
        'OPTIONS'
        'PATCH'
        'POST'
        'PUT'
      ]
      origins: [
        '*'
      ]
    }
    exportConfiguration: {
      storageAccountName: 'existingStorageAccount'
    }
    implementationGuidesConfiguration: {
      usCoreMissingData: false
    }
    importConfiguration: {
      enabled: false
      initialImportMode: false
      integrationDataStore: 'existingStorageAccount'
    }
  }
  tags: {
    additionalProp1: 'string'
    additionalProp2: 'string'
    additionalProp3: 'string'
  }
}
```

## microsoft.healthcareapis/workspaces/iotconnectors

Create an IoT Connector
```bicep
resource exampleResource 'Microsoft.HealthcareApis/workspaces/iotconnectors@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'westus'
  properties: {
    deviceMapping: {
      content: {
        template: [
          {
            template: {
              deviceIdExpression: '$.deviceid'
              timestampExpression: '$.measurementdatetime'
              typeMatchExpression: '$..[?(@heartrate)]'
              typeName: 'heartrate'
              values: [
                {
                  required: 'true'
                  valueExpression: '$.heartrate'
                  valueName: 'hr'
                }
              ]
            }
            templateType: 'JsonPathContent'
          }
        ]
        templateType: 'CollectionContent'
      }
    }
    ingestionEndpointConfiguration: {
      consumerGroup: 'ConsumerGroupA'
      eventHubName: 'MyEventHubName'
      fullyQualifiedEventHubNamespace: 'myeventhub.servicesbus.windows.net'
    }
  }
  tags: {
    additionalProp1: 'string'
    additionalProp2: 'string'
    additionalProp3: 'string'
  }
}
```

## microsoft.healthcareapis/workspaces/iotconnectors/fhirdestinations

Create or update an Iot Connector FHIR destination
```bicep
resource exampleResource 'Microsoft.HealthcareApis/workspaces/iotconnectors/fhirdestinations@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    fhirMapping: {
      content: {
        template: [
          {
            template: {
              codes: [
                {
                  code: '8867-4'
                  display: 'Heart rate'
                  system: 'http://loinc.org'
                }
              ]
              periodInterval: 60
              typeName: 'heartrate'
              value: {
                defaultPeriod: 5000
                unit: 'count/min'
                valueName: 'hr'
                valueType: 'SampledData'
              }
            }
            templateType: 'CodeValueFhir'
          }
        ]
        templateType: 'CollectionFhirTemplate'
      }
    }
    fhirServiceResourceId: 'subscriptions/11111111-2222-3333-4444-555566667777/resourceGroups/myrg/providers/Microsoft.HealthcareApis/workspaces/myworkspace/fhirservices/myfhirservice'
    resourceIdentityResolutionType: 'Create'
  }
}
```

## microsoft.healthcareapis/workspaces/privateendpointconnections

WorkspacePrivateEndpointConnection_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.HealthcareApis/workspaces/privateEndpointConnections@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```
