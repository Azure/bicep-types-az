# Microsoft.Maintenance
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.maintenance/applyupdates

ApplyUpdates_CreateOrUpdateOnly_NoCancellation
```bicep
resource exampleResource 'Microsoft.Maintenance/applyUpdates@2023-10-01-preview' = {
  name: 'example'
}
```

ApplyUpdates_CreateOrUpdateOrCancel
```bicep
resource exampleResource 'Microsoft.Maintenance/applyUpdates@2023-10-01-preview' = {
  name: 'example'
  properties: {
    status: 'Cancel'
  }
}
```

## microsoft.maintenance/configurationassignments

ConfigurationAssignmentsForSubscriptions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Maintenance/configurationAssignments@2023-10-01-preview' = {
  name: 'example'
  properties: {
    filter: {
      locations: [
        'Japan East'
        'UK South'
      ]
      resourceGroups: [
        'RG1'
        'RG2'
      ]
      resourceTypes: [
        'Microsoft.HybridCompute/machines'
        'Microsoft.Compute/virtualMachines'
      ]
      tagSettings: {
        filterOperator: 'Any'
        tags: {
          tag1: [
            'tag1Value1'
            'tag1Value2'
            'tag1Value3'
          ]
          tag2: [
            'tag2Value1'
            'tag2Value2'
            'tag2Value3'
          ]
        }
      }
    }
    maintenanceConfigurationId: '/subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourcegroups/examplerg/providers/Microsoft.Maintenance/maintenanceConfigurations/configuration1'
  }
}
```

## microsoft.maintenance/maintenanceconfigurations

MaintenanceConfigurations_CreateOrUpdateForResource
```bicep
resource exampleResource 'Microsoft.Maintenance/maintenanceConfigurations@2023-10-01-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    maintenanceScope: 'OSImage'
    maintenanceWindow: {
      duration: '05:00'
      expirationDateTime: '9999-12-31 00:00'
      recurEvery: 'Day'
      startDateTime: '2020-04-30 08:00'
      timeZone: 'Pacific Standard Time'
    }
    namespace: 'Microsoft.Maintenance'
    visibility: 'Custom'
  }
}
```
