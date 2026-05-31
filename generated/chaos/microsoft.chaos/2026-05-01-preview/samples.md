# Microsoft.Chaos
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.chaos/experiments

Create/update a Experiment in a resource group.
```bicep
resource exampleResource 'Microsoft.Chaos/experiments@2026-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2euap'
  properties: {
    customerDataStorage: {
      blobContainerName: 'azurechaosstudioexperiments'
      storageAccountResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/exampleRG/providers/Microsoft.Storage/storageAccounts/exampleStorage'
    }
    selectors: [
      {
        type: 'List'
        id: 'selector1'
        targets: [
          {
            type: 'ChaosTarget'
            id: '/subscriptions/6b052e15-03d3-4f17-b2e1-be7f07588291/resourceGroups/exampleRG/providers/Microsoft.Compute/virtualMachines/exampleVM/providers/Microsoft.Chaos/targets/Microsoft-VirtualMachine'
          }
        ]
      }
    ]
    steps: [
      {
        name: 'step1'
        branches: [
          {
            name: 'branch1'
            actions: [
              {
                name: 'urn:csci:microsoft:virtualMachine:shutdown/1.0'
                type: 'continuous'
                duration: 'PT10M'
                parameters: [
                  {
                    key: 'abruptShutdown'
                    value: 'false'
                  }
                ]
                selectorId: 'selector1'
              }
            ]
          }
        ]
      }
    ]
  }
  tags: {
    key2138: 'fjaeecgnvqd'
    key7131: 'ryohwcoiccwsnewjigfmijz'
  }
}
```

## microsoft.chaos/privateaccesses

Create or Update a private access resource
```bicep
resource exampleResource 'Microsoft.Chaos/privateAccesses@2026-05-01-preview' = {
  name: 'example'
  location: 'centraluseuap'
  properties: {
  }
}
```

Create or Update a private access resource with publicNetworkAccess
```bicep
resource exampleResource 'Microsoft.Chaos/privateAccesses@2026-05-01-preview' = {
  name: 'example'
  location: 'centraluseuap'
  properties: {
    publicNetworkAccess: 'Enabled'
  }
}
```

## microsoft.chaos/targets

Create/update a Target that extends a virtual machine resource.
```bicep
resource exampleResource 'Microsoft.Chaos/targets@2026-05-01-preview' = {
  name: 'example'
  properties: {
  }
}
```

## microsoft.chaos/targets/capabilities

