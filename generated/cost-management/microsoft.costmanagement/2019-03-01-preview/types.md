# Microsoft.CostManagement @ 2019-03-01-preview

## Resource Microsoft.CostManagement/cloudConnectors@2019-03-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Connector kind (eg aws)
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectorProperties](#connectorproperties): Connector properties
* **type**: 'Microsoft.CostManagement/cloudConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/externalSubscriptions@2019-03-01-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.CostManagement/externalSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CostManagement/showbackRules@2019-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ShowbackRuleProperties](#showbackruleproperties): Showback rule properties
* **type**: 'Microsoft.CostManagement/showbackRules' (ReadOnly, DeployTimeConstant): The resource type

## ConnectorCollectionErrorInfo
### Properties
* **errorCode**: string (ReadOnly): Short error code
* **errorInnerMessage**: string (ReadOnly): External Provider error message
* **errorMessage**: string (ReadOnly): Detailed error message
* **errorStartTime**: string (ReadOnly): Time the error started occurring (Last time error occurred in lastChecked)

## ConnectorCollectionInfo
### Properties
* **error**: [ConnectorCollectionErrorInfo](#connectorcollectionerrorinfo): Error information of last collection
* **lastChecked**: string (ReadOnly): Last time the data acquisition process initiated connecting to the external provider
* **lastUpdated**: string (ReadOnly): Last time the external data was updated into Azure
* **sourceLastUpdated**: string (ReadOnly): Source timestamp of external data currently available in Azure (eg AWS last processed CUR file timestamp)

## ConnectorProperties
### Properties
* **billingModel**: 'autoUpgrade' | 'expired' | 'premium' | 'trial' | string: Connector billing model
* **collectionInfo**: [ConnectorCollectionInfo](#connectorcollectioninfo) (ReadOnly): Collection information
* **createdOn**: string (ReadOnly): Connector definition creation datetime
* **credentialsKey**: string: Credentials authentication key (eg AWS ARN)
* **credentialsSecret**: string (WriteOnly): Credentials secret (eg AWS ExternalId)
* **daysTrialRemaining**: int (ReadOnly): Number of days remaining of trial
* **defaultManagementGroupId**: string: Default ManagementGroupId
* **displayName**: string: Connector DisplayName
* **externalBillingAccountId**: string (ReadOnly): Associated ExternalBillingAccountId
* **modifiedOn**: string (ReadOnly): Connector last modified datetime
* **providerBillingAccountDisplayName**: string (ReadOnly): The display name of the providerBillingAccountId as defined on the external provider
* **providerBillingAccountId**: string (ReadOnly): Connector providerBillingAccountId, determined from credentials (eg AWS Consolidated account number)
* **reportId**: string: Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
* **status**: 'active' | 'error' | 'expired' | 'warning' | string (ReadOnly): Connector status
* **subscriptionId**: string: Billing SubscriptionId

## CostAllocationDetails
### Properties
* **policy**: 'Evenly' | 'Fixed' | 'Proportional' | string: Cost allocation policy.

## CustomPriceDetails
### Properties
* **benefits**: 'AHUB' | 'All' | 'None' | 'Reservations' | 'Sum' | string[]: Array of benefits.
* **markups**: [Markup](#markup)[]: List of markups.
* **pricesheet**: string

## Markup
### Properties
* **percentage**: string

## Scope
### Properties
* **childScope**: [Scope](#scope): The Scope model definition
* **id**: string: Scope id
* **name**: string: Scope name
* **type**: string: Scope type

## ShowbackRuleProperties
* **Discriminator**: ruleType

### Base Properties
* **creationTime**: string (ReadOnly): The time when the showback rule was created.
* **deprecationTime**: string (ReadOnly): The current time when showback rule was deprecate.
* **description**: string: Description of a showback rule.
* **modificationTime**: string (ReadOnly): The current status when showback rule was modified.
* **scopes**: [Scope](#scope)[]: List of authorized assigned scopes.
* **status**: 'Active' | 'NotActive' | string: The current status of the showback rule.
* **version**: int (ReadOnly): The current version of showback rule.
### CostAllocationDetailsKind
#### Properties
* **details**: [CostAllocationDetails](#costallocationdetails): The CostAllocation properties to validate.
* **ruleType**: 'CostAllocation' (Required): The rule type of the showback rule solution.

### CustomPriceDetailsKind
#### Properties
* **details**: [CustomPriceDetails](#custompricedetails): The Custom price properties to validate.
* **ruleType**: 'CustomPrice' (Required): The rule type of the showback rule solution.


