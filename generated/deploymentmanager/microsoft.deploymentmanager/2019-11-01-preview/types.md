# Microsoft.DeploymentManager @ 2019-11-01-preview

## Resource Microsoft.DeploymentManager/artifactSources@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ArtifactSourceProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeploymentManager/artifactSources' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/rollouts@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RolloutRequestProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeploymentManager/rollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceTopologyResourceProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeploymentManager/serviceTopologies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies/services@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceResourceProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeploymentManager/serviceTopologies/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceUnitResourceProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/steps@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StepProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeploymentManager/steps' (ReadOnly, DeployTimeConstant)

## ArtifactSourceProperties
### Properties
* **artifactRoot**: string
* **authentication**: Authentication (Required)
* **sourceType**: string (Required)

## Authentication
* **Discriminator**: type

### Base Properties
### SasAuthentication
#### Properties
* **properties**: SasProperties
* **type**: 'Sas' (Required)


## SasAuthentication
### Properties
* **properties**: SasProperties
* **type**: 'Sas' (Required)

## SasProperties
### Properties
* **sasUri**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Identity
### Properties
* **identityIds**: string[] (Required)
* **type**: string (Required)

## RolloutRequestProperties
### Properties
* **artifactSourceId**: string
* **buildVersion**: string (Required)
* **operationInfo**: RolloutOperationInfo (ReadOnly)
* **services**: Service[] (ReadOnly)
* **status**: string (ReadOnly)
* **stepGroups**: StepGroup[] (Required)
* **targetServiceTopologyId**: string (Required)
* **totalRetryAttempts**: int (ReadOnly)

## RolloutOperationInfo
### Properties
* **endTime**: string (ReadOnly)
* **error**: CloudErrorBody (ReadOnly)
* **retryAttempt**: int (ReadOnly)
* **skipSucceededOnRetry**: bool (ReadOnly)
* **startTime**: string (ReadOnly)

## CloudErrorBody
### Properties
* **code**: string (ReadOnly)
* **details**: CloudErrorBody[] (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## Service
### Properties
* **name**: string (ReadOnly)
* **serviceUnits**: ServiceUnit[] (ReadOnly)
* **targetLocation**: string (ReadOnly)
* **targetSubscriptionId**: string (ReadOnly)

## ServiceUnit
### Properties
* **artifacts**: ServiceUnitArtifacts (ReadOnly)
* **name**: string (ReadOnly)
* **steps**: RolloutStep[] (ReadOnly)
* **targetResourceGroup**: string (ReadOnly)

## ServiceUnitArtifacts
### Properties
* **parametersArtifactSourceRelativePath**: string
* **parametersUri**: string
* **templateArtifactSourceRelativePath**: string
* **templateUri**: string

## RolloutStep
### Properties
* **messages**: Message[] (ReadOnly)
* **name**: string (ReadOnly)
* **operationInfo**: StepOperationInfo (ReadOnly)
* **resourceOperations**: ResourceOperation[] (ReadOnly)
* **status**: string (ReadOnly)
* **stepGroup**: string (ReadOnly)

## Message
### Properties
* **message**: string (ReadOnly)
* **timeStamp**: string (ReadOnly)

## StepOperationInfo
### Properties
* **correlationId**: string (ReadOnly)
* **deploymentName**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **error**: CloudErrorBody (ReadOnly)
* **lastUpdatedTime**: string (ReadOnly)
* **startTime**: string (ReadOnly)

## ResourceOperation
### Properties
* **operationId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **resourceName**: string (ReadOnly)
* **resourceType**: string (ReadOnly)
* **statusCode**: string (ReadOnly)
* **statusMessage**: string (ReadOnly)

## StepGroup
### Properties
* **dependsOnStepGroups**: string[]
* **deploymentTargetId**: string (Required)
* **name**: string (Required)
* **postDeploymentSteps**: PrePostStep[]
* **preDeploymentSteps**: PrePostStep[]

## PrePostStep
### Properties
* **stepId**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceTopologyResourceProperties
### Properties
* **artifactSourceId**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceResourceProperties
### Properties
* **targetLocation**: string (Required)
* **targetSubscriptionId**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceUnitResourceProperties
### Properties
* **artifacts**: ServiceUnitArtifacts
* **targetResourceGroup**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StepProperties
* **Discriminator**: stepType

### Base Properties
### HealthCheckStepProperties
#### Properties
* **attributes**: HealthCheckStepAttributes (Required)
* **stepType**: 'HealthCheck' (Required)

### WaitStepProperties
#### Properties
* **attributes**: WaitStepAttributes (Required)
* **stepType**: 'Wait' (Required)


## HealthCheckStepProperties
### Properties
* **attributes**: HealthCheckStepAttributes (Required)
* **stepType**: 'HealthCheck' (Required)

## HealthCheckStepAttributes
* **Discriminator**: type

### Base Properties
* **healthyStateDuration**: string (Required)
* **maxElasticDuration**: string
* **waitDuration**: string
### RestHealthCheckStepAttributes
#### Properties
* **properties**: RestParameters
* **type**: 'REST' (Required)


## RestHealthCheckStepAttributes
### Properties
* **properties**: RestParameters
* **type**: 'REST' (Required)

## RestParameters
### Properties
* **healthChecks**: RestHealthCheck[] (Required)

## RestHealthCheck
### Properties
* **name**: string (Required)
* **request**: RestRequest (Required)
* **response**: RestResponse

## RestRequest
### Properties
* **authentication**: RestRequestAuthentication (Required)
* **uri**: string (Required)

## RestRequestAuthentication
* **Discriminator**: type

### Base Properties
### ApiKeyAuthentication
#### Properties
* **name**: string (Required)
* **type**: 'ApiKey' (Required)
* **value**: string (Required)

### RolloutIdentityAuthentication
#### Properties
* **type**: 'RolloutIdentity' (Required)


## ApiKeyAuthentication
### Properties
* **name**: string (Required)
* **type**: 'ApiKey' (Required)
* **value**: string (Required)

## RolloutIdentityAuthentication
### Properties
* **type**: 'RolloutIdentity' (Required)

## RestResponse
### Properties
* **regex**: RestResponseRegex
* **successStatusCodes**: string[]

## RestResponseRegex
### Properties
* **matches**: string[]

## WaitStepProperties
### Properties
* **attributes**: WaitStepAttributes (Required)
* **stepType**: 'Wait' (Required)

## WaitStepAttributes
### Properties
* **duration**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

