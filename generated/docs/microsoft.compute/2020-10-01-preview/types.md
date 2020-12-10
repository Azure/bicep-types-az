# Microsoft.Compute @ 2020-10-01-preview

## Microsoft.Compute/cloudServices
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CloudServiceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Compute/cloudServices' (ReadOnly, DeployTimeConstant)

## CloudServiceProperties
### Properties
* **configuration**: string
* **configurationUrl**: string
* **extensionProfile**: CloudServiceExtensionProfile
* **networkProfile**: CloudServiceNetworkProfile
* **osProfile**: CloudServiceOsProfile
* **packageUrl**: string
* **provisioningState**: string (ReadOnly)
* **roleProfile**: CloudServiceRoleProfile
* **startCloudService**: bool
* **uniqueId**: string (ReadOnly)
* **upgradeMode**: 'Auto' | 'Manual' | 'Simultaneous'

## CloudServiceExtensionProfile
### Properties
* **extensions**: Extension[]

## Extension
### Properties
* **name**: string
* **properties**: CloudServiceExtensionProperties

## CloudServiceExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **forceUpdateTag**: string
* **protectedSettings**: string
* **protectedSettingsFromKeyVault**: CloudServiceVaultAndSecretReference
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **rolesAppliedTo**: string[]
* **settings**: string
* **type**: string
* **typeHandlerVersion**: string

## CloudServiceVaultAndSecretReference
### Properties
* **secretUrl**: string
* **sourceVault**: SubResource

## SubResource
### Properties
* **id**: string

## CloudServiceNetworkProfile
### Properties
* **loadBalancerConfigurations**: LoadBalancerConfiguration[]
* **swappableCloudService**: SubResource

## LoadBalancerConfiguration
### Properties
* **name**: string
* **properties**: LoadBalancerConfigurationProperties

## LoadBalancerConfigurationProperties
### Properties
* **frontendIPConfigurations**: LoadBalancerFrontendIPConfiguration[]

## LoadBalancerFrontendIPConfiguration
### Properties
* **name**: string
* **properties**: LoadBalancerFrontendIPConfigurationProperties

## LoadBalancerFrontendIPConfigurationProperties
### Properties
* **privateIPAddress**: string
* **publicIPAddress**: SubResource
* **subnet**: SubResource

## CloudServiceOsProfile
### Properties
* **secrets**: CloudServiceVaultSecretGroup[]

## CloudServiceVaultSecretGroup
### Properties
* **sourceVault**: SubResource
* **vaultCertificates**: CloudServiceVaultCertificate[]

## CloudServiceVaultCertificate
### Properties
* **certificateUrl**: string

## CloudServiceRoleProfile
### Properties
* **roles**: CloudServiceRoleProfileProperties[]

## CloudServiceRoleProfileProperties
### Properties
* **name**: string
* **sku**: CloudServiceRoleSku

## CloudServiceRoleSku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Compute/cloudServices/updateDomains
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: int (Required, DeployTimeConstant)
* **type**: 'Microsoft.Compute/cloudServices/updateDomains' (ReadOnly, DeployTimeConstant)

