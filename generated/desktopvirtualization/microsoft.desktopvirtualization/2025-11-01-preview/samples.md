# Microsoft.DesktopVirtualization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.desktopvirtualization/appattachpackages

AppAttachPackage_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/appAttachPackages@2025-11-01-preview' = {
  name: 'example'
  location: 'southcentralus'
  properties: {
    deploymentScope: 'Geographical'
    failHealthCheckOnStagingFailure: 'NeedsAssistance'
    hostPoolReferences: [
    ]
    image: {
      certificateExpiry: '2023-01-02T17:18:19.1234567Z'
      certificateName: 'certName'
      displayName: 'displayname'
      imagePath: 'imagepath'
      isActive: false
      isRegularRegistration: false
      lastUpdated: '2008-09-22T14:01:54.9571247Z'
      packageAlias: 'msixpackagealias'
      packageApplications: [
        {
          description: 'PackageApplicationDescription'
          appId: 'AppId'
          appUserModelID: 'AppUserModelId'
          friendlyName: 'FriendlyName'
          iconImageName: 'Iconimagename'
          rawIcon: 'VGhpcyBpcyBhIHN0cmluZyB0byBoYXNo'
          rawPng: 'VGhpcyBpcyBhIHN0cmluZyB0byBoYXNo'
        }
      ]
      packageDependencies: [
        {
          dependencyName: 'MsixPackage_Dependency_Name'
          minVersion: 'packageDep_version'
          publisher: 'MsixPackage_Dependency_Publisher'
        }
      ]
      packageFamilyName: 'MsixPackage_FamilyName'
      packageFullName: 'MsixPackage_FullName'
      packageName: 'MsixPackageName'
      packageRelativePath: 'packagerelativepath'
      version: 'packageversion'
    }
    keyVaultURL: ''
  }
}
```

## microsoft.desktopvirtualization/applicationgroups

ApplicationGroup_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/applicationGroups@2025-11-01-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'des1'
    applicationGroupType: 'RemoteApp'
    friendlyName: 'friendly'
    hostPoolArmPath: '/subscriptions/daefabc0-95b4-48b3-b645-8a753a63c4fa/resourceGroups/resourceGroup1/providers/Microsoft.DesktopVirtualization/hostPools/hostPool1'
    oboTenantId: 'CD48BF6F-60D9-44CD-AB66-039D89C2E995'
    showInFeed: true
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.desktopvirtualization/applicationgroups/applications

Applications_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/applicationGroups/applications@2025-11-01-preview' = {
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

HostPools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools@2025-11-01-preview' = {
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
    allowRDPShortPathWithPrivateLink: 'Enabled'
    customRdpProperty: {
    }
    deploymentScope: 'Geographical'
    directUDP: 'Enabled'
    friendlyName: 'friendly'
    hostPoolType: 'Pooled'
    loadBalancerType: 'BreadthFirst'
    managedPrivateUDP: 'Enabled'
    managementType: 'Automated'
    maxSessionLimit: 999999
    oboTenantId: 'CD48BF6F-60D9-44CD-AB66-039D89C2E995'
    personalDesktopAssignmentType: 'Automatic'
    preferredAppGroupType: 'Desktop'
    publicUDP: 'Enabled'
    registrationInfo: {
      expirationTime: '2020-10-01T14:01:54.9571247Z'
      registrationTokenOperation: 'Update'
    }
    relayUDP: 'Enabled'
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

MSIXPackages_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools/msixPackages@2025-11-01-preview' = {
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

PrivateEndpointConnections_UpdateByHostPool
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections@2025-11-01-preview' = {
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

## microsoft.desktopvirtualization/hostpools/sessionhostconfigurations

SessionHostConfigurations_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools/sessionHostConfigurations@2025-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    availabilityZones: [
      1
      3
    ]
    bootDiagnosticsInfo: {
      enabled: true
      storageUri: 'https://myStorageAccountName.blob.core.windows.net'
    }
    customConfigurationScriptUrl: 'https://storageaccountname.blob.core.windows.net/blobcontainer/file'
    diskInfo: {
      managedDisk: {
        type: 'Standard_LRS'
      }
    }
    domainInfo: {
      activeDirectoryInfo: {
        domainCredentials: {
          passwordKeyVaultSecretUri: 'https://myvault.vault.azure.net/secrets/mysecretname'
          usernameKeyVaultSecretUri: 'https://myvault.vault.azure.net/secrets/myusername'
        }
        domainName: 'wvdarmtest1.net'
        ouPath: 'OU=testOU,DC=domain,DC=Domain,DC=com'
      }
      azureActiveDirectoryInfo: {
        mdmProviderGuid: 'bdefabc0-95b4-48b3-b645-8a753a63c4fa'
      }
      joinType: 'ActiveDirectory'
    }
    friendlyName: 'InitialConfiguration'
    imageInfo: {
      type: 'Marketplace'
      customInfo: {
        resourceId: '/subscriptions/daefabc0-95b4-48b3-b645-8a753a63c4fa/resourceGroups/resourceGroup1/providers/Microsoft.Compute/images/imageName'
      }
      marketplaceInfo: {
        exactVersion: '2019.0.20190115'
        offer: 'Windows-10'
        publisher: 'MicrosoftWindowsDesktop'
        sku: '19h2-ent'
      }
    }
    networkInfo: {
      securityGroupId: '/subscriptions/.../resourceGroups/.../provider s/Microsoft.Network/networkSecurityGroups/nsg1'
      subnetId: '/subscriptions/.../resourceGroups/.../providers/Microsoft.Network/virtualNetworks/.../subnets/subnet1'
    }
    securityInfo: {
      type: 'TrustedLaunch'
      secureBootEnabled: true
      vTpmEnabled: true
    }
    vmAdminCredentials: {
      passwordKeyVaultSecretUri: 'https://myvault.vault.azure.net/secrets/mysecretname'
      usernameKeyVaultSecretUri: 'https://myvault.vault.azure.net/secrets/myusername'
    }
    vmLocation: 'eastus2'
    vmNamePrefix: 'westus2-vm'
    vmResourceGroup: 'myResourceGroup'
    vmSizeId: 'Standard_D2s_v3'
    vmTags: {
      Department: 'myDepartment'
      Team: 'myTeam'
    }
  }
}
```

