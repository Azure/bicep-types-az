# Microsoft.ContainerRegistry @ 2020-11-01-preview

## Resource Microsoft.ContainerRegistry/registries@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistryProperties
* **sku**: Sku (Required)
* **systemData**: SystemData (ReadOnly)
* **tags**: ResourceTags
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/connectedRegistries@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectedRegistryProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/connectedRegistries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/exportPipelines@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExportPipelineProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/exportPipelines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/importPipelines@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImportPipelineProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/importPipelines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/pipelineRuns@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PipelineRunProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/pipelineRuns' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/privateEndpointConnections@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/replications@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReplicationProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: ResourceTags
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/scopeMaps@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScopeMapProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/scopeMaps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/tokens@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TokenProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/tokens' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/webhooks@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebhookPropertiesCreateParameters
* **systemData**: SystemData (ReadOnly)
* **tags**: WebhookCreateParametersTags
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant)

## IdentityProperties
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: IdentityPropertiesUserAssignedIdentities

## IdentityPropertiesUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: UserIdentityProperties

## UserIdentityProperties
### Properties
* **clientId**: string
* **principalId**: string

## RegistryProperties
### Properties
* **adminUserEnabled**: bool
* **creationDate**: string (ReadOnly)
* **dataEndpointEnabled**: bool
* **dataEndpointHostNames**: string[] (ReadOnly)
* **encryption**: EncryptionProperty
* **loginServer**: string (ReadOnly)
* **networkRuleBypassOptions**: 'AzureServices' | 'None'
* **networkRuleSet**: NetworkRuleSet
* **policies**: Policies
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **status**: Status (ReadOnly)
* **storageAccount**: StorageAccountProperties
* **zoneRedundancy**: 'Disabled' | 'Enabled'

## EncryptionProperty
### Properties
* **keyVaultProperties**: KeyVaultProperties
* **status**: 'disabled' | 'enabled'

## KeyVaultProperties
### Properties
* **identity**: string
* **keyIdentifier**: string
* **keyRotationEnabled**: bool (ReadOnly)
* **lastKeyRotationTimestamp**: string (ReadOnly)
* **versionedKeyIdentifier**: string (ReadOnly)

## NetworkRuleSet
### Properties
* **defaultAction**: 'Allow' | 'Deny' (Required)
* **ipRules**: IPRule[]
* **virtualNetworkRules**: VirtualNetworkRule[]

## IPRule
### Properties
* **action**: 'Allow'
* **value**: string (Required)

## VirtualNetworkRule
### Properties
* **action**: 'Allow'
* **id**: string (Required)

## Policies
### Properties
* **quarantinePolicy**: QuarantinePolicy
* **retentionPolicy**: RetentionPolicy
* **trustPolicy**: TrustPolicy

## QuarantinePolicy
### Properties
* **status**: 'disabled' | 'enabled'

## RetentionPolicy
### Properties
* **days**: int
* **lastUpdatedTime**: string (ReadOnly)
* **status**: 'disabled' | 'enabled'

## TrustPolicy
### Properties
* **status**: 'disabled' | 'enabled'
* **type**: 'Notary'

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: 'None' | 'Recreate'
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Status
### Properties
* **displayStatus**: string (ReadOnly)
* **message**: string (ReadOnly)
* **timestamp**: string (ReadOnly)

## StorageAccountProperties
### Properties
* **id**: string (Required)

