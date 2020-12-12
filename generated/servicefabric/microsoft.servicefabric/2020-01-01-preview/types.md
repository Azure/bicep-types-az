# Microsoft.ServiceFabric @ 2020-01-01-preview

## Resource Microsoft.ServiceFabric/managedClusters@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedClusterProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabric/managedClusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedClusters/nodeTypes@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NodeTypeProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabric/managedClusters/nodeTypes' (ReadOnly, DeployTimeConstant)

## ManagedClusterProperties
### Properties
* **adminPassword**: string
* **adminUserName**: string (Required)
* **azureActiveDirectory**: AzureActiveDirectory
* **clientConnectionPort**: int
* **clients**: ClientCertificate[]
* **clusterCertificateThumbprint**: string (ReadOnly)
* **clusterCodeVersion**: string
* **clusterId**: string (ReadOnly)
* **clusterState**: 'AutoScale' | 'BaselineUpgrade' | 'Deploying' | 'EnforcingClusterVersion' | 'Ready' | 'UpdatingInfrastructure' | 'UpdatingUserCertificate' | 'UpdatingUserConfiguration' | 'UpgradeServiceUnreachable' | 'WaitingForNodes' (ReadOnly)
* **clusterUpgradeDescription**: ClusterUpgradePolicy
* **clusterUpgradeMode**: 'Automatic' | 'Manual'
* **dnsName**: string (Required)
* **fabricSettings**: SettingsSectionDescription[]
* **fqdn**: string (ReadOnly)
* **httpGatewayConnectionPort**: int
* **loadBalancingRules**: LoadBalancingRule[]
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' (ReadOnly)

## AzureActiveDirectory
### Properties
* **clientApplication**: string
* **clusterApplication**: string
* **tenantId**: string

## ClientCertificate
### Properties
* **commonName**: string
* **isAdmin**: bool (Required)
* **issuerThumbprint**: string
* **thumbprint**: string

## ClusterUpgradePolicy
### Properties
* **deltaHealthPolicy**: ClusterUpgradeDeltaHealthPolicy
* **forceRestart**: bool
* **healthCheckRetryTimeout**: string (Required)
* **healthCheckStableDuration**: string (Required)
* **healthCheckWaitDuration**: string (Required)
* **healthPolicy**: ClusterHealthPolicy (Required)
* **upgradeDomainTimeout**: string (Required)
* **upgradeReplicaSetCheckTimeout**: string (Required)
* **upgradeTimeout**: string (Required)

## ClusterUpgradeDeltaHealthPolicy
### Properties
* **applicationDeltaHealthPolicies**: Dictionary<string,ApplicationDeltaHealthPolicy>
* **maxPercentDeltaUnhealthyApplications**: int (Required)
* **maxPercentDeltaUnhealthyNodes**: int (Required)
* **maxPercentUpgradeDomainDeltaUnhealthyNodes**: int (Required)

## Dictionary<string,ApplicationDeltaHealthPolicy>
### Additional Properties
* **Additional Properties Type**: ApplicationDeltaHealthPolicy

## ApplicationDeltaHealthPolicy
### Properties
* **defaultServiceTypeDeltaHealthPolicy**: ServiceTypeDeltaHealthPolicy
* **serviceTypeDeltaHealthPolicies**: Dictionary<string,ServiceTypeDeltaHealthPolicy>

## ServiceTypeDeltaHealthPolicy
### Properties
* **maxPercentDeltaUnhealthyServices**: int

## Dictionary<string,ServiceTypeDeltaHealthPolicy>
### Additional Properties
* **Additional Properties Type**: ServiceTypeDeltaHealthPolicy

## ClusterHealthPolicy
### Properties
* **applicationHealthPolicies**: Dictionary<string,ApplicationHealthPolicy>
* **maxPercentUnhealthyApplications**: int
* **maxPercentUnhealthyNodes**: int

## Dictionary<string,ApplicationHealthPolicy>
### Additional Properties
* **Additional Properties Type**: ApplicationHealthPolicy

## ApplicationHealthPolicy
### Properties
* **defaultServiceTypeHealthPolicy**: ServiceTypeHealthPolicy
* **serviceTypeHealthPolicies**: Dictionary<string,ServiceTypeHealthPolicy>

## ServiceTypeHealthPolicy
### Properties
* **maxPercentUnhealthyServices**: int

## Dictionary<string,ServiceTypeHealthPolicy>
### Additional Properties
* **Additional Properties Type**: ServiceTypeHealthPolicy

## SettingsSectionDescription
### Properties
* **name**: string (Required)
* **parameters**: SettingsParameterDescription[] (Required)

## SettingsParameterDescription
### Properties
* **name**: string (Required)
* **value**: string (Required)

## LoadBalancingRule
### Properties
* **backendPort**: int (Required)
* **frontendPort**: int (Required)
* **probeProtocol**: 'http' | 'https' | 'tcp' (Required)
* **probeRequestPath**: string
* **protocol**: 'tcp' | 'udp' (Required)

## Sku
### Properties
* **name**: 'Basic' | 'Standard' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## NodeTypeProperties
### Properties
* **applicationPorts**: EndpointRangeDescription
* **capacities**: Dictionary<string,String>
* **dataDiskSizeGB**: int (Required)
* **ephemeralPorts**: EndpointRangeDescription
* **isPrimary**: bool (Required)
* **placementProperties**: Dictionary<string,String>
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' (ReadOnly)
* **vmExtensions**: VMSSExtension[]
* **vmImageOffer**: string
* **vmImagePublisher**: string
* **vmImageSku**: string
* **vmImageVersion**: string
* **vmInstanceCount**: int (Required)
* **vmSecrets**: VaultSecretGroup[]
* **vmSize**: string

## EndpointRangeDescription
### Properties
* **endPort**: int (Required)
* **startPort**: int (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## VMSSExtension
### Properties
* **name**: string (Required)
* **properties**: VMSSExtensionProperties (Required)

## VMSSExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **forceUpdateTag**: string
* **protectedSettings**: any
* **provisionAfterExtensions**: string[]
* **provisioningState**: string (ReadOnly)
* **publisher**: string (Required)
* **settings**: any
* **type**: string (Required)
* **typeHandlerVersion**: string (Required)

## VaultSecretGroup
### Properties
* **sourceVault**: SubResource (Required)
* **vaultCertificates**: VaultCertificate[] (Required)

## SubResource
### Properties
* **id**: string

## VaultCertificate
### Properties
* **certificateStore**: string (Required)
* **certificateUrl**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

