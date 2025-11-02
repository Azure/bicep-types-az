# Microsoft.AzureDataTransfer
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azuredatatransfer/connections

Creates or updates the connection resource
```bicep
resource exampleResource 'Microsoft.AzureDataTransfer/connections@2025-10-10-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    flowProfileList: [
      {
        name: 'flowProfileNamea'
        description: 'Testing 123'
        flowProfileId: '25f2c41a-6e29-4c40-a033-b4de81d4a681'
        pipeline: 'pipelinea'
        replicationScenario: 'Files'
        status: 'Enabled'
      }
      {
        name: 'flowProfileNameb'
        description: 'Testing 123'
        flowProfileId: '66b00598-cabb-4a85-b3d8-88905ac899b8'
        pipeline: 'pipelinea'
        replicationScenario: 'Files'
        status: 'Enabled'
      }
    ]
    justification: 'justification'
    pipeline: 'testdc'
    requirementId: 'id'
  }
}
```

## microsoft.azuredatatransfer/connections/flows

Creates or updates the flow resource
```bicep
resource exampleResource 'Microsoft.AzureDataTransfer/connections/flows@2025-10-10-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    connection: {
      id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testRG/providers/Microsoft.AzureDataTransfer/connections/testConnection'
    }
    flowDataType: 'Blob'
    flowProfile: {
      name: 'flowProfileName'
      description: 'Testing 123'
      flowProfileId: '25f2c41a-6e29-4c40-a033-b4de81d4a681'
      pipeline: 'testPipeline'
      replicationScenario: 'Files'
      status: 'Enabled'
    }
    storageAccountName: 'testsa'
    storageContainerName: 'testcontainer'
  }
}
```

## microsoft.azuredatatransfer/pipelines

Creates or updates the pipeline resource
```bicep
resource exampleResource 'Microsoft.AzureDataTransfer/pipelines@2025-10-10-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    remoteCloud: 'testdc'
  }
}
```

## microsoft.azuredatatransfer/pipelines/flowprofiles

Creates or updates the FlowPRofile resource
```bicep
resource exampleResource 'Microsoft.AzureDataTransfer/pipelines/flowProfiles@2025-10-10-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    description: 'Hello world description'
    replicationScenario: 'Files'
    rulesets: {
      antivirus: {
        avSolutions: [
          'Defender'
          'ClamAv'
        ]
      }
      archives: {
        maximumCompressionRatioLimit: 123
        maximumDepthLimit: 12
        maximumExpansionSizeLimit: 123456
        minimumSizeForExpansion: 1
      }
      dataSize: {
        maximum: 123456789
        minimum: 1
      }
      mimeFilters: {
        type: 'Allow'
        filters: [
          {
            media: 'application/json'
            extensions: [
              '.json'
              '.app'
              '.js'
            ]
          }
        ]
      }
      textMatching: {
        deny: [
          {
            caseSensitivity: 'Insensitive'
            matchType: 'Partial'
            text: 'hello world'
          }
          {
            caseSensitivity: 'Sensitive'
            matchType: 'Complete'
            text: 'hello'
          }
        ]
      }
      xmlFilters: {
        schema: '<?xml version="1.0" encoding="UTF-8" ?> <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"></xs:schema>'
        defaultNamespace: 'testnamespace'
        reference: 'Inline'
      }
    }
    status: 'Enabled'
  }
}
```
