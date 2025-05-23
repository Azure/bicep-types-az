# Microsoft.HybridCompute
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.hybridcompute/machines

## microsoft.hybridcompute/machines/extensions

Create or Update a Machine Extension
```bicep
resource exampleResource 'Microsoft.HybridCompute/machines/extensions@2019-08-02-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'string'
  properties: {
    type: 'string'
    autoUpgradeMinorVersion: true
    forceUpdateTag: 'false'
    instanceView: {
      name: 'string'
      type: 'string'
      status: {
        code: 'string'
        displayStatus: 'string'
        level: 'Info'
        message: 'string'
        time: '2019-08-08T20:36:46.620Z'
      }
      typeHandlerVersion: 'string'
    }
    protectedSettings: {
    }
    publisher: 'Publisher1'
    settings: {
    }
    typeHandlerVersion: '1.0'
  }
}
```
