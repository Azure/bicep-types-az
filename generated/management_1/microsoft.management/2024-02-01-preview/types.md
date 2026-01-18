# Microsoft.Management @ 2024-02-01-preview

## Resource Microsoft.Management/serviceGroups@2024-02-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: The kind of the serviceGroup.
* **name**: string {pattern: "^[a-zA-Z0-9\-_().]{1,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceGroupProperties](#servicegroupproperties): ServiceGroup creation request body parameters.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ServiceGroupTags](#servicegrouptags): The serviceGroup tags.
* **type**: 'Microsoft.Management/serviceGroups' (ReadOnly, DeployTimeConstant): The resource type

## Function listAncestors (Microsoft.Management/serviceGroups@2024-02-01-preview)
* **Resource**: Microsoft.Management/serviceGroups
* **ApiVersion**: 2024-02-01-preview
* **Output**: [ServiceGroupCollectionResponse](#servicegroupcollectionresponse)

## ParentServiceGroupProperties
### Properties
* **resourceId**: string: The fully qualified ID of the parent serviceGroup.  For example, '/providers/Microsoft.Management/serviceGroups/TestServiceGroup'

## ServiceGroup
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **kind**: string: The kind of the serviceGroup.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ServiceGroupProperties](#servicegroupproperties): ServiceGroup creation request body parameters.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ServiceGroupTags](#servicegrouptags): The serviceGroup tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ServiceGroupCollectionResponse
### Properties
* **nextLink**: string: URL to query the next page of results for this request
* **value**: [ServiceGroup](#servicegroup)[]: Array of service groups based on the request criteria

## ServiceGroupProperties
### Properties
* **displayName**: string: The display name of the serviceGroup. For example, ServiceGroupTest1
* **parent**: [ParentServiceGroupProperties](#parentservicegroupproperties): The details of the parent serviceGroup.
* **provisioningState**: 'Canceled' | 'Failed' | 'NotStarted' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioning state of the serviceGroup. For example, Running

## ServiceGroupTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

