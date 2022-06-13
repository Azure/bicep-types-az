# Microsoft.CostManagement @ 2020-12-01-preview

## Resource Microsoft.CostManagement/exports@2020-12-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExportProperties](#exportproperties): The properties of the export.
* **type**: 'Microsoft.CostManagement/exports' (ReadOnly, DeployTimeConstant): The resource type

## CommonExportProperties
### Properties
* **definition**: [ExportDefinition](#exportdefinition) (Required): Has the definition for the export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): Has delivery information for the export.
* **format**: 'Csv' | string: The format of the export being delivered. Currently only 'Csv' is supported.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next execution time.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): If requested, has the most recent execution history for the export.

## ErrorDetails
### Properties
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error message indicating why the operation failed.

## ExportDataset
### Properties
* **configuration**: [ExportDatasetConfiguration](#exportdatasetconfiguration): The export dataset configuration.
* **granularity**: 'Daily' | string: The granularity of rows in the export. Currently only 'Daily' is supported.

## ExportDatasetConfiguration
### Properties
* **columns**: string[]: Array of column names to be included in the export. If not provided then the export will include all available columns. The available columns can vary by customer channel (see examples).

## ExportDefinition
### Properties
* **dataSet**: [ExportDataset](#exportdataset): The definition for data in the export.
* **timeframe**: 'BillingMonthToDate' | 'Custom' | 'MonthToDate' | 'TheLastBillingMonth' | 'TheLastMonth' | 'WeekToDate' | string (Required): The time frame for pulling data for the export. If custom, then a specific time period must be provided.
* **timePeriod**: [ExportTimePeriod](#exporttimeperiod): Has time period for pulling data for the export.
* **type**: 'ActualCost' | 'AmortizedCost' | 'Usage' | string (Required): The type of the export. Note that 'Usage' is equivalent to 'ActualCost' and is applicable to exports that do not yet provide data for charges or amortization for service reservations.

## ExportDeliveryDestination
### Properties
* **container**: string (Required): The name of the container where exports will be uploaded. If the container does not exist it will be created.
* **resourceId**: string: The resource id of the storage account where exports will be delivered. This is not required if a sasToken and storageAccount are specified.
* **rootFolderPath**: string: The name of the directory where exports will be uploaded.
* **sasToken**: string (WriteOnly): A SAS token for the storage account. For a restricted set of Azure customers this together with storageAccount can be specified instead of resourceId. Note: the value returned by the API for this property will always be obfuscated. Returning this same obfuscated value will not result in the SAS token being updated. To update this value a new SAS token must be specified.
* **storageAccount**: string: The storage account where exports will be uploaded. For a restricted set of Azure customers this together with sasToken can be specified instead of resourceId.

## ExportDeliveryInfo
### Properties
* **destination**: [ExportDeliveryDestination](#exportdeliverydestination) (Required): Has destination for the export being delivered.

## ExportExecution
### Properties
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [ExportExecutionProperties](#exportexecutionproperties): The properties of the export execution.
* **type**: string (ReadOnly): Resource type.

## ExportExecutionListResult
### Properties
* **value**: [ExportExecution](#exportexecution)[] (ReadOnly): A list of export executions.

## ExportExecutionProperties
### Properties
* **error**: [ErrorDetails](#errordetails): The details of any error.
* **executionType**: 'OnDemand' | 'Scheduled' | string: The type of the export execution.
* **fileName**: string: The name of the exported file.
* **processingEndTime**: string: The time when the export execution finished.
* **processingStartTime**: string: The time when export was picked up to be executed.
* **runSettings**: [CommonExportProperties](#commonexportproperties): The export settings that were in effect for this execution.
* **status**: 'Completed' | 'DataNotAvailable' | 'Failed' | 'InProgress' | 'NewDataNotAvailable' | 'Queued' | 'Timeout' | string: The last known status of the export execution.
* **submittedBy**: string: The identifier for the entity that executed the export. For OnDemand executions it is the user email. For scheduled executions it is 'System'.
* **submittedTime**: string: The time when export was queued to be executed.

## ExportProperties
### Properties
* **definition**: [ExportDefinition](#exportdefinition) (Required): Has the definition for the export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): Has delivery information for the export.
* **format**: 'Csv' | string: The format of the export being delivered. Currently only 'Csv' is supported.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next execution time.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): If requested, has the most recent execution history for the export.
* **schedule**: [ExportSchedule](#exportschedule): Has schedule information for the export.

## ExportRecurrencePeriod
### Properties
* **from**: string (Required): The start date of recurrence.
* **to**: string: The end date of recurrence.

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' | string: The schedule recurrence.
* **recurrencePeriod**: [ExportRecurrencePeriod](#exportrecurrenceperiod): Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
* **status**: 'Active' | 'Inactive' | string: The status of the export's schedule. If 'Inactive', the export's schedule is paused.

## ExportTimePeriod
### Properties
* **from**: string (Required): The start date for export data.
* **to**: string (Required): The end date for export data.

