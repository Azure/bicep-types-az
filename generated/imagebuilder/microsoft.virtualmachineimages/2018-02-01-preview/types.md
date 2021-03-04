# Microsoft.VirtualMachineImages @ 2018-02-01-preview

## Resource Microsoft.VirtualMachineImages/imageTemplates@2018-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImageTemplateProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.VirtualMachineImages/imageTemplates' (ReadOnly, DeployTimeConstant)

## ImageTemplateProperties
### Properties
* **customize**: ImageTemplateCustomizer[]
* **distribute**: ImageTemplateDistributor[] (Required)
* **lastRunStatus**: ImageTemplateLastRunStatus (ReadOnly)
* **provisioningError**: ProvisioningError (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)
* **source**: ImageTemplateSource (Required)

## ImageTemplateCustomizer
* **Discriminator**: type

### Base Properties
* **name**: string
### ImageTemplateShellCustomizer
#### Properties
* **script**: string
* **type**: 'shell' (Required)


## ImageTemplateShellCustomizer
### Properties
* **script**: string
* **type**: 'shell' (Required)

## ImageTemplateDistributor
* **Discriminator**: type

### Base Properties
* **artifactTags**: ImageTemplateDistributorArtifactTags
* **runOutputName**: string (Required)
### ImageTemplateManagedImageDistributor
#### Properties
* **imageId**: string (Required)
* **location**: string (Required)
* **type**: 'managedImage' (Required)

### ImageTemplateSharedImageDistributor
#### Properties
* **galleryImageId**: string (Required)
* **replicationRegions**: string[] (Required)
* **type**: 'sharedImage' (Required)


## ImageTemplateDistributorArtifactTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ImageTemplateManagedImageDistributor
### Properties
* **imageId**: string (Required)
* **location**: string (Required)
* **type**: 'managedImage' (Required)

## ImageTemplateSharedImageDistributor
### Properties
* **galleryImageId**: string (Required)
* **replicationRegions**: string[] (Required)
* **type**: 'sharedImage' (Required)

## ImageTemplateLastRunStatus
### Properties
* **endTime**: string
* **message**: string
* **runState**: 'failed' | 'partiallySucceeded' | 'ready' | 'running' | 'succeeded'
* **runSubState**: 'building' | 'customizing' | 'distributing' | 'queued'
* **startTime**: string

## ProvisioningError
### Properties
* **message**: string
* **provisioningErrorCode**: 'BadCustomizerType' | 'BadISOSource' | 'BadPIRSource' | 'BadSourceType' | 'NoCustomizerShellScript' | 'Other' | 'ServerError'

## ImageTemplateSource
* **Discriminator**: type

### Base Properties
### ImageTemplateIsoSource
#### Properties
* **sha256Checksum**: string (Required)
* **sourceURI**: string (Required)
* **type**: 'ISO' (Required)

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

