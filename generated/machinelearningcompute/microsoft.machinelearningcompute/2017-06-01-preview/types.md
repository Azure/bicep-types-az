# Microsoft.MachineLearningCompute @ 2017-06-01-preview

## Resource Microsoft.MachineLearningCompute/operationalizationClusters@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OperationalizationClusterProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningCompute/operationalizationClusters' (ReadOnly, DeployTimeConstant)

## Function listKeys (Microsoft.MachineLearningCompute/operationalizationClusters@2017-06-01-preview
* **Resource**: Microsoft.MachineLearningCompute/operationalizationClusters@2017-06-01-preview
* **Output**: OperationalizationClusterCredentials

## OperationalizationClusterProperties
### Properties
* **appInsights**: AppInsightsCredentials
* **clusterType**: string (Required)
* **containerRegistry**: ContainerRegistryProperties
* **containerService**: AcsClusterProperties (Required)
* **createdOn**: string (ReadOnly)
* **description**: string
* **globalServiceConfiguration**: GlobalServiceConfiguration
* **modifiedOn**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **storageAccount**: StorageAccountProperties

## AppInsightsCredentials
### Properties
* **apiKey**: string
* **appId**: string

## ContainerRegistryProperties
### Properties
* **resourceId**: string

## AcsClusterProperties
### Properties
* **agentCount**: int
* **agentVmSize**: 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_D1_v2' | 'Standard_D1' | 'Standard_D11_v2' | 'Standard_D11' | 'Standard_D12_v2' | 'Standard_D12' | 'Standard_D13_v2' | 'Standard_D13' | 'Standard_D14_v2' | 'Standard_D14' | 'Standard_D2_v2' | 'Standard_D2' | 'Standard_D3_v2' | 'Standard_D3' | 'Standard_D4_v2' | 'Standard_D4' | 'Standard_D5_v2' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5'
* **clusterFqdn**: string (ReadOnly)
* **orchestratorProperties**: Kubernetes (Required)
* **orchestratorType**: string (Required)
* **systemServices**: 'Batch' | 'Scoring'[]

## Kubernetes
### Properties
* **servicePrincipal**: ServicePrincipalProperties (Required)

## ServicePrincipalProperties
### Properties
* **clientId**: string (Required)
* **secret**: string (Required)

## GlobalServiceConfiguration
### Properties
* **autoScale**: AutoScaleConfiguration
* **etag**: string
* **serviceAuth**: ServiceAuthConfiguration
* **ssl**: SslConfiguration
### Additional Properties
* **Additional Properties Type**: string

## AutoScaleConfiguration
### Properties
* **maxReplicas**: int
* **minReplicas**: int
* **refreshPeriodInSeconds**: int
* **status**: 'Disabled' | 'Enabled'
* **targetUtilization**: int

## ServiceAuthConfiguration
### Properties
* **primaryAuthKeyHash**: string (Required)
* **secondaryAuthKeyHash**: string (Required)

## SslConfiguration
### Properties
* **cert**: string
* **key**: string
* **status**: 'Disabled' | 'Enabled'

## StorageAccountProperties
### Properties
* **resourceId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OperationalizationClusterCredentials
### Properties
* **appInsights**: AppInsightsCredentials (ReadOnly)
* **containerRegistry**: ContainerRegistryCredentials (ReadOnly)
* **containerService**: ContainerServiceCredentials (ReadOnly)
* **serviceAuthConfiguration**: ServiceAuthConfiguration (ReadOnly)
* **sslConfiguration**: SslConfiguration (ReadOnly)
* **storageAccount**: StorageAccountCredentials (ReadOnly)

## ContainerRegistryCredentials
### Properties
* **loginServer**: string (ReadOnly)
* **password**: string (ReadOnly)
* **password2**: string (ReadOnly)

## ContainerServiceCredentials
### Properties
* **acsKubeConfig**: string (ReadOnly)
* **imagePullSecretName**: string (ReadOnly)
* **servicePrincipalConfiguration**: ServicePrincipalProperties (ReadOnly)

## StorageAccountCredentials
### Properties
* **primaryKey**: string (ReadOnly)
* **resourceId**: string (ReadOnly)
* **secondaryKey**: string (ReadOnly)

