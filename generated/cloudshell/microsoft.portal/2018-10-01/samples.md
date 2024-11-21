# Microsoft.Portal
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.portal/consoles

PutConsole
```bicep
resource exampleResource 'Microsoft.Portal/consoles@2018-10-01' = {
  name: 'example'
  properties: {
    osType: 'Linux'
  }
}
```

## microsoft.portal/locations/usersettings

PutUserSettings
```bicep
resource exampleResource 'Microsoft.Portal/locations/userSettings@2018-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    preferredLocation: 'eastus'
    preferredOsType: 'Linux'
    preferredShellType: 'bash'
    storageProfile: {
      diskSizeInGB: 5
      fileShareName: 'string'
      storageAccountResourceId: 'string'
    }
    terminalSettings: {
      fontSize: 'Medium'
      fontStyle: 'Monospace'
    }
  }
}
```

## microsoft.portal/usersettings

PutUserSettings
```bicep
resource exampleResource 'Microsoft.Portal/userSettings@2018-10-01' = {
  name: 'example'
  properties: {
    preferredLocation: 'eastus'
    preferredOsType: 'Linux'
    preferredShellType: 'bash'
    storageProfile: {
      diskSizeInGB: 5
      fileShareName: 'string'
      storageAccountResourceId: 'string'
    }
    terminalSettings: {
      fontSize: 'Medium'
      fontStyle: 'Monospace'
    }
  }
}
```
