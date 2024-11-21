# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/assignments

Define a default standard assignment
```bicep
resource exampleResource 'Microsoft.Security/assignments@2021-08-01-preview' = {
  name: 'example'
  properties: {
    description: 'Set of policies monitored by Azure Security Center for cross cloud'
    assignedStandard: {
      id: '/providers/Microsoft.Security/Standards/1f3afdf9-d0c9-4c3d-847f-89da613e70a8'
    }
    displayName: 'ASC Default'
    effect: 'audit'
    scope: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/ResourceGroup/rg'
  }
}
```

Exempt Recommendation From standard and resource
```bicep
resource exampleResource 'Microsoft.Security/assignments@2021-08-01-preview' = {
  name: 'example'
  properties: {
    description: 'Set of policies monitored by Azure Security Center for cross cloud'
    additionalData: {
      exemptionCategory: 'waiver'
    }
    assignedComponent: {
      key: '1195afff-c881-495e-9bc5-1486211ae03f'
    }
    assignedStandard: {
      id: '/providers/Microsoft.Security/Standards/1f3afdf9-d0c9-4c3d-847f-89da613e70a8'
    }
    displayName: 'ASC Default'
    effect: 'Exempt'
    expiresOn: '2022-05-01T19:50:47.083633Z'
    metadata: {
      ticketId: 12345
    }
    scope: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/ResourceGroup/rg'
  }
}
```

## microsoft.security/standards

Create a security standard on a specified scope
```bicep
resource exampleResource 'Microsoft.Security/standards@2021-08-01-preview' = {
  name: 'example'
  properties: {
    description: 'description of Azure Test Security Standard 1'
    category: 'SecurityCenter'
    components: [
      {
        key: '1195afff-c881-495e-9bc5-1486211ae03f'
      }
      {
        key: 'dbd0cb49-b563-45e7-9724-889e799fa648'
      }
    ]
    displayName: 'Azure Test Security Standard 1'
    supportedClouds: [
      'GCP'
    ]
  }
}
```
