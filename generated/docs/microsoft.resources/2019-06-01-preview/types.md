# Microsoft.Resources @ 2019-06-01-preview

## Microsoft.Resources/templateSpecs/versions
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TemplateSpecVersionProperties (Required)
* **systemData**: systemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/templateSpecs/versions' (ReadOnly, DeployTimeConstant)

## TemplateSpecVersionProperties
### Properties
* **artifacts**: TemplateSpecArtifact[]
* **description**: string
* **template**: any

## TemplateSpecArtifact
* **Discriminator**: kind
### Base Properties
* **path**: string (Required)
### template
#### Properties
* **kind**: 'template' (Required)
* **template**: any (Required)


## template
### Properties
* **kind**: 'template' (Required)
* **template**: any (Required)

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Resources/templateSpecs
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TemplateSpecProperties
* **systemData**: systemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Resources/templateSpecs' (ReadOnly, DeployTimeConstant)

## TemplateSpecProperties
### Properties
* **description**: string
* **displayName**: string
* **versions**: Dictionary<string,TemplateSpecVersionInfo> (ReadOnly)

## Dictionary<string,TemplateSpecVersionInfo>
### Additional Properties
* **Additional Properties Type**: TemplateSpecVersionInfo

## TemplateSpecVersionInfo
### Properties
* **description**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)
* **timeModified**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

