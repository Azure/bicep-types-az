# Microsoft.DataBoxEdge

## microsoft.databoxedge/databoxedgedevices

DataBoxEdgeDevicePut
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices@2021-06-01' = {
  name: 'example'
  location: 'WUS'
  sku: {
    name: 'Edge'
    tier: 'Standard'
  }
  tags: {
  }
}
```

DataBoxEdgeDevicePutWithDataResidency
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices@2021-06-01' = {
  name: 'example'
  location: 'WUS'
  properties: {
    dataResidency: {
      type: 'ZoneReplication'
    }
  }
  sku: {
    name: 'Edge'
    tier: 'Standard'
  }
  tags: {
  }
}
```

## microsoft.databoxedge/databoxedgedevices/bandwidthschedules

BandwidthSchedulePut
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    days: [
      'Sunday'
      'Monday'
    ]
    rateInMbps: 100
    start: '0:0:0'
    stop: '13:59:0'
  }
}
```

## microsoft.databoxedge/databoxedgedevices/diagnosticproactivelogcollectionsettings

UpdateDiagnosticProactiveLogCollectionSettings
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    userConsent: 'Enabled'
  }
}
```

## microsoft.databoxedge/databoxedgedevices/diagnosticremotesupportsettings

UpdateDiagnosticRemoteSupportSettings
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    remoteSupportSettingsList: [
      {
        accessLevel: 'ReadWrite'
        expirationTimeStampInUTC: '2021-07-07T00:00:00+00:00'
        remoteApplicationType: 'Powershell'
      }
    ]
  }
}
```

## microsoft.databoxedge/databoxedgedevices/orders

OrderPut
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contactInformation: {
      companyName: 'Microsoft'
      contactPerson: 'John Mcclane'
      emailList: [
        'john@microsoft.com'
      ]
      phone: '(800) 426-9400'
    }
    shippingAddress: {
      addressLine1: 'Microsoft Corporation'
      addressLine2: 'One Microsoft Way'
      addressLine3: 'Redmond'
      city: 'WA'
      country: 'USA'
      postalCode: '98052'
      state: 'WA'
    }
  }
}
```

## microsoft.databoxedge/databoxedgedevices/roles

RolePut
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'IOT'
  properties: {
    hostPlatform: 'Linux'
    ioTDeviceDetails: {
      authentication: {
        symmetricKey: {
          connectionString: {
            encryptionAlgorithm: 'AES256'
            encryptionCertThumbprint: '348586569999244'
            value: 'Encrypted<<HostName=iothub.azure-devices.net;DeviceId=iotDevice;SharedAccessKey=2C750FscEas3JmQ8Bnui5yQWZPyml0/UiRt1bQwd8=>>'
          }
        }
      }
      deviceId: 'iotdevice'
      ioTHostHub: 'iothub.azure-devices.net'
    }
    ioTEdgeDeviceDetails: {
      authentication: {
        symmetricKey: {
          connectionString: {
            encryptionAlgorithm: 'AES256'
            encryptionCertThumbprint: '1245475856069999244'
            value: 'Encrypted<<HostName=iothub.azure-devices.net;DeviceId=iotEdge;SharedAccessKey=2C750FscEas3JmQ8Bnui5yQWZPyml0/UiRt1bQwd8=>>'
          }
        }
      }
      deviceId: 'iotEdge'
      ioTHostHub: 'iothub.azure-devices.net'
    }
    roleStatus: 'Enabled'
    shareMappings: [
    ]
  }
}
```

## microsoft.databoxedge/databoxedgedevices/roles/addons

PutAddOns
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'ArcForKubernetes'
  properties: {
    resourceGroupName: 'GroupForEdgeAutomation'
    resourceLocation: 'EastUS'
    resourceName: 'testedgedevice'
    subscriptionId: '4385cf00-2d3a-425a-832f-f4285b1c9dce'
  }
}
```

## microsoft.databoxedge/databoxedgedevices/roles/monitoringconfig

PutMonitoringConfig
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metricConfigurations: [
      {
        counterSets: [
          {
            counters: [
              {
                name: 'test'
              }
            ]
          }
        ]
        mdmAccount: 'test'
        metricNameSpace: 'test'
        resourceId: 'test'
      }
    ]
  }
}
```

## microsoft.databoxedge/databoxedgedevices/shares

SharePut
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: ''
    accessProtocol: 'SMB'
    azureContainerInfo: {
      containerName: 'testContainerSMB'
      dataFormat: 'BlockBlob'
      storageAccountCredentialId: '/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/GroupForEdgeAutomation/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/testedgedevice/storageAccountCredentials/sac1'
    }
    dataPolicy: 'Cloud'
    monitoringStatus: 'Enabled'
    shareStatus: 'Online'
    userAccessRights: [
      {
        accessType: 'Change'
        userId: '/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/GroupForEdgeAutomation/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/testedgedevice/users/user2'
      }
    ]
  }
}
```

## microsoft.databoxedge/databoxedgedevices/storageaccountcredentials

SACPut
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accountKey: {
      encryptionAlgorithm: 'AES256'
      encryptionCertThumbprint: '2A9D8D6BE51574B5461230AEF02F162C5F01AD31'
      value: 'lAeZEYi6rNP1/EyNaVUYmTSZEYyaIaWmwUsGwek0+xiZj54GM9Ue9/UA2ed/ClC03wuSit2XzM/cLRU5eYiFBwks23rGwiQOr3sruEL2a74EjPD050xYjA6M1I2hu/w2yjVHhn5j+DbXS4Xzi+rHHNZK3DgfDO3PkbECjPck+PbpSBjy9+6Mrjcld5DIZhUAeMlMHrFlg+WKRKB14o/og56u5/xX6WKlrMLEQ+y6E18dUwvWs2elTNoVO8PBE8SM/CfooX4AMNvaNdSObNBPdP+F6Lzc556nFNWXrBLRt0vC7s9qTiVRO4x/qCNaK/B4y7IqXMllwQFf4Np9UQ2ECA=='
    }
    accountType: 'BlobStorage'
    alias: 'sac1'
    sslStatus: 'Disabled'
    userName: 'cisbvt'
  }
}
```

## microsoft.databoxedge/databoxedgedevices/storageaccounts

StorageAccountPut
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'It\'s an awesome storage account'
    dataPolicy: 'Cloud'
    storageAccountCredentialId: '/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/GroupForDataBoxEdgeAutomation/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/testedgedevice/storageAccountCredentials/cisbvt'
    storageAccountStatus: 'OK'
  }
}
```

## microsoft.databoxedge/databoxedgedevices/storageaccounts/containers

ContainerPut
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataFormat: 'BlockBlob'
  }
}
```

## microsoft.databoxedge/databoxedgedevices/triggers

TriggerPut
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'FileEvent'
  properties: {
    customContextTag: 'CustomContextTags-1235346475'
    sinkInfo: {
      roleId: '/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/GroupForEdgeAutomation/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/testedgedevice/roles/role1'
    }
    sourceInfo: {
      shareId: '/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/GroupForEdgeAutomation/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/testedgedevice/shares/share1'
    }
  }
}
```

## microsoft.databoxedge/databoxedgedevices/users

UserPut
```bicep
resource exampleResource 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    encryptedPassword: {
      encryptionAlgorithm: 'None'
      encryptionCertThumbprint: 'blah'
      value: '<value>'
    }
    userType: 'Share'
  }
}
```
