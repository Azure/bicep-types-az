# Microsoft.Subscriptions.Admin @ 2015-11-01

## Resource Microsoft.Subscriptions.Admin/delegatedProviders@2015-11-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **delegatedProviderSubscriptionId**: string (ReadOnly): Parent DelegatedProvider subscription identifier.
* **displayName**: string (ReadOnly): Subscription name.
* **externalReferenceId**: string (ReadOnly): External reference identifier.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **offerId**: string (ReadOnly): Identifier of the offer under the scope of a delegated provider.
* **owner**: string (ReadOnly): Subscription owner.
* **routingResourceManagerType**: 'Admin' | 'Default' | string (ReadOnly): Routing resource manager type.
* **state**: 'Deleted' | 'Deleting' | 'Disabled' | 'Enabled' | 'NotDefined' | 'PartiallyDeleted' | 'PastDue' | 'Warned' | string (ReadOnly): Subscription state.
* **subscriptionId**: string (ReadOnly): Subscription identifier.
* **tenantId**: string (ReadOnly): Directory tenant identifier.
* **type**: 'Microsoft.Subscriptions.Admin/delegatedProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscriptions.Admin/delegatedProviders/offers@2015-11-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DelegatedProviderOfferProperties](#delegatedproviderofferproperties) (ReadOnly): Properties for an delegated provider.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Subscriptions.Admin/delegatedProviders/offers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscriptions.Admin/directoryTenants@2015-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DirectoryTenantProperties](#directorytenantproperties): Directory tenant.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Subscriptions.Admin/directoryTenants' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscriptions.Admin/locations@2015-11-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **displayName**: string: Display name of the location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **latitude**: string: Latitude of the location.
* **longitude**: string: Longitude of the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Subscriptions.Admin/locations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscriptions.Admin/locations/quotas@2015-11-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties) (ReadOnly): Quotas for DelegatedProviders.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Subscriptions.Admin/locations/quotas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscriptions.Admin/offers@2015-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OfferProperties](#offerproperties): Represents an offering of services against which a subscription can be created.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Subscriptions.Admin/offers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscriptions.Admin/offers/offerDelegations@2015-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OfferDelegationProperties](#offerdelegationproperties): Properties for an offer.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Subscriptions.Admin/offers/offerDelegations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscriptions.Admin/plans@2015-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PlanProperties](#planproperties): Properties of a plan.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Subscriptions.Admin/plans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscriptions.Admin/subscriptions@2015-11-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **delegatedProviderSubscriptionId**: string: Parent DelegatedProvider subscription identifier.
* **displayName**: string: Subscription name.
* **externalReferenceId**: string: External reference identifier.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **offerId**: string: Identifier of the offer under the scope of a delegated provider.
* **owner**: string: Subscription owner.
* **routingResourceManagerType**: 'Admin' | 'Default' | string: Routing resource manager type.
* **state**: 'Deleted' | 'Deleting' | 'Disabled' | 'Enabled' | 'NotDefined' | 'PartiallyDeleted' | 'PastDue' | 'Warned' | string: Subscription state.
* **subscriptionId**: string: Subscription identifier.
* **tenantId**: string: Directory tenant identifier.
* **type**: 'Microsoft.Subscriptions.Admin/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscriptions.Admin/subscriptions/acquiredPlans@2015-11-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **acquisitionId**: string: Acquisition identifier.
* **acquisitionTime**: string: Acquisition time.
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **externalReferenceId**: string: External reference identifier.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **planId**: string: Plan identifier in the tenant subscription context.
* **provisioningState**: 'Accepted' | 'Failed' | 'NotSpecified' | 'Succeeded' | string: State of the provisioning.
* **type**: 'Microsoft.Subscriptions.Admin/subscriptions/acquiredPlans' (ReadOnly, DeployTimeConstant): The resource type

## Function link (Microsoft.Subscriptions.Admin/offers@2015-11-01)
* **Resource**: Microsoft.Subscriptions.Admin/offers
* **ApiVersion**: 2015-11-01
* **Input**: [PlanLinkDefinition](#planlinkdefinition)
* **Output**: [Offer](#offer)

## Function unlink (Microsoft.Subscriptions.Admin/offers@2015-11-01)
* **Resource**: Microsoft.Subscriptions.Admin/offers
* **ApiVersion**: 2015-11-01
* **Input**: [PlanLinkDefinition](#planlinkdefinition)
* **Output**: [Offer](#offer)

## AddonPlanDefinition
### Properties
* **maxAcquisitionCount**: int: Maximum number of instances that can be acquired by a single subscription. If not specified, the assumed value is 1.
* **planId**: string: Plan identifier.

## DelegatedProviderOfferProperties
### Properties
* **accessibilityState**: 'Decommissioned' | 'Private' | 'Public' | string: Offer accessibility state.
* **delegatedOfferId**: string: The delegated offer identifier.
* **description**: string: Description of offer.
* **displayName**: string: Display name of offer.
* **externalReferenceId**: string: External reference identifier.
* **subscriptionCount**: int: Current subscription count.

## DirectoryTenantProperties
### Properties
* **tenantId**: string: Tenant unique identifier.

## Offer
### Properties
* **id**: string (ReadOnly): URI of the resource.
* **location**: string: Location of the resource
* **name**: string (ReadOnly): Name of the resource.
* **properties**: [OfferProperties](#offerproperties): Represents an offering of services against which a subscription can be created.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: string (ReadOnly): Type of resource.

## OfferDelegationProperties
### Properties
* **subscriptionId**: string: Identifier of the subscription receiving the delegated offer.

## OfferProperties
### Properties
* **addonPlans**: [AddonPlanDefinition](#addonplandefinition)[]: References to add-on plans that a tenant can optionally acquire as a part of the offer.
* **basePlanIds**: string[]: Identifiers of the base plans that become available to the tenant immediately when a tenant subscribes to the offer.
* **description**: string: Description of offer.
* **displayName**: string: Display name of offer.
* **externalReferenceId**: string: External reference identifier.
* **maxSubscriptionsPerAccount**: int: Maximum subscriptions per account.
* **name**: string: Name of the Offer.
* **state**: 'Decommissioned' | 'Private' | 'Public' | string: Offer accessibility state.
* **subscriptionCount**: int: Current subscription count.

## PlanLinkDefinition
### Properties
* **maxAcquisitionCount**: int: The maximum acquisition count by subscribers
* **planLinkType**: 'Addon' | 'Base' | 'None' | string: Type of the plan link.
* **planName**: string: Name of the plan.

## PlanProperties
### Properties
* **description**: string: Description of the plan.
* **displayName**: string: Display name.
* **externalReferenceId**: string: External reference identifier.
* **name**: string: Name of the plan.
* **quotaIds**: string[]: Quota identifiers under the plan.
* **skuIds**: string[]: SKU identifiers.
* **subscriptionCount**: int: Subscription count.

## QuotaProperties
### Properties
* **allowCustomPortalBranding**: bool: Value indicating whether custom portal branding is allowed.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

