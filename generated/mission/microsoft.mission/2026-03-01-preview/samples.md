# Microsoft.Mission
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.mission/approvals

Approval_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/approvals@2026-03-01-preview' = {
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
    grandparentResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/testrg/providers/Microsoft.Mission/communities/TestMyCommunity'
    parentResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/TestMyRg/providers/microsoft.mission/virtualenclaves/TestMyEnclave'
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
resource exampleResource 'Microsoft.Mission/communities@2026-03-01-preview' = {
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
    addressSpace: ''
    addressSpaces: [
      '10.0.0.0/16'
      '10.1.0.0/16'
    ]
    approvalSettings: {
      communityEndpointUpdate: {
        approvalPolicy: 'Required'
        mandatoryApprovers: [
          {
            approverEntraId: '00000000-0000-0000-0000-000000000001'
          }
        ]
        minimumApproversRequired: 2
      }
      communityMaintenanceMode: {
        approvalPolicy: 'Required'
        mandatoryApprovers: [
          {
            approverEntraId: '00000000-0000-0000-0000-000000000003'
          }
          {
            approverEntraId: '00000000-0000-0000-0000-000000000004'
          }
        ]
        minimumApproversRequired: 2
      }
      connectionCreation: {
        approvalPolicy: 'Required'
        mandatoryApprovers: [
          {
            approverEntraId: '00000000-0000-0000-0000-000000000002'
          }
        ]
        minimumApproversRequired: 1
      }
      connectionUpdate: {
        approvalPolicy: 'Required'
        minimumApproversRequired: 1
      }
      enclaveCreation: {
        approvalPolicy: 'NotRequired'
      }
      enclaveEndpointUpdate: {
        approvalPolicy: 'Required'
        minimumApproversRequired: 1
      }
      enclaveMaintenanceMode: {
        approvalPolicy: 'NotRequired'
      }
    }
    communityRoleAssignments: [
      {
        condition: '@RoleDefinition.Name StringNotEquals \'Owner\''
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
        roleDefinitionId: 'b24988ac-6180-42a0-ab88-20f7382dd24c'
      }
      {
        principals: [
          {
            type: 'User'
            id: '355a6bb0-abc0-4cba-000d-12a345b678c9'
          }
        ]
        roleDefinitionId: '18d7d88d-d35e-4fb5-a5c3-7773c20a72d9'
      }
    ]
    dnsServers: [
      'azure.net'
    ]
    firewallSku: 'Standard'
    governedServiceList: [
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'AKS'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'AppService'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'ContainerRegistry'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'CosmosDB'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'KeyVault'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'MicrosoftSQL'
      }
      {
        enforcement: 'Enabled'
        option: 'Not Applicable'
        policyAction: 'None'
        serviceId: 'Monitoring'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'PostgreSQL'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'ServiceBus'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'Storage'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'AzureFirewalls'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'Insights'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'Logic'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'PrivateDNSZones'
      }
      {
        enforcement: 'Enabled'
        option: 'Allow'
        policyAction: 'None'
        serviceId: 'DataConnectors'
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
    monitoringSettings: {
      diagnosticDestinations: [
        {
          destinationType: 'CommunityWorkspace'
        }
        {
          destinationType: 'EnclaveWorkspace'
          diagnosticSettingsName: 'customName'
        }
        {
          customWorkspaceResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/rgopenapi/providers/Microsoft.OperationalInsights/workspaces/CustomWorkspace'
          destinationType: 'CustomWorkspace'
          diagnosticSettingsName: 'customName'
        }
        {
          customWorkspaceResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/rgopenapi/providers/Microsoft.OperationalInsights/workspaces/CustomWorkspace'
          destinationType: 'CustomWorkspace'
          diagnosticSettingsName: 'customName'
        }
      ]
      flowLogDestination: {
        customWorkspaceResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/rgopenapi/providers/Microsoft.OperationalInsights/workspaces/CustomWorkspace'
        destinationType: 'CustomWorkspace'
        diagnosticSettingsName: 'customName'
      }
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
resource exampleResource 'Microsoft.Mission/communities/communityEndpoints@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    ruleCollection: [
      {
        destination: 'foo.example.com'
        destinationType: 'FQDNTag'
        ports: '443'
        protocols: [
          'TCP'
        ]
        transitHubResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/testrg/providers/Microsoft.Mission/communities/TestMyCommunity/transitHubs/TestThName'
      }
    ]
    updateMode: 'Automatic'
  }
  tags: {
    sampletag: 'samplevalue'
  }
}
```

## microsoft.mission/communities/dedicatedhubs

DedicatedHub_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/communities/dedicatedHubs@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    designation: 'Reserved'
  }
  tags: {
    environment: 'test'
    project: 'mission'
  }
}
```

