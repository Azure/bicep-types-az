# Microsoft.KubernetesConfiguration @ 2021-05-01-preview

## Resource Microsoft.KubernetesConfiguration/extensions@2021-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionProperties](#extensionproperties): Properties of an Extension resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.KubernetesConfiguration/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.KubernetesConfiguration/sourceControlConfigurations@2021-05-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SourceControlConfigurationProperties](#sourcecontrolconfigurationproperties): Properties to create a Source Control Configuration resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.KubernetesConfiguration/sourceControlConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## ExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Flag to note if this extension participates in auto upgrade of minor version, or not.
* **configurationProtectedSettings**: [ExtensionPropertiesConfigurationProtectedSettings](#extensionpropertiesconfigurationprotectedsettings): Configuration settings that are sensitive, as name-value pairs for configuring this extension.
* **configurationSettings**: [ExtensionPropertiesConfigurationSettings](#extensionpropertiesconfigurationsettings): Configuration settings, as name-value pairs for configuring this extension.
* **customLocationSettings**: [ExtensionPropertiesCustomLocationSettings](#extensionpropertiescustomlocationsettings) (ReadOnly): Custom Location settings properties.
* **errorInfo**: [ErrorDetail](#errordetail) (ReadOnly): The error detail.
* **extensionType**: string: Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher.
* **packageUri**: string (ReadOnly): Uri of the Helm package
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the extension resource.
* **releaseTrain**: string: ReleaseTrain this extension participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'.
* **scope**: [Scope](#scope): Scope of the extension. It can be either Cluster or Namespace; but not both.
* **statuses**: [ExtensionStatus](#extensionstatus)[]: Status from this extension.
* **version**: string: Version of the extension for this extension, if it is 'pinned' to a specific version. autoUpgradeMinorVersion must be 'false'.

## ExtensionPropertiesConfigurationProtectedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtensionPropertiesConfigurationSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtensionPropertiesCustomLocationSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): Any object
* **type**: string (ReadOnly): The additional info type.

## Scope
### Properties
* **cluster**: [ScopeCluster](#scopecluster): Specifies that the scope of the extension is Cluster
* **namespace**: [ScopeNamespace](#scopenamespace): Specifies that the scope of the extension is Namespace

## ScopeCluster
### Properties
* **releaseNamespace**: string: Namespace where the extension Release must be placed, for a Cluster scoped extension.  If this namespace does not exist, it will be created

## ScopeNamespace
### Properties
* **targetNamespace**: string: Namespace where the extension will be created for an Namespace scoped extension.  If this namespace does not exist, it will be created

## ExtensionStatus
### Properties
* **code**: string: Status code provided by the Extension
* **displayStatus**: string: Short description of status of the extension.
* **level**: 'Error' | 'Information' | 'Warning': Level of the status.
* **message**: string: Detailed message of the status from the Extension.
* **time**: string: DateLiteral (per ISO8601) noting the time of installation status.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## SourceControlConfigurationProperties
### Properties
* **complianceStatus**: [ComplianceStatus](#compliancestatus) (ReadOnly): Compliance Status details
* **configurationProtectedSettings**: [ConfigurationProtectedSettings](#configurationprotectedsettings): Name-value pairs of protected configuration settings for the configuration
* **enableHelmOperator**: bool: Option to enable Helm Operator for this git configuration.
* **helmOperatorProperties**: [HelmOperatorProperties](#helmoperatorproperties): Properties for Helm operator.
* **operatorInstanceName**: string: Instance name of the operator - identifying the specific configuration.
* **operatorNamespace**: string: The namespace to which this operator is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
* **operatorParams**: string: Any Parameters for the Operator instance in string format.
* **operatorScope**: 'cluster' | 'namespace': Scope at which the operator will be installed.
* **operatorType**: 'Flux': Type of the operator
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly): The provisioning state of the resource provider.
* **repositoryPublicKey**: string (ReadOnly): Public Key associated with this SourceControl configuration (either generated within the cluster or provided by the user).
* **repositoryUrl**: string: Url of the SourceControl Repository.
* **sshKnownHostsContents**: string: Base64-encoded known_hosts contents containing public SSH keys required to access private Git instances

## ComplianceStatus
### Properties
* **complianceState**: 'Compliant' | 'Failed' | 'Installed' | 'Noncompliant' | 'Pending' (ReadOnly): The compliance state of the configuration.
* **lastConfigApplied**: string: Datetime the configuration was last applied.
* **message**: string: Message from when the configuration was applied.
* **messageLevel**: 'Error' | 'Information' | 'Warning': Level of the message.

## ConfigurationProtectedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HelmOperatorProperties
### Properties
* **chartValues**: string: Values override for the operator Helm chart.
* **chartVersion**: string: Version of the operator Helm chart.

