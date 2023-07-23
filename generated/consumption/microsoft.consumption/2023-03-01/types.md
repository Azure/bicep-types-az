# Microsoft.Consumption @ 2023-03-01

## Resource Microsoft.Consumption/budgets@2023-03-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BudgetProperties](#budgetproperties): The properties of the budget.
* **type**: 'Microsoft.Consumption/budgets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Consumption/credits@2023-03-01 (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'balanceSummary' (Required, DeployTimeConstant): The resource name
* **properties**: [CreditSummaryProperties](#creditsummaryproperties) (ReadOnly): The properties of the credit summary.
* **type**: 'Microsoft.Consumption/credits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Consumption/pricesheets@2023-03-01 (ReadOnly)
* **Valid Scope(s)**: Subscription, Extension
### Properties
* **apiVersion**: '2023-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag for the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [PriceSheetModel](#pricesheetmodel) (ReadOnly): price sheet result. It contains the pricesheet associated with billing period
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Consumption/pricesheets' (ReadOnly, DeployTimeConstant): The resource type

## Amount
### Properties
* **currency**: string (ReadOnly): Amount currency.
* **value**: int (ReadOnly): Amount.

## AmountWithExchangeRate
### Properties
* **currency**: string (ReadOnly): Amount currency.
* **exchangeRate**: int (ReadOnly): The exchange rate.
* **exchangeRateMonth**: int (ReadOnly): The exchange rate month.
* **value**: int (ReadOnly): Amount.

## BudgetComparisonExpression
### Properties
* **name**: string (Required): The name of the column to use in comparison.
* **operator**: 'In' | string (Required): The operator to use for comparison.
* **values**: string[] (Required): Array of values to use for comparison

## BudgetFilter
### Properties
* **and**: [BudgetFilterProperties](#budgetfilterproperties)[]: The logical "AND" expression. Must have at least 2 items.
* **dimensions**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a dimension
* **tags**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a tag

## BudgetFilterProperties
### Properties
* **dimensions**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a dimension
* **tags**: [BudgetComparisonExpression](#budgetcomparisonexpression): Has comparison expression for a tag

## BudgetProperties
### Properties
* **amount**: int (Required): The total amount of cost to track with the budget
* **category**: 'Cost' | string (Required): The category of the budget, whether the budget tracks cost or usage.
* **currentSpend**: [CurrentSpend](#currentspend) (ReadOnly): The current amount of cost which is being tracked for a budget.
* **filter**: [BudgetFilter](#budgetfilter): May be used to filter budgets by user-specified dimensions and/or tags.
* **forecastSpend**: [ForecastSpend](#forecastspend) (ReadOnly): The forecasted cost which is being tracked for a budget.
* **notifications**: [BudgetPropertiesNotifications](#budgetpropertiesnotifications): Dictionary of notifications associated with the budget. Budget can have up to five notifications.
* **timeGrain**: 'Annually' | 'BillingAnnual' | 'BillingMonth' | 'BillingQuarter' | 'Monthly' | 'Quarterly' | string (Required): The time covered by a budget. Tracking of the amount will be reset based on the time grain. BillingMonth, BillingQuarter, and BillingAnnual are only supported by WD customers
* **timePeriod**: [BudgetTimePeriod](#budgettimeperiod) (Required): Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than twelve months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.

## BudgetPropertiesNotifications
### Properties
### Additional Properties
* **Additional Properties Type**: [Notification](#notification)

## BudgetTimePeriod
### Properties
* **endDate**: string: The end date for the budget. If not provided, we default this to 10 years from the start date.
* **startDate**: string (Required): The start date for the budget.

## CreditBalanceSummary
### Properties
* **currentBalance**: [Amount](#amount) (ReadOnly): Current balance.
* **estimatedBalance**: [Amount](#amount) (ReadOnly): Estimated balance.
* **estimatedBalanceInBillingCurrency**: [AmountWithExchangeRate](#amountwithexchangerate) (ReadOnly): Estimated balance in billing currency.

## CreditSummaryProperties
### Properties
* **balanceSummary**: [CreditBalanceSummary](#creditbalancesummary) (ReadOnly): Summary of balances associated with this credit summary.
* **billingCurrency**: string (ReadOnly): The billing currency.
* **creditCurrency**: string (ReadOnly): The credit currency.
* **eTag**: string (ReadOnly): The eTag for the resource.
* **expiredCredit**: [Amount](#amount) (ReadOnly): Expired credit.
* **isEstimatedBalance**: bool (ReadOnly): If true, the listed details are based on an estimation and it will be subjected to change.
* **pendingCreditAdjustments**: [Amount](#amount) (ReadOnly): Pending credit adjustments.
* **pendingEligibleCharges**: [Amount](#amount) (ReadOnly): Pending eligible charges.
* **reseller**: [Reseller](#reseller) (ReadOnly): Credit's reseller.

## CurrentSpend
### Properties
* **amount**: int (ReadOnly): The total amount of cost which is being tracked by the budget.
* **unit**: string (ReadOnly): The unit of measure for the budget amount.

## ForecastSpend
### Properties
* **amount**: int (ReadOnly): The forecasted cost for the total time period which is being tracked by the budget. This value is only provided if the budget contains a forecast alert type.
* **unit**: string (ReadOnly): The unit of measure for the budget amount.

## MeterDetails
### Properties
* **meterCategory**: string (ReadOnly): The category of the meter, for example, 'Cloud services', 'Networking', etc..
* **meterLocation**: string (ReadOnly): The location in which the Azure service is available.
* **meterName**: string (ReadOnly): The name of the meter, within the given meter category
* **meterSubCategory**: string (ReadOnly): The subcategory of the meter, for example, 'A6 Cloud services', 'ExpressRoute (IXP)', etc..
* **pretaxStandardRate**: int (ReadOnly): The pretax listing price.
* **serviceName**: string (ReadOnly): The name of the service.
* **serviceTier**: string (ReadOnly): The service tier.
* **totalIncludedQuantity**: int (ReadOnly): The total included quantity associated with the offer.
* **unit**: string (ReadOnly): The unit in which the meter consumption is charged, for example, 'Hours', 'GB', etc.

## Notification
### Properties
* **contactEmails**: string[] (Required): Email addresses to send the budget notification to when the threshold is exceeded. Must have at least one contact email or contact group specified at the Subscription or Resource Group scopes. All other scopes must have at least one contact email specified.
* **contactGroups**: string[]: Action groups to send the budget notification to when the threshold is exceeded. Must be provided as a fully qualified Azure resource id. Only supported at Subscription or Resource Group scopes.
* **contactRoles**: string[]: Contact roles to send the budget notification to when the threshold is exceeded.
* **enabled**: bool (Required): The notification is enabled or not.
* **locale**: 'cs-cz' | 'da-dk' | 'de-de' | 'en-gb' | 'en-us' | 'es-es' | 'fr-fr' | 'hu-hu' | 'it-it' | 'ja-jp' | 'ko-kr' | 'nb-no' | 'nl-nl' | 'pl-pl' | 'pt-br' | 'pt-pt' | 'ru-ru' | 'sv-se' | 'tr-tr' | 'zh-cn' | 'zh-tw' | string: Language in which the recipient will receive the notification
* **operator**: 'EqualTo' | 'GreaterThan' | 'GreaterThanOrEqualTo' | string (Required): The comparison operator.
* **threshold**: int (Required): Threshold value associated with a notification. Notification is sent when the cost exceeded the threshold. It is always percent and has to be between 0 and 1000.
* **thresholdType**: 'Actual' | 'Forecasted' | string: The type of threshold

## PriceSheetModel
### Properties
* **download**: [MeterDetails](#meterdetails) (ReadOnly): Pricesheet download details.
* **nextLink**: string (ReadOnly): The link (url) to the next page of results.
* **pricesheets**: [PriceSheetProperties](#pricesheetproperties)[] (ReadOnly): Price sheet

## PriceSheetProperties
### Properties
* **billingPeriodId**: string (ReadOnly): The id of the billing period resource that the usage belongs to.
* **currencyCode**: string (ReadOnly): Currency Code
* **includedQuantity**: int (ReadOnly): Included quality for an offer
* **meterDetails**: [MeterDetails](#meterdetails) (ReadOnly): The details about the meter. By default this is not populated, unless it's specified in $expand.
* **meterId**: string (ReadOnly): The meter id (GUID)
* **offerId**: string (ReadOnly): Offer Id
* **partNumber**: string (ReadOnly): Part Number
* **savingsPlan**: [SavingsPlan](#savingsplan) (ReadOnly): SavingsPlan Details
* **unitOfMeasure**: string (ReadOnly): Unit of measure
* **unitPrice**: int (ReadOnly): Unit Price

## Reseller
### Properties
* **resellerDescription**: string (ReadOnly): The reseller property description.
* **resellerId**: string (ReadOnly): The reseller property ID.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SavingsPlan
### Properties
* **effectivePrice**: int (ReadOnly): SavingsPlan Effective Price
* **marketPrice**: int (ReadOnly): SavingsPlan Market Price
* **term**: string (ReadOnly): SavingsPlan term

