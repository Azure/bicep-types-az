# Microsoft.ContainerService @ 2016-09-30

## Resource Microsoft.ContainerService/containerServices@2016-09-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ContainerServiceProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.ContainerService/containerServices' (ReadOnly, DeployTimeConstant)

## ContainerServiceProperties
### Properties
* **agentPoolProfiles**: ContainerServiceAgentPoolProfile[] (Required)
* **customProfile**: ContainerServiceCustomProfile
* **diagnosticsProfile**: ContainerServiceDiagnosticsProfile
* **linuxProfile**: ContainerServiceLinuxProfile (Required)
* **masterProfile**: ContainerServiceMasterProfile (Required)
* **orchestratorProfile**: ContainerServiceOrchestratorProfile
* **provisioningState**: string (ReadOnly)
* **servicePrincipalProfile**: ContainerServicePrincipalProfile
* **windowsProfile**: ContainerServiceWindowsProfile

## ContainerServiceAgentPoolProfile
### Properties
* **count**: int (Required)
* **dnsPrefix**: string (Required)
* **fqdn**: string (ReadOnly)
* **name**: string (Required)
* **vmSize**: 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' (Required)

## ContainerServiceCustomProfile
### Properties
* **orchestrator**: string (Required)

## ContainerServiceDiagnosticsProfile
### Properties
* **vmDiagnostics**: ContainerServiceVMDiagnostics (Required)

## ContainerServiceVMDiagnostics
### Properties
* **enabled**: bool (Required)
* **storageUri**: string (ReadOnly)

## ContainerServiceLinuxProfile
### Properties
* **adminUsername**: string (Required)
* **ssh**: ContainerServiceSshConfiguration (Required)

## ContainerServiceSshConfiguration
### Properties
* **publicKeys**: ContainerServiceSshPublicKey[] (Required)

## ContainerServiceSshPublicKey
### Properties
* **keyData**: string (Required)

## ContainerServiceMasterProfile
### Properties
* **count**: '1' | '3' | '5'
* **dnsPrefix**: string (Required)
* **fqdn**: string (ReadOnly)

## ContainerServiceOrchestratorProfile
### Properties

## ContainerServicePrincipalProfile
### Properties
* **clientId**: string (Required)
* **secret**: string (Required)

## ContainerServiceWindowsProfile
### Properties
* **adminPassword**: string (Required)
* **adminUsername**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

