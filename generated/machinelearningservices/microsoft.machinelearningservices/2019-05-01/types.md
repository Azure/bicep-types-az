# Microsoft.MachineLearningServices @ 2019-05-01

## Resource Microsoft.MachineLearningServices/workspaces@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: Compute
* **tags**: ResourceTags
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## WorkspaceProperties
### Properties
* **applicationInsights**: string
* **containerRegistry**: string
* **creationTime**: string (ReadOnly)
* **description**: string
* **discoveryUrl**: string
* **friendlyName**: string
* **keyVault**: string
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **storageAccount**: string
* **workspaceId**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Compute
* **Discriminator**: computeType

### Base Properties
* **computeLocation**: string
* **createdOn**: string (ReadOnly)
* **description**: string
* **isAttachedCompute**: bool (ReadOnly)
* **modifiedOn**: string (ReadOnly)
* **provisioningErrors**: MachineLearningServiceError[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **resourceId**: string
### AKS
#### Properties
* **computeType**: 'AKS' (Required)
* **properties**: AKSProperties

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: AmlComputeProperties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: DatabricksProperties

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required)

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: DataLakeAnalyticsProperties

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: HDInsightProperties

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: VirtualMachineProperties


## MachineLearningServiceError
### Properties
* **error**: ErrorResponse (ReadOnly)

## ErrorResponse
### Properties
* **code**: string (ReadOnly)
* **details**: ErrorDetail[] (ReadOnly)
* **message**: string (ReadOnly)

## ErrorDetail
### Properties
* **code**: string (Required)
* **message**: string (Required)

## AKS
### Properties
* **computeType**: 'AKS' (Required)
* **properties**: AKSProperties

## AKSProperties
### Properties
* **agentCount**: int
* **agentVMSize**: string
* **aksNetworkingConfiguration**: AksNetworkingConfiguration
* **clusterFqdn**: string
* **sslConfiguration**: SslConfiguration
* **systemServices**: SystemService[] (ReadOnly)

## AksNetworkingConfiguration
### Properties
* **dnsServiceIP**: string
* **dockerBridgeCidr**: string
* **serviceCidr**: string
* **subnetId**: string

## SslConfiguration
### Properties
* **cert**: string
* **cname**: string
* **key**: string
* **status**: 'Disabled' | 'Enabled'

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly)
* **systemServiceType**: string (ReadOnly)
* **version**: string (ReadOnly)

## AmlCompute
### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: AmlComputeProperties

## AmlComputeProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' (ReadOnly)
* **allocationStateTransitionTime**: string (ReadOnly)
* **currentNodeCount**: int (ReadOnly)
* **errors**: MachineLearningServiceError[] (ReadOnly)
* **nodeStateCounts**: NodeStateCounts (ReadOnly)
* **scaleSettings**: ScaleSettings
* **subnet**: ResourceId
* **targetNodeCount**: int (ReadOnly)
* **userAccountCredentials**: UserAccountCredentials
* **vmPriority**: 'Dedicated' | 'LowPriority'
* **vmSize**: string

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly)
* **leavingNodeCount**: int (ReadOnly)
* **preemptedNodeCount**: int (ReadOnly)
* **preparingNodeCount**: int (ReadOnly)
* **runningNodeCount**: int (ReadOnly)
* **unusableNodeCount**: int (ReadOnly)

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required)
* **minNodeCount**: int
* **nodeIdleTimeBeforeScaleDown**: any

## ResourceId
### Properties
* **id**: string (Required)

## UserAccountCredentials
### Properties
* **adminUserName**: string (Required)
* **adminUserPassword**: string
* **adminUserSshPublicKey**: string

## Databricks
### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: DatabricksProperties

## DatabricksProperties
### Properties
* **databricksAccessToken**: string

## DataFactory
### Properties
* **computeType**: 'DataFactory' (Required)

## DataLakeAnalytics
### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: DataLakeAnalyticsProperties

## DataLakeAnalyticsProperties
### Properties
* **dataLakeStoreAccountName**: string

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: HDInsightProperties

## HDInsightProperties
### Properties
* **address**: string
* **administratorAccount**: VirtualMachineSshCredentials
* **sshPort**: int

## VirtualMachineSshCredentials
### Properties
* **password**: string
* **privateKeyData**: string
* **publicKeyData**: string
* **username**: string

## VirtualMachine
### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: VirtualMachineProperties

## VirtualMachineProperties
### Properties
* **address**: string
* **administratorAccount**: VirtualMachineSshCredentials
* **sshPort**: int
* **virtualMachineSize**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

