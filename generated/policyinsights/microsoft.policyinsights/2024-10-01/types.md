# Microsoft.PolicyInsights @ 2024-10-01

## Resource Microsoft.PolicyInsights/attestations@2024-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttestationProperties](#attestationproperties) (Required): Properties for the attestation.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PolicyInsights/attestations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PolicyInsights/remediations@2024-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RemediationProperties](#remediationproperties): Properties for the remediation.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PolicyInsights/remediations' (ReadOnly, DeployTimeConstant): The resource type

## Function listDeployments (Microsoft.PolicyInsights/remediations@2024-10-01)
* **Resource**: Microsoft.PolicyInsights/remediations
* **ApiVersion**: 2024-10-01
* **Output**: [RemediationDeploymentsListResult](#remediationdeploymentslistresult)

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

## ErrorDefinition
### Properties
* **additionalInfo**: [TypedErrorInfo](#typederrorinfo)[] (ReadOnly): Additional scenario specific error details.
* **code**: string (ReadOnly): Service specific error code which serves as the substatus for the HTTP error code.
* **details**: [ErrorDefinition](#errordefinition)[] (ReadOnly): Internal error details.
* **message**: string (ReadOnly): Description of the error.
* **target**: string (ReadOnly): The target of the error.

## RemediationDeployment
### Properties
* **createdOn**: string (ReadOnly): The time at which the remediation was created.
* **deploymentId**: string (ReadOnly): Resource ID of the template deployment that will remediate the resource.
* **error**: [ErrorDefinition](#errordefinition) (ReadOnly): Error encountered while remediated the resource.
* **lastUpdatedOn**: string (ReadOnly): The time at which the remediation deployment was last updated.
* **remediatedResourceId**: string (ReadOnly): Resource ID of the resource that is being remediated by the deployment.
* **resourceLocation**: string (ReadOnly): Location of the resource that is being remediated.
* **status**: string (ReadOnly): Status of the remediation deployment.

## RemediationDeploymentsListResult
### Properties
* **nextLink**: string (ReadOnly): The URL to get the next set of results.
* **value**: [RemediationDeployment](#remediationdeployment)[] (ReadOnly): Array of deployments for the remediation.

## RemediationDeploymentSummary
### Properties
* **failedDeployments**: int (ReadOnly): The number of deployments required by the remediation that have failed.
* **successfulDeployments**: int (ReadOnly): The number of deployments required by the remediation that have succeeded.
* **totalDeployments**: int (ReadOnly): The number of deployments required by the remediation.

## RemediationFilters
### Properties
* **locations**: string[]: The resource locations that will be remediated.
* **resourceIds**: string[]: The IDs of the resources that will be remediated. Can specify at most 100 IDs. This filter cannot be used when ReEvaluateCompliance is set to ReEvaluateCompliance, and cannot be empty if provided.

## RemediationProperties
### Properties
* **correlationId**: string (ReadOnly): The remediation correlation Id. Can be used to find events related to the remediation in the activity log.
* **createdOn**: string (ReadOnly): The time at which the remediation was created.
* **deploymentStatus**: [RemediationDeploymentSummary](#remediationdeploymentsummary) (ReadOnly): The deployment status summary for all deployments created by the remediation.
* **failureThreshold**: [RemediationPropertiesFailureThreshold](#remediationpropertiesfailurethreshold): The remediation failure threshold settings
* **filters**: [RemediationFilters](#remediationfilters): The filters that will be applied to determine which resources to remediate.
* **lastUpdatedOn**: string (ReadOnly): The time at which the remediation was last updated.
* **parallelDeployments**: int: Determines how many resources to remediate at any given time. Can be used to increase or reduce the pace of the remediation. If not provided, the default parallel deployments value is used.
* **policyAssignmentId**: string: The resource ID of the policy assignment that should be remediated.
* **policyDefinitionReferenceId**: string: The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
* **provisioningState**: string (ReadOnly): The status of the remediation. This refers to the entire remediation task, not individual deployments. Allowed values are Evaluating, Canceled, Cancelling, Failed, Complete, or Succeeded.
* **resourceCount**: int: Determines the max number of resources that can be remediated by the remediation job. If not provided, the default resource count is used.
* **resourceDiscoveryMode**: 'ExistingNonCompliant' | 'ReEvaluateCompliance' | string: The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
* **statusMessage**: string (ReadOnly): The remediation status message. Provides additional details regarding the state of the remediation.

## RemediationPropertiesFailureThreshold
### Properties
* **percentage**: int: A number between 0.0 to 1.0 representing the percentage failure threshold. The remediation will fail if the percentage of failed remediation operations (i.e. failed deployments) exceeds this threshold.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TypedErrorInfo
### Properties
* **info**: any (ReadOnly): The scenario specific error details.
* **type**: string (ReadOnly): The type of included error details.

