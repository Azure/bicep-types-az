# Microsoft.ProviderHub
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.providerhub/providermonitorsettings

ProviderMonitorSettings_Create
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerMonitorSettings@2024-09-01' = {
  name: 'example'
  location: 'eastus'
}
```

## microsoft.providerhub/providerregistrations

DirectProviderRegistrations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations@2024-09-01' = {
  name: 'example'
  kind: 'Direct'
  properties: {
    capabilities: [
      {
        effect: 'Allow'
        quotaId: 'CSP_2015-05-01'
      }
      {
        effect: 'Allow'
        quotaId: 'CSP_MG_2017-12-01'
      }
    ]
    customManifestVersion: '2.0'
    dstsConfiguration: {
      serviceDnsName: 'prds.sparta.azure.com'
      serviceName: 'prds-shim'
    }
    legacyNamespace: 'legacyNamespace'
    legacyRegistrations: [
      'legacyRegistration'
    ]
    management: {
      incidentContactEmail: 'helpme@contoso.com'
      incidentRoutingService: 'Contoso Resource Provider'
      incidentRoutingTeam: 'Contoso Triage'
      serviceTreeInfos: [
        {
          componentId: 'd1b7d8ba-05e2-48e6-90d6-d781b99c6e69'
          readiness: 'InDevelopment'
          serviceId: 'd1b7d8ba-05e2-48e6-90d6-d781b99c6e69'
        }
      ]
    }
    managementGroupGlobalNotificationEndpoints: [
      {
        endpointUri: '{your_management_group_notification_endpoint}'
      }
    ]
    notificationOptions: 'EmitSpendingLimit'
    notificationSettings: {
      subscriberSettings: [
        {
          filterRules: [
            {
              endpointInformation: [
                {
                  endpoint: 'https://userrp.azure.com/arnnotify'
                  endpointType: 'Webhook'
                  schemaVersion: '3.0'
                }
                {
                  endpoint: 'https://userrp.azure.com/arnnotify'
                  endpointType: 'Eventhub'
                  schemaVersion: '3.0'
                }
              ]
              filterQuery: 'Resources | where event.eventType in (\'Microsoft.Network/IpAddresses/write\', \'Microsoft.KeyVault/vaults/move/action\')'
            }
          ]
        }
      ]
    }
    optionalFeatures: [
      'Microsoft.Resources/PlatformSubscription'
    ]
    providerType: 'Internal'
    providerVersion: '2.0'
    resourceGroupLockOptionDuringMove: {
      blockActionVerb: 'Action'
    }
    resourceHydrationAccounts: [
      {
        accountName: 'classichydrationprodsn01'
        subscriptionId: 'e4eae963-2d15-43e6-a097-98bd75b33edd'
      }
      {
        accountName: 'classichydrationprodch01'
        subscriptionId: '69e69ecb-e69c-41d4-99b8-87dd12781067'
      }
    ]
    responseOptions: {
      serviceClientOptionsType: 'DisableAutomaticDecompression'
    }
    serviceName: 'root'
    services: [
      {
        serviceName: 'tags'
        status: 'Inactive'
      }
    ]
  }
}
```

ProviderRegistrations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations@2024-09-01' = {
  name: 'example'
  properties: {
    capabilities: [
      {
        effect: 'Allow'
        quotaId: 'CSP_2015-05-01'
      }
      {
        effect: 'Allow'
        quotaId: 'CSP_MG_2017-12-01'
      }
    ]
    crossTenantTokenValidation: 'EnsureSecureValidation'
    management: {
      canaryManifestOwners: [
        'SPARTA-PlatformServiceAdmin'
      ]
      errorResponseMessageOptions: {
        serverFailureResponseMessageType: 'OutageReporting'
      }
      expeditedRolloutMetadata: {
        enabled: false
        expeditedRolloutIntent: 'Hotfix'
      }
      expeditedRolloutSubmitters: [
        'SPARTA-PlatformServiceOperator'
      ]
      incidentContactEmail: 'helpme@contoso.com'
      incidentRoutingService: 'Contoso Resource Provider'
      incidentRoutingTeam: 'Contoso Triage'
      pcCode: 'P1234'
      profitCenterProgramId: '1234'
      serviceTreeInfos: [
        {
          componentId: 'd1b7d8ba-05e2-48e6-90d6-d781b99c6e69'
          readiness: 'InDevelopment'
          serviceId: 'd1b7d8ba-05e2-48e6-90d6-d781b99c6e69'
        }
      ]
    }
    providerType: 'Internal'
    providerVersion: '2.0'
    serviceName: 'root'
    services: [
      {
        serviceName: 'tags'
        status: 'Inactive'
      }
    ]
  }
}
```

## microsoft.providerhub/providerregistrations/authorizedapplications

AuthorizedApplications_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/authorizedApplications@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataAuthorizations: [
      {
        resourceTypes: [
          '*'
        ]
        role: 'ServiceOwner'
      }
    ]
    providerAuthorization: {
      managedByRoleDefinitionId: '1a3b5c7d-8e9f-10g1-1h12-i13j14k1'
      roleDefinitionId: '123456bf-gkur-2098-b890-98da392a00b2'
    }
  }
}
```

