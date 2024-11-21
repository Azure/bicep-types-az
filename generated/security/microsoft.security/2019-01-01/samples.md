# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/advancedthreatprotectionsettings

Creates or updates the Advanced Threat Protection settings on a specified resource.
```bicep
resource exampleResource 'Microsoft.Security/advancedThreatProtectionSettings@2019-01-01' = {
  name: 'example'
  name: 'current'
  type: 'Microsoft.Security/advancedThreatProtectionSettings'
  id: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/SampleRG/providers/Microsoft.Storage/storageAccounts/samplestorageaccount/providers/Microsoft.Security/advancedThreatProtectionSettings/current'
  properties: {
    isEnabled: true
  }
}
```

## microsoft.security/settings

Update a setting for subscription
```bicep
resource exampleResource 'Microsoft.Security/settings@2019-01-01' = {
  name: 'example'
  kind: 'DataExportSettings'
  properties: {
    enabled: true
  }
}
```
