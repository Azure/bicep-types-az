# Microsoft.StandbyPool

## microsoft.standbypool/standbycontainergrouppools

StandbyContainerGroupPools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StandbyPool/standbyContainerGroupPools@2023-12-01-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    containerGroupProperties: {
      containerGroupProfile: {
        id: '/subscriptions/8CC31D61-82D7-4B2B-B9DC-6B924DE7D229/resourceGroups/rgstandbypool/providers/Microsoft.ContainerInstance/containerGroupProfiles/cgProfile'
        revision: 1
      }
      subnetIds: [
        {
          id: '/subscriptions/8cf6c1b6-c80f-437c-87ad-45fbaff54f73/resourceGroups/rgstandbypool/providers/Microsoft.Network/virtualNetworks/cgSubnet/subnets/cgSubnet'
        }
      ]
    }
    elasticityProfile: {
      maxReadyCapacity: 688
      refillPolicy: 'always'
    }
  }
  tags: {
  }
}
```

## microsoft.standbypool/standbyvirtualmachinepools

StandbyVirtualMachinePools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StandbyPool/standbyVirtualMachinePools@2023-12-01-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    attachedVirtualMachineScaleSetId: '/subscriptions/8CC31D61-82D7-4B2B-B9DC-6B924DE7D229/resourceGroups/rgstandbypool/providers/Microsoft.Compute/virtualMachineScaleSets/myVmss'
    elasticityProfile: {
      maxReadyCapacity: 304
    }
    virtualMachineState: 'Running'
  }
  tags: {
  }
}
```
