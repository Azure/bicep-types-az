# Microsoft.Batch @ 2017-09-01

## Resource Microsoft.Batch/batchAccounts@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The region in which to create the account.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BatchAccountCreateProperties](#batchaccountcreateproperties): The properties of the Batch account.
* **tags**: [BatchAccountCreateParametersTags](#batchaccountcreateparameterstags): The user-specified tags associated with the account.
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/applications@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allowUpdates**: bool: A value indicating whether packages within the application may be overwritten using the same version string.
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **defaultVersion**: string (ReadOnly): The package to use if a client requests the application but does not specify a version.
* **displayName**: string: The display name for the application.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **packages**: [ApplicationPackage](#applicationpackage)[] (ReadOnly): The list of packages under this application.
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/applications/versions@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **format**: string (ReadOnly): The format of the application package, if the package is active.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **lastActivationTime**: string (ReadOnly): The time at which the package was last activated, if the package is active.
* **name**: string (Required, DeployTimeConstant): The resource name
* **state**: 'Active' | 'Pending' | 'Unmapped' (ReadOnly): The current state of the application package.
* **storageUrl**: string (ReadOnly): The URL for the application package in Azure Storage.
* **storageUrlExpiry**: string (ReadOnly): The UTC time at which the Azure Storage URL will expire.
* **type**: 'Microsoft.Batch/batchAccounts/applications/versions' (ReadOnly, DeployTimeConstant): The resource type
* **version**: string (ReadOnly): The version of the application package.

## Resource Microsoft.Batch/batchAccounts/certificates@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties): The properties associated with the certificate.
* **type**: 'Microsoft.Batch/batchAccounts/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/pools@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties): The properties associated with the pool.
* **type**: 'Microsoft.Batch/batchAccounts/pools' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Batch/batchAccounts@2017-09-01)
* **Resource**: Microsoft.Batch/batchAccounts
* **ApiVersion**: 2017-09-01
* **Output**: [BatchAccountKeys](#batchaccountkeys)

## ApplicationPackage
### Properties
* **format**: string (ReadOnly): The format of the application package, if the package is active.
* **id**: string (ReadOnly): The ID of the application.
* **lastActivationTime**: string (ReadOnly): The time at which the package was last activated, if the package is active.
* **state**: 'Active' | 'Pending' | 'Unmapped' (ReadOnly): The current state of the application package.
* **storageUrl**: string (ReadOnly): The URL for the application package in Azure Storage.
* **storageUrlExpiry**: string (ReadOnly): The UTC time at which the Azure Storage URL will expire.
* **version**: string (ReadOnly): The version of the application package.

## ApplicationPackageReference
### Properties
* **id**: string (Required): The ID of the application package to install. This must be inside the same batch account as the pool. This can either be a reference to a specific version or the default version if one exists.
* **version**: string: If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409.

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

## AutoStorageBaseProperties
### Properties
* **lastKeySync**: string (ReadOnly): The UTC time at which storage keys were last synchronized with the Batch account.
* **storageAccountId**: string (Required): The resource ID of the storage account to be used for auto-storage account.

## AutoUserSpecification
### Properties
* **elevationLevel**: 'Admin' | 'NonAdmin': nonAdmin - The auto user is a standard user without elevated access. admin - The auto user is a user with elevated access and operates with full Administrator permissions. The default value is nonAdmin.
* **scope**: 'Pool' | 'Task': pool - specifies that the task runs as the common auto user account which is created on every node in a pool. task - specifies that the service should create a new user for the task. The default value is task.

## BatchAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BatchAccountCreateProperties
### Properties
* **accountEndpoint**: string (ReadOnly): The account endpoint used to interact with the Batch service.
* **activeJobAndJobScheduleQuota**: int (ReadOnly): The active job and job schedule quota for this Batch account.
* **autoStorage**: [AutoStorageBaseProperties](#autostoragebaseproperties): The properties related to the auto-storage account.
* **dedicatedCoreQuota**: int (ReadOnly): The dedicated core quota for this Batch account.
* **keyVaultReference**: [KeyVaultReference](#keyvaultreference): A reference to the Azure key vault associated with the Batch account.
* **lowPriorityCoreQuota**: int (ReadOnly): The low-priority core quota for this Batch account.
* **poolAllocationMode**: 'BatchService' | 'UserSubscription': The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Azure Active Directory. If the mode is UserSubscription, clients must use Azure Active Directory. The default is BatchService.
* **poolQuota**: int (ReadOnly): The pool quota for this Batch account.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Succeeded' (ReadOnly): The provisioned state of the resource

## BatchAccountKeys
### Properties
* **accountName**: string (ReadOnly): The Batch account name.
* **primary**: string (ReadOnly): The primary key associated with the account.
* **secondary**: string (ReadOnly): The secondary key associated with the account.

## CertificateCreateOrUpdateProperties
### Properties
* **data**: string (Required, WriteOnly): The maximum size is 10KB.
* **deleteCertificateError**: [DeleteCertificateError](#deletecertificateerror) (ReadOnly): This is only returned when the certificate provisioningState is 'Failed'.
* **format**: 'Cer' | 'Pfx': The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
* **password**: string (WriteOnly): This is required if the certificate format is pfx and must be omitted if the certificate format is cer.
* **previousProvisioningState**: 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): The previous provisioned state of the resource
* **previousProvisioningStateTransitionTime**: string (ReadOnly): The time at which the certificate entered its previous state.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): Values are:

 Succeeded - The certificate is available for use in pools.
 Deleting - The user has requested that the certificate be deleted, but the delete operation has not yet completed. You may not reference the certificate when creating or updating pools.
 Failed - The user requested that the certificate be deleted, but there are pools that still have references to the certificate, or it is still installed on one or more compute nodes. (The latter can occur if the certificate has been removed from the pool, but the node has not yet restarted. Nodes refresh their certificates only when they restart.) You may use the cancel certificate delete operation to cancel the delete, or the delete certificate operation to retry the delete.
* **provisioningStateTransitionTime**: string (ReadOnly): The time at which the certificate entered its current state.
* **publicData**: string (ReadOnly): The public key of the certificate.
* **thumbprint**: string: This must match the thumbprint from the name.
* **thumbprintAlgorithm**: string: This must match the first portion of the certificate name. Currently required to be 'SHA1'.

## CertificateReference
### Properties
* **id**: string (Required): The fully qualified ID of the certificate to install on the pool. This must be inside the same batch account as the pool.
* **storeLocation**: 'CurrentUser' | 'LocalMachine': The default value is currentUser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
* **storeName**: string: This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My.
* **visibility**: 'RemoteUser' | 'StartTask' | 'Task'[]: Values are:

 starttask - The user account under which the start task is run.
 task - The accounts under which job tasks are run.
 remoteuser - The accounts under which users remotely access the node.

 You can specify more than one visibility in this collection. The default is all accounts.

## CloudServiceConfiguration
### Properties
* **currentOSVersion**: string: This may differ from targetOSVersion if the pool state is Upgrading. In this case some virtual machines may be on the targetOSVersion and some may be on the currentOSVersion during the upgrade process. Once all virtual machines have upgraded, currentOSVersion is updated to be the same as targetOSVersion.
* **osFamily**: string (Required): Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
* **targetOSVersion**: string: The default value is * which specifies the latest operating system version for the specified OS family.

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Values are:

 none - The caching mode for the disk is not enabled.
 readOnly - The caching mode for the disk is read only.
 readWrite - The caching mode for the disk is read and write.

 The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
* **diskSizeGB**: int (Required): The initial disk size in GB when creating new data disk.
* **lun**: int (Required): The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS': If omitted, the default is "Standard_LRS". Values are:

 Standard_LRS - The data disk should use standard locally redundant storage.
 Premium_LRS - The data disk should use premium locally redundant storage.

## DeleteCertificateError
### Properties
* **code**: string (ReadOnly): An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [DeleteCertificateError](#deletecertificateerror)[] (ReadOnly): A list of additional details about the error.
* **message**: string (ReadOnly): A message describing the error, intended to be suitable for display in a user interface.
* **target**: string (ReadOnly): The target of the particular error. For example, the name of the property in error.

## DeploymentConfiguration
### Properties
* **cloudServiceConfiguration**: [CloudServiceConfiguration](#cloudserviceconfiguration): This property and virtualMachineConfiguration are mutually exclusive and one of the properties must be specified. This property cannot be specified if the Batch account was created with its poolAllocationMode property set to 'UserSubscription'.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration): This property and cloudServiceConfiguration are mutually exclusive and one of the properties must be specified.

## EnvironmentSetting
### Properties
* **name**: string (Required): The name of the environment variable.
* **value**: string: The value of the environment variable.

## FixedScaleSettings
### Properties
* **nodeDeallocationOption**: 'Requeue' | 'RetainedData' | 'TaskCompletion' | 'Terminate': If omitted, the default value is Requeue.
* **resizeTimeout**: string: The default value is 15 minutes. Timeout values use ISO 8601 format. For example, use PT10M for 10 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
* **targetDedicatedNodes**: int: At least one of targetDedicatedNodes, targetLowPriority nodes must be set.
* **targetLowPriorityNodes**: int: At least one of targetDedicatedNodes, targetLowPriority nodes must be set.

## ImageReference
### Properties
* **id**: string: This property is mutually exclusive with other properties. The virtual machine image must be in the same region and subscription as the Azure Batch account. For information about the firewall settings for Batch node agent to communicate with Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration .
* **offer**: string: For example, UbuntuServer or WindowsServer.
* **publisher**: string: For example, Canonical or MicrosoftWindowsServer.
* **sku**: string: For example, 14.04.0-LTS or 2012-R2-Datacenter.
* **version**: string: A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.

## InboundNatPool
### Properties
* **backendPort**: int (Required): This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
* **frontendPortRangeEnd**: int (Required): Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
* **frontendPortRangeStart**: int (Required): Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
* **name**: string (Required): The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
* **networkSecurityGroupRules**: [NetworkSecurityGroupRule](#networksecuritygrouprule)[]: The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400.
* **protocol**: 'TCP' | 'UDP' (Required): The protocol of the endpoint.

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

## NetworkConfiguration
### Properties
* **endpointConfiguration**: [PoolEndpointConfiguration](#poolendpointconfiguration): Pool endpoint configuration is only supported on pools with the virtualMachineConfiguration property.
* **subnetId**: string: The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. For pools created via virtualMachineConfiguration the Batch account must have poolAllocationMode userSubscription in order to use a VNet. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration

## NetworkSecurityGroupRule
### Properties
* **access**: 'Allow' | 'Deny' (Required): The action that should be taken for a specified IP address, subnet range or tag.
* **priority**: int (Required): Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
* **sourceAddressPrefix**: string (Required): Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.

## OSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Default value is none.

## PoolEndpointConfiguration
### Properties
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[] (Required): The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400.

## PoolProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' | 'Stopping' (ReadOnly): Values are:

 Steady - The pool is not resizing. There are no changes to the number of nodes in the pool in progress. A pool enters this state when it is created and when no operations are being performed on the pool to change the number of dedicated nodes.
 Resizing - The pool is resizing; that is, compute nodes are being added to or removed from the pool.
 Stopping - The pool was resizing, but the user has requested that the resize be stopped, but the stop request has not yet been completed.
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the pool entered its current allocation state.
* **applicationLicenses**: string[]: The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
* **applicationPackages**: [ApplicationPackageReference](#applicationpackagereference)[]: Changes to application packages affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged.
* **autoScaleRun**: [AutoScaleRun](#autoscalerun) (ReadOnly): This property is set only if the pool automatically scales, i.e. autoScaleSettings are used.
* **certificates**: [CertificateReference](#certificatereference)[]: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
* **creationTime**: string (ReadOnly): The creation time of the pool.
* **currentDedicatedNodes**: int (ReadOnly): The number of compute nodes currently in the pool.
* **currentLowPriorityNodes**: int (ReadOnly): The number of low priority compute nodes currently in the pool.
* **deploymentConfiguration**: [DeploymentConfiguration](#deploymentconfiguration): Using CloudServiceConfiguration specifies that the nodes should be creating using Azure Cloud Services (PaaS), while VirtualMachineConfiguration uses Azure Virtual Machines (IaaS).
* **displayName**: string: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
* **interNodeCommunication**: 'Disabled' | 'Enabled': This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
* **lastModified**: string (ReadOnly): This is the last time at which the pool level data, such as the targetDedicatedNodes or autoScaleSettings, changed. It does not factor in node-level changes such as a compute node changing state.
* **maxTasksPerNode**: int: The maximum number of tasks that can run concurrently on a single compute node in the pool.
* **metadata**: [MetadataItem](#metadataitem)[]: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
* **networkConfiguration**: [NetworkConfiguration](#networkconfiguration): The network configuration for a pool.
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly): Values are:

 Succeeded - The pool is available to run tasks subject to the availability of compute nodes.
 Deleting - The user has requested that the pool be deleted, but the delete operation has not yet completed.
* **provisioningStateTransitionTime**: string (ReadOnly): The time at which the pool entered its current state.
* **resizeOperationStatus**: [ResizeOperationStatus](#resizeoperationstatus) (ReadOnly): Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady).
* **scaleSettings**: [ScaleSettings](#scalesettings): Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
* **startTask**: [StartTask](#starttask): In an PATCH (update) operation, this property can be set to an empty object to remove the start task from the pool.
* **taskSchedulingPolicy**: [TaskSchedulingPolicy](#taskschedulingpolicy): Specifies how tasks should be distributed across compute nodes.
* **userAccounts**: [UserAccount](#useraccount)[]: The list of user accounts to be created on each node in the pool.
* **vmSize**: string: For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

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
* **targetLowPriorityNodes**: int: The desired number of low-priority compute nodes in the pool.

## ResourceFile
### Properties
* **blobSource**: string (Required): This URL must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access.
* **fileMode**: string: This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
* **filePath**: string (Required): The location on the compute node to which to download the file, relative to the task's working directory.

## ScaleSettings
### Properties
* **autoScale**: [AutoScaleSettings](#autoscalesettings): This property and fixedScale are mutually exclusive and one of the properties must be specified.
* **fixedScale**: [FixedScaleSettings](#fixedscalesettings): This property and autoScale are mutually exclusive and one of the properties must be specified.

## StartTask
### Properties
* **commandLine**: string: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. Required if any other properties of the startTask are specified.
* **environmentSettings**: [EnvironmentSetting](#environmentsetting)[]: A list of environment variable settings for the start task.
* **maxTaskRetryCount**: int: The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
* **resourceFiles**: [ResourceFile](#resourcefile)[]: A list of files that the Batch service will download to the compute node before running the command line.
* **userIdentity**: [UserIdentity](#useridentity): If omitted, the task runs as a non-administrative user unique to the task.
* **waitForSuccess**: bool: If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and scheduling error detail. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is false.

## TaskSchedulingPolicy
### Properties
* **nodeFillType**: 'Pack' | 'Spread' (Required): How tasks should be distributed across compute nodes.

## UserAccount
### Properties
* **elevationLevel**: 'Admin' | 'NonAdmin': nonAdmin - The auto user is a standard user without elevated access. admin - The auto user is a user with elevated access and operates with full Administrator permissions. The default value is nonAdmin.
* **linuxUserConfiguration**: [LinuxUserConfiguration](#linuxuserconfiguration): This property is ignored if specified on a Windows pool. If not specified, the user is created with the default options.
* **name**: string (Required): The name of the user account.
* **password**: string (Required): The password for the user account.

## UserIdentity
### Properties
* **autoUser**: [AutoUserSpecification](#autouserspecification): The userName and autoUser properties are mutually exclusive; you must specify one but not both.
* **userName**: string: The userName and autoUser properties are mutually exclusive; you must specify one but not both.

## VirtualMachineConfiguration
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]: This property must be specified if the compute nodes in the pool need to have empty data disks attached to them.
* **imageReference**: [ImageReference](#imagereference) (Required): A reference to an Azure Virtual Machines Marketplace image or the Azure Image resource of a custom Virtual Machine. To get the list of all imageReferences verified by Azure Batch, see the 'List supported node agent SKUs' operation.
* **licenseType**: string: This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:

 Windows_Server - The on-premises license is for Windows Server.
 Windows_Client - The on-premises license is for Windows Client.
* **nodeAgentSkuId**: string (Required): The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
* **osDisk**: [OSDisk](#osdisk): Settings for the operating system disk of the virtual machine.
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): This property must not be specified if the imageReference specifies a Linux OS image.

## WindowsConfiguration
### Properties
* **enableAutomaticUpdates**: bool: If omitted, the default value is true.

