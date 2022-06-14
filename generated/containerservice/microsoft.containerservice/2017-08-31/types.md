# Microsoft.ContainerService @ 2017-08-31

## Resource Microsoft.ContainerService/managedClusters@2017-08-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterProperties](#managedclusterproperties): Properties of a managed cluster.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.ContainerService/managedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredential (Microsoft.ContainerService/managedClusters/accessProfiles@2017-08-31)
* **Resource**: Microsoft.ContainerService/managedClusters/accessProfiles
* **ApiVersion**: 2017-08-31
* **Output**: [ManagedClusterAccessProfile](#managedclusteraccessprofile)

## AccessProfile
### Properties
* **kubeConfig**: any: Base64-encoded Kubernetes configuration file.

## ContainerServiceAgentPoolProfile
### Properties
* **count**: int: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
* **dnsPrefix**: string: DNS prefix to be used to create the FQDN for the agent pool.
* **fqdn**: string (ReadOnly): FQDN for the agent pool.
* **name**: string (Required): Unique name of the agent pool profile in the context of the subscription and resource group.
* **osDiskSizeGB**: int: OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
* **osType**: 'Linux' | 'Windows' | string: OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
* **ports**: int[]: Ports number array used to expose on this agent pool. The default opened ports are different based on your choice of orchestrator.
* **storageProfile**: 'ManagedDisks' | 'StorageAccount' | string: Storage profile specifies what kind of storage used. Choose from StorageAccount and ManagedDisks. Leave it empty, we will choose for you based on the orchestrator choice.
* **vmSize**: 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D11_v2_Promo' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D12_v2_Promo' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D13_v2_Promo' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D14_v2_Promo' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v2_Promo' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D3_v2_Promo' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v2_Promo' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D5_v2_Promo' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS11_v2_Promo' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS12_v2_Promo' | 'Standard_DS13' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13_v2' | 'Standard_DS13_v2_Promo' | 'Standard_DS14' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14_v2' | 'Standard_DS14_v2_Promo' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS2_v2_Promo' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS3_v2_Promo' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS4_v2_Promo' | 'Standard_DS5_v2' | 'Standard_DS5_v2_Promo' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32-16s_v3' | 'Standard_E32-8s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS5' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6' | string (Required): Size of agent VMs.
* **vnetSubnetID**: string: VNet SubnetID specifies the VNet's subnet identifier.

## ContainerServiceLinuxProfile
### Properties
* **adminUsername**: string (Required): The administrator username to use for Linux VMs.
* **ssh**: [ContainerServiceSshConfiguration](#containerservicesshconfiguration) (Required): SSH configuration for Linux-based VMs running on Azure.

## ContainerServicePrincipalProfile
### Properties
* **clientId**: string (Required): The ID for the service principal.
* **keyVaultSecretRef**: [KeyVaultSecretRef](#keyvaultsecretref): Reference to a secret stored in Azure Key Vault.
* **secret**: string: The secret password associated with the service principal in plain text.

## ContainerServiceSshConfiguration
### Properties
* **publicKeys**: [ContainerServiceSshPublicKey](#containerservicesshpublickey)[] (Required): The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.

## ContainerServiceSshPublicKey
### Properties
* **keyData**: string (Required): Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.

## KeyVaultSecretRef
### Properties
* **secretName**: string (Required): The secret name.
* **vaultID**: string (Required): Key vault identifier.
* **version**: string: The secret version.

## ManagedClusterAccessProfile
### Properties
* **id**: string (ReadOnly): Resource Id
* **location**: string (Required): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [AccessProfile](#accessprofile): AccessProfile of a managed cluster.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## ManagedClusterProperties
### Properties
* **agentPoolProfiles**: [ContainerServiceAgentPoolProfile](#containerserviceagentpoolprofile)[]: Properties of the agent pool.
* **dnsPrefix**: string: DNS prefix specified when creating the managed cluster.
* **fqdn**: string (ReadOnly): FQDN for the master pool.
* **kubernetesVersion**: string: Version of Kubernetes specified when creating the managed cluster.
* **linuxProfile**: [ContainerServiceLinuxProfile](#containerservicelinuxprofile): Profile for Linux VMs in the container service cluster.
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **servicePrincipalProfile**: [ContainerServicePrincipalProfile](#containerserviceprincipalprofile): Information about a service principal identity for the cluster to use for manipulating Azure APIs. Either secret or keyVaultSecretRef must be specified.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

