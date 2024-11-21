# Microsoft.RedHatOpenShift

## microsoft.redhatopenshift/openshiftclusters

Creates or updates a OpenShift cluster with the specified subscription, resource group and resource name.
```bicep
resource exampleResource 'Microsoft.RedHatOpenShift/openShiftClusters@2023-11-22' = {
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
      loadBalancerProfile: {
        managedOutboundIps: {
          count: 1
        }
      }
      podCidr: '10.128.0.0/14'
      preconfiguredNSG: 'Disabled'
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

## microsoft.redhatopenshift/openshiftclusters/machinepool

Creates or updates a MachinePool with the specified subscription, resource group and resource name.
```bicep
resource exampleResource 'Microsoft.RedHatOpenShift/openshiftclusters/machinePool@2023-11-22' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resources: 'ewogICAgImFwaVZlcnNpb24iOiAiaGl2ZS5vcGVuc2hpZnQuaW8vdjEiLAogICAgImtpbmQiOiAiTWFjaGluZVBvb2wiLAogICAgIm1ldGFkYXRhIjogewogICAgICAgICJuYW1lIjogInRlc3QtY2x1c3Rlci13b3JrZXIiLAogICAgICAgICJuYW1lc3BhY2UiOiAiYXJvLWY2MGFlOGEyLWJjYTEtNDk4Ny05MDU2LVhYWFhYWFhYWFhYWCIKICAgIH0sCiAgICAic3BlYyI6IHsKICAgICAgICAiY2x1c3RlckRlcGxveW1lbnRSZWYiOiB7CiAgICAgICAgICAgICJuYW1lIjogInRlc3QtY2x1c3RlciIKICAgICAgICB9LAogICAgICAgICJuYW1lIjogIndvcmtlciIsCiAgICAgICAgInBsYXRmb3JtIjogewogICAgICAgICAgICAiYXdzIjogewogICAgICAgICAgICAgICAgInJvb3RWb2x1bWUiOiB7CiAgICAgICAgICAgICAgICAgICAgImlvcHMiOiAwLAogICAgICAgICAgICAgICAgICAgICJzaXplIjogMzAwLAogICAgICAgICAgICAgICAgICAgICJ0eXBlIjogImdwMyIKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAidHlwZSI6ICJtNS54bGFyZ2UiLAogICAgICAgICAgICAgICAgInpvbmVzIjogWwogICAgICAgICAgICAgICAgICAgICJ1cy1lYXN0LTFhIgogICAgICAgICAgICAgICAgXQogICAgICAgICAgICB9CiAgICAgICAgfSwKICAgICAgICAicmVwbGljYXMiOiAyCiAgICB9LAogICAgInN0YXR1cyI6IHsKICAgICAgICAiY29uZGl0aW9ucyI6IFsKICAgICAgICBdCiAgICB9Cn0K'
  }
}
```

## microsoft.redhatopenshift/openshiftclusters/secret

Creates or updates a Secret with the specified subscription, resource group and resource name.
```bicep
resource exampleResource 'Microsoft.RedHatOpenShift/openshiftclusters/secret@2023-11-22' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.redhatopenshift/openshiftclusters/syncidentityprovider

Creates or updates a SyncIdentityProvider with the specified subscription, resource group and resource name.
```bicep
resource exampleResource 'Microsoft.RedHatOpenShift/openshiftclusters/syncIdentityProvider@2023-11-22' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resources: 'ewogICAgImFwaVZlcnNpb24iOiAiaGl2ZS5vcGVuc2hpZnQuaW8vdjEiLAogICAgImtpbmQiOiAiU3luY0lkZW50aXR5UHJvdmlkZXIiLAogICAgIm1ldGFkYXRhIjogewogICAgICAgICJuYW1lIjogInRlc3QtY2x1c3RlciIsCiAgICAgICAgIm5hbWVzcGFjZSI6ICJhcm8tZjYwYWU4YTItYmNhMS00OTg3LTkwNTYtWFhYWFhYWFhYWFhYIgogICAgfSwKICAgICJzcGVjIjogewogICAgICAgICJjbHVzdGVyRGVwbG95bWVudFJlZnMiOiBbCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICJuYW1lIjogInRlc3QtY2x1c3RlciIKICAgICAgICAgICAgfQogICAgICAgIF0sCiAgICAgICAgImlkZW50aXR5UHJvdmlkZXJzIjogWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAiaHRwYXNzd2QiOiB7CiAgICAgICAgICAgICAgICAgICAgImZpbGVEYXRhIjogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSI6ICJodHBhc3N3ZC1zZWNyZXQiCiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICJtYXBwaW5nTWV0aG9kIjogImNsYWltIiwKICAgICAgICAgICAgICAgICJuYW1lIjogIkhUUGFzc3dkIiwKICAgICAgICAgICAgICAgICJ0eXBlIjogIkhUUGFzc3dkIgogICAgICAgICAgICB9CiAgICAgICAgXQogICAgfSwKICAgICJzdGF0dXMiOiB7fQp9Cg=='
  }
}
```

## microsoft.redhatopenshift/openshiftclusters/syncset

Creates or updates a SyncSet with the specified subscription, resource group and resource name.
```bicep
resource exampleResource 'Microsoft.RedHatOpenShift/openshiftclusters/syncSet@2023-11-22' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resources: 'eyAKICAiYXBpVmVyc2lvbiI6ICJoaXZlLm9wZW5zaGlmdC5pby92MSIsCiAgImtpbmQiOiAiU3luY1NldCIsCiAgIm1ldGFkYXRhIjogewogICAgIm5hbWUiOiAic2FtcGxlIiwKICAgICJuYW1lc3BhY2UiOiAiYXJvLWY2MGFlOGEyLWJjYTEtNDk4Ny05MDU2LWYyZjZhMTgzN2NhYSIKICB9LAogICJzcGVjIjogewogICAgImNsdXN0ZXJEZXBsb3ltZW50UmVmcyI6IFtdLAogICAgInJlc291cmNlcyI6IFsKICAgICAgewogICAgICAgICJhcGlWZXJzaW9uIjogInYxIiwKICAgICAgICAia2luZCI6ICJDb25maWdNYXAiLAogICAgICAgICJtZXRhZGF0YSI6IHsKICAgICAgICAgICJuYW1lIjogIm15Y29uZmlnbWFwIgogICAgICAgIH0KICAgICAgfQogICAgXQogIH0KfQo='
  }
}
```