## microsoft.desktopvirtualization/hostpools/sessionhostmanagements

SessionHostManagements_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools/sessionHostManagements@2025-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    scheduledDateTimeZone: 'Alaskan Standard Time'
    update: {
      deleteOriginalVm: true
      logOffDelayMinutes: 10
      logOffMessage: 'logging off for hostpool update'
      maxVmsRemoved: 4
    }
  }
}
```

## microsoft.desktopvirtualization/scalingplans

ScalingPlans_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/scalingPlans@2025-11-01-preview' = {
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

## microsoft.desktopvirtualization/scalingplans/personalschedules

ScalingPlanPersonalSchedules_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/scalingPlans/personalSchedules@2025-11-01-preview' = {
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

## microsoft.desktopvirtualization/scalingplans/pooledschedules

ScalingPlanPooledSchedules_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules@2025-11-01-preview' = {
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

ScalingPlanPooledSchedules_CreateUsingCreateDelete
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules@2025-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    createDelete: {
      rampDownMaximumHostPoolSize: 7
      rampDownMinimumHostPoolSize: 2
      rampUpMaximumHostPoolSize: 10
      rampUpMinimumHostPoolSize: 5
    }
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
    rampDownNotificationMessage: 'message'
    rampDownStartTime: {
      hour: 18
      minute: 0
    }
    rampDownWaitTimeMinutes: 30
    rampUpCapacityThresholdPct: 80
    rampUpLoadBalancingAlgorithm: 'DepthFirst'
    rampUpStartTime: {
      hour: 6
      minute: 0
    }
    scalingMethod: 'CreateDeletePowerManage'
  }
}
```

## microsoft.desktopvirtualization/workspaces

Workspace_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/workspaces@2025-11-01-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'des1'
    deploymentScope: 'Geographical'
    friendlyName: 'friendly'
    oboTenantId: 'CD48BF6F-60D9-44CD-AB66-039D89C2E995'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.desktopvirtualization/workspaces/privateendpointconnections

PrivateEndpointConnections_UpdateByWorkspace
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections@2025-11-01-preview' = {
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
