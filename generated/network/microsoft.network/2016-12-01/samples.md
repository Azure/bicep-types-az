# Microsoft.Network

## microsoft.network/routefilters

RouteFilterCreate
```bicep
resource exampleResource 'Microsoft.Network/routeFilters@2016-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    rules: [
      {
        properties: {
          access: 'Allow'
          communities: [
            '12076:5030'
            '12076:5040'
          ]
          routeFilterRuleType: 'Community'
        }
      }
    ]
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/routefilters/routefilterrules

RouteFilterRuleCreate
```bicep
resource exampleResource 'Microsoft.Network/routeFilters/routeFilterRules@2016-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    access: 'Allow'
    communities: [
      '12076:5030'
      '12076:5040'
    ]
    routeFilterRuleType: 'Community'
  }
  tags: {
    key1: 'value1'
  }
}
```
