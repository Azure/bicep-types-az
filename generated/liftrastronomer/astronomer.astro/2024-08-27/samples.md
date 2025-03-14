# Astronomer.Astro
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## astronomer.astro/organizations

Organizations_CreateOrUpdate - generated by [MaximumSet] rule
```bicep
resource exampleResource 'Astronomer.Astro/organizations@2024-08-27' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
    }
  }
  location: 'pgfkugslgnsxeqpjs'
  properties: {
    marketplace: {
      offerDetails: {
        offerId: 'tvidibzbxevtvnrdp'
        planId: 'lwcvzdqecwkeracahmixnh'
        planName: 'd'
        publisherId: 'kt'
        renewalMode: 'Auto'
        termId: 'kopnnjsp'
        termUnit: 'rs'
      }
      subscriptionId: 'emasc'
      subscriptionStatus: 'PendingFulfillmentStart'
    }
    partnerOrganizationProperties: {
      organizationId: 'juomtfzwkjwnhhpodfnrqdv'
      organizationName: 'U.1-:7'
      singleSignOnProperties: {
        aadDomains: [
          'fcnqoizqxcdclmy'
        ]
        enterpriseAppId: 'srkwxktx'
        provisioningState: 'Succeeded'
        singleSignOnState: 'Initial'
        singleSignOnUrl: 'l'
      }
      workspaceId: 'nnryjcmiohmkbvhngfgxigpodvhl'
      workspaceName: '9.:06'
    }
    provisioningState: 'Succeeded'
    user: {
      emailAddress: '.K_@e7N-g1.xjqnbPs'
      firstName: 'ucowvrccqpqpkdg'
      lastName: 'fwwtnwggrtibghoijfzajrhgyo'
      phoneNumber: 'brnngpezmqecvflklbhsibq'
      upn: 'zbdgbbqg'
    }
  }
  tags: {
  }
}
```
