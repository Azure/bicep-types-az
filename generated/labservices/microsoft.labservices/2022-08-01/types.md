# Microsoft.LabServices @ 2022-08-01

## Resource Microsoft.LabServices/labPlans@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Managed Identity Information
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabPlanProperties](#labplanproperties) (Required): Lab plan resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the lab plan.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.LabServices/labPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labPlans/images@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties) (Required): Image resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the image.
* **type**: 'Microsoft.LabServices/labPlans/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labs@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabProperties](#labproperties) (Required): Lab resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the lab.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.LabServices/labs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labs/schedules@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleProperties](#scheduleproperties) (Required): Schedule resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the schedule.
* **type**: 'Microsoft.LabServices/labs/schedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labs/users@2022-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties) (Required): User resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the user resource.
* **type**: 'Microsoft.LabServices/labs/users' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.LabServices/labs/virtualMachines@2022-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineProperties](#virtualmachineproperties) (ReadOnly): Virtual machine resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): System data of the Lab virtual machine.
* **type**: 'Microsoft.LabServices/labs/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type

## AutoShutdownProfile
### Properties
* **disconnectDelay**: string: The amount of time a VM will stay running after a user disconnects if this behavior is enabled.
* **idleDelay**: string: The amount of time a VM will idle before it is shutdown if this behavior is enabled.
* **noConnectDelay**: string: The amount of time a VM will stay running before it is shutdown if no connection is made and this behavior is enabled.
* **shutdownOnDisconnect**: 'Disabled' | 'Enabled': Whether shutdown on disconnect is enabled
* **shutdownOnIdle**: 'LowUsage' | 'None' | 'UserAbsence': Whether a VM will get shutdown when it has idled for a period of time.
* **shutdownWhenNotConnected**: 'Disabled' | 'Enabled': Whether a VM will get shutdown when it hasn't been connected to after a period of time.

## ConnectionProfile
### Properties
* **clientRdpAccess**: 'None' | 'Private' | 'Public': The enabled access level for Client Access over RDP.
* **clientSshAccess**: 'None' | 'Private' | 'Public': The enabled access level for Client Access over SSH.
* **webRdpAccess**: 'None' | 'Private' | 'Public': The enabled access level for Web Access over RDP.
* **webSshAccess**: 'None' | 'Private' | 'Public': The enabled access level for Web Access over SSH.

## Credentials
### Properties
* **password**: string (WriteOnly): The password for the user. This is required for the TemplateVM createOption.
* **username**: string (Required): The username to use when signing in to lab VMs.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## ImageProperties
### Properties
* **author**: string (ReadOnly): The image author.
* **availableRegions**: string[]: The available regions of the image in the shared gallery.
* **description**: string (ReadOnly): A description of the image.
* **displayName**: string (ReadOnly): The image display name.
* **enabledState**: 'Disabled' | 'Enabled': Is the image enabled
* **iconUrl**: string (ReadOnly): URL of the image icon.
* **offer**: string (ReadOnly): The ID of an offer associated with the image.
* **osState**: 'Generalized' | 'Specialized' (ReadOnly): The OS State of the image.
* **osType**: 'Linux' | 'Windows' (ReadOnly): The OS Type of the image.
* **plan**: string (ReadOnly): The ID of marketplace plan associated with the image (optional).
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Locked' | 'Succeeded' | 'Updating' (ReadOnly): Current provisioning state of the image.
* **publisher**: string (ReadOnly): The ID of the publisher of the image.
* **sharedGalleryId**: string (ReadOnly): The ID for the image in the shared gallery.
* **sku**: string (ReadOnly): The image SKU.
* **termsStatus**: 'Disabled' | 'Enabled' (ReadOnly): The status of image terms of use (enabled = accepted, disabled = not accepted).
* **version**: string (ReadOnly): The image version.

## ImageReference
### Properties
* **exactVersion**: string (ReadOnly): The actual version of the image after use.
* **id**: string: Image resource ID
* **offer**: string: The image offer if applicable.
* **publisher**: string: The image publisher
* **sku**: string: The image SKU
* **version**: string: The image version specified on creation.

## LabNetworkProfile
### Properties
* **loadBalancerId**: string: The external load balancer resource id
* **publicIpId**: string: The external public IP resource id
* **subnetId**: string: The external subnet resource id

## LabPlanNetworkProfile
### Properties
* **subnetId**: string: The external subnet resource id

## LabPlanProperties
### Properties
* **allowedRegions**: string[]: The allowed regions for the lab creator to use when creating labs using this lab plan.
* **defaultAutoShutdownProfile**: [AutoShutdownProfile](#autoshutdownprofile): The default lab shutdown profile. This can be changed on a lab resource and only provides a default profile.
* **defaultConnectionProfile**: [ConnectionProfile](#connectionprofile): The default lab connection profile. This can be changed on a lab resource and only provides a default profile.
* **defaultNetworkProfile**: [LabPlanNetworkProfile](#labplannetworkprofile): The lab plan network profile. To enforce lab network policies they must be defined here and cannot be changed when there are existing labs associated with this lab plan.
* **linkedLmsInstance**: string: Base Url of the lms instance this lab plan can link lab rosters against.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Locked' | 'Succeeded' | 'Updating' (ReadOnly): Current provisioning state of the lab plan.
* **sharedGalleryId**: string: Resource ID of the Shared Image Gallery attached to this lab plan. When saving a lab template virtual machine image it will be persisted in this gallery. Shared images from the gallery can be made available to use when creating new labs.
* **supportInfo**: [SupportInfo](#supportinfo): Support contact information and instructions for users of the lab plan. This information is displayed to lab owners and virtual machine users for all labs in the lab plan.

## LabProperties
### Properties
* **autoShutdownProfile**: [AutoShutdownProfile](#autoshutdownprofile): The resource auto shutdown configuration for the lab. This controls whether actions are taken on resources that are sitting idle.
* **connectionProfile**: [ConnectionProfile](#connectionprofile): The connection profile for the lab. This controls settings such as web access to lab resources or whether RDP or SSH ports are open.
* **description**: string: The description of the lab.
* **labPlanId**: string: The ID of the lab plan. Used during resource creation to provide defaults and acts as a permission container when creating a lab via labs.azure.com. Setting a labPlanId on an existing lab provides organization..
* **networkProfile**: [LabNetworkProfile](#labnetworkprofile): The network profile for the lab, typically applied via a lab plan. This profile cannot be modified once a lab has been created.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Locked' | 'Succeeded' | 'Updating' (ReadOnly): Current provisioning state of the lab.
* **rosterProfile**: [RosterProfile](#rosterprofile): The lab user list management profile.
* **securityProfile**: [SecurityProfile](#securityprofile): The lab security profile.
* **state**: 'Draft' | 'Published' | 'Publishing' | 'Scaling' | 'Syncing' (ReadOnly): The lab state.
* **title**: string: The title of the lab.
* **virtualMachineProfile**: [VirtualMachineProfile](#virtualmachineprofile): The profile used for creating lab virtual machines.

## RecurrencePattern
### Properties
* **expirationDate**: string (Required): When the recurrence will expire. This date is inclusive.
* **frequency**: 'Daily' | 'Weekly' (Required): The frequency of the recurrence.
* **interval**: int: The interval to invoke the schedule on. For example, interval = 2 and RecurrenceFrequency.Daily will run every 2 days. When no interval is supplied, an interval of 1 is used.
* **weekDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: The week days the schedule runs. Used for when the Frequency is set to Weekly.

## RosterProfile
### Properties
* **activeDirectoryGroupId**: string: The AAD group ID which this lab roster is populated from. Having this set enables AAD sync mode.
* **lmsInstance**: string: The base URI identifying the lms instance.
* **ltiClientId**: string: The unique id of the azure lab services tool in the lms.
* **ltiContextId**: string: The unique context identifier for the lab in the lms.
* **ltiRosterEndpoint**: string: The uri of the names and roles service endpoint on the lms for the class attached to this lab.

## ScheduleProperties
### Properties
* **notes**: string: Notes for this schedule.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Locked' | 'Succeeded' | 'Updating' (ReadOnly): Current provisioning state of the schedule.
* **recurrencePattern**: [RecurrencePattern](#recurrencepattern): The recurrence pattern of the scheduled actions.
* **startAt**: string: When lab user virtual machines will be started. Timestamp offsets will be ignored and timeZoneId is used instead.
* **stopAt**: string: When lab user virtual machines will be stopped. Timestamp offsets will be ignored and timeZoneId is used instead.
* **timeZoneId**: string: The IANA timezone id for the schedule.

## SecurityProfile
### Properties
* **openAccess**: 'Disabled' | 'Enabled': Whether any user or only specified users can register to a lab.
* **registrationCode**: string (ReadOnly): The registration code for the lab.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## SupportInfo
### Properties
* **email**: string: Support contact email address.
* **instructions**: string: Support instructions.
* **phone**: string: Support contact phone number.
* **url**: string: Support web address.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserProperties
### Properties
* **additionalUsageQuota**: string: The amount of usage quota time the user gets in addition to the lab usage quota.
* **displayName**: string (ReadOnly): Display name of the user, for example user's full name.
* **email**: string (Required): Email address of the user.
* **invitationSent**: string (ReadOnly): Date and time when the invitation message was sent to the user.
* **invitationState**: 'Failed' | 'NotSent' | 'Sending' | 'Sent' (ReadOnly): State of the invitation message for the user.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Locked' | 'Succeeded' | 'Updating' (ReadOnly): Current provisioning state of the user resource.
* **registrationState**: 'NotRegistered' | 'Registered' (ReadOnly): State of the user's registration within the lab.
* **totalUsage**: string (ReadOnly): How long the user has used their virtual machines in this lab.

## VirtualMachineAdditionalCapabilities
### Properties
* **installGpuDrivers**: 'Disabled' | 'Enabled': Flag to pre-install dedicated GPU drivers.

## VirtualMachineConnectionProfile
### Properties
* **adminUsername**: string (ReadOnly): The username used to log on to the virtual machine as admin.
* **nonAdminUsername**: string (ReadOnly): The username used to log on to the virtual machine as non-admin, if one exists.
* **privateIpAddress**: string (ReadOnly): The private IP address of the virtual machine.
* **rdpAuthority**: string (ReadOnly): Port and host name separated by semicolon for connecting via RDP protocol to the virtual machine.
* **rdpInBrowserUrl**: string (ReadOnly): URL for connecting via RDP protocol to the virtual machine in browser.
* **sshAuthority**: string (ReadOnly): Port and host name separated by semicolon for connecting via SSH protocol to the virtual machine.
* **sshInBrowserUrl**: string (ReadOnly): URL for connecting via SSH protocol to the virtual machine in browser.

## VirtualMachineProfile
### Properties
* **additionalCapabilities**: [VirtualMachineAdditionalCapabilities](#virtualmachineadditionalcapabilities): Additional VM capabilities.
* **adminUser**: [Credentials](#credentials) (Required): Credentials for the admin user on the VM.
* **createOption**: 'Image' | 'TemplateVM' (Required): Indicates what lab virtual machines are created from.
* **imageReference**: [ImageReference](#imagereference) (Required): The image configuration for lab virtual machines.
* **nonAdminUser**: [Credentials](#credentials): Credentials for the non-admin user on the VM, if one exists.
* **osType**: 'Linux' | 'Windows' (ReadOnly): The OS type of the image
* **sku**: [Sku](#sku) (Required): The SKU for the lab. Defines the type of virtual machines used in the lab.
* **usageQuota**: string (Required): The initial quota alloted to each lab user. Must be a time span between 0 and 9999 hours.
* **useSharedPassword**: 'Disabled' | 'Enabled': Enabling this option will use the same password for all user VMs.

## VirtualMachineProperties
### Properties
* **claimedByUserId**: string (ReadOnly): The lab user ID (not the PUID!) of who claimed the virtual machine.
* **connectionProfile**: [VirtualMachineConnectionProfile](#virtualmachineconnectionprofile) (ReadOnly): Profile for information about connecting to the virtual machine.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Locked' | 'Succeeded' | 'Updating' (ReadOnly): Current provisioning state of the virtual machine.
* **state**: 'Redeploying' | 'Reimaging' | 'ResettingPassword' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): The current state of the virtual machine
* **vmType**: 'Template' | 'User' (ReadOnly): The type of this VM resource

