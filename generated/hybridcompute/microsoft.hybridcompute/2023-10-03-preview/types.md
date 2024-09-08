# Microsoft.HybridCompute @ 2023-10-03-preview

## Resource Microsoft.HybridCompute/licenses@2023-10-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "[a-zA-Z0-9-_\.]+"} (Required, DeployTimeConstant): The resource name
* **properties**: [LicenseProperties](#licenseproperties): Hybrid Compute License properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridCompute/licenses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/locations/publishers/extensionTypes/versions@2023-10-03-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionValueProperties](#extensionvalueproperties) (ReadOnly): The single extension based on search criteria
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridCompute/locations/publishers/extensionTypes/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/machines@2023-10-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **kind**: 'AVS' | 'AWS' | 'EPS' | 'GCP' | 'HCI' | 'SCVMM' | 'VMware' | string: Indicates which kind of Arc machine placement on-premises, such as HCI, SCVMM or VMware etc.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 54, pattern: "^[a-zA-Z0-9-_\.]{1,54}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MachineProperties](#machineproperties): Hybrid Compute Machine properties
* **resources**: [MachineExtension](#machineextension)[] (ReadOnly): The list of extensions affiliated to the machine
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridCompute/machines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/machines/extensions@2023-10-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineExtensionProperties](#machineextensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridCompute/machines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/machines/hybridIdentityMetadata@2023-10-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_\.]{1,54}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HybridIdentityMetadataProperties](#hybrididentitymetadataproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridCompute/machines/hybridIdentityMetadata' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/machines/licenseProfiles@2023-10-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [LicenseProfileProperties](#licenseprofileproperties): Describe the properties of a license profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridCompute/machines/licenseProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/machines/runCommands@2023-10-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "[a-zA-Z0-9-_\.]+"} (Required, DeployTimeConstant): The resource name
* **properties**: [MachineRunCommandProperties](#machineruncommandproperties): Describes Run Command Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridCompute/machines/runCommands' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/networkConfigurations@2023-10-03-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkConfigurationProperties](#networkconfigurationproperties): Network configuration properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridCompute/networkConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/privateLinkScopes@2023-10-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string {pattern: "[a-zA-Z0-9-_\.]+"} (Required, DeployTimeConstant): The resource name
* **properties**: [HybridComputePrivateLinkScopeProperties](#hybridcomputeprivatelinkscopeproperties): Properties that define a Azure Arc PrivateLinkScope resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [PrivateLinkScopesResourceTags](#privatelinkscopesresourcetags): Resource tags
* **type**: 'Microsoft.HybridCompute/privateLinkScopes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/privateLinkScopes/networkSecurityPerimeterConfigurations@2023-10-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[.]{1}.+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties) (ReadOnly): Properties that define a Network Security Perimeter resource.
* **type**: 'Microsoft.HybridCompute/privateLinkScopes/networkSecurityPerimeterConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections@2023-10-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/privateLinkScopes/privateLinkResources@2023-10-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridCompute/privateLinkScopes/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## AccessRule
### Properties
* **name**: string (ReadOnly): Name of the access rule.
* **properties**: [AccessRuleProperties](#accessruleproperties) (ReadOnly): Access rule properties

## AccessRuleProperties
### Properties
* **addressPrefixes**: string[] (ReadOnly): Address prefixes that are allowed access.
* **direction**: 'Inbound' | 'Outbound' | string (ReadOnly): Direction of the access rule.

## AgentConfiguration
### Properties
* **configMode**: 'full' | 'monitor' | string (ReadOnly): Name of configuration mode to use. Modes are pre-defined configurations of security controls, extension allowlists and guest configuration, maintained by Microsoft.
* **extensionsAllowList**: [ConfigurationExtension](#configurationextension)[] (ReadOnly): Array of extensions that are allowed to be installed or updated.
* **extensionsBlockList**: [ConfigurationExtension](#configurationextension)[] (ReadOnly): Array of extensions that are blocked (cannot be installed or updated)
* **extensionsEnabled**: string (ReadOnly): Specifies whether the extension service is enabled or disabled.
* **guestConfigurationEnabled**: string (ReadOnly): Specified whether the guest configuration service is enabled or disabled.
* **incomingConnectionsPorts**: string[] (ReadOnly): Specifies the list of ports that the agent will be able to listen on.
* **proxyBypass**: string[] (ReadOnly): List of service names which should not use the specified proxy server.
* **proxyUrl**: string (ReadOnly): Specifies the URL of the proxy to be used.

## AgentUpgrade
### Properties
* **correlationId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The correlation ID passed in from RSM per upgrade.
* **desiredVersion**: string: Specifies the version info w.r.t AgentUpgrade for the machine.
* **enableAutomaticUpgrade**: bool: Specifies if RSM should try to upgrade this machine
* **lastAttemptDesiredVersion**: string (ReadOnly): Specifies the version of the last attempt
* **lastAttemptMessage**: string (ReadOnly): Failure message of last upgrade attempt if any.
* **lastAttemptStatus**: 'Failed' | 'Success' | string (ReadOnly): Specifies the status of Agent Upgrade.
* **lastAttemptTimestamp**: string (ReadOnly): Timestamp of last upgrade attempt

## CloudMetadata
### Properties
* **provider**: string (ReadOnly): Specifies the cloud provider (Azure/AWS/GCP...).

## ConfigurationExtension
### Properties
* **publisher**: string (ReadOnly): Publisher of the extension.
* **type**: string (ReadOnly): Type of the extension.

## DetectedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## EsuKey
### Properties
* **licenseStatus**: string: The current status of the license profile key.
* **sku**: string: SKU number.

## ExtensionsResourceStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning': The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## ExtensionValueProperties
### Properties
* **extensionType**: string (ReadOnly): The type of the Extension being received.
* **publisher**: string (ReadOnly): The publisher of the Extension being received.
* **version**: string (ReadOnly): The version of the Extension being received.

## HybridComputePrivateLinkScopeProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnectionDataModel](#privateendpointconnectiondatamodel)[] (ReadOnly): The collection of associated Private Endpoint Connections.
* **privateLinkScopeId**: string (ReadOnly): The Guid id of the private link scope.
* **provisioningState**: string (ReadOnly): Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.

## HybridIdentityMetadataProperties
### Properties
* **identity**: [Identity](#identity) (ReadOnly): Identity for the resource.
* **publicKey**: string: The Public Key.
* **vmId**: string: The unique identifier for the resource.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## IpAddress
### Properties
* **address**: string: Represents the IP Address.
* **ipAddressVersion**: string: Represents the Ip Address Version.
* **subnet**: [Subnet](#subnet) (ReadOnly): The subnet to which this IP address belongs.

## KeyDetails
### Properties
* **notAfter**: string (ReadOnly): Key expiration date
* **publicKey**: string (ReadOnly): Public key
* **renewAfter**: string (ReadOnly): Recommended key renewal date

## KeyProperties
### Properties
* **candidatePublicKey**: [KeyDetails](#keydetails) (ReadOnly): Candidate public key details
* **clientPublicKey**: [KeyDetails](#keydetails) (ReadOnly): Current public key details

## License
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [LicenseProperties](#licenseproperties): Hybrid Compute License properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## LicenseDetails
### Properties
* **assignedLicenses**: int (ReadOnly): Describes the number of assigned licenses.
* **edition**: 'Datacenter' | 'Standard' | string: Describes the edition of the license. The values are either Standard or Datacenter.
* **immutableId**: string (ReadOnly): Describes the immutable id.
* **processors**: int: Describes the number of processors.
* **state**: 'Activated' | 'Deactivated' | string: Describes the state of the license.
* **target**: 'Windows Server 2012 R2' | 'Windows Server 2012' | string: Describes the license target server.
* **type**: 'pCore' | 'vCore' | string: Describes the license core type (pCore or vCore).

## LicenseProfileArmEsuProperties
### Properties
* **assignedLicense**: string: The resource id of the license.
* **assignedLicenseImmutableId**: string (ReadOnly): The guid id of the license.
* **esuEligibility**: 'Eligible' | 'Ineligible' | 'Unknown' | string (ReadOnly): Indicates the eligibility state of Esu.
* **esuKeys**: [EsuKey](#esukey)[] (ReadOnly): The list of ESU keys.
* **esuKeyState**: 'Active' | 'Inactive' | string (ReadOnly): Indicates whether there is an ESU Key currently active for the machine.
* **serverType**: 'Datacenter' | 'Standard' | string (ReadOnly): The type of the Esu servers.

## LicenseProfileArmProductProfileProperties
### Properties
* **billingStartDate**: string (ReadOnly): The timestamp in UTC when the billing starts.
* **disenrollmentDate**: string (ReadOnly): The timestamp in UTC when the user disenrolled the feature.
* **enrollmentDate**: string (ReadOnly): The timestamp in UTC when the user enrolls the feature.
* **productFeatures**: [ProductFeature](#productfeature)[]: The list of product features.
* **productType**: 'WindowsIoTEnterprise' | 'WindowsServer' | string: Indicates the product type of the license.
* **subscriptionStatus**: 'Disabled' | 'Enabled' | 'Enabling' | 'Unknown' | string: Indicates the subscription status of the product.

## LicenseProfileMachineInstanceView
### Properties
* **esuProfile**: [LicenseProfileMachineInstanceViewEsuProperties](#licenseprofilemachineinstanceviewesuproperties): Properties for the Machine ESU profile.
* **licenseChannel**: string (ReadOnly): Indicates the license channel.
* **licenseStatus**: 'ExtendedGrace' | 'Licensed' | 'NonGenuineGrace' | 'Notification' | 'OOBGrace' | 'OOTGrace' | 'Unlicensed' | string (ReadOnly): Indicates the license status of the OS.
* **productProfile**: [LicenseProfileArmProductProfileProperties](#licenseprofilearmproductprofileproperties) (ReadOnly): Hybrid Compute Product Profile properties
* **softwareAssurance**: [LicenseProfileMachineInstanceViewSoftwareAssurance](#licenseprofilemachineinstanceviewsoftwareassurance) (ReadOnly)

## LicenseProfileMachineInstanceViewEsuProperties
### Properties
* **assignedLicense**: [License](#license): The assigned license resource.
* **assignedLicenseImmutableId**: string (ReadOnly): The guid id of the license.
* **esuEligibility**: 'Eligible' | 'Ineligible' | 'Unknown' | string (ReadOnly): Indicates the eligibility state of Esu.
* **esuKeys**: [EsuKey](#esukey)[] (ReadOnly): The list of ESU keys.
* **esuKeyState**: 'Active' | 'Inactive' | string (ReadOnly): Indicates whether there is an ESU Key currently active for the machine.
* **licenseAssignmentState**: 'Assigned' | 'NotAssigned' | string: Describes the license assignment state (Assigned or NotAssigned).
* **serverType**: 'Datacenter' | 'Standard' | string (ReadOnly): The type of the Esu servers.

## LicenseProfileMachineInstanceViewSoftwareAssurance
### Properties
* **softwareAssuranceCustomer**: bool: Specifies if this machine is licensed as part of a Software Assurance agreement.

## LicenseProfileProperties
### Properties
* **esuProfile**: [LicenseProfileArmEsuProperties](#licenseprofilearmesuproperties): Hybrid Compute ESU Profile properties
* **productProfile**: [LicenseProfileArmProductProfileProperties](#licenseprofilearmproductprofileproperties): Hybrid Compute Product Profile properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **softwareAssurance**: [LicenseProfilePropertiesSoftwareAssurance](#licenseprofilepropertiessoftwareassurance)

## LicenseProfilePropertiesSoftwareAssurance
### Properties
* **softwareAssuranceCustomer**: bool: Specifies if this machine is licensed as part of a Software Assurance agreement.

## LicenseProperties
### Properties
* **licenseDetails**: [LicenseDetails](#licensedetails): Describes the properties of a License.
* **licenseType**: 'ESU' | string: The type of the license resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state, which only appears in the response.
* **tenantId**: string: Describes the tenant id.

## LocationData
### Properties
* **city**: string: The city or locality where the resource is located.
* **countryOrRegion**: string: The country or region where the resource is located
* **district**: string: The district, state, or province where the resource is located.
* **name**: string {maxLength: 256} (Required): A canonical name for the geographic or physical location.

## MachineExtension
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [MachineExtensionProperties](#machineextensionproperties): Describes Machine Extension Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## MachineExtensionInstanceView
### Properties
* **name**: string: The machine extension name.
* **status**: [MachineExtensionInstanceViewStatus](#machineextensioninstanceviewstatus): Instance view status.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## MachineExtensionInstanceViewStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning' | string: The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## MachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **enableAutomaticUpgrade**: bool: Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **instanceView**: [MachineExtensionInstanceView](#machineextensioninstanceview): The machine extension instance view.
* **protectedSettings**: [MachineExtensionPropertiesProtectedSettings](#machineextensionpropertiesprotectedsettings): The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: [MachineExtensionPropertiesSettings](#machineextensionpropertiessettings): Json formatted public settings for the extension.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## MachineExtensionPropertiesProtectedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

## MachineExtensionPropertiesSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

## MachineProperties
### Properties
* **adFqdn**: string (ReadOnly): Specifies the AD fully qualified display name.
* **agentConfiguration**: [AgentConfiguration](#agentconfiguration) (ReadOnly): Configurable properties that the user can set locally via the azcmagent config command, or remotely via ARM.
* **agentUpgrade**: [AgentUpgrade](#agentupgrade): The info of the machine w.r.t Agent Upgrade
* **agentVersion**: string (ReadOnly): The hybrid machine agent full version.
* **clientPublicKey**: string: Public Key that the client provides to be used during initial resource onboarding
* **cloudMetadata**: [CloudMetadata](#cloudmetadata): The metadata of the cloud environment (Azure/GCP/AWS/OCI...).
* **detectedProperties**: [DetectedProperties](#detectedproperties) (ReadOnly): Detected properties from the machine.
* **displayName**: string (ReadOnly): Specifies the hybrid machine display name.
* **dnsFqdn**: string (ReadOnly): Specifies the DNS fully qualified display name.
* **domainName**: string (ReadOnly): Specifies the Windows domain name.
* **errorDetails**: [ErrorDetail](#errordetail)[] (ReadOnly): Details about the error state.
* **extensions**: [MachineExtensionInstanceView](#machineextensioninstanceview)[]: Machine Extensions information (deprecated field)
* **lastStatusChange**: string (ReadOnly): The time of the last status change.
* **licenseProfile**: [LicenseProfileMachineInstanceView](#licenseprofilemachineinstanceview): Specifies the License related properties for a machine.
* **locationData**: [LocationData](#locationdata): Metadata pertaining to the geographic location of the resource.
* **machineFqdn**: string (ReadOnly): Specifies the hybrid machine FQDN.
* **mssqlDiscovered**: string: Specifies whether any MS SQL instance is discovered on the machine.
* **networkProfile**: [NetworkProfile](#networkprofile) (ReadOnly): Information about the network the machine is on.
* **osEdition**: string (ReadOnly): The edition of the Operating System.
* **osName**: string (ReadOnly): The Operating System running on the hybrid machine.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the hybrid machine.
* **osSku**: string (ReadOnly): Specifies the Operating System product SKU.
* **osType**: string: The type of Operating System (windows/linux).
* **osVersion**: string (ReadOnly): The version of Operating System running on the hybrid machine.
* **parentClusterResourceId**: string: The resource id of the parent cluster (Azure HCI) this machine is assigned to, if any.
* **privateLinkScopeResourceId**: string: The resource id of the private link scope this machine is assigned to, if any.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **serviceStatuses**: [ServiceStatuses](#servicestatuses): Statuses of dependent services that are reported back to ARM.
* **status**: 'Connected' | 'Disconnected' | 'Error' | string (ReadOnly): The status of the hybrid machine agent.
* **vmId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Specifies the hybrid machine unique ID.
* **vmUuid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): Specifies the Arc Machine's unique SMBIOS ID

## MachineRunCommandInstanceView
### Properties
* **endTime**: string: Script end time.
* **error**: string: Script error stream.
* **executionMessage**: string: Communicate script configuration errors or execution messages.
* **executionState**: 'Canceled' | 'Failed' | 'Pending' | 'Running' | 'Succeeded' | 'TimedOut' | 'Unknown' | string: Script execution status.
* **exitCode**: int: Exit code returned from script execution.
* **output**: string: Script output stream.
* **startTime**: string: Script start time.
* **statuses**: [ExtensionsResourceStatus](#extensionsresourcestatus)[]: The  status information.

## MachineRunCommandProperties
### Properties
* **asyncExecution**: bool: Optional. If set to true, provisioning will complete as soon as script starts and will not wait for script to complete.
* **errorBlobManagedIdentity**: [RunCommandManagedIdentity](#runcommandmanagedidentity): User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged
* **errorBlobUri**: string: Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter.
* **instanceView**: [MachineRunCommandInstanceView](#machineruncommandinstanceview) (ReadOnly): The machine run command instance view.
* **outputBlobManagedIdentity**: [RunCommandManagedIdentity](#runcommandmanagedidentity): User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged
* **outputBlobUri**: string: Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter.
* **parameters**: [RunCommandInputParameter](#runcommandinputparameter)[]: The parameters used by the script.
* **protectedParameters**: [RunCommandInputParameter](#runcommandinputparameter)[]: The parameters used by the script.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **runAsPassword**: string {sensitive}: Specifies the user account password on the machine when executing the run command.
* **runAsUser**: string: Specifies the user account on the machine when executing the run command.
* **source**: [MachineRunCommandScriptSource](#machineruncommandscriptsource): The source of the run command script.
* **timeoutInSeconds**: int: The timeout in seconds to execute the run command.

## MachineRunCommandScriptSource
### Properties
* **commandId**: string: Specifies the commandId of predefined built-in script.
* **script**: string: Specifies the script content to be executed on the machine.
* **scriptUri**: string: Specifies the script download location. It can be either SAS URI of an Azure storage blob with read access or public URI.
* **scriptUriManagedIdentity**: [RunCommandManagedIdentity](#runcommandmanagedidentity): User-assigned managed identity that has access to scriptUri in case of Azure storage blob. Use an empty object in case of system-assigned identity. Make sure the Azure storage blob exists, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged.

## NetworkConfigurationProperties
### Properties
* **keyProperties**: [KeyProperties](#keyproperties) (ReadOnly): Public key information for client authentication
* **location**: string: Resource location
* **networkConfigurationScopeId**: string: Associated Network Configuration Scope Id (GUID)
* **networkConfigurationScopeResourceId**: string (Required): Associated Network Configuration Scope Resource Id
* **tenantId**: string (ReadOnly): Azure resource tenant Id

## NetworkInterface
### Properties
* **ipAddresses**: [IpAddress](#ipaddress)[]: The list of IP addresses in this interface.

## NetworkProfile
### Properties
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: The list of network interfaces.

## NetworkSecurityPerimeter
### Properties
* **id**: string (ReadOnly): Azure resource Id
* **location**: string (ReadOnly): Regional location of the perimeter
* **perimeterGuid**: string (ReadOnly): Guid of the Network Security Perimeter

## NetworkSecurityPerimeterConfigurationProperties
### Properties
* **networkSecurityPerimeter**: [NetworkSecurityPerimeter](#networksecurityperimeter): The Network Security Perimeter associated with this configuration.
* **profile**: [NetworkSecurityPerimeterProfile](#networksecurityperimeterprofile): Network Security Perimeter profile
* **provisioningIssues**: [ProvisioningIssue](#provisioningissue)[] (ReadOnly): Provisioning issues.
* **provisioningState**: string (ReadOnly): Current state of this NetworkSecurityPerimeter: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.
* **resourceAssociation**: [ResourceAssociation](#resourceassociation): The Resource Association.

## NetworkSecurityPerimeterProfile
### Properties
* **accessRules**: [AccessRule](#accessrule)[] (ReadOnly): Collection of access rules for the profile
* **accessRulesVersion**: string (ReadOnly): Access rules version number
* **diagnosticSettingsVersion**: string (ReadOnly): Diagnostic settings version number
* **enabledLogCategories**: string[] (ReadOnly): Collection of enabled log categories for the profile
* **name**: string (ReadOnly): Name of the resource

## OSProfile
### Properties
* **computerName**: string (ReadOnly): Specifies the host OS name of the hybrid machine.
* **linuxConfiguration**: [OSProfileLinuxConfiguration](#osprofilelinuxconfiguration): Specifies the linux configuration for update management.
* **windowsConfiguration**: [OSProfileWindowsConfiguration](#osprofilewindowsconfiguration): Specifies the windows configuration for update management.

## OSProfileLinuxConfiguration
### Properties
* **patchSettings**: [PatchSettings](#patchsettings): Specifies the patch settings.

## OSProfileWindowsConfiguration
### Properties
* **patchSettings**: [PatchSettings](#patchsettings): Specifies the patch settings.

## PatchSettings
### Properties
* **assessmentMode**: 'AutomaticByPlatform' | 'ImageDefault' | string: Specifies the assessment mode.
* **patchMode**: 'AutomaticByOS' | 'AutomaticByPlatform' | 'ImageDefault' | 'Manual' | string: Specifies the patch mode.

## PrivateEndpointConnectionDataModel
### Properties
* **id**: string (ReadOnly): The ARM Resource Id of the Private Endpoint.
* **name**: string (ReadOnly): The Name of the Private Endpoint.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The Private Endpoint Connection properties.
* **type**: string (ReadOnly): Azure resource type

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): List of group IDs.
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty): Connection state of the private endpoint connection.
* **provisioningState**: string (ReadOnly): State of the private endpoint connection.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[] (ReadOnly): Required DNS zone names of the the private link resource.

## PrivateLinkScopesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): The actions required for private link service connection.
* **description**: string (Required): The private link service connection description.
* **status**: string (Required): The private link service connection status.

## ProductFeature
### Properties
* **billingStartDate**: string (ReadOnly): The timestamp in UTC when the billing starts.
* **disenrollmentDate**: string (ReadOnly): The timestamp in UTC when the user disenrolled the feature.
* **enrollmentDate**: string (ReadOnly): The timestamp in UTC when the user enrolls the feature.
* **name**: string: Product feature name.
* **subscriptionStatus**: 'Disabled' | 'Enabled' | 'Enabling' | 'Unknown' | string: Indicates the current status of the product features.

## ProvisioningIssue
### Properties
* **name**: string (ReadOnly): Name of the provisioning issue.
* **properties**: [ProvisioningIssueProperties](#provisioningissueproperties) (ReadOnly): Provisioning issue properties

## ProvisioningIssueProperties
### Properties
* **description**: string (ReadOnly): Description of the provisioning issue.
* **issueType**: 'ConfigurationPropagationFailure' | 'MissingIdentityConfiguration' | 'MissingPerimeterConfiguration' | 'Other' | string (ReadOnly): Issue type
* **severity**: 'Error' | 'Warning' | string (ReadOnly): Severity of the provisioning issue.
* **suggestedAccessRules**: [AccessRule](#accessrule)[] (ReadOnly): Access rules that can be added to the perimeter to remediate the issue
* **suggestedResourceIds**: string[] (ReadOnly): ARM Ids of the resources that can be associated to the same perimeter to remediate the issue

## ResourceAssociation
### Properties
* **accessMode**: 'audit' | 'enforced' | 'learning' | string (ReadOnly): The access mode
* **name**: string (ReadOnly): Name of the Resource Association

## RunCommandInputParameter
### Properties
* **name**: string (Required): The run command parameter name.
* **value**: string (Required): The run command parameter value.

## RunCommandManagedIdentity
### Properties
* **clientId**: string: Client Id (GUID value) of the user-assigned managed identity. ObjectId should not be used if this is provided.
* **objectId**: string: Object Id (GUID value) of the user-assigned managed identity. ClientId should not be used if this is provided.

## ServiceStatus
### Properties
* **startupType**: string: The behavior of the service when the Arc-enabled machine starts up.
* **status**: string: The current status of the service.

## ServiceStatuses
### Properties
* **extensionService**: [ServiceStatus](#servicestatus): The state of the extension service on the Arc-enabled machine.
* **guestConfigurationService**: [ServiceStatus](#servicestatus): The state of the guest configuration service on the Arc-enabled machine.

## Subnet
### Properties
* **addressPrefix**: string: Represents address prefix.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

