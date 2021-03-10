# Microsoft.Authorization @ 2020-07-01-preview

## Resource Microsoft.Authorization/policyExemptions@2020-07-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyExemptionProperties](#policyexemptionproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Authorization/policyExemptions' (ReadOnly, DeployTimeConstant)

## PolicyExemptionProperties
### Properties
* **description**: string
* **displayName**: string
* **exemptionCategory**: 'Mitigated' | 'Waiver' (Required)
* **expiresOn**: string
* **metadata**: any
* **policyAssignmentId**: string (Required)
* **policyDefinitionReferenceIds**: string[]

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

