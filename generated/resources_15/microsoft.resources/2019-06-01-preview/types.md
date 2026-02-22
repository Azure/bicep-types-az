# Microsoft.Resources @ 2019-06-01-preview

## Resource Microsoft.Resources/templateSpecs@2019-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the Template Spec. It cannot be changed after Template Spec creation. It must be one of the supported Azure locations.
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TemplateSpecProperties](#templatespecproperties): Template Spec properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TemplateSpecTags](#templatespectags): Resource tags.
* **type**: 'Microsoft.Resources/templateSpecs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/templateSpecs/versions@2019-06-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the Template Spec Version. It must match the location of the parent Template Spec.
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TemplateSpecVersionProperties](#templatespecversionproperties) (Required): Template Spec Version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TemplateSpecVersionTags](#templatespecversiontags): Resource tags.
* **type**: 'Microsoft.Resources/templateSpecs/versions' (ReadOnly, DeployTimeConstant): The resource type

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TemplateSpecArtifact
* **Discriminator**: kind

### Base Properties
* **path**: string (Required): A filesystem safe relative path of the artifact.

### TemplateSpecTemplateArtifact
#### Properties
* **kind**: 'template' (Required): The kind of artifact.
* **template**: any (Required): The Azure Resource Manager template.


## TemplateSpecProperties
### Properties
* **description**: string {maxLength: 4096}: Template Spec description.
* **displayName**: string {maxLength: 64}: Template Spec display name.
* **versions**: [TemplateSpecPropertiesVersions](#templatespecpropertiesversions) (ReadOnly): High-level information about the versions within this Template Spec. The keys are the version names. Only populated if the $expand query parameter is set to 'versions'.

## TemplateSpecPropertiesVersions
### Properties
### Additional Properties
* **Additional Properties Type**: [TemplateSpecVersionInfo](#templatespecversioninfo)

## TemplateSpecTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateSpecVersionInfo
### Properties
* **description**: string (ReadOnly): Template Spec version description.
* **timeCreated**: string (ReadOnly): The timestamp of when the version was created.
* **timeModified**: string (ReadOnly): The timestamp of when the version was last modified.

## TemplateSpecVersionProperties
### Properties
* **artifacts**: [TemplateSpecArtifact](#templatespecartifact)[]: An array of Template Spec artifacts.
* **description**: string {maxLength: 4096}: Template Spec version description.
* **template**: any: The Azure Resource Manager template content.

## TemplateSpecVersionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

