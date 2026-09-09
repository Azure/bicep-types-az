# Microsoft.Management @ 2020-05-01

## Resource Microsoft.Management/managementGroups@2020-05-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateManagementGroupPropertiesOrManagementGroupProperties](#createmanagementgrouppropertiesormanagementgroupproperties): The generic properties of a management group used during creation.
* **type**: 'Microsoft.Management/managementGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Management/managementGroups/settings@2020-05-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [CreateOrUpdateSettingsPropertiesOrHierarchySettingsProperties](#createorupdatesettingspropertiesorhierarchysettingsproperties): The properties of the request to create or update Management Group settings
* **type**: 'Microsoft.Management/managementGroups/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Management/managementGroups/subscriptions@2020-05-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionUnderManagementGroupProperties](#subscriptionundermanagementgroupproperties) (ReadOnly): The generic properties of subscription under a management group.
* **type**: 'Microsoft.Management/managementGroups/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.Management@2020-05-01)
* **Resource**: Microsoft.Management
* **ApiVersion**: 2020-05-01
* **Input**: [CheckNameAvailabilityRequest](#checknameavailabilityrequest)
* **Output**: [CheckNameAvailabilityResult](#checknameavailabilityresult)

## Function getEntities (Microsoft.Management@2020-05-01)
* **Resource**: Microsoft.Management
* **ApiVersion**: 2020-05-01
* **Output**: [EntityListResult](#entitylistresult)

## Function startTenantBackfill (Microsoft.Management@2020-05-01)
* **Resource**: Microsoft.Management
* **ApiVersion**: 2020-05-01
* **Output**: [TenantBackfillStatusResult](#tenantbackfillstatusresult)

## Function tenantBackfillStatus (Microsoft.Management@2020-05-01)
* **Resource**: Microsoft.Management
* **ApiVersion**: 2020-05-01
* **Output**: [TenantBackfillStatusResult](#tenantbackfillstatusresult)

## CheckNameAvailabilityRequest
### Properties
* **name**: string: the name to check for availability
* **type**: 'Microsoft.Management/managementGroups': fully qualified resource type which includes provider namespace

## CheckNameAvailabilityResult
### Properties
* **message**: string (ReadOnly): Required if nameAvailable == false. Localized. If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that is already in use, and direct them to select a different name.
* **nameAvailable**: bool (ReadOnly): Required. True indicates name is valid and available. False indicates the name is invalid, unavailable, or both.
* **reason**: 'AlreadyExists' | 'Invalid' (ReadOnly): Required if nameAvailable == false. Invalid indicates the name provided does not match the resource provider's naming requirements (incorrect length, unsupported characters, etc.) AlreadyExists indicates that the name is already in use and is therefore unavailable.

## CreateManagementGroupChildInfoOrManagementGroupChildInfo
### Properties
* **children**: [CreateManagementGroupChildInfoOrManagementGroupChildInfo](#createmanagementgroupchildinfoormanagementgroupchildinfo)[] (ReadOnly): The list of children.
* **displayName**: string (ReadOnly): The friendly name of the child resource.
* **id**: string (ReadOnly): The fully qualified ID for the child resource (management group or subscription).  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
* **name**: string (ReadOnly): The name of the child entity.
* **type**: '/subscriptions' | 'Microsoft.Management/managementGroups' | string (ReadOnly): The fully qualified resource type which includes provider namespace (e.g. Microsoft.Management/managementGroups)

## CreateManagementGroupDetailsOrManagementGroupDetails
### Properties
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

## EntityInfo
### Properties
* **id**: string (ReadOnly): The fully qualified ID for the entity.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
* **name**: string (ReadOnly): The name of the entity. For example, 00000000-0000-0000-0000-000000000000
* **properties**: [EntityInfoProperties](#entityinfoproperties): The generic properties of an entity.
* **type**: string (ReadOnly): The type of the resource. For example, Microsoft.Management/managementGroups

## EntityInfoProperties
### Properties
* **displayName**: string: The friendly name of the management group.
* **inheritedPermissions**: 'delete' | 'edit' | 'noaccess' | 'view' | string: The users specific permissions to this item.
* **numberOfChildGroups**: int: Number of children is the number of Groups that are exactly one level underneath the current Group.
* **numberOfChildren**: int: Number of children is the number of Groups and Subscriptions that are exactly one level underneath the current Group.
* **numberOfDescendants**: int: Number of Descendants
* **parent**: [EntityParentGroupInfo](#entityparentgroupinfo): (Optional) The ID of the parent management group.
* **parentDisplayNameChain**: string[]: The parent display name chain from the root group to the immediate parent
* **parentNameChain**: string[]: The parent name chain from the root group to the immediate parent
* **permissions**: 'delete' | 'edit' | 'noaccess' | 'view' | string: The users specific permissions to this item.
* **tenantId**: string: The AAD Tenant ID associated with the entity. For example, 00000000-0000-0000-0000-000000000000

## EntityListResult
### Properties
* **count**: int (ReadOnly): Total count of records that match the filter
* **nextLink**: string (ReadOnly): The URL to use for getting the next set of results.
* **value**: [EntityInfo](#entityinfo)[]: The list of entities.

## EntityParentGroupInfo
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

## TenantBackfillStatusResult
### Properties
* **status**: 'Cancelled' | 'Completed' | 'Failed' | 'NotStarted' | 'NotStartedButGroupsExist' | 'Started' (ReadOnly): The status of the Tenant Backfill
* **tenantId**: string (ReadOnly): The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000

