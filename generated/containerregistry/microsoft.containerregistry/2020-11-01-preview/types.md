# Microsoft.ContainerRegistry @ 2020-11-01-preview

## Resource Microsoft.ContainerRegistry/registries@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegistryProperties](#registryproperties)
* **sku**: [Sku](#sku) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/connectedRegistries@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectedRegistryProperties](#connectedregistryproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/connectedRegistries' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/exportPipelines@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExportPipelineProperties](#exportpipelineproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/exportPipelines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/importPipelines@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [IdentityProperties](#identityproperties)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ImportPipelineProperties](#importpipelineproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/importPipelines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/pipelineRuns@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PipelineRunProperties](#pipelinerunproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/pipelineRuns' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/privateEndpointConnections@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/replications@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ReplicationProperties](#replicationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/scopeMaps@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ScopeMapProperties](#scopemapproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/scopeMaps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/tokens@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TokenProperties](#tokenproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.ContainerRegistry/registries/tokens' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerRegistry/registries/webhooks@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WebhookPropertiesCreateParameters](#webhookpropertiescreateparameters)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant)

## IdentityProperties
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [Dictionary<string,UserIdentityProperties>](#dictionarystringuseridentityproperties)

## Dictionary<string,UserIdentityProperties>
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
* **anonymousPullEnabled**: bool
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
* **zoneRedundancy**: 'Disabled' | 'Enabled'

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

## Sku
### Properties
* **name**: 'Basic' | 'Classic' | 'Premium' | 'Standard' (Required)
* **tier**: 'Basic' | 'Classic' | 'Premium' | 'Standard' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectedRegistryProperties
### Properties
* **activation**: [ActivationProperties](#activationproperties) (ReadOnly)
* **clientTokenIds**: string[]
* **connectionState**: 'Offline' | 'Online' | 'Syncing' | 'Unhealthy' (ReadOnly)
* **lastActivityTime**: string (ReadOnly)
* **logging**: [LoggingProperties](#loggingproperties)
* **loginServer**: [LoginServerProperties](#loginserverproperties)
* **mode**: 'Mirror' | 'Registry' (Required)
* **parent**: [ParentProperties](#parentproperties) (Required)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **statusDetails**: [StatusDetailProperties](#statusdetailproperties)[] (ReadOnly)
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
* **tls**: [TlsProperties](#tlsproperties) (ReadOnly)

## TlsProperties
### Properties
* **certificate**: [TlsCertificateProperties](#tlscertificateproperties) (ReadOnly)
* **status**: 'Disabled' | 'Enabled' (ReadOnly)

## TlsCertificateProperties
### Properties
* **location**: string (ReadOnly)
* **type**: 'LocalDirectory' (ReadOnly)

## ParentProperties
### Properties
* **id**: string
* **syncProperties**: [SyncProperties](#syncproperties) (Required)

## SyncProperties
### Properties
* **gatewayEndpoint**: string (ReadOnly)
* **lastSyncTime**: string (ReadOnly)
* **messageTtl**: string (Required)
* **schedule**: string
* **syncWindow**: string
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
* **zoneRedundancy**: 'Disabled' | 'Enabled'

## Dictionary<string,String>
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
* **credentials**: [TokenCredentialsProperties](#tokencredentialsproperties)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **scopeMapId**: string
* **status**: 'disabled' | 'enabled'

## TokenCredentialsProperties
### Properties
* **certificates**: [TokenCertificate](#tokencertificate)[]
* **passwords**: [TokenPassword](#tokenpassword)[]

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
* **customHeaders**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)
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

