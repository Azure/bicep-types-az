# Microsoft.Media
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.media/mediaservices

Create a Media Services account
```bicep
resource exampleResource 'Microsoft.Media/mediaservices@2020-05-01' = {
  name: 'example'
  location: 'South Central US'
  properties: {
    storageAccounts: [
      {
        type: 'Primary'
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contoso/providers/Microsoft.Storage/storageAccounts/contososportsstore'
      }
    ]
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.media/mediaservices/accountfilters

Create an Account Filter
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/accountFilters@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    firstQuality: {
      bitrate: 128000
    }
    presentationTimeRange: {
      endTimestamp: 170000000
      forceEndTimestamp: false
      liveBackoffDuration: 0
      presentationWindowDuration: 9223372036854775000
      startTimestamp: 0
      timescale: 10000000
    }
    tracks: [
      {
        trackSelections: [
          {
            operation: 'Equal'
            property: 'Type'
            value: 'Audio'
          }
          {
            operation: 'NotEqual'
            property: 'Language'
            value: 'en'
          }
          {
            operation: 'NotEqual'
            property: 'FourCC'
            value: 'EC-3'
          }
        ]
      }
      {
        trackSelections: [
          {
            operation: 'Equal'
            property: 'Type'
            value: 'Video'
          }
          {
            operation: 'Equal'
            property: 'Bitrate'
            value: '3000000-5000000'
          }
        ]
      }
    ]
  }
}
```

## microsoft.media/mediaservices/assets

Create an Asset
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/assets@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A documentary showing the ascent of Mount Logan'
    storageAccountName: 'storage0'
  }
}
```

## microsoft.media/mediaservices/assets/assetfilters

Create an Asset Filter
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/assets/assetFilters@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    firstQuality: {
      bitrate: 128000
    }
    presentationTimeRange: {
      endTimestamp: 170000000
      forceEndTimestamp: false
      liveBackoffDuration: 0
      presentationWindowDuration: 9223372036854775000
      startTimestamp: 0
      timescale: 10000000
    }
    tracks: [
      {
        trackSelections: [
          {
            operation: 'Equal'
            property: 'Type'
            value: 'Audio'
          }
          {
            operation: 'NotEqual'
            property: 'Language'
            value: 'en'
          }
          {
            operation: 'NotEqual'
            property: 'FourCC'
            value: 'EC-3'
          }
        ]
      }
      {
        trackSelections: [
          {
            operation: 'Equal'
            property: 'Type'
            value: 'Video'
          }
          {
            operation: 'Equal'
            property: 'Bitrate'
            value: '3000000-5000000'
          }
        ]
      }
    ]
  }
}
```

## microsoft.media/mediaservices/contentkeypolicies

Creates a Content Key Policy with ClearKey option and Token Restriction
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/contentKeyPolicies@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'ArmPolicyDescription'
    options: [
      {
        name: 'ClearKeyOption'
        configuration: {
          '@odata.type': '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration'
        }
        restriction: {
          '@odata.type': '#Microsoft.Media.ContentKeyPolicyTokenRestriction'
          audience: 'urn:audience'
          issuer: 'urn:issuer'
          primaryVerificationKey: {
            '@odata.type': '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey'
            keyValue: 'AAAAAAAAAAAAAAAAAAAAAA=='
          }
          restrictionTokenType: 'Swt'
        }
      }
    ]
  }
}
```

Creates a Content Key Policy with multiple options
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/contentKeyPolicies@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'ArmPolicyDescription'
    options: [
      {
        name: 'ClearKeyOption'
        configuration: {
          '@odata.type': '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration'
        }
        restriction: {
          '@odata.type': '#Microsoft.Media.ContentKeyPolicyTokenRestriction'
          audience: 'urn:audience'
          issuer: 'urn:issuer'
          primaryVerificationKey: {
            '@odata.type': '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey'
            keyValue: 'AAAAAAAAAAAAAAAAAAAAAA=='
          }
          restrictionTokenType: 'Swt'
        }
      }
      {
        name: 'widevineoption'
        configuration: {
          '@odata.type': '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration'
          widevineTemplate: '{"allowed_track_types":"SD_HD","content_key_specs":[{"track_type":"SD","security_level":1,"required_output_protection":{"hdcp":"HDCP_V2"}}],"policy_overrides":{"can_play":true,"can_persist":true,"can_renew":false}}'
        }
        restriction: {
          '@odata.type': '#Microsoft.Media.ContentKeyPolicyOpenRestriction'
        }
      }
    ]
  }
}
```

