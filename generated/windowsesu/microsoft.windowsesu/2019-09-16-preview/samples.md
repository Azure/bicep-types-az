# Microsoft.WindowsESU

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
