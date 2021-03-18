# Microsoft.Resources @ 2019-06-01-preview

## Resource Microsoft.Resources/templateSpecs@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TemplateSpecProperties](#templatespecproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TemplateSpecTags](#templatespectags)
* **type**: 'Microsoft.Resources/templateSpecs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Resources/templateSpecs/versions@2019-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TemplateSpecVersionProperties](#templatespecversionproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TemplateSpecVersionTags](#templatespecversiontags)
* **type**: 'Microsoft.Resources/templateSpecs/versions' (ReadOnly, DeployTimeConstant)

## TemplateSpecProperties
### Properties
* **description**: string
* **displayName**: string
* **versions**: [TemplateSpecPropertiesVersions](#templatespecpropertiesversions) (ReadOnly)

## TemplateSpecPropertiesVersions
### Properties
### Additional Properties
* **Additional Properties Type**: [TemplateSpecVersionInfo](#templatespecversioninfo)

## TemplateSpecVersionInfo
### Properties
* **description**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)
* **timeModified**: string (ReadOnly)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## TemplateSpecTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateSpecVersionProperties
### Properties
* **artifacts**: [TemplateSpecArtifact](#templatespecartifact)[]
* **description**: string
* **template**: any

## TemplateSpecArtifact
* **Discriminator**: kind

### Base Properties
* **path**: string (Required)
### TemplateSpecTemplateArtifact
#### Properties
* **kind**: 'template' (Required)
* **template**: any (Required)


## TemplateSpecTemplateArtifact
### Properties
* **kind**: 'template' (Required)
* **template**: any (Required)

## TemplateSpecVersionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

