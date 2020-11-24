# Microsoft.ContainerService @ 2019-04-30

## Microsoft.ContainerService/openShiftManagedClusters
### Properties
* **apiVersion**: '2019-04-30' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **plan**: PurchasePlan
* **properties**: OpenShiftManagedClusterProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerService/openShiftManagedClusters' (ReadOnly, DeployTimeConstant)

## PurchasePlan
### Properties
* **name**: string
* **product**: string
* **promotionCode**: string
* **publisher**: string

## OpenShiftManagedClusterProperties
### Properties
* **agentPoolProfiles**: OpenShiftManagedClusterAgentPoolProfile[]
* **authProfile**: OpenShiftManagedClusterAuthProfile
* **clusterVersion**: string (ReadOnly)
* **fqdn**: string (ReadOnly)
* **masterPoolProfile**: OpenShiftManagedClusterMasterPoolProfile
* **networkProfile**: NetworkProfile
* **openShiftVersion**: string (Required)
* **provisioningState**: string (ReadOnly)
* **publicHostname**: string (ReadOnly)
* **routerProfiles**: OpenShiftRouterProfile[]

## OpenShiftManagedClusterAgentPoolProfile
### Properties
* **count**: int (Required)
* **name**: string (Required)
* **osType**: 'Linux' | 'Windows'
* **role**: 'compute' | 'infra'
* **subnetCidr**: string
* **vmSize**: 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32s_v3' | 'Standard_D4s_v3' | 'Standard_D64s_v3' | 'Standard_D8s_v3' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E16s_v3' | 'Standard_E20s_v3' | 'Standard_E32s_v3' | 'Standard_E4s_v3' | 'Standard_E64s_v3' | 'Standard_E8s_v3' | 'Standard_F16s_v2' | 'Standard_F16s' | 'Standard_F32s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8s_v2' | 'Standard_F8s' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' (Required)

## OpenShiftManagedClusterAuthProfile
### Properties
* **identityProviders**: OpenShiftManagedClusterIdentityProvider[]

## OpenShiftManagedClusterIdentityProvider
### Properties
* **name**: string
* **provider**: OpenShiftManagedClusterBaseIdentityProvider

## OpenShiftManagedClusterBaseIdentityProvider
* **Discriminator**: kind
### Base Properties
### AADIdentityProvider
#### Properties
* **clientId**: string
* **customerAdminGroupId**: string
* **kind**: 'AADIdentityProvider' (Required)
* **secret**: string
* **tenantId**: string


## AADIdentityProvider
### Properties
* **clientId**: string
* **customerAdminGroupId**: string
* **kind**: 'AADIdentityProvider' (Required)
* **secret**: string
* **tenantId**: string

## OpenShiftManagedClusterMasterPoolProfile
### Properties
* **count**: int (Required)
* **name**: string
* **osType**: 'Linux' | 'Windows'
* **subnetCidr**: string
* **vmSize**: 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32s_v3' | 'Standard_D4s_v3' | 'Standard_D64s_v3' | 'Standard_D8s_v3' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E16s_v3' | 'Standard_E20s_v3' | 'Standard_E32s_v3' | 'Standard_E4s_v3' | 'Standard_E64s_v3' | 'Standard_E8s_v3' | 'Standard_F16s_v2' | 'Standard_F16s' | 'Standard_F32s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8s_v2' | 'Standard_F8s' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' (Required)

## NetworkProfile
### Properties
* **peerVnetId**: string
* **vnetCidr**: string
* **vnetId**: string

## OpenShiftRouterProfile
### Properties
* **fqdn**: string (ReadOnly)
* **name**: string
* **publicSubdomain**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

