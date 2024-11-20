# Microsoft.Network

## microsoft.network/networksecurityperimeters

Put Network Security Perimeter
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters@2023-07-01-preview' = {
  name: 'example'
  properties: {
  }
}
```

## microsoft.network/networksecurityperimeters/profiles

NspProfilesPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/profiles@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.network/networksecurityperimeters/profiles/accessrules

NspAccessRulePut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefixes: [
      '10.11.0.0/16'
      '10.10.1.0/24'
    ]
    direction: 'Inbound'
  }
}
```

## microsoft.network/networksecurityperimeters/resourceassociations

NspAssociationPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accessMode: 'Enforced'
    privateLinkResource: {
      id: '/subscriptions/{paasSubscriptionId}/resourceGroups/{paasResourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}'
    }
    profile: {
      id: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/networkSecurityPerimeters/nsp1/profiles/{profileName}'
    }
  }
}
```

## microsoft.network/networksecurityperimeters/links

NspLinksPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/links@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    autoApprovedRemotePerimeterResourceId: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/networkSecurityPerimeters/nsp2'
    localInboundProfiles: [
      '*'
    ]
    remoteInboundProfiles: [
      '*'
    ]
  }
}
```
