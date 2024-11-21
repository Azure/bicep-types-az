# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/sensitivitysettings

Update sensitivity settings
```bicep
resource exampleResource 'Microsoft.Security/sensitivitySettings@2023-02-15-preview' = {
  name: 'example'
  sensitiveInfoTypesIds: [
    'f2f8a7a1-28c0-404b-9ab4-30a0a7af18cb'
    'b452f22b-f87d-4f48-8490-ecf0873325b5'
    'd59ee8b6-2618-404b-a5e7-aa377cd67543'
  ]
  sensitivityThresholdLabelId: 'f2f8a7a1-28c0-404b-9ab4-30a0a7af18cb'
  sensitivityThresholdLabelOrder: 2
}
```
