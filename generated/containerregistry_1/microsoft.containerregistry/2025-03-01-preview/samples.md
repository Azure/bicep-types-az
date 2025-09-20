# Microsoft.ContainerRegistry
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerregistry/registries/agentpools

AgentPools_Create
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/agentPools@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'WESTUS'
  properties: {
    count: 1
    os: 'Linux'
    tier: 'S1'
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.containerregistry/registries/taskruns

TaskRuns_Create
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/taskRuns@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    forceUpdateTag: 'test'
    runRequest: {
      type: 'EncodedTaskRunRequest'
      credentials: {
      }
      encodedTaskContent: 'c3RlcHM6IAogIC0gY21kOiB7eyAuVmFsdWVzLmNvbW1hbmQgfX0K'
      encodedValuesContent: 'Y29tbWFuZDogYmFzaCBlY2hvIHt7LlJ1bi5SZWdpc3RyeX19Cg=='
      platform: {
        architecture: 'amd64'
        os: 'Linux'
      }
      values: [
      ]
    }
  }
}
```

## microsoft.containerregistry/registries/tasks

Tasks_Create
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/tasks@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus'
  properties: {
    agentConfiguration: {
      cpu: 2
    }
    isSystemTask: false
    logTemplate: 'acr/tasks:{{.Run.OS}}'
    platform: {
      architecture: 'amd64'
      os: 'Linux'
    }
    status: 'Enabled'
    step: {
      type: 'Docker'
      arguments: [
        {
          name: 'mytestargument'
          isSecret: false
          value: 'mytestvalue'
        }
        {
          name: 'mysecrettestargument'
          isSecret: true
          value: 'mysecrettestvalue'
        }
      ]
      contextPath: 'src'
      dockerFilePath: 'src/DockerFile'
      imageNames: [
        'azurerest:testtag'
      ]
      isPushEnabled: true
      noCache: false
    }
    trigger: {
      baseImageTrigger: {
        name: 'myBaseImageTrigger'
        baseImageTriggerType: 'Runtime'
        updateTriggerEndpoint: 'https://user:pass@mycicd.webhook.com?token=foo'
        updateTriggerPayloadType: 'Token'
      }
      sourceTriggers: [
        {
          name: 'mySourceTrigger'
          sourceRepository: {
            branch: 'master'
            repositoryUrl: 'https://github.com/Azure/azure-rest-api-specs'
            sourceControlAuthProperties: {
              token: 'xxxxx'
              tokenType: 'PAT'
            }
            sourceControlType: 'Github'
          }
          sourceTriggerEvents: [
            'commit'
          ]
        }
      ]
      timerTriggers: [
        {
          name: 'myTimerTrigger'
          schedule: '30 9 * * 1-5'
        }
      ]
    }
  }
  tags: {
    testkey: 'value'
  }
}
```

Tasks_Create_QuickTask
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/tasks@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
  }
  location: 'eastus'
  properties: {
    isSystemTask: true
    logTemplate: 'acr/tasks:{{.Run.OS}}'
    status: 'Enabled'
  }
  tags: {
    testkey: 'value'
  }
}
```

Tasks_Create_WithLoginIdentity
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/tasks@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus'
  properties: {
    agentConfiguration: {
      cpu: 2
    }
    credentials: {
      sourceRegistry: {
        identity: '[system]'
      }
    }
    isSystemTask: false
    logTemplate: {
    }
    platform: {
      architecture: 'amd64'
      os: 'Linux'
    }
    status: 'Enabled'
    step: {
      type: 'Docker'
      arguments: [
        {
          name: 'mytestargument'
          isSecret: false
          value: 'mytestvalue'
        }
        {
          name: 'mysecrettestargument'
          isSecret: true
          value: 'mysecrettestvalue'
        }
      ]
      contextPath: 'src'
      dockerFilePath: 'src/DockerFile'
      imageNames: [
        'azurerest:testtag'
      ]
      isPushEnabled: true
      noCache: false
    }
    trigger: {
      baseImageTrigger: {
        name: 'myBaseImageTrigger'
        baseImageTriggerType: 'Runtime'
      }
      sourceTriggers: [
        {
          name: 'mySourceTrigger'
          sourceRepository: {
            branch: 'master'
            repositoryUrl: 'https://github.com/Azure/azure-rest-api-specs'
            sourceControlAuthProperties: {
              token: 'xxxxx'
              tokenType: 'PAT'
            }
            sourceControlType: 'Github'
          }
          sourceTriggerEvents: [
            'commit'
          ]
        }
      ]
      timerTriggers: [
        {
          name: 'myTimerTrigger'
          schedule: '30 9 * * 1-5'
        }
      ]
    }
  }
  tags: {
    testkey: 'value'
  }
}
```

