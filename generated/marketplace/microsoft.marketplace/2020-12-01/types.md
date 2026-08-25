# Microsoft.Marketplace @ 2020-12-01

## Resource Microsoft.Marketplace/privateStores/adminRequestApprovals@2020-12-01
* **Readable Scope(s)**: None
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdminRequestApprovalProperties](#adminrequestapprovalproperties): The privateStore admin Approval request data structure.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **type**: 'Microsoft.Marketplace/privateStores/adminRequestApprovals' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Marketplace/privateStores/requestApprovals@2020-12-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RequestApprovalProperties](#requestapprovalproperties): The privateStore approval request data structure.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **type**: 'Microsoft.Marketplace/privateStores/requestApprovals' (ReadOnly, DeployTimeConstant): The resource type

## Function acknowledgeNotification (Microsoft.Marketplace/privateStores/offers@2020-12-01)
* **Resource**: Microsoft.Marketplace/privateStores/offers
* **ApiVersion**: 2020-12-01
* **Input**: [AcknowledgeOfferNotificationProperties](#acknowledgeoffernotificationproperties)
* **Output**: any

## Function query (Microsoft.Marketplace/privateStores/requestApprovals@2020-12-01)
* **Resource**: Microsoft.Marketplace/privateStores/requestApprovals
* **ApiVersion**: 2020-12-01
* **Input**: [QueryRequestApprovalProperties](#queryrequestapprovalproperties)
* **Output**: [QueryRequestApproval](#queryrequestapproval)

## Function queryNotificationsState (Microsoft.Marketplace/privateStores@2020-12-01)
* **Resource**: Microsoft.Marketplace/privateStores
* **ApiVersion**: 2020-12-01
* **Output**: [PrivateStoreNotificationsState](#privatestorenotificationsstate)

## Function withdrawPlan (Microsoft.Marketplace/privateStores/requestApprovals@2020-12-01)
* **Resource**: Microsoft.Marketplace/privateStores/requestApprovals
* **ApiVersion**: 2020-12-01
* **Input**: [WithdrawProperties](#withdrawproperties)
* **Output**: any

## AcknowledgeOfferNotificationDetails
### Properties
* **acknowledge**: bool: Gets or sets a value indicating whether acknowledge action flag is enabled
* **addPlans**: string[]: Gets or sets added plans
* **dismiss**: bool: Gets or sets a value indicating whether dismiss action flag is enabled
* **removeOffer**: bool: Gets or sets a value indicating whether remove offer action flag is enabled
* **removePlans**: string[]: Gets or sets remove plans

## AcknowledgeOfferNotificationProperties
### Properties
* **properties**: [AcknowledgeOfferNotificationDetails](#acknowledgeoffernotificationdetails): Notification update request payload details

## AdminRequestApprovalProperties
### Properties
* **adminAction**: 'Approved' | 'Rejected' | string: Gets or sets admin action
* **administrator**: string: Gets or sets admin details
* **approvedPlans**: string[]: Gets or sets Approved plans ids, empty in case of rejected
* **comment**: string: Gets or sets admin comment
* **displayName**: string (ReadOnly): Gets display name
* **offerId**: string: Gets or sets offer Id
* **plans**: [PlanRequesterDetails](#planrequesterdetails)[] (ReadOnly): Gets list of plans with requesters details
* **publisherId**: string: Gets or sets publisher Id

## NewNotifications
### Properties
* **displayName**: string: Gets offer display name
* **icon**: string: Gets or sets the icon url
* **isFuturePlansEnabled**: bool: Gets a value indicating whether future plans is enabled.
* **messageCode**: int: Gets or sets the notification message id
* **offerId**: string: Gets offer id
* **plans**: [PlanNotificationDetails](#plannotificationdetails)[]: Gets or sets removed plans notifications

## PlanDetails
### Properties
* **justification**: string: Gets or sets user's justification for the plan's request
* **planId**: string: Gets or sets Plan Id
* **requestDate**: any (ReadOnly): Gets request date
* **status**: 'Approved' | 'None' | 'Pending' | 'Rejected' | string (ReadOnly): Gets the plan status

## PlanNotificationDetails
### Properties
* **planDisplayName**: string: Gets or sets the plan display name
* **planId**: string: Gets or sets the plan id

## PlanRequesterDetails
### Properties
* **planDisplayName**: string (ReadOnly): Gets the plan display name
* **planId**: string (ReadOnly): Gets the plan id
* **requesters**: [UserRequestDetails](#userrequestdetails)[] (ReadOnly): Gets requesters details list

## PrivateStoreNotificationsState
### Properties
* **approvalRequests**: [RequestApprovalsDetails](#requestapprovalsdetails)[]
* **newNotifications**: [NewNotifications](#newnotifications)[]
* **stopSellNotifications**: [StopSellNotifications](#stopsellnotifications)[]

## QueryRequestApproval
### Properties
* **etag**: string: Gets or sets e-tag field
* **messageCode**: int: Gets or sets the notification message id
* **plansDetails**: [QueryRequestApprovalPlansDetails](#queryrequestapprovalplansdetails): Gets or sets the plans details
* **uniqueOfferId**: string: Gets or sets unique offer id.

## QueryRequestApprovalPlansDetails
### Properties
### Additional Properties
* **Additional Properties Type**: [PlanDetails](#plandetails)

## QueryRequestApprovalProperties
### Properties
* **properties**: [RequestDetails](#requestdetails): The details to get the request plans statuses

## RequestApprovalProperties
### Properties
* **isClosed**: bool (ReadOnly): Gets a value indicating whether the request is closed
* **messageCode**: int: Gets or sets the request approval message code
* **offerDisplayName**: string (ReadOnly): Gets offer display name
* **offerId**: string: Gets or sets unique offer id.
* **plansDetails**: [PlanDetails](#plandetails)[]: Gets or sets the plans details
* **publisherId**: string: The offer's publisher id

## RequestApprovalsDetails
### Properties
* **displayName**: string: Gets offer display name
* **icon**: string: Gets or sets the icon url
* **messageCode**: int: Gets or sets the notification message id
* **offerId**: string: Gets offer id
* **plans**: [PlanNotificationDetails](#plannotificationdetails)[]: Gets or sets removed plans notifications
* **publisherId**: string: Gets or sets publisher id

## RequestDetails
### Properties
* **planIds**: string[]: Current plans list
* **publisherId**: string: The offer's publisher id

## StopSellNotifications
### Properties
* **displayName**: string: Gets offer display name
* **icon**: string: Gets or sets the icon url
* **isEntire**: bool: Gets a value indicating whether entire offer is in stop sell or only few of its plans
* **messageCode**: int: Gets or sets the notification message id
* **offerId**: string: Gets offer id
* **plans**: [PlanNotificationDetails](#plannotificationdetails)[]: Gets or sets removed plans notifications

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource

## UserRequestDetails
### Properties
* **date**: string (ReadOnly): Gets request date
* **justification**: string (ReadOnly): Gets justification
* **user**: string (ReadOnly): Gets user id

## WithdrawDetails
### Properties
* **planId**: string: Gets or sets Plan Id
* **publisherId**: string: The offer's publisher id

## WithdrawProperties
### Properties
* **properties**: [WithdrawDetails](#withdrawdetails): Withdraw properties details

