# Nginx.NginxPlus @ 2021-05-01-preview

## Resource Nginx.NginxPlus/nginxDeployments@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NginxDeploymentProperties](#nginxdeploymentproperties)
* **sku**: [ResourceSku](#resourcesku)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [NginxDeploymentTags](#nginxdeploymenttags): Dictionary of <string>
* **type**: 'Nginx.NginxPlus/nginxDeployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Nginx.NginxPlus/nginxDeployments/certificates@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NginxCertificateProperties](#nginxcertificateproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [NginxCertificateTags](#nginxcertificatetags): Dictionary of <string>
* **type**: 'Nginx.NginxPlus/nginxDeployments/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Nginx.NginxPlus/nginxDeployments/configurations@2021-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NginxConfigurationProperties](#nginxconfigurationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [NginxConfigurationTags](#nginxconfigurationtags): Dictionary of <string>
* **type**: 'Nginx.NginxPlus/nginxDeployments/configurations' (ReadOnly, DeployTimeConstant): The resource type

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string
* **userAssignedIdentities**: [IdentityPropertiesUserAssignedIdentities](#identitypropertiesuserassignedidentities): Dictionary of <UserIdentityProperties>

## IdentityPropertiesUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## NginxCertificateProperties
### Properties
* **certificateVirtualPath**: string
* **keyVaultSecretId**: string
* **keyVirtualPath**: string
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly)

## NginxCertificateTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NginxConfigurationFile
### Properties
* **content**: string
* **virtualPath**: string

## NginxConfigurationPackage
### Properties
* **data**: string

## NginxConfigurationProperties
### Properties
* **files**: [NginxConfigurationFile](#nginxconfigurationfile)[]
* **package**: [NginxConfigurationPackage](#nginxconfigurationpackage)
* **protectedFiles**: [NginxConfigurationFile](#nginxconfigurationfile)[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **rootFile**: string

## NginxConfigurationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NginxDeploymentProperties
### Properties
* **enableDiagnosticsSupport**: bool
* **ipAddress**: string (ReadOnly): The IP address of the deployment.
* **logging**: [NginxLogging](#nginxlogging)
* **managedResourceGroup**: string: The managed resource group to deploy VNet injection related network resources.
* **networkProfile**: [NginxNetworkProfile](#nginxnetworkprofile)
* **nginxVersion**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly)

## NginxDeploymentTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NginxFrontendIPConfiguration
### Properties
* **privateIPAddresses**: [NginxPrivateIPAddress](#nginxprivateipaddress)[]
* **publicIPAddresses**: [NginxPublicIPAddress](#nginxpublicipaddress)[]

## NginxLogging
### Properties
* **storageAccount**: [NginxStorageAccount](#nginxstorageaccount)

## NginxNetworkInterfaceConfiguration
### Properties
* **subnetId**: string

## NginxNetworkProfile
### Properties
* **frontEndIPConfiguration**: [NginxFrontendIPConfiguration](#nginxfrontendipconfiguration)
* **networkInterfaceConfiguration**: [NginxNetworkInterfaceConfiguration](#nginxnetworkinterfaceconfiguration)

## NginxPrivateIPAddress
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string
* **subnetId**: string

## NginxPublicIPAddress
### Properties
* **id**: string

## NginxStorageAccount
### Properties
* **accountName**: string
* **containerName**: string

## ResourceSku
### Properties
* **name**: string (Required): Name of the SKU.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UserIdentityProperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

