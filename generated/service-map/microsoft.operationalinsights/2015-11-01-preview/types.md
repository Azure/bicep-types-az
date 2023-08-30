# Microsoft.OperationalInsights @ 2015-11-01-preview

## Resource Microsoft.OperationalInsights/workspaces/features/clientGroups@2015-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource ETAG.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'clientGroup' | 'machine' | 'machineGroup' | 'port' | 'process' | string (ReadOnly): Additional resource type qualifier.
* **name**: string {minLength: 3, maxLength: 256} (Required, DeployTimeConstant): The resource name
* **properties**: [ClientGroupProperties](#clientgroupproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/features/clientGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/features/machineGroups@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Resource ETAG.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'clientGroup' | 'machine' | 'machineGroup' | 'port' | 'process' | string (Required): Additional resource type qualifier.
* **name**: string {minLength: 36, maxLength: 36} (Required, DeployTimeConstant): The resource name
* **properties**: [MachineGroupProperties](#machinegroupproperties): Resource properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/features/machineGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/features/machines@2015-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource ETAG.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'clientGroup' | 'machine' | 'machineGroup' | 'port' | 'process' | string (ReadOnly): Additional resource type qualifier.
* **name**: string {minLength: 3, maxLength: 64} (Required, DeployTimeConstant): The resource name
* **properties**: [MachineProperties](#machineproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/features/machines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/features/machines/ports@2015-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource ETAG.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'clientGroup' | 'machine' | 'machineGroup' | 'port' | 'process' | string (ReadOnly): Additional resource type qualifier.
* **name**: string {minLength: 3, maxLength: 64} (Required, DeployTimeConstant): The resource name
* **properties**: [PortProperties](#portproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/features/machines/ports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/features/machines/processes@2015-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource ETAG.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'clientGroup' | 'machine' | 'machineGroup' | 'port' | 'process' | string (ReadOnly): Additional resource type qualifier.
* **name**: string {minLength: 3, maxLength: 128} (Required, DeployTimeConstant): The resource name
* **properties**: [ProcessProperties](#processproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/features/machines/processes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/features/summaries@2015-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'machines' (Required, DeployTimeConstant): The resource name
* **properties**: [MachinesSummaryProperties](#machinessummaryproperties) (ReadOnly): Summarizes machines in the workspace.
* **type**: 'Microsoft.OperationalInsights/workspaces/features/summaries' (ReadOnly, DeployTimeConstant): The resource type

## AgentConfiguration
### Properties
* **agentId**: string (Required): Health Service Agent unique identifier.
* **clockGranularity**: int: Machine clock granularity in milliseconds.
* **dependencyAgentId**: string: Dependency Agent unique identifier.
* **dependencyAgentRevision**: string: Dependency Agent revision number.
* **dependencyAgentVersion**: string: Dependency Agent version number.
* **rebootStatus**: 'notRebooted' | 'rebooted' | 'unknown': Specifies whether the machine has been rebooted since the Dependency Agent installation.

## AzureCloudServiceConfiguration
### Properties
* **deployment**: string: Cloud Service deployment identifier
* **instanceId**: string: Cloud Service instance identifier
* **name**: string: Cloud Service name
* **roleName**: string: Cloud Service role name
* **roleType**: 'unknown' | 'web' | 'worker': Used to specify type of an Azure Cloud Service role

## AzureServiceFabricClusterConfiguration
### Properties
* **clusterId**: string: Service Fabric cluster identifier.
* **name**: string: Service Fabric cluster name.

## AzureVmScaleSetConfiguration
### Properties
* **deployment**: string: Virtual Machine Scale Set deployment identifier
* **instanceId**: string: Virtual Machine Scale Set instance identifier
* **name**: string: Virtual Machine Scale Set name
* **resourceId**: string: Unique identifier of the resource.

## ClientGroupProperties
### Properties
* **clientsOf**: [ResourceReference](#resourcereference) (Required): Reference to the resource whose clients are represented by this group.

## HostingConfiguration
* **Discriminator**: kind

### Base Properties
* **provider**: 'azure' | string: The hosting provider of the VM.

### AzureHostingConfiguration
#### Properties
* **cloudService**: [AzureCloudServiceConfiguration](#azurecloudserviceconfiguration): Contains information about machines hosted as an Azure Cloud Service
* **faultDomain**: string: Fault domain of the VM.
* **image**: [ImageConfiguration](#imageconfiguration): Image of the machine.
* **kind**: 'provider:azure' (Required): Additional hosting configuration type qualifier.
* **location**: string: Geographical location of the VM.
* **name**: string: Machine name according to the hosting provider.
* **resourceGroup**: string: Resource group name within the specified subscription.
* **resourceId**: string: Unique identifier of the resource.
* **serviceFabricCluster**: [AzureServiceFabricClusterConfiguration](#azureservicefabricclusterconfiguration): Contains information about machines that belong an Azure Service Fabric Cluster
* **size**: string: Size of the VM.
* **subscriptionId**: string: Subscription ID.
* **updateDomain**: string: Update domain of the VM.
* **vmId**: string: Virtual Machine ID (unique identifier).
* **vmScaleSet**: [AzureVmScaleSetConfiguration](#azurevmscalesetconfiguration): Contains information about machines hosted as an Azure Virtual Machine Scale Set


## HypervisorConfiguration
### Properties
* **hypervisorType**: 'hyperv' | 'unknown': Specifies the virtualization technology used by the hypervisor (hyperv, vmware, etc.)
* **nativeHostMachineId**: string: The unique identifier of the hypervisor machine as reported by the underlying virtualization system.

## ImageConfiguration
### Properties
* **offering**: string: Offering of the VM image.
* **publisher**: string: Publisher of the VM image.
* **sku**: string: SKU of the VM image.
* **version**: string: Version of the VM image.

## Ipv4NetworkInterface
### Properties
* **ipAddress**: string (Required): IPv4 address.
* **subnetMask**: string: IPv4 subnet mask.

## Ipv6NetworkInterface
### Properties
* **ipAddress**: string (Required): IPv6 address.

## MachineCountsByOperatingSystem
### Properties
* **linux**: int (Required): Number of live Linux machines.
* **windows**: int (Required): Number of live Windows machines.

## MachineGroupProperties
### Properties
* **count**: int: Count of machines in this group. The value of count may be bigger than the number of machines in case of the group has been truncated due to exceeding the max number of machines a group can handle.
* **displayName**: string {minLength: 1, maxLength: 256} (Required): User defined name for the group
* **groupType**: 'azure-cs' | 'azure-sf' | 'azure-vmss' | 'unknown' | 'user-static' | string: Type of the machine group
* **machines**: [MachineReferenceWithHints](#machinereferencewithhints)[]: References of the machines in this group. The hints within each reference do not represent the current value of the corresponding fields. They are a snapshot created during the last time the machine group was updated.

## MachineProperties
### Properties
* **agent**: [AgentConfiguration](#agentconfiguration): Dependency Agent configuration.
* **bootTime**: string: UTC date and time when the machine last booted
* **computerName**: string: Name of the machine, e.g., server
* **displayName**: string: Name to use for display purposes
* **fullyQualifiedDomainName**: string: Fully-qualified name of the machine, e.g., server.company.com
* **hosting**: [HostingConfiguration](#hostingconfiguration): Hosting-related configuration. Present if hosting information is discovered for the VM.
* **hypervisor**: [HypervisorConfiguration](#hypervisorconfiguration): Hypervisor-related configuration. Present only when 'virtualizationState' is `hypervisor`.
* **monitoringState**: 'discovered' | 'monitored': Specifies whether the machine is actively monitored or discovered.
* **networking**: [NetworkConfiguration](#networkconfiguration): Network configuration (ips, gateways, dns, etc.)
* **operatingSystem**: [OperatingSystemConfiguration](#operatingsystemconfiguration): Operating system information.
* **resources**: [MachineResourcesConfiguration](#machineresourcesconfiguration): Machine resources (memory, cpu, etc.).
* **timestamp**: string: UTC date and time when this resource was updated in the system.
* **timezone**: [Timezone](#timezone): Timezone of the machine.
* **virtualizationState**: 'hypervisor' | 'physical' | 'unknown' | 'virtual': Specifies whether the machine is virtualized.
* **virtualMachine**: [VirtualMachineConfiguration](#virtualmachineconfiguration): Virtualization-related configuration. Present only when `virtualizationState` is `virtual`.

## MachineReference
### Properties
* **id**: string (Required): Resource URI.
* **kind**: 'ref:clientgroup' | 'ref:machine' | 'ref:machinewithhints' | 'ref:onmachine' | 'ref:port' | 'ref:process' | string (Required): Specifies the sub-class of the reference.
* **name**: string (ReadOnly): Resource name.
* **type**: string (ReadOnly): Resource type qualifier.

## MachineReferenceWithHints
### Properties
* **id**: string (Required): Resource URI.
* **kind**: 'ref:clientgroup' | 'ref:machine' | 'ref:machinewithhints' | 'ref:onmachine' | 'ref:port' | 'ref:process' | string (Required): Specifies the sub-class of the reference.
* **name**: string (ReadOnly): Resource name.
* **properties**: [MachineReferenceWithHintsProperties](#machinereferencewithhintsproperties): Machine reference with name and os hints.
* **type**: string (ReadOnly): Resource type qualifier.

## MachineReferenceWithHintsProperties
### Properties
* **displayNameHint**: string (ReadOnly): Last known display name.
* **osFamilyHint**: 'aix' | 'linux' | 'solaris' | 'unknown' | 'windows' (ReadOnly): Last known operating system family.

## MachineResourcesConfiguration
### Properties
* **cpus**: int: Number of CPUs.
* **cpuSpeed**: int: CPU speed in megahertz (Mhz).
* **cpuSpeedAccuracy**: 'actual' | 'estimated': Describes the accuracy of the cpuSpeed field.
* **physicalMemory**: int: Physical memory in megabytes (MB).

## MachinesSummaryProperties
### Properties
* **endTime**: string (Required): Summary interval end time.
* **live**: int (Required): Number of live machines.
* **os**: [MachineCountsByOperatingSystem](#machinecountsbyoperatingsystem) (Required): Machine counts by operating system.
* **startTime**: string (Required): Summary interval start time.
* **total**: int (Required): Total number of machines.

## NetworkConfiguration
### Properties
* **defaultIpv4Gateways**: string[]: Default IPv4 gateways.
* **dnsNames**: string[]: DNS names associated with the machine.
* **ipv4Interfaces**: [Ipv4NetworkInterface](#ipv4networkinterface)[]: IPv4 interfaces.
* **ipv6Interfaces**: [Ipv6NetworkInterface](#ipv6networkinterface)[]: IPv6 interfaces.
* **macAddresses**: string[]: MAC addresses of all active network interfaces.

## OperatingSystemConfiguration
### Properties
* **bitness**: '32bit' | '64bit' (Required): Operating system bitness (32-bit or 64-bit).
* **family**: 'aix' | 'linux' | 'solaris' | 'unknown' | 'windows' (Required): Windows, Linux, etc.
* **fullName**: string (Required): Operating system full name.

## PortProperties
### Properties
* **displayName**: string: Name to use for display purposes.
* **ipAddress**: string: IP address associated with the port. At present only IPv4 addresses are supported.
* **machine**: [ResourceReference](#resourcereference): Machine hosting this port.
* **monitoringState**: 'discovered' | 'monitored': Specifies whether the port is actively monitored or discovered.
* **portNumber**: int: Port number.

## PortReferenceProperties
### Properties
* **ipAddress**: string (ReadOnly): IP address of the port.
* **machine**: [MachineReference](#machinereference) (ReadOnly): Machine hosting the port.
* **portNumber**: int: Port number.

## ProcessDetails
### Properties
* **commandLine**: string: Process command line.
* **companyName**: string: Name of company that created the process executable.
* **description**: string: Process description.
* **executablePath**: string: Process executable path.
* **fileVersion**: string: File version.
* **firstPid**: int: The Operating System Process Identifier (PID) of the first process in this process pool.
* **internalName**: string: Internal process name.
* **persistentKey**: string: A unique identifier for a process, generally resilient to process restart, computed by Service Map.
* **poolId**: int: Represents the identity of the process pool assigned to the process by Dependency Agent.
* **productName**: string: Product name.
* **productVersion**: string: Product version.
* **services**: [ProcessHostedService](#processhostedservice)[]: Collection of services hosted by this Process (Windows only).
* **workingDirectory**: string: Process workingDirectory.
* **zoneName**: string: Process zone name (Linux only).

## ProcessHostedService
### Properties
* **displayName**: string: The service's display name.
* **name**: string: The name of the service.

## ProcessHostingConfiguration
* **Discriminator**: kind

### Base Properties
* **provider**: 'azure' | string: The hosting provider of the VM.

### AzureProcessHostingConfiguration
#### Properties
* **cloudService**: [AzureCloudServiceConfiguration](#azurecloudserviceconfiguration): Contains information about the cloud service the process belongs to
* **kind**: 'provider:azure' (Required): Additional hosting configuration type qualifier.


## ProcessProperties
### Properties
* **acceptorOf**: [ResourceReference](#resourcereference): Present only for a discovered process acting as a server. References the port on which the discovered process is accepting.
* **clientOf**: [ResourceReference](#resourcereference): Present only for a discovered process acting as a client of a monitored process/machine/port. References the monitored process/machine/port that this process is a client of.
* **details**: [ProcessDetails](#processdetails): Process metadata (command line, product name, etc.).
* **displayName**: string: Name to use for display purposes
* **executableName**: string: The name of the process executable
* **group**: string: The name of the product or suite of the process. The group is determined by its executable name, command line, etc.
* **hosting**: [ProcessHostingConfiguration](#processhostingconfiguration): Information about the hosting environment
* **machine**: [ResourceReference](#resourcereference): Machine hosting this process.
* **monitoringState**: 'discovered' | 'monitored': Specifies whether the process is actively monitored or discovered.
* **role**: 'appServer' | 'databaseServer' | 'ldapServer' | 'smbServer' | 'webServer' | string: The inferred role of this process based on its name, command line, etc.
* **startTime**: string: UTC date and time when the process started
* **timestamp**: string: UTC date and time when this process resource was updated in the system
* **user**: [ProcessUser](#processuser): Information about the account under which the process is executing.

## ProcessReferenceProperties
### Properties
* **machine**: [MachineReference](#machinereference) (ReadOnly): Machine hosting the process.

## ProcessUser
### Properties
* **userDomain**: string: Domain name for the user.
* **userName**: string: User name under which the process is running.

## ResourceReference
* **Discriminator**: kind

### Base Properties
* **id**: string (Required): Resource URI.
* **name**: string (ReadOnly): Resource name.
* **type**: string (ReadOnly): Resource type qualifier.

### ClientGroupReference
#### Properties
* **kind**: 'ref:clientgroup' (Required): Specifies the sub-class of the reference.

### MachineReference
#### Properties
* **kind**: 'ref:machine' (Required): Specifies the sub-class of the reference.

### MachineReferenceWithHints
#### Properties
* **kind**: 'ref:machinewithhints' (Required): Specifies the sub-class of the reference.
* **properties**: [MachineReferenceWithHintsProperties](#machinereferencewithhintsproperties): Machine reference with name and os hints.

### PortReference
#### Properties
* **kind**: 'ref:port' (Required): Specifies the sub-class of the reference.
* **properties**: [PortReferenceProperties](#portreferenceproperties): Resource properties.

### ProcessReference
#### Properties
* **kind**: 'ref:process' (Required): Specifies the sub-class of the reference.
* **properties**: [ProcessReferenceProperties](#processreferenceproperties): Resource properties.


## Timezone
### Properties
* **fullName**: string: Timezone full name.

## VirtualMachineConfiguration
### Properties
* **nativeHostMachineId**: string: The unique identifier of the host of this virtual machine as reported by the underlying virtualization system.
* **nativeMachineId**: string: The unique identifier of the virtual machine as reported by the underlying virtualization system.
* **virtualMachineName**: string: The Name of the virtual machine.
* **virtualMachineType**: 'hyperv' | 'ldom' | 'lpar' | 'unknown' | 'virtualPc' | 'vmware' | 'xen': Specifies the virtualization technology used by the machine (hyperv, vmware, etc.)

