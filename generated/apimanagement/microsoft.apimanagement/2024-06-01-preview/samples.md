# Microsoft.ApiManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.apimanagement/gateways

ApiManagementCreateStandardGateway
```bicep
resource exampleResource 'Microsoft.ApiManagement/gateways@2024-06-01-preview' = {
  name: 'example'
  location: 'South Central US'
  properties: {
    backend: {
      subnet: {
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vn1/subnets/sn1'
      }
    }
  }
  sku: {
    name: 'Standard'
    capacity: 1
  }
  tags: {
    Name: 'Contoso'
    Test: 'User'
  }
}
```

ApiManagementCreateWorkspacePremiumGateway
```bicep
resource exampleResource 'Microsoft.ApiManagement/gateways@2024-06-01-preview' = {
  name: 'example'
  location: 'South Central US'
  properties: {
    backend: {
      subnet: {
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vn1/subnets/sn1'
      }
    }
    virtualNetworkType: 'External'
  }
  sku: {
    name: 'WorkspaceGatewayPremium'
    capacity: 1
  }
  tags: {
    Name: 'Contoso'
    Test: 'User'
  }
}
```

## microsoft.apimanagement/gateways/configconnections

ApiManagementCreateGatewayConfigConnection
```bicep
resource exampleResource 'Microsoft.ApiManagement/gateways/configConnections@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    sourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/services/apim-service-1/workspaces/ws-001'
  }
}
```

## microsoft.apimanagement/service

ApiManagementCreateMultiRegionServiceWithCustomHostname
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    additionalLocations: [
      {
        disableGateway: true
        location: 'East US'
        sku: {
          name: 'Premium'
          capacity: 1
        }
      }
    ]
    apiVersionConstraint: {
      minApiVersion: '2019-01-01'
    }
    hostnameConfigurations: [
      {
        type: 'Proxy'
        certificatePassword: 'Password'
        defaultSslBinding: true
        encodedCertificate: '****** Base 64 Encoded Certificate ************'
        hostName: 'gateway1.msitesting.net'
      }
      {
        type: 'Management'
        certificatePassword: 'Password'
        encodedCertificate: '****** Base 64 Encoded Certificate ************'
        hostName: 'mgmt.msitesting.net'
      }
      {
        type: 'Portal'
        certificatePassword: 'Password'
        encodedCertificate: '****** Base 64 Encoded Certificate ************'
        hostName: 'portal1.msitesting.net'
      }
      {
        type: 'ConfigurationApi'
        certificatePassword: 'Password'
        encodedCertificate: '****** Base 64 Encoded Certificate ************'
        hostName: 'configuration-api.msitesting.net'
      }
    ]
    publisherEmail: 'apim@autorestsdk.com'
    publisherName: 'autorestsdk'
    virtualNetworkType: 'None'
  }
  sku: {
    name: 'Premium'
    capacity: 1
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
    tag3: 'value3'
  }
}
```

ApiManagementCreateService
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  location: 'South Central US'
  properties: {
    publisherEmail: 'foo@contoso.com'
    publisherName: 'foo'
  }
  sku: {
    name: 'Developer'
    capacity: 1
  }
  tags: {
    Name: 'Contoso'
    Test: 'User'
  }
}
```

ApiManagementCreateServiceHavingMsi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    publisherEmail: 'apim@autorestsdk.com'
    publisherName: 'autorestsdk'
  }
  sku: {
    name: 'Consumption'
    capacity: 0
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
    tag3: 'value3'
  }
}
```

ApiManagementCreateServiceInVnetWithPublicIP
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  location: 'East US 2 EUAP'
  properties: {
    publicIpAddressId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgName/providers/Microsoft.Network/publicIPAddresses/apimazvnet'
    publisherEmail: 'apim@autorestsdk.com'
    publisherName: 'autorestsdk'
    virtualNetworkConfiguration: {
      subnetResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgName/providers/Microsoft.Network/virtualNetworks/apimcus/subnets/tenant'
    }
    virtualNetworkType: 'External'
  }
  sku: {
    name: 'Premium'
    capacity: 2
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
    tag3: 'value3'
  }
  zones: [
    '1'
    '2'
  ]
}
```

ApiManagementCreateServiceInZones
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  location: 'North europe'
  properties: {
    publisherEmail: 'apim@autorestsdk.com'
    publisherName: 'autorestsdk'
  }
  sku: {
    name: 'Premium'
    capacity: 2
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
    tag3: 'value3'
  }
  zones: [
    '1'
    '2'
  ]
}
```

ApiManagementCreateServiceSkuv2Service
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    publisherEmail: 'apim@autorestsdk.com'
    publisherName: 'autorestsdk'
  }
  sku: {
    name: 'StandardV2'
    capacity: 1
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
    tag3: 'value3'
  }
}
```

ApiManagementCreateServiceWithCustomHostnameKeyVault
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1: {
      }
    }
  }
  location: 'North Europe'
  properties: {
    apiVersionConstraint: {
      minApiVersion: '2019-01-01'
    }
    hostnameConfigurations: [
      {
        type: 'Proxy'
        defaultSslBinding: true
        hostName: 'gateway1.msitesting.net'
        identityClientId: '329419bc-adec-4dce-9568-25a6d486e468'
        keyVaultId: 'https://rpbvtkeyvaultintegration.vault.azure.net/secrets/msitestingCert'
      }
      {
        type: 'Management'
        hostName: 'mgmt.msitesting.net'
        identityClientId: '329419bc-adec-4dce-9568-25a6d486e468'
        keyVaultId: 'https://rpbvtkeyvaultintegration.vault.azure.net/secrets/msitestingCert'
      }
      {
        type: 'Portal'
        hostName: 'portal1.msitesting.net'
        identityClientId: '329419bc-adec-4dce-9568-25a6d486e468'
        keyVaultId: 'https://rpbvtkeyvaultintegration.vault.azure.net/secrets/msitestingCert'
      }
      {
        type: 'ConfigurationApi'
        certificatePassword: 'Password'
        encodedCertificate: '****** Base 64 Encoded Certificate ************'
        hostName: 'configuration-api.msitesting.net'
      }
    ]
    publisherEmail: 'apim@autorestsdk.com'
    publisherName: 'autorestsdk'
    virtualNetworkType: 'None'
  }
  sku: {
    name: 'Premium'
    capacity: 1
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
    tag3: 'value3'
  }
}
```

ApiManagementCreateServiceWithDeveloperPortal
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  location: 'South Central US'
  properties: {
    developerPortalStatus: 'Enabled'
    publisherEmail: 'foo@contoso.com'
    publisherName: 'foo'
  }
  sku: {
    name: 'Developer'
    capacity: 1
  }
  tags: {
    Name: 'Contoso'
    Test: 'User'
  }
}
```

ApiManagementCreateServiceWithNatGatewayEnabled
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    natGatewayState: 'Enabled'
    publisherEmail: 'apim@autorestsdk.com'
    publisherName: 'autorestsdk'
  }
  sku: {
    name: 'Premium'
    capacity: 1
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
    tag3: 'value3'
  }
}
```

ApiManagementCreateServiceWithoutLegacyConfigurationApi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  location: 'Central US'
  properties: {
    configurationApi: {
      legacyApi: 'Disabled'
    }
    publisherEmail: 'apim@autorestsdk.com'
    publisherName: 'autorestsdk'
  }
  sku: {
    name: 'Basic'
    capacity: 1
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
    tag3: 'value3'
  }
}
```

