# Microsoft.GuestConfiguration

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
