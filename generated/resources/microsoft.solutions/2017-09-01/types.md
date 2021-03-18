# Microsoft.Solutions @ 2017-09-01

## Resource Microsoft.Solutions/applicationDefinitions@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationDefinitionProperties](#applicationdefinitionproperties) (Required)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Solutions/applicationDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Solutions/applications@2017-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **kind**: string (Required)
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: [Plan](#plan)
* **properties**: [ApplicationProperties](#applicationproperties) (Required)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Solutions/applications' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## ApplicationDefinitionProperties
### Properties
* **artifacts**: [ApplicationArtifact](#applicationartifact)[]
* **authorizations**: [ApplicationProviderAuthorization](#applicationproviderauthorization)[] (Required)
* **createUiDefinition**: any
* **description**: string
* **displayName**: string
* **isEnabled**: string
* **lockLevel**: 'CanNotDelete' | 'None' | 'ReadOnly' (Required)
* **mainTemplate**: any
* **packageFileUri**: string

## ApplicationArtifact
### Properties
* **name**: string
* **type**: 'Custom' | 'Template'
* **uri**: string

## ApplicationProviderAuthorization
### Properties
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **model**: string
* **name**: string (Required)
* **size**: string
* **tier**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Plan
### Properties
* **name**: string (Required)
* **product**: string (Required)
* **promotionCode**: string
* **publisher**: string (Required)
* **version**: string (Required)

## ApplicationProperties
### Properties
* **applicationDefinitionId**: string
* **managedResourceGroupId**: string (Required)
* **outputs**: any (ReadOnly)
* **parameters**: any
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **uiDefinitionUri**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

