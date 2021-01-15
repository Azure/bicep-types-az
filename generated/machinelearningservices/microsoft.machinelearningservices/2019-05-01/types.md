# Microsoft.MachineLearningServices @ 2019-05-01

## Resource Microsoft.MachineLearningServices/workspaces@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: Compute
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.MachineLearningServices/workspaces@2019-05-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2019-05-01
* **Output**: ListWorkspaceKeysResult

## Function listKeys (Microsoft.MachineLearningServices/workspaces/computes@2019-05-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2019-05-01
* **Output**: ComputeSecrets

## Function listNodes (Microsoft.MachineLearningServices/workspaces/computes@2019-05-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2019-05-01
* **Output**: AmlCompute

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

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

## Dictionary<string,String>
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
* **properties**: schemas:21_properties

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: schemas:22_properties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: schemas:23_properties

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required)

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: schemas:23_properties

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: schemas:23_properties

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:23_properties


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
* **properties**: schemas:21_properties

## schemas:21_properties
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
* **properties**: schemas:22_properties

## schemas:22_properties
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
* **nodeIdleTimeBeforeScaleDown**: string

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
* **properties**: schemas:23_properties

## schemas:23_properties
### Properties
* **address**: string
* **administratorAccount**: VirtualMachineSshCredentials
* **sshPort**: int
* **virtualMachineSize**: string

## VirtualMachineSshCredentials
### Properties
* **password**: string
* **privateKeyData**: string
* **publicKeyData**: string
* **username**: string

## DataFactory
### Properties
* **computeType**: 'DataFactory' (Required)

## DataLakeAnalytics
### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: schemas:23_properties

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: schemas:23_properties

## VirtualMachine
### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:23_properties

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ListWorkspaceKeysResult
### Properties
* **appInsightsInstrumentationKey**: string (ReadOnly)
* **containerRegistryCredentials**: RegistryListCredentialsResult (ReadOnly)
* **userStorageKey**: string (ReadOnly)
* **userStorageResourceId**: string (ReadOnly)

## RegistryListCredentialsResult
### Properties
* **location**: string (ReadOnly)
* **passwords**: Password[] (ReadOnly)
* **username**: string (ReadOnly)

## Password
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## ComputeSecrets
* **Discriminator**: computeType
### Base Properties
### AKS
#### Properties
* **computeType**: 'AKS' (Required)
* **properties**: schemas:21_properties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: schemas:23_properties

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:23_properties


