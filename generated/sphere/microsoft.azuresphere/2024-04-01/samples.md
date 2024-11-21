# Microsoft.AzureSphere

## microsoft.azuresphere/catalogs

Catalogs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AzureSphere/catalogs@2024-04-01' = {
  name: 'example'
  location: 'global'
}
```

## microsoft.azuresphere/catalogs/images

Image_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AzureSphere/catalogs/images@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    image: 'bXliYXNlNjRzdHJpbmc='
  }
}
```

## microsoft.azuresphere/catalogs/products

Products_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AzureSphere/catalogs/products@2024-04-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.azuresphere/catalogs/products/devicegroups

DeviceGroups_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AzureSphere/catalogs/products/deviceGroups@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Description for MyDeviceGroup1'
    osFeedType: 'Retail'
    updatePolicy: 'UpdateAll'
  }
}
```

## microsoft.azuresphere/catalogs/products/devicegroups/deployments

Deployments_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AzureSphere/catalogs/products/deviceGroups/deployments@2024-04-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.azuresphere/catalogs/products/devicegroups/devices

Devices_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AzureSphere/catalogs/products/deviceGroups/devices@2024-04-01' = {
  parent: parentResource 
  name: 'example'
}
```