ApiManagementCreateServiceWithSystemCertificates
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  location: 'Central US'
  properties: {
    certificates: [
      {
        certificatePassword: 'Password'
        encodedCertificate: '*******Base64 encoded Certificate******************'
        storeName: 'CertificateAuthority'
      }
    ]
    publisherEmail: 'apim@autorestsdk.com'
    publisherName: 'autorestsdk'
  }
  sku: {
    name: 'Basic'
    capacity: 1
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
    tag3: 'value3'
  }
}
```

ApiManagementCreateServiceWithUserAssignedIdentity
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/apimService1: {
      }
    }
  }
  location: 'West US'
  properties: {
    publisherEmail: 'apim@autorestsdk.com'
    publisherName: 'autorestsdk'
  }
  sku: {
    name: 'Consumption'
    capacity: 0
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
    tag3: 'value3'
  }
}
```

ApiManagementUndelete
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2024-06-01-preview' = {
  name: 'example'
  location: 'South Central US'
  properties: {
    publisherEmail: 'foo@contoso.com'
    publisherName: 'foo'
    restore: true
  }
  sku: {
    name: 'Developer'
    capacity: 1
  }
}
```

## microsoft.apimanagement/service/apis

ApiManagementCreateApi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'newapiPath'
    description: 'apidescription5200'
    authenticationSettings: {
      oAuth2: {
        authorizationServerId: 'authorizationServerId2283'
        scope: 'oauth2scope2580'
      }
    }
    displayName: 'apiname1463'
    protocols: [
      'https'
      'http'
    ]
    serviceUrl: 'http://newechoapi.cloudapp.net/api'
    subscriptionKeyParameterNames: {
      header: 'header4520'
      query: 'query3037'
    }
  }
}
```

ApiManagementCreateApiClone
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'echo2'
    description: 'Copy of Existing Echo Api including Operations.'
    displayName: 'Echo API2'
    isCurrent: true
    protocols: [
      'http'
      'https'
    ]
    serviceUrl: 'http://echoapi.cloudapp.net/api'
    sourceApiId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/58a4aeac497000007d040001'
    subscriptionRequired: true
  }
}
```

ApiManagementCreateApiNewVersionUsingExistingApi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'echo2'
    description: 'Create Echo API into a new Version using Existing Version Set and Copy all Operations.'
    apiVersion: 'v4'
    apiVersionSetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apiVersionSets/aa9c59e6-c0cd-4258-9356-9ca7d2f0b458'
    displayName: 'Echo API2'
    isCurrent: true
    protocols: [
      'http'
      'https'
    ]
    serviceUrl: 'http://echoapi.cloudapp.net/api'
    sourceApiId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/echoPath'
    subscriptionRequired: true
  }
}
```

ApiManagementCreateApiRevisionFromExistingApi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'echo'
    apiRevisionDescription: 'Creating a Revision of an existing API'
    serviceUrl: 'http://echoapi.cloudapp.net/apiv3'
    sourceApiId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/echo-api'
  }
}
```

ApiManagementCreateApiUsingImportOverrideServiceUrl
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'swagger-link'
    path: 'petstoreapi123'
    serviceUrl: 'http://petstore.swagger.wordnik.com/api'
    value: 'http://apimpimportviaurl.azurewebsites.net/api/apidocs/'
  }
}
```

ApiManagementCreateApiUsingOai3Import
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'openapi-link'
    path: 'petstore'
    value: 'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml'
  }
}
```

ApiManagementCreateApiUsingOai3ImportWithTranslateRequiredQueryParametersConduct
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'openapi-link'
    path: 'petstore'
    translateRequiredQueryParameters: 'template'
    value: 'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml'
  }
}
```

ApiManagementCreateApiUsingSwaggerImport
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'swagger-link-json'
    path: 'petstore'
    value: 'http://petstore.swagger.io/v2/swagger.json'
  }
}
```

ApiManagementCreateApiUsingWadlImport
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'wadl-link-json'
    path: 'collector'
    value: 'https://developer.cisco.com/media/wae-release-6-2-api-reference/wae-collector-rest-api/application.wadl'
  }
}
```

ApiManagementCreateApiWithMultipleAuthServers
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'newapiPath'
    description: 'apidescription5200'
    authenticationSettings: {
      oAuth2AuthenticationSettings: [
        {
          authorizationServerId: 'authorizationServerId2283'
          scope: 'oauth2scope2580'
        }
        {
          authorizationServerId: 'authorizationServerId2284'
          scope: 'oauth2scope2581'
        }
      ]
    }
    displayName: 'apiname1463'
    protocols: [
      'https'
      'http'
    ]
    serviceUrl: 'http://newechoapi.cloudapp.net/api'
    subscriptionKeyParameterNames: {
      header: 'header4520'
      query: 'query3037'
    }
  }
}
```

ApiManagementCreateApiWithMultipleOpenIdConnectProviders
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'newapiPath'
    description: 'apidescription5200'
    authenticationSettings: {
      openidAuthenticationSettings: [
        {
          bearerTokenSendingMethods: [
            'authorizationHeader'
          ]
          openidProviderId: 'openidProviderId2283'
        }
        {
          bearerTokenSendingMethods: [
            'authorizationHeader'
          ]
          openidProviderId: 'openidProviderId2284'
        }
      ]
    }
    displayName: 'apiname1463'
    protocols: [
      'https'
      'http'
    ]
    serviceUrl: 'http://newechoapi.cloudapp.net/api'
    subscriptionKeyParameterNames: {
      header: 'header4520'
      query: 'query3037'
    }
  }
}
```

ApiManagementCreateApiWithOpenIdConnect
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'petstore'
    description: 'This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.'
    authenticationSettings: {
      openid: {
        bearerTokenSendingMethods: [
          'authorizationHeader'
        ]
        openidProviderId: 'testopenid'
      }
    }
    displayName: 'Swagger Petstore'
    protocols: [
      'https'
    ]
    serviceUrl: 'http://petstore.swagger.io/v2'
    subscriptionKeyParameterNames: {
      header: 'Ocp-Apim-Subscription-Key'
      query: 'subscription-key'
    }
  }
}
```

ApiManagementCreateGraphQLApi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'graphql'
    path: 'graphql-api'
    description: 'apidescription5200'
    displayName: 'apiname1463'
    protocols: [
      'http'
      'https'
    ]
    serviceUrl: 'https://api.spacex.land/graphql'
  }
}
```

ApiManagementCreateGrpcApi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'grpc'
    format: 'grpc-link'
    path: 'grpc-api'
    description: 'apidescription5200'
    displayName: 'apiname1463'
    protocols: [
      'https'
    ]
    serviceUrl: 'https://your-api-hostname/samples'
    value: 'https://raw.githubusercontent.com/kedacore/keda/main/pkg/scalers/externalscaler/externalscaler.proto'
  }
}
```

ApiManagementCreateODataApi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'odata'
    format: 'odata-link'
    path: 'odata-api'
    description: 'apidescription5200'
    displayName: 'apiname1463'
    protocols: [
      'http'
      'https'
    ]
    serviceUrl: 'https://services.odata.org/TripPinWebApiService'
    value: 'https://services.odata.org/TripPinWebApiService/$metadata'
  }
}
```