Creates a Content Key Policy with PlayReady option and Open Restriction
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/contentKeyPolicies@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'ArmPolicyDescription'
    options: [
      {
        name: 'ArmPolicyOptionName'
        configuration: {
          '@odata.type': '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration'
          licenses: [
            {
              allowTestDevices: true
              beginDate: '2017-10-16T18:22:53.46Z'
              contentKeyLocation: {
                '@odata.type': '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader'
              }
              contentType: 'UltraVioletDownload'
              licenseType: 'Persistent'
              playRight: {
                allowPassingVideoContentToUnknownOutput: 'NotAllowed'
                digitalVideoOnlyContentRestriction: false
                imageConstraintForAnalogComponentVideoRestriction: true
                imageConstraintForAnalogComputerMonitorRestriction: false
                scmsRestriction: 2
              }
            }
          ]
        }
        restriction: {
          '@odata.type': '#Microsoft.Media.ContentKeyPolicyOpenRestriction'
        }
      }
    ]
  }
}
```

Creates a Content Key Policy with Widevine option and Token Restriction
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/contentKeyPolicies@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'ArmPolicyDescription'
    options: [
      {
        name: 'widevineoption'
        configuration: {
          '@odata.type': '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration'
          widevineTemplate: '{"allowed_track_types":"SD_HD","content_key_specs":[{"track_type":"SD","security_level":1,"required_output_protection":{"hdcp":"HDCP_V2"}}],"policy_overrides":{"can_play":true,"can_persist":true,"can_renew":false}}'
        }
        restriction: {
          '@odata.type': '#Microsoft.Media.ContentKeyPolicyTokenRestriction'
          alternateVerificationKeys: [
            {
              '@odata.type': '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey'
              keyValue: 'AAAAAAAAAAAAAAAAAAAAAA=='
            }
          ]
          audience: 'urn:audience'
          issuer: 'urn:issuer'
          primaryVerificationKey: {
            '@odata.type': '#Microsoft.Media.ContentKeyPolicyRsaTokenKey'
            exponent: 'AQAB'
            modulus: 'AQAD'
          }
          restrictionTokenType: 'Jwt'
        }
      }
    ]
  }
}
```

## microsoft.media/mediaservices/liveevents

Create a LiveEvent
```bicep
resource exampleResource 'Microsoft.Media/mediaservices/liveEvents@2020-05-01' = {
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
resource exampleResource 'Microsoft.Media/mediaservices/liveEvents/liveOutputs@2020-05-01' = {
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
  }
}
```

## microsoft.media/mediaservices/privateendpointconnections

Update private endpoint connection.
```bicep
resource exampleResource 'Microsoft.Media/mediaservices/privateEndpointConnections@2020-05-01' = {
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

## microsoft.media/mediaservices/streamingendpoints

Create a streaming endpoint
```bicep
resource exampleResource 'Microsoft.Media/mediaservices/streamingEndpoints@2020-05-01' = {
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

## microsoft.media/mediaservices/streaminglocators

Creates a Streaming Locator with clear streaming
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingLocators@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    assetName: 'ClimbingMountRainier'
    streamingPolicyName: 'clearStreamingPolicy'
  }
}
```

Creates a Streaming Locator with secure streaming
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingLocators@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    assetName: 'ClimbingMountRainier'
    endTime: '2028-12-31T23:59:59.9999999Z'
    startTime: '2018-03-01T00:00:00Z'
    streamingPolicyName: 'secureStreamingPolicy'
  }
}
```

Creates a Streaming Locator with user defined content keys
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingLocators@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    assetName: 'ClimbingMountRainier'
    contentKeys: [
      {
        id: '60000000-0000-0000-0000-000000000001'
        labelReferenceInStreamingPolicy: 'aesDefaultKey'
        value: '1UqLohAfWsEGkULYxHjYZg=='
      }
      {
        id: '60000000-0000-0000-0000-000000000004'
        labelReferenceInStreamingPolicy: 'cencDefaultKey'
        value: '4UqLohAfWsEGkULYxHjYZg=='
      }
      {
        id: '60000000-0000-0000-0000-000000000007'
        labelReferenceInStreamingPolicy: 'cbcsDefaultKey'
        value: '7UqLohAfWsEGkULYxHjYZg=='
      }
    ]
    streamingLocatorId: '90000000-0000-0000-0000-00000000000A'
    streamingPolicyName: 'secureStreamingPolicy'
  }
}
```

## microsoft.media/mediaservices/streamingpolicies

Creates a Streaming Policy with clear streaming
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    noEncryption: {
      enabledProtocols: {
        dash: true
        download: true
        hls: true
        smoothStreaming: true
      }
    }
  }
}
```

