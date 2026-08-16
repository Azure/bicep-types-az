# Microsoft.Consumption @ 2018-11-01-preview

## Resource Microsoft.Consumption/credits@2018-11-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'balanceSummary' (Required, DeployTimeConstant): The resource name
* **properties**: [CreditSummaryProperties](#creditsummaryproperties) (ReadOnly): The properties of the credit summary.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Consumption/credits' (ReadOnly, DeployTimeConstant): The resource type

## Function download (Microsoft.Consumption/billingAccounts/invoices/pricesheet@2018-11-01-preview)
* **Resource**: Microsoft.Consumption/billingAccounts/invoices/pricesheet
* **ApiVersion**: 2018-11-01-preview
* **Output**: [PricesheetDownloadResponse](#pricesheetdownloadresponse)

## Function download (Microsoft.Consumption/billingAccounts/billingProfiles/pricesheet@2018-11-01-preview)
* **Resource**: Microsoft.Consumption/billingAccounts/billingProfiles/pricesheet
* **ApiVersion**: 2018-11-01-preview
* **Output**: [PricesheetDownloadResponse](#pricesheetdownloadresponse)

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

## DownloadUrl
### Properties
* **downloadUrl**: string (ReadOnly): The URL to the PDF file.
* **expiryTime**: string (ReadOnly): The time in UTC at which this download URL will expire.

## PricesheetDownloadResponse
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [DownloadUrl](#downloadurl): A secure URL that can be used to download a an entity until the URL expires.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags.
* **type**: string (ReadOnly): Resource type.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

