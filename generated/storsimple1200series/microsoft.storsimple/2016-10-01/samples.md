# Microsoft.StorSimple

## microsoft.storsimple/managers/certificates

ManagersUploadRegistrationCertificate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/certificates@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  contractVersion: 'V2012_12'
  properties: {
    authType: 'AzureActiveDirectory'
    certificate: 'MIIC3TCCAcWgAwIBAgIQEr0bAWD6wJtA4LIbZ9NtgzANBgkqhkiG9w0BAQUFADAeMRwwGgYDVQQDExNXaW5kb3dzIEF6dXJlIFRvb2xzMB4XDTE4MDkxMDE1MzY0MFoXDTE4MDkxMzE1NDY0MFowHjEcMBoGA1UEAxMTV2luZG93cyBBenVyZSBUb29sczCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANUsKkz2Z4fECKMyNeLb9v3pr1XF4dVe+MITDtgphjl81ng190Y0IHgCVnh4YjfplUSpMk/1xii0rI5AAPwoz3ze2qRPtnwCiTaoVLkUe6knNRPzrRvVXHB81J0/14MO0lwdByHhdccRcVJZPLt5724t4aQny82v2AayJdDDkBBWNlpcqPy6n3sygP00THMPP0O3sFqy924eHqoDj3qSw79/meaZBJt9S5odPuFoskxjHuI4lM6BmK1Ql7p8Wo9/GhTOIoMz81orKPHRDleLjutwL4mb6NnhI5rfT/MxnHD6m82c4YYqiZC3XiTyJWVCkWkp7PK92OdRp6FA87rdKDMCAwEAAaMXMBUwEwYDVR0lBAwwCgYIKwYBBQUHAwIwDQYJKoZIhvcNAQEFBQADggEBAIYlezVU68TuEblkn06vM5dfzSmHKJOQgW61nDlLnyKrmSJtzKZLCAswTE2VyJHwKNdZgW15coJFINjWBLWcLr0/GjNV4u3Z+UL3NhBFQd5xuMtKsIhuoscKtyk0JHQXpBvHNmOUCobfQfOBQfTVC7kmyWdtlGztFUVxD28s6S5gMb1FEWWN68NOOJ3/ZhaTbUEM54yw8Hk8/f0L/Zn/7BYHUyWWA3KStAaYn89C/ZFF+952ark2VaKGIjBRQzgrJEIR8dI4r46I3DoEfzGPESKvQPvVLhOX84RG0PLPOtnRbHBVew1Nh3HE9kgCubkPKK+NPWE9IHZPoRmOTWBe+zU='
  }
}
```

## microsoft.storsimple/managers/accesscontrolrecords

AccessControlRecordsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/accessControlRecords@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'AcrForSDKTest'
  Client: {
    AcceptLanguage: 'en-US'
    BaseUri: 'https://management.azure.com/'
    GenerateClientRequestId: true
    LongRunningOperationRetryTimeout: 30
    SubscriptionId: '9eb689cd-7243-43b4-b6f6-5c65cb296641'
  }
  ManagerName: 'hAzureSDKOperations'
  ResourceGroupName: 'ResourceGroupForSDKTest'
  properties: {
    initiatorName: 'iqn.2017-06.com.contoso:ForTest'
  }
}
```

## microsoft.storsimple/managers/devices/alertsettings

DevicesCreateOrUpdateAlertSettings
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/alertSettings@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'default'
  properties: {
    additionalRecipientEmailList: [
      'testuser@abc.com'
    ]
    alertNotificationCulture: 'en-US'
    emailNotification: 'Enabled'
    notificationToServiceOwners: 'Disabled'
  }
}
```

## microsoft.storsimple/managers/devices/backupschedulegroups

BackupScheduleGroupsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/backupScheduleGroups@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'BackupSchGroupForSDKTest'
  Client: {
    AcceptLanguage: 'en-US'
    BaseUri: 'https://management.azure.com/'
    GenerateClientRequestId: true
    LongRunningOperationRetryTimeout: 30
    SubscriptionId: '9eb689cd-7243-43b4-b6f6-5c65cb296641'
  }
  ManagerName: 'hAzureSDKOperations'
  ResourceGroupName: 'ResourceGroupForSDKTest'
  properties: {
    startTime: {
      hour: 17
      minute: 38
    }
  }
}
```

