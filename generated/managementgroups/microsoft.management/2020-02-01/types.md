# Microsoft.Management @ 2020-02-01

## Resource Microsoft.Management/managementGroups@2020-02-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateManagementGroupProperties
* **type**: 'Microsoft.Management/managementGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Management/managementGroups/settings@2020-02-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateOrUpdateSettingsProperties
* **type**: 'Microsoft.Management/managementGroups/settings' (ReadOnly, DeployTimeConstant)

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

## CreateOrUpdateSettingsProperties
### Properties
* **defaultManagementGroup**: string
* **requireAuthorizationForGroupCreation**: bool

