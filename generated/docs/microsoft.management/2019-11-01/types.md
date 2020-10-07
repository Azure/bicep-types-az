# Microsoft.Management @ 2019-11-01

## Microsoft.Management/managementGroups
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateManagementGroupProperties
* **type**: 'Microsoft.Management/managementGroups' (ReadOnly, DeployTimeConstant)

## CreateManagementGroupProperties
### Properties
* **children**: CreateManagementGroupChildInfo[] (ReadOnly)
* **details**: CreateManagementGroupDetails
* **displayName**: string
* **path**: ManagementGroupPathElement[] (ReadOnly)
* **roles**: string[] (ReadOnly)
* **tenantId**: string (ReadOnly)

## CreateManagementGroupChildInfo
### Properties
* **children**: CreateManagementGroupChildInfo[] (ReadOnly)
* **displayName**: string (ReadOnly)
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **roles**: string[] (ReadOnly)
* **type**: '/subscriptions' | 'Microsoft.Management/managementGroups' (ReadOnly)

## CreateManagementGroupDetails
### Properties
* **parent**: CreateParentGroupInfo
* **updatedBy**: string (ReadOnly)
* **updatedTime**: string (ReadOnly)
* **version**: int (ReadOnly)

## CreateParentGroupInfo
### Properties
* **displayName**: string (ReadOnly)
* **id**: string
* **name**: string (ReadOnly)

## ManagementGroupPathElement
### Properties
* **displayName**: string (ReadOnly)
* **name**: string (ReadOnly)

