# Microsoft.Billing @ 2020-05-01

## Microsoft.Billing/billingAccounts/billingProfiles/instructions
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InstructionProperties
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/instructions' (ReadOnly, DeployTimeConstant)

## InstructionProperties
### Properties
* **amount**: int (Required)
* **creationDate**: string
* **endDate**: string (Required)
* **startDate**: string (Required)

## Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InvoiceSectionProperties
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections' (ReadOnly, DeployTimeConstant)

## InvoiceSectionProperties
### Properties
* **displayName**: string
* **labels**: Dictionary<string,String>
* **state**: 'Active' | 'Restricted' (ReadOnly)
* **systemId**: string (ReadOnly)
* **targetCloud**: 'USGov' | 'USNat' | 'USSec' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Billing/billingAccounts/billingProfiles/policies
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyProperties
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant)

## PolicyProperties
### Properties
* **marketplacePurchases**: 'AllAllowed' | 'NotAllowed' | 'OnlyFreeAllowed'
* **reservationPurchases**: 'Allowed' | 'NotAllowed'
* **viewCharges**: 'Allowed' | 'NotAllowed'

## Microsoft.Billing/billingAccounts/billingProfiles
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BillingProfileProperties
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles' (ReadOnly, DeployTimeConstant)

## BillingProfileProperties
### Properties
* **billTo**: AddressDetails
* **billingRelationshipType**: 'CSPPartner' | 'Direct' | 'IndirectCustomer' | 'IndirectPartner' (ReadOnly)
* **currency**: string (ReadOnly)
* **displayName**: string
* **enabledAzurePlans**: AzurePlan[]
* **hasReadAccess**: bool (ReadOnly)
* **indirectRelationshipInfo**: IndirectRelationshipInfo (ReadOnly)
* **invoiceDay**: int (ReadOnly)
* **invoiceEmailOptIn**: bool
* **invoiceSections**: InvoiceSectionsOnExpand
* **poNumber**: string
* **spendingLimit**: 'Off' | 'On' (ReadOnly)
* **status**: 'Active' | 'Disabled' | 'Warned' (ReadOnly)
* **statusReasonCode**: 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' (ReadOnly)
* **systemId**: string (ReadOnly)
* **targetClouds**: 'USGov' | 'USNat' | 'USSec'[] (ReadOnly)

## AddressDetails
### Properties
* **addressLine1**: string (Required)
* **addressLine2**: string
* **addressLine3**: string
* **city**: string
* **companyName**: string
* **country**: string (Required)
* **district**: string
* **email**: string
* **firstName**: string
* **lastName**: string
* **phoneNumber**: string
* **postalCode**: string
* **region**: string

## AzurePlan
### Properties
* **skuDescription**: string (ReadOnly)
* **skuId**: string

## IndirectRelationshipInfo
### Properties
* **billingAccountName**: string
* **billingProfileName**: string
* **displayName**: string

## InvoiceSectionsOnExpand
### Properties
* **hasMoreResults**: bool (ReadOnly)
* **value**: InvoiceSection[]

## InvoiceSection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: InvoiceSectionProperties
* **type**: string (ReadOnly)

## Microsoft.Billing/billingAccounts/customers/policies
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomerPolicyProperties
* **type**: 'Microsoft.Billing/billingAccounts/customers/policies' (ReadOnly, DeployTimeConstant)

## CustomerPolicyProperties
### Properties
* **viewCharges**: 'Allowed' | 'NotAllowed'

