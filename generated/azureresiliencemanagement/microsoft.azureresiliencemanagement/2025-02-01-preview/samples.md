# Microsoft.AzureResilienceManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azureresiliencemanagement/drills

Drills_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.AzureResilienceManagement/drills@2025-02-01-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
    }
  }
  properties: {
    attentionReason: {
      chaosExperimentUserMsi: 'Exists'
      drillRbacOnAzureHealthModel: 'Set'
      drillRbacOnAzureMonitoringWorkspace: 'Set'
      drillRbacOnExperiment: 'Set'
      drillRbacOnRecoveryPlan: 'Set'
      drillRbacOnSlo: 'Set'
      drillUserMsi: 'Exists'
      faultRbacOnTargets: 'Set'
      rbacNeededForDrillOnAzureHealthModel: [
        'yvtpfipqppawimvylrqq'
      ]
      rbacNeededForDrillOnAzureMonitoringWorkspace: [
        'fgvnjvmagxv'
      ]
      rbacNeededForDrillOnExperiment: [
        'lcjjnucz'
      ]
      rbacNeededForDrillOnRecoveryPlan: [
        'ayfyepziwdyxuwuexlamaadey'
      ]
      rbacNeededForDrillOnSlo: [
        'lmnjpqcour'
      ]
      recoveryPlanAndDrillResourcesState: 'InSync'
      roReadiness: 'UnderEdit'
      runbookFaultRbacOnTargets: 'Set'
      serviceGroupAndDrillResourcesState: 'InSync'
      targets: 'Exists'
    }
    chaosExperimentProperties: {
      chaosExperimentIdentityForFaults: {
        type: 'UserAssigned'
        userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
      }
      identity: {
        type: 'UserAssigned'
        userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
      }
      region: 'westus'
      subscription: '4e88bed3-114f-443d-9975-28f64122ec5e'
    }
    drillType: 'DrillProperties'
    executionReadinessState: 'Ready'
    executionState: 'NotRunning'
    healthModelProperties: {
      healthModelId: '/subscriptions/ef4ab5a7-c2c0-4304-af80-af49f48af3d1/resourceGroups/DeleteDemoRG/providers/Microsoft.CloudHealth/healthmodels/ahm-demo'
      identity: {
        type: 'UserAssigned'
        userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
      }
    }
    lastRunProperties: {
      lastRunAttestation: 'Success'
      lastRunState: 'NotStarted'
    }
    managedOnBehalfOfConfiguration: {
    }
    metricsProperties: {
      identity: {
        type: 'UserAssigned'
        userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
      }
      metricsToTrack: [
        {
          destinationAmwAccountUrl: '/subscriptions/191973cd-9c54-41e0-ac19-25dd9a92d5a8/resourceGroups/defaultresourcegroup-cid/providers/microsoft.monitor/accounts/defaultazuremonitorworkspace-cid'
          metricId: '/providers/Microsoft.Monitor/slos/slo1'
          metricName: 'ypablng'
        }
      ]
    }
    rbacSetupMode: 'AutomatedCustomRole'
    recoveryPlanProperties: {
      identity: {
        type: 'UserAssigned'
        userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
      }
    }
    systemMetadata: {
      initialConfig: 'Pending'
    }
  }
}
```

## microsoft.azureresiliencemanagement/goalassignments

GoalAssignments_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.AzureResilienceManagement/goalAssignments@2025-02-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/MyResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myManagedIdentity': {
      }
    }
  }
  properties: {
    goalAssignmentType: 'Resiliency'
    goalTemplateId: '/providers/Microsoft.AzureResilienceManagement/goaltemplates/gt1'
    serviceLevelResources: [
      {
        serviceLevelIndicatorResourceId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/MyVirtualMachine'
        serviceLevelObjectiveResourceId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/MyVirtualMachine'
      }
    ]
  }
}
```

GoalAssignments_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.AzureResilienceManagement/goalAssignments@2025-02-01-preview' = {
  name: 'example'
  properties: {
    goalAssignmentType: 'Resiliency'
    goalTemplateId: '/providers/Microsoft.AzureResilienceManagement/goaltemplates/gt1'
  }
}
```

## microsoft.azureresiliencemanagement/goaltemplates

GoalTemplates_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.AzureResilienceManagement/goalTemplates@2025-02-01-preview' = {
  name: 'example'
  properties: {
    description: 'Goal template for high resiliency requirements'
    goalType: 'Resiliency'
    regionalRecoveryPointObjective: 'PT15M'
    regionalRecoveryTimeObjective: 'PT30M'
    requireDisasterRecovery: 'NotRequired'
    requireHighAvailability: 'Required'
  }
}
```

