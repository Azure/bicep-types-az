# Microsoft.ApiManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.apimanagement/service

ApiManagementCreateMultiRegionServiceWithCustomHostname
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2018-06-01-preview' = {
  name: 'example'
  location: 'Central US'
  properties: {
    additionalLocations: [
      {
        location: 'West US'
        sku: {
          name: 'Premium'
          capacity: 1
        }
        virtualNetworkConfiguration: {
          subnetResourceId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/westUsVirtualNetwork/subnets/apimSubnet'
        }
      }
    ]
    hostnameConfigurations: [
      {
        type: 'Proxy'
        certificatePassword: '**************Password of the Certificate************************************************'
        encodedCertificate: '************Base 64 Encoded Pfx Certificate************************'
        hostName: 'proxyhostname1.contoso.com'
      }
      {
        type: 'Proxy'
        certificatePassword: '**************Password of the Certificate************************************************'
        encodedCertificate: '************Base 64 Encoded Pfx Certificate************************'
        hostName: 'proxyhostname2.contoso.com'
        negotiateClientCertificate: true
      }
      {
        type: 'Portal'
        certificatePassword: '**************Password of the Certificate************************************************'
        encodedCertificate: '************Base 64 Encoded Pfx Certificate************************'
        hostName: 'portalhostname1.contoso.com'
      }
    ]
    publisherEmail: 'admin@live.com'
    publisherName: 'contoso'
    virtualNetworkConfiguration: {
      subnetResourceId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/centralUsVirtualNetwork/subnets/apimSubnet'
    }
    virtualNetworkType: 'External'
  }
  sku: {
    name: 'Premium'
    capacity: 1
  }
}
```

ApiManagementCreateService
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2018-06-01-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    publisherEmail: 'admin@live.com'
    publisherName: 'contoso'
  }
  sku: {
    name: 'Premium'
    capacity: 1
  }
}
```

ApiManagementCreateServiceHavingMsi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2018-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'Japan East'
  properties: {
    publisherEmail: 'admin@contoso.com'
    publisherName: 'Contoso'
  }
  sku: {
    name: 'Developer'
  }
}
```

ApiManagementCreateServiceWithSystemCertificates
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2018-06-01-preview' = {
  name: 'example'
  location: 'Central US'
  properties: {
    certificates: [
      {
        certificatePassword: '**************Password of the Certificate************************************************'
        encodedCertificate: '************Base 64 Encoded Pfx Certificate************************'
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

## microsoft.apimanagement/service/api-version-sets

ApiManagementCreateApiVersionSet
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/api-version-sets@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Version configuration'
    displayName: 'api set 1'
    versioningScheme: 'Segment'
  }
}
```

## microsoft.apimanagement/service/apis

ApiManagementCreateApi
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2018-06-01-preview' = {
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

ApiManagementCreateApiRevision
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'petstore2'
    description: 'This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.'
    apiRevisionDescription: 'moved to swagger petstore backend'
    displayName: 'Echo API'
    isCurrent: false
    protocols: [
      'https'
    ]
    serviceUrl: 'http://petstore.swagger.io/v5'
    subscriptionKeyParameterNames: {
      header: 'Ocp-Apim-Subscription-Key'
      query: 'subscription-key'
    }
  }
}
```

ApiManagementCreateApiUsingOai3Import
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'petstore'
    contentFormat: 'openapi-link'
    contentValue: 'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml'
  }
}
```

ApiManagementCreateApiUsingSwaggerImport
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'petstore'
    contentFormat: 'swagger-link-json'
    contentValue: 'http://petstore.swagger.io/v2/swagger.json'
  }
}
```

ApiManagementCreateApiUsingWadlImport
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'collector'
    contentFormat: 'wadl-link-json'
    contentValue: 'https://developer.cisco.com/media/wae-release-6-2-api-reference/wae-collector-rest-api/application.wadl'
  }
}
```

ApiManagementCreateApiWithOpenIdConnect
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2018-06-01-preview' = {
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

