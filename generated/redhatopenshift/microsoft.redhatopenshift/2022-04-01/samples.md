# Microsoft.RedHatOpenShift

## microsoft.redhatopenshift/openshiftclusters

Creates or updates a OpenShift cluster with the specified subscription, resource group and resource name.
```bicep
resource exampleResource 'Microsoft.RedHatOpenShift/openShiftClusters@2022-04-01' = {
  name: 'example'
  location: 'location'
  properties: {
    apiserverProfile: {
      visibility: 'Public'
    }
    clusterProfile: {
      domain: 'cluster.location.aroapp.io'
      fipsValidatedModules: 'Enabled'
      pullSecret: '{"auths":{"registry.connect.redhat.com":{"auth":""},"registry.redhat.io":{"auth":""}}}'
      resourceGroupId: '/subscriptions/subscriptionId/resourceGroups/clusterResourceGroup'
    }
    consoleProfile: {
    }
    ingressProfiles: [
      {
        name: 'default'
        visibility: 'Public'
      }
    ]
    masterProfile: {
      encryptionAtHost: 'Enabled'
      subnetId: '/subscriptions/subscriptionId/resourceGroups/vnetResourceGroup/providers/Microsoft.Network/virtualNetworks/vnet/subnets/master'
      vmSize: 'Standard_D8s_v3'
    }
    networkProfile: {
      podCidr: '10.128.0.0/14'
      serviceCidr: '172.30.0.0/16'
    }
    servicePrincipalProfile: {
      clientId: 'clientId'
      clientSecret: 'clientSecret'
    }
    workerProfiles: [
      {
        name: 'worker'
        count: 3
        diskSizeGB: 128
        subnetId: '/subscriptions/subscriptionId/resourceGroups/vnetResourceGroup/providers/Microsoft.Network/virtualNetworks/vnet/subnets/worker'
        vmSize: 'Standard_D2s_v3'
      }
    ]
  }
  tags: {
    key: 'value'
  }
}
```