GoalTemplates_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.AzureResilienceManagement/goalTemplates@2025-02-01-preview' = {
  name: 'example'
  properties: {
    goalType: 'Resiliency'
  }
}
```

## microsoft.azureresiliencemanagement/recoveryplans

RecoveryPlans_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.AzureResilienceManagement/recoveryPlans@2025-02-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1': {
      }
    }
  }
  properties: {
    planDescription: 'Sample Plan'
    planState: 'UnderEdit'
    planType: 'Regional'
    recoveryGroupsSetting: {
      additionalGroups: [
        {
          properties: {
            description: 'sample recoverygroup'
            groupUniqueId: 'b7e2a1c4-9f3b-4e2d-8c6a-2f7e4d1b5a9f'
            orderId: 1
            postActions: [
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
            ]
            preActions: [
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
            ]
          }
        }
        {
          properties: {
            description: 'sample recoverygroup'
            groupUniqueId: 'b7e2a1c4-9f3b-4e2d-8c6a-2f7e4d1b5a9f'
            orderId: 1
            postActions: [
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
            ]
            preActions: [
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
            ]
          }
        }
        {
          properties: {
            description: 'sample recoverygroup'
            groupUniqueId: 'b7e2a1c4-9f3b-4e2d-8c6a-2f7e4d1b5a9f'
            orderId: 1
            postActions: [
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
            ]
            preActions: [
              {
                name: 'sample-group-action'
                type: 'CustomRunbook'
                actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
                associatedIdentity: {
                  type: 'UserAssigned'
                  userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
                }
                parameters: {
                  key7795: 'uvapupcbbdgow'
                }
                timeoutInMinutes: 29
              }
            ]
          }
        }
      ]
      defaultGroup: {
        properties: {
          description: 'sample recoverygroup'
          groupUniqueId: 'b7e2a1c4-9f3b-4e2d-8c6a-2f7e4d1b5a9f'
          orderId: 0
          postActions: [
            {
              name: 'sample-group-action'
              type: 'CustomRunbook'
              actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
              associatedIdentity: {
                type: 'UserAssigned'
                userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
              }
              parameters: {
                key7795: 'uvapupcbbdgow'
              }
              timeoutInMinutes: 29
            }
            {
              name: 'sample-group-action'
              type: 'CustomRunbook'
              actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
              associatedIdentity: {
                type: 'UserAssigned'
                userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
              }
              parameters: {
                key7795: 'uvapupcbbdgow'
              }
              timeoutInMinutes: 29
            }
            {
              name: 'sample-group-action'
              type: 'CustomRunbook'
              actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
              associatedIdentity: {
                type: 'UserAssigned'
                userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
              }
              parameters: {
                key7795: 'uvapupcbbdgow'
              }
              timeoutInMinutes: 29
            }
            {
              name: 'sample-group-action'
              type: 'CustomRunbook'
              actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
              associatedIdentity: {
                type: 'UserAssigned'
                userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
              }
              parameters: {
                key7795: 'uvapupcbbdgow'
              }
              timeoutInMinutes: 29
            }
            {
              name: 'sample-group-action'
              type: 'CustomRunbook'
              actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
              associatedIdentity: {
                type: 'UserAssigned'
                userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
              }
              parameters: {
                key7795: 'uvapupcbbdgow'
              }
              timeoutInMinutes: 29
            }
            {
              name: 'sample-group-action'
              type: 'CustomRunbook'
              actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
              associatedIdentity: {
                type: 'UserAssigned'
                userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
              }
              parameters: {
                key7795: 'uvapupcbbdgow'
              }
              timeoutInMinutes: 29
            }
            {
              name: 'sample-group-action'
              type: 'CustomRunbook'
              actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
              associatedIdentity: {
                type: 'UserAssigned'
                userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
              }
              parameters: {
                key7795: 'uvapupcbbdgow'
              }
              timeoutInMinutes: 29
            }
            {
              name: 'sample-group-action'
              type: 'CustomRunbook'
              actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
              associatedIdentity: {
                type: 'UserAssigned'
                userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
              }
              parameters: {
                key7795: 'uvapupcbbdgow'
              }
              timeoutInMinutes: 29
            }
            {
              name: 'sample-group-action'
              type: 'CustomRunbook'
              actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
              associatedIdentity: {
                type: 'UserAssigned'
                userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
              }
              parameters: {
                key7795: 'uvapupcbbdgow'
              }
              timeoutInMinutes: 29
            }
          ]
          preActions: [
            {
              name: 'sample-group-action'
              type: 'CustomRunbook'
              description: 'sample group action instructions'
              actionResourceId: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.Automation/automationAccounts/sampleAccount/runbooks/sameplRunbooks1'
              associatedIdentity: {
                type: 'UserAssigned'
                userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
              }
              parameters: {
                key7795: 'uvapupcbbdgow'
              }
              timeoutInMinutes: 29
            }
          ]
        }
      }
    }
  }
}
```