ApiManagementCreateSoapPassThroughApiUsingWsdlImport
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'currency'
    apiType: 'soap'
    contentFormat: 'wsdl-link'
    contentValue: 'http://www.webservicex.net/CurrencyConvertor.asmx?WSDL'
    wsdlSelector: {
      wsdlEndpointName: 'CurrencyConvertorSoap'
      wsdlServiceName: 'CurrencyConvertor'
    }
  }
}
```

ApiManagementCreateSoapToRestApiUsingWsdlImport
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: 'currency'
    contentFormat: 'wsdl-link'
    contentValue: 'http://www.webservicex.net/CurrencyConvertor.asmx?WSDL'
    wsdlSelector: {
      wsdlEndpointName: 'CurrencyConvertorSoap'
      wsdlServiceName: 'CurrencyConvertor'
    }
  }
}
```

## microsoft.apimanagement/service/apis/diagnostics

ApiManagementCreateApiDiagnostic
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/diagnostics@2018-06-01-preview' = {
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
resource exampleResource 'Microsoft.ApiManagement/service/apis/issues@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'New API issue description'
    createdDate: '2018-02-01T22:21:20.467Z'
    state: 'open'
    title: 'New API issue'
    userId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/users/1'
  }
}
```

## microsoft.apimanagement/service/apis/issues/attachments

ApiManagementCreateApiIssueAttachment
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/issues/attachments@2018-06-01-preview' = {
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
resource exampleResource 'Microsoft.ApiManagement/service/apis/issues/comments@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    createdDate: '2018-02-01T22:21:20.467Z'
    text: 'Issue comment.'
    userId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/users/1'
  }
}
```

## microsoft.apimanagement/service/apis/operations

ApiManagementCreateApiOperation
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/operations@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'newoperation'
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
resource exampleResource 'Microsoft.ApiManagement/service/apis/operations/policies@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contentFormat: 'xml'
    policyContent: '<policies> <inbound /> <backend>    <forward-request />  </backend>  <outbound /></policies>'
  }
}
```

## microsoft.apimanagement/service/apis/policies

ApiManagementCreateApiPolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/policies@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contentFormat: 'xml'
    policyContent: '<policies> <inbound /> <backend>    <forward-request />  </backend>  <outbound /></policies>'
  }
}
```

ApiManagementCreateApiPolicyNonXmlEncoded
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/policies@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contentFormat: 'rawxml'
    policyContent: '<policies>\r\n     <inbound>\r\n     <base />\r\n  <set-header name="newvalue" exists-action="override">\r\n   <value>"@(context.Request.Headers.FirstOrDefault(h => h.Ke=="Via"))" </value>\r\n    </set-header>\r\n  </inbound>\r\n      </policies>'
  }
}
```

## microsoft.apimanagement/service/apis/releases

ApiManagementCreateApiRelease
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/releases@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    apiId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/a1'
    notes: 'yahooagain'
  }
}
```

## microsoft.apimanagement/service/apis/schemas

ApiManagementCreateApiSchema
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/apis/schemas@2018-06-01-preview' = {
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
resource exampleResource 'Microsoft.ApiManagement/service/apis/tagDescriptions@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Some description that will be displayed for operation\'s tag if the tag is assigned to operation of the API'
    externalDocsDescription: 'Description of the external docs resource'
    externalDocsUrl: 'http://some.url/additionaldoc'
  }
}
```

## microsoft.apimanagement/service/authorizationservers

ApiManagementCreateAuthorizationServer
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/authorizationServers@2018-06-01-preview' = {
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
  }
}
```

## microsoft.apimanagement/service/backends

ApiManagementCreateBackendProxyBackend
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/backends@2018-06-01-preview' = {
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
resource exampleResource 'Microsoft.ApiManagement/service/backends@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Service Fabric Test App 1'
    properties: {
      serviceFabricCluster: {
        clientCertificatethumbprint: 'EBA029198AA3E76EF0D70482626E5BCF148594A6'
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
resource exampleResource 'Microsoft.ApiManagement/service/caches@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Redis cache instances in West India'
    connectionString: 'contoso5.redis.cache.windows.net,ssl=true,password=...'
    resourceId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Cache/Redis/contoso5'
  }
}
```

## microsoft.apimanagement/service/certificates

ApiManagementCreateCertificate
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/certificates@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    data: '****************Base 64 Encoded Certificate *******************************'
    password: '****Certificate Password******'
  }
}
```

