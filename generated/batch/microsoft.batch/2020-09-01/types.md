# Microsoft.Batch @ 2020-09-01

## Resource Microsoft.Batch/batchAccounts@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [BatchAccountIdentity](#batchaccountidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BatchAccountCreateProperties](#batchaccountcreateproperties)
* **tags**: [BatchAccountCreateParametersTags](#batchaccountcreateparameterstags)
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationProperties](#applicationproperties)
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/applications/versions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationPackageProperties](#applicationpackageproperties)
* **type**: 'Microsoft.Batch/batchAccounts/applications/versions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/certificates@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties)
* **type**: 'Microsoft.Batch/batchAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Batch/batchAccounts/pools@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PoolProperties](#poolproperties)
* **type**: 'Microsoft.Batch/batchAccounts/pools' (ReadOnly, DeployTimeConstant)

## BatchAccountIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)

## BatchAccountCreateProperties
### Properties
* **accountEndpoint**: string (ReadOnly)
* **activeJobAndJobScheduleQuota**: int (ReadOnly)
* **autoStorage**: [AutoStorageBaseProperties](#autostoragebaseproperties)
* **dedicatedCoreQuota**: int (ReadOnly)
* **dedicatedCoreQuotaPerVMFamily**: [VirtualMachineFamilyCoreQuota](#virtualmachinefamilycorequota)[] (ReadOnly)
* **dedicatedCoreQuotaPerVMFamilyEnforced**: bool (ReadOnly)
* **encryption**: [EncryptionProperties](#encryptionproperties)
* **keyVaultReference**: [KeyVaultReference](#keyvaultreference)
* **lowPriorityCoreQuota**: int (ReadOnly)
* **poolAllocationMode**: 'BatchService' | 'UserSubscription'
* **poolQuota**: int (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Succeeded' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'

## AutoStorageBaseProperties
### Properties
* **lastKeySync**: string (ReadOnly)
* **storageAccountId**: string (Required)

## VirtualMachineFamilyCoreQuota
### Properties
* **coreQuota**: int (ReadOnly)
* **name**: string (ReadOnly)

## EncryptionProperties
### Properties
* **keySource**: 'Microsoft.Batch' | 'Microsoft.KeyVault'
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)

## KeyVaultProperties
### Properties
* **keyIdentifier**: string

## KeyVaultReference
### Properties
* **id**: string (Required)
* **url**: string (Required)

## PrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly)
* **provisioningState**: 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string (ReadOnly)
* **description**: string (ReadOnly)
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (ReadOnly)

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
* **state**: 'Active' | 'Pending' (ReadOnly)
* **storageUrl**: string (ReadOnly)
* **storageUrlExpiry**: string (ReadOnly)

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
* **metadata**: [MetadataItem](#metadataitem)[]
* **mountConfiguration**: [MountConfiguration](#mountconfiguration)[]
* **networkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly)
* **resizeOperationStatus**: [ResizeOperationStatus](#resizeoperationstatus) (ReadOnly)
* **scaleSettings**: [ScaleSettings](#scalesettings)
* **startTask**: [StartTask](#starttask)
* **taskSchedulingPolicy**: [TaskSchedulingPolicy](#taskschedulingpolicy)
* **taskSlotsPerNode**: int
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
* **osFamily**: string (Required)
* **osVersion**: string

## VirtualMachineConfiguration
### Properties
* **containerConfiguration**: [ContainerConfiguration](#containerconfiguration)
* **dataDisks**: [DataDisk](#datadisk)[]
* **diskEncryptionConfiguration**: [DiskEncryptionConfiguration](#diskencryptionconfiguration)
* **imageReference**: [ImageReference](#imagereference) (Required)
* **licenseType**: string
* **nodeAgentSkuId**: string (Required)
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration)

## ContainerConfiguration
### Properties
* **containerImageNames**: string[]
* **containerRegistries**: [ContainerRegistry](#containerregistry)[]
* **type**: 'DockerCompatible' (Required)

## ContainerRegistry
### Properties
* **password**: string (Required)
* **registryServer**: string
* **username**: string (Required)

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite'
* **diskSizeGB**: int (Required)
* **lun**: int (Required)
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS'

## DiskEncryptionConfiguration
### Properties
* **targets**: 'OsDisk' | 'TemporaryDisk'[]

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
* **azureBlobFileSystemConfiguration**: [AzureBlobFileSystemConfiguration](#azureblobfilesystemconfiguration)
* **azureFileShareConfiguration**: [AzureFileShareConfiguration](#azurefileshareconfiguration)
* **cifsMountConfiguration**: [CifsMountConfiguration](#cifsmountconfiguration)
* **nfsMountConfiguration**: [NFSMountConfiguration](#nfsmountconfiguration)

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
* **endpointConfiguration**: [PoolEndpointConfiguration](#poolendpointconfiguration)
* **publicIPAddressConfiguration**: [PublicIPAddressConfiguration](#publicipaddressconfiguration)
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
* **sourcePortRanges**: string[]

## PublicIPAddressConfiguration
### Properties
* **ipAddressIds**: string[]
* **provision**: 'BatchManaged' | 'NoPublicIPAddresses' | 'UserManaged'

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
* **containerSettings**: [TaskContainerSettings](#taskcontainersettings)
* **environmentSettings**: [EnvironmentSetting](#environmentsetting)[]
* **maxTaskRetryCount**: int
* **resourceFiles**: [ResourceFile](#resourcefile)[]
* **userIdentity**: [UserIdentity](#useridentity)
* **waitForSuccess**: bool

## TaskContainerSettings
### Properties
* **containerRunOptions**: string
* **imageName**: string (Required)
* **registry**: [ContainerRegistry](#containerregistry)
* **workingDirectory**: 'ContainerImageDefault' | 'TaskWorkingDirectory'

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
* **windowsUserConfiguration**: [WindowsUserConfiguration](#windowsuserconfiguration)

## LinuxUserConfiguration
### Properties
* **gid**: int
* **sshPrivateKey**: string
* **uid**: int

## WindowsUserConfiguration
### Properties
* **loginMode**: 'Batch' | 'Interactive'

