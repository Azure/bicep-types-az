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
* **stepGroups**: StepGroup[] (Required)
* **targetServiceTopologyId**: string (Required)

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

## ServiceUnitArtifacts
### Properties
* **parametersArtifactSourceRelativePath**: string
* **parametersUri**: string
* **templateArtifactSourceRelativePath**: string
* **templateUri**: string

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

