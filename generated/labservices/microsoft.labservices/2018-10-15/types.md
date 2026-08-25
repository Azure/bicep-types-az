# Microsoft.LabServices @ 2018-10-15

## Resource Microsoft.LabServices/labaccounts@2018-10-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabAccountProperties](#labaccountproperties): The properties of the resource.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labaccounts/galleryimages@2018-10-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageProperties](#galleryimageproperties): The gallery image properties
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts/galleryimages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labaccounts/labs@2018-10-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabProperties](#labproperties): The properties of the resource.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts/labs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentSettingProperties](#environmentsettingproperties): The properties of the Environment Setting resource
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts/labs/environmentsettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentProperties](#environmentproperties): The properties of the Environment resource
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts/labs/environmentsettings/environments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labaccounts/labs/users@2018-10-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties): These are the properties for the user registered under a lab.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.LabServices/labaccounts/labs/users' (ReadOnly, DeployTimeConstant): The resource type

## Function addUsers (Microsoft.LabServices/labaccounts/labs@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts/labs
* **ApiVersion**: 2018-10-15
* **Input**: [AddUsersPayload](#adduserspayload)
* **Output**: any

## Function claim (Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts/labs/environmentsettings/environments
* **ApiVersion**: 2018-10-15
* **Output**: any

## Function claimAny (Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts/labs/environmentsettings
* **ApiVersion**: 2018-10-15
* **Output**: any

## Function createLab (Microsoft.LabServices/labaccounts@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts
* **ApiVersion**: 2018-10-15
* **Input**: [CreateLabProperties](#createlabproperties)
* **Output**: any

## Function getEnvironment (Microsoft.LabServices/users@2018-10-15)
* **Resource**: Microsoft.LabServices/users
* **ApiVersion**: 2018-10-15
* **Input**: [EnvironmentOperationsPayload](#environmentoperationspayload)
* **Output**: [GetEnvironmentResponse](#getenvironmentresponse)

## Function getOperationBatchStatus (Microsoft.LabServices/users@2018-10-15)
* **Resource**: Microsoft.LabServices/users
* **ApiVersion**: 2018-10-15
* **Input**: [OperationBatchStatusPayload](#operationbatchstatuspayload)
* **Output**: [OperationBatchStatusResponse](#operationbatchstatusresponse)

## Function getOperationStatus (Microsoft.LabServices/users@2018-10-15)
* **Resource**: Microsoft.LabServices/users
* **ApiVersion**: 2018-10-15
* **Input**: [OperationStatusPayload](#operationstatuspayload)
* **Output**: [OperationStatusResponse](#operationstatusresponse)

## Function getPersonalPreferences (Microsoft.LabServices/users@2018-10-15)
* **Resource**: Microsoft.LabServices/users
* **ApiVersion**: 2018-10-15
* **Input**: [PersonalPreferencesOperationsPayload](#personalpreferencesoperationspayload)
* **Output**: [GetPersonalPreferencesResponse](#getpersonalpreferencesresponse)

## Function getRegionalAvailability (Microsoft.LabServices/labaccounts@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts
* **ApiVersion**: 2018-10-15
* **Output**: [GetRegionalAvailabilityResponse](#getregionalavailabilityresponse)

## Function listEnvironments (Microsoft.LabServices/users@2018-10-15)
* **Resource**: Microsoft.LabServices/users
* **ApiVersion**: 2018-10-15
* **Input**: [ListEnvironmentsPayload](#listenvironmentspayload)
* **Output**: [ListEnvironmentsResponse](#listenvironmentsresponse)

## Function listLabs (Microsoft.LabServices/users@2018-10-15)
* **Resource**: Microsoft.LabServices/users
* **ApiVersion**: 2018-10-15
* **Output**: [ListLabsResponse](#listlabsresponse)

## Function publish (Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts/labs/environmentsettings
* **ApiVersion**: 2018-10-15
* **Input**: [PublishPayload](#publishpayload)
* **Output**: any

## Function register (Microsoft.LabServices/users@2018-10-15)
* **Resource**: Microsoft.LabServices/users
* **ApiVersion**: 2018-10-15
* **Input**: [RegisterPayload](#registerpayload)
* **Output**: any

## Function register (Microsoft.LabServices/labaccounts/labs@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts/labs
* **ApiVersion**: 2018-10-15
* **Output**: any

## Function resetPassword (Microsoft.LabServices/users@2018-10-15)
* **Resource**: Microsoft.LabServices/users
* **ApiVersion**: 2018-10-15
* **Input**: [ResetPasswordPayload](#resetpasswordpayload)
* **Output**: any

## Function resetPassword (Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts/labs/environmentsettings/environments
* **ApiVersion**: 2018-10-15
* **Input**: [ResetPasswordPayload](#resetpasswordpayload)
* **Output**: any

## Function start (Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts/labs/environmentsettings
* **ApiVersion**: 2018-10-15
* **Output**: any

## Function start (Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts/labs/environmentsettings/environments
* **ApiVersion**: 2018-10-15
* **Output**: any

## Function startEnvironment (Microsoft.LabServices/users@2018-10-15)
* **Resource**: Microsoft.LabServices/users
* **ApiVersion**: 2018-10-15
* **Input**: [EnvironmentOperationsPayload](#environmentoperationspayload)
* **Output**: any

## Function stop (Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts/labs/environmentsettings
* **ApiVersion**: 2018-10-15
* **Output**: any

## Function stop (Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15)
* **Resource**: Microsoft.LabServices/labaccounts/labs/environmentsettings/environments
* **ApiVersion**: 2018-10-15
* **Output**: any

## Function stopEnvironment (Microsoft.LabServices/users@2018-10-15)
* **Resource**: Microsoft.LabServices/users
* **ApiVersion**: 2018-10-15
* **Input**: [EnvironmentOperationsPayload](#environmentoperationspayload)
* **Output**: any

## AddUsersPayload
### Properties
* **emailAddresses**: string[] (Required): List of user emails addresses to add to the lab.

## CreateLabProperties
### Properties
* **environmentSettingCreationParameters**: [EnvironmentSettingCreationParameters](#environmentsettingcreationparameters): Settings related to creating an environment setting
* **labCreationParameters**: [LabCreationParameters](#labcreationparameters) (Required): Settings related to creating a lab
* **location**: string: The location of the resource
* **name**: string (Required): The name of the resource
* **tags**: [CreateLabPropertiesTags](#createlabpropertiestags): The tags of the resource.

## CreateLabPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentDetails
### Properties
* **description**: string (ReadOnly): Description of the Environment
* **environmentState**: string (ReadOnly): Publishing state of the environment setting Possible values are Creating, Created, Failed
* **id**: string (ReadOnly): Resource Id of the environment
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): The details of the latest operation. ex: status, error
* **name**: string (ReadOnly): Name of the Environment
* **passwordLastReset**: string (ReadOnly): When the password was last reset on the environment.
* **provisioningState**: string (ReadOnly): The provisioning state of the environment. This also includes LabIsFull and NotYetProvisioned status.
* **totalUsage**: string (ReadOnly): How long the environment has been used by a lab user
* **virtualMachineDetails**: [VirtualMachineDetails](#virtualmachinedetails) (ReadOnly): Details of backing DTL virtual machine with compute and network details.

## EnvironmentOperationsPayload
### Properties
* **environmentId**: string (Required): The resourceId of the environment

## EnvironmentProperties
### Properties
* **claimedByUserName**: string (ReadOnly): The name or email address of the user who has claimed the environment
* **claimedByUserObjectId**: string (ReadOnly): The AAD object Id of the user who has claimed the environment
* **claimedByUserPrincipalId**: string (ReadOnly): The user principal Id of the user who has claimed the environment
* **isClaimed**: bool (ReadOnly): Is the environment claimed or not
* **lastKnownPowerState**: string (ReadOnly): Last known power state of the environment
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): The details of the latest operation. ex: status, error
* **networkInterface**: [NetworkInterface](#networkinterface) (ReadOnly): Network details of the environment
* **passwordLastReset**: string (ReadOnly): When the password was last reset on the environment.
* **provisioningState**: string: The provisioning status of the resource.
* **resourceSets**: [ResourceSet](#resourceset): The set of a VM and the setting id it was created for
* **totalUsage**: string (ReadOnly): How long the environment has been used by a lab user
* **uniqueIdentifier**: string: The unique immutable identifier of a resource (Guid).

## EnvironmentSettingCreationParameters
### Properties
* **resourceSettingCreationParameters**: [ResourceSettingCreationParameters](#resourcesettingcreationparameters) (Required): The resource specific settings

## EnvironmentSettingProperties
### Properties
* **configurationState**: 'Completed' | 'NotApplicable' | string: Describes the user's progress in configuring their environment setting
* **description**: string: Describes the environment and its resource settings
* **lastChanged**: string (ReadOnly): Time when the template VM was last changed.
* **lastPublished**: string (ReadOnly): Time when the template VM was last sent for publishing.
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): The details of the latest operation. ex: status, error
* **provisioningState**: string: The provisioning status of the resource.
* **publishingState**: 'Draft' | 'PublishFailed' | 'Published' | 'Publishing' | 'Scaling' | string (ReadOnly): Describes the readiness of this environment setting
* **resourceSettings**: [ResourceSettings](#resourcesettings) (Required): The resource specific settings
* **title**: string: Brief title describing the environment and its resource settings
* **uniqueIdentifier**: string: The unique immutable identifier of a resource (Guid).

## EnvironmentSize
### Properties
* **maxPrice**: int (ReadOnly): The pay-as-you-go dollar price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost. This is the maximum price of all prices within this tier.
* **minMemory**: int (ReadOnly): The amount of memory available (in GB). This is the minimum amount of memory within this tier.
* **minNumberOfCores**: int (ReadOnly): The number of cores a VM of this size has. This is the minimum number of cores within this tier.
* **name**: 'Basic' | 'Performance' | 'Standard' | string: The size category
* **vmSizes**: [SizeInfo](#sizeinfo)[]: Represents a set of compute sizes that can serve this given size type

## GalleryImageProperties
### Properties
* **author**: string (ReadOnly): The author of the gallery image.
* **createdDate**: string (ReadOnly): The creation date of the gallery image.
* **description**: string (ReadOnly): The description of the gallery image.
* **icon**: string (ReadOnly): The icon of the gallery image.
* **imageReference**: [GalleryImageReference](#galleryimagereference) (ReadOnly): The image reference of the gallery image.
* **isEnabled**: bool: Indicates whether this gallery image is enabled.
* **isOverride**: bool: Indicates whether this gallery has been overridden for this lab account
* **isPlanAuthorized**: bool: Indicates if the plan has been authorized for programmatic deployment.
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): The details of the latest operation. ex: status, error
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

## GetEnvironmentResponse
### Properties
* **environment**: [EnvironmentDetails](#environmentdetails) (ReadOnly): Details of the environment

## GetPersonalPreferencesResponse
### Properties
* **favoriteLabResourceIds**: string[]: Array of favorite lab resource ids
* **id**: string: Id to be used by the cache orchestrator

## GetRegionalAvailabilityResponse
### Properties
* **regionalAvailability**: [RegionalAvailability](#regionalavailability)[]: Availability information for different size categories per region

## LabAccountProperties
### Properties
* **enabledRegionSelection**: bool: Represents if region selection is enabled
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): The details of the latest operation. ex: status, error
* **provisioningState**: string: The provisioning status of the resource.
* **sizeConfiguration**: [SizeConfigurationProperties](#sizeconfigurationproperties) (ReadOnly): Represents the size configuration under the lab account
* **uniqueIdentifier**: string: The unique immutable identifier of a resource (Guid).

## LabCreationParameters
### Properties
* **maxUsersInLab**: int: Maximum number of users allowed in the lab.

## LabDetails
### Properties
* **id**: string: The Id of the lab.
* **name**: string: Name of the lab
* **provisioningState**: string: The provisioning state of the lab.
* **usageQuota**: string (ReadOnly): The maximum duration a user can use a VM in this lab.

## LabProperties
### Properties
* **createdByObjectId**: string (ReadOnly): Object id of the user that created the lab.
* **createdByUserPrincipalName**: string (ReadOnly): Lab creator name
* **createdDate**: string (ReadOnly): Creation date for the lab
* **invitationCode**: string (ReadOnly): Invitation code that users can use to join a lab.
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): The details of the latest operation. ex: status, error
* **maxUsersInLab**: int: Maximum number of users allowed in the lab.
* **provisioningState**: string: The provisioning status of the resource.
* **uniqueIdentifier**: string: The unique immutable identifier of a resource (Guid).
* **usageQuota**: string: Maximum duration a user can use an environment for in the lab.
* **userAccessMode**: 'Open' | 'Restricted' | string: Lab user access mode (open to all vs. restricted to those listed on the lab).
* **userQuota**: int (ReadOnly): Maximum value MaxUsersInLab can be set to, as specified by the service

## LatestOperationResult
### Properties
* **errorCode**: string (ReadOnly): Error code on failure.
* **errorMessage**: string (ReadOnly): The error message.
* **httpMethod**: string (ReadOnly): The HttpMethod - PUT/POST/DELETE for the operation.
* **operationUrl**: string (ReadOnly): The URL to use to check long-running operation status
* **requestUri**: string (ReadOnly): Request URI of the operation.
* **status**: string (ReadOnly): The current status of the operation.

## ListEnvironmentsPayload
### Properties
* **labId**: string: The resource Id of the lab

## ListEnvironmentsResponse
### Properties
* **environments**: [EnvironmentDetails](#environmentdetails)[]: List of all the environments

## ListLabsResponse
### Properties
* **labs**: [LabDetails](#labdetails)[]: List of all the labs

## NetworkInterface
### Properties
* **privateIpAddress**: string (ReadOnly): PrivateIp address of the Compute VM
* **rdpAuthority**: string (ReadOnly): Connection information for Windows
* **sshAuthority**: string (ReadOnly): Connection information for Linux
* **username**: string (ReadOnly): Username of the VM

## OperationBatchStatusPayload
### Properties
* **urls**: string[] (Required): The operation url of long running operation

## OperationBatchStatusResponse
### Properties
* **items**: [OperationBatchStatusResponseItem](#operationbatchstatusresponseitem)[] (ReadOnly): Gets a collection of items that contain the operation url and status.

## OperationBatchStatusResponseItem
### Properties
* **operationUrl**: string (ReadOnly): status of the long running operation for an environment
* **status**: string (ReadOnly): status of the long running operation for an environment

## OperationStatusPayload
### Properties
* **operationUrl**: string (Required): The operation url of long running operation

## OperationStatusResponse
### Properties
* **status**: string (ReadOnly): status of the long running operation for an environment

## PersonalPreferencesOperationsPayload
### Properties
* **addRemove**: 'Add' | 'Remove' | string: Enum indicating if user is adding or removing a favorite lab
* **labAccountResourceId**: string: Resource Id of the lab account
* **labResourceId**: string: Resource Id of the lab to add/remove from the favorites list

## PublishPayload
### Properties
* **useExistingImage**: bool: Whether to use existing VM custom image when publishing.

## ReferenceVm
### Properties
* **password**: string: The password of the virtual machine. This will be set to null in GET resource API
* **userName**: string (Required): The username of the virtual machine
* **vmResourceId**: string (ReadOnly): VM resource Id for the environment
* **vmStateDetails**: [VmStateDetails](#vmstatedetails) (ReadOnly): The state details for the reference virtual machine.

## ReferenceVmCreationParameters
### Properties
* **password**: string (Required): The password of the virtual machine.
* **userName**: string (Required): The username of the virtual machine

## RegionalAvailability
### Properties
* **region**: string: Corresponding region
* **sizeAvailabilities**: [SizeAvailability](#sizeavailability)[]: List of all the size information for the region

## RegisterPayload
### Properties
* **registrationCode**: string: The registration code of the lab.

## ResetPasswordPayload
### Properties
* **environmentId**: string (Required): The resourceId of the environment
* **password**: string: The password to assign to the user specified in
* **username**: string: The username for which the password will be reset.

## ResourceSet
### Properties
* **resourceSettingId**: string: resourceSettingId for the environment
* **vmResourceId**: string: VM resource Id for the environment

## ResourceSettingCreationParameters
### Properties
* **galleryImageResourceId**: string (Required): The resource id of the gallery image used for creating the virtual machine
* **location**: string: The location where the virtual machine will live
* **name**: string: The name of the resource setting
* **referenceVmCreationParameters**: [ReferenceVmCreationParameters](#referencevmcreationparameters) (Required): Creation parameters for Reference Vm
* **size**: 'Basic' | 'Performance' | 'Standard' | string: The size of the virtual machine

## ResourceSettings
### Properties
* **cores**: int (ReadOnly): The translated compute cores of the virtual machine
* **galleryImageResourceId**: string: The resource id of the gallery image used for creating the virtual machine
* **id**: string (ReadOnly): The unique id of the resource setting
* **imageName**: string (ReadOnly): The name of the image used to created the environment setting
* **referenceVm**: [ReferenceVm](#referencevm) (Required): Details specific to Reference Vm
* **size**: 'Basic' | 'Performance' | 'Standard' | string: The size of the virtual machine

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SizeAvailability
### Properties
* **isAvailable**: bool: Whether or not this size category is available
* **sizeCategory**: 'Basic' | 'Performance' | 'Standard' | string: The category of the size (Basic, Standard, Performance).

## SizeConfigurationProperties
### Properties
* **environmentSizes**: [EnvironmentSize](#environmentsize)[]: Represents a list of size categories supported by this Lab Account (Small, Medium, Large)

## SizeInfo
### Properties
* **computeSize**: string: Represents the actual compute size, e.g. Standard_A2_v2.
* **memory**: int: The amount of memory available (in GB).
* **numberOfCores**: int: The number of cores a VM of this size has.
* **price**: int: The pay-as-you-go price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost.

## UserProperties
### Properties
* **email**: string (ReadOnly): The user email address, as it was specified during registration.
* **familyName**: string (ReadOnly): The user family name, as it was specified during registration.
* **givenName**: string (ReadOnly): The user given name, as it was specified during registration.
* **latestOperationResult**: [LatestOperationResult](#latestoperationresult) (ReadOnly): The details of the latest operation. ex: status, error
* **provisioningState**: string: The provisioning status of the resource.
* **tenantId**: string (ReadOnly): The user tenant ID, as it was specified during registration.
* **totalUsage**: string (ReadOnly): How long the user has used his VMs in this lab
* **uniqueIdentifier**: string: The unique immutable identifier of a resource (Guid).

## VirtualMachineDetails
### Properties
* **lastKnownPowerState**: string (ReadOnly): Last known compute power state captured in DTL
* **privateIpAddress**: string (ReadOnly): PrivateIp address of the compute VM
* **provisioningState**: string (ReadOnly): Provisioning state of the Dtl VM
* **rdpAuthority**: string (ReadOnly): Connection information for Windows
* **sshAuthority**: string (ReadOnly): Connection information for Linux
* **userName**: string (ReadOnly): Compute VM login user name

## VmStateDetails
### Properties
* **lastKnownPowerState**: string (ReadOnly): Last known compute power state captured in DTL
* **powerState**: string (ReadOnly): The power state of the reference virtual machine.
* **rdpAuthority**: string (ReadOnly): The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol).
* **sshAuthority**: string (ReadOnly): The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH.

