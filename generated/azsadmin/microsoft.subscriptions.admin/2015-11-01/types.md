# Microsoft.Subscriptions.Admin @ 2015-11-01

## Resource Microsoft.Subscriptions.Admin/directoryTenants@2015-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DirectoryTenantProperties
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.Subscriptions.Admin/directoryTenants' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Subscriptions.Admin/locations@2015-11-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **displayName**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **latitude**: string
* **longitude**: string
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Subscriptions.Admin/locations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Subscriptions.Admin/offers@2015-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: OfferProperties
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.Subscriptions.Admin/offers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Subscriptions.Admin/offers/offerDelegations@2015-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: OfferDelegationProperties
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.Subscriptions.Admin/offers/offerDelegations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Subscriptions.Admin/plans@2015-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PlanProperties
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.Subscriptions.Admin/plans' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Subscriptions.Admin/subscriptions@2015-11-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **delegatedProviderSubscriptionId**: string
* **dependsOn**: resourceref[] (WriteOnly)
* **displayName**: string
* **externalReferenceId**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **offerId**: string
* **owner**: string
* **routingResourceManagerType**: 'Admin' | 'Default'
* **state**: 'Deleted' | 'Deleting' | 'Disabled' | 'Enabled' | 'NotDefined' | 'PartiallyDeleted' | 'PastDue' | 'Warned'
* **subscriptionId**: string
* **tenantId**: string
* **type**: 'Microsoft.Subscriptions.Admin/subscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Subscriptions.Admin/subscriptions/acquiredPlans@2015-11-01
* **Valid Scope(s)**: Subscription
### Properties
* **acquisitionId**: string
* **acquisitionTime**: string
* **apiVersion**: '2015-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **externalReferenceId**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **planId**: string
* **provisioningState**: 'Accepted' | 'Failed' | 'NotSpecified' | 'Succeeded'
* **type**: 'Microsoft.Subscriptions.Admin/subscriptions/acquiredPlans' (ReadOnly, DeployTimeConstant)

## DirectoryTenantProperties
### Properties
* **tenantId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OfferProperties
### Properties
* **addonPlans**: AddonPlanDefinition[]
* **basePlanIds**: string[]
* **description**: string
* **displayName**: string
* **externalReferenceId**: string
* **maxSubscriptionsPerAccount**: int
* **name**: string
* **state**: 'Decommissioned' | 'Private' | 'Public'
* **subscriptionCount**: int

## AddonPlanDefinition
### Properties
* **maxAcquisitionCount**: int
* **planId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OfferDelegationProperties
### Properties
* **subscriptionId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PlanProperties
### Properties
* **description**: string
* **displayName**: string
* **externalReferenceId**: string
* **name**: string
* **quotaIds**: string[]
* **skuIds**: string[]
* **subscriptionCount**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

