# Microsoft.Sovereign
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.sovereign/landingzoneaccounts

LandingZoneAccountOperations_Create
```bicep
resource exampleResource 'Microsoft.Sovereign/landingZoneAccounts@2025-02-27-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'northeurope'
  properties: {
    storageAccount: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/TestStorageAccount/providers/Microsoft.Storage/storageAccounts/teststorageaccount'
  }
  tags: {
    tag1: 'MCFS'
  }
}
```

## microsoft.sovereign/landingzoneaccounts/landingzoneconfigurations

LandingZoneConfigurationOperations_Create
```bicep
resource exampleResource 'Microsoft.Sovereign/landingZoneAccounts/landingZoneConfigurations@2025-02-27-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    azureBastionCreationOption: 'Yes'
    azureBastionSubnetCidrBlock: '10.20.255.0/24'
    customNamingConvention: [
      {
        formula: '{DeploymentSuffix}'
        resourceType: 'azureFirewalls'
      }
    ]
    ddosProtectionCreationOption: 'Yes'
    decommissionedMgMetadata: {
      create: false
      policyInitiativesAssignmentProperties: [
      ]
    }
    existingAzureBastionId: {
    }
    existingDdosProtectionId: {
    }
    existingLogAnalyticsWorkspaceId: {
    }
    firewallCreationOption: 'Standard'
    firewallSubnetCidrBlock: '10.20.255.0/24'
    gatewaySubnetCidrBlock: '10.20.255.0/24'
    hubNetworkCidrBlock: '10.20.255.0/24'
    landingZonesMgChildren: [
      {
        name: 'Corp'
        policyInitiativesAssignmentProperties: [
          {
            assignmentParameters: {
            }
            policyInitiativeId: 'c138fd1a-e08f-4318-9490-d11ef2c2f9c1'
          }
        ]
      }
    ]
    landingZonesMgMetadata: {
      policyInitiativesAssignmentProperties: [
      ]
    }
    logAnalyticsWorkspaceCreationOption: 'No'
    logRetentionInDays: 540
    managedIdentity: {
      type: 'SystemAssigned'
    }
    namingConventionFormula: '{ResourceTypeAbbreviation}'
    platformConnectivityMgMetadata: {
      policyInitiativesAssignmentProperties: [
      ]
    }
    platformIdentityMgMetadata: {
      policyInitiativesAssignmentProperties: [
      ]
    }
    platformManagementMgMetadata: {
      policyInitiativesAssignmentProperties: [
      ]
    }
    platformMgChildren: [
      {
        name: 'childmg1'
        policyInitiativesAssignmentProperties: [
        ]
      }
      {
        name: 'childmg2'
        policyInitiativesAssignmentProperties: [
        ]
      }
    ]
    platformMgMetadata: {
      policyInitiativesAssignmentProperties: [
      ]
    }
    sandboxMgMetadata: {
      create: true
      policyInitiativesAssignmentProperties: [
      ]
    }
    tags: [
      {
        name: 'tag1'
        value: 'do'
      }
      {
        name: 'tag2'
        value: 'do'
      }
    ]
    topLevelMgMetadata: {
      policyInitiativesAssignmentProperties: [
        {
          assignmentParameters: {
            Effect: 'Audit'
          }
          policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/0a2ebd47-3fb9-4735-a006-b7f31ddadd9f'
        }
      ]
    }
  }
}
```

## microsoft.sovereign/landingzoneaccounts/landingzoneregistrations

LandingZoneRegistrationOperations_Create
```bicep
resource exampleResource 'Microsoft.Sovereign/landingZoneAccounts/landingZoneRegistrations@2025-02-27-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    existingLandingZoneConfigurationId: '/subscriptions/00000000-0000-0000-0000-000000000001/resourceGroups/TestResourceGroup/providers/Microsoft.Sovereign/landingZoneAccounts/ExampleLZA/landingZoneConfigurations/ExampleLZC'
    existingTopLevelMgId: '/providers/Microsoft.Management/managementGroups/mcfs'
    managedIdentity: {
      type: 'SystemAssigned'
    }
  }
}
```
