# Microsoft.PowerBIDedicated

## microsoft.powerbidedicated/capacities

Create capacity
```bicep
resource exampleResource 'Microsoft.PowerBIDedicated/capacities@2021-01-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    administration: {
      members: [
        'azsdktest@microsoft.com'
        'azsdktest2@microsoft.com'
      ]
    }
  }
  sku: {
    name: 'A1'
    tier: 'PBIE_Azure'
  }
  tags: {
    testKey: 'testValue'
  }
}
```

## microsoft.powerbidedicated/autoscalevcores

Create auto scale v-core
```bicep
resource exampleResource 'Microsoft.PowerBIDedicated/autoScaleVCores@2021-01-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    capacityLimit: 10
    capacityObjectId: 'a28f00bd-5330-4572-88f1-fa883e074785'
  }
  sku: {
    name: 'AutoScale'
    capacity: 0
    tier: 'AutoScale'
  }
  tags: {
    testKey: 'testValue'
  }
}
```
