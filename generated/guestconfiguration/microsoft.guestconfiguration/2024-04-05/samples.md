# Microsoft.GuestConfiguration

## microsoft.guestconfiguration/guestconfigurationassignments

Create or update guest configuration assignment
```bicep
resource exampleResource 'Microsoft.GuestConfiguration/guestConfigurationAssignments@2024-04-05' = {
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
      contentManagedIdentity: 'test_identity'
      contentUri: 'https://thisisfake/pacakge'
      version: '1.0.0.3'
    }
  }
}
```
