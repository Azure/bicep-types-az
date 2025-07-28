# Microsoft.ContainerService @ 2015-11-01-preview

## Resource Microsoft.ContainerService/containerServices@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerServiceProperties](#containerserviceproperties): Properties of container service
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.ContainerService/containerServices' (ReadOnly, DeployTimeConstant): The resource type

## ContainerServiceAgentPoolProfile
### Properties
* **count**: int {minValue: 1, maxValue: 100}: No. of agents (VMs) that will host docker containers
* **dnsPrefix**: string (Required): DNS prefix to be used to create FQDN for this agent pool
* **fqdn**: string (ReadOnly): FQDN for the agent pool
* **name**: string (Required): Unique name of the agent pool profile within the context of the subscription and resource group
* **vmSize**: 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | string: Size of agent VMs

## ContainerServiceDiagnosticsProfile
### Properties
* **vmDiagnostics**: [ContainerServiceVMDiagnostics](#containerservicevmdiagnostics): Profile for container service VM diagnostic agent

## ContainerServiceLinuxProfile
### Properties
* **adminUsername**: string (Required): The administrator username to use for all Linux VMs
* **ssh**: [ContainerServiceSshConfiguration](#containerservicesshconfiguration) (Required): Specifies the ssh key configuration for Linux VMs

## ContainerServiceMasterProfile
### Properties
* **count**: int: Number of masters (VMs) in the container cluster
* **dnsPrefix**: string (Required): DNS prefix to be used to create FQDN for master
* **fqdn**: string (ReadOnly): FQDN for the master

## ContainerServiceOrchestratorProfile
### Properties
* **orchestratorType**: 'DCOS' | 'Mesos' | 'SwarmPreview': Specifies what orchestrator will be used to manage container cluster resources.

## ContainerServiceProperties
### Properties
* **agentPoolProfiles**: [ContainerServiceAgentPoolProfile](#containerserviceagentpoolprofile)[] (Required): Properties of agent pools
* **diagnosticsProfile**: [ContainerServiceDiagnosticsProfile](#containerservicediagnosticsprofile): Properties for Diagnostic Agent
* **linuxProfile**: [ContainerServiceLinuxProfile](#containerservicelinuxprofile) (Required): Properties for Linux VMs
* **masterProfile**: [ContainerServiceMasterProfile](#containerservicemasterprofile) (Required): Properties of master agents
* **orchestratorProfile**: [ContainerServiceOrchestratorProfile](#containerserviceorchestratorprofile): Properties of orchestrator
* **provisioningState**: string (ReadOnly): Gets the provisioning state, which only appears in the response.
* **windowsProfile**: [ContainerServiceWindowsProfile](#containerservicewindowsprofile): Properties of Windows VMs

## ContainerServiceSshConfiguration
### Properties
* **publicKeys**: [ContainerServiceSshPublicKey](#containerservicesshpublickey)[]: Gets or sets the list of SSH public keys used to authenticate with Linux based VMs

## ContainerServiceSshPublicKey
### Properties
* **keyData**: string (Required): Gets or sets Certificate public key used to authenticate with VM through SSH. The certificate must be in Pem format with or without headers.

## ContainerServiceVMDiagnostics
### Properties
* **enabled**: bool: Gets or sets whether VM Diagnostic Agent should be provisioned on the Virtual Machine.
* **storageUri**: string (ReadOnly): Gets or sets whether VM Diagnostic Agent should be provisioned on the Virtual Machine.

## ContainerServiceWindowsProfile
### Properties
* **adminPassword**: string (Required): The administrator password to use for Windows jumpbox
* **adminUsername**: string (Required): The administrator username to use for Windows jumpbox

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

