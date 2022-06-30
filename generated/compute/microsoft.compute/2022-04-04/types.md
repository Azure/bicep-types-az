# Microsoft.Compute @ 2022-04-04

## Resource Microsoft.Compute/cloudServices@2022-04-04
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-04' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudServiceProperties](#cloudserviceproperties): Cloud service properties
* **systemData**: [SystemData](#systemdata): The system meta data relating to this resource.
* **tags**: [CloudServiceTags](#cloudservicetags): Resource tags.
* **type**: 'Microsoft.Compute/cloudServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/cloudServices/updateDomains@2022-04-04
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-04' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: int (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Compute/cloudServices/updateDomains' (ReadOnly, DeployTimeConstant): The resource type

## CloudServiceExtensionProfile
### Properties
* **extensions**: [Extension](#extension)[]: List of extensions for the cloud service.

## CloudServiceExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Explicitly specify whether platform can automatically upgrade typeHandlerVersion to higher minor versions when they become available.
* **forceUpdateTag**: string: Tag to force apply the provided public and protected settings.
Changing the tag value allows for re-running the extension without changing any of the public or protected settings.
If forceUpdateTag is not changed, updates to public or protected settings would still be applied by the handler.
If neither forceUpdateTag nor any of public or protected settings change, extension would flow to the role instance with the same sequence-number, and
it is up to handler implementation whether to re-run it or not
* **protectedSettings**: any: Protected settings for the extension which are encrypted before sent to the role instance.
* **protectedSettingsFromKeyVault**: [CloudServiceVaultAndSecretReference](#cloudservicevaultandsecretreference): Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **rolesAppliedTo**: string[]: Optional list of roles to apply this extension. If property is not specified or '*' is specified, extension is applied to all roles in the cloud service.
* **settings**: any: Public settings for the extension. For JSON extensions, this is the JSON settings for the extension. For XML Extension (like RDP), this is the XML setting for the extension.
* **type**: string: Specifies the type of the extension.
* **typeHandlerVersion**: string: Specifies the version of the extension. Specifies the version of the extension. If this element is not specified or an asterisk (*) is used as the value, the latest version of the extension is used. If the value is specified with a major version number and an asterisk as the minor version number (X.), the latest minor version of the specified major version is selected. If a major version number and a minor version number are specified (X.Y), the specific extension version is selected. If a version is specified, an auto-upgrade is performed on the role instance.

## CloudServiceNetworkProfile
### Properties
* **loadBalancerConfigurations**: [LoadBalancerConfiguration](#loadbalancerconfiguration)[]: List of Load balancer configurations. Cloud service can have up to two load balancer configurations, corresponding to a Public Load Balancer and an Internal Load Balancer.
* **slotType**: 'Production' | 'Staging' | string: Slot type for the cloud service.
Possible values are <br /><br />**Production**<br /><br />**Staging**<br /><br />
If not specified, the default value is Production.
* **swappableCloudService**: [SubResource](#subresource): The id reference of the cloud service containing the target IP with which the subject cloud service can perform a swap. This property cannot be updated once it is set. The swappable cloud service referred by this id must be present otherwise an error will be thrown.

## CloudServiceOsProfile
### Properties
* **secrets**: [CloudServiceVaultSecretGroup](#cloudservicevaultsecretgroup)[]: Specifies set of certificates that should be installed onto the role instances.

## CloudServiceProperties
### Properties
* **allowModelOverride**: bool: (Optional) Indicates whether the role sku properties (roleProfile.roles.sku) specified in the model/template should override the role instance count and vm size specified in the .cscfg and .csdef respectively.
The default value is `false`.
* **configuration**: string: Specifies the XML service configuration (.cscfg) for the cloud service.
* **configurationUrl**: string: Specifies a URL that refers to the location of the service configuration in the Blob service. The service package URL  can be Shared Access Signature (SAS) URI from any storage account.
This is a write-only property and is not returned in GET calls.
* **extensionProfile**: [CloudServiceExtensionProfile](#cloudserviceextensionprofile): Describes a cloud service extension profile.
* **networkProfile**: [CloudServiceNetworkProfile](#cloudservicenetworkprofile): Network Profile for the cloud service.
* **osProfile**: [CloudServiceOsProfile](#cloudserviceosprofile): Describes the OS profile for the cloud service.
* **packageUrl**: string: Specifies a URL that refers to the location of the service package in the Blob service. The service package URL can be Shared Access Signature (SAS) URI from any storage account.
This is a write-only property and is not returned in GET calls.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **roleProfile**: [CloudServiceRoleProfile](#cloudserviceroleprofile): Describes the role profile for the cloud service.
* **startCloudService**: bool: (Optional) Indicates whether to start the cloud service immediately after it is created. The default value is `true`.
If false, the service model is still deployed, but the code is not run immediately. Instead, the service is PoweredOff until you call Start, at which time the service will be started. A deployed service still incurs charges, even if it is poweredoff.
* **uniqueId**: string (ReadOnly): The unique identifier for the cloud service.
* **upgradeMode**: 'Auto' | 'Manual' | 'Simultaneous' | string: Update mode for the cloud service. Role instances are allocated to update domains when the service is deployed. Updates can be initiated manually in each update domain or initiated automatically in all update domains.
Possible Values are <br /><br />**Auto**<br /><br />**Manual** <br /><br />**Simultaneous**<br /><br />
If not specified, the default value is Auto. If set to Manual, PUT UpdateDomain must be called to apply the update. If set to Auto, the update is automatically applied to each update domain in sequence.

## CloudServiceRoleProfile
### Properties
* **roles**: [CloudServiceRoleProfileProperties](#cloudserviceroleprofileproperties)[]: List of roles for the cloud service.

## CloudServiceRoleProfileProperties
### Properties
* **name**: string: Resource name.
* **sku**: [CloudServiceRoleSku](#cloudservicerolesku): Describes the cloud service role sku.

## CloudServiceRoleSku
### Properties
* **capacity**: int: Specifies the number of role instances in the cloud service.
* **name**: string: The sku name. NOTE: If the new SKU is not supported on the hardware the cloud service is currently on, you need to delete and recreate the cloud service or move back to the old sku.
* **tier**: string: Specifies the tier of the cloud service. Possible Values are <br /><br /> **Standard** <br /><br /> **Basic**

## CloudServiceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CloudServiceVaultAndSecretReference
### Properties
* **secretUrl**: string: Secret URL which contains the protected settings of the extension
* **sourceVault**: [SubResource](#subresource): The ARM Resource ID of the Key Vault

## CloudServiceVaultCertificate
### Properties
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret.

## CloudServiceVaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource): The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
* **vaultCertificates**: [CloudServiceVaultCertificate](#cloudservicevaultcertificate)[]: The list of key vault references in SourceVault which contain certificates.

## Extension
### Properties
* **name**: string: The name of the extension.
* **properties**: [CloudServiceExtensionProperties](#cloudserviceextensionproperties): Extension Properties.

## LoadBalancerConfiguration
### Properties
* **id**: string: Resource Id
* **name**: string (Required): The name of the Load balancer
* **properties**: [LoadBalancerConfigurationProperties](#loadbalancerconfigurationproperties) (Required): Properties of the load balancer configuration.

## LoadBalancerConfigurationProperties
### Properties
* **frontendIPConfigurations**: [LoadBalancerFrontendIPConfiguration](#loadbalancerfrontendipconfiguration)[] (Required): Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration.

## LoadBalancerFrontendIPConfiguration
### Properties
* **name**: string (Required): The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
* **properties**: [LoadBalancerFrontendIPConfigurationProperties](#loadbalancerfrontendipconfigurationproperties) (Required): Properties of load balancer frontend ip configuration.

## LoadBalancerFrontendIPConfigurationProperties
### Properties
* **privateIPAddress**: string: The virtual network private IP address of the IP configuration.
* **publicIPAddress**: [SubResource](#subresource): The reference to the public ip address resource.
* **subnet**: [SubResource](#subresource): The reference to the virtual network subnet resource.

## SubResource
### Properties
* **id**: string: Resource Id

## SystemData
### Properties
* **createdAt**: string (ReadOnly): Specifies the time in UTC at which the Cloud Service (extended support) resource was created. <br />Minimum api-version: 2022-04-04.
* **lastModifiedAt**: string (ReadOnly): Specifies the time in UTC at which the Cloud Service (extended support) resource was last modified. <br />Minimum api-version: 2022-04-04.