## microsoft.apimanagement/service/diagnostics

ApiManagementCreateDiagnostic
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/diagnostics@2018-06-01-preview' = {
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

## microsoft.apimanagement/service/groups

ApiManagementCreateGroup
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/groups@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'temp group'
  }
}
```

ApiManagementCreateGroupExternal
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/groups@2018-06-01-preview' = {
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
resource exampleResource 'Microsoft.ApiManagement/service/identityProviders@2018-06-01-preview' = {
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
resource exampleResource 'Microsoft.ApiManagement/service/loggers@2018-06-01-preview' = {
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
resource exampleResource 'Microsoft.ApiManagement/service/loggers@2018-06-01-preview' = {
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

## microsoft.apimanagement/service/openidconnectproviders

ApiManagementCreateOpenIdConnectProvider
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/openidConnectProviders@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clientId: 'oidprovidertemplate3'
    displayName: 'templateoidprovider3'
    metadataEndpoint: 'https://oidprovider-template3.net'
  }
}
```

## microsoft.apimanagement/service/policies

ApiManagementCreatePolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/policies@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contentFormat: 'xml'
    policyContent: '<policies>\r\n  <inbound />\r\n  <backend>\r\n    <forward-request />\r\n  </backend>\r\n  <outbound />\r\n</policies>'
  }
}
```

## microsoft.apimanagement/service/portalsettings

ApiManagementPortalSettingsUpdateDelegation
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/portalsettings@2018-06-01-preview' = {
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
resource exampleResource 'Microsoft.ApiManagement/service/portalsettings@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enabled: true
  }
}
```

ApiManagementPortalSettingsUpdateSignUp
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/portalsettings@2018-06-01-preview' = {
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

## microsoft.apimanagement/service/products

ApiManagementCreateProduct
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/products@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'Test Template ProductName 4'
  }
}
```

## microsoft.apimanagement/service/products/policies

ApiManagementCreateProductPolicy
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/products/policies@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contentFormat: 'xml'
    policyContent: '<policies>\r\n  <inbound>\r\n    <rate-limit calls="{{call-count}}" renewal-period="15"></rate-limit>\r\n    <log-to-eventhub logger-id="16">\r\n                      @( string.Join(",", DateTime.UtcNow, context.Deployment.ServiceName, context.RequestId, context.Request.IpAddress, context.Operation.Name) ) \r\n                  </log-to-eventhub>\r\n    <quota-by-key calls="40" counter-key="cc" renewal-period="3600" increment-count="@(context.Request.Method == &quot;POST&quot; ? 1:2)" />\r\n    <base />\r\n  </inbound>\r\n  <backend>\r\n    <base />\r\n  </backend>\r\n  <outbound>\r\n    <base />\r\n  </outbound>\r\n</policies>'
  }
}
```

## microsoft.apimanagement/service/properties

ApiManagementCreateProperty
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/properties@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'prop3name'
    secret: true
    tags: [
      'foo'
      'bar'
    ]
    value: 'propValue'
  }
}
```

## microsoft.apimanagement/service/subscriptions

ApiManagementCreateSubscription
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/subscriptions@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'testsub'
    ownerId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/users/57127d485157a511ace86ae7'
    scope: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/products/5600b59475ff190048060002'
  }
}
```

## microsoft.apimanagement/service/tags

ApiManagementCreateTag
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/tags@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'tag1'
  }
}
```

## microsoft.apimanagement/service/templates

ApiManagementCreateEmailTemplate
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/templates@2018-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    subject: 'Your request for $IssueName was successfully received.'
  }
}
```

## microsoft.apimanagement/service/users

ApiManagementCreateUser
```bicep
resource exampleResource 'Microsoft.ApiManagement/service/users@2018-06-01-preview' = {
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
