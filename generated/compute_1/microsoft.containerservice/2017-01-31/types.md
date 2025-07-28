# Microsoft.ContainerService @ 2017-01-31

## Resource Microsoft.ContainerService/containerServices@2017-01-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerServiceProperties](#containerserviceproperties): Properties of the container service.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.ContainerService/containerServices' (ReadOnly, DeployTimeConstant): The resource type

## ContainerServiceAgentPoolProfile
### Properties
* **count**: int {minValue: 1, maxValue: 100} (Required): Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
* **dnsPrefix**: string (Required): DNS prefix to be used to create the FQDN for the agent pool.
* **fqdn**: string (ReadOnly): FQDN for the agent pool.
* **name**: string (Required): Unique name of the agent pool profile in the context of the subscription and resource group.
* **vmSize**: 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | string (Required): Size of agent VMs.

## ContainerServiceCustomProfile
### Properties
* **orchestrator**: string (Required): The name of the custom orchestrator to use.

## ContainerServiceDiagnosticsProfile
### Properties
* **vmDiagnostics**: [ContainerServiceVMDiagnostics](#containerservicevmdiagnostics) (Required): Profile for the container service VM diagnostic agent.

## ContainerServiceLinuxProfile
### Properties
* **adminUsername**: string {pattern: "^[a-z][a-z0-9_-]*$"} (Required): The administrator username to use for Linux VMs.
* **ssh**: [ContainerServiceSshConfiguration](#containerservicesshconfiguration) (Required): The ssh key configuration for Linux VMs.

## ContainerServiceMasterProfile
### Properties
* **count**: int: Number of masters (VMs) in the container service cluster. Allowed values are 1, 3, and 5. The default value is 1.
* **dnsPrefix**: string (Required): DNS prefix to be used to create the FQDN for master.
* **fqdn**: string (ReadOnly): FQDN for the master.

## ContainerServiceOrchestratorProfile
### Properties
* **orchestratorType**: 'Custom' | 'DCOS' | 'Kubernetes' | 'Swarm' (Required): The orchestrator to use to manage container service cluster resources. Valid values are Swarm, DCOS, and Custom.

## ContainerServicePrincipalProfile
### Properties
* **clientId**: string (Required): The ID for the service principal.
* **secret**: string (Required): The secret password associated with the service principal.

## ContainerServiceProperties
### Properties
* **agentPoolProfiles**: [ContainerServiceAgentPoolProfile](#containerserviceagentpoolprofile)[] (Required): Properties of the agent pool.
* **customProfile**: [ContainerServiceCustomProfile](#containerservicecustomprofile): Properties for custom clusters.
* **diagnosticsProfile**: [ContainerServiceDiagnosticsProfile](#containerservicediagnosticsprofile): Properties of the diagnostic agent.
* **linuxProfile**: [ContainerServiceLinuxProfile](#containerservicelinuxprofile) (Required): Properties of Linux VMs.
* **masterProfile**: [ContainerServiceMasterProfile](#containerservicemasterprofile) (Required): Properties of master agents.
* **orchestratorProfile**: [ContainerServiceOrchestratorProfile](#containerserviceorchestratorprofile): Properties of the orchestrator.
* **provisioningState**: string (ReadOnly): the current deployment or provisioning state, which only appears in the response.
* **servicePrincipalProfile**: [ContainerServicePrincipalProfile](#containerserviceprincipalprofile): Properties for cluster service principals.
* **windowsProfile**: [ContainerServiceWindowsProfile](#containerservicewindowsprofile): Properties of Windows VMs.

## ContainerServiceSshConfiguration
### Properties
* **publicKeys**: [ContainerServiceSshPublicKey](#containerservicesshpublickey)[] (Required): the list of SSH public keys used to authenticate with Linux-based VMs.

## ContainerServiceSshPublicKey
### Properties
* **keyData**: string (Required): Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.

## ContainerServiceVMDiagnostics
### Properties
* **enabled**: bool (Required): Whether the VM diagnostic agent is provisioned on the VM.
* **storageUri**: string (ReadOnly): The URI of the storage account where diagnostics are stored.

## ContainerServiceWindowsProfile
### Properties
* **adminPassword**: string {pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%\^&\*\(\)])[a-zA-Z\d!@#$%\^&\*\(\)]{12,123}$"} (Required): The administrator password to use for Windows VMs.
* **adminUsername**: string {pattern: "^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$"} (Required): The administrator username to use for Windows VMs.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

