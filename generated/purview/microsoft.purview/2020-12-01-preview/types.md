# Microsoft.Purview @ 2020-12-01-preview

## Resource Microsoft.Purview/accounts@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The Managed Identity of the resource
* **location**: string: Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): The account properties
* **sku**: [AccountSku](#accountsku): The Sku
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags on the azure resource.
* **type**: 'Microsoft.Purview/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Purview/accounts/privateEndpointConnections@2020-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): A private endpoint connection properties class.
* **type**: 'Microsoft.Purview/accounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Identity
### Properties
* **principalId**: string (ReadOnly): Service principal object Id
* **tenantId**: string (ReadOnly): Tenant Id
* **type**: 'SystemAssigned': Identity Type

## AccountProperties
### Properties
* **cloudConnectors**: [CloudConnectors](#cloudconnectors)
* **createdAt**: string (ReadOnly): Gets the time at which the entity was created.
* **createdBy**: string (ReadOnly): Gets the creator of the entity.
* **createdByObjectId**: string (ReadOnly): Gets the creators of the entity's object id.
* **endpoints**: [AccountPropertiesEndpoints](#accountpropertiesendpoints) (ReadOnly): The URIs that are the public endpoints of the account.
* **friendlyName**: string (ReadOnly): Gets or sets the friendly name.
* **managedResourceGroupName**: string: Gets or sets the managed resource group name
* **managedResources**: [AccountPropertiesManagedResources](#accountpropertiesmanagedresources) (ReadOnly): Gets the resource identifiers of the managed resources.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Gets the private endpoint connections information.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'SoftDeleted' | 'SoftDeleting' | 'Succeeded' | 'Unknown' (ReadOnly): Gets or sets the state of the provisioning.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'NotSpecified': Gets or sets the public network access.
* **systemData**: [AccountPropertiesSystemData](#accountpropertiessystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.

## CloudConnectors
### Properties
* **awsExternalId**: string (ReadOnly): AWS external identifier.
Configured in AWS to allow use of the role arn used for scanning

## AccountPropertiesEndpoints
### Properties
* **catalog**: string (ReadOnly): Gets the catalog endpoint.
* **guardian**: string (ReadOnly): Gets the guardian endpoint.
* **scan**: string (ReadOnly): Gets the scan endpoint.

## AccountPropertiesManagedResources
### Properties
* **eventHubNamespace**: string (ReadOnly): Gets the managed event hub namespace resource identifier.
* **resourceGroup**: string (ReadOnly): Gets the managed resource group resource identifier. This resource group will host resource dependencies for the account.
* **storageAccount**: string (ReadOnly): Gets the managed storage account resource identifier.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Gets or sets the identifier.
* **name**: string (ReadOnly): Gets or sets the name.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): A private endpoint connection properties class.
* **type**: string (ReadOnly): Gets or sets the type.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): A private endpoint class.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): The private link service connection state.
* **provisioningState**: string (ReadOnly): The provisioning state.

## PrivateEndpoint
### Properties
* **id**: string: The private endpoint identifier.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: The required actions.
* **description**: string: The description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Unknown': The status.

## AccountPropertiesSystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (ReadOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (ReadOnly): The timestamp of the last modification the resource (UTC).
* **lastModifiedBy**: string (ReadOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly): The type of identity that last modified the resource.

## AccountSku
### Properties
* **capacity**: int: Gets or sets the sku capacity. Possible values include: 4, 16
* **name**: 'Standard': Gets or sets the sku name.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

