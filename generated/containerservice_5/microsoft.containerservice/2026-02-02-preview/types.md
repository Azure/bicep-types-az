# Microsoft.ContainerService @ 2026-02-02-preview

## Resource Microsoft.ContainerService/preparedImageSpecifications@2026-02-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PreparedImageSpecificationProperties](#preparedimagespecificationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/preparedImageSpecifications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/preparedImageSpecifications/versions@2026-02-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-02-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 128, pattern: "^(?![.-])[A-Za-z0-9_.-]{1,128}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PreparedImageSpecificationProperties](#preparedimagespecificationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/preparedImageSpecifications/versions' (ReadOnly, DeployTimeConstant): The resource type

## PreparedImageSpecificationManagedIdentityProfile
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the managed identity.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The object ID of the managed identity.
* **resourceId**: string (Required): The resource ID of the user-assigned managed identity.

## PreparedImageSpecificationProperties
### Properties
* **containerImages**: string[]: The list of container images to cache on nodes. See https://kubernetes.io/docs/concepts/containers/images/#image-names
* **customizationScripts**: [PreparedImageSpecificationScript](#preparedimagespecificationscript)[]: The scripts to customize the node before or after image capture.
* **identityProfile**: [PreparedImageSpecificationManagedIdentityProfile](#preparedimagespecificationmanagedidentityprofile): The identity used to execute prepared image specification tasks during image build time and provisioning time. 
If not specified the default agentpool identity will be used.
This does not affect provisioned nodes.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the prepared image specification.
* **version**: string {pattern: "^(?![.-])[A-Za-z0-9_.-]{1,128}$"} (ReadOnly): An auto-generated value that changes when the other fields of the image customization are changed.

## PreparedImageSpecificationScript
### Properties
* **executionPoint**: 'NodeImageBuildTime' | 'NodeProvisionTime' | string (Required): The stage at which the script is executed.
Specifying `NodeImageBuildTime` will ensure changes are persisted into the node image.
* **name**: string {maxLength: 263, pattern: "^[a-z0-9]([a-z0-9\.\-]*[a-z0-9])?$"} (Required): The name for the customization script. 
Must be unique within the prepared image specification resource.
Can only contain lowercase alphanumeric,'-' or '.' characters.
* **postScriptAction**: 'None' | 'RebootAfter' | string: The action to take after successful script execution.
* **script**: string: The script content to be executed in plain text. Do not include secrets.
* **scriptType**: 'Bash' | 'PowerShell' | string (Required): The runtime environment for the script (e.g. Bash).

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

