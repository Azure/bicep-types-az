# Microsoft.Mission
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.mission/approvals

Approval_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/approvals@2024-06-01-preview' = {
  name: 'example'
  properties: {
    parent1: 'string'
    parent2: 'string'
    requestMetadata: {
      approvalStatus: 'Approved'
      resourceAction: 'string'
    }
  }
}
```

## microsoft.mission/communities

Community_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/communities@2024-06-01-preview' = {
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
  }
  tags: {
    sampletag: 'samplevalue'
  }
}
```

## microsoft.mission/communities/communityendpoints

CommunityEndpoints_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/communities/communityEndpoints@2024-06-01-preview' = {
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
resource exampleResource 'Microsoft.Mission/communities/transitHubs@2024-06-01-preview' = {
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
resource exampleResource 'Microsoft.Mission/enclaveConnections@2024-06-01-preview' = {
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
resource exampleResource 'Microsoft.Mission/virtualEnclaves@2024-06-01-preview' = {
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
  }
  tags: {
    Tag1: 'Value1'
  }
}
```

## microsoft.mission/virtualenclaves/enclaveendpoints

EnclaveEndpoints_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Mission/virtualEnclaves/enclaveEndpoints@2024-06-01-preview' = {
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
resource exampleResource 'Microsoft.Mission/virtualEnclaves/workloads@2024-06-01-preview' = {
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
