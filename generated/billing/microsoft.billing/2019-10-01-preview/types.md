# Microsoft.Billing @ 2019-10-01-preview

## Resource Microsoft.Billing/billingAccounts/billingProfiles@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingProfiles/instructions@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InstructionProperties
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/instructions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingProfiles/policies@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyProperties
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BillingRoleAssignmentProperties
* **type**: 'Microsoft.Billing/billingAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/customers/policies@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomerPolicyProperties
* **type**: 'Microsoft.Billing/billingAccounts/customers/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BillingRoleAssignmentProperties
* **type**: 'Microsoft.Billing/billingAccounts/departments/billingRoleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BillingRoleAssignmentProperties
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant)

## InstructionProperties
### Properties
* **amount**: int (Required)
* **creationDate**: string
* **endDate**: string (Required)
* **startDate**: string (Required)

## PolicyProperties
### Properties
* **marketplacePurchases**: 'AllAllowed' | 'NotAllowed' | 'OnlyFreeAllowed'
* **reservationPurchases**: 'Allowed' | 'NotAllowed'
* **viewCharges**: 'Allowed' | 'NotAllowed'

## BillingRoleAssignmentProperties
### Properties
* **createdByPrincipalId**: string (ReadOnly)
* **createdByPrincipalTenantId**: string (ReadOnly)
* **createdByUserEmailAddress**: string (ReadOnly)
* **createdOn**: string (ReadOnly)
* **name**: string (ReadOnly)
* **principalId**: string
* **principalTenantId**: string
* **roleDefinitionId**: string
* **scope**: string (ReadOnly)
* **userAuthenticationType**: string
* **userEmailAddress**: string

## CustomerPolicyProperties
### Properties
* **viewCharges**: 'Allowed' | 'NotAllowed'

