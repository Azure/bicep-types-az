# Microsoft.Management @ 2018-01-01-preview

## Resource Microsoft.Management/managementGroups@2018-01-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CreateManagementGroupProperties](#createmanagementgroupproperties)
* **type**: 'Microsoft.Management/managementGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Management/managementGroups/subscriptions@2018-01-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Management/managementGroups/subscriptions' (ReadOnly, DeployTimeConstant)

## CreateManagementGroupProperties
### Properties
* **children**: [CreateManagementGroupChildInfo](#createmanagementgroupchildinfo)[] (ReadOnly)
* **details**: [CreateManagementGroupDetails](#createmanagementgroupdetails)
* **displayName**: string
* **roles**: string[] (ReadOnly)
* **tenantId**: string (ReadOnly)

## CreateManagementGroupChildInfo
### Properties
* **children**: [CreateManagementGroupChildInfo](#createmanagementgroupchildinfo)[] (ReadOnly)
* **displayName**: string (ReadOnly)
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **roles**: string[] (ReadOnly)
* **type**: '/providers/Microsoft.Management/managementGroups' | '/subscriptions' (ReadOnly)

## CreateManagementGroupDetails
### Properties
* **parent**: [CreateParentGroupInfo](#createparentgroupinfo)
* **updatedBy**: string (ReadOnly)
* **updatedTime**: string (ReadOnly)
* **version**: int (ReadOnly)

## CreateParentGroupInfo
### Properties
* **displayName**: string (ReadOnly)
* **id**: string
* **name**: string (ReadOnly)

