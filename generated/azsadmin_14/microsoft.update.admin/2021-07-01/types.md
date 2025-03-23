# Microsoft.Update.Admin @ 2021-07-01

## Resource Microsoft.Update.Admin/updateLocations@2021-07-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region location of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateLocationModel](#updatelocationmodel) (ReadOnly): Model which holds information related to update location.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Update.Admin/updateLocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Update.Admin/updateLocations/updateRuns@2021-07-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region location of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateRunModel](#updaterunmodel) (ReadOnly): Properties of a update run.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Update.Admin/updateLocations/updateRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Update.Admin/updateLocations/updates@2021-07-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region location of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateModel](#updatemodel) (ReadOnly): Properties of an update.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Update.Admin/updateLocations/updates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Update.Admin/updateLocations/updates/updateRuns@2021-07-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Region location of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateRunModel](#updaterunmodel) (ReadOnly): Properties of a update run.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Update.Admin/updateLocations/updates/updateRuns' (ReadOnly, DeployTimeConstant): The resource type

## PackageVersionInfo
### Properties
* **lastUpdated**: string: Date of last update.
* **packageType**: string: Type of the update.
* **version**: string: Version of the update.

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
* **currentOemVersion**: string: Current OEM version of your Azure Stack Hub deployment.
* **currentVersion**: string: Current version of your Azure Stack Hub deployment.
* **hardwareModel**: string: Hardware model of your Azure Stack Hub deployment.
* **lastChecked**: string: Time of last successful check for new available updates.
* **lastUpdated**: string: Date of last update.
* **oemFamily**: string: OEM family of your Azure Stack Hub deployment.
* **packageVersions**: [PackageVersionInfo](#packageversioninfo)[]: Package map of your Azure Stack Hub deployment.
* **state**: 'AppliedSuccessfully' | 'AppliedUpdateAvailableSuccessfully' | 'NeedsAttention' | 'PreparationFailed' | 'PreparationInProgress' | 'Unknown' | 'UpdateAvailable' | 'UpdateFailed' | 'UpdateInProgress' | string: State with respect to the update.

## UpdateModel
### Properties
* **additionalProperties**: string: Additional properties of the update.
* **availabilityType**: 'local' | 'notify' | 'online' | string: The availability type of the update. The location where the update is available.
* **description**: string: Description of the update.
* **displayName**: string: Name of the update.
* **installedDate**: string: Date update was installed.
* **kbLink**: string: Link to the KB article about the update.
* **minOemVersionRequired**: string: The minimum OEM version required to install.
* **minVersionRequired**: string: The minimum version required to install.
* **oemVersion**: string: OEM version of the update.
* **packagePath**: string: Path to the update package.
* **packageSizeInMb**: int: Size of update package.
* **packageType**: string: Type of the package.
* **publisher**: string: Publisher of the update.
* **releaseLink**: string: Link to release notes or other details about the update.
* **state**: 'DownloadFailed' | 'Downloading' | 'HasPrerequisite' | 'HealthCheckFailed' | 'HealthChecking' | 'InstallationFailed' | 'Installed' | 'Installing' | 'Invalid' | 'NotApplicableBecauseAnotherUpdateIsInProgress' | 'Obsolete' | 'PreparationFailed' | 'Preparing' | 'Ready' | 'ReadyToInstall' | 'Recalled' | string: Current state of the update.
* **updatePrerequisites**: [UpdatePrerequisite](#updateprerequisite)[]: List of update prerequisites.
* **updateStateProperties**: [UpdateStateProperties](#updatestateproperties): Properties when update is in a specific state.
* **version**: string: Version of the update.

## UpdatePrerequisite
### Properties
* **packageName**: string: Name of prerequisite update.
* **updateType**: string: Update type of prerequisite update.
* **version**: string: Version of prerequisite update.

## UpdateRunModel
### Properties
* **duration**: string: Duration of the update.
* **progress**: [Step](#step): Current progress of the update run.
* **state**: 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string: State of the update run.
* **timeStarted**: string: Update start time.

## UpdateStateProperties
### Properties
* **notifyMessage**: string: Notify message of the update in this state.
* **progressPercentage**: int: Progress percentage of a running operation.

