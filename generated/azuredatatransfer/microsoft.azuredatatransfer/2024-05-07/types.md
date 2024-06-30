# Microsoft.AzureDataTransfer @ 2024-05-07

## Resource Microsoft.AzureDataTransfer/connections@2024-05-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionProperties](#connectionproperties): Properties of connection
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureDataTransfer/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureDataTransfer/connections/flows@2024-05-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed identity of the flow resource, if configured.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Plan for the resource.
* **properties**: [FlowProperties](#flowproperties): Properties of flow
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureDataTransfer/connections/flows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureDataTransfer/pipelines@2024-05-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineProperties](#pipelineproperties): Properties of pipeline
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureDataTransfer/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## Function listPendingConnections (Microsoft.AzureDataTransfer/connections@2024-05-07)
* **Resource**: Microsoft.AzureDataTransfer/connections
* **ApiVersion**: 2024-05-07
* **Output**: [PendingConnectionsListResult](#pendingconnectionslistresult)

## Function listPendingFlows (Microsoft.AzureDataTransfer/connections@2024-05-07)
* **Resource**: Microsoft.AzureDataTransfer/connections
* **ApiVersion**: 2024-05-07
* **Output**: [PendingFlowsListResult](#pendingflowslistresult)

## Function listSchemas (Microsoft.AzureDataTransfer/pipelines@2024-05-07)
* **Resource**: Microsoft.AzureDataTransfer/pipelines
* **ApiVersion**: 2024-05-07
* **Input**: [Schema](#schema)
* **Output**: [SchemasListResult](#schemaslistresult)

## ConnectionProperties
### Properties
* **approver**: string (ReadOnly): Approver of this connection request
* **dateSubmitted**: string (ReadOnly): The timestamp that this connection request was submitted at
* **direction**: 'Receive' | 'Send' | string: Direction of data movement
* **flowTypes**: ('BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string)[]: The flow types being requested for this connection
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
* **secondaryContacts**: string[]: The secondary contacts for this connection request
* **status**: 'Accepted' | 'Approved' | 'InReview' | 'Rejected' | string (ReadOnly): Status of the connection
* **statusReason**: string (ReadOnly): Reason for status

## FlowProperties
### Properties
* **connection**: [SelectedResource](#selectedresource): The connection associated with this flow
* **dataType**: 'Blob' | 'Table' | string: Transfer Storage Blobs or Tables
* **flowId**: string (ReadOnly): Dataflow GUID associated with this flow
* **flowType**: 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string: The flow type for this flow
* **keyVaultUri**: string: AME, PME, or TORUS only! AKV Chain Containing SAS Token
* **linkedFlowId**: string (ReadOnly): Resource ID of the linked flow
* **linkStatus**: 'Linked' | 'Unlinked' | string (ReadOnly): Link status of the current flow
* **messagingOptions**: [MessagingOptions](#messagingoptions): The messaging options for this flow
* **policies**: string[]: The policies for this flow
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the flow
* **schema**: [Schema](#schema): The selected schema for this flow
* **serviceBusQueueId**: string: Service Bus Queue ID
* **status**: 'Disabled' | 'Enabled' | string: Status of the current flow
* **storageAccountId**: string: Storage Account ID
* **storageAccountName**: string: Storage Account
* **storageContainerName**: string: Storage Container Name

## InternalMetadataProperties
### Properties
* **operationStatus**: [OperationStatusProperties](#operationstatusproperties): Operation status associated with the last patch request
* **statusSetBy**: string (ReadOnly): User that last set the approved status for this connection
### Additional Properties
* **Additional Properties Type**: any

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
* **flowTypes**: ('BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string)[]: The flow types being requested for this connection
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
* **secondaryContacts**: string[]: The secondary contacts for this connection request
* **status**: 'Accepted' | 'Approved' | 'InReview' | 'Rejected' | string (ReadOnly): Status of the connection
* **statusReason**: string (ReadOnly): Reason for status
* **subscriptionId**: string (ReadOnly): Subscription ID of the pending connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PendingConnectionsListResult
### Properties
* **nextLink**: string: Link to next results
* **value**: [PendingConnection](#pendingconnection)[]: Connections array.

## PendingFlow
### Properties
* **connection**: [SelectedResource](#selectedresource): The connection associated with this flow
* **connectionId**: string (ReadOnly): Connection ID of the pending flow.
* **dataType**: 'Blob' | 'Table' | string: Transfer Storage Blobs or Tables
* **flowId**: string (ReadOnly): Dataflow GUID associated with this flow
* **flowType**: 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string: The flow type for this flow
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **keyVaultUri**: string: AME, PME, or TORUS only! AKV Chain Containing SAS Token
* **linkedFlowId**: string (ReadOnly): Resource ID of the linked flow
* **linkStatus**: 'Linked' | 'Unlinked' | string (ReadOnly): Link status of the current flow
* **location**: string (Required): The geo-location where the resource lives
* **messagingOptions**: [MessagingOptions](#messagingoptions): The messaging options for this flow
* **name**: string (ReadOnly): The name of the resource
* **policies**: string[]: The policies for this flow
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the flow
* **schema**: [Schema](#schema): The selected schema for this flow
* **serviceBusQueueId**: string: Service Bus Queue ID
* **status**: 'Disabled' | 'Enabled' | string: Status of the current flow
* **storageAccountId**: string: Storage Account ID
* **storageAccountName**: string: Storage Account
* **storageContainerName**: string: Storage Container Name
* **subscriptionId**: string (ReadOnly): Subscription ID of the pending flow.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PendingFlowsListResult
### Properties
* **nextLink**: string: Link to next results
* **value**: [PendingFlow](#pendingflow)[]: flows array.

## PipelineConnection
### Properties
* **etag**: string (ReadOnly): Connection etag inside pipeline
* **id**: string (Required): Connection id inside pipeline
* **location**: string (ReadOnly): Connection location inside pipeline
* **name**: string (ReadOnly): Connection name inside pipeline
* **properties**: [PipelineConnectionProperties](#pipelineconnectionproperties): Connection properties inside pipeline
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): Connection type inside pipeline
### Additional Properties
* **Additional Properties Type**: any

## PipelineConnectionProperties
### Properties
* **internalMetadata**: [InternalMetadataProperties](#internalmetadataproperties): Internal metadata of the connection inside pipeline.
### Additional Properties
* **Additional Properties Type**: any

## PipelineProperties
### Properties
* **connections**: [PipelineConnection](#pipelineconnection)[] (ReadOnly): Connections associated with pipeline
* **displayName**: string: Display name of this pipeline
* **flowTypes**: ('BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string)[]: The flow types allowed for this pipeline
* **policies**: string[]: The policies for this pipeline
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the pipeline
* **remoteCloud**: string (Required): Remote cloud of the data to be transferred or received
* **subscribers**: [Subscriber](#subscriber)[]: Subscribers of this resource

## Plan
### Properties
* **name**: string (Required): A user defined name of the 3rd Party Artifact that is being procured.
* **product**: string (Required): The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
* **promotionCode**: string: A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
* **publisher**: string (Required): The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
* **version**: string: The version of the desired product/artifact.

## Schema
### Properties
* **connectionId**: string: Connection ID associated with this schema
* **content**: string: Content of the schema
* **direction**: 'Receive' | 'Send' | string: The direction of the schema.
* **id**: string: ID associated with this schema
* **name**: string: Name of the schema
* **status**: 'Approved' | 'New' | string: Status of the schema

## Schema
### Properties
* **connectionId**: string: Connection ID associated with this schema
* **content**: string: Content of the schema
* **direction**: 'Receive' | 'Send' | string: The direction of the schema.
* **id**: string: ID associated with this schema
* **name**: string: Name of the schema
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

