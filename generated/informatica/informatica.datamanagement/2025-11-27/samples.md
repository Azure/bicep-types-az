# Informatica.DataManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## informatica.datamanagement/organizations

Organizations_CreateOrUpdate
```bicep
resource exampleResource 'Informatica.DataManagement/organizations@2025-11-27' = {
  name: 'example'
  location: 'westus'
  properties: {
    companyDetails: {
      business: 'Technology'
      companyName: 'Contoso Ltd'
      country: 'USA'
      domain: 'contoso.com'
      numberOfEmployees: 500
      officeAddress: '123 Main Street, Seattle, WA 98101'
    }
    informaticaProperties: {
      informaticaRegion: 'westus'
      organizationId: 'org123'
      organizationName: 'MyInformaticaOrg'
      singleSignOnUrl: 'https://sso.informatica.com/myorg'
    }
    linkOrganization: {
      token: 'link-token-abc123'
    }
    marketplaceDetails: {
      marketplaceSubscriptionId: 'mktplace-sub-123'
      marketplaceSubscriptionStatus: 'Subscribed'
      offerDetails: {
        offerId: 'informatica-cloud'
        planId: 'enterprise-plan'
        planName: 'Enterprise Plan'
        publisherId: 'informatica'
        termId: 'term-001'
        termUnit: 'P1M'
      }
    }
    userDetails: {
      emailAddress: 'john.doe@example.com'
      firstName: 'John'
      lastName: 'Doe'
      phoneNumber: '+1-555-0100'
      upn: 'john.doe@example.com'
    }
  }
  tags: {
    environment: 'production'
  }
}
```

Organizations_CreateOrUpdate_Min
```bicep
resource exampleResource 'Informatica.DataManagement/organizations@2025-11-27' = {
  name: 'example'
  location: 'westus'
}
```

## informatica.datamanagement/organizations/serverlessruntimes

ServerlessRuntimes_CreateOrUpdate
```bicep
resource exampleResource 'Informatica.DataManagement/organizations/serverlessRuntimes@2025-11-27' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Production serverless runtime'
    advancedCustomProperties: [
    ]
    applicationType: 'CDI'
    computeUnits: '4'
    executionTimeout: '3600'
    platform: 'AZURE'
    serverlessAccountLocation: 'westus'
    serverlessRuntimeConfig: {
      cdiConfigProps: [
        {
          applicationConfigs: [
            {
              name: 'configName'
              type: 'string'
              customized: 'false'
              defaultValue: 'default'
              platform: 'AZURE'
              value: 'configValue'
            }
          ]
          engineName: 'CDI Engine'
          engineVersion: '1.0'
        }
      ]
      cdieConfigProps: [
        {
          applicationConfigs: [
            {
              name: 'configName'
              type: 'string'
              customized: 'false'
              defaultValue: 'default'
              platform: 'AZURE'
              value: 'configValue'
            }
          ]
          engineName: 'CDIE Engine'
          engineVersion: '1.0'
        }
      ]
    }
    serverlessRuntimeDataDisks: [
      {
        type: 'NFS'
        mountOptions: 'rw,sync'
        serverHostOrIpAddress: '10.0.0.5'
        sourceMount: '/source/data'
        targetMount: '/target/data'
      }
    ]
    serverlessRuntimeNetworkProfile: {
      networkInterfaceConfiguration: {
        subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-example/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/default'
        vnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-example/providers/Microsoft.Network/virtualNetworks/myVnet'
        vnetResourceGuid: 'vnet-guid-001'
      }
    }
    serverlessRuntimeTags: [
      {
        name: 'environment'
        value: 'production'
      }
    ]
    serverlessRuntimeUserContextProperties: {
      userContextToken: 'user-ctx-token-001'
    }
    supplementaryFileLocation: '/files/supplementary'
  }
}
```

ServerlessRuntimes_CreateOrUpdate_Min
```bicep
resource exampleResource 'Informatica.DataManagement/organizations/serverlessRuntimes@2025-11-27' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverlessAccountLocation: 'westus'
  }
}
```