ApiManagementCreateSoapPassThroughApiUsingWsdlImport
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'wsdl-link'
    path: 'currency'
    apiType: 'soap'
    value: 'http://www.webservicex.net/CurrencyConvertor.asmx?WSDL'
    wsdlSelector: {
      wsdlEndpointName: 'CurrencyConvertorSoap'
      wsdlServiceName: 'CurrencyConvertor'
    }
  }
}
```

ApiManagementCreateSoapToRestApiUsingWsdlImport
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'wsdl-link'
    path: 'currency'
    value: 'http://www.webservicex.net/CurrencyConvertor.asmx?WSDL'
    wsdlSelector: {
      wsdlEndpointName: 'CurrencyConvertorSoap'
      wsdlServiceName: 'CurrencyConvertor'
    }
  }
}
```

ApiManagementCreateWebSocketApi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'websocket'
    path: 'newapiPath'
    description: 'apidescription5200'
    displayName: 'apiname1463'
    protocols: [
      'wss'
      'ws'
    ]
    serviceUrl: 'wss://echo.websocket.org'
  }
}
```

## microsoft.apimanagement/service/apis/diagnostics

ApiManagementCreateApiDiagnostic
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/diagnostics@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    alwaysLog: 'allErrors'
    backend: {
      response: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
      request: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
    }
    frontend: {
      response: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
      request: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
    }
    loggerId: '/loggers/applicationinsights'
    sampling: {
      percentage: 50
      samplingType: 'fixed'
    }
  }
}
```

## microsoft.apimanagement/service/apis/issues

ApiManagementCreateApiIssue
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/issues@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'New API issue description'
    createdDate: '2018-02-01T22:21:20.467Z'
    state: 'open'
    title: 'New API issue'
    userId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/users/1'
  }
}
```

## microsoft.apimanagement/service/apis/issues/attachments

ApiManagementCreateApiIssueAttachment
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/issues/attachments@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    content: 'IEJhc2U2NA=='
    contentFormat: 'image/jpeg'
    title: 'Issue attachment.'
  }
}
```

## microsoft.apimanagement/service/apis/issues/comments

ApiManagementCreateApiIssueComment
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/issues/comments@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    createdDate: '2018-02-01T22:21:20.467Z'
    text: 'Issue comment.'
    userId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/users/1'
  }
}
```

## microsoft.apimanagement/service/apis/operations

ApiManagementCreateApiOperation
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/operations@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    method: 'POST'
    description: 'This can only be done by the logged in user.'
    displayName: 'createUser2'
    templateParameters: [
    ]
    urlTemplate: '/user1'
    request: {
      description: 'Created user object'
      headers: [
      ]
      queryParameters: [
      ]
      representations: [
        {
          contentType: 'application/json'
          schemaId: '592f6c1d0af5840ca8897f0c'
          typeName: 'User'
        }
      ]
    }
    responses: [
      {
        description: 'successful operation'
        headers: [
        ]
        representations: [
          {
            contentType: 'application/xml'
          }
          {
            contentType: 'application/json'
          }
        ]
        statusCode: 200
      }
    ]
  }
}
```

## microsoft.apimanagement/service/apis/operations/policies

ApiManagementCreateApiOperationPolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/operations/policies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'xml'
    value: '<policies> <inbound /> <backend>    <forward-request />  </backend>  <outbound /></policies>'
  }
}
```

## microsoft.apimanagement/service/apis/policies

ApiManagementCreateApiPolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/policies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'xml'
    value: '<policies> <inbound /> <backend>    <forward-request />  </backend>  <outbound /></policies>'
  }
}
```

ApiManagementCreateApiPolicyNonXmlEncoded
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/policies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'rawxml'
    value: '<policies>\r\n     <inbound>\r\n     <base />\r\n  <set-header name="newvalue" exists-action="override">\r\n   <value>"@(context.Request.Headers.FirstOrDefault(h => h.Ke=="Via"))" </value>\r\n    </set-header>\r\n  </inbound>\r\n      </policies>'
  }
}
```

## microsoft.apimanagement/service/apis/releases

ApiManagementCreateApiRelease
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/releases@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    apiId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/a1'
    notes: 'yahooagain'
  }
}
```

## microsoft.apimanagement/service/apis/resolvers

ApiManagementCreateGraphQLApiResolver
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/resolvers@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'Query/users'
    description: 'A GraphQL Resolver example'
    displayName: 'Query Users'
  }
}
```

## microsoft.apimanagement/service/apis/resolvers/policies

ApiManagementCreateGraphQLApiResolverPolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/resolvers/policies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'xml'
    value: '<http-data-source><http-request><set-method>GET</set-method><set-backend-service base-url="https://some.service.com" /><set-url>/api/users</set-url></http-request></http-data-source>'
  }
}
```

## microsoft.apimanagement/service/apis/schemas

ApiManagementCreateApiSchema
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/schemas@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contentType: 'application/vnd.ms-azure-apim.xsd+xml'
    document: {
      value: '<s:schema elementFormDefault="qualified" targetNamespace="http://ws.cdyne.com/WeatherWS/" xmlns:tns="http://ws.cdyne.com/WeatherWS/" xmlns:s="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/" xmlns:mime="http://schemas.xmlsoap.org/wsdl/mime/" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:http="http://schemas.xmlsoap.org/wsdl/http/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:apim-wsdltns="http://ws.cdyne.com/WeatherWS/">\r\n  <s:element name="GetWeatherInformation">\r\n    <s:complexType />\r\n  </s:element>\r\n  <s:element name="GetWeatherInformationResponse">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="GetWeatherInformationResult" type="tns:ArrayOfWeatherDescription" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:complexType name="ArrayOfWeatherDescription">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="unbounded" name="WeatherDescription" type="tns:WeatherDescription" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="WeatherDescription">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="WeatherID" type="s:short" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Description" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="PictureURL" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:element name="GetCityForecastByZIP">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="ZIP" type="s:string" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:element name="GetCityForecastByZIPResponse">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="GetCityForecastByZIPResult" type="tns:ForecastReturn" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:complexType name="ForecastReturn">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="Success" type="s:boolean" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="ResponseText" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="State" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="City" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="WeatherStationCity" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="ForecastResult" type="tns:ArrayOfForecast" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="ArrayOfForecast">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="unbounded" name="Forecast" nillable="true" type="tns:Forecast" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="Forecast">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="Date" type="s:dateTime" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="WeatherID" type="s:short" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Desciption" type="s:string" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="Temperatures" type="tns:temp" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="ProbabilityOfPrecipiation" type="tns:POP" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="temp">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="1" name="MorningLow" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="DaytimeHigh" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="POP">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="1" name="Nighttime" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Daytime" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:element name="GetCityWeatherByZIP">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="ZIP" type="s:string" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:element name="GetCityWeatherByZIPResponse">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="1" maxOccurs="1" name="GetCityWeatherByZIPResult" type="tns:WeatherReturn" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:complexType name="WeatherReturn">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="Success" type="s:boolean" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="ResponseText" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="State" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="City" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="WeatherStationCity" type="s:string" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="WeatherID" type="s:short" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Description" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Temperature" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="RelativeHumidity" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Wind" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Pressure" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Visibility" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="WindChill" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Remarks" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:element name="ArrayOfWeatherDescription" nillable="true" type="tns:ArrayOfWeatherDescription" />\r\n  <s:element name="ForecastReturn" nillable="true" type="tns:ForecastReturn" />\r\n  <s:element name="WeatherReturn" type="tns:WeatherReturn" />\r\n</s:schema>'
    }
  }
}
```

## microsoft.apimanagement/service/apis/tagdescriptions

ApiManagementCreateApiTagDescription
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/tagDescriptions@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Some description that will be displayed for operation\'s tag if the tag is assigned to operation of the API'
    externalDocsDescription: 'Description of the external docs resource'
    externalDocsUrl: 'http://some.url/additionaldoc'
  }
}
```

