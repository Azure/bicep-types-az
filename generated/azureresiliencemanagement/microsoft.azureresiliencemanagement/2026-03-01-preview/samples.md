# Microsoft.AzureResilienceManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azureresiliencemanagement/drills

Drills_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.AzureResilienceManagement/drills@2026-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
    }
  }
  properties: {
    attentionReason: {
      chaosExperimentUserMsi: 'Exists'
      chaosResource: 'Exists'
      chaosResourceCreationFailureReasons: [
        'cjqkzeqcktfqcpmdwoloqb'
      ]
      chaosResourceUserMsi: 'Exists'
      drillMonitoringErrors: [
        {
          code: '14123903'
          message: 'Unable to assign Monitoring RBAC on target resource.'
        }
      ]
      drillMonitoringResources: 'Exists'
      drillRbacOnAzureHealthModel: 'Set'
      drillRbacOnAzureMonitoringWorkspace: 'Set'
      drillRbacOnChaosResource: 'Set'
      drillRbacOnExperiment: 'Set'
      drillRbacOnMonitoringResources: 'Set'
      drillRbacOnRecoveryPlan: 'Set'
      drillRbacOnSlo: 'Set'
      drillUserMsi: 'Exists'
      faultRbacOnTargets: 'Set'
      includedResourceInDrill: 'Exists'
      missingRequiredResourceProviders: [
        'Microsoft.Chaos'
        'Microsoft.Automation'
      ]
      monitoringRbacOnDrillResources: 'Set'
      rbacNeededForDrillOnAzureHealthModel: [
        'yvtpfipqppawimvylrqq'
      ]
      rbacNeededForDrillOnAzureMonitoringWorkspace: [
        'fgvnjvmagxv'
      ]
      rbacNeededForDrillOnChaosResource: [
        'zabszxqjflfjgifyrtttvdpipw'
      ]
      rbacNeededForDrillOnDrillMonitoringResources: [
        'lyffvljvuhwvxcuzyzlyo'
      ]
      rbacNeededForDrillOnDrillResources: [
        'sajsgcweakvzfunxfzzxe'
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
      rbacOnTargetResources: 'Set'
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
    chaosResourceProperties: {
      chaosResourceIdentityForFaults: {
        type: 'UserAssigned'
        userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
      }
      identity: {
        type: 'UserAssigned'
        userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
      }
    }
    drillAssetProperties: {
      region: 'eastus'
      resourceGroup: 'customDrillResourceGroup'
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
    monitoringProperties: {
      identity: {
        type: 'UserAssigned'
        userAssignedIdentity: '/subscriptions/4e88bed3-114f-443d-9975-28f64122ec5e/resourcegroups/resourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/uami1'
      }
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
resource exampleResource 'Microsoft.AzureResilienceManagement/goalAssignments@2026-03-01-preview' = {
  name: 'example'
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
resource exampleResource 'Microsoft.AzureResilienceManagement/goalAssignments@2026-03-01-preview' = {
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
resource exampleResource 'Microsoft.AzureResilienceManagement/goalTemplates@2026-03-01-preview' = {
  name: 'example'
  properties: {
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
resource exampleResource 'Microsoft.AzureResilienceManagement/goalTemplates@2026-03-01-preview' = {
  name: 'example'
  properties: {
    goalType: 'Resiliency'
  }
}
```

## microsoft.azureresiliencemanagement/recoveryplans

RecoveryPlans_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.AzureResilienceManagement/recoveryPlans@2026-03-01-preview' = {
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

## microsoft.azureresiliencemanagement/usageplans

UsagePlans_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.AzureResilienceManagement/usagePlans@2026-03-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    planType: 'Standard'
  }
  tags: {
    environment: 'production'
  }
}
```

## microsoft.azureresiliencemanagement/usageplans/enrollments

Enrollments_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.AzureResilienceManagement/usagePlans/enrollments@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serviceGroupId: '/providers/Microsoft.Management/serviceGroups/sg1'
  }
}
```
