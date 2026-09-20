# Microsoft.Management @ 2026-08-01

## Resource Microsoft.Management/serviceGroups@2026-08-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2026-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: The kind of the serviceGroup.
* **name**: string {pattern: "^[a-zA-Z0-9\-_().]{1,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceGroupProperties](#servicegroupproperties): ServiceGroup creation request body parameters.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ServiceGroupTags](#servicegrouptags): The serviceGroup tags.
* **type**: 'Microsoft.Management/serviceGroups' (ReadOnly, DeployTimeConstant): The resource type

## ParentServiceGroupProperties
### Properties
* **resourceId**: string: The fully qualified ID of the parent serviceGroup.  For example, '/providers/Microsoft.Management/serviceGroups/TestServiceGroup'

## ServiceGroupAttributes
### Properties
* **criticality**: int {minValue: 0, maxValue: 4}: The criticality designation of the service group. Valid values range from 0 through 4.

## ServiceGroupProperties
### Properties
* **attributes**: [ServiceGroupAttributes](#servicegroupattributes): The attributes of the serviceGroup.
* **displayName**: string: The display name of the serviceGroup. For example, ServiceGroupTest1
* **parent**: [ParentServiceGroupProperties](#parentservicegroupproperties): The details of the parent serviceGroup.
* **provisioningState**: 'Canceled' | 'Failed' | 'NotStarted' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of the serviceGroup. For example, Running

## ServiceGroupTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

