# Microsoft.Management @ 2018-03-01-preview

## Microsoft.Management/managementGroups
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant)
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
* **roles**: string[] (ReadOnly)
* **tenantId**: string (ReadOnly)

## CreateManagementGroupChildInfo
### Properties
* **children**: CreateManagementGroupChildInfo[] (ReadOnly)
* **displayName**: string (ReadOnly)
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **roles**: string[] (ReadOnly)
* **type**: '/providers/Microsoft.Management/managementGroups' | '/subscriptions' (ReadOnly)

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

