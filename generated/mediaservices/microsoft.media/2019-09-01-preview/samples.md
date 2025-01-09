# Microsoft.Media
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.media/mediaservices/mediagraphs

Create or update a Media Graph
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/mediaGraphs@2019-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'updated description'
    sinks: [
      {
        name: 'AssetSink'
        '@odata.type': '#Microsoft.Media.MediaGraphAssetSink'
        assetName: 'SampleAsset'
        inputs: [
          'rtspSource'
        ]
      }
    ]
    sources: [
      {
        name: 'rtspSource'
        '@odata.type': '#Microsoft.Media.MediaGraphRtspSource'
        credentials: {
          password: 'examplepassword'
          username: 'exampleusername'
        }
        rtspUrl: 'rtsp://contoso.com:554/stream1'
      }
    ]
  }
}
```
