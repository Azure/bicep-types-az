# Microsoft.PolicyInsights @ 2019-07-01

## Resource Microsoft.PolicyInsights/remediations@2019-07-01
* **Valid Scope(s)**: Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RemediationProperties](#remediationproperties)
* **type**: 'Microsoft.PolicyInsights/remediations' (ReadOnly, DeployTimeConstant)

## RemediationProperties
### Properties
* **createdOn**: string (ReadOnly)
* **deploymentStatus**: [RemediationDeploymentSummary](#remediationdeploymentsummary) (ReadOnly)
* **filters**: [RemediationFilters](#remediationfilters)
* **lastUpdatedOn**: string (ReadOnly)
* **policyAssignmentId**: string
* **policyDefinitionReferenceId**: string
* **provisioningState**: string (ReadOnly)
* **resourceDiscoveryMode**: 'ExistingNonCompliant' | 'ReEvaluateCompliance'

## RemediationDeploymentSummary
### Properties
* **failedDeployments**: int (ReadOnly)
* **successfulDeployments**: int (ReadOnly)
* **totalDeployments**: int (ReadOnly)

## RemediationFilters
### Properties
* **locations**: string[]

