# Microsoft.DesktopVirtualization

## microsoft.desktopvirtualization/workspaces

Workspace_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/workspaces@2023-09-05' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'des1'
    friendlyName: 'friendly'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.desktopvirtualization/workspaces/privateendpointconnections

PrivateEndpointConnection_UpdateByWorkspace
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections@2023-09-05' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by admin@consoto.com'
      actionsRequired: 'None'
      status: 'Approved'
    }
  }
}
```

## microsoft.desktopvirtualization/hostpools/privateendpointconnections

PrivateEndpointConnection_UpdateByHostPool
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections@2023-09-05' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by admin@consoto.com'
      actionsRequired: 'None'
      status: 'Approved'
    }
  }
}
```

## microsoft.desktopvirtualization/scalingplans

ScalingPlans_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/scalingPlans@2023-09-05' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'Description of Scaling Plan'
    exclusionTag: 'value'
    friendlyName: 'Scaling Plan 1'
    hostPoolReferences: [
      {
        hostPoolArmPath: '/subscriptions/daefabc0-95b4-48b3-b645-8a753a63c4fa/resourceGroups/resourceGroup1/providers/Microsoft.DesktopVirtualization/hostPools/hostPool1'
        scalingPlanEnabled: true
      }
    ]
    hostPoolType: 'Pooled'
    schedules: [
      {
        name: 'schedule1'
        daysOfWeek: [
          'Monday'
          'Tuesday'
          'Wednesday'
          'Thursday'
          'Friday'
        ]
        offPeakLoadBalancingAlgorithm: 'DepthFirst'
        offPeakStartTime: {
          hour: 20
          minute: 0
        }
        peakLoadBalancingAlgorithm: 'BreadthFirst'
        peakStartTime: {
          hour: 8
          minute: 0
        }
        rampDownCapacityThresholdPct: 50
        rampDownForceLogoffUsers: true
        rampDownLoadBalancingAlgorithm: 'DepthFirst'
        rampDownMinimumHostsPct: 20
        rampDownNotificationMessage: 'message'
        rampDownStartTime: {
          hour: 18
          minute: 0
        }
        rampDownWaitTimeMinutes: 30
        rampUpCapacityThresholdPct: 80
        rampUpLoadBalancingAlgorithm: 'DepthFirst'
        rampUpMinimumHostsPct: 20
        rampUpStartTime: {
          hour: 6
          minute: 0
        }
      }
    ]
    timeZone: 'Central Standard Time'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.desktopvirtualization/scalingplans/pooledschedules

ScalingPlanPooledSchedules_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules@2023-09-05' = {
  parent: parentResource 
  name: 'example'
  properties: {
    daysOfWeek: [
      'Monday'
      'Tuesday'
      'Wednesday'
      'Thursday'
      'Friday'
    ]
    offPeakLoadBalancingAlgorithm: 'DepthFirst'
    offPeakStartTime: {
      hour: 20
      minute: 0
    }
    peakLoadBalancingAlgorithm: 'BreadthFirst'
    peakStartTime: {
      hour: 8
      minute: 0
    }
    rampDownCapacityThresholdPct: 50
    rampDownForceLogoffUsers: true
    rampDownLoadBalancingAlgorithm: 'DepthFirst'
    rampDownMinimumHostsPct: 20
    rampDownNotificationMessage: 'message'
    rampDownStartTime: {
      hour: 18
      minute: 0
    }
    rampDownWaitTimeMinutes: 30
    rampUpCapacityThresholdPct: 80
    rampUpLoadBalancingAlgorithm: 'DepthFirst'
    rampUpMinimumHostsPct: 20
    rampUpStartTime: {
      hour: 6
      minute: 0
    }
  }
}
```

## microsoft.desktopvirtualization/scalingplans/personalschedules

ScalingPlanPersonalSchedules_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/scalingPlans/personalSchedules@2023-09-05' = {
  parent: parentResource 
  name: 'example'
  properties: {
    daysOfWeek: [
      'Monday'
      'Tuesday'
      'Wednesday'
      'Thursday'
      'Friday'
    ]
    offPeakActionOnDisconnect: 'None'
    offPeakActionOnLogoff: 'Deallocate'
    offPeakMinutesToWaitOnDisconnect: 10
    offPeakMinutesToWaitOnLogoff: 10
    offPeakStartTime: {
      hour: 20
      minute: 0
    }
    offPeakStartVMOnConnect: 'Enable'
    peakActionOnDisconnect: 'None'
    peakActionOnLogoff: 'Deallocate'
    peakMinutesToWaitOnDisconnect: 10
    peakMinutesToWaitOnLogoff: 10
    peakStartTime: {
      hour: 8
      minute: 0
    }
    peakStartVMOnConnect: 'Enable'
    rampDownActionOnDisconnect: 'None'
    rampDownActionOnLogoff: 'Deallocate'
    rampDownMinutesToWaitOnDisconnect: 10
    rampDownMinutesToWaitOnLogoff: 10
    rampDownStartTime: {
      hour: 18
      minute: 0
    }
    rampDownStartVMOnConnect: 'Enable'
    rampUpActionOnDisconnect: 'None'
    rampUpActionOnLogoff: 'None'
    rampUpAutoStartHosts: 'All'
    rampUpMinutesToWaitOnDisconnect: 10
    rampUpMinutesToWaitOnLogoff: 10
    rampUpStartTime: {
      hour: 6
      minute: 0
    }
    rampUpStartVMOnConnect: 'Enable'
  }
}
```

