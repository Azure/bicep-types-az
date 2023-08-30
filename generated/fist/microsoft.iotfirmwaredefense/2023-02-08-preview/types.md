# Microsoft.IoTFirmwareDefense @ 2023-02-08-preview

## Resource Microsoft.IoTFirmwareDefense/workspaces@2023-02-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-02-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspace properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTFirmwareDefense/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-02-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirmwareProperties](#firmwareproperties): The properties of a firmware
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTFirmwareDefense/workspaces/firmwares' (ReadOnly, DeployTimeConstant): The resource type

## FirmwareProperties
### Properties
* **description**: string: User-specified description of the firmware.
* **fileName**: string: File name for a firmware that user uploaded.
* **fileSize**: int: File size of the uploaded firmware image.
* **model**: string: Firmware model.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **status**: 'Analyzing' | 'Error' | 'Extracting' | 'Pending' | 'Ready' | string: The status of firmware scan.
* **statusMessages**: any[]: A list of errors or other messages generated during firmware analysis
* **vendor**: string: Firmware vendor.
* **version**: string: Firmware version.

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

## WorkspaceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.

