# Microsoft.KubernetesConfiguration @ 2021-03-01

## Resource Microsoft.KubernetesConfiguration/sourceControlConfigurations@2021-03-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SourceControlConfigurationProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.KubernetesConfiguration/sourceControlConfigurations' (ReadOnly, DeployTimeConstant)

## SourceControlConfigurationProperties
### Properties
* **complianceStatus**: ComplianceStatus (ReadOnly)
* **configurationProtectedSettings**: ConfigurationProtectedSettings
* **enableHelmOperator**: bool
* **helmOperatorProperties**: HelmOperatorProperties
* **operatorInstanceName**: string
* **operatorNamespace**: string
* **operatorParams**: string
* **operatorScope**: 'cluster' | 'namespace'
* **operatorType**: 'Flux'
* **provisioningState**: 'Accepted' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **repositoryPublicKey**: string (ReadOnly)
* **repositoryUrl**: string
* **sshKnownHostsContents**: string

## ComplianceStatus
### Properties
* **complianceState**: 'Compliant' | 'Failed' | 'Installed' | 'Noncompliant' | 'Pending' (ReadOnly)
* **lastConfigApplied**: string
* **message**: string
* **messageLevel**: 'Error' | 'Information' | 'Warning'

## ConfigurationProtectedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HelmOperatorProperties
### Properties
* **chartValues**: string
* **chartVersion**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

