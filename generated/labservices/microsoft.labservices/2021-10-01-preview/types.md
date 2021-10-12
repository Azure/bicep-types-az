# Microsoft.LabServices @ 2021-10-01-preview

## Resource Microsoft.LabServices/labPlans@2021-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabPlanProperties](#labplanproperties) (Required): Lab plan resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.LabServices/labPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labPlans/images@2021-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties) (Required): Properties of an image resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.LabServices/labPlans/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labs@2021-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabProperties](#labproperties) (Required): Properties of a lab resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.LabServices/labs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labs/schedules@2021-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleProperties](#scheduleproperties) (Required): Schedule resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.LabServices/labs/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labs/users@2021-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties) (Required): User resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.LabServices/labs/users' (ReadOnly, DeployTimeConstant): The resource type

## LabPlanProperties
### Properties
* **allowedRegions**: string[]: The allowed regions for the lab creator to use when creating labs using this lab plan.
* **defaultAutoShutdownProfile**: [AutoShutdownProfile](#autoshutdownprofile): Profile for how to handle shutting down virtual machines.
* **defaultConnectionProfile**: [ConnectionProfile](#connectionprofile): Connection profile for how users connect to lab virtual machines.
* **defaultNetworkProfile**: [LabPlanNetworkProfile](#labplannetworkprofile): Profile for how to handle networking for Lab Plans.
* **linkedLmsInstance**: string: A URL.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Locked' | 'Succeeded' | 'Updating' (ReadOnly): Resource provisioning state.
* **sharedGalleryId**: string: A URL.
* **supportInfo**: [SupportInfo](#supportinfo): Support contact information and instructions.

## AutoShutdownProfile
### Properties
* **disconnectDelay**: string: The amount of time a VM will stay running after a user disconnects if this behavior is enabled.
* **idleDelay**: string: The amount of time a VM will idle before it is shutdown if this behavior is enabled.
* **noConnectDelay**: string: The amount of time a VM will stay running before it is shutdown if no connection is made and this behavior is enabled.
* **shutdownOnDisconnect**: 'Disabled' | 'Enabled': Property enabled state.
* **shutdownOnIdle**: 'LowUsage' | 'None' | 'UserAbsence': Defines whether to shut down VM on idle and the criteria for idle detection.
* **shutdownWhenNotConnected**: 'Disabled' | 'Enabled': Property enabled state.

## ConnectionProfile
### Properties
* **clientRdpAccess**: 'None' | 'Private' | 'Public': A connection type for access labs and VMs (Public, Private or None).
* **clientSshAccess**: 'None' | 'Private' | 'Public': A connection type for access labs and VMs (Public, Private or None).
* **webRdpAccess**: 'None' | 'Private' | 'Public': A connection type for access labs and VMs (Public, Private or None).
* **webSshAccess**: 'None' | 'Private' | 'Public': A connection type for access labs and VMs (Public, Private or None).

## LabPlanNetworkProfile
### Properties
* **subnetId**: string: A URL.

## SupportInfo
### Properties
* **email**: string: An email address.
* **instructions**: string: Support instructions.
* **phone**: string: A phone number.
* **url**: string: A URL.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ImageProperties
### Properties
* **author**: string (ReadOnly): The image author.
* **availableRegions**: string[]: The available regions of the image in the shared gallery.
* **description**: string (ReadOnly): A description of the image.
* **displayName**: string (ReadOnly): The image display name.
* **enabledState**: 'Disabled' | 'Enabled': Property enabled state.
* **iconUrl**: string (ReadOnly): URL of the image icon.
* **offer**: string (ReadOnly): The ID of an offer associated with the image.
* **osState**: 'Generalized' | 'Specialized' (ReadOnly): The operating system state.
* **osType**: 'Linux' | 'Windows' (ReadOnly): The operating system type.
* **plan**: string (ReadOnly): The ID of marketplace plan associated with the image (optional).
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Locked' | 'Succeeded' | 'Updating' (ReadOnly): Resource provisioning state.
* **publisher**: string (ReadOnly): The ID of the publisher of the image.
* **sharedGalleryId**: string (ReadOnly): A URL.
* **sku**: string (ReadOnly): The image SKU.
* **termsStatus**: 'Disabled' | 'Enabled' (ReadOnly): Property enabled state.
* **version**: string (ReadOnly): The image version.

## LabProperties
### Properties
* **autoShutdownProfile**: [AutoShutdownProfile](#autoshutdownprofile): Profile for how to handle shutting down virtual machines.
* **connectionProfile**: [ConnectionProfile](#connectionprofile): Connection profile for how users connect to lab virtual machines.
* **description**: string: The description of the lab.
* **labPlanId**: string: A URL.
* **networkProfile**: [LabNetworkProfile](#labnetworkprofile): Profile for how to handle networking for Labs.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Locked' | 'Succeeded' | 'Updating' (ReadOnly): Resource provisioning state.
* **rosterProfile**: [RosterProfile](#rosterprofile): The lab user list management profile.
* **securityProfile**: [SecurityProfile](#securityprofile): The lab security profile.
* **state**: 'Draft' | 'Published' | 'Publishing' | 'Scaling' | 'Syncing' (ReadOnly): The state of a virtual machine.
* **title**: string: The title of the lab.
* **virtualMachineProfile**: [VirtualMachineProfile](#virtualmachineprofile): The base virtual machine configuration for a lab.

## LabNetworkProfile
### Properties
* **loadBalancerId**: string: A URL.
* **publicIpId**: string: A URL.
* **subnetId**: string: A URL.

## RosterProfile
### Properties
* **activeDirectoryGroupId**: string: The AAD group ID which this lab roster is populated from. Having this set enables AAD sync mode.
* **lmsInstance**: string: The base URI identifying the lms instance.
* **ltiClientId**: string: The unique id of the azure lab services tool in the lms.
* **ltiContextId**: string: The unique context identifier for the lab in the lms.
* **ltiRosterEndpoint**: string: The uri of the names and roles service endpoint on the lms for the class attached to this lab.

## SecurityProfile
### Properties
* **openAccess**: 'Disabled' | 'Enabled': Property enabled state.
* **registrationCode**: string (ReadOnly): The registration code for the lab.

## VirtualMachineProfile
### Properties
* **additionalCapabilities**: [VirtualMachineAdditionalCapabilities](#virtualmachineadditionalcapabilities): The additional capabilities for a lab VM.
* **adminUser**: [Credentials](#credentials) (Required): Credentials for a user on a lab VM.
* **createOption**: 'Image' | 'TemplateVM' (Required): Indicates what lab virtual machines are created from.
* **imageReference**: [ImageReference](#imagereference) (Required): Image reference information. Used in the virtual machine profile.
* **nonAdminUser**: [Credentials](#credentials): Credentials for a user on a lab VM.
* **osType**: 'Linux' | 'Windows' (ReadOnly): The operating system type.
* **sku**: [Sku](#sku) (Required): The resource model definition representing SKU
* **usageQuota**: string (Required): The initial quota alloted to each lab user. Must be a time span between 0 and 9999 hours.
* **useSharedPassword**: 'Disabled' | 'Enabled': Property enabled state.

## VirtualMachineAdditionalCapabilities
### Properties
* **installGpuDrivers**: 'Disabled' | 'Enabled': Property enabled state.

## Credentials
### Properties
* **password**: string (WriteOnly): The password for the user. This is required for the TemplateVM createOption.
* **username**: string (Required): The username to use when signing in to lab VMs.

## ImageReference
### Properties
* **exactVersion**: string (ReadOnly): The actual version of the image after use.
* **id**: string: A URL.
* **offer**: string: The image offer if applicable.
* **publisher**: string: The image publisher
* **sku**: string: The image SKU
* **version**: string: The image version specified on creation.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleProperties
### Properties
* **notes**: string: Notes for this schedule.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Locked' | 'Succeeded' | 'Updating' (ReadOnly): Resource provisioning state.
* **recurrencePattern**: [RecurrencePattern](#recurrencepattern): Recurrence pattern of a lab schedule.
* **startAt**: string: When lab user virtual machines will be started. Timestamp offsets will be ignored and timeZoneId is used instead.
* **stopAt**: string: When lab user virtual machines will be stopped. Timestamp offsets will be ignored and timeZoneId is used instead.
* **timeZoneId**: string: The IANA timezone id for the schedule.

## RecurrencePattern
### Properties
* **expirationDate**: string (Required): When the recurrence will expire. This date is inclusive.
* **frequency**: 'Daily' | 'Weekly' (Required): Schedule recurrence frequencies.
* **interval**: int: The interval to invoke the schedule on. For example, interval = 2 and RecurrenceFrequency.Daily will run every 2 days. When no interval is supplied, an interval of 1 is used.
* **weekDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: The week days the schedule runs. Used for when the Frequency is set to Weekly.

## UserProperties
### Properties
* **additionalUsageQuota**: string: The amount of usage quota time the user gets in addition to the lab usage quota.
* **displayName**: string (ReadOnly): Display name of the user, for example user's full name.
* **email**: string (Required): An email address.
* **invitationSent**: string (ReadOnly): Date and time when the invitation message was sent to the user.
* **invitationState**: 'Failed' | 'NotSent' | 'Sending' | 'Sent' (ReadOnly): The lab user invitation state.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Locked' | 'Succeeded' | 'Updating' (ReadOnly): Resource provisioning state.
* **registrationState**: 'NotRegistered' | 'Registered' (ReadOnly): The user lab registration state.
* **totalUsage**: string (ReadOnly): How long the user has used their virtual machines in this lab.

