# Microsoft.Web
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.web/certificates

Create Or Update Certificate
```bicep
resource exampleResource 'Microsoft.Web/certificates@2018-02-01' = {
  name: 'example'
  name: 'testc6282'
  type: 'Microsoft.Web/certificates'
  id: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.Web/certificates/testc6282'
  location: 'East US'
  properties: {
    expirationDate: '2039-12-31T23:59:59+00:00'
    friendlyName: ''
    hostNames: [
      'ServerCert'
    ]
    issueDate: '2015-11-12T23:40:25+00:00'
    issuer: 'CACert'
    password: '<password>'
    subjectName: 'ServerCert'
    thumbprint: 'FE703D7411A44163B6D32B3AD9B03E175886EBFE'
  }
}
```

## microsoft.web/serverfarms

Create Or Update App Service plan
```bicep
resource exampleResource 'Microsoft.Web/serverfarms@2018-02-01' = {
  name: 'example'
  name: 'testsf6141'
  type: 'Microsoft.Web/serverfarms'
  id: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.Web/serverfarms/testsf6141'
  kind: 'app'
  location: 'East US'
  properties: {
    name: 'testsf6141'
  }
  sku: {
    name: 'P1'
    capacity: 1
    family: 'P'
    size: 'P1'
    tier: 'Premium'
  }
}
```
