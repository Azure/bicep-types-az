# Microsoft.WindowsIoT

## microsoft.windowsiot/deviceservices

Service_Create
```bicep
resource exampleResource 'Microsoft.WindowsIoT/deviceServices@2019-06-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    adminDomainName: 'd.e.f'
    billingDomainName: 'a.b.c'
    notes: 'blah'
    quantity: 1000000
  }
}
```
