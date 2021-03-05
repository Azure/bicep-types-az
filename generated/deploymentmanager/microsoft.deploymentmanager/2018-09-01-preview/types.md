# Microsoft.DeploymentManager @ 2018-09-01-preview

## Resource Microsoft.DeploymentManager/artifactSources@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ArtifactSourceProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeploymentManager/artifactSources' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/rollouts@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RolloutRequestProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeploymentManager/rollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceTopologyResourceProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeploymentManager/serviceTopologies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies/services@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceResourceProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeploymentManager/serviceTopologies/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceUnitResourceProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/steps@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
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
* **stepGroups**: Step[] (Required)
* **targetServiceTopologyId**: string (Required)

## Step
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
### WaitStepProperties
#### Properties
* **attributes**: WaitStepAttributes
* **stepType**: 'Wait' (Required)


## WaitStepProperties
### Properties
* **attributes**: WaitStepAttributes
* **stepType**: 'Wait' (Required)

## WaitStepAttributes
### Properties
* **duration**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

