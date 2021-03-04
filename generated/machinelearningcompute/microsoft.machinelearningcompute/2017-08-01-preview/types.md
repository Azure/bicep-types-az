# Microsoft.MachineLearningCompute @ 2017-08-01-preview

## Resource Microsoft.MachineLearningCompute/operationalizationClusters@2017-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OperationalizationClusterProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.MachineLearningCompute/operationalizationClusters' (ReadOnly, DeployTimeConstant)

## OperationalizationClusterProperties
### Properties
* **appInsights**: AppInsightsProperties
* **clusterType**: 'ACS' | 'Local' (Required)
* **containerRegistry**: ContainerRegistryProperties
* **containerService**: AcsClusterProperties
* **createdOn**: string (ReadOnly)
* **description**: string
* **globalServiceConfiguration**: GlobalServiceConfiguration
* **modifiedOn**: string (ReadOnly)
* **provisioningErrors**: ErrorResponseWrapper[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **storageAccount**: StorageAccountProperties

## AppInsightsProperties
### Properties
* **resourceId**: string

## ContainerRegistryProperties
### Properties
* **resourceId**: string

## AcsClusterProperties
### Properties
* **agentCount**: int
* **agentVmSize**: 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5'
* **clusterFqdn**: string (ReadOnly)
* **masterCount**: int
* **orchestratorProperties**: KubernetesClusterProperties
* **orchestratorType**: 'Kubernetes' | 'None' (Required)
* **systemServices**: SystemService[]

## KubernetesClusterProperties
### Properties
* **servicePrincipal**: ServicePrincipalProperties

## ServicePrincipalProperties
### Properties
* **clientId**: string (Required)
* **secret**: string (Required)

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly)
* **systemServiceType**: 'BatchFrontEnd' | 'None' | 'ScoringFrontEnd' (Required)
* **version**: string (ReadOnly)

## GlobalServiceConfiguration
### Properties
* **autoScale**: AutoScaleConfiguration
* **etag**: string
* **serviceAuth**: ServiceAuthConfiguration
* **ssl**: SslConfiguration

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
* **cname**: string
* **key**: string
* **status**: 'Disabled' | 'Enabled'

## ErrorResponseWrapper
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

## StorageAccountProperties
### Properties
* **resourceId**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

