# Microsoft.Edge

## microsoft.edge/sites

Create Site Subscription
```bicep
resource exampleResource 'Microsoft.Edge/sites@2024-02-01-preview' = {
  name: 'example'
  properties: {
    description: 'string'
    addressResourceId: '/subscriptions/680d0dad-59aa-4464-3df3-b34b2b42738c/resourceGroups/us-site-rg/providers/Microsoft.EdgeOrder/addresses/12343213'
    displayName: 'string'
  }
}
```
