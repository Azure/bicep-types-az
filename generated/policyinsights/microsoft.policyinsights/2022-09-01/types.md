# Microsoft.PolicyInsights @ 2022-09-01

## Resource Microsoft.PolicyInsights/attestations@2022-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttestationProperties](#attestationproperties) (Required): Properties for the attestation.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PolicyInsights/attestations' (ReadOnly, DeployTimeConstant): The resource type

## AttestationEvidence
### Properties
* **description**: string: The description for this piece of evidence.
* **sourceUri**: string: The URI location of the evidence.

## AttestationProperties
### Properties
* **assessmentDate**: string: The time the evidence was assessed
* **comments**: string: Comments describing why this attestation was created.
* **complianceState**: 'Compliant' | 'NonCompliant' | 'Unknown' | string: The compliance state that should be set on the resource.
* **evidence**: [AttestationEvidence](#attestationevidence)[]: The evidence supporting the compliance state set in this attestation.
* **expiresOn**: string: The time the compliance state should expire.
* **lastComplianceStateChangeAt**: string (ReadOnly): The time the compliance state was last changed in this attestation.
* **metadata**: any: Additional metadata for this attestation
* **owner**: string: The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID.
* **policyAssignmentId**: string (Required): The resource ID of the policy assignment that the attestation is setting the state for.
* **policyDefinitionReferenceId**: string: The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition.
* **provisioningState**: string (ReadOnly): The status of the attestation.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

