# Microsoft.AzureDataTransfer @ 2025-05-30-preview

## Resource Microsoft.AzureDataTransfer/connections@2025-05-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectionProperties](#connectionproperties): Properties of connection
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureDataTransfer/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureDataTransfer/connections/flows@2025-05-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Details of the resource plan.
* **properties**: [FlowProperties](#flowproperties): Properties of flow
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureDataTransfer/connections/flows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureDataTransfer/pipelines@2025-05-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineProperties](#pipelineproperties): The set of configurable properties for the Pipeline resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureDataTransfer/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureDataTransfer/pipelines/flowProfiles@2025-05-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FlowProfileProperties](#flowprofileproperties): The set of configuration properties that define the behavior and rules of the FlowProfile.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureDataTransfer/pipelines/flowProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Function listFlows (Microsoft.AzureDataTransfer/pipelines@2025-05-30-preview)
* **Resource**: Microsoft.AzureDataTransfer/pipelines
* **ApiVersion**: 2025-05-30-preview
* **Input**: [ConnectionIdList](#connectionidlist)
* **Output**: [ListFlowsByPipelineResult](#listflowsbypipelineresult)

## Function listPendingConnections (Microsoft.AzureDataTransfer/connections@2025-05-30-preview)
* **Resource**: Microsoft.AzureDataTransfer/connections
* **ApiVersion**: 2025-05-30-preview
* **Output**: [PendingConnectionListResult](#pendingconnectionlistresult)

## Function listPendingFlows (Microsoft.AzureDataTransfer/connections@2025-05-30-preview)
* **Resource**: Microsoft.AzureDataTransfer/connections
* **ApiVersion**: 2025-05-30-preview
* **Output**: [PendingFlowListResult](#pendingflowlistresult)

## Function listSchemas (Microsoft.AzureDataTransfer/pipelines@2025-05-30-preview)
* **Resource**: Microsoft.AzureDataTransfer/pipelines
* **ApiVersion**: 2025-05-30-preview
* **Input**: [Schema](#schema)
* **Output**: [SchemasListResult](#schemaslistresult)

## AntivirusRuleset
### Properties
* **avSolutions**: ('ClamAv' | 'Defender' | string)[]: Optional. The list of antiviruses to be used as a scanning solution for replicating data.

## ApiFlowOptions
### Properties
* **apiMode**: 'Endpoint' | 'SDK' | string: Remote Calling Mode in the Azure Data Transfer API Flow, which describes how the API Flow will be invoked
* **audienceOverride**: string: Optional field to override the audience of the remote endpoint. The property has reached end of life support starting version 2025-05-30-preview. Please create and use the authentication property instead.
* **authentication**: [Authentication](#authentication)[]: Optional and for advanced used only. A list of authentication methods to use when accessing the Azure Data Transfer API Flow. If not provided, the default S2S authentication using Entra (API Flow Managed Identity) and RBAC will be applied.
* **cname**: string: Unique CNAME to represent the Azure Data Transfer API Flow instance
* **identityTranslation**: 'ServiceIdentity' | 'UserIdentity' | string: Determines which identity to use for extracting the user token for Azure Data Transfer API Flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use the authentication property instead.
* **remoteCallingModeClientId**: string: Remote stub app registration Client ID. The property has reached end of life support starting version 2025-05-30-preview. Please create and use the authentication property instead.
* **remoteEndpoint**: string: Remote host to which communication needs to be made. The property has reached end of life support starting version 2025-05-30-preview. Please create and use the remoteEndpointSettings.endpoint property instead.
* **remoteEndpointSettings**: [RemoteEndpointSettings](#remoteendpointsettings): Defines the destination remote endpoint for the API calls.
* **senderClientId**: string: Sender's app user assigned Manage Identity client ID. The property has reached end of life support starting version 2025-05-30-preview. Please create and use the authentication property instead.

## ArchiveRuleset
### Properties
* **maximumCompressionRatioLimit**: int {minValue: 0}: Optional. Provides the multiplication value for an archive in total based on the initial object being validated. This value takes the root object size and multiplies it by this value to create a maximum. Once this maximum is exceeded, the archive is failed. Used to detect and block archives with suspiciously high compression (e.g., zip bombs).
* **maximumDepthLimit**: int {minValue: 0}: Optional. The maximum depth of nested archives that can be expanded. Limits how many layers of embedded archives will be processed. Archives exceeding the max limit will be denied for replication.
* **maximumExpansionSizeLimit**: int {minValue: 0}: Optional. The combined maximum size (in bytes) of all extracted files that an expanded archive is allowed to reach. Archives exceeding the max limit will be denied for replication.
* **minimumSizeForExpansion**: int {minValue: 0}: Optional. Default is 0. The minimum archive file size (in bytes) required to trigger expansion during replication. Any archive file size below the configured threshold will skip the rest of the configured rulesets for archives.

## Authentication
### Properties
* **applicationIds**: string[]: List of applicationIds allowed to authorize to this flow. This is used as an alternative to the RBAC authorization check.
* **audience**: string: Audience of the identity of the remote endpoint service. By default, remoteEndpointSettings.endpoint will be used if a value is not provided.
* **authority**: string: The full URL endpoint used to acquire tokens, typically combining the instance and tenant ID to target a specific authentication context.
* **clientIdOverride**: string: The Flow can use an Entra app identity that is provided by the Flow user to obtain the token to call the remote endpoint. This field specifies the user provided app's clientId.
* **identityTranslation**: 'ServiceIdentity' | 'UserIdentity' | string: Determines which identity to use for extracting the user token for Azure Data Transfer API Flow.
* **instance**: string: The identity provider's token service instance.
* **tenantId**: string: A unique identifier representing the tenant of the identity provider's token service.
* **type**: 'JWT' | 'None' | string: Type of authentication mechanism. JWT by default.

## ConnectionIdList
### Properties
* **value**: string[]: Connection ID to target

## ConnectionProperties
### Properties
* **apiHostname**: string: Hostname specific to API Flows
* **approver**: string (ReadOnly): Approver of this connection request
* **dateSubmitted**: string (ReadOnly): The timestamp that this connection request was submitted at
* **direction**: 'Receive' | 'Send' | string: Direction of data movement
* **flowProfileList**: [FlowProfileMetadata](#flowprofilemetadata)[]: Provides a list of FlowProfiles .
* **flowTypes**: ('API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string)[]: The flow types being requested for this connection. This FlowType property has reached end of life support starting version 2025-05-30-preview. Please create a FlowProfile resource instead.
* **forceDisabledStatus**: ('ConnectionForceDisabled' | 'FlowTypeForceDisabled' | 'PipelineForceDisabled' | string)[] (ReadOnly): Force disablement status of the current connection
* **justification**: string: Justification for the connection request
* **linkedConnectionId**: string (ReadOnly): Resource ID of the linked connection
* **linkStatus**: 'Linked' | 'Unlinked' | string (ReadOnly): Link status of the current connection
* **pin**: string: PIN to link requests together
* **pipeline**: string (Required): Pipeline to use to transfer data
* **policies**: string[]: The policies for this connection. The policies property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **primaryContact**: string: The primary contact for this connection request
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the connection
* **remoteSubscriptionId**: string: Subscription ID to link cloud subscriptions together
* **requirementId**: string: Requirement ID of the connection
* **schemas**: [Schema](#schema)[]: The schemas for this connection. The schemas property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **schemaUris**: string[]: The schema URIs for this connection. The schemaUris property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **secondaryContacts**: string[]: The secondary contacts for this connection request
* **status**: 'Accepted' | 'Approved' | 'InReview' | 'Rejected' | string (ReadOnly): Status of the connection
* **statusReason**: string (ReadOnly): Reason for status

## DataSizeRuleset
### Properties
* **maximum**: int {minValue: 0}: Optional. Specifies the maximum allowed size (in bytes) for files to be replicated. Any file size greater than maximum will be denied replication.
* **minimum**: int {minValue: 0}: Optional. Default is 0. Specifies the minimum required size (in bytes) for a file to be eligible for replication. Any file size less than minimum will be denied replication.

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

## FlowProfileMetadata
### Properties
* **description**: string (Required): A description of the FlowProfile and its rulesets. The description should describe the flowprofile's purpose and rulesets applied.
* **flowProfileId**: string (Required): A guid represented as a string for the FlowProfile resource, assigned by the system.
* **name**: string (Required): The name of the FlowProfile.
* **pipeline**: string (Required): The name of the parent Pipeline Azure resource associated with this FlowProfile.
* **replicationScenario**: 'API' | 'Complex' | 'Files' | 'Messaging' | 'SoftwareArtifacts' | 'Stream' | string (Required): The data replication scenario handled by this FlowProfile. Please note, that this value cannot be updated after creation. See the FlowProfilePatchProperties to see updateable properties.
* **status**: 'Enabled' | 'Obsolete' | string (Required): The operational status of the FlowProfile.

## FlowProfileProperties
### Properties
* **description**: string (Required): A user-defined description of the FlowProfile.
* **flowProfileId**: string (ReadOnly): A guid represented as a string for the FlowProfile resource, assigned by the system.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The current provisioning state of the FlowProfile.
* **replicationScenario**: 'API' | 'Complex' | 'Files' | 'Messaging' | 'SoftwareArtifacts' | 'Stream' | string (Required): The data replication scenario handled by this FlowProfile. Please not, that this value cannot be updated after creation.
* **rulesets**: [FlowProfileRulesets](#flowprofilerulesets): A set of configurable rulesets applied to this FlowProfile.
* **status**: 'Enabled' | 'Obsolete' | string (Required): The operational status of the FlowProfile.

## FlowProfileRulesets
### Properties
* **antivirus**: [AntivirusRuleset](#antivirusruleset): Antivirus scanning rules for replicated data.
* **archives**: [ArchiveRuleset](#archiveruleset): Rules for handling archive files during replication.
* **dataSize**: [DataSizeRuleset](#datasizeruleset): Rules that enforce minimum and maximum data size limits.
* **mimeFilters**: [MimeFilterRuleset](#mimefilterruleset): Rules for filtering files based on MIME types.
* **textMatching**: [TextMatchingRuleset](#textmatchingruleset): Rules for detecting and blocking specific text patterns.
* **xmlFilters**: [XmlFilterRuleset](#xmlfilterruleset): Rules for filtering XML content using XSD schemas.

## FlowProperties
### Properties
* **apiFlowOptions**: [ApiFlowOptions](#apiflowoptions): The API Flow configuration options for Azure Data Transfer API Flow type.
* **connection**: [SelectedResource](#selectedresource): The connection associated with this flow
* **consumerGroup**: string: Event Hub Consumer Group
* **customerManagedKeyVaultUri**: string: The URI to the customer managed key for this flow
* **dataType**: 'Blob' | 'Table' | string: Type of data to transfer via the flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **destinationEndpointPorts**: int[]: The destination endpoint ports of the stream
* **destinationEndpoints**: string[]: The destination endpoints of the stream
* **eventHubId**: string: Event Hub ID
* **flowDataType**: 'ApiEndpoint' | 'ApiSDK' | 'Blob' | 'EventHub' | 'ServiceBus' | 'Table' | 'Video' | string: The Flow's data class.
* **flowId**: string (ReadOnly): Dataflow GUID associated with this flow
* **flowProfile**: [FlowProfileMetadata](#flowprofilemetadata): Type of FlowProfile to use for transfer via the flow.
* **flowType**: 'API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string: The flow type for this flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **forceDisabledStatus**: ('ConnectionForceDisabled' | 'FlowTypeForceDisabled' | 'PipelineForceDisabled' | string)[] (ReadOnly): Force disablement status of the current flow
* **keyVaultUri**: string: URI to a Key Vault Secret containing a SAS token.
* **linkedFlowId**: string (ReadOnly): Resource ID of the linked flow
* **linkStatus**: 'Linked' | 'Unlinked' | string (ReadOnly): Link status of the current flow
* **messagingOptions**: [MessagingOptions](#messagingoptions): The messaging options for this flow
* **passphrase**: string: The passphrase used for SRT streams
* **policies**: string[]: The policies for this flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the flow
* **schema**: [Schema](#schema): The selected schema for this flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
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
* **performancePriority**: 'Disabled' | 'Enabled' | string: Field indicating whether to enable guaranteed delivery on the flow or not. The default disabled option chooses speed over consistency. When enabled, messages are delivered with minimal delay, but delivery is not guaranteed under all conditions

## MimeFilterRuleset
### Properties
* **filters**: [MimeTypeFilter](#mimetypefilter)[]: Defines the Media types (f.k.a MIME types) and associated file extensions to be filtered. For more detail, please refer to the MimeTypeFiler model.
* **type**: 'Allow' | 'Deny' | string: Specifies whether the filter is an allow list or deny list. For more detail, please refer to the FilterType model.

## MimeTypeFilter
### Properties
* **extensions**: string[]: A list of file extensions associated with the specified Media type (e.g., .json, .png). To specify files with no extension, use an empty string ""."
* **media**: string {pattern: "^[a-z]+/[a-zA-Z0-9+\-\+.]+$"}: The Media Types (f.k.a MIME types), following IANA standards (e.g., application/json, image/png). For a more detailed list of allowed media types please refer to the Tika documentation: https://github.com/apache/tika/blob/main/tika-core/src/main/resources/org/apache/tika/mime/tika-mimetypes.xml

## OperationStatusProperties
### Properties
* **id**: string (ReadOnly): Operation status ID of the last patch request for this connection.
* **message**: string (ReadOnly): Message for the operation for the last patch request for this connection.
* **status**: 'Failed' | 'Succeeded' | string (ReadOnly): Operation status for the last patch request for this connection.

## PendingConnection
### Properties
* **apiHostname**: string: Hostname specific to API Flows
* **approver**: string (ReadOnly): Approver of this connection request
* **dateSubmitted**: string (ReadOnly): The timestamp that this connection request was submitted at
* **direction**: 'Receive' | 'Send' | string: Direction of data movement
* **flowProfileList**: [FlowProfileMetadata](#flowprofilemetadata)[]: Provides a list of FlowProfiles .
* **flowTypes**: ('API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string)[]: The flow types being requested for this connection. This FlowType property has reached end of life support starting version 2025-05-30-preview. Please create a FlowProfile resource instead.
* **forceDisabledStatus**: ('ConnectionForceDisabled' | 'FlowTypeForceDisabled' | 'PipelineForceDisabled' | string)[] (ReadOnly): Force disablement status of the current connection
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **justification**: string: Justification for the connection request
* **linkedConnectionId**: string (ReadOnly): Resource ID of the linked connection
* **linkStatus**: 'Linked' | 'Unlinked' | string (ReadOnly): Link status of the current connection
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **pin**: string: PIN to link requests together
* **pipeline**: string (Required): Pipeline to use to transfer data
* **policies**: string[]: The policies for this connection. The policies property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **primaryContact**: string: The primary contact for this connection request
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the connection
* **remoteSubscriptionId**: string: Subscription ID to link cloud subscriptions together
* **requirementId**: string: Requirement ID of the connection
* **schemas**: [Schema](#schema)[]: The schemas for this connection. The schemas property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **schemaUris**: string[]: The schema URIs for this connection. The schemaUris property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
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
* **dataType**: 'Blob' | 'Table' | string: Type of data to transfer via the flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **destinationEndpointPorts**: int[]: The destination endpoint ports of the stream
* **destinationEndpoints**: string[]: The destination endpoints of the stream
* **eventHubId**: string: Event Hub ID
* **flowDataType**: 'ApiEndpoint' | 'ApiSDK' | 'Blob' | 'EventHub' | 'ServiceBus' | 'Table' | 'Video' | string: The Flow's data class.
* **flowId**: string (ReadOnly): Dataflow GUID associated with this flow
* **flowProfile**: [FlowProfileMetadata](#flowprofilemetadata): Type of FlowProfile to use for transfer via the flow.
* **flowType**: 'API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string: The flow type for this flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **forceDisabledStatus**: ('ConnectionForceDisabled' | 'FlowTypeForceDisabled' | 'PipelineForceDisabled' | string)[] (ReadOnly): Force disablement status of the current flow
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **keyVaultUri**: string: URI to a Key Vault Secret containing a SAS token.
* **linkedFlowId**: string (ReadOnly): Resource ID of the linked flow
* **linkStatus**: 'Linked' | 'Unlinked' | string (ReadOnly): Link status of the current flow
* **location**: string (Required): The geo-location where the resource lives
* **messagingOptions**: [MessagingOptions](#messagingoptions): The messaging options for this flow
* **name**: string (ReadOnly): The name of the resource
* **passphrase**: string: The passphrase used for SRT streams
* **policies**: string[]: The policies for this flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the flow
* **schema**: [Schema](#schema): The selected schema for this flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
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
* **disabledDataClass**: ('ApiEndpoint' | 'ApiSDK' | 'Blob' | 'EventHub' | 'ServiceBus' | 'Table' | 'Video' | string)[]: The DataClasses that are disabled for this pipeline
* **disabledFlowTypes**: ('API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string)[]: The flow types that are disabled for this pipeline
* **displayName**: string: Display name of this pipeline
* **flowTypes**: ('API' | 'BasicFiles' | 'Complex' | 'Data' | 'DevSecOps' | 'DiskImages' | 'Messaging' | 'MicrosoftInternal' | 'Mission' | 'MissionOpaqueXML' | 'Opaque' | 'Standard' | 'StreamingVideo' | 'Unknown' | string)[]: The flow type for this flow. The flowTypes property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
* **policies**: string[]: The policies for this pipeline. The policies property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
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

## RemoteEndpointSettings
### Properties
* **authentication**: [Authentication](#authentication)[]: Optional and for advanced used only. A list of authentication methods to use when accessing the remote endpoint. If not provided, the default S2S authentication using Entra (API Flow Managed Identity) and RBAC will be applied.
* **endpoint**: string (Required): The remote endpoint uri all API calls.

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

## TextMatch
### Properties
* **caseSensitivity**: 'Insensitive' | 'Sensitive' | string (Required): Specifies the text matching conditions based on casing. For more detail please refer to the Casing model.
* **matchType**: 'Complete' | 'Partial' | string (Required): Specifies the text matching condition for text comparison. For more detail please refer to the MatchType model.
* **text**: string (Required): The word or phrase to match against replicated content. A phrase with spaces will be considered a single substring.

## TextMatchingRuleset
### Properties
* **deny**: [TextMatch](#textmatch)[]: A list of text patterns to block, each with matching rules and case sensitivity options.

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

## XmlFilterRuleset
### Properties
* **defaultNamespace**: string: The default XML namespace used for schema validation.
* **reference**: 'Inline' | string: Defines the method for referencing the xml schema.
* **schema**: string: The inline XSD schema to be used for validation.

