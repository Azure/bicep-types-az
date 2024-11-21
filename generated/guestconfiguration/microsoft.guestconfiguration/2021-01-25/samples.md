# Microsoft.GuestConfiguration

## microsoft.guestconfiguration/guestconfigurationassignments

Create or update guest configuration assignment
```bicep
resource exampleResource 'Microsoft.GuestConfiguration/guestConfigurationAssignments@2021-01-25' = {
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
