# Microsoft.LabServices

## microsoft.labservices/labplans/images

putImage
```bicep
resource exampleResource 'Microsoft.LabServices/labPlans/images@2022-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enabledState: 'Enabled'
  }
}
```

## microsoft.labservices/labplans

putLabPlan
```bicep
resource exampleResource 'Microsoft.LabServices/labPlans@2022-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    defaultAutoShutdownProfile: {
      disconnectDelay: 'PT5M'
      idleDelay: 'PT5M'
      noConnectDelay: 'PT5M'
      shutdownOnDisconnect: 'Enabled'
      shutdownOnIdle: 'UserAbsence'
      shutdownWhenNotConnected: 'Enabled'
    }
    defaultConnectionProfile: {
      clientRdpAccess: 'Public'
      clientSshAccess: 'Public'
      webRdpAccess: 'None'
      webSshAccess: 'None'
    }
    defaultNetworkProfile: {
      subnetId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/default'
    }
    sharedGalleryId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.Compute/galleries/testsig'
    supportInfo: {
      email: 'help@contoso.com'
      instructions: 'Contact support for help.'
      phone: '+1-202-555-0123'
      url: 'help.contoso.com'
    }
  }
}
```

## microsoft.labservices/labs

putLab
```bicep
resource exampleResource 'Microsoft.LabServices/labs@2022-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    description: 'This is a test lab.'
    autoShutdownProfile: {
      disconnectDelay: 'PT5M'
      idleDelay: 'PT5M'
      noConnectDelay: 'PT5M'
      shutdownOnDisconnect: 'Enabled'
      shutdownOnIdle: 'UserAbsence'
      shutdownWhenNotConnected: 'Enabled'
    }
    connectionProfile: {
      clientRdpAccess: 'Public'
      clientSshAccess: 'Public'
      webRdpAccess: 'None'
      webSshAccess: 'None'
    }
    labPlanId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.LabServices/labPlans/testlabplan'
    networkProfile: {
      subnetId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/default'
    }
    securityProfile: {
      openAccess: 'Disabled'
    }
    state: 'Draft'
    title: 'Test Lab'
    virtualMachineProfile: {
      additionalCapabilities: {
        installGpuDrivers: 'Disabled'
      }
      adminUser: {
        username: 'test-user'
      }
      createOption: 'TemplateVM'
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'Microsoft'
        sku: '2019-Datacenter'
        version: '2019.0.20190410'
      }
      sku: {
        name: 'Medium'
      }
      usageQuota: 'PT10H'
      useSharedPassword: 'Disabled'
    }
  }
}
```

## microsoft.labservices/labs/schedules

putSchedule
```bicep
resource exampleResource 'Microsoft.LabServices/labs/schedules@2022-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    notes: 'Schedule 1 for students'
    recurrencePattern: {
      expirationDate: '2020-08-14T23:59:59Z'
      frequency: 'Daily'
      interval: 2
    }
    startAt: '2020-05-26T12:00:00Z'
    stopAt: '2020-05-26T18:00:00Z'
    timeZoneId: 'America/Los_Angeles'
  }
}
```

## microsoft.labservices/labs/users

putUser
```bicep
resource exampleResource 'Microsoft.LabServices/labs/users@2022-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    additionalUsageQuota: 'PT10H'
    email: 'testuser@contoso.com'
  }
}
```
