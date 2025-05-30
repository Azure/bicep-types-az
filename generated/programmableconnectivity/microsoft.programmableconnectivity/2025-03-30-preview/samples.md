# Microsoft.ProgrammableConnectivity
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.programmableconnectivity/gateways

Gateways_CreateOrUpdate_MaximumSet - generated by [MaximumSet] rule
```bicep
resource exampleResource 'Microsoft.ProgrammableConnectivity/gateways@2025-03-30-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    configuredApplication: {
      name: 'Application Name'
      applicationDescription: 'Application description'
      category: 'Art and design'
      commercialName: 'Contoso'
      privacyPolicyUrl: 'http://contoso.com/privacy'
      privacyRightsRequestEmailAddress: 'contact@contoso.com'
    }
    configuredApplicationOwner: {
      name: 'Contoso'
      contactEmailAddress: 'contact@contoso.com'
      dataProtectionOfficer: {
        emailAddress: 'contact@contoso.com'
        familyName: 'Name'
        givenName: 'Name'
      }
      legalName: 'Contoso'
      legalRepresentative: {
        emailAddress: 'contact@contoso.com'
        familyName: 'Name'
        givenName: 'Name'
      }
      localRepresentatives: [
        {
          countryCode: 'AA'
          representative: {
            emailAddress: 'contact@contoso.com'
            familyName: 'Name'
            givenName: 'Name'
          }
        }
      ]
      organizationDescription: 'Description of Organisation'
      organizationIdentificationId: '12345'
      organizationIdentificationIssuer: 'ID issuer'
      organizationIdentificationType: 'Tax number'
      organizationType: 'Academic scientific organization'
      privacyManager: {
        emailAddress: 'contact@contoso.com'
        familyName: 'Name'
        givenName: 'Name'
      }
      privacyPolicyUrl: 'http://contoso.com/privacy'
      registeredGeographicAddress: {
        city: 'City'
        countryCode: 'US'
        locality: 'Locality'
        postalCode: '12345'
        stateOrProvince: 'State'
        streetName: 'Street'
        streetNumber: '1234'
      }
      taxNumber: '12345'
      tradingName: 'Contoso'
    }
  }
  tags: {
  }
}
```

## microsoft.programmableconnectivity/operatorapiconnections

OperatorApiConnections_Create_MaximumSet - generated by [MaximumSet] rule
```bicep
resource exampleResource 'Microsoft.ProgrammableConnectivity/operatorApiConnections@2025-03-30-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    dataProcessingList: [
      {
        contexts: [
          'Algorithmic logic'
        ]
        duration: 'Endless'
        frequency: 'Continuous'
        processingOperation: 'Access'
        storageRegions: [
          {
            commercialActivity: true
            commercialOrganization: 'Contoso'
            countryCode: 'AA'
            dataPrivacyFrameworkUrl: 'https://www.dataprivacyframework.gov/participant/0'
          }
        ]
        transitRegions: [
          {
            commercialActivity: true
            commercialOrganization: 'Contoso'
            countryCode: 'AA'
            dataPrivacyFrameworkUrl: 'https://www.dataprivacyframework.gov/participant/0'
          }
        ]
      }
    ]
    gatewayId: '/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/example-rg/providers/Microsoft.ProgrammableConnectivity/gateways/cdvcixxcdhjqw'
    operatorApiPlanId: '/subscriptions/00000000-0000-0000-0000-00000000000/providers/Microsoft.ProgrammableConnectivity/operatorApiPlans/livmzrh'
    planTermsAndConditionsAccepted: true
    purposeReason: 'This application uses this API for this purpose because...'
    purposes: [
      'Fraud Detection and Prevention'
    ]
    status: {
      reason: 'Success'
      state: 'Succeeded'
    }
  }
  tags: {
  }
}
```
