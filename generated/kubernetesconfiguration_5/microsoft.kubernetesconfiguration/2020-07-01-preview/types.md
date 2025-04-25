# Microsoft.KubernetesConfiguration @ 2020-07-01-preview

## Resource Microsoft.KubernetesConfiguration/extensions@2020-07-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionInstanceProperties](#extensioninstanceproperties): Properties of an Extension Instance resource
* **systemData**: [SystemData](#systemdata): Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
* **type**: 'Microsoft.KubernetesConfiguration/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KubernetesConfiguration/sourceControlConfigurations@2020-07-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlConfigurationProperties](#sourcecontrolconfigurationproperties): Properties to create a Source Control Configuration resource
* **systemData**: [SystemData](#systemdata): Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
* **type**: 'Microsoft.KubernetesConfiguration/sourceControlConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## ComplianceStatus
### Properties
* **complianceState**: 'Compliant' | 'Failed' | 'Installed' | 'Noncompliant' | 'Pending' | string (ReadOnly): The compliance state of the configuration.
* **lastConfigApplied**: string: Datetime the configuration was last applied.
* **message**: string: Message from when the configuration was applied.
* **messageLevel**: 'Error' | 'Information' | 'Warning' | string: Level of the message.

## ConfigurationIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the system assigned identity which is used by the configuration.
* **tenantId**: string (ReadOnly): The tenant id of the system assigned identity which is used by the configuration.
* **type**: 'None' | 'SystemAssigned': The type of identity used for the configuration. Type 'SystemAssigned' will use an implicitly created identity. Type 'None' will not use Managed Identity for the configuration.

## ConfigurationProtectedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConfigurationSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ErrorDefinition
### Properties
* **code**: string (Required): Service specific error code which serves as the substatus for the HTTP error code.
* **message**: string (Required): Description of the error.

## ExtensionInstanceProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Flag to note if this instance participates in auto upgrade of minor version, or not.
* **configurationProtectedSettings**: [ExtensionProtectedSettings](#extensionprotectedsettings): Configuration settings that are sensitive, as name-value pairs for configuring this instance of the extension.
* **configurationSettings**: [ConfigurationSettings](#configurationsettings): Configuration settings, as name-value pairs for configuring this instance of the extension.
* **creationTime**: string (ReadOnly): DateLiteral (per ISO8601) noting the time the resource was created by the client (user).
* **errorInfo**: [ErrorDefinition](#errordefinition) (ReadOnly): Error information from the Agent - e.g. errors during installation.
* **extensionType**: string: Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher.
* **identity**: [ConfigurationIdentity](#configurationidentity): The identity of the configuration.
* **installState**: 'Failed' | 'Installed' | 'Pending' | string (ReadOnly): Status of installation of this instance of the extension.
* **lastModifiedTime**: string (ReadOnly): DateLiteral (per ISO8601) noting the time the resource was modified by the client (user).
* **lastStatusTime**: string (ReadOnly): DateLiteral (per ISO8601) noting the time of last status from the agent.
* **releaseTrain**: string: ReleaseTrain this extension instance participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'.
* **scope**: [Scope](#scope): Scope at which the extension instance is installed.
* **statuses**: [ExtensionStatus](#extensionstatus)[]: Status from this instance of the extension.
* **version**: string: Version of the extension for this extension instance, if it is 'pinned' to a specific version. autoUpgradeMinorVersion must be 'false'.

## ExtensionProtectedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtensionStatus
### Properties
* **code**: string: Status code provided by the Extension
* **displayStatus**: string: Short description of status of this instance of the extension.
* **level**: 'Error' | 'Information' | 'Warning' | string: Level of the status.
* **message**: string: Detailed message of the status from the Extension instance.
* **time**: string: DateLiteral (per ISO8601) noting the time of installation status.

## HelmOperatorProperties
### Properties
* **chartValues**: string: Values override for the operator Helm chart.
* **chartVersion**: string: Version of the operator Helm chart.

## Scope
### Properties
* **cluster**: [ScopeCluster](#scopecluster): Specifies that the scope of the extensionInstance is Cluster
* **namespace**: [ScopeNamespace](#scopenamespace): Specifies that the scope of the extensionInstance is Namespace

## ScopeCluster
### Properties
* **releaseNamespace**: string: Namespace where the extension Release must be placed, for a Cluster scoped extensionInstance.  If this namespace does not exist, it will be created

## ScopeNamespace
### Properties
* **targetNamespace**: string: Namespace where the extensionInstance will be created for an Namespace scoped extensionInstance.  If this namespace does not exist, it will be created

## SourceControlConfigurationProperties
### Properties
* **complianceStatus**: [ComplianceStatus](#compliancestatus) (ReadOnly): Compliance Status of the Configuration
* **configurationProtectedSettings**: [ConfigurationProtectedSettings](#configurationprotectedsettings): Name-value pairs of protected configuration settings for the configuration
* **enableHelmOperator**: bool: Option to enable Helm Operator for this git configuration.
* **helmOperatorProperties**: [HelmOperatorProperties](#helmoperatorproperties): Properties for Helm operator.
* **operatorInstanceName**: string: Instance name of the operator - identifying the specific configuration.
* **operatorNamespace**: string: The namespace to which this operator is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
* **operatorParams**: string: Any Parameters for the Operator instance in string format.
* **operatorScope**: 'cluster' | 'namespace' | string: Scope at which the operator will be installed.
* **operatorType**: 'Flux' | string: Type of the operator
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource provider.
* **repositoryPublicKey**: string (ReadOnly): Public Key associated with this SourceControl configuration (either generated within the cluster or provided by the user).
* **repositoryUrl**: string: Url of the SourceControl Repository.
* **sshKnownHostsContents**: string: Base64-encoded known_hosts contents containing public SSH keys required to access private Git instances

## SystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC)
* **createdBy**: string (ReadOnly): A string identifier for the identity that created the resource
* **createdByType**: string (ReadOnly): The type of identity that created the resource: user, application, managedIdentity, key
* **lastModifiedAt**: string (ReadOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (ReadOnly): A string identifier for the identity that last modified the resource
* **lastModifiedByType**: string (ReadOnly): The type of identity that last modified the resource: user, application, managedIdentity, key

