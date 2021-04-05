# Microsoft.ServiceFabric @ 2020-01-01-preview

## Resource Microsoft.ServiceFabric/managedClusters@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Azure resource etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Azure resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterProperties](#managedclusterproperties): Describes the managed cluster resource properties.
* **sku**: [Sku](#sku): Sku definition
* **tags**: [ResourceTags](#resourcetags): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/managedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabric/managedClusters/nodeTypes@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NodeTypeProperties](#nodetypeproperties): Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.
* **tags**: [ManagedProxyResourceTags](#managedproxyresourcetags): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/managedClusters/nodeTypes' (ReadOnly, DeployTimeConstant): The resource type

## ManagedClusterProperties
### Properties
* **addonFeatures**: 'BackupRestoreService' | 'DnsService' | 'ResourceMonitorService'[]: client certificates for the cluster.
* **adminPassword**: string: vm admin user password.
* **adminUserName**: string (Required): vm admin user name.
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory): The settings to enable AAD authentication on the cluster.
* **clientConnectionPort**: int: The port used for client connections to the cluster.
* **clients**: [ClientCertificate](#clientcertificate)[]: client certificates for the cluster.
* **clusterCertificateThumbprint**: string (ReadOnly): The cluster certificate thumbprint used node to node communication.
* **clusterCodeVersion**: string: The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
* **clusterId**: string (ReadOnly): A service generated unique identifier for the cluster resource.
* **clusterState**: 'AutoScale' | 'BaselineUpgrade' | 'Deploying' | 'EnforcingClusterVersion' | 'Ready' | 'UpdatingInfrastructure' | 'UpdatingUserCertificate' | 'UpdatingUserConfiguration' | 'UpgradeServiceUnreachable' | 'WaitingForNodes' (ReadOnly): The current state of the cluster.

  - WaitingForNodes - Indicates that the cluster resource is created and the resource provider is waiting for Service Fabric VM extension to boot up and report to it.
  - Deploying - Indicates that the Service Fabric runtime is being installed on the VMs. Cluster resource will be in this state until the cluster boots up and system services are up.
  - BaselineUpgrade - Indicates that the cluster is upgrading to establishes the cluster version. This upgrade is automatically initiated when the cluster boots up for the first time.
  - UpdatingUserConfiguration - Indicates that the cluster is being upgraded with the user provided configuration.
  - UpdatingUserCertificate - Indicates that the cluster is being upgraded with the user provided certificate.
  - UpdatingInfrastructure - Indicates that the cluster is being upgraded with the latest Service Fabric runtime version. This happens only when the **upgradeMode** is set to 'Automatic'.
  - EnforcingClusterVersion - Indicates that cluster is on a different version than expected and the cluster is being upgraded to the expected version.
  - UpgradeServiceUnreachable - Indicates that the system service in the cluster is no longer polling the Resource Provider. Clusters in this state cannot be managed by the Resource Provider.
  - AutoScale - Indicates that the ReliabilityLevel of the cluster is being adjusted.
  - Ready - Indicates that the cluster is in a stable state.

* **dnsName**: string (Required): The cluster dns name.
* **fabricSettings**: [SettingsSectionDescription](#settingssectiondescription)[]: The list of custom fabric settings to configure the cluster.
* **fqdn**: string (ReadOnly): the cluster Fully qualified domain name.
* **httpGatewayConnectionPort**: int: The port used for http connections to the cluster.
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]: Describes load balancing rules.
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the managed resource.

## AzureActiveDirectory
### Properties
* **clientApplication**: string: Azure active directory client application id.
* **clusterApplication**: string: Azure active directory cluster application id.
* **tenantId**: string: Azure active directory tenant id.

## ClientCertificate
### Properties
* **commonName**: string: Certificate Common name.
* **isAdmin**: bool (Required): Whether the certificate is admin or not.
* **issuerThumbprint**: string: Issuer thumbprint for the certificate. Only used together with CommonName.
* **thumbprint**: string: Certificate Thumbprint.

## SettingsSectionDescription
### Properties
* **name**: string (Required): The section name of the fabric settings.
* **parameters**: [SettingsParameterDescription](#settingsparameterdescription)[] (Required): The collection of parameters in the section.

## SettingsParameterDescription
### Properties
* **name**: string (Required): The parameter name of fabric setting.
* **value**: string (Required): The parameter value of fabric setting.

## LoadBalancingRule
### Properties
* **backendPort**: int (Required): The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
* **frontendPort**: int (Required): The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
* **probeProtocol**: 'http' | 'https' | 'tcp' (Required): the reference to the load balancer probe used by the load balancing rule.
* **probeRequestPath**: string: The probe request path. Only supported for HTTP/HTTPS probes.
* **protocol**: 'tcp' | 'udp' (Required): The reference to the transport protocol used by the load balancing rule.

## Sku
### Properties
* **name**: 'Basic' | 'Standard' (Required): Sku Name. Basic will have a minimum of 3 seed nodes and Standard a minimum of 5. Basic only allows 1 node type.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypeProperties
### Properties
* **applicationPorts**: [EndpointRangeDescription](#endpointrangedescription): Port range details
* **capacities**: [NodeTypePropertiesCapacities](#nodetypepropertiescapacities): The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
* **dataDiskSizeGB**: int (Required): Disk size for each vm in the node type in GBs.
* **ephemeralPorts**: [EndpointRangeDescription](#endpointrangedescription): Port range details
* **isPrimary**: bool (Required): The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
* **placementProperties**: [NodeTypePropertiesPlacementProperties](#nodetypepropertiesplacementproperties): The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the managed resource.
* **vmExtensions**: [VmssExtension](#vmssextension)[]: Set of extensions that should be installed onto the virtual machines.
* **vmImageOffer**: string: The offer type of the Azure Virtual Machines Marketplace image. For example, UbuntuServer or WindowsServer.
* **vmImagePublisher**: string: The publisher of the Azure Virtual Machines Marketplace image. For example, Canonical or MicrosoftWindowsServer.
* **vmImageSku**: string: The SKU of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or 2012-R2-Datacenter.
* **vmImageVersion**: string: The version of the Azure Virtual Machines Marketplace image. A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.
* **vmInstanceCount**: int (Required): The number of nodes in the node type.
* **vmSecrets**: [VaultSecretGroup](#vaultsecretgroup)[]: The secrets to install in the virtual machines.
* **vmSize**: string: The size of virtual machines in the pool. All virtual machines in a pool are the same size. For example, Standard_D3.

## EndpointRangeDescription
### Properties
* **endPort**: int (Required): End port of a range of ports
* **startPort**: int (Required): Starting port of a range of ports

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
* **name**: string (Required): The name of the extension.
* **properties**: [VmssExtensionProperties](#vmssextensionproperties) (Required): Describes the properties of a Virtual Machine Scale Set Extension.

## VmssExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **forceUpdateTag**: string: If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
* **protectedSettings**: any: Any object
* **provisionAfterExtensions**: string[]: Collection of extension names after which this extension needs to be provisioned.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string (Required): The name of the extension handler publisher.
* **settings**: any: Any object
* **type**: string (Required): Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string (Required): Specifies the version of the script handler.

## VaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource) (Required): Azure resource identifier.
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[] (Required): The list of key vault references in SourceVault which contain certificates.

## SubResource
### Properties
* **id**: string: Azure resource identifier.

## VaultCertificate
### Properties
* **certificateStore**: string (Required): For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
* **certificateUrl**: string (Required): This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}

## ManagedProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

