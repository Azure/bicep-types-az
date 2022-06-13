# Microsoft.Management @ 2020-10-01

## Resource Microsoft.Management/managementGroups@2020-10-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateManagementGroupProperties](#createmanagementgroupproperties): The generic properties of a management group used during creation.
* **type**: 'Microsoft.Management/managementGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Management/managementGroups/settings@2020-10-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [CreateOrUpdateSettingsProperties](#createorupdatesettingsproperties): The properties of the request to create or update Management Group settings
* **type**: 'Microsoft.Management/managementGroups/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Management/managementGroups/subscriptions@2020-10-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionUnderManagementGroupProperties](#subscriptionundermanagementgroupproperties) (ReadOnly): The generic properties of subscription under a management group.
* **type**: 'Microsoft.Management/managementGroups/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## CreateManagementGroupChildInfo
### Properties
* **children**: [CreateManagementGroupChildInfo](#createmanagementgroupchildinfo)[] (ReadOnly): The list of children.
* **displayName**: string (ReadOnly): The friendly name of the child resource.
* **id**: string (ReadOnly): The fully qualified ID for the child resource (management group or subscription).  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
* **name**: string (ReadOnly): The name of the child entity.
* **type**: '/subscriptions' | 'Microsoft.Management/managementGroups' | string (ReadOnly): The fully qualified resource type which includes provider namespace (e.g. Microsoft.Management/managementGroups)

## CreateManagementGroupDetails
### Properties
* **managementGroupAncestors**: string[] (ReadOnly): The ancestors of the management group.
* **parent**: [CreateParentGroupInfo](#createparentgroupinfo): (Optional) The ID of the parent management group used during creation.
* **path**: [ManagementGroupPathElement](#managementgrouppathelement)[] (ReadOnly): The path from the root to the current group.
* **updatedBy**: string (ReadOnly): The identity of the principal or process that updated the object.
* **updatedTime**: string (ReadOnly): The date and time when this object was last updated.
* **version**: int (ReadOnly): The version number of the object.

## CreateManagementGroupProperties
### Properties
* **children**: [CreateManagementGroupChildInfo](#createmanagementgroupchildinfo)[] (ReadOnly): The list of children.
* **details**: [CreateManagementGroupDetails](#createmanagementgroupdetails): The details of a management group used during creation.
* **displayName**: string: The friendly name of the management group. If no value is passed then this  field will be set to the groupId.
* **tenantId**: string (ReadOnly): The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000

## CreateOrUpdateSettingsProperties
### Properties
* **defaultManagementGroup**: string: Settings that sets the default Management Group under which new subscriptions get added in this tenant. For example, /providers/Microsoft.Management/managementGroups/defaultGroup
* **requireAuthorizationForGroupCreation**: bool: Indicates whether RBAC access is required upon group creation under the root Management Group. If set to true, user will require Microsoft.Management/managementGroups/write action on the root Management Group scope in order to create new Groups directly under the root. This will prevent new users from creating new Management Groups, unless they are given access.
* **tenantId**: string (ReadOnly): The AAD Tenant ID associated with the hierarchy settings. For example, 00000000-0000-0000-0000-000000000000

## CreateParentGroupInfo
### Properties
* **displayName**: string (ReadOnly): The friendly name of the parent management group.
* **id**: string: The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
* **name**: string (ReadOnly): The name of the parent management group

## DescendantParentGroupInfo
### Properties
* **id**: string (ReadOnly): The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000

## ManagementGroupPathElement
### Properties
* **displayName**: string (ReadOnly): The friendly name of the group.
* **name**: string (ReadOnly): The name of the group.

## SubscriptionUnderManagementGroupProperties
### Properties
* **displayName**: string (ReadOnly): The friendly name of the subscription.
* **parent**: [DescendantParentGroupInfo](#descendantparentgroupinfo) (ReadOnly): The ID of the parent management group.
* **state**: string (ReadOnly): The state of the subscription.
* **tenant**: string (ReadOnly): The AAD Tenant ID associated with the subscription. For example, 00000000-0000-0000-0000-000000000000

