# Microsoft.ContainerService @ 2019-10-01

## Resource Microsoft.ContainerService/managedClusters@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedClusterIdentity](#managedclusteridentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedClusterProperties](#managedclusterproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ContainerService/managedClusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerService/managedClusters/agentPools@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedClusterAgentPoolProfileProperties](#managedclusteragentpoolprofileproperties)
* **type**: 'Microsoft.ContainerService/managedClusters/agentPools' (ReadOnly, DeployTimeConstant)

## ManagedClusterIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## ManagedClusterProperties
### Properties
* **aadProfile**: [ManagedClusterAADProfile](#managedclusteraadprofile)
* **addonProfiles**: [Dictionary<string,ManagedClusterAddonProfile>](#dictionarystringmanagedclusteraddonprofile)
* **agentPoolProfiles**: [ManagedClusterAgentPoolProfile](#managedclusteragentpoolprofile)[]
* **apiServerAccessProfile**: [ManagedClusterAPIServerAccessProfile](#managedclusterapiserveraccessprofile)
* **dnsPrefix**: string
* **enablePodSecurityPolicy**: bool
* **enableRBAC**: bool
* **fqdn**: string (ReadOnly)
* **kubernetesVersion**: string
* **linuxProfile**: [ContainerServiceLinuxProfile](#containerservicelinuxprofile)
* **maxAgentPools**: int (ReadOnly)
* **networkProfile**: [ContainerServiceNetworkProfile](#containerservicenetworkprofile)
* **nodeResourceGroup**: string
* **privateFQDN**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **servicePrincipalProfile**: [ManagedClusterServicePrincipalProfile](#managedclusterserviceprincipalprofile)
* **windowsProfile**: [ManagedClusterWindowsProfile](#managedclusterwindowsprofile)

## ManagedClusterAADProfile
### Properties
* **clientAppID**: string (Required)
* **serverAppID**: string (Required)
* **serverAppSecret**: string
* **tenantID**: string

## Dictionary<string,ManagedClusterAddonProfile>
### Properties
### Additional Properties
* **Additional Properties Type**: [ManagedClusterAddonProfile](#managedclusteraddonprofile)

## ManagedClusterAddonProfile
### Properties
* **config**: [Dictionary<string,String>](#dictionarystringstring)
* **enabled**: bool (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAgentPoolProfile
### Properties
* **availabilityZones**: string[]
* **count**: int
* **enableAutoScaling**: bool
* **enableNodePublicIP**: bool
* **maxCount**: int
* **maxPods**: int
* **minCount**: int
* **name**: string (Required)
* **nodeTaints**: string[]
* **orchestratorVersion**: string
* **osDiskSizeGB**: int
* **osType**: 'Linux' | 'Windows'
* **provisioningState**: string (ReadOnly)
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete'
* **scaleSetPriority**: 'Low' | 'Regular'
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets'
* **vmSize**: 'Standard_A1_v2' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2_v2' | 'Standard_A2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4_v2' | 'Standard_A4' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8_v2' | 'Standard_A8' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1_v2' | 'Standard_D1' | 'Standard_D11_v2_Promo' | 'Standard_D11_v2' | 'Standard_D11' | 'Standard_D12_v2_Promo' | 'Standard_D12_v2' | 'Standard_D12' | 'Standard_D13_v2_Promo' | 'Standard_D13_v2' | 'Standard_D13' | 'Standard_D14_v2_Promo' | 'Standard_D14_v2' | 'Standard_D14' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D2_v2_Promo' | 'Standard_D2_v2' | 'Standard_D2_v3' | 'Standard_D2' | 'Standard_D2s_v3' | 'Standard_D3_v2_Promo' | 'Standard_D3_v2' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D4_v2_Promo' | 'Standard_D4_v2' | 'Standard_D4_v3' | 'Standard_D4' | 'Standard_D4s_v3' | 'Standard_D5_v2_Promo' | 'Standard_D5_v2' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1_v2' | 'Standard_DS1' | 'Standard_DS11_v2_Promo' | 'Standard_DS11_v2' | 'Standard_DS11' | 'Standard_DS12_v2_Promo' | 'Standard_DS12_v2' | 'Standard_DS12' | 'Standard_DS13_v2_Promo' | 'Standard_DS13_v2' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13' | 'Standard_DS14_v2_Promo' | 'Standard_DS14_v2' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14' | 'Standard_DS15_v2' | 'Standard_DS2_v2_Promo' | 'Standard_DS2_v2' | 'Standard_DS2' | 'Standard_DS3_v2_Promo' | 'Standard_DS3_v2' | 'Standard_DS3' | 'Standard_DS4_v2_Promo' | 'Standard_DS4_v2' | 'Standard_DS4' | 'Standard_DS5_v2_Promo' | 'Standard_DS5_v2' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32_v3' | 'Standard_E32-16s_v3' | 'Standard_E32-8s_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s_v2' | 'Standard_F16s' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s_v2' | 'Standard_F2s' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s_v2' | 'Standard_F4s' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s_v2' | 'Standard_F8s' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS4' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_GS5' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6'
* **vnetSubnetID**: string

## ManagedClusterAPIServerAccessProfile
### Properties
* **authorizedIPRanges**: string[]
* **enablePrivateCluster**: bool

## ContainerServiceLinuxProfile
### Properties
* **adminUsername**: string (Required)
* **ssh**: [ContainerServiceSshConfiguration](#containerservicesshconfiguration) (Required)

## ContainerServiceSshConfiguration
### Properties
* **publicKeys**: [ContainerServiceSshPublicKey](#containerservicesshpublickey)[] (Required)

## ContainerServiceSshPublicKey
### Properties
* **keyData**: string (Required)

## ContainerServiceNetworkProfile
### Properties
* **dnsServiceIP**: string
* **dockerBridgeCidr**: string
* **loadBalancerProfile**: [ManagedClusterLoadBalancerProfile](#managedclusterloadbalancerprofile)
* **loadBalancerSku**: 'basic' | 'standard'
* **networkPlugin**: 'azure' | 'kubenet'
* **networkPolicy**: 'azure' | 'calico'
* **podCidr**: string
* **serviceCidr**: string

## ManagedClusterLoadBalancerProfile
### Properties
* **effectiveOutboundIPs**: [ResourceReference](#resourcereference)[]
* **managedOutboundIPs**: [schemas:20_managedOutboundIPs](#schemas20managedoutboundips)
* **outboundIPPrefixes**: [schemas:20_outboundIPPrefixes](#schemas20outboundipprefixes)
* **outboundIPs**: [schemas:20_outboundIPs](#schemas20outboundips)

## ResourceReference
### Properties
* **id**: string

## schemas:20_managedOutboundIPs
### Properties
* **count**: int

## schemas:20_outboundIPPrefixes
### Properties
* **publicIPPrefixes**: [ResourceReference](#resourcereference)[]

## schemas:20_outboundIPs
### Properties
* **publicIPs**: [ResourceReference](#resourcereference)[]

## ManagedClusterServicePrincipalProfile
### Properties
* **clientId**: string (Required)
* **secret**: string

## ManagedClusterWindowsProfile
### Properties
* **adminPassword**: string
* **adminUsername**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAgentPoolProfileProperties
### Properties
* **availabilityZones**: string[]
* **count**: int
* **enableAutoScaling**: bool
* **enableNodePublicIP**: bool
* **maxCount**: int
* **maxPods**: int
* **minCount**: int
* **nodeTaints**: string[]
* **orchestratorVersion**: string
* **osDiskSizeGB**: int
* **osType**: 'Linux' | 'Windows'
* **provisioningState**: string (ReadOnly)
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete'
* **scaleSetPriority**: 'Low' | 'Regular'
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets'
* **vmSize**: 'Standard_A1_v2' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2_v2' | 'Standard_A2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4_v2' | 'Standard_A4' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8_v2' | 'Standard_A8' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1_v2' | 'Standard_D1' | 'Standard_D11_v2_Promo' | 'Standard_D11_v2' | 'Standard_D11' | 'Standard_D12_v2_Promo' | 'Standard_D12_v2' | 'Standard_D12' | 'Standard_D13_v2_Promo' | 'Standard_D13_v2' | 'Standard_D13' | 'Standard_D14_v2_Promo' | 'Standard_D14_v2' | 'Standard_D14' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D2_v2_Promo' | 'Standard_D2_v2' | 'Standard_D2_v3' | 'Standard_D2' | 'Standard_D2s_v3' | 'Standard_D3_v2_Promo' | 'Standard_D3_v2' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D4_v2_Promo' | 'Standard_D4_v2' | 'Standard_D4_v3' | 'Standard_D4' | 'Standard_D4s_v3' | 'Standard_D5_v2_Promo' | 'Standard_D5_v2' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1_v2' | 'Standard_DS1' | 'Standard_DS11_v2_Promo' | 'Standard_DS11_v2' | 'Standard_DS11' | 'Standard_DS12_v2_Promo' | 'Standard_DS12_v2' | 'Standard_DS12' | 'Standard_DS13_v2_Promo' | 'Standard_DS13_v2' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13' | 'Standard_DS14_v2_Promo' | 'Standard_DS14_v2' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14' | 'Standard_DS15_v2' | 'Standard_DS2_v2_Promo' | 'Standard_DS2_v2' | 'Standard_DS2' | 'Standard_DS3_v2_Promo' | 'Standard_DS3_v2' | 'Standard_DS3' | 'Standard_DS4_v2_Promo' | 'Standard_DS4_v2' | 'Standard_DS4' | 'Standard_DS5_v2_Promo' | 'Standard_DS5_v2' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32_v3' | 'Standard_E32-16s_v3' | 'Standard_E32-8s_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s_v2' | 'Standard_F16s' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s_v2' | 'Standard_F2s' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s_v2' | 'Standard_F4s' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s_v2' | 'Standard_F8s' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS4' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_GS5' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6'
* **vnetSubnetID**: string

