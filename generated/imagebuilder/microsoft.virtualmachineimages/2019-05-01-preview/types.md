# Microsoft.VirtualMachineImages @ 2019-05-01-preview

## Resource Microsoft.VirtualMachineImages/imageTemplates@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ImageTemplateIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImageTemplateProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates' (ReadOnly, DeployTimeConstant)

## ImageTemplateIdentity
### Properties
* **type**: 'None' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,Schemas20UserAssignedIdentitiesValue>

## Dictionary<string,Schemas20UserAssignedIdentitiesValue>
### Additional Properties
* **Additional Properties Type**: schemas:20_userAssignedIdentitiesValue

## schemas:20_userAssignedIdentitiesValue
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
### File
#### Properties
* **destination**: string
* **sha256Checksum**: string
* **sourceUri**: string
* **type**: 'File' (Required)

### PowerShell
#### Properties
* **inline**: string[]
* **runElevated**: bool
* **scriptUri**: string
* **sha256Checksum**: string
* **type**: 'PowerShell' (Required)
* **validExitCodes**: int[]

### Shell
#### Properties
* **inline**: string[]
* **scriptUri**: string
* **sha256Checksum**: string
* **type**: 'Shell' (Required)

### WindowsRestart
#### Properties
* **restartCheckCommand**: string
* **restartCommand**: string
* **restartTimeout**: string
* **type**: 'WindowsRestart' (Required)


## File
### Properties
* **destination**: string
* **sha256Checksum**: string
* **sourceUri**: string
* **type**: 'File' (Required)

## PowerShell
### Properties
* **inline**: string[]
* **runElevated**: bool
* **scriptUri**: string
* **sha256Checksum**: string
* **type**: 'PowerShell' (Required)
* **validExitCodes**: int[]

## Shell
### Properties
* **inline**: string[]
* **scriptUri**: string
* **sha256Checksum**: string
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
* **artifactTags**: Dictionary<string,String>
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
* **provisioningErrorCode**: 'BadCustomizerType' | 'BadDistributeType' | 'BadISOSource' | 'BadManagedImageSource' | 'BadPIRSource' | 'BadSharedImageDistribute' | 'BadSharedImageVersionSource' | 'BadSourceType' | 'NoCustomizerScript' | 'Other' | 'ServerError' | 'UnsupportedCustomizerType'

## ImageTemplateSource
* **Discriminator**: type
### Base Properties
### ISO
#### Properties
* **sha256Checksum**: string (Required)
* **sourceUri**: string (Required)
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

### SharedImageVersion
#### Properties
* **imageVersionId**: string (Required)
* **type**: 'SharedImageVersion' (Required)


## ISO
### Properties
* **sha256Checksum**: string (Required)
* **sourceUri**: string (Required)
* **type**: 'ISO' (Required)

## PlatformImage
### Properties
* **offer**: string
* **publisher**: string
* **sku**: string
* **type**: 'PlatformImage' (Required)
* **version**: string

## SharedImageVersion
### Properties
* **imageVersionId**: string (Required)
* **type**: 'SharedImageVersion' (Required)

## ImageTemplateVmProfile
### Properties
* **vmSize**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

