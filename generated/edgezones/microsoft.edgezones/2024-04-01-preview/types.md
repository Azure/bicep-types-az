# Microsoft.EdgeZones @ 2024-04-01-preview

## Resource Microsoft.EdgeZones/extendedZones@2024-04-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExtendedZoneProperties](#extendedzoneproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.EdgeZones/extendedZones' (ReadOnly, DeployTimeConstant): The resource type

## Function register (Microsoft.EdgeZones/extendedZones@2024-04-01-preview)
* **Resource**: Microsoft.EdgeZones/extendedZones
* **ApiVersion**: 2024-04-01-preview
* **Output**: [ExtendedZone](#extendedzone)

## Function unregister (Microsoft.EdgeZones/extendedZones@2024-04-01-preview)
* **Resource**: Microsoft.EdgeZones/extendedZones
* **ApiVersion**: 2024-04-01-preview
* **Output**: [ExtendedZone](#extendedzone)

## ExtendedZone
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ExtendedZoneProperties](#extendedzoneproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ExtendedZoneProperties
### Properties
* **displayName**: string (Required, ReadOnly): Display name of the Azure Extended Zone.
* **geography**: string (Required, ReadOnly): Geography of the Azure Extended Zone.
* **geographyGroup**: string (Required, ReadOnly): The Geography Group of the Azure Extended Zone.
* **homeLocation**: string (Required, ReadOnly): The Home Location of the Azure Extended Zone.
* **latitude**: string (Required, ReadOnly): The Latitude of the Azure Extended Zone.
* **longitude**: string (Required, ReadOnly): The Longitude of the Azure Extended Zone.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Status of the last operation performed by the subscription on the Edge Zone resource
* **regionalDisplayName**: string (Required, ReadOnly): Regional display name of the Azure Extended Zone.
* **regionCategory**: string (Required, ReadOnly): Category of region for the Azure Extended Zone.
* **regionType**: string (Required, ReadOnly): Type of region for the Azure Extended Zone.
* **registrationState**: 'NotRegistered' | 'PendingRegister' | 'PendingUnregister' | 'Registered' | string (ReadOnly): Indicates the Azure Extended Zone registration’s approval status.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

