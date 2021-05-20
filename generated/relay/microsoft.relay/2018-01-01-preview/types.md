# Microsoft.Relay @ 2018-01-01-preview

## Resource Microsoft.Relay/namespaces@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelayNamespaceProperties](#relaynamespaceproperties): Properties of the namespace.
* **sku**: [Sku](#sku): SKU of the namespace.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Relay/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/networkRuleSets@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:12_properties](#schemas12properties): NetworkRuleSet properties
* **type**: 'Microsoft.Relay/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relay/namespaces/privateEndpointConnections@2018-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the private endpoint connection resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Relay/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## RelayNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly): The time the namespace was created.
* **metricId**: string (ReadOnly): Identifier for Azure Insights metrics.
* **provisioningState**: 'Created' | 'Deleted' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly): Endpoint you can use to perform Service Bus operations.
* **updatedAt**: string (ReadOnly): The time the namespace was updated.

## Sku
### Properties
* **name**: string (Required): Name of this SKU.
* **tier**: 'Standard': The tier of this SKU.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:12_properties
### Properties
* **defaultAction**: 'Allow' | 'Deny': Default Action for Network Rule Set.
* **ipRules**: [NWRuleSetIpRules](#nwrulesetiprules)[]: List of IpRules

## NWRuleSetIpRules
### Properties
* **action**: 'Allow': The IP Filter Action.
* **ipMask**: string: IP Mask

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Private endpoint object properties.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): An object that represents the approval state of the private link connection.
* **provisioningState**: 'Creating' | 'Deleting' | 'DeletingByProxy' | 'Succeeded' | 'Unknown' | 'Updating' | 'UpdatingByProxy': Provisioning state of the private endpoint connection.

## PrivateEndpoint
### Properties
* **id**: string: Full identifier of the private endpoint resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval or rejection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected': Indicates whether the connection has been approved, rejected or removed by the Relay Namespace owner.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

