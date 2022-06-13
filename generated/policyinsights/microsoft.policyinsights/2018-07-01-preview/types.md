# Microsoft.PolicyInsights @ 2018-07-01-preview

## Resource Microsoft.PolicyInsights/remediations@2018-07-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RemediationProperties](#remediationproperties): Properties for the remediation.
* **type**: 'Microsoft.PolicyInsights/remediations' (ReadOnly, DeployTimeConstant): The resource type

## Function listDeployments (Microsoft.PolicyInsights/remediations@2018-07-01-preview)
* **Resource**: Microsoft.PolicyInsights/remediations
* **ApiVersion**: 2018-07-01-preview
* **Output**: [RemediationDeploymentsListResult](#remediationdeploymentslistresult)

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
* **failedDeployments**: int: The number of deployments required by the remediation that have failed.
* **successfulDeployments**: int: The number of deployments required by the remediation that have succeeded.
* **totalDeployments**: int: The number of deployments required by the remediation.

## RemediationFilters
### Properties
* **locations**: string[]: The resource locations that will be remediated.

## RemediationProperties
### Properties
* **createdOn**: string (ReadOnly): The time at which the remediation was created.
* **deploymentStatus**: [RemediationDeploymentSummary](#remediationdeploymentsummary): The deployment status summary for all deployments created by the remediation.
* **filters**: [RemediationFilters](#remediationfilters): The filters that will be applied to determine which resources to remediate.
* **lastUpdatedOn**: string (ReadOnly): The time at which the remediation was last updated.
* **policyAssignmentId**: string: The resource ID of the policy assignment that should be remediated.
* **policyDefinitionReferenceId**: string: The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
* **provisioningState**: string (ReadOnly): The status of the remediation.

## TypedErrorInfo
### Properties
* **info**: any (ReadOnly): The scenario specific error details.
* **type**: string (ReadOnly): The type of included error details.

