# Microsoft.StorSimple

## microsoft.storsimple/managers

ManagersCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers@2017-06-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    cisIntrinsicSettings: {
      type: 'GardaV1'
    }
    sku: {
      name: 'Standard'
    }
  }
}
```

## microsoft.storsimple/managers/extendedinformation

ManagersCreateExtendedInfo
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/extendedInformation@2017-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    algorithm: 'None'
    integrityKey: 'BIl+RHqO8PZ6DRvuXTTK7g=='
  }
}
```

## microsoft.storsimple/managers/accesscontrolrecords

AccessControlRecordsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/accessControlRecords@2017-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    initiatorName: 'iqn.2017-06.com.contoso:ForTest'
  }
}
```

## microsoft.storsimple/managers/bandwidthsettings

BandwidthSettingsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/bandwidthSettings@2017-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    schedules: [
      {
        days: [
          'Saturday'
          'Sunday'
        ]
        rateInMbps: 10
        start: {
          hours: 10
          minutes: 0
          seconds: 0
        }
        stop: {
          hours: 20
          minutes: 0
          seconds: 0
        }
      }
    ]
  }
}
```

## microsoft.storsimple/managers/devices/alertsettings

DeviceSettingsCreateOrUpdateAlertSettings
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/alertSettings@2017-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    additionalRecipientEmailList: [
    ]
    alertNotificationCulture: 'en-US'
    emailNotification: 'Enabled'
    notificationToServiceOwners: 'Enabled'
  }
}
```

## microsoft.storsimple/managers/devices/timesettings

DeviceSettingsCreateOrUpdateTimeSettings
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/timeSettings@2017-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    primaryTimeServer: 'time.windows.com'
    secondaryTimeServer: [
      '8.8.8.8'
    ]
    timeZone: 'Pacific Standard Time'
  }
}
```

## microsoft.storsimple/managers/devices/backuppolicies

BackupPoliciesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/backupPolicies@2017-06-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'Series8000'
  properties: {
    volumeIds: [
      '/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/ManagerForSDKTest1/devices/Device05ForSDKTest/volumeContainers/volumeContainerForSDKTest/volumes/Clonedvolume1'
      '/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/ManagerForSDKTest1/devices/Device05ForSDKTest/volumeContainers/volumeContainerForSDKTest/volumes/volume1'
    ]
  }
}
```

## microsoft.storsimple/managers/devices/backuppolicies/schedules

BackupSchedulesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/backupPolicies/schedules@2017-06-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'Series8000'
  properties: {
    backupType: 'CloudSnapshot'
    retentionCount: 1
    scheduleRecurrence: {
      recurrenceType: 'Weekly'
      recurrenceValue: 1
      weeklyDaysList: [
        'Friday'
        'Thursday'
        'Monday'
      ]
    }
    scheduleStatus: 'Enabled'
    startTime: '2017-06-24T01:00:00Z'
  }
}
```

## microsoft.storsimple/managers/devices/volumecontainers

VolumeContainersCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/volumeContainers@2017-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    bandwidthSettingId: '/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/ManagerForSDKTest1/bandwidthSettings/bandwidthSetting1'
    encryptionKey: {
      encryptionAlgorithm: 'RSAES_PKCS1_v_1_5'
      encryptionCertThumbprint: 'A872A2DF196AC7682EE24791E7DE2E2A360F5926'
      value: 'R//pyVLx/fn58ia098JiLgZB5RY7fVT+6o8a4fmsvjy+ls2UgJphMf25XVqEQCZnsp/5uxteN1M/9ArPIICdhM7M1+b/Ur7kJ0FH0ktxfk7CrPWWJLI4q20LZoduJGI56lREav1VpuLdqw5F9fRcq7zbfgPQ3B/SD0mfumNRiV+AnwbC6msfavIuWrhVDl9iSzEPE+zU06/kpsexnrS81yYT2QlVVUbvpY4F3zfH8TQPpAROTbv2pld6JO4eGOrZ5O1iOr6XCg2TY2W/jf+Ev4z5tqC9VWXE5kh65gjBfpWN0bDWXKekqEhor2crHAxZi4dybdY8Ok1MDWd1CSU8kw=='
    }
    storageAccountCredentialId: '/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/ManagerForSDKTest1/storageAccountCredentials/safortestrecording'
  }
}
```

## microsoft.storsimple/managers/devices/volumecontainers/volumes

VolumesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/volumeContainers/volumes@2017-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accessControlRecordIds: [
      '/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/ManagerForSDKTest1/accessControlRecords/ACR2'
    ]
    monitoringStatus: 'Enabled'
    sizeInBytes: 5368709120
    volumeStatus: 'Offline'
    volumeType: 'Tiered'
  }
}
```

## microsoft.storsimple/managers/storageaccountcredentials

StorageAccountCredentialsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/storageAccountCredentials@2017-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accessKey: {
      encryptionAlgorithm: 'RSAES_PKCS1_v_1_5'
      encryptionCertThumbprint: 'A872A2DF196AC7682EE24791E7DE2E2A360F5926'
      value: 'ATuJSkmrFk4h8r1jrZ4nd3nthLSddcguEO5QLO/NECUtTuB9kL4dNv3/jC4WOvFkeVr3x1UvfhlIeMmJBF1SMr6hR1JzD0xNU/TtQqUeXN7V3jk7I+2l67P9StuHWR6OMd3XOLwvznxOEQtEWpweDiobZU1ZiY03WafcGZFpV5j6tEoHeopoZ1J/GhPtkYmx+TqxzUN6qnir5rP3NSYiZciImP/qu8U9yUV/xpVRv39KvFc2Yr5SpKpMMRUj55XW10UnPer63M6KovF8X9Wi/fNnrZAs1Esl5XddZETGrW/e5B++VMJ6w0Q/uvPR+UBwrOU0804l0SzwdIe3qVVd0Q=='
    }
    endPoint: 'blob.core.windows.net'
    sslStatus: 'Enabled'
  }
}
```
