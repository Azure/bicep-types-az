# Microsoft.Mission
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.mission/approvals

Approval_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/approvals@2024-12-01-preview' = {
  name: 'example'
  properties: {
    approvers: [
      {
        actionPerformed: 'Approved'
        approverEntraId: '00000000-0000-0000-0000-000000000000'
        lastUpdatedAt: '2023-03-17T20:43:17.760Z'
      }
    ]
    createdAt: '2023-03-17T20:43:17.760Z'
    parent1: 'string'
    parent2: 'string'
    requestMetadata: {
      approvalCallbackPayload: '{\n  "key1": "value1",\n  "key2": "value2"\n}'
      approvalCallbackRoute: 'approvalCallback'
      approvalStatus: 'Approved'
      resourceAction: 'string'
    }
    stateChangedAt: '2023-03-17T20:43:17.760Z'
    ticketId: 'string'
  }
}
```

## microsoft.mission/communities

Community_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/communities@2024-12-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned,UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
    }
  }
  location: 'westcentralus'
  properties: {
    addressSpace: '10.0.0.0/24'
    approvalSettings: {
      connectionCreation: 'Required'
      connectionDeletion: 'NotRequired'
      connectionUpdate: 'Required'
      enclaveCreation: 'NotRequired'
      enclaveDeletion: 'NotRequired'
      endpointCreation: 'NotRequired'
      endpointDeletion: 'NotRequired'
      endpointUpdate: 'Required'
      maintenanceMode: 'NotRequired'
      mandatoryApprovers: [
        {
          approverEntraId: '00000000-0000-0000-0000-000000000000'
        }
      ]
      minimumApproversRequired: 0
      notificationOnApprovalAction: 'NotRequired'
      notificationOnApprovalCreation: 'NotRequired'
      notificationOnApprovalDeletion: 'NotRequired'
      serviceCatalogDeployment: 'NotRequired'
    }
    communityRoleAssignments: [
      {
        id: 'b24988ac-6180-42a0-ab88-20f7382dd24c'
        principals: [
          {
            type: 'Group'
            id: '01234567-89ab-ef01-2345-0123456789ab'
          }
          {
            type: 'User'
            id: '355a6bb0-abc0-4cba-000d-12a345b678c0'
          }
        ]
      }
      {
        id: '18d7d88d-d35e-4fb5-a5c3-7773c20a72d9'
        principals: [
          {
            type: 'User'
            id: '355a6bb0-abc0-4cba-000d-12a345b678c9'
          }
        ]
      }
    ]
    dnsServers: [
      'azure.net'
    ]
    governedServiceList: [
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'AKS'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'AppService'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'ContainerRegistry'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'CosmosDB'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'KeyVault'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'MicrosoftSQL'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'Monitoring'
        option: 'Not Applicable'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'PostgreSQL'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'ServiceBus'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'Storage'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'AzureFirewalls'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'Insights'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'Logic'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'PrivateDNSZones'
        option: 'Allow'
      }
      {
        auditOnly: false
        enforcement: 'Enabled'
        id: 'DataConnectors'
        option: 'Allow'
      }
    ]
    maintenanceModeConfiguration: {
      justification: 'Off'
      mode: 'Off'
      principals: [
        {
          type: 'User'
          id: '355a6bb0-abc0-4cba-000d-12a345b678c9'
        }
      ]
    }
  }
  tags: {
    sampletag: 'samplevalue'
  }
}
```

## microsoft.mission/communities/communityendpoints

CommunityEndpoints_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/communities/communityEndpoints@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    ruleCollection: [
      {
        destination: 'foo.example.com'
        destinationType: 'FQDNTag'
        port: '443'
        protocols: [
          'TCP'
        ]
        transitHubResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/testrg/providers/Microsoft.Mission/communities/TestMyCommunity/transitHubs/TestThName'
      }
    ]
  }
  tags: {
    sampletag: 'samplevalue'
  }
}
```

## microsoft.mission/communities/transithubs

TransitHub_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/communities/transitHubs@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
    state: 'PendingApproval'
    transitOption: {
      type: 'ExpressRoute'
      params: {
        scaleUnits: 1
      }
    }
  }
  tags: {
    Tag1: 'Value1'
  }
}
```

## microsoft.mission/enclaveconnections

EnclaveConnection_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/enclaveConnections@2024-12-01-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    communityResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/testrg/providers/Microsoft.Mission/communities/TestMyCommunity'
    destinationEndpointId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/TestMyRg/providers/Microsoft.Mission/virtualenclaves/TestMyEnclave/enclaveendpoints/TestMyEnclaveEndpoint'
    sourceCidr: '10.0.0.0/24'
    sourceResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/TestMyRg/providers/microsoft.mission/virtualenclaves/TestMyEnclave'
  }
  tags: {
    sampletag: 'samplevalue'
  }
}
```

## microsoft.mission/virtualenclaves

VirtualEnclave_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/virtualEnclaves@2024-12-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned,UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
    }
  }
  location: 'westcentralus'
  properties: {
    bastionEnabled: true
    communityResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/TestMyRg/providers/microsoft.mission/communities/TestMyCommunity'
    enclaveDefaultSettings: {
      diagnosticDestination: 'Both'
    }
    enclaveRoleAssignments: [
      {
        id: 'b24988ac-6180-42a0-ab88-20f7382dd24c'
        principals: [
          {
            type: 'User'
            id: '355a6bb0-abc0-4cba-000d-12a345b678c9'
          }
          {
            type: 'User'
            id: '355a6bb0-abc0-4cba-000d-12a345b678c0'
          }
        ]
      }
      {
        id: '18d7d88d-d35e-4fb5-a5c3-7773c20a72d9'
        principals: [
          {
            type: 'User'
            id: '355a6bb0-abc0-4cba-000d-12a345b678c9'
          }
        ]
      }
    ]
    enclaveVirtualNetwork: {
      allowSubnetCommunication: true
      connectToAzureServices: true
      customCidrRange: '10.0.0.0/24'
      networkSize: 'small'
      subnetConfigurations: [
        {
          name: 'test'
          networkPrefixSize: 26
        }
      ]
    }
    maintenanceModeConfiguration: {
      justification: 'Off'
      mode: 'Off'
      principals: [
        {
          type: 'User'
          id: '355a6bb0-abc0-4cba-000d-12a345b678c9'
        }
      ]
    }
    workloadRoleAssignments: [
      {
        id: 'd73bb868-a0df-4d4d-bd69-98a00b01fccb'
        principals: [
          {
            type: 'Group'
            id: '01234567-89ab-ef01-2345-0123456789ab'
          }
        ]
      }
      {
        id: 'fb879df8-f326-4884-b1cf-06f3ad86be52'
        principals: [
          {
            type: 'Group'
            id: '01234567-89ab-ef01-2345-0123456789ab'
          }
        ]
      }
    ]
  }
  tags: {
    Tag1: 'Value1'
  }
}
```

## microsoft.mission/virtualenclaves/enclaveendpoints

EnclaveEndpoints_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/virtualEnclaves/enclaveEndpoints@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    ruleCollection: [
      {
        name: '54CEECEF-2C30-488E-946F-D20F414D99BA'
        destination: '10.0.0.0/24'
        port: '443'
        protocols: [
          'TCP'
        ]
      }
    ]
  }
  tags: {
    sampletag: 'samplevalue'
  }
}
```

## microsoft.mission/virtualenclaves/workloads

Workload_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/virtualEnclaves/workloads@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
    resourceGroupCollection: [
    ]
  }
  tags: {
    TestKey: 'TestValue'
  }
}
```
