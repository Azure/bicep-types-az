# Microsoft.KubernetesConfiguration @ 2020-10-01-preview

## Resource Microsoft.KubernetesConfiguration/sourceControlConfigurations@2020-10-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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

## ConfigurationProtectedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HelmOperatorProperties
### Properties
* **chartValues**: string: Values override for the operator Helm chart.
* **chartVersion**: string: Version of the operator Helm chart.

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

