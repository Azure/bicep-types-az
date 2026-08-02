# Microsoft.IoTFirmwareDefense @ 2025-04-01-preview

## Resource Microsoft.IoTFirmwareDefense/workspaces@2025-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The resource-specific properties for this resource.
* **sku**: [Sku](#sku): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTFirmwareDefense/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTFirmwareDefense/workspaces/firmwares@2025-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FirmwareProperties](#firmwareproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTFirmwareDefense/workspaces/firmwares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTFirmwareDefense/workspaces/firmwares/summaries@2025-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'BinaryHardening' | 'CommonVulnerabilitiesAndExposures' | 'CryptoCertificate' | 'CryptoKey' | 'Firmware' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SummaryResourceProperties](#summaryresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTFirmwareDefense/workspaces/firmwares/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTFirmwareDefense/workspaces/usageMetrics@2025-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [UsageMetricProperties](#usagemetricproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTFirmwareDefense/workspaces/usageMetrics' (ReadOnly, DeployTimeConstant): The resource type

## Function generateUploadUrl (Microsoft.IoTFirmwareDefense/workspaces@2025-04-01-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces
* **ApiVersion**: 2025-04-01-preview
* **Input**: [GenerateUploadUrlRequest](#generateuploadurlrequest)
* **Output**: [UrlToken](#urltoken)

## FirmwareProperties
### Properties
* **description**: string: User-specified description of the firmware.
* **fileName**: string: File name for a firmware that user uploaded.
* **fileSize**: int: File size of the uploaded firmware image.
* **model**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_. ,'\"~=(){}:]*$"}: Firmware model.
* **provisioningState**: 'Analyzing' | 'Canceled' | 'Extracting' | 'Failed' | 'Pending' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **status**: 'Analyzing' | 'Error' | 'Extracting' | 'Pending' | 'Ready' | string: The status of firmware scan.
* **statusMessages**: [StatusMessage](#statusmessage)[]: A list of errors or other messages generated during firmware analysis
* **vendor**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_. ,'\"~=(){}:]*$"}: Firmware vendor.
* **version**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_. ,'\"~=(){}:]*$"}: Firmware version.

## GenerateUploadUrlRequest
### Properties
* **firmwareId**: string: A unique ID for the firmware to be uploaded.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. E.g. P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## StatusMessage
### Properties
* **errorCode**: int: The error code
* **message**: string: The error or status message

## SummaryResourceProperties
* **Discriminator**: summaryType

### Base Properties
* **provisioningState**: 'Analyzing' | 'Canceled' | 'Extracting' | 'Failed' | 'Pending' | 'Succeeded' | string (ReadOnly): The status of the last operation.

### BinaryHardeningSummaryResource
#### Properties
* **notExecutableStackCount**: int: Total number of analyzed files that were found to have a nonexecutable stack
* **positionIndependentExecutableCount**: int: Total number of analyzed files that were compiled to be a position independent executable
* **relocationReadOnlyCount**: int: Total number of analyzed files that have enabled relocation read-only protections
* **stackCanaryCount**: int: Total number of analyzed files that have stack canaries enabled
* **strippedBinaryCount**: int: Total number of analyzed files that have debug symbols stripped
* **summaryType**: 'BinaryHardening' (Required): The type of summary.
* **totalFiles**: int: Total number of binaries that were analyzed

### CveSummary
#### Properties
* **criticalCveCount**: int: The total number of critical severity CVEs detected
* **highCveCount**: int: The total number of high severity CVEs detected
* **lowCveCount**: int: The total number of low severity CVEs detected
* **mediumCveCount**: int: The total number of medium severity CVEs detected
* **summaryType**: 'CommonVulnerabilitiesAndExposures' (Required): The type of summary.
* **unknownCveCount**: int: The total number of unknown severity CVEs detected

### CryptoCertificateSummaryResource
#### Properties
* **expiredCertificateCount**: int: Total number of expired certificates found.
* **expiringSoonCertificateCount**: int: Total number of nearly expired certificates found.
* **pairedKeyCount**: int: Total number of paired private keys found for the certificates.
* **selfSignedCertificateCount**: int: Total number of certificates found that are self-signed.
* **shortKeySizeCount**: int: Total number of certificates found that have an insecure key size for the key algorithm.
* **summaryType**: 'CryptoCertificate' (Required): The type of summary.
* **totalCertificateCount**: int: Total number of certificates found.
* **weakSignatureCount**: int: Total number of certificates found using a weak signature algorithm.

### CryptoKeySummaryResource
#### Properties
* **pairedKeyCount**: int: Total number of keys found that have a matching paired key or certificate.
* **privateKeyCount**: int: Total number of private keys found.
* **publicKeyCount**: int: Total number of (non-certificate) public keys found.
* **shortKeySizeCount**: int: Total number of keys found that have an insecure key size for the algorithm.
* **summaryType**: 'CryptoKey' (Required): The type of summary.
* **totalKeyCount**: int: Total number of cryptographic keys found.

### FirmwareSummary
#### Properties
* **analysisTimeSeconds**: int: Time used for analysis
* **binaryCount**: int: Binary count
* **componentCount**: int: Components count.
* **extractedFileCount**: int: Extracted file count.
* **extractedSize**: int: Total extracted size of the firmware in bytes.
* **fileSize**: int: Firmware file size in bytes.
* **rootFileSystems**: int: The number of root file systems found.
* **summaryType**: 'Firmware' (Required): The type of summary.


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

## UrlToken
### Properties
* **url**: string (ReadOnly): SAS URL for creating or accessing a blob file.

## UsageMetricProperties
### Properties
* **monthlyFirmwareUploadCount**: int (Required, ReadOnly): The number of firmware analysis jobs that have been submitted in the current month.
* **provisioningState**: 'Analyzing' | 'Canceled' | 'Extracting' | 'Failed' | 'Pending' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **totalFirmwareCount**: int (Required, ReadOnly): The total number of firmwares that are in the workspace.

## WorkspaceProperties
### Properties
* **provisioningState**: 'Analyzing' | 'Canceled' | 'Extracting' | 'Failed' | 'Pending' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.

