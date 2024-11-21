# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/securitycontacts

Create security contact data
```bicep
resource exampleResource 'Microsoft.Security/securityContacts@2023-12-01-preview' = {
  name: 'example'
  properties: {
    emails: 'john@contoso.com;jane@contoso.com'
    isEnabled: true
    notificationsByRole: {
      roles: [
        'Owner'
      ]
      state: 'On'
    }
    notificationsSources: [
      {
        minimalRiskLevel: 'Critical'
        sourceType: 'AttackPath'
      }
      {
        minimalSeverity: 'Medium'
        sourceType: 'Alert'
      }
    ]
    phone: '(214)275-4038'
  }
}
```
