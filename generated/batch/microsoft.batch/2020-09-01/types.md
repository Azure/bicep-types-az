# Microsoft.Batch @ 2020-09-01

## Resource Microsoft.Batch/batchAccounts@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: BatchAccountIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BatchAccountCreateProperties
* **tags**: BatchAccountCreateParametersTags
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationProperties
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications/versions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationPackageProperties
* **type**: 'Microsoft.Batch/batchAccounts/applications/versions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/certificates@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateCreateOrUpdateProperties
* **type**: 'Microsoft.Batch/batchAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/pools@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PoolProperties
* **type**: 'Microsoft.Batch/batchAccounts/pools' (ReadOnly, DeployTimeConstant)

## BatchAccountIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## BatchAccountCreateProperties
### Properties
* **autoStorage**: AutoStorageBaseProperties
* **encryption**: EncryptionProperties
* **keyVaultReference**: KeyVaultReference

## AutoStorageBaseProperties
### Properties
* **storageAccountId**: string (Required)

## EncryptionProperties
### Properties
* **keyVaultProperties**: KeyVaultProperties

## KeyVaultProperties
### Properties
* **keyIdentifier**: string

## KeyVaultReference
### Properties
* **id**: string (Required)
* **url**: string (Required)

## BatchAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationProperties
### Properties
* **allowUpdates**: bool
* **defaultVersion**: string
* **displayName**: string

## ApplicationPackageProperties
### Properties
* **format**: string (ReadOnly)
* **lastActivationTime**: string (ReadOnly)
* **storageUrl**: string (ReadOnly)
* **storageUrlExpiry**: string (ReadOnly)

## CertificateCreateOrUpdateProperties
### Properties
* **thumbprint**: string
* **thumbprintAlgorithm**: string

## PoolProperties
### Properties
* **allocationStateTransitionTime**: string (ReadOnly)
* **applicationLicenses**: string[]
* **applicationPackages**: ApplicationPackageReference[]
* **autoScaleRun**: AutoScaleRun (ReadOnly)
* **certificates**: CertificateReference[]
* **creationTime**: string (ReadOnly)
* **currentDedicatedNodes**: int (ReadOnly)
* **currentLowPriorityNodes**: int (ReadOnly)
* **deploymentConfiguration**: DeploymentConfiguration
* **displayName**: string
* **lastModified**: string (ReadOnly)
* **metadata**: MetadataItem[]
* **mountConfiguration**: MountConfiguration[]
* **networkConfiguration**: NetworkConfiguration
* **provisioningStateTransitionTime**: string (ReadOnly)
* **resizeOperationStatus**: ResizeOperationStatus (ReadOnly)
* **scaleSettings**: ScaleSettings
* **startTask**: StartTask
* **taskSchedulingPolicy**: TaskSchedulingPolicy
* **taskSlotsPerNode**: int
* **userAccounts**: UserAccount[]
* **vmSize**: string

## ApplicationPackageReference
### Properties
* **id**: string (Required)
* **version**: string

## AutoScaleRun
### Properties
* **error**: AutoScaleRunError
* **evaluationTime**: string (Required)
* **results**: string

## AutoScaleRunError
### Properties
* **code**: string (Required)
* **details**: AutoScaleRunError[]
* **message**: string (Required)

## CertificateReference
### Properties
* **id**: string (Required)
* **storeName**: string
* **visibility**: array

## DeploymentConfiguration
### Properties
* **cloudServiceConfiguration**: CloudServiceConfiguration
* **virtualMachineConfiguration**: VirtualMachineConfiguration

## CloudServiceConfiguration
### Properties
* **osFamily**: string (Required)
* **osVersion**: string

## VirtualMachineConfiguration
### Properties
* **containerConfiguration**: ContainerConfiguration
* **dataDisks**: DataDisk[]
* **diskEncryptionConfiguration**: DiskEncryptionConfiguration
* **imageReference**: ImageReference (Required)
* **licenseType**: string
* **nodeAgentSkuId**: string (Required)
* **windowsConfiguration**: WindowsConfiguration

## ContainerConfiguration
### Properties
* **containerImageNames**: string[]
* **containerRegistries**: ContainerRegistry[]

## ContainerRegistry
### Properties
* **password**: string (Required)
* **registryServer**: string
* **userName**: string (Required)

## DataDisk
### Properties
* **diskSizeGB**: int (Required)
* **lun**: int (Required)

