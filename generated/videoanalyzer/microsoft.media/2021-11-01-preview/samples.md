# Microsoft.Media
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.media/videoanalyzers

Create a Video Analyzer account
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers@2021-11-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1: {
      }
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2: {
      }
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id3: {
      }
    }
  }
  location: 'South Central US'
  properties: {
    encryption: {
      type: 'SystemKey'
    }
    iotHubs: [
      {
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.Devices/IotHubs/hub1'
        identity: {
          userAssignedIdentity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id3'
        }
      }
      {
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.Devices/IotHubs/hub2'
        identity: {
          userAssignedIdentity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id3'
        }
      }
    ]
    storageAccounts: [
      {
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/storage1'
        identity: {
          userAssignedIdentity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2'
        }
      }
    ]
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.media/videoanalyzers/accesspolicies

Register access policy entity.
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers/accessPolicies@2021-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authentication: {
      @type: '#Microsoft.VideoAnalyzer.JwtAuthentication'
      audiences: [
        'audience1'
      ]
      claims: [
        {
          name: 'claimname1'
          value: 'claimvalue1'
        }
        {
          name: 'claimname2'
          value: 'claimvalue2'
        }
      ]
      issuers: [
        'issuer1'
        'issuer2'
      ]
      keys: [
        {
          @type: '#Microsoft.VideoAnalyzer.RsaTokenKey'
          alg: 'RS256'
          e: 'ZLFzZTY0IQ=='
          kid: '123'
          n: 'YmFzZTY0IQ=='
        }
        {
          @type: '#Microsoft.VideoAnalyzer.EccTokenKey'
          alg: 'ES256'
          kid: '124'
          x: 'XX=='
          y: 'YY=='
        }
      ]
    }
  }
}
```

## microsoft.media/videoanalyzers/edgemodules

Registers an edge module.
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers/edgeModules@2021-11-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.media/videoanalyzers/livepipelines

Create or update a live pipeline
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers/livePipelines@2021-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Live Pipeline 1 Description'
    bitrateKbps: 500
    parameters: [
      {
        name: 'rtspUrlParameter'
        value: 'rtsp://contoso.com/stream'
      }
    ]
    topologyName: 'pipelinetopology1'
  }
}
```

## microsoft.media/videoanalyzers/pipelinejobs

Create or update a pipeline job
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers/pipelineJobs@2021-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Pipeline Job 1 Dsecription'
    parameters: [
      {
        name: 'timesequences'
        value: '[["2020-10-05T03:30:00Z", "2020-10-05T04:30:00Z"]]'
      }
      {
        name: 'videoSourceName'
        value: 'camera001'
      }
    ]
    topologyName: 'pipelinetopology1'
  }
}
```

## microsoft.media/videoanalyzers/pipelinetopologies

Create or update a pipeline topology with an Rtsp source and video sink.
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers/pipelineTopologies@2021-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'Live'
  properties: {
    description: 'Pipeline Topology 1 Description'
    parameters: [
      {
        name: 'rtspUrlParameter'
        type: 'String'
        description: 'rtsp source url parameter'
        default: 'rtsp://microsoft.com/video.mp4'
      }
      {
        name: 'rtspPasswordParameter'
        type: 'SecretString'
        description: 'rtsp source password parameter'
        default: 'password'
      }
    ]
    sinks: [
      {
        name: 'videoSink'
        @type: '#Microsoft.VideoAnalyzer.VideoSink'
        inputs: [
          {
            nodeName: 'rtspSource'
          }
        ]
        videoCreationProperties: {
          description: 'Parking lot south entrance'
          segmentLength: 'PT30S'
          title: 'Parking Lot (Camera 1)'
        }
        videoName: 'camera001'
        videoPublishingOptions: {
          disableArchive: 'false'
          disableRtspPublishing: 'true'
        }
      }
    ]
    sources: [
      {
        name: 'rtspSource'
        @type: '#Microsoft.VideoAnalyzer.RtspSource'
        endpoint: {
          @type: '#Microsoft.VideoAnalyzer.UnsecuredEndpoint'
          credentials: {
            @type: '#Microsoft.VideoAnalyzer.UsernamePasswordCredentials'
            password: '\${rtspPasswordParameter}'
            username: 'username'
          }
          url: '\${rtspUrlParameter}'
        }
        transport: 'Http'
      }
    ]
  }
  sku: {
    name: 'Live_S1'
  }
}
```

## microsoft.media/videoanalyzers/privateendpointconnections

Update private endpoint connection.
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers/privateEndpointConnections@2021-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Test description.'
      status: 'Approved'
    }
  }
}
```

## microsoft.media/videoanalyzers/videos

Register video entity.
```bicep
resource exampleResource 'Microsoft.Media/videoAnalyzers/videos@2021-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Sample Description 1'
    title: 'Sample Title 1'
  }
}
```
