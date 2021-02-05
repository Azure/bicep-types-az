# Microsoft.AVS @ 2020-03-20

## Resource Microsoft.AVS/privateClouds@2020-03-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateCloudProperties (Required)
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AVS/privateClouds' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/authorizations@2020-03-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteAuthorizationProperties (ReadOnly)
* **type**: 'Microsoft.AVS/privateClouds/authorizations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/clusters@2020-03-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties (Required)
* **sku**: Sku (Required)
* **type**: 'Microsoft.AVS/privateClouds/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/hcxEnterpriseSites@2020-03-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HcxEnterpriseSiteProperties (ReadOnly)
* **type**: 'Microsoft.AVS/privateClouds/hcxEnterpriseSites' (ReadOnly, DeployTimeConstant)

## PrivateCloudProperties
### Properties
* **circuit**: Circuit
* **endpoints**: Endpoints (ReadOnly)
* **identitySources**: IdentitySource[]
* **internet**: 'Disabled' | 'Enabled'
* **managementCluster**: ManagementCluster
* **managementNetwork**: string (ReadOnly)
* **networkBlock**: string (Required)
* **nsxtCertificateThumbprint**: string (ReadOnly)
* **nsxtPassword**: string
* **provisioningNetwork**: string (ReadOnly)
* **provisioningState**: 'Building' | 'Cancelled' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' (ReadOnly)
* **vcenterCertificateThumbprint**: string (ReadOnly)
* **vcenterPassword**: string
* **vmotionNetwork**: string (ReadOnly)

## Circuit
### Properties
* **expressRouteID**: string (ReadOnly)
* **expressRoutePrivatePeeringID**: string (ReadOnly)
* **primarySubnet**: string (ReadOnly)
* **secondarySubnet**: string (ReadOnly)

## Endpoints
### Properties
* **hcxCloudManager**: string (ReadOnly)
* **nsxtManager**: string (ReadOnly)
* **vcsa**: string (ReadOnly)

## IdentitySource
### Properties
* **alias**: string
* **baseGroupDN**: string
* **baseUserDN**: string
* **domain**: string
* **name**: string
* **password**: string
* **primaryServer**: string
* **secondaryServer**: string
* **ssl**: 'Disabled' | 'Enabled'
* **username**: string

## ManagementCluster
### Properties
* **clusterId**: int (ReadOnly)
* **clusterSize**: int
* **hosts**: string[] (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## Sku
### Properties
* **name**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExpressRouteAuthorizationProperties
### Properties
* **expressRouteAuthorizationId**: string (ReadOnly)
* **expressRouteAuthorizationKey**: string (ReadOnly)
* **provisioningState**: 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ClusterProperties
### Properties
* **clusterId**: int (ReadOnly)
* **clusterSize**: int
* **hosts**: string[] (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'

## HcxEnterpriseSiteProperties
### Properties
* **activationKey**: string (ReadOnly)
* **status**: 'Available' | 'Consumed' | 'Deactivated' | 'Deleted' (ReadOnly)