## microsoft.storsimple/managers/devices/chapsettings

ChapSettingsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/chapSettings@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'ChapSettingForSDK'
  Client: {
    AcceptLanguage: 'en-US'
    BaseUri: 'https://management.azure.com/'
    GenerateClientRequestId: true
    LongRunningOperationRetryTimeout: 30
    SubscriptionId: '9eb689cd-7243-43b4-b6f6-5c65cb296641'
  }
  ManagerName: 'hAzureSDKOperations'
  ResourceGroupName: 'ResourceGroupForSDKTest'
  properties: {
    password: {
      encryptionAlgorithm: 'RSAES_PKCS1_v_1_5'
      encryptionCertificateThumbprint: 'D73DB57C4CDD6761E159F8D1E8A7D759424983FD'
      value: '<value>'
    }
  }
}
```

## microsoft.storsimple/managers/devices/iscsiservers/disks

IscsiDisksCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/iscsiservers/disks@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'Auto-TestIscsiDisk1'
  Client: {
    AcceptLanguage: 'en-US'
    BaseUri: 'https://management.azure.com/'
    GenerateClientRequestId: true
    LongRunningOperationRetryTimeout: 30
    SubscriptionId: '9eb689cd-7243-43b4-b6f6-5c65cb296641'
  }
  ManagerName: 'hAzureSDKOperations'
  ResourceGroupName: 'ResourceGroupForSDKTest'
  properties: {
    description: 'Demo IscsiDisk for SDK Test Tiered'
    accessControlRecords: [
    ]
    dataPolicy: 'Tiered'
    diskStatus: 'Online'
    monitoringStatus: 'Enabled'
    provisionedCapacityInBytes: 536870912000
  }
}
```

## microsoft.storsimple/managers/devices/fileservers

FileServersCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/fileservers@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'HSDK-4XY4FI2IVG'
  Client: {
    AcceptLanguage: 'en-US'
    BaseUri: 'https://management.azure.com/'
    GenerateClientRequestId: true
    LongRunningOperationRetryTimeout: 30
    SubscriptionId: '9eb689cd-7243-43b4-b6f6-5c65cb296641'
  }
  ManagerName: 'hAzureSDKOperations'
  ResourceGroupName: 'ResourceGroupForSDKTest'
  properties: {
    description: 'Demo FileServer for SDK Test'
    backupScheduleGroupId: '/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/devices/hsdk-4xy4fi2ivg/backupScheduleGroups/BackupSchGroupForSDKTest'
    domainName: 'fareast.corp.microsoft.com'
    storageDomainId: '/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/storageDomains/sd-fs-HSDK-4XY4FI2IVG'
  }
}
```

## microsoft.storsimple/managers/devices/fileservers/shares

FileSharesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/fileservers/shares@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'Auto-TestFileShare1'
  Client: {
    AcceptLanguage: 'en-US'
    BaseUri: 'https://management.azure.com/'
    GenerateClientRequestId: true
    LongRunningOperationRetryTimeout: 30
    SubscriptionId: '9eb689cd-7243-43b4-b6f6-5c65cb296641'
  }
  ManagerName: 'hAzureSDKOperations'
  ResourceGroupName: 'ResourceGroupForSDKTest'
  properties: {
    description: 'Demo FileShare for SDK Test Tiered'
    adminUser: 'fareast\\idcdlslb'
    dataPolicy: 'Tiered'
    monitoringStatus: 'Enabled'
    provisionedCapacityInBytes: 536870912000
    shareStatus: 'Online'
  }
}
```

