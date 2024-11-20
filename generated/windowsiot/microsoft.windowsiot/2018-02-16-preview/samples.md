# Microsoft.WindowsIoT

## microsoft.windowsiot/deviceservices

Service_Create
```bicep
resource exampleResource 'Microsoft.WindowsIoT/deviceServices@2018-02-16-preview' = {
  name: 'example'
  adminDomainName: 'd.e.f'
  billingDomainName: 'a.b.c'
  notes: 'blah'
  quantity: 1000000
}
```
