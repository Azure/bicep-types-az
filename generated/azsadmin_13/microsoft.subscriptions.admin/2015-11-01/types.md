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

## Function checkIdentityHealth (Microsoft.Subscriptions.Admin@2015-11-01)
* **Resource**: Microsoft.Subscriptions.Admin
* **ApiVersion**: 2015-11-01
* **Output**: [IdentityHealthCheckReportDefinition](#identityhealthcheckreportdefinition)

## Function checkNameAvailability (Microsoft.Subscriptions.Admin@2015-11-01)
* **Resource**: Microsoft.Subscriptions.Admin
* **ApiVersion**: 2015-11-01
* **Input**: [CheckNameAvailabilityDefinition](#checknameavailabilitydefinition)
* **Output**: [CheckNameAvailabilityResponse](#checknameavailabilityresponse)

## Function link (Microsoft.Subscriptions.Admin/offers@2015-11-01)
* **Resource**: Microsoft.Subscriptions.Admin/offers
* **ApiVersion**: 2015-11-01
* **Input**: [PlanLinkDefinition](#planlinkdefinition)
* **Output**: [Offer](#offer)

## Function moveSubscriptions (Microsoft.Subscriptions.Admin@2015-11-01)
* **Resource**: Microsoft.Subscriptions.Admin
* **ApiVersion**: 2015-11-01
* **Input**: [MoveSubscriptionsDefinition](#movesubscriptionsdefinition)
* **Output**: any

## Function restoreData (Microsoft.Subscriptions.Admin@2015-11-01)
* **Resource**: Microsoft.Subscriptions.Admin
* **ApiVersion**: 2015-11-01
* **Output**: [SubscriptionList](#subscriptionlist)

## Function unlink (Microsoft.Subscriptions.Admin/offers@2015-11-01)
* **Resource**: Microsoft.Subscriptions.Admin/offers
* **ApiVersion**: 2015-11-01
* **Input**: [PlanLinkDefinition](#planlinkdefinition)
* **Output**: [Offer](#offer)

## Function updateEncryption (Microsoft.Subscriptions.Admin@2015-11-01)
* **Resource**: Microsoft.Subscriptions.Admin
* **ApiVersion**: 2015-11-01
* **Output**: any

## Function validateMoveSubscriptions (Microsoft.Subscriptions.Admin@2015-11-01)
* **Resource**: Microsoft.Subscriptions.Admin
* **ApiVersion**: 2015-11-01
* **Input**: [MoveSubscriptionsDefinition](#movesubscriptionsdefinition)
* **Output**: any

## AddonPlanDefinition
### Properties
* **maxAcquisitionCount**: int: Maximum number of instances that can be acquired by a single subscription. If not specified, the assumed value is 1.
* **planId**: string: Plan identifier.

## ApplicationHealthReport
### Properties
* **appId**: string: The application identifier.
* **appRoleAssignments**: [AppRoleAssignmentHealthReportList](#approleassignmenthealthreportlist): List of AppRoleAssignment health reports for the application.
* **oAuth2PermissionGrants**: [OAuth2PermissionGrantHealthReportList](#oauth2permissiongranthealthreportlist): List of OAuth2PermissionGrant health reports for the application.
* **servicePrincipalObjectId**: string: The service principal identifier.
* **servicePrincipalTags**: [ServicePrincipalTagHealthReportList](#serviceprincipaltaghealthreportlist): List of ServicePrincipalTag health reports for the application.
* **status**: 'Healthy' | 'Unhealthy' | 'Unknown' | string: The roll-up health status for the application

## ApplicationHealthReportList
### Properties
* **nextLink**: string: URI to the next page.
* **value**: [ApplicationHealthReport](#applicationhealthreport)[]: A report of the health status of an identity applications.

## AppRoleAssignmentDefinition
### Properties
* **client**: string: The client identifier. This should be the application identifier of the client application.
* **resource**: string: The resource identifier. This should be the application identifier of the resource application.
* **roleId**: string: The role identifier. This should be the ID of the AppRole exposed by the resource application.

## AppRoleAssignmentHealthReport
### Properties
* **appRoleAssignment**: [AppRoleAssignmentDefinition](#approleassignmentdefinition): The permission description.
* **status**: 'Healthy' | 'Unhealthy' | 'Unknown' | string: The health status for the permission.

## AppRoleAssignmentHealthReportList
### Properties
* **nextLink**: string: URI to the next page.
* **value**: [AppRoleAssignmentHealthReport](#approleassignmenthealthreport)[]: A report of the health status of an AppRoleAssignment.

## CheckNameAvailabilityDefinition
### Properties
* **name**: string: The resource name to verify.
* **resourceType**: string: The resource type to verify.

## CheckNameAvailabilityResponse
### Properties
* **message**: string: The message explaining the reason.
* **nameAvailable**: bool: A value indicating whether the name is available.
* **reason**: 'AlreadyExists' | 'Invalid' | string: The reason for the unavailability of the name.

## DelegatedProviderOfferProperties
### Properties
* **accessibilityState**: 'Decommissioned' | 'Private' | 'Public' | string: Offer accessibility state.
* **delegatedOfferId**: string: The delegated offer identifier.
* **description**: string: Description of offer.
* **displayName**: string: Display name of offer.
* **externalReferenceId**: string: External reference identifier.
* **subscriptionCount**: int: Current subscription count.

## DirectoryTenantHealthReport
### Properties
* **applications**: [ApplicationHealthReportList](#applicationhealthreportlist): List of the application health reports.
* **status**: 'Healthy' | 'Unhealthy' | 'Unknown' | string: The roll-up health status for the directory.
* **tenantId**: string: The tenant unique identifier.
* **tenantName**: string: The directory tenant resource name.

## DirectoryTenantHealthReportList
### Properties
* **nextLink**: string: URI to the next page.
* **value**: [DirectoryTenantHealthReport](#directorytenanthealthreport)[]: Directory tenant health report.

## DirectoryTenantProperties
### Properties
* **tenantId**: string: Tenant unique identifier.

## IdentityHealthCheckReportDefinition
### Properties
* **directoryTenants**: [DirectoryTenantHealthReportList](#directorytenanthealthreportlist): List of directory tenant health reports.
* **reportEndTimeUtc**: string: End time of the report.
* **reportStartTimeUtc**: string: Start time of the report.
* **status**: 'Healthy' | 'Unhealthy' | 'Unknown' | string: The roll-up health status for the directory.

## MoveSubscriptionsDefinition
### Properties
* **resources**: string[] (Required): A collection of subscriptions to move to the target delegated provider offer.
* **targetDelegatedProviderOffer**: string: The delegated provider offer identifier (from the Admin context) that the subscriptions to be moved to.

## OAuth2PermissionGrantDefinition
### Properties
* **client**: string: The client identifier. This should be the application identifier of the client application.
* **resource**: string: The resource identifier. This should be the application identifier of the resource application.
* **scope**: string: The scope identifier. This should be the scope value of the OAUTH2PERMISSION exposed by the resource application.

## OAuth2PermissionGrantHealthReport
### Properties
* **oAuth2PermissionGrant**: [OAuth2PermissionGrantDefinition](#oauth2permissiongrantdefinition): The permission description.
* **status**: 'Healthy' | 'Unhealthy' | 'Unknown' | string: The health status for the permission.

## OAuth2PermissionGrantHealthReportList
### Properties
* **nextLink**: string: URI to the next page.
* **value**: [OAuth2PermissionGrantHealthReport](#oauth2permissiongranthealthreport)[]: A report of the health status of an OAuth2PermissionGrant.

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

## ServicePrincipalTagHealthReport
### Properties
* **servicePrincipalTag**: string: The tag.
* **status**: 'Healthy' | 'Unhealthy' | 'Unknown' | string: The health status for the tag.

## ServicePrincipalTagHealthReportList
### Properties
* **nextLink**: string: URI to the next page.
* **value**: [ServicePrincipalTagHealthReport](#serviceprincipaltaghealthreport)[]: A report of the health status of a tag on an identity application service principal.

## SubscriptionDefinition
### Properties
* **delegatedProviderSubscriptionId**: string: Parent DelegatedProvider subscription identifier.
* **displayName**: string: Subscription name.
* **externalReferenceId**: string: External reference identifier.
* **id**: string: Fully qualified identifier.
* **offerId**: string: Identifier of the offer under the scope of a delegated provider.
* **owner**: string: Subscription owner.
* **routingResourceManagerType**: 'Admin' | 'Default' | string: Routing resource manager type.
* **state**: 'Deleted' | 'Deleting' | 'Disabled' | 'Enabled' | 'NotDefined' | 'PartiallyDeleted' | 'PastDue' | 'Warned' | string: Subscription state.
* **subscriptionId**: string: Subscription identifier.
* **tenantId**: string: Directory tenant identifier.

## SubscriptionList
### Properties
* **nextLink**: string: URI to the next page.
* **value**: [SubscriptionDefinition](#subscriptiondefinition)[]: Subscription definition.

