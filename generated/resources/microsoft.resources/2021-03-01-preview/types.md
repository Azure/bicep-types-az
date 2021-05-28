# Microsoft.Resources @ 2021-03-01-preview

## Resource Microsoft.Resources/templateSpecs@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the Template Spec. It cannot be changed after Template Spec creation. It must be one of the supported Azure locations.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TemplateSpecProperties](#templatespecproperties): Template Spec properties.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Resources/templateSpecs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Resources/templateSpecs/versions@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the Template Spec Version. It must match the location of the parent Template Spec.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TemplateSpecVersionProperties](#templatespecversionproperties) (Required): Template Spec Version properties.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Resources/templateSpecs/versions' (ReadOnly, DeployTimeConstant): The resource type

## TemplateSpecProperties
### Properties
* **description**: string: Template Spec description.
* **displayName**: string: Template Spec display name.
* **metadata**: any: The Template Spec metadata. Metadata is an open-ended object and is typically a collection of key-value pairs.
* **versions**: [Dictionary<string,TemplateSpecVersionInfo>](#dictionarystringtemplatespecversioninfo) (ReadOnly): High-level information about the versions within this Template Spec. The keys are the version names. Only populated if the $expand query parameter is set to 'versions'.

## Dictionary<string,TemplateSpecVersionInfo>
### Properties
### Additional Properties
* **Additional Properties Type**: [TemplateSpecVersionInfo](#templatespecversioninfo)

## TemplateSpecVersionInfo
### Properties
* **description**: string (ReadOnly): Template Spec version description.
* **timeCreated**: string (ReadOnly): The timestamp of when the version was created.
* **timeModified**: string (ReadOnly): The timestamp of when the version was last modified.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TemplateSpecVersionProperties
### Properties
* **description**: string: Template Spec version description.
* **linkedTemplates**: [LinkedTemplateArtifact](#linkedtemplateartifact)[]: An array of linked template artifacts.
* **mainTemplate**: any: The main Azure Resource Manager template content.
* **metadata**: any: The version metadata. Metadata is an open-ended object and is typically a collection of key-value pairs.
* **uiFormDefinition**: any: The Azure Resource Manager template UI definition content.

## LinkedTemplateArtifact
### Properties
* **path**: string (Required): A filesystem safe relative path of the artifact.
* **template**: any (Required): The Azure Resource Manager template.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