## microsoft.mission/communities/transithubs

TransitHub_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/communities/transitHubs@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westcentralus'
  properties: {
    securityProvider: 'AzureFirewall'
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
resource exampleResource 'Microsoft.Mission/enclaveConnections@2026-03-01-preview' = {
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
resource exampleResource 'Microsoft.Mission/virtualEnclaves@2026-03-01-preview' = {
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
    approvalSettings: {
      connectionCreation: {
        approvalPolicy: 'Required'
        mandatoryApprovers: [
          {
            approverEntraId: '00000000-0000-0000-0000-000000000002'
          }
        ]
        minimumApproversRequired: 2
      }
      connectionUpdate: {
        approvalPolicy: 'Required'
        minimumApproversRequired: 1
      }
      enclaveEndpointUpdate: {
        approvalPolicy: 'Required'
        mandatoryApprovers: [
          {
            approverEntraId: '00000000-0000-0000-0000-000000000001'
          }
        ]
        minimumApproversRequired: 1
      }
      enclaveMaintenanceMode: {
        approvalPolicy: 'NotRequired'
      }
    }
    bastionEnabled: true
    communityResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/TestMyRg/providers/microsoft.mission/communities/TestMyCommunity'
    dedicatedHubResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/TestResourceGroup/providers/Microsoft.Mission/communities/TestMyCommunity/dedicatedHubs/TestDedicatedHub'
    enclaveDefaultSettings: {
      diagnosticDestination: 'Both'
    }
    enclaveRoleAssignments: [
      {
        condition: '@RoleDefinition.Name StringNotEquals \'Owner\''
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
        roleDefinitionId: 'b24988ac-6180-42a0-ab88-20f7382dd24c'
      }
      {
        principals: [
          {
            type: 'User'
            id: '355a6bb0-abc0-4cba-000d-12a345b678c9'
          }
        ]
        roleDefinitionId: '18d7d88d-d35e-4fb5-a5c3-7773c20a72d9'
      }
    ]
    enclaveVirtualNetwork: {
      allowSubnetCommunication: true
      customCidrRange: '10.0.0.0/24'
      networkSize: 'small'
      subnetConfigurations: [
        {
          networkPrefixSize: 26
          subnetName: 'test'
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
    monitoringSettings: {
      diagnosticDestinations: [
        {
          destinationType: 'CommunityWorkspace'
        }
        {
          destinationType: 'EnclaveWorkspace'
          diagnosticSettingsName: 'customName'
        }
        {
          customWorkspaceResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/rgopenapi/providers/Microsoft.OperationalInsights/workspaces/CustomWorkspace'
          destinationType: 'CustomWorkspace'
          diagnosticSettingsName: 'customName'
        }
        {
          customWorkspaceResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/rgopenapi/providers/Microsoft.OperationalInsights/workspaces/CustomWorkspace'
          destinationType: 'CustomWorkspace'
          diagnosticSettingsName: 'customName'
        }
      ]
      flowLogDestination: {
        customWorkspaceResourceId: '/subscriptions/c64f6eca-bdc5-4bc2-88d6-f8f1dc23f86c/resourceGroups/rgopenapi/providers/Microsoft.OperationalInsights/workspaces/CustomWorkspace'
        destinationType: 'CustomWorkspace'
        diagnosticSettingsName: 'customName'
      }
    }
    rbacInheritance: 'Disabled'
    workloadResourceVisibility: 'Disabled'
    workloadRoleAssignments: [
      {
        condition: '@RoleDefinition.Name StringNotEquals \'Owner\''
        principals: [
          {
            type: 'Group'
            id: '01234567-89ab-ef01-2345-0123456789ab'
          }
        ]
        roleDefinitionId: 'd73bb868-a0df-4d4d-bd69-98a00b01fccb'
      }
      {
        principals: [
          {
            type: 'Group'
            id: '01234567-89ab-ef01-2345-0123456789ab'
          }
        ]
        roleDefinitionId: 'fb879df8-f326-4884-b1cf-06f3ad86be52'
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
resource exampleResource 'Microsoft.Mission/virtualEnclaves/enclaveEndpoints@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    ruleCollection: [
      {
        destination: '10.0.0.0/24'
        endpointRuleName: '54CEECEF-2C30-488E-946F-D20F414D99BA'
        ports: '443'
        protocols: [
          'TCP'
        ]
      }
    ]
    updateMode: 'Automatic'
  }
  tags: {
    sampletag: 'samplevalue'
  }
}
```

## microsoft.mission/virtualenclaves/workloads

Workload_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/virtualEnclaves/workloads@2026-03-01-preview' = {
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
