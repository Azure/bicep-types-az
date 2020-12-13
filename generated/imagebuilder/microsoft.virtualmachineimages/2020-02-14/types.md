# Microsoft.VirtualMachineImages @ 2020-02-14

## Resource Microsoft.VirtualMachineImages/imageTemplates@2020-02-14
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-14' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ImageTemplateIdentity (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImageTemplateProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates' (ReadOnly, DeployTimeConstant)

## ImageTemplateIdentity
### Properties
* **type**: 'None' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,Schemas22UserAssignedIdentitiesValue>

## Dictionary<string,Schemas22UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: schemas:22_userAssignedIdentitiesValue

## schemas:22_userAssignedIdentitiesValue
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
* **runAsSystem**: bool
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

### WindowsUpdate
#### Properties
* **filters**: string[]
* **searchCriteria**: string
* **type**: 'WindowsUpdate' (Required)
* **updateLimit**: int


## File
### Properties
* **destination**: string
* **sha256Checksum**: string
* **sourceUri**: string
* **type**: 'File' (Required)

## PowerShell
### Properties
* **inline**: string[]
* **runAsSystem**: bool
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

## WindowsUpdate
### Properties
* **filters**: string[]
* **searchCriteria**: string
* **type**: 'WindowsUpdate' (Required)
* **updateLimit**: int

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
* **excludeFromLatest**: bool
* **galleryImageId**: string (Required)
* **replicationRegions**: string[] (Required)
* **storageAccountType**: 'Standard_LRS' | 'Standard_ZRS'
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
* **excludeFromLatest**: bool
* **galleryImageId**: string (Required)
* **replicationRegions**: string[] (Required)
* **storageAccountType**: 'Standard_LRS' | 'Standard_ZRS'
* **type**: 'SharedImage' (Required)

## VHD
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
### ManagedImage
#### Properties
* **imageId**: string (Required)
* **type**: 'ManagedImage' (Required)

### PlatformImage
#### Properties
* **offer**: string
* **planInfo**: PlatformImagePurchasePlan
* **publisher**: string
* **sku**: string
* **type**: 'PlatformImage' (Required)
* **version**: string

### SharedImageVersion
#### Properties
* **imageVersionId**: string (Required)
* **type**: 'SharedImageVersion' (Required)


## PlatformImage
### Properties
* **offer**: string
* **planInfo**: PlatformImagePurchasePlan
* **publisher**: string
* **sku**: string
* **type**: 'PlatformImage' (Required)
* **version**: string

## PlatformImagePurchasePlan
### Properties
* **planName**: string (Required)
* **planProduct**: string (Required)
* **planPublisher**: string (Required)

## SharedImageVersion
### Properties
* **imageVersionId**: string (Required)
* **type**: 'SharedImageVersion' (Required)

## ImageTemplateVmProfile
### Properties
* **osDiskSizeGB**: int
* **vmSize**: string
* **vnetConfig**: VirtualNetworkConfig

## VirtualNetworkConfig
### Properties
* **subnetId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

