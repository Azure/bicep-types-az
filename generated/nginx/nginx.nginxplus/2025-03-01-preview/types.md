# NGINX.NGINXPLUS @ 2025-03-01-preview

## Resource NGINX.NGINXPLUS/nginxDeployments@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^([a-z0-9A-Z][a-z0-9A-Z-]{0,28}[a-z0-9A-Z]|[a-z0-9A-Z])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxDeploymentProperties](#nginxdeploymentproperties): The resource-specific properties for this resource.
* **sku**: [Sku](#sku): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'NGINX.NGINXPLUS/nginxDeployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource NGINX.NGINXPLUS/nginxDeployments/apiKeys@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^([a-z0-9A-Z][a-z0-9A-Z-]{0,28}[a-z0-9A-Z]|[a-z0-9A-Z])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ApiKeyRequestPropertiesOrApiKeyResponseProperties](#apikeyrequestpropertiesorapikeyresponseproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'NGINX.NGINXPLUS/nginxDeployments/apiKeys' (ReadOnly, DeployTimeConstant): The resource type

## Resource NGINX.NGINXPLUS/nginxDeployments/certificates@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxCertificateProperties](#nginxcertificateproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'NGINX.NGINXPLUS/nginxDeployments/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource NGINX.NGINXPLUS/nginxDeployments/configurations@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxConfigurationRequestPropertiesOrNginxConfigurationResponseProperties](#nginxconfigurationrequestpropertiesornginxconfigurationresponseproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'NGINX.NGINXPLUS/nginxDeployments/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource NGINX.NGINXPLUS/nginxDeployments/wafPolicies@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NginxDeploymentWafPolicyProperties](#nginxdeploymentwafpolicyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'NGINX.NGINXPLUS/nginxDeployments/wafPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Function listDefaultWafPolicies (NGINX.NGINXPLUS/nginxDeployments@2025-03-01-preview)
* **Resource**: NGINX.NGINXPLUS/nginxDeployments
* **ApiVersion**: 2025-03-01-preview
* **Output**: [NginxDeploymentDefaultWafPolicyListResponse](#nginxdeploymentdefaultwafpolicylistresponse)

## ApiKeyRequestPropertiesOrApiKeyResponseProperties
### Properties
* **endDateTime**: string (Required): Expiry of the key in UTC date-time format.
* **hint**: string (ReadOnly): This is the name of the API key.
* **secretText**: string {sensitive} (Required, WriteOnly): The secret text for the API key

## AutoScaleSettings
### Properties
* **profiles**: [ScaleProfile](#scaleprofile)[] (Required): List of scale profiles.

## AutoUpgradeProfile
### Properties
* **upgradeChannel**: string (Required): The upgrade channel.

## DeploymentWafPolicyApplyingStatus
### Properties
* **code**: string (Required): The apply status code. Can be any free form text
* **displayStatus**: string (Required): The human-readable apply status.
* **time**: string (Required): The timestamp when apply status was recorded in UTC.

## DeploymentWafPolicyCompilingStatus
### Properties
* **code**: string (Required): The compilation status code. Can be any free form text
* **displayStatus**: string (Required): The human-readable compilation status.
* **time**: string (Required): The timestamp when compilation status was recorded in UTC timezone and RFC 3339 format.
Example: `2025-07-08T10:11:08.856Z`.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## NginxAppProtect
### Properties
* **webApplicationFirewallSettings**: [WebApplicationFirewallSettings](#webapplicationfirewallsettings) (Required): Web application firewall settings.
* **webApplicationFirewallStatus**: [WebApplicationFirewallStatus](#webapplicationfirewallstatus) (Required): Web application firewall status.

## NginxCertificateErrorResponseBody
### Properties
* **code**: string: The error code.
* **message**: string: The error message.

## NginxCertificateProperties
### Properties
* **certificateError**: [NginxCertificateErrorResponseBody](#nginxcertificateerrorresponsebody): Error details for the certificate, if any.
* **certificateVirtualPath**: string: The virtual path to the certificate file. This is a path that would be used in an Nginx configuration file, for example, /etc/nginx/ssl/cert.pem.
* **keyVaultSecretCreated**: string: The creation time of the Key Vault secret in UTC RFC 3339 format.
Example: `2025-07-08T10:11:08.856Z`.
* **keyVaultSecretId**: string: The Key Vault secret ID. Example: `https://myvault.vault.azure.net/secrets/mysecret/1234567890abcdef1234567890abcdef`.
* **keyVaultSecretVersion**: string: The Key Vault secret version.
* **keyVirtualPath**: string: The virtual path to the key file. This is a path that would be used in an Nginx configuration file, for example, /etc/nginx/ssl/key.key.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the certificate.
* **sha1Thumbprint**: string: The SHA1 thumbprint of the certificate.

## NginxConfigurationFile
### Properties
* **content**: string: File content in Nginx configuration format, base64 encoded.
* **virtualPath**: string: Virtual path of the file.

## NginxConfigurationPackage
### Properties
* **data**: string: Package data. This is base64 encoded content of the files archive.
* **protectedFiles**: string[]: List of protected files in the package.
These are standard file paths relative to the archive uploaded

## NginxConfigurationProtectedFileContentOrNginxConfigurationProtectedFileResult
### Properties
* **content**: string (WriteOnly): File content in Nginx configuration format, UTF-8 encoded.
* **contentHash**: string: Content hash of the file using SHA-256 algorithm.
* **virtualPath**: string: Virtual path of the file.

## NginxConfigurationRequestPropertiesOrNginxConfigurationResponseProperties
### Properties
* **files**: [NginxConfigurationFile](#nginxconfigurationfile)[]: List of configuration files.
* **package**: [NginxConfigurationPackage](#nginxconfigurationpackage): Configuration package data.
* **protectedFiles**: [NginxConfigurationProtectedFileContentOrNginxConfigurationProtectedFileResult](#nginxconfigurationprotectedfilecontentornginxconfigurationprotectedfileresult)[]: List of protected file requests.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the configuration.
* **rootFile**: string: Root file path.

## NginxDeploymentDefaultWafPolicy
### Properties
* **content**: any (Required): The raw policy content, base64-encoded.
* **filepath**: string (Required): The file path where this policy would be placed.

## NginxDeploymentDefaultWafPolicyListResponse
### Properties
* **nextLink**: string: URL to fetch the next page of WAF policies.
* **value**: [NginxDeploymentDefaultWafPolicy](#nginxdeploymentdefaultwafpolicy)[] (Required): List of default WAF policies.

## NginxDeploymentProperties
### Properties
* **autoUpgradeProfile**: [AutoUpgradeProfile](#autoupgradeprofile) (Required): Auto-upgrade profile.
* **dataplaneApiEndpoint**: string (Required): Dataplane API endpoint.
* **enableDiagnosticsSupport**: bool (Required): Whether diagnostics support is enabled.
* **ipAddress**: string (Required): The IP address of the deployment.
* **logging**: [NginxLogging](#nginxlogging) (Required): Logging configuration.
* **networkProfile**: [NginxNetworkProfile](#nginxnetworkprofile) (Required): The network profile.
* **nginxAppProtect**: [NginxAppProtect](#nginxappprotect) (Required): Nginx App Protect configuration.
* **nginxVersion**: string (Required): The Nginx version.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the deployment.
* **scalingProperties**: [NginxDeploymentScalingProperties](#nginxdeploymentscalingproperties) (Required): Scaling properties.
* **userProfile**: [NginxDeploymentUserProfile](#nginxdeploymentuserprofile) (Required): User profile.

## NginxDeploymentScalingProperties
### Properties
* **autoScaleSettings**: [AutoScaleSettings](#autoscalesettings) (Required): Auto-scale settings.
* **capacity**: int (Required): The capacity of the deployment.

## NginxDeploymentUserProfile
### Properties
* **preferredEmail**: string (Required): The preferred email address.

## NginxDeploymentWafPolicyProperties
### Properties
* **applyingState**: [DeploymentWafPolicyApplyingStatus](#deploymentwafpolicyapplyingstatus) (Required): The applying status of the WAF policy.
* **compilingState**: [DeploymentWafPolicyCompilingStatus](#deploymentwafpolicycompilingstatus) (Required): The compiling status of the WAF policy.
* **content**: any (Required): The raw policy content (base64-encoded).
* **filepath**: string (Required): The file path of the WAF policy.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the WAF policy.

## NginxFrontendIPConfiguration
### Properties
* **privateIPAddresses**: [NginxPrivateIPAddress](#nginxprivateipaddress)[] (Required): Private IP addresses.
* **publicIPAddresses**: [NginxPublicIPAddress](#nginxpublicipaddress)[] (Required): Public IP addresses.

## NginxLogging
### Properties
* **storageAccount**: [NginxStorageAccount](#nginxstorageaccount) (Required): Storage account configuration.

## NginxNetworkInterfaceConfiguration
### Properties
* **subnetId**: string (Required): The subnet resource ID.

## NginxNetworkProfile
### Properties
* **frontEndIPConfiguration**: [NginxFrontendIPConfiguration](#nginxfrontendipconfiguration) (Required): Frontend IP configuration.
* **networkInterfaceConfiguration**: [NginxNetworkInterfaceConfiguration](#nginxnetworkinterfaceconfiguration) (Required): Network interface configuration.

## NginxPrivateIPAddress
### Properties
* **privateIPAddress**: string (Required): The private IP address.
* **privateIPAllocationMethod**: 'Dynamic' | 'Static' | string (Required): The allocation method for the private IP.
* **subnetId**: string (Required): The subnet resource ID.

## NginxPublicIPAddress
### Properties
* **id**: string (Required): The resource ID of the public IP address.

## NginxStorageAccount
### Properties
* **accountName**: string (Required): The storage account name.
* **containerName**: string (Required): The container name.

## ScaleProfile
### Properties
* **capacity**: [ScaleProfileCapacity](#scaleprofilecapacity) (Required): Capacity settings for the scale profile.
* **name**: string (Required): The name of the scale profile.

## ScaleProfileCapacity
### Properties
* **max**: int (Required): Maximum capacity.
* **min**: int (Required): Minimum capacity.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. E.g. P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## WebApplicationFirewallComponentVersions
### Properties
* **wafEngineVersion**: string (Required): WAF engine version.
* **wafNginxVersion**: string (Required): WAF Nginx version.

## WebApplicationFirewallPackage
### Properties
* **revisionDatetime**: string (Required): The revision datetime.
* **version**: string (Required): The package version.

## WebApplicationFirewallSettings
### Properties
* **activationState**: 'Disabled' | 'Enabled' | string (Required): The activation state of the WAF.

## WebApplicationFirewallStatus
### Properties
* **attackSignaturesPackage**: [WebApplicationFirewallPackage](#webapplicationfirewallpackage) (Required): Attack signatures package.
* **botSignaturesPackage**: [WebApplicationFirewallPackage](#webapplicationfirewallpackage) (Required): Bot signatures package.
* **componentVersions**: [WebApplicationFirewallComponentVersions](#webapplicationfirewallcomponentversions) (Required): Component versions.
* **threatCampaignsPackage**: [WebApplicationFirewallPackage](#webapplicationfirewallpackage) (Required): Threat campaigns package.
* **wafRelease**: string (Required): The WAF release version.

