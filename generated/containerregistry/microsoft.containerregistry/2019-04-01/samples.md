# Microsoft.ContainerRegistry
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerregistry/registries/tasks

Tasks_Create
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/tasks@2019-04-01' = {
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
resource exampleResource 'Microsoft.ContainerRegistry/registries/tasks@2019-04-01' = {
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

Tasks_Create_WithUserIdentities
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/tasks@2019-04-01' = {
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

Tasks_Create_WithUserIdentities_WithSystemIdentity
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/tasks@2019-04-01' = {
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
