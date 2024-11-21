# Microsoft.AzureStackHCI
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azurestackhci/clusters

Create cluster
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters@2024-02-15-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'East US'
  properties: {
    aadClientId: '24a6e53d-04e5-44d2-b7cc-1b732a847dfc'
    aadTenantId: '7e589cc1-a8b6-4dff-91bd-5ec0fa18db94'
    cloudManagementEndpoint: 'https://98294836-31be-4668-aeae-698667faf99b.waconazure.com'
  }
}
```

## microsoft.azurestackhci/clusters/arcsettings

Create ArcSetting
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters/arcSettings@2024-02-15-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.azurestackhci/clusters/arcsettings/extensions

Create Arc Extension
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2024-02-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    extensionParameters: {
      type: 'MicrosoftMonitoringAgent'
      enableAutomaticUpgrade: false
      protectedSettings: {
        workspaceKey: 'xx'
      }
      publisher: 'Microsoft.Compute'
      settings: {
        workspaceId: 'xx'
      }
      typeHandlerVersion: '1.10'
    }
  }
}
```

## microsoft.azurestackhci/clusters/deploymentsettings

Create Deployment Settings
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters/deploymentSettings@2024-02-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    arcNodeResourceIds: [
      '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/ArcInstance-rg/providers/Microsoft.HybridCompute/machines/Node-1'
      '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/ArcInstance-rg/providers/Microsoft.HybridCompute/machines/Node-2'
    ]
    deploymentConfiguration: {
      scaleUnits: [
        {
          deploymentData: {
            adouPath: 'OU=ms169,DC=ASZ1PLab8,DC=nttest,DC=microsoft,DC=com'
            cluster: {
              name: 'testHCICluster'
              azureServiceEndpoint: 'core.windows.net'
              cloudAccountName: 'myasestoragacct'
              witnessPath: 'Cloud'
              witnessType: 'Cloud'
            }
            domainFqdn: 'ASZ1PLab8.nttest.microsoft.com'
            hostNetwork: {
              intents: [
                {
                  name: 'Compute_Management'
                  adapter: [
                    'Port2'
                  ]
                  adapterPropertyOverrides: {
                    jumboPacket: '1514'
                    networkDirect: 'Enabled'
                    networkDirectTechnology: 'iWARP'
                  }
                  overrideAdapterProperty: false
                  overrideQosPolicy: false
                  overrideVirtualSwitchConfiguration: false
                  qosPolicyOverrides: {
                    bandwidthPercentage_SMB: '50'
                    priorityValue8021Action_Cluster: '7'
                    priorityValue8021Action_SMB: '3'
                  }
                  trafficType: [
                    'Compute'
                    'Management'
                  ]
                  virtualSwitchConfigurationOverrides: {
                    enableIov: 'True'
                    loadBalancingAlgorithm: 'HyperVPort'
                  }
                }
              ]
              storageConnectivitySwitchless: true
              storageNetworks: [
                {
                  name: 'Storage1Network'
                  networkAdapterName: 'Port3'
                  vlanId: '5'
                }
              ]
            }
            infrastructureNetwork: [
              {
                dnsServers: [
                  '10.57.50.90'
                ]
                gateway: '255.255.248.0'
                ipPools: [
                  {
                    endingAddress: '10.57.48.66'
                    startingAddress: '10.57.48.60'
                  }
                ]
                subnetMask: '255.255.248.0'
              }
            ]
            namingPrefix: 'ms169'
            observability: {
              episodicDataUpload: true
              euLocation: false
              streamingDataClient: true
            }
            optionalServices: {
              customLocation: 'customLocationName'
            }
            physicalNodes: [
              {
                name: 'ms169host'
                ipv4Address: '10.57.51.224'
              }
              {
                name: 'ms154host'
                ipv4Address: '10.57.53.236'
              }
            ]
            secretsLocation: '/subscriptions/db4e2fdb-6d80-4e6e-b7cd-xxxxxxx/resourceGroups/test-rg/providers/Microsoft.KeyVault/vaults/abcd123'
            securitySettings: {
              bitlockerBootVolume: true
              bitlockerDataVolumes: true
              credentialGuardEnforced: false
              driftControlEnforced: true
              drtmProtection: true
              hvciProtection: true
              sideChannelMitigationEnforced: true
              smbClusterEncryption: false
              smbSigningEnforced: true
              wdacEnforced: true
            }
            storage: {
              configurationMode: 'Express'
            }
          }
        }
      ]
      version: 'string'
    }
    deploymentMode: 'Deploy'
  }
}
```

## microsoft.azurestackhci/clusters/securitysettings

Create Security Settings
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters/securitySettings@2024-02-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    securedCoreComplianceAssignment: 'Audit'
  }
}
```

