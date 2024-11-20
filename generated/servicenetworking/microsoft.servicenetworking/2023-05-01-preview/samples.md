# Microsoft.ServiceNetworking

## microsoft.servicenetworking/trafficcontrollers

Put Traffic Controller
```bicep
resource exampleResource 'Microsoft.ServiceNetworking/trafficControllers@2023-05-01-preview' = {
  name: 'example'
  location: 'NorthCentralUS'
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.servicenetworking/trafficcontrollers/associations

Put Association
```bicep
resource exampleResource 'Microsoft.ServiceNetworking/trafficControllers/associations@2023-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'NorthCentralUS'
  properties: {
    associationType: 'subnets'
    subnet: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet-tc/subnets/tc-subnet'
    }
  }
}
```

## microsoft.servicenetworking/trafficcontrollers/frontends

Put Frontend
```bicep
resource exampleResource 'Microsoft.ServiceNetworking/trafficControllers/frontends@2023-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'NorthCentralUS'
  properties: {
  }
}
```
