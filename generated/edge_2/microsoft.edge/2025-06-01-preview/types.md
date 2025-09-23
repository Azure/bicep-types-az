# Microsoft.Edge @ 2025-06-01-preview

## Resource Microsoft.Edge/disconnectedOperations@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_]{2,22}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DisconnectedOperationProperties](#disconnectedoperationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Edge/disconnectedOperations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/disconnectedOperations/images@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/disconnectedOperations/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/disconnectedOperations/images/artifacts@2025-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ArtifactProperties](#artifactproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/disconnectedOperations/images/artifacts' (ReadOnly, DeployTimeConstant): The resource type

## Function listDeploymentManifest (Microsoft.Edge/disconnectedOperations@2025-06-01-preview)
* **Resource**: Microsoft.Edge/disconnectedOperations
* **ApiVersion**: 2025-06-01-preview
* **Output**: [DisconnectedOperationDeploymentManifest](#disconnectedoperationdeploymentmanifest)

## Function listDownloadUri (Microsoft.Edge/disconnectedOperations/images@2025-06-01-preview)
* **Resource**: Microsoft.Edge/disconnectedOperations/images
* **ApiVersion**: 2025-06-01-preview
* **Output**: [ImageDownloadResult](#imagedownloadresult)

## Function listDownloadUri (Microsoft.Edge/disconnectedOperations/images/artifacts@2025-06-01-preview)
* **Resource**: Microsoft.Edge/disconnectedOperations/images/artifacts
* **ApiVersion**: 2025-06-01-preview
* **Output**: [ArtifactDownloadResult](#artifactdownloadresult)

## ArtifactDownloadResult
### Properties
* **artifactOrder**: int (Required, ReadOnly): The artifact display order
* **description**: string (Required, ReadOnly): The artifact description
* **downloadLink**: string (Required, ReadOnly): The download URI
* **linkExpiry**: string (Required, ReadOnly): The download link expiry time
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The resource provisioning state
* **size**: int (ReadOnly): The artifact size in MB
* **title**: string (Required, ReadOnly): The artifact title

## ArtifactProperties
### Properties
* **artifactOrder**: int (Required, ReadOnly): The artifact display order
* **description**: string (Required, ReadOnly): The artifact description
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The resource provisioning state
* **size**: int (ReadOnly): The artifact size in MB
* **title**: string (Required, ReadOnly): The artifact title

## DisconnectedOperationDeploymentManifest
### Properties
* **billingModel**: 'Capacity' | string (Required, ReadOnly): The billing model
* **cloud**: string (ReadOnly): The cloud in which the resource is registered
* **connectionIntent**: 'Connected' | 'Disconnected' | string (Required, ReadOnly): The connection intent
* **location**: string (Required, ReadOnly): The resource location
* **resourceId**: string (Required, ReadOnly): The resource identifier of the disconnected operations resource
* **resourceName**: string (Required, ReadOnly): The resource name
* **stampId**: string (Required, ReadOnly): The unique GUID of the stamp

## DisconnectedOperationProperties
### Properties
* **billingModel**: 'Capacity' | string (Required, ReadOnly): The billing model
* **connectionIntent**: 'Connected' | 'Disconnected' | string (Required): The connection intent
* **connectionStatus**: 'Connected' | 'Disconnected' | string (ReadOnly): The connection status
* **deviceVersion**: string: The device version
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The resource provisioning state
* **registrationStatus**: 'Registered' | 'Unregistered' | string: The registration intent
* **stampId**: string (Required, ReadOnly): The unique GUID of the stamp

## ImageDownloadResult
### Properties
* **compatibleVersions**: string[] (ReadOnly): The versions that are compatible for this update package.
* **downloadLink**: string (Required, ReadOnly): The download URI
* **linkExpiry**: string (Required, ReadOnly): The download link expiry time
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The resource provisioning state
* **releaseDate**: string (Required, ReadOnly): The release date
* **releaseDisplayName**: string (Required, ReadOnly): The release name
* **releaseNotes**: string (Required, ReadOnly): The release notes
* **releaseType**: 'Install' | 'Update' | string (Required, ReadOnly): The release type
* **releaseVersion**: string (Required, ReadOnly): The version of the package in the format 1.1.1
* **transactionId**: string (Required, ReadOnly): The unique identifier of the download

## ImageProperties
### Properties
* **compatibleVersions**: string[] (ReadOnly): The versions that are compatible for this update package.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The resource provisioning state
* **releaseDate**: string (Required, ReadOnly): The release date
* **releaseDisplayName**: string (Required, ReadOnly): The release name
* **releaseNotes**: string (Required, ReadOnly): The release notes
* **releaseType**: 'Install' | 'Update' | string (Required, ReadOnly): The release type
* **releaseVersion**: string (Required, ReadOnly): The version of the package in the format 1.1.1

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

