# Microsoft.ContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerservice/openshiftmanagedclusters

Create/Update OpenShift Managed Cluster
```bicep
resource exampleResource 'Microsoft.ContainerService/openShiftManagedClusters@2019-09-30-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    agentPoolProfiles: [
      {
        name: 'infra'
        count: 2
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
      name: 'master'
      count: 3
      osType: 'Linux'
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
