# Microsoft.GuestConfiguration

## microsoft.guestconfiguration/guestconfigurationassignments

Create or update guest configuration assignment
```bicep
resource exampleResource 'Microsoft.GuestConfiguration/guestConfigurationAssignments@2018-06-30-preview' = {
  name: 'example'
  name: 'multiconfigassignment2'
  location: 'westcentralus'
  properties: {
    context: 'Azure policy'
    guestConfiguration: {
      name: 'AuditSecureProtocol'
      version: '1.0.0.3'
    }
  }
}
```
