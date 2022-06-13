# Microsoft.Billing @ 2021-10-01

## Resource Microsoft.Billing/billingAccounts/billingSubscriptionAliases@2021-10-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingSubscriptionAliasProperties](#billingsubscriptionaliasproperties): Billing subscription alias properties.
* **type**: 'Microsoft.Billing/billingAccounts/billingSubscriptionAliases' (ReadOnly, DeployTimeConstant): The resource type

## Amount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): Amount value.

## BillingSubscriptionAliasProperties
### Properties
* **autoRenew**: 'Off' | 'On' | string: Indicates whether auto renewal is turned on or off for a subscription.
* **beneficiaryTenantId**: string: The provisioning tenant of the subscription.
* **billingFrequency**: string: The billing frequency of the subscription in the ISO8601 format. Example: P1M, P3M, P1Y
* **billingPolicies**: [BillingSubscriptionPropertiesBillingPolicies](#billingsubscriptionpropertiesbillingpolicies) (ReadOnly): Dictionary of billing policies associated with the subscription.
* **billingProfileDisplayName**: string (ReadOnly): The display name of the billing profile to which the subscription is billed. This field is only applicable for Microsoft Customer Agreement billing accounts.
* **billingProfileId**: string: The ID of the billing profile to which the subscription is billed. This field is only applicable for Microsoft Customer Agreement billing accounts.
* **billingProfileName**: string (ReadOnly): The name of the billing profile to which the subscription is billed. This field is only applicable for Microsoft Customer Agreement billing accounts.
* **billingSubscriptionId**: string (ReadOnly): The ID of the billing subscription with the subscription alias.
* **consumptionCostCenter**: string: The cost center applied to the subscription. This field is only available for consumption subscriptions of Microsoft Customer Agreement Type billing accounts.
* **customerDisplayName**: string (ReadOnly): The name of the customer for whom the subscription was created. The field is applicable only for Microsoft Partner Agreement billing accounts.
* **customerId**: string: The ID of the customer for whom the subscription was created. The field is applicable only for Microsoft Partner Agreement billing accounts.
* **displayName**: string: The name of the subscription.
* **enrollmentAccountDisplayName**: string (ReadOnly): The enrollment Account name associated with the subscription. This field is available only for the Enterprise Agreement billing accounts.
* **enrollmentAccountId**: string (ReadOnly): The enrollment Account ID associated with the subscription. This field is available only for the Enterprise Agreement billing accounts.
* **enrollmentAccountSubscriptionDetails**: [EnrollmentAccountSubscriptionDetails](#enrollmentaccountsubscriptiondetails) (ReadOnly): The billing properties that can be modified. This field is available only for the Enterprise Agreement billing accounts.
* **invoiceSectionDisplayName**: string (ReadOnly): The display name of the invoice section to which the subscription is billed. The field is applicable only for Microsoft Partner Agreement billing accounts.
* **invoiceSectionId**: string: The ID of the invoice section to which the subscription is billed. The field is applicable only for Microsoft Partner Agreement billing accounts.
* **invoiceSectionName**: string (ReadOnly): The name of the invoice section to which the subscription is billed. The field is applicable only for Microsoft Partner Agreement billing accounts.
* **lastMonthCharges**: [Amount](#amount) (ReadOnly): The last month's charges. This field is only available for usage based subscriptions of Microsoft Customer Agreement billing accounts.
* **monthToDateCharges**: [Amount](#amount) (ReadOnly): The current month to date charges. This field is only available for usage based subscriptions of Microsoft Customer Agreement billing accounts.
* **nextBillingCycleDetails**: [NextBillingCycleDetails](#nextbillingcycledetails) (ReadOnly): Next billing cycle details of the subscription.
* **offerId**: string (ReadOnly): The offer ID for the subscription. This field is only available for the Microsoft Online Services Program billing accounts.
* **productCategory**: string (ReadOnly): The category of the product for which the subscription is purchased. Possible values include: AzureSupport, Hardware, ReservationOrder, SaaS, SavingsPlanOrder, Software, UsageBased, Other
* **productType**: string (ReadOnly): The type of the product for which the subscription is purchased
* **productTypeId**: string: The ID of the product for which the subscription is purchased
* **purchaseDate**: string (ReadOnly): The purchase date of the subscription in UTC time.
* **quantity**: int: The number of licenses purchased for the subscription
* **renewalTermDetails**: [RenewalTermDetails](#renewaltermdetails) (ReadOnly): The term details of the subscription at the next renewal.
* **reseller**: [Reseller](#reseller) (ReadOnly): The reseller for which the subscription is created. The field is available for Microsoft Partner Agreement billing accounts.
* **skuDescription**: string (ReadOnly): The SKU description of the product for which the subscription is purchased. This field is only available for Microsoft Customer Agreement billing accounts.
* **skuId**: string: The SKU ID of the product for which the subscription is purchased. This field is only available for Microsoft Customer Agreement billing accounts.
* **status**: 'Active' | 'AutoRenew' | 'Cancelled' | 'Deleted' | 'Disabled' | 'Expired' | 'Expiring' | 'Suspended' | 'Unknown' | 'Warned' | string (ReadOnly): The status of the subscription. This field is not available for Enterprise Agreement billing accounts.
* **subscriptionId**: string (ReadOnly): The ID of the usage-based subscription. This field is only available for usage-based subscriptions of Microsoft Customer Agreement billing accounts.
* **suspensionReasons**: string[] (ReadOnly): The suspension reason for the subscription. This field is not available for Enterprise Agreement billing accounts.
* **termDuration**: string: The duration for which you can use the subscription. Example P1Y and P1M
* **termEndDate**: string (ReadOnly): The end date of the term in UTC time.
* **termStartDate**: string (ReadOnly): The start date of the term in UTC time.

## BillingSubscriptionPropertiesBillingPolicies
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnrollmentAccountSubscriptionDetails
### Properties
* **enrollmentAccountStartDate**: string (ReadOnly): The enrollment Account and the subscription association start date. This field is available only for the Enterprise Agreement billing accounts.
* **subscriptionEnrollmentAccountStatus**: 'Active' | 'Cancelled' | 'Deleted' | 'Expired' | 'TransferredOut' | 'Transferring' | string (ReadOnly): The current enrollment account status of the subscription. This field is available only for the Enterprise Agreement billing accounts.

## NextBillingCycleDetails
### Properties
* **billingFrequency**: string (ReadOnly): The billing frequency of the subscription in the next billing cycle.

## RenewalTermDetails
### Properties
* **billingFrequency**: string (ReadOnly): The billing frequency of the subscription.
* **productTypeId**: string (ReadOnly): The ID of the product.
* **quantity**: int: The number of licenses
* **skuId**: string (ReadOnly): The SKU ID of the product
* **termDuration**: string (ReadOnly): The term duration of the subscription. Example P1M and P1Y

## Reseller
### Properties
* **description**: string (ReadOnly): The name of the reseller.
* **resellerId**: string (ReadOnly): The MPN ID of the reseller.

