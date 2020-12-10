# Microsoft.AVS @ 2020-07-17-preview

## Microsoft.AVS/privateClouds
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateCloudProperties
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AVS/privateClouds' (ReadOnly, DeployTimeConstant)

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
* **nsxtPassword**: 'OnetimeRotate'
* **provisioningNetwork**: string (ReadOnly)
* **provisioningState**: 'Building' | 'Cancelled' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' (ReadOnly)
* **vcenterCertificateThumbprint**: string (ReadOnly)
* **vcenterPassword**: 'OnetimeRotate'
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
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Sku
### Properties
* **name**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.AVS/privateClouds/authorizations
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteAuthorizationProperties (ReadOnly)
* **type**: 'Microsoft.AVS/privateClouds/authorizations' (ReadOnly, DeployTimeConstant)

## ExpressRouteAuthorizationProperties
### Properties
* **expressRouteAuthorizationId**: string (ReadOnly)
* **expressRouteAuthorizationKey**: string (ReadOnly)
* **provisioningState**: 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Microsoft.AVS/privateClouds/clusters
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **sku**: Sku (Required)
* **type**: 'Microsoft.AVS/privateClouds/clusters' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **clusterId**: int (ReadOnly)
* **clusterSize**: int
* **hosts**: string[] (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Microsoft.AVS/privateClouds/globalReachConnections
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GlobalReachConnectionProperties
* **type**: 'Microsoft.AVS/privateClouds/globalReachConnections' (ReadOnly, DeployTimeConstant)

## GlobalReachConnectionProperties
### Properties
* **addressPrefix**: string (ReadOnly)
* **authorizationKey**: string
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' (ReadOnly)
* **peerExpressRouteCircuit**: string
* **provisioningState**: 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Microsoft.AVS/privateClouds/hcxEnterpriseSites
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HcxEnterpriseSiteProperties (ReadOnly)
* **type**: 'Microsoft.AVS/privateClouds/hcxEnterpriseSites' (ReadOnly, DeployTimeConstant)

## HcxEnterpriseSiteProperties
### Properties
* **activationKey**: string (ReadOnly)
* **status**: 'Available' | 'Consumed' | 'Deactivated' | 'Deleted' (ReadOnly)

## Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkDhcpEntity
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations' (ReadOnly, DeployTimeConstant)

## WorkloadNetworkDhcpEntity
* **Discriminator**: dhcpType
### Base Properties
* **displayName**: string
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **segments**: string[] (ReadOnly)
### RELAY
#### Properties
* **dhcpType**: 'RELAY' (Required)
* **serverAddresses**: string[]

### SERVER
#### Properties
* **dhcpType**: 'SERVER' (Required)
* **leaseTime**: int
* **serverAddress**: string


## RELAY
### Properties
* **dhcpType**: 'RELAY' (Required)
* **serverAddresses**: string[]

## SERVER
### Properties
* **dhcpType**: 'SERVER' (Required)
* **leaseTime**: int
* **serverAddress**: string

## Microsoft.AVS/privateClouds/workloadNetworks/dnsServices
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkDnsServiceProperties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dnsServices' (ReadOnly, DeployTimeConstant)

## WorkloadNetworkDnsServiceProperties
### Properties
* **defaultDnsZone**: string
* **displayName**: string
* **dnsServiceIp**: string
* **fqdnZones**: string[]
* **logLevel**: 'DEBUG' | 'ERROR' | 'FATAL' | 'INFO' | 'WARNING'
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **status**: 'FAILURE' | 'SUCCESS' (ReadOnly)

## Microsoft.AVS/privateClouds/workloadNetworks/dnsZones
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkDnsZoneProperties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dnsZones' (ReadOnly, DeployTimeConstant)

## WorkloadNetworkDnsZoneProperties
### Properties
* **displayName**: string
* **dnsServerIps**: string[]
* **dnsServices**: int
* **domain**: string[]
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **sourceIp**: string

## Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkPortMirroringProperties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles' (ReadOnly, DeployTimeConstant)

## WorkloadNetworkPortMirroringProperties
### Properties
* **destination**: string
* **direction**: 'INGRESS, EGRESS, BIDIRECTIONAL'
* **displayName**: string
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **source**: string
* **status**: 'SUCCESS, FAILURE' (ReadOnly)

## Microsoft.AVS/privateClouds/workloadNetworks/segments
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkSegmentProperties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/segments' (ReadOnly, DeployTimeConstant)

## WorkloadNetworkSegmentProperties
### Properties
* **connectedGateway**: string
* **displayName**: string
* **portVif**: WorkloadNetworkSegmentPortVif[] (ReadOnly)
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **status**: 'SUCCESS, FAILURE' (ReadOnly)
* **subnet**: WorkloadNetworkSegmentSubnet

## WorkloadNetworkSegmentPortVif
### Properties
* **portName**: string

## WorkloadNetworkSegmentSubnet
### Properties
* **dhcpRanges**: string[]
* **gatewayAddress**: string

## Microsoft.AVS/privateClouds/workloadNetworks/vmGroups
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkVMGroupProperties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/vmGroups' (ReadOnly, DeployTimeConstant)

## WorkloadNetworkVMGroupProperties
### Properties
* **displayName**: string
* **members**: string[]
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **status**: 'SUCCESS, FAILURE' (ReadOnly)

