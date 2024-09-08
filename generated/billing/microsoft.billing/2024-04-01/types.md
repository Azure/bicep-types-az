# Microsoft.Billing @ 2024-04-01

## Resource Microsoft.Billing/billingAccounts@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^([0-9]+|([Pp][Cc][Nn]\.[A-Za-z0-9]+)|[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}(:[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}_[0-9]{4}(-[0-9]{2}){2})?)$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingAccountProperties](#billingaccountproperties) (ReadOnly): A billing account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/agreements@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{1,12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgreementProperties](#agreementproperties) (ReadOnly): An agreement.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/associatedTenants@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssociatedTenantProperties](#associatedtenantproperties): An associated tenant.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/associatedTenants' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/availableBalance@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AvailableBalanceProperties](#availablebalanceproperties) (ReadOnly): The Available Credit or Payment on Account Balance. The credit balance can be used to settle due or past due invoices.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/availableBalance' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z\d-_]{1,128}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingProfileProperties](#billingprofileproperties): A billing profile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/availableBalance@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AvailableBalanceProperties](#availablebalanceproperties) (ReadOnly): The Available Credit or Payment on Account Balance. The credit balance can be used to settle due or past due invoices.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/availableBalance' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/billingRoleAssignments@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12}(_[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12})?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties) (ReadOnly): The properties of the billing role assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/billingRoleDefinitions@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of a role definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/billingSubscriptions@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingSubscriptionProperties](#billingsubscriptionproperties) (ReadOnly): The properties of a(n) BillingSubscription
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/billingSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/customers@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z\d-_]{1,128}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerProperties](#customerproperties) (ReadOnly): A partner's customer.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/customers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/customers/billingRoleAssignments@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12}(_[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12})?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties) (ReadOnly): The properties of the billing role assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/customers/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/customers/billingRoleDefinitions@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of a role definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/customers/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/customers/policies@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerPolicyProperties](#customerpolicyproperties): A policy at customer scope.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/customers/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/customers/transfers@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PartnerInitiateTransferPropertiesOrPartnerTransferProperties](#partnerinitiatetransferpropertiesorpartnertransferproperties): Request parameters to initiate partner transfer.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/customers/transfers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z\d-_]{1,128}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties): An invoice section.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleAssignments@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12}(_[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12})?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties) (ReadOnly): The properties of the billing role assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleDefinitions@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of a role definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/transfers@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InitiateTransferPropertiesOrTransferProperties](#initiatetransferpropertiesortransferproperties): Request parameters to initiate transfer.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/transfers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/paymentMethodLinks@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PaymentMethodLinkProperties](#paymentmethodlinkproperties) (ReadOnly): Payment method link properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/paymentMethodLinks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/policies@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [BillingProfilePolicyProperties](#billingprofilepolicyproperties): A policy at billing profile scope.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingRoleAssignments@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12}(_[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12})?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the billing role assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingRoleDefinitions@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of a role definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingSubscriptionAliases@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingSubscriptionAliasProperties](#billingsubscriptionaliasproperties): The properties of a(n) BillingSubscriptionAlias
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingSubscriptionAliases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingSubscriptions@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingSubscriptionProperties](#billingsubscriptionproperties) (ReadOnly): The properties of a(n) BillingSubscription
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingSubscriptions/invoices@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(H[0-9]-[A-Z0-9]+)$|^(?:([GHT]|HT){1}[A-Z0-9]{9})$|^(?:[D]{1}[A-Z0-9]{9})$|^(?:E{1}[B-Z0-9]{1}[A-Z0-9]{8})$|^(?:EA[A-Z0-9]{8})$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceProperties](#invoiceproperties) (ReadOnly): An invoice.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/billingSubscriptions/invoices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/customers@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z\d-_]{1,128}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerProperties](#customerproperties) (ReadOnly): A partner's customer.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/customers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/customers/policies@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerPolicyProperties](#customerpolicyproperties): A policy at customer scope.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/customers/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/departments@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z\d-_]{1,128}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DepartmentProperties](#departmentproperties) (ReadOnly): Optional grouping of enrollment accounts to segment costs into logical groupings and set budgets.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/departments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12}(_[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12})?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the billing role assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/departments/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/departments/billingRoleDefinitions@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of a role definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/departments/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/departments/enrollmentAccounts@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z\d-_]{1,128}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnrollmentAccountProperties](#enrollmentaccountproperties) (ReadOnly): It is an organizational hierarchy within a billing account to administer and manage azure costs.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/departments/enrollmentAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z\d-_]{1,128}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EnrollmentAccountProperties](#enrollmentaccountproperties) (ReadOnly): It is an organizational hierarchy within a billing account to administer and manage azure costs.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12}(_[a-fA-F0-9]{8}[-]?([a-fA-F0-9]{4}[-]?){3}[a-fA-F0-9]{12})?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the billing role assignment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleDefinitions@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of a role definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/invoices@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(H[0-9]-[A-Z0-9]+)$|^(?:([GHT]|HT){1}[A-Z0-9]{9})$|^(?:[D]{1}[A-Z0-9]{9})$|^(?:E{1}[B-Z0-9]{1}[A-Z0-9]{8})$|^(?:EA[A-Z0-9]{8})$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceProperties](#invoiceproperties) (ReadOnly): An invoice.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/invoices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/paymentMethods@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PaymentMethodProperties](#paymentmethodproperties) (ReadOnly): Payment method properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/paymentMethods' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/policies@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [BillingAccountPolicyProperties](#billingaccountpolicyproperties): A policy at billing account scope.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/products@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProductProperties](#productproperties) (ReadOnly): A product.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/products' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/reservationOrders@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationOrderProperty](#reservationorderproperty) (ReadOnly): The properties associated to this reservation order
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags) (ReadOnly): Tags for this reservation
* **type**: 'Microsoft.Billing/billingAccounts/reservationOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/reservationOrders/reservations@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: int (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The location of the reservation.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationProperty](#reservationproperty) (ReadOnly): The properties associated to this reservation
* **sku**: [ReservationSkuProperty](#reservationskuproperty) (ReadOnly): The sku information associated to this reservation
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags) (ReadOnly): Tags for this reservation
* **type**: 'Microsoft.Billing/billingAccounts/reservationOrders/reservations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/savingsPlanOrders@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavingsPlanOrderModelProperties](#savingsplanordermodelproperties) (ReadOnly): Savings plan order properties
* **sku**: [Sku](#sku) (ReadOnly): Savings plan SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/savingsPlanOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/savingsPlanOrders/savingsPlans@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavingsPlanModelProperties](#savingsplanmodelproperties) (ReadOnly): Savings plan properties
* **sku**: [Sku](#sku) (ReadOnly): Savings plan SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingAccounts/savingsPlanOrders/savingsPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingProperty@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [BillingPropertyProperties](#billingpropertyproperties) (ReadOnly): A billing property.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingProperty' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingRequests@2024-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRequestProperties](#billingrequestproperties): A request submitted by a user to manage billing. Users with an owner role on the scope can approve or decline these requests.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/billingRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/paymentMethods@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PaymentMethodProperties](#paymentmethodproperties) (ReadOnly): Payment method properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/paymentMethods' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/policies@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionPolicyProperties](#subscriptionpolicyproperties) (ReadOnly): A policy at subscription scope.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/transfers@2024-04-01 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RecipientTransferProperties](#recipienttransferproperties) (ReadOnly): Details of the transfer.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ProxyResourceWithTags](#proxyresourcewithtags) (ReadOnly): Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **type**: 'Microsoft.Billing/transfers' (ReadOnly, DeployTimeConstant): The resource type

## Function listInvoiceSectionsWithCreateSubscriptionPermission (Microsoft.Billing/billingAccounts@2024-04-01)
* **Resource**: Microsoft.Billing/billingAccounts
* **ApiVersion**: 2024-04-01
* **Output**: [InvoiceSectionWithCreateSubPermissionListResult](#invoicesectionwithcreatesubpermissionlistresult)

## AgreementProperties
### Properties
* **acceptanceMode**: 'ClickToAccept' | 'ESignEmbedded' | 'ESignOffline' | 'Implicit' | 'Offline' | 'Other' | 'PhysicalSign' | string (ReadOnly): The mode of acceptance for an agreement.
* **agreementLink**: string (ReadOnly): The URL to download the agreement.
* **billingProfileInfo**: [BillingProfileInfo](#billingprofileinfo)[] (ReadOnly): The list of billing profiles associated with agreement and present only for specific agreements.
* **category**: 'AffiliatePurchaseTerms' | 'IndirectForGovernmentAgreement' | 'MicrosoftCustomerAgreement' | 'MicrosoftPartnerAgreement' | 'Other' | 'UKCloudComputeFramework' | string (ReadOnly): The category of the agreement.
* **displayName**: string (ReadOnly): The name of the agreement signed by a customer.
* **effectiveDate**: string (ReadOnly): The date from which the agreement is effective.
* **expirationDate**: string (ReadOnly): The date when the agreement expires.
* **leadBillingAccountName**: string (ReadOnly): The ID of the lead billing account if this agreement is part of the Customer Affiliate Purchase Terms.
* **participants**: [Participant](#participant)[] (ReadOnly): The list of participants that participates in acceptance of an agreement.
* **status**: string (ReadOnly): The current status of the agreement.

## Amount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## AppliedScopeProperties
### Properties
* **displayName**: string: Display name
* **managementGroupId**: string: Fully-qualified identifier of the management group where the benefit is applied.
* **resourceGroupId**: string: Fully-qualified identifier of the resource group where the benefit is applied.
* **subscriptionId**: string: Fully-qualified identifier of the subscription where the benefit is applied.
* **tenantId**: string: Tenant ID where the savings plan where the benefit is applied.

## AssociatedTenantProperties
### Properties
* **billingManagementState**: 'Active' | 'NotAllowed' | 'Other' | 'Revoked' | string: The state determines whether users from the associated tenant can be assigned roles for commerce activities like viewing and downloading invoices, managing payments, and making purchases.
* **displayName**: string: The name of the associated tenant.
* **provisioningBillingRequestId**: string (ReadOnly): The unique identifier for the billing request that is created when enabling provisioning for an associated tenant.
* **provisioningManagementState**: 'Active' | 'BillingRequestDeclined' | 'BillingRequestExpired' | 'NotRequested' | 'Other' | 'Pending' | 'Revoked' | string: The state determines whether subscriptions and licenses can be provisioned in the associated tenant. It can be set to 'Pending' to initiate a billing request.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.
* **tenantId**: string: The ID that uniquely identifies a tenant.

## AvailableBalanceProperties
### Properties
* **amount**: [AvailableBalancePropertiesAmount](#availablebalancepropertiesamount): Credit amount for immediate payment.
* **paymentsOnAccount**: [PaymentOnAccount](#paymentonaccount)[] (ReadOnly): The list of payments on accounts.
* **totalPaymentsOnAccount**: [AvailableBalancePropertiesTotalPaymentsOnAccount](#availablebalancepropertiestotalpaymentsonaccount): Total amount of payments on accounts.

## AvailableBalancePropertiesAmount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## AvailableBalancePropertiesTotalPaymentsOnAccount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## AzurePlan
### Properties
* **productId**: string: The ID that uniquely identifies a product.
* **skuDescription**: string: The sku description.
* **skuId**: string: The ID that uniquely identifies a sku.

## Beneficiary
### Properties
* **objectId**: string: The ID that uniquely identifies a user in a tenant.
* **tenantId**: string: The ID that uniquely identifies a tenant.

## BillingAccountPolicyProperties
### Properties
* **enterpriseAgreementPolicies**: [BillingAccountPolicyPropertiesEnterpriseAgreementPolicies](#billingaccountpolicypropertiesenterpriseagreementpolicies): The policies for Enterprise Agreement enrollments.
* **marketplacePurchases**: 'AllAllowed' | 'Disabled' | 'NotAllowed' | 'OnlyFreeAllowed' | 'Other' | string: The policy that controls whether Azure marketplace purchases are allowed.
* **policies**: [PolicySummary](#policysummary)[]: List of all policies defined at the billing scope.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.
* **reservationPurchases**: 'Allowed' | 'Disabled' | 'NotAllowed' | 'Other' | string: The policy that controls whether Azure reservation purchases are allowed.
* **savingsPlanPurchases**: 'Allowed' | 'Disabled' | 'NotAllowed' | 'Other' | string: The policy that controls whether users with Azure savings plan purchase are allowed.

## BillingAccountPolicyPropertiesEnterpriseAgreementPolicies
### Properties
* **accountOwnerViewCharges**: 'Allowed' | 'Disabled' | 'NotAllowed' | 'Other' | string: The policy that controls whether account owner can view charges.
* **authenticationType**: 'MicrosoftAccountOnly' | 'MixedAccount' | 'OrganizationalAccountCrossTenant' | 'OrganizationalAccountOnly' | 'Other' | string: The state showing the enrollment auth level.
* **departmentAdminViewCharges**: 'Allowed' | 'Disabled' | 'NotAllowed' | 'Other' | string: The policy that controls whether department admin can view charges.

## BillingAccountProperties
### Properties
* **accountStatus**: 'Active' | 'Deleted' | 'Disabled' | 'Expired' | 'Extended' | 'New' | 'Other' | 'Pending' | 'Terminated' | 'Transferred' | 'UnderReview' | string (ReadOnly): The current status of the billing account.
* **accountStatusReasonCode**: 'Expired' | 'ManuallyTerminated' | 'Other' | 'TerminateProcessing' | 'Transferred' | 'UnusualActivity' | string (ReadOnly): Reason for the specified billing account status.
* **accountSubType**: 'Enterprise' | 'Individual' | 'None' | 'Other' | 'Professional' | string (ReadOnly): The tier of the account.
* **accountType**: 'Business' | 'ClassicPartner' | 'Enterprise' | 'Individual' | 'Internal' | 'Other' | 'Partner' | 'Reseller' | 'Tenant' | string (ReadOnly): The type of customer.
* **agreementType**: 'EnterpriseAgreement' | 'MicrosoftCustomerAgreement' | 'MicrosoftOnlineServicesProgram' | 'MicrosoftPartnerAgreement' | 'Other' | string (ReadOnly): The type of agreement.
* **billingRelationshipTypes**: ('CSPCustomer' | 'CSPPartner' | 'Direct' | 'IndirectCustomer' | 'IndirectPartner' | 'Other' | string)[] (ReadOnly): Identifies the billing relationships represented by a billing account. The billing relationship may be between Microsoft, the customer, and/or a third-party.
* **displayName**: string: The billing account name.
* **enrollmentDetails**: [BillingAccountPropertiesEnrollmentDetails](#billingaccountpropertiesenrollmentdetails): The properties of an enrollment.
* **hasNoBillingProfiles**: bool: Indicates whether or not the billing account has any billing profiles.
* **hasReadAccess**: bool: Indicates whether user has read access to the billing account.
* **notificationEmailAddress**: string: Notification email address for legacy account. Available for agreement type Microsoft Online Services Program.
* **primaryBillingTenantId**: string: The tenant that was used to set up the billing account. By default, only users from this tenant can get role assignments on the billing account and all purchases are provisioned in this tenant.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.
* **qualifications**: string[] (ReadOnly): Qualifications for pricing on a billing account. Values may be Commercial, Education, Charity or Government.
* **registrationNumber**: [BillingAccountPropertiesRegistrationNumber](#billingaccountpropertiesregistrationnumber): Describes the registration number of the organization linked with the billing account.
* **soldTo**: [BillingAccountPropertiesSoldTo](#billingaccountpropertiessoldto): The address of the individual or organization that is responsible for the billing account.
* **taxIds**: [TaxIdentifier](#taxidentifier)[]: A list of tax identifiers for the billing account.

## BillingAccountPropertiesEnrollmentDetails
### Properties
* **billingCycle**: string (ReadOnly): The billing cycle for the enrollment.
* **channel**: string (ReadOnly): The channel type of the enrollment.
* **cloud**: string (ReadOnly): The cloud of the enrollment.
* **countryCode**: string (ReadOnly): The country code of the enrollment.
* **currency**: string (ReadOnly): The billing currency for the enrollment.
* **endDate**: string: The end date of the enrollment.
* **extendedTermOption**: 'Opted-In' | 'Opted-Out' | 'Other' | string (ReadOnly): The billing account extension opted by the company.
* **indirectRelationshipInfo**: [EnrollmentDetailsIndirectRelationshipInfo](#enrollmentdetailsindirectrelationshipinfo): The properties of an enrollment which are applicable only for indirect enrollments.
* **invoiceRecipient**: string (ReadOnly): The contact who receives invoices of the enrollment.
* **language**: string (ReadOnly): The language for the enrollment.
* **markupStatus**: 'Disabled' | 'Locked' | 'Other' | 'Preview' | 'Published' | string (ReadOnly): Markup status of enrollment, applicable only for indirect enrollments.
* **poNumber**: string: The purchase order number of the enrollment.
* **startDate**: string: The start date of the enrollment.
* **supportCoverage**: string (ReadOnly): The support coverage period for the enrollment.
* **supportLevel**: 'Developer' | 'Other' | 'Pro-Direct' | 'Standard' | string (ReadOnly): The support level offer associated with an enrollment.

## BillingAccountPropertiesRegistrationNumber
### Properties
* **id**: string: The unique identification number of the organization linked with the billing account.
* **required**: bool (ReadOnly): Identifies if the registration number is required for the billing account.
* **type**: string[] (ReadOnly): The types of registration number allowed based on the country of the billing account.

## BillingAccountPropertiesSoldTo
### Properties
* **addressLine1**: string {minLength: 1} (Required): Address line 1.
* **addressLine2**: string: Address line 2.
* **addressLine3**: string: Address line 3.
* **city**: string: Address city.
* **companyName**: string: Company name. Optional for MCA Individual (Pay-as-you-go).
* **country**: string {minLength: 1} (Required): Country code uses ISO 3166-1 Alpha-2 format.
* **district**: string: Address district.
* **email**: string: Email address.
* **firstName**: string: First name. Optional for MCA Enterprise.
* **isValidAddress**: bool: Indicates if the address is incomplete.
* **lastName**: string: Last name. Optional for MCA Enterprise.
* **middleName**: string: Middle name.
* **phoneNumber**: string: Phone number.
* **postalCode**: string: Postal code.
* **region**: string: Address region.

## BillingPermission
### Properties
* **actions**: string[] (ReadOnly): The set of actions that the caller is allowed to perform.
* **notActions**: string[] (ReadOnly): The set of actions that the caller is not allowed to perform.

## BillingPlanInformation
### Properties
* **nextPaymentDueDate**: string: For recurring billing plans, indicates the date when next payment will be processed. Null when total is paid off.
* **pricingCurrencyTotal**: [Price](#price): Amount of money to be paid for the Order. Tax is not included.
* **startDate**: string: Date when the billing plan has started.
* **transactions**: [PaymentDetail](#paymentdetail)[]

## BillingProfileInfo
### Properties
* **billingAccountId**: string: The fully qualified ID that uniquely identifies a billing account.
* **billingProfileDisplayName**: string: The name of the billing profile.
* **billingProfileId**: string: The friendly ID that uniquely identifies a billing profile.
* **billingProfileSystemId**: string: The fully qualified ID that uniquely identifies a billing profile.
* **indirectRelationshipOrganizationName**: string: Billing account name. Available for a specific type of agreement.

## BillingProfilePolicyProperties
### Properties
* **enterpriseAgreementPolicies**: [BillingProfilePolicyPropertiesEnterpriseAgreementPolicies](#billingprofilepolicypropertiesenterpriseagreementpolicies): The policies for Enterprise Agreement enrollments.
* **invoiceSectionLabelManagement**: 'Allowed' | 'NotAllowed' | 'Other' | string: The policy that controls invoice section label management at invoice section scope. This is allowed by default.
* **marketplacePurchases**: 'AllAllowed' | 'Disabled' | 'NotAllowed' | 'OnlyFreeAllowed' | 'Other' | string: The policy that controls whether Azure marketplace purchases are allowed.
* **policies**: [PolicySummary](#policysummary)[]: List of all policies defined at the billing scope.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.
* **reservationPurchases**: 'Allowed' | 'Disabled' | 'NotAllowed' | 'Other' | string: The policy that controls whether Azure reservation purchases are allowed.
* **savingsPlanPurchases**: 'Allowed' | 'Disabled' | 'NotAllowed' | 'Other' | string: The policy that controls whether users with Azure savings plan purchase are allowed.
* **viewCharges**: 'Allowed' | 'NotAllowed' | 'Other' | string: The policy that controls whether the users in customer's organization can view charges at pay-as-you-go prices.

## BillingProfilePolicyPropertiesEnterpriseAgreementPolicies
### Properties
* **accountOwnerViewCharges**: 'Allowed' | 'Disabled' | 'NotAllowed' | 'Other' | string: The policy that controls whether account owner can view charges.
* **authenticationType**: 'MicrosoftAccountOnly' | 'MixedAccount' | 'OrganizationalAccountCrossTenant' | 'OrganizationalAccountOnly' | 'Other' | string: The state showing the enrollment auth level.
* **departmentAdminViewCharges**: 'Allowed' | 'Disabled' | 'NotAllowed' | 'Other' | string: The policy that controls whether department admin can view charges.

## BillingProfileProperties
### Properties
* **billingRelationshipType**: 'CSPCustomer' | 'CSPPartner' | 'Direct' | 'IndirectCustomer' | 'IndirectPartner' | 'Other' | string (ReadOnly): Identifies the billing relationship represented by the billing profile. The billing relationship may be between Microsoft, the customer, and/or a third-party.
* **billTo**: [BillingProfilePropertiesBillTo](#billingprofilepropertiesbillto): Billing address.
* **currency**: string (ReadOnly): The currency in which the charges for the billing profile are billed.
* **currentPaymentTerm**: [BillingProfilePropertiesCurrentPaymentTerm](#billingprofilepropertiescurrentpaymentterm): The current payment term of the billing profile.
* **displayName**: string: The name of the billing profile.
* **enabledAzurePlans**: [AzurePlan](#azureplan)[]: Information about the enabled azure plans.
* **hasReadAccess**: bool (ReadOnly): Indicates whether user has read access to the billing profile.
* **indirectRelationshipInfo**: [BillingProfilePropertiesIndirectRelationshipInfo](#billingprofilepropertiesindirectrelationshipinfo): Identifies the billing profile that is linked to another billing profile in indirect purchase motion.
* **invoiceDay**: int (ReadOnly): The day of the month when the invoice for the billing profile is generated.
* **invoiceEmailOptIn**: bool: Flag controlling whether the invoices for the billing profile are sent through email.
* **invoiceRecipients**: string[]: The list of email addresses to receive invoices by email for the billing profile.
* **otherPaymentTerms**: [PaymentTerm](#paymentterm)[] (ReadOnly): The other payment terms of the billing profile.
* **poNumber**: string: The default purchase order number that will appear on the invoices generated for the billing profile.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.
* **shipTo**: [BillingProfilePropertiesShipTo](#billingprofilepropertiesshipto): The default address where the products are shipped, or the services are being used. If a ship to is not specified for a product or a subscription, then this address will be used.
* **soldTo**: [BillingProfilePropertiesSoldTo](#billingprofilepropertiessoldto): The address of the individual or organization that is responsible for the billing account.
* **spendingLimit**: 'Off' | 'On' | string (ReadOnly): The billing profile spending limit.
* **spendingLimitDetails**: [SpendingLimitDetails](#spendinglimitdetails)[] (ReadOnly): The details of billing profile spending limit.
* **status**: 'Active' | 'Deleted' | 'Disabled' | 'Other' | 'UnderReview' | 'Warned' | string (ReadOnly): The status of the billing profile.
* **statusReasonCode**: 'Other' | 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' | 'UnusualActivity' | string (ReadOnly): Reason for the specified billing profile status.
* **systemId**: string (ReadOnly): The system generated unique identifier for a billing profile.
* **tags**: [BillingProfilePropertiesTags](#billingprofilepropertiestags): Dictionary of metadata associated with the resource. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **targetClouds**: string[] (ReadOnly): Identifies the cloud environments that are associated with a billing profile. This is a system managed optional field and gets updated as the billing profile gets associated with accounts in various clouds.

## BillingProfilePropertiesBillTo
### Properties
* **addressLine1**: string {minLength: 1} (Required): Address line 1.
* **addressLine2**: string: Address line 2.
* **addressLine3**: string: Address line 3.
* **city**: string: Address city.
* **companyName**: string: Company name. Optional for MCA Individual (Pay-as-you-go).
* **country**: string {minLength: 1} (Required): Country code uses ISO 3166-1 Alpha-2 format.
* **district**: string: Address district.
* **email**: string: Email address.
* **firstName**: string: First name. Optional for MCA Enterprise.
* **isValidAddress**: bool: Indicates if the address is incomplete.
* **lastName**: string: Last name. Optional for MCA Enterprise.
* **middleName**: string: Middle name.
* **phoneNumber**: string: Phone number.
* **postalCode**: string: Postal code.
* **region**: string: Address region.

## BillingProfilePropertiesCurrentPaymentTerm
### Properties
* **endDate**: string: The date on when the defined 'Payment Term' will end and is always in UTC.
* **isDefault**: bool (ReadOnly): Indicates payment term is the standard payment term.
* **startDate**: string: The date on when the defined 'Payment Term' will be effective from and is always in UTC.
* **term**: string: Represents duration in netXX format. Always in days.

## BillingProfilePropertiesIndirectRelationshipInfo
### Properties
* **billingAccountName**: string: The billing account name of the partner or the customer for an indirect motion.
* **billingProfileName**: string: The billing profile name of the partner or the customer for an indirect motion.
* **displayName**: string: The display name of the partner or customer for an indirect motion.

## BillingProfilePropertiesShipTo
### Properties
* **addressLine1**: string {minLength: 1} (Required): Address line 1.
* **addressLine2**: string: Address line 2.
* **addressLine3**: string: Address line 3.
* **city**: string: Address city.
* **companyName**: string: Company name. Optional for MCA Individual (Pay-as-you-go).
* **country**: string {minLength: 1} (Required): Country code uses ISO 3166-1 Alpha-2 format.
* **district**: string: Address district.
* **email**: string: Email address.
* **firstName**: string: First name. Optional for MCA Enterprise.
* **isValidAddress**: bool: Indicates if the address is incomplete.
* **lastName**: string: Last name. Optional for MCA Enterprise.
* **middleName**: string: Middle name.
* **phoneNumber**: string: Phone number.
* **postalCode**: string: Postal code.
* **region**: string: Address region.

## BillingProfilePropertiesSoldTo
### Properties
* **addressLine1**: string {minLength: 1} (Required): Address line 1.
* **addressLine2**: string: Address line 2.
* **addressLine3**: string: Address line 3.
* **city**: string: Address city.
* **companyName**: string: Company name. Optional for MCA Individual (Pay-as-you-go).
* **country**: string {minLength: 1} (Required): Country code uses ISO 3166-1 Alpha-2 format.
* **district**: string: Address district.
* **email**: string: Email address.
* **firstName**: string: First name. Optional for MCA Enterprise.
* **isValidAddress**: bool: Indicates if the address is incomplete.
* **lastName**: string: Last name. Optional for MCA Enterprise.
* **middleName**: string: Middle name.
* **phoneNumber**: string: Phone number.
* **postalCode**: string: Postal code.
* **region**: string: Address region.

## BillingProfilePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BillingPropertyProperties
### Properties
* **accountAdminNotificationEmailAddress**: string (ReadOnly): Notification email address for legacy account. Available for agreement type Microsoft Online Services Program.
* **billingAccountAgreementType**: 'EnterpriseAgreement' | 'MicrosoftCustomerAgreement' | 'MicrosoftOnlineServicesProgram' | 'MicrosoftPartnerAgreement' | 'Other' | string (ReadOnly): The type of agreement.
* **billingAccountDisplayName**: string (ReadOnly): The name of the billing account.
* **billingAccountId**: string (ReadOnly): The fully qualified ID that uniquely identifies a billing account.
* **billingAccountSoldToCountry**: string (ReadOnly): The country of the individual or organization that is responsible for the billing account.
* **billingAccountStatus**: 'Active' | 'Deleted' | 'Disabled' | 'Expired' | 'Extended' | 'New' | 'Other' | 'Pending' | 'Terminated' | 'Transferred' | 'UnderReview' | string (ReadOnly): The current status of the billing account.
* **billingAccountStatusReasonCode**: 'Expired' | 'ManuallyTerminated' | 'Other' | 'TerminateProcessing' | 'Transferred' | 'UnusualActivity' | string (ReadOnly): Reason for the specified billing account status.
* **billingAccountSubType**: 'Enterprise' | 'Individual' | 'None' | 'Other' | 'Professional' | string (ReadOnly): The tier of the account.
* **billingAccountType**: 'Business' | 'ClassicPartner' | 'Enterprise' | 'Individual' | 'Internal' | 'Other' | 'Partner' | 'Reseller' | 'Tenant' | string (ReadOnly): The type of customer.
* **billingCurrency**: string (ReadOnly): The billing currency for the subscription. Available for billing accounts with agreement type Enterprise Agreement
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile.
* **billingProfileId**: string (ReadOnly): The fully qualified ID that uniquely identifies a billing profile.
* **billingProfilePaymentMethodFamily**: 'CheckWire' | 'CreditCard' | 'Credits' | 'DirectDebit' | 'EWallet' | 'None' | 'Other' | 'TaskOrder' | string (ReadOnly): The payment method family of the primary payment method for the billing profile.
* **billingProfilePaymentMethodType**: string (ReadOnly): The payment method type of the primary payment method for the billing profile.
* **billingProfileSpendingLimit**: 'Off' | 'On' | string (ReadOnly): The billing profile spending limit.
* **billingProfileSpendingLimitDetails**: [SpendingLimitDetails](#spendinglimitdetails)[] (ReadOnly): The details of billing profile spending limit.
* **billingProfileStatus**: 'Active' | 'Deleted' | 'Disabled' | 'Other' | 'UnderReview' | 'Warned' | string (ReadOnly): The status of the billing profile.
* **billingProfileStatusReasonCode**: 'Other' | 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' | 'UnusualActivity' | string (ReadOnly): Reason for the specified billing profile status.
* **billingTenantId**: string (ReadOnly): The Azure AD tenant ID of the billing account for the subscription.
* **costCenter**: string: The cost center applied to the subscription. Available for agreement type Microsoft Customer Agreement and Microsoft Partner Agreement. This property can be updated via patch.
* **customerDisplayName**: string (ReadOnly): The name of the customer.
* **customerId**: string (ReadOnly): The fully qualified ID that uniquely identifies a customer.
* **customerStatus**: 'Active' | 'Deleted' | 'Disabled' | 'Other' | 'Pending' | 'UnderReview' | 'Warned' | string (ReadOnly): Identifies the status of an customer. This is an upcoming property that will be populated in the future.
* **enrollmentDetails**: [BillingPropertyPropertiesEnrollmentDetails](#billingpropertypropertiesenrollmentdetails): The enrollment details for the subscription. Available for billing accounts with agreement type Enterprise Agreement.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section.
* **invoiceSectionId**: string (ReadOnly): The fully qualified ID that uniquely identifies an invoice section.
* **invoiceSectionStatus**: 'Active' | 'Deleted' | 'Disabled' | 'Other' | 'Restricted' | 'UnderReview' | 'Warned' | string (ReadOnly): Identifies the status of an invoice section.
* **invoiceSectionStatusReasonCode**: 'Other' | 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' | 'UnusualActivity' | string (ReadOnly): Reason for the specified invoice section status.
* **isAccountAdmin**: bool (ReadOnly): Indicates whether user is the account admin.
* **isTransitionedBillingAccount**: bool (ReadOnly): Specifies if the billing account for the subscription is transitioned from a Microsoft Online Service Program to a Microsoft Customer Agreement (MCA) account. Will be present and value will be true if its a transitioned billing account.
* **productId**: string (ReadOnly): The ID that uniquely identifies a product.
* **productName**: string (ReadOnly): The ID that uniquely identifies a product.
* **skuDescription**: string (ReadOnly): The sku description.
* **skuId**: string (ReadOnly): The ID that uniquely identifies a sku.
* **subscriptionBillingStatus**: 'Active' | 'AutoRenew' | 'Cancelled' | 'Deleted' | 'Disabled' | 'Expired' | 'Expiring' | 'Failed' | 'Other' | 'Suspended' | 'Unknown' | 'Warned' | string (ReadOnly): The subscription status.
* **subscriptionBillingStatusDetails**: [BillingSubscriptionStatusDetails](#billingsubscriptionstatusdetails)[] (ReadOnly): The reason codes for the subscription status.
* **subscriptionBillingType**: 'Benefit' | 'Free' | 'None' | 'Paid' | 'PrePaid' | string (ReadOnly): The type of billing subscription.
* **subscriptionServiceUsageAddress**: [BillingPropertyPropertiesSubscriptionServiceUsageAddress](#billingpropertypropertiessubscriptionserviceusageaddress): The address of the individual or organization where service subscription is being used. Available for agreement type Microsoft Online Services Program. This property can be updated via patch.
* **subscriptionWorkloadType**: 'DevTest' | 'Internal' | 'None' | 'Production' | string (ReadOnly): The Azure workload type of the subscription.

## BillingPropertyPropertiesEnrollmentDetails
### Properties
* **departmentDisplayName**: string: The name of the department
* **departmentId**: string: The ID that uniquely identifies the department.
* **enrollmentAccountDisplayName**: string: The name of the enrollment account.
* **enrollmentAccountId**: string: The ID that uniquely identifies an enrollment account.
* **enrollmentAccountStatus**: string: The status of the enrollment account.

## BillingPropertyPropertiesSubscriptionServiceUsageAddress
### Properties
* **addressLine1**: string {minLength: 1} (Required): Address line 1.
* **addressLine2**: string: Address line 2.
* **addressLine3**: string: Address line 3.
* **city**: string: Address city.
* **companyName**: string: Company name. Optional for MCA Individual (Pay-as-you-go).
* **country**: string {minLength: 1} (Required): Country code uses ISO 3166-1 Alpha-2 format.
* **district**: string: Address district.
* **email**: string: Email address.
* **firstName**: string: First name. Optional for MCA Enterprise.
* **isValidAddress**: bool: Indicates if the address is incomplete.
* **lastName**: string: Last name. Optional for MCA Enterprise.
* **middleName**: string: Middle name.
* **phoneNumber**: string: Phone number.
* **postalCode**: string: Postal code.
* **region**: string: Address region.

## BillingRequestProperties
### Properties
* **additionalInformation**: [BillingRequestPropertiesAdditionalInformation](#billingrequestpropertiesadditionalinformation): Additional information for the billing request.
* **billingAccountDisplayName**: string (ReadOnly): The name of the billing account.
* **billingAccountId**: string (ReadOnly): The fully qualified ID that uniquely identifies a billing account.
* **billingAccountName**: string (ReadOnly): The ID that uniquely identifies a billing account.
* **billingAccountPrimaryBillingTenantId**: string (ReadOnly): The primary tenant ID of the billing account for which the billing request was submitted.
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile.
* **billingProfileId**: string (ReadOnly): The fully qualified ID that uniquely identifies a billing profile.
* **billingProfileName**: string (ReadOnly): The ID that uniquely identifies a billing profile.
* **billingScope**: string (ReadOnly): The billing scope for which the request will be applied. This is a read only property derived by the service.
* **createdBy**: [BillingRequestPropertiesCreatedBy](#billingrequestpropertiescreatedby): The principal of the entity who created the request.
* **creationDate**: string (ReadOnly): The date and time when the request was created.
* **customerDisplayName**: string (ReadOnly): The name of the customer.
* **customerId**: string (ReadOnly): The fully qualified ID that uniquely identifies a customer.
* **customerName**: string (ReadOnly): The ID that uniquely identifies a customer.
* **decisionReason**: string: The reason to approve or decline the request.
* **expirationDate**: string (ReadOnly): The date and time when the request expires.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section.
* **invoiceSectionId**: string (ReadOnly): The fully qualified ID that uniquely identifies an invoice section.
* **invoiceSectionName**: string (ReadOnly): The ID that uniquely identifies an invoice section.
* **justification**: string: Justification for submitting request.
* **lastUpdatedBy**: [BillingRequestPropertiesLastUpdatedBy](#billingrequestpropertieslastupdatedby): The principal of the entity who last updated the request.
* **lastUpdatedDate**: string (ReadOnly): Date and time of last update.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.
* **recipients**: [Principal](#principal)[]: The recipients of the billing request.
* **requestScope**: string: The billing scope for which the request was submitted (ex. '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}').
* **reviewalDate**: string (ReadOnly): The date and time when the request was reviewed.
* **reviewedBy**: [BillingRequestPropertiesReviewedBy](#billingrequestpropertiesreviewedby): The principal of the request reviewer. Will only be set if request is approved.
* **status**: 'Approved' | 'Cancelled' | 'Completed' | 'Declined' | 'Expired' | 'Other' | 'Pending' | string: Status of billing request.
* **subscriptionDisplayName**: string (ReadOnly): The name of the billing subscription.
* **subscriptionId**: string (ReadOnly): The fully qualified ID that uniquely identifies a billing subscription.
* **subscriptionName**: string (ReadOnly): The ID that uniquely identifies a billing subscription.
* **type**: 'InvoiceAccess' | 'Other' | 'ProvisioningAccess' | 'RoleAssignment' | 'UpdateBillingPolicy' | string: Type of billing request.

## BillingRequestPropertiesAdditionalInformation
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BillingRequestPropertiesCreatedBy
### Properties
* **objectId**: string: The object id of the principal who has interacted with a billing entity.
* **tenantId**: string: The tenant id of the principal who has interacted with a billing entity.
* **upn**: string: The user principal name of the principal who has interacted with a billing entity.

## BillingRequestPropertiesLastUpdatedBy
### Properties
* **objectId**: string: The object id of the principal who has interacted with a billing entity.
* **tenantId**: string: The tenant id of the principal who has interacted with a billing entity.
* **upn**: string: The user principal name of the principal who has interacted with a billing entity.

## BillingRequestPropertiesReviewedBy
### Properties
* **objectId**: string: The object id of the principal who has interacted with a billing entity.
* **tenantId**: string: The tenant id of the principal who has interacted with a billing entity.
* **upn**: string: The user principal name of the principal who has interacted with a billing entity.

## BillingRoleAssignmentProperties
### Properties
* **billingAccountDisplayName**: string (ReadOnly): The name of the billing account.
* **billingAccountId**: string (ReadOnly): The fully qualified ID that uniquely identifies a billing account.
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile.
* **billingProfileId**: string (ReadOnly): The fully qualified ID that uniquely identifies a billing profile.
* **billingRequestId**: string (ReadOnly): The ID of the billing request that was created for the role assignment. This is only applicable to cross tenant role assignments or role assignments created through the billing request.
* **createdByPrincipalId**: string (ReadOnly): The object ID of the user who created the role assignment.
* **createdByPrincipalPuid**: string (ReadOnly): The principal PUID of the user who created the role assignment.
* **createdByPrincipalTenantId**: string (ReadOnly): The tenant Id of the user who created the role assignment.
* **createdByUserEmailAddress**: string (ReadOnly): The email address of the user who created the role assignment. This is supported only for billing accounts with agreement type Enterprise Agreement.
* **createdOn**: string (ReadOnly): The date the role assignment was created.
* **customerDisplayName**: string (ReadOnly): The name of the customer.
* **customerId**: string (ReadOnly): The fully qualified ID that uniquely identifies a customer.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section.
* **invoiceSectionId**: string (ReadOnly): The fully qualified ID that uniquely identifies an invoice section.
* **modifiedByPrincipalId**: string (ReadOnly): The principal PUID of the user who modified the role assignment.
* **modifiedByPrincipalPuid**: string (ReadOnly): The principal PUID of the user who modified the role assignment.
* **modifiedByPrincipalTenantId**: string (ReadOnly): The tenant Id of the user who modified the role assignment.
* **modifiedByUserEmailAddress**: string (ReadOnly): The email address of the user who modified the role assignment. This is supported only for billing accounts with agreement type Enterprise Agreement.
* **modifiedOn**: string (ReadOnly): The date the role assignment was modified.
* **principalDisplayName**: string (ReadOnly): The display name of the principal to whom the role was assigned.
* **principalId**: string: The object id of the user to whom the role was assigned.
* **principalPuid**: string: The principal PUID of the user to whom the role was assigned.
* **principalTenantId**: string: The principal tenant id of the user to whom the role was assigned.
* **principalTenantName**: string (ReadOnly): The friendly name of the tenant of the user to whom the role was assigned. This will be 'Primary Tenant' for the primary tenant of the billing account.
* **principalType**: 'DirectoryRole' | 'Everyone' | 'Group' | 'None' | 'ServicePrincipal' | 'Unknown' | 'User' | string (ReadOnly): The type of a role Assignment.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.
* **roleDefinitionId**: string {minLength: 1} (Required): The ID of the role definition.
* **scope**: string: The scope at which the role was assigned.
* **userAuthenticationType**: string: The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
* **userEmailAddress**: string: The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.

## BillingRoleDefinitionProperties
### Properties
* **description**: string (ReadOnly): The role description.
* **permissions**: [BillingPermission](#billingpermission)[] (ReadOnly): The billingPermissions the role has.
* **roleName**: string {minLength: 1} (Required): The name of the role.

## BillingSubscriptionAliasProperties
### Properties
* **autoRenew**: 'Off' | 'On' | string: Indicates whether auto renewal is turned on or off for a product.
* **beneficiary**: [Beneficiary](#beneficiary): The beneficiary of the billing subscription.
* **beneficiaryTenantId**: string: The provisioning tenant of the subscription.
* **billingFrequency**: string: The billing frequency in ISO8601 format of product in the subscription. Example: P1M, P3M, P1Y
* **billingPolicies**: [BillingSubscriptionPropertiesBillingPolicies](#billingsubscriptionpropertiesbillingpolicies) (ReadOnly): Dictionary of billing policies associated with the subscription.
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile.
* **billingProfileId**: string: The fully qualified ID that uniquely identifies a billing profile.
* **billingProfileName**: string (ReadOnly): The ID that uniquely identifies a billing profile.
* **billingSubscriptionId**: string (ReadOnly): The ID of the billing subscription with the subscription alias.
* **consumptionCostCenter**: string: The cost center applied to the subscription. This field is only available for consumption subscriptions of Microsoft Customer Agreement or Enterprise Agreement Type billing accounts.
* **customerDisplayName**: string (ReadOnly): The name of the customer.
* **customerId**: string: The fully qualified ID that uniquely identifies a customer.
* **customerName**: string (ReadOnly): The ID that uniquely identifies a customer.
* **displayName**: string: The name of the billing subscription.
* **enrollmentAccountDisplayName**: string (ReadOnly): The enrollment Account name associated with the subscription. This field is available only for the Enterprise Agreement Type billing accounts.
* **enrollmentAccountId**: string (ReadOnly): The enrollment Account ID associated with the subscription. This field is available only for the Enterprise Agreement Type billing accounts.
* **enrollmentAccountSubscriptionDetails**: [EnrollmentAccountSubscriptionDetails](#enrollmentaccountsubscriptiondetails) (ReadOnly): Enrollment Account Subscription details. This field is available only for the Enterprise Agreement Type billing accounts.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section.
* **invoiceSectionId**: string: The fully qualified ID that uniquely identifies an invoice section.
* **invoiceSectionName**: string (ReadOnly): The ID that uniquely identifies an invoice section.
* **lastMonthCharges**: [Amount](#amount) (ReadOnly): The last month's charges. This field is only available for usage based subscriptions of Microsoft Customer Agreement billing accounts.
* **monthToDateCharges**: [Amount](#amount) (ReadOnly): The current month to date charges. This field is only available for usage based subscriptions of Microsoft Customer Agreement billing accounts.
* **nextBillingCycleDetails**: [NextBillingCycleDetails](#nextbillingcycledetails) (ReadOnly): Next billing cycle details of the subscription.
* **offerId**: string (ReadOnly): The offer ID for the subscription. This field is only available for the Microsoft Online Services Program billing accounts.
* **operationStatus**: 'LockedForUpdate' | 'None' | 'Other' | string (ReadOnly): The status of an operation on the subscription. When None, there is no ongoing operation. When LockedForUpdate, write operations will be blocked on the Billing Subscription. Other is the default value and you may need to refer to the latest API version for more details.
* **productCategory**: string (ReadOnly): The category of the product for which the subscription is purchased. Possible values include: AzureSupport, Hardware, ReservationOrder, SaaS, SavingsPlanOrder, Software, UsageBased, Other.
* **productType**: string (ReadOnly): Type of the product for which the subscription is purchased.
* **productTypeId**: string: Id of the product for which the subscription is purchased.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.
* **provisioningTenantId**: string: The tenant in which the subscription is provisioned.
* **purchaseDate**: string (ReadOnly): Purchase date of the product in UTC time.
* **quantity**: int: The quantity of licenses or fulfillment units for the subscription.
* **renewalTermDetails**: [RenewalTermDetails](#renewaltermdetails) (ReadOnly): Details for the next renewal term of a subscription.
* **reseller**: [Reseller](#reseller) (ReadOnly): Reseller for this subscription. The fields is not available for Microsoft Partner Agreement billing accounts.
* **resourceUri**: string (ReadOnly): Unique identifier of the linked resource.
* **skuDescription**: string (ReadOnly): The SKU description of the product for which the subscription is purchased. This field is is only available for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement.
* **skuId**: string: The SKU ID of the product for which the subscription is purchased. This field is is only available  for Microsoft Customer Agreement billing accounts.
* **status**: 'Active' | 'AutoRenew' | 'Cancelled' | 'Deleted' | 'Disabled' | 'Expired' | 'Expiring' | 'Failed' | 'Other' | 'Suspended' | 'Unknown' | 'Warned' | string (ReadOnly): The status of the subscription. This field is not available for Enterprise Agreement billing accounts
* **subscriptionId**: string (ReadOnly): The ID of the subscription.
* **suspensionReasonDetails**: [BillingSubscriptionStatusDetails](#billingsubscriptionstatusdetails)[] (ReadOnly): The suspension details for a subscription. This field is not available for Enterprise Agreement billing accounts.
* **suspensionReasons**: string[] (ReadOnly): The suspension reason for a subscription. This field is not available for Enterprise Agreement billing accounts.
* **systemOverrides**: [SystemOverrides](#systemoverrides): System imposed policies that regulate behavior of the subscription.
* **termDuration**: string: The duration in ISO8601 format for which you can use the subscription. Example: P1M, P3M, P1Y
* **termEndDate**: string (ReadOnly): End date of the term in UTC time.
* **termStartDate**: string (ReadOnly): Start date of the term in UTC time.

## BillingSubscriptionProperties
### Properties
* **autoRenew**: 'Off' | 'On' | string: Indicates whether auto renewal is turned on or off for a product.
* **beneficiary**: [Beneficiary](#beneficiary): The beneficiary of the billing subscription.
* **beneficiaryTenantId**: string: The provisioning tenant of the subscription.
* **billingFrequency**: string: The billing frequency in ISO8601 format of product in the subscription. Example: P1M, P3M, P1Y
* **billingPolicies**: [BillingSubscriptionPropertiesBillingPolicies](#billingsubscriptionpropertiesbillingpolicies) (ReadOnly): Dictionary of billing policies associated with the subscription.
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile.
* **billingProfileId**: string: The fully qualified ID that uniquely identifies a billing profile.
* **billingProfileName**: string (ReadOnly): The ID that uniquely identifies a billing profile.
* **consumptionCostCenter**: string: The cost center applied to the subscription. This field is only available for consumption subscriptions of Microsoft Customer Agreement or Enterprise Agreement Type billing accounts.
* **customerDisplayName**: string (ReadOnly): The name of the customer.
* **customerId**: string: The fully qualified ID that uniquely identifies a customer.
* **customerName**: string (ReadOnly): The ID that uniquely identifies a customer.
* **displayName**: string: The name of the billing subscription.
* **enrollmentAccountDisplayName**: string (ReadOnly): The enrollment Account name associated with the subscription. This field is available only for the Enterprise Agreement Type billing accounts.
* **enrollmentAccountId**: string (ReadOnly): The enrollment Account ID associated with the subscription. This field is available only for the Enterprise Agreement Type billing accounts.
* **enrollmentAccountSubscriptionDetails**: [EnrollmentAccountSubscriptionDetails](#enrollmentaccountsubscriptiondetails) (ReadOnly): Enrollment Account Subscription details. This field is available only for the Enterprise Agreement Type billing accounts.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section.
* **invoiceSectionId**: string: The fully qualified ID that uniquely identifies an invoice section.
* **invoiceSectionName**: string (ReadOnly): The ID that uniquely identifies an invoice section.
* **lastMonthCharges**: [Amount](#amount) (ReadOnly): The last month's charges. This field is only available for usage based subscriptions of Microsoft Customer Agreement billing accounts.
* **monthToDateCharges**: [Amount](#amount) (ReadOnly): The current month to date charges. This field is only available for usage based subscriptions of Microsoft Customer Agreement billing accounts.
* **nextBillingCycleDetails**: [NextBillingCycleDetails](#nextbillingcycledetails) (ReadOnly): Next billing cycle details of the subscription.
* **offerId**: string (ReadOnly): The offer ID for the subscription. This field is only available for the Microsoft Online Services Program billing accounts.
* **operationStatus**: 'LockedForUpdate' | 'None' | 'Other' | string (ReadOnly): The status of an operation on the subscription. When None, there is no ongoing operation. When LockedForUpdate, write operations will be blocked on the Billing Subscription. Other is the default value and you may need to refer to the latest API version for more details.
* **productCategory**: string (ReadOnly): The category of the product for which the subscription is purchased. Possible values include: AzureSupport, Hardware, ReservationOrder, SaaS, SavingsPlanOrder, Software, UsageBased, Other.
* **productType**: string (ReadOnly): Type of the product for which the subscription is purchased.
* **productTypeId**: string: Id of the product for which the subscription is purchased.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.
* **provisioningTenantId**: string: The tenant in which the subscription is provisioned.
* **purchaseDate**: string (ReadOnly): Purchase date of the product in UTC time.
* **quantity**: int: The quantity of licenses or fulfillment units for the subscription.
* **renewalTermDetails**: [RenewalTermDetails](#renewaltermdetails) (ReadOnly): Details for the next renewal term of a subscription.
* **reseller**: [Reseller](#reseller) (ReadOnly): Reseller for this subscription. The fields is not available for Microsoft Partner Agreement billing accounts.
* **resourceUri**: string (ReadOnly): Unique identifier of the linked resource.
* **skuDescription**: string (ReadOnly): The SKU description of the product for which the subscription is purchased. This field is is only available for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement.
* **skuId**: string: The SKU ID of the product for which the subscription is purchased. This field is is only available  for Microsoft Customer Agreement billing accounts.
* **status**: 'Active' | 'AutoRenew' | 'Cancelled' | 'Deleted' | 'Disabled' | 'Expired' | 'Expiring' | 'Failed' | 'Other' | 'Suspended' | 'Unknown' | 'Warned' | string (ReadOnly): The status of the subscription. This field is not available for Enterprise Agreement billing accounts
* **subscriptionId**: string (ReadOnly): The ID of the subscription.
* **suspensionReasonDetails**: [BillingSubscriptionStatusDetails](#billingsubscriptionstatusdetails)[] (ReadOnly): The suspension details for a subscription. This field is not available for Enterprise Agreement billing accounts.
* **suspensionReasons**: string[] (ReadOnly): The suspension reason for a subscription. This field is not available for Enterprise Agreement billing accounts.
* **systemOverrides**: [SystemOverrides](#systemoverrides): System imposed policies that regulate behavior of the subscription.
* **termDuration**: string: The duration in ISO8601 format for which you can use the subscription. Example: P1M, P3M, P1Y
* **termEndDate**: string (ReadOnly): End date of the term in UTC time.
* **termStartDate**: string (ReadOnly): Start date of the term in UTC time.

## BillingSubscriptionPropertiesBillingPolicies
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BillingSubscriptionPropertiesBillingPolicies
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BillingSubscriptionStatusDetails
### Properties
* **effectiveDate**: string (ReadOnly): The suspension effective date for a subscription. This field is not available for Enterprise Agreement billing accounts.
* **reason**: 'Cancelled' | 'Expired' | 'None' | 'Other' | 'PastDue' | 'PolicyViolation' | 'SpendingLimitReached' | 'SuspiciousActivity' | 'Transferred' | string (ReadOnly): The suspension reason for a subscription. This field is not available for Enterprise Agreement billing accounts.

## Commitment
### Properties
* **amount**: int
* **currencyCode**: string: The ISO 4217 3-letter currency code for the currency used by this purchase record.
* **grain**: 'Hourly' | string: Commitment grain.

## CustomerPolicyProperties
### Properties
* **policies**: [PolicySummary](#policysummary)[]: List of all policies defined at the billing scope.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.
* **viewCharges**: 'Allowed' | 'NotAllowed' | 'Other' | string (Required): The policy that controls whether the users in customer's organization can view charges at pay-as-you-go prices.

## CustomerProperties
### Properties
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile.
* **billingProfileId**: string (ReadOnly): The fully qualified ID that uniquely identifies a billing profile.
* **displayName**: string (ReadOnly): The name of the customer.
* **enabledAzurePlans**: [AzurePlan](#azureplan)[]: Azure plans enabled for the customer.
* **resellers**: [Reseller](#reseller)[]: The list of resellers for which an Azure plan is enabled for the customer.
* **status**: 'Active' | 'Deleted' | 'Disabled' | 'Other' | 'Pending' | 'UnderReview' | 'Warned' | string (ReadOnly): Identifies the status of an customer. This is an upcoming property that will be populated in the future.
* **systemId**: string (ReadOnly): The system generated unique identifier for a customer.
* **tags**: [CustomerPropertiesTags](#customerpropertiestags): Dictionary of metadata associated with the resource. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /

## CustomerPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DepartmentProperties
### Properties
* **costCenter**: string: The cost center associated with the department.
* **displayName**: string: The name of the department.
* **id**: string (ReadOnly): The ID that uniquely identifies the department.
* **status**: string (ReadOnly): The status of the department.

## DetailedTransferStatus
### Properties
* **errorDetails**: [TransferError](#transfererror): Error details for transfer execution.
* **productId**: string (ReadOnly): The ID of the product that is transferred.
* **productName**: string (ReadOnly): The name of the product that is transferred.
* **productType**: 'AzureReservation' | 'AzureSubscription' | 'Department' | 'SAAS' | 'SavingsPlan' | string (ReadOnly): Type of product that is transferred.
* **skuDescription**: string (ReadOnly): The SKU of the product that is transferred.
* **transferStatus**: 'Completed' | 'Failed' | 'InProgress' | 'NotStarted' | string (ReadOnly): Transfer status.

## EnrollmentAccountProperties
### Properties
* **accountOwner**: string (ReadOnly): The owner of the enrollment account.
* **authType**: string (ReadOnly): The authorization type of the enrollment account.
* **costCenter**: string: The cost center associated with the enrollment account.
* **departmentDisplayName**: string (ReadOnly): The name of the department under which the enrollment account exists.
* **departmentId**: string (ReadOnly): The ID that uniquely identifies the department.
* **displayName**: string: The name of the enrollment account.
* **endDate**: string (ReadOnly): The date of expiration of the enrollment account.
* **isDevTestEnabled**: bool: Boolean flag which enables subscribers to run development and testing workloads on Azure at special Dev/Test rates.
* **startDate**: string (ReadOnly): The date from which the enrollment account became valid and functional.
* **status**: string (ReadOnly): The status of the enrollment account.

## EnrollmentAccountSubscriptionDetails
### Properties
* **enrollmentAccountStartDate**: string (ReadOnly): The enrollment Account and the subscription association start date. This field is available only for the Enterprise Agreement Type.
* **subscriptionEnrollmentAccountStatus**: 'Active' | 'Cancelled' | 'Deleted' | 'Expired' | 'Inactive' | 'TransferredOut' | 'Transferring' | string (ReadOnly): The current enrollment account status of the subscription. This field is available only for the Enterprise Agreement Type.

## EnrollmentDetailsIndirectRelationshipInfo
### Properties
* **billingAccountName**: string: The billing account name of the partner or the customer for an indirect motion.
* **billingProfileName**: string: The billing profile name of the partner or the customer for an indirect motion.
* **displayName**: string: The display name of the partner or customer for an indirect motion.

## ExtendedStatusDefinitionProperties
### Properties
* **subscriptionId**: string: Subscription Id

## ExtendedStatusInfo
### Properties
* **message**: string: The message giving detailed information about the status code.
* **properties**: [ExtendedStatusInfoProperties](#extendedstatusinfoproperties): Properties specific to credit line check failure
* **statusCode**: string: Status code providing additional information.

## ExtendedStatusInfoProperties
### Properties
* **subscriptionId**: string: The subscription that has failed credit line check.

## FailedPayment
### Properties
* **date**: string (ReadOnly): The date when the payment was attempted.
* **failedPaymentReason**: 'BankDeclined' | 'CardExpired' | 'IncorrectCardDetails' | 'Other' | string (ReadOnly): The reason that the payment failed.

## InitiateTransferPropertiesOrTransferProperties
### Properties
* **canceledBy**: string (ReadOnly): The email ID of the user who canceled the transfer request.
* **detailedTransferStatus**: [DetailedTransferStatus](#detailedtransferstatus)[] (ReadOnly): Detailed transfer status.
* **expirationTime**: string (ReadOnly): The time at which the transfer request expires.
* **initiatorEmailId**: string (ReadOnly): The email ID of the user who sent the transfer request.
* **recipientEmailId**: string: The email ID of the recipient to whom the transfer request is sent.
* **transferStatus**: 'Canceled' | 'Completed' | 'CompletedWithErrors' | 'Declined' | 'Expired' | 'Failed' | 'InProgress' | 'Pending' | string (ReadOnly): Overall transfer status.

## InvoiceDocument
### Properties
* **documentNumbers**: string[] (ReadOnly): The document numbers for the invoice document.
* **externalUrl**: string (ReadOnly): The URL to download the invoice document if the source is external to Microsoft.Billing.
* **kind**: 'CreditNote' | 'Invoice' | 'Other' | 'Summary' | 'TaxReceipt' | 'Transactions' | 'VoidNote' | string (ReadOnly): The type of the document.
* **name**: string (ReadOnly): The ID that uniquely identifies an invoice document. This ID may be an identifier for an invoice PDF, a credit note, or a tax receipt.
* **source**: 'DRS' | 'ENF' | 'Other' | string (ReadOnly): The source of the document. ENF for Brazil and DRS for rest of the world.
* **url**: string (ReadOnly): The URL to download the invoice document if the source is internal to Microsoft.Billing.

## InvoiceProperties
### Properties
* **amountDue**: [InvoicePropertiesAmountDue](#invoicepropertiesamountdue): The amount due as of now.
* **azurePrepaymentApplied**: [InvoicePropertiesAzurePrepaymentApplied](#invoicepropertiesazureprepaymentapplied): The amount of Azure prepayment applied to the charges. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **billedAmount**: [InvoicePropertiesBilledAmount](#invoicepropertiesbilledamount): The total charges for the invoice billing period.
* **billedDocumentId**: string (ReadOnly): The Id of the active invoice which is originally billed after this invoice was voided. This field is applicable to the void invoices only.
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile for which the invoice is generated.
* **billingProfileId**: string (ReadOnly): The ID of the billing profile for which the invoice is generated.
* **creditAmount**: [InvoicePropertiesCreditAmount](#invoicepropertiescreditamount): The total refund for returns and cancellations during the invoice billing period. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **creditForDocumentId**: string (ReadOnly): The Id of the invoice which got voided and this credit note was issued as a result. This field is applicable to the credit notes only.
* **documents**: [InvoiceDocument](#invoicedocument)[] (ReadOnly): List of documents available to download and view such as invoice, credit note, or tax receipt.
* **documentType**: 'CreditNote' | 'Invoice' | 'Other' | 'Summary' | 'TaxReceipt' | 'Transactions' | 'VoidNote' | string (ReadOnly): The type of the document.
* **dueDate**: string (ReadOnly): The due date for the invoice.
* **failedPayments**: [FailedPayment](#failedpayment)[] (ReadOnly): List of failed payments.
* **freeAzureCreditApplied**: [InvoicePropertiesFreeAzureCreditApplied](#invoicepropertiesfreeazurecreditapplied): The amount of free Azure credits applied to the charges. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **invoiceDate**: string (ReadOnly): The date when the invoice was generated.
* **invoicePeriodEndDate**: string (ReadOnly): The end date of the billing period for which the invoice is generated. The date is in MM-DD-YYYY format.
* **invoicePeriodStartDate**: string (ReadOnly): The start date of the billing period for which the invoice is generated. The date is in MM-DD-YYYY format.
* **invoiceType**: 'AzureMarketplace' | 'AzureServices' | 'AzureSupport' | 'Other' | string (ReadOnly): Invoice type.
* **isMonthlyInvoice**: bool (ReadOnly): Specifies if the invoice is generated as part of monthly invoicing cycle or not. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **payments**: [Payment](#payment)[] (ReadOnly): List of payments.
* **purchaseOrderNumber**: string (ReadOnly): An optional purchase order number for the invoice.
* **rebillDetails**: [InvoicePropertiesRebillDetails](#invoicepropertiesrebilldetails): Rebill details for an invoice.
* **refundDetails**: [InvoicePropertiesRefundDetails](#invoicepropertiesrefunddetails): The details of a refund request.
* **specialTaxationType**: 'InvoiceLevel' | 'SubtotalLevel' | string (ReadOnly): Identifies the type of tax calculation used for the invoice. The field is applicable only to invoices with special tax calculation logic.
* **status**: 'Due' | 'Locked' | 'Other' | 'OverDue' | 'Paid' | 'Void' | string (ReadOnly): The current status of the invoice.
* **subscriptionDisplayName**: string (ReadOnly): The name of the billing subscription for which the invoice is generated.
* **subscriptionId**: string (ReadOnly): The ID of the subscription for which the invoice is generated.
* **subTotal**: [InvoicePropertiesSubTotal](#invoicepropertiessubtotal): The pre-tax amount due. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **taxAmount**: [InvoicePropertiesTaxAmount](#invoicepropertiestaxamount): The amount of tax charged for the billing period. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **totalAmount**: [InvoicePropertiesTotalAmount](#invoicepropertiestotalamount): The amount due when the invoice was generated. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.

## InvoicePropertiesAmountDue
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## InvoicePropertiesAzurePrepaymentApplied
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## InvoicePropertiesBilledAmount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## InvoicePropertiesCreditAmount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## InvoicePropertiesFreeAzureCreditApplied
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## InvoicePropertiesRebillDetails
### Properties
* **creditNoteDocumentId**: string (ReadOnly): The ID of credit note.
* **invoiceDocumentId**: string (ReadOnly): The ID of invoice.
* **rebillDetails**: [RebillDetails](#rebilldetails) (ReadOnly): The rebill details of an invoice.

## InvoicePropertiesRefundDetails
### Properties
* **amountRefunded**: [RefundDetailsSummaryAmountRefunded](#refunddetailssummaryamountrefunded): The amount refunded.
* **amountRequested**: [RefundDetailsSummaryAmountRequested](#refunddetailssummaryamountrequested): The amount of refund requested.
* **approvedOn**: string (ReadOnly): Date when the refund was approved.
* **completedOn**: string (ReadOnly): Date when the refund was completed.
* **rebillInvoiceId**: string (ReadOnly): The invoice ID of the rebill invoice for a refund.
* **refundOperationId**: string (ReadOnly): The ID of refund operation.
* **refundReason**: 'AccidentalConversion' | 'AccidentalPurchase' | 'ForgotToCancel' | 'Other' | 'UnclearDocumentation' | 'UnclearPricing' | string (ReadOnly): The reason for refund.
* **refundStatus**: 'Approved' | 'Cancelled' | 'Completed' | 'Declined' | 'Expired' | 'Other' | 'Pending' | string (ReadOnly): The status of refund request.
* **requestedOn**: string (ReadOnly): Date when the refund was requested.
* **transactionCount**: int (ReadOnly): The number of transactions refunded.

## InvoicePropertiesSubTotal
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## InvoicePropertiesTaxAmount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## InvoicePropertiesTotalAmount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## InvoiceSectionProperties
### Properties
* **displayName**: string: The name of the invoice section.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.
* **reasonCode**: 'Other' | 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' | 'UnusualActivity' | string: Reason for the specified invoice section status.
* **state**: 'Active' | 'Deleted' | 'Disabled' | 'Other' | 'Restricted' | 'UnderReview' | 'Warned' | string: Identifies the status of an invoice section.
* **systemId**: string (ReadOnly): The system generated unique identifier for an invoice section.
* **tags**: [InvoiceSectionPropertiesTags](#invoicesectionpropertiestags): Dictionary of metadata associated with the resource. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
* **targetCloud**: string: Identifies the cloud environments that are associated with an invoice section. This is a system managed optional field and gets updated as the invoice section gets associated with accounts in various clouds.

## InvoiceSectionPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InvoiceSectionWithCreateSubPermission
### Properties
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile.
* **billingProfileId**: string (ReadOnly): The fully qualified ID that uniquely identifies a billing profile.
* **billingProfileSpendingLimit**: 'Off' | 'On' | string (ReadOnly): The billing profile spending limit.
* **billingProfileStatus**: 'Active' | 'Deleted' | 'Disabled' | 'Other' | 'UnderReview' | 'Warned' | string (ReadOnly): The status of the billing profile.
* **billingProfileStatusReasonCode**: 'Other' | 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' | 'UnusualActivity' | string (ReadOnly): Reason for the specified billing profile status.
* **billingProfileSystemId**: string (ReadOnly): The system generated unique identifier for a billing profile.
* **enabledAzurePlans**: [AzurePlan](#azureplan)[] (ReadOnly): Enabled azure plans for the associated billing profile.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section.
* **invoiceSectionId**: string (ReadOnly): The fully qualified ID that uniquely identifies an invoice section.
* **invoiceSectionSystemId**: string (ReadOnly): The system generated unique identifier for an invoice section.

## InvoiceSectionWithCreateSubPermissionListResult
### Properties
* **nextLink**: string (ReadOnly): The link (url) to the next page of results.
* **value**: [InvoiceSectionWithCreateSubPermission](#invoicesectionwithcreatesubpermission)[] (ReadOnly): The list of resources.

## NextBillingCycleDetails
### Properties
* **billingFrequency**: string (ReadOnly): Billing frequency of the product under the subscription.

## Participant
### Properties
* **email**: string (ReadOnly): The email address of the participant.
* **status**: string (ReadOnly): The acceptance status of the participant.
* **statusDate**: string (ReadOnly): The date when the status got changed.

## PartnerInitiateTransferPropertiesOrPartnerTransferProperties
### Properties
* **canceledBy**: string (ReadOnly): The email ID of the user who canceled the transfer request.
* **detailedTransferStatus**: [DetailedTransferStatus](#detailedtransferstatus)[] (ReadOnly): Detailed transfer status.
* **expirationTime**: string (ReadOnly): The time at which the transfer request expires.
* **initiatorCustomerType**: 'EA' | 'Partner' | string (ReadOnly): The type of customer who sent the transfer request.
* **initiatorEmailId**: string (ReadOnly): The email ID of the user who sent the transfer request.
* **recipientEmailId**: string: The email ID of the recipient to whom the transfer request is sent.
* **resellerId**: string: Optional MPN ID of the reseller for transfer requests that are sent from a Microsoft Partner Agreement billing account.
* **resellerName**: string (ReadOnly): Optional name of the reseller for transfer requests that are sent from Microsoft Partner Agreement billing account.
* **transferStatus**: 'Canceled' | 'Completed' | 'CompletedWithErrors' | 'Declined' | 'Expired' | 'Failed' | 'InProgress' | 'Pending' | string (ReadOnly): Overall transfer status.

## Payment
### Properties
* **amount**: [PaymentAmount](#paymentamount): The paid amount.
* **date**: string (ReadOnly): The date when the payment was made.
* **paymentMethodFamily**: 'CheckWire' | 'CreditCard' | 'Credits' | 'DirectDebit' | 'EWallet' | 'None' | 'Other' | 'TaskOrder' | string (ReadOnly): The family of payment method.
* **paymentMethodId**: string (ReadOnly): The ID that uniquely identifies the payment method used for the invoice.
* **paymentMethodType**: string (ReadOnly): The type of payment method.
* **paymentType**: string (ReadOnly): The type of payment.

## PaymentAmount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## PaymentDetail
### Properties
* **billingCurrencyTotal**: [Price](#price): Amount charged in Billing currency. Tax not included. Is null for future payments
* **dueDate**: string: Date when the payment needs to be done.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly): Extended status information
* **paymentDate**: string: Date when the transaction is completed. Null when it is scheduled.
* **pricingCurrencyTotal**: [Price](#price): Amount in pricing currency. Tax not included.
* **status**: 'Cancelled' | 'Completed' | 'Failed' | 'Pending' | 'Scheduled' | 'Succeeded' | string: Describes whether the payment is completed, failed, pending, cancelled or scheduled in the future.

## PaymentMethodLinkProperties
### Properties
* **accountHolderName**: string (ReadOnly): The account holder name for the payment method. This is only supported for payment methods with family CreditCard.
* **displayName**: string (ReadOnly): The display name of the payment method.
* **expiration**: string (ReadOnly): The expiration month and year of the payment method. This is only supported for payment methods with family CreditCard.
* **family**: 'CheckWire' | 'CreditCard' | 'Credits' | 'DirectDebit' | 'EWallet' | 'None' | 'Other' | 'TaskOrder' | string (ReadOnly): The family of payment method.
* **lastFourDigits**: string (ReadOnly): Last four digits of payment method.
* **logos**: [PaymentMethodLogo](#paymentmethodlogo)[] (ReadOnly): The list of logos for the payment method.
* **paymentMethod**: [PaymentMethodProperties](#paymentmethodproperties): Projection of a payment method. Will not be returned in this or future versions.
* **paymentMethodId**: string: Id of payment method. Example: /providers/Microsoft.Billing/paymentMethods/ABCDABCDABC0
* **paymentMethodType**: string (ReadOnly): The type of payment method.
* **status**: 'active' | 'inactive' | string (ReadOnly): Status of the payment method.

## PaymentMethodLogo
### Properties
* **mimeType**: string (ReadOnly): MIME type of the logo.
* **url**: string (ReadOnly): Public URL of image of the logo.

## PaymentMethodProperties
### Properties
* **accountHolderName**: string (ReadOnly): The account holder name for the payment method. This is only supported for payment methods with family CreditCard.
* **displayName**: string (ReadOnly): The display name of the payment method.
* **expiration**: string (ReadOnly): The expiration month and year of the payment method. This is only supported for payment methods with family CreditCard.
* **family**: 'CheckWire' | 'CreditCard' | 'Credits' | 'DirectDebit' | 'EWallet' | 'None' | 'Other' | 'TaskOrder' | string: The family of payment method.
* **id**: string (ReadOnly): Id of payment method.
* **lastFourDigits**: string (ReadOnly): Last four digits of payment method.
* **logos**: [PaymentMethodLogo](#paymentmethodlogo)[]: The list of logos for the payment method.
* **paymentMethodType**: string (ReadOnly): The type of payment method.
* **status**: 'active' | 'inactive' | string: Status of the payment method.

## PaymentOnAccount
### Properties
* **amount**: [PaymentOnAccountAmount](#paymentonaccountamount): Payment on Account amount.
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile for the payments on account.
* **billingProfileId**: string (ReadOnly): The ID of the billing profile for the payments on account.
* **date**: string (ReadOnly): The date of the payments on account.
* **invoiceId**: string (ReadOnly): The ID of the invoice for which the payments on account was generated.
* **invoiceName**: string (ReadOnly): The name of the invoice for the payments on account.
* **paymentMethodType**: 'CheckWire' | 'CreditCard' | 'Credits' | 'DirectDebit' | 'EWallet' | 'None' | 'Other' | 'TaskOrder' | string (ReadOnly): Payment on Account type.

## PaymentOnAccountAmount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## PaymentTerm
### Properties
* **endDate**: string: The date on when the defined 'Payment Term' will end and is always in UTC.
* **isDefault**: bool (ReadOnly): Indicates payment term is the standard payment term.
* **startDate**: string: The date on when the defined 'Payment Term' will be effective from and is always in UTC.
* **term**: string: Represents duration in netXX format. Always in days.

## PolicySummary
### Properties
* **name**: string: The name of the policy.
* **policyType**: 'Other' | 'SystemControlled' | 'UserControlled' | string: The type of the policy.
* **scope**: string: The scope at which the policy is defined.
* **value**: string: The value of the policy.

## Price
### Properties
* **amount**: int
* **currencyCode**: string: The ISO 4217 3-letter currency code for the currency used by this purchase record.

## Principal
### Properties
* **objectId**: string: The object id of the principal who has interacted with a billing entity.
* **tenantId**: string: The tenant id of the principal who has interacted with a billing entity.
* **upn**: string: The user principal name of the principal who has interacted with a billing entity.

## ProductProperties
### Properties
* **autoRenew**: 'Off' | 'On' | string: Indicates whether auto renewal is turned on or off for a product.
* **availabilityId**: string (ReadOnly): The availability of the product.
* **billingFrequency**: string (ReadOnly): The frequency at which the product will be billed.
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile to which the product is billed.
* **billingProfileId**: string (ReadOnly): The ID of the billing profile to which the product is billed.
* **customerDisplayName**: string (ReadOnly): The name of the customer for whom the product was purchased. The field is applicable only for Microsoft Partner Agreement billing account.
* **customerId**: string (ReadOnly): The ID of the customer for whom the product was purchased. The field is applicable only for Microsoft Partner Agreement billing account.
* **displayName**: string (ReadOnly): The display name of the product.
* **endDate**: string (ReadOnly): The date when the product will be renewed or canceled.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section to which the product is billed.
* **invoiceSectionId**: string (ReadOnly): The ID of the invoice section to which the product is billed.
* **lastCharge**: [ProductPropertiesLastCharge](#productpropertieslastcharge): The last month charges.
* **lastChargeDate**: string (ReadOnly): The date of the last charge.
* **productType**: string (ReadOnly): The description of the type of product.
* **productTypeId**: string (ReadOnly): The ID of the type of product.
* **purchaseDate**: string (ReadOnly): The date when the product was purchased.
* **quantity**: int (ReadOnly): The quantity purchased for the product.
* **reseller**: [ProductPropertiesReseller](#productpropertiesreseller): Reseller for this product. The fields is not available for Microsoft Partner Agreement products.
* **skuDescription**: string (ReadOnly): The sku description of the product.
* **skuId**: string (ReadOnly): The sku ID of the product.
* **status**: 'Active' | 'AutoRenew' | 'Canceled' | 'Deleted' | 'Disabled' | 'Expired' | 'Expiring' | 'Other' | 'PastDue' | 'Suspended' | string (ReadOnly): The status of the product.
* **tenantId**: string (ReadOnly): The id of the tenant in which the product is used.

## ProductPropertiesLastCharge
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## ProductPropertiesReseller
### Properties
* **description**: string (ReadOnly): The name of the reseller.
* **resellerId**: string (ReadOnly): The MPN ID of the reseller.

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceWithTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PurchaseRequest
### Properties
* **properties**: [PurchaseRequestProperties](#purchaserequestproperties): Purchase request properties.
* **sku**: [Sku](#sku): The SKU to be applied for this resource

## PurchaseRequestProperties
### Properties
* **appliedScopeProperties**: [AppliedScopeProperties](#appliedscopeproperties): Properties specific to applied scope type. Not required if not applicable.
* **appliedScopeType**: 'ManagementGroup' | 'Shared' | 'Single' | string: Type of the Applied Scope.
* **billingPlan**: 'P1M' | string: Represents the billing plan in ISO 8601 format. Required only for monthly purchases.
* **billingScopeId**: string: Subscription that will be charged for purchasing SavingsPlan
* **commitment**: [Commitment](#commitment): Commitment towards the benefit.
* **displayName**: string: Friendly name of the savings plan
* **renew**: bool: Setting this to true will automatically purchase a new benefit on the expiration date time.
* **term**: 'P1Y' | 'P3Y' | 'P5Y' | string: Represents the Savings plan term in ISO 8601 format.

## RebillDetails
### Properties
* **creditNoteDocumentId**: string (ReadOnly): The ID of credit note.
* **invoiceDocumentId**: string (ReadOnly): The ID of invoice.
* **rebillDetails**: [RebillDetails](#rebilldetails) (ReadOnly): The rebill details of an invoice.

## RecipientTransferProperties
### Properties
* **allowedProductType**: ('AzureReservation' | 'DevTestAzureSubscription' | 'StandardAzureSubscription' | string)[] (ReadOnly): Type of subscriptions that can be transferred.
* **canceledBy**: string (ReadOnly): The email ID of the user who canceled the transfer request.
* **customerTenantId**: string (ReadOnly): The customer tenant id.
* **detailedTransferStatus**: [DetailedTransferStatus](#detailedtransferstatus)[] (ReadOnly): Detailed transfer status.
* **expirationTime**: string (ReadOnly): The time at which the transfer request expires.
* **initiatorCustomerType**: 'EA' | 'Partner' | string (ReadOnly): The type of customer who sent the transfer request.
* **initiatorEmailId**: string (ReadOnly): The email ID of the user who sent the transfer request.
* **recipientEmailId**: string (ReadOnly): The email ID of the user to whom the transfer request was sent.
* **resellerId**: string (ReadOnly): Optional MPN ID of the reseller for transfer requests that are sent from a Microsoft Partner Agreement billing account.
* **resellerName**: string (ReadOnly): Optional name of the reseller for transfer requests that are sent from Microsoft Partner Agreement billing account.
* **supportedAccounts**: ('Enterprise' | 'Individual' | 'None' | 'Partner' | string)[] (ReadOnly): List of supported account types.
* **transferStatus**: 'Canceled' | 'Completed' | 'CompletedWithErrors' | 'Declined' | 'Expired' | 'Failed' | 'InProgress' | 'Pending' | string (ReadOnly): Overall transfer status.

## RefundDetailsSummaryAmountRefunded
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## RefundDetailsSummaryAmountRequested
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int (ReadOnly): The amount value. For example, if the currency is USD, then a value of 600 would be $600.00.

## RenewalTermDetails
### Properties
* **billingFrequency**: string (ReadOnly): The billing frequency in ISO8601 format of product in the subscription. Example: P1M, P3M, P1Y
* **productId**: string (ReadOnly): Id of the product for which the subscription is purchased.
* **productTypeId**: string (ReadOnly): Type Id of the product for which the subscription is purchased.
* **quantity**: int: The quantity of licenses or fulfillment units for the subscription.
* **skuId**: string (ReadOnly): The SKU ID of the product for which the subscription is purchased. This field is is only available  for Microsoft Customer Agreement billing accounts.
* **termDuration**: string (ReadOnly): The duration in ISO8601 format for which you can use the subscription. Example: P1M, P3M, P1Y
* **termEndDate**: string (ReadOnly): End date of the term in UTC time.

## RenewProperties
### Properties
* **purchaseProperties**: [PurchaseRequest](#purchaserequest): Purchase request.

## RenewPropertiesResponse
### Properties
* **billingCurrencyTotal**: [Price](#price): Currency and amount that customer will be charged in customer's local currency for renewal purchase. Tax is not included.
* **pricingCurrencyTotal**: [Price](#price): Amount that Microsoft uses for record. Used during refund for calculating refund limit. Tax is not included. This is locked price 30 days before expiry.
* **purchaseProperties**: [ReservationPurchaseRequest](#reservationpurchaserequest): The request for reservation purchase

## Reseller
### Properties
* **description**: string (ReadOnly): The name of the reseller.
* **resellerId**: string (ReadOnly): The MPN ID of the reseller.

## Reservation
### Properties
* **etag**: int
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **location**: string: The location of the reservation.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ReservationProperty](#reservationproperty): The properties associated to this reservation
* **sku**: [ReservationSkuProperty](#reservationskuproperty): The sku information associated to this reservation
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Tags](#tags): Tags for this reservation
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ReservationAppliedScopeProperties
### Properties
* **displayName**: string: Display name
* **managementGroupId**: string: Fully-qualified identifier of the management group where the benefit must be applied.
* **resourceGroupId**: string: Fully-qualified identifier of the resource group.
* **subscriptionId**: string: Fully-qualified identifier of the subscription.
* **tenantId**: string: Tenant ID where the reservation should apply benefit.

## ReservationExtendedStatusInfo
### Properties
* **message**: string: The message giving detailed information about the status code.
* **properties**: [ExtendedStatusDefinitionProperties](#extendedstatusdefinitionproperties): Properties for extended status information
* **statusCode**: 'Active' | 'CapacityError' | 'CapacityRestricted' | 'CreditLineCheckFailed' | 'Exchanged' | 'Expired' | 'Merged' | 'NoBenefit' | 'NoBenefitDueToSubscriptionDeletion' | 'NoBenefitDueToSubscriptionTransfer' | 'None' | 'PaymentInstrumentError' | 'Pending' | 'Processing' | 'PurchaseError' | 'RiskCheckFailed' | 'Split' | 'Succeeded' | 'UnknownError' | 'Warning' | string: The status of the reservation.

## ReservationMergeProperties
### Properties
* **mergeDestination**: string: Reservation resource id Created due to the merge. Format of the resource id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **mergeSources**: string[]: Resource ids of the source reservation's merged to form this reservation. Format of the resource id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## ReservationOrderBillingPlanInformation
### Properties
* **nextPaymentDueDate**: string: For recurring billing plans, indicates the date when next payment will be processed. Null when total is paid off.
* **pricingCurrencyTotal**: [Price](#price): Amount of money to be paid for the Order. Tax is not included.
* **startDate**: string: Date when the billing plan has started.
* **transactions**: [ReservationPaymentDetail](#reservationpaymentdetail)[]

## ReservationOrderProperty
### Properties
* **benefitStartTime**: string: This is the DateTime when the reservation benefit started.
* **billingAccountId**: string: Billing account Id associated to this reservation order.
* **billingPlan**: 'Monthly' | 'Upfront' | string: Represent the billing plans.
* **billingProfileId**: string: Billing profile Id associated to this reservation order.
* **createdDateTime**: string: This is the DateTime when the reservation order was created.
* **customerId**: string: Fully-qualified identifier of the customerId where the benefit is applied. Present only for Enterprise Agreement PartnerLed customers.
* **displayName**: string: Friendly name for user to easily identified the reservation order.
* **enrollmentId**: string: Enrollment id of the reservation order.
* **expiryDate**: string: This is the date when the reservation order will expire.
* **expiryDateTime**: string: This is the date-time when the reservation order will expire.
* **extendedStatusInfo**: [ReservationExtendedStatusInfo](#reservationextendedstatusinfo): Extended status information for the reservation.
* **originalQuantity**: int: Total original quantity of the skus purchased in the reservation order.
* **planInformation**: [ReservationOrderBillingPlanInformation](#reservationorderbillingplaninformation): Information describing the type of billing plan for this reservation order.
* **productCode**: string: Represents UPN
* **provisioningState**: string (ReadOnly): The provisioning state of the reservation, e.g. Succeeded
* **requestDateTime**: string: This is the DateTime when the reservation order was initially requested for purchase.
* **reservations**: [Reservation](#reservation)[]
* **reviewDateTime**: string: This is the date-time when the Azure Hybrid Benefit needs to be reviewed.
* **term**: string (ReadOnly): The term of the reservation, e.g. P1Y

## ReservationPaymentDetail
### Properties
* **billingAccount**: string: Shows the Account that is charged for this payment.
* **billingCurrencyTotal**: [Price](#price): Amount charged in Billing currency. Tax not included. Is null for future payments
* **dueDate**: string: Date when the payment needs to be done.
* **extendedStatusInfo**: [ReservationExtendedStatusInfo](#reservationextendedstatusinfo): Extended status information for the reservation.
* **paymentDate**: string: Date when the transaction is completed. Is null when it is scheduled.
* **pricingCurrencyTotal**: [Price](#price): Amount in pricing currency. Tax not included.
* **status**: 'Cancelled' | 'Completed' | 'Failed' | 'Pending' | 'Scheduled' | 'Succeeded' | string: Describes whether the payment is completed, failed, pending, cancelled or scheduled in the future.

## ReservationProperty
### Properties
* **appliedScopeProperties**: [ReservationAppliedScopeProperties](#reservationappliedscopeproperties): Properties specific to applied scope type. Not required if not applicable. Required and need to provide tenantId and managementGroupId if AppliedScopeType is ManagementGroup
* **appliedScopes**: string[]: The array of applied scopes of a reservation. Will be null if the reservation is in Shared scope
* **appliedScopeType**: string (ReadOnly): The applied scope type of the reservation.
* **archived**: bool: Indicates if the reservation is archived
* **benefitStartTime**: string: This is the DateTime when the reservation benefit started.
* **billingPlan**: 'Monthly' | 'Upfront' | string: The billing plan options available for this sku.
* **billingScopeId**: string (ReadOnly): Subscription that will be charged for purchasing reservation or savings plan
* **capabilities**: string: Capabilities of the reservation
* **displayName**: string (ReadOnly): The display name of the reservation
* **displayProvisioningState**: string (ReadOnly): The provisioning state of the reservation for display, e.g. Succeeded
* **effectiveDateTime**: string (ReadOnly): The effective date time of the reservation
* **expiryDate**: string (ReadOnly): The expiry date of the reservation
* **expiryDateTime**: string: This is the date-time when the reservation will expire.
* **extendedStatusInfo**: [ReservationExtendedStatusInfo](#reservationextendedstatusinfo): The message giving detailed information about the status code.
* **instanceFlexibility**: 'Off' | 'On' | string: Allows reservation discount to be applied across skus within the same auto fit group. Not all skus support instance size flexibility.
* **lastUpdatedDateTime**: string (ReadOnly): DateTime of the last time the reservation was updated.
* **mergeProperties**: [ReservationMergeProperties](#reservationmergeproperties): Properties of reservation merge
* **productCode**: string: Represents UPN
* **provisioningState**: string (ReadOnly): The provisioning state of the reservation, e.g. Succeeded
* **provisioningSubState**: string (ReadOnly): The provisioning state of the reservation, e.g. Succeeded
* **purchaseDate**: string: This is the date when the reservation was purchased.
* **purchaseDateTime**: string: This is the date-time when the reservation was purchased.
* **quantity**: int (ReadOnly): The number of the reservation.
* **renew**: bool (ReadOnly): The renew state of the reservation
* **renewDestination**: string: Reservation Id of the reservation which is purchased because of renew. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}.
* **renewProperties**: [RenewPropertiesResponse](#renewpropertiesresponse): The renew properties for a reservation.
* **renewSource**: string (ReadOnly): The renew source of the reservation
* **reservedResourceType**: string (ReadOnly): The reserved source type of the reservation, e.g. virtual machine.
* **reviewDateTime**: string: This is the date-time when the Azure Hybrid Benefit needs to be reviewed.
* **skuDescription**: string (ReadOnly): The sku description of the reservation
* **splitProperties**: [ReservationSplitProperties](#reservationsplitproperties): Properties of reservation split
* **swapProperties**: [ReservationSwapProperties](#reservationswapproperties): Properties of reservation swap
* **term**: string (ReadOnly): The term of the reservation, e.g. P1Y
* **userFriendlyAppliedScopeType**: string (ReadOnly): The applied scope type of the reservation for display, e.g. Shared
* **userFriendlyRenewState**: string (ReadOnly): The renew state of the reservation for display, e.g. On
* **utilization**: [ReservationPropertyUtilization](#reservationpropertyutilization) (ReadOnly): Reservation utilization

## ReservationPropertyUtilization
### Properties
* **aggregates**: [ReservationUtilizationAggregates](#reservationutilizationaggregates)[]: The array of aggregates of a reservation's utilization
* **trend**: string (ReadOnly): last 7 day utilization trend for a reservation

## ReservationPurchaseRequest
### Properties
* **location**: string: The Azure region where the reserved resource lives.
* **properties**: [ReservationPurchaseRequestProperties](#reservationpurchaserequestproperties): Properties of reservation purchase request
* **sku**: [SkuName](#skuname): The name of sku

## ReservationPurchaseRequestProperties
### Properties
* **appliedScopeProperties**: [ReservationAppliedScopeProperties](#reservationappliedscopeproperties): Properties specific to applied scope type. Not required if not applicable. Required and need to provide tenantId and managementGroupId if AppliedScopeType is ManagementGroup
* **appliedScopes**: string[]: List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
* **appliedScopeType**: 'ManagementGroup' | 'Shared' | 'Single' | string: Type of the Applied Scope.
* **billingPlan**: 'Monthly' | 'Upfront' | string: Represent the billing plans.
* **billingScopeId**: string (ReadOnly): Subscription that will be charged for purchasing reservation or savings plan
* **displayName**: string: Friendly name of the reservation
* **instanceFlexibility**: 'Off' | 'On' | string: Allows reservation discount to be applied across skus within the same auto fit group. Not all skus support instance size flexibility.
* **quantity**: int: Quantity of the skus that are part of the reservation. Must be greater than zero.
* **renew**: bool: Setting this to true will automatically purchase a new benefit on the expiration date time.
* **reservedResourceProperties**: [ReservationPurchaseRequestPropertiesReservedResourceProperties](#reservationpurchaserequestpropertiesreservedresourceproperties): Properties specific to each reserved resource type. Not required if not applicable.
* **reservedResourceType**: string (ReadOnly): The reserved source type of the reservation, e.g. virtual machine.
* **reviewDateTime**: string: This is the date-time when the Azure hybrid benefit needs to be reviewed.
* **term**: string (ReadOnly): The term of the reservation, e.g. P1Y

## ReservationPurchaseRequestPropertiesReservedResourceProperties
### Properties
* **instanceFlexibility**: 'Off' | 'On' | string: Turning this on will apply the reservation discount to other VMs in the same VM size group. Only specify for VirtualMachines reserved resource type.

## ReservationSkuProperty
### Properties
* **name**: string (ReadOnly): The name of the reservation sku.

## ReservationSplitProperties
### Properties
* **splitDestinations**: string[]: List of destination resource id that are created due to split. Format of the resource id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **splitSource**: string: Resource id of the reservation from which this is split. Format of the resource id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## ReservationSwapProperties
### Properties
* **swapDestination**: string: Reservation resource id that the original resource gets swapped to. Format of the resource id is /providers/microsoft.capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
* **swapSource**: string: Resource id of the source reservation that gets swapped. Format of the resource id is /providers/microsoft.capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}

## ReservationUtilizationAggregates
### Properties
* **grain**: int (ReadOnly): The grain of the aggregate
* **grainUnit**: string (ReadOnly): The grain unit of the aggregate
* **value**: int (ReadOnly): The aggregate value
* **valueUnit**: string (ReadOnly): The aggregate value unit

## SavingsPlanModelProperties
### Properties
* **appliedScopeProperties**: [AppliedScopeProperties](#appliedscopeproperties): Properties specific to applied scope type. Not required if not applicable.
* **appliedScopeType**: 'ManagementGroup' | 'Shared' | 'Single' | string: Type of the Applied Scope.
* **benefitStartTime**: string (ReadOnly): This is the DateTime when the savings plan benefit starts.
* **billingAccountId**: string (ReadOnly): Fully-qualified identifier of the billing account where the savings plan is applied.
* **billingPlan**: 'P1M' | string: Represents the billing plan in ISO 8601 format. Required only for monthly purchases.
* **billingProfileId**: string (ReadOnly): Fully-qualified identifier of the billing profile where the savings plan is applied. Present only for Field-led or Customer-led customers.
* **billingScopeId**: string: Subscription that will be charged for purchasing SavingsPlan
* **commitment**: [Commitment](#commitment): Commitment towards the benefit.
* **customerId**: string (ReadOnly): Fully-qualified identifier of the customer where the savings plan is applied. Present only for Partner-led customers.
* **displayName**: string: Display name
* **displayProvisioningState**: string (ReadOnly): The provisioning state of the savings plan for display, e.g. Succeeded
* **effectiveDateTime**: string (ReadOnly): DateTime of the savings plan starting when this version is effective from.
* **expiryDateTime**: string (ReadOnly): This is the date-time when the savings plan will expire.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly): Extended status information
* **productCode**: string: Represents UPN
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string: The provisioning state of the resource during a long-running operation.
* **purchaseDateTime**: string (ReadOnly): Date time when the savings plan was purchased.
* **renew**: bool: Setting this to true will automatically purchase a new benefit on the expiration date time.
* **renewDestination**: string: SavingsPlan Id of the SavingsPlan which is purchased because of renew.
* **renewProperties**: [RenewProperties](#renewproperties): Properties specific to renew.
* **renewSource**: string: SavingsPlan Id of the SavingsPlan from which this SavingsPlan is renewed.
* **term**: 'P1Y' | 'P3Y' | 'P5Y' | string: Represents the Savings plan term in ISO 8601 format.
* **userFriendlyAppliedScopeType**: string (ReadOnly): The applied scope type of the savings plan for display, e.g. Shared
* **utilization**: [Utilization](#utilization) (ReadOnly): Savings plan utilization

## SavingsPlanOrderModelProperties
### Properties
* **benefitStartTime**: string (ReadOnly): DateTime when the savings plan benefit started.
* **billingAccountId**: string (ReadOnly): Fully-qualified identifier of the billing account where the savings plan is applied.
* **billingPlan**: 'P1M' | string: Represents the billing plan in ISO 8601 format. Required only for monthly purchases.
* **billingProfileId**: string (ReadOnly): Fully-qualified identifier of the billing profile where the savings plan is applied. Present only for Field-led or Customer-led customers.
* **billingScopeId**: string: Subscription that will be charged for purchasing SavingsPlan
* **customerId**: string (ReadOnly): Fully-qualified identifier of the customer where the savings plan is applied. Present only for Partner-led customers.
* **displayName**: string: Display name
* **expiryDateTime**: string (ReadOnly): DateTime when the savings plan will expire.
* **extendedStatusInfo**: [ExtendedStatusInfo](#extendedstatusinfo) (ReadOnly): Extended status information
* **planInformation**: [BillingPlanInformation](#billingplaninformation): Information describing the type of billing plan for this savings plan.
* **productCode**: string: Represents UPN
* **provisioningState**: string (ReadOnly): The provisioning state of the savings plan, e.g. Succeeded
* **savingsPlans**: string[]
* **term**: 'P1Y' | 'P3Y' | 'P5Y' | string: Represents the Savings plan term in ISO 8601 format.

## Sku
### Properties
* **name**: string: Name of the SKU to be applied

## SkuName
### Properties
* **name**: string

## SpendingLimitDetails
### Properties
* **amount**: int: The initial amount for the billing profile.
* **currency**: string: The currency in which the charges for the billing profile are billed.
* **endDate**: string: The date when this spending limit is no longer in effect.
* **startDate**: string: The date when this spending limit goes into effect.
* **status**: 'Active' | 'Expired' | 'LimitReached' | 'LimitRemoved' | 'None' | 'Other' | string: The status of current spending limit.
* **type**: 'AcademicSponsorship' | 'AzureConsumptionCredit' | 'AzureForStudents' | 'AzureForStudentsStarter' | 'AzurePassSponsorship' | 'FreeAccount' | 'MSDN' | 'MpnSponsorship' | 'NonProfitSponsorship' | 'None' | 'Other' | 'Sandbox' | 'Sponsorship' | 'StartupSponsorship' | 'VisualStudio' | string: The type of spending limit.

## SubscriptionPolicyProperties
### Properties
* **policies**: [PolicySummary](#policysummary)[]: List of all policies defined at the billing scope.
* **provisioningState**: 'Canceled' | 'ConfirmedBilling' | 'Created' | 'Creating' | 'Expired' | 'Failed' | 'New' | 'Pending' | 'PendingBilling' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource during a long-running operation.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## SystemOverrides
### Properties
* **cancellation**: 'Allowed' | 'NotAllowed' | string (ReadOnly): The policy override for the subscription indicates whether the self-serve cancellation or seat reduction is allowed.
* **cancellationAllowedEndDate**: string (ReadOnly): The end date in UTC time by when the self-serve cancellation ends.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TaxIdentifier
### Properties
* **country**: string: The country of the tax identifier.
* **id**: string: The id of the tax identifier.
* **scope**: string: The scope of the tax identifier.
* **status**: 'Invalid' | 'Other' | 'Valid' | string: The status of the tax identifier.
* **type**: 'BrazilCcmId' | 'BrazilCnpjId' | 'BrazilCpfId' | 'CanadianFederalExempt' | 'CanadianProvinceExempt' | 'ExternalTaxation' | 'IndiaFederalServiceTaxId' | 'IndiaFederalTanId' | 'IndiaPanId' | 'IndiaStateCstId' | 'IndiaStateGstINId' | 'IndiaStateVatId' | 'IntlExempt' | 'LoveCode' | 'MobileBarCode' | 'NationalIdentificationNumber' | 'Other' | 'PublicSectorId' | 'USExempt' | 'VatId' | string: The type of the tax identifier.

## TransferError
### Properties
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error message.

## Utilization
### Properties
* **aggregates**: [UtilizationAggregates](#utilizationaggregates)[]: The array of aggregates of a savings plan's utilization
* **trend**: string (ReadOnly): The trend for a savings plan's utilization

## UtilizationAggregates
### Properties
* **grain**: int (ReadOnly): The grain of the aggregate
* **grainUnit**: string (ReadOnly): The grain unit of the aggregate
* **value**: int (ReadOnly): The aggregate value
* **valueUnit**: string (ReadOnly): The aggregate value unit

