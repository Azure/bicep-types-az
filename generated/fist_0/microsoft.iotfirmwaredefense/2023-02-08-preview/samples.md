# Microsoft.IoTFirmwareDefense
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.iotfirmwaredefense/workspaces

Workspaces_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.IoTFirmwareDefense/workspaces@2023-02-08-preview' = {
  name: 'example'
  location: 'jjwbseilitjgdrhbvvkwviqj'
  properties: {
  }
  tags: {
    key450: 'rzqqumbpfsbibnpirsm'
  }
}
```

Workspaces_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.IoTFirmwareDefense/workspaces@2023-02-08-preview' = {
  name: 'example'
  location: 'jjwbseilitjgdrhbvvkwviqj'
}
```

## microsoft.iotfirmwaredefense/workspaces/firmwares

Firmware_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'uz'
    fileName: 'wresexxulcdsdd'
    fileSize: 17
    model: 'f'
    status: 'Pending'
    statusMessages: [
      {
        message: 'ulvhmhokezathzzauiitu'
      }
    ]
    vendor: 'vycmdhgtmepcptyoubztiuudpkcpd'
    version: 's'
  }
}
```

Firmware_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview' = {
  parent: parentResource 
  name: 'example'
}
```
