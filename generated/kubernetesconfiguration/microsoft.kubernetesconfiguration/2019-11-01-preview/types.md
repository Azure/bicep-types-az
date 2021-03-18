# Microsoft.KubernetesConfiguration @ 2019-11-01-preview

## Resource Microsoft.KubernetesConfiguration/sourceControlConfigurations@2019-11-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SourceControlConfigurationProperties](#sourcecontrolconfigurationproperties)
* **type**: 'Microsoft.KubernetesConfiguration/sourceControlConfigurations' (ReadOnly, DeployTimeConstant)

## SourceControlConfigurationProperties
### Properties
* **complianceStatus**: [ComplianceStatus](#compliancestatus) (ReadOnly)
* **enableHelmOperator**: 'false' | 'true'
* **helmOperatorProperties**: [HelmOperatorProperties](#helmoperatorproperties)
* **operatorInstanceName**: string
* **operatorNamespace**: string
* **operatorParams**: string
* **operatorScope**: 'cluster' | 'namespace'
* **operatorType**: 'Flux'
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **repositoryPublicKey**: string (ReadOnly)
* **repositoryUrl**: string

## ComplianceStatus
### Properties
* **complianceState**: 'Compliant' | 'Failed' | 'Installed' | 'Noncompliant' | 'Pending' (ReadOnly)
* **lastConfigApplied**: string
* **message**: string
* **messageLevel**: 'Error' | 'Information' | 'Warning'

## HelmOperatorProperties
### Properties
* **chartValues**: string
* **chartVersion**: string

