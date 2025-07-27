# Microsoft.DevTestLab
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devtestlab/labs

Labs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs@2018-09-15' = {
  name: 'example'
  location: '{location}'
  properties: {
    labStorageType: '{Standard|Premium}'
  }
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/labs/artifactsources

ArtifactSources_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/artifactsources@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    armTemplateFolderPath: '{armTemplateFolderPath}'
    branchRef: '{branchRef}'
    displayName: '{displayName}'
    folderPath: '{folderPath}'
    securityToken: '{securityToken}'
    sourceType: '{VsoGit|GitHub|StorageAccount}'
    status: '{Enabled|Disabled}'
    uri: '{artifactSourceUri}'
  }
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/labs/costs

Costs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/costs@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    currencyCode: 'USD'
    endDateTime: '2020-12-31T23:59:59Z'
    startDateTime: '2020-12-01T00:00:00Z'
    targetCost: {
      costThresholds: [
        {
          displayOnChart: 'Disabled'
          percentageThreshold: {
            thresholdValue: 25
          }
          sendNotificationWhenExceeded: 'Disabled'
          thresholdId: '00000000-0000-0000-0000-000000000001'
        }
        {
          displayOnChart: 'Enabled'
          percentageThreshold: {
            thresholdValue: 50
          }
          sendNotificationWhenExceeded: 'Enabled'
          thresholdId: '00000000-0000-0000-0000-000000000002'
        }
        {
          displayOnChart: 'Disabled'
          percentageThreshold: {
            thresholdValue: 75
          }
          sendNotificationWhenExceeded: 'Disabled'
          thresholdId: '00000000-0000-0000-0000-000000000003'
        }
        {
          displayOnChart: 'Disabled'
          percentageThreshold: {
            thresholdValue: 100
          }
          sendNotificationWhenExceeded: 'Disabled'
          thresholdId: '00000000-0000-0000-0000-000000000004'
        }
        {
          displayOnChart: 'Disabled'
          percentageThreshold: {
            thresholdValue: 125
          }
          sendNotificationWhenExceeded: 'Disabled'
          thresholdId: '00000000-0000-0000-0000-000000000005'
        }
      ]
      cycleEndDateTime: '2020-12-31T00:00:00.000Z'
      cycleStartDateTime: '2020-12-01T00:00:00.000Z'
      cycleType: 'CalendarMonth'
      status: 'Enabled'
      target: 100
    }
  }
}
```

## microsoft.devtestlab/labs/customimages

CustomImages_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/customimages@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'My Custom Image'
    vm: {
      linuxOsInfo: {
        linuxOsState: 'NonDeprovisioned'
      }
      sourceVmId: '/subscriptions/{subscriptionId}/resourcegroups/resourceGroupName/providers/microsoft.devtestlab/labs/{labName}/virtualmachines/{vmName}'
    }
  }
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/labs/formulas

Formulas_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/formulas@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  location: '{location}'
  properties: {
    description: 'Formula using a Linux base'
    formulaContent: {
      location: '{location}'
      properties: {
        allowClaim: false
        artifacts: [
          {
            artifactId: '/artifactsources/{artifactSourceName}/artifacts/linux-install-nodejs'
            parameters: [
            ]
          }
        ]
        disallowPublicIpAddress: true
        galleryImageReference: {
          offer: '0001-com-ubuntu-server-groovy'
          osType: 'Linux'
          publisher: 'canonical'
          sku: '20_10'
          version: 'latest'
        }
        isAuthenticationWithSshKey: false
        labSubnetName: 'Dtl{labName}Subnet'
        labVirtualNetworkId: '/virtualnetworks/dtl{labName}'
        networkInterface: {
          sharedPublicIpAddressConfiguration: {
            inboundNatRules: [
              {
                backendPort: 22
                transportProtocol: 'Tcp'
              }
            ]
          }
        }
        notes: 'Ubuntu Server 20.10'
        size: 'Standard_B1ms'
        storageType: 'Standard'
        userName: 'user'
      }
    }
  }
}
```

## microsoft.devtestlab/labs/notificationchannels

NotificationChannels_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/notificationchannels@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Integration configured for auto-shutdown'
    emailRecipient: '{email}'
    events: [
      {
        eventName: 'AutoShutdown'
      }
    ]
    notificationLocale: 'en'
    webHookUrl: '{webhookUrl}'
  }
}
```

## microsoft.devtestlab/labs/policysets/policies

Policies_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/policysets/policies@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  location: '{location}'
  properties: {
    description: '{policyDescription}'
    evaluatorType: '{policyEvaluatorType}'
    factData: '{policyFactData}'
    factName: '{policyFactName}'
    status: '{policyStatus}'
    threshold: '{policyThreshold}'
  }
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/labs/schedules

Schedules_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/schedules@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  location: '{location}'
  properties: {
    dailyRecurrence: {
      time: '{timeOfTheDayTheScheduleWillOccurEveryDay}'
    }
    hourlyRecurrence: {
      minute: 30
    }
    notificationSettings: {
      emailRecipient: '{email}'
      notificationLocale: 'EN'
      status: '{Enabled|Disabled}'
      timeInMinutes: 15
      webhookUrl: '{webhookUrl}'
    }
    status: '{Enabled|Disabled}'
    targetResourceId: '/subscriptions/{subscriptionId}/resourcegroups/resourceGroupName/providers/microsoft.devtestlab/labs/{labName}'
    taskType: '{myLabVmTaskType}'
    timeZoneId: 'Pacific Standard Time'
    weeklyRecurrence: {
      time: '{timeOfTheDayTheScheduleWillOccurOnThoseDays}'
      weekdays: [
        'Monday'
        'Wednesday'
        'Friday'
      ]
    }
  }
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/labs/servicerunners

ServiceRunners_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/servicerunners@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: '{identityType}'
    clientSecretUrl: '{identityClientSecretUrl}'
    principalId: '{identityPrincipalId}'
    tenantId: '{identityTenantId}'
  }
  location: '{location}'
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/labs/users

Users_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/users@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  location: '{location}'
  properties: {
    identity: {
      appId: '{appId}'
      objectId: '{objectId}'
      principalId: '{principalId}'
      principalName: '{principalName}'
      tenantId: '{tenantId}'
    }
    secretStore: {
      keyVaultId: '{keyVaultId}'
      keyVaultUri: '{keyVaultUri}'
    }
  }
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/labs/users/disks

Disks_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/users/disks@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    diskSizeGiB: 1023
    diskType: 'Standard'
    leasedByLabVmId: '/subscriptions/{subscriptionId}/resourcegroups/resourceGroupName/providers/microsoft.devtestlab/labs/{labName}/virtualmachines/vmName'
  }
}
```

