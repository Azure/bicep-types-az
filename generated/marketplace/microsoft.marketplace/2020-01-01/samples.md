# Microsoft.Marketplace

## microsoft.marketplace/privatestores/offers

PrivateStoreOffer_update
```bicep
resource exampleResource 'Microsoft.Marketplace/privateStores/offers@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    eTag: '"9301f4fd-0000-0100-0000-5e248b350666"'
    specificPlanIdsLimitation: [
      '0001'
      '0002'
    ]
  }
}
```

## microsoft.marketplace/privatestores

PrivateStores_update
```bicep
resource exampleResource 'Microsoft.Marketplace/privateStores@2020-01-01' = {
  name: 'example'
  properties: {
    availability: 'disabled'
    eTag: '"9301f4fd-0000-0100-0000-5e248b350345"'
  }
}
```