## microsoft.desktopvirtualization/applicationgroups

ApplicationGroup_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/applicationGroups@2023-09-05' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'des1'
    applicationGroupType: 'RemoteApp'
    friendlyName: 'friendly'
    hostPoolArmPath: '/subscriptions/daefabc0-95b4-48b3-b645-8a753a63c4fa/resourceGroups/resourceGroup1/providers/Microsoft.DesktopVirtualization/hostPools/hostPool1'
    showInFeed: true
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.desktopvirtualization/applicationgroups/applications

Application_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/applicationGroups/applications@2023-09-05' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'des1'
    commandLineArguments: 'arguments'
    commandLineSetting: 'Allow'
    filePath: 'path'
    friendlyName: 'friendly'
    iconIndex: 1
    iconPath: 'icon'
    showInPortal: true
  }
}
```

## microsoft.desktopvirtualization/hostpools

HostPool_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools@2023-09-05' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'des1'
    agentUpdate: {
      type: 'Scheduled'
      maintenanceWindowTimeZone: 'Alaskan Standard Time'
      maintenanceWindows: [
        {
          dayOfWeek: 'Friday'
          hour: 7
        }
        {
          dayOfWeek: 'Saturday'
          hour: 8
        }
      ]
      useSessionHostLocalTime: false
    }
    customRdpProperty: {
    }
    friendlyName: 'friendly'
    hostPoolType: 'Pooled'
    loadBalancerType: 'BreadthFirst'
    maxSessionLimit: 999999
    personalDesktopAssignmentType: 'Automatic'
    preferredAppGroupType: 'Desktop'
    registrationInfo: {
      expirationTime: '2020-10-01T14:01:54.9571247Z'
      registrationTokenOperation: 'Update'
    }
    ssoClientId: 'client'
    ssoClientSecretKeyVaultPath: 'https://keyvault/secret'
    ssoSecretType: 'SharedKey'
    ssoadfsAuthority: 'https://adfs'
    startVMOnConnect: false
    vmTemplate: '{json:json}'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.desktopvirtualization/hostpools/msixpackages

MSIXPackage_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools/msixPackages@2023-09-05' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'displayname'
    imagePath: 'imagepath'
    isActive: false
    isRegularRegistration: false
    lastUpdated: '2008-09-22T14:01:54.9571247Z'
    packageApplications: [
      {
        description: 'application-desc'
        appId: 'ApplicationId'
        appUserModelID: 'AppUserModelId'
        friendlyName: 'friendlyname'
        iconImageName: 'Apptile'
        rawIcon: 'VGhpcyBpcyBhIHN0cmluZyB0byBoYXNo'
        rawPng: 'VGhpcyBpcyBhIHN0cmluZyB0byBoYXNo'
      }
    ]
    packageDependencies: [
      {
        dependencyName: 'MsixTest_Dependency_Name'
        minVersion: 'version'
        publisher: 'PublishedName'
      }
    ]
    packageFamilyName: 'MsixPackage_FamilyName'
    packageName: 'MsixPackage_name'
    packageRelativePath: 'packagerelativepath'
    version: 'version'
  }
}
```
