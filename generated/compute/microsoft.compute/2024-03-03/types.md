# Microsoft.Compute @ 2024-03-03

## Resource Microsoft.Compute/galleries@2024-03-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [GalleryIdentity](#galleryidentity): The identity of the gallery, if configured.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryProperties](#galleryproperties): Describes the properties of a Shared Image Gallery.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/applications@2024-03-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryApplicationProperties](#galleryapplicationproperties): Describes the properties of a gallery Application Definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/applications/versions@2024-03-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryApplicationVersionProperties](#galleryapplicationversionproperties): Describes the properties of a gallery image version.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/applications/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/images@2024-03-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageProperties](#galleryimageproperties): Describes the properties of a gallery image definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/images/versions@2024-03-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageVersionProperties](#galleryimageversionproperties): Describes the properties of a gallery image version.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/images/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/inVMAccessControlProfiles@2024-03-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string {maxLength: 80, pattern: "^[a-zA-Z0-9]+([-._]?[a-zA-Z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryInVMAccessControlProfileProperties](#galleryinvmaccesscontrolprofileproperties): Describes the properties of a gallery inVMAccessControlProfile.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/inVMAccessControlProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/inVMAccessControlProfiles/versions@2024-03-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string {pattern: "^[0-9]+\.[0-9]+\.[0-9]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryInVMAccessControlProfileVersionProperties](#galleryinvmaccesscontrolprofileversionproperties): Describes the properties of an inVMAccessControlProfile version.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/inVMAccessControlProfiles/versions' (ReadOnly, DeployTimeConstant): The resource type

