# Microsoft.Education @ 2021-12-01-preview

## Resource Microsoft.Education/labs@2021-12-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [LabProperties](#labproperties): Get lab response properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Education/labs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Education/labs/students@2021-12-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StudentProperties](#studentproperties): Get student response properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Education/labs/students' (ReadOnly, DeployTimeConstant): The resource type

## Amount
### Properties
* **currency**: string: The type of currency being used for the value.
* **value**: int: Amount value.

## LabProperties
### Properties
* **budgetPerStudent**: [Amount](#amount) (Required): Default monetary cap for each student in this lab
* **description**: string (Required): Detail description of this lab
* **displayName**: string (Required): Lab Display Name
* **effectiveDate**: string (ReadOnly): Lab creation date
* **expirationDate**: string (Required): Default expiration date for each student in this lab
* **invitationCode**: string (ReadOnly): invitation code for redeemable lab
* **maxStudentCount**: int (ReadOnly): the total number of students that can be accepted to the lab.
* **status**: 'Active' | 'Deleted' | string (ReadOnly): The status of this lab
* **totalAllocatedBudget**: [Amount](#amount) (ReadOnly): Total allocated budget
* **totalBudget**: [Amount](#amount) (ReadOnly): Total budget

## StudentProperties
### Properties
* **budget**: [Amount](#amount) (Required): Student Budget
* **effectiveDate**: string (ReadOnly): Date student was added to the lab
* **email**: string (Required): Student Email
* **expirationDate**: string (Required): Date this student is set to expire from the lab.
* **firstName**: string (Required): First Name
* **lastName**: string (Required): Last Name
* **role**: 'Admin' | 'Student' | string (Required): Student Role
* **status**: 'Active' | 'Deleted' | 'Disabled' | 'Expired' | 'Pending' | string (ReadOnly): Student Lab Status
* **subscriptionAlias**: string: Subscription alias
* **subscriptionId**: string (ReadOnly): Subscription Id
* **subscriptionInviteLastSentDate**: string: subscription invite last sent date

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