Creates a Streaming Policy with commonEncryptionCbcs only
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    commonEncryptionCbcs: {
      contentKeys: {
        defaultKey: {
          label: 'cbcsDefaultKey'
        }
      }
      drm: {
        fairPlay: {
          allowPersistentLicense: true
          customLicenseAcquisitionUrlTemplate: 'https://contoso.com/{AssetAlternativeId}/fairplay/{ContentKeyId}'
        }
      }
      enabledProtocols: {
        dash: false
        download: false
        hls: true
        smoothStreaming: false
      }
    }
    defaultContentKeyPolicyName: 'PolicyWithMultipleOptions'
  }
}
```

Creates a Streaming Policy with commonEncryptionCenc only
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    commonEncryptionCenc: {
      clearTracks: [
        {
          trackSelections: [
            {
              operation: 'Equal'
              property: 'FourCC'
              value: 'hev1'
            }
          ]
        }
      ]
      contentKeys: {
        defaultKey: {
          label: 'cencDefaultKey'
        }
      }
      drm: {
        playReady: {
          customLicenseAcquisitionUrlTemplate: 'https://contoso.com/{AssetAlternativeId}/playready/{ContentKeyId}'
          playReadyCustomAttributes: 'PlayReady CustomAttributes'
        }
        widevine: {
          customLicenseAcquisitionUrlTemplate: 'https://contoso.com/{AssetAlternativeId}/widevine/{ContentKeyId'
        }
      }
      enabledProtocols: {
        dash: true
        download: false
        hls: false
        smoothStreaming: true
      }
    }
    defaultContentKeyPolicyName: 'PolicyWithPlayReadyOptionAndOpenRestriction'
  }
}
```

Creates a Streaming Policy with envelopeEncryption only
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    defaultContentKeyPolicyName: 'PolicyWithClearKeyOptionAndTokenRestriction'
    envelopeEncryption: {
      contentKeys: {
        defaultKey: {
          label: 'aesDefaultKey'
        }
      }
      customKeyAcquisitionUrlTemplate: 'https://contoso.com/{AssetAlternativeId}/envelope/{ContentKeyId}'
      enabledProtocols: {
        dash: true
        download: false
        hls: true
        smoothStreaming: true
      }
    }
  }
}
```

Creates a Streaming Policy with secure streaming
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    commonEncryptionCbcs: {
      contentKeys: {
        defaultKey: {
          label: 'cbcsDefaultKey'
        }
      }
      drm: {
        fairPlay: {
          allowPersistentLicense: true
          customLicenseAcquisitionUrlTemplate: 'https://contoso.com/{AssetAlternativeId}/fairplay/{ContentKeyId}'
        }
      }
      enabledProtocols: {
        dash: false
        download: false
        hls: true
        smoothStreaming: false
      }
    }
    commonEncryptionCenc: {
      clearTracks: [
        {
          trackSelections: [
            {
              operation: 'Equal'
              property: 'FourCC'
              value: 'hev1'
            }
          ]
        }
      ]
      contentKeys: {
        defaultKey: {
          label: 'cencDefaultKey'
        }
      }
      drm: {
        playReady: {
          customLicenseAcquisitionUrlTemplate: 'https://contoso.com/{AssetAlternativeId}/playready/{ContentKeyId}'
          playReadyCustomAttributes: 'PlayReady CustomAttributes'
        }
        widevine: {
          customLicenseAcquisitionUrlTemplate: 'https://contoso.com/{AssetAlternativeId}/widevine/{ContentKeyId'
        }
      }
      enabledProtocols: {
        dash: true
        download: false
        hls: false
        smoothStreaming: true
      }
    }
    defaultContentKeyPolicyName: 'PolicyWithMultipleOptions'
    envelopeEncryption: {
      contentKeys: {
        defaultKey: {
          label: 'aesDefaultKey'
        }
      }
      customKeyAcquisitionUrlTemplate: 'https://contoso.com/{AssetAlternativeId}/envelope/{ContentKeyId}'
      enabledProtocols: {
        dash: true
        download: false
        hls: true
        smoothStreaming: true
      }
    }
  }
}
```

## microsoft.media/mediaservices/transforms

Create or update a Transform
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/transforms@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Transform to illustrate create and update.'
    outputs: [
      {
        preset: {
          '@odata.type': '#Microsoft.Media.BuiltInStandardEncoderPreset'
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
resource exampleResource 'Microsoft.Media/mediaServices/transforms/jobs@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    correlationData: {
      'Key 2': 'Value 2'
      key1: 'value1'
    }
    input: {
      '@odata.type': '#Microsoft.Media.JobInputAsset'
      assetName: 'job1-InputAsset'
    }
    outputs: [
      {
        '@odata.type': '#Microsoft.Media.JobOutputAsset'
        assetName: 'job1-OutputAsset'
      }
    ]
  }
}
```