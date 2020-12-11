# Microsoft.MachineLearningServices @ 2018-03-01-preview

## Resource Microsoft.MachineLearningServices/workspaces@2018-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2018-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: Compute
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## WorkspaceProperties
### Properties
* **applicationInsights**: string
* **batchaiWorkspace**: string
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
### Additional Properties
* **Additional Properties Type**: string

## Compute
* **Discriminator**: computeType
### Base Properties
* **computeLocation**: string
* **createdOn**: string (ReadOnly)
* **description**: string
* **modifiedOn**: string (ReadOnly)
* **provisioningErrors**: MachineLearningServiceError[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **resourceId**: string
### AKS
#### Properties
* **computeType**: 'AKS' (Required)
* **properties**: schemas:15_properties

### BatchAI
#### Properties
* **computeType**: 'BatchAI' (Required)
* **properties**: schemas:16_properties

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required)

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: schemas:17_properties

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:17_properties


## MachineLearningServiceError
### Properties
* **error**: ErrorResponse

## ErrorResponse
### Properties
* **code**: string (Required)
* **details**: ErrorDetail[]
* **message**: string (Required)

## ErrorDetail
### Properties
* **code**: string (Required)
* **message**: string (Required)

## AKS
### Properties
* **computeType**: 'AKS' (Required)
* **properties**: schemas:15_properties

## schemas:15_properties
### Properties
* **agentCount**: int
* **agentVMSize**: string
* **clusterFqdn**: string
* **sslConfiguration**: SslConfiguration
* **systemServices**: SystemService[]

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

## BatchAI
### Properties
* **computeType**: 'BatchAI' (Required)
* **properties**: schemas:16_properties

## schemas:16_properties
### Properties
* **scaleSettings**: ScaleSettings
* **vmPriority**: string
* **vmSize**: string

## ScaleSettings
### Properties
* **autoScaleEnabled**: bool
* **maxNodeCount**: int
* **minNodeCount**: int

## DataFactory
### Properties
* **computeType**: 'DataFactory' (Required)

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: schemas:17_properties

## schemas:17_properties
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

## VirtualMachine
### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:17_properties

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

