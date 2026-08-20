# Microsoft.IoTFirmwareDefense @ 2024-01-10

## Resource Microsoft.IoTFirmwareDefense/workspaces@2024-01-10
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspace properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTFirmwareDefense/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTFirmwareDefense/workspaces/firmwares@2024-01-10
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirmwareProperties](#firmwareproperties): The properties of a firmware
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTFirmwareDefense/workspaces/firmwares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTFirmwareDefense/workspaces/firmwares/summaries@2024-01-10
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-01-10' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'BinaryHardening' | 'CVE' | 'CryptoCertificate' | 'CryptoKey' | 'Firmware' | string (Required, DeployTimeConstant): The resource name
* **properties**: [SummaryResourceProperties](#summaryresourceproperties) (ReadOnly): Properties of an analysis summary.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTFirmwareDefense/workspaces/firmwares/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Function generateDownloadUrl (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2024-01-10)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2024-01-10
* **Output**: [UrlToken](#urltoken)

## Function generateFilesystemDownloadUrl (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2024-01-10)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2024-01-10
* **Output**: [UrlToken](#urltoken)

## Function generateUploadUrl (Microsoft.IoTFirmwareDefense/workspaces@2024-01-10)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces
* **ApiVersion**: 2024-01-10
* **Input**: [GenerateUploadUrlRequest](#generateuploadurlrequest)
* **Output**: [UrlToken](#urltoken)

## FirmwareProperties
### Properties
* **description**: string: User-specified description of the firmware.
* **fileName**: string: File name for a firmware that user uploaded.
* **fileSize**: int: File size of the uploaded firmware image.
* **model**: string: Firmware model.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **status**: 'Analyzing' | 'Error' | 'Extracting' | 'Pending' | 'Ready' | string: The status of firmware scan.
* **statusMessages**: [StatusMessage](#statusmessage)[]: A list of errors or other messages generated during firmware analysis
* **vendor**: string: Firmware vendor.
* **version**: string: Firmware version.

## GenerateUploadUrlRequest
### Properties
* **firmwareId**: string: A unique ID for the firmware to be uploaded.

## StatusMessage
### Properties
* **errorCode**: int: The error code
* **message**: string: The error or status message

## SummaryResourceProperties
* **Discriminator**: summaryType

### Base Properties

### BinaryHardeningSummaryResource
#### Properties
* **canary**: int: Canary summary percentage
* **nx**: int: NX summary percentage
* **pie**: int: PIE summary percentage
* **relro**: int: RELRO summary percentage
* **stripped**: int: Stripped summary percentage
* **summaryType**: 'BinaryHardening' (Required): Describes the type of summary.
* **totalFiles**: int: Total number of binaries that were analyzed

### CryptoCertificateSummaryResource
#### Properties
* **expired**: int: Total number of expired certificates found.
* **expiringSoon**: int: Total number of nearly expired certificates found.
* **pairedKeys**: int: Total number of paired private keys found for the certificates.
* **selfSigned**: int: Total number of certificates found that are self-signed.
* **shortKeySize**: int: Total number of certificates found that have an insecure key size for the key algorithm.
* **summaryType**: 'CryptoCertificate' (Required): Describes the type of summary.
* **totalCertificates**: int: Total number of certificates found.
* **weakSignature**: int: Total number of certificates found using a weak signature algorithm.

### CryptoKeySummaryResource
#### Properties
* **pairedKeys**: int: Total number of keys found that have a matching paired key or certificate.
* **privateKeys**: int: Total number of private keys found.
* **publicKeys**: int: Total number of (non-certificate) public keys found.
* **shortKeySize**: int: Total number of keys found that have an insecure key size for the algorithm.
* **summaryType**: 'CryptoKey' (Required): Describes the type of summary.
* **totalKeys**: int: Total number of cryptographic keys found.

### CveSummary
#### Properties
* **critical**: int: The total number of critical severity CVEs detected
* **high**: int: The total number of high severity CVEs detected
* **low**: int: The total number of low severity CVEs detected
* **medium**: int: The total number of medium severity CVEs detected
* **summaryType**: 'CVE' (Required): Describes the type of summary.
* **unknown**: int: The total number of unknown severity CVEs detected

### FirmwareSummary
#### Properties
* **analysisTimeSeconds**: int: Time used for analysis
* **binaryCount**: int: Binary count
* **componentCount**: int: Components count.
* **extractedFileCount**: int: Extracted file count.
* **extractedSize**: int: Total extracted size of the firmware in bytes.
* **fileSize**: int: Firmware file size in bytes.
* **rootFileSystems**: int: The number of root file systems found.
* **summaryType**: 'Firmware' (Required): Describes the type of summary.


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

## WorkspaceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.

