# Microsoft.IoTCentral @ 2021-11-01-preview

## Resource Microsoft.IoTCentral/iotApps@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): Managed service identity (either system assigned, or none)
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppProperties](#appproperties): The properties of an IoT Central application.
* **sku**: [AppSkuInfo](#appskuinfo) (Required): Information about the SKU of the IoT Central application.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTCentral/iotApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTCentral/iotApps/privateEndpointConnections@2021-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.IoTCentral/iotApps/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## SystemAssignedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' (Required): Type of managed service identity (either system assigned, or none).

## AppProperties
### Properties
* **applicationId**: string (ReadOnly): The ID of the application.
* **displayName**: string: The display name of the application.
* **networkRuleSets**: [NetworkRuleSets](#networkrulesets): Network Rule Set Properties of this IoT Central application.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Private endpoint connections created on this IoT Central application.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state of the application.
* **publicNetworkAccess**: 'Disabled' | 'Enabled': Whether requests from the public network are allowed.
* **state**: 'created' | 'suspended' (ReadOnly): The current state of the application.
* **subdomain**: string: The subdomain of the application.
* **template**: string: The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.

## NetworkRuleSets
### Properties
* **applyToDevices**: bool: Whether these rules apply for device connectivity to IoT Hub and Device Provisioning service associated with this application.
* **applyToIoTCentral**: bool: Whether these rules apply for connectivity via IoT Central web portal and APIs.
* **defaultAction**: 'Allow' | 'Deny': Whether to allow or deny network traffic.
* **ipRules**: [NetworkRuleSetIpRule](#networkrulesetiprule)[]: List of IP rules.

## NetworkRuleSetIpRule
### Properties
* **filterName**: string: The readable name of the IP rule.
* **ipMask**: string: The CIDR block defining the IP range.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): The current provisioning state.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected': The private endpoint connection status.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## AppSkuInfo
### Properties
* **name**: 'ST0' | 'ST1' | 'ST2' (Required): The name of the SKU.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string
