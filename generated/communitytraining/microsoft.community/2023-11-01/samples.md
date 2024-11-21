# Microsoft.Community
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.community/communitytrainings

CreateCommunityTrainings
```bicep
resource exampleResource 'Microsoft.Community/communityTrainings@2023-11-01' = {
  name: 'example'
  location: 'southeastasia'
  properties: {
    disasterRecoveryEnabled: true
    identityConfiguration: {
      b2cAuthenticationPolicy: 'B2C_1_signup_signin'
      b2cPasswordResetPolicy: 'B2C_1_pwd_reset'
      clientId: '8c92390f-2f30-493d-bd13-d3c3eba3709d'
      clientSecret: 'idenityConfigurationClientSecret'
      customLoginParameters: 'custom_hint'
      domainName: 'cttenant'
      identityType: 'ADB2C'
      teamsEnabled: false
      tenantId: 'c1ffbb60-88cf-4b83-b54f-c47ae6220c19'
    }
    portalAdminEmailAddress: 'ctadmin@ct.com'
    portalName: 'ctwebsite'
    portalOwnerEmailAddress: 'ctcontact@ct.com'
    portalOwnerOrganizationName: 'CT Portal Owner Organization'
    zoneRedundancyEnabled: true
  }
  sku: {
    name: 'Commercial'
    tier: 'Standard'
  }
}
```
