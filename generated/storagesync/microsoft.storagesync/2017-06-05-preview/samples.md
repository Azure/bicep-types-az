# Microsoft.StorageSync

## microsoft.storagesync/storagesyncservices

StorageSyncServices_Create
```bicep
resource exampleResource 'Microsoft.StorageSync/storageSyncServices@2017-06-05-preview' = {
  name: 'example'
  type: 'Microsoft.StorageSync/storageSyncServices'
  location: 'WestUS'
  tags: {
  }
}
```

## microsoft.storagesync/storagesyncservices/syncgroups

SyncGroups_Create
```bicep
resource exampleResource 'Microsoft.StorageSync/storageSyncServices/syncGroups@2017-06-05-preview' = {
  parent: parentResource 
  name: 'example'
  type: 'Microsoft.StorageSync/storageSyncServices/syncGroups'
}
```

## microsoft.storagesync/storagesyncservices/syncgroups/cloudendpoints

CloudEndpoints_Create
```bicep
resource exampleResource 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2017-06-05-preview' = {
  parent: parentResource 
  name: 'example'
  type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints'
  properties: {
    provisioningState: 'Created'
    storageAccount: 'https://storageaccounturl/SampleCloudEndpoint'
    storageAccountKey: 'storageaccountkeyvalue'
    storageAccountResourceId: ''
    storageAccountShareName: ''
    storageAccountTenantId: '"a4d1b191-c1af-4cef-a14b-f670e0beea52"'
  }
}
```

## microsoft.storagesync/storagesyncservices/syncgroups/serverendpoints

ServerEndpoints_Create
```bicep
resource exampleResource 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2017-06-05-preview' = {
  parent: parentResource 
  name: 'example'
  type: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints'
  properties: {
    cloudTiering: 'off'
    provisioningState: 'Created'
    serverLocalPath: 'D:\\SampleServerEndpoint_1'
    serverResourceId: '/subscriptions/3a048283-338f-4002-a9dd-a50fdadcb392/resourceGroups/SampleResourceGroup_1/providers/Microsoft.StorageSync/storageSyncServices/SampleStorageSyncServer_1/registeredServers/080d4133-bdb5-40a0-96a0-71a6057bfe9a'
    volumeFreeSpacePercent: 100
  }
}
```

## microsoft.storagesync/storagesyncservices/registeredservers

RegisteredServers_Create
```bicep
resource exampleResource 'Microsoft.StorageSync/storageSyncServices/registeredServers@2017-06-05-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'SampleServer-prod3.redmond.corp.microsoft.com'
  type: 'Microsoft.StorageSync/storageSyncServices/registeredServers'
  properties: {
    agentVersion: '1.0.277.0'
    lastHeartBeat: '"2017-08-08T18:29:06.470652Z"'
    provisioningState: 'Created'
    serverCertificate: '"MIIDFjCCAf6gAwIBAgIQQS+DS8uhc4VNzUkTw7wbRjANBgkqhkiG9w0BAQ0FADAzMTEwLwYDVQQDEyhhbmt1c2hiLXByb2QzLnJlZG1vbmQuY29ycC5taWNyb3NvZnQuY29tMB4XDTE3MDgwMzE3MDQyNFoXDTE4MDgwNDE3MDQyNFowMzExMC8GA1UEAxMoYW5rdXNoYi1wcm9kMy5yZWRtb25kLmNvcnAubWljcm9zb2Z0LmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALDRvV4gmsIy6jGDPiHsXmvgVP749NNP7DopdlbHaNhjFmYINHl0uWylyaZmgJrROt2mnxN/zEyJtGnqYHlzUr4xvGq/qV5pqgdB9tag/sw9i22gfe9PRZ0FmSOZnXMbLYgLiDFqLtut5gHcOuWMj03YnkfoBEKlFBxWbagvW2yxz/Sxi9OVSJOKCaXra0RpcIHrO/KFl6ho2eE1/7Ykmfa8hZvSdoPd5gHdLiQcMB/pxq+mWp1fI6c8vFZoDu7Atn+NXTzYPKUxKzaisF12TsaKpohUsJpbB3Wocb0F5frn614D2pg14ERB5otjAMWw1m65csQWPI6dP8KIYe0+QPkCAwEAAaMmMCQwIgYDVR0lAQH/BBgwFgYIKwYBBQUHAwIGCisGAQQBgjcKAwwwDQYJKoZIhvcNAQENBQADggEBAA4RhVIBkw34M1RwakJgHvtjsOFxF1tVQA941NtLokx1l2Z8+GFQkcG4xpZSt+UN6wLerdCbnNhtkCErWUDeaT0jxk4g71Ofex7iM04crT4iHJr8mi96/XnhnkTUs+GDk12VgdeeNEczMZz+8Mxw9dJ5NCnYgTwO0SzGlclRsDvjzkLo8rh2ZG6n/jKrEyNXXo+hOqhupij0QbRP2Tvexdfw201kgN1jdZify8XzJ8Oi0bTS0KpJf2pNPOlooK2bjMUei9ANtEdXwwfVZGWvVh6tJjdv6k14wWWJ1L7zhA1IIVb1J+sQUzJji5iX0DrezjTz1Fg+gAzITaA/WsuujlM="'
    serverManagementtErrorCode: 0
    serverOSVersion: '10.0.14393.0'
    serverRole: 'Standalone'
  }
}
```
