# Microsoft.AnalysisServices @ 2016-05-16

## Resource Microsoft.AnalysisServices/servers@2016-05-16
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-16' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the Analysis Services resource.
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AnalysisServicesServerProperties](#analysisservicesserverproperties): Properties of the provision operation request.
* **sku**: [ResourceSku](#resourcesku) (Required): The SKU of the Analysis Services resource.
* **tags**: [ResourceTags](#resourcetags): Key-value pairs of additional resource provisioning properties.
* **type**: 'Microsoft.AnalysisServices/servers' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.AnalysisServices/locations@2016-05-16)
* **Resource**: Microsoft.AnalysisServices/locations
* **ApiVersion**: 2016-05-16
* **Input**: [CheckServerNameAvailabilityParameters](#checkservernameavailabilityparameters)
* **Output**: [CheckServerNameAvailabilityResult](#checkservernameavailabilityresult)

## Function resume (Microsoft.AnalysisServices/servers@2016-05-16)
* **Resource**: Microsoft.AnalysisServices/servers
* **ApiVersion**: 2016-05-16
* **Output**: any

## Function suspend (Microsoft.AnalysisServices/servers@2016-05-16)
* **Resource**: Microsoft.AnalysisServices/servers
* **ApiVersion**: 2016-05-16
* **Output**: any

## AnalysisServicesServerProperties
### Properties
* **asAdministrators**: [ServerAdministrators](#serveradministrators): A collection of AS server administrators
* **backupBlobContainerUri**: string: The container URI of backup blob.
* **managedMode**: int: The managed mode of the server (0 = not managed, 1 = managed).
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' | string (ReadOnly): The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning.
* **serverFullName**: string (ReadOnly): The full name of the Analysis Services resource.
* **serverMonitorMode**: int: The server monitor mode for AS server
* **state**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' | string (ReadOnly): The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning.

## CheckServerNameAvailabilityParameters
### Properties
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"}: Name for checking availability.
* **type**: string: The resource type of azure analysis services.

## CheckServerNameAvailabilityResult
### Properties
* **message**: string: The detailed message of the request unavailability.
* **nameAvailable**: bool: Indicator of available of the server name.
* **reason**: string: The reason of unavailability.

## ResourceSku
### Properties
* **capacity**: int {minValue: 1, maxValue: 8}: The number of instances in the read only query pool.
* **name**: string (Required): Name of the SKU level.
* **tier**: 'Basic' | 'Development' | 'Standard' | string: The name of the Azure pricing tier to which the SKU applies.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerAdministrators
### Properties
* **members**: string[]: An array of administrator user identities.

