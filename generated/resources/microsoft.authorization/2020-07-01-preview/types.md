# Microsoft.Authorization @ 2020-07-01-preview

## Resource Microsoft.Authorization/policyExemptions@2020-07-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyExemptionProperties](#policyexemptionproperties) (Required): Properties for the policy exemption.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/policyExemptions' (ReadOnly, DeployTimeConstant): The resource type

## PolicyExemptionProperties
### Properties
* **description**: string: The description of the policy exemption.
* **displayName**: string: The display name of the policy exemption.
* **exemptionCategory**: 'Mitigated' | 'Waiver' | string (Required): The policy exemption category. Possible values are Waiver and Mitigated.
* **expiresOn**: string: The expiration date and time (in UTC ISO 8601 format yyyy-MM-ddTHH:mm:ssZ) of the policy exemption.
* **metadata**: any: The policy exemption metadata. Metadata is an open ended object and is typically a collection of key value pairs.
* **policyAssignmentId**: string (Required): The ID of the policy assignment that is being exempted.
* **policyDefinitionReferenceIds**: string[]: The policy definition reference ID list when the associated policy assignment is an assignment of a policy set definition.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

