# Microsoft.Cdn
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.cdn/profiles

Profiles_Create
```bicep
resource exampleResource 'Microsoft.Cdn/profiles@2017-10-12' = {
  name: 'example'
  location: 'WestCentralUs'
  sku: {
    name: 'Standard_Verizon'
  }
}
```

## microsoft.cdn/profiles/endpoints

Endpoints_Create
```bicep
resource exampleResource 'Microsoft.Cdn/profiles/endpoints@2017-10-12' = {
  parent: parentResource 
  name: 'example'
  location: 'WestCentralUs'
  properties: {
    origins: [
      {
        name: 'www-bing-com'
        properties: {
          hostName: 'www.bing.com'
          httpPort: 80
          httpsPort: 443
        }
      }
    ]
  }
}
```

## microsoft.cdn/profiles/endpoints/customdomains

CustomDomains_Create
```bicep
resource exampleResource 'Microsoft.Cdn/profiles/endpoints/customDomains@2017-10-12' = {
  parent: parentResource 
  name: 'example'
  hostName: 'www.someDomain.net'
}
```
