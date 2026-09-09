# Microsoft.Resources @ 2022-06-01

## Function validateResources (Microsoft.Resources@2022-06-01)
* **Resource**: Microsoft.Resources
* **ApiVersion**: 2022-06-01
* **Input**: [ResourceValidationRequest](#resourcevalidationrequest)
* **Output**: [ResourceValidationResponse](#resourcevalidationresponse)

## ResourceValidationRequest
### Properties
* **location**: string: The optional location for the resources being validated
* **performPreflightWithoutRbacWriteCheck**: bool: If true, the validation will be performed without checking RBAC write permissions.
* **provider**: string (Required): The resource provider namespace of the resources being validated
* **resources**: [ResourceValidationRequestResource](#resourcevalidationrequestresource)[] (Required): The list of resources to validate. Each resource in the list must have the same namespace, type, and location.
The namespace and type on each resource must match the corresponding values in the top-level request.
The location on each resource must match the top-level location in the request if specified.
* **scope**: string (Required): The scope of the resources being validated
* **type**: string (Required): The type of the resources being validated
* **validationType**: 'ArmFull' | 'ArmPartial' | string: The type of resource validation to perform

## ResourceValidationRequestResource
### Properties
* **apiVersion**: string (Required): The API version to use with this resource.
* **onlyIfNotExists**: bool: Set this to true if this resource is meant to be provisioned only if it does not exist.
### Additional Properties
* **Additional Properties Type**: any

## ResourceValidationResponse
### Properties
* **properties**: [ResourceValidationResponseProperties](#resourcevalidationresponseproperties) (Required): Details about the results of the validation

## ResourceValidationResponseProperties
### Properties
* **validatedResources**: string[] (Required): List of ARM resource IDs corresponding to the resources that were successfully validated

