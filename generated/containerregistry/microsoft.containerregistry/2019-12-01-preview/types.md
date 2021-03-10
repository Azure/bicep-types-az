# Microsoft.ContainerRegistry @ 2019-12-01-preview

## Resource Microsoft.ContainerRegistry/registries@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegistryProperties](#registryproperties)
* **sku**: [Sku](#sku) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/exportPipelines@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExportPipelineProperties](#exportpipelineproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/exportPipelines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/importPipelines@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImportPipelineProperties](#importpipelineproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/importPipelines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/pipelineRuns@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PipelineRunProperties](#pipelinerunproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/pipelineRuns' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/privateEndpointConnections@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/replications@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ReplicationProperties](#replicationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/webhooks@2019-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebhookPropertiesCreateParameters](#webhookpropertiescreateparameters)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [WebhookCreateParametersTags](#webhookcreateparameterstags)
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant)

## IdentityProperties
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [IdentityPropertiesUserAssignedIdentities](#identitypropertiesuserassignedidentities)

## IdentityPropertiesUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

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
* **encryption**: [EncryptionProperty](#encryptionproperty)
* **loginServer**: string (ReadOnly)
* **networkRuleBypassOptions**: 'AzureServices' | 'None'
* **networkRuleSet**: [NetworkRuleSet](#networkruleset)
* **policies**: [Policies](#policies)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **status**: [Status](#status) (ReadOnly)
* **storageAccount**: [StorageAccountProperties](#storageaccountproperties)

## EncryptionProperty
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)
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
* **ipRules**: [IPRule](#iprule)[]
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]

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
* **quarantinePolicy**: [QuarantinePolicy](#quarantinepolicy)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **trustPolicy**: [TrustPolicy](#trustpolicy)

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
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
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

## ExportPipelineProperties
### Properties
* **options**: 'ContinueOnErrors' | 'DeleteSourceBlobOnSuccess' | 'OverwriteBlobs' | 'OverwriteTags'[]
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **target**: [ExportPipelineTargetProperties](#exportpipelinetargetproperties) (Required)

## ExportPipelineTargetProperties
### Properties
* **keyVaultUri**: string (Required)
* **type**: string
* **uri**: string

## ImportPipelineProperties
### Properties
* **options**: 'ContinueOnErrors' | 'DeleteSourceBlobOnSuccess' | 'OverwriteBlobs' | 'OverwriteTags'[]
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: [ImportPipelineSourceProperties](#importpipelinesourceproperties) (Required)
* **trigger**: [PipelineTriggerProperties](#pipelinetriggerproperties)

## ImportPipelineSourceProperties
### Properties
* **keyVaultUri**: string (Required)
* **type**: 'AzureStorageBlobContainer'
* **uri**: string

## PipelineTriggerProperties
### Properties
* **sourceTrigger**: [PipelineSourceTriggerProperties](#pipelinesourcetriggerproperties)

## PipelineSourceTriggerProperties
### Properties
* **status**: 'Disabled' | 'Enabled' (Required)

## PipelineRunProperties
### Properties
* **forceUpdateTag**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **request**: [PipelineRunRequest](#pipelinerunrequest)
* **response**: [PipelineRunResponse](#pipelinerunresponse) (ReadOnly)

## PipelineRunRequest
### Properties
* **artifacts**: string[]
* **catalogDigest**: string
* **pipelineResourceId**: string
* **source**: [PipelineRunSourceProperties](#pipelinerunsourceproperties)
* **target**: [PipelineRunTargetProperties](#pipelineruntargetproperties)

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
* **progress**: [ProgressProperties](#progressproperties)
* **source**: [ImportPipelineSourceProperties](#importpipelinesourceproperties)
* **startTime**: string
* **status**: string
* **target**: [ExportPipelineTargetProperties](#exportpipelinetargetproperties)
* **trigger**: [PipelineTriggerDescriptor](#pipelinetriggerdescriptor)

## ProgressProperties
### Properties
* **percentage**: string

## PipelineTriggerDescriptor
### Properties
* **sourceTrigger**: [PipelineSourceTriggerDescriptor](#pipelinesourcetriggerdescriptor)

## PipelineSourceTriggerDescriptor
### Properties
* **timestamp**: string

## ReplicationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **regionEndpointEnabled**: bool
* **status**: [Status](#status) (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookPropertiesCreateParameters
### Properties
* **actions**: 'chart_delete' | 'chart_push' | 'delete' | 'push' | 'quarantine'[] (Required)
* **customHeaders**: [WebhookPropertiesCreateParametersCustomHeaders](#webhookpropertiescreateparameterscustomheaders) (WriteOnly)
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

