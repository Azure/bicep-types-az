# Microsoft.Authorization @ 2021-07-01

## Resource Microsoft.Authorization/policyExemptions@2021-07-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyExemptionProperties](#policyexemptionproperties) (Required): The policy exemption properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Authorization/policyExemptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/policyPricings@2021-07-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyPricingProperties](#policypricingproperties) (Required): The policy pricing properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Authorization/policyPricings' (ReadOnly, DeployTimeConstant): The resource type

## PolicyExemptionProperties
### Properties
* **description**: string: The description of the policy exemption.
* **displayName**: string: The display name of the policy exemption.
* **exemptionCategory**: 'Mitigated' | 'Waiver' (Required): The policy exemption category. Possible values are Waiver and Mitigated.
* **expiresOn**: string: The expiration date and time (in UTC ISO 8601 format yyyy-MM-ddTHH:mm:ssZ) of the policy exemption.
* **metadata**: any: Any object
* **policyAssignmentId**: string (Required): The ID of the policy assignment that is being exempted.
* **policyDefinitionReferenceIds**: string[]: The policy definition reference ID list when the associated policy assignment is an assignment of a policy set definition.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## PolicyPricingProperties
### Properties
* **pricingTier**: 'Advanced' | 'Defender' (Required): The policy pricing tier. Possible values are Advanced and Defender.
* **provisioningState**: 'Accepted' | 'Deleting' | 'Succeeded' (ReadOnly): The provisioning state of the policy pricing resource.

