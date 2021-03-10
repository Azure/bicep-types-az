# Microsoft.Compute @ 2020-10-01-preview

## Resource Microsoft.Compute/cloudServices@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CloudServiceProperties](#cloudserviceproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Compute/cloudServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Compute/cloudServices/updateDomains@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: int (Required, DeployTimeConstant)
* **type**: 'Microsoft.Compute/cloudServices/updateDomains' (ReadOnly, DeployTimeConstant)

## CloudServiceProperties
### Properties
* **configuration**: string
* **configurationUrl**: string
* **extensionProfile**: [CloudServiceExtensionProfile](#cloudserviceextensionprofile)
* **networkProfile**: [CloudServiceNetworkProfile](#cloudservicenetworkprofile)
* **osProfile**: [CloudServiceOsProfile](#cloudserviceosprofile)
* **packageUrl**: string
* **provisioningState**: string (ReadOnly)
* **roleProfile**: [CloudServiceRoleProfile](#cloudserviceroleprofile)
* **startCloudService**: bool
* **uniqueId**: string (ReadOnly)
* **upgradeMode**: 'Auto' | 'Manual' | 'Simultaneous'

## CloudServiceExtensionProfile
### Properties
* **extensions**: [Extension](#extension)[]

## Extension
### Properties
* **name**: string
* **properties**: [CloudServiceExtensionProperties](#cloudserviceextensionproperties)

## CloudServiceExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **forceUpdateTag**: string
* **protectedSettings**: string
* **protectedSettingsFromKeyVault**: [CloudServiceVaultAndSecretReference](#cloudservicevaultandsecretreference)
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **rolesAppliedTo**: string[]
* **settings**: string
* **type**: string
* **typeHandlerVersion**: string

## CloudServiceVaultAndSecretReference
### Properties
* **secretUrl**: string
* **sourceVault**: [SubResource](#subresource)

## SubResource
### Properties
* **id**: string

## CloudServiceNetworkProfile
### Properties
* **loadBalancerConfigurations**: [LoadBalancerConfiguration](#loadbalancerconfiguration)[]
* **swappableCloudService**: [SubResource](#subresource)

## LoadBalancerConfiguration
### Properties
* **name**: string
* **properties**: [LoadBalancerConfigurationProperties](#loadbalancerconfigurationproperties)

## LoadBalancerConfigurationProperties
### Properties
* **frontendIPConfigurations**: [LoadBalancerFrontendIPConfiguration](#loadbalancerfrontendipconfiguration)[]

## LoadBalancerFrontendIPConfiguration
### Properties
* **name**: string
* **properties**: [LoadBalancerFrontendIPConfigurationProperties](#loadbalancerfrontendipconfigurationproperties)

## LoadBalancerFrontendIPConfigurationProperties
### Properties
* **privateIPAddress**: string
* **publicIPAddress**: [SubResource](#subresource)
* **subnet**: [SubResource](#subresource)

## CloudServiceOsProfile
### Properties
* **secrets**: [CloudServiceVaultSecretGroup](#cloudservicevaultsecretgroup)[]

## CloudServiceVaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource)
* **vaultCertificates**: [CloudServiceVaultCertificate](#cloudservicevaultcertificate)[]

## CloudServiceVaultCertificate
### Properties
* **certificateUrl**: string

## CloudServiceRoleProfile
### Properties
* **roles**: [CloudServiceRoleProfileProperties](#cloudserviceroleprofileproperties)[]

## CloudServiceRoleProfileProperties
### Properties
* **name**: string
* **sku**: [CloudServiceRoleSku](#cloudservicerolesku)

## CloudServiceRoleSku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

