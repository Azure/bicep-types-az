# Microsoft.Communication

## microsoft.communication/communicationservices

Create or update resource
```bicep
resource exampleResource 'Microsoft.Communication/communicationServices@2023-03-31' = {
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
resource exampleResource 'Microsoft.Communication/emailServices/domains@2023-03-31' = {
  parent: parentResource 
  name: 'example'
  location: 'Global'
  properties: {
    domainManagement: 'CustomerManaged'
  }
}
```

## microsoft.communication/emailservices

Create or update EmailService resource
```bicep
resource exampleResource 'Microsoft.Communication/emailServices@2023-03-31' = {
  name: 'example'
  location: 'Global'
  properties: {
    dataLocation: 'United States'
  }
}
```

## microsoft.communication/emailservices/domains/senderusernames

Create or update SenderUsernames resource
```bicep
resource exampleResource 'Microsoft.Communication/emailServices/domains/senderUsernames@2023-03-31' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'Contoso News Alerts'
    username: 'contosoNewsAlerts'
  }
}
```
