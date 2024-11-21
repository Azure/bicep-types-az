# Microsoft.Automanage
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.automanage/accounts

Create or update Automanage account
```bicep
resource exampleResource 'Microsoft.Automanage/accounts@2020-06-30-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'East US'
  tags: {
    Organization: 'Administration'
  }
}
```

## microsoft.automanage/configurationprofileassignments

Create or update configuration profile assignment
```bicep
resource exampleResource 'Microsoft.Automanage/configurationProfileAssignments@2020-06-30-preview' = {
  name: 'example'
  properties: {
    accountId: '/subscriptions/subid/resourceGroups/rg/providers/Microsoft.Automanage/accounts/AutomanageAccount'
    configurationProfile: 'Azure virtual machine best practices – Production'
    configurationProfilePreferenceId: '/subscriptions/subscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.Automanage/configurationProfilePreferences/defaultProfilePreference'
  }
}
```

## microsoft.automanage/configurationprofilepreferences

Create or update configuration profile preference
```bicep
resource exampleResource 'Microsoft.Automanage/configurationProfilePreferences@2020-06-30-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    antiMalware: {
      enableRealTimeProtection: 'True'
    }
    vmBackup: {
      timeZone: 'Pacific Standard Time'
    }
  }
  tags: {
    Organization: 'Administration'
  }
}
```
