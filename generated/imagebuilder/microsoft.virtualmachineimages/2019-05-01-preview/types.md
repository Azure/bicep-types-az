# Microsoft.VirtualMachineImages @ 2019-05-01-preview

## Resource Microsoft.VirtualMachineImages/imageTemplates@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ImageTemplateIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImageTemplateProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates' (ReadOnly, DeployTimeConstant)

## ImageTemplateIdentity
### Properties
* **type**: 'None' | 'UserAssigned'
* **userAssignedIdentities**: ImageTemplateIdentityUserAssignedIdentities

## ImageTemplateIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: ComponentsVrq145SchemasImagetemplateidentityPropertiesUserassignedidentitiesAdditionalproperties

## ComponentsVrq145SchemasImagetemplateidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ImageTemplateProperties
### Properties
* **buildTimeoutInMinutes**: int
* **customize**: ImageTemplateCustomizer[]
* **distribute**: ImageTemplateDistributor[] (Required)
* **lastRunStatus**: ImageTemplateLastRunStatus (ReadOnly)
* **provisioningError**: ProvisioningError (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: ImageTemplateSource (Required)
* **vmProfile**: ImageTemplateVmProfile

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


## ImageTemplateFileCustomizer
### Properties
* **destination**: string
* **sha256Checksum**: string
* **sourceUri**: string
* **type**: 'File' (Required)

## ImageTemplatePowerShellCustomizer
### Properties
* **inline**: string[]
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

## ImageTemplateDistributor
* **Discriminator**: type

### Base Properties
* **artifactTags**: ImageTemplateDistributorArtifactTags
* **runOutputName**: string (Required)
### ImageTemplateManagedImageDistributor
#### Properties
* **imageId**: string (Required)
* **location**: string (Required)
* **type**: 'ManagedImage' (Required)

### ImageTemplateSharedImageDistributor
#### Properties
* **galleryImageId**: string (Required)
* **replicationRegions**: string[] (Required)
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
* **galleryImageId**: string (Required)
* **replicationRegions**: string[] (Required)
* **type**: 'SharedImage' (Required)

## ImageTemplateVhdDistributor
### Properties
* **type**: 'VHD' (Required)

## ImageTemplateLastRunStatus
### Properties
* **endTime**: string
* **message**: string
* **runState**: 'Failed' | 'PartiallySucceeded' | 'Running' | 'Succeeded'
* **runSubState**: 'Building' | 'Customizing' | 'Distributing' | 'Queued'
* **startTime**: string

## ProvisioningError
### Properties
* **message**: string
* **provisioningErrorCode**: 'BadCustomizerType' | 'BadDistributeType' | 'BadISOSource' | 'BadManagedImageSource' | 'BadPIRSource' | 'BadSharedImageDistribute' | 'BadSharedImageVersionSource' | 'BadSourceType' | 'NoCustomizerScript' | 'Other' | 'ServerError' | 'UnsupportedCustomizerType'

## ImageTemplateSource
* **Discriminator**: type

### Base Properties
### ImageTemplateIsoSource
#### Properties
* **sha256Checksum**: string (Required)
* **sourceUri**: string (Required)
* **type**: 'ISO' (Required)

### ImageTemplateManagedImageSource
#### Properties
* **imageId**: string (Required)
* **type**: 'ManagedImage' (Required)

### ImageTemplatePlatformImageSource
#### Properties
* **offer**: string
* **publisher**: string
* **sku**: string
* **type**: 'PlatformImage' (Required)
* **version**: string

### ImageTemplateSharedImageVersionSource
#### Properties
* **imageVersionId**: string (Required)
* **type**: 'SharedImageVersion' (Required)


## ImageTemplateIsoSource
### Properties
* **sha256Checksum**: string (Required)
* **sourceUri**: string (Required)
* **type**: 'ISO' (Required)

## ImageTemplateManagedImageSource
### Properties
* **imageId**: string (Required)
* **type**: 'ManagedImage' (Required)

## ImageTemplatePlatformImageSource
### Properties
* **offer**: string
* **publisher**: string
* **sku**: string
* **type**: 'PlatformImage' (Required)
* **version**: string

## ImageTemplateSharedImageVersionSource
### Properties
* **imageVersionId**: string (Required)
* **type**: 'SharedImageVersion' (Required)

## ImageTemplateVmProfile
### Properties
* **vmSize**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

