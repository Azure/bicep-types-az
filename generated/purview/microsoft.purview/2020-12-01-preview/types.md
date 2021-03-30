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
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags on the azure resource.
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
* **type**: 'SystemAssigned': Identity Type. Possible values include: 'SystemAssigned'

## AccountProperties
### Properties
* **cloudConnectors**: [CloudConnectors](#cloudconnectors): Properties for configuring third party cloud connections.
* **createdAt**: string (ReadOnly): Gets the time at which the entity was created.
* **createdBy**: string (ReadOnly): Gets the creator of the entity.
* **createdByObjectId**: string (ReadOnly): Gets the creators of the entity's object id.
* **endpoints**: [schemas:3_endpoints](#schemas3endpoints) (ReadOnly): The URIs that are the public endpoints of the account.
* **friendlyName**: string (ReadOnly): Gets or sets the friendly name.
* **managedResources**: [schemas:3_managedResources](#schemas3managedresources) (ReadOnly): Gets the resource identifiers of the managed resources.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Gets the private endpoint connections information.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'SoftDeleted' | 'SoftDeleting' | 'Succeeded' | 'Unknown' (ReadOnly): Gets or sets the state of the provisioning. Possible values include: 'Unknown', 'Creating', 'Moving', 'Deleting', 'SoftDeleting', 'SoftDeleted', 'Failed', 'Succeeded'
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'NotSpecified': Gets or sets the public network access. Possible values include: 'NotSpecified', 'Enabled', 'Disabled'

## CloudConnectors
### Properties
* **awsExternalId**: string (ReadOnly): AWS external identifier.
Configured in AWS to allow use of the role arn used for scanning

## schemas:3_endpoints
### Properties
* **catalog**: string (ReadOnly): Gets the catalog endpoint.
* **guardian**: string (ReadOnly): Gets the guardian endpoint.
* **scan**: string (ReadOnly): Gets the scan endpoint.

## schemas:3_managedResources
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
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Unknown': The status. Possible values include: 'Unknown', 'Pending', 'Approved', 'Rejected', 'Disconnected'

## AccountSku
### Properties
* **capacity**: int: Gets or sets the sku capacity. Possible values include: 4, 16
* **name**: 'Standard': Gets or sets the sku name. Possible values include: 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

