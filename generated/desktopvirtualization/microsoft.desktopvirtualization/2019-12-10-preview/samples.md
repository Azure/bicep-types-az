# Microsoft.DesktopVirtualization

## microsoft.desktopvirtualization/workspaces

Workspace_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/workspaces@2019-12-10-preview' = {
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

## microsoft.desktopvirtualization/applicationgroups

ApplicationGroup_Create
```bicep
resource exampleResource 'Microsoft.DesktopVirtualization/applicationGroups@2019-12-10-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    description: 'des1'
    applicationGroupType: 'RemoteApp'
    friendlyName: 'friendly'
    hostPoolArmPath: '/subscriptions/daefabc0-95b4-48b3-b645-8a753a63c4fa/resourcegroups/resourceGroup1/providers/Microsoft.DesktopVirtualization/hostpools/hostPool1'
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
resource exampleResource 'Microsoft.DesktopVirtualization/applicationGroups/applications@2019-12-10-preview' = {
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
resource exampleResource 'Microsoft.DesktopVirtualization/hostPools@2019-12-10-preview' = {
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
    personalDesktopAssignmentType: 'Automatic'
    preferredAppGroupType: 'Desktop'
    registrationInfo: {
      expirationTime: '2020-10-01T14:01:54.9571247Z'
      registrationTokenOperation: 'Update'
    }
    ssoContext: 'KeyVaultPath'
    vmTemplate: '{json:json}'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```
