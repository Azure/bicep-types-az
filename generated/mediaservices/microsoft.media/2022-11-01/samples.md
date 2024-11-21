# Microsoft.Media
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.media/mediaservices/liveevents

Create a LiveEvent
```bicep
resource exampleResource 'Microsoft.Media/mediaservices/liveEvents@2022-11-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    description: 'test event 1'
    input: {
      accessControl: {
        ip: {
          allow: [
            {
              name: 'AllowAll'
              address: '0.0.0.0'
              subnetPrefixLength: 0
            }
          ]
        }
      }
      keyFrameIntervalDuration: 'PT6S'
      streamingProtocol: 'RTMP'
    }
    preview: {
      accessControl: {
        ip: {
          allow: [
            {
              name: 'AllowAll'
              address: '0.0.0.0'
              subnetPrefixLength: 0
            }
          ]
        }
      }
    }
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.media/mediaservices/liveevents/liveoutputs

Create a LiveOutput
```bicep
resource exampleResource 'Microsoft.Media/mediaservices/liveEvents/liveOutputs@2022-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'test live output 1'
    archiveWindowLength: 'PT5M'
    assetName: '6f3264f5-a189-48b4-a29a-a40f22575212'
    hls: {
      fragmentsPerTsSegment: 5
    }
    manifestName: 'testmanifest'
    rewindWindowLength: 'PT4M'
  }
}
```

## microsoft.media/mediaservices/streamingendpoints

Create a streaming endpoint
```bicep
resource exampleResource 'Microsoft.Media/mediaservices/streamingEndpoints@2022-11-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    description: 'test event 1'
    accessControl: {
      akamai: {
        akamaiSignatureHeaderAuthenticationKeyList: [
          {
            base64Key: 'dGVzdGlkMQ=='
            expiration: '2029-12-31T16:00:00-08:00'
            identifier: 'id1'
          }
          {
            base64Key: 'dGVzdGlkMQ=='
            expiration: '2030-12-31T16:00:00-08:00'
            identifier: 'id2'
          }
        ]
      }
      ip: {
        allow: [
          {
            name: 'AllowedIp'
            address: '192.168.1.1'
          }
        ]
      }
    }
    availabilitySetName: 'availableset'
    cdnEnabled: false
    scaleUnits: 1
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```
