# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/securitycontacts

Create security contact data
```bicep
resource exampleResource 'Microsoft.Security/securityContacts@2020-01-01-preview' = {
  name: 'example'
  properties: {
    alertNotifications: {
      minimalSeverity: 'Low'
      state: 'On'
    }
    emails: 'john@contoso.com;jane@contoso.com'
    notificationsByRole: {
      roles: [
        'Owner'
      ]
      state: 'On'
    }
    phone: '(214)275-4038'
  }
}
```
