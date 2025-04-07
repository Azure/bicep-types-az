# Microsoft.AzureStackHCI
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azurestackhci/clusters

Create cluster
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters@2023-02-01' = {
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
resource exampleResource 'Microsoft.AzureStackHCI/clusters/arcSettings@2023-02-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.azurestackhci/clusters/arcsettings/extensions

Create Arc Extension
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2023-02-01' = {
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

## microsoft.azurestackhci/clusters/updates

Put a specific update
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/clusters/updates@2023-02-01' = {
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
resource exampleResource 'Microsoft.AzureStackHCI/clusters/updates/updateRuns@2023-02-01' = {
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
resource exampleResource 'Microsoft.AzureStackHCI/clusters/updateSummaries@2023-02-01' = {
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
