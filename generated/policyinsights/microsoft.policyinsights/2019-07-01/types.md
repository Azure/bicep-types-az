# Microsoft.PolicyInsights @ 2019-07-01

## Resource Microsoft.PolicyInsights/remediations@2019-07-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RemediationProperties](#remediationproperties): The remediation properties.
* **type**: 'Microsoft.PolicyInsights/remediations' (ReadOnly, DeployTimeConstant): The resource type

## RemediationProperties
### Properties
* **createdOn**: string (ReadOnly): The time at which the remediation was created.
* **deploymentStatus**: [RemediationDeploymentSummary](#remediationdeploymentsummary) (ReadOnly): The deployment status summary for all deployments created by the remediation.
* **filters**: [RemediationFilters](#remediationfilters): The filters that will be applied to determine which resources to remediate.
* **lastUpdatedOn**: string (ReadOnly): The time at which the remediation was last updated.
* **policyAssignmentId**: string: The resource ID of the policy assignment that should be remediated.
* **policyDefinitionReferenceId**: string: The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
* **provisioningState**: string (ReadOnly): The status of the remediation.
* **resourceDiscoveryMode**: 'ExistingNonCompliant' | 'ReEvaluateCompliance': The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified. Possible values include: 'ExistingNonCompliant', 'ReEvaluateCompliance'

## RemediationDeploymentSummary
### Properties
* **failedDeployments**: int (ReadOnly): The number of deployments required by the remediation that have failed.
* **successfulDeployments**: int (ReadOnly): The number of deployments required by the remediation that have succeeded.
* **totalDeployments**: int (ReadOnly): The number of deployments required by the remediation.

## RemediationFilters
### Properties
* **locations**: string[]: The resource locations that will be remediated.