## microsoft.apimanagement/service/apis/wikis

ApiManagementCreateApiWiki
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/wikis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    documents: [
      {
        documentationId: 'docId1'
      }
      {
        documentationId: 'docId2'
      }
    ]
  }
}
```

## microsoft.apimanagement/service/apiversionsets

ApiManagementCreateApiVersionSet
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apiVersionSets@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Version configuration'
    displayName: 'api set 1'
    versioningScheme: 'Segment'
  }
}
```

## microsoft.apimanagement/service/authorizationproviders

ApiManagementCreateAuthorizationProviderAADAuthCode
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/authorizationProviders@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'aadwithauthcode'
    identityProvider: 'aad'
    oauth2: {
      grantTypes: {
        authorizationCode: {
          clientId: 'clientsecretid'
          clientSecret: 'clientsecretvalue'
          resourceUri: 'https://graph.microsoft.com'
          scopes: 'User.Read.All Group.Read.All'
        }
      }
      redirectUrl: 'https://authorization-manager.consent.azure-apim.net/redirect/apim/apimService1'
    }
  }
}
```

ApiManagementCreateAuthorizationProviderAADClientCred
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/authorizationProviders@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'aadwithclientcred'
    identityProvider: 'aad'
    oauth2: {
      grantTypes: {
        authorizationCode: {
          resourceUri: 'https://graph.microsoft.com'
          scopes: 'User.Read.All Group.Read.All'
        }
      }
      redirectUrl: 'https://authorization-manager.consent.azure-apim.net/redirect/apim/apimService1'
    }
  }
}
```

ApiManagementCreateAuthorizationProviderGenericOAuth2
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/authorizationProviders@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'eventbrite'
    identityProvider: 'oauth2'
    oauth2: {
      grantTypes: {
        authorizationCode: {
          authorizationUrl: 'https://www.eventbrite.com/oauth/authorize'
          clientId: 'clientid'
          clientSecret: 'clientsecretvalue'
          refreshUrl: 'https://www.eventbrite.com/oauth/token'
          scopes: {
          }
          tokenUrl: 'https://www.eventbrite.com/oauth/token'
        }
      }
      redirectUrl: 'https://authorization-manager.consent.azure-apim.net/redirect/apim/apimService1'
    }
  }
}
```

ApiManagementCreateAuthorizationProviderOOBGoogle
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/authorizationProviders@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'google'
    identityProvider: 'google'
    oauth2: {
      grantTypes: {
        authorizationCode: {
          clientId: '99999999-xxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com'
          clientSecret: 'clientsecretvalue'
          scopes: 'openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
        }
      }
      redirectUrl: 'https://authorization-manager.consent.azure-apim.net/redirect/apim/apimService1'
    }
  }
}
```

## microsoft.apimanagement/service/authorizationproviders/authorizations

ApiManagementCreateAuthorizationAADAuthCode
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/authorizationProviders/authorizations@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authorizationType: 'OAuth2'
    oauth2grantType: 'AuthorizationCode'
  }
}
```

ApiManagementCreateAuthorizationAADClientCred
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/authorizationProviders/authorizations@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authorizationType: 'OAuth2'
    oauth2grantType: 'AuthorizationCode'
    parameters: {
      clientId: 'clientsecretid'
      clientSecret: 'clientsecretvalue'
    }
  }
}
```

## microsoft.apimanagement/service/authorizationproviders/authorizations/accesspolicies

ApiManagementCreateAuthorizationAccessPolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/authorizationProviders/authorizations/accessPolicies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    appIds: [
      'd5f04bb0-ba78-4878-a43e-35a0b74fe315'
    ]
    objectId: 'fe0bed83-631f-4149-bd0b-0464b1bc7cab'
    tenantId: '13932a0d-5c63-4d37-901d-1df9c97722ff'
  }
}
```

## microsoft.apimanagement/service/authorizationservers

ApiManagementCreateAuthorizationServer
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/authorizationServers@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'test server'
    authorizationEndpoint: 'https://www.contoso.com/oauth2/auth'
    authorizationMethods: [
      'GET'
    ]
    bearerTokenSendingMethods: [
      'authorizationHeader'
    ]
    clientId: '1'
    clientRegistrationEndpoint: 'https://www.contoso.com/apps'
    clientSecret: '2'
    defaultScope: 'read write'
    displayName: 'test2'
    grantTypes: [
      'authorizationCode'
      'implicit'
    ]
    resourceOwnerPassword: 'pwd'
    resourceOwnerUsername: 'un'
    supportState: true
    tokenEndpoint: 'https://www.contoso.com/oauth2/token'
    useInApiDocumentation: true
    useInTestConsole: false
  }
}
```

## microsoft.apimanagement/service/backends

ApiManagementCreateBackendProxyBackend
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/backends@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'description5308'
    credentials: {
      authorization: {
        parameter: 'opensesma'
        scheme: 'Basic'
      }
      header: {
        x-my-1: [
          'val1'
          'val2'
        ]
      }
      query: {
        sv: [
          'xx'
          'bb'
          'cc'
        ]
      }
    }
    proxy: {
      password: '<password>'
      url: 'http://192.168.1.1:8080'
      username: 'Contoso\\admin'
    }
    tls: {
      validateCertificateChain: true
      validateCertificateName: true
    }
    url: 'https://backendname2644/'
    protocol: 'http'
  }
}
```

ApiManagementCreateBackendServiceFabric
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/backends@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Service Fabric Test App 1'
    properties: {
      serviceFabricCluster: {
        clientCertificateId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/certificates/cert1'
        managementEndpoints: [
          'https://somecluster.com'
        ]
        maxPartitionResolutionRetries: 5
        serverX509Names: [
          {
            name: 'ServerCommonName1'
            issuerCertificateThumbprint: 'IssuerCertificateThumbprint1'
          }
        ]
      }
    }
    url: 'fabric:/mytestapp/mytestservice'
    protocol: 'http'
  }
}
```

## microsoft.apimanagement/service/caches

ApiManagementCreateCache
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/caches@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Redis cache instances in West India'
    connectionString: 'apim.redis.cache.windows.net:6380,password=xc,ssl=True,abortConnect=False'
    resourceId: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Cache/redis/apimservice1'
    useFromLocation: 'default'
  }
}
```

## microsoft.apimanagement/service/certificates

ApiManagementCreateCertificate
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/certificates@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    data: '****************Base 64 Encoded Certificate *******************************'
    password: '****Certificate Password******'
  }
}
```