## AccessControlRules
### Properties
* **identities**: [AccessControlRulesIdentity](#accesscontrolrulesidentity)[]: A list of identities.
* **privileges**: [AccessControlRulesPrivilege](#accesscontrolrulesprivilege)[]: A list of privileges.
* **roleAssignments**: [AccessControlRulesRoleAssignment](#accesscontrolrulesroleassignment)[]: A list of role assignments.
* **roles**: [AccessControlRulesRole](#accesscontrolrulesrole)[]: A list of roles.

## AccessControlRulesIdentity
### Properties
* **exePath**: string: The path to the executable.
* **groupName**: string: The groupName corresponding to this identity.
* **name**: string (Required): The name of the identity.
* **processName**: string: The process name of the executable.
* **userName**: string: The username corresponding to this identity.

## AccessControlRulesPrivilege
### Properties
* **name**: string (Required): The name of the privilege.
* **path**: string (Required): The HTTP path corresponding to the privilege.
* **queryParameters**: [AccessControlRulesPrivilegeQueryParameters](#accesscontrolrulesprivilegequeryparameters): The query parameters to match in the path.

## AccessControlRulesPrivilegeQueryParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccessControlRulesRole
### Properties
* **name**: string (Required): The name of the role.
* **privileges**: string[] (Required): A list of privileges needed by this role.

## AccessControlRulesRoleAssignment
### Properties
* **identities**: string[] (Required): A list of identities that can access the privileges defined by the role.
* **role**: string (Required): The name of the role.

## AdditionalReplicaSet
### Properties
* **regionalReplicaCount**: int: The number of direct drive replicas of the Image Version to be created.This Property is updatable
* **storageAccountType**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to create the direct drive replicas

## CommunityGalleryInfo
### Properties
* **communityGalleryEnabled**: bool (ReadOnly): Contains info about whether community gallery sharing is enabled.
* **eula**: string: End-user license agreement for community gallery image.
* **publicNamePrefix**: string: The prefix of the gallery name that will be displayed publicly. Visible to all users.
* **publicNames**: string[] (ReadOnly): Community gallery public name list.
* **publisherContact**: string: Community gallery publisher support email. The email address of the publisher. Visible to all users.
* **publisherUri**: string: The link to the publisher website. Visible to all users.

## DataDiskImageEncryption
### Properties
* **diskEncryptionSetId**: string: A relative URI containing the resource ID of the disk encryption set.
* **lun**: int (Required): This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.

## Disallowed
### Properties
* **diskTypes**: string[]: A list of disk types.

## EncryptionImages
### Properties
* **dataDiskImages**: [DataDiskImageEncryption](#datadiskimageencryption)[]: A list of encryption specifications for data disk images.
* **osDiskImage**: [OSDiskImageEncryption](#osdiskimageencryption): Contains encryption settings for an OS disk image.

## ExecutedValidation
### Properties
* **executionTime**: string: This property specifies the starting timestamp.
* **status**: 'Failed' | 'Succeeded' | 'Unknown' | string: This property specifies the status of the validationProfile of the image version.
* **type**: string: This property specifies the type of image version validation.
* **version**: string: This property specifies the valid version of the validation.

## GalleryApplicationCustomAction
### Properties
* **description**: string: Description to help the users understand what this custom action does.
* **name**: string (Required): The name of the custom action.  Must be unique within the Gallery Application Version.
* **parameters**: [GalleryApplicationCustomActionParameter](#galleryapplicationcustomactionparameter)[]: The parameters that this custom action uses
* **script**: string (Required): The script to run when executing this custom action.

## GalleryApplicationCustomActionParameter
### Properties
* **defaultValue**: string: The default value of the parameter.  Only applies to string types
* **description**: string: A description to help users understand what this parameter means
* **name**: string (Required): The name of the custom action.  Must be unique within the Gallery Application Version.
* **required**: bool: Indicates whether this parameter must be passed when running the custom action.
* **type**: 'ConfigurationDataBlob' | 'LogOutputBlob' | 'String': Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob

## GalleryApplicationProperties
### Properties
* **customActions**: [GalleryApplicationCustomAction](#galleryapplicationcustomaction)[]: A list of custom actions that can be performed with all of the Gallery Application Versions within this Gallery Application.
* **description**: string: The description of this gallery Application Definition resource. This property is updatable.
* **endOfLifeDate**: string: The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
* **eula**: string: The Eula agreement for the gallery Application Definition.
* **privacyStatementUri**: string: The privacy statement uri.
* **releaseNoteUri**: string: The release note uri.
* **supportedOSType**: 'Linux' | 'Windows' (Required): This property allows you to specify the supported type of the OS that application is built for. Possible values are: **Windows,** **Linux.**

## GalleryApplicationVersionProperties
### Properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **publishingProfile**: [GalleryApplicationVersionPublishingProfile](#galleryapplicationversionpublishingprofile) (Required): The publishing profile of a gallery image version.
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly): This is the replication status of the gallery image version.
* **safetyProfile**: [GalleryApplicationVersionSafetyProfile](#galleryapplicationversionsafetyprofile): The safety profile of the Gallery Application Version.

## GalleryApplicationVersionPublishingProfile
### Properties
* **advancedSettings**: [GalleryApplicationVersionPublishingProfileAdvancedSettings](#galleryapplicationversionpublishingprofileadvancedsettings): Optional. Additional settings to pass to the vm-application-manager extension. For advanced use only.
* **customActions**: [GalleryApplicationCustomAction](#galleryapplicationcustomaction)[]: A list of custom actions that can be performed with this Gallery Application Version.
* **enableHealthCheck**: bool: Optional. Whether or not this application reports health.
* **endOfLifeDate**: string: The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
* **excludeFromLatest**: bool: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
* **manageActions**: [UserArtifactManage](#userartifactmanage)
* **publishedDate**: string (ReadOnly): The timestamp for when the gallery image version is published.
* **replicaCount**: int: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
* **replicationMode**: 'Full' | 'Shallow' | string: Optional parameter which specifies the mode to be used for replication. This property is not updatable.
* **settings**: [UserArtifactSettings](#userartifactsettings): Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set.
* **source**: [UserArtifactSource](#userartifactsource) (Required): The source image from which the Image Version is going to be created.
* **storageAccountType**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.
* **targetExtendedLocations**: [GalleryTargetExtendedLocation](#gallerytargetextendedlocation)[]: The target extended locations where the Image Version is going to be replicated to. This property is updatable.
* **targetRegions**: [TargetRegion](#targetregion)[]: The target regions where the Image Version is going to be replicated to. This property is updatable.

## GalleryApplicationVersionPublishingProfileAdvancedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryApplicationVersionSafetyProfile
### Properties
* **allowDeletionOfReplicatedLocations**: bool: Indicates whether or not removing this Gallery Image Version from replicated regions is allowed.

## GalleryArtifactVersionFullSource
### Properties
* **communityGalleryImageId**: string: The resource Id of the source Community Gallery Image.  Only required when using Community Gallery Image as a source.
* **id**: string: The id of the gallery artifact version source.
* **virtualMachineId**: string: The resource Id of the source virtual machine.  Only required when capturing a virtual machine to source this Gallery Image Version.

## GalleryDataDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite': The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
* **lun**: int (Required): This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
* **sizeInGB**: int (ReadOnly): This property indicates the size of the VHD to be created.
* **source**: [GalleryDiskImageSource](#gallerydiskimagesource): The source for the disk image.

## GalleryDiskImageSource
### Properties
* **id**: string: The id of the gallery artifact version source.
* **storageAccountId**: string: The Storage Account Id that contains the vhd blob being used as a source for this artifact version.
* **uri**: string: The uri of the gallery artifact version source. Currently used to specify vhd/blob source.

## GalleryExtendedLocation
### Properties
* **name**: string
* **type**: 'EdgeZone' | 'Unknown' | string: It is type of the extended location.

## GalleryIdentifier
### Properties
* **uniqueName**: string (ReadOnly): The unique name of the Shared Image Gallery. This name is generated automatically by Azure.

## GalleryIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the gallery identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The AAD tenant id of the gallery identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the gallery. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove all identities from the gallery.
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The list of user identities associated with the gallery. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## GalleryImageFeature
### Properties
* **name**: string: The name of the gallery image feature.
* **startsAtVersion**: string: The minimum gallery image version which supports this feature.
* **value**: string: The value of the gallery image feature.

## GalleryImageIdentifier
### Properties
* **offer**: string (Required): The name of the gallery image definition offer.
* **publisher**: string (Required): The name of the gallery image definition publisher.
* **sku**: string (Required): The name of the gallery image definition SKU.

## GalleryImageProperties
### Properties
* **allowUpdateImage**: bool: Optional. Must be set to true if the gallery image features are being updated.
* **architecture**: 'Arm64' | 'x64' | string: The architecture of the image. Applicable to OS disks only.
* **description**: string: The description of this gallery image definition resource. This property is updatable.
* **disallowed**: [Disallowed](#disallowed): Describes the disallowed disk types.
* **endOfLifeDate**: string: The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable.
* **eula**: string: The Eula agreement for the gallery image definition.
* **features**: [GalleryImageFeature](#galleryimagefeature)[]: A list of gallery image features.
* **hyperVGeneration**: 'V1' | 'V2' | string: The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
* **identifier**: [GalleryImageIdentifier](#galleryimageidentifier) (Required): This is the gallery image definition identifier.
* **osState**: 'Generalized' | 'Specialized' (Required): This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
* **osType**: 'Linux' | 'Windows' (Required): This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. Possible values are: **Windows,** **Linux.**
* **privacyStatementUri**: string: The privacy statement uri.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **purchasePlan**: [ImagePurchasePlan](#imagepurchaseplan): Describes the gallery image definition purchase plan. This is used by marketplace images.
* **recommended**: [RecommendedMachineConfiguration](#recommendedmachineconfiguration): The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
* **releaseNoteUri**: string: The release note uri.

## GalleryImageVersionProperties
### Properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **publishingProfile**: [GalleryImageVersionPublishingProfile](#galleryimageversionpublishingprofile): The publishing profile of a gallery image Version.
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly): This is the replication status of the gallery image version.
* **restore**: bool: Indicates if this is a soft-delete resource restoration request.
* **safetyProfile**: [GalleryImageVersionSafetyProfile](#galleryimageversionsafetyprofile): This is the safety profile of the Gallery Image Version.
* **securityProfile**: [ImageVersionSecurityProfile](#imageversionsecurityprofile): The security profile of a gallery image version
* **storageProfile**: [GalleryImageVersionStorageProfile](#galleryimageversionstorageprofile) (Required): This is the storage profile of a Gallery Image Version.
* **validationsProfile**: [ValidationsProfile](#validationsprofile) (ReadOnly): This is the validations profile of a Gallery Image Version.

## GalleryImageVersionPublishingProfile
### Properties
* **endOfLifeDate**: string: The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
* **excludeFromLatest**: bool: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
* **publishedDate**: string (ReadOnly): The timestamp for when the gallery image version is published.
* **replicaCount**: int: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
* **replicationMode**: 'Full' | 'Shallow' | string: Optional parameter which specifies the mode to be used for replication. This property is not updatable.
* **storageAccountType**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.
* **targetExtendedLocations**: [GalleryTargetExtendedLocation](#gallerytargetextendedlocation)[]: The target extended locations where the Image Version is going to be replicated to. This property is updatable.
* **targetRegions**: [TargetRegion](#targetregion)[]: The target regions where the Image Version is going to be replicated to. This property is updatable.

## GalleryImageVersionSafetyProfile
### Properties
* **allowDeletionOfReplicatedLocations**: bool: Indicates whether or not removing this Gallery Image Version from replicated regions is allowed.
* **blockDeletionBeforeEndOfLife**: bool: Indicates whether or not the deletion is blocked for this Gallery Image Version if its End Of Life has not expired.
* **policyViolations**: [PolicyViolation](#policyviolation)[] (ReadOnly): A list of Policy Violations that have been reported for this Gallery Image Version.
* **reportedForPolicyViolation**: bool (ReadOnly): Indicates whether this image has been reported as violating Microsoft's policies.

## GalleryImageVersionStorageProfile
### Properties
* **dataDiskImages**: [GalleryDataDiskImage](#gallerydatadiskimage)[]: A list of data disk images.
* **osDiskImage**: [GalleryOSDiskImage](#galleryosdiskimage): This is the OS disk image.
* **source**: [GalleryArtifactVersionFullSource](#galleryartifactversionfullsource): The source of the gallery artifact version.

## GalleryImageVersionUefiSettings
### Properties
* **additionalSignatures**: [UefiKeySignatures](#uefikeysignatures): Additional UEFI key signatures that will be added to the image in addition to the signature templates
* **signatureTemplateNames**: ('MicrosoftUefiCertificateAuthorityTemplate' | 'MicrosoftWindowsTemplate' | 'NoSignatureTemplate' | string)[]: The name of the template(s) that contains default UEFI key signatures that will be added to the image.

## GalleryInVMAccessControlProfileProperties
### Properties
* **applicableHostEndpoint**: 'IMDS' | 'WireServer' (Required): This property allows you to specify the Endpoint type for which this profile is defining the access control for. Possible values are: 'WireServer' or 'IMDS'
* **description**: string: The description of this gallery inVMAccessControlProfile resources. This property is updatable.
* **osType**: 'Linux' | 'Windows' (Required): This property allows you to specify the OS type of the VMs/VMSS for which this profile can be used against. Possible values are: 'Windows' or 'Linux'
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.

## GalleryInVMAccessControlProfileVersionProperties
### Properties
* **defaultAccess**: 'Allow' | 'Deny' | string (Required): This property allows you to specify if the requests will be allowed to access the host endpoints. Possible values are: 'Allow', 'Deny'.
* **excludeFromLatest**: bool: If set to true, Virtual Machines deployed from the latest version of the Resource Profile won't use this Profile version.
* **mode**: 'Audit' | 'Disabled' | 'Enforce' | string (Required): This property allows you to specify whether the access control rules are in Audit mode, in Enforce mode or Disabled. Possible values are: 'Audit', 'Enforce' or 'Disabled'.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **publishedDate**: string (ReadOnly): The timestamp for when the Resource Profile Version is published.
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly): This is the replication status of the gallery image version.
* **rules**: [AccessControlRules](#accesscontrolrules): This is the Access Control Rules specification for an inVMAccessControlProfile version.
* **targetLocations**: [TargetRegion](#targetregion)[]: The target regions where the Resource Profile version is going to be replicated to. This property is updatable.

## GalleryOSDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite': The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
* **sizeInGB**: int (ReadOnly): This property indicates the size of the VHD to be created.
* **source**: [GalleryDiskImageSource](#gallerydiskimagesource): The source for the disk image.

## GalleryProperties
### Properties
* **description**: string: The description of this Shared Image Gallery resource. This property is updatable.
* **identifier**: [GalleryIdentifier](#galleryidentifier): Describes the gallery unique name.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **sharingProfile**: [SharingProfile](#sharingprofile): Profile for gallery sharing to subscription or tenant
* **sharingStatus**: [SharingStatus](#sharingstatus) (ReadOnly): Sharing status of current gallery.
* **softDeletePolicy**: [SoftDeletePolicy](#softdeletepolicy): Contains information about the soft deletion policy of the gallery.

## GalleryTargetExtendedLocation
### Properties
* **encryption**: [EncryptionImages](#encryptionimages): Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
* **extendedLocation**: [GalleryExtendedLocation](#galleryextendedlocation): The name of the extended location.
* **extendedLocationReplicaCount**: int: The number of replicas of the Image Version to be created per extended location. This property is updatable.
* **name**: string: The name of the region.
* **storageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.

## ImagePurchasePlan
### Properties
* **name**: string: The plan ID.
* **product**: string: The product ID.
* **publisher**: string: The publisher ID.

## ImageVersionSecurityProfile
### Properties
* **uefiSettings**: [GalleryImageVersionUefiSettings](#galleryimageversionuefisettings): Contains UEFI settings for the image version.

## OSDiskImageEncryption
### Properties
* **diskEncryptionSetId**: string: A relative URI containing the resource ID of the disk encryption set.
* **securityProfile**: [OSDiskImageSecurityProfile](#osdiskimagesecurityprofile): This property specifies the security profile of an OS disk image.

## OSDiskImageSecurityProfile
### Properties
* **confidentialVMEncryptionType**: 'EncryptedVMGuestStateOnlyWithPmk' | 'EncryptedWithCmk' | 'EncryptedWithPmk' | 'NonPersistedTPM' | string: confidential VM encryption types
* **secureVMDiskEncryptionSetId**: string: secure VM disk encryption set id

## PlatformAttribute
### Properties
* **name**: string (ReadOnly): This property specifies the name of the platformAttribute. It is read-only.
* **value**: string (ReadOnly): This property specifies the value of the corresponding name property. It is read-only.

## PolicyViolation
### Properties
* **category**: 'CopyrightValidation' | 'ImageFlaggedUnsafe' | 'IpTheft' | 'Other' | string: Describes the nature of the policy violation.
* **details**: string: Describes specific details about why this policy violation was reported.

## RecommendedMachineConfiguration
### Properties
* **memory**: [ResourceRange](#resourcerange): Describes the resource range.
* **vCPUs**: [ResourceRange](#resourcerange): Describes the resource range.

## RegionalReplicationStatus
### Properties
* **details**: string (ReadOnly): The details of the replication status.
* **progress**: int (ReadOnly): It indicates progress of the replication job.
* **region**: string (ReadOnly): The region to which the gallery image version is being replicated to.
* **state**: 'Completed' | 'Failed' | 'Replicating' | 'Unknown' | string (ReadOnly): This is the regional replication state.

## RegionalSharingStatus
### Properties
* **details**: string: Details of gallery regional sharing failure.
* **region**: string: Region name
* **state**: 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string (ReadOnly): Gallery sharing state in current region

## ReplicationStatus
### Properties
* **aggregatedState**: 'Completed' | 'Failed' | 'InProgress' | 'Unknown' | string (ReadOnly): This is the aggregated replication status based on all the regional replication status flags.
* **summary**: [RegionalReplicationStatus](#regionalreplicationstatus)[] (ReadOnly): This is a summary of replication status for each region.

## ResourceRange
### Properties
* **max**: int: The maximum number of the resource.
* **min**: int: The minimum number of the resource.

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

## SharingProfile
### Properties
* **communityGalleryInfo**: [CommunityGalleryInfo](#communitygalleryinfo): Information of community gallery if current gallery is shared to community.
* **groups**: [SharingProfileGroup](#sharingprofilegroup)[] (ReadOnly): A list of sharing profile groups.
* **permissions**: 'Community' | 'Groups' | 'Private' | string: This property allows you to specify the permission of sharing gallery. Possible values are: **Private,** **Groups,** **Community.**

## SharingProfileGroup
### Properties
* **ids**: string[]: A list of subscription/tenant ids the gallery is aimed to be shared to.
* **type**: 'AADTenants' | 'Subscriptions' | string: This property allows you to specify the type of sharing group. Possible values are: **Subscriptions,** **AADTenants.**

## SharingStatus
### Properties
* **aggregatedState**: 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string (ReadOnly): Aggregated sharing state of current gallery.
* **summary**: [RegionalSharingStatus](#regionalsharingstatus)[]: Summary of all regional sharing status.

## SoftDeletePolicy
### Properties
* **isSoftDeleteEnabled**: bool: Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time.

## TargetRegion
### Properties
* **additionalReplicaSets**: [AdditionalReplicaSet](#additionalreplicaset)[]: List of storage sku with replica count to create direct drive replicas.
* **encryption**: [EncryptionImages](#encryptionimages): Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
* **excludeFromLatest**: bool: Contains the flag setting to hide an image when users specify version='latest'
* **name**: string (Required): The name of the region.
* **regionalReplicaCount**: int: The number of replicas of the Image Version to be created per region. This property is updatable.
* **storageAccountType**: 'PremiumV2_LRS' | 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: Specifies the storage account type to be used to store the image. This property is not updatable.

## UefiKey
### Properties
* **type**: 'sha256' | 'x509' | string: The type of key signature.
* **value**: string[]: The value of the key signature.

## UefiKeySignatures
### Properties
* **db**: [UefiKey](#uefikey)[]: The database of UEFI keys for this image version.
* **dbx**: [UefiKey](#uefikey)[]: The database of revoked UEFI keys for this image version.
* **kek**: [UefiKey](#uefikey)[]: The Key Encryption Keys of this image version.
* **pk**: [UefiKey](#uefikey): The Platform Key of this image version.

## UserArtifactManage
### Properties
* **install**: string (Required): Required. The path and arguments to install the gallery application. This is limited to 4096 characters.
* **remove**: string (Required): Required. The path and arguments to remove the gallery application. This is limited to 4096 characters.
* **update**: string: Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters.

## UserArtifactSettings
### Properties
* **configFileName**: string: Optional. The name to assign the downloaded config file on the VM. This is limited to 4096 characters. If not specified, the config file will be named the Gallery Application name appended with "_config".
* **packageFileName**: string: Optional. The name to assign the downloaded package file on the VM. This is limited to 4096 characters. If not specified, the package file will be named the same as the Gallery Application name.
* **scriptBehaviorAfterReboot**: 'None' | 'Rerun' | string: Optional. The action to be taken with regards to install/update/remove of the gallery application in the event of a reboot.

## UserArtifactSource
### Properties
* **defaultConfigurationLink**: string: Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob.
* **mediaLink**: string (Required): Required. The mediaLink of the artifact, must be a readable storage page blob.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesValue](#userassignedidentitiesvalue)

## UserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## ValidationsProfile
### Properties
* **executedValidations**: [ExecutedValidation](#executedvalidation)[]
* **platformAttributes**: [PlatformAttribute](#platformattribute)[]: This specifies the pub, offer, sku and version of the image version metadata
* **validationEtag**: string: The published time of the image version

