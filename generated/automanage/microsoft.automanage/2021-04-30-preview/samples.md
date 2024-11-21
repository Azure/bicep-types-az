# Microsoft.Automanage

## microsoft.automanage/configurationprofiles

Create or update configuration profile
```bicep
resource exampleResource 'Microsoft.Automanage/configurationProfiles@2021-04-30-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    configuration: {
      Antimalware/Enable: false
      AzureSecurityCenter/Enable: true
      Backup/Enable: false
      BootDiagnostics/Enable: true
      ChangeTrackingAndInventory/Enable: true
      GuestConfiguration/Enable: true
      LogAnalytics/Enable: true
      UpdateManagement/Enable: true
      VMInsights/Enable: true
    }
    overrides: [
      {
        if: {
          equals: 'eastus'
          field: '$.location'
        }
        priority: 100
        then: {
          LogAnalytics/Enable: true
          LogAnalytics/Reprovision: true
          LogAnalytics/Workspace: '/subscriptions/abc/resourceGroups/xyz/providers/Microsoft.La/Workspaces/eastus'
        }
      }
      {
        if: {
          equals: 'centralcanada'
          field: '$.location'
        }
        priority: 200
        then: {
          LogAnalytics/Enable: true
          LogAnalytics/Reprovision: true
          LogAnalytics/Workspace: '/subscriptions/abc/resourceGroups/xyz/providers/Microsoft.La/Workspaces/centralcanada'
        }
      }
    ]
  }
  tags: {
    Organization: 'Administration'
  }
}
```

## microsoft.automanage/configurationprofiles/versions

Create or update configuration profile version
```bicep
resource exampleResource 'Microsoft.Automanage/configurationProfiles/versions@2021-04-30-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    configuration: {
      Antimalware/Enable: false
      AzureSecurityCenter/Enable: true
      Backup/Enable: false
      BootDiagnostics/Enable: true
      ChangeTrackingAndInventory/Enable: true
      GuestConfiguration/Enable: true
      LogAnalytics/Enable: true
      UpdateManagement/Enable: true
      VMInsights/Enable: true
    }
    overrides: [
      {
        if: {
          equals: 'eastus'
          field: '$.location'
        }
        priority: 100
        then: {
          LogAnalytics/Enable: true
          LogAnalytics/Reprovision: true
          LogAnalytics/Workspace: '/subscriptions/abc/resourceGroups/xyz/providers/Microsoft.La/Workspaces/eastus'
        }
      }
      {
        if: {
          equals: 'centralcanada'
          field: '$.location'
        }
        priority: 200
        then: {
          LogAnalytics/Enable: true
          LogAnalytics/Reprovision: true
          LogAnalytics/Workspace: '/subscriptions/abc/resourceGroups/xyz/providers/Microsoft.La/Workspaces/centralcanada'
        }
      }
    ]
  }
  tags: {
    Organization: 'Administration'
  }
}
```

## microsoft.automanage/configurationprofileassignments

Create or update configuration profile assignment
```bicep
resource exampleResource 'Microsoft.Automanage/configurationProfileAssignments@2021-04-30-preview' = {
  name: 'example'
  properties: {
    configurationProfile: '/providers/Microsoft.Automanage/bestPractices/AzureBestPracticesProduction'
  }
}
```