Tasks_Create_WithSystemAndUserIdentities
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/tasks@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/f9d7ebed-adbd-4cb4-b973-aaf82c136138/resourcegroups/myResourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity2': {
      }
    }
  }
  location: 'eastus'
  properties: {
    agentConfiguration: {
      cpu: 2
    }
    isSystemTask: false
    logTemplate: {
    }
    platform: {
      architecture: 'amd64'
      os: 'Linux'
    }
    status: 'Enabled'
    step: {
      type: 'Docker'
      arguments: [
        {
          name: 'mytestargument'
          isSecret: false
          value: 'mytestvalue'
        }
        {
          name: 'mysecrettestargument'
          isSecret: true
          value: 'mysecrettestvalue'
        }
      ]
      contextPath: 'src'
      dockerFilePath: 'src/DockerFile'
      imageNames: [
        'azurerest:testtag'
      ]
      isPushEnabled: true
      noCache: false
    }
    trigger: {
      baseImageTrigger: {
        name: 'myBaseImageTrigger'
        baseImageTriggerType: 'Runtime'
        updateTriggerEndpoint: 'https://user:pass@mycicd.webhook.com?token=foo'
        updateTriggerPayloadType: 'Default'
      }
      sourceTriggers: [
        {
          name: 'mySourceTrigger'
          sourceRepository: {
            branch: 'master'
            repositoryUrl: 'https://github.com/Azure/azure-rest-api-specs'
            sourceControlAuthProperties: {
              token: 'xxxxx'
              tokenType: 'PAT'
            }
            sourceControlType: 'Github'
          }
          sourceTriggerEvents: [
            'commit'
          ]
        }
      ]
      timerTriggers: [
        {
          name: 'myTimerTrigger'
          schedule: '30 9 * * 1-5'
        }
      ]
    }
  }
  tags: {
    testkey: 'value'
  }
}
```

Tasks_Create_WithUserIdentities
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/tasks@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/f9d7ebed-adbd-4cb4-b973-aaf82c136138/resourcegroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
      }
      '/subscriptions/f9d7ebed-adbd-4cb4-b973-aaf82c136138/resourcegroups/myResourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity2': {
      }
    }
  }
  location: 'eastus'
  properties: {
    agentConfiguration: {
      cpu: 2
    }
    isSystemTask: false
    logTemplate: {
    }
    platform: {
      architecture: 'amd64'
      os: 'Linux'
    }
    status: 'Enabled'
    step: {
      type: 'Docker'
      arguments: [
        {
          name: 'mytestargument'
          isSecret: false
          value: 'mytestvalue'
        }
        {
          name: 'mysecrettestargument'
          isSecret: true
          value: 'mysecrettestvalue'
        }
      ]
      contextPath: 'src'
      dockerFilePath: 'src/DockerFile'
      imageNames: [
        'azurerest:testtag'
      ]
      isPushEnabled: true
      noCache: false
    }
    trigger: {
      baseImageTrigger: {
        name: 'myBaseImageTrigger'
        baseImageTriggerType: 'Runtime'
        updateTriggerEndpoint: 'https://user:pass@mycicd.webhook.com?token=foo'
        updateTriggerPayloadType: 'Default'
      }
      sourceTriggers: [
        {
          name: 'mySourceTrigger'
          sourceRepository: {
            branch: 'master'
            repositoryUrl: 'https://github.com/Azure/azure-rest-api-specs'
            sourceControlAuthProperties: {
              token: 'xxxxx'
              tokenType: 'PAT'
            }
            sourceControlType: 'Github'
          }
          sourceTriggerEvents: [
            'commit'
          ]
        }
      ]
      timerTriggers: [
        {
          name: 'myTimerTrigger'
          schedule: '30 9 * * 1-5'
        }
      ]
    }
  }
  tags: {
    testkey: 'value'
  }
}
```

Tasks_Create_WithUserIdentities_WithSystemIdentity
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/tasks@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus'
  properties: {
    agentConfiguration: {
      cpu: 2
    }
    isSystemTask: false
    logTemplate: {
    }
    platform: {
      architecture: 'amd64'
      os: 'Linux'
    }
    status: 'Enabled'
    step: {
      type: 'Docker'
      arguments: [
        {
          name: 'mytestargument'
          isSecret: false
          value: 'mytestvalue'
        }
        {
          name: 'mysecrettestargument'
          isSecret: true
          value: 'mysecrettestvalue'
        }
      ]
      contextPath: 'src'
      dockerFilePath: 'src/DockerFile'
      imageNames: [
        'azurerest:testtag'
      ]
      isPushEnabled: true
      noCache: false
    }
    trigger: {
      baseImageTrigger: {
        name: 'myBaseImageTrigger'
        baseImageTriggerType: 'Runtime'
      }
      sourceTriggers: [
        {
          name: 'mySourceTrigger'
          sourceRepository: {
            branch: 'master'
            repositoryUrl: 'https://github.com/Azure/azure-rest-api-specs'
            sourceControlAuthProperties: {
              token: 'xxxxx'
              tokenType: 'PAT'
            }
            sourceControlType: 'Github'
          }
          sourceTriggerEvents: [
            'commit'
          ]
        }
      ]
      timerTriggers: [
        {
          name: 'myTimerTrigger'
          schedule: '30 9 * * 1-5'
        }
      ]
    }
  }
  tags: {
    testkey: 'value'
  }
}
```
