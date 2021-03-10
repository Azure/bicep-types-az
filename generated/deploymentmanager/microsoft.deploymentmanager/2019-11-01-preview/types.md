# Microsoft.DeploymentManager @ 2019-11-01-preview

## Resource Microsoft.DeploymentManager/artifactSources@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ArtifactSourceProperties](#artifactsourceproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DeploymentManager/artifactSources' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/rollouts@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity) (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RolloutRequestProperties](#rolloutrequestproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DeploymentManager/rollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServiceTopologyResourceProperties](#servicetopologyresourceproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DeploymentManager/serviceTopologies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies/services@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServiceResourceProperties](#serviceresourceproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DeploymentManager/serviceTopologies/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServiceUnitResourceProperties](#serviceunitresourceproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/steps@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StepProperties](#stepproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.DeploymentManager/steps' (ReadOnly, DeployTimeConstant)

## ArtifactSourceProperties
### Properties
* **artifactRoot**: string
* **authentication**: [Authentication](#authentication) (Required)
* **sourceType**: string (Required)

## Authentication
* **Discriminator**: type

### Base Properties
### SasAuthentication
#### Properties
* **properties**: [SasProperties](#sasproperties)
* **type**: 'Sas' (Required)


## SasAuthentication
### Properties
* **properties**: [SasProperties](#sasproperties)
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
* **operationInfo**: [RolloutOperationInfo](#rolloutoperationinfo) (ReadOnly)
* **services**: [Service](#service)[] (ReadOnly)
* **status**: string (ReadOnly)
* **stepGroups**: [StepGroup](#stepgroup)[] (Required)
* **targetServiceTopologyId**: string (Required)
* **totalRetryAttempts**: int (ReadOnly)

## RolloutOperationInfo
### Properties
* **endTime**: string (ReadOnly)
* **error**: [CloudErrorBody](#clouderrorbody) (ReadOnly)
* **retryAttempt**: int (ReadOnly)
* **skipSucceededOnRetry**: bool (ReadOnly)
* **startTime**: string (ReadOnly)

## CloudErrorBody
### Properties
* **code**: string (ReadOnly)
* **details**: [CloudErrorBody](#clouderrorbody)[] (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## Service
### Properties
* **name**: string (ReadOnly)
* **serviceUnits**: [ServiceUnit](#serviceunit)[] (ReadOnly)
* **targetLocation**: string (ReadOnly)
* **targetSubscriptionId**: string (ReadOnly)

## ServiceUnit
### Properties
* **artifacts**: [ServiceUnitArtifacts](#serviceunitartifacts) (ReadOnly)
* **deploymentMode**: 'Complete' | 'Incremental' (ReadOnly)
* **name**: string (ReadOnly)
* **steps**: [RolloutStep](#rolloutstep)[] (ReadOnly)
* **targetResourceGroup**: string (ReadOnly)

## ServiceUnitArtifacts
### Properties
* **parametersArtifactSourceRelativePath**: string
* **parametersUri**: string
* **templateArtifactSourceRelativePath**: string
* **templateUri**: string

## RolloutStep
### Properties
* **messages**: [Message](#message)[] (ReadOnly)
* **name**: string (ReadOnly)
* **operationInfo**: [StepOperationInfo](#stepoperationinfo) (ReadOnly)
* **resourceOperations**: [ResourceOperation](#resourceoperation)[] (ReadOnly)
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
* **error**: [CloudErrorBody](#clouderrorbody) (ReadOnly)
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
* **postDeploymentSteps**: [PrePostStep](#prepoststep)[]
* **preDeploymentSteps**: [PrePostStep](#prepoststep)[]

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
* **artifacts**: [ServiceUnitArtifacts](#serviceunitartifacts)
* **deploymentMode**: 'Complete' | 'Incremental' (Required)
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
* **attributes**: [HealthCheckStepAttributes](#healthcheckstepattributes) (Required)
* **stepType**: 'HealthCheck' (Required)

### WaitStepProperties
#### Properties
* **attributes**: [WaitStepAttributes](#waitstepattributes) (Required)
* **stepType**: 'Wait' (Required)


## HealthCheckStepProperties
### Properties
* **attributes**: [HealthCheckStepAttributes](#healthcheckstepattributes) (Required)
* **stepType**: 'HealthCheck' (Required)

## HealthCheckStepAttributes
* **Discriminator**: type

### Base Properties
* **healthyStateDuration**: string (Required)
* **maxElasticDuration**: string
* **waitDuration**: string
### RestHealthCheckStepAttributes
#### Properties
* **properties**: [RestParameters](#restparameters)
* **type**: 'REST' (Required)


## RestHealthCheckStepAttributes
### Properties
* **properties**: [RestParameters](#restparameters)
* **type**: 'REST' (Required)

## RestParameters
### Properties
* **healthChecks**: [RestHealthCheck](#resthealthcheck)[] (Required)

## RestHealthCheck
### Properties
* **name**: string (Required)
* **request**: [RestRequest](#restrequest) (Required)
* **response**: [RestResponse](#restresponse)

## RestRequest
### Properties
* **authentication**: [RestRequestAuthentication](#restrequestauthentication) (Required)
* **method**: 'GET' | 'POST' (Required)
* **uri**: string (Required)

## RestRequestAuthentication
* **Discriminator**: type

### Base Properties
### ApiKeyAuthentication
#### Properties
* **in**: 'Header' | 'Query' (Required)
* **name**: string (Required)
* **type**: 'ApiKey' (Required)
* **value**: string (Required)

### RolloutIdentityAuthentication
#### Properties
* **type**: 'RolloutIdentity' (Required)


## ApiKeyAuthentication
### Properties
* **in**: 'Header' | 'Query' (Required)
* **name**: string (Required)
* **type**: 'ApiKey' (Required)
* **value**: string (Required)

## RolloutIdentityAuthentication
### Properties
* **type**: 'RolloutIdentity' (Required)

## RestResponse
### Properties
* **regex**: [RestResponseRegex](#restresponseregex)
* **successStatusCodes**: string[]

## RestResponseRegex
### Properties
* **matches**: string[]
* **matchQuantifier**: 'All' | 'Any'

## WaitStepProperties
### Properties
* **attributes**: [WaitStepAttributes](#waitstepattributes) (Required)
* **stepType**: 'Wait' (Required)

## WaitStepAttributes
### Properties
* **duration**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

