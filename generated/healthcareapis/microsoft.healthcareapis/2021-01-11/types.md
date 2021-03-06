# Microsoft.HealthcareApis @ 2021-01-11

## Resource Microsoft.HealthcareApis/services@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: An etag associated with the resource, used for optimistic concurrency when editing it.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ServicesResourceIdentity](#servicesresourceidentity): Setting indicating whether the service has a managed identity associated with it.
* **kind**: 'fhir' | 'fhir-R4' | 'fhir-Stu3' (Required): The kind of the service.
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServicesProperties](#servicesproperties): The properties of a service instance.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ServicesResourceTags](#servicesresourcetags): The resource tags.
* **type**: 'Microsoft.HealthcareApis/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HealthcareApis/services/privateEndpointConnections@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HealthcareApis/services/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## ServicesResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID of the resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of the resource.
* **type**: 'None' | 'SystemAssigned': Type of identity being specified, currently SystemAssigned and None are allowed.

## ServicesProperties
### Properties
* **accessPolicies**: [ServiceAccessPolicyEntry](#serviceaccesspolicyentry)[]: The access policies of the service instance.
* **acrConfiguration**: [ServiceAcrConfigurationInfo](#serviceacrconfigurationinfo): Azure container registry configuration information
* **authenticationConfiguration**: [ServiceAuthenticationConfigurationInfo](#serviceauthenticationconfigurationinfo): Authentication configuration information
* **corsConfiguration**: [ServiceCorsConfigurationInfo](#servicecorsconfigurationinfo): The settings for the CORS configuration of the service instance.
* **cosmosDbConfiguration**: [ServiceCosmosDbConfigurationInfo](#servicecosmosdbconfigurationinfo): The settings for the Cosmos DB database backing the service.
* **exportConfiguration**: [ServiceExportConfigurationInfo](#serviceexportconfigurationinfo): Export operation configuration information
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: The list of private endpoint connections that are set up for this resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Deprovisioned' | 'Failed' | 'Succeeded' | 'Updating' | 'Verifying' (ReadOnly): The provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled': Control permission for data plane traffic coming from public networks while private endpoint is enabled.

## ServiceAccessPolicyEntry
### Properties
* **objectId**: string (Required): An Azure AD object ID (User or Apps) that is allowed access to the FHIR service.

## ServiceAcrConfigurationInfo
### Properties
* **loginServers**: string[]: The list of the ACR login servers.

## ServiceAuthenticationConfigurationInfo
### Properties
* **audience**: string: The audience url for the service
* **authority**: string: The authority url for the service
* **smartProxyEnabled**: bool: If the SMART on FHIR proxy is enabled

## ServiceCorsConfigurationInfo
### Properties
* **allowCredentials**: bool: If credentials are allowed via CORS.
* **headers**: string[]: The headers to be allowed via CORS.
* **maxAge**: int: The max age to be allowed via CORS.
* **methods**: string[]: The methods to be allowed via CORS.
* **origins**: string[]: The origins to be allowed via CORS.

## ServiceCosmosDbConfigurationInfo
### Properties
* **keyVaultKeyUri**: string: The URI of the customer-managed key for the backing database.
* **offerThroughput**: int: The provisioned throughput for the backing database.

## ServiceExportConfigurationInfo
### Properties
* **storageAccountName**: string: The name of the default export storage account.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): The current provisioning state.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

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

## ServicesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

