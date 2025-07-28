# Microsoft.Compute @ 2020-10-01-preview

## Resource Microsoft.Compute/cloudServices@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudServiceProperties](#cloudserviceproperties): Cloud service properties
* **tags**: [CloudServiceTags](#cloudservicetags): Resource tags.
* **type**: 'Microsoft.Compute/cloudServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/cloudServices/updateDomains@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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
* **protectedSettings**: string: Protected settings for the extension which are encrypted before sent to the role instance.
* **protectedSettingsFromKeyVault**: [CloudServiceVaultAndSecretReference](#cloudservicevaultandsecretreference)
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **rolesAppliedTo**: string[]: Optional list of roles to apply this extension. If property is not specified or '*' is specified, extension is applied to all roles in the cloud service.
* **settings**: string: Public settings for the extension. For JSON extensions, this is the JSON settings for the extension. For XML Extension (like RDP), this is the XML setting for the extension.
* **type**: string: Specifies the type of the extension.
* **typeHandlerVersion**: string: Specifies the version of the extension. Specifies the version of the extension. If this element is not specified or an asterisk (*) is used as the value, the latest version of the extension is used. If the value is specified with a major version number and an asterisk as the minor version number (X.), the latest minor version of the specified major version is selected. If a major version number and a minor version number are specified (X.Y), the specific extension version is selected. If a version is specified, an auto-upgrade is performed on the role instance.

## CloudServiceNetworkProfile
### Properties
* **loadBalancerConfigurations**: [LoadBalancerConfiguration](#loadbalancerconfiguration)[]: The list of load balancer configurations for the cloud service.
* **swappableCloudService**: [SubResource](#subresource)

## CloudServiceOsProfile
### Properties
* **secrets**: [CloudServiceVaultSecretGroup](#cloudservicevaultsecretgroup)[]: Specifies set of certificates that should be installed onto the role instances.

## CloudServiceProperties
### Properties
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
* **secretUrl**: string
* **sourceVault**: [SubResource](#subresource)

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
* **name**: string: Resource Name
* **properties**: [LoadBalancerConfigurationProperties](#loadbalancerconfigurationproperties)

## LoadBalancerConfigurationProperties
### Properties
* **frontendIPConfigurations**: [LoadBalancerFrontendIPConfiguration](#loadbalancerfrontendipconfiguration)[]: List of IP

## LoadBalancerFrontendIPConfiguration
### Properties
* **name**: string
* **properties**: [LoadBalancerFrontendIPConfigurationProperties](#loadbalancerfrontendipconfigurationproperties): Describes a cloud service IP Configuration

## LoadBalancerFrontendIPConfigurationProperties
### Properties
* **privateIPAddress**: string: The private IP address referenced by the cloud service.
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

## SubResource
### Properties
* **id**: string: Resource Id