## Sku
### Properties
* **name**: 'Basic' | 'Classic' | 'Premium' | 'Standard' (Required)
* **tier**: 'Basic' | 'Classic' | 'Premium' | 'Standard' (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectedRegistryProperties
### Properties
* **activation**: ActivationProperties (ReadOnly)
* **clientTokenIds**: string[]
* **connectionState**: 'Offline' | 'Online' | 'Syncing' | 'Unhealthy' (ReadOnly)
* **lastActivityTime**: string (ReadOnly)
* **logging**: LoggingProperties
* **loginServer**: LoginServerProperties
* **mode**: 'Mirror' | 'Registry' (Required)
* **parent**: ParentProperties (Required)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **statusDetails**: StatusDetailProperties[] (ReadOnly)
* **version**: string (ReadOnly)

## ActivationProperties
### Properties
* **status**: 'Active' | 'Inactive' (ReadOnly)

## LoggingProperties
### Properties
* **auditLogStatus**: 'Disabled' | 'Enabled'
* **logLevel**: 'Debug' | 'Error' | 'Information' | 'None' | 'Warning'

## LoginServerProperties
### Properties
* **host**: string (ReadOnly)
* **tls**: TlsProperties (ReadOnly)

## TlsProperties
### Properties
* **certificate**: TlsCertificateProperties (ReadOnly)
* **status**: 'Disabled' | 'Enabled' (ReadOnly)

## TlsCertificateProperties
### Properties
* **location**: string (ReadOnly)
* **type**: 'LocalDirectory' (ReadOnly)

## ParentProperties
### Properties
* **id**: string
* **syncProperties**: SyncProperties (Required)

## SyncProperties
### Properties
* **gatewayEndpoint**: string (ReadOnly)
* **lastSyncTime**: string (ReadOnly)
* **messageTtl**: any (Required)
* **schedule**: string
* **syncWindow**: any
* **tokenId**: string (Required)

## StatusDetailProperties
### Properties
* **code**: string (ReadOnly)
* **correlationId**: string (ReadOnly)
* **description**: string (ReadOnly)
* **timestamp**: string (ReadOnly)
* **type**: string (ReadOnly)

## ExportPipelineProperties
### Properties
* **options**: 'ContinueOnErrors' | 'DeleteSourceBlobOnSuccess' | 'OverwriteBlobs' | 'OverwriteTags'[]
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **target**: ExportPipelineTargetProperties (Required)

## ExportPipelineTargetProperties
### Properties
* **keyVaultUri**: string (Required)
* **type**: string
* **uri**: string

## ImportPipelineProperties
### Properties
* **options**: 'ContinueOnErrors' | 'DeleteSourceBlobOnSuccess' | 'OverwriteBlobs' | 'OverwriteTags'[]
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: ImportPipelineSourceProperties (Required)
* **trigger**: PipelineTriggerProperties

## ImportPipelineSourceProperties
### Properties
* **keyVaultUri**: string (Required)
* **type**: 'AzureStorageBlobContainer'
* **uri**: string

## PipelineTriggerProperties
### Properties
* **sourceTrigger**: PipelineSourceTriggerProperties

## PipelineSourceTriggerProperties
### Properties
* **status**: 'Disabled' | 'Enabled' (Required)

## PipelineRunProperties
### Properties
* **forceUpdateTag**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **request**: PipelineRunRequest
* **response**: PipelineRunResponse (ReadOnly)

## PipelineRunRequest
### Properties
* **artifacts**: string[]
* **catalogDigest**: string
* **pipelineResourceId**: string
* **source**: PipelineRunSourceProperties
* **target**: PipelineRunTargetProperties

## PipelineRunSourceProperties
### Properties
* **name**: string
* **type**: 'AzureStorageBlob'

## PipelineRunTargetProperties
### Properties
* **name**: string
* **type**: 'AzureStorageBlob'

## PipelineRunResponse
### Properties
* **catalogDigest**: string
* **finishTime**: string
* **importedArtifacts**: string[]
* **pipelineRunErrorMessage**: string
* **progress**: ProgressProperties
* **source**: ImportPipelineSourceProperties
* **startTime**: string
* **status**: string
* **target**: ExportPipelineTargetProperties
* **trigger**: PipelineTriggerDescriptor

## ProgressProperties
### Properties
* **percentage**: string

## PipelineTriggerDescriptor
### Properties
* **sourceTrigger**: PipelineSourceTriggerDescriptor

## PipelineSourceTriggerDescriptor
### Properties
* **timestamp**: string

## ReplicationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **regionEndpointEnabled**: bool
* **status**: Status (ReadOnly)
* **zoneRedundancy**: 'Disabled' | 'Enabled'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScopeMapProperties
### Properties
* **actions**: string[] (Required)
* **creationDate**: string (ReadOnly)
* **description**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **type**: string (ReadOnly)

## TokenProperties
### Properties
* **creationDate**: string (ReadOnly)
* **credentials**: TokenCredentialsProperties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scopeMapId**: string
* **status**: 'disabled' | 'enabled'

## TokenCredentialsProperties
### Properties
* **certificates**: TokenCertificate[]
* **passwords**: TokenPassword[]

## TokenCertificate
### Properties
* **encodedPemCertificate**: string
* **expiry**: string
* **name**: 'certificate1' | 'certificate2'
* **thumbprint**: string

## TokenPassword
### Properties
* **creationTime**: string
* **expiry**: string
* **name**: 'password1' | 'password2'
* **value**: string (ReadOnly)

## WebhookPropertiesCreateParameters
### Properties
* **actions**: 'chart_delete' | 'chart_push' | 'delete' | 'push' | 'quarantine'[] (Required)
* **customHeaders**: WebhookPropertiesCreateParametersCustomHeaders (WriteOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scope**: string
* **serviceUri**: string (Required, WriteOnly)
* **status**: 'disabled' | 'enabled'

## WebhookPropertiesCreateParametersCustomHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

