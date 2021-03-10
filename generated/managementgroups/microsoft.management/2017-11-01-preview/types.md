# Microsoft.Management @ 2017-11-01-preview

## Resource Microsoft.Management/managementGroups@2017-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-11-01-preview' (ReadOnly, DeployTimeConstant)
* **displayName**: string (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **parentId**: string (WriteOnly)
* **properties**: [ManagementGroupProperties](#managementgroupproperties) (ReadOnly)
* **type**: 'Microsoft.Management/managementGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Management/managementGroups/subscriptions@2017-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Management/managementGroups/subscriptions' (ReadOnly, DeployTimeConstant)

## ManagementGroupProperties
### Properties
* **children**: [ManagementGroupChildInfo](#managementgroupchildinfo)[] (ReadOnly)
* **details**: [ManagementGroupDetails](#managementgroupdetails) (ReadOnly)
* **displayName**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## ManagementGroupChildInfo
### Properties
* **childId**: string (ReadOnly)
* **children**: [ManagementGroupChildInfo](#managementgroupchildinfo)[] (ReadOnly)
* **childType**: 'ManagementGroup' | 'Subscription' (ReadOnly)
* **displayName**: string (ReadOnly)

## ManagementGroupDetails
### Properties
* **parent**: [ParentGroupInfo](#parentgroupinfo) (ReadOnly)
* **updatedBy**: string (ReadOnly)
* **updatedTime**: string (ReadOnly)
* **version**: int (ReadOnly)

## ParentGroupInfo
### Properties
* **displayName**: string (ReadOnly)
* **parentId**: string (ReadOnly)

