# Microsoft.Management @ 2017-11-01-preview

## Resource Microsoft.Management/managementGroups@2017-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **displayName**: string (WriteOnly): The friendly name of the management group.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **parentId**: string (WriteOnly): (Optional) The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
* **properties**: [ManagementGroupProperties](#managementgroupproperties) (ReadOnly): The generic properties of a management group.
* **type**: 'Microsoft.Management/managementGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Management/managementGroups/subscriptions@2017-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Management/managementGroups/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## ManagementGroupChildInfo
### Properties
* **childId**: string: The fully qualified ID for the child resource (management group or subscription).  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
* **children**: [ManagementGroupChildInfo](#managementgroupchildinfo)[]: The list of children.
* **childType**: 'ManagementGroup' | 'Subscription' | string: The type of child resource.
* **displayName**: string: The friendly name of the child resource.

## ManagementGroupDetails
### Properties
* **parent**: [ParentGroupInfo](#parentgroupinfo): (Optional) The ID of the parent management group.
* **updatedBy**: string: The identity of the principal or process that updated the object.
* **updatedTime**: string: The date and time when this object was last updated.
* **version**: int: The version number of the object.

## ManagementGroupProperties
### Properties
* **children**: [ManagementGroupChildInfo](#managementgroupchildinfo)[]: The list of children.
* **details**: [ManagementGroupDetails](#managementgroupdetails): The details of a management group.
* **displayName**: string: The friendly name of the management group.
* **tenantId**: string: The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000

## ParentGroupInfo
### Properties
* **displayName**: string: The friendly name of the parent management group.
* **parentId**: string: The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000

