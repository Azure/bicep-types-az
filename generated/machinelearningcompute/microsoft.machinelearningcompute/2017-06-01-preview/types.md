# Microsoft.MachineLearningCompute @ 2017-06-01-preview

## Resource Microsoft.MachineLearningCompute/operationalizationClusters@2017-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OperationalizationClusterProperties](#operationalizationclusterproperties): Properties of an operationalization cluster.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningCompute/operationalizationClusters' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.MachineLearningCompute/operationalizationClusters@2017-06-01-preview)
* **Resource**: Microsoft.MachineLearningCompute/operationalizationClusters
* **ApiVersion**: 2017-06-01-preview
* **Output**: [OperationalizationClusterCredentials](#operationalizationclustercredentials)

## AcsClusterProperties
### Properties
* **agentCount**: int: The number of agent nodes in the Container Service. This can be changed to scale the cluster.
* **agentVmSize**: 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | string: The Azure VM size of the agent VM nodes. This cannot be changed once the cluster is created.
* **clusterFqdn**: string (ReadOnly): The FQDN of the cluster.
* **orchestratorProperties**: [KubernetesClusterProperties](#kubernetesclusterproperties) (Required): Orchestrator specific properties
* **orchestratorType**: 'Kubernetes' | string (Required): Type of orchestrator. It cannot be changed once the cluster is created.
* **systemServices**: 'Batch' | 'Scoring' | string[]: The system services deployed to the cluster

## AppInsightsCredentials
### Properties
* **apiKey**: string: The AppInsights API key. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.
* **appId**: string: The AppInsights application ID.

## AutoScaleConfiguration
### Properties
* **maxReplicas**: int: The maximum number of replicas for each service.
* **minReplicas**: int: The minimum number of replicas for each service.
* **refreshPeriodInSeconds**: int: Refresh period in seconds.
* **status**: 'Disabled' | 'Enabled' | string: If auto-scale is enabled for all services. Each service can turn it off individually.
* **targetUtilization**: int: The target utilization.

## ContainerRegistryCredentials
### Properties
* **loginServer**: string (ReadOnly): The ACR login server name. User name is the first part of the FQDN.
* **password**: string (ReadOnly): The ACR primary password.
* **password2**: string (ReadOnly): The ACR secondary password.

## ContainerRegistryProperties
### Properties
* **resourceId**: string: ARM resource ID of the Azure Container Registry used to store Docker images for web services in the cluster. If not provided one will be created. This cannot be changed once the cluster is created.

## ContainerServiceCredentials
### Properties
* **acsKubeConfig**: string (ReadOnly): The ACS kube config file.
* **imagePullSecretName**: string (ReadOnly): The ACR image pull secret name which was created in Kubernetes.
* **servicePrincipalConfiguration**: [ServicePrincipalProperties](#serviceprincipalproperties) (ReadOnly): Client secret for the Service Principal used by Kubernetes.

## GlobalServiceConfiguration
### Properties
* **autoScale**: [AutoScaleConfiguration](#autoscaleconfiguration): The auto-scale configuration
* **etag**: string: The configuration ETag for updates.
* **serviceAuth**: [ServiceAuthConfiguration](#serviceauthconfiguration): Optional global authorization keys for all user services deployed in cluster. These are used if the service does not have auth keys.
* **ssl**: [SslConfiguration](#sslconfiguration): The SSL configuration properties
### Additional Properties
* **Additional Properties Type**: string

## KubernetesClusterProperties
### Properties
* **servicePrincipal**: [ServicePrincipalProperties](#serviceprincipalproperties) (Required): The Azure Service Principal used by Kubernetes

## OperationalizationClusterCredentials
### Properties
* **appInsights**: [AppInsightsCredentials](#appinsightscredentials): Credentials for Azure AppInsights.
* **containerRegistry**: [ContainerRegistryCredentials](#containerregistrycredentials): Credentials for Azure Container Registry.
* **containerService**: [ContainerServiceCredentials](#containerservicecredentials): Credentials for Azure Container Service.
* **serviceAuthConfiguration**: [ServiceAuthConfiguration](#serviceauthconfiguration): Global authorization keys for all user services deployed in cluster. These are used if the service does not have auth keys.
* **sslConfiguration**: [SslConfiguration](#sslconfiguration): The SSL configuration for the services.
* **storageAccount**: [StorageAccountCredentials](#storageaccountcredentials): Credentials for the Storage Account.

## OperationalizationClusterProperties
### Properties
* **appInsights**: [AppInsightsCredentials](#appinsightscredentials): AppInsights configuration
* **clusterType**: 'ACS' | string (Required): The cluster type.
* **containerRegistry**: [ContainerRegistryProperties](#containerregistryproperties): Container Registry properties.
* **containerService**: [AcsClusterProperties](#acsclusterproperties) (Required): Parameters for the Azure Container Service cluster.
* **createdOn**: string (ReadOnly): The date and time when the cluster was created.
* **description**: string: The description of the cluster.
* **globalServiceConfiguration**: [GlobalServiceConfiguration](#globalserviceconfiguration): Contains global configuration for the web services in the cluster.
* **modifiedOn**: string (ReadOnly): The date and time when the cluster was last modified.
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
* **storageAccount**: [StorageAccountProperties](#storageaccountproperties): Storage Account properties.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceAuthConfiguration
### Properties
* **primaryAuthKeyHash**: string (Required): The primary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.
* **secondaryAuthKeyHash**: string (Required): The secondary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.

## ServicePrincipalProperties
### Properties
* **clientId**: string (Required): The service principal client ID
* **secret**: string (Required): The service principal secret. This is not returned in response of GET/PUT on the resource. To see this please call listKeys.

## SslConfiguration
### Properties
* **cert**: string: The SSL cert data in PEM format encoded as base64 string
* **key**: string: The SSL key data in PEM format encoded as base64 string. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.
* **status**: 'Disabled' | 'Enabled' | string: SSL status. Allowed values are Enabled and Disabled.

## StorageAccountCredentials
### Properties
* **primaryKey**: string (ReadOnly): The primary key of the storage account.
* **resourceId**: string (ReadOnly): The ARM resource ID of the storage account.
* **secondaryKey**: string (ReadOnly): The secondary key of the storage account.

## StorageAccountProperties
### Properties
* **resourceId**: string: ARM resource ID of the Azure Storage Account to store CLI specific files. If not provided one will be created. This cannot be changed once the cluster is created.