## microsoft.storsimple/managers/devices/iscsiservers

IscsiServersCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/devices/iscsiservers@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'HSDK-WSJQERQW3F'
  type: 'Microsoft.StorSimple/managers/devices/iscsiServers'
  Client: {
    AcceptLanguage: 'en-US'
    BaseUri: 'https://management.azure.com/'
    GenerateClientRequestId: true
    LongRunningOperationRetryTimeout: 30
    SubscriptionId: '9eb689cd-7243-43b4-b6f6-5c65cb296641'
  }
  ManagerName: 'hAzureSDKOperations'
  ResourceGroupName: 'ResourceGroupForSDKTest'
  id: '/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/devices/HSDK-WSJQERQW3F/iscsiServers/HSDK-WSJQERQW3F'
  properties: {
    backupScheduleGroupId: '/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/devices/HSDK-WSJQERQW3F/backupScheduleGroups/Default-HSDK-WSJQERQW3F-BackupScheduleGroup'
    chapId: '/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/devices/HSDK-WSJQERQW3F/chapSettings/ChapSettingForSDK'
    reverseChapId: ''
    storageDomainId: '/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/storageDomains/Default-HSDK-WSJQERQW3F-StorageDomain'
  }
}
```

## microsoft.storsimple/managers/storageaccountcredentials

StorageAccountCredentialsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/storageAccountCredentials@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'DummySacForSDKTest'
  Client: {
    AcceptLanguage: 'en-US'
    BaseUri: 'https://management.azure.com/'
    GenerateClientRequestId: true
    LongRunningOperationRetryTimeout: 30
    SubscriptionId: '9eb689cd-7243-43b4-b6f6-5c65cb296641'
  }
  ManagerName: 'hAzureSDKOperations'
  ResourceGroupName: 'ResourceGroupForSDKTest'
  properties: {
    accessKey: {
      encryptionAlgorithm: 'RSAES_PKCS1_v_1_5'
      encryptionCertificateThumbprint: 'D73DB57C4CDD6761E159F8D1E8A7D759424983FD'
      value: 'Ev1tm0QBmpGGm4a58GkqLqx8veJEEgQtg5K3Jizpmy7JdSv9dlcRwk59THw6KIdMDlEHcS8mPyneBtOEQsh4wkcFB7qrmQz+KsRAyIhEm6bwPEm3qN8+aDDzNcXn/6vu/sqV0AP7zit9/s7SxXGxjKrz4zKnOy16/DbzRRmUHNO+HO6JUM0cUfHXTX0mEecbsXqBq0A8IEG8z+bJgXX1EhoGkzE6yVsObm4S1AcKrLiwWjqmSLji5Q8gGO+y4KTTmC3p45h5GHHXjJyOccHhySWDAffxnTzUD/sOoh+aD2VkAYrL3DdnkVzhAdfcZfVI4soONx7tYMloZIVsfW1M2Q=='
    }
    cloudType: 'Azure'
    enableSSL: 'Enabled'
    endPoint: 'blob.core.windows.net'
    location: 'West US'
    login: 'SacForSDKTest'
  }
}
```

## microsoft.storsimple/managers/storagedomains

StorageDomainsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorSimple/managers/storageDomains@2016-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'sd-fs-HSDK-4XY4FI2IVG'
  Client: {
    AcceptLanguage: 'en-US'
    BaseUri: 'https://management.azure.com/'
    GenerateClientRequestId: true
    LongRunningOperationRetryTimeout: 30
    SubscriptionId: '9eb689cd-7243-43b4-b6f6-5c65cb296641'
  }
  ManagerName: 'hAzureSDKOperations'
  ResourceGroupName: 'ResourceGroupForSDKTest'
  properties: {
    encryptionStatus: 'Disabled'
    storageAccountCredentialIds: [
      '/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/storageAccountCredentials/sacforsdktest'
    ]
  }
}
```
