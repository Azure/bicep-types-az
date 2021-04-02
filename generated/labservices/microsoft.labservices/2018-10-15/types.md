# Microsoft.LabServices @ 2018-10-15

## Resource Microsoft.LabServices/labaccounts@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabAccountProperties](#labaccountproperties): Properties of a Lab Account.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labaccounts/galleryimages@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageProperties](#galleryimageproperties): The gallery image properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts/galleryimages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labaccounts/labs@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabProperties](#labproperties): Properties of a Lab.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts/labs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentSettingProperties](#environmentsettingproperties): Properties of an environment setting
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts/labs/environmentsettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentProperties](#environmentproperties): Properties of an environment
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts/labs/environmentsettings/environments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labaccounts/labs/users@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties): Lab User properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts/labs/users' (ReadOnly, DeployTimeConstant): The resource type

## LabAccountProperties
### Properties
* **enabledRegionSelection**: bool: Represents if region selection is enabled
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): Details of the status of an operation.
* **provisioningState**: string: The provisioning status of the resource.
* **sizeConfiguration**: [SizeConfigurationProperties](#sizeconfigurationproperties) (ReadOnly): Represents the size configuration under the lab account
* **uniqueIdentifier**: string: The unique immutable identifier of a resource (Guid).

## LatestOperationResult
### Properties
* **errorCode**: string (ReadOnly): Error code on failure.
* **errorMessage**: string (ReadOnly): The error message.
* **httpMethod**: string (ReadOnly): The HttpMethod - PUT/POST/DELETE for the operation.
* **operationUrl**: string (ReadOnly): The URL to use to check long-running operation status
* **requestUri**: string (ReadOnly): Request URI of the operation.
* **status**: string (ReadOnly): The current status of the operation.

## SizeConfigurationProperties
### Properties
* **environmentSizes**: [EnvironmentSize](#environmentsize)[]: Represents a list of size categories supported by this Lab Account (Small, Medium, Large)

## EnvironmentSize
### Properties
* **maxPrice**: int (ReadOnly): The pay-as-you-go dollar price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost. This is the maximum price of all prices within this tier.
* **minMemory**: int (ReadOnly): The amount of memory available (in GB). This is the minimum amount of memory within this tier.
* **minNumberOfCores**: int (ReadOnly): The number of cores a VM of this size has. This is the minimum number of cores within this tier.
* **name**: 'Basic' | 'Performance' | 'Standard': The size category.
* **vmSizes**: [SizeInfo](#sizeinfo)[]: Represents a set of compute sizes that can serve this given size type

## SizeInfo
### Properties
* **computeSize**: string: Represents the actual compute size, e.g. Standard_A2_v2.
* **memory**: int: The amount of memory available (in GB).
* **numberOfCores**: int: The number of cores a VM of this size has.
* **price**: int: The pay-as-you-go price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryImageProperties
### Properties
* **author**: string (ReadOnly): The author of the gallery image.
* **createdDate**: string (ReadOnly): The creation date of the gallery image.
* **description**: string (ReadOnly): The description of the gallery image.
* **icon**: string (ReadOnly): The icon of the gallery image.
* **imageReference**: [GalleryImageReference](#galleryimagereference) (ReadOnly): The reference information for an Azure Marketplace image.
* **isEnabled**: bool: Indicates whether this gallery image is enabled.
* **isOverride**: bool: Indicates whether this gallery has been overridden for this lab account
* **isPlanAuthorized**: bool: Indicates if the plan has been authorized for programmatic deployment.
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): Details of the status of an operation.
* **planId**: string (ReadOnly): The third party plan that applies to this image
* **provisioningState**: string: The provisioning status of the resource.
* **uniqueIdentifier**: string: The unique immutable identifier of a resource (Guid).

## GalleryImageReference
### Properties
* **offer**: string: The offer of the gallery image.
* **osType**: string: The OS type of the gallery image.
* **publisher**: string: The publisher of the gallery image.
* **sku**: string: The SKU of the gallery image.
* **version**: string: The version of the gallery image.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LabProperties
### Properties
* **createdByObjectId**: string (ReadOnly): Object id of the user that created the lab.
* **createdByUserPrincipalName**: string (ReadOnly): Lab creator name
* **createdDate**: string (ReadOnly): Creation date for the lab
* **invitationCode**: string (ReadOnly): Invitation code that users can use to join a lab.
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): Details of the status of an operation.
* **maxUsersInLab**: int: Maximum number of users allowed in the lab.
* **provisioningState**: string: The provisioning status of the resource.
* **uniqueIdentifier**: string: The unique immutable identifier of a resource (Guid).
* **usageQuota**: string: Maximum duration a user can use an environment for in the lab.
* **userAccessMode**: 'Open' | 'Restricted': Lab user access mode (open to all vs. restricted to those listed on the lab).
* **userQuota**: int (ReadOnly): Maximum value MaxUsersInLab can be set to, as specified by the service

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentSettingProperties
### Properties
* **configurationState**: 'Completed' | 'NotApplicable': Describes the user's progress in configuring their environment setting.
* **description**: string: Describes the environment and its resource settings
* **lastChanged**: string (ReadOnly): Time when the template VM was last changed.
* **lastPublished**: string (ReadOnly): Time when the template VM was last sent for publishing.
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): Details of the status of an operation.
* **provisioningState**: string: The provisioning status of the resource.
* **publishingState**: 'Draft' | 'Published' | 'PublishFailed' | 'Publishing' | 'Scaling' (ReadOnly): Describes the readiness of this environment setting.
* **resourceSettings**: [ResourceSettings](#resourcesettings) (Required): Represents resource specific settings
* **title**: string: Brief title describing the environment and its resource settings
* **uniqueIdentifier**: string: The unique immutable identifier of a resource (Guid).

## ResourceSettings
### Properties
* **cores**: int (ReadOnly): The translated compute cores of the virtual machine
* **galleryImageResourceId**: string: The resource id of the gallery image used for creating the virtual machine
* **id**: string (ReadOnly): The unique id of the resource setting
* **imageName**: string (ReadOnly): The name of the image used to created the environment setting
* **referenceVm**: [ReferenceVm](#referencevm) (Required): Details of a Reference Vm
* **size**: 'Basic' | 'Performance' | 'Standard': The size of the virtual machine.

## ReferenceVm
### Properties
* **password**: string: The password of the virtual machine. This will be set to null in GET resource API
* **userName**: string (Required): The username of the virtual machine
* **vmResourceId**: string (ReadOnly): VM resource Id for the environment
* **vmStateDetails**: [VmStateDetails](#vmstatedetails) (ReadOnly): Details about the state of the reference virtual machine.

## VmStateDetails
### Properties
* **lastKnownPowerState**: string (ReadOnly): Last known compute power state captured in DTL
* **powerState**: string (ReadOnly): The power state of the reference virtual machine.
* **rdpAuthority**: string (ReadOnly): The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol).
* **sshAuthority**: string (ReadOnly): The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentProperties
### Properties
* **claimedByUserName**: string (ReadOnly): The name or email address of the user who has claimed the environment
* **claimedByUserObjectId**: string (ReadOnly): The AAD object Id of the user who has claimed the environment
* **claimedByUserPrincipalId**: string (ReadOnly): The user principal Id of the user who has claimed the environment
* **isClaimed**: bool (ReadOnly): Is the environment claimed or not
* **lastKnownPowerState**: string (ReadOnly): Last known power state of the environment
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): Details of the status of an operation.
* **networkInterface**: [NetworkInterface](#networkinterface) (ReadOnly): Network details of the environment
* **passwordLastReset**: string (ReadOnly): When the password was last reset on the environment.
* **provisioningState**: string: The provisioning status of the resource.
* **resourceSets**: [ResourceSet](#resourceset): Represents a VM and the setting Id it was created for.
* **totalUsage**: string (ReadOnly): How long the environment has been used by a lab user
* **uniqueIdentifier**: string: The unique immutable identifier of a resource (Guid).

## NetworkInterface
### Properties
* **privateIpAddress**: string (ReadOnly): PrivateIp address of the Compute VM
* **rdpAuthority**: string (ReadOnly): Connection information for Windows
* **sshAuthority**: string (ReadOnly): Connection information for Linux
* **username**: string (ReadOnly): Username of the VM

## ResourceSet
### Properties
* **resourceSettingId**: string: resourceSettingId for the environment
* **vmResourceId**: string: VM resource Id for the environment

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserProperties
### Properties
* **email**: string (ReadOnly): The user email address, as it was specified during registration.
* **familyName**: string (ReadOnly): The user family name, as it was specified during registration.
* **givenName**: string (ReadOnly): The user given name, as it was specified during registration.
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): Details of the status of an operation.
* **provisioningState**: string: The provisioning status of the resource.
* **tenantId**: string (ReadOnly): The user tenant ID, as it was specified during registration.
* **totalUsage**: string (ReadOnly): How long the user has used his VMs in this lab
* **uniqueIdentifier**: string: The unique immutable identifier of a resource (Guid).

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

