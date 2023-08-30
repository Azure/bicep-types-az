# Microsoft.AzureSphere @ 2022-09-01-preview

## Resource Microsoft.AzureSphere/catalogs@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CatalogProperties](#catalogproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureSphere/catalogs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureSphere/catalogs/certificates@2022-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureSphere/catalogs/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureSphere/catalogs/images@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureSphere/catalogs/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureSphere/catalogs/products@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductProperties](#productproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureSphere/catalogs/products' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureSphere/catalogs/products/deviceGroups@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceGroupProperties](#devicegroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureSphere/catalogs/products/deviceGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureSphere/catalogs/products/deviceGroups/deployments@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentProperties](#deploymentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureSphere/catalogs/products/deviceGroups/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureSphere/catalogs/products/deviceGroups/devices@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceProperties](#deviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AzureSphere/catalogs/products/deviceGroups/devices' (ReadOnly, DeployTimeConstant): The resource type

## Function listDeployments (Microsoft.AzureSphere/catalogs@2022-09-01-preview)
* **Resource**: Microsoft.AzureSphere/catalogs
* **ApiVersion**: 2022-09-01-preview
* **Output**: [DeploymentListResult](#deploymentlistresult)

## Function listDeviceGroups (Microsoft.AzureSphere/catalogs@2022-09-01-preview)
* **Resource**: Microsoft.AzureSphere/catalogs
* **ApiVersion**: 2022-09-01-preview
* **Input**: [ListDeviceGroupsRequest](#listdevicegroupsrequest)
* **Output**: [DeviceGroupListResult](#devicegrouplistresult)

## Function listDeviceInsights (Microsoft.AzureSphere/catalogs@2022-09-01-preview)
* **Resource**: Microsoft.AzureSphere/catalogs
* **ApiVersion**: 2022-09-01-preview
* **Output**: [PagedDeviceInsight](#pageddeviceinsight)

## Function listDevices (Microsoft.AzureSphere/catalogs@2022-09-01-preview)
* **Resource**: Microsoft.AzureSphere/catalogs
* **ApiVersion**: 2022-09-01-preview
* **Output**: [DeviceListResult](#devicelistresult)

## CatalogProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## CertificateProperties
### Properties
* **certificate**: string (ReadOnly): The certificate as a UTF-8 encoded base 64 string.
* **expiryUtc**: string (ReadOnly): The certificate expiry date.
* **notBeforeUtc**: string (ReadOnly): The certificate not before date.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **status**: 'Active' | 'Expired' | 'Inactive' | 'Revoked' | string (ReadOnly): The certificate status.
* **subject**: string (ReadOnly): The certificate subject.
* **thumbprint**: string (ReadOnly): The certificate thumbprint.

## Deployment
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [DeploymentProperties](#deploymentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## DeploymentListResult
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [Deployment](#deployment)[] (Required): The Deployment items on this page

## DeploymentProperties
### Properties
* **deployedImages**: [Image](#image)[]: Images deployed
* **deploymentDateUtc**: string (ReadOnly): Deployment date UTC
* **deploymentId**: string: Deployment ID
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## Device
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [DeviceProperties](#deviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## DeviceGroup
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [DeviceGroupProperties](#devicegroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## DeviceGroupListResult
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [DeviceGroup](#devicegroup)[] (Required): The DeviceGroup items on this page

## DeviceGroupProperties
### Properties
* **allowCrashDumpsCollection**: 'Disabled' | 'Enabled' | string: Flag to define if the user allows for crash dump collection.
* **description**: string: Description of the device group.
* **hasDeployment**: bool (ReadOnly): Deployment status for the device group.
* **osFeedType**: 'Retail' | 'RetailEval' | string: Operating system feed type of the device group.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **regionalDataBoundary**: 'EU' | 'None' | string: Regional data boundary for the device group.
* **updatePolicy**: 'No3rdPartyAppUpdates' | 'UpdateAll' | string: Update policy of the device group.

## DeviceInsight
### Properties
* **description**: string (Required): Event description
* **deviceId**: string (Required): Device ID
* **endTimestampUtc**: string (Required): Event end timestamp
* **eventCategory**: string (Required): Event category
* **eventClass**: string (Required): Event class
* **eventCount**: int (Required): Event count
* **eventType**: string (Required): Event type
* **startTimestampUtc**: string (Required): Event start timestamp

## DeviceListResult
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [Device](#device)[] (Required): The Device items on this page

## DeviceProperties
### Properties
* **chipSku**: string (ReadOnly): SKU of the chip
* **deviceId**: string: Device ID
* **lastAvailableOsVersion**: string (ReadOnly): OS version available for installation when update requested
* **lastInstalledOsVersion**: string (ReadOnly): OS version running on device when update requested
* **lastOsUpdateUtc**: string (ReadOnly): Time when update requested and new OS version available
* **lastUpdateRequestUtc**: string (ReadOnly): Time when update was last requested
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## Image
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ImageProperties](#imageproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ImageProperties
### Properties
* **componentId**: string (ReadOnly): The image component id.
* **description**: string (ReadOnly): The image description.
* **image**: string: Image as a UTF-8 encoded base 64 string on image create. This field contains the image URI on image reads.
* **imageId**: string: Image ID
* **imageName**: string (ReadOnly): Image name
* **imageType**: 'Applications' | 'BaseSystemUpdateManifest' | 'BootManifest' | 'CustomerBoardConfig' | 'CustomerUpdateManifest' | 'FirmwareUpdateManifest' | 'FwConfig' | 'InvalidImageType' | 'ManifestSet' | 'NormalWorldDtb' | 'NormalWorldKernel' | 'NormalWorldLoader' | 'Nwfs' | 'OneBl' | 'Other' | 'PlutonRuntime' | 'Policy' | 'RecoveryManifest' | 'RootFs' | 'SecurityMonitor' | 'Services' | 'TrustedKeystore' | 'UpdateCertStore' | 'WifiFirmware' | string (ReadOnly): The image type.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **regionalDataBoundary**: 'EU' | 'None' | string: Regional data boundary for an image
* **uri**: string (ReadOnly): Location the image

## ListDeviceGroupsRequest
### Properties
* **deviceGroupName**: string: Device Group name.

## PagedDeviceInsight
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [DeviceInsight](#deviceinsight)[] (Required): The DeviceInsight items on this page

## ProductProperties
### Properties
* **description**: string (Required): Description of the product
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

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

