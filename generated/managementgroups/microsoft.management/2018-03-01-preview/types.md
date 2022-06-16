# Microsoft.Management @ 2018-03-01-preview

## Resource Microsoft.Management/managementGroups@2018-03-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateManagementGroupPropertiesOrManagementGroupProperties](#createmanagementgrouppropertiesormanagementgroupproperties): The generic properties of a management group used during creation.
* **type**: 'Microsoft.Management/managementGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Management/managementGroups/subscriptions@2018-03-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Management/managementGroups/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## CreateManagementGroupChildInfoOrManagementGroupChildInfo
### Properties
* **children**: [CreateManagementGroupChildInfoOrManagementGroupChildInfo](#createmanagementgroupchildinfoormanagementgroupchildinfo)[] (ReadOnly): The list of children.
* **displayName**: string (ReadOnly): The friendly name of the child resource.
* **id**: string (ReadOnly): The fully qualified ID for the child resource (management group or subscription).  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
* **name**: string (ReadOnly): The name of the child entity.
* **roles**: string[] (ReadOnly): The roles definitions associated with the management group.
* **type**: '/providers/Microsoft.Management/managementGroups' | '/subscriptions' | string (ReadOnly): The fully qualified resource type which includes provider namespace (e.g. /providers/Microsoft.Management/managementGroups)

## CreateManagementGroupDetailsOrManagementGroupDetails
### Properties
* **parent**: [CreateParentGroupInfoOrParentGroupInfo](#createparentgroupinfoorparentgroupinfo): (Optional) The ID of the parent management group used during creation.
* **updatedBy**: string (ReadOnly): The identity of the principal or process that updated the object.
* **updatedTime**: string (ReadOnly): The date and time when this object was last updated.
* **version**: int (ReadOnly): The version number of the object.

## CreateManagementGroupPropertiesOrManagementGroupProperties
### Properties
* **children**: [CreateManagementGroupChildInfoOrManagementGroupChildInfo](#createmanagementgroupchildinfoormanagementgroupchildinfo)[] (ReadOnly): The list of children.
* **details**: [CreateManagementGroupDetailsOrManagementGroupDetails](#createmanagementgroupdetailsormanagementgroupdetails): The details of a management group used during creation.
* **displayName**: string: The friendly name of the management group. If no value is passed then this  field will be set to the groupId.
* **roles**: string[] (ReadOnly): The roles definitions associated with the management group.
* **tenantId**: string (ReadOnly): The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000

## CreateParentGroupInfoOrParentGroupInfo
### Properties
* **displayName**: string (ReadOnly): The friendly name of the parent management group.
* **id**: string: The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
* **name**: string (ReadOnly): The name of the parent management group

