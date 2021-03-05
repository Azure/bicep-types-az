# Microsoft.Batch @ 2017-09-01

## Resource Microsoft.Batch/batchAccounts@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BatchAccountCreateProperties
* **tags**: BatchAccountCreateParametersTags
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allowUpdates**: bool
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **displayName**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/certificates@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateCreateOrUpdateProperties
* **type**: 'Microsoft.Batch/batchAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/pools@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PoolProperties
* **type**: 'Microsoft.Batch/batchAccounts/pools' (ReadOnly, DeployTimeConstant)

## BatchAccountCreateProperties
### Properties
* **autoStorage**: AutoStorageBaseProperties
* **keyVaultReference**: KeyVaultReference

## AutoStorageBaseProperties
### Properties
* **storageAccountId**: string (Required)

## KeyVaultReference
### Properties
* **id**: string (Required)
* **url**: string (Required)

## BatchAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **maxTasksPerNode**: int
* **metadata**: MetadataItem[]
* **networkConfiguration**: NetworkConfiguration
* **provisioningStateTransitionTime**: string (ReadOnly)
* **resizeOperationStatus**: ResizeOperationStatus (ReadOnly)
* **scaleSettings**: ScaleSettings
* **startTask**: StartTask
* **taskSchedulingPolicy**: TaskSchedulingPolicy
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
* **currentOSVersion**: string
* **osFamily**: string (Required)
* **targetOSVersion**: string

## VirtualMachineConfiguration
### Properties
* **dataDisks**: DataDisk[]
* **imageReference**: ImageReference (Required)
* **licenseType**: string
* **nodeAgentSkuId**: string (Required)
* **osDisk**: OSDisk
* **windowsConfiguration**: WindowsConfiguration

## DataDisk
### Properties
* **diskSizeGB**: int (Required)
* **lun**: int (Required)

## ImageReference
### Properties
* **id**: string
* **offer**: string
* **publisher**: string
* **sku**: string
* **version**: string

## OSDisk
### Properties

## WindowsConfiguration
### Properties
* **enableAutomaticUpdates**: bool

## MetadataItem
### Properties
* **name**: string (Required)
* **value**: string (Required)

## NetworkConfiguration
### Properties
* **endpointConfiguration**: PoolEndpointConfiguration
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
* **environmentSettings**: EnvironmentSetting[]
* **maxTaskRetryCount**: int
* **resourceFiles**: ResourceFile[]
* **userIdentity**: UserIdentity
* **waitForSuccess**: bool

## EnvironmentSetting
### Properties
* **name**: string (Required)
* **value**: string

## ResourceFile
### Properties
* **blobSource**: string (Required)
* **fileMode**: string
* **filePath**: string (Required)

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

## LinuxUserConfiguration
### Properties
* **gid**: int
* **sshPrivateKey**: string
* **uid**: int

