# Microsoft.HealthcareApis @ 2025-04-01-preview

## Resource Microsoft.HealthcareApis/services@2025-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: An etag associated with the resource, used for optimistic concurrency when editing it.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ServicesResourceIdentity](#servicesresourceidentity): Setting indicating whether the service has a managed identity associated with it.
* **kind**: 'fhir' | 'fhir-R4' | 'fhir-Stu3' (Required): The kind of the service.
* **location**: string (Required): The resource location.
* **name**: string {minLength: 3, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [ServicesProperties](#servicesproperties): The common properties of a service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ServicesResourceTags](#servicesresourcetags): The resource tags.
* **type**: 'Microsoft.HealthcareApis/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HealthcareApis/services/privateEndpointConnections@2025-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HealthcareApis/services/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HealthcareApis/services/privateLinkResources@2025-04-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HealthcareApis/services/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HealthcareApis/workspaces@2025-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: An etag associated with the resource, used for optimistic concurrency when editing it.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string {minLength: 3, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspaces resource specific properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.HealthcareApis/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HealthcareApis/workspaces/dicomservices@2025-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: An etag associated with the resource, used for optimistic concurrency when editing it.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ServiceManagedIdentityIdentity](#servicemanagedidentityidentity): Setting indicating whether the service has a managed identity associated with it.
* **location**: string: The resource location.
* **name**: string {minLength: 3, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [DicomServiceProperties](#dicomserviceproperties): Dicom Service configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.HealthcareApis/workspaces/dicomservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HealthcareApis/workspaces/fhirservices@2025-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: An etag associated with the resource, used for optimistic concurrency when editing it.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ServiceManagedIdentityIdentity](#servicemanagedidentityidentity): Setting indicating whether the service has a managed identity associated with it.
* **kind**: 'fhir-R4' | 'fhir-Stu3' | string: The kind of the service.
* **location**: string: The resource location.
* **name**: string {minLength: 3, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [FhirServiceProperties](#fhirserviceproperties): Fhir Service configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.HealthcareApis/workspaces/fhirservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HealthcareApis/workspaces/iotconnectors@2025-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: An etag associated with the resource, used for optimistic concurrency when editing it.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ServiceManagedIdentityIdentity](#servicemanagedidentityidentity): Setting indicating whether the service has a managed identity associated with it.
* **location**: string: The resource location.
* **name**: string {minLength: 3, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [IotConnectorProperties](#iotconnectorproperties): IoT Connector configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.HealthcareApis/workspaces/iotconnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HealthcareApis/workspaces/iotconnectors/fhirdestinations@2025-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: An etag associated with the resource, used for optimistic concurrency when editing it.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string {minLength: 3, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [IotFhirDestinationProperties](#iotfhirdestinationproperties) (Required): IoT FHIR Destination settings.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HealthcareApis/workspaces/iotconnectors/fhirdestinations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HealthcareApis/workspaces/privateEndpointConnections@2025-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HealthcareApis/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HealthcareApis/workspaces/privateLinkResources@2025-04-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HealthcareApis/workspaces/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## CorsConfiguration
### Properties
* **allowCredentials**: bool: If credentials are allowed via CORS.
* **headers**: string[]: The headers to be allowed via CORS.
* **maxAge**: int {minValue: 0, maxValue: 99999}: The max age to be allowed via CORS.
* **methods**: string[]: The methods to be allowed via CORS.
* **origins**: (string {pattern: "^(?:(?:(?:[hH][tT][tT][pP](?:[sS]|))\:\/\/(?:[a-zA-Z0-9-]+[.]?)+(?:\:[0-9]{1,5})?|[*]))$"})[]: The origins to be allowed via CORS.

## DicomServiceAuthenticationConfiguration
### Properties
* **audiences**: string[] (ReadOnly): The audiences for the service
* **authority**: string (ReadOnly): The authority url for the service

## DicomServiceProperties
### Properties
* **authenticationConfiguration**: [DicomServiceAuthenticationConfiguration](#dicomserviceauthenticationconfiguration): Dicom Service authentication configuration.
* **corsConfiguration**: [CorsConfiguration](#corsconfiguration): Dicom Service Cors configuration.
* **enableDataPartitions**: bool: If data partitions is enabled or not.
* **encryption**: [Encryption](#encryption): The encryption settings of the DICOM service
* **eventState**: 'Disabled' | 'Enabled' | 'Updating' | string (ReadOnly): DICOM Service event support status.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections that are set up for this resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Deprovisioned' | 'Failed' | 'Moving' | 'Succeeded' | 'Suspended' | 'SystemMaintenance' | 'Updating' | 'Verifying' | 'Warned' | string (ReadOnly): The provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Control permission for data plane traffic coming from public networks while private endpoint is enabled.
* **serviceUrl**: string (ReadOnly): The url of the Dicom Services.
* **storageConfiguration**: [StorageConfiguration](#storageconfiguration): The configuration of external storage account

## Encryption
### Properties
* **customerManagedKeyEncryption**: [EncryptionCustomerManagedKeyEncryption](#encryptioncustomermanagedkeyencryption): The encryption settings for the customer-managed key

## EncryptionCustomerManagedKeyEncryption
### Properties
* **keyEncryptionKeyUrl**: string: The URL of the key to use for encryption

## FhirServiceAcrConfiguration
### Properties
* **loginServers**: string[]: The list of the Azure container registry login servers.
* **ociArtifacts**: [ServiceOciArtifactEntry](#serviceociartifactentry)[]: The list of Open Container Initiative (OCI) artifacts.

## FhirServiceAuthenticationConfiguration
### Properties
* **audience**: string: The audience url for the service
* **authority**: string: The authority url for the service
* **smartIdentityProviders**: [SmartIdentityProviderConfiguration](#smartidentityproviderconfiguration)[]: The array of identity provider configurations for SMART on FHIR authentication.
* **smartProxyEnabled**: bool: If the SMART on FHIR proxy is enabled

## FhirServiceCorsConfiguration
### Properties
* **allowCredentials**: bool: If credentials are allowed via CORS.
* **headers**: string[]: The headers to be allowed via CORS.
* **maxAge**: int {minValue: 0, maxValue: 99999}: The max age to be allowed via CORS.
* **methods**: string[]: The methods to be allowed via CORS.
* **origins**: (string {pattern: "^(?:(?:(?:[hH][tT][tT][pP](?:[sS]|))\:\/\/(?:[a-zA-Z0-9-]+[.]?)+(?:\:[0-9]{1,5})?|[*]))$"})[]: The origins to be allowed via CORS.

## FhirServiceExportConfiguration
### Properties
* **storageAccountName**: string: The name of the default export storage account.

## FhirServiceImportConfiguration
### Properties
* **enabled**: bool: If the import operation is enabled.
* **initialImportMode**: bool: If the FHIR service is in InitialImportMode.
* **integrationDataStore**: string: The name of the default integration storage account.

## FhirServiceProperties
### Properties
* **acrConfiguration**: [FhirServiceAcrConfiguration](#fhirserviceacrconfiguration): Fhir Service Azure container registry configuration.
* **authenticationConfiguration**: [FhirServiceAuthenticationConfiguration](#fhirserviceauthenticationconfiguration): Fhir Service authentication configuration.
* **corsConfiguration**: [FhirServiceCorsConfiguration](#fhirservicecorsconfiguration): Fhir Service Cors configuration.
* **encryption**: [Encryption](#encryption): The encryption settings of the FHIR service
* **eventState**: 'Disabled' | 'Enabled' | 'Updating' | string (ReadOnly): Fhir Service event support status.
* **exportConfiguration**: [FhirServiceExportConfiguration](#fhirserviceexportconfiguration): Fhir Service export configuration.
* **implementationGuidesConfiguration**: [ImplementationGuidesConfiguration](#implementationguidesconfiguration): Implementation Guides configuration.
* **importConfiguration**: [FhirServiceImportConfiguration](#fhirserviceimportconfiguration): Fhir Service import configuration.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections that are set up for this resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Deprovisioned' | 'Failed' | 'Moving' | 'Succeeded' | 'Suspended' | 'SystemMaintenance' | 'Updating' | 'Verifying' | 'Warned' | string (ReadOnly): The provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Control permission for data plane traffic coming from public networks while private endpoint is enabled.
* **resourceVersionPolicyConfiguration**: [ResourceVersionPolicyConfiguration](#resourceversionpolicyconfiguration): Determines tracking of history for resources.

## ImplementationGuidesConfiguration
### Properties
* **usCoreMissingData**: bool: If US Core Missing Data requirement is enabled.

## IotConnectorProperties
### Properties
* **deviceMapping**: [IotMappingProperties](#iotmappingproperties): Device Mappings.
* **ingestionEndpointConfiguration**: [IotEventHubIngestionEndpointConfiguration](#ioteventhubingestionendpointconfiguration): Source configuration.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Deprovisioned' | 'Failed' | 'Moving' | 'Succeeded' | 'Suspended' | 'SystemMaintenance' | 'Updating' | 'Verifying' | 'Warned' | string (ReadOnly): The provisioning state.

## IotEventHubIngestionEndpointConfiguration
### Properties
* **consumerGroup**: string: Consumer group of the event hub to connected to.
* **eventHubName**: string: Event Hub name to connect to.
* **fullyQualifiedEventHubNamespace**: string: Fully qualified namespace of the Event Hub to connect to.

## IotFhirDestinationProperties
### Properties
* **fhirMapping**: [IotMappingProperties](#iotmappingproperties) (Required): FHIR Mappings
* **fhirServiceResourceId**: string (Required): Fully qualified resource id of the FHIR service to connect to.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Deprovisioned' | 'Failed' | 'Moving' | 'Succeeded' | 'Suspended' | 'SystemMaintenance' | 'Updating' | 'Verifying' | 'Warned' | string (ReadOnly): The provisioning state.
* **resourceIdentityResolutionType**: 'Create' | 'Lookup' | string (Required): Determines how resource identity is resolved on the destination.

## IotMappingProperties
### Properties
* **content**: any: The mapping.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource Private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceVersionPolicyConfiguration
### Properties
* **default**: 'no-version' | 'versioned' | 'versioned-update' | string: The default value for tracking history across all resources.
* **resourceTypeOverrides**: [ResourceVersionPolicyConfigurationResourceTypeOverrides](#resourceversionpolicyconfigurationresourcetypeoverrides): A list of FHIR Resources and their version policy overrides.

## ResourceVersionPolicyConfigurationResourceTypeOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: 'no-version' | 'versioned' | 'versioned-update' | string

## ServiceAccessPolicyEntry
### Properties
* **objectId**: string {pattern: "^(([0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}){1})+$"} (Required): An Azure AD object ID (User or Apps) that is allowed access to the FHIR service.

## ServiceAcrConfigurationInfo
### Properties
* **loginServers**: string[]: The list of the ACR login servers.
* **ociArtifacts**: [ServiceOciArtifactEntry](#serviceociartifactentry)[]: The list of Open Container Initiative (OCI) artifacts.

## ServiceAuthenticationConfigurationInfo
### Properties
* **audience**: string: The audience url for the service
* **authority**: string: The authority url for the service
* **smartProxyEnabled**: bool: If the SMART on FHIR proxy is enabled

## ServiceCorsConfigurationInfo
### Properties
* **allowCredentials**: bool: If credentials are allowed via CORS.
* **headers**: string[]: The headers to be allowed via CORS.
* **maxAge**: int {minValue: 0, maxValue: 99999}: The max age to be allowed via CORS.
* **methods**: string[]: The methods to be allowed via CORS.
* **origins**: (string {pattern: "^(?:(?:(?:[hH][tT][tT][pP](?:[sS]|))\:\/\/(?:[a-zA-Z0-9-]+[.]?)+(?:\:[0-9]{1,5})?|[*]))$"})[]: The origins to be allowed via CORS.

## ServiceCosmosDbConfigurationInfo
### Properties
* **crossTenantCmkApplicationId**: string {pattern: "^(([0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}){1})+$"}: The multi-tenant application id used to enable CMK access for services in a data sovereign region.
* **keyVaultKeyUri**: string: The URI of the customer-managed key for the backing database.
* **offerThroughput**: int {minValue: 400}: The provisioned throughput for the backing database.

## ServiceExportConfigurationInfo
### Properties
* **storageAccountName**: string: The name of the default export storage account.

## ServiceImportConfigurationInfo
### Properties
* **enabled**: bool: If the import operation is enabled.
* **initialImportMode**: bool: If the FHIR service is in InitialImportMode.
* **integrationDataStore**: string: The name of the default integration storage account.

## ServiceManagedIdentityIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of identity being specified, currently SystemAssigned and None are allowed.
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ServiceOciArtifactEntry
### Properties
* **digest**: string: The artifact digest.
* **imageName**: string: The artifact name.
* **loginServer**: string: The Azure Container Registry login server.

## ServicesProperties
### Properties
* **accessPolicies**: [ServiceAccessPolicyEntry](#serviceaccesspolicyentry)[]: The access policies of the service instance.
* **acrConfiguration**: [ServiceAcrConfigurationInfo](#serviceacrconfigurationinfo): The azure container registry settings used for convert data operation of the service instance.
* **authenticationConfiguration**: [ServiceAuthenticationConfigurationInfo](#serviceauthenticationconfigurationinfo): The authentication configuration for the service instance.
* **corsConfiguration**: [ServiceCorsConfigurationInfo](#servicecorsconfigurationinfo): The settings for the CORS configuration of the service instance.
* **cosmosDbConfiguration**: [ServiceCosmosDbConfigurationInfo](#servicecosmosdbconfigurationinfo): The settings for the Cosmos DB database backing the service.
* **exportConfiguration**: [ServiceExportConfigurationInfo](#serviceexportconfigurationinfo): The settings for the export operation of the service instance.
* **importConfiguration**: [ServiceImportConfigurationInfo](#serviceimportconfigurationinfo): The settings for the import operation of the service instance.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: The list of private endpoint connections that are set up for this resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Deprovisioned' | 'Failed' | 'Moving' | 'Succeeded' | 'Suspended' | 'SystemMaintenance' | 'Updating' | 'Verifying' | 'Warned' | string (ReadOnly): The provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Control permission for data plane traffic coming from public networks while private endpoint is enabled.

## ServicesResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID of the resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of the resource.
* **type**: 'None' | 'SystemAssigned' | string: Type of identity being specified, currently SystemAssigned and None are allowed.

## ServicesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SmartIdentityProviderApplication
### Properties
* **allowedDataActions**: ('Read' | string)[]: The actions that are permitted to be performed on FHIR resources for the application.
* **audience**: string: The audience that will be used to validate bearer tokens against the given authority.
* **clientId**: string: The application client id defined in the identity provider. This value will be used to validate bearer tokens against the given authority.

## SmartIdentityProviderConfiguration
### Properties
* **applications**: [SmartIdentityProviderApplication](#smartidentityproviderapplication)[]: The array of identity provider applications for SMART on FHIR authentication.
* **authority**: string: The identity provider token authority also known as the token issuing authority.

## StorageConfiguration
### Properties
* **fileSystemName**: string: The filesystem name of connected storage account.
* **storageIndexingConfiguration**: [StorageIndexingConfiguration](#storageindexingconfiguration): The configuration for indexing the connected storage.
* **storageResourceId**: string: The resource id of connected storage account.

## StorageIndexingConfiguration
### Properties
* **storageEventQueueName**: string: The name of the queue that contains storage cloud events.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## WorkspaceProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections that are set up for this resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Deprovisioned' | 'Failed' | 'Moving' | 'Succeeded' | 'Suspended' | 'SystemMaintenance' | 'Updating' | 'Verifying' | 'Warned' | string (ReadOnly): The provisioning state.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Control permission for data plane traffic coming from public networks while private endpoint is enabled.

