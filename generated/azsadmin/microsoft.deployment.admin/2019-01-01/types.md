# Microsoft.Deployment.Admin @ 2019-01-01

## Resource Microsoft.Deployment.Admin/locations/fileContainers@2019-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FileContainerBody
* **type**: 'Microsoft.Deployment.Admin/locations/fileContainers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Deployment.Admin/locations/productPackages@2019-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProductPackageBody
* **type**: 'Microsoft.Deployment.Admin/locations/productPackages' (ReadOnly, DeployTimeConstant)

## FileContainerBody
### Properties
* **error**: ErrorInfo (ReadOnly)
* **fileContainerId**: string (ReadOnly)
* **postCopyAction**: 'None' | 'Unzip'
* **provisioningState**: string (ReadOnly)
* **sourceUri**: string
* **uri**: string (ReadOnly)

## ErrorInfo
### Properties
* **code**: string (ReadOnly)
* **details**: ErrorInfo[] (ReadOnly)
* **message**: string (ReadOnly)

## ProductPackageBody
### Properties
* **fileContainerId**: string
* **isDeployable**: bool (ReadOnly)
* **isUpdatable**: bool (ReadOnly)
* **productDeploymentId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)

