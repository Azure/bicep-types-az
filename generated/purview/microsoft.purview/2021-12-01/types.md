# Microsoft.Purview @ 2021-12-01

## Resource Microsoft.Purview/accounts@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity Info on the tracked resource
* **location**: string: Gets or sets the location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): Gets or sets the properties.
* **sku**: [AccountSku](#accountsku) (ReadOnly): Gets or sets the Sku.
* **systemData**: [TrackedResourceSystemData](#trackedresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags on the azure resource.
* **type**: 'Microsoft.Purview/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Purview/accounts/kafkaConfigurations@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [KafkaConfigurationProperties](#kafkaconfigurationproperties): Gets or sets the kafka configuration properties.
* **systemData**: [ProxyResourceSystemData](#proxyresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Purview/accounts/kafkaConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Purview/accounts/privateEndpointConnections@2021-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The connection identifier.
* **systemData**: [ProxyResourceSystemData](#proxyresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Purview/accounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listFeatures (Microsoft.Purview/accounts@2021-12-01)
* **Resource**: Microsoft.Purview/accounts
* **ApiVersion**: 2021-12-01
* **Input**: [BatchFeatureRequest](#batchfeaturerequest)
* **Output**: [BatchFeatureStatus](#batchfeaturestatus)

## Function listFeatures (Microsoft.Purview/locations@2021-12-01)
* **Resource**: Microsoft.Purview/locations
* **ApiVersion**: 2021-12-01
* **Input**: [BatchFeatureRequest](#batchfeaturerequest)
* **Output**: [BatchFeatureStatus](#batchfeaturestatus)

## Function listkeys (Microsoft.Purview/accounts@2021-12-01)
* **Resource**: Microsoft.Purview/accounts
* **ApiVersion**: 2021-12-01
* **Output**: [AccessKeys](#accesskeys)

## AccessKeys
### Properties
* **atlasKafkaPrimaryEndpoint**: string: Gets or sets the primary connection string.
* **atlasKafkaSecondaryEndpoint**: string: Gets or sets the secondary connection string.

## AccountProperties
### Properties
* **accountStatus**: [AccountPropertiesAccountStatus](#accountpropertiesaccountstatus) (ReadOnly): Gets or sets the status of the account.
* **cloudConnectors**: [CloudConnectors](#cloudconnectors): Cloud connectors.
External cloud identifier used as part of scanning configuration.
* **createdAt**: string (ReadOnly): Gets the time at which the entity was created.
* **createdBy**: string (ReadOnly): Gets the creator of the entity.
* **createdByObjectId**: string (ReadOnly): Gets the creators of the entity's object id.
* **endpoints**: [AccountPropertiesEndpoints](#accountpropertiesendpoints) (ReadOnly): The URIs that are the public endpoints of the account.
* **friendlyName**: string (ReadOnly): Gets or sets the friendly name.
* **managedEventHubState**: 'Disabled' | 'Enabled' | 'NotSpecified' | string: Gets or sets the state of managed eventhub. If enabled managed eventhub will be created, if disabled the managed eventhub will be removed.
* **managedResourceGroupName**: string: Gets or sets the managed resource group name
* **managedResources**: [AccountPropertiesManagedResources](#accountpropertiesmanagedresources) (ReadOnly): Gets the resource identifiers of the managed resources.
* **managedResourcesPublicNetworkAccess**: 'Disabled' | 'Enabled' | 'NotSpecified' | string: Gets or sets the public network access for managed resources.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Gets the private endpoint connections information.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'SoftDeleted' | 'SoftDeleting' | 'Succeeded' | 'Unknown' | string (ReadOnly): Gets or sets the state of the provisioning.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'NotSpecified' | string: Gets or sets the public network access.

## AccountPropertiesAccountStatus
### Properties
* **accountProvisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'SoftDeleted' | 'SoftDeleting' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Gets the account status code.
* **errorDetails**: [AccountStatusErrorDetails](#accountstatuserrordetails) (ReadOnly): Gets the account error details.

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

## AccountSku
### Properties
* **capacity**: int: Gets or sets the sku capacity.
* **name**: 'Standard' | string: Gets or sets the sku name.

## AccountStatusErrorDetails
### Properties
* **code**: string (ReadOnly): Gets or sets the code.
* **details**: [ErrorModel](#errormodel)[] (ReadOnly): Gets or sets the details.
* **message**: string (ReadOnly): Gets or sets the messages.
* **target**: string (ReadOnly): Gets or sets the target.

## BatchFeatureRequest
### Properties
* **features**: string[]: Set of features

## BatchFeatureRequest
### Properties
* **features**: string[]: Set of features

## BatchFeatureStatus
### Properties
* **features**: [BatchFeatureStatusFeatures](#batchfeaturestatusfeatures): Features with enabled status

## BatchFeatureStatus
### Properties
* **features**: [BatchFeatureStatusFeatures](#batchfeaturestatusfeatures): Features with enabled status

## BatchFeatureStatusFeatures
### Properties
### Additional Properties
* **Additional Properties Type**: bool

## CloudConnectors
### Properties
* **awsExternalId**: string (ReadOnly): AWS external identifier.
Configured in AWS to allow use of the role arn used for scanning

## Credentials
### Properties
* **identityId**: string: Identity identifier for UserAssign type.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string: Identity Type.

## ErrorModel
### Properties
* **code**: string (ReadOnly): Gets or sets the code.
* **details**: [ErrorModel](#errormodel)[] (ReadOnly): Gets or sets the details.
* **message**: string (ReadOnly): Gets or sets the messages.
* **target**: string (ReadOnly): Gets or sets the target.

## Identity
### Properties
* **principalId**: string (ReadOnly): Service principal object Id
* **tenantId**: string (ReadOnly): Tenant Id
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string: Identity Type
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): User Assigned Identities

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## KafkaConfigurationProperties
### Properties
* **consumerGroup**: string: Consumer group for hook event hub.
* **credentials**: [Credentials](#credentials): Credentials to access event hub.
* **eventHubPartitionId**: string: Optional partition Id for notification event hub. If not set, all partitions will be leveraged.
* **eventHubResourceId**: string
* **eventHubType**: 'Hook' | 'Notification' | string: The event hub type.
* **eventStreamingState**: 'Disabled' | 'Enabled' | string: The state of the event streaming service
* **eventStreamingType**: 'Azure' | 'Managed' | 'None' | string: The event streaming service type

## PrivateEndpoint
### Properties
* **id**: string: The private endpoint identifier.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Gets or sets the identifier.
* **name**: string (ReadOnly): Gets or sets the name.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The connection identifier.
* **systemData**: [ProxyResourceSystemData](#proxyresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): Gets or sets the type.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint information.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): The private link service connection state.
* **provisioningState**: string (ReadOnly): The provisioning state.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: The required actions.
* **description**: string: The description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Unknown' | string: The status.

## ProxyResourceSystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (ReadOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (ReadOnly): The timestamp of the last modification the resource (UTC).
* **lastModifiedBy**: string (ReadOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that last modified the resource.

## TrackedResourceSystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (ReadOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (ReadOnly): The timestamp of the last modification the resource (UTC).
* **lastModifiedBy**: string (ReadOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): Gets or Sets Client ID
* **principalId**: string (ReadOnly): Gets or Sets Principal ID

