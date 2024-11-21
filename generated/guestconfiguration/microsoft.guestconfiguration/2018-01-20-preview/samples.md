# Microsoft.GuestConfiguration

## microsoft.guestconfiguration/guestconfigurationassignments

Create or update guest configuration assignment
```bicep
resource exampleResource 'Microsoft.GuestConfiguration/guestConfigurationAssignments@2018-01-20-preview' = {
  name: 'example'
  name: 'SecureProtocol'
  location: 'westcentralus'
  properties: {
    guestConfiguration: {
      name: 'SecureProtocol'
    }
  }
}
```
