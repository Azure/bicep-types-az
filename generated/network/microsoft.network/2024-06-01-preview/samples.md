# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/networksecurityperimeters

Put Network Security Perimeter
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters@2024-06-01-preview' = {
  name: 'example'
  properties: {
  }
}
```

## microsoft.network/networksecurityperimeters/links

NspLinksPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/links@2024-06-01-preview' = {
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

## microsoft.network/networksecurityperimeters/loggingconfigurations

NspLoggingConfigurationPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/loggingConfigurations@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enabledLogCategories: [
      'NspPublicInboundPerimeterRulesDenied'
      'NspPublicOutboundPerimeterRulesDenied'
    ]
  }
}
```

## microsoft.network/networksecurityperimeters/profiles

NspProfilesPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/profiles@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.network/networksecurityperimeters/profiles/accessrules

NspAccessRulePut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2024-06-01-preview' = {
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
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2024-06-01-preview' = {
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
