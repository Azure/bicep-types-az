# Microsoft.ContainerService @ 2019-04-30

## Resource Microsoft.ContainerService/openShiftManagedClusters@2019-04-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [PurchasePlan](#purchaseplan): Define the resource plan as required by ARM for billing purposes
* **properties**: [OpenShiftManagedClusterProperties](#openshiftmanagedclusterproperties): Properties of a OpenShift managed cluster.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.ContainerService/openShiftManagedClusters' (ReadOnly, DeployTimeConstant): The resource type

## NetworkProfile
### Properties
* **peerVnetId**: string: CIDR of the Vnet to peer.
* **vnetCidr**: string: CIDR for the OpenShift Vnet.
* **vnetId**: string: ID of the Vnet created for OSA cluster.

## OpenShiftManagedClusterAgentPoolProfile
### Properties
* **count**: int (Required): Number of agents (VMs) to host docker containers.
* **name**: string (Required): Unique name of the pool profile in the context of the subscription and resource group.
* **osType**: 'Linux' | 'Windows' | string: OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
* **role**: 'compute' | 'infra' | string: Define the role of the AgentPoolProfile.
* **subnetCidr**: string: Subnet CIDR for the peering.
* **vmSize**: 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32s_v3' | 'Standard_D4s_v3' | 'Standard_D64s_v3' | 'Standard_D8s_v3' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E16s_v3' | 'Standard_E20s_v3' | 'Standard_E32s_v3' | 'Standard_E4s_v3' | 'Standard_E64s_v3' | 'Standard_E8s_v3' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | string (Required): Size of agent VMs.

## OpenShiftManagedClusterAuthProfile
### Properties
* **identityProviders**: [OpenShiftManagedClusterIdentityProvider](#openshiftmanagedclusteridentityprovider)[]: Type of authentication profile to use.

## OpenShiftManagedClusterBaseIdentityProvider
* **Discriminator**: kind

### Base Properties

### OpenShiftManagedClusterAADIdentityProvider
#### Properties
* **clientId**: string: The clientId password associated with the provider.
* **customerAdminGroupId**: string: The groupId to be granted cluster admin role.
* **kind**: 'AADIdentityProvider' (Required): The kind of the provider.
* **secret**: string: The secret password associated with the provider.
* **tenantId**: string: The tenantId associated with the provider.


## OpenShiftManagedClusterIdentityProvider
### Properties
* **name**: string: Name of the provider.
* **provider**: [OpenShiftManagedClusterBaseIdentityProvider](#openshiftmanagedclusterbaseidentityprovider): Configuration of the provider.

## OpenShiftManagedClusterMasterPoolProfile
### Properties
* **count**: int (Required): Number of masters (VMs) to host docker containers. The default value is 3.
* **name**: string: Unique name of the master pool profile in the context of the subscription and resource group.
* **osType**: 'Linux' | 'Windows' | string: OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
* **subnetCidr**: string: Subnet CIDR for the peering.
* **vmSize**: 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32s_v3' | 'Standard_D4s_v3' | 'Standard_D64s_v3' | 'Standard_D8s_v3' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E16s_v3' | 'Standard_E20s_v3' | 'Standard_E32s_v3' | 'Standard_E4s_v3' | 'Standard_E64s_v3' | 'Standard_E8s_v3' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | string (Required): Size of agent VMs.

## OpenShiftManagedClusterProperties
### Properties
* **agentPoolProfiles**: [OpenShiftManagedClusterAgentPoolProfile](#openshiftmanagedclusteragentpoolprofile)[]: Configuration of OpenShift cluster VMs.
* **authProfile**: [OpenShiftManagedClusterAuthProfile](#openshiftmanagedclusterauthprofile): Configures OpenShift authentication.
* **clusterVersion**: string (ReadOnly): Version of OpenShift specified when creating the cluster.
* **fqdn**: string (ReadOnly): Service generated FQDN for OpenShift API server loadbalancer internal hostname.
* **masterPoolProfile**: [OpenShiftManagedClusterMasterPoolProfile](#openshiftmanagedclustermasterpoolprofile): Configuration for OpenShift master VMs.
* **networkProfile**: [NetworkProfile](#networkprofile): Configuration for OpenShift networking.
* **openShiftVersion**: string (Required): Version of OpenShift specified when creating the cluster.
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **publicHostname**: string (ReadOnly): Service generated FQDN for OpenShift API server.
* **routerProfiles**: [OpenShiftRouterProfile](#openshiftrouterprofile)[]: Configuration for OpenShift router(s).

## OpenShiftRouterProfile
### Properties
* **fqdn**: string (ReadOnly): Auto-allocated FQDN for the OpenShift router.
* **name**: string: Name of the router profile.
* **publicSubdomain**: string (ReadOnly): DNS subdomain for OpenShift router.

## PurchasePlan
### Properties
* **name**: string: The plan ID.
* **product**: string: Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
* **promotionCode**: string: The promotion code.
* **publisher**: string: The plan ID.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

