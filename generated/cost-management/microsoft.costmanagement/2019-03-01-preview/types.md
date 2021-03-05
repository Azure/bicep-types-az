# Microsoft.CostManagement @ 2019-03-01-preview

## Resource Microsoft.CostManagement/cloudConnectors@2019-03-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectorProperties
* **type**: 'Microsoft.CostManagement/cloudConnectors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CostManagement/showbackRules@2019-03-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ShowbackRuleProperties
* **type**: 'Microsoft.CostManagement/showbackRules' (ReadOnly, DeployTimeConstant)

## ConnectorProperties
### Properties
* **billingModel**: 'autoUpgrade' | 'expired' | 'premium' | 'trial'
* **collectionInfo**: ConnectorCollectionInfo (ReadOnly)
* **createdOn**: string (ReadOnly)
* **credentialsKey**: string
* **credentialsSecret**: string
* **daysTrialRemaining**: int (ReadOnly)
* **defaultManagementGroupId**: string
* **displayName**: string
* **externalBillingAccountId**: string (ReadOnly)
* **modifiedOn**: string (ReadOnly)
* **providerBillingAccountDisplayName**: string (ReadOnly)
* **providerBillingAccountId**: string (ReadOnly)
* **reportId**: string
* **status**: 'active' | 'error' | 'expired' | 'warning' (ReadOnly)
* **subscriptionId**: string

## ConnectorCollectionInfo
### Properties
* **error**: ConnectorCollectionErrorInfo
* **lastChecked**: string (ReadOnly)
* **lastUpdated**: string (ReadOnly)
* **sourceLastUpdated**: string (ReadOnly)

## ConnectorCollectionErrorInfo
### Properties
* **errorCode**: string (ReadOnly)
* **errorInnerMessage**: string (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **errorStartTime**: string (ReadOnly)

## ShowbackRuleProperties
* **Discriminator**: ruleType

### Base Properties
* **creationTime**: string (ReadOnly)
* **deprecationTime**: string (ReadOnly)
* **description**: string
* **modificationTime**: string (ReadOnly)
* **scopes**: Scope[]
* **status**: 'Active' | 'NotActive'
* **version**: int (ReadOnly)
### CostAllocationDetailsKind
#### Properties
* **details**: CostAllocationDetails
* **ruleType**: 'CostAllocation' (Required)

### CustomPriceDetailsKind
#### Properties
* **details**: CustomPriceDetails
* **ruleType**: 'CustomPrice' (Required)


## Scope
### Properties
* **childScope**: Scope
* **id**: string
* **name**: string
* **type**: string

## CostAllocationDetailsKind
### Properties
* **details**: CostAllocationDetails
* **ruleType**: 'CostAllocation' (Required)

## CostAllocationDetails
### Properties
* **policy**: 'Evenly' | 'Fixed' | 'Proportional'

## CustomPriceDetailsKind
### Properties
* **details**: CustomPriceDetails
* **ruleType**: 'CustomPrice' (Required)

## CustomPriceDetails
### Properties
* **benefits**: 'AHUB' | 'All' | 'None' | 'Reservations' | 'Sum'[]
* **markups**: Markup[]
* **pricesheet**: string

## Markup
### Properties
* **percentage**: string

