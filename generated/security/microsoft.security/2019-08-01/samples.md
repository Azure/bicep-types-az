# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/devicesecuritygroups

Create or update a device security group for the specified IoT hub resource
```bicep
resource exampleResource 'Microsoft.Security/deviceSecurityGroups@2019-08-01' = {
  name: 'example'
  properties: {
    timeWindowRules: [
      {
        isEnabled: true
        maxThreshold: 30
        minThreshold: 0
        ruleType: 'ActiveConnectionsNotInAllowedRange'
        timeWindowSize: 'PT05M'
      }
    ]
  }
}
```

## microsoft.security/iotsecuritysolutions

Create or update a IoT security solution
```bicep
resource exampleResource 'Microsoft.Security/iotSecuritySolutions@2019-08-01' = {
  name: 'example'
  location: 'East Us'
  properties: {
    disabledDataSources: [
    ]
    displayName: 'Solution Default'
    export: [
    ]
    iotHubs: [
      '/subscriptions/075423e9-7d33-4166-8bdf-3920b04e3735/resourceGroups/myRg/providers/Microsoft.Devices/IotHubs/FirstIotHub'
    ]
    recommendationsConfiguration: [
      {
        recommendationType: 'IoT_OpenPorts'
        status: 'Disabled'
      }
      {
        recommendationType: 'IoT_SharedCredentials'
        status: 'Disabled'
      }
    ]
    status: 'Enabled'
    unmaskedIpLoggingStatus: 'Enabled'
    userDefinedResources: {
      query: 'where type != "microsoft.devices/iothubs" | where name contains "iot"'
      querySubscriptions: [
        '075423e9-7d33-4166-8bdf-3920b04e3735'
      ]
    }
    workspace: '/subscriptions/c4930e90-cd72-4aa5-93e9-2d081d129569/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace1'
  }
  tags: {
  }
}
```
