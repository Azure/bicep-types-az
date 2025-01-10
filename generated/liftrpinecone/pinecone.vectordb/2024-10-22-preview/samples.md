# Pinecone.VectorDb
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## pinecone.vectordb/organizations

Organizations_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Pinecone.VectorDb/organizations@2024-10-22-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      ident904655400: {
      }
    }
  }
  location: 'us-east'
  properties: {
    marketplace: {
      offerDetails: {
        offerId: '013124d0-bf05-4eab-a6bb-01fa83870642'
        planId: '62dda065-5acd-4ac5-b418-8610beed92a2'
        planName: 'Freemium'
        publisherId: '4d194daf-fa20-46a8-bfb4-5b7d96cae009'
        termId: 'a2b7ce01-f06d-4874-9f77-6ea4a4875c16'
        termUnit: 'der'
      }
      subscriptionId: '76a38ef6-c8c1-4f0d-bfe0-00ec782c8077'
      subscriptionStatus: 'PendingFulfillmentStart'
    }
    partnerProperties: {
      displayName: 'My Example Organization'
    }
    singleSignOnProperties: {
      type: 'Saml'
      aadDomains: [
        'exampledomain'
      ]
      enterpriseAppId: '44d3fb26-d8d5-41ff-9b9a-769737f22f13'
      state: 'Initial'
      url: 'https://login.pinecone.io/?sso=true&connection=dfwgsqzkbrjqrglcsa'
    }
    user: {
      emailAddress: 'example.user@example.com'
      firstName: 'Jimmy'
      lastName: 'McExample'
      phoneNumber: '555-555-5555'
      upn: 'example.user@example.com'
    }
  }
  tags: {
    'my-tag': 'tag.value'
  }
}
```
