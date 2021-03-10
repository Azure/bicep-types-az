# Microsoft.DelegatedNetwork @ 2020-08-08-preview

## Resource Microsoft.DelegatedNetwork/controller@2020-08-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DelegatedControllerProperties](#delegatedcontrollerproperties) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DelegatedNetwork/controller' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DelegatedNetwork/delegatedSubnets@2020-08-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DelegatedSubnetProperties](#delegatedsubnetproperties) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DelegatedNetwork/delegatedSubnets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DelegatedNetwork/orchestrators@2020-08-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [OrchestratorIdentity](#orchestratoridentity)
* **kind**: string (Required)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [OrchestratorResourceProperties](#orchestratorresourceproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DelegatedNetwork/orchestrators' (ReadOnly, DeployTimeConstant)

## DelegatedControllerProperties
### Properties
* **dncAppId**: string (ReadOnly)
* **dncEndpoint**: string (ReadOnly)
* **dncTenantId**: string (ReadOnly)
* **provisioningState**: 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DelegatedSubnetProperties
### Properties
* **controllerDetails**: [controllerDetails](#controllerdetails)
* **provisioningState**: 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **resourceGuid**: string (ReadOnly)
* **subnetDetails**: [subnetDetails](#subnetdetails)

## controllerDetails
### Properties
* **id**: string

## subnetDetails
### Properties
* **id**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OrchestratorIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## OrchestratorResourceProperties
### Properties
* **apiServerEndpoint**: string
* **clusterRootCA**: string
* **controllerDetails**: [ControllerDetails](#controllerdetails) (Required)
* **orchestratorAppId**: string
* **orchestratorTenantId**: string
* **provisioningState**: 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **resourceGuid**: string (ReadOnly)

## ControllerDetails
### Properties
* **id**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

