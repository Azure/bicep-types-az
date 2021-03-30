# Microsoft.KubernetesConfiguration @ 2019-11-01-preview

## Resource Microsoft.KubernetesConfiguration/sourceControlConfigurations@2019-11-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:10_properties](#schemas10properties): Properties to create a Source Control Configuration resource
* **type**: 'Microsoft.KubernetesConfiguration/sourceControlConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## schemas:10_properties
### Properties
* **complianceStatus**: [ComplianceStatus](#compliancestatus) (ReadOnly): Compliance Status details
* **enableHelmOperator**: 'false' | 'true': Option to enable Helm Operator for this git configuration. Possible values include: 'true', 'false'
* **helmOperatorProperties**: [HelmOperatorProperties](#helmoperatorproperties): Properties for Helm operator.
* **operatorInstanceName**: string: Instance name of the operator - identifying the specific configuration.
* **operatorNamespace**: string: The namespace to which this operator is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
* **operatorParams**: string: Any Parameters for the Operator instance in string format.
* **operatorScope**: 'cluster' | 'namespace': Scope at which the operator will be installed. Possible values include: 'cluster', 'namespace'
* **operatorType**: 'Flux': Type of the operator. Possible values include: 'Flux'
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly): The provisioning state of the resource provider. Possible values include: 'Accepted', 'Deleting', 'Running', 'Succeeded', 'Failed'
* **repositoryPublicKey**: string (ReadOnly): Public Key associated with this SourceControl configuration (either generated within the cluster or provided by the user).
* **repositoryUrl**: string: Url of the SourceControl Repository.

## ComplianceStatus
### Properties
* **complianceState**: 'Compliant' | 'Failed' | 'Installed' | 'Noncompliant' | 'Pending' (ReadOnly): The compliance state of the configuration. Possible values include: 'Pending', 'Compliant', 'Noncompliant', 'Installed', 'Failed'
* **lastConfigApplied**: string: Datetime the configuration was last applied.
* **message**: string: Message from when the configuration was applied.
* **messageLevel**: 'Error' | 'Information' | 'Warning': Level of the message. Possible values include: 'Error', 'Warning', 'Information'

## HelmOperatorProperties
### Properties
* **chartValues**: string: Values override for the operator Helm chart.
* **chartVersion**: string: Version of the operator Helm chart.

