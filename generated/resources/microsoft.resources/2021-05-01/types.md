# Microsoft.Resources @ 2021-05-01

## Resource Microsoft.Resources/templateSpecs@2021-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the Template Spec. It cannot be changed after Template Spec creation. It must be one of the supported Azure locations.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TemplateSpecProperties](#templatespecproperties): Template Spec properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TemplateSpecTags](#templatespectags): Resource tags.
* **type**: 'Microsoft.Resources/templateSpecs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/templateSpecs/versions@2021-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the Template Spec Version. It must match the location of the parent Template Spec.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TemplateSpecVersionProperties](#templatespecversionproperties) (Required): Template Spec Version properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TemplateSpecVersionTags](#templatespecversiontags): Resource tags.
* **type**: 'Microsoft.Resources/templateSpecs/versions' (ReadOnly, DeployTimeConstant): The resource type

## TemplateSpecProperties
### Properties
* **description**: string: Template Spec description.
* **displayName**: string: Template Spec display name.
* **metadata**: any: Any object
* **versions**: [TemplateSpecPropertiesVersions](#templatespecpropertiesversions) (ReadOnly): High-level information about the versions within this Template Spec. The keys are the version names. Only populated if the $expand query parameter is set to 'versions'.

## TemplateSpecPropertiesVersions
### Properties
### Additional Properties
* **Additional Properties Type**: [TemplateSpecVersionInfo](#templatespecversioninfo)

## TemplateSpecVersionInfo
### Properties
* **description**: string (ReadOnly): Template Spec version description.
* **timeCreated**: string (ReadOnly): The timestamp of when the version was created.
* **timeModified**: string (ReadOnly): The timestamp of when the version was last modified.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TemplateSpecTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateSpecVersionProperties
### Properties
* **description**: string: Template Spec version description.
* **linkedTemplates**: [LinkedTemplateArtifact](#linkedtemplateartifact)[]: An array of linked template artifacts.
* **mainTemplate**: any: Any object
* **metadata**: any: Any object
* **uiFormDefinition**: any: Any object

## LinkedTemplateArtifact
### Properties
* **path**: string (Required): A filesystem safe relative path of the artifact.
* **template**: any (Required): Any object

## TemplateSpecVersionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

