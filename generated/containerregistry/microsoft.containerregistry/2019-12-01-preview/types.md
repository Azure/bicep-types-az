# Microsoft.ContainerRegistry @ 2019-12-01-preview

## Resource Microsoft.ContainerRegistry/registries@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistryProperties
* **sku**: Sku (Required)
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/exportPipelines@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExportPipelineProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/exportPipelines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/importPipelines@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ImportPipelineProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/importPipelines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/pipelineRuns@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PipelineRunProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/pipelineRuns' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/privateEndpointConnections@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/replications@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReplicationProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/webhooks@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebhookPropertiesCreateParameters
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant)

## Function listCredentials (Microsoft.ContainerRegistry/registries@2019-12-01-preview
* **Resource**: Microsoft.ContainerRegistry/registries@2019-12-01-preview
* **Output**: RegistryListCredentialsResult

## Function listEvents (Microsoft.ContainerRegistry/registries/webhooks@2019-12-01-preview
* **Resource**: Microsoft.ContainerRegistry/registries/webhooks@2019-12-01-preview
* **Output**: EventListResult

## IdentityProperties
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,UserIdentityProperties>

## Dictionary<string,UserIdentityProperties>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookPropertiesCreateParameters
### Properties
* **actions**: 'chart_delete' | 'chart_push' | 'delete' | 'push' | 'quarantine'[] (Required)
* **customHeaders**: Dictionary<string,String> (WriteOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scope**: string
* **serviceUri**: string (Required, WriteOnly)
* **status**: 'disabled' | 'enabled'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RegistryListCredentialsResult
### Properties
* **passwords**: RegistryPassword[] (ReadOnly)
* **username**: string (ReadOnly)

## RegistryPassword
### Properties
* **name**: 'password' | 'password2' (ReadOnly)
* **value**: string (ReadOnly)

## EventListResult
### Properties
* **nextLink**: string (ReadOnly)
* **value**: Event[] (ReadOnly)

## Event
### Properties
* **eventRequestMessage**: EventRequestMessage (ReadOnly)
* **eventResponseMessage**: EventResponseMessage (ReadOnly)
* **id**: string (ReadOnly)

## EventRequestMessage
### Properties
* **content**: EventContent (ReadOnly)
* **headers**: Dictionary<string,String> (ReadOnly)
* **method**: string (ReadOnly)
* **requestUri**: string (ReadOnly)
* **version**: string (ReadOnly)

## EventContent
### Properties
* **action**: string (ReadOnly)
* **actor**: Actor (ReadOnly)
* **id**: string (ReadOnly)
* **request**: Request (ReadOnly)
* **source**: Source (ReadOnly)
* **target**: Target (ReadOnly)
* **timestamp**: string (ReadOnly)

## Actor
### Properties
* **name**: string (ReadOnly)

## Request
### Properties
* **addr**: string (ReadOnly)
* **host**: string (ReadOnly)
* **id**: string (ReadOnly)
* **method**: string (ReadOnly)
* **useragent**: string (ReadOnly)

## Source
### Properties
* **addr**: string (ReadOnly)
* **instanceID**: string (ReadOnly)

## Target
### Properties
* **digest**: string (ReadOnly)
* **length**: int (ReadOnly)
* **mediaType**: string (ReadOnly)
* **name**: string (ReadOnly)
* **repository**: string (ReadOnly)
* **size**: int (ReadOnly)
* **tag**: string (ReadOnly)
* **url**: string (ReadOnly)
* **version**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventResponseMessage
### Properties
* **content**: string (ReadOnly)
* **headers**: Dictionary<string,String> (ReadOnly)
* **reasonPhrase**: string (ReadOnly)
* **statusCode**: string (ReadOnly)
* **version**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

