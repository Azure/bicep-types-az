# Microsoft.ContainerService

## microsoft.containerservice/openshiftmanagedclusters

Create/Update OpenShift Managed Cluster
```bicep
resource exampleResource 'Microsoft.ContainerService/openShiftManagedClusters@2019-10-27-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    agentPoolProfiles: [
      {
        name: 'infra'
        count: 3
        osType: 'Linux'
        role: 'infra'
        subnetCidr: '10.0.0.0/24'
        vmSize: 'Standard_D4s_v3'
      }
      {
        name: 'compute'
        count: 4
        osType: 'Linux'
        role: 'compute'
        subnetCidr: '10.0.0.0/24'
        vmSize: 'Standard_D4s_v3'
      }
    ]
    authProfile: {
      identityProviders: [
        {
          name: 'Azure AD'
          provider: {
            clientId: 'clientId'
            customerAdminGroupId: 'customerAdminGroupId'
            kind: 'AADIdentityProvider'
            secret: 'secret'
            tenantId: 'tenantId'
          }
        }
      ]
    }
    masterPoolProfile: {
      apiProperties: {
        privateApiServer: false
      }
      count: 3
      subnetCidr: '10.0.0.0/24'
      vmSize: 'Standard_D4s_v3'
    }
    monitorProfile: {
      enabled: true
      workspaceResourceID: '/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.OperationalInsights/workspaces/workspacename1'
    }
    networkProfile: {
      vnetCidr: '10.0.0.0/8'
    }
    openShiftVersion: 'v3.11'
    routerProfiles: [
      {
        name: 'default'
      }
    ]
  }
  tags: {
    archv2: ''
    tier: 'production'
  }
}
```

Create/Update Private OpenShift Managed Cluster
```bicep
resource exampleResource 'Microsoft.ContainerService/openShiftManagedClusters@2019-10-27-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    agentPoolProfiles: [
      {
        name: 'infra'
        count: 3
        osType: 'Linux'
        role: 'infra'
        subnetCidr: '10.0.0.0/24'
        vmSize: 'Standard_D4s_v3'
      }
      {
        name: 'compute'
        count: 4
        osType: 'Linux'
        role: 'compute'
        subnetCidr: '10.0.0.0/24'
        vmSize: 'Standard_D4s_v3'
      }
    ]
    authProfile: {
      identityProviders: [
        {
          name: 'Azure AD'
          provider: {
            clientId: 'clientId'
            customerAdminGroupId: 'customerAdminGroupId'
            kind: 'AADIdentityProvider'
            secret: 'secret'
            tenantId: 'tenantId'
          }
        }
      ]
    }
    masterPoolProfile: {
      apiProperties: {
        privateApiServer: true
      }
      count: 3
      subnetCidr: '10.0.0.0/24'
      vmSize: 'Standard_D4s_v3'
    }
    monitorProfile: {
      enabled: true
      workspaceResourceID: '/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.OperationalInsights/workspaces/workspacename1'
    }
    networkProfile: {
      managementSubnetCidr: '10.0.1.0/24'
      vnetCidr: '10.0.0.0/8'
    }
    openShiftVersion: 'v3.11'
    refreshCluster: true
    routerProfiles: [
      {
        name: 'default'
      }
    ]
  }
  tags: {
    archv2: ''
    tier: 'production'
  }
}
```
