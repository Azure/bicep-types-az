# Microsoft.ContainerRegistry
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerregistry/registries/tasks

Tasks_Create
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/tasks@2018-09-01' = {
  parent: parentResource 
  name: 'example'
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
      contextPath: 'dockerfiles'
      dockerFilePath: 'subfolder/Dockerfile'
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
          status: 'Enabled'
        }
      ]
    }
  }
  tags: {
    testkey: 'value'
  }
}
```
