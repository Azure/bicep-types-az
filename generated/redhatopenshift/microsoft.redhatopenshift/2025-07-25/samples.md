# Microsoft.RedHatOpenShift
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.redhatopenshift/openshiftclusters

Creates or updates a OpenShift cluster with the specified subscription, resource group and resource name.
```bicep
resource exampleResource 'Microsoft.RedHatOpenShift/openShiftClusters@2025-07-25' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '': {
      }
    }
  }
  location: 'location'
  properties: {
    apiserverProfile: {
      visibility: 'Public'
    }
    clusterProfile: {
      domain: 'cluster.location.aroapp.io'
      fipsValidatedModules: 'Enabled'
      pullSecret: '{"auths":{"registry.connect.redhat.com":{"auth":""},"registry.redhat.io":{"auth":""}}}'
      resourceGroupId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/clusterResourceGroup'
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
      subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/vnetResourceGroup/providers/Microsoft.Network/virtualNetworks/vnet/subnets/master'
      vmSize: 'Standard_D8s_v3'
    }
    networkProfile: {
      loadBalancerProfile: {
        managedOutboundIps: {
          count: 1
        }
      }
      podCidr: '10.128.0.0/14'
      preconfiguredNSG: 'Disabled'
      serviceCidr: '172.30.0.0/16'
    }
    platformWorkloadIdentityProfile: {
      platformWorkloadIdentities: {
        '': {
        }
      }
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
        subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/vnetResourceGroup/providers/Microsoft.Network/virtualNetworks/vnet/subnets/worker'
        vmSize: 'Standard_D2s_v3'
      }
    ]
  }
  tags: {
    key: 'value'
  }
}
```
