# Microsoft.Deployment.Admin @ 2018-07-01

## Resource Microsoft.Deployment.Admin/locations/fileContainers@2018-07-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileContainerBodyOrFileContainerAdminProperties](#filecontainerbodyorfilecontaineradminproperties): Specifies the file container body
* **type**: 'Microsoft.Deployment.Admin/locations/fileContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Deployment.Admin/locations/productPackages@2018-07-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductPackageBodyOrProductPackageProperties](#productpackagebodyorproductpackageproperties): Specifies the product package
* **type**: 'Microsoft.Deployment.Admin/locations/productPackages' (ReadOnly, DeployTimeConstant): The resource type

## ErrorInfo
### Properties
* **code**: string: The error code.
* **details**: [ErrorInfo](#errorinfo)[]: The detailed error messages.
* **message**: string: The error message.

## FileContainerBodyOrFileContainerAdminProperties
### Properties
* **error**: [ErrorInfo](#errorinfo) (ReadOnly): The error response message.
* **fileContainerId**: string (ReadOnly): File container resource identifier containing product manifest.
* **postCopyAction**: 'None' | 'Unzip' | string: Specifies the file post copy action.
* **provisioningState**: string (ReadOnly): Provisioning state of the resource.
* **sourceUri**: string: Specifies The remote file location.
* **uri**: string (ReadOnly): The file or container Uri. This is read-only property; a user cannot set it.

## ProductPackageBodyOrProductPackageProperties
### Properties
* **fileContainerId**: string: Specifies the file container.
* **isDeployable**: bool (ReadOnly): Value indicating whether the package is applicable for deployment.
* **isUpdatable**: bool (ReadOnly): Value indicating whether the package is applicable for update.
* **productDeploymentId**: string (ReadOnly): The identifier of product deployment; null if this version is not installed.
* **provisioningState**: string (ReadOnly): Provisioning state of the resource.

