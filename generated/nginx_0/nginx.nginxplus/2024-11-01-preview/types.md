# Nginx.NginxPlus @ 2024-11-01-preview

## Resource Nginx.NginxPlus/nginxDeployments@2024-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string
* **name**: string {pattern: "^([a-z0-9A-Z][a-z0-9A-Z-]{0,28}[a-z0-9A-Z]|[a-z0-9A-Z])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxDeploymentProperties](#nginxdeploymentproperties)
* **sku**: [ResourceSku](#resourcesku)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [NginxDeploymentTags](#nginxdeploymenttags): Dictionary of <string>
* **type**: 'Nginx.NginxPlus/nginxDeployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Nginx.NginxPlus/nginxDeployments/apiKeys@2024-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^([a-z0-9A-Z][a-z0-9A-Z-]{0,28}[a-z0-9A-Z]|[a-z0-9A-Z])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxDeploymentApiKeyRequestPropertiesOrNginxDeploymentApiKeyResponseProperties](#nginxdeploymentapikeyrequestpropertiesornginxdeploymentapikeyresponseproperties)
* **type**: 'Nginx.NginxPlus/nginxDeployments/apiKeys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Nginx.NginxPlus/nginxDeployments/certificates@2024-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NginxCertificateProperties](#nginxcertificateproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Nginx.NginxPlus/nginxDeployments/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Nginx.NginxPlus/nginxDeployments/configurations@2024-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NginxConfigurationRequestPropertiesOrNginxConfigurationResponseProperties](#nginxconfigurationrequestpropertiesornginxconfigurationresponseproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Nginx.NginxPlus/nginxDeployments/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Function analyze (Nginx.NginxPlus/nginxDeployments/configurations@2024-11-01-preview)
* **Resource**: Nginx.NginxPlus/nginxDeployments/configurations
* **ApiVersion**: 2024-11-01-preview
* **Input**: [AnalysisCreate](#analysiscreate)
* **Output**: [AnalysisResult](#analysisresult)

## AnalysisCreate
### Properties
* **config**: [AnalysisCreateConfig](#analysiscreateconfig) (Required)

## AnalysisCreateConfig
### Properties
* **files**: [NginxConfigurationFile](#nginxconfigurationfile)[]
* **package**: [NginxConfigurationPackage](#nginxconfigurationpackage)
* **protectedFiles**: [NginxConfigurationProtectedFileRequest](#nginxconfigurationprotectedfilerequest)[]
* **rootFile**: string: The root file of the NGINX config file(s). It must match one of the files' filepath.

## AnalysisDiagnostic
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
* **diagnostics**: [DiagnosticItem](#diagnosticitem)[]
* **errors**: [AnalysisDiagnostic](#analysisdiagnostic)[]

## AutoUpgradeProfile
### Properties
* **upgradeChannel**: string (Required): Channel used for autoupgrade.

## DiagnosticItem
### Properties
* **category**: string: Category of warning like Best-practices, Recommendation, Security etc.
* **description**: string (Required)
* **directive**: string (Required)
* **file**: string (Required): the filepath of the most relevant config file.
* **id**: string: Unique identifier for the diagnostic
* **level**: 'Info' | 'Warning' | string (Required): Warning or Info
* **line**: int (Required)
* **message**: string (Required)
* **rule**: string (Required)

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

## NginxConfigurationProtectedFileRequest
### Properties
* **content**: string {sensitive}: The content of the protected file. This value is a PUT only value. If you perform a GET request on this value, it will be empty because it is a protected file.
* **contentHash**: string: The hash of the content of the file. This value is used to determine if the file has changed.
* **virtualPath**: string: The virtual path of the protected file.

## NginxConfigurationProtectedFileRequestOrNginxConfigurationProtectedFileResponse
### Properties
* **content**: string {sensitive} (WriteOnly): The content of the protected file. This value is a PUT only value. If you perform a GET request on this value, it will be empty because it is a protected file.
* **contentHash**: string: The hash of the content of the file. This value is used to determine if the file has changed.
* **virtualPath**: string: The virtual path of the protected file.

## NginxConfigurationRequestPropertiesOrNginxConfigurationResponseProperties
### Properties
* **files**: [NginxConfigurationFile](#nginxconfigurationfile)[]
* **package**: [NginxConfigurationPackage](#nginxconfigurationpackage)
* **protectedFiles**: [NginxConfigurationProtectedFileRequestOrNginxConfigurationProtectedFileResponse](#nginxconfigurationprotectedfilerequestornginxconfigurationprotectedfileresponse)[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **rootFile**: string

## NginxDeploymentApiKeyRequestPropertiesOrNginxDeploymentApiKeyResponseProperties
### Properties
* **endDateTime**: string: The time after which this Dataplane API Key is no longer valid.
* **hint**: string (ReadOnly): The first three characters of the secret text to help identify it in use. This property is read-only.
* **secretText**: string {sensitive} (WriteOnly): Secret text to be used as a Dataplane API Key. This is a write only property that can never be read back, but the first three characters will be returned in the 'hint' property.

## NginxDeploymentProperties
### Properties
* **autoUpgradeProfile**: [AutoUpgradeProfile](#autoupgradeprofile): Autoupgrade settings of a deployment.
* **dataplaneApiEndpoint**: string (ReadOnly): Dataplane API endpoint for the caller to update the NGINX state of the deployment.
* **enableDiagnosticsSupport**: bool
* **ipAddress**: string (ReadOnly): The IP address of the deployment.
* **logging**: [NginxLogging](#nginxlogging)
* **networkProfile**: [NginxNetworkProfile](#nginxnetworkprofile)
* **nginxAppProtect**: [NginxDeploymentPropertiesNginxAppProtect](#nginxdeploymentpropertiesnginxappprotect): Settings for NGINX App Protect (NAP)
* **nginxVersion**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly)
* **scalingProperties**: [NginxDeploymentScalingProperties](#nginxdeploymentscalingproperties): Information on how the deployment will be scaled.
* **userProfile**: [NginxDeploymentUserProfile](#nginxdeploymentuserprofile)

## NginxDeploymentPropertiesNginxAppProtect
### Properties
* **webApplicationFirewallSettings**: [WebApplicationFirewallSettings](#webapplicationfirewallsettings) (Required): Settings for the NGINX App Protect Web Application Firewall (WAF)
* **webApplicationFirewallStatus**: [WebApplicationFirewallStatus](#webapplicationfirewallstatus) (ReadOnly): The status of the NGINX App Protect Web Application Firewall

## NginxDeploymentScalingProperties
### Properties
* **autoScaleSettings**: [NginxDeploymentScalingPropertiesAutoScaleSettings](#nginxdeploymentscalingpropertiesautoscalesettings): The settings for enabling automatic scaling of the deployment. If this field is specified, 'scale.capacity' must be empty.
* **capacity**: int

## NginxDeploymentScalingPropertiesAutoScaleSettings
### Properties
* **profiles**: [ScaleProfile](#scaleprofile)[] (Required)

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

## ScaleProfile
### Properties
* **capacity**: [ScaleProfileCapacity](#scaleprofilecapacity) (Required): The capacity parameters of the profile.
* **name**: string (Required)

## ScaleProfileCapacity
### Properties
* **max**: int {minValue: 0} (Required): The maximum number of NCUs the deployment can be autoscaled to.
* **min**: int {minValue: 0} (Required): The minimum number of NCUs the deployment can be autoscaled to.

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

## WebApplicationFirewallComponentVersions
### Properties
* **wafEngineVersion**: string (Required): The version of the NGINX App Protect Web Application Firewall (WAF) engine.
* **wafNginxVersion**: string (Required): The version of the NGINX App Protect Web Application Firewall (WAF) module for NGINX.

## WebApplicationFirewallPackage
### Properties
* **revisionDatetime**: string (Required): The date and time of the package revision.
* **version**: string (Required): The version of the NGINX App Protect Web Application Firewall (WAF) package.

## WebApplicationFirewallSettings
### Properties
* **activationState**: 'Disabled' | 'Enabled' | string: The activation state of the WAF. Use 'Enabled' to enable the WAF and 'Disabled' to disable it.

## WebApplicationFirewallStatus
### Properties
* **attackSignaturesPackage**: [WebApplicationFirewallPackage](#webapplicationfirewallpackage) (ReadOnly): Package containing attack signatures for the NGINX App Protect Web Application Firewall (WAF).
* **botSignaturesPackage**: [WebApplicationFirewallPackage](#webapplicationfirewallpackage) (ReadOnly): Package containing bot signatures for the NGINX App Protect Web Application Firewall (WAF).
* **componentVersions**: [WebApplicationFirewallComponentVersions](#webapplicationfirewallcomponentversions) (ReadOnly): Versions of the NGINX App Protect Web Application Firewall (WAF) components.
* **threatCampaignsPackage**: [WebApplicationFirewallPackage](#webapplicationfirewallpackage) (ReadOnly): Package containing threat campaigns for the NGINX App Protect Web Application Firewall (WAF).

