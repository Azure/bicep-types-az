# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/advancedthreatprotectionsettings

Creates or updates the Advanced Threat Protection settings on a specified resource.
```bicep
resource exampleResource 'Microsoft.Security/advancedThreatProtectionSettings@2017-08-01-preview' = {
  name: 'example'
  name: 'current'
  type: 'Microsoft.Security/advancedThreatProtectionSettings'
  id: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/SampleRG/providers/Microsoft.Storage/storageAccounts/samplestorageaccount/providers/Microsoft.Security/advancedThreatProtectionSettings/current'
  properties: {
    isEnabled: true
  }
}
```

## microsoft.security/autoprovisioningsettings

Create auto provisioning settings for subscription
```bicep
resource exampleResource 'Microsoft.Security/autoProvisioningSettings@2017-08-01-preview' = {
  name: 'example'
  name: 'default'
  type: 'Microsoft.Security/autoProvisioningSettings'
  id: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/providers/Microsoft.Security/autoProvisioningSettings/default'
  properties: {
    autoProvision: 'On'
  }
}
```

## microsoft.security/devicesecuritygroups

Create or update a device security group for the specified IoT hub resource
```bicep
resource exampleResource 'Microsoft.Security/deviceSecurityGroups@2017-08-01-preview' = {
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

## microsoft.security/informationprotectionpolicies

Create or update an information protection policy for a management group
```bicep
resource exampleResource 'Microsoft.Security/informationProtectionPolicies@2017-08-01-preview' = {
  name: 'example'
  properties: {
    informationTypes: {
      '3bf35491-99b8-41f2-86d5-c1200a7df658': {
        custom: true
        displayName: 'Custom'
        enabled: true
        keywords: [
          {
            canBeNumeric: true
            custom: true
            pattern: '%custom%'
          }
        ]
        order: 1400
        recommendedLabelId: '7aa516c7-5a53-4857-bc6e-6808c6acd542'
      }
      '7fb9419d-2473-4ad8-8e11-b25cc8cf6a07': {
        custom: false
        displayName: 'Networking'
        enabled: true
        keywords: [
          {
            canBeNumeric: false
            custom: true
            pattern: '%networking%'
          }
        ]
        order: 100
        recommendedLabelId: '575739d2-3d53-4df0-9042-4c7772d5c7b1'
      }
    }
    labels: {
      '1345da73-bc5a-4a8f-b7dd-3820eb713da8': {
        displayName: 'Public'
        enabled: true
        order: 100
      }
      '575739d2-3d53-4df0-9042-4c7772d5c7b1': {
        displayName: 'Confidential'
        enabled: true
        order: 300
      }
      '7aa516c7-5a53-4857-bc6e-6808c6acd542': {
        displayName: 'General'
        enabled: true
        order: 200
      }
    }
  }
}
```

## microsoft.security/iotsecuritysolutions

Create an iot security solution
```bicep
resource exampleResource 'Microsoft.Security/iotSecuritySolutions@2017-08-01-preview' = {
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

## microsoft.security/securitycontacts

Create security contact data full
```bicep
resource exampleResource 'Microsoft.Security/securityContacts@2017-08-01-preview' = {
  name: 'example'
  name: 'default1'
  type: 'Microsoft.Security/securityContacts'
  id: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/providers/Microsoft.Security/securityContacts/default1'
  properties: {
    alertNotifications: 'On'
    alertsToAdmins: 'On'
    email: 'john@contoso.com'
    phone: '(214)275-4038'
  }
}
```

Create security contact data minimal
```bicep
resource exampleResource 'Microsoft.Security/securityContacts@2017-08-01-preview' = {
  name: 'example'
  name: 'default2'
  type: 'Microsoft.Security/securityContacts'
  id: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/providers/Microsoft.Security/securityContacts/default2'
  properties: {
    alertNotifications: 'On'
    alertsToAdmins: 'On'
    email: 'chen@contoso.com'
  }
}
```

## microsoft.security/settings

Update a setting for subscription
```bicep
resource exampleResource 'Microsoft.Security/settings@2017-08-01-preview' = {
  name: 'example'
  kind: 'DataExportSetting'
  properties: {
    enabled: true
  }
}
```

## microsoft.security/workspacesettings

Create a workspace setting data for subscription
```bicep
resource exampleResource 'Microsoft.Security/workspaceSettings@2017-08-01-preview' = {
  name: 'example'
  name: 'default'
  type: 'Microsoft.Security/workspaceSettings'
  id: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/providers/Microsoft.Security/workspaceSettings/default'
  properties: {
    scope: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23'
    workspaceId: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace'
  }
}
```