## microsoft.providerhub/providerregistrations/customrollouts

CustomRollouts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/customRollouts@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    specification: {
      autoProvisionConfig: {
        resourceGraph: true
        storage: true
      }
      canary: {
        regions: [
          'brazilus'
        ]
      }
      refreshSubscriptionRegistration: true
    }
  }
}
```

## microsoft.providerhub/providerregistrations/defaultrollouts

DefaultRollouts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/defaultRollouts@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    specification: {
      canary: {
        skipRegions: [
          'eastus2euap'
        ]
      }
      expeditedRollout: {
        enabled: true
      }
      restOfTheWorldGroupTwo: {
        waitDuration: 'PT4H'
      }
    }
  }
}
```

## microsoft.providerhub/providerregistrations/newregionfrontloadrelease

NewRegionFrontloadRelease_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/newRegionFrontloadRelease@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    copyFromLocation: 'eastus'
    environmentType: 'Prod'
    excludeResourceTypes: [
      'monitors'
    ]
    frontloadLocation: 'Israel Central'
    ignoreFields: [
      'apiversion'
    ]
    includeResourceTypes: [
      'servers'
    ]
    operationType: 'Rollout'
    overrideEndpointLevelFields: {
      apiVersion: '2024-04-01-preview'
      apiVersions: [
        '2024-04-01-preview'
      ]
      dstsConfiguration: {
        serviceDnsName: 'messaging.azure-ppe.net'
        serviceName: 'resourceprovider'
      }
      enabled: true
      endpointType: 'Production'
      endpointUri: 'https://resource-endpoint.com/'
      featuresRule: 'Any'
      locations: [
        'East US'
      ]
      requiredFeatures: [
        '<feature flag>'
      ]
      skuLink: 'http://endpointuri/westus/skus'
      timeout: 'PT20S'
      zones: [
        'zone1'
      ]
    }
    overrideManifestLevelFields: {
      resourceHydrationAccounts: [
        {
          accountName: 'classichydrationprodsn01'
          subscriptionId: 'e4eae963-2d15-43e6-a097-98bd75b33edd'
        }
      ]
    }
    providerNamespace: 'Microsoft.Contoso'
    serviceFeatureFlag: 'DoNotCreate'
  }
}
```

## microsoft.providerhub/providerregistrations/notificationregistrations

NotificationRegistrations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/notificationRegistrations@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    includedEvents: [
      '*/write'
      'Microsoft.Contoso/employees/delete'
    ]
    messageScope: 'RegisteredSubscriptions'
    notificationEndpoints: [
      {
        locations: [
          ''
          'East US'
        ]
        notificationDestination: '/subscriptions/ac6bcfb5-3dc1-491f-95a6-646b89bf3e88/resourceGroups/mgmtexp-eastus/providers/Microsoft.EventHub/namespaces/unitedstates-mgmtexpint/eventhubs/armlinkednotifications'
      }
      {
        locations: [
          'North Europe'
        ]
        notificationDestination: '/subscriptions/ac6bcfb5-3dc1-491f-95a6-646b89bf3e88/resourceGroups/mgmtexp-northeurope/providers/Microsoft.EventHub/namespaces/europe-mgmtexpint/eventhubs/armlinkednotifications'
      }
    ]
    notificationMode: 'EventHub'
  }
}
```

## microsoft.providerhub/providerregistrations/resourcetyperegistrations

