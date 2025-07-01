# Microsoft.AzureDataTransfer @ 2025-04-11-preview

## Resource Microsoft.AzureDataTransfer/connections@2025-04-11-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-11-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionProperties](#connectionproperties): Properties of connection
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureDataTransfer/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureDataTransfer/connections/flows@2025-04-11-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-11-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Details of the resource plan.
* **properties**: [FlowProperties](#flowproperties): Properties of flow
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureDataTransfer/connections/flows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureDataTransfer/pipelines@2025-04-11-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-11-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineProperties](#pipelineproperties): Properties of pipeline
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureDataTransfer/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## Function listFlows (Microsoft.AzureDataTransfer/pipelines@2025-04-11-preview)
* **Resource**: Microsoft.AzureDataTransfer/pipelines
* **ApiVersion**: 2025-04-11-preview
* **Input**: [ConnectionIdList](#connectionidlist)
* **Output**: [ListFlowsByPipelineResult](#listflowsbypipelineresult)

## Function listPendingConnections (Microsoft.AzureDataTransfer/connections@2025-04-11-preview)
* **Resource**: Microsoft.AzureDataTransfer/connections
* **ApiVersion**: 2025-04-11-preview
* **Output**: [PendingConnectionListResult](#pendingconnectionlistresult)

## Function listPendingFlows (Microsoft.AzureDataTransfer/connections@2025-04-11-preview)
* **Resource**: Microsoft.AzureDataTransfer/connections
* **ApiVersion**: 2025-04-11-preview
* **Output**: [PendingFlowListResult](#pendingflowlistresult)

## Function listSchemas (Microsoft.AzureDataTransfer/pipelines@2025-04-11-preview)
* **Resource**: Microsoft.AzureDataTransfer/pipelines
* **ApiVersion**: 2025-04-11-preview
* **Input**: [Schema](#schema)
* **Output**: [SchemasListResult](#schemaslistresult)

## ApiFlowOptions
### Properties
* **apiMode**: 'Endpoint' | 'SDK' | string: Remote Calling Mode in the Azure Data Transfer API Flow, which describes how the API Flow will be invoked
* **audienceOverride**: string: Optional field to override the audience of the remote endpoint
* **cname**: string: Unique CNAME to represent the Azure Data Transfer API Flow instance
* **identityTranslation**: 'ServiceIdentity' | 'UserIdentity' | string: Flag for if Azure Data Transfer API Flow should extract the user token
* **remoteCallingModeClientId**: string: Remote stub app registration Client ID
* **remoteEndpoint**: string: Remote host to which communication needs to be made
* **senderClientId**: string: Sender's app user assigned Manage Identity client ID

## ConnectionIdList
### Properties
* **value**: string[]: Connection ID to target

## ConnectionProperties
### Properties
* **approver**: string (ReadOnly): Approver of this connection request
* **dateSubmitted**: string (ReadOnly): The timestamp that this connection request was submitted at
* **direction**: 'Receive' | 'Send' | string: Direction of data movement
* **flowTypes**: ('API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string)[]: The flow types being requested for this connection
* **forceDisabledStatus**: ('ConnectionForceDisabled' | 'FlowTypeForceDisabled' | string)[] (ReadOnly): Force disablement status of the current connection
* **justification**: string: Justification for the connection request
* **linkedConnectionId**: string (ReadOnly): Resource ID of the linked connection
* **linkStatus**: 'Linked' | 'Unlinked' | string (ReadOnly): Link status of the current connection
* **pin**: string: PIN to link requests together
* **pipeline**: string (Required): Pipeline to use to transfer data
* **policies**: string[]: The policies for this connection
* **primaryContact**: string: The primary contact for this connection request
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the connection
* **remoteSubscriptionId**: string: Subscription ID to link cloud subscriptions together
* **requirementId**: string: Requirement ID of the connection
* **schemas**: [Schema](#schema)[]: The schemas for this connection
* **schemaUris**: string[]: The schema URIs for this connection
* **secondaryContacts**: string[]: The secondary contacts for this connection request
* **status**: 'Accepted' | 'Approved' | 'InReview' | 'Rejected' | string (ReadOnly): Status of the connection
* **statusReason**: string (ReadOnly): Reason for status

## Flow
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **plan**: [Plan](#plan): Details of the resource plan.
* **properties**: [FlowProperties](#flowproperties): Properties of flow
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## FlowProperties
### Properties
* **apiFlowOptions**: [ApiFlowOptions](#apiflowoptions): The API Flow configuration options for Azure Data Transfer API Flow type.
* **connection**: [SelectedResource](#selectedresource): The connection associated with this flow
* **consumerGroup**: string: Event Hub Consumer Group
* **customerManagedKeyVaultUri**: string: The URI to the customer managed key for this flow
* **dataType**: 'Blob' | 'Table' | string: Type of data to transfer via the flow.
* **destinationEndpointPorts**: int[]: The destination endpoint ports of the stream
* **destinationEndpoints**: string[]: The destination endpoints of the stream
* **eventHubId**: string: Event Hub ID
* **flowId**: string (ReadOnly): Dataflow GUID associated with this flow
* **flowType**: 'API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string: The flow type for this flow
* **forceDisabledStatus**: ('ConnectionForceDisabled' | 'FlowTypeForceDisabled' | string)[] (ReadOnly): Force disablement status of the current flow
* **keyVaultUri**: string: URI to a Key Vault Secret containing a SAS token.
* **linkedFlowId**: string (ReadOnly): Resource ID of the linked flow
* **linkStatus**: 'Linked' | 'Unlinked' | string (ReadOnly): Link status of the current flow
* **messagingOptions**: [MessagingOptions](#messagingoptions): The messaging options for this flow
* **passphrase**: string: The passphrase used for SRT streams
* **policies**: string[]: The policies for this flow
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the flow
* **schema**: [Schema](#schema): The selected schema for this flow
* **serviceBusQueueId**: string: Service Bus Queue ID
* **sourceAddresses**: [StreamSourceAddresses](#streamsourceaddresses): The source IP address and CIDR ranges of the stream
* **status**: 'Disabled' | 'Enabled' | string: Status of the current flow
* **storageAccountId**: string: Storage Account ID
* **storageAccountName**: string: Storage Account
* **storageContainerName**: string: Storage Container Name
* **storageTableName**: string: Storage Table Name
* **streamId**: string: The flow stream identifier
* **streamLatency**: int: The latency of the stream in milliseconds
* **streamProtocol**: 'RTP' | 'SRT' | 'UDP' | string: The protocol of the stream

## InternalMetadataProperties
### Properties
* **operationStatus**: [OperationStatusProperties](#operationstatusproperties) (ReadOnly): Operation status associated with the last patch request
* **statusSetBy**: string (ReadOnly): User that last set the approved status for this connection
### Additional Properties
* **Additional Properties Type**: any

## ListFlowsByPipelineConnection
### Properties
* **flows**: [Flow](#flow)[]: List of flows associated with the connection.
* **id**: string: ID of the connection.

## ListFlowsByPipelineResult
### Properties
* **value**: [ListFlowsByPipelineConnection](#listflowsbypipelineconnection)[]: List flows by pipeline result by connection

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MessagingOptions
### Properties
* **billingTier**: 'BlobTransport' | 'Premium' | 'Standard' | string: Billing tier for this messaging flow

## OperationStatusProperties
### Properties
* **id**: string (ReadOnly): Operation status ID of the last patch request for this connection.
* **message**: string (ReadOnly): Message for the operation for the last patch request for this connection.
* **status**: 'Failed' | 'Succeeded' | string (ReadOnly): Operation status for the last patch request for this connection.

## PendingConnection
### Properties
* **approver**: string (ReadOnly): Approver of this connection request
* **dateSubmitted**: string (ReadOnly): The timestamp that this connection request was submitted at
* **direction**: 'Receive' | 'Send' | string: Direction of data movement
* **flowTypes**: ('API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string)[]: The flow types being requested for this connection
* **forceDisabledStatus**: ('ConnectionForceDisabled' | 'FlowTypeForceDisabled' | string)[] (ReadOnly): Force disablement status of the current connection
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **justification**: string: Justification for the connection request
* **linkedConnectionId**: string (ReadOnly): Resource ID of the linked connection
* **linkStatus**: 'Linked' | 'Unlinked' | string (ReadOnly): Link status of the current connection
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **pin**: string: PIN to link requests together
* **pipeline**: string (Required): Pipeline to use to transfer data
* **policies**: string[]: The policies for this connection
* **primaryContact**: string: The primary contact for this connection request
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the connection
* **remoteSubscriptionId**: string: Subscription ID to link cloud subscriptions together
* **requirementId**: string: Requirement ID of the connection
* **schemas**: [Schema](#schema)[]: The schemas for this connection
* **schemaUris**: string[]: The schema URIs for this connection
* **secondaryContacts**: string[]: The secondary contacts for this connection request
* **status**: 'Accepted' | 'Approved' | 'InReview' | 'Rejected' | string (ReadOnly): Status of the connection
* **statusReason**: string (ReadOnly): Reason for status
* **subscriptionId**: string (ReadOnly): Subscription ID of the pending connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [PendingConnectionTags](#pendingconnectiontags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PendingConnectionListResult
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [PendingConnection](#pendingconnection)[] (Required): The items on this page

## PendingConnectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PendingFlow
### Properties
* **apiFlowOptions**: [ApiFlowOptions](#apiflowoptions): The API Flow configuration options for Azure Data Transfer API Flow type.
* **connection**: [SelectedResource](#selectedresource): The connection associated with this flow
* **connectionId**: string (ReadOnly): Connection ID of the pending flow.
* **consumerGroup**: string: Event Hub Consumer Group
* **customerManagedKeyVaultUri**: string: The URI to the customer managed key for this flow
* **dataType**: 'Blob' | 'Table' | string: Type of data to transfer via the flow.
* **destinationEndpointPorts**: int[]: The destination endpoint ports of the stream
* **destinationEndpoints**: string[]: The destination endpoints of the stream
* **eventHubId**: string: Event Hub ID
* **flowId**: string (ReadOnly): Dataflow GUID associated with this flow
* **flowType**: 'API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string: The flow type for this flow
* **forceDisabledStatus**: ('ConnectionForceDisabled' | 'FlowTypeForceDisabled' | string)[] (ReadOnly): Force disablement status of the current flow
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **keyVaultUri**: string: URI to a Key Vault Secret containing a SAS token.
* **linkedFlowId**: string (ReadOnly): Resource ID of the linked flow
* **linkStatus**: 'Linked' | 'Unlinked' | string (ReadOnly): Link status of the current flow
* **location**: string (Required): The geo-location where the resource lives
* **messagingOptions**: [MessagingOptions](#messagingoptions): The messaging options for this flow
* **name**: string (ReadOnly): The name of the resource
* **passphrase**: string: The passphrase used for SRT streams
* **policies**: string[]: The policies for this flow
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the flow
* **schema**: [Schema](#schema): The selected schema for this flow
* **serviceBusQueueId**: string: Service Bus Queue ID
* **sourceAddresses**: [StreamSourceAddresses](#streamsourceaddresses): The source IP address and CIDR ranges of the stream
* **status**: 'Disabled' | 'Enabled' | string: Status of the current flow
* **storageAccountId**: string: Storage Account ID
* **storageAccountName**: string: Storage Account
* **storageContainerName**: string: Storage Container Name
* **storageTableName**: string: Storage Table Name
* **streamId**: string: The flow stream identifier
* **streamLatency**: int: The latency of the stream in milliseconds
* **streamProtocol**: 'RTP' | 'SRT' | 'UDP' | string: The protocol of the stream
* **subscriptionId**: string (ReadOnly): Subscription ID of the pending flow.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [PendingFlowTags](#pendingflowtags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PendingFlowListResult
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [PendingFlow](#pendingflow)[] (Required): The items on this page

## PendingFlowTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PipelineConnectionProperties
### Properties
* **internalMetadata**: [InternalMetadataProperties](#internalmetadataproperties) (ReadOnly): Internal metadata of the connection inside pipeline.
### Additional Properties
* **Additional Properties Type**: any

## PipelineProperties
### Properties
* **connections**: [ReadPipelineConnection](#readpipelineconnection)[] (ReadOnly): Connections associated with pipeline
* **disabledFlowTypes**: ('API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string)[]: The flow types that are disabled for this pipeline
* **displayName**: string: Display name of this pipeline
* **flowTypes**: ('API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string)[]: The flow types allowed for this pipeline
* **policies**: string[]: The policies for this pipeline
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the pipeline
* **quarantineDownloadStorageAccount**: string: Quarantine Download Storage Account
* **quarantineDownloadStorageContainer**: string: Quarantine Download Storage Container
* **remoteCloud**: string (Required): Remote cloud of the data to be transferred or received
* **status**: 'Disabled' | 'Enabled' | string: Status of the current pipeline
* **subscribers**: [Subscriber](#subscriber)[]: Subscribers of this resource

## Plan
### Properties
* **name**: string (Required): A user defined name of the 3rd Party Artifact that is being procured.
* **product**: string (Required): The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
* **promotionCode**: string: A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
* **publisher**: string (Required): The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
* **version**: string: The version of the desired product/artifact.

## ReadPipelineConnection
### Properties
* **etag**: string: Connection etag inside pipeline
* **id**: string (Required): Connection id inside pipeline
* **location**: string: Connection location inside pipeline
* **name**: string: Connection name inside pipeline
* **properties**: [PipelineConnectionProperties](#pipelineconnectionproperties): Connection properties inside pipeline
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string: Connection type inside pipeline
### Additional Properties
* **Additional Properties Type**: any

## Schema
### Properties
* **connectionId**: string: Connection ID associated with this schema
* **content**: string: Content of the schema
* **direction**: 'Receive' | 'Send' | string: The direction of the schema.
* **id**: string: ID associated with this schema
* **name**: string: Name of the schema
* **schemaType**: 'Xsd' | 'Zip' | string: The Schema Type
* **schemaUri**: string: Uri containing SAS token for the zipped schema
* **status**: 'Approved' | 'New' | string: Status of the schema

## SchemasListResult
### Properties
* **value**: [Schema](#schema)[]: Schemas array.

## SelectedResource
### Properties
* **id**: string (Required): Id of the connection
* **location**: string: Location of the connection
* **name**: string: Name of the connection
* **subscriptionName**: string: Name of the subscription with the connection

## StreamSourceAddresses
### Properties
* **sourceAddresses**: string[]: A source IP address or CIDR range

## Subscriber
### Properties
* **email**: string: Email of the subscriber
* **notifications**: int: Number specifying what notifications to receive

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

