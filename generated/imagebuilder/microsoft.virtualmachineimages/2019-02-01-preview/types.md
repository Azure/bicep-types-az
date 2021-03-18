# Microsoft.VirtualMachineImages @ 2019-02-01-preview

## Resource Microsoft.VirtualMachineImages/imageTemplates@2019-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImageTemplateProperties](#imagetemplateproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates' (ReadOnly, DeployTimeConstant)

## ImageTemplateProperties
### Properties
* **customize**: [ImageTemplateCustomizer](#imagetemplatecustomizer)[]
* **distribute**: [ImageTemplateDistributor](#imagetemplatedistributor)[] (Required)
* **lastRunStatus**: [ImageTemplateLastRunStatus](#imagetemplatelastrunstatus) (ReadOnly)
* **provisioningError**: [ProvisioningError](#provisioningerror) (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)
* **source**: [ImageTemplateSource](#imagetemplatesource) (Required)

## ImageTemplateCustomizer
* **Discriminator**: type

### Base Properties
* **name**: string
### ImageTemplatePowerShellCustomizer
#### Properties
* **inline**: string[]
* **script**: string
* **type**: 'PowerShell' (Required)
* **validExitCodes**: int[]

### ImageTemplateShellCustomizer
#### Properties
* **inline**: string[]
* **script**: string
* **type**: 'Shell' (Required)

### ImageTemplateRestartCustomizer
#### Properties
* **restartCheckCommand**: string
* **restartCommand**: string
* **restartTimeout**: string
* **type**: 'WindowsRestart' (Required)


## ImageTemplatePowerShellCustomizer
### Properties
* **inline**: string[]
* **script**: string
* **type**: 'PowerShell' (Required)
* **validExitCodes**: int[]

## ImageTemplateShellCustomizer
### Properties
* **inline**: string[]
* **script**: string
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
* **artifactTags**: [ImageTemplateDistributorArtifactTags](#imagetemplatedistributorartifacttags)
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
* **provisioningErrorCode**: 'BadCustomizerType' | 'BadDistributeType' | 'BadISOSource' | 'BadManagedImageSource' | 'BadPIRSource' | 'BadSharedImageDistribute' | 'BadSourceType' | 'NoCustomizerScript' | 'Other' | 'ServerError' | 'UnsupportedCustomizerType'

## ImageTemplateSource
* **Discriminator**: type

### Base Properties
### ImageTemplateIsoSource
#### Properties
* **sha256Checksum**: string (Required)
* **sourceURI**: string (Required)
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


## ImageTemplateIsoSource
### Properties
* **sha256Checksum**: string (Required)
* **sourceURI**: string (Required)
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

