# Microsoft.AVS @ 2019-08-09-preview

## Microsoft.AVS/privateClouds/clusters
### Properties
* **apiVersion**: '2019-08-09-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **type**: 'Microsoft.AVS/privateClouds/clusters' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **clusterId**: int (ReadOnly)
* **clusterSize**: int
* **hosts**: string[] (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Microsoft.AVS/privateClouds
### Properties
* **apiVersion**: '2019-08-09-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateCloudProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AVS/privateClouds' (ReadOnly, DeployTimeConstant)

## PrivateCloudProperties
### Properties
* **circuit**: Circuit
* **cluster**: DefaultClusterProperties
* **clusters**: string[] (ReadOnly)
* **endpoints**: Endpoints (ReadOnly)
* **identitySources**: IdentitySource[]
* **internet**: 'Disabled' | 'Enabled'
* **managementNetwork**: string (ReadOnly)
* **networkBlock**: string
* **nsxtCertificateThumbprint**: string (ReadOnly)
* **nsxtPassword**: string
* **provisioningNetwork**: string (ReadOnly)
* **provisioningState**: 'Building' | 'Cancelled' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' (ReadOnly)
* **vcenterCertificateThumbprint**: string (ReadOnly)
* **vcenterPassword**: string
* **vmotionNetwork**: string (ReadOnly)

## Circuit
### Properties
* **authorizations**: ExpressRouteAuthorization[]
* **expressRouteID**: string (ReadOnly)
* **expressRoutePrivatePeeringID**: string (ReadOnly)
* **primarySubnet**: string (ReadOnly)
* **secondarySubnet**: string (ReadOnly)

## ExpressRouteAuthorization
### Properties
* **id**: string (ReadOnly)
* **key**: string (ReadOnly)
* **name**: string

## DefaultClusterProperties
### Properties
* **clusterId**: int (ReadOnly)
* **clusterSize**: int
* **hosts**: string[] (ReadOnly)

## Endpoints
### Properties
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

## Sku
### Properties
* **name**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

