# Nginx.NginxPlus @ 2025-03-01-preview

## Resource Nginx.NginxPlus/nginxDeployments@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Identity Properties
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-z0-9A-Z][a-z0-9A-Z-]{0,28}[a-z0-9A-Z]|[a-z0-9A-Z])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxDeploymentProperties](#nginxdeploymentproperties): Nginx Deployment Properties
* **sku**: [ResourceSku](#resourcesku): Resource Sku
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Nginx.NginxPlus/nginxDeployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Nginx.NginxPlus/nginxDeployments/apiKeys@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^([a-z0-9A-Z][a-z0-9A-Z-]{0,28}[a-z0-9A-Z]|[a-z0-9A-Z])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxDeploymentApiKeyRequestPropertiesOrNginxDeploymentApiKeyResponseProperties](#nginxdeploymentapikeyrequestpropertiesornginxdeploymentapikeyresponseproperties): Nginx Deployment Api Key Request Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Nginx.NginxPlus/nginxDeployments/apiKeys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Nginx.NginxPlus/nginxDeployments/certificates@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string {pattern: "^([a-z0-9A-Z][a-z0-9A-Z-]{0,28}[a-z0-9A-Z]|[a-z0-9A-Z])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxCertificateProperties](#nginxcertificateproperties): Nginx Certificate Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Nginx.NginxPlus/nginxDeployments/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Nginx.NginxPlus/nginxDeployments/configurations@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxConfigurationRequestPropertiesOrNginxConfigurationResponseProperties](#nginxconfigurationrequestpropertiesornginxconfigurationresponseproperties): Nginx Configuration Request Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Nginx.NginxPlus/nginxDeployments/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Nginx.NginxPlus/nginxDeployments/wafPolicies@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^([a-z0-9A-Z][a-z0-9A-Z-]{0,28}[a-z0-9A-Z]|[a-z0-9A-Z])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxDeploymentWafPolicyProperties](#nginxdeploymentwafpolicyproperties): Nginx Deployment Waf Policy Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Nginx.NginxPlus/nginxDeployments/wafPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Function listDefaultWafPolicies (Nginx.NginxPlus/nginxDeployments@2025-03-01-preview)
* **Resource**: Nginx.NginxPlus/nginxDeployments
* **ApiVersion**: 2025-03-01-preview
* **Output**: [NginxDeploymentDefaultWafPolicyListResponse](#nginxdeploymentdefaultwafpolicylistresponse)

## AutoUpgradeProfile
### Properties
* **upgradeChannel**: string (Required): Channel used for autoupgrade.

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string: Identity Type
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
* **certificateError**: [NginxCertificateErrorResponseBody](#nginxcertificateerrorresponsebody): Nginx Certificate Error Response Body
* **certificateVirtualPath**: string
* **keyVaultSecretCreated**: string (ReadOnly)
* **keyVaultSecretId**: string
* **keyVaultSecretVersion**: string (ReadOnly)
* **keyVirtualPath**: string
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State
* **sha1Thumbprint**: string (ReadOnly)

## NginxConfigurationFile
### Properties
* **content**: string
* **virtualPath**: string

## NginxConfigurationPackage
### Properties
* **data**: string
* **protectedFiles**: string[]

## NginxConfigurationProtectedFileRequestOrNginxConfigurationProtectedFileResponse
### Properties
* **content**: string {sensitive} (WriteOnly): The content of the protected file. This value is a PUT only value. If you perform a GET request on this value, it will be empty because it is a protected file.
* **contentHash**: string: The hash of the content of the file. This value is used to determine if the file has changed.
* **virtualPath**: string: The virtual path of the protected file.

## NginxConfigurationRequestPropertiesOrNginxConfigurationResponseProperties
### Properties
* **files**: [NginxConfigurationFile](#nginxconfigurationfile)[]
* **package**: [NginxConfigurationPackage](#nginxconfigurationpackage): Nginx Configuration Package
* **protectedFiles**: [NginxConfigurationProtectedFileRequestOrNginxConfigurationProtectedFileResponse](#nginxconfigurationprotectedfilerequestornginxconfigurationprotectedfileresponse)[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State
* **rootFile**: string

## NginxDeploymentApiKeyRequestPropertiesOrNginxDeploymentApiKeyResponseProperties
### Properties
* **endDateTime**: string: The time after which this Dataplane API Key is no longer valid.
* **hint**: string (ReadOnly): The first three characters of the secret text to help identify it in use. This property is read-only.
* **secretText**: string {sensitive} (WriteOnly): Secret text to be used as a Dataplane API Key. This is a write only property that can never be read back, but the first three characters will be returned in the 'hint' property.

## NginxDeploymentDefaultWafPolicyListResponse
### Properties
* **nextLink**: string
* **value**: [NginxDeploymentDefaultWafPolicyProperties](#nginxdeploymentdefaultwafpolicyproperties)[]

## NginxDeploymentDefaultWafPolicyProperties
### Properties
* **content**: any (ReadOnly)
* **filepath**: string (ReadOnly)

## NginxDeploymentProperties
### Properties
* **autoUpgradeProfile**: [AutoUpgradeProfile](#autoupgradeprofile): Autoupgrade settings of a deployment.
* **dataplaneApiEndpoint**: string (ReadOnly): Dataplane API endpoint for the caller to update the NGINX state of the deployment.
* **enableDiagnosticsSupport**: bool
* **ipAddress**: string (ReadOnly): The IP address of the deployment.
* **logging**: [NginxLogging](#nginxlogging): Nginx Logging
* **networkProfile**: [NginxNetworkProfile](#nginxnetworkprofile): Nginx Network Profile
* **nginxAppProtect**: [NginxDeploymentPropertiesNginxAppProtect](#nginxdeploymentpropertiesnginxappprotect): Settings for NGINX App Protect (NAP)
* **nginxVersion**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State
* **scalingProperties**: [NginxDeploymentScalingProperties](#nginxdeploymentscalingproperties): Information on how the deployment will be scaled.
* **userProfile**: [NginxDeploymentUserProfile](#nginxdeploymentuserprofile): Nginx Deployment User Profile

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

## NginxDeploymentUserProfile
### Properties
* **preferredEmail**: string {pattern: "^$|^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: The preferred support contact email address of the user used for sending alerts and notification. Can be an empty string or a valid email address.

## NginxDeploymentWafPolicyApplyingStatus
### Properties
* **code**: 'Applying' | 'Failed' | 'NotApplied' | 'Removing' | 'Succeeded' | string (ReadOnly): Machine readable code indicating the applying status code of a WAF Policy.
* **displayStatus**: string (ReadOnly): A readable string of the current status, and sometimes have the reason for the current state.
* **time**: string (ReadOnly): The date and time in UTC the current applying status was set.

## NginxDeploymentWafPolicyCompilingStatus
### Properties
* **code**: 'Failed' | 'InProgress' | 'NotStarted' | 'Succeeded' | string (ReadOnly): Machine readable code indicating the compilation status of a WAF Policy.
* **displayStatus**: string (ReadOnly): A readable string of the current status, and sometimes have the reason for the current state. If the CompilingStatus is Failed the Display Status will be The waf Policy failed to compile.
* **time**: string (ReadOnly): The date and time the policy was compiled in UTC.

## NginxDeploymentWafPolicyProperties
### Properties
* **applyingState**: [NginxDeploymentWafPolicyApplyingStatus](#nginxdeploymentwafpolicyapplyingstatus) (ReadOnly): Nginx Deployment Waf Policy Applying Status
* **compilingState**: [NginxDeploymentWafPolicyCompilingStatus](#nginxdeploymentwafpolicycompilingstatus) (ReadOnly): Nginx Deployment Waf Policy Compiling Status
* **content**: any: The byte content of the Policy
* **filepath**: string: The file path where the Policy is to be saved
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State

## NginxFrontendIPConfiguration
### Properties
* **privateIPAddresses**: [NginxPrivateIPAddress](#nginxprivateipaddress)[]
* **publicIPAddresses**: [NginxPublicIPAddress](#nginxpublicipaddress)[]

## NginxLogging
### Properties
* **storageAccount**: [NginxStorageAccount](#nginxstorageaccount): Nginx Storage Account

## NginxNetworkInterfaceConfiguration
### Properties
* **subnetId**: string

## NginxNetworkProfile
### Properties
* **frontEndIPConfiguration**: [NginxFrontendIPConfiguration](#nginxfrontendipconfiguration): Nginx Frontend IP Configuration
* **networkInterfaceConfiguration**: [NginxNetworkInterfaceConfiguration](#nginxnetworkinterfaceconfiguration): Nginx Network Interface Configuration

## NginxPrivateIPAddress
### Properties
* **privateIPAddress**: string
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string: Nginx Private IP Allocation Method
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
* **max**: int (Required): The maximum number of NCUs the deployment can be autoscaled to.
* **min**: int (Required): The minimum number of NCUs the deployment can be autoscaled to.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **wafRelease**: string: NGINX App Protect WAF release version