ApiManagementCreateCertificateWithKeyVault
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/certificates@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    keyVault: {
      identityClientId: 'ceaa6b06-c00f-43ef-99ac-f53d1fe876a0'
      secretIdentifier: 'https://rpbvtkeyvaultintegration.vault-int.azure-int.net/secrets/msitestingCert'
    }
  }
}
```

## microsoft.apimanagement/service/contenttypes

ApiManagementCreateContentType
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/contentTypes@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    name: 'Page'
    schema: {
      additionalProperties: false
      properties: {
        en_us: {
          type: 'object'
          additionalProperties: false
          properties: {
            description: {
              type: 'string'
              description: 'Page description. This property gets included in SEO attributes.'
              indexed: true
              title: 'Description'
            }
            documentId: {
              type: 'string'
              description: 'Reference to page content document.'
              title: 'Document ID'
            }
            keywords: {
              type: 'string'
              description: 'Page keywords. This property gets included in SEO attributes.'
              indexed: true
              title: 'Keywords'
            }
            permalink: {
              type: 'string'
              description: 'Page permalink, e.g. \'/about\'.'
              indexed: true
              title: 'Permalink'
            }
            title: {
              type: 'string'
              description: 'Page title. This property gets included in SEO attributes.'
              indexed: true
              title: 'Title'
            }
          }
          required: [
            'title'
            'permalink'
            'documentId'
          ]
        }
      }
    }
    description: 'A regular page'
    version: '1.0.0'
  }
}
```

## microsoft.apimanagement/service/contenttypes/contentitems

ApiManagementCreateContentTypeContentItem
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/contentTypes/contentItems@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    en_us: {
      description: 'Short story about the company.'
      documentId: 'contentTypes/document/contentItems/4e3cf6a5-574a-ba08-1f23-2e7a38faa6d8'
      keywords: 'company, about'
      permalink: '/about'
      title: 'About'
    }
  }
}
```

## microsoft.apimanagement/service/diagnostics

ApiManagementCreateDiagnostic
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/diagnostics@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    alwaysLog: 'allErrors'
    backend: {
      response: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
      request: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
    }
    frontend: {
      response: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
      request: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
    }
    loggerId: '/loggers/azuremonitor'
    sampling: {
      percentage: 50
      samplingType: 'fixed'
    }
  }
}
```

## microsoft.apimanagement/service/documentations

ApiManagementCreateDocumentation
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/documentations@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    content: 'content'
    title: 'Title'
  }
}
```

## microsoft.apimanagement/service/gateways

ApiManagementCreateGateway
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/gateways@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'my gateway 1'
    locationData: {
      name: 'my location'
    }
  }
}
```

## microsoft.apimanagement/service/gateways/apis

ApiManagementCreateGatewayApi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/gateways/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    provisioningState: 'created'
  }
}
```

## microsoft.apimanagement/service/gateways/certificateauthorities

ApiManagementCreateGatewayCertificateAuthority
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/gateways/certificateAuthorities@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    isTrusted: false
  }
}
```

## microsoft.apimanagement/service/gateways/hostnameconfigurations

ApiManagementCreateGatewayHostnameConfiguration
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/gateways/hostnameConfigurations@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certificateId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/certificates/cert1'
    hostname: '*'
    http2Enabled: true
    negotiateClientCertificate: false
    tls10Enabled: false
    tls11Enabled: false
  }
}
```

## microsoft.apimanagement/service/groups

ApiManagementCreateGroup
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/groups@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'temp group'
  }
}
```

ApiManagementCreateGroupExternal
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/groups@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'external'
    description: 'new group to test'
    displayName: 'NewGroup (samiraad.onmicrosoft.com)'
    externalId: 'aad://samiraad.onmicrosoft.com/groups/83cf2753-5831-4675-bc0e-2f8dc067c58d'
  }
}
```

## microsoft.apimanagement/service/identityproviders

ApiManagementCreateIdentityProvider
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/identityProviders@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clientId: 'facebookid'
    clientSecret: 'facebookapplicationsecret'
  }
}
```

## microsoft.apimanagement/service/loggers

ApiManagementCreateAILogger
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/loggers@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'adding a new logger'
    credentials: {
      instrumentationKey: '11................a1'
    }
    loggerType: 'applicationInsights'
  }
}
```

ApiManagementCreateEHLogger
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/loggers@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'adding a new logger'
    credentials: {
      name: 'hydraeventhub'
      connectionString: 'Endpoint=sb://hydraeventhub-ns.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=********='
    }
    loggerType: 'azureEventHub'
  }
}
```

## microsoft.apimanagement/service/namedvalues

ApiManagementCreateNamedValue
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/namedValues@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'prop3name'
    secret: false
    tags: [
      'foo'
      'bar'
    ]
    value: 'propValue'
  }
}
```

ApiManagementCreateNamedValueWithKeyVault
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/namedValues@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'prop6namekv'
    keyVault: {
      identityClientId: 'ceaa6b06-c00f-43ef-99ac-f53d1fe876a0'
      secretIdentifier: 'https://contoso.vault.azure.net/secrets/aadSecret'
    }
    secret: true
    tags: [
      'foo'
      'bar'
    ]
  }
}
```

## microsoft.apimanagement/service/openidconnectproviders

ApiManagementCreateOpenIdConnectProvider
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/openidConnectProviders@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clientId: 'oidprovidertemplate3'
    clientSecret: 'x'
    displayName: 'templateoidprovider3'
    metadataEndpoint: 'https://oidprovider-template3.net'
    useInApiDocumentation: true
    useInTestConsole: false
  }
}
```

## microsoft.apimanagement/service/policies

ApiManagementCreatePolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/policies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'xml'
    value: '<policies>\r\n  <inbound />\r\n  <backend>\r\n    <forward-request />\r\n  </backend>\r\n  <outbound />\r\n</policies>'
  }
}
```

## microsoft.apimanagement/service/policyfragments

ApiManagementCreatePolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/policyFragments@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'xml'
    description: 'A policy fragment example'
    value: '<fragment><json-to-xml apply="always" consider-accept-header="false" /></fragment>'
  }
}
```

## microsoft.apimanagement/service/policyrestrictions

ApiManagementCreatePolicyRestriction
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/policyRestrictions@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    requireBase: 'true'
    scope: 'Sample Path to the policy document.'
  }
}
```

## microsoft.apimanagement/service/portalconfigs

ApiManagementCreatePortalConfig
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/portalconfigs@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cors: {
      allowedOrigins: [
        'https://contoso.com'
      ]
    }
    csp: {
      allowedSources: [
        '*.contoso.com'
      ]
      mode: 'reportOnly'
      reportUri: [
        'https://report.contoso.com'
      ]
    }
    delegation: {
      delegateRegistration: false
      delegateSubscription: false
      delegationUrl: {
      }
      validationKey: {
      }
    }
    enableBasicAuth: true
    signin: {
      require: false
    }
    signup: {
      termsOfService: {
        requireConsent: false
        text: 'I agree to the service terms and conditions.'
      }
    }
  }
}
```

## microsoft.apimanagement/service/portalrevisions

ApiManagementCreatePortalRevision
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/portalRevisions@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'portal revision 1'
    isCurrent: true
  }
}
```

## microsoft.apimanagement/service/portalsettings

