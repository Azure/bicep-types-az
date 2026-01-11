# Microsoft.Security @ 2025-09-01-preview

## Resource Microsoft.Security/defenderForStorageSettings@2025-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2025-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: [DefenderForStorageSettingProperties](#defenderforstoragesettingproperties): Defender for Storage resource properties.
* **type**: 'Microsoft.Security/defenderForStorageSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/privateLinks@2025-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkProperties](#privatelinkproperties) (Required): Properties specific to the private link resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Security/privateLinks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/privateLinks/privateEndpointConnections@2025-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Security/privateLinks/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/privateLinks/privateLinkResources@2025-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Security/privateLinks/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## DefenderForStorageSettingProperties
### Properties
* **isEnabled**: bool: Indicates whether Defender for Storage is enabled on this storage account.
* **malwareScanning**: [MalwareScanningProperties](#malwarescanningproperties): Properties of Malware Scanning.
* **overrideSubscriptionLevelSettings**: bool: Indicates whether the settings defined for this storage account should override the settings defined for the subscription.
* **sensitiveDataDiscovery**: [SensitiveDataDiscoveryProperties](#sensitivedatadiscoveryproperties): Properties of Sensitive Data Discovery.

## MalwareScanningProperties
### Properties
* **automatedResponse**: 'BlobSoftDelete' | 'None' | string: Optional. Specifies the automated response action to take when malware is detected.
* **blobScanResultsOptions**: 'BlobIndexTags' | 'None' | string: Optional. Write scan result on BlobIndexTags by default.
* **onUpload**: [OnUploadProperties](#onuploadproperties): Properties of On Upload malware scanning.
* **operationStatus**: [OperationStatus](#operationstatus) (ReadOnly): Upon failure or partial success. Additional data describing Malware Scanning enable/disable operation.
* **scanResultsEventGridTopicResourceId**: string: Optional. Resource id of an Event Grid Topic to send scan results to.

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

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections associated with this private link. Each connection represents a private endpoint from a customer's virtual network.
* **privateLinkResources**: [PrivateLinkResourceAutoGenerated](#privatelinkresourceautogenerated)[] (ReadOnly): List of private link resources available for connection. For Defender services, this typically includes the 'containers' group with 'api' and regional data endpoints.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current provisioning state of the private link resource. Indicates whether the resource is being created, updated, deleted, or has completed successfully.

## PrivateLinkResourceAutoGenerated
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## SensitiveDataDiscoveryProperties
### Properties
* **isEnabled**: bool: Indicates whether Sensitive Data Discovery should be enabled.
* **operationStatus**: [OperationStatus](#operationstatus) (ReadOnly): Upon failure or partial success. Additional data describing Sensitive Data Discovery enable/disable operation.

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

