# Microsoft.Security @ 2025-02-01-preview

## Resource Microsoft.Security/defenderForStorageSettings@2025-02-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DefenderForStorageSettingProperties](#defenderforstoragesettingproperties): Defender for Storage resource properties.
* **type**: 'Microsoft.Security/defenderForStorageSettings' (ReadOnly, DeployTimeConstant): The resource type

## Function cancelMalwareScan (Microsoft.Security/defenderForStorageSettings/malwareScans@2025-02-01-preview)
* **Resource**: Microsoft.Security/defenderForStorageSettings/malwareScans
* **ApiVersion**: 2025-02-01-preview
* **Output**: [MalwareScan](#malwarescan)

## Function startMalwareScan (Microsoft.Security/defenderForStorageSettings@2025-02-01-preview)
* **Resource**: Microsoft.Security/defenderForStorageSettings
* **ApiVersion**: 2025-02-01-preview
* **Output**: [MalwareScan](#malwarescan)

## BlobsScanSummary
### Properties
* **failedBlobsCount**: int: The number of failed blob scans.
* **maliciousBlobsCount**: int: The number of malicious blobs that were detected during the scan.
* **scannedBlobsInGB**: int: The number of gigabytes of data that were scanned.
* **skippedBlobsCount**: int: The number of blobs that were skipped.
* **totalBlobsScanned**: int: The total number of blobs that were scanned.

## DefenderForStorageSettingProperties
### Properties
* **isEnabled**: bool: Indicates whether Defender for Storage is enabled on this storage account.
* **malwareScanning**: [MalwareScanningProperties](#malwarescanningproperties): Properties of Malware Scanning.
* **overrideSubscriptionLevelSettings**: bool: Indicates whether the settings defined for this storage account should override the settings defined for the subscription.
* **sensitiveDataDiscovery**: [SensitiveDataDiscoveryProperties](#sensitivedatadiscoveryproperties): Properties of Sensitive Data Discovery.

## MalwareScan
### Properties
* **properties**: [MalwareScanProperties](#malwarescanproperties)

## MalwareScanningProperties
### Properties
* **blobScanResultsOptions**: 'None' | 'blobIndexTags' | string: Optional. Write scan result on blobIndexTags by default.
* **onUpload**: [OnUploadProperties](#onuploadproperties): Properties of On Upload malware scanning.
* **operationStatus**: [OperationStatus](#operationstatus) (ReadOnly): Upon failure or partial success. Additional data describing Malware Scanning enable/disable operation.
* **scanResultsEventGridTopicResourceId**: string: Optional. Resource id of an Event Grid Topic to send scan results to.

## MalwareScanProperties
### Properties
* **scanEndTime**: string: The time at which the scan has ended. Only available for a scan which has terminated.
* **scanId**: string: The identifier of the scan.
* **scanStartTime**: string: The time at which the scan had been initiated.
* **scanStatus**: string: A status code of the scan operation.
* **scanStatusMessage**: string: A description of the status of the scan.
* **scanSummary**: [ScanSummary](#scansummary): A summary of the scan results.

## OnUploadFilters
### Properties
* **excludeBlobsLargerThan**: any: Optional. Specifies the maximum size in bytes for blobs to be scanned. This parameter accepts a single positive integer value. Blobs larger than this value will be excluded from scanning.
* **excludeBlobsWithPrefix**: string[]: Optional. A list of prefixes to exclude from on-upload malware scanning.
Format: `container-name/blob-name` (start with the container name; do not include the storage account name).
Exclude entire containers: Use prefix of container names you want to exclude without a trailing `/`.
Exclude a single container: Add a trailing slash `/` after the container name to avoid excluding other containers with similar prefixes.
* **excludeBlobsWithSuffix**: string[]: Optional. A list of suffixes to exclude from on-upload malware scanning. Suffixes match only the end of blob names, and should be used for file extensions or blob name endings only.

## OnUploadProperties
### Properties
* **capGBPerMonth**: int: Defines the max GB to be scanned per Month. Set to -1 if no capping is needed. If not specified, the default value is -1.
* **filters**: [OnUploadFilters](#onuploadfilters): Optional. Determine which blobs get scanned by On Upload malware scanning. An Or operation is performed between each filter type.
* **isEnabled**: bool: Indicates whether On Upload malware scanning should be enabled.

## OperationStatus
### Properties
* **code**: string: The operation status code.
* **message**: string: Additional information regarding the success/failure of the operation.

## ScanSummary
### Properties
* **blobs**: [BlobsScanSummary](#blobsscansummary): A summary of the scan results of the blobs that were scanned.
* **estimatedScanCostUSD**: int: The estimated cost of the scan. Only available for a scan which has terminated.

## SensitiveDataDiscoveryProperties
### Properties
* **isEnabled**: bool: Indicates whether Sensitive Data Discovery should be enabled.
* **operationStatus**: [OperationStatus](#operationstatus) (ReadOnly): Upon failure or partial success. Additional data describing Sensitive Data Discovery enable/disable operation.

