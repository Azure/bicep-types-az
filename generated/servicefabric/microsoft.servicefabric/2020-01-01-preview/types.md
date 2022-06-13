# Microsoft.ServiceFabric @ 2020-01-01-preview

## Resource Microsoft.ServiceFabric/managedClusters@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Azure resource etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Azure resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedClusterProperties](#managedclusterproperties): The managed cluster resource properties
* **sku**: [Sku](#sku): The sku of the managed cluster
* **tags**: [ResourceTags](#resourcetags): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/managedClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabric/managedClusters/nodeTypes@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NodeTypeProperties](#nodetypeproperties): The node type properties
* **tags**: [ManagedProxyResourceTags](#managedproxyresourcetags): Azure resource tags.
* **type**: 'Microsoft.ServiceFabric/managedClusters/nodeTypes' (ReadOnly, DeployTimeConstant): The resource type

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

## EndpointRangeDescription
### Properties
* **endPort**: int (Required): End port of a range of ports
* **startPort**: int (Required): Starting port of a range of ports

## LoadBalancingRule
### Properties
* **backendPort**: int (Required): The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
* **frontendPort**: int (Required): The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
* **probeProtocol**: 'http' | 'https' | 'tcp' | string (Required): the reference to the load balancer probe used by the load balancing rule.
* **probeRequestPath**: string: The probe request path. Only supported for HTTP/HTTPS probes.
* **protocol**: 'tcp' | 'udp' | string (Required): The reference to the transport protocol used by the load balancing rule.

## ManagedClusterProperties
### Properties
* **addonFeatures**: 'BackupRestoreService' | 'DnsService' | 'ResourceMonitorService' | string[]: client certificates for the cluster.
* **adminPassword**: string: vm admin user password.
* **adminUserName**: string (Required): vm admin user name.
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory): Azure active directory.
* **clientConnectionPort**: int: The port used for client connections to the cluster.
* **clients**: [ClientCertificate](#clientcertificate)[]: client certificates for the cluster.
* **clusterCertificateThumbprint**: string (ReadOnly): The cluster certificate thumbprint used node to node communication.
* **clusterCodeVersion**: string: The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
* **clusterId**: string (ReadOnly): A service generated unique identifier for the cluster resource.
* **clusterState**: 'AutoScale' | 'BaselineUpgrade' | 'Deploying' | 'EnforcingClusterVersion' | 'Ready' | 'UpdatingInfrastructure' | 'UpdatingUserCertificate' | 'UpdatingUserConfiguration' | 'UpgradeServiceUnreachable' | 'WaitingForNodes' | string (ReadOnly): The current state of the cluster.
* **dnsName**: string (Required): The cluster dns name.
* **fabricSettings**: [SettingsSectionDescription](#settingssectiondescription)[]: The list of custom fabric settings to configure the cluster.
* **fqdn**: string (ReadOnly): the cluster Fully qualified domain name.
* **httpGatewayConnectionPort**: int: The port used for http connections to the cluster.
* **loadBalancingRules**: [LoadBalancingRule](#loadbalancingrule)[]: Describes load balancing rules.
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the managed cluster resource.

## ManagedProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypeProperties
### Properties
* **applicationPorts**: [EndpointRangeDescription](#endpointrangedescription): The range of ports from which cluster assigned port to Service Fabric applications.
* **capacities**: [NodeTypePropertiesCapacities](#nodetypepropertiescapacities): The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
* **dataDiskSizeGB**: int (Required): Disk size for each vm in the node type in GBs.
* **ephemeralPorts**: [EndpointRangeDescription](#endpointrangedescription): The range of ephemeral ports that nodes in this node type should be configured with.
* **isPrimary**: bool (Required): The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
* **placementProperties**: [NodeTypePropertiesPlacementProperties](#nodetypepropertiesplacementproperties): The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
* **provisioningState**: 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'None' | 'Other' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the managed cluster resource.
* **vmExtensions**: [VmssExtension](#vmssextension)[]: Set of extensions that should be installed onto the virtual machines.
* **vmImageOffer**: string: The offer type of the Azure Virtual Machines Marketplace image. For example, UbuntuServer or WindowsServer.
* **vmImagePublisher**: string: The publisher of the Azure Virtual Machines Marketplace image. For example, Canonical or MicrosoftWindowsServer.
* **vmImageSku**: string: The SKU of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or 2012-R2-Datacenter.
* **vmImageVersion**: string: The version of the Azure Virtual Machines Marketplace image. A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.
* **vmInstanceCount**: int (Required): The number of nodes in the node type.
* **vmSecrets**: [VaultSecretGroup](#vaultsecretgroup)[]: The secrets to install in the virtual machines.
* **vmSize**: string: The size of virtual machines in the pool. All virtual machines in a pool are the same size. For example, Standard_D3.

## NodeTypePropertiesCapacities
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeTypePropertiesPlacementProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SettingsParameterDescription
### Properties
* **name**: string (Required): The parameter name of fabric setting.
* **value**: string (Required): The parameter value of fabric setting.

## SettingsSectionDescription
### Properties
* **name**: string (Required): The section name of the fabric settings.
* **parameters**: [SettingsParameterDescription](#settingsparameterdescription)[] (Required): The collection of parameters in the section.

## Sku
### Properties
* **name**: 'Basic' | 'Standard' | string (Required): Sku Name.

## SubResource
### Properties
* **id**: string: Azure resource identifier.

## VaultCertificate
### Properties
* **certificateStore**: string (Required): For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
* **certificateUrl**: string (Required): This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}

## VaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource) (Required): The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[] (Required): The list of key vault references in SourceVault which contain certificates.

## VmssExtension
### Properties
* **name**: string (Required): The name of the extension.
* **properties**: [VmssExtensionProperties](#vmssextensionproperties) (Required): Describes the properties of a Virtual Machine Scale Set Extension.

## VmssExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **forceUpdateTag**: string: If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **provisionAfterExtensions**: string[]: Collection of extension names after which this extension needs to be provisioned.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string (Required): The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **type**: string (Required): Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string (Required): Specifies the version of the script handler.

