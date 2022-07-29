# Microsoft.Batch @ 2022-06-01

## Resource Microsoft.Batch/batchAccounts@2022-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [BatchAccountIdentity](#batchaccountidentity): The identity of the Batch account.
* **location**: string (Required): The region in which to create the account.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BatchAccountCreatePropertiesOrBatchAccountProperties](#batchaccountcreatepropertiesorbatchaccountproperties): The properties of the Batch account.
* **tags**: [BatchAccountCreateParametersTags](#batchaccountcreateparameterstags): The user-specified tags associated with the account.
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/applications@2022-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties): The properties associated with the Application.
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/applications/versions@2022-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationPackageProperties](#applicationpackageproperties): The properties associated with the Application Package.
* **type**: 'Microsoft.Batch/batchAccounts/applications/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/certificates@2022-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateCreateOrUpdatePropertiesOrCertificateProperties](#certificatecreateorupdatepropertiesorcertificateproperties): The properties associated with the certificate.
* **type**: 'Microsoft.Batch/batchAccounts/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/detectors@2022-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorResponseProperties](#detectorresponseproperties) (ReadOnly): The properties associated with the detector.
* **type**: 'Microsoft.Batch/batchAccounts/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/pools@2022-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [BatchPoolIdentity](#batchpoolidentity): The type of identity used for the Batch Pool.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties): The properties associated with the pool.
* **type**: 'Microsoft.Batch/batchAccounts/pools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/privateEndpointConnections@2022-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): The properties associated with the private endpoint connection.
* **type**: 'Microsoft.Batch/batchAccounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/privateLinkResources@2022-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The properties associated with the private link resource.
* **type**: 'Microsoft.Batch/batchAccounts/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Batch/batchAccounts@2022-06-01)
* **Resource**: Microsoft.Batch/batchAccounts
* **ApiVersion**: 2022-06-01
* **Output**: [BatchAccountKeys](#batchaccountkeys)

## ApplicationPackageProperties
### Properties
* **format**: string (ReadOnly): The format of the application package, if the package is active.
* **lastActivationTime**: string (ReadOnly): The time at which the package was last activated, if the package is active.
* **state**: 'Active' | 'Pending' (ReadOnly): The current state of the application package.
* **storageUrl**: string (ReadOnly): The URL for the application package in Azure Storage.
* **storageUrlExpiry**: string (ReadOnly): The UTC time at which the Azure Storage URL will expire.

## ApplicationPackageReference
### Properties
* **id**: string (Required): The ID of the application package to install. This must be inside the same batch account as the pool. This can either be a reference to a specific version or the default version if one exists.
* **version**: string: If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409.

## ApplicationProperties
### Properties
* **allowUpdates**: bool: A value indicating whether packages within the application may be overwritten using the same version string.
* **defaultVersion**: string: The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
* **displayName**: string: The display name for the application.

## AutoScaleRun
### Properties
* **error**: [AutoScaleRunError](#autoscalerunerror): An error that occurred when autoscaling a pool.
* **evaluationTime**: string (Required): The time at which the autoscale formula was last evaluated.
* **results**: string: Each variable value is returned in the form $variable=value, and variables are separated by semicolons.

## AutoScaleRunError
### Properties
* **code**: string (Required): An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [AutoScaleRunError](#autoscalerunerror)[]: Additional details about the error.
* **message**: string (Required): A message describing the error, intended to be suitable for display in a user interface.

## AutoScaleSettings
### Properties
* **evaluationInterval**: string: If omitted, the default value is 15 minutes (PT15M).
* **formula**: string (Required): A formula for the desired number of compute nodes in the pool.

## AutoStorageBasePropertiesOrAutoStorageProperties
### Properties
* **authenticationMode**: 'BatchAccountManagedIdentity' | 'StorageKeys': The authentication mode which the Batch service will use to manage the auto-storage account.
* **lastKeySync**: string (ReadOnly): The UTC time at which storage keys were last synchronized with the Batch account.
* **nodeIdentityReference**: [ComputeNodeIdentityReference](#computenodeidentityreference): The identity referenced here must be assigned to pools which have compute nodes that need access to auto-storage.
* **storageAccountId**: string (Required): The resource ID of the storage account to be used for auto-storage account.

## AutoUserSpecification
### Properties
* **elevationLevel**: 'Admin' | 'NonAdmin': The default value is nonAdmin.
* **scope**: 'Pool' | 'Task': The default value is Pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by start tasks.

## AzureBlobFileSystemConfiguration
### Properties
* **accountKey**: string: This property is mutually exclusive with both sasKey and identity; exactly one must be specified.
* **accountName**: string (Required): The Azure Storage Account name.
* **blobfuseOptions**: string: These are 'net use' options in Windows and 'mount' options in Linux.
* **containerName**: string (Required): The Azure Blob Storage Container name.
* **identityReference**: [ComputeNodeIdentityReference](#computenodeidentityreference): This property is mutually exclusive with both accountKey and sasKey; exactly one must be specified.
* **relativeMountPath**: string (Required): All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
* **sasKey**: string: This property is mutually exclusive with both accountKey and identity; exactly one must be specified.

## AzureFileShareConfiguration
### Properties
* **accountKey**: string (Required): The Azure Storage account key.
* **accountName**: string (Required): The Azure Storage account name.
* **azureFileUrl**: string (Required): This is of the form 'https://{account}.file.core.windows.net/'.
* **mountOptions**: string: These are 'net use' options in Windows and 'mount' options in Linux.
* **relativeMountPath**: string (Required): All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.

## BatchAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BatchAccountCreatePropertiesOrBatchAccountProperties
### Properties
* **accountEndpoint**: string (ReadOnly): The account endpoint used to interact with the Batch service.
* **activeJobAndJobScheduleQuota**: int (ReadOnly): The active job and job schedule quota for the Batch account.
* **allowedAuthenticationModes**: 'AAD' | 'SharedKey' | 'TaskAuthenticationToken'[]: List of allowed authentication modes for the Batch account that can be used to authenticate with the data plane. This does not affect authentication with the control plane.
* **autoStorage**: [AutoStorageBasePropertiesOrAutoStorageProperties](#autostoragebasepropertiesorautostorageproperties): The properties related to the auto-storage account.
* **dedicatedCoreQuota**: int (ReadOnly): For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
* **dedicatedCoreQuotaPerVMFamily**: [VirtualMachineFamilyCoreQuota](#virtualmachinefamilycorequota)[] (ReadOnly): A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
* **dedicatedCoreQuotaPerVMFamilyEnforced**: bool (ReadOnly): If this flag is true, dedicated core quota is enforced via both the dedicatedCoreQuotaPerVMFamily and dedicatedCoreQuota properties on the account. If this flag is false, dedicated core quota is enforced only via the dedicatedCoreQuota property on the account and does not consider Virtual Machine family.
* **encryption**: [EncryptionProperties](#encryptionproperties): Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
* **keyVaultReference**: [KeyVaultReference](#keyvaultreference): A reference to the Azure key vault associated with the Batch account.
* **lowPriorityCoreQuota**: int (ReadOnly): For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
* **networkProfile**: [NetworkProfile](#networkprofile): The network profile only takes effect when publicNetworkAccess is enabled.
* **nodeManagementEndpoint**: string (ReadOnly): The endpoint used by compute node to connect to the Batch node management service.
* **poolAllocationMode**: 'BatchService' | 'UserSubscription': The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Azure Active Directory. If the mode is UserSubscription, clients must use Azure Active Directory. The default is BatchService.
* **poolQuota**: int (ReadOnly): The pool quota for the Batch account.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections associated with the Batch account
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Succeeded' (ReadOnly): The provisioned state of the resource
* **publicNetworkAccess**: 'Disabled' | 'Enabled': If not specified, the default value is 'enabled'.

## BatchAccountIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the Batch account. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the Batch account. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required): The type of identity used for the Batch account.
* **userAssignedIdentities**: [BatchAccountIdentityUserAssignedIdentities](#batchaccountidentityuserassignedidentities): The list of user identities associated with the Batch account.

## BatchAccountIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentities](#userassignedidentities)

## BatchAccountKeys
### Properties
* **accountName**: string (ReadOnly): The Batch account name.
* **primary**: string (ReadOnly): The primary key associated with the account.
* **secondary**: string (ReadOnly): The secondary key associated with the account.

## BatchPoolIdentity
### Properties
* **type**: 'None' | 'UserAssigned' (Required): The type of identity used for the Batch Pool.
* **userAssignedIdentities**: [BatchPoolIdentityUserAssignedIdentities](#batchpoolidentityuserassignedidentities): The list of user identities associated with the Batch pool.

## BatchPoolIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentities](#userassignedidentities)

## CertificateCreateOrUpdatePropertiesOrCertificateProperties
### Properties
* **data**: string (Required, WriteOnly): The maximum size is 10KB.
* **deleteCertificateError**: [DeleteCertificateError](#deletecertificateerror) (ReadOnly): This is only returned when the certificate provisioningState is 'Failed'.
* **format**: 'Cer' | 'Pfx': The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
* **password**: string (WriteOnly): This must not be specified if the certificate format is Cer.
* **previousProvisioningState**: 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): The previous provisioned state of the resource
* **previousProvisioningStateTransitionTime**: string (ReadOnly): The time at which the certificate entered its previous state.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly): The time at which the certificate entered its current state.
* **publicData**: string (ReadOnly): The public key of the certificate.
* **thumbprint**: string: This must match the thumbprint from the name.
* **thumbprintAlgorithm**: string: This must match the first portion of the certificate name. Currently required to be 'SHA1'.

## CertificateReference
### Properties
* **id**: string (Required): The fully qualified ID of the certificate to install on the pool. This must be inside the same batch account as the pool.
* **storeLocation**: 'CurrentUser' | 'LocalMachine': The default value is currentUser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
* **storeName**: string: This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My.
* **visibility**: 'RemoteUser' | 'StartTask' | 'Task'[]: Which user accounts on the compute node should have access to the private data of the certificate.

## CifsMountConfiguration
### Properties
* **mountOptions**: string: These are 'net use' options in Windows and 'mount' options in Linux.
* **password**: string (Required): The password to use for authentication against the CIFS file system.
* **relativeMountPath**: string (Required): All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
* **source**: string (Required): The URI of the file system to mount.
* **username**: string (Required): The user to use for authentication against the CIFS file system.

## CloudServiceConfiguration
### Properties
* **osFamily**: string (Required): Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. 6 - OS Family 6, equivalent to Windows Server 2019. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
* **osVersion**: string: The default value is * which specifies the latest operating system version for the specified OS family.

## ComputeNodeIdentityReference
### Properties
* **resourceId**: string: The ARM resource id of the user assigned identity.

## ContainerConfiguration
### Properties
* **containerImageNames**: string[]: This is the full image reference, as would be specified to "docker pull". An image will be sourced from the default Docker registry unless the image is fully qualified with an alternative registry.
* **containerRegistries**: [ContainerRegistry](#containerregistry)[]: If any images must be downloaded from a private registry which requires credentials, then those credentials must be provided here.
* **type**: 'DockerCompatible' (Required): The container technology to be used.

## ContainerRegistry
### Properties
* **identityReference**: [ComputeNodeIdentityReference](#computenodeidentityreference): The reference to a user assigned identity associated with the Batch pool which a compute node will use.
* **password**: string: The password to log into the registry server.
* **registryServer**: string: If omitted, the default is "docker.io".
* **username**: string: The user name to log into the registry server.

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Values are:

 none - The caching mode for the disk is not enabled.
 readOnly - The caching mode for the disk is read only.
 readWrite - The caching mode for the disk is read and write.

 The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
* **diskSizeGB**: int (Required): The initial disk size in GB when creating new data disk.
* **lun**: int (Required): The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun. The value must be between 0 and 63, inclusive.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS': If omitted, the default is "Standard_LRS". Values are:

 Standard_LRS - The data disk should use standard locally redundant storage.
 Premium_LRS - The data disk should use premium locally redundant storage.

## DeleteCertificateError
### Properties
* **code**: string (Required): An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [DeleteCertificateError](#deletecertificateerror)[]: A list of additional details about the error.
* **message**: string (Required): A message describing the error, intended to be suitable for display in a user interface.
* **target**: string: The target of the particular error. For example, the name of the property in error.

## DeploymentConfiguration
### Properties
* **cloudServiceConfiguration**: [CloudServiceConfiguration](#cloudserviceconfiguration): This property and virtualMachineConfiguration are mutually exclusive and one of the properties must be specified. This property cannot be specified if the Batch account was created with its poolAllocationMode property set to 'UserSubscription'.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration): This property and cloudServiceConfiguration are mutually exclusive and one of the properties must be specified.

## DetectorResponseProperties
### Properties
* **value**: string: A base64 encoded string that represents the content of a detector.

## DiffDiskSettings
### Properties
* **placement**: 'CacheDisk': This property can be used by user in the request to choose which location the operating system should be in. e.g., cache disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer to Ephemeral OS disk size requirements for Windows VMs at https://docs.microsoft.com/en-us/azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VMs at https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ephemeral-os-disks#size-requirements.

## DiskEncryptionConfiguration
### Properties
* **targets**: 'OsDisk' | 'TemporaryDisk'[]: On Linux pool, only "TemporaryDisk" is supported; on Windows pool, "OsDisk" and "TemporaryDisk" must be specified.

## EncryptionProperties
### Properties
* **keySource**: 'Microsoft.Batch' | 'Microsoft.KeyVault': Type of the key source.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Additional details when using Microsoft.KeyVault

## EndpointAccessProfile
### Properties
* **defaultAction**: 'Allow' | 'Deny' (Required): Default action for endpoint access. It is only applicable when publicNetworkAccess is enabled.
* **ipRules**: [IPRule](#iprule)[]: Array of IP ranges to filter client IP address.

## EnvironmentSetting
### Properties
* **name**: string (Required): The name of the environment variable.
* **value**: string: The value of the environment variable.

## FixedScaleSettings
### Properties
* **nodeDeallocationOption**: 'Requeue' | 'RetainedData' | 'TaskCompletion' | 'Terminate': If omitted, the default value is Requeue.
* **resizeTimeout**: string: The default value is 15 minutes. Timeout values use ISO 8601 format. For example, use PT10M for 10 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
* **targetDedicatedNodes**: int: At least one of targetDedicatedNodes, targetLowPriorityNodes must be set.
* **targetLowPriorityNodes**: int: At least one of targetDedicatedNodes, targetLowPriorityNodes must be set.

## ImageReference
### Properties
* **id**: string: This property is mutually exclusive with other properties. The Shared Image Gallery image must have replicas in the same region as the Azure Batch account. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration.
* **offer**: string: For example, UbuntuServer or WindowsServer.
* **publisher**: string: For example, Canonical or MicrosoftWindowsServer.
* **sku**: string: For example, 18.04-LTS or 2022-datacenter.
* **version**: string: A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.

## InboundNatPool
### Properties
* **backendPort**: int (Required): This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
* **frontendPortRangeEnd**: int (Required): Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
* **frontendPortRangeStart**: int (Required): Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
* **name**: string (Required): The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
* **networkSecurityGroupRules**: [NetworkSecurityGroupRule](#networksecuritygrouprule)[]: The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400.
* **protocol**: 'TCP' | 'UDP' (Required): The protocol of the endpoint.

## IPRule
### Properties
* **action**: 'Allow' (Required): Action when client IP address is matched.
* **value**: string (Required): IPv4 address, or IPv4 address range in CIDR format.

## KeyVaultProperties
### Properties
* **keyIdentifier**: string: Full path to the versioned secret. Example https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053. To be usable the following prerequisites must be met:

 The Batch Account has a System Assigned identity
 The account identity has been granted Key/Get, Key/Unwrap and Key/Wrap permissions
 The KeyVault has soft-delete and purge protection enabled

## KeyVaultReference
### Properties
* **id**: string (Required): The resource ID of the Azure key vault associated with the Batch account.
* **url**: string (Required): The URL of the Azure key vault associated with the Batch account.

## LinuxUserConfiguration
### Properties
* **gid**: int: The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid.
* **sshPrivateKey**: string: The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done).
* **uid**: int: The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid.

## MetadataItem
### Properties
* **name**: string (Required): The name of the metadata item.
* **value**: string (Required): The value of the metadata item.

## MountConfiguration
### Properties
* **azureBlobFileSystemConfiguration**: [AzureBlobFileSystemConfiguration](#azureblobfilesystemconfiguration): This property is mutually exclusive with all other properties.
* **azureFileShareConfiguration**: [AzureFileShareConfiguration](#azurefileshareconfiguration): This property is mutually exclusive with all other properties.
* **cifsMountConfiguration**: [CifsMountConfiguration](#cifsmountconfiguration): This property is mutually exclusive with all other properties.
* **nfsMountConfiguration**: [NFSMountConfiguration](#nfsmountconfiguration): This property is mutually exclusive with all other properties.

## NetworkConfiguration
### Properties
* **dynamicVNetAssignmentScope**: 'job' | 'none': The scope of dynamic vnet assignment.
* **endpointConfiguration**: [PoolEndpointConfiguration](#poolendpointconfiguration): Pool endpoint configuration is only supported on pools with the virtualMachineConfiguration property.
* **publicIPAddressConfiguration**: [PublicIPAddressConfiguration](#publicipaddressconfiguration): This property is only supported on Pools with the virtualMachineConfiguration property.
* **subnetId**: string: The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For cloudServiceConfiguration pools, only 'classic' VNETs are supported. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration

## NetworkProfile
### Properties
* **accountAccess**: [EndpointAccessProfile](#endpointaccessprofile): Network access profile for batchAccount endpoint (Batch account data plane API).
* **nodeManagementAccess**: [EndpointAccessProfile](#endpointaccessprofile): Network access profile for nodeManagement endpoint (Batch service managing compute nodes for Batch pools).

## NetworkSecurityGroupRule
### Properties
* **access**: 'Allow' | 'Deny' (Required): The action that should be taken for a specified IP address, subnet range or tag.
* **priority**: int (Required): Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 4096. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
* **sourceAddressPrefix**: string (Required): Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.
* **sourcePortRanges**: string[]: Valid values are '*' (for all ports 0 - 65535) or arrays of ports or port ranges (i.e. 100-200). The ports should in the range of 0 to 65535 and the port ranges or ports can't overlap. If any other values are provided the request fails with HTTP status code 400. Default value will be *.

## NFSMountConfiguration
### Properties
* **mountOptions**: string: These are 'net use' options in Windows and 'mount' options in Linux.
* **relativeMountPath**: string (Required): All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
* **source**: string (Required): The URI of the file system to mount.

## NodePlacementConfiguration
### Properties
* **policy**: 'Regional' | 'Zonal': Allocation policy used by Batch Service to provision the nodes. If not specified, Batch will use the regional policy.

## OSDisk
### Properties
* **ephemeralOSDiskSettings**: [DiffDiskSettings](#diffdisksettings): Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine.

## PoolEndpointConfiguration
### Properties
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[] (Required): The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400. This cannot be specified if the IPAddressProvisioningType is NoPublicIPAddresses.

## PoolProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' | 'Stopping' (ReadOnly): Whether the pool is resizing.
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the pool entered its current allocation state.
* **applicationLicenses**: string[]: The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
* **applicationPackages**: [ApplicationPackageReference](#applicationpackagereference)[]: Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool.
* **autoScaleRun**: [AutoScaleRun](#autoscalerun) (ReadOnly): This property is set only if the pool automatically scales, i.e. autoScaleSettings are used.
* **certificates**: [CertificateReference](#certificatereference)[]: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
* **creationTime**: string (ReadOnly): The creation time of the pool.
* **currentDedicatedNodes**: int (ReadOnly): The number of compute nodes currently in the pool.
* **currentLowPriorityNodes**: int (ReadOnly): The number of Spot/low-priority compute nodes currently in the pool.
* **deploymentConfiguration**: [DeploymentConfiguration](#deploymentconfiguration): Using CloudServiceConfiguration specifies that the nodes should be creating using Azure Cloud Services (PaaS), while VirtualMachineConfiguration uses Azure Virtual Machines (IaaS).
* **displayName**: string: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
* **interNodeCommunication**: 'Disabled' | 'Enabled': This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
* **lastModified**: string (ReadOnly): This is the last time at which the pool level data, such as the targetDedicatedNodes or autoScaleSettings, changed. It does not factor in node-level changes such as a compute node changing state.
* **metadata**: [MetadataItem](#metadataitem)[]: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
* **mountConfiguration**: [MountConfiguration](#mountconfiguration)[]: This supports Azure Files, NFS, CIFS/SMB, and Blobfuse.
* **networkConfiguration**: [NetworkConfiguration](#networkconfiguration): The network configuration for a pool.
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly): The current state of the pool.
* **provisioningStateTransitionTime**: string (ReadOnly): The time at which the pool entered its current state.
* **resizeOperationStatus**: [ResizeOperationStatus](#resizeoperationstatus) (ReadOnly): Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady).
* **scaleSettings**: [ScaleSettings](#scalesettings): Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
* **startTask**: [StartTask](#starttask): In an PATCH (update) operation, this property can be set to an empty object to remove the start task from the pool.
* **taskSchedulingPolicy**: [TaskSchedulingPolicy](#taskschedulingpolicy): If not specified, the default is spread.
* **taskSlotsPerNode**: int: The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256.
* **userAccounts**: [UserAccount](#useraccount)[]: The list of user accounts to be created on each node in the pool.
* **vmSize**: string: For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM resource identifier of the private endpoint. This is of the form /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/privateEndpoints/{privateEndpoint}.

## PrivateEndpointConnection
### Properties
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly): The ID of the resource.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The properties associated with the private endpoint connection.
* **type**: string (ReadOnly): The type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The value has one and only one group id.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): The private endpoint of the private endpoint connection.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): The private link service connection state of the private endpoint connection
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the private endpoint connection.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The group id is used to establish the private link connection.
* **requiredMembers**: string[] (ReadOnly): The list of required members that are used to establish the private link connection.
* **requiredZoneNames**: string[] (ReadOnly): The list of required zone names for the private DNS resource name

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string (ReadOnly): Action required on the private connection state
* **description**: string: Description of the private Connection state
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (Required): The status of the Batch private endpoint connection

## PublicIPAddressConfiguration
### Properties
* **ipAddressIds**: string[]: The number of IPs specified here limits the maximum size of the Pool - 100 dedicated nodes or 100 Spot/low-priority nodes can be allocated for each public IP. For example, a pool needing 250 dedicated VMs would need at least 3 public IPs specified. Each element of this collection is of the form: /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}.
* **provision**: 'BatchManaged' | 'NoPublicIPAddresses' | 'UserManaged': The default value is BatchManaged

## ResizeError
### Properties
* **code**: string (Required): An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [ResizeError](#resizeerror)[]: Additional details about the error.
* **message**: string (Required): A message describing the error, intended to be suitable for display in a user interface.

## ResizeOperationStatus
### Properties
* **errors**: [ResizeError](#resizeerror)[]: This property is set only if an error occurred during the last pool resize, and only when the pool allocationState is Steady.
* **nodeDeallocationOption**: 'Requeue' | 'RetainedData' | 'TaskCompletion' | 'Terminate': The default value is requeue.
* **resizeTimeout**: string: The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
* **startTime**: string: The time when this resize operation was started.
* **targetDedicatedNodes**: int: The desired number of dedicated compute nodes in the pool.
* **targetLowPriorityNodes**: int: The desired number of Spot/low-priority compute nodes in the pool.

## ResourceFile
### Properties
* **autoStorageContainerName**: string: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified.
* **blobPrefix**: string: The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded.
* **fileMode**: string: This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
* **filePath**: string: If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..').
* **httpUrl**: string: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL points to Azure Blob Storage, it must be readable from compute nodes. There are three ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, use a managed identity with read permission, or set the ACL for the blob or its container to allow public access.
* **identityReference**: [ComputeNodeIdentityReference](#computenodeidentityreference): The reference to a user assigned identity associated with the Batch pool which a compute node will use.
* **storageContainerUrl**: string: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable from compute nodes. There are three ways to get such a URL for a container in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the container, use a managed identity with read and list permissions, or set the ACL for the container to allow public access.

## ScaleSettings
### Properties
* **autoScale**: [AutoScaleSettings](#autoscalesettings): This property and fixedScale are mutually exclusive and one of the properties must be specified.
* **fixedScale**: [FixedScaleSettings](#fixedscalesettings): This property and autoScale are mutually exclusive and one of the properties must be specified.

## StartTask
### Properties
* **commandLine**: string: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. Required if any other properties of the startTask are specified.
* **containerSettings**: [TaskContainerSettings](#taskcontainersettings): When this is specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node) are mapped into the container, all task environment variables are mapped into the container, and the task command line is executed in the container.
* **environmentSettings**: [EnvironmentSetting](#environmentsetting)[]: A list of environment variable settings for the start task.
* **maxTaskRetryCount**: int: The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
* **resourceFiles**: [ResourceFile](#resourcefile)[]: A list of files that the Batch service will download to the compute node before running the command line.
* **userIdentity**: [UserIdentity](#useridentity): If omitted, the task runs as a non-administrative user unique to the task.
* **waitForSuccess**: bool: If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and scheduling error detail. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is true.

## TaskContainerSettings
### Properties
* **containerRunOptions**: string: These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service.
* **imageName**: string (Required): This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default.
* **registry**: [ContainerRegistry](#containerregistry): This setting can be omitted if was already provided at pool creation.
* **workingDirectory**: 'ContainerImageDefault' | 'TaskWorkingDirectory': A flag to indicate where the container task working directory is. The default is 'taskWorkingDirectory'.

## TaskSchedulingPolicy
### Properties
* **nodeFillType**: 'Pack' | 'Spread' (Required): How tasks should be distributed across compute nodes.

## UserAccount
### Properties
* **elevationLevel**: 'Admin' | 'NonAdmin': nonAdmin - The auto user is a standard user without elevated access. admin - The auto user is a user with elevated access and operates with full Administrator permissions. The default value is nonAdmin.
* **linuxUserConfiguration**: [LinuxUserConfiguration](#linuxuserconfiguration): This property is ignored if specified on a Windows pool. If not specified, the user is created with the default options.
* **name**: string (Required): The name of the user account.
* **password**: string (Required): The password for the user account.
* **windowsUserConfiguration**: [WindowsUserConfiguration](#windowsuserconfiguration): This property can only be specified if the user is on a Windows pool. If not specified and on a Windows pool, the user is created with the default options.

## UserAssignedIdentities
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## UserIdentity
### Properties
* **autoUser**: [AutoUserSpecification](#autouserspecification): The userName and autoUser properties are mutually exclusive; you must specify one but not both.
* **userName**: string: The userName and autoUser properties are mutually exclusive; you must specify one but not both.

## VirtualMachineConfiguration
### Properties
* **containerConfiguration**: [ContainerConfiguration](#containerconfiguration): If specified, setup is performed on each node in the pool to allow tasks to run in containers. All regular tasks and job manager tasks run on this pool must specify the containerSettings property, and all other tasks may specify it.
* **dataDisks**: [DataDisk](#datadisk)[]: This property must be specified if the compute nodes in the pool need to have empty data disks attached to them.
* **diskEncryptionConfiguration**: [DiskEncryptionConfiguration](#diskencryptionconfiguration): If specified, encryption is performed on each node in the pool during node provisioning.
* **extensions**: [VMExtension](#vmextension)[]: If specified, the extensions mentioned in this configuration will be installed on each node.
* **imageReference**: [ImageReference](#imagereference) (Required): A reference to an Azure Virtual Machines Marketplace image or the Azure Image resource of a custom Virtual Machine. To get the list of all imageReferences verified by Azure Batch, see the 'List supported node agent SKUs' operation.
* **licenseType**: string: This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:

 Windows_Server - The on-premises license is for Windows Server.
 Windows_Client - The on-premises license is for Windows Client.
* **nodeAgentSkuId**: string (Required): The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
* **nodePlacementConfiguration**: [NodePlacementConfiguration](#nodeplacementconfiguration): This configuration will specify rules on how nodes in the pool will be physically allocated.
* **osDisk**: [OSDisk](#osdisk): Contains configuration for ephemeral OSDisk settings.
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): This property must not be specified if the imageReference specifies a Linux OS image.

## VirtualMachineFamilyCoreQuota
### Properties
* **coreQuota**: int (ReadOnly): The core quota for the VM family for the Batch account.
* **name**: string (ReadOnly): The Virtual Machine family name.

## VMExtension
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **name**: string (Required): The name of the virtual machine extension.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **provisionAfterExtensions**: string[]: Collection of extension names after which this extension needs to be provisioned.
* **publisher**: string (Required): The name of the extension handler publisher.
* **settings**: any: JSON formatted public settings for the extension.
* **type**: string (Required): The type of the extensions.
* **typeHandlerVersion**: string: The version of script handler.

## WindowsConfiguration
### Properties
* **enableAutomaticUpdates**: bool: If omitted, the default value is true.

## WindowsUserConfiguration
### Properties
* **loginMode**: 'Batch' | 'Interactive': Specifies login mode for the user. The default value for VirtualMachineConfiguration pools is interactive mode and for CloudServiceConfiguration pools is batch mode.

