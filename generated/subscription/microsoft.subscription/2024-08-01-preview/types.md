# Microsoft.Subscription @ 2024-08-01-preview

## Resource Microsoft.Subscription/aliases@2024-08-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PutAliasRequestPropertiesOrSubscriptionAliasResponseProperties](#putaliasrequestpropertiesorsubscriptionaliasresponseproperties): Put alias request properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Subscription/aliases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscription/changeTenantRequest@2024-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [TargetDirectoryRequestPropertiesOrTargetDirectoryResultProperties](#targetdirectoryrequestpropertiesortargetdirectoryresultproperties): Target Directory request properties.
* **type**: 'Microsoft.Subscription/changeTenantRequest' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscription/policies@2024-08-01-preview
* **Valid Scope(s)**: Tenant, Extension (ReadOnly)
### Properties
* **apiVersion**: '2024-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **blockSubscriptionsIntoTenant**: bool (WriteOnly): Blocks the entering of subscriptions into user's tenant.
* **blockSubscriptionsLeavingTenant**: bool (WriteOnly): Blocks the leaving of subscriptions from user's tenant.
* **exemptedPrincipals**: (string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"})[] (WriteOnly): List of user objectIds that are exempted from the set subscription tenant policies for the user's tenant.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [TenantPolicy](#tenantpolicy) (ReadOnly): Tenant policy properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Subscription/policies' (ReadOnly, DeployTimeConstant): The resource type

## PutAliasRequestAdditionalProperties
### Properties
* **managementGroupId**: string: Management group Id for the subscription.
* **subscriptionOwnerId**: string: Owner Id of the subscription
* **subscriptionTenantId**: string: Tenant Id of the subscription
* **tags**: [PutAliasRequestAdditionalPropertiesTags](#putaliasrequestadditionalpropertiestags): Tags for the subscription

## PutAliasRequestAdditionalPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PutAliasRequestPropertiesOrSubscriptionAliasResponseProperties
### Properties
* **acceptOwnershipState**: 'Completed' | 'Expired' | 'Pending' | string (ReadOnly): The accept ownership state of the resource.
* **acceptOwnershipUrl**: string (ReadOnly): Url to accept ownership of the subscription.
* **additionalProperties**: [PutAliasRequestAdditionalProperties](#putaliasrequestadditionalproperties) (WriteOnly): Put alias request additional properties.
* **billingScope**: string: Billing scope of the subscription.
For CustomerLed and FieldLed - /billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}
For PartnerLed - /billingAccounts/{billingAccountName}/customers/{customerName}
For Legacy EA - /billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}
* **createdTime**: string (ReadOnly): Created Time
* **displayName**: string: The friendly name of the subscription.
* **managementGroupId**: string (ReadOnly): The Management Group Id.
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **resellerId**: string: Reseller Id
* **subscriptionId**: string: This parameter can be used to create alias for existing subscription Id
* **subscriptionOwnerId**: string (ReadOnly): Owner Id of the subscription
* **tags**: [SubscriptionAliasResponsePropertiesTags](#subscriptionaliasresponsepropertiestags) (ReadOnly): Tags for the subscription
* **workload**: 'DevTest' | 'Production' | string: The workload type of the subscription. It can be either Production or DevTest.

## SubscriptionAliasResponsePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetDirectoryRequestPropertiesOrTargetDirectoryResultProperties
### Properties
* **destinationOwnerId**: string: The destination OwnerId, can be object id or email address
* **destinationTenantId**: string: The destination Tenant id where subscription needs to be accepted
* **expiresOn**: string (ReadOnly): Subscription Initiate Request Expiry time
* **status**: string (ReadOnly): Subscription Status.

## TenantPolicy
### Properties
* **blockSubscriptionsIntoTenant**: bool: Blocks the entering of subscriptions into user's tenant.
* **blockSubscriptionsLeavingTenant**: bool: Blocks the leaving of subscriptions from user's tenant.
* **exemptedPrincipals**: (string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"})[]: List of user objectIds that are exempted from the set subscription tenant policies for the user's tenant.
* **policyId**: string (ReadOnly): Policy Id.

