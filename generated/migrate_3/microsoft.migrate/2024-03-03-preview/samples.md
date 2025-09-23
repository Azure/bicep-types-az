# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects/businesscases

BusinessCaseOperations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/businessCases@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    businessCaseScope: {
      scopeType: 'Datacenter'
    }
    settings: {
      azureArcSettings: {
        azureArcState: 'Disabled'
        laborCostPercentage: 46
        managementSettings: {
          monitoringSettings: {
            alertRulesCount: 19
            logsVolumeInGB: 17
          }
        }
      }
      azureSettings: {
        avsLaborCostPercentage: 2
        businessCaseType: 'Unknown'
        comfortFactor: 19
        currency: 'Unknown'
        discountPercentage: 48
        iaasLaborCostPercentage: 51
        infrastructureGrowthRate: 79
        networkCostPercentage: 81
        paasLaborCostPercentage: 13
        perYearMigrationCompletionPercentage: [
          {
            name: 'cthxvjhedpsnbddvyghswtgp'
            value: 13
          }
        ]
        performanceDataEndTime: '2024-11-14T10:27:58.436Z'
        performanceDataStartTime: '2024-11-14T10:27:58.436Z'
        performanceUtilizationPercentile: 93
        savingsOption: 'Unknown'
        targetLocation: 'hpocokeckktxpzilk'
        wacc: 43
        workloadDiscoverySource: 'Unknown'
      }
      onPremiseSettings: {
        computeSettings: {
          computeHardwareMaintenanceCost: 1
          cpuOversubscriptionRatio: 10
          hyperthreadCoreToMemoryRatio: 26
          price: 8
          rhelLinuxServerLicensing: {
            licenseCost: 7
          }
          sqlServerLicensing: [
            {
              licenseCost: 28
              softwareAssuranceCost: 27
              version: 'Unknown'
            }
          ]
          suseLinuxServerLicensing: {
            licenseCost: 7
          }
          virtualizationSoftwareSettings: {
            vMwareCloudFoundationLicenseCost: 23
          }
          vmOversubscriptionRatio: 10
          windowsServerLicensing: {
            licenseCost: 2
            licensesPerCore: 21
            softwareAssuranceCost: 6
          }
        }
        facilitySettings: {
          facilitiesCostPerKwh: 1
          powerUtilizationEfficiency: 25
        }
        laborSettings: {
          hourlyAdminCost: 22
          physicalServersPerAdmin: 16
          virtualMachinesPerAdmin: 18
        }
        managementSettings: {
          hypervVirtualizationManagementSettings: {
            licenseAndSupportList: [
              {
                licenseCost: 1
                licenseType: 'Unknown'
              }
            ]
            numberOfPhysicalCoresPerLicense: 8
            softwareAssuranceCost: 15
          }
          otherManagementCostsSettings: {
            dataProtectionCostPerServerPerYear: 4
            monitoringCostPerServerPerYear: 2
            patchingCostPerServerPerYear: 28
          }
          thirdPartyManagementSettings: {
            licenseCost: 1
            supportCost: 13
          }
        }
        networkSettings: {
          averageCostPerCabinet: 27
          maintenanceCostPercentage: 84
          physicalServersPerCabinet: 18
        }
        securitySettings: {
          serverSecurityCostPerServerPerYear: 6
          sqlServerSecurityCostPerServerPerYear: 10
        }
        storageSettings: {
          costPerGbPerYear: 12
          maintainanceCostPercentageToAcquisitionCost: 5
        }
      }
    }
    state: 'Unknown'
  }
}
```
