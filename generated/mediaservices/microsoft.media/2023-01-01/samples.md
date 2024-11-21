# Microsoft.Media

## microsoft.media/mediaservices/accountfilters

Create an Account Filter
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/accountFilters@2023-01-01' = {
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

## microsoft.media/mediaservices

Create a Media Services account
```bicep
resource exampleResource 'Microsoft.Media/mediaservices@2023-01-01' = {
  name: 'example'
  location: 'South Central US'
  properties: {
    storageAccounts: [
      {
        type: 'Primary'
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contosorg/providers/Microsoft.Storage/storageAccounts/teststorageaccount'
      }
    ]
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

Create a Media Services account-managed-identity
```bicep
resource exampleResource 'Microsoft.Media/mediaservices@2023-01-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contosorg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1: {
      }
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contosorg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2: {
      }
    }
  }
  location: 'South Central US'
  properties: {
    encryption: {
      type: 'CustomerKey'
      identity: {
        useSystemAssignedIdentity: false
        userAssignedIdentity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contosorg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1'
      }
    }
    keyDelivery: {
      accessControl: {
        defaultAction: 'Allow'
      }
    }
    publicNetworkAccess: 'Enabled'
    storageAccounts: [
      {
        type: 'Primary'
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contosorg/providers/Microsoft.Storage/storageAccounts/contososportsstore'
        identity: {
          useSystemAssignedIdentity: false
          userAssignedIdentity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contosorg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1'
        }
      }
    ]
    storageAuthentication: 'ManagedIdentity'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.media/mediaservices/privateendpointconnections

Update private endpoint connection.
```bicep
resource exampleResource 'Microsoft.Media/mediaservices/privateEndpointConnections@2023-01-01' = {
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

## microsoft.media/mediaservices/assets

Create an Asset
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/assets@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A documentary showing the ascent of Mount Logan'
    storageAccountName: 'storage0'
  }
}
```

Create an Asset with encryption scope
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/assets@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A documentary showing the ascent of Mount Logan'
    encryptionScope: 'encryptionScope1'
    storageAccountName: 'storage0'
  }
}
```

## microsoft.media/mediaservices/assets/assetfilters

Create an Asset Filter
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/assets/assetFilters@2023-01-01' = {
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

## microsoft.media/mediaservices/assets/tracks

Creates a Track
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/assets/tracks@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    track: {
      @odata.type: '#Microsoft.Media.TextTrack'
      displayName: 'A new track'
      fileName: 'text3.ttml'
      playerVisibility: 'Visible'
    }
  }
}
```

## microsoft.media/mediaservices/contentkeypolicies

Creates a Content Key Policy with ClearKey option and Token Restriction
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/contentKeyPolicies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'ArmPolicyDescription'
    options: [
      {
        name: 'ClearKeyOption'
        configuration: {
          @odata.type: '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration'
        }
        restriction: {
          @odata.type: '#Microsoft.Media.ContentKeyPolicyTokenRestriction'
          audience: 'urn:audience'
          issuer: 'urn:issuer'
          primaryVerificationKey: {
            @odata.type: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey'
            keyValue: 'AAAAAAAAAAAAAAAAAAAAAA=='
          }
          restrictionTokenType: 'Swt'
        }
      }
    ]
  }
}
```

Creates a Content Key Policy with PlayReady option and Open Restriction
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/contentKeyPolicies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'ArmPolicyDescription'
    options: [
      {
        name: 'ArmPolicyOptionName'
        configuration: {
          @odata.type: '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration'
          licenses: [
            {
              allowTestDevices: true
              beginDate: '2017-10-16T18:22:53.46Z'
              contentKeyLocation: {
                @odata.type: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader'
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
              securityLevel: 'SL150'
            }
          ]
        }
        restriction: {
          @odata.type: '#Microsoft.Media.ContentKeyPolicyOpenRestriction'
        }
      }
    ]
  }
}
```

Creates a Content Key Policy with Widevine option and Token Restriction
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/contentKeyPolicies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'ArmPolicyDescription'
    options: [
      {
        name: 'widevineoption'
        configuration: {
          @odata.type: '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration'
          widevineTemplate: '{"allowed_track_types":"SD_HD","content_key_specs":[{"track_type":"SD","security_level":1,"required_output_protection":{"hdcp":"HDCP_V2"}}],"policy_overrides":{"can_play":true,"can_persist":true,"can_renew":false}}'
        }
        restriction: {
          @odata.type: '#Microsoft.Media.ContentKeyPolicyTokenRestriction'
          alternateVerificationKeys: [
            {
              @odata.type: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey'
              keyValue: 'AAAAAAAAAAAAAAAAAAAAAA=='
            }
          ]
          audience: 'urn:audience'
          issuer: 'urn:issuer'
          primaryVerificationKey: {
            @odata.type: '#Microsoft.Media.ContentKeyPolicyRsaTokenKey'
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

Creates a Content Key Policy with multiple options
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/contentKeyPolicies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'ArmPolicyDescription'
    options: [
      {
        name: 'ClearKeyOption'
        configuration: {
          @odata.type: '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration'
        }
        restriction: {
          @odata.type: '#Microsoft.Media.ContentKeyPolicyTokenRestriction'
          audience: 'urn:audience'
          issuer: 'urn:issuer'
          primaryVerificationKey: {
            @odata.type: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey'
            keyValue: 'AAAAAAAAAAAAAAAAAAAAAA=='
          }
          restrictionTokenType: 'Swt'
        }
      }
      {
        name: 'widevineoption'
        configuration: {
          @odata.type: '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration'
          widevineTemplate: '{"allowed_track_types":"SD_HD","content_key_specs":[{"track_type":"SD","security_level":1,"required_output_protection":{"hdcp":"HDCP_V2"}}],"policy_overrides":{"can_play":true,"can_persist":true,"can_renew":false}}'
        }
        restriction: {
          @odata.type: '#Microsoft.Media.ContentKeyPolicyOpenRestriction'
        }
      }
    ]
  }
}
```

## microsoft.media/mediaservices/streamingpolicies

Creates a Streaming Policy with ClearKey encryption in commonEncryptionCbcs.
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    commonEncryptionCbcs: {
      clearKeyEncryptionConfiguration: {
        customKeysAcquisitionUrlTemplate: 'https://contoso.com/{AlternativeMediaId}/clearkey/'
      }
      contentKeys: {
        defaultKey: {
          label: 'cbcsDefaultKey'
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

Creates a Streaming Policy with ClearKey encryption in commonEncryptionCenc.
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    commonEncryptionCenc: {
      clearKeyEncryptionConfiguration: {
        customKeysAcquisitionUrlTemplate: 'https://contoso.com/{AlternativeMediaId}/clearkey/'
      }
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

Creates a Streaming Policy with clear streaming
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2023-01-01' = {
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
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2023-01-01' = {
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
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2023-01-01' = {
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
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2023-01-01' = {
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
resource exampleResource 'Microsoft.Media/mediaServices/streamingPolicies@2023-01-01' = {
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

## microsoft.media/mediaservices/streaminglocators

Creates a Streaming Locator with clear streaming
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingLocators@2023-01-01' = {
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
resource exampleResource 'Microsoft.Media/mediaServices/streamingLocators@2023-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    assetName: 'ClimbingMountRainier'
    endTime: '2028-12-31T23:59:59.9999999Z'
    startTime: '2018-03-01T00:00:00Z'
    streamingPolicyName: 'UserCreatedSecureStreamingPolicy'
  }
}
```

Creates a Streaming Locator with user defined content keys
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/streamingLocators@2023-01-01' = {
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
