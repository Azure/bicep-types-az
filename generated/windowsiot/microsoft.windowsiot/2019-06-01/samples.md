# Microsoft.WindowsIoT
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
