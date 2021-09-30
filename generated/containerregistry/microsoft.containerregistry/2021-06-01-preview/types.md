# Microsoft.ContainerRegistry @ 2021-06-01-preview

## Resource Microsoft.ContainerRegistry/registries@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Managed identity for the resource.
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegistryProperties](#registryproperties): The properties of a container registry.
* **sku**: [Sku](#sku) (Required): The SKU of a container registry.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/connectedRegistries@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectedRegistryProperties](#connectedregistryproperties): The properties of a connected registry.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/connectedRegistries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/exportPipelines@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Managed identity for the resource.
* **location**: string: The location of the export pipeline.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExportPipelineProperties](#exportpipelineproperties): The properties of an export pipeline.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/exportPipelines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/importPipelines@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Managed identity for the resource.
* **location**: string: The location of the import pipeline.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImportPipelineProperties](#importpipelineproperties): The properties of an import pipeline.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/importPipelines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/pipelineRuns@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineRunProperties](#pipelinerunproperties): The properties of a pipeline run.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/pipelineRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/privateEndpointConnections@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The properties of a private endpoint connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/replications@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReplicationProperties](#replicationproperties): The properties of a replication.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/scopeMaps@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScopeMapProperties](#scopemapproperties): The properties of a scope map.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/scopeMaps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/tokens@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TokenProperties](#tokenproperties): The properties of a token.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/tokens' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/webhooks@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the webhook. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebhookPropertiesCreateParameters](#webhookpropertiescreateparameters): The parameters for creating the properties of a webhook.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [WebhookCreateParametersTags](#webhookcreateparameterstags): The tags for the webhook.
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant): The resource type

## IdentityProperties
### Properties
* **principalId**: string: The principal ID of resource identity.
* **tenantId**: string: The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The identity type.
* **userAssignedIdentities**: [IdentityPropertiesUserAssignedIdentities](#identitypropertiesuserassignedidentities): The list of user identities associated with the resource. The user identity 
dictionary key references will be ARM resource ids in the form: 
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
    providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityPropertiesUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## UserIdentityProperties
### Properties
* **clientId**: string: The client id of user assigned identity.
* **principalId**: string: The principal id of user assigned identity.

## RegistryProperties
### Properties
* **adminUserEnabled**: bool: The value that indicates whether the admin user is enabled.
* **anonymousPullEnabled**: bool: Enables registry-wide pull from unauthenticated clients.
* **creationDate**: string (ReadOnly): The creation date of the container registry in ISO8601 format.
* **dataEndpointEnabled**: bool: Enable a single data endpoint per region for serving data.
* **dataEndpointHostNames**: string[] (ReadOnly): List of host names that will serve data when dataEndpointEnabled is true.
* **encryption**: [EncryptionProperty](#encryptionproperty)
* **loginServer**: string (ReadOnly): The URL that can be used to log into the container registry.
* **networkRuleBypassOptions**: 'AzureServices' | 'None': Whether to allow trusted Azure services to access a network restricted registry.
* **networkRuleSet**: [NetworkRuleSet](#networkruleset): The network rule set for a container registry.
* **policies**: [Policies](#policies): The policies for a container registry.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections for a container registry.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **publicNetworkAccess**: 'Disabled' | 'Enabled': Whether or not public network access is allowed for the container registry.
* **status**: [Status](#status) (ReadOnly): The status of an Azure resource at the time the operation was called.
* **zoneRedundancy**: 'Disabled' | 'Enabled': Whether or not zone redundancy is enabled for this container registry

## EncryptionProperty
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)
* **status**: 'disabled' | 'enabled': Indicates whether or not the encryption is enabled for container registry.

## KeyVaultProperties
### Properties
* **identity**: string: The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string: Key vault uri to access the encryption key.
* **keyRotationEnabled**: bool (ReadOnly): Auto key rotation status for a CMK enabled registry.
* **lastKeyRotationTimestamp**: string (ReadOnly): Timestamp of the last successful key rotation.
* **versionedKeyIdentifier**: string (ReadOnly): The fully qualified key identifier that includes the version of the key that is actually used for encryption.

## NetworkRuleSet
### Properties
* **defaultAction**: 'Allow' | 'Deny' (Required): The default action of allow or deny when no other rules match.
* **ipRules**: [IPRule](#iprule)[]: The IP ACL rules.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: The virtual network rules.

## IPRule
### Properties
* **action**: 'Allow': The action of virtual network rule.
* **value**: string (Required): Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.

## VirtualNetworkRule
### Properties
* **action**: 'Allow': The action of virtual network rule.
* **id**: string (Required): Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.

## Policies
### Properties
* **exportPolicy**: [ExportPolicy](#exportpolicy): The export policy for a container registry.
* **quarantinePolicy**: [QuarantinePolicy](#quarantinepolicy): The quarantine policy for a container registry.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): The retention policy for a container registry.
* **trustPolicy**: [TrustPolicy](#trustpolicy): The content trust policy for a container registry.

## ExportPolicy
### Properties
* **status**: 'disabled' | 'enabled': The value that indicates whether the policy is enabled or not.

## QuarantinePolicy
### Properties
* **status**: 'disabled' | 'enabled': The value that indicates whether the policy is enabled or not.

## RetentionPolicy
### Properties
* **days**: int: The number of days to retain an untagged manifest after which it gets purged.
* **lastUpdatedTime**: string (ReadOnly): The timestamp when the policy was last updated.
* **status**: 'disabled' | 'enabled': The value that indicates whether the policy is enabled or not.

## TrustPolicy
### Properties
* **status**: 'disabled' | 'enabled': The value that indicates whether the policy is enabled or not.
* **type**: 'Notary': The type of trust policy.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): The resource ID.
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The properties of a private endpoint connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): The type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): The state of a private link service connection.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.

## PrivateEndpoint
### Properties
* **id**: string: This is private endpoint resource created with Microsoft.Network resource provider.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: 'None' | 'Recreate': A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The description for connection status. For example if connection is rejected it can indicate reason for rejection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected': The private link service connection status.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource modification (UTC).
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Status
### Properties
* **displayStatus**: string (ReadOnly): The short label for the status.
* **message**: string (ReadOnly): The detailed message for the status, including alerts and error messages.
* **timestamp**: string (ReadOnly): The timestamp when the status was changed to the current value.

## Sku
### Properties
* **name**: 'Basic' | 'Classic' | 'Premium' | 'Standard' (Required): The SKU name of the container registry. Required for registry creation.
* **tier**: 'Basic' | 'Classic' | 'Premium' | 'Standard' (ReadOnly): The SKU tier based on the SKU name.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectedRegistryProperties
### Properties
* **activation**: [ActivationProperties](#activationproperties) (ReadOnly): The activation properties of the connected registry.
* **clientTokenIds**: string[]: The list of the ACR token resource IDs used to authenticate clients to the connected registry.
* **connectionState**: 'Offline' | 'Online' | 'Syncing' | 'Unhealthy' (ReadOnly): The current connection state of the connected registry.
* **lastActivityTime**: string (ReadOnly): The last activity time of the connected registry.
* **logging**: [LoggingProperties](#loggingproperties): The logging properties of the connected registry.
* **loginServer**: [LoginServerProperties](#loginserverproperties): The login server properties of the connected registry.
* **mode**: 'Mirror' | 'Registry' (Required): The mode of the connected registry resource that indicates the permissions of the registry.
* **parent**: [ParentProperties](#parentproperties) (Required): The properties of the connected registry parent.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **statusDetails**: [StatusDetailProperties](#statusdetailproperties)[] (ReadOnly): The list of current statuses of the connected registry.
* **version**: string (ReadOnly): The current version of ACR runtime on the connected registry.

## ActivationProperties
### Properties
* **status**: 'Active' | 'Inactive' (ReadOnly): The activation status of the connected registry.

## LoggingProperties
### Properties
* **auditLogStatus**: 'Disabled' | 'Enabled': Indicates whether audit logs are enabled on the connected registry.
* **logLevel**: 'Debug' | 'Error' | 'Information' | 'None' | 'Warning': The verbosity of logs persisted on the connected registry.

## LoginServerProperties
### Properties
* **host**: string (ReadOnly): The host of the connected registry. Can be FQDN or IP.
* **tls**: [TlsProperties](#tlsproperties) (ReadOnly): The TLS properties of the connected registry login server.

## TlsProperties
### Properties
* **certificate**: [TlsCertificateProperties](#tlscertificateproperties) (ReadOnly): The TLS certificate properties of the connected registry login server.
* **status**: 'Disabled' | 'Enabled' (ReadOnly): Indicates whether HTTPS is enabled for the login server.

## TlsCertificateProperties
### Properties
* **location**: string (ReadOnly): Indicates the location of the certificates.
* **type**: 'LocalDirectory' (ReadOnly): The type of certificate location.

## ParentProperties
### Properties
* **id**: string: The resource ID of the parent to which the connected registry will be associated.
* **syncProperties**: [SyncProperties](#syncproperties) (Required): The sync properties of the connected registry with its parent.

## SyncProperties
### Properties
* **gatewayEndpoint**: string (ReadOnly): The gateway endpoint used by the connected registry to communicate with its parent.
* **lastSyncTime**: string (ReadOnly): The last time a sync occurred between the connected registry and its parent.
* **messageTtl**: string (Required): The period of time for which a message is available to sync before it is expired. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601.
* **schedule**: string: The cron expression indicating the schedule that the connected registry will sync with its parent.
* **syncWindow**: string: The time window during which sync is enabled for each schedule occurrence. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601.
* **tokenId**: string (Required): The resource ID of the ACR token used to authenticate the connected registry to its parent during sync.

## StatusDetailProperties
### Properties
* **code**: string (ReadOnly): The code of the status.
* **correlationId**: string (ReadOnly): The correlation ID of the status.
* **description**: string (ReadOnly): The description of the status.
* **timestamp**: string (ReadOnly): The timestamp of the status.
* **type**: string (ReadOnly): The component of the connected registry corresponding to the status.

## ExportPipelineProperties
### Properties
* **options**: 'ContinueOnErrors' | 'DeleteSourceBlobOnSuccess' | 'OverwriteBlobs' | 'OverwriteTags'[]: The list of all options configured for the pipeline.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **target**: [ExportPipelineTargetProperties](#exportpipelinetargetproperties) (Required): The properties of the export pipeline target.

## ExportPipelineTargetProperties
### Properties
* **keyVaultUri**: string (Required): They key vault secret uri to obtain the target storage SAS token.
* **type**: string: The type of target for the export pipeline.
* **uri**: string: The target uri of the export pipeline.
When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"
When 'AzureStorageBlobContainer':  "https://accountName.blob.core.windows.net/containerName"

## ImportPipelineProperties
### Properties
* **options**: 'ContinueOnErrors' | 'DeleteSourceBlobOnSuccess' | 'OverwriteBlobs' | 'OverwriteTags'[]: The list of all options configured for the pipeline.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **source**: [ImportPipelineSourceProperties](#importpipelinesourceproperties) (Required): The properties of the import pipeline source.
* **trigger**: [PipelineTriggerProperties](#pipelinetriggerproperties)

## ImportPipelineSourceProperties
### Properties
* **keyVaultUri**: string (Required): They key vault secret uri to obtain the source storage SAS token.
* **type**: 'AzureStorageBlobContainer': The type of source for the import pipeline.
* **uri**: string: The source uri of the import pipeline.
When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"
When 'AzureStorageBlobContainer': "https://accountName.blob.core.windows.net/containerName"

## PipelineTriggerProperties
### Properties
* **sourceTrigger**: [PipelineSourceTriggerProperties](#pipelinesourcetriggerproperties)

## PipelineSourceTriggerProperties
### Properties
* **status**: 'Disabled' | 'Enabled' (Required): The current status of the source trigger.

## PipelineRunProperties
### Properties
* **forceUpdateTag**: string: How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **request**: [PipelineRunRequest](#pipelinerunrequest): The request properties provided for a pipeline run.
* **response**: [PipelineRunResponse](#pipelinerunresponse) (ReadOnly): The response properties returned for a pipeline run.

## PipelineRunRequest
### Properties
* **artifacts**: string[]: List of source artifacts to be transferred by the pipeline. 
Specify an image by repository ('hello-world'). This will use the 'latest' tag.
Specify an image by tag ('hello-world:latest').
Specify an image by sha256-based manifest digest ('hello-world@sha256:abc123').
* **catalogDigest**: string: The digest of the tar used to transfer the artifacts.
* **pipelineResourceId**: string: The resource ID of the pipeline to run.
* **source**: [PipelineRunSourceProperties](#pipelinerunsourceproperties)
* **target**: [PipelineRunTargetProperties](#pipelineruntargetproperties)

## PipelineRunSourceProperties
### Properties
* **name**: string: The name of the source.
* **type**: 'AzureStorageBlob': The type of the source.

## PipelineRunTargetProperties
### Properties
* **name**: string: The name of the target.
* **type**: 'AzureStorageBlob': The type of the target.

## PipelineRunResponse
### Properties
* **catalogDigest**: string: The digest of the tar used to transfer the artifacts.
* **finishTime**: string: The time the pipeline run finished.
* **importedArtifacts**: string[]: The artifacts imported in the pipeline run.
* **pipelineRunErrorMessage**: string: The detailed error message for the pipeline run in the case of failure.
* **progress**: [ProgressProperties](#progressproperties)
* **source**: [ImportPipelineSourceProperties](#importpipelinesourceproperties): The properties of the import pipeline source.
* **startTime**: string: The time the pipeline run started.
* **status**: string: The current status of the pipeline run.
* **target**: [ExportPipelineTargetProperties](#exportpipelinetargetproperties): The properties of the export pipeline target.
* **trigger**: [PipelineTriggerDescriptor](#pipelinetriggerdescriptor)

## ProgressProperties
### Properties
* **percentage**: string: The percentage complete of the copy operation.

## PipelineTriggerDescriptor
### Properties
* **sourceTrigger**: [PipelineSourceTriggerDescriptor](#pipelinesourcetriggerdescriptor)

## PipelineSourceTriggerDescriptor
### Properties
* **timestamp**: string: The timestamp when the source update happened.

## ReplicationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **regionEndpointEnabled**: bool: Specifies whether the replication's regional endpoint is enabled. Requests will not be routed to a replication whose regional endpoint is disabled, however its data will continue to be synced with other replications.
* **status**: [Status](#status) (ReadOnly): The status of an Azure resource at the time the operation was called.
* **zoneRedundancy**: 'Disabled' | 'Enabled': Whether or not zone redundancy is enabled for this container registry

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScopeMapProperties
### Properties
* **actions**: string[] (Required): The list of scoped permissions for registry artifacts.
E.g. repositories/repository-name/content/read,
repositories/repository-name/metadata/write
* **creationDate**: string (ReadOnly): The creation date of scope map.
* **description**: string: The user friendly description of the scope map.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **type**: string (ReadOnly): The type of the scope map. E.g. BuildIn scope map.

## TokenProperties
### Properties
* **creationDate**: string (ReadOnly): The creation date of scope map.
* **credentials**: [TokenCredentialsProperties](#tokencredentialsproperties): The properties of the credentials that can be used for authenticating the token.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **scopeMapId**: string: The resource ID of the scope map to which the token will be associated with.
* **status**: 'disabled' | 'enabled': The status of the token example enabled or disabled.

## TokenCredentialsProperties
### Properties
* **certificates**: [TokenCertificate](#tokencertificate)[]: Array of TokenCertificate
* **passwords**: [TokenPassword](#tokenpassword)[]: Array of TokenPassword

## TokenCertificate
### Properties
* **encodedPemCertificate**: string: Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token.
* **expiry**: string: The expiry datetime of the certificate.
* **name**: 'certificate1' | 'certificate2'
* **thumbprint**: string: The thumbprint of the certificate.

## TokenPassword
### Properties
* **creationTime**: string: The creation datetime of the password.
* **expiry**: string: The expiry datetime of the password.
* **name**: 'password1' | 'password2': The password name "password1" or "password2"
* **value**: string (ReadOnly): The password value.

## WebhookPropertiesCreateParameters
### Properties
* **actions**: 'chart_delete' | 'chart_push' | 'delete' | 'push' | 'quarantine'[] (Required): The list of actions that trigger the webhook to post notifications.
* **customHeaders**: [WebhookPropertiesCreateParametersCustomHeaders](#webhookpropertiescreateparameterscustomheaders) (WriteOnly): Custom headers that will be added to the webhook notifications.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **scope**: string: The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
* **serviceUri**: string (Required, WriteOnly): The service URI for the webhook to post notifications.
* **status**: 'disabled' | 'enabled': The status of the webhook at the time the operation was called.

## WebhookPropertiesCreateParametersCustomHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

