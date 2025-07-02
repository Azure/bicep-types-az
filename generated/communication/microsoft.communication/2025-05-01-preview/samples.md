# Microsoft.Communication
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.communication/communicationservices

Create or update resource
```bicep
resource exampleResource 'Microsoft.Communication/communicationServices@2025-05-01-preview' = {
  name: 'example'
  location: 'Global'
  properties: {
    dataLocation: 'United States'
  }
}
```

Create or update resource with DisableLocalAuth
```bicep
resource exampleResource 'Microsoft.Communication/communicationServices@2025-05-01-preview' = {
  name: 'example'
  location: 'Global'
  properties: {
    dataLocation: 'United States'
    disableLocalAuth: true
  }
}
```

Create or update resource with managed identity
```bicep
resource exampleResource 'Microsoft.Communication/communicationServices@2025-05-01-preview' = {
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

Create or update resource with PublicNetworkAccess
```bicep
resource exampleResource 'Microsoft.Communication/communicationServices@2025-05-01-preview' = {
  name: 'example'
  location: 'Global'
  properties: {
    dataLocation: 'United States'
    publicNetworkAccess: 'Enabled'
  }
}
```

## microsoft.communication/communicationservices/smtpusernames

CreateOrUpdate SmtpUsername resource
```bicep
resource exampleResource 'Microsoft.Communication/communicationServices/smtpUsernames@2025-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    entraApplicationId: 'aaaa1111-bbbb-2222-3333-aaaa111122bb'
    tenantId: 'aaaa1111-bbbb-2222-3333-aaaa11112222'
    username: 'newuser1@contoso.com'
  }
}
```

## microsoft.communication/emailservices

Create or update EmailService resource
```bicep
resource exampleResource 'Microsoft.Communication/emailServices@2025-05-01-preview' = {
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
resource exampleResource 'Microsoft.Communication/emailServices/domains@2025-05-01-preview' = {
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
resource exampleResource 'Microsoft.Communication/emailServices/domains/senderUsernames@2025-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'Contoso News Alerts'
    username: 'contosoNewsAlerts'
  }
}
```

## microsoft.communication/emailservices/domains/suppressionlists

CreateOrUpdate SuppressionLists resource.
```bicep
resource exampleResource 'Microsoft.Communication/emailServices/domains/suppressionLists@2025-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    listName: 'contosoNewsAlerts'
  }
}
```

## microsoft.communication/emailservices/domains/suppressionlists/suppressionlistaddresses

CreateOrUpdate SuppressionListAddress resource
```bicep
resource exampleResource 'Microsoft.Communication/emailServices/domains/suppressionLists/suppressionListAddresses@2025-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    email: 'newuser1@fabrikam.com'
    firstName: 'updatedFirstName'
  }
}
```
