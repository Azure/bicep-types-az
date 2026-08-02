# Microsoft.DependencyMap @ 2025-07-01-preview

## Resource Microsoft.DependencyMap/maps@2025-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]{2,23}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MapsResourceProperties](#mapsresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DependencyMap/maps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DependencyMap/maps/discoverySources@2025-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]{2,23}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DiscoverySourceResourceProperties](#discoverysourceresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DependencyMap/maps/discoverySources' (ReadOnly, DeployTimeConstant): The resource type

## Function exportDependencies (Microsoft.DependencyMap/maps@2025-07-01-preview)
* **Resource**: Microsoft.DependencyMap/maps
* **ApiVersion**: 2025-07-01-preview
* **Input**: [ExportDependenciesRequest](#exportdependenciesrequest)
* **Output**: [ExportDependenciesOperationResult](#exportdependenciesoperationresult)

## Function getDependencyViewForAllMachines (Microsoft.DependencyMap/maps@2025-07-01-preview)
* **Resource**: Microsoft.DependencyMap/maps
* **ApiVersion**: 2025-07-01-preview
* **Input**: [GetDependencyViewForAllMachinesRequest](#getdependencyviewforallmachinesrequest)
* **Output**: [GetDependencyViewForAllMachinesOperationResult](#getdependencyviewforallmachinesoperationresult)

## DateTimeFilter
### Properties
* **endDateTimeUtc**: string: End date time for dependency map visualization query
* **startDateTimeUtc**: string: Start date time for dependency map visualization query

## DependencyMapVisualizationFilter
### Properties
* **dateTime**: [DateTimeFilter](#datetimefilter): DateTime filter
* **processNameFilter**: [ProcessNameFilter](#processnamefilter): Process name filter

## DependencyProcessFilter
### Properties
* **processNameFilter**: [ProcessNameFilter](#processnamefilter): Process name filter

## DiscoverySourceResourceProperties
* **Discriminator**: sourceType

### Base Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of Discovery Source resource.
* **sourceId**: string (Required): Source ArmId of Discovery Source resource

### OffAzureDiscoverySourceResourceProperties
#### Properties
* **sourceType**: 'OffAzure' (Required): Source type of Discovery Source resource.


## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExportDependenciesAdditionalInfo
### Properties
* **availableDaysCount**: int: Number of days for which data was available in the exported results.

## ExportDependenciesOperationResult
### Properties
* **endTime**: string: The end time of the operation.
* **error**: [ErrorDetail](#errordetail): Contains error details if status is Failed/Canceled.
* **id**: string: The status URL of export dependencies operation.
* **name**: string: The resource name of the operation status. It must match the last segment of 'id' field.
* **properties**: [ExportDependenciesResultProperties](#exportdependenciesresultproperties): Properties for export dependencies. These should only be set if the status is Succeeded.
* **startTime**: string: The start time of the operation.
* **status**: string (Required): The overall arm status of the operation. It has one of the terminal states - Succeeded/Failed/Canceled.

## ExportDependenciesRequest
### Properties
* **applianceNameList**: string[]: List of Appliance Names
* **filters**: [DependencyMapVisualizationFilter](#dependencymapvisualizationfilter): Filters for ExportDependencies
* **focusedMachineId**: string: Machine arm id

## ExportDependenciesResultProperties
### Properties
* **additionalInfo**: [ExportDependenciesAdditionalInfo](#exportdependenciesadditionalinfo): Additional information about the exported data.
* **exportedDataSasUri**: string: The SAS URI of the blob containing the exported dependencies data.
* **statusCode**: 'CompleteMatch' | 'NoMatch' | 'PartialMatch' | string: A status code returned by the service with additional context about the export dependencies operation.

## GetDependencyViewForAllMachinesOperationResult
### Properties
* **endTime**: string: The end time of the operation.
* **error**: [ErrorDetail](#errordetail): Contains error details if status is Failed/Canceled.
* **id**: string: The status URL of the asynchronous operation.
* **name**: string: The resource name of the operation status. It must match the last segment of 'id' field.
* **properties**: [GetDependencyViewForAllMachinesResultProperties](#getdependencyviewforallmachinesresultproperties): Properties for export dependencies. These should only be set if the status is Succeeded.
* **startTime**: string: The start time of the operation.
* **status**: string (Required): The overall arm status of the operation. It has one of the terminal states - Succeeded/Failed/Canceled.

## GetDependencyViewForAllMachinesRequest
### Properties
* **filters**: [DependencyProcessFilter](#dependencyprocessfilter): Filters for GetDependencyViewForAllMachines

## GetDependencyViewForAllMachinesResultProperties
### Properties
* **layoutFileSasUrl**: string (Required): The SAS URI of the blob containing the layout file for the multi-server view.

## MapsResourceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of Maps resource.

## ProcessNameFilter
### Properties
* **operator**: 'contains' | 'notContains' | string (Required): Operator for process name filter
* **processNames**: string[] (Required): List of process names on which the operator should be applied

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

