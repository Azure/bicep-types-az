# Microsoft.ServiceFabric @ 2020-01-01-preview

## Resource Microsoft.ServiceFabric/managedClusters@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagedClusterProperties](#managedclusterproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.ServiceFabric/managedClusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabric/managedClusters/nodeTypes@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NodeTypeProperties](#nodetypeproperties)
* **tags**: [ManagedProxyResourceTags](#managedproxyresourcetags)
* **type**: 'Microsoft.ServiceFabric/managedClusters/nodeTypes' (ReadOnly, DeployTimeConstant)

## ManagedClusterProperties
### Properties
* **addonFeatures**: 'BackupRestoreService' | 'DnsService' | 'ResourceMonitorService'[]
* **adminPassword**: string
* **adminUserName**: string (Required)
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory)
* **clientConnectionPort**: int
* **clients**: [ClientCertificate](#clientcertificate)[]
* **clusterCertificateThumbprint**: string (ReadOnly)
* **clusterCodeVersion**: string
* **clusterId**: string (ReadOnly)
* **clusterState**: 'AutoScale' | 'BaselineUpgrade' | 'Deploying' | 'EnforcingClusterVersion' | 'Ready' | 'UpdatingInfrastructure' | 'UpdatingUserCertificate' | 'UpdatingUserConfiguration' | 'UpgradeServiceUnreachable' | 'WaitingForNodes' (ReadOnly)
* **dnsName**: string (Required)
* **fabricSettings**: [SettingsSectionDescription](#settingssectiondescription)[]
* **fqdn**: string (ReadOnly)
* **httpGatewayConnectionPort**: int
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]
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

## SettingsSectionDescription
### Properties
* **name**: string (Required)
* **parameters**: [SettingsParameterDescription](#settingsparameterdescription)[] (Required)

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypeProperties
### Properties
* **applicationPorts**: [EndpointRangeDescription](#endpointrangedescription)
* **capacities**: [NodeTypePropertiesCapacities](#nodetypepropertiescapacities)
* **dataDiskSizeGB**: int (Required)
* **ephemeralPorts**: [EndpointRangeDescription](#endpointrangedescription)
* **isPrimary**: bool (Required)
* **placementProperties**: [NodeTypePropertiesPlacementProperties](#nodetypepropertiesplacementproperties)
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' (ReadOnly)
* **vmExtensions**: [VmssExtension](#vmssextension)[]
* **vmImageOffer**: string
* **vmImagePublisher**: string
* **vmImageSku**: string
* **vmImageVersion**: string
* **vmInstanceCount**: int (Required)
* **vmSecrets**: [VaultSecretGroup](#vaultsecretgroup)[]
* **vmSize**: string

## EndpointRangeDescription
### Properties
* **endPort**: int (Required)
* **startPort**: int (Required)

## NodeTypePropertiesCapacities
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypePropertiesPlacementProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VmssExtension
### Properties
* **name**: string (Required)
* **properties**: [VmssExtensionProperties](#vmssextensionproperties) (Required)

## VmssExtensionProperties
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
* **sourceVault**: [SubResource](#subresource) (Required)
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[] (Required)

## SubResource
### Properties
* **id**: string

## VaultCertificate
### Properties
* **certificateStore**: string (Required)
* **certificateUrl**: string (Required)

## ManagedProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

