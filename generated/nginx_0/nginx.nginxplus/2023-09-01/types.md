# Nginx.NginxPlus @ 2023-09-01

## Resource Nginx.NginxPlus/nginxDeployments@2023-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string
* **name**: string {pattern: "^([a-z0-9A-Z][a-z0-9A-Z-]{0,28}[a-z0-9A-Z]|[a-z0-9A-Z])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxDeploymentProperties](#nginxdeploymentproperties)
* **sku**: [ResourceSku](#resourcesku)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [NginxDeploymentTags](#nginxdeploymenttags): Dictionary of <string>
* **type**: 'Nginx.NginxPlus/nginxDeployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Nginx.NginxPlus/nginxDeployments/certificates@2023-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NginxCertificateProperties](#nginxcertificateproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Nginx.NginxPlus/nginxDeployments/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Nginx.NginxPlus/nginxDeployments/configurations@2023-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NginxConfigurationProperties](#nginxconfigurationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Nginx.NginxPlus/nginxDeployments/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Function analyze (Nginx.NginxPlus/nginxDeployments/configurations@2023-09-01)
* **Resource**: Nginx.NginxPlus/nginxDeployments/configurations
* **ApiVersion**: 2023-09-01
* **Input**: [AnalysisCreate](#analysiscreate)
* **Output**: [AnalysisResult](#analysisresult)

## AnalysisCreate
### Properties
* **config**: [AnalysisCreateConfig](#analysiscreateconfig) (Required)

## AnalysisCreateConfig
### Properties
* **files**: [NginxConfigurationFile](#nginxconfigurationfile)[]
* **package**: [NginxConfigurationPackage](#nginxconfigurationpackage)
* **protectedFiles**: [NginxConfigurationFile](#nginxconfigurationfile)[]
* **rootFile**: string: The root file of the NGINX config file(s). It must match one of the files' filepath.

## AnalysisError
### Properties
* **description**: string (Required)
* **directive**: string (Required)
* **file**: string (Required): the filepath of the most relevant config file
* **id**: string: Unique identifier for the error
* **line**: int (Required)
* **message**: string (Required)
* **rule**: string (Required)

## AnalysisResult
### Properties
* **data**: [AnalysisResultData](#analysisresultdata)
* **status**: string (Required): The status of the analysis.

## AnalysisResultData
### Properties
* **errors**: [AnalysisError](#analysiserror)[]

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

## NginxCertificateErrorResponseBody
### Properties
* **code**: string
* **message**: string

## NginxCertificateProperties
### Properties
* **certificateError**: [NginxCertificateErrorResponseBody](#nginxcertificateerrorresponsebody)
* **certificateVirtualPath**: string
* **keyVaultSecretCreated**: string (ReadOnly)
* **keyVaultSecretId**: string
* **keyVaultSecretVersion**: string (ReadOnly)
* **keyVirtualPath**: string
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **sha1Thumbprint**: string (ReadOnly)

## NginxConfigurationFile
### Properties
* **content**: string
* **virtualPath**: string

## NginxConfigurationPackage
### Properties
* **data**: string
* **protectedFiles**: string[]

## NginxConfigurationProperties
### Properties
* **files**: [NginxConfigurationFile](#nginxconfigurationfile)[]
* **package**: [NginxConfigurationPackage](#nginxconfigurationpackage)
* **protectedFiles**: [NginxConfigurationFile](#nginxconfigurationfile)[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **rootFile**: string

## NginxDeploymentProperties
### Properties
* **enableDiagnosticsSupport**: bool
* **ipAddress**: string (ReadOnly): The IP address of the deployment.
* **logging**: [NginxLogging](#nginxlogging)
* **managedResourceGroup**: string: The managed resource group to deploy VNet injection related network resources.
* **networkProfile**: [NginxNetworkProfile](#nginxnetworkprofile)
* **nginxVersion**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **scalingProperties**: [NginxDeploymentScalingProperties](#nginxdeploymentscalingproperties)
* **userProfile**: [NginxDeploymentUserProfile](#nginxdeploymentuserprofile)

## NginxDeploymentScalingProperties
### Properties
* **capacity**: int

## NginxDeploymentTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NginxDeploymentUserProfile
### Properties
* **preferredEmail**: string {pattern: "^$|^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: The preferred support contact email address of the user used for sending alerts and notification. Can be an empty string or a valid email address.

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

