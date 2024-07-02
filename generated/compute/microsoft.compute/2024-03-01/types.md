# Microsoft.Compute @ 2024-03-01

## Resource Microsoft.Compute/availabilitySets@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AvailabilitySetProperties](#availabilitysetproperties): The instance view of a resource.
* **sku**: [Sku](#sku): Sku of the availability set, only name is required to be set. See AvailabilitySetSkuTypes for possible set of values. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/availabilitySets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/capacityReservationGroups@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CapacityReservationGroupProperties](#capacityreservationgroupproperties): capacity reservation group Properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/capacityReservationGroups' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: Availability Zones to use for this capacity reservation group. The zones can be assigned only during creation. If not provided, the group supports only regional resources in the region. If provided, enforces each capacity reservation in the group to be in one of the zones.

## Resource Microsoft.Compute/capacityReservationGroups/capacityReservations@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CapacityReservationProperties](#capacityreservationproperties): Properties of the Capacity reservation.
* **sku**: [Sku](#sku) (Required): SKU of the resource for which capacity needs be reserved. The SKU name and capacity is required to be set. Currently VM Skus with the capability called 'CapacityReservationSupported' set to true are supported. Refer to List Microsoft.Compute SKUs in a region (https://docs.microsoft.com/rest/api/compute/resourceskus/list) for supported values.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/capacityReservationGroups/capacityReservations' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: Availability Zone to use for this capacity reservation. The zone has to be single value and also should be part for the list of zones specified during the capacity reservation group creation. The zone can be assigned only during creation. If not provided, the reservation supports only non-zonal deployments. If provided, enforces VM/VMSS using this capacity reservation to be in same zone.

## Resource Microsoft.Compute/hostGroups@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedHostGroupProperties](#dedicatedhostgroupproperties): Dedicated Host Group Properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/hostGroups' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.

## Resource Microsoft.Compute/hostGroups/hosts@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedHostProperties](#dedicatedhostproperties): Properties of the dedicated host.
* **sku**: [Sku](#sku) (Required): SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/hostGroups/hosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/images@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the Image.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties): Describes the properties of an Image.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/locations/publishers/artifacttypes/types/versions@2024-03-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineExtensionImageProperties](#virtualmachineextensionimageproperties) (ReadOnly): Describes the properties of a Virtual Machine Extension Image.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Compute/locations/publishers/artifacttypes/types/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/proximityPlacementGroups@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProximityPlacementGroupProperties](#proximityplacementgroupproperties): Describes the properties of a Proximity Placement Group.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/proximityPlacementGroups' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: Specifies the Availability Zone where virtual machine, virtual machine scale set or availability set associated with the  proximity placement group can be created.

## Resource Microsoft.Compute/restorePointCollections@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RestorePointCollectionProperties](#restorepointcollectionproperties): The restore point collection properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/restorePointCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/restorePointCollections/restorePoints@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RestorePointProperties](#restorepointproperties): The restore point properties.
* **type**: 'Microsoft.Compute/restorePointCollections/restorePoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/sshPublicKeys@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SshPublicKeyResourceProperties](#sshpublickeyresourceproperties): Properties of the SSH public key.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/sshPublicKeys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachines@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag is property returned in Create/Update/Get response of the VM, so that customer can supply it in the header to ensure optimistic updates.
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the Virtual Machine.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VirtualMachineIdentity](#virtualmachineidentity): The identity of the virtual machine, if configured.
* **location**: string (Required): Resource location
* **managedBy**: string (ReadOnly): ManagedBy is set to Virtual Machine Scale Set(VMSS) flex ARM resourceID, if the VM is part of the VMSS. This property is used by platform for internal resource group delete optimization.
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
* **properties**: [VirtualMachineProperties](#virtualmachineproperties): Describes the properties of a Virtual Machine.
* **resources**: [VirtualMachineExtension](#virtualmachineextension)[] (ReadOnly): The virtual machine child extension resources.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The virtual machine zones.

## Resource Microsoft.Compute/virtualMachines/extensions@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **tags**: [ResourceWithOptionalLocationTags](#resourcewithoptionallocationtags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachines/runCommands@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineRunCommandProperties](#virtualmachineruncommandproperties): Describes the properties of a Virtual Machine run command.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachines/runCommands' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag is property returned in Create/Update/Get response of the VMSS, so that customer can supply it in the header to ensure optimistic updates
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The extended location of the Virtual Machine Scale Set.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VirtualMachineScaleSetIdentity](#virtualmachinescalesetidentity): The identity of the virtual machine scale set, if configured.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
* **properties**: [VirtualMachineScaleSetProperties](#virtualmachinescalesetproperties): Describes the properties of a Virtual Machine Scale Set.
* **sku**: [Sku](#sku): The virtual machine scale set sku.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set

## Resource Microsoft.Compute/virtualMachineScaleSets/extensions@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties): Describes the properties of a Virtual Machine Scale Set Extension.
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades@2024-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: 'latest' (Required, DeployTimeConstant): The resource name
* **properties**: [RollingUpgradeStatusInfoProperties](#rollingupgradestatusinfoproperties) (ReadOnly): The status of the latest virtual machine scale set rolling upgrade.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualMachines@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag is property returned in Update/Get response of the VMSS VM, so that customer can supply it in the header to ensure optimistic updates.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VirtualMachineIdentity](#virtualmachineidentity): The identity of the virtual machine, if configured.
* **instanceId**: string (ReadOnly): The virtual machine instance ID.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
* **properties**: [VirtualMachineScaleSetVMProperties](#virtualmachinescalesetvmproperties): Describes the properties of a virtual machine scale set virtual machine.
* **resources**: [VirtualMachineExtension](#virtualmachineextension)[] (ReadOnly): The virtual machine child extension resources.
* **sku**: [Sku](#sku) (ReadOnly): The virtual machine SKU.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): The virtual machine zones.

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the extension.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineRunCommandProperties](#virtualmachineruncommandproperties): Describes the properties of a Virtual Machine run command.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands' (ReadOnly, DeployTimeConstant): The resource type

## AdditionalCapabilities
### Properties
* **hibernationEnabled**: bool: The flag that enables or disables hibernation capability on the VM.
* **ultraSSDEnabled**: bool: The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.

## AdditionalUnattendContent
### Properties
* **componentName**: 'Microsoft-Windows-Shell-Setup': The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
* **content**: string: Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
* **passName**: 'OobeSystem': The pass name. Currently, the only allowable value is OobeSystem.
* **settingName**: 'AutoLogon' | 'FirstLogonCommands': Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.

## ApiEntityReference
### Properties
* **id**: string: The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## ApiError
### Properties
* **code**: string: The error code.
* **details**: [ApiErrorBase](#apierrorbase)[]: The Api error details
* **innererror**: [InnerError](#innererror): The Api inner error
* **message**: string: The error message.
* **target**: string: The target of the particular error.

## ApiErrorBase
### Properties
* **code**: string: The error code.
* **message**: string: The error message.
* **target**: string: The target of the particular error.

## ApplicationProfile
### Properties
* **galleryApplications**: [VMGalleryApplication](#vmgalleryapplication)[]: Specifies the gallery applications that should be made available to the VM/VMSS

## AutomaticOSUpgradePolicy
### Properties
* **disableAutomaticRollback**: bool: Whether OS image rollback feature should be disabled. Default value is false.
* **enableAutomaticOSUpgrade**: bool: Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. If this is set to true for Windows based scale sets, [enableAutomaticUpdates](https://docs.microsoft.com/dotnet/api/microsoft.azure.management.compute.models.windowsconfiguration.enableautomaticupdates?view=azure-dotnet) is automatically set to false and cannot be set to true.
* **osRollingUpgradeDeferral**: bool: Indicates whether Auto OS Upgrade should undergo deferral. Deferred OS upgrades will send advanced notifications on a per-VM basis that an OS upgrade from rolling upgrades is incoming, via the IMDS tag 'Platform.PendingOSUpgrade'. The upgrade then defers until the upgrade is approved via an ApproveRollingUpgrade call.
* **useRollingUpgradePolicy**: bool: Indicates whether rolling upgrade policy should be used during Auto OS Upgrade. Default value is false. Auto OS Upgrade will fallback to the default policy if no policy is defined on the VMSS.

## AutomaticRepairsPolicy
### Properties
* **enabled**: bool: Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false.
* **gracePeriod**: string: The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 10 minutes (PT10M), which is also the default value. The maximum allowed grace period is 90 minutes (PT90M).
* **repairAction**: 'Reimage' | 'Replace' | 'Restart' | string: Type of repair action (replace, restart, reimage) that will be used for repairing unhealthy virtual machines in the scale set. Default value is replace.

## AvailabilitySetProperties
### Properties
* **platformFaultDomainCount**: int: Fault Domain count.
* **platformUpdateDomainCount**: int: Update Domain count.
* **proximityPlacementGroup**: [SubResource](#subresource): Specifies information about the proximity placement group that the availability set should be assigned to. Minimum api-version: 2018-04-01.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[] (ReadOnly): The resource status information.
* **virtualMachines**: [SubResource](#subresource)[]: A list of references to all virtual machines in the availability set.

## AvailablePatchSummary
### Properties
* **assessmentActivityId**: string (ReadOnly): The activity ID of the operation that produced this result. It is used to correlate across CRP and extension logs.
* **criticalAndSecurityPatchCount**: int (ReadOnly): The number of critical or security patches that have been detected as available and not yet installed.
* **error**: [ApiError](#apierror) (ReadOnly): The errors that were encountered during execution of the operation. The details array contains the list of them.
* **lastModifiedTime**: string (ReadOnly): The UTC timestamp when the operation began.
* **otherPatchCount**: int (ReadOnly): The number of all available patches excluding critical and security.
* **rebootPending**: bool (ReadOnly): The overall reboot status of the VM. It will be true when partially installed patches require a reboot to complete installation but the reboot has not yet occurred.
* **startTime**: string (ReadOnly): The UTC timestamp when the operation began.
* **status**: 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string (ReadOnly): The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Unknown", "Failed", "Succeeded", or "CompletedWithWarnings."

## BillingProfile
### Properties
* **maxPrice**: int: Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars. <br><br> This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price. <br><br> The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS. <br><br> Possible values are: <br><br> - Any decimal value greater than zero. Example: 0.01538 <br><br> -1 – indicates default price to be up-to on-demand. <br><br> You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you. <br><br>Minimum api-version: 2019-03-01.

## BootDiagnostics
### Properties
* **enabled**: bool: Whether boot diagnostics should be enabled on the Virtual Machine.
* **storageUri**: string: Uri of the storage account to use for placing the console output and screenshot. If storageUri is not specified while enabling boot diagnostics, managed storage will be used.

## BootDiagnosticsInstanceView
### Properties
* **consoleScreenshotBlobUri**: string (ReadOnly): The console screenshot blob URI. **Note:** This will **not** be set if boot diagnostics is currently enabled with managed storage.
* **serialConsoleLogBlobUri**: string (ReadOnly): The serial console log blob Uri. **Note:** This will **not** be set if boot diagnostics is currently enabled with managed storage.
* **status**: [InstanceViewStatus](#instanceviewstatus) (ReadOnly): The boot diagnostics status information for the VM. **Note:** It will be set only if there are errors encountered in enabling boot diagnostics.

## CapacityReservationGroupInstanceView
### Properties
* **capacityReservations**: [CapacityReservationInstanceViewWithName](#capacityreservationinstanceviewwithname)[] (ReadOnly): List of instance view of the capacity reservations under the capacity reservation group.
* **sharedSubscriptionIds**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): List of the subscriptions that the capacity reservation group is shared with. **Note:** Minimum api-version: 2024-03-01. Please refer to https://aka.ms/computereservationsharing for more details.

## CapacityReservationGroupProperties
### Properties
* **capacityReservations**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of all capacity reservation resource ids that belong to capacity reservation group.
* **instanceView**: [CapacityReservationGroupInstanceView](#capacityreservationgroupinstanceview) (ReadOnly): The capacity reservation group instance view which has the list of instance views for all the capacity reservations that belong to the capacity reservation group.
* **sharingProfile**: [ResourceSharingProfile](#resourcesharingprofile): Specifies the settings to enable sharing across subscriptions for the capacity reservation group resource. Pls. keep in mind the capacity reservation group resource generally can be shared across subscriptions belonging to a single azure AAD tenant or cross AAD tenant if there is a trust relationship established between the AAD tenants. **Note:** Minimum api-version: 2024-03-01. Please refer to https://aka.ms/computereservationsharing for more details.
* **virtualMachinesAssociated**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of references to all virtual machines associated to the capacity reservation group.

## CapacityReservationInstanceView
### Properties
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **utilizationInfo**: [CapacityReservationUtilization](#capacityreservationutilization): Unutilized capacity of the capacity reservation.

## CapacityReservationInstanceViewWithName
### Properties
* **name**: string (ReadOnly): The name of the capacity reservation.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **utilizationInfo**: [CapacityReservationUtilization](#capacityreservationutilization): Unutilized capacity of the capacity reservation.

## CapacityReservationProfile
### Properties
* **capacityReservationGroup**: [SubResource](#subresource): Specifies the capacity reservation group resource id that should be used for allocating the virtual machine or scaleset vm instances provided enough capacity has been reserved. Please refer to https://aka.ms/CapacityReservation for more details.

## CapacityReservationProperties
### Properties
* **instanceView**: [CapacityReservationInstanceView](#capacityreservationinstanceview) (ReadOnly): The Capacity reservation instance view.
* **platformFaultDomainCount**: int (ReadOnly): Specifies the value of fault domain count that Capacity Reservation supports for requested VM size. **Note:** The fault domain count specified for a resource (like virtual machines scale set) must be less than or equal to this value if it deploys using capacity reservation. Minimum api-version: 2022-08-01.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **provisioningTime**: string (ReadOnly): The date time when the capacity reservation was last updated.
* **reservationId**: string (ReadOnly): A unique id generated and assigned to the capacity reservation by the platform which does not change throughout the lifetime of the resource.
* **timeCreated**: string (ReadOnly): Specifies the time at which the Capacity Reservation resource was created. Minimum api-version: 2021-11-01.
* **virtualMachinesAssociated**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of all virtual machine resource ids that are associated with the capacity reservation.

## CapacityReservationUtilization
### Properties
* **currentCapacity**: int (ReadOnly): The value provides the current capacity of the VM size which was reserved successfully and for which the customer is getting billed. Minimum api-version: 2022-08-01.
* **virtualMachinesAllocated**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of all virtual machines resource ids allocated against the capacity reservation.

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The defaulting behavior is: **None for Standard storage. ReadOnly for Premium storage.**
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Restore' | string (Required): Specifies how the virtual machine disk should be created. Possible values are **Attach:** This value is used when you are using a specialized disk to create the virtual machine. **FromImage:** This value is used when you are using an image to create the virtual machine data disk. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described. **Empty:** This value is used when creating an empty data disk. **Copy:** This value is used to create a data disk from a snapshot or another disk. **Restore:** This value is used to create a data disk from a disk restore point.
* **deleteOption**: 'Delete' | 'Detach' | string: Specifies whether data disk should be deleted or detached upon VM deletion. Possible values are: **Delete.** If this value is used, the data disk is deleted when VM is deleted. **Detach.** If this value is used, the data disk is retained after VM is deleted. The default value is set to **Detach**.
* **detachOption**: 'ForceDetach' | string: Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values: **ForceDetach.** detachOption: **ForceDetach** is applicable only for managed data disks. If a previous detachment attempt of the data disk did not complete due to an unexpected failure from the virtual machine and the disk is still not released then use force-detach as a last resort option to detach the disk forcibly from the VM. All writes might not have been flushed when using this detach behavior. **This feature is still in preview** mode and is not supported for VirtualMachineScaleSet. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'.
* **diskIOPSReadWrite**: int (ReadOnly): Specifies the Read-Write IOPS for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
* **diskMBpsReadWrite**: int (ReadOnly): Specifies the bandwidth in MB per second for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
* **image**: [VirtualHardDisk](#virtualharddisk): The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **sourceResource**: [ApiEntityReference](#apientityreference): The source resource identifier. It can be a snapshot, or disk restore point from which to create a disk.
* **toBeDetached**: bool: Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset
* **vhd**: [VirtualHardDisk](#virtualharddisk): The virtual hard disk.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## DedicatedHostAllocatableVM
### Properties
* **count**: int: Maximum number of VMs of size vmSize that can fit in the dedicated host's remaining capacity.
* **vmSize**: string: VM size in terms of which the unutilized capacity is represented.

## DedicatedHostAvailableCapacity
### Properties
* **allocatableVMs**: [DedicatedHostAllocatableVM](#dedicatedhostallocatablevm)[]: The unutilized capacity of the dedicated host represented in terms of each VM size that is allowed to be deployed to the dedicated host.

## DedicatedHostGroupInstanceView
### Properties
* **hosts**: [DedicatedHostInstanceViewWithName](#dedicatedhostinstanceviewwithname)[]: List of instance view of the dedicated hosts under the dedicated host group.

## DedicatedHostGroupProperties
### Properties
* **additionalCapabilities**: [DedicatedHostGroupPropertiesAdditionalCapabilities](#dedicatedhostgrouppropertiesadditionalcapabilities): Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01.
* **hosts**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of references to all dedicated hosts in the dedicated host group.
* **instanceView**: [DedicatedHostGroupInstanceView](#dedicatedhostgroupinstanceview) (ReadOnly): The dedicated host group instance view, which has the list of instance view of the dedicated hosts under the dedicated host group.
* **platformFaultDomainCount**: int {minValue: 1} (Required): Number of fault domains that the host group can span.
* **supportAutomaticPlacement**: bool: Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'false' when not provided. Minimum api-version: 2020-06-01.

## DedicatedHostGroupPropertiesAdditionalCapabilities
### Properties
* **ultraSSDEnabled**: bool: The flag that enables or disables a capability to have UltraSSD Enabled Virtual Machines on Dedicated Hosts of the Dedicated Host Group. For the Virtual Machines to be UltraSSD Enabled, UltraSSDEnabled flag for the resource needs to be set true as well. The value is defaulted to 'false' when not provided. Please refer to https://docs.microsoft.com/en-us/azure/virtual-machines/disks-enable-ultra-ssd for more details on Ultra SSD feature. **Note:** The ultraSSDEnabled setting can only be enabled for Host Groups that are created as zonal. Minimum api-version: 2022-03-01.

## DedicatedHostInstanceView
### Properties
* **assetId**: string (ReadOnly): Specifies the unique id of the dedicated physical machine on which the dedicated host resides.
* **availableCapacity**: [DedicatedHostAvailableCapacity](#dedicatedhostavailablecapacity): Unutilized capacity of the dedicated host.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## DedicatedHostInstanceViewWithName
### Properties
* **assetId**: string (ReadOnly): Specifies the unique id of the dedicated physical machine on which the dedicated host resides.
* **availableCapacity**: [DedicatedHostAvailableCapacity](#dedicatedhostavailablecapacity): Unutilized capacity of the dedicated host.
* **name**: string (ReadOnly): The name of the dedicated host.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## DedicatedHostProperties
### Properties
* **autoReplaceOnFailure**: bool: Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided.
* **hostId**: string (ReadOnly): A unique id generated and assigned to the dedicated host by the platform. Does not change throughout the lifetime of the host.
* **instanceView**: [DedicatedHostInstanceView](#dedicatedhostinstanceview) (ReadOnly): The dedicated host instance view.
* **licenseType**: 'None' | 'Windows_Server_Hybrid' | 'Windows_Server_Perpetual': Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are: **None,** **Windows_Server_Hybrid,** **Windows_Server_Perpetual.** The default value is: **None.**
* **platformFaultDomain**: int {minValue: 0}: Fault domain of the dedicated host within a dedicated host group.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **provisioningTime**: string (ReadOnly): The date when the host was first provisioned.
* **timeCreated**: string (ReadOnly): Specifies the time at which the Dedicated Host resource was created. Minimum api-version: 2021-11-01.
* **virtualMachines**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of references to all virtual machines in the Dedicated Host.

## DiagnosticsProfile
### Properties
* **bootDiagnostics**: [BootDiagnostics](#bootdiagnostics): Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. **NOTE**: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.

## DiffDiskSettings
### Properties
* **option**: 'Local' | string: Specifies the ephemeral disk settings for operating system disk.
* **placement**: 'CacheDisk' | 'NvmeDisk' | 'ResourceDisk' | string: Specifies the ephemeral disk placement for operating system disk. Possible values are: **CacheDisk,** **ResourceDisk,** **NvmeDisk.** The defaulting behavior is: **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk** or **NvmeDisk** is used. Refer to the VM size documentation for Windows VM at https://docs.microsoft.com/azure/virtual-machines/windows/sizes and Linux VM at https://docs.microsoft.com/azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk. Minimum api-version for NvmeDisk: 2024-03-01.

## DiskEncryptionSetParameters
### Properties
* **id**: string: Resource Id

## DiskEncryptionSettings
### Properties
* **diskEncryptionKey**: [KeyVaultSecretReference](#keyvaultsecretreference): Specifies the location of the disk encryption key, which is a Key Vault Secret.
* **enabled**: bool: Specifies whether disk encryption should be enabled on the virtual machine.
* **keyEncryptionKey**: [KeyVaultKeyReference](#keyvaultkeyreference): Specifies the location of the key encryption key in Key Vault.

## DiskInstanceView
### Properties
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings)[]: Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15
* **name**: string: The disk name.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## DiskRestorePointAttributes
### Properties
* **encryption**: [RestorePointEncryption](#restorepointencryption): Encryption at rest settings for disk restore point. It is an optional property that can be specified in the input while creating a restore point.
* **id**: string (ReadOnly): Resource Id
* **sourceDiskRestorePoint**: [ApiEntityReference](#apientityreference): Resource Id of the source disk restore point.

## DiskRestorePointInstanceView
### Properties
* **id**: string: Disk restore point Id.
* **replicationStatus**: [DiskRestorePointReplicationStatus](#diskrestorepointreplicationstatus): The disk restore point replication status information.

## DiskRestorePointReplicationStatus
### Properties
* **completionPercent**: int: Replication completion percentage.
* **status**: [InstanceViewStatus](#instanceviewstatus): The resource status information.

## EncryptionIdentity
### Properties
* **userAssignedIdentityResourceId**: string: Specifies ARM Resource ID of one of the user identities associated with the VM.

## EventGridAndResourceGraph
### Properties
* **enable**: bool: Specifies if event grid and resource graph is enabled for Scheduled event related configurations.

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'EdgeZone' | string: The type of the extended location.

## HardwareProfile
### Properties
* **vmSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B1ms' | 'Standard_B1s' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS13' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13_v2' | 'Standard_DS14' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32-16_v3' | 'Standard_E32-8s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS5' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6' | string: Specifies the size of the virtual machine. The enum data type is currently deprecated and will be removed by December 23rd 2023. The recommended way to get the list of available sizes is using these APIs: [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes), [List all available virtual machine sizes in a region]( https://docs.microsoft.com/rest/api/compute/resourceskus/list), [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes). For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/sizes). The available VM sizes depend on region and availability set.
* **vmSizeProperties**: [VMSizeProperties](#vmsizeproperties): Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-07-01. This feature is still in preview mode and is not supported for VirtualMachineScaleSet. Please follow the instructions in [VM Customization](https://aka.ms/vmcustomization) for more details.

## ImageDataDisk
### Properties
* **blobUri**: string: The Virtual Hard Disk.
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Specifies the customer managed disk encryption set resource id for the managed image disk.
* **diskSizeGB**: int: Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB.
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [SubResource](#subresource): The managedDisk.
* **snapshot**: [SubResource](#subresource): The snapshot.
* **storageAccountType**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.

## ImageOSDisk
### Properties
* **blobUri**: string: The Virtual Hard Disk.
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Specifies the customer managed disk encryption set resource id for the managed image disk.
* **diskSizeGB**: int: Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB.
* **managedDisk**: [SubResource](#subresource): The managedDisk.
* **osState**: 'Generalized' | 'Specialized' (Required): The OS State. For managed images, use Generalized.
* **osType**: 'Linux' | 'Windows' (Required): This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. Possible values are: **Windows,** **Linux.**
* **snapshot**: [SubResource](#subresource): The snapshot.
* **storageAccountType**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.

## ImageProperties
### Properties
* **hyperVGeneration**: 'V1' | 'V2' | string: Specifies the HyperVGenerationType of the VirtualMachine created from the image. From API Version 2019-03-01 if the image source is a blob, then we need the user to specify the value, if the source is managed resource like disk or snapshot, we may require the user to specify the property if we cannot deduce it from the source managed resource.
* **provisioningState**: string (ReadOnly): The provisioning state.
* **sourceVirtualMachine**: [SubResource](#subresource): The source virtual machine from which Image is created.
* **storageProfile**: [ImageStorageProfile](#imagestorageprofile): Specifies the storage settings for the virtual machine disks.

## ImageReference
### Properties
* **communityGalleryImageId**: string: Specified the community gallery image unique id for vm deployment. This can be fetched from community gallery image GET call.
* **exactVersion**: string (ReadOnly): Specifies in decimal numbers, the version of platform image or marketplace image used to create the virtual machine. This readonly field differs from 'version', only if the value specified in 'version' field is 'latest'.
* **id**: string: Resource Id
* **offer**: string: Specifies the offer of the platform image or marketplace image used to create the virtual machine.
* **publisher**: string: The image publisher.
* **sharedGalleryImageId**: string: Specified the shared gallery image unique id for vm deployment. This can be fetched from shared gallery image GET call.
* **sku**: string: The image SKU.
* **version**: string: Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. Please do not use field 'version' for gallery image deployment, gallery image should always use 'id' field for deployment, to use 'latest' version of gallery image, just set '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}' in the 'id' field without version input.

## ImageStorageProfile
### Properties
* **dataDisks**: [ImageDataDisk](#imagedatadisk)[]: Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
* **osDisk**: [ImageOSDisk](#imageosdisk): Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
* **zoneResilient**: bool: Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS).

## InnerError
### Properties
* **errordetail**: string: The internal error message or exception dump.
* **exceptiontype**: string: The exception type.

## InstanceViewStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning': The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required): The URL referencing a key encryption key in Key Vault.
* **sourceVault**: [SubResource](#subresource) (Required): The relative URL of the Key Vault containing the key.

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required): The URL referencing a secret in a Key Vault.
* **sourceVault**: [SubResource](#subresource) (Required): The relative URL of the Key Vault containing the secret.

## LastPatchInstallationSummary
### Properties
* **error**: [ApiError](#apierror) (ReadOnly): The errors that were encountered during execution of the operation. The details array contains the list of them.
* **excludedPatchCount**: int (ReadOnly): The number of all available patches but excluded explicitly by a customer-specified exclusion list match.
* **failedPatchCount**: int (ReadOnly): The count of patches that failed installation.
* **installationActivityId**: string (ReadOnly): The activity ID of the operation that produced this result. It is used to correlate across CRP and extension logs.
* **installedPatchCount**: int (ReadOnly): The count of patches that successfully installed.
* **lastModifiedTime**: string (ReadOnly): The UTC timestamp when the operation began.
* **maintenanceWindowExceeded**: bool (ReadOnly): Describes whether the operation ran out of time before it completed all its intended actions
* **notSelectedPatchCount**: int (ReadOnly): The number of all available patches but not going to be installed because it didn't match a classification or inclusion list entry.
* **pendingPatchCount**: int (ReadOnly): The number of all available patches expected to be installed over the course of the patch installation operation.
* **startTime**: string (ReadOnly): The UTC timestamp when the operation began.
* **status**: 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string (ReadOnly): The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Unknown", "Failed", "Succeeded", or "CompletedWithWarnings."

## LinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool: Specifies whether password authentication should be disabled.
* **enableVMAgentPlatformUpdates**: bool: Indicates whether VMAgent Platform Updates is enabled for the Linux virtual machine. Default value is false.
* **patchSettings**: [LinuxPatchSettings](#linuxpatchsettings): [Preview Feature] Specifies settings related to VM Guest Patching on Linux.
* **provisionVMAgent**: bool: Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
* **ssh**: [SshConfiguration](#sshconfiguration): Specifies the ssh key configuration for a Linux OS.

## LinuxPatchSettings
### Properties
* **assessmentMode**: 'AutomaticByPlatform' | 'ImageDefault' | string: Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine. <br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
* **automaticByPlatformSettings**: [LinuxVMGuestPatchAutomaticByPlatformSettings](#linuxvmguestpatchautomaticbyplatformsettings): Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Linux.
* **patchMode**: 'AutomaticByPlatform' | 'ImageDefault' | string: Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The virtual machine's default patching configuration is used. <br /><br /> **AutomaticByPlatform** - The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true

## LinuxVMGuestPatchAutomaticByPlatformSettings
### Properties
* **bypassPlatformSafetyChecksOnUserSchedule**: bool: Enables customer to schedule patching without accidental upgrades
* **rebootSetting**: 'Always' | 'IfRequired' | 'Never' | 'Unknown' | string: Specifies the reboot setting for all AutomaticByPlatform patch installation operations.

## MaintenanceRedeployStatus
### Properties
* **isCustomerInitiatedMaintenanceAllowed**: bool: True, if customer is allowed to perform Maintenance.
* **lastOperationMessage**: string: Message returned for the last Maintenance Operation.
* **lastOperationResultCode**: 'MaintenanceAborted' | 'MaintenanceCompleted' | 'None' | 'RetryLater': The Last Maintenance Operation Result Code.
* **maintenanceWindowEndTime**: string: End Time for the Maintenance Window.
* **maintenanceWindowStartTime**: string: Start Time for the Maintenance Window.
* **preMaintenanceWindowEndTime**: string: End Time for the Pre Maintenance Window.
* **preMaintenanceWindowStartTime**: string: Start Time for the Pre Maintenance Window.

## ManagedDiskParameters
### Properties
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Specifies the customer managed disk encryption set resource id for the managed disk.
* **id**: string: Resource Id
* **securityProfile**: [VMDiskSecurityProfile](#vmdisksecurityprofile): Specifies the security profile for the managed disk.
* **storageAccountType**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.

## NetworkInterfaceReference
### Properties
* **id**: string: Resource Id
* **properties**: [NetworkInterfaceReferenceProperties](#networkinterfacereferenceproperties): Describes a network interface reference properties.

## NetworkInterfaceReferenceProperties
### Properties
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the network interface when the VM is deleted
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## NetworkProfile
### Properties
* **networkApiVersion**: '2020-11-01' | string: specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations
* **networkInterfaceConfigurations**: [VirtualMachineNetworkInterfaceConfiguration](#virtualmachinenetworkinterfaceconfiguration)[]: Specifies the networking configurations that will be used to create the virtual machine networking resources.
* **networkInterfaces**: [NetworkInterfaceReference](#networkinterfacereference)[]: Specifies the list of resource Ids for the network interfaces associated with the virtual machine.

## OSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The defaulting behavior is: **None for Standard storage. ReadOnly for Premium storage.**
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Restore' | string (Required): Specifies how the virtual machine disk should be created. Possible values are **Attach:** This value is used when you are using a specialized disk to create the virtual machine. **FromImage:** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described.
* **deleteOption**: 'Delete' | 'Detach' | string: Specifies whether OS Disk should be deleted or detached upon VM deletion. Possible values are: **Delete.** If this value is used, the OS disk is deleted when VM is deleted. **Detach.** If this value is used, the os disk is retained after VM is deleted. The default value is set to **Detach**. For an ephemeral OS Disk, the default value is set to **Delete**. The user cannot change the delete option for an ephemeral OS Disk.
* **diffDiskSettings**: [DiffDiskSettings](#diffdisksettings): Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings): Specifies the encryption settings for the OS Disk. Minimum api-version: 2015-06-15.
* **image**: [VirtualHardDisk](#virtualharddisk): The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **osType**: 'Linux' | 'Windows': This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**
* **vhd**: [VirtualHardDisk](#virtualharddisk): The virtual hard disk.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## OSImageNotificationProfile
### Properties
* **enable**: bool: Specifies whether the OS Image Scheduled event is enabled or disabled.
* **notBeforeTimeout**: string: Length of time a Virtual Machine being reimaged or having its OS upgraded will have to potentially approve the OS Image Scheduled Event before the event is auto approved (timed out). The configuration is specified in ISO 8601 format, and the value must be 15 minutes (PT15M)

## OSProfile
### Properties
* **adminPassword**: string {sensitive}: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters.
* **allowExtensionOperations**: bool: Specifies whether extension operations should be allowed on the virtual machine. This may only be set to False when no extensions are present on the virtual machine.
* **computerName**: string: Specifies the host OS name of the virtual machine. This name cannot be updated after the VM is created. **Max-length (Windows):** 15 characters. **Max-length (Linux):** 64 characters. For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/azure-resource-manager/management/resource-name-rules).
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. **Note: Do not pass any secrets or passwords in customData property.** This property cannot be updated after the VM is created. The property 'customData' is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/blog/custom-data-and-cloud-init-on-windows-azure/). For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init).
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
* **requireGuestProvisionSignal**: bool: Optional property which must either be set to True or omitted.
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]: Specifies set of certificates that should be installed onto the virtual machine. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Specifies Windows operating system settings on the virtual machine.

## PatchSettings
### Properties
* **assessmentMode**: 'AutomaticByPlatform' | 'ImageDefault' | string: Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine.<br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
* **automaticByPlatformSettings**: [WindowsVMGuestPatchAutomaticByPlatformSettings](#windowsvmguestpatchautomaticbyplatformsettings): Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Windows.
* **enableHotpatching**: bool: Enables customers to patch their Azure VMs without requiring a reboot. For enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode' must be set to 'AutomaticByPlatform'.
* **patchMode**: 'AutomaticByOS' | 'AutomaticByPlatform' | 'Manual' | string: Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true

## Plan
### Properties
* **name**: string: The plan ID.
* **product**: string: Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
* **promotionCode**: string: The promotion code.
* **publisher**: string: The publisher ID.

## PriorityMixPolicy
### Properties
* **baseRegularPriorityCount**: int {minValue: 0}: The base number of regular priority VMs that will be created in this scale set as it scales out.
* **regularPriorityPercentageAboveBase**: int {minValue: 0, maxValue: 100}: The percentage of VM instances, after the base regular priority count has been reached, that are expected to use regular priority.

## ProximityPlacementGroupProperties
### Properties
* **availabilitySets**: [SubResourceWithColocationStatus](#subresourcewithcolocationstatus)[] (ReadOnly): A list of references to all availability sets in the proximity placement group.
* **colocationStatus**: [InstanceViewStatus](#instanceviewstatus): Describes colocation status of the Proximity Placement Group.
* **intent**: [ProximityPlacementGroupPropertiesIntent](#proximityplacementgrouppropertiesintent): Specifies the user intent of the proximity placement group.
* **proximityPlacementGroupType**: 'Standard' | 'Ultra' | string: Specifies the type of the proximity placement group. Possible values are: **Standard** : Co-locate resources within an Azure region or Availability Zone. **Ultra** : For future use.
* **virtualMachines**: [SubResourceWithColocationStatus](#subresourcewithcolocationstatus)[] (ReadOnly): A list of references to all virtual machines in the proximity placement group.
* **virtualMachineScaleSets**: [SubResourceWithColocationStatus](#subresourcewithcolocationstatus)[] (ReadOnly): A list of references to all virtual machine scale sets in the proximity placement group.

## ProximityPlacementGroupPropertiesIntent
### Properties
* **vmSizes**: string[]: Specifies possible sizes of virtual machines that can be created in the proximity placement group.

## ProxyAgentSettings
### Properties
* **enabled**: bool: Specifies whether ProxyAgent feature should be enabled on the virtual machine or virtual machine scale set.
* **keyIncarnationId**: int: Increase the value of this property allows user to reset the key used for securing communication channel between guest and host.
* **mode**: 'Audit' | 'Enforce' | string: Specifies the mode that ProxyAgent will execute on if the feature is enabled. ProxyAgent will start to audit or monitor but not enforce access control over requests to host endpoints in Audit mode, while in Enforce mode it will enforce access control. The default value is Enforce mode.

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard' | string: Specify public IP sku name
* **tier**: 'Global' | 'Regional' | string: Specify public IP sku tier

## ResiliencyPolicy
### Properties
* **resilientVMCreationPolicy**: [ResilientVMCreationPolicy](#resilientvmcreationpolicy): The configuration parameters used while performing resilient VM creation.
* **resilientVMDeletionPolicy**: [ResilientVMDeletionPolicy](#resilientvmdeletionpolicy): The configuration parameters used while performing resilient VM deletion.

## ResilientVMCreationPolicy
### Properties
* **enabled**: bool: Specifies whether resilient VM creation should be enabled on the virtual machine scale set. The default value is false.

## ResilientVMDeletionPolicy
### Properties
* **enabled**: bool: Specifies whether resilient VM deletion should be enabled on the virtual machine scale set. The default value is false.

## ResourceSharingProfile
### Properties
* **subscriptionIds**: [SubResource](#subresource)[]: Specifies an array of subscription resource IDs that capacity reservation group is shared with. **Note:** Minimum api-version: 2024-03-01. Please refer to https://aka.ms/computereservationsharing for more details.

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

## ResourceWithOptionalLocationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceWithOptionalLocationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RestorePoint
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string (ReadOnly): Resource name
* **properties**: [RestorePointProperties](#restorepointproperties): The restore point properties.
* **type**: string (ReadOnly): Resource type

## RestorePointCollectionProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the restore point collection.
* **restorePointCollectionId**: string (ReadOnly): The unique id of the restore point collection.
* **restorePoints**: [RestorePoint](#restorepoint)[] (ReadOnly): A list containing all restore points created under this restore point collection.
* **source**: [RestorePointCollectionSourceProperties](#restorepointcollectionsourceproperties): The properties of the source resource that this restore point collection is created from.

## RestorePointCollectionSourceProperties
### Properties
* **id**: string: Resource Id of the source resource used to create this restore point collection
* **location**: string (ReadOnly): Location of the source resource used to create this restore point collection.

## RestorePointEncryption
### Properties
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. **Note:** The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
* **type**: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys' | 'EncryptionAtRestWithPlatformKey' | string: The type of key used to encrypt the data of the disk restore point.

## RestorePointInstanceView
### Properties
* **diskRestorePoints**: [DiskRestorePointInstanceView](#diskrestorepointinstanceview)[]: The disk restore points information.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## RestorePointProperties
### Properties
* **consistencyMode**: 'ApplicationConsistent' | 'CrashConsistent' | 'FileSystemConsistent' | string: ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer to https://aka.ms/RestorePoints for more details.
* **excludeDisks**: [ApiEntityReference](#apientityreference)[]: List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included.
* **instanceView**: [RestorePointInstanceView](#restorepointinstanceview) (ReadOnly): The restore point instance view.
* **provisioningState**: string (ReadOnly): Gets the provisioning state of the restore point.
* **sourceMetadata**: [RestorePointSourceMetadata](#restorepointsourcemetadata): Gets the details of the VM captured at the time of the restore point creation.
* **sourceRestorePoint**: [ApiEntityReference](#apientityreference): Resource Id of the source restore point from which a copy needs to be created.
* **timeCreated**: string: Gets the creation time of the restore point.

## RestorePointSourceMetadata
### Properties
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile) (ReadOnly): Gets the diagnostics profile.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile) (ReadOnly): Gets the hardware profile.
* **hyperVGeneration**: 'V1' | 'V2' | string (ReadOnly): HyperVGeneration of the source VM for which restore point is captured.
* **licenseType**: string (ReadOnly): Gets the license type, which is for bring your own license scenario.
* **location**: string (ReadOnly): Location of the VM from which the restore point was created.
* **osProfile**: [OSProfile](#osprofile) (ReadOnly): Gets the OS profile.
* **securityProfile**: [SecurityProfile](#securityprofile) (ReadOnly): Gets the security profile.
* **storageProfile**: [RestorePointSourceVMStorageProfile](#restorepointsourcevmstorageprofile): Gets the storage profile.
* **userData**: string (ReadOnly): UserData associated with the source VM for which restore point is captured, which is a base-64 encoded value.
* **vmId**: string (ReadOnly): Gets the virtual machine unique id.

## RestorePointSourceVMDataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite' (ReadOnly): Gets the caching type.
* **diskRestorePoint**: [DiskRestorePointAttributes](#diskrestorepointattributes): Contains Disk Restore Point properties.
* **diskSizeGB**: int (ReadOnly): Gets the initial disk size in GB for blank data disks, and the new desired size for existing OS and Data disks.
* **lun**: int (ReadOnly): Gets the logical unit number.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): Contains the managed disk details.
* **name**: string (ReadOnly): Gets the disk name.
* **writeAcceleratorEnabled**: bool (ReadOnly): Shows true if the disk is write-accelerator enabled.

## RestorePointSourceVmosDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite' (ReadOnly): Gets the caching type.
* **diskRestorePoint**: [DiskRestorePointAttributes](#diskrestorepointattributes): Contains Disk Restore Point properties.
* **diskSizeGB**: int (ReadOnly): Gets the disk size in GB.
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings) (ReadOnly): Gets the disk encryption settings.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): Gets the managed disk details
* **name**: string (ReadOnly): Gets the disk name.
* **osType**: 'Linux' | 'Windows' | string (ReadOnly): Gets the Operating System type.
* **writeAcceleratorEnabled**: bool (ReadOnly): Shows true if the disk is write-accelerator enabled.

## RestorePointSourceVMStorageProfile
### Properties
* **dataDisks**: [RestorePointSourceVMDataDisk](#restorepointsourcevmdatadisk)[]: Gets the data disks of the VM captured at the time of the restore point creation.
* **diskControllerType**: 'NVMe' | 'SCSI' | string (ReadOnly): Gets the disk controller type of the VM captured at the time of the restore point creation.
* **osDisk**: [RestorePointSourceVmosDisk](#restorepointsourcevmosdisk): Gets the OS disk of the VM captured at the time of the restore point creation.

## RollingUpgradePolicy
### Properties
* **enableCrossZoneUpgrade**: bool: Allow VMSS to ignore AZ boundaries when constructing upgrade batches. Take into consideration the Update Domain and maxBatchInstancePercent to determine the batch size.
* **maxBatchInstancePercent**: int {minValue: 5, maxValue: 100}: The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%.
* **maxSurge**: bool: Create new virtual machines to upgrade the scale set, rather than updating the existing virtual machines. Existing virtual machines will be deleted once the new virtual machines are created for each batch.
* **maxUnhealthyInstancePercent**: int {minValue: 5, maxValue: 100}: The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%.
* **maxUnhealthyUpgradedInstancePercent**: int {minValue: 0, maxValue: 100}: The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%.
* **pauseTimeBetweenBatches**: string: The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S).
* **prioritizeUnhealthyInstances**: bool: Upgrade all unhealthy instances in a scale set before any healthy instances.
* **rollbackFailedInstancesOnPolicyBreach**: bool: Rollback failed instances to previous model if the Rolling Upgrade policy is violated.

## RollingUpgradeProgressInfo
### Properties
* **failedInstanceCount**: int (ReadOnly): The number of instances that have failed to be upgraded successfully.
* **inProgressInstanceCount**: int (ReadOnly): The number of instances that are currently being upgraded.
* **pendingInstanceCount**: int (ReadOnly): The number of instances that have not yet begun to be upgraded.
* **successfulInstanceCount**: int (ReadOnly): The number of instances that have been successfully upgraded.

## RollingUpgradeRunningStatus
### Properties
* **code**: 'Cancelled' | 'Completed' | 'Faulted' | 'RollingForward' (ReadOnly): Code indicating the current status of the upgrade.
* **lastAction**: 'Cancel' | 'Start' (ReadOnly): The last action performed on the rolling upgrade.
* **lastActionTime**: string (ReadOnly): Last action time of the upgrade.
* **startTime**: string (ReadOnly): Start time of the upgrade.

## RollingUpgradeStatusInfoProperties
### Properties
* **error**: [ApiError](#apierror) (ReadOnly): Error details for this upgrade, if there are any.
* **policy**: [RollingUpgradePolicy](#rollingupgradepolicy) (ReadOnly): The rolling upgrade policies applied for this upgrade.
* **progress**: [RollingUpgradeProgressInfo](#rollingupgradeprogressinfo) (ReadOnly): Information about the number of virtual machine instances in each upgrade state.
* **runningStatus**: [RollingUpgradeRunningStatus](#rollingupgraderunningstatus) (ReadOnly): Information about the current running state of the overall upgrade.

## RunCommandInputParameter
### Properties
* **name**: string (Required): The run command parameter name.
* **value**: string (Required): The run command parameter value.

## RunCommandManagedIdentity
### Properties
* **clientId**: string: Client Id (GUID value) of the user-assigned managed identity. ObjectId should not be used if this is provided.
* **objectId**: string: Object Id (GUID value) of the user-assigned managed identity. ClientId should not be used if this is provided.

## ScaleInPolicy
### Properties
* **forceDeletion**: bool: This property allows you to specify if virtual machines chosen for removal have to be force deleted when a virtual machine scale set is being scaled-in.(Feature in Preview)
* **rules**: ('Default' | 'NewestVM' | 'OldestVM' | string)[]: The rules to be followed when scaling-in a virtual machine scale set. <br><br> Possible values are: <br><br> **Default** When a virtual machine scale set is scaled in, the scale set will first be balanced across zones if it is a zonal scale set. Then, it will be balanced across Fault Domains as far as possible. Within each Fault Domain, the virtual machines chosen for removal will be the newest ones that are not protected from scale-in. <br><br> **OldestVM** When a virtual machine scale set is being scaled-in, the oldest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the oldest virtual machines that are not protected will be chosen for removal. <br><br> **NewestVM** When a virtual machine scale set is being scaled-in, the newest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the newest virtual machines that are not protected will be chosen for removal. <br><br>

## ScheduledEventsAdditionalPublishingTargets
### Properties
* **eventGridAndResourceGraph**: [EventGridAndResourceGraph](#eventgridandresourcegraph): The configuration parameters used while creating eventGridAndResourceGraph Scheduled Event setting.

## ScheduledEventsPolicy
### Properties
* **scheduledEventsAdditionalPublishingTargets**: [ScheduledEventsAdditionalPublishingTargets](#scheduledeventsadditionalpublishingtargets): The configuration parameters used while publishing scheduledEventsAdditionalPublishingTargets.
* **userInitiatedReboot**: [UserInitiatedReboot](#userinitiatedreboot): The configuration parameters used while creating userInitiatedReboot scheduled event setting creation.
* **userInitiatedRedeploy**: [UserInitiatedRedeploy](#userinitiatedredeploy): The configuration parameters used while creating userInitiatedRedeploy scheduled event setting creation.

## ScheduledEventsProfile
### Properties
* **osImageNotificationProfile**: [OSImageNotificationProfile](#osimagenotificationprofile): Specifies OS Image Scheduled Event related configurations.
* **terminateNotificationProfile**: [TerminateNotificationProfile](#terminatenotificationprofile): Specifies Terminate Scheduled Event related configurations.

## SecurityPostureReference
### Properties
* **excludeExtensions**: string[]: The list of virtual machine extension names to exclude when applying the security posture.
* **id**: string (Required): The security posture reference id in the form of /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|latest
* **isOverridable**: bool: Whether the security posture can be overridden by the user.

## SecurityProfile
### Properties
* **encryptionAtHost**: bool: This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. The default behavior is: The Encryption at host will be disabled unless this property is set to true for the resource.
* **encryptionIdentity**: [EncryptionIdentity](#encryptionidentity): Specifies the Managed Identity used by ADE to get access token for keyvault operations.
* **proxyAgentSettings**: [ProxyAgentSettings](#proxyagentsettings): Specifies ProxyAgent settings while creating the virtual machine. Minimum api-version: 2024-03-01.
* **securityType**: 'ConfidentialVM' | 'TrustedLaunch' | string: Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set.
* **uefiSettings**: [UefiSettings](#uefisettings): Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum api-version: 2020-12-01.

## ServiceArtifactReference
### Properties
* **id**: string: The service artifact reference id in the form of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName}

## Sku
### Properties
* **capacity**: int: Specifies the number of virtual machines in the scale set.
* **name**: string: The sku name.
* **tier**: string: Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**

## SpotRestorePolicy
### Properties
* **enabled**: bool: Enables the Spot-Try-Restore feature where evicted VMSS SPOT instances will be tried to be restored opportunistically based on capacity availability and pricing constraints
* **restoreTimeout**: string: Timeout value expressed as an ISO 8601 time duration after which the platform will not try to restore the VMSS SPOT instances

## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys used to authenticate with linux based VMs.

## SshPublicKey
### Properties
* **keyData**: string: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
* **path**: string: Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## SshPublicKeyResourceProperties
### Properties
* **publicKey**: string: SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format.

## StorageProfile
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]: Specifies the parameters that are used to add a data disk to a virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
* **diskControllerType**: 'NVMe' | 'SCSI' | string: Specifies the disk controller type configured for the VM. **Note:** This property will be set to the default disk controller type if not specified provided virtual machine is being created with 'hyperVGeneration' set to V2 based on the capabilities of the operating system disk and VM size from the the specified minimum api version. You need to deallocate the VM before updating its disk controller type unless you are updating the VM size in the VM configuration which implicitly deallocates and reallocates the VM. Minimum api-version: 2022-08-01.
* **imageReference**: [ImageReference](#imagereference): Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
* **osDisk**: [OSDisk](#osdisk): Specifies information about the operating system disk used by the virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).

## SubResource
### Properties
* **id**: string: Resource Id

## SubResourceReadOnly
### Properties
* **id**: string (ReadOnly): Resource Id

## SubResourceWithColocationStatus
### Properties
* **colocationStatus**: [InstanceViewStatus](#instanceviewstatus): Describes colocation status of a resource in the Proximity Placement Group.
* **id**: string: Resource Id

## TerminateNotificationProfile
### Properties
* **enable**: bool: Specifies whether the Terminate Scheduled event is enabled or disabled.
* **notBeforeTimeout**: string: Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M)

## UefiSettings
### Properties
* **secureBootEnabled**: bool: Specifies whether secure boot should be enabled on the virtual machine. Minimum api-version: 2020-12-01.
* **vTpmEnabled**: bool: Specifies whether vTPM should be enabled on the virtual machine. Minimum api-version: 2020-12-01.

## UpgradePolicy
### Properties
* **automaticOSUpgradePolicy**: [AutomaticOSUpgradePolicy](#automaticosupgradepolicy): Configuration parameters used for performing automatic OS Upgrade.
* **mode**: 'Automatic' | 'Manual' | 'Rolling': Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
* **rollingUpgradePolicy**: [RollingUpgradePolicy](#rollingupgradepolicy): The configuration parameters used while performing a rolling upgrade.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesValue](#userassignedidentitiesvalue)

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesValue](#userassignedidentitiesvalue)

## UserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## UserInitiatedReboot
### Properties
* **automaticallyApprove**: bool: Specifies Reboot Scheduled Event related configurations.

## UserInitiatedRedeploy
### Properties
* **automaticallyApprove**: bool: Specifies Redeploy Scheduled Event related configurations.

## VaultCertificate
### Properties
* **certificateStore**: string: For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem formatted.
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).

## VaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource): The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[]: The list of key vault references in SourceVault which contain certificates.

## VirtualHardDisk
### Properties
* **uri**: string: Specifies the virtual hard disk's uri.

## VirtualMachineAgentInstanceView
### Properties
* **extensionHandlers**: [VirtualMachineExtensionHandlerInstanceView](#virtualmachineextensionhandlerinstanceview)[]: The virtual machine extension handler instance view.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmAgentVersion**: string: The VM Agent full version.

## VirtualMachineExtension
### Properties
* **id**: string (ReadOnly): Resource Id
* **location**: string: Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **tags**: [ResourceWithOptionalLocationTags](#resourcewithoptionallocationtags): Resource tags
* **type**: string (ReadOnly): Resource type

## VirtualMachineExtensionHandlerInstanceView
### Properties
* **status**: [InstanceViewStatus](#instanceviewstatus): The extension handler status.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineExtensionImageProperties
### Properties
* **computeRole**: string (Required): The type of role (IaaS or PaaS) this extension supports.
* **handlerSchema**: string (Required): The schema defined by publisher, where extension consumers should provide settings in a matching schema.
* **operatingSystem**: string (Required): The operating system this extension supports.
* **supportsMultipleExtensions**: bool: Whether the handler can support multiple extensions.
* **vmScaleSetEnabled**: bool: Whether the extension can be used on xRP VMScaleSets. By default existing extensions are usable on scalesets, but there might be cases where a publisher wants to explicitly indicate the extension is only enabled for CRP VMs but not VMSS.

## VirtualMachineExtensionInstanceView
### Properties
* **name**: string: The virtual machine extension name.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **substatuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **enableAutomaticUpgrade**: bool: Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **instanceView**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview): The virtual machine extension instance view.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **protectedSettingsFromKeyVault**: [KeyVaultSecretReference](#keyvaultsecretreference): The extensions protected settings that are passed by reference, and consumed from key vault
* **provisionAfterExtensions**: string[]: Collection of extension names after which this extension needs to be provisioned.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **suppressFailures**: bool: Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineHealthStatus
### Properties
* **status**: [InstanceViewStatus](#instanceviewstatus) (ReadOnly): The health status information for the VM.

## VirtualMachineIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of virtual machine identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the virtual machine. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The list of user identities associated with the Virtual Machine. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## VirtualMachineInstanceView
### Properties
* **assignedHost**: string (ReadOnly): Resource id of the dedicated host, on which the virtual machine is allocated through automatic placement, when the virtual machine is associated with a dedicated host group that has automatic placement enabled. Minimum api-version: 2020-06-01.
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview): Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
* **computerName**: string: The computer name assigned to the virtual machine.
* **disks**: [DiskInstanceView](#diskinstanceview)[]: The virtual machine disk information.
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]: The extensions information.
* **hyperVGeneration**: 'V1' | 'V2' | string: Specifies the HyperVGeneration Type associated with a resource
* **isVMInStandbyPool**: bool (ReadOnly): [Preview Feature] Specifies whether the VM is currently in or out of the Standby Pool.
* **maintenanceRedeployStatus**: [MaintenanceRedeployStatus](#maintenanceredeploystatus): The Maintenance Operation status on the virtual machine.
* **osName**: string: The Operating System running on the virtual machine.
* **osVersion**: string: The version of Operating System running on the virtual machine.
* **patchStatus**: [VirtualMachinePatchStatus](#virtualmachinepatchstatus): [Preview Feature] The status of virtual machine patch operations.
* **platformFaultDomain**: int: Specifies the fault domain of the virtual machine.
* **platformUpdateDomain**: int: Specifies the update domain of the virtual machine.
* **rdpThumbPrint**: string: The Remote desktop certificate thumbprint.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmAgent**: [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview): The VM Agent running on the virtual machine.
* **vmHealth**: [VirtualMachineHealthStatus](#virtualmachinehealthstatus) (ReadOnly): The health status for the VM.

## VirtualMachineIpTag
### Properties
* **ipTagType**: string: IP tag type. Example: FirstPartyUsage.
* **tag**: string: IP tag associated with the public IP. Example: SQL, Storage etc.

## VirtualMachineNetworkInterfaceConfiguration
### Properties
* **name**: string (Required): The network interface configuration name.
* **properties**: [VirtualMachineNetworkInterfaceConfigurationProperties](#virtualmachinenetworkinterfaceconfigurationproperties): Describes a virtual machine network profile's IP configuration.

## VirtualMachineNetworkInterfaceConfigurationProperties
### Properties
* **auxiliaryMode**: 'AcceleratedConnections' | 'Floating' | 'None' | string: Specifies whether the Auxiliary mode is enabled for the Network Interface resource.
* **auxiliarySku**: 'A1' | 'A2' | 'A4' | 'A8' | 'None' | string: Specifies whether the Auxiliary sku is enabled for the Network Interface resource.
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the network interface when the VM is deleted
* **disableTcpStateTracking**: bool: Specifies whether the network interface is disabled for tcp state tracking.
* **dnsSettings**: [VirtualMachineNetworkInterfaceDnsSettingsConfiguration](#virtualmachinenetworkinterfacednssettingsconfiguration): The dns settings to be applied on the network interfaces.
* **dscpConfiguration**: [SubResource](#subresource)
* **enableAcceleratedNetworking**: bool: Specifies whether the network interface is accelerated networking-enabled.
* **enableFpga**: bool: Specifies whether the network interface is FPGA networking-enabled.
* **enableIPForwarding**: bool: Whether IP forwarding enabled on this NIC.
* **ipConfigurations**: [VirtualMachineNetworkInterfaceIPConfiguration](#virtualmachinenetworkinterfaceipconfiguration)[] (Required): Specifies the IP configurations of the network interface.
* **networkSecurityGroup**: [SubResource](#subresource): The network security group.
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## VirtualMachineNetworkInterfaceDnsSettingsConfiguration
### Properties
* **dnsServers**: string[]: List of DNS servers IP addresses

## VirtualMachineNetworkInterfaceIPConfiguration
### Properties
* **name**: string (Required): The IP configuration name.
* **properties**: [VirtualMachineNetworkInterfaceIPConfigurationProperties](#virtualmachinenetworkinterfaceipconfigurationproperties): Describes a virtual machine network interface IP configuration properties.

## VirtualMachineNetworkInterfaceIPConfigurationProperties
### Properties
* **applicationGatewayBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of application gateways. A virtual machine can reference backend address pools of multiple application gateways. Multiple virtual machines cannot use the same application gateway.
* **applicationSecurityGroups**: [SubResource](#subresource)[]: Specifies an array of references to application security group.
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of load balancers. A virtual machine can reference backend address pools of one public and one internal load balancer. [Multiple virtual machines cannot use the same basic sku load balancer].
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAddressConfiguration**: [VirtualMachinePublicIPAddressConfiguration](#virtualmachinepublicipaddressconfiguration): The publicIPAddressConfiguration.
* **subnet**: [SubResource](#subresource): Specifies the identifier of the subnet.

## VirtualMachinePatchStatus
### Properties
* **availablePatchSummary**: [AvailablePatchSummary](#availablepatchsummary): The available patch summary of the latest assessment operation for the virtual machine.
* **configurationStatuses**: [InstanceViewStatus](#instanceviewstatus)[] (ReadOnly): The enablement status of the specified patchMode
* **lastPatchInstallationSummary**: [LastPatchInstallationSummary](#lastpatchinstallationsummary): The installation summary of the latest installation operation for the virtual machine.

## VirtualMachineProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities): Specifies additional capabilities enabled or disabled on the virtual machine.
* **applicationProfile**: [ApplicationProfile](#applicationprofile): Specifies the gallery applications that should be made available to the VM/VMSS.
* **availabilitySet**: [SubResource](#subresource): Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. The availability set to which the VM is being added should be under the same resource group as the availability set resource. An existing VM cannot be added to an availability set. This property cannot exist along with a non-null properties.virtualMachineScaleSet reference.
* **billingProfile**: [BillingProfile](#billingprofile): Specifies the billing related details of a Azure Spot virtual machine. Minimum api-version: 2019-03-01.
* **capacityReservation**: [CapacityReservationProfile](#capacityreservationprofile): Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum api-version: 2021-04-01.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
* **evictionPolicy**: 'Deallocate' | 'Delete' | string: Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
* **extensionsTimeBudget**: string: Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the virtual machine.
* **host**: [SubResource](#subresource): Specifies information about the dedicated host that the virtual machine resides in. Minimum api-version: 2018-10-01.
* **hostGroup**: [SubResource](#subresource): Specifies information about the dedicated host group that the virtual machine resides in. **Note:** User cannot specify both host and hostGroup properties. Minimum api-version: 2020-06-01.
* **instanceView**: [VirtualMachineInstanceView](#virtualmachineinstanceview) (ReadOnly): The virtual machine instance view.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces of the virtual machine.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned.
* **platformFaultDomain**: int: Specifies the scale set logical fault domain into which the Virtual Machine will be created. By default, the Virtual Machine will by automatically assigned to a fault domain that best maintains balance across available fault domains. This is applicable only if the 'virtualMachineScaleSet' property of this Virtual Machine is set. The Virtual Machine Scale Set that is referenced, must have 'platformFaultDomainCount' greater than 1. This property cannot be updated once the Virtual Machine is created. Fault domain assignment can be viewed in the Virtual Machine Instance View. Minimum api‐version: 2020‐12‐01.
* **priority**: 'Low' | 'Regular' | 'Spot' | string: Specifies the priority for the virtual machine. Minimum api-version: 2019-03-01
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **proximityPlacementGroup**: [SubResource](#subresource): Specifies information about the proximity placement group that the virtual machine should be assigned to. Minimum api-version: 2018-04-01.
* **scheduledEventsPolicy**: [ScheduledEventsPolicy](#scheduledeventspolicy): Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations for the virtual machine.
* **scheduledEventsProfile**: [ScheduledEventsProfile](#scheduledeventsprofile): Specifies Scheduled Event related configurations.
* **securityProfile**: [SecurityProfile](#securityprofile): Specifies the Security related profile settings for the virtual machine.
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the virtual machine disks.
* **timeCreated**: string (ReadOnly): Specifies the time at which the Virtual Machine resource was created. Minimum api-version: 2021-11-01.
* **userData**: string: UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01.
* **virtualMachineScaleSet**: [SubResource](#subresource): Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. This property cannot exist along with a non-null properties.availabilitySet reference. Minimum api‐version: 2019‐03‐01.
* **vmId**: string (ReadOnly): Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.

## VirtualMachinePublicIPAddressConfiguration
### Properties
* **name**: string (Required): The publicIP address configuration name.
* **properties**: [VirtualMachinePublicIPAddressConfigurationProperties](#virtualmachinepublicipaddressconfigurationproperties): Describes a virtual machines IP Configuration's PublicIPAddress configuration
* **sku**: [PublicIPAddressSku](#publicipaddresssku): Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.

## VirtualMachinePublicIPAddressConfigurationProperties
### Properties
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the public IP address when the VM is deleted
* **dnsSettings**: [VirtualMachinePublicIPAddressDnsSettingsConfiguration](#virtualmachinepublicipaddressdnssettingsconfiguration): The dns settings to be applied on the publicIP addresses .
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipTags**: [VirtualMachineIpTag](#virtualmachineiptag)[]: The list of IP tags associated with the public IP address.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static' | string: Specify the public IP allocation type
* **publicIPPrefix**: [SubResource](#subresource): The PublicIPPrefix from which to allocate publicIP addresses.

## VirtualMachinePublicIPAddressDnsSettingsConfiguration
### Properties
* **domainNameLabel**: string (Required): The Domain name label prefix of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the domain name label and vm network profile unique ID.
* **domainNameLabelScope**: 'NoReuse' | 'ResourceGroupReuse' | 'SubscriptionReuse' | 'TenantReuse' | string: The Domain name label scope of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the hashed domain name label with policy according to the domain name label scope and vm network profile unique ID.

## VirtualMachineRunCommandInstanceView
### Properties
* **endTime**: string: Script end time.
* **error**: string: Script error stream.
* **executionMessage**: string: Communicate script configuration errors or execution messages.
* **executionState**: 'Canceled' | 'Failed' | 'Pending' | 'Running' | 'Succeeded' | 'TimedOut' | 'Unknown' | string: Script execution status.
* **exitCode**: int: Exit code returned from script execution.
* **output**: string: Script output stream.
* **startTime**: string: Script start time.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## VirtualMachineRunCommandProperties
### Properties
* **asyncExecution**: bool: Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete.
* **errorBlobManagedIdentity**: [RunCommandManagedIdentity](#runcommandmanagedidentity): User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged
* **errorBlobUri**: string: Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter.
* **instanceView**: [VirtualMachineRunCommandInstanceView](#virtualmachineruncommandinstanceview) (ReadOnly): The virtual machine run command instance view.
* **outputBlobManagedIdentity**: [RunCommandManagedIdentity](#runcommandmanagedidentity): User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged
* **outputBlobUri**: string: Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter.
* **parameters**: [RunCommandInputParameter](#runcommandinputparameter)[]: The parameters used by the script.
* **protectedParameters**: [RunCommandInputParameter](#runcommandinputparameter)[]: The parameters used by the script.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response. If treatFailureAsDeploymentFailure set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If treatFailureAsDeploymentFailure set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results
* **runAsPassword**: string: Specifies the user account password on the VM when executing the run command.
* **runAsUser**: string: Specifies the user account on the VM when executing the run command.
* **source**: [VirtualMachineRunCommandScriptSource](#virtualmachineruncommandscriptsource): The source of the run command script.
* **timeoutInSeconds**: int: The timeout in seconds to execute the run command.
* **treatFailureAsDeploymentFailure**: bool: Optional. If set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results

## VirtualMachineRunCommandScriptSource
### Properties
* **commandId**: string: Specifies a commandId of predefined built-in script.
* **script**: string: Specifies the script content to be executed on the VM.
* **scriptUri**: string: Specifies the script download location. It can be either SAS URI of an Azure storage blob with read access or public URI.
* **scriptUriManagedIdentity**: [RunCommandManagedIdentity](#runcommandmanagedidentity): User-assigned managed identity that has access to scriptUri in case of Azure storage blob. Use an empty object in case of system-assigned identity. Make sure the Azure storage blob exists, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged.

## VirtualMachineScaleSetDataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Restore' | string (Required): The create option.
* **deleteOption**: 'Delete' | 'Detach' | string: Specifies whether data disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only).<br><br> Possible values: <br><br> **Delete** If this value is used, the data disk is deleted when the VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the data disk is retained after VMSS Flex VM is deleted.<br><br> The default value is set to **Delete**.
* **diskIOPSReadWrite**: int: Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
* **diskMBpsReadWrite**: int: Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property diskSizeGB is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## VirtualMachineScaleSetExtension
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string: The name of the extension.
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties): Describes the properties of a Virtual Machine Scale Set Extension.
* **type**: string (ReadOnly): Resource type

## VirtualMachineScaleSetExtensionProfile
### Properties
* **extensions**: [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)[]: The virtual machine scale set child extension resources.
* **extensionsTimeBudget**: string: Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01.

## VirtualMachineScaleSetExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **enableAutomaticUpgrade**: bool: Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
* **forceUpdateTag**: string: If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **protectedSettingsFromKeyVault**: [KeyVaultSecretReference](#keyvaultsecretreference): The extensions protected settings that are passed by reference, and consumed from key vault
* **provisionAfterExtensions**: string[]: Collection of extension names after which this extension needs to be provisioned.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **suppressFailures**: bool: Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineScaleSetHardwareProfile
### Properties
* **vmSizeProperties**: [VMSizeProperties](#vmsizeproperties): Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-11-01. Please follow the instructions in [VM Customization](https://aka.ms/vmcustomization) for more details.

## VirtualMachineScaleSetIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of virtual machine scale set identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the virtual machine scale set. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set.
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## VirtualMachineScaleSetIPConfiguration
### Properties
* **name**: string (Required): The IP configuration name.
* **properties**: [VirtualMachineScaleSetIPConfigurationProperties](#virtualmachinescalesetipconfigurationproperties): Describes a virtual machine scale set network profile's IP configuration properties.

## VirtualMachineScaleSetIPConfigurationProperties
### Properties
* **applicationGatewayBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway.
* **applicationSecurityGroups**: [SubResource](#subresource)[]: Specifies an array of references to application security group.
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
* **loadBalancerInboundNatPools**: [SubResource](#subresource)[]: Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAddressConfiguration**: [VirtualMachineScaleSetPublicIPAddressConfiguration](#virtualmachinescalesetpublicipaddressconfiguration): The publicIPAddressConfiguration.
* **subnet**: [ApiEntityReference](#apientityreference): Specifies the identifier of the subnet.

## VirtualMachineScaleSetIpTag
### Properties
* **ipTagType**: string: IP tag type. Example: FirstPartyUsage.
* **tag**: string: IP tag associated with the public IP. Example: SQL, Storage etc.

## VirtualMachineScaleSetManagedDiskParameters
### Properties
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Specifies the customer managed disk encryption set resource id for the managed disk.
* **securityProfile**: [VMDiskSecurityProfile](#vmdisksecurityprofile): Specifies the security profile for the managed disk.
* **storageAccountType**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS' | string: Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.

## VirtualMachineScaleSetNetworkConfiguration
### Properties
* **name**: string (Required): The network configuration name.
* **properties**: [VirtualMachineScaleSetNetworkConfigurationProperties](#virtualmachinescalesetnetworkconfigurationproperties): Describes a virtual machine scale set network profile's IP configuration.

## VirtualMachineScaleSetNetworkConfigurationDnsSettings
### Properties
* **dnsServers**: string[]: List of DNS servers IP addresses

## VirtualMachineScaleSetNetworkConfigurationProperties
### Properties
* **auxiliaryMode**: 'AcceleratedConnections' | 'Floating' | 'None' | string: Specifies whether the Auxiliary mode is enabled for the Network Interface resource.
* **auxiliarySku**: 'A1' | 'A2' | 'A4' | 'A8' | 'None' | string: Specifies whether the Auxiliary sku is enabled for the Network Interface resource.
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the network interface when the VM is deleted
* **disableTcpStateTracking**: bool: Specifies whether the network interface is disabled for tcp state tracking.
* **dnsSettings**: [VirtualMachineScaleSetNetworkConfigurationDnsSettings](#virtualmachinescalesetnetworkconfigurationdnssettings): The dns settings to be applied on the network interfaces.
* **enableAcceleratedNetworking**: bool: Specifies whether the network interface is accelerated networking-enabled.
* **enableFpga**: bool: Specifies whether the network interface is FPGA networking-enabled.
* **enableIPForwarding**: bool: Whether IP forwarding enabled on this NIC.
* **ipConfigurations**: [VirtualMachineScaleSetIPConfiguration](#virtualmachinescalesetipconfiguration)[] (Required): Specifies the IP configurations of the network interface.
* **networkSecurityGroup**: [SubResource](#subresource): The network security group.
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## VirtualMachineScaleSetNetworkProfile
### Properties
* **healthProbe**: [ApiEntityReference](#apientityreference): A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'.
* **networkApiVersion**: '2020-11-01' | string: specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations for Virtual Machine Scale Set with orchestration mode 'Flexible'
* **networkInterfaceConfigurations**: [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)[]: The list of network configurations.

## VirtualMachineScaleSetOSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.**
* **createOption**: 'Attach' | 'Copy' | 'Empty' | 'FromImage' | 'Restore' | string (Required): Specifies how the virtual machines in the scale set should be created. The only allowed value is: **FromImage.** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **deleteOption**: 'Delete' | 'Detach' | string: Specifies whether OS Disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only). <br><br> Possible values: <br><br> **Delete** If this value is used, the OS disk is deleted when VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the OS disk is retained after VMSS Flex VM is deleted. <br><br> The default value is set to **Delete**. For an Ephemeral OS Disk, the default value is set to **Delete**. User cannot change the delete option for Ephemeral OS Disk.
* **diffDiskSettings**: [DiffDiskSettings](#diffdisksettings): Specifies the ephemeral disk Settings for the operating system disk used by the virtual machine scale set.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
* **image**: [VirtualHardDisk](#virtualharddisk): Specifies information about the unmanaged user image to base the scale set on.
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters): The managed disk parameters.
* **name**: string: The disk name.
* **osType**: 'Linux' | 'Windows': This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**
* **vhdContainers**: string[]: Specifies the container urls that are used to store operating system disks for the scale set.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## VirtualMachineScaleSetOSProfile
### Properties
* **adminPassword**: string {sensitive}: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters
* **allowExtensionOperations**: bool: Specifies whether extension operations should be allowed on the virtual machine scale set. This may only be set to False when no extensions are present on the virtual machine scale set.
* **computerNamePrefix**: string: Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long.
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init)
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
* **requireGuestProvisionSignal**: bool: Optional property which must either be set to True or omitted.
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]: Specifies set of certificates that should be installed onto the virtual machines in the scale set. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Specifies Windows operating system settings on the virtual machine.

## VirtualMachineScaleSetProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities): Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
* **automaticRepairsPolicy**: [AutomaticRepairsPolicy](#automaticrepairspolicy): Policy for automatic repairs.
* **constrainedMaximumCapacity**: bool: Optional property which must either be set to True or omitted.
* **doNotRunExtensionsOnOverprovisionedVMs**: bool: When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
* **hostGroup**: [SubResource](#subresource): Specifies information about the dedicated host group that the virtual machine scale set resides in. Minimum api-version: 2020-06-01.
* **orchestrationMode**: 'Flexible' | 'Uniform' | string: Specifies the orchestration mode for the virtual machine scale set.
* **overprovision**: bool: Specifies whether the Virtual Machine Scale Set should be overprovisioned.
* **platformFaultDomainCount**: int: Fault Domain count for each placement group.
* **priorityMixPolicy**: [PriorityMixPolicy](#prioritymixpolicy): Specifies the desired targets for mixing Spot and Regular priority VMs within the same VMSS Flex instance.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **proximityPlacementGroup**: [SubResource](#subresource): Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. Minimum api-version: 2018-04-01.
* **resiliencyPolicy**: [ResiliencyPolicy](#resiliencypolicy): Policy for Resiliency
* **scaleInPolicy**: [ScaleInPolicy](#scaleinpolicy): Specifies the policies applied when scaling in Virtual Machines in the Virtual Machine Scale Set.
* **scheduledEventsPolicy**: [ScheduledEventsPolicy](#scheduledeventspolicy): The ScheduledEventsPolicy.
* **singlePlacementGroup**: bool: When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
* **spotRestorePolicy**: [SpotRestorePolicy](#spotrestorepolicy): Specifies the Spot Restore properties for the virtual machine scale set.
* **timeCreated**: string (ReadOnly): Specifies the time at which the Virtual Machine Scale Set resource was created. Minimum api-version: 2021-11-01.
* **uniqueId**: string (ReadOnly): Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
* **upgradePolicy**: [UpgradePolicy](#upgradepolicy): The upgrade policy.
* **virtualMachineProfile**: [VirtualMachineScaleSetVMProfile](#virtualmachinescalesetvmprofile): The virtual machine profile.
* **zoneBalance**: bool: Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. zoneBalance property can only be set if the zones property of the scale set contains more than one zone. If there are no zones or only one zone specified, then zoneBalance property should not be set.

## VirtualMachineScaleSetPublicIPAddressConfiguration
### Properties
* **name**: string (Required): The publicIP address configuration name.
* **properties**: [VirtualMachineScaleSetPublicIPAddressConfigurationProperties](#virtualmachinescalesetpublicipaddressconfigurationproperties): Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
* **sku**: [PublicIPAddressSku](#publicipaddresssku): Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.

## VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings
### Properties
* **domainNameLabel**: string (Required): The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created
* **domainNameLabelScope**: 'NoReuse' | 'ResourceGroupReuse' | 'SubscriptionReuse' | 'TenantReuse' | string: The Domain name label scope.The concatenation of the hashed domain name label that generated according to the policy from domain name label scope and vm index will be the domain name labels of the PublicIPAddress resources that will be created

## VirtualMachineScaleSetPublicIPAddressConfigurationProperties
### Properties
* **deleteOption**: 'Delete' | 'Detach' | string: Specify what happens to the public IP when the VM is deleted
* **dnsSettings**: [VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings](#virtualmachinescalesetpublicipaddressconfigurationdnssettings): The dns settings to be applied on the publicIP addresses .
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipTags**: [VirtualMachineScaleSetIpTag](#virtualmachinescalesetiptag)[]: The list of IP tags associated with the public IP address.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6' | string: Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
* **publicIPPrefix**: [SubResource](#subresource): The PublicIPPrefix from which to allocate publicIP addresses.

## VirtualMachineScaleSetStorageProfile
### Properties
* **dataDisks**: [VirtualMachineScaleSetDataDisk](#virtualmachinescalesetdatadisk)[]: Specifies the parameters that are used to add data disks to the virtual machines in the scale set. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
* **diskControllerType**: string
* **imageReference**: [ImageReference](#imagereference): Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
* **osDisk**: [VirtualMachineScaleSetOSDisk](#virtualmachinescalesetosdisk): Specifies information about the operating system disk used by the virtual machines in the scale set. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).

## VirtualMachineScaleSetVMInstanceView
### Properties
* **assignedHost**: string (ReadOnly): Resource id of the dedicated host, on which the virtual machine is allocated through automatic placement, when the virtual machine is associated with a dedicated host group that has automatic placement enabled. Minimum api-version: 2020-06-01.
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview): Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
* **computerName**: string: Specifies the host OS name of the virtual machine. <br><br> This name cannot be updated after the VM is created. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-infrastructure-subscription-accounts-guidelines?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#1-naming-conventions).
* **disks**: [DiskInstanceView](#diskinstanceview)[]: The disks information.
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]: The extensions information.
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine [V1, V2]
* **maintenanceRedeployStatus**: [MaintenanceRedeployStatus](#maintenanceredeploystatus): The Maintenance Operation status on the virtual machine.
* **osName**: string: The Operating System running on the hybrid machine.
* **osVersion**: string: The version of Operating System running on the hybrid machine.
* **placementGroupId**: string: The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId.
* **platformFaultDomain**: int: The Fault Domain count.
* **platformUpdateDomain**: int: The Update Domain count.
* **rdpThumbPrint**: string: The Remote desktop certificate thumbprint.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmAgent**: [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview): The VM Agent running on the virtual machine.
* **vmHealth**: [VirtualMachineHealthStatus](#virtualmachinehealthstatus) (ReadOnly): The health status for the VM.

## VirtualMachineScaleSetVMNetworkProfileConfiguration
### Properties
* **networkInterfaceConfigurations**: [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)[]: The list of network configurations.

## VirtualMachineScaleSetVMProfile
### Properties
* **applicationProfile**: [ApplicationProfile](#applicationprofile): Specifies the gallery applications that should be made available to the VM/VMSS
* **billingProfile**: [BillingProfile](#billingprofile): Specifies the billing related details of a Azure Spot VMSS. Minimum api-version: 2019-03-01.
* **capacityReservation**: [CapacityReservationProfile](#capacityreservationprofile): Specifies the capacity reservation related details of a scale set. Minimum api-version: 2021-04-01.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
* **evictionPolicy**: 'Deallocate' | 'Delete' | string: Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
* **extensionProfile**: [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile): Specifies a collection of settings for extensions installed on virtual machines in the scale set.
* **hardwareProfile**: [VirtualMachineScaleSetHardwareProfile](#virtualmachinescalesethardwareprofile): Specifies the hardware profile related details of a scale set. Minimum api-version: 2021-11-01.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile): Specifies properties of the network interfaces of the virtual machines in the scale set.
* **osProfile**: [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile): Specifies the operating system settings for the virtual machines in the scale set.
* **priority**: 'Low' | 'Regular' | 'Spot' | string: Specifies the priority for the virtual machines in the scale set. Minimum api-version: 2017-10-30-preview.
* **scheduledEventsProfile**: [ScheduledEventsProfile](#scheduledeventsprofile): Specifies Scheduled Event related configurations.
* **securityPostureReference**: [SecurityPostureReference](#securityposturereference): Specifies the security posture to be used in the scale set. Minimum api-version: 2023-03-01
* **securityProfile**: [SecurityProfile](#securityprofile): Specifies the Security related profile settings for the virtual machines in the scale set.
* **serviceArtifactReference**: [ServiceArtifactReference](#serviceartifactreference): Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. Minimum api-version: 2022-11-01
* **storageProfile**: [VirtualMachineScaleSetStorageProfile](#virtualmachinescalesetstorageprofile): Specifies the storage settings for the virtual machine disks.
* **timeCreated**: string (ReadOnly): Specifies the time in which this VM profile for the Virtual Machine Scale Set was created. Minimum API version for this property is 2024-03-01. This value will be added to VMSS Flex VM tags when creating/updating the VMSS VM Profile with minimum api-version 2024-03-01.
* **userData**: string: UserData for the virtual machines in the scale set, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01.

## VirtualMachineScaleSetVMProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities): Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
* **availabilitySet**: [SubResource](#subresource): Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the virtual machine.
* **instanceView**: [VirtualMachineScaleSetVMInstanceView](#virtualmachinescalesetvminstanceview) (ReadOnly): The virtual machine instance view.
* **latestModelApplied**: bool (ReadOnly): Specifies whether the latest model has been applied to the virtual machine.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
* **modelDefinitionApplied**: string (ReadOnly): Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine.
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces of the virtual machine.
* **networkProfileConfiguration**: [VirtualMachineScaleSetVMNetworkProfileConfiguration](#virtualmachinescalesetvmnetworkprofileconfiguration): Specifies the network profile configuration of the virtual machine.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the virtual machine.
* **protectionPolicy**: [VirtualMachineScaleSetVMProtectionPolicy](#virtualmachinescalesetvmprotectionpolicy): Specifies the protection policy of the virtual machine.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **securityProfile**: [SecurityProfile](#securityprofile): Specifies the Security related profile settings for the virtual machine.
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the virtual machine disks.
* **timeCreated**: string (ReadOnly): Specifies the time at which the Virtual Machine resource was created.<br><br>Minimum api-version: 2021-11-01.
* **userData**: string: UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. <br><br>Minimum api-version: 2021-03-01
* **vmId**: string (ReadOnly): Azure VM unique ID.

## VirtualMachineScaleSetVMProtectionPolicy
### Properties
* **protectFromScaleIn**: bool: Indicates that the virtual machine scale set VM shouldn't be considered for deletion during a scale-in operation.
* **protectFromScaleSetActions**: bool: Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM.

## VMDiskSecurityProfile
### Properties
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob.
* **securityEncryptionType**: 'DiskWithVMGuestState' | 'NonPersistedTPM' | 'VMGuestStateOnly' | string: Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, VMGuestStateOnly for encryption of just the VMGuestState blob, and NonPersistedTPM for not persisting firmware state in the VMGuestState blob.. **Note:** It can be set for only Confidential VMs.

## VMGalleryApplication
### Properties
* **configurationReference**: string: Optional, Specifies the uri to an azure blob that will replace the default configuration for the package if provided
* **enableAutomaticUpgrade**: bool: If set to true, when a new Gallery Application version is available in PIR/SIG, it will be automatically updated for the VM/VMSS
* **order**: int: Optional, Specifies the order in which the packages have to be installed
* **packageReferenceId**: string (Required): Specifies the GalleryApplicationVersion resource id on the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version}
* **tags**: string: Optional, Specifies a passthrough value for more generic context.
* **treatFailureAsDeploymentFailure**: bool: Optional, If true, any failure for any operation in the VmApplication will fail the deployment

## VMSizeProperties
### Properties
* **vCPUsAvailable**: int: Specifies the number of vCPUs available for the VM. When this property is not specified in the request body the default behavior is to set it to the value of vCPUs available for that VM size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list).
* **vCPUsPerCore**: int: Specifies the vCPU to physical core ratio. When this property is not specified in the request body the default behavior is set to the value of vCPUsPerCore for the VM Size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list). **Setting this property to 1 also means that hyper-threading is disabled.**

## WindowsConfiguration
### Properties
* **additionalUnattendContent**: [AdditionalUnattendContent](#additionalunattendcontent)[]: Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
* **enableAutomaticUpdates**: bool: Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning.
* **enableVMAgentPlatformUpdates**: bool: Indicates whether VMAgent Platform Updates is enabled for the Windows virtual machine. Default value is false.
* **patchSettings**: [PatchSettings](#patchsettings): [Preview Feature] Specifies settings related to VM Guest Patching on Windows.
* **provisionVMAgent**: bool: Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, it is set to true by default. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
* **timeZone**: string: Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.getsystemtimezones).
* **winRM**: [WinRMConfiguration](#winrmconfiguration): Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell.

## WindowsVMGuestPatchAutomaticByPlatformSettings
### Properties
* **bypassPlatformSafetyChecksOnUserSchedule**: bool: Enables customer to schedule patching without accidental upgrades
* **rebootSetting**: 'Always' | 'IfRequired' | 'Never' | 'Unknown' | string: Specifies the reboot setting for all AutomaticByPlatform patch installation operations.

## WinRMConfiguration
### Properties
* **listeners**: [WinRMListener](#winrmlistener)[]: The list of Windows Remote Management listeners

## WinRMListener
### Properties
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
* **protocol**: 'Http' | 'Https': Specifies the protocol of WinRM listener. Possible values are: **http,** **https.**

