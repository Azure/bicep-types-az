# Microsoft.BillingBenefits @ 2022-11-01

## Resource Microsoft.BillingBenefits/reservationOrderAliases@2022-11-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the reservation benefits are applied to.
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationOrderAliasRequestPropertiesOrReservationOrderAliasResponseProperties](#reservationorderaliasrequestpropertiesorreservationorderaliasresponseproperties): Reservation order alias request properties
* **sku**: [Sku](#sku) (Required): Reservation order SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BillingBenefits/reservationOrderAliases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BillingBenefits/savingsPlanOrderAliases@2022-11-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Resource provider kind
* **name**: string {pattern: "^[a-zA-Z0-9_\-\.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SavingsPlanOrderAliasProperties](#savingsplanorderaliasproperties): Savings plan order alias properties
* **sku**: [Sku](#sku) (Required): Savings plan SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BillingBenefits/savingsPlanOrderAliases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BillingBenefits/savingsPlanOrders@2022-11-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavingsPlanOrderModelProperties](#savingsplanordermodelproperties) (ReadOnly): Savings plan order properties
* **sku**: [Sku](#sku) (ReadOnly): Savings plan SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BillingBenefits/savingsPlanOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BillingBenefits/savingsPlanOrders/savingsPlans@2022-11-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2022-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavingsPlanModelProperties](#savingsplanmodelproperties) (ReadOnly): Savings plan properties
* **sku**: [Sku](#sku) (ReadOnly): Savings plan SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BillingBenefits/savingsPlanOrders/savingsPlans' (ReadOnly, DeployTimeConstant): The resource type

## Function elevate (Microsoft.BillingBenefits/savingsPlanOrders@2022-11-01)
* **Resource**: Microsoft.BillingBenefits/savingsPlanOrders
* **ApiVersion**: 2022-11-01
* **Output**: [RoleAssignmentEntity](#roleassignmententity)

## Function validate (Microsoft.BillingBenefits/savingsPlanOrders/savingsPlans@2022-11-01)
* **Resource**: Microsoft.BillingBenefits/savingsPlanOrders/savingsPlans
* **ApiVersion**: 2022-11-01
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

## Commitment
### Properties
* **amount**: int
* **currencyCode**: string: The ISO 4217 3-letter currency code for the currency used by this purchase record.
* **grain**: 'Hourly' | string: Commitment grain.

## ExtendedStatusInfo
### Properties
* **message**: string: The message giving detailed information about the status code.
* **statusCode**: string: Status code providing additional information.

## PaymentDetail
### Properties
* **billingAccount**: string: Billing account
* **billingCurrencyTotal**: [Price](#price): Amount charged in Billing currency. Tax not included. Is null for future payments
* **dueDate**: string: Date when the payment needs to be done.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly)
* **paymentDate**: string: Date when the transaction is completed. Is null when it is scheduled.
* **pricingCurrencyTotal**: [Price](#price): Amount in pricing currency. Tax not included.
* **status**: 'Cancelled' | 'Failed' | 'Scheduled' | 'Succeeded' | string: Describes whether the payment is completed, failed, cancelled or scheduled in the future.

## Price
### Properties
* **amount**: int
* **currencyCode**: string: The ISO 4217 3-letter currency code for the currency used by this purchase record.

## PurchaseRequest
### Properties
* **properties**: [PurchaseRequestProperties](#purchaserequestproperties)
* **sku**: [Sku](#sku): The SKU to be applied for this resource

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
* **name**: string: Name of the SKU to be applied

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

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

