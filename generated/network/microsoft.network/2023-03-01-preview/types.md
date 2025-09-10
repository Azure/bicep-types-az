# Microsoft.Network @ 2023-03-01-preview

## Resource Microsoft.Network/networkManagers/routingConfigurations@2023-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RoutingConfigurationPropertiesFormat](#routingconfigurationpropertiesformat): Indicates the properties for the network manager routing configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/routingConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/routingConfigurations/ruleCollections@2023-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RoutingRuleCollectionPropertiesFormat](#routingrulecollectionpropertiesformat): Indicates the properties for the network manager routing rule collection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/routingConfigurations/ruleCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkManagers/routingConfigurations/ruleCollections/rules@2023-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RoutingRulePropertiesFormat](#routingrulepropertiesformat): Indicates the properties of the routing rule
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata related to this resource.
* **type**: 'Microsoft.Network/networkManagers/routingConfigurations/ruleCollections/rules' (ReadOnly, DeployTimeConstant): The resource type

## NetworkManagerRoutingGroupItem
### Properties
* **networkGroupId**: string (Required): Network manager group Id.

## RoutingConfigurationPropertiesFormat
### Properties
* **description**: string: A description of the routing configuration.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.

## RoutingRuleCollectionPropertiesFormat
### Properties
* **appliesTo**: [NetworkManagerRoutingGroupItem](#networkmanagerroutinggroupitem)[] (Required): Groups for configuration
* **description**: string: A description of the routing rule collection.
* **disableBgpRoutePropagation**: bool: Determines whether BGP route propagation is enabled. Defaults to true.
* **localRouteSetting**: 'DirectRoutingWithinSubnet' | 'DirectRoutingWithinVNet' | 'NotSpecified' | string (Required): Indicates local route setting for this particular rule collection.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.

## RoutingRuleNextHop
### Properties
* **nextHopAddress**: string: Next hop address. Only relevant if the next hop type is VirtualAppliance.
* **nextHopType**: 'Internet' | 'NoNextNop' | 'VirtualAppliance' | 'VirtualNetworkGateway' | 'VnetLocal' | string (Required): Next hop type.

## RoutingRulePropertiesFormat
### Properties
* **description**: string: A description for this rule.
* **destination**: [RoutingRuleRouteDestination](#routingruleroutedestination) (Required): Indicates the destination for this particular rule.
* **nextHop**: [RoutingRuleNextHop](#routingrulenexthop) (Required): Indicates the next hop for this particular rule.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string (ReadOnly): Unique identifier for this resource.

## RoutingRuleRouteDestination
### Properties
* **destinationAddress**: string (Required): Destination address.
* **type**: 'AddressPrefix' | 'ServiceTag' | string (Required): Destination type.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

