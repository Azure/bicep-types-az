# Microsoft.Features @ 2021-07-01

## Resource Microsoft.Features/featureProviders/subscriptionFeatureRegistrations@2021-07-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionFeatureRegistrationProperties](#subscriptionfeatureregistrationproperties)
* **type**: 'Microsoft.Features/featureProviders/subscriptionFeatureRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## AuthorizationProfile
### Properties
* **approvedTime**: string (ReadOnly): The approved time
* **approver**: string (ReadOnly): The approver
* **requestedTime**: string (ReadOnly): The requested time
* **requester**: string (ReadOnly): The requester
* **requesterObjectId**: string (ReadOnly): The requester object id

## SubscriptionFeatureRegistrationProperties
### Properties
* **approvalType**: 'ApprovalRequired' | 'AutoApproval' | 'NotSpecified' | string (ReadOnly): The feature approval type.
* **authorizationProfile**: [AuthorizationProfile](#authorizationprofile): Authorization Profile
* **description**: string {maxLength: 1000}: The feature description.
* **displayName**: string (ReadOnly): The featureDisplayName.
* **documentationLink**: string {maxLength: 1000} (ReadOnly): The feature documentation link.
* **featureName**: string (ReadOnly): The featureName.
* **metadata**: [SubscriptionFeatureRegistrationPropertiesMetadata](#subscriptionfeatureregistrationpropertiesmetadata): Key-value pairs for meta data.
* **providerNamespace**: string (ReadOnly): The providerNamespace.
* **registrationDate**: string (ReadOnly): The feature registration date.
* **releaseDate**: string (ReadOnly): The feature release date.
* **shouldFeatureDisplayInPortal**: bool: Indicates whether feature should be displayed in Portal.
* **state**: 'NotRegistered' | 'NotSpecified' | 'Pending' | 'Registered' | 'Registering' | 'Unregistered' | 'Unregistering' | string: The state.
* **subscriptionId**: string (ReadOnly): The subscriptionId.
* **tenantId**: string (ReadOnly): The tenantId.

## SubscriptionFeatureRegistrationPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string {maxLength: 1000}

