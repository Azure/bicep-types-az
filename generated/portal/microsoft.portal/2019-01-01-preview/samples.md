# Microsoft.Portal
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.portal/dashboards

Create or update a Dashboard
```bicep
resource exampleResource 'Microsoft.Portal/dashboards@2019-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    lenses: {
      aLens: {
        order: 1
        parts: {
          aPart: {
            position: {
              colSpan: 3
              rowSpan: 4
              x: 1
              y: 2
            }
          }
          bPart: {
            position: {
              colSpan: 6
              rowSpan: 6
              x: 5
              y: 5
            }
          }
        }
      }
      bLens: {
        order: 2
        parts: {
        }
      }
    }
    metadata: {
      metadata: {
        ColSpan: 2
        RowSpan: 1
        X: 4
        Y: 3
      }
    }
  }
  tags: {
    aKey: 'aValue'
    anotherKey: 'anotherValue'
  }
}
```

## microsoft.portal/tenantconfigurations

Create or update Tenant configuration
```bicep
resource exampleResource 'Microsoft.Portal/tenantConfigurations@2019-01-01-preview' = {
  name: 'example'
  properties: {
    enforcePrivateMarkdownStorage: true
  }
}
```
