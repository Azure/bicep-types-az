# Microsoft.PolicyInsights @ 2021-10-01

## Resource Microsoft.PolicyInsights/remediations@2021-10-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RemediationProperties](#remediationproperties): Properties for the remediation.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PolicyInsights/remediations' (ReadOnly, DeployTimeConstant): The resource type

## Function listDeployments (Microsoft.PolicyInsights/remediations@2021-10-01)
* **Resource**: Microsoft.PolicyInsights/remediations
* **ApiVersion**: 2021-10-01
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
* **failedDeployments**: int (ReadOnly): The number of deployments required by the remediation that have failed.
* **successfulDeployments**: int (ReadOnly): The number of deployments required by the remediation that have succeeded.
* **totalDeployments**: int (ReadOnly): The number of deployments required by the remediation.

## RemediationFilters
### Properties
* **locations**: string[]: The resource locations that will be remediated.

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
* **provisioningState**: string (ReadOnly): The status of the remediation.
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