## microsoft.azurestackhci/clusters/updates

Put a specific update
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters/updates@2024-02-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'AzS Update 4.2203.2.32'
    additionalProperties: 'additional properties'
    availabilityType: 'Local'
    displayName: 'AzS Update - 4.2203.2.32'
    installedDate: '2022-04-06T14:08:18.254Z'
    packagePath: '\\\\SU1FileServer\\SU1_Infrastructure_2\\Updates\\Packages\\Microsoft4.2203.2.32'
    packageSizeInMb: 18858
    packageType: 'Infrastructure'
    prerequisites: [
      {
        packageName: 'update package name'
        updateType: 'update type'
        version: 'prerequisite version'
      }
    ]
    publisher: 'Microsoft'
    releaseLink: 'https://docs.microsoft.com/azure-stack/operator/release-notes?view=azs-2203'
    state: 'Installed'
    updateStateProperties: {
      notifyMessage: 'Brief message with instructions for updates of AvailabilityType Notify'
      progressPercentage: 0
    }
    version: '4.2203.2.32'
  }
}
```

## microsoft.azurestackhci/clusters/updates/updateruns

Get Update runs under cluster resource
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters/updates/updateRuns@2024-02-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    progress: {
      name: 'Unnamed step'
      description: 'Update Azure Stack.'
      endTimeUtc: '2022-04-06T13:58:42.969006+00:00'
      errorMessage: ''
      lastUpdatedTimeUtc: '2022-04-06T13:58:42.969006+00:00'
      startTimeUtc: '2022-04-06T01:36:33.3876751+00:00'
      status: 'Success'
      steps: [
        {
          name: 'PreUpdate Cloud'
          description: 'Prepare for SSU update'
          endTimeUtc: '2022-04-06T01:37:16.8728314+00:00'
          errorMessage: ''
          lastUpdatedTimeUtc: '2022-04-06T01:37:16.8728314+00:00'
          startTimeUtc: '2022-04-06T01:36:33.3876751+00:00'
          status: 'Success'
          steps: [
          ]
        }
      ]
    }
  }
}
```

## microsoft.azurestackhci/clusters/updatesummaries

Put Update summaries under cluster resource
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters/updateSummaries@2024-02-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    currentVersion: '4.2203.2.32'
    hardwareModel: 'PowerEdge R730xd'
    lastChecked: '2022-04-07T18:04:07Z'
    lastUpdated: '2022-04-06T14:08:18.254Z'
    oemFamily: 'DellEMC'
    state: 'AppliedSuccessfully'
  }
}
```

## microsoft.azurestackhci/edgedevices

Create HCI Edge Device
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/edgeDevices@2024-02-15-preview' = {
  name: 'example'
  kind: 'HCI'
  properties: {
    deviceConfiguration: {
      deviceMetadata: ''
      nicDetails: [
        {
          adapterName: 'ethernet'
          componentId: 'VMBUS{f8615163-df3e-46c5-913f-f2d2f965ed0g} '
          defaultGateway: '10.10.10.1'
          defaultIsolationId: '0'
          dnsServers: [
            '100.10.10.1'
          ]
          driverVersion: '10.0.20348.1547 '
          interfaceDescription: 'NDIS 6.70 '
          ip4Address: '10.10.10.10'
          subnetMask: '255.255.255.0'
        }
      ]
    }
  }
}
```
