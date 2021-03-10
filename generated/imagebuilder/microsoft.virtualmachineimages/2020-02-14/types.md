# Microsoft.VirtualMachineImages @ 2020-02-14

## Resource Microsoft.VirtualMachineImages/imageTemplates@2020-02-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-14' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ImageTemplateIdentity](#imagetemplateidentity) (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImageTemplateProperties](#imagetemplateproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates' (ReadOnly, DeployTimeConstant)

## ImageTemplateIdentity
### Properties
* **type**: 'None' | 'UserAssigned'
* **userAssignedIdentities**: [ImageTemplateIdentityUserAssignedIdentities](#imagetemplateidentityuserassignedidentities)

## ImageTemplateIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentsVrq145SchemasImagetemplateidentityPropertiesUserassignedidentitiesAdditionalproperties](#componentsvrq145schemasimagetemplateidentitypropertiesuserassignedidentitiesadditionalproperties)

## ComponentsVrq145SchemasImagetemplateidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ImageTemplateProperties
### Properties
* **buildTimeoutInMinutes**: int
* **customize**: [ImageTemplateCustomizer](#imagetemplatecustomizer)[]
* **distribute**: [ImageTemplateDistributor](#imagetemplatedistributor)[] (Required)
* **lastRunStatus**: [ImageTemplateLastRunStatus](#imagetemplatelastrunstatus) (ReadOnly)
* **provisioningError**: [ProvisioningError](#provisioningerror) (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: [ImageTemplateSource](#imagetemplatesource) (Required)
* **vmProfile**: [ImageTemplateVmProfile](#imagetemplatevmprofile)

## ImageTemplateCustomizer
* **Discriminator**: type

### Base Properties
* **name**: string
### ImageTemplateFileCustomizer
#### Properties
* **destination**: string
* **sha256Checksum**: string
* **sourceUri**: string
* **type**: 'File' (Required)

### ImageTemplatePowerShellCustomizer
#### Properties
* **inline**: string[]
* **runAsSystem**: bool
* **runElevated**: bool
* **scriptUri**: string
* **sha256Checksum**: string
* **type**: 'PowerShell' (Required)
* **validExitCodes**: int[]

### ImageTemplateShellCustomizer
#### Properties
* **inline**: string[]
* **scriptUri**: string
* **sha256Checksum**: string
* **type**: 'Shell' (Required)

### ImageTemplateRestartCustomizer
#### Properties
* **restartCheckCommand**: string
* **restartCommand**: string
* **restartTimeout**: string
* **type**: 'WindowsRestart' (Required)

### ImageTemplateWindowsUpdateCustomizer
#### Properties
* **filters**: string[]
* **searchCriteria**: string
* **type**: 'WindowsUpdate' (Required)
* **updateLimit**: int


## ImageTemplateFileCustomizer
### Properties
* **destination**: string
* **sha256Checksum**: string
* **sourceUri**: string
* **type**: 'File' (Required)

## ImageTemplatePowerShellCustomizer
### Properties
* **inline**: string[]
* **runAsSystem**: bool
* **runElevated**: bool
* **scriptUri**: string
* **sha256Checksum**: string
* **type**: 'PowerShell' (Required)
* **validExitCodes**: int[]

## ImageTemplateShellCustomizer
### Properties
* **inline**: string[]
* **scriptUri**: string
* **sha256Checksum**: string
* **type**: 'Shell' (Required)

## ImageTemplateRestartCustomizer
### Properties
* **restartCheckCommand**: string
* **restartCommand**: string
* **restartTimeout**: string
* **type**: 'WindowsRestart' (Required)

## ImageTemplateWindowsUpdateCustomizer
### Properties
* **filters**: string[]
* **searchCriteria**: string
* **type**: 'WindowsUpdate' (Required)
* **updateLimit**: int

## ImageTemplateDistributor
* **Discriminator**: type

### Base Properties
* **artifactTags**: [ImageTemplateDistributorArtifactTags](#imagetemplatedistributorartifacttags)
* **runOutputName**: string (Required)
### ImageTemplateManagedImageDistributor
#### Properties
* **imageId**: string (Required)
* **location**: string (Required)
* **type**: 'ManagedImage' (Required)

### ImageTemplateSharedImageDistributor
#### Properties
* **excludeFromLatest**: bool
* **galleryImageId**: string (Required)
* **replicationRegions**: string[] (Required)
* **storageAccountType**: 'Standard_LRS' | 'Standard_ZRS'
* **type**: 'SharedImage' (Required)

### ImageTemplateVhdDistributor
#### Properties
* **type**: 'VHD' (Required)


## ImageTemplateDistributorArtifactTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ImageTemplateManagedImageDistributor
### Properties
* **imageId**: string (Required)
* **location**: string (Required)
* **type**: 'ManagedImage' (Required)

## ImageTemplateSharedImageDistributor
### Properties
* **excludeFromLatest**: bool
* **galleryImageId**: string (Required)
* **replicationRegions**: string[] (Required)
* **storageAccountType**: 'Standard_LRS' | 'Standard_ZRS'
* **type**: 'SharedImage' (Required)

## ImageTemplateVhdDistributor
### Properties
* **type**: 'VHD' (Required)

## ImageTemplateLastRunStatus
### Properties
* **endTime**: string
* **message**: string
* **runState**: 'Canceled' | 'Canceling' | 'Failed' | 'PartiallySucceeded' | 'Running' | 'Succeeded'
* **runSubState**: 'Building' | 'Customizing' | 'Distributing' | 'Queued'
* **startTime**: string

## ProvisioningError
### Properties
* **message**: string
* **provisioningErrorCode**: 'BadCustomizerType' | 'BadDistributeType' | 'BadManagedImageSource' | 'BadPIRSource' | 'BadSharedImageDistribute' | 'BadSharedImageVersionSource' | 'BadSourceType' | 'NoCustomizerScript' | 'Other' | 'ServerError' | 'UnsupportedCustomizerType'

## ImageTemplateSource
* **Discriminator**: type

### Base Properties
### ImageTemplateManagedImageSource
#### Properties
* **imageId**: string (Required)
* **type**: 'ManagedImage' (Required)

### ImageTemplatePlatformImageSource
#### Properties
* **offer**: string
* **planInfo**: [PlatformImagePurchasePlan](#platformimagepurchaseplan)
* **publisher**: string
* **sku**: string
* **type**: 'PlatformImage' (Required)
* **version**: string

### ImageTemplateSharedImageVersionSource
#### Properties
* **imageVersionId**: string (Required)
* **type**: 'SharedImageVersion' (Required)


## ImageTemplateManagedImageSource
### Properties
* **imageId**: string (Required)
* **type**: 'ManagedImage' (Required)

## ImageTemplatePlatformImageSource
### Properties
* **offer**: string
* **planInfo**: [PlatformImagePurchasePlan](#platformimagepurchaseplan)
* **publisher**: string
* **sku**: string
* **type**: 'PlatformImage' (Required)
* **version**: string

## PlatformImagePurchasePlan
### Properties
* **planName**: string (Required)
* **planProduct**: string (Required)
* **planPublisher**: string (Required)

## ImageTemplateSharedImageVersionSource
### Properties
* **imageVersionId**: string (Required)
* **type**: 'SharedImageVersion' (Required)

## ImageTemplateVmProfile
### Properties
* **osDiskSizeGB**: int
* **vmSize**: string
* **vnetConfig**: [VirtualNetworkConfig](#virtualnetworkconfig)

## VirtualNetworkConfig
### Properties
* **subnetId**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

