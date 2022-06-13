# Microsoft.DelegatedNetwork @ 2020-08-08-preview

## Resource Microsoft.DelegatedNetwork/controller@2020-08-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DelegatedControllerProperties](#delegatedcontrollerproperties) (ReadOnly): Properties of the provision operation request.
* **tags**: [ControllerResourceTags](#controllerresourcetags): The resource tags.
* **type**: 'Microsoft.DelegatedNetwork/controller' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DelegatedNetwork/delegatedSubnets@2020-08-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DelegatedSubnetProperties](#delegatedsubnetproperties) (ReadOnly): Properties of the provision operation request.
* **tags**: [DelegatedSubnetResourceTags](#delegatedsubnetresourcetags): The resource tags.
* **type**: 'Microsoft.DelegatedNetwork/delegatedSubnets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DelegatedNetwork/orchestrators@2020-08-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [OrchestratorIdentity](#orchestratoridentity): The identity of the orchestrator
* **kind**: 'Kubernetes' | string (Required): The kind of workbook. Choices are user and shared.
* **location**: string: Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrchestratorResourceProperties](#orchestratorresourceproperties): Properties of the provision operation request.
* **tags**: [OrchestratorResourceTags](#orchestratorresourcetags): The resource tags.
* **type**: 'Microsoft.DelegatedNetwork/orchestrators' (ReadOnly, DeployTimeConstant): The resource type

## ControllerDetails
### Properties
* **id**: string: controller arm resource id

## ControllerResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DelegatedControllerProperties
### Properties
* **dncAppId**: string (ReadOnly): dnc application id should be used by customer to authenticate with dnc gateway.
* **dncEndpoint**: string (ReadOnly): dnc endpoint url that customers can use to connect to
* **dncTenantId**: string (ReadOnly): tenant id of dnc application id
* **provisioningState**: 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The current state of dnc controller resource.
* **resourceGuid**: string (ReadOnly): Resource guid.

## DelegatedSubnetProperties
### Properties
* **controllerDetails**: [ControllerDetails](#controllerdetails): Properties of the controller.
* **provisioningState**: 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The current state of dnc delegated subnet resource.
* **resourceGuid**: string (ReadOnly): Resource guid.
* **subnetDetails**: [SubnetDetails](#subnetdetails): subnet details

## DelegatedSubnetResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OrchestratorIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the system assigned identity which is used by orchestrator.
* **tenantId**: string (ReadOnly): The tenant id of the system assigned identity which is used by orchestrator.
* **type**: 'None' | 'SystemAssigned': The type of identity used for orchestrator cluster. Type 'SystemAssigned' will use an implicitly created identity orchestrator clusters

## OrchestratorResourceProperties
### Properties
* **apiServerEndpoint**: string: K8s APIServer url
* **clusterRootCA**: string: RootCA certificate of kubernetes cluster base64 encoded
* **controllerDetails**: [ControllerDetails](#controllerdetails) (Required): Properties of the controller.
* **orchestratorAppId**: string: AAD ID used with apiserver
* **orchestratorTenantId**: string: TenantID of server App ID
* **provisioningState**: 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The current state of orchestratorInstance resource.
* **resourceGuid**: string (ReadOnly): Resource guid.

## OrchestratorResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SubnetDetails
### Properties
* **id**: string: subnet arm resource id

