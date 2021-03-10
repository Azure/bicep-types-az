# Microsoft.Batch @ 2017-09-01

## Resource Microsoft.Batch/batchAccounts@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BatchAccountCreateProperties](#batchaccountcreateproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allowUpdates**: bool
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **defaultVersion**: string (ReadOnly)
* **displayName**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **packages**: [ApplicationPackage](#applicationpackage)[] (ReadOnly)
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications/versions@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **format**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **lastActivationTime**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **state**: 'Active' | 'Pending' | 'Unmapped' (ReadOnly)
* **storageUrl**: string (ReadOnly)
* **storageUrlExpiry**: string (ReadOnly)
* **type**: 'Microsoft.Batch/batchAccounts/applications/versions' (ReadOnly, DeployTimeConstant)
* **version**: string (ReadOnly)

## Resource Microsoft.Batch/batchAccounts/certificates@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties)
* **type**: 'Microsoft.Batch/batchAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/pools@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PoolProperties](#poolproperties)
* **type**: 'Microsoft.Batch/batchAccounts/pools' (ReadOnly, DeployTimeConstant)

## BatchAccountCreateProperties
### Properties
* **accountEndpoint**: string (ReadOnly)
* **activeJobAndJobScheduleQuota**: int (ReadOnly)
* **autoStorage**: [AutoStorageBaseProperties](#autostoragebaseproperties)
* **dedicatedCoreQuota**: int (ReadOnly)
* **keyVaultReference**: [KeyVaultReference](#keyvaultreference)
* **lowPriorityCoreQuota**: int (ReadOnly)
* **poolAllocationMode**: 'BatchService' | 'UserSubscription'
* **poolQuota**: int (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Succeeded' (ReadOnly)

## AutoStorageBaseProperties
### Properties
* **lastKeySync**: string (ReadOnly)
* **storageAccountId**: string (Required)

## KeyVaultReference
### Properties
* **id**: string (Required)
* **url**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationPackage
### Properties
* **format**: string (ReadOnly)
* **id**: string (ReadOnly)
* **lastActivationTime**: string (ReadOnly)
* **state**: 'Active' | 'Pending' | 'Unmapped' (ReadOnly)
* **storageUrl**: string (ReadOnly)
* **storageUrlExpiry**: string (ReadOnly)
* **version**: string (ReadOnly)

## CertificateCreateOrUpdateProperties
### Properties
* **data**: string (Required, WriteOnly)
* **deleteCertificateError**: [DeleteCertificateError](#deletecertificateerror) (ReadOnly)
* **format**: 'Cer' | 'Pfx'
* **password**: string (WriteOnly)
* **previousProvisioningState**: 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)
* **previousProvisioningStateTransitionTime**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)
* **publicData**: string (ReadOnly)
* **thumbprint**: string
* **thumbprintAlgorithm**: string

## DeleteCertificateError
### Properties
* **code**: string (ReadOnly)
* **details**: [DeleteCertificateError](#deletecertificateerror)[] (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## PoolProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' | 'Stopping' (ReadOnly)
* **allocationStateTransitionTime**: string (ReadOnly)
* **applicationLicenses**: string[]
* **applicationPackages**: [ApplicationPackageReference](#applicationpackagereference)[]
* **autoScaleRun**: [AutoScaleRun](#autoscalerun) (ReadOnly)
* **certificates**: [CertificateReference](#certificatereference)[]
* **creationTime**: string (ReadOnly)
* **currentDedicatedNodes**: int (ReadOnly)
* **currentLowPriorityNodes**: int (ReadOnly)
* **deploymentConfiguration**: [DeploymentConfiguration](#deploymentconfiguration)
* **displayName**: string
* **interNodeCommunication**: 'Disabled' | 'Enabled'
* **lastModified**: string (ReadOnly)
* **maxTasksPerNode**: int
* **metadata**: [MetadataItem](#metadataitem)[]
* **networkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)
* **resizeOperationStatus**: [ResizeOperationStatus](#resizeoperationstatus) (ReadOnly)
* **scaleSettings**: [ScaleSettings](#scalesettings)
* **startTask**: [StartTask](#starttask)
* **taskSchedulingPolicy**: [TaskSchedulingPolicy](#taskschedulingpolicy)
* **userAccounts**: [UserAccount](#useraccount)[]
* **vmSize**: string

## ApplicationPackageReference
### Properties
* **id**: string (Required)
* **version**: string

## AutoScaleRun
### Properties
* **error**: [AutoScaleRunError](#autoscalerunerror)
* **evaluationTime**: string (Required)
* **results**: string

## AutoScaleRunError
### Properties
* **code**: string (Required)
* **details**: [AutoScaleRunError](#autoscalerunerror)[]
* **message**: string (Required)

## CertificateReference
### Properties
* **id**: string (Required)
* **storeLocation**: 'CurrentUser' | 'LocalMachine'
* **storeName**: string
* **visibility**: 'RemoteUser' | 'StartTask' | 'Task'[]

## DeploymentConfiguration
### Properties
* **cloudServiceConfiguration**: [CloudServiceConfiguration](#cloudserviceconfiguration)
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration)

## CloudServiceConfiguration
### Properties
* **currentOSVersion**: string
* **osFamily**: string (Required)
* **targetOSVersion**: string

## VirtualMachineConfiguration
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]
* **imageReference**: [ImageReference](#imagereference) (Required)
* **licenseType**: string
* **nodeAgentSkuId**: string (Required)
* **osDisk**: [OSDisk](#osdisk)
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration)

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **diskSizeGB**: int (Required)
* **lun**: int (Required)
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS'

## ImageReference
### Properties
* **id**: string
* **offer**: string
* **publisher**: string
* **sku**: string
* **version**: string

## OSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'

## WindowsConfiguration
### Properties
* **enableAutomaticUpdates**: bool

## MetadataItem
### Properties
* **name**: string (Required)
* **value**: string (Required)

## NetworkConfiguration
### Properties
* **endpointConfiguration**: [PoolEndpointConfiguration](#poolendpointconfiguration)
* **subnetId**: string

## PoolEndpointConfiguration
### Properties
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[] (Required)

## InboundNatPool
### Properties
* **backendPort**: int (Required)
* **frontendPortRangeEnd**: int (Required)
* **frontendPortRangeStart**: int (Required)
* **name**: string (Required)
* **networkSecurityGroupRules**: [NetworkSecurityGroupRule](#networksecuritygrouprule)[]
* **protocol**: 'TCP' | 'UDP' (Required)

## NetworkSecurityGroupRule
### Properties
* **access**: 'Allow' | 'Deny' (Required)
* **priority**: int (Required)
* **sourceAddressPrefix**: string (Required)

## ResizeOperationStatus
### Properties
* **errors**: [ResizeError](#resizeerror)[]
* **nodeDeallocationOption**: 'Requeue' | 'RetainedData' | 'TaskCompletion' | 'Terminate'
* **resizeTimeout**: string
* **startTime**: string
* **targetDedicatedNodes**: int
* **targetLowPriorityNodes**: int

## ResizeError
### Properties
* **code**: string (Required)
* **details**: [ResizeError](#resizeerror)[]
* **message**: string (Required)

## ScaleSettings
### Properties
* **autoScale**: [AutoScaleSettings](#autoscalesettings)
* **fixedScale**: [FixedScaleSettings](#fixedscalesettings)

## AutoScaleSettings
### Properties
* **evaluationInterval**: string
* **formula**: string (Required)

## FixedScaleSettings
### Properties
* **nodeDeallocationOption**: 'Requeue' | 'RetainedData' | 'TaskCompletion' | 'Terminate'
* **resizeTimeout**: string
* **targetDedicatedNodes**: int
* **targetLowPriorityNodes**: int

## StartTask
### Properties
* **commandLine**: string
* **environmentSettings**: [EnvironmentSetting](#environmentsetting)[]
* **maxTaskRetryCount**: int
* **resourceFiles**: [ResourceFile](#resourcefile)[]
* **userIdentity**: [UserIdentity](#useridentity)
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
* **autoUser**: [AutoUserSpecification](#autouserspecification)
* **userName**: string

## AutoUserSpecification
### Properties
* **elevationLevel**: 'Admin' | 'NonAdmin'
* **scope**: 'Pool' | 'Task'

## TaskSchedulingPolicy
### Properties
* **nodeFillType**: 'Pack' | 'Spread' (Required)

## UserAccount
### Properties
* **elevationLevel**: 'Admin' | 'NonAdmin'
* **linuxUserConfiguration**: [LinuxUserConfiguration](#linuxuserconfiguration)
* **name**: string (Required)
* **password**: string (Required)

## LinuxUserConfiguration
### Properties
* **gid**: int
* **sshPrivateKey**: string
* **uid**: int

