# Microsoft.Sovereign
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.sovereign/landingzoneaccounts

LandingZoneAccountOperations_Create
```bicep
resource exampleResource 'Microsoft.Sovereign/landingZoneAccounts@2025-02-27-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-RemApiExample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/mi-RemApiExample': {
      }
    }
  }
  location: 'northeurope'
  properties: {
    storageAccount: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-RemApiExample/providers/Microsoft.Storage/storageAccounts/saremapiexample'
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
    azureBastionCreationOption: 'UseExisting'
    customNamingConvention: [
      {
        formula: '{ResourceTypeAbbreviation}-{DeploymentPrefix}-Contoso-{DeploymentSuffix}'
        resourceType: 'ddosProtectionPlans'
      }
    ]
    ddosProtectionCreationOption: 'UseExisting'
    decommissionedMgMetadata: {
      create: true
      policyInitiativesAssignmentProperties: [
        {
          assignmentParameters: {
            listOfAllowedLocations: [
              'swedencentral'
            ]
          }
          policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/c1cbff38-87c0-4b9f-9f70-035c7a3b5523'
        }
      ]
    }
    existingAzureBastionId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-RemApiExample/providers/Microsoft.Network/bastionHosts/bas-RemApiExample'
    existingDdosProtectionId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-RemApiExample/providers/Microsoft.Network/ddosProtectionPlans/ddos-RemApiExample'
    existingLogAnalyticsWorkspaceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-RemApiExample/providers/Microsoft.OperationalInsights/workspaces/log-RemApiExample'
    firewallCreationOption: 'Premium'
    firewallSubnetCidrBlock: '10.20.254.0/24'
    gatewaySubnetCidrBlock: '10.20.252.0/24'
    hubNetworkCidrBlock: '10.20.0.0/16'
    landingZonesMgChildren: [
      {
        name: 'Corp'
        policyInitiativesAssignmentProperties: [
        ]
      }
      {
        name: 'Online'
        policyInitiativesAssignmentProperties: [
        ]
      }
      {
        name: 'Confidential Corp'
        policyInitiativesAssignmentProperties: [
          {
            assignmentParameters: {
            }
            policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/03de05a4-c324-4ccd-882f-a814ea8ab9ea'
          }
        ]
      }
      {
        name: 'Confidential Online'
        policyInitiativesAssignmentProperties: [
          {
            assignmentParameters: {
            }
            policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/03de05a4-c324-4ccd-882f-a814ea8ab9ea'
          }
        ]
      }
    ]
    landingZonesMgMetadata: {
      policyInitiativesAssignmentProperties: [
        {
          assignmentParameters: {
            listOfAllowedLocations: [
              'swedencentral'
            ]
          }
          policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/c1cbff38-87c0-4b9f-9f70-035c7a3b5523'
        }
      ]
    }
    logAnalyticsWorkspaceCreationOption: 'UseExisting'
    logRetentionInDays: 540
    managedIdentity: {
      type: 'UserAssigned'
      userAssignedIdentityResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-RemApiExample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/mi-RemApiExample'
    }
    namingConventionFormula: '{ResourceTypeAbbreviation}-{DeploymentPrefix}-Contoso-{DeploymentSuffix}-{Environment}'
    platformConnectivityMgMetadata: {
      policyInitiativesAssignmentProperties: [
        {
          assignmentParameters: {
            listOfAllowedLocations: [
              'swedencentral'
            ]
          }
          policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/c1cbff38-87c0-4b9f-9f70-035c7a3b5523'
        }
      ]
    }
    platformIdentityMgMetadata: {
      policyInitiativesAssignmentProperties: [
        {
          assignmentParameters: {
            listOfAllowedLocations: [
              'swedencentral'
            ]
          }
          policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/c1cbff38-87c0-4b9f-9f70-035c7a3b5523'
        }
      ]
    }
    platformManagementMgMetadata: {
      policyInitiativesAssignmentProperties: [
        {
          assignmentParameters: {
            listOfAllowedLocations: [
              'swedencentral'
            ]
          }
          policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/c1cbff38-87c0-4b9f-9f70-035c7a3b5523'
        }
      ]
    }
    platformMgChildren: [
      {
        name: 'Telemetry'
        policyInitiativesAssignmentProperties: [
          {
            assignmentParameters: {
              listOfAllowedLocations: [
                'swedencentral'
              ]
            }
            policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/c1cbff38-87c0-4b9f-9f70-035c7a3b5523'
          }
        ]
      }
      {
        name: 'Security'
        policyInitiativesAssignmentProperties: [
          {
            assignmentParameters: {
              listOfAllowedLocations: [
                'swedencentral'
              ]
            }
            policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/c1cbff38-87c0-4b9f-9f70-035c7a3b5523'
          }
        ]
      }
    ]
    platformMgMetadata: {
      policyInitiativesAssignmentProperties: [
        {
          assignmentParameters: {
            listOfAllowedLocations: [
              'swedencentral'
            ]
          }
          policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/c1cbff38-87c0-4b9f-9f70-035c7a3b5523'
        }
      ]
    }
    sandboxMgMetadata: {
      create: true
      policyInitiativesAssignmentProperties: [
        {
          assignmentParameters: {
            listOfAllowedLocations: [
              'swedencentral'
            ]
          }
          policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/c1cbff38-87c0-4b9f-9f70-035c7a3b5523'
        }
      ]
    }
    tags: [
      {
        name: 'tag1'
        value: 'Lorem'
      }
      {
        name: 'tag2'
        value: 'Ipsum'
      }
    ]
    topLevelMgMetadata: {
      policyInitiativesAssignmentProperties: [
        {
          assignmentParameters: {
            listOfAllowedLocations: [
              'swedencentral'
              'eastus2'
              'uksouth'
            ]
          }
          policyInitiativeId: '/providers/Microsoft.Authorization/policySetDefinitions/c1cbff38-87c0-4b9f-9f70-035c7a3b5523'
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
    existingLandingZoneConfigurationId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-RemApiExample/providers/Microsoft.Sovereign/landingZoneAccounts/lza-RemApiExample/landingZoneConfigurations/lzc-RemApiExample'
    existingTopLevelMgId: '/providers/Microsoft.Management/managementGroups/mg-example'
    managedIdentity: {
      type: 'UserAssigned'
      userAssignedIdentityResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-RemApiExample/providers/Microsoft.ManagedIdentity/userAssignedIdentities/mi-RemApiExample'
    }
  }
}
```
