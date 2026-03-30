# Microsoft.Edge @ 2026-03-15

## Resource Microsoft.Edge/disconnectedOperations@2026-03-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_]{2,22}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DisconnectedOperationProperties](#disconnectedoperationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Edge/disconnectedOperations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/disconnectedOperations/hardwareSettings@2026-03-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HardwareSettingProperties](#hardwaresettingproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/disconnectedOperations/hardwareSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/disconnectedOperations/images@2026-03-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-03-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/disconnectedOperations/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Edge/disconnectedOperations/images/artifacts@2026-03-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-03-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ArtifactProperties](#artifactproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/disconnectedOperations/images/artifacts' (ReadOnly, DeployTimeConstant): The resource type

## Function listDeploymentManifest (Microsoft.Edge/disconnectedOperations@2026-03-15)
* **Resource**: Microsoft.Edge/disconnectedOperations
* **ApiVersion**: 2026-03-15
* **Output**: [DisconnectedOperationDeploymentManifest](#disconnectedoperationdeploymentmanifest)

## Function listDownloadUri (Microsoft.Edge/disconnectedOperations/images@2026-03-15)
* **Resource**: Microsoft.Edge/disconnectedOperations/images
* **ApiVersion**: 2026-03-15
* **Output**: [ImageDownloadResult](#imagedownloadresult)

## Function listDownloadUri (Microsoft.Edge/disconnectedOperations/images/artifacts@2026-03-15)
* **Resource**: Microsoft.Edge/disconnectedOperations/images/artifacts
* **ApiVersion**: 2026-03-15
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

## BenefitPlans
### Properties
* **azureHybridWindowsServerBenefit**: 'Disabled' | 'Enabled' | string: Azure Hybrid Windows Server Benefit plan
* **windowsServerVmCount**: int {minValue: 1}: Number of Windows Server VMs to license under the Azure Hybrid Benefit plan

## BillingConfiguration
### Properties
* **autoRenew**: 'Disabled' | 'Enabled' | string (Required): The auto renew setting
* **billingStatus**: 'Disabled' | 'Enabled' | 'Stopped' | string (Required, ReadOnly): The billing status
* **current**: [BillingPeriod](#billingperiod) (Required): The current billing configuration
* **upcoming**: [BillingPeriod](#billingperiod): The upcoming billing configuration

## BillingPeriod
### Properties
* **cores**: int (Required): The number of cores
* **endDate**: string (ReadOnly): The billing end date
* **pricingModel**: 'Annual' | 'Trial' | string (Required): The pricing model
* **startDate**: string (ReadOnly): The billing start date

## DisconnectedOperationDeploymentManifest
### Properties
* **benefitPlans**: [BenefitPlans](#benefitplans) (ReadOnly): The benefit plans
* **billingConfiguration**: [BillingConfiguration](#billingconfiguration) (ReadOnly): The billing configuration
* **billingModel**: 'Capacity' | string (Required, ReadOnly): The billing model
* **cloud**: string (ReadOnly): The cloud in which the resource is registered
* **connectionIntent**: 'Connected' | 'Disconnected' | string (Required, ReadOnly): The connection intent
* **location**: string (Required, ReadOnly): The resource location
* **resourceId**: string (Required, ReadOnly): The resource identifier of the disconnected operations resource
* **resourceName**: string (Required, ReadOnly): The resource name
* **stampId**: string (Required, ReadOnly): The unique GUID of the stamp

## DisconnectedOperationProperties
### Properties
* **benefitPlans**: [BenefitPlans](#benefitplans): The benefit plans
* **billingConfiguration**: [BillingConfiguration](#billingconfiguration): The billing configuration
* **billingModel**: 'Capacity' | string (Required, ReadOnly): The billing model
* **connectionIntent**: 'Connected' | 'Disconnected' | string (Required): The connection intent
* **connectionStatus**: 'Connected' | 'Disconnected' | string (ReadOnly): The connection status
* **deviceVersion**: string: The device version
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The resource provisioning state
* **registrationStatus**: 'Registered' | 'Unregistered' | string: The registration intent
* **stampId**: string (Required, ReadOnly): The unique GUID of the stamp

## HardwareSettingProperties
### Properties
* **deviceId**: string (Required): The unique Id of the device
* **diskSpaceInGb**: int (Required): The disk space in GB
* **hardwareSku**: string (Required): The hardware SKU
* **memoryInGb**: int (Required): The memory in GB
* **nodes**: int (Required): The number of nodes
* **oem**: string (Required): The OEM
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The resource provisioning state
* **solutionBuilderExtension**: string (Required): The solution builder extension at registration
* **totalCores**: int (Required): The total number of cores
* **versionAtRegistration**: string (Required): The active version at registration

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
* **updateProperties**: [ImageUpdateProperties](#imageupdateproperties) (ReadOnly): Image update properties for update release type image.

## ImageProperties
### Properties
* **compatibleVersions**: string[] (ReadOnly): The versions that are compatible for this update package.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The resource provisioning state
* **releaseDate**: string (Required, ReadOnly): The release date
* **releaseDisplayName**: string (Required, ReadOnly): The release name
* **releaseNotes**: string (Required, ReadOnly): The release notes
* **releaseType**: 'Install' | 'Update' | string (Required, ReadOnly): The release type
* **releaseVersion**: string (Required, ReadOnly): The version of the package in the format 1.1.1
* **updateProperties**: [ImageUpdateProperties](#imageupdateproperties) (ReadOnly): Image update properties for update release type image.

## ImageUpdateProperties
### Properties
* **agentVersion**: string (Required, ReadOnly): The version(s) of the agent software included in this image update.
* **featureUpdates**: string (Required, ReadOnly): Details of feature updates included in this image release.
* **osVersion**: string (Required, ReadOnly): The operating system version provided by this image update.
* **securityUpdates**: string (Required, ReadOnly): Details of security updates included in this image release.
* **systemReboot**: 'NotRequired' | 'Required' | string (Required, ReadOnly): Indicates if a system reboot is required after applying the update.

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

