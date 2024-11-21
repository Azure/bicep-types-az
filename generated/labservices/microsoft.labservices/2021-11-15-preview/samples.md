# Microsoft.LabServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.labservices/labplans

putLabPlan
```bicep
resource exampleResource 'Microsoft.LabServices/labPlans@2021-11-15-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    defaultAutoShutdownProfile: {
      disconnectDelay: '00:05'
      idleDelay: '01:00'
      noConnectDelay: '01:00'
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

## microsoft.labservices/labplans/images

putImage
```bicep
resource exampleResource 'Microsoft.LabServices/labPlans/images@2021-11-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enabledState: 'Enabled'
  }
}
```

## microsoft.labservices/labs

putLab
```bicep
resource exampleResource 'Microsoft.LabServices/labs@2021-11-15-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    description: 'This is a test lab.'
    autoShutdownProfile: {
      disconnectDelay: 'P0Y0M0DT0H0M5S'
      idleDelay: 'P0Y0M0DT0H1M0S'
      noConnectDelay: 'P0Y0M0DT0H1M0S'
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
      usageQuota: 'P0Y0M0DT0H10M0S'
      useSharedPassword: 'Disabled'
    }
  }
}
```

## microsoft.labservices/labs/schedules

putSchedule
```bicep
resource exampleResource 'Microsoft.LabServices/labs/schedules@2021-11-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    notes: 'Schedule 1 for students'
    recurrencePattern: {
      expirationDate: '2020-08-14'
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
resource exampleResource 'Microsoft.LabServices/labs/users@2021-11-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    additionalUsageQuota: '20:00'
    email: 'testuser@contoso.com'
  }
}
```
