# Microsoft.MachineLearningCompute @ 2017-06-01-preview

## Resource Microsoft.MachineLearningCompute/operationalizationClusters@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OperationalizationClusterProperties](#operationalizationclusterproperties): Properties of an operationalization cluster
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningCompute/operationalizationClusters' (ReadOnly, DeployTimeConstant): The resource type

## OperationalizationClusterProperties
### Properties
* **appInsights**: [AppInsightsCredentials](#appinsightscredentials): AppInsights credentials.
* **clusterType**: string (Required): The cluster type.
* **containerRegistry**: [ContainerRegistryProperties](#containerregistryproperties): Properties of Azure Container Registry.
* **containerService**: [AcsClusterProperties](#acsclusterproperties) (Required): Information about the container service backing the cluster
* **createdOn**: string (ReadOnly): The date and time when the cluster was created.
* **description**: string: The description of the cluster.
* **globalServiceConfiguration**: [GlobalServiceConfiguration](#globalserviceconfiguration): Global configuration for services in the cluster.
* **modifiedOn**: string (ReadOnly): The date and time when the cluster was last modified.
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed. Possible values include: 'Unknown', 'Updating', 'Creating', 'Succeeded', 'Failed'
* **storageAccount**: [StorageAccountProperties](#storageaccountproperties): Properties of Storage Account.

## AppInsightsCredentials
### Properties
* **apiKey**: string: The AppInsights API key. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.
* **appId**: string: The AppInsights application ID.

## ContainerRegistryProperties
### Properties
* **resourceId**: string: ARM resource ID of the Azure Container Registry used to store Docker images for web services in the cluster. If not provided one will be created. This cannot be changed once the cluster is created.

## AcsClusterProperties
### Properties
* **agentCount**: int: The number of agent nodes in the Container Service. This can be changed to scale the cluster.
* **agentVmSize**: 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_D1_v2' | 'Standard_D1' | 'Standard_D11_v2' | 'Standard_D11' | 'Standard_D12_v2' | 'Standard_D12' | 'Standard_D13_v2' | 'Standard_D13' | 'Standard_D14_v2' | 'Standard_D14' | 'Standard_D2_v2' | 'Standard_D2' | 'Standard_D3_v2' | 'Standard_D3' | 'Standard_D4_v2' | 'Standard_D4' | 'Standard_D5_v2' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5': The Azure VM size of the agent VM nodes. This cannot be changed once the cluster is created. Possible values include: 'Standard_A0', 'Standard_A1', 'Standard_A2', 'Standard_A3', 'Standard_A4', 'Standard_A5', 'Standard_A6', 'Standard_A7', 'Standard_A8', 'Standard_A9', 'Standard_A10', 'Standard_A11', 'Standard_D1', 'Standard_D2', 'Standard_D3', 'Standard_D4', 'Standard_D11', 'Standard_D12', 'Standard_D13', 'Standard_D14', 'Standard_D1_v2', 'Standard_D2_v2', 'Standard_D3_v2', 'Standard_D4_v2', 'Standard_D5_v2', 'Standard_D11_v2', 'Standard_D12_v2', 'Standard_D13_v2', 'Standard_D14_v2', 'Standard_G1', 'Standard_G2', 'Standard_G3', 'Standard_G4', 'Standard_G5', 'Standard_DS1', 'Standard_DS2', 'Standard_DS3', 'Standard_DS4', 'Standard_DS11', 'Standard_DS12', 'Standard_DS13', 'Standard_DS14', 'Standard_GS1', 'Standard_GS2', 'Standard_GS3', 'Standard_GS4', 'Standard_GS5'
* **clusterFqdn**: string (ReadOnly): The FQDN of the cluster.
* **orchestratorProperties**: [Kubernetes](#kubernetes) (Required): Kubernetes cluster specific properties
* **orchestratorType**: string (Required): Type of orchestrator. It cannot be changed once the cluster is created.
* **systemServices**: 'Batch' | 'Scoring'[]: The system services deployed to the cluster

## Kubernetes
### Properties
* **servicePrincipal**: [ServicePrincipalProperties](#serviceprincipalproperties) (Required): The Azure service principal used by Kubernetes for configuring load balancers

## ServicePrincipalProperties
### Properties
* **clientId**: string (Required): The service principal client ID
* **secret**: string (Required): The service principal secret. This is not returned in response of GET/PUT on the resource. To see this please call listKeys.

## GlobalServiceConfiguration
### Properties
* **autoScale**: [AutoScaleConfiguration](#autoscaleconfiguration): AutoScale configuration properties.
* **etag**: string: The configuration ETag for updates.
* **serviceAuth**: [ServiceAuthConfiguration](#serviceauthconfiguration): Global service auth configuration properties. These are the data-plane authorization keys and are used if a service doesn't define it's own.
* **ssl**: [SslConfiguration](#sslconfiguration): SSL configuration. If configured data-plane calls to user services will be exposed over SSL only.
### Additional Properties
* **Additional Properties Type**: string

## AutoScaleConfiguration
### Properties
* **maxReplicas**: int: The maximum number of replicas for each service.
* **minReplicas**: int: The minimum number of replicas for each service.
* **refreshPeriodInSeconds**: int: Refresh period in seconds.
* **status**: 'Disabled' | 'Enabled': If auto-scale is enabled for all services. Each service can turn it off individually. Possible values include: 'Enabled', 'Disabled'
* **targetUtilization**: int: The target utilization.

## ServiceAuthConfiguration
### Properties
* **primaryAuthKeyHash**: string (Required): The primary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.
* **secondaryAuthKeyHash**: string (Required): The secondary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.

## SslConfiguration
### Properties
* **cert**: string: The SSL cert data in PEM format encoded as base64 string
* **key**: string: The SSL key data in PEM format encoded as base64 string. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.
* **status**: 'Disabled' | 'Enabled': SSL status. Allowed values are Enabled and Disabled. Possible values include: 'Enabled', 'Disabled'

## StorageAccountProperties
### Properties
* **resourceId**: string: ARM resource ID of the Azure Storage Account to store CLI specific files. If not provided one will be created. This cannot be changed once the cluster is created.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