ApiManagementPortalSettingsUpdateDelegation
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/portalsettings@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    subscriptions: {
      enabled: true
    }
    url: 'http://contoso.com/delegation'
    userRegistration: {
      enabled: true
    }
    validationKey: '<validationKey>'
  }
}
```

ApiManagementPortalSettingsUpdateSignIn
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/portalsettings@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enabled: true
  }
}
```

ApiManagementPortalSettingsUpdateSignUp
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/portalsettings@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enabled: true
    termsOfService: {
      consentRequired: true
      enabled: true
      text: 'Terms of service text.'
    }
  }
}
```

## microsoft.apimanagement/service/privateendpointconnections

ApiManagementApproveOrRejectPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/privateEndpointConnections@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/privateEndpointConnections/connectionName'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'The Private Endpoint Connection is approved.'
      status: 'Approved'
    }
  }
}
```

## microsoft.apimanagement/service/products

ApiManagementCreateProduct
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/products@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'Test Template ProductName 4'
  }
}
```

## microsoft.apimanagement/service/products/apilinks

ApiManagementCreateProductApiLink
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/products/apiLinks@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    apiId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/echo-api'
  }
}
```

## microsoft.apimanagement/service/products/grouplinks

ApiManagementCreateProductGroupLink
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/products/groupLinks@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/groups/group1'
  }
}
```

## microsoft.apimanagement/service/products/policies

ApiManagementCreateProductPolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/products/policies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'xml'
    value: '<policies>\r\n  <inbound>\r\n    <rate-limit calls="{{call-count}}" renewal-period="15"></rate-limit>\r\n    <log-to-eventhub logger-id="16">\r\n                      @( string.Join(",", DateTime.UtcNow, context.Deployment.ServiceName, context.RequestId, context.Request.IpAddress, context.Operation.Name) ) \r\n                  </log-to-eventhub>\r\n    <quota-by-key calls="40" counter-key="cc" renewal-period="3600" increment-count="@(context.Request.Method == &quot;POST&quot; ? 1:2)" />\r\n    <base />\r\n  </inbound>\r\n  <backend>\r\n    <base />\r\n  </backend>\r\n  <outbound>\r\n    <base />\r\n  </outbound>\r\n</policies>'
  }
}
```

## microsoft.apimanagement/service/products/wikis

ApiManagementCreateProductWiki
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/products/wikis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    documents: [
      {
        documentationId: 'docId1'
      }
      {
        documentationId: 'docId2'
      }
    ]
  }
}
```

## microsoft.apimanagement/service/schemas

ApiManagementCreateSchema1
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/schemas@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'sample schema description'
    schemaType: 'xml'
    value: '<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\r\n           xmlns:tns="http://tempuri.org/PurchaseOrderSchema.xsd"\r\n           targetNamespace="http://tempuri.org/PurchaseOrderSchema.xsd"\r\n           elementFormDefault="qualified">\r\n <xsd:element name="PurchaseOrder" type="tns:PurchaseOrderType"/>\r\n <xsd:complexType name="PurchaseOrderType">\r\n  <xsd:sequence>\r\n   <xsd:element name="ShipTo" type="tns:USAddress" maxOccurs="2"/>\r\n   <xsd:element name="BillTo" type="tns:USAddress"/>\r\n  </xsd:sequence>\r\n  <xsd:attribute name="OrderDate" type="xsd:date"/>\r\n </xsd:complexType>\r\n\r\n <xsd:complexType name="USAddress">\r\n  <xsd:sequence>\r\n   <xsd:element name="name"   type="xsd:string"/>\r\n   <xsd:element name="street" type="xsd:string"/>\r\n   <xsd:element name="city"   type="xsd:string"/>\r\n   <xsd:element name="state"  type="xsd:string"/>\r\n   <xsd:element name="zip"    type="xsd:integer"/>\r\n  </xsd:sequence>\r\n  <xsd:attribute name="country" type="xsd:NMTOKEN" fixed="US"/>\r\n </xsd:complexType>\r\n</xsd:schema>'
  }
}
```

ApiManagementCreateSchema2
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/schemas@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'sample schema description'
    document: {
      type: 'object'
      $id: 'https://example.com/person.schema.json'
      $schema: 'https://json-schema.org/draft/2020-12/schema'
      properties: {
        age: {
          type: 'integer'
          description: 'Age in years which must be equal to or greater than zero.'
          minimum: 0
        }
        firstName: {
          type: 'string'
          description: 'The person\'s first name.'
        }
        lastName: {
          type: 'string'
          description: 'The person\'s last name.'
        }
      }
      title: 'Person'
    }
    schemaType: 'json'
  }
}
```

## microsoft.apimanagement/service/subscriptions

ApiManagementCreateSubscription
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/subscriptions@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'testsub'
    ownerId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/users/57127d485157a511ace86ae7'
    scope: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/products/5600b59475ff190048060002'
  }
}
```

## microsoft.apimanagement/service/tags

ApiManagementCreateTag
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/tags@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'tag1'
  }
}
```

## microsoft.apimanagement/service/tags/apilinks

ApiManagementCreateTagApiLink
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/tags/apiLinks@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    apiId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/echo-api'
  }
}
```

## microsoft.apimanagement/service/tags/operationlinks

ApiManagementCreateTagOperationLink
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/tags/operationLinks@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    operationId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/echo-api/operations/op1'
  }
}
```

## microsoft.apimanagement/service/tags/productlinks

ApiManagementCreateTagProductLink
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/tags/productLinks@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    productId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/products/product1'
  }
}
```

## microsoft.apimanagement/service/templates

ApiManagementCreateTemplate
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/templates@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    subject: 'Your request for $IssueName was successfully received.'
  }
}
```

## microsoft.apimanagement/service/tenant

ApiManagementCreateTenantAccess
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/tenant@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enabled: true
  }
}
```

## microsoft.apimanagement/service/users

ApiManagementCreateUser
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/users@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    confirmation: 'signup'
    email: 'foobar@outlook.com'
    firstName: 'foo'
    lastName: 'bar'
  }
}
```

## microsoft.apimanagement/service/workspaces

ApiManagementCreateWorkspace
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'workspace 1'
    displayName: 'my workspace'
  }
}
```

## microsoft.apimanagement/service/workspaces/apis

ApiManagementCreateWorkspaceApi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/apis@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'newapiPath'
    description: 'apidescription5200'
    authenticationSettings: {
      oAuth2: {
        authorizationServerId: 'authorizationServerId2283'
        scope: 'oauth2scope2580'
      }
    }
    displayName: 'apiname1463'
    protocols: [
      'https'
      'http'
    ]
    serviceUrl: 'http://newechoapi.cloudapp.net/api'
    subscriptionKeyParameterNames: {
      header: 'header4520'
      query: 'query3037'
    }
  }
}
```

## microsoft.apimanagement/service/workspaces/apis/diagnostics

ApiManagementCreateWorkspaceApiDiagnostic
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/apis/diagnostics@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    alwaysLog: 'allErrors'
    backend: {
      response: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
      request: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
    }
    frontend: {
      response: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
      request: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
    }
    loggerId: '/workspaces/wks1/loggers/applicationinsights'
    sampling: {
      percentage: 50
      samplingType: 'fixed'
    }
  }
}
```

## microsoft.apimanagement/service/workspaces/apis/operations

