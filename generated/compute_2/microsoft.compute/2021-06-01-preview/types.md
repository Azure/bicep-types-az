# Microsoft.Compute @ 2021-06-01-preview

## Function registerStorageConfiguration (Microsoft.Compute/locations/diagnostics@2021-06-01-preview)
* **Resource**: Microsoft.Compute/locations/diagnostics
* **ApiVersion**: 2021-06-01-preview
* **Input**: [StorageConfigurationInput](#storageconfigurationinput)
* **Output**: any

## Function run (Microsoft.Compute/locations/diagnostics@2021-06-01-preview)
* **Resource**: Microsoft.Compute/locations/diagnostics
* **ApiVersion**: 2021-06-01-preview
* **Input**: [RunDiskInspectionInput](#rundiskinspectioninput)
* **Output**: string

## Function validateStorageConfiguration (Microsoft.Compute/locations/diagnostics@2021-06-01-preview)
* **Resource**: Microsoft.Compute/locations/diagnostics
* **ApiVersion**: 2021-06-01-preview
* **Output**: [StorageConfigurationResponse](#storageconfigurationresponse)

## RunDiskInspectionInput
### Properties
* **manifest**: string (Required): Name of manifest in order to trigger Disk Inspection.
* **resourceId**: string (Required): Qualified name of the resource.
* **uploadSasUri**: string {sensitive} (Required): SAS uri to the blob where results will be uploaded.

## StorageConfigurationInput
### Properties
* **storageAccountId**: string (Required): Qualified name of the storage account

## StorageConfigurationResponse
### Properties
* **storageAccountId**: string

