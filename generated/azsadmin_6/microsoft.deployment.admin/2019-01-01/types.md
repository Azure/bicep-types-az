# Microsoft.Deployment.Admin @ 2019-01-01

## Resource Microsoft.Deployment.Admin/locations@2019-01-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Entity tag of the resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: 'global' (Required, DeployTimeConstant): The resource name
* **properties**: [LocationAdminProperties](#locationadminproperties) (ReadOnly): Location Properties
* **type**: 'Microsoft.Deployment.Admin/locations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Deployment.Admin/locations/actionPlans@2019-01-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Entity tag of the resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionPlanAdminProperties](#actionplanadminproperties) (ReadOnly): Action Plan Properties
* **type**: 'Microsoft.Deployment.Admin/locations/actionPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Deployment.Admin/locations/actionPlans/operations@2019-01-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Entity tag of the resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionPlanOperationAdminProperties](#actionplanoperationadminproperties) (ReadOnly): Action Plan Properties
* **type**: 'Microsoft.Deployment.Admin/locations/actionPlans/operations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Deployment.Admin/locations/fileContainers@2019-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileContainerBodyOrFileContainerAdminProperties](#filecontainerbodyorfilecontaineradminproperties): Specifies the file container body
* **type**: 'Microsoft.Deployment.Admin/locations/fileContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Deployment.Admin/locations/productDeployments@2019-01-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): entity tag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductDeploymentsProperties](#productdeploymentsproperties) (ReadOnly): Product deployment resource properties
* **type**: 'Microsoft.Deployment.Admin/locations/productDeployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Deployment.Admin/locations/productPackages@2019-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductPackageBodyOrProductPackageProperties](#productpackagebodyorproductpackageproperties): Specifies the product package
* **type**: 'Microsoft.Deployment.Admin/locations/productPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Deployment.Admin/locations/productPackages/secrets@2019-01-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductSecretProperties](#productsecretproperties) (ReadOnly): Properties of a product secret.
* **type**: 'Microsoft.Deployment.Admin/locations/productPackages/secrets' (ReadOnly, DeployTimeConstant): The resource type

## ActionPlanAdminProperties
### Properties
* **actionPlanInstanceId**: string: Action plan instance identifier
* **actionPlanUri**: string: Action plan uri
* **blobContainerName**: string: Blob container name storing the deployment data
* **endTime**: string: The deployment end time
* **error**: [ExtendedErrorInfo](#extendederrorinfo): Error Information
* **parameters**: [JTokenString](#jtokenstring): The deployment parameters in JToken format
* **provisioningState**: string: The provisioning state
* **resourceGroupName**: string: The target resource group name
* **startTime**: string: The deployment start time
* **subscriptionId**: string: The target subscription identifier

## ActionPlanOperationAdminProperties
### Properties
* **actionPlanInstanceId**: string: Action plan instance identifier
* **actionPlanOperationId**: string: Action plan operation identifier
* **blobContainerName**: string: Blob container name storing the deployment data
* **description**: string: The operation description
* **endTime**: string: The deployment end time
* **error**: [ExtendedErrorInfo](#extendederrorinfo): Error Information
* **outputs**: any: The action plan operation outputs in JToken format
* **parameters**: any: The deployment parameters in JToken format
* **provisioningState**: string: The provisioning state
* **startTime**: string: The deployment start time
* **subscriptionId**: string: The target subscription identifier
* **title**: string: The operation title
* **type**: string: The action plan operation type

## DeploymentInfo
### Properties
* **actionPlanInstanceResourceId**: string: The identifier of the latest action plan instance resource.
* **eTag**: string: entity tag
* **parameters**: string: The latest deployment parameters as JToken
* **version**: string: The product version

## ErrorDefinition
### Properties
* **code**: string (ReadOnly): Service specific error code which serves as the substatus for the HTTP error code.
* **details**: [ErrorDefinition](#errordefinition)[] (ReadOnly): Internal error details.
* **message**: string (ReadOnly): Description of the error.

## ErrorInfo
### Properties
* **code**: string: The error code.
* **details**: [ErrorInfo](#errorinfo)[]: The detailed error messages.
* **message**: string: The error message.

## ExtendedErrorInfo
### Properties
* **error**: [ErrorDefinition](#errordefinition): The error details.

## ExternalAccessInfo
### Properties
* **expirationTime**: string: The deployment start time
* **principalId**: string: The object identifier of the user, group or service principal that have access to resource provider subscription.

## FileContainerBodyOrFileContainerAdminProperties
### Properties
* **error**: [ErrorInfo](#errorinfo) (ReadOnly): The error response message.
* **fileContainerId**: string (ReadOnly): File container resource identifier containing product manifest.
* **postCopyAction**: 'None' | 'Unzip' | string: Specifies the file post copy action.
* **provisioningState**: string (ReadOnly): Provisioning state of the resource.
* **sourceUri**: string: Specifies The remote file location.
* **uri**: string (ReadOnly): The file or container Uri. This is read-only property; a user cannot set it.

## JTokenString
### Properties
* **value**: string: Parameters as JToken string

## LocationAdminProperties
### Properties
* **location**: string: the location name

## ProductDeploymentsInternalState
### Properties
* **externalAccessRoleAssignmentId**: string: The current external access role assignment identifier
* **intermediateVaultId**: string: The intermediate vault resource identifier
* **intermediateVaultUri**: string: The intermediate vault Uri.
* **jobId**: string: The latest deployment job identifier

## ProductDeploymentsProperties
### Properties
* **deployment**: [DeploymentInfo](#deploymentinfo): The current deployment information
* **error**: [ExtendedErrorInfo](#extendederrorinfo): Error Information
* **externalAccess**: [ExternalAccessInfo](#externalaccessinfo): Resource provider secret rotation information
* **internalState**: [ProductDeploymentsInternalState](#productdeploymentsinternalstate): Product deployment resource internal state
* **lastSuccessfulDeployment**: [DeploymentInfo](#deploymentinfo): The last successful deployment information
* **productId**: string: The product identifier
* **provisioningState**: string: The provisioning state
* **secretRotation**: [SecretRotationInfo](#secretrotationinfo): Resource provider secret rotation information
* **status**: 'BootstrapFailed' | 'BootstrapSucceeded' | 'Bootstrapping' | 'Deploying' | 'DeploymentFailed' | 'DeploymentSucceeded' | 'Migrated' | 'None' | 'RemoveFailed' | 'Removing' | 'SecretRotationFailed' | 'SecretRotationInProgress' | 'SecretRotationSucceeded' | 'UpdateFailed' | 'UpdateSucceeded' | 'Updating' | string: Status of the product deployment.
* **subscriptionId**: string: The product subscription identifier

## ProductPackageBodyOrProductPackageProperties
### Properties
* **fileContainerId**: string: Specifies the file container.
* **isDeployable**: bool (ReadOnly): Value indicating whether the package is applicable for deployment.
* **isUpdatable**: bool (ReadOnly): Value indicating whether the package is applicable for update.
* **productDeploymentId**: string (ReadOnly): The identifier of product deployment; null if this version is not installed.
* **provisioningState**: string (ReadOnly): Provisioning state of the resource.

## ProductSecretProperties
### Properties
* **description**: string: The secret description.
* **expiresAfter**: string: The expiration period of the secret (in ISO8601 format).
* **provisioningState**: string: Provisioning state of the resource.
* **secretDescriptor**: [SecretDescriptor](#secretdescriptor): The secret type-specific descriptor.
* **secretKind**: 'AdHoc' | 'Certificate' | 'Password' | 'StorageAccount' | 'SymmetricKey' | string: Specifies the secret kind.
* **secretState**: [SecretState](#secretstate): The secret state.

## SecretDescriptor
### Properties
* **allowedCharacters**: string: The allowed characters in the password
* **alternativeDnsNames**: string[]: Alternative DNS Names.
* **alternativeIpAddresses**: string[]: The list of alternative IP addresses.
* **keyLength**: int: The key length.
* **passwordLength**: int: The minimum password length is 8 characters, and the maximum password length is 128 characters.
* **passwordValidationRegex**: string: Password validation regular expression.
* **rotationStatus**: 'Complete' | 'None' | 'PlantNewSak' | 'RotateInactiveSak' | string: The storage account key secret rotation status.
* **secondaryKeyIsActive**: bool: A value indicating whether the secondary or primary storage account key is active as a secret.
* **subject**: string: Certificate's subject

## SecretRotationInfo
### Properties
* **secretRotationPlanInstanceResourceId**: string: The identifier of the latest secret rotation plan instance resource.

## SecretState
### Properties
* **expirationDate**: string: The secret expiration date.
* **rotationStatus**: 'Complete' | 'InProgress' | 'None' | string: the secret rotation status.
* **status**: 'Deployed' | 'NotUploaded' | 'Uploaded' | string: The secret status.

