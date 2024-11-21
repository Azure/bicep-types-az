# Microsoft.Communication
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.communication/communicationservices

Create or update resource
```bicep
resource exampleResource 'Microsoft.Communication/communicationServices@2023-04-01-preview' = {
  name: 'example'
  location: 'Global'
  properties: {
    dataLocation: 'United States'
  }
}
```

Create or update resource with managed identity
```bicep
resource exampleResource 'Microsoft.Communication/communicationServices@2023-04-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'Global'
  properties: {
    dataLocation: 'United States'
  }
}
```

## microsoft.communication/emailservices

Create or update EmailService resource
```bicep
resource exampleResource 'Microsoft.Communication/emailServices@2023-04-01-preview' = {
  name: 'example'
  location: 'Global'
  properties: {
    dataLocation: 'United States'
  }
}
```

## microsoft.communication/emailservices/domains

Create or update Domains resource
```bicep
resource exampleResource 'Microsoft.Communication/emailServices/domains@2023-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'Global'
  properties: {
    domainManagement: 'CustomerManaged'
  }
}
```

## microsoft.communication/emailservices/domains/senderusernames

Create or update SenderUsernames resource
```bicep
resource exampleResource 'Microsoft.Communication/emailServices/domains/senderUsernames@2023-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'Contoso News Alerts'
    username: 'contosoNewsAlerts'
  }
}
```
