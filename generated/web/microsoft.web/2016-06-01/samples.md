# Microsoft.Web
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.web/connectiongateways

Replace a connection gateway definition
```bicep
resource exampleResource 'Microsoft.Web/connectionGateways@2016-06-01' = {
  name: 'example'
  id: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testResourceGroup/providers/Microsoft.Web/connectionGateways/test123'
  properties: {
    backendUri: 'https://WABI-WEST-US-redirect.analysis.windows.net'
    connectionGatewayInstallation: {
      id: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/providers/Microsoft.Web/locations/westus/connectionGatewayInstallations/865dccd1-5d5c-45fe-b5a0-249d4de4134c'
    }
    contactInformation: [
      'test123@microsoft.com'
    ]
    displayName: 'test123'
    machineName: 'TEST123'
    status: 'Installed'
  }
}
```

## microsoft.web/connections

Replace a connection
```bicep
resource exampleResource 'Microsoft.Web/connections@2016-06-01' = {
  name: 'example'
  id: '/subscriptions/f34b22a3-2202-4fb1-b040-1332bd928c84/resourceGroups/testResourceGroup/providers/Microsoft.Web/connections/testManagedApi-1'
  properties: {
    api: {
      id: '/subscriptions/f34b22a3-2202-4fb1-b040-1332bd928c84/providers/Microsoft.Web/locations/centralus/managedApis/testManagedApi'
    }
    customParameterValues: {
    }
    displayName: 'testManagedApi'
    parameterValues: {
    }
  }
}
```

## microsoft.web/customapis

Replace a custom API
```bicep
resource exampleResource 'Microsoft.Web/customApis@2016-06-01' = {
  name: 'example'
  id: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testResourceGroup/providers/Microsoft.Web/customApis/testCustomApi'
  properties: {
    description: ''
    apiDefinitions: {
      originalSwaggerUrl: 'https://tempuri.org/swagger.json'
      swagger: {
      }
    }
    apiType: 'Rest'
    capabilities: [
    ]
    displayName: 'testCustomApi'
    iconUri: '/testIcon.svg'
  }
}
```
