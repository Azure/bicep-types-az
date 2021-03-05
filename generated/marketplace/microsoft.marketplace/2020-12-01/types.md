# Microsoft.Marketplace @ 2020-12-01

## Resource Microsoft.Marketplace/privateStores/adminRequestApprovals@2020-12-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AdminRequestApprovalProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Marketplace/privateStores/adminRequestApprovals' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Marketplace/privateStores/requestApprovals@2020-12-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RequestApprovalProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Marketplace/privateStores/requestApprovals' (ReadOnly, DeployTimeConstant)

## AdminRequestApprovalProperties
### Properties
* **adminAction**: 'Approved' | 'Rejected'
* **administrator**: string
* **approvedPlans**: string[]
* **comment**: string
* **displayName**: string (ReadOnly)
* **offerId**: string
* **plans**: PlanRequesterDetails[] (ReadOnly)
* **publisherId**: string

## PlanRequesterDetails
### Properties
* **planDisplayName**: string (ReadOnly)
* **planId**: string (ReadOnly)
* **requesters**: UserRequestDetails[] (ReadOnly)

## UserRequestDetails
### Properties
* **date**: string (ReadOnly)
* **justification**: string (ReadOnly)
* **user**: string (ReadOnly)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## RequestApprovalProperties
### Properties
* **isClosed**: bool (ReadOnly)
* **messageCode**: int
* **offerDisplayName**: string (ReadOnly)
* **offerId**: string
* **plansDetails**: PlanDetails[]
* **publisherId**: string

## PlanDetails
### Properties
* **justification**: string
* **planId**: string
* **status**: 'Approved' | 'None' | 'Pending' | 'Rejected' (ReadOnly)

