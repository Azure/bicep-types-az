# Microsoft.AzureStackHCI
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azurestackhci/clusters

Create cluster
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters@2021-09-01-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    aadClientId: '24a6e53d-04e5-44d2-b7cc-1b732a847dfc'
    aadTenantId: '7e589cc1-a8b6-4dff-91bd-5ec0fa18db94'
    cloudManagementEndpoint: 'https://98294836-31be-4668-aeae-698667faf99b.waconazure.com'
  }
}
```

## microsoft.azurestackhci/clusters/arcsettings

Create ArcSetting
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters/arcSettings@2021-09-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.azurestackhci/clusters/arcsettings/extensions

Create Arc Extension
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2021-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    extensionParameters: {
      type: 'MicrosoftMonitoringAgent'
      protectedSettings: {
        workspaceKey: 'xx'
      }
      publisher: 'Microsoft.Compute'
      settings: {
        workspaceId: 'xx'
      }
      typeHandlerVersion: '1.10'
    }
  }
}
```
