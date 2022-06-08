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
* **currentBalance**: [Amount](#amount) (ReadOnly): Object to represent monetary quantities.
* **estimatedBalance**: [Amount](#amount) (ReadOnly): Object to represent monetary quantities.

## CreditSummaryProperties
### Properties
* **balanceSummary**: [CreditBalanceSummary](#creditbalancesummary) (ReadOnly): Summary of credit balances.
* **expiredCredit**: [Amount](#amount) (ReadOnly): Object to represent monetary quantities.
* **pendingCreditAdjustments**: [Amount](#amount) (ReadOnly): Object to represent monetary quantities.
* **pendingEligibleCharges**: [Amount](#amount) (ReadOnly): Object to represent monetary quantities.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

