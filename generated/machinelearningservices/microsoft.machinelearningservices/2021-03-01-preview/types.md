# Microsoft.MachineLearningServices @ 2021-03-01-preview

## Resource Microsoft.MachineLearningServices/workspaces@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of a machine learning workspace.
* **sku**: [Sku](#sku): Sku of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [WorkspaceTags](#workspacetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/batchEndpoints@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): Service identity associated with a resource.
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BatchEndpoint](#batchendpoint) (Required): Batch endpoint configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/batchEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): Service identity associated with a resource.
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BatchDeployment](#batchdeployment) (Required): Batch inference settings per deployment.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/codes@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CodeContainer](#codecontainer) (Required): Container for code asset versions.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/codes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/codes/versions@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CodeVersion](#codeversion) (Required): Code asset version details.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/codes/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/computes@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Compute](#compute): Machine Learning compute object.
* **sku**: [Sku](#sku): Sku of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ComputeResourceTags](#computeresourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/connections@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceConnectionProps](#workspaceconnectionprops): Workspace Connection specific properties.
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/data@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataContainer](#datacontainer) (Required): Container for data asset versions.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/data' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/data/versions@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataVersion](#dataversion) (Required): Data asset version details.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/data/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/datastores@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatastoreProperties](#datastoreproperties) (Required): Datastore definition.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/datastores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/environments@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentContainer](#environmentcontainer) (Required): Container for environment specification versions.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/environments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/environments/versions@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentSpecificationVersion](#environmentspecificationversion) (Required): Environment specification version details.
<see href="https://repo2docker.readthedocs.io/en/latest/specification.html" />
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/environments/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/jobs@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobBase](#jobbase) (Required): Base definition for a job.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/labelingJobs@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabelingJob](#labelingjob) (Required): Labeling job definition
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/labelingJobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/models@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ModelContainer](#modelcontainer) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/models' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/models/versions@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ModelVersion](#modelversion) (Required): Model asset version details.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/models/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): Service identity associated with a resource.
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OnlineEndpoint](#onlineendpoint) (Required): Online endpoint configuration
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): Service identity associated with a resource.
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OnlineDeployment](#onlinedeployment) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **sku**: [Sku](#sku): Sku of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [PrivateEndpointConnectionTags](#privateendpointconnectiontags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.MachineLearningServices/workspaces@2021-03-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2021-03-01-preview
* **Output**: [ListWorkspaceKeysResult](#listworkspacekeysresult)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/computes@2021-03-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2021-03-01-preview
* **Output**: [ComputeSecrets](#computesecrets)

## Function listkeys (Microsoft.MachineLearningServices/workspaces/batchEndpoints@2021-03-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/batchEndpoints
* **ApiVersion**: 2021-03-01-preview
* **Output**: [EndpointAuthKeys](#endpointauthkeys)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2021-03-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/onlineEndpoints
* **ApiVersion**: 2021-03-01-preview
* **Output**: [EndpointAuthKeys](#endpointauthkeys)

## Function listNodes (Microsoft.MachineLearningServices/workspaces/computes@2021-03-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2021-03-01-preview
* **Output**: [AmlComputeNodesInformation](#amlcomputenodesinformation)

## Function listNotebookAccessToken (Microsoft.MachineLearningServices/workspaces@2021-03-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2021-03-01-preview
* **Output**: [NotebookAccessTokenResult](#notebookaccesstokenresult)

## Function listNotebookKeys (Microsoft.MachineLearningServices/workspaces@2021-03-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2021-03-01-preview
* **Output**: [ListNotebookKeysResult](#listnotebookkeysresult)

## Function listSecrets (Microsoft.MachineLearningServices/workspaces/datastores@2021-03-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/datastores
* **ApiVersion**: 2021-03-01-preview
* **Output**: [DatastoreSecrets](#datastoresecrets)

## Function listStorageAccountKeys (Microsoft.MachineLearningServices/workspaces@2021-03-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2021-03-01-preview
* **Output**: [ListStorageAccountKeysResult](#liststorageaccountkeysresult)

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned': The identity type.
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): dictionary containing all the user assigned identities, with resourceId of the UAI as key.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The clientId(aka appId) of the user assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the user assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the user assigned identity.

## WorkspaceProperties
### Properties
* **allowPublicAccessWhenBehindVnet**: bool: The flag to indicate whether to allow public access when behind VNet.
* **applicationInsights**: string: ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
* **containerRegistry**: string: ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
* **description**: string: The description of this workspace.
* **discoveryUrl**: string: Url for the discovery service to identify regional endpoints for machine learning experimentation services
* **encryption**: [EncryptionProperty](#encryptionproperty)
* **friendlyName**: string: The friendly name for this workspace. This name in mutable
* **hbiWorkspace**: bool: The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
* **imageBuildCompute**: string: The compute name for image build
* **keyVault**: string: ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
* **notebookInfo**: [NotebookResourceInfo](#notebookresourceinfo) (ReadOnly)
* **primaryUserAssignedIdentity**: string: The user assigned identity resource id that represents the workspace identity.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections in the workspace.
* **privateLinkCount**: int (ReadOnly): Count of private connections in the workspace
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **serviceManagedResourcesSettings**: [ServiceManagedResourcesSettings](#servicemanagedresourcessettings)
* **serviceProvisionedResourceGroup**: string (ReadOnly): The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[]: The list of shared private link resources in this workspace.
* **storageAccount**: string: ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
* **tenantId**: string (ReadOnly): The tenant id associated with this workspace.
* **workspaceId**: string (ReadOnly): The immutable id associated with this workspace.

## EncryptionProperty
### Properties
* **identity**: [IdentityForCmk](#identityforcmk): Identity that will be used to access key vault for encryption at rest
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties) (Required)
* **status**: 'Disabled' | 'Enabled' (Required): Indicates whether or not the encryption is enabled for the workspace.

## IdentityForCmk
### Properties
* **userAssignedIdentity**: string: The ArmId of the user assigned identity that will be used to access the customer managed key vault

## KeyVaultProperties
### Properties
* **identityClientId**: string: For future use - The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string (Required): Key vault uri to access the encryption key.
* **keyVaultArmId**: string (Required): The ArmId of the keyVault where the customer owned encryption key is present.

## NotebookResourceInfo
### Properties
* **fqdn**: string
* **notebookPreparationError**: [NotebookPreparationError](#notebookpreparationerror)
* **resourceId**: string: the data plane resourceId that used to initialize notebook component

## NotebookPreparationError
### Properties
* **errorMessage**: string
* **statusCode**: int

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **sku**: [Sku](#sku): Sku of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [PrivateEndpointConnectionTags](#privateendpointconnectiontags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): The current provisioning state.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint
* **subnetArmId**: string (ReadOnly): The ARM identifier for Subnet resource that private endpoint links to

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout': The private endpoint connection status.

## Sku
### Properties
* **name**: string: Name of the sku
* **tier**: string: Tier of the sku like Basic or Enterprise

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## PrivateEndpointConnectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceManagedResourcesSettings
### Properties
* **cosmosDb**: [CosmosDbSettings](#cosmosdbsettings)

## CosmosDbSettings
### Properties
* **collectionsThroughput**: int: The throughput of the collections in cosmosdb database

## SharedPrivateLinkResource
### Properties
* **name**: string: Unique name of the private link.
* **properties**: [SharedPrivateLinkResourceProperty](#sharedprivatelinkresourceproperty): Properties of a shared private link resource.

## SharedPrivateLinkResourceProperty
### Properties
* **groupId**: string: The private link resource group id.
* **privateLinkResourceId**: string: The resource id that private link links to.
* **requestMessage**: string: Request message.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout': The private endpoint connection status.

## WorkspaceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): Client ID that is used when authenticating.
* **tenantId**: string (ReadOnly): AAD Tenant where this identity lives.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned': Defines values for a ResourceIdentity's type.
* **userAssignedIdentities**: [ResourceIdentityUserAssignedIdentities](#resourceidentityuserassignedidentities): Dictionary of the user assigned identities, key is ARM resource ID of the UAI.

## ResourceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentityMeta](#userassignedidentitymeta)

## UserAssignedIdentityMeta
### Properties
* **clientId**: string: Aka application ID, a unique identifier generated by Azure AD that is tied to an application and service principal during its initial provisioning.
* **principalId**: string: The object ID of the service principal object for your managed identity that is used to grant role-based access to an Azure resource.

## BatchEndpoint
### Properties
* **authMode**: 'AADToken' | 'AMLToken' | 'Key': Enum to determine endpoint authentication mode.
* **description**: string: Description of the inference endpoint.
* **keys**: [EndpointAuthKeys](#endpointauthkeys) (WriteOnly): Keys for endpoint authentication.
* **properties**: [BatchEndpointProperties](#batchendpointproperties): Property dictionary. Properties can be added, but not removed or altered.
* **scoringUri**: string (ReadOnly): Endpoint URI.
* **swaggerUri**: string (ReadOnly): Endpoint Swagger URI.
* **traffic**: [BatchEndpointTraffic](#batchendpointtraffic): Traffic rules on how the traffic will be routed across deployments.

## EndpointAuthKeys
### Properties
* **primaryKey**: string: The primary key.
* **secondaryKey**: string: The secondary key.

## BatchEndpointProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BatchEndpointTraffic
### Properties
### Additional Properties
* **Additional Properties Type**: int

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BatchDeployment
### Properties
* **codeConfiguration**: [CodeConfiguration](#codeconfiguration): Configuration for a scoring code asset.
* **compute**: [ComputeConfiguration](#computeconfiguration): Configuration for compute binding.
* **description**: string: Description of the endpoint deployment.
* **environmentId**: string: ARM resource ID of the environment specification for the endpoint deployment.
* **environmentVariables**: [BatchDeploymentEnvironmentVariables](#batchdeploymentenvironmentvariables): Environment variables configuration for the deployment.
* **errorThreshold**: int: Error threshold, if the error count for the entire input goes above this value,
the batch inference will be aborted. Range is [-1, int.MaxValue].
For FileDataset, this value is the count of file failures.
For TabularDataset, this value is the count of record failures.
If set to -1 (the lower bound), all failures during batch inference will be ignored.
* **loggingLevel**: 'Debug' | 'Info' | 'Warning': Log verbosity for batch inferencing.
Increasing verbosity order for logging is : Warning, Info and Debug.
The default value is Info.
* **miniBatchSize**: int: Size of the mini-batch passed to each batch invocation.
For FileDataset, this is the number of files per mini-batch.
For TabularDataset, this is the size of the records in bytes, per mini-batch.
* **model**: [AssetReferenceBase](#assetreferencebase): Base definition for asset references.
* **outputConfiguration**: [BatchOutputConfiguration](#batchoutputconfiguration): Batch inference output configuration.
* **partitionKeys**: string[]: Partition keys list used for Named partitioning.
* **properties**: [BatchDeploymentProperties](#batchdeploymentproperties): Property dictionary. Properties can be added, but not removed or altered.
* **retrySettings**: [BatchRetrySettings](#batchretrysettings): Retry settings for a batch inference operation.

## CodeConfiguration
### Properties
* **codeId**: string: ARM resource ID of the code asset.
* **scoringScript**: string (Required): [Required] The script to execute on startup. eg. "score.py"

## ComputeConfiguration
### Properties
* **instanceCount**: int: Number of instances or nodes.
* **instanceType**: string: SKU type to run on.
* **isLocal**: bool: Set to true for jobs running on local compute.
* **location**: string: Location for virtual cluster run.
* **properties**: [ComputeConfigurationProperties](#computeconfigurationproperties): Additional properties.
* **target**: string: ARM resource ID of the Compute you are targeting. If not provided the resource will be deployed as Managed.

## ComputeConfigurationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BatchDeploymentEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssetReferenceBase
* **Discriminator**: referenceType

### Base Properties
### DataPathAssetReference
#### Properties
* **datastoreId**: string: ARM resource ID of the datastore where the asset is located.
* **path**: string: The path of the file/directory in the datastore.
* **referenceType**: 'DataPath' (Required): [Required] Specifies the type of asset reference.

### IdAssetReference
#### Properties
* **assetId**: string (Required): [Required] ARM resource ID of the asset.
* **referenceType**: 'Id' (Required): [Required] Specifies the type of asset reference.

### OutputPathAssetReference
#### Properties
* **jobId**: string: ARM resource ID of the job.
* **path**: string: The path of the file/directory in the job output.
* **referenceType**: 'OutputPath' (Required): [Required] Specifies the type of asset reference.


## BatchOutputConfiguration
### Properties
* **appendRowFileName**: string: Customized output file name for append_row output action.
* **outputAction**: 'AppendRow' | 'SummaryOnly': Enum to determine how batch inferencing will handle output

## BatchDeploymentProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BatchRetrySettings
### Properties
* **maxRetries**: int: Maximum retry count for a mini-batch
* **timeout**: string: Invocation timeout for a mini-batch, in ISO 8601 format.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CodeContainer
### Properties
* **description**: string: The asset description text.
* **properties**: [CodeContainerProperties](#codecontainerproperties): The asset property dictionary.
* **tags**: [CodeContainerTags](#codecontainertags): Tag dictionary. Tags can be added, removed, and updated.

## CodeContainerProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CodeContainerTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CodeVersion
### Properties
* **datastoreId**: string: ARM resource ID of the datastore where the asset is located.
* **description**: string: The asset description text.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **path**: string (Required): [Required] The path of the file/directory in the datastore.
* **properties**: [CodeVersionProperties](#codeversionproperties): The asset property dictionary.
* **tags**: [CodeVersionTags](#codeversiontags): Tag dictionary. Tags can be added, removed, and updated.

## CodeVersionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CodeVersionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Compute
* **Discriminator**: computeType

### Base Properties
* **computeLocation**: string: Location for the underlying compute
* **createdOn**: string (ReadOnly): The time at which the compute was created.
* **description**: string: The description of the Machine Learning compute.
* **disableLocalAuth**: bool: Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
* **isAttachedCompute**: bool (ReadOnly): Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
* **modifiedOn**: string (ReadOnly): The time at which the compute was last modified.
* **provisioningErrors**: [ErrorResponse](#errorresponse)[] (ReadOnly): Errors during provisioning
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **resourceId**: string: ARM resource id of the underlying compute
### AKS
#### Properties
* **computeType**: 'AKS' (Required): The type of compute
* **properties**: [AKSProperties](#aksproperties): AKS properties

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required): The type of compute
* **properties**: [AmlComputeProperties](#amlcomputeproperties): AML Compute properties

### ComputeInstance
#### Properties
* **computeType**: 'ComputeInstance' (Required): The type of compute
* **properties**: [ComputeInstanceProperties](#computeinstanceproperties): Compute Instance properties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required): The type of compute
* **properties**: [DatabricksProperties](#databricksproperties)

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required): The type of compute

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required): The type of compute
* **properties**: [DataLakeAnalyticsProperties](#datalakeanalyticsproperties)

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required): The type of compute
* **properties**: [HDInsightProperties](#hdinsightproperties)

### SynapseSpark
#### Properties
* **computeType**: 'SynapseSpark' (Required): The type of compute

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required): The type of compute
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)


## ErrorResponse
### Properties
* **error**: [ErrorDetail](#errordetail): The error detail.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): Any object
* **type**: string (ReadOnly): The additional info type.

## AKSProperties
### Properties
* **agentCount**: int: Number of agents
* **agentVmSize**: string: Agent virtual machine size
* **aksNetworkingConfiguration**: [AksNetworkingConfiguration](#aksnetworkingconfiguration): Advance configuration for AKS networking
* **clusterFqdn**: string: Cluster full qualified domain name
* **clusterPurpose**: 'DenseProd' | 'DevTest' | 'FastProd': Intended usage of the cluster
* **loadBalancerSubnet**: string: Load Balancer Subnet
* **loadBalancerType**: 'InternalLoadBalancer' | 'PublicIp': Load Balancer Type
* **sslConfiguration**: [SslConfiguration](#sslconfiguration): The ssl configuration for scoring
* **systemServices**: [SystemService](#systemservice)[] (ReadOnly): System services

## AksNetworkingConfiguration
### Properties
* **dnsServiceIP**: string: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **dockerBridgeCidr**: string: A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
* **serviceCidr**: string: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
* **subnetId**: string: Virtual network subnet resource ID the compute nodes belong to

## SslConfiguration
### Properties
* **cert**: string: Cert data
* **cname**: string: CNAME of the cert
* **key**: string: Key data
* **leafDomainLabel**: string: Leaf domain label of public endpoint
* **overwriteExistingDomain**: bool: Indicates whether to overwrite existing domain label.
* **status**: 'Auto' | 'Disabled' | 'Enabled': Enable or disable ssl for scoring

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly): Public IP address
* **systemServiceType**: string (ReadOnly): The type of this system service.
* **version**: string (ReadOnly): The version for this type.

## AmlComputeProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' (ReadOnly): Allocation state of the compute. Possible values are: steady - Indicates that the compute is not resizing. There are no changes to the number of compute nodes in the compute in progress. A compute enters this state when it is created and when no operations are being performed on the compute to change the number of compute nodes. resizing - Indicates that the compute is resizing; that is, compute nodes are being added to or removed from the compute.
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the compute entered its current allocation state.
* **currentNodeCount**: int (ReadOnly): The number of compute nodes currently assigned to the compute.
* **enableNodePublicIp**: bool: Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
* **errors**: [ErrorResponse](#errorresponse)[] (ReadOnly): Collection of errors encountered by various compute nodes during node setup.
* **isolatedNetwork**: bool: Network is isolated or not
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly): Counts of various compute node states on the amlCompute.
* **osType**: 'Linux' | 'Windows': Compute OS Type
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified': State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
* **scaleSettings**: [ScaleSettings](#scalesettings): scale settings for AML Compute
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **targetNodeCount**: int (ReadOnly): The target number of compute nodes for the compute. If the allocationState is resizing, this property denotes the target node count for the ongoing resize operation. If the allocationState is steady, this property denotes the target node count for the previous resize operation.
* **userAccountCredentials**: [UserAccountCredentials](#useraccountcredentials): Settings for user account that gets created on each on the nodes of a compute.
* **virtualMachineImage**: [VirtualMachineImage](#virtualmachineimage): Virtual Machine image for Windows AML Compute
* **vmPriority**: 'Dedicated' | 'LowPriority': Virtual Machine priority
* **vmSize**: string: Virtual Machine Size

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly): Number of compute nodes in idle state.
* **leavingNodeCount**: int (ReadOnly): Number of compute nodes which are leaving the amlCompute.
* **preemptedNodeCount**: int (ReadOnly): Number of compute nodes which are in preempted state.
* **preparingNodeCount**: int (ReadOnly): Number of compute nodes which are being prepared.
* **runningNodeCount**: int (ReadOnly): Number of compute nodes which are running jobs.
* **unusableNodeCount**: int (ReadOnly): Number of compute nodes which are in unusable state.

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required): Max number of nodes to use
* **minNodeCount**: int: Min number of nodes to use
* **nodeIdleTimeBeforeScaleDown**: string: Node Idle Time before scaling down amlCompute. This string needs to be in the RFC Format.

## ResourceId
### Properties
* **id**: string (Required): The ID of the resource

## UserAccountCredentials
### Properties
* **adminUserName**: string (Required): Name of the administrator user account which can be used to SSH to nodes.
* **adminUserPassword**: string: Password of the administrator user account.
* **adminUserSshPublicKey**: string: SSH public key of the administrator user account.

## VirtualMachineImage
### Properties
* **id**: string (Required): Virtual Machine image path

## ComputeInstanceProperties
### Properties
* **applications**: [ComputeInstanceApplication](#computeinstanceapplication)[] (ReadOnly): Describes available applications and their endpoints on this ComputeInstance.
* **applicationSharingPolicy**: 'Personal' | 'Shared': Policy for sharing applications on this compute instance among users of parent workspace. If Personal, only the creator can access applications on this compute instance. When Shared, any workspace user can access applications on this instance depending on his/her assigned role.
* **computeInstanceAuthorizationType**: 'personal': The Compute Instance Authorization type. Available values are personal (default).
* **connectivityEndpoints**: [ComputeInstanceConnectivityEndpoints](#computeinstanceconnectivityendpoints) (ReadOnly): Defines all connectivity endpoints and properties for an ComputeInstance.
* **createdBy**: [ComputeInstanceCreatedBy](#computeinstancecreatedby) (ReadOnly): Describes information on user who created this ComputeInstance.
* **enableNodePublicIp**: bool: Enable or disable node public IP address provisioning. Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
* **errors**: [ErrorResponse](#errorresponse)[] (ReadOnly): Collection of errors encountered on this ComputeInstance.
* **lastOperation**: [ComputeInstanceLastOperation](#computeinstancelastoperation) (ReadOnly): The last operation on ComputeInstance.
* **personalComputeInstanceSettings**: [PersonalComputeInstanceSettings](#personalcomputeinstancesettings): Settings for a personal compute instance.
* **schedules**: [ComputeSchedules](#computeschedules): The list of schedules to be applied on the computes
* **setupScripts**: [SetupScripts](#setupscripts): Details of customized scripts to execute for setting up the cluster.
* **sshSettings**: [ComputeInstanceSshSettings](#computeinstancesshsettings): Specifies policy and settings for SSH access.
* **state**: 'CreateFailed' | 'Creating' | 'Deleting' | 'JobRunning' | 'Restarting' | 'Running' | 'SettingUp' | 'SetupFailed' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | 'Unusable' | 'UserSettingUp' | 'UserSetupFailed' (ReadOnly): Current state of an ComputeInstance.
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **vmSize**: string: Virtual Machine Size

## ComputeInstanceApplication
### Properties
* **displayName**: string: Name of the ComputeInstance application.
* **endpointUri**: string: Application' endpoint URI.

## ComputeInstanceConnectivityEndpoints
### Properties
* **privateIpAddress**: string (ReadOnly): Private IP Address of this ComputeInstance (local to the VNET in which the compute instance is deployed).
* **publicIpAddress**: string (ReadOnly): Public IP Address of this ComputeInstance.

## ComputeInstanceCreatedBy
### Properties
* **userId**: string (ReadOnly): Uniquely identifies the user within his/her organization.
* **userName**: string (ReadOnly): Name of the user.
* **userOrgId**: string (ReadOnly): Uniquely identifies user' Azure Active Directory organization.

## ComputeInstanceLastOperation
### Properties
* **operationName**: 'Create' | 'Delete' | 'Reimage' | 'Restart' | 'Start' | 'Stop': Name of the last operation.
* **operationStatus**: 'CreateFailed' | 'DeleteFailed' | 'InProgress' | 'ReimageFailed' | 'RestartFailed' | 'StartFailed' | 'StopFailed' | 'Succeeded': Operation status.
* **operationTime**: string: Time of the last operation.

## PersonalComputeInstanceSettings
### Properties
* **assignedUser**: [AssignedUser](#assigneduser): A user that can be assigned to a compute instance.

## AssignedUser
### Properties
* **objectId**: string (Required): User’s AAD Object Id.
* **tenantId**: string (Required): User’s AAD Tenant Id.

## ComputeSchedules
### Properties
* **computeStartStop**: [ComputeStartStopSchedule](#computestartstopschedule)[]: The list of compute start stop schedules to be applied.

## ComputeStartStopSchedule
### Properties
* **action**: 'Start' | 'Stop': The compute power action.
* **cron**: [Cron](#cron): The workflow trigger cron for ComputeStartStop schedule type.
* **id**: string (ReadOnly): Schedule id.
* **provisioningStatus**: 'Completed' | 'Failed' | 'Provisioning' (ReadOnly): The current deployment state of schedule.
* **recurrence**: [Recurrence](#recurrence): The workflow trigger recurrence for ComputeStartStop schedule type.
* **status**: 'Disabled' | 'Enabled': The schedule status.
* **triggerType**: 'Cron' | 'Recurrence': The schedule trigger type.

## Cron
### Properties
* **expression**: string: The cron expression.
* **startTime**: string: The start time.
* **timeZone**: string: The time zone.

## Recurrence
### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'NotSpecified' | 'Second' | 'Week' | 'Year': The recurrence frequency.
* **interval**: int: The interval.
* **schedule**: [RecurrenceSchedule](#recurrenceschedule): The recurrence schedule
* **startTime**: string: The start time.
* **timeZone**: string: The time zone.

## RecurrenceSchedule
### Properties
* **hours**: int[]: The hours.
* **minutes**: int[]: The minutes.
* **weekDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: The days of the week.

## SetupScripts
### Properties
* **scripts**: [ScriptsToExecute](#scriptstoexecute): Customized setup scripts

## ScriptsToExecute
### Properties
* **creationScript**: [ScriptReference](#scriptreference): Script reference
* **startupScript**: [ScriptReference](#scriptreference): Script reference

## ScriptReference
### Properties
* **scriptArguments**: string: Optional command line arguments passed to the script to run.
* **scriptData**: string: The location of scripts in the mounted volume.
* **scriptSource**: string: The storage source of the script: inline, workspace.
* **timeout**: string: Optional time period passed to timeout command.

## ComputeInstanceSshSettings
### Properties
* **adminPublicKey**: string: Specifies the SSH rsa public key file as a string. Use "ssh-keygen -t rsa -b 2048" to generate your SSH key pairs.
* **adminUserName**: string (ReadOnly): Describes the admin user name.
* **sshPort**: int (ReadOnly): Describes the port for connecting through SSH.
* **sshPublicAccess**: 'Disabled' | 'Enabled': State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on this instance. Enabled - Indicates that the public ssh port is open and accessible according to the VNet/subnet policy if applicable.

## DatabricksProperties
### Properties
* **databricksAccessToken**: string: Databricks access token
* **workspaceUrl**: string: Workspace Url

## DataLakeAnalyticsProperties
### Properties
* **dataLakeStoreAccountName**: string: DataLake Store Account Name

## HDInsightProperties
### Properties
* **address**: string: Public IP address of the master node of the cluster.
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for virtual machine
* **sshPort**: int: Port open for ssh connections on the master node of the cluster.

## VirtualMachineSshCredentials
### Properties
* **password**: string: Password of admin account
* **privateKeyData**: string: Private key data
* **publicKeyData**: string: Public key data
* **username**: string: Username of admin account

## VirtualMachineProperties
### Properties
* **address**: string: Public IP address of the virtual machine.
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for virtual machine
* **isNotebookInstanceCompute**: bool: Indicates whether this compute will be used for running notebooks.
* **sshPort**: int: Port open for ssh connections.
* **virtualMachineSize**: string: Virtual Machine size

## ComputeResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceConnectionProps
### Properties
* **authType**: string: Authorization type of the workspace connection.
* **category**: string: Category of the workspace connection.
* **target**: string: Target of the workspace connection.
* **value**: string: Value details of the workspace connection.
* **valueFormat**: 'JSON': format for the workspace connection value

## DataContainer
### Properties
* **description**: string: The asset description text.
* **properties**: [DataContainerProperties](#datacontainerproperties): The asset property dictionary.
* **tags**: [DataContainerTags](#datacontainertags): Tag dictionary. Tags can be added, removed, and updated.

## DataContainerProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataContainerTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataVersion
### Properties
* **datasetType**: 'Dataflow' | 'Simple'
* **datastoreId**: string: ARM resource ID of the datastore where the asset is located.
* **description**: string: The asset description text.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **path**: string (Required): [Required] The path of the file/directory in the datastore.
* **properties**: [DataVersionProperties](#dataversionproperties): The asset property dictionary.
* **tags**: [DataVersionTags](#dataversiontags): Tag dictionary. Tags can be added, removed, and updated.

## DataVersionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataVersionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatastoreProperties
### Properties
* **contents**: [DatastoreContents](#datastorecontents) (Required): Base definition for datastore contents configuration.
* **description**: string: The asset description text.
* **hasBeenValidated**: bool (ReadOnly): Whether the service has validated access to the datastore with the provided credentials.
* **isDefault**: bool: Whether this datastore is the default for the workspace.
* **linkedInfo**: [LinkedInfo](#linkedinfo): Information about a datastore origin, if linked.
* **properties**: [DatastoreProperties](#datastoreproperties): The asset property dictionary.
* **tags**: [DatastorePropertiesTags](#datastorepropertiestags): Tag dictionary. Tags can be added, removed, and updated.

## DatastoreContents
* **Discriminator**: contentsType

### Base Properties
### AzureBlobContents
#### Properties
* **accountName**: string (Required): [Required] Storage account name.
* **containerName**: string (Required): [Required] Storage account container name.
* **contentsType**: 'AzureBlob' (Required): [Required] Storage type backing the datastore.
* **credentials**: [DatastoreCredentials](#datastorecredentials) (Required): Base definition for datastore credentials.
* **endpoint**: string (Required): [Required] Azure cloud endpoint for the storage account.
* **protocol**: string (Required): [Required] Protocol used to communicate with the storage account.

### AzureDataLakeGen1Contents
#### Properties
* **contentsType**: 'AzureDataLakeGen1' (Required): [Required] Storage type backing the datastore.
* **credentials**: [DatastoreCredentials](#datastorecredentials) (Required): Base definition for datastore credentials.
* **storeName**: string (Required): [Required] Azure Data Lake store name.

### AzureDataLakeGen2Contents
#### Properties
* **accountName**: string (Required): [Required] Storage account name.
* **containerName**: string (Required): [Required] Storage account container name.
* **contentsType**: 'AzureDataLakeGen2' (Required): [Required] Storage type backing the datastore.
* **credentials**: [DatastoreCredentials](#datastorecredentials) (Required): Base definition for datastore credentials.
* **endpoint**: string (Required): [Required] Azure cloud endpoint for the storage account.
* **protocol**: string (Required): [Required] Protocol used to communicate with the storage account.

### AzureFileContents
#### Properties
* **accountName**: string (Required): [Required] Storage account name.
* **containerName**: string (Required): [Required] Storage account container name.
* **contentsType**: 'AzureFile' (Required): [Required] Storage type backing the datastore.
* **credentials**: [DatastoreCredentials](#datastorecredentials) (Required): Base definition for datastore credentials.
* **endpoint**: string (Required): [Required] Azure cloud endpoint for the storage account.
* **protocol**: string (Required): [Required] Protocol used to communicate with the storage account.

### AzurePostgreSqlContents
#### Properties
* **contentsType**: 'AzurePostgreSql' (Required): [Required] Storage type backing the datastore.
* **credentials**: [DatastoreCredentials](#datastorecredentials) (Required): Base definition for datastore credentials.
* **databaseName**: string (Required): [Required] Azure SQL database name.
* **enableSSL**: bool: Whether the Azure PostgreSQL server requires SSL.
* **endpoint**: string (Required): [Required] Azure cloud endpoint for the database.
* **portNumber**: int (Required): [Required] Azure SQL server port.
* **serverName**: string (Required): [Required] Azure SQL server name.

### AzureSqlDatabaseContents
#### Properties
* **contentsType**: 'AzureSqlDatabase' (Required): [Required] Storage type backing the datastore.
* **credentials**: [DatastoreCredentials](#datastorecredentials) (Required): Base definition for datastore credentials.
* **databaseName**: string (Required): [Required] Azure SQL database name.
* **endpoint**: string (Required): [Required] Azure cloud endpoint for the database.
* **portNumber**: int (Required): [Required] Azure SQL server port.
* **serverName**: string (Required): [Required] Azure SQL server name.

### GlusterFsContents
#### Properties
* **contentsType**: 'GlusterFs' (Required): [Required] Storage type backing the datastore.
* **serverAddress**: string (Required): [Required] GlusterFS server address (can be the IP address or server name).
* **volumeName**: string (Required): [Required] GlusterFS volume name.


## DatastoreCredentials
* **Discriminator**: credentialsType

### Base Properties
### AccountKeyDatastoreCredentials
#### Properties
* **credentialsType**: 'AccountKey' (Required): [Required] Credential type used to authentication with storage.
* **secrets**: [AccountKeyDatastoreSecrets](#accountkeydatastoresecrets) (WriteOnly): Datastore account key secrets.

### CertificateDatastoreCredentials
#### Properties
* **authorityUrl**: string: Authority URL used for authentication.
* **clientId**: string (Required): [Required] Service principal client ID.
* **credentialsType**: 'Certificate' (Required): [Required] Credential type used to authentication with storage.
* **resourceUri**: string: Resource the service principal has access to.
* **secrets**: [CertificateDatastoreSecrets](#certificatedatastoresecrets) (WriteOnly): Datastore certificate secrets.
* **tenantId**: string (Required): [Required] ID of the tenant to which the service principal belongs.
* **thumbprint**: string (Required): [Required] Thumbprint of the certificate used for authentication.

### NoneDatastoreCredentials
#### Properties
* **credentialsType**: 'None' (Required): [Required] Credential type used to authentication with storage.
* **secrets**: [NoneDatastoreSecrets](#nonedatastoresecrets) (WriteOnly): Empty/none datastore secret.

### SasDatastoreCredentials
#### Properties
* **credentialsType**: 'Sas' (Required): [Required] Credential type used to authentication with storage.
* **secrets**: [SasDatastoreSecrets](#sasdatastoresecrets) (WriteOnly): Datastore SAS secrets.

### ServicePrincipalDatastoreCredentials
#### Properties
* **authorityUrl**: string: Authority URL used for authentication.
* **clientId**: string (Required): [Required] Service principal client ID.
* **credentialsType**: 'ServicePrincipal' (Required): [Required] Credential type used to authentication with storage.
* **resourceUri**: string: Resource the service principal has access to.
* **secrets**: [ServicePrincipalDatastoreSecrets](#serviceprincipaldatastoresecrets) (WriteOnly): Datastore Service Principal secrets.
* **tenantId**: string (Required): [Required] ID of the tenant to which the service principal belongs.

### SqlAdminDatastoreCredentials
#### Properties
* **credentialsType**: 'SqlAdmin' (Required): [Required] Credential type used to authentication with storage.
* **secrets**: [SqlAdminDatastoreSecrets](#sqladmindatastoresecrets) (WriteOnly): Datastore SQL Admin secrets.
* **userId**: string (Required): [Required] SQL database user name.


## AccountKeyDatastoreSecrets
### Properties
* **key**: string: Storage account key.
* **secretsType**: 'AccountKey' | 'Certificate' | 'None' | 'Sas' | 'ServicePrincipal' | 'SqlAdmin' (Required): Enum to determine the datastore secrets type.

## CertificateDatastoreSecrets
### Properties
* **certificate**: string: Service principal certificate.
* **secretsType**: 'AccountKey' | 'Certificate' | 'None' | 'Sas' | 'ServicePrincipal' | 'SqlAdmin' (Required): Enum to determine the datastore secrets type.

## NoneDatastoreSecrets
### Properties
* **secretsType**: 'AccountKey' | 'Certificate' | 'None' | 'Sas' | 'ServicePrincipal' | 'SqlAdmin' (Required): Enum to determine the datastore secrets type.

## SasDatastoreSecrets
### Properties
* **sasToken**: string: Storage container SAS token.
* **secretsType**: 'AccountKey' | 'Certificate' | 'None' | 'Sas' | 'ServicePrincipal' | 'SqlAdmin' (Required): Enum to determine the datastore secrets type.

## ServicePrincipalDatastoreSecrets
### Properties
* **clientSecret**: string: Service principal secret.
* **secretsType**: 'AccountKey' | 'Certificate' | 'None' | 'Sas' | 'ServicePrincipal' | 'SqlAdmin' (Required): Enum to determine the datastore secrets type.

## SqlAdminDatastoreSecrets
### Properties
* **password**: string: SQL database password.
* **secretsType**: 'AccountKey' | 'Certificate' | 'None' | 'Sas' | 'ServicePrincipal' | 'SqlAdmin' (Required): Enum to determine the datastore secrets type.

## LinkedInfo
### Properties
* **linkedId**: string: Linked service ID.
* **linkedResourceName**: string: Linked service resource name.
* **origin**: 'Synapse': Enum to determine the type of linked service.

## DatastoreProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatastorePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentContainer
### Properties
* **description**: string: The asset description text.
* **properties**: [EnvironmentContainerProperties](#environmentcontainerproperties): The asset property dictionary.
* **tags**: [EnvironmentContainerTags](#environmentcontainertags): Tag dictionary. Tags can be added, removed, and updated.

## EnvironmentContainerProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentContainerTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentSpecificationVersion
### Properties
* **condaFile**: string: Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.
<see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" />
* **description**: string: The asset description text.
* **docker**: [DockerSpecification](#dockerspecification): Configuration settings for Docker
* **environmentSpecificationType**: 'Curated' | 'UserCreated' (ReadOnly): Environment specification is either user created or curated by Azure ML service
* **inferenceContainerProperties**: [InferenceContainerProperties](#inferencecontainerproperties)
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **properties**: [EnvironmentSpecificationVersionProperties](#environmentspecificationversionproperties): The asset property dictionary.
* **tags**: [EnvironmentSpecificationVersionTags](#environmentspecificationversiontags): Tag dictionary. Tags can be added, removed, and updated.

## DockerSpecification
* **Discriminator**: dockerSpecificationType

### Base Properties
* **platform**: [DockerImagePlatform](#dockerimageplatform)
### DockerBuild
#### Properties
* **context**: string: Path to a snapshot of the Docker Context. This property is only valid if Dockerfile is specified.
The path is relative to the asset path which must contain a single Blob URI value.
<seealso href="https://docs.docker.com/engine/context/working-with-contexts/" />
* **dockerfile**: string (Required): [Required] Docker command line instructions to assemble an image.
<seealso href="https://repo2docker.readthedocs.io/en/latest/config_files.html#dockerfile-advanced-environments" />
* **dockerSpecificationType**: 'Build' (Required): [Required] Docker specification must be either Build or Image

### DockerImage
#### Properties
* **dockerImageUri**: string (Required): [Required] Image name of a custom base image.
<seealso href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" />
* **dockerSpecificationType**: 'Image' (Required): [Required] Docker specification must be either Build or Image


## DockerImagePlatform
### Properties
* **operatingSystemType**: 'Linux' | 'Windows': The type of operating system.

## InferenceContainerProperties
### Properties
* **livenessRoute**: [Route](#route)
* **readinessRoute**: [Route](#route)
* **scoringRoute**: [Route](#route)

## Route
### Properties
* **path**: string (Required): [Required] The path for the route.
* **port**: int (Required): [Required] The port for the route.

## EnvironmentSpecificationVersionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentSpecificationVersionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobBase
* **Discriminator**: jobType

### Base Properties
* **description**: string: The asset description text.
* **interactionEndpoints**: [JobBaseInteractionEndpoints](#jobbaseinteractionendpoints) (ReadOnly): List of JobEndpoints.
For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
* **properties**: [JobBaseProperties](#jobbaseproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **tags**: [JobBaseTags](#jobbasetags): Tag dictionary. Tags can be added, removed, and updated.
### CommandJob
#### Properties
* **codeId**: string: ARM resource ID of the code asset.
* **command**: string (Required): [Required] The command to execute on startup of the job. eg. "python train.py"
* **compute**: [ComputeConfiguration](#computeconfiguration) (Required): Configuration for compute binding.
* **distribution**: [DistributionConfiguration](#distributionconfiguration): Base definition for job distribution configuration.
* **environmentId**: string: The ARM resource ID of the Environment specification for the job.
* **environmentVariables**: [CommandJobEnvironmentVariables](#commandjobenvironmentvariables): Environment variables included in the job.
* **experimentName**: string: The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
* **identity**: [IdentityConfiguration](#identityconfiguration): Base definition for identity configuration.
* **inputDataBindings**: [CommandJobInputDataBindings](#commandjobinputdatabindings): Mapping of input data bindings used in the job.
* **jobType**: 'Command' (Required): [Required] Specifies the type of job.
* **output**: [JobOutput](#joboutput) (ReadOnly): Job output definition container information on where to find job output/logs.
* **outputDataBindings**: [CommandJobOutputDataBindings](#commandjoboutputdatabindings): Mapping of output data bindings used in the job.
* **parameters**: [CommandJobParameters](#commandjobparameters) (ReadOnly): Input parameters.
* **priority**: int: Job priority for scheduling policy. Only applies to AMLCompute.
Private preview feature and only available to users on the allow list.
* **status**: 'CancelRequested' | 'Canceled' | 'Completed' | 'Failed' | 'Finalizing' | 'NotResponding' | 'NotStarted' | 'Paused' | 'Preparing' | 'Provisioning' | 'Queued' | 'Running' | 'Starting' | 'Unknown' (ReadOnly): The status of a job.
* **timeout**: string: The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.

### SweepJob
#### Properties
* **algorithm**: 'Bayesian' | 'Grid' | 'Random' (Required)
* **compute**: [ComputeConfiguration](#computeconfiguration) (Required): Configuration for compute binding.
* **earlyTermination**: [EarlyTerminationPolicy](#earlyterminationpolicy): Early termination policies enable canceling poor-performing runs before they complete.
* **experimentName**: string: The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
* **identity**: [IdentityConfiguration](#identityconfiguration): Base definition for identity configuration.
* **jobType**: 'Sweep' (Required): [Required] Specifies the type of job.
* **maxConcurrentTrials**: int: An upper bound on the number of trials performed in parallel.
* **maxTotalTrials**: int: An upper bound on the number of trials to perform.
* **objective**: [Objective](#objective) (Required): Optimization objective.
* **output**: [JobOutput](#joboutput) (ReadOnly): Job output definition container information on where to find job output/logs.
* **priority**: int: Job priority for scheduling policy. Only applies to AMLCompute.
Private preview feature and only available to users on the allow list.
* **searchSpace**: [SweepJobSearchSpace](#sweepjobsearchspace) (Required): [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter
* **status**: 'CancelRequested' | 'Canceled' | 'Completed' | 'Failed' | 'Finalizing' | 'NotResponding' | 'NotStarted' | 'Paused' | 'Preparing' | 'Provisioning' | 'Queued' | 'Running' | 'Starting' | 'Unknown' (ReadOnly): The status of a job.
* **timeout**: string: The total timeout in ISO 8601 format. Only supports duration with precision as low as Minutes.
* **trial**: [TrialComponent](#trialcomponent): Trial component definition.


## JobBaseInteractionEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [JobEndpoint](#jobendpoint)

## JobEndpoint
### Properties
* **endpoint**: string: Url for endpoint.
* **jobEndpointType**: string: Endpoint type.
* **port**: int: Port for endpoint.
* **properties**: [JobEndpointProperties](#jobendpointproperties): Additional properties to set on the endpoint.

## JobEndpointProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DistributionConfiguration
* **Discriminator**: distributionType

### Base Properties
### Mpi
#### Properties
* **distributionType**: 'Mpi' (Required): [Required] Specifies the type of distribution framework.
* **processCountPerInstance**: int: Number of processes per MPI node.

### PyTorch
#### Properties
* **distributionType**: 'PyTorch' (Required): [Required] Specifies the type of distribution framework.
* **processCount**: int: Total process count for the distributed job.

### TensorFlow
#### Properties
* **distributionType**: 'TensorFlow' (Required): [Required] Specifies the type of distribution framework.
* **parameterServerCount**: int: Number of parameter server tasks.
* **workerCount**: int: Number of workers. Overwrites the node count in compute binding.


## CommandJobEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IdentityConfiguration
* **Discriminator**: identityType

### Base Properties
### AmlToken
#### Properties
* **identityType**: 'AMLToken' (Required): [Required] Specifies the type of identity framework.

### ManagedIdentity
#### Properties
* **clientId**: string: Specifies a user-assigned identity by client ID. For system-assigned, do not set this field.
* **identityType**: 'Managed' (Required): [Required] Specifies the type of identity framework.
* **objectId**: string: Specifies a user-assigned identity by object ID. For system-assigned, do not set this field.
* **resourceId**: string: Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field.


## CommandJobInputDataBindings
### Properties
### Additional Properties
* **Additional Properties Type**: [InputDataBinding](#inputdatabinding)

## InputDataBinding
### Properties
* **dataId**: string: ARM resource ID of the registered dataVersion.
* **mode**: 'Direct' | 'Download' | 'EvalDownload' | 'EvalMount' | 'Mount' | 'ReadOnlyMount' | 'ReadWriteMount' | 'Upload': Describes how the data should be attached to the container.
* **pathOnCompute**: string: Location of data inside the container process.

## JobOutput
### Properties
* **datastoreId**: string (ReadOnly): ARM ID of the datastore where the job logs and artifacts are stored, or null for the default container ("azureml") in the workspace's storage account.
* **path**: string (ReadOnly): Path within the datastore to the job logs and artifacts.

## CommandJobOutputDataBindings
### Properties
### Additional Properties
* **Additional Properties Type**: [OutputDataBinding](#outputdatabinding)

## OutputDataBinding
### Properties
* **datastoreId**: string: ARM resource ID of the datastore where the data output will be stored.
* **mode**: 'Direct' | 'Download' | 'EvalDownload' | 'EvalMount' | 'Mount' | 'ReadOnlyMount' | 'ReadWriteMount' | 'Upload': Describes how the data should be attached to the container.
* **pathOnCompute**: string: Location of data inside the container process.
* **pathOnDatastore**: string: Path within the datastore to the data.

## CommandJobParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## EarlyTerminationPolicy
* **Discriminator**: policyType

### Base Properties
* **delayEvaluation**: int: Number of intervals by which to delay the first evaluation.
* **evaluationInterval**: int: Interval (number of runs) between policy evaluations.
### BanditPolicy
#### Properties
* **policyType**: 'Bandit' (Required): [Required] Name of policy configuration
* **slackAmount**: int: Absolute distance allowed from the best performing run.
* **slackFactor**: int: Ratio of the allowed distance from the best performing run.

### MedianStoppingPolicy
#### Properties
* **policyType**: 'MedianStopping' (Required): [Required] Name of policy configuration

### TruncationSelectionPolicy
#### Properties
* **policyType**: 'TruncationSelection' (Required): [Required] Name of policy configuration
* **truncationPercentage**: int: The percentage of runs to cancel at each evaluation interval.


## Objective
### Properties
* **goal**: 'Maximize' | 'Minimize' (Required): Defines supported metric goals for hyperparameter tuning
* **primaryMetric**: string (Required): [Required] Name of the metric to optimize.

## SweepJobSearchSpace
### Properties
### Additional Properties
* **Additional Properties Type**: any

## TrialComponent
### Properties
* **codeId**: string: ARM resource ID of the code asset.
* **command**: string (Required): [Required] The command to execute on startup of the job. eg. "python train.py"
* **distribution**: [DistributionConfiguration](#distributionconfiguration): Base definition for job distribution configuration.
* **environmentId**: string: The ARM resource ID of the Environment specification for the job.
* **environmentVariables**: [TrialComponentEnvironmentVariables](#trialcomponentenvironmentvariables): Environment variables included in the job.
* **inputDataBindings**: [TrialComponentInputDataBindings](#trialcomponentinputdatabindings): Mapping of input data bindings used in the job.
* **outputDataBindings**: [TrialComponentOutputDataBindings](#trialcomponentoutputdatabindings): Mapping of output data bindings used in the job.
* **timeout**: string: The max run duration in ISO 8601 format, after which the trial component will be cancelled.
Only supports duration with precision as low as Seconds.

## TrialComponentEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrialComponentInputDataBindings
### Properties
### Additional Properties
* **Additional Properties Type**: [InputDataBinding](#inputdatabinding)

## TrialComponentOutputDataBindings
### Properties
### Additional Properties
* **Additional Properties Type**: [OutputDataBinding](#outputdatabinding)

## LabelingJob
### Properties
* **createdTimeUtc**: string (ReadOnly): Created time of the job in UTC timezone.
* **datasetConfiguration**: [LabelingDatasetConfiguration](#labelingdatasetconfiguration): Labeling dataset configuration definition
* **description**: string: The asset description text.
* **interactionEndpoints**: [LabelingJobInteractionEndpoints](#labelingjobinteractionendpoints) (ReadOnly): List of JobEndpoints.
For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
* **jobInstructions**: [LabelingJobInstructions](#labelingjobinstructions): Instructions for labeling job
* **jobType**: 'Command' | 'Labeling' | 'Sweep' (Required): Enum to determine the type of job.
* **labelCategories**: [LabelingJobLabelCategories](#labelingjoblabelcategories): Label categories of the job.
* **labelingJobMediaProperties**: [LabelingJobMediaProperties](#labelingjobmediaproperties): Properties of a labeling job
* **mlAssistConfiguration**: [MLAssistConfiguration](#mlassistconfiguration): Labeling MLAssist configuration definition
* **progressMetrics**: [ProgressMetrics](#progressmetrics) (ReadOnly): Progress metrics definition
* **projectId**: string (ReadOnly): Internal id of the job(Previously called project).
* **properties**: [LabelingJobProperties](#labelingjobproperties): The asset property dictionary.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **status**: 'CancelRequested' | 'Canceled' | 'Completed' | 'Failed' | 'Finalizing' | 'NotResponding' | 'NotStarted' | 'Paused' | 'Preparing' | 'Provisioning' | 'Queued' | 'Running' | 'Starting' | 'Unknown' (ReadOnly): The status of a job.
* **statusMessages**: [StatusMessage](#statusmessage)[] (ReadOnly): Status messages of the job.
* **tags**: [LabelingJobTags](#labelingjobtags): Tag dictionary. Tags can be added, removed, and updated.

## LabelingDatasetConfiguration
### Properties
* **assetName**: string: Name of the data asset to perform labeling.
* **datasetVersion**: string: AML dataset version.
* **incrementalDatasetRefreshEnabled**: bool: Indicates whether to enable incremental dataset refresh.

## LabelingJobInteractionEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [JobEndpoint](#jobendpoint)

## LabelingJobInstructions
### Properties
* **uri**: string: The link to a page with detailed labeling instructions for labelers.

## LabelingJobLabelCategories
### Properties
### Additional Properties
* **Additional Properties Type**: [LabelCategory](#labelcategory)

## LabelCategory
### Properties
* **allowMultiSelect**: bool: Indicates whether it is allowed to select multiple classes in this category.
* **classes**: [LabelCategoryClasses](#labelcategoryclasses): Dictionary of label classes in this category.
* **displayName**: string: Display name of the label category.

## LabelCategoryClasses
### Properties
### Additional Properties
* **Additional Properties Type**: [LabelClass](#labelclass)

## LabelClass
### Properties
* **displayName**: string: Display name of the label class.
* **subclasses**: [LabelClassSubclasses](#labelclasssubclasses): Dictionary of subclasses of the label class.

## LabelClassSubclasses
### Properties
### Additional Properties
* **Additional Properties Type**: [LabelClass](#labelclass)

## LabelingJobMediaProperties
* **Discriminator**: mediaType

### Base Properties
### LabelingJobImageProperties
#### Properties
* **annotationType**: 'BoundingBox' | 'Classification' | 'InstanceSegmentation': Annotation type of image data.
* **mediaType**: 'Image' (Required): [Required] Media type of the job.

### LabelingJobTextProperties
#### Properties
* **annotationType**: 'Classification': Annotation type of text data.
* **mediaType**: 'Text' (Required): [Required] Media type of the job.


## MLAssistConfiguration
### Properties
* **inferencingComputeBinding**: [ComputeConfiguration](#computeconfiguration): Configuration for compute binding.
* **mlAssistEnabled**: bool: Indicates whether MLAssist feature is enabled.
* **trainingComputeBinding**: [ComputeConfiguration](#computeconfiguration): Configuration for compute binding.

## ProgressMetrics
### Properties
* **completedDatapointCount**: int (ReadOnly): The completed datapoint count.
* **incrementalDatasetLastRefreshTime**: string (ReadOnly): The time of last successful incremental dataset refresh in UTC.
* **skippedDatapointCount**: int (ReadOnly): The skipped datapoint count.
* **totalDatapointCount**: int (ReadOnly): The total datapoint count.

## LabelingJobProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StatusMessage
### Properties
* **code**: string (ReadOnly): Service-defined message code.
* **createdTimeUtc**: string (ReadOnly): Time in UTC at which the message was created.
* **level**: 'Error' | 'Information' | 'Warning' (ReadOnly)
* **message**: string (ReadOnly): A human-readable representation of the message code.

## LabelingJobTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelContainer
### Properties
* **description**: string: The asset description text.
* **properties**: [ModelContainerProperties](#modelcontainerproperties): The asset property dictionary.
* **tags**: [ModelContainerTags](#modelcontainertags): Tag dictionary. Tags can be added, removed, and updated.

## ModelContainerProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelContainerTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelVersion
### Properties
* **datastoreId**: string: ARM resource ID of the datastore where the asset is located.
* **description**: string: The asset description text.
* **flavors**: [ModelVersionFlavors](#modelversionflavors): Mapping of model flavors to their properties.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **path**: string (Required): [Required] The path of the file/directory in the datastore.
* **properties**: [ModelVersionProperties](#modelversionproperties): The asset property dictionary.
* **tags**: [ModelVersionTags](#modelversiontags): Tag dictionary. Tags can be added, removed, and updated.

## ModelVersionFlavors
### Properties
### Additional Properties
* **Additional Properties Type**: [FlavorData](#flavordata)

## FlavorData
### Properties
* **data**: [FlavorData](#flavordata): Model flavor-specific data.

## FlavorData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelVersionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelVersionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OnlineEndpoint
### Properties
* **authMode**: 'AADToken' | 'AMLToken' | 'Key' (Required): Enum to determine endpoint authentication mode.
* **description**: string: Description of the inference endpoint.
* **keys**: [EndpointAuthKeys](#endpointauthkeys) (WriteOnly): Keys for endpoint authentication.
* **properties**: [OnlineEndpointProperties](#onlineendpointproperties): Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): State of endpoint provisioning.
* **scoringUri**: string (ReadOnly): Endpoint URI.
* **swaggerUri**: string (ReadOnly): Endpoint Swagger URI.
* **target**: string: ARM resource ID of the compute if it exists.
optional
* **traffic**: [OnlineEndpointTraffic](#onlineendpointtraffic): Traffic rules on how the traffic will be routed across deployments.

## OnlineEndpointProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OnlineEndpointTraffic
### Properties
### Additional Properties
* **Additional Properties Type**: int

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OnlineDeployment
* **Discriminator**: endpointComputeType

### Base Properties
* **appInsightsEnabled**: bool: If true, enables Application Insights logging.
* **codeConfiguration**: [CodeConfiguration](#codeconfiguration): Configuration for a scoring code asset.
* **description**: string: Description of the endpoint deployment.
* **environmentId**: string: ARM resource ID of the environment specification for the endpoint deployment.
* **environmentVariables**: [OnlineDeploymentEnvironmentVariables](#onlinedeploymentenvironmentvariables): Environment variables configuration for the deployment.
* **livenessProbe**: [ProbeSettings](#probesettings): Deployment container liveness/readiness probe configuration.
* **model**: [AssetReferenceBase](#assetreferencebase): Base definition for asset references.
* **properties**: [OnlineDeploymentProperties](#onlinedeploymentproperties): Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Scaling' | 'Succeeded' | 'Updating' (ReadOnly)
* **requestSettings**: [OnlineRequestSettings](#onlinerequestsettings): Online deployment scoring requests configuration.
* **scaleSettings**: [OnlineScaleSettings](#onlinescalesettings): Online deployment scaling configuration.
### K8SOnlineDeployment
#### Properties
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements): The resource requirements for the container (cpu and memory).
* **endpointComputeType**: 'K8S' (Required): [Required] The compute type of the endpoint.

### ManagedOnlineDeployment
#### Properties
* **endpointComputeType**: 'Managed' (Required): [Required] The compute type of the endpoint.
* **instanceType**: string: Compute instance type.
* **readinessProbe**: [ProbeSettings](#probesettings): Deployment container liveness/readiness probe configuration.


## OnlineDeploymentEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProbeSettings
### Properties
* **failureThreshold**: int: The number of failures to allow before returning an unhealthy status.
* **initialDelay**: string: The delay before the first probe in ISO 8601 format.
* **period**: string: The length of time between probes in ISO 8601 format.
* **successThreshold**: int: The number of successful probes before returning a healthy status.
* **timeout**: string: The probe timeout in ISO 8601 format.

## OnlineDeploymentProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OnlineRequestSettings
### Properties
* **maxConcurrentRequestsPerInstance**: int: The number of requests allowed to queue at once for this deployment.
* **maxQueueWait**: string: The maximum queue wait time in ISO 8601 format. Supports millisecond precision.
* **requestTimeout**: string: The request timeout in ISO 8601 format. Supports millisecond precision.

## OnlineScaleSettings
* **Discriminator**: scaleType

### Base Properties
* **maxInstances**: int: Maximum number of instances for this deployment.
* **minInstances**: int: Minimum number of instances for this deployment.
### AutoScaleSettings
#### Properties
* **pollingInterval**: string: The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds.
* **scaleType**: 'Auto' (Required): [Required] Type of deployment scaling algorithm
* **targetUtilizationPercentage**: int: Target CPU usage for the autoscaler.

### ManualScaleSettings
#### Properties
* **instanceCount**: int: Fixed number of instances for this deployment.
* **scaleType**: 'Manual' (Required): [Required] Type of deployment scaling algorithm


## ContainerResourceRequirements
### Properties
* **cpu**: int: The minimum amount of CPU cores to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **cpuLimit**: int: The maximum amount of CPU cores allowed to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **fpga**: int: The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
* **gpu**: int: The number of GPU cores in the container.
* **memoryInGB**: int: The minimum amount of memory (in GB) to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **memoryInGBLimit**: int: The maximum amount of memory (in GB) allowed to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ListWorkspaceKeysResult
### Properties
* **appInsightsInstrumentationKey**: string (ReadOnly)
* **containerRegistryCredentials**: [RegistryListCredentialsResult](#registrylistcredentialsresult) (ReadOnly)
* **notebookAccessKeys**: [ListNotebookKeysResult](#listnotebookkeysresult) (ReadOnly)
* **userStorageKey**: string (ReadOnly)
* **userStorageResourceId**: string (ReadOnly)

## RegistryListCredentialsResult
### Properties
* **location**: string (ReadOnly)
* **passwords**: [Password](#password)[] (ReadOnly): Array of Password
* **username**: string (ReadOnly)

## Password
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## ListNotebookKeysResult
### Properties
* **primaryAccessKey**: string (ReadOnly)
* **secondaryAccessKey**: string (ReadOnly)

## ComputeSecrets
* **Discriminator**: computeType

### Base Properties
### AksComputeSecrets
#### Properties
* **adminKubeConfig**: string (ReadOnly): Content of kubeconfig file that can be used to connect to the Kubernetes cluster.
* **computeType**: 'AKS' (Required): The type of compute
* **imagePullSecretName**: string (ReadOnly): Image registry pull secret.
* **userKubeConfig**: string (ReadOnly): Content of kubeconfig file that can be used to connect to the Kubernetes cluster.

### DatabricksComputeSecrets
#### Properties
* **computeType**: 'Databricks' (Required): The type of compute
* **databricksAccessToken**: string (ReadOnly): access token for databricks account.

### VirtualMachineSecrets
#### Properties
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials) (ReadOnly): Admin credentials for virtual machine
* **computeType**: 'VirtualMachine' (Required): The type of compute


## EndpointAuthKeys
### Properties
* **primaryKey**: string: The primary key.
* **secondaryKey**: string: The secondary key.

## EndpointAuthKeys
### Properties
* **primaryKey**: string: The primary key.
* **secondaryKey**: string: The secondary key.

## AmlComputeNodesInformation
### Properties
* **computeType**: 'AKS' | 'AmlCompute' | 'ComputeInstance' | 'DataFactory' | 'DataLakeAnalytics' | 'Databricks' | 'HDInsight' | 'SynapseSpark' | 'VirtualMachine' (ReadOnly): The type of compute
* **nextLink**: string (ReadOnly): The continuation token.
* **nodes**: [AmlComputeNodeInformation](#amlcomputenodeinformation)[] (ReadOnly): The collection of returned AmlCompute nodes details.

## AmlComputeNodeInformation
### Properties
* **nodeId**: string (ReadOnly): ID of the compute node.
* **nodeState**: 'idle' | 'leaving' | 'preempted' | 'preparing' | 'running' | 'unusable' (ReadOnly): State of the compute node. Values are idle, running, preparing, unusable, leaving and preempted.
* **port**: int (ReadOnly): SSH port number of the node.
* **privateIpAddress**: string (ReadOnly): Private IP address of the compute node.
* **publicIpAddress**: string (ReadOnly): Public IP address of the compute node.
* **runId**: string (ReadOnly): ID of the Experiment running on the node, if any else null.

## NotebookAccessTokenResult
### Properties
* **accessToken**: string (ReadOnly)
* **expiresIn**: int (ReadOnly)
* **hostName**: string (ReadOnly)
* **notebookResourceId**: string (ReadOnly)
* **publicDns**: string (ReadOnly)
* **refreshToken**: string (ReadOnly)
* **scope**: string (ReadOnly)
* **tokenType**: string (ReadOnly)

## ListNotebookKeysResult
### Properties
* **primaryAccessKey**: string (ReadOnly)
* **secondaryAccessKey**: string (ReadOnly)

## DatastoreSecrets
* **Discriminator**: secretsType

### Base Properties
### AccountKeyDatastoreSecrets
#### Properties
* **key**: string (ReadOnly): Storage account key.
* **secretsType**: 'AccountKey' (Required): [Required] Credential type used to authentication with storage.

### CertificateDatastoreSecrets
#### Properties
* **certificate**: string (ReadOnly): Service principal certificate.
* **secretsType**: 'Certificate' (Required): [Required] Credential type used to authentication with storage.

### NoneDatastoreSecrets
#### Properties
* **secretsType**: 'None' (Required): [Required] Credential type used to authentication with storage.

### SasDatastoreSecrets
#### Properties
* **sasToken**: string (ReadOnly): Storage container SAS token.
* **secretsType**: 'Sas' (Required): [Required] Credential type used to authentication with storage.

### ServicePrincipalDatastoreSecrets
#### Properties
* **clientSecret**: string (ReadOnly): Service principal secret.
* **secretsType**: 'ServicePrincipal' (Required): [Required] Credential type used to authentication with storage.

### SqlAdminDatastoreSecrets
#### Properties
* **password**: string (ReadOnly): SQL database password.
* **secretsType**: 'SqlAdmin' (Required): [Required] Credential type used to authentication with storage.


## ListStorageAccountKeysResult
### Properties
* **userStorageKey**: string (ReadOnly)

