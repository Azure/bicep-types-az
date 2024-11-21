# Microsoft.WindowsESU
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.windowsesu/multipleactivationkeys

CreateMultipleActivationKey
```bicep
resource exampleResource 'Microsoft.WindowsESU/multipleActivationKeys@2019-09-16-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    agreementNumber: '1a2b45ag'
    installedServerNumber: 100
    isEligible: true
    osType: 'WindowsServer2008'
    supportType: 'SupplementalServicing'
  }
}
```
