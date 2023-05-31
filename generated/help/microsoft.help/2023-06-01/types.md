# Microsoft.Help @ 2023-06-01

## Resource Microsoft.Help/diagnostics@2023-06-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticResourceProperties](#diagnosticresourceproperties): Diagnostic Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Help/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

## Diagnostic
### Properties
* **error**: [Error](#error): Error definition.
* **insights**: [Insight](#insight)[]: The problems (if any) detected by this insight.
* **solutionId**: string: Solution Id
* **status**: 'Failed' | 'MissingInputs' | 'Running' | 'Succeeded' | 'Timeout' | string: Denotes the status of the diagnostic resource.

## DiagnosticInvocation
### Properties
* **additionalParameters**: [DiagnosticInvocationAdditionalParameters](#diagnosticinvocationadditionalparameters): Additional parameters required to invoke the solutionId.
* **solutionId**: string: Solution Id to invoke.

## DiagnosticInvocationAdditionalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DiagnosticResourceProperties
### Properties
* **acceptedAt**: string (ReadOnly): Diagnostic Request Accepted time.
* **diagnostics**: [Diagnostic](#diagnostic)[] (ReadOnly): Array of Diagnostics.
* **globalParameters**: [DiagnosticResourcePropertiesGlobalParameters](#diagnosticresourcepropertiesglobalparameters): Global parameters that can be passed to all solutionIds.
* **insights**: [DiagnosticInvocation](#diagnosticinvocation)[]: SolutionIds that are needed to be invoked.
* **provisioningState**: 'Canceled' | 'Failed' | 'PartialComplete' | 'Succeeded' | string (ReadOnly): Status of diagnostic provisioning.

## DiagnosticResourcePropertiesGlobalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Error
### Properties
* **code**: string (ReadOnly): Service specific error code which serves as the substatus for the HTTP error code.
* **details**: [Error](#error)[]: An array of additional nested error response info objects, as described by this contract.
* **message**: string (ReadOnly): Description of the error.
* **type**: string (ReadOnly): Service specific error type which serves as additional context for the error herein.

## Insight
### Properties
* **id**: string: Article id.
* **importanceLevel**: 'Critical' | 'Information' | 'Warning' | string: Importance level of the insight.
* **results**: string: Detailed result content.
* **title**: string: This insight's title.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

