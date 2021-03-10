# Microsoft.PolicyInsights @ 2018-07-01-preview

## Resource Microsoft.PolicyInsights/remediations@2018-07-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RemediationProperties](#remediationproperties)
* **type**: 'Microsoft.PolicyInsights/remediations' (ReadOnly, DeployTimeConstant)

## RemediationProperties
### Properties
* **createdOn**: string (ReadOnly)
* **deploymentStatus**: [RemediationDeploymentSummary](#remediationdeploymentsummary)
* **filters**: [RemediationFilters](#remediationfilters)
* **lastUpdatedOn**: string (ReadOnly)
* **policyAssignmentId**: string
* **policyDefinitionReferenceId**: string
* **provisioningState**: string (ReadOnly)

## RemediationDeploymentSummary
### Properties
* **failedDeployments**: int
* **successfulDeployments**: int
* **totalDeployments**: int

## RemediationFilters
### Properties
* **locations**: string[]

