# Commvault.ContentStore @ 2025-01-01-preview

## Resource Commvault.ContentStore/cloudAccounts@2025-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_\-.: ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudAccountProperties](#cloudaccountproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Commvault.ContentStore/cloudAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Commvault.ContentStore/cloudAccounts/plans@2025-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_\-.: ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PlanProperties](#planproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Commvault.ContentStore/cloudAccounts/plans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Commvault.ContentStore/cloudAccounts/protectionGroups@2025-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_\-.: ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectionGroupProperties](#protectiongroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Commvault.ContentStore/cloudAccounts/protectionGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Commvault.ContentStore/cloudAccounts/protectionGroups/protectedItems@2025-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9\-_]{1,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProtectedItemProperties](#protecteditemproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Commvault.ContentStore/cloudAccounts/protectionGroups/protectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Commvault.ContentStore/cloudAccounts/storages@2025-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_\-.: ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StorageProperties](#storageproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Commvault.ContentStore/cloudAccounts/storages' (ReadOnly, DeployTimeConstant): The resource type

## CloudAccountProperties
### Properties
* **marketplace**: [LiftrBaseMarketplaceDetails](#liftrbasemarketplacedetails) (Required): Marketplace details of the resource.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **ssoUrl**: string (ReadOnly): SSO URL for the Commvault Cloud Account
* **user**: [LiftrBaseUserDetails](#liftrbaseuserdetails) (Required): Details of the user.

## ExtendedRetentionTime
### Properties
* **backupRuleType**: 'ALL_FULLS' | 'ALL_JOBS' | 'DAILY_FULLS' | 'HALF_YEARLY_FULLS' | 'HOURLY_FULLS' | 'MONTHLY_FULLS' | 'QUARTERLY_FULLS' | 'WEEKLY_FULLS' | 'YEARLY_FULLS' | string: Backup Rule Type for Extended Retention
* **retentionPeriod**: int: Retention period for Extended Retention
* **retentionTime**: 'monthly' | 'yearly' | string: Retention time for Extended Retention

## LiftrBaseMarketplaceDetails
### Properties
* **offerDetails**: [LiftrBaseOfferDetails](#liftrbaseofferdetails) (Required): Offer details for the marketplace that is selected by the user
* **subscriptionId**: string (Required): Azure subscription id for the the marketplace offer is purchased from
* **subscriptionStatus**: 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' | string (ReadOnly): Marketplace subscription status

## LiftrBaseOfferDetails
### Properties
* **offerId**: string (Required): Offer Id for the marketplace offer
* **planId**: string (Required): Plan Id for the marketplace offer
* **planName**: string: Plan Name for the marketplace offer
* **publisherId**: string (Required): Publisher Id for the marketplace offer
* **termId**: string: Plan Display Name for the marketplace offer
* **termUnit**: string: Plan Display Name for the marketplace offer

## LiftrBaseUserDetails
### Properties
* **emailAddress**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"} (Required): Email address of the user
* **firstName**: string (Required): First name of the user
* **lastName**: string (Required): Last name of the user
* **phoneNumber**: string: User's phone number
* **upn**: string: User's principal name

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## PlanProperties
### Properties
* **location**: string {minLength: 1, maxLength: 50} (Required): Location of the Commvault Plan
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **retention**: [Retention](#retention): The Commvault Plan Retention
* **schedules**: [Schedule](#schedule)[] {minLength: 1, maxLength: 11}: The Commvault Plan Schedule
* **storagePlans**: [StoragePlan](#storageplan)[] {minLength: 1, maxLength: 11} (Required): The storage plans associated with the Commvault Plan

## ProtectedItemProperties
### Properties
* **lastBackUpTime**: int (Required, ReadOnly): The Commvault Protected Item backup time
* **location**: string (Required, ReadOnly): The location of the protected item
* **resourceGroup**: string (Required, ReadOnly): The resource group of the protected item
* **resourceName**: string (Required, ReadOnly): The Name of the commvault protected item
* **vmGuid**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"} (Required, ReadOnly): The GUID of VM

## ProtectionGroupProperties
### Properties
* **backupActivityStatus**: string (ReadOnly): The backup activity status indicating if backup is enabled or not on the protection group
* **dataSourceType**: 'AzureVM' (Required): The datasource type of Commvault Protection Group
* **lastBackUpTime**: int (ReadOnly): The Commvault Protection Group backup time
* **numberOfProtectedItems**: int (ReadOnly): The number of ProtectedItems under the Protection Group
* **plan**: string (Required): The Commvault Plan to be associated with the Protection Group
* **protectionStatus**: 'all' | 'backed_up_with_error' | 'discovered' | 'not_protected' | 'pending' | 'protected' | string (ReadOnly): The protection group schedule
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **resources**: [ProtectionGroupResources](#protectiongroupresources) (Required): The resources to be protected under Protection Group

## ProtectionGroupResources
### Properties
* **manual**: string[]: The items to be protected under Protection Group
* **matchRules**: [ProtectionGroupResourcesMatchRules](#protectiongroupresourcesmatchrules): Rules to match resources

## ProtectionGroupResourcesMatchRules
### Properties
* **matchType**: 'all' | 'any' | string (Required): match Type all or any
* **rules**: [Rule](#rule)[] (Required): rules to match

## Retention
### Properties
* **numberOfSnapshots**: int: Number of Snapshots

## Rule
### Properties
* **operator**: 'contains' | 'doesNotContains' | 'doesNotEqual' | 'endsWith' | 'equals' | 'startsWith' | string (Required): property of the rule
* **property**: 'name' | 'region' | 'resourceGroup' | 'status' | 'tagName' | 'tagValue' | string (Required): property of the rule
* **value**: string (Required): property of the rule

## Schedule
### Properties
* **backupType**: 'BOTH' | 'FULL' | 'INCREMENTAL' | string (Required): Type of Backup
* **dayOfMonth**: int: Day of the month
* **dayOfWeek**: 'DAY' | 'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY' | 'WEEKDAY' | 'WEEKEND_DAYS' | string: Day of the week
* **frequency**: 'daily' | 'minutes' | 'monthly' | 'weekly' | 'yearly' | string: Frequency of Retention
* **monthOfYear**: 'APRIL' | 'AUGUST' | 'DECEMBER' | 'FEBRUARY' | 'JANUARY' | 'JULY' | 'JUNE' | 'MARCH' | 'MAY' | 'NOVEMBER' | 'OCTOBER' | 'SEPTEMBER' | string: Month of the year
* **runsEvery**: int: Interval of Retention
* **time**: string: Time of Retention
* **timeZone**: string: Time Zone
* **weeklyDays**: ('FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY' | string)[]: Weekly Days List
* **weekOfMonth**: 'FIRST' | 'FOURTH' | 'LAST' | 'SECOND' | 'THIRD' | string: Week of the month

## StoragePlan
### Properties
* **backupRuleType**: 'ALL_FULLS' | 'ALL_JOBS' | 'DAILY_FULLS' | 'HALF_YEARLY_FULLS' | 'HOURLY_FULLS' | 'MONTHLY_FULLS' | 'QUARTERLY_FULLS' | 'WEEKLY_FULLS' | 'YEARLY_FULLS' | string: Backup Rule Type
* **copyName**: string: Copy Name from Commvault
* **copyPrecedence**: int: Precedence of the Storage Plan, 1 is the highest precedence, 2 is the next highest, and so on
* **extendedRetention**: [ExtendedRetentionTime](#extendedretentiontime)[]: Extended Retention Policy
* **name**: string (Required): The name of the Storage resource
* **retentionPeriod**: int: Indicates the retention period valid only if the type of retention chosen in CUSTOM
* **retentionTime**: 'monthly' | 'yearly' | string: Indicates the retention timeframe valid only if the type of retention chosen in CUSTOM
* **storagePoolId**: string: Id of the Storage Pool

## StorageProperties
### Properties
* **class**: 'COLD' | 'HOT' | string (Required): The class of Commvault Storage
* **location**: string {minLength: 1, maxLength: 50} (Required): Location of the Commvault Storage
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **storageType**: 'Air_Gap_Protect' | string (Required): The type of Commvault Storage
* **vendor**: 'Azure_Blob_Storage' | string (Required): The vendor of Commvault Storage

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

