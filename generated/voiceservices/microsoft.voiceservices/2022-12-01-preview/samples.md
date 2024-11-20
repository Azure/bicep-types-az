# Microsoft.VoiceServices

## microsoft.voiceservices/communicationsgateways

CreateCommunicationsGatewayResource
```bicep
resource exampleResource 'Microsoft.VoiceServices/communicationsGateways@2022-12-01-preview' = {
  name: 'example'
  location: 'useast'
  properties: {
    codecs: [
      'PCMA'
    ]
    connectivity: 'PublicAddress'
    e911Type: 'Standard'
    platforms: [
      'OperatorConnect'
    ]
    serviceLocations: [
      {
        name: 'useast'
        primaryRegionProperties: {
          operatorAddresses: [
            '198.51.100.1'
          ]
        }
      }
      {
        name: 'useast2'
        primaryRegionProperties: {
          operatorAddresses: [
            '198.51.100.2'
          ]
        }
      }
    ]
  }
}
```

## microsoft.voiceservices/communicationsgateways/contacts

CreateContactResource
```bicep
resource exampleResource 'Microsoft.VoiceServices/communicationsGateways/contacts@2022-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'useast'
  properties: {
    contactName: 'John Smith'
    email: 'johnsmith@example.com'
    phoneNumber: '+1-555-1234'
    role: 'Network Manager'
  }
}
```

## microsoft.voiceservices/communicationsgateways/testlines

CreateTestLineResource
```bicep
resource exampleResource 'Microsoft.VoiceServices/communicationsGateways/testLines@2022-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'useast'
  properties: {
    phoneNumber: '+1-555-1234'
    purpose: 'Automated'
  }
}
```