ApiManagementCreateWorkspaceApiOperation
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/apis/operations@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    method: 'POST'
    description: 'This can only be done by the logged in user.'
    displayName: 'createUser2'
    templateParameters: [
    ]
    urlTemplate: '/user1'
    request: {
      description: 'Created user object'
      headers: [
      ]
      queryParameters: [
      ]
      representations: [
        {
          contentType: 'application/json'
          schemaId: '592f6c1d0af5840ca8897f0c'
          typeName: 'User'
        }
      ]
    }
    responses: [
      {
        description: 'successful operation'
        headers: [
        ]
        representations: [
          {
            contentType: 'application/xml'
          }
          {
            contentType: 'application/json'
          }
        ]
        statusCode: 200
      }
    ]
  }
}
```

## microsoft.apimanagement/service/workspaces/apis/operations/policies

ApiManagementCreateWorkspaceApiOperationPolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/apis/operations/policies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'xml'
    value: '<policies> <inbound /> <backend>    <forward-request />  </backend>  <outbound /></policies>'
  }
}
```

## microsoft.apimanagement/service/workspaces/apis/policies

ApiManagementCreateWorkspaceApiPolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/apis/policies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'xml'
    value: '<policies> <inbound /> <backend>    <forward-request />  </backend>  <outbound /></policies>'
  }
}
```

## microsoft.apimanagement/service/workspaces/apis/releases

ApiManagementCreateWorkspaceApiRelease
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/apis/releases@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    apiId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/workspaces/wks1/apis/a1'
    notes: 'yahooagain'
  }
}
```

## microsoft.apimanagement/service/workspaces/apis/schemas

ApiManagementCreateWorkspaceApiSchema
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/apis/schemas@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contentType: 'application/vnd.ms-azure-apim.xsd+xml'
    document: {
      value: '<s:schema elementFormDefault="qualified" targetNamespace="http://ws.cdyne.com/WeatherWS/" xmlns:tns="http://ws.cdyne.com/WeatherWS/" xmlns:s="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/" xmlns:mime="http://schemas.xmlsoap.org/wsdl/mime/" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:http="http://schemas.xmlsoap.org/wsdl/http/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:apim-wsdltns="http://ws.cdyne.com/WeatherWS/">\r\n  <s:element name="GetWeatherInformation">\r\n    <s:complexType />\r\n  </s:element>\r\n  <s:element name="GetWeatherInformationResponse">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="GetWeatherInformationResult" type="tns:ArrayOfWeatherDescription" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:complexType name="ArrayOfWeatherDescription">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="unbounded" name="WeatherDescription" type="tns:WeatherDescription" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="WeatherDescription">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="WeatherID" type="s:short" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Description" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="PictureURL" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:element name="GetCityForecastByZIP">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="ZIP" type="s:string" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:element name="GetCityForecastByZIPResponse">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="GetCityForecastByZIPResult" type="tns:ForecastReturn" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:complexType name="ForecastReturn">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="Success" type="s:boolean" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="ResponseText" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="State" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="City" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="WeatherStationCity" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="ForecastResult" type="tns:ArrayOfForecast" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="ArrayOfForecast">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="unbounded" name="Forecast" nillable="true" type="tns:Forecast" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="Forecast">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="Date" type="s:dateTime" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="WeatherID" type="s:short" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Desciption" type="s:string" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="Temperatures" type="tns:temp" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="ProbabilityOfPrecipiation" type="tns:POP" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="temp">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="1" name="MorningLow" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="DaytimeHigh" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:complexType name="POP">\r\n    <s:sequence>\r\n      <s:element minOccurs="0" maxOccurs="1" name="Nighttime" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Daytime" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:element name="GetCityWeatherByZIP">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="0" maxOccurs="1" name="ZIP" type="s:string" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:element name="GetCityWeatherByZIPResponse">\r\n    <s:complexType>\r\n      <s:sequence>\r\n        <s:element minOccurs="1" maxOccurs="1" name="GetCityWeatherByZIPResult" type="tns:WeatherReturn" />\r\n      </s:sequence>\r\n    </s:complexType>\r\n  </s:element>\r\n  <s:complexType name="WeatherReturn">\r\n    <s:sequence>\r\n      <s:element minOccurs="1" maxOccurs="1" name="Success" type="s:boolean" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="ResponseText" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="State" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="City" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="WeatherStationCity" type="s:string" />\r\n      <s:element minOccurs="1" maxOccurs="1" name="WeatherID" type="s:short" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Description" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Temperature" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="RelativeHumidity" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Wind" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Pressure" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Visibility" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="WindChill" type="s:string" />\r\n      <s:element minOccurs="0" maxOccurs="1" name="Remarks" type="s:string" />\r\n    </s:sequence>\r\n  </s:complexType>\r\n  <s:element name="ArrayOfWeatherDescription" nillable="true" type="tns:ArrayOfWeatherDescription" />\r\n  <s:element name="ForecastReturn" nillable="true" type="tns:ForecastReturn" />\r\n  <s:element name="WeatherReturn" type="tns:WeatherReturn" />\r\n</s:schema>'
    }
  }
}
```

## microsoft.apimanagement/service/workspaces/apiversionsets

ApiManagementCreateWorkspaceApiVersionSet
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/apiVersionSets@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Version configuration'
    displayName: 'api set 1'
    versioningScheme: 'Segment'
  }
}
```

## microsoft.apimanagement/service/workspaces/backends

ApiManagementCreateWorkspaceBackendProxyBackend
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/backends@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'description5308'
    credentials: {
      authorization: {
        parameter: 'opensesma'
        scheme: 'Basic'
      }
      header: {
        x-my-1: [
          'val1'
          'val2'
        ]
      }
      query: {
        sv: [
          'xx'
          'bb'
          'cc'
        ]
      }
    }
    proxy: {
      password: '<password>'
      url: 'http://192.168.1.1:8080'
      username: 'Contoso\\admin'
    }
    tls: {
      validateCertificateChain: true
      validateCertificateName: true
    }
    url: 'https://backendname2644/'
    protocol: 'http'
  }
}
```

ApiManagementCreateWorkspaceBackendServiceFabric
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/backends@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Service Fabric Test App 1'
    properties: {
      serviceFabricCluster: {
        clientCertificateId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/workspaces/wks1/certificates/cert1'
        managementEndpoints: [
          'https://somecluster.com'
        ]
        maxPartitionResolutionRetries: 5
        serverX509Names: [
          {
            name: 'ServerCommonName1'
            issuerCertificateThumbprint: 'IssuerCertificateThumbprint1'
          }
        ]
      }
    }
    url: 'fabric:/mytestapp/mytestservice'
    protocol: 'http'
  }
}
```

## microsoft.apimanagement/service/workspaces/certificates

ApiManagementCreateWorkspaceCertificate
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/certificates@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    data: '****************Base 64 Encoded Certificate *******************************'
    password: '****Certificate Password******'
  }
}
```

ApiManagementCreateWorkspaceCertificateWithKeyVault
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/certificates@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    keyVault: {
      identityClientId: 'ceaa6b06-c00f-43ef-99ac-f53d1fe876a0'
      secretIdentifier: 'https://rpbvtkeyvaultintegration.vault-int.azure-int.net/secrets/msitestingCert'
    }
  }
}
```

## microsoft.apimanagement/service/workspaces/diagnostics

