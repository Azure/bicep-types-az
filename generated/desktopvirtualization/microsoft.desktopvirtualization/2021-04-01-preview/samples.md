# Microsoft.DesktopVirtualization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.desktopvirtualization/applicationgroups

ApplicationGroup_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/applicationGroups@2021-04-01-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'des1'
    applicationGroupType: 'RemoteApp'
    friendlyName: 'friendly'
    hostPoolArmPath: '/subscriptions/daefabc0-95b4-48b3-b645-8a753a63c4fa/resourceGroups/resourceGroup1/providers/Microsoft.DesktopVirtualization/hostPools/hostPool1'
    migrationRequest: {
      migrationPath: 'TenantGroups/{defaultV1TenantGroup.Name}/Tenants/{defaultV1Tenant.Name}/HostPools/{sessionHostPool.Name}'
      operation: 'Start'
    }
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
resource exampleResource 'Microsoft.DesktopVirtualization/applicationGroups/applications@2021-04-01-preview' = {
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
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools@2021-04-01-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'des1'
    customRdpProperty: {
    }
    friendlyName: 'friendly'
    hostPoolType: 'Pooled'
    loadBalancerType: 'BreadthFirst'
    maxSessionLimit: 999999
    migrationRequest: {
      migrationPath: 'TenantGroups/{defaultV1TenantGroup.Name}/Tenants/{defaultV1Tenant.Name}/HostPools/{sessionHostPool.Name}'
      operation: 'Start'
    }
    personalDesktopAssignmentType: 'Automatic'
    preferredAppGroupType: 'Desktop'
    publicNetworkAccess: 'Enabled'
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
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools/msixPackages@2021-04-01-preview' = {
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

## microsoft.desktopvirtualization/hostpools/privateendpointconnections

PrivateEndpointConnection_UpdateByHostPool
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections@2021-04-01-preview' = {
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
resource exampleResource 'Microsoft.DesktopVirtualization/scalingPlans@2021-04-01-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'des1'
    exclusionTag: 'value'
    friendlyName: 'friendly'
    hostPoolReferences: [
      {
        hostPoolArmPath: '/subscriptions/daefabc0-95b4-48b3-b645-8a753a63c4fa/resourceGroups/resourceGroup1/providers/Microsoft.DesktopVirtualization/hostPools/hostPool1'
        scalingPlanEnabled: true
      }
    ]
    hostPoolType: 'Personal'
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
        offPeakStartTime: '2020-11-10T20:00:00.000Z'
        peakLoadBalancingAlgorithm: 'BreadthFirst'
        peakStartTime: '2020-11-10T08:00:00.000Z'
        rampDownCapacityThresholdPct: 50
        rampDownForceLogoffUsers: true
        rampDownLoadBalancingAlgorithm: 'DepthFirst'
        rampDownMinimumHostsPct: 20
        rampDownNotificationMessage: 'message'
        rampDownStartTime: '2020-11-10T18:00:00.000Z'
        rampDownWaitTimeMinutes: 30
        rampUpCapacityThresholdPct: 80
        rampUpLoadBalancingAlgorithm: 'DepthFirst'
        rampUpMinimumHostsPct: 20
        rampUpStartTime: '2020-11-10T06:00:00.000Z'
      }
    ]
    timeZone: ''
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.desktopvirtualization/workspaces

Workspace_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/workspaces@2021-04-01-preview' = {
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
resource exampleResource 'Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections@2021-04-01-preview' = {
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
