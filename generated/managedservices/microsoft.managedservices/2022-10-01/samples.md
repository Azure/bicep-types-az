# Microsoft.ManagedServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.managedservices/registrationassignments

Put Registration Assignment
```bicep
resource exampleResource 'Microsoft.ManagedServices/registrationAssignments@2022-10-01' = {
  name: 'example'
  properties: {
    registrationDefinitionId: '/subscriptions/0afefe50-734e-4610-8a82-a144ahf49dea/providers/Microsoft.ManagedServices/registrationDefinitions/26c128c2-fefa-4340-9bb1-6e081c90ada2'
  }
}
```

## microsoft.managedservices/registrationdefinitions

Put Registration Definition
```bicep
resource exampleResource 'Microsoft.ManagedServices/registrationDefinitions@2022-10-01' = {
  name: 'example'
  plan: {
    name: 'addesai-plan'
    product: 'test'
    publisher: 'marketplace-test'
    version: '1.0.0'
  }
  properties: {
    description: 'Tes1t'
    authorizations: [
      {
        principalId: 'f98d86a2-4cc4-4e9d-ad47-b3e80a1bcdfc'
        principalIdDisplayName: 'Support User'
        roleDefinitionId: 'acdd72a7-3385-48ef-bd42-f606fba81ae7'
      }
      {
        delegatedRoleDefinitionIds: [
          'b24988ac-6180-42a0-ab88-20f7382dd24c'
        ]
        principalId: 'f98d86a2-4cc4-4e9d-ad47-b3e80a1bcdfc'
        principalIdDisplayName: 'User Access Administrator'
        roleDefinitionId: '18d7d88d-d35e-4fb5-a5c3-7773c20a72d9'
      }
    ]
    eligibleAuthorizations: [
      {
        justInTimeAccessPolicy: {
          managedByTenantApprovers: [
            {
              principalId: 'd9b22cd6-6407-43cc-8c60-07c56df0b51a'
              principalIdDisplayName: 'Approver Group'
            }
          ]
          maximumActivationDuration: 'PT8H'
          multiFactorAuthProvider: 'Azure'
        }
        principalId: '3e0ed8c6-e902-4fc5-863c-e3ddbb2ae2a2'
        principalIdDisplayName: 'Support User'
        roleDefinitionId: 'ae349356-3a1b-4a5e-921d-050484c6347e'
      }
    ]
    managedByTenantId: '83abe5cd-bcc3-441a-bd86-e6a75360cecc'
    registrationDefinitionName: 'DefinitionName'
  }
}
```
