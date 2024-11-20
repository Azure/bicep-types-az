# Microsoft.PowerPlatform

## microsoft.powerplatform/accounts

Create or update account
```bicep
resource exampleResource 'Microsoft.PowerPlatform/accounts@2020-10-30-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    description: 'Description of the account.'
  }
  tags: {
    Organization: 'Administration'
  }
}
```

## microsoft.powerplatform/enterprisepolicies

Create or update EnterprisePolicy
```bicep
resource exampleResource 'Microsoft.PowerPlatform/enterprisePolicies@2020-10-30-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  kind: 'Lockbox'
  location: 'East US'
  tags: {
    Organization: 'Administration'
  }
}
```

## microsoft.powerplatform/enterprisepolicies/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections@2020-10-30-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@contoso.com'
      status: 'Approved'
    }
  }
}
```
