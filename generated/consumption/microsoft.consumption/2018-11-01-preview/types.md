# Microsoft.Consumption @ 2018-11-01-preview

## Resource Microsoft.Consumption/credits@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'balanceSummary' (Required, DeployTimeConstant): The resource name
* **properties**: [CreditSummaryProperties](#creditsummaryproperties) (ReadOnly): The properties of the credit summary.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Consumption/credits' (ReadOnly, DeployTimeConstant): The resource type

## Amount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): Amount value.

## CreditBalanceSummary
### Properties
* **currentBalance**: [Amount](#amount) (ReadOnly): Current balance.
* **estimatedBalance**: [Amount](#amount) (ReadOnly): Estimated balance.

## CreditSummaryProperties
### Properties
* **balanceSummary**: [CreditBalanceSummary](#creditbalancesummary): Summary of balances associated with this credit summary.
* **expiredCredit**: [Amount](#amount) (ReadOnly): Expired Credit.
* **pendingCreditAdjustments**: [Amount](#amount) (ReadOnly): Pending Credit Adjustments.
* **pendingEligibleCharges**: [Amount](#amount) (ReadOnly): Pending Eligible Charges.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

