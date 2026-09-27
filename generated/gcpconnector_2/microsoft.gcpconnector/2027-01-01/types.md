# Microsoft.GcpConnector @ 2027-01-01

## Resource Microsoft.GcpConnector/computeInstances@2027-01-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2027-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [InstanceProperties](#instanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.GcpConnector/computeInstances' (ReadOnly, DeployTimeConstant): The resource type

## AcceleratorConfig
### Properties
* **acceleratorCount**: int: The number of the guest accelerator cards exposed to this instance.
* **acceleratorType**: string: Full or partial URL of the accelerator type resource to attach to this instance. For example: projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100 If you are creating an instance template, specify only the accelerator name. See GPUs on Compute Engine for a full list of accelerator types.

## AccessConfig
### Properties
* **externalIpv6**: string: Applies to ipv6AccessConfigs only. The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
* **externalIpv6PrefixLength**: int: Applies to ipv6AccessConfigs only. The prefix length of the external IPv6 range.
* **kind**: string: [Output Only] Type of the resource. Always compute#accessConfig for access configs.
* **name**: string: The name of this access configuration. In accessConfigs (IPv4), the default and recommended name is External NAT, but you can use any arbitrary string, such as My external IP or Network Access. In ipv6AccessConfigs, the recommend name is External IPv6.
* **natIP**: string: Applies to accessConfigs (IPv4) only. An external IP address associated with this instance. Specify an unused static external IP address available to the project or leave this field undefined to use an IP from a shared ephemeral IP address pool. If you specify a static external IP address, it must live in the same region as the zone of the instance.
* **networkTier**: 'FIXED_STANDARD' | 'PREMIUM' | 'STANDARD' | 'STANDARD_OVERRIDES_FIXED_STANDARD' | string: This signifies the networking tier used for configuring this access configuration and can only take the following values: PREMIUM, STANDARD. If an AccessConfig is specified without a valid external IP address, an ephemeral IP will be created with this networkTier. If an AccessConfig with a valid external IP address is specified, it must match that of the networkTier associated with the Address resource owning that IP.
* **publicPtrDomainName**: string: The DNS domain name for the public PTR record. You can set this field only if the `setPublicPtr` field is enabled in accessConfig. If this field is unspecified in ipv6AccessConfig, a default PTR record will be createc for first IP in associated external IPv6 range.
* **securityPolicy**: string: [Output Only] The resource URL for the security policy associated with this access config.
* **setPublicPtr**: bool: Specifies whether a public DNS 'PTR' record should be created to map the external IP address of the instance to a DNS domain name. This field is not used in ipv6AccessConfig. A default PTR record will be created if the VM has external IPv6 range associated.
* **type**: 'DIRECT_IPV6' | 'ONE_TO_ONE_NAT' | string: The type of configuration. In accessConfigs (IPv4), the default and only option is ONE_TO_ONE_NAT. In ipv6AccessConfigs, the default and only option is DIRECT_IPV6.

## AdvancedMachineFeatures
### Properties
* **enableNestedVirtualization**: bool: Whether to enable nested virtualization or not (default is false).
* **enableUefiNetworking**: bool: Whether to enable UEFI networking for instance creation.
* **threadsPerCore**: int: The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
* **visibleCoreCount**: int: The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

## AliasIpRange
### Properties
* **ipCidrRange**: string: The IP alias ranges to allocate for this interface. This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. This range may be a single IP address (such as 10.2.3.4), a netmask (such as /24) or a CIDR-formatted string (such as 10.1.2.0/24).
* **subnetworkRangeName**: string: The name of a subnetwork secondary IP range from which to allocate an IP alias range. If not specified, the primary range of the subnetwork is used.

