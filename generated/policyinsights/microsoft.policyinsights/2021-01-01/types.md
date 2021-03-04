# Microsoft.PolicyInsights @ 2021-01-01

## Resource Microsoft.PolicyInsights/attestations@2021-01-01
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AttestationProperties (Required)
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.PolicyInsights/attestations' (ReadOnly, DeployTimeConstant)

## AttestationProperties
### Properties
* **comments**: string
* **complianceState**: 'Compliant' | 'NonCompliant' | 'Unknown'
* **evidence**: AttestationEvidence[]
* **expiresOn**: string
* **lastComplianceStateChangeAt**: string (ReadOnly)
* **owner**: string
* **policyAssignmentId**: string (Required)
* **policyDefinitionReferenceId**: string
* **provisioningState**: string (ReadOnly)

## AttestationEvidence
### Properties
* **description**: string
* **sourceUri**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

