# Microsoft.StorageSync
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storagesync/storagesyncservices

StorageSyncServices_Create
```bicep
resource exampleResource 'Microsoft.StorageSync/storageSyncServices@2022-09-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
  }
  location: 'WestUS'
  properties: {
    incomingTrafficPolicy: 'AllowAllTraffic'
  }
  tags: {
  }
}
```

## microsoft.storagesync/storagesyncservices/privateendpointconnections

PrivateEndpointConnections_Create
```bicep
resource exampleResource 'Microsoft.StorageSync/storageSyncServices/privateEndpointConnections@2022-09-01' = {
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

## microsoft.storagesync/storagesyncservices/registeredservers

RegisteredServers_Create
```bicep
resource exampleResource 'Microsoft.StorageSync/storageSyncServices/registeredServers@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    agentVersion: '1.0.277.0'
    applicationId: '00000000-0000-0000-0000-000000000001'
    friendlyName: 'afscv-2304-139'
    identity: true
    serverCertificate: 'MIIDFjCCAf6gAwIBAgIQQS+DS8uhc4VNzUkTw7wbRjANBgkqhkiG9w0BAQ0FADAzMTEwLwYDVQQDEyhhbmt1c2hiLXByb2QzLnJlZG1vbmQuY29ycC5taWNyb3NvZnQuY29tMB4XDTE3MDgwMzE3MDQyNFoXDTE4MDgwNDE3MDQyNFowMzExMC8GA1UEAxMoYW5rdXNoYi1wcm9kMy5yZWRtb25kLmNvcnAubWljcm9zb2Z0LmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALDRvV4gmsIy6jGDPiHsXmvgVP749NNP7DopdlbHaNhjFmYINHl0uWylyaZmgJrROt2mnxN/zEyJtGnqYHlzUr4xvGq/qV5pqgdB9tag/sw9i22gfe9PRZ0FmSOZnXMbLYgLiDFqLtut5gHcOuWMj03YnkfoBEKlFBxWbagvW2yxz/Sxi9OVSJOKCaXra0RpcIHrO/KFl6ho2eE1/7Ykmfa8hZvSdoPd5gHdLiQcMB/pxq+mWp1fI6c8vFZoDu7Atn+NXTzYPKUxKzaisF12TsaKpohUsJpbB3Wocb0F5frn614D2pg14ERB5otjAMWw1m65csQWPI6dP8KIYe0+QPkCAwEAAaMmMCQwIgYDVR0lAQH/BBgwFgYIKwYBBQUHAwIGCisGAQQBgjcKAwwwDQYJKoZIhvcNAQENBQADggEBAA4RhVIBkw34M1RwakJgHvtjsOFxF1tVQA941NtLokx1l2Z8+GFQkcG4xpZSt+UN6wLerdCbnNhtkCErWUDeaT0jxk4g71Ofex7iM04crT4iHJr8mi96/XnhnkTUs+GDk12VgdeeNEczMZz+8Mxw9dJ5NCnYgTwO0SzGlclRsDvjzkLo8rh2ZG6n/jKrEyNXXo+hOqhupij0QbRP2Tvexdfw201kgN1jdZify8XzJ8Oi0bTS0KpJf2pNPOlooK2bjMUei9ANtEdXwwfVZGWvVh6tJjdv6k14wWWJ1L7zhA1IIVb1J+sQUzJji5iX0DrezjTz1Fg+gAzITaA/WsuujlM='
    serverId: '080d4133-bdb5-40a0-96a0-71a6057bfe9a'
    serverOSVersion: '10.0.14393.0'
    serverRole: 'Standalone'
  }
}
```

## microsoft.storagesync/storagesyncservices/syncgroups

SyncGroups_Create
```bicep
resource exampleResource 'Microsoft.StorageSync/storageSyncServices/syncGroups@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.storagesync/storagesyncservices/syncgroups/cloudendpoints

CloudEndpoints_Create
```bicep
resource exampleResource 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    azureFileShareName: 'cvcloud-afscv-0719-058-a94a1354-a1fd-4e9a-9a50-919fad8c4ba4'
    friendlyName: 'ankushbsubscriptionmgmtmab'
    storageAccountResourceId: '/subscriptions/744f4d70-6d17-4921-8970-a765d14f763f/resourceGroups/tminienv59svc/providers/Microsoft.Storage/storageAccounts/tminienv59storage'
    storageAccountTenantId: '"72f988bf-86f1-41af-91ab-2d7cd011db47"'
  }
}
```

## microsoft.storagesync/storagesyncservices/syncgroups/serverendpoints

ServerEndpoints_Create
```bicep
resource exampleResource 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cloudTiering: 'off'
    initialDownloadPolicy: 'NamespaceThenModifiedFiles'
    initialUploadPolicy: 'ServerAuthoritative'
    localCacheMode: 'UpdateLocallyCachedFiles'
    offlineDataTransfer: 'on'
    offlineDataTransferShareName: 'myfileshare'
    serverLocalPath: 'D:\\SampleServerEndpoint_1'
    serverResourceId: '/subscriptions/52b8da2f-61e0-4a1f-8dde-336911f367fb/resourceGroups/SampleResourceGroup_1/providers/Microsoft.StorageSync/storageSyncServices/SampleStorageSyncService_1/registeredServers/080d4133-bdb5-40a0-96a0-71a6057bfe9a'
    tierFilesOlderThanDays: 0
    volumeFreeSpacePercent: 100
  }
}
```
