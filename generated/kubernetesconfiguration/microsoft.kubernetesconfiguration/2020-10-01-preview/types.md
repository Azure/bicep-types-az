# Microsoft.KubernetesConfiguration @ 2020-10-01-preview

## Resource Microsoft.KubernetesConfiguration/sourceControlConfigurations@2020-10-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:13_properties](#schemas13properties)
* **systemData**: [SystemData](#systemdata)
* **type**: 'Microsoft.KubernetesConfiguration/sourceControlConfigurations' (ReadOnly, DeployTimeConstant)

## schemas:13_properties
### Properties
* **complianceStatus**: [ComplianceStatus](#compliancestatus) (ReadOnly)
* **configurationProtectedSettings**: [Dictionary<string,String>](#dictionarystringstring)
* **enableHelmOperator**: bool
* **helmOperatorProperties**: [HelmOperatorProperties](#helmoperatorproperties)
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

## SystemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: string (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: string (ReadOnly)