Create/update a Capability that extends a virtual machine Target resource.
```bicep
resource exampleResource 'Microsoft.Chaos/targets/capabilities@2026-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.chaos/workspaces

Create/update a workspace in a resource group.
```bicep
resource exampleResource 'Microsoft.Chaos/workspaces@2026-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/exampleResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleIdentity': {
      }
    }
  }
  location: 'westus2'
  properties: {
    scopes: [
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/exampleResourceGroup'
    ]
  }
  tags: {
    department: 'engineering'
    environment: 'production'
    project: 'chaos-testing'
  }
}
```

## microsoft.chaos/workspaces/scenarios

Create or update a scenario.
```bicep
resource exampleResource 'Microsoft.Chaos/workspaces/scenarios@2026-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Induces an outage of all discovered VM and VMSS instances in the target zone with an option to invoke custom scripted actions using Automation Runbooks. Additionally, it forces failover of discovered Redis instances to simulate backend zonal outage.'
    actions: [
      {
        name: 'vmssZoneDown'
        description: 'Force shutdown VMSS instances in target zone'
        actionId: 'urn:csci:microsoft:compute:shutdown/1.0.0'
        duration: '%%{parameters.duration}%%'
        parameters: [
          {
            key: 'zones'
            value: '%%{filters.zones}%%'
          }
        ]
      }
      {
        name: 'vmZoneDown'
        description: 'Force shutdown VM instances in target zone'
        actionId: 'urn:csci:microsoft:compute:shutdown/1.0.0'
        duration: '%%{parameters.duration}%%'
        parameters: [
          {
            key: 'zones'
            value: '%%{filters.zones}%%'
          }
        ]
      }
      {
        name: 'redisFailover'
        description: 'Force failover of Redis instances to simulate backend zonal outage'
        actionId: 'urn:csci:microsoft:azureClusteredCacheForRedis:Reboot/1.0.0'
        duration: 'PT5M'
        parameters: [
          {
            key: 'RebootType'
            value: 'PrimaryNode'
          }
        ]
      }
      {
        name: 'custom-runbook-1'
        description: 'Custom Runbook 1'
        actionId: 'urn:csci:microsoft:Automation:StartRunbook/1.0.0'
        duration: 'PT30M'
        externalResource: {
          resourceId: '/subscriptions/6b052e15-03d3-4f17-b2e1-be7f07588291/resourceGroups/exampleRG/providers/Microsoft.Automation/automationAccounts/exampleAutomationAccount/runbooks/exampleRunbook'
        }
        parameters: [
          {
            key: 'RunbookParameters'
            value: '%%{parameters.customRunbook1ParametersJson}%%'
          }
        ]
      }
    ]
    parameters: [
      {
        name: 'duration'
        type: 'string'
        description: 'The duration of the outage scenario.'
        default: 'PT15M'
        required: false
      }
      {
        name: 'customRunbook1ResourceId'
        type: 'string'
        description: 'Optional custom runbook 1 resource ID. If not provided, this action will be skipped.'
        required: false
      }
      {
        name: 'customRunbook1ParametersJson'
        type: 'string'
        description: 'Optional custom runbook 1 parameters in JSON format.'
        default: '{}'
        required: false
      }
    ]
  }
}
```

## microsoft.chaos/workspaces/scenarios/configurations

Create or update a scenario configuration with physical zone targeting.
```bicep
resource exampleResource 'Microsoft.Chaos/workspaces/scenarios/configurations@2026-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    exclusions: {
      resources: [
        '/subscriptions/6b052e15-03d3-4f17-b2e1-be7f07588291/resourceGroups/exampleRG/providers/Microsoft.Compute/virtualMachines/protectedVM'
      ]
    }
    filters: {
      locations: [
        'westus2'
      ]
      physicalZones: [
        'westus2-az1'
      ]
    }
    parameters: [
      {
        key: 'duration'
        value: 'PT10M'
      }
    ]
    scenarioId: '/subscriptions/6b052e15-03d3-4f17-b2e1-be7f07588291/resourceGroups/exampleRG/providers/Microsoft.Chaos/workspaces/exampleWorkspace/scenarios/12345678-1234-1234-1234-123456789012'
  }
}
```

Create or update a scenario configuration.
```bicep
resource exampleResource 'Microsoft.Chaos/workspaces/scenarios/configurations@2026-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    exclusions: {
      resources: [
        '/subscriptions/6b052e15-03d3-4f17-b2e1-be7f07588291/resourceGroups/exampleRG/providers/Microsoft.Compute/virtualMachines/protectedVM'
      ]
      tags: [
        {
          key: 'environment'
          value: 'production'
        }
      ]
      types: [
        'Microsoft.Compute/virtualMachineScaleSets'
      ]
    }
    filters: {
      locations: [
        'eastus'
      ]
      zones: [
        '1'
      ]
    }
    parameters: [
      {
        key: 'duration'
        value: 'PT10M'
      }
      {
        key: 'targetResourceIds'
        value: '["/subscriptions/6b052e15-03d3-4f17-b2e1-be7f07588291/resourceGroups/exampleRG/providers/Microsoft.Compute/virtualMachines/vm1","/subscriptions/6b052e15-03d3-4f17-b2e1-be7f07588291/resourceGroups/exampleRG/providers/Microsoft.Compute/virtualMachines/vm2"]'
      }
    ]
    scenarioId: '/subscriptions/6b052e15-03d3-4f17-b2e1-be7f07588291/resourceGroups/exampleRG/providers/Microsoft.Chaos/workspaces/exampleWorkspace/scenarios/12345678-1234-1234-1234-123456789012'
  }
}
```
