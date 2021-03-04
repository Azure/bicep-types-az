# Microsoft.Solutions @ 2018-06-01

## Resource Microsoft.Solutions/applicationDefinitions@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationDefinitionProperties (Required)
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.Solutions/applicationDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Solutions/applications@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: string (Required)
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: Plan
* **properties**: ApplicationProperties (Required)
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.Solutions/applications' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## ApplicationDefinitionProperties
### Properties
* **artifacts**: ApplicationArtifact[]
* **authorizations**: ApplicationProviderAuthorization[] (Required)
* **description**: string
* **displayName**: string
* **isEnabled**: string
* **packageFileUri**: string

## ApplicationArtifact
### Properties
* **name**: string
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
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

