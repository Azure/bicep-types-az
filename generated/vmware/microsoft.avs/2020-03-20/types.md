# Microsoft.AVS @ 2020-03-20

## Resource Microsoft.AVS/privateClouds@2020-03-20
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-20' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateCloudProperties](#privatecloudproperties) (Required): The properties of a private cloud resource
* **sku**: [Sku](#sku) (Required): The private cloud SKU
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags
* **type**: 'Microsoft.AVS/privateClouds' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/authorizations@2020-03-20
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-20' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExpressRouteAuthorizationProperties](#expressrouteauthorizationproperties) (ReadOnly): The properties of an ExpressRoute Circuit Authorization resource
* **type**: 'Microsoft.AVS/privateClouds/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/clusters@2020-03-20
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-20' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties) (Required): The properties of a cluster resource
* **sku**: [Sku](#sku) (Required): The cluster SKU
* **type**: 'Microsoft.AVS/privateClouds/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AVS/privateClouds/hcxEnterpriseSites@2020-03-20
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-20' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HcxEnterpriseSiteProperties](#hcxenterprisesiteproperties) (ReadOnly): The properties of an HCX Enterprise Site resource
* **type**: 'Microsoft.AVS/privateClouds/hcxEnterpriseSites' (ReadOnly, DeployTimeConstant): The resource type

## Function checkQuotaAvailability (Microsoft.AVS/locations@2020-03-20)
* **Resource**: Microsoft.AVS/locations
* **ApiVersion**: 2020-03-20
* **Output**: [Quota](#quota)

## Function checkTrialAvailability (Microsoft.AVS/locations@2020-03-20)
* **Resource**: Microsoft.AVS/locations
* **ApiVersion**: 2020-03-20
* **Output**: [Trial](#trial)

## Function listAdminCredentials (Microsoft.AVS/privateClouds@2020-03-20)
* **Resource**: Microsoft.AVS/privateClouds
* **ApiVersion**: 2020-03-20
* **Output**: [AdminCredentials](#admincredentials)

## AdminCredentials
### Properties
* **nsxtPassword**: string {sensitive} (ReadOnly): NSX-T Manager password
* **nsxtUsername**: string (ReadOnly): NSX-T Manager username
* **vcenterPassword**: string {sensitive} (ReadOnly): vCenter admin password
* **vcenterUsername**: string (ReadOnly): vCenter admin username

## Circuit
### Properties
* **expressRouteID**: string (ReadOnly): Identifier of the ExpressRoute Circuit (Microsoft Colo only)
* **expressRoutePrivatePeeringID**: string (ReadOnly): ExpressRoute Circuit private peering identifier
* **primarySubnet**: string (ReadOnly): CIDR of primary subnet
* **secondarySubnet**: string (ReadOnly): CIDR of secondary subnet

## ClusterProperties
### Properties
* **clusterId**: int (ReadOnly): The identity
* **clusterSize**: int: The cluster size
* **hosts**: string[] (ReadOnly): The hosts
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the cluster provisioning

## Endpoints
### Properties
* **hcxCloudManager**: string (ReadOnly): Endpoint for the HCX Cloud Manager
* **nsxtManager**: string (ReadOnly): Endpoint for the NSX-T Data Center manager
* **vcsa**: string (ReadOnly): Endpoint for Virtual Center Server Appliance

## ExpressRouteAuthorizationProperties
### Properties
* **expressRouteAuthorizationId**: string (ReadOnly): The ID of the ExpressRoute Circuit Authorization
* **expressRouteAuthorizationKey**: string (ReadOnly): The key of the ExpressRoute Circuit Authorization
* **provisioningState**: 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the  ExpressRoute Circuit Authorization provisioning

## HcxEnterpriseSiteProperties
### Properties
* **activationKey**: string (ReadOnly): The activation key
* **status**: 'Available' | 'Consumed' | 'Deactivated' | 'Deleted' | string (ReadOnly): The status of the HCX Enterprise Site

## IdentitySource
### Properties
* **alias**: string: The domain's NetBIOS name
* **baseGroupDN**: string: The base distinguished name for groups
* **baseUserDN**: string: The base distinguished name for users
* **domain**: string: The domain's dns name
* **name**: string: The name of the identity source
* **password**: string {sensitive}: The password of the Active Directory user with a minimum of read-only access to Base DN for users and groups.
* **primaryServer**: string: Primary server URL
* **secondaryServer**: string: Secondary server URL
* **ssl**: 'Disabled' | 'Enabled' | string: Protect LDAP communication using SSL certificate (LDAPS)
* **username**: string: The ID of an Active Directory user with a minimum of read-only access to Base DN for users and group

## ManagementCluster
### Properties
* **clusterId**: int (ReadOnly): The identity
* **clusterSize**: int: The cluster size
* **hosts**: string[] (ReadOnly): The hosts
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state of the cluster provisioning

## PrivateCloudProperties
### Properties
* **circuit**: [Circuit](#circuit): An ExpressRoute Circuit
* **endpoints**: [Endpoints](#endpoints) (ReadOnly): The endpoints
* **identitySources**: [IdentitySource](#identitysource)[]: vCenter Single Sign On Identity Sources
* **internet**: 'Disabled' | 'Enabled' | string: Connectivity to internet is enabled or disabled
* **managementCluster**: [ManagementCluster](#managementcluster): The default cluster used for management
* **managementNetwork**: string (ReadOnly): Network used to access vCenter Server and NSX-T Manager
* **networkBlock**: string (Required): The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
* **nsxtCertificateThumbprint**: string (ReadOnly): Thumbprint of the NSX-T Manager SSL certificate
* **nsxtPassword**: string {sensitive}: Optionally, set the NSX-T Manager password when the private cloud is created
* **provisioningNetwork**: string (ReadOnly): Used for virtual machine cold migration, cloning, and snapshot migration
* **provisioningState**: 'Building' | 'Cancelled' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state
* **vcenterCertificateThumbprint**: string (ReadOnly): Thumbprint of the vCenter Server SSL certificate
* **vcenterPassword**: string {sensitive}: Optionally, set the vCenter admin password when the private cloud is created
* **vmotionNetwork**: string (ReadOnly): Used for live migration of virtual machines

## Quota
### Properties
* **hostsRemaining**: [QuotaHostsRemaining](#quotahostsremaining) (ReadOnly): Remaining hosts quota by sku type
* **quotaEnabled**: 'Disabled' | 'Enabled' | string (ReadOnly): Host quota is active for current subscription

## QuotaHostsRemaining
### Properties
### Additional Properties
* **Additional Properties Type**: int

## Sku
### Properties
* **name**: string (Required): The name of the SKU.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Trial
### Properties
* **availableHosts**: int (ReadOnly): Number of trial hosts available
* **status**: 'TrialAvailable' | 'TrialDisabled' | 'TrialUsed' | string (ReadOnly): Trial status