DirectResourceTypeRegistrations_CreateOrUpdate.json
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addResourceListTargetLocations: true
    additionalOptions: 'ProtectedAsyncOperationPolling'
    allowEmptyRoleAssignments: false
    allowedResourceNames: [
      {
        name: 'name1'
        getActionVerb: 'list'
      }
      {
        name: 'name2'
      }
    ]
    allowedTemplateDeploymentReferenceActions: [
      'ListKeys'
      'ListSAS'
    ]
    apiProfiles: [
      {
        apiVersion: '2018-02-01'
        profileVersion: '2018-03-01-hybrid'
      }
      {
        apiVersion: '2016-06-01'
        profileVersion: '2019-03-01-hybrid'
      }
    ]
    asyncTimeoutRules: [
      {
        actionName: 'Microsoft.ClassicCompute/domainNames/write'
        timeout: 'PT12H'
      }
    ]
    availabilityZoneRule: {
      availabilityZonePolicy: 'MultiZoned'
    }
    capacityRule: {
      capacityPolicy: 'Restricted'
      skuAlias: 'incorrectAlias'
    }
    commonApiVersions: [
      '2021-01-01'
    ]
    dstsConfiguration: {
      serviceDnsName: 'prds.sparta.azure.com'
      serviceName: 'prds-shim'
    }
    endpoints: [
      {
        apiVersions: [
          '2020-06-01-preview'
        ]
        locations: [
          'West US'
          'East US'
          'North Europe'
        ]
        requiredFeatures: [
          '<feature flag>'
        ]
      }
    ]
    groupingTag: 'groupingTag'
    legacyName: 'legacyName'
    legacyNames: [
      'legacyName'
    ]
    legacyPolicy: {
      disallowedConditions: [
        {
          disallowedLegacyOperations: [
            'Create'
            'Delete'
          ]
          feature: 'Microsoft.RP/ArmOnlyJobCollections'
        }
      ]
      disallowedLegacyOperations: [
        'Create'
      ]
    }
    linkedOperationRules: [
      {
        linkedAction: 'Blocked'
        linkedOperation: 'CrossSubscriptionResourceMove'
      }
      {
        linkedAction: 'Validate'
        linkedOperation: 'CrossResourceGroupResourceMove'
      }
    ]
    management: {
      authorizationOwners: [
        'RPAAS-PlatformServiceAdministrator'
      ]
      incidentContactEmail: 'helpme@contoso.com'
      incidentRoutingService: ''
      incidentRoutingTeam: ''
      manifestOwners: [
        'SPARTA-PlatformServiceAdministrator'
      ]
      resourceAccessPolicy: 'NotSpecified'
      serviceTreeInfos: [
        {
          componentId: 'd1b7d8ba-05e2-48e6-90d6-d781b99c6e69'
          readiness: 'InDevelopment'
          serviceId: 'd1b7d8ba-05e2-48e6-90d6-d781b99c6e69'
        }
      ]
    }
    manifestLink: 'https://azure.com'
    marketplaceOptions: {
      addOnPlanConversionAllowed: true
    }
    metadata: {
    }
    notifications: [
      {
        notificationType: 'SubscriptionNotification'
        skipNotifications: 'Disabled'
      }
    ]
    openApiConfiguration: {
      validation: {
        allowNoncompliantCollectionResponse: true
      }
    }
    policyExecutionType: 'BypassPolicies'
    regionality: 'Regional'
    requestHeaderOptions: {
      optOutHeaders: 'SystemDataCreatedByLastModifiedBy'
    }
    resourceCache: {
      enableResourceCache: true
      resourceCacheExpirationTimespan: 'PT2M'
    }
    resourceConcurrencyControlOptions: {
      patch: {
        policy: 'SynchronizeBeginExtension'
      }
      post: {
        policy: 'SynchronizeBeginExtension'
      }
      put: {
        policy: 'SynchronizeBeginExtension'
      }
    }
    resourceGraphConfiguration: {
      apiVersion: '2019-01-01'
      enabled: true
    }
    resourceManagementOptions: {
      batchProvisioningSupport: {
        supportedOperations: 'Get, Delete'
      }
      deleteDependencies: [
        {
          linkedProperty: 'properties.edgeProfile.subscription.id'
        }
      ]
    }
    resourceQueryManagement: {
      filterOption: 'EnableSubscriptionFilterOnTenant'
    }
    resourceTypeCommonAttributeManagement: {
      commonApiVersionsMergeMode: 'Merge'
    }
    routingRule: {
      hostResourceType: 'servers/databases'
    }
    routingType: 'Default'
    supportsTags: true
    swaggerSpecifications: [
      {
        apiVersions: [
          '2020-06-01-preview'
        ]
        swaggerSpecFolderUri: 'https://github.com/Azure/azure-rest-api-specs/blob/feature/azure/contoso/specification/contoso/resource-manager/Microsoft.SampleRP/'
      }
    ]
    templateDeploymentPolicy: {
      capabilities: 'Preflight'
      preflightNotifications: 'None'
      preflightOptions: 'ValidationRequests, DeploymentRequests'
    }
  }
}
```

ResourceTypeRegistrations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    crossTenantTokenValidation: 'EnsureSecureValidation'
    endpoints: [
      {
        apiVersions: [
          '2020-06-01-preview'
        ]
        locations: [
          'West US'
          'East US'
          'North Europe'
        ]
        requiredFeatures: [
          '<feature flag>'
        ]
      }
    ]
    management: {
      authorizationOwners: [
        'RPAAS-PlatformServiceAdministrator'
      ]
      incidentContactEmail: 'helpme@contoso.com'
      incidentRoutingService: ''
      incidentRoutingTeam: ''
      manifestOwners: [
        'SPARTA-PlatformServiceAdministrator'
      ]
      resourceAccessPolicy: 'NotSpecified'
      serviceTreeInfos: [
        {
          componentId: 'd1b7d8ba-05e2-48e6-90d6-d781b99c6e69'
          readiness: 'InDevelopment'
          serviceId: 'd1b7d8ba-05e2-48e6-90d6-d781b99c6e69'
        }
      ]
    }
    metadata: {
    }
    notifications: [
      {
        notificationType: 'SubscriptionNotification'
        skipNotifications: 'Disabled'
      }
    ]
    openApiConfiguration: {
      validation: {
        allowNoncompliantCollectionResponse: true
      }
    }
    regionality: 'Regional'
    requestHeaderOptions: {
      optOutHeaders: 'SystemDataCreatedByLastModifiedBy'
    }
    resourceConcurrencyControlOptions: {
      patch: {
        policy: 'SynchronizeBeginExtension'
      }
      post: {
        policy: 'SynchronizeBeginExtension'
      }
      put: {
        policy: 'SynchronizeBeginExtension'
      }
    }
    resourceGraphConfiguration: {
      apiVersion: '2019-01-01'
      enabled: true
    }
    routingType: 'Default'
    swaggerSpecifications: [
      {
        apiVersions: [
          '2020-06-01-preview'
        ]
        swaggerSpecFolderUri: 'https://github.com/Azure/azure-rest-api-specs/blob/feature/azure/contoso/specification/contoso/resource-manager/Microsoft.SampleRP/'
      }
    ]
  }
}
```