## microsoft.devtestlab/labs/users/environments

Environments_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/users/environments@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentProperties: {
      armTemplateId: '/subscriptions/{subscriptionId}/resourceGroups/resourceGroupName/providers/Microsoft.DevTestLab/labs/{labName}/artifactSources/{artifactSourceName}/armTemplates/{armTemplateName}'
      parameters: [
      ]
    }
  }
}
```

## microsoft.devtestlab/labs/users/secrets

Secrets_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/users/secrets@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    value: '{secret}'
  }
}
```

## microsoft.devtestlab/labs/users/servicefabrics

ServiceFabrics_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/users/servicefabrics@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  location: '{location}'
  properties: {
    environmentId: '{environmentId}'
    externalServiceFabricId: '{serviceFabricId}'
  }
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/labs/users/servicefabrics/schedules

ServiceFabricSchedules_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/users/servicefabrics/schedules@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  location: '{location}'
  properties: {
    dailyRecurrence: {
      time: '19:00'
    }
    hourlyRecurrence: {
      minute: 0
    }
    notificationSettings: {
      emailRecipient: '{email}'
      notificationLocale: 'EN'
      status: '{Enabled|Disabled}'
      timeInMinutes: 15
      webhookUrl: '{webhoolUrl}'
    }
    status: '{Enabled|Disabled}'
    targetResourceId: '/subscriptions/{subscriptionId}/resourceGroups/resourceGroupName/providers/Microsoft.DevTestLab/labs/{labName}/users/{uniqueIdentifier}/servicefabrics/{serviceFrabicName}'
    taskType: '{Unknown|LabVmsShutdownTask|LabVmsStartupTask|LabVmReclamationTask|ComputeVmShutdownTask}'
    timeZoneId: 'Pacific Standard Time'
    weeklyRecurrence: {
      time: '19:00'
      weekdays: [
        'Monday'
        'Tuesday'
        'Wednesday'
        'Thursday'
        'Friday'
        'Saturday'
        'Sunday'
      ]
    }
  }
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/labs/virtualmachines

VirtualMachines_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/virtualmachines@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  location: '{location}'
  properties: {
    allowClaim: true
    disallowPublicIpAddress: true
    galleryImageReference: {
      offer: 'UbuntuServer'
      osType: 'Linux'
      publisher: 'Canonical'
      sku: '16.04-LTS'
      version: 'Latest'
    }
    labSubnetName: '{virtualNetworkName}Subnet'
    labVirtualNetworkId: '/subscriptions/{subscriptionId}/resourcegroups/resourceGroupName/providers/microsoft.devtestlab/labs/{labName}/virtualnetworks/{virtualNetworkName}'
    password: '{userPassword}'
    size: 'Standard_A2_v2'
    storageType: 'Standard'
    userName: '{userName}'
  }
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/labs/virtualmachines/schedules

VirtualMachineSchedules_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/virtualmachines/schedules@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  location: '{location}'
  properties: {
    dailyRecurrence: {
      time: '1900'
    }
    hourlyRecurrence: {
      minute: 30
    }
    notificationSettings: {
      emailRecipient: '{email}'
      notificationLocale: 'EN'
      status: 'Enabled'
      timeInMinutes: 30
      webhookUrl: '{webhookUrl}'
    }
    status: 'Enabled'
    targetResourceId: '/subscriptions/{subscriptionId}/resourcegroups/resourceGroupName/providers/microsoft.devtestlab/labs/{labName}/virtualMachines/{vmName}'
    taskType: 'LabVmsShutdownTask'
    timeZoneId: 'Pacific Standard Time'
    weeklyRecurrence: {
      time: '1700'
      weekdays: [
        'Friday'
        'Saturday'
        'Sunday'
      ]
    }
  }
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/labs/virtualnetworks

VirtualNetworks_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/labs/virtualnetworks@2018-09-15' = {
  parent: parentResource 
  name: 'example'
  location: '{location}'
  properties: {
    allowedSubnets: [
      {
        allowPublicIp: 'Allow'
        labSubnetName: '{virtualNetworkName}Subnet'
        resourceId: '/subscriptions/{subscriptionId}/resourceGroups/resourceGroupName/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{virtualNetworkName}Subnet'
      }
    ]
  }
  tags: {
    tagName1: 'tagValue1'
  }
}
```

## microsoft.devtestlab/schedules

GlobalSchedules_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DevTestLab/schedules@2018-09-15' = {
  name: 'example'
  properties: {
    status: 'Enabled'
    taskType: 'LabVmsStartupTask'
    timeZoneId: 'Hawaiian Standard Time'
    weeklyRecurrence: {
      time: '0700'
      weekdays: [
        'Monday'
        'Tuesday'
        'Wednesday'
        'Thursday'
        'Friday'
        'Saturday'
      ]
    }
  }
}
```
