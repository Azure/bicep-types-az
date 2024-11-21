# Microsoft.GuestConfiguration
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