## DiskEncryptionConfiguration
### Properties
* **targets**: array

## ImageReference
### Properties
* **id**: string
* **offer**: string
* **publisher**: string
* **sku**: string
* **version**: string

## WindowsConfiguration
### Properties
* **enableAutomaticUpdates**: bool

## MetadataItem
### Properties
* **name**: string (Required)
* **value**: string (Required)

## MountConfiguration
### Properties
* **azureBlobFileSystemConfiguration**: AzureBlobFileSystemConfiguration
* **azureFileShareConfiguration**: AzureFileShareConfiguration
* **cifsMountConfiguration**: CifsMountConfiguration
* **nfsMountConfiguration**: NFSMountConfiguration

## AzureBlobFileSystemConfiguration
### Properties
* **accountKey**: string
* **accountName**: string (Required)
* **blobfuseOptions**: string
* **containerName**: string (Required)
* **relativeMountPath**: string (Required)
* **sasKey**: string

## AzureFileShareConfiguration
### Properties
* **accountKey**: string (Required)
* **accountName**: string (Required)
* **azureFileUrl**: string (Required)
* **mountOptions**: string
* **relativeMountPath**: string (Required)

## CifsMountConfiguration
### Properties
* **mountOptions**: string
* **password**: string (Required)
* **relativeMountPath**: string (Required)
* **source**: string (Required)
* **username**: string (Required)

## NFSMountConfiguration
### Properties
* **mountOptions**: string
* **relativeMountPath**: string (Required)
* **source**: string (Required)

## NetworkConfiguration
### Properties
* **endpointConfiguration**: PoolEndpointConfiguration
* **publicIPAddressConfiguration**: PublicIPAddressConfiguration
* **subnetId**: string

## PoolEndpointConfiguration
### Properties
* **inboundNatPools**: InboundNatPool[] (Required)

## InboundNatPool
### Properties
* **backendPort**: int (Required)
* **frontendPortRangeEnd**: int (Required)
* **frontendPortRangeStart**: int (Required)
* **name**: string (Required)
* **networkSecurityGroupRules**: NetworkSecurityGroupRule[]

## NetworkSecurityGroupRule
### Properties
* **priority**: int (Required)
* **sourceAddressPrefix**: string (Required)
* **sourcePortRanges**: string[]

## PublicIPAddressConfiguration
### Properties
* **ipAddressIds**: string[]

## ResizeOperationStatus
### Properties
* **errors**: ResizeError[]
* **resizeTimeout**: any
* **startTime**: string
* **targetDedicatedNodes**: int
* **targetLowPriorityNodes**: int

## ResizeError
### Properties
* **code**: string (Required)
* **details**: ResizeError[]
* **message**: string (Required)

## ScaleSettings
### Properties
* **autoScale**: AutoScaleSettings
* **fixedScale**: FixedScaleSettings

## AutoScaleSettings
### Properties
* **evaluationInterval**: any
* **formula**: string (Required)

## FixedScaleSettings
### Properties
* **resizeTimeout**: any
* **targetDedicatedNodes**: int
* **targetLowPriorityNodes**: int

## StartTask
### Properties
* **commandLine**: string
* **containerSettings**: TaskContainerSettings
* **environmentSettings**: EnvironmentSetting[]
* **maxTaskRetryCount**: int
* **resourceFiles**: ResourceFile[]
* **userIdentity**: UserIdentity
* **waitForSuccess**: bool

## TaskContainerSettings
### Properties
* **containerRunOptions**: string
* **imageName**: string (Required)
* **registry**: ContainerRegistry

## EnvironmentSetting
### Properties
* **name**: string (Required)
* **value**: string

## ResourceFile
### Properties
* **autoStorageContainerName**: string
* **blobPrefix**: string
* **fileMode**: string
* **filePath**: string
* **httpUrl**: string
* **storageContainerUrl**: string

## UserIdentity
### Properties
* **autoUser**: AutoUserSpecification
* **userName**: string

## AutoUserSpecification
### Properties

## TaskSchedulingPolicy
### Properties

## UserAccount
### Properties
* **linuxUserConfiguration**: LinuxUserConfiguration
* **name**: string (Required)
* **password**: string (Required)
* **windowsUserConfiguration**: WindowsUserConfiguration

## LinuxUserConfiguration
### Properties
* **gid**: int
* **sshPrivateKey**: string
* **uid**: int

## WindowsUserConfiguration
### Properties

