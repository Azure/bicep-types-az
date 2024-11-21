# Microsoft.GuestConfiguration
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.guestconfiguration/guestconfigurationassignments

Create or update guest configuration assignment
```bicep
resource exampleResource 'Microsoft.GuestConfiguration/guestConfigurationAssignments@2022-01-25' = {
  name: 'example'
  name: 'NotInstalledApplicationForWindows'
  location: 'westcentralus'
  properties: {
    context: 'Azure policy'
    guestConfiguration: {
      name: 'NotInstalledApplicationForWindows'
      assignmentType: 'ApplyAndAutoCorrect'
      configurationParameter: [
        {
          name: '[InstalledApplication]NotInstalledApplicationResource1;Name'
          value: 'NotePad,sql'
        }
      ]
      contentHash: '123contenthash'
      contentUri: 'https://thisisfake/pacakge'
      version: '1.0.0.3'
    }
  }
}
```
