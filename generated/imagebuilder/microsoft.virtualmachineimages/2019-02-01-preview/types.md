# Microsoft.VirtualMachineImages @ 2019-02-01-preview

## Resource Microsoft.VirtualMachineImages/imageTemplates@2019-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImageTemplateProperties](#imagetemplateproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
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
### PowerShell
#### Properties
* **inline**: string[]
* **script**: string
* **type**: 'PowerShell' (Required)
* **validExitCodes**: int[]

### Shell
#### Properties
* **inline**: string[]
* **script**: string
* **type**: 'Shell' (Required)

### WindowsRestart
#### Properties
* **restartCheckCommand**: string
* **restartCommand**: string
* **restartTimeout**: string
* **type**: 'WindowsRestart' (Required)


## PowerShell
### Properties
* **inline**: string[]
* **script**: string
* **type**: 'PowerShell' (Required)
* **validExitCodes**: int[]

## Shell
### Properties
* **inline**: string[]
* **script**: string
* **type**: 'Shell' (Required)

## WindowsRestart
### Properties
* **restartCheckCommand**: string
* **restartCommand**: string
* **restartTimeout**: string
* **type**: 'WindowsRestart' (Required)

## ImageTemplateDistributor
* **Discriminator**: type
### Base Properties
* **artifactTags**: [Dictionary<string,String>](#dictionarystringstring)
* **runOutputName**: string (Required)
### ManagedImage
#### Properties
* **imageId**: string (Required)
* **type**: 'ManagedImage' (Required)

### SharedImage
#### Properties
* **galleryImageId**: string (Required)
* **replicationRegions**: string[] (Required)
* **type**: 'SharedImage' (Required)

### VHD
#### Properties
* **type**: 'VHD' (Required)


## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedImage
### Properties
* **imageId**: string (Required)
* **type**: 'ManagedImage' (Required)

## SharedImage
### Properties
* **galleryImageId**: string (Required)
* **replicationRegions**: string[] (Required)
* **type**: 'SharedImage' (Required)

## VHD
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
### ISO
#### Properties
* **sha256Checksum**: string (Required)
* **sourceURI**: string (Required)
* **type**: 'ISO' (Required)

### ManagedImage
#### Properties
* **imageId**: string (Required)
* **type**: 'ManagedImage' (Required)

### PlatformImage
#### Properties
* **offer**: string
* **publisher**: string
* **sku**: string
* **type**: 'PlatformImage' (Required)
* **version**: string


## ISO
### Properties
* **sha256Checksum**: string (Required)
* **sourceURI**: string (Required)
* **type**: 'ISO' (Required)

## PlatformImage
### Properties
* **offer**: string
* **publisher**: string
* **sku**: string
* **type**: 'PlatformImage' (Required)
* **version**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

