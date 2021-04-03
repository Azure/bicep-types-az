# Microsoft.Portal @ 2020-09-01-preview

## Resource Microsoft.Portal/dashboards@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DashboardProperties](#dashboardproperties): The shared dashboard properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Portal/tenantConfigurations@2020-09-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): Tenant configuration properties.
* **type**: 'Microsoft.Portal/tenantConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## DashboardProperties
### Properties
* **lenses**: [DashboardLens](#dashboardlens)[]: The dashboard lenses.
* **metadata**: [Dictionary<string,Object>](#dictionarystringobject): The dashboard metadata.

## DashboardLens
### Properties
* **metadata**: [Dictionary<string,Object>](#dictionarystringobject): The dashboard len's metadata.
* **order**: int (Required): The lens order.
* **parts**: [DashboardParts](#dashboardparts)[] (Required): The dashboard parts.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardParts
### Properties
* **metadata**: [DashboardPartMetadata](#dashboardpartmetadata): A dashboard part metadata.
* **position**: [schemas:1_position](#schemas1position) (Required): The dashboard's part position.

## DashboardPartMetadata
* **Discriminator**: type
### Base Properties
### Extension/HubsExtension/PartType/MarkdownPart
#### Properties
* **inputs**: any[]: Input to dashboard part.
* **settings**: [schemas:3_settings](#schemas3settings): Markdown part settings.
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required): Markdown part metadata.


## Extension/HubsExtension/PartType/MarkdownPart
### Properties
* **inputs**: any[]: Input to dashboard part.
* **settings**: [schemas:3_settings](#schemas3settings): Markdown part settings.
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required): Markdown part metadata.

## schemas:3_settings
### Properties
* **content**: [schemas:3_settings_content](#schemas3settingscontent): The content of markdown part.

## schemas:3_settings_content
### Properties
* **settings**: [schemas:3_settings_content_settings](#schemas3settingscontentsettings): The setting of the content of markdown part.

## schemas:3_settings_content_settings
### Properties
* **content**: string: The content of the markdown part.
* **markdownSource**: int: The source of the content of the markdown part.
* **markdownUri**: string: The uri of markdown content.
* **subtitle**: string: The subtitle of the markdown part.
* **title**: string: The title of the markdown part.

## schemas:1_position
### Properties
* **colSpan**: int (Required): The dashboard's part column span.
* **metadata**: [Dictionary<string,Object>](#dictionarystringobject): The dashboard part's metadata.
* **rowSpan**: int (Required): The dashboard's part row span.
* **x**: int (Required): The dashboard's part x coordinate.
* **y**: int (Required): The dashboard's part y coordinate.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConfigurationProperties
### Properties
* **enforcePrivateMarkdownStorage**: bool: When flag is set to true Markdown tile will require external storage configuration (URI). The inline content configuration will be prohibited.

