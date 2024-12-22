# Microsoft.Automanage
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.automanage/configurationprofileassignments

Create or update configuration profile assignment
```bicep
resource exampleResource 'Microsoft.Automanage/configurationProfileAssignments@2022-05-04' = {
  name: 'example'
  properties: {
    configurationProfile: '/providers/Microsoft.Automanage/bestPractices/AzureBestPracticesProduction'
  }
}
```

## microsoft.automanage/configurationprofiles

Create or update configuration profile
```bicep
resource exampleResource 'Microsoft.Automanage/configurationProfiles@2022-05-04' = {
  name: 'example'
  location: 'East US'
  properties: {
    configuration: {
      'Antimalware/Enable': false
      'AzureSecurityCenter/Enable': true
      'Backup/Enable': false
      'BootDiagnostics/Enable': true
      'ChangeTrackingAndInventory/Enable': true
      'GuestConfiguration/Enable': true
      'LogAnalytics/Enable': true
      'UpdateManagement/Enable': true
      'VMInsights/Enable': true
    }
  }
  tags: {
    Organization: 'Administration'
  }
}
```

## microsoft.automanage/configurationprofiles/versions

Create or update configuration profile version
```bicep
resource exampleResource 'Microsoft.Automanage/configurationProfiles/versions@2022-05-04' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    configuration: {
      'Antimalware/Enable': false
      'AzureSecurityCenter/Enable': true
      'Backup/Enable': false
      'BootDiagnostics/Enable': true
      'ChangeTrackingAndInventory/Enable': true
      'GuestConfiguration/Enable': true
      'LogAnalytics/Enable': true
      'UpdateManagement/Enable': true
      'VMInsights/Enable': true
    }
  }
  tags: {
    Organization: 'Administration'
  }
}
```
