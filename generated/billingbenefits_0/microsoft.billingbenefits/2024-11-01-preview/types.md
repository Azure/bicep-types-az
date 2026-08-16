# Microsoft.BillingBenefits @ 2024-11-01-preview

## Resource Microsoft.BillingBenefits/discounts@2024-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string {pattern: "^[-\w\._,\(\)]+$"}: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. E.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Plan for the resource.
* **properties**: [DiscountProperties](#discountproperties): Discount properties
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.BillingBenefits/discounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BillingBenefits/reservationOrderAliases@2024-11-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the reservation benefits are applied to.
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationOrderAliasRequestPropertiesOrReservationOrderAliasResponseProperties](#reservationorderaliasrequestpropertiesorreservationorderaliasresponseproperties): Reservation order alias request properties
* **sku**: [ResourceSku](#resourcesku) (Required): Reservation order SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BillingBenefits/reservationOrderAliases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BillingBenefits/savingsPlanOrderAliases@2024-11-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Resource provider kind
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SavingsPlanOrderAliasProperties](#savingsplanorderaliasproperties): Savings plan order alias properties
* **sku**: [ResourceSku](#resourcesku) (Required): Savings plan SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BillingBenefits/savingsPlanOrderAliases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BillingBenefits/savingsPlanOrders@2024-11-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavingsPlanOrderModelProperties](#savingsplanordermodelproperties) (ReadOnly): Savings plan order properties
* **sku**: [ResourceSku](#resourcesku) (ReadOnly): Savings plan SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BillingBenefits/savingsPlanOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BillingBenefits/savingsPlanOrders/savingsPlans@2024-11-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavingsPlanModelProperties](#savingsplanmodelproperties) (ReadOnly): Savings plan properties
* **sku**: [ResourceSku](#resourcesku) (ReadOnly): Savings plan SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BillingBenefits/savingsPlanOrders/savingsPlans' (ReadOnly, DeployTimeConstant): The resource type

## Function cancel (Microsoft.BillingBenefits/discounts@2024-11-01-preview)
* **Resource**: Microsoft.BillingBenefits/discounts
* **ApiVersion**: 2024-11-01-preview
* **Output**: [Discount](#discount)

## Function elevate (Microsoft.BillingBenefits/savingsPlanOrders@2024-11-01-preview)
* **Resource**: Microsoft.BillingBenefits/savingsPlanOrders
* **ApiVersion**: 2024-11-01-preview
* **Output**: [RoleAssignmentEntity](#roleassignmententity)

## Function validate (Microsoft.BillingBenefits/savingsPlanOrders/savingsPlans@2024-11-01-preview)
* **Resource**: Microsoft.BillingBenefits/savingsPlanOrders/savingsPlans
* **ApiVersion**: 2024-11-01-preview
* **Input**: [SavingsPlanUpdateValidateRequest](#savingsplanupdatevalidaterequest)
* **Output**: [SavingsPlanValidateResponse](#savingsplanvalidateresponse)

## AppliedScopeProperties
### Properties
* **displayName**: string: Display name
* **managementGroupId**: string: Fully-qualified identifier of the management group where the benefit must be applied.
* **resourceGroupId**: string: Fully-qualified identifier of the resource group.
* **subscriptionId**: string: Fully-qualified identifier of the subscription.
* **tenantId**: string: Tenant ID where the benefit is applied.

## BillingPlanInformation
### Properties
* **nextPaymentDueDate**: string: For recurring billing plans, indicates the date when next payment will be processed. Null when total is paid off.
* **pricingCurrencyTotal**: [Price](#price): Amount of money to be paid for the Order. Tax is not included.
* **startDate**: string: Date when the billing plan has started.
* **transactions**: [PaymentDetail](#paymentdetail)[]

## CatalogClaimsItem
### Properties
* **catalogClaimsItemType**: string
* **value**: string

## Commitment
### Properties
* **amount**: int
* **currencyCode**: string: The ISO 4217 3-letter currency code for the currency used by this purchase record.
* **grain**: 'FullTerm' | 'Hourly' | 'Unknown' | string: Commitment grain.

## ConditionsItem
### Properties
* **conditionName**: string
* **type**: string
* **value**: string[]: These items are open-ended strings.

## CustomPriceProperties
### Properties
* **billingPeriod**: string: The billing period of the priceable node. Validation: Optional, Maximum length 128 characters. Only allowed if the availability derived by market, product, sku, and claims has terms and at least one of those terms has a billing period. When specified, termUnits must be specified.
* **catalogClaims**: [CatalogClaimsItem](#catalogclaimsitem)[] (Required): The set of BigCat claims. Validation: Required. Must contain AgreementType, NationalCloud, and PricingAudience claims. Additionally requires AccessPass claim when creating custom price with action == consume on the pricing instructions.
* **catalogId**: string (Required): The catalog instance where the priceable node lives. Validation: Required. No defined format, will vary per team.
* **marketSetPrices**: [MarketSetPricesItems](#marketsetpricesitems)[] (Required): The set of market set prices of the priceable node. Validation: Required. Must contain at least one element.
* **meterType**: string: Must be present if the market, product, sku, and claims, and optional term information resolves to multiple availabilities that only differ by meter type. Validation: Maximum length 128 characters.
* **ruleType**: 'FixedListPrice' | 'FixedPriceLock' | 'PriceCeiling' | string (Required): The type of the priceable node pricing rule. Validation: Required. Supported values are fixedPriceLock, fixedListPrice, and priceCeiling.
* **termUnits**: string: The term units for the priceable node. Validation: Optional, Maximum length 128 characters. Must be present if and only if the availability derived by market, product, sku, and claims has terms.

## Discount
### Properties
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string {pattern: "^[-\w\._,\(\)]+$"}: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. E.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string (ReadOnly): The name of the resource
* **plan**: [Plan](#plan): Plan for the resource.
* **properties**: [DiscountProperties](#discountproperties): Discount properties
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## DiscountProperties
* **Discriminator**: entityType

### Base Properties
* **appliedScopeType**: 'BillingAccount' | 'BillingProfile' | 'Customer' | string: List of applied scopes supported for discounts.
* **benefitResourceId**: string (ReadOnly): Fully-qualified identifier of the benefit under applicable benefit list.
* **billingAccountResourceId**: string (ReadOnly): Billing account resource id where the discount metadata is present.
* **billingProfileResourceId**: string (ReadOnly): Billing profile resource id where the discount is scoped to.
* **customerResourceId**: string (ReadOnly): Customer resource id where the discount is scoped to.
* **displayName**: string: This defines a user friendly display name for the discount.
* **productCode**: string (Required): This is the catalog UPN for the product.
* **provisioningState**: 'Canceled' | 'Failed' | 'Pending' | 'Succeeded' | 'Unknown' | string (ReadOnly): The state of the resource. Supported values are Pending, Failed, Succeeded, Canceled.
* **startAt**: string (Required): Start date of the discount. Value is the date the discount started or will start in the future.
* **status**: 'Active' | 'Canceled' | 'Expired' | 'Failed' | 'Pending' | string (ReadOnly): Represents the current status of the discount.
* **systemId**: string: This is the globally unique identifier of the Discount which will not change for the lifetime of the Discount.

### EntityTypeAffiliateDiscount
#### Properties
* **endAt**: string (ReadOnly): End date of the discount. No duration will be supported. Allowed value is any date greater than or equal to startDate.
* **entityType**: 'Affiliate' (Required): This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values.
* **primaryResourceId**: string (ReadOnly): This will be present in the response if the primary has a resource ID

### EntityTypePrimaryDiscount
#### Properties
* **discountTypeProperties**: [DiscountTypeProperties](#discounttypeproperties): This defines the conditions for a given discount type.
* **endAt**: string (Required): End date of the discount. No duration will be supported. Allowed value is any date greater than or equal to startDate.
* **entityType**: 'Primary' (Required): This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values.


## DiscountTypeProperties
* **Discriminator**: discountType

### Base Properties
* **applyDiscountOn**: 'Consume' | 'Purchase' | 'Renew' | string (Required): The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values.
* **conditions**: [ConditionsItem](#conditionsitem)[]: Array of conditions for the discount. Validation: Optional. Maximum length is 1000.
* **discountCombinationRule**: 'BestOf' | 'Stackable' | string: The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
* **discountPercentage**: int {minValue: 0, maxValue: 100}: Discount percentage provided for the customer. Validation: Required unless this is a price rule.
* **priceGuaranteeProperties**: [PriceGuaranteeProperties](#priceguaranteeproperties): Set only in price guarantee scenario.

### DiscountTypeCustomPriceMultiCurrency
#### Properties
* **customPriceProperties**: [CustomPriceProperties](#custompriceproperties): Custom price properties for a given discount.
* **discountType**: 'CustomPriceMultiCurrency' (Required): Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
* **productFamilyName**: string: Product family for which the discount is given. Validation: Optional
* **productId**: string: Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
* **skuId**: string: ResourceSku for the given discount. Validation: Optional.

### DiscountTypeProduct
#### Properties
* **discountType**: 'Product' (Required): Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
* **productFamilyName**: string: Product family for which the discount is given. Validation: Optional
* **productId**: string: Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F

### DiscountTypeProductFamily
#### Properties
* **discountType**: 'ProductFamily' (Required): Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
* **productFamilyName**: string: Product family for which the discount is given. Validation: Optional

### DiscountTypeProductSku
#### Properties
* **discountType**: 'Sku' (Required): Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
* **productFamilyName**: string: Product family for which the discount is given. Validation: Optional
* **productId**: string: Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
* **skuId**: string: ResourceSku for the given discount. Validation: Optional.


## ExtendedStatusInfo
### Properties
* **message**: string: The message giving detailed information about the status code.
* **statusCode**: string: Status code providing additional information.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## MarketSetPricesItems
### Properties
* **currency**: string (Required): The currency of the locked price value. Validation: Required. Must be a valid ISO 4217 3-letter currency code.
* **markets**: string[] (Required)
* **value**: int (Required): The locked price for the priceable node. Validation: Required. Must be greater than or equal to 0. If the case of billing plans. This represents the price for each cycle charge.

## PaymentDetail
### Properties
* **billingAccount**: string: Billing account
* **billingCurrencyTotal**: [Price](#price): Amount charged in Billing currency. Tax not included. Is null for future payments
* **dueDate**: string: Date when the payment needs to be done.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly)
* **paymentDate**: string: Date when the transaction is completed. Is null when it is scheduled.
* **pricingCurrencyTotal**: [Price](#price): Amount in pricing currency. Tax not included.
* **status**: 'Cancelled' | 'Failed' | 'Scheduled' | 'Succeeded' | string: Describes whether the payment is completed, failed, cancelled or scheduled in the future.

## Plan
### Properties
* **name**: string (Required): A user defined name of the 3rd Party Artifact that is being procured.
* **product**: string (Required): The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
* **promotionCode**: string: A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
* **publisher**: string (Required): The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
* **version**: string: The version of the desired product/artifact.

## Price
### Properties
* **amount**: int
* **currencyCode**: string: The ISO 4217 3-letter currency code for the currency used by this purchase record.

## PriceGuaranteeProperties
### Properties
* **priceGuaranteeDate**: string: The date on which prices are to be used for guarantee calculation. Validation: expected to be 00 hours, Format: 2024-09-30T00:00:00Z. Must be in UTC.
* **pricingPolicy**: 'Locked' | 'Protected' | string: Supported values: Protected, Locked

## PurchaseRequest
### Properties
* **properties**: [PurchaseRequestProperties](#purchaserequestproperties)
* **sku**: [ResourceSku](#resourcesku): The SKU to be applied for this resource

## PurchaseRequestProperties
### Properties
* **appliedScopeProperties**: [AppliedScopeProperties](#appliedscopeproperties): Properties specific to applied scope type. Not required if not applicable.
* **appliedScopeType**: 'ManagementGroup' | 'Shared' | 'Single' | string: Type of the Applied Scope.
* **billingPlan**: 'P1M' | string: Represents the billing plan in ISO 8601 format. Required only for monthly billing plans.
* **billingScopeId**: string: Subscription that will be charged for purchasing the benefit
* **commitment**: [Commitment](#commitment): Commitment towards the benefit.
* **displayName**: string: Friendly name of the savings plan
* **effectiveDateTime**: string (ReadOnly): DateTime of the savings plan starts providing benefit from.
* **renew**: bool: Setting this to true will automatically purchase a new benefit on the expiration date time.
* **term**: 'P1Y' | 'P3Y' | 'P5Y' | string: Represent benefit term in ISO 8601 format.

## RenewProperties
### Properties
* **purchaseProperties**: [PurchaseRequest](#purchaserequest)

## ReservationOrderAliasRequestPropertiesOrReservationOrderAliasResponseProperties
### Properties
* **appliedScopeProperties**: [AppliedScopeProperties](#appliedscopeproperties): Properties specific to applied scope type. Not required if not applicable.
* **appliedScopeType**: 'ManagementGroup' | 'Shared' | 'Single' | string: Type of the Applied Scope.
* **billingPlan**: 'P1M' | string: Represents the billing plan in ISO 8601 format. Required only for monthly billing plans.
* **billingScopeId**: string: Subscription that will be charged for purchasing the benefit
* **displayName**: string: Display name
* **provisioningState**: 'Cancelled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'PendingBilling' | 'Succeeded' | string (ReadOnly): Provisioning state
* **quantity**: int {minValue: 1}: Total Quantity of the SKUs purchased in the Reservation.
* **renew**: bool: Setting this to true will automatically purchase a new benefit on the expiration date time.
* **reservationOrderId**: string (ReadOnly): Identifier of the reservation order created
* **reservedResourceProperties**: [ReservationOrderAliasRequestPropertiesReservedResourcePropertiesOrReservationOrderAliasResponsePropertiesReservedResourceProperties](#reservationorderaliasrequestpropertiesreservedresourcepropertiesorreservationorderaliasresponsepropertiesreservedresourceproperties): Properties specific to each reserved resource type. Not required if not applicable.
* **reservedResourceType**: 'AVS' | 'AppService' | 'AzureDataExplorer' | 'AzureFiles' | 'BlockBlob' | 'CosmosDb' | 'DataFactory' | 'Databricks' | 'DedicatedHost' | 'ManagedDisk' | 'MariaDb' | 'MySql' | 'NetAppStorage' | 'PostgreSql' | 'RedHat' | 'RedHatOsa' | 'RedisCache' | 'SapHana' | 'SqlAzureHybridBenefit' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SqlEdge' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachineSoftware' | 'VirtualMachines' | string: The type of the resource that is being reserved.
* **reviewDateTime**: string: This is the date-time when the Azure Hybrid Benefit needs to be reviewed.
* **term**: 'P1Y' | 'P3Y' | 'P5Y' | string: Represent benefit term in ISO 8601 format.

## ReservationOrderAliasRequestPropertiesReservedResourcePropertiesOrReservationOrderAliasResponsePropertiesReservedResourceProperties
### Properties
* **instanceFlexibility**: 'Off' | 'On' | string: Turning this on will apply the reservation discount to other VMs in the same VM size group.

## ResourceSku
### Properties
* **name**: string

## RoleAssignmentEntity
### Properties
* **id**: string: Role assignment entity id
* **name**: string: Role assignment entity name
* **properties**: [RoleAssignmentEntityProperties](#roleassignmententityproperties): Role assignment entity properties

## RoleAssignmentEntityProperties
### Properties
* **principalId**: string: Principal Id
* **roleDefinitionId**: string: Role definition id
* **scope**: string: Scope of the role assignment entity

## SavingsPlanModelProperties
### Properties
* **appliedScopeProperties**: [AppliedScopeProperties](#appliedscopeproperties): Properties specific to applied scope type. Not required if not applicable.
* **appliedScopeType**: 'ManagementGroup' | 'Shared' | 'Single' | string: Type of the Applied Scope.
* **benefitStartTime**: string: This is the DateTime when the savings plan benefit started.
* **billingAccountId**: string (ReadOnly): Fully-qualified identifier of the billing account where the savings plan is applied. Present only for Enterprise Agreement customers.
* **billingPlan**: 'P1M' | string: Represents the billing plan in ISO 8601 format. Required only for monthly billing plans.
* **billingProfileId**: string (ReadOnly): Fully-qualified identifier of the billing profile where the savings plan is applied. Present only for Field-led or Customer-led customers.
* **billingScopeId**: string: Subscription that will be charged for purchasing the benefit
* **commitment**: [Commitment](#commitment): Commitment towards the benefit.
* **customerId**: string (ReadOnly): Fully-qualified identifier of the customer where the savings plan is applied. Present only for Partner-led customers.
* **displayName**: string: Display name
* **displayProvisioningState**: string (ReadOnly): The provisioning state of the savings plan for display, e.g. Succeeded
* **effectiveDateTime**: string (ReadOnly): DateTime of the savings plan starts providing benefit from.
* **expiryDateTime**: string (ReadOnly): Expiry date time
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly)
* **provisioningState**: 'Cancelled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'PendingBilling' | 'Succeeded' | string (ReadOnly): Provisioning state
* **purchaseDateTime**: string (ReadOnly): Date time when the savings plan was purchased
* **renew**: bool: Setting this to true will automatically purchase a new benefit on the expiration date time.
* **renewDestination**: string: SavingsPlan Id of the SavingsPlan which is purchased because of renew.
* **renewProperties**: [RenewProperties](#renewproperties)
* **renewSource**: string: SavingsPlan Id of the SavingsPlan from which this SavingsPlan is renewed.
* **term**: 'P1Y' | 'P3Y' | 'P5Y' | string: Represent benefit term in ISO 8601 format.
* **userFriendlyAppliedScopeType**: string (ReadOnly): The applied scope type of the savings plan for display, e.g. Shared
* **utilization**: [Utilization](#utilization) (ReadOnly): Savings plan utilization

## SavingsPlanOrderAliasProperties
### Properties
* **appliedScopeProperties**: [AppliedScopeProperties](#appliedscopeproperties): Properties specific to applied scope type. Not required if not applicable.
* **appliedScopeType**: 'ManagementGroup' | 'Shared' | 'Single' | string: Type of the Applied Scope.
* **billingPlan**: 'P1M' | string: Represents the billing plan in ISO 8601 format. Required only for monthly billing plans.
* **billingScopeId**: string: Subscription that will be charged for purchasing the benefit
* **commitment**: [Commitment](#commitment): Commitment towards the benefit.
* **displayName**: string: Display name
* **provisioningState**: 'Cancelled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'PendingBilling' | 'Succeeded' | string (ReadOnly): Provisioning state
* **renew**: bool: Setting this to true will automatically purchase a new benefit on the expiration date time.
* **savingsPlanOrderId**: string (ReadOnly): Identifier of the savings plan created
* **term**: 'P1Y' | 'P3Y' | 'P5Y' | string: Represent benefit term in ISO 8601 format.

## SavingsPlanOrderModelProperties
### Properties
* **benefitStartTime**: string: This is the DateTime when the savings plan benefit started.
* **billingAccountId**: string (ReadOnly): Fully-qualified identifier of the billing account where the savings plan is applied. Present only for Enterprise Agreement customers.
* **billingPlan**: 'P1M' | string: Represents the billing plan in ISO 8601 format. Required only for monthly billing plans.
* **billingProfileId**: string (ReadOnly): Fully-qualified identifier of the billing profile where the savings plan is applied. Present only for Field-led or Customer-led customers.
* **billingScopeId**: string: Subscription that will be charged for purchasing the benefit
* **customerId**: string (ReadOnly): Fully-qualified identifier of the customer where the savings plan is applied. Present only for Partner-led customers.
* **displayName**: string: Display name
* **expiryDateTime**: string (ReadOnly): Expiry date time
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly)
* **planInformation**: [BillingPlanInformation](#billingplaninformation): Information describing the type of billing plan for this savings plan.
* **provisioningState**: 'Cancelled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'PendingBilling' | 'Succeeded' | string (ReadOnly): Provisioning state
* **savingsPlans**: string[]
* **term**: 'P1Y' | 'P3Y' | 'P5Y' | string: Represent benefit term in ISO 8601 format.

## SavingsPlanUpdateRequestProperties
### Properties
* **appliedScopeProperties**: [AppliedScopeProperties](#appliedscopeproperties): Properties specific to applied scope type. Not required if not applicable.
* **appliedScopeType**: 'ManagementGroup' | 'Shared' | 'Single' | string: Type of the Applied Scope.
* **displayName**: string: Display name
* **renew**: bool: Setting this to true will automatically purchase a new benefit on the expiration date time.
* **renewProperties**: [RenewProperties](#renewproperties)

## SavingsPlanUpdateValidateRequest
### Properties
* **benefits**: [SavingsPlanUpdateRequestProperties](#savingsplanupdaterequestproperties)[]

## SavingsPlanValidateResponse
### Properties
* **benefits**: [SavingsPlanValidResponseProperty](#savingsplanvalidresponseproperty)[]
* **nextLink**: string: Url to get the next page.

## SavingsPlanValidResponseProperty
### Properties
* **reason**: string: Failure reason if the provided input was invalid
* **reasonCode**: string: Failure reason code if the provided input was invalid
* **valid**: bool: Indicates if the provided input was valid

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. E.g. P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## Utilization
### Properties
* **aggregates**: [UtilizationAggregates](#utilizationaggregates)[]: The array of aggregates of a savings plan's utilization
* **trend**: string (ReadOnly): The number of days trend for a savings plan

## UtilizationAggregates
### Properties
* **grain**: int (ReadOnly): The grain of the aggregate
* **grainUnit**: string (ReadOnly): The grain unit of the aggregate
* **value**: int (ReadOnly): The aggregate value
* **valueUnit**: string (ReadOnly): The aggregate value unit

