# Microsoft.Management @ 2021-04-01

## Resource Microsoft.Management/managementGroups@2021-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateManagementGroupPropertiesOrManagementGroupProperties](#createmanagementgrouppropertiesormanagementgroupproperties): The generic properties of a management group used during creation.
* **type**: 'Microsoft.Management/managementGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Management/managementGroups/settings@2021-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [CreateOrUpdateSettingsPropertiesOrHierarchySettingsProperties](#createorupdatesettingspropertiesorhierarchysettingsproperties): The properties of the request to create or update Management Group settings
* **type**: 'Microsoft.Management/managementGroups/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Management/managementGroups/subscriptions@2021-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionUnderManagementGroupProperties](#subscriptionundermanagementgroupproperties) (ReadOnly): The generic properties of subscription under a management group.
* **type**: 'Microsoft.Management/managementGroups/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## CreateManagementGroupChildInfoOrManagementGroupChildInfo
### Properties
* **children**: [CreateManagementGroupChildInfoOrManagementGroupChildInfo](#createmanagementgroupchildinfoormanagementgroupchildinfo)[] (ReadOnly): The list of children.
* **displayName**: string (ReadOnly): The friendly name of the child resource.
* **id**: string (ReadOnly): The fully qualified ID for the child resource (management group or subscription).  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
* **name**: string (ReadOnly): The name of the child entity.
* **type**: '/subscriptions' | 'Microsoft.Management/managementGroups' | string (ReadOnly): The fully qualified resource type which includes provider namespace (e.g. Microsoft.Management/managementGroups)

## CreateManagementGroupDetailsOrManagementGroupDetails
### Properties
* **managementGroupAncestors**: string[] (ReadOnly): The ancestors of the management group.
* **managementGroupAncestorsChain**: [ManagementGroupPathElement](#managementgrouppathelement)[] (ReadOnly): The ancestors of the management group displayed in reversed order, from immediate parent to the root.
* **parent**: [CreateParentGroupInfoOrParentGroupInfo](#createparentgroupinfoorparentgroupinfo): (Optional) The ID of the parent management group used during creation.
* **path**: [ManagementGroupPathElement](#managementgrouppathelement)[] (ReadOnly): The path from the root to the current group.
* **updatedBy**: string (ReadOnly): The identity of the principal or process that updated the object.
* **updatedTime**: string (ReadOnly): The date and time when this object was last updated.
* **version**: int (ReadOnly): The version number of the object.

## CreateManagementGroupPropertiesOrManagementGroupProperties
### Properties
* **children**: [CreateManagementGroupChildInfoOrManagementGroupChildInfo](#createmanagementgroupchildinfoormanagementgroupchildinfo)[] (ReadOnly): The list of children.
* **details**: [CreateManagementGroupDetailsOrManagementGroupDetails](#createmanagementgroupdetailsormanagementgroupdetails): The details of a management group used during creation.
* **displayName**: string: The friendly name of the management group. If no value is passed then this  field will be set to the groupId.
* **tenantId**: string (ReadOnly): The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000

## CreateOrUpdateSettingsPropertiesOrHierarchySettingsProperties
### Properties
* **defaultManagementGroup**: string: Settings that sets the default Management Group under which new subscriptions get added in this tenant. For example, /providers/Microsoft.Management/managementGroups/defaultGroup
* **requireAuthorizationForGroupCreation**: bool: Indicates whether RBAC access is required upon group creation under the root Management Group. If set to true, user will require Microsoft.Management/managementGroups/write action on the root Management Group scope in order to create new Groups directly under the root. This will prevent new users from creating new Management Groups, unless they are given access.
* **tenantId**: string (ReadOnly): The AAD Tenant ID associated with the hierarchy settings. For example, 00000000-0000-0000-0000-000000000000

## CreateParentGroupInfoOrParentGroupInfo
### Properties
* **displayName**: string (ReadOnly): The friendly name of the parent management group.
* **id**: string: The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
* **name**: string (ReadOnly): The name of the parent management group

## DescendantParentGroupInfo
### Properties
* **id**: string: The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000

## ManagementGroupPathElement
### Properties
* **displayName**: string: The friendly name of the group.
* **name**: string: The name of the group.

## SubscriptionUnderManagementGroupProperties
### Properties
* **displayName**: string: The friendly name of the subscription.
* **parent**: [DescendantParentGroupInfo](#descendantparentgroupinfo): The ID of the parent management group.
* **state**: string: The state of the subscription.
* **tenant**: string: The AAD Tenant ID associated with the subscription. For example, 00000000-0000-0000-0000-000000000000

