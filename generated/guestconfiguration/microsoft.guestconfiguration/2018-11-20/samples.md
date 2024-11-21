# Microsoft.GuestConfiguration
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.guestconfiguration/guestconfigurationassignments

Create or update guest configuration assignment
```bicep
resource exampleResource 'Microsoft.GuestConfiguration/guestConfigurationAssignments@2018-11-20' = {
  name: 'example'
  name: 'WhitelistedApplication'
  location: 'westcentralus'
  properties: {
    context: 'Azure policy'
    guestConfiguration: {
      name: 'WhitelistedApplication'
      assignmentType: 'ApplyAndAutoCorrect'
      configurationParameter: [
        {
          name: '[InstalledApplication]bwhitelistedapp;Name'
          value: 'NotePad,sql'
        }
      ]
      contentHash: '123contenthash'
      contentUri: 'https://thisisfake/pacakge'
      version: '1.*'
    }
  }
}
```
