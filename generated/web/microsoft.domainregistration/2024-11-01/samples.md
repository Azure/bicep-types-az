# Microsoft.DomainRegistration
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.domainregistration/domains

Create App Service Domain
```bicep
resource exampleResource 'Microsoft.DomainRegistration/domains@2024-11-01' = {
  name: 'example'
  location: 'global'
  properties: {
    authCode: 'exampleAuthCode'
    autoRenew: true
    consent: {
      agreedAt: '2021-09-10T19:30:53Z'
      agreedBy: '192.0.2.1'
      agreementKeys: [
        'agreementKey1'
      ]
    }
    contactAdmin: {
      addressMailing: {
        address1: '3400 State St'
        city: 'Chicago'
        country: 'United States'
        postalCode: '67098'
        state: 'IL'
      }
      email: 'admin@email.com'
      fax: '1-245-534-2242'
      jobTitle: 'Admin'
      nameFirst: 'John'
      nameLast: 'Doe'
      nameMiddle: ''
      organization: 'Microsoft Inc.'
      phone: '1-245-534-2242'
    }
    contactBilling: {
      addressMailing: {
        address1: '3400 State St'
        city: 'Chicago'
        country: 'United States'
        postalCode: '67098'
        state: 'IL'
      }
      email: 'billing@email.com'
      fax: '1-245-534-2242'
      jobTitle: 'Billing'
      nameFirst: 'John'
      nameLast: 'Doe'
      nameMiddle: ''
      organization: 'Microsoft Inc.'
      phone: '1-245-534-2242'
    }
    contactRegistrant: {
      addressMailing: {
        address1: '3400 State St'
        city: 'Chicago'
        country: 'United States'
        postalCode: '67098'
        state: 'IL'
      }
      email: 'registrant@email.com'
      fax: '1-245-534-2242'
      jobTitle: 'Registrant'
      nameFirst: 'John'
      nameLast: 'Doe'
      nameMiddle: ''
      organization: 'Microsoft Inc.'
      phone: '1-245-534-2242'
    }
    contactTech: {
      addressMailing: {
        address1: '3400 State St'
        city: 'Chicago'
        country: 'United States'
        postalCode: '67098'
        state: 'IL'
      }
      email: 'tech@email.com'
      fax: '1-245-534-2242'
      jobTitle: 'Tech'
      nameFirst: 'John'
      nameLast: 'Doe'
      nameMiddle: ''
      organization: 'Microsoft Inc.'
      phone: '1-245-534-2242'
    }
    dnsType: 'DefaultDomainRegistrarDns'
    privacy: false
  }
  tags: {
  }
}
```

## microsoft.domainregistration/domains/domainownershipidentifiers

Create App Service Domain OwnershipIdentifier
```bicep
resource exampleResource 'Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers@2024-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ownershipId: 'SampleOwnershipId'
  }
}
```
