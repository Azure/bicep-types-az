# Microsoft.Relay @ 2018-01-01-preview

## Resource Microsoft.Relay/namespaces@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayNamespaceProperties](#relaynamespaceproperties): Description of Relay namespace
* **sku**: [Sku](#sku): SKU of the namespace.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Relay/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/networkRuleSets@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkRuleSetProperties](#networkrulesetproperties): NetworkRuleSet properties
* **type**: 'Microsoft.Relay/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/privateEndpointConnections@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Relay/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## NetworkRuleSetProperties
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: Default Action for Network Rule Set
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]: List of IpRules

## NWRuleSetIpRules
### Properties
* **action**: 'Allow' | string: The IP Filter Action
* **ipMask**: string: IP Mask

## PrivateEndpoint
### Properties
* **id**: string: Full identifier of the private endpoint resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Properties of the private endpoint object.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Approval state of the private link connection.
* **provisioningState**: 'Creating' | 'Deleting' | 'DeletingByProxy' | 'Succeeded' | 'Unknown' | 'Updating' | 'UpdatingByProxy' | string (ReadOnly): Provisioning state of the private endpoint connection.

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval or rejection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been approved, rejected or removed by the Relay Namespace owner.

## RelayNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly): The time the namespace was created.
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics.
* **provisioningState**: 'Created' | 'Deleted' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.

## Sku
### Properties
* **name**: 'Standard' | string (Required): Name of this SKU.
* **tier**: 'Standard' | string: The tier of this SKU.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