## AttachedDisk
### Properties
* **architecture**: 'ARCHITECTURE_UNSPECIFIED' | 'ARM64' | 'X86_64' | string: [Output Only] The architecture of the attached disk. Valid values are ARM64 or X86_64.
* **autoDelete**: bool: Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
* **boot**: bool: Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
* **deviceName**: string: Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks.
* **diskEncryptionKey**: [CustomerEncryptionKey](#customerencryptionkey): Encrypts or decrypts a disk using a customer-supplied encryption key. If you are creating a new disk, this field encrypts the new disk using an encryption key that you provide. If you are attaching an existing disk that is already encrypted, this field decrypts the disk using the customer-supplied encryption key. If you encrypt a disk using a customer-supplied key, you must provide the same key again when you attempt to use this resource at a later time. For example, you must provide the key when you create a snapshot or an image from the disk or when you attach the disk to a virtual machine instance. If you do not provide an encryption key, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later. Instance templates do not store customer-supplied encryption keys, so you cannot use your own keys to encrypt disks in a managed instance group.
* **diskSizeGb**: string: The size of the disk in GB.
* **forceAttach**: bool: [Input Only] Whether to force attach the regional disk even if it's currently attached to another instance. If you try to force attach a zonal disk to an instance, you will receive an error.
* **guestOsFeatures**: [GuestOsFeature](#guestosfeature)[]: A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.
* **index**: int: [Output Only] A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number.
* **initializeParams**: [AttachedDiskInitializeParams](#attacheddiskinitializeparams): [Input Only] Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new instance. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
* **interface**: 'NVME' | 'SCSI' | string: Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. For most machine types, the default is SCSI. Local SSDs can use either NVME or SCSI. In certain configurations, persistent disks can use NVMe. For more information, see About persistent disks.
* **kind**: string: [Output Only] Type of the resource. Always compute#attachedDisk for attached disks.
* **licenses**: string[]: [Output Only] Any valid publicly visible licenses.
* **mode**: 'READ_ONLY' | 'READ_WRITE' | string: The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode.
* **savedState**: 'DISK_SAVED_STATE_UNSPECIFIED' | 'PRESERVED' | string: For LocalSSD disks on VM Instances in STOPPED or SUSPENDED state, this field is set to PRESERVED if the LocalSSD data has been saved to a persistent location by customer request. (see the discard_local_ssd option on Stop/Suspend). Read-only in the api.
* **shieldedInstanceInitialState**: [InitialStateConfig](#initialstateconfig): [Output Only] shielded vm initial state stored on disk
* **source**: string: Specifies a valid partial or full URL to an existing Persistent Disk resource. When creating a new instance, one of initializeParams.sourceImage or initializeParams.sourceSnapshot or disks.source is required except for local SSD. If desired, you can also attach existing non-root persistent disks using this property. This field is only applicable for persistent disks. Note that for InstanceTemplate, specify the disk name for zonal disk, and the URL for regional disk.
* **type**: 'PERSISTENT' | 'SCRATCH' | string: Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.

## AttachedDiskInitializeParams
### Properties
* **architecture**: 'ARCHITECTURE_UNSPECIFIED' | 'ARM64' | 'X86_64' | string: The architecture of the attached disk. Valid values are arm64 or x86_64.
* **description**: string: An optional description. Provide this property when creating the disk.
* **diskName**: string: Specifies the disk name. If not specified, the default is to use the name of the instance. If a disk with the same name already exists in the given region, the existing disk is attached to the new instance and the new disk is not created.
* **diskSizeGb**: string: Specifies the size of the disk in base-2 GB. The size must be at least 10 GB. If you specify a sourceImage, which is required for boot disks, the default size is the size of the sourceImage. If you do not specify a sourceImage, the default disk size is 500 GB.
* **diskType**: string: Specifies the disk type to use to create the instance. If not specified, the default is pd-standard, specified using the full URL. For example: https://www.googleapis.com/compute/v1/projects/project/zones/zone /diskTypes/pd-standard For a full list of acceptable values, see Persistent disk types. If you specify this field when creating a VM, you can provide either the full or partial URL. For example, the following values are valid: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /diskTypes/diskType - projects/project/zones/zone/diskTypes/diskType - zones/zone/diskTypes/diskType If you specify this field when creating or updating an instance template or all-instances configuration, specify the type of the disk, not the URL. For example: pd-standard.
* **enableConfidentialCompute**: bool: Whether this disk is using confidential compute mode.
* **labels**: [AttachedDiskInitializeParamsLabels](#attacheddiskinitializeparamslabels): Labels to apply to this disk. These can be later modified by the disks.setLabels method. This field is only applicable for persistent disks.
* **licenses**: string[]: A list of publicly visible licenses. Reserved for Google's use.
* **onUpdateAction**: 'RECREATE_DISK' | 'RECREATE_DISK_IF_SOURCE_CHANGED' | 'USE_EXISTING_DISK' | string: Specifies which action to take on instance update with this disk. Default is to use the existing disk.
* **provisionedIops**: string: Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000. For more details, see the Extreme persistent disk documentation.
* **provisionedThroughput**: string: Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle. Values must greater than or equal to 1.
* **replicaZones**: string[]: Required for each regional disk associated with the instance. Specify the URLs of the zones where the disk should be replicated to. You must provide exactly two replica zones, and one zone must be the same as the instance zone.
* **resourceManagerTags**: [AttachedDiskInitializeParamsResourceManagerTags](#attacheddiskinitializeparamsresourcemanagertags): Resource manager tags to be bound to the disk. Tag keys and values have the same definition as resource manager tags. Keys must be in the format `tagKeys/{tag_key_id}`, and values are in the format `tagValues/456`. The field is ignored (both PUT & PATCH) when empty.
* **resourcePolicies**: string[]: Resource policies applied to this disk for automatic snapshot creations. Specified using the full or partial URL. For instance template, specify only the resource policy name.
* **sourceImage**: string: The source image to create this disk. When creating a new instance, one of initializeParams.sourceImage or initializeParams.sourceSnapshot or disks.source is required except for local SSD. To create a disk with one of the public operating system images, specify the image by its family name. For example, specify family/debian-9 to use the latest Debian 9 image: projects/debian-cloud/global/images/family/debian-9 Alternatively, use a specific version of a public operating system image: projects/debian-cloud/global/images/debian-9-stretch-vYYYYMMDD To create a disk with a custom image that you created, specify the image name in the following format: global/images/my-custom-image You can also specify a custom image by its image family, which returns the latest version of the image in that family. Replace the image name with family/family-name: global/images/family/my-image-family If the source image is deleted later, this field will not be set.
* **sourceImageEncryptionKey**: [CustomerEncryptionKey](#customerencryptionkey): The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key. InstanceTemplate and InstancePropertiesPatch do not store customer-supplied encryption keys, so you cannot create disks for instances in a managed instance group if the source images are encrypted with your own keys.
* **sourceSnapshot**: string: The source snapshot to create this disk. When creating a new instance, one of initializeParams.sourceSnapshot or initializeParams.sourceImage or disks.source is required except for local SSD. To create a disk with a snapshot that you created, specify the snapshot name in the following format: global/snapshots/my-backup If the source snapshot is deleted later, this field will not be set.
* **sourceSnapshotEncryptionKey**: [CustomerEncryptionKey](#customerencryptionkey): The customer-supplied encryption key of the source snapshot.

## AttachedDiskInitializeParamsLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AttachedDiskInitializeParamsResourceManagerTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConfidentialInstanceConfig
### Properties
* **enableConfidentialCompute**: bool: Defines whether the instance should have confidential compute enabled.

## CustomerEncryptionKey
### Properties
* **kmsKeyName**: string: The name of the encryption key that is stored in Google Cloud KMS. For example: "kmsKeyName": "projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key The fully-qualifed key name may be returned for resource GET requests. For example: "kmsKeyName": "projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key /cryptoKeyVersions/1
* **kmsKeyServiceAccount**: string: The service account being used for the encryption request for the given KMS key. If absent, the Compute Engine default service account is used. For example: "kmsKeyServiceAccount": "name@project_id.iam.gserviceaccount.com/
* **rawKey**: string {sensitive}: Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. You can provide either the rawKey or the rsaEncryptedKey. For example: "rawKey": "SGVsbG8gZnJvbSBHb29nbGUgQ2xvdWQgUGxhdGZvcm0="
* **rsaEncryptedKey**: string {sensitive}: Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. You can provide either the rawKey or the rsaEncryptedKey. For example: "rsaEncryptedKey": "ieCx/NcW06PcT7Ep1X6LUTc/hLvUDYyzSZPPVCVPTVEohpeHASqC8uw5TzyO9U+Fka9JFH z0mBibXUInrC/jEk014kCK/NPjYgEMOyssZ4ZINPKxlUh2zn1bV+MCaTICrdmuSBTWlUUiFoD D6PYznLwh8ZNdaheCeZ8ewEXgFQ8V+sDroLaN3Xs3MDTXQEMMoNUXMCZEIpg9Vtp9x2oe==" The key must meet the following requirements before you can provide it to Compute Engine: 1. The key is wrapped using a RSA public key certificate provided by Google. 2. After being wrapped, the key must be encoded in RFC 4648 base64 encoding. Gets the RSA public key certificate provided by Google at: https://cloud-certs.storage.googleapis.com/google-cloud-csek-ingress.pem
* **sha256**: string {sensitive}: [Output only] The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.

## DisplayDevice
### Properties
* **enableDisplay**: bool: Defines whether the instance has Display enabled.

## Duration
### Properties
* **nanos**: int: Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented with a 0 `seconds` field and a positive `nanos` field. Must be from 0 to 999,999,999 inclusive.
* **seconds**: string: Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years

## FileContentBuffer
### Properties
* **content**: string: The raw content in the secure keys file.
* **fileType**: 'BIN' | 'UNDEFINED' | 'X509' | string: The file type of source file.

## GcpComputeInstanceProperties
### Properties
* **advancedMachineFeatures**: [AdvancedMachineFeatures](#advancedmachinefeatures): Controls for advanced machine-related behavior features.
* **canIpForward**: bool: Allows this instance to send and receive packets with non-matching destination or source IPs. This is required if you plan to use this instance to forward routes. For more information, see Enabling IP Forwarding .
* **confidentialInstanceConfig**: [ConfidentialInstanceConfig](#confidentialinstanceconfig): Confidential Instance Config.
* **cpuPlatform**: string: [Output Only] The CPU platform used by this instance.
* **creationTimestamp**: string: [Output Only] Creation timestamp in RFC3339 text format.
* **deletionProtection**: bool: Whether the resource should be protected against deletion.
* **description**: string: An optional description of this resource. Provide this property when you create the resource.
* **disks**: [AttachedDisk](#attacheddisk)[]: Array of disks associated with this instance. Persistent disks must be created before you can assign them.
* **displayDevice**: [DisplayDevice](#displaydevice): Enables display device for the instance.
* **fingerprint**: string: Specifies a fingerprint for this resource, which is essentially a hash of the instance's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update the instance. You must always provide an up-to-date fingerprint hash in order to update the instance. To see the latest fingerprint, make get() request to the instance.
* **guestAccelerators**: [AcceleratorConfig](#acceleratorconfig)[]: A list of the type and count of accelerator cards attached to the instance.
* **hostname**: string: Specifies the hostname of the instance. The specified hostname must be RFC1035 compliant. If hostname is not specified, the default hostname is [INSTANCE_NAME].c.[PROJECT_ID].internal when using the global DNS, and [INSTANCE_NAME].[ZONE].c.[PROJECT_ID].internal when using zonal DNS.
* **id**: string: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* **instanceEncryptionKey**: [CustomerEncryptionKey](#customerencryptionkey): Encrypts suspended data for an instance with a customer-managed encryption key. If you are creating a new instance, this field will encrypt the local SSD and in-memory contents of the instance during the suspend operation. If you do not provide an encryption key when creating the instance, then the local SSD and in-memory contents will be encrypted using an automatically generated key during the suspend operation.
* **keyRevocationActionType**: 'KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED' | 'NONE' | 'STOP' | string: KeyRevocationActionType of the instance. Supported options are "STOP" and "NONE". The default value is "NONE" if it is not specified.
* **kind**: string: [Output Only] Type of the resource. Always compute#instance for instances.
* **labelFingerprint**: string: A fingerprint for this request, which is essentially a hash of the label's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels. To see the latest fingerprint, make get() request to the instance.
* **labels**: [GcpComputeInstancePropertiesLabels](#gcpcomputeinstancepropertieslabels): Labels to apply to this instance. These can be later modified by the setLabels method.
* **lastStartTimestamp**: string: [Output Only] Last start timestamp in RFC3339 text format.
* **lastStopTimestamp**: string: [Output Only] Last stop timestamp in RFC3339 text format.
* **lastSuspendedTimestamp**: string: [Output Only] Last suspended timestamp in RFC3339 text format.
* **machineType**: string: Full or partial URL of the machine type resource to use for this instance, in the format: zones/zone/machineTypes/machine-type. This is provided by the client when the instance is created. For example, the following is a valid partial url to a predefined machine type: zones/us-central1-f/machineTypes/n1-standard-1 To create a custom machine type, provide a URL to a machine type in the following format, where CPUS is 1 or an even number up to 32 (2, 4, 6, ... 24, etc), and MEMORY is the total memory for this instance. Memory must be a multiple of 256 MB and must be supplied in MB (e.g. 5 GB of memory is 5120 MB): zones/zone/machineTypes/custom-CPUS-MEMORY For example: zones/us-central1-f/machineTypes/custom-4-5120 For a full list of restrictions, read the Specifications for custom machine types.
* **metadata**: [Metadata](#metadata): The metadata key/value pairs assigned to this instance. This includes custom metadata and predefined keys.
* **minCpuPlatform**: string: Specifies a minimum CPU platform for the VM instance. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: "Intel Haswell" or minCpuPlatform: "Intel Sandy Bridge".
* **name**: string {pattern: "[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?"}: The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: An array of network configurations for this instance. These specify how interfaces are configured to interact with other network services, such as connecting to the internet. Multiple interfaces are supported per instance.
* **networkPerformanceConfig**: [NetworkPerformanceConfig](#networkperformanceconfig): The network performance configuration for the instance.
* **params**: [InstanceParams](#instanceparams): Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload.
* **privateIpv6GoogleAccess**: 'ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE' | 'ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE' | 'INHERIT_FROM_SUBNETWORK' | string: The private IPv6 google access type for the VM. If not specified, use INHERIT_FROM_SUBNETWORK as default.
* **reservationAffinity**: [ReservationAffinity](#reservationaffinity): Specifies the reservations that this instance can consume from.
* **resourcePolicies**: string[]: Resource policies applied to this instance.
* **resourceStatus**: [ResourceStatus](#resourcestatus): [Output Only] Specifies values set for instance attributes as compared to the values requested by user in the corresponding input only field.
* **satisfiesPzi**: bool: [Output Only] Reserved for future use.
* **satisfiesPzs**: bool: [Output Only] Reserved for future use.
* **scheduling**: [Scheduling](#scheduling): Sets the scheduling options for this instance.
* **selfLink**: string: [Output Only] Server-defined URL for this resource.
* **serviceAccounts**: [ServiceAccount](#serviceaccount)[]: A list of service accounts, with their specified scopes, authorized for this instance. Only one service account per VM instance is supported. Service accounts generate access tokens that can be accessed through the metadata server and used to authenticate applications on the instance. See Service Accounts for more information.
* **shieldedInstanceConfig**: [ShieldedInstanceConfig](#shieldedinstanceconfig): Shielded Instance Config.
* **shieldedInstanceIntegrityPolicy**: [ShieldedInstanceIntegrityPolicy](#shieldedinstanceintegritypolicy): ShieldedInstance Integrity Policy.
* **sourceMachineImage**: string: Source machine image
* **sourceMachineImageEncryptionKey**: [CustomerEncryptionKey](#customerencryptionkey): Source machine image encryption key when creating an instance from a machine image.
* **startRestricted**: bool: [Output Only] Whether a VM has been restricted for start because Compute Engine has detected suspicious activity.
* **status**: 'DEPROVISIONING' | 'PENDING' | 'PENDING_STOP' | 'PROVISIONING' | 'REPAIRING' | 'RUNNING' | 'STAGING' | 'STOPPED' | 'STOPPING' | 'SUSPENDED' | 'SUSPENDING' | 'TERMINATED' | string: [Output Only] The status of the instance. One of the following values: PROVISIONING, STAGING, RUNNING, STOPPING, SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. For more information about the status of the instance, see Instance life cycle.
* **statusMessage**: string: [Output Only] An optional, human-readable explanation of the status.
* **tags**: [Tags](#tags): Tags to apply to this instance. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during instance creation. The tags can be later modified by the setTags method. Each tag within the list must comply with RFC1035. Multiple tags can be specified via the 'tags.items' field.
* **zone**: string: [Output Only] URL of the zone where the instance resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

## GcpComputeInstancePropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GuestOsFeature
### Properties
* **type**: 'BARE_METAL_LINUX_COMPATIBLE' | 'BMSAI_CAPABLE' | 'CCA_CAPABLE' | 'FEATURE_TYPE_UNSPECIFIED' | 'GVNIC' | 'IDPF' | 'MULTI_IP_SUBNET' | 'SECURE_BOOT' | 'SEV_CAPABLE' | 'SEV_LIVE_MIGRATABLE' | 'SEV_LIVE_MIGRATABLE_V2' | 'SEV_SNP_CAPABLE' | 'SNP_SVSM_CAPABLE' | 'SUSPEND_SAFE_FPR' | 'TDX_CAPABLE' | 'UEFI_COMPATIBLE' | 'VIRTIO_SCSI_MULTIQUEUE' | 'WINDOWS' | string: The ID of a supported feature. To add multiple values, use commas to separate values. Set to one or more of the following values: - VIRTIO_SCSI_MULTIQUEUE - WINDOWS - MULTI_IP_SUBNET - UEFI_COMPATIBLE - GVNIC - SEV_CAPABLE - SUSPEND_RESUME_COMPATIBLE - SEV_LIVE_MIGRATABLE - SEV_SNP_CAPABLE - TDX_CAPABLE - IDPF For more information, see Enabling guest operating system features.

## InitialStateConfig
### Properties
* **dbs**: [FileContentBuffer](#filecontentbuffer)[]: The Key Database (db).
* **dbxs**: [FileContentBuffer](#filecontentbuffer)[]: The forbidden key database (dbx).
* **keks**: [FileContentBuffer](#filecontentbuffer)[]: The Key Exchange Key (KEK).
* **pk**: [FileContentBuffer](#filecontentbuffer): The Platform Key (PK).

## InstanceParams
### Properties
* **resourceManagerTags**: [InstanceParamsResourceManagerTags](#instanceparamsresourcemanagertags): Resource manager tags to be bound to the instance. Tag keys and values have the same definition as resource manager tags. Keys must be in the format `tagKeys/{tag_key_id}`, and values are in the format `tagValues/456`. The field is ignored (both PUT & PATCH) when empty.

## InstanceParamsResourceManagerTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InstanceProperties
### Properties
* **gcpProjectId**: string: GCP Project Id
* **gcpProjectNumber**: string: GCP Project Number
* **gcpProperties**: [GcpComputeInstanceProperties](#gcpcomputeinstanceproperties): GCP Properties
* **gcpRegion**: string: GCP Region
* **gcpSourceSchema**: string: GCP Source Schema
* **gcpTags**: [InstancePropertiesGcpTags](#instancepropertiesgcptags): GCP Tags
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **publicCloudConnectorsResourceId**: string: Public Cloud Connectors Resource ID
* **publicCloudResourceName**: string: Public Cloud Resource Name
* **resourceName**: string: Fully qualified resource name of the GCP resource

## InstancePropertiesGcpTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Metadata
### Properties
* **fingerprint**: string: Specifies a fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve the resource.
* **items**: [MetadataItemsItem](#metadataitemsitem)[]: Array of key/value pairs. The total size of all keys and values must be less than 512 KB.
* **kind**: string: [Output Only] Type of the resource. Always compute#metadata for metadata.

## MetadataItemsItem
### Properties
* **key**: string {pattern: "[a-zA-Z0-9-_]{1,128}"}
* **value**: string

## NetworkInterface
### Properties
* **accessConfigs**: [AccessConfig](#accessconfig)[]: An array of configurations for this interface. Currently, only one access config, ONE_TO_ONE_NAT, is supported. If there are no accessConfigs specified, then this instance will have no external internet access.
* **aliasIpRanges**: [AliasIpRange](#aliasiprange)[]: An array of alias IP ranges for this network interface. You can only specify this field for network interfaces in VPC networks.
* **fingerprint**: string: Fingerprint hash of contents stored in this network interface. This field will be ignored when inserting an Instance or adding a NetworkInterface. An up-to-date fingerprint must be provided in order to update the NetworkInterface. The request will fail with error 400 Bad Request if the fingerprint is not provided, or 412 Precondition Failed if the fingerprint is out of date.
* **internalIpv6PrefixLength**: int: The prefix length of the primary internal IPv6 range.
* **ipv6AccessConfigs**: [AccessConfig](#accessconfig)[]: An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
* **ipv6AccessType**: 'EXTERNAL' | 'INTERNAL' | string: [Output Only] One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork. Valid only if stackType is IPV4_IPV6.
* **ipv6Address**: string: An IPv6 internal network address for this network interface. To use a static internal IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
* **kind**: string: [Output Only] Type of the resource. Always compute#networkInterface for network interfaces.
* **name**: string: [Output Only] The name of the network interface, which is generated by the server. For a VM, the network interface uses the nicN naming format. Where N is a value between 0 and 7. The default interface value is nic0.
* **network**: string: URL of the VPC network resource for this instance. When creating an instance, if neither the network nor the subnetwork is specified, the default network global/networks/default is used. If the selected project doesn't have the default network, you must specify a network or subnet. If the network is not specified but the subnetwork is specified, the network is inferred. If you specify this property, you can specify the network as a full or partial URL. For example, the following are all valid URLs: - https://www.googleapis.com/compute/v1/projects/project/global/networks/ network - projects/project/global/networks/network - global/networks/default
* **networkAttachment**: string: The URL of the network attachment that this interface should connect to in the following format: projects/{project_number}/regions/{region_name}/networkAttachments/{network_attachment_name}.
* **networkIP**: string: An IPv4 internal IP address to assign to the instance for this network interface. If not specified by the user, an unused internal IP is assigned by the system.
* **nicType**: 'GVNIC' | 'IDPF' | 'IRDMA' | 'MRDMA' | 'UNSPECIFIED_NIC_TYPE' | 'VIRTIO_NET' | string: The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.
* **queueCount**: int: The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It'll be empty if not specified by the users.
* **stackType**: 'IPV4_IPV6' | 'IPV4_ONLY' | 'IPV6_ONLY' | string: The stack type for this network interface. To assign only IPv4 addresses, use IPV4_ONLY. To assign both IPv4 and IPv6 addresses, use IPV4_IPV6. If not specified, IPV4_ONLY is used. This field can be both set at instance creation and update network interface operations.
* **subnetwork**: string: The URL of the Subnetwork resource for this instance. If the network resource is in legacy mode, do not specify this field. If the network is in auto subnet mode, specifying the subnetwork is optional. If the network is in custom subnet mode, specifying the subnetwork is required. If you specify this field, you can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs: - https://www.googleapis.com/compute/v1/projects/project/regions/region /subnetworks/subnetwork - regions/region/subnetworks/subnetwork

## NetworkPerformanceConfig
### Properties
* **totalEgressBandwidthTier**: 'DEFAULT' | 'TIER_1' | string: Total Egress Bandwidth Tier.

## ReservationAffinity
### Properties
* **consumeReservationType**: 'ANY_RESERVATION' | 'NO_RESERVATION' | 'SPECIFIC_RESERVATION' | 'UNSPECIFIED' | string: Specifies the type of reservation from which this instance can consume resources: ANY_RESERVATION (default), SPECIFIC_RESERVATION, or NO_RESERVATION. See Consuming reserved instances for examples.
* **key**: string: Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify googleapis.com/reservation-name as the key and specify the name of your reservation as its value.
* **values**: string[]: Corresponds to the label values of a reservation resource. This can be either a name to a reservation in the same project or "projects/different-project/reservations/some-reservation-name" to target a shared reservation in the same zone but in a different project.

## ResourceStatus
### Properties
* **physicalHost**: string: [Output Only] An opaque ID of the host on which the VM is running.
* **upcomingMaintenance**: [UpcomingMaintenance](#upcomingmaintenance): Upcoming Maintenance.

## Scheduling
### Properties
* **automaticRestart**: bool: Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). You can only set the automatic restart option for standard instances. Preemptible instances cannot be automatically restarted. By default, this is set to true so an instance is automatically restarted if it is terminated by Compute Engine.
* **instanceTerminationAction**: 'DELETE' | 'INSTANCE_TERMINATION_ACTION_UNSPECIFIED' | 'STOP' | string: Specifies the termination action for the instance.
* **localSsdRecoveryTimeout**: [Duration](#duration): Specifies the maximum amount of time a Local Ssd Vm should wait while recovery of the Local Ssd state is attempted. Its value should be in between 0 and 168 hours with hour granularity and the default value being 1 hour.
* **locationHint**: string: An opaque location hint used to place the instance close to other resources. This field is for use by internal tools that use the public API.
* **minNodeCpus**: int: The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node.
* **nodeAffinities**: [SchedulingNodeAffinity](#schedulingnodeaffinity)[]: A set of node affinity and anti-affinity configurations. Refer to Configuring node affinity for more information. Overrides reservationAffinity.
* **onHostMaintenance**: 'MIGRATE' | 'TERMINATE' | string: Defines the maintenance behavior for this instance. For standard instances, the default behavior is MIGRATE. For preemptible instances, the default and only possible behavior is TERMINATE. For more information, see Set VM host maintenance policy.
* **preemptible**: bool: Defines whether the instance is preemptible. This can only be set during instance creation or while the instance is stopped and therefore, in a `TERMINATED` state. See Instance Life Cycle for more information on the possible instance states.
* **provisioningModel**: 'FLEX_START' | 'RESERVATION_BOUND' | 'SPOT' | 'STANDARD' | string: Specifies the provisioning model of the instance.

## SchedulingNodeAffinity
### Properties
* **key**: string: Corresponds to the label key of Node resource.
* **operator**: 'IN' | 'NOT_IN' | 'OPERATOR_UNSPECIFIED' | string: Defines the operation of node selection. Valid operators are IN for affinity and NOT_IN for anti-affinity.
* **values**: string[]: Corresponds to the label values of Node resource.

## ServiceAccount
### Properties
* **email**: string: Email address of the service account.
* **scopes**: string[]: The list of scopes to be made available for this service account.

## ShieldedInstanceConfig
### Properties
* **enableIntegrityMonitoring**: bool: Defines whether the instance has integrity monitoring enabled. Enabled by default.
* **enableSecureBoot**: bool: Defines whether the instance has Secure Boot enabled. Disabled by default.
* **enableVtpm**: bool: Defines whether the instance has the vTPM enabled. Enabled by default.

## ShieldedInstanceIntegrityPolicy
### Properties
* **updateAutoLearnPolicy**: bool: Updates the integrity policy baseline using the measurements from the VM instance's most recent boot.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Tags
### Properties
* **fingerprint**: string: Specifies a fingerprint for this request, which is essentially a hash of the tags' contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update tags. You must always provide an up-to-date fingerprint hash in order to update or change tags. To see the latest fingerprint, make get() request to the instance.
* **items**: string[]: An array of tags. Each tag must be 1-63 characters long, and comply with RFC1035.

## UpcomingMaintenance
### Properties
* **canReschedule**: bool: Indicates if the maintenance can be customer triggered.
* **latestWindowStartTime**: string: The latest time for the planned maintenance window to start. This timestamp value is in RFC3339 text format.
* **maintenanceStatus**: 'ONGOING' | 'PENDING' | 'UNKNOWN' | string: Maintenance Status.
* **type**: 'MULTIPLE' | 'SCHEDULED' | 'UNKNOWN_TYPE' | 'UNSCHEDULED' | string: Defines the type of maintenance.
* **windowEndTime**: string: The time by which the maintenance disruption will be completed. This timestamp value is in RFC3339 text format.
* **windowStartTime**: string: The current start time of the maintenance window. This timestamp value is in RFC3339 text format.

