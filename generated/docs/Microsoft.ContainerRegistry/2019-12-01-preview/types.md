# Microsoft.ContainerRegistry @ 2019-12-01-preview

## Microsoft.ContainerRegistry/registries/exportPipelines
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExportPipelineProperties
* **type**: 'Microsoft.ContainerRegistry/registries/exportPipelines' (ReadOnly, DeployTimeConstant)

## IdentityProperties
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,UserIdentityProperties>

## Dictionary<string,UserIdentityProperties>
### Additional Properties
* **Additional Properties Type**: UserIdentityProperties

## UserIdentityProperties
### Properties
* **clientId**: string
* **principalId**: string

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

## Microsoft.ContainerRegistry/registries/importPipelines
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImportPipelineProperties
* **type**: 'Microsoft.ContainerRegistry/registries/importPipelines' (ReadOnly, DeployTimeConstant)

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

## Microsoft.ContainerRegistry/registries/pipelineRuns
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PipelineRunProperties
* **type**: 'Microsoft.ContainerRegistry/registries/pipelineRuns' (ReadOnly, DeployTimeConstant)

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

## Microsoft.ContainerRegistry/registries/privateEndpointConnections
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.ContainerRegistry/registries/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

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

## Microsoft.ContainerRegistry/registries/replications
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReplicationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant)

## ReplicationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **regionEndpointEnabled**: bool
* **status**: Status (ReadOnly)

## Status
### Properties
* **displayStatus**: string (ReadOnly)
* **message**: string (ReadOnly)
* **timestamp**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.ContainerRegistry/registries/webhooks
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebhookPropertiesCreateParameters
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant)

## WebhookPropertiesCreateParameters
### Properties
* **actions**: 'chart_delete' | 'chart_push' | 'delete' | 'push' | 'quarantine'[] (Required)
* **customHeaders**: Dictionary<string,String> (WriteOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scope**: string
* **serviceUri**: string (Required, WriteOnly)
* **status**: 'disabled' | 'enabled'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.ContainerRegistry/registries
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistryProperties
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## RegistryProperties
### Properties
* **adminUserEnabled**: bool
* **creationDate**: string (ReadOnly)
* **dataEndpointEnabled**: bool
* **dataEndpointHostNames**: string[] (ReadOnly)
* **encryption**: EncryptionProperty
* **loginServer**: string (ReadOnly)
* **networkRuleSet**: NetworkRuleSet
* **policies**: Policies
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **status**: Status (ReadOnly)
* **storageAccount**: StorageAccountProperties

## EncryptionProperty
### Properties
* **keyVaultProperties**: KeyVaultProperties
* **status**: 'disabled' | 'enabled'

## KeyVaultProperties
### Properties
* **identity**: string
* **keyIdentifier**: string
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
* **type**: string (ReadOnly)

## StorageAccountProperties
### Properties
* **id**: string (Required)

## Sku
### Properties
* **name**: 'Basic' | 'Classic' | 'Premium' | 'Standard' (Required)
* **tier**: 'Basic' | 'Classic' | 'Premium' | 'Standard' (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

