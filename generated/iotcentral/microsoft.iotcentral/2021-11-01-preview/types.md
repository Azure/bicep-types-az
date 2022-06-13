# Microsoft.IoTCentral @ 2021-11-01-preview

## Resource Microsoft.IoTCentral/iotApps@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): The managed identities for the IoT Central application.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppProperties](#appproperties): The common properties of an IoT Central application.
* **sku**: [AppSkuInfo](#appskuinfo) (Required): A valid instance SKU.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTCentral/iotApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTCentral/iotApps/privateEndpointConnections@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTCentral/iotApps/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## AppProperties
### Properties
* **applicationId**: string (ReadOnly): The ID of the application.
* **displayName**: string: The display name of the application.
* **networkRuleSets**: [NetworkRuleSets](#networkrulesets): Network Rule Set Properties of this IoT Central application.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Private endpoint connections created on this IoT Central application.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the application.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether requests from the public network are allowed.
* **state**: 'created' | 'suspended' | string (ReadOnly): The current state of the application.
* **subdomain**: string: The subdomain of the application.
* **template**: string: The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.

## AppSkuInfo
### Properties
* **name**: 'ST0' | 'ST1' | 'ST2' | string (Required): The name of the SKU.

## NetworkRuleSetIpRule
### Properties
* **action**: 'Allow' | string (ReadOnly): The network action for the IP mask.
* **filterName**: string: The readable name of the IP rule.
* **ipMask**: string: The CIDR block defining the IP range.

## NetworkRuleSets
### Properties
* **applyToDevices**: bool: Whether these rules apply for device connectivity to IoT Hub and Device Provisioning service associated with this application.
* **applyToIoTCentral**: bool: Whether these rules apply for connectivity via IoT Central web portal and APIs.
* **defaultAction**: 'Allow' | 'Deny' | string: The default network action to apply.
* **ipRules**: [NetworkRuleSetIpRule](#networkrulesetiprule)[]: List of IP rules.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## SystemAssignedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | string (Required): Type of managed service identity (either system assigned, or none).

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

