# Microsoft.KubernetesConfiguration @ 2021-03-01

## Resource Microsoft.KubernetesConfiguration/sourceControlConfigurations@2021-03-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:10_properties
* **systemData**: systemData
* **type**: 'Microsoft.KubernetesConfiguration/sourceControlConfigurations' (ReadOnly, DeployTimeConstant)

## schemas:10_properties
### Properties
* **complianceStatus**: ComplianceStatus (ReadOnly)
* **configurationProtectedSettings**: Dictionary<string,String>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HelmOperatorProperties
### Properties
* **chartValues**: string
* **chartVersion**: string

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