## microsoft.providerhub/providerregistrations/resourcetyperegistrations/resourcetyperegistrations/resourcetyperegistrations/resourcetyperegistrations/skus

Skus_CreateOrUpdateNestedResourceTypeThird
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    skuSettings: [
      {
        name: 'freeSku'
        kind: 'Standard'
        tier: 'Tier1'
      }
      {
        name: 'premiumSku'
        costs: [
          {
            meterId: 'xxx'
          }
        ]
        kind: 'Premium'
        tier: 'Tier2'
      }
    ]
  }
}
```

## microsoft.providerhub/providerregistrations/resourcetyperegistrations/resourcetyperegistrations/resourcetyperegistrations/skus

Skus_CreateOrUpdateNestedResourceTypeSecond
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    skuSettings: [
      {
        name: 'freeSku'
        kind: 'Standard'
        tier: 'Tier1'
      }
      {
        name: 'premiumSku'
        costs: [
          {
            meterId: 'xxx'
          }
        ]
        kind: 'Premium'
        tier: 'Tier2'
      }
    ]
  }
}
```

## microsoft.providerhub/providerregistrations/resourcetyperegistrations/resourcetyperegistrations/skus

Skus_CreateOrUpdateNestedResourceTypeFirst
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    skuSettings: [
      {
        name: 'freeSku'
        kind: 'Standard'
        tier: 'Tier1'
      }
      {
        name: 'premiumSku'
        costs: [
          {
            meterId: 'xxx'
          }
        ]
        kind: 'Premium'
        tier: 'Tier2'
      }
    ]
  }
}
```

## microsoft.providerhub/providerregistrations/resourcetyperegistrations/skus

Skus_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus@2024-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    skuSettings: [
      {
        name: 'freeSku'
        kind: 'Standard'
        tier: 'Tier1'
      }
      {
        name: 'premiumSku'
        costs: [
          {
            meterId: 'xxx'
          }
        ]
        kind: 'Premium'
        tier: 'Tier2'
      }
    ]
  }
}
```
