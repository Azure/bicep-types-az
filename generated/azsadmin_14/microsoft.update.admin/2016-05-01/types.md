# Microsoft.Update.Admin @ 2016-05-01

## Resource Microsoft.Update.Admin/updateLocations@2016-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region location of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateLocationModel](#updatelocationmodel) (ReadOnly): Model which holds information related to update location.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Update.Admin/updateLocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Update.Admin/updateLocations/updateRuns@2016-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region location of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateRunModel](#updaterunmodel) (ReadOnly): Properties of a update run.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Update.Admin/updateLocations/updateRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Update.Admin/updateLocations/updates@2016-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region location of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateModel](#updatemodel) (ReadOnly): Properties of an update.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Update.Admin/updateLocations/updates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Update.Admin/updateLocations/updates/updateRuns@2016-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region location of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateRunModel](#updaterunmodel) (ReadOnly): Properties of a update run.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Update.Admin/updateLocations/updates/updateRuns' (ReadOnly, DeployTimeConstant): The resource type

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Step
### Properties
* **description**: string: Description of the step.
* **endTimeUtc**: string: Time at which this step stopped executing
* **errorMessage**: string: Error message, if any.
* **name**: string: Name of the step.
* **startTimeUtc**: string: Time at which this step started executing
* **status**: string: State of the step.
* **steps**: [Step](#step)[]: Inner steps

## UpdateLocationModel
### Properties
* **currentOemVersion**: string: Current OEM version of your AzureStack deployment.
* **currentVersion**: string: Current version of your AzureStack deployment.
* **lastUpdated**: string: Date of last update.
* **state**: 'AppliedSuccessfully' | 'AppliedUpdateAvailableSuccessfully' | 'Unknown' | 'UpdateFailed' | 'UpdateInProgress' | string: State with respect to the update.

## UpdateModel
### Properties
* **description**: string: Description of the update.
* **displayName**: string: Name of the update.
* **installedDate**: string: Date update was installed.
* **kbLink**: string: Link to the KB article about the update.
* **minOemVersionRequired**: string: The minimum OEM version required to install.
* **minVersionRequired**: string: The minimum version required to install.
* **oemVersion**: string: OEM version of the update.
* **packagePath**: string: Path to the update package.
* **packageSizeInMb**: int: Size of update package.
* **publisher**: string: Publisher of the update.
* **state**: 'HasPrerequisite' | 'InstallationFailed' | 'Installed' | 'Installing' | 'NotApplicableBecauseAnotherUpdateIsInProgress' | 'Obsolete' | 'PreparationFailed' | 'Preparing' | 'Ready' | string: Current state of the update.
* **version**: string: Version of the update.

## UpdateRunModel
### Properties
* **duration**: string: Duration of the update.
* **progress**: [Step](#step): Current progress of the update run.
* **state**: 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string: State of the update run.
* **timeStarted**: string: Update start time.

