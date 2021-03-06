# Microsoft.Marketplace @ 2020-12-01

## Resource Microsoft.Marketplace/privateStores/adminRequestApprovals@2020-12-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdminRequestApprovalProperties](#adminrequestapprovalproperties): Admin approval request resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Marketplace/privateStores/adminRequestApprovals' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Marketplace/privateStores/requestApprovals@2020-12-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RequestApprovalProperties](#requestapprovalproperties): Approval request resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.Marketplace/privateStores/requestApprovals' (ReadOnly, DeployTimeConstant): The resource type

## AdminRequestApprovalProperties
### Properties
* **adminAction**: 'Approved' | 'Rejected': Gets or sets admin action
* **administrator**: string: Gets or sets admin details
* **approvedPlans**: string[]: Gets or sets Approved plans ids, empty in case of rejected
* **comment**: string: Gets or sets admin comment
* **displayName**: string (ReadOnly): Gets display name
* **offerId**: string: Gets or sets offer Id
* **plans**: [PlanRequesterDetails](#planrequesterdetails)[] (ReadOnly): Gets list of plans with requesters details
* **publisherId**: string: Gets or sets publisher Id

## PlanRequesterDetails
### Properties
* **planDisplayName**: string (ReadOnly): Gets the plan display name
* **planId**: string (ReadOnly): Gets the plan id
* **requesters**: [UserRequestDetails](#userrequestdetails)[] (ReadOnly): Gets requesters details list

## UserRequestDetails
### Properties
* **date**: string (ReadOnly): Gets request date
* **justification**: string (ReadOnly): Gets justification
* **user**: string (ReadOnly): Gets user id

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that creates/modifies resources
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that creates/modifies resources

## RequestApprovalProperties
### Properties
* **isClosed**: bool (ReadOnly): Gets a value indicating whether the request is closed
* **messageCode**: int: Gets or sets the request approval message code
* **offerDisplayName**: string (ReadOnly): Gets offer display name
* **offerId**: string: Gets or sets unique offer id.
* **plansDetails**: [PlanDetails](#plandetails)[]: Gets or sets the plans details
* **publisherId**: string: The offer's publisher id

## PlanDetails
### Properties
* **justification**: string: Gets or sets user's justification for the plan's request
* **planId**: string: Gets or sets Plan Id
* **requestDate**: any (ReadOnly): Anything
* **status**: 'Approved' | 'None' | 'Pending' | 'Rejected' (ReadOnly): Gets the plan status

