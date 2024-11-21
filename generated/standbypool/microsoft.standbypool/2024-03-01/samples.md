# Microsoft.StandbyPool
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.standbypool/standbycontainergrouppools

StandbyContainerGroupPools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StandbyPool/standbyContainerGroupPools@2024-03-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    containerGroupProperties: {
      containerGroupProfile: {
        id: '/subscriptions/00000000-0000-0000-0000-000000000009/resourceGroups/rgstandbypool/providers/Microsoft.ContainerInstance/containerGroupProfiles/cgProfile'
        revision: 1
      }
      subnetIds: [
        {
          id: '/subscriptions/00000000-0000-0000-0000-000000000009/resourceGroups/rgstandbypool/providers/Microsoft.Network/virtualNetworks/cgSubnet/subnets/cgSubnet'
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
resource exampleResource 'Microsoft.StandbyPool/standbyVirtualMachinePools@2024-03-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    attachedVirtualMachineScaleSetId: '/subscriptions/00000000-0000-0000-0000-000000000009/resourceGroups/rgstandbypool/providers/Microsoft.Compute/virtualMachineScaleSets/myVmss'
    elasticityProfile: {
      maxReadyCapacity: 304
      minReadyCapacity: 300
    }
    virtualMachineState: 'Running'
  }
  tags: {
  }
}
```
