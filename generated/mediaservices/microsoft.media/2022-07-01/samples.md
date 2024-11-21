# Microsoft.Media
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.media/mediaservices/transforms

Create or update a Transform
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/transforms@2022-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Transform to illustrate create and update.'
    outputs: [
      {
        preset: {
          @odata.type: '#Microsoft.Media.BuiltInStandardEncoderPreset'
          presetName: 'AdaptiveStreaming'
        }
      }
    ]
  }
}
```

## microsoft.media/mediaservices/transforms/jobs

Create a Job
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/transforms/jobs@2022-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    correlationData: {
      Key 2: 'Value 2'
      key1: 'value1'
    }
    input: {
      @odata.type: '#Microsoft.Media.JobInputAsset'
      assetName: 'job1-InputAsset'
    }
    outputs: [
      {
        @odata.type: '#Microsoft.Media.JobOutputAsset'
        assetName: 'job1-OutputAsset'
      }
    ]
  }
}
```