ApiManagementCreateWorkspaceDiagnostic
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/diagnostics@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    alwaysLog: 'allErrors'
    backend: {
      response: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
      request: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
    }
    frontend: {
      response: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
      request: {
        body: {
          bytes: 512
        }
        headers: [
          'Content-type'
        ]
      }
    }
    loggerId: '/workspaces/wks1/loggers/azuremonitor'
    sampling: {
      percentage: 50
      samplingType: 'fixed'
    }
  }
}
```

## microsoft.apimanagement/service/workspaces/groups

ApiManagementCreateWorkspaceGroup
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/groups@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'temp group'
  }
}
```

ApiManagementCreateWorkspaceGroupExternal
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/groups@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'external'
    description: 'new group to test'
    displayName: 'NewGroup (samiraad.onmicrosoft.com)'
    externalId: 'aad://samiraad.onmicrosoft.com/groups/83cf2753-5831-4675-bc0e-2f8dc067c58d'
  }
}
```

## microsoft.apimanagement/service/workspaces/loggers

ApiManagementCreateWorkspaceAILogger
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/loggers@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'adding a new logger'
    credentials: {
      instrumentationKey: '11................a1'
    }
    loggerType: 'applicationInsights'
  }
}
```

ApiManagementCreateWorkspaceEHLogger
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/loggers@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'adding a new logger'
    credentials: {
      name: 'hydraeventhub'
      connectionString: 'Endpoint=sb://hydraeventhub-ns.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=********='
    }
    loggerType: 'azureEventHub'
  }
}
```

## microsoft.apimanagement/service/workspaces/namedvalues

ApiManagementCreateWorkspaceNamedValue
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/namedValues@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'prop3name'
    secret: false
    tags: [
      'foo'
      'bar'
    ]
    value: 'propValue'
  }
}
```

ApiManagementCreateWorkspaceNamedValueWithKeyVault
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/namedValues@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'prop6namekv'
    keyVault: {
      identityClientId: 'ceaa6b06-c00f-43ef-99ac-f53d1fe876a0'
      secretIdentifier: 'https://contoso.vault.azure.net/secrets/aadSecret'
    }
    secret: true
    tags: [
      'foo'
      'bar'
    ]
  }
}
```

## microsoft.apimanagement/service/workspaces/policies

ApiManagementCreateWorkspacePolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/policies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'xml'
    value: '<policies> <inbound /> <backend>    <forward-request />  </backend>  <outbound /></policies>'
  }
}
```

ApiManagementCreateWorkspacePolicyNonXmlEncoded
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/policies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'rawxml'
    value: '<policies>\r\n     <inbound>\r\n     <base />\r\n  <set-header name="newvalue" exists-action="override">\r\n   <value>"@(context.Request.Headers.FirstOrDefault(h => h.Ke=="Via"))" </value>\r\n    </set-header>\r\n  </inbound>\r\n      </policies>'
  }
}
```

## microsoft.apimanagement/service/workspaces/policyfragments

ApiManagementCreateWorkspacePolicyFragment
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/policyFragments@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'xml'
    description: 'A policy fragment example'
    value: '<fragment><json-to-xml apply="always" consider-accept-header="false" /></fragment>'
  }
}
```

## microsoft.apimanagement/service/workspaces/products

ApiManagementCreateWorkspaceProduct
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/products@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'Test Template ProductName 4'
  }
}
```

## microsoft.apimanagement/service/workspaces/products/apilinks

ApiManagementCreateWorkspaceProductApiLink
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/products/apiLinks@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    apiId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/workspaces/wks1/apis/echo-api'
  }
}
```

## microsoft.apimanagement/service/workspaces/products/grouplinks

ApiManagementCreateWorkspaceProductGroupLink
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/products/groupLinks@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/workspaces/wks1/groups/group1'
  }
}
```

## microsoft.apimanagement/service/workspaces/products/policies

ApiManagementCreateWorkspaceProductPolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/products/policies@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'xml'
    value: '<policies>\r\n  <inbound>\r\n    <rate-limit calls="{{call-count}}" renewal-period="15"></rate-limit>\r\n    <log-to-eventhub logger-id="16">\r\n                      @( string.Join(",", DateTime.UtcNow, context.Deployment.ServiceName, context.RequestId, context.Request.IpAddress, context.Operation.Name) ) \r\n                  </log-to-eventhub>\r\n    <quota-by-key calls="40" counter-key="cc" renewal-period="3600" increment-count="@(context.Request.Method == &quot;POST&quot; ? 1:2)" />\r\n    <base />\r\n  </inbound>\r\n  <backend>\r\n    <base />\r\n  </backend>\r\n  <outbound>\r\n    <base />\r\n  </outbound>\r\n</policies>'
  }
}
```

## microsoft.apimanagement/service/workspaces/schemas

ApiManagementCreateWorkspaceSchema
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/schemas@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'sample schema description'
    schemaType: 'xml'
    value: '<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\r\n           xmlns:tns="http://tempuri.org/PurchaseOrderSchema.xsd"\r\n           targetNamespace="http://tempuri.org/PurchaseOrderSchema.xsd"\r\n           elementFormDefault="qualified">\r\n <xsd:element name="PurchaseOrder" type="tns:PurchaseOrderType"/>\r\n <xsd:complexType name="PurchaseOrderType">\r\n  <xsd:sequence>\r\n   <xsd:element name="ShipTo" type="tns:USAddress" maxOccurs="2"/>\r\n   <xsd:element name="BillTo" type="tns:USAddress"/>\r\n  </xsd:sequence>\r\n  <xsd:attribute name="OrderDate" type="xsd:date"/>\r\n </xsd:complexType>\r\n\r\n <xsd:complexType name="USAddress">\r\n  <xsd:sequence>\r\n   <xsd:element name="name"   type="xsd:string"/>\r\n   <xsd:element name="street" type="xsd:string"/>\r\n   <xsd:element name="city"   type="xsd:string"/>\r\n   <xsd:element name="state"  type="xsd:string"/>\r\n   <xsd:element name="zip"    type="xsd:integer"/>\r\n  </xsd:sequence>\r\n  <xsd:attribute name="country" type="xsd:NMTOKEN" fixed="US"/>\r\n </xsd:complexType>\r\n</xsd:schema>'
  }
}
```

## microsoft.apimanagement/service/workspaces/subscriptions

ApiManagementCreateWorkspaceSubscription
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/subscriptions@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'testsub'
    ownerId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/users/57127d485157a511ace86ae7'
    scope: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/workspaces/wks1/products/5600b59475ff190048060002'
  }
}
```

## microsoft.apimanagement/service/workspaces/tags

ApiManagementCreateWorkspaceTag
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/tags@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'tag1'
  }
}
```

## microsoft.apimanagement/service/workspaces/tags/apilinks

ApiManagementCreateWorkspaceTagApiLink
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/tags/apiLinks@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    apiId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/workspaces/wks1/apis/echo-api'
  }
}
```

## microsoft.apimanagement/service/workspaces/tags/operationlinks

ApiManagementCreateWorkspaceTagOperationLink
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/tags/operationLinks@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    operationId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/workspaces/wks1/apis/echo-api/operations/op1'
  }
}
```

## microsoft.apimanagement/service/workspaces/tags/productlinks

ApiManagementCreateWorkspaceTagProductLink
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/workspaces/tags/productLinks@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    productId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/workspaces/wks1/products/product1'
  }
}
```
