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
* **definition**: [ExportDefinition](#exportdefinition) (Required): The definition of an export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): The delivery information associated with a export.
* **format**: 'Csv' | string: The format of the export being delivered. Currently only 'Csv' is supported.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next execution time.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): Result of listing the execution history of an export.

## ErrorDetails
### Properties
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error message indicating why the operation failed.

## ExportDataset
### Properties
* **configuration**: [ExportDatasetConfiguration](#exportdatasetconfiguration): The export dataset configuration. Allows columns to be selected for the export. If not provided then the export will include all available columns.
* **granularity**: 'Daily' | string: The granularity of rows in the export. Currently only 'Daily' is supported.

## ExportDatasetConfiguration
### Properties
* **columns**: string[]: Array of column names to be included in the export. If not provided then the export will include all available columns. The available columns can vary by customer channel (see examples).

## ExportDefinition
### Properties
* **dataSet**: [ExportDataset](#exportdataset): The definition for data in the export.
* **timeframe**: 'BillingMonthToDate' | 'Custom' | 'MonthToDate' | 'TheLastBillingMonth' | 'TheLastMonth' | 'WeekToDate' | string (Required): The time frame for pulling data for the export. If custom, then a specific time period must be provided.
* **timePeriod**: [ExportTimePeriod](#exporttimeperiod): The date range for data in the export. This should only be specified with timeFrame set to 'Custom'. The maximum date range is 3 months.
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
* **destination**: [ExportDeliveryDestination](#exportdeliverydestination) (Required): This represents the blob storage account location where exports of costs will be delivered. There are two ways to configure the destination. The approach recommended for most customers is to specify the resourceId of the storage account. This requires a one-time registration of the account's subscription with the Microsoft.CostManagementExports resource provider in order to give Azure Cost Management services access to the storage. When creating an export in the Azure portal this registration is performed automatically but API users may need to register the subscription explicitly (for more information see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-supported-services ). Another way to configure the destination is available ONLY to Partners with a Microsoft Partner Agreement plan who are global admins of their billing account. These Partners, instead of specifying the resourceId of a storage account, can specify the storage account name along with a SAS token for the account. This allows exports of costs to a storage account in any tenant. The SAS token should be created for the blob service with Service/Container/Object resource types and with Read/Write/Delete/List/Add/Create permissions (for more information see https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/export-cost-data-storage-account-sas-key ).

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
* **error**: [ErrorDetails](#errordetails): The details of the error.
* **executionType**: 'OnDemand' | 'Scheduled' | string: The type of the export execution.
* **fileName**: string: The name of the exported file.
* **processingEndTime**: string: The time when the export execution finished.
* **processingStartTime**: string: The time when export was picked up to be executed.
* **runSettings**: [CommonExportProperties](#commonexportproperties): The common properties of the export.
* **status**: 'Completed' | 'DataNotAvailable' | 'Failed' | 'InProgress' | 'NewDataNotAvailable' | 'Queued' | 'Timeout' | string: The last known status of the export execution.
* **submittedBy**: string: The identifier for the entity that executed the export. For OnDemand executions it is the user email. For scheduled executions it is 'System'.
* **submittedTime**: string: The time when export was queued to be executed.

## ExportProperties
### Properties
* **definition**: [ExportDefinition](#exportdefinition) (Required): The definition of an export.
* **deliveryInfo**: [ExportDeliveryInfo](#exportdeliveryinfo) (Required): The delivery information associated with a export.
* **format**: 'Csv' | string: The format of the export being delivered. Currently only 'Csv' is supported.
* **nextRunTimeEstimate**: string (ReadOnly): If the export has an active schedule, provides an estimate of the next execution time.
* **runHistory**: [ExportExecutionListResult](#exportexecutionlistresult): Result of listing the execution history of an export.
* **schedule**: [ExportSchedule](#exportschedule): The schedule associated with the export.

## ExportRecurrencePeriod
### Properties
* **from**: string (Required): The start date of recurrence.
* **to**: string: The end date of recurrence.

## ExportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' | string: The schedule recurrence.
* **recurrencePeriod**: [ExportRecurrencePeriod](#exportrecurrenceperiod): The start and end date for recurrence schedule.
* **status**: 'Active' | 'Inactive' | string: The status of the export's schedule. If 'Inactive', the export's schedule is paused.

## ExportTimePeriod
### Properties
* **from**: string (Required): The start date for export data.
* **to**: string (Required): The end date for export data.

