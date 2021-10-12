# Microsoft.Billing @ 2020-05-01

## Resource Microsoft.Billing/billingAccounts/billingProfiles@2020-05-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingProfileProperties](#billingprofileproperties): The properties of the billing profile.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/instructions@2020-05-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InstructionProperties](#instructionproperties): A billing instruction used during invoice generation.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/instructions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2020-05-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties): The properties of an invoice section.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/policies@2020-05-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyProperties](#policyproperties): The properties of a policy.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/customers/policies@2020-05-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerPolicyProperties](#customerpolicyproperties): The properties of a customer's policy.
* **type**: 'Microsoft.Billing/billingAccounts/customers/policies' (ReadOnly, DeployTimeConstant): The resource type

## BillingProfileProperties
### Properties
* **billingRelationshipType**: 'CSPPartner' | 'Direct' | 'IndirectCustomer' | 'IndirectPartner' (ReadOnly): Identifies which services and purchases are paid by a billing profile.
* **billTo**: [AddressDetails](#addressdetails): Address details.
* **currency**: string (ReadOnly): The currency in which the charges for the billing profile are billed.
* **displayName**: string: The name of the billing profile.
* **enabledAzurePlans**: [AzurePlan](#azureplan)[]: Information about the enabled azure plans.
* **hasReadAccess**: bool (ReadOnly): Indicates whether user has read access to the billing profile.
* **indirectRelationshipInfo**: [IndirectRelationshipInfo](#indirectrelationshipinfo) (ReadOnly): The billing profile details of the partner of the customer for an indirect motion.
* **invoiceDay**: int (ReadOnly): The day of the month when the invoice for the billing profile is generated.
* **invoiceEmailOptIn**: bool: Flag controlling whether the invoices for the billing profile are sent through email.
* **invoiceSections**: [InvoiceSectionsOnExpand](#invoicesectionsonexpand): The invoice sections associated to the billing profile. By default this is not populated, unless it's specified in $expand.
* **poNumber**: string: The purchase order name that will appear on the invoices generated for the billing profile.
* **spendingLimit**: 'Off' | 'On' (ReadOnly): The billing profile spending limit.
* **status**: 'Active' | 'Disabled' | 'Warned' (ReadOnly): The status of the billing profile.
* **statusReasonCode**: 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' (ReadOnly): Reason for the specified billing profile status.
* **systemId**: string (ReadOnly): The system generated unique identifier for a billing profile.
* **tags**: [BillingProfilePropertiesTags](#billingprofilepropertiestags): Tags of billing profiles.
* **targetClouds**: 'USGov' | 'USNat' | 'USSec'[] (ReadOnly): Identifies the cloud environments that are associated with a billing profile. This is a system managed optional field and gets updated as the billing profile gets associated with accounts in various clouds.

## AddressDetails
### Properties
* **addressLine1**: string (Required): Address line 1.
* **addressLine2**: string: Address line 2.
* **addressLine3**: string: Address line 3.
* **city**: string: Address city.
* **companyName**: string: Company name.
* **country**: string (Required): Country code uses ISO2, 2-digit format.
* **district**: string: Address district.
* **email**: string: Email address.
* **firstName**: string: First name.
* **lastName**: string: Last name.
* **middleName**: string: Middle name.
* **phoneNumber**: string: Phone number.
* **postalCode**: string: Postal code.
* **region**: string: Address region.

## AzurePlan
### Properties
* **skuDescription**: string (ReadOnly): The sku description.
* **skuId**: string: The sku id.

## IndirectRelationshipInfo
### Properties
* **billingAccountName**: string: The billing account name of the partner or the customer for an indirect motion.
* **billingProfileName**: string: The billing profile name of the partner or the customer for an indirect motion.
* **displayName**: string: The display name of the partner or customer for an indirect motion.

## InvoiceSectionsOnExpand
### Properties
* **hasMoreResults**: bool (ReadOnly): Indicates whether there are more invoice sections than the ones listed in this collection. The collection lists a maximum of 50 invoice sections. To get all invoice sections, use the list invoice sections API.
* **value**: [InvoiceSection](#invoicesection)[]: The invoice sections associated to the billing profile.

## InvoiceSection
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties): The properties of an invoice section.
* **type**: string (ReadOnly): Resource type.

## InvoiceSectionProperties
### Properties
* **displayName**: string: The name of the invoice section.
* **labels**: [InvoiceSectionPropertiesLabels](#invoicesectionpropertieslabels): Dictionary of metadata associated with the invoice section.
* **state**: 'Active' | 'Restricted' (ReadOnly): Identifies the state of an invoice section.
* **systemId**: string (ReadOnly): The system generated unique identifier for an invoice section.
* **tags**: [InvoiceSectionPropertiesTags](#invoicesectionpropertiestags): Dictionary of metadata associated with the invoice section. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **targetCloud**: 'USGov' | 'USNat' | 'USSec' (ReadOnly): Possible cloud environments.

## InvoiceSectionPropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InvoiceSectionPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BillingProfilePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InstructionProperties
### Properties
* **amount**: int (Required): The amount budgeted for this billing instruction.
* **creationDate**: string: The date this billing instruction was created.
* **endDate**: string (Required): The date this billing instruction is no longer in effect.
* **startDate**: string (Required): The date this billing instruction goes into effect.

## PolicyProperties
### Properties
* **marketplacePurchases**: 'AllAllowed' | 'NotAllowed' | 'OnlyFreeAllowed': The policy that controls whether Azure marketplace purchases are allowed for a billing profile.
* **reservationPurchases**: 'Allowed' | 'NotAllowed': The policy that controls whether Azure reservation purchases are allowed for a billing profile.
* **viewCharges**: 'Allowed' | 'NotAllowed': The policy that controls whether users with Azure RBAC access to a subscription can view its charges.

## CustomerPolicyProperties
### Properties
* **viewCharges**: 'Allowed' | 'NotAllowed': The policy that controls whether the users in customer's organization can view charges at pay-as-you-go prices.

